---
page: affine-reflections-coroot-translations-and-alcoves
title: "Affine Reflections, Coroot Translations, and Alcoves"
status: draft
items:
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - lem-cg-affine-reflection-identities-and-local-finiteness
  - lem-cg-highest-root-and-fundamental-alcove
  - lem-cg-affine-alcove-separation-and-facet-types
  - lem-cg-affine-point-stabilizers-and-vertex-residues
  - lem-cg-affine-generic-gallery-paths-and-disk-moves
  - thm-cg-affine-alcove-transitivity-presentation-and-length
examples: []
---

This page builds the affine Weyl group from its Euclidean wall arrangement. It fixes the pairing convention, proves the reflection identities and local finiteness, constructs the componentwise fundamental alcove directly from highest-root coordinates, and proves separation, triviality of the fundamental-alcove stabilizer, and facet-type rules.

The convention is $H_{\alpha,k}=\{x:B(x,\alpha)=k\}$. The highest-root inequalities are componentwise for reducible systems; the empty root system is treated in dimension zero, and rank-one factors use the interval $0<B(x,\alpha)<1$. The stabilizer lemma uses a local generic-gallery argument to identify every wall reflection with a conjugate of a fundamental-facet reflection. Its type map is stated on the orbit; the later theorem packages global transitivity with the presentation and exact length formula.

The point-stabilizer lemma constructs the local root subsystem from the integral pairings $B(v,\alpha)\in\mathbb Z$. Its Weyl group describes the sectors and the full point stabilizer; a local gallery makes panel types independent of the incident alcove. Rank-two residues give the alternating boundary relations, with one affine facet type $0_i$ for each nonempty irreducible component. The generic-gallery lemma proves discreteness of $Q$ and $Q^\vee$, constructs generic paths by finite affine avoidance, and fills generic loops by boundary-fixed cones. Their dual diagrams have square and rank-two Coxeter faces; their multiway vertices are the full $2m$-branch local dihedral cycles, not double points.

## Ordered construction and proof contracts

**def-cg-affine-root-hyperplane-reflection-and-alcove.** In a supplied finite reduced crystallographic root system in Euclidean E, define H_(a,k)={x:B(x,a)=k}, r_(a,k)(x)=x-(B(x,a)-k)a∨ for integer k, and alcoves as components of the complement of all such hyperplanes. Define affine reflection group and Q∨⋊W with explicit multiplication.

Definition justification: `lem-cg-affine-reflection-identities-and-local-finiteness`.

**lem-cg-affine-reflection-identities-and-local-finiteness.** Verify r_(a,k)=t_(k a∨)r_a, its square one and hyperplane fixed pointwise. Since roots are finite and integer k bounded on compact sets, prove local finiteness and openness of complement. Prove translations by simple coroots arise as products r_(a,1)r_(a,0), giving affine group=Q∨⋊W with unique Euclidean decomposition.

**lem-cg-highest-root-and-fundamental-alcove.** For each irreducible component, prove highest-root dominance and positive simple-root coefficients. In scaled coordinates $u_s=n_sB(x,\alpha_s)$, the region is the standard open simplex $u_s>0$, $\sum_su_s<1$; its closure has the simple-root walls and highest-root wall as its $|S_i|+1$ facets. Root-order bounds exclude every affine wall from its interior, and connectedness identifies it as an alcove. Reducible systems use the product of these factors; the rank-zero case is the singleton alcove.

**lem-cg-affine-alcove-separation-and-facet-types.** Prove separation by one facet wall and the symmetric-difference identity. Use finite bad-set avoidance and compact finite-wall hulls to construct generic galleries from the fundamental alcove; identify all wall reflections as conjugates of fundamental-facet reflections, then prove the fundamental stabilizer trivial by deleting repeated walls in a shortest word. Use one affine label per irreducible component and transfer the facet labels consistently across panels.

**lem-cg-affine-point-stabilizers-and-vertex-residues.** For a point $v$, define $\Phi_v=\{\alpha:B(v,\alpha)\in\mathbb Z\}$ and prove it is a finite reduced crystallographic root system. Use its finite Weyl group to identify $\operatorname{Stab}_{W_a}(v)$ with the reflections in walls through $v$ and to describe the sectors. Prove local sector-to-alcove correspondence, transport the affine panel types around $v$, and identify each rank-two residue cycle with its Coxeter relator.

**lem-cg-affine-generic-gallery-paths-and-disk-moves.** Prove Q and Q∨ discrete full-rank lattices from simple-root/coroot bases. Use a finite affine bad-set argument to produce paths with regular vertices, transverse single-wall crossings, and directions transverse to every codimension-two stratum. Fill each generic boundary by a boundary-fixed cone whose apex avoids finitely many affine degeneracy sets. Its wall preimage is a finite graph; codimension-two points are rank-two multiway vertices with 2m branches, and codimension-at-least-three strata are avoided. The dual disk is a van Kampen diagram with square and alternating rank-two faces; face deletion gives the gallery moves and proves the closed-gallery kernel statement. The item declares the affine type set J with one 0_i per nonempty component.

**thm-cg-affine-alcove-transitivity-presentation-and-length.** Use the generic gallery supplier and the transported facet reflections to show the subgroup generated by the componentwise affine facets is transitive on alcoves. For each wall, choose a generic point in it outside the finitely many other walls meeting a compact simplex; its two local sides show that it supports a facet of an alcove closure, so its reflection is conjugate to a fundamental-facet reflection and the facet subgroup is all of W_a. The presentation map is surjective by transitivity and injective by the closed-gallery consequence from item 7; the trivial fundamental-alcove stabilizer gives simple transitivity. For length, every wall separating A and g(A) must occur in any gallery word, giving a lower bound. A straight segment with endpoint chosen outside finitely many affine bad sets crosses each separating wall once and no other, giving the matching upper bound. This argument runs in the full orthogonal product, with A1 factors read as interval galleries. The finite crystallographic type comparison uses the published root-system classification; the result remains a Euclidean statement and makes no loop-model identification.

## Prerequisites and reading

Required earlier pages: [[crystallographic-root-lattices-and-weyl-group-interfaces]], [[real-forms-and-reflection-geometry]], [[homotopy-and-homotopy-equivalence]], [[simplicial-subdivision-and-simplicial-approximation]], [[root-systems-dynkin-diagrams-and-cartan-killing-classification]]. The companion [[affine-reflections-coroot-translations-and-alcoves-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
