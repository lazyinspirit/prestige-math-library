---
id: lem-bounded-coordinatewise-monotone-is-riemann-integrable
kind: lemma
title: "A bounded coordinatewise nondecreasing function on a cube is Riemann integrable"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-multidimensional-grid-partition
  - def-multidimensional-rectangle-and-volume
  - def-multidimensional-darboux-sums
  - thm-multidimensional-riemann-criterion
  - cor-archimedean-reciprocal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Art B. Owen and Daniel Rudolf, A strong law of large numbers for scrambled net integration, Section 2"
      url: "https://arxiv.org/pdf/2002.07859v3"
---

## Statement

Let $d\ge1$ and let $h:[0,1]^d\to\mathbb R$ be bounded and nondecreasing in
each coordinate while the other coordinates are fixed. Then $h$ is Riemann
integrable on $[0,1]^d$.

## Facts & Assumptions
**Given:** A bounded function $h:[0,1]^d\to\mathbb R$ that is nondecreasing in each coordinate.

[F1] A coordinate grid has product cells, and each cell volume is the product of its side lengths. ([[def-multidimensional-grid-partition]], [[def-multidimensional-rectangle-and-volume]])

[F2] The lower and upper Darboux sums use the cell infima and suprema weighted by cell volumes. ([[def-multidimensional-darboux-sums]])

[F3] A bounded function on a nondegenerate rectangle is Riemann integrable exactly when it has arbitrarily small Darboux gaps over grid partitions. ([[thm-multidimensional-riemann-criterion]])

[F4] For every $\eta>0$ there is a positive integer $n$ with $1/n<\eta$. ([[cor-archimedean-reciprocal]])

## Proof

1.1 For a positive integer $n$, partition each coordinate into $[k/n,(k+1)/n]$, $0\le k<n$, and write $C_k$ for the product cell with lower vertex $\ell_k=(k_1/n,\ldots,k_d/n)$ and upper vertex $u_k=((k_1+1)/n,\ldots,(k_d+1)/n)$. Coordinatewise monotonicity gives $\inf_{C_k}h=h(\ell_k)$ and $\sup_{C_k}h=h(u_k)$. Each cell volume is $n^{-d}$, so its contribution to $U-L$ is $n^{-d}(h(u_k)-h(\ell_k))$. [F1, F2, given, construct]

2.1 For each $k$, let $z_k^{(j)}$ have its first $j$ coordinates at the upper knots of $C_k$ and the remaining coordinates at the lower knots, for $0\le j\le d$. Then $z_k^{(0)}=\ell_k$, $z_k^{(d)}=u_k$, and $h(u_k)-h(\ell_k)=\sum_{j=1}^d(h(z_k^{(j)})-h(z_k^{(j-1)}))$; all summands are nonnegative. Fix $j$ and the other $d-1$ indices. Summing its increments over $k_j=0,\ldots,n-1$ telescopes to $h(y_1)-h(y_0)$, where $y_0,y_1$ have the other coordinates at the selected lower or upper knots and the $j$th coordinates $0,1$. Since $\mathbf0\le y_0\le y_1\le\mathbf1$, this is at most $h(\mathbf1)-h(\mathbf0)$. There are $n^{d-1}$ choices of the other indices for each $j$, so $\sum_k(h(u_k)-h(\ell_k))\le d n^{d-1}(h(\mathbf1)-h(\mathbf0))$. [given, step 1.1, algebra]

3.1 By step 1.1, the grid's Darboux gap is at most $d(h(\mathbf1)-h(\mathbf0))/n$. Choose $n$ large enough using [F4] to make this less than any prescribed positive tolerance (if the range is zero, every gap is zero). The criterion [F3] then gives Riemann integrability. [F3, F4, step 2.1] ∎
