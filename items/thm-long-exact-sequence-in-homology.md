---
id: thm-long-exact-sequence-in-homology
kind: theorem
title: "The long exact sequence in homology"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connecting-morphism-in-homology,
       thm-a-chain-map-induces-a-well-defined-map-on-homology,
       lem-exactness-at-the-homology-of-the-left-complex,
       lem-exactness-at-the-homology-of-the-middle-complex,
       lem-exactness-at-the-homology-of-the-right-complex,
       lem-exactness-at-the-target-of-the-connecting-map]
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
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Statement

Let
$$0\to A_\bullet\to B_\bullet\to C_\bullet\to0$$
be a short exact sequence of complexes in an abelian category. Then there is an
exact sequence
$$\cdots\to H_n(A)\to H_n(B)\to H_n(C)\xrightarrow{\partial_n}H_{n-1}(A)\to H_{n-1}(B)\to H_{n-1}(C)\to\cdots.$$

## Facts & Assumptions

**Given:** A short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes.

[L1] Every chain map induces a well-defined map on homology ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[L2] The four local exactness claims around $\partial_n$ are provided by the preceding exactness lemmas ([[lem-exactness-at-the-homology-of-the-left-complex]], [[lem-exactness-at-the-homology-of-the-middle-complex]], [[lem-exactness-at-the-homology-of-the-right-complex]], [[lem-exactness-at-the-target-of-the-connecting-map]]).

## Proof

**Proof technique:** direct.

1.1 The maps $H_n(A)\to H_n(B)$ and $H_n(B)\to H_n(C)$ are defined by [L1], and the connecting map $\partial_n$ is defined by [[def-connecting-morphism-in-homology]]. Thus the displayed sequence exists in every degree. [L1, given, construct]

2.1 For each integer $n$, [L2] gives exactness at $H_n(A)$, $H_n(B)$, $H_n(C)$, and $H_{n-1}(A)$. Therefore every four-term window around $\partial_n$ is exact. [L2, step 1.1, algebra]

3.1 Since $n$ was arbitrary, these exact windows concatenate to the displayed bi-infinite exact sequence. [step 2.1, algebra] ∎
