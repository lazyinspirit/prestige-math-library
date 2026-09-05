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
label: adjudicate-rejudge-d-round-1

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
  "group": "d",
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
      "id": "def-elliptic-hyperbolic-and-parabolic-principal-symbols",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-leaf-of-a-regular-foliation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-two-variable-second-order-discriminant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-homogeneous-linear-transport-by-the-flow",
      "scope": "run",
      "owner": "d"
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
    }
  ],
  "live_tuples": [
    {
      "id": "def-elliptic-hyperbolic-and-parabolic-principal-symbols",
      "model": "gpt-5.6-terra",
      "context_sha256": "18eade62185cadf52e5a6b34bdcbc77f988ed4d9e96b527782fc21aff3822ef3",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-leaf-of-a-regular-foliation",
      "model": "gpt-5.6-terra",
      "context_sha256": "5a65816b0f45fd805900fa45c0036fab46f43bb2361e28ce03fe27a2fdbe56b7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-two-variable-second-order-discriminant",
      "model": "gpt-5.6-terra",
      "context_sha256": "888aa3185404c014495adbcc656ae8d9d25682cae0bc4461630ba7445d73e159",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold",
      "model": "gpt-5.6-terra",
      "context_sha256": "8e80240b02830ab4d2263c9e3e95a399425b65a3922c8c9fc3cb76ae0d27a0f2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution",
      "model": "gpt-5.6-terra",
      "context_sha256": "ac9bf996968564dbd752aff7a7708c4f05d3275ce0f360dc12073939790d81ad",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds",
      "model": "gpt-5.6-terra",
      "context_sha256": "7c7bd7c78718b51fef37eeb165372500768f489f90457a382b419fc49fc8b98f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-homogeneous-linear-transport-by-the-flow",
      "model": "gpt-5.6-terra",
      "context_sha256": "1f3aacc579c82cbbaf07ebe04139fb20a9bde24a2b83ada2ccabf5bd6b2c7e4d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-inhomogeneous-linear-transport-formula",
      "model": "gpt-5.6-terra",
      "context_sha256": "acac1649e347108e445e2194191f15b7c5e70146566bdd11af9371162d0138f4",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-local-linear-transport-cauchy-problem",
      "model": "gpt-5.6-terra",
      "context_sha256": "6f481df71f6a843545ec019d4ba451babf1e747a5f760ecb4e7fa72a0c5e71dd",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **d**, run `frontier-30`

You are the group Alpha for batches **4**, **7**, **15**: 3 A/B pair(s), 6 page(s), 96 item(s), 9 open rejection(s) over 9 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 4 | `the-analytic-hahn-banach-theorem` | A | functional-analysis | 288.053 | `finite-dimensional-normed-spaces-and-riesz-lemma-examples` |
| 4 | `the-analytic-hahn-banach-theorem-examples` | B | functional-analysis | 288.054 | `the-analytic-hahn-banach-theorem`, `the-duality-of-lp-and-lq` |
| 7 | `partial-differential-equations-and-characteristics` | A | pde | 288.141 | `itos-formula-and-brownian-martingales-examples`, `picard-lindelof-and-first-order-odes`, `the-spectral-theorem-and-singular-value-decomposition` |
| 7 | `partial-differential-equations-and-characteristics-examples` | B | pde | 288.142 | `partial-differential-equations-and-characteristics` |
| 15 | `distributions-integral-manifolds-and-the-frobenius-theorem` | A | differential-geometry | 461 | `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives` |
| 15 | `distributions-integral-manifolds-and-the-frobenius-theorem-examples` | B | differential-geometry | 462 | `the-seifert-van-kampen-theorem`, `distributions-integral-manifolds-and-the-frobenius-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-analytic-hahn-banach-theorem` — The Analytic Hahn Banach Theorem (13 item(s))

- `def-sublinear-functional` · definition — A sublinear functional on a real vector space
- `lem-hahn-banach-one-step-extension` · lemma — The admissible values in a one-step Hahn-Banach extension form a nonempty interval
- `lem-union-of-a-chain-of-dominated-extensions` · lemma — The union of a chain of dominated extensions is a well-defined dominated linear functional
- `thm-hahn-banach-dominated-extension` · theorem — Hahn-Banach dominated extension theorem for real vector spaces
- `def-dual-space-of-a-normed-space` · definition — The dual space X^* of a normed space and its dual norm
- `thm-hahn-banach-norm-preserving-extension` · theorem — A bounded real linear functional on a subspace of a real normed space extends with the same norm
- `lem-real-part-determines-a-complex-linear-functional` · lemma — A complex linear functional is recovered from its real part by f(x)=u(x)-iu(ix)
- `thm-complex-hahn-banach-norm-preserving-extension` · theorem — A bounded complex linear functional on a subspace of a complex normed space extends with the same norm
- `thm-dual-norms-every-vector` · theorem — Every nonzero vector has a norming functional
- `cor-dual-separates-points` · corollary — The dual space separates points of a normed space
- `cor-norm-recovered-from-the-dual-unit-ball` · corollary — The norm of a vector is the supremum of |f(x)| over the dual unit ball
- `thm-norm-preserving-extension-from-any-subspace` · theorem — A bounded linear functional on an arbitrary subspace extends with the same norm, without assuming the subspace is closed
- `rem-choice-strength-of-hahn-banach` · remark — The set-theoretic cost of Hahn-Banach

### `the-analytic-hahn-banach-theorem-examples` — The Analytic Hahn Banach Theorem - Examples (6 item(s))

- `ex-norming-functionals-in-lp-from-the-measure-duality-page` · example — The abstract norming-functional theorem agrees with the concrete L^p-L^q formula
- `ex-many-extensions-from-a-codimension-one-subspace` · example — A codimension-one subspace can admit many norm-preserving Hahn-Banach extensions
- `ex-banach-limit-from-hahn-banach` · example — A Banach limit obtained from Hahn-Banach
- `lem-banach-limit-properties` · lemma — A Banach limit is positive, has norm one, is shift invariant, and lies between liminf and limsup
- `cex-hahn-banach-extension-need-not-be-unique` · counterexample — Hahn-Banach norm-preserving extensions need not be unique
- `rem-hahn-banach-open-choice-questions` · remark — Two choice-theoretic consequences of Hahn-Banach remain open

### `partial-differential-equations-and-characteristics` — Partial Differential Equations and Characteristics (21 item(s))

- `def-partial-differential-operator-order-and-solution` · definition — Scalar partial differential operators, order, and classical solutions
- `def-linear-semilinear-quasilinear-and-fully-nonlinear-pde` · definition — Linear, semilinear, quasilinear, and fully nonlinear partial differential equations
- `def-principal-part-and-principal-symbol-of-a-scalar-pde` · definition — Principal part and principal symbol of a scalar PDE
- `lem-principal-symbol-under-a-c-one-coordinate-change` · lemma — The principal symbol depends only on the first derivative of a smooth coordinate change
- `def-characteristic-covector-hypersurface-and-noncharacteristic-data` · definition — Characteristic covectors, hypersurfaces, and noncharacteristic data
- `lem-characteristic-hypersurface-is-independent-of-defining-function` · lemma — Characteristic hypersurfaces are independent of the defining function
- `def-elliptic-hyperbolic-and-parabolic-principal-symbols` · definition — Elliptic, hyperbolic, and parabolic principal symbols
- `thm-symmetric-principal-part-has-a-signature-normal-form` · theorem — A symmetric second-order principal part has a coordinate-invariant signature normal form
- `def-two-variable-second-order-discriminant` · definition — The discriminant for a second-order equation in two variables
- `thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant` · theorem — In two variables, type and characteristic directions are coordinate invariant
- `thm-two-variable-constant-coefficient-canonical-principal-forms` · theorem — Constant-coefficient second-order equations in two variables have canonical principal forms
- `rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy` · remark — Limits of the elliptic-parabolic-hyperbolic trichotomy
- `def-linear-transport-equation-and-its-characteristic-flow` · definition — Linear transport equations and their characteristic flow
- `lem-transport-equation-along-a-characteristic` · lemma — A transport equation restricts to a linear ODE along each characteristic
- `lem-transport-characteristics-depend-c-one-on-initial-position` · lemma — Transport characteristics depend C^1 on the initial position
- `thm-homogeneous-linear-transport-by-the-flow` · theorem — Homogeneous linear transport is solved by the inverse characteristic flow
- `thm-inhomogeneous-linear-transport-formula` · theorem — The inhomogeneous linear transport equation has the characteristic integrating-factor formula
- `def-noncharacteristic-first-order-cauchy-surface` · definition — Noncharacteristic Cauchy surfaces for first-order transport
- `thm-local-linear-transport-cauchy-problem` · theorem — Local linear transport has a unique solution from noncharacteristic Cauchy data
- `cor-support-propagates-along-transport-characteristics` · corollary — Support propagates along transport characteristics
- `rem-characteristics-are-covectors-before-they-are-curves` · remark — Characteristics are covectors before they are curves

### `partial-differential-equations-and-characteristics-examples` — Partial Differential Equations and Characteristics — Examples (8 item(s))

- `ex-constant-velocity-transport` · example — Constant-velocity transport translates the initial profile
- `ex-transport-with-growth-and-source` · example — Transport with growth and source along straight characteristics
- `ex-radial-transport-flow` · example — The stationary equation x dot Du = u is solved by radial characteristics
- `cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible` · counterexample — Characteristic Cauchy data may be nonunique or incompatible
- `ex-classification-of-laplace-heat-and-wave-equations` · example — Laplace, heat, and wave equations have elliptic, parabolic, and hyperbolic principal symbols
- `ex-canonical-coordinates-for-a-hyperbolic-equation` · example — A constant-coefficient hyperbolic equation is diagonalized by characteristic coordinates
- `ex-tricomi-equation-changes-type` · example — The Tricomi equation changes type across y = 0
- `cex-threefold-classification-is-not-global` · counterexample — The elliptic-parabolic-hyperbolic trichotomy is not a global taxonomy

### `distributions-integral-manifolds-and-the-frobenius-theorem` — Distributions Integral Manifolds and the Frobenius Theorem (38 item(s))

- `def-smooth-distribution-on-a-manifold` · definition — Smooth distributions on a manifold
- `prop-local-frame-characterization-of-a-smooth-distribution` · proposition — A smooth distribution is exactly a locally framed constant-rank family of tangent spaces
- `def-vector-field-tangent-to-a-distribution` · definition — Vector fields tangent to a distribution
- `prop-sections-of-a-distribution-form-a-locally-free-module` · proposition — Sections of a distribution form a locally free module
- `def-annihilator-bundle-of-a-distribution` · definition — The annihilator bundle of a distribution
- `prop-double-annihilator-recovers-a-finite-rank-distribution` · proposition — The double annihilator recovers a finite-rank distribution
- `def-integral-manifold-of-a-distribution` · definition — Integral manifolds of a distribution
- `def-integrable-distribution` · definition — Integrable distributions
- `prop-integral-manifolds-have-the-distribution-dimension` · proposition — Integral manifolds have the distribution dimension
- `prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds` · proposition — Local diffeomorphisms carry distributions and integral manifolds
- `def-involutive-distribution` · definition — Involutive distributions
- `prop-involutivity-can-be-checked-on-a-local-frame` · proposition — Involutivity can be checked on a local frame
- `prop-integrable-distributions-are-involutive` · proposition — Integrable distributions are involutive
- `lem-involutive-frame-reduction` · lemma — An involutive local frame can be reduced to one field plus commuting transverse fields
- `lem-commuting-independent-vector-fields-give-a-coordinate-system` · lemma — Commuting independent vector fields give a coordinate system
- `thm-frobenius-local-coordinate-theorem` · theorem — Frobenius local coordinate theorem
- `cor-frobenius-local-first-integrals` · corollary — Frobenius gives local first integrals
- `cor-kernel-of-a-constant-rank-submersion-is-integrable` · corollary — The kernel distribution of a constant-rank submersion is integrable
- `prop-level-set-distributions-are-involutive` · proposition — Level-set distributions are involutive
- `def-flat-chart-for-a-distribution` · definition — Flat charts for a distribution
- `def-plaque-of-a-flat-chart` · definition — Plaques of a flat chart
- `lem-integral-manifolds-are-locally-contained-in-plaques` · lemma — Integral manifolds are locally contained in plaques
- `lem-overlapping-plaques-through-a-point-have-compatible-germs` · lemma — Overlapping plaques through a point have compatible germs
- `def-leaf-equivalence-relation-of-an-integrable-distribution` · definition — The leaf equivalence relation of an integrable distribution
- `lem-tangent-curve-reachability-is-an-equivalence-relation` · lemma — Reachability by piecewise smooth tangent curves is an equivalence relation
- `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds` · theorem — Existence and uniqueness of maximal connected integral manifolds
- `cor-maximal-integral-manifolds-partition-the-manifold` · corollary — Maximal integral manifolds partition the manifold
- `def-regular-foliation-atlas` · definition — Regular foliation atlases
- `def-leaf-of-a-regular-foliation` · definition — Leaves of a regular foliation
- `thm-regular-foliations-and-integrable-distributions-correspond` · theorem — Regular foliations and integrable distributions correspond
- `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution` · proposition — Every leaf is initial among smooth maps tangent to the distribution
- `prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded` · proposition — Embedded leaves need not be closed, and leaves need not be embedded
- `fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution` · false-statement — Every constant-dimensional family of tangent subspaces is a smooth distribution
- `fs-every-smooth-distribution-is-integrable` · false-statement — Every smooth distribution is integrable
- `fs-involutivity-can-be-tested-on-the-pointwise-bracket-of-tangent-vectors` · false-statement — Involutivity can be tested on the pointwise bracket of tangent vectors
- `fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold` · false-statement — Every leaf of a regular foliation is an embedded submanifold
- `fs-the-subspace-topology-on-a-leaf-is-always-its-manifold-topology` · false-statement — The subspace topology on a leaf is always its manifold topology
- `fs-frobenius-applies-to-any-variable-rank-family-of-subspaces` · false-statement — Frobenius applies to any variable-rank family of tangent subspaces

### `distributions-integral-manifolds-and-the-frobenius-theorem-examples` — Distributions Integral Manifolds and the Frobenius Theorem — Examples (10 item(s))

- `ex-coordinate-plane-distribution-and-its-affine-leaves` · example — The coordinate-plane distribution and its affine leaves
- `ex-kernel-of-a-submersion-as-an-integrable-distribution` · example — The kernel of a submersion as an integrable distribution
- `ex-level-set-foliation-of-a-regular-function` · example — The level-set foliation of a regular function
- `ex-product-foliation` · example — A product foliation
- `ex-orbit-circles-of-rotation-as-a-foliation-away-from-the-origin` · example — Orbit circles of rotation form a foliation away from the origin
- `ex-irrational-linear-foliation-of-the-two-torus` · example — An irrational linear foliation of the two-torus
- `ex-the-mobius-band-line-foliation` · example — A line foliation on the Mobius band
- `cex-the-standard-contact-plane-field-is-not-integrable` · counterexample — The standard contact plane field is not integrable
- `cex-a-variable-rank-involutive-family-outside-regular-frobenius` · counterexample — A variable-rank involutive family lies outside regular Frobenius
- `ex-leaves-of-a-lie-subalgebra-distribution` · example — Leaves of a Lie-subalgebra distribution

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
| `def-elliptic-hyperbolic-and-parabolic-principal-symbols` | `partial-differential-equations-and-characteristics` | gpt-5.6-terra | `18eade62185cadf52e5a6b34bdcbc77f988ed4d9e96b527782fc21aff3822ef3` |
| `def-leaf-of-a-regular-foliation` | `distributions-integral-manifolds-and-the-frobenius-theorem` | gpt-5.6-terra | `5a65816b0f45fd805900fa45c0036fab46f43bb2361e28ce03fe27a2fdbe56b7` |
| `def-two-variable-second-order-discriminant` | `partial-differential-equations-and-characteristics` | gpt-5.6-terra | `888aa3185404c014495adbcc656ae8d9d25682cae0bc4461630ba7445d73e159` |
| `fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold` | `distributions-integral-manifolds-and-the-frobenius-theorem` | gpt-5.6-terra | `8e80240b02830ab4d2263c9e3e95a399425b65a3922c8c9fc3cb76ae0d27a0f2` |
| `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution` | `distributions-integral-manifolds-and-the-frobenius-theorem` | gpt-5.6-terra | `ac9bf996968564dbd752aff7a7708c4f05d3275ce0f360dc12073939790d81ad` |
| `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds` | `distributions-integral-manifolds-and-the-frobenius-theorem` | gpt-5.6-terra | `7c7bd7c78718b51fef37eeb165372500768f489f90457a382b419fc49fc8b98f` |
| `thm-homogeneous-linear-transport-by-the-flow` | `partial-differential-equations-and-characteristics` | gpt-5.6-terra | `1f3aacc579c82cbbaf07ebe04139fb20a9bde24a2b83ada2ccabf5bd6b2c7e4d` |
| `thm-inhomogeneous-linear-transport-formula` | `partial-differential-equations-and-characteristics` | gpt-5.6-terra | `acac1649e347108e445e2194191f15b7c5e70146566bdd11af9371162d0138f4` |
| `thm-local-linear-transport-cauchy-problem` | `partial-differential-equations-and-characteristics` | gpt-5.6-terra | `6f481df71f6a843545ec019d4ba451babf1e747a5f760ecb4e7fa72a0c5e71dd` |

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
