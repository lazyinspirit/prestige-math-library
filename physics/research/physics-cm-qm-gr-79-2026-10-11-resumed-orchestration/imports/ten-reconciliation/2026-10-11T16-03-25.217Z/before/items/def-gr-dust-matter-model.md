---
id: def-gr-dust-matter-model
kind: definition
title: "The dust matter model: rest density, four-velocity, stress-energy and dust system"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-c-r-and-smooth-maps-between-smooth-manifolds, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.2: the perfect fluid energy-momentum tensor (6.30), its conservation equations (6.31) and the pressureless case, printed pp. 65-66 (PDF pp. 66-67)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 (1.104)-(1.106): the energy-momentum tensor of dust, T^{mu nu}=rho U^mu U^nu with U the four-velocity, printed pp. 28-30 (PDF pp. 35-37)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.5.3-4.5.4: the dust and perfect fluid energy-momentum tensors and the conservation equations (4.53)-(4.55), printed pp. 183-187 (PDF pp. 190-194)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
justified_by: [prop-gr-dust-and-perfect-fluid-conservation-equations]
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$ ([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) and let
$U\subseteq M$ be a nonempty open subset, the **matter domain**, carrying its
restricted smooth structure
([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

**(a) Data.** A **dust model** on $U$ is a pair $(\rho,u)$ consisting of

- a smooth function $\rho:U\to\mathbb R$ with $\rho(p)>0$ for every $p\in U$,
  the **rest density**; and
- a smooth future-directed unit timelike vector field $u$ on $U$
  ([[def-c-r-and-smooth-maps-between-smooth-manifolds]] with target $TM$
  described through the tangent bundle; concretely, $u$ is a smooth vector
  field on $U$ with $g_p(u_p,u_p)=-1$ and $g_p(u_p,N_p)<0$ at every $p$,
  [[def-gr-smooth-lorentzian-objects]]).

The physical reading of $\rho$ as a rest-mass density in a unit system, and of
$u$ as the four-velocity congruence of the matter, is fixed by the framework's
matter postulate, not by this definition.

**(b) Stress-energy tensor.** The model's **stress-energy tensor** is the
smooth symmetric covariant $2$-tensor field

$$T^{ab}:=\rho\,u^au^b\qquad\text{equivalently}\qquad T_{ab}=\rho\,u_au_b,$$

with $u_a=g_{ac}u^c$ ([[def-gr-inverse-metric-and-musical-isomorphisms]],
[[def-gr-smooth-covariant-two-tensor-field]]); the two expressions correspond
under raising both indices, by $g^{ac}g^{bd}T_{cd}=T^{ab}$.

**(c) Dust system.** The **dust system** on $U$ is the pair of equations

$$\nabla_a(\rho\,u^a)=0,\qquad u^a\nabla_au^b=0 .$$

The first is a continuity equation for the density current $\rho u$; the
second says that the integral curves of $u$ are geodesics in the parameter that
makes $u$ their unit tangent, i.e. that the dust particles are in free fall
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

## Remarks

- **What is and is not asserted.** The definition introduces the data, the
  tensor and the system; it asserts neither that the dust system holds, nor
  that $T$ is divergence-free, nor that $T$ is the Hilbert tensor of any
  action. The equivalence of the dust system with $\nabla^aT_{ab}=0$ (where
  $\rho>0$) is proved in
  [[prop-gr-dust-and-perfect-fluid-conservation-equations]].

- **Smooth-branch restriction.** Caustics or shocks, where the congruence $u$
  fails to be a smooth unit field or $\rho$ ceases to be smooth, lie outside
  this model; a pressureless fluid with vanishing density in some region does
  not determine $u$ there, which is why $\rho>0$ on the whole matter domain is
  part of the data.
