---
id: lem-ordinary-adic-degree-zero-compact-support-on-nonproper-smooth-curves
kind: lemma
title: "Ordinary and rational-adic degree-zero compact support on a nonproper smooth curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - lem-ordinary-lisse-sheaf-on-smooth-curve-has-finite-etale-trivialization
  - lem-ordinary-etale-degree-zero-compact-support-on-a-curve
  - def-l-adic-sheaf-as-compatible-system
  - thm-nagata-compactification-for-separated-finite-type-morphisms
  - def-proper-morphism
  - thm-integral-closure-finite-finite-type-domain-over-field
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - thm-krull-intersection-theorem
  - def-open-immersion-schemes
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I §18"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let k be an algebraically closed field, U a nonempty connected smooth separated finite-type nonproper k-curve, ℓ a prime invertible in k, and F an ordinary étale-locally constant sheaf of finite-dimensional Q_l-vector spaces on U. Then F has a finite-free lisse integral adic model L• whose ordinary rationalization is F. For every n≥1 the degree-zero compactly supported ordinary section group Γ_c(U,L_n) is zero. Consequently (lim_n Γ_c(U,L_n))⊗_{Z_l}Q_l is zero and agrees canonically with Γ_c(U,F), which is also zero. This gives an unconditional degree-zero comparison for the specific sheaf and curve. If a normalized adic derived compact-support functor is supplied and its degree-zero evaluation is the derived inverse limit of the finite-level ordinary compact-support complexes, this same group is its H_c^0. The lemma does not assert existence of that general derived functor or higher-degree comparisons.

## Facts & Assumptions

**Given:** k, U, ℓ and F as in the statement.

[F3] A lisse finite-free integral adic model is a normalized tower of finite free locally constant Z/ℓⁿ-sheaves with compatible quotient transitions; rationalization tensors morphisms by Q_l. [[def-l-adic-sheaf-as-compatible-system]]

[F4] U admits a proper compactification, and properness includes universal closedness. [[thm-nagata-compactification-for-separated-finite-type-morphisms]] [[def-proper-morphism]]

[F5] The normalization of any finite-type domain over a field in its own fraction field is finite. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F6] Height-one localizations of normal Noetherian domains are discrete valuation rings. [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]

[F7] An étale map has local standard-étale charts and is universally open without a choice premise; at each point its fibre is a finite separable residue extension, and étaleness includes flatness. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F8] If R is Noetherian and a belongs to an ideal I, then every element of ∩ IⁿR is killed by 1−a for some a∈I. In a local ring with I in the maximal ideal, 1−a is a unit; thus this first, choice-free clause gives zero intersection. [[thm-krull-intersection-theorem]]

[F9] Open immersions identify the source with an open subscheme of the target. [[def-open-immersion-schemes]]

## Proof

For steps 1.1–4.1 write V for the given sheaf F and E for Q_l. In steps 8.1 onward, V instead denotes the finite-dimensional fibre of F on the resulting cover.

1.1 Smoothness makes U regular. Its irreducible components are disjoint open-and-closed subsets, so connectedness makes U integral. Let K=k(U). By local constancy, one étale object V₀→U carrying a trivialization has a point over the generic point. Shrink around that point to a finite-presentation affine chart; its residue field M at that point is a finite separable extension of K by [F7]. Choose a finite Galois extension L/K containing M. These choices are finite. [F7, given, algebra, choose]

1.2 Normalize U in L. To see finiteness on an affine Spec A⊂U, take a primitive element of L/K and multiply it by one nonzero element of A to make it integral over A. Then A[θ] is a finite A-algebra and a finite-type k-domain with fraction field L. By [F5] its normalization in L is finite, and by transitivity of integrality it is exactly the integral closure of A in L. The integral closures commute with localization and glue to a finite normal integral curve T₀→U. The finite Galois group G=Gal(L/K) acts on T₀. At each closed point the normal local ring is a DVR by [F6]. The corresponding local ring of U is also a DVR; a finite torsion-free module over a DVR is free by finite row elimination, so T₀→U is finite locally free. [F5, F6, step 1.1, algebra]

1.3 The generic map from the chosen affine étale chart to Spec L is specified by finitely many elements satisfying finitely many relations. Clearing denominators gives a map from a dense open T₁⊂T₀ into that chart, and hence a frame of V on T₁. Shrink T₁ to the finite-étale locus of T₀→U: the trace determinant is nonzero generically because L/K is separable. [step 1.1, step 1.2, algebra]

2.1 The frame extends uniquely over T₀. For this, let W be a quasi-compact étale T₀-scheme on which the pullback of V is constant. W is Noetherian and has finitely many connected components. At a point over the generic point of T₀ its local ring is a field. At a point over a closed point, let t be a uniformizer of the T₀-local DVR. Étaleness and the algebraically closed residue field give maximal ideal tO_{W,w}, and flatness makes t a non-zero-divisor by [F7]. The choice-free clause [F8] and the local unit argument give ∩ₙtⁿO_{W,w}=0; every nonzero element is consequently a power of t times a unit, so O_{W,w} is a DVR. Thus W is normal; its connected components are irreducible. Flatness makes each component dominant over T₀, so W×T₀T₁ is dense and connected on each component. Relative to the chosen frame on W, the frame over T₁ is a locally constant invertible matrix, hence one matrix on each dense connected component. Extend that matrix constantly to the component. Such extensions agree on overlaps by density and glue uniquely. This yields an isomorphism V|T₀≅underline(E^r). [F7, F8, given, step 1.2, step 1.3, algebra]

3.1 Transport of the global frame by G gives a homomorphism ρ:G→GL_r(E). Let H=kerρ. Every stabilizer G_t of a closed point t∈T₀ lies in H: its image x∈U and t both have residue field k, and an automorphism over U fixing t acts as the identity on the pullback stalk V_x. In the frame this is ρ. [step 2.1, algebra]

3.2 Form T=T₀/H by invariants over each affine Spec A⊂U. If B is the finite integral closure of A in L, then B^H is a finite A-module as a submodule of the finite module B over Noetherian A; localization makes the affine quotients glue. The scheme T is integral, finite and torsion-free over U and therefore finite locally free. Its generic rank is [L^H:K]=|G/H|. [step 1.2, step 3.1, algebra]

3.3 At each closed point x∈U, G acts transitively on the points of T₀ over x: otherwise the Chinese remainder theorem gives an element equal to 0 on one orbit and 1 on another, while its Galois norm lies in A and would take two different values at x. The corresponding statement for H shows that points of T over x are H-orbits. By step 3.1, G/H acts freely on those orbits, hence there are |G/H| of them. They are k-rational. Since the finite-flat fibre has this same length, all its local lengths are one, so it is reduced and étale over k. The generic fibre L^H/K is separable. The finite module of differentials therefore vanishes on every fibre and hence vanishes by Nakayama; consequently T→U is finite étale. Its G/H action is free and transitive on each geometric fibre, so this connected cover is Galois. [step 3.1, step 3.2, algebra]

4.1 Over the dense locus where T₀→U is étale, the map T₀→T is an H-torsor. The frame of step 2.1 is H-invariant by definition of H, so the sheaf equalizer for that finite étale cover descends it to the corresponding dense open of T. The dense-open extension argument of step 2.1 applies to the normal curve T and extends the descended frame uniquely over all T. Denote this cover q:T→U. Thus q*V is constant. [step 2.1, step 3.1, step 3.3, algebra]

5.1 Put X=U and let G be any ordinary locally constant sheaf on U. We construct and identify its degree-zero compact support. Fix j. For an étale test object V→Xbar put V_X=V×Xbar X. Take sections of G on V_X whose nonzero-germ closure in V is contained in V_X. This is a subgroup. The condition is local for an étale cover: étale maps are open by [F7], and for an open map inverse image commutes with closure, so supports pull back; an open surjection also detects containment after pullback. The sheaf gluing axiom for G therefore glues these sections uniquely and gives a sheaf j_!G on Xbar. Its restriction to X is G. Its stalk at a geometric point over Xbar−X is zero, since every section has an open neighbourhood of that point disjoint from its closed support. This is extension by zero. By construction Γ(Xbar,j_!G) is exactly the displayed subgroup. [F9, F7, given, algebra]

6.1 Let j₁,j₂ be two proper compactifications and suppose the support closure C₁ of s∈Γ(X,G) in Xbar₁ lies in X. It equals the closure C in X and is closed in both X and Xbar₁. Give C its reduced closed-subscheme structure. The graph of C→X→Xbar₂ is closed in C×k Xbar₂ because Xbar₂ is separated. This product is closed in Xbar₁×k Xbar₂. The latter projects universally closed to Xbar₂ by properness of Xbar₁. Hence the image of the graph, which is the image of C in Xbar₂, is closed. It contains all nonzero germs of s and lies in X, so the support closure in Xbar₂ also lies in X. Interchange the compactifications for the converse. [F4, F9, step 5.1, algebra]

7.1 If the right-derived global-sections functor on the ordinary sheaf category is constructed, its degree-zero cohomology agrees with the original left-exact global-sections functor. Applying this to j_!G and using steps 5.1–6.1 gives the claimed identification. This step uses only the defining normalization of a right-derived functor and makes no assertion that the derived functor exists in the rational adic category. [step 5.1, step 6.1, algebra]

8.1 Choose q as in step 4.1 and identify q*F with the constant sheaf on an r-dimensional Q_l-vector space V. The finite Galois group G acts through a representation ρ:G→GL(V). Choose a basis and put L₀=Z_l^r and L=∑_{g∈G}ρ(g)L₀. This finite sum is G-stable and spans V. Clearing finitely many denominators bounds L between two scalar multiples of L₀; it is a finite torsion-free module over the DVR Z_l and hence free by finite row elimination. The descent data on the finite étale G-torsor q give finite locally constant free sheaves L_n descended from L/ℓⁿL, and the natural quotient transitions make L• an adic model in the sense of [F3]. [step 4.1, F3, given, construct, algebra]

8.2 On a quasi-compact étale object W→U, the finite étale pullback T×_U W is Noetherian with finitely many connected components. Sections of its constant finite sheaves are functions on this finite component set; finite products commute with inverse limits and Q_l-rationalization. Thus the ordinary sheaf associated to (lim_n L_n)⊗Q_l descends the constant Q_l-sheaf V with its original G-action and is F. Two invariant full lattices are commensurable, so they define the same rationalized adic object. [step 4.1, F3, step 8.1, algebra]

9.1 Fix one proper compactification j:U→Ubar using [F4]. Let s∈Γ(U,L_n). Its pullback to the connected T is a constant vector v∈L/ℓⁿL. If v=0, the étale sheaf equalizer for q gives s=0. If v≠0, for every closed x∈U the finite nonempty fibre q⁻¹(x) has a k-rational point, so the geometric germ of s at x is nonzero. Closed points are dense in the finite-type k-curve U; the closure of the nonzero-germ locus therefore contains U. If that closure were contained in U, then U would be both open and closed in Ubar. After every base change its base change would remain closed in that of Ubar, so its structure map would be universally closed; it is already separated and finite type and therefore proper, contradicting the statement. By step 6.1, v≠0 cannot occur for a compactly supported section. Thus Γ_c(U,L_n)=0 for every n. [step 6.1, F4, step 8.1, given, algebra]

9.2 The same argument with the ordinary constant sheaf V on T gives Γ_c(U,F)=0. Therefore lim_n Γ_c(U,L_n)=0 and its Q_l-rationalization is zero; the unique map between these two zero groups is the canonical comparison. This conclusion is independent of the chosen invariant lattice and compactification. [step 6.1, step 8.2, step 9.1, algebra]

10.1 Suppose the normalized derived compact-support functor and its finite-level evaluation property in the statement have been constructed. Each finite-level right-derived global-section complex is concentrated in nonnegative cohomological degrees, with H⁰ equal to Γ_c(U,L_n). The inverse-limit functor is left exact. Its right-derived functor, assumed constructed here, carries complexes with no negative cohomology to complexes with no negative cohomology and agrees in degree zero with inverse limit. Apply the truncation triangle C_•^{≥1}→C_•→H⁰(C_•): the first term contributes no degree-zero cohomology after right derivation. Hence H⁰(Rlim C_n)=lim H⁰(C_n). This uses no two-term product model or countable-product exactness. Step 9.1 makes this zero, and tensoring with Q_l preserves zero. This proves the conditional identification without asserting construction of the higher functor. [step 9.1, step 9.2, algebra] ∎

## Scope

This is an unconditional ordinary-to-adic degree-zero comparison and a conditional compatibility with a future derived pushforward. It does not assert general proper-base-change, general rational-adic proper pushforward, or a general equivalence between ordinary and adic sheaves.
