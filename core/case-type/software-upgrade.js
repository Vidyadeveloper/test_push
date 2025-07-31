// Case Type: software-upgrade
module.exports = {
  "caseType": {
    "id": "software-upgrade",
    "label": "Software upgrade"
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
          "id": "install",
          "label": "Install",
          "status": "pending",
          "view": "software-upgrade-stage-1-install",
          "type": "manual"
        }
      ]
    },
    {
      "id": "installaion",
      "label": "Installaion",
      "steps": [
        {
          "id": "installaion-approval",
          "label": "Installaion approval",
          "status": "completed",
          "view": "software-upgrade-installaion-installaion-approval",
          "type": "manual"
        }
      ]
    }
  ]
};