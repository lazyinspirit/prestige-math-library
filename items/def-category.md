---
id: def-category
kind: definition
title: "Category, object, morphism, domain, codomain, identity, composition, and hom-collection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: true
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

A **category** $\mathcal C$ consists of a class
$\operatorname{Ob}(\mathcal C)$ of **objects**, a class
$\operatorname{Mor}(\mathcal C)$ of **morphisms**, functions
$\operatorname{dom},\operatorname{cod}:\operatorname{Mor}(\mathcal C)\to
\operatorname{Ob}(\mathcal C)$, an **identity morphism**
$1_A:A\to A$ for every object $A$, and a **composite**
$g\circ f:A\to C$ whenever $f:A\to B$ and $g:B\to C$.

These data satisfy, whenever the composites are defined,

$$h\circ(g\circ f)=(h\circ g)\circ f,\qquad 1_B\circ f=f=f\circ1_A.$$

We write $\mathcal C(A,B)$, or $\operatorname{Hom}_{\mathcal C}(A,B)$, for the
**hom-collection** of morphisms with domain $A$ and codomain $B$. The object
class is allowed to be empty; then the morphism class is empty and all axioms
are vacuous.
