import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Function, InlineCode, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import path = require("path");

export class EscrowLambdaStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    stageName: string,
    props?: cdk.StackProps
  ) {
    super(scope, id, props);

    new Function(this, "EscrowLambda", {
      runtime: Runtime.NODEJS_18_X,
      handler: "handler.handler",
      code: Code.fromAsset(path.join(__dirname, "lambda")),
      environment: {
        stageName: stageName,
      },
    });
  }
}
