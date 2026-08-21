---
id: thm-regular-locus-is-open
kind: theorem
title: "The regular locus of a $C^1$ Euclidean map is open"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-locus-of-a-c-one-map, lem-newton-contraction-near-an-invertible-derivative, def-metric-topology]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. Lebl, Basic Analysis II, §8.5"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. For a $C^1$ map $f:U\to\mathbb R^n$ on an open $U\subseteq\mathbb R^n$, the regular locus $\operatorname{Reg}(f)$ ([[def-regular-locus-of-a-c-one-map]]) is open in $U$. The empty regular locus is included.

## Facts & Assumptions

**Given:** The map and domain in the Statement, with openness understood in the metric topology [[def-metric-topology]].

[L1] At a point $a$ where $Df(a)$ is invertible, there is $R>0$ such that $Df(x)$ is invertible for every $x\in\overline B(a,R)$ ([[lem-newton-contraction-near-an-invertible-derivative]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in\operatorname{Reg}(f)$. By [L1], some $R>0$ has $B(a,R)\subseteq\operatorname{Reg}(f)$, so $a$ is an interior point of the regular locus. [L1, given]

2.1 Every point of the regular locus is interior by step 1.1; if the locus is empty, it is open by definition. Thus $\operatorname{Reg}(f)$ is open. [step 1.1] ∎
