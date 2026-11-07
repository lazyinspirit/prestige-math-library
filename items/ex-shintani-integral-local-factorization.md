---
id: ex-shintani-integral-local-factorization
kind: example
title: "Local Shintani Factors in a Global Rankin–Selberg Integral"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-murase-sugano-shintani-global-rankin-selberg-integral
  - thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks
dependency_level: 7
sources:
  scraped: []
  references:
    - title: "Atsushi Murase and Takashi Sugano, Shintani Functions and Automorphic L-Functions for GL(n), §8"
      url: "https://www.jstage.jst.go.jp/article/tmj1949/48/2/48_2_165/_pdf"
    - title: "Unramified Rankin–Selberg Euler Factor for Adjacent Ranks"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Example

At a finite place $v$ of residue cardinality $q_v=5$, let $\pi_v$ be unramified local data of rank $2$ with Satake parameter $\{1,2\}$, and let $\Omega_v$ be an unramified character with $\Omega_v(\varpi_v)=3$. The contragredient $\pi_v^\vee$ is the dual representation, whose Frobenius eigenvalues are the reciprocals of those of $\pi_v$; twisting it by $\Omega_v$ multiplies those eigenvalues by $\Omega_v(\varpi_v)$. The local factor of $\Omega_v\otimes\pi_v^\vee$ at variable $u$, which is the local factor appearing in the $\Omega\otimes\widetilde F$ term of the Murase–Sugano identity when $\pi_v$ is the component of $F$, is

$$L_v(u,\Omega_v\otimes\widetilde{\pi}_{F,v})=\frac{1}{(1-3\cdot5^{-u})(1-\tfrac32\cdot5^{-u})}.$$

This is a local calculation only; it assumes no global automorphic realization of the displayed local parameters.

## Example references

[Atsushi Murase and Takashi Sugano, *Shintani Functions and Automorphic L-Functions for GL(n)*, §8](https://www.jstage.jst.go.jp/article/tmj1949/48/2/48_2_165/_pdf)

[Unramified Rankin–Selberg Euler Factor for Adjacent Ranks](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

## Facts & Assumptions

**Given:** $q_v=5$, $\pi_{F,v}$ is unramified of rank $2$ with Satake parameter $\{1,2\}$, and $\Omega_v$ is unramified with $\Omega_v(\varpi_v)=3$. Verify the displayed local factor.

[F1] [[thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks]]: for unramified ranks $2$ and $1$, the tensor local factor is the product over the two rank-$2$ eigenvalues and the rank-$1$ eigenvalue.

## Verification

1.1 On the dual vector space, Frobenius eigenvalues are reciprocals, so the contragredient parameter has eigenvalues $\{1,\tfrac12\}$. The twist multiplies both by $\Omega_v(\varpi_v)=3$, giving $\{3,\tfrac32\}$. [given, algebra]

2.1 By [F1], the rank-$2$ and rank-$1$ local factor is the product over their Frobenius eigenvalues. Substituting $3,\tfrac32$, and $q_v=5$ gives the displayed product. [given, F1, step 1.1, algebra] ∎

## Verification references

[Atsushi Murase and Takashi Sugano, *Shintani Functions and Automorphic L-Functions for GL(n)*, §8](https://www.jstage.jst.go.jp/article/tmj1949/48/2/48_2_165/_pdf)

[Unramified Rankin–Selberg Euler Factor for Adjacent Ranks](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
