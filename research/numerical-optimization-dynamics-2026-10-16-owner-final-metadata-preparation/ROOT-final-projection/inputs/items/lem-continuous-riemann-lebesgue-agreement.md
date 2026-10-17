---
id: lem-continuous-riemann-lebesgue-agreement
kind: lemma
title: Riemann and Lebesgue integrals agree for continuous data on [0,1]
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-continuous-implies-integrable
  - thm-heine-cantor-r
  - def-darboux-integral
  - def-darboux-sums
  - def-partition-and-refinement
  - def-continuity-real
  - def-borel-sigma-algebra
  - def-interval
  - def-integral-of-a-nonnegative-simple-function
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-reals-ordered-field
  - def-countable-choice
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: John K. Hunter, Measure Theory Notes, §4.8, Theorem 4.28
      url: https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_old.pdf
---

## Statement

Assume Countable Choice. Let $g:[0,1]\to\mathbb R$ be continuous. Its Riemann integral and its Lebesgue integral with respect to Lebesgue measure on $[0,1]$ both exist and are equal.

## Facts & Assumptions

**Given:** A continuous real function $g$ on the compact interval $[0,1]$.

[F1] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is bounded and Riemann integrable; its Riemann integral lies between every lower and upper Darboux sum.

[F2] [[thm-heine-cantor-r]]: a continuous function on the compact interval is uniformly continuous.

[F3] [[def-partition-and-refinement]], [[def-darboux-sums]], and [[def-darboux-integral]]: for a partition, the oscillation sum is the upper sum minus the lower sum, and an integrable function's integral lies between those sums; every tagged sum lies between them.

[F4] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: under Countable Choice, every interval cell of length $1/N$ in the uniform partition has Lebesgue measure $1/N$; a finite endpoint has measure zero.

[F5] [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], and [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: a finite real simple function is Lebesgue integrable and its integral is the finite sum of its values times the measures of its level sets; finite sums and differences of integrable functions integrate linearly.

[F6] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]: if $u$ is Lebesgue measurable and $|u|\le\varepsilon\mathbf1_{[0,1]}$, then $u$ is integrable and $|\int u\,d\lambda|\le\varepsilon$.

[F7] [[def-borel-sigma-algebra]] and [[def-continuity-real]]: preimages of open subsets of $\mathbb R$ under $g$ are relatively open in $[0,1]$, so preimages of all Borel sets are relative Borel and $g$ is Borel measurable.

[F8] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: sums and differences of measurable real-valued functions are measurable.

[F9] [[def-borel-sigma-algebra]] and [[def-interval]]: relative closed intervals and singletons in $[0,1]$ are Borel; each half-open cell $[a,b)$ is $[a,b]\setminus\{b\}$ and hence is Borel.

[A1] $g$ is continuous on $[0,1]$.

[A2] Countable Choice is assumed only for the Lebesgue interval-measure formula supplied in [F4]; the finite-partition comparison below uses no further choice principle.

## Proof

1.1 By [F1], $g$ is bounded and Riemann integrable. By [F7] it is Borel measurable, hence Lebesgue measurable; boundedness together with $\lambda([0,1])=1$ from [F4] and [F6] makes $g$ Lebesgue integrable. [A1, A2, F1, F4, F6, F7]

1.2 Fix $\varepsilon>0$. By [F2] choose $\delta>0$ such that $|g(x)-g(y)|<\varepsilon$ whenever $x,y\in[0,1]$ and $|x-y|<\delta$. Choose an integer $N\ge1$ with $1/N<\delta$ and let $I_k=[k/N,(k+1)/N)$ for $k<N-1$ and $I_{N-1}=[(N-1)/N,1]$. These are Borel cells by [F9], and their finite-valued function $\phi_N(x)=g(k/N)$ on $I_k$ is a Borel simple function. Thus $g-\phi_N$ is Borel measurable by [F8], and $|g(x)-\phi_N(x)|<\varepsilon$ on each cell. [A1, F2, F7, F8, F9, choose]

2.1 The cells in step 1.2 form a measurable partition and have measure $1/N$ by [F4] under [A2]. Therefore [F5] gives $\int\phi_N\,d\lambda=S_N$, where $S_N=N^{-1}\sum_{k=0}^{N-1}g(k/N)$ is the left tagged sum for the same uniform partition. [A2, step 1.2, F4, F5, algebra]

3.1 The measurable difference in step 1.2 is bounded by $\varepsilon$, so [F6] gives $|\int g\,d\lambda-S_N|=|\int(g-\phi_N)\,d\lambda|\le\varepsilon$. For each closed partition cell $[k/N,(k+1)/N]$, its infimum is at most the left endpoint value $g(k/N)$ and its supremum is at least that value. Multiplying these termwise inequalities by $1/N$ and summing places the left tagged sum $S_N$ between the lower and upper Darboux sums. Each cell has oscillation at most $\varepsilon$, so their total difference is at most $\varepsilon\sum_k1/N=\varepsilon$. By [F3], the Riemann integral lies between the same Darboux sums, hence $|\int_0^1g(x)\,dx-S_N|\le\varepsilon$. [step 1.2, step 2.1, F3, F4, F5, F6]

4.1 The triangle inequality applied to step 3.1 yields $|\int g\,d\lambda-\int_0^1g(x)\,dx|\le2\varepsilon$. Since $\varepsilon>0$ was arbitrary, the two real integrals are equal. The construction chooses only one finite partition for each $\varepsilon$; its only choice-axiom premise is the Countable-Choice-dependent interval-measure formula in [F4]. [A2, F4, step 3.1, algebra] ∎
## Remarks

The proof uses explicit uniform partitions and avoids the stronger general Riemann-to-Lebesgue equality theorem. Its dependency on Countable Choice is stated: the interval-measure formula comes from [[thm-lebesgue-measure-of-a-box-of-every-kind]].
