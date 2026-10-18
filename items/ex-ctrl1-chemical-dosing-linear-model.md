---
id: ex-ctrl1-chemical-dosing-linear-model
kind: example
title: "A chemical-dosing model under a constant admissible dose"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps: [def-ctrl1-smooth-transcription-data, lem-ctrl1-measurable-linear-ode-state-map, def-ctrl1-control-mesh-and-piecewise-constant-parameterization, def-explicit-runge-kutta-tableau-and-stage-map, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, alg-bounded-adaptive-runge-kutta-controller, thm-bounded-adaptive-runge-kutta-controller-terminates]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.3"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–243: chemical and process-control ODE models, piecewise-constant inputs, and direct shooting/collocation."
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §§2.3–2.4"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 17–22: ODE state maps, admissible controls, and finite-horizon LQ examples."
---

## Example

Let $x(t)$ be the concentration of a decaying reagent after dosing, with $\dot x=-x+u$, $x(0)=0$, $0\le u\le1$, and $0\le t\le1$. Use zero running and terminal costs to focus on the state trajectory. For the admissible constant dose $u(t)=1$, the exact concentration is $x(t)=1-e^{-t}$. A one-cell explicit-midpoint transcription from zero returns the stage value $X_2=1/2$ and endpoint approximation $x_1=1/2$, whereas the exact endpoint is $1-e^{-1}$. The controller's embedded difference alone is not an error certificate.

## Facts & Assumptions

**Given:** The linear concentration model, constant input, one-cell mesh, and explicit midpoint tableau $a_{21}=1/2$, $b_1=0$, $b_2=1$, $c_1=0$, $c_2=1/2$.

[F1] The unique state solves its Volterra integral equation for bounded measurable linear dynamics and an $L^2$ input ([[lem-ctrl1-measurable-linear-ode-state-map]]).

[F2] The one-step stage and endpoint formulas for an explicit RK tableau are those of [[def-explicit-runge-kutta-tableau-and-stage-map]].

[F3] Piecewise-constant controls are defined interval by interval on the mesh ([[def-ctrl1-control-mesh-and-piecewise-constant-parameterization]]).

[F4] An embedded adaptive RK estimate is a local pair difference; controller termination does not certify a global exact error ([[alg-bounded-adaptive-runge-kutta-controller]], [[thm-bounded-adaptive-runge-kutta-controller-terminates]]).

[A1] Exact real arithmetic is used for the displayed values.

## Verification

1.1 The exact integral equation is $x(t)=\int_0^t(-x(s)+1)ds$. The function $x(t)=1-e^{-t}$ has $x(0)=0$ and derivative $e^{-t}=-(1-e^{-t})+1$, so it solves the equation; uniqueness follows from [F1]. [F1, given, algebra]

2.1 On the one-cell mesh, the explicit midpoint first slope is $K_1=-x_0+u=1$. The second stage is $X_2=x_0+\frac12K_1=\frac12$, so $K_2=-X_2+u=\frac12$. The output is $x_1=x_0+K_2=\frac12$ by [F2]; the exact endpoint is $1-e^{-1}$ by step 1.1. [F2, F3, A1, step 1.1, algebra]

3.1 The exponential series gives $e=1+1+\sum_{k\ge2}1/k!>2$, so $1-e^{-1}>1/2$ and the midpoint endpoint differs from the exact endpoint. The procedure returns the stated value, not a bound on the true error, by [F4]. [F4, step 2.1, algebra] ∎
