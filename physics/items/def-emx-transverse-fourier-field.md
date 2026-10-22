---
id: def-emx-transverse-fourier-field
kind: definition
title: Classical transverse Fourier amplitudes
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 0
deps:
  - def-em-gauge-transformation
  - post-em-vacuum-maxwell
  - def-em-fields
  - def-em-lab-geometry
  - def-divergence-and-curl-of-a-c1-vector-field
  - def-directional-and-partial-derivatives
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - lem-cm-cross-product-triple-identity
  - def-schwartz-space-and-its-seminorms
  - def-em-complex-plane-wave
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-numbers-form-a-field
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - thm-chain-rule-for-total-derivatives
  - def-em-vacuum-energy-flux
  - def-em-si-conventions
  - def-multidimensional-rectangle-and-volume
  - def-multidimensional-darboux-integral
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
  - thm-multidimensional-integral-properties
  - def-complete-ordered-field
  - thm-reals-cauchy-complete
dependency_roles:
  def-em-gauge-transformation: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-cm-cross-product-triple-identity: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-em-complex-plane-wave: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-multidimensional-rectangle-and-volume: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  thm-reals-cauchy-complete: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional classical vacuum electromagnetism in a fixed, positively oriented
  inertial laboratory chart on all of R^3, with SI units and the smooth
  source-free Maxwell branch. The item defines real finite-energy Schwartz
  fields from smooth compactly supported transverse Fourier amplitudes whose
  support excludes zero frequency, in the Coulomb gauge with scalar potential
  zero. It makes no empirical claim and assigns no one-photon Hilbert-space or
  quantized interpretation.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', especially the transverse-polarization and direction-dependent discussion in PDF pp. 3–5; this item proves its compact-support Fourier construction and regularity directly."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.1 'Anfangswertproblem', subsection 'Fourier-Raum', equations (11.5)–(11.10): the source-free Fourier mode representation and its transverse amplitude equations. Compact spectral support and Schwartz decay are established here directly."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Use a fixed positively oriented inertial laboratory chart with spatial coordinate
$x\in\mathbb R^3$, time $t\in\mathbb R$, Euclidean dot and cross products, and
the SI vacuum speed $c>0$. A smooth amplitude is a map
$a:\mathbb R^3\setminus\{0\}\to\mathbb C^3$ whose coordinate partial
derivatives of every order exist and are continuous. Require its support
$K\subset\mathbb R^3\setminus\{0\}$ to be compact and require the bilinear
transversality condition
$k\cdot a(k):=\sum_{j=1}^3 k_j a_j(k)=0$ for every $k\ne0$. The dot in this
condition is bilinear, with no complex conjugation. The zero extension of $a$
to $k=0$ is understood.

For $R>0$, put $Q_R=[-R,R]^3$. Integrals of continuous real scalar functions on
$Q_R$ are the ordinary real Riemann integrals, defined as the common lower and
upper Darboux value. For a continuous
$F:Q_R\to\mathbb C^m$, define its Riemann integral componentwise by
$$\left(\int_{Q_R}F\,d^3y\right)_j:=\int_{Q_R}\operatorname{Re}F_j\,d^3y+i\int_{Q_R}\operatorname{Im}F_j\,d^3y\qquad(1\le j\le m),$$
where $y$ denotes the cube coordinates.
This also defines integrals of real vector fields by taking their imaginary
components to be zero; a real scalar is the case $m=1$. For a continuous real
scalar or finite-dimensional real/complex vector field $F$ on $\mathbb R^3$, write
$\int_{\mathbb R^3}F\,d^3x$ for the finite componentwise limit
$\lim_{R\to\infty}\int_{Q_R}F\,d^3x$ when each real-valued component
$\operatorname{Re}F_j$ and $\operatorname{Im}F_j$ has a finite limit. For
$F:\mathbb R^3\to\mathbb C^m$, say that $F$ is absolutely
integrable when the nonnegative real cube integrals
$$\int_{Q_R}\sum_{j=1}^m\bigl(|\operatorname{Re}F_j|+|\operatorname{Im}F_j|\bigr)\,d^3x$$
have a finite limit as $R\to\infty$. For a real scalar integrand this means
that the cube integrals of its absolute value have a finite limit. If this
absolute-integral limit is finite, every real or imaginary component integral
has a finite cube-exhaustion limit. For one such component $h$, set
$I_R:=\int_{Q_R}h$ and let $A_R$ denote the absolute component-sum cube integral
in the preceding display. Finite coordinate-slice additivity and the
absolute-value estimate give $|I_S-I_R|\le A_S-A_R$ for $S>R$. Since $A_R$
is nondecreasing by nonnegativity and additivity, if its limit is $A$ then
$0\le A_S-A_R\le A-A_R\to0$ uniformly for $S\ge R$. Thus these component
integrals are Cauchy as $R\to\infty$. The
integer-radius values form a Cauchy sequence and converge in $\mathbb R$; the
uniform tail bound then gives the same limit for all real radii, because an
integer radius can be chosen above any fixed real threshold. The argument uses
finite coordinate-slice additivity, the Riemann absolute-value estimate, and
completeness of $\mathbb R$. If $F$ is
continuous and compactly supported, its whole-space integral agrees with the
componentwise Riemann integral over any sufficiently large cube containing its
support and is independent of that cube. Every complex- or real-vector
integral below uses this convention. Define
the complex vector potential and its associated real fields by

$$A_+(x,t):=(2\pi)^{-3/2}\int_{\mathbb R^3}a(k)\exp\!\bigl(i(k\cdot x-c|k|t)\bigr)\,d^3k,\qquad A:=2\operatorname{Re}A_+,\qquad \varphi:=0,\qquad E:=-\partial_tA,\qquad B:=\operatorname{curl}A.$$

Here $k$ is a spatial wavevector with units $\mathrm{m^{-1}}$, $|k|$ is its
Euclidean norm, $t$ is in seconds, and $i^2=-1$; thus the phase is
dimensionless and real part is taken componentwise.
If $a$ carries units $\mathrm{T\,m^4}$, then $A$ carries $\mathrm{T\,m}$,
$E$ carries $\mathrm{V\,m^{-1}}$, and $B$ carries $\mathrm T$. These fields are
real and jointly smooth on $\mathbb R^3\times\mathbb R$; at each fixed time
$A,E,B$ are Schwartz functions of $x$, and their spatial Schwartz seminorms are
bounded on every compact time interval. They satisfy the smooth source-free
vacuum Maxwell equations and the Coulomb condition
$\operatorname{div}A=0$ with the stated scalar potential $\varphi=0$. Their
total field energy
$W(t):=\lim_{R\to\infty}\int_{[-R,R]^3}u(x,t)\,d^3x$, with $u$ the vacuum
energy density, is finite for every $t$. The amplitudes are a classical Fourier
description; no photon state is defined.

## Definition references

[[def-em-gauge-transformation]]

[[post-em-vacuum-maxwell]]

[[def-em-fields]]

[[def-em-lab-geometry]]

[[def-divergence-and-curl-of-a-c1-vector-field]]

[[def-directional-and-partial-derivatives]]

[[def-cross-product-in-r3]]

[[def-euclidean-inner-product]]

[[lem-cm-cross-product-triple-identity]]

[[def-schwartz-space-and-its-seminorms]]

[[def-em-complex-plane-wave]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[thm-complex-numbers-form-a-field]]

[[thm-complex-exponential-is-entire-with-derivative-itself]]

[[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]

[[thm-chain-rule-for-total-derivatives]]

[[def-em-vacuum-energy-flux]]

[[def-em-si-conventions]]

[[def-multidimensional-rectangle-and-volume]]

[[def-multidimensional-darboux-integral]]

[[thm-continuous-on-a-rectangle-is-riemann-integrable]]

[[thm-riemann-fubini-on-product-rectangles]]

[[thm-ftc-second-part]]

[[thm-multidimensional-integral-properties]]

[[def-complete-ordered-field]]

[[thm-reals-cauchy-complete]]

## Facts & Assumptions

**Given:** The compact set $K\subset\mathbb R^3\setminus\{0\}$, the smooth
amplitude $a$ supported in $K$ with $k\cdot a(k)=0$, the fixed SI laboratory
chart, and the fields defined above.

[F1] Schwartz space consists of actual smooth functions $f$ for which every
polynomially weighted derivative $x^\alpha\partial^\beta f$ is bounded; this
is the definition of $\mathcal S(\mathbb R^3)$.
([[def-schwartz-space-and-its-seminorms]])

[F2] A potential pair obeys $E=-\nabla\varphi-\partial_tA$ and
$B=\operatorname{curl}A$; its Coulomb condition is $\operatorname{div}A=0$.
([[def-em-gauge-transformation]])

[F3] The complex plane-wave encoding uses the componentwise real part of
$e\exp(i\theta)$; the real-part map is real-linear, $i^2=-1$, and
$\partial_z\exp z=\exp z$. The chain rule applies to the affine real phase
$k\cdot x-c|k|t$.
([[def-em-complex-plane-wave]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[thm-complex-numbers-form-a-field]],
[[thm-complex-exponential-is-entire-with-derivative-itself]],
[[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]],
[[thm-chain-rule-for-total-derivatives]])

[F4] The vacuum energy density is
$u=\frac{\varepsilon_0}{2}|E|^2+\frac{1}{2\mu_0}|B|^2$, with
$\varepsilon_0=(\mu_0c^2)^{-1}>0$.
([[def-em-vacuum-energy-flux]])

[F5] Continuous real functions on closed nondegenerate rectangles are Riemann
integrable; the Riemann integral over a rectangle is the common lower and upper
Darboux value, and iterated integrals over product rectangles agree with the
multiple integral. A derivative integrates to its endpoint increment on a
closed interval, and multidimensional integrals satisfy the absolute-value
estimate, additivity under finite coordinate cuts, and monotonicity for
nonnegative integrands. ([[def-multidimensional-rectangle-and-volume]],
[[def-multidimensional-darboux-integral]],
[[thm-continuous-on-a-rectangle-is-riemann-integrable]],
[[thm-riemann-fubini-on-product-rectangles]], [[thm-ftc-second-part]],
[[thm-multidimensional-integral-properties]])

[F6] The fixed inertial laboratory chart uses the positively oriented
coordinates $x\in\mathbb R^3$ and time $t\in\mathbb R$; the electromagnetic
fields are real vector-valued maps on this region. In SI units, $c$ is the
vacuum speed, $[c]=\mathrm{m\,s^{-1}}$, $[E]=\mathrm{V\,m^{-1}}$,
$[A]=\mathrm{T\,m}$, and $[B]=\mathrm T$.
([[def-em-lab-geometry]], [[def-em-fields]], [[def-em-si-conventions]])

[F7] Divergence, curl, and partial derivatives have the stated component
formulas. For real $k$ and complex $a$, the cross-product identity
$k\times(k\times a)=k(k\cdot a)-|k|^2a$ follows by applying the real vector
triple-product lemma to the real and imaginary parts of $a$.
([[def-divergence-and-curl-of-a-c1-vector-field]],
[[def-directional-and-partial-derivatives]], [[def-cross-product-in-r3]],
[[def-euclidean-inner-product]], [[lem-cm-cross-product-triple-identity]])

[F8] Every Cauchy sequence of real numbers converges to a real number, and
$\mathbb R$ is a complete totally ordered field: every nonempty subset of
$\mathbb R$ bounded above has a real supremum. Both conclusions are established
without a choice principle by [[thm-reals-cauchy-complete]]. The terminology
"complete ordered field" and "supremum" is defined in
[[def-complete-ordered-field]]; that definition alone is not an existence result.

[A1] The adopted smooth Maxwell branch is
$\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$,
$\operatorname{curl}E=-\partial_tB$, and
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ for smooth fields and
continuous sources. This packet uses the source-free case $\rho=0$, $J=0$.
([[post-em-vacuum-maxwell]])

## Verification

1.1 In the whole-space componentwise convention, the absolute-tail estimate in the Definition makes the integer-radius integrals of each real or imaginary component a real Cauchy sequence. Its convergence follows from [F8], and the same uniform tail estimate gives that limit for all real radii tending to infinity. This argument applies separately to each of the finitely many components and introduces no choice principle. Since $K$ is compact and excludes $0$, it has positive distance from the origin. Thus extending $a$ by zero across a neighborhood of $0$ gives a smooth compactly supported map on all of $\mathbb R^3$. For any compact time interval $J$, each function $f_t(k):=a(k)\exp(-ic|k|t)$ and each of its $t$-derivatives is smooth and supported in $K$; all its derivatives are uniformly bounded on $K\times J$. Every integral in the Definition is therefore an ordinary Riemann integral of a continuous compactly supported function. Differentiating in $x$ or $t$ under the integral is justified because the corresponding difference quotients converge uniformly on $K$ for each fixed $(x,t)$: the phase derivatives in $(x,t)$ are bounded because $k$ ranges over $K$ and $t$ lies in $J$, while the complex exponential has unit modulus. The one-variable mean-value estimate for the exponential is therefore uniform in $k$. The absolute-integral estimate in [F5] then bounds the difference between the integrals by the volume of a containing cube times the uniform error, which tends to zero. Iterating this argument for the resulting derivatives proves existence and continuity of every mixed space-time derivative. [given, F3, F5, F6, F8, construct]

2.1 For multi-indices $\alpha,\beta$, differentiating in $x$ multiplies the integrand by $(ik)^\beta$. To control a factor $x_j$, integrate the $k_j$-derivative of the product of the compactly supported factor and $\exp(ik\cdot x)$ over a containing cube. The one-dimensional FTC in [F5] gives zero boundary terms because the factor vanishes near both endpoints; Riemann-Fubini in [F5] integrates that identity over the other two coordinates. Repeating this argument transfers every monomial $x^\alpha$ to derivatives in $k$, leaving an integral of $\partial_k^\alpha((ik)^\beta f_t(k))$ times a unit-modulus exponential, up to the fixed factor of modulus one produced by integration by parts. Its absolute value is uniformly bounded in $x$ and locally uniformly in $t$. The same argument applies after any $t$-derivative, since it only adds the smooth factor $(-ic|k|)^q$ on $K$. By [F1], $A_+$, $A$, $E$, and $B$ are therefore Schwartz in $x$ at each $t$, with the claimed local bounds. [step 1.1, F1, F5, algebra]

3.1 Expanding $\prod_{j=1}^3(1+|x_j|)^2$ gives finitely many absolute monomials, each controlled by a Schwartz seminorm in [F1]. Hence each Schwartz component $h$ is bounded by $C_h\prod_j(1+|x_j|)^{-2}$. Applying this bound to $E$ and $B$ gives a constant $C\ge0$, depending on the fixed $t$, such that $0\le u(x,t)\le C G(x)$, where $G(x):=\prod_{j=1}^3(1+|x_j|)^{-4}$; nonnegativity follows from [F4]. For $R>0$, the ordinary one-dimensional Riemann integral and [F5] give
$$\int_{-R}^{R}(1+|s|)^{-4}\,ds=2\int_0^R(1+s)^{-4}\,ds=\frac23\bigl(1-(1+R)^{-3}\bigr)\le\frac23.$$
Riemann-Fubini in [F5] therefore gives $\int_{Q_R}G\,d^3x=\left(\frac23(1-(1+R)^{-3})\right)^3\le(2/3)^3$, and so $0\le W_R(t):=\int_{Q_R}u(x,t)\,d^3x\le C(2/3)^3$ for every $R>0$. If $R'>R$, cutting $Q_{R'}$ at the six coordinate planes $x_j=\pm R$ decomposes it into finitely many rectangles, including $Q_R$; finite-slice additivity and nonnegativity of the remaining cell integrals in [F5] give $W_R(t)\le W_{R'}(t)$. Thus $\{W_R(t):R>0\}$ is nonempty and bounded above. Let $W(t)$ be its supremum, which exists by [F8]. For every $\varepsilon>0$, the least-upper-bound property gives some $R_0>0$ with $W(t)-\varepsilon<W_{R_0}(t)$; for all $R\ge R_0$, monotonicity gives $W(t)-\varepsilon<W_R(t)\le W(t)$. Hence $\lim_{R\to\infty}W_R(t)=W(t)<\infty$, which is the whole-space energy defined above. [step 2.1, F1, F4, F5, F8, algebra]

3.2 Put $\gamma:=(2\pi)^{-3/2}$. Direct differentiation gives $\operatorname{div}A=2\gamma\operatorname{Re}\int i(k\cdot a(k)) \exp(i(k\cdot x-c|k|t))\,d^3k=0$. The identity $\varphi=0$ and [F2] show that $(\varphi,A)$ represents exactly the displayed $(E,B)$ and is in Coulomb gauge. [step 1.1, step 2.1, F2, algebra]

3.3 Put $q(k,x,t):=\exp(i(k\cdot x-c|k|t))$ and $\gamma:=(2\pi)^{-3/2}$. By [F3] and real-linearity of $\operatorname{Re}$, $E=2\gamma\operatorname{Re}\int i c|k|a(k)q\,d^3k$ and $B=2\gamma\operatorname{Re}\int i(k\times a(k))q\,d^3k$. Differentiating each integrand using [F3], [F7], and step 1.1 gives $\operatorname{div}E=2\gamma\operatorname{Re}\int -c|k|(k\cdot a(k))q\,d^3k=0$, $\operatorname{div}B=2\gamma\operatorname{Re}\int -k\cdot(k\times a(k))q\,d^3k=0$, $\operatorname{curl}E+\partial_tB =2\gamma\operatorname{Re}\int[-c|k|k\times a(k)+c|k|k\times a(k)]q\,d^3k=0$, and $\operatorname{curl}B-c^{-2}\partial_tE =2\gamma\operatorname{Re}\int[-k\times(k\times a(k))-|k|^2a(k)]q\,d^3k=0$. The last equality uses the cross-product identity in [F7] and $k\cdot a(k)=0$. These are the source-free equations in [A1], proving that the integrated fields satisfy the adopted smooth Maxwell branch. [step 1.1, step 2.1, A1, F3, F7, algebra]

4.1 The exponent $k\cdot x-c|k|t$ is dimensionless. Since $d^3k$ has units $\mathrm{m^{-3}}$, the assigned $[a]=\mathrm{T\,m^4}$ gives $[A]=\mathrm{T\,m}$; then $E=-\partial_tA$ has units $\mathrm{T\,m\,s^{-1}}=\mathrm{V\,m^{-1}}$, and $B=\operatorname{curl}A$ has units $\mathrm T$. These agree with [F6]. [F6, algebra] ∎

