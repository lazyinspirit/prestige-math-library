---
id: prop-gr-fx-bondi-mass-loss
kind: proposition
title: "Integrated vacuum Bondi mass loss"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: "A conditional consequence of the smooth Ricci-flat Bondi expansion; the mass monotonicity is a model deduction and not evidence that a physical system satisfies the hypotheses."
deps:
  - def-gr-fx-bondi-expansion
  - lem-gr-fx-bondi-mass-coefficient
  - def-countable-choice
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
  lem-gr-fx-bondi-mass-coefficient: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §3, Eqs. (60)-(61), with the mass-aspect equation (58)"
      url: "https://arxiv.org/pdf/1609.01731"
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and Gauge Theory, Princeton University Press (2018), full lecture notes arXiv:1703.05448: §5.2.1, Eqs. (5.2.8)-(5.2.9)"
      url: "https://arxiv.org/pdf/1703.05448"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice for the smooth Lorentzian sphere-bundle convention of [[def-gr-fx-bondi-expansion]]. Let a smooth vacuum Bondi expansion be defined on an open retarded-length interval $I$. Then

$$\frac{dm_B}{du}=-\frac1{32\pi}\int_{S^2}N_{AB}N^{AB}\,d\Omega\le0.$$

If $dm_B/du=0$ throughout an open subinterval $J\subset I$ and $N_{AB}$ is continuous on $J\times S^2$, then $N_{AB}=0$ on $J\times S^2$.

## Statement references

[[def-gr-fx-bondi-expansion]]

[[lem-gr-fx-bondi-mass-coefficient]]

## Facts & Assumptions

**Given:** The smooth vacuum Bondi expansion of [[def-gr-fx-bondi-expansion]] on $I$, with $m_B=\frac1{4\pi}\int_{S^2}m\,d\Omega$ and $N_{AB}=\partial_uC_{AB}$, and the mass-aspect equation of [[lem-gr-fx-bondi-mass-coefficient]].

[F1] The unit round metric $q_{AB}$ is positive definite on every angular tangent plane, $d\Omega$ is its area form on the compact boundaryless sphere $S^2$, and the sphere covariant derivative is $D_A$ ([[def-gr-fx-bondi-expansion]]).

[F2] The mass aspect obeys $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$ in the vacuum expansion ([[lem-gr-fx-bondi-mass-coefficient]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the inherited smooth tangent-bundle convention; full Choice is not assumed or used ([[def-countable-choice]]).

## Proof

**Given:** [F1]–[F2] and [A1].

1.1 For fixed $u\in I$, define the smooth sphere vector field $X^A:=D_BN^{AB}$. In standard spherical coordinates $q=d\theta^2+\sin^2\theta\,d\phi^2$, its divergence satisfies $D_AX^A\,d\Omega=\{\partial_\theta(\sin\theta X^\theta)+\partial_\phi(\sin\theta X^\phi)\}\,d\theta\,d\phi$. The $\phi$-boundary terms cancel by periodicity. Smoothness makes $X^\theta$ bounded in norm near each pole, so $\sin\theta X^\theta\to0$ at $\theta=0,\pi$; hence $\int_{S^2}D_AD_BN^{AB}\,d\Omega=0$. [A1, F1, given, algebra]

1.2 Smoothness on each compact $u$-slab permits differentiation under the finite sphere integral: for small $h$, the difference quotient for $m_B$ equals $\frac1{4\pi}\int_{S^2}\int_0^1\partial_um(u+th,x)\,dt\,d\Omega$, and uniform continuity of $\partial_um$ makes it converge uniformly in $x$ to $\frac1{4\pi}\partial_um(u,x)$. Therefore $\frac{dm_B}{du}=\frac1{4\pi}\int_{S^2}\partial_um\,d\Omega$. [F1, given, algebra]

2.1 Substitute [F2] into step 1.2 and use step 1.1 to eliminate the double divergence. The remaining term is $-\frac1{32\pi}\int_{S^2}N_{AB}N^{AB}\,d\Omega$, proving the equality. Since $q$ is positive definite, $N_{AB}N^{AB}=|N|_q^2\ge0$ pointwise, proving the inequality. [F1, F2, step 1.1, step 1.2, algebra]

3.1 If $dm_B/du=0$ at a fixed $u\in J$, step 2.1 gives the integral of the continuous nonnegative function $|N|_q^2$ equal to zero. If $N$ were nonzero at some point, continuity and positive definiteness of $q$ would make $|N|_q^2$ strictly positive on a sphere neighborhood of positive area, contradicting the zero integral. Thus $N=0$ on that cut; applying this to every $u\in J$ proves the final claim. [F1, step 2.1, given, algebra] ∎

## Remarks

In the SI reading of [[def-gr-fx-bondi-expansion]], $u=ct_{\mathrm{ret}}$, $m_B$ is a length, and $E_B=(c^4/G_N)m_B$ is the geometric Bondi energy. Therefore

$$\frac{dE_B}{dt_{\mathrm{ret}}}=-\frac{c^5}{32\pi G_N}\int_{S^2}N_{AB}N^{AB}\,d\Omega.$$

This is a derived prediction of the adopted smooth vacuum model. It supplies no empirical measurement or evidence by itself.
