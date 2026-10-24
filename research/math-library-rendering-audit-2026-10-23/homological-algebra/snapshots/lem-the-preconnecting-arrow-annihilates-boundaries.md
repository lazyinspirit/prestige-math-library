---
id: lem-the-preconnecting-arrow-annihilates-boundaries
kind: lemma
title: "The preconnecting arrow annihilates boundaries"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-preconnecting-arrow-on-cycles,
       def-homology-object-of-a-chain-complex]
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

For a short exact sequence of complexes, the composite
$$B_n(C)\to Z_n(C)\xrightarrow{\widetilde\partial_n}H_{n-1}(A)$$
is zero.

## Facts & Assumptions

**Given:** A short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes and an integer $n$.

[L1] The preconnecting arrow is $\widetilde\partial_n=\delta_n^{\mathrm{snake}}q_n$, where $q_n:Z_n(C)\to H_n(C)$ is the homology quotient ([[def-preconnecting-arrow-on-cycles]]).

[L2] The homology quotient $q_n$ is the cokernel of the canonical boundary-to-cycle map $\beta_n:B_n(C)\to Z_n(C)$ ([[def-homology-object-of-a-chain-complex]]).

## Proof

**Proof technique:** direct.

1.1 Because $q_n$ is the cokernel of $\beta_n$, one has $q_n\beta_n=0$. [L2, given]

2.1 Using [L1], $$\widetilde\partial_n\beta_n=\delta_n^{\mathrm{snake}}q_n\beta_n=0.$$ Thus the composite from the boundary subobject to $H_{n-1}(A)$ is the zero morphism. [L1, step 1.1, algebra] ∎
