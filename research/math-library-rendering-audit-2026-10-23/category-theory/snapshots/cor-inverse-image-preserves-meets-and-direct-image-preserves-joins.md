---
id: cor-inverse-image-preserves-meets-and-direct-image-preserves-joins
kind: corollary
title: "Inverse image preserves meets and direct image preserves joins"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection, thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Section V.7"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-22
---

## Statement

Let $f:A\to A'$ be a morphism in an abelian category. Then for subobjects
$C_1,C_2\le A'$ and $B_1,B_2\le A$ one has

$$f^*(C_1\wedge C_2)=f^*C_1\wedge f^*C_2,\qquad f_*(B_1\vee B_2)=f_*B_1\vee f_*B_2.$$

## Facts & Assumptions

**Given:** A morphism $f:A\to A'$ and the displayed subobjects.

[L1] The subobject maps $f_*$ and $f^*$ form a Galois connection ([[thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection]]).

[L2] Subobjects form lattices, so meets and joins are characterized by their order universal properties ([[thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice]]).

## Proof

**Proof technique:** direct.

1.1 For any subobject $B\le A$, $$ B\le f^*(C_1\wedge C_2) \iff f_*B\le C_1\wedge C_2 \iff f_*B\le C_1 \text{ and } f_*B\le C_2 \iff B\le f^*C_1 \text{ and } B\le f^*C_2. $$ By [L2], this says that $f^*(C_1\wedge C_2)$ is the meet of $f^*C_1$ and $f^*C_2$. [L1, L2, algebra]

1.2 For any subobject $C\le A'$, $$ f_*(B_1\vee B_2)\le C \iff B_1\vee B_2\le f^*C \iff B_1\le f^*C \text{ and } B_2\le f^*C \iff f_*B_1\le C \text{ and } f_*B_2\le C. $$ Again [L2] identifies this with the universal property of the join $f_*B_1\vee f_*B_2$. [L1, L2, algebra]

2.1 Steps 1.1 and 1.2 are exactly the two displayed identities. [step 1.1, step 1.2] ∎
