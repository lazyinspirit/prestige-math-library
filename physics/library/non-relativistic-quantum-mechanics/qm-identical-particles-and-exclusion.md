---
page: qm-identical-particles-and-exclusion
title: "Qm Identical Particles And Exclusion"
status: draft
library: physics
items:
  - lem-nrqm-identical-particles-two-particle-exchange-operator
  - thm-nrqm-identical-particles-occupation-number-basis
  - thm-nrqm-identical-particles-finite-mode-occupation-counts
  - thm-nrqm-identical-particles-two-factor-symmetry-decomposition
  - def-nrqm-identical-particles-framework-species-sectors-and-preparations
  - def-nrqm-identical-particles-framework-orbital-occupation-model
  - pthm-nrqm-identical-particles-permutation-invariance
  - pthm-nrqm-identical-particles-orbital-occupation-exclusion
  - rem-nrqm-identical-particles-scope-and-empirical-status
examples: []
requires:
  - qm-composites-entanglement-and-reduced-states
  - qm-math-fock-and-equilibrium
  - qm-harmonic-oscillator
  - qm-math-composites
  - qm-framework-and-quantities
  - qm-state-geometry
  - qm-massive-particle-kinematics
  - qm-observables-and-born-probabilities
---

This page develops the framework's reading of the identical-particle sector
assignment of P6 and its first consequences: the exchange operator, the
occupation-number bases of the symmetric and antisymmetric sectors, the
exclusion of repeated fermionic occupations, and the conditional
indistinguishability of relabelled readouts. The readings are fixed in
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]],
which declares a species with its one-particle space, mass and spin
parameters, statistics choice and adopted sector space
$\mathfrak H_n^\sigma=\operatorname{ran}P_\sigma^{(n)}$, fixes the vocabulary
of declared sector preparations and sector quantities, and records that a
bounded quantity of the labelled space is read on the sector only when it
preserves the sector. The physical scope is explicit: the sector assignment is
an adopted model assumption, the spin-statistics connection is not derived,
and no measurement is recorded.

The supporting mathematics precedes the physical reading.
[[lem-nrqm-identical-particles-two-particle-exchange-operator]] constructs the
exchange operator $\tau$ of a tensor square, proves that it is a self-adjoint
involution, identifies the sector projections as $\frac12(I\pm\tau)$, and
computes the norms of the symmetric and antisymmetric combinations of two
vectors. [[thm-nrqm-identical-particles-occupation-number-basis]] proves that
the Slater vectors form an orthonormal basis of the antisymmetric sector and
the symmetric sums an orthogonal basis of the symmetric sector, with the
dimension formulas $\binom dn$ and $\binom{n+d-1}n$, and diagonalises the
occupation operators $N_j$ on both bases.
[[thm-nrqm-identical-particles-finite-mode-occupation-counts]] counts the
occupation configurations, showing that the antisymmetric index set contains
no occupation $\ge2$ and that the truncated symmetric dimension is
$\binom{N+d}d$. [[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]]
proves the regrouping identity that splits a two-particle sector over an
orbital and an internal factor into opposite-symmetry summands.

The physical results are conditional on P1, P2 and P6 in the page's readings.
[[def-nrqm-identical-particles-framework-orbital-occupation-model]] declares
the finite-mode occupation model, its readouts $N_j^\sigma$ and the joint
occupation law. [[pthm-nrqm-identical-particles-permutation-invariance]] proves
that every declared sector preparation is invariant under the permutation
unitaries and that the outcome law of any assigned sharp observable of the
labelled model equals that of its relabelled conjugate, which is the precise
content of indistinguishability inside the model.
[[pthm-nrqm-identical-particles-orbital-occupation-exclusion]] proves the
Pauli exclusion statement of the declared readout: in the antisymmetric sector
the probability of an occupation $\ge2$ and the expectation of $N_j(N_j-1)$
vanish and the joint law is supported on occupations in $\{0,1\}$, while in
the symmetric sector every configuration of total occupation $n$ occurs.
[[rem-nrqm-identical-particles-scope-and-empirical-status]] records the adopted
assumptions, the conditional results and the empirical limits of the page.
