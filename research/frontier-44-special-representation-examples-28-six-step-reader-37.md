# Reader 37 — batch 37

Independent review completed for the current assigned carriers. The assigned inventory is the two representation-theory pages and ten items below. No acceptance or judge stamp is issued.

## Assigned inventory and observed baseline

- `library/representation-theory/equivariant-constructible-perverse-foundations.md` (A): opened full page prose.
- `items/lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap.md`: opened full carrier; baseline raw SHA-256 `aad8f629f8597f0df68ddfdfa4e590eb23c1e64969c7b0c31e531d76b23a346c`.
- `items/def-equivariant-constructible-derived-category-for-complex-algebraic-varieties.md`: opened full carrier; baseline raw SHA-256 `1ac45a7ea9d9f99b4853d96c0e00e673ddd270b2d8a7b982eab0ae95b31afff4`.
- `items/lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences.md`: opened full carrier; baseline raw SHA-256 `ecc7fa53841792e9b6121378b31e9bb1f08f413e973197f09d41f878656ee55a`.
- `items/lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom.md`: opened full carrier; baseline raw SHA-256 `12169fc273ee5ad783af7d028f60b0d550f7858d39d98deeb4672c3703a674ee`.
- `items/lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom.md`: opened full carrier; baseline raw SHA-256 `ecc314f1e55198da01aaf8e0f3b422fe50def85ea67c94202aadcb70fecd6d3a`.
- `items/thm-constructible-six-functors-proper-base-change-and-verdier-duality.md`: opened full carrier; baseline raw SHA-256 `3e9c05c5b876a60947b5f86ae37fe3e13250e942de9f787280442dbf7668c63b`.
- `items/lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative.md`: opened full carrier; baseline raw SHA-256 `77ae89ec8eb22137aebc0821c4718dfe641e38033bada40713ff6794061d88e5`.
- `items/thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes.md`: opened full carrier; baseline raw SHA-256 `cecd653ebb4401ff433c029dedd09b5a40f19f03270a07f560fb33a91b32422d`.
- `items/thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars.md`: opened full carrier; baseline raw SHA-256 `c1a06b67948c3cd0185d1b75d8d2f67184fd8e40477bc4f394d919d794de1a1b`.
- `library/representation-theory/equivariant-constructible-perverse-foundations-examples.md` (B): opened full page prose.
- `items/ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite.md`: opened full carrier; baseline raw SHA-256 `56823ecb388573379740df55e36f5fe7c72f34613d6694f6759a7a308f31c887`.

## Review and repairs

The current authored statements and arguments were checked independently of the author contracts. Suppliers were used by their actual hypotheses, rather than their accepted scaffold descriptions. The final within-batch dependency pass was frame gap, category definition, acyclic-fibre lemma, Stiefel comparison, Cartesian model, six operations, normalized perverse bridge, equivariant perverse theorem, Ext theorem, point example. All ten assigned carriers were edited; neither assigned page required a prose edit.

- **Category definition — Definition, action nerve and Cartesian cohomology.** Corrected a monotone operator's direction to `Z_m -> Z_p`, and its sheaf comparison to inverse image of `F_p` mapping to `F_m`. Removed the nonexistent augmentation to `X`: at simplicial degree one the two faces are projection and action, so for a nontrivial action no such augmentation can satisfy both identities. Distinguished augmentation over a principal quotient and stated the domains of face maps. The actual Cartesian category agrees with the independently opened Čech supplier and Bernstein–Lunts Appendix B1–B4. Corrected the contract's false assertion that a trivial action on a point makes the nerve constant or removes equivariant Ext.

- **Frame gap — old Proof 1.2, 2.1, 4.1, 5.1; Facts F6/F8.** The original regular-value proof defined `f(A)=A*A-I` but took the level `I`, and its differential calculation doubled the prescribed Hermitian matrix. Used `f(A)=A*A` and computed the differential exactly. Replaced the unspecified “projection restricts to an isomorphism” chart by a fixed complement basis, continuous projections and Gram–Schmidt. Replaced the false connected-base/path-connected-total assertion with an elementary path-lifting argument for a path-connected base. Simplified the sphere-bundle induction: the previous factor's gap reaches `d+1`, and all positive total degrees through `d-1` on E2 vanish. Started the product induction at one factor, avoiding an empty minimum. Corrected the product characteristic-map description. Added the exact constant-sheaf/singular comparison supplier and its metric local hypotheses, and the published AC-to-DC/countable-choice supplier required by the compactness and partition inputs. The final new step is 6.1, with conclusion 7.1. No top-fibre monodromy constancy is needed.

- **Acyclic-fibre lemma — Statement, F5/F6, Proof 3.2 and 4.3.** Required the bundle map to be algebraic: a merely continuous product bundle does not preserve algebraic constructibility. Removed the unsupported assertion that algebraic constructibility follows from an arbitrary analytic cover. Added the proved canonical t-structure, rather than relying on its definition for orthogonality. Corrected the direction of the truncated unit and removed false vanishing assertions about adjacent boundary cohomology; the exact segment with zero outer terms suffices. The Hom bound remains `m <= b+r-a`, retract closure includes equality, and extension closure still needs `r >= a-b+1`.

- **Stiefel comparison — Statement, F1/F5/F6/F7, Proof 1.1, 3.1 and 6.1; Remarks.** Specified the compatible right frame/diagonal action and equivalent left nerve action. Constructed the regular pivot-minor principal and quotient charts explicitly. Distinguished the principal quotient from the associated bundle's projection to the Grassmannian. Established that evaluation of a simplicial injective is injective using its exact left adjoint, so derived pushforward is actually levelwise. Constructed the inverse image object `E=tau^{<=a}Rp_*C` and proved its Cartesianity by the levelwise counits and surjective pullback; ordinary frame pullback data are therefore sufficient without assuming derived strictification. Used the actual canonical t-structure theorem. Corrected the trivial-group wording and the misleading global-splitting example and real/complex dimension explanation. The stabilization range and product-resolution coherence are preserved.

- **Cartesian model — F2 and Proof 2.3.** Added the actual finite common-refinement/conical supplier for constructible cone closure. In the telescope proof, the endomorphism `ip` is both invertible and idempotent (`ie=i`); hence it is already the identity. Replaced the unexplained adjustment of `p` with this direct splitting argument. Countable sums remain in the ambient sheaf category, and bounded Cartesian constructible cohomology puts the resulting summand back in the assigned category.

- **Equivariant six operations — new Proof 1.1 and 2.1, subsequent coherence/normalization steps.** Full faithfulness alone does not license transporting an arbitrary resolution operation: its output must first lie in the resolution image. Added a local smooth-base-change argument using the actual finite affine-cover/projective graph construction of the conical supplier and the proved open-inclusion/proper exchanges. Proved frame pullback compatibility for the resolution operations, including normalized duality, and obtained output amplitudes independent of the chosen resolution. Only then transported operations, adjunction maps and coherence on sufficiently large common product resolutions. Corrected the contract's empty-source case: a map from empty `X` does not make nonempty `Y_N` empty. The normalized twist remains exactly `omega_XN[-2 dim B_N]`, agreeing with Bernstein–Lunts 3.5.2.

- **Normalized perverse bridge — Proof 3.1/4.1 and concluding tags.** The original argument claimed perverse exactness before constructing the equivariant truncations. Now lift both outer objects and the complete truncation triangle first, for an arbitrary cutoff and with unshifted amplitudes independent of `N`; then prove orthogonality, boundedness, uniqueness and perverse exactness. Conservativity follows from the surjective frame pullbacks and restriction, without applying a stabilization bound to an arbitrary fixed small `N`. Kept the connected-fibre local-system argument, normalized shift `s_N=u_N-g`, projector threshold and both directions of simplicity. Included the final simplicity arguments in the concluding justification tags.

- **Equivariant perverse theorem — Statement and Proof 2.1/3.1.** Defined stratum inequalities on ordinary restriction so non-invariant constructibility strata do not require nonexistent equivariant stratum maps. Restricted equivariant open/closed gluing to invariant decompositions. Specified invariant supports/opens, the closed support pushforward and the open inclusion. Applied the intermediate-image construction to the heart input `L[dim Z]`, rather than first applying perverse degree zero to unshifted `L`. Proved the two boundary properties and both directions of the simple-object classification. This matches BBD 1.4.22–1.4.26 and Bernstein–Lunts 5.2.

- **Ext theorem — dependencies, F2/F5 and Proof 1.1/2.1.** Declared the conical supplier that extends the finite-polyhedral models to separated finite-type varieties and the ordinary coefficient-operation supplier. Declared the proved canonical Hom-vanishing theorem. Proved coefficient extension is perverse t-exact using support inequalities and duality for the lower aisle, before invoking uniqueness of truncation and preservation of intermediate-extension images. Kept degreewise finiteness, the precise negative-degree bound, Yoneda compatibility and the caveat about simplicity after field extension.

- **Point example — F3/F7 and Verification 1.2/2.1.** The cited definitions supplied no Schubert cell decomposition. Gave the explicit disk characteristic map `[v:sqrt(1-|v|^2)]`, its affine-chart inverse, and the compact-to-Hausdorff attaching-space argument. Added the actual singular/constant-sheaf comparison and explained `Hom(k_X,-)=Gamma(X,-)` in the injective derived model. Corrected the contract's purported `N=1` stabilization: the admitted comparison has `N>=2`; `P^0` is only the auxiliary cell base. The computation is still `k` in every nonnegative even degree, zero otherwise, so total Ext is infinite and forgetful restriction is not derived fully faithful.

All affected derivations, supplier citations and specified boundary rows in the batch proof-contract file were refreshed. No judge record was present in the observed assigned carriers; no judge, audit or acceptance record was added. New dependency edges are recorded in the item carriers and contracts. The assigned manifest and canonical plan were not edited.

## Opened dependency inventory

The following external item carriers were opened for their consumed Statement/Definition and conventions. This is not a recursive whole-library audit.

- `items/cor-compact-hausdorff-partitions-of-unity.md`
- `items/cor-euclidean-compactness-equivalence-chart.md`
- `items/cor-euclidean-spheres-are-path-connected.md`
- `items/cor-homology-of-spheres.md`
- `items/cor-kunneth-over-a-field.md`
- `items/cor-regular-level-set-local-graph-theorem.md`
- `items/def-algebraic-group-action-and-scheme-theoretic-stabilizer.md`
- `items/def-algebraically-constructible-complex-of-analytic-field-sheaves.md`
- `items/def-axiom-of-choice.md`
- `items/def-canonical-t-structure-on-a-derived-category.md`
- `items/def-canonical-truncation-of-a-complex.md`
- `items/def-classical-algebraic-prevariety-regular-maps-and-varieties.md`
- `items/def-compactly-supported-global-sections.md`
- `items/def-complex-projective-space-and-holomorphic-charts.md`
- `items/def-connected-space.md`
- `items/def-cw-complex-with-closure-finiteness-and-weak-topology.md`
- `items/def-derived-category-of-an-abelian-category.md`
- `items/def-derived-hom-in-the-bounded-setting.md`
- `items/def-direct-image-sheaf.md`
- `items/def-extension-by-zero-abelian-sheaf.md`
- `items/def-free-group-action.md`
- `items/def-geometric-realization-of-an-abstract-simplicial-complex.md`
- `items/def-immersion-submersion-and-constant-rank-map.md`
- `items/def-inverse-image-presheaf-and-sheaf.md`
- `items/def-invertible-matrix-and-general-linear-group.md`
- `items/def-locally-constant-sheaf-of-finite-rank.md`
- `items/def-locally-trivial-fiber-bundle.md`
- `items/def-module-on-ringed-space.md`
- `items/def-path-connected.md`
- `items/def-principal-g-bundle-and-associated-fiber-bundle.md`
- `items/def-sheaf-hom.md`
- `items/def-sheaf-on-topological-space.md`
- `items/def-sheaf-tensor-product.md`
- `items/def-simplicial-object-and-simplicial-commutative-ring.md`
- `items/def-smooth-manifold.md`
- `items/def-smooth-partition-of-unity-subordinate-to-an-open-cover.md`
- `items/def-stiefel-space-grassmannian-and-tautological-bundle.md`
- `items/lem-analytic-constructible-sheaves-admit-coherent-six-operations.md`
- `items/lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions.md`
- `items/lem-complex-algebraic-stratifications-have-finite-conical-cochain-models.md`
- `items/lem-field-module-sheaves-have-injective-derived-models.md`
- `items/lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model.md`
- `items/lem-localized-cone-triangles-satisfy-tr-one-through-tr-three.md`
- `items/lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology.md`
- `items/lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent.md`
- `items/lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure.md`
- `items/prop-compact-spaces-are-paracompact.md`
- `items/thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace.md`
- `items/thm-canonical-truncations-fit-a-distinguished-triangle.md`
- `items/thm-cellular-cochains-compute-cohomology-with-local-coefficients.md`
- `items/thm-choice-implies-dependent-implies-countable-choice.md`
- `items/thm-cohomological-serre-spectral-sequence.md`
- `items/thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations.md`
- `items/thm-gram-schmidt-orthonormalisation.md`
- `items/thm-inverse-direct-image-adjunction.md`
- `items/thm-numerable-fiber-bundles-are-hurewicz-fibrations.md`
- `items/thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes.md`
- `items/thm-sheaf-morphism-isomorphism-stalkwise.md`
- `items/thm-the-canonical-pair-is-a-t-structure.md`
- `items/thm-the-derived-category-inherits-a-triangulated-structure.md`
- `items/thm-universal-coefficient-theorem-for-cohomology-over-a-pid.md`
- `items/thm-verdier-duality-on-oriented-stratified-complex-varieties.md`

Additional proof reading included the full relevant arguments of the field-injective model, locally split Čech descent, constant-sheaf/singular comparison, ordinary analytic operation assembly and coherent exchange theorem; the conical supplier's local operations, finite affine descent and graph factorization; and the incidence, ordinary-perverse and smooth-pullback suppliers. The three last suppliers were reopened because concurrent producers changed their arguments during this review. The compatible-stratification theorem's exact quasi-projective Statement was opened to check the original smooth-pullback citation. Published canonical t-structure and AC implication proofs were opened in full. Other listed dependencies were checked at their consumed interfaces, without claiming independent complete proof audits.

## Outside-batch observations and current dispositions

Three defects were observed in draft suppliers outside this batch. None was edited by this reader. Their original raw source bytes were not retained; the historical observations below are not bound to a claimed pre-reader fingerprint. Current corrected bytes are recorded only as current reread evidence.

1. `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure` (current-run batch 36), original Proof 1.1/F3: it inferred that every compatible source stratum has the full relative dimension. A prescribed point stratum for a smooth curve-to-point map disproves that inference; the cited stratification theorem only gives smooth restrictions, and its stated domain was quasi-projective. **Current disposition:** the new 1.1 chooses full inverse-image strata, explicitly warns against arbitrary refinements, and handles finite affine covers. Reopened the full current carrier and checked its dimension, duality and reflection argument. The observed issue is resolved.

2. `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` (current-run batch 36), original Proof 3.1: it defined the intermediate image with unshifted `L`. For an identity open inclusion on a smooth curve, perverse degree zero of the unshifted constant sheaf is zero, so that construction cannot produce its intersection complex. **Current disposition:** new 3.2 uses a heart object and explicitly takes `M=L[e]`; new 3.1–3.4 give the kernel/image, boundary characterization, simple-local-system and finite-length arguments. Reopened the full current carrier. The observed shifted-input defect is resolved.

3. `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model` (current-run batch 32), original Proof 4.2/5.3: the product computation treated a bounded diagram complex as a sheaf in degree zero, and it inferred an all-sheaf isomorphism by calling the finitely many original open stars a neighbourhood basis. Those stars are not a basis for the realization topology. **Current disposition:** new 4.1 keeps all internal degrees and proves pushforward acyclicity on actual small Euclidean neighbourhoods; new 5.1 constructs the comparison termwise; new 4.2 explicitly distinguishes principal opens in the finite poset from neighbourhoods in the realization. Reopened the complete current argument in bounded chunks. The observed issues are resolved.

- Current reread raw SHA-256 for `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure`: `92b6e7b59a40dab4c2559ff372d7faa61f7c812127b9e7772115d6f5c15bc990`.
- Current reread raw SHA-256 for `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`: `5753341830e99ebfdd812e429060e1953d60c3419fe20f5d9d53c6f2e3ca1dde`.
- Current reread raw SHA-256 for `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`: `ff35f14af9893e780615b5c5bb9ec0e52c5b161533edfbeb9540aedcacf6cc7d`.

No uneditable current defect remains from these observations, so the findings JSON has an empty findings array. No potentially defective published item was confirmed in the consumed interfaces.

## Authoritative source evidence

The browser could not fetch the large BBD PDF and timed out on Bernstein–Lunts. Both original PDFs were subsequently downloaded directly and their relevant sections extracted with PyMuPDF. I read the relevant arguments rather than relying on search snippets.

- [Bernstein–Lunts, Part I](https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf): 1.9.1–1.9.3 and Appendix A2–A3 (unit/truncated-counit image criterion; the source uses a strict bound for extension closure); Appendix B1–B6 (simplicial Cartesian model and free quotient); 2.7.1–2.7.2 (finite resolutions and the point category); 3.1–3.6 (smooth-resolution functor transport, forgetful compatibility and normalized duality); 5.1–5.2 (restriction-defined perverse heart and shifted equivariant intersection complexes). The normalizing quotient-base twist, invariant open/support condition and simplicity conventions agree with the repaired items.
- [BBD, Faisceaux pervers](https://www.numdam.org/item/AST_1982__100__1_0.pdf): 1.4.10 and its complete recollement proof, 1.4.22–1.4.26 and their intermediate-image/boundary/simple-object argument, 2.1.3 and its finite-stratum induction, and 2.1.16–2.1.18 (duality normalization and the shifted local-system input). These settle the intermediate-extension input and t-structure conventions. This is section-specific reading, not a claim to have read the entire book.

Hatcher was not independently reopened. The frame gap and projective-space cells were checked by the explicit local proofs and the opened local topology suppliers, not by asserting an unperformed source check.

## Consumer checks

The union of old/current explicit dependency edges yields the same outside consumer closure for the repaired category definition and the clarified perverse Statement. The following outside carriers were opened for their claim and direct use of the affected interfaces. None uses the erroneous augmentation to `X` or non-invariant equivariant recollement. They use the preserved normalized duality, finite comparison ranges, Ext conventions, perverse concentration/simplicity, scalar comparison and idempotent splitting. Indirect representation-theory statements were checked for continued applicability of their inherited geometry interfaces; their independent KLR/global-basis arguments were not re-audited.

- `items/cex-specializing-v-to-one-forgets-graded-decomposition-information.md`: affected interface remains applicable; no focused repair required.
- `items/cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group.md`: affected interface remains applicable; no focused repair required.
- `items/cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero.md`: affected interface remains applicable; no focused repair required.
- `items/def-equivariant-borel-moore-homology-and-correspondence-convolution.md`: affected interface remains applicable; no focused repair required.
- `items/def-graded-adjustment-polynomials-in-positive-characteristic.md`: affected interface remains applicable; no focused repair required.
- `items/def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators.md`: affected interface remains applicable; no focused repair required.
- `items/ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition.md`: affected interface remains applicable; no focused repair required.
- `items/ex-equal-color-quiver-flag-correspondence-is-nilhecke.md`: affected interface remains applicable; no focused repair required.
- `items/ex-projective-perverse-decomposition-for-projective-space-to-a-point.md`: affected interface remains applicable; no focused repair required.
- `items/ex-projective-versus-simple-grothendieck-classes-in-a-small-block.md`: affected interface remains applicable; no focused repair required.
- `items/ex-signed-two-direction-multiedge-quiver-flag-crossing.md`: affected interface remains applicable; no focused repair required.
- `items/ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift.md`: affected interface remains applicable; no focused repair required.
- `items/lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports.md`: affected interface remains applicable; no focused repair required.
- `items/lem-cyclotomic-extension-of-scalars-respects-the-based-quotient.md`: affected interface remains applicable; no focused repair required.
- `items/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree.md`: affected interface remains applicable; no focused repair required.
- `items/lem-reduction-of-characteristic-zero-simple-modules-modulo-p.md`: affected interface remains applicable; no focused repair required.
- `items/lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus.md`: affected interface remains applicable; no focused repair required.
- `items/prop-qg8-categorification-transports-across-the-hecke-klr-bridge.md`: affected interface remains applicable; no focused repair required.
- `items/rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers.md`: affected interface remains applicable; no focused repair required.
- `items/thm-ariki-canonical-basis-theorem-in-characteristic-zero.md`: affected interface remains applicable; no focused repair required.
- `items/thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero.md`: affected interface remains applicable; no focused repair required.
- `items/thm-graded-specht-classes-realize-standard-fock-vectors.md`: affected interface remains applicable; no focused repair required.
- `items/thm-graded-specht-heads-classify-the-graded-simple-modules.md`: affected interface remains applicable; no focused repair required.
- `items/thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment.md`: affected interface remains applicable; no focused repair required.
- `items/thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology.md`: affected interface remains applicable; no focused repair required.
- `items/thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product.md`: affected interface remains applicable; no focused repair required.
- `items/thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations.md`: affected interface remains applicable; no focused repair required.
- `items/thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis.md`: affected interface remains applicable; no focused repair required.
- `items/thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis.md`: affected interface remains applicable; no focused repair required.
- `items/thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis.md`: affected interface remains applicable; no focused repair required.
- `items/thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis.md`: affected interface remains applicable; no focused repair required.
- `items/thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes.md`: affected interface remains applicable; no focused repair required.
- `items/thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution.md`: affected interface remains applicable; no focused repair required.

## Validation and page verdicts

- Reflow and precheck were run on each changed carrier. Final precheck results: nine proof-bearing carriers passed; the definition had zero proofs and zero failures. Initial phase-renumbering and forward-reference failures were corrected before the final successful checks.
- The final explicit batched `node tools/proof-layout.mjs` invocation covers all ten changed item paths after the last edits/reflow. Result: ten items, 61 numbered steps, zero defects.
- Scoped rendercheck covered all ten items and both assigned pages. Result: 12 files clean, with real KaTeX and renderer YAML parsing performed.
- All checks here are local formatting/rendering evidence, not independent mathematical acceptance or a workflow gate. An exploratory `rendercheck --help` invocation was cancelled because that tool treats unknown switches as a whole-corpus selection; no result from that cancelled invocation is claimed.
- **A page `equivariant-constructible-perverse-foundations`:** retained. Its summary matches the repaired construction, finite bounds, normalized operations and perverse/Ext claims; no page prose correction was necessary. The current reread supplier replacements close the observed outside proof defects.
- **B page `equivariant-constructible-perverse-foundations-examples`:** retained; prose was read without editing. Its numerical Ext summary follows from the repaired explicit projective-space computation.

## Handoff and limitations

No withdrawal is proposed, and no unresolved mathematical blocker was identified in the reviewed current arguments. The Step 3b lead receives ten item repairs and the updated batch contracts for independent adjudication. The engine owns manifest reconciliation and transitions; this reader did not alter another batch, page lists, B-page prose, published content, the plan, stamps or run state.

Coverage is the full assigned carriers/pages plus consumed dependency interfaces and the proof sections identified above. It is not an independent audit of every transitive supplier or the complete downstream representation-theory/decomposition-theorem literature. Concurrent supplier revisions required current rereading; historical supplier defects are recorded without pretending their old bytes were captured. Source books were read only at the exact listed sections.
