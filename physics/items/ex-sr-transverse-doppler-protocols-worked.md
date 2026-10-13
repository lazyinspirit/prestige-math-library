---
id: ex-sr-transverse-doppler-protocols-worked
kind: example
title: 'Worked transverse Doppler protocols at beta = 3/5'
status: published
origin: pipeline
domain: physics
physical_scope: 'Worked comparison of the two transverse Doppler protocols of the ideal plane-wave model at relative speed (3/5)c: gamma in the frame where the wave is transverse to the motion and 1/gamma in the frame where it is transverse in the observer frame. Conditional on the model; no measurement, statistical inference or empirical claim.'
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
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, transverse Doppler effect (6.1.2) p. 27'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Example

Worked example in the model of `sr-light-and-doppler`, on the page `sr-light-and-doppler-examples`, showing that the transverse Doppler shift depends on the frame in which transversality is required. Let $x$ and $x'$ be inertial charts with $x'=B(\beta)x+b$, $\beta=(3/5)e_1$ and $\gamma=5/4$, and let an ideal plane wave have frame-$x$ data $(\omega,s)$ with $\omega>0$.

**(a)** If $s=e_2$, so $\beta\cdot s=0$ and the propagation direction is perpendicular to the relative velocity in $x$, then [[pthm-sr-null-wave-doppler-and-aberration]] gives $\omega'=\gamma\omega=(5/4)\omega>\omega$ and $s'=(-3/5,4/5,0)$, which has $|s'|=1$; the frequency read by the $x'$-rest observer is blue-shifted by the factor $5/4$.

**(b)** If $s=(3/5,4/5,0)$, so $\beta\cdot s=9/25=|\beta|^2$ and equivalently $s'\cdot e_1=0$, the propagation direction is perpendicular to the relative velocity in $x'$, and the theorem gives $\omega'=\gamma(1-9/25)\omega=(5/4)(16/25)\omega=(4/5)\omega=\omega/\gamma<\omega$ and $s'=e_2$; the frequency read by the $x'$-rest observer is red-shifted by the factor $4/5$.

In neither case is $\omega'=\omega$ for the nonzero $\beta$, and the two exact factors differ; a statement of a transverse Doppler shift is therefore incomplete until the frame in which the direction is transverse is specified. Scope: a conditional computation in the ideal plane-wave model; no measurement and no empirical claim.

## Facts & Assumptions

**Given:** Inertial charts $x,x'$ with $x'=B(\beta)x+b$, $\beta=(3/5)e_1$; an ideal plane wave with frame-$x$ data $(\omega,s)$, $\omega>0$, $|s|=1$.

[A1] Adopted ideal plane-wave model: one ideal monochromatic plane wave with future null wave covector; the rest observers of $x$ and $x'$ read the frequencies $\omega$ and $\omega'$ ([[post-sr-ideal-plane-wave-model]], [[def-sr-null-wave-covector-and-observer-frequency]]).

[L1] For the chart pair of the Given the theorem gives $\omega'=\gamma(1-\beta\cdot s)\omega>0$ with $\gamma=(1-|\beta|^2)^{-1/2}$, and in the axis case $\beta=be_1$ the direction formulas $s'_1=(s_1-b)/(1-bs_1)$, $s'_2=s_2/[\gamma(1-bs_1)]$, $s'_3=s_3/[\gamma(1-bs_1)]$ ([[pthm-sr-null-wave-doppler-and-aberration]], clause (i)).

[L2] Transverse protocols of the theorem: if $\beta\cdot s=0$ then $\omega'=\gamma\omega$ and this is greater than $\omega$ when $\beta\ne0$; if $\beta\cdot s=|\beta|^2$, equivalently $s'\cdot\beta_{\mathrm{hat}}=0$ for $\beta\ne0$, then $\omega'=\omega/\gamma$, which is less than $\omega$ when $\beta\ne0$ ([[pthm-sr-null-wave-doppler-and-aberration]], clause (iv)).

[L3] $\gamma=(1-|\beta|^2)^{-1/2}$, so for $\beta=(3/5)e_1$: $\gamma=(16/25)^{-1/2}=5/4$, and $|\beta|^2=9/25$ ([[def-lorentz-boost]], [[lem-sr-null-covector-boost-transformation]]).

## Verification

**Proof technique:** direct.

1.1 Case (a). Here $s=e_2$ has $|s|=1$ and $\beta\cdot s=(3/5)(0)=0$, so the propagation direction is perpendicular to the relative velocity in $x$, and [L2] gives $\omega'=\gamma\omega=(5/4)\omega$, which is greater than $\omega$ because $\gamma=5/4>1$ by [L3]; the axis formulas of [L1] with $b=3/5$, $s_1=0$, $s_2=1$, $s_3=0$ give $s'_1=(0-3/5)/(1-0)=-3/5$, $s'_2=1/[(5/4)(1-0)]=4/5$ and $s'_3=0$, and $|s'|^2=9/25+16/25=1$. [A1, L1, L2, L3]

1.2 Case (b). Here $s=(3/5,4/5,0)$ has $|s|^2=9/25+16/25=1$ and $\beta\cdot s=(3/5)(3/5)=9/25=|\beta|^2$; by [L2] this is equivalent to $s'\cdot\beta_{\mathrm{hat}}=0$ with $\beta_{\mathrm{hat}}=e_1$, the propagation direction is perpendicular to the relative velocity in $x'$, and $\omega'=\gamma(1-9/25)\omega=(5/4)(16/25)\omega=(4/5)\omega=\omega/\gamma$, which is less than $\omega$; the axis formulas of [L1] give $s'_1=(3/5-3/5)/(1-9/25)=0$, $s'_2=(4/5)/[(5/4)(16/25)]=(4/5)/(4/5)=1$, $s'_3=0$, so $s'=e_2$. [A1, L1, L2, L3]

2.1 Conclusion. In case (a) the shift is by $5/4$, in case (b) by $4/5$; both configurations are called transverse because the propagation direction is perpendicular to the relative velocity in one of the two frames, and the two factors are different and neither is $1$ for the stated nonzero $\beta$. Hence a transverse Doppler statement is incomplete until the frame in which transversality holds is specified. The computation is conditional on the ideal plane-wave model and makes no measurement or empirical claim; no choice principle is used. [step 1.1, step 1.2] ∎
