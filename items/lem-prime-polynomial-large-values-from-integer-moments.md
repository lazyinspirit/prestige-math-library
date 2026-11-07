---
dependency_level: 2
id: lem-prime-polynomial-large-values-from-integer-moments
kind: lemma
title: Prime-polynomial large values from integer moments
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
- thm-canonical-prime-factorisation
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Matomäki–Radziwiłł, Multiplicative Functions in Short Intervals, Lemmas8,11,13; elementary local alternative arguments and refined kernel calculation
    url: https://arxiv.org/pdf/1501.04585v4
  - title: Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals, Lemma2.5; local Selberg/tent-kernel alternative
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

Let $P\ge2$, $T\ge2$, $k\ge1$ be an integer, $V>0$, and $Q(s)=\sum_{P\le p\le2P}c_pp^{-s}$ with $|c_p|\le1$. Let $\mathcal E\subset[-T,T]$ be a finite $1$-separated set such that $|Q(1+it)|\ge V^{-1}$ for each $t\in\mathcal E$. Put $N=\lceil(2P)^k\rceil$. Then, with an absolute constant $C$,

$$|\mathcal E|\le C V^{2k}(N+T)\log(2N)\,k!\left(\frac{C}{P\log P}\right)^k.$$

The two occurrences of $C$ may be taken equal by increasing one absolute constant.

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[[thm-canonical-prime-factorisation]]

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]] gives its stated result under its stated hypotheses.

[F3] The local supplier [[thm-canonical-prime-factorisation]] gives its stated result under its stated hypotheses.

## Proof

1.1 Write $Q(s)^k=\sum b_nn^{-s}$. Its coefficients are sums over ordered prime tuples with product $n$. Unique factorization bounds the number of such tuples by $k!$. Thus $|b_n|^2\le k!r_k(n)$, where $r_k(n)$ is that tuple count, and $\sum |b_n/n|^2\le k!\sum r_k(n)/n^2=k!(\sum_{P\le p\le2P}p^{-2})^k\le k!(C/(P\log P))^k$. The final inequality follows from the prime-count bound in [F1]. Its support is in $[1,N]$. [given, F1, F2, F3, algebra]

2.1 At each sample point, $|Q(1+it)^k|^2\ge V^{-2k}$. Apply the actual discrete logarithmic mean-square estimate [F2] to the polynomial with coefficients $b_n/n$, translating $[-T,T]$ to $[0,2T]$. The translation multiplies each coefficient by a unit complex number and preserves both its square norm and the sample spacing. Summing the threshold and substituting step 1.1 proves the claim. The empty sample set and zero polynomial obey the same estimate; a zero polynomial cannot have a nonempty positive-threshold sample set. [given, F1, F2, F3, step 1.1, algebra] ∎
