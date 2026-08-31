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
group work, `research/frontier-26-alpha-groups.json` is the assignment: it permits at
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

run: frontier-26
role: alpha-adjudicate
label: adjudicate-rejudge-c-round-1

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
  "group": "c",
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
      "id": "def-grade-and-relative-minimal-polynomial-of-a-start-vector",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere",
      "scope": "run",
      "owner": "c"
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
      "id": "thm-monodromy-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riemann-surface-of-the-logarithm",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "def-calligraphic-l-p-on-a-measure-space",
      "model": "gpt-5.6-terra",
      "context_sha256": "c38e9d45308a13f2c7e907a8d1dc9a7c80868fa82b4f90f55dc251626a2a750a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-condition-number-of-a-simple-eigenvalue",
      "model": "gpt-5.6-terra",
      "context_sha256": "ab5368eb804133b68cf99aa99700b19fabf51d4b952a1ff092754254379bc26d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-grade-and-relative-minimal-polynomial-of-a-start-vector",
      "model": "gpt-5.6-terra",
      "context_sha256": "04b28d48330dd1bfcaf3bd5444db70b279c5ed01c6dc89d37980012d6c605fd4",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere",
      "model": "gpt-5.6-terra",
      "context_sha256": "8efc4ede3048a89b0388d8b550da39d6aeb158a56c9da0a15de9c648647208b8",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector",
      "model": "gpt-5.6-terra",
      "context_sha256": "2a5282ae1331582660df2d3f0a498ea573866b427e98eff901ba66cf35fab9b0",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance",
      "model": "gpt-5.6-terra",
      "context_sha256": "4ce402973d452ed1eaf529b91e54758caf32283232454ad1b1e6d56f1ec0ee96",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "rem-covering-maps-among-complete-analytic-functions",
      "model": "gpt-5.6-terra",
      "context_sha256": "5e40fc922ef7a6a81de46fbea1d93cb289141aa9ef9a175efaeecde845d9bee1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities",
      "model": "gpt-5.6-terra",
      "context_sha256": "91dafb1dc6b4af5004cd85652486c1b1811d7bbd63953dc508282c57a94b2db8",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization",
      "model": "gpt-5.6-terra",
      "context_sha256": "6552097c2013e65c6649e7d0f3eed5678cce6863ac409ae3343f45db0fef1fc5",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-monodromy-theorem",
      "model": "gpt-5.6-terra",
      "context_sha256": "46e9772045862a770604bea9610e64043a998b386ff1a04bedc9ead644ffafda",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-riemann-surface-of-the-logarithm",
      "model": "gpt-5.6-terra",
      "context_sha256": "f3992ea6b6d3fba4a20135d848402dacc5f88afb6c36b396473955a08745526d",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **c**, run `frontier-26`

You are the group Alpha for batches **2**, **3**, **4**: 4 A/B pair(s), 8 page(s), 145 item(s), 11 open rejection(s) over 11 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 2 | `krylov-subspaces-arnoldi-and-gmres` | A | linear-algebra | 168.009 | `eigenvalue-iterations-and-the-qr-algorithm` |
| 2 | `krylov-subspaces-arnoldi-and-gmres-examples` | B | linear-algebra | 168.01 | `krylov-subspaces-arnoldi-and-gmres` |
| 2 | `matrix-differentiation-and-first-order-spectral-perturbation` | A | linear-algebra | 288.000021 | `the-inverse-function-theorem-completed`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares` |
| 2 | `matrix-differentiation-and-first-order-spectral-perturbation-examples` | B | linear-algebra | 288.000022 | `matrix-differentiation-and-first-order-spectral-perturbation` |
| 3 | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | A | measure-theory | 288.027 | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples`, `triangularisation-and-jordan-canonical-form` |
| 3 | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | B | measure-theory | 288.028 | `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 4 | `analytic-continuation-and-monodromy` | A | complex-analysis | 341 | `simply-connected-plane-domains`, `the-identity-theorem-and-the-open-mapping-theorem`, `covering-spaces-and-lifting`, `the-field-of-fractions-and-localisation`, `countability-axioms-and-cardinal-functions`, `classification-of-covering-spaces` |
| 4 | `analytic-continuation-and-monodromy-examples` | B | complex-analysis | 342 | `analytic-continuation-and-monodromy` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `krylov-subspaces-arnoldi-and-gmres` — Krylov Subspaces, Arnoldi and GMRES (20 item(s))

- `def-krylov-subspace-of-a-matrix-and-start-vector` · definition — The Krylov subspace $K_m(A,b)=\operatorname{span}\{b,Ab,\dots,A^{m-1}b\}$
- `def-grade-and-relative-minimal-polynomial-of-a-start-vector` · definition — The grade of a start vector and its relative minimal polynomial
- `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector` · proposition — The Krylov subspace consists exactly of vectors of the form $p(A)b$ with $\deg p<m$
- `thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise` · theorem — The dimensions of the Krylov spaces grow by one until the grade and then stabilize
- `cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade` · corollary — If $A$ is invertible, the exact solution of $Ax=b$ lies in the Krylov space at the grade
- `def-arnoldi-process` · definition — The Arnoldi process for building an orthonormal basis of a Krylov subspace
- `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization` · theorem — Before breakdown, Arnoldi produces an orthonormal Krylov basis and the factorization $AQ_m=Q_{m+1}\bar H_m$ with $\bar H_m$ upper Hessenberg
- `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance` · proposition — Exact Arnoldi breakdown is equivalent to invariance of the current Krylov space
- `def-ritz-values-and-ritz-vectors-from-arnoldi` · definition — Ritz values and Ritz vectors extracted from the Arnoldi Hessenberg reduction
- `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair` · proposition — An Arnoldi Ritz pair has residual norm controlled by the last Hessenberg subdiagonal entry
- `def-gmres-iterate` · definition — The GMRES iterate as the residual minimizer over an affine Krylov space
- `thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem` · theorem — Arnoldi reduces GMRES to a least-squares problem for the small Hessenberg matrix
- `cor-gmres-minimizes-the-residual-over-the-affine-krylov-space` · corollary — GMRES minimizes the residual norm over the affine Krylov space $x_0+K_m(A,r_0)$
- `cor-unrestarted-gmres-residual-norms-are-nonincreasing` · corollary — For unrestarted GMRES, the residual norms are nonincreasing
- `prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual` · proposition — The GMRES residual has the form $r_m=p_m(A)r_0$ with $p_m(0)=1$ and $\deg p_m\le m$
- `thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic` · theorem — In exact arithmetic, unrestarted GMRES terminates no later than the relative grade
- `prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor` · proposition — For a diagonalizable matrix, the GMRES residual bound carries the eigenvector-conditioning factor $\kappa(V)$
- `def-restarted-gmres-m` · definition — Restarted GMRES$(m)$ as repeated GMRES cycles on fixed-size Krylov spaces
- `prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination` · proposition — Restarted GMRES preserves cyclewise residual minimization but loses the unrestarted finite-termination guarantee
- `def-matrix-free-access-model-for-krylov-methods` · definition — The matrix-free access model for Krylov methods

### `krylov-subspaces-arnoldi-and-gmres-examples` — Krylov Subspaces, Arnoldi and GMRES: Examples and Counterexamples (8 item(s))

- `ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial` · example — A Krylov chain can stabilize early when the start vector has a short relative minimal polynomial
- `ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain` · example — A hand calculation of Arnoldi shows the Hessenberg factorization entry by entry
- `ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space` · example — Lucky breakdown occurs when the current Krylov space is already invariant
- `ex-a-ritz-pair-and-its-residual-from-a-small-arnoldi-run` · example — A Ritz pair from Arnoldi has a residual given by the last Hessenberg column entry
- `ex-gmres-on-a-small-nonsymmetric-system` · example — GMRES on a small nonsymmetric system becomes a two- or three-dimensional least-squares problem
- `cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning` · counterexample — A nonnormal matrix can make GMRES stagnate even when ordinary conditioning is not extreme
- `ex-restarted-gmres-versus-full-gmres-on-the-same-system` · example — Restarted GMRES can need more cycles than unrestarted GMRES on the same system
- `ex-matrix-free-gmres-for-a-sparse-operator` · example — Matrix-free GMRES only needs repeated applications of the operator to vectors

### `matrix-differentiation-and-first-order-spectral-perturbation` — Matrix Differentiation and First-order Spectral Perturbation (23 item(s))

- `def-real-frechet-derivative-on-real-and-complex-matrix-spaces` · definition — The real Frechet derivative on real and complex matrix spaces with the Frobenius norm
- `prop-matrix-differentials-obey-sum-product-and-adjoint-rules` · proposition — Matrix differentials obey the sum rule, product rule, and adjoint rule
- `thm-derivative-of-matrix-inversion` · theorem — On the invertible locus, $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$
- `thm-determinant-differential-and-jacobis-formula` · theorem — The determinant differential is $D\det(A)[H]=\operatorname{tr}(\operatorname{adj}(A)H)$ at every matrix, and Jacobi's formula holds on the invertible locus
- `prop-differentials-of-trace-and-frobenius-linear-functionals` · proposition — Trace and Frobenius-linear matrix functionals differentiate by inspection
- `prop-gradient-of-a-quadratic-matrix-form` · proposition — Matrix quadratic forms have the expected first derivative and Hessian
- `thm-gradient-and-hessian-of-the-frobenius-least-squares-functional` · theorem — The Frobenius least-squares objective has gradient $A^*(Ax-b)$ and Hessian $A^*A$ in the vector variable
- `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue` · definition — Compatible left and right eigenvectors for a simple eigenvalue
- `prop-simple-eigenvalues-admit-left-right-normalization` · proposition — For a simple eigenvalue, left and right eigenvectors pair nontrivially and may be normalized by $y^*x=1$
- `def-condition-number-of-a-simple-eigenvalue` · definition — The normwise condition number of a simple eigenvalue
- `def-simple-spectral-projector` · definition — The simple spectral projector $P=xy^*/(y^*x)$
- `prop-simple-spectral-projector-is-scale-invariant` · proposition — The simple spectral projector is unchanged by nonzero rescalings of the left and right eigenvectors
- `def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue` · definition — The reduced resolvent, or group inverse, on the complementary invariant subspace of a simple eigenvalue
- `prop-reduced-resolvent-identities-for-a-simple-eigenvalue` · proposition — The reduced resolvent satisfies the standard projector and inverse identities on the complementary invariant subspace
- `thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing` · theorem — A simple eigenvalue and a gauge-fixed right eigenvector admit local $C^1$ branches in the underlying real matrix space
- `thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x` · theorem — Along a differentiable matrix path, a simple eigenvalue satisfies $\lambda'=y^*A'x$ under the normalization $y^*x=1$
- `prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x` · proposition — The normwise condition number of a simple eigenvalue is $\|x\|_2\|y\|_2/|y^*x|$
- `thm-derivative-of-the-simple-spectral-projector` · theorem — The derivative of the simple spectral projector is expressed by the reduced resolvent and the perturbation
- `thm-gauge-fixed-simple-eigenvector-derivative-formula` · theorem — In a fixed gauge, the derivative of a simple right eigenvector is obtained by applying the reduced resolvent to the perturbation
- `cor-hermitian-simple-eigenpair-derivative-simplifications` · corollary — For a Hermitian simple eigenvalue, one may take $y=x$ and the first-order formulas simplify accordingly
- `thm-directional-derivative-of-a-simple-positive-singular-value` · theorem — If $\sigma>0$ is a simple singular value with left and right singular vectors $u,v$, then its real directional derivative is $\operatorname{Re}(u^*Hv)$
- `cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting` · counterexample — A defective Jordan block can split under perturbation at square-root scale
- `cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing` · counterexample — An ordered eigenvector branch need not extend differentiably through an eigenvalue crossing

### `matrix-differentiation-and-first-order-spectral-perturbation-examples` — Matrix Differentiation and First-order Spectral Perturbation: Examples and Counterexamples (9 item(s))

- `ex-the-inverse-derivative-of-a-two-by-two-matrix` · example — Differentiating the inverse of a $2\times2$ matrix reproduces the closed formula entrywise
- `ex-determinant-differential-at-an-invertible-and-a-singular-matrix` · example — The adjugate formula still differentiates the determinant at a singular matrix, while Jacobi's inverse form does not
- `ex-the-gradient-and-hessian-of-a-small-least-squares-functional` · example — A small least-squares problem makes the gradient and Hessian formulas explicit
- `ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors` · example — For a nonnormal matrix, the simple eigenvalue derivative uses distinct left and right eigenvectors
- `ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction` · example — For a Hermitian family, the first derivative of a simple eigenvalue is the corresponding Rayleigh quotient direction
- `ex-two-gauge-choices-give-different-eigenvector-derivatives` · example — Different gauge choices change the eigenvector derivative but not the eigenvalue derivative or projector derivative
- `ex-a-jordan-block-splits-by-a-square-root-perturbation` · example — A $2\times2$ Jordan block splits into two eigenvalues separated by a square root
- `ex-the-directional-derivative-of-a-simple-singular-value` · example — The directional derivative of a simple singular value is the real part of $u^*Hv$
- `cex-an-eigenvector-branch-cannot-stay-differentiable-through-a-symmetric-crossing` · counterexample — At a symmetric crossing, an ordered eigenvector branch cannot remain differentiable

### `the-lp-spaces-holder-minkowski-and-riesz-fischer` — The $L^p$ Spaces Holder Minkowski and Riesz Fischer (33 item(s))

- `def-conjugate-exponents` · definition — Conjugate exponents, including the endpoint conventions
- `def-essential-supremum-with-respect-to-a-measure` · definition — The essential supremum of a measurable function with respect to a measure
- `def-calligraphic-l-p-on-a-measure-space` · definition — The function space $\mathcal{L}^p(\mu)$ for $0 < p < \infty$
- `def-l-infinity-on-a-measure-space` · definition — The space $L^\infty(\mu)$ of essentially bounded measurable functions
- `def-null-subspace-of-almost-everywhere-zero-functions` · definition — The null subspace of measurable functions that vanish almost everywhere
- `def-l-p-space-as-a-quotient-by-null-functions` · definition — The space $L^p(\mu)$ as the quotient by null functions
- `rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative` · remark — Elements of $L^p$ are equivalence classes, so pointwise statements require a representative
- `rem-ell-p-is-l-p-of-counting-measure` · remark — $\ell^p$ is the $L^p$ space of counting measure
- `thm-holder-inequality-for-integrals` · theorem — Holder's inequality for integrals, including the endpoint cases
- `thm-equality-case-in-holder-inequality` · theorem — Equality in Holder's inequality for $1 < p < \infty$
- `thm-generalized-holder-inequality-for-products` · theorem — Generalized Holder inequality puts products into $L^r$
- `cor-cauchy-schwarz-inequality-for-l-two` · corollary — Cauchy-Schwarz inequality for $L^2$
- `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities` · remark — On a finite counting space, Holder and Cauchy-Schwarz agree with the published finite-dimensional inequalities
- `thm-minkowski-inequality-for-integrals` · theorem — Minkowski's inequality for integrals, including $p = \infty$
- `thm-equality-case-in-minkowski-inequality` · theorem — Equality in Minkowski's inequality for $1 < p < \infty$
- `rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem` · remark — On a finite counting space, Minkowski agrees with the published finite-dimensional theorem
- `prop-essential-supremum-is-attained-as-the-least-essential-bound` · proposition — The essential supremum is attained as the least essential bound
- `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one` · theorem — $\mathcal{L}^p$ and $L^\infty$ are vector spaces for $p \ge 1$
- `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class` · proposition — Null functions form a linear subspace and are exactly the zero-seminorm class
- `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space` · theorem — The $L^p$ norm descends to the quotient and makes $L^p$ a normed space for $1 \le p \le \infty$
- `thm-riesz-fischer-completeness-of-l-p` · theorem — Riesz-Fischer completeness of $L^p$ for $1 \le p \le \infty$
- `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences` · corollary — $L^p$-convergent sequences have almost-everywhere convergent subsequences
- `cor-l-p-convergence-implies-convergence-in-measure` · corollary — Convergence in $L^p$ implies convergence in measure
- `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r` · theorem — On a finite measure space, $L^r$ includes into $L^p$ for $p < r$
- `thm-ell-p-includes-into-ell-r-for-p-less-r` · theorem — $\ell^p$ includes into $\ell^r$ for $p < r$
- `thm-lyapunov-interpolation-inequality-for-l-p-norms` · theorem — Lyapunov's interpolation inequality for $L^p$ norms
- `rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm` · remark — Lyapunov interpolation is equivalent to log-convexity of $p \mapsto \log \lVert f \rVert_p$
- `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions` · theorem — For essentially bounded $L^r$ functions, the $L^p$ norms converge to the essential supremum
- `thm-parallelogram-law-in-l-two` · theorem — The parallelogram law in $L^2$
- `prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one` · proposition — For $0 < p < 1$, the $p$-functional is not a norm
- `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric` · theorem — For $0 < p < 1$, the $L^p$ distance is a complete translation-invariant metric
- `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one` · theorem — For $0 < p < 1$, nonnegative functions satisfy the reverse $p$-triangle inequality
- `rem-lp-completeness-and-the-banach-property` · remark — A complete normed-space viewpoint on $L^p$ belongs to the later functional-analysis dictionary

### `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` — The $L^p$ Spaces Holder Minkowski and Riesz Fischer — Examples (19 item(s))

- `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership` · example — The family $x^{-a}$ on $(0,1)$ and $(1,\infty)$ calibrates $L^p$ membership
- `ex-k-to-the-minus-a-membership-in-ell-p` · example — The sequence $(k^{-a})$ belongs to $\ell^p$ exactly when $ap > 1$
- `ex-finite-counting-measure-on-n-points-recovers-rn-p-norms` · example — Finite counting measure on $n$ points recovers the published $p$-norms on $\mathbb{R}^n$
- `ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one` · example — The indicator of the rationals has essential supremum $0$ but pointwise supremum $1$
- `ex-proportional-functions-realise-the-equality-case-of-holder` · example — Proportional functions realize the equality case of Holder
- `ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum` · example — A two-step function shows $\lVert f \rVert_p \to \lVert f \rVert_\infty$
- `ex-the-parallelogram-law-on-two-indicator-functions-in-l-two` · example — The parallelogram law on two explicit $L^2$ indicator functions
- `cex-l-one-not-subset-l-two-on-the-line` · counterexample — $L^1(\mathbb{R})$ is not a subset of $L^2(\mathbb{R})$
- `cex-l-two-not-subset-l-one-on-the-line` · counterexample — $L^2(\mathbb{R})$ is not a subset of $L^1(\mathbb{R})$
- `rem-the-published-typewriter-sequence-shows-why-riesz-fischer-only-promises-a-subsequence` · remark — The published typewriter sequence shows why Riesz-Fischer only promises a subsequence
- `cex-half-norm-fails-the-triangle-inequality-on-two-indicators` · counterexample — The $p = 1/2$ functional fails the triangle inequality on two indicators
- `cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm` · counterexample — A nonzero function on a null set has zero $L^p$ seminorm
- `cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions` · counterexample — A Cauchy sequence in $\mathcal{L}^p$ can converge to two distinct functions
- `fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r` · false-statement — FALSE: $L^p$ includes into $L^r$ on every measure space whenever $p < r$
- `fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm` · false-statement — FALSE: the $p$-seminorm on $\mathcal{L}^p$ is a norm
- `fs-the-essential-supremum-equals-the-pointwise-supremum` · false-statement — FALSE: the essential supremum equals the pointwise supremum
- `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere` · false-statement — FALSE: every $L^p$-Cauchy sequence converges pointwise almost everywhere
- `fs-l-one-half-with-its-p-functional-is-a-normed-space` · false-statement — FALSE: $L^{1/2}$ with its $p$-functional is a normed space
- `fs-holder-equality-forces-the-functions-themselves-to-be-proportional` · false-statement — FALSE: equality in Holder forces the functions themselves to be proportional

### `analytic-continuation-and-monodromy` — Analytic Continuation, Monodromy, and Riemann Surfaces (22 item(s))

- `def-holomorphic-germ` · definition — Holomorphic germs at a point
- `thm-holomorphic-germs-at-a-point-form-a-local-ring` · theorem — Holomorphic germs at a point form a local ring
- `def-function-element-and-direct-analytic-continuation` · definition — Function elements and direct analytic continuation
- `def-analytic-continuation-along-a-path` · definition — Analytic continuation along a path by admissible chains
- `lem-refinement-of-analytic-continuation-chains` · lemma — Two admissible continuation chains along one path admit a common refinement
- `thm-end-germ-of-path-continuation-is-independent-of-the-chain` · theorem — The terminal germ of a continuation along a fixed path is chain-independent
- `thm-uniqueness-of-analytic-continuation` · theorem — Analytic continuation along a fixed path is unique whenever it exists
- `def-complete-analytic-function` · definition — The complete analytic function generated by one germ
- `thm-monodromy-theorem` · theorem — Fixed-endpoint homotopic paths give the same analytic continuation
- `cor-single-valued-continuation-on-simply-connected-domains` · corollary — On a simply connected domain, pathwise continuation glues to one holomorphic function
- `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems` · remark — The monodromy corollary agrees with the earlier simply connected logarithm theorems
- `def-riemann-surface-of-a-complete-analytic-function` · definition — The germ space of a complete analytic function
- `lem-germ-neighborhoods-form-a-riemann-surface-basis` · lemma — The germ neighborhoods form a Hausdorff, second-countable Riemann-surface atlas
- `thm-germ-projection-is-a-local-biholomorphism` · theorem — The germ projection is a local biholomorphism
- `rem-covering-maps-among-complete-analytic-functions` · remark — A germ projection is not automatically a covering map
- `thm-riemann-surface-of-the-logarithm` · theorem — The Riemann surface of the logarithm is the complex plane over the punctured plane via exp
- `thm-riemann-surface-of-an-nth-root` · theorem — The Riemann surface of an nth root is the n-sheeted covering w maps to w to the nth power
- `rem-schwarz-reflection-as-analytic-continuation` · remark — Schwarz reflection is an analytic continuation construction
- `def-singular-boundary-point-and-natural-boundary` · definition — Singular boundary points and natural boundaries of function elements
- `thm-circle-of-convergence-contains-a-singular-point` · theorem — A power series of finite radius has a singular point on its circle of convergence
- `thm-pringsheim-theorem` · theorem — Pringsheim's theorem for power series with nonnegative coefficients
- `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary` · theorem — The factorial-gap series has the unit circle as a natural boundary

### `analytic-continuation-and-monodromy-examples` — Analytic Continuation, Monodromy, and Riemann Surfaces — Examples (11 item(s))

- `ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i` · example — Continuing the logarithm once around the unit circle adds 2 pi i
- `ex-square-root-continuation-around-the-origin-changes-sign` · example — Continuing a square root once around the origin changes its sign
- `ex-helicoid-model-of-the-logarithm-surface` · example — The logarithm surface admits the standard helicoid model
- `ex-two-sheeted-model-of-the-square-root-surface` · example — The square-root surface is a two-sheeted covering of the punctured plane
- `ex-the-geometric-series-has-only-one-singular-boundary-point` · example — The geometric series has only one singular point on its unit circle
- `cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary` · counterexample — The factorial-gap series shows that a holomorphic function need not continue past its boundary
- `cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one` · counterexample — The series sum z to the n over n squared is continuous on the closed disc but singular at 1
- `fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary` · false-statement — FALSE: every holomorphic function on a domain continues past its boundary
- `fs-continuation-along-same-endpoint-paths-always-agrees` · false-statement — FALSE: continuation along two paths with the same endpoints always agrees
- `fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared` · false-statement — FALSE: the Riemann surface of a multivalued function is automatically a subset of C squared
- `fs-every-boundary-point-of-a-radius-one-power-series-is-singular` · false-statement — FALSE: every boundary point of a radius-one power series is singular

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
| `def-calligraphic-l-p-on-a-measure-space` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `c38e9d45308a13f2c7e907a8d1dc9a7c80868fa82b4f90f55dc251626a2a750a` |
| `def-condition-number-of-a-simple-eigenvalue` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `ab5368eb804133b68cf99aa99700b19fabf51d4b952a1ff092754254379bc26d` |
| `def-grade-and-relative-minimal-polynomial-of-a-start-vector` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `04b28d48330dd1bfcaf3bd5444db70b279c5ed01c6dc89d37980012d6c605fd4` |
| `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `8efc4ede3048a89b0388d8b550da39d6aeb158a56c9da0a15de9c648647208b8` |
| `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `2a5282ae1331582660df2d3f0a498ea573866b427e98eff901ba66cf35fab9b0` |
| `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `4ce402973d452ed1eaf529b91e54758caf32283232454ad1b1e6d56f1ec0ee96` |
| `rem-covering-maps-among-complete-analytic-functions` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `5e40fc922ef7a6a81de46fbea1d93cb289141aa9ef9a175efaeecde845d9bee1` |
| `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `91dafb1dc6b4af5004cd85652486c1b1811d7bbd63953dc508282c57a94b2db8` |
| `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `6552097c2013e65c6649e7d0f3eed5678cce6863ac409ae3343f45db0fef1fc5` |
| `thm-monodromy-theorem` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `46e9772045862a770604bea9610e64043a998b386ff1a04bedc9ead644ffafda` |
| `thm-riemann-surface-of-the-logarithm` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `f3992ea6b6d3fba4a20135d848402dacc5f88afb6c36b396473955a08745526d` |

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
