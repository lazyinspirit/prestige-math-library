---
id: "ex-em-wire-force-coupling"
kind: "example"
domain: physics
title: "Force per unit length between two declared ideal parallel wires"
status: draft
origin: session
dependency_level: 21
deps: ["def-em-steady-current-regime", "pthm-em-magnetic-loop-force-torque", "def-cross-product-in-r3", "thm-multidimensional-integral-properties", "def-countable-choice", "post-em-ideal-magnetostatic-models", "ex-em-infinite-wire-and-solenoid"]
dependency_roles:
  "def-em-steady-current-regime": "formulation-prerequisite"
  "pthm-em-magnetic-loop-force-torque": "physical-result"
  "def-cross-product-in-r3": "mathematical-premise"
  "thm-multidimensional-integral-properties": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
  "post-em-ideal-magnetostatic-models": "physical-assumption"
  "ex-em-infinite-wire-and-solenoid": "formulation-prerequisite"
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
      locator: "Section 5.2.2 printed pp. 217-218 (the force of attraction between two long parallel wires a distance $d$ apart, using the field $\\mu_0I_1/(2\\pi d)$ and the line-current force law); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 3.4.1 printed pp. 57-59 (force between parallel wires, $f=-(\\mu_0I_1I_2/2\\pi d)\\hat x$ (3.25), with attraction for equal directions and repulsion for opposite ones); read in the stamped 236-page PDF."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 42 printed pp. 100-101 (interaction of two systems through their fields and the force on a system in an external field); read in the stamped 387-page full text, re-expressed in SI."
physical_scope: "A local external-force comparison between two declared ideal parallel straight wires, restricted to the force per unit length that wire 1's external field exerts on wire 2 under the adopted neutral-thin-wire coupling. Self-fields and support forces of infinitely long wires are excluded; no dynamics, circuit model, material response or measurement is claimed."
---

## Example

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $d>0$ and $I_1,I_2\in\mathbb R$; let wire 1 be the declared ideal line current of amplitude $I_1$ along the third coordinate axis and wire 2 the translate of that ideal line current by $d\,e_1$, of amplitude $I_2$ ([[def-em-steady-current-regime]](c2)), and adopt for the force on wire 2 the thin-wire coupling (W) of [[pthm-em-magnetic-loop-force-torque]], restricted to the external field of wire 1. Then the force per unit length on wire 2 is
$$\mathbf f=\frac{\mu_0I_1I_2}{2\pi d}\,e_3\times e_2=-\frac{\mu_0I_1I_2}{2\pi d}\,e_1,$$
i.e. attraction towards wire 1 (direction $-e_1$) for currents in the same direction ($I_1I_2>0$), repulsion for opposite directions, and magnitude $\mu_0|I_1I_2|/(2\pi d)$ per unit length. The comparison uses only the external field of wire 1 at the position of wire 2; the self-fields and the mechanical support forces of the two infinite wires are excluded, no claim is made about the total force on either infinite wire, and no measurement is involved.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $d>0$, $I_1,I_2\in\mathbb R$; wire 1 and wire 2 are the declared ideal line currents of [[def-em-steady-current-regime]](c2) along the third axis and its translate by $d\,e_1$; the coupling (W) of [[pthm-em-magnetic-loop-force-torque]] is restricted to the external field of wire 1.

[F1] The declared ideal wire 1 has the admitted field $B_1(x)=\frac{\mu_0I_1}{2\pi\rho}e_\varphi$ on $\mathbb R^3\setminus\gamma$, with $\rho=\sqrt{x_1^2+x_2^2}$ and $e_\varphi=\rho^{-1}(-x_2,x_1,0)$, verified as an admitted field of the declared wire model ([[ex-em-infinite-wire-and-solenoid]], [[def-em-steady-current-regime]], [[post-em-ideal-magnetostatic-models]]).

[F2] Under the coupling (W) of the force theorem, the force on a parametrized wire segment $\gamma:[0,L]\to\mathbb R^3$ of the declared model in a prescribed external field is $F=I\int_0^L\gamma'(s)\times B(\gamma(s))\,ds$, a componentwise Riemann integral of a continuous integrand ([[pthm-em-magnetic-loop-force-torque]], clause (a)).

[F3] For $u,v\in\mathbb R^3$, $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$; in particular $e_3\times e_2=-e_1$. The Riemann integral on a compact interval is linear and the integral of a constant $c$ over $[-S,S]$ is $2Sc$ ([[def-cross-product-in-r3]], [[thm-multidimensional-integral-properties]]).

[F4] $\mathrm{AC}_\omega$ is the countable-choice principle assumed here and inherited by the asserted ideal-line model; the final constant-force computation is finite ([[def-countable-choice]]).

## Verification

**Proof technique:** direct; evaluate the external field of wire 1 on the line of wire 2, integrate the coupling over a compact straight segment, and divide by its length.

1.1 On the points $(d,0,x_3)$ of wire 2 one has $\rho=d$ and $(-x_2,x_1,0)=(0,d,0)$, so $e_\varphi=e_2$ and, by [F1], $B_1(d,0,x_3)=\frac{\mu_0I_1}{2\pi d}e_2$, constant along the whole line of wire 2. [given, F1]

2.1 Fix $S>0$ and let $\gamma(x_3):=(d,0,x_3)$, $x_3\in[-S,S]$, a compact straight segment of wire 2 parametrized by arc length, so $\gamma'=e_3$ and $|\gamma'|=1$. By [F2] the force on this segment under (W), restricted to the external field $B_1$ of wire 1, is $I_2\int_{-S}^{S}e_3\times B_1(d,0,x_3)\,dx_3=I_2\bigl(\frac{\mu_0I_1}{2\pi d}\bigr)(e_3\times e_2)\int_{-S}^{S}1\,dx_3=2S\,\frac{\mu_0I_1I_2}{2\pi d}\,(e_3\times e_2)$, using that the integrand is constant and the integral of a constant over $[-S,S]$ is $2S$ times it by [F3]. [step 1.1, F2, F3]

3.1 Dividing the force of step 2.1 by the segment length $2S$ gives the force per unit length $\mathbf f=\frac{\mu_0I_1I_2}{2\pi d}(e_3\times e_2)$; by [F3], $e_3\times e_2=-e_1$, so $\mathbf f=-\frac{\mu_0I_1I_2}{2\pi d}e_1$, which for $I_1I_2>0$ points from wire 2 towards wire 1 (attraction) and for $I_1I_2<0$ away from it (repulsion), with magnitude $\frac{\mu_0|I_1I_2|}{2\pi d}$; the result is independent of $S$, so it is a force per unit length of the comparison. Only the external field of wire 1 is used: the self-field of wire 2 and the support forces of both infinite wires are excluded, the compact segment is a local part of a fed or closed circuit (the endpoint identity of [[pthm-em-magnetic-loop-force-torque]] applies to the standalone segment), and no dynamics, circuit model, material response or measurement is claimed. Countable Choice enters only through the asserted ideal-line model [F4]. [step 2.1, F2, F4] ∎

## Source notes

Griffiths, Section 5.2.2, printed pp. 217-218, computes the attraction between two long parallel wires from the field $\mu_0I_1/(2\pi d)$ and the line-current force law; Tong, Section 3.4.1, printed pp. 57-59, gives $f=-(\mu_0I_1I_2/2\pi d)\hat x$ (3.25) with attraction for equal directions and repulsion for opposite ones; Landau-Lifshitz, Section 42, printed pp. 100-101, describes the interaction of two systems through their fields, re-expressed here in SI. The computation above is the exact local external-force comparison for the declared ideal wires under the adopted coupling; it is not a solution of the two-wire dynamics.
