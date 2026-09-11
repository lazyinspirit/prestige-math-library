---
id: "ex-characteristic-function-of-a-gaussian-law"
kind: "example"
title: "Characteristic function of a gaussian law"
deps: ["def-characteristic-function-of-a-real-random-variable", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "lem-normal-density-has-total-mass-one", "def-standard-normal-and-normal-laws", "thm-dominated-convergence", "thm-integration-by-parts", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-derivative-of-exponential", "thm-sine-and-cosine-derivatives", "thm-chain-rule", "thm-ftc-second-part", "cor-zero-derivative-implies-constant", "thm-substitution", "thm-integration-against-a-density", "thm-monotone-convergence-for-the-integral", "lem-moments-give-derivatives-of-the-characteristic-function"]
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

Assume AC. For $m\in\mathbb R$ and $\sigma\ge0$, the law $N(m,\sigma^2)$ has characteristic function
$$\varphi(t)=\exp(imt-\sigma^2t^2/2),\qquad t\in\mathbb R,$$
including $\sigma=0$, when the law is $\delta_m$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] The general normal law is the affine pushforward of the standard law. [[def-standard-normal-and-normal-laws]].

[F2] Under AC the standard Gaussian density is a probability density. [[lem-normal-density-has-total-mass-one]].

[F3] The characteristic function is the exponential expectation. [[def-characteristic-function-of-a-real-random-variable]].

[F4] Affine maps change the transform by scaling frequency and multiplying by a phase. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F5] Dominated limits pass through integrals. [[thm-dominated-convergence]].

[F6] Integration by parts applies on compact intervals with integrable derivatives. [[thm-integration-by-parts]].

[F7] Compact Riemann integrals agree with Lebesgue integrals under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F8] AC covers Gaussian normalization and the compact integration bridge. [[def-axiom-of-choice]].

[F9] The real exponential differentiates to itself. [[thm-derivative-of-exponential]].

[F10] Sine and cosine derivatives give the derivative of exp(itx) componentwise. [[thm-sine-and-cosine-derivatives]].

[F11] The derivative of a composition is the product of derivatives. [[thm-chain-rule]].

[F12] The integral of an integrable derivative is its primitive increment. [[thm-ftc-second-part]].

[F13] A real function with zero derivative on the real interval is constant. [[cor-zero-derivative-implies-constant]].

[F14] Compact substitution permits reflecting a continuous integrand. [[thm-substitution]].

[F15] Nonnegative density integrals are integrals of products. [[thm-integration-against-a-density]].

[F16] Nonnegative truncations increasing to a function recover its integral. [[thm-monotone-convergence-for-the-integral]].

[F17] A finite first absolute moment justifies differentiating the transform. [[lem-moments-give-derivatives-of-the-characteristic-function]].

## Verification

**Proof technique:** direct.

1.1 Let $g(x)=e^{-x^2/2}/\sqrt{2\pi}$ and let $Z$ have its law on the canonical real probability space. Normalization is supplied by the Gaussian-density lemma. Exponential differentiation and the chain rule give $g'(x)=-xg(x)$. FTC, reflection substitution and the bridge yield $$\int_{-R}^R|x|g(x)\,dx=\frac{2}{\sqrt{2\pi}}(1-e^{-R^2/2})\quad(R>0).$$ Monotone convergence over positive integer R gives $\mathbb E|Z|=2/\sqrt{2\pi}<\infty$ by density integration. Apply the moments lemma at order one: $\varphi'(t)=\int ix e^{itx}g(x)\,dx$, converting real positive/negative parts of the density integral separately. [F1, F2, F3, F7, F9, F11, F12, F14, F15, F16, F17]

2.1 On $[-R,R]$ both $g$ and the real and imaginary parts of $e^{itx}$ are continuously differentiable. Integration by parts, applied componentwise, gives $$\int_{-R}^R ix e^{itx}g(x)\,dx=-i[e^{itx}g(x)]_{-R}^R-t\int_{-R}^R e^{itx}g(x)\,dx.$$ The boundary term has modulus at most $2g(R)\to0$. The left integrand is dominated by the integrable $|x|g(x)$, and the last integral by $g(x)$; DCT along integer R therefore gives $\varphi'(t)=-t\varphi(t)$ for every real t. No imaginary displacement of an integration contour is involved. [step 1.1, F5, F6, F7, F10, F11]

3.1 The real and imaginary components of $H(t)=e^{t^2/2}\varphi(t)$ are differentiable. The product and chain rules and step 2.1 give $H'(t)=e^{t^2/2}(t\varphi(t)+\varphi'(t))=0$. The zero-derivative theorem applied to each component on $\mathbb R$ makes H constant. Its value at zero is $\varphi(0)=\int g=1$, so $\varphi(t)=e^{-t^2/2}$. Finally affine scaling gives $\varphi_{m+\sigma Z}(t)=e^{imt}\varphi_Z(\sigma t)=e^{imt-\sigma^2t^2/2}$. If $\sigma=0$, the random variable is constantly m and its transform is directly $e^{imt}$, agreeing with the formula. The stated AC is inherited from normalization and the compact integration bridge (including their countable-choice prerequisites). [step 1.1, step 2.1, F1, F3, F4, F8, F9, F11, F13] ∎
