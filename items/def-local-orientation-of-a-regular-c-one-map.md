---
id: def-local-orientation-of-a-regular-c-one-map
kind: definition
title: "Local orientation of a regular $C^1$ Euclidean map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-jacobian-determinant-of-a-c-one-map, def-regular-locus-of-a-c-one-map, def-ordered-field, thm-invertible-matrices-correspond-to-linear-isomorphisms, cor-invertible-matrix-has-unit-determinant]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §8.5"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R^n$ be $C^1$. At a regular point, the derivative matrix is invertible ([[def-regular-locus-of-a-c-one-map]], [[thm-invertible-matrices-correspond-to-linear-isomorphisms]]), so its determinant is a nonzero real number ([[cor-invertible-matrix-has-unit-determinant]], [[def-ordered-field]]).

A regular $C^1$ map is locally orientation-preserving where $\det Df>0$ and locally orientation-reversing where $\det Df<0$. These are the two possible signs of the Jacobian determinant [[def-jacobian-determinant-of-a-c-one-map]] at a regular point.
