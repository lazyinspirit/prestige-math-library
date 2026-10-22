---
id: def-gr-fx-thin-path-groupoid
kind: definition
title: Thin path groupoid
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gr-fx-thin-paths
  - prop-gr-fx-thin-path-quotient-groupoid
  - def-equivalence-relation
  - def-category
dependency_roles:
  def-gr-fx-thin-paths: mathematical-premise
  prop-gr-fx-thin-path-quotient-groupoid: mathematical-premise
  def-equivalence-relation: mathematical-premise
  def-category: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "Urs Schreiber and Konrad Waldorf, Parallel Transport and Functors, §2.1, Definition 2.4"
      url: "https://arxiv.org/pdf/0705.0452"
      locator: "PDF p. 7, the category of points and thin-homotopy classes of smooth paths. This definition uses the piecewise-smooth quotient whose groupoid laws are proved in the local proposition."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

A **groupoid** is a category in which every morphism has a two-sided inverse. For an open subset $U$ of a smooth manifold, the **thin path groupoid** $\Pi^{\mathrm{thin}}_1(U)$ is the category whose objects are the points of $U$ and whose morphisms from $x$ to $y$ are tagged triples $(x,y,[\gamma])$, where $[\gamma]$ is a thin-homotopy class of piecewise-smooth paths from $x$ to $y$; composition, identities, and inverses are those of Proposition [[prop-gr-fx-thin-path-quotient-groupoid]].

## Definition references

[[def-gr-fx-thin-paths]]

[[prop-gr-fx-thin-path-quotient-groupoid]]

[[def-equivalence-relation]]

[[def-category]]
