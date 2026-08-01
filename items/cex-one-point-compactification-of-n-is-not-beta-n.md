---
id: cex-one-point-compactification-of-n-is-not-beta-n
kind: counterexample
title: 'The one-point compactification of discrete $\mathbb N$ is not $\beta\mathbb N$'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-one-point-compactification, thm-one-point-compactification-properties, def-stone-cech-compactification, def-natural-numbers, def-compact-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Statement refuted

The one-point compactification $\mathbb N^*$ of discrete $\mathbb N$ has the Stone–Čech extension property.

## Facts & Assumptions

**Given:** Discrete $\mathbb N$, its one-point compactification $\mathbb N^*=\mathbb N\cup\{\infty\}$, and $p(n)=0$ for even $n$ and $p(n)=1$ for odd $n$.

[L1] A neighbourhood of $\infty$ in the one-point compactification is the complement of a closed compact subset of $\mathbb N$ ([[def-one-point-compactification]]).

[L2] In a discrete space, compact subsets are finite ([[def-compact-space]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Suppose $p$ extends continuously to $h:\mathbb N^*\to[0,1]$, and write $a=h(\infty)$. [assume-contra]

1.2 The open interval $(a-1/3,a+1/3)\cap[0,1]$ contains $a$, so continuity gives a neighbourhood of $\infty$ on which $h$ has values in that interval. By [L1] and [L2], this neighbourhood contains every natural except finitely many. [L1, L2]

2.1 Both an even and an odd natural lie outside every finite subset of $\mathbb N$. Their $p$-values are $0$ and $1$, which cannot both belong to an interval of radius $1/3$. This contradicts step 1.2. [step 1.2]

3.1 Hence $p$ has no continuous extension; the asserted Stone–Čech property is false. [step 2.1, discharge-contradiction] ∎
