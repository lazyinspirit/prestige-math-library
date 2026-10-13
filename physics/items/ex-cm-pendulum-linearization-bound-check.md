---
id: ex-cm-pendulum-linearization-bound-check
kind: example
title: "Finite-time linearization bound for the planar pendulum with explicit constants"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-finite-time-linearization-error-bound, cor-taylor-remainder-bound, thm-sine-and-cosine-derivatives, thm-sine-cosine-signs-monotonicity-and-ranges, cor-mean-value-theorem, cor-two-less-than-e-less-than-three, cor-exponential-reciprocal-and-positivity, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, thm-monotonicity-of-the-integral, def-operator-norm, def-metric-ball, lem-integral-elementary-bounds]
dependency_roles:
  thm-cm-finite-time-linearization-error-bound: mathematical-premise
  cor-taylor-remainder-bound: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  cor-two-less-than-e-less-than-three: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
  lem-integral-elementary-bounds: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
  - title: G. Teschl, Ordinary Differential Equations and Dynamical Systems (retrieved 365-page online edition), Section 2.4, Theorem 2.10, printed pp. 45-48 (variational equation), and Section 3.4, Theorem 3.12, printed pp. 83-84 (variation of constants). The numerical pendulum bounds are calculated locally.
    url: https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf
  - title: 'I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3: the linearised oscillator equation and the role of the nonlinear term, printed pages 147-148'
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Let $l=g=1$ and consider the planar pendulum field

$$F:\mathbb R^2\to\mathbb R^2,\qquad F(\theta,\omega)=\bigl(\omega,\ -\sin\theta\bigr),$$

Let $\mathcal A:\mathbb R^2\to\mathbb R^2$ be the linear map $\mathcal A(\theta,\omega):=(\omega,-\theta)$, and let $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\in M_2(\mathbb R)$ be its standard-coordinate matrix; use the matrix action of $A$ from [[thm-cm-finite-time-linearization-error-bound]]. On the closed ball $\overline B(0,\tfrac12)$ one has

$$\|F(z)-Az\|_2\le\tfrac1{12}\|z\|_2^2,\qquad \|F(z)\|_2\le\|z\|_2,$$

so the linearization theorem applies with $r=\tfrac12$, $C=\tfrac1{12}$, $L=1$. For the datum $z_0=(\tfrac1{100},0)$ and $T=1$ one has $\delta e^{LT}=\tfrac e{100}<\tfrac3{100}<\tfrac1{20}<\tfrac12$, and the theorem bounds the linearization error by

$$\|z(t)-y(t)\|_2\le\frac{\delta^2}{12}\int_0^1e^{(1-s)}e^{2s}\,ds<10^{-4}\qquad(0\le t\le1),$$

where $y$ solves $y'=Ay$, $y(0)=z_0$; in particular the linear solution stays within $10^{-4}$ of the nonlinear one on $[0,1]$.

## Facts & Assumptions

**Given:** The field $F$, the matrix $A$, the radius $r=1/2$, the datum $z_0=(1/100,0)$ and the horizon $T=1$.

[L1] The linearization theorem ([[thm-cm-finite-time-linearization-error-bound]]): if $U\subseteq\mathbb R^n$ is open, $0\in U$, $F:U\to\mathbb R^n$ is continuous and locally Lipschitz in the state variable, $r,T>0$, $C,L\ge0$, $\overline B(0,r)\subseteq U$, $\delta=\|z_0\|_2>0$, and $\|F(z)-Az\|_2\le C\|z\|_2^2$ and $\|F(z)\|_2\le L\|z\|_2$ for $\|z\|_2\le r$ and $\delta e^{LT}<r$, then the nonlinear solution exists on $[0,T]$ and $\|z(t)-y(t)\|_2\le C\delta^2\int_0^te^{\|A\|(t-s)}e^{2Ls}ds$ for $t\in[0,T]$. [given]

[L2] Taylor remainder bound: if $f$ has derivatives through order $n+1$ on the closed interval between $a$ and $x$, with endpoint continuity, and $|f^{(n+1)}|\le M$ there, then $|R_{n,a}f(x)|\le M|x-a|^{n+1}/(n+1)!$ ([[cor-taylor-remainder-bound]]); with $f=\sin$, $n=2$, $a=0$ and $M=1$ this gives $|\sin\theta-\theta|\le|\theta|^3/6$, since $|\sin'''|=|\cos|\le1$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]). [given]

[L3] Operator norm: $\|A\|=\sup_{\|u\|_2=1}\|Au\|_2$ ([[def-operator-norm]]); for $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and $u=(u_1,u_2)$ one has $Au=(u_2,-u_1)$, so $\|Au\|_2=\|u\|_2$ and $\|A\|=1$. [given]

[L4] $2<e<3$ ([[cor-two-less-than-e-less-than-three]]); the exponential is positive, increasing and satisfies $e^{x+y}=e^xe^y$ ([[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-addition-formula]]); and $|\cos u|\le1$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L6] The mean value theorem used below is [[cor-mean-value-theorem]].

[L5] The integral is monotone for continuous real integrands ([[thm-monotonicity-of-the-integral]]), and $\int_0^1 9\,ds=9$ by the constant-integral formula ([[lem-integral-elementary-bounds]]).

## Verification

**Proof technique:** direct; estimate the two remainder terms of the pendulum field on the ball and substitute the explicit constants into the theorem.

1.1 Quadratic remainder: for $z=(\theta,\omega)$ with $\|z\|_2\le1/2$, $$F(z)-Az=(0,\ -\sin\theta)- (0,-\theta)=(0,\ \theta-\sin\theta),$$ so $\|F(z)-Az\|_2=|\sin\theta-\theta|\le|\theta|^3/6\le\tfrac12|\theta|^2/6\le\tfrac1{12}\|z\|_2^2$ by [L2] and $|\theta|\le\|z\|_2\le1/2$; hence $C=1/12$ is admissible. [given, L2, algebra]

1.2 Regularity and growth: $U=\mathbb R^2$ is open and contains $\overline B(0,1/2)$. The differentiable sine and coordinate functions make $F$ continuous. For $z=(\theta,\omega)$ and $w=(\eta,\nu)$, [L6] and [L4] give $|\sin\theta-\sin\eta|\le|\theta-\eta|$, hence $\|F(z)-F(w)\|_2^2=(\omega-\nu)^2+(\sin\theta-\sin\eta)^2\le\|z-w\|_2^2$. Thus $F$ is globally $1$-Lipschitz and in particular locally Lipschitz in the state variable. Growth bound: if $\theta\ne0$, the mean value theorem ([[cor-mean-value-theorem]]) applied to $\sin$ between $0$ and $\theta$, with $|\cos|\le1$ from [L4], gives $|\sin\theta|=|\sin\theta-\sin0|\le|\theta|$; this inequality is immediate at $\theta=0$. Thus $\|F(z)\|_2^2=\omega^2+\sin^2\theta\le\omega^2+\theta^2=\|z\|_2^2$, so $L=1$ is admissible. With $\delta=1/100$ and $T=1$, [L4] gives $\delta e^{LT}=e/100<3/100<1/20<1/2=r$, so the hypotheses of [L1] hold. [given, L1, L3, L4, L6, algebra]

2.1 Substitute: by [L1] and [L3], for $0\le t\le1$ the error is at most $\tfrac1{12}\delta^2\int_0^t e^{(1-s)}e^{2s}ds\le\tfrac1{12}\delta^2\int_0^1 e^{(1-s)}e^{2s}ds$, since $e^{t-s}\le e^{1-s}$ for $s\le t\le1$ and the resulting integrand is positive by [L4]. The addition formula gives $e^{(1-s)}e^{2s}=e^{1+s}$; since $0\le s\le1$, monotonicity gives $e^{1+s}\le e^2<9$ by [L4]. Monotonicity of the integral [L5] therefore yields $\int_0^1e^{1+s}ds\le9$, and the error is at most $\tfrac1{12}\cdot10^{-4}\cdot9=\tfrac34\cdot10^{-4}<10^{-4}$. [step 1.1, step 1.2, L1, L3, L4, L5, algebra] ∎

