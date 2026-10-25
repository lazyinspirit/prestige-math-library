---
id: def-birational-morphism-schemes
kind: definition
title: "Birational morphisms of integral finite-type schemes"
status: published
origin: pipeline
deps:
  - def-integral-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-generic-point-irreducible-closed-subset
  - lem-integral-finite-type-scheme-function-field
  - def-morphism-of-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.51.1 (tag 01RO)"
      url: https://stacks.math.columbia.edu/tag/01RO
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.51.5 (tag 0BAC)"
      url: https://stacks.math.columbia.edu/tag/0BAC
---

## Definition

Let $k$ be a field and let $X$ and $Y$ be integral $k$-schemes of finite type
([[def-integral-scheme]], [[def-locally-finite-type-and-finite-type-morphism]]).
Let $\eta_X$ and $\eta_Y$ be their generic points
([[def-generic-point-irreducible-closed-subset]]) and let
$$K(X)=\mathcal O_{X,\eta_X},\qquad K(Y)=\mathcal O_{Y,\eta_Y}$$
be their function fields; by [[lem-integral-finite-type-scheme-function-field]]
these stalks are fields and are canonically identified with the fraction fields
of the coordinate rings of every nonempty affine open of $X$, respectively
$Y$.

A morphism of $k$-schemes $f:X\to Y$ is **birational** when

1. $f(\eta_X)=\eta_Y$, and
2. the map on stalks $\mathcal O_{Y,\eta_Y}\to\mathcal O_{X,\eta_X}$ induced by
   $f$ ([[def-morphism-of-schemes]]) is an isomorphism.

Conditions (1) and (2) are the form taken by the definition of a birational
morphism of schemes (Stacks Project, Definition 29.51.1, tag 01RO) for integral
schemes: for such $X$ and $Y$ the generic points $\eta_X$ and $\eta_Y$ are the
generic points of the unique irreducible components, and the local rings at
them are the function fields. Thus a birational morphism identifies the
function field of $Y$ with the function field of $X$.
