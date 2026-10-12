---
page: qm-bell-models-and-measurement-limits-examples
title: "Qm Bell Models And Measurement Limits — Examples"
status: draft
library: physics
items: []
examples:
  - ex-nrqm-bell-worked-angles-and-product-mixture
  - texp-nrqm-bell-finite-sample-chsh
  - rem-nrqm-bell-selection-loss-and-fair-sampling
  - rem-nrqm-bell-examples-scope-limits
requires:
  - qm-bell-models-and-measurement-limits
  - qm-math-composites
  - qm-composites-entanglement-and-reduced-states
  - qm-angular-momentum-and-spin
  - qm-math-orbital-and-spin
  - qm-framework-and-quantities
---

The companion page to [[qm-bell-models-and-measurement-limits]] collects the
worked comparisons and the finite-sample and selection qualifications of the
Bell-models pair.
[[ex-nrqm-bell-worked-angles-and-product-mixture]] works the four directions
$a_{0}=e_{3}$, $a_{1}=e_{1}$, $b_{0}=(e_{3}+e_{1})/\sqrt2$,
$b_{1}=(e_{3}-e_{1})/\sqrt2$: the singlet has correlations
$E_{00}=E_{01}=E_{10}=-1/\sqrt2$, $E_{11}=+1/\sqrt2$ and $S=-2\sqrt2$, while
the EPR-type product mixture of definite opposite spins has the same marginal
laws and reduced preparations but the tables
$\frac14(1-\varepsilon\delta(a_{i})_{3}(b_{j})_{3})$ and $S=-\sqrt2$, with an
explicit two-specification local-response representation of the mixture.
[[texp-nrqm-bell-finite-sample-chsh]] analyzes a declared independent and
identically distributed sampling model with $n$ runs per setting pair: the
sample CHSH functional is unbiased with variance at most $4/n$, satisfies the
Chebyshev bound $4/(n\varepsilon^{2})$, and every acceptance criterion that
rejects a positive-probability outcome sequence fails with positive
probability. At the worked angles every outcome cell has positive probability
under both the singlet and product-mixture tables, so every finite record is
possible under both corresponding independent-sampling models; finite data
therefore cannot deductively exclude either model in this pair. Zero-probability
data can still exclude another specified ideal model under its assumptions.
[[rem-nrqm-bell-selection-loss-and-fair-sampling]] records the precise
setting-independent selection hypothesis under which the CHSH bound transfers
to recorded coincidences, and
[[rem-nrqm-bell-examples-scope-limits]] records what the page establishes and
the deferred Bell-test experiment destination with its required preparation,
apparatus, calibration, loss and statistical qualifications. The worked
singlet and product-mixture calculations use the Axiom of Countable Choice and
the Axiom of Choice stated in their supplier hypotheses.
