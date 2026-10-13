---
id: pthm-sr-null-wave-doppler-and-aberration
kind: physics-theorem
title: 'Doppler shift and aberration for an ideal plane wave between inertial descriptions'
status: published
origin: pipeline
domain: physics
physical_scope: 'Conditional Doppler-shift and aberration predictions of the ideal plane-wave model of flat classical special-relativistic spacetime, for inertial descriptions related by a passive boost and for ideal observers with subluminal coordinate velocity. Excludes quantum photons, media and dispersion, intensity and polarization, real sources and detectors, accelerating observers, gravitation, and every measurement, statistical or empirical claim; the idealizations of the adopted postulates travel to all consumers.'
deps: [post-sr-inertial-covariance, post-sr-ideal-clocks-and-light,
       post-sr-ideal-plane-wave-model,
       def-sr-null-wave-covector-and-observer-frequency,
       def-sr-si-units-and-coordinate-conventions,
       lem-sr-null-covector-boost-transformation,
       lem-sr-null-covector-frame-data,
       lem-sr-phase-rate-along-worldline,
       def-sr-affine-phase-and-wave-covector,
       def-lorentz-boost,
       thm-sr-proper-time-and-observer-decomposition,
       def-sr-four-velocity-and-four-acceleration,
       def-inertial-frame-and-inertial-chart,
       lem-inertial-chart-transitions-are-affine-lorentz,
       def-spatial-euclidean-structure-of-an-inertial-frame]
dependency_roles:
  post-sr-inertial-covariance: physical-assumption
  post-sr-ideal-clocks-and-light: physical-assumption
  post-sr-ideal-plane-wave-model: physical-assumption
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  lem-sr-null-covector-boost-transformation: mathematical-premise
  lem-sr-null-covector-frame-data: mathematical-premise
  lem-sr-phase-rate-along-worldline: mathematical-premise
  def-sr-affine-phase-and-wave-covector: mathematical-premise
  def-lorentz-boost: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: formulation-prerequisite
dependency_level: 15
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.2 The stretch factor is the Doppler shift pp. 55-57, Section 3.3 Combination of velocities pp. 57-59, Section 6.4 Duality pp. 134-137, Section 6.5.1 Doppler shift p. 137 and Section 6.5.2 Aberration pp. 137-139; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, Sections 6.1.1-6.1.2 pp. 26-27 and Section 6.2 p. 28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
    - title: 'A. Einstein, Zur Elektrodynamik bewegter Koerper, Annalen der Physik 322 (10) 891-921 (1905), Section 7 pp. 910-912: frequency nu'' = nu (1 - cos(phi) v/V)/sqrt(1-(v/V)^2), the longitudinal special case and the aberration law cos(phi'') = (cos(phi)-v/V)/(1-(v/V)cos(phi)); proofread transcription of the original at German Wikisource'
      url: 'https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper'
---

## Statement

Adopt [[post-sr-inertial-covariance]], [[post-sr-ideal-clocks-and-light]] and [[post-sr-ideal-plane-wave-model]], and the conventions of [[def-sr-si-units-and-coordinate-conventions]]. Let $x$ and $x'$ be inertial charts whose transition is $x'=B(\beta)x+b$ with $\beta\in\mathbb R^3$, $|\beta|<1$, $b\in\mathbb R^4$ and $B(\beta)$ the passive boost of [[def-lorentz-boost]]; write $\gamma:=(1-|\beta|^2)^{-1/2}$ and $\beta_{\mathrm{hat}}:=\beta/|\beta|$ for $\beta\ne0$, so that the frame $x'$ moves with velocity $v=c\beta$ relative to the frame $x$ in the direction $\beta_{\mathrm{hat}}$ (step 1.1 records this). Let the ideal wave of the model have phase $\theta$ with future null wave covector $k$ and frame-$x$ data $(\omega,s)$ in the sense of [[def-sr-null-wave-covector-and-observer-frequency]]: $\omega>0$, $s\in\mathbb R^3$ with $|s|=1$ and $k_a=(-\omega/c,(\omega/c)s_1,(\omega/c)s_2,(\omega/c)s_3)$ in $x$. Then, conditionally on the adopted model:

**(i) Frame data in $x'$.** The data of the same covector $k$ in $x'$ is $(\omega',s')$ with

$$\omega'=\gamma(1-\beta\cdot s)\,\omega>0,\qquad s'=\frac{s+\frac{\gamma-1}{|\beta|^2}(\beta\cdot s)\beta-\gamma\beta}{\gamma(1-\beta\cdot s)}$$

for $\beta\ne0$ (and $\omega'=\omega$, $s'=s$ for $\beta=0$), so $|s'|=1$ and $k'_a=(-\omega'/c,(\omega'/c)s'_1,(\omega'/c)s'_2,(\omega'/c)s'_3)$ in $x'$. In the axis case $\beta=be_1$ with $b\in(-1,1)$: $s'_1=(s_1-b)/(1-bs_1)$ and $(s'_2,s'_3)=(s_2,s_3)/[\gamma(1-bs_1)]$.

**(ii) Reading and frequency ratios.** The rest observers of $x$ and $x'$ (four-velocities $ce_0$ and $ce'_0$) read angular frequencies $\omega=-ck(e_0)$ and $\omega'=-ck(e'_0)$; the linear frequencies and wavelengths of the two descriptions satisfy $\nu'=\gamma(1-\beta\cdot s)\nu$ and $\lambda'=\lambda/[\gamma(1-\beta\cdot s)]$. More generally, an ideal inertial observer whose constant coordinate velocity in $x$ is $w$ (a vector of the frame's spatial three-space with $|w|<c$) reads

$$\omega_o=\gamma_w\Bigl(1-\frac{w\cdot s}{c}\Bigr)\omega,\qquad \gamma_w:=\Bigl(1-\frac{|w|^2}{c^2}\Bigr)^{-1/2};$$

equivalently $\omega_o=\gamma_w(1-\beta_w\cdot s)\omega$ with $\beta_w:=w/c$.

**(iii) Longitudinal cases.** For $\beta\ne0$, if $s=\beta_{\mathrm{hat}}$ then $\omega'=\omega\sqrt{(1-|\beta|)/(1+|\beta|)}<\omega$, $\nu'=\nu\sqrt{(1-|\beta|)/(1+|\beta|)}$ and $\lambda'=\lambda\sqrt{(1+|\beta|)/(1-|\beta|)}$: the observer moving in the direction of propagation (in the interpretation of a source at rest in $x$ located behind the observer) reads a red-shifted frequency and lengthened wavelength. If $s=-\beta_{\mathrm{hat}}$ then $\omega'=\omega\sqrt{(1+|\beta|)/(1-|\beta|)}>\omega$ and $\lambda'=\lambda\sqrt{(1-|\beta|)/(1+|\beta|)}$: blue shift for an observer moving opposite to the propagation direction (toward such a source). At $\beta=0$ every direction has $\omega'=\omega$, $\nu'=\nu$ and $\lambda'=\lambda$; no normalized boost axis is defined.

**(iv) Transverse protocols.** If $\beta\cdot s=0$ (propagation direction perpendicular to the relative velocity in the frame $x$) then $\omega'=\gamma\omega$; this is greater than $\omega$ when $\beta\ne0$ and equals $\omega$ when $\beta=0$. If $\beta\cdot s=|\beta|^2$, equivalently $s'\cdot\beta_{\mathrm{hat}}=0$ for $\beta\ne0$ (propagation direction perpendicular to the relative velocity in the frame $x'$), then $\omega'=\omega/\gamma$; this is less than $\omega$ when $\beta\ne0$ and equals $\omega$ when $\beta=0$. Both configurations are called transverse Doppler configurations in the literature, and the two factors differ for $\beta\ne0$: the direction and size of the shift are not determined by the word "transverse" without specifying the frame in which transversality holds.

**(v) Aberration.** For $\beta\ne0$, define $\theta_x:=\arccos(\beta_{\mathrm{hat}}\cdot s)$ and $\theta_{x'}:=\arccos(\beta_{\mathrm{hat}}\cdot s')$ in $[0,\pi]$, using the angular convention of [[def-sr-null-wave-covector-and-observer-frequency]]. The primed scalar product uses the same numerical axis components in the primed frame's spatial coordinates; the two rest spaces themselves are distinct. Then

$$\cos\theta_{x'}=\frac{\cos\theta_x-|\beta|}{1-|\beta|\cos\theta_x};$$

the map $u\mapsto(u-|\beta|)/(1-|\beta|u)$ is a strictly increasing bijection of $[-1,1]$ onto itself, and in particular $\cos\theta_x=0$ gives $\cos\theta_{x'}=-|\beta|$.

**(vi) Scope and protocol.** All clauses concern one ideal plane wave and ideal observers, and frequencies are compared through the phase model at specified reception events; the results are conditional on the adopted postulates (ideal plane wave, ideal clocks, inertial covariance, flat classical spacetime) and are not empirical claims about nature, sources or apparatus. They exclude media and dispersion, modulation and signal speeds, intensity and polarization, real line widths, accelerating observers, gravitation and quantum effects; no statistical or measurement statement is made. If $\beta=0$ the transition is the pure translation $x'=x+b$: the inertial axes and wave-covector frame data agree, with $\omega'=\omega$ and $s'=s$, while the affine phase constant is transformed as in the covector and phase law.

## Facts & Assumptions

**Given:** Inertial charts $x,x'$ with $x'=B(\beta)x+b$, $\beta\in\mathbb R^3$, $|\beta|<1$, $b\in\mathbb R^4$; $\gamma=(1-|\beta|^2)^{-1/2}$; and an ideal plane wave with phase $\theta$, future null wave covector $k$ and frame-$x$ data $(\omega,s)$.

[A1] Adopted ideal plane-wave model: the level sets of $\theta$ are the wave fronts, the complete ray trajectories are the constant-phase future-directed null lines $\lambda\mapsto p+\lambda k^\sharp$ for $\lambda\in\mathbb R$, their future portions have images $p+\mathbb R_{\ge0}k^\sharp$, and an ideal observer with four-velocity $U_o=cn$ reads the angular frequency $-ck(n)=-k(U_o)$ at the reception event ([[post-sr-ideal-plane-wave-model]]).

[A2] Adopted ideal light: ideal vacuum light rays are exactly the future null straight lines, with coordinate speed $c$ in every inertial chart, and real clocks and light are not claimed to be exactly ideal ([[post-sr-ideal-clocks-and-light]]).

[A3] Adopted inertial covariance: the inertial changes of description of the model are the affine maps with proper orthochronous Lorentz linear part, and covariance is asserted only for the specified model equations ([[post-sr-inertial-covariance]]).

[L1] With the SI conventions $x^0=ct$, the frame data $(\varpi,s)$ of $k$ in a frame and the wave data are related by $\varpi=\omega/c$, $|s|=1$, $\omega>0$, $k_a=(-\omega/c,(\omega/c)s_1,(\omega/c)s_2,(\omega/c)s_3)$, $\nu=\omega/(2\pi)$, $\lambda=c/\nu$; and an ideal observer with four-velocity $U_o=cn$ ($n$ future unit timelike) reads $\omega_n=-ck(n)=-k(U_o)>0$, which is minus the phase rate along the observer's worldline ([[def-sr-null-wave-covector-and-observer-frequency]], [[def-sr-si-units-and-coordinate-conventions]], [[lem-sr-null-covector-frame-data]], [[lem-sr-phase-rate-along-worldline]], [[def-sr-affine-phase-and-wave-covector]]).

[L2] Boost transformation of the frame data: for the chart pair of the Given, with $\varpi=\omega/c$ and $\beta\ne0$, the frame-$x'$ data $(\varpi',s')$ satisfies $\varpi'=\gamma(1-\beta\cdot s)\varpi$, $s'=\bigl[s+\frac{\gamma-1}{|\beta|^2}(\beta\cdot s)\beta-\gamma\beta\bigr]/\bigl[\gamma(1-\beta\cdot s)\bigr]$, $|s'|=1$ and $k'_a=(-\varpi',\varpi's')$; for $\beta=0$, $\varpi'=\varpi$, $s'=s$; in the axis case $\beta=be_1$, $s'_1=(s_1-b)/(1-bs_1)$, $s'_2=s_2/[\gamma(1-bs_1)]$, $s'_3=s_3/[\gamma(1-bs_1)]$; and $\beta\cdot s'=(\beta\cdot s-|\beta|^2)/(1-\beta\cdot s)$, with $\beta\cdot s'=0$ if and only if $\beta\cdot s=|\beta|^2$ ([[lem-sr-null-covector-boost-transformation]]).

[L3] $\gamma\ge1$ with equality exactly when $\beta=0$, $B(0)=\operatorname{id}$, and the matrix entries of $B(\beta)$ and $B(-\beta)$ are as displayed in [[def-lorentz-boost]]; the transition $x'=B(\beta)x+b$ of inertial charts has proper orthochronous linear part ([[lem-inertial-chart-transitions-are-affine-lorentz]]), and $B(-\beta)=B(\beta)^{-1}$ ([[lem-sr-null-covector-boost-transformation]], clause (v)).

[L4] In an inertial frame the basis vectors satisfy $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)$ with $e_0$ future, so $e_0$ and $e'_0$ are future unit timelike; the four-velocity of an observer at rest in a frame is $c$ times its first basis vector, and a point observer is a future unit timelike vector $n$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-four-velocity-and-four-acceleration]]).

[L5] Frame and component relations between the charts: the transition $x'=\Lambda x+b$ has linear part $\Lambda=B(\beta)$, the new frame's basis vectors satisfy $e'_a=\sum_b(\Lambda^{-1})^b{}_ae_b$, and the components of a covector satisfy $k'_a=(\Lambda^{-1})^b{}_ak_b$ with $\Lambda^{-1}=B(-\beta)$; in the chart of any inertial frame an affine phase with wave covector $k$ has the form $\theta(p)=k_ax^a(p)+\theta(o)$ ([[lem-inertial-chart-transitions-are-affine-lorentz]], [[lem-sr-null-covector-boost-transformation]], [[def-lorentz-boost]], [[def-sr-affine-phase-and-wave-covector]]).

[L6] Relative velocity and coordinate form: for future unit timelike $n,u$, with $\gamma_{rel}:=-\eta(n,u)$ and $h(v):=v+\eta(n,v)n$, the vector $w:=ch(u)/\gamma_{rel}$ lies in $n^\perp$ and is the velocity of the worldline with four-velocity $cu$ relative to the observer $n$; a worldline with coordinate velocity $w$ in an inertial chart, $|w|<c$, has four-velocity $U=\gamma_w(c,w_{\mathrm{vec}})$ with $\gamma_w=(1-|w|^2/c^2)^{-1/2}$, so $n=U/c=\gamma_w(1,w/c)$ is future unit timelike ([[thm-sr-proper-time-and-observer-decomposition]], clauses (a), (c), (d), (e)).

[L7] Each inertial frame has its own Euclidean spatial three-space. In all displayed direction formulas $\beta,s,w$ and $s'$ are spatial coordinate triples; primed triples refer to the primed basis, while $\beta$ supplies the common numerical boost-axis components. Norms and scalar products of triples are Euclidean; in particular $s'\cdot\beta_{\mathrm{hat}}=(\beta\cdot s')/|\beta|$ for $\beta\ne0$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]). Angles and the cosine inverse are defined in the angular convention of [[def-sr-null-wave-covector-and-observer-frequency]]. The factor $1-\beta\cdot s$ is positive because [L2] exhibits $\varpi'=\gamma(1-\beta\cdot s)\varpi$ with $\varpi,\varpi',\gamma>0$.

## Proof

**Proof technique:** direct.

1.1 Setup, and the relative velocity of the frames. By [L1] the frame-$x$ data of $k$ is $(\varpi,s)$ with $\varpi=\omega/c>0$. By the frame relation of [L5], $e'_0=\sum_b(\Lambda^{-1})^b{}_0e_b$ is the first column of $B(-\beta)$, namely $(\gamma,\gamma\beta_1,\gamma\beta_2,\gamma\beta_3)$ by [L3], so $e'_0=\gamma(e_0+\sum_i\beta_ie_i)$. Then $\eta(e_0,e'_0)=\gamma\eta(e_0,e_0)=-\gamma$ and $h(e'_0)=e'_0+\eta(e_0,e'_0)e_0=\gamma e_0+\gamma\sum_i\beta_ie_i-\gamma e_0=\gamma\sum_i\beta_ie_i$; by [L6] with $n=e_0$ and $u=e'_0$, the velocity of the $x'$-rest observer relative to the $x$-rest observer is $ch(e'_0)/(-\eta(e_0,e'_0))=c\gamma\sum_i\beta_ie_i/\gamma=c\beta$, of magnitude $c|\beta|$ in the direction $\beta_{\mathrm{hat}}$ when $\beta\ne0$. [L3, L4, L5, L6]

2.1 Clause (i). By the covector component law [L5] and [L3], $k'_a=(B(-\beta))^b{}_ak_b$; with $k_0=-\omega/c$ and $k_i=(\omega/c)s_i$ from [L1] and the matrix entries of $B(-\beta)$, this gives $k'_0=\gamma(k_0+\beta\cdot k_{\mathrm{vec}})=-\gamma(1-\beta\cdot s)\omega/c$, with $1-\beta\cdot s>0$ by the positivity clause of [L2], and $k'_i=k_i+\gamma\beta_ik_0+\frac{\gamma-1}{|\beta|^2}\beta_i(\beta\cdot k_{\mathrm{vec}})=\frac{\omega}{c}\bigl[s_i-\gamma\beta_i+\frac{\gamma-1}{|\beta|^2}(\beta\cdot s)\beta_i\bigr]$ for $\beta\ne0$ (and $k'=k$ for $\beta=0$). By the frame-data lemma [L2] the frame-$x'$ data is $(\varpi',s')$ with $\varpi'=\gamma(1-\beta\cdot s)\varpi=\gamma(1-\beta\cdot s)\omega/c$, $s'=\bigl[s+\frac{\gamma-1}{|\beta|^2}(\beta\cdot s)\beta-\gamma\beta\bigr]/\bigl[\gamma(1-\beta\cdot s)\bigr]$, $|s'|=1$ and $k'_a=(-\varpi',\varpi's')$; in wave data this is $\omega'=c\varpi'=\gamma(1-\beta\cdot s)\omega>0$ and the displayed $s'$, and the axis case is the axis clause of [L2]. [step 1.1, L1, L2, L3, L5, L7]

3.1 Clause (ii). By [L1] the rest observer of $x$ has four-velocity $ce_0$ and reads $\omega_{e_0}=-ck(e_0)=c\varpi=\omega$, and the rest observer of $x'$ has four-velocity $ce'_0$ by [L4] and reads $\omega_{e'_0}=-ck(e'_0)=c\varpi'=\omega'=\gamma(1-\beta\cdot s)\omega$ by step 2.1, so $\nu'=\omega'/(2\pi)=\gamma(1-\beta\cdot s)\nu$ and $\lambda'=c/\nu'=\lambda/[\gamma(1-\beta\cdot s)]$ by the relations $\nu=\omega/(2\pi)$, $\lambda=c/\nu$ of [L1]. For the general observer, [L6] gives $U_o=\gamma_w(c,w_{\mathrm{vec}})$, so $n=U_o/c=\gamma_w(1,w/c)$ is future unit timelike and, using linearity of $k$ and $k(e_0)=-\omega/c$, $k(e_i)=(\omega/c)s_i$ [L1], $\omega_o=-ck(n)=-c\gamma_w\bigl[k(e_0)+\sum_i(w_i/c)k(e_i)\bigr]=\gamma_w\omega\bigl(1-(w\cdot s)/c\bigr)$; with $\beta_w=w/c$ this is $\gamma_w(1-\beta_w\cdot s)\omega$. [step 2.1, L1, L4, L6]

3.2 Clause (iii). Assume $\beta\ne0$. If $s=\beta_{\mathrm{hat}}$ then $\beta\cdot s=|\beta|$ by [L7], so step 2.1 together with $\omega=c\varpi$ and [L2] gives $\omega'=\gamma(1-|\beta|)\omega$, and since $0\le|\beta|<1$, $\gamma(1-|\beta|)=(1-|\beta|)/\sqrt{1-|\beta|^2}=\sqrt{(1-|\beta|)/(1+|\beta|)}$, which is $<1$ for $|\beta|>0$ and $=1$ for $\beta=0$; substituting $s=\beta_{\mathrm{hat}}$ in the formula of [L2] gives $s'=\beta_{\mathrm{hat}}$, so the propagation direction relative to the boost axis is unchanged. The wavelength and frequency ratios are $\nu'=\omega'/(2\pi)=\gamma(1-|\beta|)\nu$ and $\lambda'=c/\nu'=\lambda/[\gamma(1-|\beta|)]=\lambda\sqrt{(1+|\beta|)/(1-|\beta|)}$ by $\nu=\omega/(2\pi)$, $\lambda=c/\nu$ [L1] and $\omega'=\gamma(1-|\beta|)\omega$. If $s=-\beta_{\mathrm{hat}}$ the same computation with $-\beta_{\mathrm{hat}}$ gives $\omega'=\gamma(1+|\beta|)\omega=\omega\sqrt{(1+|\beta|)/(1-|\beta|)}>\omega$ for $|\beta|>0$, $s'=-\beta_{\mathrm{hat}}$ and $\lambda'=\lambda\sqrt{(1-|\beta|)/(1+|\beta|)}$; the source language in the statement is an interpretation of these factors, the model carrying no source. [step 2.1, L1, L2, L7]

3.3 Clause (iv). If $\beta\cdot s=0$, step 2.1 gives $\omega'=\gamma\omega$, which is greater than $\omega$ exactly when $\gamma>1$, that is exactly when $\beta\ne0$, and equals $\omega$ when $\beta=0$, by [L3]. If $\beta\cdot s=|\beta|^2$, then by [L2] $\beta\cdot s'=0$, and for $\beta\ne0$ this is equivalent to $s'\cdot\beta_{\mathrm{hat}}=(\beta\cdot s')/|\beta|=0$; conversely $s'\cdot\beta_{\mathrm{hat}}=0$ with $\beta\ne0$ gives $\beta\cdot s'=0$ and hence $\beta\cdot s=|\beta|^2$ by [L2]. With $\beta\cdot s=|\beta|^2$ step 2.1 gives $\omega'=\gamma(1-|\beta|^2)\omega=\omega/\gamma$, which is less than $\omega$ when $\beta\ne0$ and equals $\omega$ when $\beta=0$. [step 2.1, L2, L3, L7]

3.4 Clause (v). For $\beta\ne0$ put $u:=\cos\theta_x=\beta_{\mathrm{hat}}\cdot s=(\beta\cdot s)/|\beta|$ and $u':=\cos\theta_{x'}=\beta_{\mathrm{hat}}\cdot s'=(\beta\cdot s')/|\beta|$ by [L7]; by the formula for $s'$ of step 2.1, equivalently by [L2], $u'=\bigl(\beta\cdot s-|\beta|^2\bigr)/\bigl[|\beta|(1-\beta\cdot s)\bigr]=(u-|\beta|)/(1-|\beta|u)$. Write $b:=|\beta|$ and $f(u):=(u-b)/(1-bu)$; since $0\le b<1$ one has $1-bu\ge1-b>0$ for every $u\in[-1,1]$, so $f$ is defined on $[-1,1]$. Moreover $1-bu-(u-b)=(1+b)(1-u)\ge0$ and $1-bu+(u-b)=(1-b)(1+u)\ge0$, hence $-1\le f(u)\le1$. The map $g(y):=(y+b)/(1+by)$ is likewise defined on $[-1,1]$, and the comparisons $1+by-(y+b)=(1-b)(1-y)\ge0$ and $1+by+(y+b)=(1+b)(1+y)\ge0$ show $-1\le g(y)\le1$, so $g$ maps $[-1,1]$ into itself; direct expansion of the rational expressions gives $f(g(y))=\bigl[(y+b)-b(1+by)\bigr]/\bigl[(1+by)-b(y+b)\bigr]=\bigl[y(1-b^2)\bigr]/(1-b^2)=y$ and symmetrically $g(f(u))=u$ for all $u,y\in[-1,1]$, so $f$ is a bijection of $[-1,1]$ onto itself with inverse $g$. For $v>u$ in $[-1,1]$ one has $f(v)-f(u)=\bigl[(v-b)(1-bu)-(u-b)(1-bv)\bigr]/\bigl[(1-bv)(1-bu)\bigr]=(v-u)(1-b^2)/\bigl[(1-bv)(1-bu)\bigr]>0$, so $f$ is strictly increasing; in particular $f$ is the stated strictly increasing bijection of $[-1,1]$ onto itself, with $f(-1)=-1$ and $f(1)=1$, and $u=0$ gives $u'=f(0)=-b=-|\beta|$. [step 2.1, L2, L7, algebra]

4.1 Clause (vi), $\beta=0$, and scope. If $\beta=0$ then $B(0)=\operatorname{id}$ by [L3], so $x'=x+b$ is a pure translation; by [L2] the frame data agree, $\varpi'=\varpi$ and $s'=s$, whence $\omega'=\omega$ and the x- and x'-inertial axes carry the same wave data, while the affine phase constant changes as follows: since $\beta=0$ gives $x'^a=x^a+b^a$ and [L5] gives $k'=k$, comparing the two chart forms $\theta(p)=k_ax^a(p)+\theta(o)$ and $\theta(p)=k'_ax'^a(p)+\theta(o')$ of the affine phase yields $\theta(o')=\theta(o)-k'_ab^a$. All clauses (i)-(v) were derived from the adopted postulates [A1], [A2], [A3] and the cited mathematical lemmas, are conditional on the idealizations recorded in [A1]-[A3] and the scope clause, and make no measurement, statistical or empirical claim; no choice principle was used. [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, step 3.4, L2, L3, L5] ∎
