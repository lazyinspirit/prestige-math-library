---
id: def-em-weak-sources
kind: definition
title: "Distributional Maxwell equations with point and stationary-sheet sources"
domain: physics
status: draft
origin: pipeline
dependency_level: 14
deps: [def-em-lab-geometry,
       def-em-si-conventions,
       def-em-sources,
       post-em-vacuum-maxwell,
       def-distribution,
       def-distributional-derivative,
       def-test-function-space-d-of-an-open-set,
       def-dirac-delta-and-its-derivatives,
       def-regular-distribution-from-a-locally-integrable-function,
       thm-locally-integrable-functions-embed-in-distributions,
       def-em-surface-distribution,
       def-surface-integral-on-a-compact-c-one-hypersurface,
       lem-em-point-current-continuity,
       def-countable-choice]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  post-em-vacuum-maxwell: formulation-prerequisite
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-em-surface-distribution: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-em-point-current-continuity: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The distributional source model and the weak solution predicate of the vacuum Maxwell equations in one named inertial frame: point sources along a C1 trajectory (with the finite-endpoint variant), stationary surface-charge and tangential surface-current sheets, locally integrable volume sources, locally integrable field pairs as the general weak class, and the optional one-sided trace branches used by interface results. The definition states what it means for a field-source tuple to satisfy the four distributional identities; it asserts no existence of solutions, no conservation law and no adoption of any field equation for singular sources."
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 7.3.3 printed pp. 326-328 (Maxwell's equations, with the remark that the integral form accommodates point, line and surface charges more naturally than the differential form) and Section 7.3.6 printed pp. 331-333 (surface charge and surface current at a boundary); read in the stamped scanned full text."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 28 printed pp. 69-70 (point charges represented by delta-functions and the four-current), Section 29 printed pp. 71-72 (continuity in integral and differential form) and Section 30 printed pp. 73-75 (the second pair of Maxwell's equations); read in the stamped full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 1.1.1 printed p. 4 (local charge continuity) and Section 1.2.1 printed p. 6 (the Maxwell equations). The stationary-sheet dictionary is supported by the Chew and Griffiths references, not by Tong's Faraday section."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Section 1.2 printed p. 7 (integral Maxwell equations), Sections 2.1-2.2 printed pp. 17-26 (divergence and Stokes identities and differential forms), and Section 4.3 printed pp. 43-48 (stationary charge-sheet and current-sheet delta matching, including the regular displacement-current qualification)."
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, the convention of
the surface-measure interface inherited from [[def-em-surface-distribution]]
([[def-countable-choice]]). Let $U\cong I\times\Omega$ be the laboratory
region of [[def-em-lab-geometry]] with the units and constants of
[[def-em-si-conventions]], and let $\mathcal D'(U)$ be the space of
distributions on $U$ ([[def-distribution]],
[[def-test-function-space-d-of-an-open-set]]); recall that the pairing
$\langle T,\psi\rangle$ is bilinear with no conjugation and that the
distributional partial derivatives are
$\langle\partial_\mu T,\psi\rangle=-\langle T,\partial_\mu\psi\rangle$
([[def-distributional-derivative]]).

(a) [Fields as distributions] Locally integrable fields and source densities on
$U$ are identified with their regular distributions
([[def-regular-distribution-from-a-locally-integrable-function]],
[[thm-locally-integrable-functions-embed-in-distributions]]).

(b) [Point sources] Let $I_0\subseteq\mathbb R$ be a nonempty open interval,
let $z:I_0\to\mathbb R^3$ be a $C^1$ trajectory whose graph map
$\gamma(t)=(z(t),t)$ is proper into the open set $U$, and let $q\in\mathbb R$
(coulombs). By [[lem-em-point-current-continuity]],

$$\langle\rho_{\mathrm{pt}},\psi\rangle:=q\int_{I_0}\psi(z(t),t)\,dt,\qquad \langle J_{\mathrm{pt}},\psi\rangle:=q\int_{I_0}z'(t)\,\psi(z(t),t)\,dt$$

define distributions on $U$ with
$\partial_t\rho_{\mathrm{pt}}+\operatorname{div}J_{\mathrm{pt}}=0$. If instead
$I_0=(a,b)$ has finite endpoints, $z$ extends continuously to $[a,b]$, the
absolute improper integral $\int_a^b|z'(t)|\,dt$ is finite and both endpoint
events lie in $U$, the same formulas define distributions with

$$\partial_t\rho_{\mathrm{pt}}+\operatorname{div}J_{\mathrm{pt}}=q\,\delta_{\gamma(a)}-q\,\delta_{\gamma(b)}$$

([[def-dirac-delta-and-its-derivatives]]); a finite-history point source
therefore contributes an endpoint term unless that term is included
explicitly, and the pairings above exclude it only by the stated properness or
endpoint hypotheses.

(c) [Stationary-sheet sources] Let $S\subset\Omega$ be a fixed compact embedded
$C^2$ hypersurface with a chosen unit normal $n$ pointing from the side
$\Omega_-$ to the side $\Omega_+$ ([[def-em-surface-distribution]],
[[def-surface-integral-on-a-compact-c-one-hypersurface]]), and let
$\sigma:S\times I\to\mathbb R$ and $K:S\times I\to\mathbb R^3$ be continuous
with $K(x,t)\cdot n(x)=0$ for all $(x,t)$; $\sigma$ carries C m$^{-2}$ and $K$ carries A m$^{-1}$ (a tangential surface current
density; the sheet is stationary). Then

$$\langle\rho_S,\psi\rangle:=\int_I\int_S\sigma(x,t)\psi(x,t)\,dS(x)\,dt,\qquad \langle J_S,\psi\rangle:=\int_I\int_SK(x,t)\psi(x,t)\,dS(x)\,dt$$

define distributions on $U$: for $\psi$ with compact support the inner
integrals are continuous in $t$ on a compact parameter interval and the
functionals are bounded by
$(\sup|\sigma\psi|)\,\mathrm{area}(S)\,\mathrm{length}$ of the time projection
of the support, and likewise in the vector case. A normal sheet current (one
with $K\cdot n\ne0$), a line current and a moving sheet are not source types of
this definition.

(d) [Unrestricted weak fields and optional interface branches] The general
field class for the solution predicate (e) consists of all locally integrable
pairs $(E,B)$ on $U$, also when the source has a stationary-sheet part. No
classical one-sided trace or off-sheet $C^1$ regularity is required to define
those four distributional pairings. Additional trace hypotheses are optional
hypotheses of interface and jump results, not admission requirements of the
general weak model.

For a pointwise classical jump branch, one may additionally assume that $E,B$
are $C^1$ off $S\times I$ and, around every $(x_0,t_0)\in S\times I$, each side
is the restriction of a $C^1$ function on an open spacetime neighbourhood of
the corresponding closed side of a smaller stationary graph cylinder. These
joint one-sided extensions make the field traces and first spatial and
temporal derivatives continuous up to that side, locally uniformly on compact
cylinders.

For the broader weak-trace branch, retain spacetime $C^1$ regularity on
$(\Omega\setminus S)\times I$ and assume the original one-sided spatial
$C^1$ extensions at each time, with the explicit additional
conditions that the piecewise first spatial and temporal derivatives are in
$L^1_{\mathrm{loc}}(U)$ and the field traces are measurable and locally
integrable on $S\times I$ for $dS\,dt$. This branch supports sheet-distribution
and almost-everywhere jump identities; spatial continuity at each time gives
pointwise spatial identities for almost every time, and joint continuity of
the jump densities gives the further all-time upgrade. Separate spatial $C^1$
traces at each time alone do not imply that joint regularity or upgrade.
Whenever such traces exist, $[F]:=F_+-F_-$ denotes their jump in the chosen
normal convention.

(e) [Weak Maxwell equations with a distributional source pair] Let $E,B$ be a
field pair of class (d), let $\rho=\rho_v+\rho_s$ and $J=J_v+J_s$ be source
distributions on $U$ whose volume parts $\rho_v,J_v$ are locally integrable
volume densities with the charge and current quantity types of
[[def-em-sources]] (the weak predicate requires this stated
$L^1_{\mathrm{loc}}$ regularity, not the classical continuous-source
regularity) and whose singular parts $(\rho_s,J_s)$ are point sources as in (b)
or stationary-sheet sources as in (c), and let
$\varepsilon_0=(\mu_0c^2)^{-1}$ with the constants of
[[def-em-si-conventions]]. Say that $E,B$ satisfy the weak Maxwell equations
with the source pair $(\rho,J)$ when, for every
$\psi\in C_c^\infty(U)$, the four pairings

$$\langle\operatorname{div}E-\rho/\varepsilon_0,\psi\rangle,\quad \langle\operatorname{div}B,\psi\rangle,\quad \langle\operatorname{curl}E+\partial_tB,\psi\rangle,\quad \langle\operatorname{curl}B-\mu_0J-c^{-2}\partial_tE,\psi\rangle$$

all vanish, all derivatives being distributional derivatives of the regular
distributions of the fields and the source pairings being those of (b) and (c).
This clause defines a solution predicate. When the singular parts vanish, its
four identities are the same as the locally integrable weak branch of
[[post-em-vacuum-maxwell]]. That earlier postulate explicitly excludes point
and sheet distributions and does not imply their physical adoption here;
adoption for the declared singular-source models is made separately, after
this definition. No physical field equation is deduced merely from defining
this predicate.

(f) [Scope] No product of two distributions is formed anywhere: the fields
occur only through their distributional derivatives paired with a test
function, and the source densities $\sigma,K$ occur only inside the ordinary
surface and time integrals of (b) and (c); products such as $\rho_sE$ or
$J_s\times B$ are not defined by this item. The definition asserts no existence
theorem for fields with singular sources, no conservation law (continuity for
these sources is proved separately where used) and no regularisation. Sources
that are not locally integrable and are not point or stationary-sheet sources,
moving sheets, line currents, and arbitrary products of distributions are
outside the definition.

## Source notes

The distributional treatment of point charges and surface sources follows the
standard classical presentations cited in the frontmatter; the pairings are
defined with the library's own distribution and surface-measure conventions,
and the continuity statements quoted in (b) are the conclusions of
[[lem-em-point-current-continuity]], consumed here as the exact interface of
the point-source pairings.
