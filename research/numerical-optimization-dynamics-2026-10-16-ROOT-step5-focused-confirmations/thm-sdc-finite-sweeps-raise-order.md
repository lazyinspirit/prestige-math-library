# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: thm-sdc-finite-sweeps-raise-order

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The Statement concludes global order p = min(M,k+1) without explicitly specifying the numerical initial error. Proof 3.1 introduces 'The initial error is e_0=0' without a corresponding stated premise. Exact initialization is the natural intended convention, but it should be stated, or replaced by an O(h^p) initial-error assumption. If arbitrary numerical starting data are admitted literally, y'=0 with numerical initial value different from the exact initial value satisfies the tube and contraction conditions while retaining a nonvanishing grid error.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "95",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-95-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "thm-sdc-finite-sweeps-raise-order",
      "concern": "The Statement concludes global order p = min(M,k+1) without explicitly specifying the numerical initial error. Proof 3.1 introduces 'The initial error is e_0=0' without a corresponding stated premise. Exact initialization is the natural intended convention, but it should be stated, or replaced by an O(h^p) initial-error assumption. If arbitrary numerical starting data are admitted literally, y'=0 with numerical initial value different from the exact initial value satisfies the tube and contraction conditions while retaining a nonvanishing grid error.",
      "severity": "gap-a-reader-closes"
    },
    "reader_digest_group": "k",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "95"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-late-r4-proposals/proposal.json",
    "pointer": "/entries/0",
    "status": "completed-proposal-packet"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-late-r4-proposals/thm-sdc-finite-sweeps-raise-order/evidence.json",
    "pointer": "/consumer_review"
  }
]
