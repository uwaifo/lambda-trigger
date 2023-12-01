import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
  ManualApprovalStep,
} from "aws-cdk-lib/pipelines";
import { EscrowPipelineStage } from "./escrow-stage";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class EscrowApiCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "Pipeline", {
      pipelineName: "EscrowPipeline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub("uwaifo/lambda-trigger", "main"),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });

    //test statge
    const testingStage = pipeline.addStage(
      new EscrowPipelineStage(this, "test", {
        env: { account: "471249635533", region: "us-east-2" },
      })
    );

    testingStage.addPost(
      new ManualApprovalStep("Manual approval before production")
    );

    const prodStage = pipeline.addStage(
      new EscrowPipelineStage(this, "prod", {
        env: { account: "471249635533", region: "us-east-2" },
      })
    );
  }
}
