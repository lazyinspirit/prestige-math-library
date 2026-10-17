# Focused root finding review

Reviewed by root at 2026-10-17T02:08:08.182191+00:00

Subject: alg-nonlinear-conjugate-gradient-methods

Disposition: confirmed defect for genuine native repair

The first conjugate-gradient candidate and the negative-index restart coefficient need explicit first-iteration handling; setting the candidate to minus the gradient preserves the intended iteration.

I reviewed the original native finding and the focused proposed change. This confirms this specific defect or disposition, not whole-item proof acceptance or native coverage. The proposed source remains unapplied. Native workers must review and implement the smallest sound correction, retain all rich approved claims and necessary new proved property/prerequisite items, and complete genuine authoring, independent review, current certification/judgments and all normal gates. Any actual original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. The packet consumer dispositions are contextual proposals, not a substitute for that native duty.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "70",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-70-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "alg-nonlinear-conjugate-gradient-methods",
      "concern": "Definition step 2 says “For k=0, use d_0 above,” whereas step 3 tests or assigns d_k^{cand}, which has only been explicitly formed for k≥1. The intended initialization d_0^{cand}=d_0=−g_0 is immediately recoverable, but should be explicit for the procedure's first iteration. A first-iteration restart also assigns β_{−1}, although no such coefficient is otherwise needed.",
      "severity": "presentation"
    },
    "reader_digest_group": "aa",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "70"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-late-proposals/proposal.json",
    "pointer": "/entries/4",
    "status": "completed-proposal-packet"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-late-proposals/proposal.json",
    "pointer": "/entries/4/consumer_reviews"
  }
]
