---
id: thm-tensoring-with-a-dualizable-object-preserves-projectives
kind: theorem
title: "Tensoring with a dualizable object preserves projectives"
status: draft
origin: pipeline
deps: [thm-the-tensor-product-in-a-multitensor-category-is-biexact, def-projective-object, thm-duality-yields-adjunctions-of-tensoring-functors]
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
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Proposition 4.2.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

If $P$ is projective and $X$ is dualizable in a multitensor category, then
$P\otimes X$ and $X\otimes P$ are projective.

## Facts & Assumptions

**Given:** A projective object $P$, a left dual $X^\vee$ of $X$, and a right dual ${}^\vee X$ of $X$.

[F1] Tensoring with $X^\vee$ or ${}^\vee X$ on either side is exact ([[thm-the-tensor-product-in-a-multitensor-category-is-biexact]]).

[F2] Projectivity is the lifting property against epimorphisms ([[def-projective-object]]).

[L1] Tensor--dual adjunction identifies the relevant Hom functors ([[thm-duality-yields-adjunctions-of-tensoring-functors]]).

## Proof

**Proof technique:** direct.

1.1 The left dual gives $$\operatorname{Hom}(P\otimes X,-)\cong\operatorname{Hom}(P,-\otimes X^\vee),$$ while the mirrored adjunction for the right dual gives $$\operatorname{Hom}(X\otimes P,-)\cong\operatorname{Hom}(P,{}^\vee X\otimes-).$$ [L1, given]

2.1 An epimorphism remains an epimorphism after applying either exact tensor functor on the right sides of step 1.1. Then [F2] lifts every map out of $P$, and transport through the corresponding adjunction proves the lifting property for both stated tensor products. [step 1.1, F1, F2] ∎
