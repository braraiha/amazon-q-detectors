// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=typescript-cdk-msk-broker-to-broker-tls@v1.0 defects=0}
import { CfnCluster } from 'aws-cdk-lib/aws-msk';
import { Stack } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
	super(scope, id, props);     
    // Compliant: Enables `inCluster` encryption in transit, ensuring secure communication within the Kafka cluster.
    new CfnCluster(Stack, 'rMsk', {
      clusterName: 'foo',
      kafkaVersion: '2.8.0',
      brokerNodeGroupInfo: {
        clientSubnets: ['bar'],
        instanceType: 'kafka.m5.large'
      },
      numberOfBrokerNodes: 42,
      encryptionInfo: { encryptionInTransit: { inCluster: true } }
    });
  }
}
// {/fact}
