---
id: lem-small-etale-sheaves-extend-with-fppf-descent
kind: lemma
title: Small étale sheaves extend with fppf descent
status: draft
dependency_level: 6
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-etale-fppf-topology-comparison-and-cohomology-models
- lem-site-slice-restriction-locality-and-composition
- lem-fppf-cover-refinement-by-etale-local-finite-flat-covers
- lem-affine-representable-fppf-family-descent
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
proof_strategy: direct
---

## Statement

For a sheaf F on S_et the assignment T↦Γ(T_et,F|T) is an fppf sheaf. Its big-etale extension is the actual pi^*F, fully faithfully and exactly. Restriction pi_* is exact, pi_*pi^*=id, and the essential abelian image of pi^* is closed under kernels, cokernels and extensions and is stable under pullback. For every actual supplied resolution the small/big section cohomology agrees. No injective-existence assertion is made.

## Statement references

[[def-etale-fppf-topology-comparison-and-cohomology-models]]

[[lem-site-slice-restriction-locality-and-composition]]

[[lem-fppf-cover-refinement-by-etale-local-finite-flat-covers]]

[[lem-affine-representable-fppf-family-descent]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[def-etale-fppf-topology-comparison-and-cohomology-models]] at the hypotheses stated there.

[F2] Use the exact public interface of [[lem-site-slice-restriction-locality-and-composition]] at the hypotheses stated there.

[F3] Use the exact public interface of [[lem-fppf-cover-refinement-by-etale-local-finite-flat-covers]] at the hypotheses stated there.

[F4] Use the exact public interface of [[lem-affine-representable-fppf-family-descent]] at the hypotheses stated there.

## Proof

**Proof technique:** direct.

1.1 Let F be  a sheaf of sets on S_et. For T→S put Fbig(T)=Γ(T_et,F|T), where restriction denotes the small-site inverse image. Its étale sheaf property and the formula for big-site inverse image are the formal small/big site calculus already written separately. We prove the arbitrary fppf-family sheaf property. [F1, F2, F3, F4, given, construct, algebra]

2.1 A subterminal sheaf P on T_et is represented by an open W⊂T. Namely take W to be the union of images of ALL étale objects V→T on which P has a section. These images are open by the reconstructed openness consequence. Those V cover W in the étale site. Their sections agree on overlaps because P is subterminal, and hence glue to a section over W. A section on an étale object U forces its map to factor through W by construction; conversely a factorization through W pulls back its section. This proves the asserted representing property. No stalk conservativity or geometric-point selection is used. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 For two sections a,b∈G(T) of any sheaf G on T_et, their equalizer is a subterminal sheaf and therefore an open W. Since inverse image between small étale sheaf categories preserves finite limits and sends a represented open immersion to its base change, a and b become equal on ANY T'→T exactly when T'→T factors through W. This also shows equality-locus formation commutes with arbitrary base change. These are categorical statements about the actual inverse-image construction, not an assumed cohomology comparison. [F1, F2, F3, F4, step 2.1, given, construct, algebra]

4.1 For a surjective finite free affine map π:X→Y, let O⊂X be an open whose two inverse images to X×Y X agree. Its image W=π(O) is open by the reconstructed openness proof. Then π^−1W=O. For the only nontrivial inclusion, fix x∈π^−1W and choose x'∈O over the same y. Both κ(x),κ(x') are finite over κ(y), since π is finite. The tensor κ(x)⊗κ(y)κ(x') is a nonzero finite-dimensional algebra over a field, hence has a prime by finite dimension. This supplies a point of X×Y X over x,x'; invariance forces x∈O. Thus O=π^−1W. Uniqueness of W follows from π's surjectivity. The same statement for a Zariski covering is ordinary open gluing. Applying these two facts bottom-up on the finite-depth refinement tree proves effective descent and uniqueness of invariant opens for each original fppf family: descend on the tree, and base-change that tree to original covering members to verify the original opens. All non-open steps remain finite free after base change, so the residue argument still uses only finite field extensions. [F1, F2, F3, F4, step 3.1, given, construct, algebra]

5.1 Let {T_i→T} be an fppf covering family and let a_i∈Fbig(T_i) agree on all pairwise products. For each étale V→T and t∈Fbig(V)=Γ(V_et,F|V), form the equality open W_i⊂T_i×T V where a_i and t agree. The equality-locus construction and matching assumption show that the W_i form invariant open descent data. By the preceding paragraph they descend to an open W(V,t)⊂V. Its pullback to every T_i×T V is exactly W_i. [F1, F2, F3, F4, step 4.1, given, construct, algebra]

6.1 By the explicit sheafification/left-Kan construction of inverse image on the small étale site, a_i is locally the pullback of some section t on an étale V→T: use the family of ALL such representatives and their local identifications. Thus there is a jointly surjective refinement of each T_i on which these representative diagrams exist. Every such representative map factors through W(V,t), since its equality locus is the whole source. It follows that the family of étale maps W(V,t)→T is jointly surjective: at a given point of T take its covering point in some T_i and a point in a representative étale neighborhood above it; surjectivity of that neighborhood is part of the small-site covering datum. This is a finite existential choice at one point, not an indexed choice function. [F1, F2, F3, F4, step 5.1, given, construct, algebra]

7.1 The sections t restricted to these W(V,t) agree on their pairwise products. Indeed their pullbacks to every T_i agree with a_i, so their equality open pulls back to the whole family; by joint surjectivity its complementary set is empty, hence that equality open is the whole product. The étale sheaf property of Fbig now glues them uniquely to a section a∈Fbig(T). On T_i, equality of a and a_i can be checked on their equality open; the representative covering ensures this open is all of T_i. This proves existence. If a,b have the same pullbacks, their equality open contains the jointly surjective images of all T_i, so equals T; hence a=b. [F1, F2, F3, F4, step 6.1, given, construct, algebra]

8.1 Therefore Fbig satisfies the actual arbitrary-family fppf sheaf axiom. For an abelian sheaf the group operations descend by uniqueness, giving the same assertion in abelian groups. The construction is functorial. Its restriction to S_et is F, so the extension functor is fully faithful; its exactness follows from the already written exact small/big inverse-image calculus (not from an assertion that evaluation on arbitrary schemes preserves epimorphisms). This supplies exactly the sheaf-level hypothesis used in the change-of-topology induction. [F1, F2, F3, F4, step 7.1, given, construct, algebra]

9.1 Sh((Sch/S)_et)→Sh(S_et) be restriction to the small site, with inverse image pi^* constructed by the usual left-Kan-extension/sheafification on the actual site inclusion. The inclusion preserves the final object and finite fibre products, so the inverse image preserves finite limits; it is left adjoint, hence preserves cokernels and is exact on abelian sheaves. These assertions follow by the same matching-family exact-sheafification construction in the preceding explicit calculation, rather than by a theorem for topological spaces. [F1, F2, F3, F4, step 8.1, given, construct, algebra]

10.1 Restriction pi_* is exact as well. Kernels are sectionwise kernels. If A→B is a big-site sheaf epimorphism and b∈B(U) for U→S étale, b lifts on a big étale covering {Vi→U}. Each Vi→S is étale by composition, so this covering is actually in the small site. Therefore its restriction remains an epimorphism. This proves exactness. For F on the small site, the unit F→pi_*pi^*F is an isomorphism: over an object U of the small site the left Kan construction has its own identity presentation, and all covering refinements among these objects remain small; its matching families and gluing are exactly those of F. Thus pi^* is fully faithful. [F1, F2, F3, F4, step 9.1, given, construct, algebra]

11.1 The essential abelian image of pi^* is closed under kernels and cokernels, by exactness and full faithfulness. For an extension0→pi^*F→G→pi^*F'→0, exact pi_* produces0→F→pi_*G→F'→0. Apply exact pi^* and compare this sequence with the original via the counit. The two endpoint counits are isomorphisms; a direct kernel/image chase gives that pi^*pi_*G→G is an isomorphism too. This proves extension closure and hence the weak Serre property required by the topology-comparison induction. [F1, F2, F3, F4, step 10.1, given, construct, algebra]

12.1 Because pi_* is right adjoint to the exact functor pi^*, it sends each supplied injective big sheaf to an injective small sheaf. Both pi_* and pi^* are exact and pi_*pi^*=id. Consequently a supplied injective big resolution of pi^*F restricts to an injective small resolution of F, and its section complex over S is literally unchanged. This proves the natural small/big cohomology identity for every degree. The same degreewise argument gives the bounded-below version. No existence of an arbitrary injective model without choice has been asserted. For any alternative actual Gamma-model, the preceding slice/composition lemma proves its canonical comparison by the named-functor acyclic-model construction; no claim that its terms are acyclic for a different object or direct-image functor is used. [F1, F2, F3, F4, step 11.1, given, construct, algebra] ∎

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
