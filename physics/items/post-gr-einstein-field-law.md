---
id: post-gr-einstein-field-law
kind: postulate
title: "Adopted Einstein field equation in the direct-equation presentation"
status: published
origin: session
domain: physics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-stress-energy-tensor-field, def-gr-curvature-tensor-and-derived-tensors, def-gr-scalar-field-matter-model, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-si-unit-and-coordinate-conventions, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  post-gr-field-and-matter-assumptions: formulation-prerequisite
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-curvature-tensor-and-derived-tensors: formulation-prerequisite
  def-gr-scalar-field-matter-model: formulation-prerequisite
  def-gr-metric-selected-connection: formulation-prerequisite
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
physical_scope: "Adoption of the direct-equation presentation of the classical gravitational field law: the Einstein tensor of the metric-selected connection plus the cosmological term equals the coupling times the model's stress-energy tensor on the matter domain. Excludes quantum gravity and quantum fields, non-smooth and distributional sources, boundaries and junction conditions, and any claim that the equation or a particular matter model describes nature. The equation, the cosmological parameter and the matter content are model input; all deductions from this postulate are conditional on it."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.4 'Postulates of General Relativity', postulate 4: G_{ab}=8 pi G T_{ab}, printed pp. 66-68 (PDF pp. 67-69)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: Einstein's equations (4.52), printed p. 113 (PDF p. 120), and the equation with cosmological constant (4.74), printed p. 119 (PDF p. 126)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.2: the full Einstein equations with matter and cosmological constant (4.47), printed pp. 182-183 (PDF pp. 189-190)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as the field law of the direct-equation presentation of the classical
gravitational framework, for models satisfying
[[post-gr-spacetime-and-classical-domain]] and
[[post-gr-field-and-matter-assumptions]], the following statement.

**(i) The equation.** Let $(M,g,N)$ be the model's smooth time-oriented
Lorentzian four-manifold with metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) and let
$G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ be the Einstein tensor of that
connection ([[def-gr-curvature-tensor-and-derived-tensors]]). Let
$T$ be the model's stress-energy tensor field on its matter domain
$U\subseteq M$ ([[def-gr-stress-energy-tensor-field]]) and let
$\Lambda\in\mathbb R$ be a constant parameter with dimension
$\mathrm m^{-2}$ and $G_N>0$, $c>0$ the constants of
[[def-gr-si-unit-and-coordinate-conventions]]. Adopt

$$G_{ab}+\Lambda g_{ab}=\frac{8\pi G_N}{c^4}\,T_{ab}\qquad\text{on }U$$

as the field law of the model. Writing
$\kappa:=8\pi G_N/c^4$ and $T_{ab}=g_{ac}g_{bd}T^{cd}$ for the lowered tensor,
the equation reads $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$

**(ii) Matter content.** The equation constrains the metric and the matter of
the model jointly. A model specifies its matter sector as in
[[post-gr-field-and-matter-assumptions]]: a scalar-field model with its action
and stress-energy tensor ([[def-gr-scalar-field-matter-model]]), or a dust or perfect-fluid model with prescribed
stress-energy tensor and matter equations. The consistency condition that
every solution must satisfy, $\nabla^aT_{ab}=0$, is not adopted separately; it
is a consequence of the equation and of the contracted second Bianchi identity
and is derived in [[pthm-gr-einstein-consistency-and-energy-conditions]].

**(iii) Alternative presentation.** The action formulation of the same field
law is adopted separately in [[post-gr-classical-gravitational-action]]. A
model adopts exactly one of the two presentations. They are alternative
presentations of one classical field law: the action-to-equation theorem of
this page identifies the equation obtained from stationarity of the total
action with the equation displayed in clause (i), and the direct presentation
is not an additional premise of an action-formulated model.

**(iv) Status and scope.** The equation is an adopted law of the model. It is
not derived from mathematical symmetry, from the equivalence principle, or
from observation; covariance and correspondence arguments motivate but do not
prove it. No numerical value of $c$, $G_N$ or $\Lambda$ is asserted, and no
claim is made that any particular metric or matter configuration solves the
equation or describes nature. The smooth-branch exclusions of
[[post-gr-spacetime-and-classical-domain]] and
[[post-gr-field-and-matter-assumptions]] apply: distributional or
lower-dimensional sources, boundaries with junction conditions, and non-smooth
fields are outside this formulation. Comparisons of a model's predictions with
data test the combined model — geometry, matter content and this law — and
agreement is evidence about that combination, not a proof of the postulate.

## Status, scope and limitations

- **Restricted branches.** A model may fix $\Lambda=0$ or choose a particular
  matter sector; each such restriction is part of the model, not of the
  framework.

- **No well-posedness claim.** The postulate asserts the equation on the
  matter domain; it asserts neither existence nor uniqueness of solutions for
  any data, which are separate mathematical problems with their own
  hypotheses.
