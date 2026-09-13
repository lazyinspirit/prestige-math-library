---
id: fs-the-exponential-map-is-surjective-on-every-connected-lie-group
kind: false-statement
title: The exponential map is surjective on every connected Lie group
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-exponential-map-of-a-lie-group, def-determinant-of-a-square-matrix, def-matrix-product-and-identity-matrix, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, lem-exponential-series-has-infinite-radius, thm-polar-decomposition]
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
    - title: Jean Gallier, Logarithms and Square Roots of Real Matrices
      url: https://arxiv.org/pdf/0805.0245
      locator: Theorem 3.4 and proof, PDF pages 17–18
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introductory matrix-group examples
---

## Statement refuted

Assume $\mathrm{AC}_\omega$. The exponential map is surjective on every
connected Lie group.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $G=\operatorname{GL}_2^+(\mathbb R)$ and
$A=\operatorname{diag}(-2,-1/2)$.

[F1] The Lie-group exponential is defined from its invariant integral curve.
[[def-exponential-map-of-a-lie-group]].

[F2] Matrix products, identity, and determinant have their standard formulas.
[[def-matrix-product-and-identity-matrix]].
[[def-determinant-of-a-square-matrix]].

[F3] Linear matrix ODEs have unique compact-interval solutions, and the scalar
exponential series converges absolutely.
[[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]].
[[lem-exponential-series-has-infinite-radius]].

[F4] Every invertible real matrix has a polar decomposition into an orthogonal
factor and a positive-definite factor. [[thm-polar-decomposition]].

[F5] $\mathrm{AC}_\omega$ is countable choice; it is required by the
exponential-map interface [F1]. [[def-countable-choice]].

## Refutation

**Proof technique:** counterexample.

1.1 The open matrix group $G$ is connected. Indeed, [F4] writes every $B\in G$ as $B=SU$ with $U$ positive definite and $S\in\operatorname{SO}(2)$. The path $(1-t)U+tI$ stays positive definite, and every $S\in\operatorname{SO}(2)$ is a rotation joined to $I$ by varying its angle. Thus $B$ is path connected to $I$. Also $\det A=1$, so $A\in G$; explicitly $t\mapsto R(\pi t)\operatorname{diag}(2^t,2^{-t})$ joins $I$ to $A$. [F2, F4, algebra]

1.2 For a real matrix $X$, the absolutely convergent series $E(t)=\sum_{n\ge0}t^nX^n/n!$ solves $E'=XE$ and $E(0)=I$. By [F1] and [F3], uniqueness identifies $E(1)$ with $\exp_GX$. In particular, $X$ commutes with $\exp_GX$. [F1, F3, algebra]

2.1 If $\exp_GX=A$, step 1.2 says $XA=AX$. Because $A$ has two distinct real eigenvalues, this equation forces $X$ to preserve each coordinate line and hence to be diagonal, say $X=\operatorname{diag}(u,v)$. Then $\exp_GX=\operatorname{diag}(e^u,e^v)$ has positive diagonal entries, contradicting the two negative entries of $A$. [F2, F3, step 1.2, algebra]

3.1 Thus $A$ is not exponential although $G$ is nonempty, connected, and four-dimensional. The determinant is nonzero and no degeneracy is hidden. The paths include both endpoints. The Euclidean inner product in [F4] is an explicit finite-dimensional witness and invokes no metric-existence theorem. Countable choice is assumed exactly to use [F1]; no additional choice or biconditional occurs, and zero and one dimensions cannot invalidate this explicit counterexample. [F1, F2, F3, F4, F5, step 1.1, step 1.2, step 2.1] ∎
