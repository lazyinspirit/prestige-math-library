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
  "group": "b",
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
      "id": "ex-the-subobject-classifier-of-a-presheaf-category",
      "scope": "run",
      "owner": "b"
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
      "id": "lem-the-preconnecting-arrow-annihilates-boundaries",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-dimension-as-minimal-number-of-radical-generators",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-sequence-of-relative-homology-for-a-composable-pair",
      "scope": "run",
      "owner": "b"
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
    }
  ],
  "live_tuples": [
    {
      "id": "ex-a-six-term-cohomology-sequence",
      "model": "gpt-5.6-terra",
      "context_sha256": "e6eface4da309d265d6f05537e0eeed6d1febe918f0a23281b5ccebc1f0b2e06",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-currying-for-sets-of-three-variables",
      "model": "gpt-5.6-terra",
      "context_sha256": "16a2835f0ebed40a2c4c1ff1fc17c59cac10db37dc6c74376c58f0006fb4d83b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-subobject-classifier-of-a-presheaf-category",
      "model": "gpt-5.6-terra",
      "context_sha256": "bcb3832ea69f3b5ddedd1e22875008acb6595f44063b3253bb3b691d2476ea56",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-left-complex",
      "model": "gpt-5.6-terra",
      "context_sha256": "4cfd1b87f838002957503f918df37dd2e8ae5729b33874769936ba287f515633",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-middle-complex",
      "model": "gpt-5.6-terra",
      "context_sha256": "d2f1d15401577e281bba41d4b32df3fdbd92677286de28a8cddf58b6f79a517c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-right-complex",
      "model": "gpt-5.6-terra",
      "context_sha256": "0d0a1ab6165aed5e9488a0af30a4ac7cd3659263e990e5ce5812b4f1148ca4ca",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-exactness-at-the-target-of-the-connecting-map",
      "model": "gpt-5.6-terra",
      "context_sha256": "95b752b770df8c1d861e1ff2fa0ea2bc5f022a612460147d3ac1959b8461a5a0",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-principal-ideal-theorem-associated-prime-step",
      "model": "gpt-5.6-terra",
      "context_sha256": "e74c1bcfda711be1455cfcbbca71630b15689522b580b68217bd822a942a6ff0",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-principal-ideal-theorem-reduction-to-local-domain",
      "model": "gpt-5.6-terra",
      "context_sha256": "9fbc699e433dfe79b69bbf6bdde1ab6a4fbdda71427d00b0f6086d0256c0b4fb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-the-preconnecting-arrow-annihilates-boundaries",
      "model": "gpt-5.6-terra",
      "context_sha256": "16e9ec58b627f834f978125a91312f22a3488151487f37667c7bb384d77a4034",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence",
      "model": "gpt-5.6-terra",
      "context_sha256": "363aae6cf28168a07e91aafcc286cdc7ba96553368f3e8a63b0a5af54324b446",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-dimension-as-minimal-number-of-radical-generators",
      "model": "gpt-5.6-terra",
      "context_sha256": "950c9d4ad9d2bb525704ebe25c4b90387799a26ec712de45649cf5295d06c1bf",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-long-exact-sequence-of-relative-homology-for-a-composable-pair",
      "model": "gpt-5.6-terra",
      "context_sha256": "80b3b7e416ba9892af3939b0edc1df28becd128a6654db74800921e556a9694d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-naturality-of-the-homology-connecting-morphism",
      "model": "gpt-5.6-terra",
      "context_sha256": "036a96f31ad38dae16826e9fde1a731f4e3136420c6d989c81cc3cfab1347e52",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-cone-long-exact-sequence",
      "model": "gpt-5.6-terra",
      "context_sha256": "bd9f5f18904bfb99853d663e1764d91c26df3059655033c9fde2460959d164c9",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-internal-hom-composition-morphism",
      "model": "gpt-5.6-terra",
      "context_sha256": "d8e8d40f9de43762268b4cb9558032d6b2e86aac84df6a47b6c04e1e129c3083",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism",
      "model": "gpt-5.6-terra",
      "context_sha256": "ca2b8f4e859688c7b1f5aa54aaca29863513662217d6595d1d488c859395d1f5",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-two-element-set-is-a-subobject-classifier-for-sets",
      "model": "gpt-5.6-terra",
      "context_sha256": "9027c181ada58406de4d77753f8fa866a2a5f86ae9c558f3696ba52562678544",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **b**, run `frontier-27`

You are the group Alpha for batches **1**, **5**, **6**: 3 A/B pair(s), 6 page(s), 126 item(s), 18 open rejection(s) over 18 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `krull-dimension-and-height-theorems` | A | commutative-algebra | 111.019 | `dedekind-domains-and-ideal-classes-examples` |
| 1 | `krull-dimension-and-height-theorems-examples` | B | commutative-algebra | 111.02 | `krull-dimension-and-height-theorems` |
| 5 | `closed-monoidal-categories-and-the-internal-hom` | A | category-theory | 365.027 | `strictification-and-mac-lanes-coherence-theorem-examples` |
| 5 | `closed-monoidal-categories-and-the-internal-hom-examples` | B | category-theory | 365.028 | `closed-monoidal-categories-and-the-internal-hom` |
| 6 | `long-exact-sequences-in-homology` | A | homological-algebra | 365.043 | `mapping-cones-cylinders-and-chain-triangles-examples`, `the-diagram-lemmas-in-an-abelian-category` |
| 6 | `long-exact-sequences-in-homology-examples` | B | homological-algebra | 365.044 | `long-exact-sequences-in-homology` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `krull-dimension-and-height-theorems` — Krull Dimension and Height Theorems (37 item(s))

- `cor-minimal-prime-has-height-zero` · corollary — Minimal primes are exactly the primes of height zero
- `lem-prime-chains-in-a-domain-start-at-zero` · lemma — In a domain, every prime chain below a prime begins at (0)
- `lem-height-in-quotient-is-relative-chain-length` · lemma — Height in a quotient measures chains between two primes
- `lem-principal-ideal-theorem-reduction-to-local-domain` · lemma — Reduce the principal ideal theorem to a Noetherian local domain
- `lem-principal-ideal-theorem-associated-prime-step` · lemma — The associated-prime step inside the principal ideal theorem
- `thm-krull-principal-ideal-theorem` · theorem — Krull's principal ideal theorem
- `cor-noetherian-local-domain-dimension-zero-iff-field` · corollary — A Noetherian local domain has dimension zero exactly when it is a field
- `cor-minimal-prime-over-a-nonzerodivisor-has-height-one` · corollary — A minimal prime over a principal nonzerodivisor has height one
- `lem-height-theorem-first-generator-reduction` · lemma — Choose the first generator's minimal prime inside the target prime
- `lem-height-theorem-quotient-induction` · lemma — Quotienting by the first minimal prime reduces the remaining height count
- `thm-krull-height-theorem` · theorem — Krull's height theorem
- `cor-height-of-a-prime-bounded-by-minimal-number-of-generators` · corollary — Height is bounded by the minimal number of local generators
- `lem-height-converse-parameter-selection` · lemma — Select generators witnessing the converse height theorem
- `thm-krull-height-theorem-converse` · theorem — Converse to Krull's height theorem in localised form
- `def-system-of-parameters-and-parameter-ideal` · definition — Systems of parameters and parameter ideals
- `lem-parameter-ideal-equivalent-m-primary` · lemma — Parameter ideals are exactly the m-primary d-generated ideals
- `lem-parameter-selection-avoids-minimal-components` · lemma — Choose a parameter that misses the top-dimensional minimal components
- `lem-parameter-dimension-drop-is-exact` · lemma — A first parameter lowers local dimension by exactly one
- `thm-existence-of-systems-of-parameters` · theorem — Every finite-dimensional Noetherian local ring has a system of parameters
- `thm-dimension-as-minimal-number-of-radical-generators` · theorem — Local dimension is the minimal number of generators of an ideal with maximal radical
- `cor-dimension-drops-under-a-parameter` · corollary — Quotienting by a first parameter lowers local dimension by one
- `cor-localisation-dimension-does-not-increase` · corollary — Localisation does not increase Krull dimension
- `cor-quotient-dimension-does-not-increase` · corollary — Passing to a quotient does not increase Krull dimension
- `lem-polynomial-ring-dimension-lower-chain` · lemma — A prime chain in R extends to a longer chain in R[x]
- `lem-polynomial-prime-contraction-height-jump-at-most-one` · lemma — Only one saturated step can lie over a fixed contracted prime in R[x]
- `lem-polynomial-ring-dimension-upper-bound` · lemma — A prime chain in R[x] has length at most one more than its contraction chain
- `thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring` · theorem — A Noetherian polynomial ring has dimension one larger
- `cor-dimension-of-a-finite-polynomial-ring-over-a-field` · corollary — A polynomial ring in n variables over a field has dimension n
- `lem-affine-domain-normalisation-dimension-upper-bound` · lemma — A finite affine extension of a polynomial ring has dimension at most the number of variables
- `lem-affine-domain-normalisation-dimension-lower-bound` · lemma — A finite affine extension of a polynomial ring has dimension at least the number of variables
- `thm-affine-domain-dimension-transcendence-degree` · theorem — Affine-domain dimension equals transcendence degree
- `lem-affine-domain-chain-dimension-formula-step` · lemma — Transcendence degrees along affine prime quotients add correctly
- `thm-dimension-formula-for-affine-domains` · theorem — The dimension formula for affine domains
- `cor-height-plus-quotient-dimension-affine-domain` · corollary — Height plus quotient dimension equals ambient dimension in an affine domain
- `cor-affine-domain-maximal-ideal-height-equals-dimension` · corollary — Maximal ideals of an affine domain have full height
- `cor-maximal-chains-in-affine-domains-have-equal-length` · corollary — Maximal chains in an affine domain all have the same length
- `rem-catenarity-boundary` · remark — Why the equal-chain statement stops at affine domains

### `krull-dimension-and-height-theorems-examples` — Krull Dimension and Height Theorems — Examples (7 item(s))

- `ex-relative-height-in-a-quotient` · example — Relative height in a quotient of k[x,y,z]
- `ex-principal-ideal-height-zero-for-a-zerodivisor` · example — A principal ideal generated by a zero divisor can have a minimal prime of height zero
- `ex-height-theorem-bound-sharp` · example — Coordinate ideals show the height bound is sharp
- `ex-system-of-parameters-not-a-minimal-generating-set` · example — A system of parameters need not minimally generate the maximal ideal
- `ex-localisation-strictly-lowers-dimension` · example — Localisation can strictly lower dimension
- `ex-polynomial-dimension-zero-ring-boundary` · example — The polynomial-dimension formula at fields, Artinian rings, and the zero-ring boundary
- `ex-affine-dimension-formula` · example — The affine dimension formula on a plane curve domain

### `closed-monoidal-categories-and-the-internal-hom` — Closed Monoidal Categories and the Internal Hom (33 item(s))

- `def-left-closed-and-right-closed-monoidal-category` · definition — Left-closed, right-closed, and biclosed monoidal categories
- `thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism` · theorem — The internal hom is unique up to unique natural isomorphism
- `def-the-internal-hom-and-its-evaluation-morphism` · definition — The internal hom and its evaluation morphism
- `thm-in-a-symmetric-monoidal-category-the-two-closures-agree` · theorem — A supplied symmetry identifies the left and right internal homs
- `cex-a-monoidal-category-need-not-be-closed` · counterexample — A monoidal category need not be closed
- `thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable` · theorem — In a biclosed monoidal category tensor is cocontinuous in each variable
- `thm-the-internal-hom-is-continuous-in-each-variable` · theorem — The internal hom preserves limits in the covariant variable and sends colimits to limits in the contravariant variable
- `thm-the-internal-hom-composition-morphism` · theorem — The internal-hom composition morphism
- `thm-the-unit-is-an-internal-hom-unit` · theorem — The tensor unit is an internal-hom unit
- `def-exponential-object` · definition — Exponential object
- `def-cartesian-closed-category` · definition — Cartesian closed category
- `thm-set-is-cartesian-closed` · theorem — Set is cartesian closed
- `thm-the-category-of-small-categories-is-cartesian-closed` · theorem — The category of small categories is cartesian closed
- `thm-a-presheaf-category-on-a-small-category-is-cartesian-closed` · theorem — A presheaf category on a small category is cartesian closed
- `thm-currying-and-uncurrying-are-mutually-inverse` · theorem — Currying and uncurrying are mutually inverse
- `cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects` · corollary — In a cartesian closed category, any initial object is strict
- `thm-cartesian-closed-preorders-have-relative-implications` · theorem — A cartesian closed preorder has relative implications
- `def-slice-category-and-the-pullback-functor` · definition — Slice categories, composition, and pullback along a morphism
- `def-locally-cartesian-closed-category` · definition — Locally cartesian closed category
- `thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed` · theorem — Slices of a locally cartesian closed category are locally cartesian closed
- `thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed` · theorem — A locally cartesian closed category with a terminal object is cartesian closed
- `thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits` · theorem — A locally cartesian closed category has pullbacks, and with a terminal object it has all finite limits
- `thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint` · theorem — Local cartesian closure is equivalent to every pullback functor having a right adjoint
- `thm-set-is-locally-cartesian-closed` · theorem — Set is locally cartesian closed
- `def-subobject-classifier` · definition — Subobject classifier
- `thm-a-subobject-classifier-represents-the-subobject-functor` · theorem — With a supplied well-powering, a subobject classifier represents the subobject functor
- `thm-the-two-element-set-is-a-subobject-classifier-for-sets` · theorem — The two-element set is a subobject classifier for Set
- `rem-what-is-not-developed-here` · remark — Boundary: this page stops before elementary and Grothendieck toposes
- `fs-every-monoidal-category-is-closed` · false-statement — FALSE: every monoidal category is closed
- `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category` · false-statement — FALSE: the left and right internal homs agree in every monoidal category
- `fs-a-cartesian-closed-category-has-all-finite-limits` · false-statement — FALSE: every cartesian closed category has all finite limits
- `fs-every-cartesian-closed-category-is-locally-cartesian-closed` · false-statement — FALSE: every cartesian closed category is locally cartesian closed
- `fs-a-subobject-classifier-is-any-object-representing-monomorphisms` · false-statement — FALSE: a subobject classifier is any object representing monomorphisms

### `closed-monoidal-categories-and-the-internal-hom-examples` — Closed Monoidal Categories and the Internal Hom - Examples (6 item(s))

- `ex-the-function-set-as-an-exponential-computed` · example — A function set computed as an exponential object
- `ex-currying-for-sets-of-three-variables` · example — Currying for sets of three variables
- `ex-the-internal-hom-of-abelian-groups` · example — The internal hom of abelian groups
- `ex-the-exponential-of-two-small-categories` · example — The exponential of two small categories computed on a walking-arrow source
- `ex-a-locally-cartesian-closed-slice-computed` · example — A slice of Set computed as a locally cartesian closed category
- `ex-the-subobject-classifier-of-a-presheaf-category` · example — The subobject classifier in a presheaf category on the walking arrow

### `long-exact-sequences-in-homology` — Long Exact Sequences in Homology (35 item(s))

- `def-morphism-of-short-exact-sequences-of-complexes` · definition — A morphism of short exact sequences of complexes
- `lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes` · lemma — The cycle-boundary diagram associated to a short exact sequence of complexes
- `def-preconnecting-arrow-on-cycles` · definition — The preconnecting arrow on cycles
- `lem-the-preconnecting-arrow-annihilates-boundaries` · lemma — The preconnecting arrow annihilates boundaries
- `def-connecting-morphism-in-homology` · definition — The connecting morphism in homology
- `prop-elementwise-formula-for-the-connecting-map-in-module-categories` · proposition — Elementwise formula for the connecting map in module categories
- `lem-exactness-at-the-homology-of-the-left-complex` · lemma — Exactness at the homology of the left complex
- `lem-exactness-at-the-homology-of-the-middle-complex` · lemma — Exactness at the homology of the middle complex
- `lem-exactness-at-the-homology-of-the-right-complex` · lemma — Exactness at the homology of the right complex
- `lem-exactness-at-the-target-of-the-connecting-map` · lemma — Exactness at the target of the connecting map
- `thm-long-exact-sequence-in-homology` · theorem — The long exact sequence in homology
- `thm-naturality-of-the-homology-connecting-morphism` · theorem — Naturality of the homology connecting morphism
- `cor-the-long-exact-homology-sequence-is-natural` · corollary — The long exact homology sequence is natural
- `thm-long-exact-sequence-in-cohomology` · theorem — The long exact sequence in cohomology
- `thm-naturality-of-the-cohomology-connecting-morphism` · theorem — Naturality of the cohomology connecting morphism
- `cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology` · corollary — A short exact sequence with acyclic middle complex identifies neighbouring homology
- `cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes` · corollary — Two-out-of-three for acyclicity in a short exact sequence of complexes
- `cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram` · corollary — Two-out-of-three for quasi-isomorphisms in a short exact sequence diagram
- `prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence` · proposition — The connecting morphism vanishes for a chain-split short exact sequence
- `thm-the-cone-long-exact-sequence` · theorem — The cone long exact sequence
- `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign` · proposition — The cone connecting map agrees with the shifted identity up to the declared sign
- `cor-the-cone-criterion-from-the-general-long-exact-sequence` · corollary — The cone criterion from the general long exact sequence
- `thm-long-exact-sequence-of-relative-homology-for-a-composable-pair` · theorem — The long exact sequence of relative homology for a composable pair
- `cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone` · corollary — A chain map between acyclic complexes has an acyclic cone
- `prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence` · proposition — An exact functor carries the long exact homology sequence to the corresponding long exact sequence
- `cor-homology-of-a-degreewise-split-direct-sum-sequence` · corollary — Homology of a chain-split direct-sum sequence
- `cor-short-five-lemma-for-quasi-isomorphisms` · corollary — Short five lemma for quasi-isomorphisms
- `prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees` · proposition — A short exact sequence of complexes gives six-term exact sequences when homology is concentrated in two degrees
- `def-homological-delta-functor-carried-by-homology-of-complexes` · definition — The homological delta-functor carried by homology of complexes
- `prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws` · proposition — Homology of complexes satisfies the delta-functor naturality and exactness laws
- `fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof` · false-statement — FALSE: the connecting morphism is defined by choosing one lift with no independence proof
- `fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map` · false-statement — FALSE: a degreewise split short exact sequence of complexes has zero connecting map
- `fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes` · false-statement — FALSE: the homology functor is exact on short exact sequences of complexes
- `fs-the-cohomology-connecting-morphism-lowers-degree` · false-statement — FALSE: the cohomology connecting morphism lowers degree
- `fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square` · false-statement — FALSE: naturality of the long exact sequence follows without checking the connecting square

### `long-exact-sequences-in-homology-examples` — Long Exact Sequences in Homology — Examples (8 item(s))

- `ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes` · example — The connecting map for a short exact sequence of two-term complexes
- `ex-a-degreewise-split-sequence-with-nonzero-connecting-map` · example — A degreewise split sequence with nonzero connecting map
- `ex-the-cone-long-exact-sequence-for-multiplication-by-m` · example — The cone long exact sequence for multiplication by m
- `ex-two-out-of-three-for-a-diagram-of-finite-complexes` · example — Two-out-of-three for a diagram of finite complexes
- `ex-a-six-term-cohomology-sequence` · example — A six-term cohomology sequence
- `cex-homology-is-not-an-exact-functor` · counterexample — Homology is not an exact functor
- `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences` · example — Naturality of a connecting map under a map of coefficient sequences
- `ex-relative-homology-of-a-composable-pair-of-stalk-complexes` · example — Relative homology of a composable pair of stalk complexes

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
| `ex-a-six-term-cohomology-sequence` | `long-exact-sequences-in-homology-examples` | gpt-5.6-terra | `e6eface4da309d265d6f05537e0eeed6d1febe918f0a23281b5ccebc1f0b2e06` |
| `ex-currying-for-sets-of-three-variables` | `closed-monoidal-categories-and-the-internal-hom-examples` | gpt-5.6-terra | `16a2835f0ebed40a2c4c1ff1fc17c59cac10db37dc6c74376c58f0006fb4d83b` |
| `ex-the-subobject-classifier-of-a-presheaf-category` | `closed-monoidal-categories-and-the-internal-hom-examples` | gpt-5.6-terra | `bcb3832ea69f3b5ddedd1e22875008acb6595f44063b3253bb3b691d2476ea56` |
| `lem-exactness-at-the-homology-of-the-left-complex` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `4cfd1b87f838002957503f918df37dd2e8ae5729b33874769936ba287f515633` |
| `lem-exactness-at-the-homology-of-the-middle-complex` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `d2f1d15401577e281bba41d4b32df3fdbd92677286de28a8cddf58b6f79a517c` |
| `lem-exactness-at-the-homology-of-the-right-complex` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `0d0a1ab6165aed5e9488a0af30a4ac7cd3659263e990e5ce5812b4f1148ca4ca` |
| `lem-exactness-at-the-target-of-the-connecting-map` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `95b752b770df8c1d861e1ff2fa0ea2bc5f022a612460147d3ac1959b8461a5a0` |
| `lem-principal-ideal-theorem-associated-prime-step` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `e74c1bcfda711be1455cfcbbca71630b15689522b580b68217bd822a942a6ff0` |
| `lem-principal-ideal-theorem-reduction-to-local-domain` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `9fbc699e433dfe79b69bbf6bdde1ab6a4fbdda71427d00b0f6086d0256c0b4fb` |
| `lem-the-preconnecting-arrow-annihilates-boundaries` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `16e9ec58b627f834f978125a91312f22a3488151487f37667c7bb384d77a4034` |
| `prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `363aae6cf28168a07e91aafcc286cdc7ba96553368f3e8a63b0a5af54324b446` |
| `thm-dimension-as-minimal-number-of-radical-generators` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `950c9d4ad9d2bb525704ebe25c4b90387799a26ec712de45649cf5295d06c1bf` |
| `thm-long-exact-sequence-of-relative-homology-for-a-composable-pair` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `80b3b7e416ba9892af3939b0edc1df28becd128a6654db74800921e556a9694d` |
| `thm-naturality-of-the-homology-connecting-morphism` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `036a96f31ad38dae16826e9fde1a731f4e3136420c6d989c81cc3cfab1347e52` |
| `thm-the-cone-long-exact-sequence` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `bd9f5f18904bfb99853d663e1764d91c26df3059655033c9fde2460959d164c9` |
| `thm-the-internal-hom-composition-morphism` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `d8e8d40f9de43762268b4cb9558032d6b2e86aac84df6a47b6c04e1e129c3083` |
| `thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `ca2b8f4e859688c7b1f5aa54aaca29863513662217d6595d1d488c859395d1f5` |
| `thm-the-two-element-set-is-a-subobject-classifier-for-sets` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `9027c181ada58406de4d77753f8fa866a2a5f86ae9c558f3696ba52562678544` |

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
