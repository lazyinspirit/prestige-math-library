---
id: def-rooted-stable-tooth-comb
kind: definition
title: "A rooted stable-tooth comb"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-comb-in-a-graph,
       def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 3.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Definition

Let $G$ be a finite graph. A **rooted stable-tooth comb** in $G$ is data

$$\bigl(v,\ ((a_i,B_i):1\leq i\leq t)\bigr)$$

with $t\geq 1$ such that:

1. $((a_i,B_i):1\leq i\leq t)$ is a $(t,w)$-comb in $G$ for some $w>0$, in the
   sense of [[def-comb-in-a-graph]];
2. $v\notin\{a_1,\dots,a_t\}\cup B_1\cup\cdots\cup B_t$;
3. the set $\{a_1,\dots,a_t\}$ is stable; and
4. the root vertex $v$ is complete to $\{a_1,\dots,a_t\}$ and anticomplete to
   $B_1\cup\cdots\cup B_t$.

The word "stable-tooth" records condition 3: the teeth form a stable set.
Condition 2 makes the disjoint-set predicates in condition 4 well defined in
the sense of [[def-edges-between-sets-and-pure-mixed-pairs]].
