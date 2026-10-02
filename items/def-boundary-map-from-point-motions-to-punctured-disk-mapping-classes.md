---
id: def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes
kind: definition
title: "Boundary map from point motions"
status: draft
origin: pipeline
landmark: true
deps: [def-axiom-of-choice,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration,
       prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace,
       thm-long-exact-sequence-of-homotopy-groups-of-a-fibration,
       def-based-loops-and-fundamental-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3 and the proof of Theorem 1, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Brayton Gray, Homotopy Theory: An Introduction to Algebraic Topology, Chapter 8 on fibre spaces and exact sequences"
      url: "https://doi.org/10.1016/B978-0-12-296050-5.50014-0"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $D^2\subseteq\mathbb R^2$ be the closed unit disc,
let $Q_n=(q_1,\dots,q_n)$ be the fixed base configuration of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], and let

$$E:=\operatorname{Homeo}^+(D^2,\partial D^2),\qquad B:=C_n(\operatorname{int}D^2),\qquad F:=\operatorname{Homeo}^+(D^2,\partial D^2;Q_n),$$

with the compact-open topology on both homeomorphism groups and the quotient
topology on the unordered configuration space. By
[[lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration]]
the evaluation map

$$\operatorname{ev}:E\longrightarrow B,\qquad \operatorname{ev}(h):=[h(q_1),\dots,h(q_n)],$$

is a Hurewicz fibration whose fibre over the basepoint $[Q_n]$ is exactly $F$;
by [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]]
every path in $B$ with a prescribed initial point has a lift in $E$, and the
fibre components of $F$ are the elements of

$$\pi_0(F)=\operatorname{Mod}(D^2,Q_n;\partial D^2),$$

by [[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]. Recall from
[[def-based-loops-and-fundamental-group]] that a based loop is a continuous
$\alpha:I\to B$ with $\alpha(0)=\alpha(1)=[Q_n]$, that $[\alpha]$ denotes its
path-homotopy class, and that the fundamental-group product is first loop then
second.

**The boundary map.** Let $\alpha:I\to B$ be a based loop at $[Q_n]$. Choose a
lift $\widetilde\alpha:I\to E$ with $\widetilde\alpha(0)=\operatorname{id}$
and $\operatorname{ev}\circ\widetilde\alpha=\alpha$, and define the class

$$\delta\bigl([\alpha]\bigr):=\bigl[\widetilde\alpha(1)^{-1}\bigr]\in\pi_0(F) =\operatorname{Mod}(D^2,Q_n;\partial D^2).$$

The element $\widetilde\alpha(1)$ is the time-one homeomorphism of the lifted
point motion: its inverse is what makes the assignment compatible with the
library's first-loop-then-second product. The independence of the choice of the
lift, the independence of the representative loop, and the multiplicativity of
the resulting map are not assumed here; they are proved in the lemma
`lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism`, which
follows this definition and whose statement is the precise well-definedness
claim for $\delta$.

**Why the inverse endpoint.** The published exact sequence of a fibration
[[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]] defines its
boundary by

$$\partial_p[\gamma]=[e_0]\cdot[\gamma]^{-1},$$

where $[e_0]\cdot[\gamma]$ is the endpoint component of a lift of $\gamma$
starting at $e_0$ and products of loops are traversed left-to-right. For the
evaluation fibration this is precisely $[\widetilde\alpha(1)^{-1}]$, so $\delta$
is the connecting map of the fibration in the library's convention, and the
inverse is not a convention that may be dropped: the raw endpoint assignment
$[\alpha]\mapsto[\widetilde\alpha(1)]$ reverses the order of the first-then-second
product, whereas $\delta$ preserves it.

**Elementary cases.** For $n=0$ the base $B$ is a single point, the only based
loop is constant, and the formula gives the identity class of
$\operatorname{Mod}(D^2,Q_0;\partial D^2)$; for $n=1$ the same construction
applies without a collision condition. Nothing in the definition selects among
lifts, representatives or enumerations of a configuration: the lift is
exhibited in the following lemma, and the class computed by $\delta$ is proved
there to be independent of these choices.

## Remarks

- The definition uses the total space of all boundary-fixing homeomorphisms of
  the closed disc, not only the homeomorphisms supported away from $\partial D^2$
  near a fixed collar; the boundary circle is fixed pointwise, so every lift is
  an ambient isotopy rel $\partial D^2$.
- The target is the *setwise* mapping class group
  $\operatorname{Mod}(D^2,Q_n;\partial D^2)$: the formula produces the class of
  the inverse of the evaluated endpoint, and that class lies in the pure
  subgroup $\operatorname{PMod}(D^2,Q_n;\partial D^2)$ exactly when the lift's
  endpoint permutes the marked points trivially. Purity is a property of the
  particular endpoint, not of the definition of $\delta$.
