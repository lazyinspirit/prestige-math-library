---
id: thm-universal-nets-and-ultrafilters-correspond
kind: theorem
title: "A net is universal exactly when its tail filter is an ultrafilter, and the canonical net of an ultrafilter is universal"
status: published
origin: session
deps: [def-universal-net, def-tail-filter-of-a-net, def-net-derived-from-a-filter, def-ultrafilter, thm-ultrafilter-characterisation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
pipeline_run: null
---

## Statement

A net is universal if and only if its tail filter is an ultrafilter. Moreover, the net derived from an ultrafilter is universal.

## Facts & Assumptions

**Given:** A net $x$ in $X$ and a filter $\mathcal U$ on $X$.

[A1] $S$ belongs to the tail filter of $x$ exactly when $x$ is eventually in $S$ ([[def-tail-filter-of-a-net]]).

[A2] A filter is an ultrafilter exactly when, for every $S\subseteq X$, it contains $S$ or $X\setminus S$ ([[thm-ultrafilter-characterisation]]).

[A3] The derived net of $\mathcal U$ is indexed by $(A,a)$ and later indices have first coordinate contained in $A$ ([[def-net-derived-from-a-filter]]).



## Proof

**Proof technique:** direct.

1.1 By [A1], universality of $x$ says exactly that its tail filter contains $S$ or $X\setminus S$ for every $S\subseteq X$. By [A2], this is exactly ultrafilterhood. [A1, A2]

1.2 If $\mathcal U$ is an ultrafilter and $S\subseteq X$, [A2] gives $S\in\mathcal U$ or $X\setminus S\in\mathcal U$. In the first case an index $(S,a)$ exists and every later value lies in $S$ by [A3]; the second case is identical. [A2, A3]

2.1 Thus the derived net of an ultrafilter is universal, completing both assertions. [step 1.1, step 1.2] ∎
