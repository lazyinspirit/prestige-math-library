# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: rem-gauss-newton-information-is-not-full-hessian

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The remark begins “For the unweighted nonlinear least-squares objective” and asserts the exact Hessian identity without stating that the residual map is C2. Its cited supplier thm-nonlinear-least-squares-gradient-and-hessian explicitly requires C2, whereas the batch observation definition supplies only C1. For example r(θ)=1+|θ|^(3/2) is C1 but its squared-residual objective has no second derivative at zero. The intended supplier hypothesis is immediately recoverable, but should be stated in the remark.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "102",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-102-step5-context.json",
    "pointer": "/concerns/1",
    "original_object": {
      "id": "rem-gauss-newton-information-is-not-full-hessian",
      "concern": "The remark begins “For the unweighted nonlinear least-squares objective” and asserts the exact Hessian identity without stating that the residual map is C2. Its cited supplier thm-nonlinear-least-squares-gradient-and-hessian explicitly requires C2, whereas the batch observation definition supplies only C1. For example r(θ)=1+|θ|^(3/2) is C1 but its squared-residual objective has no second derivative at zero. The intended supplier hypothesis is immediately recoverable, but should be stated in the remark.",
      "severity": "gap-a-reader-closes"
    },
    "reader_digest_group": "af",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "102"
  },
  {
    "source_kind": "alert",
    "reader_batch": "84",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-84-step5-context.json",
    "pointer": "/alerts/0",
    "original_object": {
      "item": "rem-gauss-newton-information-is-not-full-hessian",
      "finding": "rem-gauss-newton-information-is-not-full-hessian states 'For the unweighted nonlinear least-squares objective' and then asserts the full Hessian identity 'by [[thm-nonlinear-least-squares-gradient-and-hessian]]' without requiring C² residuals. Its other dependency, def-nonlinear-experimental-design-and-local-identifiability, assumes only C¹ observation maps. The cited theorem explicitly requires C². This matters: the permitted scalar residual r(t)=1+|t|^(3/2) is C¹, but φ(t)=r(t)²/2 has no second derivative at zero, so the asserted Hessian identity is undefined there.",
      "severity": "would-be-fatal"
    },
    "reader_digest_group": "ab",
    "reader_items_read_contains_id": false,
    "original_owning_batch": "102"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-b102-C2-hessian-qualification-20261016T181016122349Z/proposal.json",
    "pointer": "",
    "status": "focused23-indexed-entrypoint"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-b102-C2-hessian-qualification-20261016T181016122349Z/future-mirrors.json",
    "pointer": "/literal_source_quote_consumers"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-b102-C2-hessian-qualification-20261016T181016122349Z/proposal.json",
    "pointer": "/consumer_review"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-b102-C2-hessian-qualification-20261016T181016122349Z/proposal.json",
    "pointer": "/consumer_review/direct_item_consumers"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-b102-C2-hessian-qualification-20261016T181016122349Z/proposal.json",
    "pointer": "/consumer_review/indirect_item_consumers"
  }
]
