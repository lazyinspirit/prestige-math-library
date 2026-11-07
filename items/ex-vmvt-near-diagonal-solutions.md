---
id: ex-vmvt-near-diagonal-solutions
kind: example
title: "Near-Diagonal Solutions Give the Second Lower-Bound Term"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-vinogradov-mean-value-Jsk
  - lem-vmvt-diagonal-and-near-diagonal-lower-bounds
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring’s Problem (2022 lecture notes)"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§8.2, printed pp. 77–78: moment-vector pigeonhole lower bound"
    - title: "T. D. Wooley, Vinogradov’s mean value theorem via efficient congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§1, equation (1.5), printed p. 1576: second lower-bound term"
---

## Example

Let $X\ge1$, let $N=\lfloor X\rfloor$, and put $e(t)=\exp(2\pi i t)$. The degree-two fourth moment
$$J_{4,2}(X):=\int_{[0,1]^2}\left|\sum_{n=1}^Ne(\alpha_1n+\alpha_2n^2)\right|^8\,d\alpha_1d\alpha_2$$
satisfies
$$J_{4,2}(X)\ge\frac{N^8}{(4N+1)(4N^2+1)}\ge\frac{N^5}{25}.$$
This exhibits the second lower-bound exponent $2s-k(k+1)/2=5$.

## Example references

[[def-vinogradov-mean-value-Jsk]]

[[lem-vmvt-diagonal-and-near-diagonal-lower-bounds]]

[Assing, §8.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Wooley, equation (1.5)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

## Facts & Assumptions

**Given:** A real $X\ge1$ and $N=\lfloor X\rfloor$.

[F1] $J_{s,k}(X)$ is the integral of the $2s$-th power of $\sum_{n\in\mathcal N_X}e(\sum_{j=1}^k\alpha_jn^j)$ ([[def-vinogradov-mean-value-Jsk]]).

[F2] With $K=k(k+1)/2$, $J_{s,k}(X)\ge N^{2s}/\prod_{j=1}^k(sN^j+1)$ ([[lem-vmvt-diagonal-and-near-diagonal-lower-bounds]]).

## Verification

1.1 Apply [F2] with $s=4$ and $k=2$, so $K=3$; [F1] identifies the same integral as the stated $J_{4,2}(X)$. This gives $J_{4,2}(X)\ge N^8/((4N+1)(4N^2+1))$. [given, F1, F2]

2.1 Since $N\ge1$, $4N+1\le5N$ and $4N^2+1\le5N^2$. Hence the denominator is at most $25N^3$, and $J_{4,2}(X)\ge N^5/25$, with exponent $8-3=5$. [step 1.1, algebra] ∎
