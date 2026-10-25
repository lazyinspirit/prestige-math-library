---
id: def-simultaneous-diagonalisability-of-a-family
kind: definition
title: "Simultaneous diagonalisability: one basis that diagonalises every endomorphism in a family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-diagonalisable-endomorphism]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, §5'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Definition

A family $\mathcal T$ of endomorphisms of a finite-dimensional vector space $V$ is **simultaneously diagonalisable** if there is one ordered basis of $V$ in which the matrix of every $T\in\mathcal T$ is diagonal. Equivalently, $V$ has a basis consisting of vectors that are eigenvectors for every member of $\mathcal T$, matching the one-operator definition in [[def-diagonalisable-endomorphism]].

The empty family is simultaneously diagonalisable in every finite-dimensional space: any ordered basis works. On the zero space the empty ordered basis works for every family.
