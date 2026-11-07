---
id: lem-vmvt-diagonal-and-near-diagonal-lower-bounds
kind: lemma
title: Diagonal and Second-Term Lower Bounds for J_{s,k}(X)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
- thm-vinogradov-mean-value-is-solution-count
- thm-cauchy-schwarz-finite
- lem-integer-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: N. Assing, The Circle Method and Waring’s Problem (2022 lecture notes)
    url: https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf
    locator: '§8.2, printed pp. 77–78: the diagonal and moment-pigeonhole lower bounds'
  - title: T. D. Wooley, Vinogradov’s mean value theorem via efficient congruencing
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf
    locator: '§1, equation (1.5), printed p. 1576: the two-term lower bound'
---

## Statement

For positive integers $s,k$ and real $X\ge1$, put $N=\lfloor X\rfloor$ and $K=k(k+1)/2$. Then
$$J_{s,k}(X)\ge N^s,\qquad J_{s,k}(X)\ge\frac{N^{2s}}{\prod_{j=1}^k(sN^j+1)}.$$
Consequently, for a constant $c_{s,k}>0$ depending only on $s,k$,
$$J_{s,k}(X)\ge c_{s,k}\bigl(X^s+X^{2s-K}\bigr).$$

## Statement references

[Assing, §8.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Wooley, equation (1.5)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

## Facts & Assumptions

**Given:** Positive integers $s,k$, a real $X\ge1$, $N=\lfloor X\rfloor$, and $K=k(k+1)/2$.

[F1] $J_{s,k}(X)$ is exactly the number of integer tuples in $\mathcal N_X^{2s}$ whose first $k$ power sums agree ([[thm-vinogradov-mean-value-is-solution-count]]).

[F2] For finite real lists $(a_i)$ and $(b_i)$, $(\sum_i a_ib_i)^2\le(\sum_i a_i^2)(\sum_i b_i^2)$ ([[thm-cauchy-schwarz-finite]]).

[F3] The integer part satisfies $N\le X<N+1$ and is the greatest integer at most $X$ ([[lem-integer-part]]).

## Proof

1.1 For each of the $N^s$ choices of $(x_1,\ldots,x_s)\in\{1,\ldots,N\}^s$, set $y_i=x_i$ for every $i$. These are distinct solutions counted by [F1], so $J_{s,k}(X)\ge N^s$. [given, F1, choose]

1.2 For each $x=(x_1,\ldots,x_s)\in\{1,\ldots,N\}^s$, form its moment vector $m(x)=(\sum_i x_i^j)_{1\le j\le k}$. Its $j$th coordinate is an integer between $s$ and $sN^j$, so there are at most $sN^j+1\le(s+1)N^j$ possibilities. Thus the number of moment vectors with nonempty preimage is at most $\prod_{j=1}^k(sN^j+1)\le(s+1)^kN^K$. [given, algebra]

2.1 Let $r_m$ count the $x$-tuples with moment vector $m$. Then $\sum_mr_m=N^s$, and [F1] gives $J_{s,k}(X)=\sum_mr_m^2$. Apply [F2] to $(r_m)$ and the all-ones list on its finite support; using the exact support count in step 1.2 gives $J_{s,k}(X)\ge N^{2s}/\prod_{j=1}^k(sN^j+1)\ge N^{2s}/((s+1)^kN^K)$.  [F1, F2, step 1.2, algebra]

3.1 If $X\ge2$, [F3] gives $X/2\le N\le X$. Thus $N^s\ge2^{-s}X^s$. Put $q=2s-K$. If $q\ge0$, then $N^q\ge2^{-q}X^q$; if $q<0$, then $N^q\ge X^q\ge2^{-|q|}X^q$. So step 2.1 implies a constant multiple of $X^{2s-K}$ in either sign case. If $1\le X<2$, then $N=1$, the first bound is $1$, and $X^s+X^{2s-K}\le2^s+2^{\max(2s-K,0)}$. In both ranges, steps 1.1 and 2.1 imply the stated two-term lower bound after decreasing a positive constant depending only on $s,k$. [F3, step 1.1, step 2.1, algebra] ∎
