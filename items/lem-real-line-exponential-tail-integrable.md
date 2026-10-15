---
id: lem-real-line-exponential-tail-integrable
kind: lemma
title: The real-line exponential tail is Lebesgue integrable
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-countable-choice
  - def-canonical-natural
  - def-integral-over-a-measurable-set
  - def-natural-numbers
  - def-nonnegative-lebesgue-integral
  - cor-continuous-functions-are-borel-measurable
  - cor-exponential-reciprocal-and-positivity
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-geometric-series
  - thm-induction-principle
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-monotone-convergence-for-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integer-power
  - thm-borel-sets-are-lebesgue-measurable
  - thm-of-archimedean
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "Countable Choice is used through the continuous-to-Borel and Lebesgue box-measure suppliers. The tail comparison and geometric-series argument use no stronger choice principle."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "OpenStax, Calculus Volume 2, §3.7 Improper Integrals, Example 3.55"
      url: "https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals"
---

## Statement

Assume Countable Choice and let $f(x)=\exp(-|x|)$ on $\mathbb R$. Then $f$ is nonnegative and Lebesgue measurable, and
$$\int_{\mathbb R} f(x)\,d\lambda_1(x)<\infty.$$

## Facts & Assumptions

**Given:** Countable Choice, the natural numbers $\mathbb N$, and the function $f(x)=\exp(-|x|)$.

[A1] Countable Choice is the set-theoretic assumption used by the continuous-to-Borel and box-measure results. [[def-countable-choice]]

[F1] The exponential is continuous, positive and strictly increasing, and satisfies $\exp(-x)=1/\exp(x)$ for every real $x$. Continuous real functions on $\mathbb R$ are Borel measurable under Countable Choice. [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[cor-continuous-functions-are-borel-measurable]]

[F2] Every half-open interval $[a,b)$ is Lebesgue measurable with measure $b-a$. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F3] The nonnegative Lebesgue integral is monotone, additive on nonnegative measurable functions, and satisfies monotone convergence. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[thm-monotone-convergence-for-the-integral]]

[F4] If $0<r<1$, then $\sum_{k=0}^{\infty}r^k=1/(1-r)<\infty$. [[thm-geometric-series]]

[F5] Arithmetic combinations of measurable real functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F6] The exponential addition formula, induction, and recursive integer-power definition give $\exp(-k)=\exp(-1)^k$ for every natural $k$. [[thm-exponential-addition-formula]], [[thm-induction-principle]], [[def-integer-power]]

[F7] The nonnegative Lebesgue integral of a nonnegative measurable function is the supremum of the integrals of its nonnegative simple minorants. [[def-nonnegative-lebesgue-integral]]

[F8] The natural numbers $\mathbb N$ start at $0$ and are closed under successor. [[def-natural-numbers]]

[F9] A natural index used as a real endpoint is read through its canonical embedding into $\mathbb R$. [[def-canonical-natural]]

[F10] For a nonnegative measurable function and a measurable set $E$, $\int_E f\,d\lambda$ means $\int f\mathbf1_E\,d\lambda$. [[def-integral-over-a-measurable-set]]

[F11] Under Countable Choice, every Borel subset of $\mathbb R$ is Lebesgue measurable. [[thm-borel-sets-are-lebesgue-measurable]]

[F12] The canonical naturals are cofinal in $\mathbb R$. [[thm-of-archimedean]]

[F13] A nonnegative simple function has the same nonnegative Lebesgue and simple integrals; in particular, $\int c\mathbf1_E\,d\lambda_1=c\lambda_1(E)$ for $c\ge0$ and measurable $E$ of finite measure. [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

## Proof

**Proof technique:** compare on a countable partition with a summable geometric envelope.

1.1 The elementary inequalities $|x|\le|x-y|+|y|$ and $|y|\le|x-y|+|x|$ give $\big||x|-|y|\big|\le|x-y|$, so $x\mapsto-|x|$ is continuous. Together with exponential continuity [F1], this makes $f$ continuous, hence Borel measurable by [F1] and Lebesgue measurable by [F11]; also $f>0$. Set $a=\exp(0)>0$. The reciprocal identity at zero gives $a=1/a$, hence $(a-1)(a+1)=0$ and $a=1$. Put $r=\exp(-1)$. Strict increase gives $0<r<\exp(0)=1$, so [F4] gives $\sum_{k=0}^{\infty}r^k=1/(1-r)<\infty$. [A1, F1, F4, F11, given, algebra]

2.1 For each $k,n\in\mathbb N$ with $n\ge1$, read as real endpoints via [F9], set $I_k=[k,k+1)$ and $J_k=[-k-1,-k)$. These intervals are pairwise disjoint and, by [F12], partition $\mathbb R$; each has measure one by [F2]. On either interval $|x|\ge k$, so monotonicity of the exponential and [F6] give $f(x)\le\exp(-k)=r^k$. For each such $n$, the union of $I_k,J_k$ over $k<n$ is $[-n,n)$, and the integral notation is that of [F10]; [F3] and [F13] yield $$\int_{[-n,n)}f\,d\lambda_1\le 2\sum_{k<n}r^k\le\frac{2}{1-r}.$$ [A1, F1, F2, F3, F4, F6, F8, F9, F10, F12, F13, step 1.1, algebra]

3.1 The measurable functions $f_n=f\mathbf1_{[-n,n)}$ increase pointwise to $f$ by [F12]; their measurability follows from [F1], [F2], and [F5]. By [F7] and [F10], their nonnegative integrals are defined, and monotone convergence [F3] gives $$\int_{\mathbb R}f\,d\lambda_1=\lim_{n\to\infty}\int_{[-n,n)}f\,d\lambda_1\le\frac{2}{1-r}<\infty.$$ This proves the claimed integrability. [F1, F2, F3, F5, F7, F10, F12, step 1.1, step 2.1, algebra] ∎
