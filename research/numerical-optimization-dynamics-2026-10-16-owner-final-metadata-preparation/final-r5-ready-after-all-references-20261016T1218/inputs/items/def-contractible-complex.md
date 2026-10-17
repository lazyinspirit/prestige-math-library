---
id: def-contractible-complex
kind: definition
title: "A contractible complex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-homotopy-equivalence, def-null-homotopic-chain-map]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-25
---

## Definition

A chain complex $C_\bullet$ is **contractible** if its identity map
$$1_C:C_\bullet\to C_\bullet$$
is null-homotopic.

Equivalently, $C_\bullet$ is contractible if it is chain homotopy equivalent
to the zero complex.
