---
id: def-elementary-row-operations-and-row-equivalence
kind: definition
title: "Elementary row operations and row equivalence for finite matrices over a field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-space, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §§1.2–1.3"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Definition

Let $F$ be a field and let $A\in M_{m\times n}(F)$. An **elementary row operation** on $A$ is one of the following operations, where row indices lie in $m$:

1. interchange two distinct rows $R_p$ and $R_q$;
2. replace $R_p$ by $cR_p$ for some nonzero $c\in F$;
3. replace $R_p$ by $R_p+cR_q$ for distinct $p,q$ and some $c\in F$.

Matrices $A,B\in M_{m\times n}(F)$ are **row equivalent**, written $A\sim B$, when a finite sequence of elementary row operations transforms $A$ into $B$. The empty sequence is allowed. Thus the definition also covers matrices with no rows or no columns.

