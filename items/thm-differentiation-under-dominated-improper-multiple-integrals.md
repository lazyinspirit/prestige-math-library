---
id: thm-differentiation-under-dominated-improper-multiple-integrals
kind: theorem
title: "Differentiation under an improper multiple integral under an integrable derivative bound"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-parameter-dependent-improper-multiple-integral, lem-uniform-tail-control-for-dominated-improper-multiple-integrals, thm-continuity-of-dominated-parameter-dependent-improper-integrals, thm-comparison-test-for-improper-multiple-integrals, thm-absolute-improper-multiple-integral-by-exhaustion, cor-mean-value-theorem, thm-heine-cantor-metric, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: true
short: "Dominated differentiation under the integral"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Functions Defined by Improper Integrals, Theorem 11"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_IMPROPER_FUNCTIONS.PDF"
pipeline_run: null
---

## Statement

Let $D\subseteq\mathbb R^n$ be open and $I\subseteq\mathbb R$ be an open interval. Suppose $f$ and $\partial_tf$ are continuous on $D\times I$, one slice $f_{t_*}$ is absolutely improperly integrable, and for every compact interval $C\subseteq I$ there is a nonnegative improperly integrable $g_C$ with $|\partial_tf(x,t)|\le g_C(x)$ for $x\in D$ and $t\in C$. Then every slice is absolutely improperly integrable, the function $F(t)=\int_Df(x,t)\,dx$ is continuously differentiable, and

$$F'(t)=\int_D\partial_tf(x,t)\,dx.$$

The parameter derivative may be passed through the improper multiple integral under an integrable uniform derivative bound.

## Facts & Assumptions

**Given:** The domain, interval, integrand, derivative, base slice, and dominators of the Statement; fix $t_0\in I$.

[L1] The mean value theorem gives an interior $c$ with $h(b)-h(a)=h'(c)(b-a)$ for a continuous function differentiable inside an interval ([[cor-mean-value-theorem]]).

[L2] If locally integrable slices $u_t$ satisfy $|u_t|\le g$ on a compact parameter set, where $g\ge0$ and $\int_Dg<+\infty$, then their improper-integral tails outside one compact Jordan core are uniformly small ([[lem-uniform-tail-control-for-dominated-improper-multiple-integrals]]).

[L3] If $u:D\times I\to\mathbb R$ is continuous and locally dominated near every parameter by a nonnegative improperly integrable function, then $t\mapsto\int_Du(x,t)\,dx$ is continuous in the relative topology ([[thm-continuity-of-dominated-parameter-dependent-improper-integrals]]).

[L4] If $|u|\le g$ and $g$ has finite nonnegative improper integral, then $u$ is absolutely improperly integrable ([[thm-comparison-test-for-improper-multiple-integrals]]).

[L5] A continuous map from a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L6] Proper multidimensional integrals are linear and satisfy $|\int u|\le\int|u|$ ([[thm-multidimensional-integral-properties]]).

[L7] If $u$ is absolutely improperly integrable, its proper integrals along every compact Jordan exhaustion converge to $\int_Du$ ([[thm-absolute-improper-multiple-integral-by-exhaustion]]).

## Proof

**Proof technique:** direct.

1.1 On the compact parameter interval between $t_*$ and any $t\in I$, [L1] gives $|f(x,t)-f(x,t_*)|\le|t-t_*|g_C(x)$ pointwise. Fact [L4] makes the difference absolutely improperly integrable. Proper linearity in [L6] along one exhaustion and convergence in [L7] show that a sum of two absolutely improperly integrable functions is again absolutely improperly integrable, so $f_t=f_{t_*}+(f_t-f_{t_*})$ is absolutely improperly integrable. [L1, L4, L6, L7, algebra]

1.2 For nonzero $h$ with $t_0+h\in I$, [L1] bounds the difference quotient $q_h(x):=(f(x,t_0+h)-f(x,t_0))/h$ by one integrable dominator. On a compact Jordan core, [L5] and [L1] make $q_h\to\partial_tf(\cdot,t_0)$ uniformly as $h\to0$. [L1, L2, L5]

2.1 Use [L2] to make the tails of both $q_h$ and $\partial_tf(\cdot,t_0)$ uniformly small, then use the uniform convergence from step 1.2 on the core and [L6]. It follows that $\int_Dq_h\to\int_D\partial_tf(x,t_0)\,dx$. On every compact member of one exhaustion, proper linearity in [L6] gives $\int q_h=(\int f_{t_0+h}-\int f_{t_0})/h$; applying [L7] to the three absolutely integrable functions passes this identity to $D$. Hence the left side is the difference quotient of $F$, proving the asserted derivative formula. [step 1.2, L2, L6, L7]

3.1 Apply [L4] to each derivative slice and [L3] to the continuous integrand $\partial_tf$, using the same local dominators, to see that the derivative integral is continuous in $t$. Thus $F$ is $C^1$ on $I$. [step 2.1, L3, L4] ∎
