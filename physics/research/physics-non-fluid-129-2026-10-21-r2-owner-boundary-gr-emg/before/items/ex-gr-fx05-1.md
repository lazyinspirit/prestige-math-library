---
id: ex-gr-fx05-1
kind: example
title: "A compact Bondi-news pulse with prescribed shear memory"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
physical_scope: "An explicit formal Bondi-boundary data example satisfying the local vacuum mass-aspect constraint; it is not a reported wave or a proof of global vacuum-spacetime existence."
deps:
  - def-gr-fx-bondi-expansion
  - lem-gr-fx-bondi-mass-coefficient
  - prop-gr-fx-bondi-mass-loss
  - prop-gr-fx-memory-integral
  - def-countable-choice
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
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
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §3, Eqs. (58), (60)-(61)"
      url: "https://arxiv.org/pdf/1609.01731"
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and Gauge Theory, Princeton University Press (2018), full lecture notes arXiv:1703.05448: §§5.2.1 and 6"
      url: "https://arxiv.org/pdf/1703.05448"
verification:
  precheck: pending
---

## Example

Let $Y(x)=\tfrac12(3x_3^2-1)$ on the unit sphere $S^2\subset\mathbb R^3$, and set $T_{AB}=D_AD_BY-\tfrac12q_{AB}D^CD_CY$. Let $g\in C_c^\infty(\mathbb R)$ be nonnegative, supported on $[-1,1]$, and normalized by $\int g(u)\,du=1$; choose a nonzero length $a$, and put $H(u)=\int_{-\infty}^u g(v)\,dv$, $C_{AB}(u,x)=aH(u)T_{AB}(x)$ and $N_{AB}=\partial_uC_{AB}=ag(u)T_{AB}$. With the mass aspect defined by the local vacuum coefficient equation and initial value $m(-1,x)=0$, these data have $\Delta C_{AB}=aT_{AB}$ and

$$m_B(1)-m_B(-1)=-\frac{a^2}{32\pi}\left(\int_{-1}^{1}g(u)^2\,du\right)\left(\int_{S^2}T_{AB}T^{AB}\,d\Omega\right)<0.$$

In the stated leading large-radius linear detector approximation, the same pulse gives $\Delta s^A=\tfrac{a}{2r}T^A{}_Bs^B+O(r^{-2}|s|)+O(\varepsilon^2|s|)$ for initially comoving screen separation $s^A$ and $\varepsilon=\sup|C/r|$.

## Example references

[[def-gr-fx-bondi-expansion]]

[[lem-gr-fx-bondi-mass-coefficient]]

[[prop-gr-fx-bondi-mass-loss]]

[[prop-gr-fx-memory-integral]]

## Pulse schematic

The blue curve indicates a smooth compactly supported news pulse and the green curve indicates its time integral. The curves are schematic; all identities are verified from the explicit definitions in the Example and Verification.

```tikz
\begin{tikzpicture}[>=stealth,x=1.1cm,y=1.0cm]
  \draw[->] (-2.1,0) -- (2.2,0) node[right] {$u$};
  \draw[->] (-2,0) -- (-2,1.25) node[above] {$g(u)$};
  \draw[blue,thick] plot[smooth] coordinates {(-2,0) (-1.3,0) (-1.05,0.18) (-0.8,0.62) (-0.5,0.95) (0,1.08) (0.5,0.95) (0.8,0.62) (1.05,0.18) (1.3,0) (2,0)};
  \draw[green!60!black,thick] plot[smooth] coordinates {(-2,0) (-1.3,0) (-1.05,0.03) (-0.8,0.14) (-0.5,0.32) (0,0.5) (0.5,0.68) (0.8,0.86) (1.05,0.97) (1.3,1) (2,1)};
  \node[blue] at (1.6,0.55) {$g$};
  \node[green!60!black] at (1.7,1.08) {$H(u)=\int_{-\infty}^u g$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The formal smooth vacuum Bondi data of [[def-gr-fx-bondi-expansion]], the mass-aspect coefficient equation of [[lem-gr-fx-bondi-mass-coefficient]], the integrated mass-loss proposition [[prop-gr-fx-bondi-mass-loss]], and the leading displacement result [[prop-gr-fx-memory-integral]]. Work on the retarded interval $[-1,1]$.

[F1] $q_{AB}$ is positive definite, $D$ is its Levi-Civita derivative, and $d\Omega$ is the finite area measure on the unit sphere; a Bondi shear is a symmetric trace-free smooth sphere tensor and $N_{AB}=\partial_uC_{AB}$ ([[def-gr-fx-bondi-expansion]]).

[F2] The local mass-aspect and integrated mass-loss equations are $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$ and $\Delta m_B=-\tfrac1{32\pi}\int N_{AB}N^{AB}\,du\,d\Omega$ ([[lem-gr-fx-bondi-mass-coefficient]], [[prop-gr-fx-bondi-mass-loss]]).

[F3] If the news vanishes at both endpoints, an initially comoving screen Jacobi separation has leading change $\Delta s^A=\tfrac1{2r}\Delta C^A{}_Bs^B+O(r^{-2}|s|)+O(\varepsilon^2|s|)$ under the stated local approximation ([[prop-gr-fx-memory-integral]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is inherited for the smooth Lorentzian and sphere-bundle conventions; no full Axiom of Choice is used ([[def-countable-choice]]).

[A2] $a\ne0$ is a prescribed length; the local expansion and detector calculations remain formal Bondi-boundary data and do not assert a complete spacetime or an observation.

## Verification

**Given:** [F1]–[F3] and [A1]–[A2].

1.1 The scalar $Y$ is smooth because it is the restriction of a polynomial on $\mathbb R^3$. By contraction, $q^{AB}T_{AB}=D^2Y-\tfrac12(2)D^2Y=0$. In spherical coordinates at the equator $\theta=\pi/2$, $D_\theta D_\theta Y=3$, $D_\phi D_\phi Y=0$, and $D^2Y=3$, so $T_{\theta\theta}=3/2\ne0$. Thus $T$ is a nonzero smooth trace-free tensor. [A1, F1, given, algebra]

1.2 Define $b(u)=e^{-1/(1-u^2)}$ for $|u|<1$ and $b(u)=0$ for $|u|\ge1$, let $Z=\int_{-1}^{1}b(u)\,du>0$, and set $g=b/Z$. Every derivative of the interior formula is a polynomial in $(1-u^2)^{-1}$ and $u$ times $e^{-1/(1-u^2)}$, which tends to zero at both endpoints; hence the zero extension is smooth on $\mathbb R$, has support $[-1,1]$, is nonnegative, and has integral one. The function $H(u)=\int_{-\infty}^u g$ is smooth, equals $0$ for $u\le-1$, equals $1$ for $u\ge1$, and $H'=g$. [given, construct, algebra]

2.1 The fields $C_{AB}=aHT_{AB}$ and $N_{AB}=agT_{AB}$ are smooth and trace-free, and $N=\partial_uC$. Therefore $\Delta C_{AB}=aT_{AB}$ by the normalization $\int g=1$. Define $m(u,x)$ from $m(-1,x)=0$ by integrating the right side of the local mass-aspect equation in [F2]; its integrand is smooth, so this gives smooth formal Bondi mass-aspect data satisfying that constraint. [F1, F2, step 1.1, step 1.2, A2, construct, algebra]

2.2 Applying [F2] over $[-1,1]$ gives the displayed mass change. The first integral is positive because $g$ is continuous and has unit integral; the sphere integral is positive because $q$ is positive definite and $T$ is continuous and nonzero by step 1.1. Since $a\ne0$, the mass change is strictly negative. [A2, F1, F2, step 1.1, step 1.2, algebra]

3.1 The pulse has $N(-1)=N(1)=0$, so [F3] applies. Its integrated shear change is $\Delta C=aT$, hence the leading detector displacement is $\Delta s^A=\tfrac{a}{2r}T^A{}_Bs^B+O(r^{-2}|s|)+O(\varepsilon^2|s|)$, with exactly the stated finite-radius and nonlinear qualifications. [F3, step 2.1, A2, algebra] ∎
