---
id: lem-integrable-signed-function-integration-against-density
kind: lemma
title: "Bounded signed integrals obey the density formula"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-measure-with-density
  - thm-integration-against-a-density
  - def-probability-measure
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §§2.2–2.3, PDF pp. 49–54"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $\mu$ be a positive measure, let $p:X\to[0,\infty)$ be finite-valued
and measurable, and suppose $P(A)=\int_Ap\,d\mu$ is a probability measure.
If $f:X\to\mathbb R$ is measurable and $|f|\le M$ for some finite
$M\ge0$, then $f$ is integrable under $P$, $fp$ is integrable under $\mu$,
and
$$\int_X f\,dP=\int_X fp\,d\mu.$$

## Facts & Assumptions

**Given:** A positive measure $\mu$, a finite nonnegative measurable density
$p$, the probability measure $P=p\,d\mu$, and a measurable real function
$f$ with $|f|\le M<\infty$.

[F1] [[def-measure-with-density]]: $P(A)=\int_Ap\,d\mu$ for every
measurable $A$.

[F2] [[thm-integration-against-a-density]]: for nonnegative measurable $g$,
$\int g\,dP=\int gp\,d\mu$.

[F3] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]:
the positive and negative parts $f^+,f^-$ of a real measurable $f$ are
measurable.

[F4] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: the
product of finite real measurable functions is measurable.

[F5] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the
nonnegative integral is monotone and homogeneous for nonnegative scalars,
with the integral of the zero function equal to zero.

[F6] [[def-integrable-real-and-complex-functions-and-their-integrals]]:
$f$ is integrable when $\int|f|$ is finite, and its integral is
$\int f^+-\int f^-$. 

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: integrable
functions have finite linear integrals.

[F8] [[def-probability-measure]]: $P(X)=1$.

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F8], $\int p\,d\mu=P(X)=1$. The functions $f^+,f^-$ are measurable by [F3] and satisfy $0\le f^+,f^-\le M$. Products $f^+p$ and $f^-p$ are measurable by [F4]. [F1, F3, F4, F8, given]

2.1 Monotonicity [F5], [F1], and [F8] give $\int f^\pm\,dP\le M P(X)=M$ and $\int f^\pm p\,d\mu\le M\int p\,d\mu=M$. Hence $f^+,f^-$ are integrable under $P$ and $f^+p,f^-p$ are integrable under $\mu$ by [F6]. [F1, F5, F6, F8, step 1.1]

2.2 Apply [F2] separately to the nonnegative measurable functions $f^+$ and $f^-$. It gives $\int f^+\,dP=\int f^+p\,d\mu$ and $\int f^-\,dP=\int f^-p\,d\mu$. [F2, step 1.1]

3.1 Subtract the second equality in step 2.2 from the first. By [F6] and [F7], both sides are the integrals of the corresponding signed functions, so $\int f\,dP=\int fp\,d\mu$. [F6, F7, step 2.1, step 2.2, algebra] ∎