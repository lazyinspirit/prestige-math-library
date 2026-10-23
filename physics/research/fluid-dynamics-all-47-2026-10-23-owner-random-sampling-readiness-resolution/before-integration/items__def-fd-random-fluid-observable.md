---
id: def-fd-random-fluid-observable
title: Random fluid observable and numerical approximation
kind: definition
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-fd-random-velocity-sensor-law
  - lem-fd-sensor-pairing-is-well-defined
dependency_roles:
  lem-fd-sensor-pairing-is-well-defined: mathematical-premise
  def-fd-random-velocity-sensor-law: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2, §§2.1–2.2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Olivier Le Maître and Omar Knio, Introduction to Uncertainty Quantification, DTU PhD course lecture notes, pp. 3–4 and 14–16"
      url: "https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf"
    - title: "NASA Glenn Research Center, Uncertainty and Error in CFD Simulations"
      url: "https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html"
---

## Definition

Let $(\Theta,\mathcal A,\mu)$ be a specified probability space of inputs, let $I\subset\mathbb R$ be a nonempty common time interval, and let $(X,\mathcal X)$ be a specified measurable state or path space. An exact selected solution map is a supplied measurable map $S:\Theta\to X$ whose values solve the specified mathematical model on $I$. The equation, solution class and admissible input set are supplied as data; a smooth uniqueness theorem may identify a single-valued map, but measurability is a separate required hypothesis. In a nonunique weak theory an actual measurable selection must be given before taking a pushforward law; this definition asserts no selection theorem. More generally a supplied measurable random state is allowed without any PDE interpretation. A real observable is a map $J:X\to\mathbb R$ such that $Y:=J\circ S$ is measurable. It is integrable or square-integrable when $\mathbb E_\mu|Y|<\infty$ or $\mathbb E_\mu Y^2<\infty$, respectively.

For a nonempty set $H$ of numerical settings, supplied measurable numerical composites $Y_h=J_h\circ S_h$ define approximate outputs on the same input law; the maps $S_h$ may take values in specified approximation spaces $X_h$, with $J_h:X_h\to\mathbb R$. When $Y,Y_h$ are integrable, define $\theta=\mathbb E_\mu Y$, $\theta_h=\mathbb E_\mu Y_h$ and signed mean bias $b_h=\theta_h-\theta$. Output variances require finite second moments. This definition implies neither IID sampling nor numerical convergence, a bias bound, or physical applicability. All exact and approximate outputs must use the same declared scalar unit before forming their bias.

The finite-second-moment spatial velocity law and sensor are included by taking $X=H_D=L^2(D;\mathbb R^d)$ with its norm-Borel sigma-algebra and $J=S_\psi$, a representative-independent bounded linear sensor. Its pairing lemma gives measurability and a finite second moment under the stated velocity law. This use is on quotient classes and requires no measurable choice of pointwise representatives. In the general separable Banach-state branch, bounded linear sensors have the same measurability and moment property by their operator bounds. Time-series sampling, a Markov chain, and mixing remain additional assumptions; dependent consecutive readings are not IID merely because this definition applies.

The earlier pointwise-field formulation is also included: let $d_s\in\{2,3\}$, let $D\subseteq\mathbb R^{d_s}$ be nonempty and Lebesgue-measurable, and let $(\mathscr V,\mathcal V)$ be any specified measurable space of product-measurable fields $u:D\times I\to\mathbb R^{d_s}$. Use $X=\mathscr V$, a supplied measurable random-field map, and measurable scalar composites. Passing from an $L^2$ class to such a pointwise random field requires a supplied jointly measurable representative; it is not part of the quotient-sensor specialization. Velocity components use one fixed velocity unit, and sensor weights carry the corresponding integral units.

## Definition references

[[def-fd-random-velocity-sensor-law]]

[[lem-fd-sensor-pairing-is-well-defined]]

[Art B. Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 2](https://artowen.su.domains/mc/Ch-intro.pdf)

[Olivier Le Maître and Omar Knio, *Introduction to Uncertainty Quantification*, DTU lecture notes](https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf)

[NASA Glenn Research Center, *Uncertainty and Error in CFD Simulations*](https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html)
