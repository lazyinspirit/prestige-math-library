---
id: def-noetherian-module
kind: definition
title: "Noetherian modules: every submodule is finitely generated"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-submodule, def-generated-cyclic-finitely-generated-and-free-modules]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Noetherian Modules, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf"
pipeline_run: null
---

## Definition

A left $R$-module $M$ is **Noetherian** when every submodule of $M$ is finitely generated ([[def-generated-cyclic-finitely-generated-and-free-modules]]). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in [[thm-equivalent-characterizations-of-noetherian-modules]].
