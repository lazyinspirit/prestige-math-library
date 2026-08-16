---
id: def-number-of-sylow-p-subgroups
kind: definition
title: "The number $n_p(G)$ of Sylow $p$-subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sylow-p-subgroup]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Definition

For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is nonzero.
