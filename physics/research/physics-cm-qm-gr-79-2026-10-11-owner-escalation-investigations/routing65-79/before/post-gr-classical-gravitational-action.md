---
id: post-gr-classical-gravitational-action
kind: postulate
title: "Adopted classical gravitational action and variational field law"
status: draft
origin: session
domain: physics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-si-unit-and-coordinate-conventions, def-gr-hilbert-stress-energy-tensor, def-gr-scalar-field-matter-model, def-gr-dust-matter-model, def-gr-perfect-fluid-matter-model, def-gr-metric-volume-form-and-current-flux, def-gr-curvature-tensor-and-derived-tensors, def-oriented-smooth-manifold-and-oriented-chart]
dependency_roles:
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  post-gr-field-and-matter-assumptions: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-hilbert-stress-energy-tensor: formulation-prerequisite
  def-gr-scalar-field-matter-model: formulation-prerequisite
  def-gr-dust-matter-model: formulation-prerequisite
  def-gr-perfect-fluid-matter-model: formulation-prerequisite
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
physical_scope: "Adoption of the action formulation of the classical gravitational field law: the Einstein-Hilbert action of the smooth Lorentzian metric with cosmological parameter Lambda, the supplied scalar-field matter action (dust and perfect-fluid sectors use the separate direct-equation presentation), the Hilbert convention for the matter stress-energy tensor, and the variational principle as the field law of the model. Excludes quantum gravity and quantum fields, non-smooth and distributional sources, boundaries and junction conditions, gravity-mediated matter self-force corrections, and any claim that an action principle or a particular matter model describes nature. The adopted fields, constants and equations are model input; deductions from them are conditional on this adoption."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Hilbert action (4.54)-(4.55), its variation (4.66)-(4.67), the total action (4.68) and the definition (4.70) of the energy-momentum tensor, printed pp. 115-119 (PDF pp. 122-126)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 9.1-9.3: the Einstein-Hilbert action with (9.26), the matter action and the definition (9.28)-(9.29) of T^{ab}, and the resulting equation (9.34), printed pp. 111-118 (PDF pp. 112-119)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.1 and 4.5.2: the Einstein-Hilbert action with cosmological constant, the definition (4.46) of T_{mu nu} and the combined equations (4.47), printed pp. 141-144 and 182-183 (PDF pp. 148-151 and 189-190)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the classical gravitational framework, for
models whose geometric data satisfy [[post-gr-spacetime-and-classical-domain]]
and whose matter sector satisfies [[post-gr-field-and-matter-assumptions]], the
following statements. All symbols $c,G_N,\Lambda,\kappa$ are those of
[[def-gr-si-unit-and-coordinate-conventions]].

**(i) Oriented models.** The spacetime of a model in this formulation carries,
in addition to $(M,g,N)$, an orientation
([[def-oriented-smooth-manifold-and-oriented-chart]]); the metric volume form
$\mathrm{vol}_g$ of [[def-gr-metric-volume-form-and-current-flux]] and its
integrals are understood with respect to it. A model without a chosen
orientation, or with a nonorientable $M$, requires the density formulation of
the action, which is not developed here and is outside the scope of this
postulate.

**(ii) Einstein-Hilbert action density.** The **Einstein-Hilbert action
density** of a smooth Lorentzian metric $g'$ of signature $(-,+,+,+)$ on $M$ is
the smooth $4$-form

$$\ell_{\mathrm{EH}}(g'):=\frac{c^3}{16\pi G_N}\bigl(S_{g'}-2\Lambda\bigr)\mathrm{vol}_{g'},$$

where $S_{g'}$ is the scalar curvature of $g'$
([[def-gr-curvature-tensor-and-derived-tensors]]) and $\Lambda\in\mathbb R$ is
a constant parameter of dimension $\mathrm m^{-2}$. For two metrics whose
difference is supported in a compact set, the **action difference**
$\Delta S_{\mathrm{EH}}:=\int_M[\ell_{\mathrm{EH}}(g')-\ell_{\mathrm{EH}}(g)]$
is a real number. Only such differences are used; no value of the total action
of a noncompact spacetime is asserted. The coupling

$$\kappa:=\frac{8\pi G_N}{c^4}$$

has dimension $\mathrm m^{-1}\,\mathrm{kg}^{-1}\,\mathrm s^{2}$.

**(iii) Matter sectors and available presentations.** A model adopting this
action presentation uses the supplied scalar-field action in sector (1).
Sectors (2) and (3) are described here only to distinguish the alternative
direct-equation presentation; they do not adopt this variational postulate.
The three sector descriptions use the units of
[[def-gr-si-unit-and-coordinate-conventions]]:

1. a **scalar-field sector**, specified by the data $(\varphi,V,K)$ of
   [[def-gr-scalar-field-matter-model]] with the physical readings: $\varphi$
   dimensionless, $V$ a geometric potential with values in
   $\mathrm m^{-2}$, and $K>0$ in $\mathrm J\,\mathrm m^{-1}$. Length
   coordinates give $\partial_a\varphi$ dimension $\mathrm m^{-1}$, so the
   kinetic term and $V$ have matching dimensions; the physical potential
   energy density is $K V$ in $\mathrm J\,\mathrm m^{-3}$. The sector's
   action differences are those defined there, and its stress-energy tensor
   is the candidate tensor of that definition;
2. a **dust sector**, specified by $(\rho,u)$ of
   [[def-gr-dust-matter-model]], whose unit-tangent coefficient is the rest
   energy density $\varepsilon:=\rho$ in $\mathrm J\,\mathrm m^{-3}$; the
   rest-mass density is $\rho_m=\varepsilon/c^2$ in
   $\mathrm{kg}\,\mathrm m^{-3}$ and the physical four-velocity is $U=cu$
   with $g(U,U)=-c^2$. Its stress-energy tensor
   $T^{ab}=\rho u^au^b=\rho_m U^aU^b$ is prescribed by the model
   and its matter equations are the dust system of that definition;
3. a **perfect-fluid sector**, specified by $(\varepsilon,p,n)$ (with optional
   equation of state) of [[def-gr-perfect-fluid-matter-model]] with
   $\varepsilon,p$ in $\mathrm J\,\mathrm m^{-3}$, whose stress-energy tensor
   is prescribed by the model and whose matter equations are the fluid
   equations of that definition.

In sectors (2) and (3) no matter action is supplied: the model prescribes
$T$ and the matter equations directly and adopts the direct-equation
presentation, with its consistency conditions. Clause (iv) does not apply to
these sectors. In
sector (1) the matter action is the scalar action of
[[def-gr-scalar-field-matter-model]]; its metric variation is required to be
represented by its stress-energy tensor in the Hilbert convention

$$\delta S_m=-\frac{1}{2c}\int_MT_{ab}\,\delta g^{ab}\,\mathrm{vol}_g \qquad\text{off shell in matter variables,}$$

which is the content of
[[def-gr-hilbert-stress-energy-tensor]] clause (b) for that action; for the
scalar action this representation is a proved property of the model, recorded
in [[prop-gr-scalar-field-stress-energy-conservation]] clause (b), and is
adopted here as the reading of $T$ in the framework's units.

**(iv) Variational field law.** For the supplied scalar-field action, the classical field
law adopted for the model is: the metric $g$ is stationary for the total action
difference $\Delta S_{\mathrm{tot}}:=\Delta S_{\mathrm{EH}}+\Delta S_m$ under
every jointly smooth metric family with compactly supported variation as
defined in [[def-gr-hilbert-stress-energy-tensor]] clause (a), and the model's matter configuration satisfies its matter equations
of motion. This variational principle is the adopted field law of the action
presentation; the displayed field equation it is equivalent to is derived, not
adopted a second time, in
[[pthm-gr-adopted-action-and-einstein-equations]].

**(v) Alternative presentation.** The direct-equation presentation of the same
field law is adopted separately in
[[post-gr-einstein-field-law]]. A model adopts exactly one of the two
presentations; they are alternative presentations of one classical field law
and are never combined as two independent premises.

**(vi) Status and scope.** Clauses (i)-(v) are adopted assumptions. No
geometry, symmetry principle or observation derives them; the action
formulation is not claimed to be selected by nature, and no numerical value of
$c$, $G_N$ or $\Lambda$ is asserted. The smooth-branch exclusions of
[[post-gr-spacetime-and-classical-domain]] and
[[post-gr-field-and-matter-assumptions]] apply verbatim: lower-dimensional or
distributional sources, boundaries with junction conditions, and non-smooth
fields require mathematics and physical assumptions not supplied here, and the
comparison of any model prediction with data tests the combined model,
including this postulate, rather than proving it.

## Status, scope and limitations

- **Deductions are conditional.** Every quantity derived from this postulate —
  the field equations, conservation identities and consistency conditions — is
  a logical consequence of these adopted assumptions and the mathematics of
  the framework, not a statement about nature.

- **Choices inside the formulation.** The cosmological parameter may be fixed
  to zero for a restricted branch of a model; the matter sector is a model
  input; an equation of state in the fluid sector is a further assumption of
  that model. Different choices give different models of the same framework.

- **No boundary terms are adopted.** Nonzero variations of the metric on a
  boundary are not covered by clause (iv); their treatment requires additional
  boundary terms that this framework does not supply.
