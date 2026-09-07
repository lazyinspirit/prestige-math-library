# frontier-33 batch 10 scaffold

Scope: only this batch's pages.json, coverage.json and notes.md. No item bodies, plan structure, workflow state or published files changed.

Read CLAUDE.md, README.md, SCHEMA.md, assigned task, and design AV-13 (lines 778–830). Spec orders 366.065/366.066 and prerequisite chain retained. Design states AV-11, AV-12 and tensor products, rather than the spec's single preceding B page; its prerequisites are broader in wording and are recorded for Stage 1 drift adjudication, not edited here. AV-13 itself states no numeric order.

Sources read through browser: Vakil March 31 2011 full PDF, 447 physical pages, §§10.1–10.4 (printed pp.201–217 up to 10.4.L), selected §11.1.10 proof and §§11.1.17–18. The design's pp.207–222 do not match this edition; use the actual locators below. November 2017 PDF was inspected to identify edition drift; it puts fibre products in Chapter 9, so the March 2011 edition controls this harvest. These are alternate editions inspected, not a failed-URL replacement. Stacks sections and exact individual lemmas are listed in coverage. Shell curl failed DNS; browser fetched actual mathematical text. No fabricated byte/hash stamp will be written.

Conventions: commutative unital rings, including zero ring; arbitrary schemes unless stated otherwise; no Noetherian, finiteness or flatness hypothesis on fibre products. Canonical isomorphisms are not literal equalities. A geometric fibre uses a chosen algebraic closure of the residue field; closure independence assumes Choice and is noncanonical. Ordinary fibre points are exactly points over s, without extra embedding choices; general product points instead require a prime of a residue-field tensor product. The design's phrase 'plus residue-field embeddings' is corrected accordingly, with Stacks 26.17.5 and 26.18.5–6 as evidence.

Proof boundary: establish geometric adjectives using the chosen-closure convention requested by the design. Do not invoke the equivalence with all extension fields or stability of these geometric properties in subsequent proofs on this page; these broader descent results are explicitly outside the present theorem inventory. All ordinary/geometric examples are computed directly. Classical product comparison uses the already-published affine tensor-domain theorem and classical/scheme equivalence, with no forward dependence on separatedness.

## Item checkpoints

- **def-fibre-product-schemes-universal-property** (definition). Claim/conventions: The scheme fibre product represents compatible pairs of morphisms from every test scheme T; define its projections and Cartesian square.
  Dependencies: def-morphism-of-schemes. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.1.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-fibre-product-unique-canonical-isomorphism** (lemma). Claim/conventions: Two fibre products of the same diagram have a unique projection-compatible isomorphism.
  Dependencies: def-fibre-product-schemes-universal-property. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.3 and 10.1.5.
  Strategy: Apply the universal property in both directions; both composites equal the identity by uniqueness.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **thm-affine-fibre-product-tensor-ring** (theorem). Claim/conventions: Spec B times over Spec A Spec C is canonically Spec(B tensor_A C), as a product in all schemes.
  Dependencies: def-fibre-product-schemes-universal-property, thm-morphisms-into-affine-scheme-global-sections, thm-coproduct-property-of-tensor-products-of-commutative-algebras. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.B; Stacks 26.17.2.
  Strategy: Use Hom(T,Spec R)=Hom(R,Gamma(T,O_T)) for arbitrary T, then the algebra coproduct; affine test schemes alone would be insufficient.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-affine-fibre-product-projections-stalk-maps** (lemma). Claim/conventions: At a prime r of B tensor_A C, projections contract r to q in B and q-prime in C; the local maps are B_q to (B tensor_A C)_r and C_q-prime to that stalk and induce compatible residue-field embeddings.
  Dependencies: thm-affine-fibre-product-tensor-ring, thm-stalk-structure-sheaf-prime-localization, lem-spectrum-map-stalk-homomorphisms-local. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.2 and 26.17.5.
  Strategy: Localize b maps to b tensor 1 and c maps to 1 tensor c; quotient by maximal ideals.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-fibre-product-open-restriction** (lemma). Claim/conventions: If P=X times_S Y exists, open V in X and W in Y mapping to an open U in S have product p-inverse(V) intersect q-inverse(W), an open subscheme of P. Also X times_S U=f-inverse(U).
  Dependencies: def-fibre-product-schemes-universal-property, def-open-immersion-schemes, lem-open-immersion-monomorphism, lem-fibre-product-unique-canonical-isomorphism. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.3; Vakil proof 10.1.1 Step 1.
  Strategy: Factor test maps uniquely through open subschemes; equality in U follows from its monomorphism into S. This lemma assumes existence only for P, not for all fibre products.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-fibre-products-glue-over-open-covers** (lemma). Claim/conventions: If Y is covered by open Y_i and products X times_S Y_i exist, their inverse images over overlaps glue to X times_S Y. The analogous assertion holds for a cover of S.
  Dependencies: lem-fibre-product-open-restriction, lem-fibre-product-unique-canonical-isomorphism, thm-gluing-affine-schemes, lem-morphism-schemes-local-on-source-target. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil proof 10.1.1 Steps 2–5.
  Strategy: Refine the available products by affine charts to apply the published affine gluing theorem. Open-restriction represents each overlap; uniqueness gives cocycles. For arbitrary T use preimages of the cover and glue its unique local maps. For a cover of S use both inverse images.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **thm-fibre-products-of-schemes-exist** (theorem). Claim/conventions: Every pair of scheme morphisms X to S and Y to S admits a fibre product, covered by Spec(B tensor_A C) for compatible affine charts.
  Dependencies: thm-affine-fibre-product-tensor-ring, lem-fibre-products-glue-over-open-covers. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil Theorem 10.1.1, complete proof; Stacks 26.17.4.
  Strategy: First glue Y with X and S affine; reverse roles to allow arbitrary X over affine S; then glue over affine opens of S. Nonaffine overlaps are handled by open restriction, never assumed affine.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **cor-product-schemes-over-base-exists** (corollary). Claim/conventions: The category of S-schemes has binary products, terminal object S, and empty scheme as initial object; a product with the empty scheme is empty.
  Dependencies: thm-fibre-products-of-schemes-exist, def-scheme-over-base. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.1 and 10.1.A (empty gluing specialization).
  Strategy: The binary product is the fibre product; verify the other universal properties directly, including the zero ring spectrum.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-fibre-product-associativity-and-symmetry** (lemma). Claim/conventions: There are natural symmetry, associativity and unit isomorphisms for products of S-schemes, compatible with every projection.
  Dependencies: thm-fibre-products-of-schemes-exist, lem-fibre-product-unique-canonical-isomorphism. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.3; proof 10.1.1 Step 1.
  Strategy: Describe maps from T as pairs or triples with common composite to S; every coherence identity follows from equal projections.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **def-base-change-morphism-schemes** (definition). Claim/conventions: For S-prime to S, define X_S-prime=X times_S S-prime and f_S-prime on both structure morphisms and morphisms of S-schemes. A property is stable under base change if every such pullback retains it.
  Dependencies: thm-fibre-products-of-schemes-exist, def-scheme-over-base. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JW — Stacks 26.18.1 and 26.18.3.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-base-change-composition** (lemma). Claim/conventions: Iterated base change along S-double-prime to S-prime to S is canonically base change along the composite, functorially in objects and morphisms.
  Dependencies: def-base-change-morphism-schemes, lem-fibre-product-associativity-and-symmetry. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil proof 10.1.1 Step 1; 10.3.C.
  Strategy: Identify test morphisms with the same compatible pair; identities and compositions agree after both projections.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-tensor-ring-presentations-for-base-change** (lemma). Claim/conventions: For A-algebra C, base extension of A[t_i]/I is C[t_i]/I C[t_i]; base extension of S-inverse A is image(S)-inverse C, with no flatness assumption.
  Dependencies: thm-coproduct-property-of-tensor-products-of-commutative-algebras, cor-tensor-product-with-a-quotient-ring, thm-localisation-of-modules-is-tensor-product. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.A, B, F.
  Strategy: Verify the published module identifications are multiplicative; use polynomial universal maps and extended relations. Include arbitrary ideals, finite presentations as a special case, and zero ring outcomes.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-field-valued-points-of-schemes** (lemma). Claim/conventions: Morphisms Spec K to X are pairs (x, embedding kappa(x) to K); in particular Spec kappa(x) to X is canonical and compatible with scheme morphisms.
  Dependencies: def-residue-field-scheme-point, thm-morphisms-into-affine-scheme-global-sections, lem-local-homomorphism-residue-field-map. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01J5 — Stacks 26.13, paragraphs preceding 26.13.3 and its field-valued special case.
  Strategy: Factor ring maps on an affine neighbourhood through localization and residue field; every neighbourhood of the image contains the whole one-point source. Prove independence of the chosen chart.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **def-scheme-theoretic-fibre** (definition). Claim/conventions: For any point s of S define X_s=X times_S Spec kappa(s), as a kappa(s)-scheme; allow nonclosed points, generic fibres and empty fibres.
  Dependencies: def-base-change-morphism-schemes, lem-field-valued-points-of-schemes. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JW — Stacks 26.18.4; Vakil 10.3.2.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **thm-affine-fibre-coordinate-ring** (theorem). Claim/conventions: For A to B and p in Spec A, the fibre is Spec(B tensor_A kappa(p))=Spec((A minus p)-inverse B / p(A minus p)-inverse B).
  Dependencies: def-scheme-theoretic-fibre, thm-affine-fibre-product-tensor-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.3.2; Stacks 26.18.4–5.
  Strategy: Use kappa(p)=A_p/pA_p, then localize and quotient, retaining all nilpotents.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-points-of-fibre-primes-over-point** (lemma). Claim/conventions: The map X_s to X is a homeomorphism onto f-inverse(s), with kappa(x in X_s)=kappa(x in X); in an affine chart these are exactly primes q of B with q intersect A=p.
  Dependencies: thm-affine-fibre-coordinate-ring, lem-fibre-product-open-restriction, lem-localisation-spectrum-map-homeomorphism-onto-image, thm-prime-spectrum-of-a-quotient-bijection. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JW — Stacks 26.18.5; Vakil 10.3.B.
  Strategy: Apply prime correspondence to localization followed by quotient and check the basic-open topology; the residual fraction field is unchanged. Glue the identifications. There is no extra embedding choice for ordinary fibre points.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-scheme-fibre-stalk-quotient** (lemma). Claim/conventions: At x above s, O_(X_s),x is O_X,x / m_s O_X,x, equivalently O_X,x tensor over O_S,s kappa(s).
  Dependencies: lem-points-of-fibre-primes-over-point, thm-affine-fibre-coordinate-ring, thm-stalk-structure-sheaf-prime-localization. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JW — Stacks 26.18.6.
  Strategy: Localize the fibre coordinate ring at the corresponding prime; use that elements outside p already become units in O_X,x.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-points-of-scheme-fibre-product-residue-tensors** (lemma). Claim/conventions: Points of X times_S Y correspond to (x,y,s,r) with common image s and r a prime of kappa(x) tensor_kappa(s) kappa(y); the residue field is that of r.
  Dependencies: lem-field-valued-points-of-schemes, lem-affine-fibre-product-projections-stalk-maps, lem-tensor-ring-presentations-for-base-change, thm-fibre-products-of-schemes-exist. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.5.
  Strategy: On compatible affine charts, localize both factors away from their contracted primes and quotient both prime ideals; primes contracting to the pair are precisely primes in the field tensor product. Check residue fields and inverse constructions, not merely a map from quadruples.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-fibre-after-base-change** (lemma). Claim/conventions: If s-prime maps to s, the fibre of X_S-prime over s-prime is canonically X_s times_kappa(s) Spec kappa(s-prime).
  Dependencies: def-scheme-theoretic-fibre, lem-base-change-composition, lem-field-valued-points-of-schemes. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.3.C.
  Strategy: Factor the residue-field point map through Spec kappa(s) and apply iterated base change.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-base-extension-field-coordinate-ring** (lemma). Claim/conventions: For a k-scheme X and field extension K/k, affine charts of X_K have rings A tensor_k K, compatibly on overlaps.
  Dependencies: def-base-change-morphism-schemes, thm-fibre-products-of-schemes-exist, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.3.
  Strategy: Apply the compatible affine product cover and localizations.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **def-geometric-fibre** (definition). Claim/conventions: Choose an algebraic closure Omega of kappa(s); define X_bar-s=X_s times_kappa(s) Spec Omega. A geometric point more generally has algebraically closed residue target; this page uses algebraic closures for fibre tests.
  Dependencies: def-scheme-theoretic-fibre, lem-base-extension-field-coordinate-ring, def-algebraic-closure. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.3 and table (Rc), (Ic), (Cc).
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-geometric-fibre-choice-independent** (lemma). Claim/conventions: Two choices of algebraic closure give isomorphic geometric fibres after transport of scalars by a chosen base-field isomorphism; no canonical choice is asserted.
  Dependencies: def-geometric-fibre, cor-algebraic-closures-are-isomorphic-over-the-base, lem-base-change-composition. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.3 and scalar extension 10.2.3.
  Strategy: Assume Choice as in the published closure-isomorphism theorem; base change the chosen field isomorphism and its inverse.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **def-geometrically-reduced-integral-connected-fibre** (definition). Claim/conventions: Call a fibre geometrically reduced, integral, irreducible or connected when its base change to an algebraic closure has that property. Integral and irreducible require nonemptiness; the empty scheme is reduced and connected under the no-separation convention.
  Dependencies: def-geometric-fibre, lem-geometric-fibre-choice-independent, def-integral-scheme, def-connected-space, def-reduction-of-scheme. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.3 and table preceding 10.4.K.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-base-change-open-closed-immersions** (lemma). Claim/conventions: Open and closed immersions remain so under arbitrary base change; immersions (equivalently, locally closed immersions) do also. The pulled-back closed ideal is the image of the pulled-back ideal in the new structure sheaf.
  Dependencies: def-base-change-morphism-schemes, lem-fibre-product-open-restriction, lem-tensor-ring-presentations-for-base-change, thm-affine-closed-immersions-quotient-rings. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.6 and 26.18.2.
  Strategy: Open case is inverse image. Closed case is C/IC on affine charts, glued; explicitly use the image ideal, since tensoring the original inclusion need not remain injective. Factor an immersion (equivalently, a locally closed immersion) as a closed immersion into an open subscheme.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **def-scheme-theoretic-inverse-image-subscheme** (definition). Claim/conventions: Define the scheme-theoretic inverse image of a closed or locally closed subscheme Z of S under X to S as X times_S Z.
  Dependencies: lem-base-change-open-closed-immersions. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.7.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-subscheme-intersection-fibre-product** (lemma). Claim/conventions: The intersection of finitely many closed subschemes of X is their fibre product over X and is cut out by the sum of their ideals; locally closed intersections follow by restriction.
  Dependencies: def-scheme-theoretic-inverse-image-subscheme, lem-tensor-ring-presentations-for-base-change, lem-fibre-product-associativity-and-symmetry. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.C and H.
  Strategy: For two ideals use (A/I) tensor_A (A/J)=A/(I+J), then glue and iterate.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-base-change-locally-finite-type-presentation** (lemma). Claim/conventions: Locally finite type and locally finite presentation morphisms remain so after arbitrary base change.
  Dependencies: def-locally-finite-type-and-finite-type-morphism, def-locally-finite-presentation-morphism, lem-tensor-ring-presentations-for-base-change, thm-fibre-products-of-schemes-exist. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.B(e,g); Stacks 29.15.4 and 29.22.4.
  Strategy: Choose witnessing affine source/target charts and affine charts of the new base mapping into them. Finitely many generators and, for presentation, finitely many relations survive coefficient extension.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-base-change-quasi-compact-morphisms** (lemma). Claim/conventions: Quasi-compactness is local on an affine cover of the target and is preserved by arbitrary base change.
  Dependencies: def-quasi-compact-and-quasi-separated-morphism, cor-affine-scheme-quasi-compact, thm-fibre-products-of-schemes-exist. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01K2 — Stacks 26.19.2–3.
  Strategy: Prove target locality using finite principal refinements of any affine target open and finite affine covers of inverse images. Pull these covers back; the pulled-back affine charts are quasi-compact.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **cor-base-change-finite-type-and-products** (corollary). Claim/conventions: Finite type morphisms remain finite type under base change; products of two locally finite type (respectively finite type) k-schemes have the same finiteness property.
  Dependencies: lem-base-change-locally-finite-type-presentation, lem-base-change-quasi-compact-morphisms, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.D and 10.4.B(f).
  Strategy: For finite type combine local finite type with quasi-compactness. For products use tensor generators on affine charts; finite affine covers yield the global version.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **def-affine-morphism-schemes** (definition). Claim/conventions: A scheme morphism is affine if the inverse image of every affine open is affine.
  Dependencies: def-morphism-of-schemes, def-affine-open-subscheme. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01S5 — Stacks 29.11.1.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-affineness-from-unit-generating-global-sections** (lemma). Claim/conventions: If finitely many global sections f_i generate the unit ideal and all nonvanishing opens X_f_i are affine, then X is affine.
  Dependencies: thm-morphisms-into-affine-scheme-global-sections, thm-sections-basic-open-affine-scheme, thm-localisation-of-modules-is-exact, thm-sheaf-equalizer-condition. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01QF — Stacks 28.28.3, with elementary finite-equalizer proof.
  Strategy: The finite cover has affine pairwise intersections, principal in each chart. Localize its finite sheaf equalizer to prove Gamma(X,O)_f_i=Gamma(X_f_i,O). The canonical map to Spec Gamma is therefore an isomorphism on the corresponding principal covers, which cover the target because the f_i generate 1. This avoids relative Spec or a circular affine-morphism criterion.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-affine-morphism-local-on-target** (lemma). Claim/conventions: A morphism is affine if the target has an affine open cover with affine inverse images.
  Dependencies: def-affine-morphism-schemes, lem-affineness-from-unit-generating-global-sections, lem-spectrum-localization-open-immersion, cor-affine-scheme-quasi-compact. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01S5 — Stacks 29.11.3(1) iff (2), Remark 29.11.4; 26.11.5–6.
  Strategy: For arbitrary affine V, construct a finite principal cover whose members are principal in some original target chart. Prove the common-principal refinement inline: shrink to D_U(f) inside V, then D_V(g) inside that affine, which is principal in both. Pull back unit-generating functions and use the preceding affineness lemma.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-base-change-affine-morphisms** (lemma). Claim/conventions: Affine morphisms remain affine after arbitrary base change; compositions of affine morphisms and closed immersions are affine.
  Dependencies: def-affine-morphism-schemes, lem-affine-morphism-local-on-target, thm-affine-fibre-product-tensor-ring, lem-fibre-product-open-restriction, thm-affine-closed-immersions-quotient-rings. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01S5 — Stacks 29.11.8–10.
  Strategy: Check inverse images on new-base affine charts mapping into affine old-base charts, then apply target locality. Composition and closed immersions follow directly from the definition and quotient spectra.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **def-diagonal-morphism-scheme** (definition). Claim/conventions: Define Delta_X/S:X to X times_S X as the unique morphism with both projections identity.
  Dependencies: thm-fibre-products-of-schemes-exist. These provide the objects and the proof ingredients named here.
  Support: https://stacks.math.columbia.edu/tag/01KH — Stacks 26.21 introductory definition.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-diagonal-base-change-identification** (lemma). Claim/conventions: Under (X_S-prime times_S-prime X_S-prime) isomorphic to (X times_S X)_S-prime, the diagonal is the base change of Delta_X/S.
  Dependencies: def-diagonal-morphism-scheme, lem-base-change-composition, lem-fibre-product-associativity-and-symmetry. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil proof 11.1.10, pp.230–231.
  Strategy: Compare all projections from a test scheme; identify the Cartesian square of diagonals. No separatedness is used.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **def-graph-morphism-over-base** (definition). Claim/conventions: For an S-morphism f:X to Y, define Gamma_f=(id_X,f):X to X times_S Y.
  Dependencies: thm-fibre-products-of-schemes-exist, def-scheme-over-base. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 11.1.17, p.232.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-graph-as-pullback-diagonal** (lemma). Claim/conventions: The graph square with X to X times_S Y above Y to Y times_S Y is Cartesian, with right arrow (f composed with pr_X,pr_Y) and left arrow f.
  Dependencies: def-graph-morphism-over-base, def-diagonal-morphism-scheme, lem-fibre-product-unique-canonical-isomorphism. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil proof 11.1.18, diagram (11.1.18.1), p.232.
  Strategy: A test map into the pullback is uniquely determined by its X-coordinate: the second Y-coordinate is forced to be f of it. This does not assert graphs are closed without a hypothesis on the target.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **thm-classical-product-agrees-scheme-product** (theorem). Claim/conventions: For irreducible classical varieties over an algebraically closed k, the associated scheme of the classical product is the scheme product of the associated schemes; affine chart rings are the unreduced tensor products, which here are domains.
  Dependencies: thm-affine-variety-product-coordinate-ring, thm-classical-varieties-equivalent-integral-separated-finite-type-schemes, thm-fibre-products-of-schemes-exist, lem-fibre-product-open-restriction. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.3 and 10.4.E; local published affine product theorem.
  Strategy: On classical affine charts use the published tensor-domain/product theorem; the isomorphisms glue by compatibility with projections. Thus reduction changes nothing in this setting. Do not generalize to arbitrary base fields or arbitrary reduced schemes.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-base-change-surjective-morphisms** (lemma). Claim/conventions: Surjective morphisms of schemes remain surjective under arbitrary base change; in particular extension of the ground field does not turn a nonempty scheme into an empty scheme.
  Dependencies: lem-points-of-scheme-fibre-product-residue-tensors, thm-tensor-product-basis-from-bases. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.D.
  Strategy: For a point of the new base choose a point above its image. The tensor product of its two residue fields over the base residue field is nonzero by vector-space bases; choose a maximal ideal (Choice) to obtain a point upstairs.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **lem-immersions-and-localizations-monomorphisms** (lemma). Claim/conventions: Open immersions, closed immersions and Spec(S-inverse A) to Spec A are monomorphisms of schemes; hence so are their composites.
  Dependencies: lem-open-immersion-monomorphism, thm-morphisms-into-affine-scheme-global-sections, thm-affine-closed-immersions-quotient-rings, lem-morphism-schemes-local-on-source-target. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.G.
  Strategy: Uniqueness of ring maps factoring a quotient or localization proves the affine cases for arbitrary test schemes; closed immersion locality gives the global statement. Composition is formal.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **rem-properties-can-change-after-field-extension** (remark). Claim/conventions: Ordinary reducedness, irreducibility, integrality and connectedness need not survive scalar extension: C tensor_R C splits, while F_p(u) tensor_F_p(u^p) F_p(u) contains nilpotents.
  Dependencies: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.1–2 and 10.4.G.
  Strategy: Give the two ring identities directly in the remark; do not depend on B-page examples. Use C[z]/(z^2+1)=C times C and L[z]/(z^p-u^p)=L[epsilon]/(epsilon^p).
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **rem-fibre-is-scheme-not-point-set** (remark). Claim/conventions: A fibre retains its residue fields and nilpotents even though its underlying topology is the inverse-image topology; the underlying set of a general fibre product need not be a set product.
  Dependencies: lem-points-of-fibre-primes-over-point, lem-scheme-fibre-stalk-quotient, lem-points-of-scheme-fibre-product-residue-tensors. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.2 and 10.3.3; Stacks 26.18.5–6.
  Strategy: Definition/remark; no separate proof.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **ex-fibre-family-xy-equals-t** (example). Claim/conventions: For k[x,y,t]/(xy-t) over k[t], the fibre at a in k is Spec k[x,y]/(xy-a): at zero two reduced axes, at nonzero a a copy of G_m; the generic fibre has ring k(t)[x,x-inverse].
  Dependencies: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Specialization of the polynomial fibre computation in Vakil 10.3.1–2.
  Strategy: Substitute t=a. For a nonzero solve y=a/x; at zero (xy)=(x) intersect (y). Use the same calculation over k(t).
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **ex-nonreduced-fibre-x-squared-equals-t** (example). Claim/conventions: The family k[x,t]/(x^2-t) has special fibre k[x]/(x^2) in every characteristic. Over Q the fibres at 1, 0, -1 and the generic point are respectively Q times Q, Q[epsilon]/epsilon^2, Q(i), Q(x) over Q(t).
  Dependencies: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil Example 10.3.3(i)–(iv).
  Strategy: Substitute, factor and use the Chinese remainder theorem. At the generic point use t=x^2 and f(x)f(-x) to invert every nonzero polynomial; for characteristic 2 claim only the characteristic-independent zero-fibre statement.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **ex-base-change-real-conic-to-complex** (example). Claim/conventions: The real affine conic Spec R[x,y]/(x^2+y^2+1) has no R-valued points, but its complex base change has point (i,0) and ring C[x,y]/(x^2+y^2+1).
  Dependencies: lem-field-valued-points-of-schemes, lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Polynomial scalar-extension method, Vakil 10.2.A–B and 10.2.3.
  Strategy: A sum of two real squares cannot be -1; evaluate after scalar extension at (i,0). Distinguish absence of R-valued points from the scheme being empty.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **cex-domain-tensor-algebraic-closure-reducible** (counterexample). Claim/conventions: An integral R-scheme need not stay irreducible or connected over C: Spec C becomes Spec(C times C), also showing injectivity need not survive base change.
  Dependencies: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.1, 10.4.1–2 and 10.4.I.
  Strategy: Factor z^2+1 over C and use comaximal factors to identify C tensor_R C with C times C; identify the two primes and the projection to a one-point spectrum.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **ex-product-affine-lines-plane** (example). Claim/conventions: A^1_k times_k A^1_k is A^2_k functorially; points over the pair of generic points are not unique, for instance primes (0) and (y-x) have the same contractions.
  Dependencies: thm-affine-fibre-product-tensor-ring, lem-points-of-scheme-fibre-product-residue-tensors. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.2–3.
  Strategy: Use k[x] tensor_k k[y]=k[x,y] and identify Hom(T,-) with pairs of global sections; check contractions of the two displayed primes.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **ex-fibre-closed-immersion** (example). Claim/conventions: The fibre of Spec(A/I) to Spec A over p is Spec kappa(p) if I is contained in p, and empty otherwise.
  Dependencies: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Direct special case of Vakil 10.2.B and 10.3.2.
  Strategy: The extended ideal in the field is either zero or the unit ideal.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **ex-graph-polynomial-map-closed-subscheme** (example). Claim/conventions: For f:A^n_k to A^m_k given by polynomials f_j, its graph has ideal (y_j-f_j(x)) in k[x_1,...,x_n,y_1,...,y_m].
  Dependencies: def-graph-morphism-over-base, lem-graph-as-pullback-diagonal, thm-affine-closed-immersions-quotient-rings, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Affine specialization of Vakil 11.1.17–18.
  Strategy: The coordinate map sends x_i to x_i and y_j to f_j(x); substitution identifies the quotient with k[x]. Obtain the same ideal by pulling back diagonal coordinate differences.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **cex-set-theoretic-fibre-loses-multiplicity** (counterexample). Claim/conventions: The zero fibres of x^2=t and x^3=t have the same one-point underlying space and residue field k, but are nonisomorphic schemes, of k-vector-space dimensions 2 and 3.
  Dependencies: thm-affine-fibre-coordinate-ring, thm-affine-scheme-ring-anti-equivalence. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Variant of Vakil 10.3.3(ii).
  Strategy: Compare k[x]/(x^2) and k[x]/(x^3); their monomial bases distinguish rings as k-algebras. This adds a comparison rather than duplicating the worked quadratic fibre.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **ex-empty-fibre-tensor-zero-ring** (example). Claim/conventions: The open immersion Spec k[t,t-inverse] to Spec k[t] has empty fibre at t=0 because its fibre tensor ring is zero.
  Dependencies: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Direct localization special case of Vakil 10.2.F and 10.3.2.
  Strategy: In the tensor ring t is both invertible and zero, so 1=0. Compare with inverse image under the open immersion.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **cex-purely-inseparable-base-change-nonreduced** (counterexample). Claim/conventions: For k=F_p(v), L=k[u]/(u^p-v) is a field but L tensor_k L is L[epsilon]/(epsilon^p), so reducedness need not survive even algebraic scalar extension.
  Dependencies: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.G.
  Strategy: The v-adic exponent shows v is not a pth power; equivalently use Eisenstein on u^p-v over F_p[v]. In L set epsilon=z-u and use the characteristic-p binomial identity.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

- **ex-quadratic-cover-self-fibre-product** (example). Claim/conventions: For t maps to x^2, the self fibre product of A^1_k over A^1_k is Spec k[x,y]/(x^2-y^2): two distinct line components if char k is not 2, a doubled diagonal if char k=2.
  Dependencies: thm-affine-fibre-product-tensor-ring, lem-tensor-ring-presentations-for-base-change. These provide the objects and the proof ingredients named here.
  Support: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.3.E.
  Strategy: Factor (x-y)(x+y) when 2 is nonzero; otherwise x^2-y^2=(x-y)^2. Do not apply CRT to the intersecting line ideals.
  Status: scaffolded; authoring and independent review pending. Next: next item, then coverage and validators.

Inventory checkpoint: 42 A items and 11 B leaves. A is below 60; no split or content deletion needed. Item order is topologically sorted. All items have explicit deps. Added graph, geometric-choice and affine-locality proof bridges; omitted no design claim except replacing its duplicate multiplicity example with the strict x^2/x^3 comparison.

## Coverage checkpoint

Completed the section/result harvest for the exact ranges in coverage. Every included/inline row names its carrier. Deferrals name existing planned pages and distinguish global finite presentation from its local form. No failed source was removed or replaced. Extra passages read for orientation outside the declared ranges are not claimed as backing. Additional inline obligations from coverage (coproduct, common-principal refinement, local-ring points, local-base topology, coefficient-substitution illustration, conditional product stability) must be carried into authoring.

## Final dependency refinement

Published statements were reread in items/. The complex tensor-square identity is already established in ex-complex-tensor-square-over-the-reals; the scheme counterexample adds disconnectedness, reducibility, and failure of universal injectivity. The integer Eisenstein theorem is insufficient over F_p[v]; the existing p-power irreducibility lemma closes that step instead.

- **lem-base-change-surjective-morphisms**: Surjective morphisms of schemes remain surjective under arbitrary base change; in particular extension of the ground field does not turn a nonempty scheme into an empty scheme.
  Final deps: lem-points-of-scheme-fibre-product-residue-tensors, thm-tensor-product-basis-from-bases, thm-proper-ideal-contained-in-maximal-ideal. Strategy: For a point of the new base choose a point above its image. The tensor product of its two residue fields over the base residue field is nonzero by vector-space bases; choose a maximal ideal (Choice) to obtain a point upstairs.
  Source: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.D. Status: scaffold corrected; authoring remains pending.

- **lem-field-valued-points-of-schemes**: Morphisms Spec K to X are pairs (x, embedding kappa(x) to K); in particular Spec kappa(x) to X is canonical and compatible with scheme morphisms.
  Final deps: def-residue-field-scheme-point, thm-morphisms-into-affine-scheme-global-sections, lem-local-homomorphism-residue-field-map, thm-tensor-product-basis-from-bases, thm-proper-ideal-contained-in-maximal-ideal. Strategy: Factor ring maps on an affine neighbourhood through localization and residue field; every neighbourhood of the image contains the whole one-point source. Prove independence of the chosen chart. Include the local-ring version: a local map O_X,x to A gives Spec A to X, because every open neighbourhood of the closed point of Spec A is the whole space. Include the equivalence of field representatives via a common extension, obtained from a prime of the nonzero field tensor product.
  Source: https://stacks.math.columbia.edu/tag/01J5 — Stacks 26.13, paragraphs preceding 26.13.3 and its field-valued special case. Status: scaffold corrected; authoring remains pending.

- **ex-nonreduced-fibre-x-squared-equals-t**: The family k[x,t]/(x^2-t) has special fibre k[x]/(x^2) in every characteristic. Over Q the fibres at 1, 0, -1 and the generic point are respectively Q times Q, Q[epsilon]/epsilon^2, Q(i), Q(x) over Q(t).
  Final deps: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change, thm-chinese-remainder-theorem-for-comaximal-ideals. Strategy: Substitute, factor and use the Chinese remainder theorem. At the generic point use t=x^2 and f(x)f(-x) to invert every nonzero polynomial; for characteristic 2 claim only the characteristic-independent zero-fibre statement.
  Source: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil Example 10.3.3(i)–(iv). Status: scaffold corrected; authoring remains pending.

- **cex-domain-tensor-algebraic-closure-reducible**: An integral R-scheme need not stay irreducible or connected over C: Spec C becomes Spec(C times C), also showing injectivity need not survive base change.
  Final deps: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change, ex-complex-tensor-square-over-the-reals. Strategy: Factor z^2+1 over C and use comaximal factors to identify C tensor_R C with C times C; identify the two primes and the projection to a one-point spectrum. Reuse the published complex tensor-square calculation; the new claim concerns scheme topology and base change, not a new algebra identity.
  Source: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.1, 10.4.1–2 and 10.4.I. Status: scaffold corrected; authoring remains pending.

- **rem-properties-can-change-after-field-extension**: Ordinary reducedness, irreducibility, integrality and connectedness need not survive scalar extension: C tensor_R C splits, while F_p(u) tensor_F_p(u^p) F_p(u) contains nilpotents.
  Final deps: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change, ex-complex-tensor-square-over-the-reals. Strategy: Give the two ring identities directly in the remark; do not depend on B-page examples. Use C[z]/(z^2+1)=C times C and L[z]/(z^p-u^p)=L[epsilon]/(epsilon^p). Reuse the published complex tensor-square calculation; the new claim concerns scheme topology and base change, not a new algebra identity.
  Source: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.1–2 and 10.4.G. Status: scaffold corrected; authoring remains pending.

- **cex-purely-inseparable-base-change-nonreduced**: For k=F_p(v), L=k[u]/(u^p-v) is a field but L tensor_k L is L[epsilon]/(epsilon^p), so reducedness need not survive even algebraic scalar extension.
  Final deps: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-polynomial-ring-over-a-field-is-a-ufd. Strategy: The v-adic exponent shows v is not a pth power; apply the published p-power irreducibility lemma with n=1. In L set epsilon=z-u and use the characteristic-p binomial identity. The published integer-only Eisenstein criterion does not apply here.
  Source: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.G. Status: scaffold corrected; authoring remains pending.

Dependency refinement correction: validate-plan correctly rejected dependencies on the published complex tensor-square B leaf. For rem-properties-can-change-after-field-extension and cex-domain-tensor-algebraic-closure-reducible replace that edge with thm-chinese-remainder-theorem-for-comaximal-ideals. Recompute the short identity inline from the existing A theorem; acknowledge the published example without depending on it or minting its algebra claim again. All other refined deps remain as above.

## Final validation checkpoint — 2026-09-07

- coverage-checklist with --require-destination: PASS, 1 A page, 194 harvested rows, 0 errors/warnings. These comprise 141 source-heading/result rows and 53 item-support rows, not 194 distinct mathematical results.
- content-policy --manifest-only on this batch: PASS, 53 scoped items, 0 errors/warnings.
- manifest-deps on all current frontier-33 batch manifests: PASS, 856 items, 0 normalized, 0 errors.
- content-policy --manifest-only on all current frontier-33 manifests: FAIL, 2 missing dependencies, both on thm-kernel-range-annihilator-identities: def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces. This supersedes the earlier nine-error snapshot while other owners were working. No other batch was edited.
- validate-plan research/plan-spec.json: PASS on baseline earlier in this dispatch. validate-plan /dev/stdin with only this batch's two page objects overlaid into the current spec: PASS after final dependency corrections (shell pipefail, exit 0). The spec itself was not modified. Existing redundant-prerequisite warnings and empty planned pages remain baseline limitations.
- source-fetch-check --coverage research/frontier-33-batch-10.coverage.json --stamp --timeout-sec 5: FAIL, 0/12 fetch-verified, all twelve requests EAI_AGAIN. The browser fetched and displayed the declared source passages; shell DNS cannot resolve either source host. This is not evidence that the URLs are dead, and changing to alternate texts would not repair the environment. No source removed, no inferred byte hashes, no fabricated fetch stamps.

Scaffolding inventory: 42 A items, 11 B leaves; no split needed. Only the three task-authorized files were written. No independent review or exact-hash acceptance gate is claimed. Authoring remains the later step-5 task.

Outstanding gate / next action: rerun source-fetch-check in a network-capable validator environment, then rerun whole-run content-policy after the responsible batch supplies its missing dependencies. Batch 10 is NOT marked fully validator-ready while source-fetch remains failed.

Artifact SHA-256 at this checkpoint (identification only, not review certification):

- research/frontier-33-batch-10.pages.json: 40445d8c621eeb31e19112e420442da0f9c5389d0b6ac94e0b7064ff1941ec73
- research/frontier-33-batch-10.coverage.json: f7315d9cb031012b43ba588ed13400e0b9e779d7461c4d7a2facbf5d76b59c96

## Full-text source recovery (2026-09-07)

The canonical tag page remains recorded as provenance, while the source now
uses the Stacks Project's official `download/schemes.pdf`. The same tag 01IX
statement and proof appear at §11 Lemma 11.6, printed p.20. The repository
full-text verifier stamped the 582,443-byte PDF with SHA-256 prefix
`fa2b63e8fd245fcd`. No harvested result, claim, dependency, or proof plan
changed.

## Reharvest-2 audit — 2026-09-07

`research/frontier-33-reharvest-plan.json` has zero `work[]` rows whose file is `research/frontier-33-batch-10.coverage.json`. Thus this dispatch names no dead source or orphaned result for batch 10, and no harvest row, scaffold item, dependency, or mathematical claim was changed.

Fetch-stamp follow-up nonetheless found one outstanding source stamp: Stacks Project, *Schemes*, Lemma 26.11.6 / tag 01IX, `https://stacks.math.columbia.edu/tag/01IX`, carrying the inline result **Lemma 26.11.6** for `lem-affine-morphism-local-on-target` (finite common-principal refinement). The direct official URL was fetched and read through the browser: it identifies §26.11, states that an affine open covered by affine opens admits a finite standard-open refinement subordinate to the cover, and proves it by Lemma 26.11.5 plus quasi-compactness. The complete same-document PDF `https://stacks.math.columbia.edu/download/schemes.pdf` was also fetched and read at printed p.20, §11 Lemma 11.6 / tag 01IX, where the same statement and proof appear. The official repository source `https://raw.githubusercontent.com/stacks/stacks-project/master/schemes.tex`, lines 1813–1828 (`lemma-good-subcover`), was separately read and carries the same result and proof.

The Node fetch-stamper returned `EAI_AGAIN` for the canonical tag twice; a direct Node and curl test of the official raw-source recovery URL returned the same DNS error. This is an execution-environment resolver failure, not evidence that the canonical document is dead: the browser fetched both the direct tag and the complete PDF, and the run's existing liveness artifact records tag 01IX as HTTP 200. Retaining the canonical source avoids a speculative replacement and preserves its locator. Original-URL provenance is therefore unchanged and no alternate URL is recorded as a reader-facing source. Claim constraint unchanged: the carrier may use only the finite standard-open refinement supplied by the lemma, not any stronger assertion about arbitrary refinements.

Validation: `coverage-checklist --require-destination` PASS (1 page, 194 harvested rows, 0 errors/warnings); `source-backing --require-verified` against the run liveness artifact PASS (35 authored results, 1 coverage file); `source-fetch-check` remains FAIL (11/12 fetch-verified, only tag 01IX unstamped). A bounded `url-sweep --recover --fail-on-dead` attempt did not complete before its 12-second process bound, so it produced no new liveness artifact; the task does not authorize modifying the run-wide artifact. Next action: rerun the fetch stamp and liveness sweep in an environment whose DNS resolves `stacks.math.columbia.edu`; do not alter this source or its contents row merely to satisfy the stamp gate.

## Step-3 fix pass

- Finding id: `lem-base-change-open-closed-immersions` (the only batch-10 direct repair in Alpha group e's Step-3 review). **Applied.** The record now says exactly that arbitrary base change preserves open and closed immersions and also immersions (equivalently, locally closed immersions). It retains the necessary qualification that a pulled-back closed ideal is the image of the pulled-back ideal in the new structure sheaf, rather than an asserted injective tensor extension.
- Evidence read and fetch-verified: [Stacks, Schemes §26.17](https://stacks.math.columbia.edu/tag/01JO), complete mathematical section, Lemma 26.17.6 and proof: its three parts give the closed, open, and immersion assertions, and the closed case names $\operatorname{Im}(g^*\mathcal I\to\mathcal O_Y)$. [Stacks, Schemes §26.18](https://stacks.math.columbia.edu/tag/01JW), complete mathematical section, Lemma 26.18.2 and proof: the base-changed map is identified with $Y_{S'}\times_YX\to Y_{S'}$ and reduced to Lemma 26.17.6.
- Changed scaffold records: `research/frontier-33-batch-10.pages.json` / `lem-base-change-open-closed-immersions` retains its four explicit dependencies and corrected statement; its strategy now explicitly factors an immersion as a closed immersion into an open subscheme. `research/frontier-33-batch-10.coverage.json` retains the matching canonical carrier with the same image-ideal qualification. This checkpoint records the same source, dependencies, convention, and no-flatness limit. No ids, page edges, harvest dispositions, or other batch artifacts changed.
- Validators on the repaired bytes: `coverage-checklist --require-destination` PASS (1 page, 194 results, 0 errors/warnings); `source-fetch-check` PASS (12/12 source stamps); whole-run `content-policy --manifest-only research/frontier-33-batch-*.pages.json` PASS (923 scoped items, 0 errors/warnings); `validate-plan research/plan-spec.json --repo . --max-items 60` PASS. The A inventory remains 42 items, so no split is required. Next action: preserve this exact claim, factorization, image-ideal convention, and four-dependency proof route during the later authoring stage.

Source-receipt follow-up: a forced Node refresh, `source-fetch-check --stamp --force --timeout-sec 30`, reported `EAI_AGAIN` for all twelve URLs and wrote no changed receipt; the receipt-only gate still passes 12/12. This is a resolver-wide local failure, not a dead-source finding: the browser fetched the same current full-text URLs for Vakil's 447-page PDF, Stacks tags `01JO`, `01JW`, `01J5`, `01K2`, `01S5`, `01QF`, `01IW`, `01T0`, `01TO`, and `01KH`, and the 49-page Stacks `schemes.pdf` recovery. Their exact locators and harvested dispositions remain in `research/frontier-33-batch-10.coverage.json`; no alternate text, provenance URL, claim, or harvest row was changed. In particular, the two sources supporting the repaired item were read at the exact complete-section locators recorded above. A future force-refresh must run where Node DNS resolves those hosts; it is not an authorization to remove or re-source a live, browser-verified record.

## Step-5 authoring

Authoring scope: the 53 assigned items and two scheme-theory pages. All remain draft. Required inputs and group e review read; no missing input. Current external dependency statements read from items/. Sources reread through the browser at the exact coverage locators, including complete direct gluing proof, affine-locality passages, fibre and graph calculations. Shell curl fails DNS; no shell fetch success is claimed. Preserve all independent reviews and workflow state. No proof contracts existed at entry.

### Authored `def-fibre-product-schemes-universal-property`

Claim and conventions: Let $f:X\to S$ and $g:Y\to S$ be morphisms of schemes. A **fibre product** is a scheme $P$, with projections $p:P\to X$ and $q:P\to Y$, such that $fp=gq$ and, for every scheme $T$ and morphisms $a:T\to X$, $b:T\to Y$ with $fa=gb$, there is exactly one $h:T\to P$ satisfying $ph=a$ and $qh=b$. Thus, naturally in every test scheme $T$,
$$\operatorname{Hom}(T,P)\cong\operatorname{Hom}(T,X)\times_{\operatorname{Hom}(T,S)}\operatorname{Hom}(T,Y).$$
Write $P=X\times_S Y$. The commutative square with edges $p,q,f,g$ is **Cartesian** when it has this universal property. Morphisms here are morphisms of locally ringed spaces, as in [[def-morphism-of-schemes]]. No existence assertion is part of the definition.

Dependencies: def-morphism-of-schemes. Sources: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.1. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `lem-fibre-product-unique-canonical-isomorphism`

Claim and conventions: If $(P,p,q)$ and $(P',p',q')$ are fibre products of the same pair $X\to S\leftarrow Y$, there is a unique isomorphism $u:P\to P'$ with $p'u=p$ and $q'u=q$.

Dependencies: def-fibre-product-schemes-universal-property. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.3 and 10.1.5. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `thm-affine-fibre-product-tensor-ring`

Claim and conventions: Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. In the category of all schemes,
$$\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C).$$
The projections correspond to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$.

Dependencies: def-fibre-product-schemes-universal-property, thm-morphisms-into-affine-scheme-global-sections, thm-coproduct-property-of-tensor-products-of-commutative-algebras. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.B; Stacks 26.17.2. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-affine-fibre-product-projections-stalk-maps`

Claim and conventions: For $A\to B,A\to C$, put $D=B\otimes_A C$. Given $\mathfrak r\in\operatorname{Spec}D$, its projections are $\mathfrak q=\{b:b\otimes1\in\mathfrak r\}$ and $\mathfrak q'=\{c:1\otimes c\in\mathfrak r\}$. Their contractions to $A$ coincide at $\mathfrak p$. The stalk maps are
$$B_{\mathfrak q}\longrightarrow D_{\mathfrak r},\quad b/s\longmapsto(b\otimes1)/(s\otimes1),\qquad C_{\mathfrak q'}\longrightarrow D_{\mathfrak r},\quad c/t\longmapsto(1\otimes c)/(1\otimes t).$$
They are local and induce embeddings $\kappa(\mathfrak q),\kappa(\mathfrak q')\to\kappa(\mathfrak r)$ agreeing on $\kappa(\mathfrak p)$.

Dependencies: thm-affine-fibre-product-tensor-ring, thm-stalk-structure-sheaf-prime-localization, lem-spectrum-map-stalk-homomorphisms-local. Sources: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.2 and 26.17.5. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-fibre-product-open-restriction`

Claim and conventions: Suppose $P=X\times_S Y$ exists, with projections $p,q$. If opens $V\subseteq X$, $W\subseteq Y$ map into an open $U\subseteq S$, then the open subscheme $Q=p^{-1}(V)\cap q^{-1}(W)$ represents $V\times_U W$, and also $V\times_S W$. Independently, for $f:X\to S$ and an open $U\subseteq S$, the open subscheme $f^{-1}(U)$ represents $X\times_S U$.

Dependencies: def-fibre-product-schemes-universal-property, def-open-immersion-schemes, lem-open-immersion-monomorphism, lem-fibre-product-unique-canonical-isomorphism. Sources: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.3; Vakil proof 10.1.1 Step 1. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-fibre-products-glue-over-open-covers`

Claim and conventions: Let $X\to S\leftarrow Y$ be given. If $Y=\bigcup_iY_i$ is an open cover and every $P_i=X\times_S Y_i$ exists, these products glue along their inverse images over $Y_i\cap Y_j$ to a fibre product $X\times_S Y$. There is also a base-cover version: if $S=\bigcup_iS_i$ and $f^{-1}(S_i)\times_{S_i}g^{-1}(S_i)$ exists for every $i$, these products glue to $X\times_S Y$. No overlap is required to be affine.

Dependencies: lem-fibre-product-open-restriction, lem-fibre-product-unique-canonical-isomorphism, thm-gluing-affine-schemes, lem-morphism-schemes-local-on-source-target. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil proof 10.1.1 Steps 2–5. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `thm-fibre-products-of-schemes-exist`

Claim and conventions: Every diagram $X\to S\leftarrow Y$ of schemes has a fibre product. Given an affine cover $S=\bigcup_i\operatorname{Spec}A_i$ and affine covers $f^{-1}(\operatorname{Spec}A_i)=\bigcup_j\operatorname{Spec}B_{ij}$ and $g^{-1}(\operatorname{Spec}A_i)=\bigcup_k\operatorname{Spec}C_{ik}$, the product has open affine cover
$$\operatorname{Spec}(B_{ij}\otimes_{A_i}C_{ik}).$$

Dependencies: thm-affine-fibre-product-tensor-ring, lem-fibre-products-glue-over-open-covers. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil Theorem 10.1.1, complete proof; Stacks 26.17.4. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `cor-product-schemes-over-base-exists`

Claim and conventions: For every scheme $S$, the category of $S$-schemes has binary products $X\times_S Y$, terminal object $S\xrightarrow{\mathrm{id}}S$, and initial object $\varnothing\to S$. A product with the empty scheme is empty. Disjoint unions, including the empty disjoint union, are coproducts of $S$-schemes.

Dependencies: thm-fibre-products-of-schemes-exist, def-scheme-over-base. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.1 and 10.1.A (empty gluing specialization). Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-fibre-product-associativity-and-symmetry`

Claim and conventions: For $S$-schemes $X,Y,Z$ there are natural projection-compatible isomorphisms
$$X\times_S Y\cong Y\times_S X,\qquad (X\times_S Y)\times_S Z\cong X\times_S(Y\times_S Z),\qquad X\times_S S\cong X\cong S\times_S X.$$
Any coherence identity between these identifications holds whenever both sides induce the same ordered projections to the original factors.

Dependencies: thm-fibre-products-of-schemes-exist, lem-fibre-product-unique-canonical-isomorphism. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.3; proof 10.1.1 Step 1. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `def-base-change-morphism-schemes`

Claim and conventions: Let $h:S'\to S$. For an $S$-scheme $f:X\to S$, its **base change** is $X_{S'}=X\times_S S'$, with structure map the second projection. For an $S$-morphism $u:X\to Y$, define $u_{S'}:X_{S'}\to Y_{S'}$ by its projections $u\circ\operatorname{pr}_X$ and $\operatorname{pr}_{S'}$. Existence and uniqueness follow from [[thm-fibre-products-of-schemes-exist]]; the meaning of $S$-morphism is [[def-scheme-over-base]]. These formulas preserve identities and composition because their projections do, so they define a functor. A property of morphisms is **stable under arbitrary base change** when every pullback of a morphism with that property again has it. No restriction such as flatness is implicit in “arbitrary”.

Dependencies: thm-fibre-products-of-schemes-exist, def-scheme-over-base. Sources: https://stacks.math.columbia.edu/tag/01JW — Stacks 26.18.1 and 26.18.3. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `lem-base-change-composition`

Claim and conventions: For $S''\xrightarrow{k}S'\xrightarrow{h}S$ and an $S$-scheme $X$, there is a canonical isomorphism
$$(X\times_S S')\times_{S'}S''\cong X\times_S S''.$$
It is functorial in $X$ and compatible with the induced maps of $S$-schemes.

Dependencies: def-base-change-morphism-schemes, lem-fibre-product-associativity-and-symmetry. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil proof 10.1.1 Step 1; 10.3.C. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-tensor-ring-presentations-for-base-change`

Claim and conventions: Let $A\to C$ be a unital ring map. For any set of variables $(t_i)$ and any ideal $I\subseteq A[t_i]$,
$$(A[t_i]/I)\otimes_A C\cong C[t_i]/IC[t_i].$$
Here the extended ideal is generated by the coefficient images of all elements of $I$. For a multiplicative subset $M\subseteq A$,
$$(M^{-1}A)\otimes_A C\cong \overline M^{-1}C.$$
These are ring isomorphisms; no flatness, finite-generation or nonzero-ring hypothesis is required.

Dependencies: thm-coproduct-property-of-tensor-products-of-commutative-algebras, cor-tensor-product-with-a-quotient-ring, thm-localisation-of-modules-is-tensor-product. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.A, B, F. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-field-valued-points-of-schemes`

Claim and conventions: For every field $K$ and scheme $X$, morphisms $\operatorname{Spec}K\to X$ correspond bijectively to pairs $(x,\iota)$ with $x\in X$ and a field embedding $\iota:\kappa(x)\to K$. The identity embedding gives a canonical morphism $\operatorname{Spec}\kappa(x)\to X$, compatible with all scheme morphisms. More generally, for a nonzero local ring $(R,\mathfrak m)$, morphisms $\operatorname{Spec}R\to X$ correspond to pairs $(x,\varphi)$ with a local homomorphism $\varphi:\mathcal O_{X,x}\to R$. Assuming Choice, two field-valued points have the same image in $X$ if and only if they are dominated by a common field-valued point, by compatible embeddings of their fields into a third field.

Dependencies: def-residue-field-scheme-point, thm-morphisms-into-affine-scheme-global-sections, lem-local-homomorphism-residue-field-map, thm-tensor-product-basis-from-bases, thm-proper-ideal-contained-in-maximal-ideal. Sources: https://stacks.math.columbia.edu/tag/01J5 — Stacks 26.13, paragraphs preceding 26.13.3 and its field-valued special case. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `def-scheme-theoretic-fibre`

Claim and conventions: For a morphism $f:X\to S$ and any point $s\in S$, its **scheme-theoretic fibre** is
$$X_s=X\times_S\operatorname{Spec}\kappa(s),$$
viewed as a $\kappa(s)$-scheme. The map $\operatorname{Spec}\kappa(s)\to S$ is the canonical residue-field point from [[lem-field-valued-points-of-schemes]], and the product is base change as in [[def-base-change-morphism-schemes]]. The point $s$ need not be closed. A fibre over a generic point is called a generic fibre. Empty fibres are allowed.

Dependencies: def-base-change-morphism-schemes, lem-field-valued-points-of-schemes. Sources: https://stacks.math.columbia.edu/tag/01JW — Stacks 26.18.4; Vakil 10.3.2. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `thm-affine-fibre-coordinate-ring`

Claim and conventions: Let $A\to B$ be a ring map, $\mathfrak p\in\operatorname{Spec}A$, and $M=A\setminus\mathfrak p$, acting on $B$ through the ring map. The fibre over $\mathfrak p$ is canonically
$$\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))\cong\operatorname{Spec}(M^{-1}B/\mathfrak pM^{-1}B).$$
The residue field is $\kappa(\mathfrak p)=A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}$. No reduction of the tensor ring is taken.

Dependencies: def-scheme-theoretic-fibre, thm-affine-fibre-product-tensor-ring, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.3.2; Stacks 26.18.4–5. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-points-of-fibre-primes-over-point`

Claim and conventions: For $f:X\to S$ and $s\in S$, the projection $X_s\to X$ is a homeomorphism onto $f^{-1}(s)$ with the subspace topology and preserves the residue field at every point. In compatible affine charts $A\to B$, $s=\mathfrak p$, its points correspond exactly to primes $\mathfrak q\subset B$ contracting to $\mathfrak p$; no extra embedding choice occurs. Also $X\times_S\operatorname{Spec}\mathcal O_{S,s}\to X$ is a homeomorphism onto the inverse image of the set of generalizations of $s$.

Dependencies: thm-affine-fibre-coordinate-ring, lem-fibre-product-open-restriction, lem-localisation-spectrum-map-homeomorphism-onto-image, thm-prime-spectrum-of-a-quotient-bijection. Sources: https://stacks.math.columbia.edu/tag/01JW — Stacks 26.18.5; Vakil 10.3.B. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-scheme-fibre-stalk-quotient`

Claim and conventions: For $f:X\to S$ and $x\in X$ with $s=f(x)$, use the corresponding point of $X_s$. There are canonical local-ring isomorphisms
$$\mathcal O_{X_s,x}\cong\mathcal O_{X,x}/\mathfrak m_s\mathcal O_{X,x}\cong\mathcal O_{X,x}\otimes_{\mathcal O_{S,s}}\kappa(s).$$

Dependencies: lem-points-of-fibre-primes-over-point, thm-affine-fibre-coordinate-ring, thm-stalk-structure-sheaf-prime-localization. Sources: https://stacks.math.columbia.edu/tag/01JW — Stacks 26.18.6. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-points-of-scheme-fibre-product-residue-tensors`

Claim and conventions: For scheme morphisms $f:X\to S$ and $g:Y\to S$, points of $P=X\times_S Y$ are in bijection with quadruples $(x,y,s,\mathfrak r)$ where $f(x)=g(y)=s$ and
$$\mathfrak r\in\operatorname{Spec}(\kappa(x)\otimes_{\kappa(s)}\kappa(y)).$$
The residue field at the corresponding point of $P$ is canonically $\kappa(\mathfrak r)$.

Dependencies: lem-field-valued-points-of-schemes, lem-affine-fibre-product-projections-stalk-maps, lem-tensor-ring-presentations-for-base-change, thm-fibre-products-of-schemes-exist. Sources: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.5. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-fibre-after-base-change`

Claim and conventions: Let $S'\to S$ send $s'$ to $s$. For any $X\to S$ there is a canonical isomorphism of $\kappa(s')$-schemes
$$(X_{S'})_{s'}\cong X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}\kappa(s').$$

Dependencies: def-scheme-theoretic-fibre, lem-base-change-composition, lem-field-valued-points-of-schemes. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.3.C. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-base-extension-field-coordinate-ring`

Claim and conventions: For a field extension $K/k$ and a $k$-scheme $X$, the inverse image of every affine open $U=\operatorname{Spec}A$ in $X_K$ is $\operatorname{Spec}(A\otimes_k K)$. These affine charts cover $X_K$ and are compatible on overlaps and with coefficient localizations.

Dependencies: def-base-change-morphism-schemes, thm-fibre-products-of-schemes-exist, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.3. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `def-geometric-fibre`

Claim and conventions: A **geometric point** of a scheme $S$ is a morphism $\operatorname{Spec}\Omega\to S$ with $\Omega$ algebraically closed. For a specified point $s\in S$, choose an algebraic closure $\Omega/\kappa(s)$, in the sense of [[def-algebraic-closure]]. In this page the **geometric fibre at $s$** means
$$X_{\bar s}=X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}\Omega.$$
Here $X_s$ is [[def-scheme-theoretic-fibre]], and its affine charts extend as in [[lem-base-extension-field-coordinate-ring]]. The choice includes the embedding of $\kappa(s)$; no preferred algebraic closure or preferred isomorphism between choices is implied.

Dependencies: def-scheme-theoretic-fibre, lem-base-extension-field-coordinate-ring, def-algebraic-closure. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.3 and table (Rc), (Ic), (Cc). Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `lem-geometric-fibre-choice-independent`

Claim and conventions: Assume the Axiom of Choice. For two algebraic closures $\Omega_1,\Omega_2$ of $\kappa(s)$, a chosen $\kappa(s)$-isomorphism $\sigma:\Omega_1\to\Omega_2$ identifies the two geometric fibres after transport of scalars. In particular their isomorphism-invariant properties agree. No canonical choice of this identification is asserted.

Dependencies: def-geometric-fibre, cor-algebraic-closures-are-isomorphic-over-the-base, lem-base-change-composition. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.3 and scalar extension 10.2.3. Provenance: statement ai-altered, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `def-geometrically-reduced-integral-connected-fibre`

Claim and conventions: For a morphism $X\to S$ and $s\in S$, call $X_s$ **geometrically reduced**, **geometrically irreducible**, **geometrically integral**, or **geometrically connected** when the chosen algebraic-closure fibre of [[def-geometric-fibre]] has the corresponding property. Reduced means all local rings have no nonzero nilpotents, equivalently its reduction from [[def-reduction-of-scheme]] is itself. Irreducible here requires a nonempty space not expressible as a union of two proper closed subsets. Integral means reduced and irreducible, with nonemptiness, as in [[def-integral-scheme]]. Connected means no separation into two nonempty disjoint open subsets, as in [[def-connected-space]]. Thus an empty geometric fibre is reduced and connected, but neither irreducible nor integral.

Under Choice, [[lem-geometric-fibre-choice-independent]] makes these tests independent of the choice of algebraic closure. This page uses these closure tests as its convention; an equivalence with tests over every extension field is not needed in the proofs here.

Dependencies: def-geometric-fibre, lem-geometric-fibre-choice-independent, def-integral-scheme, def-connected-space, def-reduction-of-scheme. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.3 and table preceding 10.4.K. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `lem-base-change-open-closed-immersions`

Claim and conventions: Open immersions, closed immersions and immersions (equivalently locally closed immersions) remain of the same kind after arbitrary base change. If a closed subscheme $Z\hookrightarrow S$ has ideal sheaf $\mathcal I$, its pullback under $g:Y\to S$ has ideal
$$\operatorname{Im}(g^*\mathcal I\longrightarrow\mathcal O_Y).$$
On affine charts $A\to C$ this is the extended ideal $IC$. No injectivity of $g^*\mathcal I\to\mathcal O_Y$ is asserted.

Dependencies: def-base-change-morphism-schemes, lem-fibre-product-open-restriction, lem-tensor-ring-presentations-for-base-change, thm-affine-closed-immersions-quotient-rings. Sources: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.6 and 26.18.2. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `def-scheme-theoretic-inverse-image-subscheme`

Claim and conventions: For $f:X\to S$ and a closed or locally closed subscheme $Z\hookrightarrow S$, define the **scheme-theoretic inverse image** to be $X\times_S Z\to X$. By [[lem-base-change-open-closed-immersions]] it is a closed or locally closed subscheme, respectively. For a closed ideal sheaf $\mathcal I$, the inverse-image ideal is $\operatorname{Im}(f^*\mathcal I\to\mathcal O_X)$. For an open subscheme this construction is the open inverse image with its restricted sheaf.

Dependencies: lem-base-change-open-closed-immersions. Sources: https://stacks.math.columbia.edu/tag/01JO — Stacks 26.17.7. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `lem-subscheme-intersection-fibre-product`

Claim and conventions: For finitely many closed subschemes $Z_1,\ldots,Z_n\hookrightarrow X$ with ideal sheaves $\mathcal I_1,\ldots,\mathcal I_n$, their scheme-theoretic intersection is their iterated fibre product over $X$ and is cut out by $\mathcal I_1+\cdots+\mathcal I_n$. For $n=0$ the intersection and empty product over $X$ are $X$, with zero ideal. For finitely many locally closed subschemes, restrict to the intersection of ambient opens in which they are closed and apply the same rule.

Dependencies: def-scheme-theoretic-inverse-image-subscheme, lem-tensor-ring-presentations-for-base-change, lem-fibre-product-associativity-and-symmetry. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.C and H. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-base-change-locally-finite-type-presentation`

Claim and conventions: Every arbitrary base change of a locally finite-type morphism is locally of finite type. Every arbitrary base change of a locally finitely presented morphism is locally of finite presentation. There is no Noetherian or flatness hypothesis on the base.

Dependencies: def-locally-finite-type-and-finite-type-morphism, def-locally-finite-presentation-morphism, lem-tensor-ring-presentations-for-base-change, thm-fibre-products-of-schemes-exist. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.B(e,g); Stacks 29.15.4 and 29.22.4. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-base-change-quasi-compact-morphisms`

Claim and conventions: For $f:X\to S$, the following are equivalent: $f$ is quasi-compact; the inverse image of every affine open in $S$ is quasi-compact; some affine open cover of $S$ has quasi-compact inverse images. Moreover any arbitrary base change of a quasi-compact morphism is quasi-compact.

Dependencies: def-quasi-compact-and-quasi-separated-morphism, cor-affine-scheme-quasi-compact, thm-fibre-products-of-schemes-exist. Sources: https://stacks.math.columbia.edu/tag/01K2 — Stacks 26.19.2–3. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `cor-base-change-finite-type-and-products`

Claim and conventions: Arbitrary base change preserves morphisms of finite type. If $X,Y$ are locally finite-type $k$-schemes, then $X\times_kY$ is locally of finite type over $k$; if both are of finite type, their product is of finite type.

Dependencies: lem-base-change-locally-finite-type-presentation, lem-base-change-quasi-compact-morphisms, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.D and 10.4.B(f). Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `def-affine-morphism-schemes`

Claim and conventions: A morphism of schemes $f:X\to S$ is **affine** when $f^{-1}(U)$ is affine for every affine open subscheme $U\subseteq S$. Here the inverse image carries the restricted structure sheaf, as in [[def-affine-open-subscheme]], and $f$ is a morphism of locally ringed spaces as in [[def-morphism-of-schemes]]. The empty scheme is affine, being $\operatorname{Spec}0$. Affineness of a morphism does not require its total source or target to be affine.

Dependencies: def-morphism-of-schemes, def-affine-open-subscheme. Sources: https://stacks.math.columbia.edu/tag/01S5 — Stacks 29.11.1. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `lem-affineness-from-unit-generating-global-sections`

Claim and conventions: Let $X$ be a scheme, $R=\Gamma(X,\mathcal O_X)$, and $f_1,\ldots,f_n\in R$. Write $X_f$ for the open locus where the germ of $f$ is a unit. If $(f_1,\ldots,f_n)=R$ and each $U_i=X_{f_i}$ is affine, then $X$ is affine. In fact the canonical morphism $X\to\operatorname{Spec}R$ is an isomorphism. Empty $X$ and $n=0$ are allowed.

Dependencies: thm-morphisms-into-affine-scheme-global-sections, thm-sections-basic-open-affine-scheme, thm-localisation-of-modules-is-exact, thm-sheaf-equalizer-condition. Sources: https://stacks.math.columbia.edu/tag/01QF — Stacks 28.28.3, with elementary finite-equalizer proof. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-affine-morphism-local-on-target`

Claim and conventions: A morphism $f:X\to S$ is affine if and only if there exists an affine open cover $S=\bigcup_i U_i$ for which every $f^{-1}(U_i)$ is affine.

Dependencies: def-affine-morphism-schemes, lem-affineness-from-unit-generating-global-sections, lem-spectrum-localization-open-immersion, cor-affine-scheme-quasi-compact. Sources: https://stacks.math.columbia.edu/tag/01S5 — Stacks 29.11.3(1) iff (2), Remark 29.11.4; 26.11.5–6. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-base-change-affine-morphisms`

Claim and conventions: Arbitrary base change preserves affine morphisms. Composites of affine morphisms are affine, and every closed immersion is affine.

Dependencies: def-affine-morphism-schemes, lem-affine-morphism-local-on-target, thm-affine-fibre-product-tensor-ring, lem-fibre-product-open-restriction, thm-affine-closed-immersions-quotient-rings. Sources: https://stacks.math.columbia.edu/tag/01S5 — Stacks 29.11.8–10. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `def-diagonal-morphism-scheme`

Claim and conventions: For $X\to S$, the **diagonal morphism** is the unique $\Delta_{X/S}:X\to X\times_S X$ satisfying $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. It exists by [[thm-fibre-products-of-schemes-exist]]. For any test scheme $T$, it takes an $S$-morphism $a:T\to X$ to the compatible pair $(a,a)$.

Dependencies: thm-fibre-products-of-schemes-exist. Sources: https://stacks.math.columbia.edu/tag/01KH — Stacks 26.21 introductory definition. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `lem-diagonal-base-change-identification`

Claim and conventions: For $S'\to S$ and $X\to S$, there is a canonical isomorphism
$$X_{S'}\times_{S'}X_{S'}\cong(X\times_S X)\times_S S'.$$
Under this identification $\Delta_{X_{S'}/S'}$ is the base change of $\Delta_{X/S}$. More explicitly, the square with horizontal arrows the two diagonals and vertical arrows to $X$ and $X\times_S X$ is Cartesian.

Dependencies: def-diagonal-morphism-scheme, lem-base-change-composition, lem-fibre-product-associativity-and-symmetry. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil proof 11.1.10, pp.230–231. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `def-graph-morphism-over-base`

Claim and conventions: For an $S$-morphism $u:X\to Y$ (as in [[def-scheme-over-base]]), the **graph morphism** is $\Gamma_u=(\operatorname{id}_X,u):X\to X\times_S Y$, supplied by [[thm-fibre-products-of-schemes-exist]]. Its first projection is the identity and its second projection is $u$. The definition alone does not assert that its image is closed.

Dependencies: thm-fibre-products-of-schemes-exist, def-scheme-over-base. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 11.1.17, p.232. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `lem-graph-as-pullback-diagonal`

Claim and conventions: For an $S$-morphism $u:X\to Y$, put $H=(u\operatorname{pr}_X,\operatorname{pr}_Y):X\times_S Y\to Y\times_S Y$. The square with top arrow $\Gamma_u:X\to X\times_S Y$, bottom arrow $\Delta_{Y/S}:Y\to Y\times_S Y$, left arrow $u$, and right arrow $H$ is Cartesian.

Dependencies: def-graph-morphism-over-base, def-diagonal-morphism-scheme, lem-fibre-product-unique-canonical-isomorphism. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil proof 11.1.18, diagram (11.1.18.1), p.232. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `thm-classical-product-agrees-scheme-product`

Claim and conventions: Let $k$ be algebraically closed and let $V,W$ be irreducible classical $k$-varieties. Write $V^*,W^*$ for their associated schemes. Then the associated scheme of their classical product is canonically isomorphic to $V^*\times_kW^*$, compatibly with the projections. For nonempty affine charts with coordinate rings $A,B$, the product chart ring is the unreduced tensor product $A\otimes_kB$, which is a domain in this setting.

Dependencies: thm-affine-variety-product-coordinate-ring, thm-classical-varieties-equivalent-integral-separated-finite-type-schemes, thm-fibre-products-of-schemes-exist, lem-fibre-product-open-restriction. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.3 and 10.4.E; local published affine product theorem. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-base-change-surjective-morphisms`

Claim and conventions: Assuming the Axiom of Choice, a surjective scheme morphism $f:X\to S$ remains surjective after every base change $S'\to S$. In particular, for a field extension $K/k$, a nonempty $k$-scheme $X$ has nonempty $X_K$.

Dependencies: lem-points-of-scheme-fibre-product-residue-tensors, thm-tensor-product-basis-from-bases, thm-proper-ideal-contained-in-maximal-ideal. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.D. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `lem-immersions-and-localizations-monomorphisms`

Claim and conventions: Open immersions, closed immersions, and localization morphisms $\operatorname{Spec}(M^{-1}A)\to\operatorname{Spec}A$ are monomorphisms of schemes. Any composite of these, in particular a locally closed immersion, is a monomorphism. Here monomorphism means that for every scheme $T$ the induced map on sets of morphisms from $T$ is injective.

Dependencies: lem-open-immersion-monomorphism, thm-morphisms-into-affine-scheme-global-sections, thm-affine-closed-immersions-quotient-rings, lem-morphism-schemes-local-on-source-target. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.G. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `rem-properties-can-change-after-field-extension`

Claim and conventions: Scalar extension on affine charts is tensor extension by [[lem-base-extension-field-coordinate-ring]]. For $\mathbb C/\mathbb R$, the presentation formula [[lem-tensor-ring-presentations-for-base-change]] gives
$$\mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C[z]/(z^2+1)\cong\mathbb C\times\mathbb C.$$
The last map follows from [[thm-chinese-remainder-theorem-for-comaximal-ideals]], since $(z-i)$ and $(z+i)$ differ by the unit $2i$. A one-point integral real scheme therefore becomes two disjoint points, losing connectedness, irreducibility and integrality.

For the transcendental element $u$ over $\mathbb F_p$, put $L=\mathbb F_p(u)$ and $k=\mathbb F_p(u^p)$. The elements $1,u,\ldots,u^{p-1}$ form a $k$-basis of $L$: independence follows after clearing denominators and comparing polynomial exponents modulo $p$; their span is closed under multiplication using $u^p\in k$, and is a field because multiplication by a nonzero element is an injective linear map on this finite-dimensional span and hence surjective. Therefore
$$L\otimes_k L\cong L[z]/(z^p-u^p)=L[\epsilon]/(\epsilon^p),\qquad\epsilon=z-u.$$
The class $\epsilon$ is nonzero and nilpotent, so reducedness can also fail. These computations concern ordinary properties; they motivate testing the geometric fibre.

Dependencies: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change, thm-chinese-remainder-theorem-for-comaximal-ideals. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.1–2 and 10.4.G. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `rem-fibre-is-scheme-not-point-set`

Claim and conventions: By [[lem-points-of-fibre-primes-over-point]], the underlying space of $X_s$ is the ordinary inverse image of $s$ with its subspace topology. Its local rings, however, are the quotients in [[lem-scheme-fibre-stalk-quotient]], not a structure determined just by that set. Nilpotents and the residue fields remain mathematical data. For example $k[\epsilon]/(\epsilon^2)$ has one prime and residue field $k$, yet $\epsilon$ is a nonzero nilpotent, unlike the one-point reduced ring $k$.

For a general product $X\times_S Y$, even the underlying set requires more than a compatible pair $(x,y)$. By [[lem-points-of-scheme-fibre-product-residue-tensors]], the missing datum is a prime of $\kappa(x)\otimes_{\kappa(s)}\kappa(y)$. Thus ordinary fibre topology and general fibre-product points must be kept distinct.

Dependencies: lem-points-of-fibre-primes-over-point, lem-scheme-fibre-stalk-quotient, lem-points-of-scheme-fibre-product-residue-tensors. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.2 and 10.3.3; Stacks 26.18.5–6. Provenance: statement literature-derived, proof not-applicable; definition/commentary follows the cited convention. No narrowing or dropped claim. Validation: not yet run; draft bytes and non-proof body written. Next: remaining assigned items, then focused checks.

### Authored `ex-fibre-family-xy-equals-t`

Claim and conventions: Over any field $k$, consider $X=\operatorname{Spec}k[x,y,t]/(xy-t)\to\operatorname{Spec}k[t]$. At $t=a\in k$ the fibre is $\operatorname{Spec}k[x,y]/(xy-a)$. At zero it is the union of two reduced axes; at $a\ne0$ it is $\mathbb G_{m,k}=\operatorname{Spec}k[x,x^{-1}]$. The generic fibre is $\operatorname{Spec}k(t)[x,x^{-1}]$.

Dependencies: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Specialization of the polynomial fibre computation in Vakil 10.3.1–2. Provenance: statement ai-generated, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `ex-nonreduced-fibre-x-squared-equals-t`

Claim and conventions: For any field $k$, the family $\operatorname{Spec}k[x,t]/(x^2-t)\to\operatorname{Spec}k[t]$ has fibre $\operatorname{Spec}k[x]/(x^2)$ at zero, nonreduced in every characteristic. Over $\mathbb Q$, the fibre rings at $t=1,0,-1$ and at the generic point are respectively
$$\mathbb Q\times\mathbb Q,\qquad\mathbb Q[\epsilon]/(\epsilon^2),\qquad\mathbb Q(i),\qquad\mathbb Q(x),$$
where the generic base field $\mathbb Q(t)$ embeds in $\mathbb Q(x)$ via $t=x^2$, with degree two.

Dependencies: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change, thm-chinese-remainder-theorem-for-comaximal-ideals. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil Example 10.3.3(i)–(iv). Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `ex-base-change-real-conic-to-complex`

Claim and conventions: The real scheme $X=\operatorname{Spec}\mathbb R[x,y]/(x^2+y^2+1)$ has no $\mathbb R$-valued points over $\mathbb R$. Its complex base change is $\operatorname{Spec}\mathbb C[x,y]/(x^2+y^2+1)$ and has the complex point $(i,0)$. Absence of real-valued points does not mean $X$ is empty.

Dependencies: lem-field-valued-points-of-schemes, lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Polynomial scalar-extension method, Vakil 10.2.A–B and 10.2.3. Provenance: statement ai-generated, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `cex-domain-tensor-algebraic-closure-reducible`

Claim and conventions: False claims: an integral real scheme must stay irreducible or connected after extension to $\mathbb C$; an injective morphism of schemes must remain injective after arbitrary base change. The morphism $\operatorname{Spec}\mathbb C\to\operatorname{Spec}\mathbb R$ refutes all these assertions.

Dependencies: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change, thm-chinese-remainder-theorem-for-comaximal-ideals. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.2.1, 10.4.1–2 and 10.4.I. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `ex-product-affine-lines-plane`

Claim and conventions: For any field $k$, $\mathbb A^1_k\times_k\mathbb A^1_k\cong\mathbb A^2_k$ functorially. Nevertheless the product has distinct points over the pair of generic points: in $k[x,y]$, both $(0)$ and $(y-x)$ contract to $(0)$ in each of $k[x]$ and $k[y]$.

Dependencies: thm-affine-fibre-product-tensor-ring, lem-points-of-scheme-fibre-product-residue-tensors. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.1.2–3. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `ex-fibre-closed-immersion`

Claim and conventions: For an ideal $I\subseteq A$ and $\mathfrak p\in\operatorname{Spec}A$, the fibre of $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ at $\mathfrak p$ is $\operatorname{Spec}\kappa(\mathfrak p)$ if $I\subseteq\mathfrak p$, and is empty otherwise.

Dependencies: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Direct special case of Vakil 10.2.B and 10.3.2. Provenance: statement ai-generated, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `ex-graph-polynomial-map-closed-subscheme`

Claim and conventions: Let $k$ be a field, $n,m\ge0$, and let $u:\mathbb A^n_k\to\mathbb A^m_k$ be given by polynomials $f_1,\ldots,f_m\in k[x_1,\ldots,x_n]$. Its graph is the closed subscheme of $\mathbb A^{n+m}_k$ with ideal
$$(y_1-f_1(x),\ldots,y_m-f_m(x)).$$

Dependencies: def-graph-morphism-over-base, lem-graph-as-pullback-diagonal, thm-affine-closed-immersions-quotient-rings, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Affine specialization of Vakil 11.1.17–18. Provenance: statement ai-altered, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `cex-set-theoretic-fibre-loses-multiplicity`

Claim and conventions: False claim: the underlying set of a scheme fibre together with its pointwise residue fields determines that fibre up to scheme isomorphism. For any field $k$, the zero fibres of $x^2=t$ and $x^3=t$ have the same one-point underlying space and residue field $k$, but are not isomorphic as schemes. Their coordinate rings have $k$-dimensions two and three.

Dependencies: thm-affine-fibre-coordinate-ring, thm-affine-scheme-ring-anti-equivalence. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Variant of Vakil 10.3.3(ii). Provenance: statement ai-generated, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `ex-empty-fibre-tensor-zero-ring`

Claim and conventions: For the open immersion $\operatorname{Spec}k[t,t^{-1}]\to\operatorname{Spec}k[t]$, the fibre at $t=0$ is empty: its tensor coordinate ring is the zero ring.

Dependencies: thm-affine-fibre-coordinate-ring, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Direct localization special case of Vakil 10.2.F and 10.3.2. Provenance: statement ai-generated, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `cex-purely-inseparable-base-change-nonreduced`

Claim and conventions: False claim: reducedness survives algebraic extension of the ground field. Let $p$ be prime, $k=\mathbb F_p(v)$ with $v$ transcendental, and $L=k[u]/(u^p-v)$. Then $L$ is a field, but
$$L\otimes_kL\cong L[\epsilon]/(\epsilon^p),$$
so the base change of the reduced $k$-scheme $\operatorname{Spec}L$ along the finite algebraic extension $L/k$ is nonreduced.

Dependencies: lem-base-extension-field-coordinate-ring, lem-tensor-ring-presentations-for-base-change, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-polynomial-ring-over-a-field-is-a-ufd. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.4.G. Provenance: statement ai-altered, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Authored `ex-quadratic-cover-self-fibre-product`

Claim and conventions: For $\mathbb A^1_k\to\mathbb A^1_k$ given by $t\mapsto x^2$, the self fibre product is
$$\operatorname{Spec}k[x,y]/(x^2-y^2).$$
If $\operatorname{char}k\ne2$ it is a reduced union of two distinct line components; if $\operatorname{char}k=2$ it is the doubled diagonal.

Dependencies: thm-affine-fibre-product-tensor-ring, lem-tensor-ring-presentations-for-base-change. Sources: https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf — Vakil 10.3.E. Provenance: statement literature-derived, proof ai-altered; locally written proof follows the source route with the explicit dependency and boundary contract. No narrowing or dropped claim. Validation: not yet run; draft bytes and proof contract written. Next: remaining assigned items, then focused checks.

### Final authoring refinements and page material

All 53 item bodies and both planned pages have been written as draft. Completed every inline coverage obligation, including conditional product stability (with composition stability required), affine-space coefficient extension, local-ring points and their minimal residue-field representative, quasi-compact composition, and finite-presentation restriction/composition. Classical product comparison keeps the exact affine-overlap separation equivalence and verifies classical separation through projection equalizers. The multiplicity counterexample uses nilradical powers to exclude even abstract scheme isomorphisms, rather than relying only on k-dimension. No claim was narrowed or dropped. Two explicit dependency edges were added in the owned manifest and item frontmatter: the maximal-ideal theorem for the unit-ideal argument in lem-affine-morphism-local-on-target, and the proved quasi-compact target criterion for the inline quasi-compactness conclusion in lem-base-change-affine-morphisms. No page order or plan structure was changed. Proof contracts will now be synchronized with these final statements and actual proof rows, then checked.

### Final validation and handoff

Completed 53 assigned draft items, both planned draft pages under `library/scheme-theory/`, and all 42 item-specific proof contracts. This final checkpoint supersedes the pending-validation statements in the individual authoring checkpoints above. Source sections and exact dependency statements were read; shell DNS access failed, but complete relevant mathematical passages were obtained through the browser, so that failure leaves no source-reading blocker.

Applied the canonical precheck proof-row repairs for `lem-tensor-ring-presentations-for-base-change`, `lem-base-change-open-closed-immersions`, `cor-base-change-finite-type-and-products`, `lem-immersions-and-localizations-monomorphisms`, and `ex-nonreduced-fibre-x-squared-equals-t`. Remapped contract proof-step references and synchronized exact citation statements and uses. Converted source references to conventional YAML after the initial content-policy reference-detection failures.

Final checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 53 explicit `items/ID.md` paths from this manifest: 42 proof-bearing items checked, zero failing; all clean after canonical repairs.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed; 892 pages with item lists have consistent acyclic order and no unresolved item dependencies, forward references, or B-page dependencies. The bare requested invocation first returned CLI usage because this tool requires a plan path. Repository-wide redundant-prerequisite notices and the notice about 463 pages without item lists remain outside this batch.
- `node tools/content-policy.mjs research/frontier-33-batch-10.pages.json`: 53 scoped items, zero errors and zero warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-10.proof-contracts.json --strict`: 42/42 checked, zero errors and zero warnings.
- Focused render validation on all 53 item files and both page files: all 55 pass YAML parsing, real KaTeX parsing, and Markdown/math delimiter checks.
- Owned-file `git diff --check` and a direct draft/status, judge-record, and trailing-whitespace audit: passed for the authored scope. The first auxiliary status assertion assumed unquoted YAML; corrected that assertion to accept the existing valid quoted `"draft"` values, without changing artifact status.

No claims were narrowed or dropped. No finite-smoke computation is offered as proof. No mathematical obligations or authoring blockers remain identified. No judge record, verification stamp, publication action, or workflow transition was added. Next action belongs to the build driver’s subsequent review stage; these artifacts remain draft.
