---
id: def-gts-johnston-log-cy-compactification
kind: definition
title: Gross-Siebert log Calabi-Yau compactification convention
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
deps:
  - def-cartier-divisor
  - def-effective-cartier-divisor
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-sheaf-relative-differentials
  - def-smooth-morphism-schemes
  - def-gts-log-cy-pair-toric-degeneration-and-scattering-data
dependency_roles:
  def-cartier-divisor: mathematical-premise
  def-effective-cartier-divisor: mathematical-premise
  def-invertible-sheaf: mathematical-premise
  def-invertible-sheaf-of-cartier-divisor: mathematical-premise
  def-sheaf-relative-differentials: mathematical-premise
  def-smooth-morphism-schemes: mathematical-premise
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Sam Johnston, Quantum periods, toric degenerations and intrinsic mirror symmetry
      url: https://arxiv.org/pdf/2501.01408v3
      locator: §4.1, Definition 4.1, the Gross-Siebert log Calabi-Yau compactification convention
---

## Definition

Let $U$ be a quasiprojective variety over a field of characteristic zero. A Gross-Siebert log Calabi-Yau compactification datum, in the convention used in Johnston §4.1, consists of a projective variety $Y$ containing $U$ as an open subvariety and a boundary divisor $B=\sum_{i=1}^r B_i=Y\setminus U$ with normal crossings, together with a chosen canonical divisor $K_Y$, for which
$$K_Y+B=\sum_{i=1}^r a_iB_i,\qquad a_i\ge0.$$
The equality is in the source's divisor convention. Each $B_i$ is an effective Cartier divisor on the smooth compactifications used in this page. The associated invertible sheaves and canonical line are those given by the Cartier-divisor and relative-differential definitions cited below.

This source convention allows a boundary-effective log canonical divisor. It is therefore distinct from the stricter smooth log Calabi-Yau pair convention $K_Y(B)\cong\mathcal O_Y$. A use must name which convention is intended; this definition does not assert existence of a compactification or an intrinsic mirror algebra.

## Definition references

[[def-cartier-divisor]]

[[def-effective-cartier-divisor]]

[[def-invertible-sheaf]]

[[def-invertible-sheaf-of-cartier-divisor]]

[[def-sheaf-relative-differentials]]

[[def-smooth-morphism-schemes]]

[[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]]
