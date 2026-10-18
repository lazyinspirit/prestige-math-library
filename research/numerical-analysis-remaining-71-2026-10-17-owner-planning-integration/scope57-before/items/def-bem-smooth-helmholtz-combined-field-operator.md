---
id: def-bem-smooth-helmholtz-combined-field-operator
kind: definition
title: The combined-field operator for smooth-boundary Helmholtz scattering
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-complex-exponential]
justified_by: [thm-bem-helmholtz-layer-jumps-match-laplace-jumps]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 2 §§2.1–2.2, PDF pp. 22–25: Helmholtz single/double layers, their exterior traces, and the outgoing fundamental solution."
---

## Definition

Let $\Omega^-$ be a bounded connected $C^2$ domain in $\mathbb R^3$ with connected boundary $\Gamma$, let $\Omega^+=\mathbb R^3\setminus\overline{\Omega^-}$ be connected, and let $n$ point outward from $\Omega^-$. Fix $k>0$ and $\eta\in\mathbb R\setminus\{0\}$. The outgoing Helmholtz kernel is
$$G_k(x,y)=\frac{e^{ik|x-y|}}{4\pi|x-y|},\qquad x\ne y.$$
For $\phi\in C^\infty(\Gamma)$ and $x\notin\Gamma$, define $S_k\phi(x)=\int_\Gamma G_k(x,y)\phi(y)\,dS_y$ and $D_k\phi(x)=\int_\Gamma\partial_{n_y}G_k(x,y)\phi(y)\,dS_y$. The **combined-field potential** is $u_\phi=D_k\phi-i\eta S_k\phi$, and its exterior trace defines the smooth-density operator $A_{k,\eta}\phi=\gamma^+u_\phi$. This definition makes no assertion that $A_{k,\eta}$ extends boundedly or Fredholmly to a Sobolev space; these analytical properties are proved in separate theorems. For this smooth-boundary branch, $\gamma^+$ denotes the trace from $\Omega^+$ and uses the same fixed normal $n$ as the interior trace. The complex Sobolev spaces are the complexifications of the real chart spaces, with the same norms.

## Remarks

The Sobolev extension, compact perturbation and actual bounded invertibility are proved in [[lem-bem-smooth-trace-and-helmholtz-layer-extension]], [[thm-bem-smooth-helmholtz-operator-compact-perturbation]] and [[thm-bem-combined-field-conditional-invertibility]]. The latter retains its historical identifier.
