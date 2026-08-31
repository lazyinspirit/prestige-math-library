# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-26",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "b",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-the-cfl-pumping-lemma-characterizes-cfls]: cex-the-cfl-pumping-lemma-characterizes-cfls: current gpt-5.6-terra rejection has no exact Alpha outcome for context 05dff1a5b5f2fa561ee067030f0a33cb89e1893c5f",
      "output": "level-coverage --judge-only: 441/441 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 41 unadjudicated, 0 open fatal, 190 adjudicated rejection(s) closed nonfatally; legacy gate counter 441/441 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-the-cfl-pumping-lemma-characterizes-cfls]: cex-the-cfl-pumping-lemma-characterizes-cfls: current gpt-5.6-terra rejection has no exact Alpha outcome for context 05dff1a5b5f2fa561ee067030f0a33cb89e1893c5fd853f0225a35d5a1ed74ac\nERROR judge-adjudication-missing [cor-ideal-divisibility-reverses-inclusion-dedekind]: cor-ideal-divisibility-reverses-inclusion-dedekind: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6505badf3b04e9e96e7157aa0def30dae6271c8ae5c7be0e7af81e4de27e51bc\nERROR judge-adjudication-missing [cor-ideals-in-a-dedekind-domain-are-two-generated]: cor-ideals-in-a-dedekind-domain-are-two-generated: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7f0f488e011cd6718ab7db37a5eaeb40f0032cac96b639689e6977c5d4bb069b\nERROR judge-adjudication-missing [def-calligraphic-l-p-on-a-measure-space]: def-calligraphic-l-p-on-a-measure-space: current gpt-5.6-terra rejection has no exact Alpha outcome for context c38e9d45308a13f2c7e907a8d1dc9a7c80868fa82b4f90f55dc251626a2a750a\nERROR judge-adjudication-missing [def-condition-number-of-a-simple-eigenvalue]: def-condition-number-of-a-simple-eigenvalue: current gpt-5.6-terra rejection has no exact Alpha outcome for context ab5368eb804133b68cf99aa99700b19fabf51d4b952a1ff092754254379bc26d\nERROR judge-adjudication-missing [def-effective-encoding-of-turing-machines]: def-effective-encoding-of-turing-machines: current gpt-5.6-terra rejection has no exact Alpha outcome for context c7ebed78cb0293accc3d7777805f4250a1423401a3f7c394556424c80cf1f437\nERROR judge-adjudication-missing [def-generalized-nfa]: def-generalized-nfa: current gpt-5.6-terra rejection has no exact Alpha outcome for context bdf142144018d8a7f156ae2daa5d781a51235de4f0314ff3b4f527543640bd62\nERROR judge-adjudication-missing [def-grade-and-relative-minimal-polynomial-of-a-start-vector]: def-grade-and-relative-minimal-polynomial-of-a-start-vector: current gpt-5.6-terra rejection has no exact Alpha outcome for context 04b28d48330dd1bfcaf3bd5444db70b279c5ed01c6dc89d37980012d6c605fd4\nERROR judge-adjudication-missing [def-normal-and-conormal-bundles-of-an-embedded-submanifold]: def-normal-and-conormal-bundles-of-an-embedded-submanifold: current gpt-5.6-terra rejection has no exact Alpha outcome for context d7070c7ba603a3fb371f1b016dea40a4ae53fdd0a672209b4f8ea477813da5b2\nERROR judge-adjudication-missing [def-universal-turing-machine]: def-universal-turing-machine: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9f657380d5e12eab7a23b851e2dfbbc110eb561a9521d2c13282a1249c911f2a\nERROR judge-adjudication-missing [def-vector-subbundle]: def-vector-subbundle: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9b219eda3ebca7e7ee88ed1a72640dc4407faec6086194170409455830efa748\nERROR judge-adjudication-missing [ex-semilocal-dedekind-domain-is-a-pid]: ex-semilocal-dedekind-domain-is-a-pid: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8add38cb2cf5faedb3410e3dc040b923b3f0ff933a59ef1a56947e33861dc615\nERROR judge-adjudication-missing [ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial]: ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3a0ef5bbaee7d1d6785b4e94198016b3e91f3c1fe97d879367de3d6797dae309\nERROR judge-adjudication-missing [ex-the-tangent-bundle-of-the-circle-is-trivial]: ex-the-tangent-bundle-of-the-circle-is-trivial: current gpt-5.6-terra rejection has no exact Alpha outcome for context fca2223329039d29f502cc2ff2899477a920e7c49ce8cab90ff3f5bfda9f70c7\nERROR judge-adjudication-missing [fs-cfg-equivalence-is-decidable-by-normalization]: fs-cfg-equivalence-is-decidable-by-normalization: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0863cd6593d555ad6b9eb0b121ad02b60b90dde5e20f694023c3e6bdbd79874c\nERROR judge-adjudication-missing [fs-every-diagram-in-a-monoidal-category-commutes]: fs-every-diagram-in-a-monoidal-category-commutes: current gpt-5.6-terra rejection has no exact Alpha outcome for context 473153f0582ec702c92293aa20b29be52d4510df8c907b9676d44d99bdfc4329\nERROR judge-adjudication-missing [fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere]: fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8efc4ede3048a89b0388d8b550da39d6aeb158a56c9da0a15de9c648647208b8\nERROR judge-adjudication-missing [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: fs-every-monoidal-category-is-isomorphic-to-a-strict-one: current gpt-5.6-terra rejection has no exact Alpha outcome for context bd1d9374eca7957eea7b5ccdf511b8b6c10c74f9a55816b53d7f6bcdd6bc6f8c\nERROR judge-adjudication-missing [fs-the-cfl-pumping-lemma-characterizes-cfls]: fs-the-cfl-pumping-lemma-characterizes-cfls: current gpt-5.6-terra rejection has no exact Alpha outcome for context 838500adf2ab599cd2b67b03d8f5d295b0c056b64accb985f85c42dc3d60735a\nERROR judge-adjudication-missing [fs-the-mapping-cone-differential-needs-no-minus-sign]: fs-the-mapping-cone-differential-needs-no-minus-sign: current gpt-5.6-terra rejection has no exact Alpha outcome for context 39611bf00d9baa72cb549fefbe38f1ac9742b989016d6d88583a9edd285a35d2\nERROR judge-adjudication-missing [lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set]: lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set: current gpt-5.6-terra rejection has no exact Alpha outcome for context 15790d25a00389c7803e7464eeab56fdd3a4a978722b3e7bd3e3346d62b7fd03\nERROR judge-adjudication-missing [lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs]: lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs: current gpt-5.6-terra rejection has no exact Alpha outcome for context ea9b96d994913ea79b9d87c795d0d5b2678170b83682f40b45a74822c3505459\nERROR judge-adjudication-missing [lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade]: lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade: current gpt-5.6-terra rejection has no exact Alpha outcome for context 473b56e2e36c64114ddce2ecbd80b151dea0bf614ff20edbdb5658363fd9d787\nERROR judge-adjudication-missing [lem-step-by-step-interpreter-for-machine-codes]: lem-step-by-step-interpreter-for-machine-codes: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8ff3f899ee2d06d2751e0e3ab17caeba190e80e85e96abb82e0cd54afb8f9f06\nERROR judge-adjudication-missing [prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]: prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9ccf3aa417d11ede0a5ec41ebc1057b41169994d14dd138e8c1c44e4d6eec25a\nERROR judge-adjudication-missing [prop-cones-preserve-chain-homotopy-equivalences-of-arrows]: prop-cones-preserve-chain-homotopy-equivalences-of-arrows: current gpt-5.6-terra rejection has no exact Alpha outcome for context a892e07bb5f9960ba9fa54cd372afb9c8fa251daf28aa6b4c2cbf15d51dce038\nERROR judge-adjudication-missing [prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector]: prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2a5282ae1331582660df2d3f0a498ea573866b427e98eff901ba66cf35fab9b0\nERROR judge-adjudication-missing [prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance]: prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4ce402973d452ed1eaf529b91e54758caf32283232454ad1b1e6d56f1ec0ee96\nERROR judge-adjudication-missing [rem-covering-maps-among-complete-analytic-functions]: rem-covering-maps-among-complete-analytic-functions: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5e40fc922ef7a6a81de46fbea1d93cb289141aa9ef9a175efaeecde845d9bee1\nERROR judge-adjudication-missing [rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities]: rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities: current gpt-5.6-terra rejection has no exact Alpha outcome for context 91dafb1dc6b4af5004cd85652486c1b1811d7bbd63953dc508282c57a94b2db8\nERROR judge-adjudication-missing [thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]: thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6552097c2013e65c6649e7d0f3eed5678cce6863ac409ae3343f45db0fef1fc5\nERROR judge-adjudication-missing [thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade]: thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6f6e505ba5f2704a101300af6404e2475b979510d7f13fb93d74cd3017358256\nERROR judge-adjudication-missing [thm-mac-lane-strictification]: thm-mac-lane-strictification: current gpt-5.6-terra rejection has no exact Alpha outcome for context 78026b5510ef2c8b5fa788dfb29940ccc06e4b9ed799a3057d9de816088871ab\nERROR judge-adjudication-missing [thm-monodromy-theorem]: thm-monodromy-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 46e9772045862a770604bea9610e64043a998b386ff1a04bedc9ead644ffafda\nERROR judge-adjudication-missing [thm-multitape-machines-have-one-tape-simulations]: thm-multitape-machines-have-one-tape-simulations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7549ee3dbcf241451519f72b6f55046d5a7609dce47304c2dd41fb393715d089\nERROR judge-adjudication-missing [thm-one-way-and-two-way-tapes-are-equivalent]: thm-one-way-and-two-way-tapes-are-equivalent: current gpt-5.6-terra rejection has no exact Alpha outcome for context 15833584daee31f39bf6979da7dd7d70e033c6e18b50f1b23efc416802511dcf\nERROR judge-adjudication-missing [thm-principal-divisor-exact-sequence]: thm-principal-divisor-exact-sequence: current gpt-5.6-terra rejection has no exact Alpha outcome for context ab002d467032c5dc72445089121b9e4b3b0ccca92a39a8e197a80ebab67ec1bc\nERROR judge-adjudication-missing [thm-regular-expression-to-epsilon-nfa]: thm-regular-expression-to-epsilon-nfa: current gpt-5.6-terra rejection has no exact Alpha outcome for context af65bc394fec50145fd4a163e41aa84aba7b78642d777652a8a93d64a884d467\nERROR judge-adjudication-missing [thm-riemann-surface-of-the-logarithm]: thm-riemann-surface-of-the-logarithm: current gpt-5.6-terra rejection has no exact Alpha outcome for context f3992ea6b6d3fba4a20135d848402dacc5f88afb6c36b396473955a08745526d\nERROR judge-adjudication-missing [thm-stay-put-moves-can-be-eliminated]: thm-stay-put-moves-can-be-eliminated: current gpt-5.6-terra rejection has no exact Alpha outcome for context c932c5f0ed8630f32ef04dcd600849b2794d4f261b64c011304fc8c00e349a78\nERROR judge-adjudication-missing [thm-the-five-vertex-path-has-the-polynomial-rodl-property]: thm-the-five-vertex-path-has-the-polynomial-rodl-property: current gpt-5.6-terra rejection has no exact Alpha outcome for context 12677def1b4b066915dc246d5efdbd9315a592a8e913b01a3baa60744522af85\n",
      "named_ids": [
        "cex-the-cfl-pumping-lemma-characterizes-cfls",
        "cor-ideal-divisibility-reverses-inclusion-dedekind",
        "cor-ideals-in-a-dedekind-domain-are-two-generated",
        "def-calligraphic-l-p-on-a-measure-space",
        "def-condition-number-of-a-simple-eigenvalue",
        "def-effective-encoding-of-turing-machines",
        "def-generalized-nfa",
        "def-grade-and-relative-minimal-polynomial-of-a-start-vector",
        "def-normal-and-conormal-bundles-of-an-embedded-submanifold",
        "def-universal-turing-machine",
        "def-vector-subbundle",
        "ex-semilocal-dedekind-domain-is-a-pid",
        "ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial",
        "ex-the-tangent-bundle-of-the-circle-is-trivial",
        "fs-cfg-equivalence-is-decidable-by-normalization",
        "fs-every-diagram-in-a-monoidal-category-commutes",
        "fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere",
        "fs-every-monoidal-category-is-isomorphic-to-a-strict-one",
        "fs-the-cfl-pumping-lemma-characterizes-cfls",
        "fs-the-mapping-cone-differential-needs-no-minus-sign",
        "lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set",
        "lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs",
        "lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade",
        "lem-step-by-step-interpreter-for-machine-codes",
        "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle",
        "prop-cones-preserve-chain-homotopy-equivalences-of-arrows",
        "prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector",
        "prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance",
        "rem-covering-maps-among-complete-analytic-functions",
        "rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities",
        "thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization",
        "thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade",
        "thm-mac-lane-strictification",
        "thm-monodromy-theorem",
        "thm-multitape-machines-have-one-tape-simulations",
        "thm-one-way-and-two-way-tapes-are-equivalent",
        "thm-principal-divisor-exact-sequence",
        "thm-regular-expression-to-epsilon-nfa",
        "thm-riemann-surface-of-the-logarithm",
        "thm-stay-put-moves-can-be-eliminated",
        "thm-the-five-vertex-path-has-the-polynomial-rodl-property"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-the-cfl-pumping-lemma-characterizes-cfls",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-ideal-divisibility-reverses-inclusion-dedekind",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-ideals-in-a-dedekind-domain-are-two-generated",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-calligraphic-l-p-on-a-measure-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-condition-number-of-a-simple-eigenvalue",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-effective-encoding-of-turing-machines",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-generalized-nfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-grade-and-relative-minimal-polynomial-of-a-start-vector",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-normal-and-conormal-bundles-of-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-universal-turing-machine",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-vector-subbundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-semilocal-dedekind-domain-is-a-pid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-trivial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-cfg-equivalence-is-decidable-by-normalization",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-diagram-in-a-monoidal-category-commutes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-monoidal-category-is-isomorphic-to-a-strict-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-cfl-pumping-lemma-characterizes-cfls",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-mapping-cone-differential-needs-no-minus-sign",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-step-by-step-interpreter-for-machine-codes",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-cones-preserve-chain-homotopy-equivalences-of-arrows",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "rem-covering-maps-among-complete-analytic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-mac-lane-strictification",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-monodromy-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-multitape-machines-have-one-tape-simulations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-one-way-and-two-way-tapes-are-equivalent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-principal-divisor-exact-sequence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-regular-expression-to-epsilon-nfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-riemann-surface-of-the-logarithm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stay-put-moves-can-be-eliminated",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-five-vertex-path-has-the-polynomial-rodl-property",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "def-normal-and-conormal-bundles-of-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-vector-subbundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-trivial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-diagram-in-a-monoidal-category-commutes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-monoidal-category-is-isomorphic-to-a-strict-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-mapping-cone-differential-needs-no-minus-sign",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-cones-preserve-chain-homotopy-equivalences-of-arrows",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-mac-lane-strictification",
      "scope": "run",
      "owner": "b"
    }
  ],
  "live_tuples": [
    {
      "id": "def-normal-and-conormal-bundles-of-an-embedded-submanifold",
      "model": "gpt-5.6-terra",
      "context_sha256": "d7070c7ba603a3fb371f1b016dea40a4ae53fdd0a672209b4f8ea477813da5b2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-vector-subbundle",
      "model": "gpt-5.6-terra",
      "context_sha256": "9b219eda3ebca7e7ee88ed1a72640dc4407faec6086194170409455830efa748",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial",
      "model": "gpt-5.6-terra",
      "context_sha256": "3a0ef5bbaee7d1d6785b4e94198016b3e91f3c1fe97d879367de3d6797dae309",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-trivial",
      "model": "gpt-5.6-terra",
      "context_sha256": "fca2223329039d29f502cc2ff2899477a920e7c49ce8cab90ff3f5bfda9f70c7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-every-diagram-in-a-monoidal-category-commutes",
      "model": "gpt-5.6-terra",
      "context_sha256": "473153f0582ec702c92293aa20b29be52d4510df8c907b9676d44d99bdfc4329",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-every-monoidal-category-is-isomorphic-to-a-strict-one",
      "model": "gpt-5.6-terra",
      "context_sha256": "bd1d9374eca7957eea7b5ccdf511b8b6c10c74f9a55816b53d7f6bcdd6bc6f8c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-mapping-cone-differential-needs-no-minus-sign",
      "model": "gpt-5.6-terra",
      "context_sha256": "39611bf00d9baa72cb549fefbe38f1ac9742b989016d6d88583a9edd285a35d2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle",
      "model": "gpt-5.6-terra",
      "context_sha256": "9ccf3aa417d11ede0a5ec41ebc1057b41169994d14dd138e8c1c44e4d6eec25a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-cones-preserve-chain-homotopy-equivalences-of-arrows",
      "model": "gpt-5.6-terra",
      "context_sha256": "a892e07bb5f9960ba9fa54cd372afb9c8fa251daf28aa6b4c2cbf15d51dce038",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-mac-lane-strictification",
      "model": "gpt-5.6-terra",
      "context_sha256": "78026b5510ef2c8b5fa788dfb29940ccc06e4b9ed799a3057d9de816088871ab",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **b**, run `frontier-26`

You are the group Alpha for batches **6**, **7**, **9**: 3 A/B pair(s), 6 page(s), 131 item(s), 10 open rejection(s) over 10 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-26-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `strictification-and-mac-lanes-coherence-theorem` | A | category-theory | 365.025 | `monoidal-categories-and-monoidal-functors-examples` |
| 6 | `strictification-and-mac-lanes-coherence-theorem-examples` | B | category-theory | 365.026 | `strictification-and-mac-lanes-coherence-theorem` |
| 7 | `mapping-cones-cylinders-and-chain-triangles` | A | homological-algebra | 365.041 | `chain-homotopy-and-the-homotopy-category-examples` |
| 7 | `mapping-cones-cylinders-and-chain-triangles-examples` | B | homological-algebra | 365.042 | `mapping-cones-cylinders-and-chain-triangles` |
| 9 | `smooth-vector-bundles-and-sections` | A | differential-geometry | 451 | `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds` |
| 9 | `smooth-vector-bundles-and-sections-examples` | B | differential-geometry | 452 | `smooth-vector-bundles-and-sections` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `strictification-and-mac-lanes-coherence-theorem` — Strictification and Mac Lanes Coherence Theorem (22 item(s))

- `def-canonical-morphism-between-parenthesised-words` · definition — Canonical morphisms between parenthesised tensor words
- `rem-every-diagram-commutes-is-false-as-stated` · remark — Why 'every diagram commutes' is false as stated
- `def-the-category-of-binary-words` · definition — The category of binary words
- `thm-the-category-of-binary-words-is-monoidal` · theorem — The category of binary words is monoidal
- `def-the-category-of-right-module-endofunctors` · definition — The category of right-module endofunctors
- `thm-the-module-endofunctor-category-is-strict-monoidal` · theorem — The right-module endofunctor category is strict monoidal
- `thm-mac-lane-strictification` · theorem — Mac Lane strictification
- `rem-strictification-gives-equivalence-and-never-isomorphism` · remark — Strictification gives equivalence, not on-the-nose identification
- `thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence` · theorem — A monoidal category equivalent to a strict one satisfies coherence
- `rem-the-choice-cost-of-strictification` · remark — Strictification itself costs no Choice, but skeletal strictification does
- `thm-mac-lane-coherence-in-the-canonical-map-form` · theorem — Mac Lane coherence in canonical-map form
- `rem-the-exact-scope-of-the-coherence-statement` · remark — The coherence theorem's exact scope
- `thm-unbracketed-tensor-strings-are-well-defined-expressions` · theorem — Unbracketed tensor strings are well defined after coherence
- `thm-the-monoid-object-axioms-may-be-written-without-associators` · theorem — The monoid-object axioms may be written without associators
- `thm-the-word-category-is-the-free-monoidal-category-on-one-generator` · theorem — The word category is the free monoidal category on one generator
- `cor-coherence-follows-from-freeness` · corollary — The free-word formulation implies the canonical-map formulation
- `rem-the-history-of-the-coherence-theorem` · remark — The historical route to coherence and the route authored here
- `fs-every-diagram-in-a-monoidal-category-commutes` · false-statement — Every diagram in a monoidal category commutes
- `fs-every-monoidal-category-is-isomorphic-to-a-strict-one` · false-statement — Every monoidal category is isomorphic to a strict one
- `fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one` · false-statement — Every monoidal category is monoidally equivalent to a skeletal strict one
- `fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal` · false-statement — Coherence says that any two parallel morphisms in a monoidal category are equal
- `fs-strictification-requires-the-axiom-of-choice` · false-statement — Strictification requires the axiom of choice

### `strictification-and-mac-lanes-coherence-theorem-examples` — Strictification and Mac Lanes Coherence Theorem — Examples (6 item(s))

- `ex-the-two-routes-around-the-pentagon-are-equal` · example — The two routes around the pentagon are equal
- `ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product` · example — A canonical map between two bracketings of a five-fold product
- `ex-the-word-category-on-words-of-length-three` · example — The word category on words of length three
- `ex-strictification-of-a-cartesian-monoidal-category-computed` · example — Strictification of a cartesian monoidal category computed
- `cex-two-formally-distinct-words-that-become-the-same-object` · counterexample — Two formally distinct words can become the same object
- `ex-a-monoid-object-written-with-and-without-associators` · example — A monoid object written with and without associators

### `mapping-cones-cylinders-and-chain-triangles` — Mapping Cones Cylinders and Chain Triangles (34 item(s))

- `def-mapping-cone-of-a-chain-map` · definition — The mapping cone of a chain map
- `lem-the-mapping-cone-differential-squares-to-zero` · lemma — The mapping-cone differential squares to zero
- `def-canonical-inclusion-and-projection-for-a-mapping-cone` · definition — The canonical inclusion and projection for a mapping cone
- `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact` · theorem — The canonical mapping-cone sequence is degreewise split short exact
- `def-cone-triangle-of-a-chain-map` · definition — The cone triangle of a chain map
- `prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift` · proposition — The cone of the zero map is the direct sum with a shift
- `thm-the-cone-of-an-identity-map-is-contractible` · theorem — The cone of an identity map is contractible
- `prop-isomorphic-chain-maps-have-isomorphic-cones` · proposition — Isomorphic chain maps have isomorphic cones
- `def-morphism-of-chain-maps` · definition — A morphism of chain maps
- `thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones` · theorem — A morphism of chain maps induces a chain map of cones
- `prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes` · proposition — Mapping cone is functorial on the arrow category of complexes
- `lem-homotopic-maps-have-chain-isomorphic-mapping-cones` · lemma — Homotopic maps have chain-isomorphic mapping cones
- `thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic` · theorem — A chain map is a quasi-isomorphism exactly when its cone is acyclic
- `thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible` · theorem — A chain map is a homotopy equivalence exactly when its cone is contractible
- `def-mapping-cylinder-of-a-chain-map` · definition — The mapping cylinder of a chain map
- `lem-the-mapping-cylinder-differential-squares-to-zero` · lemma — The mapping-cylinder differential squares to zero
- `thm-the-mapping-cylinder-factors-a-chain-map` · theorem — The mapping cylinder factors a chain map
- `prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder` · proposition — The target is a strong deformation retract of the mapping cylinder
- `cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence` · corollary — Every chain map factors as a cofibration-like inclusion followed by a homotopy equivalence
- `prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone` · proposition — The quotient of the mapping cylinder by its source is the mapping cone
- `prop-cones-preserve-chain-homotopy-equivalences-of-arrows` · proposition — Cones preserve chain-homotopy equivalences of arrows
- `lem-the-three-cone-calculation-for-a-composite-chain-map` · lemma — The three-cone calculation for a composite chain map
- `prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category` · proposition — The cone triangle of a null-homotopic map splits in the homotopy category
- `prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category` · proposition — A chain map with contractible cone becomes an isomorphism in the homotopy category
- `prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism` · proposition — The cone construction commutes with shift up to the canonical sign isomorphism
- `prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences` · proposition — An exact functor carries mapping-cone sequences to mapping-cone sequences
- `def-relative-homology-of-a-chain-map` · definition — The relative homology of a chain map
- `prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows` · proposition — Relative homology is invariant under homotopy equivalence of arrows
- `cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms` · corollary — Relative homology vanishes exactly for quasi-isomorphisms
- `fs-the-mapping-cone-differential-needs-no-minus-sign` · false-statement — FALSE: the mapping-cone differential needs no minus sign
- `fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting` · false-statement — FALSE: the degreewise splitting of the cone sequence is a chain splitting
- `fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data` · false-statement — FALSE: mapping cone is a functor on the homotopy category with no extra data
- `fs-an-acyclic-mapping-cone-is-contractible` · false-statement — FALSE: an acyclic mapping cone is contractible
- `fs-the-mapping-cylinder-factorization-is-a-model-category-factorization` · false-statement — FALSE: the mapping-cylinder factorization is a model-category factorization

### `mapping-cones-cylinders-and-chain-triangles-examples` — Mapping Cones Cylinders and Chain Triangles — Examples (8 item(s))

- `ex-the-cone-of-multiplication-by-m-on-the-integers` · example — The cone of multiplication by m on the integers
- `ex-the-cone-of-zero-and-of-the-identity` · example — The cone of zero and of the identity
- `ex-a-quasi-isomorphism-detected-by-an-acyclic-cone` · example — A quasi-isomorphism detected by an acyclic cone
- `cex-an-acyclic-noncontractible-cone` · counterexample — An acyclic noncontractible cone
- `ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes` · example — The mapping cylinder of an inclusion of two-term complexes
- `ex-relative-homology-of-a-map-between-stalk-complexes` · example — Relative homology of a map between stalk complexes
- `ex-the-three-cone-calculation-for-a-composite` · example — The three-cone calculation for a composite
- `cex-a-degreewise-split-cone-sequence-with-no-chain-splitting` · counterexample — A degreewise split cone sequence with no chain splitting

### `smooth-vector-bundles-and-sections` — Smooth Vector Bundles and Sections (51 item(s))

- `def-smooth-fibre-bundle-and-local-trivialization` · definition — Smooth fibre bundles and local trivializations
- `def-smooth-vector-bundle-rank-fibre-and-trivial-bundle` · definition — Smooth vector bundles, rank, fibres, and trivial bundles
- `prop-a-vector-bundle-projection-is-a-surjective-submersion` · proposition — A vector bundle projection is a surjective submersion
- `def-vector-bundle-chart-and-transition-function` · definition — Vector bundle charts and transition functions
- `lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities` · lemma — Vector bundle transition functions satisfy the cocycle identities
- `thm-vector-bundle-construction-from-a-smooth-cocycle` · theorem — Construction of a vector bundle from a smooth cocycle
- `prop-isomorphic-cocycles-define-isomorphic-vector-bundles` · proposition — Isomorphic cocycles define isomorphic vector bundles
- `def-restriction-of-a-vector-bundle` · definition — Restrictions of vector bundles
- `prop-the-zero-section-is-a-smooth-embedding` · proposition — The zero section is a smooth embedding
- `prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r` · proposition — The total space of a rank-r bundle has dimension dim M + r
- `def-smooth-section-local-section-and-support` · definition — Smooth sections, local sections, and support
- `def-local-frame-and-global-frame-of-a-vector-bundle` · definition — Local and global frames of a vector bundle
- `prop-local-frames-and-local-trivializations-are-equivalent-data` · proposition — Local frames and local trivializations are equivalent data
- `cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame` · corollary — A vector bundle is trivial if and only if it has a global frame
- `prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components` · proposition — Smoothness of a section is equivalent to smooth local components
- `prop-smooth-sections-form-a-module-over-smooth-functions` · proposition — Smooth sections form a module over smooth functions
- `lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section` · lemma — Every vector in a fibre extends to a compactly supported smooth section
- `lem-locally-finite-linear-combinations-of-sections-are-smooth` · lemma — Locally finite linear combinations of sections are smooth
- `def-vector-bundle-map-over-a-smooth-base-map` · definition — Vector bundle maps over a smooth base map
- `prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices` · proposition — Smoothness of a bundle map is equivalent to smooth local matrices
- `prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism` · proposition — A fibrewise bijective smooth bundle map over a diffeomorphism is a bundle isomorphism
- `def-vector-subbundle` · definition — Vector subbundles
- `prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles` · proposition — Constant-rank kernels and images of bundle maps over one base are subbundles
- `def-pullback-vector-bundle-as-a-fibre-product` · definition — Pullback vector bundles as fibre products
- `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle` · theorem — The pullback fibre product is a smooth vector bundle
- `prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism` · proposition — Pullback is functorial up to canonical bundle isomorphism
- `def-whitney-sum-of-vector-bundles` · definition — Whitney sums of vector bundles
- `thm-whitney-sums-are-smooth-vector-bundles` · theorem — Whitney sums are smooth vector bundles
- `def-dual-and-hom-vector-bundles` · definition — Dual and Hom vector bundles
- `thm-dual-and-hom-transition-functions-define-smooth-bundles` · theorem — Dual and Hom transition functions define smooth bundles
- `prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps` · proposition — Sections of Hom are the same as smooth fibrewise linear maps
- `prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle` · proposition — Bundle maps over f are sections of the pulled-back Hom bundle
- `def-quotient-vector-bundle-by-a-subbundle` · definition — Quotient vector bundles by a subbundle
- `thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle` · theorem — A vector bundle quotient by a subbundle is a smooth vector bundle
- `prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map` · proposition — The canonical map to a quotient bundle is a smooth bundle map
- `def-smooth-bundle-metric` · definition — Smooth bundle metrics
- `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric` · theorem — Every smooth vector bundle admits a smooth bundle metric
- `prop-orthogonal-complements-of-subbundles-are-smooth-subbundles` · proposition — Orthogonal complements of subbundles are smooth subbundles
- `cor-every-vector-subbundle-has-a-smooth-complement` · corollary — Every vector subbundle has a smooth complement
- `cor-every-short-exact-sequence-of-smooth-vector-bundles-splits` · corollary — Every short exact sequence of smooth vector bundles splits
- `def-normal-and-conormal-bundles-of-an-embedded-submanifold` · definition — Normal and conormal bundles of an embedded submanifold
- `prop-normal-and-conormal-bundles-are-smooth-vector-bundles` · proposition — Normal and conormal bundles are smooth vector bundles
- `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle` · proposition — An ambient Riemannian metric identifies the normal quotient with the orthogonal normal bundle
- `cor-every-smooth-manifold-admits-a-riemannian-metric` · corollary — Assuming countable choice, every smooth manifold admits a Riemannian metric
- `prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set` · proposition — A vector bundle section with surjective vertical differential at every zero has a submanifold zero set
- `fs-every-vector-bundle-is-globally-trivial` · false-statement — Every vector bundle is globally trivial
- `fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth` · false-statement — A continuous fibrewise linear map over a smooth base map is automatically smooth
- `fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle` · false-statement — The fibrewise quotient of a vector bundle by arbitrary varying subspaces is a vector bundle
- `fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting` · false-statement — A short exact sequence of vector bundles has a canonical splitting
- `fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric` · false-statement — The orthogonal normal bundle of a submanifold is defined without a metric
- `fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space` · false-statement — The pullback bundle is the set-theoretic inverse image of the total space

### `smooth-vector-bundles-and-sections-examples` — Smooth Vector Bundles and Sections — Examples (10 item(s))

- `ex-the-trivial-line-bundle-and-its-sections-as-functions` · example — The trivial line bundle and its sections as functions
- `ex-the-mobius-line-bundle-from-a-transition-function` · example — The Mobius line bundle from a transition function
- `ex-the-tautological-line-bundle-over-real-projective-space` · example — The tautological line bundle over real projective space
- `ex-the-tangent-and-cotangent-bundles-as-vector-bundles` · example — Assuming countable choice, the tangent and cotangent bundles are smooth vector bundles
- `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial` · example — The normal bundle of the sphere in Euclidean space is trivial
- `ex-the-tangent-bundle-of-the-circle-is-trivial` · example — The tangent bundle of the circle is trivial
- `rem-the-hairy-ball-theorem-for-even-dimensional-spheres` · remark — The hairy-ball theorem for even-dimensional spheres
- `ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover` · example — Pullback of the tautological line bundle along the antipodal cover
- `ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum` · example — The graph of a bundle map as a subbundle of a Whitney sum
- `cex-a-rank-jumping-kernel-is-not-a-vector-subbundle` · counterexample — A rank-jumping kernel is not a vector subbundle

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
| `def-normal-and-conormal-bundles-of-an-embedded-submanifold` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `d7070c7ba603a3fb371f1b016dea40a4ae53fdd0a672209b4f8ea477813da5b2` |
| `def-vector-subbundle` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `9b219eda3ebca7e7ee88ed1a72640dc4407faec6086194170409455830efa748` |
| `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `3a0ef5bbaee7d1d6785b4e94198016b3e91f3c1fe97d879367de3d6797dae309` |
| `ex-the-tangent-bundle-of-the-circle-is-trivial` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `fca2223329039d29f502cc2ff2899477a920e7c49ce8cab90ff3f5bfda9f70c7` |
| `fs-every-diagram-in-a-monoidal-category-commutes` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `473153f0582ec702c92293aa20b29be52d4510df8c907b9676d44d99bdfc4329` |
| `fs-every-monoidal-category-is-isomorphic-to-a-strict-one` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `bd1d9374eca7957eea7b5ccdf511b8b6c10c74f9a55816b53d7f6bcdd6bc6f8c` |
| `fs-the-mapping-cone-differential-needs-no-minus-sign` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `39611bf00d9baa72cb549fefbe38f1ac9742b989016d6d88583a9edd285a35d2` |
| `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `9ccf3aa417d11ede0a5ec41ebc1057b41169994d14dd138e8c1c44e4d6eec25a` |
| `prop-cones-preserve-chain-homotopy-equivalences-of-arrows` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `a892e07bb5f9960ba9fa54cd372afb9c8fa251daf28aa6b4c2cbf15d51dce038` |
| `thm-mac-lane-strictification` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `78026b5510ef2c8b5fa788dfb29940ccc06e4b9ed799a3057d9de816088871ab` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-26`

Read `research/frontier-26-judge-closure.json`,
`research/frontier-26-judge.jsonl`,
`research/frontier-26-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-26-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-26-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-26-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
