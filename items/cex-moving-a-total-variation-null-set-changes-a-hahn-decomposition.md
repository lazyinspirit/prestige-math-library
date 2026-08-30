---
id: cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition
kind: counterexample
title: "Moving a total-variation-null set changes a Hahn decomposition"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-hahn-decomposition-for-signed-measures, prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.18"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

A Hahn decomposition is literally unique, not merely unique up to
total-variation-null sets.

## Facts & Assumptions

**Given:** The zero signed measure $\nu\equiv0$ on the discrete measurable
space $(X,\mathcal P(X))$, where $X=\{0,1\}$.

[L1] Hahn decompositions are unique only up to null sets. ([[thm-hahn-decomposition-for-signed-measures]])

[L2] A set is null exactly when its total variation is $0$. ([[prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation]])

## Counterexample

**Proof technique:** direct.

1.1 Because every measurable subset of $X$ has $\nu$-value $0$, every [L1]
measurable set is both positive and negative. Thus
$$P_0=\varnothing,\ N_0=X\qquad\text{and}\qquad P_1=\{0\},\ N_1=\{1\}$$
are both Hahn decompositions.

2.1 The two decompositions are different, but the moved set $\{0\}$ is [L1, L2, step 1.1] ∎
$\nu$-null and therefore has total variation $0$ by [L2]. This is exactly the
allowed nonuniqueness in [L1].
