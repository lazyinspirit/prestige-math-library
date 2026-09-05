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
group work, `research/frontier-30-alpha-groups.json` is the assignment: it permits at
most eight groups of at most three batches, and a group writes only its own
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

run: frontier-30
role: alpha-adjudicate
label: adjudicate-rejudge-b-round-1

# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-30",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "b",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor]: cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5fb85d9a4b",
      "output": "level-coverage --judge-only: 694/694 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 61 unadjudicated, 0 open fatal, 90 adjudicated rejection(s) closed nonfatally; legacy gate counter 694/694 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor]: cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5fb85d9a4bf452bbf1ada6d2e8c9fe7912375d6afce38b29c329c5f073ff5eb7\nERROR judge-adjudication-missing [cor-the-center-is-a-polynomial-algebra-of-rank-many-generators]: cor-the-center-is-a-polynomial-algebra-of-rank-many-generators: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1a23205b12f5a61707706e0b1e5767f7d1dbbe705d334856533c853462b602ea\nERROR judge-adjudication-missing [def-elliptic-hyperbolic-and-parabolic-principal-symbols]: def-elliptic-hyperbolic-and-parabolic-principal-symbols: current gpt-5.6-terra rejection has no exact Alpha outcome for context 18eade62185cadf52e5a6b34bdcbc77f988ed4d9e96b527782fc21aff3822ef3\nERROR judge-adjudication-missing [def-enriched-category]: def-enriched-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context 96d1f51cec7f242d00f79dd498e87c18e7205a636494438765263e90ec6a0ad5\nERROR judge-adjudication-missing [def-enriched-weighted-limit]: def-enriched-weighted-limit: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7d0c6514bf076ff3e33c059a27bc6aed4cafb4a317d06c5213b10d0c343b34de\nERROR judge-adjudication-missing [def-leaf-of-a-regular-foliation]: def-leaf-of-a-regular-foliation: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5a65816b0f45fd805900fa45c0036fab46f43bb2361e28ce03fe27a2fdbe56b7\nERROR judge-adjudication-missing [def-natural-and-dirichlet-density]: def-natural-and-dirichlet-density: current gpt-5.6-terra rejection has no exact Alpha outcome for context d2582e0f7058465bd1cd1cc7418de009b96e2a7ea26745b662f37f80af9e7400\nERROR judge-adjudication-missing [def-property-star-for-a-finite-family]: def-property-star-for-a-finite-family: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7ddda0d032fe4e8c323f1187499ec6069313381c48276091ee986ce0fceb76ec\nERROR judge-adjudication-missing [def-pullback-module-ringed-spaces]: def-pullback-module-ringed-spaces: current gpt-5.6-terra rejection has no exact Alpha outcome for context b708bc62ecdbfae156056f3946a6e44dac4eea055294e1ce336446db8c666647\nERROR judge-adjudication-missing [def-two-variable-second-order-discriminant]: def-two-variable-second-order-discriminant: current gpt-5.6-terra rejection has no exact Alpha outcome for context 888aa3185404c014495adbcc656ae8d9d25682cae0bc4461630ba7445d73e159\nERROR judge-adjudication-missing [ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star]: ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star: current gpt-5.6-terra rejection has no exact Alpha outcome for context db5ddf67e5011b770c67f2256b694cde1674581a3f79cd7277036e2c49bd7085\nERROR judge-adjudication-missing [ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series]: ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series: current gpt-5.6-terra rejection has no exact Alpha outcome for context 05eeb67ca0e9218e1045f9be5f19453fb10859a14fcf33ec5155253811c6bca3\nERROR judge-adjudication-missing [ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one]: ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one: current gpt-5.6-terra rejection has no exact Alpha outcome for context ed150f42275802c9848d38d52451d53364dc07647962ea6b33d2e29a2dd4b028\nERROR judge-adjudication-missing [ex-clique-is-np-complete]: ex-clique-is-np-complete: current gpt-5.6-terra rejection has no exact Alpha outcome for context d7d7c06b81f990880fa7d035d81bab66ded0b5a081dfd227610e0e46a3ba6094\nERROR judge-adjudication-missing [ex-hasse-minkowski-for-a-quaternary-form]: ex-hasse-minkowski-for-a-quaternary-form: current gpt-5.6-terra rejection has no exact Alpha outcome for context f434d2b10b3f5cd92abb157792d9c7cb3aaaa33cfc62b74fec8ac98d26121e5f\nERROR judge-adjudication-missing [ex-hyperbola-is-multiplicative-group-variety]: ex-hyperbola-is-multiplicative-group-variety: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1f1602933e54e7efd6fb73c5e615f481aaebf22c91d0befb7ad0f09b2a332628\nERROR judge-adjudication-missing [ex-jump-and-continuous-parts-of-x-plus-rational-jumps]: ex-jump-and-continuous-parts-of-x-plus-rational-jumps: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2cf2b1c443e0a7d4c0be3a905d74188daccb138d9e7c754d7276ea344e8dd2c4\nERROR judge-adjudication-missing [ex-local-ring-affine-line-at-origin]: ex-local-ring-affine-line-at-origin: current gpt-5.6-terra rejection has no exact Alpha outcome for context c3ce1ef0238b175e60d2b117cd667c8b255ac0b152a54b8f902364c921ca290e\nERROR judge-adjudication-missing [ex-modified-pcp-is-undecidable]: ex-modified-pcp-is-undecidable: current gpt-5.6-terra rejection has no exact Alpha outcome for context d9de54c197023f8864e1f2be7169b2c74ddbd36ca0275e6e1f03827cd5c42c49\nERROR judge-adjudication-missing [ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere]: ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere: current gpt-5.6-terra rejection has no exact Alpha outcome for context 49c539d7b291a469d9bf0baea97f069e7782086c63cf19b817f9290a4d6018b5\nERROR judge-adjudication-missing [ex-the-lemma-three-five-parameter-choice-on-a-large-graph]: ex-the-lemma-three-five-parameter-choice-on-a-large-graph: current gpt-5.6-terra rejection has no exact Alpha outcome for context 40d7bf29ff7031f9b3a1924415a4f59c489649c675dde6204d24e19d1a732533\nERROR judge-adjudication-missing [ex-three-sat-reduces-to-three-colourability]: ex-three-sat-reduces-to-three-colourability: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3570c5cbedf77771228cde473136cf1748987a64e9b505230922df5047591ec9\nERROR judge-adjudication-missing [ex-two-universal-delta-functors-and-their-unique-isomorphism]: ex-two-universal-delta-functors-and-their-unique-isomorphism: current gpt-5.6-terra rejection has no exact Alpha outcome for context b4c40ac82364454b6b947d367684c76904e5b297d8dc2560228c7e350d5277bc\nERROR judge-adjudication-missing [fs-bounded-variation-implies-absolute-continuity]: fs-bounded-variation-implies-absolute-continuity: current gpt-5.6-terra rejection has no exact Alpha outcome for context bed3f72de4f69a9df13f9511d82b88f8a65e1835263c18c1f13403ee84d3f910\nERROR judge-adjudication-missing [fs-effaceability-means-every-positive-value-is-zero]: fs-effaceability-means-every-positive-value-is-zero: current gpt-5.6-terra rejection has no exact Alpha outcome for context e8227defcd32b7801ec01499aab6805df1da6c22d187a6b261a8c640d8599494\nERROR judge-adjudication-missing [fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold]: fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8e80240b02830ab4d2263c9e3e95a399425b65a3922c8c9fc3cb76ae0d27a0f2\nERROR judge-adjudication-missing [lem-computation-history-domino-encoding]: lem-computation-history-domino-encoding: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1d3ea651d3c6579c63d9f27141cf241c5f80a2738c885ae82a496e040cff8a44\nERROR judge-adjudication-missing [lem-extend-a-degree-zero-transformation-through-one-dimension-shift]: lem-extend-a-degree-zero-transformation-through-one-dimension-shift: current gpt-5.6-terra rejection has no exact Alpha outcome for context 09048a66c3598199bf85c9769341695f264d44800a83f2a79f6686b9b36ff07c\nERROR judge-adjudication-missing [lem-positive-log-dirichlet-series-nonvanishing]: lem-positive-log-dirichlet-series-nonvanishing: current gpt-5.6-terra rejection has no exact Alpha outcome for context 25f1d37ce66106aa0cfe408d4f88cd9c133fcd0d95437ce583d7f3781c27b274\nERROR judge-adjudication-missing [lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes]: lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes: current gpt-5.6-terra rejection has no exact Alpha outcome for context da6ed717c5e8f3faf08d590b8c93739bbbdcfa8592e6563ba3f3106be2018f6a\nERROR judge-adjudication-missing [lem-singular-chain-cross-product-boundary-formula]: lem-singular-chain-cross-product-boundary-formula: current gpt-5.6-terra rejection has no exact Alpha outcome for context f6169fc2c067f342401f47eb5be0fd01377e0f8a9aa4c49182095484ef7f123c\nERROR judge-adjudication-missing [lem-the-effacement-extension-commutes-with-connecting-morphisms]: lem-the-effacement-extension-commutes-with-connecting-morphisms: current gpt-5.6-terra rejection has no exact Alpha outcome for context d3dc1c480e0b382dacfe866082533ac4981091a73c104f4a5ba7b1333fb080f4\nERROR judge-adjudication-missing [lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts]: lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts: current gpt-5.6-terra rejection has no exact Alpha outcome for context 85a3fc74dd611ddd537a87e74ce45e6d0b89fb43bad532c08c49f56ade1d6b51\nERROR judge-adjudication-missing [prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution]: prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution: current gpt-5.6-terra rejection has no exact Alpha outcome for context ac9bf996968564dbd752aff7a7708c4f05d3275ce0f360dc12073939790d81ad\nERROR judge-adjudication-missing [prop-positive-left-derived-functors-are-effaceable-by-projectives]: prop-positive-left-derived-functors-are-effaceable-by-projectives: current gpt-5.6-terra rejection has no exact Alpha outcome for context 03a93ccf82f8a92cdd989d5b36824e72ff11a859d925b070017a1badac04f00e\nERROR judge-adjudication-missing [prop-satellites-give-the-first-derived-functor]: prop-satellites-give-the-first-derived-functor: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5dc21c58ab28a3ccfe52e6498ea0280b168c6dd8800b29ac5b072b716e243913\nERROR judge-adjudication-missing [prop-the-quadratic-casimir-element-is-central]: prop-the-quadratic-casimir-element-is-central: current gpt-5.6-terra rejection has no exact Alpha outcome for context c7190808f5a172e9346cc1e0755581906b7d708cb0837d17861b62167210d601\nERROR judge-adjudication-missing [rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness]: rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5985b758c4611a32e469670e5b822965476a13d2dd15e55edf63bfc9a57c8049\nERROR judge-adjudication-missing [rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims]: rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3ed4a5fd365eb9d837d833a87bcf994326aa106a1e22287154d01ae26d45bb05\nERROR judge-adjudication-missing [thm-conical-limits-do-not-suffice-in-the-enriched-setting]: thm-conical-limits-do-not-suffice-in-the-enriched-setting: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4757950980922ec9d7c04a52dd325395afcdc2f7b4c0bb456b823d54a329a779\nERROR judge-adjudication-missing [thm-enveloping-algebra-is-free-over-its-center]: thm-enveloping-algebra-is-free-over-its-center: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0264e33f0f5050b06e55f4b40fe3db5889514fc310ec27155bc4e60d550b2911\nERROR judge-adjudication-missing [thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables]: thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables: current gpt-5.6-terra rejection has no exact Alpha outcome for context ad947bdc242a95174cbcaf1464d4f8f1830464226e2dc7804451ad868d9cd292\nERROR judge-adjudication-missing [thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]: thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7c7bd7c78718b51fef37eeb165372500768f489f90457a382b419fc49fc8b98f\nERROR judge-adjudication-missing [thm-five-term-exact-sequence-as-extension-and-transgression-data]: thm-five-term-exact-sequence-as-extension-and-transgression-data: current gpt-5.6-terra rejection has no exact Alpha outcome for context ffa6db96443f99ddcfad4780e87fe9d4e145cc95304266a9e890719e9bb3c218\nERROR judge-adjudication-missing [thm-gibbs-overshoot-at-a-piecewise-c-one-jump]: thm-gibbs-overshoot-at-a-piecewise-c-one-jump: current gpt-5.6-terra rejection has no exact Alpha outcome for context 27a43eb7d2d3f8ffb6978abf5b3a5cf3908822e8f14807453aab24319f8acaa0\nERROR judge-adjudication-missing [thm-hasse-minkowski-for-ternary-forms-over-q]: thm-hasse-minkowski-for-ternary-forms-over-q: current gpt-5.6-terra rejection has no exact Alpha outcome for context cbd428ff135ecbc734196fbf7ed2706980eb1d6057e575c886fb261ed0ef6252\nERROR judge-adjudication-missing [thm-hasse-minkowski-over-the-rationals]: thm-hasse-minkowski-over-the-rationals: current gpt-5.6-terra rejection has no exact Alpha outcome for context cc0b7515918660e68304491aa00a75d77a4f7bf3802e23d7a8317e0045cc2133\nERROR judge-adjudication-missing [thm-homogeneous-linear-transport-by-the-flow]: thm-homogeneous-linear-transport-by-the-flow: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1f3aacc579c82cbbaf07ebe04139fb20a9bde24a2b83ada2ccabf5bd6b2c7e4d\nERROR judge-adjudication-missing [thm-increasing-functions-split-uniquely-as-jump-plus-continuous]: thm-increasing-functions-split-uniquely-as-jump-plus-continuous: current gpt-5.6-terra rejection has no exact Alpha outcome for context f6794280a4849743ac63ea342df1dbdd3d68bb7509c9a359f0e42d673f25ee92\nERROR judge-adjudication-missing [thm-inhomogeneous-linear-transport-formula]: thm-inhomogeneous-linear-transport-formula: current gpt-5.6-terra rejection has no exact Alpha outcome for context acac1649e347108e445e2194191f15b7c5e70146566bdd11af9371162d0138f4\nERROR judge-adjudication-missing [thm-local-linear-transport-cauchy-problem]: thm-local-linear-transport-cauchy-problem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6f481df71f6a843545ec019d4ba451babf1e747a5f760ecb4e7fa72a0c5e71dd\nERROR judge-adjudication-missing [thm-mini-vitali-fine-cover-characterisation-of-null-sets]: thm-mini-vitali-fine-cover-characterisation-of-null-sets: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1f36b6ae7ccc68e69cdc1896df3027adb6674761e858e43037dd7d86b42b4178\nERROR judge-adjudication-missing [thm-morse-functions-are-dense-by-relative-jet-transversality]: thm-morse-functions-are-dense-by-relative-jet-transversality: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9a4defcffd249242dc6bf70fb338ebca434de8a176d04e4a348d887d70c000c1\nERROR judge-adjudication-missing [thm-proper-inclusions-in-the-chomsky-hierarchy]: thm-proper-inclusions-in-the-chomsky-hierarchy: current gpt-5.6-terra rejection has no exact Alpha outcome for context 63dfac3d8c6bee445b742690cfd5b31cffe14de31dd8b7f86f5820f28f9d9bae\nERROR judge-adjudication-missing [thm-property-star-and-leaf-reducibility-imply-generalized-niceness]: thm-property-star-and-leaf-reducibility-imply-generalized-niceness: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8222c3b78dee335e6e8eb763f1484eed3e3adbfa766c59b4679fb67aa0da92d9\nERROR judge-adjudication-missing [thm-riesz-rising-sun-lemma]: thm-riesz-rising-sun-lemma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8662d011535a8b3e40807cc6186afffcbc540c5ffdde3939be8535f0bcb487ab\nERROR judge-adjudication-missing [thm-right-derived-functors-form-a-cohomological-delta-functor]: thm-right-derived-functors-form-a-cohomological-delta-functor: current gpt-5.6-terra rejection has no exact Alpha outcome for context f11b2eb0f62d4de036dbe86bc51fcb64087f4163547c02b5c320368285c948da\nERROR judge-adjudication-missing [thm-strong-enriched-yoneda-lemma-as-a-particular-end]: thm-strong-enriched-yoneda-lemma-as-a-particular-end: current gpt-5.6-terra rejection has no exact Alpha outcome for context 845e05497df7e3643ba9a28750a41c7de67321d6f7b0fa36fc58088771fddb2d\nERROR judge-adjudication-missing [thm-three-sat-reduces-to-directed-hamiltonian-cycle]: thm-three-sat-reduces-to-directed-hamiltonian-cycle: current gpt-5.6-terra rejection has no exact Alpha outcome for context 81bcdaa41f94eacdeea4cf758e2345a816d829289372ac2fa28329bb4b7e485d\nERROR judge-adjudication-missing [thm-three-sat-reduces-to-three-colourability]: thm-three-sat-reduces-to-three-colourability: current gpt-5.6-terra rejection has no exact Alpha outcome for context ba224fca34114dbd98599f4e42c3b537231c570d34d4051526faf8689b0acc62\nERROR judge-adjudication-missing [thm-two-adic-hilbert-symbol-formula]: thm-two-adic-hilbert-symbol-formula: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2a722270a7183ccb9b952ce9c7d630e680ea92dafe12b60bd05cdee052247da1\n",
      "named_ids": [
        "cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor",
        "cor-the-center-is-a-polynomial-algebra-of-rank-many-generators",
        "def-elliptic-hyperbolic-and-parabolic-principal-symbols",
        "def-enriched-category",
        "def-enriched-weighted-limit",
        "def-leaf-of-a-regular-foliation",
        "def-natural-and-dirichlet-density",
        "def-property-star-for-a-finite-family",
        "def-pullback-module-ringed-spaces",
        "def-two-variable-second-order-discriminant",
        "ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star",
        "ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series",
        "ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one",
        "ex-clique-is-np-complete",
        "ex-hasse-minkowski-for-a-quaternary-form",
        "ex-hyperbola-is-multiplicative-group-variety",
        "ex-jump-and-continuous-parts-of-x-plus-rational-jumps",
        "ex-local-ring-affine-line-at-origin",
        "ex-modified-pcp-is-undecidable",
        "ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere",
        "ex-the-lemma-three-five-parameter-choice-on-a-large-graph",
        "ex-three-sat-reduces-to-three-colourability",
        "ex-two-universal-delta-functors-and-their-unique-isomorphism",
        "fs-bounded-variation-implies-absolute-continuity",
        "fs-effaceability-means-every-positive-value-is-zero",
        "fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold",
        "lem-computation-history-domino-encoding",
        "lem-extend-a-degree-zero-transformation-through-one-dimension-shift",
        "lem-positive-log-dirichlet-series-nonvanishing",
        "lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes",
        "lem-singular-chain-cross-product-boundary-formula",
        "lem-the-effacement-extension-commutes-with-connecting-morphisms",
        "lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts",
        "prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution",
        "prop-positive-left-derived-functors-are-effaceable-by-projectives",
        "prop-satellites-give-the-first-derived-functor",
        "prop-the-quadratic-casimir-element-is-central",
        "rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness",
        "rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims",
        "thm-conical-limits-do-not-suffice-in-the-enriched-setting",
        "thm-enveloping-algebra-is-free-over-its-center",
        "thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables",
        "thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds",
        "thm-five-term-exact-sequence-as-extension-and-transgression-data",
        "thm-gibbs-overshoot-at-a-piecewise-c-one-jump",
        "thm-hasse-minkowski-for-ternary-forms-over-q",
        "thm-hasse-minkowski-over-the-rationals",
        "thm-homogeneous-linear-transport-by-the-flow",
        "thm-increasing-functions-split-uniquely-as-jump-plus-continuous",
        "thm-inhomogeneous-linear-transport-formula",
        "thm-local-linear-transport-cauchy-problem",
        "thm-mini-vitali-fine-cover-characterisation-of-null-sets",
        "thm-morse-functions-are-dense-by-relative-jet-transversality",
        "thm-proper-inclusions-in-the-chomsky-hierarchy",
        "thm-property-star-and-leaf-reducibility-imply-generalized-niceness",
        "thm-riesz-rising-sun-lemma",
        "thm-right-derived-functors-form-a-cohomological-delta-functor",
        "thm-strong-enriched-yoneda-lemma-as-a-particular-end",
        "thm-three-sat-reduces-to-directed-hamiltonian-cycle",
        "thm-three-sat-reduces-to-three-colourability",
        "thm-two-adic-hilbert-symbol-formula"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-the-center-is-a-polynomial-algebra-of-rank-many-generators",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-elliptic-hyperbolic-and-parabolic-principal-symbols",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-enriched-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "def-enriched-weighted-limit",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "def-leaf-of-a-regular-foliation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-natural-and-dirichlet-density",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "def-property-star-for-a-finite-family",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "def-pullback-module-ringed-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-two-variable-second-order-discriminant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-clique-is-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hasse-minkowski-for-a-quaternary-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hyperbola-is-multiplicative-group-variety",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-jump-and-continuous-parts-of-x-plus-rational-jumps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-local-ring-affine-line-at-origin",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-modified-pcp-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-lemma-three-five-parameter-choice-on-a-large-graph",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-three-sat-reduces-to-three-colourability",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-two-universal-delta-functors-and-their-unique-isomorphism",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-bounded-variation-implies-absolute-continuity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-effaceability-means-every-positive-value-is-zero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-computation-history-domino-encoding",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-extend-a-degree-zero-transformation-through-one-dimension-shift",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-positive-log-dirichlet-series-nonvanishing",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-singular-chain-cross-product-boundary-formula",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-effacement-extension-commutes-with-connecting-morphisms",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-positive-left-derived-functors-are-effaceable-by-projectives",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-satellites-give-the-first-derived-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-quadratic-casimir-element-is-central",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-conical-limits-do-not-suffice-in-the-enriched-setting",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-enveloping-algebra-is-free-over-its-center",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-five-term-exact-sequence-as-extension-and-transgression-data",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-gibbs-overshoot-at-a-piecewise-c-one-jump",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hasse-minkowski-for-ternary-forms-over-q",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hasse-minkowski-over-the-rationals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-homogeneous-linear-transport-by-the-flow",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-increasing-functions-split-uniquely-as-jump-plus-continuous",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-inhomogeneous-linear-transport-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-local-linear-transport-cauchy-problem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-mini-vitali-fine-cover-characterisation-of-null-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-morse-functions-are-dense-by-relative-jet-transversality",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-proper-inclusions-in-the-chomsky-hierarchy",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-property-star-and-leaf-reducibility-imply-generalized-niceness",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-riesz-rising-sun-lemma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-right-derived-functors-form-a-cohomological-delta-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-strong-enriched-yoneda-lemma-as-a-particular-end",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-three-sat-reduces-to-directed-hamiltonian-cycle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-three-colourability",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-two-adic-hilbert-symbol-formula",
      "scope": "run",
      "owner": "f"
    }
  ],
  "assigned_items": [
    {
      "id": "def-pullback-module-ringed-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-hyperbola-is-multiplicative-group-variety",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-local-ring-affine-line-at-origin",
      "scope": "run",
      "owner": "b"
    }
  ],
  "live_tuples": [
    {
      "id": "def-pullback-module-ringed-spaces",
      "model": "gpt-5.6-terra",
      "context_sha256": "b708bc62ecdbfae156056f3946a6e44dac4eea055294e1ce336446db8c666647",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-hyperbola-is-multiplicative-group-variety",
      "model": "gpt-5.6-terra",
      "context_sha256": "1f1602933e54e7efd6fb73c5e615f481aaebf22c91d0befb7ad0f09b2a332628",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-local-ring-affine-line-at-origin",
      "model": "gpt-5.6-terra",
      "context_sha256": "c3ce1ef0238b175e60d2b117cd667c8b255ac0b152a54b8f902364c921ca290e",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **b**, run `frontier-30`

You are the group Alpha for batches **2**, **12**, **13**: 3 A/B pair(s), 6 page(s), 103 item(s), 3 open rejection(s) over 3 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-30-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `zariski-topology-on-prime-spectra` | A | commutative-algebra | 256.001 | `henselian-rings-and-equicharacteristic-cohen-structure-examples`, `topological-spaces-and-continuity`, `compactness` |
| 2 | `zariski-topology-on-prime-spectra-examples` | B | commutative-algebra | 256.002 | `zariski-topology-on-prime-spectra` |
| 12 | `morphisms-local-rings-and-rational-maps-of-affine-varieties` | A | algebraic-geometry | 366.043 | `affine-algebraic-sets-and-coordinate-rings-examples` |
| 12 | `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` | B | algebraic-geometry | 366.044 | `morphisms-local-rings-and-rational-maps-of-affine-varieties` |
| 13 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback` | A | scheme-theory | 366.059 | `presheaves-sheaves-stalks-and-sheafification-examples` |
| 13 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples` | B | scheme-theory | 366.06 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `zariski-topology-on-prime-spectra` — Zariski Topology on Prime Spectra (28 item(s))

- `def-irreducible-topological-space-and-subset` · definition — Irreducible topological spaces and irreducible subsets in the subspace topology
- `def-noetherian-topological-space` · definition — Noetherian topological spaces via ACC on opens or DCC on closed subsets
- `def-specialisation-and-generic-point` · definition — Specialisations, generalisations, and generic points
- `lem-zariski-closed-set-axioms` · lemma — The vanishing sets define the Zariski topology on the prime spectrum
- `lem-every-zariski-closed-set-has-a-radical-defining-ideal` · lemma — Every Zariski-closed subset has a unique radical defining ideal
- `lem-distinguished-opens-cover-every-open` · lemma — Every Zariski-open subset is a union of distinguished opens
- `lem-distinguished-open-refinement-at-a-point` · lemma — Every point of a Zariski-open set has a distinguished-open neighbourhood inside it
- `cor-spectrum-is-a-contravariant-topological-functor` · corollary — The prime-spectrum construction is a contravariant functor to topological spaces
- `lem-quotient-spectrum-map-is-closed` · lemma — The spectrum of a quotient is a closed subspace
- `lem-localisation-spectrum-map-homeomorphism-onto-image` · lemma — The spectrum of a localisation is the subspace of primes disjoint from the denominator set
- `cor-principal-localisation-spectrum-is-distinguished-open` · corollary — The spectrum of a principal localisation is the distinguished open D(f)
- `lem-spectrum-compactness-open-cover-to-unit-ideal` · lemma — A distinguished-open cover of the spectrum forces the covering ideal to be the unit ideal
- `lem-spectrum-compactness-unit-expression-finite-subcover` · lemma — A finite unit-ideal expression yields a finite distinguished-open subcover
- `thm-prime-spectrum-is-compact` · theorem — The prime spectrum is compact in the library's non-Hausdorff sense
- `cor-every-distinguished-open-is-compact` · corollary — Every distinguished open subset is compact
- `lem-closure-of-a-point-is-its-vanishing-set` · lemma — The closure of a prime is its vanishing set
- `cor-specialisation-order-is-prime-inclusion` · corollary — Specialisation in a prime spectrum is reverse inclusion
- `cor-spectrum-is-t-zero` · corollary — Distinct primes have distinct closures, so the spectrum is T0
- `cor-closed-points-of-spectrum-are-maximal-ideals` · corollary — The closed points of the prime spectrum are exactly the maximal ideals
- `thm-irreducible-closed-subsets-and-prime-ideals` · theorem — A Zariski-closed subset is irreducible exactly when its radical defining ideal is prime, and then it has a unique generic point
- `thm-irreducible-components-and-minimal-primes` · theorem — Irreducible components of the spectrum correspond to minimal prime ideals
- `thm-noetherian-ring-has-noetherian-spectrum` · theorem — The spectrum of a Noetherian ring is a Noetherian topological space
- `cor-noetherian-spectrum-has-finitely-many-irreducible-components` · corollary — A Noetherian ring has only finitely many irreducible components in its spectrum
- `lem-clopen-subset-gives-idempotent-decomposition` · lemma — A clopen decomposition of the spectrum comes from a nontrivial idempotent
- `lem-idempotent-gives-clopen-spectrum-partition` · lemma — An idempotent partitions the spectrum into complementary clopen subsets
- `cor-spectrum-connected-iff-no-nontrivial-idempotents` · corollary — The prime spectrum is connected exactly when the ring has no idempotents other than zero and one
- `lem-support-is-specialisation-closed` · lemma — The support of any module is closed under specialisation
- `cor-closed-points-dense-in-affine-spectra` · corollary — In a finite-type algebra over a field, closed points are dense in every closed subset of the spectrum

### `zariski-topology-on-prime-spectra-examples` — Zariski Topology on Prime Spectra — Examples (6 item(s))

- `ex-distinguished-open-finite-subcover-from-unit-expression` · example — A unit-ideal expression gives a finite distinguished-open cover
- `ex-zariski-spectrum-of-the-integers` · example — The spectrum of the integers has one generic point, closed points (p), and basic opens D(n)
- `ex-zariski-spectrum-not-hausdorff` · example — A generic point and a distinct specialization cannot be separated in the Zariski topology
- `ex-specialisation-poset-of-a-small-spectrum` · example — A local PID gives a two-point spectrum with one generic point and one closed point
- `ex-idempotent-clopen-product-ring` · example — Coordinate idempotents split the spectrum of a product ring into two clopen pieces
- `ex-nonclosed-support-without-finiteness` · example — An infinitely generated module can have specialization-closed support that is not Zariski closed

### `morphisms-local-rings-and-rational-maps-of-affine-varieties` — Morphisms Local Rings and Rational Maps of Affine Varieties (23 item(s))

- `def-regular-function-classical-variety` · definition — Regular functions on open subsets of a classical affine variety
- `lem-regular-functions-form-sheaf-classical` · lemma — Regular functions on a classical affine variety form a sheaf
- `thm-global-regular-functions-affine-variety-coordinate-ring` · theorem — Global regular functions on a classical affine variety are its coordinate ring
- `def-morphism-classical-varieties` · definition — Morphisms of classical affine varieties
- `def-regular-map-image-and-fibre-classical` · definition — Images and fibres of a regular map
- `thm-affine-morphisms-coordinate-ring-anti-equivalence` · theorem — Affine morphisms are contravariantly equivalent to coordinate-ring homomorphisms
- `cor-affine-algebraic-set-coordinate-duality-complete` · corollary — The affine algebraic-set dictionary is contravariantly full and faithful on classical affine varieties
- `lem-morphism-equality-on-dense-open` · lemma — Morphisms from an irreducible affine variety to an affine variety are determined by a dense open subset
- `def-germ-and-local-ring-classical-variety` · definition — Germs of regular functions and the local ring at a point of a classical affine variety
- `thm-local-ring-affine-variety-localization` · theorem — The local ring at a point of an affine variety is the localization at its maximal ideal
- `def-residue-field-classical-point` · definition — The residue field at a classical point
- `def-affine-open-subset-classical-variety` · definition — Affine open subsets of a classical affine variety
- `def-function-field-variety` · definition — The function field of an irreducible classical affine variety
- `thm-function-field-independent-affine-open` · theorem — All nonempty affine opens of an irreducible affine variety have the same function field
- `def-rational-function-regular-at-point` · definition — A rational function is regular at a point exactly when it lies in the local ring
- `def-rational-map-varieties` · definition — Rational maps between irreducible classical affine varieties
- `lem-rational-map-equivalence-transitive` · lemma — The rational-map equivalence relation is transitive
- `def-domain-of-definition-rational-map` · definition — The maximal domain of definition of a rational map to an affine variety
- `def-dominant-morphism-and-rational-map` · definition — Dominant morphisms and dominant rational maps
- `lem-dominant-map-pullback-function-fields` · lemma — Dominant maps pull back function fields functorially
- `thm-rational-maps-to-affine-variety-function-field` · theorem — Dominant rational maps to an affine variety correspond to injective homomorphisms of function fields
- `def-birational-equivalence-varieties` · definition — Birational maps and birational equivalence of classical affine varieties
- `thm-birational-equivalence-function-fields` · theorem — Irreducible affine varieties are birational exactly when their function fields are isomorphic

### `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` — Morphisms Local Rings and Rational Maps of Affine Varieties — Examples (7 item(s))

- `ex-polynomial-map-coordinate-pullback` · example — A polynomial map and its pullback on coordinate rings
- `ex-hyperbola-is-multiplicative-group-variety` · example — The hyperbola xy = 1 is isomorphic to the punctured affine line
- `ex-rational-parametrization-circle-conic` · example — When char(k) is not 2, the affine circle x^2 + y^2 = 1 is birational to the affine line
- `cex-rational-map-with-indeterminacy` · counterexample — The rational map (x,y) mapsto y / x on the affine plane is undefined along x = 0
- `cex-birational-does-not-imply-isomorphic` · counterexample — The affine line and its punctured principal open are birational but not isomorphic
- `ex-local-ring-affine-line-at-origin` · example — The local ring of the affine line at the origin consists of rational functions defined at the origin
- `cex-regular-bijection-not-isomorphism-cusp` · counterexample — The cusp parametrization t mapsto (t^2,t^3) is bijective but not an isomorphism

### `sheaf-operations-exactness-ringed-spaces-and-module-pullback` — Sheaf Operations Exactness Ringed Spaces and Module Pullback (30 item(s))

- `def-direct-image-sheaf` · definition — Direct image of a sheaf along a continuous map
- `lem-direct-image-is-sheaf` · lemma — Direct image preserves sheaves and objectwise algebraic structure
- `def-inverse-image-presheaf-and-sheaf` · definition — Inverse image presheaf and inverse image sheaf
- `thm-inverse-direct-image-adjunction` · theorem — Inverse image is left adjoint to direct image on sheaves
- `lem-stalk-inverse-image-sheaf` · lemma — The stalk of an inverse image sheaf is the stalk over the image point
- `def-restriction-sheaf-open-subspace` · definition — Restriction of a sheaf to an open subspace
- `def-extension-by-zero-abelian-sheaf` · definition — Extension by zero for abelian sheaves on an open subspace
- `def-skyscraper-sheaf-abelian-group` · definition — A skyscraper sheaf of abelian groups at a point
- `def-kernel-cokernel-image-sheaves` · definition — Kernel sheaves are objectwise, while cokernels and images are sheafified
- `thm-abelian-sheaves-form-abelian-category` · theorem — Sheaves of abelian groups, and likewise sheaves of modules on a ringed space, form abelian categories
- `def-exact-sequence-sheaves` · definition — Exact sequences of sheaves
- `thm-exactness-of-sheaves-stalkwise` · theorem — A sequence of abelian sheaves is exact exactly when it is exact on every stalk
- `lem-global-sections-left-exact` · lemma — Global sections are left exact but need not preserve epimorphisms
- `thm-extension-by-zero-adjunction-exactness` · theorem — Extension by zero is left adjoint to restriction and is exact on abelian sheaves
- `def-ringed-space` · definition — A ringed space
- `def-morphism-ringed-spaces` · definition — Morphisms of ringed spaces
- `def-locally-ringed-space` · definition — A locally ringed space
- `def-morphism-locally-ringed-spaces` · definition — Morphisms of locally ringed spaces
- `lem-local-homomorphism-residue-field-map` · lemma — A local morphism of stalks induces a residue-field map
- `def-module-on-ringed-space` · definition — Modules on a ringed space
- `def-sheaf-tensor-product` · definition — Tensor product of sheaves of modules
- `lem-stalk-tensor-product` · lemma — The stalk of a tensor product sheaf is the tensor product of the stalks
- `def-sheaf-hom` · definition — The internal Hom sheaf of two module sheaves
- `def-pullback-module-ringed-spaces` · definition — Pullback of a module along a morphism of ringed spaces
- `thm-pullback-pushforward-module-adjunction` · theorem — Pullback of modules is left adjoint to pushforward
- `lem-pullback-modules-right-exact` · lemma — Pullback of modules is right exact, and flat stalk maps make it exact
- `def-gluing-datum-sheaves` · definition — A gluing datum for sheaves on an open cover
- `thm-gluing-sheaves` · theorem — Compatible local sheaves glue uniquely up to unique isomorphism
- `thm-gluing-ringed-and-locally-ringed-spaces` · theorem — Compatible open pieces of ringed or locally ringed spaces glue
- `rem-inverse-image-versus-pullback` · remark — Inverse image of sheaves and pullback of modules are not the same construction

### `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples` — Sheaf Operations Exactness Ringed Spaces and Module Pullback — Examples (9 item(s))

- `ex-direct-image-open-immersion` · example — Direct image along an open immersion is restriction-compatible intersection
- `cex-extension-by-zero-differs-direct-image` · counterexample — Extension by zero can be strictly smaller than direct image on a punctured interval
- `ex-skyscraper-sheaf-exact-sequence` · example — A short exact sequence of abelian groups gives a short exact sequence of skyscraper sheaves
- `cex-global-sections-not-right-exact` · counterexample — Global sections need not preserve surjections
- `ex-ringed-space-continuous-functions` · example — Continuous real-valued functions make a space into a locally ringed space
- `cex-ringed-space-map-not-locally-ringed` · counterexample — A morphism of ringed spaces need not be a morphism of locally ringed spaces
- `ex-pullback-free-module` · example — Pullback carries a free module to the corresponding free module
- `ex-glue-line-bundle-transition-functions` · example — Units satisfying the cocycle law glue local rank-one free modules into a line bundle
- `cex-presheaf-cokernel-needs-sheafification` · counterexample — The objectwise cokernel presheaf can fail to be a sheaf

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
| `def-pullback-module-ringed-spaces` | `sheaf-operations-exactness-ringed-spaces-and-module-pullback` | gpt-5.6-terra | `b708bc62ecdbfae156056f3946a6e44dac4eea055294e1ce336446db8c666647` |
| `ex-hyperbola-is-multiplicative-group-variety` | `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` | gpt-5.6-terra | `1f1602933e54e7efd6fb73c5e615f481aaebf22c91d0befb7ad0f09b2a332628` |
| `ex-local-ring-affine-line-at-origin` | `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` | gpt-5.6-terra | `c3ce1ef0238b175e60d2b117cd667c8b255ac0b152a54b8f902364c921ca290e` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-30`

Read `research/frontier-30-judge-closure.json`,
`research/frontier-30-judge.jsonl`,
`research/frontier-30-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-30-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-30-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-30-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
