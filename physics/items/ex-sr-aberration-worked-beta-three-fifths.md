---
id: ex-sr-aberration-worked-beta-three-fifths
kind: example
title: 'Worked aberration and Doppler shift at beta = 3/5 and cos theta = 4/5'
status: published
origin: pipeline
domain: physics
physical_scope: 'Worked numerical aberration and Doppler computation of the ideal plane-wave model at relative speed (3/5)c and source angle cosine 4/5. Conditional on the model; no measurement, statistical inference or empirical claim.'
deps: [pthm-sr-null-wave-doppler-and-aberration,
       def-sr-null-wave-covector-and-observer-frequency,
       lem-sr-null-covector-boost-transformation,
       def-lorentz-boost]
dependency_roles:
  pthm-sr-null-wave-doppler-and-aberration: physical-result
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
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
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.3 pp. 57-59 and Section 6.5.2 pp. 137-139; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, aberration (6.2) p. 28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
    - title: 'A. Einstein, Zur Elektrodynamik bewegter Koerper, Annalen der Physik 322 (10) 891-921 (1905), Section 7 pp. 910-912: aberration law cos(phi'') = (cos(phi)-v/V)/(1-(v/V)cos(phi)); proofread transcription at German Wikisource'
      url: 'https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper'
---

## Example

Worked example in the model of `sr-light-and-doppler`, on the page `sr-light-and-doppler-examples`. Let $x$ and $x'$ be inertial charts with $x'=B(\beta)x+b$, $\beta=(3/5)e_1$ and $\gamma=5/4$, and let an ideal plane wave have frame-$x$ propagation direction $s=(4/5,3/5,0)$, so $\cos\theta=4/5$ and $\sin\theta=3/5$ with $\theta\in[0,\pi]$ the angle between $s$ and the boost axis. Then [[pthm-sr-null-wave-doppler-and-aberration]] gives $s'=(5/13,12/13,0)$, hence $\cos\theta'=5/13$, and the angular frequency ratio $\omega'/\omega=\gamma(1-\beta s_1)=(5/4)(1-12/25)=(5/4)(13/25)=13/20$, so $\nu'=(13/20)\nu$ and $\lambda'=(20/13)\lambda$. Define the **apparent source direction** here to mean the incoming unit direction $-s$ (and $-s'$ in $x'$); this is a direction convention, not a source or detector model. Since $5/13<4/5$ (as $25<52$), its axis component moves from $-s_1=-4/5$ to $-s'_1=-5/13$ measured along the boost axis, that is, toward the direction of motion of the observer's frame: this is the sign of stellar aberration in this configuration. The example records the exact direction transformation and leaves any observational interpretation to the framework's experimental work. Scope: a conditional computation in the ideal plane-wave model; no measurement and no empirical claim.

## Facts & Assumptions

**Given:** Inertial charts $x,x'$ with $x'=B(\beta)x+b$, $\beta=(3/5)e_1$; an ideal plane wave with frame-$x$ direction $s=(4/5,3/5,0)$ and angular frequency $\omega>0$.

[A1] Wave data and readings: the rest observers of $x$ and $x'$ read the frequencies $\omega$ and $\omega'$, and the linear frequency and wavelength satisfy $\nu=\omega/(2\pi)$, $\lambda=c/\nu$ ([[def-sr-null-wave-covector-and-observer-frequency]]); the direction and frequency transformation used below is the theorem's ([[pthm-sr-null-wave-doppler-and-aberration]]).

[L1] For the chart pair of the Given the theorem gives $\omega'=\gamma(1-\beta\cdot s)\omega$, and in the axis case $\beta=be_1$ the direction formulas $s'_1=(s_1-b)/(1-bs_1)$, $s'_2=s_2/[\gamma(1-bs_1)]$, $s'_3=s_3/[\gamma(1-bs_1)]$ ([[pthm-sr-null-wave-doppler-and-aberration]], clauses (i) and (ii)).

[L2] Aberration clause: for $\beta\ne0$, with $\theta,\theta'$ the angles between $s,s'$ and the boost axis, $\cos\theta'=(\cos\theta-|\beta|)/(1-|\beta|\cos\theta)$ ([[pthm-sr-null-wave-doppler-and-aberration]], clause (v)).

[L3] $\gamma=(1-|\beta|^2)^{-1/2}$, so for $\beta=(3/5)e_1$: $\gamma=(16/25)^{-1/2}=5/4$ and $|\beta|=3/5$; the boost transformation of the frame data is the one of [[lem-sr-null-covector-boost-transformation]] ([[def-lorentz-boost]]).

## Verification

**Proof technique:** direct.

1.1 The transformed direction. Here $s=(4/5,3/5,0)$ has $|s|^2=16/25+9/25=1$ and $s_1=4/5$; the axis formulas of [L1] with $b=3/5$ and $\gamma=5/4$ [L3] give $s'_1=(4/5-3/5)/(1-(3/5)(4/5))=(1/5)/(13/25)=5/13$, $s'_2=(3/5)/[(5/4)(13/25)]=(3/5)/(13/20)=12/13$ and $s'_3=0$, so $s'=(5/13,12/13,0)$ with $|s'|^2=25/169+144/169=1$; the same value follows from the aberration clause [L2], $\cos\theta'=(4/5-3/5)/(1-(3/5)(4/5))=(1/5)/(13/25)=5/13$. [A1, L1, L2, L3]

1.2 Frequency and wavelength. By [L1] with $\beta\cdot s=(3/5)(4/5)=12/25$: $\omega'/\omega=\gamma(1-12/25)=(5/4)(13/25)=13/20$, so $\nu'=\omega'/(2\pi)=(13/20)\nu$ and $\lambda'=c/\nu'=(20/13)\lambda$ by [A1]. [A1, L1, L3]

2.1 The apparent direction. By the incoming-direction convention in the Example, the apparent source direction is $-s$ in $x$ and $-s'$ in $x'$; its components along the boost axis $\beta_{\mathrm{hat}}=e_1$ are $-s_1=-4/5$ and $-s'_1=-5/13$ by step 1.1. Since $5/13<4/5$ (as $25<52$), also $-5/13>-4/5$: the axis component of the apparent direction increases, so the apparent direction moves toward $+e_1$, the direction of motion of the frame $x'$ relative to $x$, which is the sign of stellar aberration in this configuration. The computation is conditional on the ideal plane-wave model, records the exact direction transformation, and makes no measurement or empirical claim; no choice principle is used. [step 1.1, step 1.2, L2] ∎
