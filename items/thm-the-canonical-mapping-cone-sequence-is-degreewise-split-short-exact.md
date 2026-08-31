---
id: thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact
kind: theorem
title: "The canonical mapping-cone sequence is degreewise split short exact"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-canonical-inclusion-and-projection-for-a-mapping-cone, def-short-exact-sequence-of-complexes, def-split-short-exact-sequence-in-an-abelian-category, prop-finite-biproducts-of-complexes-are-computed-degreewise]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

For every chain map $f:C_\bullet\to D_\bullet$ in an abelian category, the
sequence
$$0\to D_\bullet\xrightarrow{j}\operatorname{Cone}(f)_\bullet\xrightarrow{q}C[1]_\bullet\to0$$
from [[def-canonical-inclusion-and-projection-for-a-mapping-cone]] is a short
exact sequence of complexes, and in each degree it is split short exact in the
ambient abelian category.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] The canonical maps are $j_n(y)=(y,0)$ and $q_n(y,x)=x$
([[def-canonical-inclusion-and-projection-for-a-mapping-cone]]).

[L2] A short exact sequence of complexes is degreewise exact
([[def-short-exact-sequence-of-complexes]]).

[L3] Finite biproducts of complexes are computed degreewise
([[prop-finite-biproducts-of-complexes-are-computed-degreewise]]).

[L4] A split short exact sequence in an abelian category is one with a one-sided
section or retraction exhibiting the middle object as a biproduct
([[def-split-short-exact-sequence-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $qj=0$. In degree $n$ the sequence is $$0\to D_n\xrightarrow{y\mapsto(y,0)}D_n\oplus C_{n-1}\xrightarrow{(y,x)\mapsto x}C_{n-1}\to0,$$ which is exact and split by the section $s_n(x):=(0,x)$. This uses the degreewise biproduct description from [L3] and is exactly the split shape of [L4]. [L1, L3, L4, given, algebra]

2.1 The maps $j$ and $q$ are chain maps by [L1], and step 1.1 proves exactness in every degree. Therefore [L2] makes the sequence a short exact sequence of complexes, with the degreewise splittings already exhibited in step 1.1. [L2, step 1.1, algebra] ∎
