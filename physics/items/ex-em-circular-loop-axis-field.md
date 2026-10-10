---
id: "ex-em-circular-loop-axis-field"
kind: "example"
domain: physics
title: "Axis field of the declared ideal circular thin loop"
status: draft
origin: session
dependency_level: 20
deps: ["def-em-steady-current-regime", "def-em-magnetic-moment", "pthm-em-biot-savart", "lem-em-thin-current-limit", "def-cross-product-in-r3", "def-riemann-integral-over-a-jordan-set", "thm-continuous-functions-on-compact-jordan-sets-are-integrable", "def-countable-choice", "post-em-ideal-magnetostatic-models", thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, thm-substitution]
dependency_roles:
  thm-substitution: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  "def-em-steady-current-regime": "formulation-prerequisite"
  "def-em-magnetic-moment": "formulation-prerequisite"
  "pthm-em-biot-savart": "physical-result"
  "lem-em-thin-current-limit": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-riemann-integral-over-a-jordan-set": "mathematical-premise"
  "thm-continuous-functions-on-compact-jordan-sets-are-integrable": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
  "post-em-ideal-magnetostatic-models": "physical-assumption"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 5.2.2 printed pp. 217-218 (Example 5.6: the field a distance $z$ above the centre of a circular loop, eq. (5.38), $B=\\mu_0IR^2/[2(R^2+z^2)^{3/2}]$); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 3.2.3 printed pp. 49-52 and Section 3.3.1 printed pp. 54-56 (the thin-wire Biot-Savart integral and the far field of a circular loop); read in the stamped 236-page PDF."
    - title: "W. C. Chew, Lectures on Electromagnetic Field Theory, Purdue University (Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Lecture 5 Section 5.1 printed pp. 49-52 (the current-element form $d H=I\\,d l'\\times\\hat R/(4\\pi R^2)$ of the Biot-Savart law); read in the stamped full text."
physical_scope: "An explicit ideal-model computation: the axis field of a declared ideal circular thin loop. It involves no apparatus, no sampling, no uncertainty and no empirical claim, and it is explicitly not the field of any physical finite-radius coil."
---

## Example

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $a>0$, $I\in\mathbb R$, let $\gamma(s)=a(\cos(s/a),\sin(s/a),0)$, $s\in[0,2\pi a]$, be the circle of radius $a$ in the plane $x_3=0$ parametrized by arc length, let the declared ideal thin-loop current of amplitude $I$ run along $\gamma$ in the sense of [[def-em-steady-current-regime]](c1), with moment $m=I\pi a^2e_3$ ([[def-em-magnetic-moment]](b)), and let $\mu_0$, $c$, $\varepsilon_0$ be the constants of [[def-em-si-conventions]]. Then for every point $x=ze_3$ on the axis ($z\in\mathbb R$, $\operatorname{dist}(x,\gamma)=\sqrt{a^2+z^2}>0$) the field of the ideal loop is the absolutely convergent line integral
$$B(ze_3)=\frac{\mu_0I}{4\pi}\int_0^{2\pi a}\frac{\gamma'(s)\times\left(ze_3-\gamma(s)\right)}{|ze_3-\gamma(s)|^3}\,ds=\frac{\mu_0Ia^2}{2(a^2+z^2)^{3/2}}\,e_3,$$
i.e. the Biot-Savart field of [[pthm-em-biot-savart]] and the declared thin-current limit of [[lem-em-thin-current-limit]] agree on the axis, with the sign fixed by the positive (counterclockwise) orientation of $\gamma$ and by the sign of $I$; in particular $B(0)=\frac{\mu_0I}{2a}e_3$. This is a property of the declared idealisation; it is not the field of any physical finite-radius coil, nothing is claimed at points off the axis or on the wire, and no measurement is involved. The explicit finite Riemann axis evaluation and circle moment calculation alone are choice-free. Countable Choice is inherited by the asserted global distributional model and thin-current supplier.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $a>0$, $I\in\mathbb R$ and the circle $\gamma(s)=a(\cos(s/a),\sin(s/a),0)$ with $s\in[0,2\pi a]$; let the ideal loop model be the declared one of [[def-em-steady-current-regime]](c1) with physical adoption [[post-em-ideal-magnetostatic-models]].

[F1] The field of the declared ideal thin loop is $B_\gamma(x)=\frac{\mu_0I}{4\pi}\int_0^L\frac{\gamma'(s)\times(x-\gamma(s))}{|x-\gamma(s)|^3}\,ds$ for $x$ off the curve: this is the Biot-Savart representation of the compact smooth class together with its declared thin-loop limit, and the ideal loop's admissibility is supplied by the strengthened thin-current supplier together with the declared adoption ([[pthm-em-biot-savart]], [[lem-em-thin-current-limit]], [[def-em-steady-current-regime]], [[post-em-ideal-magnetostatic-models]]).

[F2] The moment of clause (b) of the definition is $m=\frac I2\int_0^L\gamma\times\gamma'\,ds$; for the present circle $\gamma\times\gamma'=ae_3$ and the integral evaluates to $2\pi a^2e_3$, so $m=I\pi a^2e_3$ ([[def-em-magnetic-moment]]).

[F3] For $u,v\in\mathbb R^3$, $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ ([[def-cross-product-in-r3]]); components of continuous integrands on the compact interval $[0,2\pi a]$ are Riemann integrable ([[def-riemann-integral-over-a-jordan-set]], [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[F4] $\mathrm{AC}_\omega$ is the countable-choice principle assumed here and inherited by the asserted global distributional model and thin-current supplier ([[def-countable-choice]]).

[F5] The sine and cosine have derivatives $\cos$ and $-\sin$, and period $2\pi$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]). The chain rule and FTC integrate their compositions on a compact interval ([[thm-chain-rule-for-total-derivatives]], [[thm-ftc-second-part]]); the substitution $s=at$ is the $C^1$ monotone substitution of [[thm-substitution]].

## Verification

**Proof technique:** direct; identify the axis field with the declared line integral, evaluate the integral by the substitution $t=s/a$, and read off the center value and the moment.

1.1 Every axis point $ze_3$ lies at distance $\sqrt{a^2+z^2}\ge a>0$ from the circle, so it is off the curve; by [F1] the field of the declared ideal loop there is the absolutely convergent line integral $B(ze_3)=\frac{\mu_0I}{4\pi}\int_0^{2\pi a}\frac{\gamma'(s)\times(ze_3-\gamma(s))}{|ze_3-\gamma(s)|^3}\,ds$, the same integral being the Biot-Savart field of the compact smooth currents in the declared thin-current limit. [given, F1]

1.2 Substituting $t=s/a$, so that $ds=a\,dt$ and $\gamma'(s)=(-\sin t,\cos t,0)$ while $ze_3-\gamma(s)=(-a\cos t,-a\sin t,z)$, one has $\gamma'(s)\times(ze_3-\gamma(s))=(z\cos t,\ z\sin t,\ a)$ by [F3] (the first two components are $z\cos t$ and $z\sin t$ respectively, and the third is $a\cos^2t+a\sin^2t=a$), and $|ze_3-\gamma(s)|=(a^2+z^2)^{1/2}$ is constant. Hence the component integrals are continuous functions of $t$ on the compact interval $[0,2\pi]$. [given, F3, F5]

2.1 By steps 1.1 and 1.2, $B(ze_3)=\frac{\mu_0I}{4\pi}\cdot\frac{a}{(a^2+z^2)^{3/2}}\int_0^{2\pi}(z\cos t,z\sin t,a)\,dt=\frac{\mu_0I}{4\pi}\cdot\frac{2\pi a^2}{(a^2+z^2)^{3/2}}\,e_3=\frac{\mu_0Ia^2}{2(a^2+z^2)^{3/2}}\,e_3$, the first two components vanishing because $\cos$ and $\sin$ have vanishing integral over a full period. At $z=0$ this gives $B(0)=\frac{\mu_0I}{2a}e_3$, and the sign is the product of the orientation sign of $\gamma$ and the sign of $I$. [step 1.1, step 1.2, F3, F5]

3.1 The computation also fixes the source moment: with $\gamma\times\gamma'=ae_3$ and $\int_0^{2\pi a}ae_3\,ds=2\pi a^2e_3$, clause (b) of [F2] gives $m=I\pi a^2e_3$, the value quoted in the Example. The whole verification is a conditional ideal-model computation on the axis only: nothing is claimed off the axis or on the wire, no apparatus, sampling model, uncertainty or empirical inference is involved, and Countable Choice enters only through the asserted global distributional model and thin-current supplier [F4]. [step 2.1, F2, F4] ∎

## Source notes

Griffiths, Example 5.6, printed pp. 217-218, evaluates the axis field (5.38) $\mu_0IR^2/[2(R^2+z^2)^{3/2}]$; Tong, Section 3.2.3 and Section 3.3.1, printed pp. 49-56, gives the thin-wire Biot-Savart integral and the loop far field; Chew, Lecture 5 Section 5.1, printed pp. 49-52, gives the current-element form. The example verifies the declared ideal loop's axis field against those formulas; it is explicitly not a statement about any physical coil.
