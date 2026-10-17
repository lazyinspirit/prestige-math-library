---
id: post-qsm-thermal-gibbs-preparation
kind: postulate
title: Canonical quantum thermal preparation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
physical_scope: Adopted nonzero finite-dimensional or trace-class canonical Gibbs preparation at positive temperature under the exact trace and moment hypotheses; no bath dynamics, thermalization, or experimental claim is asserted.
deps:
  - def-axiom-of-choice
  - post-qsm-normal-measurement-state
  - thm-qsm-finite-gibbs-variational
  - thm-qsm-trace-gibbs-variational
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-qsm-normal-measurement-state: formulation-prerequisite
  thm-qsm-finite-gibbs-variational: mathematical-premise
  thm-qsm-trace-gibbs-variational: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §5.2, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Postulate

Adopt canonical preparation as follows. Fix the positive Boltzmann constant $k_B>0$ in J/K. Let $H=H^*$ act on a finite-dimensional complex Hilbert space of dimension $d\geq1$, or be self-adjoint on a nonzero separable Hilbert space, bounded below and satisfying $e^{-\beta H}\in\mathcal S_1$ for $\beta$ in an open interval about the chosen value. For temperature $T>0$, put $\beta=(k_BT)^{-1}$ and adopt
$
\rho_\beta=\frac{e^{-\beta H}}{Z_\beta},\qquad Z_\beta=\operatorname{Tr}(e^{-\beta H}).
$
In the infinite-dimensional case all scalar energy moments used in a conclusion must also be finite on the actual spectral domain, as required by [[thm-qsm-trace-gibbs-variational]]. With $H$ in joules, $k_B$ in J/K, $T$ in K, and $\beta$ in J$^{-1}$, the exponent is dimensionless and $Z_\beta$ is a dimensionless trace.

This is an adopted preparation rule in the normal-state framework. It is not a theorem that unitary dynamics equilibrates, does not specify a bath or equilibration time, and makes no empirical claim. The finite and trace-Gibbs variational results describe the mathematical optimization associated with this state but do not establish that a physical system is prepared in it.
