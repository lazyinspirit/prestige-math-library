---
id: ex-gr-fx05-2
kind: example
title: "Static supertranslation shear without Bondi news"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
physical_scope: "A formal infinitesimal Bondi-boundary example; it distinguishes a shear value from radiative news and asserts no measurement or global spacetime solution."
deps:
  - def-gr-fx-bondi-expansion
  - def-gr-fx-bms-supertranslation
  - lem-gr-fx-bondi-mass-coefficient
  - prop-gr-fx-bondi-mass-loss
  - prop-gr-fx-memory-integral
  - def-countable-choice
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
  def-gr-fx-bms-supertranslation: mathematical-premise
  lem-gr-fx-bondi-mass-coefficient: mathematical-premise
  prop-gr-fx-bondi-mass-loss: mathematical-premise
  prop-gr-fx-memory-integral: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and Gauge Theory, Princeton University Press (2018), full lecture notes arXiv:1703.05448: §5.2.1, Eqs. (5.2.4)-(5.2.6), and §6, Eqs. (6.0.4)-(6.0.5)"
      url: "https://arxiv.org/pdf/1703.05448"
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §4, finite supertranslations and asymptotic shear"
      url: "https://arxiv.org/pdf/1609.01731"
verification:
  precheck: pending
---

## Example

Let $Y(x)=\tfrac12(3x_3^2-1)$ on $S^2$, set $f=aY$ for a nonzero length $a$, and consider the infinitesimal supertranslation shear $C_{AB}:=\delta_fC_{AB}=-2D_AD_Bf+q_{AB}D^CD_Cf$ of flat Bondi data. This shear is time-independent and nonzero, but $N_{AB}=\partial_uC_{AB}=0$, so the vacuum mass-loss law gives $dm_B/du=0$ and the classical memory integral gives $\Delta C_{AB}=0$ on every retarded-time interval. A shear value alone is therefore not radiated power or memory.

## Example references

[[def-gr-fx-bondi-expansion]]

[[def-gr-fx-bms-supertranslation]]

[[lem-gr-fx-bondi-mass-coefficient]]

[[prop-gr-fx-bondi-mass-loss]]

[[prop-gr-fx-memory-integral]]

## Facts & Assumptions

**Given:** The formal Bondi shear and news of [[def-gr-fx-bondi-expansion]], the infinitesimal supertranslation action of [[def-gr-fx-bms-supertranslation]], and the vacuum mass-aspect, mass-loss and memory results of [[lem-gr-fx-bondi-mass-coefficient]], [[prop-gr-fx-bondi-mass-loss]] and [[prop-gr-fx-memory-integral]].

[F1] The angular metric $q$ is positive definite, $D$ is its Levi-Civita derivative, and the news is $N_{AB}=\partial_uC_{AB}$ ([[def-gr-fx-bondi-expansion]]).

[F2] In a fixed Bondi frame the infinitesimal shear action is $\delta_fC_{AB}=fN_{AB}-2D_AD_Bf+q_{AB}D^2f$ ([[def-gr-fx-bms-supertranslation]]).

[F3] The vacuum mass-aspect equation is $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$ ([[lem-gr-fx-bondi-mass-coefficient]]).

[F4] The integrated mass loss is $dm_B/du=-\tfrac1{32\pi}\int_{S^2}N_{AB}N^{AB}\,d\Omega$ ([[prop-gr-fx-bondi-mass-loss]]).

[F5] The shear difference is $\Delta C_{AB}=\int_{u_1}^{u_2}N_{AB}\,du$ and the leading detector displacement is proportional to $\Delta C_{AB}$ under the endpoint and large-radius hypotheses ([[prop-gr-fx-memory-integral]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the inherited smooth Lorentzian sphere-bundle convention; full Choice is not used ([[def-countable-choice]]).

## Verification

**Given:** [F1]–[F5] and [A1].

1.1 The restriction $Y=\tfrac12(3x_3^2-1)$ is smooth on the sphere because it is the restriction of a polynomial. Put $T_{AB}:=D_AD_BY-\tfrac12q_{AB}D^2Y$. Its trace is zero. At $\theta=\pi/2$, $D_\theta D_\theta Y=3$, $D_\phi D_\phi Y=0$ and $D^2Y=3$, so $T_{\theta\theta}=3/2$; hence $T$ is nonzero. [A1, F1, given, algebra]

2.1 Since $Y$ is independent of $u$, [F2] gives $C_{AB}=\delta_fC_{AB}=-2aT_{AB}$, independent of $u$ and nonzero; [F1] then gives $N_{AB}=0$. The data are formal infinitesimal boundary data, so no nonlinear finite transformation is asserted. [F1, F2, step 1.1, algebra]

3.1 Substitution of $N_{AB}=0$ in [F3] gives $\partial_um=0$, and [F4] gives $dm_B/du=0$. For every $u_1<u_2$, [F5] gives $\Delta C_{AB}=\int_{u_1}^{u_2}0\,du=0$ and hence zero leading memory displacement. Thus the static nonzero shear has no news flux and no shear change. [F3, F4, F5, step 2.1, algebra] ∎
