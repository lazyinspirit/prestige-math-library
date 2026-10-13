---
id: ex-sr-guided-ring-sagnac-worked
kind: example
title: "Guided-ring Sagnac delay worked at angular velocity Omega R = 3c/5"
status: published
origin: pipeline
domain: physics
dependency_level: 16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [pthm-sr-guided-ring-sagnac-delay, thm-sr-fermi-walker-and-rigid-observer-examples, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-sr-proper-time, lem-sr-proper-time-parametrization, def-pi-via-first-positive-cosine-zero, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, cor-pi-is-the-first-positive-sine-zero]
dependency_roles:
  pthm-sr-guided-ring-sagnac-delay: physical-result
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-proper-time: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  cor-pi-is-the-first-positive-sine-zero: mathematical-premise
proof_strategy: direct
physical_scope: "Worked numerical instance of the conditional guided-ring Sagnac model for an ideal rigidly rotating ring, an adopted ideal circular guide and an ideal clock detector in flat classical spacetime. No optical fiber, medium, apparatus, interference phase, measurement, statistical or empirical claim is made, and all idealizations of pthm-sr-guided-ring-sagnac-delay are retained."
sources:
  references:
    - title: "Wikipedia, 'Sagnac effect': the basic circular case with t_1 = 2 pi R/(c - R omega) and t_2 = 2 pi R/(c + R omega), used with the exact rational velocity ratio 3/5"
      url: "https://en.wikipedia.org/wiki/Sagnac_effect"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 8.1.1-8.1.3 pp. 165-166 (the closed-circuit synchronization discrepancy and the Sagnac effect of a rotating ring); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Example

Worked instance of [[pthm-sr-guided-ring-sagnac-delay]]. Let $R > 0$ and $\Omega = 3c/(5R)$, so that $\Omega R = 3c/5$, $|\Omega|R < c$ and $\gamma = (1 - 9/25)^{-1/2} = 5/4$. Work in the inertial chart with $x^0 = c t$ and let the ring have its plane $x^3 = 0$ and let the emission event be $E = x^{-1}(0, R, 0, 0)$, where the material point labelled $\varphi = 0$ has $\phi_0 = 0$.

(a) **Return times.** The co-rotating guided signal has $\phi_+(t) = c t/R$ and the emitting material point has $\phi(t) = \Omega t = 3c t/(5R)$; the signal meets that point when $c t/R = 3c t/(5R) + 2 \pi$, i.e. $t_1 = 5 \pi R/c$ (the co-rotating relative angular rate is $2c/(5R)$); the counter-rotating signal $C_-$, $\phi_-(t) = -c t/R$, meets it when $-c t/R = 3c t/(5R) - 2 \pi$, i.e. $t_2 = 5 \pi R/(4c)$, with signed relative angular rate $-8c/(5R)$ and magnitude $8c/(5R)$. The reception events are $e_1 = x^{-1}(5 \pi R, R \cos(3 \pi), R \sin(3 \pi), 0) = x^{-1}(5 \pi R, -R, 0, 0)$ and $e_2 = x^{-1}(5 \pi R/4, R \cos(3 \pi/4), R \sin(3 \pi/4), 0) = x^{-1}(5 \pi R/4, -R/\sqrt{2}, R/\sqrt{2}, 0)$, where the angle values use the parity, addition and Pythagorean identities for sine and cosine ([[def-pi-via-first-positive-cosine-zero]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

(b) **Differences and the factor-2 holonomy check.** The chart-time difference of the two reunions is $t_1 - t_2 = 5 \pi R/c - 5 \pi R/(4c) = 15 \pi R/(4c) = 4 \pi \Omega R^2/(c^2 - \Omega^2R^2)$, and the detector proper-time difference is $(t_1-t_2)\cdot(4/5) = 3 \pi R/c = 4 \pi \Omega R^2/(c^2 \sqrt{1 - \Omega^2R^2/c^2})$. The ring rest-line chart-time holonomy of [[pthm-sr-guided-ring-sagnac-delay]] (iv) is $\Delta t_h = 15 \pi R/(8c)$, exactly half of $t_1 - t_2$, and the corresponding receiver proper-time holonomy is $(4/5)\cdot 15 \pi R/(8c) = 3 \pi R/(2c)$, exactly half of $3 \pi R/c$; this verifies the factor-2 relation of that clause. The ambient rest distribution of the rotating congruence is nowhere integrable while the fixed-height-cylinder-restricted one-dimensional rest distribution is locally integrable with the nonzero global holonomy $15 \pi R/(8c)$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] (c)).

(c) **Inertial limit.** For $\Omega = 0$ with the same $R$ the two return times are both $2 \pi R/c$ and both differences vanish.

(d) **Scope.** Conditional model computation with the adopted ideal circular guide, ideal signals and the ideal clock detector of [[pthm-sr-guided-ring-sagnac-delay]] (ii); no interference phase, apparatus, medium, measurement, statistical or empirical claim is made, and the idealizations of that theorem are retained.

## Facts & Assumptions

**Given:** $c>0$, $R>0$, $\Omega=3c/(5R)$, so $\Omega R=3c/5$ and $\gamma=(1-\Omega^2R^2/c^2)^{-1/2}=5/4$; the inertial chart $x$ with $x^0=ct$; the ring data, guided curves $C_\pm$ with $\phi_\pm(t)=\pm ct/R$ plus the material label, and the ideal clock detector of [[pthm-sr-guided-ring-sagnac-delay]] clauses (ii)-(iv).

[L1] Guided-ring theorem: on the ring with $|\Omega|R<c$, $C_+$ meets the worldline $W_{\phi_0}$ exactly at $t=2\pi kR/(c-\Omega R)$ and $C_-$ exactly at $t=2\pi kR/(c+\Omega R)$, the smallest positive times being $t_1,t_2$; the chart-time difference is $4\pi\Omega R^2/(c^2-\Omega^2R^2)$ and the detector proper-time difference is that divided by $\gamma$; the ring rest-line chart-time holonomy over one circuit is $2\pi\Omega R^2/(c^2-\Omega^2R^2)$ and the receiver proper-time holonomy is that divided by $\gamma$ ([[pthm-sr-guided-ring-sagnac-delay]] (iii),(iv)).

[L2] Ring cylinder data: the material point at chart angle $\phi(t)=\phi_0+\Omega t$ and radius $R$ has coordinates $(ct,R\cos\phi,R\sin\phi,x^3_0)$, and the induced metric on the cylinder is $-(c^2-\Omega^2R^2)dt^2+2\Omega R^2dtd\varphi+R^2d\varphi^2$ with $\varphi=\phi-\Omega t$ ([[pthm-sr-guided-ring-sagnac-delay]] (i),(iv), [[thm-sr-fermi-walker-and-rigid-observer-examples]] (c), [[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]).

[L3] Proper time of the ring clock satisfies $d\tau=dt/\gamma$, with the base constant free ([[pthm-sr-guided-ring-sagnac-delay]] (i), [[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]]).

[L4] Trigonometric values: $\pi$ is twice the first positive zero of $\cos$ and the first positive zero of $\sin$ is $\pi$; addition, parity and Pythagorean identities; quarter-turn shifts, so that $\sin(3\pi)=0$, $\cos(3\pi)=-1$ and $\cos(3\pi/4)=-\sin(\pi/4)=-\sqrt2/2$, $\sin(3\pi/4)=\cos(\pi/4)=\sqrt2/2$ with $\sin^2(\pi/4)+\cos^2(\pi/4)=1$ and $\sin(\pi/4)=\cos(\pi/4)>0$ ([[def-pi-via-first-positive-cosine-zero]], [[cor-pi-is-the-first-positive-sine-zero]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-quarter-turn-values-and-shift-formulas]]).



**Proof technique:** direct.

## Verification

1.1 (The numerical data and return times.) With $\Omega R=3c/5$ one has $|\Omega|R<c$ and $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$; the theorem [L1] gives $t_1=2\pi R/(c-\Omega R)=2\pi R/(c(1-3/5))=5\pi R/c$ and $t_2=2\pi R/(c+\Omega R)=2\pi R/(c(1+3/5))=5\pi R/(4c)$, both positive; these are the reunion times of the two signals with the emitting material point, after one circuit relative to it. [L1, L2, given, algebra]

1.2 (Clause (b): the integrability statement.) By [L1] and [L2] the ambient rest distribution of the rotating congruence is nowhere integrable for $\Omega\neq0$, while the fixed-height-cylinder rest distribution is locally integrable with nonvanishing global holonomy $15\pi R/(8c)$; the return-time computation above used only the guided curves and the material worldline. [L1, L2]

2.1 (The reception events.) At $t_1$ the material point's angular label is $\phi(t_1)=\Omega t_1=(3c/(5R))(5\pi R/c)=3\pi$, so $e_1=x^{-1}(5\pi R,R\cos3\pi,R\sin3\pi,0)=x^{-1}(5\pi R,-R,0,0)$ by [L4]; at $t_2$, $\phi(t_2)=\Omega t_2=(3c/(5R))(5\pi R/(4c))=3\pi/4$, so $e_2=x^{-1}(5\pi R/4,-R/\sqrt2,R/\sqrt2,0)$ by [L4]. The guided angles $\phi_+(t_1)=ct_1/R=5\pi$ and $\phi_-(t_2)=-ct_2/R=-5\pi/4$ agree with the material angles modulo $2\pi$: $5\pi=3\pi+2\pi$ and $-5\pi/4=3\pi/4-2\pi$. [L2, L4, step 1.1, algebra]

2.2 (Clause (b): differences and the factor-two relation.) By step 1.1, $t_1-t_2=5\pi R/c-5\pi R/(4c)=15\pi R/(4c)$, and the theorem's formula $4\pi\Omega R^2/(c^2-\Omega^2R^2)$ gives $4\pi(3c/(5R))R^2/(c^2(16/25))=12\pi cR\cdot25/(5\cdot16c^2)=15\pi R/(4c)$, in agreement; the detector proper-time difference is $(15\pi R/(4c))\cdot(4/5)=3\pi R/c$ by [L3], matching $4\pi\Omega R^2/(c^2\sqrt{1-\Omega^2R^2/c^2})=15\pi R/(4c)\cdot(4/5)=3\pi R/c$. The rest-line chart-time holonomy is $\Delta t_h=2\pi\Omega R^2/(c^2-\Omega^2R^2)=\frac12\cdot15\pi R/(4c)=15\pi R/(8c)$, exactly half of $t_1-t_2$, and the receiver proper-time holonomy is $\Delta t_h/\gamma=(4/5)(15\pi R/(8c))=3\pi R/(2c)$, exactly half of the detector proper-time difference. [L1, L3, step 1.1, algebra]

2.3 (Clause (c): the inertial limit.) At $\Omega=0$ the theorem's formulas give $t_1=t_2=2\pi R/(c)$ and vanishing chart-time difference, proper-time difference and holonomies; the rest lines are the $t=\mathrm{const}$ circles. [L1, step 1.1]

3.1 (Clause (d): scope.) Every quantity is a conditional model computation for the adopted guide, signals and detector; no medium, apparatus, interference phase, measurement or empirical claim enters, and no choice principle was used. [L1, step 2.2, step 2.3] ∎
