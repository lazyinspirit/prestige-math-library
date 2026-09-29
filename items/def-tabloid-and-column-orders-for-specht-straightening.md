---
id: def-tabloid-and-column-orders-for-specht-straightening
kind: definition
title: Tabloid and column orders for Specht straightening
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-young-tableau-standard-tableau-and-shape, def-young-subgroup-tabloid-and-permutation-module, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Definition 4.8 and Remark 4.10, printed pp. 16-17"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Definitions 6.3 and 6.9, printed pp. 26-27 and 30; the column order is reversed here for increasing Garnir induction"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Definition

Fix a partition $\lambda\vdash n$. If $T$ is a $\lambda$-tabloid, let
$r_T(a)$ be the row containing label $a$. For distinct tabloids $T,U$, let
$m$ be the largest label for which $r_T(m)\ne r_U(m)$. Define
$$T>U\quad\Longleftrightarrow\quad r_T(m)>r_U(m).$$
This is the reverse lexicographic order on the row-index vectors
$(r_T(n),\dots,r_T(1))$: any two distinct vectors have a largest differing
coordinate, and the row numbers there are comparable. Thus it is a finite
strict total order on the $\lambda$-tabloids.

A $\lambda$-tableau is **column-standard** when its entries strictly increase
down each column. For a column-standard tableau $t$, let $c_t(a)$ be the
column containing label $a$. Since entries within each column are sorted, the
assignment $a\mapsto c_t(a)$ determines $t$ uniquely. For distinct
column-standard tableaux $t,u$, let $m$ be the largest label with
$c_t(m)\ne c_u(m)$, and define
$$
t\prec u\quad\Longleftrightarrow\quad c_t(m)<c_u(m).
$$
This is a finite strict total order on the column-standard tableaux; in words,
the largest label assigned to different columns is farther left in $t$ than
in $u$. For $\lambda=\varnothing$, there is one tabloid and one tableau, and
each is the sole element of its order.
