---
id: def-link-seifert-pairing-and-matrix
kind: definition
title: "Seifert pairing and matrix of an oriented link"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-one-variable-alexander-module-of-an-oriented-link
  - lem-link-seifert-pairing-well-defined
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
justified_by:
  - lem-link-seifert-pairing-well-defined
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "W. B. Raymond Lickorish, An Introduction to Knot Theory, Graduate Texts in Mathematics 175, Springer (1997)"
      url: "https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf"
      locator: "Chapter 8, §8.A, printed pp. 79–83: Seifert-surface and pairing conventions; the full 213-page book PDF was inspected."
---
## Definition

Assume full AC. Let $L=K_1\cup\cdots\cup K_r\subset S^3$ be a nonempty smooth oriented link, let $F$ be a connected compact smooth oriented embedded surface whose oriented boundary is $L$, and let $g$ be its genus. The compact-surface normal form gives $H_1(F;\mathbb Z)\cong\mathbb Z^{2g+r-1}$. Orient the normal line of $F$ by requiring $(n,u,v)$ to be a positive ambient frame whenever $(u,v)$ is a positive tangent frame of $F$. For an ordered integral basis $a_1,\dots,a_m$, with $m=2g+r-1$, choose circle-cycle representatives on $F$ and let $a_i^+$ be a sufficiently small copy in the positive normal direction. For disjoint oriented embedded circles $C,D\subset S^3$, define $\operatorname{lk}(C,D)$ by $[C]=\operatorname{lk}(C,D)[\mu_D]$ in $H_1(S^3\setminus D;\mathbb Z)$, where $\mu_D$ is the positive meridian whose oriented normal disk follows the positive tangent to $D$ in the ambient orientation; extend linking bilinearly to finite sums of such circles. Define the positive-push Seifert matrix by $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. The link-surface pairing lemma proves this matrix is independent of the chosen cycle representatives and push-off level. The surface and basis remain part of the data; this definition asserts no link-only matrix invariance.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented links in the oriented three-sphere]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The rank of first homology for a compact oriented surface with boundary]]

[[def-one-variable-alexander-module-of-an-oriented-link|Alexander-duality meridian coordinates for an oriented link complement]]

[[lem-link-seifert-pairing-well-defined|Well-definedness of the positive-push pairing for link surfaces]]

[[def-axiom-of-choice|Full choice for the Alexander-duality linking convention]]
