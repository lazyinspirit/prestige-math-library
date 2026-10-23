---
id: thm-fd-capillary-gravity-dispersion-energy
kind: theorem
title: "Capillary-gravity dispersion and conserved linear surface energy"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-bl01
deps:
  - def-fd-wall-defect-capillary-models
  - thm-fd-x03
  - thm-chain-rule
  - thm-of-square-roots
  - cor-greens-first-identity-for-glued-elementary-solid-regions
  - thm-algebra-of-derivatives
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
dependency_roles:
  def-fd-wall-defect-capillary-models: mathematical-premise
  thm-fd-x03: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-of-square-roots: mathematical-premise
  cor-greens-first-identity-for-glued-elementary-solid-regions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "MIT 18.357 Interfacial Phenomena, Chapter 19: Water waves"
      url: "https://ocw.mit.edu/courses/18-357-interfacial-phenomena-fall-2010/04759cfc15c79928ca9f72a18b3864dd_MIT18_357F10_lec_all.pdf"
    - title: "ETH Zürich, Mechanics of Continuous Media, lecture 23: Capillary waves"
      url: "https://edu.itp.phys.ethz.ch/fs14/MechOfCont/lec23.pdf"
    - title: "Eric Firing, University of Hawaiʻi OCN 620, chapter 19: Surface waves, Part 1"
      url: "https://uhslc.soest.hawaii.edu/ocn620/notes/surface-waves-1.html"
verification:
  precheck: pending
---

## Statement

Let $h,g,\rho,k,L_y>0$, $\sigma\ge0$, and $a\in\mathbb R$. Set $\lambda=2\pi/k$ and $\mathbb T_L=\mathbb R/(L\mathbb Z)$; use horizontal coordinates $(x,y)\in\mathbb T_\lambda\times\mathbb T_{L_y}$ and vertical coordinate $z\in[-h,0]$, positive upward, with the mean surface at $z=0$. Define

$$\omega_\sigma=\sqrt{\left(gk+\frac{\sigma}{\rho}k^3\right)\tanh(kh)},\qquad G(z)=\frac{\cosh(k(z+h))}{\cosh(kh)},\qquad \theta_\sigma=kx-\omega_\sigma t.$$

Let $S,C:\mathbb R\to\mathbb R$ be the real sine and cosine functions. The fields

$$\eta_\sigma(t,x,y)=aC(\theta_\sigma),\qquad \phi_\sigma(t,x,y,z)=\frac{a\omega_\sigma}{k\tanh(kh)}G(z)S(\theta_\sigma)$$

are smooth, independent of $y$, periodic with horizontal periods $\lambda,L_y$, and solve exactly the linear capillary-gravity potential equations

$$\Delta\phi=0\quad(-h<z<0),\qquad \phi_z(t,x,y,-h)=0,$$

$$\eta_t(t,x,y)=\phi_z(t,x,y,0),\qquad \phi_t(t,x,y,0)+g\eta(t,x,y)-\frac{\sigma}{\rho}\Delta_H\eta(t,x,y)=0,$$

where $\Delta=\partial_x^2+\partial_y^2+\partial_z^2$ and $\Delta_H=\partial_x^2+\partial_y^2$. Here $h$ is depth, $g$ gravitational acceleration, $\rho$ constant density, $\sigma$ surface tension, and $\Delta_H$ is the horizontal Laplacian. In particular, the positive frequency obeys

$$\omega_\sigma^2=\left(gk+\frac{\sigma}{\rho}k^3\right)\tanh(kh).$$

At $\sigma=0$ this mode is exactly the finite-depth gravity-wave mode. For any $T>0$, let $\eta\in C^1([0,T];C^2(\mathbb T_\lambda\times\mathbb T_{L_y}))$ and $\phi\in C^1([0,T];C^2(\mathbb T_\lambda\times\mathbb T_{L_y}\times[-h,0]))$ extend with these regularities to a neighborhood of the closed slab and satisfy the same equations. Define the energy in one horizontal cell by

$$E(t)=\frac{\rho}{2}\int_0^{L_y}\int_0^\lambda\int_{-h}^0 (|\phi_x|^2+|\phi_y|^2+|\phi_z|^2)\,dz\,dx\,dy+\frac{\rho g}{2}\int_0^{L_y}\int_0^\lambda\eta^2\,dx\,dy+\frac{\sigma}{2}\int_0^{L_y}\int_0^\lambda (|\eta_x|^2+|\eta_y|^2)\,dx\,dy.$$

Then $E(t)$ is nonnegative and constant on $[0,T]$. These are exact deductions within the stated linear model; they do not assert a nonlinear free-surface solution, a sharp-interface convergence theorem, or an experimental observation. In SI units, $[h]=[L_y]=\mathrm m$, $[g]=\mathrm{m\,s^{-2}}$, $[\rho]=\mathrm{kg\,m^{-3}}$, $[\sigma]=\mathrm{N\,m^{-1}}$, $[k]=\mathrm{m^{-1}}$, $[a]=[\eta]=\mathrm m$, $[\omega_\sigma]=\mathrm{s^{-1}}$, $[\phi]=\mathrm{m^2\,s^{-1}}$, and $[E]=\mathrm J$ for the chosen finite transverse span.

## Statement references

Finite-depth gravity-capillary boundary conditions, hyperbolic vertical profile, and dispersion derivation: [MIT 18.357, Chapter 19, printed pp. 78–79 (PDF pp. 78–79)](https://ocw.mit.edu/courses/18-357-interfacial-phenomena-fall-2010/04759cfc15c79928ca9f72a18b3864dd_MIT18_357F10_lec_all.pdf).

Independent surface-tension pressure derivation and deep-water gravity-capillary relation: [ETH Zürich, Mechanics of Continuous Media, lecture 23, printed pp. 185–187 (PDF pp. 5–7)](https://edu.itp.phys.ethz.ch/fs14/MechOfCont/lec23.pdf).

Independent gravity-capillary dispersion context and finite-depth gravity relation: [Firing, OCN 620, §19.4](https://uhslc.soest.hawaii.edu/ocn620/notes/surface-waves-1.html).

Finite-depth gravity-wave mode used at zero surface tension: [[thm-fd-x03]].

Model equations and conventions: [[def-fd-wall-defect-capillary-models]].

## Facts & Assumptions

**Given:** The positive parameters, horizontal periods, smooth fields, and linear boundary equations in the Statement.

[A1] The capillary-gravity potential model is the mathematical model defined in [[def-fd-wall-defect-capillary-models]]: harmonic potential in $-h<z<0$, impermeable bottom, kinematic condition $\eta_t=\phi_z$ at $z=0$, and dynamic condition $\phi_t+g\eta-(\sigma/\rho)\Delta_H\eta=0$.

[F1] [[thm-fd-x03]]: for $h,g,k>0$, $\omega_0=\sqrt{gk\tanh(kh)}>0$ and the fields $\eta_0=aC(kx-\omega_0t')$, $\phi_0=(ag/\omega_0)G(z)S(kx-\omega_0t')$ solve the finite-depth linear gravity-wave system; $G(z)=\cosh(k(z+h))/\cosh(kh)$.

[F2] [[thm-of-square-roots]]: every nonnegative real number has a unique nonnegative square root.

[F3] [[thm-chain-rule]]: if differentiable real functions are composed at points satisfying its limit-point hypotheses, then $(f\circ g)'= (f'\circ g)g'$.

[F4] [[cor-greens-first-identity-for-glued-elementary-solid-regions]]: for a finite gluing $E$ of elementary solid regions, $u\in C^1$ and $v\in C^2$ on an open neighborhood, $\iiint_E(\langle\nabla u,\nabla v\rangle+u\Delta v)=\iint_{\partial E}u\langle\nabla v,n\rangle$.

[F5] [[thm-algebra-of-derivatives]]: differentiable products satisfy $(fg)'=f'g+fg'$.

[F6] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: if $g,h$ are continuous on a compact rectangle and $\partial_x g=h$ in the interior, the parameter integral of $g$ is differentiable and its derivative is the corresponding integral of $h$.

## Proof

**Given:** The assumptions above, with $\sigma\ge0$ and positive $h,g,\rho,k$.

1.1 Let $\omega_0=\sqrt{gk\tanh(kh)}>0$ and let $c_\sigma=\sqrt{1+\sigma k^2/(\rho g)}>0$, whose existence and positivity follow from [F1] and [F2]. Set $\omega=c_\sigma\omega_0$. Then $\omega^2=(1+\sigma k^2/(\rho g))gk\tanh(kh)=(gk+\sigma k^3/\rho)\tanh(kh)$, and the radicand in the Statement is positive, so its positive square root is this $\omega$. [given, F1, F2, algebra]

1.2 Write $\theta_0(t',x)=kx-\omega_0t'$, and take the gravity mode $\eta_0,\phi_0$ from [F1]. Define $t'=c_\sigma t$, $\eta(t,x,y)=\eta_0(t',x,y)$, and $\phi(t,x,y,z)=c_\sigma\phi_0(t',x,y,z)$. The chain rule [F3] gives $\eta_t=c_\sigma(\eta_0)_{t'}=c_\sigma(\phi_0)_z=\phi_z$; harmonicity and the bottom condition persist because this transformation only rescales time and amplitude. [given, F1, F3, algebra]

1.3 The gravity mode is independent of $y$, so $\Delta_H\eta_0=-k^2\eta_0$. Its gravity dynamic condition is $(\phi_0)_{t'}+g\eta_0=0$. Therefore $\phi_t+g\eta-(\sigma/\rho)\Delta_H\eta=c_\sigma^2(\phi_0)_{t'}+g\eta_0+(\sigma k^2/\rho)\eta_0=(-g c_\sigma^2+g+\sigma k^2/\rho)\eta_0=0$, since $c_\sigma^2=1+\sigma k^2/(\rho g)$. Thus the transformed fields satisfy the capillary dynamic condition. [given, F1, step 1.1, step 1.2, algebra]

1.4 Since $\omega=c_\sigma\omega_0$ and $\omega_0^2=gk\tanh(kh)$, the coefficient of $G(z)S(\theta_\sigma)$ in $\phi=c_\sigma\phi_0(c_\sigma t)$ is $agc_\sigma/\omega_0=a\omega/(k\tanh(kh))$. Also $\theta_0(c_\sigma t,x)=\theta_\sigma$. This proves the displayed mode formula, including $a=0$. At $\sigma=0$, $c_\sigma=1$ and the same formulas are exactly the gravity mode [F1]. [given, F1, step 1.1, step 1.2, algebra]

2.1 Let $Q=[0,\lambda]\times[0,L_y]\times[-h,0]$. Apply [F6] successively to the rectangular cell integrals and use [F5] to differentiate the squared gradients; the fields and time derivatives are continuous on the compact cell, so the hypotheses hold. Apply [F4] with $u=\phi_t$ and $v=\phi$. The interior term $\phi_t\Delta\phi$ vanishes; opposite periodic faces cancel; the bottom term vanishes by $\phi_z(-h)=0$. Hence $K'(t)=\rho\int_0^{L_y}\int_0^\lambda \phi_t(t,x,y,0)\phi_z(t,x,y,0)\,dx\,dy$. [given, A1, F4, F5, F6, algebra]

2.2 Differentiate the two surface terms in $E$ using [F5] and [F6]. For the gradient term apply [F4] on $Q$ to $u=\eta_t(x,y)$ and $v=\eta(x,y)$, extended constantly in $z$; the top and bottom normal derivatives vanish and the paired periodic-face terms cancel. Dividing the identity by $h$ gives $\int_0^{L_y}\int_0^\lambda\nabla_H\eta\cdot\nabla_H\eta_t\,dx\,dy=-\int_0^{L_y}\int_0^\lambda\eta_t\Delta_H\eta\,dx\,dy$, so $V'(t)=\int_0^{L_y}\int_0^\lambda(\rho g\eta-\sigma\Delta_H\eta)\eta_t\,dx\,dy$. [given, A1, F4, F5, F6, algebra]

2.3 The kinematic condition makes $\phi_z(t,x,y,0)=\eta_t$. The dynamic condition makes $\rho\phi_t+\rho g\eta-\sigma\Delta_H\eta=0$. Adding the derivatives in steps 2.1 and 2.2 therefore gives $E'(t)=K'(t)+V'(t)=0$. Each term in $E$ is nonnegative because $\rho,g>0$ and $\sigma\ge0$, so $E$ is nonnegative and constant on $[0,T]$. [given, A1, step 2.1, step 2.2, algebra] ∎
