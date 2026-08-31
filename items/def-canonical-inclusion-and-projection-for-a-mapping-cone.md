---
id: def-canonical-inclusion-and-projection-for-a-mapping-cone
kind: definition
title: "The canonical inclusion and projection for a mapping cone"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-mapping-cone-of-a-chain-map, def-shift-of-a-chain-complex, def-chain-map]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Definition

Let $f:C_\bullet\to D_\bullet$ be a chain map. The **canonical inclusion**
$$j:D_\bullet\to\operatorname{Cone}(f)_\bullet$$
and the **canonical projection**
$$q:\operatorname{Cone}(f)_\bullet\to C[1]_\bullet$$
are defined degreewise by
$$j_n(y):=(y,0),\qquad q_n(y,x):=x.$$

With the cone differential and the shifted differential on $C[1]$, both maps
are chain maps, and $qj=0$.
