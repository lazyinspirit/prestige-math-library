---
id: rem-choice-behind-limit-and-colimit-functors
kind: remark
title: "A limit for each diagram need not provide a chosen limit functor without a simultaneous choice of representatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-chosen-limits-and-colimits-assemble-into-functors, def-axiom-of-choice, thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Remark following Lemma 3.4.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Remark

Existence of a limit for each diagram does not itself specify one limiting cone
for every diagram. The functors in
[[thm-chosen-limits-and-colimits-assemble-into-functors]] require simultaneous
choices of such cones, an application of an appropriate Axiom of Choice
([[def-axiom-of-choice]]) when the diagrams and available cones form sets.

Once choices are made, no further arbitrary choices define the action on
natural transformations: the universal property forces it. Different systems
of chosen limits give naturally isomorphic limit functors because any two
limits have unique compatible isomorphisms
([[thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism]]).
For a proper class of diagrams, the needed selection is a separate global or
universe-level convention, not a consequence of the set-sized Axiom of Choice.
