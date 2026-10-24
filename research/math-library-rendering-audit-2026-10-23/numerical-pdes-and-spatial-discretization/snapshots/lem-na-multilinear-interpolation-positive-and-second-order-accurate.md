---
id: lem-na-multilinear-interpolation-positive-and-second-order-accurate
kind: lemma
title: Positive partition of unity and interpolation error for periodic multilinear interpolation
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-periodic-grid-and-tensor-multilinear-interpolation, lem-periodic-tensor-interpolant-is-convex-and-linf-contracting, cor-taylor-remainder-bound]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
axiom_base: No choice principle is used; all sums are finite and the estimates are pointwise.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "Section 2, interpolation conditions (I1)–(I2), printed pp. 2–3."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For the interpolant $I_h$ of [[def-na-periodic-grid-and-tensor-multilinear-interpolation]], every cell weight is nonnegative and the weights sum to one by
[[lem-periodic-tensor-interpolant-is-convex-and-linf-contracting]]. Hence
$V\le W$ on grid nodes implies $I_hV\le I_hW$, and
$\|I_hV\|_{\infty}\le\|V\|_{\infty}$. If $\phi\in C^2(\mathbb T^d)$ and $V_i=\phi(x_i)$, then
$$\|I_hV-\phi\|_{\infty}\le\frac18\sum_{j=1}^d h_j^2\|\partial_{jj}\phi\|_{\infty}.$$

## Facts & Assumptions

**Given:** The periodic grid and tensor interpolant, nodal arrays $V,W$, and a periodic $C^2$ function $\phi$.

[F1] The local grid is the unit-period specialization of the periodic tensor grid, with $N_j\ge3$, and its interpolant has nonnegative tensor weights summing to one, hence is order-preserving and $L^\infty$-contractive ([[def-na-periodic-grid-and-tensor-multilinear-interpolation]], [[lem-periodic-tensor-interpolant-is-convex-and-linf-contracting]]).

[F2] If the second derivative of a $C^2$ function is bounded by $M$ on an interval, its first-order Taylor remainder from an endpoint has magnitude at most $M|x-a|^2/2$ ([[cor-taylor-remainder-bound]]).

## Proof

1.1 The supplier result in [F1] says each evaluation is a convex combination of the corner data. Applying this to $W-V\ge0$ proves order preservation, and applying it to $V$ and $-V$ proves the sup-norm bound. [F1, algebra]

1.2 In one coordinate, let $x=x_i+\theta h$ with $0\le\theta\le1$ and let $L_h\phi(x)=(1-\theta)\phi(x_i)+\theta\phi(x_i+h)$. Taylor-expand both endpoints about $x$. By [F2], the linear terms cancel after weighting and $$|L_h\phi(x)-\phi(x)|\le\frac{h^2}{2}\|\phi''\|_{\infty}\bigl((1-\theta)\theta^2+\theta(1-\theta)^2\bigr)=\frac{h^2}{2}\theta(1-\theta)\|\phi''\|_{\infty}\le\frac{h^2}{8}\|\phi''\|_{\infty}.$$ This calculation also holds on the periodic seam by taking a periodic lift of the cell. [F2, algebra]

2.1 Write the tensor interpolant as the product of the one-coordinate interpolation operators $I_j$. Each $I_j$ has sup-norm at most one by step 1.1. The identity $$I_1\cdots I_d-I=\sum_{j=1}^d I_1\cdots I_{j-1}(I_j-I)$$ and the one-dimensional bound of step 1.2 give the claimed sum of errors. This proves the statement. [step 1.1, step 1.2, algebra] ∎
