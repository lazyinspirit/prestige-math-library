---
id: lem-uniform-tail-control-for-dominated-improper-multiple-integrals
kind: lemma
title: "An integrable dominator gives uniform tail control on every compact parameter set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-parameter-dependent-improper-multiple-integral, thm-open-subsets-of-rn-admit-jordan-exhaustions, thm-comparison-test-for-improper-multiple-integrals, thm-nonnegative-improper-multiple-integral-by-exhaustion, thm-absolute-improper-multiple-integral-by-exhaustion, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: true
short: "Dominated uniform tail control"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Functions Defined by Improper Integrals, §7"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_IMPROPER_FUNCTIONS.PDF"
pipeline_run: null
---

## Statement

An integrable dominator gives one compact Jordan core outside which every dominated slice has uniformly small integral.

Precisely, let $D\subseteq\mathbb R^n$ be open, let $I\subseteq\mathbb R$ be an interval, and let $f:D\times I\to\mathbb R$ have locally Riemann-integrable slices $f_t$. Let $C\subseteq I$ be compact and suppose $|f(x,t)|\le g(x)$ for $x\in D$ and $t\in C$, where $g\ge0$ is locally Riemann integrable and $\int_Dg<+\infty$. Then every $f_t$ with $t\in C$, and every difference $f_t-f_s$, is absolutely improperly integrable. For every $\varepsilon>0$ there is a compact Jordan $K\subseteq D$ such that for every $s,t\in C$,

$$\left|\int_Df_t-\int_Kf_t\right|<\varepsilon,\qquad \left|\int_D(f_t-f_s)-\int_K(f_t-f_s)\right|<2\varepsilon.$$

## Facts & Assumptions

**Given:** The functions, compact parameter set, dominator, and $\varepsilon>0$ of the Statement.

[L1] Every compact Jordan exhaustion computes the nonnegative improper integral, independently of the exhaustion ([[thm-nonnegative-improper-multiple-integral-by-exhaustion]]).

[L2] For locally integrable $0\le u\le v$, one has $\int_Du\le\int_Dv$; if $|u|\le v$ and $\int_Dv<+\infty$, then $u$ is absolutely improperly integrable ([[thm-comparison-test-for-improper-multiple-integrals]]).

[L3] Proper multidimensional integrals are linear, monotone, and satisfy $|\int u|\le\int|u|$ ([[thm-multidimensional-integral-properties]]).

[L4] Every open subset of $\mathbb R^n$ has a compact Jordan exhaustion ([[thm-open-subsets-of-rn-admit-jordan-exhaustions]]).

[L5] For an absolutely improperly integrable function, proper integrals along every compact Jordan exhaustion converge to its improper integral ([[thm-absolute-improper-multiple-integral-by-exhaustion]]).

## Proof

**Proof technique:** direct.

1.1 Choose a compact Jordan exhaustion $(K_j)$ by [L4]. Then [L1] gives $\int_{K_j}g\to\int_Dg<+\infty$, so choose $K=K_j$ with $0\le\int_Dg-\int_Kg<\varepsilon$. [L1, L4, choose]

2.1 For every $t\in C$, [L2] first makes $f_t$ absolutely improperly integrable. For every later exhaustion member $K_i\supseteq K$, [L3] applied to the zero extensions gives $|\int_{K_i}f_t-\int_Kf_t|\le\int_{K_i}g-\int_Kg$. Passing to the exhaustion limits by [L1] and [L5] gives $|\int_Df_t-\int_Kf_t|\le\int_Dg-\int_Kg<\varepsilon$. [step 1.1, L1, L2, L3, L5]

3.1 Since $|f_t-f_s|\le|f_t|+|f_s|\le2g$, [L2] makes every difference absolutely improperly integrable, and the same [L1], [L3], and [L5] argument gives the second estimate with $2\varepsilon$, uniformly for $s,t\in C$. [step 2.1, L1, L2, L3, L5, algebra] ∎
