---
page: "scalar-conservation-laws-and-entropy-solutions"
title: "Scalar Conservation Laws and Entropy Solutions"
status: draft
items: ["def-scalar-conservation-law-and-flux", "def-distributional-weak-solution-of-a-scalar-conservation-law", "prop-classical-solutions-satisfy-the-weak-conservation-law", "prop-characteristics-for-a-one-dimensional-scalar-conservation-law", "def-piecewise-smooth-shock-and-one-sided-traces", "thm-rankine-hugoniot-jump-condition", "prop-distributional-weak-solutions-are-not-unique", "def-convex-entropy-entropy-flux-pair", "prop-viscous-entropy-dissipation-identity", "def-kruzhkov-entropy-solution", "thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution", "lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds", "lem-viscous-scalar-laws-contract-spatial-translates-in-lone", "lem-kato-inequality-for-two-entropy-solutions", "thm-kruzhkov-local-l1-contraction", "cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions", "cor-finite-propagation-for-scalar-conservation-laws", "lem-vanishing-viscosity-families-are-locally-precompact-in-lone", "cor-global-lone-contraction-from-the-local-kruzhkov-estimate", "thm-existence-of-bounded-kruzhkov-entropy-solutions", "lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality", "def-self-similar-riemann-problem", "thm-riemann-solver-for-strictly-convex-scalar-flux", "thm-oleinik-one-sided-entropy-condition", "cor-lax-shock-inequalities-for-convex-scalar-laws", "thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension", "cor-mass-conservation-for-integrable-entropy-solutions", "lem-additive-constant-in-an-entropy-flux-does-not-change-the-entropy-inequality", "cor-linfinity-maximum-bound-for-scalar-entropy-solutions", "thm-entropy-solution-semigroup-on-lone", "thm-entropy-solution-orbits-are-strongly-continuous-in-lone"]
examples: []
---

This page develops the theory of scalar conservation laws $u_t+\operatorname{div}_x f(u)=0$
from the definitions through existence, uniqueness and wave structure,
with the vanishing-viscosity method as its backbone. It fixes the flux and the
distributional weak formulation, verifies that classical solutions are weak
solutions, derives the constancy of $u$ along characteristics together with the
gradient-catastrophe formula for one-dimensional solutions, and sets up
piecewise $C^1$ shocks with one-sided traces and the space--time
Rankine--Hugoniot condition. Non-uniqueness of the weak formulation is
demonstrated before any selection principle is introduced. Convex
entropy--entropy-flux pairs and the viscous entropy-dissipation identity lead
to the Kruzhkov notion: bounded solutions satisfying the entropy inequalities
for $\eta_k(s)=|s-k|$, with the strong local $L^1$ initial trace.

The constructive half of the page proves the global classical solvability of
the viscous Cauchy problem with smooth data, its uniform $L^\infty$, mass and
energy bounds, and the uniform contraction of spatial translates; the
doubling-variables (Kato) inequality for two entropy solutions yields the
local $L^1$ contraction, from which uniqueness, comparison, order preservation
and finite propagation follow. Uniform bounds and the translate and time
moduli give local precompactness of vanishing-viscosity families, the global
$L^1$ contraction, and finally the existence of a bounded Kruzhkov entropy
solution for $L^1\cap L^\infty$ data by passing the weak equation and the
viscous entropy balance to the limit. The structure theory then characterises
admissible jumps by the flux-chord inequality, solves the Riemann problem for
strictly convex fluxes with its shock and centred-rarefaction profiles, proves
Oleinik's one-sided estimate $\partial_xu\le(\kappa t)^{-1}$ as an equivalent
entropy condition under uniform convexity on the state range, derives the Lax
shock inequalities, and establishes the one-dimensional Hamilton--Jacobi
correspondence between entropy solutions and primitives of viscosity
solutions.

The closing items record quantitative consequences: mass conservation for
compactly supported integrable data, invariance of the entropy inequality
under additive constants in the entropy flux, the $L^\infty$ maximum bound,
the entropy solution semigroup on $L^1\cap L^\infty$ with its extension to
$L^1$ for globally Lipschitz flux with $f(0)=0$, and strong $L^1$ continuity
of the orbits. Countable Choice and Dependent Choice are declared where the analytic interfaces require them, including inheritance by consumers. The Hamilton--Jacobi correspondence is proved through viscous primitives and localized Hopf--Lax formulas; no viscosity/entropy equivalence is silently imported.
