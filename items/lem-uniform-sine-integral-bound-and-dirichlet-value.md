---
id: "lem-uniform-sine-integral-bound-and-dirichlet-value"
kind: "lemma"
title: "Uniform sine integral bound and dirichlet value"
deps: ["thm-integration-by-parts", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-dominated-convergence", "def-axiom-of-choice", "thm-dirichlet-test-for-improper-integrals", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-sine-and-cosine-derivatives", "thm-derivative-of-exponential", "thm-chain-rule", "thm-principal-inverse-tangent-calculus", "thm-substitution", "thm-continuous-implies-integrable", "def-principal-inverse-tangent", "cor-mean-value-theorem", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Define $S(T)=\int_0^T\sin(u)/u\,du$ for $T\ge0$, with the integrand assigned value one at zero. Then $S$ is uniformly bounded and $S(T)\to\pi/2$. For every real $z$, $$\lim_{T\to\infty}\int_{-T}^T\frac{\sin(tz)}t\,dt=\pi\operatorname{sgn}(z),$$ and these integrals are bounded by one absolute constant for all $T\ge0$ and all $z$. The integrand at $t=0$ is $z$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Integration by parts applies to continuously differentiable factors on compact intervals. [[thm-integration-by-parts]].

[F2] An integrable derivative integrates to the endpoint increment. [[thm-ftc-second-part]].

[F3] Under countable choice compact Riemann and Lebesgue integrals agree. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F4] Absolute integrability permits reversal of integration. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

[F5] Dominated convergence applies on each bounded u interval. [[thm-dominated-convergence]].

[F6] Sine and cosine have their usual derivatives, including sin derivative one at zero. [[thm-sine-and-cosine-derivatives]].

[F7] The derivative of the real exponential is itself. [[thm-derivative-of-exponential]].

[F8] The chain rule differentiates the damped trigonometric primitive. [[thm-chain-rule]].

[F9] Arctangent evaluates the rational integral. [[thm-principal-inverse-tangent-calculus]].

[F10] Arctangent increases onto its principal interval. [[def-principal-inverse-tangent]].

[F11] Oriented substitution applies to continuous integrands. [[thm-substitution]].

[F12] MVT bounds the sine increment by the derivative bound. [[cor-mean-value-theorem]].

[F13] Sine and cosine have absolute value at most one. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F14] AC supplies countable choice in the integral bridge. [[def-axiom-of-choice]].

[F15] Continuous compact-interval integrands are Riemann integrable. [[thm-continuous-implies-integrable]].

## Proof

**Proof technique:** direct.

1.1 The derivative of sine at zero makes $\sin u/u\to1$. MVT and $|\cos u|\le1$ give $|\sin u|\le|u|$, so the extended quotient is continuous and bounded by one on $[0,1]$. It has a proper integral on every bounded interval. AC supplies the countable choice needed to identify these with Lebesgue integrals using F3 (and the compact integration interface F15). [F6, F12, F13, F15, F3, F14]

2.1 For $B>A\ge1$ and $\varepsilon\ge0$, put $w(u)=e^{-\varepsilon u}/u$. This is positive, decreasing, and continuously differentiable on $[A,B]$, with $\int_A^B|w\prime|=w(A)-w(B)$. Integration by parts against $\sin u=(-\cos u)\prime$ gives $$\left|\int_A^B w(u)\sin u\,du\right|\le w(A)+w(B)+\int_A^B|w\prime|=2w(A)\le2/A.$$ At $\varepsilon=0$ this proves the Cauchy property of $S(T)$ as $T\to\infty$ and the bound $|S(T)|\le3$ for all $T\ge0$. For positive damping it also bounds the infinite tail by $2/A$. [F1, F2, F6, F7, F8, F13, step 1.1]

2.2 Fix $\varepsilon>0$. FTC gives $\sin u/u=\int_0^1\cos(su)\,ds$, including $u=0$. The double absolute integral of $e^{-\varepsilon u}\cos(su)$ on $[0,\infty)\times[0,1]$ is at most $1/\varepsilon$, so Fubini applies. Differentiating $$\frac{e^{-\varepsilon u}(-\varepsilon\cos(su)+s\sin(su))}{\varepsilon^2+s^2}$$ gives $e^{-\varepsilon u}\cos(su)$; its limit at infinity is zero and its value at zero is $-\varepsilon/(\varepsilon^2+s^2)$. Consequently $$J_\varepsilon:=\int_0^\infty e^{-\varepsilon u}\frac{\sin u}{u}\,du=\int_0^1\frac{\varepsilon}{\varepsilon^2+s^2}\,ds=\arctan(1/\varepsilon).$$ [F2, F4, F6, F7, F8, F9, F11, step 1.1]

3.1 On $[0,A]$, dominated convergence gives convergence of the damped integral to $S(A)$ as $\varepsilon\downarrow0$. The two tails, damped and undamped, are each at most $2/A$ by step 2.1. Thus, first taking $\varepsilon\downarrow0$ and then $A\to\infty$, $J_\varepsilon\to\lim_T S(T)$. The increasing inverse arctangent has limit $\pi/2$ at infinity: its values are below $\pi/2$, and for every $v<\pi/2$ in its range, $y>\tan v$ implies $\arctan y>v$. Hence $S(T)\to\pi/2$. [F5, F10, step 2.1, step 2.2]

4.1 For $z=0$ the symmetric integral is zero. For $z\ne0$, evenness in $t$ and substitution $u=|z|t$ give $$\int_{-T}^T\frac{\sin(tz)}t\,dt=2\operatorname{sgn}(z)S(T|z|).$$ Its absolute value is at most six, and for each fixed nonzero $z$ its limit is $\pi\operatorname{sgn}(z)$. The uniform bound, but not uniform convergence in z, is asserted. [F11, step 2.1, step 3.1] ∎
