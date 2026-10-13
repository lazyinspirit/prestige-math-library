---
id: pthm-em-material-stationary-jumps
kind: physics-theorem
title: "Stationary macroscopic interface jump conditions for D, B, E and H"
status: published
origin: pipeline
domain: physics
dependency_level: 16
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-cross-product-in-r3, def-distribution, def-distributional-derivative, def-em-fields, def-em-lab-geometry, def-em-polarization-magnetization, def-em-si-conventions, def-em-sources, def-em-surface-distribution, def-em-weak-sources, def-euclidean-inner-product, def-regular-distribution-from-a-locally-integrable-function, def-test-function-space-d-of-an-open-set, lem-em-interface-derivatives, pthm-em-macroscopic-maxwell, thm-locally-integrable-functions-embed-in-distributions, def-surface-integral-on-a-compact-c-one-hypersurface, lem-surface-integral-is-independent-of-c-one-boundary-charts, prop-the-image-of-a-lower-dimensional-c1-manifold-is-null, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, lem-test-function-cutoffs-and-euclidean-localization, lem-fundamental-lemma-of-the-calculus-of-variations, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-bounded-c-one-domain-boundary-charts-and-outward-normal, thm-integration-by-parts, cor-graph-of-a-measurable-function-is-lebesgue-null]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-surface-distribution: mathematical-premise
  def-em-weak-sources: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  lem-em-interface-derivatives: mathematical-premise
  pthm-em-macroscopic-maxwell: physical-result
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-surface-integral-is-independent-of-c-one-boundary-charts: mathematical-premise
  prop-the-image-of-a-lower-dimensional-c1-manifold-is-null: mathematical-premise
  lem-null-sets-in-rn-closed-under-subsets-and-countable-unions: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-fundamental-lemma-of-the-calculus-of-variations: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  cor-graph-of-a-measurable-function-is-lebesgue-null: mathematical-premise
physical_scope: "The stationary-interface jump conditions n.D=sigma_f, n.B=0, n x E=0, n x H=K_f (jumps of the one-sided traces) for macroscopic fields with a common stationary discontinuity and free sheet sources, concluded from the distributional macroscopic equations under the explicit joint one-sided C1 (or stated weak-trace) hypotheses, with AC_omega carried. A conditional field result: no existence, no constitutive law, no moving interface, no magnetic charge, no magnetic sheet and no dipolar sheet layer; no empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.3 printed pp. 185-186 (PDF pp. 193-194), equations (7.17)-(7.20): the normal-D and tangential-E matching conditions at a dielectric interface with free surface charge sigma, and the H and B conditions. Read in the retained 236-page full text."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 4.3.3 printed p. 178 and sec. 7.3.6 printed pp. 331-333, equations (7.59)-(7.64): the normal-D and tangential-E boundary conditions and the surface-current condition. Read in the stamped 596-page scan."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: "http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf"
      locator: "sec. 6.3 'Boundary conditions for E and D' printed p. 197, equations (6.13)-(6.15): the pillbox and loop derivation of the electric matching conditions at a dielectric interface. Read in the fetched complete 364-page course book."
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), the hypothesis under which [[lem-em-interface-derivatives]] and the surface conventions of [[def-em-weak-sources]] are stated, and let the laboratory region $U\cong I\times\Omega$ and its units be those of [[def-em-lab-geometry]] and [[def-em-si-conventions]].

Let $S\subset\Omega$ be a fixed compact embedded $C^2$ hypersurface with a chosen unit normal $n$ pointing from the side $\Omega_-$ to the side $\Omega_+$ ([[def-em-surface-distribution]]), let $\sigma_f:S\times I\to\mathbb R$ and $K_f:S\times I\to\mathbb R^3$ be continuous with $K_f(x,t)\cdot n(x)=0$ for all $(x,t)$ (a free surface charge density in $\mathrm C\,\mathrm m^{-2}$ and a tangential free surface current density in $\mathrm A\,\mathrm m^{-1}$, both stationary in $t$), and let $\rho_v:(\Omega\setminus S)\times I\to\mathbb R$ and $J_v:(\Omega\setminus S)\times I\to\mathbb R^3$ be continuous and locally integrable on $\Omega\times I$. Let $E,B,D,H:\Omega\times I\to\mathbb R^3$ be locally integrable on $\Omega\times I$ and of class $C^1$ on $(\Omega\setminus S)\times I$, with the joint one-sided $C^1$ extension property: around every $(x_0,t_0)\in S\times I$, each side of each field is the restriction of a $C^1$ function on an open spacetime neighbourhood of the corresponding closed side of a smaller stationary graph cylinder, so that the fields and their first space and time derivatives extend continuously to that side, locally uniformly on compact cylinders. Write $[F]=F_+-F_-$ for the jump of the one-sided traces.

**[Thin-interface hypothesis]** Suppose that $E,B,D,H$ satisfy the four macroscopic equations of [[pthm-em-macroscopic-maxwell]] in the distributional sense on $U$ with the source pair $\rho_f=\rho_v+\sigma_f\delta_S$, $J_f=J_v+K_f\delta_S$, where the stationary-sheet pairings are those of [[def-em-weak-sources]](c) and the equations are $\operatorname{div}D=\rho_f$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}H=J_f+\partial_tD$ as identities in the sense of [[def-distribution]], the fields being identified with their regular distributions ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]) and $\psi$ ranging over $C_c^\infty(U)$ ([[def-test-function-space-d-of-an-open-set]], [[def-distributional-derivative]]). This thin-interface solution hypothesis is a modelling assumption of the statement: it is the natural weakening of the smooth macroscopic equations to fields with a common stationary discontinuity, and it is not deduced from the smooth-region equations alone.

Then, pointwise on $S\times I$,

$$n\cdot[D]=\sigma_f,\qquad n\cdot[B]=0,\qquad n\times[E]=0,\qquad n\times[H]=K_f,$$

with the Euclidean inner and cross products of the one-sided traces ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]]); equivalently $\sigma_f=n\cdot[D]$ and $K_f=n\times[H]$ recover the free sheet densities from the field jumps.

**[Weak-trace branch]** If instead of the joint extension hypothesis the fields have the original one-sided spatial $C^1$ extensions at each time and, in addition, the piecewise first spatial and temporal derivatives are in $L^1_{\mathrm{loc}}(U)$ and the one-sided field traces are measurable and locally integrable on $S\times I$ with respect to $dS\,dt$, then the same four identities hold as identities of sheet distributions and for $dS\,dt$-almost every $(x,t)$; since the traces are spatially continuous at each fixed time, they hold for every $x\in S$ for almost every $t$, and at every $(x,t)$ whenever the jump densities are additionally jointly continuous. Merely having one-sided spatial $C^1$ traces separately at every time does not justify the last upgrade.

**[Scope]** In the joint one-sided spacetime $C^1$ extension branch, stationarity and the joint extensions make $\partial_tD$ and $\partial_tB$ locally bounded near $S$ and hence locally integrable, contributing no delta terms. In the weak-trace branch the explicitly assumed locally integrable temporal derivatives provide this conclusion instead. No magnetic charge and no magnetic surface current are present in the sources; no dipolar sheet layer (a concentrated dipole distribution in $P$ or $M$, which would make the fields non-integrable) is included. No existence theorem for fields with singular sources is asserted, no constitutive law is used, and no empirical claim is made.

## Facts & Assumptions

**Given:** The objects and hypotheses of the Statement, with $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the operators and constant conventions of the Statement; and the thin-interface hypothesis [A1]. The fields $E,B,D,H$ are identified with their regular distributions, and the source pair with the stationary-sheet pairings of [A1].

[A1] The thin-interface hypothesis: the four identities $\operatorname{div}D=\rho_v+\sigma_f\delta_S$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}H=J_v+K_f\delta_S+\partial_tD$ hold as distributions on $U$, with the source pair of the stationary-sheet pairings and the equation forms of [[pthm-em-macroscopic-maxwell]]. This solution hypothesis is assumed, not deduced.

[L1] For a two-sided compact embedded $C^2$ interface $S$ with unit normal $n$ from $\Omega_-$ to $\Omega_+$ and a field $F$ that is $C^1$ on $\Omega_-\cup\Omega_+$ with one-sided $C^1$ traces, $\operatorname{div}F=\{\operatorname{div}F\}+n\cdot[F]\delta_S$ and $\operatorname{curl}F=\{\operatorname{curl}F\}+n\times[F]\delta_S$, where $\{\cdot\}$ denotes the piecewise classical field and $[F]=F_+-F_-$ ([[lem-em-interface-derivatives]]).

[L2] The surface convention: $\delta_S(\psi)=\int_S\psi\,dS$ for $\psi\in\mathcal D(\Omega)$, with $dS$ the surface measure of the compact embedded hypersurface; a continuous density $a$ on $S$ defines $a\delta_S(\psi)=\int_S a\psi\,dS$, both functionals of finite order ([[def-em-surface-distribution]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[L3] The chart integral defines a finite Borel measure on the compact embedded $C^1$ hypersurface, independent of the finite regular charts; every regular chart density $J_X$ is continuous and strictly positive ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[L4] Locally integrable fields embed as regular distributions by $u_f(\psi)=\int_U f\psi$, and the embedding is injective modulo almost-everywhere equality under Countable Choice ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[L5] The image of a $C^1$ map from a lower-dimensional smooth manifold into a higher-dimensional one is a null subset ([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]), and a countable union of null sets is null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

[L6] For compact $K$ in an open set there are smooth compactly supported cutoffs equal to one near $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]); if $f_n\to f$ almost everywhere with $|f_n|\le g$ for a single integrable $g$, then $\int f_n\to\int f$ ([[thm-dominated-convergence]]); the coordinate hyperplane $\{x_3=0\}$ in $\mathbb R^4$ is Lebesgue-null as the graph of a measurable function ([[cor-graph-of-a-measurable-function-is-lebesgue-null]]).

[L7] If $g\in L^1_{\mathrm{loc}}(\Omega')$ on an open $\Omega'\subseteq\mathbb R^n$ satisfies $\int g\varphi=0$ for every test function $\varphi$, then $g=0$ almost everywhere ([[lem-fundamental-lemma-of-the-calculus-of-variations]]); locally a $C^1$ domain boundary is, after a rigid change of coordinates, the graph of a $C^1$ function, with the domain on one side ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[L8] For $C^1$ functions on a closed interval, one-dimensional integration by parts holds ([[thm-integration-by-parts]]); for $L^1$ functions on sigma-finite product spaces the iterated and multiple integrals agree ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** first test away from the interface to remove the locally integrable volume part, then extract the continuous coefficient with the fundamental lemma of the calculus of variations in surface charts.

1.1 The surface $S$ is Lebesgue-null in $\Omega$: by [L3] the finitely many regular charts $X_j:V_j\to S$ cover $S$, each image $X_j(V_j)$ is null in $\mathbb R^3$ by [L5] because $X_j$ is a $C^1$ map from the lower-dimensional open set $V_j\subseteq\mathbb R^2$, and a finite union of null sets is null by [L5]. Consequently, for $F\in\{B,D\}$ the distributional time derivative of the regular distribution of $F$ is the regular distribution of the piecewise classical time derivative: fix a test $\psi$ with support in a compact cylinder $\overline Q\times J\subseteq U$, so that $\langle\partial_tF,\psi\rangle=-\int_U F\partial_t\psi$; by [L8] applied after Fubini, this iterated integral equals $-\int_Q\int_JF(x,t)\partial_t\psi(x,t)\,dt\,dx$, and for every $x\in\Omega\setminus S$ the inner integrand is $C^1$ in $t$ with $\psi(x,\cdot)$ compactly supported in $J$, so [L8] gives $\int_JF(x,t)\partial_t\psi(x,t)\,dt=-\int_J\partial_tF(x,t)\psi(x,t)\,dt$; since $S$ is null, replacing the outer integral over $\Omega\setminus S$ by one over $\Omega$ changes nothing, so $\langle\partial_tF,\psi\rangle=\int_U\{\partial_tF\}\psi$ for every test $\psi$, where $\{\partial_tF\}$ is locally bounded by the joint one-sided $C^1$ extension hypothesis. In the weak-trace branch, the assumed $L^1_{\mathrm{loc}}$ temporal derivatives instead make the same compact-test products integrable, so the identical Fubini and line-integration argument applies. [L3, L5, L8]

1.2 By [L1], applied to $D$, $B$, $E$, $H$ (each is $C^1$ on $\Omega_-\cup\Omega_+$ with one-sided $C^1$ traces under the joint extension hypothesis), the four spatial identities $\operatorname{div}D=\{\operatorname{div}D\}+n\cdot[D]\delta_S$, $\operatorname{div}B=\{\operatorname{div}B\}+n\cdot[B]\delta_S$, $\operatorname{curl}E=\{\operatorname{curl}E\}+n\times[E]\delta_S$ and $\operatorname{curl}H=\{\operatorname{curl}H\}+n\times[H]\delta_S$ hold as distributions on $U$ under $\mathrm{AC}_\omega$, with the piecewise fields locally bounded near $S$. More explicitly, apply [L1] at each fixed time to $\psi(\cdot,t)$ and integrate its identity in $t$. Fubini is justified by the compact-test integrability of the fields, their piecewise spatial derivatives and their surface-time traces; in the weak-trace branch these are exactly the additional stated $L^1_{\mathrm{loc}}$ hypotheses, so the same transfer to spacetime distributions applies without a uniform bound. [L1, L8]

2.1 [Coefficient extraction] Let $g\in L^1_{\mathrm{loc}}(U)$ and let $a$ be measurable and locally integrable on $S\times I$ for $dS\,dt$, with $u_g+a\delta_S=0$. Every smooth test supported away from $S\times I$ has zero sheet pairing; the fundamental lemma [L7] applied on that open complement therefore gives $g=0$ almost everywhere there. Since $S$ is null by step 1.1, Fubini [L8] makes $S\times I$ null locally in spacetime, so $g=0$ almost everywhere on $U$. Thus $\int_{S\times I}a\psi\,dS\,dt=0$ for every ambient smooth compact test $\psi$. In a sufficiently small rigid graph chart write $X(y)=(y,h(y))$, with a product box $V\times(z_-,z_+)\times J$ contained in the ambient chart/time domain. Shrink $V$ and the height interval so the graph over $V$ stays in a closed subinterval inside $(z_-,z_+)$. For any $\eta\in C_c^\infty(V\times J)$ choose $\beta\in C_c^\infty((z_-,z_+))$ equal to $1$ on that graph-height interval by [L6], and take the ambient smooth test $\psi(y,z,t)=\eta(y,t)\beta(z)$, transported by the rigid motion and extended by zero. This test uses no composition with the merely $C^2$ graph function; its restriction to $S$ is $\eta$. The chart formula [L3] gives $\int_{V\times J}(a\circ X)(y,t)J_X(y)\eta(y,t)\,dy\,dt=0$. By [L7], $(a\circ X)J_X=0$ almost everywhere; positivity and continuity of $J_X$ give $a=0$ surface-time almost everywhere. Such small boxes cover every chart, so the conclusion holds on $S\times I$. In the joint branch $a\circ X$ is continuous; if it were nonzero at one point it would stay bounded away from zero on a nonempty parameter-time box of positive Lebesgue measure, contradicting the almost-everywhere conclusion. Thus $a=0$ pointwise in that branch. [step 1.1, L2, L3, L6, L7, L8]


2.2 Substituting the spatial identities of step 1.2 and the temporal identity of step 1.1 into the assumed identities [A1] gives four distributional identities of the form $u_g+a\delta_S=0$ with locally integrable volume parts: $u_{\{\operatorname{div}D\}-\rho_v}+(n\cdot[D]-\sigma_f)\delta_S=0$, $u_{\{\operatorname{div}B\}}+n\cdot[B]\delta_S=0$, $u_{\{\operatorname{curl}E\}+\{\partial_tB\}}+n\times[E]\delta_S=0$ and $u_{\{\operatorname{curl}H\}-J_v-\{\partial_tD\}}+(n\times[H]-K_f)\delta_S=0$; the sums are locally integrable because the piecewise fields and $J_v,\rho_v$ are locally integrable and the piecewise derivatives are locally bounded near $S$ (joint branch) or assumed locally integrable (weak-trace branch), and the sheet coefficients are the stated one-sided jump densities, continuous in the joint branch. [A1, step 1.1, step 1.2, L2, L4]

3.1 Apply step 2.1 to each of the four identities of step 2.2: the four coefficients $n\cdot[D]-\sigma_f$, $n\cdot[B]$, $n\times[E]$ and $n\times[H]-K_f$ vanish $dS\,dt$-almost everywhere, and in the joint branch they are continuous on $S\times I$ (one-sided traces of locally uniformly continuous extensions), hence vanish pointwise on $S\times I$; this proves $n\cdot[D]=\sigma_f$, $n\cdot[B]=0$, $n\times[E]=0$ and $n\times[H]=K_f$ pointwise, equivalently $\sigma_f=n\cdot[D]$ and $K_f=n\times[H]$, and the inner and cross products are those of the one-sided traces written in the frame basis of [[def-em-lab-geometry]]. In the weak-trace branch the four coefficients vanish $dS\,dt$-almost everywhere; since the traces are spatially continuous at each fixed time, vanishing on a set of full $dS$-measure for almost every $t$ upgrades to every $x\in S$ for almost every $t$, and if the jump densities are additionally jointly continuous, to every $(x,t)\in S\times I$; the four identities hold as identities of sheet distributions in both branches, and all statements are conditional on the assumed distributional equations [A1] with $\mathrm{AC}_\omega$ carried from step 1.2. [step 1.2, step 2.1, step 2.2, A1, L1, L2, L5] ∎
