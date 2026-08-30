---
id: lem-the-differential-descends-to-a-quotient-complex
kind: lemma
title: "The differential descends to a quotient complex"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subcomplex,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       def-chain-complex-in-an-abelian-category]
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

Let $S_\bullet\hookrightarrow C_\bullet$ be a subcomplex in an abelian
category. For every $n$ the differential $d_n^C$ induces a unique morphism
$$\bar d_n:C_n/S_n\to C_{n-1}/S_{n-1},$$
and these induced morphisms satisfy $\bar d_{n-1}\bar d_n=0$.

## Facts & Assumptions

**Given:** A subcomplex $S_\bullet\hookrightarrow C_\bullet$ with quotient maps $q_n:C_n\to C_n/S_n$.

[L1] In a subcomplex, the differential restricts to $S_n\to S_{n-1}$ ([[def-subcomplex]]).

[L2] A cokernel is universal among arrows vanishing on the given subobject ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[L3] In a chain complex, consecutive differentials compose to zero ([[def-chain-complex-in-an-abelian-category]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1], the composite $q_{n-1} d_n^C$ kills $S_n$, because $d_n^C(S_n)$ lands in $S_{n-1}$ and $q_{n-1}$ kills $S_{n-1}$. Hence [L2] gives a unique map $\bar d_n:C_n/S_n\to C_{n-1}/S_{n-1}$ with $$\bar d_n q_n=q_{n-1} d_n^C.$$ [L1, L2, given, construct]

2.1 Composing the identity from step 1.1 twice and using [L3], $$\bar d_{n-1}\bar d_n q_n=q_{n-2} d_{n-1}^C d_n^C=0.$$ Since $q_n$ is epic as a cokernel map, $\bar d_{n-1}\bar d_n=0$. [L2, L3, step 1.1, algebra, discharge-construct] ∎
