---
id: def-oriented-seifert-surface
kind: definition
title: "Oriented Seifert surfaces in the three-sphere"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §3.1, pp.21–22"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Definition 3.1; compact connected oriented spanning surfaces"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Definition 4.3.1 and the compact-surface genus formula"
---

## Definition

Assume the Axiom of Countable Choice. Let $K$ be a smooth oriented knot in the standard oriented three-sphere $S^3$. A **Seifert surface** for $K$ is a connected compact smooth oriented embedded surface $F\subset S^3$ with boundary set equal to $K$. Orient each boundary component so that an outward-pointing conormal in $F$, followed by a positive boundary tangent, is a positive basis of $TF$; the oriented boundary of $F$ must agree with the given orientation of $K$. For such a surface, its genus $g(F)$ is the unique nonnegative integer satisfying $\chi(F)=2-2g(F)-b$, where $b$ is the number of boundary components; here $b=1$, so $\chi(F)=1-2g(F)$. The compact-surface normal-form result supplies this integer under the stated choice axiom.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented knots in the standard three-sphere]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|Compact surface genus and Euler characteristic under countable choice]]

[[def-countable-choice|The Axiom of Countable Choice]]
