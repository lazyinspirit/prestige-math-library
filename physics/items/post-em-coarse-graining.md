---
id: post-em-coarse-graining
kind: postulate
title: "Declared averaging kernel, macroscopic scale assumptions and averaged fields"
status: published
origin: pipeline
domain: physics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-sources, def-locally-integrable-function-on-r-n, lem-complex-translation-and-approximate-identity-interfaces, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-countable-union-of-null-is-null, thm-heine-borel-rn, thm-the-lebesgue-integral-respects-almost-everywhere-equality, lem-test-function-cutoffs-and-euclidean-localization]
dependency_roles:
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-locally-integrable-function-on-r-n: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  def-mollifier-family-generated-by-a-unit-mass-smooth-bump: mathematical-premise
  thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-countable-union-of-null-is-null: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
physical_scope: "The declared smoothing convention for matter: a fixed smooth unit-mass kernel and averaging length, the definition and interior spatial regularity of the spatial averages of locally integrable fields on the laboratory region, the every-time versus almost-every-time input qualification, the compatible-extension branch, the scale-separation and boundary-layer conventions, and the explicit statement that averaging supplies neither a constitutive law nor a field equation. A modelling postulate of the framework, not derived from the vacuum equations and not an empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.1 printed pp. 172-175 (PDF pp. 180-183): matter is described through macroscopic averaged fields (polarisation as a dipole-moment density), and the notes state that the coarse-graining step is informal; the precise kernel, averaging length and scale-separation convention of this postulate are the framework's own formulation. Read in the retained 236-page full text."
    - title: "R. Fitzpatrick, Electromagnetism (University of Texas at Austin course), node 69: Polarization"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node69.html"
      locator: "node 69, opening paragraph: a neutral molecular medium is described macroscopically by the dipole moment per unit volume, with the microscopic atomic detail absorbed into P; read in the retained offline full text of the course."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 4.4.1 printed pp. 179-180: the constitutive discussion states that the polarisation of a dielectric ordinarily results from an electric field and that the material response is a model choice; read in the stamped 596-page scan."
---

## Postulate

Adopt as a modelling postulate of this framework the following coarse-graining convention for matter. Let the laboratory region $U\cong I\times\Omega$, its frame basis $(e_1,e_2,e_3)$, its units, its fields and its sources be those of [[def-em-lab-geometry]], [[def-em-si-conventions]], [[def-em-fields]] and [[def-em-sources]], and assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), the hypothesis of the smoothing theorem cited in clause (b).

**(a) [Averaging length, kernel and footprint]** Fix $\ell>0$ and nonnegative $\eta\in C_c^\infty(\mathbb R^3)$ with $\int\eta=1$, in the Euclidean test-function convention of [[def-complex-lp-and-euclidean-test-function-conventions]]. Put $\eta_\ell(x)=\ell^{-3}\eta(x/\ell)$, $K=\operatorname{supp}\eta$ and choose a declared finite bound $R_\eta>0$ with $K\subseteq\overline B_{R_\eta}(0)$. The kernel and length are fixed data; the imported mass-one mollifier definition [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] does not require $K\subseteq\overline B_1(0)$. At $x$ the exact averaging footprint is $x-\ell K$. Define the open interior averaging domain

$$\Omega_{\ell,\eta}:=\{x\in\Omega:x-\ell K\subseteq\Omega\}.$$

The sufficient condition $\operatorname{dist}(x,\mathbb R^3\setminus\Omega)>\ell R_\eta$ implies membership. If the additional unit-support condition $K\subseteq\overline B_1(0)$ is declared, the original sufficient region $\operatorname{dist}(x,\mathbb R^3\setminus\Omega)>\ell$ and the ball $B_\ell(x)$ are valid special cases; unit support is not inferred from mass one.

**(b) [Averaged fields and input regularity]** For an open spatial domain $V$, locally integrable means measurable and absolutely integrable on every compact subset of $V$, componentwise for maps to $\mathbb R^m$, $m=1$ or $3$ ([[def-locally-integrable-function-on-r-n]]). First suppose $F:\Omega\times I\to\mathbb R^m$ has a locally integrable spatial slice $F(\cdot,t)$ for every $t$ under consideration. No integrability across the boundary of $\Omega$ is required for the interior branch. Define, for $x\in\Omega_{\ell,\eta}$,

$$F_\ell(x,t)=\int_\Omega\eta_\ell(x-y)F(y,t)\,dy.$$

The compact footprint lies in $\Omega$, so this integral exists absolutely, and for each such $t$ it is smooth in $x$ on $\Omega_{\ell,\eta}$ with

$$\partial_x^\alpha F_\ell(x,t)=\int_\Omega(\partial^\alpha\eta_\ell)(x-y)F(y,t)\,dy$$

for every multi-index; these are applications of the pinned mollifier smoothing supplier [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] after localization: near a fixed $x_0\in\Omega_{\ell,\eta}$, compactness of $x_0-\ell K\subset\Omega$ gives a small closed ball $Q$ of averaging centres whose footprints have compact union inside $\Omega$. Choose $\zeta\in C_c^\infty(\Omega)$ equal to one near that union ([[lem-test-function-cutoffs-and-euclidean-localization]]); the zero extension of $\zeta F(\cdot,t)$ is globally locally integrable and its mollification agrees with the displayed average on the interior of $Q$. This also proves that $\Omega_{\ell,\eta}$ is open, without assuming that the zero extension of $F$ itself is locally integrable. For each admissible fixed $t$ the spatial convolution is measurable in $x$ and independent of a.e.-equal spatial representatives ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]); no joint $(x,t)$ measurability follows from the every-slice hypothesis alone. Joint $L^1_{\mathrm{loc}}(\Omega\times I)$ input alone instead gives these slice statements for almost every $t$, by local Fubini on compact spatial/time exhaustions ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-countable-union-of-null-is-null]], [[thm-heine-borel-rn]]); it gives no every-time slice claim. A claim for every $t$ must explicitly supply locally integrable slices for every $t$ (for example jointly continuous fields supply that condition). A spacetime a.e. class alone determines the resulting averages only for almost every $t$; changing an exceptional time slice may change its pointwise-time assignment. Spatial smoothing asserts no time differentiability or joint smoothness without separately stated time hypotheses.

**[Compatible extension branch]** If a declared extension $\widehat F(\cdot,t)$ agrees with $F$ a.e. on $\Omega$ and is locally integrable on an open larger spatial domain $V$, use the same formula there for all $x$ whose compact footprint lies in $V$. If $V=\mathbb R^3$ and every declared slice is globally locally integrable, the average is defined and spatially smooth on all $\mathbb R^3\times I$. If only joint local integrability of the extension is supplied, the global spatial conclusion is for almost every $t$ unless the every-slice hypothesis is added. The zero extension is an allowed choice only when it meets this local-integrability condition: equivalently, at each declared $t$, $\int_{Q\cap\Omega}|F(y,t)|\,dy<\infty$ for every compact $Q\subset\mathbb R^3$. Mere local integrability inside $\Omega$ does not imply that boundary condition. All these extension and per-time conditions are part of the declared configuration, with the original interior branch retaining every locally integrable spatial input.

**(c) [Macroscopic reading and scale separation]** The framework reads its macroscopic fields and source densities as such averages only in situations where a separation of microscopic and observation scales is stated for the problem at hand; the averaging length and the actual kernel footprint (or its radius bound $\ell R_\eta$) are part of that statement, and no canonical value of $\ell$ is asserted. This is a formulation choice for the macroscopic description, not a consequence of the vacuum equations.

**(d) [Boundary handling]** For requested averages at $x\in\Omega$, boundary handling concerns the locations where $x-\ell K$ is not contained in the original spatial domain. The region $\{x\in\Omega:\operatorname{dist}(x,\partial\Omega)\le\ell R_\eta\}$ is a sufficient enclosing boundary layer, with $\ell$ in place of $\ell R_\eta$ only in the declared unit-support special case. Every requested average at an exterior location $x\notin\Omega$ must separately satisfy the extension/domain conditions of (b); the interior boundary-layer statement makes no claim to enclose exterior locations. In the interior layer a zero-extension average is used only under the compatible-extension hypothesis of (b). Otherwise one must declare another locally integrable extension, a boundary-layer model with its own well-definedness hypotheses, or restrict the averaging domain to the exact interior footprint domain. No boundary model is supplied by local integrability alone. An extension does not automatically extend a microscopic field equation across the original boundary; any averaging of such equations must either declare their validity on all used extended footprints or retain the resulting boundary distribution terms. These boundary qualifications do not impose a constitutive law.

**(e) [No constitutive content]** Coarse graining reorganises the description; it does not by itself produce a constitutive relation between averaged fields and averaged sources, and no linear, local or instantaneous response is asserted by this postulate. Such a response is the separate assumption `post-em-material-closure`, and the derivation of macroscopic field equations from the vacuum equations is the separate result `pthm-em-macroscopic-maxwell`.

## Status and conventions

This is an adopted modelling assumption, not a theorem of the framework and not an empirical law: it fixes the kernel, the averaging length and the boundary/scale conventions with which this framework reads macroscopic matter. The mathematical content used in clauses (a)-(b) is discharged by the named published suppliers under the stated $\mathrm{AC}_\omega$ convention; the averaging, scale-separation and boundary conventions themselves are not deduced from the vacuum equations. Clauses (c)-(e) record scope: a scale separation must be declared for each problem, the footprint (not merely a radius bound) enters the boundary layer, and the postulate supplies neither a constitutive law nor a field equation. The item `pthm-em-macroscopic-maxwell` uses this convention to formulate macroscopic fields and sources, and `post-em-material-closure` adds the material response; neither is proved or assumed here.
