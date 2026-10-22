---
id: def-emx-excitation-form
kind: definition
title: Excitation and free-current forms
status: published
origin: session
domain: physics
library: physics
dependency_level: 1
deps:
  - def-em-electromagnetic-tensor
  - def-em-lab-geometry
  - def-em-polarization-magnetization
  - def-em-si-conventions
  - def-emx-continuous-chain-integral
  - def-emx-lorentz-star
  - def-directional-and-partial-derivatives
  - def-c-one-map-and-local-inverse
  - def-standard-orientation-of-the-affine-simplex
  - def-smooth-singular-simplex
  - def-smooth-singular-chain-and-cochain-complexes
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - def-riemann-integral-over-a-jordan-set
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-local-coordinate-formula-for-the-exterior-derivative
dependency_roles:
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-emx-continuous-chain-integral: mathematical-premise
  def-emx-lorentz-star: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-c-one-map-and-local-inverse: mathematical-premise
  def-standard-orientation-of-the-affine-simplex: mathematical-premise
  def-smooth-singular-simplex: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
physical_scope: "Classical electromagnetism in the fixed oriented SI laboratory chart: the electromagnetic field-strength 2-form, macroscopic excitation 2-form, and free-current 3-form constructed from the existing field and material quantities. No material constitutive closure or empirical claim is included in these definitions."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture script
      url: https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf
      locator: Section 5.3, printed pp. 5.3–5.4 (PDF pp. 62–63), equation (5.10), displacement D = epsilon_0 E + P; Section 6.3, PDF p. 71, equations (6.14)–(6.15), SI Maxwell equations and source continuity.
    - title: Friedrich W. Hehl, Yakov Itin, and Yuri N. Obukhov, Recent developments in premetric classical electrodynamics, arXiv:physics/0610221v1
      url: https://arxiv.org/pdf/physics/0610221
      locator: Sections 2 and 4, PDF pp. 3–6, equations (1), (3)–(5), and (9)–(10), current/excitation/field-strength 1+3 decompositions and metric-independent exterior equations; Section 6, PDF pp. 8–9, equations (25)–(26), metric-dependent vacuum Hodge-star closure; Section 11, PDF pp. 17–18, equations (76)–(85), free/bound current and excitation split.
proof_strategy: direct
---

## Definition

Let the laboratory region be $U=I\times\Omega$, with nonempty open $I\subseteq\mathbb R$ and nonempty open $\Omega\subseteq\mathbb R^3$, in the fixed positively oriented chart $x^0=ct,x^1,x^2,x^3$. Write $dt=dx^0/c$ and $vol_3=dx^1\wedge dx^2\wedge dx^3$. Use the framework fields $E,B,D,H$ and the free sources $\rho_f,J_f$, with their SI types, units, and regularity as defined by the existing laboratory, electromagnetic-field, and polarization/magnetization definitions. Whenever a first exterior derivative is used, the field coefficients are at least $C^1$.

Define the spatial forms

$$\mathcal E = E_1 dx^1 + E_2 dx^2 + E_3 dx^3,$$

$$\mathcal B = B_1 dx^2 \wedge dx^3 + B_2 dx^3 \wedge dx^1 + B_3 dx^1 \wedge dx^2,$$

$$\mathcal D = D_1 dx^2 \wedge dx^3 + D_2 dx^3 \wedge dx^1 + D_3 dx^1 \wedge dx^2,$$

$$\mathcal H = H_1 dx^1 + H_2 dx^2 + H_3 dx^3,$$

and

$$\mathcal J_{\mathrm{sp}} = (J_f)_1 dx^2 \wedge dx^3 + (J_f)_2 dx^3 \wedge dx^1 + (J_f)_3 dx^1 \wedge dx^2.$$

Define the spacetime field-strength, excitation, and free-current forms by

$$F = \mathcal B - dt \wedge \mathcal E,\qquad G = \mathcal D + dt \wedge \mathcal H,\qquad \mathcal J = \rho_f\,vol_3 - dt \wedge \mathcal J_{\mathrm{sp}}.$$

Thus $F_{0i}=-E_i/c$ in $x^0=ct$ coordinates, consistently with the framework electromagnetic tensor. The integral of $F$ over an oriented spacetime 2-surface has units Wb; the integral of $G$ over such a surface and of $\mathcal J$ over an oriented spacetime 3-chain has units C. No relation between $G$ and the Lorentzian Hodge dual of $F$ is part of this definition; the vacuum closure is proved only in the separate vacuum branch.

For a $C^1$ $k$-form $\omega=\frac{1}{k!}\omega_{\mu_1\cdots\mu_k}dx^{\mu_1}\wedge\cdots\wedge dx^{\mu_k}$, for $1\le k\le3$, in this fixed chart, with Greek indices in $\{0,1,2,3\}$ and repeated indices summed, define its laboratory-coordinate exterior derivative by

$$d\omega = \frac{1}{k!}\,\partial_\lambda\omega_{\mu_1\cdots\mu_k}\,dx^\lambda\wedge dx^{\mu_1}\wedge\cdots\wedge dx^{\mu_k}.$$

When the coefficients are smooth this is the usual exterior derivative. For a continuous spatial 2-form $\beta_t$ and a finite real smooth singular 2-cycle $z=\sum_\sigma c_\sigma\sigma$ in $\Omega$, define its cycle flux at time $t$ by $\Phi_z(t)=\sum_\sigma c_\sigma\int_{\Delta^2}\sigma^*\beta_t$, using the standard affine orientation and continuous-chain integral convention of [[def-emx-continuous-chain-integral]].

## Definition references

[[def-em-lab-geometry]]

[[def-em-electromagnetic-tensor]]

[[def-em-polarization-magnetization]]

[[def-em-si-conventions]]

[[def-emx-continuous-chain-integral]]

[[def-emx-lorentz-star]]

[[def-directional-and-partial-derivatives]]

[[def-c-one-map-and-local-inverse]]

[[def-standard-orientation-of-the-affine-simplex]]

[[def-smooth-singular-chain-and-cochain-complexes]]

[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

[[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]

[[thm-local-coordinate-formula-for-the-exterior-derivative]]

## Facts & Assumptions

**Given:** The fixed lab chart, fields, material fields, free sources, and regularity conditions in the Definition.

[F1] [[def-em-lab-geometry]] fixes $U=I\times\Omega$, $x^0=ct$, and the positively oriented Euclidean spatial basis.

[F2] [[def-em-electromagnetic-tensor]] fixes $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ in this chart.

[F3] [[def-em-polarization-magnetization]] defines $D=\epsilon_0 E+P$, $H=\mu_0^{-1}B-M$, $\rho_f=\rho-\rho_b$, and $J_f=J-J_b$, with the displayed SI units.

[F4] [[def-em-si-conventions]] gives $x^0=ct$, $\epsilon_0=(\mu_0c^2)^{-1}$, and the SI units of $E,B,D,H,\rho_f,J_f$.

[F5] [[def-emx-lorentz-star]] fixes the coframe $dx^0,dx^1,dx^2,dx^3$, orientation, signature $(-+++)$, and the Lorentzian Hodge-star basis formula; this is a separate metric-dependent map from the definitions of $F$ and $G$.

[F6] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives the usual coefficient formula for $d$ on smooth forms; the $C^1$ formula in the Definition is its coordinate extension to the regularity class used here.

[F7] [[def-standard-orientation-of-the-affine-simplex]] fixes the positive affine orientation and signed faces for each simplex. [[def-smooth-singular-simplex]] defines the smooth simplex maps, and [[def-smooth-singular-chain-and-cochain-complexes]] defines finite real smooth singular chains and their signed boundary.

[F8] [[def-emx-continuous-chain-integral]] defines the affine pullback Riemann integral for continuous forms on finite smooth chains. [[def-integral-of-a-form-over-a-smooth-singular-simplex]] gives the same integral for smooth coefficients. [[def-riemann-integral-over-a-jordan-set]] defines the scalar integral, and [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]] makes each continuous pullback coefficient on $\Delta^2$ integrable.

[F9] [[def-c-one-map-and-local-inverse]] defines $C^1$ coefficient functions as totally differentiable with continuous first derivative.

## Proof

**Given:** The fields and chart of the Definition, with $C^1$ coefficients wherever differentiated.

1.1 Each displayed spatial form is an alternating covector field because the coordinate 1-forms are a basis and wedge products are alternating. Since $dt=dx^0/c$, the time-space part of $F$ has $F_{0i}=-E_i/c$, and its spatial part has $F_{ij}=\epsilon_{ijk}B_k$; hence it matches the existing electromagnetic two-form components. The definitions of $D,H,\rho_f,J_f$ give exactly the coefficient fields used in $G$ and $\mathcal J$. [F1, F2, F3, given]

1.2 On an oriented spatial 2-surface, the coefficients of $\mathcal B$ and $\mathcal D$ have units T and C m$^{-2}$, respectively, so their integrals have units T m$^2$ = Wb and C. The time-space terms have units (s)(V m$^{-1}$)(m) = V s = Wb for $dt\wedge\mathcal E$, and (s)(A m$^{-1}$)(m) = A s = C for $dt\wedge\mathcal H$. Likewise $\rho_f\,vol_3$ and $dt\wedge\mathcal J_{\mathrm{sp}}$ each integrate with units C. [F3, F4, given, algebra]

2.1 A smooth singular simplex has compact Jordan parameter domain $\Delta^2$ and its pullback coefficient is continuous, so [F8] gives a finite Riemann integral. The same local convention gives finite integrals for continuous spacetime 2-forms and 3-forms on their respective compact parameter simplices. For a smooth form this agrees with the usual simplex integral of [F8]. For $C^1$ coefficients as in [F9], the coordinate formula for $d$ agrees with the standard one on smooth coefficients by [F6]. The definitions assign $F$ and $G$ independently from the field and excitation data; [F5] is not applied as a constitutive law here. [F5, F6, F7, F8, F9, given, algebra] ∎
