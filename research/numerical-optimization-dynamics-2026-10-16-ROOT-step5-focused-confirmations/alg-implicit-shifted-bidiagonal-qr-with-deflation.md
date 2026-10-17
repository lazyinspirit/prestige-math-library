# Focused root finding review

Reviewed by root at 2026-10-17T02:08:08.182191+00:00

Subject: alg-implicit-shifted-bidiagonal-qr-with-deflation

Disposition: confirmed defect for genuine native repair

Operationwise floating-point execution needs an actual rounded scalar shift and deflation schedule with its existing range-failure rule; the explicit four-real-component norm schedule retains the exact branch and conditional claims.

I reviewed the original native finding and the focused proposed change. This confirms this specific defect or disposition, not whole-item proof acceptance or native coverage. The proposed source remains unapplied. Native workers must review and implement the smallest sound correction, retain all rich approved claims and necessary new proved property/prerequisite items, and complete genuine authoring, independent review, current certification/judgments and all normal gates. Any actual original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. The packet consumer dispositions are contextual proposals, not a substitute for that native duty.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "17",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-17-step5-context.json",
    "pointer": "/concerns/1",
    "original_object": {
      "id": "alg-implicit-shifted-bidiagonal-qr-with-deflation",
      "concern": "The finite-precision procedure says to 'form only the tridiagonal entries of T=B*B' and 'Choose mu to be the eigenvalue ... closest to T_rr', but does not specify the rounded scalar expression/order for forming that Hermitian block, evaluating its two eigenvalues, or evaluating the deflation comparisons. The helper supplies rotation arithmetic, not this shift calculation. Exact-arithmetic selection is well-defined, and the conditional backward argument does not need an accurate shift, but the finite-precision procedure needs a concrete evaluation/failure rule to determine its execution under the operationwise model.",
      "severity": "gap-a-reader-closes"
    },
    "reader_digest_group": "o",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "17"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-low-math/successor-v2/proposal.json",
    "pointer": "/cases/2",
    "status": "completed-proposal-packet"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-low-math/successor-v2/proposal.json",
    "pointer": "/cases/2/consumer_review_scope"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-low-math/successor-v2/proposal.json",
    "pointer": "/cases/2/consumer_dispositions"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-low-math/successor-v2/proposal.json",
    "pointer": "/cases/2/successor_refinement/consumer_disposition"
  }
]
