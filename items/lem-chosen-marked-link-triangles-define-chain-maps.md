---
id: lem-chosen-marked-link-triangles-define-chain-maps
kind: lemma
title: "Chosen marked link triangles define chain maps"
status: draft
origin: session
deps:
  - lem-strong-balanced-link-data-have-finite-marked-counts-and-curvature
  - lem-nearly-symmetric-polygons-have-positive-domains-and-degree-energy-bounds
  - lem-transverse-polygon-map-spaces-have-actual-hilbert-fredholm-sections
  - thm-bounded-energy-polygons-have-stable-source-bubble-and-strip-limits
  - lem-polygon-bubble-limits-have-the-actual-determinant-index-budget
  - thm-regular-transverse-polygon-breakings-have-exhaustive-gluing-collars
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Full Choice is assumed for the imported physical analytic framework; the countably coded regularity construction does not lower the supplier assumption."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zemke, Link cobordisms and functoriality in link Floer homology"
      url: "https://arxiv.org/abs/1610.05207"
---

## Statement

Assume the Axiom of Choice. Supply a transverse balanced nearly-symmetric Heegaard triple with at least two marked pairs, good regular pair ends, no common triple-torus intersection, and finite nonnegative formal-domain inventories at triangle indices zero and one and the strip indices occurring in their limits. Supply compatible marked divisors and an allowed free tensor-variation region met nontrivially by every nonconstant triangle. Its actual full-marked triangle counts are finite and satisfy the triangle chain identity after uniform coloring. Inserting a supplied auxiliary cycle gives a polynomial chain map. With genuine capped relative gradings supplied, its within-sector grading constant is independent of the auxiliary corner. No value of that constant, unit normalization, or movie independence is asserted.

## Facts & Assumptions

**Given:** The actual triple, inventories, transverse good ends, compatible nearly-symmetric target geometry, free variation region and auxiliary cycle in the Statement.

[F1] [[lem-strong-balanced-link-data-have-finite-marked-counts-and-curvature]] is used at its stated geometric and axiom hypotheses.

[F2] [[lem-nearly-symmetric-polygons-have-positive-domains-and-degree-energy-bounds]] is used at its stated geometric and axiom hypotheses.

[F3] [[lem-transverse-polygon-map-spaces-have-actual-hilbert-fredholm-sections]] is used at its stated geometric and axiom hypotheses.

[F4] [[thm-bounded-energy-polygons-have-stable-source-bubble-and-strip-limits]] is used at its stated geometric and axiom hypotheses.

[F5] [[lem-polygon-bubble-limits-have-the-actual-determinant-index-budget]] is used at its stated geometric and axiom hypotheses.

[F6] [[thm-regular-transverse-polygon-breakings-have-exhaustive-gluing-collars]] is used at its stated geometric and axiom hypotheses.

[F7] [[def-axiom-of-choice]] is used at its stated geometric and axiom hypotheses.

## Proof

1.1 Use the disk with three ordered boundary punctures, its boundary arcs labeled by the three actual product tori, and strip coordinates at the punctures. Its conformal automorphism group fixing these three punctures is trivial. On its three ends choose the already fixed regular strip tensors. On its compact core allow smooth tensors depending on BOTH source coordinates and target, preserving the protected divisor and diagonal neighborhoods. Map charts and the reflected interior/boundary Cauchy estimates give the actual Sobolev Fredholm problem; its end parametrices are the transverse Fourier inverses from the old-end construction. The compact core changes neither the Fredholm property nor those end gaps. Its actual index is the capped triangle determinant index. [given, F1, F2, F3, F4, F5, F6, F7, construct]

1.2 A nonconstant triangle has a regular point in the free variation region. It cannot lie in a generator chart since its three distinct torus boundary labels have no common intersection, and its actual ends approach different pairwise generators. Avoiding the protected target loci and taking the free annular transition region gives the required point. A nonzero adjoint cokernel section is smooth and does not vanish on that open region by the same local Cauchy-gauge unique continuation argument as for strips. At a point with du nonzero, a source-and-target-supported anti-complex tensor variation makes its product with that nonzero derivative an arbitrary tangent vector. Because the SOURCE point is localized, another sheet at the same target cannot cancel the pairing. This kills the universal cokernel without a somewhere-injective assumption on the map. Smooth tensor variations can be parametrized by the countable fast-decaying Hilbert expansion as for strips. Sard-Smale and Baire over a countable map atlas and homotopy components give simultaneous regularity for all required triangle indices, with the three actual end data unchanged. There are no constant triangles because the three tori have no common point. A regular negative-index triangle is absent. [given, F1, F2, F3, F4, F5, F6, F7, construct]

1.3 The supplied finite nonnegative domain list bounds the physical energy. Fixed-target extraction retains the actual torus labels and all marked intersection degrees. Every sphere bubble has index at least 2n, hence at least four here, and every nonconstant one-system boundary bubble has index at least two. Removing either from a triangle of total index zero or one would leave a negative-index principal triangle. Regularity excludes it. A strip break has positive index. Therefore the index-zero triangle moduli are compact zero-manifolds and are finite. This is finiteness of actual maps, without a domain/class bijection. [given, F1, F2, F3, F4, F5, F6, F7, construct]

1.4 At triangle index one the only limits have one index-one strip and an index-zero triangle. Gluing these ends uses the actual strip inverse, the actual triangle inverse and the common transverse end. Separate by neck length L, splice the ends and patch the inverses. End errors and cutoff commutators are bounded by a polynomial in L times exp(-delta L). There is no shared zero eigenmode. Fix the strip translation by its actual phase slice and keep L as the boundary parameter. The bounded right inverse and quadratic Cauchy-Riemann remainder yield a unique correction by contraction for L large. Extraction followed by the same slices puts every sufficiently broken sequence in one of these collars. Consequently the compactified regular one-manifold has precisely these three types of boundary, one for each corner. Their marked intersection degrees add under gluing. Its mod-two boundary count is the actual chain identity $D_{02}F+F(D_{01}\otimes I)+F(I\otimes D_{12})=0.$ Inserting the actual auxiliary CYCLE theta gives the actual polynomial chain map x to F(theta,x), or x to F(x,theta), as appropriate. No identity or nonzero tower scalar has been inferred from this chain identity. [given, F1, F2, F3, F4, F5, F6, F7, construct]

1.5 Every triangle counted has nonnegative intersection with every marked divisor. Thus its U exponent is nonnegative. If a genuine capped relative Alexander grading has been supplied with triangle identity A_out-A_in-A_theta=n_w-n_z+c, the corresponding full-minus map has its Alexander upper shift fixed by A_theta+c: the U-weighted output has A_out-n_w=A_in+A_theta+c-n_z, so its nonnegative z multiplicity only lowers the filtered output. The convention and the constant c must be computed from the ACTUAL band Seifert caps; neither a genus shift nor an absolute Maslov zero statement is established here. [given, F1, F2, F3, F4, F5, F6, F7, construct]

1.6 Fix either marked color q and genuine corner determinant caps. For two actual triangles in the same extension sector, glue their corner caps and connecting pair-strip caps. Opposite real boundary frames cancel, so the difference of their determinant indices is the Chern evaluation of the capped triply periodic chain plus twice its q-divisor intersection. The actual fixed-sector corner relative Maslov formula is the same capped index identity. Subtracting the corner relative gradings and twice the q exponent therefore leaves one constant for that sector, independent of the auxiliary input corner. This proves only within-color homogeneity. It neither identifies the constants for the two colors nor sets either constant to zero. The supplied cap hypotheses, rather than a torsion implication between distinct marked structures, justify this comparison. [given, F3, F5, construct] ∎

This conditional local operation supplies neither an adapted surface movie nor a countable-choice-only analytic specialization.
