---
id: lem-verma-embedding-implies-strong-linkage
kind: lemma
title: "A Verma embedding implies strong linkage"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-a-nonzero-verma-homomorphism-is-injective, thm-every-category-o-object-has-finite-length, thm-verma-module-has-a-unique-simple-quotient, thm-strong-linkage-principle-for-verma-modules]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Corollary 20.14"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice.

An embedding $M(\mu)\hookrightarrow M(\lambda)$ implies $\mu\uparrow\lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), injectivity [[lem-a-nonzero-verma-homomorphism-is-injective]], finite length of category $\mathcal O$ objects [[thm-every-category-o-object-has-finite-length]], the unique simple Verma quotient [[thm-verma-module-has-a-unique-simple-quotient]], and Choice-qualified strong linkage [[thm-strong-linkage-principle-for-verma-modules]].

## Proof

**Proof technique:** direct.

1.1 The image of the embedding is a submodule isomorphic to $M(\mu)$, so its simple quotient $L(\mu)$ is a subquotient of $M(\lambda)$. Under the stated Choice premise $M(\lambda)$ has finite length; refining a composition series through this submodule and its maximal proper submodule shows that this simple subquotient is a composition factor. [given]

2.1 Applying the strong linkage principle to that factor gives $\mu\uparrow\lambda$. [step 1.1] ∎
