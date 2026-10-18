---
id: def-spherical-harmonic-partial-wave-conventions
kind: definition
title: Spherical harmonics and partial-wave conventions in three dimensions
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-polar-surface-measure-on-the-unit-sphere, def-complex-lp-and-euclidean-test-function-conventions, def-laplacian-of-a-c2-function, def-countable-choice, def-dependent-choice]
justified_by: [lem-spherical-harmonics-form-complete-basis-and-addition-formula]
proof_strategy: not-applicable
axiom_use: "Countable Choice is assumed for the polar surface measure and Countable Choice and Dependent Choice for the later normalized-polynomial justification. The definitions make no basis selection."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 145–149, Legendre/spherical-harmonic partial-wave expansion and radial equation."
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 17–21, spherical harmonics and radial equation."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice and Dependent Choice. Use the unit sphere $S^2$ and its polar surface measure $d\sigma$ from [[def-polar-surface-measure-on-the-unit-sphere]]. For each integer $\ell\ge0$, let $\mathcal H_\ell$ be the complex vector space of restrictions to $S^2$ of homogeneous degree-$\ell$ polynomials $P$ on $\mathbb R^3$ satisfying the Euclidean harmonic equation $\Delta P=0$. For complex-valued polynomials or functions, $\Delta$ and its polar-coordinate formulas act componentwise on real and imaginary parts. In polar coordinates $x=r\omega$, define $\Delta_{S^2}$ by
$$\Delta_{\mathbb R^3}=\partial_r^2+\frac2r\partial_r+\frac1{r^2}\Delta_{S^2},$$
equivalently $\Delta_{S^2}=\frac1{\sin\theta}\partial_\theta(\sin\theta\partial_\theta)+\frac1{\sin^2\theta}\partial_\phi^2$ away from the poles. Thus if $Y\in\mathcal H_\ell$ is the restriction of $P$, then $\Delta_{S^2}Y=-\ell(\ell+1)Y$.

For $\ell\ge0$, define the normalized zonal polynomial $P_\ell(t)$ to be the degree-$\ell$ polynomial satisfying
$$ (1-t^2)P_\ell''(t)-2tP_\ell'(t)+\ell(\ell+1)P_\ell(t)=0,\qquad P_\ell(1)=1.$$
The later harmonic-basis lemma proves existence and uniqueness of this normalized polynomial and identifies it with the usual Legendre convention.

The term **partial wave of degree $\ell$** means the $\mathcal H_\ell$ component of an angular expansion in $L^2(S^2,d\sigma;\mathbb C)$. Completeness, orthogonality, finite dimension, and the evaluation bound for these components are established in [[lem-spherical-harmonics-form-complete-basis-and-addition-formula]].

For a radial field $u(r,\omega)$, its degree-$\ell$ component is written $u_\ell(r,\omega)\in\mathcal H_\ell$; any orthonormal basis within this finite-dimensional space gives the equivalent scalar mode equations. The definition does not select such a basis globally.
