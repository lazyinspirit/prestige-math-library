---
id: thm-continuity-of-dominated-parameter-dependent-improper-integrals
kind: theorem
title: "Locally dominated parameter-dependent improper multiple integrals are continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-parameter-dependent-improper-multiple-integral, lem-uniform-tail-control-for-dominated-improper-multiple-integrals, thm-comparison-test-for-improper-multiple-integrals, thm-heine-cantor-metric, thm-continuous-functions-on-compact-jordan-sets-are-integrable, thm-multidimensional-integral-properties, thm-jordan-content-and-indicator-integrability]
justified_by: []
aliases: []
landmark: true
short: "Dominated parameter continuity"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Functions Defined by Improper Integrals, Theorem 10"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_IMPROPER_FUNCTIONS.PDF"
pipeline_run: null
---

## Statement

A locally dominated parameter-dependent improper multiple integral is continuous in the parameter.

More precisely, let $f:D\times I\to\mathbb R$ be continuous and suppose it is locally dominated near each parameter in the sense of [[def-parameter-dependent-improper-multiple-integral]]. Then $F(t)=\int_Df(x,t)\,dx$ is continuous on $I$ in the relative topology.

## Facts & Assumptions

**Given:** The continuous integrand $f$, parameter interval $I$, and local domination in the Statement; fix $t_0\in I$.

[L1] If locally integrable slices $f_t$ on an open $D$ satisfy $|f_t|\le g$ on a compact parameter set, where $g\ge0$ and $\int_Dg<+\infty$, then for every $\eta>0$ one compact Jordan $K\subseteq D$ satisfies $|\int_Df_t-\int_Kf_t|<\eta$ for every such $t$ ([[lem-uniform-tail-control-for-dominated-improper-multiple-integrals]]).

[L2] A continuous map from a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L3] Proper multidimensional Riemann integrals are monotone and satisfy the absolute-value estimate ([[thm-multidimensional-integral-properties]]).

[L4] The integral of the indicator of a Jordan set equals its content ([[thm-jordan-content-and-indicator-integrability]]).

[L5] An integrable nonnegative dominator makes every locally integrable dominated slice absolutely improperly integrable ([[thm-comparison-test-for-improper-multiple-integrals]]).

[L6] Every continuous real function on a compact Jordan set is Riemann integrable there ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Proof

**Proof technique:** direct.

1.1 Choose a compact relative parameter neighborhood $C\subseteq I$ of $t_0$ and an integrable $g$ dominating $|f_t|$ there. Continuity gives local integrability and [L5] gives absolute improper integrability of the slices. Given $\varepsilon>0$, [L1] supplies a compact Jordan core $K\subseteq D$ on which both tail errors are below $\varepsilon/3$. [L1, L5, choose]

1.2 The restriction of $f$ to the compact set $K\times C$ is uniformly continuous by [L2], while [L6] supplies all proper core integrals. Hence, for $t\in C$ sufficiently close to $t_0$, $|f(x,t)-f(x,t_0)|<\varepsilon/(3(1+\operatorname{cont}K))$ for every $x\in K$, and [L3] with [L4] makes the compact-core integral difference smaller than $\varepsilon/3$. [L2, L3, L4, L6]

2.1 Split $F(t)-F(t_0)$ into the two tail errors and the core-integral difference. Steps 1.1 and 1.2 make its absolute value smaller than $\varepsilon$, proving relative continuity at $t_0$, including a one-sided parameter endpoint. [step 1.1, step 1.2, algebra] ∎
