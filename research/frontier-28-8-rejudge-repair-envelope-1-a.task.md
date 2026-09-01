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
  "group": "a",
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
      "id": "cex-a-category-with-enough-injectives-but-not-enough-projectives",
      "scope": "run",
      "owner": "a"
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
      "id": "ex-equivalent-adic-filtrations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-faithfully-flat-principal-open-cover",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-fraction-field-flat-not-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-semilocal-adic-completion",
      "scope": "run",
      "owner": "a"
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
      "id": "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
      "scope": "run",
      "owner": "a"
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
      "id": "prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-additivity-of-hilbert-samuel-multiplicity",
      "scope": "run",
      "owner": "a"
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
    }
  ],
  "live_tuples": [
    {
      "id": "cex-a-category-with-enough-injectives-but-not-enough-projectives",
      "model": "gpt-5.6-terra",
      "context_sha256": "55295a1264656f497ed332247d1600dd357ffdd71a649a32b1396a775e0678f5",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cor-completion-commutes-with-finite-quotients-and-submodules",
      "model": "gpt-5.6-terra",
      "context_sha256": "348e7b5221dd237b7b31c0fd7fcead9bf25dc9fe2979c77346a5b747972e4ffa",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cor-finite-flat-noetherian-modules-are-projective",
      "model": "gpt-5.6-terra",
      "context_sha256": "de2f4b9dc06cf221cf47337c9ab78fec3fb5ac7748b31ade7bcc97de95c0d49a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cor-flat-quotients-and-idempotent-ideals",
      "model": "gpt-5.6-terra",
      "context_sha256": "aea53c64591c59b3ab22475700f9be1cd83f4c6fd4b57ffddcac5a043178ee48",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cor-parameter-ideal-multiplicity-positive",
      "model": "gpt-5.6-terra",
      "context_sha256": "89261a069435a68dde0bc7668060d6175054b20aa9be1e03d1015713398184d7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-hilbert-samuel-multiplicity",
      "model": "gpt-5.6-terra",
      "context_sha256": "d998bfc366560867614670001008b2e9b839d246c1126496918a95d5d46542f4",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-completion-not-exact-without-finiteness",
      "model": "gpt-5.6-terra",
      "context_sha256": "4dee727447a05f659cb5701157220396e2c83e2251c898f09201806674c88040",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-completion-of-a-domain-not-a-domain",
      "model": "gpt-5.6-terra",
      "context_sha256": "626ef488910e5c3025366cd307eebd8330bed9106a3e5a80670a9ddcb01ad013",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-equivalent-adic-filtrations",
      "model": "gpt-5.6-terra",
      "context_sha256": "1da4c7513da246a1e87f3ed0e6ceab77d1bea9d7c0a1c32533b8b497e6863967",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-faithfully-flat-principal-open-cover",
      "model": "gpt-5.6-terra",
      "context_sha256": "0815361cfff3b17b1c4d4ad556199d43a8b199b6b6f62dc6322c3b20f08d1037",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-fraction-field-flat-not-projective",
      "model": "gpt-5.6-terra",
      "context_sha256": "f94ede48c2035cd7dc885bdc1046608316b51cebda49a2bcd8238c6d4363affa",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-semilocal-adic-completion",
      "model": "gpt-5.6-terra",
      "context_sha256": "e5295da44ff7691d8ac2552f50857ec9d0313fbc7173e82d96288a3b6aff0a87",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects",
      "model": "gpt-5.6-terra",
      "context_sha256": "b373c54a2a072427b1fe89a5d4b8a0f7efe7c264c558994e51df87489f4822b7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-horseshoe-middle-resolution-is-canonical",
      "model": "gpt-5.6-terra",
      "context_sha256": "44a4f955c66b5b9f942c9a25e88d42c1fe8e89d0517112f6b4b85b08c4540ebe",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
      "model": "gpt-5.6-terra",
      "context_sha256": "bcb779f0db80b2864086a9bc211d4a4bd690253a9d37b10fc5bf1f0f3e3b8cd7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-one-step-extension-of-a-partial-injective-resolution",
      "model": "gpt-5.6-terra",
      "context_sha256": "8aea39127c30585e4a54312bb12f7418e5c6f5ebd42cd2e1a1f298fdc64ba680",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-rees-module-finiteness-and-stable-filtrations",
      "model": "gpt-5.6-terra",
      "context_sha256": "153dd147e3212cff40290568ac5f2f357b21e1a808f0d2ef7b57406af32cd804",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-the-one-step-generator-map-is-a-functorial-monomorphism",
      "model": "gpt-5.6-terra",
      "context_sha256": "ff7e3ef919cd47236a7114d9f14c0338d85aa35c05de23456280b91a739bc401",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps",
      "model": "gpt-5.6-terra",
      "context_sha256": "ecd61452c7eaf5f9f35b1ebb5bbbe4f993c83c65152c03bab7af20e3f393827b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy",
      "model": "gpt-5.6-terra",
      "context_sha256": "426eefaa4a9e9a6f79660fcae7b171f43a87a568619f75c1b1e717509286b03b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-additivity-of-hilbert-samuel-multiplicity",
      "model": "gpt-5.6-terra",
      "context_sha256": "285d392a1189ff289ff13fed93a79279122ccdeb4152fe76085f466e10084d91",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-complete-nakayama-lemma",
      "model": "gpt-5.6-terra",
      "context_sha256": "15f2dc518d951f9613b7efd136d90c37f92072fa6341e407296d96720ffb275a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-completion-as-extension-of-scalars",
      "model": "gpt-5.6-terra",
      "context_sha256": "d0c2c2515a2c88e9fb844708dc3a1706384c07709eaa6db228a14d94f59d8815",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-completion-is-exact-on-finite-modules",
      "model": "gpt-5.6-terra",
      "context_sha256": "f2783e13c2557a63cb5b9361433ba0277e8ded83cbf3557a19f70f2c4713ad0c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-dimension-and-parameters-for-modules",
      "model": "gpt-5.6-terra",
      "context_sha256": "648e68d595f31c954057c53b26703a9b9754da5362eb39b0ff91799ed3ac8284",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-existence-of-hilbert-samuel-polynomial",
      "model": "gpt-5.6-terra",
      "context_sha256": "c49a230fb41ccdf443918263c362d1b9817f3b94f019ae6f3c36b70584da8d17",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-faithful-flatness-of-jacobson-adic-completion",
      "model": "gpt-5.6-terra",
      "context_sha256": "46f87a7de1dd3643257552726ccf6dba9c9bc2f0c0c4b9d96bc1ea3acb1048e2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-flatness-of-noetherian-completion",
      "model": "gpt-5.6-terra",
      "context_sha256": "8c1ef80c4742961cc007e0a5cc00c2a061cb10db574c9a474d59a0fc2915f06f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-hilbert-samuel-dimension-theorem",
      "model": "gpt-5.6-terra",
      "context_sha256": "2b94eda76d5efe376287d3eb82495a2f946b22a8ff2c5a6c01b8fbc928e00ac1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-injective-comparison-map-exists",
      "model": "gpt-5.6-terra",
      "context_sha256": "7725b65266c4004b2cdc239a925617d1160dd5ee716bb0bc2cfd065d636ccbae",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy",
      "model": "gpt-5.6-terra",
      "context_sha256": "b46a8d848ac7b05c3d9439c827aa7c5c00c4fb322db4289caf25cdc05c712609",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-kernel-and-universal-property-of-adic-completion",
      "model": "gpt-5.6-terra",
      "context_sha256": "e5882c562eed4430b4f3ecaaeb3072b58a6c3e7d082b644c4169a8c826e9b59d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-local-criterion-for-flatness-ideal-form",
      "model": "gpt-5.6-terra",
      "context_sha256": "3188cfc3b0fd0699f909f62577010bef5145a3032106a6357447f019446f796d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-multiplicity-under-reduction-by-a-parameter",
      "model": "gpt-5.6-terra",
      "context_sha256": "61355c19ee1b0a4da49145c9b2d9a047759b04f83035c7744328af839f7b3eaf",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-noetherianity-of-adic-completion",
      "model": "gpt-5.6-terra",
      "context_sha256": "acf241131353d915dc2219a63f4dfb4cf931bba2997a4c243ec9058aa48f1720",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **a**, run `frontier-28`

You are the group Alpha for batches **2**, **3**, **8**: 4 A/B pair(s), 8 page(s), 134 item(s), 35 open rejection(s) over 35 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 2 | `rees-modules-artin-rees-and-hilbert-samuel-theory` | A | commutative-algebra | 111.021 | `krull-dimension-and-height-theorems-examples` |
| 2 | `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` | B | commutative-algebra | 111.022 | `rees-modules-artin-rees-and-hilbert-samuel-theory` |
| 2 | `flatness-and-faithful-flatness` | A | commutative-algebra | 111.023 | `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` |
| 2 | `flatness-and-faithful-flatness-examples` | B | commutative-algebra | 111.024 | `flatness-and-faithful-flatness` |
| 3 | `inverse-limits-and-noetherian-completion` | A | commutative-algebra | 111.025 | `flatness-and-faithful-flatness-examples` |
| 3 | `inverse-limits-and-noetherian-completion-examples` | B | commutative-algebra | 111.026 | `inverse-limits-and-noetherian-completion` |
| 8 | `projective-and-injective-resolutions` | A | homological-algebra | 365.045 | `long-exact-sequences-in-homology-examples` |
| 8 | `projective-and-injective-resolutions-examples` | B | homological-algebra | 365.046 | `projective-and-injective-resolutions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `rees-modules-artin-rees-and-hilbert-samuel-theory` — Rees Modules Artin Rees and Hilbert Samuel Theory (17 item(s))

- `def-graded-ring-and-graded-module` · definition — Nonnegatively graded rings and modules, homogeneous elements, and twists
- `def-hilbert-function-and-hilbert-series` · definition — The Hilbert function and formal Hilbert series of a graded module with finite-length pieces
- `thm-hilbert-serre-theorem` · theorem — A finite graded module over a standard graded algebra has rational Hilbert series and eventual polynomial growth
- `def-associated-graded-ring-and-module` · definition — The associated graded ring and associated graded module of an ideal-adic filtration
- `def-rees-algebra-and-rees-module` · definition — The Rees algebra of an ideal and the Rees module of a filtered module
- `lem-rees-module-finiteness-and-stable-filtrations` · lemma — Over a Noetherian ring, an ideal filtration is stable exactly when its Rees module is finite, and the Rees algebra is Noetherian
- `thm-artin-rees-lemma` · theorem — Artin-Rees controls intersections of submodules with high ideal powers
- `cor-induced-and-intrinsic-adic-filtrations-are-equivalent` · corollary — The filtration induced on a submodule is equivalent to its intrinsic ideal-adic filtration
- `thm-krull-intersection-theorem` · theorem — The Krull intersection is the $(1-a)$-torsion submodule, and it vanishes in the Jacobson-radical case
- `def-hilbert-samuel-function-and-polynomial` · definition — The Hilbert-Samuel function and eventual Hilbert-Samuel polynomial of a finite local module
- `thm-existence-of-hilbert-samuel-polynomial` · theorem — The Hilbert-Samuel function agrees eventually with a rational polynomial in binomial form
- `def-hilbert-samuel-multiplicity` · definition — Hilbert-Samuel multiplicity as the factorial-scaled leading coefficient
- `thm-hilbert-samuel-dimension-theorem` · theorem — The degree of the Hilbert-Samuel polynomial equals the dimension of the support
- `thm-dimension-and-parameters-for-modules` · theorem — For a finite module, the dimension is the least size of an ideal of definition, and such tuples are systems of parameters
- `thm-additivity-of-hilbert-samuel-multiplicity` · theorem — Hilbert-Samuel multiplicity is additive on short exact sequences at the top dimension
- `thm-multiplicity-under-reduction-by-a-parameter` · theorem — Modulo a parameter preserves the top Hilbert-Samuel multiplicity up to the finite-annihilator correction
- `cor-parameter-ideal-multiplicity-positive` · corollary — For a nonzero finite module and an ideal of definition, Hilbert-Samuel multiplicity is a positive integer

### `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` — Rees Modules Artin Rees and Hilbert Samuel Theory — Examples (7 item(s))

- `ex-hilbert-series-of-a-polynomial-ring` · example — The polynomial ring and a homogeneous quotient have the expected Hilbert series and Hilbert polynomial
- `ex-associated-graded-of-a-local-ring` · example — The associated graded ring of a regular local ring and of a cusp local ring can be computed explicitly
- `ex-artin-rees-intersection` · example — An explicit Artin-Rees number can be computed for a submodule inside a finite module
- `ex-krull-intersection-in-a-local-domain` · example — In a Noetherian local domain, the intersection of the powers of the maximal ideal is zero
- `ex-hilbert-samuel-polynomial-of-a-dvr` · example — A DVR has Hilbert-Samuel polynomial $n+1$ and multiplicity one
- `ex-hilbert-samuel-multiplicity-of-a-plane-curve` · example — The Hilbert-Samuel multiplicity of a plane-curve singularity is read from its associated graded ring
- `ex-hilbert-samuel-finite-length-case` · example — In dimension zero the Hilbert-Samuel polynomial is constant and equals the module length

### `flatness-and-faithful-flatness` — Flatness and Faithful Flatness (15 item(s))

- `thm-direct-sums-and-direct-summands-preserve-flatness` · theorem — Direct sums and direct summands of flat modules are flat
- `thm-localisations-are-flat` · theorem — Every localization is flat, and localizing a flat module preserves flatness
- `thm-flatness-is-local` · theorem — A module is flat if and only if all prime localizations are flat, equivalently all maximal localizations are flat
- `thm-equational-criterion-for-flatness` · theorem — The equational criterion characterizes flat modules by lifting finite relations on generators
- `cor-flat-quotients-and-idempotent-ideals` · corollary — If $R/I$ is flat then $I = I^2$, and for finitely generated $I$ this is equivalent to generation by an idempotent
- `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres` · theorem — For a flat module, faithful flatness is equivalent to detecting nonzero modules and residue fields
- `thm-faithfully-flat-ring-map-characterisations` · theorem — A flat ring map is faithfully flat exactly when it detects proper ideals and is surjective on spectra
- `cor-faithfully-flat-ring-maps-are-injective` · corollary — Every faithfully flat ring map is injective
- `thm-faithfully-flat-descent-of-flatness` · theorem — Flatness descends along faithfully flat base change
- `cor-faithfully-flat-descent-of-finite-generation` · corollary — Finite generation descends along faithfully flat ring maps
- `thm-local-criterion-for-flatness-ideal-form` · theorem — For an $R$-finite module over a local map, flatness modulo $I$ and injectivity of $I \\otimes M \\to M$ imply flatness
- `thm-local-criterion-for-flatness-closed-fibre-form` · theorem — For an $R$-finite module over a local map, flatness on the closed fibre plus the multiplication-map condition implies flatness
- `thm-finite-flat-modules-over-local-rings-are-free` · theorem — A finite flat module over a local ring is free
- `cor-finite-flat-noetherian-modules-are-projective` · corollary — A finite flat module over a Noetherian ring is finite projective
- `thm-flat-going-down` · theorem — Every flat ring map satisfies going down

### `flatness-and-faithful-flatness-examples` — Flatness and Faithful Flatness — Examples (7 item(s))

- `ex-polynomial-algebras-are-faithfully-flat` · example — A polynomial algebra is free and therefore faithfully flat over its coefficient ring
- `ex-localisations-not-faithfully-flat` · example — A proper localization is flat but need not be faithfully flat
- `ex-fraction-field-flat-not-projective` · example — A fraction field is flat over its domain and may fail to be projective
- `ex-flat-idempotent-quotient` · example — A quotient by an idempotent ideal is flat
- `ex-nonflat-quotient-module` · example — The quotient by a nonidempotent ideal is not flat
- `ex-faithfully-flat-principal-open-cover` · example — A finite product of principal localizations covering the spectrum is faithfully flat
- `ex-finite-flat-module-over-a-local-ring` · example — A residue-field basis lifts to a basis of a finite flat module over a local ring

### `inverse-limits-and-noetherian-completion` — Inverse Limits and Noetherian Completion (21 item(s))

- `def-filtration-and-adic-filtration` · definition — Filtered modules and the $I$-adic filtration
- `def-adic-topology-on-a-module` · definition — The $I$-adic topology on a module
- `def-inverse-system-and-inverse-limit-of-modules` · definition — Inverse systems and inverse limits of modules
- `thm-universal-property-of-an-inverse-limit-of-modules` · theorem — Universal property of an inverse limit of modules
- `thm-inverse-limits-are-left-exact` · theorem — Inverse limits preserve kernels
- `def-mittag-leffler-inverse-system` · definition — Mittag-Leffler inverse systems
- `thm-exactness-of-inverse-limits-under-mittag-leffler` · theorem — Countable Mittag-Leffler systems preserve short exactness on inverse limits
- `def-separated-and-complete-filtered-module` · definition — Separated and complete filtered modules
- `def-adic-completion-of-a-module` · definition — The $I$-adic completion of a module
- `thm-kernel-and-universal-property-of-adic-completion` · theorem — Kernel and universal property of adic completion
- `prop-units-in-an-adically-complete-ring` · proposition — Elements congruent to $1$ modulo a defining ideal are units
- `thm-completion-is-exact-on-finite-modules` · theorem — Adic completion is exact on finite modules over a Noetherian ring
- `thm-completion-as-extension-of-scalars` · theorem — Completion of a finite module is extension of scalars
- `cor-completion-commutes-with-finite-quotients-and-submodules` · corollary — Completion commutes with finite quotients and induced submodules
- `thm-flatness-of-noetherian-completion` · theorem — The completion of a Noetherian ring is flat
- `thm-faithful-flatness-of-jacobson-adic-completion` · theorem — Jacobson-adic completion is faithfully flat
- `thm-noetherianity-of-adic-completion` · theorem — Completion of a Noetherian ring is Noetherian
- `thm-completion-of-a-noetherian-local-ring` · theorem — Completion of a Noetherian local ring is local with the same residue field
- `thm-finite-modules-over-complete-noetherian-rings-are-complete` · theorem — Finite modules over complete Noetherian rings are complete
- `thm-complete-nakayama-lemma` · theorem — Complete Nakayama lemma
- `thm-completion-preserves-dimension-and-hilbert-samuel-data` · theorem — Completion preserves dimension and Hilbert-Samuel data

### `inverse-limits-and-noetherian-completion-examples` — Inverse Limits and Noetherian Completion — Examples (7 item(s))

- `ex-p-adic-integers-as-an-inverse-limit` · example — The $p$-adic integers as an inverse limit and as a completion
- `ex-adic-completion-of-the-integers` · example — The $p$-adic completion map of the integers
- `ex-equivalent-adic-filtrations` · example — Equivalent adic filtrations have canonically isomorphic completions
- `ex-completion-not-exact-without-finiteness` · example — Completion need not be exact without a finiteness hypothesis
- `ex-completion-of-a-domain-not-a-domain` · example — A Noetherian domain can have a completion that is not a domain
- `ex-iterated-adic-completions` · example — Powers of an ideal give the same one-step adic completion
- `ex-semilocal-adic-completion` · example — Semilocal completion decomposes into completed local factors

### `projective-and-injective-resolutions` — Projective and Injective Resolutions (51 item(s))

- `def-augmented-chain-complex-over-an-object` · definition — Augmented chain complexes over an object
- `def-coaugmented-cochain-complex-under-an-object` · definition — Coaugmented cochain complexes under an object
- `def-projective-resolution-in-an-abelian-category` · definition — Projective resolutions in an abelian category
- `def-injective-resolution-in-an-abelian-category` · definition — Injective resolutions in an abelian category
- `def-deleted-resolution` · definition — Deleted resolutions
- `def-length-of-a-resolution` · definition — The length of a resolution
- `def-syzygy-and-cosyzygy-relative-to-a-resolution` · definition — Syzygies and cosyzygies relative to a chosen resolution
- `lem-one-step-extension-of-a-partial-projective-resolution` · lemma — One-step extension of a partial projective resolution
- `lem-one-step-extension-of-a-partial-injective-resolution` · lemma — One-step extension of a partial injective resolution
- `thm-enough-projectives-gives-projective-resolutions` · theorem — A chosen chain of projective covers gives a projective resolution
- `thm-enough-injectives-gives-injective-resolutions` · theorem — A chosen chain of injective embeddings gives an injective resolution
- `cor-every-module-admits-a-projective-resolution` · corollary — Under the Axiom of Choice, every module admits a projective resolution
- `cor-every-module-admits-an-injective-resolution` · corollary — Every module admits an injective resolution
- `prop-the-iterated-free-module-resolution-is-canonical-in-zf` · proposition — The iterated free-module resolution is canonical in ZF
- `def-augmentation-preserving-map-of-projective-resolutions` · definition — Augmentation-preserving maps of projective resolutions
- `lem-lift-a-map-through-degree-zero-of-a-projective-resolution` · lemma — Lifting a map through degree zero of a projective resolution
- `lem-extend-a-partial-comparison-map-by-one-degree` · lemma — Extending a partial comparison map by one degree
- `thm-projective-comparison-map-exists` · theorem — Projective comparison maps exist
- `lem-extend-a-partial-comparison-homotopy-by-one-degree` · lemma — Extending a partial comparison homotopy by one degree
- `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy` · theorem — Projective comparison maps are unique up to chain homotopy
- `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object` · theorem — Projective resolutions of the same object are homotopy equivalent over that object
- `thm-injective-comparison-map-exists` · theorem — Injective comparison maps exist
- `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy` · theorem — Injective comparison maps are unique up to cochain homotopy
- `thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object` · theorem — Injective resolutions of the same object are homotopy equivalent under that object
- `cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence` · corollary — A projective or injective resolution is unique up to nonunique homotopy equivalence
- `prop-comparison-maps-respect-composition-up-to-homotopy` · proposition — Comparison maps respect composition up to homotopy
- `prop-comparison-of-the-identity-is-homotopic-to-the-identity` · proposition — Comparison of the identity is homotopic to the identity
- `lem-degree-zero-horseshoe-lift` · lemma — The degree-zero horseshoe lift
- `lem-the-horseshoe-kernel-fits-a-short-exact-sequence` · lemma — The horseshoe kernel fits into a short exact sequence
- `lem-inductive-horseshoe-step` · lemma — The inductive horseshoe step
- `thm-horseshoe-lemma-for-projective-resolutions` · theorem — The horseshoe lemma for projective resolutions
- `thm-horseshoe-lemma-for-injective-resolutions` · theorem — The horseshoe lemma for injective resolutions
- `prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy` · proposition — Horseshoe resolutions are compatible with morphisms of short exact sequences up to homotopy
- `cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution` · corollary — A split short exact sequence admits the direct-sum resolution
- `thm-schanuel-lemma-in-an-abelian-category` · theorem — Schanuel's lemma in an abelian category
- `cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic` · corollary — Syzygies from two projective resolutions are stably isomorphic
- `thm-dual-schanuel-lemma-for-injective-copresentations` · theorem — The dual Schanuel lemma for injective copresentations
- `prop-a-projective-object-has-a-length-zero-projective-resolution` · proposition — A projective object has a length-zero projective resolution
- `lem-extension-from-subobjects-of-a-generator-detects-injectivity` · lemma — Extension from subobjects of a generator detects injectivity
- `def-functorial-one-step-generator-extension` · definition — The one-step generator extension functor
- `lem-the-one-step-generator-map-is-a-functorial-monomorphism` · lemma — The one-step generator map is a functorial monomorphism
- `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps` · lemma — Transfinite iteration of the generator extension preserves monomorphisms and factorizes small-source maps
- `lem-a-sufficiently-long-generator-extension-iteration-is-injective` · lemma — A sufficiently long generator-extension iteration is injective
- `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings` · theorem — Grothendieck abelian categories have functorial injective embeddings
- `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution` · corollary — Every Grothendieck category has enough injectives, and every object admits an injective resolution
- `fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects` · false-statement — FALSE: enough projectives selects a projective resolution functor on all objects
- `fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map` · false-statement — FALSE: a comparison map between resolutions is unique as a chain map
- `fs-two-syzygies-of-an-object-are-canonically-isomorphic` · false-statement — FALSE: two syzygies of an object are canonically isomorphic
- `fs-the-horseshoe-middle-resolution-is-canonical` · false-statement — FALSE: the horseshoe middle resolution is canonical
- `fs-every-abelian-category-has-enough-projectives-and-enough-injectives` · false-statement — FALSE: every abelian category has enough projectives and enough injectives
- `fs-every-acyclic-complex-of-projective-objects-is-contractible` · false-statement — FALSE: every acyclic complex of projective objects is contractible

### `projective-and-injective-resolutions-examples` — Projective and Injective Resolutions — Examples (9 item(s))

- `ex-a-projective-resolution-of-a-cyclic-abelian-group` · example — A projective resolution of a cyclic abelian group
- `ex-the-canonical-iterated-free-resolution-of-a-module` · example — The canonical iterated free resolution of a module
- `ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope` · example — An injective resolution of an abelian group beginning with a divisible envelope
- `ex-comparison-maps-between-two-resolutions-of-a-cyclic-group` · example — Comparison maps between two resolutions of a cyclic group
- `ex-an-explicit-comparison-homotopy` · example — An explicit comparison homotopy
- `ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups` · example — The horseshoe resolution of an extension of cyclic groups
- `ex-schanuel-lemma-for-two-presentations-of-a-module` · example — Schanuel's lemma for two presentations of a module
- `cex-two-projective-resolutions-with-nonisomorphic-first-syzygies` · counterexample — Two projective resolutions with nonisomorphic first syzygies
- `cex-a-category-with-enough-injectives-but-not-enough-projectives` · counterexample — A category with enough injectives but not enough projectives

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
| `cex-a-category-with-enough-injectives-but-not-enough-projectives` | `projective-and-injective-resolutions-examples` | gpt-5.6-terra | `55295a1264656f497ed332247d1600dd357ffdd71a649a32b1396a775e0678f5` |
| `cor-completion-commutes-with-finite-quotients-and-submodules` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `348e7b5221dd237b7b31c0fd7fcead9bf25dc9fe2979c77346a5b747972e4ffa` |
| `cor-finite-flat-noetherian-modules-are-projective` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `de2f4b9dc06cf221cf47337c9ab78fec3fb5ac7748b31ade7bcc97de95c0d49a` |
| `cor-flat-quotients-and-idempotent-ideals` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `aea53c64591c59b3ab22475700f9be1cd83f4c6fd4b57ffddcac5a043178ee48` |
| `cor-parameter-ideal-multiplicity-positive` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `89261a069435a68dde0bc7668060d6175054b20aa9be1e03d1015713398184d7` |
| `def-hilbert-samuel-multiplicity` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `d998bfc366560867614670001008b2e9b839d246c1126496918a95d5d46542f4` |
| `ex-completion-not-exact-without-finiteness` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `4dee727447a05f659cb5701157220396e2c83e2251c898f09201806674c88040` |
| `ex-completion-of-a-domain-not-a-domain` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `626ef488910e5c3025366cd307eebd8330bed9106a3e5a80670a9ddcb01ad013` |
| `ex-equivalent-adic-filtrations` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `1da4c7513da246a1e87f3ed0e6ceab77d1bea9d7c0a1c32533b8b497e6863967` |
| `ex-faithfully-flat-principal-open-cover` | `flatness-and-faithful-flatness-examples` | gpt-5.6-terra | `0815361cfff3b17b1c4d4ad556199d43a8b199b6b6f62dc6322c3b20f08d1037` |
| `ex-fraction-field-flat-not-projective` | `flatness-and-faithful-flatness-examples` | gpt-5.6-terra | `f94ede48c2035cd7dc885bdc1046608316b51cebda49a2bcd8238c6d4363affa` |
| `ex-semilocal-adic-completion` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `e5295da44ff7691d8ac2552f50857ec9d0313fbc7173e82d96288a3b6aff0a87` |
| `fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects` | `projective-and-injective-resolutions` | gpt-5.6-terra | `b373c54a2a072427b1fe89a5d4b8a0f7efe7c264c558994e51df87489f4822b7` |
| `fs-the-horseshoe-middle-resolution-is-canonical` | `projective-and-injective-resolutions` | gpt-5.6-terra | `44a4f955c66b5b9f942c9a25e88d42c1fe8e89d0517112f6b4b85b08c4540ebe` |
| `lem-a-sufficiently-long-generator-extension-iteration-is-injective` | `projective-and-injective-resolutions` | gpt-5.6-terra | `bcb779f0db80b2864086a9bc211d4a4bd690253a9d37b10fc5bf1f0f3e3b8cd7` |
| `lem-one-step-extension-of-a-partial-injective-resolution` | `projective-and-injective-resolutions` | gpt-5.6-terra | `8aea39127c30585e4a54312bb12f7418e5c6f5ebd42cd2e1a1f298fdc64ba680` |
| `lem-rees-module-finiteness-and-stable-filtrations` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `153dd147e3212cff40290568ac5f2f357b21e1a808f0d2ef7b57406af32cd804` |
| `lem-the-one-step-generator-map-is-a-functorial-monomorphism` | `projective-and-injective-resolutions` | gpt-5.6-terra | `ff7e3ef919cd47236a7114d9f14c0338d85aa35c05de23456280b91a739bc401` |
| `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps` | `projective-and-injective-resolutions` | gpt-5.6-terra | `ecd61452c7eaf5f9f35b1ebb5bbbe4f993c83c65152c03bab7af20e3f393827b` |
| `prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy` | `projective-and-injective-resolutions` | gpt-5.6-terra | `426eefaa4a9e9a6f79660fcae7b171f43a87a568619f75c1b1e717509286b03b` |
| `thm-additivity-of-hilbert-samuel-multiplicity` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `285d392a1189ff289ff13fed93a79279122ccdeb4152fe76085f466e10084d91` |
| `thm-complete-nakayama-lemma` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `15f2dc518d951f9613b7efd136d90c37f92072fa6341e407296d96720ffb275a` |
| `thm-completion-as-extension-of-scalars` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `d0c2c2515a2c88e9fb844708dc3a1706384c07709eaa6db228a14d94f59d8815` |
| `thm-completion-is-exact-on-finite-modules` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `f2783e13c2557a63cb5b9361433ba0277e8ded83cbf3557a19f70f2c4713ad0c` |
| `thm-dimension-and-parameters-for-modules` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `648e68d595f31c954057c53b26703a9b9754da5362eb39b0ff91799ed3ac8284` |
| `thm-existence-of-hilbert-samuel-polynomial` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `c49a230fb41ccdf443918263c362d1b9817f3b94f019ae6f3c36b70584da8d17` |
| `thm-faithful-flatness-of-jacobson-adic-completion` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `46f87a7de1dd3643257552726ccf6dba9c9bc2f0c0c4b9d96bc1ea3acb1048e2` |
| `thm-flatness-of-noetherian-completion` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `8c1ef80c4742961cc007e0a5cc00c2a061cb10db574c9a474d59a0fc2915f06f` |
| `thm-hilbert-samuel-dimension-theorem` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `2b94eda76d5efe376287d3eb82495a2f946b22a8ff2c5a6c01b8fbc928e00ac1` |
| `thm-injective-comparison-map-exists` | `projective-and-injective-resolutions` | gpt-5.6-terra | `7725b65266c4004b2cdc239a925617d1160dd5ee716bb0bc2cfd065d636ccbae` |
| `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy` | `projective-and-injective-resolutions` | gpt-5.6-terra | `b46a8d848ac7b05c3d9439c827aa7c5c00c4fb322db4289caf25cdc05c712609` |
| `thm-kernel-and-universal-property-of-adic-completion` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `e5882c562eed4430b4f3ecaaeb3072b58a6c3e7d082b644c4169a8c826e9b59d` |
| `thm-local-criterion-for-flatness-ideal-form` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `3188cfc3b0fd0699f909f62577010bef5145a3032106a6357447f019446f796d` |
| `thm-multiplicity-under-reduction-by-a-parameter` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `61355c19ee1b0a4da49145c9b2d9a047759b04f83035c7744328af839f7b3eaf` |
| `thm-noetherianity-of-adic-completion` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `acf241131353d915dc2219a63f4dfb4cf931bba2997a4c243ec9058aa48f1720` |

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
