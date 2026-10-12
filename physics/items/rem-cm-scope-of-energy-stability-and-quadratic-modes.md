---
id: rem-cm-scope-of-energy-stability-and-quadratic-modes
kind: remark
title: "Scope of the quadratic-mode and energy-stability results: exact quadratic model versus linearisation approximation"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-quadratic-mode-decomposition, thm-cm-energy-stability-of-a-strict-minimum, prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium, def-cm-mechanical-vector-field-and-energy-in-a-chart]
dependency_roles:
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  thm-cm-energy-stability-of-a-strict-minimum: mathematical-premise
  prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 2.6 (the small-oscillation approximation and its higher-order terms), printed pages 37-45"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.7 (stability and non-asymptotic character of conservative equilibria), printed pages 203-205"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Statement

The three results of this group establish different, and differently qualified, statements.

1. [[thm-cm-quadratic-mode-decomposition]] is an exact theorem about the constant-coefficient linear system $Mq''+Kq=0$ with $M$ symmetric positive definite and $K$ symmetric non-negative: it diagonalises the system, gives all solutions and the modal energies. It is not an approximation statement, and it makes no claim about nonlinear systems or about configuration-dependent kinetic metrics.

2. [[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]] computes the derivative of the nonlinear mechanical field at an equilibrium. Its linearised equation is the exact first-order Taylor model at that point; replacing the nonlinear system by it is an approximation whose error over a time interval is not estimated by the proposition. A zero eigenvalue $\lambda_i=0$ of $M(q_0)^{-1/2}D^2U(q_0)M(q_0)^{-1/2}$ corresponds to an affine mode of the linearisation, not to an oscillation, and a negative eigenvalue corresponds to exponential growth of the linearisation.

3. [[thm-cm-energy-stability-of-a-strict-minimum]] is an exact Lyapunov-stability theorem for the nonlinear system at a strict minimum of the potential. It is a statement about the nonlinear field of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]], uses exact energy conservation, and therefore proves stability but not attraction: the theorem does not assert that solutions converge to the equilibrium, and in a conservative model with no dissipation they do not in general. It also does not assert that the linearisation determines the nonlinear stability in non-hyperbolic cases, and it does not require the Hessian to be positive definite.
