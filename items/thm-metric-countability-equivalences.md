---
id: thm-metric-countability-equivalences
kind: theorem
title: "Assuming countable choice, a metrizable space is second countable if and only if it is separable if and only if it is Lindelöf"
status: published
origin: session
deps: [def-metrizable-space, def-metric-topology, def-second-countable-space, def-separable-space, def-compactness-variants, thm-second-countable-implies-lindelof, def-countable-choice, thm-countable-union-of-countable]
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
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---

## Statement

Assuming $\mathrm{AC}_\omega$, a metrizable space is second countable iff it is separable iff it is Lindelöf.

## Facts & Assumptions

**Given:** A metric inducing the topology of $X$ ([[def-metrizable-space]], [[def-metric-topology]]).

[L1] Second countability implies Lindelöf under countable choice ([[thm-second-countable-implies-lindelof]]).

[A1] Countable choice selects one object from each nonempty family in a sequence ([[def-countable-choice]]).

[L2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $D$ is at most countable and dense. If $D=\varnothing$, then $X=\varnothing$ and the empty family is a basis. Otherwise the family $$\mathcal B=\{B(d,1/n):d\in D,\ n\ge1\}$$ is at most countable. It is a basis: if $x\in U$ with $U$ open, choose $\varepsilon>0$ with $B(x,\varepsilon)\subseteq U$, then choose $n$ with $2/n<\varepsilon$ and $d\in D\cap B(x,1/n)$. Now $x\in B(d,1/n)\subseteq B(x,2/n)\subseteq U$. Thus separability implies second countability. [given]

1.2 [L1] gives second countable implies Lindelöf. [L1]

1.3 Suppose $X$ is Lindelöf. For each $n\ge1$, the radius-$1/n$ balls cover $X$. Using [A1], choose an at most countable set $D_n$ of centres whose radius-$1/n$ balls cover $X$. Then $D=\bigcup_{n\ge1}D_n$ is at most countable by [L2]. It is dense: for $x\in U$ open, choose $\varepsilon>0$ with $B(x,\varepsilon)\subseteq U$ and $n$ with $1/n<\varepsilon$; some $d\in D_n$ has $x\in B(d,1/n)$, so $d\in B(x,\varepsilon)\subseteq U$. Thus Lindelöf implies separable. [A1, L2, given]

2.1 The three implications prove the equivalence. [step 1.1, step 1.2, step 1.3] ∎
