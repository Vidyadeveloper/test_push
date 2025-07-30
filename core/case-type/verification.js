// Case Type: verification
module.exports = {
  "caseType": {
    "id": "verification",
    "label": "Verification"
  },
  "stages": [
    {
      "id": "stage1",
      "label": "Stage 1",
      "steps": [
        {
          "id": "step1",
          "label": "Step 1",
          "status": "pending",
          "view": "summary",
          "type": "manual"
        },
        {
          "id": "onboarding",
          "label": "Onboarding",
          "status": "pending",
          "view": "verification-stage-1-onboarding",
          "type": "manual"
        },
        {
          "id": "document-collection-and-approval",
          "label": "Document Collection and APProval",
          "status": "pending",
          "view": "verification-stage-1-document-collection-and-approval",
          "type": "manual"
        }
      ]
    },
    {
      "id": "verification",
      "label": "Verification",
      "steps": [
        {
          "id": "approval",
          "label": "Approval",
          "status": "completed",
          "view": "verification-verification-approval",
          "type": "manual"
        },
        {
          "id": "onboarding",
          "label": "Onboarding",
          "status": "pending",
          "view": "verification-verification-onboarding",
          "type": "manual"
        }
      ]
    }
  ]
};