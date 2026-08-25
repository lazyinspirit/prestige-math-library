---
id: def-graph-path-metric
kind: definition
title: "The path metric of a connected simple graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-walks-paths-and-connectedness-in-a-simple-graph, lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints, def-metric-space, thm-well-ordering-principle]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G$ be a connected simple graph. For vertices $u,v \in V(G)$, connectedness
supplies at least one path from $u$ to $v$, and every such path has a length in
$\mathbb{N}$. By [[thm-well-ordering-principle]], the set of these lengths has a
least element. The **path metric** of $G$ is therefore the function

$$d_G : V(G) \times V(G) \to \mathbb{R}, \qquad d_G(u,v) := \min\{\, \ell(P) : P \text{ is a path from } u \text{ to } v \,\}.$$

Here $\ell(P)$ is the number of edges traversed by the path $P$, as in
[[def-graph-walk-trail-path-and-cycle]]. The proof that $d_G$ is a metric in the
sense of [[def-metric-space]] is [[thm-the-path-metric-of-a-connected-simple-graph-is-a-metric]].
