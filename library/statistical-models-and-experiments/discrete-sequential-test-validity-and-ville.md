---
page: discrete-sequential-test-validity-and-ville
title: Discrete test supermartingales and Ville
status: published
requires:
  - sequential-testing-and-anytime-valid-inference
  - discrete-time-martingales
  - stopping-times-and-optional-stopping
  - probability-spaces-random-variables-and-expectation
  - independence-borel-cantelli-and-zero-one-laws
items:
  - lem-finite-horizon-test-supermartingale-crossing-bound
  - thm-discrete-ville-inequality
examples: []
---

This page proves a finite-horizon maximal bound for a nonnegative discrete-time
test supermartingale, then passes to the infinite-horizon crossing and
supremum bounds by continuity from below and approximation with lower
thresholds. The argument uses bounded optional sampling and explicitly carries
the Axiom of Choice required by the current conditional-expectation and
optional-sampling suppliers. It applies under each law in the null family and
controls threshold rejection at arbitrary stopping times. It makes no
continuous-time claim. The supremum event and the finite crossing event are
kept distinct when a path approaches a threshold without attaining it.
