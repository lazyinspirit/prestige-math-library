---
id: ex-cm-planar-harmonic-oscillator-return-map
kind: example
title: "The Poincaré return map of the planar isotropic oscillator on the line y=0 is the reflection x->-x"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [prop-cm-first-return-map-is-a-local-c1-diffeomorphism, def-cm-local-flow-of-an-autonomous-system, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, def-vector-valued-derivative-and-integral, def-euclidean-inner-product, def-metric-ball]
dependency_roles:
  prop-cm-first-return-map-is-a-local-c1-diffeomorphism: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.4, Problem 6.14: the Poincare map of the vector field f(x,y)=(-y,x) for the section x>0, y=0"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 4.1 (the harmonic oscillator in phase space), printed pages 75-79"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Let $\omega>0$ and let $F(x,y)=(y,-\omega^2x)$ be the isotropic planar oscillator field on $\mathbb R^2$, with local flow $\Phi$ ([[def-cm-local-flow-of-an-autonomous-system]]). Its solutions are

$$\Phi\bigl(t,(x,y)\bigr)=\Bigl(x\cos\omega t+\frac{y}{\omega}\sin\omega t,\ -\omega x\sin\omega t+y\cos\omega t\Bigr),$$

defined for all real $t$. Take the section $\Sigma=\{y=0\}$, the reference point $x_0=(1,0)$ with $h(x,y):=y$, and $t_0:=\pi/\omega$, so that $x_1=\Phi(t_0,x_0)=(-1,0)$. Then $h(x_0)=h(x_1)=0$ and

$$Dh(x_0)F(x_0)=-\omega^2\ne0,\qquad Dh(x_1)F(x_1)=\omega^2\ne0,$$

so [[prop-cm-first-return-map-is-a-local-c1-diffeomorphism]] applies and produces a local $C^1$ Poincaré map near $x_0$. On the section itself the map and its inverse can be computed exactly: for $(x,0)$ with $x$ near $1$, the return time is $\tau(x,0)=\pi/\omega$ and the return map is

$$P(x,0)=(-x,0),$$

the reflection in the origin restricted to the section, with inverse $Q(y,0)=(-y,0)$; this is a $C^1$ diffeomorphism between neighbourhoods of $(1,0)$ and $(-1,0)$ in $\Sigma$.

## Facts & Assumptions

**Given:** The frequency $\omega>0$, the field $F(x,y)=(y,-\omega^2x)$, the section $\Sigma=\{y=0\}$, the points $x_0=(1,0)$, $x_1=(-1,0)$, and the function $h(x,y)=y$.

[L1] For every $(x,y)$ the displayed curve solves the initial value problem and is defined on $\mathbb R$; hence it is the maximal solution, so $\Omega=\mathbb R\times\mathbb R^2$ ([[def-cm-local-flow-of-an-autonomous-system]], [[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[def-vector-valued-derivative-and-integral]]).

[L2] The return-map proposition applies under the two displayed transversality conditions and gives a local $C^1$ diffeomorphism with inverse given by the reversed crossing ([[prop-cm-first-return-map-is-a-local-c1-diffeomorphism]]).

## Verification

**Proof technique:** direct; verify the explicit solution, the crossings and the restriction of the return map to the section.

1.1 Differentiating the two components of the displayed curve with respect to $t$ using $(\sin)'=\cos$, $(\cos)'=-\sin$ gives $(-\omega x\sin\omega t+y\cos\omega t,\ -\omega^2x\cos\omega t-\omega y\sin\omega t)$, whose first component is the second component of the curve and whose second component is $-\omega^2$ times the first; hence the curve solves $x'=F(x)$ and takes the value $(x,y)$ at $t=0$. [given, L1]

2.1 On the section, $\Phi(t,(x,0))=(x\cos\omega t,-\omega x\sin\omega t)$: the second component vanishes exactly when $\sin\omega t=0$, i.e. at $t=k\pi/\omega$, $k\in\mathbb Z$. For $x>0$ the first positive time at which the orbit meets $\Sigma$ in the neighbourhood of the reference crossing is $t=\pi/\omega$, with $\Phi(\pi/\omega,(x,0))=(-x,0)$; therefore $\tau(x,0)=\pi/\omega$ and $P(x,0)=(-x,0)$ for every $x>0$ close to $1$. [step 1.1, L1, algebra]

3.1 The transversality conditions: with $h(x,y)=y$ we have $Dh=(0,1)$, $F(x_0)=(0,-\omega^2)$ and $F(x_1)=(0,\omega^2)$, so $Dh(x_0)F(x_0)=-\omega^2\ne0$ and $Dh(x_1)F(x_1)=\omega^2\ne0$. Hence [L2] applies at the reference data $(t_0,x_0)=(\pi/\omega,(1,0))$, and its conclusion is realized by the explicit map of step 2.1: $P$ maps a neighbourhood of $(1,0)$ in $\Sigma$ onto a neighbourhood of $(-1,0)$ in $\Sigma$, and $Q(y,0)=(-y,0)$ inverts it. [step 1.1, 2.1, L2]

4.1 Finally the map $x\mapsto-x$ is a $C^1$ diffeomorphism of $\mathbb R$ onto itself, so its restriction to the section is a $C^1$ diffeomorphism between the stated neighbourhoods; this agrees with the general conclusion of the proposition and shows that the local inverse is again given by the reversed crossing, since the same computation with $x<0$ runs the reference orbit backwards. [step 3.1, L2, algebra] ∎

## Remarks

- The example is the simplest case in which the local Poincaré map can be written in closed form. The proposition's hypothesis that the section be transversal at both crossings is visible in the computation: at the crossing the velocity is purely vertical, with $Dh\cdot F=\mp\omega^2\ne0$.

- The return map is computed on the section only; the general map $\tau(x,y)$ for points off the section is a $C^1$ function near $(1,0)$ by the proposition, but its explicit formula is not needed here. No stability or periodicity of the map is asserted: the reflection is an involution, and every point of the reference orbit is periodic for the flow with period $2\pi/\omega$.
