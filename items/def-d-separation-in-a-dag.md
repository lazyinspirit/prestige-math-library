---
id: def-d-separation-in-a-dag
kind: definition
title: "Paths, active paths, and d-separation in a finite DAG"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps: []
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-1, pp. 671–672"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Fine Point 6.1, pp. 78–79"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

A **finite directed acyclic graph** (DAG) is a finite vertex set $V$ with an
arrow set $E\subseteq V\times V$ and no directed cycle. A **path** from $u$ to
$v$ is a finite sequence of distinct vertices beginning at $u$ and ending at
$v$ in which each consecutive pair is joined by an arrow in either direction;
the arrows are not required to point along the sequence. An internal vertex of
a path is a **collider on that path** when the two arrows on the path both point
into it, and is a **noncollider** otherwise. A vertex $w$ is a **descendant** of
$v$ if there is a directed path from $v$ to $w$; for this definition
$\operatorname{De}^+(v)$ includes $v$ itself as well as its descendants.

For pairwise disjoint vertex sets $X,Y,C\subseteq V$, a path joining $X$ to
$Y$ is **active given $C$** when every internal noncollider is outside $C$ and
every internal collider has at least one member of $\operatorname{De}^+(v)$ in
$C$. The set $C$ **d-separates** $X$ and $Y$ in $G$ when no path joining $X$ to
$Y$ is active given $C$; write $X\perp_d Y\mid C$ in $G$. The empty set of
vertices is allowed for any of $X,Y,C$; in particular d-separation is vacuous
if either endpoint set is empty.

For $T\subseteq V$, $G_{\underline T}$ is obtained by deleting every arrow
whose tail lies in $T$, and $G_{\overline T}$ by deleting every arrow whose
head lies in $T$. These are graph operations only; they do not by themselves
specify a probability law under intervention.
