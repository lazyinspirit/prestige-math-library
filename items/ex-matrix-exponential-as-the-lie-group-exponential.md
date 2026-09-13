---
id: ex-matrix-exponential-as-the-lie-group-exponential
kind: example
title: Matrix exponential as the Lie-group exponential
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-exponential-map-of-a-lie-group, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, def-matrix-product-and-identity-matrix, lem-exponential-series-has-infinite-radius]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Proposition 1.84, printed pages 50-51
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 2.29 and Examples 3.3-3.4, printed pages 24 and 30
---

## Example

Assume $\mathrm{AC}_\omega$. Let $G$ be a matrix Lie group, meaning an
embedded Lie subgroup of $\operatorname{GL}_n(\mathbb R)$, and identify
$\mathfrak g=T_IG$ with its image in $M_n(\mathbb R)$. Then

$$\exp_G(X)=e^X:=\sum_{k=0}^{\infty}\frac{X^k}{k!}\qquad(X\in\mathfrak g).$$

In particular, the ordinary matrix exponential of every $X\in\mathfrak g$
belongs to $G$.

## Facts & Assumptions

**Given:** The embedded Lie subgroup $G\subseteq\operatorname{GL}_n(\mathbb R)$
and $X\in T_IG$.

[F1] The Lie exponential is the time-one value of the one-parameter subgroup
with initial velocity $X$. [[def-exponential-map-of-a-lie-group]].

[F2] The scalar exponential series has infinite radius of convergence.
[[lem-exponential-series-has-infinite-radius]].

[F3] Linear matrix initial-value problems have unique solutions on each
compact interval.
[[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]].

[F4] Matrix multiplication and the identity matrix have their usual
coordinate definitions. [[def-matrix-product-and-identity-matrix]].

[F5] The construction of [F1] carries the stated countable-choice
assumption. [[def-countable-choice]].

## Verification

**Proof technique:** direct comparison of two matrix ODEs.

1.1 Suppose first that $n\geq1$ and put $\lVert A\rVert_\infty=\max_{i,j}|a_{ij}|$. The row-by-column formula [F4] gives $\lVert AB\rVert_\infty\leq n\lVert A\rVert_\infty\lVert B\rVert_\infty$, and hence $\lVert X^k\rVert_\infty\leq n^{k-1}\lVert X\rVert_\infty^k$ for $k\geq1$. Thus [F2] dominates the matrix series and its termwise derivative uniformly on every compact $t$-interval by scalar exponential series. Consequently, for $E(t)=\sum_{k\geq0}t^kX^k/k!$, termwise differentiation is valid for every real $t$, and [F4] gives $E'(t)=XE(t)=E(t)X$ and $E(0)=I$. When $n=0$ this is the constant identity curve directly. [F2, F4, algebra]

2.1 Let $\gamma_X:\mathbb R\to G$ be the subgroup from [F1], viewed as a matrix curve. Its velocity at $t$ is the left translate of $X$, so $\gamma_X'(t)=\gamma_X(t)X$ and $\gamma_X(0)=I$. Transposing gives $(\gamma_X^T)'=X^T\gamma_X^T$. Step 1.1 likewise gives $(E^T)'=X^TE^T$ with $E(0)^T=I$. On every compact interval containing zero, [F3] makes these transposed solutions equal. Thus $\gamma_X(t)=E(t)$ for all $t\in\mathbb R$. [F1, F3, step 1.1]

3.1 Evaluating step 2.1 at $t=1$ proves the displayed formula and, because $\gamma_X(1)\in G$, also proves $e^X\in G$. For $n=0$ both sides are the identity of the one-point group, and for $X=0$ both equal $I$; no invertibility or spectral hypothesis on $X$ is used. The parameter is global, so $t=1$ is not an endpoint issue. This is an equality, not an iff claim. $\mathrm{AC}_\omega$ is used exactly through [F1]; the series and ODE comparison add no choice. [F1, F2, F3, F5, step 2.1] ∎
