---
id: def-separated-morphism-schemes
kind: definition
title: Separated morphism of schemes
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-diagonal-morphism-scheme, def-closed-immersion-schemes, def-quasi-compact-and-quasi-separated-morphism, lem-diagonal-quasi-compact-iff-quasi-separated]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Definition 26.21.3 (tag 01KK), printed p.40"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  precheck: n/a
---

## Definition

Let $f:X\to S$ be a morphism of schemes and let
$\Delta_{X/S}:X\to X\times_S X$ be its diagonal morphism
([[def-diagonal-morphism-scheme]]).

- $f$ is **separated** if $\Delta_{X/S}$ is a closed immersion
  ([[def-closed-immersion-schemes]]).
- $f$ is **quasi-separated** if $\Delta_{X/S}$ is a quasi-compact morphism
  ([[def-quasi-compact-and-quasi-separated-morphism]]).

A scheme $Y$ is called separated, respectively quasi-separated, when the
structure morphism $Y\to\operatorname{Spec}\mathbb Z$ is separated, respectively
quasi-separated. The affine-intersection condition recorded under
[[def-quasi-compact-and-quasi-separated-morphism]] is the earlier definition;
its equivalence to quasi-compactness of $\Delta_{X/S}$ is proved in
[[lem-diagonal-quasi-compact-iff-quasi-separated]] on this page. Both properties are
properties of the morphism $f$ and of its diagonal, and neither is a condition
on the point-set topology of $X$ alone.
