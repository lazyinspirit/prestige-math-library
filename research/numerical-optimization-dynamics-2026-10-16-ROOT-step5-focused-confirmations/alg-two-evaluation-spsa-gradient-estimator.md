# Focused root finding review

Reviewed by root at 2026-10-17T02:08:08.182191+00:00

Subject: alg-two-evaluation-spsa-gradient-estimator

Disposition: confirmed defect for genuine native repair

Fixed-parameter unbiasedness does not make random-parameter oracle evaluations measurable; the stated paired-call measurability condition excludes the genuine nonmeasurable witness without changing the two-call method or moment conclusions.

I reviewed the original native finding and the focused proposed change. This confirms this specific defect or disposition, not whole-item proof acceptance or native coverage. The proposed source remains unapplied. Native workers must review and implement the smallest sound correction, retain all rich approved claims and necessary new proved property/prerequisite items, and complete genuine authoring, independent review, current certification/judgments and all normal gates. Any actual original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. The packet consumer dispositions are contextual proposals, not a substitute for that native duty.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "103",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-103-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "alg-two-evaluation-spsa-gradient-estimator",
      "concern": "The Definition inputs only 'a payoff oracle from [[def-simulation-gradient-objective-and-payoff-oracle]]' before evaluating it at θ ± cΔ. That supplier requires an integrable unbiased random variable at each fixed parameter, but no jointly measurable oracle realization or measurable probability kernel. These conditions do not ensure that the random-parameter calls, hence the returned estimator, are measurable. For example, take Θ = R, H = J = 0, θ = 0, c = 1, Δ uniform on [-2,-1] ∪ [1,2], and an independent centered Rademacher simulator input Z. For a non-Lebesgue-measurable A ⊂ [1,2], define the oracle family Y(η,Z) = 1_A(η)Z. Every fixed-η call is integrable and unbiased, and all algorithm input conditions hold. With shared Z, the returned output is (1_A(Δ) − 1_A(−Δ))Z/(2Δ), whose nonzero event is {Δ ∈ A ∪ (−A)}, which is not measurable. The algorithm therefore needs an explicit measurability condition on random-parameter oracle calls or on the oracle realization. The moment theorems separately assume conditional expectations of their outputs and are not refuted by this example.",
      "severity": "would-be-fatal"
    },
    "reader_digest_group": "af",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "103"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b103-spsa-measurability-cycle1/proposal.json",
    "pointer": "",
    "status": "focused23-indexed-entrypoint"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b103-spsa-measurability-cycle1/proposal.json",
    "pointer": "/consumer_review"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b103-spsa-measurability-cycle1/proposal.json",
    "pointer": "/consumer_review/all_consumer_source_edits_needed"
  }
]
