---
id: prop-base-field-embeddings-carry-elements-to-conjugates
kind: proposition
title: "A base-field embedding carries an algebraic element to a conjugate"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-elements-over-a-field, lem-polynomials-and-roots-transport-along-field-isomorphisms, prop-endomorphisms-of-a-splitting-field-permute-its-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $\sigma:K\to L$ be an $F$-embedding and let $\alpha\in K$ be algebraic
over $F$. Then $\sigma(\alpha)$ is conjugate to $\alpha$ over $F$. In
particular, an $F$-endomorphism of a splitting field permutes the distinct roots
of every base polynomial that splits there.

## Facts & Assumptions

**Given:** An $F$-embedding $\sigma:K\to L$ and an element $\alpha\in K$ algebraic over $F$.

[L1] A field isomorphism transports polynomial evaluation and carries roots to roots after applying the induced coefficient map ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L2] An endomorphism of a splitting field fixing the base permutes the finite set of distinct roots of the defining polynomial ([[prop-endomorphisms-of-a-splitting-field-permute-its-roots]]).

[L3] Conjugate elements are the roots of the same minimal polynomial over the base ([[def-conjugate-elements-over-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Regard $\sigma$ as an isomorphism $K\to\sigma(K)\subseteq L$. Let $m_\alpha\in F[x]$ be the minimal polynomial of $\alpha$. Since $\sigma$ fixes $F$, [L1] gives $m_\alpha(\sigma(\alpha))=\sigma(m_\alpha(\alpha))=0$. [L1]

2.1 Thus $\sigma(\alpha)$ is a root of $m_\alpha$ and is conjugate to $\alpha$ by [L3]. [step 1.1, L3]

3.1 When $K=L$ is a splitting field, [L2] strengthens this root preservation to a permutation of the distinct roots. [L2] ∎
