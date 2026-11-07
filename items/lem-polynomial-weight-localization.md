---
id: lem-polynomial-weight-localization
kind: lemma
title: Localization of Polynomially Weighted Norms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
- def-polynomial-decoupling-weight-and-norm
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§7, Lemmas 7.1 and 7.3, pp. 648–649: polynomial weights localize across
      a bounded-overlap equal-scale cover. The local statement is proved here for
      a lattice cover.'
axiom_use: The pointwise lattice comparison is choice-free; Countable Choice is assumed
  only for its stated Euclidean Lebesgue integral consequence.
---

## Statement

Let $n\ge1$, $E>n$, $0<r\le R$, let $\Lambda=c_0+r\mathbb Z^n$ be a translated lattice, and for $c\in\Lambda$ put $\Delta_c=B(c,r)$. If $B=B(c_B,R)$, then there are constants $0<c_{n,E}\le C_{n,E}<\infty$, independent of $r,R,c_0,c_B$, such that for every $x\in\mathbb R^n$,
$$c_{n,E}w_{B,E}(x)\le\sum_{c\in\Lambda}w_{\Delta_c,E}(x)w_{B,E}(c)\le C_{n,E}w_{B,E}(x).$$
Consequently, assuming Countable Choice for the complete Lebesgue measure, for every measurable $F:\mathbb R^n\to\mathbb C$ and $0<p<\infty$,
$$\int_{\mathbb R^n}|F(x)|^pw_{B,E}(x)dx\asymp_{n,E}\sum_{c\in\Lambda}w_{B,E}(c)\int_{\mathbb R^n}|F(x)|^pw_{\Delta_c,E}(x)dx,$$
with equality interpreted in $[0,\infty]$.

## Statement references

[Polynomial ball weight]([[def-polynomial-decoupling-weight-and-norm]])

[Tonelli's theorem]([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[BDG, Lemmas 7.1 and 7.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] $w_{B,E}(x)=(1+|x-c_B|/R)^{-E}$ and $w_{\Delta_c,E}(x)=(1+|x-c|/r)^{-E}$ ([[def-polynomial-decoupling-weight-and-norm]]).

[F2] Under Countable Choice, nonnegative sums and integrals on the existing complete Lebesgue space may be interchanged by Tonelli's theorem ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** Compare the weighted lattice sum above and below by separating centers near and far from the large-ball center.

1.1 For any center $y$, the number of lattice points with $jr\le|c-y|<(j+1)r$ is at most $C_n(j+1)^{n-1}$: the disjoint cubes $c+[-r/2,r/2]^n$ for those points lie in the annulus with radii $\max(0,j-\sqrt n/2)r$ and $(j+1+\sqrt n/2)r$, whose volume is at most $C_n(j+1)^{n-1}r^n$. Dividing by cube volume $r^n$ proves the count. Thus, grouping points into these shells about $x$, $\sum_c(1+|x-c|/r)^{-E}\le C_{n,E}\sum_{j\ge0}(j+1)^{n-1-E}<\infty$. Put $L=R/r\ge1$. The same shells about $c_B$ give $\sum_cw_{B,E}(c)\le C_{n,E}\sum_{j\ge0}(j+1)^{n-1}(1+j/L)^{-E}$. The terms with $j\le L$ sum to at most $C L^n$; for $j>L$, use $(1+j/L)^{-E}\le(j/L)^{-E}$ and $E>n$ to bound the tail by $C L^E L^{n-E}=C L^n$. [F1, given, algebra]

1.2 Write $d=|x-c_B|$ and choose a nearest lattice point $c$ to $x$, so $|x-c|\le\sqrt n\,r/2$. Then $w_{\Delta_c,E}(x)\ge(1+\sqrt n/2)^{-E}$, and $1+|c-c_B|/R\le(1+\sqrt n/2)(1+d/R)$ gives $w_{B,E}(c)\ge(1+\sqrt n/2)^{-E}w_{B,E}(x)$. This single summand proves the lower pointwise bound. [F1, given, choose, algebra]

2.1 For centers with $|x-c|\le d/2$, the triangle inequality gives $|c-c_B|\ge d/2$, hence $w_{B,E}(c)\le2^Ew_{B,E}(x)$; their contribution to the sum in the Statement is at most $C_{n,E}w_{B,E}(x)$ by step 1.1. [step 1.1, F1, given, algebra]

2.2 For the remaining centers, $|x-c|>d/2$. If $d\le R$, then $w_{B,E}(x)\ge2^{-E}$, and their contribution is at most $\sum_cw_{\Delta_c,E}(x)\le C_{n,E}$ by step 1.1. If $d>R$, their contribution is at most $C_{n,E}(1+d/r)^{-E}(R/r)^n$ by step 1.1; dividing by $w_{B,E}(x)=(1+d/R)^{-E}$ bounds the ratio by $C_{n,E}(R/r)^{n-E}\le C_{n,E}$. This proves the upper pointwise bound. [step 1.1, F1, given, algebra]

3.1 Multiply the two pointwise bounds by $|F(x)|^p$, integrate, and interchange the nonnegative lattice sum and integral by [F2]. The result is the two-sided integral comparison in the Statement, including when one side is infinite. [F1, F2, step 1.2, step 2.1, step 2.2, given] ∎
