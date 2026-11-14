---
id: op-qec-distinguishability-future-continuous-stabilized
kind: open-problem
domain: physics
title: Continuously monitored and dissipatively stabilized encodings
status: published
origin: session
deps:
  - def-qec-distinguishability-checking-time
  - def-qec-prereq-continuous-monitoring-interface
dependency_roles:
  def-qec-distinguishability-checking-time: formulation-prerequisite
  def-qec-prereq-continuous-monitoring-interface: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 5, Discussion, final paragraph
      statement: The authors propose extending their viewpoint to continuously
        monitored or dissipatively stabilized encodings, where measurement and
        engineered dissipation compete on comparable timescales, and cite
        references 54 and 55 for continuous monitoring.
      hypotheses: The future direction is posed in the context of the article's
        monolithic error-correction and distinguishability analysis; no specific
        continuous model or comparison theorem is stated.
      reading_limits: Read the supplied extracted article text at the cited
        discussion. This citation attributes the future direction; references 54
        and 55 were not independently read for this item, and no proof or
        worldwide status search is claimed.
physical_scope: Proposed extensions of the article's idealized monolithic
  error-correction analysis to explicitly specified monitoring or
  engineered-dissipation models; no experimental outcome is asserted.
dependency_level: 4
---

## Open problem

How can the article's checking-time and distinguishability analysis be extended to an encoding under continuous monitoring or engineered dissipative stabilization, including regimes in which measurement and engineered dissipation act on comparable timescales?

Here the checking time for a specified recovered logical channel is the infimum of times at which its entanglement fidelity falls strictly below a chosen target, with infinity if there is no such time. Distinguishability concerns information about error paths available in environmental or monitoring records. A continuous-monitoring model specifies a time-indexed measurement record, conditional evolution, measurement coupling and strength, detection efficiency, and any feedback rule. Engineered dissipative stabilization specifies additional generator terms intended to influence the evolution without requiring a measurement record; a model may combine the two.

A concrete answer requires specifying the encoding, noise and recovery or feedback, the relevant record and performance measure, and the measurement and dissipation rates. If a pulsed checking protocol is compared with a continuous model, the family of protocols, comparison topology and limiting statement must also be specified. The question does not assume that such a limit exists or that finite-strength monitoring has the performance of ideal rapid checks.

## Open problem references

[[def-qec-distinguishability-checking-time]]

[[def-qec-prereq-continuous-monitoring-interface]]

## Status

The article presents this extension as future work. The supplied article does not solve the question in this formulation; no subsequent literature search or claim that every instance remains unsolved is made here.
