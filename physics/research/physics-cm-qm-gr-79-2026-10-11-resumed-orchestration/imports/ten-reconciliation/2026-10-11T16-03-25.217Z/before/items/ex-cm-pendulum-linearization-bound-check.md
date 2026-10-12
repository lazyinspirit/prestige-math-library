---
id: ex-cm-pendulum-linearization-bound-check
kind: example
title: "Finite-time linearization bound for the planar pendulum with explicit constants"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-finite-time-linearization-error-bound, cor-taylor-remainder-bound, thm-sine-and-cosine-derivatives, def-operator-norm, def-metric-ball]
dependency_roles:
  thm-cm-finite-time-linearization-error-bound: mathematical-premise
  cor-taylor-remainder-bound: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.3 (linearisation estimates) and Theorem 2.10, printed pages 45-48 and 192-197"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3: the linearised oscillator equation and the role of the nonlinear term, printed pages 147-148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Let $l=g=1$ and consider the planar pendulum field

$$F:\mathbb R^2\to\mathbb R^2,\qquad F(\theta,\omega)=\bigl(\omega,\ -\sin\theta\bigr),$$

with linearisation $A=DF(0,0)=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. On the closed ball $\overline B(0,\tfrac12)$ one has

$$\|F(z)-Az\|_2\le\tfrac1{12}\|z\|_2^2,\qquad \|F(z)\|_2\le\sqrt2\,\|z\|_2,$$

so the linearization theorem applies with $r=\tfrac12$, $C=\tfrac1{12}$, $L=\sqrt2$. For the datum $z_0=(\tfrac1{100},0)$ and $T=1$ one has $\delta e^{LT}=\tfrac1{100}e^{\sqrt2}<\tfrac1{20}<\tfrac12$, and the theorem bounds the linearization error by

$$\|z(t)-y(t)\|_2\le\frac{\delta^2}{12}\int_0^1e^{(1-s)}e^{2\sqrt2s}\,ds<10^{-4}\qquad(0\le t\le1),$$

where $y$ solves $y'=Ay$, $y(0)=z_0$; in particular the linear solution stays within $10^{-4}$ of the nonlinear one on $[0,1]$.

## Facts & Assumptions

**Given:** The field $F$, the matrix $A$, the radius $r=1/2$, the datum $z_0=(1/100,0)$ and the horizon $T=1$.

[L1] The linearization theorem ([[thm-cm-finite-time-linearization-error-bound]]): if $\|F(z)-Az\|_2\le C\|z\|_2^2$ and $\|F(z)\|_2\le L\|z\|_2$ for $\|z\|_2\le r$ and $\delta e^{LT}<r$, then the nonlinear solution exists on $[0,T]$ and $\|z(t)-y(t)\|_2\le C\delta^2\int_0^te^{\|A\|(t-s)}e^{2Ls}ds$ for $t\in[0,T]$. [given]

[L2] Taylor remainder bound: if $|f^{(n+1)}|\le M$ between $a$ and $x$, then $|R_{n,a}f(x)|\le M|x-a|^{n+1}/(n+1)!$ ([[cor-taylor-remainder-bound]]); with $f=\sin$, $n=2$, $a=0$ and $M=1$ this gives $|\sin\theta-\theta|\le|\theta|^3/6$, since $|\sin'''|=|\cos|\le1$ ([[thm-sine-and-cosine-derivatives]]). [given]

[L3] Operator norm: $\|A\|=\sup_{\|u\|_2=1}\|Au\|_2$ ([[def-operator-norm]]); for $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and $u=(u_1,u_2)$ one has $Au=(-u_2,u_1)$, so $\|Au\|_2=\|u\|_2$ and $\|A\|=1$. [given]

## Verification

**Proof technique:** direct; estimate the two remainder terms of the pendulum field on the ball and substitute the explicit constants into the theorem.

1.1 Quadratic remainder: for $z=(\theta,\omega)$ with $\|z\|_2\le1/2$, $$F(z)-Az=(0,\ -\sin\theta)- (0,-\theta)=(0,\ \theta-\sin\theta),$$ so $\|F(z)-Az\|_2=|\sin\theta-\theta|\le|\theta|^3/6\le\tfrac12|\theta|^2/6\le\tfrac1{12}\|z\|_2^2$ by [L2] and $|\theta|\le\|z\|_2\le1/2$; hence $C=1/12$ is admissible. [given, L2, algebra]

1.2 Growth bound: $\|F(z)\|_2^2=\omega^2+\sin^2\theta\le\omega^2+\theta^2=\|z\|_2^2$ because $|\sin\theta|\le|\theta|$ for all real $\theta$; hence $\|F(z)\|_2\le\|z\|_2\le\sqrt2\|z\|_2$, so $L=\sqrt2$ is admissible (and $L=1$ would also suffice). With $\delta=1/100$ and $T=1$, $\delta e^{LT}=\tfrac1{100}e^{\sqrt2}<\tfrac1{20}<\tfrac12=r$ because $e^{\sqrt2}<e^{3/2}<5$, so the hypotheses of [L1] hold. [given, L2, L3, algebra]

2.1 Substitute: by [L1] and [L3], $\|z(t)-y(t)\|_2\le\tfrac1{12}\delta^2\int_0^1e^{(1-s)}e^{2\sqrt2s}ds$; the exponent is $(1-s)+2\sqrt2s=1+(2\sqrt2-1)s\le1+2s$ because $2\sqrt2<3$. Hence the integral is at most $\int_0^1e^{1+2s}ds=\tfrac12(e^3-e)<\tfrac{21}{2}$ (using $e<\tfrac{27}{10}$), and the error is at most $\tfrac1{12}\cdot10^{-4}\cdot\tfrac{21}{2}=\tfrac78\cdot10^{-4}<10^{-4}$. [step 1.1, step 1.2, L1, L3, algebra] ∎
