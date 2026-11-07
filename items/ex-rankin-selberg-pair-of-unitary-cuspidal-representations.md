---
dependency_level: 4
id: ex-rankin-selberg-pair-of-unitary-cuspidal-representations
kind: example
title: "A Pair of Unitary Cuspidal Representations in a Rankin–Selberg Product"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §0"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity, §2.12.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Example

Let $\chi:\mathbb Q^\times\backslash\mathbb A_{\mathbb Q}^\times\to S^1$ be a continuous unitary Hecke character, meaning a continuous character of the idele-class group with values in the unit circle. Regard $\chi$ and $\chi^{-1}$ as one-dimensional automorphic representations $\pi_\chi$ and $\pi_{\chi^{-1}}$ of $\mathrm{GL}_1(\mathbb A_{\mathbb Q})$. They are a pair of unitary cuspidal generic representations, and their finite Rankin–Selberg L-function is

$$L(s,\pi_\chi\times\pi_{\chi^{-1}})=\prod_p(1-p^{-s})^{-1}\qquad(\operatorname{Re}(s)>1).$$

## Example references

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §0](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, §2.12.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

## Facts & Assumptions

**Given:** A continuous character $\chi:\mathbb Q^\times\backslash\mathbb A_{\mathbb Q}^\times\to S^1$.

[F1] [[def-unitary-cuspidal-generic-gln-representation]]: Unitary means that the representation space has a positive-definite Hermitian inner product invariant under the group.

[F2] [[def-unitary-cuspidal-generic-gln-representation]]: For $n=1$ the cuspidality condition is vacuous because there is no proper parabolic subgroup, and genericity is automatic because $N_1$ is trivial.

[F3] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: For two unitary cuspidal generic representations, define the local Rankin–Selberg factor using the tensor parameter.

[F4] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: At an unramified finite place, the local Rankin–Selberg factor is $\prod_{i=1}^n\prod_{j=1}^m(1-\alpha_{i,v}\beta_{j,v}q_v^{-s})^{-1}$.

[F5] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: The finite global Rankin–Selberg function is the product over finite places of its local factors in any half-plane of absolute convergence.

## Verification

1.1 Both $\chi$ and $\chi^{-1}$ take values in $S^1$, so their one-dimensional representations have the invariant standard Hermitian inner product required by [F1]. By [F2], both representations are cuspidal and generic in rank one. [given, F1, F2]

2.1 At every finite prime $p$, the tensor product of the local parameters of $\chi_p$ and $\chi_p^{-1}$ is the trivial one-dimensional parameter by [F3]. It is unramified with Satake parameter $1$, so [F4] gives local factor $(1-p^{-s})^{-1}$. [given, F3, F4, step 1.1]

3.1 Put $\sigma=\operatorname{Re}(s)>1$. For each prime $p$, $|p^{-s}|=p^{-\sigma}<1/2$ and $-\log(1-p^{-s})=\sum_{k\ge1}p^{-ks}/k$. Therefore $\sum_p\sum_{k\ge1}p^{-k\sigma}/k\le\sum_p p^{-\sigma}/(1-p^{-\sigma})\le2\sum_p p^{-\sigma}\le2\sum_{n\ge2}n^{-\sigma}\le2\int_1^\infty x^{-\sigma}\,dx=2/(\sigma-1)<\infty$. Thus the logarithmic Euler-product series converges absolutely; [F5] identifies the product of the factors from step 2.1 with the stated finite Rankin–Selberg L-function. [given, F5, step 2.1, algebra] ∎
