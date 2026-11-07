---
dependency_level: 11
id: ex-yang-tempered-isobaric-factor-improved-saving
kind: example
title: "The Improved Saving for a Tempered GL(3) Isobaric Factor"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-yang-t-aspect-subconvexity-glnplus1-gln
  - def-pure-isobaric-automorphic-sum
  - def-unitary-cuspidal-generic-gln-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Theorem A"
      url: "https://arxiv.org/pdf/2309.07534v2"
pipeline_run: number-theory-all-141-2026-10-25
---

## Example

Assume countable choice. Let $\Pi$ be a unitary pure isobaric automorphic representation of $\mathrm{GL}_3(\mathbb A_\mathbb Q)$ whose local components lie in the tempered unitary dual, and let $\pi'$ be a unitary cuspidal automorphic representation of $\mathrm{GL}_2(\mathbb A_\mathbb Q)$. For every $t\in\mathbb R$ and $\varepsilon>0$,

$$L(1/2+it,\Pi\times\pi')\ll_{\Pi,\pi',\varepsilon}(1+|t|)^{29/20+\varepsilon}.$$

## Example references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Theorem A, §1.1](https://arxiv.org/pdf/2309.07534v2)

## Facts & Assumptions

**Given:** Countable choice, a tempered unitary pure isobaric representation $\Pi$ of $\mathrm{GL}_3(\mathbb A_\mathbb Q)$, a unitary cuspidal representation $\pi'$ of $\mathrm{GL}_2(\mathbb A_\mathbb Q)$, and arbitrary $t\in\mathbb R$, $\varepsilon>0$. Prove the displayed bound.

[F1] [[thm-yang-t-aspect-subconvexity-glnplus1-gln]]: If $\Pi$ is tempered, the exponent is $\frac{n(n+1)}4-\frac1{4(3n-1)}+\varepsilon$.

## Proof

1.1 Substituting $n=2$ gives $\frac{n(n+1)}4-\frac1{4(3n-1)}=\frac64-\frac1{20}=\frac{29}{20}$. [given, algebra]

2.1 The hypotheses of [F1] hold with $n=2$ and every local component of $\Pi$ tempered. Applying its tempered clause and the exponent computed in Step 1.1 gives the stated bound for every real $t$. [given, F1, step 1.1, algebra] ∎

## Proof references

The argument is the specialization $n=2$ of the cited tempered clause; the theorem supplier remains escalated, so this conditional example is also escalated.
