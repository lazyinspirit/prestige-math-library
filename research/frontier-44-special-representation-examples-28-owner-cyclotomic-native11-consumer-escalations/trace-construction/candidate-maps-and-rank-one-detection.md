# Actual candidate second maps and a smaller noncircular route

**Native sign binding:** All source crossing/divided-difference formulas below use κ=−τ_native for every color pair, as proved and recorded in `native-sign-dictionary-pass1.md`; source operators must not be identified directly with native generators.

This supplements `proof-route-and-open-contract.md`. Construction by /root/repair_klr_global_basis/cyclotomic_trace_construction for frontier-44-special-representation-examples-28. No mathematical acceptance or native closure is recorded.

Full Rouquier0812.5023 was retrieved as `rouquier.pdf` and extracted as `rouquier.txt`; its retrieval/hash record is `rouquier-retrieval.json`. Read scopes: §§4.1.4–4.1.5, §§5.1.1–5.1.3, §§5.2.1–5.2.3 and Theorem5.16, extracted text. In particular the following is based on actual formulas, not the theorem title alone.

## Candidate maps from the canonical commutator

Use Rouquier's orientation temporarily: G raises integer weight m by2, H lowers it by2, G⊣H with existing unit η:1→HG and counit ε:GH→1. Let x be the dot of G and σ the mate of the same-color nil-Hecke crossing. The required canonical split is

m≥0: ρ_m:GH1_m→HG1_m⊕1_m^{⊕m}, with components (σ, ε∘x^0H,...,ε∘x^{m-1}H);

m≤0: ρ_m:GH1_m⊕1_m^{⊕(-m)}→HG1_m, with components (σ, Hx^0∘η,...,Hx^{-m-1}∘η).

At m=0 it is just σ. These are the exact maps, not a merely abstract isomorphism of the two functors. Grading shifts must be retained in the summands; all displayed notation suppresses those shifts only for the definition of maps.

Define a candidate second counit c_m:HG1_m→1_m as follows.

For m<0, c_m=(-1)^{m+1} pr_last∘ρ_m^{-1}, where last refers to the last identity summand in GH⊕1^{-m}.

For m≥0, precomposition by σ identifies maps HG→1 with maps GH→1 modulo the span of ε, εxH,...,εx^{m-1}H. Define c_m as the unique map whose class is (-1)^{m+1}εx^mH. This uniqueness is literally a consequence of the canonical direct-sum split ρ_m: a map on HG extends via the HG projection and two extensions differ by the identity-summand projections.

Define a candidate second unit u_m:1_m→GH1_m as follows.

For m>0, u_m=ρ_m^{-1}∘last_inclusion∘(-1)^{m+1}.

For m≤0, postcomposition with σ identifies maps 1→GH with maps 1→HG modulo the span of η,Hxη,...,Hx^{-m-1}η. Define u_m as the unique map whose class is (-1)^m Hx^{-m}η.

These are the four genuine formulas in Rouquier §4.1.4. No inverse trace or Frobenius pairing appears in their construction. To compare to the repository's unshifted induction/restriction use G=F_i, H=E_i and m=-〈h_i,Λ-β〉, and restore the shifted H in Rouquier's graded conventions. The action helper is proving the required canonical rho, so the remaining compatibility must be checked with its explicit unit/counit/crossing and shifts. Do not copy the displayed signs or half-degree conventions into the repository before that comparison. For physical h>0, the repository second counit on EF is the top identity coefficient of the positive split FE⊕[h]→EF, up to the normalization sign, and has degree -2d_i(h-1).

## Turning invertible triangle composites into an actual adjunction

Given functors H,G and maps u:1→GH,c:HG→1, let A=Gc∘uG and B=cH∘Hu. If A and B are invertible, the maps already give natural mutually invertible Hom correspondences after normalization. Explicitly, define α(f)=Gf∘u_X for f:HX→Y, and β(g)=c_Y∘Hg for g:X→GY. Then βα(f)=f∘B_X and αβ(g)=A_Y∘g. Hence α is an isomorphism, with inverse β∘(postcompose A^{-1}), equivalently (precompose B^{-1})∘β. This gives H⊣G and actual triangle identities, not just candidate cups/caps. This argument works homogeneously, with the correct shifts on H restored.

## Closed detection argument (Rouquier Lemma5.2)

Work in the bounded homotopy category of the additive representation; the given adjunction extends termwise. Suppose H is locally nilpotent. If C has Hom(G^aM,C)=0 for every a≥0 and every M with HM=0, choose the largest a with H^aC≠0. Then H(H^aC)=0 and adjunction gives End(H^aC)=Hom(G^aH^aC,C)=0, a contradiction to its nonzero identity. Thus C=0.

If T has a right adjoint T^r and T G^aM=0 on all such highest/lowest generators, then Hom(G^aM,T^rT C)=Hom(TG^aM,T C)=0. The preceding paragraph gives T^rT C=0; adjunction then makes End(T C)=0, so T C=0. If a natural map between functors with right adjoints is an isomorphism on all these generators, apply this result to its mapping-cone functor. Its cone has a right adjoint, formed as the shifted cone of the right-adjoint mate, so the natural map is an isomorphism everywhere. All these statements are valid before a second adjunction is proved.

For one candidate triangle composite on G, the cone has a right adjoint because G⊣H is the supplied adjunction. The other triangle composite is handled by the same argument in the opposite representation. This is Rouquier Theorem5.16's noncircular device; it must not be replaced by assuming H already has a right adjoint.

## What remains to make this a complete local biadjunction proof

1. Transfer candidate triangles from the universal rank-one representation to every generator G^aM with HM=0. The formal quotient representation L(-n) has vacuum 1_-n, H1_-n=0, and G^a1_-n generates it. For any M with HM=0 and weight -n, evaluation of words/morphisms on M factors through L(-n), because every killed morphism factors through H1_-n. The candidate maps use only rho inverse, x, η and ε, so evaluation intertwines them. Once the triangles are invertible on L(-n), the closed detection proof transfers them to all objects.

2. Prove the rank-one universal model explicitly. Rouquier uses S=k[X_1,...,X_n]^{S_n} and H_{a,n}=NH_a⊗k[X_{a+1},...,X_n]^{S_{[a+1,n]}}. There is a rank-one model on H_{a,n}-free with raising induction and lowering restriction. Its symmetrizing form over S is a composite of nil-Hecke matrix trace and divided-difference integration; this is an elementary rank-one calculation, not cyclotomic Frobenius used circularly. The relative counit and unit are the explicit dual-basis maps of §§5.2.1–5.2.2, and both triangles hold by the dual-basis identities. Proposition5.14 shows they equal the candidate maps above.

3. The universal-to-model equivalence (Proposition5.15) requires the divided-power identity G^{(n)}:End(1_-n)≅End(G^{(n)}1_-n) coming from the iterated canonical rho/nil-Hecke calculation (Lemma4.12). It then compares the vacuum endomorphism algebra with S. This cannot be asserted from a projective Grothendieck action alone. The iterated divided-power calculation and the four polynomial formulas verifying Prop5.14 are the remaining actual calculations to author locally.

Thus this is a significantly smaller route than rebuilding Webster's entire minimal-parabolic model, with explicit candidate second maps and a proved detection argument. The source's rank-one model calculation plus divided-power normal form are still not authored here as complete local suppliers. There is no honest passing generic trace proof yet. Separately, cyclicity still needs the different-color mates calculation, either Webster Figure6 expanded or the cyclic-2-category normalization proved algebraically; this step is independent of the rank-one triangle issue.
