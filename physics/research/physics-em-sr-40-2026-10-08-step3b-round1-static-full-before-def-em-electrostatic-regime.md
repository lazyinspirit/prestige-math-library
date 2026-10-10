---
id: def-em-electrostatic-regime
kind: definition
title: The static and pure electrostatic regimes and their fixed-time reading
domain: physics
physical_scope: "The static and pure electrostatic idealizations of classical electromagnetism in one named inertial frame of the laboratory region $U\\cong I\\times\\Omega$: fields and sources whose time derivatives vanish there, with the reduction of the smooth Maxwell equations to $\\operatorname{div}E=\\rho/\\varepsilon_0$, $\\operatorname{curl}E=0$ in the pure case, together with the fixed-time spatial reading and the static-to-distributional dictionary for locally integrable time-independent objects, including the stationary point-charge reading. The conditions are frame-relative and are imposed, not derived; no dynamical stability, equilibrium support, boost behaviour or empirical content is asserted."
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-em-lab-geometry", "def-em-si-conventions", "def-em-fields", "def-em-sources", "def-em-weak-sources", "post-em-vacuum-maxwell", "def-directional-and-partial-derivatives", "def-divergence-and-curl-of-a-c1-vector-field", "def-ck-euclidean-maps-and-diffeomorphisms", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "def-distribution", "def-distributional-derivative", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "def-dirac-delta-and-its-derivatives", "def-integral-over-a-measurable-set", "def-test-function-space-d-of-an-open-set", "def-countable-choice", "cor-mean-value-theorem", "thm-ftc-second-part", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure", "thm-completion-measurable-functions-have-base-measurable-representatives", "thm-borel-products-of-euclidean-spaces-are-euclidean-borel", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands"]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-weak-sources: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  thm-completion-measurable-functions-have-base-measurable-representatives: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Sections 2.1.2 and 2.2.2-2.2.4 printed pp. 59-60 and 69-77 (electrostatics, div E = rho/epsilon_0, curl E = 0) and Section 2.4 printed pp. 90-96 (work and energy in electrostatics). Read in the stamped scanned full text, OCR cross-checked.
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.2 printed pp. 16-17 (the electrostatic potential and Poisson's equation, with the static equations of the introduction) and Section 2.2.1 printed pp. 17-19 (the point charge as a source). Read in the stamped full text.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 36 printed pp. 88-89 (the static Maxwell equations (36.1)-(36.2), E = -grad phi and the Poisson equation (36.4)); Gaussian units re-expressed in SI. Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 3.3.2-3.3.3 printed pp. 35-36 (Poisson's equation and the static Green's function for the time-independent problem). Read in the stamped full text.
---

## Definition

Let $U\cong I\times\Omega$ be the laboratory region of [[def-em-lab-geometry]] with the units, constants and symbols of [[def-em-si-conventions]], let $E:\Omega\times I\to\mathbb R^3$ and $B:\Omega\times I\to\mathbb R^3$ be fields of [[def-em-fields]] and let $(\rho,J)$ be source fields of [[def-em-sources]] on $\Omega\times I$, all of class $C^1$ (with every additional derivative appearing below existing and continuous); $\partial_t$ is the partial time derivative at fixed position of [[def-directional-and-partial-derivatives]].

(a) [Static regime] The **static (time-independent) electromagnetic regime** on $\Omega\times I$ is the requirement
$$\partial_tE=0,\qquad\partial_tB=0,\qquad\partial_t\rho=0,\qquad\partial_tJ=0\qquad\text{on }\Omega\times I.$$

(b) [Pure electrostatics] The **pure electrostatic regime** is the static regime together with $J=0$ and $B=0$ on $\Omega\times I$.

(c) [Reduced equations] If the smooth branch of [[post-em-vacuum-maxwell]] holds in the static regime, then the four Maxwell equations reduce to
$$\operatorname{div}E=\rho/\varepsilon_0,\qquad\operatorname{curl}E=0,\qquad\operatorname{div}B=0,\qquad\operatorname{curl}B=\mu_0J$$
pointwise on $\Omega\times I$, with $\operatorname{div}$ and $\operatorname{curl}$ of [[def-divergence-and-curl-of-a-c1-vector-field]] applied at each fixed time; in the pure electrostatic regime the reduction is exactly the pair $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{curl}E=0$.

(d) [Fixed-time reading] In the static regime $E,B,\rho,J$ do not depend on $t$, so each is the pullback along $(y,t)\mapsto y$ of a single map on $\Omega$; this fixed-time reading (the spatial field or source) is the object analysed by the electrostatic statements of this page, and no other time dependence is introduced. The equations of (c) are equations between those spatial maps.

(e) [Static-to-distributional reading] Let fields $E,B$ and volume densities $\rho,J$ be locally integrable and time independent on $\Omega\times I$, and let $\Omega$ be open. Then, under the $\mathrm{AC}_\omega$ convention of the cited measure and distribution interfaces ([[def-countable-choice]]), the weak equations of the solution predicate of [[def-em-weak-sources]](e) for these time-independent objects hold if and only if the four spatial equations $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=0$, $\operatorname{curl}B=\mu_0J$ hold in $\mathcal D'(\Omega)$; the passage between them is the integration in $t$ of the pairings against $C_c^\infty(I\times\Omega)$ tests, justified by [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] after identifying fields and densities with their regular distributions ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-distributional-derivative]]). In particular a **stationary point charge** at $x_0\in\Omega$ with charge parameter $q\in\mathbb R$ is the point source of [[def-em-weak-sources]](b) with constant trajectory $z(t)\equiv x_0$, whose pairing is $\psi\mapsto q\int_I\psi(x_0,t)\,dt$ and whose fixed-time reading is the spatial point source $\eta\mapsto q\eta(x_0)$ ([[def-dirac-delta-and-its-derivatives]]).

(f) [Conventions and scope] The regime is imposed in the one inertial frame of [[def-em-lab-geometry]]; no claim is made that time independence survives a change of inertial description, and where a frame change is used the transformed fields must be rechecked. The static regime is an adopted idealization, not a dynamical stability theorem: static charged matter requires external support or an adopted equilibrium model. No equation is asserted here for singular sources beyond the dictionary of (e), and no empirical claim is made.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the laboratory region $U\cong I\times\Omega$ with $I$ a nonempty open interval and $\Omega\subseteq\mathbb R^3$ nonempty open, jointly $C^1$ fields $E,B$ and $C^1$ sources $(\rho,J)$ as in [[def-em-fields]] and [[def-em-sources]], the smooth branch of the vacuum Maxwell equations, and for clause (e) locally integrable time-independent fields and densities on $\Omega\times I$ together with $\psi\in C_c^\infty(U)$.

[F1] The laboratory region, its fixed-time slices, its fields and its units are those of the primitives: the chart restriction $x(U)=\{(ct,y)\}$, the fixed-time readings, and the identification $U\cong I\times\Omega$ ([[def-em-lab-geometry]]); the SI constants with $\varepsilon_0=(\mu_0c^2)^{-1}$, $c>0$, $\mu_0>0$ and the units of $E,B,\rho,J$ ([[def-em-si-conventions]]); a $C^k$ field on $\Omega\times I$ with its polar/axial conventions and no asserted values at singular support ([[def-em-fields]]); smooth source fields $(\rho,J)$ and their branches ([[def-em-sources]]).

[F2] The smooth Maxwell branch asserts $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ pointwise for jointly $C^1$ fields with the additional derivatives continuous, and the weak branch asserts the same four pairings against $C_c^\infty(U)$ tests for locally integrable fields ([[post-em-vacuum-maxwell]]).

[F3] The weak solution predicate of the singular-source formulation is: for locally integrable $E,B$ and a source pair with volume part $(\rho_v,J_v)$ and singular part of point or stationary-sheet type, $E,B$ satisfy the weak Maxwell equations when the four distributional pairings $\langle\operatorname{div}E-\rho/\varepsilon_0,\psi\rangle$, $\langle\operatorname{div}B,\psi\rangle$, $\langle\operatorname{curl}E+\partial_tB,\psi\rangle$, $\langle\operatorname{curl}B-\mu_0J-c^{-2}\partial_tE,\psi\rangle$ vanish for every $\psi\in C_c^\infty(U)$; point sources with $C^1$ trajectory $z$ proper into $U$ have $\langle\rho_{\mathrm{pt}},\psi\rangle=q\int\psi(z(t),t)\,dt$ and $\langle J_{\mathrm{pt}},\psi\rangle=q\int z'(t)\psi(z(t),t)\,dt$ ([[def-em-weak-sources]](b),(e)).

[F4] Divergence and curl are the coordinate expressions of [[def-divergence-and-curl-of-a-c1-vector-field]] evaluated at fixed time, and $\partial_t$ is the partial derivative at fixed position ([[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] A real function on an interval with everywhere-vanishing derivative is constant ([[cor-mean-value-theorem]]), and for a differentiable function with integrable derivative on $[a,b]$, $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F6] Locally integrable functions are identified with their regular distributions, $\langle\partial_\mu T,\psi\rangle=-\langle T,\partial_\mu\psi\rangle$, and test functions are smooth with compact support in $U$ ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-distribution]], [[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]]).

[F7] Under Countable Choice every measurable function has a Borel representative modulo null sets, the Euclidean Borel sigma-algebra of $\mathbb R^4$ is the product of those of $\mathbb R^3$ and $\mathbb R$, and the corresponding product measure agrees with Lebesgue measure on Borel sets; Fubini applies to integrable functions on such products, and a continuous compactly supported one-variable integrand has equal Riemann and Lebesgue integrals ([[thm-completion-measurable-functions-have-base-measurable-representatives]], [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F8] The spatial point source $\delta_{x_0}$ pairs a compactly supported smooth test $\eta$ as $\eta\mapsto\eta(x_0)$ ([[def-dirac-delta-and-its-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 Clause (c): in the static regime $\partial_tE=\partial_tB=0$; substituting into the two curl equations of the smooth branch of [F2] leaves $\operatorname{curl}E=0$ and $\operatorname{curl}B=\mu_0J$ at every point and every fixed time, while the two divergence equations are unchanged, giving exactly the displayed four equations; the operators are those of [F4] applied to the fixed-time fields of [F1]. In the pure electrostatic regime $B=0$ and $J=0$, so $\operatorname{div}B=0$ and $\operatorname{curl}B=0$ are identities and the reduction is the pair $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{curl}E=0$. [given, F1, F2, F4]

2.1 Clause (d): in the static regime each of $E,B,\rho,J$ has vanishing partial $t$-derivative at every point of $\Omega\times I$. For fixed $y$ and two times $t_1<t_2$ in $I$, the mean value theorem [F5] applied to $t\mapsto F(y,t)$ on $[t_1,t_2]$ gives $F(y,t_2)-F(y,t_1)=0$, so $F(y,t)$ depends only on $y$; writing $F_0(y):=F(y,t_0)$ for a fixed $t_0\in I$ we get $F=F_0\circ\pi$ with $\pi(y,t):=y$, and the four reduced equations of clause (c), which are pointwise conditions at each fixed time [F4], are therefore equations between the spatial maps $E_0,B_0,\rho_0,J_0$. The same reading is available for the locally integrable time-independent objects of clause (e), for which time independence is an explicit hypothesis rather than a consequence of differentiability. [step 1.1, F4, F5]

3.1 Clause (e), spatial pairings as time integrals: let the time-independent locally integrable data be read as spatial maps $E_0,B_0,\rho_0,J_0$ by the fixed-time reading of step 2.1, and fix $\psi\in C_c^\infty(U)$. For a spatial operator expression $S$ that is linear in the data (for instance $S=\operatorname{div}E_0-\rho_0/\varepsilon_0$), choosing Borel representatives of the coefficients [F7] and moving every distributional spatial derivative onto the test gives the pairing identity $$\langle S_U,\psi\rangle=\int_I\langle S_\Omega,\psi(\cdot,t)\rangle_\Omega\,dt,$$ where $S_U$ denotes the distributional expression on $U$ evaluated with distributional derivatives on $U$ and $S_\Omega$ the same expression on $\Omega$ evaluated with distributional spatial derivatives; in the displayed instance both sides equal the same absolutely convergent iterated integrals, computed for $S_\Omega$ by moving the spatial derivative onto the test, $$-\int_I\int_\Omega E_0\cdot\nabla_y\psi\,d\lambda_3\,dt-\frac{1}{\varepsilon_0}\int_I\int_\Omega\rho_0\psi\,d\lambda_3\,dt,$$ products of locally integrable coefficients with derivatives of the compactly supported test being integrable by Fubini [F7], and for data that are additionally $C^1$ the inner pairing agrees with the classical integral $\int_\Omega(\operatorname{div}E_0-\rho_0/\varepsilon_0)\psi(\cdot,t)\,d\lambda_3$ ([F4]); each $t$-slice $\psi(\cdot,t)$ is smooth with compact support in $\Omega$ because the section at $t$ of the compact support of $\psi$ is compact and lies in $\Omega$ ([F6]). The same computation applies to $\operatorname{div}B$, $\operatorname{curl}E$ and $\operatorname{curl}B-\mu_0J$. [step 2.1, F4, F6, F7]

4.1 Clause (e), vanishing of the time derivatives: let $F$ be a time-independent locally integrable function on $U$ (one component of $E$ or $B$, or $\rho$). Choosing a Borel representative of $F$ [F7] and using the product structure and the fixed-time reading of step 3.1, $$\langle T_F,\partial_t\psi\rangle=\int_U F(y)\,\partial_t\psi(y,t)\,d\lambda_4=\int_\Omega F(y)\Bigl(\int_I\partial_t\psi(y,t)\,dt\Bigr)d\lambda_3(y)=0,$$ because for each $y$ the function $t\mapsto\psi(y,t)$ is smooth with compact support in $I$, so its integral of derivative vanishes by the fundamental theorem [F5] (the inner integral is a Lebesgue integral of a continuous compactly supported integrand, equal to its Riemann value [F7]); the iterated integral is absolutely convergent since $\psi$ has compact support and $F$ is locally integrable on the bounded region of the support. By [F6] this says $\partial_tT_F=0$ in $\mathcal D'(U)$, so the two time-dependent terms of the weak predicate [F3] vanish identically for time-independent fields. [step 3.1, F5, F6, F7]

5.1 Clause (e), the equivalence: if the four spatial equations hold in $\mathcal D'(\Omega)$, then for every $t\in I$ the test $\psi(\cdot,t)$ of step 3.1 gives $\langle S_\Omega,\psi(\cdot,t)\rangle_\Omega=0$, hence the integral of step 3.1 vanishes; together with the vanishing time-derivative pairings of step 4.1 this makes all four weak pairings of [F3] vanish, so the weak equations hold. Conversely, if the four weak pairings of [F3] vanish, choose $\eta\in C_c^\infty(\Omega)$, $\chi\in C_c^\infty(I)$ with $\int_I\chi=1$ and test with $\psi(y,t)=\eta(y)\chi(t)$, which lies in $C_c^\infty(U)$; by steps 3.1 and 4.1, $0=\int_I\chi(t)\langle S_\Omega,\eta\rangle_\Omega\,dt=\langle S_\Omega,\eta\rangle_\Omega$, so each spatial equation holds in $\mathcal D'(\Omega)$ since $\eta$ was arbitrary. This is the asserted if-and-only-if, and it uses no product of distributions: all pairings are against a single test function. [step 3.1, step 4.1, F3, F5, F6]

6.1 Clause (e), stationary point charge: take $I_0:=I$, the constant $C^1$ trajectory $z(t)\equiv x_0$ with $x_0\in\Omega$, and $q\in\mathbb R$. Its graph is $\{x_0\}\times I$, and the graph map is proper into $U=I\times\Omega$ because the preimage of a compact subset of $U$ is the corresponding compact closed subset of $I$; the source of [F3] is then $\langle\rho_{\mathrm{pt}},\psi\rangle=q\int_I\psi(x_0,t)\,dt$ and $\langle J_{\mathrm{pt}},\psi\rangle=q\int_Iz'(t)\psi(z(t),t)\,dt=0$. For each fixed time the spatial reading is the point source pairing a compactly supported smooth spatial test $\eta$ as $\eta\mapsto q\eta(x_0)$, which is exactly the spatial point source of [F8]; the time integral above is the pairing of $q\,\delta_{x_0}$ against the compactly supported function $t\mapsto\psi(x_0,t)$ under the identification of [F6]. [step 5.1, F3, F6, F8]

7.1 Clauses (a) and (b) are the definitions of the static and pure electrostatic regimes; clause (c) is step 1.1, clause (d) is step 2.1, clause (e) is steps 3.1-6.1, and clause (f) records that the conditions were imposed in the one frame, that no stability, support, boost or singular-source equation beyond the dictionary of (e), and no empirical claim, is asserted. The verification used only the cited smooth branch, the definitions of the primitives, and the measure/distribution interfaces; no equation of motion and no empirical premise entered. [step 1.1, step 2.1, step 5.1, step 6.1] ∎
