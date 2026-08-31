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
  "group": "d",
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
      "id": "cex-the-cfl-pumping-lemma-characterizes-cfls",
      "scope": "run",
      "owner": "d"
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
      "id": "def-universal-turing-machine",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-cfg-equivalence-is-decidable-by-normalization",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-cfl-pumping-lemma-characterizes-cfls",
      "scope": "run",
      "owner": "d"
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
      "id": "thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade",
      "scope": "run",
      "owner": "d"
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
      "id": "thm-regular-expression-to-epsilon-nfa",
      "scope": "run",
      "owner": "d"
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
  "live_tuples": [
    {
      "id": "cex-the-cfl-pumping-lemma-characterizes-cfls",
      "model": "gpt-5.6-terra",
      "context_sha256": "05dff1a5b5f2fa561ee067030f0a33cb89e1893c5fd853f0225a35d5a1ed74ac",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-effective-encoding-of-turing-machines",
      "model": "gpt-5.6-terra",
      "context_sha256": "c7ebed78cb0293accc3d7777805f4250a1423401a3f7c394556424c80cf1f437",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-generalized-nfa",
      "model": "gpt-5.6-terra",
      "context_sha256": "bdf142144018d8a7f156ae2daa5d781a51235de4f0314ff3b4f527543640bd62",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-universal-turing-machine",
      "model": "gpt-5.6-terra",
      "context_sha256": "9f657380d5e12eab7a23b851e2dfbbc110eb561a9521d2c13282a1249c911f2a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-cfg-equivalence-is-decidable-by-normalization",
      "model": "gpt-5.6-terra",
      "context_sha256": "0863cd6593d555ad6b9eb0b121ad02b60b90dde5e20f694023c3e6bdbd79874c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-cfl-pumping-lemma-characterizes-cfls",
      "model": "gpt-5.6-terra",
      "context_sha256": "838500adf2ab599cd2b67b03d8f5d295b0c056b64accb985f85c42dc3d60735a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set",
      "model": "gpt-5.6-terra",
      "context_sha256": "15790d25a00389c7803e7464eeab56fdd3a4a978722b3e7bd3e3346d62b7fd03",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs",
      "model": "gpt-5.6-terra",
      "context_sha256": "ea9b96d994913ea79b9d87c795d0d5b2678170b83682f40b45a74822c3505459",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade",
      "model": "gpt-5.6-terra",
      "context_sha256": "473b56e2e36c64114ddce2ecbd80b151dea0bf614ff20edbdb5658363fd9d787",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-step-by-step-interpreter-for-machine-codes",
      "model": "gpt-5.6-terra",
      "context_sha256": "8ff3f899ee2d06d2751e0e3ab17caeba190e80e85e96abb82e0cd54afb8f9f06",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade",
      "model": "gpt-5.6-terra",
      "context_sha256": "6f6e505ba5f2704a101300af6404e2475b979510d7f13fb93d74cd3017358256",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-multitape-machines-have-one-tape-simulations",
      "model": "gpt-5.6-terra",
      "context_sha256": "7549ee3dbcf241451519f72b6f55046d5a7609dce47304c2dd41fb393715d089",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-one-way-and-two-way-tapes-are-equivalent",
      "model": "gpt-5.6-terra",
      "context_sha256": "15833584daee31f39bf6979da7dd7d70e033c6e18b50f1b23efc416802511dcf",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-regular-expression-to-epsilon-nfa",
      "model": "gpt-5.6-terra",
      "context_sha256": "af65bc394fec50145fd4a163e41aa84aba7b78642d777652a8a93d64a884d467",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-stay-put-moves-can-be-eliminated",
      "model": "gpt-5.6-terra",
      "context_sha256": "c932c5f0ed8630f32ef04dcd600849b2794d4f261b64c011304fc8c00e349a78",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-five-vertex-path-has-the-polynomial-rodl-property",
      "model": "gpt-5.6-terra",
      "context_sha256": "12677def1b4b066915dc246d5efdbd9315a592a8e913b01a3baa60744522af85",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **d**, run `frontier-26`

You are the group Alpha for batches **8**, **10**, **11**: 5 A/B pair(s), 10 page(s), 104 item(s), 16 open rejection(s) over 16 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 8 | `star-expansions-and-erdos-hajnal` | A | combinatorics | 417 | `the-five-cycle-and-erdos-hajnal` |
| 8 | `star-expansions-and-erdos-hajnal-examples` | B | combinatorics | 418 | `star-expansions-and-erdos-hajnal` |
| 8 | `iterative-sparsification-and-the-five-vertex-path` | A | combinatorics | 419 | `the-five-cycle-and-erdos-hajnal` |
| 8 | `iterative-sparsification-and-the-five-vertex-path-examples` | B | combinatorics | 420 | `iterative-sparsification-and-the-five-vertex-path` |
| 10 | `regular-expressions-and-kleenes-theorem` | A | computability-theory | 587 | `nondeterministic-finite-automata-and-subset-construction` |
| 10 | `regular-expressions-and-kleenes-theorem-examples` | B | computability-theory | 588 | `regular-expressions-and-kleenes-theorem` |
| 10 | `context-free-pumping-ogden-and-parsing` | A | computability-theory | 595 | `pushdown-automata-and-context-free-languages`, `finite-counting-and-binomial-coefficients` |
| 10 | `context-free-pumping-ogden-and-parsing-examples` | B | computability-theory | 596 | `context-free-pumping-ogden-and-parsing` |
| 11 | `robust-machine-models-and-universal-computation` | A | computability-theory | 599 | `turing-machines-configurations-and-computation` |
| 11 | `robust-machine-models-and-universal-computation-examples` | B | computability-theory | 600 | `robust-machine-models-and-universal-computation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `star-expansions-and-erdos-hajnal` — Star Expansions and the Erdős–Hajnal Property (16 item(s))

- `def-star-expansion-of-a-graph` · definition — The star-expansion of a graph
- `thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest` · theorem — A wide coherent blockade contains a blockade-rainbow copy of a forest
- `cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree` · corollary — Few induced copies force a linearly large induced subgraph with bounded maximum degree
- `thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement` · theorem — A long blockade without a large pure pair contains a rainbow forest or its complement
- `thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest` · theorem — A long blockade yields a wide cograph-pattern subblockade or a rainbow forest
- `thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property` · theorem — The star-expansion four-family of a forest has the Erdős–Hajnal property
- `cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property` · corollary — The star-expansion of the four-vertex path and its complement have the Erdős–Hajnal property
- `lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven` · lemma — The star-expansion of the four-vertex path contains induced six- and seven-cycles
- `cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property` · corollary — The six-cycle and its complement have the Erdős–Hajnal property
- `cor-the-seven-cycle-and-its-complement-have-the-erdos-hajnal-property` · corollary — The seven-cycle and its complement have the Erdős–Hajnal property
- `thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property` · theorem — A forest complement and its star-expansion have the Erdős–Hajnal property
- `lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle` · lemma — A star-expansion of a forest containing a long path contains the corresponding cycle
- `thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property` · theorem — A cycle and a forest complement have the Erdős–Hajnal property
- `lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components` · lemma — A hatted-five-cycle-free rooted stable-tooth comb yields a large pure blockade of components
- `lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle` · lemma — The star-expansion of $K_3$ contains the hatted five-cycle
- `thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property` · theorem — The hatted five-cycle and its complement have the Erdős–Hajnal property

### `star-expansions-and-erdos-hajnal-examples` — Star Expansions and the Erdős–Hajnal Property — Examples (5 item(s))

- `ex-the-star-expansion-of-the-four-vertex-path` · example — The star-expansion of the four-vertex path
- `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle` · example — The star-expansion of the four-vertex path contains an induced five-cycle
- `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle` · example — The star-expansion of the four-vertex path contains an induced six-cycle
- `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle` · example — The star-expansion of the four-vertex path contains an induced seven-cycle
- `ex-the-star-expansion-of-k-three-contains-the-hatted-five-cycle` · example — The star-expansion of $K_3$ contains the hatted five-cycle

### `iterative-sparsification-and-the-five-vertex-path` — Iterative Sparsification and the Five-Vertex Path (22 item(s))

- `def-nice-graph` · definition — A nice graph
- `lem-small-anticonnected-components-yield-a-complete-blockade` · lemma — Small anticonnected components yield a complete blockade
- `lem-a-dense-bipartite-side-has-a-small-hitting-set` · lemma — A dense bipartite side has a small hitting set
- `lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade` · lemma — A sparse $P_5$-free graph has an anticomplete two-blockade
- `lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair` · lemma — A sparse $\overline{P_5}$-free graph has a large nearly covered sparse pair
- `lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade` · lemma — Anticonnected block contraction turns an upside-down comb into a pure blockade
- `lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair` · lemma — A sparse $\overline{P_5}$-free graph either sparsifies further or yields a pure blockade or a large sparse pair
- `lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade` · lemma — An $x$-sparse blockade iteration yields further sparsification or a pure blockade
- `lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs` · lemma — An iterative sparsification step for sparse $\overline{P_5}$-free graphs
- `thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade` · theorem — $\overline{P_5}$-free graphs admit a pure or $x$-sparse polynomial blockade
- `lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks` · lemma — A maximal layout has at most $\epsilon^{-1}$ blocks
- `lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse` · lemma — Refining the largest layout block forces local blockade length at least $\epsilon^{-1}$
- `thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade` · theorem — Local pure or $x$-sparse blockades yield a nice blockade
- `thm-the-five-vertex-path-is-nice` · theorem — The five-vertex path is nice
- `lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations` · lemma — A semisparse blockade can be sampled to anticonnected blocks with nearly pure relations
- `lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade` · lemma — No vertex is mixed on many blocks of a semisparse blockade
- `lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set` · lemma — A sparse $\overline{P_5}$-free graph yields deeper sparsification or a complete blockade or a large anticomplete set
- `lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph` · lemma — A sparse $\overline{P_5}$-free graph yields a complete or anticomplete blockade or a sparser subgraph
- `lem-the-minimal-sparsity-parameter-drops-below-the-target` · lemma — The minimal sparsity parameter drops below the target
- `thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade` · theorem — $\overline{P_5}$-free graphs yield a polynomial restricted set or a complete or anticomplete blockade
- `thm-the-five-vertex-path-has-the-polynomial-rodl-property` · theorem — The five-vertex path has the polynomial Rödl property
- `cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property` · corollary — The five-vertex path and its complement have the Erdős–Hajnal property

### `iterative-sparsification-and-the-five-vertex-path-examples` — Iterative Sparsification and the Five-Vertex Path — Examples (4 item(s))

- `ex-two-large-anticonnected-components-give-a-complete-two-blockade` · example — Two large anticonnected components give a complete two-blockade
- `ex-a-sparse-p-five-free-graph-with-an-anticomplete-two-blockade` · example — A sparse $P_5$-free graph with an anticomplete two-blockade
- `ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five` · example — An upside-down comb with anticonnected blocks creates a co-$P_5$
- `ex-a-layout-with-a-single-wrong-decided-pair` · example — A layout with a single wrong decided pair

### `regular-expressions-and-kleenes-theorem` — Regular Expressions and Kleene's Theorem (16 item(s))

- `def-regular-expression-syntax` · definition — Regular expression syntax over an alphabet
- `def-regular-expression-denotation` · definition — The language denoted by a regular expression
- `lem-denotation-is-structurally-well-defined` · lemma — Regular-expression denotation is structurally well-defined
- `thm-regular-expression-to-epsilon-nfa` · theorem — Every regular expression has an equivalent epsilon-NFA
- `def-generalized-nfa` · definition — Generalized NFA's and their accepted languages
- `def-gnfa-state-elimination` · definition — The GNFA state-elimination update
- `lem-state-elimination-preserves-path-language` · lemma — State elimination preserves the language between every surviving state pair
- `thm-dfa-to-regular-expression` · theorem — Every DFA language is denoted by a regular expression
- `thm-kleenes-theorem` · theorem — A language is regular if and only if some regular expression denotes it
- `thm-closure-under-homomorphic-image` · theorem — Regular languages are closed under homomorphic image
- `thm-closure-under-inverse-homomorphism` · theorem — Regular languages are closed under inverse homomorphism
- `thm-closure-under-left-and-right-quotient` · theorem — Regular languages are closed under left and right quotient with regular languages
- `def-regular-language-decision-problems` · definition — Membership, emptiness, finiteness, equivalence, and containment for regular languages
- `thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable` · theorem — DFA membership, emptiness, finiteness, equivalence, and containment are decidable
- `fs-regular-expression-syntax-is-its-denoted-language` · false-statement — FALSE: a regular expression is the same object as its denoted language
- `fs-state-elimination-has-a-unique-output-expression` · false-statement — FALSE: state elimination has a unique output expression

### `regular-expressions-and-kleenes-theorem-examples` — Regular Expressions and Kleene's Theorem: Examples and Counterexamples (3 item(s))

- `ex-regular-expression-to-epsilon-nfa` · example — Constructing an epsilon-NFA for $(a+b)^{*}abb$
- `ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable` · example — Running the basic regular-language decision procedures on small DFA's
- `cex-regular-expression-syntax-is-its-denoted-language` · counterexample — The expression $a+b$ is not literally the set $\{a,b\}$

### `context-free-pumping-ogden-and-parsing` — Context-Free Pumping, Ogden's Lemma, and Parsing (16 item(s))

- `lem-height-and-yield-bound-for-cnf-trees` · lemma — A Chomsky-normal-form parse tree of height $h$ has yield length at most $2^{h-1}$
- `thm-pumping-lemma-for-context-free-languages` · theorem — The pumping lemma for context-free languages
- `def-marked-position-decomposition` · definition — Marked positions and admissible Ogden decompositions
- `thm-ogdens-lemma` · theorem — Ogden's lemma
- `thm-cfls-are-not-closed-under-intersection` · theorem — Context-free languages are not closed under intersection
- `cor-cfls-are-not-closed-under-complement` · corollary — Context-free languages are not closed under complement
- `thm-cfls-are-closed-under-reversal` · theorem — Context-free languages are closed under reversal
- `def-cyk-table-and-span-variable` · definition — The CYK parsing table and span variables
- `lem-cyk-table-invariant` · lemma — A variable lies in a CYK table cell exactly when it derives that span
- `thm-cyk-membership-algorithm` · theorem — The CYK algorithm decides membership for CNF grammars
- `cor-cfl-membership-is-decidable` · corollary — Context-free-language membership is decidable
- `thm-cfg-emptiness-and-finiteness-are-decidable` · theorem — CFG emptiness and finiteness are decidable
- `def-cfg-equivalence-and-ambiguity-problems` · definition — The CFG equivalence and ambiguity problems
- `fs-the-cfl-pumping-lemma-characterizes-cfls` · false-statement — FALSE: the context-free pumping lemma characterizes the context-free languages
- `fs-cyk-needs-no-normal-form-preprocessing` · false-statement — FALSE: CYK needs no normal-form preprocessing
- `fs-cfg-equivalence-is-decidable-by-normalization` · false-statement — FALSE: CFG equivalence is decidable by normalization

### `context-free-pumping-ogden-and-parsing-examples` — Context-Free Pumping, Ogden's Lemma, and Parsing: Examples and Counterexamples (3 item(s))

- `ex-pumping-lemma-for-context-free-languages` · example — Using the CFL pumping lemma to rule out $\{a^{n}b^{n}c^{n}:n\ge 0\}$
- `ex-cfg-emptiness-and-finiteness-are-decidable` · example — Running the emptiness and finiteness tests on small grammars
- `cex-the-cfl-pumping-lemma-characterizes-cfls` · counterexample — A non-context-free language can still satisfy the Bar-Hillel pumping condition

### `robust-machine-models-and-universal-computation` — Robust Machine Models and Universal Computation (16 item(s))

- `def-effective-encoding-of-turing-machines` · definition — A fixed effective binary encoding of deterministic one-tape Turing machines
- `lem-machine-encoding-is-injective-and-decodable` · lemma — The chosen machine coding is injective and has a total decoder
- `thm-stay-put-moves-can-be-eliminated` · theorem — Stay-put moves can be eliminated from fixed-tape Turing-machine models
- `thm-one-way-and-two-way-tapes-are-equivalent` · theorem — One-way and two-way infinite tape conventions are equivalent
- `thm-multitape-machines-have-one-tape-simulations` · theorem — Every fixed multitape Turing machine has an equivalent one-tape simulation
- `lem-multitape-simulation-has-quadratic-time-overhead` · lemma — The standard one-tape simulation of a fixed multitape machine has quadratic overhead
- `thm-nondeterministic-and-deterministic-recognizability-agree` · theorem — Deterministic and nondeterministic Turing machines recognize the same languages
- `def-random-access-and-register-machine-programs` · definition — Register programs and RAM programs with unbounded natural-number memory
- `thm-ram-register-and-turing-computability-agree` · theorem — RAM/register computation and Turing computation agree
- `def-universal-turing-machine` · definition — A universal Turing machine relative to a fixed machine encoding
- `lem-step-by-step-interpreter-for-machine-codes` · lemma — A fixed interpreter can execute one encoded machine step
- `thm-existence-of-a-universal-turing-machine` · theorem — A universal Turing machine exists for the chosen coding
- `cor-effective-enumeration-of-turing-machines` · corollary — Turing machines admit an effective enumeration
- `def-church-turing-thesis` · definition — The Church-Turing thesis
- `rem-model-equivalence-supports-but-does-not-prove-the-thesis` · remark — Model-equivalence theorems support but do not prove the Church-Turing thesis
- `fs-universality-decides-halting` · false-statement — FALSE: universality decides halting

### `robust-machine-models-and-universal-computation-examples` — Robust Machine Models and Universal Computation: Examples and Counterexamples (3 item(s))

- `ex-stay-put-moves-can-be-eliminated` · example — Replacing a stay-put transition by a right-left macro
- `ex-effective-enumeration-of-turing-machines` · example — Listing the first few well-formed machine codes in shortlex order
- `cex-universality-decides-halting` · counterexample — A universal machine diverges on a looping machine/input pair

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
| `cex-the-cfl-pumping-lemma-characterizes-cfls` | `context-free-pumping-ogden-and-parsing-examples` | gpt-5.6-terra | `05dff1a5b5f2fa561ee067030f0a33cb89e1893c5fd853f0225a35d5a1ed74ac` |
| `def-effective-encoding-of-turing-machines` | `robust-machine-models-and-universal-computation` | gpt-5.6-terra | `c7ebed78cb0293accc3d7777805f4250a1423401a3f7c394556424c80cf1f437` |
| `def-generalized-nfa` | `regular-expressions-and-kleenes-theorem` | gpt-5.6-terra | `bdf142144018d8a7f156ae2daa5d781a51235de4f0314ff3b4f527543640bd62` |
| `def-universal-turing-machine` | `robust-machine-models-and-universal-computation` | gpt-5.6-terra | `9f657380d5e12eab7a23b851e2dfbbc110eb561a9521d2c13282a1249c911f2a` |
| `fs-cfg-equivalence-is-decidable-by-normalization` | `context-free-pumping-ogden-and-parsing` | gpt-5.6-terra | `0863cd6593d555ad6b9eb0b121ad02b60b90dde5e20f694023c3e6bdbd79874c` |
| `fs-the-cfl-pumping-lemma-characterizes-cfls` | `context-free-pumping-ogden-and-parsing` | gpt-5.6-terra | `838500adf2ab599cd2b67b03d8f5d295b0c056b64accb985f85c42dc3d60735a` |
| `lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set` | `iterative-sparsification-and-the-five-vertex-path` | gpt-5.6-terra | `15790d25a00389c7803e7464eeab56fdd3a4a978722b3e7bd3e3346d62b7fd03` |
| `lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs` | `iterative-sparsification-and-the-five-vertex-path` | gpt-5.6-terra | `ea9b96d994913ea79b9d87c795d0d5b2678170b83682f40b45a74822c3505459` |
| `lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade` | `iterative-sparsification-and-the-five-vertex-path` | gpt-5.6-terra | `473b56e2e36c64114ddce2ecbd80b151dea0bf614ff20edbdb5658363fd9d787` |
| `lem-step-by-step-interpreter-for-machine-codes` | `robust-machine-models-and-universal-computation` | gpt-5.6-terra | `8ff3f899ee2d06d2751e0e3ab17caeba190e80e85e96abb82e0cd54afb8f9f06` |
| `thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade` | `iterative-sparsification-and-the-five-vertex-path` | gpt-5.6-terra | `6f6e505ba5f2704a101300af6404e2475b979510d7f13fb93d74cd3017358256` |
| `thm-multitape-machines-have-one-tape-simulations` | `robust-machine-models-and-universal-computation` | gpt-5.6-terra | `7549ee3dbcf241451519f72b6f55046d5a7609dce47304c2dd41fb393715d089` |
| `thm-one-way-and-two-way-tapes-are-equivalent` | `robust-machine-models-and-universal-computation` | gpt-5.6-terra | `15833584daee31f39bf6979da7dd7d70e033c6e18b50f1b23efc416802511dcf` |
| `thm-regular-expression-to-epsilon-nfa` | `regular-expressions-and-kleenes-theorem` | gpt-5.6-terra | `af65bc394fec50145fd4a163e41aa84aba7b78642d777652a8a93d64a884d467` |
| `thm-stay-put-moves-can-be-eliminated` | `robust-machine-models-and-universal-computation` | gpt-5.6-terra | `c932c5f0ed8630f32ef04dcd600849b2794d4f261b64c011304fc8c00e349a78` |
| `thm-the-five-vertex-path-has-the-polynomial-rodl-property` | `iterative-sparsification-and-the-five-vertex-path` | gpt-5.6-terra | `12677def1b4b066915dc246d5efdbd9315a592a8e913b01a3baa60744522af85` |

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
