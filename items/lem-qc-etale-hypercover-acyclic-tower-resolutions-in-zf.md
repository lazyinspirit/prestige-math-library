---
id: lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf
kind: lemma
title: "Choice-free hypercover resolutions for étale coefficient towers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-derived-category-of-etale-sheaves
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - cor-noether-normalisation-module-finiteness
  - def-algebraically-closed-field
proof_strategy: direct
axiom_use: "No choice principle is assumed. The hypercovers and cocycles range over fixed small sets; all local refinements are finite and the resolution is defined by recursion."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Hypercoverings, §25.10"
      url: "https://stacks.math.columbia.edu/tag/01GZ"
      locator: "The finite-stage δ-functor mechanism is reconstructed below without the source's use of injective sheaves or arbitrary families."
    - title: "The Stacks Project, Hypercoverings, Lemma 25.8.1"
      url: "https://stacks.math.columbia.edu/tag/01GM"
      locator: "Finite boundary-filling and prism refinements."
---

## Statement

Let k be algebraically closed, let f:Y→S be a morphism of finite-type k-schemes, let ℓ be a prime, and fix small étale sites with their quasi-compact quasi-separated bases. For A_n=Z/ℓⁿZ, consider the category of A_•-module sheaf towers with levelwise exactness. There is an additive functorial exact resolution of every tower by towers whose finite levels are acyclic for finite-hypercover cohomology on every quasi-compact étale Y-object. It constructs the right-derived functor of levelwise f_* on bounded-below complexes of towers, without choosing injective resolutions or assuming a choice axiom. Its zeroth cohomology is levelwise f_*. This is an unnormalized tower-category result: it does not assert constructibility, uniform Tor amplitude, proper base change, or preservation of normalized adic objects.

## Facts & Assumptions

**Given:** k, f, the fixed small sites and a bounded-below tower complex as stated.

[F1] The tower category has levelwise kernels, cokernels and exactness, and its derived category is obtained by localizing bounded-below complexes at quasi-isomorphisms. [[def-derived-category-of-etale-sheaves]]

[F2] Étale maps are universally open and quasi-finite at specified points without assuming choice; every covering of a quasi-compact object has a finite étale refinement. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F3] Every nonzero finite-type k-algebra is finite over a polynomial subalgebra. [[cor-noether-normalisation-module-finiteness]]

[F4] An algebraically closed field has no proper finite algebraic field extension. [[def-algebraically-closed-field]]

## Proof

1.1 Every nonempty finite-type k-scheme has a k-rational closed point. On one nonzero affine chart write its algebra A as finite over R=k[z₁,…,z_d] by [F3]. Put m=(z₁,…,z_d). The finite R_m-module A_m is nonzero because R⊂A remains injective on localization. If A_m/mA_m=0, the finite determinant form of Nakayama gives a unit annihilating A_m, contradiction. Thus A/mA is a nonzero finite-dimensional k-algebra. Choose an ideal of maximal dimension among its proper ideals; the dimension range is finite. Its quotient is a finite field extension of k, hence k by [F4]. [F3, F4, given, algebra]

1.2 For a specified closed k-point x, pointed étale neighbourhoods are filtered: fibre products give common refinements and the open diagonal of an étale map gives equalizer refinements. Their colimit is the stalk, and exactness is checked with finitely many representatives and refinements. If a sheaf F is nonzero, take one nonzero section on one quasi-compact étale chart V. Its zero locus is the union of images of étale neighbourhoods on which it vanishes; it is open by [F2] and is not all of V by sheaf separation. The nonempty closed complement has a k-point by step 1.1. Its image in Y is a closed k-point, and the section has a nonzero stalk there. Thus closed-point stalks are exact and conservative on finite-coefficient étale sheaves, without a family of choices. [F1, F2, step 1.1, algebra]

2.1 For a given integer d and a quasi-compact étale object V, construct a finite (d+1)-truncated split hypercover of V. At each of the finitely many levels, the matching diagram uses finitely many finite coproducts, fibre products and equalizers of noetherian qc étale objects. Equalizers are open by the étale diagonal and hence quasi-compact on these Noetherian schemes. Choose a finite étale covering of the matching object by [F2]; adjoin its components as nondegenerate simplices and retain the finitely many degeneracies, using the unique surjection–injection factorization of finite ordinal maps to define simplicial identities. Two truncated hypercovers have a common finite refinement by fibre products and this same construction. Two maps are equal after finite refinement and simplicial homotopy through degree d: triangulate the finitely many prisms Δ[r]×Δ[1], r≤d, and lift their boundary simplices one at a time through the target matching covers. These are finite choices for the specified finite diagrams. [F2, given, construct, algebra]

2.2 The normalized free A_m-sheaf chain of such a hypercover is locally exact in every positive degree through d. A kernel section is locally a finite linear combination of simplices. Choose one base vertex locally; cone the finitely many vertices and faces of those simplices to it. At each successive dimension the simplex and the already built cones give a complete boundary, which lifts after a matching-cover refinement. Finitely many fillers give a cone whose boundary is the given cycle. The standard finite degeneracy homotopy passes between normalized and unnormalized chains. At a closed k-point x, each level fibre is finite by [F2]; the same finite cone argument gives a split exact complex of finite free A_m-modules in the relevant degrees. In particular the quotient of the (q−1)-st chain module by the image of its q-th differential has finite-free x-stalk. [F2, step 1.2, step 2.1, algebra]

3.1 Define finite-hypercover H^q(V,F) as the colimit of the cohomology of the finite cochain complexes F(H_•) through degree q+1, over finite refinements up to homotopy. The finite common refinements and prism homotopies in step 2.1 give the required filtered comparison. For 0→F→G→H→0 and a q-cocycle c of H on a finite hypercover, lift its finitely many component sections after a finite étale refinement; extend that refinement through degree q+2 by the split matching construction. The differential of a lift b is an F-cocycle and defines the connecting map. Two lifts differ by an F-cochain, so give the same class; if c is changed by a boundary, first lift that boundary's finitely many components and subtract its differential. Different refinements pass to a finite common one, and prism homotopies give the same cohomology maps. If the connecting class of c is zero, on a further finite refinement db=da for an F-cochain a, so b−a is a G-cocycle lifting c. Conversely the image of a G-cocycle has zero connecting class. If an F-cocycle a maps to a boundary db in G, the image of b in H is a cocycle whose connecting class is [a]. These calculations, together with the evident kernel/image relation at G, give the long exact sequence. Degree zero is Γ by the sheaf equalizer. On qcqs objects, a section of a filtered union of monomorphisms has a finite-stage representative: choose a finite covering on which it is represented, refine the finitely many qc overlaps, and take the maximum of the finitely many stage indices witnessing the gluing. Consequently these finite-hypercover groups commute with such unions. [F2, step 2.1, algebra]

4.1 For a site object W and coefficient level n define the free tower E(n,W) by E(n,W)_m=A_m[h_W] for m≤n and zero for m>n, with quotient transitions. Maps from E(n,W) to a tower F are exactly F_n(W). Given one finite truncated hypercover H and one q≥1, let P_•(H,n) be its normalized free E(n,−)-tower chain and let Q=im(P_q→P_{q−1}). By step 2.2 it equals coker(P_{q+1}→P_q) and Q→P_{q−1} is monic. A q-cocycle in F_n(H_•) is a map Q_n→F_n; the compatibility needed to extend that map to the whole tower is proved in the next step. [F1, step 2.2, construct, algebra]

4.2 Index once and for all the set I of all tuples i=(V,d,H,n,q) of the preceding type. At level n the closed-point stalk sequence 0→Q_{i,n}→P_{q−1,i,n}→P_{q−1,i,n}/Q_{i,n}→0 is split with free quotient by step 2.2. Reducing this finite split sequence modulo ℓ^m gives the corresponding sequence obtained from the same finite simplicial fibre at level m≤n. Exact conservative stalks from step 1.2 therefore give Q_{i,n}⊗_{A_n}A_m≅Q_{i,m} as sheaves. It follows that every map Q_{i,n}→F_n extends uniquely to a tower map Q_i→F: compose at lower levels with the tower transitions and use these reduction isomorphisms; levels above n are zero. Thus M_i(F)=Hom_T(Q_i,F), an A_n-module, contains every q-cocycle at level n. Tensoring 0→Q_i→P_{q−1,i} with any A_n-module is monic at every level: on level m it is tensor over A_m after reducing the coefficient module, and the resulting stalk sequence is split. Exact conservative stalks detect the monomorphism. The direct sum over i remains monic by finite-support local sections. Push out ⊕_i(Q_i⊗_{A_n}M_i(F))→⊕_i(P_{q−1,i}⊗_{A_n}M_i(F)) along evaluation into F; call the resulting tower G(F). Then F→G(F) is monic. For a cocycle c∈M_i(F), the map p↦p⊗c gives a cochain in G(F) whose boundary is c. Hom, tensor, direct sum and pushout are additive and natural in F, so G is additive and functorial. [F1, step 1.2, step 2.2, step 4.1, construct, algebra]

5.1 Iterate F^(0)=F, F^(t+1)=G(F^(t)) and set I(F)=colim_t F^(t). This specified recursion requires no chosen family. By step 3.1, a positive-degree hypercover class of I(F)_n over any qc étale object has a finite-stage representative. The next universal pushout kills it, so I(F) is hypercover-acyclic at every level and qc test object. F→I(F) remains monic. Apply I successively to the cokernels of these monomorphisms. This constructs an additive functorial exact tower resolution 0→F→I⁰(F)→I¹(F)→… whose terms have the stated levelwise acyclicity. [F1, step 3.1, step 4.2, construct, algebra]

6.1 Apply this additive resolution termwise to a bounded-below tower complex. Naturality and additivity give a bicomplex; direct-sum totalization has finitely many entries in each total degree. The vertical resolutions are exact, so finite-diagonal comparison makes the total augmentation a quasi-isomorphism. A bounded-below exact complex of hypercover-acyclic towers stays exact under f_*: on every qc étale S-object, apply the long exact sequence of step 3.1 to successive cycles and use dimension shifting, beginning at the lower bound. Therefore the cone of the total-resolution map induced by a quasi-isomorphism stays exact after f_*. The resulting functor on the localization is the right-derived levelwise f_*. Its degree-zero cohomology agrees with the original left-exact f_* by the same resolution normalization. No injective resolution or infinite family of selected covers is used. [F1, step 3.1, step 5.1, algebra] ∎

## Scope

This proof addresses only the existence of the unnormalized derived tower functor on the stated finite-type sites. It does not supply proper-curve cohomological dimension, constructibility, finite Tor amplitude, derived coefficient reduction, or the repository's normalized rational-adic Rf_!.
