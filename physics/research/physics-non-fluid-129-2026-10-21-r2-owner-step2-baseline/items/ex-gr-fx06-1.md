---
id: ex-gr-fx06-1
kind: example
title: "Minkowski round spheres are not future trapped"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
physical_scope: "An exact flat Lorentzian geometry calculation; it is not an empirical statement and does not claim that Minkowski space contains no other trapped surfaces."
deps:
  - def-gr-fx-trapped-surface-and-black-region
  - def-gr-fx-null-screen-geometry
  - def-gr-minkowski-model-and-inertial-chart
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - lem-gr-fx-trapped-boundary-compactness
  - thm-gr-fx-penrose-incompleteness
dependency_roles:
  def-gr-fx-trapped-surface-and-black-region: mathematical-premise
  def-gr-fx-null-screen-geometry: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-fx-trapped-boundary-compactness: mathematical-premise
  thm-gr-fx-penrose-incompleteness: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, arXiv:1901.03928v6 (2023), §5.5, latest v6 PDF (107 pages)."
      url: "https://arxiv.org/pdf/1901.03928v6"
    - title: "José M. M. Senovilla and David Garfinkle, The 1965 Penrose singularity theorem, Classical and Quantum Gravity 32 (2015), 124008, arXiv:1410.5226v2, §4.2."
      url: "https://arxiv.org/pdf/1410.5226"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Éric Gourgoulhon, From Geometry to Numerics: Interdisciplinary Aspects in Mathematical and Numerical Relativity, arXiv:0712.2332v2 (2008), §6.2.2, full 72-page PDF."
      url: "https://arxiv.org/pdf/0712.2332"
generation:
  role: example
verification:
  precheck: pending
---

## Example

Use the Minkowski model with metric $g=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2$ and future direction $N=\partial_{x^0}$. For $R>0$, let $S=\{x^0=0,\ (x^1)^2+(x^2)^2+(x^3)^2=R^2\}$. The future null normals $\ell=\partial_{x^0}+\partial_r$ and $k=\partial_{x^0}-\partial_r$ obey $g(\ell,k)=-2$ and have expansions $\theta_\ell=2/R$ and $\theta_k=-2/R$. Thus these round spheres fail the future-trapping hypothesis because one expansion is positive.

## Example references

[[def-gr-fx-trapped-surface-and-black-region]]

[[def-gr-fx-null-screen-geometry]]

[[def-gr-minkowski-model-and-inertial-chart]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[lem-gr-fx-trapped-boundary-compactness]]

[[thm-gr-fx-penrose-incompleteness]]

## Facts & Assumptions

**Given:** $R>0$, the Minkowski metric and time orientation above, and the null second fundamental form convention.

[F1] [[def-gr-fx-trapped-surface-and-black-region]]: $\theta_\ell=\operatorname{tr}_q\chi_\ell$ with $\chi_\ell(X,Y)=g(\nabla_X\ell,Y)$, and a future trapped surface requires both future null expansions to be negative.

[F2] [[def-gr-minkowski-model-and-inertial-chart]]: in the identity chart, $g=\operatorname{diag}(-1,1,1,1)$ and $N=\partial_{x^0}$ is future timelike.

[F3] [[def-gr-fx-null-screen-geometry]]: the null second fundamental form is traced with the positive induced metric $q$ on the spacelike two-surface.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: in a chart, the metric-selected connection has Christoffel symbols $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$.

[F5] [[lem-gr-fx-trapped-boundary-compactness]]: its compact-horismos conclusion assumes a compact future trapped surface, so the expansion signs computed here decide whether this particular sphere meets that prerequisite.

[F6] [[thm-gr-fx-penrose-incompleteness]]: its incompleteness conclusion likewise assumes a compact future trapped surface; it cannot be applied with this sphere when one future expansion is positive.

## Verification

**Given:** [F1]–[F4] and $R>0$.

1.1 On the spherical-coordinate region $r>0$, the metric is $g=-(dx^0)^2+dr^2+r^2\gamma_{S^2}$. Hence $g(\ell,\ell)=g(k,k)=0$, $g(\ell,k)=-2$, and $g(\ell,N)=g(k,N)=-1$, so both normals are future-directed. [F2, given, algebra]

1.2 For angular coordinate fields $E_A$, the Christoffel formula [F4] gives $\Gamma^B{}_{rA}=\frac12(r^{-2}\gamma^{BC})(2r\gamma_{CA})=r^{-1}\delta^B_A$ and $\Gamma^\mu{}_{0A}=0$. Therefore on $r=R$, $\nabla_X\ell=R^{-1}X$ and $\nabla_Xk=-R^{-1}X$ for every tangent vector $X$ to $S$. [F2, F3, F4, given, algebra]

2.1 By [F1], $\chi_\ell=R^{-1}q$ and $\chi_k=-R^{-1}q$. Since $S$ is two-dimensional, tracing with $q$ gives $\theta_\ell=2/R>0$ and $\theta_k=-2/R<0$. Thus the pair of strict negative inequalities required for trapping fails. [F1, F3, step 1.2, given, algebra]

3.1 The positive expansion means this sphere does not supply the trapped-surface premise in [F5] or [F6]. The calculation makes no assertion about other surfaces in Minkowski space. [F5, F6, step 2.1] ∎
## Remarks

The calculation rules out trapping only for these standard round spheres. It does not claim that every spacelike two-surface in Minkowski space has an expansion of this sign pattern.
