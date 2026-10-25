---
id: cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology
kind: corollary
title: "A short exact sequence with acyclic middle complex identifies neighbouring homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-long-exact-sequence-in-homology,
       def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
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

If
$$0\to A_\bullet\to B_\bullet\to C_\bullet\to0$$
is a short exact sequence of complexes and $B_\bullet$ is acyclic, then each
connecting morphism
$$\partial_n:H_n(C)\xrightarrow{\sim}H_{n-1}(A)$$
is an isomorphism.

## Facts & Assumptions

**Given:** A short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes with $B_\bullet$ acyclic.

[L1] The long exact homology sequence exists ([[thm-long-exact-sequence-in-homology]]).

[L2] Acyclic means that every homology object of the complex is zero ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the degree-$n$ window is $$H_n(B)\to H_n(C)\xrightarrow{\partial_n}H_{n-1}(A)\to H_{n-1}(B).$$ [L1, given, construct]

2.1 The outer terms in that window are zero by [L2]. Exactness then forces $\partial_n$ to be both monic and epic, hence an isomorphism. [L1, L2, step 1.1, algebra] ∎

