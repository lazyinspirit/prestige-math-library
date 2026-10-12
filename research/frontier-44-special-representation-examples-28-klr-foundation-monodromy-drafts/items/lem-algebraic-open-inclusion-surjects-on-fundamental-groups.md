---
id: lem-algebraic-open-inclusion-surjects-on-fundamental-groups
kind: lemma
title: "Algebraic open inclusions surject on fundamental groups"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-parametric-transversality, lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family, def-fundamental-groupoid-of-a-space, cor-generic-smoothness-on-source-characteristic-zero, thm-smooth-locus-open, thm-classical-varieties-equivalent-integral-separated-finite-type-schemes, def-axiom-of-choice]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Assume AC. If $U$ is a nonempty Zariski open in a connected smooth complex algebraic variety $S$, then $U$ is path connected and $\pi_1(U,s)\to\pi_1(S,s)$ is surjective for $s\in U$.

## Facts & Assumptions

**Given:** $S,U,s$ and the real smooth manifold underlying $S$. The complement $Z=S\setminus U$ is a proper complex algebraic subset. Its decomposition by the successive smooth loci of its finitely many reduced irreducible components gives finitely many disjoint smooth locally closed strata of complex dimension less than $\dim S$. Construct this using [[cor-generic-smoothness-on-source-characteristic-zero]] for each reduced irreducible component mapping to a point, with [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]]. Its smooth locus is open by [[thm-smooth-locus-open]]. Remove intersections of distinct components and choose their disjoint dense smooth open parts. The remaining reduced closed subset has smaller dimension in each component. Iterate the dimension descent. No Whitney condition is required. Finite-dimensional perturbation families and their generic transverse slices are [[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]] and [[thm-parametric-transversality]]. Their countable choice assumption follows from [[def-axiom-of-choice]].

## Proof

1.1 Every continuous based loop can be replaced in its homotopy class by a smooth loop constant near the base point: subdivide its compact parameter interval into pieces landing in coordinate balls, replace pieces by smooth polygonal paths, and smooth their junctions within those balls. The coordinate straight-line homotopies preserve the base point, and reparameterization gives the constant collar. Choose a perturbation family using vector fields supported away from that collar; its evaluation is a submersion at every point where the original curve can meet $Z$, since the collar lies inside $U$. Apply parametric transversality to each of the finitely many strata and choose a parameter outside the finite union of null bad sets. The resulting curve is transverse to every stratum. Its one-dimensional domain cannot meet a stratum of real codimension at least two: at an intersection, transversality would require its one-dimensional tangent map to surject onto a normal space of dimension at least two. Thus the curve lies in $U$, and its small-parameter perturbation homotopy in $S$ is based. This proves the required surjection. [given, construct, algebra]

2.1 The same perturbation argument for a path with prescribed endpoints in $U$, constant on endpoint collars, gives a path inside $U$ between any two of its points. Since connected smooth $S$ is path connected (coordinate balls show path components are open, and their complements are open), such an initial path always exists. Therefore $U$ is path connected. [step 1.1, given, construct] ∎
## Source notes

The finite-stratification construction uses the actual published source-generic smoothness theorem; it does not assume target-generic smoothness or a Whitney stratification theorem.
