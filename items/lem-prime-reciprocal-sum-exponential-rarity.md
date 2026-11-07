---
dependency_level: 0
id: lem-prime-reciprocal-sum-exponential-rarity
kind: lemma
title: Exponential rarity of large prime-reciprocal sums
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- thm-fundamental-theorem-of-arithmetic
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

There are absolute constants $C_1,t_*>0$ such that for all real $x\ge1$ and $t\ge t_*$,
$$ \#\left\{n\in\mathbb Z_{>0}:n\le x,\ \sum_{\substack{p\mid n\\p\ge t}}\frac1p\ge2\right\}\le C_1xe^{-2t}. $$

## Statement references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] The full stated result or definition in [[thm-fundamental-theorem-of-arithmetic]] is available, with its hypotheses and constants.

## Proof

1.1 For x≥1 and sufficiently large t, the number of positive integers n≤x with $\sum_{p\mid n,p\ge t}1/p\ge2$ is at most $C_1x e^{-2t}$, for an absolute C1. Indeed the contribution of t≤p<2t is at most $\sum_{t\le m<2t}1/m\le\log2+O(1/t)<3/2$. Such an n therefore has $\sum_{p\mid n,p\ge2t}1/p\ge1/2$. Its indicator is bounded by [given, F1, algebra]

1.2 $$ e^{-2t}\prod_{p\mid n,p\ge2t}e^{4t/p}. $$ Define the multiplicative nonnegative function h by h(p)=exp(4t/p)-1 for p≥2t, h(p)=0 otherwise, and h(p^j)=0 for j≥2. The product is $\sum_{d\mid n}h(d)$, by expansion over squarefree divisors. Thus [given, F1, algebra]

2.1 $$ \sum_{n\le x}\prod_{p\mid n,p\ge2t}e^{4t/p} \le x\sum_{d\le x}\frac{h(d)}d \le x\prod_{2t\le p\le x}\left(1+\frac{e^{4t/p}-1}p\right) \le C_1x. $$ The final bound follows from 4t/p≤2, exp(u)-1≤((e²-1)/2)u on [0,2], log(1+z)≤z, and $t\sum_{m\ge2t}m^{-2}\le1$. These are finite products; neither a mean-value theorem nor an infinite Euler product identity has been imported. [given, F1, algebra] ∎
