---
id: ex-vmvt-degree-one-and-two
kind: example
title: The Elementary Degree-One and Degree-Two Cases
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
- def-vinogradov-mean-value-Jsk
- thm-vinogradov-mean-value-is-solution-count
- thm-vinogradov-mean-value-main-conjecture
- def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: N. Assing, The Circle Method and Waring’s Problem (2022 lecture notes)
    url: https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf
    locator: '§8.2, printed pp. 77–79: mean-value convention, moment interpretation
      and low-degree context'
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§1, p. 633: mean-value definition and solution-count identity'
---

## Example

Assume countable choice. Let $X\ge1$, let $N$ be the integer with $N\le X<N+1$, and put $e(t)=\exp(2\pi i t)$. For positive integers $s,k$, define
$$J_{s,k}(X)=\int_{[0,1]^k}\left|\sum_{n=1}^Ne\!\left(\sum_{j=1}^k\alpha_jn^j\right)\right|^{2s}\,d\alpha,$$
using the ordinary multiple Riemann integral. Then $J_{s,1}(X)\le N^{2s-1}$ for every $s\ge1$; $J_{1,1}(X)=J_{1,2}(X)=N$; and $J_{2,2}(X)=2N^2-N$. For every $s\ge1$ and $\varepsilon>0$, the main theorem also gives
$$J_{s,2}(X)\le C_{s,\varepsilon}X^\varepsilon\left(X^s+X^{2s-3}\right),$$
where $C_{s,\varepsilon}$ is independent of $X$.

## Example references

[[def-vinogradov-mean-value-Jsk]]

[[thm-vinogradov-mean-value-is-solution-count]]

[[thm-vinogradov-mean-value-main-conjecture]]

[Assing, §8.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Bourgain–Demeter–Guth, §1](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** Countable choice; $X\ge1$; $N\le X<N+1$; and positive integer $s$.

[F1] $J_{s,k}(X)$ equals the number of tuples in $\{1,\ldots,N\}^{2s}$ whose first $k$ power sums agree ([[thm-vinogradov-mean-value-is-solution-count]]).

[F2] For every positive integer $s$, $J_{s,2}(X)\le C_{s,\varepsilon}X^\varepsilon(X^s+X^{2s-3})$ under countable choice ([[thm-vinogradov-mean-value-main-conjecture]]).

[F3] $J_{s,k}(X)$ uses the positive-sign convention $e(t)=\exp(2\pi i t)$ and the finite range $1\le n\le X$ ([[def-vinogradov-mean-value-Jsk]]).

## Verification

1.1 For degree one, choose $x_1,\ldots,x_s,y_1,\ldots,y_{s-1}$ freely in $\{1,\ldots,N\}$. The equality of first power sums determines at most one possible integer $y_s$. Counting by [F1] gives $J_{s,1}(X)\le N^{2s-1}$. For $s=1$, each $x_1$ forces $y_1=x_1$, so $J_{1,1}(X)=N$. [F1, choose, algebra]

1.2 For $s=1$ and $k=2$, the first power-sum equation alone forces $y_1=x_1$, so [F1] gives $J_{1,2}(X)=N$. For any $s\ge1$, the degree-two bound in [F2] is the stated general estimate. [F1, F2]

2.1 Let $s=k=2$. A solution has common sum $S=x_1+x_2=y_1+y_2$ and common square sum $Q=x_1^2+x_2^2=y_1^2+y_2^2$. The identity $2x_1x_2=S^2-Q=2y_1y_2$ shows that $(x_1,x_2)$ and $(y_1,y_2)$ are roots, with multiplicity, of the same polynomial $T^2-ST+x_1x_2$. Hence the unordered pairs agree. If $x_1=x_2$, there is one ordered $y$ pair; if $x_1\ne x_2$, there are exactly two. Thus there are $N+2(N^2-N)=2N^2-N$ solutions, and [F1] gives the claimed exact value. [F1, algebra] ∎
