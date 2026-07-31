---
id: def-nullhomotopic-map-and-contractible-space
kind: definition
title: "Nullhomotopic maps and contractible spaces"
status: published
origin: session
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $f:X\to Y$ be continuous. The map $f$ is **nullhomotopic** if there is a point $y_0\in Y$ such that $f$ is homotopic to the constant map $c_{y_0}:X\to Y$, $c_{y_0}(x)=y_0$ ([[def-homotopy-relative-and-path-homotopy]]).

A nonempty topological space $X$ is **contractible** if every continuous map $f:X\to Y$ to every topological space $Y$ is nullhomotopic.

This definition separates the property of the space from the particular map $\operatorname{id}_X$. The next corollary proves that it is equivalent to the familiar condition that the identity map be nullhomotopic.

## Remarks

- Nonemptiness is included so that a contracting point can be named. The empty space is not called contractible under this convention.
- The constant to which a map is homotopic may depend on the map. Contractibility does not assert that two arbitrary constant maps into a disconnected target are homotopic.
