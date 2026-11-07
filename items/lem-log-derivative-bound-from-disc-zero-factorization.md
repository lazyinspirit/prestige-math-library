---
id: lem-log-derivative-bound-from-disc-zero-factorization
kind: lemma
title: "Logarithmic derivative after removing nearby disc zeros"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-jensen-formula-on-a-disc
  - thm-local-maximum-modulus-principle
  - thm-poisson-representation-for-disc-harmonic-functions
  - thm-holomorphic-logarithms-homologically-simply-connected-domains
  - prop-star-shaped-plane-domains-are-homologically-simply-connected
  - thm-isolated-zeros-holomorphic-function
  - thm-zero-order-factorization-holomorphic-function
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-c2-holomorphic-components-are-harmonic
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-chain-rule-for-complex-derivatives
  - def-natural-logarithm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Lemma 24.17"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed p. 69, Lemma 24.17; the carrier proves the fixed radii used in Theorems 24.18–24.19."
---

## Statement

Let $\Upsilon>0$, let $f$ be holomorphic on a neighbourhood of the closed disc $|z-z_0|\le\Upsilon$, and assume $f(z_0)\ne0$. Put $M=\max_{|z-z_0|=\Upsilon}|f(z)|$. For every $z$ with $|z-z_0|\le\Upsilon/3$ and $f(z)\ne0$, count the zeros $a$ of $f$, with multiplicity, satisfying $|a-z_0|\le\Upsilon/2$. Then
$$\left|\frac{f'(z)}{f(z)}-\sum_{|a-z_0|\le\Upsilon/2}\frac1{z-a}\right|\le C\frac{\log(M/|f(z_0)|)}{\Upsilon},$$
where $C$ is an absolute constant. The sum is empty if there are no such zeros.

## Statement references

[Montgomery–Vaughan, Lemma 24.17](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** $\Upsilon>0$, $f$ holomorphic near the closed $\Upsilon$-disc, and $f(z_0)\ne0$.

[F1] For a regular radius $U$, Jensen's formula says $\sum_{|a-z_0|<U}\log(U/|a-z_0|)$ equals the boundary mean of $\log|f|$ minus $\log|f(z_0)|$ ([[thm-jensen-formula-on-a-disc]]).

[F2] A holomorphic function cannot have an interior local maximum of its modulus unless it is constant ([[thm-local-maximum-modulus-principle]]).

[F3] A nonvanishing holomorphic function on a disc has a holomorphic logarithm; an open disc is homologically simply connected ([[thm-holomorphic-logarithms-homologically-simply-connected-domains]], [[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[F4] A harmonic function on a neighbourhood of a closed disc equals its Poisson integral there ([[thm-poisson-representation-for-disc-harmonic-functions]]).

[F5] Zeros of a nonzero holomorphic function are isolated and factor locally with their multiplicities ([[thm-isolated-zeros-holomorphic-function]], [[thm-zero-order-factorization-holomorphic-function]]).

[F6] For holomorphic $H$, $2\partial_z\operatorname{Re}H=H'$, and holomorphic functions are smooth ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F7] $|a|^2=(\operatorname{Re}a)^2+(\operatorname{Im}a)^2$ and the complex modulus is multiplicative ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F8] The real part of a holomorphic function is harmonic, and differentiating $\exp(H)=g$ gives $H'=g'/g$ ([[thm-c2-holomorphic-components-are-harmonic]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-complex-derivatives]]).

## Proof

**Proof technique:** factor the zeros by disc Blaschke factors, then bound the zero-free factor with the Poisson formula.

1.1 Translate the centre to $z_0=0$. Since $f(0)\ne0$, [F5] makes the zeros in the closed $\Upsilon$-disc finite. Choose a radius $U\in[3\Upsilon/4,\Upsilon)$ with no zero on $|z|=U$. The maximum-modulus principle [F2], applied to the original $\Upsilon$-disc whose boundary maximum is $M$, gives $|f(z)|\le M$ throughout $|z|\le\Upsilon$, and hence throughout $|z|\le U$. [given, F2, F5, F6, algebra]

2.1 For each zero $a$ with $|a|<U$, repeated use of [F5] gives its multiplicity. Define $B_a(z)=U(z-a)/(U^2-\overline a z)$ and form $g(z)=f(z)/\prod_{|a|<U}B_a(z)^{m_a}$. The local factors cancel every zero, so $g$ is holomorphic and nowhere zero near the closed $U$-disc; also $|B_a|=1$ on its boundary, hence $|g|=|f|\le M$ there. Since $|B_a(0)|=|a|/U<1$, $|g(0)|\ge|f(0)|$. Jensen's formula [F1] yields $$\sum_{|a|<U}m_a\log\frac{U}{|a|}\le L,\qquad L:=\log\frac{M}{|f(0)|}.$$ [step 1.1, F1, F5, F7, algebra]

3.1 By [F3], choose a holomorphic logarithm $H$ of $g$ on the disc. The function $v(z)=\log M-\operatorname{Re}H(z)$ is harmonic by [F8] and nonnegative on $|z|=U$; [F4] makes it nonnegative inside, with $v(0)=\log(M/|g(0)|)\le L$. The Poisson kernel is $$P_U(z,\theta)=\operatorname{Re}\frac{Ue^{i\theta}+z}{Ue^{i\theta}-z}.$$ For $|z|\le\Upsilon/3$ and $U\ge3\Upsilon/4$, the derivative of the rational function in this display has modulus $2U/|Ue^{i\theta}-z|^2\le C/U$. Differentiating the Poisson formula [F4] under its continuous boundary integral and using [F6] gives $|H'(z)|\le CL/U$. By [F8], $H'=g'/g$, so $|g'(z)/g(z)|\le CL/\Upsilon$. [step 2.1, F3, F4, F6, F8, algebra]

3.2 For a zero $a$, logarithmic differentiation gives $$\frac{B_a'(z)}{B_a(z)}=\frac1{z-a}+\frac{\overline a}{U^2-\overline a z}=\frac{U^2-|a|^2}{(z-a)(U^2-\overline a z)}.$$ If $|a|\le\Upsilon/2$, the reflected term has modulus $O(1/U)$ for $|z|\le\Upsilon/3$; Jensen's bound in step 2.1 shows there are at most $L/\log(U/(\Upsilon/2))=O(L)$ such zeros, so their total reflected contribution is $O(L/U)$. If $\Upsilon/2<|a|<U$, then $|z-a|\ge\Upsilon/6$, $|U^2-\overline a z|\ge cU^2$, and the combined term is at most $C(U-|a|)/U^2\le C\log(U/|a|)/U$. Summing and using step 2.1 bounds all outer-zero contributions by $CL/U$. [step 2.1, F1, F7, algebra]

4.1 Logarithmically differentiating $f=g\prod B_a^{m_a}$, subtracting $1/(z-a)$ exactly for zeros with $|a|\le\Upsilon/2$, and applying steps 3.1 and 3.2 proves the asserted estimate because $U\ge3\Upsilon/4$. [step 3.1, step 3.2, algebra] ∎

