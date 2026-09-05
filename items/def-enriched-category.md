---
id: def-enriched-category
kind: definition
title: "Enriched category over a monoidal base"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.2"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Definition

Let
$(\mathcal V,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ be a monoidal category
([[def-monoidal-category]]).

A **$\mathcal V$-enriched category**, or **$\mathcal V$-category**, consists of

- a set $\operatorname{Ob}(\mathcal A)$ of objects;
- for every ordered pair $A,B\in\operatorname{Ob}(\mathcal A)$, an object
  $\mathcal A(A,B)$ of $\mathcal V$;
- for every triple $A,B,C$, a composition morphism
  $$M_{A,B,C}:\mathcal A(B,C)\otimes\mathcal A(A,B)\longrightarrow\mathcal A(A,C);$$
- for every object $A$, an identity morphism
  $$j_A:\mathbf 1\longrightarrow\mathcal A(A,A);$$

such that the following diagrams commute.

For every $A,B,C,D$, the two composites

$$((\mathcal A(C,D)\otimes\mathcal A(B,C))\otimes\mathcal A(A,B))\rightrightarrows\mathcal A(A,D)$$

agree, namely

$$M_{A,B,D}\circ(M_{B,C,D}\otimes 1)=M_{A,C,D}\circ(1\otimes M_{A,B,C})\circ\alpha_{\mathcal A(C,D),\mathcal A(B,C),\mathcal A(A,B)}.$$

For every $A,B$, the left and right unit laws hold:

$$M_{A,B,B}\circ(j_B\otimes 1)\circ\lambda^{-1}_{\mathcal A(A,B)}=1_{\mathcal A(A,B)},$$

$$M_{A,A,B}\circ(1\otimes j_A)\circ\rho^{-1}_{\mathcal A(A,B)}=1_{\mathcal A(A,B)}.$$

The order of the two hom-objects in the tensor product is part of the
definition: the factor $\mathcal A(B,C)$ stands on the left and
$\mathcal A(A,B)$ on the right because composition is "first
$A\to B$, then $B\to C$".

## Remarks

The object collection is required here to be a set. This is the standing
size convention for the present page, and it is what makes later statements
about $\mathcal V\text{-}\mathbf{Cat}$ honest inside the library's current
foundations.
