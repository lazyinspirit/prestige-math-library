---
id: lem-regularity-is-hereditary
kind: lemma
title: "Regularity is hereditary, without a hidden $T_1$ hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-regularity-via-closed-neighbourhoods, thm-subspace-closure-and-interior, def-hereditary-property]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Statement

Regularity, with no $T_1$ condition built into its name, is hereditary.

## Facts & Assumptions

**Given:** A regular space $X$, a subspace $S\subseteq X$, a point $x\in S$, and an open set $W$ of $S$ containing $x$.

[L1] In a regular space, $x\in U$ open gives an open $V$ with $x\in V\subseteq\overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[L2] Every open set of $S$ is a trace $U\cap S$, and closure in $S$ is the ambient closure intersected with $S$ ([[thm-subspace-closure-and-interior]]).

## Proof

**Proof technique:** direct.

1.1 Write $W=U\cap S$ for an open $U\subseteq X$ containing $x$. [L2]

1.2 Choose open $V\subseteq X$ with $x\in V\subseteq\overline V\subseteq U$. [L1]

2.1 The trace $V\cap S$ is open in $S$, contains $x$, and has $\operatorname{cl}_S(V\cap S)\subseteq\overline V\cap S\subseteq U\cap S=W$. [L2, step 1.2]

3.1 The closed-neighbourhood characterization now makes $S$ regular; as $S$ was arbitrary, regularity is hereditary. [L1, step 2.1] ∎
