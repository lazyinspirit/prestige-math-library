---
id: prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is
kind: proposition
title: "A chain map is a quasi-isomorphism exactly when its cochain reindexing is"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cochain-complex-in-an-abelian-category,
       def-cohomology-object-of-a-cochain-complex,
       def-quasi-isomorphism]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra, Remark 2.7.11"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

Let $f:C_\bullet\to D_\bullet$ be a chain map, and read both complexes as
cochain complexes by the reindexing convention
$(C^\sharp)^{-n}=C_n$, $(D^\sharp)^{-n}=D_n$. Then $f$ is a quasi-isomorphism if
and only if the induced cochain map $f^\sharp:C^\sharp\to D^\sharp$ is a
quasi-isomorphism in cohomology.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] A cochain complex may be read as a reindexed chain complex ([[def-cochain-complex-in-an-abelian-category]]).

[L2] Cohomology is the cokernel of the coboundary subobject inside the cocycle subobject ([[def-cohomology-object-of-a-cochain-complex]]).

[L3] A quasi-isomorphism is a chain map inducing isomorphisms on every homology object ([[def-quasi-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Under the reindexing convention [L1], the cocycles and coboundaries of $C^\sharp$ in degree $-n$ are exactly $Z_n(C)$ and $B_n(C)$. Therefore [L2] identifies $$H^{-n}(C^\sharp)\cong H_n(C),\qquad H^{-n}(D^\sharp)\cong H_n(D).$$ [L1, L2, given]

2.1 The map induced by $f^\sharp$ on $H^{-n}$ is therefore the same morphism as $H_n(f)$ under the identifications of step 1.1. Hence $H_n(f)$ is an isomorphism for every $n$ if and only if $H^{-n}(f^\sharp)$ is an isomorphism for every $n$. By [L3], this is exactly the claimed equivalence. [L3, step 1.1] ∎
