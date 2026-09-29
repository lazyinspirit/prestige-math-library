# Step 3b authoring and scaffold audit — cohomology of quasi-coherent sheaves on affine and projective schemes

- Run: `frontier-36-complete`; batch 9; role `alpha-high`; label `step3b-pair-cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-60eb08113187671e`.
- Owned pair: A `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` (51 items), B `...-examples` (11 items) = 62 items, in `research/frontier-36-complete-batch-9.pages.json`.
- Assignment: audit each scaffold, repair where necessary, author all 62 items in the dispatch dependency-level order (ties by page order and item ID), with contracts, decisions and this checkpoint report. Do not edit sibling pairs or published content.

## Verified starting state

- Read `CLAUDE.md`, `AGENTS.md`, `README.md`, `SCHEMA.md`, `briefs/group-author.md`, the run-local owner direction `research/frontier-36-complete-owner-authoring-direction.md`, the batch-9 notes, the Step 3a scope review for this pair (non-owner `sufficient`), and the generated dispatch task.
- All 62 assigned IDs are in the Step 1 baseline receipt `research/frontier-36-complete-step3-auditor-baseline.json`; no item file existed at dispatch start. The A-page scope decision is non-owner `sufficient` and is refreshed when a repair changes dependencies.
- Direct in-run prerequisite pairs (may still be unfinished at authoring time): `quasi-coherent-and-coherent-sheaves-and-vector-bundles` (batch 7) and `proj-projective-schemes-twisting-sheaves-and-ampleness` (batch 8). Their unresolved items used below are flagged per item; consumers of unauthored suppliers are recorded as `escalate`, never `accept`.
- External (out-of-pair) suppliers still unauthored in the shared checkout while authoring proceeded: `lem-pullback-qc-module-quasi-coherent`, `lem-tensor-qc-modules-quasi-coherent`, `thm-affine-quasi-coherent-equivalence`, `thm-pushforward-qc-under-qcqs-morphism`, `thm-quasi-coherence-check-affine-cover`, `thm-coherent-sheaves-abelian-noetherian-scheme`, `thm-ample-powers-very-ample-proper-base`, `thm-serre-criterion-ampleness`, `thm-segre-line-bundle-external-tensor`, `thm-twisting-sheaf-invertible-standard-graded`. Every consumer of these is listed in the escalation table below.
- Local scaffold repair of a dangling dependency id: `lem-cohomology-base-change-finite-free-criterion` declared `def-tensor-product-of-modules`, which resolves to no item anywhere in the library; replaced by the published `def-tensor-product-of-modules-by-generators-and-relations` (the canonical tensor definition, cited by 26 items). Manifest and item frontmatter updated; `depcheck` no longer reports it.

## Item checkpoint 1/62 — `lem-affine-open-containing-component-generics`

- **Claim/convention:** a scheme with finitely many irreducible components has, for every point x, an affine open U containing x and all generic points of the components; no separation or Noetherian hypothesis, empty space included.
- **Examined dependencies (all published):** `def-quasi-compact-and-quasi-separated-scheme`, `def-noetherian-topological-space`, `def-irreducible-component-of-a-topological-space`, `def-generic-point-irreducible-closed-subset`, `def-scheme`, `def-affine-open-subscheme`, `lem-distinguished-open-refinement-at-a-point`, `lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union`, `thm-morphisms-into-affine-scheme-global-sections`, `thm-gluing-sheaves`.
- **Repair:** none; the incoming item file was already authored and sound.
- **Checks:** precheck PASS, rendercheck PASS, strict proof-contract PASS (non-fatal `shotgun-bracket` warning).
- **Decision:** `accept`, confidence 1, receipt `research/frontier-36-complete-step3b-review-lem-affine-open-containing-component-generics.json`, sha256 `22c1b2e6…`.
- **Next:** level 0, `lem-cohomology-base-change-finite-free-criterion`.

## Item checkpoint 2/62 — `lem-cohomology-base-change-finite-free-criterion`

- **Claim/convention:** for a bounded complex of finite free modules over a Noetherian local ring, H^q is finite free and commutes with every base change iff some localised differential acquires split form diag(I_r,0); AC declared and used exactly through Nakayama.
- **Repair:** dangling dep `def-tensor-product-of-modules` replaced (see above); added the local-ring/localisation/Jacobson/residue-field/AC suppliers actually used and dropped an unused one; adopted the checker's canonical step layering.
- **Checks:** precheck PASS, rendercheck PASS, strict proof-contract PASS.
- **Decision:** `repaired`, confidence 1, receipt `research/frontier-36-complete-step3b-review-lem-cohomology-base-change-finite-free-criterion.json`, sha256 `3dca4dbf…` (re-recorded after the dep-id repair).
- **Next:** level 0, `lem-ringed-space-module-sheaves-enough-injectives`.

## Item checkpoint 3/62 — `lem-ringed-space-module-sheaves-enough-injectives`

- **Claim/convention:** under AC every ringed space has Mod(O_X) with enough injectives and one specific injective resolution per module; AC enters only through the functorial injective-embedding theorem, the categorical verification is choice-free.
- **Examined dependencies (all published):** the 21 items listed in the item frontmatter, in particular `def-module-on-ringed-space`, `thm-abelian-sheaves-form-abelian-category`, `thm-sheafification-preserves-stalks`, `def-extension-by-zero-abelian-sheaf`, `thm-module-categories-are-grothendieck-categories`, `def-grothendieck-category`, `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`, `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution`, `def-injective-resolution-in-an-abelian-category`, `def-axiom-of-choice`.
- **Repair:** authored the missing item: small coproducts via sheafification of the objectwise direct sum, AB5 via stalkwise exact filtered colimits, generator the coproduct over all opens of j_{U!}O_U with Hom(G_U,F)=F(U); adopted the canonical step layering.
- **Checks:** precheck PASS, rendercheck PASS (19/19 fact-source citations quoted and checked), strict proof-contract PASS.
- **Decision:** `accept`, confidence 1, receipt `research/frontier-36-complete-step3b-review-lem-ringed-space-module-sheaves-enough-injectives.json`.
- **Next:** level 0, `thm-cohomological-dimension-noetherian-scheme`.

## Open obligations

- Author the remaining 59 items and contracts in the dispatch order; recompute dependency levels after any local repair.
- Every consumer of the unauthored in-run suppliers listed above is recorded `escalate` with supplier ID, consumer ID and consuming step; the owner alone reconciles these.
- Run explicit-path precheck/rendering, content-policy, strict proof-contract, item-dependency-levels and validate-plan on the completed pair; report pre-splice plan mismatches for Step 4 rather than hiding them.

## Item checkpoint 4/62 — `thm-cohomological-dimension-noetherian-scheme`

- **Claim/convention:** under AC, a separated Noetherian scheme whose underlying space is Noetherian of dimension ≤ d has H^q(X,F)=0 for every quasi-coherent O_X-module and every q>d; the dimension is the topological chain dimension of the underlying space (the design's finite-dimensional setting), and the empty scheme is covered by dim ∅ = -∞ ≤ d. Separation is retained though unused.
- **Repair:** made the dimension convention explicit (no scheme-Krull-dimension definition exists in the library) and added the suppliers the argument actually needs: `def-locally-noetherian-and-noetherian-scheme`, `thm-noetherian-ring-has-noetherian-spectrum`, `lem-noetherian-subspaces-and-compact-opens`, `def-noetherian-topological-space`, `def-quasi-coherent-module-scheme`, `def-module-on-ringed-space`, `def-axiom-of-choice`. Proof: finite affine cover by Noetherian spectra → restriction argument makes X Noetherian → topological vanishing theorem applied to the underlying abelian sheaf.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (7 fact groups, 6 steps, 8 boundary dispositions).
- **Decision:** `repaired`, confidence 1, receipt `research/frontier-36-complete-step3b-review-thm-cohomological-dimension-noetherian-scheme.json`.
- **Next:** level 1, `def-higher-direct-image-sheaf`.

## Item checkpoint 5/62 — `def-higher-direct-image-sheaf`

- **Claim/convention:** for a morphism of ringed spaces f and an O_X-module F, R^q f_*F is the q-th derived object of f_* relative to the fixed functorial injective resolution datum I of Mod(O_X); R^0 f_*F = f_*F canonically, R^q=0 for q<0, and another datum gives a natural comparison isomorphism. The definition is relative to the fixed datum, matching the library's sheaf-cohomology convention.
- **Examined dependencies (all published or authored earlier in this pair):** `def-module-on-ringed-space`, `def-direct-image-sheaf`, `lem-direct-image-is-sheaf`, `thm-pullback-pushforward-module-adjunction`, `cor-a-right-adjoint-is-left-exact-and-a-left-adjoint-is-right-exact`, `lem-ringed-space-module-sheaves-enough-injectives` (checkpoint 3), `def-right-derived-object-relative-to-injective-resolution-data`, `thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor`, `thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic`, `def-axiom-of-choice`, `def-dependent-choice`.
- **Repair:** authored the definition; recorded that additivity/left exactness of f_* comes from the pullback–pushforward adjunction and that AC/DC are the hypotheses of the cited derived-functor machinery.
- **Checks:** precheck 0 proof-bearing, rendercheck PASS, strict contract PASS (8 not-applicable dispositions with specific reasons).
- **Decision:** `repaired`, confidence 1, receipt `research/frontier-36-complete-step3b-review-def-higher-direct-image-sheaf.json`.
- **Next:** level 2, `lem-higher-direct-image-local-section-formula`.

## Item checkpoint 6/62 — `lem-higher-direct-image-local-section-formula`

- **Claim/convention:** for f: X→S and an O_X-module F, R^q f_*F is the sheafification of V ↦ H^q(f^{-1}V, F|_{f^{-1}V}); restrictions and the O_S-module structure are respected. AC and DC declared.
- **Examined dependencies:** 23 published/authored items, in particular `lem-injective-sheaves-flasque`, `thm-flasque-sheaves-acyclic`, `thm-acyclic-resolution-theorem-for-right-derived-functors`, `def-sheaf-cohomology-derived-global-sections`, `lem-image-sheaf-is-sheafification-presheaf-image`, `thm-sheafification-preserves-stalks`, `lem-global-sections-left-exact`, `thm-abelian-sheaves-have-enough-injectives`.
- **Repair:** authored the proof (fixed an unsupported scaffolding sentence about syzygies; the acyclic-resolution theorem applies because the abelian-sheaf datum is defined on the whole category) and added the sheafification/image/stalk suppliers.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (16 fact-source citations, 7 steps, 8 boundaries).
- **Decision:** `repaired`, confidence 1, receipt `research/frontier-36-complete-step3b-review-lem-higher-direct-image-local-section-formula.json`.
- **Next:** level 5, `lem-affine-qc-cech-unit-ideal-exact`.

## Item checkpoint 7/62 — `lem-affine-qc-cech-unit-ideal-exact`

- **Claim/convention:** for A, M and f_1..f_r generating 1, the augmented alternating Čech complex 0→M→⊕M_{f_i}→⊕M_{f_if_j}→… is exact, and remains exact after localising A and M at any element.
- **Repair:** dropped the scaffold's dependency on the unauthored `thm-affine-quasi-coherent-equivalence` (not needed by the purely algebraic statement); authored the Stacks tag 01X9 proof (read in full via the Stacks page): prime localisation, insertion homotopy, descent by the local exactness criterion, rerun at an arbitrary localisation. Read the complete source argument at tag 01X9 and Algebra tag 00HN.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (9 deps, all published).
- **Decision:** `repaired`, confidence 1, receipt `research/frontier-36-complete-step3b-review-lem-affine-qc-cech-unit-ideal-exact.json`.
- **Next:** level 6, `lem-relative-projective-space-universally-closed`.

## Item checkpoint 8/62 — `lem-relative-projective-space-universally-closed`

- **Claim/convention:** for every scheme S and n≥0, P^n_S → S is universally closed; explicitly, for every S-scheme T and closed Z ⊆ P^n_T the image in T is closed. Empty base, empty closed set and n=0 included.
- **Examined dependencies (all published):** `def-relative-projective-space-standard-charts`, `thm-projective-space-as-proj` (batch 8, authored and present), `def-proj-graded-ring-points`, `def-graded-ring-and-graded-module`, `def-universally-closed-morphism`, `thm-nakayama-lemma`, `cor-finite-module-locally-zero-near-a-prime`, `thm-localisation-of-modules-is-tensor-product`, `thm-right-exactness-of-tensor-products`, `def-axiom-of-choice`.
- **Repair:** authored the full elimination proof (affine reduction, fibre = V_+(Iκ(p)), field criterion via Zorn maximal homogeneous ideal and minimal-homogeneous-component primality, nilpotency of the coordinates with the monomial count m ≥ (n+1)max m_i, then Nakayama plus finite generation to make the fibre-empty set open). No cross-pair escalation needed; no dependency on batch 5.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (8 fact groups, 7 steps, 8 boundaries including both iff directions of the fibre criterion).
- **Decision:** `repaired`, confidence 1, receipt `research/frontier-36-complete-step3b-review-lem-relative-projective-space-universally-closed.json`.
- **Next:** level 6, `thm-qc-sheaf-affine-higher-cohomology-vanishes`.

## Item checkpoint 9/62 — `thm-qc-sheaf-affine-higher-cohomology-vanishes`

- **Claim/convention:** for an affine scheme X=Spec A and quasi-coherent F, H^q(X,F)=0 for every q>0; empty affine scheme and zero module included.
- **Examined dependencies:** published `lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity`, our `lem-affine-qc-cech-unit-ideal-exact`, `cor-principal-localisation-spectrum-is-distinguished-open`, `lem-distinguished-open-refinement-at-a-point`, `cor-affine-scheme-quasi-compact`, `def-associated-sheaf-module-affine-scheme`, `lem-associated-sheaf-sections-basic-open`, `def-quasi-coherent-module-scheme`, the cohomology/Cech definitions; plus the **pending in-run supplier** `thm-affine-quasi-coherent-equivalence` (batch 7, not yet authored).
- **Consuming step and obligation:** step 2.1 identifies a quasi-coherent restriction on U=D(g) with an associated module and hence F(D(h))≅F(U)_h, so the cover's Čech complex is the augmented principal-open complex; without the supplier this identification is unproved.
- **Repair:** authored the cofinal-basis argument around the pending supplier; declared the obligation in the statement and proof text (no wikilink, so the strict contract stays green) and added the cross-batch dependency row.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS.
- **Decision:** `escalate`, confidence 1 — owner must reconcile once the batch-7 supplier is authored and this exact use verified. Receipt `research/frontier-36-complete-step3b-review-thm-qc-sheaf-affine-higher-cohomology-vanishes.json`.
- **Next:** level 7, `def-twist-quasi-coherent-sheaf-projective`.

## Item checkpoint 10/62 — `def-twist-quasi-coherent-sheaf-projective`

- **Claim/convention:** F(d)=F⊗O_X(d) (tensor of sheaves per def-sheaf-tensor-product) for a fixed degree-one generated Proj presentation; F(0)≅F; twists of quasi-coherent sheaves are quasi-coherent only through the pending batch-7 supplier `lem-tensor-qc-modules-quasi-coherent` (named in plain text); for a general ample L the twist is F⊗L^d with L^{-d}=(L^∨)^d; F(d) never silently switches the embedding.
- **Examined deps:** `def-twisting-sheaf-proj`, `def-sheaf-tensor-product`, `def-invertible-sheaf`, `def-ample-invertible-sheaf`, `thm-twisting-sheaf-invertible-standard-graded` (all on disk, batch 8 items are now authored); `lem-tensor-qc-modules-quasi-coherent` unauthored.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (definition; 8 not-applicable dispositions).
- **Decision:** `escalate`, confidence 1 — pending supplier `lem-tensor-qc-modules-quasi-coherent` is used by the quasi-coherence paragraph.
- **Next:** level 7, `lem-principal-open-cover-qc-acyclic-intersections`.

## Item checkpoint 11/62 — `lem-principal-open-cover-qc-acyclic-intersections`

- **Claim/convention:** for A, f_1..f_r generating 1 and quasi-coherent F on Spec A, every nonempty finite intersection ∩D(f_i)=D(∏f_i)≅Spec A_{∏f_i} (Spec 0 when the product is nilpotent; empty intersection = Spec A_1) has H^q=0 for q>0. The unit-ideal hypothesis is retained though the proof does not use it (interchange of principal opens is the only input).
- **Repair:** dropped the scaffold dependency `thm-quasi-coherence-check-affine-cover` (unauthored) because restriction-quasi-coherence is stated in the published definition `def-quasi-coherent-module-scheme`; supplied `lem-spectrum-localization-open-immersion` + `lem-distinguished-subset-identities` for the intersection identity and the scheme-level identification, and `def-sheaf-cohomology-derived-global-sections` for the isomorphism-invariance of cohomology.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (5 fact sources, 6 steps, 8 boundary dispositions).
- **Decision:** `escalate` — inherited obligation through `thm-qc-sheaf-affine-higher-cohomology-vanishes` step 2.1 to the unauthored batch-7 supplier `thm-affine-quasi-coherent-equivalence`.
- **Next:** level 7, `lem-support-dimension-preserved-field-extension`.

## Item checkpoint 12/62 — `lem-support-dimension-preserved-field-extension`

- **Claim/convention:** for X finite type over k, coherent F, K/k a field extension and F_K=pi^*F, dim Supp(F_K)=dim Supp(F) with dim∅=-∞; supports are stalk supports and dimensions are chain dimensions of Noetherian spaces.
- **Repair:** authored: finite affine cover with f.g. coordinate rings and F=ÑM_i; chartwise Supp=V(Ann); Ann_B(M⊗_A B)=(Ann_A M)B for flat B (proved via a presentation and the colon identity); dim C=dim(C⊗_kK) for f.g. k-algebras via Noether normalization + integral dimension preservation. Dropped nothing; added 13 suppliers to the scaffold's 4 (geometry of base change, support/annihilator, dimension theory, flatness).
- **Checks:** precheck PASS after adopting the canonical layer numbering (final step pinned to the top layer), rendercheck PASS, strict contract PASS (9 fact paragraphs, 8 steps, 8 boundaries).
- **Decision:** `escalate` — step 1.3 and the assembly step 3.1 use the unauthored batch-7 supplier `lem-pullback-qc-modules-quasi-coherent` (affine pullback formula).
- **Next:** level 7, `thm-affine-morphism-higher-direct-images-qc-vanish`.

## Item checkpoint 13/62 — `thm-affine-morphism-higher-direct-images-qc-vanish`

- **Claim/convention:** for an affine morphism f: X→S and quasi-coherent F on X, R^q f_*F = 0 for every q>0; the empty source and zero sheaf are included.
- **Repair:** authored the affine-open reduction (source affine over each affine open of S, restriction of F quasi-coherent), the local-section formula identifying R^q f_*F as the sheafification of V ↦ H^q(f^{-1}V, F), and stalkwise vanishing by affine acyclicity.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS.
- **Decision:** `escalate`, confidence 1 — inherited obligation to the unauthored batch-7 supplier `thm-affine-quasi-coherent-equivalence` through `thm-qc-sheaf-affine-higher-cohomology-vanishes` (step 2.1 of the theorem, consumed in step 1.1 here). Receipt `research/frontier-36-complete-step3b-review-thm-affine-morphism-higher-direct-images-qc-vanish.json`.
- **Next:** level 7, `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`.

## Item checkpoint 14/62 — `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`

- **Claim/convention:** for a separated scheme X with an affine open cover 𝒰, the Čech-to-cohomology comparison H^q(X,F)≅Ȟ^q(𝒰,F) holds for every quasi-coherent F and every q≥0; covers may be infinite, and the empty cover case of the empty scheme is included.
- **Repair:** authored the argument via the published `thm-separatedness-gluing-overlap-criterion`: pairwise and hence all finite intersections of the affine cover are affine, so the ordered cover is acyclic for quasi-coherent F by affine vanishing, and `thm-leray-acyclic-cover-theorem` yields the comparison isomorphism in all degrees.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS.
- **Decision:** `escalate`, confidence 1 — inherited obligation to the unauthored batch-7 supplier `thm-affine-quasi-coherent-equivalence` consumed through `thm-qc-sheaf-affine-higher-cohomology-vanishes` in step 2.1. Receipt `research/frontier-36-complete-step3b-review-thm-cech-computes-qc-cohomology-separated-scheme-affine-cover.json`.
- **Next:** level 7 (B page), `cex-affine-vanishing-fails-non-qc-sheaf`.

## Item checkpoint 15/62 — `cex-affine-vanishing-fails-non-qc-sheaf` (B page)

- **Claim/convention:** on the affine line X=Spec A, A=k[t], the extension-by-zero F=j_!O_U along the open immersion of the complement of a point is an O_X-module with H^1(X,F)≠0, so affine vanishing fails without quasi-coherence; the witness is the nonzero class (0,1) in the Cech/descent description.
- **Repair:** authored the computation: the complement sequence 0→F→O_X→i_*O_{pt}→0 plus the long exact sequence on the affine X gives H^1(X,F)=(A_{(t)}×A_{(t-1)})/diagonal(A) with (0,1) nonzero, and quasi-coherence of F would force H^1=0 by affine vanishing; the failure is therefore witnessed by the sheaf, not by the scheme.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS.
- **Decision:** `escalate`, confidence 1 — inherited obligation to the unauthored batch-7 supplier `thm-affine-quasi-coherent-equivalence` consumed through `thm-qc-sheaf-affine-higher-cohomology-vanishes` in steps 1.2 and 4.1. Receipt `research/frontier-36-complete-step3b-review-cex-affine-vanishing-fails-non-qc-sheaf.json`.
- **Next:** level 8, `lem-affine-morphism-cohomology-pushforward`.

## Item checkpoint 16/62 — `lem-affine-morphism-cohomology-pushforward`

- **Claim/convention:** for an affine morphism f: X→S, R^q f_*F=0 for q>0 and the edge map H^q(S,f_*F)→H^q(X,F) is an isomorphism for all q≥0 and every O_X-module F.
- **Repair:** authored the Godement flasque resolution argument: f_* of a flasque sheaf is flasque and acyclic for f_*, the acyclic-resolution theorem computes R^qf_*F as the cohomology of f_*G^• (zero for q>0 by affine vanishing of F), while H^q(S,f_*F)=H^q(f_*G^•) via the flasque resolution of f_*F, giving the edge isomorphism.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS.
- **Decision:** `escalate`, confidence 1 — inherited obligation to the unauthored batch-7 supplier `thm-affine-quasi-coherent-equivalence` through `thm-affine-morphism-higher-direct-images-qc-vanish` and `thm-qc-sheaf-affine-higher-cohomology-vanishes`. Receipt `research/frontier-36-complete-step3b-review-lem-affine-morphism-cohomology-pushforward.json`.
- **Next:** level 8, `lem-coherent-devissage-one-generic-generator`.

## Item checkpoint 17/62 — `lem-coherent-devissage-one-generic-generator`

- **Claim/convention:** Noetherian devissage on a Noetherian scheme X: a property of coherent sheaves stable under two-out-of-three which holds for one coherent module with one-dimensional generic fibre on each integral closed subscheme holds for every coherent sheaf; empty scheme and zero sheaf included. AC inherited from the filtration and associated-sheaf constructions.
- **Repair:** authored the Stacks 30.12 argument (Noetherian induction on supports, filtration by pushed-forward ideals, generic-point one-generator comparison, two-out-of-three splicing). Contract repaired after the first strict run: step 1.1's `inputs` was empty (only `[given]`) — set to `["given"]`; and the F4 fact group (`def-closed-immersion-schemes`, `def-integral-scheme`) had no citing step — added F4 to step 1.2's tags and to the contract's F4 uses/inputs, since step 1.2 pushes forward along integral closed immersions.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (after the repair). Note the decision receipt was recorded before this repair, so its payload sha is now stale; the decision itself (escalate) is unchanged and the script correctly refuses a non-owner re-record over an escalation (`The owner must resolve this item decision`).
- **Decision:** `escalate`, confidence 1 — steps 1.2/2.1/3.1 use the unauthored in-run batch-7 supplier `thm-coherent-sheaves-abelian-noetherian-scheme` (coherence of kernels/images/cokernels/extensions and closed-immersion pushforward), stated as obligation F6 in the item. Receipt `research/frontier-36-complete-step3b-review-lem-coherent-devissage-one-generic-generator.json` (sha superseded by the F4 repair; owner to reconcile).
- **Next:** level 8, `lem-higher-direct-image-affine-localization`.

## Item checkpoint 18/62 — `lem-higher-direct-image-affine-localization`

- **Claim/convention:** for f qc separated and F quasi-coherent: R^qf_*F is quasi-coherent; on an affine V=Spec A the restriction is the associated sheaf of the A-module H^q(f^{-1}V,F), with sections H^q(f^{-1}V,F)_a on D(a). AC and DC declared, inherited.
- **Repair:** dropped the scaffold dependency `thm-pushforward-qc-under-qcqs-morphism` (unauthored and not needed), authored the localisation argument: finite affine cover of X_V; separatedness makes intersections affine; the pullback complexes C^•(U^a,F)=C^•(U,F)⊗_A A_a; exactness of localisation gives H^q(X_a,F)=H^q(X_V,F)_a with compatible restrictions; gluing over the distinguished-open basis gives M~→R^qf_*F|_V, an isomorphism on stalks. The compatibility of sheaf-cohomology restriction with the Čech/Godement comparison is stated as fact F5 with its derivation from the Godement construction's locality.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (8 facts, 8 steps, 8 boundaries).
- **Decision:** `repaired`, confidence 1, receipt `research/frontier-36-complete-step3b-review-lem-higher-direct-image-affine-localization.json`.
- **Next:** level 8, `lem-projective-space-cech-monomial-complex`.

## Item checkpoint 19/62 — `lem-projective-space-cech-monomial-complex`

- **Claim/convention:** for X=P^n_A=Proj A[x_0..x_n] with the ordered standard cover and O(d) the twisting sheaf, C^•(U,O(d)) splits as ⊕_{Σe=d}K^•(e), one generator x^e per subset σ⊇N(e); the summand has H^0=A when N(e)=∅, H^n=A when N(e) is all indices, and is acyclic (contractible) otherwise; n=0 folds both descriptions into degree 0.
- **Repair:** dropped the scaffold dependency on the Čech comparison theorem (not used by this purely Čech-theoretic lemma) and authored the complete Stacks 30.8.1 (tag 01XT) proof, including the explicit insertion homotopy and the comparison of the N(e)=∅ summand with the unit-ideal complex of the authored `lem-affine-qc-cech-unit-ideal-exact`.
- **Checks:** precheck PASS, rendercheck PASS (after joining one split display), strict contract PASS (5 facts, 7 steps, 8 boundaries).
- **Decision:** `repaired`, confidence 1, receipt `research/frontier-36-complete-step3b-review-lem-projective-space-cech-monomial-complex.json`.
- **Next:** level 8, `lem-schematic-closure-and-dense-agreement`.

## Item checkpoint 20/62 — `lem-schematic-closure-and-dense-agreement`

- **Claim/convention:** for a quasi-compact open immersion j:U→Y with Y Noetherian, K=ker(O_Y→j_*O_U) is a quasi-coherent ideal sheaf; Z=Z_K=(V(K),(O_Y/K)|_{V(K)}), V(K)={y:K_y≠O_{Y,y}}, is the schematic closure (scheme-theoretic image) of j — the smallest closed subscheme through which j factors — with j=i∘j', j' an open immersion and O_Z→j'_*O_U injective (U schematically dense); morphisms Z→T into a separated T agreeing on U are equal. Quasi-compactness of j is retained but automatic under the Noetherian hypothesis; empty cases included.
- **Examined dependencies:** 42 declared; key inputs `lem-noetherian-subspaces-and-compact-opens` (AC; compactness of U∩V), `thm-sections-basic-open-affine-scheme`/`def-principal-distinguished-subset-of-spectrum`/`thm-sheaf-equalizer-condition` (finite principal cover and K(V)=ker(A→∏A_{f_i})), `thm-localisation-of-modules-is-exact`/`thm-localisation-of-modules-is-tensor-product` (K(D(g))=K(V)_g), `lem-associated-sheaf-sections-basic-open` (K|_V=(K(V))~), the batch-7 supplier `thm-qc-ideal-closed-subscheme-correspondence-complete` (closed subscheme from a quasi-coherent ideal), the batch-5 `lem-closed-immersion-affine-quotient-and-base-change` (affine quotient model Z∩V=Spec(A/K(V))), and the published `cor-morphisms-equal-on-dense-open-reduced-source` for the agreement clause (target separated over Spec ℤ, using the unique structure morphism to Spec ℤ from `thm-morphisms-into-affine-scheme-global-sections` and `def-ring-homomorphism`).
- **Repair:** authored the full proof of the deprecated scaffold route: dropped the unauthored `thm-pushforward-qc-under-qcqs-morphism` and the unneeded `thm-affine-quasi-coherent-equivalence` (the quasi-coherence of K is proved directly by the affine localisation computation, replacing the gapped published `thm-scheme-theoretic-image-quasi-compact-morphism` route whose step 2.1 asserts "its localizations give the corresponding kernels on principal opens" without proof); added the principal-cover/localisation/associated-sheaf/closed-subscheme/agreement suppliers actually used; proved minimality of Z among closed factorizations directly from ideal containment.
- **Published concern (not repaired here, not consumed):** `thm-scheme-theoretic-image-quasi-compact-morphism` (published) — its step 2.1 claims that the localisations of the kernel ideal give the corresponding kernels on principal opens without the localisation-exactness argument; the same gap underlies the route through `def-quasi-coherent-ideal-sheaf` (published, deps lack the associated-sheaf existence), `thm-affine-closed-immersions-quotient-rings` (published, tag-01IN route gap) and `thm-quasi-coherent-ideal-closed-subscheme-correspondence` (published, inherits the affine-quotient gap). Evidence: batch-9 Step-1 notes table; item-level re-read of all four proofs on 2026-09-29. Confidence high that these are dependency-route/justification defects; no counterexample to their statements was found.
- **Checks:** precheck PASS (after canonical step renumbering), rendercheck PASS, strict contract PASS (43 fact-source citations, 10 steps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps 5.1/6.1/7.2 consume the batch-7 supplier `thm-qc-ideal-closed-subscheme-correspondence-complete`, which is fully authored but whose own recorded decision is escalate pending owner reconciliation of its batch-5 affine-quotient consumption (that batch-5 item now carries a repaired receipt); a non-owner cannot re-record the supplier. Receipt `research/frontier-36-complete-step3b-review-lem-schematic-closure-and-dense-agreement.json`; cross-batch row added.
- **Next:** level 8, `lem-serre-vanishing-induction-hyperplane`.

## Item checkpoint 21/62 — `lem-serre-vanishing-induction-hyperplane`

- **Claim/convention:** for infinite $k$, a closed immersion $i:X\hookrightarrow\mathbb P^n_k$, $L=i^*\mathcal O(1)$ and a nonzero coherent $\mathcal F$: there is a linear form $\ell$ not vanishing at any associated point of $\mathcal F$, $\cdot\ell:\mathcal F(m-1)\to\mathcal F(m)$ is injective with coherent cokernel $\mathcal G(m)$, $\operatorname{Supp}\mathcal G(m)=\operatorname{Supp}\mathcal F\cap V(\ell)$, and $\dim\operatorname{Supp}\mathcal G(m)=d-1$ if $d=\dim\operatorname{Supp}\mathcal F\ge1$ while $\mathcal G(m)=0$ if $d=0$; $n=0$ included, $X=\varnothing$ excluded by $\mathcal F\neq0$.
- **Scaffold repairs:** dropped the unauthored batch-7 supplier `thm-coherent-sheaves-abelian-noetherian-scheme` (coherence of the cokernel is proved directly on Noetherian affine charts via `thm-kernels-cokernels-qc-modules`, `lem-finite-modules-over-noetherian-rings-are-noetherian`, `thm-affine-quasi-coherent-equivalence`), dropped the unused dep `def-prime-and-maximal-ideals`, and rewrote step 4.1 to apply the zero-divisor/associated-prime fact on $M$ directly (the scaffold detoured through an unnecessary maximal ideal, whose existence was an unproved Zorn use). Canonical renumbering applied; stale in-text step references repaired by hand (in-text references survive `adopt.py` untouched).
- **Checks:** precheck PASS (direct), rendercheck PASS, strict contract PASS (20 steps, 70 citations, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — the statement and steps 2.1/3.3/3.4 consume the batch-9 `def-twist-quasi-coherent-sheaf-projective`, which is authored/checked but recorded escalate pending owner reconciliation of its batch-7 supplier `lem-tensor-qc-modules-quasi-coherent` (accept receipt on disk). Receipt `research/frontier-36-complete-step3b-review-lem-serre-vanishing-induction-hyperplane.json`.
- **Next:** level 8, `thm-cohomological-dimension-projective-n-space`.

## Item checkpoint 22/62 — `thm-cohomological-dimension-projective-n-space`

- **Claim/convention:** for any commutative ring $A$ (zero ring included) and $n\ge0$, every quasi-coherent $\mathcal F$ on $\mathbb P^n_A$ has $H^q=0$ for $q>n$; $n=0$ included; $\mathbb P^n_0=\varnothing$.
- **Repair:** dropped the unused `thm-projective-space-as-proj` scaffold dep and instead worked in the glued chart model of `def-relative-projective-space-standard-charts`: finite intersections of standard charts are distinguished opens $D(x_{i_1}^{(i_0)}\cdots)$ in one chart (affine), quasi-compactness comes from finite type over $\operatorname{Spec}A$ (`lem-projective-space-finite-type-over-base`), and absolute separatedness is *proved*, not assumed, by feeding the published gluing criterion `thm-separatedness-gluing-overlap-criterion` the single base affine open $\operatorname{Spec}\mathbb Z$ and verifying surjectivity of $B_j\otimes_{\mathbb Z}B_k\to(B_j)_{x_k^{(j)}}$ from the reciprocal transition formulas. Then the batch-9 comparison theorem gives $H^q(X,\mathcal F)\cong\check H^q(\mathcal U,\mathcal F)$, whose complex is concentrated in degrees $0,\dots,n$.
- **Checks:** precheck PASS (after canonical adopt), rendercheck PASS, strict contract PASS (7 steps, 18 citations, 8 boundary rows). Fixed: one duplicated citation and the missing dep `def-affine-scheme-spectrum`.
- **Decision:** `escalate`, confidence 1 — step 1.5 consumes the batch-9 `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` (authored/checked, recorded escalate pending owner reconciliation of its batch-7 supplier `thm-affine-quasi-coherent-equivalence`, accept receipt on disk). Receipt `research/frontier-36-complete-step3b-review-thm-cohomological-dimension-projective-n-space.json`.
- **Next:** level 8 (B page), `cex-fixed-affine-cover-nonseparated-intersections`.

## Item checkpoint 23/62 — `cex-fixed-affine-cover-nonseparated-intersections` (B page)

- **Claim/convention:** over any field $k$, glue two copies of $\mathbb A^2_k$ along the identity of the punctured plane $U=D(x)\cup D(y)$; the resulting scheme $X$ has the affine two-open cover $U_1\cup U_2$ whose intersection is $U$, is not separated, and $U$ is not affine because $H^1(U,\mathcal O_U)\neq0$: the Laurent monomial $x^{-1}y^{-1}$ survives the Čech quotient $k[x^{\pm1},y^{\pm1}]/(k[x^{\pm1},y]+k[x,y^{\pm1}])$ for the cover $\{D(x),D(y)\}$.
- **Repair:** authored from scratch in the glued chart model, avoiding `thm-projective-space-as-proj`; the H^1 computation uses the *published* Leray acyclic-cover theorem (affine vanishing on the three affine intersections) instead of the separated-scheme Čech comparison, so the counterexample does not presuppose the separatedness it is meant to illustrate; nonaffineness of $U$ then follows from affine vanishing, and nonseparatedness of $X$ from the published gluing criterion (a separated scheme has affine intersections of affine opens over a common affine base).
- **Checks:** precheck PASS (canonical renumbering; heading kept as `## Counterexample` per sibling B items), rendercheck PASS, strict contract PASS (10 steps, 18 citations, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps 1.3/1.4/1.7 consume the batch-9 `thm-qc-sheaf-affine-higher-cohomology-vanishes` (escalate pending owner reconciliation of batch-7 `thm-affine-quasi-coherent-equivalence`). Receipt `research/frontier-36-complete-step3b-review-cex-fixed-affine-cover-nonseparated-intersections.json`.
- **Next:** level 9, `def-base-change-map-cohomology`.

## Item checkpoint 24/62 — `def-base-change-map-cohomology`

- **Claim/convention:** for proper $f:X\to S$, coherent $\mathcal F$, $s\in S$: the fibre map $\varphi^q_s:(R^qf_*\mathcal F)(s)\to H^q(X_s,\mathcal F_s)$ (fibre $X_s=X\times_S\operatorname{Spec}\kappa(s)$, $\mathcal F_s=g_s'^*\mathcal F$), and for any $g:S'\to S$ the base-change map $g^*R^qf_*\mathcal F\to R^qf'_*g'^*\mathcal F$; neither is asserted an isomorphism.
- **Repair:** scaffold had deps only for the three supplier items; authored the explicit construction of both maps: the fibre map as the colimit over affine neighbourhoods of pullback maps on cohomology (using `lem-higher-direct-image-affine-localization` for $(R^qf_*\mathcal F)(V)=H^q(f^{-1}V,\mathcal F)$ and `def-fibre-of-module-at-point` for the fibre), and the base-change map affine-locally as extension of scalars of the pullback map `H^q(f^{-1}V,\mathcal F)\to H^q(f'^{-1}V',g'^*\mathcal F)`, glued on a basis (`thm-gluing-sheaves`); added `lem-proper-stable-base-change` and `lem-pullback-qc-module-quasi-coherent` so that $f'$ is proper and $g'^*\mathcal F$ quasi-coherent.
- **Checks:** precheck PASS (after canonical renumbering), rendercheck PASS, strict contract PASS (5 steps, 17 citations, 8 boundary rows).
- **Decision:** `accept`, confidence 1 — all suppliers authored with accept/repaired receipts or published; receipt `research/frontier-36-complete-step3b-review-def-base-change-map-cohomology.json`.
- **Next:** level 9, `lem-chow-lemma-proper-noetherian`.

## Item checkpoint 25/62 — `lem-chow-lemma-proper-noetherian`

- **Claim/convention:** for Noetherian $S$ and $f:X\to S$ separated of finite type: there are $N$, an immersion $\iota:X'\to\mathbb P^N_S$ and a proper surjective $\pi:X'\to X$ isomorphic over a dense open $U\subseteq X$; the construction passes through the schematic closure $X^*$ of $U$ in $X$; if $f$ is proper then $\iota$ is a closed immersion and $X'$ is projective over $S$.
- **Repair:** authored the full Stacks 30.18.1 proof. Key route: affine cover $U_i$ each containing all generic points (so $U=\bigcap U_i$ is dense), replacement by $X^*$ via `lem-schematic-closure-and-dense-agreement` (which also supplies the equality-on-dense-open clause used to glue $\pi$), immersions $U_i\to\mathbb P^{n_i}_S$ from finite generation, scheme-theoretic images $Z_i$ and $Z$ of $U_i$ and of the diagonal $U\to\prod\mathbb P^{n_i}_S$, $V_i=p_i^{-1}(U_i)\subseteq Z$, $X'=\bigcup V_i$ with π glued from the proper $p_i|_{V_i}$, properness local on the target, surjectivity from closed image containing the $U_i$, and $\pi^{-1}(U)=U$ from the proper identity on the schematically dense $U$. Properness of products of projective spaces is derived by induction from base change + composition (no product-of-proper lemma needed).
- **Checks:** precheck PASS (canonical renumbering), rendercheck PASS, strict contract PASS (16 steps, 31 citations, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — flagged supplier 1: `thm-scheme-theoretic-image-quasi-compact-morphism` (published; its step 2.1 gap is the published concern already on file) consumed in steps 1.6/1.7; flagged supplier 2: `thm-segre-line-bundle-external-tensor` (sibling pair, no step-3 receipt) consumed in step 1.9. Receipt `research/frontier-36-complete-step3b-review-lem-chow-lemma-proper-noetherian.json`.
- **Next:** level 9, `lem-closed-immersion-cohomology-pushforward`.

## Item checkpoint 26/62 — `lem-closed-immersion-cohomology-pushforward`

- **Claim/convention:** for a closed immersion $i:Z\to X$ and quasi-coherent $\mathcal F$ on $Z$: $H^q(Z,\mathcal F)\cong H^q(X,i_*\mathcal F)$ for all $q\ge0$ via the affine edge map; if $X$ is locally Noetherian and $\mathcal F$ coherent then $i_*\mathcal F$ is coherent. Empty $Z$, empty $X$, zero module and affine $X$ included.
- **Repair:** the scaffold dependency `thm-coherent-sheaves-abelian-noetherian-scheme` (batch-7, unauthored) is **not consumed** — the coherence of $i_*\mathcal F$ is proved directly on Noetherian affine charts: $i^{-1}(U)=\operatorname{Spec}(A/I)$, $M$ finitely generated over the quotient $B=A/I$, hence over $A$. Also corrected the misquoted supplier hypothesis in [F2]: `lem-affine-morphism-cohomology-pushforward` requires $\mathcal G$ quasi-coherent (the arbitrary-module form is false: on $\mathbb A^1$, $j_!\mathcal O_U$ has $H^1\ne0$), and repaired a bracket tag and a mid-proof ∎.
- **Checks:** precheck PASS (after canonical renumbering), rendercheck PASS, strict contract PASS (18 citations, 6 steps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps 1.1/1.2 consume the batch-9 supplier `lem-affine-morphism-cohomology-pushforward`, itself escalate pending owner reconciliation of its chain (`thm-affine-morphism-higher-direct-images-qc-vanish` → `thm-qc-sheaf-affine-higher-cohomology-vanishes` → batch-7 `thm-affine-quasi-coherent-equivalence`, the last now with an accept receipt on disk); steps 1.3-1.5 additionally consume `thm-affine-quasi-coherent-equivalence` directly. Receipt `research/frontier-36-complete-step3b-review-lem-closed-immersion-cohomology-pushforward.json`.
- **Next:** level 9, `lem-eventual-global-generation-coherent-twists`.

## Item checkpoint 27/62 — `lem-eventual-global-generation-coherent-twists`

- **Claim/convention:** for $A$ Noetherian, $X$ projective over $A$ (H-projective convention), $L$ ample invertible and $F$ coherent: $F\otimes L^{\otimes m}$ is globally generated for all $m\ge m_0$, a bound depending on $F$; empty $X$, $F=0$, $n=0$ and $\operatorname{Spec}A=\varnothing$ included; no effectivity.
- **Repair:** dropped the scaffold's unused `thm-coherent-sheaves-abelian-noetherian-scheme` and `def-twist-quasi-coherent-sheaf-projective` (argument uses the tensor-power form of the batch-8 criterion, not the $\mathcal O(d)$ twist). Supplied the missing steps: projective $\Rightarrow$ proper (`thm-projective-morphism-proper`, repaired receipt), affine-local finite type to make charts finitely generated $A$-algebras, `cor-finite-type-algebra-over-noetherian-ring-is-noetherian` for Noetherian charts, `cor-affine-scheme-quasi-compact` plus quasi-compactness of finite type morphisms for quasi-compactness, then the forward direction of `thm-serre-criterion-ampleness`.
- **Checks:** precheck PASS (canonical renumbering; two stale prose step references repaired by hand), rendercheck PASS, strict contract PASS (15 citations, 6 steps, 8 boundary rows).
- **Decision:** `accept`, confidence 1 — all suppliers published or accept/repaired; receipt `research/frontier-36-complete-step3b-review-lem-eventual-global-generation-coherent-twists.json`. Dropped deps noted above.
- **Next:** level 9, `thm-cohomology-projective-space-twisting-sheaves`.

## Item checkpoint 28/62 — `thm-cohomology-projective-space-twisting-sheaves`

- **Claim/convention:** for any commutative ring $A$ (zero ring allowed), $n\ge0$, $d\in\mathbb Z$: $H^q(\mathbb P^n_A,\mathcal O(d))=0$ unless $q=0$ or $q=n$; for $n>0$, $H^0\cong A[x_0,\dots,x_n]_d$ for $d\ge0$ and $0$ for $d<0$, and $H^n$ is free on the all-negative Laurent monomials of total degree $d$, nonzero iff $d\le-n-1$ and $A\ne0$; for $n=0$, $H^0\cong A$ for every $d$ and higher groups vanish. Scaffold claim preserved verbatim.
- **Repair:** supplied the missing Lean-free proof: identification $\mathbb P^n_A=\operatorname{Proj}A[x_0,\dots,x_n]$ (`thm-projective-space-as-proj`, accept), standard cover acyclic via affine charts and affine vanishing, Leray comparison (published), direct-sum decomposition of the monomial Čech complex (`lem-projective-space-cech-monomial-complex`, repaired), and an explicit kernel/image-commute-with-direct-sums step (no dedicated library lemma exists, so it is derived from the definitions of direct sums and kernels, and cited as such).
- **Checks:** precheck PASS (canonical renumbering 1.1-1.6, 2.1-2.3, 3.1, 4.1; four stale bare step references repaired by hand), rendercheck PASS, strict contract PASS (22 deps, 19 citations, 11 steps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — step 1.4 and the AC accounting consume `thm-qc-sheaf-affine-higher-cohomology-vanishes` (authored/checked, recorded escalate pending owner reconciliation of batch-7 `thm-affine-quasi-coherent-equivalence`, which now has an accept receipt on disk). All other suppliers accept/repaired/published. Receipt `research/frontier-36-complete-step3b-review-thm-cohomology-projective-space-twisting-sheaves.json`.
- **Next:** level 10, `cor-h0-projective-space-o-d-homogeneous-polynomials`.

## Item checkpoints 29-31/62 — the three level-10 corollaries of the twist computation

- `cor-h0-projective-space-o-d-homogeneous-polynomials` (29): $H^0(\mathbb P^n_A,\mathcal O(d))\cong A[x_0,\dots,x_n]_d$ for $n>0,d\ge0$; $0$ for $n>0,d<0$; $\cong A$ for $n=0$ and every $d$; $A=0$ allowed. Authored from the theorem's degree-zero clause (no repair beyond splitting one display line for rendercheck). Checks: precheck PASS, rendercheck PASS, strict contract PASS (1 fact source, 2 steps, 8 boundary rows). Decision `escalate` — inherits the theorem's unresolved `thm-qc-sheaf-affine-higher-cohomology-vanishes` obligation.
- `cor-intermediate-cohomology-o-d-projective-space-vanishes` (30): $H^q(\mathbb P^n_A,\mathcal O(d))=0$ for $0<q<n$, vacuously for $n\le1$. Authored directly. Checks: precheck PASS, rendercheck PASS, strict contract PASS (1 fact source, 2 steps, 8 boundary rows). Decision `escalate` — same inherited obligation.
- `cor-top-cohomology-projective-space-o-d` (31): for $n\ge1$, $H^n$ is free on the all-negative Laurent monomials of total degree $d$; zero for $d>-n-1$; rank $\binom{-d-1}{n}$ for $d\le-n-1$ and $A\ne0$; the zero module for $A=0$; for $n=0$, top group $H^0\cong A$. Authored with the bijection to compositions of $-d$ into $n+1$ positive parts using the published `cor-compositions-with-k-parts-are-counted-by-binomial-coefficients`; the rank clause is qualified by $A\ne0$ (the scaffold's rank claim fails to describe $A=0$, where the free module on a nonempty set is zero — recorded refinement, claim preserved in the nonzero case). Checks: precheck PASS, rendercheck PASS, strict contract PASS (3 fact sources, 4 steps, 8 boundary rows). Decision `escalate` — same inherited obligation.
- Receipts `research/frontier-36-complete-step3b-review-<id>.json` for each.
- **Next:** level 10, `lem-noetherian-approximation-proper-fp-flat-sheaf`.

## Item checkpoint 32/62 — `lem-noetherian-approximation-proper-fp-flat-sheaf`

- **Claim/convention:** for any ring $A$, $f:X\to\operatorname{Spec}A$ proper of finite presentation, $\mathcal F$ finitely presented and flat over $A$: there are a finitely generated $\mathbb Z$-subalgebra $A_i\subseteq A$, a proper finite-presentation $f_i:X_i\to\operatorname{Spec}A_i$ and a finitely presented $A_i$-flat $\mathcal F_i$ whose pullbacks recover $f,\mathcal F$. Empty source and zero module included.
- **Repair/obligations:** authored the elementary filtered-union construction ($A=\bigcup A_T$, each $A_T$ Noetherian) and the conditional descent, but the four limit-of-schemes inputs are **not authored library items**: (D1) Stacks Limits 32.10.1-2 (descent of fp morphisms), step 1.3; (D2) Stacks 32.10.3/32.10.6 (descent of fp modules), step 1.4; (D3) Stacks 32.10.4 with Algebra 10.168.1 (tag 02JO; descent of flatness), step 1.5; (D4) Stacks 32.8.5/32.8.6/32.13.1 (descent of separatedness and properness), step 1.6. These are recorded verbatim in fact F4 of the item and used in steps 1.3-1.6 and 2.1; no limit-of-schemes/Noetherian-approximation items exist in the library. Scaffold's long dep list was replaced by the 11 items actually cited.
- **Checks:** precheck PASS (canonical renumbering 1.2-1.6,2.1,3.1 — the first step is emitted without a 1.1 label by the checker; internal references verified), rendercheck PASS, strict contract PASS (11 deps, 3 citations + the unquoted obligation fact, 7 steps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — exact obligation flags as above; owner must author the limit machinery or accept explicitly. Receipt `research/frontier-36-complete-step3b-review-lem-noetherian-approximation-proper-fp-flat-sheaf.json`.
- **Next:** level 10, `lem-projective-coherent-cohomology-finite-and-vanishing`.

## Item checkpoint 33/62 — `lem-projective-coherent-cohomology-finite-and-vanishing`

- **Claim/convention:** for Noetherian $A$ and coherent $\mathcal G$ on $\mathbb P^n_A$: each $H^q$ is a finite $A$-module, and $H^q(\mathcal G(m))=0$ for $q>0$ and all large $m$; same for a closed subscheme with its $\mathcal O(1)$. $A=0$, $\mathcal G=0$, $n=0$ included.
- **Repair:** authored the Stacks 30.16 / Hartshorne III.5.2 argument: eventual global generation of a high twist + closed support of the finite-type cokernel ⇒ finite presentation $0\to\mathcal K\to\mathcal O(-a)^{\oplus N}\to\mathcal G\to0$; two descending inductions on $q$ (vanishing of high twists, base $q>n$ by the dimension bound; finiteness via finite free $H^q(\mathcal O(-a))$ and Noetherian submodules/quotients). Closed-subscheme clause transported via `lem-closed-immersion-cohomology-pushforward` and the projection identity $i_*(\mathcal G(m))\cong(i_*\mathcal G)(m)$, checked on affine opens inside standard charts (no projection-formula item exists).
- **Checks:** precheck PASS (canonical renumbering 1.1-1.3, 2.1-2.2, 3.1, 4.1; three stale bare references repaired), rendercheck PASS, strict contract PASS (22 deps, 12 citations, 7 steps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps 1.2, 2.1, 2.2, 3.1 consume the escalated batch-9 suppliers `thm-cohomology-projective-space-twisting-sheaves`, `thm-cohomological-dimension-projective-n-space`, `lem-closed-immersion-cohomology-pushforward`. Receipt `research/frontier-36-complete-step3b-review-lem-projective-coherent-cohomology-finite-and-vanishing.json`.
- **Next:** level 10, `lem-projective-hypersurface-cohomology-sequence`.

## Item checkpoint 34/62 — `lem-projective-hypersurface-cohomology-sequence`

- **Claim/convention:** for a commutative ring $A$, $n\ge0$, homogeneous $f$ of degree $d>0$ with each $f/x_i^d$ a nonzerodivisor of $B_{(x_i)}$ (automatic over a field with $f\ne0$): $0\to\mathcal O_{\mathbb P^n}(-d)\xrightarrow{\cdot f}\mathcal O_{\mathbb P^n}\xrightarrow{i^\sharp}i_*\mathcal O_X\to0$ is short exact and its long exact sequence gives $H^q(X,\mathcal O_X)\cong H^{q+1}(\mathbb P^n_A,\mathcal O(-d))$ for $q\ge1$, so $H^q=0$ for $q\ge1$, $q\ne n-1$, and $H^{n-1}\cong H^n(\mathbb P^n_A,\mathcal O(-d))$ is free on the negative exponent tuples summing to $-d$ (dimension $\binom{d-1}{n}$ over a field, zero for $d\le n$); degree zero reads $0\to H^0(\mathcal O(-d))\to A\to H^0(X,\mathcal O_X)\to H^1(\mathcal O(-d))\to0$.
- **Authoring:** the SES is proved chartwise on the standard cover (exactness of localisation + of $\widetilde{(-)}$ on affines via the stalkwise criterion + locality of exactness); $\ker i^\sharp=\operatorname{im}\phi$ because on each chart $i^\sharp$ is the quotient $B_{(x_i)}\to B_{(x_i)}/(f_i)$. Scaffold's "more generally over a ring when f is a nonzerodivisor on O" made precise as the chartwise nonzerodivisor hypothesis (equivalent to injectivity of $\cdot f$).
- **Checks:** precheck PASS (canonical adopt; cross-references verified by hand), rendercheck PASS, strict contract PASS (10 derivations, 26 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps 5.1-8.1 consume `thm-long-exact-sequence-sheaf-cohomology` (published), `lem-closed-immersion-cohomology-pushforward` and `thm-cohomology-projective-space-twisting-sheaves` (batch-9, escalate; obligation traces to batch-7 `thm-affine-quasi-coherent-equivalence`, accept receipt on disk). Receipt `research/frontier-36-complete-step3b-review-lem-projective-hypersurface-cohomology-sequence.json`.
- **Next:** level 10 (B page), `ex-projective-zero-space-cohomology`.

## Item checkpoint 35/62 — `ex-projective-zero-space-cohomology` (B page)

- **Claim/convention:** for every commutative ring $A$: $\mathbb P^0_A\cong\operatorname{Spec}A$ (single chart $D_+(x_0)$, no gluing), $\mathcal O_{\mathbb P^0_A}(d)\cong\mathcal O_{\operatorname{Spec}A}$ for every $d\in\mathbb Z$ (chart sections $A\cdot x_0^d$, free rank one), hence $H^0\cong A$ and $H^q=0$ for $q>0$; for a general base scheme $S$ only $\mathbb P^0_S\cong S$ is asserted, no higher vanishing.
- **Authoring:** the trivialisation is proved from the degree-zero localisation of the shifted module $A[x_0](d)$; cohomology via affine vanishing with the twist theorem's $n=0$ clause as an independent corroboration.
- **Checks:** precheck PASS (canonical adopt 1.1/2.1/2.2/3.1/4.1, refs verified), rendercheck PASS, strict contract PASS (5 derivations, 15 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — step 3.1 consumes `thm-qc-sheaf-affine-higher-cohomology-vanishes` and `thm-cohomology-projective-space-twisting-sheaves` (batch-9, escalate; obligation traces to batch-7 `thm-affine-quasi-coherent-equivalence`). Receipt `research/frontier-36-complete-step3b-review-ex-projective-zero-space-cohomology.json`.
- **Next:** level 11, `lem-graded-section-module-finite-projective`.

## Item checkpoint 36/62 — `lem-graded-section-module-finite-projective`

- **Claim/convention:** for $A$ Noetherian and $\mathcal F$ coherent on $\mathbb P^n_A$, the tail $\bigoplus_{m\ge m_0}\Gamma(\mathbb P^n_A,\mathcal F(m))$ is a finitely generated graded $S=A[x_0,\dots,x_n]$-module; likewise for the extension by zero $i_*\mathcal G$ of a coherent module on a closed subscheme (so the graded module $\bigoplus H^0(Y,\mathcal G\otimes i^*\mathcal O(m))$ has f.g. tail).
- **Authoring:** ampleness of $\mathcal O(1)$ via the identity (H-very ample) + `lem-very-ample-implies-ample`; eventual global generation; finite surjection from a finite sum of twists (openness of the generating locus via the finite-type cokernel support); coherent kernel; Serre vanishing; tail of $E$ = shifted tails of $S$ generated by finitely many monomials; quotient over Noetherian $S$. The closed-subscheme clause uses the chartwise projection identity $i_*(\mathcal G\otimes i^*\mathcal O(m))\cong(i_*\mathcal G)(m)$. Scaffold's kernel-vanishing route preserved.
- **Checks:** precheck PASS (canonical adopt 1.1-9.1, refs verified), rendercheck PASS, strict contract PASS (9 derivations, 33 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — consumes `lem-projective-coherent-cohomology-finite-and-vanishing` and `lem-closed-immersion-cohomology-pushforward` (batch-9 escalate; batch-7 `thm-affine-quasi-coherent-equivalence` obligation), `lem-eventual-global-generation-coherent-twists` (accept), `lem-very-ample-implies-ample` (repaired). Receipt `research/frontier-36-complete-step3b-review-lem-graded-section-module-finite-projective.json`.
- **Next:** level 11, `thm-serre-vanishing`.

## Item checkpoint 37/62 — `thm-serre-vanishing`

- **Claim/convention:** for $A$ Noetherian, $X$ projective over $A$ (H-projective convention), $L$ ample invertible and $\mathcal F$ coherent: $H^q(X,\mathcal F\otimes L^{\otimes m})=0$ for all $q>0$ and all $m\ge m_0$, one bound for all $q$; no effectivity; empty $X$, $A=0$, $\mathcal F=0$, $d=1$ included.
- **Authoring:** properness + ample powers give $L^{\otimes d}\cong i^*\mathcal O(1)$ for a closed immersion $i$; push forward the $d$ residue twists, apply the projective-space vanishing lemma, translate back via the chartwise projection identity and pullback monoidality $i^*\mathcal O(n)\cong(i^*\mathcal O(1))^{\otimes n}=L^{\otimes dn}$ (derived at stalks from `lem-stalk-inverse-image-sheaf` + `lem-stalk-tensor-product`, since no library lemma exists); $m_0=d\cdot\max_rn_r+(d-1)$.
- **Checks:** precheck PASS (canonical adopt 1.1-5.1, refs verified), rendercheck PASS, strict contract PASS (7 derivations, 22 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — consumes `lem-projective-coherent-cohomology-finite-and-vanishing`, `lem-closed-immersion-cohomology-pushforward` (batch-9 escalate; batch-7 `thm-affine-quasi-coherent-equivalence` obligation), `thm-ample-powers-very-ample-proper-base` and `thm-projective-morphism-proper` (repaired). Receipt `research/frontier-36-complete-step3b-review-thm-serre-vanishing.json`.
- **Next:** level 11 (B page), `cex-proper-finiteness-fails-noncoherent`.

## Item checkpoint 38/62 — `cex-proper-finiteness-fails-noncoherent` (B page)

- **Claim/convention:** for a field $k$, $X=\mathbb P^1_k$ proper over $k$, $\mathcal F=\bigoplus_{r\ge1}\mathcal O_X$ (direct sum in $\mathrm{Mod}(\mathcal O_X)$): $\mathcal F$ is quasi-coherent, not coherent (not even finite type), and $H^0(X,\mathcal F)\cong\bigoplus_{r\ge1}k$ is not finitely generated over $k$, so "proper over a field $\Rightarrow H^0$ finite-dimensional" fails without coherence.
- **Authoring:** explicit coproduct model by locally finite families with verified universal property; quasi-compact charts force finite support, giving $\mathcal F(D(f))=\bigoplus_r B_f$ and hence $\mathcal F|_{U_0}\cong\widetilde N$, $N=\bigoplus_{r\ge1}B$ (uniqueness of the distinguished-open extension); stalk $\mathcal F_x\cong\bigoplus_{r\ge1}B_{\mathfrak p}$ via an explicit germ map; infinite direct sums of nonzero modules are not finitely generated, so not finite type, so not coherent; $H^0\cong\bigoplus_r k$ from $\mathcal O_X(X)=k$. Properness assembled from `lem-projective-space-diagonal-closed` (separated) + `lem-projective-space-finite-type-over-base` (finite type) + `lem-relative-projective-space-universally-closed` (universally closed) + `def-proper-morphism`, deliberately **avoiding** batch-5 `thm-projective-space-proper-over-base`, whose route the batch-9 read-only closure already flagged (published affirmative-quotient gap); that citation was removed in review.
- **Scaffold repair:** scaffold's Čech-complex route (and deps `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`, `thm-coherent-sheaves-abelian-noetherian-scheme`) replaced by the direct locally-finite-family argument; `cor-h0-projective-space-o-d-homogeneous-polynomials` retained. Canonical adopt reordered steps (1.1, 1.2 nonzero summands, 2.1 coproduct, 2.2 finite support, 3.1 QC, 3.2 stalk, 3.3 H0 sections, 4.1 infinite sums not f.g., 5.1 not finite type/coherent, 5.2 $H^0\cong\bigoplus k$, 6.1 boundaries); cross-references verified after adopt.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (11 steps, 24 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps 3.3/5.2 consume the escalated batch-9 `cor-h0-projective-space-o-d-homogeneous-polynomials` (obligation traces to `thm-cohomology-projective-space-twisting-sheaves` → `thm-qc-sheaf-affine-higher-cohomology-vanishes` → batch-7 `thm-affine-quasi-coherent-equivalence`), and step 5.2 consumes batch-9 `lem-relative-projective-space-universally-closed` (same obligation). Receipt `research/frontier-36-complete-step3b-review-cex-proper-finiteness-fails-noncoherent.json`.
- **Next:** level 11 (B page), `ex-cech-cocycle-projective-line-o-minus-two`.

## Item checkpoint 39/62 — `ex-cech-cocycle-projective-line-o-minus-two` (B page)

- **Claim:** on $\mathbb P^1_k$ with $U_0,U_1$ ordered, the class of $1/(x_0x_1)=x_0^{-1}x_1^{-1}\in\Gamma(U_0\cap U_1,\mathcal O(-2))$ is a Čech 1-cocycle spanning $H^1(\mathbb P^1_k,\mathcal O(-2))\cong k$.
- **Authoring:** two-member ordered Čech complex has $C^p=0$ for $p\ge2$, so every 1-cochain is a cocycle; in the monomial decomposition with $n=1,d=-2$ no summand has $N(e)=\varnothing$, the unique all-negative $e=(-1,-1)$ contributes $H^1=k$ on the overlap basis class, and every other summand is contractible; the Čech comparison iso (cover affine, $X$ separated via `lem-projective-space-diagonal-closed` — the clean published route, not the flagged batch-5 projective-properness path) identifies this with $H^1$; `cor-top-cohomology-projective-space-o-d` gives free rank one. Canonical adopt renumbered to 1.1, 2.1, 3.1, 4.1, 5.1 (refs verified), heading restored to `## Verification`.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (5 steps, 14 deps, 8 boundary rows; two boundary-evidence step references corrected to the adopted numbering).
- **Decision:** `escalate`, confidence 1 — consumes batch-9 escalated `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`, `def-twist-quasi-coherent-sheaf-projective`, `cor-top-cohomology-projective-space-o-d` (batch-7 `thm-affine-quasi-coherent-equivalence` obligation). Receipt `research/frontier-36-complete-step3b-review-ex-cech-cocycle-projective-line-o-minus-two.json`.
- **Next:** level 11 (B page), `ex-hypersurface-structure-sheaf-cohomology`.

## Item checkpoint 40/62 — `ex-hypersurface-structure-sheaf-cohomology` (B page)

- **Claim:** for any nonzero homogeneous cubic $f\in k[x_0,x_1,x_2]$ and $C=V_+(f)\subseteq\mathbb P^2_k$: $H^0(C,\mathcal O_C)\cong k$, $H^1(C,\mathcal O_C)\cong k$, $H^{\ge2}=0$; smoothness/irreducibility/reducedness not needed.
- **Authoring:** specialisation of `lem-projective-hypersurface-cohomology-sequence` to $n=2,d=3$ (chartwise nonzerodivisor automatic for $f\ne0$ over a field) + twist groups on $\mathbb P^2$: degree-zero piece gives $H^0\cong k$; connecting isomorphism gives $H^1\cong H^2(\mathbb P^2,\mathcal O(-3))=k$ on $x_0^{-1}x_1^{-1}x_2^{-1}$; $q\ge2$ dies by $q+1>2$. Canonical adopt renumbered to 1.1, 2.1, 3.1-3.3, 4.1; heading restored to `## Verification`; a mistyped Vakil URL fixed.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (6 steps, 4 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — consumes batch-9 escalated `lem-projective-hypersurface-cohomology-sequence` and `thm-cohomology-projective-space-twisting-sheaves` (batch-7 `thm-affine-quasi-coherent-equivalence` obligation). Receipt `research/frontier-36-complete-step3b-review-ex-hypersurface-structure-sheaf-cohomology.json`.
- **Next:** level 12, `thm-proper-pushforward-coherent`.

## Item checkpoint 41/62 — `thm-proper-pushforward-coherent`

- **Claim/convention:** for $f:X\to S$ proper with $S$ locally Noetherian and $\mathcal F$ coherent on $X$: $R^qf_*\mathcal F$ is coherent on $S$ for every $q\ge0$; includes $X=\varnothing$, $S=\varnothing$, $\mathcal F=0$, $q=0$; no Noetherian hypothesis on $X$, no projectivity or flatness, no finite presentation of $\mathcal F$ beyond coherence.
- **Authoring:** reduce to an affine Noetherian base $V=\operatorname{Spec}A\subseteq S$ via `lem-higher-direct-image-affine-localization` (coherence local); affine statement ⇔ finite generation of all $H^q(X,\mathcal F)$ over $A$; two-out-of-three for $\mathcal P$ from the long exact sequence + Noetherian sub/quotient; generators via Chow's lemma (proper case: closed immersion $\iota$), the graph map $\phi=(\iota,\pi)$ closed immersion making $\mathcal L=\iota^*\mathcal O(1)$ ample, Serre vanishing on $Z'$ and on the affine pieces of a finite affine cover of $Z$, $\mathcal G=\pi_*\mathcal L^{\otimes n}$ with entrywise-equal Čech complexes giving $H^q(Z,\mathcal G)\cong H^q(Z',\mathcal L^{\otimes n})$ (`thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` + `thm-leray-acyclic-cover-theorem`), $\mathcal F_Z=j_*\mathcal G$ coherent with one-dimensional fibre at $\xi$, then dévissage (`lem-coherent-devissage-one-generic-generator`); general $S$ by locality.
- **Scaffold repair:** replaced the scaffold's Grothendieck spectral sequence / "Leray derived-composition" route (that theorem is not among the item's deps) with the Čech–Leray comparison; added the graph-map closed-immersion argument (absent from the scaffold) to make ampleness of $\mathcal L$ rigorous; frontmatter repaired (added `def-acyclic-cover-for-sheaf`; wired `def-higher-direct-image-sheaf` and `def-quasi-coherent-module-scheme` into F1).
- **Checks:** precheck PASS (canonical adopt 1.1–1.22, 2.1; stale cross-references repaired by hand), rendercheck PASS, strict contract PASS (23 derivations, 52 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps consume batch-9 escalated suppliers `lem-chow-lemma-proper-noetherian`, `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`, `lem-coherent-devissage-one-generic-generator`, `thm-serre-vanishing`, `lem-projective-coherent-cohomology-finite-and-vanishing`, `lem-closed-immersion-cohomology-pushforward`; the Chow use inherits the published `thm-scheme-theoretic-image-quasi-compact-morphism` flag and the missing `thm-segre-line-bundle-external-tensor` receipt obligation; the dévissage route inherits the batch-7 `thm-affine-quasi-coherent-equivalence` obligation. Receipt `research/frontier-36-complete-step3b-review-thm-proper-pushforward-coherent.json`.
- **Next:** level 13, `lem-proper-flat-cohomology-perfect-complex`.

## Item checkpoint 42/62 — `lem-proper-flat-cohomology-perfect-complex`

- **Claim/convention:** for $A$ Noetherian, $f:X\to\operatorname{Spec}A$ proper and $\mathcal F$ coherent flat over $A$: there is a bounded complex $K^\bullet$ of finite projective $A$-modules, concentrated in degrees $0,\dots,r$, finite free in positive degrees, with canonical isomorphisms $H^q(K^\bullet\otimes_AA')\cong H^q(X_{A'},\mathcal F_{A'})$ natural in $A'$ and compatible with composition; the complex becomes finite free on a Zariski open cover of $\operatorname{Spec}A$. Empty $X$, $\mathcal F=0$, $r=0$, $A=0$, $A'=0$, $q<0$, $q>r$ included.
- **Authoring:** finite affine cover with affine intersections via separatedness ([F2]); bounded Čech complex with flat terms via the locally authored `lem-flat-sheaf-sections-flat-over-base` and finite direct sums of flat modules (1.3-1.4); Čech comparison identifies $H^q(K^\bullet)\cong H^q(X,\mathcal F)$ (1.5) with finiteness from `thm-proper-pushforward-coherent` (1.6); base-changed cover $U'_I=\operatorname{Spec}(B_I\otimes_AA')$ and canonical section isomorphisms $\Phi_I$ assemble to $K^\bullet\otimes_AA'\cong C^\bullet(\mathcal U',\mathcal F_{A'})$ with natural comparison 1.10; descending syzygy replacement $F^\bullet$ of finite free modules (Stacks 064U, 1.11-1.14); tensor compatibility with every module by the bounded-flat tensor lemma and a projective resolution of the coefficient module (1.15-1.16); truncation $E^\bullet=\tau^{\ge0}F^\bullet$ with $E^0$ shown flat by a $\operatorname{Tor}_1$ computation (Stacks 0653) and hence finite projective (1.17-1.19); local freeness from finite flat over Noetherian local rings and the open free locus (1.20).
- **Scaffold repair:** canonical adopt 1.1-1.20 phase 1, 2.1 phase 2 (layered renumbering required by precheck's canonical stratification); cross-references and boundary rows hand-verified against the adopted numbering. Clauses split out of the scaffold were authored in place: the choice accounting (AC/DC), the local-freeness clause, and the naturality/composition compatibility.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (21 derivations, 61 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps 1.5, 1.6, 1.10 and 2.1 consume batch-9 escalated `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` and `thm-proper-pushforward-coherent`, whose obligation traces to batch-7 `thm-affine-quasi-coherent-equivalence`. Receipt `research/frontier-36-complete-step3b-review-lem-proper-flat-cohomology-perfect-complex.json`.
- **Scope:** the earlier pair scope decision went stale when the local supplier `lem-flat-sheaf-sections-flat-over-base` was registered; a refreshed `sufficient` scope decision was recorded for the preserved pair (review role, no owner receipt exists).
- **Next:** level 13, `rem-proper-cohomology-finiteness-needs-coherence`.

## Item checkpoint 43/62 — `rem-proper-cohomology-finiteness-needs-coherence`

- **Claim/convention:** over every field $k$, $\mathbb P^1_k$ is proper over $\operatorname{Spec}k$ and the direct sum $\mathcal F=\bigoplus_{m\ge1}\mathcal O_X$ is quasi-coherent but not coherent (not even finite type); $H^0(X,\mathcal F)\cong\bigoplus_{m\ge1}k$ is infinite-dimensional, so proper-pushforward finiteness genuinely needs coherence. Same witness as the B-page counterexample, kept on the A page as a warning with a pointer to the companion examples page (no A→B item edge).
- **Authoring:** free-prose remark (kind `remark`, `provenance.proof: not-applicable`), properness via `lem-projective-space-diagonal-closed` + `lem-projective-space-finite-type-over-base` + `lem-relative-projective-space-universally-closed` + `def-proper-morphism` (avoiding the flagged batch-5 projective-properness route); quasi-coherence from the chart-wise associated-sheaf description with localisation commuting with direct sums; the two-chart gluing computation of $H^0$ given inline; finiteness failure from the infinite linearly independent family of slot units.
- **Scaffold repair:** none needed beyond grounding the deps list: added `def-direct-sum-of-a-family-of-modules`, `def-module-on-ringed-space`, `def-quasi-coherent-module-scheme`, `def-coherent-module-scheme`, `def-finite-type-finite-presentation-module-sheaf`, `thm-associated-module-sheaf-exists`, `thm-localisation-of-modules-commutes-with-quotients-and-sums`; the two scaffold deps kept.
- **Checks:** rendercheck PASS, strict contract PASS (empty citations/derivations, 8 boundary rows; precheck skips remarks, 0 checked/0 failing), content-policy clean for this item, depcheck clean for this item.
- **Decision:** `escalate`, confidence 1 — consumes batch-9 escalated `thm-proper-pushforward-coherent`, `cor-h0-projective-space-o-d-homogeneous-polynomials` and `lem-relative-projective-space-universally-closed` (batch-7 `thm-affine-quasi-coherent-equivalence` obligation). Receipt `research/frontier-36-complete-step3b-review-rem-proper-cohomology-finiteness-needs-coherence.json`.
- **Incidental fixes this level:** content-policy flagged two of my earlier items, both repaired: `thm-proper-pushforward-coherent` step 1.12 no longer writes $\iota(Z')$ (notation-iota-applied; rewritten as "the image of $\iota$"), and `ex-projective-zero-space-cohomology` gained the required `generation: {role: example}` block for its ai-generated statement. Both re-checked (precheck/rendercheck/strict contract PASS). Their existing escalate receipts are now hash-stale and cannot be re-recorded by a reviewer (the tool blocks re-recording an escalated item); the escalation classes are unchanged and the owner must re-audit the current text at Step 4 — recorded here for the owner.
- **Next:** level 13, `thm-serre-finiteness-projective-cohomology`.

## Item checkpoint 44/62 — `thm-serre-finiteness-projective-cohomology`

- **Claim/convention:** for $A$ Noetherian, $f:X\to\operatorname{Spec}A$ proper and $\mathcal F$ coherent: (1) every $H^q(X,\mathcal F)$ is a finitely generated $A$-module; (2) if $X$ has a finite affine open cover with $n$ members ($n=0$ iff $X=\varnothing$), then $H^q(X,\mathcal F)=0$ for every $q\ge n$, so the vanishing bound depends only on $X$ and not on $\mathcal F$. Title retains "projective" from the design; the scope is proper, with no projectivity, flatness or Krull-dimension hypothesis. Empty $X$, $\mathcal F=0$, $A=0$, $q=0$, $n=0,1$ included.
- **Authoring:** finiteness from `thm-proper-pushforward-coherent` (coherence of $R^qf_*\mathcal F$ over the Noetherian affine base) + `lem-higher-direct-image-affine-localization` ($R^qf_*\mathcal F\cong\widetilde{H^q(X,\mathcal F)}$) + the finite-type-versus-finite-generation criterion for associated sheaves ([F5]); vanishing from the bounded ordered Čech complex of a finite affine cover with affine intersections via `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`; the scaffold's warning that a Noetherian base may have infinite Krull dimension is honoured — the cover-length argument is used, not a dimension bound.
- **Checks:** precheck PASS (canonical numbering already 1.1-1.5, 2.1), rendercheck PASS, strict contract PASS (6 derivations, 30 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — steps 1.3-1.5, 2.1 consume batch-9 escalated `thm-proper-pushforward-coherent` and `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` (batch-7 `thm-affine-quasi-coherent-equivalence` obligation); the criterion of [F5] consumes `thm-affine-quasi-coherent-equivalence` directly. Receipt `research/frontier-36-complete-step3b-review-thm-serre-finiteness-projective-cohomology.json`.
- **Next:** level 14, `cor-projective-cohomology-finite-dimensional-field`.

## Item checkpoint 45/62 — `cor-projective-cohomology-finite-dimensional-field`

- **Claim/convention:** for $k$ a field, $X$ proper over $k$ and $\mathcal F$ coherent: every $H^q(X,\mathcal F)$ is a finite-dimensional $k$-vector space and only finitely many are nonzero; the bound is the cover length — $H^q=0$ for $q\ge n$ if $X$ admits a finite affine open cover with $n$ members ($n=0$ iff $X=\varnothing$). Empty source, zero sheaf and $q=0$ included.
- **Authoring:** specialisation of `thm-serre-finiteness-projective-cohomology` to $A=k$ (Noetherian by `lem-field-is-noetherian`); finitely generated $k$-modules are vector spaces with finite spanning sets, and `cor-every-spanning-set-contains-a-basis` extracts a finite basis, giving finite-dimensionality (`def-dimension`); the cover-length bound gives the finite vanishing range.
- **Checks:** precheck PASS (1.1-1.3, 2.1), rendercheck PASS, strict contract PASS (4 derivations, 12 deps, 8 boundary rows).
- **Decision:** `escalate`, confidence 1 — consumes batch-9 escalated `thm-serre-finiteness-projective-cohomology` (batch-7 `thm-affine-quasi-coherent-equivalence` obligation). Receipt `research/frontier-36-complete-step3b-review-cor-projective-cohomology-finite-dimensional-field.json`.
- **Next:** level 14, `lem-proper-flat-fp-cohomology-perfect-complex`.

## Item checkpoint 46/62 — `lem-proper-flat-fp-cohomology-perfect-complex`

- **Claim/convention:** for an arbitrary commutative ring $A$, a proper finite-presentation $f:X\to\operatorname{Spec}A$ and a finitely presented $\mathcal O_X$-module $\mathcal F$ flat over $A$ (each stalk flat over the base local ring $A_{f(x)}$), there are $r\ge0$ and a bounded complex $K^\bullet$ of finite projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in positive degrees, with canonical isomorphisms $H^q(K^\bullet\otimes_AA')\cong H^q(X_{A'},\mathcal F_{A'})$ for every $A$-algebra $A'$, natural in $A'$ and compatible with composition; locally on $\operatorname{Spec}A$ the complex becomes finite free. Empty source, zero sheaf, $A=0$, $A'=0$, $r=0$, $q<0$, $q>r$ and the case "$A$ finitely generated over $\mathbb Z$" included. Choice: AC and DC assumed, declared and propagated.
- **Authoring:** (1.1) transferred the stalkwise flatness hypothesis to the approximation lemma's form using the factorisation $A\to A_{f(x)}\to\mathcal O_{X,x}$ and transitivity along the flat localisation; (1.2) descended to a finitely generated $\mathbb Z$-subalgebra stage $A_i$ (Noetherian), with $X\cong X_i\times_{A_i}\operatorname{Spec}A$, $\mathcal F\cong q^*\mathcal F_i$; (1.3) converted the stage's flatness to flatness over the base local rings by the local flatness criterion and the change-of-rings identification of localisations; (1.4) applied the Noetherian-stage perfect-complex lemma; (1.5) proved the missing supplier inline — base change of a finitely generated projective module is finitely generated projective (finite free cover, split sequence, right exact tensor, $A_i^n\otimes_{A_i}A\cong A^n$, projectivity characterisation 4⇒1 under AC); (1.6) coefficient change $K_i^\bullet\otimes_{A_i}A'\cong K^\bullet\otimes_AA'$ by associativity and unit isomorphisms; (1.7) geometry by iterated base change; (1.8) sheaf by the pullback composition rule $f^*g^*\cong(gf)^*$ recorded under the pullback definition (same convention as the audited `lem-differential-of-morphism-via-cotangent-map`); (1.9) assembled the canonical comparison and its naturality; (1.10) pulled back the stage's finite-free affine cover; (2.1) boundaries and choice accounting.
- **Scaffold audit/repair:** the scaffold deps were insufficient (no finite-projective base-change supplier and no flatness-convention bridge), and no library item states either; instead of adding a local supplier the item proves both inline from published items (`thm-splitting-lemma-for-modules`, `thm-right-exactness-of-tensor-products`, `thm-tensor-products-commute-with-arbitrary-direct-sums`, `thm-projective-module-characterizations`, `thm-flatness-is-local`, `thm-localisations-are-flat`, `prop-transitivity-of-flatness-under-change-of-rings`, `thm-localisation-of-modules-is-tensor-product`, `thm-associativity-of-balanced-tensor-products`, `thm-unit-isomorphisms-for-module-tensor-products`, `cor-change-of-rings-for-extension-of-scalars`). Deps were expanded from 4 to 39; no new item, no relabelling needed.
- **Checks:** precheck PASS (canonical numbering 1.1-1.10, 2.1 — the first draft put "step X.Y" tokens in the tags, which the layer repair wanted to renumber/reorder into a mathematically wrong order; removing those tokens restored the canonical sequential form), rendercheck PASS, strict contract PASS (11 derivations, 39 deps, 8 boundary rows, 0 warnings).
- **Decision:** `escalate`, confidence 1 — step 1.2 consumes the batch-9 escalated `lem-noetherian-approximation-proper-fp-flat-sheaf` (conditional on the unauthored limit obligations D1–D4) and steps 1.3-1.4 plus the local-freeness clause consume the batch-9 escalated `lem-proper-flat-cohomology-perfect-complex` (batch-7 `thm-affine-quasi-coherent-equivalence` obligation). Receipt `research/frontier-36-complete-step3b-review-lem-proper-flat-fp-cohomology-perfect-complex.json`.
- **Next:** level 15, `def-euler-characteristic-coherent-sheaf`.

## Item checkpoint 47/62 — `def-euler-characteristic-coherent-sheaf`

- **Claim/convention:** AC is inherited (declared, not applied) from the cited finiteness corollary. For $k$ a field, $X$ proper over $k$ and $\mathcal F$ coherent, $\chi(X,\mathcal F):=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F)$ is a well-defined integer because only finitely many groups are nonzero (vanishing past any finite affine cover length $n$); equivalently $\chi(X,\mathcal F)=\sum_{q=0}^{n-1}(-1)^q\dim_kH^q(X,\mathcal F)$. $X=\varnothing$ gives the empty sum $\chi=0$; $\mathcal F=0$ gives $\chi(X,0)=0$.
- **Authoring:** definition only (`kind: definition`, `provenance.proof: not-applicable`). Finiteness input cited from `cor-projective-cohomology-finite-dimensional-field`; the $n$-term formula is a pure rewriting of the definition (no separate claim); the AC inheritance is stated in the first sentence.
- **Scaffold audit:** deps complete as scaffolded (7); no repair needed. The scaffold's own hypothesis set (proper over a field, coherent) matches the cited corollary exactly, and the cover-length form $H^q=0$, $q\ge n$, is the corollary's actual vanishing bound.
- **Checks:** reflow unchanged; precheck 0 checked/0 failing (definitions skip); rendercheck PASS; strict contract PASS (empty citations/derivations/routine_steps, 8 boundary rows all `not_applicable` with item-specific reasons, 0 errors/0 warnings).
- **Decision:** `escalate`, confidence 1 — the finiteness supplier `cor-projective-cohomology-finite-dimensional-field` is a batch-9 escalated item (batch-7 `thm-affine-quasi-coherent-equivalence` obligation); the definition makes no unproved claim of its own. Receipt `research/frontier-36-complete-step3b-review-def-euler-characteristic-coherent-sheaf.json`.
- **Next:** level 15, `lem-proper-cohomology-field-extension`.

## Item checkpoint 48/62 — `lem-proper-cohomology-field-extension`

- **Claim/convention:** for a field $k$, a field extension $K/k$, $X$ proper over $k$ and $\mathcal F$ coherent, the natural map $\kappa^q:H^q(X,\mathcal F)\otimes_kK\to H^q(X_K,\mathcal F_K)$ — the base-change map of `def-base-change-map-cohomology` for the square over $\operatorname{Spec}k\to\operatorname{Spec}K$ — is an isomorphism for every $q\ge0$; in particular $\chi(X_K,\mathcal F_K)=\chi(X,\mathcal F)$. Empty $X$, zero sheaf, degree $q=0$ and $K=k$ included; no perfection of $k$ and no separability/finiteness of $K/k$.
- **Authoring:** finite affine cover of $X$ with affine intersections (separated over an affine base); base-changed cover $U_{I,K}=\operatorname{Spec}(B_I\otimes_kK)$ with the same nerve (`thm-affine-fibre-product-tensor-ring`, `lem-fibre-product-open-restriction`); termwise $F_K(U_{I,K})\cong F(U_I)\otimes_kK$ with pullback $m\mapsto m\otimes1$ (affine form of `lem-pullback-qc-module-quasi-coherent` + affine equivalence), so $C^\bullet(\mathcal U_K,\mathcal F_K)\cong C^\bullet(\mathcal U,\mathcal F)\otimes_kK$ as complexes; $K$ flat over the field $k$ (`prop-modules-over-a-field-are-projective-flat-and-injective`) so tensor preserves kernels/images and $H^q(C^\bullet\otimes_kK)\cong H^q(C^\bullet)\otimes_kK$; Čech comparison on both sides (`thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`) identifies the composite with $\kappa^q$. Additional clause proved in place: $\mathcal F_K$ is coherent (qc + finite type over the locally Noetherian $X_K$: finite type over the field $K$, finitely generated algebras over a Noetherian ring are Noetherian, `thm-coherent-sheaves-abelian-noetherian-scheme`), so both Euler characteristics are defined; and $\dim_K(V\otimes_kK)=\dim_kV$ for finite-dimensional $V$.
- **Scaffold audit/repair:** scaffold deps were 3 and insufficient: added the base-change map definition, the affine pullback/affine-equivalence and affine fibre-product suppliers, the flatness and tensor-exactness suppliers, the coherent-sheaf-on-Noetherian machinery and the Euler characteristic definition; deps 3 → 45. No new supplier item created, no local lemma added.
- **Residual obligation (flagged for owner/Step 4):** the identification of the abstract base-change map (defined via pullback of cohomology classes) with the Čech-complex-level map is asserted at the level of the two constructions — the Čech–Godement comparison (`thm-cech-to-sheaf-cohomology-comparison`, `def-godement-resolution`) and the section pullback $\Gamma(X,-)\Rightarrow\Gamma(X_K,g^{-1}(-))$ composed with $g^{-1}\mathcal F\to\mathcal F_K$ (`lem-cohomology-functoriality-sheaf-and-space`) — with the termwise map computed in [F5] as $m\mapsto m\otimes1$. This is the same step Stacks 02KH performs against 02KG and Vakil 25.2.9/25.2.M; the library has no naturality theorem for the Čech comparison under a morphism of spaces, so it is recorded as a proof obligation rather than a derived theorem.
- **Checks:** precheck PASS (1.1–1.6, 2.1), rendercheck PASS, strict contract PASS (7 derivations, 45 deps, 8 boundary rows, 0 errors/0 warnings). Dependency levels recomputed after the dep expansion: this item 15 → 16 and `cor-connected-projective-variety-h0-o` 16 → 17 (consumes this item); labels updated in the batch-9 pages file. The only remaining run-wide level errors are in other pairs' batches (not batch 9).
- **Decision:** `escalate`, confidence 1 — steps 1.1–1.6 consume batch-9 escalated suppliers `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`, `cor-projective-cohomology-finite-dimensional-field` and `def-euler-characteristic-coherent-sheaf` (the last inheriting the batch-7 affine-equivalence obligation); the residual identification above is additionally recorded. Receipt `research/frontier-36-complete-step3b-review-lem-proper-cohomology-field-extension.json`.
- **Next:** level 15 by scaffold order, `thm-cohomology-and-base-change`.

## Item checkpoint 49/62 — `thm-cohomology-and-base-change`

- **Claim/convention:** for $f:X\to S$ proper of finite presentation, $S$ arbitrary, $\mathcal F$ coherent and flat over $S$ (hence finitely presented, [F1]), $s\in S$, $q\ge0$: (a) if $\varphi^q_s$ is surjective then some affine open $U\ni s$ has every base change $T\to U$ giving an isomorphism $g_T^*(R^qf_*\mathcal F|_U)\to R^qf_{T*}g_T^*\mathcal F$; (b) under that hypothesis $R^qf_*\mathcal F$ is locally free of finite rank near $s$ iff $\varphi^{q-1}_s$ is surjective, automatic for $q=0$; (c) then $\varphi^q_s$ is itself an isomorphism. Empty $X$, zero sheaf, $q=0$, $X_s=\varnothing$, $S=\varnothing$ included; no Noetherian/projective/dimension hypothesis on $S$.
- **Authoring:** affine neighbourhood $U=\operatorname{Spec}A\ni s$ with prime $\mathfrak m$; the perfect complex $K^\bullet$ over $A$ ([F4]); the finite-freeness clause gives $C=A_f$ ($f\notin\mathfrak m$) with $L^\bullet=K^\bullet\otimes_AC$ finite free, so $C$ local with residue field $\kappa(s)$; the finite-free criterion over $(C,\mathfrak n=\mathfrak mC)$ supplies the split differential, the base-change isomorphism $H^q(L)_t\otimes_{C_t}A''\cong H^q(L\otimes_CA'')$ for every $C_t$-algebra $A''$, and the finite-projectivity criterion; transport to geometry through the comparison isomorphisms $\theta_{A'}$ (steps 1.3-1.5, arbitrary $T\to U$ by stalkwise detection on affine charts, using the affine-local recipe of the base-change map); part (b) both directions in 1.6 (finite projective $\Rightarrow$ localisations free by a Nakayama/splitting argument, free locus open) and 1.7 (local freeness near $s$ $\Rightarrow$ $H^q(L)_t\cong C_t^\rho$ $\Rightarrow$ $\varphi^{q-1}$ surjective after shrinking; $q=0$ automatic since $L^{-1}=0$).
- **Scaffold audit/repair:** deps expanded from the scaffolded 3 (`lem-proper-flat-fp-cohomology-perfect-complex`, `lem-cohomology-base-change-finite-free-criterion`, `def-base-change-map-cohomology`) to 55, adding the affine-local higher-direct-image machinery, the coherence-implies-finite-presentation argument (the scaffold's parenthetical "coherent (in particular finitely presented)" is correct under the library's kernel-condition definition of coherence), local-freeness criteria, Nakayama/splitting/projectivity suppliers, and the flatness/localisation bibliographic support. No new supplier item; no local lemma added. No dependency-level relabelling was triggered (consumers already sit above level 15).
- **Residual obligation (flagged for owner/Step 4):** fact [F5] uses the naturality clause of `lem-proper-flat-fp-cohomology-perfect-complex` in the form that its comparison isomorphisms commute with the *geometric* base-change maps of `def-base-change-map-cohomology` for A-algebra maps; the supplier states naturality in $A'$ and compatibility with composition but does not spell out the geometric horizontal arrow, so the identification is recorded as a proof obligation (steps 1.3, 1.4, 1.6, 1.7 depend on it). The Noetherian-stage lemma `lem-proper-flat-cohomology-perfect-complex` (itself escalated) is the upstream source of the naturality.
- **Checks:** precheck PASS, rendercheck PASS, strict contract PASS (55 deps, 8 derivations, 8 boundary rows, 0 errors/0 warnings).
- **Decision:** `escalate`, confidence 1 — steps 1.1-1.7 consume the batch-9 escalated `lem-proper-flat-fp-cohomology-perfect-complex` (which consumes `lem-noetherian-approximation-proper-fp-flat-sheaf` with limit obligations D1-D4, and `lem-proper-flat-cohomology-perfect-complex` with the batch-7 `thm-affine-quasi-coherent-equivalence` obligation) and the batch-9 escalated `lem-cohomology-base-change-finite-free-criterion`; the [F5] obligation above is additionally recorded. Receipt `research/frontier-36-complete-step3b-review-thm-cohomology-and-base-change.json`.
- **Next:** level 16, `cor-euler-characteristic-locally-constant-flat-proper-family`.

## Item checkpoint 50/62 — `cor-euler-characteristic-locally-constant-flat-proper-family`

- **Claim/convention:** for $f:X\to S$ proper of finite presentation with $S$ arbitrary and $\mathcal F$ finitely presented and flat over $S$ (stalks flat over the base local rings), the function $s\mapsto\chi(X_s,\mathcal F_s)$ is locally constant on $S$, where $\chi$ is the Euler characteristic of `def-euler-characteristic-coherent-sheaf`; the hypotheses $X_s$ proper over $\kappa(s)$ and $\mathcal F_s$ coherent are verified in [F6]. The coherent case is an explicitly stated special case (coherence implies finite presentation, [F2]), and when $f$ is flat the corollary applies to $\mathcal F=\mathcal O_X$. Empty source, zero sheaf, empty base and arbitrary non-Noetherian $S$ are included.
- **Scaffold repair (statement):** the scaffolded hypothesis "$\mathcal F$ coherent and flat over $S$" together with the clause "if $f$ is flat, this applies to $\mathcal F=\mathcal O_X$" cannot be read literally: over a non-Noetherian base $\mathcal O_X$ need not be coherent (the example in `def-coherent-module-scheme`, with $f=\operatorname{id}$ proper, flat and of finite presentation). The item is therefore stated for finitely presented $\mathcal F$ — exactly the hypothesis of Stacks Tag 0B9T, fetched and read during this checkpoint — with the coherent case retained as a stated special case and the flat structure-sheaf clause justified by "free of rank one, hence finitely presented".
- **Authoring:** affine chart $U=\operatorname{Spec}A\ni s_0$; the universal finite projective complex $K^\bullet$ on $A$ ([F3]); for every $\mathfrak m\in U$ the fibre $X_{\mathfrak m}$ is canonically identified with $(X_U)_{\kappa(\mathfrak m)}$ and $\mathcal F_{\mathfrak m}$ with $(\mathcal F_U)_{\kappa(\mathfrak m)}$ ([F4], [F5]); the comparison isomorphisms give $\dim_{\kappa(\mathfrak m)}H^q(X_{\mathfrak m},\mathcal F_{\mathfrak m})=\dim_{\kappa(\mathfrak m)}H^q(K^\bullet\otimes_A\kappa(\mathfrak m))$; Euler–Poincaré over the field $\kappa(\mathfrak m)$ by two applications of rank–nullity and a telescoping sum (step 1.5, with the endpoint terms $B^0=B^{r+1}=0$); local constancy of $\mathfrak m\mapsto\dim_{\kappa(\mathfrak m)}(K^q\otimes_A\kappa(\mathfrak m))$ from the open free loci $Z_q(e_q)$ of the finitely generated projective modules $\widetilde{K^q}$ ([F8], [F9]); conclusion on the open neighbourhood $V=\bigcap_{q=0}^{r}Z_q(e_q)$ of $\mathfrak m_0$.
- **Checks:** precheck PASS (1 checked, 0 failing), rendercheck PASS, strict contract PASS (56 deps, 8 derivations, 8 boundary rows, 0 errors/0 warnings). One missing dep (`lem-pullback-qc-module-quasi-coherent`) was caught by the strict contract and added.
- **Decision:** `escalate`, confidence 1 — steps 1.2–1.7 consume the batch-9 escalated `lem-proper-flat-fp-cohomology-perfect-complex` (which consumes `lem-noetherian-approximation-proper-fp-flat-sheaf` with limit obligations D1–D4 and the escalated `lem-proper-flat-cohomology-perfect-complex` with the batch-7 `thm-affine-quasi-coherent-equivalence` obligation) and the batch-9 escalated `def-euler-characteristic-coherent-sheaf`; the statement repair above is additionally recorded for the owner. Receipt `research/frontier-36-complete-step3b-review-cor-euler-characteristic-locally-constant-flat-proper-family.json`.
- **Next:** level 16, `cor-upper-semicontinuity-cohomology-dimension`.

## Item checkpoint 51/62 — `cor-upper-semicontinuity-cohomology-dimension`

- **Claim/convention:** for $f:X\to S$ proper of finite presentation with $S$ arbitrary, $\mathcal F$ coherent and flat over $S$ (hence finitely presented, [F2]), and each $q\ge0$, the function $h^q(s)=\dim_{\kappa(s)}H^q(X_s,\mathcal F_s)$ is finite-valued and upper semicontinuous on $S$: every strict sublevel set $\{h^q<a\}$ is open, equivalently every point has an open neighbourhood on which $h^q$ does not increase. No Noetherian, projective, flatness-of-$f$ or base-change-surjectivity hypothesis; empty source, zero sheaf, empty base, $X_s=\varnothing$, $q=0$ and $q>r$ included.
- **Authoring:** affine chart $U=\operatorname{Spec}A\ni s_0$; the universal finite projective complex $K^\bullet$ of [F3]; fibre identification $h^q(\mathfrak p)=\dim_{\kappa(\mathfrak p)}H^q(K^\bullet\otimes_A\kappa(\mathfrak p))$ ([F3]–[F5], 1.3); rank–nullity on $d^q_{\mathfrak p},d^{q-1}_{\mathfrak p}$ gives $h^q=e_q(\mathfrak p)-\operatorname{rank}d^q_{\mathfrak p}-\operatorname{rank}d^{q-1}_{\mathfrak p}$ (1.4, [F7]); with $N^j:=\operatorname{coker}d^j$ right-exactness gives $N^j\otimes_A\kappa(\mathfrak p)\cong\operatorname{coker}d^j_{\mathfrak p}$ and $\operatorname{rank}d^j_{\mathfrak p}=e_{j+1}(\mathfrak p)-\dim(N^j\otimes_A\kappa(\mathfrak p))$ (1.5, [F6], [F7]); constancy of the $e_j$ on the open free loci $V=\bigcap_{j=0}^rZ_j(e_j)$ (1.6, [F8], [F9]); openness of $W_j=\{\dim(N^j\otimes\kappa)\le d_j\}$ by the Fitting-ideal loci of [F10], giving $h^q(\mathfrak p)\le h^q(\mathfrak m_0)$ on $W=V\cap W_q\cap W_{q-1}$ (1.7–1.8); global openness of strict sublevel sets by the union axiom, [F11], 1.9. Step 1.10 records the base-change context ([F12]) without using it.
- **Scaffold repair:** the scaffolded strategy "matrix ranks are lower semicontinuous via nonvanishing $r$-minors" was replaced by the cokernel/Fitting-ideal route: no minors and no "rank $\ge r$ iff a nonvanishing minor" supplier are needed; the scaffolded dependency `lem-cohomology-base-change-finite-free-criterion` is not used, and `thm-fitting-ideals-control-rank-loci` + `def-fitting-ideal-sheaf` (batch 7) are used instead. Deps 2 → 62; none missing from frontmatter; no new item created.
- **Checks:** reflow unchanged; precheck PASS (1 checked, 0 failing) after hand-fixing a stale "comparison 2.2" label and a duplicate wikilink inside [F12]; rendercheck PASS (KaTeX + frontmatter YAML); strict contract PASS (62 deps, 11 derivations, 8 boundary rows, 0 errors/0 warnings); dependency levels recomputed after the expansion — run clean, item stays level 16.
- **Decision:** `escalate`, confidence 1 — steps 1.2–1.8 consume the batch-9 escalated `lem-proper-flat-fp-cohomology-perfect-complex` (which consumes `lem-noetherian-approximation-proper-fp-flat-sheaf` with limit obligations D1–D4 and `lem-proper-flat-cohomology-perfect-complex` with the batch-7 `thm-affine-quasi-coherent-equivalence` obligation), and the context step 1.10 cites the batch-9 escalated `thm-cohomology-and-base-change`; the Fitting-ideal supplier `thm-fitting-ideals-control-rank-loci` sits on the batch-7 escalated `thm-qc-ideal-closed-subscheme-correspondence-complete`-free chain (`def-fitting-ideal-sheaf`) and its receipt could not be located as an independent review (batch-7 report records authoring/contract/decision only). Receipt `research/frontier-36-complete-step3b-review-cor-upper-semicontinuity-cohomology-dimension.json`.
- **Next:** level 16 by scaffold order, `def-hilbert-function-sheaf-projective`.

## Item checkpoint 52/62 — `def-hilbert-function-sheaf-projective`

- **Claim/convention:** for a field $k$ and a scheme $X$ projective over $k$ via a fixed closed immersion $i:X\hookrightarrow\mathbb P^n_k$, with $\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n_k}(1)$ and twists $\mathcal F(m)=\mathcal F\otimes\mathcal O_X(1)^{\otimes m}$: for coherent $\mathcal F$, the Hilbert function $h_{\mathcal F}(m)=\dim_kH^0(X,\mathcal F(m))$ and the Euler-characteristic function $P_{\mathcal F}(m)=\chi(X,\mathcal F(m))$ are defined for all $m\in\mathbb Z$; $P_{\mathcal F}(m)=\sum_{q\ge0}(-1)^qh^q_{\mathcal F}(m)$, so the two agree whenever the higher cohomology of the twist vanishes (no vanishing is imposed); a polynomial $p\in\mathbb Q[t]$ with $p(m)=P_{\mathcal F}(m)$ for all $m$ is a Hilbert polynomial (existence/uniqueness not asserted here). $X=\varnothing$ and $\mathcal F=0$ give $h_{\mathcal F}\equiv P_{\mathcal F}\equiv0$ with zero Hilbert polynomial.
- **Scaffold repair (conventions):** the scaffold's deps ($\chi$ definition + twist definition) were expanded to 16, adding the H-projective convention and its closed-immersion data ($i$, $n$), projective-implies-proper, the finiteness corollary (cohomology finite-dimensional and eventually vanishing), and the pullback/tensor machinery; $\mathcal O_X(1)$ invertibility is asserted with the same convention as the already-authored `lem-serre-vanishing-induction-hyperplane` and `thm-serre-vanishing` on this page.
- **Authoring:** definition only (`kind: definition`, `provenance.proof: not-applicable`). The coherence of every twist is recorded with the local argument (coherence is local; on an open set where the invertible sheaf is trivial the twist is $\mathcal F$), following [F3] of `thm-serre-vanishing`; the vanishing/counting input is inherited from `cor-projective-cohomology-finite-dimensional-field` and `def-euler-characteristic-coherent-sheaf`.
- **Residual obligation (flagged for owner/Step 4):** the claim that $\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n_k}(1)$ is invertible relies on the general fact that a pullback of an invertible sheaf is invertible; the library records closure of invertibility under restriction, tensor and dual (`def-invertible-sheaf`) but has no separate pullback statement, so the use is recorded as an obligation (the same use appears in `lem-serre-vanishing-induction-hyperplane`).
- **Checks:** reflow unchanged; precheck 0 checked/0 failing (definitions skip); rendercheck PASS — three multiline displays were collapsed to one source line each before passing; strict contract PASS (empty citations/derivations, 8 boundary rows all `not_applicable` with item-specific reasons, 0 errors/0 warnings). No dependency-level change (deps at levels $\le14$).
- **Decision:** `escalate`, confidence 1 — the definition inherits the Axiom of Choice and the finiteness making $P_{\mathcal F}$ well defined from the batch-9 escalated `cor-projective-cohomology-finite-dimensional-field` (batch-7 `thm-affine-quasi-coherent-equivalence` obligation); the invertibility obligation above is additionally recorded. Receipt `research/frontier-36-complete-step3b-review-def-hilbert-function-sheaf-projective.json`.
- **Next:** level 16, `lem-euler-characteristic-additive-short-exact`.

## Item checkpoint 53/62 — `lem-euler-characteristic-additive-short-exact`

- **Claim/convention:** for a field $k$, $X$ proper over $k$ and a short exact sequence $0\to\mathcal F'\xrightarrow{\alpha}\mathcal F\xrightarrow{\beta}\mathcal F''\to0$ of coherent $\mathcal O_X$-modules: $\chi(X,\mathcal F)=\chi(X,\mathcal F')+\chi(X,\mathcal F'')$; empty $X$, zero sheaf in any position, isomorphism cases and the trivial sequence $0\to\mathcal F\to\mathcal F\to0\to0$ included.
- **Authoring:** steps 1.1 (finite-dimensionality and a common vanishing bound $M$ from `cor-projective-cohomology-finite-dimensional-field`), 1.2 (long exact sequence with $k$-linear maps, `thm-long-exact-sequence-sheaf-cohomology`), 1.3 (rank-nullity at each degree on $\beta_q$, $\alpha_q$, $\delta_q$ using exactness), 1.4 (alternating sum; connecting-map terms cancel by $q\mapsto q-1$, the $q=0$ term is $\delta_{-1}=0$), 1.5 (identification with $\chi$), 2.1 (boundaries and choice).
- **Scaffold audit/repair:** deps expanded from the scaffolded 2 (`def-euler-characteristic-coherent-sheaf`, `thm-long-exact-sequence-sheaf-cohomology`) to 15, adding the finiteness corollary, `thm-serre-finiteness-projective-cohomology` (source of the $k$-module structure on $H^q$), `def-exact-sequence-sheaves`, `def-module-on-ringed-space`, `def-vector-space` and rank-nullity; no new supplier item created.
- **Residual obligation (flagged for owner/Step 4):** [F3] derives the $k$-linearity of $\alpha_q$, $\beta_q$, $\delta_q$ from naturality of the long exact sequence applied to the morphism of short exact sequences induced by scalar multiplication $m_\lambda$; the LES theorem is stated for abelian sheaves, and the library does not spell out this $k$-linear upgrade (nor the compatibility of the scalar action with the $k$-vector-space structure furnished by `thm-serre-finiteness-projective-cohomology`). The use is recorded as a proof obligation.
- **Checks:** precheck PASS (1 checked, 0 failing — one missing `proof_strategy: direct` fixed); rendercheck PASS; strict contract PASS (6 derivations, 15 deps, 8 boundary rows, 0 errors/0 warnings). Level unchanged (16).
- **Decision:** `escalate`, confidence 1 — steps 1.1–1.5 consume the batch-9 escalated `cor-projective-cohomology-finite-dimensional-field` and `thm-serre-finiteness-projective-cohomology` (batch-7 `thm-affine-quasi-coherent-equivalence` chain); the [F3] obligation above is additionally recorded. Receipt `research/frontier-36-complete-step3b-review-lem-euler-characteristic-additive-short-exact.json`.
- **Next:** level 16, `rem-base-change-is-not-automatic`.

## Item checkpoint 54/62 — `rem-base-change-is-not-automatic`

- **Claim/convention:** a warning remark in two parts. (i) The base-change map $\varphi^q_s:(R^qf_*\mathcal F)(s)\to H^q(X_s,\mathcal F_s)$ of `def-base-change-map-cohomology` is governed by `thm-cohomology-and-base-change`: surjectivity in degree $q$ is equivalent to the map being an isomorphism and gives isomorphisms for all base changes over a neighbourhood, while local freeness of $R^qf_*\mathcal F$ needs surjectivity of both $\varphi^q_s$ and the adjacent $\varphi^{q-1}_s$ (automatic for $q=0$); the rank of a locally free $R^qf_*\mathcal F$ is therefore not by itself a formula for $h^q$. (ii) The hypotheses are not automatic: on $X=\mathbb P^1_S\to S=\operatorname{Spec}k[a]$ with $\mathcal E$ the rank-two vector bundle $0\to\mathcal O(-2)\to\mathcal E\to\mathcal O\to0$ of class $a\cdot[1/(x_0x_1)]$, the fibre dimension jumps ($h^0=1$ at $a=0$, $h^0=0$ otherwise), and the surjectivity of $\varphi^0$ at the origin would force $f_*\mathcal E$ locally free with constant $h^0$ nearby by the theorem — contradiction — so $\varphi^0$ at the origin is not an isomorphism.
- **Authoring:** remark (prose, `provenance.proof: not-applicable`), no numbered steps. Deps expanded from the scaffolded 2 (`def-base-change-map-cohomology`, `thm-cohomology-and-base-change`) to 10, adding the cocycle supplier, the projective-space cohomology computation, the fibre/twisting/locally-free/flat conventions and `def-affine-scheme-spectrum`.
- **Unresolved supplier obligation (exact flags):** supplier `ex-upper-semicontinuity-jumping-h0` (B page, level 17 of this dispatch, not yet authored); consumer `rem-base-change-is-not-automatic`; consuming sentences are the quoting paragraph "The construction of $\mathcal E$ and the computations of the fibre dimensions are carried out in the companion example ... where it is shown that $h^0(\mathcal E_{(a)})=1$ ... $h^0(\mathcal E_u)=0$" and the contradiction that follows. The example is named in text but deliberately **not** wikilinked, to avoid a later-to-earlier dependency edge; the decision is escalated and the owner must verify the example and this exact use at Step 4.
- **Checks:** precheck 0 checked/0 failing (remarks skip); rendercheck PASS after collapsing one multiline display; strict contract PASS (8 boundary rows, 0 errors/0 warnings — the first run failed `boundary-evidence-unanchored` because a checked row's evidence named no step or "statement"; reworded); dependency levels recomputed: run clean, item stays level 16.
- **Decision:** `escalate`, confidence 1 — consumes the batch-9 escalated `thm-cohomology-and-base-change` (batch-7 `thm-affine-quasi-coherent-equivalence` chain) and quotes the unauthored `ex-upper-semicontinuity-jumping-h0` as above. Receipt `research/frontier-36-complete-step3b-review-rem-base-change-is-not-automatic.json`.
- **Next:** level 16, examples page `ex-cohomology-o-d-projective-line-all-d`.

## Item checkpoint 55/62 — `ex-cohomology-o-d-projective-line-all-d`

- **Claim:** for a field $k$ and every $d\in\mathbb Z$ on $\mathbb P^1_k$: $h^0=\max(d+1,0)$, $h^1=\max(-d-1,0)$, $\chi=d+1$, all higher cohomology zero. $k$ arbitrary (char $p$, $\mathbb F_2$), $d=0$ and the boundary $d=-1$ included; $d=1$ gives $h^0=2$.
- **Authoring:** verification in three exhaustive cases: $d\ge0$ (monomial basis $x_0^{d-j}x_1^j$, $0\le j\le d$, of $k[x_0,x_1]_d$; no all-negative monomials, so $h^1=0$), $d=-1$ (both groups zero, $\chi=0$), $d\le-2$ ($h^0=0$; top-degree basis enumerated by $e_0=-a$, $e_1=-b$, $a,b\ge1$, $a+b=-d$, giving $-d-1$ elements), with $\chi=h^0-h^1$ from $H^q=0$, $q\notin\{0,1\}$.
- **Scaffold audit/repair:** deps expanded from the scaffolded 2 to 21; added properness of projective space, local Noetherianity of $\mathbb P^1_k$ over a field (`lem-field-is-noetherian`, `cor-finite-variable-polynomial-ring-noetherian`), coherence of line bundles on locally Noetherian schemes (`thm-coherent-sheaves-abelian-noetherian-scheme`), finiteness (`cor-projective-cohomology-finite-dimensional-field`) and the graded/polynomial conventions. One unused-fact defect (F4) was caught by the strict contract and repaired by citing it in step 1.1.
- **Checks:** precheck PASS (1 checked, 0 failing); rendercheck PASS (one multiline display collapsed); strict contract PASS (5 derivations, 21 deps, 8 boundary rows, 0 errors/0 warnings). Level unchanged (16).
- **Decision:** `escalate`, confidence 1 — steps 1.1–2.1 consume the batch-9 escalated `thm-cohomology-projective-space-twisting-sheaves` and `cor-projective-cohomology-finite-dimensional-field` (batch-7 `thm-affine-quasi-coherent-equivalence` chain). Receipt `research/frontier-36-complete-step3b-review-ex-cohomology-o-d-projective-line-all-d.json`.
- **Next:** level 17, `cor-connected-projective-variety-h0-o`.

## Item checkpoint 56/62 — `cor-connected-projective-variety-h0-o`

- **Claim/convention:** for a field $k$ and a nonempty scheme $X$ proper over $k$ whose geometric fibre $X_{\bar k}=X\times_{\operatorname{Spec}k}\operatorname{Spec}\bar k$ (chosen algebraic closure, the library convention of `def-geometric-fibre` + `def-geometrically-reduced-integral-connected-fibre`) is connected and reduced, the unit map $k\to H^0(X,\mathcal O_X)$ is an isomorphism. The warning clause promised by the scaffold is proved: with $k=\mathbb F_p(u)$ and $L=k[T]/(T^p-u)=\mathbb F_p(t)$, $t^p=u$, the scheme $X=\operatorname{Spec}L$ is nonempty, proper over $k$, reduced and geometrically connected but not geometrically reduced, and $H^0(X,\mathcal O_X)=L\neq k$. Scope is proper (not projective); the item ID and title retain "projective" from the design, exactly as in `thm-serre-finiteness-projective-cohomology`.
- **Authoring:** steps 1.1-1.10. (1.1) $X$ locally Noetherian and $\mathcal O_X$ coherent, so $B=H^0(X,\mathcal O_X)$ is finite-dimensional by `cor-projective-cohomology-finite-dimensional-field`, and $B\neq0$ because a nonempty scheme has a point with an affine neighbourhood of nonzero coordinate ring and the restriction map is unital. (1.2) flat base change (`lem-proper-cohomology-field-extension`) identifies $R=H^0(X_{\bar k},\mathcal O)$ with $B\otimes_k\bar k$ as unital commutative $\bar k$-algebras. (1.3) $\dim_{\bar k}(B\otimes_k\bar k)=\dim_kB$ and $R\neq0$. (1.4) $R$ is reduced since $X_{\bar k}$ is reduced and nilpotent global sections have nilpotent germs. (1.5) $R$ has no nontrivial idempotents: a nontrivial idempotent global section gives a clopen partition into two nonempty opens (germs in local rings are $0$ or $1$; on affine charts these are $D(e)$ and $D(1-e)$), contradicting connectedness. (1.6-1.8) finite-dimensional over $\bar k$ implies Artinian; the structure theorem gives $R\cong\prod_jR_{\mathfrak m_j}\cong\prod_jR/\mathfrak m_j^n$ with nonzero factors; a coordinate idempotent would contradict 1.5 unless $r=1$; then $R$ is local Artinian with nilpotent maximal ideal, and reducedness forces that ideal to be zero, so $R$ is a field. (1.9) $R$ is a finite-dimensional field extension of the algebraically closed $\bar k$, hence $R=\bar k$. (1.10) $\dim_kB=1$ and the unit map $k\to B$ is an isomorphism.
- **Warning verification:** steps 1.11-1.16. $L=k[T]/(T^p-u)$ is the nontrivial purely inseparable extension of degree $p$ (`ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p`); $\operatorname{Spec}L\to\operatorname{Spec}k$ is finite hence proper (`cor-finite-morphism-proper`); the geometric fibre is $\operatorname{Spec}(L\otimes_k\bar k)\cong\operatorname{Spec}\bar k[Y]/(Y^p)$, which is local (the nilpotent ideal $(Y)$ has field quotient) and nonreduced ($Y\neq0$, $Y^p=0$), so it is connected but not reduced; hence $H^0(X,\mathcal O_X)=L\neq k$. This confirms the scaffold's promised "geometric reducedness cannot be replaced by reducedness over $k$" clause.
- **Scaffold audit/repair:** deps expanded from the scaffolded 4 to 69. The scaffolded `thm-serre-finiteness-projective-cohomology` and `thm-affine-quasi-coherent-equivalence` are not used: finiteness comes from `cor-projective-cohomology-finite-dimensional-field` (which itself sits on the escalated batch-7 chain) applied to the coherent sheaf $\mathcal O_X$, and the affine equivalence is replaced by `thm-global-sections-affine-scheme` plus `thm-affine-fibre-product-tensor-ring`. Added suppliers for coherence over locally Noetherian schemes, extension of scalars, the geometric-fibre conventions, the idempotent/connectedness dictionary, the Artinian structure theorem and local-ring facts, the algebraically-closed finite-extension criterion, the Frobenius identity, and the polynomial-ring computations. No new supplier item was created; no local repair to other pairs.
- **Residual obligation (flagged for owner/Step 4):** fact [F5] asserts that the degree-zero base-change map is an isomorphism of unital $\bar k$-algebras, i.e. that the pullback of cohomology classes on $H^0$ is a unital ring homomorphism compatible with the $\bar k$-algebra structure of $B\otimes_k\bar k$. This is the same identification already recorded as an obligation in checkpoint 48 (`lem-proper-cohomology-field-extension`): the library states the base-change map as $\bar k$-linear and functorial, and does not separately record its multiplicativity on $H^0$ of the structure sheaf. It is standard (pullback of functions is a ring map) but is recorded here as a proof obligation, not a derived theorem. The same file also inherits the checkpoint-48 obligations for the Čech-comparison naturality underlying that supplier.
- **Checks:** reflow unchanged; precheck PASS (1 checked, 0 failing) after adopting the canonical step numbering (all proof steps 1.1-1.16 with the boundary step 2.1 — the layer-repair tool renumbers steps whose numbering exceeds the citation depth it recognises, so the example steps were folded into the 1.x sequence); rendercheck PASS; strict contract PASS (17 derivations, 69 deps, 8 boundary rows, 0 errors/0 warnings). Dependency levels recomputed run-wide: no errors, item stays level 17.
- **Decision:** `escalate`, confidence 1 — steps 1.1-1.10 consume the batch-9 escalated `cor-projective-cohomology-finite-dimensional-field` and `lem-proper-cohomology-field-extension` (batch-7 `thm-affine-quasi-coherent-equivalence` chain); the [F5] ring-compatibility obligation above is additionally recorded. Receipt `research/frontier-36-complete-step3b-review-cor-connected-projective-variety-h0-o.json`.
- **Next:** level 17, `thm-hilbert-polynomial-coherent-sheaf`.

## Item checkpoint 57/62 — `thm-hilbert-polynomial-coherent-sheaf`

- **Claim/convention:** for a field $k$, a closed immersion $i:X\hookrightarrow\mathbb P^n_k$ with $\mathcal O_X(1)=i^*\mathcal O(1)$ and twists $\mathcal F(m)=\mathcal F\otimes\mathcal O_X(1)^{\otimes m}$, and a coherent $\mathcal F$: (1) there is a **unique** $P_{\mathcal F}(t)\in\mathbb Q[t]$ with $P_{\mathcal F}(m)=\chi(X,\mathcal F(m))$ for **every** $m\in\mathbb Z$; (2) $P_{\mathcal F}(m)=h_{\mathcal F}(m)$ for all $m\ge m_0$ (some $m_0$); (3) $\mathcal F=0$ gives $P_{\mathcal F}=0$. Empty $X$, zero sheaf, $n=0$, finite/infinite $k$ and negative twists included; no effectivity of $m_0$.
- **Scaffold repair (strategy):** the scaffolded Hilbert–Serre route (finite graded section module + eventual polynomiality + eventual values fixing the constant) was replaced by the direct induction on $d=\dim\operatorname{Supp}\mathcal F$: the hyperplane lemma supplies a fixed quotient sheaf $\mathcal G=\operatorname{coker}(\cdot\ell:\mathcal F(-1)\to\mathcal F)$ with $\dim\operatorname{Supp}\mathcal G=d-1$; additivity of $\chi$ gives the difference equation $\chi(\mathcal F(m))-\chi(\mathcal F(m-1))=\chi(\mathcal G(m))$ with a single polynomial $Q$ for $\mathcal G$ from the induction hypothesis; the discrete antiderivative in $\mathbb Q[t]$ plus the value at $m=0$ (not at large twists) produces $P_{\mathcal F}$ agreeing with $\chi$ at every integer. The scaffolded `lem-graded-section-module-finite-projective` and the published `thm-hilbert-serre-theorem` are therefore not used and were dropped from the frontmatter. The finite-field case is reduced to the infinite field $K=k(t)=\operatorname{Frac}(k[t])$ by the flat base change `lem-proper-cohomology-field-extension`; the large-twist clause comes from `thm-serre-vanishing` applied on $\mathbb P^n_k$ and transported to $X$ through the closed-immersion pushforward.
- **Authoring:** steps 1.1–1.10 and boundary 2.1; 42 deps; facts [F1]–[F8]; the key step 1.6 tensor-identifies the Lemma's cokernels $\mathcal G(m)$ with $\mathcal G(0)\otimes\mathcal O_X(1)^{\otimes m}$ so that the induction hypothesis applies to one fixed sheaf, and step 1.7 fixes the additive constant $C=\chi(X,\mathcal G(0))-R(0)$.
- **Residual obligations (flagged for owner/Step 4):** (i) [F7] uses the projection identity $i_*(\mathcal G\otimes i^*\mathcal H)\cong(i_*\mathcal G)\otimes\mathcal H$ for a closed immersion (verified on affine charts, same citation as `thm-serre-vanishing` [F5]; no separate library item); (ii) [F8] and step 1.9 use the base-change compatibility $g^*\mathcal O_X(1)\cong\mathcal O_{X_K}(1)$ and monoidality of pullback of quasi-coherent modules for all $m\in\mathbb Z$ — the twist/base-change obligation already flagged at checkpoints 48/49/52/54; the $m<0$ (dual) case is derived by cancelling the invertible sheaf $\mathcal O_{X_K}(1)^{\otimes(-m)}$, not by a pullback-of-dual statement.
- **Checks:** reflow applied (one join); rendercheck PASS after collapsing one multiline display to a single source line; precheck PASS (1 checked, 0 failing); strict contract PASS (11 derivations, 42 deps, 8 boundary rows, 0 errors/0 warnings, after removing a duplicated `[[thm-serre-vanishing]]` inside [F7] that the contract flagged `citation-duplicate`). Dependency levels recomputed: run clean, item stays level 17.
- **Decision:** `escalate`, confidence 1 — steps 1.1–1.10 consume the batch-9 escalated `lem-euler-characteristic-additive-short-exact`, `lem-serre-vanishing-induction-hyperplane`, `lem-proper-cohomology-field-extension` and `thm-serre-vanishing` (batch-7 `thm-affine-quasi-coherent-equivalence` chain); the [F7]/[F8] obligations above are additionally recorded. Receipt `research/frontier-36-complete-step3b-review-thm-hilbert-polynomial-coherent-sheaf.json`.
- **Next:** level 17, examples page `cex-h0-not-euler-characteristic-before-serre-vanishing`.

## Item checkpoint 58/62 — `cex-h0-not-euler-characteristic-before-serre-vanishing`

- **Claim/witness:** on $X=\mathbb P^1_k$ with the standard embedding and $\mathcal F=\mathcal O_X(-2)$: $\mathcal F(m)\cong\mathcal O_X(m-2)$, so $h_{\mathcal F}(m)=\max(m-1,0)$ and $P_{\mathcal F}(m)=m-1$ for every $m$; at $m=0$ this is $h_{\mathcal F}(0)=0$ against $P_{\mathcal F}(0)=-1$ (because $h^1=1$), and the two functions differ exactly at the twists $m\le0$ and agree for $m\ge1$. Hence no polynomial agrees with the Hilbert function at all integers, while $q(t)=t-1$ realizes the Euler-characteristic function; the claimed large-twist equality cannot be extended to negative twists.
- **Scaffold audit/repair:** deps expanded from the scaffolded 2 to 13: added the twist multiplicativity supplier `thm-twisting-sheaf-invertible-standard-graded`, the invertibility/coherence/convention items, and `def-axiom-of-choice` for the inherited choice. The scaffold's two deps are both used (`ex-cohomology-o-d-projective-line-all-d` at [F3], `def-hilbert-function-sheaf-projective` at [F1]); no local supplier needed; no other pair touched.
- **Authoring:** steps 1.1-1.3 and boundary 2.1; the computation is exhaustive in $m$ and covers every field including $\mathbb F_2$, with the endpoint $m=0$ exhibited and the disagreement range $m\le0$ proved by the sign of $\max(m-1,0)$ against $m-1$.
- **Checks:** reflow applied; precheck PASS (1 checked, 0 failing); rendercheck PASS; strict contract PASS (4 derivations, 13 deps, 8 boundary rows, 0 errors/0 warnings). Dependency levels recomputed: run clean, item stays level 17.
- **Decision:** `escalate`, confidence 1 — step 1.2 consumes the batch-9 escalated `ex-cohomology-o-d-projective-line-all-d` and, through it, `thm-cohomology-projective-space-twisting-sheaves` and `cor-projective-cohomology-finite-dimensional-field` (batch-7 `thm-affine-quasi-coherent-equivalence` chain). Receipt `research/frontier-36-complete-step3b-review-cex-h0-not-euler-characteristic-before-serre-vanishing.json`.
- **Next:** level 17, `ex-hilbert-polynomial-projective-space`.

## Item checkpoint 59/62 — `ex-hilbert-polynomial-projective-space`

- **Claim/convention:** for $X=\mathbb P^n_k$ with its standard embedding, the **binomial polynomial** $\binom{t+n}{n}=\frac{(t+n)(t+n-1)\cdots(t+1)}{n!}\in\mathbb Q[t]$ (empty product for $n=0$) satisfies $P_{\mathcal O_X}(m)=\chi(X,\mathcal O_X(m))=\binom{m+n}{n}$ for every integer $m$; for $m\ge0$ also $h_{\mathcal O_X}(m)=\binom{m+n}{n}$; for $-n\le m\le-1$ both are $0$ and for $m\le-n-1$ one has $h_{\mathcal O_X}(m)=0$ while $P_{\mathcal O_X}(m)=(-1)^n\binom{-m-1}{n}$. $k$ arbitrary, $n=0$ included.
- **Authoring:** steps 1.1–1.5 and boundary 2.1. The three ranges $m\ge0$, $-n\le m\le-1$, $m\le-n-1$ exhaust $\mathbb Z$ and are computed directly from the projective-space cohomology theorem: the degree-$m$ monomial count $\binom{m+n}{n}$ via the composition corollary and the closed formula, and the Laurent-exponent count $\binom{-m-1}{n}$ via the same corollary after the substitution $f_i=-e_i-1$. Deps expanded from the scaffolded 2 to 17.
- **Scaffold audit/repair:** the scaffolded deps are both used; added the counting chain (`cor-compositions-with-k-parts-are-counted-by-binomial-coefficients`, `thm-binomial-closed-formula`, `def-binomial-coefficient`, `def-factorial-and-falling-factorial`), the graded/monomial conventions, and `def-axiom-of-choice`. The example defines the binomial polynomial explicitly in its own Statement, so no separate library item for the general binomial polynomial is required; the identity with the natural-number binomial coefficient at $m\ge0$ is supplied by the closed-form theorem.
- **Checks:** reflow applied; precheck PASS (1 checked, 0 failing); rendercheck PASS; strict contract PASS (6 derivations, 17 deps, 8 boundary rows, 0 errors/0 warnings) after three mechanical repairs flagged by the gates: a self-citation of step 1.1 removed, duplicate wikilinks inside [F3] deduplicated, and [F1] cited in step 1.2 (it had been uncontracted). Dependency levels recomputed: run clean, item stays level 17.
- **Decision:** `escalate`, confidence 1 — steps 1.1–2.1 consume the batch-9 escalated `thm-cohomology-projective-space-twisting-sheaves` (batch-7 `thm-affine-quasi-coherent-equivalence` chain). Receipt `research/frontier-36-complete-step3b-review-ex-hilbert-polynomial-projective-space.json`.
- **Next:** level 17, examples page `ex-upper-semicontinuity-jumping-h0`.

## Item checkpoint 60/62 — `ex-upper-semicontinuity-jumping-h0`

- **Claim/witness:** over $S=\operatorname{Spec}k[a]$, the rank-two bundle $\mathcal E$ on $X=\mathbb P^1_S$ glued from the frames $(u_0,v_0)$ over $U_0$ and $(u_1,v_1)$ over $U_1$ by $u_1=z^{-2}u_0$, $v_1=v_0+az^{-1}u_0$ (determinant $z^{-2}$, a unit) is locally free of finite rank, finitely presented and $S$-flat, sits in $0\to\mathcal O_X(-2)\to\mathcal E\to\mathcal O_X\to0$ with extension cocycle $a\,x_0^{-1}x_1^{-1}$ (off-diagonal entry $az^{-1}$ in the frame $x_0^{-2}$ of $\mathcal O_X(-2)|_{U_0}$), and satisfies $h^0(\mathcal E_{(a)})=1$ at the origin and $h^0(\mathcal E_u)=0$ for every $u\ne(a)$ (closed points $\lambda\ne0$ and the generic point), so $h^0$ jumps up at the origin, matching upper semicontinuity with strict sublevel set $S\smallsetminus\{(a)\}$.
- **Authoring:** steps 1.1–1.5 and boundary 2.1. The fibre computation is done directly: a global section of the glued bundle is a pair $(a_1u_0+b_1v_0,\ c_1u_1+d_1v_1)$ with $a_1,b_1\in\kappa[z]$, $c_1,d_1\in\kappa[z^{-1}]$; rewriting in one frame gives $b_1=d_1$ and $a_1=z^{-2}c_1+\lambda z^{-1}b_1$, and $\kappa[z]\cap\kappa[z^{-1}]=\kappa$ forces $\dim=1$ (spanned by the $v$-section) for $\lambda=0$ and $\dim=0$ for $\lambda\ne0$.
- **Scaffold audit/repair:** the scaffolded LES route of the strategy was replaced by the direct chart computation, because the identification of the connecting map $\delta_u$ with multiplication by the extension class is not a library theorem (recorded as an obligation in [F5]). Deps expanded from the scaffolded 3 to 24 (gluing theorem and datum, charts and basic sections, locally free/flat/finite-presentation conventions, residue fields, AC/DC). `cor-upper-semicontinuity-cohomology-dimension` and `thm-long-exact-sequence-sheaf-cohomology` are retained and cited in [F5]/[F6] as consistency checks (upward jump; kernel–cokernel description of $\delta_u$).
- **Reconciliation with checkpoint 54:** this item is the supplier quoted in prose by `rem-base-change-is-not-automatic`; the claim there, $h^0(\mathcal E_{(a)})=1$ and $h^0(\mathcal E_u)=0$ for $u\ne(a)$, matches this Statement in content, and that consumer deliberately did not wikilink the later example — the missing edge is a Step-4 reconciliation item, not a defect in either file.
- **Checks:** reflow unchanged; precheck PASS (1 checked, 0 failing); rendercheck PASS; strict contract PASS (6 derivations, 24 deps, 8 boundary rows, 0 errors/0 warnings). Dependency levels recomputed: run clean, item stays level 17.
- **Decision:** `escalate`, confidence 1 — steps 1.1–1.5 consume the batch-9 escalated `cor-upper-semicontinuity-cohomology-dimension` (and through it the perfect-complex chain and the batch-7 `thm-affine-quasi-coherent-equivalence` obligation); the [F5] connecting-map obligation is recorded. Receipt `research/frontier-36-complete-step3b-review-ex-upper-semicontinuity-jumping-h0.json`.
- **Next:** level 18, `thm-hilbert-polynomial-degree-support-dimension`.

## Item checkpoint 61/62 — `thm-hilbert-polynomial-degree-support-dimension`

- **Claim/convention:** for coherent $\mathcal F$ on $X$ projective over $k$ with the fixed embedding, $\deg P_{\mathcal F}=\dim\operatorname{Supp}\mathcal F$, where $\deg 0=-\infty$ and $\dim\varnothing=-\infty$, so $\mathcal F=0$ gives $-\infty$ on both sides and $\mathcal F\ne0$ has a Hilbert polynomial of **exact** degree $\dim\operatorname{Supp}\mathcal F$ with nonzero leading coefficient. Empty $X$, $n=0$, finite/infinite $k$ included.
- **Authoring:** steps 1.1–1.6 and boundary 2.1, by induction on $d=\dim\operatorname{Supp}\mathcal F$ after reduction to infinite $k$. Base $d=0$: the hyperplane cokernel vanishes, so $P_{\mathcal F}$ is constant; positivity comes from [F6] (eventual global generation of the coherent pushforward $(i_*\mathcal F)(m)$ on $\mathbb P^n_k$ for $m\gg0$; a nonzero globally generated module has a nonzero section, and $H^0(X,\mathcal F(m))\cong H^0(\mathbb P^n_k,(i_*\mathcal F)(m))$ by the projection identity), combined with $P_{\mathcal F}(m)=h_{\mathcal F}(m)$ for $m\gg0$ from the level-17 theorem. Step $d\ge1$: $\dim\operatorname{Supp}\mathcal G'=d-1$ and $P_{\mathcal F}(m)-P_{\mathcal F}(m-1)=P_{\mathcal G'}(m)$; the finite-difference algebra with $\deg P_{\mathcal G'}=d-1$ exact forces $\deg P_{\mathcal F}=d$ (leading coefficient $a/d$). Step 1.6: arbitrary $k$ reduces to $K=k(t)$ with $\dim\operatorname{Supp}\mathcal F_K=\dim\operatorname{Supp}\mathcal F$ (`lem-support-dimension-preserved-field-extension`) and $P_{\mathcal F_K}=P_{\mathcal F}$.
- **Scaffold audit/repair:** the scaffolded base-case strategy "finite support gives vanishing positive cohomology and twisting preserves local lengths" was **not used**: the library records no such suppliers, and the positive-section route through global generation is the actual argument. Deps expanded from the scaffolded 5 to 41, adding the global-generation chain, the support-dimension and base-change suppliers, the twist exactness items and the finite-difference algebra [F8]. [F7] restates the twist/base-change compatibility obligation (checkpoints 48/49/52/54/57).
- **Checks:** reflow applied; precheck PASS (1 checked, 0 failing); rendercheck PASS; strict contract PASS (7 derivations, 41 deps, 8 boundary rows, 0 errors/0 warnings). Dependency levels recomputed: run clean, item stays level 18.
- **Decision:** `escalate`, confidence 1 — steps 1.1–1.6 consume the batch-9 escalated `thm-hilbert-polynomial-coherent-sheaf`, `lem-serre-vanishing-induction-hyperplane` and `lem-proper-cohomology-field-extension` (batch-7 `thm-affine-quasi-coherent-equivalence` chain). Receipt `research/frontier-36-complete-step3b-review-thm-hilbert-polynomial-degree-support-dimension.json`.
- **Next:** level 18, examples page `ex-flat-family-constant-euler-variable-h0-h1` (last item).

## Item checkpoint 62/62 — `ex-flat-family-constant-euler-variable-h0-h1`

- **Claim/witness:** for the rank-two $S$-flat bundle $\mathcal E$ of `ex-upper-semicontinuity-jumping-h0` on $\mathbb P^1_S$ over $S=\operatorname{Spec}k[a]$: $(h^0,h^1)(\mathcal E_{(a)})=(1,1)$ at the origin and $(h^0,h^1)(\mathcal E_u)=(0,0)$ at every other point (closed points $\lambda\ne0$ and the generic point); $\chi(\mathcal E_u)=0$ on every fibre — constant, although both $h^0$ and $h^1$ jump, so the locally-constant-Euler-characteristic corollary cannot be strengthened to local constancy of individual $h^q$.
- **Authoring:** steps 1.1–1.5 and boundary 2.1. The long exact sequence of $0\to\mathcal O(-2)\to\mathcal E_u\to\mathcal O\to0$ has outer terms $H^0(\mathcal O(-2))=0$, $H^0(\mathcal O)=\kappa(u)$, $H^1(\mathcal O(-2))=\kappa(u)$, $H^1(\mathcal O)=0$; the connecting map $\delta_u$ is multiplication by $a(u)$ between one-dimensional spaces, hence zero at the origin and an isomorphism elsewhere, giving $\ker\delta_u$ and $\operatorname{coker}\delta_u$ of dimensions $1,1$ and $0,0$ respectively. The Euler characteristics $1-1$ and $0-0$ agree with `cor-euler-characteristic-locally-constant-flat-proper-family` applied to the proper finitely presented family with the finitely presented $S$-flat module $\mathcal E$.
- **Scaffold audit/repair:** deps expanded from the scaffolded 3 to 13; added `thm-long-exact-sequence-sheaf-cohomology`, the Euler-characteristic conventions, the flat/finite-presentation hypotheses, residue fields and `def-axiom-of-choice`/`def-dependent-choice`. The scaffolded dep `ex-cohomology-o-d-projective-line-all-d` is used at [F2].
- **Checks:** reflow applied; precheck PASS (1 checked, 0 failing); rendercheck PASS; strict contract PASS (6 derivations, 13 deps, 8 boundary rows, 0 errors/0 warnings). Dependency levels recomputed: run clean, item stays level 18.
- **Decision:** `escalate`, confidence 1 — steps 1.1–1.5 consume the batch-9 escalated `ex-upper-semicontinuity-jumping-h0` and `cor-euler-characteristic-locally-constant-flat-proper-family` (batch-7 `thm-affine-quasi-coherent-equivalence` chain and the perfect-complex limit obligations); the [F3] connecting-map obligation is carried from checkpoint 60. Receipt `research/frontier-36-complete-step3b-review-ex-flat-family-constant-euler-variable-h0-h1.json`.
- **Next:** all 62 dispatch items plus the local supplier `lem-flat-sheaf-sections-flat-over-base` are authored; final gates and the dispatch report follow.

## Dispatch close — final gates, decision refresh and handoff

- **Date:** 2026-09-29. Every check below was re-run against the final on-disk
  state, after the last item, contract and manifest edit.
- **Scope:** all 62 dispatch items on pair A
  `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`
  (51 items) and pair B `...-examples` (11 items), plus the local supplier
  `lem-flat-sheaf-sections-flat-over-base`; 63 item files, 63 proof-contract
  entries, one coverage file, one pages manifest, one cross-batch input.

### Completed IDs (62 dispatch items + 1 local supplier)

A page (52, the last being the local supplier):
`lem-affine-open-containing-component-generics`,
`lem-cohomology-base-change-finite-free-criterion`,
`lem-ringed-space-module-sheaves-enough-injectives`,
`thm-cohomological-dimension-noetherian-scheme`, `def-higher-direct-image-sheaf`,
`lem-higher-direct-image-local-section-formula`,
`lem-affine-qc-cech-unit-ideal-exact`,
`lem-relative-projective-space-universally-closed`,
`thm-qc-sheaf-affine-higher-cohomology-vanishes`,
`def-twist-quasi-coherent-sheaf-projective`,
`lem-principal-open-cover-qc-acyclic-intersections`,
`lem-support-dimension-preserved-field-extension`,
`thm-affine-morphism-higher-direct-images-qc-vanish`,
`thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`,
`lem-affine-morphism-cohomology-pushforward`,
`lem-coherent-devissage-one-generic-generator`,
`lem-higher-direct-image-affine-localization`,
`lem-projective-space-cech-monomial-complex`,
`lem-schematic-closure-and-dense-agreement`,
`lem-serre-vanishing-induction-hyperplane`,
`thm-cohomological-dimension-projective-n-space`,
`def-base-change-map-cohomology`, `lem-chow-lemma-proper-noetherian`,
`lem-closed-immersion-cohomology-pushforward`,
`lem-eventual-global-generation-coherent-twists`,
`thm-cohomology-projective-space-twisting-sheaves`,
`cor-h0-projective-space-o-d-homogeneous-polynomials`,
`cor-intermediate-cohomology-o-d-projective-space-vanishes`,
`cor-top-cohomology-projective-space-o-d`,
`lem-noetherian-approximation-proper-fp-flat-sheaf`,
`lem-projective-coherent-cohomology-finite-and-vanishing`,
`lem-projective-hypersurface-cohomology-sequence`,
`lem-graded-section-module-finite-projective`, `thm-serre-vanishing`,
`thm-proper-pushforward-coherent`,
`lem-proper-flat-cohomology-perfect-complex`,
`rem-proper-cohomology-finiteness-needs-coherence`,
`thm-serre-finiteness-projective-cohomology`,
`cor-projective-cohomology-finite-dimensional-field`,
`lem-proper-flat-fp-cohomology-perfect-complex`,
`def-euler-characteristic-coherent-sheaf`,
`lem-proper-cohomology-field-extension`, `thm-cohomology-and-base-change`,
`cor-connected-projective-variety-h0-o`,
`cor-euler-characteristic-locally-constant-flat-proper-family`,
`cor-upper-semicontinuity-cohomology-dimension`,
`def-hilbert-function-sheaf-projective`,
`lem-euler-characteristic-additive-short-exact`,
`rem-base-change-is-not-automatic`, `thm-hilbert-polynomial-coherent-sheaf`,
`thm-hilbert-polynomial-degree-support-dimension`, and the local supplier
`lem-flat-sheaf-sections-flat-over-base`.

B page (11): `cex-affine-vanishing-fails-non-qc-sheaf`,
`cex-fixed-affine-cover-nonseparated-intersections`,
`ex-projective-zero-space-cohomology`,
`cex-proper-finiteness-fails-noncoherent`,
`ex-cech-cocycle-projective-line-o-minus-two`,
`ex-hypersurface-structure-sheaf-cohomology`,
`ex-cohomology-o-d-projective-line-all-d`,
`cex-h0-not-euler-characteristic-before-serre-vanishing`,
`ex-hilbert-polynomial-projective-space`,
`ex-upper-semicontinuity-jumping-h0`,
`ex-flat-family-constant-euler-variable-h0-h1`.

### Final decision state (engine `itemDecision` / `checkStep3`, 2026-09-29)

- **9 items close** with current non-owner decisions:
  `lem-affine-open-containing-component-generics` (accept),
  `lem-cohomology-base-change-finite-free-criterion` (repaired),
  `lem-ringed-space-module-sheaves-enough-injectives` (accept),
  `lem-eventual-global-generation-coherent-twists` (accept),
  `def-higher-direct-image-sheaf` (repaired),
  `lem-higher-direct-image-local-section-formula` (repaired),
  `lem-affine-qc-cech-unit-ideal-exact` (repaired),
  `thm-cohomological-dimension-noetherian-scheme` (repaired),
  `lem-relative-projective-space-universally-closed` (repaired).
- **53 items are owner-held escalations**: the 50 recorded during authoring
  plus three recorded at close — `lem-projective-space-cech-monomial-complex`
  (statement-level citation of the escalated `def-twist-quasi-coherent-sheaf-projective`; the Čech monomial proof itself uses only
  `def-twisting-sheaf-proj` and `lem-proj-associated-sheaf-basic-sections`),
  `lem-higher-direct-image-affine-localization` (steps 2.1/3.1/6.1 use the
  escalated `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`;
  the declared `lem-principal-open-cover-qc-acyclic-intersections` is escalated
  and uncited in the proof body), and `def-base-change-map-cohomology`
  (steps 1.1/1.2/2.1 use the now-escalated
  `lem-higher-direct-image-affine-localization`). Each receipt names supplier,
  consumer and consuming step.
- **One addition**: `lem-flat-sheaf-sections-flat-over-base` is a
  fully authored local supplier created in this dispatch; by the dispatch rule
  for additions it carries no Step-3b self-review receipt and is certified from
  the engine's post-author baseline comparison.
- **Close-time refresh (10 receipts):** the seven closed items above (other
  than the two level-0 items) were re-audited and re-recorded because their
  earlier receipt `sha256` no longer matched the current transitive inputs
  (batch-manifest refresh and sibling suppliers authored after the original
  records); item content is unchanged and the gate battery above is green.
  The three escalations were added as described. No item was re-authored.

### Escalation roots for owner reconciliation

The 53 batch-9 escalations reduce to six roots (computed over the current
dependency graph):

1. `thm-qc-sheaf-affine-higher-cohomology-vanishes` — its supplier
   `thm-affine-quasi-coherent-equivalence` (batch 7) is now **authored and
   engine-closed (accept)**; this escalation base is stale and the owner may
   re-record the root and its batch-9 dependents (the largest chain: affine
   vanishing → Čech comparison → higher-direct-image localization → the
   projective-space cohomology items).
2. `def-twist-quasi-coherent-sheaf-projective` — its supplier
   `lem-tensor-qc-modules-quasi-coherent` (batch 7) is now **authored and
   engine-closed (accept)**; escalation base stale.
3. `thm-qc-ideal-closed-subscheme-correspondence-complete` (batch 7) — its
   batch-5 supplier `lem-closed-immersion-affine-quotient-and-base-change` is
   now **authored with a current repaired decision (engine-closed)**;
   the batch-7 owner should re-record (a non-owner cannot).
4. `lem-coherent-devissage-one-generic-generator` — its supplier
   `thm-coherent-sheaves-abelian-noetherian-scheme` (batch 7) is now
   **authored and engine-closed (accept)**; escalation base stale.
5. `lem-support-dimension-preserved-field-extension` — its supplier
   `lem-pullback-qc-module-quasi-coherent` (batch 7) is now **authored and
   engine-closed (accept)**; escalation base stale. **Receipt defect:** the
   recorded `dependencies` array (and reason) name
   `lem-pullback-qc-modules-quasi-coherent`, which exists nowhere; the correct
   id is the singular form. The owner should correct the id when re-recording.
6. `lem-noetherian-approximation-proper-fp-flat-sheaf` — **genuinely open**:
   its steps 1.3–1.6 consume descent/limit inputs (D1) Stacks Limits
   32.10.1–32.10.2, (D2) 32.10.3/32.10.6, (D3) 32.10.4 with Algebra
   10.168.1 (tag 02JO) and (D4) filtered-union Noetherian approximation that
   are not library items. Consumers
   `lem-proper-flat-fp-cohomology-perfect-complex` →
   `thm-cohomology-and-base-change` / `cor-upper-semicontinuity-cohomology-dimension`
   / `cor-euler-characteristic-locally-constant-flat-proper-family` stay
   blocked on this root.

### Checks actually run at close (final state)

- `precheck.mts` on the explicit 63 item paths: **57 checked, 0 failing**
  (the four definition items without numbered steps — `def-higher-direct-image-sheaf`,
  `def-twist-quasi-coherent-sheaf-projective`, `def-euler-characteristic-coherent-sheaf`,
  `def-hilbert-function-sheaf-projective` — and the two remarks are not
  proof-bearing; `def-base-change-map-cohomology` has numbered construction
  steps and is checked).
- `rendercheck.mjs` on the same 63 paths: **OK**, no math/link/delimiter
  problems.
- `proof-contract.mjs --strict --items <all 63>`:
  **63/63 items, 0 errors, 1 warning** — the non-fatal, pre-existing
  `shotgun-bracket` warning on `lem-affine-open-containing-component-generics`
  step 4.2. This run also verified the refreshed F7 citation quote in
  `lem-schematic-closure-and-dense-agreement` (see repairs below).
- `content-policy.mjs research/frontier-36-complete-batch-9.pages.json`:
  **63 scoped items, 0 errors, 0 warnings**.
- `coverage-checklist.mjs research/frontier-36-complete-batch-9.coverage.json`:
  **1 page, 46 harvested results, 0 errors, 0 warnings**.
- `validate-plan.mjs research/plan-spec.json`: **OK** — declared page order
  acyclic and consistent, no item-level cycles/forward references/B-page
  dependencies/unresolved ids among the 1241 pages with item lists.
- `item-dependency-levels.mjs check --run frontier-36-complete`:
  **974 items, 60 pages, maximum level 18, exit 0**.
- `depcheck.mjs --json`: 21,773 items run-wide, **64 errors / 280 warnings,
  all pre-existing and none touching any batch-9 id or the local supplier**
  (global exit 1 is unrelated published debt).
- `step3-decisions` engine view: run-wide 974 items / 841 accepted / 133 open
  at the final read (sibling batches were still writing decisions, so the
  run-wide figure moves; the batch-9 figures below are stable);
  batch-9 as stated above (9 closed, 53 owner-held escalations, 1 addition).

### Local suppliers and repairs at close

- **Local supplier:** `lem-flat-sheaf-sections-flat-over-base` (sections of an
  `S`-flat sheaf over an affine open of the base are flat; Stacks 01U4 and
  Algebra 00HT), used by `lem-proper-flat-cohomology-perfect-complex` for the
  flatness of the Čech terms.
- **Contract quote refresh:** the F7 quote in
  `lem-schematic-closure-and-dense-agreement` no longer occurred in
  `thm-qc-ideal-closed-subscheme-correspondence-complete` after that batch-7
  Statement gained the wikilink `[[def-quasi-coherent-ideal-sheaf]]`; the quote
  was refreshed to the current Statement text (mathematical content unchanged),
  restoring strict contract 0 errors.
- **Per-item scaffold repairs** are recorded in checkpoints 1–62; the main
  classes are: dangling dependency ids replaced (checkpoint 2), scaffold
  strategies replaced by the actual arguments (checkpoints 4, 6, 7, 11–14,
  44–47, 57–62), unused or unauthored scaffold dependencies dropped when the
  proof does not need them (checkpoints 7, 12, 13), and step/dep expansion with
  the suppliers actually used.
- **Reverted intermediate edit (process note, no net change):** a trial removal
  of the unused general-twist citation in
  `lem-projective-space-cech-monomial-complex` was reverted after it was shown
  to invalidate `dependency_level` labels in 16 items across two pairs
  (batch-9 projective items plus the batch-16 Serre-duality chain). The final
  manifests keep consistent levels and the level check is green.

### Cross-batch dependency input (batch 9)

The batch input
`research/frontier-36-complete-batch-9.cross-batch-dependencies.json` was
completed from its earlier 89 rows to **357 rows covering every declared
cross-batch edge of the pair** (355 item edges + 2 page edges), and the derived
frontier ledger was refreshed (`refresh` 2026-09-29). Statuses: **329 verified,
8 open, 20 removed**. The 20 `removed` rows record scaffold dependencies that
were dropped or replaced during authoring (they are withdrawn, not silently
deleted). The 8 open rows are: six availability-only item edges whose suppliers
are authored and accepted but whose consumers never cite them in the labelled
body text (`lem-graded-section-module-finite-projective` /
`lem-proper-cohomology-field-extension` (three) /
`lem-proper-flat-cohomology-perfect-complex` /
`thm-serre-finiteness-projective-cohomology` → `def-quasi-coherent-module-scheme`
etc.), one owner-held escalation consumer
(`lem-schematic-closure-and-dense-agreement` → root 3), and the batch-7 A-page
prerequisite edge (36 of 37 items closed, one item still escalated).
The batch-8 A-page prerequisite edge is verified (38/38 items closed).

### Published concerns (read-only; for the canonical ledger and the owner)

1. `thm-scheme-theoretic-image-quasi-compact-morphism` (published) — step 2.1
   asserts that the localisations of the kernel ideal give the corresponding
   kernels on principal opens without the localisation-exactness argument;
   consumed by `lem-chow-lemma-proper-noetherian` steps 1.6/1.7. Confidence
   high (justification defect); no counterexample to the statement was found.
   Repair strategy: insert the omitted localisation-exactness step (the
   argument already used in `lem-schematic-closure-and-dense-agreement`) or
   re-point the consumer at the direct proof.
2. `thm-quasi-coherent-ideal-closed-subscheme-correspondence` (published) and
   `thm-affine-closed-immersions-quotient-rings` (published) — same
   affine-quotient gap family; deliberately not used by any batch-9 item.
   `def-quasi-coherent-ideal-sheaf` (published) — deps lack the
   associated-sheaf existence used by its route.
3. `thm-segre-line-bundle-external-tensor` (batch 8, draft) — its accept
   receipt (2026-09-28T15:25Z) no longer matches current inputs (engine:
   "current item audit required"); consumed by `lem-chow-lemma-proper-noetherian`
   step 1.9 — the batch-8 author must refresh the receipt.
4. `thm-qc-ideal-closed-subscheme-correspondence-complete` (batch 7, draft) —
   escalation now stale (root 3); the batch-7 owner should re-record.
5. Batch-16 `lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space`
   — its escalation cites `lem-graded-section-module-finite-projective` as
   unauthored; that supplier is now authored (batch 9, escalated for its own
   chain). Flag as a stale escalation for Step 4.
6. Batch-9 `thm-proper-pushforward-coherent` and
   `ex-projective-zero-space-cohomology` — escalate receipts hash-stale after
   content-policy repairs; owner re-audit at Step 4.
7. Batch-9 `rem-base-change-is-not-automatic` quotes in prose the example
   `ex-upper-semicontinuity-jumping-h0` without a wikilink; the example is now
   authored and its Statement matches the quoted claim ($h^0=1$ at the origin,
   $h^0=0$ elsewhere). The missing edge is an intentional Step-4
   reconciliation item, not a defect in either item.

### Residual proof obligations recorded for the owner (exact)

- 48 `lem-proper-cohomology-field-extension`: naturality of the Čech comparison
  under a morphism of spaces (Stacks 02KH against 02KG), no library item.
- 49 `thm-cohomology-and-base-change` [F5]: the geometric horizontal arrow for
  the naturality in $A'$ (steps 1.3/1.4/1.6/1.7).
- 50 `cor-euler-characteristic-locally-constant-flat-proper-family`: statement
  repair recorded — finitely presented replaces coherent (flat structure sheaf
  clause via free of rank one).
- 52 `def-hilbert-function-sheaf-projective`: pullback of an invertible sheaf is
  invertible (no separate library statement).
- 53 `lem-euler-characteristic-additive-short-exact`: $k$-linearity of the long
  exact sequence (compatibility of the scalar action).
- 56 `cor-connected-projective-variety-h0-o` [F5]: the degree-zero base-change
  map is a unital ring homomorphism.
- 57 `thm-hilbert-polynomial-coherent-sheaf` [F7]/[F8]: projection identity for
  closed immersions; twist/base-change compatibility and pullback monoidality
  for all twists.
- 60 `ex-upper-semicontinuity-jumping-h0` [F5]: the connecting map
  $\delta_u$ is multiplication by the extension class (not a library theorem;
  used only as a consistency check in that item).
- 61 `thm-hilbert-polynomial-degree-support-dimension` [F7]: the same
  twist/base-change compatibility obligation, restated.
- 62 `ex-flat-family-constant-euler-variable-h0-h1` [F3]: the connecting-map
  identification carried from checkpoint 60.

### Pre-splice plan mismatches

None. `validate-plan` is OK, the item-dependency-level check is green, and the
cross-batch input covers every declared edge. The only manifest-level anomaly
found during the close (a dependency-level drift under a trial dependency edit)
was eliminated by reverting that edit; no provenance or certification stamps
were touched, `--owner` was never used, and no other pair's items, pages or
manifests were edited (the shared derived frontier ledger was only regenerated
through the standard `refresh` merge).
