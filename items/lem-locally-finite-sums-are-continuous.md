---
id: lem-locally-finite-sums-are-continuous
kind: lemma
title: "A locally finite family of continuous nonnegative functions has a continuous pointwise sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-partition-of-unity-subordinate-to-a-cover, lem-algebra-of-continuous-real-maps-on-a-space]
justified_by: []
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
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "S. Semmes, Topology notes, Sections 5.13–5.14 (Rice University)"
      url: "https://math.rice.edu/~semmes/math443b.pdf"
pipeline_run: null
---

## Statement

Let $\{f_s:X\to[0,\infty)\}_{s\in S}$ be continuous and suppose that
$\{\operatorname{coz}(f_s)\}_{s\in S}$ is locally finite. Then
$f(x):=\sum_{s\in S}f_s(x)$ is a well-defined continuous map $X\to[0,\infty)$.

## Facts & Assumptions

**Given:** A locally finite family of cozero sets of continuous nonnegative functions on $X$.

[F1] At every point, a locally finite family has a neighbourhood meeting only finitely many members ([[def-partition-of-unity-subordinate-to-a-cover]]).

[L1] A finite sum of continuous real-valued maps is continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a neighbourhood $N$ meeting only $\operatorname{coz}(f_{s_1}),\ldots,\operatorname{coz}(f_{s_n})$; every $f_s$ with $s\notin\{s_1,\ldots,s_n\}$ vanishes on $N$. [F1]

2.1 Thus at every point of $N$ the displayed pointwise sum equals the finite sum $f_{s_1}+\cdots+f_{s_n}$, so it is well defined and agrees on $N$ with a continuous function. [step 1.1, L1]

3.1 Since every point has such a neighbourhood $N$, the pointwise sum is continuous on $X$ and is nonnegative. [step 2.1] ∎
