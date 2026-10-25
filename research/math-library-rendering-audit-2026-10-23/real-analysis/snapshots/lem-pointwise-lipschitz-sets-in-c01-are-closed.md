---
id: lem-pointwise-lipschitz-sets-in-c01-are-closed
kind: lemma
title: "Functions satisfying a fixed local Lipschitz bound somewhere form a closed subset of $C([0,1])$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuous-real-functions-on-a-compact-metric-space, lem-sup-metric-is-a-metric, thm-heine-borel-r, def-interval]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (lem-pointwise-lipschitz-sets-in-c01-are-closed). No independent judge or whole-closure certification.
    delegated_by: owner
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
**Given:** Positive integers $p,q$ and a function $f\in C([0,1],\mathbb R)$ outside $E_{p,q}$.

[L1] The supremum metric measures uniform distance ([[lem-sup-metric-is-a-metric]]).

[L2] The interval $[0,1]$ is compact: every open cover has a finite subcover ([[thm-heine-borel-r]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Because $f\notin E_{p,q}$, for each $a\in[0,1]$ some $t\in[0,1]$ satisfies $|t-a|<1/q$ and $|f(t)-f(a)|>p|t-a|$. For $t\in[0,1]$ and rational $\delta>0$, let $V_{t,\delta}$ consist of the points $a$ satisfying $|t-a|<1/q$ and $|f(t)-f(a)|>p|t-a|+3\delta$. Each $V_{t,\delta}$ is relatively open by continuity of $f$, and the whole indexed family covers $[0,1]$, since every strict gap exceeds $3\delta$ for some positive rational $\delta$. [given, construct]

2.1 By [L2], finitely many sets $V_{t_i,\delta_i}$ cover $[0,1]$. Put $\varepsilon=\min_i\delta_i>0$. If $h\in C([0,1],\mathbb R)$ and $\|h-f\|_\infty<\varepsilon$, then for each $a\in[0,1]$ some $i$ has $a\in V_{t_i,\delta_i}$. The triangle inequality gives $|h(t_i)-h(a)|\ge |f(t_i)-f(a)|-2\|h-f\|_\infty>p|t_i-a|+3\delta_i-2\varepsilon\ge p|t_i-a|$, while $|t_i-a|<1/q$. Thus no $a$ witnesses $h\in E_{p,q}$. [step 1.1, L1, L2, algebra]

3.1 Step 2.1 shows that the uniform ball of radius $\varepsilon$ about every $f\notin E_{p,q}$ misses $E_{p,q}$. The complement is open, so $E_{p,q}$ is closed. The cover and finite subcover make no countable witness selection. [step 2.1] ∎
