# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-28",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "d",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-a-category-with-enough-injectives-but-not-enough-projectives]: cex-a-category-with-enough-injectives-but-not-enough-projectives: current gpt-5.6-terra rejection has no exact Alpha outcome for context 55",
      "output": "level-coverage --judge-only: 424/424 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 64 unadjudicated, 0 open fatal, 139 adjudicated rejection(s) closed nonfatally; legacy gate counter 424/424 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-a-category-with-enough-injectives-but-not-enough-projectives]: cex-a-category-with-enough-injectives-but-not-enough-projectives: current gpt-5.6-terra rejection has no exact Alpha outcome for context 55295a1264656f497ed332247d1600dd357ffdd71a649a32b1396a775e0678f5\nERROR judge-adjudication-missing [cex-a-closed-subspace-need-not-have-a-best-approximation]: cex-a-closed-subspace-need-not-have-a-best-approximation: current gpt-5.6-terra rejection has no exact Alpha outcome for context 64b43e2f5beaf62c7e2b990e85f03ea4fbc7dec9e6687115a3ee5aa5afc49e75\nERROR judge-adjudication-missing [cor-completion-commutes-with-finite-quotients-and-submodules]: cor-completion-commutes-with-finite-quotients-and-submodules: current gpt-5.6-terra rejection has no exact Alpha outcome for context 348e7b5221dd237b7b31c0fd7fcead9bf25dc9fe2979c77346a5b747972e4ffa\nERROR judge-adjudication-missing [cor-finite-flat-noetherian-modules-are-projective]: cor-finite-flat-noetherian-modules-are-projective: current gpt-5.6-terra rejection has no exact Alpha outcome for context de2f4b9dc06cf221cf47337c9ab78fec3fb5ac7748b31ade7bcc97de95c0d49a\nERROR judge-adjudication-missing [cor-flat-quotients-and-idempotent-ideals]: cor-flat-quotients-and-idempotent-ideals: current gpt-5.6-terra rejection has no exact Alpha outcome for context aea53c64591c59b3ab22475700f9be1cd83f4c6fd4b57ffddcac5a043178ee48\nERROR judge-adjudication-missing [cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations]: cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0998be64860a86691344604688f272458beaffa1dd0d3089ebd4c5b7ae692c10\nERROR judge-adjudication-missing [cor-parameter-ideal-multiplicity-positive]: cor-parameter-ideal-multiplicity-positive: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89261a069435a68dde0bc7668060d6175054b20aa9be1e03d1015713398184d7\nERROR judge-adjudication-missing [def-hilbert-samuel-multiplicity]: def-hilbert-samuel-multiplicity: current gpt-5.6-terra rejection has no exact Alpha outcome for context d998bfc366560867614670001008b2e9b839d246c1126496918a95d5d46542f4\nERROR judge-adjudication-missing [def-profinite-completion-of-an-abstract-group]: def-profinite-completion-of-an-abstract-group: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4e2c8fd94b3a57a9584dfe32f1b6a2de7a79e16ee74944080d89d020a22ce56b\nERROR judge-adjudication-missing [def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]: def-secant-and-tangent-direction-maps-of-an-euclidean-embedding: current gpt-5.6-terra rejection has no exact Alpha outcome for context f352d1a03f8e0dbb392ca475a603270b083fcdc64a9a6c147e756726ac59be84\nERROR judge-adjudication-missing [def-tubular-neighbourhood-of-an-embedded-submanifold]: def-tubular-neighbourhood-of-an-embedded-submanifold: current gpt-5.6-terra rejection has no exact Alpha outcome for context ad505013e15547729d2ee57e006b8a1a817fd081ec5aaeb0679151e9c21e5388\nERROR judge-adjudication-missing [ex-bertrand-finite-range-verification]: ex-bertrand-finite-range-verification: current gpt-5.6-terra rejection has no exact Alpha outcome for context 43d1ec9eb8464dab31d1a10be1d1f19b69f0e6d90ade40e79372556903ba2d0d\nERROR judge-adjudication-missing [ex-completion-not-exact-without-finiteness]: ex-completion-not-exact-without-finiteness: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4dee727447a05f659cb5701157220396e2c83e2251c898f09201806674c88040\nERROR judge-adjudication-missing [ex-completion-of-a-domain-not-a-domain]: ex-completion-of-a-domain-not-a-domain: current gpt-5.6-terra rejection has no exact Alpha outcome for context 626ef488910e5c3025366cd307eebd8330bed9106a3e5a80670a9ddcb01ad013\nERROR judge-adjudication-missing [ex-coordinate-projections-and-inclusions-on-product-banach-spaces]: ex-coordinate-projections-and-inclusions-on-product-banach-spaces: current gpt-5.6-terra rejection has no exact Alpha outcome for context 81ae81ad3e0e0fc315470564239d80e9f6570932731a3f70e33b6136e628ade1\nERROR judge-adjudication-missing [ex-equivalent-adic-filtrations]: ex-equivalent-adic-filtrations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1da4c7513da246a1e87f3ed0e6ceab77d1bea9d7c0a1c32533b8b497e6863967\nERROR judge-adjudication-missing [ex-evaluation-functional-on-c-of-k]: ex-evaluation-functional-on-c-of-k: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89ba0cae799fa8a73abbb07fdc3d7b97600043d025737fdc7c7675414058b7c4\nERROR judge-adjudication-missing [ex-faithfully-flat-principal-open-cover]: ex-faithfully-flat-principal-open-cover: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0815361cfff3b17b1c4d4ad556199d43a8b199b6b6f62dc6322c3b20f08d1037\nERROR judge-adjudication-missing [ex-first-and-second-mertens-numerics]: ex-first-and-second-mertens-numerics: current gpt-5.6-terra rejection has no exact Alpha outcome for context a9d14cb36453d20082851c09104b80d1ebe73faa87bfbff3cd625daab7c0514f\nERROR judge-adjudication-missing [ex-fraction-field-flat-not-projective]: ex-fraction-field-flat-not-projective: current gpt-5.6-terra rejection has no exact Alpha outcome for context f94ede48c2035cd7dc885bdc1046608316b51cebda49a2bcd8238c6d4363affa\nERROR judge-adjudication-missing [ex-projecting-a-space-curve-can-create-a-double-point]: ex-projecting-a-space-curve-can-create-a-double-point: current gpt-5.6-terra rejection has no exact Alpha outcome for context df4c99548dcde4aeb82196108dc99d2b8dc15b6561f71ca7893dc3851deb262b\nERROR judge-adjudication-missing [ex-semilocal-adic-completion]: ex-semilocal-adic-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context e5295da44ff7691d8ac2552f50857ec9d0313fbc7173e82d96288a3b6aff0a87\nERROR judge-adjudication-missing [fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding]: fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7673e0e0fe18ee835054a37c49df2d90631f2685fc54009c590cd94b2990ca6d\nERROR judge-adjudication-missing [fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects]: fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects: current gpt-5.6-terra rejection has no exact Alpha outcome for context b373c54a2a072427b1fe89a5d4b8a0f7efe7c264c558994e51df87489f4822b7\nERROR judge-adjudication-missing [fs-the-horseshoe-middle-resolution-is-canonical]: fs-the-horseshoe-middle-resolution-is-canonical: current gpt-5.6-terra rejection has no exact Alpha outcome for context 44a4f955c66b5b9f942c9a25e88d42c1fe8e89d0517112f6b4b85b08c4540ebe\nERROR judge-adjudication-missing [lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands]: lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0817876b17cc91e0abe5739713a0d668425ed2de5c95c96a92c3dce55f359cce\nERROR judge-adjudication-missing [lem-a-sufficiently-long-generator-extension-iteration-is-injective]: lem-a-sufficiently-long-generator-extension-iteration-is-injective: current gpt-5.6-terra rejection has no exact Alpha outcome for context bcb779f0db80b2864086a9bc211d4a4bd690253a9d37b10fc5bf1f0f3e3b8cd7\nERROR judge-adjudication-missing [lem-chebyshev-functions-prime-power-comparison]: lem-chebyshev-functions-prime-power-comparison: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5d876f95b5d75b6f0a88c4efcd92f862d3ca63b193a909de6462890b36a9075f\nERROR judge-adjudication-missing [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89a271981fc4282cb7398858d1e5e0b19e2c7409c1651645b1dcdcce75f1b6cd\nERROR judge-adjudication-missing [lem-one-step-extension-of-a-partial-injective-resolution]: lem-one-step-extension-of-a-partial-injective-resolution: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8aea39127c30585e4a54312bb12f7418e5c6f5ebd42cd2e1a1f298fdc64ba680\nERROR judge-adjudication-missing [lem-rees-module-finiteness-and-stable-filtrations]: lem-rees-module-finiteness-and-stable-filtrations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 153dd147e3212cff40290568ac5f2f357b21e1a808f0d2ef7b57406af32cd804\nERROR judge-adjudication-missing [lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses]: lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4a355002beb9f6a211758b8525ce901ce4a6b43225b0841c21b91ebe819a150d\nERROR judge-adjudication-missing [lem-the-one-step-generator-map-is-a-functorial-monomorphism]: lem-the-one-step-generator-map-is-a-functorial-monomorphism: current gpt-5.6-terra rejection has no exact Alpha outcome for context ff7e3ef919cd47236a7114d9f14c0338d85aa35c05de23456280b91a739bc401\nERROR judge-adjudication-missing [lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps]: lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps: current gpt-5.6-terra rejection has no exact Alpha outcome for context ecd61452c7eaf5f9f35b1ebb5bbbe4f993c83c65152c03bab7af20e3f393827b\nERROR judge-adjudication-missing [lem-weighted-von-mangoldt-harmonic-estimate]: lem-weighted-von-mangoldt-harmonic-estimate: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9e70072ce19cccb7c2e35176265850921ff5699420346ef8df7f287d37fcc1eb\nERROR judge-adjudication-missing [prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy]: prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy: current gpt-5.6-terra rejection has no exact Alpha outcome for context 426eefaa4a9e9a6f79660fcae7b171f43a87a568619f75c1b1e717509286b03b\nERROR judge-adjudication-missing [prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]: prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm: current gpt-5.6-terra rejection has no exact Alpha outcome for context b6ce31362ee948b3faecd416a3845e17beb2c65eb42bf2a87ea681fece8c16f5\nERROR judge-adjudication-missing [prop-relative-transversality-preserves-a-map-on-a-closed-good-region]: prop-relative-transversality-preserves-a-map-on-a-closed-good-region: current gpt-5.6-terra rejection has no exact Alpha outcome for context b11fa6a62051a7a3993f6860befab66d358b01d3856f50bfdbd65e173451ed80\nERROR judge-adjudication-missing [thm-additivity-of-hilbert-samuel-multiplicity]: thm-additivity-of-hilbert-samuel-multiplicity: current gpt-5.6-terra rejection has no exact Alpha outcome for context 285d392a1189ff289ff13fed93a79279122ccdeb4152fe76085f466e10084d91\nERROR judge-adjudication-missing [thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p]: thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4851ff35769ae232cb1ab673c45eaf9719cc48e1961568f2877046b9b53c4e4f\nERROR judge-adjudication-missing [thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]: thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity: current gpt-5.6-terra rejection has no exact Alpha outcome for context cebdf5468d780fef7649a4c8fba5fd7f0abaac5237828a76d586bc07751296b4\nERROR judge-adjudication-missing [thm-complete-nakayama-lemma]: thm-complete-nakayama-lemma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 15f2dc518d951f9613b7efd136d90c37f92072fa6341e407296d96720ffb275a\nERROR judge-adjudication-missing [thm-completion-as-extension-of-scalars]: thm-completion-as-extension-of-scalars: current gpt-5.6-terra rejection has no exact Alpha outcome for context d0c2c2515a2c88e9fb844708dc3a1706384c07709eaa6db228a14d94f59d8815\nERROR judge-adjudication-missing [thm-completion-is-exact-on-finite-modules]: thm-completion-is-exact-on-finite-modules: current gpt-5.6-terra rejection has no exact Alpha outcome for context f2783e13c2557a63cb5b9361433ba0277e8ded83cbf3557a19f70f2c4713ad0c\nERROR judge-adjudication-missing [thm-dimension-and-parameters-for-modules]: thm-dimension-and-parameters-for-modules: current gpt-5.6-terra rejection has no exact Alpha outcome for context 648e68d595f31c954057c53b26703a9b9754da5362eb39b0ff91799ed3ac8284\nERROR judge-adjudication-missing [thm-euclidean-tubular-neighbourhood-theorem]: thm-euclidean-tubular-neighbourhood-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 288c5f4abe0fb6d39e5bfa2c7ee13ef31da4535f1250f813af492cae866f549a\nERROR judge-adjudication-missing [thm-existence-of-hilbert-samuel-polynomial]: thm-existence-of-hilbert-samuel-polynomial: current gpt-5.6-terra rejection has no exact Alpha outcome for context c49a230fb41ccdf443918263c362d1b9817f3b94f019ae6f3c36b70584da8d17\nERROR judge-adjudication-missing [thm-faithful-flatness-of-jacobson-adic-completion]: thm-faithful-flatness-of-jacobson-adic-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context 46f87a7de1dd3643257552726ccf6dba9c9bc2f0c0c4b9d96bc1ea3acb1048e2\nERROR judge-adjudication-missing [thm-flatness-of-noetherian-completion]: thm-flatness-of-noetherian-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8c1ef80c4742961cc007e0a5cc00c2a061cb10db574c9a474d59a0fc2915f06f\nERROR judge-adjudication-missing [thm-hilbert-samuel-dimension-theorem]: thm-hilbert-samuel-dimension-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2b94eda76d5efe376287d3eb82495a2f946b22a8ff2c5a6c01b8fbc928e00ac1\nERROR judge-adjudication-missing [thm-injective-comparison-map-exists]: thm-injective-comparison-map-exists: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7725b65266c4004b2cdc239a925617d1160dd5ee716bb0bc2cfd065d636ccbae\nERROR judge-adjudication-missing [thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]: thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy: current gpt-5.6-terra rejection has no exact Alpha outcome for context b46a8d848ac7b05c3d9439c827aa7c5c00c4fb322db4289caf25cdc05c712609\nERROR judge-adjudication-missing [thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]: thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8f7e3b5b05096245e815b46e31454b673263b65dba2e2dff2481eba9dfb2137a\nERROR judge-adjudication-missing [thm-kernel-and-universal-property-of-adic-completion]: thm-kernel-and-universal-property-of-adic-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context e5882c562eed4430b4f3ecaaeb3072b58a6c3e7d082b644c4169a8c826e9b59d\nERROR judge-adjudication-missing [thm-local-criterion-for-flatness-ideal-form]: thm-local-criterion-for-flatness-ideal-form: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3188cfc3b0fd0699f909f62577010bef5145a3032106a6357447f019446f796d\nERROR judge-adjudication-missing [thm-multiplicity-under-reduction-by-a-parameter]: thm-multiplicity-under-reduction-by-a-parameter: current gpt-5.6-terra rejection has no exact Alpha outcome for context 61355c19ee1b0a4da49145c9b2d9a047759b04f83035c7744328af839f7b3eaf\nERROR judge-adjudication-missing [thm-noetherianity-of-adic-completion]: thm-noetherianity-of-adic-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context acf241131353d915dc2219a63f4dfb4cf931bba2997a4c243ec9058aa48f1720\nERROR judge-adjudication-missing [thm-polynomial-reductions-transfer-p-np-and-conp-membership]: thm-polynomial-reductions-transfer-p-np-and-conp-membership: current gpt-5.6-terra rejection has no exact Alpha outcome for context e57d4fefd712afdcfe178d7c0674f342c379181fc305d16c31c96ae8647dc9a1\nERROR judge-adjudication-missing [thm-profinite-completion-is-functorial]: thm-profinite-completion-is-functorial: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7821ad73f851d777ce486b89a6bbcd1c2b5b7702d10a09003160ffcced77f864\nERROR judge-adjudication-missing [thm-the-double-braiding-center-is-symmetric]: thm-the-double-braiding-center-is-symmetric: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6153ea0ad61d6607e745c91440b582956fca8974c5d1223164806f3efcf8e817\nERROR judge-adjudication-missing [thm-third-mertens-theorem-for-primes]: thm-third-mertens-theorem-for-primes: current gpt-5.6-terra rejection has no exact Alpha outcome for context b2f0c75472179dc4ad10d3a8b48875126a27e32ce1cc82ad94d4ac9b40fb7b23\nERROR judge-adjudication-missing [thm-topological-characterisation-of-profinite-groups]: thm-topological-characterisation-of-profinite-groups: current gpt-5.6-terra rejection has no exact Alpha outcome for context 50d55f9a94a7ff1f82253d14f6ba846de01313dcc94a55e77aa941cf6b2a6d17\nERROR judge-adjudication-missing [thm-universal-property-of-profinite-completion]: thm-universal-property-of-profinite-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context fe384081b4492bedba48cbd551b915cb19ba36b51eff4dbca97dbf1fe7d09ddb\nERROR judge-adjudication-missing [thm-weak-whitney-proper-embedding-theorem]: thm-weak-whitney-proper-embedding-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9931ee06d3140fed9732f64e8c74cb3cba695e05d4fb6555edda56ed37456fde\n",
      "named_ids": [
        "cex-a-category-with-enough-injectives-but-not-enough-projectives",
        "cex-a-closed-subspace-need-not-have-a-best-approximation",
        "cor-completion-commutes-with-finite-quotients-and-submodules",
        "cor-finite-flat-noetherian-modules-are-projective",
        "cor-flat-quotients-and-idempotent-ideals",
        "cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations",
        "cor-parameter-ideal-multiplicity-positive",
        "def-hilbert-samuel-multiplicity",
        "def-profinite-completion-of-an-abstract-group",
        "def-secant-and-tangent-direction-maps-of-an-euclidean-embedding",
        "def-tubular-neighbourhood-of-an-embedded-submanifold",
        "ex-bertrand-finite-range-verification",
        "ex-completion-not-exact-without-finiteness",
        "ex-completion-of-a-domain-not-a-domain",
        "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
        "ex-equivalent-adic-filtrations",
        "ex-evaluation-functional-on-c-of-k",
        "ex-faithfully-flat-principal-open-cover",
        "ex-first-and-second-mertens-numerics",
        "ex-fraction-field-flat-not-projective",
        "ex-projecting-a-space-curve-can-create-a-double-point",
        "ex-semilocal-adic-completion",
        "fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding",
        "fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects",
        "fs-the-horseshoe-middle-resolution-is-canonical",
        "lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands",
        "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
        "lem-chebyshev-functions-prime-power-comparison",
        "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
        "lem-one-step-extension-of-a-partial-injective-resolution",
        "lem-rees-module-finiteness-and-stable-filtrations",
        "lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses",
        "lem-the-one-step-generator-map-is-a-functorial-monomorphism",
        "lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps",
        "lem-weighted-von-mangoldt-harmonic-estimate",
        "prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy",
        "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
        "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
        "thm-additivity-of-hilbert-samuel-multiplicity",
        "thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p",
        "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity",
        "thm-complete-nakayama-lemma",
        "thm-completion-as-extension-of-scalars",
        "thm-completion-is-exact-on-finite-modules",
        "thm-dimension-and-parameters-for-modules",
        "thm-euclidean-tubular-neighbourhood-theorem",
        "thm-existence-of-hilbert-samuel-polynomial",
        "thm-faithful-flatness-of-jacobson-adic-completion",
        "thm-flatness-of-noetherian-completion",
        "thm-hilbert-samuel-dimension-theorem",
        "thm-injective-comparison-map-exists",
        "thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy",
        "thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected",
        "thm-kernel-and-universal-property-of-adic-completion",
        "thm-local-criterion-for-flatness-ideal-form",
        "thm-multiplicity-under-reduction-by-a-parameter",
        "thm-noetherianity-of-adic-completion",
        "thm-polynomial-reductions-transfer-p-np-and-conp-membership",
        "thm-profinite-completion-is-functorial",
        "thm-the-double-braiding-center-is-symmetric",
        "thm-third-mertens-theorem-for-primes",
        "thm-topological-characterisation-of-profinite-groups",
        "thm-universal-property-of-profinite-completion",
        "thm-weak-whitney-proper-embedding-theorem"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-a-category-with-enough-injectives-but-not-enough-projectives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-closed-subspace-need-not-have-a-best-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-completion-commutes-with-finite-quotients-and-submodules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finite-flat-noetherian-modules-are-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-flat-quotients-and-idempotent-ideals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-parameter-ideal-multiplicity-positive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-hilbert-samuel-multiplicity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-profinite-completion-of-an-abstract-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-secant-and-tangent-direction-maps-of-an-euclidean-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-tubular-neighbourhood-of-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-bertrand-finite-range-verification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-completion-not-exact-without-finiteness",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-completion-of-a-domain-not-a-domain",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-equivalent-adic-filtrations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-evaluation-functional-on-c-of-k",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-faithfully-flat-principal-open-cover",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-first-and-second-mertens-numerics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-fraction-field-flat-not-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-projecting-a-space-curve-can-create-a-double-point",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-semilocal-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-horseshoe-middle-resolution-is-canonical",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-chebyshev-functions-prime-power-comparison",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-one-step-extension-of-a-partial-injective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rees-module-finiteness-and-stable-filtrations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-one-step-generator-map-is-a-functorial-monomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-weighted-von-mangoldt-harmonic-estimate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-additivity-of-hilbert-samuel-multiplicity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complete-nakayama-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-as-extension-of-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-is-exact-on-finite-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dimension-and-parameters-for-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-euclidean-tubular-neighbourhood-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-existence-of-hilbert-samuel-polynomial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-faithful-flatness-of-jacobson-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-flatness-of-noetherian-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hilbert-samuel-dimension-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-injective-comparison-map-exists",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-kernel-and-universal-property-of-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-local-criterion-for-flatness-ideal-form",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-multiplicity-under-reduction-by-a-parameter",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-noetherianity-of-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-polynomial-reductions-transfer-p-np-and-conp-membership",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-profinite-completion-is-functorial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-double-braiding-center-is-symmetric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-third-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-topological-characterisation-of-profinite-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-property-of-profinite-completion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-weak-whitney-proper-embedding-theorem",
      "scope": "run",
      "owner": "b"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-polynomial-reductions-transfer-p-np-and-conp-membership",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": [
    {
      "id": "lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses",
      "model": "gpt-5.6-terra",
      "context_sha256": "4a355002beb9f6a211758b8525ce901ce4a6b43225b0841c21b91ebe819a150d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-polynomial-reductions-transfer-p-np-and-conp-membership",
      "model": "gpt-5.6-terra",
      "context_sha256": "e57d4fefd712afdcfe178d7c0674f342c379181fc305d16c31c96ae8647dc9a1",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **d**, run `frontier-28`

You are the group Alpha for batches **9**, **11**: 3 A/B pair(s), 6 page(s), 47 item(s), 2 open rejection(s) over 2 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-28-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `leaf-reducibility-and-wonderful-families` | A | combinatorics | 425 | `small-graph-erdos-hajnal-consequences`, `iterative-restriction-and-comb-extraction-lemmas` |
| 9 | `leaf-reducibility-and-wonderful-families-examples` | B | combinatorics | 426 | `leaf-reducibility-and-wonderful-families` |
| 11 | `diagonalization-and-the-halting-problem` | A | computability-theory | 603 | `decidable-recognizable-and-enumerable-languages` |
| 11 | `diagonalization-and-the-halting-problem-examples` | B | computability-theory | 604 | `diagonalization-and-the-halting-problem` |
| 11 | `p-np-conp-and-polynomial-reductions` | A | computability-theory | 619 | `resource-bounds-and-machine-invariance` |
| 11 | `p-np-conp-and-polynomial-reductions-examples` | B | computability-theory | 620 | `p-np-conp-and-polynomial-reductions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `leaf-reducibility-and-wonderful-families` — Leaf Reducibility and Wonderful Families (7 item(s))

- `def-wonderful-finite-family` · definition — Wonderful finite graph families
- `lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge` · lemma — A vertex mixed on an anticonnected set yields opposite adjacency on a nonedge
- `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph` · lemma — Mixed anticonnected blocks lift pattern obstructions to the ambient graph
- `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses` · lemma — The auxiliary pattern then has a polynomial-size clique or stable set
- `lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union` · lemma — A polynomial homogeneous set in the auxiliary pattern yields a $y^4$-restricted union
- `lem-star-or-special-vertex-obstructions-force-wonderfulness` · lemma — Star and special-vertex obstructions force wonderfulness
- `lem-the-e-graph-and-the-bird-graph-are-wonderful` · lemma — The $E$-graph and the Bird graph are wonderful

### `leaf-reducibility-and-wonderful-families-examples` — Leaf Reducibility and Wonderful Families — Examples (2 item(s))

- `ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path` · example — The $E$-graph sits inside a one-subdivided star and deletes to the five-vertex path
- `ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit` · example — A six-vertex witness graph makes the Bird criterion explicit

### `diagonalization-and-the-halting-problem` — Diagonalization and the Halting Problem (15 item(s))

- `def-turing-machine-acceptance-problem` · definition — The Turing-machine acceptance problem $A_{TM}$
- `thm-machine-acceptance-is-recognizable` · theorem — The Turing-machine acceptance problem is recognizable
- `lem-diagonal-self-application-machine` · lemma — A hypothetical decider for $A_{TM}$ yields a diagonal self-application machine
- `thm-machine-acceptance-is-undecidable` · theorem — The Turing-machine acceptance problem is undecidable
- `def-halting-problem` · definition — The halting problem $HALT_{TM}$
- `thm-halting-is-recognizable-and-undecidable` · theorem — The halting problem is recognizable and undecidable
- `cor-nonhalting-is-not-recognizable` · corollary — The complement of the halting problem is not recognizable
- `thm-an-unrecognizable-language-exists` · theorem — There exists a language that is not recognizable
- `def-busy-beaver-function` · definition — The step-count busy beaver function relative to the chosen machine coding
- `thm-busy-beaver-dominates-every-total-computable-function` · theorem — The busy beaver function eventually dominates every total computable function
- `cor-busy-beaver-is-not-computable` · corollary — The busy beaver function is not computable
- `thm-totality-is-not-recognizable` · theorem — Halting on every input is not recognizable
- `thm-machine-equivalence-is-undecidable` · theorem — Language equivalence of Turing machines is undecidable
- `fs-undecidable-means-no-instance-can-be-answered` · false-statement — FALSE: undecidable means no individual instance can be answered
- `fs-diagonalization-needs-literal-source-self-reading` · false-statement — FALSE: diagonalization requires a machine to read its physical source text

### `diagonalization-and-the-halting-problem-examples` — Diagonalization and the Halting Problem: Examples and Counterexamples (3 item(s))

- `ex-diagonal-self-application-machine` · example — Building the diagonal machine against a hypothetical acceptance decider
- `ex-machine-equivalence-is-undecidable` · example — Reducing halting to language equivalence by a machine that either accepts everything or loops forever
- `cex-undecidable-means-no-instance-can-be-answered` · counterexample — An immediate-accept machine gives an easy yes-instance inside an undecidable language

### `p-np-conp-and-polynomial-reductions` — P, NP, coNP, and Polynomial Reductions (17 item(s))

- `def-p` · definition — The class P
- `def-polynomially-balanced-verifier` · definition — Polynomial-time verifiers with polynomially bounded certificates
- `def-np-by-verifiers` · definition — The class NP via polynomial-time verifiers
- `thm-verifier-and-nondeterministic-definitions-of-np-agree` · theorem — The verifier and nondeterministic definitions of NP agree
- `def-conp` · definition — The class coNP
- `prop-p-is-contained-in-np-intersection-conp` · proposition — $P \subseteq NP \cap coNP$
- `def-polynomial-time-many-one-reduction` · definition — Polynomial-time many-one reductions
- `lem-polynomial-reductions-compose` · lemma — Polynomial-time many-one reductions compose
- `thm-polynomial-reductions-transfer-p-np-and-conp-membership` · theorem — Polynomial-time many-one reductions transfer P-, NP-, and coNP-membership
- `def-np-hard-and-np-complete` · definition — NP-hard and NP-complete languages
- `prop-an-np-complete-language-in-p-implies-p-equals-np` · proposition — An NP-complete language in P forces $P=NP$
- `def-search-version-of-an-np-relation` · definition — The search problem attached to an NP verifier
- `thm-sat-search-reduces-to-sat-decision` · theorem — SAT search polynomial-time Turing reduces to SAT decision
- `def-exp-and-nexp` · definition — The classes EXP and NEXP
- `prop-np-is-contained-in-pspace-and-pspace-in-exp` · proposition — $NP \subseteq PSPACE \subseteq EXP$
- `fs-np-means-not-polynomial` · false-statement — FALSE: NP means not polynomial-time solvable
- `fs-np-complete-means-known-not-in-p` · false-statement — FALSE: NP-complete means proven not to lie in P

### `p-np-conp-and-polynomial-reductions-examples` — P, NP, coNP, and Polynomial Reductions: Examples and Counterexamples (3 item(s))

- `ex-p-is-contained-in-np-intersection-conp` · example — An even-length language sits in P, hence also in NP and coNP
- `ex-np-is-contained-in-pspace-and-pspace-in-exp` · example — Lexicographic certificate search uses polynomial space and exponential time
- `cex-np-means-not-polynomial` · counterexample — A regular parity language refutes 'NP means not polynomial'

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses` | `leaf-reducibility-and-wonderful-families` | gpt-5.6-terra | `4a355002beb9f6a211758b8525ce901ce4a6b43225b0841c21b91ebe819a150d` |
| `thm-polynomial-reductions-transfer-p-np-and-conp-membership` | `p-np-conp-and-polynomial-reductions` | gpt-5.6-terra | `e57d4fefd712afdcfe178d7c0674f342c379181fc305d16c31c96ae8647dc9a1` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-28`

Read `research/frontier-28-judge-closure.json`,
`research/frontier-28-judge.jsonl`,
`research/frontier-28-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-28-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-28-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-28-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
