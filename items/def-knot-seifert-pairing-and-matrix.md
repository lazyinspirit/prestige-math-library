---
id: def-knot-seifert-pairing-and-matrix
kind: definition
title: "Seifert pairing and matrix of an oriented knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-oriented-seifert-surface
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice-principle-for-foliation-pair
  - lem-countable-choice-sequence-and-product-formulations-are-equivalent
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-linking-number-equals-signed-intersection
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by:
  - lem-seifert-pairing-well-defined
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 8.A"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Section 6.2.3"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
---

## Definition

Assume the Axiom of Choice. Let $K:S^1\hookrightarrow S^3$ be a smooth oriented knot in the standard oriented three-sphere, and let $F\subset S^3$ be a connected compact smooth oriented embedded surface with boundary $K$, oriented so that its boundary orientation is the given orientation of $K$. Let $g$ be the nonnegative integer determined by $\chi(F)=1-2g$. Choose an ordered integral basis $a_1,\ldots,a_{2g}$ of the first singular homology group $H_1(F;\mathbb Z)$, represented by integral one-cycles on $F$. Orient the normal line of $F$ by requiring $(n,u,v)$ to be positively oriented in $S^3$ whenever $(u,v)$ is a positive tangent basis of $F$. The positive push-off $a_i^+$ is the cycle carried to a sufficiently small positive normal level in a bicollar of $F$.

For disjoint oriented closed curves $J,L\subset S^3$, orient a meridian $\mu_L$ of $L$ so that a positive tangent to $L$ followed by a positive basis of its normal disk gives the ambient orientation. The linking number $\operatorname{lk}(J,L)$ is the integer determined by $[J]=\operatorname{lk}(J,L)[\mu_L]$ in $H_1(S^3\setminus L;\mathbb Z)$, using the Alexander-duality identification that sends $[\mu_L]$ to $1$. Extend linking additively over integral one-cycles. The Seifert pairing is $\theta_F(x,y)=\operatorname{lk}(x^+,y)$, and its matrix in the chosen basis is $V=(V_{ij})_{i,j=1}^{2g}$, where $V_{ij}=\theta_F(a_i,a_j)=\operatorname{lk}(a_i^+,a_j)$. The surface and basis are part of the data; this definition asserts no knot-only matrix invariant.

## Definition references

[[def-oriented-seifert-surface|A Seifert surface is connected, compact, smooth, oriented, embedded, and has the oriented knot as its boundary; its genus satisfies $\chi(F)=1-2g(F)$.]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|A genus-$g$ surface with one boundary component has $H_1(F;\mathbb Z)\cong\mathbb Z^{2g}$ and the standard handle normal form.]]

[[def-one-variable-alexander-module-of-an-oriented-link|For one component, Alexander duality normalizes the positive meridian as the generator of $H_1(S^3\setminus K;\mathbb Z)$.]]

[[thm-linking-number-equals-signed-intersection|The topological linking number is the positive-meridian coefficient and agrees with the signed crossing and surface-intersection conventions.]]

[[def-axiom-of-choice|Full Axiom of Choice used by the Alexander-duality linking convention.]]

[[thm-choice-implies-dependent-implies-countable-choice|Full choice implies the countable-choice hypothesis of the surface normal-form suppliers.]]

[[lem-seifert-pairing-well-defined|The linking formula descends to a bilinear pairing on homology classes and is independent of the small positive push-off.]]
