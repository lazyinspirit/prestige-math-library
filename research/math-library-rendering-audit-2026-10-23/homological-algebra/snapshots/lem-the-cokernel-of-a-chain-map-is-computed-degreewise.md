---
id: lem-the-cokernel-of-a-chain-map-is-computed-degreewise
kind: lemma
title: "The cokernel of a chain map is computed degreewise"
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

Let $f:C_\bullet\to D_\bullet$ be a chain map. The cokernels
$$D_n\twoheadrightarrow \operatorname{coker}(f_n)$$
assemble into a chain complex, and this complex is a cokernel of $f$ in
$\operatorname{Ch}(\mathcal A)$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] A chain map satisfies $d_n^D f_n=f_{n-1} d_n^C$ ([[def-chain-map]]).

[L2] Cokernels are universal among arrows that kill the displayed map ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** constructive.

1.1 Let $q_n:D_n\to Q_n$ be a cokernel of $f_n$. Since $$q_{n-1} d_n^D f_n=q_{n-1} f_{n-1} d_n^C=0$$ by [L1], [L2] gives a unique differential $d_n^Q:Q_n\to Q_{n-1}$ with $$d_n^Q q_n=q_{n-1} d_n^D.$$ [L1, L2, given, construct]

2.1 The family $Q_\bullet$ is a chain complex because $$d_{n-1}^Q d_n^Q q_n=q_{n-2} d_{n-1}^D d_n^D=0,$$ and $q_n$ is epic. The quotient map $q:D\to Q$ is a chain map by construction, and the componentwise cokernel universal properties from [L2] assemble to the cokernel universal property in $\operatorname{Ch}(\mathcal A)$. [L2, step 1.1, algebra, discharge-construct] ∎
