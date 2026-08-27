---
id: def-additive-category
kind: definition
title: "Additive category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-preadditive-category, def-initial-terminal-and-zero-object, prop-empty-limits-and-colimits-are-terminal-and-initial-objects, prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Definition 1.2.1"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
    - title: "The Stacks Project, Section 12.3, Definition 12.3.8"
      url: "https://stacks.math.columbia.edu/tag/09SE"
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, Definition 2.1"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Definition

An **additive category** is a preadditive category
([[def-preadditive-category]]) with all finite biproducts.

Equivalently, a preadditive category is additive when it has a zero object and
binary biproducts: a zero object is both initial and terminal
([[def-initial-terminal-and-zero-object]]) and therefore supplies both the empty
coproduct and the empty product
([[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]); their
canonical comparison is the unique endomorphism of the zero object and hence
the identity, so this is an empty biproduct. Meanwhile,
binary biproducts iterate
using the canonical associativity and unitality isomorphisms
([[prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism]])
to give every finite biproduct.
