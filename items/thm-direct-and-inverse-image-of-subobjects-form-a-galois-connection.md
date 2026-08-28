---
id: thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection
kind: theorem
title: "Direct and inverse image of subobjects form a Galois connection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-direct-image-and-inverse-image-of-a-subobject, def-galois-connection, thm-the-image-is-the-least-subobject-through-which-a-morphism-factors]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Section V.7"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-22
---

## Statement

Let $f:A\to A'$ be a morphism in an abelian category. Then the direct-image map

$$f_*:\operatorname{Sub}(A)\to\operatorname{Sub}(A')$$

and the inverse-image map

$$f^*:\operatorname{Sub}(A')\to\operatorname{Sub}(A)$$

form a Galois connection:

$$f_*B\le C\quad\Longleftrightarrow\quad B\le f^*C.$$

## Facts & Assumptions

**Given:** A morphism $f:A\to A'$ and subobjects $B\le A$, $C\le A'$.

[L1] Direct image and inverse image are defined by image factorization and pullback respectively ([[def-the-direct-image-and-inverse-image-of-a-subobject]]).

[L2] A Galois connection between preorders is exactly a pair of monotone maps satisfying the displayed biconditional ([[def-galois-connection]]).

[L3] The image of a morphism is the least subobject through which that morphism factors ([[thm-the-image-is-the-least-subobject-through-which-a-morphism-factors]]).

## Proof

**Proof technique:** direct.

1.1 Assume $f_*B\le C$. By [L1], the composite $B\rightarrowtail A\xrightarrow{f} A'$ factors through the subobject $C\rightarrowtail A'$. The pullback defining $f^*C$ therefore gives a factorization of $B$ through $f^*C$, so $B\le f^*C$. [L1, construct]

1.2 Assume $B\le f^*C$. Composing with the pullback leg $f^*C\to C$ shows that the composite $B\to A'$ factors through $C$. By [L3], the image $f_*B$ is the least subobject of $A'$ with that property, so $f_*B\le C$. [L1, L3]

2.1 Steps 1.1 and 1.2 prove the displayed biconditional, which is exactly the Galois-connection condition of [L2]. [L2, step 1.1, step 1.2] ∎
