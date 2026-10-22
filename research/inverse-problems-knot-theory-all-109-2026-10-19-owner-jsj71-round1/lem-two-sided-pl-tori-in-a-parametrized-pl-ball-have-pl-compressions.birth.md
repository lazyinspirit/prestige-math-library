---
id: lem-two-sided-pl-tori-in-a-parametrized-pl-ball-have-pl-compressions
kind: lemma
title: "Two-sided PL tori in a parametrized PL ball have PL compressions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-pl-embedding-and-subpolyhedron
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
  - thm-higher-dimensional-spheres-are-simply-connected
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - thm-fundamental-group-of-the-circle
  - thm-fundamental-group-of-a-product
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Local sphere-link disk parameters, cut-side labels, finite subdivisions and PL collars use only finite data. The finite PL Loop criterion is choice-free. No general topological three-manifold triangulation theorem is used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.10–11 and Corollary3.3, p.48. The finite PL local-flatness, bicollar and compression interface is supplied below; it does not cover an arbitrary topological torus marking."
---

## Statement

Let $B$ be a parametrized PL three-ball with a finite compatible PL manifold triangulation. Let $T\subset\operatorname{Int}B$ be the image of a PL embedding of the standard PL torus. Suppose $T$ is two-sided, meaning that it has a topological product neighborhood $T\times(-1,1)$ with the given central inclusion. Then $T$ has a finite compatible PL bicollar and an embedded PL disk $D\subset\operatorname{Int}B$ with $D\cap T=\partial D$ and $\partial D$ essential on $T$. No choice axiom is assumed.

The PL hypothesis on the torus is explicit. This result supplies no compatibility assertion for a torus given only by an unqualified topological embedding in the ball.

## Facts & Assumptions

**Given:** The parametrized finite PL ball, PL embedded torus and supplied topological two-sided neighborhood.

[F1] Compact PL embedded subpolyhedra admit compatible finite subcomplex triangulations and subdivisions. [[def-pl-embedding-and-subpolyhedron]] [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

[F2] A standard PL two-sphere is simply connected. An embedded polygonal circle on a finite oriented PL sphere has two complementary PL disk regions. [[thm-higher-dimensional-spheres-are-simply-connected]] [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

[F3] A compact locally PL collared subpolyhedron has a PL collar; in particular this applies to a boundary component of a compact PL manifold. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

[F4] In a supplied finite orientable PL three-manifold, a two-sided locally flat PL surface with supplied compatible triangulation and PL product collar is geometrically incompressible if and only if its fundamental group injects. [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]]

[F5] The standard circle has fundamental group $\mathbb Z$, and product projections identify the torus group with $\mathbb Z^2$. [[thm-fundamental-group-of-the-circle]] [[thm-fundamental-group-of-a-product]]

## Proof

1.1 By [F1] refine so $T$ is a full subcomplex. At a vertex of this subcomplex its surface link is a PL circle embedded in the standard PL two-sphere which is the ambient interior vertex link. The latter has a supplied standard parameter from the PL manifold triangulation. By [F2] the circle bounds two PL disks. Parametrize both by standard polygonal disks. Their boundary parameters can be matched: a PL circle homeomorphism extends by coning a common finite subdivision of its domain and target circles to their disk centers. The two disk maps then give a PL homeomorphism of the link pair to a standard sphere with its equatorial polygonal circle. Coning this pair map to the ambient vertex gives a PL chart in which $T$ is a flat plane. The finitely many open vertex stars cover $T$, and each chart flattens the whole surface portion in its star. Thus local PL flatness has been established from the link disks, not inferred from the given merely topological product map. [F1, F2, given, construct]

2.1 Cut the finite ambient complex along the full surface subcomplex: keep the original three-simplices, cease gluing across its two-faces and distinguish incident vertex and edge copies according to their local sides. The finite flat charts of step 1.1 show that each local side is a PL half-space. The result is a compact finite PL three-manifold; its new boundary projects to $T$ as the finite PL two-sheeted side cover. The given topological product neighborhood labels these sides continuously by the sign of its interval coordinate. This trivializes that cover: its two labeled parts project bijectively and locally piecewise linearly to $T$, hence are PL copies $T_+$ and $T_-$. No assertion that the original product map was PL has been made. Face subdivisions distinguish any repeated quotient incidences and give a finite compatible triangulation of this cut space. [F1, step 1.1, construct]

3.1 Apply [F3] to its two new boundary copies. Shrink the compact collars so they miss each other and the old ball boundary; finite compact separation gives one width. Reglue $T_+$ to $T_-$ by their pointwise identical projection to $T$. Their two PL collars then give a PL bicollar $T\times[-\epsilon,\epsilon]\to B$. Its finite product triangulation can be fitted to the ambient finite triangulation by [F1]. Thus all the local-flatness, finite-triangulation and product-collar inputs of [F4] are now supplied, including when the initial two-sided neighborhood was only topological. [F1, F3, step 2.1, construct]

4.1 If there were no PL compressing disk, [F4] would inject $\pi_1(T)=\mathbb Z^2$ into $\pi_1(B)=1$, impossible by [F5] and radial contraction in the supplied ball parameter. Therefore [F4] gives an embedded PL disk meeting $T$ exactly in its boundary, which does not bound a PL disk on $T$. By [F2]'s surface disk criterion this boundary is nontrivial in $\pi_1(T)$, hence essential. Its interior may be taken on one of the cut sides: the constructive implication in [F4], Proof1.2 and4.1, applies finite PL Loop to a noninjective cut face and gives a disk proper in that cut component. In particular it avoids the old boundary of $B$. Alternatively any contact with that old boundary can be removed by the PL boundary collar in [F3]: choose its width disjoint from $T$ and map its height $r$ to $\delta+(1-\delta/(2\eta))r$ for $0\le r\le2\eta$, keeping heights beyond $2\eta$ fixed, with $0<\delta<2\eta$. This is a PL inward embedding fixed near $T$. It puts the disk entirely in $\operatorname{Int}B$, retaining its boundary and compression property. Properness was needed on the cut side, not as a disk with boundary on $\partial B$. All constructions used finite data and the choice-free suppliers. [F2, F3, F4, F5, step 1.1, step 3.1, construct, algebra] ∎
