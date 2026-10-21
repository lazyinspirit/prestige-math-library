---
id: alg-seifert-surface-from-diagram
kind: algorithm
title: "Seifert disk-and-band construction from an oriented knot diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-regular-oriented-link-diagram
  - def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-higher-dimensional-spheres-are-simply-connected
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
    - title: "Danny Calegari, Introduction to Knot Theory, §3.2, pp.24–26"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Seifert's algorithm and its disk-and-band construction"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "The all-at-once oriented smoothing and disk-and-band algorithm"
---

## Definition

Assume the Axiom of Countable Choice. Let $D$ be a finite regular oriented link diagram with exactly one component, and let $c$ be its number of crossings. Perform the following construction in its projection sphere $S^2$.

1. Choose a point $q\in S^2$ outside the finite diagram. In pairwise disjoint small disks about the crossings, replace each crossing by the unique noncrossing smoothing compatible with the strand orientations. Let the resulting oriented circles be the Seifert circles and let $s$ be their number.
2. For each Seifert circle $C$, take the closure of the component of $S^2\setminus C$ that does not contain $q$. Under the stated choice axiom, each such region is an embedded compact disk. The finite family of disk regions is nested or disjoint. Orient each disk to induce the given orientation of its boundary circle, then place nested disks at distinct nearby heights ordered by inclusion; the resulting disk interiors are pairwise disjoint in $S^3$.
3. For every original crossing, attach one rectangular band along short boundary intervals on the two smoothing arcs. A half-twist means a single $180$-degree turn of the band across the crossing neighborhood. Choose its direction, endpoint orientations, and over/under order to match the original crossing.
4. Return the finite disk-and-band construction data together with $(s,c)$.

The returned data are a finite attached two-dimensional complex. This algorithm's definition alone does not assert that the resulting image is embedded, is a surface, is connected, or has the original knot as boundary; the separate correctness lemma establishes those properties.

## Definition references

[[def-regular-oriented-link-diagram|Regular oriented link diagrams and their over/under data]]

[[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram|The orientation-compatible smoothing and Seifert circles]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The two disk regions bounded by a nullhomotopic circle on the sphere under countable choice]]

[[thm-higher-dimensional-spheres-are-simply-connected|Simple connectivity of the projection sphere]]

[[def-countable-choice|The Axiom of Countable Choice]]
