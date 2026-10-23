---
id: pthm-fd-capillary-wave-model-prediction
kind: physics-theorem
title: Linear capillary-gravity wave dispersion
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-mean-value-theorem
  - def-complex-exponential
  - def-complex-numbers-and-arithmetic
  - def-hyperbolic-functions
  - def-pi-via-first-positive-cosine-zero
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-chain-rule-for-complex-derivatives
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-numbers-form-a-field
  - thm-hyperbolic-identities-and-derivatives
  - post-fd-capillary-linear-free-surface
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-chain-rule-for-complex-derivatives: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  post-fd-capillary-linear-free-surface: physical-assumption
physical_scope: >-
  Conditional dispersion prediction for nonzero periodic normal modes of the
  stated inviscid finite-depth linear capillary-gravity model; it does not
  establish empirical validity or nonlinear well-posedness.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT OpenCourseWare 18.354, Nonlinear Dynamics II: Continuum Systems, Spring 2015 Lecture Notes (authors: Michael Brenner, Tom Peacock, Roman Stocker, Pedro Reis, Jörn Dunkel)"
      url: "https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf"
      locator: "§23.1, printed pp. 104–105, equations (547)–(551): linearized conditions and deep-water mode elimination."
    - title: "Howard Georgi, MIT OpenCourseWare 8.03SC, The Physics of Waves, Fall 2016 textbook"
      url: "https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf"
      locator: "§§11.5.1–11.5.2, printed pp. 285–291, equations (11.120)–(11.140): finite-depth capillary-gravity mode and independent energy derivation."
    - title: "Richard Fitzpatrick, Fluid Mechanics, University of Texas at Austin, 'Gravity Waves'"
      url: "https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node147.html"
      locator: "Chapter 11, equations (11.17)–(11.21): vertical mode solution and finite-depth gravity-wave boundary calculation."
    - title: "Richard Fitzpatrick, Fluid Mechanics, University of Texas at Austin, 'Surface Tension'"
      url: "https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html"
      locator: "Chapter 11, equations (11.116)–(11.121): signed capillary pressure condition and finite-depth capillary-gravity dispersion formula."
verification:
  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open interval and let $E$ be an oriented three-dimensional Euclidean affine space, so the adopted Newtonian spacetime is $I\times E$ with absolute time $t\in I$. Define $\mathrm{SO}(3):=\{Q\in\mathbb R^{3\times3}:Q^{\mathsf T}Q=I_3,\ \det Q=1\}$. Use an adapted Cartesian inertial chart $\mathbf r:E\to\mathbb R^3$, an orientation-preserving affine isometry whose linear part lies in $\mathrm{SO}(3)$; inertial charts are related by $t^*=t+t_0$ and $\mathbf r^*=Q\mathbf r+vt+a$, with constant $t_0$ in seconds, constant $Q\in\mathrm{SO}(3)$, $v\in\mathbb R^3$ constant in metres per second, and $a\in\mathbb R^3$ constant in metres. In these coordinates, time is measured in seconds and spatial coordinates $(x_1,x_2,z)$ in metres. Fix $h>0$ metres and horizontal periods $L_1,L_2>0$ metres, and set $\mathbb T^2_L:=\mathbb R^2/(L_1\mathbb Z\times L_2\mathbb Z)$. Use the real constant $\pi$ defined as twice the least positive zero of cosine. A field on $\mathbb T^2_L$ is interpreted by its lift $\widetilde f(\widetilde x)=f([\widetilde x])$ to $\mathbb R^2$, periodic under translations $(L_1n_1,L_2n_2)$ for integers $n_1,n_2$; on products with $I$ and $[-h,0]$, $C^r$ means the lifted field has continuous ordinary coordinate partial derivatives through total order $r$, with continuous one-sided extensions at $z=-h,0$. Define $\nabla_h:=(\partial_{x_1},\partial_{x_2})$ and $\Delta_h:=\partial_{x_1}^2+\partial_{x_2}^2$ on these lifts. The real first-order fields are unrestricted formal perturbation coefficients, rather than finite-displacement interfaces: $\phi:\mathbb T^2_L\times[-h,0]\times I\to\mathbb R$ and $\eta:\mathbb T^2_L\times I\to\mathbb R$ are those of the postulated model; they are at least $C^3$ and $C^2$ respectively, with units metres squared per second and metres. The model parameters are constant density $\rho>0$ in kilograms per cubic metre, downward gravitational acceleration $-g e_z$ with $g>0$ in metres per second squared, and surface tension $\gamma>0$ in newtons per metre. They satisfy

$$\Delta_h\phi+\partial_z^2\phi=0\quad(-h<z<0),\qquad \partial_z\phi(x,-h,t)=0,$$

$$\partial_t\eta(x,t)=\partial_z\phi(x,0,t),\qquad \partial_t\phi(x,0,t)+g\eta(x,t)-\frac{\gamma}{\rho}\Delta_h\eta(x,t)=0.$$

Let $\mathbb C:=\mathbb R[X]/(X^2+1)$ be the complex field and $i:=[X]$, so $i^2=-1$. Let $\exp:\mathbb C\to\mathbb C$ be the series-defined complex exponential, $\exp w:=\sum_{n=0}^{\infty}w^n/n!$. For $m=(m_1,m_2)\in\mathbb Z^2\setminus\{(0,0)\}$ define the wavevector $\mathbf k:=2\pi(m_1/L_1,m_2/L_2)\in\mathbb R^2$ in inverse metres and its magnitude $k:=|\mathbf k|>0$. The phase terms $\mathbf k\cdot\widetilde x$ and $\omega t$ are dimensionless. For $\omega\in\mathbb C$ in inverse seconds, define the mode factor on the quotient torus by

$$q_m([x],t):=\exp\bigl(i(\mathbf k\cdot\widetilde x-\omega t)\bigr),$$

where $\widetilde x\in\mathbb R^2$ is any representative of $[x]\in\mathbb T^2_L$. If $\widetilde x$ changes by $(L_1n_1,L_2n_2)$, the phase in parentheses changes by $2\pi N$ for $N=m_1n_1+m_2n_2\in\mathbb Z$; the complex-exponential addition law and $e^{i\pi}=-1$ give $\exp(2\pi iN)=1$ for every integer $N$ (by repeated addition for $N\ge0$ and $\exp(w)\exp(-w)=1$ for $N<0$), so $q_m$ is independent of the representative. Its lift is smooth, and $\Delta_hq_m=-k^2q_m$.

A complex mode of angular frequency $\omega$ is a pair $\eta_c(x,t)=Hq_m(x,t)$ and $\phi_c(x,z,t)=F(z)q_m(x,t)$ satisfying the complex-linear extension of the displayed model equations, with $H\in\mathbb C\setminus\{0\}$ in metres and $F\in C^2([-h,0],\mathbb C)$ in metres squared per second; here $C^2([-h,0],\mathbb C)$ means that the first two ordinary derivatives exist on $(-h,0)$ and extend continuously to both endpoints. The real and imaginary parts of any such mode are real-valued formal coefficient solutions of the real linear model, with no restriction on $|H|$. Optional finite-displacement graphs are $z=\varepsilon\eta$ with sufficiently small dimensionless $\varepsilon$ on compact time windows as in the postulate; they impose no amplitude bound on these coefficients and no nonlinear-solution claim. For real $s$ write $e^s:=\exp(s)$, $\sinh s:=(e^s-e^{-s})/2$, $\cosh s:=(e^s+e^{-s})/2$, and $\tanh s:=\sinh s/\cosh s$. Such a nonzero mode exists exactly when

$$\omega^2=\left(gk+\frac{\gamma}{\rho}k^3\right)\tanh(kh),$$

For these hypotheses the right-hand side is positive because $k,h,g,\gamma,\rho>0$ and $\tanh(kh)>0$. Thus for each $m$ the two frequencies $\omega=\pm\sqrt{(gk+(\gamma/\rho)k^3)\tanh(kh)}$, with the positive real square root, admit a nonzero mode. This is a conditional prediction of the stated first-order model, not a measurement or a claim that any actual fluid realizes every assumption.

## Statement references

[MIT OpenCourseWare 18.354, *Nonlinear Dynamics II: Continuum Systems*, §23.1, printed pp. 104–105](https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf)

[Georgi, *The Physics of Waves*, §§11.5.1–11.5.2, printed pp. 285–291](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf)

[Fitzpatrick, *Fluid Mechanics*, “Gravity Waves,” equations (11.17)–(11.21)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node147.html)

[Fitzpatrick, *Fluid Mechanics*, “Surface Tension,” equations (11.116)–(11.121)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html)

## Facts & Assumptions

**Given:** The parameters, domains, regularity and mode form in the Statement, with the real first-order model equations stated there.

[A1] [[post-fd-capillary-linear-free-surface]] adopts the model on Newtonian spacetime $I\times E$, with an adapted Cartesian inertial chart and constant Galilean transformations; its horizontal torus fields and derivatives are defined by their $L$-periodic lifts. It assumes $\rho,g,\gamma,h>0$, $\phi$ at least $C^3$, $\eta$ at least $C^2$, and the same bulk, bottom, kinematic and dynamic equations used here. Its surface variable is an unrestricted formal first-order coefficient; optional scaled geometry imposes no mode-amplitude bound. The postulate's finite reflection construction and kinematic-equation argument reconcile its up-to-boundary regularity with the mathematical formulation. The model is conditional and makes no empirical validity claim.

[L1] [[def-complex-numbers-and-arithmetic]] defines $\mathbb C=\mathbb R[X]/(X^2+1)$ and $i=[X]$, with $i^2=-1$; [[thm-complex-numbers-form-a-field]] proves that this is a field with unique $a+bi$ form and no zero divisors.

[L2] [[def-complex-exponential]] defines $\exp w=\sum_{n=0}^{\infty}w^n/n!$ for $w\in\mathbb C$, with convergence for every $w$; [[thm-complex-exponential-is-entire-with-derivative-itself]] proves it is entire and $\exp'(w)=\exp(w)$.

[L3] [[thm-complex-exponential-addition-and-real-extension]] proves $\exp(z+w)=\exp z\exp w$ for $z,w\in\mathbb C$ and that $\exp(x)=e^x$ for real $x$; [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $\exp(i\pi)=-1$, with $\pi$ defined by [[def-pi-via-first-positive-cosine-zero]]. Thus $\exp(w)\exp(-w)=\exp(0)=1$ and $\exp(2\pi iN)=1$ for each $N\in\mathbb Z$ (repeated addition for $N\ge0$, and the reciprocal identity for $N<0$).

[L4] [[thm-chain-rule-for-complex-derivatives]]: for holomorphic maps $f:U\to V$ and $g:V\to\mathbb C$ on open complex domains, $(g\circ f)'(a)=g'(f(a))f'(a)$ whenever the displayed derivatives exist. It applies to the entire exponential composed with the affine complexifications of each coordinate and time variable.

[L5] [[def-hyperbolic-functions]] defines $\sinh s=(e^s-e^{-s})/2$, $\cosh s=(e^s+e^{-s})/2$ and $\tanh s=\sinh s/\cosh s$ for real $s$, with $\cosh s>0$.

[L6] [[thm-hyperbolic-identities-and-derivatives]] proves $\sinh'=\cosh$, $\cosh'=\sinh$, $\cosh s>0$, and that $\sinh$ is odd and strictly increasing and $\tanh$ is strictly increasing on $\mathbb R$. In particular, for $s>0$, $\sinh s>0$ and $\tanh s>0$.

[L7] The real chain rule ([[thm-chain-rule]]) and product rule ([[thm-algebra-of-derivatives]]) differentiate real-variable compositions and products. The mean value theorem ([[cor-mean-value-theorem]]) states that for real $a<b$ and $f$ continuous on $[a,b]$ and differentiable on $(a,b)$, there is $c\in(a,b)$ such that $f(b)-f(a)=f'(c)(b-a)$; applied to real and imaginary parts, it implies that a $C^1$ complex-valued function with zero derivative on an interval is constant.

[L8] [[thm-reals-cauchy-complete]] establishes that $\mathbb R$ is a complete totally ordered field. Instantiate [[thm-of-square-roots]] with $F=\mathbb R$: each positive real $\Lambda$ has a unique positive real root $s$ with $s^2=\Lambda$. These suppliers impose no choice assumption.

## Proof

1.1 Complexifying one horizontal coordinate or the time variable gives an affine holomorphic exponent. By [L2] and [L4], the periodic lift of $q_m$ satisfies $\partial_{x_j}q_m=i k_jq_m$ for $j=1,2$ and $\partial_tq_m=-i\omega q_m$. [given, L2, L4, algebra]

1.2 By [L3], $q_m$ never vanishes because $\exp(w)\exp(-w)=1$. Differentiating the horizontal identities in step 1.1 once more gives $\Delta_hq_m=-(k_1^2+k_2^2)q_m=-k^2q_m$. [step 1.1, L3, algebra]

2.1 Substituting $\phi_c=F(z)q_m$ into the bulk equation and dividing by the nonzero factor $q_m$ gives $F''(z)-k^2F(z)=0$ on $(-h,0)$. [given, A1, step 1.2, algebra]

2.2 To solve this equation under only $F\in C^2([-h,0],\mathbb C)$, put $y=z+h\in[0,h]$, $\widehat F(y):=F(y-h)$, $\alpha:=F(-h)$, $\beta:=F'(-h)/k$, and $G(y):=\alpha\cosh(ky)+\beta\sinh(ky)$. By [L5], [L6] and the real chain rule, $G''=k^2G$, $G(0)=\widehat F(0)$ and $G'(0)=\widehat F'(0)$. Let $D:=\widehat F-G$ and $U:=D'-kD$; then $D\in C^2$, $D(0)=D'(0)=0$, and the differential equation gives $U'=D''-kD'=-kU$. From [L5] and [L6], $e^{ky}=\cosh(ky)+\sinh(ky)$ and $(e^{ky})'=ke^{ky}$; hence [L7] gives $(e^{ky}U)'=0$. The mean value theorem applied to both components makes $e^{ky}U$ constant, and its value at $0$ is zero. By [L3], $e^{ky}\ne0$, so $U=0$. A second use of [L7] gives $(e^{-ky}D)'=e^{-ky}(D'-kD)=e^{-ky}U=0$; the same mean-value argument and $D(0)=0$ give $D=0$. Thus every $C^2$ solution has the general form $F(z)=\alpha\cosh(k(z+h))+\beta\sinh(k(z+h))$, and this representation is smooth. [given, L3, L5, L6, L7, step 2.1, construct, algebra]

3.1 Since $q_m\ne0$ by step 1.2, the bottom condition gives $F'(-h)=k\beta=0$, so $\beta=0$ because $k>0$; therefore $F(z)=\alpha\cosh(k(z+h))$. [given, step 1.2, step 2.2, algebra]

3.2 Substitution into the kinematic condition and cancellation of $q_m$ using step 1.2 gives $-i\omega H=\alpha k\sinh(kh)$. [given, A1, step 1.1, step 1.2, step 3.1, algebra]

3.3 Substitution into the dynamic condition, using $\Delta_h\eta_c=-k^2\eta_c$ from step 1.2 and canceling $q_m\ne0$, gives $-i\omega\alpha\cosh(kh)+(g+\gamma k^2/\rho)H=0$. [given, A1, step 1.1, step 1.2, step 3.1, algebra]

4.1 Since $kh>0$, [L6] gives $\sinh(kh)>0$; also $g+\gamma k^2/\rho>0$. If $\omega=0$, step 3.2 forces $\alpha=0$, and step 3.3 then forces $H=0$, contrary to the mode definition. Thus $\omega\ne0$. [given, step 3.2, step 3.3, L6, algebra]

5.1 Solve step 3.2 for $\alpha=-i\omega H/(k\sinh(kh))$ and substitute into step 3.3. Using $(-i)^2=-1$ and $H\ne0$ yields $\omega^2=k(g+\gamma k^2/\rho)\tanh(kh)=(gk+(\gamma/\rho)k^3)\tanh(kh)$. [given, step 3.2, step 3.3, step 4.1, algebra]

6.1 Let $\Lambda:=(gk+(\gamma/\rho)k^3)\tanh(kh)>0$, using $kh>0$ and [L6]. By [L8], $\sqrt\Lambda$ exists and is a positive real number. By [L1], $\omega^2=\Lambda$ implies $(\omega-\sqrt\Lambda)(\omega+\sqrt\Lambda)=0$ and hence $\omega=\pm\sqrt\Lambda$, with the positive real square root. For either root and any $H\ne0$, set $\alpha:=-i\omega H/(k\sinh(kh))$, $F(z):=\alpha\cosh(k(z+h))$, and $\eta_c:=Hq_m$. The definitions and [L5]–[L6] give $F''=k^2F$, $F'(-h)=0$, and step 1.1 gives the required horizontal and time derivatives; step 3.2 holds by construction, while step 3.3 follows from $\omega^2=\Lambda$. These are nonzero modes for both frequencies, and every nonzero mode has one of these frequencies by step 5.1. [given, L1, L5, L6, L8, step 1.1, step 3.2, step 3.3, step 5.1, construct, algebra] ∎
