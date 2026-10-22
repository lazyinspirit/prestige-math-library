---
id: ex-gr-fx05-2
kind: example
title: "Static supertranslation shear without Bondi news"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: "A formal boundary-data example with an exact flat seed and finite shear action; it distinguishes shear from news and does not claim a full transformed vacuum metric or observation."
deps:
  - def-gr-fx-bondi-expansion
  - def-gr-fx-bms-supertranslation
  - lem-gr-fx-bondi-mass-coefficient
  - def-countable-choice
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
  def-gr-fx-bms-supertranslation: mathematical-premise
  lem-gr-fx-bondi-mass-coefficient: formulation-prerequisite
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
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §4, Eqs. (78)-(80), finite retarded-time supertranslations and asymptotic shear"
      url: "https://arxiv.org/pdf/1609.01731"
verification:
  precheck: pending
---

## Example

Let $q_{AB}$ be the unit round metric on $S^2$, $D_A$ its Levi-Civita derivative, and $d\Omega$ its area form. On $I=\mathbb R$ and $r>r_0>0$, with $r_0$ a length, the exact flat Bondi metric is $g_0=-du^2-2du\,dr+r^2q_{AB}dx^A dx^B$; its shear, news and mass aspect are $C_{AB}=N_{AB}=m=0$. Let $m_B(u)=\tfrac1{4\pi}\int_{S^2}m(u,x)\,d\Omega$. Let $Y(x)=\tfrac12(3x_3^2-1)$ on $S^2$, set $f=aY$ for a nonzero length $a$, and use the finite active boundary action $C^{(f)}_{AB}(u,x)=C_{AB}(u+f(x),x)-2D_AD_Bf+q_{AB}D^CD_Cf$, $N^{(f)}_{AB}(u,x)=N_{AB}(u+f(x),x)$. It gives $C^{(f)}_{AB}=-2aT_{AB}$, where $T_{AB}=D_AD_BY-\tfrac12q_{AB}D^2Y$, and $N^{(f)}_{AB}=0$. Treat these as formal boundary data with $m=0$ and impose the local coefficient constraint $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$. Then $m_B=0$, $dm_B/du=0$, and $\Delta C_{AB}=0$ on every retarded-time interval, where $\Delta C_{AB}=C_{AB}(u_2,x)-C_{AB}(u_1,x)$ for $u_1<u_2$. No full finite-transformed vacuum metric is asserted. A nonzero shear value alone therefore does not imply nonzero news or a nonzero shear difference.

## Example references

[[def-gr-fx-bondi-expansion]]

[[def-gr-fx-bms-supertranslation]]

[[lem-gr-fx-bondi-mass-coefficient]]

## Facts & Assumptions

**Given:** The exact flat Bondi end and boundary data in the Example, the finite active boundary shear action of [[def-gr-fx-bms-supertranslation]], and the stipulated local coefficient constraint whose vacuum-expansion version is established in [[lem-gr-fx-bondi-mass-coefficient]].

[F1] The angular metric $q$ is positive definite, $D$ is its Levi-Civita derivative, and the news is $N_{AB}=\partial_uC_{AB}$ ([[def-gr-fx-bondi-expansion]]).

[F2] In the fixed Bondi frame the finite active boundary action is $C^{(f)}_{AB}(u,x)=C_{AB}(u+f(x),x)-2D_AD_Bf+q_{AB}D^2f$ and $N^{(f)}_{AB}(u,x)=N_{AB}(u+f(x),x)$ on its stated domain ([[def-gr-fx-bms-supertranslation]]).

[F3] The local mass-aspect equation $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$ is imposed on the formal boundary data; it is the coefficient proved under the stronger smooth-vacuum hypotheses of [[lem-gr-fx-bondi-mass-coefficient]].

[A1] Countable Choice $\mathrm{AC}_\omega$ is the inherited smooth Lorentzian sphere-bundle convention; full Choice is not used ([[def-countable-choice]]).

## Verification

**Given:** [F1]–[F3] and [A1].

1.1 The restriction $Y=\tfrac12(3x_3^2-1)$ is smooth on the sphere because it is the restriction of a polynomial. Put $T_{AB}:=D_AD_BY-\tfrac12q_{AB}D^2Y$. Its trace is zero. At $\theta=\pi/2$, $D_\theta D_\theta Y=3$, $D_\phi D_\phi Y=0$ and $D^2Y=3$, so $T_{\theta\theta}=3/2$; hence $T$ is nonzero. [A1, F1, given, algebra]

2.1 With $t=u+r$, the metric $g_0=-du^2-2du\,dr+r^2q$ becomes $-dt^2+dr^2+r^2q$, the Minkowski metric in spherical spatial coordinates. Thus its Bondi data are exactly $C_{AB}=N_{AB}=m=0$. Since $f=aY$ is independent of $u$, [F2] gives $C^{(f)}_{AB}= -2aD_AD_BY+a q_{AB}D^2Y=-2aT_{AB}$ and $N^{(f)}_{AB}=0$. We use only these as formal boundary data; we do not assert that they are the coefficients of a finite transformed vacuum metric. [F1, F2, step 1.1, algebra]

3.1 Set $m(u,x)=0$ for the formal data. With $N_{AB}=0$, [F3] is satisfied and $m_B(u)=\tfrac1{4\pi}\int_{S^2}m\,d\Omega=0$, so $dm_B/du=0$. The shear $C^{(f)}_{AB}=-2aT_{AB}$ is independent of $u$, hence $\Delta C_{AB}=0$ on every interval. These conclusions follow directly from the stipulated data and constraint; neither vacuum mass-loss nor the memory proposition is invoked. [F3, step 2.1, algebra] ∎
