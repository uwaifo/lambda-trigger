import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { EscrowLambdaStack } from "./lambda-stack";

export class EscrowPipelineStage extends cdk.Stage {
  constructor(scope: Construct, stageName: string, props?: cdk.StageProps) {
    super(scope, stageName, props);

    const lambdaStack = new EscrowLambdaStack(
      this,
      "EscrowLambdaStack",
      stageName
    );
  }
}
