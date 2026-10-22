---
id: lem-ip-largest-s-coordinates-attain-best-s-term-l1-error
kind: lemma
title: "The largest coordinates attain the best s-term ℓ1 error"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
axiom_base: "No additional axiom; finite coordinate ordering only."
deps:
  - def-ip-best-s-term-l1-error
  - def-p-norms-on-rn
  - lem-finite-sum-laws
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §2.1 Definition 2.2"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
    - title: "Shahar Mendelson, Holger Rauhut, and Rachel Ward, Improved Bounds for Sparse Recovery from Subsampled Random Convolutions, §2.1"
      url: "https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf"
---

## Statement

Let $n,s\in\mathbb N$ with $n\ge1$ and $1\le s\le n$, and let $x\in\mathbb R^n$ use the one-based coordinate labels $[n]=\{1,\ldots,n\}$, with label $j$ corresponding to library coordinate $j-1$. Order the coordinates by decreasing $|x_j|$, breaking ties by increasing $j$, and let $S$ be the first $s$ indices. For every $U\subseteq[n]$, let $x_U$ agree with $x$ on $U$ and vanish on $U^c$. Then for every $T\subseteq[n]$ with $|T|\le s$,
$$\|x_T\|_1\le\|x_S\|_1\quad\text{and}\quad\|x_{S^c}\|_1\le\|x_{T^c}\|_1.$$
Consequently $\sigma_s(x)_1=\|x_{S^c}\|_1$, so the best $s$-term tail error is attained by retaining the first $s$ coordinates in the specified order.

## Statement references

[[def-ip-best-s-term-l1-error|Finite-minimum definition of the best s-term tail error]]

[[def-p-norms-on-rn|Finite-dimensional one-norm]]

[[lem-finite-sum-laws|Monotonicity and additivity of finite sums]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §2.1 Definition 2.2, printed p. 42](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

[Mendelson, Rauhut, and Ward, *Improved Bounds for Sparse Recovery from Subsampled Random Convolutions*, §2.1](https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf)

## Facts & Assumptions

**Given:** Integers $n\ge1$, $1\le s\le n$, a vector $x\in\mathbb R^n$, its deterministic decreasing-magnitude order $j_1,\ldots,j_n$, the set $S=\{j_1,\ldots,j_s\}$, and an arbitrary $T\subseteq[n]$ with $|T|\le s$.

[F1] [[def-ip-best-s-term-l1-error]]: $\sigma_s(x)_1=\min\{\|x_{U^c}\|_1:U\subseteq[n],\ |U|\le s\}$.

[F2] [[def-p-norms-on-rn]]: $\|v\|_1=\sum_{j=1}^n|v_j|$ for $v\in\mathbb R^n$, using the stated coordinate relabeling. In particular, for the zero-extended restriction $x_U$, the summand is $|x_j|$ on $U$ and zero elsewhere.

[F3] [[lem-finite-sum-laws]], clauses 1, 3 and 4: finite sums are additive for two sequences on the same index range, split at a contiguous index cut, and preserve termwise inequalities; sums of nonnegative terms are nonnegative.

## Proof

1.1 If $T=\varnothing$, its retained mass is zero and is no larger than the nonnegative sum on $S$. Otherwise write the ranks of the elements of $T$ in increasing order as $r_1<\cdots<r_k$, where $k=|T|\le s$. Then $r_\ell\ge\ell$, so the specified ordering gives $|x_{j_{r_\ell}}|\le|x_{j_\ell}|$ for each $\ell$. The coordinate sum in [F2] may be reordered by successive adjacent swaps, each preserving the sum by associativity and commutativity of real addition; zero terms may be omitted. Thus $\|x_T\|_1=\sum_{\ell=1}^k|x_{j_{r_\ell}}|\le\sum_{\ell=1}^k|x_{j_\ell}|\le\sum_{\ell=1}^s|x_{j_\ell}|=\|x_S\|_1$, using termwise monotonicity and then the contiguous split at $k$ with a nonnegative remainder. [given, F2, F3, algebra]

2.1 For every $U\subseteq[n]$ and $j\in[n]$, the zero-extended restrictions satisfy $|x_j|=|(x_U)_j|+|(x_{U^c})_j|$. Summing over the original full coordinate range and applying [F2] and the same-range additivity in [F3] gives $\|x\|_1=\|x_U\|_1+\|x_{U^c}\|_1$. Taking $U=T$ and $U=S$ and subtracting the retained masses, step 1.1 implies $\|x_{S^c}\|_1\le\|x_{T^c}\|_1$. Applying this inequality to every admissible $T$, while $S$ itself is admissible, shows that the finite minimum in [F1] equals $\|x_{S^c}\|_1$. [F1, F2, F3, step 1.1, algebra] ∎
