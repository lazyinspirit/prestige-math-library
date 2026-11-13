---
id: prop-author-4f202e976d84-continuum-width-scaling
kind: proposition
title: Width scaling of the continuum branch threshold
domain: mathematics
status: published
origin: pipeline
deps:
  - rem-expander-prereq-continuum-branch-background
  - def-expander-prereq-empirical-phase-measures
  - math:thm-reals-ordered-field
  - math:cor-c-one-change-of-variables-for-l-one-functions
  - math:lem-derivative-algebra-and-chain-rules
  - math:def-countable-choice
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:def-l-one-of-a-measure
  - math:def-integrable-real-and-complex-functions-and-their-integrals
dependency_roles:
  rem-expander-prereq-continuum-branch-background: mathematical-premise
  def-expander-prereq-empirical-phase-measures: mathematical-premise
  math:thm-reals-ordered-field: mathematical-premise
  math:cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  math:lem-derivative-algebra-and-chain-rules: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  math:def-l-one-of-a-measure: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
formulation_deps:
  - rem-expander-prereq-continuum-branch-background
  - def-expander-prereq-empirical-phase-measures
  - math:def-countable-choice
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
argument_deps:
  - rem-expander-prereq-continuum-branch-background
  - def-expander-prereq-empirical-phase-measures
  - math:thm-reals-ordered-field
  - math:cor-c-one-change-of-variables-for-l-one-functions
  - math:lem-derivative-algebra-and-chain-rules
  - math:def-countable-choice
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:def-l-one-of-a-measure
  - math:def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
---

## Statement

Assume the Axiom of Countable Choice. Let $g_0$ be an even unimodal probability density on $\mathbb R$ with respect to Lebesgue measure $\lambda$, smooth near zero, with $g_0(0)>0$ and $g_0''(0)<0$, and let $\sigma>0$. For the scale family $g_\sigma(\omega)=\sigma^{-1}g_0(\omega/\sigma)$, in the stationary mean-field self-consistency calculation with all-to-all sinusoidal coupling $K/n$, the threshold is $K_c(\sigma)=2\sigma/(\pi g_0(0))$. At fixed $K>0$, the local supercritical side $K>K_c(\sigma)$ is equivalently $\sigma<\pi K g_0(0)/2$. The local positive-branch conclusion retains the stationary locked and drifting populations in a rotating frame and applies only sufficiently close to the threshold.

## Statement references

[[math:def-countable-choice]]

[[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[def-expander-prereq-empirical-phase-measures]]

[[rem-expander-prereq-continuum-branch-background]]

## Facts & Assumptions

[F1] For an even unimodal density $g$, smooth near zero with $g(0)>0$ and $g''(0)<0$, the stationary mean-field self-consistency threshold is $2/(\pi g(0))$, and the nondegenerate positive branch is locally on its supercritical side. This is the all-to-all sinusoidal model with coupling $K/n$ and stationary locked and drifting populations in a rotating frame ([[rem-expander-prereq-continuum-branch-background]]).

[F2] A probability density is nonnegative, measurable and integrates to one with respect to its reference measure; here that measure is Lebesgue measure $\lambda$ on the real line. The cited density definition also specifies evenness and unimodality ([[def-expander-prereq-empirical-phase-measures]], [[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F3] The real numbers form an ordered field, so multiplication or division of an inequality by a positive real preserves its direction ([[math:thm-reals-ordered-field]]).

[F4] Under countable choice, for a $C^1$ diffeomorphism $T:\mathbb R\to\mathbb R$, any $f\in L^1(\lambda)$ satisfies $\int_{\mathbb R} f(y)\,d\lambda(y)=\int_{\mathbb R} f(T(x))|T'(x)|\,d\lambda(x)$, with an integrable transformed function. This is the one-dimensional case with $U=V=\mathbb R$ ([[math:cor-c-one-change-of-variables-for-l-one-functions|change of variables for integrable functions]], [[math:def-l-one-of-a-measure]], [[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F5] Scalar multiplication and composition obey the product and chain rules for differentiation; differentiable functions are continuous ([[math:lem-derivative-algebra-and-chain-rules]]).

[F6] Countable choice asserts that a sequence of nonempty sets has a choice function. It is assumed here to meet the hypothesis of [F4] ([[math:def-countable-choice]]).

[F7] The class $L^1(\lambda)$ consists of integrable function representatives. For a measurable real-valued $f$, integrability means $\int |f|\,d\lambda<\infty$ ([[math:def-l-one-of-a-measure]], [[math:def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Given:** Countable choice, a density $g_0$, and positive $\sigma,K$ as in the statement, in the stationary self-consistency setting of [F1].

**Goal:** Verify the scaled density hypotheses, compute its threshold, and translate the supercritical inequality.

1.1 By [F2], $g_0$ is nonnegative and measurable. Even unimodality gives $g_0(\omega)\leq g_0(0)<\infty$ for every $\omega$, and $\int_{\mathbb R}g_0\,d\lambda=1$. Thus $|g_0|=g_0$ has finite integral, so $g_0\in L^1(\lambda)$ by [F7]. Apply [F4] with $U=V=\mathbb R$, $f=g_0$ and $T(\omega)=\omega/\sigma$. This map is bijective with inverse $u\mapsto\sigma u$; both maps are continuously differentiable by [F5], and $|T'|=1/\sigma$ by positivity of $\sigma$. With countable choice as in [F6], [F4] shows that $g_\sigma$ is integrable and $\int_{\mathbb R}g_\sigma(\omega)\,d\lambda(\omega)=\int_{\mathbb R}g_0(u)\,d\lambda(u)=1$. [F2, F3, F4, F5, F6, F7, given]

2.1 Positive rescaling preserves evenness, nonnegativity and monotonicity on the positive half-line. Explicitly, $g_\sigma(-\omega)=g_\sigma(\omega)$ and $0\leq x\leq y$ implies $g_\sigma(x)\geq g_\sigma(y)$ by [F2] and [F3]. Applying [F5] twice gives $g_\sigma'(\omega)=\sigma^{-2}g_0'(\omega/\sigma)$ and $g_\sigma''(\omega)=\sigma^{-3}g_0''(\omega/\sigma)$ near zero. The same rules preserve smoothness near zero. Thus $g_\sigma(0)=g_0(0)/\sigma>0$ and $g_\sigma''(0)=g_0''(0)/\sigma^3<0$. Together with step 1.1, these verify the density hypotheses of [F1]. [F1, F2, F3, F5, step 1.1, given]

3.1 By [F1] and step 2.1, $K_c(\sigma)=2/(\pi g_\sigma(0))=2\sigma/(\pi g_0(0))$. Since $\pi g_0(0)>0$, [F3] gives $K>K_c(\sigma)$ exactly when $\sigma<\pi K g_0(0)/2$. The local positive-branch conclusion and the stationary-population qualifications are inherited from [F1]. [F1, F3, step 2.1, algebra] ∎
