---
id: def-metric-tsp
kind: definition
title: "Metric traveling-salesperson problem"
status: draft
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
  - def-finite-simple-graph
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §§1.1, 1.6, 2.4, 5.1–5.2, 16.2, printed pp. 14–15, 24–26, 44–46, 107–109, 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

An instance of the **metric traveling-salesperson problem** consists of:

- a finite set $V$ of $n\ge 3$ labelled vertices, with the complete undirected
  graph on $V$ in the sense of [[def-finite-simple-graph]], whose edge set is
  the set of all two-element subsets of $V$;
- explicitly encoded nonnegative rational lengths $d(u,v)$, one for each
  unordered pair of distinct vertices, symmetric in the sense that
  $d(u,v)=d(v,u)$; one also fixes the diagonal value $d(u,u)=0$;
- the **triangle inequality** $d(u,w)\le d(u,v)+d(v,w)$ for all vertices
  $u,v,w$.

A feasible solution, called a **tour**, is a cyclic ordering
$v_{\pi(1)},\dots,v_{\pi(n)}$ visiting every vertex exactly once. Its cost is
the sum of the consecutive lengths, including the closing edge,

$$ c(\pi):=d(v_{\pi(1)},v_{\pi(2)})+d(v_{\pi(2)},v_{\pi(3)})+\cdots+d(v_{\pi(n)},v_{\pi(1)}). $$

The direction is minimization, and $\operatorname{OPT}_{\mathrm{TSP}}$ denotes
the minimum tour cost over the finitely many cyclic orderings; it is a
nonnegative rational attained by at least one tour. The completeness of the
graph and the triangle inequality are exactly the properties used later to
shortcut a repeated-vertex closed walk; this metric problem is not the
unrestricted traveling-salesperson problem, in which an instance may omit
edges and arbitrary nonnegative lengths need not satisfy the triangle
inequality. All ties in the algorithms below are resolved by fixed
lexicographic orders of the finitely many explicit objects involved.
