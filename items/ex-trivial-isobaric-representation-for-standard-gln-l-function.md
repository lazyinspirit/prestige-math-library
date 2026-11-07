---
dependency_level: 4
id: ex-trivial-isobaric-representation-for-standard-gln-l-function
kind: example
title: "The Trivial Isobaric Representation and a Standard GL(n) L-Function"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
deps:
  - def-pure-isobaric-automorphic-sum
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), §1.1"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity, §2.12.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Example

Over $F=\mathbb Q$, let $r\ge1$ and let $\Pi_r=\mathbf 1\boxplus\cdots\boxplus\mathbf 1$ be the isobaric sum of $r$ copies of the trivial character of $\mathbb A_{\mathbb Q}^{\times}/\mathbb Q^\times$, viewed as a representation of $\mathrm{GL}_r(\mathbb A_{\mathbb Q})$. Its finite standard local factor at each prime $p$ is $(1-p^{-s})^{-r}$, and for $\operatorname{Re}(s)>1$ its finite standard L-function is

$$L(s,\Pi_r)=\prod_p(1-p^{-s})^{-r}.$$

## Example references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, §1.1](https://arxiv.org/pdf/2309.07534v2)

[Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, §2.12.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

## Facts & Assumptions

**Given:** An integer $r\ge1$ and a complex number $s$ with $\operatorname{Re}(s)>1$.

[F1] [[def-unitary-cuspidal-generic-gln-representation]]: Unitary means that the representation space has a positive-definite Hermitian inner product invariant under the group.

[F2] [[def-unitary-cuspidal-generic-gln-representation]]: For $n=1$ the cuspidality condition is vacuous because there is no proper parabolic subgroup, and genericity is automatic because $N_1$ is trivial.

[F3] [[def-pure-isobaric-automorphic-sum]]: A pure isobaric automorphic representation has a Langlands isobaric decomposition.

[F4] [[def-pure-isobaric-automorphic-sum]]: The constituents are unitary and cuspidal, their ranks sum to the total rank, and repetitions are allowed.

[F5] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: For a pure isobaric sum $\Pi=\boxplus_{j=1}^k\pi_j$, its local standard factor is defined by $L_v(s,\Pi_v)=\prod_{j=1}^kL_v(s,\pi_{j,v})$.

[F6] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: At an unramified finite place, the standard local factor is $\prod_{i=1}^n(1-\alpha_{i,v}q_v^{-s})^{-1}$.

[F7] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: The finite global standard L-function is the product over finite places of the local standard factors in any half-plane of absolute convergence.

## Verification

1.1 The trivial character takes values in $S^1$, so its one-dimensional representation has the invariant standard Hermitian inner product required by [F1]. By [F2], it is cuspidal and generic in rank one. [given, F1, F2]

2.1 By [F3] and [F4], the $r$ repeated trivial constituents give a pure isobaric representation $\Pi_r$ of rank $r$. By [F5] its local standard factor at $p$ is the product of the $r$ constituent factors. Each trivial local character is fixed by $\mathbb Z_p^\times$ and has parameter $1$, so [F6] gives $L_p(s,\Pi_{r,p})=(1-p^{-s})^{-r}$. The case $r=1$ is the single-factor instance of this formula. [given, F3, F4, F5, F6, step 1.1]

3.1 Put $\sigma=\operatorname{Re}(s)>1$. For each prime $p$, $|p^{-s}|=p^{-\sigma}<1/2$ and $-\log(1-p^{-s})=\sum_{k\ge1}p^{-ks}/k$. Therefore $\sum_p\sum_{k\ge1}p^{-k\sigma}/k\le\sum_p p^{-\sigma}/(1-p^{-\sigma})\le2\sum_p p^{-\sigma}\le2\sum_{n\ge2}n^{-\sigma}\le2\int_1^\infty x^{-\sigma}\,dx=2/(\sigma-1)<\infty$. Multiplication by the fixed integer $r$ preserves convergence, so the logarithmic Euler-product series for $\prod_p(1-p^{-s})^{-r}$ converges absolutely. By [F7], multiplying the local factors from step 2.1 gives $L(s,\Pi_r)=\prod_p(1-p^{-s})^{-r}$ in this half-plane. [given, F7, step 2.1, algebra] ∎
