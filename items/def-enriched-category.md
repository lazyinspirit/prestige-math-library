---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-enriched-category.json
  precheck: n/a
id: def-enriched-category
kind: definition
title: "Enriched category over a monoidal base"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category]
aliases: []
landmark: true
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


For the diagrams below, write $H_{AB}=\mathcal A(A,B)$. All objects and
arrows lie in $\mathcal V$, and $1$ on an arrow denotes the identity of
the corresponding tensor factor. The associativity equation is the equality
of the two paths from the upper left object to $H_{AD}$:

```tikzcd
(H_{CD}\otimes H_{BC})\otimes H_{AB}
  \arrow[rr, "\alpha_{H_{CD},H_{BC},H_{AB}}"]
  \arrow[d, "M_{B,C,D}\otimes 1"']
  && H_{CD}\otimes(H_{BC}\otimes H_{AB})
     \arrow[d, "1\otimes M_{A,B,C}"] \\
H_{BD}\otimes H_{AB} \arrow[dr, "M_{A,B,D}"']
  && H_{CD}\otimes H_{AC} \arrow[dl, "M_{A,C,D}"] \\
  & H_{AD}
```

The two unit equations give the following squares. Their upper arrows use
the inverse unitors, with exactly the directions appearing in the definition.

```tikzcd
H_{AB} \arrow[r, "\lambda_{H_{AB}}^{-1}"] \arrow[d, "1_{H_{AB}}"']
  & \mathbf 1\otimes H_{AB} \arrow[d, "j_B\otimes 1"] \\
H_{AB}
  & H_{BB}\otimes H_{AB} \arrow[l, "M_{A,B,B}"]
```

```tikzcd
H_{AB} \arrow[r, "\rho_{H_{AB}}^{-1}"] \arrow[d, "1_{H_{AB}}"']
  & H_{AB}\otimes\mathbf 1 \arrow[d, "1\otimes j_A"] \\
H_{AB}
  & H_{AB}\otimes H_{AA} \arrow[l, "M_{A,A,B}"]
```

These illustrations restate the equations above; no strictness of the
monoidal category is assumed, and the definition is independent of the figures.
