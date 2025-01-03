# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# {fact rule=python-cdk-api-logging-disabled@v1.0 defects=1}
import aws_cdk as cdk
from aws_cdk import aws_apigatewayv2


class APILoggingDisabled(cdk.Stack):

    def api_logging_disabled_noncompliant(self):
        # Noncompliant: logging disabled.
        aws_apigatewayv2.CfnStage(self, 'rHttpApiDefaultStage',
                                  api_id='foo', stage_name='$default',
                                  auto_deploy=True)
# {/fact}
