---
id: def-chain-homotopy-equivalence
kind: definition
title: "A chain homotopy equivalence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-homotopy, prop-identities-and-composites-of-chain-maps-are-chain-maps]
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

A chain map $f:C_\bullet\to D_\bullet$ is a **chain homotopy equivalence** if
there exists a chain map $g:D_\bullet\to C_\bullet$ such that
$$g\circ f\simeq1_C,\qquad f\circ g\simeq1_D.$$

Such a map $g$ is called a **homotopy inverse** of $f$.
