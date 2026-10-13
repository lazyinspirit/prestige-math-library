---
page: qm-observables-and-born-probabilities
title: "Qm Observables And Born Probabilities"
status: published
library: physics
items:
  - lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues
  - lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity
  - lem-nrqm-observables-moments-and-variance
  - lem-nrqm-observables-states-separated-by-bounded-projections
  - def-nrqm-observables-framework-observable-and-outcome-law
  - pthm-nrqm-observables-born-outcome-law-properties
  - pthm-nrqm-observables-preparation-moments
  - pthm-nrqm-observables-position-and-momentum-outcome-laws
  - pthm-nrqm-observables-states-separated-by-born-statistics
  - rem-nrqm-observables-scope-and-empirical-status
examples: []
requires:
  - qm-state-geometry
  - qm-math-composites
  - qm-framework-and-quantities
  - qm-math-fock-and-equilibrium
  - qm-math-magnetic-and-detection
---

This page develops the outcome law of the framework's observable and
probability postulate. The physical vocabulary is fixed in
[[def-nrqm-observables-framework-observable-and-outcome-law]]: an assigned
sharp observable is a densely defined self-adjoint operator together with a
declared unit for its real spectral coordinate, its spectral projection-valued
measure $E_A$ exists under the stated choice hypotheses, and the outcome law
of a preparation $\rho$ is
$\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))$, equal to
$\|E_A(B)\psi\|^{2}$ for the pure preparation of a unit vector. The definition
also fixes the readings of exact values, of the spectral support, of the mean
and variance, and of the affinity of the law under statistical mixing; it
adopts no assumption beyond P1 and P2 and defers the finite unsharp-effect
extension to the measurement-and-instruments page.

The mathematical layer supplies the properties of the law. The spectral measure
of a real $L^{2}$ multiplication operator is computed from the spectral theorem as
multiplication by the pulled-back indicators, with its vanishing sets and
essential-range spectrum
([[lem-nrqm-observables-l2-multiplication-spectral-measure]]); this is the tool
that later identifies the position observables. The atoms of the
spectral measure are the eigenspace projections, so an exact value carries zero
probability unless it is an eigenvalue
([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]]); the support
of the spectral measure is exactly the spectrum, so outcomes outside the
spectrum have probability zero
([[lem-nrqm-observables-spectral-support-and-outcome-law]]); the law is real
linear in the self-adjoint trace-class variable, affine under statistical
mixtures and uniformly continuous in the trace norm
([[lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity]]); and
the mean, second moment and variance have the spectral formulas with their
exact domain criteria
([[lem-nrqm-observables-moments-and-variance]]). Distinct density operators
are separated by the law of a bounded rank-one projection
([[lem-nrqm-observables-states-separated-by-bounded-projections]]).

The physics theorems read these results as conditional statements about the
model. [[pthm-nrqm-observables-born-outcome-law-properties]] assembles the
probability-measure, mixture, atom, support and no-density clauses;
[[pthm-nrqm-observables-preparation-moments]] states the moment formulas with
their hypotheses and the possibility of non-existence;
[[pthm-nrqm-observables-position-and-momentum-outcome-laws]] computes the
position and momentum laws of the spinless massive model - the Born densities
$|\psi|^{2}$ and $|\widehat\psi|^{2}$, the joint position measure and the
atomlessness of exact coordinate values - and
[[pthm-nrqm-observables-states-separated-by-born-statistics]] draws the
separation statement for preparations. No item asserts a complete discrete
eigenbasis for a general self-adjoint operator, a density for an arbitrary
outcome law, a moment without its domain hypothesis, a joint measurement, an
apparatus realization or an empirical result; the scope remark
[[rem-nrqm-observables-scope-and-empirical-status]] records these limits.
