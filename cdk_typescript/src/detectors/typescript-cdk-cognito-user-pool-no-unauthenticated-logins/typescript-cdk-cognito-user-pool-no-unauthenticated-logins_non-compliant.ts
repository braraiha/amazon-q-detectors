
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=typescript-cdk-cognito-user-pool-no-unauthenticated-logins@v1.0 defects=1}
import {
    CfnIdentityPool
} from 'aws-cdk-lib/aws-cognito';
import { Stack } from 'aws-cdk-lib/core';
import * as cdk from 'aws-cdk-lib';

export class CdkStarterStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Noncompliant: The CfnIdentityPool instantiation doesn't set `allowUnauthenticatedIdentities` to `false`, avoiding potential security risk.
        new CfnIdentityPool(Stack, 'rIdentityPool', {
            allowUnauthenticatedIdentities: true,
        });

    }
}

// {/fact}
