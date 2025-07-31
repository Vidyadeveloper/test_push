// Case Type: travel
module.exports = {
  "caseType": {
    "id": "travel",
    "label": "Travel"
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
          "id": "traval-docs",
          "label": "Traval docs",
          "status": "completed",
          "view": "travel-stage-1-traval-docs",
          "type": "manual"
        }
      ]
    }
  ]
};