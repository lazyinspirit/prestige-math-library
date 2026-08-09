---
id: lem-t0-t1-and-hausdorff-are-hereditary
kind: lemma
title: "$T_0$, $T_1$, and Hausdorffness are hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-subspace-topology-top, def-hereditary-property]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §§5–6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

The properties $T_0$, $T_1$, and Hausdorffness are hereditary in the sense of [[def-hereditary-property]].

## Facts & Assumptions

**Given:** A subspace $S$ of a space $X$ carrying one of the stated properties.

[F1] An open set of $S$ is $S \cap U$ for an open set $U$ of $X$ ([[def-subspace-topology-top]]).

[F2] $T_0$ distinguishes a distinct pair by one open set, $T_1$ separates each point from the other by an open set, and Hausdorffness separates a distinct pair by disjoint open sets ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $x,y\in S$ be distinct. If $X$ is $T_0$, choose an open $U\subseteq X$ containing exactly one of $x,y$; then $S\cap U$ does the same in $S$. [F1, F2]

1.2 If $X$ is $T_1$, apply the preceding trace argument separately to the two open sets supplied by the $T_1$ condition, so each of $x,y$ has an open neighbourhood in $S$ missing the other. [F1, F2]

1.3 If $X$ is Hausdorff, choose disjoint open $U,V\subseteq X$ containing $x,y$ respectively; $S\cap U$ and $S\cap V$ are disjoint open neighbourhoods in $S$. [F1, F2]

2.1 Since $S$ was arbitrary, each of the three properties is hereditary. [step 1.1, step 1.2, step 1.3] ∎
