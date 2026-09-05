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
  "group": "e",
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
      "id": "cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor",
      "scope": "run",
      "owner": "e"
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
      "id": "ex-two-universal-delta-functors-and-their-unique-isomorphism",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-effaceability-means-every-positive-value-is-zero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-extend-a-degree-zero-transformation-through-one-dimension-shift",
      "scope": "run",
      "owner": "e"
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
      "id": "thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables",
      "scope": "run",
      "owner": "e"
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
    }
  ],
  "live_tuples": [
    {
      "id": "cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor",
      "model": "gpt-5.6-terra",
      "context_sha256": "5fb85d9a4bf452bbf1ada6d2e8c9fe7912375d6afce38b29c329c5f073ff5eb7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-enriched-category",
      "model": "gpt-5.6-terra",
      "context_sha256": "96d1f51cec7f242d00f79dd498e87c18e7205a636494438765263e90ec6a0ad5",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-enriched-weighted-limit",
      "model": "gpt-5.6-terra",
      "context_sha256": "7d0c6514bf076ff3e33c059a27bc6aed4cafb4a317d06c5213b10d0c343b34de",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-two-universal-delta-functors-and-their-unique-isomorphism",
      "model": "gpt-5.6-terra",
      "context_sha256": "b4c40ac82364454b6b947d367684c76904e5b297d8dc2560228c7e350d5277bc",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-effaceability-means-every-positive-value-is-zero",
      "model": "gpt-5.6-terra",
      "context_sha256": "e8227defcd32b7801ec01499aab6805df1da6c22d187a6b261a8c640d8599494",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-extend-a-degree-zero-transformation-through-one-dimension-shift",
      "model": "gpt-5.6-terra",
      "context_sha256": "09048a66c3598199bf85c9769341695f264d44800a83f2a79f6686b9b36ff07c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-singular-chain-cross-product-boundary-formula",
      "model": "gpt-5.6-terra",
      "context_sha256": "f6169fc2c067f342401f47eb5be0fd01377e0f8a9aa4c49182095484ef7f123c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-the-effacement-extension-commutes-with-connecting-morphisms",
      "model": "gpt-5.6-terra",
      "context_sha256": "d3dc1c480e0b382dacfe866082533ac4981091a73c104f4a5ba7b1333fb080f4",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts",
      "model": "gpt-5.6-terra",
      "context_sha256": "85a3fc74dd611ddd537a87e74ce45e6d0b89fb43bad532c08c49f56ade1d6b51",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-positive-left-derived-functors-are-effaceable-by-projectives",
      "model": "gpt-5.6-terra",
      "context_sha256": "03a93ccf82f8a92cdd989d5b36824e72ff11a859d925b070017a1badac04f00e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-satellites-give-the-first-derived-functor",
      "model": "gpt-5.6-terra",
      "context_sha256": "5dc21c58ab28a3ccfe52e6498ea0280b168c6dd8800b29ac5b072b716e243913",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness",
      "model": "gpt-5.6-terra",
      "context_sha256": "5985b758c4611a32e469670e5b822965476a13d2dd15e55edf63bfc9a57c8049",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims",
      "model": "gpt-5.6-terra",
      "context_sha256": "3ed4a5fd365eb9d837d833a87bcf994326aa106a1e22287154d01ae26d45bb05",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-conical-limits-do-not-suffice-in-the-enriched-setting",
      "model": "gpt-5.6-terra",
      "context_sha256": "4757950980922ec9d7c04a52dd325395afcdc2f7b4c0bb456b823d54a329a779",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables",
      "model": "gpt-5.6-terra",
      "context_sha256": "ad947bdc242a95174cbcaf1464d4f8f1830464226e2dc7804451ad868d9cd292",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-right-derived-functors-form-a-cohomological-delta-functor",
      "model": "gpt-5.6-terra",
      "context_sha256": "f11b2eb0f62d4de036dbe86bc51fcb64087f4163547c02b5c320368285c948da",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-strong-enriched-yoneda-lemma-as-a-particular-end",
      "model": "gpt-5.6-terra",
      "context_sha256": "845e05497df7e3643ba9a28750a41c7de67321d6f7b0fa36fc58088771fddb2d",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **e**, run `frontier-30`

You are the group Alpha for batches **9**, **10**, **11**: 3 A/B pair(s), 6 page(s), 134 item(s), 17 open rejection(s) over 17 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 9 | `enriched-categories` | A | category-theory | 365.033 | `duality-and-rigidity-in-monoidal-categories-examples` |
| 9 | `enriched-categories-examples` | B | category-theory | 365.034 | `enriched-categories` |
| 10 | `delta-functors-and-universality` | A | homological-algebra | 365.049 | `derived-functors-examples` |
| 10 | `delta-functors-and-universality-examples` | B | homological-algebra | 365.05 | `delta-functors-and-universality` |
| 11 | `singular-chains-and-singular-homology` | A | algebraic-topology | 366.003 | `simplicial-complexes-and-simplicial-homology-examples`, `the-seifert-van-kampen-theorem`, `applications-of-the-fundamental-group` |
| 11 | `singular-chains-and-singular-homology-examples` | B | algebraic-topology | 366.004 | `singular-chains-and-singular-homology` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `enriched-categories` — Enriched Categories (43 item(s))

- `def-enriched-category` · definition — Enriched category over a monoidal base
- `rem-the-order-of-the-tensor-factors-in-composition` · remark — The order of tensor factors in enriched composition is fixed once and for all on this page
- `def-enriched-functor` · definition — Enriched functor
- `rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness` · remark — How much of the theory needs symmetry, closedness, and completeness
- `def-enriched-natural-transformation` · definition — Enriched natural transformation
- `thm-the-compact-square-form-of-enriched-naturality` · theorem — The lozenge and compact-square forms of enriched naturality are equivalent
- `rem-enriched-naturality-is-strictly-stronger-than-ordinary-naturality` · remark — Enriched naturality is strictly stronger than ordinary naturality of the underlying components
- `thm-enriched-categories-functors-and-natural-transformations-form-a-two-category` · theorem — Set-object enriched categories, enriched functors, and enriched natural transformations form a strict 2-category
- `def-the-underlying-ordinary-category-of-an-enriched-category` · definition — The underlying ordinary category of an enriched category
- `thm-the-underlying-category-construction-is-a-two-functor` · theorem — The underlying-category construction is a 2-functor
- `rem-the-underlying-category-can-lose-information` · remark — The underlying category can lose genuinely enriched information
- `thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs` · theorem — A Cat-enriched category is exactly a strict 2-category with a set of objects and small hom-categories
- `thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category` · theorem — Enrichment in a preorder recovers a preorder, and enrichment in sets recovers an ordinary category
- `thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category` · theorem — Ab-enriched categories are exactly preadditive categories
- `cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts` · corollary — An additive category is an Ab-enriched category with a zero object and finite biproducts
- `rem-the-commutative-monoid-case` · remark — The commutative-monoid enrichment of a semiadditive category remains only a sourced remark here
- `thm-a-closed-monoidal-category-is-enriched-in-itself` · theorem — A closed monoidal category is enriched in itself
- `def-representable-enriched-functor` · definition — Representable enriched functor
- `thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set` · theorem — A category enriched in the two-element lattice is a preordered set
- `thm-weak-enriched-yoneda-lemma` · theorem — Weak enriched Yoneda lemma
- `thm-strong-enriched-yoneda-lemma-as-a-particular-end` · theorem — Strong enriched Yoneda lemma as a particular end
- `rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims` · remark — The particular Yoneda end and the enriched functor category have different size requirements
- `cor-the-enriched-yoneda-embedding-is-fully-faithful` · corollary — The enriched Yoneda assignment is fully faithful
- `def-cotensor-and-tensor` · definition — Tensor and cotensor in a V-category
- `cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor` · counterexample — A bijection on underlying hom-sets need not exhibit a cotensor
- `def-enriched-weighted-limit` · definition — Enriched weighted limit
- `thm-the-free-enriched-category-two-adjunction` · theorem — The free enriched category is left 2-adjoint to the underlying-category construction
- `def-conical-limit-in-an-enriched-category` · definition — Conical enriched limit
- `thm-there-is-in-general-no-constant-enriched-functor` · theorem — Constant enriched functors need not exist
- `thm-conical-limits-do-not-suffice-in-the-enriched-setting` · theorem — Conical limits do not suffice in the enriched setting
- `thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category` · theorem — A conical enriched limit is stronger than a limit in the underlying category
- `thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit` · theorem — When a category is tensored, every limit in it is a conical enriched limit
- `thm-enriched-completeness-is-cotensors-plus-small-conical-limits` · theorem — Enriched completeness is cotensors plus small conical limits
- `rem-this-does-not-reduce-indexed-limits-to-conical-ones` · remark — The completeness test does not reduce indexed limits to conical ones
- `thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories` · theorem — A lax monoidal functor induces change of base on enriched categories
- `thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor` · theorem — Change of base extends to enriched functors and natural transformations as a 2-functor
- `cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base` · corollary — The underlying ordinary category is change of base along the underlying-hom functor
- `rem-what-is-not-proved-about-change-of-base` · remark — What this page does not prove about change of base
- `def-enriched-adjunction` · definition — Enriched adjunction
- `thm-a-right-enriched-adjoint-preserves-weighted-limits` · theorem — Right enriched adjoints preserve weighted limits
- `thm-enriched-adjoint-functor-theorem-for-cotensored-categories` · theorem — Enriched adjoint functor theorem for cotensored categories
- `thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint` · theorem — A V-category is tensored exactly when each covariant hom has a left enriched adjoint
- `thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables` · theorem — Every enriched functor into the base is a weighted colimit of representables when the displayed weighted colimit exists

### `enriched-categories-examples` — Enriched Categories — Examples (15 item(s))

- `ex-a-two-category-as-a-cat-enriched-category` · example — A strict 2-category read as a Cat-enriched category
- `ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice` · example — A preordered set read as a category enriched in the two-element lattice
- `ex-a-metric-space-as-an-enriched-category` · example — A Lawvere metric space as an enriched category
- `ex-a-ring-as-a-one-object-ab-enriched-category` · example — A ring as a one-object Ab-enriched category
- `ex-the-underlying-category-of-a-cat-enriched-category-forgets-the-two-cells` · example — The underlying category of a Cat-enriched category forgets the 2-cells
- `ex-a-cotensor-computed-in-sets` · example — A cotensor in Set is a power
- `cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor` · counterexample — A bijection of hom-sets that does not exhibit a cotensor
- `ex-change-of-base-along-the-underlying-set-functor` · example — Change of base along the underlying-set functor
- `fs-a-conical-limit-in-an-enriched-category-is-just-a-limit-in-the-underlying-category` · false-statement — FALSE: a conical limit in an enriched category is just a limit in the underlying category
- `fs-every-enriched-category-has-constant-enriched-functors` · false-statement — FALSE: every enriched category has constant enriched functors
- `fs-the-underlying-ordinary-category-determines-the-enriched-category` · false-statement — FALSE: the underlying ordinary category determines the enriched category
- `fs-a-cat-enriched-category-is-the-same-thing-as-a-strict-two-category` · false-statement — FALSE: a Cat-enriched category is the same thing as a strict 2-category without smallness hypotheses
- `fs-an-enriched-natural-transformation-is-a-natural-transformation-of-the-underlying-functors` · false-statement — FALSE: an enriched natural transformation is only a natural transformation of the underlying functors
- `fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category` · false-statement — FALSE: the strong enriched Yoneda lemma for a large category constructs the whole enriched functor category
- `fs-a-monoidal-category-carries-at-most-one-symmetry` · false-statement — FALSE: a monoidal category carries at most one symmetry

### `delta-functors-and-universality` — Delta Functors and Universality (34 item(s))

- `def-homological-delta-functor` · definition — Homological delta functor
- `def-cohomological-delta-functor` · definition — Cohomological delta functor
- `def-morphism-of-homological-delta-functors` · definition — Morphism of homological delta functors
- `def-morphism-of-cohomological-delta-functors` · definition — Morphism of cohomological delta functors
- `def-universal-delta-functor` · definition — Universal delta functor
- `def-effaceable-homological-delta-functor-in-positive-degrees` · definition — Effaceable homological delta functor in positive degrees
- `def-effaceable-cohomological-delta-functor-in-positive-degrees` · definition — Effaceable cohomological delta functor in positive degrees
- `lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor` · lemma — The horseshoe construction stays short exact after applying a right exact functor
- `def-connecting-map-for-left-derived-functors` · definition — The connecting map for left derived functors
- `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts` · lemma — The left derived connecting map is independent of the horseshoe resolution and lifts
- `thm-left-derived-functors-form-a-homological-delta-functor` · theorem — Left derived functors form a homological delta functor
- `thm-right-derived-functors-form-a-cohomological-delta-functor` · theorem — Right derived functors form a cohomological delta functor
- `prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors` · proposition — Natural transformations of base functors give morphisms of derived delta functors
- `cor-derived-long-exact-sequence` · corollary — The derived long exact sequence
- `prop-positive-left-derived-functors-are-effaceable-by-projectives` · proposition — Positive left derived functors are effaceable by projectives
- `prop-positive-right-derived-functors-are-effaceable-by-injectives` · proposition — Positive right derived functors are effaceable by injectives
- `lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle` · lemma — Dimension shift for a homological delta functor effaced in the middle
- `lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle` · lemma — Dimension shift for a cohomological delta functor effaced in the middle
- `lem-extend-a-degree-zero-transformation-through-one-dimension-shift` · lemma — A degree-zero transformation extends through one dimension shift
- `lem-the-effacement-extension-is-independent-of-the-effacing-morphism` · lemma — The effacement extension is independent of the effacing morphism
- `lem-the-effacement-extension-commutes-with-connecting-morphisms` · lemma — The effacement extension commutes with connecting morphisms
- `thm-effaceable-homological-delta-functors-are-universal` · theorem — Effaceable homological delta functors are universal
- `thm-effaceable-cohomological-delta-functors-are-universal` · theorem — Effaceable cohomological delta functors are universal
- `thm-derived-functors-are-universal-delta-functors` · theorem — Derived functors are universal delta functors
- `cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic` · corollary — Universal delta functors extending the same degree-zero functor are uniquely isomorphic
- `cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero` · corollary — A morphism between universal delta functors is determined in degree zero
- `prop-an-exact-base-functor-has-the-trivial-universal-delta-functor` · proposition — An exact base functor has the trivial universal delta functor
- `prop-satellites-give-the-first-derived-functor` · proposition — Satellites give the first derived functor
- `rem-universality-is-the-construction-independence-principle` · remark — Universality is the construction-independence principle
- `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor` · false-statement — FALSE: any sequence of functors with long exact sequences is a delta functor
- `fs-effaceability-means-every-positive-value-is-zero` · false-statement — FALSE: effaceability means every positive value is zero
- `fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends` · false-statement — FALSE: a degree-zero natural transformation between delta functors always extends
- `fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof` · false-statement — FALSE: the horseshoe connecting map is independent without a comparison proof
- `fs-universality-removes-the-need-for-supplied-resolution-data` · false-statement — FALSE: universality removes the need for supplied resolution data

### `delta-functors-and-universality-examples` — Delta Functors and Universality — Examples (7 item(s))

- `ex-homology-as-a-homological-delta-functor` · example — Homology as a homological delta functor
- `ex-the-trivial-delta-functor-of-an-exact-functor` · example — The trivial delta functor of an exact functor
- `ex-one-dimension-shift-along-a-projective-presentation` · example — One dimension shift along a projective presentation
- `ex-one-dimension-shift-along-an-injective-copresentation` · example — One dimension shift along an injective copresentation
- `ex-extending-a-degree-zero-natural-transformation` · example — Extending a degree-zero natural transformation
- `cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor` · counterexample — A nonnatural choice of connecting maps does not form a delta functor
- `ex-two-universal-delta-functors-and-their-unique-isomorphism` · example — Two universal delta functors and their unique isomorphism

### `singular-chains-and-singular-homology` — Singular Chains and Singular Homology (27 item(s))

- `def-standard-topological-simplex-and-its-affine-face-maps` · definition — The standard topological simplex and its affine face maps
- `lem-affine-face-maps-satisfy-the-cosimplicial-identities` · lemma — The affine face maps satisfy the cosimplicial identities
- `def-singular-simplex-and-singular-chain-group-with-coefficients` · definition — Singular simplices and singular chain groups with coefficients
- `def-singular-boundary-operator` · definition — The singular boundary operator
- `thm-the-singular-boundary-squares-to-zero` · theorem — The singular boundary squares to zero
- `def-singular-chain-complex-and-singular-homology` · definition — The singular chain complex and singular homology
- `def-induced-singular-chain-map` · definition — The induced singular chain map of a continuous map
- `lem-induced-singular-chain-maps-commute-with-boundaries` · lemma — Induced singular chain maps commute with boundaries
- `prop-singular-chains-and-homology-are-covariantly-functorial` · proposition — Singular chains and singular homology are covariantly functorial
- `def-zero-simplex-augmentation-and-reduced-singular-homology` · definition — Augmentation at 0-simplices and reduced singular homology
- `lem-singular-augmentation-commutes-with-boundary` · lemma — The singular augmentation commutes with the boundary
- `prop-zero-th-singular-homology-is-free-on-path-components` · proposition — Zero-th singular homology is free on path components
- `cor-path-connected-spaces-have-zero-reduced-zero-th-homology` · corollary — Path-connected spaces have zero reduced zero-th homology
- `prop-singular-homology-of-a-disjoint-union-is-the-direct-sum` · proposition — The singular homology of a disjoint union is the direct sum
- `def-prism-operator-for-a-homotopy` · definition — The prism operator of a homotopy
- `lem-the-prism-triangulation-has-the-stated-oriented-boundary` · lemma — The prism triangulation has the stated oriented boundary
- `thm-singular-chain-homotopy-formula` · theorem — The singular chain homotopy formula
- `cor-homotopic-maps-induce-the-same-map-on-singular-homology` · corollary — Homotopic maps induce the same map on singular homology
- `thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology` · theorem — Homotopy equivalences induce isomorphisms on singular homology
- `cor-contractible-nonempty-spaces-have-the-homology-of-a-point` · corollary — Contractible nonempty spaces have the homology of a point
- `prop-singular-homology-is-invariant-under-deformation-retracts` · proposition — Singular homology is invariant under deformation retracts
- `def-singular-chain-cross-product-on-generators` · definition — The singular chain cross product on generators
- `lem-singular-chain-cross-product-boundary-formula` · lemma — The singular chain cross product satisfies the boundary formula
- `prop-singular-chain-cross-products-are-natural` · proposition — Singular chain cross products are natural
- `def-fundamental-singular-cycle-of-an-oriented-simplex` · definition — The affine characteristic singular simplex of an ordered simplex
- `def-simplicial-to-singular-chain-map` · definition — The simplicial-to-singular chain map
- `lem-simplicial-to-singular-chains-commute-with-boundaries` · lemma — The simplicial-to-singular chain map commutes with boundaries

### `singular-chains-and-singular-homology-examples` — Singular Chains and Singular Homology — Examples (8 item(s))

- `ex-singular-chain-complex-of-a-point` · example — The singular chain complex of a point
- `ex-boundaries-of-the-standard-one-and-two-simplices` · example — Boundaries of the standard one- and two-simplices
- `ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex` · example — Direct cancellation in the boundary squared of a two-simplex
- `ex-the-prism-operator-for-a-path-homotopy` · example — The prism operator for a path homotopy
- `ex-homology-of-an-interval-from-contractibility` · example — The homology of an interval from contractibility
- `ex-homology-of-punctured-euclidean-space-by-deformation-retraction` · example — The homology of punctured Euclidean space by deformation retraction
- `cex-equal-homology-does-not-imply-homotopy-equivalence` · counterexample — Equal homology does not imply homotopy equivalence
- `cex-a-singular-cochain-is-not-a-finite-singular-chain` · counterexample — A singular cochain need not have finite support on singular simplices

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
| `cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor` | `enriched-categories-examples` | gpt-5.6-terra | `5fb85d9a4bf452bbf1ada6d2e8c9fe7912375d6afce38b29c329c5f073ff5eb7` |
| `def-enriched-category` | `enriched-categories` | gpt-5.6-terra | `96d1f51cec7f242d00f79dd498e87c18e7205a636494438765263e90ec6a0ad5` |
| `def-enriched-weighted-limit` | `enriched-categories` | gpt-5.6-terra | `7d0c6514bf076ff3e33c059a27bc6aed4cafb4a317d06c5213b10d0c343b34de` |
| `ex-two-universal-delta-functors-and-their-unique-isomorphism` | `delta-functors-and-universality-examples` | gpt-5.6-terra | `b4c40ac82364454b6b947d367684c76904e5b297d8dc2560228c7e350d5277bc` |
| `fs-effaceability-means-every-positive-value-is-zero` | `delta-functors-and-universality` | gpt-5.6-terra | `e8227defcd32b7801ec01499aab6805df1da6c22d187a6b261a8c640d8599494` |
| `lem-extend-a-degree-zero-transformation-through-one-dimension-shift` | `delta-functors-and-universality` | gpt-5.6-terra | `09048a66c3598199bf85c9769341695f264d44800a83f2a79f6686b9b36ff07c` |
| `lem-singular-chain-cross-product-boundary-formula` | `singular-chains-and-singular-homology` | gpt-5.6-terra | `f6169fc2c067f342401f47eb5be0fd01377e0f8a9aa4c49182095484ef7f123c` |
| `lem-the-effacement-extension-commutes-with-connecting-morphisms` | `delta-functors-and-universality` | gpt-5.6-terra | `d3dc1c480e0b382dacfe866082533ac4981091a73c104f4a5ba7b1333fb080f4` |
| `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts` | `delta-functors-and-universality` | gpt-5.6-terra | `85a3fc74dd611ddd537a87e74ce45e6d0b89fb43bad532c08c49f56ade1d6b51` |
| `prop-positive-left-derived-functors-are-effaceable-by-projectives` | `delta-functors-and-universality` | gpt-5.6-terra | `03a93ccf82f8a92cdd989d5b36824e72ff11a859d925b070017a1badac04f00e` |
| `prop-satellites-give-the-first-derived-functor` | `delta-functors-and-universality` | gpt-5.6-terra | `5dc21c58ab28a3ccfe52e6498ea0280b168c6dd8800b29ac5b072b716e243913` |
| `rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness` | `enriched-categories` | gpt-5.6-terra | `5985b758c4611a32e469670e5b822965476a13d2dd15e55edf63bfc9a57c8049` |
| `rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims` | `enriched-categories` | gpt-5.6-terra | `3ed4a5fd365eb9d837d833a87bcf994326aa106a1e22287154d01ae26d45bb05` |
| `thm-conical-limits-do-not-suffice-in-the-enriched-setting` | `enriched-categories` | gpt-5.6-terra | `4757950980922ec9d7c04a52dd325395afcdc2f7b4c0bb456b823d54a329a779` |
| `thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables` | `enriched-categories` | gpt-5.6-terra | `ad947bdc242a95174cbcaf1464d4f8f1830464226e2dc7804451ad868d9cd292` |
| `thm-right-derived-functors-form-a-cohomological-delta-functor` | `delta-functors-and-universality` | gpt-5.6-terra | `f11b2eb0f62d4de036dbe86bc51fcb64087f4163547c02b5c320368285c948da` |
| `thm-strong-enriched-yoneda-lemma-as-a-particular-end` | `enriched-categories` | gpt-5.6-terra | `845e05497df7e3643ba9a28750a41c7de67321d6f7b0fa36fc58088771fddb2d` |

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
