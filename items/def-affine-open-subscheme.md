---
id: def-affine-open-subscheme
kind: definition
title: "Affine open subschemes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scheme, def-affine-scheme]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Definition 9.1 and Lemma 9.2"
      url: "https://stacks.math.columbia.edu/tag/01IO"
---
## Definition

For a scheme $X$ and an open set $U\subseteq X$, the **open subscheme** $U$
means $(U,\mathcal O_X|_U)$. It is an **affine open subscheme** when this
restricted locally ringed space is affine; thus “affine open” always includes
its restricted structure sheaf, not merely an open subset of $|X|$.
