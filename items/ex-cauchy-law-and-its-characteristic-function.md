---
id: "ex-cauchy-law-and-its-characteristic-function"
kind: "example"
title: "Cauchy law and its characteristic function"
deps: ["def-characteristic-function-of-a-real-random-variable", "cor-density-inversion-from-an-integrable-characteristic-function", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-derivative-of-exponential", "thm-sine-and-cosine-derivatives", "thm-chain-rule", "thm-principal-inverse-tangent-calculus", "thm-logarithm-derivative-and-integral", "def-principal-inverse-tangent", "def-natural-logarithm", "thm-monotone-convergence-for-the-integral", "thm-dominated-convergence", "thm-integration-against-a-density", "thm-substitution"]
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

## Example

Assume AC. The Cauchy density $c(x)=1/[\pi(1+x^2)]$ defines a Borel probability law with characteristic function $e^{-|t|}$. Its first absolute moment is infinite. In the calculation below the unit exponential density $e^{-x}1_{[0,\infty)}(x)$ has transform $1/(1-it)$, and the symmetric Laplace density $e^{-|x|}/2$ has transform $1/(1+t^2)$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Characteristic functions are componentwise exponential integrals. [[def-characteristic-function-of-a-real-random-variable]].

[F2] An integrable characteristic function gives a continuous density by inversion. [[cor-density-inversion-from-an-integrable-characteristic-function]].

[F3] Nonnegative Borel densities define measures. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F4] Compact integrals of derivatives are primitive increments. [[thm-ftc-second-part]].

[F5] Countable choice identifies compact Riemann and Lebesgue integrals. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F6] AC supplies the choice used in the bridge and inversion. [[def-axiom-of-choice]].

[F7] Real exponentials differentiate to themselves. [[thm-derivative-of-exponential]].

[F8] Trigonometric derivatives evaluate the damped complex primitive. [[thm-sine-and-cosine-derivatives]].

[F9] Composition differentiates by the chain rule. [[thm-chain-rule]].

[F10] Arctangent integrates 1/(1+x squared). [[thm-principal-inverse-tangent-calculus]].

[F11] The logarithm derivative is 1/x on positive arguments. [[thm-logarithm-derivative-and-integral]].

[F12] Arctangent is an increasing bijection onto the principal open interval. [[def-principal-inverse-tangent]].

[F13] Logarithm is the inverse of exponential. [[def-natural-logarithm]].

[F14] Positive compact truncations recover the full integral. [[thm-monotone-convergence-for-the-integral]].

[F15] Integrable domination permits passage from compact to full oscillatory integrals. [[thm-dominated-convergence]].

[F16] For nonnegative measurable test functions, density integrals are product integrals. [[thm-integration-against-a-density]].

[F17] Compact reflection substitution applies to continuous integrands. [[thm-substitution]].

## Verification

**Proof technique:** direct.

1.1 The nonnegative exponential density has integral $\lim_{R\to\infty}\int_0^R e^{-x}\,dx=\lim_R(1-e^{-R})=1$, using the compact primitive, bridge and monotone convergence. For real t the function $e^{(-1+it)x}/(-1+it)$ is a primitive of $e^{-x}(\cos(tx)+i\sin(tx))$, as direct componentwise differentiation shows; the denominator cannot vanish since its real part is -1. Therefore $$\int_0^R e^{itx}e^{-x}\,dx=\frac{e^{(-1+it)R}-1}{-1+it}\longrightarrow\frac1{1-it}.$$ The boundary modulus is $e^{-R}$ and the integrand modulus is $e^{-x}$, so DCT justifies the full oscillatory integral. Whenever density integration is used below for a bounded complex test $u+iv$, apply [F16] separately to the nonnegative functions $u^+,u^-,v^+,v^-$ and then reassemble their finite integrals componentwise as in [F1]; this gives $\int(u+iv)\,d(f\,dx)=\int(u+iv)f\,dx$ without enlarging [F16]. Reflection substitution on compact intervals and then DCT show that the reflected density has transform $1/(1+it)$. Splitting the two half-lines gives the probability density $\ell(x)=e^{-|x|}/2$ and transform $\tfrac12[(1-it)^{-1}+(1+it)^{-1}]=(1+t^2)^{-1}$. [F1, F3, F4, F5, F7, F8, F9, F14, F15, F16, F17]

2.1 The increasing arctangent has range $(-\pi/2,\pi/2)$, so its limits at the two infinities are the endpoints of that range: any smaller limiting supremum would omit values in the range, and similarly for the infimum. Consequently compact arctangent integration and monotone convergence give $\int_{\mathbb R}(1+t^2)^{-1}\,dt=\pi$. The Laplace characteristic function is therefore integrable. Density inversion supplies the continuous density $h(x)=(2\pi)^{-1}\int e^{-itx}/(1+t^2)\,dt$ for the same Laplace law. It equals $\ell$ at every point: if two continuous densities of the same measure differed at one point, their difference would have a fixed strict sign and magnitude on a small interval, contradicting equal integrals on that interval. Hence $$\frac1\pi\int_{\mathbb R}\frac{e^{itx}}{1+x^2}\,dx=2h(-t)=e^{-|t|}.$$ The preceding arctangent integral also normalizes c, and density integration identifies the left side as its characteristic function, including t=0. No first moment of this law has been used. [step 1.1, F1, F2, F3, F4, F5, F10, F12, F14, F16]

3.1 For $R>0$, logarithmic differentiation with the chain rule and the compact integral bridge give $$\int_0^R\frac{x}{\pi(1+x^2)}\,dx=\frac{\log(1+R^2)}{2\pi}.$$ This tends to infinity: log is increasing by its positive derivative, and its inverse relation implies that log of an unbounded positive argument eventually exceeds every real level. Monotone convergence and density integration imply $\int|x|c(x)\,dx=+\infty$, already from the positive half-line. The density is finite at x=0 and has total mass one; it is not a zero or point-mass law. AC is retained from density inversion and the compact integration bridge. The auxiliary Laplace density has a corner at zero, but all differentiations above were on individual half-lines and its use in inversion required continuity, not differentiability there. [F4, F5, F6, F9, F11, F13, F14, F16] ∎
