---
id: "ex-independent-sums-via-characteristic-functions"
kind: "example"
title: "Independent sums via characteristic functions"
deps: ["lem-characteristic-functions-under-affine-maps-and-independent-sums", "thm-uniqueness-of-a-law-from-its-characteristic-function", "def-axiom-of-choice", "lem-binomial-theorem-over-complex-numbers", "lem-complex-exponential-series-converges-everywhere", "thm-complex-exponential-addition-and-real-extension", "lem-normal-density-has-total-mass-one", "def-standard-normal-and-normal-laws", "thm-dominated-convergence", "thm-integration-by-parts", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-ftc-second-part", "thm-derivative-of-exponential", "thm-sine-and-cosine-derivatives", "thm-chain-rule", "cor-zero-derivative-implies-constant", "thm-monotone-convergence-for-the-integral", "thm-integration-against-a-density", "lem-moments-give-derivatives-of-the-characteristic-function", "thm-nonnegative-weighted-sums-of-measures", "prop-dirac-measure-is-a-probability-measure", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-algebra-of-derivatives"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Example

Assume AC. A sum of $n\ge0$ mutually independent Bernoulli$(p)$ variables, $0\le p\le1$, has Binomial$(n,p)$ law. Independent Poisson$(\lambda)$ and Poisson$(\eta)$ variables, $\lambda,\eta\ge0$, sum to Poisson$(\lambda+\eta)$. A finite independent family with laws $N(m_j,\sigma_j^2)$, $\sigma_j\ge0$, has sum law $N(\sum_jm_j,\sum_j\sigma_j^2)$. Empty sums are zero.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Mutual independence gives the product rule, and affine maps give phase and frequency scaling. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F2] Under AC equal characteristic functions give equal laws. [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F3] AC covers uniqueness and normal normalization/integration. [[def-axiom-of-choice]].

[F4] The finite binomial theorem evaluates discrete transforms. [[lem-binomial-theorem-over-complex-numbers]].

[F5] The complex exponential series is absolutely convergent. [[lem-complex-exponential-series-converges-everywhere]].

[F6] Exponential multiplication adds the arguments. [[thm-complex-exponential-addition-and-real-extension]].

[F7] The standard normal density has mass one under AC. [[lem-normal-density-has-total-mass-one]].

[F8] A general normal law is an affine image of the standard normal. [[def-standard-normal-and-normal-laws]].

[F9] Dominated sequences have convergent integrals. [[thm-dominated-convergence]].

[F10] Compact integration by parts applies with integrable derivatives. [[thm-integration-by-parts]].

[F11] Countable choice supplies the compact integral bridge. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F12] A primitive evaluates the integral of its integrable derivative. [[thm-ftc-second-part]].

[F13] Exponential differentiates to itself. [[thm-derivative-of-exponential]].

[F14] For real arguments, $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$. [[thm-sine-and-cosine-derivatives]].

[F15] Differentiation of a composition uses the product of derivatives. [[thm-chain-rule]].

[F16] Zero real derivative on the real interval implies constancy. [[cor-zero-derivative-implies-constant]].

[F17] Nonnegative truncations recover a full integral. [[thm-monotone-convergence-for-the-integral]].

[F18] For nonnegative measurable test functions, integration against a density is integration of the product. [[thm-integration-against-a-density]].

[F19] Finite first absolute moment gives the first transform derivative. [[lem-moments-give-derivatives-of-the-characteristic-function]].

[F20] Nonnegative weighted sums construct the discrete laws. [[thm-nonnegative-weighted-sums-of-measures]].

[F21] Dirac masses are probability measures. [[prop-dirac-measure-is-a-probability-measure]].

[F22] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F23] Real derivatives obey the sum, scalar-multiple and product rules. [[thm-algebra-of-derivatives]].

## Verification

**Proof technique:** direct.

1.1 The Bernoulli transform is $1-p+pe^{it}$. Binomial weights $\binom nkp^k(1-p)^{n-k}$ are nonnegative and sum to one by the binomial theorem; they define a weighted Dirac probability, and the same finite expansion gives transform $(1-p+pe^{it})^n$. Here every zeroth power means the empty product one, including parameter endpoints. The product rule for the given independent variables yields exactly this transform for their sum, so uniqueness gives its binomial law. [F1, F2, F4, F20, F21]

1.2 By [F22], $|e^{itx}|=1$ for real $t,x$. For $a\ge0$, the weights $e^{-a}a^k/k!$ sum to $e^{-a}e^a=1$ and define a probability. Truncating its exponential integrand to the integers $0,\ldots,N$ gives bounded functions of modulus at most one converging almost everywhere, so DCT identifies the transform with the absolutely convergent series $$e^{-a}\sum_{k\ge0}\frac{(ae^{it})^k}{k!}=\exp(a(e^{it}-1)).$$ Multiplying the transforms at a=lambda and a=eta gives $\exp((\lambda+\eta)(e^{it}-1))$, the transform of the constructed Poisson$(\lambda+\eta)$ law. Independence and uniqueness establish the claim, also when either parameter is zero. [F1, F2, F5, F6, F9, F20, F21, F22]

1.3 For the normal calculation set $g(x)=e^{-x^2/2}/\sqrt{2\pi}$, which has mass one. Its derivative is $-xg(x)$. On each half of $[-R,R]$, FTC gives $\int_{-R}^R|x|g(x)\,dx=2(1-e^{-R^2/2})/\sqrt{2\pi}$. The bridge and monotone convergence prove the first absolute moment finite. If a complex test $h=u+iv$ satisfies $\int |h|g\,dx<\infty$, apply [F18] to the four nonnegative functions $u^+,u^-,v^+,v^-$ and reassemble the finite integrals componentwise; hence $\int h\,d(g\,dx)=\int hg\,dx$. Applying this first to $h(x)=e^{itx}$ and then to $h(x)=ix e^{itx}$, whose absolute values are $1$ and $|x|$, the moments lemma gives $\varphi'(t)=\int ix e^{itx}g(x)\,dx$. For fixed real $t$, [F22] writes $e^{itx}=\cos(tx)+i\sin(tx)$; [F14, F15, F23] therefore give $(d/dx)e^{itx}=-t\sin(tx)+it\cos(tx)=it e^{itx}$, also for $t=0$. Compact integration by parts in both real components gives $$\int_{-R}^R ix e^{itx}g(x)\,dx=-i[e^{itx}g(x)]_{-R}^R-t\int_{-R}^R e^{itx}g(x)\,dx.$$ Both differentiated functions have continuous derivatives on the compact interval. The boundary is bounded by $2g(R)\to0$, while $|x|g$ and g dominate the integrands; DCT yields $\varphi'=-t\varphi$. The real and imaginary derivatives of $e^{t^2/2}\varphi(t)$ are therefore zero by the product and chain rules, so both components are constant. Since $\varphi(0)=1$, $\varphi(t)=e^{-t^2/2}$. [F7, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, F19, F22, F23]

2.1 The normal definition and affine identity now give transform $e^{im_jt-\sigma_j^2t^2/2}$ for each input. Its product is $\exp(it\sum_jm_j-t^2\sum_j\sigma_j^2/2)$, exactly the transform of $N(\sum_jm_j,\sum_j\sigma_j^2)$; the nonnegative square root of the variance sum is the scale in that definition. Uniqueness proves the result. If all variances vanish, each input is constant and the result is the corresponding Dirac law; empty sums give $\delta_0$, and one-term sums return the original law. Bernoulli p=0 and p=1 similarly give deterministic zero and n. AC is inherited from Fourier uniqueness and from normal normalization and the compact integral bridge; no companion example is a supplier. [step 1.1, step 1.2, step 1.3, F1, F2, F3, F6, F8] ∎
