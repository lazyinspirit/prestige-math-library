---
page: qm-measurement-and-instruments-examples
title: "Qm Measurement And Instruments — Examples"
status: draft
library: physics
items: []
examples:
  - ex-nrqm-measurement-serial-stern-gerlach-filters
  - ex-nrqm-measurement-three-polarizer-chain
  - ex-nrqm-measurement-absorption-instrument
  - ex-nrqm-measurement-degenerate-coarse-versus-fine-update
  - rem-nrqm-measurement-examples-scope-limits
requires:
  - qm-measurement-and-instruments
  - qm-state-geometry
  - qm-math-composites
  - qm-framework-and-quantities
  - qm-math-orbital-and-spin
---

The companion page to [[qm-measurement-and-instruments]] collects finite
worked instruments and one scope audit. The serial-filter example
[[ex-nrqm-measurement-serial-stern-gerlach-filters]] computes the outcome
probabilities of successive ideal spin-component filters in a declared
two-level model - the amplitudes $\cos(\theta/2)$ and
$\cos((\varphi-\theta)/2)$, the quarter-probability case, and the change of
the later statistics caused by the intervening declared measurement - and
states explicitly that it does not derive the spatial Stern-Gerlach
deflection or report any measured fraction.
[[ex-nrqm-measurement-three-polarizer-chain]] computes the corresponding
transmission chain of declared ideal analysers, including the standard
$\tfrac14$ case and an explicit comparison with a stipulated classical
amplitude model that gives the same ratio, with the warning that agreement of
the two model computations establishes neither field quantization nor the
applicability of either model. [[ex-nrqm-measurement-absorption-instrument]]
exhibits a declared two-outcome instrument whose detected branch leaves an
absorbed marker with no outgoing polarization-plane state and whose
non-detection branch suppresses an amplitude by $\sqrt{1-p}$ rather than
projecting it away, so that neither outcome is repeatable.
[[ex-nrqm-measurement-degenerate-coarse-versus-fine-update]] contrasts a
coarse readout of a degenerate subspace with a fine readout resolving it and
shows that the coarse Lueders update retains the coherent superposition while
the eigenvector-selection mixture changes the law of a suitable bounded
observable. The scope remark
[[rem-nrqm-measurement-examples-scope-limits]] records that none of the items
is an experiment: no counts, calibration, resolution, uncertainty or data
comparison is asserted anywhere on the page, and the reported
Stern-Gerlach experiments remain a candidate experiment item not asserted
here.
