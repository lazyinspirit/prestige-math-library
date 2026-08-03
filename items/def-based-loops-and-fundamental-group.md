---
id: def-based-loops-and-fundamental-group
kind: definition
title: "Based loops and the fundamental group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-path-connected, def-homotopy-relative-and-path-homotopy,
       cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]
justified_by: [thm-fundamental-group-laws]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Chapter 1, Proposition 1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a topological space and let $x_0\in X$. A **based loop at $x_0$**
is a path $\alpha:I\to X$ with $\alpha(0)=x_0=\alpha(1)$
([[def-path-connected]]). Two based loops are equivalent when they are
path-homotopic relative to the endpoints. This is an equivalence relation by
[[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]].

The **fundamental group set** of $X$ at $x_0$ is

$$\pi_1(X,x_0):=\{\,[\alpha]:\alpha\text{ is a based loop at }x_0\,\}.$$

For composable paths, write

$$(\alpha*\beta)(s):=\begin{cases}\alpha(2s),&0\leq s\leq\tfrac12,\\ \beta(2s-1),&\tfrac12\leq s\leq1.\end{cases}$$

The finite closed-pasting argument already carried out in
[[def-path-connected]] shows that this is a path. The multiplication proposed
on loop classes is

$$[\alpha][\beta]:=[\alpha*\beta].$$

**Order convention.** The product $[\alpha][\beta]$ traverses $\alpha$ first
and $\beta$ second. Every product on this page uses this convention.

The constant loop at $x_0$ is denoted $c_{x_0}$, and the reversed loop is
$\bar\alpha(s):=\alpha(1-s)$. The next theorem proves that multiplication is
independent of representatives and that $[c_{x_0}]$ and $[\bar\alpha]$ are the
identity and inverse required by the group axioms.
