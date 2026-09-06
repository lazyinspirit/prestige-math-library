---
id: thm-dualization-in-a-multitensor-category-is-exact
kind: theorem
title: "Dualization in a multitensor category is exact"
status: draft
origin: pipeline
deps: [def-tensor-and-multitensor-category, thm-left-duality-is-a-contravariant-antimonoidal-functor, thm-an-equivalence-between-abelian-categories-is-exact]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Proposition 4.2.9"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

For a multitensor category, the chosen left-dual functor
$(-)^\vee:\mathcal C^{\mathrm{op}}\to\mathcal C$ is exact.

## Facts & Assumptions

**Given:** A multitensor category $\mathcal C$.

[F1] $\mathcal C$ is an abelian rigid monoidal category ([[def-tensor-and-multitensor-category]]).

[L1] Chosen left duals define a contravariant anti-monoidal functor ([[thm-left-duality-is-a-contravariant-antimonoidal-functor]]).

[L2] An equivalence between abelian categories is exact ([[thm-an-equivalence-between-abelian-categories-is-exact]]).

## Proof

**Proof technique:** direct.

1.1 Rigidity makes the contravariant functor of [L1] a duality: its quasi-inverse is the chosen right-dual functor. Thus it is an equivalence $\mathcal C^{\mathrm{op}}\simeq\mathcal C$. [F1, L1, given]

2.1 Both source and target are abelian, so [L2] makes this equivalence exact. Equivalently, a short exact sequence is carried, with arrows reversed, to a short exact sequence. [step 1.1, L2] ∎
