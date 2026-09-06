---
id: thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological
kind: theorem
title: "Representable Hom functors on a triangulated category are homological or cohomological"
status: draft
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category, def-homological-functor-on-a-triangulated-category, def-cohomological-functor-on-a-triangulated-category, def-triangulated-category-axiom-tr-one, def-triangulated-category-axiom-tr-two, def-triangulated-category-axiom-tr-three, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 13.4.2"
      url: "https://stacks.math.columbia.edu/tag/05QN"
---

## Statement

For each $W\in\mathcal T$, $\mathcal T(W,-)$ is homological and
$\mathcal T(-,W)$ is cohomological, both valued in abelian groups.

## Facts & Assumptions

**Given:** A distinguished triangle $X\xrightarrow fY\xrightarrow gZ\xrightarrow hX[1]$ and an object $W$.

## Proof

1.1 TR1 and TR3 first give $gf=0$.  If $u:W\to Y$ satisfies $gu=0$, compare the appropriately rotated identity triangle of $W$ with the given triangle; TR3 supplies $v:W\to X$ with $fv=u$.  Rotating the given triangle gives the same factorisation at every translated term. [given]

2.1 Thus $\mathcal T(W,-)$ is homological.  The dual rotated-identity-triangle argument gives exactness for $\mathcal T(-,W)$ with the arrows reversed, so it is cohomological. [step 1.1, given] ∎
