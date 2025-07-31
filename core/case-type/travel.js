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
        },
        {
          "id": "serach-",
          "label": "Serach ",
          "status": "completed",
          "view": "travel-stage-1-serach",
          "type": "manual"
        },
        {
          "id": "mgr-review",
          "label": "Mgr Review",
          "status": "completed",
          "view": "travel-stage-1-mgr-review",
          "type": "manual"
        }
      ]
    }
  ]
};