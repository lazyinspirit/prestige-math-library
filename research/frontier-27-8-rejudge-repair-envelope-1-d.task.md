# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-27",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "d",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-model-invariance-means-equal-step-counts]: cex-model-invariance-means-equal-step-counts: current gpt-5.6-terra rejection has no exact Alpha outcome for context 84299dfa8cc9e9fac4259be84c931459a9597328ae",
      "output": "level-coverage --judge-only: 449/449 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 52 unadjudicated, 0 open fatal, 189 adjudicated rejection(s) closed nonfatally; legacy gate counter 449/449 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-model-invariance-means-equal-step-counts]: cex-model-invariance-means-equal-step-counts: current gpt-5.6-terra rejection has no exact Alpha outcome for context 84299dfa8cc9e9fac4259be84c931459a9597328ae0eb6875fcae6313500df55\nERROR judge-adjudication-missing [cor-dimension-of-the-kth-exterior-power-is-binomial]: cor-dimension-of-the-kth-exterior-power-is-binomial: current gpt-5.6-terra rejection has no exact Alpha outcome for context 28c8ce99803cea3d04f42ab6f536ec023b5a303ea1091166ebdbe19d2631d2d0\nERROR judge-adjudication-missing [def-asymptotic-resource-comparison]: def-asymptotic-resource-comparison: current gpt-5.6-terra rejection has no exact Alpha outcome for context d141b521985e9652b94b078aee5e2b35d521bd95cdf36e6747a9d48c3766929b\nERROR judge-adjudication-missing [def-c-zero-on-rn]: def-c-zero-on-rn: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2e1d414e421117ac963948e0feeef6ca85d7d22f7503ce548b7869d354cefbc4\nERROR judge-adjudication-missing [def-interior-product-of-a-form-by-a-vector-field]: def-interior-product-of-a-form-by-a-vector-field: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9ff9d6c0df1a512a945fac5c662d8bb1e7e1b15b8cfbbf5f32d51e8f78ec07bb\nERROR judge-adjudication-missing [def-interior-product-on-alternating-covectors]: def-interior-product-on-alternating-covectors: current gpt-5.6-terra rejection has no exact Alpha outcome for context 28719cbb3be3234a8c339c7a8cfed8e191ae5265915feae0018a94d2c4f1930d\nERROR judge-adjudication-missing [def-kleene-t-predicate-and-output-function]: def-kleene-t-predicate-and-output-function: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8be96a2a1e481ef122f15ee5d37e60f2f9e086b612eddc18d2f9f7320ee1a697\nERROR judge-adjudication-missing [def-lanczos-process-as-hermitian-arnoldi]: def-lanczos-process-as-hermitian-arnoldi: current gpt-5.6-terra rejection has no exact Alpha outcome for context 995fcc63d0215e790f76f9146967fc42b3093865e915a8a3ebccd36a96c640a1\nERROR judge-adjudication-missing [def-pullback-of-a-covariant-tensor-by-a-linear-map]: def-pullback-of-a-covariant-tensor-by-a-linear-map: current gpt-5.6-terra rejection has no exact Alpha outcome for context 74361d71f996e0074b67ff9aee226e114ffd5f598b1266bb927301f5e5cdc731\nERROR judge-adjudication-missing [def-series-and-absolute-convergence-in-a-normed-space]: def-series-and-absolute-convergence-in-a-normed-space: current gpt-5.6-terra rejection has no exact Alpha outcome for context 26e30efee36c1f1a73a008bf77b2f27c9e524a2b132eedcb34eb9f3d4f070bea\nERROR judge-adjudication-missing [def-time-and-space-constructible-function]: def-time-and-space-constructible-function: current gpt-5.6-terra rejection has no exact Alpha outcome for context b2011088d49ad98626df34ee1ca658472604efdac72080c1840c9bf362d3c707\nERROR judge-adjudication-missing [ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value]: ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value: current gpt-5.6-terra rejection has no exact Alpha outcome for context e2beb3850f7e89413482ba70387e244bb1f9ef16eaa04060ed3e3b9e875c4f6d\nERROR judge-adjudication-missing [ex-a-six-term-cohomology-sequence]: ex-a-six-term-cohomology-sequence: current gpt-5.6-terra rejection has no exact Alpha outcome for context e6eface4da309d265d6f05537e0eeed6d1febe918f0a23281b5ccebc1f0b2e06\nERROR judge-adjudication-missing [ex-currying-for-sets-of-three-variables]: ex-currying-for-sets-of-three-variables: current gpt-5.6-terra rejection has no exact Alpha outcome for context 16a2835f0ebed40a2c4c1ff1fc17c59cac10db37dc6c74376c58f0006fb4d83b\nERROR judge-adjudication-missing [ex-lambda-definable-iff-partial-recursive]: ex-lambda-definable-iff-partial-recursive: current gpt-5.6-terra rejection has no exact Alpha outcome for context b214116c8218fe5faaf2177acf6fe736697df95fcd235bbce0d97e22dc4312ec\nERROR judge-adjudication-missing [ex-minres-on-a-symmetric-indefinite-system]: ex-minres-on-a-symmetric-indefinite-system: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8ddafdccf205d4acb398b31f7c4802222d040007465fc1a0c996996336dd3b65\nERROR judge-adjudication-missing [ex-the-subobject-classifier-of-a-presheaf-category]: ex-the-subobject-classifier-of-a-presheaf-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context bcb3832ea69f3b5ddedd1e22875008acb6595f44063b3253bb3b691d2476ea56\nERROR judge-adjudication-missing [fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map]: fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map: current gpt-5.6-terra rejection has no exact Alpha outcome for context 02c2ae9a028742f28b7e955b8f39319311db8e36fa9ad0f2a416a8e49fd8f85c\nERROR judge-adjudication-missing [fs-every-countable-language-is-decidable]: fs-every-countable-language-is-decidable: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3611f1d5cfbbd02230a048213ed9fb987ac5490abe1526e5b45b5ce55397cdfc\nERROR judge-adjudication-missing [fs-every-critical-point-is-an-isolated-point]: fs-every-critical-point-is-an-isolated-point: current gpt-5.6-terra rejection has no exact Alpha outcome for context c29370356dc31861d9b66df89e43db89d2e53cbd89e308898ac65b6739f239b2\nERROR judge-adjudication-missing [fs-l-one-convolution-is-defined-at-every-point]: fs-l-one-convolution-is-defined-at-every-point: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1c98986717c7ddace8cdf6a3efa2248735b355b28e6398fea2a3bb3f16bea292\nERROR judge-adjudication-missing [fs-model-invariance-means-equal-step-counts]: fs-model-invariance-means-equal-step-counts: current gpt-5.6-terra rejection has no exact Alpha outcome for context 342820b58caa4c432302e666e3f67fbd9487e7a5996b1caeb3479c22eb7d00b8\nERROR judge-adjudication-missing [fs-time-bounds-never-need-constructibility]: fs-time-bounds-never-need-constructibility: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8c65477e72cdd21488c1245fd994263b2e323b02245f3e0e5f4cd1d522df8ba2\nERROR judge-adjudication-missing [lem-exactness-at-the-homology-of-the-left-complex]: lem-exactness-at-the-homology-of-the-left-complex: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4cfd1b87f838002957503f918df37dd2e8ae5729b33874769936ba287f515633\nERROR judge-adjudication-missing [lem-exactness-at-the-homology-of-the-middle-complex]: lem-exactness-at-the-homology-of-the-middle-complex: current gpt-5.6-terra rejection has no exact Alpha outcome for context d2f1d15401577e281bba41d4b32df3fdbd92677286de28a8cddf58b6f79a517c\nERROR judge-adjudication-missing [lem-exactness-at-the-homology-of-the-right-complex]: lem-exactness-at-the-homology-of-the-right-complex: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0d0a1ab6165aed5e9488a0af30a4ac7cd3659263e990e5ce5812b4f1148ca4ca\nERROR judge-adjudication-missing [lem-exactness-at-the-target-of-the-connecting-map]: lem-exactness-at-the-target-of-the-connecting-map: current gpt-5.6-terra rejection has no exact Alpha outcome for context 95b752b770df8c1d861e1ff2fa0ea2bc5f022a612460147d3ac1959b8461a5a0\nERROR judge-adjudication-missing [lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold]: lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1fe100b49ef9b6ebc690434d8e205bd2a4a3402fc37595458b6aa0f84c58a398\nERROR judge-adjudication-missing [lem-principal-ideal-theorem-associated-prime-step]: lem-principal-ideal-theorem-associated-prime-step: current gpt-5.6-terra rejection has no exact Alpha outcome for context e74c1bcfda711be1455cfcbbca71630b15689522b580b68217bd822a942a6ff0\nERROR judge-adjudication-missing [lem-principal-ideal-theorem-reduction-to-local-domain]: lem-principal-ideal-theorem-reduction-to-local-domain: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9fbc699e433dfe79b69bbf6bdde1ab6a4fbdda71427d00b0f6086d0256c0b4fb\nERROR judge-adjudication-missing [lem-sard-on-the-infinitely-flat-critical-stratum]: lem-sard-on-the-infinitely-flat-critical-stratum: current gpt-5.6-terra rejection has no exact Alpha outcome for context 37b5a27f9c8cf8705601954f3c17bdde46a8f5e337df8e8e856cfd3aff9d3c66\nERROR judge-adjudication-missing [lem-sard-slicing-for-compact-null-sections]: lem-sard-slicing-for-compact-null-sections: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6d780d966cb71c416b15fca5648920346ba279e5a916ecc3b67c0c6215d36c3a\nERROR judge-adjudication-missing [lem-the-preconnecting-arrow-annihilates-boundaries]: lem-the-preconnecting-arrow-annihilates-boundaries: current gpt-5.6-terra rejection has no exact Alpha outcome for context 16e9ec58b627f834f978125a91312f22a3488151487f37667c7bb384d77a4034\nERROR judge-adjudication-missing [lem-turing-step-coding-is-primitive-recursive]: lem-turing-step-coding-is-primitive-recursive: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4a1057b8be51157bf770c632f19d4bf8e3f23dd2cf87c00ed2dc57933bd410bc\nERROR judge-adjudication-missing [prop-ackermann-is-total-computable-but-not-primitive-recursive]: prop-ackermann-is-total-computable-but-not-primitive-recursive: current gpt-5.6-terra rejection has no exact Alpha outcome for context 62b5bcab9d9d56cd022547faaa1655a7b8581e1cd984cc1f60bcef1722e2658b\nERROR judge-adjudication-missing [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: prop-countable-unions-and-subsets-of-manifold-null-sets-are-null: current gpt-5.6-terra rejection has no exact Alpha outcome for context 464078f66278686dfcf35cf8b36cd74a85c5e7cc0d56e22e2540635303d016d3\nERROR judge-adjudication-missing [prop-functoriality-of-finite-dimensional-exterior-powers]: prop-functoriality-of-finite-dimensional-exterior-powers: current gpt-5.6-terra rejection has no exact Alpha outcome for context f25ca855b2141faee0b15ccc47dab22b3acdf2757a02a4a53bdad78dbd32b61e\nERROR judge-adjudication-missing [prop-polynomial-time-and-space-are-model-invariant]: prop-polynomial-time-and-space-are-model-invariant: current gpt-5.6-terra rejection has no exact Alpha outcome for context cb11d3e4e32f3326ef3cc13b16c8e0b7f579c219df73dd47dfb97959f62c848a\nERROR judge-adjudication-missing [prop-pullback-of-covariant-tensors-is-smooth-and-functorial]: prop-pullback-of-covariant-tensors-is-smooth-and-functorial: current gpt-5.6-terra rejection has no exact Alpha outcome for context 69d095d5598f6aa154cc1f83c78763243dfe649e24357a8cbf08148b8c0e5384\nERROR judge-adjudication-missing [prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence]: prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence: current gpt-5.6-terra rejection has no exact Alpha outcome for context 363aae6cf28168a07e91aafcc286cdc7ba96553368f3e8a63b0a5af54324b446\nERROR judge-adjudication-missing [prop-transversality-is-stable-on-a-compact-source]: prop-transversality-is-stable-on-a-compact-source: current gpt-5.6-terra rejection has no exact Alpha outcome for context a2a2c322624dc3b88229b64391f605b0fd5ebd1e43c8cc9c07fed5487d642ca7\nERROR judge-adjudication-missing [thm-dimension-as-minimal-number-of-radical-generators]: thm-dimension-as-minimal-number-of-radical-generators: current gpt-5.6-terra rejection has no exact Alpha outcome for context 950c9d4ad9d2bb525704ebe25c4b90387799a26ec712de45649cf5295d06c1bf\nERROR judge-adjudication-missing [thm-kleene-normal-form]: thm-kleene-normal-form: current gpt-5.6-terra rejection has no exact Alpha outcome for context 060a1374672036a05efaad682c0299a56551d9a2a8a32fb8d8430d82e5b72606\nERROR judge-adjudication-missing [thm-lambda-definable-iff-partial-recursive]: thm-lambda-definable-iff-partial-recursive: current gpt-5.6-terra rejection has no exact Alpha outcome for context 56906d6fe34b781ab0bd4999b8835c66c0303b128d7234874305a74003521337\nERROR judge-adjudication-missing [thm-long-exact-sequence-of-relative-homology-for-a-composable-pair]: thm-long-exact-sequence-of-relative-homology-for-a-composable-pair: current gpt-5.6-terra rejection has no exact Alpha outcome for context 80b3b7e416ba9892af3939b0edc1df28becd128a6654db74800921e556a9694d\nERROR judge-adjudication-missing [thm-myhill-nerode-characterization]: thm-myhill-nerode-characterization: current gpt-5.6-terra rejection has no exact Alpha outcome for context c9d42977ee541a0ececcec101d3003703db1913b055af9c79d66f4dbc6b7d77d\nERROR judge-adjudication-missing [thm-naturality-of-the-homology-connecting-morphism]: thm-naturality-of-the-homology-connecting-morphism: current gpt-5.6-terra rejection has no exact Alpha outcome for context 036a96f31ad38dae16826e9fde1a731f4e3136420c6d989c81cc3cfab1347e52\nERROR judge-adjudication-missing [thm-the-cone-long-exact-sequence]: thm-the-cone-long-exact-sequence: current gpt-5.6-terra rejection has no exact Alpha outcome for context bd9f5f18904bfb99853d663e1764d91c26df3059655033c9fde2460959d164c9\nERROR judge-adjudication-missing [thm-the-internal-hom-composition-morphism]: thm-the-internal-hom-composition-morphism: current gpt-5.6-terra rejection has no exact Alpha outcome for context d8e8d40f9de43762268b4cb9558032d6b2e86aac84df6a47b6c04e1e129c3083\nERROR judge-adjudication-missing [thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism]: thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism: current gpt-5.6-terra rejection has no exact Alpha outcome for context ca2b8f4e859688c7b1f5aa54aaca29863513662217d6595d1d488c859395d1f5\nERROR judge-adjudication-missing [thm-the-two-element-set-is-a-subobject-classifier-for-sets]: thm-the-two-element-set-is-a-subobject-classifier-for-sets: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9027c181ada58406de4d77753f8fa866a2a5f86ae9c558f3696ba52562678544\nERROR judge-adjudication-missing [thm-universal-simulation-with-logarithmic-overhead]: thm-universal-simulation-with-logarithmic-overhead: current gpt-5.6-terra rejection has no exact Alpha outcome for context d23063dfa3c72c084541214f0944729014898c3286574cc60d54ffbb333c182f\n",
      "named_ids": [
        "cex-model-invariance-means-equal-step-counts",
        "cor-dimension-of-the-kth-exterior-power-is-binomial",
        "def-asymptotic-resource-comparison",
        "def-c-zero-on-rn",
        "def-interior-product-of-a-form-by-a-vector-field",
        "def-interior-product-on-alternating-covectors",
        "def-kleene-t-predicate-and-output-function",
        "def-lanczos-process-as-hermitian-arnoldi",
        "def-pullback-of-a-covariant-tensor-by-a-linear-map",
        "def-series-and-absolute-convergence-in-a-normed-space",
        "def-time-and-space-constructible-function",
        "ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value",
        "ex-a-six-term-cohomology-sequence",
        "ex-currying-for-sets-of-three-variables",
        "ex-lambda-definable-iff-partial-recursive",
        "ex-minres-on-a-symmetric-indefinite-system",
        "ex-the-subobject-classifier-of-a-presheaf-category",
        "fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map",
        "fs-every-countable-language-is-decidable",
        "fs-every-critical-point-is-an-isolated-point",
        "fs-l-one-convolution-is-defined-at-every-point",
        "fs-model-invariance-means-equal-step-counts",
        "fs-time-bounds-never-need-constructibility",
        "lem-exactness-at-the-homology-of-the-left-complex",
        "lem-exactness-at-the-homology-of-the-middle-complex",
        "lem-exactness-at-the-homology-of-the-right-complex",
        "lem-exactness-at-the-target-of-the-connecting-map",
        "lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold",
        "lem-principal-ideal-theorem-associated-prime-step",
        "lem-principal-ideal-theorem-reduction-to-local-domain",
        "lem-sard-on-the-infinitely-flat-critical-stratum",
        "lem-sard-slicing-for-compact-null-sections",
        "lem-the-preconnecting-arrow-annihilates-boundaries",
        "lem-turing-step-coding-is-primitive-recursive",
        "prop-ackermann-is-total-computable-but-not-primitive-recursive",
        "prop-countable-unions-and-subsets-of-manifold-null-sets-are-null",
        "prop-functoriality-of-finite-dimensional-exterior-powers",
        "prop-polynomial-time-and-space-are-model-invariant",
        "prop-pullback-of-covariant-tensors-is-smooth-and-functorial",
        "prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence",
        "prop-transversality-is-stable-on-a-compact-source",
        "thm-dimension-as-minimal-number-of-radical-generators",
        "thm-kleene-normal-form",
        "thm-lambda-definable-iff-partial-recursive",
        "thm-long-exact-sequence-of-relative-homology-for-a-composable-pair",
        "thm-myhill-nerode-characterization",
        "thm-naturality-of-the-homology-connecting-morphism",
        "thm-the-cone-long-exact-sequence",
        "thm-the-internal-hom-composition-morphism",
        "thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism",
        "thm-the-two-element-set-is-a-subobject-classifier-for-sets",
        "thm-universal-simulation-with-logarithmic-overhead"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-model-invariance-means-equal-step-counts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-dimension-of-the-kth-exterior-power-is-binomial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-asymptotic-resource-comparison",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-c-zero-on-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-interior-product-of-a-form-by-a-vector-field",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-interior-product-on-alternating-covectors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-kleene-t-predicate-and-output-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-lanczos-process-as-hermitian-arnoldi",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-pullback-of-a-covariant-tensor-by-a-linear-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-series-and-absolute-convergence-in-a-normed-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-time-and-space-constructible-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-six-term-cohomology-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-currying-for-sets-of-three-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-lambda-definable-iff-partial-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-minres-on-a-symmetric-indefinite-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-subobject-classifier-of-a-presheaf-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-countable-language-is-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-critical-point-is-an-isolated-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-l-one-convolution-is-defined-at-every-point",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-model-invariance-means-equal-step-counts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-time-bounds-never-need-constructibility",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-left-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-middle-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-right-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-exactness-at-the-target-of-the-connecting-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-principal-ideal-theorem-associated-prime-step",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-principal-ideal-theorem-reduction-to-local-domain",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-sard-on-the-infinitely-flat-critical-stratum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-sard-slicing-for-compact-null-sections",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-the-preconnecting-arrow-annihilates-boundaries",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-turing-step-coding-is-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-ackermann-is-total-computable-but-not-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-countable-unions-and-subsets-of-manifold-null-sets-are-null",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-functoriality-of-finite-dimensional-exterior-powers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-polynomial-time-and-space-are-model-invariant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-pullback-of-covariant-tensors-is-smooth-and-functorial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-transversality-is-stable-on-a-compact-source",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-dimension-as-minimal-number-of-radical-generators",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-kleene-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-lambda-definable-iff-partial-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-long-exact-sequence-of-relative-homology-for-a-composable-pair",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-myhill-nerode-characterization",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-naturality-of-the-homology-connecting-morphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cone-long-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-internal-hom-composition-morphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-two-element-set-is-a-subobject-classifier-for-sets",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-simulation-with-logarithmic-overhead",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "cex-model-invariance-means-equal-step-counts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-asymptotic-resource-comparison",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-kleene-t-predicate-and-output-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-time-and-space-constructible-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-lambda-definable-iff-partial-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-countable-language-is-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-model-invariance-means-equal-step-counts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-time-bounds-never-need-constructibility",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-turing-step-coding-is-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-ackermann-is-total-computable-but-not-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-polynomial-time-and-space-are-model-invariant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-kleene-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-lambda-definable-iff-partial-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-myhill-nerode-characterization",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-universal-simulation-with-logarithmic-overhead",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-model-invariance-means-equal-step-counts",
      "model": "gpt-5.6-terra",
      "context_sha256": "84299dfa8cc9e9fac4259be84c931459a9597328ae0eb6875fcae6313500df55",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-asymptotic-resource-comparison",
      "model": "gpt-5.6-terra",
      "context_sha256": "d141b521985e9652b94b078aee5e2b35d521bd95cdf36e6747a9d48c3766929b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-kleene-t-predicate-and-output-function",
      "model": "gpt-5.6-terra",
      "context_sha256": "8be96a2a1e481ef122f15ee5d37e60f2f9e086b612eddc18d2f9f7320ee1a697",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-time-and-space-constructible-function",
      "model": "gpt-5.6-terra",
      "context_sha256": "b2011088d49ad98626df34ee1ca658472604efdac72080c1840c9bf362d3c707",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-lambda-definable-iff-partial-recursive",
      "model": "gpt-5.6-terra",
      "context_sha256": "b214116c8218fe5faaf2177acf6fe736697df95fcd235bbce0d97e22dc4312ec",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-every-countable-language-is-decidable",
      "model": "gpt-5.6-terra",
      "context_sha256": "3611f1d5cfbbd02230a048213ed9fb987ac5490abe1526e5b45b5ce55397cdfc",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-model-invariance-means-equal-step-counts",
      "model": "gpt-5.6-terra",
      "context_sha256": "342820b58caa4c432302e666e3f67fbd9487e7a5996b1caeb3479c22eb7d00b8",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-time-bounds-never-need-constructibility",
      "model": "gpt-5.6-terra",
      "context_sha256": "8c65477e72cdd21488c1245fd994263b2e323b02245f3e0e5f4cd1d522df8ba2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold",
      "model": "gpt-5.6-terra",
      "context_sha256": "1fe100b49ef9b6ebc690434d8e205bd2a4a3402fc37595458b6aa0f84c58a398",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-turing-step-coding-is-primitive-recursive",
      "model": "gpt-5.6-terra",
      "context_sha256": "4a1057b8be51157bf770c632f19d4bf8e3f23dd2cf87c00ed2dc57933bd410bc",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-ackermann-is-total-computable-but-not-primitive-recursive",
      "model": "gpt-5.6-terra",
      "context_sha256": "62b5bcab9d9d56cd022547faaa1655a7b8581e1cd984cc1f60bcef1722e2658b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-polynomial-time-and-space-are-model-invariant",
      "model": "gpt-5.6-terra",
      "context_sha256": "cb11d3e4e32f3326ef3cc13b16c8e0b7f579c219df73dd47dfb97959f62c848a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-kleene-normal-form",
      "model": "gpt-5.6-terra",
      "context_sha256": "060a1374672036a05efaad682c0299a56551d9a2a8a32fb8d8430d82e5b72606",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-lambda-definable-iff-partial-recursive",
      "model": "gpt-5.6-terra",
      "context_sha256": "56906d6fe34b781ab0bd4999b8835c66c0303b128d7234874305a74003521337",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-myhill-nerode-characterization",
      "model": "gpt-5.6-terra",
      "context_sha256": "c9d42977ee541a0ececcec101d3003703db1913b055af9c79d66f4dbc6b7d77d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-universal-simulation-with-logarithmic-overhead",
      "model": "gpt-5.6-terra",
      "context_sha256": "d23063dfa3c72c084541214f0944729014898c3286574cc60d54ffbb333c182f",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **d**, run `frontier-27`

You are the group Alpha for batches **7**, **9**, **10**: 6 A/B pair(s), 12 page(s), 101 item(s), 16 open rejection(s) over 16 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-27-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `small-graph-erdos-hajnal-consequences` | A | combinatorics | 421 | `star-expansions-and-erdos-hajnal`, `iterative-sparsification-and-the-five-vertex-path` |
| 7 | `small-graph-erdos-hajnal-consequences-examples` | B | combinatorics | 422 | `small-graph-erdos-hajnal-consequences` |
| 7 | `iterative-restriction-and-comb-extraction-lemmas` | A | combinatorics | 423 | `iterative-sparsification-and-the-five-vertex-path` |
| 7 | `iterative-restriction-and-comb-extraction-lemmas-examples` | B | combinatorics | 424 | `iterative-restriction-and-comb-extraction-lemmas` |
| 9 | `myhill-nerode-theory-and-dfa-minimization` | A | computability-theory | 589 | `regular-expressions-and-kleenes-theorem`, `relations-functions-and-quotients` |
| 9 | `myhill-nerode-theory-and-dfa-minimization-examples` | B | computability-theory | 590 | `myhill-nerode-theory-and-dfa-minimization` |
| 9 | `decidable-recognizable-and-enumerable-languages` | A | computability-theory | 601 | `robust-machine-models-and-universal-computation`, `countability-and-uncountability` |
| 9 | `decidable-recognizable-and-enumerable-languages-examples` | B | computability-theory | 602 | `decidable-recognizable-and-enumerable-languages` |
| 10 | `primitive-recursive-and-partial-computable-functions` | A | computability-theory | 609 | `robust-machine-models-and-universal-computation`, `construction-of-the-natural-numbers` |
| 10 | `primitive-recursive-and-partial-computable-functions-examples` | B | computability-theory | 610 | `primitive-recursive-and-partial-computable-functions` |
| 10 | `resource-bounds-and-machine-invariance` | A | computability-theory | 617 | `robust-machine-models-and-universal-computation`, `the-logarithm-and-general-powers` |
| 10 | `resource-bounds-and-machine-invariance-examples` | B | computability-theory | 618 | `resource-bounds-and-machine-invariance` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `small-graph-erdos-hajnal-consequences` — Small-Graph Erdős–Hajnal Consequences (13 item(s))

- `cor-the-four-vertex-path-has-the-erdos-hajnal-property` · corollary — The four-vertex path has the Erdős–Hajnal property
- `thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property` · theorem — Every graph on at most four vertices has the Erdős–Hajnal property
- `cor-the-bull-graph-has-the-erdos-hajnal-property` · corollary — The bull graph has the Erdős–Hajnal property
- `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement` · lemma — The prime five-vertex graphs are exactly the bull, $C_5$, $P_5$, and $\overline{P_5}$
- `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property` · theorem — Every graph on at most five vertices has the Erdős–Hajnal property
- `def-left-six-vertex-prime-h-graph` · definition — The left six-vertex prime $\mathcal H$-graph
- `def-right-six-vertex-prime-h-graph` · definition — The right six-vertex prime $\mathcal H$-graph
- `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property` · corollary — The two six-vertex prime $\mathcal H$-graphs have the Erdős–Hajnal property
- `def-e-graph-and-co-e-graph` · definition — The $E$-graph and co-$E$
- `def-bird-graph-and-co-bird-graph` · definition — The Bird graph and co-Bird
- `def-h-plus-and-h-minus-for-two-special-vertices` · definition — The graphs $H^+$ and $H^-$ for two distinguished vertices
- `def-h-zero-through-h-five` · definition — The graphs $H_0,H_1,\ldots,H_5$
- `cor-the-h-zero-graph-has-the-erdos-hajnal-property` · corollary — The graph $H_0$ has the Erdős–Hajnal property

### `small-graph-erdos-hajnal-consequences-examples` — Small-Graph Erdős–Hajnal Consequences — Examples (6 item(s))

- `ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull` · example — The left six-vertex prime $\mathcal H$-graph is prime, and deleting any pendant leaf gives the bull
- `ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime` · example — The right six-vertex prime $\mathcal H$-graph is the complement of the left one, and is prime
- `ex-the-e-graph-and-co-e-graph-by-adjacency` · example — The $E$-graph and co-$E$ by finite adjacency data
- `ex-the-bird-graph-and-co-bird-graph-by-adjacency` · example — The Bird graph and co-Bird by finite adjacency data
- `ex-h-zero-is-the-five-wheel` · example — $H_0$ is the five-wheel
- `ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments` · example — $H_1$ and $H_5$ arise by the stated labelled leaf attachments

### `iterative-restriction-and-comb-extraction-lemmas` — Iterative Restriction and Comb-Extraction Lemmas (5 item(s))

- `def-leaf-reducible-finite-family` · definition — Leaf-reducible finite graph families
- `lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair` · lemma — A sparse graph without a large sparse pair has a large nearly covered sparse pair
- `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph` · lemma — Leaf-reducible families yield a large anticomplete pair or a deeper restricted induced subgraph
- `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold` · lemma — Iterated sparse restriction reaches the target sparsity threshold
- `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair` · lemma — A sparse graph either sparsifies further or yields a comb or a large sparse pair

### `iterative-restriction-and-comb-extraction-lemmas-examples` — Iterative Restriction and Comb-Extraction Lemmas — Examples (4 item(s))

- `ex-the-five-vertex-path-is-leaf-reducible` · example — The five-vertex path is leaf-reducible
- `ex-a-nearly-covered-sparse-pair-at-small-parameters` · example — A nearly covered sparse pair at small parameters
- `ex-a-numeric-run-of-the-lemma-two-nine-iteration` · example — A numeric run of the multiplicative iteration in Lemma 2.9
- `ex-a-four-tooth-comb-with-an-external-complete-vertex` · example — A four-tooth comb with an external complete vertex

### `myhill-nerode-theory-and-dfa-minimization` — Myhill--Nerode Theory and DFA Minimization (16 item(s))

- `def-right-language-and-equivalent-dfa-states` · definition — The right language of a DFA state and state equivalence
- `lem-state-equivalence-is-a-right-congruence` · lemma — State-equivalent DFA states stay equivalent after every input word
- `def-quotient-dfa-by-state-equivalence` · definition — The quotient DFA by state equivalence
- `lem-quotient-dfa-is-well-defined-and-equivalent` · lemma — The quotient by state equivalence is a well-defined equivalent DFA
- `def-nerode-equivalence` · definition — Nerode equivalence of words
- `lem-nerode-equivalence-is-a-right-congruence` · lemma — Nerode-equivalent words stay equivalent after right concatenation
- `lem-dfa-states-refine-nerode-classes` · lemma — A DFA can realize at most one Nerode class per reachable state
- `thm-myhill-nerode-characterization` · theorem — A language is regular if and only if its Nerode equivalence has finite index
- `cor-nerode-classes-give-the-canonical-minimal-dfa` · corollary — Nerode classes form the canonical minimal DFA
- `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism` · theorem — Minimal DFAs are unique up to start-state-preserving isomorphism
- `def-distinguishing-word` · definition — Distinguishing words for states and for prefixes
- `thm-table-filling-minimization-algorithm` · theorem — The table-filling algorithm computes state equivalence and DFA minimization
- `thm-pumping-lemma-for-regular-languages` · theorem — The pumping lemma for regular languages
- `cor-distinguishable-prefix-nonregularity-criterion` · corollary — Infinitely many pairwise distinguishable prefixes force nonregularity
- `fs-the-pumping-lemma-characterizes-regular-languages` · false-statement — FALSE: the pumping lemma characterizes the regular languages
- `fs-pumping-quantifiers-may-be-reordered` · false-statement — FALSE: the pumping lemma still works if its quantifiers are reordered

### `myhill-nerode-theory-and-dfa-minimization-examples` — Myhill--Nerode Theory and DFA Minimization: Examples and Counterexamples (3 item(s))

- `ex-quotient-dfa-is-well-defined-and-equivalent` · example — Merging equivalent sink-like states in a small DFA
- `ex-distinguishable-prefix-nonregularity-criterion` · example — The prefixes 0^n distinguish the language {0^n1^n : n >= 0}
- `cex-the-pumping-lemma-characterizes-regular-languages` · counterexample — A nonregular language can still satisfy the regular pumping lemma

### `decidable-recognizable-and-enumerable-languages` — Decidable, Recognizable, and Enumerable Languages (15 item(s))

- `def-computable-and-partial-computable-function` · definition — Computable and partial computable functions
- `def-decidable-and-recognizable-language` · definition — Decidable and recognizable languages
- `def-computably-enumerable-set` · definition — Computably enumerable sets and languages
- `thm-recognizable-iff-enumerable` · theorem — A binary language is recognizable if and only if it is computably enumerable
- `thm-decidable-iff-language-and-complement-are-recognizable` · theorem — A language is decidable if and only if it and its complement are recognizable
- `thm-recognizable-languages-are-closed-under-union-and-intersection` · theorem — Recognizable languages are closed under union and intersection
- `thm-decidable-languages-are-closed-under-boolean-operations` · theorem — Decidable languages are closed under the Boolean operations
- `def-dovetailing-schedule` · definition — A dovetailing schedule
- `lem-dovetailing-reaches-every-finite-stage` · lemma — A dovetailing schedule reaches every finite simulation stage
- `thm-domains-and-ranges-of-partial-computable-functions-are-ce` · theorem — Domains and ranges of partial computable functions are computably enumerable
- `thm-every-ce-set-is-a-domain` · theorem — Every computably enumerable set is the domain of a partial computable function
- `thm-infinite-ce-sets-have-computable-injective-enumerations` · theorem — Infinite computably enumerable sets have computable injective enumerations
- `prop-machine-descriptions-form-a-decidable-language` · proposition — Well-formed deterministic one-tape Turing machine descriptions form a decidable language
- `fs-recognizable-means-total` · false-statement — FALSE: recognizable means total halting
- `fs-every-countable-language-is-decidable` · false-statement — FALSE: every countable language is decidable

### `decidable-recognizable-and-enumerable-languages-examples` — Decidable, Recognizable, and Enumerable Languages: Examples and Counterexamples (3 item(s))

- `ex-decidable-iff-language-and-complement-are-recognizable` · example — Recognizers for strings containing a 1 and for all-zero strings
- `ex-machine-descriptions-form-a-decidable-language` · example — Testing a few short binary strings for machine-code well-formedness
- `cex-recognizable-means-total` · counterexample — A recognizer for {0} that loops on every nonmember

### `primitive-recursive-and-partial-computable-functions` — Primitive Recursive and Partial Computable Functions (16 item(s))

- `def-initial-arithmetic-functions` · definition — The zero, successor, and projection functions on the natural numbers
- `def-composition-and-primitive-recursion-schemes` · definition — Composition and primitive recursion as closure schemes on arithmetic functions
- `def-primitive-recursive-function` · definition — Primitive recursive functions
- `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive` · proposition — Basic arithmetic operations and bounded quantification are primitive recursive
- `def-natural-number-coding-of-finite-sequences` · definition — A natural-number coding of finite sequences
- `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` · theorem — The sequence-length and coordinate-reading functions are primitive recursive
- `def-mu-minimization-and-partial-recursive-function` · definition — Unbounded minimization and partial recursive functions
- `prop-ackermann-is-total-computable-but-not-primitive-recursive` · proposition — The Ackermann function is total computable but not primitive recursive
- `lem-turing-step-coding-is-primitive-recursive` · lemma — The one-step update on coded Turing configurations is primitive recursive
- `def-kleene-t-predicate-and-output-function` · definition — Kleene's T-predicate and output function
- `thm-kleene-normal-form` · theorem — Kleene normal form for partial recursive functions
- `thm-partial-recursive-iff-turing-computable` · theorem — A partial function is partial recursive if and only if it is Turing computable
- `def-lambda-term-beta-reduction-and-represented-function` · definition — Lambda terms, beta reduction, and the partial functions they represent
- `thm-lambda-definable-iff-partial-recursive` · theorem — A partial function is lambda-definable if and only if it is partial recursive
- `fs-every-total-computable-function-is-primitive-recursive` · false-statement — FALSE: every total computable function is primitive recursive
- `fs-mu-minimization-is-always-total` · false-statement — FALSE: applying mu-minimization to a computable search predicate always yields a total function

### `primitive-recursive-and-partial-computable-functions-examples` — Primitive Recursive and Partial Computable Functions: Examples and Counterexamples (3 item(s))

- `ex-sequence-length-and-coordinate-functions-are-primitive-recursive` · example — Reading the length and third coordinate of a coded finite sequence
- `ex-lambda-definable-iff-partial-recursive` · example — Factorial is both lambda-definable and partial recursive
- `cex-every-total-computable-function-is-primitive-recursive` · counterexample — The Ackermann function refutes the claim that all total computable functions are primitive recursive

### `resource-bounds-and-machine-invariance` — Resource Bounds and Machine Invariance (14 item(s))

- `def-worst-case-time-and-space-complexity` · definition — Worst-case time and space complexity of a machine
- `def-asymptotic-resource-comparison` · definition — Asymptotic comparison of resource bounds
- `def-time-and-space-constructible-function` · definition — Time-constructible and space-constructible functions
- `def-dtime-ntime-dspace-and-nspace` · definition — The classes DTIME, NTIME, DSPACE, and NSPACE
- `lem-time-at-least-input-length-permits-complete-input-reading` · lemma — Any machine that fully reads every input of length n needs at least linear time
- `lem-time-bounds-imply-space-bounds` · lemma — A time bound always yields the same-order space bound
- `thm-multitape-to-single-tape-time-simulation` · theorem — Every multitape time-T computation has a single-tape simulation in O((n+T(n))^2) time
- `thm-multitape-to-single-tape-space-simulation` · theorem — Every multitape space-S computation has a single-tape simulation in O(n+S(n)) space
- `thm-universal-simulation-with-logarithmic-overhead` · theorem — A universal simulator can realize T steps with only O(T log T) overhead
- `prop-polynomial-time-and-space-are-model-invariant` · proposition — Polynomial-time and polynomial-space computation are invariant across standard machine models
- `lem-clocked-machine-construction` · lemma — A constructible time bound yields a uniformly clocked simulator
- `prop-polynomially-related-encodings-preserve-polynomial-classes` · proposition — Polynomially related encodings preserve polynomial-time and polynomial-space classes
- `fs-model-invariance-means-equal-step-counts` · false-statement — FALSE: machine invariance means equivalent models perform exactly the same number of steps
- `fs-time-bounds-never-need-constructibility` · false-statement — FALSE: clocked-simulation and time-hierarchy arguments never need constructibility hypotheses

### `resource-bounds-and-machine-invariance-examples` — Resource Bounds and Machine Invariance: Examples and Counterexamples (3 item(s))

- `ex-time-bounds-imply-space-bounds` · example — A machine that runs in O(n^2) time necessarily uses at most O(n^2) space
- `ex-polynomially-related-encodings-preserve-polynomial-classes` · example — Changing between two polynomially related tuple encodings preserves polynomial complexity
- `cex-model-invariance-means-equal-step-counts` · counterexample — A linear-time multitape computation can require quadratic time on one tape

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
| `cex-model-invariance-means-equal-step-counts` | `resource-bounds-and-machine-invariance-examples` | gpt-5.6-terra | `84299dfa8cc9e9fac4259be84c931459a9597328ae0eb6875fcae6313500df55` |
| `def-asymptotic-resource-comparison` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `d141b521985e9652b94b078aee5e2b35d521bd95cdf36e6747a9d48c3766929b` |
| `def-kleene-t-predicate-and-output-function` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `8be96a2a1e481ef122f15ee5d37e60f2f9e086b612eddc18d2f9f7320ee1a697` |
| `def-time-and-space-constructible-function` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `b2011088d49ad98626df34ee1ca658472604efdac72080c1840c9bf362d3c707` |
| `ex-lambda-definable-iff-partial-recursive` | `primitive-recursive-and-partial-computable-functions-examples` | gpt-5.6-terra | `b214116c8218fe5faaf2177acf6fe736697df95fcd235bbce0d97e22dc4312ec` |
| `fs-every-countable-language-is-decidable` | `decidable-recognizable-and-enumerable-languages` | gpt-5.6-terra | `3611f1d5cfbbd02230a048213ed9fb987ac5490abe1526e5b45b5ce55397cdfc` |
| `fs-model-invariance-means-equal-step-counts` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `342820b58caa4c432302e666e3f67fbd9487e7a5996b1caeb3479c22eb7d00b8` |
| `fs-time-bounds-never-need-constructibility` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `8c65477e72cdd21488c1245fd994263b2e323b02245f3e0e5f4cd1d522df8ba2` |
| `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold` | `iterative-restriction-and-comb-extraction-lemmas` | gpt-5.6-terra | `1fe100b49ef9b6ebc690434d8e205bd2a4a3402fc37595458b6aa0f84c58a398` |
| `lem-turing-step-coding-is-primitive-recursive` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `4a1057b8be51157bf770c632f19d4bf8e3f23dd2cf87c00ed2dc57933bd410bc` |
| `prop-ackermann-is-total-computable-but-not-primitive-recursive` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `62b5bcab9d9d56cd022547faaa1655a7b8581e1cd984cc1f60bcef1722e2658b` |
| `prop-polynomial-time-and-space-are-model-invariant` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `cb11d3e4e32f3326ef3cc13b16c8e0b7f579c219df73dd47dfb97959f62c848a` |
| `thm-kleene-normal-form` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `060a1374672036a05efaad682c0299a56551d9a2a8a32fb8d8430d82e5b72606` |
| `thm-lambda-definable-iff-partial-recursive` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `56906d6fe34b781ab0bd4999b8835c66c0303b128d7234874305a74003521337` |
| `thm-myhill-nerode-characterization` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `c9d42977ee541a0ececcec101d3003703db1913b055af9c79d66f4dbc6b7d77d` |
| `thm-universal-simulation-with-logarithmic-overhead` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `d23063dfa3c72c084541214f0944729014898c3286574cc60d54ffbb333c182f` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-27`

Read `research/frontier-27-judge-closure.json`,
`research/frontier-27-judge.jsonl`,
`research/frontier-27-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-27-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-27-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-27-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
