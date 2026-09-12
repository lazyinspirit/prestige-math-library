---
id: lem-second-order-characteristic-function-expansion
kind: lemma
title: Second-order characteristic-function expansion
deps: ["cor-taylor-remainder-bound", "thm-sine-and-cosine-derivatives", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-dominated-convergence", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-characteristic-function-of-a-real-random-variable", "def-moments-variance-and-covariance"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Aldous and Chewi, Probability Theory notes, Lemmas 5.4-5.5
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
    - title: Varadhan, Probability Theory, Chapter 3, Section 3.6
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

If $\mathbb EX=0$ and $\mathbb EX^2=\sigma^2<\infty$, then $\varphi_X(t)=1-\sigma^2t^2/2+o(t^2)$ as $t\to0$. No third moment or choice axiom is assumed. The same scalar estimates give $0\le1-\cos u\le u^2/2$ for every real u. More precisely, for $r(u)=e^{iu}-1-iu+u^2/2$, $$|r(u)|\le \min(|u|^3/3,4u^2),\qquad |e^{iu}-1-iu|\le u^2.$$

## Facts & Assumptions

[F1] Real Taylor remainders are bounded by the uniform next derivative bound. [[cor-taylor-remainder-bound]].

[F2] Sine and cosine have derivatives of all orders bounded by one. [[thm-sine-and-cosine-derivatives]].

[F3] Euler form has real cosine and imaginary sine components. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F4] DCT applies to the prescribed nonnegative majorant sequence below. [[thm-dominated-convergence]].

[F5] Integrable real and complex linear combinations commute with integration. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F6] The characteristic function is the expectation of the unit exponential. [[def-characteristic-function-of-a-real-random-variable]].

## Proof

**Given:** If $\mathbb EX=0$ and $\mathbb EX^2=\sigma^2<\infty$, then $\varphi_X(t)=1-\sigma^2t^2/2+o(t^2)$ as $t\to0$. No third moment or choice axiom is assumed. The same scalar estimates give $0\le1-\cos u\le u^2/2$ for every real u. More precisely, for $r(u)=e^{iu}-1-iu+u^2/2$, $$|r(u)|\le \min(|u|^3/3,4u^2),\qquad |e^{iu}-1-iu|\le u^2.$$

1.1 Taylor at zero through degree two for cosine and sine, with third derivatives bounded by one, gives $|\cos u-1+u^2/2|\le|u|^3/6$ and $|\sin u-u|\le|u|^3/6$. Euler form and the triangle inequality give $|r(u)|\le|u|^3/3$. Taylor through degree one gives $|\cos u-1|\le u^2/2$ and $|\sin u-u|\le u^2/2$, hence $|e^{iu}-1-iu|\le u^2$. Adding $u^2/2$ bounds $|r(u)|\le3u^2/2\le4u^2$ for all real u. At u=0 all remainders vanish. [F1, F2, F3]

2.1 For $0<|t|\le1/n$, the first step gives $|r(tX)|/t^2\le X^2\min(|X|/(3n),4)$. This is a measurable nonnegative sequence tending pointwise to zero, bounded by the integrable $4X^2$. DCT therefore makes its expectations tend to zero. The bound is uniform over all such t, so $\mathbb E r(tX)=o(t^2)$ as a genuine two-sided real limit, without choosing a sequence of frequencies or requiring $\mathbb E|X|^3<\infty$. Also $|X|\le1+X^2$ gives integrability of the linear term. [step 1.1, F4]

3.1 By linearity, $\varphi_X(t)=1+it\mathbb EX-t^2\mathbb EX^2/2+\mathbb E r(tX)$. Insert the stated moments and the preceding remainder limit. If $\sigma=0$, the same majorants have zero integral, so the remainder vanishes and the formula still holds. At t=0 the defining expectation is one. Every limiting integrand was explicitly specified; no choice principle enters. [step 1.1, step 2.1, F5, F6] ∎

