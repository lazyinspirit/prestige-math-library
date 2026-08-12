---
id: thm-extremal-graph-supersaturation
kind: theorem
title: "Above Turán density, a graph contains a positive-density family of copies of the forbidden graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-turan-density-exists, thm-double-counting, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $H$ be a finite graph with $h$ vertices and at least one edge. For every $\varepsilon>0$ there are $\delta>0$ and $N$ such that every $n\ge N$ graph $G$ with

$$e(G)\ge(\pi(H)+\varepsilon)\binom n2$$

contains at least $\delta n^h$ injective ordinary-subgraph embeddings of $H$ into $G$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] For every finite graph $H$ with an edge, the normalized extremal numbers converge to $\pi(H)$, their infimum over $n\ge2$ ([[thm-turan-density-exists]]).

[F2] For a finite incidence relation, the sum of its row-fibre sizes equals the sum of its column-fibre sizes ([[thm-double-counting]]).

## Proof

**Proof technique:** average over fixed-size vertex subsets.

1.1 If $\pi(H)+\varepsilon>1$, take $\delta=1$ and $N=1$; no graph satisfies the edge hypothesis. Hence assume $\pi(H)+\varepsilon\le1$, and choose $m\ge\max(h,2)$ with $\operatorname{ex}(m,H)/\binom m2<\pi(H)+\varepsilon/2$. For an $n$-vertex $G$ satisfying the hypothesis, the average edge density of its induced $m$-vertex subgraphs equals $e(G)/\binom n2\ge\pi(H)+\varepsilon$: each edge lies in $\binom{n-2}{m-2}$ such subsets. [given, F1, F2]

2.1 Let $p$ be the fraction of $m$-subsets inducing more than $\operatorname{ex}(m,H)$ edges. The remaining subsets have density below $\pi(H)+\varepsilon/2$, while every density is at most $1$. Therefore $\pi(H)+\varepsilon\le(1-p)(\pi(H)+\varepsilon/2)+p$, so $p\ge\varepsilon/2$ after weakening the resulting positive lower bound if necessary. Each good subset contains an injective copy of $H$. [step 1.1, given]

3.1 Count pairs consisting of a good $m$-set and a chosen injective copy of $H$ inside it. There are at least $(\varepsilon/2)\binom nm$ pairs after choosing one copy in each good set, while any fixed embedding lies in $\binom{n-h}{m-h}$ $m$-sets. Thus the number of embeddings is at least $(\varepsilon/2)\binom nm/\binom{n-h}{m-h}=(\varepsilon/2)\binom nh/\binom mh$. For $n\ge2h$, this is at least $\delta n^h$ for some $\delta>0$ depending only on $H,\varepsilon$. [step 2.1, given, F2]

4.1 Taking $N\ge\max(m,2h)$ completes the assertion with the constants constructed above. [step 1.1, step 3.1] ∎
