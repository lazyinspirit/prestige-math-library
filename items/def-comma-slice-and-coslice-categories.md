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

For an object $C\in\mathcal C$, the **slice category** $\mathcal C/C$ is
$(1_{\mathcal C}\downarrow C)$, whose objects are arrows into $C$.
The **coslice category** $C/\mathcal C$ is
$(C\downarrow1_{\mathcal C})$, whose objects are arrows out of $C$.

