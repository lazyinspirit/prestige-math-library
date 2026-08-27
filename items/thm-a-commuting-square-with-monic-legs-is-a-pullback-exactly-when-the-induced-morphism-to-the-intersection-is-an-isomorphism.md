---
id: thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism
kind: theorem
title: "A square with monic legs is a pullback exactly when it identifies the source with the intersection subobject"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism, def-intersection-of-a-family-of-subobjects, thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections, thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Theorem 2.5"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

Consider a commutative square in an abelian category

```tikzcd
X \arrow[r] \arrow[d] & B \arrow[d, hook, "m"] \\
C \arrow[r, hook, "n"'] & D
```

whose right and bottom legs are monomorphisms. Let $I\to D$ be the
intersection of the subobjects represented by $m$ and $n$. Then the square is a
pullback if and only if the induced morphism $X\to I$ is an isomorphism.

## Facts & Assumptions

**Given:** The displayed commutative square with monic right and bottom legs.

[L1] In an abelian category, pullbacks of cospans exist and are computed by the
construction of [[thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs]].

[L2] An intersection of two subobjects is their greatest lower bound in the
subobject order
([[def-intersection-of-a-family-of-subobjects]],
[[thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the pullback $P\to D$ of the two monics $m$ and $n$ exists. Because the square defining $P$ is a common lower bound of $[m]$ and $[n]$, and every other common lower bound factors uniquely through that pullback, [L2] says that $P\to D$ represents their intersection subobject. [L1, L2]

2.1 If the displayed square is a pullback, then its source $X\to D$ is another representative of the same greatest lower bound from step 1.1. Therefore the induced morphism $X\to I$ is an isomorphism. [L2, step 1.1]

3.1 Conversely, if the induced map $X\to I$ is an isomorphism, then composing the pullback square representing $I$ from step 1.1 with that isomorphism yields the displayed square. Pullbackness is invariant under replacing the corner object by an isomorphic one, so the displayed square is a pullback. [step 1.1, step 2.1] ∎
