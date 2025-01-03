// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=typescript-cdk-enabled-access-logging-for-cloudfront-distribution@v1.0 defects=0}
import {
  Distribution
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Stack } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Compliant: Specifies `logBucket` for logging.
    const logsBucket = new Bucket(Stack, 'rLoggingBucket');
    new Distribution(Stack, 'rDistribution', {
      defaultBehavior: {
        origin: new S3Origin(new Bucket(Stack, 'rOriginBucket')),
      },
      logBucket: logsBucket
    });
  }
}
// {/fact}
