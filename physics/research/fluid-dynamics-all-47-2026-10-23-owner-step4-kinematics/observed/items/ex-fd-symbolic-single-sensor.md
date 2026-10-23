---
id: ex-fd-symbolic-single-sensor
kind: example
title: One weighted sensor for one constant velocity mode
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 4
domain: physics
library: physics
deps:
  - def-fd-quantity-and-frame-conventions
  - def-fd-random-velocity-sensor-law
  - lem-fd-sensor-pairing-is-well-defined
  - post-fd-fluid-observation-and-noise
  - pthm-fd-conditional-fluid-filter-law
  - def-axiom-of-choice
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-random-velocity-sensor-law: formulation-prerequisite
  lem-fd-sensor-pairing-is-well-defined: mathematical-premise
  post-fd-fluid-observation-and-noise: physical-assumption
  pthm-fd-conditional-fluid-filter-law: physical-result
  def-axiom-of-choice: mathematical-premise
physical_scope: >-
  Symbolic one-mode calculation inside the adopted finite-modal,
  linear-Gaussian fluid observation model, with one ideal weighted spatial
  velocity sensor. The datum is a model variable, not a reported measurement;
  no claim about an actual flow or instrument is made.
empirical_premises: []
axiom_use: >-
  Assume AC as in the finite Gaussian-law construction and the supplied
  conditional-filter result; the scalar calculation adds no choice principle.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction"
      url: "https://arxiv.org/pdf/1506.07825v1"
      locator: "Chapter 2 §2.1, printed pp. 25–26, stochastic state and additive observation model; Chapter 4 §4.1, printed pp. 78–80, scalar Kalman update as a special case."
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Cambridge University Press, 2013"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4 §4.3, printed pp. 56–59, Gaussian observation update and scalar random-walk example."
verification:
  precheck: pending
---

## Example

Assume the Axiom of Choice (AC), meaning every family of nonempty sets has a choice function, for the finite Gaussian-law construction in the adopted model. Let $D\subset\mathbb R^3$ be bounded and Lebesgue measurable in SI spatial coordinates, with volume $V=|D|>0$ measured in m$^3$, and let $e\in\mathbb R^3$ be a fixed unit vector. Define the dimensionless constant modal field $\phi:D\to\mathbb R^3$ and the sensor weight $\psi:D\to\mathbb R^3$ by $\phi(x)=e$ and $\psi(x)=e/V$ for $x\in D$; the weight has units m$^{-3}$. Define the ideal weighted spatial sensor $S_\psi:L^2(D;\mathbb R^3)\to\mathbb R$ by
$$S_\psi(v):=\int_D v(x)\cdot\psi(x)\,d^3x.$$
Then $\phi,\psi\in L^2(D;\mathbb R^3)$ and $S_\psi(\phi)=1$, a dimensionless response. Let the scalar modal coefficient have prior law $a_0\sim N(\mu,P)$, where $N(\mu,P)$ denotes the scalar Gaussian law with mean $\mu$ and variance $P$, including $P=0$, with $\mu$ in m s$^{-1}$ and $P\ge0$ in (m s$^{-1}$)$^2$. Set the dimensionless transition $F_1=1$, zero process covariance $Q_1=0$ in (m s$^{-1}$)$^2$, and zero process noise $q_1=0$ in m s$^{-1}$, so $a_1=F_1a_0+q_1=a_0$. Take observation noise $r_1\sim N(0,R)$ with $R>0$ in (m s$^{-1}$)$^2$, independent of $a_0$ and $q_1$. The represented velocity is $U_1(x)=a_1e$ for $x\in D$ and the single observation is $y_1=a_1+r_1$ in m s$^{-1}$. The exact one-step filter outputs
$$m_{1|1}=\mu+\frac{P}{P+R}(y_1-\mu),\qquad P_{1|1}=\frac{PR}{P+R}.$$
This is a symbolic model calculation, including the deterministic-prior case $P=0$; it records no measured fluid data.

## Example references

[[def-fd-random-velocity-sensor-law]]

[[lem-fd-sensor-pairing-is-well-defined]]

[[post-fd-fluid-observation-and-noise]]

[[pthm-fd-conditional-fluid-filter-law]]

[Law, Stuart, and Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 2 §2.1 and Chapter 4 §4.1](https://arxiv.org/pdf/1506.07825v1)

[Särkkä, Bayesian Filtering and Smoothing, Chapter 4 §4.3](https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf)

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** A finite-volume region $D$ of volume $V>0$, a unit vector $e$, the one-mode field $\phi(x)=e$ and sensor weight $\psi(x)=e/V$ for $x\in D$, prior $a_0\sim N(\mu,P)$ with $P\ge0$, transition $F_1=1$ with $q_1=0$, and independent observation noise $r_1\sim N(0,R)$ with $R>0$.

[A1] Assume AC, meaning every family of nonempty sets has a choice function, for the Gaussian-law construction. [[def-axiom-of-choice]]

[F1] A weighted sensor on $L^2(D;\mathbb R^3)$ is the integral $S_\psi(v)=\int_Dv\cdot\psi\,d^3x$, and it is not a point evaluation. [[def-fd-random-velocity-sensor-law]]

[F2] The sensor pairing is finite, representative-independent, and linear for all $v,\psi\in L^2(D;\mathbb R^3)$. [[lem-fd-sensor-pairing-is-well-defined]]

[F3] The adopted model defines the observation matrix entry as $H_{1,11}=S_\psi(\phi)$; the example chooses $F_1=1$ and $q_1=0$. [[post-fd-fluid-observation-and-noise]]

[F4] Under these hypotheses and positive-definite innovation, the exact conditional field law is the pushforward of the coefficient Kalman law. [[pthm-fd-conditional-fluid-filter-law]]

[F5] The fixed Cartesian inertial chart uses SI time and spatial units; fluid velocity has units m s$^{-1}$. [[def-fd-quantity-and-frame-conventions]]

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 Since $|e|=1$, $\|\phi\|_{L^2}^2=\int_D|e|^2\,d^3x=V<\infty$ and $\|\psi\|_{L^2}^2=\int_D|e/V|^2\,d^3x=1/V<\infty$. Linearity of the sensor integral gives
$$S_\psi(\phi)=\int_D e\cdot(e/V)\,d^3x=V/V=1,$$
so the scalar observation matrix is $H_1=1$. [F1, F2, F3, F5, given, algebra]

2.1 The chosen state transition and process noise give forecast mean $m_{1|0}=\mu$ and variance $P_{1|0}=P$. Thus the innovation covariance is $S_1=H_1P_{1|0}H_1^T+R=P+R>0$, the gain is $K_1=P/(P+R)$, and the covariance update is
$$P_{1|1}=P-\frac{P^2}{P+R}=\frac{PR}{P+R}.$$
Substituting $v_1=y_1-\mu$ into the mean update gives the displayed $m_{1|1}$. These formulas hold at $P=0$ as well because $R>0$. [F3, given, step 1.1, algebra]

3.1 Apply [F4] to the same one-step model: the conditional field law is the pushforward of $N(m_{1|1},P_{1|1})$ under $a\mapsto ae$. Therefore the symbolic update in the Example is the exact conditional law within this finite model, not an empirical claim about a measured flow. [A1, F4, step 2.1, given] ∎

