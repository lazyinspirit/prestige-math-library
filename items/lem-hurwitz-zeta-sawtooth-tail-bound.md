---
id: lem-hurwitz-zeta-sawtooth-tail-bound
kind: lemma
title: "Oscillatory Hurwitz-zeta sawtooth tail bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-hurwitz-zeta-summation-formula
  - lem-vinogradov-exponential-sum-toolkit
  - def-exponential-character-e
  - def-natural-logarithm
  - def-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-derivatives
  - thm-chain-rule
  - thm-logarithm-derivative-and-integral
  - thm-real-power-continuity-and-derivatives
  - thm-p-series-real-exponents
  - thm-integration-by-parts
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 66–68, oscillatory remainder in the proof of Theorem 24.15; Fourier/Fejér argument supplied locally here."
---

## Statement

Let $s=\sigma+it$ with $t\in\mathbb R$, $|t|\ge4$, and $1/2\le\sigma\le1$. Let $0<\alpha\le1$, and let $x\ge |t|/2$. Put $B_1(u):=\{u\}-1/2$, where $\{u\}:=u-\lfloor u\rfloor$.
$$\left|s\int_x^\infty B_1(u)(u+\alpha)^{-s-1}\,du\right|\le Cx^{-\sigma},$$
where $C$ is absolute.

## Statement references

[Montgomery–Vaughan, proof of Theorem 24.15](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** $|t|\ge4$, $1/2\le\sigma\le1$, $0<\alpha\le1$, and $x\ge|t|/2$.

[F1] $B_1(u)=\{u\}-1/2$ is periodic, has mean zero on $[0,1]$, and its Fejér means converge to it away from integers while remaining bounded by $1/2$ ([[lem-hurwitz-zeta-summation-formula]], [[lem-vinogradov-exponential-sum-toolkit]]).

[F2] The Fejér kernel $F_M(v)=M^{-1}|\sum_{j=0}^{M-1}e(jv)|^2$ is nonnegative with integral $1$, and for $\|v\|_{\mathbb T}\ge\eta>0$ it satisfies $F_M(v)\le C/(M\eta^2)$ by the geometric-progression bound ([[def-exponential-character-e]], [[lem-vinogradov-exponential-sum-toolkit]]).

[F3] $e(v)=\exp(2\pi iv)$ has modulus $1$; the real and imaginary parts of $e^{i\theta}$ are $\cos\theta$ and $\sin\theta$, whose derivatives obey the chain rule ([[def-exponential-character-e]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]).

[F4] For $u+\alpha>0$, $(u+\alpha)^{-s-1}=(u+\alpha)^{-\sigma-1}\exp(-it\log(u+\alpha))$ and its modulus is $(u+\alpha)^{-\sigma-1}$; also $\log'(u+\alpha)=1/(u+\alpha)$, $u\mapsto(u+\alpha)^{-\sigma-1}$ has derivative $-(\sigma+1)(u+\alpha)^{-\sigma-2}$, and $(u+\alpha)^{-\sigma}$ has antiderivative $-(u+\alpha)^{-\sigma}/\sigma$ ([[lem-hurwitz-zeta-summation-formula]], [[def-natural-logarithm]], [[def-complex-exponential]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-logarithm-derivative-and-integral]], [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule]]).

[F5] The finite-interval real integration-by-parts formula holds for the smooth amplitude and phase components ([[thm-integration-by-parts]]).

[F6] $\sum_{m\ge1}m^{-2}$ converges ([[thm-p-series-real-exponents]] with $p=2$).

## Proof

**Proof technique:** Fourier expansion by Fejér means and one integration by parts on each nonzero frequency.

1.1 The Fourier coefficient of $B_1$ at a nonzero integer $m$ is $$b_m=\int_0^1(u-\tfrac12)e(-mu)\,du=-\frac1{2\pi im},$$ by [F3] and direct integration by parts [F5]; its zero coefficient is $0$. The finite Fourier expansion is $$B_{1,M}(u)=\sum_{0<|m|<M}b_m\left(1-\frac{|m|}{M}\right)e(mu).$$ By [F1], $|B_{1,M}|\le1/2$ and $B_{1,M}(u)\to B_1(u)$ at every noninteger $u$. [given, F1, F3, F5, algebra]

1.2 For $m\ne0$ write $$I_m=\int_x^\infty (u+\alpha)^{-\sigma-1}\exp\bigl(i(2\pi m u-t\log(u+\alpha))\bigr)\,du.$$ The phase $\phi_m(u)=2\pi m u-t\log(u+\alpha)$ has derivatives $\phi_m'(u)=2\pi m-t/(u+\alpha)$ and $\phi_m''(u)=t/(u+\alpha)^2$ by [F4]. Since $u+\alpha\ge x\ge|t|/2$, $|\phi_m'(u)|\ge(2\pi-2)|m|$, while $|\phi_m''(u)|\le|t|(u+\alpha)^{-2}$. On $[x,R]$, apply integration by parts [F5] to the real and imaginary parts of the oscillatory factor with amplitude $(u+\alpha)^{-\sigma-1}$. The boundary term at $R$ tends to $0$ as $R\to\infty$; the boundary term at $x$ and the derivative-amplitude integral are $O(x^{-\sigma-1}/|m|)$, while the phase-curvature integral is $O(|t|x^{-\sigma-2}/m^2)$. Hence $$|I_m|\le C\left(\frac{x^{-\sigma-1}}{|m|}+\frac{|t|x^{-\sigma-2}}{m^2}\right)\le C\frac{x^{-\sigma-1}}{|m|},$$ using $|t|\le2x$. Multiplying by $|b_m|=(2\pi|m|)^{-1}$ and summing over $m\ne0$ gives an absolutely convergent total at most $Cx^{-\sigma-1}\sum_{m\ne0}m^{-2}$. [given, F3, F4, F5, F6, algebra]

2.1 Put $W(u)=(u+\alpha)^{-s-1}$. Fix $A>x$ and remove from $[x,A]$ intervals of radius $\varepsilon$ around its finitely many integer points. Their total length is $O_A(\varepsilon)$; since $|B_{1,M}-B_1|\le1$ and $W$ is bounded there, their contribution to $\int_x^A(B_{1,M}-B_1)W$ is $O_A(\varepsilon)$. On the remaining compact set, $B_1$ has slope $1$ on each component. For $0<\eta<\varepsilon/2$, split the Fejér convolution into $\|v\|_{\mathbb T}<\eta$ and its complement. On the first part $u-v$ stays on the same linear branch, so $|B_1(u-v)-B_1(u)|\le\eta$; on the complement use $|B_1(u-v)-B_1(u)|\le1$ and [F2]. This gives, uniformly there, $$|B_{1,M}(u)-B_1(u)|\le\eta+\int_{\|v\|_{\mathbb T}\ge\eta}F_M(v)\,dv\le\eta+\frac{C}{M\eta^2}$$ by [F2]. Thus for fixed $A$, first taking $\varepsilon,\eta$ small and then $M$ large proves $\int_x^A B_{1,M}W\to\int_x^A B_1W$. For the improper tails, both $|B_{1,M}|$ and $|B_1|$ are at most $1/2$, so their absolute integrals past $A$ are bounded uniformly in $M$ by $$\int_A^\infty (u+\alpha)^{-\sigma-1}\,du=\frac{(A+\alpha)^{-\sigma}}{\sigma}\longrightarrow0$$ as $A\to\infty$, using [F4]. Hence the improper integrals converge as $M\to\infty$. Integrating the finite Fourier expansion of step 1.1 termwise and using the absolute summability from step 1.2 shows that the limit is $\sum_{m\ne0}b_mI_m$. Consequently $$\left|s\int_x^\infty B_1(u)(u+\alpha)^{-s-1}\,du\right|\le C|s|x^{-\sigma-1}\le Cx^{-\sigma},$$ since $|s|\le C|t|\le Cx$. This compact-interval and uniform-tail argument does not use dominated convergence or a choice axiom. [step 1.1, step 1.2, F1, F2, F4, F6, algebra] ∎

