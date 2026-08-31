# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-27-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-27
role: alpha-adjudicate
label: adjudicate-rejudge-c-round-1

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
  "group": "c",
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
      "id": "cor-dimension-of-the-kth-exterior-power-is-binomial",
      "scope": "run",
      "owner": "c"
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
      "id": "def-pullback-of-a-covariant-tensor-by-a-linear-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-critical-point-is-an-isolated-point",
      "scope": "run",
      "owner": "c"
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
      "id": "prop-pullback-of-covariant-tensors-is-smooth-and-functorial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-transversality-is-stable-on-a-compact-source",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "cor-dimension-of-the-kth-exterior-power-is-binomial",
      "model": "gpt-5.6-terra",
      "context_sha256": "28c8ce99803cea3d04f42ab6f536ec023b5a303ea1091166ebdbe19d2631d2d0",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-interior-product-of-a-form-by-a-vector-field",
      "model": "gpt-5.6-terra",
      "context_sha256": "9ff9d6c0df1a512a945fac5c662d8bb1e7e1b15b8cfbbf5f32d51e8f78ec07bb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-interior-product-on-alternating-covectors",
      "model": "gpt-5.6-terra",
      "context_sha256": "28719cbb3be3234a8c339c7a8cfed8e191ae5265915feae0018a94d2c4f1930d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-pullback-of-a-covariant-tensor-by-a-linear-map",
      "model": "gpt-5.6-terra",
      "context_sha256": "74361d71f996e0074b67ff9aee226e114ffd5f598b1266bb927301f5e5cdc731",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value",
      "model": "gpt-5.6-terra",
      "context_sha256": "e2beb3850f7e89413482ba70387e244bb1f9ef16eaa04060ed3e3b9e875c4f6d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map",
      "model": "gpt-5.6-terra",
      "context_sha256": "02c2ae9a028742f28b7e955b8f39319311db8e36fa9ad0f2a416a8e49fd8f85c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-every-critical-point-is-an-isolated-point",
      "model": "gpt-5.6-terra",
      "context_sha256": "c29370356dc31861d9b66df89e43db89d2e53cbd89e308898ac65b6739f239b2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-sard-on-the-infinitely-flat-critical-stratum",
      "model": "gpt-5.6-terra",
      "context_sha256": "37b5a27f9c8cf8705601954f3c17bdde46a8f5e337df8e8e856cfd3aff9d3c66",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-sard-slicing-for-compact-null-sections",
      "model": "gpt-5.6-terra",
      "context_sha256": "6d780d966cb71c416b15fca5648920346ba279e5a916ecc3b67c0c6215d36c3a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-countable-unions-and-subsets-of-manifold-null-sets-are-null",
      "model": "gpt-5.6-terra",
      "context_sha256": "464078f66278686dfcf35cf8b36cd74a85c5e7cc0d56e22e2540635303d016d3",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-functoriality-of-finite-dimensional-exterior-powers",
      "model": "gpt-5.6-terra",
      "context_sha256": "f25ca855b2141faee0b15ccc47dab22b3acdf2757a02a4a53bdad78dbd32b61e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-pullback-of-covariant-tensors-is-smooth-and-functorial",
      "model": "gpt-5.6-terra",
      "context_sha256": "69d095d5598f6aa154cc1f83c78763243dfe649e24357a8cbf08148b8c0e5384",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-transversality-is-stable-on-a-compact-source",
      "model": "gpt-5.6-terra",
      "context_sha256": "a2a2c322624dc3b88229b64391f605b0fd5ebd1e43c8cc9c07fed5487d642ca7",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **c**, run `frontier-27`

You are the group Alpha for batches **8**: 2 A/B pair(s), 4 page(s), 116 item(s), 13 open rejection(s) over 13 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 8 | `sard-theorem-and-transversality` | A | differential-geometry | 453 | `smooth-partitions-of-unity-and-exhaustions`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections` |
| 8 | `sard-theorem-and-transversality-examples` | B | differential-geometry | 454 | `sard-theorem-and-transversality` |
| 8 | `tensor-fields-exterior-algebra-and-differential-forms` | A | differential-geometry | 463 | `tangent-cotangent-and-the-differential`, `smooth-vector-bundles-and-sections` |
| 8 | `tensor-fields-exterior-algebra-and-differential-forms-examples` | B | differential-geometry | 464 | `tensor-fields-exterior-algebra-and-differential-forms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sard-theorem-and-transversality` — Sard Theorem and Transversality (44 item(s))

- `def-null-subset-of-a-smooth-manifold` · definition — Null subsets of a smooth manifold
- `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets` · lemma — A $C^1$ map is locally Lipschitz on compact coordinate subsets
- `lem-c1-local-diffeomorphisms-preserve-null-sets-locally` · lemma — $C^1$ local diffeomorphisms preserve null sets locally
- `prop-the-null-set-definition-is-independent-of-the-smooth-atlas` · proposition — The manifold null-set definition is independent of the smooth atlas
- `prop-a-countable-chart-cover-detects-manifold-null-sets` · proposition — A countable chart cover detects manifold null sets
- `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` · proposition — Countable unions and subsets of manifold null sets are null
- `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` · proposition — A null set has dense complement in a positive-dimensional manifold
- `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` · proposition — An equidimensional $C^1$ map sends null sets to null sets
- `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null` · proposition — The image of a lower-dimensional $C^1$ manifold is null
- `cor-positive-codimension-immersed-submanifolds-are-null` · corollary — Positive-codimension immersed submanifolds are null
- `def-critical-locus-and-critical-value-set` · definition — The critical locus and critical value set
- `lem-sard-slicing-for-compact-null-sections` · lemma — Compact null sections imply a compact set is null
- `lem-sard-on-the-nonflat-critical-strata` · lemma — Sard on the nonflat critical strata
- `lem-sard-on-the-infinitely-flat-critical-stratum` · lemma — Sard on the infinitely flat critical stratum
- `thm-morse-sard-for-euclidean-maps` · theorem — Morse-Sard for Euclidean maps
- `thm-morse-sard-for-smooth-manifolds` · theorem — Morse-Sard for smooth manifolds
- `cor-regular-values-have-null-complement-and-are-dense` · corollary — Regular values have null complement and are dense
- `prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact` · proposition — The critical value set of a smooth map is sigma-compact
- `cor-regular-values-form-a-dense-g-delta-set` · corollary — Regular values form a dense $G_\delta$ set
- `cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective` · corollary — A smooth map from lower to higher dimension cannot be surjective
- `def-transverse-linear-subspaces` · definition — Transverse linear subspaces
- `def-a-smooth-map-transverse-to-an-embedded-submanifold` · definition — A smooth map transverse to an embedded submanifold
- `def-transverse-smooth-maps` · definition — Transverse smooth maps
- `def-transverse-embedded-submanifolds` · definition — Transverse embedded submanifolds
- `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient` · lemma — Transversality is equivalent to surjectivity on the normal quotient
- `thm-transverse-preimage-theorem` · theorem — The transverse preimage theorem
- `cor-transverse-intersection-theorem` · corollary — Transverse embedded submanifolds intersect in the expected codimension
- `thm-transverse-fibre-product-theorem` · theorem — Transverse fibre products are embedded submanifolds
- `cor-a-submersion-is-transverse-to-every-embedded-submanifold` · corollary — A submersion is transverse to every embedded submanifold
- `prop-transversality-to-a-point-is-the-regular-value-condition` · proposition — Transversality to a point is the regular-value condition
- `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target` · proposition — Transversality is invariant under diffeomorphic changes of source and target
- `prop-local-graph-characterization-by-transversality-to-vertical-fibres` · proposition — An $m$-dimensional submanifold transverse to vertical fibres is locally a graph
- `prop-global-graph-characterization-by-one-point-transverse-fibres` · proposition — A globally one-to-one transverse-fibre submanifold is a graph
- `def-smooth-family-of-maps-and-evaluation-map` · definition — Smooth families of maps and their evaluation maps
- `thm-parametric-transversality` · theorem — Parametric transversality
- `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse` · corollary — Generic translations of a Euclidean-valued map are transverse
- `cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation` · corollary — Outside a null set, every translation makes a chosen value a transverse zero
- `prop-transversality-is-stable-on-a-compact-source` · proposition — Transversality is stable on a compact source
- `fs-every-critical-point-is-an-isolated-point` · false-statement — Critical points need not be isolated
- `fs-the-set-of-critical-values-is-always-closed` · false-statement — The critical-value set need not be closed
- `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` · false-statement — Sard's theorem does not hold for every $C^1$ map
- `fs-two-submanifolds-with-nonempty-intersection-are-transverse` · false-statement — Intersecting submanifolds need not be transverse
- `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold` · false-statement — A preimage need not be a submanifold without transversality
- `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology` · false-statement — Uniform $C^1$ openness of transversality fails on arbitrary noncompact sources

### `sard-theorem-and-transversality-examples` — Sard Theorem and Transversality — Examples (10 item(s))

- `ex-critical-points-and-values-of-a-height-function-on-a-sphere` · example — Critical points and values of a height function on a sphere
- `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value` · example — A constant map has a large critical locus and one critical value
- `ex-a-smooth-map-with-a-nonclosed-critical-value-set` · example — A smooth map with a nonclosed critical-value set
- `ex-transverse-and-tangent-intersections-of-plane-curves` · example — Transverse and tangent intersections of plane curves
- `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set` · example — Coordinate spheres intersect as a transverse level set
- `ex-a-fibre-product-of-submersions` · example — A fibre product of submersions
- `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely` · example — Generic affine hyperplanes meet an embedded submanifold transversely
- `ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids` · example — A map can be vacuously transverse to a submanifold it avoids
- `cex-a-c1-map-whose-critical-values-have-positive-measure` · counterexample — A $C^1$ map can have critical values of positive measure
- `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension` · counterexample — A tangent intersection can fail the expected-dimension conclusion

### `tensor-fields-exterior-algebra-and-differential-forms` — Tensor Fields Exterior Algebra and Differential Forms (50 item(s))

- `def-type-r-s-tensor-on-a-finite-dimensional-vector-space` · definition — Type $(r,s)$ tensors on a finite-dimensional vector space
- `def-tensor-product-of-multilinear-tensors` · definition — The tensor product of multilinear tensors
- `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear` · proposition — Tensor product of multilinear tensors is associative and bilinear
- `def-permutation-action-on-covariant-tensors` · definition — Permutation action on covariant tensors
- `def-symmetrization-and-alternation-operators` · definition — Symmetrization and alternation operators
- `prop-symmetrization-and-alternation-are-projections` · proposition — Symmetrization and alternation are projections
- `def-contraction-of-a-mixed-tensor` · definition — Contraction of a mixed tensor
- `lem-contraction-is-independent-of-the-basis-formula` · lemma — Contraction is independent of the basis formula
- `def-pullback-of-a-covariant-tensor-by-a-linear-map` · definition — Pullback of a covariant tensor by a linear map
- `prop-linear-pullback-respects-tensor-products-and-permutations` · proposition — Linear pullback respects tensor products and permutations
- `def-alternating-k-covectors` · definition — Alternating $k$-covectors
- `def-wedge-product-of-alternating-covectors` · definition — The wedge product of alternating covectors
- `lem-the-wedge-product-is-alternating-and-bilinear` · lemma — The wedge product is alternating and bilinear
- `thm-wedge-product-is-associative-and-graded-commutative` · theorem — The wedge product is associative and graded-commutative
- `def-exterior-algebra-of-covectors` · definition — The exterior algebra of covectors
- `lem-wedge-monomials-in-a-dual-basis-form-a-basis` · lemma — Wedge monomials in a dual basis form a basis
- `cor-dimension-of-the-kth-exterior-power-is-binomial` · corollary — The dimension of the $k$th exterior power is binomial
- `def-finite-dimensional-exterior-power-of-vectors` · definition — The finite-dimensional exterior power of vectors
- `thm-universal-property-of-the-finite-dimensional-exterior-power` · theorem — The finite-dimensional exterior power has the universal property
- `prop-functoriality-of-finite-dimensional-exterior-powers` · proposition — Finite-dimensional exterior powers are functorial
- `prop-exterior-power-duality-pairing` · proposition — Exterior powers carry a canonical duality pairing
- `prop-the-top-exterior-power-is-one-dimensional` · proposition — The top exterior power is one-dimensional
- `def-interior-product-on-alternating-covectors` · definition — Interior product on alternating covectors
- `prop-interior-product-is-a-graded-antiderivation` · proposition — Interior product is a graded antiderivation
- `def-type-r-s-tensor-bundle` · definition — The type $(r,s)$ tensor bundle
- `thm-tensor-transition-laws-define-a-smooth-vector-bundle` · theorem — Tensor transition laws define a smooth vector bundle
- `def-smooth-tensor-field` · definition — Smooth tensor fields
- `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components` · proposition — Smoothness of a tensor field is equivalent to smooth coordinate components
- `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth` · proposition — Tensor products and contractions of smooth tensor fields are smooth
- `def-pullback-of-a-covariant-tensor-field` · definition — Pullback of a covariant tensor field
- `prop-pullback-of-covariant-tensors-is-smooth-and-functorial` · proposition — Pullback of covariant tensor fields is smooth and functorial
- `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map` · false-statement — A general mixed tensor field does not pull back along every smooth map
- `def-symmetric-and-alternating-covariant-tensor-subbundles` · definition — Symmetric and alternating covariant tensor subbundles
- `thm-symmetric-and-alternating-images-are-smooth-subbundles` · theorem — Symmetric and alternating images are smooth subbundles
- `def-exterior-power-bundle-of-the-cotangent-bundle` · definition — The exterior power bundle of the cotangent bundle
- `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle` · theorem — Exterior power transition laws define a smooth vector bundle
- `def-smooth-differential-k-form` · definition — Smooth differential $k$-forms
- `prop-local-coordinate-expression-for-a-differential-form` · proposition — A differential form has a unique local coordinate expression
- `def-wedge-product-of-differential-forms` · definition — The wedge product of differential forms
- `prop-differential-forms-form-a-graded-commutative-algebra` · proposition — Differential forms form a graded-commutative algebra
- `def-interior-product-of-a-form-by-a-vector-field` · definition — Interior product of a form by a vector field
- `prop-interior-product-on-forms-is-a-graded-antiderivation` · proposition — Interior product on forms is a graded antiderivation
- `def-pullback-of-a-differential-form` · definition — Pullback of a differential form
- `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges` · proposition — Pullback of forms is smooth, functorial, and preserves wedges
- `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically` · proposition — A diffeomorphism pulls back tensor fields and forms isomorphically
- `fs-the-wedge-product-is-commutative` · false-statement — The wedge product is not commutative
- `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product` · false-statement — A nonzero one-form wedges with itself to zero
- `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n` · false-statement — Forms of degree above dimension vanish
- `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions` · false-statement — Tensor components do not transform as independent scalars
- `fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis` · false-statement — A general tensor is not determined by diagonal values alone

### `tensor-fields-exterior-algebra-and-differential-forms-examples` — Tensor Fields Exterior Algebra and Differential Forms — Examples (12 item(s))

- `ex-tensor-product-and-contraction-in-a-basis` · example — Tensor product and contraction in a basis
- `ex-a-bilinear-form-as-a-type-zero-two-tensor` · example — A bilinear form as a type $(0,2)$ tensor
- `ex-an-endomorphism-as-a-type-one-one-tensor` · example — An endomorphism as a type $(1,1)$ tensor
- `ex-the-identity-endomorphism-and-its-coordinate-independent-trace` · example — The identity endomorphism and its coordinate-independent trace
- `ex-wedge-products-of-the-standard-dual-basis` · example — Wedge products of the standard dual basis
- `ex-determinant-as-the-pairing-of-top-exterior-powers` · example — Determinant as the pairing of top exterior powers
- `ex-the-euclidean-metric-as-a-symmetric-two-tensor` · example — The Euclidean metric as a symmetric two-tensor
- `ex-the-area-form-in-polar-coordinates` · example — The area form in polar coordinates
- `ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve` · example — Pullback of the circle angular form along a parametrized curve
- `cex-a-vector-field-with-no-pullback-under-a-noninjective-map` · counterexample — A vector field need not admit a pullback under a noninjective map
- `cex-the-volume-coordinate-expression-changes-sign-under-a-reflection` · counterexample — A reflection changes the sign of a top-degree coordinate form
- `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor` · example — The canonical one-form on a cotangent bundle

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
| `cor-dimension-of-the-kth-exterior-power-is-binomial` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `28c8ce99803cea3d04f42ab6f536ec023b5a303ea1091166ebdbe19d2631d2d0` |
| `def-interior-product-of-a-form-by-a-vector-field` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `9ff9d6c0df1a512a945fac5c662d8bb1e7e1b15b8cfbbf5f32d51e8f78ec07bb` |
| `def-interior-product-on-alternating-covectors` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `28719cbb3be3234a8c339c7a8cfed8e191ae5265915feae0018a94d2c4f1930d` |
| `def-pullback-of-a-covariant-tensor-by-a-linear-map` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `74361d71f996e0074b67ff9aee226e114ffd5f598b1266bb927301f5e5cdc731` |
| `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value` | `sard-theorem-and-transversality-examples` | gpt-5.6-terra | `e2beb3850f7e89413482ba70387e244bb1f9ef16eaa04060ed3e3b9e875c4f6d` |
| `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `02c2ae9a028742f28b7e955b8f39319311db8e36fa9ad0f2a416a8e49fd8f85c` |
| `fs-every-critical-point-is-an-isolated-point` | `sard-theorem-and-transversality` | gpt-5.6-terra | `c29370356dc31861d9b66df89e43db89d2e53cbd89e308898ac65b6739f239b2` |
| `lem-sard-on-the-infinitely-flat-critical-stratum` | `sard-theorem-and-transversality` | gpt-5.6-terra | `37b5a27f9c8cf8705601954f3c17bdde46a8f5e337df8e8e856cfd3aff9d3c66` |
| `lem-sard-slicing-for-compact-null-sections` | `sard-theorem-and-transversality` | gpt-5.6-terra | `6d780d966cb71c416b15fca5648920346ba279e5a916ecc3b67c0c6215d36c3a` |
| `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` | `sard-theorem-and-transversality` | gpt-5.6-terra | `464078f66278686dfcf35cf8b36cd74a85c5e7cc0d56e22e2540635303d016d3` |
| `prop-functoriality-of-finite-dimensional-exterior-powers` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `f25ca855b2141faee0b15ccc47dab22b3acdf2757a02a4a53bdad78dbd32b61e` |
| `prop-pullback-of-covariant-tensors-is-smooth-and-functorial` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `69d095d5598f6aa154cc1f83c78763243dfe649e24357a8cbf08148b8c0e5384` |
| `prop-transversality-is-stable-on-a-compact-source` | `sard-theorem-and-transversality` | gpt-5.6-terra | `a2a2c322624dc3b88229b64391f605b0fd5ebd1e43c8cc9c07fed5487d642ca7` |

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
