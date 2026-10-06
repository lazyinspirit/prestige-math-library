# Candidate: checked cellular applicability of stable spectrum localization

Proof-only packet,2026-10-04, for the sole batch23 reviewer. Only this separate artifact is written. It supplies the missing cellular applicability argument and an exact authoritative existence theorem. It does not certify any carrier or claim a recursive proof of the general localization theorem.

## Exact authoritative existence route

Full source read: Hovey, *Spectra and symmetric spectra in general model categories*, <https://arxiv.org/pdf/math/0004051>,487,114 bytes,45 pages,SHA256 `aff62c63a8d4cc3ba62886bd66a8ca0cbaae9018feab50b8b5b2759d8e970081`. Read §2 in full, §3.1–3.8 in full, the complete AppendixA (PDF42–45, DefinitionsA.1/A.3/A.5–A.7,LemmaA.2,PropositionsA.4/A.8,TheoremA.9), and the level-spectrum construction1.8–1.16. The source is retained in `/tmp/derive-stable-hovey.pdf` and its full extraction. The stable-realization packet records the additional §4/§5 reading; those telescope hypotheses are not used here.

The exact theorem is **Hovey2.2**: for a **set S of maps in a left proper cellular model category C**, there exists a **left proper cellular model structure L_SC** with weak equivalences the S-local equivalences, with **unchanged cofibrations**, and with fibrant objects the S-local objects. A local object is an originally fibrant W for which every derived function-complex map map(B,W)→map(A,W), for A→B in S, is weak. The theorem also gives the specified universal property for left Quillen functors taking cofibrant versions of S to weak equivalences. These are the full hypotheses; no almost-finite-generation, compact generation by finitely presented trivial cofibrations, right properness, or properness after localization is required.

Hovey3.3 defines the stable set as F_{n+1}ΣQG→F_nQG for domains/codomains of generating cofibrations;3.4 identifies its local fibrant objects with Ω-spectra. HoveyA.9 says the level-spectrum category is left proper cellular when the base is left proper cellular and Σ is left Quillen. Here the cellular hypotheses and spectrum applicability are proved directly below, rather than inferred from a loose statement that the model is cofibrantly generated. In particular, Hovey's proof ofA.8 refers to Hirschhorn12.4.19; the explicit represented-cell support proof below bypasses that reference in this particular module setting.

The theorem2.2 is an **authoritative theorem route**, as authorized by the helper assignment. Its source imports Hirschhorn's general localization theorem; this packet does not invent a full local proof of that imported theorem. If the integration standard requires a recursively reconstructed proof of all localization foundations instead of this exact source-backed theorem, that foundational proof remains unprovided. The applicability audit below has no such missing cellularity premise once the direct local-model packet is accepted.

## Base and precise inputs

Take X set-sized and C=Open(X), or a small basis closed under finite intersections and containing X. Fix a simplicial ring presheaf B, or a simplicial ring sheaf B for the sheaf version. Use the **module** part of `hagii-direct-local-algebraic-models-candidate.md`. That packet's Sections1–3 construct the actual objectwise/local models, their generating represented free boundary cofibrations I (or sheafified I_sh), a **set J** of local generating acyclic cofibrations by the bounded-cycle-witness Smith construction, and the needed sheaf smallness. Its Section3 supplies the simplicial corner,Section4 the local hypercover characterization,Section5 coefficient/pullback transfers. Those are mathematical constructions whose sole-owner review remains necessary; a candidate file's presence is not acceptance of its proof.

The previously checked affine/localization packet supplies the affine module cofibration injectivity, tensor-flatness and left properness; normalized homology commutes with filtered stalk colimits. The stable-realization packet supplies Σ=M⊗_Z(reduced Z[S¹]), its left Quillen corner argument, and its preservation of weak equivalences. This applicability packet does not transfer unrelated space-valued Kan/Ex∞ assumptions into those algebraic module models.

## 1. Base left properness and effective monomorphisms

The category of simplicial B-modules is abelian: kernels and cokernels are degreewise B_n-module kernels/cokernels with induced simplicial operators and restrictions. For sheaves these are the module sheaf kernels and sheafified cokernels, and exactness is stalkwise. Variable simplicial coefficients do not change this elementary abelian assertion.

Every represented free boundary cell is degreewise a split injection: the free generators for ∂Δ[n] are a subset of those for Δ[n]. A pushout simply substitutes the old values of those boundary generators and adjoins the complementary generators. Evaluation is degreewise injective in presheaves, and after sheafification the stalk cell is the identical affine injection. Transfinite composition and retract preserve injection. Thus every Cof map is a monomorphism of simplicial modules, whether or not every monomorphism is Cof (the latter is not asserted).

Every mono in an abelian category is effective: for M↪N, the difference of the two maps N⇒N⊔_M N has kernel M. Equivalently compute N⊔_M N as (N⊕N)/{(m,−m)} and observe that (n,0)=(0,n) precisely when n lies in M. This is natural in every degree and restriction, and proves the literal equalizer condition of HoveyA.3. Hence module cofibrations are effective monomorphisms.

The local module model is left proper. A pushout of a stalkwise weak map along Cof has on every stalk the pushout of an affine weak map along an affine cofibration. Stalks commute with that pushout; affine module left properness makes each pushout weak. Its global map is therefore W by the direct local model's definition. The same argument works for presheaves and sheaves. It does not assert that arbitrary localized space-valued models are right proper.

## 2. Compactness relative to the represented cell set

Fix an infinite cardinal ρ at least the cardinality of the site's arrows, and at least countable. In the sheaf case include the size of all possible open covers; every cover can be represented as a subset of the site's arrow set, so a larger fixed site bound suffices. Coefficients belong to the fixed B and are retained in every subcomplex. A **relative** subcomplex always contains the whole initial object; its cardinal bound counts adjoined cells, not the size of that initial object or its coefficients.

Consider a presented relative I-cell complex Y→Z. In any fixed simplicial degree, each cell pushout is a split extension by its complementary free generators; at a limit the presheaf colimit is the corresponding union. Thus a section over U uses only finitely many adjoined generators at the presheaf level. For sheaves it is locally represented by such finite sums: take a cover of U by represented opens on which the section is a finite sum. There are at most ρ members in a chosen such cover, so its total support consists of at most ρ cells. The same statement holds at an arbitrary transfinite final stage; sheafification can require gluing many local representatives, so **finite** global support is not asserted.

The domain or codomain of I is the free B-module on h_U×K with K=∂Δ[n] or Δ[n]. A map from it into Z is determined by the images of finitely many nondegenerate simplices in the indicated section degrees, with their finite face equations. Each image has cell support of size at most ρ. Collect these supports. For every selected cell, also collect the supports of its attaching-boundary images. Its boundary has finitely many nondegenerate simplices; the same bound applies. Repeat this closure countably. A union of countably many sets of cardinal≤ρ still has cardinal≤ρ.

This closed set of cells defines a genuine relative subcomplex. Every attaching boundary of a selected cell lands in the earlier selected subcomplex: its chosen support was included, and the support uses only cells with strictly smaller presentation ordinal. Equalities of the boundary maps hold there because subcomplex inclusions are monomorphisms, so they reflect the already valid equalities in the ambient complex. Include the selected cells in their original order. At each stage the cell pushout maps monomorphically to the ambient one, since the extra complementary generators are disjoint and the old stage is monic. This proves existence of the selected subcomplex and the factorization of the original map through it.

There is no transfinite ancestry omission in this argument: each included dependency has a smaller presentation ordinal; all its dependencies are added in the next closure step. The countable union closes every finite dependency path. No infinite descending ordinal path exists. In presheaves one can sharpen this to finite support/finite-branching well-founded ancestry, but the uniform boundρ suffices for both models and avoids imposing finite gluing on sheaves.

Accordingly each I-domain and I-codomain is ρ-compact **relative to I** in the exact sense of HoveyA.7: for every relative cell presentation, every map factors through a relative subcomplex with at mostρ cells. This is the compactness condition in cellularity, not the different statement that all filtered-colimit section evaluations commute with ω-colimits.

## 3. Smallness of the actual local J-domains

The direct local packet constructs J as a **set** of bounded weak-cell interpolation maps; their domains are actual module presheaves/sheaves with set-sized section/operator data. Choose a regular λ larger than the total data of every domain in this set and larger than the site's covering-arrow bound. For presheaves, λ-filtered colimits are sectionwise, and a map out of a fixed J-domain involves fewer thanλ choices and equations, so those data stabilize at a common stage. For sheaves, each covering equalizer/product uses fewer thanλ entries/equations. λ-filtered colimits commute with these set limits by taking a common stage for their witnesses, so they also are computed sectionwise. The same argument then proves domain smallness.

For a λ-long or larger-cofinality ordinal composite of Cof maps this gives the required smallness relative to Cof. Enlarging λ after taking a supremum over the set J is legitimate; its regularity need not be ω. This is exactly HoveyA.1(2). No bounded-size assumption on all fibrant objects is needed, and no almost-finite-generation assertion for local J is made.

Sections1–3 establish every clause of HoveyA.1 for the **local module model**: cofibrant generation by the actual I,J; I-domain/codomain relative compactness; J-domain smallness relative to Cof; effective monomorphic Cof. Its left properness is proved in Section1.

## 4. Level-spectrum cellular applicability directly

Let PSp_B be the level-model category of sequential Σ-spectra constructed in the stable-realization packet. Its generating cofibrations are I_sp=∪_{n≥0}F_nI and acyclic generators J_sp=∪_{n≥0}F_nJ. Their level-model small-object proof was supplied there.

Every projective spectral Cof map is levelwise a module Cof map. Hence it is an effective mono: levelwise limits/colimits and the abelian module equalizer argument give the literal spectral equalizer. Left properness also is levelwise, using the base proof and the fact that level weak maps are detected levelwise.

The J_sp domains are small relative to spectral Cof. The enriched ordinary adjunction Hom(F_nA,E)=Hom(A,E_n), levelwise colimits, and J-domain smallness in the base prove this directly, with the same sufficiently large regular ordinal. Evaluation of spectral Cof maps gives module Cof maps, so the permitted smallness class is correct.

For compactness, each spectral cell F_k i, evaluated at level n≥k, is Σ^{n−k}i. The reduced simplicial circle is finite, and its finite smash powers are finite simplicial sets. Hence this evaluated map is a represented free-module map on a finite pointed simplicial inclusion (tensor the original finite boundary inclusion with the finite circle power). It has a **finite relative module boundary-cell decomposition**, by adjoining its finitely many nondegenerate relative simplices in dimension order. Thus any finite-generator map into a presented spectral cell object at a fixed level has support at mostρ **spectral** cells: choose supports in those module decompositions and retain the corresponding original spectral cells.

A map F_nA→E, for A an I-domain/codomain, is determined by A→E_n. Choose that initial spectral support. A selected spectral cell's entire attaching map is determined by its boundary in its own starting level k; the finite-domain support argument chooses at mostρ earlier spectral cells containing that boundary. Close countably, preserving original presentation ordinals. Exactly the Section2 monic-subcomplex argument constructs a spectral subcomplex of size≤ρ. Thus F_nA is ρ-compact relative to I_sp, directly, without the retract-of-presented-cell lemma imported in HoveyA.8.

This verifies all cellular conditions and left properness for PSp_B. It reproduces the conclusion of HoveyA.9 with actual applicability to this variable-coefficient local sheaf module model.

## 5. Stable set, existence, and exact cotangent applicability

Take a set of cofibrant replacements of the domains/codomains of I and let

S_st={F_{n+1}ΣQG→F_nQG: n≥0,G an I-domain or I-codomain}.

The map is adjoint to the identity on ΣQG. This is a **set**, indexed by a set of represented opens/finite boundaries and countably many spectrum degrees. Its endpoints are cofibrant in the level model. The suspension is left Quillen by the checked simplicial module corner and finite-circle construction. Thus all hypotheses of Hovey2.2, applied to PSp_B and S_st, have now been checked.

The resulting L_{S_st}PSp_B exists by that exact theorem. Cofibrations remain I_sp-Cof. For a level fibrant E, enriched free/evaluation adjunction identifies the locality test with

Map(QG,E_n)→Map(ΣQG,E_{n+1})=Map(QG,ΩE_{n+1}).

The chosen G detect weak module maps between fibrant targets: in particular I contains the free h_U×Δ[0] codomain, whose mapping space is E(U); equality for all these section homotopy groups detects stalk weak maps. Conversely weak maps between fibrant objects give mapping equivalences from cofibrant G by the proved corner/replacement invariance. Therefore local objects are precisely level locally fibrant Ω-spectra. This is the exact HAGII1.2.11.1 stable-module model, not a merely connective substitute.

The stable cotangent packet's F₀K source is cofibrant for this model, and its level fibrant replacement is an Ω-spectrum by the proved unit K→RΩΣK. Its mapping-spectrum computation uses the actual cofibrant-source/fibrant-target mapping spaces of this just-specified localization. The coefficient/pullback functors take free represented cells to corresponding cells and commute with Σ; their right adjoints preserve local-level fibrant Ω-spectra. They therefore induce the stable derived adjunction calculated in the prior packet. No finite-generation/telescope hypothesis from Hovey§4 is needed for K or for arbitrary stable test spectra.

The stable enrichment also can be checked without importing a generic all-simplicial-set Kan model. For every simplicial set K, the level tensor functor (−)⊗K is left Quillen by the already proved algebraic boundary/horn corner and the free F_n-cell reduction. Tensor commutes with Σ. It sends s_{n,G} to s_{n,G⊗K}; the latter is a stable equivalence for any cofibrant G⊗K because its locality test is Map(G⊗K,E_n)→Map(G⊗K,ΩE_{n+1}) against a level fibrant Ω-spectrum. The universal left-Quillen clause of theorem2.2 therefore makes (−)⊗K left Quillen for the stable model too.

If f is a stable acyclic cofibration and i:∂Δ[m]→Δ[m], both f⊗∂Δ[m] and f⊗Δ[m] are stable acyclic cofibrations. The map from the domain tensor A⊗Δ[m] to the pushout domain of f□i is the pushout of f⊗∂Δ[m], hence a stable weak map. Its composite with f□i is f⊗Δ[m], also weak; two-out-of-three makes f□i stable weak. It is a cofibration by the level corner. If i is a horn and f is any Cof, the original level algebraic corner already makes f□i a level acyclic cofibration, hence a stable one. Colimit/retract induction extends the generator arguments. Transposition proves the stable simplicial mapping-corner axiom. Thus the actual enriched cofibrant-source/Ω-fibrant-target mapping spaces used in the preceding cotangent spectrum packet are justified in this localized model, not assumed merely because a localization exists. This is the concrete module version of the compatibility discussed in Hovey5.6–5.7; that complete source proof (PDF26–27) was additionally read.

## Integration disposition

If the sole reviewer accepts the direct local algebraic module-model construction and its affine inputs, **no extra cellular applicability premise remains**: it has been proved here for presheaves and sheaves, and for the level spectra. Hovey2.2 is an exact authoritative theorem with all its hypotheses checked; together with the explicit locality tests it supplies stable spectrum-localization existence for the cotangent framework. This is source-backed existence, not a locally reconstructed proof of general Hirschhorn localization.

The helper assignment explicitly allowed this exact-authoritative-theorem alternative. If that route is accepted for integration, the earlier stable-realization packet's premise3 can be replaced by this source-backed construction. If the owner instead requires recursive reconstruction of the localization theorem itself, preserve the hold on that exact general theorem; this packet has not done it. In either case the status of the separate direct local-model proof review and the derived ringed-space/chart presentation interface must be reported honestly. No shared readiness decision is made here.
