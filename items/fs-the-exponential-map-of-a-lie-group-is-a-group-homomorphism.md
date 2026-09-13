---
id: fs-the-exponential-map-of-a-lie-group-is-a-group-homomorphism
kind: false-statement
title: The exponential map of a Lie group is a group homomorphism
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-matrix-units, def-matrix-product-and-identity-matrix, lem-exponential-series-has-infinite-radius]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Michael Müger, Notes on the Baker-Campbell-Hausdorff-Dynkin theorem
      url: https://www.math.ru.nl/~mueger/PDF/BCHD.pdf
      locator: Theorem 1.3 and expansion following it, printed pages 3–4
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorems 3.36–3.37, printed pages 37–38
---

## Statement refuted

The exponential map of a Lie group is a group homomorphism from its additive
Lie algebra.

## Facts & Assumptions

**Given:** The upper-unitriangular real $3$-by-$3$ matrix group and
$X=E_{01}$, $Y=E_{12}$.

[F1] Matrix units have their standard entries, and the row-by-column product
therefore gives $E_{ij}E_{kl}=\delta_{jk}E_{il}$.
[[def-matrix-units]]. [[def-matrix-product-and-identity-matrix]].

[F2] Matrix multiplication and the identity matrix have their usual entrywise
meaning. [[def-matrix-product-and-identity-matrix]].

[F3] The scalar exponential series converges absolutely.
[[lem-exponential-series-has-infinite-radius]].

## Refutation

**Proof technique:** counterexample.

1.1 By [F1], $X^2=Y^2=0$, $XY=E_{02}$, $YX=0$, and $(X+Y)^2=E_{02}$ while $(X+Y)^3=0$. The finite matrix exponential series therefore gives $e^X=I+X$, $e^Y=I+Y$, and $e^{X+Y}=I+X+Y+\frac12E_{02}$. [F1, F2, F3, algebra]

2.1 Direct multiplication gives $e^Xe^Y=(I+X)(I+Y)=I+X+Y+E_{02}$, which differs from $e^{X+Y}$ in its $(0,2)$ entry. Thus exponential does not preserve addition. [F1, F2, step 1.1, algebra]

3.1 The witness is a nonempty connected three-dimensional matrix Lie group. No zero- or one-dimensional group can exhibit this particular noncommutative failure. No metric, nondegeneracy, interval, endpoint, choice principle, or biconditional occurs. [F1, F2, F3, step 1.1, step 2.1] ∎
