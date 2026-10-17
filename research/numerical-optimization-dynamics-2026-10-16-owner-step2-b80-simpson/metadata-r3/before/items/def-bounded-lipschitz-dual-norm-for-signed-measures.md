---
id: def-bounded-lipschitz-dual-norm-for-signed-measures
kind: definition
title: Bounded-Lipschitz dual discrepancy for finite signed measures
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-signed-measure
  - def-total-variation-of-a-signed-or-complex-measure
  - def-euclidean-inner-product
  - def-integration-against-a-signed-or-complex-measure
  - thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation
justified_by: []
proof_strategy: direct
axiom_use: The bounded-Lipschitz dual discrepancy is choice-free; the integral is the published signed-measure integral on its L1 domain.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Definition

Let $\omega,\nu$ be finite signed Borel measures on $\mathbb R^d$ such that $|\omega-\nu|(\mathbb R^d)<\infty$. For each bounded Lipschitz test function, integration against $\omega-\nu$ is defined by [[def-integration-against-a-signed-or-complex-measure]]; boundedness and finite total variation make every test in the following set integrable. Set $\|\phi\|_\infty:=\sup_x|\phi(x)|$ and $\operatorname{Lip}(\phi):=\sup_{x\ne y}|\phi(x)-\phi(y)|/|x-y|$, using the Euclidean norm from [[def-euclidean-inner-product]]. Define the bounded-Lipschitz dual discrepancy
$$d_{BL}(\omega,\nu):=\sup\left\{\left|\int\phi\,d(\omega-\nu)\right|:\|\phi\|_\infty\le1,\ \operatorname{Lip}(\phi)\le1\right\}.$$
The integral bound by total variation shows this supremum is finite. This page uses only the displayed dual quantity and makes no separate metric-separation claim. No Jordan decomposition, positivity, or probability normalization is needed.
