---
id: def-comma-slice-and-coslice-categories
kind: definition
title: "Comma category, slice category, and coslice category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

For functors $S:\mathcal A\to\mathcal C$ and
$T:\mathcal B\to\mathcal C$ ([[def-functor-and-contravariant-functor]]), the
**comma category** $(S\downarrow T)$ has objects
$(A,B,f)$ with $f:SA\to TB$. A morphism
$(a,b):(A,B,f)\to(A',B',f')$ satisfies

$$T(b)\circ f=f'\circ S(a).$$

Identities and composites are componentwise. Functoriality of $S,T$ shows that
the displayed square remains commutative under composition, and the category
axioms follow from [[def-category]].

For an object $C\in\mathcal C$, let
$\Delta_C:\mathbf 1\to\mathcal C$ be the functor from the one-object,
identity-only category that selects $C$. The **slice category** is
$\mathcal C/C=(1_{\mathcal C}\downarrow\Delta_C)$: its objects are arrows
$f:A\to C$, and a morphism from $f:A\to C$ to $f':A'\to C$ is an arrow
$a:A\to A'$ with $f'\circ a=f$. The **coslice category** is
$C/\mathcal C=(\Delta_C\downarrow1_{\mathcal C})$: its objects are arrows
$f:C\to A$, and a morphism from $f:C\to A$ to $f':C\to A'$ is an arrow
$a:A\to A'$ with $a\circ f=f'$.
