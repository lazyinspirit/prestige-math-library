---
id: ex-sr-doppler-longitudinal-beta-three-fifths
kind: example
title: 'Worked longitudinal Doppler shift at beta = 3/5'
status: published
origin: pipeline
domain: physics
physical_scope: 'Worked longitudinal Doppler computation of the ideal plane-wave model at relative speed (3/5)c in the two propagation directions along the boost axis. Conditional on the model; no measurement, statistical inference or empirical claim.'
deps: [pthm-sr-null-wave-doppler-and-aberration,
       def-sr-null-wave-covector-and-observer-frequency,
       post-sr-ideal-plane-wave-model,
       lem-sr-null-covector-boost-transformation,
       def-lorentz-boost]
dependency_roles:
  pthm-sr-null-wave-doppler-and-aberration: physical-result
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  post-sr-ideal-plane-wave-model: physical-assumption
  lem-sr-null-covector-boost-transformation: mathematical-premise
  def-lorentz-boost: mathematical-premise
dependency_level: 16
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.2 pp. 55-57 and Section 6.5.1 p. 137; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, longitudinal Doppler effect (6.1.1) p. 26'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
    - title: 'A. Einstein, Zur Elektrodynamik bewegter Koerper, Annalen der Physik 322 (10) 891-921 (1905), Section 7 pp. 910-912: longitudinal special case nu'' = nu sqrt((1-v/V)/(1+v/V)); proofread transcription at German Wikisource'
      url: 'https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper'
---

## Example

Worked example in the model of `sr-light-and-doppler`, on the page `sr-light-and-doppler-examples`. Let $x$ and $x'$ be inertial charts with $x'=B(\beta)x+b$, $\beta=(3/5)e_1$, so that $\gamma=5/4$ and the frame $x'$ moves with velocity $(3/5)c\,e_1$ relative to $x$. Let an ideal plane wave have frame-$x$ data $(\omega,s)$ with $\omega>0$ and (a) $s=e_1$, (b) $s=-e_1$. Then [[pthm-sr-null-wave-doppler-and-aberration]] gives:

**(a)** $\omega'=\gamma(1-3/5)\omega=(5/4)(2/5)\omega=\omega/2$, $\nu'=\nu/2$, $\lambda'=2\lambda$ and $s'=e_1$: an observer at rest in $x'$ moving in the direction of propagation reads half the frequency and twice the wavelength.

**(b)** $\omega'=\gamma(1+3/5)\omega=(5/4)(8/5)\omega=2\omega$, $\nu'=2\nu$, $\lambda'=\lambda/2$ and $s'=-e_1$: an observer at rest in $x'$ moving opposite to the propagation direction reads twice the frequency and half the wavelength.

In both cases $|s'|=1$ and $\omega'>0$, in agreement with the general theorem; the verification uses only the exact rational values $\gamma=5/4$, $1-3/5=2/5$ and $1+3/5=8/5$. Scope: a conditional computation in the ideal plane-wave model; no measurement is performed and no empirical claim is made.

## Facts & Assumptions

**Given:** Inertial charts $x,x'$ with $x'=B(\beta)x+b$, $\beta=(3/5)e_1$; an ideal plane wave with frame-$x$ data $(\omega,s)$, $\omega>0$, $|s|=1$, and $s=\pm e_1$.

[A1] Adopted ideal plane-wave model: one ideal monochromatic plane wave with future null wave covector; the rest observers of $x$ and $x'$ read the frequencies $\omega$ and $\omega'$ ([[post-sr-ideal-plane-wave-model]], [[def-sr-null-wave-covector-and-observer-frequency]]).

[L1] For the chart pair of the Given the theorem gives $\omega'=\gamma(1-\beta\cdot s)\omega>0$, $\nu'=\gamma(1-\beta\cdot s)\nu$, $\lambda'=\lambda/[\gamma(1-\beta\cdot s)]$, $|s'|=1$, and in the axis case $\beta=be_1$ the direction formulas $s'_1=(s_1-b)/(1-bs_1)$, $s'_2=s_2/[\gamma(1-bs_1)]$, $s'_3=s_3/[\gamma(1-bs_1)]$ ([[pthm-sr-null-wave-doppler-and-aberration]], clauses (i) and (ii)).

[L2] Longitudinal clause: for $s=\beta_{\mathrm{hat}}$ the factor is $\gamma(1-|\beta|)=\sqrt{(1-|\beta|)/(1+|\beta|)}$ and for $s=-\beta_{\mathrm{hat}}$ it is $\gamma(1+|\beta|)=\sqrt{(1+|\beta|)/(1-|\beta|)}$; here $\beta_{\mathrm{hat}}=e_1$ ([[pthm-sr-null-wave-doppler-and-aberration]], clause (iii)).

[L3] $\gamma=(1-|\beta|^2)^{-1/2}$, so for $\beta=(3/5)e_1$: $\gamma=(1-9/25)^{-1/2}=5/4$; and the boost transformation of the frame data is the one of [[lem-sr-null-covector-boost-transformation]] ([[def-lorentz-boost]]).

## Verification

**Proof technique:** direct.

1.1 Setup. Here $\beta_{\mathrm{hat}}=e_1$, $|\beta|=3/5$ and $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$ by [L3]; both witness directions $s=\pm e_1$ have $|s|=1$, so the wave is in the model [A1]. [A1, L3, given]

2.1 Case (a), $s=e_1$. Then $\beta\cdot s=3/5$, so [L1] gives $\omega'=\gamma(1-3/5)\omega=(5/4)(2/5)\omega=\omega/2$ and hence $\nu'=\omega'/(2\pi)=\nu/2$ and $\lambda'=c/\nu'=2c/\nu=2\lambda$; the axis formulas of [L1] with $b=3/5$, $s_1=1$, $s_2=s_3=0$ give $s'_1=(1-3/5)/(1-3/5)=1$ and $s'_2=s'_3=0$, so $s'=e_1$; the frequency factor agrees with the longitudinal clause [L2], $\omega'/\omega=\sqrt{(1-3/5)/(1+3/5)}=\sqrt{(2/5)/(8/5)}=1/2$, since $s=\beta_{\mathrm{hat}}$. [step 1.1, L1, L2]

3.1 Case (b), $s=-e_1$. Then $\beta\cdot s=-3/5$, so [L1] gives $\omega'=\gamma(1+3/5)\omega=(5/4)(8/5)\omega=2\omega$, $\nu'=2\nu$ and $\lambda'=c/\nu'=\lambda/2$; the axis formulas of [L1] with $b=3/5$, $s_1=-1$ give $s'_1=(-1-3/5)/(1+3/5)=-1$ and $s'_2=s'_3=0$, so $s'=-e_1$; the frequency factor agrees with the longitudinal clause [L2], $\omega'/\omega=\sqrt{(1+3/5)/(1-3/5)}=\sqrt{(8/5)/(2/5)}=2$, since $s=-\beta_{\mathrm{hat}}$. In both cases $\omega'>0$ and $|s'|=1$ as the theorem asserts. This proves (a) and (b) by exact rational arithmetic; the computation is conditional on the ideal plane-wave model, no measurement is performed and no empirical claim is made; no choice principle is used. [step 1.1, L1, L2] ∎
