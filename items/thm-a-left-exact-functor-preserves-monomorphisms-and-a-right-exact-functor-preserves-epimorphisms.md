---
id: thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms
kind: theorem
title: "A left exact functor preserves monomorphisms and a right exact functor preserves epimorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-one-sided-and-two-sided-exactness-by-short-exact-sequences, cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.2"
      url: "https://stacks.math.columbia.edu/tag/010N"
pipeline_run: frontier-21
---

## Statement

A left exact functor between abelian categories preserves monomorphisms, and a
right exact functor preserves epimorphisms.

## Facts & Assumptions

**Given:** A functor between abelian categories.

[L1] One-sided exactness is characterized by the corresponding short exact
sequence test
([[thm-one-sided-and-two-sided-exactness-by-short-exact-sequences]]).

[L2] In an abelian category, monomorphisms are exactly the zero-kernel maps and
epimorphisms are exactly the zero-cokernel maps
([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

## Proof

**Proof technique:** direct.

1.1 If $f:A\to B$ is monic, then [L2] says $0\to A\xrightarrow{f}B$ is left exact. A left exact functor carries this to another left exact sequence by [L1], so $F(f)$ again has zero kernel. By [L2], $F(f)$ is monic. [L1, L2]

2.1 The epimorphism claim is dual: if $f$ is epic, then [L2] says $A\xrightarrow{f}B\to0$ is right exact, and a right exact functor carries it to a right exact sequence. Hence the cokernel of $F(f)$ is zero, so [L2] makes $F(f)$ epic. [L1, L2] ∎
