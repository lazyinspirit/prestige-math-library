---
id: def-gts-landauginzburg-pair-and-distinct-categories
kind: definition
title: Landau–Ginzburg pair and distinct categories
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 12
deps:
  - def-gts-specified-mathematical-mirror-datum
  - def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms
  - def-gts-general-landau-ginzburg-matrix-factorization-data
  - lem-gts-general-landau-ginzburg-matrix-factorization-hom-dg
dependency_roles:
  def-gts-specified-mathematical-mirror-datum: mathematical-premise
  def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms: mathematical-premise
  def-gts-general-landau-ginzburg-matrix-factorization-data: mathematical-premise
  lem-gts-general-landau-ginzburg-matrix-factorization-hom-dg: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Maxim Kontsevich, Homological Algebra of Mirror Symmetry
      url: https://arxiv.org/pdf/alg-geom/9411018v1
      locator: printed pp. 16–18, tentative categorical HMS and Fukaya-category formulation
    - title: Denis Auroux, Mirror Symmetry, Lecture 18
      url: https://ocw.mit.edu/courses/18-969-topics-in-geometry-mirror-symmetry-spring-2009/61111f696db97ee7a1bc449ae59529c4_MIT18_969s09_lec18.pdf
      locator: complete lecture notes, A-infinity, derived and split-closed Fukaya category conventions
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A **Landau–Ginzburg pair** is a specified smooth complex space $Y$ (or smooth algebraic variety over the named coefficient field) and a holomorphic (respectively regular) function $W:Y\to\mathbb C$ (respectively $W\in\Gamma(Y,\mathcal O_Y)$), together with the coefficient and parameter conventions in [[def-gts-specified-mathematical-mirror-datum]]. The critical locus is $\operatorname{Crit}(W)=\{y\in Y:dW_y=0\}$; no finiteness or nondegeneracy of it is implicit.

Two constructions must be specified separately. **Fukaya–Seidel data** consists of an exact or otherwise explicitly chosen symplectic structure on $Y$, coefficient ring, brane and grading conventions, critical values, admissible vanishing paths or stops, behavior at noncompact ends, and the selected A-infinity category or pre-category of vanishing-cycle branes. It is a category only after the relevant morphism complexes, polygon operations, regularization, compactness, gluing, and units have been supplied. **Matrix-factorization data** consists of objects and morphisms as in [[def-gts-general-landau-ginzburg-matrix-factorization-data]], with the Hom differential of [[lem-gts-general-landau-ginzburg-matrix-factorization-hom-dg]].

The pair alone supplies neither category construction. No equivalence between the two, or between either category and a coherent-sheaf category, is part of this definition. In particular, the fixed-potential matrix-factorization interface imported for a different application does not replace the general $(Y,W)$ data above.

## Definition references

[[def-gts-specified-mathematical-mirror-datum]]

[[def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms]]

[[def-gts-general-landau-ginzburg-matrix-factorization-data]]

[[lem-gts-general-landau-ginzburg-matrix-factorization-hom-dg]]

