---
id: post-gr-flrw-homogeneous-cosmological-model
kind: postulate
title: "Adopted homogeneous and isotropic cosmological model with a comoving perfect fluid"
status: draft
origin: session
domain: physics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-flrw-model-data, def-gr-flrw-spatial-model, lem-gr-flrw-metric-and-comoving-data, lem-gr-constant-curvature-three-manifold-ricci, def-gr-perfect-fluid-matter-model, def-gr-si-unit-and-coordinate-conventions, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-einstein-field-law, post-gr-ideal-clocks-and-free-fall]
dependency_roles:
  def-gr-flrw-model-data: mathematical-premise
  def-gr-flrw-spatial-model: mathematical-premise
  lem-gr-flrw-metric-and-comoving-data: mathematical-premise
  lem-gr-constant-curvature-three-manifold-ricci: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  post-gr-field-and-matter-assumptions: formulation-prerequisite
  post-gr-einstein-field-law: formulation-prerequisite
  post-gr-ideal-clocks-and-free-fall: formulation-prerequisite
physical_scope: "Adoption of the homogeneous and isotropic cosmological model of the classical gravitational framework: a spatially standard constant-curvature model, an FLRW metric with a smooth scale factor, and either the vacuum sector or a comoving perfect fluid whose density and pressure depend on cosmic time alone, with an explicit equation of state. The geometry and the matter content are adopted model assumptions, not derived results, and no observed value, redshift, distance, age, temperature or comparison with data is asserted. The model excludes anisotropic stresses, dissipation and heat flow, spatial inhomogeneities and perturbations, distributional or lower-dimensional sources, non-smooth fields, matter back-reaction beyond the test fluid description, and quantum effects; the deductions conditional on the model hold only within these restrictions."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8: the Copernican principle, isotropy and homogeneity, the maximally symmetric three-metric (8.1)-(8.7) and the comoving perfect fluid (8.9)-(8.23), printed pp. 217-222 (PDF pp. 224-229)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.1: the observed homogeneity and isotropy, the FRW metric (4.63) and the comoving four-velocity, printed pp. 198-202 (PDF pp. 205-209)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.1 and section 1.2.2: the cosmological principle, the Robertson-Walker metric (1.12) and the perfect-fluid energy-momentum tensor with equation of state P = w rho (1.35)-(1.41), printed pp. 5-11 and 26-29 (PDF pp. 11-17 and 32-35)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as the geometry and matter content of a **homogeneous cosmological
model** of the classical gravitational framework, to be used together with
[[post-gr-spacetime-and-classical-domain]],
[[post-gr-field-and-matter-assumptions]] and the field law of
[[post-gr-einstein-field-law]], the following assumptions.

**(i) Spacetime geometry.** The model's spacetime is an FLRW model datum
$(I,\Sigma,\gamma,k,a)$ with the framework's conversion constant $c>0$, its
metric $g=-c^2dt^2+a(t)^2\gamma$ and its comoving congruence
$n=c^{-1}\partial_t$ ([[def-gr-flrw-model-data]],
[[lem-gr-flrw-metric-and-comoving-data]]). The spatial model
$(\Sigma,\gamma,k)$ is one of the standard complete simply connected models of
[[def-gr-flrw-spatial-model]] clause (d), with normalized curvature parameter
$k\in\{-1,0,1\}$: the round unit three-sphere for $k=+1$, Euclidean space for
$k=0$, or hyperbolic three-space for $k=-1$; by
[[lem-gr-constant-curvature-three-manifold-ricci]] each of these carries
constant sectional curvature $k$ and $\operatorname{Ric}(\gamma)=2k\gamma$.
The physical idealization adopted here is that the spatial geometry is
homogeneous (the same at every point of each spatial slice) and isotropic (the
same in every direction at every point). The identification of the coordinate
$t$ with the readings of ideal comoving clocks is not part of this clause: it
is the separate clock rule of [[post-gr-ideal-clocks-and-free-fall]], applied
only where a physical clock reading is asserted. The
mathematical content used by the deductions of this page is the FLRW form
displayed above together with the curvature condition; no classification
theorem, and no transitivity statement about isometry groups, is proved or
used here.

**(ii) Matter content.** Exactly one of the following two sectors is adopted.

- **Vacuum sector.** No matter is present: the model's stress-energy tensor is
  the zero tensor, $\varepsilon=p=0$.
- **Comoving perfect-fluid sector.** The model's matter is a perfect-fluid
  model $(\varepsilon,p,n_F)$ on the matter domain $U:=M$, the model's whole
  spacetime, in the sense of [[def-gr-perfect-fluid-matter-model]]: that is,
  $U=M$ is the nonempty open domain, $\varepsilon$ and $p$ are the smooth
  rest energy density and pressure on it, and the fluid's unit timelike
  four-velocity field $n_F$ is assumed to be the comoving congruence
  $n=c^{-1}\partial_t$ of clause (i). The density and pressure are assumed
  **homogeneous**, that is, functions of cosmic time alone:
  $\varepsilon=\varepsilon(t)$ and $p=p(t)$ in the product charts, with
  values in the units of [[def-gr-si-unit-and-coordinate-conventions]]. The
  model additionally adopts an **explicit equation of state**, one of:
  a barotropic relation $p=P(\varepsilon)$ with $P$ a smooth real function
  defined on an open interval containing the range of $\varepsilon$; or the
  constant-parameter relation $p=w\varepsilon$ with a real constant $w$ and
  the stated domain of positive $\varepsilon$. The equation of state is an
  adopted constitutive restriction, not a consequence of the field law.

**(iii) Status, scope and exclusions.** Clauses (i) and (ii) are adopted
assumptions of the model. They are not derived from the field law, from
mathematical symmetry, or from observation; the symmetry of the ansatz
motivates but does not prove them, and no claim is made that any actual
cosmological system is exactly homogeneous, isotropic, comoving or
barotropic. The model contains no observed value: the scale factor, the
densities, the parameters $k,\Lambda,w$ and the spacetime interval are model
data, and every conclusion conditional on the model inherits the idealizations
listed in the physical scope of this item. Anisotropic stresses, heat flow and
dissipation, spatial inhomogeneities and perturbations, distributional or
lower-dimensional sources, non-smooth fields and quantum effects lie outside
the model and require additional content. Comparisons of the model's
predictions with reported observations test the combined model — geometry,
matter content, field law and the observation and analysis assumptions — and
agreement is evidence about that combination, not a proof of this postulate.

## Remarks

- **Why the standard spatial models are named.** Clause (i) fixes the global
  spatial model as one of the three standard complete simply connected
  constant-curvature models rather than an arbitrary model satisfying the
  local curvature condition. This is the precise content of the
  homogeneity-and-isotropy idealization on this page: it selects a definite
  global model, avoids any unproved classification assertion, and matches the
  models for which the standard curvature computations are recorded in
  [[def-gr-flrw-spatial-model]]. A model built on a quotient or on a different
  global model is not excluded mathematically but is not the model adopted
  here.

- **Clock readings are downstream.** The postulate's geometric clause
  identifies a coordinate $t$; the assertion that ideal clocks carried by
  comoving observers read $t$ is the clock postulate
  [[post-gr-ideal-clocks-and-free-fall]] together with the proper-time
  computation of [[lem-gr-flrw-metric-and-comoving-data]], and it is used only
  where a physical clock reading is claimed.

- **Field law is separate.** This postulate supplies the geometry and the
  matter content. The dynamics relating them is the field law of
  [[post-gr-einstein-field-law]]; the conservation of the fluid stress-energy
  tensor and the continuity equation are consequences of that law for the
  model, proved on this page, not additional assumptions of this postulate.
