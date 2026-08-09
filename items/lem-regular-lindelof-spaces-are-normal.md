---
id: lem-regular-lindelof-spaces-are-normal
kind: lemma
title: "Every regular Lindelöf space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-regularity-via-closed-neighbourhoods, def-compactness-variants, def-normal-and-t4-spaces]
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
    - title: "J. R. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "MSSC topology text, §16"
      url: "https://www.mssc.mu.edu/~paul/Paper/112042text.pdf"
pipeline_run: null
---

## Statement

Every regular Lindelöf space is normal.

## Facts & Assumptions

**Given:** A regular Lindelöf space $X$ and disjoint closed sets $A,B\subseteq X$.

[L1] If $x\in U$ and $U$ is open in a regular space, there is open $V$ with $x\in V\subseteq\overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[F1] Lindelöf means that every open cover has an at most countable subcover ([[def-compactness-variants]]).

[F2] Normality is separation of disjoint closed subsets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal V$ be the family of all open $V\subseteq X$ satisfying $\overline V\subseteq X\setminus B$. For every $a\in A$, [L1] supplies a member of $\mathcal V$ containing $a$, so $\mathcal V\cup\{X\setminus A\}$ is an open cover of $X$. [L1]

2.1 By Lindelöfness, an at most countable subfamily $\mathcal W\subseteq\mathcal V$ covers $A$. [F1, step 1.1]

3.1 Put $U=\bigcup\mathcal W$ and $W=X\setminus\bigcup_{V\in\mathcal W}\overline V$. Then $U,W$ are open, $A\subseteq U$, $B\subseteq W$, and $U\cap W=\varnothing$. [step 1.1, step 2.1]

4.1 Thus $X$ is normal. [F2, step 3.1] ∎
