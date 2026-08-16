---
id: def-subobject-and-quotient-object
kind: definition
title: "Subobject and quotient object as mutual-factorisation classes of monomorphisms and epimorphisms"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-monomorphism-and-epimorphism, def-isomorphism-groupoid-and-connected-category,
       rem-category-theory-class-and-size-conventions]
justified_by: [thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Fix an object $C$ of a category $\mathcal C$. Two monomorphisms $m:A\to C$ and $n:B\to C$ ([[def-monomorphism-and-epimorphism]]) **mutually factor** when there are morphisms $u:A\to B$ and $v:B\to A$ such that
$$m=n\circ u,\qquad n=m\circ v.$$
A **subobject of $C$** is an equivalence class of monomorphisms into $C$ under mutual factorisation. The class represented by $m$ is denoted $[m]$. For representatives, write $[m]\le[n]$ when $m$ factors through $n$.

Dually, two epimorphisms $q:C\to Q$ and $r:C\to R$ mutually factor when $r=u\circ q$ and $q=v\circ r$ for suitable $u:Q\to R$ and $v:R\to Q$. A **quotient object of $C$** is an equivalence class of epimorphisms out of $C$. Quotients are ordered by $[q]\le[r]$ when $r$ factors through $q$, the orientation dual to that for subobjects.

The equivalence-relation and representative-independence obligations are discharged by [[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]].

**What $[m]$ is, and what it is not.** The monomorphisms into $C$ generally form a proper class — already in $\mathbf{Set}$, where every singleton admits a monomorphism into a one-point set — so $[m]$ is a class and not a set. Under this development's convention a class abbreviates a formula and is not an additional entity ([[rem-category-theory-class-and-size-conventions]]), so $[m]$ is never a member of anything and the subobjects of $C$ are never gathered into a collection. Every statement written with the bracket notation below is shorthand for a statement about representatives: $[m]\le[n]$ means that $m$ factors through $n$, which the next two items show depends only on the two classes, and $[m]=[n]$ means that $m$ and $n$ mutually factor. Size conditions on subobjects are likewise stated on representatives later on this page, never by measuring a collection of classes.
