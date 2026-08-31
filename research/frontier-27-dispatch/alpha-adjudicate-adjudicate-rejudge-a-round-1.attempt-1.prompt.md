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
label: adjudicate-rejudge-a-round-1

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
  "group": "a",
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
      "id": "def-c-zero-on-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-lanczos-process-as-hermitian-arnoldi",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-series-and-absolute-convergence-in-a-normed-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-minres-on-a-symmetric-indefinite-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-l-one-convolution-is-defined-at-every-point",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": [
    {
      "id": "def-c-zero-on-rn",
      "model": "gpt-5.6-terra",
      "context_sha256": "2e1d414e421117ac963948e0feeef6ca85d7d22f7503ce548b7869d354cefbc4",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-lanczos-process-as-hermitian-arnoldi",
      "model": "gpt-5.6-terra",
      "context_sha256": "995fcc63d0215e790f76f9146967fc42b3093865e915a8a3ebccd36a96c640a1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-series-and-absolute-convergence-in-a-normed-space",
      "model": "gpt-5.6-terra",
      "context_sha256": "26e30efee36c1f1a73a008bf77b2f27c9e524a2b132eedcb34eb9f3d4f070bea",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-minres-on-a-symmetric-indefinite-system",
      "model": "gpt-5.6-terra",
      "context_sha256": "8ddafdccf205d4acb398b31f7c4802222d040007465fc1a0c996996336dd3b65",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-l-one-convolution-is-defined-at-every-point",
      "model": "gpt-5.6-terra",
      "context_sha256": "1c98986717c7ddace8cdf6a3efa2248735b355b28e6398fea2a3bb3f16bea292",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **a**, run `frontier-27`

You are the group Alpha for batches **2**, **3**, **4**: 3 A/B pair(s), 6 page(s), 106 item(s), 5 open rejection(s) over 5 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 2 | `conjugate-gradients-minres-and-preconditioning` | A | linear-algebra | 288.000061 | `krylov-subspaces-arnoldi-and-gmres`, `convex-and-semicontinuous-functions-on-rn` |
| 2 | `conjugate-gradients-minres-and-preconditioning-examples` | B | linear-algebra | 288.000062 | `conjugate-gradients-minres-and-preconditioning` |
| 3 | `density-separability-and-convolution-in-lp` | A | measure-theory | 288.029 | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` |
| 3 | `density-separability-and-convolution-in-lp-examples` | B | measure-theory | 288.03 | `density-separability-and-convolution-in-lp` |
| 4 | `normed-and-banach-spaces` | A | functional-analysis | 288.047 | `rn-as-a-normed-space`, `completeness-and-uniform-continuity`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 4 | `normed-and-banach-spaces-examples` | B | functional-analysis | 288.048 | `normed-and-banach-spaces` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `conjugate-gradients-minres-and-preconditioning` — Conjugate Gradients, MINRES and Preconditioning (21 item(s))

- `def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix` · definition — The energy inner product $\langle u,v\rangle_A=\langle Au,v\rangle$ and energy norm $\|u\|_A$ for a Hermitian positive-definite matrix
- `def-quadratic-energy-of-a-hermitian-positive-definite-linear-system` · definition — The quadratic energy $\phi(x)=\tfrac12\langle Ax,x\rangle-\operatorname{Re}\langle b,x\rangle$ of a Hermitian positive-definite linear system
- `thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer` · theorem — For Hermitian positive-definite $A$, the exact solution of $Ax=b$ is the unique minimizer of the quadratic energy
- `def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system` · definition — The $m$th Krylov Galerkin iterate in the affine space $x_0+K_m(A,r_0)$ for a Hermitian positive-definite system
- `prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate` · proposition — Galerkin orthogonality turns residual orthogonality into $A$-orthogonality of the error, and the Galerkin iterate is unique
- `def-conjugate-gradient-recurrence` · definition — The conjugate-gradient recurrence
- `prop-conjugate-gradient-denominators-are-positive-before-convergence` · proposition — Before convergence, every CG denominator $p_k^*Ap_k$ is positive
- `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate` · theorem — In exact arithmetic, CG residuals are mutually orthogonal and the search directions are $A$-conjugate
- `thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error` · theorem — CG is the Krylov Galerkin method, and the $m$th iterate uniquely minimizes the $A$-norm of the error over $x_0+K_m(A,r_0)$
- `thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic` · theorem — In exact arithmetic, CG terminates no later than the relative grade and hence in at most $n$ steps
- `thm-conjugate-gradient-chebyshev-bound-in-the-a-norm` · theorem — CG obeys the Chebyshev $A$-norm bound in terms of the spectral condition number $\kappa_2(A)$
- `rem-floating-point-conjugate-gradients-can-lose-orthogonality-conjugacy-and-finite-termination` · remark — In floating-point arithmetic, CG can lose exact residual orthogonality, $A$-conjugacy, and the finite-termination guarantee
- `def-lanczos-process-as-hermitian-arnoldi` · definition — The Lanczos process as Arnoldi specialized to a Hermitian matrix, with the usual real-subdiagonal phase convention
- `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence` · theorem — With a Hermitian matrix, Arnoldi collapses to the Lanczos three-term recurrence and a real symmetric tridiagonal projection
- `def-minres-iterate-from-the-lanczos-tridiagonalization` · definition — The MINRES iterate from the Lanczos tridiagonal least-squares problem
- `thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space` · theorem — For Hermitian $A$, including the indefinite case, MINRES minimizes the Euclidean residual over $x_0+K_m(A,r_0)$
- `def-stationary-iteration-from-a-matrix-splitting` · definition — Stationary iteration from a matrix splitting $A=M-N$
- `thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one` · theorem — A stationary splitting converges for every start if and only if its iteration matrix has spectral radius below $1$
- `def-left-right-and-symmetric-positive-definite-preconditioning` · definition — Left preconditioning, right preconditioning, and symmetric preconditioning of a linear system
- `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps` · proposition — Invertible preconditioners give equivalent linear systems, with the transformed residuals and errors written explicitly
- `thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem` · theorem — Symmetric positive-definite preconditioning preserves a Hermitian positive-definite CG problem, and the CG bound uses the transformed condition number

### `conjugate-gradients-minres-and-preconditioning-examples` — Conjugate Gradients, MINRES and Preconditioning: Examples and Counterexamples (9 item(s))

- `ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system` · example — CG on a $2\times2$ Hermitian positive-definite system reaches the solution in at most two steps
- `ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension` · example — CG can terminate at a relative grade strictly smaller than the ambient dimension
- `ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues` · example — Clustered eigenvalues give a visibly better CG condition-number bound than equally sized spread spectra
- `cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system` · counterexample — A symmetric indefinite matrix can make the CG denominator vanish or change sign before convergence
- `cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix` · counterexample — A nonsymmetric invertible matrix does not fit the CG orthogonality and minimization theory
- `ex-minres-on-a-symmetric-indefinite-system` · example — MINRES still minimizes the residual on a small symmetric indefinite system
- `ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison` · example — Jacobi and Gauss-Seidel splittings can be compared by the spectral radii of their iteration matrices
- `ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number` · example — A diagonal positive-definite preconditioner can improve the relevant condition number
- `cex-a-preconditioner-can-worsen-the-preconditioned-condition-number` · counterexample — A preconditioner can worsen the condition number that actually controls CG

### `density-separability-and-convolution-in-lp` — Density Separability and Convolution in $L^p$ (35 item(s))

- `def-translation-of-a-function-on-rn` · definition — Translation of a function on $\mathbb{R}^n$
- `def-c-c-and-c-c-infinity-on-rn` · definition — The spaces $C_c(\mathbb{R}^n)$ and $C_c^\infty(\mathbb{R}^n)$
- `def-c-zero-on-rn` · definition — The space $C_0(\mathbb{R}^n)$ of continuous functions vanishing at infinity
- `def-convolution-of-two-functions-on-rn` · definition — Convolution of two functions on $\mathbb{R}^n$
- `def-l-one-approximate-identity-on-rn` · definition — An $L^1$ approximate identity on $\mathbb{R}^n$
- `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` · definition — The mollifier family generated by a unit-mass smooth bump
- `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p` · theorem — Simple functions with finite-measure support are dense in $L^p(\mu)$ for $1 \le p < \infty$
- `thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum` · theorem — Simple functions are dense in $L^\infty(\mu)$ in the essential-supremum norm
- `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes` · lemma — A finite-measure measurable set in $\mathbb{R}^n$ is approximable in measure by a finite union of boxes
- `thm-box-step-functions-are-dense-in-l-p-of-rn` · theorem — Finite linear combinations of box indicators are dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff` · lemma — A compact set inside a bounded open set admits an explicit compactly supported continuous cutoff
- `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess` · lemma — A finite-measure measurable set in $\mathbb{R}^n$ has a compact core and a bounded open neighbourhood of arbitrarily small excess
- `thm-c-c-rn-is-dense-in-l-p-of-rn` · theorem — $C_c(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn` · theorem — The $L^\infty$-closure of $C_c(\mathbb{R}^n)$ is $C_0(\mathbb{R}^n)$, not all of $L^\infty(\mathbb{R}^n)$
- `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn` · theorem — Rational box-step functions form a countable dense subset of $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `lem-countable-generators-yield-countable-set-algebras` · lemma — A countable generator of a sigma-algebra yields a countable algebra of sets
- `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra` · lemma — Finite-measure sets are approximable in measure by sets from a countable generating algebra
- `thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable` · theorem — If $\mu$ is sigma-finite and $\mathcal{A}$ is countably generated, then $L^p(\mu)$ is separable for $1 \le p < \infty$
- `thm-l-infinity-of-unit-interval-is-not-separable` · theorem — $L^\infty[0,1]$ is not separable
- `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p` · lemma — Continuous compactly supported functions are translation-continuous in $L^p$
- `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` · theorem — $\|\tau_h f - f\|_p \to 0$ in $L^p(\mathbb{R}^n)$ as $h \to 0$, for $1 \le p < \infty$
- `lem-borel-representatives-make-the-convolution-integrand-borel-measurable` · lemma — Borel representatives make the convolution integrand Borel measurable
- `lem-convolution-is-independent-of-the-chosen-borel-representatives` · lemma — Convolution on $L^1(\mathbb{R}^n)$ is independent of the chosen Borel representatives
- `thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound` · theorem — If $f,g \in L^1(\mathbb{R}^n)$, then $f*g$ exists almost everywhere, belongs to $L^1$, and $\|f*g\|_1 \le \|f\|_1 \|g\|_1$
- `prop-l-one-convolution-is-bilinear-commutative-and-associative` · proposition — Convolution on $L^1(\mathbb{R}^n)$ is bilinear, commutative, and associative
- `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset` · theorem — The support of a convolution lies in the closure of the support sumset
- `lem-elementary-duality-formula-for-nonnegative-l-p-functions` · lemma — For $1 < p < \infty$, the $L^p$ norm of a nonnegative function is the supremum of its pairings with $L^q$ unit vectors
- `thm-minkowski-integral-inequality` · theorem — Minkowski's integral inequality
- `thm-young-convolution-inequality` · theorem — Young's convolution inequality
- `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity` · corollary — If $1/p + 1/q = 1$, then $f*g$ is continuous and vanishes at infinity
- `prop-mollifier-families-are-l-one-approximate-identities` · proposition — A unit-mass smooth bump generates an $L^1$ approximate identity
- `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign` · theorem — Convolution with a mollifier is smooth, and derivatives pass under the integral sign
- `thm-l-one-approximate-identities-converge-in-l-p` · theorem — Every $L^1$ approximate identity converges to the identity in $L^p$ for $1 \le p < \infty$
- `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions` · corollary — $L^1$ approximate identities converge uniformly on compacta for continuous functions
- `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn` · theorem — $C_c^\infty(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$

### `density-separability-and-convolution-in-lp-examples` — Density Separability and Convolution in $L^p$ — Examples (12 item(s))

- `ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function` · example — $\mathbf{1}_{[0,1]} * \mathbf{1}_{[0,1]}$ is the tent function
- `ex-mollifying-the-unit-interval-indicator-at-two-scales` · example — Mollifying $\mathbf{1}_{[0,1]}$ at two scales
- `ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval` · example — A concrete countable dense family in $L^2[0,1]$
- `ex-initial-interval-indicators-are-one-separated-in-l-infinity` · example — The family $\{\mathbf{1}_{[0,t]} : t \in [0,1]\}$ is $1$-separated in $L^\infty[0,1]$
- `ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function` · example — Young's inequality on an $L^1 * L^2$ pair
- `ex-the-gaussian-family-is-an-l-one-approximate-identity` · example — The Gaussian family is an $L^1$ approximate identity
- `fs-c-c-of-rn-is-dense-in-l-infinity-of-rn` · false-statement — FALSE: $C_c(\mathbb{R}^n)$ is dense in $L^\infty(\mathbb{R}^n)$
- `fs-l-p-of-every-measure-space-is-separable-for-finite-p` · false-statement — FALSE: $L^p(\mu)$ is separable for every measure $\mu$ and every $1 \le p < \infty$
- `fs-translation-is-continuous-in-l-infinity` · false-statement — FALSE: translation is continuous in $L^\infty$
- `fs-l-one-convolution-is-defined-at-every-point` · false-statement — FALSE: if $f,g \in L^1(\mathbb{R}^n)$, then $f*g(x)$ is defined for every $x$
- `cex-two-l-two-functions-can-have-convolution-outside-l-two` · counterexample — Two $L^2$ functions can have convolution outside $L^2$
- `fs-convolution-is-measurable-for-every-lebesgue-representative` · false-statement — FALSE: the Borel-representative discipline in convolution is unnecessary because continuous precomposition always preserves Lebesgue measurability

### `normed-and-banach-spaces` — Normed and Banach Spaces (20 item(s))

- `rem-real-and-complex-normed-space-convention` · remark — Real and complex scalar conventions for normed spaces
- `def-banach-space` · definition — Banach space
- `lem-reverse-triangle-inequality-in-a-normed-space` · lemma — The reverse triangle inequality in a normed space
- `def-linear-isometry-and-isometric-isomorphism` · definition — Linear isometries and isometric isomorphisms
- `def-normed-subspace` · definition — Normed subspace
- `lem-complete-subspace-is-closed` · lemma — A complete normed subspace is closed
- `lem-closed-subspace-of-a-banach-space-is-banach` · lemma — A closed subspace of a Banach space is Banach
- `def-product-norms-on-finitely-many-normed-spaces` · definition — The standard product norms on a finite product of normed spaces
- `lem-vector-operations-are-continuous-in-a-normed-space` · lemma — Vector addition and scalar multiplication are continuous in a normed space
- `lem-finite-product-norms-are-equivalent` · lemma — The standard finite product norms are equivalent
- `thm-finite-products-of-banach-spaces-are-banach` · theorem — Finite products of Banach spaces are Banach
- `def-series-and-absolute-convergence-in-a-normed-space` · definition — Series and absolute convergence in a normed space
- `lem-absolutely-convergent-series-is-cauchy` · lemma — An absolutely convergent series has Cauchy partial sums
- `thm-banach-series-criterion` · theorem — Series criterion for Banach spaces
- `def-completion-of-a-normed-space` · definition — Completion of a normed space
- `lem-completion-operations-are-well-defined` · lemma — The Cauchy-class operations of a normed-space completion are well defined
- `thm-metric-completion-carries-a-unique-banach-space-structure` · theorem — The metric completion of a normed space carries a unique compatible Banach-space structure
- `thm-completion-universal-property-for-bounded-linear-maps` · theorem — Bounded linear maps extend uniquely across the completion
- `cor-normed-space-completions-are-uniquely-linearly-isometric` · corollary — Any two completions of a normed space are uniquely linearly isometric
- `rem-lp-spaces-are-banach-spaces` · remark — The classical $L^p$ spaces are Banach spaces

### `normed-and-banach-spaces-examples` — Normed and Banach Spaces — Examples (9 item(s))

- `ex-ell-infinity-is-a-banach-space` · example — $\ell^\infty$ is Banach for the supremum norm
- `ex-c0-is-a-banach-space` · example — $c_0$ is Banach for the supremum norm
- `ex-cb-of-a-space-is-banach` · example — $C_b(X)$ is Banach for the supremum norm
- `ex-c-of-a-compact-space-is-banach` · example — $C(K)$ is Banach when $K$ is compact metric
- `ex-finite-sequences-c00-with-standard-norms` · example — The finitely supported sequences form an incomplete normed space with different standard completions
- `ex-polynomials-are-not-complete-in-the-supremum-norm` · example — Polynomials are not complete in the supremum norm on a compact interval
- `ex-lp-banach-space-dictionary` · example — Dictionary of the classical $L^p$ and $\ell^p$ Banach spaces
- `cex-an-incomplete-subspace-need-not-be-closed` · counterexample — An incomplete normed subspace need not be closed
- `cex-equivalent-metrics-need-not-come-from-equivalent-norms` · counterexample — Topologically equivalent metrics on a vector space need not come from equivalent norms

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
| `def-c-zero-on-rn` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `2e1d414e421117ac963948e0feeef6ca85d7d22f7503ce548b7869d354cefbc4` |
| `def-lanczos-process-as-hermitian-arnoldi` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `995fcc63d0215e790f76f9146967fc42b3093865e915a8a3ebccd36a96c640a1` |
| `def-series-and-absolute-convergence-in-a-normed-space` | `normed-and-banach-spaces` | gpt-5.6-terra | `26e30efee36c1f1a73a008bf77b2f27c9e524a2b132eedcb34eb9f3d4f070bea` |
| `ex-minres-on-a-symmetric-indefinite-system` | `conjugate-gradients-minres-and-preconditioning-examples` | gpt-5.6-terra | `8ddafdccf205d4acb398b31f7c4802222d040007465fc1a0c996996336dd3b65` |
| `fs-l-one-convolution-is-defined-at-every-point` | `density-separability-and-convolution-in-lp-examples` | gpt-5.6-terra | `1c98986717c7ddace8cdf6a3efa2248735b355b28e6398fea2a3bb3f16bea292` |

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
