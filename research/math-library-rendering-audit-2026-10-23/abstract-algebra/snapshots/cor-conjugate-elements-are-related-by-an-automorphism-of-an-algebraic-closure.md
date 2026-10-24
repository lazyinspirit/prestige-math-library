---
id: cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure
kind: corollary
title: "Assuming Choice, conjugates in an algebraic closure are related by a base automorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-elements-over-a-field, prop-base-field-embeddings-carry-elements-to-conjugates, thm-universal-property-of-adjoining-an-irreducible-root, thm-algebraic-embedding-extension, def-algebraic-closure, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $\Omega$ be an algebraic closure of $F$ and let $\alpha,\beta\in\Omega$.
Then $\alpha$ and $\beta$ are conjugate over $F$ if and only if some
$F$-automorphism of $\Omega$ sends $\alpha$ to $\beta$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraic closure $\Omega/F$, and elements $\alpha,\beta\in\Omega$.

[L1] An $F$-embedding carries an algebraic element to a conjugate ([[prop-base-field-embeddings-carry-elements-to-conjugates]]).

[L2] Conjugates are roots of the same minimal polynomial over $F$ ([[def-conjugate-elements-over-a-field]]).

[L3] A chosen conjugate root induces an $F$-isomorphism between the corresponding simple extensions ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L4] Assuming Choice, a base embedding extends across an algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L5] An algebraic closure is an algebraic extension whose top field is algebraically closed ([[def-algebraic-closure]]).

[L6] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 If an $F$-automorphism sends $\alpha$ to $\beta$, then [L1] makes them conjugate. [L1]

1.2 Conversely, suppose they are conjugate. By [L2] and [L3], there is an $F$-isomorphism $F(\alpha)\to F(\beta)$ sending $\alpha$ to $\beta$. [L2, L3]

2.1 Apply [L4] with base $F(\alpha)$ to extend this map to an embedding $\tau:\Omega\to\Omega$. Its image $E$ is algebraically closed because it is isomorphic to $\Omega$. Every $b\in\Omega$ is algebraic over $F\subseteq E$ by [L5], so [L6] gives its minimal polynomial over $E$; this polynomial has a root in $E$ and is therefore linear. Hence $b\in E$, so $\tau$ is surjective and is an automorphism. [step 1.2, L4, L5, L6]

3.1 This automorphism sends $\alpha$ to $\beta$, proving the reverse implication. [step 1.2, step 2.1] ∎
