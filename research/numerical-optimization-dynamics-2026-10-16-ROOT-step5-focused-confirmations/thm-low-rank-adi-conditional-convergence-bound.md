# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: thm-low-rank-adi-conditional-convergence-bound

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: Step 3.1 writes: “If R_j=UΣV* is an SVD, then R_jR_j*=UΣ²U*”. Here R_j has shape n×r and r need not equal n, so the full SVD factor Σ is rectangular and Σ² is undefined. The required product is ΣΣ*, whose diagonal contains the squared singular values. The following norm inequality is correct and closes immediately with that product.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "49",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-49-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "thm-low-rank-adi-conditional-convergence-bound",
      "concern": "Step 3.1 writes: “If R_j=UΣV* is an SVD, then R_jR_j*=UΣ²U*”. Here R_j has shape n×r and r need not equal n, so the full SVD factor Σ is rectangular and Σ² is undefined. The required product is ΣΣ*, whose diagonal contains the squared singular values. The following norm inequality is correct and closes immediately with that product.",
      "severity": "gap-a-reader-closes"
    },
    "reader_digest_group": "r",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "49"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-kept-reader-other-high-cycle1/digest.json",
    "pointer": "/confirmed_cases/4",
    "status": "completed-proposal-packet"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-kept-reader-other-high-cycle1/consumer-review.json",
    "pointer": "/current_transitive_consumer_ids"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-kept-reader-other-high-cycle1/consumer-review.json",
    "pointer": "/consumer_rows"
  }
]
