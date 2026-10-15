---
id: ex-smooth-linear-functional-in-white-noise
kind: example
title: The integral functional under a product-prior white-noise BvM
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-sobolev-linear-functional-for-white-noise
  - thm-linear-functional-bvm-and-credible-coverage
  - thm-weak-nonparametric-bernstein-von-mises-for-product-priors
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Condition 1 and Theorem 3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §2.2"
      url: https://arxiv.org/pdf/1310.2484
---

## Example

Take a sufficiently regular Cohen–Daubechies–Vial wavelet basis as in [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]], with constants contained in a finite coarsest scaling space and all finer wavelets orthogonal to constants. Let $f_0=0$, use independent standard-normal product coefficients, and choose any prior scale exponent $\eta>0$ with $\sigma_l=2^{-l(\eta+1/2)}$. The functional $L_1(f)=\int_0^1f(x)dx$ has asymptotically standard-normal posterior fluctuations centered at $L_1(X^{(n)})$, and its equal-tailed posterior interval has asymptotic frequentist coverage $1-\alpha$.

## Facts & Assumptions

**Given:** The white-noise model, $f_0=0$, the selected regular CDV basis, independent standard-normal prior coefficients scaled by $2^{-l(\eta+1/2)}$, and the supplied posterior kernel in [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]].

[F1] [[def-sobolev-linear-functional-for-white-noise]]: $L_1(f)=\langle f,1\rangle_{L^2}=\int_0^1f$.

[F2] [[thm-linear-functional-bvm-and-credible-coverage]]: any nonzero $g\in H^s_2$, $s>1/2$, yields a scalar $N(0,\|g\|_2^2)$ posterior BvM limit and asymptotic $1-\alpha$ coverage for the equal-tailed interval under the product-prior theorem's hypotheses.

[F3] [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]]: the prior uses scales $2^{-l(\alpha+1/2)}$ and requires a bounded density positive near the normalized true coefficients, finite coefficient second moment, the coefficient bound, continuity at those coefficients, and countable choice for the $L^2$ prior construction.

[F4] [[def-countable-choice]]: countable choice supplies a choice function for a countable family of nonempty sets; here it is the axiom explicitly assumed for the product-prior construction.

[A1] For the selected CDV basis, constants lie in the finite coarse scaling space and every wavelet above its finite base level is orthogonal to constants.

## Verification

**Given:** The hypotheses in the Example and Facts & Assumptions, with countable choice for the $L^2$ prior construction.

1.1 The standard-normal coefficient density is bounded, continuous, strictly positive at every real value, and has finite second moment. Since $f_0=0$, every normalized true coefficient is zero; choose any $0<M<\tau$ with $\tau>0$. The coefficient bound and continuity at each normalized true coefficient required by [F3] hold, and the scale sequence has the theorem's required form with $\alpha=\eta>0$. [F3, given, algebra]

1.2 By [A1], all wavelet coefficients of $g=1$ above a fixed finite level vanish; the remaining levels have finitely many coefficients. Therefore $\sum_{l,k}a_l^{2s}|g_{lk}|^2<\infty$ for every finite $s$, in particular for some $s>1/2$. Also $\|g\|_2=1$ and its pairing is $L_1(f)=\int_0^1f$. [A1, F1, given, algebra]

2.1 Under $f_0=0$ and countable choice [F4], $\sqrt nL_1(X^{(n)})=L_1(W)$ is exactly $N(0,1)$. Applying [F2] with $g=1$ gives the scalar posterior BvM limit $N(0,1)$ and limiting coverage $1-\alpha$. [F2, F3, F4, given, algebra] ∎
