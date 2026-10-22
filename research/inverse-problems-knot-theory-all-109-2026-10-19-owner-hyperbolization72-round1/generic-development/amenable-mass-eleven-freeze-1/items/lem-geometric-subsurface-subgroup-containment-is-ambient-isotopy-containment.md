---
id: lem-geometric-subsurface-subgroup-containment-is-ambient-isotopy-containment
kind: lemma
title: Geometric subsurface subgroup containment is ambient isotopy containment
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-geometric-subsurface-covers-have-the-full-or-bounded-rank-intersection-dichotomy
  - thm-noncompact-finitely-generated-fuchsian-surfaces-have-finite-convex-cores-and-standard-ends
  - lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position
  - thm-finite-geodesic-triangulation-of-a-compact-riemannian-surface
  - thm-collar-neighborhood-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Amenability, Poincare series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Section11; the geometric-subsurface isotopy interpretation of the full lift is proved below, with parallel rims retained
---

## Statement

Assume AC. Let $X$ be a complete finite-area torsion-free hyperbolic surface. Let $S,T\subset X$ be compact connected smoothly bounded regions whose boundary circles are essential in $X$ and whose fundamental-group maps are injective. Suppose both image groups $H,K$ are nonelementary. Empty boundary is allowed. Then $K$ is contained in a conjugate of $H$ if and only if there is an ambient isotopy of $X$, starting at the identity and supported in a compact subset, whose endpoint carries $T$ into the interior of $S$.

Consequently, in the subgroup covering associated to $S$, an isomorphic component over $T$ exists exactly when $T$ can be ambient-isotoped into $S$. Distinct rims in either region may be parallel and may have the same closed geodesic representative; annular complementary regions are not excluded. The claim concerns regions with their actual embeddings and induced sides, not merely an abstract equality of Euler characteristics.

## Facts & Assumptions

**Given:** The finite-area surface, compact essential incompressible regions, nonelementary groups and their subgroup markings.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] Their actual convex cut-cores $C_H/H,C_K/K$ have embedded interiors in $X$, the topology of the original marked regions with parabolic rims opened to cusp ends, and finitely many geodesic or cusp rim classes. Distinct lifts have disjoint interiors, with shared boundary axes allowed. A full subgroup containment gives $C_K\subset gC_H$. [[thm-geometric-subsurface-covers-have-the-full-or-bounded-rank-intersection-dichotomy]]

[F2] The actual finite-core construction proves the primitive ambient rim classes, finite empty-bigon geodesic straightening, compact annuli between parallel rim curves, and standard cusp truncations. [[thm-noncompact-finitely-generated-fuchsian-surfaces-have-finite-convex-cores-and-standard-ends]]

[F3] Finite essential PL multicurves in a compact oriented surface can be placed in prescribed disjoint annular levels, preserving the order of repeated parallel curves, by actual finite bigon and annulus ambient isotopies. The boundary case follows by doubling and the fold retraction, and the isotopies fix the outer boundary. [[lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position]] Compatible finite triangulations of compact smooth surface regions and smooth boundary collars exist. [[thm-finite-geodesic-triangulation-of-a-compact-riemannian-surface]], [[thm-collar-neighborhood-theorem]]

## Proof

1.1 We first make precise a marked cut-core realization. For either region $U=S$ or $T$, truncate the finitely many cusp ends of its core at finite heights, and shave a small collar inward along every geodesic rim. If two rims project to the same ambient geodesic, shave their two labeled shores separately, on their prescribed inside sides; they become different nearby parallel levels. The compact resulting region $U'$ lies in the embedded core INTERIOR, so it is embedded in $X$ even in the paired-rim case. Its boundary circles have exactly the labeled free homotopy classes and parallel-family order of the original $U$, by the marked core construction [F1,F2]. It is ambient-isotopic to $U$ by an actual finite boundary placement. To apply [F3], choose a compact cusp truncation of $X$ containing both boundary families and all needed finite joining annuli. Approximate each smooth boundary in a sufficiently small disjoint collar by a polygonal curve, isotopic to it by the collar graph interpolation. Triangulate the remaining compact surface compatibly. The finite bigon removals of [F2,F3] place the loxodromic curves in narrow collars of their geodesics. For repeated parallel curves use different levels in their existing order, exactly as [F3], and for parabolic rims use the annulus move to the specified horocycle. These finitely many ambient moves fix the compact truncation boundary and extend by identity outside it. Thus they give compactly supported ambient isotopies, not just homotopies of individual loops. [F1, F2, F3, given, construct]

2.1 The placement in step 1.1 carries the REGION to $U'$, not its opposite side. Here is the side verification. For a loxodromic lifted boundary line, the original lifted region is on the side whose ideal closure contains its nonelementary limit set; its geodesic straightening retains that side, since the finite empty-bigon moves preserve the oriented boundary collar. Equivalently the actual separator argument in [F1] identifies the inner supporting half-plane of its convex hull. For a parabolic rim the original region is on the noncusp side: a region on the cusp side would have cyclic fundamental-group image, contrary to nonelementarity. The truncation keeps that noncusp side. Parallel levels retain these labeled sides individually; swapping them is not part of the finite placement. Hence the positioned region and $U'$ have the same side of every boundary circle. Each is the corresponding component closure of the complement of that finite boundary family, so they agree. If there is no boundary, a compact region is open and closed in connected $X$ and is the whole compact surface; its realization is itself. This proves the claimed realization for every allowed case. [F1, F2, F3, step 1.1, given, construct]

3.1 Now suppose $K\subset gHg^{-1}$, and choose the lifted $K$-core accordingly. By [F1] its convex hull lies in $gC_H$. Since $K$ is nonelementary it has nonempty planar interior, and that interior lies in $g\operatorname{int}C_H$: an interior point of a full-dimensional convex set contained in a closed half-plane cannot lie on that half-plane's boundary. First choose any compact cusp-truncated, inward-shaved $K$-realization $T'$ as in step 1.1. It is a compact subset of the embedded $H$-core interior. We can therefore choose the $H$ cusp truncations deep enough to include it and the $H$ inward rim collars narrow enough to avoid it. The resulting $S'$ contains $T'$ in its interior. Let $a_t,b_t$ be the two compactly supported ambient isotopies realizing $T\to T'$ and $S\to S'$. First perform $a_t$, and then apply the inverse endpoint isotopy $b_t^{-1}$ to $T'$. The endpoint is $b_1^{-1}(T')\subset\operatorname{int}S$. Their concatenation is an ambient isotopy of all of $X$, supported in the union of two compact sets. If $S=X$ is closed, simply shave $T$ inside itself, or take identity when $T=X$; the same containment conclusion holds. [F1, F3, step 1.1, step 2.1, given, construct]

4.1 Conversely any ambient isotopy starting at identity gives a homotopy of the inclusion of $T$; its basepoint track conjugates the induced subgroup but does not otherwise change it. If its endpoint lies inside $S$, that subgroup is consequently contained in a conjugate of $H$. For the final covering assertion, the subgroup monodromy in [F1] identifies components over $T$ with $K$-orbits of the coset fiber. Such a component maps isomorphically exactly when its stabilizer is all of $K$, equivalently $K\subset gHg^{-1}$. The two directions just proved identify this precise algebraic condition with ambient isotopy containment. All parallel-rim and cusp choices were retained in the actual constructions, proving the complete Statement. [F1, step 3.1, given, construct] ∎

## Authoring status

This is an unfrozen member of the consolidated degeneration/amenable-mass chain. In particular its marked finite-family side verification and passage from cut-core topology to compactly supported ambient isotopy require complete independent checking. It is not presently a reviewed application interface.
