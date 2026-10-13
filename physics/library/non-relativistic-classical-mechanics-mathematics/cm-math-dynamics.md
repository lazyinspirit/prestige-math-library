---
page: cm-math-dynamics
title: Cm Math Dynamics
status: published
items:
  - def-cm-local-flow-of-an-autonomous-system
  - lem-cm-local-flow-composition-law
  - lem-cm-continuous-dependence-on-initial-data
  - thm-cm-smooth-dependence-and-the-variational-equation
  - cor-cm-flow-domain-open-and-flow-is-c1
  - prop-cm-first-return-map-is-a-local-c1-diffeomorphism
  - def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent
  - def-cm-bilateral-shift-space-and-cylinders
  - lem-cm-bilateral-shift-metric-and-sequential-compactness
  - def-cm-topologically-mixing-dense-periodic-and-sensitive-maps
  - thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive
  - rem-cm-recurrence-scope-for-mechanical-systems
  - thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism
  - thm-cm-exponential-stability-by-a-lyapunov-quadratic-form
  - thm-cm-instability-of-a-hyperbolic-saddle
  - def-cm-mechanical-vector-field-and-energy-in-a-chart
  - lem-cm-energy-conservation-for-the-mechanical-system
  - lem-cm-positive-definite-matrix-square-roots
  - lem-cm-strict-minimum-has-positive-semidefinite-hessian
  - thm-cm-quadratic-mode-decomposition
  - thm-cm-energy-stability-of-a-strict-minimum
  - prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium
  - rem-cm-scope-of-energy-stability-and-quadratic-modes
examples: []
requires:
  - cm-math-balances
  - cm-math-geometry
  - mixed-partials-taylor-and-extrema
  - modules-over-a-pid-and-canonical-forms
  - the-complex-exponential-and-eulers-formula
  - the-spectral-theorem-and-singular-value-decomposition
  - complexification-realification-and-real-structures
  - diagonalisation-and-the-minimal-polynomial
  - continuity-ivt-evt-and-uniform-continuity
  - euclidean-ordinary-differential-equations-with-smooth-dependence
  - finite-dimensional-normed-spaces-and-riesz-lemma
  - hamiltonian-mechanics-and-completely-integrable-systems
  - improper-integrals
  - inverse-and-implicit-function-theorems
  - limits-of-real-functions
  - measure-preserving-transformations-and-poincare-recurrence
  - monoids-groups-and-subgroups
  - norming-and-separation-under-hahn-banach
  - polynomial-rings-and-roots
  - sard-theorem-and-transversality
  - sequences-and-limits
  - series-and-nonnegative-tests
  - sine-cosine-and-the-definition-of-pi
  - strongly-continuous-semigroups-and-hille-yosida
  - suprema-and-infima
  - the-determinant-of-a-linear-operator
  - the-logarithm-and-general-powers
  - topological-spaces-and-continuity
---

The differential-dynamics layer of the non-relativistic classical mechanics
collection, all of it mathematics: the local flow of an autonomous system and
its dependence on initial data, the Poincaré return map, finite-time tangent
growth rates, the hyperbolic exponential dichotomy with its Lyapunov stability
and instability corollaries, the bilateral two-symbol shift as a chaotic map,
the scope of Poincaré recurrence, and the quadratic normal-mode and
energy-stability theory of a mechanical system in a chart. Every item on this
page carries `domain: mathematics` and depends only on mathematical suppliers;
nothing here asserts that any of these models describes nature, and the physical
reading of forces, masses, energies and recurrences remains with the consuming
classical-mechanics pages.

The flow layer begins with [[def-cm-local-flow-of-an-autonomous-system]], which
defines the maximal solutions of $x'=F(x)$, the flow domain $\Omega$ and the
partial maps $\Phi_t$. [[lem-cm-local-flow-composition-law]] proves the
identity, composition and inverse-time laws $\Phi_{s+t}=\Phi_s\circ\Phi_t$;
[[lem-cm-continuous-dependence-on-initial-data]] gives the Lipschitz and
Gronwall estimates on a Picard-Lindelöf cylinder;
[[thm-cm-smooth-dependence-and-the-variational-equation]] proves
$D_a\Phi_t(a)=Y_a(t)$ for the solution of the variational equation, and
[[cor-cm-flow-domain-open-and-flow-is-c1]] shows that $\Omega$ is open and
$\Phi$ of class $C^1$ on it, the tool used by
[[prop-cm-first-return-map-is-a-local-c1-diffeomorphism]] to construct a local
$C^1$ Poincaré return map with inverse given by the reversed crossing;
its first-return conclusion additionally assumes that the open reference
segment avoids the closure of the section, and proves persistence of that exclusion.
[[def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent]] records
$t^{-1}\log(\lVert D_x\Phi_t(x)u\rVert_2/\lVert u\rVert_2)$ and defines the
Lyapunov exponent only for a forward-unbounded lifetime and an existing finite limit.

The symbolic layer is [[def-cm-bilateral-shift-space-and-cylinders]],
[[lem-cm-bilateral-shift-metric-and-sequential-compactness]] and
[[thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive]], which together
exhibit the full two-symbol shift as a continuous self-map of a sequentially
compact metric space (compact under the Countable and Dependent Choice
assumptions of the companion lemma, clause 4) that is topologically mixing,
has dense periodic points and is sensitive
with constant $1$, in the sense fixed by
[[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]. This is a
topological example, not a smoothly realized mechanical flow.
[[rem-cm-recurrence-scope-for-mechanical-systems]] collects the published
recurrence statements with their hypotheses made explicit: finite invariant
measure, a nonzero time map defined for all iterates, and almost-everywhere
conclusions only.

The hyperbolicity layer is [[thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism]],
whose invariant splitting $V=E_s\oplus E_u$ with exponential estimates is
obtained from the coprime factorisation of the minimal polynomial and the
Jordan form, with no diagonalisability hypothesis. On it rest
[[thm-cm-exponential-stability-by-a-lyapunov-quadratic-form]], where a
linearisation with all eigenvalues in the open left half-plane gives a locally
exponentially stable equilibrium through the Lyapunov matrix
$\int_0^\infty e^{tA^{\mathsf T}}e^{tA}dt$, and
[[thm-cm-instability-of-a-hyperbolic-saddle]], where an eigenvalue with
positive real part gives nonlinear instability through an indefinite quadratic
form. Both are nonlinear conclusions with complete conditional proofs.

The mechanical and modal layer is [[def-cm-mechanical-vector-field-and-energy-in-a-chart]]
(the field $G$, its Lagrangian and energy, with an arbitrary $C^2$ positive
definite kinetic metric) and [[lem-cm-energy-conservation-for-the-mechanical-system]]
(exact energy conservation along solutions). The modal theory is
[[lem-cm-positive-definite-matrix-square-roots]] and
[[thm-cm-quadratic-mode-decomposition]], which decouple
$Mq''+Kq=0$ into $z_i''+\lambda_iz_i=0$ with $\lambda_i\ge0$ for symmetric
non-negative $K$, including the free affine zero mode and the modal energies;
[[lem-cm-strict-minimum-has-positive-semidefinite-hessian]] and
[[thm-cm-energy-stability-of-a-strict-minimum]] give Lyapunov stability at a
strict minimum of the potential, and
[[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]] computes
the linearised system $M(q_0)\xi''+D^2U(q_0)\xi=0$.
[[rem-cm-scope-of-energy-stability-and-quadratic-modes]] separates the exact
quadratic model from the linearisation approximation.

The companion page [[cm-math-dynamics-examples]] records worked examples: the
flow of a linear system, two coupled oscillators, the return map of the planar
oscillator, finite checks in the shift, computed dichotomy constants, and a
non-hyperbolic counterexample.
