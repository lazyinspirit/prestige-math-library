---
id: lem-paracompact-hausdorff-is-regular
kind: lemma
title: "Every paracompact Hausdorff space is regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-paracompact-space, def-cover-refinement-and-local-finiteness, lem-locally-finite-unions-and-closures, def-hausdorff-space, def-regular-and-t3-spaces]
justified_by: []
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
pipeline_run: null
---

## Statement

Every paracompact Hausdorff topological space is regular. No choice principle is
used.

## Facts & Assumptions

**Given:** A paracompact Hausdorff space $X$, a closed set $F\subseteq X$, and a point $p\in X\setminus F$.

[F1] Distinct points in a Hausdorff space have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[F2] A paracompact space gives every open cover a locally finite open refining cover ([[def-paracompact-space]]).

[L1] For a locally finite family, closure commutes with union ([[lem-locally-finite-unions-and-closures]]).

[F3] Regularity is separation of a point from a disjoint closed set by disjoint open sets ([[def-regular-and-t3-spaces]]).

## Proof

**Proof technique:** direct.

1.1 For every $x\in F$, Hausdorffness gives disjoint open sets $U,V$ with $x\in U$ and $p\in V$; hence $p\notin\overline U$, since $X\setminus V$ is closed and contains $U$. Thus the family of all open $U$ with $U\cap F\ne\varnothing$ and $p\notin\overline U$, together with $X\setminus F$, is an open cover $\mathcal U$ of $X$. [F1, construct]

2.1 Take a locally finite open cover $\mathcal W$ refining $\mathcal U$, and put $H:=\bigcup\{W\in\mathcal W:W\cap F\ne\varnothing\}$. [F2, step 1.1, choose, construct]

3.1 The set $H$ is open and contains $F$: a member of $\mathcal W$ containing a point of $F$ cannot refine $X\setminus F$, so it occurs in the defining union. [step 1.1, step 2.1]

3.2 Every $W$ occurring in $H$ lies in an eligible $U$ of step 1.1, so $p\notin\overline W$; local finiteness and [L1] give $\overline H=\bigcup\overline W$, whence $p\notin\overline H$. [step 1.1, step 2.1, L1]

4.1 The open sets $X\setminus\overline H$ and $H$ contain $p$ and $F$ respectively and are disjoint. By [F3], $X$ is regular. [step 3.1, step 3.2, F3] ∎
