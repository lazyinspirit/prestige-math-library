---
id: thm-algebraic-embedding-extension
kind: theorem
title: "Assuming Choice, a base-field embedding extends across every algebraic extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-zorn, thm-universal-property-of-adjoining-an-irreducible-root, lem-polynomials-and-roots-transport-along-field-isomorphisms, def-f-homomorphisms-and-embeddings-of-field-extensions, def-algebraically-closed-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\Omega$ be
algebraically closed, and let $\sigma:F\to\Omega$ be a field embedding. Then
$\sigma$ extends to a field embedding $\widetilde\sigma:K\to\Omega$. The proof
uses Zorn's lemma.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraic extension $K/F$, an algebraically closed field $\Omega$, and an embedding $\sigma:F\to\Omega$.

[L1] Assuming Choice, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L2] A chosen root of an irreducible polynomial induces the unique embedding of the corresponding simple root extension ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L3] A field isomorphism transports coefficients, evaluation, and roots of polynomials ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L4] Relative embeddings are field embeddings agreeing with the specified map on the base ([[def-f-homomorphisms-and-embeddings-of-field-extensions]]).

[L5] Every nonconstant polynomial over an algebraically closed field has a root ([[def-algebraically-closed-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal P$ consist of pairs $(E,\tau)$ where $F\subseteq E\subseteq K$ is an intermediate field and $\tau:E\to\Omega$ is an embedding extending $\sigma$, ordered by extension of the domain and map. The pair $(F,\sigma)$ shows that $\mathcal P$ is nonempty. [L4, construct]

2.1 The union of a chain of such pairs has the union of the domains as an intermediate field and the union of the compatible maps as an embedding into $\Omega$, so every chain has an upper bound. [step 1.1, L4]

3.1 By Zorn's lemma [L1], choose a maximal pair $(M,\tau)$ in $\mathcal P$. [step 1.1, step 2.1, L1, choose]

4.1 If $M\ne K$, choose $\alpha\in K\setminus M$. It is algebraic over $M$. Transport its minimal polynomial through the isomorphism $M\to\tau(M)$ using [L3], choose a root in $\Omega$ by [L5], and use [L2] to extend $\tau$ to an embedding of $M(\alpha)$. [step 3.1, L2, L3, L5, choose]

5.1 Step 4.1 contradicts maximality unless $M=K$. Thus $\tau$ on the maximal domain is the required extension of $\sigma$; the use of Choice is precisely [L1]. [step 3.1, step 4.1] ∎
