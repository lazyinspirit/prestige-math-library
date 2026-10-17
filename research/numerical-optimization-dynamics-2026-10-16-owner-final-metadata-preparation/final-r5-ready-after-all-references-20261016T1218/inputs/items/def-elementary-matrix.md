---
id: def-elementary-matrix
kind: definition
title: "Elementary matrices obtained by applying one elementary row operation to an identity matrix"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-elementary-row-operations-and-row-equivalence, def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.3"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Definition

Let $F$ be a field and $n\in\mathbb N$. An **elementary matrix** is a matrix $E\in M_n(F)$ obtained by applying one elementary row operation ([[def-elementary-row-operations-and-row-equivalence]]) to the identity matrix $I_n$ ([[def-matrix-product-and-identity-matrix]]).

Accordingly there are three types: $E_{pq}$ interchanges rows $p$ and $q$; $D_p(c)$ multiplies row $p$ by $c\ne0$; and $T_{pq}(c)$ adds $c$ times row $q$ to the distinct row $p$. When $n=0$ there is no elementary matrix because there is no row on which to perform an operation.

