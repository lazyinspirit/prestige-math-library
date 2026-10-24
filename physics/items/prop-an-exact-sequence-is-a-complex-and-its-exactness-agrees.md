---
id: prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees
kind: proposition
title: "An exact sequence is a complex, and its exactness agrees with the earlier notion"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
       def-chain-complex-in-an-abelian-category,
       def-exactness-of-a-complex-at-a-degree-and-acyclic-complex,
       def-exactness-at-a-node,
       thm-the-arrow-theoretic-criterion-for-exactness]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Romyar Sharifi, Homological Algebra, Remark 2.7.12"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Statement

Every exact sequence in an abelian category is a chain complex. At each object,
its exactness as a chain complex is exactly the previously defined exactness of
the sequence.

## Facts & Assumptions

**Given:** A composable sequence in an abelian category.

[L1] An exact sequence is exact at each interior object in the sense of [[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]].

[L2] Exactness at a node is the equality of image and kernel subobjects ([[def-exactness-at-a-node]]).

[L3] For composable morphisms $A\xrightarrow{f}B\xrightarrow{g}C$, the relation $gf=0$ is equivalent to the factorization of $\operatorname{im}(f)$ through $\ker(g)$ ([[thm-the-arrow-theoretic-criterion-for-exactness]]).

[L4] Exactness of a chain complex at degree $n$ is the same equality of boundary and cycle subobjects at that degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

## Proof

**Proof technique:** direct.

1.1 If $A\xrightarrow{f}B\xrightarrow{g}C$ is exact at $B$, then [L1] and [L2] identify $\operatorname{im}(f)$ with $\ker(g)$. By [L3], this implies $gf=0$. Applying this at each consecutive pair shows that any exact sequence is a chain complex. [L1, L2, L3]

2.1 At a chosen object of that exact sequence, the chain-complex notion in [L4] again compares $\operatorname{im}(f)$ with $\ker(g)$. That is exactly the criterion in [L2], so no new notion of exactness is introduced. [L2, L4] ∎
