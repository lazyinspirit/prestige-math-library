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
  "group": "a",
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
      "id": "cor-the-center-is-a-polynomial-algebra-of-rank-many-generators",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-quadratic-casimir-element-is-central",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-enveloping-algebra-is-free-over-its-center",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-five-term-exact-sequence-as-extension-and-transgression-data",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": [
    {
      "id": "cor-the-center-is-a-polynomial-algebra-of-rank-many-generators",
      "model": "gpt-5.6-terra",
      "context_sha256": "1a23205b12f5a61707706e0b1e5767f7d1dbbe705d334856533c853462b602ea",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-the-quadratic-casimir-element-is-central",
      "model": "gpt-5.6-terra",
      "context_sha256": "c7190808f5a172e9346cc1e0755581906b7d708cb0837d17861b62167210d601",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-enveloping-algebra-is-free-over-its-center",
      "model": "gpt-5.6-terra",
      "context_sha256": "0264e33f0f5050b06e55f4b40fe3db5889514fc310ec27155bc4e60d550b2911",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-five-term-exact-sequence-as-extension-and-transgression-data",
      "model": "gpt-5.6-terra",
      "context_sha256": "ffa6db96443f99ddcfad4780e87fe9d4e145cc95304266a9e890719e9bb3c218",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **a**, run `frontier-30`

You are the group Alpha for batches **1**, **16**, **17**: 4 A/B pair(s), 8 page(s), 129 item(s), 4 open rejection(s) over 4 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `brauer-characters-and-decomposition-matrices` | A | group-theory | 150.003 | `modular-representations-and-projective-covers-examples` |
| 1 | `brauer-characters-and-decomposition-matrices-examples` | B | group-theory | 150.004 | `brauer-characters-and-decomposition-matrices` |
| 1 | `second-cohomology-and-abelian-kernel-extensions` | A | group-theory | 365.073 | `crossed-homomorphisms-complements-and-first-cohomology-examples` |
| 1 | `second-cohomology-and-abelian-kernel-extensions-examples` | B | group-theory | 365.074 | `second-cohomology-and-abelian-kernel-extensions` |
| 16 | `harish-chandra-isomorphism-casimir-and-central-characters` | A | lie-theory | 510.001 | `real-forms-and-real-semisimple-lie-algebras-examples` |
| 16 | `harish-chandra-isomorphism-casimir-and-central-characters-examples` | B | lie-theory | 510.002 | `harish-chandra-isomorphism-casimir-and-central-characters` |
| 17 | `artin-induction-and-rational-characters` | A | representation-theory | 510.031 | `the-weyl-kac-character-formula-examples`, `the-group-algebra-and-representations`, `maschkes-theorem-and-complete-reducibility`, `characters-and-the-orthogonality-relations`, `induced-representations-and-frobenius-reciprocity` |
| 17 | `artin-induction-and-rational-characters-examples` | B | representation-theory | 510.032 | `artin-induction-and-rational-characters` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `brauer-characters-and-decomposition-matrices` — Brauer Characters and Decomposition Matrices (27 item(s))

- `def-p-regular-and-p-singular-elements` · definition — p-regular and p-singular elements
- `lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers` · lemma — p-regularity is preserved by conjugacy and by powers coprime to the element order
- `def-teichmuller-lift-in-a-splitting-p-modular-system` · definition — Teichmuller lift in a splitting p-modular system
- `lem-teichmuller-lift-is-multiplicative-and-unique` · lemma — The Teichmuller lift is multiplicative and unique
- `def-brauer-character-of-a-finite-dimensional-kg-module` · definition — Brauer character of a finite-dimensional kG-module
- `lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation` · lemma — The Brauer character is independent of basis and splitting-field realization
- `prop-brauer-characters-are-class-functions-on-p-regular-elements` · proposition — Brauer characters are class functions on p-regular elements
- `thm-brauer-character-is-additive-on-short-exact-sequences` · theorem — Brauer characters are additive on short exact sequences
- `thm-brauer-nesbitt-module-determination` · theorem — Brauer-Nesbitt determines semisimplifications
- `thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions` · theorem — Irreducible Brauer characters form a basis of the p-regular class functions
- `cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes` · corollary — The number of simple kG-modules equals the number of p-regular conjugacy classes
- `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups` · definition — Decomposition map from ordinary to modular Grothendieck groups
- `thm-decomposition-map-is-independent-of-the-stable-lattice` · theorem — The decomposition map is independent of the stable lattice
- `def-decomposition-numbers-and-decomposition-matrix` · definition — Decomposition numbers and the decomposition matrix
- `lem-decomposition-numbers-are-nonnegative-integers` · lemma — Decomposition numbers are nonnegative integers
- `def-projective-indecomposable-characters-and-cartan-invariants` · definition — Projective indecomposable characters and Cartan invariants
- `thm-brauer-reciprocity` · theorem — Brauer reciprocity
- `thm-cartan-matrix-is-d-transpose-d` · theorem — The Cartan matrix is D^T D
- `def-p-blocks-by-primitive-central-idempotents` · definition — p-blocks from primitive central idempotents
- `thm-blocks-partition-ordinary-and-brauer-irreducible-characters` · theorem — Blocks partition the ordinary and Brauer irreducible characters
- `prop-decomposition-matrix-is-block-diagonal-after-block-ordering` · proposition — After block ordering, the decomposition matrix is block diagonal
- `rem-defect-groups-and-brauer-main-theorems` · remark — Defect groups and Brauer's main theorems lie beyond this page
- `fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace` · false-statement — FALSE: a Brauer character is defined on all elements by the usual trace
- `fs-modular-representations-are-determined-by-ordinary-characters` · false-statement — FALSE: modular representations are determined by ordinary characters
- `fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible` · false-statement — FALSE: reduction mod p of an ordinary irreducible is always irreducible
- `fs-the-cartan-matrix-equals-the-decomposition-matrix` · false-statement — FALSE: the Cartan matrix equals the decomposition matrix
- `fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character` · false-statement — FALSE: every block has one ordinary and one Brauer irreducible character

### `brauer-characters-and-decomposition-matrices-examples` — Brauer Characters and Decomposition Matrices — Examples (6 item(s))

- `ex-brauer-characters-of-a-p-group` · example — Brauer characters of a p-group
- `ex-p-regular-classes-of-s-three` · example — The p-regular classes of S_3
- `ex-decomposition-matrix-of-s-three-in-characteristic-two` · example — The decomposition matrix of S_3 in characteristic 2
- `ex-cartan-matrix-from-d-transpose-d` · example — Computing a Cartan matrix from D^T D
- `ex-a-block-with-one-ordinary-and-one-brauer-character` · example — A block with one ordinary and one Brauer irreducible character
- `cex-ordinary-trace-on-a-p-singular-unipotent-element` · counterexample — An ordinary trace on a p-singular unipotent element is not a Brauer-character value

### `second-cohomology-and-abelian-kernel-extensions` — Second Cohomology and Abelian Kernel Extensions (25 item(s))

- `def-normalized-two-cocycle-and-two-coboundary` · definition — Normalized two-cocycles and two-coboundaries
- `lem-normalized-two-cocycles-and-coboundaries-form-groups` · lemma — Normalized two-cocycles and two-coboundaries form groups
- `def-second-cohomology-by-factor-sets` · definition — Second cohomology by factor sets
- `thm-factor-set-model-agrees-with-derived-second-group-cohomology` · theorem — The factor-set model agrees with the inhomogeneous cochain model in degree two
- `def-extension-inducing-a-prescribed-abelian-kernel-action` · definition — Extensions inducing a prescribed abelian-kernel action
- `def-normalized-set-theoretic-section-and-factor-set` · definition — Normalized set-theoretic section and factor set
- `lem-factor-set-of-a-section-is-a-normalized-two-cocycle` · lemma — The factor set of a section is a normalized two-cocycle
- `lem-changing-the-section-changes-the-factor-set-by-a-coboundary` · lemma — Changing the section changes the factor set by a coboundary
- `cor-an-extension-determines-a-well-defined-h-two-class` · corollary — An extension determines a well-defined H^2 class
- `def-twisted-product-extension-from-a-two-cocycle` · definition — Twisted-product extension from a two-cocycle
- `lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle` · lemma — The twisted product is a group exactly when the factor set is a two-cocycle
- `lem-cohomologous-two-cocycles-give-equivalent-extensions` · lemma — Cohomologous two-cocycles give equivalent extensions
- `thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action` · theorem — H^2 classifies extensions with fixed abelian kernel action
- `cor-zero-h-two-class-is-equivalent-to-splitting` · corollary — The zero H^2 class is equivalent to a split extension
- `def-baer-sum-of-abelian-kernel-extensions` · definition — Baer sum of abelian-kernel extensions
- `lem-baer-sum-is-independent-of-extension-representatives` · lemma — Baer sum is independent of extension representatives
- `thm-baer-sum-agrees-with-addition-in-h-two` · theorem — Baer sum agrees with addition in H^2
- `cor-central-extensions-are-classified-by-h-two-with-trivial-action` · corollary — Central extensions are classified by H^2 with trivial action
- `thm-five-term-exact-sequence-as-extension-and-transgression-data` · theorem — Extension-theoretic interpretation of the standard five-term exact sequence
- `rem-nonabelian-extension-obstruction-in-h-three` · remark — Nonabelian extension obstructions live in H^3
- `fs-every-function-g-times-g-to-m-is-a-factor-set` · false-statement — FALSE: every function G x G -> M is a factor set
- `fs-the-factor-set-is-independent-of-the-section-as-a-function` · false-statement — FALSE: the factor set is independent of the chosen section as a function
- `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel` · false-statement — FALSE: H^2 classifies extensions with arbitrary nonabelian kernel
- `fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic` · false-statement — FALSE: equivalent extensions only require the middle groups to be isomorphic
- `fs-the-zero-h-two-class-corresponds-to-the-direct-product-only` · false-statement — FALSE: the zero H^2 class corresponds to the direct product only

### `second-cohomology-and-abelian-kernel-extensions-examples` — Second Cohomology and Abelian Kernel Extensions — Examples (7 item(s))

- `ex-the-cp-squared-extension-as-a-nonzero-two-cocycle` · example — The C_p^2 extension as a nonzero two-cocycle
- `ex-the-split-extension-as-the-zero-cocycle` · example — The split extension arises from the zero cocycle
- `ex-central-extensions-of-a-cyclic-group` · example — Central extensions of a cyclic group
- `ex-the-quaternion-and-dihedral-central-extension-classes` · example — Quaternion and dihedral central extension classes
- `ex-changing-a-section-by-a-one-cochain` · example — Changing a section by a one-cochain
- `ex-baer-sum-of-two-factor-sets` · example — Baer sum of two factor sets
- `cex-same-middle-group-with-inequivalent-extension-maps` · counterexample — The same middle group can support inequivalent extension structures

### `harish-chandra-isomorphism-casimir-and-central-characters` — Harish Chandra Isomorphism Casimir and Central Characters (45 item(s))

- `def-universal-enveloping-algebra-as-a-tensor-quotient` · definition — The universal enveloping algebra as a tensor quotient
- `prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra` · proposition — Lie algebra actions extend to unital actions of the enveloping algebra
- `def-killing-form-of-a-semisimple-lie-algebra` · definition — The Killing form of a semisimple Lie algebra
- `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra` · proposition — The Killing form is invariant and nondegenerate on a complex semisimple Lie algebra
- `def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra` · definition — The PBW filtration by tensor degree on the enveloping algebra
- `prop-associated-graded-of-the-pbw-filtration-is-commutative` · proposition — The associated graded algebra of the PBW filtration is commutative
- `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra` · theorem — PBW gives an ordered monomial basis for the enveloping algebra
- `thm-root-space-decomposition-relative-to-a-cartan-subalgebra` · theorem — Root-space decomposition relative to a Cartan subalgebra
- `prop-root-space-brackets-add-their-roots` · proposition — Brackets of root spaces add their roots
- `prop-killing-form-pairs-only-opposite-root-spaces` · proposition — The Killing form pairs only opposite root spaces
- `def-killing-dual-vector-attached-to-a-root` · definition — The Killing-dual vector attached to a root
- `prop-opposite-root-spaces-bracket-to-the-killing-dual-line` · proposition — Opposite root spaces bracket to the Killing-dual line
- `thm-triangular-decomposition-from-a-chosen-positive-root-system` · theorem — Triangular decomposition from a chosen positive root system
- `def-highest-weight-vector-and-cyclic-highest-weight-module` · definition — Highest-weight vectors and cyclic highest-weight modules
- `def-weyl-vector-rho-for-a-chosen-positive-system` · definition — The Weyl vector rho for a chosen positive system
- `def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra` · definition — Regular elements and rank for a complex semisimple Lie algebra
- `def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra` · definition — The regular root-hyperplane arrangement in a Cartan subalgebra
- `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots` · proposition — The centralizer of a Cartan element from its vanishing roots
- `lem-regular-elements-form-a-connected-dense-open-subset` · lemma — Regular elements form a connected dense open subset
- `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra` · theorem — Cartan subalgebras are conjugate in a complex semisimple Lie algebra
- `thm-the-root-set-is-a-reduced-crystallographic-root-system` · theorem — The root set is a reduced crystallographic root system
- `def-root-reflections-and-the-weyl-group-action` · definition — Root reflections and the Weyl group action
- `def-fundamental-weights-for-a-chosen-simple-root-system` · definition — Fundamental weights for a chosen simple root system
- `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights` · theorem — Finite-dimensional simple modules are classified by dominant highest weights
- `def-central-character-of-a-lie-algebra-module` · definition — Central character of a Lie algebra module
- `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar` · lemma — Central elements act by scalars on cyclic highest-weight modules
- `def-quadratic-casimir-element` · definition — The quadratic Casimir element
- `lem-the-casimir-element-is-independent-of-dual-bases` · lemma — The quadratic Casimir element is independent of the choice of dual bases
- `prop-the-quadratic-casimir-element-is-central` · proposition — The quadratic Casimir element is central
- `prop-casimir-eigenvalue-on-a-highest-weight-module` · proposition — The quadratic Casimir eigenvalue on a highest-weight module is $(\lambda,\lambda+2\rho)$
- `def-harish-chandra-projection` · definition — The Harish-Chandra projection
- `lem-central-elements-have-weight-zero` · lemma — Central elements lie in the zero-weight subspace of $U(\mathfrak g)$
- `prop-harish-chandra-projection-is-multiplicative-on-the-center` · proposition — The Harish-Chandra projection is multiplicative on the center
- `lem-harish-chandra-projection-computes-highest-weight-scalars` · lemma — The Harish-Chandra projection computes the highest-weight scalar
- `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions` · lemma — The rho-shift intertwines the dot and ordinary Weyl actions
- `prop-harish-chandra-map-is-injective` · proposition — The Harish-Chandra map on the center is injective
- `lem-associated-graded-symbol-of-a-central-element-is-invariant` · lemma — The leading PBW symbol of a central element is invariant
- `lem-regular-semisimple-elements-form-a-dense-open-subset` · lemma — Regular semisimple elements form a dense open subset
- `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction` · lemma — An invariant polynomial is determined by its restriction to a Cartan subalgebra
- `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants` · lemma — Weyl-invariant polynomials on the Cartan extend to invariant polynomials on $\mathfrak g$
- `thm-symmetric-invariants-restrict-to-weyl-invariants` · theorem — Chevalley restriction for symmetric invariants
- `thm-harish-chandra-isomorphism-for-the-center` · theorem — Harish-Chandra isomorphism for the center
- `cor-central-characters-are-dot-weyl-orbits` · corollary — Central characters are dot-Weyl orbits
- `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators` · corollary — The center is a polynomial algebra on rank-many generators
- `thm-enveloping-algebra-is-free-over-its-center` · theorem — The enveloping algebra is free over its center

### `harish-chandra-isomorphism-casimir-and-central-characters-examples` — Harish Chandra Isomorphism Casimir and Central Characters — Examples (6 item(s))

- `ex-sl2-casimir-and-its-highest-weight-eigenvalue` · example — $\mathfrak{sl}_2$ Casimir and highest-weight eigenvalue
- `ex-sl3-harish-chandra-center-generators` · example — Degree-two and degree-three Harish-Chandra generators for $\mathfrak{sl}_3$
- `ex-dot-conjugate-weights-have-the-same-central-character` · example — Dot-conjugate type-$A_2$ weights have the same central character
- `cex-unshifted-weyl-orbits-do-not-classify-central-characters` · counterexample — Ordinary Weyl orbits do not classify central characters
- `ex-the-zero-weight-singular-central-character` · example — The zero-weight singular central character
- `cex-a-noninvariant-quadratic-pbw-element-is-not-central` · counterexample — A noninvariant quadratic PBW element need not be central

### `artin-induction-and-rational-characters` — Artin Induction and Rational Characters (9 item(s))

- `def-rational-character-ring` · definition — The rational representation ring $R_{\mathbb Q}(G)$ and rational-valued class functions
- `def-cyclic-induction-subgroup` · definition — The cyclic induction subgroup of the character ring
- `lem-induction-image-is-an-ideal-in-the-representation-ring` · lemma — The cyclic induction subgroup is an ideal of the character ring
- `lem-cyclic-generator-class-functions-by-moebius-inversion` · lemma — The generator-indicator class function of a cyclic group is obtained by Möbius inversion
- `lem-artin-cyclic-permutation-relation` · lemma — A positive integer multiple of the trivial character is an integral combination of cyclic permutation characters
- `thm-artin-induction-for-rational-characters` · theorem — Artin induction for rational characters
- `cor-cyclic-fixed-points-detect-rational-representations` · corollary — Cyclic fixed-space dimensions detect rational virtual characters
- `cor-rank-of-the-rational-representation-ring` · corollary — The rank of $R_{\mathbb Q}(G)$ is the number of conjugacy classes of cyclic subgroups
- `cor-cyclic-local-integrality-criterion` · corollary — Cyclic restrictions force a bounded denominator in the rational representation ring

### `artin-induction-and-rational-characters-examples` — Artin Induction and Rational Characters — Examples (4 item(s))

- `ex-artin-induction-for-a-cyclic-group` · example — Artin induction is tautological for a cyclic group
- `ex-artin-permutation-relation-for-a5` · example — The $A_5$ permutation relation already needs a denominator
- `ex-cyclic-fixed-point-detection-for-s3` · example — The cyclic fixed-space data recovers an $S_3$ rational character
- `cex-rational-valued-character-need-not-be-defined-over-the-rationals` · counterexample — A rational-valued irreducible character need not come from a $\mathbb Q$-representation

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
| `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators` | `harish-chandra-isomorphism-casimir-and-central-characters` | gpt-5.6-terra | `1a23205b12f5a61707706e0b1e5767f7d1dbbe705d334856533c853462b602ea` |
| `prop-the-quadratic-casimir-element-is-central` | `harish-chandra-isomorphism-casimir-and-central-characters` | gpt-5.6-terra | `c7190808f5a172e9346cc1e0755581906b7d708cb0837d17861b62167210d601` |
| `thm-enveloping-algebra-is-free-over-its-center` | `harish-chandra-isomorphism-casimir-and-central-characters` | gpt-5.6-terra | `0264e33f0f5050b06e55f4b40fe3db5889514fc310ec27155bc4e60d550b2911` |
| `thm-five-term-exact-sequence-as-extension-and-transgression-data` | `second-cohomology-and-abelian-kernel-extensions` | gpt-5.6-terra | `ffa6db96443f99ddcfad4780e87fe9d4e145cc95304266a9e890719e9bb3c218` |

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
