---
id: cex-equal-total-degree-does-not-classify-maps-from-a-disconnected-domain-componentwise
kind: counterexample
title: Equal total degree does not classify maps from a disconnected domain
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
- thm-hopf-degree-classification-for-oriented-domains
- rem-connectedness-is-needed-for-a-single-degree-invariant
- prop-degree-is-multiplicative-under-composition
- prop-degree-is-homotopy-invariant-and-multiplicative-under-composition
- thm-degree-is-invariant-under-proper-smooth-homotopy
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-homotopy-relative-and-path-homotopy
- def-euclidean-spheres-and-closed-balls
- def-smooth-manifold
- thm-regular-value-formula-for-degree
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: constructive
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37 is stated only for connected $M$; disconnected sources have one contribution per closed oriented component, printed p.23
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the Hopf theorem assumes $M$ connected, printed pp.50-51
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, connected source hypotheses, printed p.146
---
## Statement refuted

For every closed oriented smooth $m$-manifold $M$, possibly disconnected, two
maps $M\to S^m$ are homotopic if and only if their total degree, the sum of the
signed degrees on the connected components, agrees. Counterexample: for $m\ge1$
take $M=S^m\sqcup S^m$, let $c$ be a constant map of $S^m$ into $S^m$, and put
$f=\operatorname{id}\sqcup\,c$ and $g=c\sqcup\operatorname{id}$. Both maps have
total degree $1$, but they are not homotopic.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the closed oriented smooth manifold $M=S^m\sqcup S^m$ with the orientation of each copy, the identity $\operatorname{id}$ of $S^m$ and a constant map $c:S^m\to S^m$ ([[def-euclidean-spheres-and-closed-balls]], [[def-smooth-manifold]]).

[F1] The identity map of an oriented closed manifold has degree $1$, while a constant map has degree $0$: the identity has degree $1$ by the cited composition proposition, and a constant map factors through a point and has empty regular fibre over any value other than its constant, so the regular-value formula gives degree $0$ ([[prop-degree-is-multiplicative-under-composition]], [[thm-regular-value-formula-for-degree]], [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]]).

[F2] The total degree of a map on a disjoint union of closed oriented components is the sum of the degrees of its restrictions, and a homotopy of maps of $M$ restricts on each component to a homotopy of the restrictions; degrees of proper smooth homotopic maps between closed oriented manifolds agree, and for continuous self-maps of a sphere homotopic maps have equal degree ([[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]], [[def-homotopy-relative-and-path-homotopy]], [[thm-degree-is-invariant-under-proper-smooth-homotopy]], [[prop-degree-is-homotopy-invariant-and-multiplicative-under-composition]]).

[F3] The Hopf classification requires a connected domain, so it does not apply to $M$; the connectedness hypothesis is recorded as load-bearing ([[thm-hopf-degree-classification-for-oriented-domains]], [[rem-connectedness-is-needed-for-a-single-degree-invariant]]).

## Counterexample

**Proof technique:** constructive.

1.1 (Equal total degrees.) Let $f=\operatorname{id}\sqcup c$ and $g=c\sqcup\operatorname{id}$ on $M=S^m\sqcup S^m$. The restrictions to the two components have degrees $1$ and $0$ in the first case and $0$ and $1$ in the second, so by [F2] both total degrees equal $1+0=1=0+1$. [F1, F2, given, construct]

2.1 (No homotopy exists.) Suppose $H:M\times I\to S^m$ were a homotopy from $f$ to $g$. Its restriction to the first copy $S^m\times I$ is a homotopy from $\operatorname{id}$ to $c$ between continuous self-maps of the sphere; by the sphere homotopy invariance recorded in [F2], $\deg(\operatorname{id})=\deg(c)$, contradicting $1\ne0$ from [F1]. [F1, F2, step 1.1]

3.1 There is therefore a closed oriented smooth $m$-manifold, namely $S^m\sqcup S^m$, and two maps on it whose total degrees agree but which are not homotopic; the total degree is not a complete invariant for disconnected domains, exactly as recorded in the connectedness remark. [F3, step 2.1, discharge-construct] ∎
