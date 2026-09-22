---
id: thm-compact-hausdorff-baire-iff-dmc
kind: theorem
title: "Compact Hausdorff Baire is equivalent to DMC"
status: published
origin: pipeline
deps: [thm-dmc-implies-compact-hausdorff-baire, thm-compact-hausdorff-baire-implies-dmc, def-dependent-multiple-choice-finite-level-tree, def-baire-space, def-compact-space, def-hausdorff-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "David H. Fremlin, Dependent multiple choice and Baire's theorem (following Fossy and Morillon)"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/n04j06.ps"
      locator: "Proposition 2 and Theorem 4, printed pp. 1-3"
verification:
  audited: 2026-09-22
---

## Statement

Over $\mathrm{ZF}$, every compact Hausdorff space is a Baire space if and only if
DMC holds ([[def-dependent-multiple-choice-finite-level-tree]],
[[def-baire-space]], [[def-compact-space]], [[def-hausdorff-space]]).

Both directions are the content of the two preceding theorems of this page; this
item records the equivalence and the exact form of each half, without adding any
hypothesis of its own.

## Facts & Assumptions

**Given:** The two implications proved earlier on this page.

[F1] $\mathrm{ZF}+\mathrm{DMC}$ proves that every compact Hausdorff space is Baire ([[thm-dmc-implies-compact-hausdorff-baire]]).

[F2] Over $\mathrm{ZF}$, if every compact Hausdorff space is Baire then DMC holds ([[thm-compact-hausdorff-baire-implies-dmc]]).

[L1] The claim is the conjunction of the two implications of the statement, with no additional hypotheses ([[def-baire-space]], [[def-dependent-multiple-choice-finite-level-tree]]).

## Proof

**Proof technique:** direct.

1.1 Assume DMC; then by [F1] every compact Hausdorff space is Baire, which is the forward direction of the displayed equivalence. [assume-hyp, F1]

1.2 Assume instead that every compact Hausdorff space is Baire; then by [F2] DMC holds, which is the reverse direction of the displayed equivalence. [assume-hyp, F2]

2.1 The two implications hold unconditionally over $\mathrm{ZF}$, so the displayed biconditional is proved; the forward direction spends exactly DMC and the reverse direction spends only the Baireness hypothesis, as recorded by [F1] and [F2]. [step 1.1, step 1.2, L1] ∎
