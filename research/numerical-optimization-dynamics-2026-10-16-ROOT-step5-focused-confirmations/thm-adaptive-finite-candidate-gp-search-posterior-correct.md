# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: thm-adaptive-finite-candidate-gp-search-posterior-correct

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The claim that 'after any finite history for which ... computes a posterior state, the conditional law ... is the posterior supplied' needs a restriction on informative observation availability. The algorithm permits an oracle to return observation-unavailable without restricting that event. Take one candidate, f ~ N(0,1), independent ξ ~ N(0,1), s=0, N=1, and an exact selector. Let the oracle return f+ξ when f>0 and observation-unavailable otherwise. Every call finishes, returned observations have the stipulated additive-noise form, and C₁=2 is positive definite. A successful terminal history reveals f>0, whereas the computed N(y/2,1/2) posterior assigns positive probability to f<0. The final sentence about unavailable observations does not address this information in successful histories. The true-posterior interpretation in the algorithm has the same missing qualification.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "69",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-69-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "thm-adaptive-finite-candidate-gp-search-posterior-correct",
      "concern": "The claim that 'after any finite history for which ... computes a posterior state, the conditional law ... is the posterior supplied' needs a restriction on informative observation availability. The algorithm permits an oracle to return observation-unavailable without restricting that event. Take one candidate, f ~ N(0,1), independent ξ ~ N(0,1), s=0, N=1, and an exact selector. Let the oracle return f+ξ when f>0 and observation-unavailable otherwise. Every call finishes, returned observations have the stipulated additive-noise form, and C₁=2 is positive definite. A successful terminal history reveals f>0, whereas the computed N(y/2,1/2) posterior assigns positive probability to f<0. The final sentence about unavailable observations does not address this information in successful histories. The true-posterior interpretation in the algorithm has the same missing qualification.",
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
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-gp-observation-availability-cycle1/RESUMED-REVIEW.md",
    "pointer": "",
    "status": "focused23-indexed-entrypoint"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-gp-observation-availability-cycle1/proposal.json",
    "pointer": "/proof_and_consumer_review"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-gp-observation-availability-cycle1/proposal.json",
    "pointer": "/consumer_dispositions"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-gp-observation-availability-cycle1/resumed-consumer-dispositions.json",
    "pointer": "/item_consumers"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-gp-observation-availability-cycle1/resumed-consumer-dispositions.json",
    "pointer": "/page_consumers"
  }
]
