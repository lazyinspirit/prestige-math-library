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

Fix a comonad $G$ on $\mathcal C$. Among supplied adjunctions inducing $G$ on the nose, the co-Kleisli adjunction has the schematic initial universal property and the co-Eilenberg–Moore adjunction has the schematic terminal universal property: every such adjunction admits a unique morphism of adjunctions from the co-Kleisli resolution and a unique morphism of adjunctions to the co-Eilenberg–Moore resolution, with the corresponding equalities over the base categories.

## Facts & Assumptions

**Given:** A comonad $G$ and an adjunction inducing $G$.

[L1] The co-Eilenberg–Moore adjunction induces $G$ ([[thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad]]).

[L2] The co-Kleisli adjunction induces $G$ ([[thm-the-cokleisli-adjunction-induces-the-given-comonad]]).

[L3] For a fixed monad, every supplied adjunction inducing it admits a unique morphism of adjunctions **from** the Kleisli adjunction and a unique morphism of adjunctions **to** the Eilenberg–Moore adjunction; Kleisli has the schematic initial universal property and Eilenberg–Moore the schematic terminal one ([[cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties]]).

## Proof

**Proof technique:** direct.

1.1 Regard $G$ as a monad on the opposite category and apply [L3] there. [L3]

2.1 An adjunction $L\dashv R$ inducing $G$ on $\mathcal C$ becomes $R^{\mathrm{op}}\dashv L^{\mathrm{op}}$ inducing that monad on $\mathcal C^{\mathrm{op}}$, and under this translation the Kleisli and Eilenberg–Moore resolutions of the latter are the co-Kleisli and co-Eilenberg–Moore adjunctions of [L1]–[L2]. A morphism of adjunctions is a functor between their intermediate categories, and passing to opposite categories carries such a functor $K$ to $K^{\mathrm{op}}$, which runs between the same two adjunctions in the same order. The two comparison directions are therefore preserved rather than reversed, so the initial property stays with co-Kleisli and the terminal one with co-Eilenberg–Moore. [L1, L2, step 1.1]

3.1 Transporting the two universal properties of [L3] back along this translation gives, for every supplied adjunction inducing $G$, a unique morphism of adjunctions from the co-Kleisli resolution and a unique morphism of adjunctions to the co-Eilenberg–Moore resolution, with the required equalities over the base categories. This assertion quantifies over supplied data and does not require a category of all such adjunctions. [L3, step 2.1] ∎
