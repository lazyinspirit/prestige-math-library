# Local algebraic consequences of the Murphy/semistandard data

Author: `/root/repair_klr_global_basis/native24_cyclotomic_schur_construction`. This is proof construction only. Sections1–4 apply to the actual Murphy cellular datum constructed in `murphy-and-jm-local-construction.md`, relative to its named narrow inputs. Sections5–7 consume the **explicit still-unproved semistandard datum** in `remaining-semistandard-identities.md`. Neither a citation nor this conditional proof discharges that datum.

## 1. Cell forms and all simple labels

Let A be a finite-dimensional cellular F-algebra with basis `c_st^λ`, higher ideals `A^{>λ}`, and right cell modules Cλ. Multiplication and its involution show that the coefficient of `c_uv^λ` in `c_us^λ c_tv^λ` modulo higher shapes is a scalar `Gλ(s,t)` independent of u,v. Indeed the right cell axiom first leaves the first index u unchanged, and the left axiom then leaves the last index v unchanged; comparing the two expansions leaves only that common index pair. The involution gives `Gλ(s,t)=Gλ(t,s)`. Associativity of three factors yields `<x a,y>=<x,y a*>`. Consequently the radical Rλ of this finite Gram matrix is a submodule, and the rank-one action is `x c_uv^λ=<x,c_u> c_v`.

If the form is nonzero, any vector outside Rλ has nonzero pairing with some u; after scaling and using the rank-one operators it generates every basis vector of Cλ. Therefore every proper submodule is contained in Rλ, and `Dλ=Cλ/Rλ` is a nonzero simple head with unique maximal submodule Rλ. Extending the field preserves the Gram rank and these rank-one operators, so Dλ is absolutely simple. The correct criterion is **nonzero form**, not nondegenerate form on Cλ. Degenerate but nonzero forms are allowed. No questionable “nonzero iff nondegenerate” clause from another contract is consumed.

To exhaust the simples, let D be any simple A-module. Pick a cell ideal `Iλ=A^{≥λ}` that acts nontrivially on D and is maximal in the finite cell order among such ideals. All strictly higher ideals then annihilate D. Thus the cell layer `Jλ=Iλ/A^{>λ}` acts nontrivially, and `D Jλ=D`. If its Gram matrix were zero, `Jλ²=0`, contradicting `D Jλ²=D`. Choose u with `D c_uu^λ≠0` or, more generally, a nonzero `d c_su^λ`; multiplying by `c_uv^λ` produces the right cell row. Its span is a quotient of Cλ that is all of D by simplicity. Since every proper submodule of this nonzero-form Cλ lies in Rλ, that simple quotient is Dλ. For the general off-diagonal choice, first choose s,u,d with `d c_su≠0`; the map `c_v↦d c_sv` is the cell-row map and has nonzero image. This proves all simple labels without classifying which multipartitions have nonzero forms.

The order and distinctness follow directly from the ideals. Cλ annihilates Iµ whenever λ does not dominate µ: products in `Iλ∩Iµ` have only shapes strictly above λ in this case. Dµ does not annihilate Iµ because its rank-one action is nonzero. Hence `[Cλ:Dµ]≠0` implies λ dominates µ. Rλ annihilates Iλ by the rank-one action, while Dλ does not, so `[Cλ:Dλ]=1`. Distinct nonzero heads cannot be isomorphic: their ideal supports would force both λ≥µ and µ≥λ. This proves the complete split simple-label and triangular multiplicity statements over every F.

## 2. Each cell module belongs to a single block, even if its form is zero

Let z be a central idempotent of A. On the cell layer `Jλ≅(Cλ)^*⊗_F Cλ`, equality of left and right multiplication by z gives `B⊗Id=Id⊗Aλ`, where B and Aλ are its first- and second-factor coefficient matrices. Choose bases in both factors and compare matrix coefficients. Every off-diagonal coefficient of B and Aλ is zero, and every diagonal coefficient of either equals every diagonal coefficient of the other. Thus both are one scalar θλ times the identity. Since z is idempotent, θλ is0 or1. This tensor argument does not divide by the Gram matrix and still works when it is identically zero.

Apply it to all primitive central idempotents, whose sum is1. Exactly one acts as1 on the nonzero cell module Cλ, the others as0. Thus Cλ and every composition factor of it belong to one block. This proves the cell-purity claim required for all Specht modules, including labels with Dλ=0.

## 3. The exact shared-cell-factor linkage criterion

Because the simples are absolutely split and self-dual under * (their nonsingular quotient forms identify each with its contragredient), choose one primitive idempotent eµ for each simple Dµ with `dim Dν eµ=δµν`. The exact functor `V↦V eµ` gives `dim Cλ eµ=[Cλ:Dµ]=dλµ`; the corresponding left-factor dimension is the same after applying *. Filter A by a linear extension of its cellular ideals and apply `eµ(-)eν`. The cell layer is the outer tensor product of its two cell modules. Exactness and dimension additivity therefore give

`dim_F eµ A eν=Σ_λ dλµ dλν`.

No multiplicity computation is hidden in this identity. Projecting with an idempotent is exact: for a surjection lift a vector and multiply the lift by the idempotent; for an injection restrict it. The same reasoning gives exactness for the two-sided projection.

A finite split algebra's blocks are the connected components of its primitive-idempotent corner graph: put an edge whenever `e A f` or `f A e` is nonzero. For a union of graph components, the sum of its full primitive idempotents commutes with every corner of A and is central. Conversely, a central block idempotent is0 or1 on each primitive idempotent and cannot separate a nonzero corner. These two statements prove the graph characterization; repeated primitive idempotents for the same simple are linked because their matrix units survive in the semisimple quotient.

The displayed Cartan identity says that two simple labels have a nonzero corner exactly when they occur together as factors of some cell module. Consequently two simples lie in the same block exactly when a finite chain of cell modules links their factors. Since every cell module is pure and every simple occurs in a nonzero-form cell head, two cell modules lie in the same block exactly when there is a chain of cell modules with each neighboring pair sharing a simple composition factor. This is the exact typed shared-standard/Specht linkage criterion; it is not inferred for arbitrary unrelated modules.

## 4. Endomorphism covers containing the regular module preserve the center

This part requires no Schur cellular or semistandard theorem. Let H be any finite-dimensional F-algebra and M any finite right H-module containing H as a direct summand. Put `C=End_H(M)` with ordinary composition and let e project onto that summand. Then `eCe=End_H(H)≅H` via left multiplication; moreover `Ce≅Hom_H(H,M)≅M` as a left C-module by evaluation at1. Thus `End_C(M)≅H^op`, correctly interpreted as the right-H action.

There is a more explicit center proof. If c is central in C, it commutes with e and restricts on the H summand to left multiplication by some h. For every m∈M, the H-map `f_m:H→M`, `a↦ma`, is an off-diagonal block of C. Commuting c with that block gives `c(m)=mh`. Since c is H-linear, applying this equality to m=1 in the H summand gives `ah=ha` for every a∈H. Hence h∈Z(H). Conversely, for h∈Z(H), the right-action map `m↦mh` is H-linear and commutes with every H-endomorphism of M, hence belongs to Z(C). These constructions are inverse unital F-algebra homomorphisms.

Therefore `Z(C)≅Z(H)` and their primitive central idempotents correspond bijectively. In the cyclotomic case `ω=(∅,...,∅,(1^n))` has `mω=1`, so `M=⊕_(λ multipartition)mλH` always contains H and this center/block correspondence applies already. It neither assumes nor proves the desired residue-content block classification.

## 5. Schur standards, nonzero heads, and split quasiheredity

Assume now the exact semistandard datum in the accompanying gap file: the maps `φ_ST` form a cellular basis of this actual endomorphism algebra C, with shapes all multipartitions and semistandard tableaux of multipartition types. Let ∆λ be its right cell module with basis v_T. The unique semistandard tableau `Tλ` of shape/type λ gives `φ_(Tλ,Tλ)=eλ`, the identity projection onto Mλ. This is an actual idempotent, so the defining cell product gives `<v_(Tλ),v_(Tλ)>=1`. Hence every standard head `Lλ=∆λ/rad∆λ` is nonzero. Section1 proves all Lλ are absolutely simple, pairwise distinct and exhaustive, with `dλµ≠0⇒λ≥µ` and `dλλ=1`.

For completeness, here is the quasiheredity proof rather than a citation. Remove maximal remaining cells successively in a linear extension. In the relevant quotient algebra B, the next cell layer J has basis c_st and a distinguished index u with Gram value G(u,u)=1. Then `e=c_uu` is idempotent, `c_su c_ut=c_st`, and the multiplication map `Be⊗_F eB→J` is an isomorphism on those basis elements. Also `eBe=Fe`: the cell law and J's maximality show that any `e b e` is scalar e. Thus Be is projective as a left B-module, J is a direct sum of copies of Be, and `e rad(B)e=0` since the corner is a field. Hence J is a split heredity ideal. Iterating gives a split heredity chain and identifies the cell modules ∆λ as its standards. This proof works equally in the integral cellular situation when the unit Gram entry remains1; the projective tensor argument is explicit. For the current field claim no separate abstract quasiheredity result is required.

The triangular matrix of standard multiplicities has diagonal1, so the classes `[∆λ]` form a Z-basis of `G_0(C-mod)` (invert its finite unitriangular matrix by backward substitution). Projecting to blocks is exact. Since each ∆λ is block-pure by §2, if an actual class supported in one block equals `Σ aλ[∆λ]`, every coefficient of a standard in another block vanishes by this basis independence. This is exactly the character/block-separation input for the Jantzen equivalence argument.

Weight projections eν are self-adjoint: their semistandard representatives are `φ_(Tν,Tν)`, fixed by the cellular involution. Their action on ∆λ is `v_T eν=δ_(type(T),ν)v_T`, so `dim ∆λ eν` is the semistandard Kostka number. A semistandard tableau of shapeλ and typeν implies λ≥ν. For a component k and row cutoff r, entries whose type component is below k cannot occur in physical components at least k; entries with type component k and row at most r cannot occur in physical components greater than k, and within physical component k they occupy at most r nodes per column by strict column increase. Thus their total number `Σ_(a<k)|ν^(a)|+Σ_(i≤r)ν_i^(k)` is at most `Σ_(a<k)|λ^(a)|+Σ_(i≤r)λ_i^(k)`, exactly the multipartition dominance inequality. There is one tableau of shape/typeλ. Thus the finite Kostka matrix on multipartition weights is unitriangular, and the vector of weight dimensions is injective on the Z-span of standard characters. This claim is conditional on the **actual semistandard basis**, not on a generic character analogy.

## 6. The Schur functor and the radical calculation

The corner functor `V↦Ve` for `e=eω` is exact, and `eCe≅H` as in §4. Semistandard tableaux of typeω are canonically standard multitableaux: replace the label (r,ℓ) by r. The assumed semistandard cell multiplication therefore identifies the surviving standard vectors `v_t` in ∆λe with the Murphy vectors m_t of Sλ, with identical right-H action. This is an explicit `∆λe≅Sλ`.

Their forms agree as well. In C, `<v_s,v_t> eλ ≡φ_(Tλ,s)φ_(t,Tλ)` modulo higher C-shapes. Evaluate the two maps at mλ. The first map is an H-map from H to Mλ, hence is left multiplication by `m_(t^λ,s)`; the second sends mλ to `m_(t,t^λ)` in H. The evaluated product is therefore `m_(t^λ,s)m_(t,t^λ)`, whose coefficient of mλ modulo higher H-shapes is exactly the Specht Gram entry. Evaluating a higher Schur map produces a sum of higher Murphy shapes by its explicit m_ST definition, so the comparison is legitimate.

Because e*=e, the e and 1−e parts of ∆λ are orthogonal. If x∈∆λe pairs to0 against ∆λe, it also pairs to0 against ∆λ(1−e), since `<x,y(1−e)>=<x(1−e),y>=0`. Thus

`rad(∆λ)e = rad(∆λ)∩∆λe = rad(∆λe)`.

The form comparison then gives `Lλe≅Dλ`, including zero Dλ. Apply the exact functor to a composition series of ∆λ. Each simple factor Lµ becomes Dµ or0. Section1 proves that the nonzero Dµ are pairwise distinct and exhaustive. Therefore for every µ with Dµ≠0,

`[∆λ:Lµ]=[Sλ:Dµ]`.

This proves the multiplicity identity locally, including arbitrary field characteristic and repeated charges. It does not assume a simple-label bijection through e; vanishing Schur-simple images are expressly retained.

## 7. Typed Schur/Specht block linkage

The center isomorphism in §4 sends a central block idempotent b of H to the same right-action projection on M, hence to its corresponding central idempotent b_C of C. On the corner functor, `V b_C e=(Ve)b`. Every ∆λ is nonzero and block-pure by §2, and `∆λe=Sλ` is nonzero (its Murphy standard-tableau basis exists). Consequently the block supporting ∆λ corresponds to exactly the block supporting Sλ. Thus

`∆λ,∆µ same C-block ⇔ Sλ,Sµ same H-block`.

Sections2–3 give both sides' chain description by shared constituents. Section6 gives the exact nonzero-simple multiplicity transfers when needed. This completes the algebraic block-linkage implication from the semistandard construction; it does not assert that equal residue contents suffice for linkage. That separate content/Jantzen/combinatorial theorem remains with its own constructor.

## Scope of what remains

The field Schur construction and its O-form still require a proved integral semistandard permutation-module basis and a proved endomorphism-map basis for the actual C. These are the exact unresolved identities in the next file. Generic nondegeneracy of all standard forms and the signed rim-hook Gram determinant formula are not proved here. They are not consequences of a nonzero head alone and are assigned separately. All claims remain drafts with no native certificates or gate edits.
