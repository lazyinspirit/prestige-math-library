---
id: def-gts-derived-stack-of-perfect-complexes
kind: definition
title: Derived moduli prestack of perfect complexes
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
dependency_level: 1
deps:
  - def-gts-derived-artin-stack-and-cotangent-complex
  - def-derived-scheme-and-cotangent-complex
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
dependency_roles:
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-derived-scheme-and-cotangent-complex: mathematical-premise
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
      url: https://arxiv.org/pdf/1111.3209
      locator: §2.3, PDF pp. 41–43, definition of RPerf and its universal perfect complex.
    - title: "Toën and Vezzosi, Homotopical Algebraic Geometry II: Geometric Stacks and Applications"
      url: https://arxiv.org/pdf/math/0404373
      locator: §§1.3.3 and 2.3.3.1, geometric stacks and the moduli of perfect modules.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Definition

Fix a characteristic-zero field $k$ and the derived-affine model in the derived-scheme supplier. For a derived $k$-scheme $X$ and a connective derived $k$-algebra $A$, put $X_A=X\times\operatorname{Spec}(A)$. Define $\mathrm{Perf}(X)(A)$ to be the maximal $\infty$-groupoid whose objects are perfect quasi-coherent complexes on $X_A$ and whose morphisms are equivalences in the derived category. A perfect complex is, locally on $X_A$, quasi-isomorphic to a bounded complex of finite-rank locally free modules. On a derived affine $\operatorname{Spec}(A)$, a perfect module means a dualizable object of $\mathrm{QCoh}(\operatorname{Spec}(A))$, with evaluation and coevaluation satisfying the triangle identities. No equivalence between these two presentations beyond the stated local models is asserted here.

The derived moduli prestack $\mathrm{Perf}(X)$ is the functor $A\mapsto\mathrm{Perf}(X)(A)$, with pullback along every derived algebra map. Its universal object on $X\times\mathrm{Perf}(X)$, when the stack is represented, is the tautological perfect complex. An $A$-point $x$ of $\mathrm{Perf}(X)$ is therefore a family $E_x$ on $X_A$, not only a closed point of the ordinary truncation.

This definition does not assert that Perf(X) is globally a derived Artin stack, locally of finite presentation, or equipped with a shifted form. Those are separate representability and geometricity results. It also does not assert the tangent-complex formula for the moduli stack.

## Definition references

[[def-gts-derived-artin-stack-and-cotangent-complex]]

[[def-derived-scheme-and-cotangent-complex]]

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

