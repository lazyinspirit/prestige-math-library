---
id: rem-nrqm-uncertainty-examples-scope-limits
aliases: [ nrqm-uncertainty-examples-scope-limits ]
kind: remark
domain: physics
title: "What the examples companion records and what it does not"
status: published
origin: pipeline
dependency_level: 14
deps:
  [
    cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility,
    def-nrqm-uncertainty-preparation-spread,
    ex-nrqm-uncertainty-gaussian-minimum-spread,
    post-nrqm-framework-preparation-and-apparatus,
    pthm-nrqm-uncertainty-position-momentum-relation,
    rem-nrqm-uncertainty-energy-time-caveat,
    rem-nrqm-uncertainty-error-disturbance-distinction,
    texp-nrqm-uncertainty-spin-half-incompatibility
  ]
dependency_roles:
  cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility: mathematical-premise
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  ex-nrqm-uncertainty-gaussian-minimum-spread: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  pthm-nrqm-uncertainty-position-momentum-relation: physical-result
  rem-nrqm-uncertainty-energy-time-caveat: formulation-prerequisite
  rem-nrqm-uncertainty-error-disturbance-distinction: formulation-prerequisite
  texp-nrqm-uncertainty-spin-half-incompatibility: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the examples companion of the uncertainty and
  compatibility pair: it records that the companion contains one exact model
  computation, one finite internal-factor deduction, one purely mathematical
  counterexample and three remark items (the energy-time caveat, the
  error-disturbance distinction and this inventory audit); that it contains no
  experiment, no apparatus realization, no measured value, no trial count and no
  statistical inference; and that every identification of a preparation or
  apparatus with the model's objects is a tested identification under P7. It
  proves nothing itself."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', printed pages 1-19:
        uncertainty, saturation, the energy-time discussion and simultaneous
        diagonalization"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        3.4-3.4.1, printed pages 81-88 (PDF pages 84-91): the compatibility
        claim with its non-degeneracy caveat and the exact position-momentum
        relation"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## What the companion contains

**One exact model computation.** [[ex-nrqm-uncertainty-gaussian-minimum-spread]]
computes the position and momentum densities and spreads of the Gaussian
family in the spinless massive model and verifies that the product equals
$\hbar/2$ with the centered vectors linearly dependent and their pairing
purely imaginary, realizing the equality case of
[[pthm-nrqm-uncertainty-position-momentum-relation]]. It is a statement about
one family of preparations of the model; it contains no dynamics, no detection
model and no measured number, and it does not characterize all equality
states.
The spectral outcome-law and moment steps use the Axiom of Choice, as recorded
in the example's assumptions.

**One finite internal-factor deduction.**
[[texp-nrqm-uncertainty-spin-half-incompatibility]] derives the spread
identity $\sum_{i}(\Delta S_{i})^{2}=3\hbar^{2}/4-|\langle\mathbf S\rangle|^{2}$
for the spin-$\tfrac12$ internal factor, the lower bound $\hbar^{2}/2$, the
failure of spectral compatibility for every pair of components, and the
saturation of the Robertson bound in the $S_{z}$ eigenstates. It is a
conditional deduction inside the model's internal factor; it asserts no
Stern-Gerlach apparatus, no dynamics and no measurement.

**One purely mathematical counterexample.**
[[cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility]]
is a statement of pure mathematics about two self-adjoint extensions of the
interval momentum operator: it refutes the implication from a commutator
identity on a dense invariant domain to strong spectral commutation. It carries no
physical premise and makes no physical claim.

**Three remark items.** [[rem-nrqm-uncertainty-energy-time-caveat]] records
that time is a parameter and not an observable, so no energy-time Robertson
pair exists here and only the conditional timescale bound is available;
[[rem-nrqm-uncertainty-error-disturbance-distinction]] separates preparation
spread, apparatus resolution and disturbance. Both are readings of other
items, not new theorems. This item is the third remark item and audits the
companion's inventory and evidence scope.

## What it does not contain

**No experiment and no data.** The companion records no preparation
procedure, apparatus, calibration, trial count, count rate, histogram,
uncertainty budget or statistical analysis, and it uses no empirical premise.
Every quantity computed here is a model quantity. Any comparison with data
would test the combined model and apparatus assumptions through the
identification of a preparation and an apparatus with the model's objects, a
tested identification with uncertainty under the preparation and apparatus
postulate P7 ([[post-nrqm-framework-preparation-and-apparatus]]), and would
not turn the conditional results into unconditional statements about nature.

**No universal claims.** The Gaussian family is not all preparations; the
spin deduction concerns the internal factor of the model; the counterexample
concerns two specific operators. In particular the companion does not claim
that every state attaining $\hbar/2$ is Gaussian, that every pair of
incompatible components excludes all forms of joint measurement, or that the
timescale bound is a universal energy-time relation.

## Remarks

- **Reading order.** The mathematical items precede the model computations on
  the main page; the companion consumes the main page's items and adds no new
  supplier to them.
- **Status.** As everywhere in this category, agreement of the conditional
  predictions with a laboratory result would be evidence for the combined
  model and apparatus assumptions, not a proof of the framework; the companion
  reports no such result.
