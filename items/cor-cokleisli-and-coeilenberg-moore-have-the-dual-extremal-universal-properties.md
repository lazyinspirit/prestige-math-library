---
id: cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties
kind: corollary
title: "Co-Kleisli and co-Eilenberg–Moore adjunctions have the dual extremal universal properties"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad, thm-the-cokleisli-adjunction-induces-the-given-comonad, cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.2.13 by formal duality"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Among adjunctions inducing a fixed comonad, the co-Eilenberg–Moore adjunction admits the canonical factorisation into every such adjunction, and every such adjunction admits the canonical factorisation into the co-Kleisli adjunction, with the corresponding uniqueness over the base categories.

## Facts & Assumptions

**Given:** A comonad $G$ and an adjunction inducing $G$.

[L1] The co-Eilenberg–Moore adjunction induces $G$ ([[thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad]]).

[L2] The co-Kleisli adjunction induces $G$ ([[thm-the-cokleisli-adjunction-induces-the-given-comonad]]).

[L3] For a fixed monad, every supplied adjunction inducing it admits a unique morphism of adjunctions **from** the Kleisli adjunction and a unique morphism of adjunctions **to** the Eilenberg–Moore adjunction; Kleisli has the schematic initial universal property and Eilenberg–Moore the schematic terminal one ([[cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties]]).

## Proof

**Proof technique:** direct.

1.1 Regard $G$ as a monad on the opposite category and apply [L3] there. [L3]

2.1 Reversing arrows translates the Eilenberg–Moore and Kleisli resolutions into the co-Eilenberg–Moore and co-Kleisli adjunctions identified in [L1]–[L2], and reverses the two comparison directions. [L1, L2, step 1.1]

3.1 Therefore the translated factorisations exist and are unique for every supplied adjunction inducing $G$, with the required equalities over the base categories. This assertion quantifies over supplied data and does not require a category of all such adjunctions. [step 2.1] ∎
