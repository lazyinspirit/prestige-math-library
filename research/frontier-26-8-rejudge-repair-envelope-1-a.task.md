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
  "group": "a",
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
      "id": "ex-semilocal-dedekind-domain-is-a-pid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-principal-divisor-exact-sequence",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": [
    {
      "id": "cor-ideal-divisibility-reverses-inclusion-dedekind",
      "model": "gpt-5.6-terra",
      "context_sha256": "6505badf3b04e9e96e7157aa0def30dae6271c8ae5c7be0e7af81e4de27e51bc",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cor-ideals-in-a-dedekind-domain-are-two-generated",
      "model": "gpt-5.6-terra",
      "context_sha256": "7f0f488e011cd6718ab7db37a5eaeb40f0032cac96b639689e6977c5d4bb069b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-semilocal-dedekind-domain-is-a-pid",
      "model": "gpt-5.6-terra",
      "context_sha256": "8add38cb2cf5faedb3410e3dc040b923b3f0ff933a59ef1a56947e33861dc615",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-principal-divisor-exact-sequence",
      "model": "gpt-5.6-terra",
      "context_sha256": "ab002d467032c5dc72445089121b9e4b3b0ccca92a39a8e197a80ebab67ec1bc",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **a**, run `frontier-26`

You are the group Alpha for batches **1**, **5**: 2 A/B pair(s), 4 page(s), 61 item(s), 4 open rejection(s) over 4 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `dedekind-domains-and-ideal-classes` | A | commutative-algebra | 111.017 | `valuation-rings-and-discrete-valuation-rings-examples`, `solvability-by-radicals-and-kummer-theory` |
| 1 | `dedekind-domains-and-ideal-classes-examples` | B | commutative-algebra | 111.018 | `dedekind-domains-and-ideal-classes` |
| 5 | `average-orders-divisor-sums-and-representation-counts` | A | number-theory | 348.003 | `sums-of-two-squares`, `arithmetic-functions-and-dirichlet-convolution-examples` |
| 5 | `average-orders-divisor-sums-and-representation-counts-examples` | B | number-theory | 348.004 | `average-orders-divisor-sums-and-representation-counts` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dedekind-domains-and-ideal-classes` — Dedekind Domains and Ideal Classes (33 item(s))

- `def-dedekind-domain` · definition — Dedekind domains
- `lem-dedekind-localisation-at-nonzero-prime-is-dvr` · lemma — Localizing a Dedekind domain at a nonzero prime gives a DVR
- `lem-local-dvr-condition-implies-global-normality` · lemma — Local DVRs at the nonzero primes force global normality
- `lem-local-dvr-condition-implies-dimension-one` · lemma — Local DVRs at the nonzero primes force dimension one
- `thm-local-characterisation-of-dedekind-domains` · theorem — Equivalent local characterizations of Dedekind domains
- `thm-localisation-of-a-dedekind-domain` · theorem — A localization of a Dedekind domain is Dedekind or a field
- `lem-trace-pairing-for-a-finite-separable-extension` · lemma — The trace pairing in a finite separable extension is nondegenerate
- `thm-finite-integral-closure-in-a-finite-separable-extension` · theorem — Finite separable integral closures over normal Noetherian domains are module-finite
- `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` · corollary — The integral closure of a Dedekind domain in a finite separable extension is Dedekind
- `rem-separability-is-essential-for-finite-integral-closure` · remark — Why the finite-separable hypothesis is retained in the integral-closure theorem
- `def-fractional-ideal` · definition — Fractional ideals
- `def-product-and-colon-of-fractional-ideals` · definition — Products, colons, and inverse candidates for fractional ideals
- `lem-fractional-ideal-operations-well-defined` · lemma — The basic operations on fractional ideals are well defined
- `def-invertible-fractional-ideal` · definition — Invertible fractional ideals
- `thm-invertible-ideal-characterisations` · theorem — Equivalent characterizations of invertible fractional ideals
- `thm-nonzero-ideals-in-dedekind-domains-are-invertible` · theorem — Every nonzero fractional ideal of a Dedekind domain is invertible
- `def-prime-ideal-valuations-on-fractional-ideals` · definition — Prime-ideal valuations on fractional ideals
- `lem-finite-support-of-ideal-valuations` · lemma — Prime-ideal valuations of a fractional ideal have finite support and add under products
- `thm-unique-factorisation-of-ideals-in-dedekind-domains` · theorem — Unique factorization of nonzero fractional ideals into prime powers
- `cor-ideal-divisibility-reverses-inclusion-dedekind` · corollary — For Dedekind ideals, divisibility reverses inclusion
- `cor-ideals-in-a-dedekind-domain-are-two-generated` · corollary — Every nonzero ideal in a Dedekind domain is generated by two elements
- `def-ideal-class-group-of-a-domain` · definition — The ideal class group
- `lem-ideal-class-group-well-defined` · lemma — The ideal class group quotient is well defined
- `def-divisor-group-of-a-dedekind-domain` · definition — The divisor group of a Dedekind domain
- `thm-principal-divisor-exact-sequence` · theorem — The principal-divisor exact sequence for a Dedekind domain
- `thm-dedekind-pid-class-group-characterisation` · theorem — A Dedekind domain is a PID exactly when its class group is trivial
- `lem-rank-one-projective-embedded-as-a-fractional-ideal` · lemma — A finite rank-one projective module embeds as a fractional ideal
- `thm-invertible-ideals-and-rank-one-projective-modules` · theorem — Invertible fractional ideals are exactly the rank-one projective modules
- `thm-ideal-class-group-is-the-picard-group` · theorem — The ideal class group is the Picard group of rank-one projectives
- `lem-finite-torsionfree-modules-over-dedekind-domains-are-projective` · lemma — Finite torsion-free modules over Dedekind domains are projective
- `lem-rank-one-summand-of-a-finite-projective-dedekind-module` · lemma — A nonzero finite projective module over a Dedekind domain splits off a rank-one summand
- `thm-finite-torsionfree-modules-over-dedekind-domains` · theorem — Finite torsion-free modules over Dedekind domains have Steinitz form
- `thm-submodules-of-projectives-over-dedekind-domains` · theorem — Submodules of projective modules over Dedekind domains are projective

### `dedekind-domains-and-ideal-classes-examples` — Dedekind Domains and Ideal Classes — Examples (9 item(s))

- `ex-pid-as-dedekind-domain` · example — Every nonfield PID is a Dedekind domain with trivial class group
- `ex-semilocal-dedekind-domain-is-a-pid` · example — A semilocal Dedekind domain is a PID
- `ex-fractional-ideal-in-the-integers` · example — A fractional ideal of the integers with positive and negative prime exponents
- `ex-ideal-inverse-computation` · example — Computing an inverse fractional ideal explicitly
- `ex-steinitz-class-rank-two-module` · example — A rank-two module and its Steinitz class
- `ex-dedekind-localisation-is-dvr` · example — Localizing a Dedekind domain at a nonzero prime
- `ex-two-generators-for-a-dedekind-ideal` · example — Constructing two generators for a Dedekind ideal
- `ex-divisor-of-a-fractional-ideal` · example — The divisor and class of a fractional ideal
- `ex-nondedekind-ideal-not-invertible` · example — A noninvertible ideal in a singular one-dimensional domain

### `average-orders-divisor-sums-and-representation-counts` — Average Orders Divisor Sums and Representation Counts (17 item(s))

- `def-summatory-function-and-average-order` · definition — Summatory functions and average orders
- `def-euler-mascheroni-constant` · definition — The Euler-Mascheroni constant
- `lem-harmonic-sum-asymptotic` · lemma — The harmonic sum is log x plus gamma plus O(1/x)
- `thm-dirichlet-hyperbola-method` · theorem — Dirichlet's hyperbola method for summatory convolutions
- `thm-divisor-counting-summatory-estimate` · theorem — The summatory divisor-counting function is x log x plus (2 gamma - 1)x plus O(sqrt x)
- `lem-summatory-logarithm-asymptotic` · lemma — The summatory logarithm is x log x minus x plus O(log x)
- `cor-average-order-of-divisor-counting-function` · corollary — The average order of tau is log n
- `thm-divisor-sum-summatory-estimate` · theorem — The summatory divisor-sum function is pi squared over 12 times x squared plus O(x log x)
- `cor-average-order-of-divisor-sum-function` · corollary — The average order of sigma is (pi squared over 6)n
- `thm-euler-totient-summatory-estimate` · theorem — The summatory totient function is 3 over pi squared times x squared plus O(x log x)
- `cor-average-order-of-euler-totient` · corollary — The average order of Euler's totient is 6n over pi squared
- `thm-coprime-pair-counting-asymptotic` · theorem — Ordered coprime pairs in a box have asymptotic density 6 over pi squared
- `cor-asymptotic-density-of-coprime-pairs` · corollary — The proportion of pairs in {1,...,n}^2 that are coprime tends to 6 over pi squared
- `def-two-square-representation-function` · definition — The two-square representation function r_2
- `lem-normalized-two-square-count-is-multiplicative` · lemma — The normalized two-square count is multiplicative with the expected prime-power values
- `thm-two-square-representation-count` · theorem — The divisor formula for the two-square representation count
- `cor-average-order-of-two-square-representations` · corollary — The average order of the two-square representation count is pi

### `average-orders-divisor-sums-and-representation-counts-examples` — Average Orders Divisor Sums and Representation Counts — Examples (2 item(s))

- `ex-dirichlet-hyperbola-lattice-decomposition` · example — A small lattice decomposition for Dirichlet's hyperbola method
- `ex-divisor-summatory-error-table` · example — The divisor summatory estimate through several small values

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
| `cor-ideal-divisibility-reverses-inclusion-dedekind` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `6505badf3b04e9e96e7157aa0def30dae6271c8ae5c7be0e7af81e4de27e51bc` |
| `cor-ideals-in-a-dedekind-domain-are-two-generated` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `7f0f488e011cd6718ab7db37a5eaeb40f0032cac96b639689e6977c5d4bb069b` |
| `ex-semilocal-dedekind-domain-is-a-pid` | `dedekind-domains-and-ideal-classes-examples` | gpt-5.6-terra | `8add38cb2cf5faedb3410e3dc040b923b3f0ff933a59ef1a56947e33861dc615` |
| `thm-principal-divisor-exact-sequence` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `ab002d467032c5dc72445089121b9e4b3b0ccca92a39a8e197a80ebab67ec1bc` |

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
