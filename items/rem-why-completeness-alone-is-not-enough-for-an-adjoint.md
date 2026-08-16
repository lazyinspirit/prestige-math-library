---
id: rem-why-completeness-alone-is-not-enough-for-an-adjoint
kind: remark
title: "Why completeness alone cannot replace a solution set or the SAFT smallness hypotheses"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-cardinality-sized-products-or-coproducts-force-a-preorder, cor-small-complete-or-cocomplete-categories-are-preorders, rem-category-theory-class-and-size-conventions]
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, section 6.3"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

Completeness supplies limits of small diagrams. It does not make the class of candidates in a comma category small, does not supply a jointly weakly initial set, and does not turn a proper collection of subobjects into a small diagram. Those are the roles of the solution-set condition in GAFT and the coseparating, well-powered, or explicit intersection-preservation data in SAFT.

The distinction disappears only under restrictive size hypotheses, and then only assuming Choice, which both of the following results carry as a hypothesis. Assuming Choice, a small complete category is forced toward preorder behaviour by [[cor-small-complete-or-cocomplete-categories-are-preorders]], and sufficiently large products or coproducts force the same conclusion by [[thm-cardinality-sized-products-or-coproducts-force-a-preorder]]. Large-category claims here use the definable-class convention of [[rem-category-theory-class-and-size-conventions]].
