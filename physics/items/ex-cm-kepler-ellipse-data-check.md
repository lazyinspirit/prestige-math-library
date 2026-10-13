---
id: ex-cm-kepler-ellipse-data-check
kind: example
title: "An exact Kepler ellipse check: $e=1/2$, $J=1$, $\\mu=\\kappa=1$ give
  $a=4/3$, $b=2\\sqrt3/3$, $E=-3/8$ and $T^2=256\\pi^2/27$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps:
  [
    thm-cm-kepler-conic-and-eccentricity,
    thm-cm-kepler-ellipse-geometry,
    thm-cm-kepler-orbit-period,
    def-cm-central-force-trajectory,
    thm-of-square-roots,
    cor-trigonometric-parity-and-pythagorean-identity,
    def-interval,
    def-countable-choice
  ]
dependency_roles:
  thm-cm-kepler-conic-and-eccentricity: mathematical-premise
  thm-cm-kepler-ellipse-geometry: mathematical-premise
  thm-cm-kepler-orbit-period: mathematical-premise
  def-cm-central-force-trajectory: mathematical-premise
  thm-of-square-roots: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics,
        §3.4, Eqs. (3.59)-(3.65): the eccentricity, semimajor axis and period
        relations checked numerically here with exact rational data"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as required by the ellipse-area and period suppliers;
the conic-and-eccentricity theorem does not impose this hypothesis.

Take the attractive Kepler data $\mu=\kappa=1$ and angular momentum magnitude
$J=1$, and consider the negative-energy orbit with eccentricity $e=\frac12$.
Then the conic data of [[thm-cm-kepler-conic-and-eccentricity]] and
[[thm-cm-kepler-ellipse-geometry]] are
$$p=\frac{J^2}{\mu\kappa}=1,\qquad a=\frac{p}{1-e^2}=\frac43,\qquad b=a\sqrt{1-e^2}=\frac{2\sqrt3}{3},$$
the energy is $E=\dfrac{\mu\kappa^2}{2J^2}(e^2-1)=-\dfrac38$, and the period of
[[thm-cm-kepler-orbit-period]] satisfies
$$T=\frac{2\pi\mu ab}{J}=\frac{16\pi\sqrt3}{9},\qquad T^2=\frac{256\pi^2}{27}=\frac{4\pi^2\mu a^3}{\kappa}.$$
All numbers are exact; the example checks algebraic consistency of the three
theorems and the sign criterion $E<0\iff e<1$, and makes no empirical claim.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. $\mu=\kappa=1$, $J=1$, $e=\frac12$ and the derived constants $p=1$, $a=\frac43$, $b=\frac{2\sqrt3}{3}$.

[L1] Conic and eccentricity: for a non-radial attractive Kepler trajectory with $E<0$, $p=J^2/(\mu\kappa)$, $a=p/(1-e^2)$, $b=a\sqrt{1-e^2}$ and $E=(\mu\kappa^2/2J^2)(e^2-1)$ ([[thm-cm-kepler-conic-and-eccentricity]], [[thm-cm-kepler-ellipse-geometry]], [[def-cm-central-force-trajectory]]).

[L2] Period: $T=2\pi\mu ab/J$ and $T^2=4\pi^2\mu a^3/\kappa$ ([[thm-cm-kepler-orbit-period]]).

[L3] Square roots: $\sqrt{1-\frac14}=\frac{\sqrt3}{2}$ and $(\sqrt3)^2=3$ ([[thm-of-square-roots]]); $\cos^2+\sin^2=1$ provides the value $\sqrt{1-e^2}$ used below via $1-e^2>0$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Verification

**Proof technique:** direct.

1.1 With $\mu=\kappa=J=1$: $p=1$, $1-e^2=\frac34$, $a=1/(\frac34)=\frac43$, $\sqrt{1-e^2}=\frac{\sqrt3}{2}$ and $b=\frac43\cdot\frac{\sqrt3}{2}=\frac{2\sqrt3}{3}$. [given, L1, L3, algebra]

1.2 Energy: $e^2-1=\frac14-1=-\frac34$, so $E=\frac{1\cdot1}{2\cdot1}\cdot(-\frac34)=-\frac38<0$, consistent with $e=\frac12<1$ by the equivalence of [L1]. [given, L1, algebra]

2.1 Period: $\mu ab=\frac43\cdot\frac{2\sqrt3}{3}=\frac{8\sqrt3}{9}$, so $T=2\pi\cdot\frac{8\sqrt3}{9}=\frac{16\pi\sqrt3}{9}$; squaring, $T^2=\frac{256\pi^2\cdot3}{81}=\frac{256\pi^2}{27}$. [step 1.1, L2, algebra]

3.1 Independent check of the second period formula: $a^3=\frac{64}{27}$, so $4\pi^2\mu a^3/\kappa=4\pi^2\cdot\frac{64}{27}=\frac{256\pi^2}{27}=T^2$, in agreement with step 2.1 and with [L2]. [step 1.1, step 2.1, L2, algebra] ∎
