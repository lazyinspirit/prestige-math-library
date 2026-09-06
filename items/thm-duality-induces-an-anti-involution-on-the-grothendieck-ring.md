---
id: thm-duality-induces-an-anti-involution-on-the-grothendieck-ring
kind: theorem
title: "Duality induces an anti-isomorphism on the Grothendieck ring"
status: published
origin: pipeline
deps: [thm-dualization-in-a-multitensor-category-is-exact, thm-left-duality-is-a-contravariant-antimonoidal-functor, def-grothendieck-ring-of-a-tensor-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Section 4.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

For a tensor category, $[X]\mapsto[X^\vee]$ induces an additive
anti-isomorphism of $K_0(\mathcal C)$ with its opposite ring.  It need not be
an involution: its inverse is induced by right duals.

## Facts & Assumptions

**Given:** A tensor category $\mathcal C$ and chosen left duals.

[F1] Dualization is exact ([[thm-dualization-in-a-multitensor-category-is-exact]]).

[F2] $(X\otimes Y)^\vee\cong Y^\vee\otimes X^\vee$ ([[thm-left-duality-is-a-contravariant-antimonoidal-functor]]).

[F3] The Grothendieck group is defined by exact-sequence relations ([[def-grothendieck-ring-of-a-tensor-category]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], dualization takes each short exact relation in [F3] to a short exact relation, so $[X]\mapsto[X^\vee]$ is a well-defined additive map. [F1, F3, given]

2.1 By [F2], it reverses products: $([X][Y])^*=[Y]^*[X]^*$. Chosen right duals give the inverse map on isomorphism classes and hence on $K_0$. Therefore this is an anti-isomorphism; no identification of $X$ with $X^{\vee\vee}$ is asserted. [step 1.1, F2, given] ∎
