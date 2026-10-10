---
id: def-sr-null-wave-covector-and-observer-frequency
kind: definition
title: 'Null wave covectors, frame frequency data and the observer frequency of an ideal plane wave'
status: draft
origin: pipeline
domain: physics
physical_scope: 'Ideal wave vocabulary in flat classical special-relativistic spacetime: the angular frequency, linear frequency, wave vector, wavelength and propagation direction attached to a future null wave covector in an inertial frame, and the observer-frequency sign convention omega_n = -c k(n) = -k(U_o) for an ideal observer. Conditional on the model''s SI conventions; excludes quantum photon and energy identifications, media and dispersion, amplitude and intensity, sources and detectors, real apparatus, and every measurement or empirical claim.'
deps: [def-sr-affine-phase-and-wave-covector,
       lem-sr-metric-duality-on-lorentz-vector-space,
       lem-sr-future-causal-pairing-negative,
       lem-sr-null-covector-frame-data,
       lem-sr-phase-rate-along-worldline,
       def-sr-si-units-and-coordinate-conventions,
       def-inertial-frame-and-inertial-chart,
       def-sr-four-velocity-and-four-acceleration,
       thm-sr-proper-time-and-observer-decomposition,
       def-causal-classification-of-lorentz-vectors,
       def-time-orientation-and-future-causal-sets,
       thm-algebra-of-continuous-functions, thm-continuous-implies-integrable,
       thm-ftc-first-part, cor-mean-value-theorem, thm-intermediate-value,
       def-oriented-integral, thm-algebra-of-derivatives, thm-cauchy-schwarz-finite]
dependency_roles:
  def-sr-affine-phase-and-wave-covector: formulation-prerequisite
  lem-sr-metric-duality-on-lorentz-vector-space: mathematical-premise
  lem-sr-future-causal-pairing-negative: mathematical-premise
  lem-sr-null-covector-frame-data: mathematical-premise
  lem-sr-phase-rate-along-worldline: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  def-sr-four-velocity-and-four-acceleration: formulation-prerequisite
  thm-sr-proper-time-and-observer-decomposition: formulation-prerequisite
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.2 The stretch factor is the Doppler shift pp. 55-57, Section 3.3 Combination of velocities pp. 57-59, Section 6.4 Duality pp. 134-137 (the frequency covector and its dual), Section 6.5.1 Doppler shift p. 137, Section 6.5.2 Aberration pp. 137-139 and Section 6.6.1 Phase velocity pp. 140-141; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes for PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28: phase matching and the wave four-vector (6.1)-(6.5) pp. 25-26, longitudinal Doppler effect (6.1.1) p. 26, transverse Doppler effect (6.1.2) p. 27 and aberration (6.2) p. 28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
    - title: 'A. Einstein, Zur Elektrodynamik bewegter Koerper, Annalen der Physik 322 (10) 891-921 (1905), Section 7 Theorie des Dopplerschen Prinzips und der Aberration, journal pp. 910-912: transformed wave phase and frequency nu'' = nu (1 - cos(phi) v/V)/sqrt(1-(v/V)^2), the longitudinal special case and the aberration law; proofread transcription of the original at German Wikisource'
      url: 'https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper'
---

## Definition

Adopt the SI coordinate and unit conventions of [[def-sr-si-units-and-coordinate-conventions]]: in every inertial chart $x^0=ct$ with $c>0$ in metres per second and spatial coordinates in metres, so $c$ is the model's conversion constant. Let $k$ be a future null wave covector and $\theta$ its affine phase ([[def-sr-affine-phase-and-wave-covector]]). Take $\theta$ dimensionless; its covector components then have unit $\mathrm m^{-1}$.

**Angular convention.** Here angles use radian arc length on the unit circle. An explicit construction, also fixing $\pi$, is $a(t):=2\int_0^t(1+r^2)^{-1}\,\mathrm dr$ for $0\le t\le1$, and $\pi:=2a(1)$. These are finite Riemann integrals ([[def-oriented-integral]]): the integrand is continuous with positive denominator by [[thm-algebra-of-continuous-functions]] and integrable by [[thm-continuous-implies-integrable]]. By [[thm-ftc-first-part]], $a'(t)=2/(1+t^2)>0$; [[cor-mean-value-theorem]] makes $a$ strictly increasing, and [[thm-intermediate-value]] makes it a bijection onto $[0,\pi/2]$. This is the arc-length parameter of the quarter-circle $q(t)=((1-t^2)/(1+t^2),2t/(1+t^2))$: the sum, product and quotient rules of [[thm-algebra-of-derivatives]] give $q'(t)=(-4t,2(1-t^2))/(1+t^2)^2$, hence $|q'(t)|=2/(1+t^2)$, and $|q(t)|=1$.

For $\alpha\in[0,\pi/2]$, let $t$ be the unique value with $a(t)=\alpha$ and define $\cos\alpha:=(1-t^2)/(1+t^2)$ and $\sin\alpha:=2t/(1+t^2)$; for $\alpha\in[\pi/2,\pi]$ use the unique $t$ with $a(t)=\pi-\alpha$ and define $\cos\alpha:=-(1-t^2)/(1+t^2)$ and $\sin\alpha:=2t/(1+t^2)$. The definitions agree at $\pi/2$. The rational function $(1-t^2)/(1+t^2)$ decreases continuously from $1$ to $0$, since its difference at $v>u\ge0$ is $-2(v^2-u^2)/[(1+v^2)(1+u^2)]<0$. Thus cosine is a strictly decreasing bijection $[0,\pi]\to[-1,1]$; write $\arccos$ for its inverse. For spatial coordinate vectors $v,w\in\mathbb R^3$ in one named inertial frame, write $v\cdot w:=\sum_{i=1}^3v_iw_i$ and $|v|:=\sqrt{\sum_{i=1}^3v_i^2}$. If $v,w$ are nonzero, their norms are positive and their **angle** is $\arccos((v\cdot w)/(|v||w|))$: [[thm-cauchy-schwarz-finite]], applied to the three real coordinate entries, gives $|v\cdot w|\le|v||w|$, so division by $|v||w|>0$ puts the argument in $[-1,1]$. For unit vectors it is $\arccos(v\cdot w)$. These formulas give $\sin\alpha\ge0$ and $\sin^2\alpha+\cos^2\alpha=1$ on $[0,\pi]$ and fix a full turn as $2\pi$.

**(a) Frame data as wave data.** In the inertial chart of a frame $(o;e_0,e_1,e_2,e_3)$ ([[def-inertial-frame-and-inertial-chart]]) let $(\varpi,s)$ be the frame data of $k$ given by [[lem-sr-null-covector-frame-data]], so $\varpi=-k(e_0)>0$ and $|s|=1$. Define the **angular frequency** $\omega:=c\varpi$ (unit $\mathrm s^{-1}$), the **linear frequency** $\nu:=\omega/(2\pi)$ (unit $\mathrm s^{-1}$, hertz), the **wave vector** $\kappa:=(\omega/c)s$ (unit $\mathrm m^{-1}$, with $|\kappa|=\omega/c$), the **wavelength** $\lambda:=2\pi/|\kappa|=2\pi c/\omega=c/\nu$ (unit $\mathrm m$), and the **propagation direction** $s$ (dimensionless). In these conventions the phase is $\theta(p)=-\omega t+\kappa\cdot x_{\mathrm{vec}}(p)+\mathrm{const}$ with $t:=x^0(p)/c$ the coordinate time in seconds, so the components of $k$ in the chart are

$$k_a=\bigl(-\omega/c,(\omega/c)s_1,(\omega/c)s_2,(\omega/c)s_3\bigr).$$

**(b) Observer frequency.** For an ideal observer whose four-velocity is $U_o=cn$ with $n\in V$ future unit timelike, $\eta(n,n)=-1$ ([[def-sr-four-velocity-and-four-acceleration]], [[thm-sr-proper-time-and-observer-decomposition]]), define the **observer angular frequency** of the wave as

$$\omega_n:=-ck(n)=-k(U_o)\qquad(\text{unit }\mathrm s^{-1}),$$

and the **observer linear frequency** as $\omega_n/(2\pi)$. By [[lem-sr-phase-rate-along-worldline]] this is minus the rate of change of the phase with respect to the observer's own proper time, and the sign convention makes it positive.

**(c) Well-definedness.** $\varpi=-k(e_0)>0$ and $|s|=1$ in every inertial frame, hence $\omega>0$ and $\lambda>0$ are well defined and independent of the choices made in their computation (frame-data lemma); $\omega_n>0$ for every future unit timelike $n$ and every future null wave covector $k$ ([[lem-sr-future-causal-pairing-negative]], [[lem-sr-metric-duality-on-lorentz-vector-space]]), so every ideal observer reads a positive angular frequency, and $\omega_n$ depends only on $k$ and the observer vector $n$. The classification of $k$ as future null is the one of [[def-causal-classification-of-lorentz-vectors]] and [[def-time-orientation-and-future-causal-sets]].

**(d) Scope.** This item fixes definitions, units and sign conventions only. It does not assert that any physical light is described by such a phase; that identification is adopted in post-sr-ideal-plane-wave-model. It contains no quantum identification of energy with $\hbar\omega$, no amplitude or intensity content, no medium or dispersion model, no source or detector model, and no measurement or empirical claim. No choice principle is used.
