---
id: prop-initial-and-terminal-objects-as-representations
kind: proposition
title: "Initial and terminal objects are exactly the representations of the constant singleton functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-representable-functor-and-representation,
       def-initial-terminal-and-zero-object,
       prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Definition 2.1.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a locally small category and let
$1:\mathcal C\to\mathbf{Set}$ and
$1:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ denote the constant functors at a
singleton set.

An object $I$ is initial if and only if $I$ represents the covariant constant
singleton functor, and an object $T$ is terminal if and only if $T$ represents
the contravariant constant singleton functor. Consequently the covariant functor
is representable exactly when $\mathcal C$ has an initial object, and the
presheaf is representable exactly when $\mathcal C$ has a terminal object.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$ and the constant singleton functors in the statement.

[F1] An object $I$ is initial when every $\mathcal C(I,A)$ has exactly one morphism, and $T$ is terminal when every $\mathcal C(A,T)$ has exactly one morphism ([[def-initial-terminal-and-zero-object]]).

[F2] A covariant functor is represented by $I$ through a natural isomorphism $\mathcal C(I,-)\cong F$, and a presheaf is represented by $T$ through $\mathcal C(-,T)\cong P$ ([[def-presheaf-representable-functor-and-representation]]).

[F3] Sets and functions form the category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

## Proof

**Proof technique:** direct.

1.1 If $I$ is initial, each $\mathcal C(I,A)$ is a singleton by [F1], so its unique function to $1(A)$ is a bijection; these functions are natural because every map between singleton sets is the unique such map. Thus $\mathcal C(I,-)\cong1$. [F1, F2, F3]

1.2 Conversely, if $\mathcal C(I,-)\cong1$, every $\mathcal C(I,A)$ is bijective with a singleton and is therefore a singleton, so $I$ is initial. [F1, F2]

1.3 If $T$ is terminal, the same componentwise construction gives $\mathcal C(-,T)\cong1$, and any such representation makes every $\mathcal C(A,T)$ a singleton; hence the terminal equivalence holds. [F1, F2, F3]

2.1 Steps 1.1--1.3 show that a representing object exists exactly when the corresponding initial or terminal object exists. In the empty category the constant functors still exist but there is no object that could represent either one, in agreement with both equivalences. [step 1.1, step 1.2, step 1.3] ∎
