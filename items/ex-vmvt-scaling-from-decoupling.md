---
id: ex-vmvt-scaling-from-decoupling
kind: example
title: Vinogradov Mean-Value Scaling from Decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
- thm-bourgain-demeter-guth-sharp-moment-curve-decoupling
- ex-discrete-restriction-from-moment-curve-decoupling
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- def-polynomial-decoupling-weight-and-norm
- def-countable-choice
- lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
- thm-linear-change-of-variables-for-lebesgue-measure
- thm-tonelli-and-fubini-for-completed-product-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§4, Corollary 4.2, pp. 638–639: weighted moment expansion and the anisotropic
      scaling yielding the Vinogradov mean-value bound.'
axiom_use: Countable Choice is inherited from the actual complete Lebesgue, Fourier
  and weighted decoupling suppliers; no full Axiom of Choice is used.
---

## Example

Assume Countable Choice. Let $n\ge2$, $N\ge1$, $s\ge1$ be integers, and choose real numbers $X_i\in(i-1,i]$ for $1\le i\le N$. Let $J_{s,n}(X)$ be the number of ordered tuples $(i_1,\ldots,i_{2s})\in\{1,\ldots,N\}^{2s}$ satisfying
$$\left|\sum_{j=1}^sX_{i_j}^r-\sum_{j=s+1}^{2s}X_{i_j}^r\right|\le N^{r-n}\qquad(1\le r\le n).$$
Then for every $\varepsilon>0$,
$$J_{s,n}(X)\le C_{n,s,\varepsilon}\left(N^{s+\varepsilon}+N^{2s-n(n+1)/2+\varepsilon}\right),$$
uniformly in the choices of the $X_i$.

## Example references

[Discrete restriction estimate]([[ex-discrete-restriction-from-moment-curve-decoupling]])

[Sharp moment-curve decoupling theorem]([[thm-bourgain-demeter-guth-sharp-moment-curve-decoupling]])

[BDG, Corollary 4.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The data in the Example, the critical decoupling estimate, and Lebesgue measure on $\mathbb R^n$.

[F1] For points $t_i\in((i-1)/N,i/N]$ and any fixed $E\ge100n$, the discrete restriction estimate gives, for $2s\ge2$, $$\left(\frac1{|B_R|}\int_{\mathbb R^n}\left|\sum_{i=1}^Na_ie^{2\pi i\sum_{r=1}^nx_rt_i^r}\right|^{2s}w_{B_R,E}(x)dx\right)^{1/(2s)}\le C\left(N^\eta+N^{\frac12(1-\frac{n(n+1)}{2s})+\eta}\right)\left(\sum_i|a_i|^2\right)^{1/2}$$
for every $R\ge N^n$ and $\eta>0$. ([[ex-discrete-restriction-from-moment-curve-decoupling]])

[F2] Tonelli's theorem permits iterated integration of nonnegative measurable functions on sigma-finite products. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F3] For a ball $B=B(c_B,R_B)$, the polynomial weight is $w_{B,E}(x)=(1+|x-c_B|/R_B)^{-E}$. ([[def-polynomial-decoupling-weight-and-norm]])

[F4] The complete Gaussian Fourier formula and polynomial-Gaussian integrability are [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]; linear Jacobians and completed product integration are the other listed suppliers.

## Verification

**Proof technique:** Bound a weighted exponential-sum moment by discrete restriction, expand it, and use Fourier positivity after anisotropic rescaling so every counted tuple contributes a fixed positive amount.

1.1 Let $\phi_1(u)=e^{-\pi u^2}$ and $G(\xi)=\int_{\mathbb R}\phi_1(u)e^{-2\pi i u\xi}du$. Squaring the positive integral $G(0)$, applying polar coordinates, and integrating $2\pi\int_0^\infty e^{-\pi r^2}r\,dr$ gives $G(0)^2=1$, hence $G(0)=1$. Gaussian decay justifies differentiating under the integral and integrating by parts: $G'(\xi)=i\int\phi_1'(u)e^{-2\pi i u\xi}du=-2\pi\xi G(\xi)$. Solving this differential equation with the computed initial value yields $G(\xi)=e^{-\pi\xi^2}$. [given, F4, algebra]

1.2 Fix $E=100n$, put $t_i=X_i/N$, and set $S(x)=\sum_{i=1}^Ne^{2\pi i\sum_{r=1}^nx_r t_i^r}$. Apply [F1] with all coefficients equal to $1$, $R=N^n$, the ball centered at $0$, and the chosen $E=100n$. After raising to the power $2s$ and choosing $\eta$ small enough in terms of $\varepsilon,n,s$, we obtain
$$\int_{\mathbb R^n}|S(x)|^{2s}w_{B_{N^n},E}(x)dx\le C_{n,s,E,\varepsilon}N^{n^2}\left(N^{s+\varepsilon}+N^{2s-n(n+1)/2+\varepsilon}\right),$$
because $|B_{N^n}|=|B_1|N^{n^2}$ and $(u+v)^{2s}\le2^{2s-1}(u^{2s}+v^{2s})$. [F1, given, algebra]

2.1 Set $\phi(x)=e^{-\pi|x|^2}$ on $\mathbb R^n$. The product of the one-dimensional Gaussian factors is absolutely integrable, so Tonelli [F2] gives absolute integrability and Fubini then gives $\widehat\phi(\xi)=\prod_{r=1}^nG(\xi_r)=e^{-\pi|\xi|^2}$ for $\widehat\phi(\xi)=\int\phi(x)e^{-2\pi ix\cdot\xi}dx$. In particular $\widehat\phi(\xi)\ge e^{-\pi n}$ whenever each $|\xi_r|\le1$, and $\phi(y)\le C_{n,E}(1+|y|)^{-E}$ for every $E>0$. [F2, step 1.1, given, algebra]

3.1 Since $\phi(x/N^n)\le C_{n,E}w_{B_{N^n},E}(x)$ by step 2.1 and [F3], step 1.2 also bounds $I=\int_{\mathbb R^n}\phi(x/N^n)|S(x)|^{2s}dx$ by the same right-hand side. [F3, step 2.1, step 1.2, given]

3.2 Expand $|S(x)|^{2s}$ as a sum over ordered tuples and put $Z_r=\sum_{j=1}^sX_{i_j}^r-\sum_{j=s+1}^{2s}X_{i_j}^r$. In the term for this tuple, change variables $x_r=N^ry_r$ for $1\le r\le n$. Its Jacobian is $N^{1+\cdots+n}=N^{n(n+1)/2}$, and the phase becomes $e^{2\pi i\sum_r y_rZ_r}$. With $A=\operatorname{diag}(N^{n-1},N^{n-2},\ldots,1)$, the change of variables $y=Az$ gives $\int\phi(A^{-1}y)e^{2\pi i y\cdot Z}dy=(\det A)\widehat\phi(-A^TZ)$; $\det A=N^{n(n-1)/2}$ and $\widehat\phi$ is even by step 2.1. Thus the tuple contributes exactly $N^{n^2}\widehat\phi(N^{n-1}Z_1,N^{n-2}Z_2,\ldots,Z_n)$. [step 2.1, given, algebra]

4.1 If the tuple is counted by $J_{s,n}(X)$, then $|N^{n-r}Z_r|\le1$ for every $r$, so its contribution in step 3.2 is at least $e^{-\pi n}N^{n^2}$ by step 2.1. Every tuple, counted or not, contributes a nonnegative amount because $\widehat\phi$ is positive. Hence $I\ge e^{-\pi n}N^{n^2}J_{s,n}(X)$. [step 2.1, step 3.2, given, algebra]

5.1 Comparing the lower bound from step 4.1 with the upper bound from step 3.1 and dividing by $e^{-\pi n}N^{n^2}$ proves the stated estimate, uniformly in $X$. [step 3.1, step 4.1, given, algebra] ∎
