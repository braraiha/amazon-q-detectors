# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# {fact rule=terraform-unencrypted-session-manager-logs@v1.0 defects=1}
resource "aws_ssm_document" "session_manager" {
  name           = "EnableSessionManagerLogging"
  document_type  = "Session"
  document_format = "JSON"

  content = jsonencode({
    schemaVersion = "2.2"
    description   = "SSM Session Manager Logging"
    # Noncompliant: Session Manager logs are neither enabled nor encrypted.
    inputs = {
      "kmsKeyId": var.kms_key_id
    }
  })
}
# {/fact}
