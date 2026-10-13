---
id: lem-cm-fejer-completeness-for-continuous-periodic-functions
kind: lemma
title: "Fejer completeness: a continuous one-periodic function with all integrals against the characters vanishing is zero"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-cesaro-and-abel-means-of-a-fourier-series, lem-fejer-kernel-is-a-positive-approximate-identity, thm-fejer-uniform-convergence-for-continuous-periodic-functions, def-complex-exponential, thm-complex-exponential-addition-and-real-extension, def-continuity-real, thm-additivity-over-subintervals, def-oriented-integral, thm-substitution, thm-linearity-of-the-integral, thm-continuous-implies-integrable, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-cesaro-and-abel-means-of-a-fourier-series: mathematical-premise
  lem-fejer-kernel-is-a-positive-approximate-identity: mathematical-premise
  thm-fejer-uniform-convergence-for-continuous-periodic-functions: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-substitution: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Chapter 2 (summability kernels; the Fejér kernel; Theorem 2.6 and the uniqueness theorem (2.14))"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "L. Grafakos, Classical Fourier Analysis, 3rd ed., Section 1.2 (convolution and approximate identities)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"

  precheck: pass
---

## Statement

Let $h:\mathbb R\to\mathbb C$ be one-periodic, meaning $h(t+1)=h(t)$ for all real $t$, and continuous, meaning that both real functions $\operatorname{Re}h,\operatorname{Im}h:\mathbb R\to\mathbb R$ satisfy [[def-continuity-real]] and suppose that

$$\int_0^1h(t)\,e_k(-t)\,dt=0\qquad\text{for every }k\in\mathbb Z,$$

All integrals here are componentwise Riemann integrals: for continuous $p=p_1+ip_2$, $\int_a^b p:=\int_a^b p_1+i\int_a^b p_2$, with the real oriented convention of [[def-oriented-integral]]; both integrals exist by [[thm-continuous-implies-integrable]]. Here $e_k(t):=e^{2\pi ikt}$ ([[def-complex-exponential]]). Then $h=0$ on $\mathbb R$.

## Facts & Assumptions

**Given:** The continuous one-periodic $h$ and the vanishing of all the displayed integrals.

[F1] The Fejer kernel is $F_N(t)=\frac{1}{N+1}\bigl|\sum_{j=0}^Ne_j(t)\bigr|^2$ and equals $\sum_{|k|\le N}\bigl(1-\frac{|k|}{N+1}\bigr)e_k(t)$; it is nonnegative with $\int_0^1F_N=1$ ([[lem-fejer-kernel-is-a-positive-approximate-identity]], [[def-cesaro-and-abel-means-of-a-fourier-series]]).

[F2] The Fejer means $\sigma_Nh=h*F_N$ converge to $h$ uniformly: $\sup_x|\sigma_Nh(x)-h(x)|\to0$ ([[def-cesaro-and-abel-means-of-a-fourier-series]], [[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]).

[F3] For continuous one-periodic complex $\varphi$, affine substitution applied to each real component gives $\int_0^1\varphi(x-t)\,dt=\int_{x-1}^x\varphi(u)\,du=\int_0^1\varphi(u)\,du$. For the second equality, write $x=m+r$ with $m\in\mathbb Z$, $0\le r<1$; translate by $m$, split $[r-1,r]$ at $0$, and translate $[r-1,0]$ by $1$ to $[r,1]$, using periodicity and additivity ([[thm-substitution]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]]).

[F4] Character periodicity: $\exp(i\pi)=-1$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], hence $\exp(2\pi i)=1$ by exponential addition. Iteration gives $\exp(2\pi ik)=1$ for $k\ge0$; for $k<0$, $\exp(2\pi ik)\exp(-2\pi ik)=\exp(0)=1$ gives the same conclusion. Thus $e_k(t+1)=e_k(t)$. Exponential addition: $e_k(x-t)=e_k(x)e_k(-t)=e_k(x)e_{-k}(t)$ ([[thm-complex-exponential-addition-and-real-extension]], [[def-complex-exponential]]).

[F5] Continuous real components are Riemann integrable on compact intervals. The componentwise convention makes the integral complex-linear: expand complex multiplication into its two real components and apply real linearity and additivity ([[thm-continuous-implies-integrable]], [[thm-linearity-of-the-integral]], [[thm-additivity-over-subintervals]]).

## Proof

**Proof technique:** direct; expand the Fejer convolution with the finite trigonometric polynomial kernel and use the vanishing integrals.

1.1 Fix $N\ge0$. Since $\sigma_Nh=h*F_N=\int_0^1h(x-t)F_N(t)dt$ and $F_N$ is the finite sum of [F1], [F5] gives $$\sigma_Nh(x)=\sum_{|k|\le N}\Bigl(1-\frac{|k|}{N+1}\Bigr)\int_0^1h(x-t)e_k(t)\,dt .$$ [given, F1, F5, algebra]

1.2 For each $k$, substitute $t=x-u$ (the integrand $h(x-t)e_k(t)$ is one-periodic in $t$): by [F3] and [F4], $$\int_0^1h(x-t)e_k(t)\,dt=\int_0^1h(u)e_k(x-u)\,du=e_k(x)\int_0^1h(u)e_{-k}(u)\,du=0,$$ the last equality by the hypothesis of the lemma. [given, F3, F4, algebra]

2.1 Steps 1.1 and 1.2 give $\sigma_Nh(x)=0$ for every $x\in\mathbb R$ and every $N\ge0$. By [F2], $h(x)=\lim_N\sigma_Nh(x)=0$ for every $x$. This proves the lemma. [step 1.1, step 1.2, F2, algebra] ∎

## Remarks

- All functions here are continuous on the compact torus, so every integral displayed is an ordinary integral of a continuous periodic function, and the instances of the Fourier-mean machinery used are the choice-free ones noted in [[def-cesaro-and-abel-means-of-a-fourier-series]]; no selection principle is invoked in the argument as applied to continuous $h$.
