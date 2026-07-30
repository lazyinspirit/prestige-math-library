---
id: lem-continuous-images-of-universal-nets-are-universal
kind: lemma
title: "The image of a universal net under any map is universal, and a continuous map preserves its limits"
status: published
origin: session
deps: [def-universal-net, def-net-eventually-and-frequently, thm-continuity-characterised-by-nets]
aliases: []
landmark: false
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

If $x$ is a universal net in $X$ and $f:X\to Y$ is any map, then $f(x)$ is universal. If $f$ is continuous and $x\to p$, then $f(x)\to f(p)$.

## Facts & Assumptions

**Given:** A universal net $x:D\to X$ and a map $f:X\to Y$.

[A1] $x$ is universal precisely when it eventually enters every subset or its complement ([[def-universal-net]]).

[L1] A continuous map preserves every convergent net ([[thm-continuity-characterised-by-nets]]).



## Proof

**Proof technique:** direct.

1.1 Let $S\subseteq Y$. By [A1], $x$ is eventually in $f^{-1}[S]$ or in its complement $f^{-1}[Y\setminus S]$; respectively, $f(x)$ is eventually in $S$ or in $Y\setminus S$. [A1]

2.1 Thus $f(x)$ is universal. [step 1.1, A1]

3.1 If $f$ is continuous and $x\to p$, the second assertion is [L1]. [L1] ∎
