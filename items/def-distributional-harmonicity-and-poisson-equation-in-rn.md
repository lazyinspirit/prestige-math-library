---
id: def-distributional-harmonicity-and-poisson-equation-in-rn
kind: definition
title: "Distributional harmonicity and Poisson's equation on an open subset of Rn"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
deps: [def-laplacian-of-a-c2-function]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Definition

Let $n\ge1$ be an integer and let $\Omega\subseteq\mathbb R^n$ be open. Write $C_c^\infty(\Omega)$ for smooth real functions with compact support in $\Omega$. A **distribution** is a continuous linear functional $T:C_c^\infty(\Omega)\to\mathbb R$. Here continuity means that $T(\phi_j)\to T(\phi)$ whenever the supports of $\phi_j$ and $\phi$ lie in one compact subset of $\Omega$ and every partial derivative of $\phi_j$ converges uniformly to the corresponding derivative of $\phi$. Set
$$ (\partial_iT)(\phi):=-T(\partial_i\phi),\qquad \Delta T:=\sum_{i=1}^n\partial_i^2T. $$
For $f\in L^1_{\mathrm{loc}}(\Omega)$, $T_f(\phi):=\int_\Omega f\phi$ is its regular distribution. We say $T$ is distributionally harmonic when $\Delta T=0$. Given another distribution $F:C_c^\infty(\Omega)\to\mathbb R$, we say that $T$ solves the distributional Poisson equation $-\Delta T=F$ when that equality holds as distributions. These are distinct from the classical conditions on a $C^2$ function in [[def-laplacian-of-a-c2-function]].
