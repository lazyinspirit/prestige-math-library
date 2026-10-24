---
id: def-noetherian-ring-and-module
kind: definition
title: "Noetherian commutative rings and modules"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-commutative-ring, def-left-and-right-modules, def-submodule, def-generated-cyclic-finitely-generated-and-free-modules, def-dependent-choice]
justified_by: []
aliases: []
landmark: false
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Definition 4.5.8"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
    - title: "The Stacks Project, Tag 00DV"
      url: "https://stacks.math.columbia.edu/tag/00DV"
pipeline_run: frontier-22
---

## Definition

Let $R$ be a commutative ring ([[def-commutative-ring]]) and let $M$ be an
$R$-module ([[def-left-and-right-modules]]).

The module $M$ is **Noetherian** if every submodule of $M$
([[def-submodule]]) is finitely generated
([[def-generated-cyclic-finitely-generated-and-free-modules]]).

The ring $R$ is **Noetherian** if its regular module ${}_RR$ is Noetherian.
Equivalently, every ideal of $R$ is finitely generated.

Under Dependent Choice ([[def-dependent-choice]]), this is equivalent to every
ascending chain of submodules or ideals stabilizing. The forward implication is
choice-free: the union of a nonstabilizing ascending chain cannot be finitely
generated. Conversely, from a submodule that is not finitely generated,
Dependent Choice successively selects an element outside the span of those
already selected, producing a nonstabilizing ascending chain.
