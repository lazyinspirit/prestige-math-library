---
id: ex-nrqmx-single-photon-antibunching
kind: example
title: Ideal single-mode factorial moment
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - def-nrqmx-finite-mode-g2-statistic
  - post-nrqmx-finite-mode-light-matter-model
  - pthm-nrqmx-beam-splitter-count-statistics
  - thm-nrqm-fock-and-equilibrium-fixed-mode-number-law
  - def-nrqm-measurement-framework-declared-measurements-and-instruments
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-nrqmx-finite-mode-g2-statistic: formulation-prerequisite
  post-nrqmx-finite-mode-light-matter-model: physical-assumption
  pthm-nrqmx-beam-splitter-count-statistics: physical-result
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: operational-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  An ideal one-quantum Fock-state calculation of a single-mode normal-ordered
  factorial statistic and its passive beam-splitter count distribution. This
  is a conditional finite-mode model prediction, not a detector observation or
  experimental antibunching dataset.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Carlos Navarrete-Benlloch, Introduction to Quantum Optics, full lecture notes, §VI.2.1"
      url: "https://arxiv.org/pdf/2203.13206"
      locator: "Equation (491) and footnote 51 explain normal ordering in photodetection correlations; no output-field data or open-system formula is imported."
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §§II.2.6 and II.5.4"
      url: "https://arxiv.org/pdf/1110.3234"
      locator: "Passive beam splitter transformation and ideal number-basis PVM; the local result is a finite-mode state calculation."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

For the one-mode number state $|1\rangle$ and the ideal number-count model, the mean number is $\langle a^*a\rangle=1$ while the normally ordered second factorial moment is $\langle a^*a^*aa\rangle=0$, so the assigned $g^{(2)}(0)$ statistic is zero. If the input $|1,0\rangle$ is mixed with vacuum at the declared passive beam splitter, its output has exactly one total count, split between the two ports with probabilities $\eta$ and $1-\eta$. These are model predictions only; no detector realization or experimental antibunching record is asserted.

## Example references

[[def-nrqmx-finite-mode-g2-statistic]]

[[post-nrqmx-finite-mode-light-matter-model]]

[[pthm-nrqmx-beam-splitter-count-statistics]]

[[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]

[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The number state $|1\rangle$, the ideal single-mode count PVM, the vacuum state in the unused port, a passive two-mode unitary with $0\le\eta\le1$, and the assigned finite-mode model.

[A1] The finite-mode postulate supplies an ideal number-count PVM but makes no claim about a laboratory detector or a measured count record ([[post-nrqmx-finite-mode-light-matter-model]]).

[A2] Assume AC and $\mathrm{AC}_\omega$ as mathematical prerequisites of the finite-mode passive implementer and Fock suppliers; these are set-theoretic assumptions, not physical postulates ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] For the declared number distribution, $g^{(2)}(0)=\sum_n n(n-1)p_n/(\sum_nnp_n)^2$ when the denominator is finite and positive ([[def-nrqmx-finite-mode-g2-statistic]]).

[F2] The ladder actions give $a|1\rangle=|0\rangle$, $a|0\rangle=0$, $a^*a|1\rangle=|1\rangle$, and $|1\rangle,|0\rangle$ are orthonormal ([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]).

[F3] A one-quantum input and vacuum at the second port have joint output state $t|1,0\rangle+r|0,1\rangle$ and ideal count probabilities $|t|^2=\eta$, $|r|^2=1-\eta$ ([[pthm-nrqmx-beam-splitter-count-statistics]]).

[F4] Ideal number-count effects are PVM projections with probabilities given by the Born rule; they do not imply a physical device or recorded data ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]]).

## Proof

1.1 Since $a|1\rangle=|0\rangle$ and $a|0\rangle=0$ by [F2], $a^*a|1\rangle=|1\rangle$ and $a^*a^*aa|1\rangle=0$. Thus the denominator mean number is one and the numerator is zero. [A2, F2, algebra]

2.1 Substituting these moments into the definition [F1] gives $g^{(2)}(0)=0$ for this model state. This is a conditional number-statistic calculation, not an observation. [F1, step 1.1, algebra]

3.1 With one input quantum and vacuum in the other port, the beam-splitter theorem [F3] gives output $t|1,0\rangle+r|0,1\rangle$. The PVM events $(1,0)$ and $(0,1)$ are orthogonal and have probabilities $\eta$ and $1-\eta$ by [F4]; the joint event with a count in each port has probability zero. The total output count is exactly one in this assigned model [A1]. [A1, A2, F3, F4, algebra] ∎

