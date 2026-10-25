---
id: prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees
kind: proposition
title: "A short exact sequence of complexes gives six-term exact sequences when homology is concentrated in two degrees"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-long-exact-sequence-in-homology]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Statement

Let
$$0\to A_\bullet\to B_\bullet\to C_\bullet\to0$$
be a short exact sequence of complexes in an abelian category. Fix $n\in\mathbb Z$, and assume that
all three complexes have zero homology outside degrees $n$ and $n-1$. Then the
long exact sequence collapses to a six-term exact sequence
$$0\to H_n(A)\to H_n(B)\to H_n(C)\xrightarrow{\partial_n}H_{n-1}(A)\to H_{n-1}(B)\to H_{n-1}(C)\to0.$$

## Facts & Assumptions

**Given:** A short exact sequence of complexes in an abelian category whose homology is concentrated in degrees $n$ and $n-1$.

[L1] Every short exact sequence of complexes yields a long exact homology sequence ([[thm-long-exact-sequence-in-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the short exact sequence gives a long exact sequence running through the six displayed terms. [L1, given, construct]

2.1 Every homology term immediately before and after those six terms is zero by the concentration hypothesis. Removing those zero terms leaves the displayed six-term exact sequence. [step 1.1, given, algebra] ∎
