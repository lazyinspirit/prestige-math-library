---
id: def-walks-paths-and-connectedness-in-a-simple-graph
kind: definition
title: "Walks, paths, connectedness and components in a simple graph on an arbitrary vertex set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-graph-walk-trail-path-and-cycle, def-connected-graph-and-connected-component]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 3.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G=(V,E)$ be a simple graph in the sense of
[[def-simple-graph-without-a-finiteness-hypothesis]].

A **walk**, **closed walk**, **trail**, **path**, and **cycle** in $G$ are
defined exactly as in [[def-graph-walk-trail-path-and-cycle]], with no
finiteness hypothesis on $V$. In particular, a walk is a finite vertex list
$$(v_0,\dots,v_\ell)$$
with $\{v_{i-1},v_i\}\in E$ for each $1 \le i \le \ell$, and a path is a walk
with distinct vertices.

Vertices $u,v \in V$ are **connected** when some path in $G$ has endpoints $u$
and $v$. The graph $G$ is **connected** when $V \ne \emptyset$ and every two
vertices of $G$ are connected.

For $v \in V$, the **connected component** of $v$ is the induced subgraph on
$$C_G(v) := \{\, u \in V : u \text{ is connected to } v \,\}.$$

These are the same notions as in [[def-connected-graph-and-connected-component]],
again with the finiteness hypothesis removed.
