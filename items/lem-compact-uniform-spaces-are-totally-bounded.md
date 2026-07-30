---
id: lem-compact-uniform-spaces-are-totally-bounded
kind: lemma
title: "Every compact uniform space is totally bounded"
status: published
origin: session
deps: [def-totally-bounded-uniform-space, def-compact-space, lem-symmetric-entourages-form-a-base, thm-uniformity-induces-a-topology]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Every compact uniform space is totally bounded.

## Facts & Assumptions

**Given:** A compact uniform space $X$ and an entourage $E$.

[L1] Symmetric entourages form a base ([[lem-symmetric-entourages-form-a-base]]).

[L2] Compactness gives a finite subcover of every open cover ([[def-compact-space]]).

[L3] Total boundedness asks for a finite family of entourage balls ([[def-totally-bounded-uniform-space]]).

[L4] Every entourage ball is a neighbourhood and hence contains an open neighbourhood of its centre ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 Choose a symmetric $D\subseteq E$. For each $x\in X$, let $O_x$ be the union of all open subsets of $D[x]$ that contain $x$. By [L4], $O_x$ is an open neighbourhood of $x$ contained in $D[x]$, and the family $(O_x)_{x\in X}$ covers $X$. [L1, L4]

2.1 Compactness gives finite $F\subseteq X$ with $X=\bigcup_{x\in F}O_x\subseteq\bigcup_{x\in F}D[x]$. [step 1.1, L2]

3.1 Since $D[x]\subseteq E[x]$, the same finite set covers $X$ by $E$-balls, proving total boundedness by [L3]. [step 2.1, L3] ∎
