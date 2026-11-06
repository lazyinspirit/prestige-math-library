---
id: def-gts-strict-calabiyau-variety-in-the-morimura-source-convention
kind: definition
title: Strict Calabi–Yau variety in the Morimura source convention
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
dependency_level: 0
deps:
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - def-axiom-of-choice
dependency_roles:
  def-smooth-projective-dualizing-line-bundle-and-trace: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Hayato Morimura, Versal dg deformation of Calabi–Yau manifolds, arXiv:2111.11778v3
      url: https://arxiv.org/pdf/2111.11778
      locator: Introduction, immediately before Theorem 1.1, PDF p. 1.
    - title: The Stacks Project, Varieties
      url: https://stacks.math.columbia.edu/tag/020C
      locator: Definition 33.3.1.
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Definition

Assume the Axiom of Choice. To fix terminology, a $k$-variety means an integral, separated, finite-type $k$-scheme, as in the Stacks Project, Definition 33.3.1. In Morimura's source convention, a **strict Calabi–Yau $d$-fold** is a smooth projective $k$-variety $X$ of pure dimension $d$ for which $\omega_X\cong\mathcal O_X$ and $H^i(X,\mathcal O_X)=0$ for every integer $i$ with $0<i<d$. Here $\omega_X:=\det\Omega^1_{X/k}$ is the dualizing line bundle, with the determinant convention of the smooth-projective supplier. The canonical-bundle condition means that an isomorphism exists; no particular trivialization is part of the source definition. Under this variety convention $X$ is connected, so connectedness is not an additional hypothesis.

For Morimura's deformation comparison, impose the additional theorem hypotheses that $k$ is algebraically closed of characteristic zero and $d>2$. These restrictions are not part of the definition of the source-specific strictness condition itself.

## Definition references

[[def-smooth-projective-dualizing-line-bundle-and-trace]]

[[def-axiom-of-choice]]

## Remarks

This is an algebraic, source-specific convention. It is distinct from the analytic compact-Kähler convention and does not by itself provide an orientation on a derived stack or a negative-cyclic Calabi–Yau structure on a dg category. Canonical-bundle triviality, intermediate-cohomology vanishing, and theorem-only field/dimension restrictions are kept separate; a trivialization may be chosen later when a construction requires one.
