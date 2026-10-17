# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: thm-multifrontal-elimination-equivalence-and-sparse-costs

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The Statement writes its work and exact allocation sums over r=1,...,n, although the supplying algorithm defines F_r and pivot position r over 0,...,n−1. Thus d_n is undefined and d_0 is omitted. Use the established zero-based range, or explicitly reindex the column sizes.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "16",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-16-step5-context.json",
    "pointer": "/concerns/1",
    "original_object": {
      "id": "thm-multifrontal-elimination-equivalence-and-sparse-costs",
      "concern": "The Statement writes its work and exact allocation sums over r=1,...,n, although the supplying algorithm defines F_r and pivot position r over 0,...,n−1. Thus d_n is undefined and d_0 is omitted. Use the established zero-based range, or explicitly reindex the column sizes.",
      "severity": "presentation"
    },
    "reader_digest_group": "o",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "16"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-low-math/successor-v2/proposal.json",
    "pointer": "/cases/1",
    "status": "completed-proposal-packet"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-low-math/successor-v2/proposal.json",
    "pointer": "/cases/1/consumer_review_scope"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-low-math/successor-v2/proposal.json",
    "pointer": "/cases/1/consumer_dispositions"
  }
]
