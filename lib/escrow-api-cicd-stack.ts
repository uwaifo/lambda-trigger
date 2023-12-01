import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class EscrowApiCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, "Pipeline", {
      pipelineName: "EscrowPipeline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub("uwaifo/lambda-trigger", "main"),
        commands: ["npm ci", "npm run build", "npx synth"],
      }),
    });
  }
}
