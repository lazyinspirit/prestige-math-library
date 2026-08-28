---
id: def-noetherian-ring-and-module
kind: definition
title: "Noetherian commutative rings and modules"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-commutative-ring, def-left-and-right-modules, def-submodule, def-generated-cyclic-finitely-generated-and-free-modules]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
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

For later contradiction arguments, we also use the standard equivalent
reformulation: a module or ring is Noetherian exactly when every ascending chain
of submodules or ideals stabilizes.
