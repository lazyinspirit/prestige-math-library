---
id: def-well-powered-and-co-well-powered-category
kind: definition
title: "Well-powered and co-well-powered categories, and supplied well-powerings"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-subobject-and-quotient-object, def-small-locally-small-and-large-category,
       def-monomorphism-and-epimorphism, rem-category-theory-class-and-size-conventions]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, section V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Definition

A subobject of an object $C$ is a mutual-factorisation class of monomorphisms into $C$ ([[def-subobject-and-quotient-object]]), and under the class convention of this development such a class is a formula rather than a set ([[rem-category-theory-class-and-size-conventions]]). So "the subobjects of $C$ form a set" cannot be stated by gathering the subobjects into a collection and measuring it. The size condition is stated on representatives instead, which is the form the sources use and the form every result below actually spends.

A category $\mathcal C$ is **well-powered** when, for every object $C$, there is a **set** $M_C$ of monomorphisms into $C$ ([[def-monomorphism-and-epimorphism]]) containing a representative of every subobject class of $C$: every monomorphism into $C$ mutually factors with some member of $M_C$. It is **co-well-powered** when, for every $C$, there is a set of epimorphisms out of $C$ containing a representative of every quotient-object class.

A **supplied well-powering** gives such a set $M_C$ **as data for every object at once** — that is, the whole assignment $C\mapsto M_C$. A **supplied co-well-powering** is the dual datum. The difference from plain well-poweredness is not size but scope of selection: well-poweredness asserts of each object separately that a representative set exists, whereas a proof that needs one representative set per object across a proper class of objects would have to select them, and a supplied well-powering hands that assignment over rather than choosing it.
