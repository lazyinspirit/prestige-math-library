---
page: hamiltonian-mechanics-and-completely-integrable-systems
title: Hamiltonian Mechanics and Completely Integrable Systems
status: draft
items: ["def-symplectic-vector-field","prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed","def-hamiltonian-vector-field-and-hamiltonian-function","thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions","prop-hamiltonian-vector-fields-are-symplectic-and-symplectic-fields-are-locally-hamiltonian","prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function","thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology","thm-hamiltonian-flows-preserve-the-symplectic-form","prop-a-hamiltonian-is-conserved-along-its-own-flow","def-poisson-bracket-on-a-symplectic-manifold","prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry","thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism","thm-poisson-bracket-satisfies-the-jacobi-identity","thm-smooth-functions-form-a-poisson-algebra","prop-observable-evolution-equation","def-first-integral-and-poisson-commuting-functions","prop-f-is-a-first-integral-of-h-iff-f-and-h-poisson-commute","thm-hamiltonian-flows-commute-iff-their-hamiltonians-poisson-commute-up-to-locally-constant-bracket","thm-hamilton-equations-in-canonical-cotangent-coordinates","prop-coordinate-formula-for-the-poisson-bracket","prop-cotangent-lift-of-a-vector-field-is-hamiltonian","def-time-dependent-hamiltonian-vector-field-and-flow","prop-time-dependent-hamiltonian-evolution-is-symplectic","def-canonical-transformation","thm-liouville-volume-preservation","cor-hamiltonian-flow-has-zero-divergence-with-respect-to-symplectic-volume","def-liouville-vector-field-on-an-exact-symplectic-manifold","prop-canonical-liouville-vector-field-on-a-cotangent-bundle-is-radial-in-momenta","cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions","def-lagrangian-action-functional-on-curves","thm-euler-lagrange-equations","def-fibre-derivative-and-legendre-transform-of-a-lagrangian","def-regular-and-hyperregular-lagrangian","def-energy-and-hamiltonian-of-a-hyperregular-lagrangian","thm-equivalence-of-euler-lagrange-and-hamilton-equations-for-hyperregular-lagrangians","prop-natural-mechanical-lagrangian-gives-kinetic-plus-potential-hamiltonian","def-completely-integrable-hamiltonian-system","prop-regular-common-level-sets-are-lagrangian-submanifolds","prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action","lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice","thm-compact-connected-regular-fibres-are-tori","def-action-and-angle-coordinates","thm-liouville-arnold-action-angle-theorem","cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori","prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates","fs-every-symplectic-vector-field-has-a-global-hamiltonian-function","fs-hamiltonian-functions-for-one-vector-field-differ-by-one-global-constant-on-a-disconnected-manifold","fs-h-to-x-h-is-a-lie-homomorphism-under-the-library-poisson-convention","fs-hamiltonian-flows-are-complete-on-every-symplectic-manifold","fs-n-independent-first-integrals-automatically-form-a-completely-integrable-system","fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold"]
examples: []
---

The sign convention on this page is
$\iota_{X_H}\omega=dH$ and
$\{F,G\}=\omega(X_F,X_G)=X_G(F)=-X_F(G)$. Consequently
$[X_F,X_G]=-X_{\{F,G\}}$: the Hamiltonian-field assignment is a Lie
antihomomorphism. Symplectic vector fields correspond to closed one-forms,
Hamiltonian fields to exact ones, and their quotient is first de Rham
cohomology. Flows preserve both the symplectic form and their own
Hamiltonian only on their actual domains; completeness is never automatic.

In canonical cotangent coordinates the convention produces the usual
Hamilton equations and Poisson coordinate bracket. Cotangent-lift
Hamiltonians, time-dependent evolutions, canonical transformations,
Liouville volume, and the radial Liouville field are treated with their exact
existence assumptions. Poincaré recurrence applies only to invariant regions
of finite measure and gives an almost-everywhere recurrence conclusion.

The variational branch defines the action functional, derives
Euler–Lagrange equations with fixed endpoints, and uses the fibre derivative
and hyperregularity to pass between Lagrangian and Hamiltonian descriptions.
A natural mechanical Lagrangian becomes the kinetic-plus-potential
Hamiltonian. The cotangent-dependent equivalence retains the
countable-choice hypothesis of its canonical symplectic input.

For a completely integrable system, involution and differential independence
are separate requirements. A regular common fibre is Lagrangian; commuting
fields integrate locally, and compact connected regular fibres have full
period lattices and are tori. The compact-fibre completeness supplier follows
the library's choice-bearing smooth-vector-field interface, so the full-lattice,
torus, and local action–angle existence results explicitly assume
$\mathrm{AC}_\omega$ and propagate it to their genuine consumers. Once
action–angle coordinates are supplied, the formula for linear motion is a
direct finite-dimensional calculation and remains choice-free. The
action–angle theorem is stated on a locally proper saturated neighbourhood,
not globally. With period-one
angles this page uses
$\omega=\sum_i d\theta_i\wedge dI_i$, so
$H=h(I)$ gives $\dot\theta_i=\partial h/\partial I_i$. Period-lattice
monodromy is one obstruction to globalizing these coordinates.
