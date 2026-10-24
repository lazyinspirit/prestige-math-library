---
id: thm-kovari-sos-turan-bound
kind: theorem
title: "Kővári–Sós–Turán: exact bipartite and ordinary-graph upper bounds for excluding $K_{s,t}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-kst-common-neighbour-double-count, def-zarankiewicz-number, def-asymptotic-extremal-notation-and-edge-density]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

For $m,n\in\mathbb N$ and $s,t\ge1$,

$$z(m,n;s,t)\le (t-1)^{1/s}m n^{1-1/s}+(s-1)n.$$

Consequently every $N$-vertex ordinary graph containing no $K_{s,t}$ satisfies

$$e(G)\le\frac12(t-1)^{1/s}N^{2-1/s}+\frac12(s-1)N,$$

and therefore

$$\operatorname{ex}(N,K_{s,t})=O_{s,t}(N^{2-1/s}).$$

For $s=1$, the first inequality reads $z(m,n;1,t)\le(t-1)m$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] For a bipartite graph with parts of sizes $m,n$ containing no oriented $K_{s,t}$ with its $s$ vertices on the $m$-side, the common-neighbour count is at most $(t-1)\binom ms$; for nonnegative integer degrees of total $E$ with $E/n\ge s-1$, smoothing gives the lower bound $n(E/n-s+1)^s/s!$ ([[lem-kst-common-neighbour-double-count]]).

[F2] In $z(m,n;s,t)$, the $s$-vertex part of the forbidden $K_{s,t}$ lies on the left and the $t$-vertex part lies on the right ([[def-zarankiewicz-number]]).

[F3] $f=O(g)$ means an eventual constant upper bound, $f=o(g)$ means $f/g\to0$, and subscripts permit the constants and thresholds to depend on those parameters ([[def-asymptotic-extremal-notation-and-edge-density]]).

## Proof

**Proof technique:** compare the upper and lower common-neighbour counts.

1.1 Let $E=e(G)$ in the bipartite problem. If $m=0$ or $n=0$, then $E=0$ and the first bound is immediate. Assume $m,n\ge1$. If $E/n<s-1$, the bound is again immediate. Otherwise the preceding lemma gives $n(E/n-s+1)^s/s!\le(t-1)\binom ms\le(t-1)m^s/s!$. Taking nonnegative $s$th roots and rearranging yields $E\le(t-1)^{1/s}mn^{1-1/s}+(s-1)n$. [given, F1]

2.1 For an ordinary $K_{s,t}$-free graph on $N$ vertices, form a bipartite incidence graph between two copies of its vertex set, joining the left copy of $u$ to the right copy of $v$ exactly when $uv$ is an edge. It is oriented-$K_{s,t}$-free and has $2e(G)$ edges. Apply step 1.1 with $m=n=N$ and divide by $2$. [step 1.1, given, F2]

3.1 The displayed ordinary bound is $O_{s,t}(N^{2-1/s})$, since its linear term has no larger order. At $s=1$, step 1.1 uses the same algebra and gives the stated exact specialization. [step 1.1, step 2.1, given, F3] ∎
