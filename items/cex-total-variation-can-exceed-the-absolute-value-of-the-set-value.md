---
id: cex-total-variation-can-exceed-the-absolute-value-of-the-set-value
kind: counterexample
title: "Total variation can exceed the absolute value of the set value"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-dirac-measure, def-total-variation-of-a-signed-or-complex-measure]
proof_strategy: direct
  audited: 2026-08-30
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

## Statement refuted

For every signed measure or complex measure and every measurable set $E$, one
has $|\nu|(E)=|\nu(E)|$.

## Facts & Assumptions

**Given:** The signed measure $\nu=\delta_1-\delta_{-1}$ on the discrete
measurable space $(E,\mathcal P(E))$, where $E=\{-1,1\}$.

[L1] The Dirac set function at a point is the indicator-valued measurable set
function. ([[def-dirac-measure]])

[L2] Total variation is the supremum of countable partition sums of
$|\nu(E_n)|$. ([[def-total-variation-of-a-signed-or-complex-measure]])

## Counterexample

**Proof technique:** direct.

1.1 By [L1], one has $\nu(E)=\delta_1(E)-\delta_{-1}(E)=1-1=0$, so [L1]
$|\nu(E)|=0$.

2.1 The two singletons $\{1\}$ and $\{-1\}$ form a measurable partition of [L1, L2, step 1.1] ∎
$E$, and [L1] gives
$$|\nu(\{1\})|+|\nu(\{-1\})|=1+1=2.$$
Therefore [L2] yields $|\nu|(E)\ge2>0=|\nu(E)|$, refuting the claim.
