---
id: def-inductive-reachable-vertex-count
kind: definition
title: "Inductive counts of reachable vertices"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-directed-st-connectivity]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.4.2"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Definition

For an $N$-vertex digraph $G$, source $s$, and integer $i\ge0$, set
$$ C_i(G,s):=\{v\in V(G):\text{there is an s-to-v directed walk of length at most i}\},\qquad c_i:=|C_i(G,s)|. $$
Thus $C_0=\{s\}$ and $C_i\subseteq C_{i+1}$. Since a reachable vertex has a
simple path from $s$, $C_{N-1}$ is the full reachable set.
