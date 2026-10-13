---
page: qm-bell-models-and-measurement-limits
title: Qm Bell Models And Measurement Limits
status: published
library: physics
items:
  - def-nrqm-bell-binary-correlation-models
  - def-nrqm-bell-local-response-representation
  - prop-nrqm-bell-local-representations-are-no-signalling
  - thm-nrqm-bell-local-representations-satisfy-chsh
  - lem-nrqm-bell-setting-independent-selection-closure
  - lem-nrqm-bell-singlet-pairings
  - def-nrqm-bell-declared-spin-arrangement
  - texp-nrqm-bell-singlet-arrangement-contrast
  - pthm-nrqm-bell-tsirelson-bound-for-arrangements
  - rem-nrqm-bell-boundaries-and-comparison-scope
  - rem-nrqm-bell-scope-and-empirical-status
examples: []
requires:
  - qm-composites-entanglement-and-reduced-states
  - qm-math-orbital-and-spin
  - qm-math-composites
  - qm-framework-and-quantities
  - qm-state-geometry
  - qm-observables-and-born-probabilities
  - qm-massive-particle-kinematics
  - qm-measurement-and-instruments
  - qm-angular-momentum-and-spin
---

This page compares the framework's declared spin correlation arrangement with
the precise class of local-response models of its four sign tables, and
records the measurement-model boundaries of the comparison. The vocabulary is
fixed in
[[def-nrqm-bell-binary-correlation-models]], which introduces binary
correlation models, their marginals, the no-signalling identities, the
correlations and the CHSH functional, and in
[[def-nrqm-bell-local-response-representation]], which defines a
local-response representation as one setting-independent specification space
with per-station response laws, together with the special deterministic form
by response functions.

The supporting mathematics precedes every physical use.
[[prop-nrqm-bell-local-representations-are-no-signalling]] proves that a
representable model has setting-independent marginals;
[[thm-nrqm-bell-local-representations-satisfy-chsh]] proves that the CHSH
functional of every representable model is at most $2$ in absolute value;
[[lem-nrqm-bell-setting-independent-selection-closure]] proves that
conditioning on a selection event of the specification space preserves
representability and the bound; and
[[lem-nrqm-bell-singlet-pairings]] computes the exact joint sign numbers,
marginals and correlation of the two-factor singlet.

The physical declarations and conditional results follow.
[[def-nrqm-bell-declared-spin-arrangement]] fixes the arrangement: two
declared spin-half factors, a declared preparation, two unit directions per
station, the four declared joint sign measurements with their outcome laws,
the correlation table and its CHSH functional, and the declared class of
local-response models of that table.
[[texp-nrqm-bell-singlet-arrangement-contrast]] computes the singlet's tables
and correlations, attains the value $2\sqrt2$ at the displayed directions and
concludes that those four tables admit no local-response model;
[[pthm-nrqm-bell-tsirelson-bound-for-arrangements]] proves that no declared
arrangement exceeds $2\sqrt2$ in absolute value and that the singlet attains
the bound. The arrangement and singlet/Tsirelson calculations carry the Axiom
of Countable Choice and the Axiom of Choice stated in their item hypotheses.
[[rem-nrqm-bell-boundaries-and-comparison-scope]] records exactly which class
the no-go excludes, which framework readings it uses, and which measurement,
detection, selection and interpretation questions remain outside it;
[[rem-nrqm-bell-scope-and-empirical-status]] records that every item of the
page is a conditional model statement, that no observation is reported, and
that a Bell-test experiment item with full preparation, apparatus, loss and
statistical qualifications remains a deferred destination. Under a specified
ideal sampling and apparatus model, a finite record can deductively exclude
that model when it has probability zero under the model; records in the
overlapping supports of two specified models remain possible under both. The
companion page
[[qm-bell-models-and-measurement-limits-examples]] carries the worked angles,
the finite-sample behaviour and the selection and loss caveats.
