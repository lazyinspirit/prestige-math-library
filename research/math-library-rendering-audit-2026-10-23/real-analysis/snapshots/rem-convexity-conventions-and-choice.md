---
id: rem-convexity-conventions-and-choice
kind: remark
title: "Convexity conventions, endpoint scope, dyadic approximation, and the exact use of the Axiom of Choice in the midpoint-convex counterexample"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-axiom-of-choice, lem-hamel-basis-exists]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
    - title: "P. Green and W. Gustin, On the gap between convexity and midpoint convexity"
      url: "https://doi.org/10.4153/CJM-1950-046-x"
pipeline_run: null
---

The continuity conclusion for a convex function is an interior conclusion: a convex function on a non-open interval need not have an endpoint derivative, and this development does not impose endpoint continuity beyond what a separate hypothesis supplies.

The midpoint-convex counterexample uses the Axiom of Choice exactly through the existence of a Hamel basis ([[def-axiom-of-choice]], [[lem-hamel-basis-exists]]). No choice principle is used in the dyadic induction or in the passage from continuous midpoint convexity to convexity.
