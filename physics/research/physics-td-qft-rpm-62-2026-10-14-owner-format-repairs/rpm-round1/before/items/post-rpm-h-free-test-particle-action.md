---
id: post-rpm-h-free-test-particle-action
kind: postulate
title: "Free massive test-particle action"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, def-rpm-h-cotangent-phase-space, post-sr-ideal-clocks-and-light]
dependency_roles:
  post-sr-ideal-clocks-and-light: flat-specialization-check
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: formulation-prerequisite
  def-rpm-h-cotangent-phase-space: dimensional-prerequisite
physical_scope: "Classical spinless structureless point test body with fixed primitive mass m>0 on a prescribed background; excludes self-field, radiation reaction, finite size, spin and quantum effects."
sources:
  references:
    - title: "Andrew Hanson, Tullio Regge and Claudio Teitelboim, Constrained Hamiltonian Systems, Part 1, complete monograph"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Complete 35-page Part 1; Chapter II, printed pp. 27–30, relativistic spinless point particle."
    - title: "B. F. Chagas-Filho, Free massless particles and extended space-time algebra, comparison for the distinct massive square-root action"
      url: "https://arxiv.org/pdf/hep-th/0401091"
      locator: "§1, pp. 1–2."
---

## Postulate

For a $C^2$ future-directed timelike worldline $x:I\to M$ on a prescribed smooth, time-oriented Lorentzian background $(M,g,T)$ of signature $(-+++)$, with $m>0$ a fixed primitive mass in kg and $c>0$ in m/s, adopt the stationary-action model

$$S_m[x]=-mc\int_I\sqrt{-g(x',x') }\,d\lambda.$$

Here λ is an increasing regular parameter, endpoint events are fixed, and admissible variations remain future timelike. The integrand is the proper-time length density, so $S_m=-mc^2\int d\tau$; its dimension is action (J s). The adopted premise concerns this ideal free test body only. It is neither a theorem about all matter nor an empirical report, and supplies no backreaction or completeness claim. The flat ideal-clock specialization agrees with [[post-sr-ideal-clocks-and-light]]; adopting this action on a curved background remains a separate premise.

The cotangent phase-space carrier convention assumes countable choice ACω only; full choice is not assumed.
