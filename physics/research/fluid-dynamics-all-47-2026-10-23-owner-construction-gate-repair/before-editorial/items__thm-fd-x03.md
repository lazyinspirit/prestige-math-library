---
id: thm-fd-x03
kind: theorem
title: "Finite-depth gravity-wave dispersion with quantitative limits"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01
deps:
  - def-fd-x00
  - def-fd-real-trigonometric-functions
  - lem-fd-real-trigonometric-derivatives
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - thm-chain-rule
  - thm-of-square-roots
  - lem-fd-x03-tanh-error-bounds
dependency_roles:
  def-fd-x00: mathematical-premise
  def-fd-real-trigonometric-functions: mathematical-premise
  lem-fd-real-trigonometric-derivatives: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-fd-x03-tanh-error-bounds: mathematical-premise
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Falk Feddersen, UC San Diego, Linear Surface Gravity Waves 1, §§2.1–2.4"
      url: "https://falk.ucsd.edu/pdf/WavesLecture02_211A.pdf"
    - title: "Eric Firing, University of Hawaiʻi OCN 620, chapter 19: Surface waves, Part 1, §§19.1–19.7"
      url: "https://uhslc.soest.hawaii.edu/ocn620/notes/surface-waves-1.html"
verification:
  precheck: pending
---

## Statement

Let $h,g,k>0$, let $a\in\mathbb R$, and set $s=kh$ and $\omega=\sqrt{gk\tanh(s)}$, using the positive square root. Here $h$ is depth, $g$ a constant acceleration parameter, and $k$ a positive horizontal wave number; $s$ is dimensionless and $a$ is a real elevation amplitude. The strict positivity of $\tanh(s)$ for $s>0$ makes $\omega$ well-defined and positive. Let $x,y\in\mathbb R$ be horizontal Cartesian coordinates and $z\in(-h,0)$ the vertical coordinate, positive upward with the flat mean surface at $z=0$ and bottom at $z=-h$; time $t\in\mathbb R$. Write $\theta=kx-\omega t$. A surface elevation is the scalar field $\eta(t,x,y)$, and a velocity potential is a scalar field $\phi(t,x,y,z)$. Define the finite-depth linear potential-wave problem by

$$\Delta\phi=0\quad(-h<z<0),\qquad \phi_z(t,x,y,-h)=0,$$

$$\eta_t(t,x,y)=\phi_z(t,x,y,0),\qquad \phi_t(t,x,y,0)+g\eta(t,x,y)=0,$$

where $\Delta=\partial_x^2+\partial_y^2+\partial_z^2$. Let $S,C$ be the real sine and cosine functions defined on this page. Then

$$\eta(t,x,y)=aC(\theta),\qquad \phi(t,x,y,z)=\frac{ag}{\omega}\frac{\cosh(k(z+h))}{\cosh(kh)}S(\theta)$$

are fields that are $C^2$ in the spatial variables and $C^1$ in time, with the displayed derivatives extending to $z=-h$ and $z=0$, and they satisfy this system exactly. Define the shallow and deep comparison frequencies by $\omega_{\rm sh}=k\sqrt{gh}$ and $\omega_{\rm deep}=\sqrt{gk}$. They obey

$$0\le\frac{\omega_{\rm sh}^2-\omega^2}{\omega_{\rm sh}^2}\le\frac{(kh)^2}{3},\qquad 0\le1-\frac{\omega}{\omega_{\rm sh}}\le\frac{(kh)^2}{3},\qquad 0\le\frac{\omega_{\rm deep}^2-\omega^2}{\omega_{\rm deep}^2}\le2e^{-2kh}.$$

These are exact statements about the displayed linear boundary problem and its dispersion relation. They assert no nonlinear free-surface solution or error bound.

In the optional SI interpretation, $[h]=\mathrm m$, $[g]=\mathrm{m\,s^{-2}}$, $[k]=\mathrm{m^{-1}}$, $[a]=[\eta]=\mathrm m$, $[\omega]=\mathrm{s^{-1}}$, and $[\phi]=\mathrm{m^2\,s^{-1}}$.

## Statement references

Finite-depth linear surface-gravity-wave equations and dispersion relation: [Feddersen, *Linear Surface Gravity Waves 1*, §§2.1–2.4, PDF pp. 1–6](https://falk.ucsd.edu/pdf/WavesLecture02_211A.pdf).

Independent finite-depth formulation and shallow/deep limits: [Firing, OCN 620, chapter 19, §§19.1–19.7](https://uhslc.soest.hawaii.edu/ocn620/notes/surface-waves-1.html).

Cartesian Laplacian convention: [[def-fd-x00]].

Real trigonometric functions and derivatives: [[def-fd-real-trigonometric-functions]] and [[lem-fd-real-trigonometric-derivatives]].

Hyperbolic functions and positivity: [[def-hyperbolic-functions]] and [[thm-hyperbolic-identities-and-derivatives]].

Quantitative hyperbolic-tangent bounds: [[lem-fd-x03-tanh-error-bounds]].

## Facts & Assumptions

**Given:** The positive constants $h,g,k$, amplitude $a$, the fields and equations in the Statement, and $s=kh>0$.

[A1] The target equations are the harmonic-potential equation, impermeable bottom condition, and the stated linear kinematic and dynamic surface conditions as defined in the Statement.

[F1] The scalar Laplacian in Cartesian coordinates is the sum of the pure second partial derivatives ([[def-fd-x00]]).

[F2] The page functions $S,C$ are real-valued and satisfy $S'=C$ and $C'=-S$ ([[def-fd-real-trigonometric-functions]], [[lem-fd-real-trigonometric-derivatives]]).

[F3] For real $r$, $\cosh r=(e^r+e^{-r})/2>0$, $\tanh r=\sinh r/\cosh r$, and $\operatorname{sech}r=1/\cosh r$ ([[def-hyperbolic-functions]]).

[F4] $\cosh'=\sinh$, $\sinh'=\cosh$, $\tanh(0)=0$, and $\tanh$ is strictly increasing on $\mathbb R$ ([[thm-hyperbolic-identities-and-derivatives]]).

[F5] Differentiable compositions obey the real chain rule ([[thm-chain-rule]]).

[F6] Every positive real number has a unique positive square root ([[thm-of-square-roots]]).

[F7] For every $r\ge0$, $0\le r-\tanh r\le r^3/3$ and $0\le1-\tanh r\le2e^{-2r}$ ([[lem-fd-x03-tanh-error-bounds]]).

## Proof

1.1 Since $s>0$, [F4] gives $\tanh(s)>\tanh(0)=0$, so [F6] makes $\omega$ a positive real number. Set $G(z)=\cosh(k(z+h))/\cosh(kh)$. By [F3]–[F5], its denominator is positive, $G''(z)=k^2G(z)$, $G'(-h)=0$, $G(0)=1$, and $G'(0)=k\tanh(kh)$. [given, F3, F4, F5, F6, algebra]

1.2 Since $\omega_{\rm sh}^2=ghk^2=gks$ and $\omega^2=gk\tanh(s)$, division by the positive $gks$ gives $(\omega_{\rm sh}^2-\omega^2)/\omega_{\rm sh}^2=(s-\tanh(s))/s$. Applying [F7] and dividing by $s>0$ proves the first shallow bound. [given, F7, algebra]

2.1 The identities in [F2] and the chain rule [F5] imply $S''=-S$. The field $\phi$ is independent of $y$, and therefore [F1] gives $\Delta\phi=(ag/\omega)(G''-k^2G)S(\theta)=0$. Also $\phi_z=(ag/\omega)G'(z)S(\theta)$, so $G'(-h)=0$ proves the bottom condition. [given, A1, F1, F2, F5, step 1.1, algebra]

2.2 By [F2] and [F5], $\eta_t=a\omega S(\theta)$ and $\phi_t(t,x,y,0)=-agC(\theta)$, using $G(0)=1$. The surface derivative is $\phi_z(t,x,y,0)=(agk\tanh(s)/\omega)S(\theta)=a\omega S(\theta)$ because $\omega^2=gk\tanh(s)$; also $\phi_t(t,x,y,0)+g\eta= -agC(\theta)+agC(\theta)=0$. Thus both surface conditions in [A1] hold. [given, A1, F2, F5, step 1.1, algebra]

2.3 Put $r=\omega/\omega_{\rm sh}>0$. step 1.2 gives $0\le1-r^2\le s^2/3$, and $1-r=(1-r^2)/(1+r)$ with $1+r\ge1$. Hence $0\le1-r\le1-r^2\le s^2/3$, proving the shallow frequency bound. [given, step 1.1, step 1.2, algebra]

3.1 Since $\omega_{\rm deep}^2=gk$, the dispersion identity gives $(\omega_{\rm deep}^2-\omega^2)/\omega_{\rm deep}^2=1-\tanh(s)$. The second inequality of [F7] yields the stated deep bound, with its lower bound as in [F7]. [given, F7, algebra] ∎
