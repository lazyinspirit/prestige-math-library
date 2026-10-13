---
page: qm-uncertainty-and-compatibility
title: "Qm Uncertainty And Compatibility"
status: draft
library: physics
items:
  - def-nrqm-uncertainty-strong-spectral-commutation
  - lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound
  - def-nrqm-uncertainty-preparation-spread
  - lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators
  - thm-nrqm-uncertainty-joint-pvm-criterion
  - lem-nrqm-uncertainty-product-domain-commutator-identity
  - lem-nrqm-uncertainty-approximation-by-product-domain-vectors
  - pthm-nrqm-uncertainty-robertson-relation
  - pthm-nrqm-uncertainty-position-momentum-relation
  - pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law
  - pthm-nrqm-uncertainty-position-momentum-incompatible
  - rem-nrqm-uncertainty-scope-and-empirical-status
examples: []
requires:
  - qm-massive-particle-kinematics
  - qm-measurement-and-instruments
  - qm-math-composites
  - qm-math-magnetic-and-detection
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-state-geometry
---

This page develops preparation uncertainty and spectral compatibility for the
assigned sharp observables of the framework, on the model of the massive
spin-$s$ particle fixed by [[qm-massive-particle-kinematics]]. The reading of
preparation variance and spread is fixed by
[[def-nrqm-uncertainty-preparation-spread]]: for an assigned observable
$(A,u_{A})$ and a preparation $\rho$, $\Delta_{\rho}A$ is the standard
deviation of the outcome law of P2, defined only under the stated moment
hypotheses and read in the declared unit. The weak-domain bound is supplied by
[[lem-nrqm-composites-weak-form-robertson-uncertainty]]. On the product
domains, [[lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound]]
proves the Robertson bound and the anticommutator refinement with its equality
clause. [[pthm-nrqm-uncertainty-robertson-relation]] reads these bounds as a
conditional statement about two assigned observables, and
[[pthm-nrqm-uncertainty-position-momentum-relation]] proves the model's
position-momentum relation $\Delta Q_{j}\Delta P_{j}\ge\hbar/2$ on the full
maximal domain of the pair, with the exact imaginary part $-\hbar/2$ of the
centered pairing and the equality characterization; the local mathematics is
the product-domain commutator identity
[[lem-nrqm-uncertainty-product-domain-commutator-identity]] and the cutoff
approximation [[lem-nrqm-uncertainty-approximation-by-product-domain-vectors]].

Compatibility is stated at the level of spectra:
[[def-nrqm-uncertainty-strong-spectral-commutation]] defines strong spectral
commutation by commuting projection-valued measures, and
[[lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators]] and
[[thm-nrqm-uncertainty-joint-pvm-criterion]] prove the bounded Borel calculus,
the existence and uniqueness of a joint projection-valued measure and its
representation of products $f(A)g(B)$. The physical reading is
[[pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law]]: a pair
of assigned sharp observables is compatible exactly when it has a joint sharp
observable, the joint outcome law has the correct marginals in every
preparation, and in the declared ideal P3 Lueders instrument, each
positive-probability joint bin has an order-independent conditional state and
repeatable update; zero-probability bins have no conditional state. This is a
model update result, not an apparatus realization or universal disturbance
claim. Applying
the criterion together with the model's translation covariance shows in
[[pthm-nrqm-uncertainty-position-momentum-incompatible]] that position and
momentum possess no joint sharp observable with their exact spectral marginals;
the page makes no claim about unsharp joint measurements or laws.

The page records explicitly what it does not claim. Q and P are the model's
position and momentum operators; the bound $\hbar/2$ is a property of the
spreads of the two outcome laws in one preparation and not a statement about
apparatus resolution or disturbance; a formal commutator identity on a dense
invariant domain is not sufficient for spectral compatibility, as the examples companion
demonstrates; and the identification of a preparation or an apparatus with the
model's objects is a tested identification under the preparation and apparatus
postulate P7. The scope audit [[rem-nrqm-uncertainty-scope-and-empirical-status]]
collects these boundaries. No experiment, measured value, trial count or
statistical inference appears on this page.
