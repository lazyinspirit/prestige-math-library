---
id: rem-category-theory-class-and-size-conventions
kind: remark
title: "Class-sized category theory in ZFC: definable-class schemas, small and locally small categories, and why $\\mathbf{CAT}$ is not formed"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-language-of-set-theory, thm-burali-forti, thm-transfinite-recursion]
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

The word **class** in this development is an abbreviation for a formula in the
language of set theory, as described by [[def-language-of-set-theory]]. It is not
an additional set. A category may therefore have a definable class of objects
and a definable class of morphisms. Quantification over such a category is a
schema: each use expands to an ordinary formula of ZFC.

A category is **small** when its objects and morphisms form sets, and **locally
small** when each hom-collection is a set. The category $\mathbf{Cat}$ used below
has small categories as objects; its hom-categories are sets or locally small
categories as asserted in the relevant result. We do not form a category
$\mathbf{CAT}$ of all large categories. Doing so as though all classes were
members of a larger set would conflict with the same size obstruction exhibited
for the ordinals by [[thm-burali-forti]]. Class recursion, when used, is only the
definable schema licensed by [[thm-transfinite-recursion]].

