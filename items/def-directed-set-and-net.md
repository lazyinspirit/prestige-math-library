---
id: def-directed-set-and-net
kind: definition
title: "Directed preorders and nets"
status: published
origin: session
deps: [def-partial-order, def-topological-space]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
pipeline_run: null
---

## Definition

A **directed preorder** is a nonempty set $D$ with a reflexive, transitive relation $\le$ such that every $d,e\in D$ have a common upper bound: some $f\in D$ satisfies $d\le f$ and $e\le f$. Antisymmetry is not required; thus this is a preorder obtained by omitting antisymmetry from the partial-order axioms of [[def-partial-order]].

If $X$ is the underlying set of a topological space ([[def-topological-space]]), a **net in $X$** indexed by $D$ is a function $x:D\to X$, written $(x_d)_{d\in D}$. The order on $D$ records which indices are sufficiently far along; it need not be a linear order.

## Remarks

Some texts require a directed set to be a partial order. The present preorder convention is deliberate: none of the convergence arguments needs antisymmetry, and it permits convenient index systems with equivalent stages.
