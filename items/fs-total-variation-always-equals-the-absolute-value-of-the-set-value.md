---
id: fs-total-variation-always-equals-the-absolute-value-of-the-set-value
kind: false-statement
title: "FALSE: total variation always equals the absolute value of the set value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirac-measure, def-total-variation-of-a-signed-or-complex-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 12"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

**False claim.** For every signed measure or complex measure and every
measurable set $E$, one has $|\nu|(E)=|\nu(E)|$.

## Facts & Assumptions

**Given:** The signed measure $\nu=\delta_1-\delta_{-1}$ on the discrete
measurable space $(E,\mathcal P(E))$, where $E=\{-1,1\}$.

[L1] The Dirac set function at a point is indicator-valued. ([[def-dirac-measure]])

[L2] Total variation is the supremum of measurable partition sums.
([[def-total-variation-of-a-signed-or-complex-measure]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], one has $\nu(E)=0$, so $|\nu(E)|=0$. [L1]
2.1 The partition $E=\{1\}\sqcup\{-1\}$ gives partition sum [L1, L2, step 1.1] ∎
$|\nu(\{1\})|+|\nu(\{-1\})|=2$, so [L2] yields $|\nu|(E)\ge2$. Hence
$|\nu|(E)\neq|\nu(E)|$.
