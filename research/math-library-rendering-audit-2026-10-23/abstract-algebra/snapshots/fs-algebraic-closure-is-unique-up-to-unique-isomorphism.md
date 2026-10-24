---
id: fs-algebraic-closure-is-unique-up-to-unique-isomorphism
kind: false-statement
title: "FALSE: an algebraic closure is unique up to a unique base-field isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-existence-of-algebraic-closures, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-algebraic-embedding-extension, cor-algebraic-closures-are-isomorphic-over-the-base, def-algebraic-closure, thm-evaluation-kernel-and-minimal-polynomial]
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
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

For any two algebraic closures of a field $F$, there is exactly one
$F$-isomorphism between them.

## Facts & Assumptions

**Given:** The axiom of Choice and the field $\mathbb Q$.

[L1] Assuming Choice, every field has an algebraic closure ([[thm-existence-of-algebraic-closures]]).

[L2] Embeddings of a simple extension correspond to the distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Assuming Choice, a base embedding extends across an algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L4] Assuming Choice, any two algebraic closures of the same field are isomorphic over that field ([[cor-algebraic-closures-are-isomorphic-over-the-base]]).

[L5] An algebraic closure is algebraic over its base and algebraically closed ([[def-algebraic-closure]]).

[L6] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Refutation

**Proof technique:** direct.

1.1 Choose $\Omega$ by [L1]. The polynomial $x^2+1$ is irreducible over $\mathbb Q$ and has a root $a\in\Omega$ by [L5]. Its roots $a$ and $-a$ are distinct because $\mathbb Q$ has characteristic zero. By [L2], the assignment $a\mapsto-a$ gives a nonidentity $\mathbb Q$-embedding of $\mathbb Q(a)$ into $\Omega$. [L1, L2, L5, algebra]

2.1 Extend that embedding across the algebraic extension $\Omega/\mathbb Q(a)$ using [L3]. Its image $E$ is algebraically closed because it is isomorphic to $\Omega$. Every $b\in\Omega$ is algebraic over $\mathbb Q\subseteq E$ by [L5], so [L6] gives a minimal polynomial over $E$; it has a root in $E$ and is therefore linear. Thus the resulting embedding $\tau:\Omega\to\Omega$ is surjective, hence is a nonidentity $\mathbb Q$-automorphism with $\tau(a)=-a$. [step 1.1, L3, L5, L6]

3.1 The identity and $\tau$ are distinct $\mathbb Q$-isomorphisms from the same algebraic closure to itself. Therefore uniqueness of the base-field isomorphism is false, although existence is true by [L4]. [step 2.1, L4] ∎
