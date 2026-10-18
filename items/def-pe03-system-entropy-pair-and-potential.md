---
id: def-pe03-system-entropy-pair-and-potential
kind: definition
title: Convex entropy pairs, entropy variables, and entropy potentials for systems
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-hyperbolic-system-and-characteristic-families]
justified_by: []
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
    - title: "E. Tadmor, Entropy Stable Schemes for Hyperbolic Conservation Laws, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "§4.1, Entropy Variables, PDF p. 11; full 27-page chapter read"
    - title: "R. Bürger, P. E. Méndez, and C. Parés, On Entropy Stable Schemes for Degenerate Parabolic Multispecies Kinematic Flow Models"
      url: "https://www.ci2ma.udec.cl/pdf/pre-publicaciones2/2018/pp18-24.pdf"
      locator: "§2.1, entropy variables and potential, PDF pp. 5–6; full 29-page preprint read"
---

## Definition

Use the conservation-system convention of
[[def-hyperbolic-system-and-characteristic-families]]: on an open convex state
domain $\mathcal A\subseteq\mathbb R^m$, the flux is $F:\mathcal A\to\mathbb R^m$.
A **convex entropy pair** is a pair $(\eta,q)$ with $\eta\in C^2(\mathcal A)$,
$q\in C^1(\mathcal A)$, positive-semidefinite Hessian $D^2\eta$, and
$$Dq(U)=D\eta(U)\,DF(U)\qquad(U\in\mathcal A).$$
The **entropy variable** is the column vector $v(U)=\nabla\eta(U)$; gradients
are represented as columns, so the compatibility equation above means
$\nabla q(U)=DF(U)^T v(U)$. The **entropy potential** is
$\psi(U)=v(U)^T F(U)-q(U)$. This definition does not assert that every convex
$\eta$ admits a flux $q$; the compatibility equation is part of the hypothesis.

