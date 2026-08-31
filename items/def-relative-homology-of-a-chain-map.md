---
id: def-relative-homology-of-a-chain-map
kind: definition
title: "The relative homology of a chain map"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-mapping-cone-of-a-chain-map, def-homology-object-of-a-chain-complex]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Definition

Let $f:C_\bullet\to D_\bullet$ be a chain map in an abelian category. The
**relative homology** of $f$ is the homology of its mapping cone:
$$H_n(D,C;f):=H_n(\operatorname{Cone}(f)).$$

This is an algebraic definition attached to a chain map. On this page it makes
no separate topological claim about pairs of spaces.
