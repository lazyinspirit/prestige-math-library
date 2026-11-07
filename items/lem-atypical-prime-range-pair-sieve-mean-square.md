---
dependency_level: 4
id: lem-atypical-prime-range-pair-sieve-mean-square
kind: lemma
title: Early atypical-prime-range coefficient error
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- lem-improved-dirichlet-mean-square-from-close-coefficient-pairs
- lem-selberg-sieve-for-one-or-two-forbidden-residues
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals; local adapted proof with explicit endpoint and parameter corrections
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

Let $X$ be sufficiently large, $1\le T\le X$, and let $\mathcal P_1,\ldots,\mathcal P_J$ be disjoint finite sets of primes in $[3,X^{1/1000}]$. Put

$$V_j=\prod_{p\in\mathcal P_j}(1-1/p),\quad d=\sum_{j=1}^J V_j,\quad A_j=\{n\in[X,3X]\cap\mathbb Z:\ p\nmid n\text{ for every }p\in\mathcal P_j\},\quad A=\bigcup_j A_j.$$

For any coefficients $|a_n|\le1$,

$$\int_{-T}^T\left|\sum_{n\in A}a_nn^{-1-it}\right|^2dt\ll \frac TXd+d^2.$$

The constant is absolute and independent of the number of prime ranges.


For disjoint prime intervals $[P_j,Q_j]$ obeying $Q_j\le X^{1/1000}$ and $\log P_j/\log Q_j=(\log P_1/\log Q_1)/j^2$, one may replace $d$ in the bound by $C\log P_1/\log Q_1$.

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[lem-improved-dirichlet-mean-square-from-close-coefficient-pairs]]

[[lem-selberg-sieve-for-one-or-two-forbidden-residues]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[lem-improved-dirichlet-mean-square-from-close-coefficient-pairs]] gives its stated result under its stated hypotheses.

[F3] The local supplier [[lem-selberg-sieve-for-one-or-two-forbidden-residues]] gives its stated result under its stated hypotheses.

## Proof

1.1 [F3] applied to each $A_j$ gives $\#A\ll Xd$. For a fixed positive integer $\ell$, if $i\ne j$, the conditions $n\in A_i$ and $n+\ell\in A_j$ forbid one residue at each prime in the disjoint union $\mathcal P_i\cup\mathcal P_j$. Ignoring endpoint restrictions on $n+\ell$ and applying [F3] gives $O(XV_iV_j)$ possible $n$. If $i=j$, at a prime $p\in\mathcal P_j$ the forbidden residues are $0,-\ell$, one residue when $p\mid\ell$, and two otherwise. The same sieve gives $$\#\{n\in[X,3X]:n\in A_j,\ n+\ell\in A_j\}\ll XV_j^2w_j(\ell),\qquad w_j(\ell)=\prod_{p\in\mathcal P_j,\ p\mid\ell}\frac{p-1}{p-2}.$$ Indeed the product when $p\nmid\ell$ is $1-2/p\le(1-1/p)^2$, and replacing it by $1-1/p$ when $p\mid\ell$ multiplies it by $(p-1)/(p-2)$. Expand $w_j(\ell)=\sum_{d\mid\ell}g_j(d)$, where $g_j$ is squarefree supported on $\mathcal P_j$ and $g_j(p)=1/(p-2)$. For every $H\ge1$, $$\sum_{1\le\ell\le H}w_j(\ell)\le H\sum_d\frac{g_j(d)}d=H\prod_{p\in\mathcal P_j}\left(1+\frac1{p(p-2)}\right)\ll H,$$ since the full product over $p\ge3$ converges by comparison with $\sum n^{-2}$. Thus, after summing over $i,j$ and using the union bound, $$\sum_{1\le\ell\le H}\#\{n:n\in A,n+\ell\in A\}\ll XHd^2.$$ Apply [F2] with $N=\lceil3X\rceil$ and coefficients $a_n1_A(n)/n$. They have square norm at most $X^{-2}\#A\ll d/X$, and each close-pair coefficient product is at most $X^{-2}$ times its indicator. Take $H=N/T\asymp X/T$ (here $T\le X$); substituting the last two bounds proves the asserted mean square. Empty prime sets cause no problem: then $V_j=1$, and the displayed upper bound is merely weaker than the trivial one. [given, F1, F2, F3, algebra]

2.1 For the actual MR/Menon initial ranges $[P_j,Q_j]$, all of whose upper endpoints are $X^{o(1)}$, [F1] gives $V_j\ll\log P_j/\log Q_j$. The specified scales have $\log P_j/\log Q_j=(\log P_1/\log Q_1)/j^2$, so $d\ll\log P_1/\log Q_1$. Consequently this proves the precise early-range error needed in Menon Lemma 2.16, without using the general fundamental lemma. [given, F1, F2, F3, step 1.1, algebra] ∎
