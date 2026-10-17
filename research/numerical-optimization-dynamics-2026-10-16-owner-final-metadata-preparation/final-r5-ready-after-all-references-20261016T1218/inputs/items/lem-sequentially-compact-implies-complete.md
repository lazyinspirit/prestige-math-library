---
id: lem-sequentially-compact-implies-complete
kind: lemma
title: "A sequentially compact metric space is complete, with no choice principle used"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness-variants, def-complete-metric-space, def-cauchy-in-metric, lem-metric-cauchy-with-convergent-subsequence, def-metric-convergence, def-sequence, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "sequentially compact implies complete"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a sequentially compact metric space
([[def-metric-compactness-variants]], [[def-metric-space]]). Then $(X,d)$ is
complete ([[def-complete-metric-space]]).

The proof is a theorem of ZF: it instantiates two existential statements and
selects nothing.

## Facts & Assumptions

**Given:** A sequentially compact metric space $(X,d)$.

[L1] $(X,d)$ is sequentially compact: every sequence in $X$ has a subsequence converging to a point of $X$ ([[def-metric-compactness-variants]], [[def-sequence]], [[def-metric-convergence]]).

[L2] $(X,d)$ is complete when every Cauchy sequence in $X$ converges to a point of $X$ ([[def-complete-metric-space]], [[def-cauchy-in-metric]]).

[L3] A Cauchy sequence with a subsequence converging to $p$ converges to $p$ itself ([[lem-metric-cauchy-with-convergent-subsequence]]).

## Proof

**Proof technique:** direct.

1.1 Let $(x_k)$ be a Cauchy sequence in $(X,d)$. [L2]

2.1 By sequential compactness there is a strictly increasing index map $j \mapsto n_j$ and a point $p \in X$ with $x_{n_j} \to p$ in $(X,d)$. [L1, step 1.1]

3.1 Since $(x_k)$ is Cauchy and one of its subsequences converges to $p$, the whole sequence converges to $p$, and $p \in X$. [L3, step 2.1]

4.1 So every Cauchy sequence in $(X,d)$ converges in $X$, that is $(X,d)$ is complete. [L2, step 3.1] ∎

## Remarks

**The converse fails.** A complete metric space need not be sequentially compact: $\mathbb{R}$ with its usual metric is complete, and the sequence $x_k = k$ has no convergent subsequence, every subsequence being unbounded. What has to be added to completeness is total boundedness, and that pair is equivalent to compactness ([[thm-complete-and-totally-bounded-implies-compact]], [[thm-metric-compactness-equivalences]]).

**Why this direction is free while the companion is not.** Here the sequence is handed to the proof and sequential compactness hands back a subsequence: one object is produced, once. In [[thm-sequentially-compact-implies-totally-bounded]] a point has to be produced at every stage, each in terms of the points already produced, and that is where a choice principle enters the page.
