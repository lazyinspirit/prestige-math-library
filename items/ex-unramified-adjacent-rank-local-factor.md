---
id: ex-unramified-adjacent-rank-local-factor
kind: example
title: "An Unramified Adjacent-Rank Local L-Factor"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks
dependency_level: 6
sources:
  scraped: []
  references:
    - title: "Unramified Rankin–Selberg Euler Factor for Adjacent Ranks"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Example

At a finite place $v$ with residue cardinality $q_v=7$, suppose that $\pi_v$ and $\pi'_v$ are unramified representations of $\mathrm{GL}_2(F_v)$ and $\mathrm{GL}_1(F_v)$ with Satake parameters $\{1,2\}$ and $\{3\}$. Their adjacent-rank Rankin–Selberg local factor is

$$L_v(s,\pi_v\times\pi'_v)=\frac{1}{(1-3\cdot7^{-s})(1-6\cdot7^{-s})}.$$

## Example references

[Unramified Rankin–Selberg Euler Factor for Adjacent Ranks](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

## Facts & Assumptions

**Given:** $q_v=7$, $\pi_v,\pi'_v$ are unramified of ranks $2,1$, and their Satake parameters are $\{1,2\}$, $\{3\}$. Verify the displayed local factor.

[F1] [[thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks]]: for ranks $n+1,n$, the local factor is $\prod_{i=1}^{n+1}\prod_{j=1}^{n}(1-\alpha_{i,v}\beta_{j,v}q_v^{-s})^{-1}$.

## Verification

1.1 Substitute $n=1$, $q_v=7$, $\alpha_{1,v}=1$, $\alpha_{2,v}=2$, and $\beta_{1,v}=3$ into [F1]. The product becomes $(1-3\cdot7^{-s})^{-1}(1-6\cdot7^{-s})^{-1}$. [given, F1]

2.1 Combining the two factors gives the displayed denominator $(1-3\cdot7^{-s})(1-6\cdot7^{-s})$, so the claimed local factor is correct. [given, step 1.1, algebra] ∎

## Verification references

[Unramified Rankin–Selberg Euler Factor for Adjacent Ranks](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
