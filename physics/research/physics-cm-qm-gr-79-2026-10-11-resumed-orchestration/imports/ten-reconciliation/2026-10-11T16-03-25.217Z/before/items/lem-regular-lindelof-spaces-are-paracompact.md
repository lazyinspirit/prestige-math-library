---
id: lem-regular-lindelof-spaces-are-paracompact
kind: lemma
title: "Under countable choice, every regular Lindelöf space is paracompact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-paracompact-space, def-compactness-variants, lem-regularity-via-closed-neighbourhoods, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every regular Lindelöf topological space
is paracompact.

## Facts & Assumptions

**Given:** Countable choice, a regular Lindelöf space $X$, and an open cover $\mathcal U$.

[A1] Countable choice selects from a countably indexed family of nonempty sets ([[def-countable-choice]]).

[L1] If $x\in U$ with $U$ open in a regular space, then some open $V$ satisfies $x\in V\subseteq\overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[F1] Lindelöfness gives an at most countable subcover, and paracompactness asks for a locally finite open refinement ([[def-compactness-variants]], [[def-paracompact-space]]).

## Proof

**Proof technique:** constructive.

1.1 The family of all open $V$ for which $\overline V\subseteq U$ for some $U\in\mathcal U$ covers $X$ by [L1]; by Lindelöfness take a sequence $V_0,V_1,\ldots$ covering $X$. [L1, F1, construct]

2.1 By [A1], choose $U_n\in\mathcal U$ with $\overline{V_n}\subseteq U_n$ for each $n$. [A1, step 1.1, choose]

3.1 Put $W_n:=U_n\setminus\bigcup_{i<n}\overline{V_i}$. Each $W_n$ is open and lies in $U_n$. [step 2.1, construct]

4.1 The $W_n$ cover $X$: if $n$ is the least index with $x\in U_n$, then $x\notin\overline{V_i}$ for $i<n$, since $\overline{V_i}\subseteq U_i$, and hence $x\in W_n$. [step 1.1, step 2.1, step 3.1]

4.2 The cover is locally finite: for $x\in V_k$, the neighbourhood $V_k$ is disjoint from $W_n$ for every $n>k$, while it can meet only $W_0,\ldots,W_k$. [step 3.1]

5.1 Thus $\{W_n\}$ is a locally finite open refinement of $\mathcal U$, and [F1] proves paracompactness. [F1, step 3.1, step 4.1, step 4.2, discharge-construct] ∎
