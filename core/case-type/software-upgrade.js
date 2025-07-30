// Case Type: software-upgrade
module.exports = {
  "caseType": {
    "id": "software-upgrade",
    "label": "Software Upgrade"
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
          "id": "angular-13",
          "label": "Angular 13",
          "status": "completed",
          "view": "software-upgrade-stage-1-angular-13",
          "type": "manual"
        }
      ]
    }
  ]
};