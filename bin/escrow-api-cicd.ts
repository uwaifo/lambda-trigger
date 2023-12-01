#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EscrowApiCicdStack } from '../lib/escrow-api-cicd-stack';

const app = new cdk.App();
new EscrowApiCicdStack(app, 'EscrowApiCicdStack', {
 
   env: { account: '471249635533', region: 'us-east-1' },


 });

app.synth();