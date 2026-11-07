---
id: def-finite-partite-hypergraph-system-and-coordinate-algebras
kind: definition
title: "Finite partite hypergraph systems and coordinate algebras"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-uniform-finite-probability-space
  - def-product-of-finite-probability-spaces
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§1 Definitions 1.4, 1.6, 1.8 and 1.10, printed pp. 3–4; local empty-face conventions."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 454–455 (PDF pp. 474–475), definitions and partite framework; the book's later all-order proof omissions are recorded in batch coverage."
verification:
  precheck: n/a
---

## Definition

Let $J$ be a finite set and let $V_j$ be a nonempty finite set for each $j\in J$. For $e\subseteq J$ put $V_e=\prod_{j\in e}V_j$ and let $\pi_e:V_J\to V_e$ be coordinate projection, where the empty product $V_\varnothing$ is a singleton. For an integer $0\le d\le |J|$, a $d$-uniform partite pattern is a family $\mathcal H_d\subseteq\{e\subseteq J:|e|=d\}$. An edge event on $e$ is a subset of $V_e$, pulled back to $V_J$ by $\pi_e$. The coordinate algebra $\mathcal A_e$ is the family of all these pullbacks. Expectations on $V_J$ are normalized uniform finite averages.

A finite algebra on $V_J$ is a family of subsets containing $\varnothing$ and $V_J$ and closed under complement and finite union. Its atoms are its minimal nonempty members; they partition $V_J$, and every algebra member is a union of atoms. Its complexity is the least number of subsets of $V_J$ that generate it as an algebra; the trivial algebra has complexity zero. The tuple $(J,(V_j)_{j\in J},d,\mathcal H_d)$ with these coordinate spaces and algebras is the finite partite hypergraph system.

## Definition references

[Tao, Definitions 1.4, 1.6, 1.8 and 1.10](https://arxiv.org/pdf/math/0503572v2)

[Tao and Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)
