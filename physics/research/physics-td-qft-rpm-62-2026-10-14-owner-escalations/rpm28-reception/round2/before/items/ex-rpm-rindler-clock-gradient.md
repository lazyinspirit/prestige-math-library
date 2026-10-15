---
id: ex-rpm-rindler-clock-gradient
kind: example
title: "Two stationary clocks and one radial Rindler pulse"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A symbolic specialization of the conditional right-wedge Rindler theorem. The numerical parameters are chosen model values, not measured quantities; interpreting the frequency functional as an accelerated-observer reception requires the theorem's unresolved additional assumption."
empirical_premises: []
deps:
  - pthm-rpm-rindler-clock-gradient
dependency_roles:
  pthm-rpm-rindler-clock-gradient: physical-result
sources:
  references:
    - title: "Eric Gourgoulhon, Special relativity from an accelerated observer perspective, full author-hosted talk slides, slides 26–30"
      url: "https://people-lux.obspm.fr/gourgoulhon/fr/present_rec/imcce_syrte10.pdf"
      locator: "Slides 26–30 of the 55-page PDF: Rindler map, clock-rate gradient, null rays and redshift; the full relevant section inspected."
    - title: "Tevian Dray, Geometry of General Relativity, Chapter 4: Rindler Geometry, online textbook sections §1 The Rindler Metric and §2 Rindler Geometry"
      url: "https://sites.science.oregonstate.edu/physics/coursewikis/GGR/book/ggr/rindprop.html"
      locator: "Chapter 4 §2 Rindler Geometry: stationary-observer proper time and acceleration used in this symbolic example; complete section inspected."
verification: {}
---

## Statement

Specialize [[pthm-rpm-rindler-clock-gradient]] to $a=2\,\mathrm{m\,s^{-2}}$, emission radius $\rho_E=2\,\mathrm m$, reception radius $\rho_R=4\,\mathrm m$, and a future outward radial ray. These are exact model parameters. The one-way coordinate travel time is $(c/2\,\mathrm{m\,s^{-2}})\log 2$, and over a shared Rindler-time interval the ideal-clock ratio is $\Delta\tau_R/\Delta\tau_E=2$. The observer-frequency contraction functional ratio is $\omega_R/\omega_E=1/2$; its interpretation as an accelerated reception frequency is conditional on the unresolved additional hypothesis in the theorem. No experiment is described.

## Facts & Assumptions

**Given:** The parameter values above and the right-wedge definitions and model readings of the theorem.

[F1] [[pthm-rpm-rindler-clock-gradient]]: radial travel has $\Delta T=(c/a)|\log(\rho_R/\rho_E)|$, stationary ideal-clock increments scale as $\rho$, and the wave-covector contraction functional scales as $1/\rho$; reception interpretation requires the theorem's [A2].

## Proof

1.1 Substitute $a=2\,\mathrm{m\,s^{-2}}$, $\rho_R/\rho_E=2$ into the theorem's travel-time formula. Since both radii are positive and the ray is outward, $\Delta T=(c/a)\log2=(c/2\,\mathrm{m\,s^{-2}})\log2$, which is finite. [given, F1, algebra]

2.1 The clock-gradient formula gives $\Delta\tau_R/\Delta\tau_E=\rho_R/\rho_E=4\,\mathrm m/(2\,\mathrm m)=2$. The contraction functional gives $\omega_R/\omega_E=\rho_E/\rho_R=1/2$. The latter is a model functional calculation; by [F1] its physical reception reading remains conditional. [step 1.1, F1, algebra] ∎
