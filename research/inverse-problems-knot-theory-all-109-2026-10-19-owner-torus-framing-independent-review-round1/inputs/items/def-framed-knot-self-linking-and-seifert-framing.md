---
id: def-framed-knot-self-linking-and-seifert-framing
kind: definition
title: "Framed knots, self-linking, and the Seifert framing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-normal-and-conormal-bundles-of-an-embedded-submanifold,
       prop-normal-and-conormal-bundles-are-smooth-vector-bundles,
       def-smooth-bundle-metric,
       def-oriented-crossing-sign-writhe-and-blackboard-framing,
       alg-oriented-linking-number-from-diagram,
       thm-oriented-linking-number-scan-terminates-and-is-correct,
       lem-framed-knot-push-off-self-linking-well-defined,
       def-countable-choice]
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
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §§3, 5.1, pp. 3–9 and 17–18"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definitions 3.6–3.8; §5.1, Definition 5.1 and Theorem 5.2, pp. 8–9 and 17"
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, discussion of self-linking, writhe, and the Seifert-surface intersection characterization, pp. 27–29"
---

## Definition

Assume the Axiom of Countable Choice. For an oriented smooth knot
$K:S^1\hookrightarrow S^3$, its normal bundle is
$\nu K=TS^3|_K/TK$, oriented so that a positive tangent to $K$ followed by a
positive basis of a normal fibre gives the ambient orientation. A **framing**
of $K$ is a homotopy class through smooth nowhere-zero sections of $\nu K$.
The normal bundle is made a smooth vector bundle under this axiom; a framed
knot includes the section class as data, not a choice made afterwards. For the
relative integer use the round metric transferred from the unit sphere in
$\mathbb R^4$ by the explicit diffeomorphism
$$x\longmapsto\left(\frac{2x}{1+\lVert x\rVert^2},\frac{\lVert x\rVert^2-1}{1+\lVert x\rVert^2}\right),\qquad\infty\longmapsto(0,0,0,1).$$
It induces a smooth bundle metric on $\nu K$. The resulting winding number is
independent of the metric: any two smooth fibre metrics interpolate through
positive metrics and the corresponding angle maps are homotopic.

Given a reference framing $[s_0]$ and another framing $[s_1]$, use a bundle
metric and the positive quarter-turn $J$ on each oriented normal plane to write
the normalized representative of $s_1$ as
$$s_1(x)=\cos\theta(x)s_0(x)+\sin\theta(x)Js_0(x).$$
The resulting map $S^1\to S^1$ has a continuous angle lift along a parameter
interval $[0,1]$: subdivide into finitely many intervals whose images lie in
open semicircles and choose consecutive local arguments agreeing at endpoints.
Since the map is closed, the lift changes by $2\pi m$ for some $m\in\mathbb Z$;
different lifts differ by a constant multiple of $2\pi$, and homotopies keep
$m$ fixed. This integer $m$ is the **relative framing integer** of $[s_1]$
with respect to $[s_0]$. Thus, once a reference framing is supplied, the
framing classes are an integer torsor; no absolute integer is assigned before
choosing a reference.

The **self-linking number** of a framed knot $(K,[s])$ is the linking number
of $K$ with a sufficiently small push-off along $s$, oriented parallel to $K$.
The push-off and its integer are independent of the representative section,
small radius, and normalized tubular chart by the preceding well-definedness
result.

If a compact oriented surface $\Sigma$ is supplied with boundary $K$, its
**Seifert framing relative to $\Sigma$** is the homotopy class of the inward
unit conormal to $K$ in $\Sigma$, viewed as a nonzero normal section to $K$ in
$S^3$. This definition is relative to the supplied surface; it neither asserts
that every knot bounds such a surface nor asserts the self-linking-zero result.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots in the three-sphere]]

[[def-countable-choice|Countable-choice hypothesis for smooth normal bundles]]

[[def-normal-and-conormal-bundles-of-an-embedded-submanifold|Normal bundle quotient]]

[[prop-normal-and-conormal-bundles-are-smooth-vector-bundles|Smooth structure on the normal bundle]]

[[def-smooth-bundle-metric|Smooth metric on each normal fibre]]


[[lem-framed-knot-push-off-self-linking-well-defined|Well-definedness of small framed push-offs]]

[[alg-oriented-linking-number-from-diagram|Diagram linking number used for self-linking]]

## Remarks

For a link component, self-linking is computed in the two-component sublink
formed by that component and its push-off; crossings with other link components
do not enter. The total writhe of a link remains the signed sum over all
crossings and is a separate quantity used for polynomial normalizations.
