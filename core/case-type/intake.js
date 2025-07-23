const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class IntakeCase extends BlazeCase {
  constructor() {
    super(
      "intake",
      "Intake Process",
      [
  {
    "id": "registration",
    "label": "Registration",
    "steps": [
      {
        "id": "personal",
        "label": "Personal",
        "status": "in_progress",
        "view": "intake-registration-personal",
        "type": "manual"
      },
      {
        "id": "relations",
        "label": "Relations",
        "status": "pending_validation",
        "view": "intake-registration-relations",
        "type": "manual"
      },
      {
        "id": "document-collection",
        "label": "Document Collection",
        "status": "pending",
        "view": "intake-process-registration-document-collection",
        "type": "manual"
      }
    ]
  },
  {
    "id": "review",
    "label": "Review",
    "steps": [
      {
        "id": "review_details",
        "label": "Review Details",
        "status": "under_review",
        "type": "manual"
      },
      {
        "id": "finalize_review",
        "label": "Finalize Review",
        "status": "review_completed",
        "type": "manual"
      }
    ]
  },
  {
    "id": "completion",
    "label": "Completion",
    "steps": [
      {
        "id": "close_case",
        "label": "Close Case",
        "status": "completed",
        "type": "manual"
      }
    ]
  }
]
    );
  }
}

module.exports = new IntakeCase();