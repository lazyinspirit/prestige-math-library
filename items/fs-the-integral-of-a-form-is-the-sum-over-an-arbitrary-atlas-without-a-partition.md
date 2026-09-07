---
id: fs-the-integral-of-a-form-is-the-sum-over-an-arbitrary-atlas-without-a-partition
title: "False: summing unweighted atlas integrals is valid"
kind: false-statement
status: draft
origin: pipeline
deps: ["thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement", "prop-positive-compactly-supported-top-forms-have-positive-integral"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.5 proof pp.405–406 (necessity of partition weights)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

False assertion: for an arbitrary covering atlas one may integrate a compactly supported top form by summing unweighted chart integrals, without partition weights.

## Facts & Assumptions

[F1] [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]: The compact-support integral on an oriented manifold is independent of the chart cover, coordinate maps, subordinate partition, and refinement. If $U\subset M$ is open and contains $\operatorname{supp}\omega$, with its restricted orientation, then $\int_U\omega|_U=\int_M\omega$.

[F2] [[prop-positive-compactly-supported-top-forms-have-positive-integral]]: Let $\omega\in\Omega_c^n(M)$ be nonnegative on the positive determinant ray of an oriented smooth manifold. Then $\int_M\omega\geq0$, and $\omega\neq0$ implies $\int_M\omega>0$.

## Refutation

**Given:** The proposed assertion; use the data constructed below.

1.1 On $\mathbb R$ with increasing orientation choose the two distinct global charts $x$ and $y=2x$. Let $f(x)=e^{-1/(1-x^2)}$ for $|x|<1$ and zero otherwise, and $\omega=f(x)dx$. This is a nonnegative smooth compactly supported nonzero form, so $I=\int\omega>0$. Smoothness at the cut follows since every derivative is an exponential factor times a polynomial in reciprocal powers of $1-x^2$, tending to zero there. [F2, algebra]

2.1 Each of the two charts contains the support and computes $I$ by chart/partition independence. The proposed unweighted sum is $I+I=2I\neq I$. The atlas genuinely has distinct coordinate maps; its overlap is counted twice. [F1, step 1.1] ∎
