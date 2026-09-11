---
id: "thm-measurability-of-integration-against-a-kernel"
kind: "theorem"
title: "Measurability of integration against a kernel"
deps: ["def-measure-kernel-and-probability-kernel", "thm-dynkin-pi-lambda", "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function", "thm-monotone-convergence-for-the-integral", "prop-closure-properties-of-measurable-functions-used-by-the-integral", "thm-sections-of-product-measurable-functions-are-measurable", "def-product-sigma-algebra-and-finite-product-sigma-algebras"]
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
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let K be a finite kernel from $(S,\Sigma)$ to $(T,\Tau)$, in particular a probability kernel, or a uniformly sigma-finite kernel with the specified exhaustion of the kernel definition. For every nonnegative $\Sigma\otimes\Tau$-measurable function $f:S\times T\to[0,\infty]$, the function
$$I_f(s)=\int_T f(s,t)\,K(s,dt)$$
is $\Sigma$-measurable, with infinity allowed. For a real product-measurable f, the set $D=\{s:I_{|f|}(s)<\infty\}$ is measurable, and its signed integral on D, extended by zero on $S\setminus D$, is a measurable real function. No assertion here is made for a general kernel lacking a common measurable finite-mass exhaustion.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Kernel evaluations are measurable and every section is a measure. [[def-measure-kernel-and-probability-kernel]].

[F2] A lambda-system containing a pi-system contains its generated sigma-algebra. [[thm-dynkin-pi-lambda]].

[F3] Nonnegative measurable functions have explicit increasing simple approximations. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]].

[F4] Monotone convergence applies to each section measure. [[thm-monotone-convergence-for-the-integral]].

[F5] Measurable functions are closed under defined sums, real scalars, nonnegative restriction and increasing limits. [[prop-closure-properties-of-measurable-functions-used-by-the-integral]].

[F6] Every section of a product-measurable function is measurable. [[thm-sections-of-product-measurable-functions-are-measurable]].

[F7] Measurable rectangles generate the product sigma-algebra. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]].

## Proof

**Proof technique:** direct.

1.1 First suppose K finite and write $m(s)=K(s,T)<\infty$. For a product-measurable set E, its section $E_s$ is measurable, by applying the section theorem to its indicator. Let $\mathcal D$ consist of those E for which $s\mapsto K(s,E_s)$ is measurable. It contains every rectangle $A\times B$, whose evaluation is $1_A(s)K(s,B)$, and it contains $S\times T$. If E belongs to this class, then $(E^c)_s=T\setminus E_s$ and $K(s,(E^c)_s)=m(s)-K(s,E_s)$; both terms are finite measurable real functions, so the difference is measurable. If E_j are disjoint class members, their sections are disjoint and $K(s,(\bigcup_j E_j)_s)=\sum_jK(s,(E_j)_s)$ is an increasing limit of measurable finite sums. Thus this class is a lambda-system. Rectangles form a pi-system, so Dynkin's theorem gives every product-measurable E in the class. The measurable-closure proposition can be used on S equipped with its zero measure; its conclusions concern only Sigma and do not require a preexisting source probability. [F1, F2, F5, F6, F7]

2.1 For a nonnegative simple product-measurable function $g=\sum_{j=1}^r a_j1_{E_j}$ with disjoint E_j and finite nonnegative coefficients, its section integral is $\sum_j a_jK(s,(E_j)_s)$ and is measurable by step 1.1. Choose the prescribed increasing simple approximation $g_n\uparrow f$ on the product. For every s the section theorem and monotone convergence give $I_f(s)=\lim_n I_{g_n}(s)$, so the increasing-limit closure proves measurability. No uniform bound in s was used; only the individual finite masses entered the complement calculation. [step 1.1, F3, F4, F5, F6]

3.1 Now let $(T_n)$ be the specified common exhaustion. Define $K_n(s,A)=K(s,A\cap T_n)$. For each s this is the restriction of a measure, its evaluations are measurable by the kernel hypothesis, and $K_n(s,T)=K(s,T_n)<\infty$. Apply step 2.1 to K_n. Sectionwise integration against the restriction equals integration of $f(s,\cdot)1_{T_n}$ against K(s,·): this holds for indicators by definition, for simple functions by finite sums, and for nonnegative functions by monotone convergence. Since $T_n\uparrow T$, $I_f(s)=\lim_n\int f(s,t)K_n(s,dt)$; another increasing-limit argument proves the result. If T is empty all these integrals are zero; if S is empty the assertion is vacuous. [step 2.1, F1, F3, F4, F5]

4.1 For real f its positive and negative parts and absolute value are product-measurable. The proved result makes $I_{f^+},I_{f^-},I_{|f|}$ measurable. Therefore $D=\bigcup_{n\ge1}\{I_{|f|}<n\}$ is measurable. On D both part integrals are finite since each is at most $I_{|f|}$. Define $J_+(s)=I_{f^+}(s)$ on D and zero otherwise, and define J_- similarly. Nonnegative measurable restriction makes both J_± measurable; they are finite everywhere. Their real difference is the requested signed integral on D and zero elsewhere. This never subtracts two infinities. For a zero kernel all integrals vanish and D=S, even if f is unbounded; for f=0 the same holds for every permitted kernel. All approximations and the exhaustion are specified; no AC is used. [step 2.1, step 3.1, F5] ∎
