---
id: thm-euclidean-semicontinuous-extreme-value-theorem
kind: theorem
title: "Semicontinuous extreme value theorem on compact Euclidean sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semicontinuity-on-euclidean-subsets, thm-euclidean-semicontinuity-level-set-characterisations, def-metric-compactness, thm-compact-iff-finite-intersection-property, def-infimum, thm-infimum-property, lem-inf-epsilon, thm-of-archimedean, cor-archimedean-reciprocal, lem-finite-set-has-max]
justified_by: []
aliases: []
landmark: true
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
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 5 and 6"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $K\subseteq\mathbb R^n$ be nonempty and compact. Every lower semicontinuous function $f:K\to\mathbb R$ is bounded below and attains a minimum. Dually, every upper semicontinuous function $f:K\to\mathbb R$ is bounded above and attains a maximum.

## Facts & Assumptions

**Given:** A nonempty compact Euclidean set $K$ and a lower semicontinuous function $f:K\to\mathbb R$, with infima as in [[def-infimum]].

[L1] Lower semicontinuity is equivalent to relative openness of every strict superlevel set and to relative closedness of every weak sublevel set ([[thm-euclidean-semicontinuity-level-set-characterisations]]).

[L2] In a compact space, every family of closed sets with the finite intersection property has nonempty intersection ([[thm-compact-iff-finite-intersection-property]]).

[L3] Every nonempty real set bounded below has a greatest lower bound in $\mathbb R$ ([[thm-infimum-property]]).

[L4] If $m$ is the infimum of a nonempty real set, then for every $\varepsilon>0$ the set has an element $s<m+\varepsilon$ ([[lem-inf-epsilon]]).

[L5] For every real $x$ there is a natural number $n\ge1$ with $x<n$ ([[thm-of-archimedean]]).

[L6] For every real $\varepsilon>0$ there is a natural number $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L7] A metric space is compact when every open cover has a finite subcover ([[def-metric-compactness]]).

[L8] Every nonempty finite set of real numbers has a maximum and a minimum ([[lem-finite-set-has-max]]).

## Proof

**Proof technique:** direct.

1.1 For positive naturals $N$, the relatively open sets $U_N=\{x\in K:f(x)>-N\}$ cover $K$: apply [L5] to $-f(x)$. By [L7], finitely many $U_N$ cover, and [L8] gives a largest index $M$ among them. Since the sets are nested, $U_M=K$, so $f>-M$ on $K$ and $f[K]$ is bounded below. [L1, L5, L7, L8, given, algebra]

2.1 By [L3], $m=\inf f[K]$ exists. For every positive natural $N$, the set $F_N=K\cap\{f\le m+1/N\}$ is closed by [L1] and nonempty by [L4]. The family is nested, so every finite subfamily has nonempty intersection. [step 1.1, L1, L3, L4, algebra]

3.1 By [L2], choose $x_*\in\bigcap_NF_N$. If $f(x_*)>m$, [L6] gives $N\ge1$ with $1/N<f(x_*)-m$, contradicting $x_*\in F_N$. Thus $f(x_*)=m$. Applying the same argument to $-f$ proves that an upper semicontinuous function attains its maximum. [step 2.1, L2, L6, choose, algebra] ∎
