---
page: qm-measurement-and-instruments
title: "Qm Measurement And Instruments"
status: draft
library: physics
items:
  - lem-nrqm-measurement-selective-luders-update
  - lem-nrqm-measurement-nonselective-luders-map
  - def-nrqm-measurement-framework-declared-measurements-and-instruments
  - pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles
  - pthm-nrqm-measurement-degenerate-eigenspace-update
  - pthm-nrqm-measurement-instrument-updates-not-determined-by-effects
  - pthm-nrqm-measurement-finite-effects-dilation
  - pthm-nrqm-measurement-countable-kraus-instruments
  - rem-nrqm-measurement-scope-and-empirical-status
examples: []
requires:
  - qm-observables-and-born-probabilities
  - qm-math-composites
  - qm-state-geometry
  - qm-framework-and-quantities
---

This page develops the conditional-measurement content of the framework: the
adopted ideal conditional-measurement postulate P3, its declared instruments
and their consequences. The vocabulary is fixed in
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]: a
declared ideal sharp measurement is a finite or countable family $(P_a)$ of
mutually orthogonal projections with strong sum $I$, with outcome
probabilities $p_a=\operatorname{tr}(\rho P_a)$, conditional states
$\rho_a=P_a\rho P_a/p_a$ and discarded-outcome state
$\Phi(\rho)=\sum_aP_a\rho P_a$; a declared instrument is a normalized Kraus
family (or an abstract instrument) whose family supplies both the outcome
effects and the state update, the update being part of the apparatus model
and not a consequence of the effects. The definition also fixes the readings
of an ideal filter, of the conditional-vs-discarded distinction, and of the
limits of the declared class (no apparatus realization, no unique recorded
outcome, no collapse of an exact continuum value, destructive detectors
outside the class).

The mathematical layer supplies the update algebra. The selective Lueders
update [[lem-nrqm-measurement-selective-luders-update]] is a state
concentrated in the range of the projection, with unit repetition weight and
vanishing weight on orthogonal outcomes; the non-selective map
[[lem-nrqm-measurement-nonselective-luders-map]] is the trace-norm convergent
projection Kraus map, commutes with every outcome projection, is the
outcome-weighted mixture of the conditional states, leaves compatible bounded
quantities invariant, and destroys the coherence between distinct outcome
ranges.

The physics theorems read these results as conditional consequences of P3.
[[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] states
the outcome law, repeatability of an immediately repeated declared
measurement, the discarded-outcome ensemble formula and the invariance and
coherence clauses; [[pthm-nrqm-measurement-degenerate-eigenspace-update]]
shows that the update by a degenerate eigenspace projection preserves the
coherent superposition inside that eigenspace;
[[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]]
exhibits declared instruments with equal effects but different updates and a
declared instrument that is not repeatable;
[[pthm-nrqm-measurement-finite-effects-dilation]] realises any declared
finite effect family as the outcome statistics of a dilated ideal projective
measurement on a composite model space and computes the instrument it induces;
and [[pthm-nrqm-measurement-countable-kraus-instruments]] develops declared
countable instruments with their normalization, discarded ensembles and the
exact repeatability criterion for their Kraus families. No item asserts that
a laboratory apparatus realizes a declared measurement, that outcomes are
unique, or that a reported measurement exists; the scope remark
[[rem-nrqm-measurement-scope-and-empirical-status]] records these limits and
the deferred measurement topics.
