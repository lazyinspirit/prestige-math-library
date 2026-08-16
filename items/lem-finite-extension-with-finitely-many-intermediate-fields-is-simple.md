---
id: lem-finite-extension-with-finitely-many-intermediate-fields-is-simple
kind: lemma
title: "A finite extension with only finitely many intermediate fields is simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, cor-finite-extensions-of-finite-fields-are-simple, def-extension-degree-and-finite-extension, def-field-extension-generated-subfields-and-simple-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $E/F$ be a finite extension. If it has only finitely many intermediate
fields, then it is simple.

## Facts & Assumptions

**Given:** A finite extension $E/F$ with finitely many intermediate fields.

[L1] A finite extension of a finite field is simple ([[cor-finite-extensions-of-finite-fields-are-simple]]).

[L2] A finite extension is a finite-dimensional vector space over its base ([[def-extension-degree-and-finite-extension]]).

[L3] A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

[L4] The field $F(\alpha)$ is the smallest intermediate field containing $F$ and $\alpha$, and $E/F$ is simple when $E=F(\alpha)$ for some $\alpha$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ is finite, [L1] supplies a primitive element. [L1]

1.2 Suppose $F$ is infinite. If every intermediate field $F(\alpha)$ with $\alpha\in E$ were proper, then the finitely many proper intermediate fields would cover $E$, because every $\alpha$ lies in its own $F(\alpha)$. [L4]

2.1 Each proper intermediate field is a proper $F$-linear subspace of the finite-dimensional space $E$ from [L2], so the cover in step 1.2 contradicts [L3]. Hence $E=F(\alpha)$ for some $\alpha$, and the extension is simple. [step 1.2, L2, L3, L4]

3.1 Together with the finite-base case, this proves the assertion. [step 1.1, step 2.1] ∎
