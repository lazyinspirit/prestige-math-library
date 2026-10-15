---
id: def-critical-detection-and-quantification-levels
kind: definition
title: "Critical, detection, and quantification levels"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-statistical-experiment
  - def-random-element-and-real-random-variable
  - def-randomized-test
  - def-test-size-and-power
  - def-moments-variance-and-covariance
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-borel-sigma-algebra
  - cor-expectation-of-an-indicator-is-probability
  - lem-probability-measure-basic-identities
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A Century of Excellence in Measurements, Standards, and Technology: A Chronicle of Selected NBS/NIST Publications 1901–2000, NIST SP 958, pp. 177–179 (printed pp. 164–166)"
      url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication958.pdf"
    - title: "H. Cantwell (ed.), Eurachem Guide: The Fitness for Purpose of Analytical Methods, 3rd ed. (2025), §5.3.1"
      url: "https://www.eurachem.org/images/stories/Guides/pdf/MV_guide_3rd_ed_V1_EN.pdf"
---

## Definition

Let $C=[0,\infty)$ be a concentration parameter set and let
$$\mathsf E=((\mathbb R,\mathcal B(\mathbb R)),C,(P_c)_{c\in C})$$
be a statistical experiment ([[def-statistical-experiment]]). The response
$X(x)=x$ is a real random variable ([[def-random-element-and-real-random-variable]])
with law $P_c$ at concentration $c$; $P_0$ is the blank law. Since each
$(t,\infty)$ is open, it is Borel ([[def-borel-sigma-algebra]]), so the
indicator rule below is measurable. For a
threshold $t\in\mathbb R$, the positive-decision rule is
$\varphi_t(x)=\mathbf 1_{\{x>t\}}$. Its blank false-positive probability is
$P_0(X>t)$, and its false-negative probability at $c>0$ is $P_c(X\le t)$.
These are the null rejection probability and one minus the power for the
simple null $\{0\}$ and point alternative $\{c\}$
([[def-randomized-test]], [[def-test-size-and-power]],
[[cor-expectation-of-an-indicator-is-probability]],
[[lem-probability-measure-basic-identities]]).

For a target $\alpha\in(0,1)$, an **exact critical level** $L_C$ is a
threshold satisfying
$$P_0(X>L_C)=\alpha.$$
A threshold with probability at most $\alpha$ is an $\alpha$-level threshold;
equality need not be attainable for a discrete response. For a target
$\beta\in(0,1)$, a **detection limit** $L_D$ is the least $c>0$ satisfying
$$P_c(X\le L_C)=\beta,$$
when such a least concentration exists. Thus $L_C$ is measured in response
units, whereas $L_D$ is measured in concentration units.

When $0<E_c[X]<\infty$ and $\operatorname{Var}_c(X)<\infty$, the
**coefficient of variation** is
$$\operatorname{CV}(c):=\frac{\sqrt{\operatorname{Var}_c(X)}}{E_c[X]}.$$
Expectation under $P_c$ is as in
[[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and
variance has the meaning in [[def-moments-variance-and-covariance]].
For a declared tolerance $k_Q>0$, a **quantification limit** $L_Q$ is the
least $c>0$ satisfying $\operatorname{CV}(c)\le k_Q$, when such a least
concentration exists. This definition does not make the three limits
universal: each is tied to the response law and the stated error or precision
criterion.

## Remarks

The measurement procedure and its observation law must include any blank
correction used in routine reporting. A below-threshold report is an event
such as $X\le L_C$; its likelihood contribution is determined by the declared
measurement law, not by substituting $L_C$ as though it were an observed
response.
