---
id: thm-a-chain-map-induces-a-well-defined-map-on-homology
kind: theorem
title: "A chain map induces a well-defined map on homology"
status: published
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homology-object-of-a-chain-complex,
       lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Statement

Let $f:C_\bullet\to D_\bullet$ be a chain map. For every $n\in\mathbb Z$ there
is a unique morphism
$$H_n(f):H_n(C)\to H_n(D)$$
such that the quotient maps from cycles to homology commute with $Z_n(f)$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$ and an integer $n$.

[L1] The maps $Z_n(f):Z_n(C)\to Z_n(D)$ and $B_n(f):B_n(C)\to B_n(D)$ exist and are compatible with the boundary and cycle inclusions ([[lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries]]).

[L2] $H_n(C)$ and $H_n(D)$ are the cokernels of the canonical maps $B_n(C)\to Z_n(C)$ and $B_n(D)\to Z_n(D)$ ([[def-homology-object-of-a-chain-complex]]).

[L3] A cokernel is universal among arrows that kill the map being quotiented ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 Let $\beta_C:B_n(C)\to Z_n(C)$ and $\beta_D:B_n(D)\to Z_n(D)$ be the boundary-to-cycle maps. Compatibility in [L1] means $$Z_n(f)\beta_C=\beta_D B_n(f).$$ Therefore the composite $q_D Z_n(f)$ kills $\beta_C$, where $q_D:Z_n(D)\to H_n(D)$ is the homology quotient. [L1, L2, given, algebra]

2.1 Since $q_D Z_n(f)$ annihilates $\beta_C$, the cokernel property [L3] for $q_C:Z_n(C)\to H_n(C)$ gives a unique morphism $H_n(f):H_n(C)\to H_n(D)$ with $$H_n(f)\,q_C=q_D Z_n(f).$$ By [L2], this is exactly the induced map on homology. [L2, L3, step 1.1, construct, discharge-construct] ∎
