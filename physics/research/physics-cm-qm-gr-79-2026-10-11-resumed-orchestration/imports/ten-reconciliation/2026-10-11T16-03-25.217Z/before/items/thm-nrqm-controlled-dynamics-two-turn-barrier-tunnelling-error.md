---
id: thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error
aliases: [nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error]
kind: theorem
domain: mathematics
title: "Two-turn barrier tunnelling error"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection, thm-nrqm-controlled-dynamics-liouville-turning-point-transformation, thm-nrqm-controlled-dynamics-wkb-explicit-error, thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients, def-bochner-integrable-function, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection: mathematical-premise
  thm-nrqm-controlled-dynamics-liouville-turning-point-transformation: mathematical-premise
  thm-nrqm-controlled-dynamics-wkb-explicit-error: mathematical-premise
  thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. W. J. Olver, Asymptotics and Special Functions, Chapter 11 (connection formulas and barrier penetration; standard monograph)"
      url: "https://dlmf.nist.gov/11"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Square Potential Barrier and Cold Emission pp. 64-73 (WKB barrier transmission)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Let $V\in C_c^5(\mathbb R;\mathbb R)$ be fixed and let $E>0$ be such that
$V-E$ has exactly two simple zeros $a<b$, is positive on $(a,b)$ and negative
outside $[a,b]$ with nonvanishing derivative at $a,b$. Consider the
Schr\"odinger equation $u''=\frac{2m(V-E)}{\hbar^2}u$ for a small
nondimensional parameter $h>0$ (the physical case is the scaled family; the
theorem concerns this small-$h$ family, not a variation of natural constants).
Put $B:=\int_a^b\sqrt{2m(V-E)}\,dx$ and $S:=B/h$. Then there are an
$\varepsilon(h)\le Ch$ and a constant $C_0$ such that the transmission
coefficient is
$$T(h)=e^{-2S}\bigl[1+O\bigl(\varepsilon(h)+e^{-2S}\bigr)\bigr],$$
quantitatively
$$|T(h)e^{2S}-1|\le\frac{C_0[\varepsilon(h)+e^{-2S}]}{1-C_0[\varepsilon(h)+e^{-2S}]}$$
whenever the denominator is positive. The bound holds for fixed $V,E$ with the
stated separated simple turning points; rectangular walls, coalescing turning
points, barrier-top uniformity and resonant multiwell interference are excluded.

## Facts & Assumptions

**Given:** the potential $V$, the energy $E$ with separated simple turning points $a<b$, and small $h>0$.

[F1] Allowed-region WKB control with explicit error $O(\varepsilon(h))$ on intervals bounded away from the turning points, in the form of [[thm-nrqm-controlled-dynamics-wkb-explicit-error]] (b)–(c) ([[thm-nrqm-controlled-dynamics-wkb-explicit-error]]).

[F2] Liouville transformation at each simple turning point, reducing the equation to the Airy-type form $w''=[\zeta/h^2+R]w$ with bounded $R$, and the stable Volterra connection: exact normalized forbidden/interior basis matrices at a fixed interior point are a fixed invertible WKB value/derivative matrix times diagonal $\exp(\pm S_{\text{left/right}})$ with relative matrix error at most $C\varepsilon(h)$ ([[thm-nrqm-controlled-dynamics-liouville-turning-point-transformation]], [[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]]).

[F3] Airy matching remainders of order $h/|\zeta|^{3/2}$ on fixed matching sections, absorbed into $\varepsilon(h)$ ([[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]], [[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]]).

## Proof

1.1 [Basis conversion through the barrier] By [F2] the coefficient conversion across the barrier has $C_{\mathrm{left}}=(1+O(\varepsilon))e^{S}D_{\mathrm{right}}+O(\varepsilon)e^{S_{\mathrm{left}}-S_{\mathrm{right}}}C_{\mathrm{right}}$ and $D_{\mathrm{left}}=(1+O(\varepsilon))e^{-S}C_{\mathrm{right}}+O(\varepsilon)e^{-S_{\mathrm{left}}+S_{\mathrm{right}}}D_{\mathrm{right}}$; the estimates follow by inverting the fixed bounded value/derivative matrices with Neumann's bound, and their determinants are controlled by the exact Airy Wronskians rather than by an assumed basis. [F1, F2, F3, algebra]

2.1 [Imposing the scattering condition] At the allowed right end the incoming coefficient is $iC_{\mathrm{right}}+D_{\mathrm{right}}/2+O(\varepsilon)(|C_{\mathrm{right}}|+|D_{\mathrm{right}}|)$; zero incoming-right fixes $D_{\mathrm{right}}=-2iC_{\mathrm{right}}+O(\varepsilon)|C_{\mathrm{right}}|$. Then the transmitted coefficient is $-2iC_{\mathrm{right}}+O(\varepsilon)|C_{\mathrm{right}}|$ and the incoming-left coefficient is $2e^{S}C_{\mathrm{right}}[1+O(\varepsilon)+O(e^{-2S})]$; the leading coefficient cannot cancel for small $\varepsilon$, since the WKB amplitudes $p^{-1/2}$ carry equal unit-flux conventions. [step 1.1, F1, F2, algebra]

3.1 [Transmission coefficient] Taking squared modulus ratios gives $T(h)=e^{-2B/h}[1+O(\varepsilon(h)+e^{-2B/h})]$ and the stated quantitative error bound; all constants depend only on $V,E$ and the fixed matching sections. [step 2.1, algebra] ∎
