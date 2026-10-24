---
id: lem-the-kernel-of-a-chain-map-is-computed-degreewise
kind: lemma
title: "The kernel of a chain map is computed degreewise"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-map,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers]
proof_strategy: constructive
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

Let $f:C_\bullet\to D_\bullet$ be a chain map. The kernels
$$\ker(f_n)\hookrightarrow C_n$$
assemble into a chain complex, and this complex is a kernel of $f$ in
$\operatorname{Ch}(\mathcal A)$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] A chain map satisfies $d_n^D f_n=f_{n-1} d_n^C$ ([[def-chain-map]]).

[L2] Kernels are universal among arrows annihilated by the displayed map ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** constructive.

1.1 Let $k_n:K_n\to C_n$ be a kernel of $f_n$. By [L1], $$f_{n-1} d_n^C k_n=d_n^D f_n k_n=0,$$ so [L2] gives a unique differential $d_n^K:K_n\to K_{n-1}$ with $$k_{n-1} d_n^K=d_n^C k_n.$$ [L1, L2, given, construct]

2.1 The family $K_\bullet$ is a chain complex because $$k_{n-2} d_{n-1}^K d_n^K=d_{n-1}^C d_n^C k_n=0,$$ and $k_{n-2}$ is monic. The map $k:K\to C$ is a chain map by construction, and its componentwise kernel universal properties from [L2] together give the kernel universal property in $\operatorname{Ch}(\mathcal A)$. [L2, step 1.1, algebra, discharge-construct] ∎
