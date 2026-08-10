---
id: lem-uniform-integral-error-bound
kind: lemma
title: "Uniformly close integrable functions have integrals differing by at most the interval length times their uniform error"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-oriented-integral, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $u,v\in\mathbb{R}$, and let $f$ and $g$ be integrable between $u$ and $v$.
If $\eta\ge0$ and

$$|f(x)-g(x)|\le\eta$$

throughout the closed interval with endpoints $u$ and $v$, then

$$\left|\int_u^v f-\int_u^v g\right|\le \eta\,|v-u|.$$

## Facts & Assumptions

**Given:** Reals $u,v$, functions $f,g$ integrable between them, and a real $\eta\ge0$ with $|f-g|\le\eta$ on the interval between them.

[L1] Linear combinations of integrable functions are integrable and their integrals are the corresponding linear combinations, including for oriented limits ([[thm-linearity-of-the-integral]], [[def-oriented-integral]]).

[L2] If $a<b$, an integrable function $h$ satisfying $m\le h(x)\le M$ on $[a,b]$ has $m(b-a)\le\int_a^b h\le M(b-a)$ ([[thm-monotonicity-of-the-integral]]).

[L3] For every real $z$, $-|z|\le z\le|z|$ and $|-z|=|z|$; for $c>0$, $|z|<c$ exactly when $-c<z<c$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 If $u=v$, both oriented integrals are $0$ and the asserted inequality holds. [L1, algebra]

1.2 Suppose $u<v$ and put $h:=f-g$. Then $h$ is integrable and $\int_u^v h=\int_u^v f-\int_u^v g$. [L1]

2.1 The hypothesis gives $|h(x)|\le\eta$, while [L3] gives $-|h(x)|\le h(x)\le|h(x)|$; hence $-\eta\le h(x)\le\eta$ on $[u,v]$, and [L2] gives $-\eta(v-u)\le\int_u^v h\le\eta(v-u)$. [step 1.2, L2, L3]

3.1 Hence $\left|\int_u^v f-\int_u^v g\right|=\left|\int_u^v h\right|\le\eta(v-u)$ when $u<v$. [step 1.2, step 2.1, L3]

4.1 If $u>v$, apply step 3.1 to the ordered pair $(v,u)$ and use antisymmetry of oriented integrals; the same bound results because $|u-v|=|v-u|$. [step 3.1, L1, L3]

5.1 The alternatives $u=v$, $u<v$, and $u>v$ are exhaustive, and steps 1.1, 3.1, and 4.1 give the claimed inequality. [step 1.1, step 3.1, step 4.1] ∎
