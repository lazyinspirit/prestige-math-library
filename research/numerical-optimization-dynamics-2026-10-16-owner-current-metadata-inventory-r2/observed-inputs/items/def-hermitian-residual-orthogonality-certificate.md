---
id: def-hermitian-residual-orthogonality-certificate
kind: definition
title: Residual and near-orthogonality data for an approximate Hermitian eigenbasis
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-operator-norm-on-a-finite-dimensional-inner-product-space]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.1–5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Definition

Let $\mathcal A$ be a nonempty family of Hermitian matrices in $\mathbb C^{n\times n}$, let $V\in\mathbb C^{n\times n}$, and let $\Theta=\operatorname{diag}(\theta_1,\ldots,\theta_n)$ with real $\theta_j$. A **residual and orthogonality certificate** is a tuple of nonnegative numbers $\delta,\rho,M_A,M_\Theta,\tau$ such that, for every $A\in\mathcal A$,
$$\|V^*V-I\|_2\le\delta<1,\quad \|AV-V\Theta\|_2\le\rho,\quad \|A\|_2\le M_A,\quad \|\Theta\|_2\le M_\Theta,\quad 1-\sqrt{1-\delta}\le\tau.$$
The certificate uses exact inequalities or separately verified upper bounds. Its eigenvalue enclosure radius is $\eta=\rho+(M_A+M_\Theta)\tau$. This definition does not assert that computed residuals or Gram matrices satisfy the bounds; that is a separate certification procedure.
