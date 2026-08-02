---
id: lem-pointwise-lipschitz-sets-in-c01-are-closed
kind: lemma
title: "Functions satisfying a fixed local Lipschitz bound somewhere form a closed subset of $C([0,1])$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuous-real-functions-on-a-compact-metric-space, lem-sup-metric-is-a-metric, def-metric-convergence, def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-uniform-limit-continuous-real-functions, thm-bolzano-weierstrass, def-interval]
aliases: []
landmark: false
proof_strategy: sequential
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "A generic continuous function is nowhere differentiable"
      url: "https://www.math.harvard.edu/~elkies/M250.07/nowhere.pdf"
pipeline_run: null
---

## Statement

For $p,q\in\mathbb N_{>0}$, let $E_{p,q}$ be the functions $f\in C([0,1],\mathbb R)$ for which some $a\in[0,1]$ satisfies $|f(t)-f(a)|\le p|t-a|$ whenever $t\in[0,1]$ and $|t-a|<1/q$. Then $E_{p,q}$ is closed in the supremum metric.

## Facts & Assumptions
**Given:** $f_n\in E_{p,q}$ converges to $f$ in the supremum metric.

[L1] Supremum-metric convergence is uniform convergence ([[lem-sup-metric-is-a-metric]], [[def-metric-convergence]], [[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L2] Every sequence in $[0,1]$ has a convergent subsequence with limit in $[0,1]$ ([[thm-bolzano-weierstrass]], [[def-interval]]).

[L3] A uniform limit of continuous real functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

## Proof

**Proof technique:** sequential.

1.1 For each $n$, choose a witness $a_n\in[0,1]$ for $f_n\in E_{p,q}$. Pass to a subsequence with $a_n\to a\in[0,1]$ using [L2]. [given, L2, choose]

1.2 By [L1], $f_n\to f$ uniformly, and [L3] confirms that $f\in C([0,1],\mathbb R)$. [L1, L3, algebra]

2.1 Fix $t\in[0,1]$ with $|t-a|<1/q$. For all sufficiently large $n$, $|t-a_n|<1/q$, hence $|f_n(t)-f_n(a_n)|\le p|t-a_n|$. [step 1.1, given, algebra]

3.1 Letting $n$ tend to infinity in step 2.1, uniform convergence and continuity of $f$ give $|f(t)-f(a)|\le p|t-a|$. [step 1.1, step 1.2, step 2.1, algebra]

4.1 The point $a$ witnesses $f\in E_{p,q}$; therefore $E_{p,q}$ is sequentially closed, hence closed in this metric space. [step 3.1, L1, algebra] ∎
