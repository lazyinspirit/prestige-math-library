---
id: def-gr-scalar-field-matter-model
kind: definition
title: "The scalar-field matter model of the classical gravitational framework"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-volume-form-and-current-flux, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-c-r-and-smooth-maps-between-smooth-manifolds, def-oriented-smooth-manifold-and-oriented-chart, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 9.1 and 9.3: the scalar field action (9.2)-(9.6) and its energy-momentum tensor (9.31)-(9.32), printed pp. 111-117 (PDF pp. 112-118)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.5.1 and 4.5.3: the scalar field action, its equation of motion and its energy-momentum tensor (4.51), printed pp. 180-185 (PDF pp. 187-192)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1: the energy-momentum tensor of a scalar field, (1.112), printed p. 30 (PDF p. 37)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
justified_by: [prop-gr-scalar-field-stress-energy-conservation]
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be an oriented time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]],
[[def-oriented-smooth-manifold-and-oriented-chart]]), let $c>0$ be a fixed
real constant, and let $\nabla$ be the metric-selected connection of $g$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

**(a) Data.** A **scalar-field matter model** on $M$ is a triple
$(\varphi,V,K)$ consisting of

- a smooth function $\varphi:M\to\mathbb R$
  ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], with target the
  standard one-dimensional smooth manifold $\mathbb R$);
- a smooth function $V:\mathbb R\to\mathbb R$, the **potential**; and
- a real constant $K>0$, the **coupling**.

The physical reading of $K$ and of the units of $\varphi$ and $V$ is fixed by
the framework's matter postulate, not by this definition.

**(b) Scalar-action density and action differences.** For every smooth
function $\varphi'$ and every smooth Lorentzian metric $g'$ of signature
$(-,+,+,+)$ on $M$ define the **scalar-action density**

$$\ell(\varphi',g'):=-\frac{K}{c}\Bigl[\tfrac12\,g'^{ab}\,\partial_a\varphi'\, \partial_b\varphi'+V(\varphi')\Bigr]\mathrm{vol}_{g'}\in\Omega^4(M),$$

where $g'^{ab}$ are the inverse-metric components
([[def-gr-inverse-metric-and-musical-isomorphisms]]) and
$\mathrm{vol}_{g'}$ the metric volume form
([[def-gr-metric-volume-form-and-current-flux]]). For two pairs $(\varphi,g)$
and $(\varphi',g')$ with $\varphi'-\varphi$ and all components of $g'-g$
supported in a compact set, the difference $\ell(\varphi',g')-\ell(\varphi,g)$
is a compactly supported smooth $4$-form and the **action difference**

$$\Delta S:=\int_M\bigl[\ell(\varphi',g')-\ell(\varphi,g)\bigr]$$

is a real number ([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]),
the integral being independent of how the pair $(\varphi,g)$ is extended outside
the support. Only such differences are used; no integrality of the total
action on a noncompact $M$ is asserted.

**(c) Scalar equation and candidate stress-energy tensor.** The model's
**scalar equation of motion** is

$$\Box_g\varphi-V'(\varphi)=0,\qquad \Box_g\varphi:=\nabla^a\partial_a\varphi,$$

and the model's **candidate stress-energy tensor** is the smooth symmetric
covariant $2$-tensor field

$$T_{ab}:=K\Bigl[\partial_a\varphi\,\partial_b\varphi -g_{ab}\Bigl(\tfrac12\,\partial^c\varphi\,\partial_c\varphi+V(\varphi)\Bigr)\Bigr],$$

with $\partial^c\varphi\,\partial_c\varphi=g^{cd}\partial_c\varphi\,
\partial_d\varphi$ ([[def-gr-inverse-metric-and-musical-isomorphisms]],
[[def-gr-smooth-covariant-two-tensor-field]]). That this candidate is indeed
the Hilbert stress-energy tensor of the model, and that the scalar equation implies its conservation, are proved in
[[prop-gr-scalar-field-stress-energy-conservation]]; the definition itself
asserts neither proved property, and this item does not assert that any solution of
the scalar equation exists.

## Remarks

- **Sign conventions.** The overall sign of $\ell$ is chosen so that, under
  the Hilbert convention of [[def-gr-hilbert-stress-energy-tensor]], the
  metric variation of the action difference reproduces the tensor displayed in
  clause (c). The kinetic term has the sign convention
  $+\tfrac12g^{ab}\partial_a\varphi\partial_b\varphi$; the sign of the potential
  term is $+V(\varphi)$ inside the bracket of $\ell$ and $-V(\varphi)$ inside
  the metric bracket of $T_{ab}$.

- **Scope.** The item defines a model on the given smooth $(M,g,N)$; it makes
  no claim that the model is realized by any physical system, that solutions
  exist for given initial data, or that the scalar field is fundamental.
