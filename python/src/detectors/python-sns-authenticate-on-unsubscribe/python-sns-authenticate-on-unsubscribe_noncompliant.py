#  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
#  SPDX-License-Identifier: MIT-0

# {fact rule=python-sns-authenticate-on-unsubscribe@v1.0 defects=1}
import boto3

def authenticate_on_subscribe_noncompliant(self, event):
    subscriptions_failed = 0
    for record in event["Records"]:
        message = record["body"]
        if message["Type"] == "SubscriptionConfirmation":
            try:
                topic_arn = message["TopicArn"]
                token = message["Token"]
                sns_client = boto3.client("sns",
                                          region_name=topic_arn.split(":")[3])
                # Noncompliant: Fails to set the AuthenticateOnUnsubscribe argument to True while confirming an SNS subscription.
                sns_client.confirm_subscription(TopicArn=topic_arn,
                                                Token=token)
            except Exception:
                subscriptions_failed += 1
# {/fact}

