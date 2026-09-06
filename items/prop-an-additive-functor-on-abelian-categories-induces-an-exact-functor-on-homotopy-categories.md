---
id: prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories
kind: proposition
title: "An additive functor on abelian categories induces an exact functor on homotopy categories"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-functor-between-triangulated-categories, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps, def-standard-cone-triangle-in-the-homotopy-category]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Derived Categories, Section 13.10"
      url: "https://stacks.math.columbia.edu/tag/014P"
---

## Statement

An additive functor $F:\mathcal A\to\mathcal B$ between abelian categories
induces an exact functor $K(F):K(\mathcal A)\to K(\mathcal B)$.

## Facts & Assumptions

**Given:** An additive functor $F$ between abelian categories.

## Proof

1.1 Applying $F$ degreewise sends chain maps and homotopies to chain maps and homotopies, and preserves the finite biproduct and zero-map formula defining a cone. [given]

2.1 Hence $F(\operatorname{Cone}(f))\cong\operatorname{Cone}(Ff)$ compatibly with shift, and it sends each standard cone triangle to one; this is the required exact-functor datum. [step 1.1, given] ∎
