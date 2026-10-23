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
  - post-fd-capillary-linear-free-surface
dependency_roles:
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

Let $I\subseteq\mathbb R$ be nonempty and open, $h>0$ metres, and $L_1,L_2>0$ metres. Set $\mathbb T^2_L:=\mathbb R^2/(L_1\mathbb Z\times L_2\mathbb Z)$, with horizontal coordinate $x\in\mathbb T^2_L$ in metres, vertical coordinate $z\in[-h,0]$ in metres, and absolute time $t\in I$ in seconds. Let $\rho>0$ be constant liquid mass density in kilograms per cubic metre, $g>0$ downward gravitational acceleration magnitude in metres per second squared, and $\gamma>0$ constant surface tension in newtons per metre. Let $\phi:\mathbb T^2_L\times[-h,0]\times I\to\mathbb R$ and $\eta:\mathbb T^2_L\times I\to\mathbb R$ be the first-order fields, with units metres squared per second and metres respectively, satisfying

$$\Delta_h\phi+\partial_z^2\phi=0,\quad \partial_z\phi(x,-h,t)=0,$$

$$\partial_t\eta(x,t)=\partial_z\phi(x,0,t),\quad \partial_t\phi(x,0,t)+g\eta(x,t)-\frac{\gamma}{\rho}\Delta_h\eta(x,t)=0,$$

where $\Delta_h:=\partial_{x_1}^2+\partial_{x_2}^2$. For any $m=(m_1,m_2)\in\mathbb Z^2\setminus\{(0,0)\}$ define the wavevector $\mathbf k:=2\pi(m_1/L_1,m_2/L_2)$ in inverse metres and $k:=|\mathbf k|>0$. Let $i\in\mathbb C$ satisfy $i^2=-1$. A complex mode of angular frequency $\omega\in\mathbb C$ in inverse seconds is a pair $\eta_c(x,t)=H e^{i(\mathbf k\cdot x-\omega t)}$ and $\phi_c(x,z,t)=F(z)e^{i(\mathbf k\cdot x-\omega t)}$, with $H\in\mathbb C\setminus\{0\}$ in metres and $F\in C^2([-h,0],\mathbb C)$ in metres squared per second; its real and imaginary parts are real-valued model fields. Such a nonzero mode exists exactly when

$$\omega^2=\left(gk+\frac{\gamma}{\rho}k^3\right)\tanh(kh),$$

and each of the two frequencies $\omega=\pm\sqrt{(gk+(\gamma/\rho)k^3)\tanh(kh)}$ admits a nonzero mode. Here $\tanh s:=\sinh(s)/\cosh(s)$. This is a conditional prediction of the stated first-order model, not a measurement or a claim that any actual fluid realizes every assumption.

## Statement references

[MIT OpenCourseWare 18.354, *Nonlinear Dynamics II: Continuum Systems*, §23.1, printed pp. 104–105](https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf)

[Georgi, *The Physics of Waves*, §§11.5.1–11.5.2, printed pp. 285–291](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf)

[Fitzpatrick, *Fluid Mechanics*, “Gravity Waves,” equations (11.17)–(11.21)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node147.html)

[Fitzpatrick, *Fluid Mechanics*, “Surface Tension,” equations (11.116)–(11.121)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html)

## Facts & Assumptions

**Given:** The parameters, domains, regularity, and nonzero periodic mode in the Statement, with the adopted linear model equations stated there.

[A1] [[post-fd-capillary-linear-free-surface]]: the selected model has $\Delta_h\phi+\phi_{zz}=0$, bottom impermeability $\phi_z(-h)=0$, kinematic condition $\eta_t=\phi_z(0)$, dynamic condition $\phi_t(0)+g\eta-(\gamma/\rho)\Delta_h\eta=0$, and $\rho,g,\gamma,h>0$.

## Proof

1.1 Substituting $\phi_c=F(z)e^{i(\mathbf k\cdot x-\omega t)}$ into the bulk equation gives $F''(z)-k^2F(z)=0$, because $\Delta_h e^{i\mathbf k\cdot x}=-k^2e^{i\mathbf k\cdot x}$. [given, A1, algebra]

2.1 The general solution is $F(z)=A\cosh(k(z+h))+B\sinh(k(z+h))$. The bottom condition gives $F'(-h)=kB=0$, and $k>0$, so $B=0$ and $F(z)=A\cosh(k(z+h))$. [given, A1, step 1.1, algebra]

3.1 Substitution into the kinematic condition at $z=0$ gives $-i\omega H=A k\sinh(kh)$. [given, A1, step 2.1, algebra]

3.2 Substitution into the dynamic condition at $z=0$, using $\Delta_h\eta_c=-k^2\eta_c$, gives $-i\omega A\cosh(kh)+(g+\gamma k^2/\rho)H=0$. [given, A1, step 2.1, algebra]

4.1 Since $kh>0$, $\sinh(kh)>0$; since $g,\gamma,\rho,k>0$, $g+\gamma k^2/\rho>0$. If $\omega=0$, step 3.1 forces $A=0$ and step 3.2 then forces $H=0$, contrary to the mode hypothesis. Thus $\omega\ne0$ and $H\ne0$. [given, A1, step 3.1, step 3.2, algebra]

5.1 Solve step 3.1 for $A=-i\omega H/(k\sinh(kh))$ and substitute into step 3.2. Since $(-i)^2=-1$, division by $H\ne0$ gives $\omega^2=k(g+\gamma k^2/\rho)\tanh(kh)$. [step 3.1, step 3.2, step 4.1, algebra]

6.1 The right side of step 5.1 is positive because $k,h,g,\gamma,\rho>0$ and $\tanh(kh)>0$. For either real root $\omega=\pm\sqrt{k(g+\gamma k^2/\rho)\tanh(kh)}$ and any $H\ne0$, define $A=-i\omega H/(k\sinh(kh))$ and $F(z)=A\cosh(k(z+h))$. Steps 1.1, 2.1, 3.1, and 3.2 then hold, so these are nonzero modes; every nonzero mode has the stated frequency by step 5.1. [given, A1, step 2.1, step 3.1, step 3.2, step 5.1, algebra] ∎
