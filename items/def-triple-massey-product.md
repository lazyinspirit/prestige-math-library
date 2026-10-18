---
id: def-triple-massey-product
kind: definition
title: "Triple Massey product with a fixed cohomological sign convention"
status: published
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-triple-massey-data
  - lem-triple-massey-expression-is-closed
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.3"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §9.2.5"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $A$ and its cohomology groups be as in [[def-triple-massey-data]], and let
$\alpha\in H^p(A)$, $\beta\in H^q(A)$ and $\gamma\in H^r(A)$ be cohomology
classes. Their **triple Massey product** in that item's sign convention is the
subset

$$\langle\alpha,\beta,\gamma\rangle =\{[\omega(a,b,c;u,v)]\in H^{p+q+r-1}(A): (a,b,c;u,v)\text{ is a triple Massey datum representing }(\alpha,\beta,\gamma)\}.$$

The expression is a cohomology class because it is closed by
[[lem-triple-massey-expression-is-closed]]. The set includes every choice of
cocycle representatives and null-homotopies for which the adjacent products
are boundaries; if there is no such datum, it is empty. No claim that the set
is a singleton is part of the definition.
