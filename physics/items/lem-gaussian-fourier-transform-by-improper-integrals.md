---
id: lem-gaussian-fourier-transform-by-improper-integrals
kind: lemma
title: The Gaussian Fourier transform from improper integrals
domain: mathematics
library: physics
category: string-theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - thm-gaussian-integral
  - thm-exponential-beats-every-polynomial
  - thm-integration-by-parts
  - thm-ftc-second-part
  - thm-ftc-first-part
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-derivatives
  - thm-uniform-limit-continuous-complex-functions
  - thm-heine-cantor-metric
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-change-of-variables-for-compact-jordan-sets
  - lem-uniform-integral-error-bound
  - thm-derivative-of-exponential
  - thm-monotonicity-of-the-integral
  - thm-multidimensional-integral-properties
  - def-riemann-integral-over-a-jordan-set
  - def-improper-multiple-integral-and-absolute-convergence
  - thm-absolute-improper-multiple-integral-by-exhaustion
dependency_roles:
  thm-gaussian-integral: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-chain-rule-for-complex-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-uniform-limit-continuous-complex-functions: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  lem-uniform-integral-error-bound: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  def-improper-multiple-integral-and-absolute-convergence: mathematical-premise
  thm-absolute-improper-multiple-integral-by-exhaustion: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Semyon Dyatlov, MIT 18.155 Differential Analysis I, Fall 2026, full lecture notes"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.1.4, Proposition 11.14 and its one-dimensional ODE proof, printed pp. 123-124; the convention there is e^{-ix·ξ}, and the local proof below states and derives the 2π convention directly."
---

## Statement

For $n\ge1$, $t>0$, and $\xi\in\mathbb R^n$, define the Fourier transform by
$$\widehat f(\xi):=\int_{\mathbb R^n}f(x)e^{-2\pi i x\cdot\xi}\,dx.$$
For complex-valued functions, this integral is defined componentwise by the real improper multiple integrals of the real and imaginary parts, using compact Jordan exhaustion on the open set $\mathbb R^n$; absolute convergence is measured by the improper integral of the modulus. The proof below establishes absolute convergence and shows that the cube exhaustion $[-R,R]^n$ gives this value.
Then
$$\widehat{\bigl(e^{-\pi t|x|^2}\bigr)}(\xi)=t^{-n/2}e^{-\pi|\xi|^2/t}.$$

## Facts & Assumptions

**Given:** The integer $n\ge1$, real $t>0$, frequency $\xi\in\mathbb R^n$, the standard Euclidean norm $|x|$, and the componentwise compact-Jordan-exhaustion convention for complex improper multiple integrals in the Statement.

[F1] The real Gaussian integral is $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F2] For each positive integer $m$ and $a>0$, $x^m e^{-ax}\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[F3] Real integration by parts on a compact interval has its usual endpoint formula ([[thm-integration-by-parts]]).

[F4] A differentiable real function with integrable derivative satisfies the finite-interval fundamental theorem of calculus ([[thm-ftc-second-part]]).

[F5] For real $\theta$, $e^{i\theta}=\cos\theta+i\sin\theta$ and $|e^{i\theta}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F6] The complex exponential is entire with derivative $\exp'(z)=\exp(z)$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]), and the complex chain rule differentiates compositions ([[thm-chain-rule-for-complex-derivatives]]).

[F7] Continuous functions on a compact metric space are uniformly continuous ([[thm-heine-cantor-metric]]).

[F8] Continuous real functions on compact rectangles are Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[F9] On a compact interval, the Riemann change-of-variables formula for a $C^1$ diffeomorphism uses the absolute derivative ([[thm-change-of-variables-for-compact-jordan-sets]]).

[F10] If two real integrable functions on a finite interval differ everywhere by at most $\eta$, their integrals differ by at most $\eta$ times the interval length ([[lem-uniform-integral-error-bound]]); apply this separately to real and imaginary parts for complex integrals.

[F11] The real exponential has derivative $e^x$ ([[thm-derivative-of-exponential]]).

[F12] The integral over a compact Jordan set is the Riemann integral of the zero extension to a containing rectangle ([[def-riemann-integral-over-a-jordan-set]]).

[F13] The improper integral of a nonnegative locally Riemann-integrable function on an open set is the supremum of its compact Jordan integrals; absolute integrability of signed functions is defined through the modulus ([[def-improper-multiple-integral-and-absolute-convergence]]).

[F14] For an absolutely improperly integrable function, every compact Jordan exhaustion, including cubes, converges to the same improper integral ([[thm-absolute-improper-multiple-integral-by-exhaustion]]).

[F15] Finite-interval Riemann integrals are monotone, and the absolute value of an integral is bounded by the integral of the absolute value; the same absolute-value estimate holds on compact rectangles ([[thm-monotonicity-of-the-integral]], [[thm-multidimensional-integral-properties]]).

[F16] A uniform limit of continuous complex-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-complex-functions]]).

[F17] If a real function $f$ is Riemann integrable on $[a,b]$ and continuous at $c\in[a,b]$, then its integral function $F(x)=\int_a^x f(s)\,ds$ satisfies $F'(c)=f(c)$ (with one-sided derivatives at the endpoints) ([[thm-ftc-first-part]]).

[F18] Products of differentiable real functions obey the product rule ([[thm-algebra-of-derivatives]]).

[F19] Every continuous real function on a compact Jordan set is Riemann integrable ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Proof

**Proof technique:** direct.

1.1 For $a>0$ and integer $m\ge0$, choose a positive integer $M\ge m$. When $|x|\ge1$, $|x|^m\le|x|^{2M}$; applying [F2] to $u=x^2$ with exponent $M$ and parameter $a/2$ gives $|x|^{2M}e^{-a x^2/2}\to0$ as $|x|\to\infty$. Hence $|x|^m e^{-a x^2/2}\to0$ and, by continuity on bounded intervals, it is bounded by some $C$. Thus $|x|^m e^{-a x^2}\le C e^{-a x^2/2}$. For $|x|\ge1$, $e^{-a x^2/2}\le e^{-a|x|/2}$, and [F11] together with [F4] gives $\int_R^S e^{-a x/2}\,dx=(2/a)(e^{-aR/2}-e^{-aS/2})$ for $1\le R<S$, with a tail tending to zero as $R\to\infty$; the negative tail is identical by reflection. Thus each $|x|^m e^{-a x^2}$ is absolutely improperly integrable and its tails tend to zero. [F2, F4, F11, algebra]

1.2 For fixed $R>0$ in dimension one, put $G_R(\xi):=\int_{-R}^{R}e^{-\pi x^2}e^{-2\pi i x\xi}\,dx$ and $H_R(\xi):=\int_{-R}^{R}(-2\pi i x)e^{-\pi x^2}e^{-2\pi i x\xi}\,dx$. On each compact frequency interval, continuity of the integrands in $(x,\xi)$ and uniform continuity on the compact product, followed by [F10] on their real and imaginary parts, show $G_R$ and $H_R$ are continuous. For $g(x,\xi):=e^{-\pi x^2}e^{-2\pi i x\xi}$, [F6] and the complex chain rule give $\partial_\xi g=-2\pi i xg$; this derivative is continuous. On any compact frequency interval containing $\xi$ in its interior, [F7] makes $\partial_\xi g$ uniformly continuous on the compact product with $[-R,R]$. For sufficiently small real $h$, the finite-interval fundamental theorem [F4], applied to real and imaginary parts as functions of frequency, gives $[g(x,\xi+h)-g(x,\xi)]/h=\int_0^1\partial_\xi g(x,\xi+sh)\,ds$. Uniform continuity makes these difference quotients converge uniformly in $x$ to $\partial_\xi g(x,\xi)$. Their real and imaginary integrals therefore converge by [F10], so $G_R'(\xi)=\int_{-R}^R\partial_\xi g(x,\xi)\,dx=H_R(\xi)$. [F4, F6, F7, F8, F10, algebra]

2.1 In dimension $n$, the Gaussian and each coordinate-weighted absolute Gaussian factor into one-dimensional factors on every box $[-R,R]^n$; product rectangular Riemann sums give the corresponding product of one-dimensional integrals. Step 1.1 makes each factor finite and its tail tend to zero. For $S>R$, the part of $[-S,S]^n$ outside $[-R,R]^n$ lies in the union of the $n$ coordinate-tail slabs; the integral on slab $j$ factors as one one-dimensional tail integral times $n-1$ bounded one-dimensional integrals. Therefore the integral on the complement tends to zero as $R\to\infty$, uniformly in $S>R$. Each integrand is continuous, so [F19] gives local Riemann integrability on every compact Jordan set. For any such set $K$, choose $S$ with $K\subset[-S,S]^n$; extend the nonnegative integrand by zero from $K$ to a containing rectangle as in [F12], and use monotonicity [F15] to bound its integral by that over $[-S,S]^n$. The supremum in [F13] is therefore finite, and [F14] identifies the improper integral with the cube exhaustion limit. This proves absolute improper integrability for $e^{-\pi t|x|^2}$ and $|x_j|e^{-\pi|x|^2}$. [F8, F12, F13, F14, F15, F19, step 1.1, algebra]

3.1 Step 1.1 bounds the tails of $G_R$ and $H_R$ uniformly in $\xi$, because $|e^{-2\pi ix\xi}|=1$ by [F5]; hence $G_R\to G$ and $H_R\to H$ uniformly, where $G(\xi):=\int_{\mathbb R}e^{-\pi x^2}e^{-2\pi i x\xi}\,dx$ and $H(\xi):=\int_{\mathbb R}(-2\pi i x)e^{-\pi x^2}e^{-2\pi i x\xi}\,dx$. Since each $G_R,H_R$ is continuous by step 1.2, [F16] makes both limits continuous. [F5, F14, F16, step 1.1, step 2.1, step 1.2]

4.1 By step 1.2 and [F4], $G_R(\xi)-G_R(0)=\int_0^\xi H_R(s)\,ds$ for every finite $R$, applying the real theorem to each component. The uniform convergence from step 3.1 and [F10] on the finite interval from $0$ to $\xi$ let $R\to\infty$ in this identity, giving $G(\xi)-G(0)=\int_0^\xi H(s)\,ds$. On any compact interval containing $0$ and the evaluation frequency in its interior, both real components of $H$ are continuous by step 3.1 and hence Riemann integrable by [F8]. For each component, its integral from $0$ differs from the integral function based at the interval's left endpoint by a constant. Thus [F17] applies at every evaluation frequency and yields $G'=H$. [F4, F8, F10, F17, step 1.2, step 3.1]

5.1 On $[-R,R]$, integration by parts [F3] applied to the real and imaginary parts gives
$$\int_{-R}^R(-2\pi x)e^{-\pi x^2}e^{-2\pi i x\xi}\,dx=[e^{-\pi x^2}e^{-2\pi i x\xi}]_{-R}^{R}+2\pi i\xi G_R(\xi).$$
The boundary term tends to zero by step 1.1 and the phase modulus in [F5]; the finite-interval integrands are continuous and hence integrable by [F8], and the improper integrals converge absolutely by steps 1.1-2.1. Since $G_R\to G$ and the polynomial-Gaussian tails converge by step 1.1, taking $R\to\infty$ gives $-2\pi\int_{\mathbb R}xe^{-\pi x^2}e^{-2\pi i x\xi}\,dx=2\pi i\xi G(\xi)$. By step 4.1, $G'=H$, and the definition of $H$ therefore gives $G'=-2\pi i\int xe^{-\pi x^2}e^{-2\pi i x\xi}\,dx=-2\pi\xi G$. [F3, F5, F8, step 1.1, step 2.1, step 4.1, algebra]

6.1 The complex exponential chain rule [F6] gives $(e^{\pi\xi^2})'=2\pi\xi e^{\pi\xi^2}$. Apply the real product rule [F18] separately to the real and imaginary parts of $e^{\pi\xi^2}G(\xi)$; step 5.1 gives derivative zero, so both parts are constant by [F4]. By [F1] and the finite-interval substitutions $u=\sqrt\pi x$ followed by the improper limit, $G(0)=\int_{\mathbb R}e^{-\pi x^2}\,dx=1$ using [F9] and the exhaustion convention [F14]. Thus $G(\xi)=e^{-\pi\xi^2}$. [F1, F4, F6, F9, F14, F18, step 5.1, algebra]

7.1 For $t>0$, the one-dimensional substitution $u=\sqrt t\,x$ using [F9] gives $\int_{\mathbb R}e^{-\pi t x^2}e^{-2\pi i x\xi}\,dx=t^{-1/2}G(\xi/\sqrt t)=t^{-1/2}e^{-\pi\xi^2/t}$. In $n$ dimensions the integrand is the product of these one-dimensional factors. On each box $[-R,R]^n$ its integral factors by finite rectangular Riemann sums, whose continuous summands are integrable by [F8]. Step 2.1 bounds the absolute tail outside the box by a sum of products of one-dimensional Gaussian tails; [F14]-[F15] therefore identify the improper integral with the product of the one-dimensional limits. Multiplying the factors gives $t^{-n/2}e^{-\pi|\xi|^2/t}$. [F5, F8, F9, F14, F15, step 2.1, step 6.1, algebra] ∎
