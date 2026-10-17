# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: ex-bounded-engineering-design-mixed-integer-gap-certificate

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The claimed N=4 zero-gap execution supplies endpoint witnesses incompatible with the cited continuous procedure's unconstrained midpoint instruction. The Given says each one-call fallback report returns 'an attaining feasible point'; Verification 2.1 uses x=z/2. But alg-certified-spatial-branch-and-bound specifies: 'In the unconstrained mode, the oracle returns the exact midpoint as a feasible witness and exact objective value.' Here every continuous feasible set is [0,1], whose midpoint is 1/2. For z=0,1,2, midpoint upper bounds are respectively 13/20, 1/10, 1/4, while lower bounds are 2/5, 1/10, 0. The first and third subcalls have gap 1/4>1/10 and exhaust their one-call budgets. The asserted returned witness (2,1) and U=0 therefore require an explicitly permitted additional-witness or alternative oracle mode. The optimization calculation itself is correct.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "69",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-69-step5-context.json",
    "pointer": "/concerns/1",
    "original_object": {
      "id": "ex-bounded-engineering-design-mixed-integer-gap-certificate",
      "concern": "The claimed N=4 zero-gap execution supplies endpoint witnesses incompatible with the cited continuous procedure's unconstrained midpoint instruction. The Given says each one-call fallback report returns 'an attaining feasible point'; Verification 2.1 uses x=z/2. But alg-certified-spatial-branch-and-bound specifies: 'In the unconstrained mode, the oracle returns the exact midpoint as a feasible witness and exact objective value.' Here every continuous feasible set is [0,1], whose midpoint is 1/2. For z=0,1,2, midpoint upper bounds are respectively 13/20, 1/10, 1/4, while lower bounds are 2/5, 1/10, 0. The first and third subcalls have gap 1/4>1/10 and exhaust their one-call budgets. The asserted returned witness (2,1) and U=0 therefore require an explicitly permitted additional-witness or alternative oracle mode. The optimization calculation itself is correct.",
      "severity": "would-be-fatal"
    },
    "reader_digest_group": "z",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "69"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b69-engineering-oracle-mode-cycle1/ROOT-REVIEW.md",
    "pointer": "",
    "status": "focused23-indexed-entrypoint"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b69-engineering-oracle-mode-cycle1/proposal.json",
    "pointer": "/consumer_review"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b69-engineering-oracle-mode-cycle1/proposal.json",
    "pointer": "/consumer_review/direct_consumers"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b69-engineering-oracle-mode-cycle1/proposal.json",
    "pointer": "/consumer_review/indirect_consumers"
  }
]
