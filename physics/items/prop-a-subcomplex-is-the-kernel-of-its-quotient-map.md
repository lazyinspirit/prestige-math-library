---
id: prop-a-subcomplex-is-the-kernel-of-its-quotient-map
kind: proposition
title: "A subcomplex is the kernel of its quotient map"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subcomplex,
       def-quotient-complex,
       lem-the-kernel-of-a-chain-map-is-computed-degreewise,
       thm-the-category-of-complexes-in-an-abelian-category-is-abelian,
       cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 12.13.3"
      url: "https://stacks.math.columbia.edu/tag/010V"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

If $S_\bullet\hookrightarrow C_\bullet$ is a subcomplex, then the quotient map
$C_\bullet\to C_\bullet/S_\bullet$ has kernel $S_\bullet$. Conversely, every
monomorphism of complexes identifies its source, up to unique isomorphism, with
a subcomplex of its target.

## Facts & Assumptions

**Given:** A subcomplex $S_\bullet\hookrightarrow C_\bullet$ and a monomorphism $m:A_\bullet\to C_\bullet$.

[L1] The quotient complex $C/S$ is defined degreewise from the quotients $C_n/S_n$ ([[def-quotient-complex]]).

[L2] Kernels of chain maps are computed degreewise ([[lem-the-kernel-of-a-chain-map-is-computed-degreewise]]).

[L3] In $\operatorname{Ch}(\mathcal A)$, monomorphisms are morphisms in an abelian category ([[thm-the-category-of-complexes-in-an-abelian-category-is-abelian]]).

[L4] In an abelian category, a morphism is monic exactly when its kernel is zero ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

## Proof

**Proof technique:** direct.

1.1 Let $q:C\to C/S$ be the quotient map. By [L1], each component $q_n:C_n\to C_n/S_n$ has kernel represented by $S_n\hookrightarrow C_n$. Then [L2] says the kernel complex of $q$ is exactly $S_\bullet$. [L1, L2]

2.1 Now let $m:A\to C$ be monic. Its kernel in $\operatorname{Ch}(\mathcal A)$ is therefore the zero complex. By [L2], that kernel is assembled degreewise from the kernels of the component maps $m_n$, so each $\ker(m_n)$ is zero. Then [L4] makes every $m_n$ monic in $\mathcal A$. Since $m$ is a chain map, the commuting squares $m_{n-1}d_n^A=d_n^C m_n$ show that the family of monomorphisms $m_n:A_n\hookrightarrow C_n$ is stable under the differentials. Hence these degreewise monomorphisms exhibit $A_\bullet$ as a subcomplex of $C_\bullet$, unique up to the usual unique isomorphism of represented subobjects. [L2, L3, L4, given, algebra] ∎
