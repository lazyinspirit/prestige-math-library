---
id: def-nrqmx-finite-mode-g2-statistic
kind: definition
title: Ideal single-mode normally ordered second factorial statistic
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - post-nrqmx-finite-mode-light-matter-model
  - thm-nrqm-fock-and-equilibrium-fixed-mode-number-law
  - def-nrqm-measurement-framework-declared-measurements-and-instruments
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-nrqmx-finite-mode-light-matter-model: physical-assumption
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: operational-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >-
  The dimensionless equal-time second factorial statistic in the one-mode
  specialization of the finite-mode assignment, under an ideal
  number-resolving count model. It is a model-defined normal-ordered moment
  for states with finite moments and positive mean number. No multimode
  output-field correlation, finite-trial observation, detector response, or
  laboratory antibunching result is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Carlos Navarrete-Benlloch, Introduction to Quantum Optics, full lecture notes, §VI.2.1"
      url: "https://arxiv.org/pdf/2203.13206"
      locator: "Equation (491) and footnote 51 define normal ordering for output photodetection correlations; that continuous-time open-system correlation model is not imported here."
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §II.5.4"
      url: "https://arxiv.org/pdf/1110.3234"
      locator: "The number-basis PVM E_n=|n><n| and the distinction between ideal number measurement and inefficient avalanche detection."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Specialize the finite-mode assignment to $M=1$, identify the coordinate vector $(z)\in\mathbb C^1$ with its single component $z\in\mathbb C$, and write $\mathcal F_s(\mathbb C)$ for this one-mode Fock space. Write $|n\rangle$ for the occupation vector with $n$ quanta in its unique mode. Let $\rho$ be a density operator (a positive trace-class operator of trace one) on $\mathcal F_s(\mathbb C)$. Let $\Pi_n:=|n\rangle\langle n|$ be the ideal number-count PVM, with probabilities $p_n:=\operatorname{tr}(\rho\Pi_n)$. Suppose $\bar n:=\sum_{n\ge0}np_n$ is finite and strictly positive, and $m_2:=\sum_{n\ge0}n(n-1)p_n$ is finite. Define the model's equal-time second factorial statistic by $g^{(2)}(0;\rho):=m_2/\bar n^2$. On finite-particle number vectors the one-mode maps satisfy $a|0\rangle=0$, $a|n\rangle=\sqrt n|n-1\rangle$ for $n\ge1$, and $a^*|n\rangle=\sqrt{n+1}|n+1\rangle$ for $n\ge0$. Normal ordering here means placing creation maps to the left of annihilation maps; these actions give $a^*a^*aa|n\rangle=n(n-1)|n\rangle$ for $n\ge0$. Thus $m_2$ is the corresponding number-basis factorial moment, defined here directly by its probability sum rather than by an unqualified expectation of an unbounded operator product. This uses only the ideal counting model; it asserts no time-resolved photocurrent law, empirical detection, or detector realization.

## Definition references

[[post-nrqmx-finite-mode-light-matter-model]]

[[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]

[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]

[[def-axiom-of-choice]]

[[def-countable-choice]]


