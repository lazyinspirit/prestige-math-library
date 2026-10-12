---
page: cm16-stability-perturbations-and-chaos
title: "Stability, perturbations and chaos"
status: draft
library: physics
items: [def-cm16-flow-equilibria-and-invariant-sets,
        def-cm16-stability-and-hyperbolicity-concepts,
        pthm-cm16-energy-stability-and-instability,
        pthm-cm16-variational-equation-and-linearization,
        def-cm16-finite-time-growth-rates,
        def-cm16-stroboscopic-and-poincare-maps,
        def-cm16-chaos-list-for-model-maps,
        pthm-cm16-hyperbolic-linearization,
        pthm-cm16-two-rotor-kam,
        pthm-cm16-separatrix-splitting-and-horseshoe,
        pthm-cm16-recurrence-for-finite-volume-models,
        rem-cm16-scope-of-stability-and-chaos]
examples: []
requires: ["cm-math-chaos","cm-math-kam","cm09-coupled-oscillations-and-approximation","cm14-hamilton-jacobi-and-integrability"]
---

This page develops stability, perturbation growth and chaos for the declared
force models of the framework. The vocabulary comes first.
[[def-cm16-flow-equilibria-and-invariant-sets]] fixes the model class of the
page (open configuration domain, fixed positive masses, a continuous
state-locally-Lipschitz force map, possibly autonomous or $P$-periodic), its
associated first-order field, local flow and maximal solutions, equilibrium
states, periodic orbits and limit cycles, invariant and forward-invariant
sets, orbital distance, and homoclinic and heteroclinic orbits as limit
relations of motions. [[def-cm16-stability-and-hyperbolicity-concepts]]
attaches the stability predicates with their exact quantifiers: Lyapunov
stability and asymptotic stability over maximal solutions, orbital stability
of a compact invariant set, linear stability of an equilibrium through the
bounded solutions of the variational equation, linear stability and
hyperbolicity of a fixed point of a map, and a hyperbolicity criterion for
equilibria. The item records explicitly that these notions are distinct, that
the eigenvalues are chart-dependent unless coordinates are scaled, and that a
hyperbolic equilibrium is never linearly stable. For a $P$-periodic model,
[[def-cm16-stroboscopic-and-poincare-maps]] defines the stroboscopic map at
the period, with its recursively defined forward domain and no completeness
claim, and the local Poincare return map of a transversal section, whose
existence, $C^1$ regularity and local invertibility are supplied by the
return mapping theorem, with a first-return interpretation under the explicit
no-earlier-hit persistence condition; fixed points of these maps correspond to
periodic motions.

The first theorems transfer the page's mathematical suppliers to the model.
[[pthm-cm16-energy-stability-and-instability]] proves that a strict local
minimum of the potential gives a Lyapunov stable equilibrium; that a negative
Hessian eigenvalue produces an unbounded solution of the linearised
variational equation (linear instability, with no nonlinear conclusion); that
a negative definite Hessian (a strict local maximum) makes the equilibrium
unstable through the hyperbolic instability theorem; and that exact energy
conservation prevents asymptotic stability whenever states of different energy
accumulate at the equilibrium, so a strict minimum is stable but not
attracting. Degenerate Hessians and mixed saddles are explicitly left open.
[[pthm-cm16-variational-equation-and-linearization]] establishes the
variational equation along a motion, the exponential Lipschitz dependence on
initial states, the second-order constant-metric form
$M\eta''=-D^2U(q(t))\eta$, and the conditional finite-time bound comparing the
nonlinear motion with the solution of the linearised equation under declared
quantitative remainder and growth bounds. [[def-cm16-finite-time-growth-rates]]
defines the finite-time tangent growth rate and, for a forward-unbounded
lifetime when the finite limit exists, the Lyapunov exponent, with the dimension $\tau^{-1}$, the chart dependence and
the explicit statement that a positive rate is neither chaos nor instability
of a trajectory. [[pthm-cm16-hyperbolic-linearization]] gives the exponential
dichotomy of a hyperbolic equilibrium with its stable and unstable subspaces
and rates, local exponential asymptotic stability in the stable case, and
nonlinear instability in the saddle case, with no conclusion in the centre
case.

The chaos material is built on the two local mathematical supplier pages
[[cm-math-chaos]] and [[cm-math-kam]].
[[def-cm16-chaos-list-for-model-maps]] fixes one precise chaos list for the
model's maps: continuity, topological mixing, dense periodic points and
sensitive dependence, with the explicit warning that the list is topological,
that its clauses are independent and that numerical portraits do not
establish them. [[pthm-cm16-separatrix-splitting-and-horseshoe]] then defines
the smooth $P$-periodic one-coordinate pulsed-oscillator model with its
polynomial pulse forcing, verifies that it is a force model of the framework,
and transfers the supplier's conjugacy: for every pulse width below a
threshold depending only on the dimensionless amplitude $a\ge100$ and the
bump, the physical stroboscopic map has a compact invariant set on which it
is conjugate to the two-sign shift, chaotic in the stated sense, with two
hyperbolic fixed points and transverse homoclinic points, and all coded
states satisfy the explicit bounds $\lvert Q\rvert\le R\ell_0$ and
$\lvert\Pi\rvert\le m\ell_0\omega_0R$ with $R=\sqrt a+3$. The countable and
dependent choice assumptions are inherited from the supplier and declared.
[[pthm-cm16-two-rotor-kam]] treats the complementary nearly integrable
two-rotor model with the adopted potential $E_0\varepsilon\cos\theta_1
\cos\theta_2$: for every Diophantine exponent $\tau>1$ and a constant $c>0$
determined by the declared dimensionless data, every $0<\alpha<c$ and
$0<\varepsilon\le c\alpha^2$ give a positive-measure set of Diophantine
frequencies whose tori persist as invariant Lagrangian tori carrying
quasi-periodic motion with physical angular frequencies $\omega_0\nu_i$
($\omega_0=\sqrt{E_0/\mathcal I}$); the complement of that set, resonant gaps,
chaotic diffusion and all empirical realizations are explicitly out of scope.
Finally [[pthm-cm16-recurrence-for-finite-volume-models]], under the
countable choice assumption inherited from the phase-volume theorem, proves
Poincare recurrence at unit time steps for a bounded flow-invariant Borel set
of finite phase volume in an autonomous potential presentation, with the
almost-everywhere qualification and no return-time or individual-state claim.

Worked checks on declared data, and the counterexamples that delimit the
statements, are collected on
[[cm16-stability-perturbations-and-chaos-examples]]. Throughout the page all
constants (masses, stiffnesses, energy scales, pulse parameters, the
thresholds $c$ and $\delta_0$) are model data; no measurement, uncertainty
budget or empirical comparison is asserted, and the closing remark
[[rem-cm16-scope-of-stability-and-chaos]] records the model-deduction status,
the choice conventions and the limits of finite-time and numerical evidence.
