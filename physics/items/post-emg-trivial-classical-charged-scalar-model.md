---
id: post-emg-trivial-classical-charged-scalar-model
kind: postulate
title: "Adopted trivial-potential classical charged scalar model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
deps:
  - lem-emg-classical-charged-scalar-compact-variation
  - def-emg-classical-charged-scalar-finite-regularity-system
  - def-emg-trivial-potential-charged-scalar-system
  - lem-emg-charged-scalar-variation
  - def-emg-geometry-units
dependency_roles:
  lem-emg-classical-charged-scalar-compact-variation: mathematical-premise
  def-emg-classical-charged-scalar-finite-regularity-system: mathematical-premise
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
  lem-emg-charged-scalar-variation: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
physical_scope: >
  A classical C2 complex scalar on a C3 Lorentzian metric, including the smooth
  subclass, with a globally defined real C2 electromagnetic
  potential A and exact field strength F=dA, arbitrary real coupling lambda,
  positive scalar normalization K_phi, and smooth real self-potential V. This is
  the trivial-potential sector only; it is not a quantum, empirical,
  material-response, or coupled-solution claim.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Gauge Theory, complete author-hosted lecture notes (457-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2, PDF pp. 89–91 (printed pp. 78–80): the four-dimensional Abelian-Higgs action and its charged complex scalar covariant derivative. Only the classical functional form is used; its natural units, Higgs potential, superconducting interpretation, and quantum material claims are not imported."
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), complete 97-page preprint"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "§3.1, PDF pp. 22–31, and §5.4, PDF pp. 81–87: the symmetric-hyperbolic local Cauchy framework and Einstein–matter coupling, including brief charged-scalar context. The source gives no complete proof for this exact coupled system."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, eqs. (4.68)–(4.70), PDF pp. 123–124 (printed pp. 117–118), matter action and Hilbert-stress conventions; Ch. 5, eqs. (5.33)–(5.38), PDF p. 145 (printed p. 139), on-shell diffeomorphism identity. Its units and signs are not adopted."
verification:
  precheck: n/a
---

## Postulate

Use a smooth Hausdorff, second-countable underlying oriented four-manifold
with a time-oriented $C^3$ Lorentzian metric, signature
$(-,+,+,+)$, Levi-Civita connection, curvature convention, and SI length-coordinate
units of [[def-emg-geometry-units]]. Use the explicit classical domain of [[def-emg-classical-charged-scalar-finite-regularity-system]]. Let $A$ be a $C^2$, globally defined real
one-form with components in tesla-metres, and set $F:=dA$, so $F$ is a $C^1$
exact real two-form. The globally defined potential is the selected
**trivial-potential sector**: it excludes bundles with no global potential and
does not impose an integer charge condition.

Let $\varphi:M\to\mathbb C$ be a $C^2$ dimensionless classical scalar field. Smooth configurations remain a subclass.
Choose $\lambda\in\mathbb R$ with units $(\mathrm{T\,m^2})^{-1}$, a constant
$K_\varphi>0$ with units $\mathrm{J\,m^{-1}}$, and an open set
$\mathcal U\subseteq\mathbb R$ containing the range of $|\varphi|^2$ together
with a smooth real function $V:\mathcal U\to\mathbb R$ whose values are in
$\mathrm{m^{-2}}$. No sign, polynomial-degree, or smallness condition is
imposed on $V$.

Define the gauge-covariant scalar derivative and charged covector by
$P_a:=D_a\varphi:=\partial_a\varphi-i\lambda A_a\varphi$. For a charged
covector $P_b$, define $D_aP_b:=\nabla_aP_b-i\lambda A_aP_b$, where $\nabla$
is the Levi-Civita derivative, and set $D^aP_a:=g^{ab}D_aP_b$. The adopted
classical matter action is

$$S_\varphi[g,A,\varphi]= -\frac{K_\varphi}{2c}\int_M\left(g^{ab}\overline{P_a}P_b+V(|\varphi|^2)\right)\mathrm{vol}_g.$$

With the stated SI dimensions, $S_\varphi$ has unit joule-second. For a gauge
function $\chi$ in $A\mapsto A+d\chi$, assign $[\chi]=\mathrm{T\,m^2}=\mathrm{Wb}$,
so $d\chi$ has the same unit as the components of $A$ and $\lambda\chi$ is
dimensionless.

On a noncompact domain the integral is used when finite; otherwise the
formulation concerns compactly supported action differences. Variations are
smooth and compactly supported in the fixed global-potential sector. Adopt this
functional as a classical matter model. In particular, this item does not
assert that the model describes nature, that its coupled equations have a
solution, or that the scalar is a quantum field.

The scalar action is adopted in this global real-potential domain. The
Einstein–Hilbert and free Maxwell coefficients below agree with the smooth
action convention of [[post-emg-einstein-maxwell-action]], but the present
model is declared directly: an arbitrary real $\lambda$ is not required to
define an integer-weight representation of a principal circle bundle.
For the declared classical class, separately adopt the same total functional on the domain and compact smooth directions of [[def-emg-classical-charged-scalar-finite-regularity-system]]:

$$S_{\mathrm{tot}}=\frac{c^3}{16\pi G_N}\int_M(R-2\Lambda)\,\mathrm{vol}_g-\frac{1}{4\mu_0c}\int_MF_{ab}F^{ab}\,\mathrm{vol}_g+S_\varphi.$$

Every integral here is a relative compact action when a global integral is not finite. Adopt independent stationarity for all smooth compact symmetric inverse-metric, real one-form and complex scalar directions. [[lem-emg-classical-charged-scalar-compact-variation]] proves all first variations and their pointwise equation equivalence at $g\in C^3$, $A,\varphi\in C^2$. This declares the classical action model, including all its smooth configurations, without requiring a circle-bundle matter representation. The separate smooth circle-sector action formulation is not a prerequisite for this global-real-potential branch.

Its gauge action is
$A\mapsto A+d\chi$, $\varphi\mapsto e^{i\lambda\chi}\varphi$ for a smooth
real function $\chi$; direct substitution gives
$D'_a\varphi'=e^{i\lambda\chi}D_a\varphi$, so the scalar action density is
gauge invariant. It is also invariant under orientation-preserving
diffeomorphisms because its integrand is a scalar multiplied by the metric
volume form. These are properties of the selected functional, not evidence
that it describes nature.

For clarity, the mathematical supplier [[lem-emg-charged-scalar-variation]]
gives the compact first variations and defines

$$E_\varphi:=D^aP_a-V'(|\varphi|^2)\varphi,\qquad j^a:=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a),$$

$$T^\varphi_{ab}:=K_\varphi\operatorname{Re}(\overline{P_a}P_b)-\frac{K_\varphi}{2}g_{ab}\left(g^{cd}\overline{P_c}P_d+V(|\varphi|^2)\right).$$

Here $E_\varphi=0$ is the scalar Euler–Lagrange equation, $j$ is the current
from varying $A$, and $T^\varphi$ is the Hilbert stress tensor from varying the
inverse metric. Those formulas are mathematical consequences of the action
under the cited supplier's hypotheses; they are not extra physical laws. For smooth fields those formulas use the cited smooth variation result; for the declared classical fields the identical formulas and compact stationarity equivalence are proved in [[lem-emg-classical-charged-scalar-compact-variation]]. Both are mathematical deductions, separate from adoption of the physical model.
