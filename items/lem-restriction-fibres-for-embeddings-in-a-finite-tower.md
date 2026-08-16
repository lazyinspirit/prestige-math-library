---
id: lem-restriction-fibres-for-embeddings-in-a-finite-tower
kind: lemma
title: "Restriction partitions embeddings in a finite tower into extension fibres"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions, def-extension-degree-and-finite-extension, lem-polynomials-and-roots-transport-along-field-isomorphisms, thm-universal-property-of-adjoining-an-irreducible-root, def-algebraically-closed-field, thm-separable-degree-is-independent-of-the-algebraic-closure]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq L$ be a finite tower and let $\Omega$ be an algebraic
closure of $F$. Restriction defines a surjection

$$\operatorname{Hom}_F(L,\Omega)\longrightarrow\operatorname{Hom}_F(K,\Omega).$$

For every $F$-embedding $\sigma:K\to\Omega$, its fibre is nonempty and has
cardinality $[L:K]_s$ after transporting the $K$-structure along $\sigma$.

## Facts & Assumptions

**Given:** A finite tower $F\subseteq K\subseteq L$, an algebraic closure $\Omega/F$, and an $F$-embedding $\sigma:K\to\Omega$.

[L1] Relative embeddings are field embeddings fixing the specified base map ([[def-f-homomorphisms-and-embeddings-of-field-extensions]]).

[L2] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

[L3] A field isomorphism transports polynomial coefficients, evaluation, and roots ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L4] A chosen root of a transported irreducible polynomial induces the unique embedding of the corresponding simple root extension ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L5] Every nonconstant polynomial over an algebraically closed field has a root ([[def-algebraically-closed-field]]).

[L6] For a finite extension, the number of base-field embeddings into an algebraic closure is independent of the chosen algebraic closure ([[thm-separable-degree-is-independent-of-the-algebraic-closure]]).

## Proof

**Proof technique:** direct.

1.1 Restricting an $F$-embedding $L\to\Omega$ to $K$ gives an $F$-embedding by [L1]. [L1]

1.2 To extend a chosen $\sigma$, take a finite $K$-basis $a_1,\ldots,a_r$ of $L$ by [L2] and put $K_i=K(a_1,\ldots,a_i)$. Starting with $\tau_0=\sigma$, regard each $\tau_{i-1}$ as an isomorphism onto its image, transport the minimal polynomial of $a_i$ over $K_{i-1}$ along it by [L3], choose a root in $\Omega$ by [L5], and extend $\tau_{i-1}$ to $K_i$ by [L4]. After finitely many steps, $K_r=L$, so every $\sigma$ has an extension and the restriction map is surjective. [L2, L3, L4, L5, construct]

1.3 Identify $K$ with $\sigma(K)$. The extensions of $\sigma$ are exactly the $\sigma(K)$-embeddings of the scalar-transported copy of $L$ into $\Omega$. Since $\Omega$ is algebraically closed and algebraic over $\sigma(K)$, it is an algebraic closure of that copy of $K$. [L1, algebra]

2.1 Transporting scalars and maps along the isomorphism $K\to\sigma(K)$ identifies the embeddings in step 1.3 with embeddings of $L/K$ into an algebraic closure of $K$. By [L6], their number is the closure-independent value $[L:K]_s$. Thus every fibre of restriction has that cardinality. [step 1.3, L6, algebra]

3.1 In particular, transport along an isomorphism between two embedded copies of $K$ gives a bijection between their restriction fibres. [step 2.1] ∎
