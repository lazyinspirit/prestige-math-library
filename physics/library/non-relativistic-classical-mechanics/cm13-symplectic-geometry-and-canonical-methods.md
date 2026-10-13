---
page: cm13-symplectic-geometry-and-canonical-methods
title: "Symplectic geometry and canonical methods"
status: draft
library: physics
items:
  - def-cm13-two-form
  - pthm-cm13-two-form-is-symplectic
  - def-cm13-canonical-form
  - def-cm13-hamiltonian-field
  - pthm-cm13-hamiltonian-field-integrates-the-model-equations
  - def-cm13-poisson
  - pthm-cm13-bracket-identities
  - pthm-cm13-observable-evolution
  - def-cm13-canonical-map
  - pthm-cm13-flow-preservation
  - pthm-cm13-dynamics-transport-under-canonical-maps
  - lem-cm13-poincare-cartan-annihilation-characterization
  - pthm-cm13-liouville
  - pthm-cm13-generating-functions
  - rem-cm13-locality-topology
examples: []
requires:
  - cm-math-numerical
  - cm12-legendre-transformation-and-hamiltonian-mechanics
  - cm07-stationary-action-and-lagrangian-dynamics
  - cm03-momentum-work-and-energy-balances
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
  - cm-math-canonical
---

This page is the symplectic companion of
[[cm12-legendre-transformation-and-hamiltonian-mechanics]]. It adds no
physical assumption to the force branch: for a declared potential
presentation with mechanical Lagrangian $L=K-U$,
[[def-cm13-two-form]] defines the canonical one-form $\lambda=p\cdot dx$ on
the Cartesian momentum phase chart $Q\times\mathbb R^{3N}$, the two-form
$\omega=-d\lambda=\sum_{a}dx^{a}\wedge dp_{a}$, and the pullbacks of both
forms along the presentation's own generalized-coordinate momentum charts
$(q,P)\mapsto(X(q),\mathsf M\,DX(q)G(q)^{-1}P)$.
[[pthm-cm13-two-form-is-symplectic]] proves that the Cartesian phase domain is
a symplectic manifold and that each generalized-coordinate momentum domain,
including lower-dimensional immersions, carries the pulled-back standard form
$\sum_{a}dq^{a}\wedge dP_{a}$. Transitions between genuine overlapping
full-dimensional charts ($r=3N$) preserve the two-form; the difference of
their one-form data is closed. [[def-cm13-canonical-form]] fixes the canonical
coordinates of the presentation, in which the two-form has the constant
coefficient form $\sum_{a=1}^{m}d\theta^{a}\wedge d\theta^{m+a}$, where $m$ is the
chart's half-dimension; the mathematical
phase-domain and symplectic-manifold vocabulary is that of
[[cm-math-canonical]].

[[def-cm13-hamiltonian-field]] defines the Hamiltonian field of a phase
function as the unique field $X_{f}$ with $\iota_{X_{f}}\omega=df$ and
computes $X_{H}=(H_{p},-H_{x})$ for the branch Hamiltonian
$H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$ and its generalized-coordinate
analogue. [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]]
identifies, on the potential branch, the Cartesian integral curves of
$X_{H_{t}}$ with the momentum-phase curves of the model's motions. For any
of the declared generalized-coordinate maps, the substituted Lagrange
equations are equivalent to the corresponding Hamilton system with residual
generalized force; when $d\equiv0$, they are equivalent to the integral-curve
equation of $X_{\widetilde H_{t}}$. For full-dimensional charts these curves
reconstruct model motions by
[[pthm-cm07-coordinate-covariance-of-the-equations]]. For a parametrization
of a scleronomic regular holonomic-constraint locus, reconstruction as ideal
constrained motions requires that constraint datum and the ideal-reaction
law, as in [[pthm-cm12-hamilton-equivalence]] clause 4; an arbitrary
lower-dimensional immersion alone does not supply those hypotheses.
With residual forces, the Cartesian model equation is equivalent to the
forced momentum-phase field, which is Hamiltonian exactly when the
residual force is velocity-independent and satisfies
$d(t,x,v)=-\nabla_{x}V(t,x)$ for a $C^{2}$ potential
$V:I_{0}\times Q\to\mathbb R$.
[[lem-cm13-poincare-cartan-annihilation-characterization]] records the
same first-order system as a single annihilation condition: a curve solves
Hamilton's equations exactly when its velocity annihilates
$d(p\cdot dq-H\,dt)$. [[def-cm13-poisson]] defines the Poisson bracket
$\{f,g\}=\omega(X_{f},X_{g})$ with its coordinate formula, and
[[pthm-cm13-bracket-identities]] proves bilinearity, skew-symmetry, the
Leibniz rule, the Jacobi identity, the fundamental brackets and the
reproduction of the Hamiltonian field. [[pthm-cm13-observable-evolution]]
then derives the evolution law $df/dt=\partial_{t}f+\{f,H\}$ of phase
functions along Hamiltonian solutions, the first-integral criterion, and the
closed bracket algebra of the autonomous first integrals.

[[def-cm13-canonical-map]] defines the dimension-aware canonical maps of the
presentation by $C^{*}\omega_{2}=\omega_{1}$; a lower-dimensional map is a
symplectic immersion, while equal-dimensional maps have the matrix test
$DC^{\mathsf T}J\,DC=J$ and determinant consequence $|\det DC|=1$.
[[pthm-cm13-flow-preservation]] proves that
the Hamiltonian evolution itself is canonical on its actual time-slice
domains — the two-form, the bracket and the determinant are preserved locally
in time, also when the Hamiltonian depends on time. Its time slices have the
$C^1$ regularity stated there; the separate fixed-map field-transport
theorem applies to an individual time slice only when it has additional
$C^2$ regularity.
[[pthm-cm13-dynamics-transport-under-canonical-maps]] proves that an
equal-dimensional local canonical transformation conjugates Hamiltonian
fields and transports the model's Hamiltonian systems and brackets.
[[pthm-cm13-liouville]] uses the phase-volume form
$\Omega=\omega^{\wedge n}/n!$ to prove conservation of phase volume: on its
actual domains the Hamiltonian evolution preserves the Lebesgue measure in
every full-dimensional canonical chart, under the stated Axiom of Countable
Choice used by the change-of-variables step. The phase-volume unit is action
to the power $3N$. [[pthm-cm13-generating-functions]] closes the
constructive part: first- and second-kind generating functions with
nondegenerate mixed derivative on nonempty admissible position and momentum domains generate canonical local diffeomorphisms of
the presentation, the local converse holds under an invertible
$(q,Q)$-projection, and a time-dependent generating function carries the
identity $p\cdot dq-H\,dt=P\cdot dQ-K\,dt+dS$ with $K=H+S_{t}$ and transports
Hamilton's equations between the two descriptions; the underlying calculus
of generating functions is that of [[cm-math-canonical]].

[[rem-cm13-locality-topology]] states the scope of the whole page:
generating functions, the invertible-projection hypothesis and the
determinant tests are local or pointwise, no global primitive, no global
generating function and no completeness of the flow is claimed, and every
statement is a conditional deduction of the declared presentation rather
than an empirical observation. Worked checks live on
[[cm13-symplectic-geometry-and-canonical-methods-examples]]: the fundamental
brackets and the evolution law on explicit one-label data, the isotropic
oscillator with its matrix, area and energy checks, the free-particle flow
generated by the first-kind function $S_{t}(q,Q)=-m\lvert Q-q\rvert^{2}/(2t)$,
the point-transformation chart transition generated in the second kind with
its nowhere-invertible $(q,Q)$-projection, the determinant tests that agree
with canonicity in dimension two but not in dimension four, and the
velocity-Verlet step of the model's mechanical splitting, whose drift and
kick are exact flows and whose composite is a canonical map of the
presentation — with the splitting and Verlet vocabulary supplied by
[[cm-math-numerical]].
