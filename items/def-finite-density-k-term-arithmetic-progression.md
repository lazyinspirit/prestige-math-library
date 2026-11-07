---
id: def-finite-density-k-term-arithmetic-progression
kind: definition
title: "A $k$-term arithmetic progression in an interval or cyclic group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-integers-modulo-n, thm-integers-modulo-n-basic-algebra]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§1, Theorem 1.2; §2, the interval and cyclic-group progression conventions used in the density-increment proof"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 10, Definitions 10.2 and 10.3 and Theorem 10.4; Chapter 11, §11.1"
verification:
  precheck: n/a
---

## Definition

Let $k\ge1$ and $N\ge1$. Write $[N]=\{1,2,\ldots,N\}$. An ordered $k$-term arithmetic progression in the interval $[N]$ is a tuple $(a,a+d,\ldots,a+(k-1)d)$ of integers with $d\ge1$ and $1\le a\le a+(k-1)d\le N$. An ordered $k$-term arithmetic progression in the cyclic group $G=\mathbb Z/N\mathbb Z$ is a tuple $(x,x+r,\ldots,x+(k-1)r)$ with $x,r\in G$ whose entries are pairwise distinct. A progression is contained in a set when every entry belongs to that set; in either ambient space it is proper when its entries are pairwise distinct.

## Definition references

[Gowers, *A new proof of Szemerédi’s theorem*, §1, Theorem 1.2 and §2](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 10, Definitions 10.2–10.3 and Theorem 10.4](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)
