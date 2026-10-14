---
id: lem-binomial-support-count-bound
kind: lemma
title: "A binomial support-count bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-binomial-coefficient
  - thm-binomial-closed-formula
  - def-factorial-and-falling-factorial
  - def-finite-sum
  - lem-finite-sum-laws
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - thm-ftc-second-part
  - thm-monotonicity-of-the-integral
  - thm-continuous-implies-integrable
  - lem-integral-elementary-bounds
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - def-integer-power
  - lem-power-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Lemma 2.7"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Statement

For $d,m\in\mathbb N$ with $1\le m\le d$,

$$\binom{d}{m}\le\left(\frac{ed}{m}\right)^m.$$

Here $\binom{d}{m}$ is the number of $m$-element subsets of a $d$-element set,
$m!$ is the factorial, $e=\exp(1)$, and integer powers have the convention of
[[def-integer-power]].

## Facts & Assumptions

**Given:** Integers $d,m$ with $1\le m\le d$.

[F1] For $m\le d$, $\binom{d}{m}m!(d-m)!=d!$, equivalently $\binom{d}{m}=d^{\underline m}/m!$, and $d^{\underline m}=d(d-1)\cdots(d-m+1)$ ([[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]]).

[F2] $m!=\prod_{j=1}^m j>0$; the real logarithm is continuous and strictly increasing, and obeys $\log(xy)=\log x+\log y$ for positive $x,y$; and $\log e=1$ ([[def-factorial-and-falling-factorial]], [[thm-natural-logarithm-laws]], [[def-natural-logarithm]], [[def-real-exponential-function-and-e]]).

[F3] $\log x=\int_1^x dt/t$ for $x>0$, $\log'(x)=1/x$, and the fundamental theorem of calculus applies to continuous integrands ([[thm-logarithm-derivative-and-integral]], [[thm-ftc-second-part]]).

[F4] Finite sums obey their recursive product convention ([[def-finite-sum]], [[lem-finite-sum-laws]]), and the Riemann integral preserves pointwise inequalities between integrable functions ([[thm-monotonicity-of-the-integral]]). Continuous functions and constant functions on compact intervals are integrable ([[thm-continuous-implies-integrable]], [[lem-integral-elementary-bounds]]).

[F5] The product rule for derivatives applies to $t\mapsto t\log t-t$ ([[thm-algebra-of-derivatives]]).

## Proof

1.1 By [F1], $\binom{d}{m}=d^{\underline m}/m!$. Every factor in $d^{\underline m}=\prod_{j=0}^{m-1}(d-j)$ lies between $0$ and $d$, so $d^{\underline m}\le d^m$; since $m!>0$ by [F2], $\binom{d}{m}\le d^m/m!$. [F1, F2, algebra]

1.2 If $m=1$, then $\log(m!)=0\ge-1=m\log m-m$ by [F2]. If $m\ge2$, monotonicity of $\log$ in [F2] gives $\log t\le\log(j+1)$ on each interval $[j,j+1]$ for $1\le j<m$. The logarithm and each comparison constant are integrable there by [F2, F4], so monotonicity of the integral gives $\int_1^m\log t\,dt\le\sum_{j=2}^{m}\log j=\log(m!)$. The antiderivative $t\log t-t$ has derivative $\log t$ by [F3, F5], so [F3] evaluates the integral as $m\log m-m+1$. Therefore $\log(m!)\ge m\log m-m+1\ge m\log m-m$. [F2, F3, F4, F5, algebra]

2.1 By [F2], $\log((m/e)^m)=m(\log m-\log e)=m\log m-m$; the power identity follows by induction from the logarithm product law. Step 1.2 and monotonicity of $\log$ therefore imply $(m/e)^m\le m!$. Combining this with step 1.1 gives $\binom{d}{m}\le d^m(m/e)^{-m}=(ed/m)^m$. [F2, step 1.1, step 1.2, algebra] ∎
