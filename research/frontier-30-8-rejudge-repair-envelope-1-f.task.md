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
  "group": "f",
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
      "id": "def-natural-and-dirichlet-density",
      "scope": "run",
      "owner": "f"
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
      "id": "ex-modified-pcp-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-three-sat-reduces-to-three-colourability",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-computation-history-domino-encoding",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-positive-log-dirichlet-series-nonvanishing",
      "scope": "run",
      "owner": "f"
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
      "id": "thm-proper-inclusions-in-the-chomsky-hierarchy",
      "scope": "run",
      "owner": "f"
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
  "live_tuples": [
    {
      "id": "def-natural-and-dirichlet-density",
      "model": "gpt-5.6-terra",
      "context_sha256": "d2582e0f7058465bd1cd1cc7418de009b96e2a7ea26745b662f37f80af9e7400",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-clique-is-np-complete",
      "model": "gpt-5.6-terra",
      "context_sha256": "d7d7c06b81f990880fa7d035d81bab66ded0b5a081dfd227610e0e46a3ba6094",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-hasse-minkowski-for-a-quaternary-form",
      "model": "gpt-5.6-terra",
      "context_sha256": "f434d2b10b3f5cd92abb157792d9c7cb3aaaa33cfc62b74fec8ac98d26121e5f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-modified-pcp-is-undecidable",
      "model": "gpt-5.6-terra",
      "context_sha256": "d9de54c197023f8864e1f2be7169b2c74ddbd36ca0275e6e1f03827cd5c42c49",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-three-sat-reduces-to-three-colourability",
      "model": "gpt-5.6-terra",
      "context_sha256": "3570c5cbedf77771228cde473136cf1748987a64e9b505230922df5047591ec9",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-computation-history-domino-encoding",
      "model": "gpt-5.6-terra",
      "context_sha256": "1d3ea651d3c6579c63d9f27141cf241c5f80a2738c885ae82a496e040cff8a44",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-positive-log-dirichlet-series-nonvanishing",
      "model": "gpt-5.6-terra",
      "context_sha256": "25f1d37ce66106aa0cfe408d4f88cd9c133fcd0d95437ce583d7f3781c27b274",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-hasse-minkowski-for-ternary-forms-over-q",
      "model": "gpt-5.6-terra",
      "context_sha256": "cbd428ff135ecbc734196fbf7ed2706980eb1d6057e575c886fb261ed0ef6252",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-hasse-minkowski-over-the-rationals",
      "model": "gpt-5.6-terra",
      "context_sha256": "cc0b7515918660e68304491aa00a75d77a4f7bf3802e23d7a8317e0045cc2133",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-proper-inclusions-in-the-chomsky-hierarchy",
      "model": "gpt-5.6-terra",
      "context_sha256": "63dfac3d8c6bee445b742690cfd5b31cffe14de31dd8b7f86f5820f28f9d9bae",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-three-sat-reduces-to-directed-hamiltonian-cycle",
      "model": "gpt-5.6-terra",
      "context_sha256": "81bcdaa41f94eacdeea4cf758e2345a816d829289372ac2fa28329bb4b7e485d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-three-sat-reduces-to-three-colourability",
      "model": "gpt-5.6-terra",
      "context_sha256": "ba224fca34114dbd98599f4e42c3b537231c570d34d4051526faf8689b0acc62",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-two-adic-hilbert-symbol-formula",
      "model": "gpt-5.6-terra",
      "context_sha256": "2a722270a7183ccb9b952ce9c7d630e680ea92dafe12b60bd05cdee052247da1",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **f**, run `frontier-30`

You are the group Alpha for batches **8**, **19**, **20**: 5 A/B pair(s), 10 page(s), 117 item(s), 13 open rejection(s) over 13 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 8 | `dirichlet-characters-l-functions-and-primes-in-progressions` | A | number-theory | 348.009 | `dirichlet-series-and-euler-products-examples`, `characters-and-the-orthogonality-relations` |
| 8 | `dirichlet-characters-l-functions-and-primes-in-progressions-examples` | B | number-theory | 348.01 | `dirichlet-characters-l-functions-and-primes-in-progressions` |
| 8 | `hilbert-symbols-and-the-quadratic-local-global-principle` | A | number-theory | 348.017 | `absolute-values-completions-and-p-adic-numbers-examples`, `quadratic-residues-and-the-legendre-symbol`, `quadratic-reciprocity-and-the-jacobi-symbol`, `dirichlet-characters-l-functions-and-primes-in-progressions` |
| 8 | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | B | number-theory | 348.018 | `hilbert-symbols-and-the-quadratic-local-global-principle` |
| 19 | `post-correspondence-and-language-undecidability` | A | computability-theory | 607 | `computable-reductions-and-rices-theorem`, `context-free-pumping-ogden-and-parsing`, `myhill-nerode-theory-and-dfa-minimization` |
| 19 | `post-correspondence-and-language-undecidability-examples` | B | computability-theory | 608 | `post-correspondence-and-language-undecidability` |
| 19 | `acceptable-numberings-smn-and-the-recursion-theorem` | A | computability-theory | 611 | `primitive-recursive-and-partial-computable-functions`, `computable-reductions-and-rices-theorem` |
| 19 | `acceptable-numberings-smn-and-the-recursion-theorem-examples` | B | computability-theory | 612 | `acceptable-numberings-smn-and-the-recursion-theorem` |
| 20 | `classical-np-completeness-reductions` | A | computability-theory | 623 | `the-cook-levin-theorem`, `graphs-walks-and-connectivity` |
| 20 | `classical-np-completeness-reductions-examples` | B | computability-theory | 624 | `classical-np-completeness-reductions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dirichlet-characters-l-functions-and-primes-in-progressions` — Dirichlet Characters L Functions and Primes in Progressions (24 item(s))

- `def-dirichlet-character-modulo-q` · definition — Dirichlet characters modulo q
- `lem-dirichlet-character-extension-well-defined` · lemma — Extension by zero is well defined and periodic
- `lem-dirichlet-character-arithmetic-function-characterization` · lemma — Arithmetic characterization of Dirichlet characters modulo q
- `def-principal-dirichlet-character` · definition — The principal character modulo q
- `lem-dirichlet-character-values` · lemma — Character values on units are roots of unity
- `thm-dirichlet-character-orthogonality` · theorem — Orthogonality relations for Dirichlet characters modulo q
- `cor-dirichlet-character-residue-class-indicator` · corollary — A residue-class indicator from character sums
- `lem-nonprincipal-dirichlet-character-complete-sum` · lemma — A nonprincipal character has zero complete sum
- `lem-nonprincipal-dirichlet-character-partial-sums` · lemma — Nonprincipal Dirichlet character partial sums are bounded
- `def-dirichlet-l-function` · definition — Dirichlet L-functions
- `thm-dirichlet-l-euler-product` · theorem — Euler product for Dirichlet L-functions
- `thm-principal-dirichlet-l-factorization` · theorem — The principal Dirichlet L-function factors through zeta
- `thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane` · theorem — Nonprincipal Dirichlet L-functions are holomorphic on Re s greater than 0
- `lem-positive-log-dirichlet-series-nonvanishing` · lemma — Positive logarithmic Dirichlet series force boundary nonvanishing
- `thm-product-dirichlet-l-nonvanishing-line-one` · theorem — The full product of Dirichlet L-functions has no zero on Re s = 1
- `thm-dirichlet-l-nonvanishing-line-one` · theorem — Nonprincipal Dirichlet L-functions do not vanish on Re s = 1 away from s = 1
- `lem-nonreal-dirichlet-l-nonzero-at-one` · lemma — A nonreal Dirichlet L-function is nonzero at one
- `lem-real-dirichlet-l-nonzero-at-one` · lemma — A real nonprincipal Dirichlet L-function is nonzero at one
- `thm-dirichlet-l-nonzero-at-one` · theorem — Nonprincipal Dirichlet L-functions are nonzero at one
- `def-natural-and-dirichlet-density` · definition — Natural and Dirichlet density
- `thm-natural-density-implies-dirichlet-density` · theorem — Natural density implies Dirichlet density
- `thm-primes-residue-class-dirichlet-density` · theorem — Primes in one reduced residue class have Dirichlet density 1 over phi(q)
- `thm-mertens-primes-arithmetic-progressions` · theorem — Mertens sum for primes in an arithmetic progression
- `thm-dirichlet-primes-arithmetic-progressions` · theorem — Dirichlet's theorem on primes in arithmetic progressions

### `dirichlet-characters-l-functions-and-primes-in-progressions-examples` — Dirichlet Characters L Functions and Primes in Progressions -- Examples (8 item(s))

- `ex-dirichlet-characters-modulo-three-four-and-five` · example — Dirichlet character tables modulo 3, 4, and 5
- `ex-dirichlet-characters-modulo-eight-and-twelve` · example — Dirichlet character tables modulo 8 and 12
- `ex-dirichlet-character-orthogonality-table` · example — An orthogonality table for Dirichlet characters
- `ex-principal-dirichlet-l-missing-euler-factors` · example — Missing Euler factors for a principal Dirichlet L-function
- `ex-the-character-chi-four-and-leibniz-series` · example — The character chi_4 and the Gregory-Leibniz series
- `ex-dirichlet-density-of-primes-in-a-small-progression` · example — Dirichlet density for a small prime progression
- `cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion` · counterexample — A noncoprime residue class has no Dirichlet conclusion
- `cex-dirichlet-density-does-not-mean-integer-natural-density` · counterexample — Positive prime Dirichlet density does not give positive integer natural density

### `hilbert-symbols-and-the-quadratic-local-global-principle` — Hilbert Symbols and the Quadratic Local Global Principle (17 item(s))

- `def-rational-local-fields` · definition — The rational local fields
- `def-hilbert-symbol-over-a-rational-completion` · definition — The Hilbert symbol over a rational completion
- `lem-equivalent-definitions-of-the-hilbert-symbol` · lemma — Equivalent formulations of the Hilbert symbol
- `lem-hilbert-symbol-depends-only-on-square-classes` · lemma — The Hilbert symbol depends only on square classes
- `thm-real-hilbert-symbol-formula` · theorem — The real Hilbert symbol formula
- `thm-odd-p-hilbert-symbol-formula` · theorem — The odd-prime Hilbert symbol formula
- `thm-two-adic-hilbert-symbol-formula` · theorem — The two-adic Hilbert symbol formula
- `thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate` · theorem — The Hilbert symbol is a symmetric bilinear nondegenerate pairing
- `lem-binary-quadratic-representation-via-hilbert-symbol` · lemma — Binary quadratic representation via the Hilbert symbol
- `cor-ternary-isotropy-via-hilbert-symbol` · corollary — Ternary isotropy via the Hilbert symbol
- `lem-finite-field-quadratic-isotropy-in-dimension-at-least-three` · lemma — Quadratic forms of dimension at least three over odd finite fields are isotropic
- `thm-local-isotropy-at-almost-all-primes` · theorem — Almost all local completions are isotropic in dimension at least three
- `thm-hilbert-reciprocity-over-the-rationals` · theorem — Hilbert reciprocity over the rationals
- `cor-ternary-hilbert-one-place-principle` · corollary — One local place is determined by the others for ternary forms
- `thm-hasse-minkowski-for-ternary-forms-over-q` · theorem — Hasse-Minkowski for ternary forms over Q
- `lem-global-square-class-approximation` · lemma — Global approximation of finitely many square classes
- `thm-hasse-minkowski-over-the-rationals` · theorem — Hasse-Minkowski theorem over Q

### `hilbert-symbols-and-the-quadratic-local-global-principle-examples` — Hilbert Symbols and the Quadratic Local Global Principle -- Examples (9 item(s))

- `ex-hilbert-symbol-over-the-reals` · example — Hilbert symbols over the real numbers
- `ex-hilbert-symbol-at-an-odd-prime` · example — A Hilbert-symbol computation at an odd prime
- `ex-two-adic-hilbert-symbol` · example — The two-adic Hilbert symbol table
- `ex-local-obstruction-to-a-rational-conic` · example — A local obstruction to a rational conic
- `ex-finite-bad-place-test-for-a-ternary-form` · example — Finite bad places for a ternary form
- `ex-hilbert-one-place-principle` · example — The one-place principle in action
- `ex-hasse-minkowski-for-a-quaternary-form` · example — A quaternary Hasse-Minkowski calculation
- `cex-local-global-fails-for-a-cubic-curve` · counterexample — Selmer's cubic is locally soluble but globally insoluble
- `cex-rational-isotropy-is-not-integral-representation` · counterexample — Rational isotropy does not solve an integral representation problem

### `post-correspondence-and-language-undecidability` — Post Correspondence and Language Undecidability (15 item(s))

- `def-post-correspondence-problem` · definition — The Post correspondence problem
- `def-modified-post-correspondence-problem` · definition — The modified Post correspondence problem
- `lem-computation-history-domino-encoding` · lemma — Accepting computation histories can be encoded by modified-PCP domino matches
- `thm-modified-pcp-is-undecidable` · theorem — The modified Post correspondence problem is undecidable
- `lem-modified-pcp-reduces-to-pcp` · lemma — Modified PCP many-one reduces to PCP
- `thm-post-correspondence-is-undecidable` · theorem — The Post correspondence problem is undecidable
- `prop-post-correspondence-is-recognizable` · proposition — The Post correspondence problem is recognizable
- `thm-cfg-intersection-emptiness-is-undecidable` · theorem — Emptiness of the intersection of two CFGs is undecidable
- `thm-cfg-universality-is-undecidable` · theorem — CFG universality is undecidable
- `thm-cfg-equivalence-is-undecidable` · theorem — CFG equivalence is undecidable
- `thm-cfg-ambiguity-is-undecidable` · theorem — CFG ambiguity is undecidable
- `def-chomsky-hierarchy` · definition — The Chomsky hierarchy of regular, context-free, decidable, and computably enumerable languages
- `thm-proper-inclusions-in-the-chomsky-hierarchy` · theorem — The inclusions in the Chomsky hierarchy are proper
- `fs-pcp-allows-symbol-reordering-within-dominoes` · false-statement — FALSE: PCP permits reordering symbols inside a domino
- `fs-two-decidable-cfls-have-decidable-intersection-emptiness` · false-statement — FALSE: decidable CFLs have a decidable intersection-emptiness problem

### `post-correspondence-and-language-undecidability-examples` — Post Correspondence and Language Undecidability: Examples and Counterexamples (3 item(s))

- `ex-modified-pcp-is-undecidable` · example — A computation-history domino system whose matches spell a halting run
- `ex-proper-inclusions-in-the-chomsky-hierarchy` · example — Witness languages for the proper inclusions in the Chomsky hierarchy
- `cex-pcp-allows-symbol-reordering-within-dominoes` · counterexample — A domino family where matching fails unless one illegally permutes symbols inside a tile

### `acceptable-numberings-smn-and-the-recursion-theorem` — Acceptable Numberings, the s-m-n Theorem, and Recursion (16 item(s))

- `def-numbering-of-partial-computable-functions` · definition — Numberings of partial computable functions
- `def-universal-and-acceptable-numbering` · definition — Universal and acceptable numberings
- `prop-fixed-machine-coding-is-acceptable` · proposition — The fixed machine coding gives an acceptable numbering
- `def-parameter-specialization-function` · definition — Parameter-specialization functions
- `thm-smn-parameter-theorem` · theorem — The s-m-n theorem
- `cor-effective-program-specialization` · corollary — Effective program specialization
- `def-computable-program-transformer` · definition — Computable program transformers
- `lem-self-reference-construction-from-smn` · lemma — The diagonal self-reference construction from s-m-n
- `thm-kleenes-second-recursion-theorem` · theorem — Kleene's second recursion theorem
- `thm-recursion-theorem-with-parameters` · theorem — The recursion theorem with parameters
- `def-productive-and-creative-set` · definition — Productive and creative sets
- `thm-nonhalting-is-productive-and-halting-is-creative` · theorem — The nonhalting set is productive and the halting set is creative
- `thm-myhill-isomorphism-theorem-for-creative-sets` · theorem — Myhill's isomorphism theorem for creative sets
- `prop-acceptable-numberings-are-computably-intertranslatable` · proposition — Acceptable numberings are computably intertranslatable
- `fs-recursion-theorem-needs-source-file-access` · false-statement — FALSE: the recursion theorem requires source-code access
- `fs-program-indices-are-unique` · false-statement — FALSE: a partial computable function has a unique program index

### `acceptable-numberings-smn-and-the-recursion-theorem-examples` — Acceptable Numberings, the s-m-n Theorem, and Recursion: Examples and Counterexamples (3 item(s))

- `ex-smn-parameter-theorem` · example — Specializing a two-argument program to obtain a unary residual program
- `ex-acceptable-numberings-are-computably-intertranslatable` · example — Compiling between two acceptable numberings
- `cex-recursion-theorem-needs-source-file-access` · counterexample — A quine obtained without inspecting its own source file

### `classical-np-completeness-reductions` — Classical NP-Completeness Reductions (19 item(s))

- `def-reduction-gadget-and-interface-invariant` · definition — Reduction gadgets and interface invariants
- `def-clique-independent-set-and-vertex-cover-problems` · definition — Clique, independent set, and vertex cover decision problems
- `thm-three-sat-reduces-to-clique` · theorem — 3SAT polynomial-time many-one reduces to CLIQUE
- `cor-clique-is-np-complete` · corollary — CLIQUE is NP-complete
- `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible` · theorem — CLIQUE, INDEPENDENT SET, and VERTEX COVER are polynomially interreducible
- `cor-independent-set-and-vertex-cover-are-np-complete` · corollary — INDEPENDENT SET and VERTEX COVER are NP-complete
- `def-directed-hamiltonian-path-and-cycle-problems` · definition — Directed and undirected Hamiltonian path and cycle decision problems
- `thm-three-sat-reduces-to-directed-hamiltonian-cycle` · theorem — 3SAT polynomial-time many-one reduces to directed Hamiltonian cycle
- `thm-directed-reduces-to-undirected-hamiltonian-cycle` · theorem — Directed Hamiltonian cycle polynomial-time many-one reduces to undirected Hamiltonian cycle
- `cor-hamiltonian-path-and-cycle-are-np-complete` · corollary — Directed and undirected Hamiltonian path and cycle are NP-complete
- `def-subset-sum-and-partition` · definition — Subset sum and partition decision problems
- `thm-three-sat-reduces-to-subset-sum` · theorem — 3SAT polynomial-time many-one reduces to subset sum
- `thm-subset-sum-reduces-to-partition` · theorem — Subset sum polynomial-time many-one reduces to partition
- `def-set-cover` · definition — The set cover decision problem
- `thm-vertex-cover-reduces-to-set-cover` · theorem — Vertex cover polynomial-time many-one reduces to set cover
- `def-three-colourability` · definition — The three-colourability decision problem
- `thm-three-sat-reduces-to-three-colourability` · theorem — 3SAT polynomial-time many-one reduces to 3-COLORABILITY
- `fs-gadget-correctness-needs-only-one-direction` · false-statement — A gadget reduction is correct as soon as every yes-instance maps to a yes-instance
- `fs-pseudopolynomial-is-polynomial-in-bit-length` · false-statement — A pseudopolynomial algorithm is polynomial in the binary input length

### `classical-np-completeness-reductions-examples` — Classical NP-Completeness Reductions: Examples and Counterexamples (3 item(s))

- `ex-clique-is-np-complete` · example — A worked clause-cluster instance witnessing that CLIQUE is NP-complete
- `ex-three-sat-reduces-to-three-colourability` · example — A small 3SAT instance and its three-colourability gadget graph
- `cex-gadget-correctness-needs-only-one-direction` · counterexample — A forward-only mapping that is not a correct many-one reduction

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
| `def-natural-and-dirichlet-density` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `d2582e0f7058465bd1cd1cc7418de009b96e2a7ea26745b662f37f80af9e7400` |
| `ex-clique-is-np-complete` | `classical-np-completeness-reductions-examples` | gpt-5.6-terra | `d7d7c06b81f990880fa7d035d81bab66ded0b5a081dfd227610e0e46a3ba6094` |
| `ex-hasse-minkowski-for-a-quaternary-form` | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | gpt-5.6-terra | `f434d2b10b3f5cd92abb157792d9c7cb3aaaa33cfc62b74fec8ac98d26121e5f` |
| `ex-modified-pcp-is-undecidable` | `post-correspondence-and-language-undecidability-examples` | gpt-5.6-terra | `d9de54c197023f8864e1f2be7169b2c74ddbd36ca0275e6e1f03827cd5c42c49` |
| `ex-three-sat-reduces-to-three-colourability` | `classical-np-completeness-reductions-examples` | gpt-5.6-terra | `3570c5cbedf77771228cde473136cf1748987a64e9b505230922df5047591ec9` |
| `lem-computation-history-domino-encoding` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `1d3ea651d3c6579c63d9f27141cf241c5f80a2738c885ae82a496e040cff8a44` |
| `lem-positive-log-dirichlet-series-nonvanishing` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `25f1d37ce66106aa0cfe408d4f88cd9c133fcd0d95437ce583d7f3781c27b274` |
| `thm-hasse-minkowski-for-ternary-forms-over-q` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `cbd428ff135ecbc734196fbf7ed2706980eb1d6057e575c886fb261ed0ef6252` |
| `thm-hasse-minkowski-over-the-rationals` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `cc0b7515918660e68304491aa00a75d77a4f7bf3802e23d7a8317e0045cc2133` |
| `thm-proper-inclusions-in-the-chomsky-hierarchy` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `63dfac3d8c6bee445b742690cfd5b31cffe14de31dd8b7f86f5820f28f9d9bae` |
| `thm-three-sat-reduces-to-directed-hamiltonian-cycle` | `classical-np-completeness-reductions` | gpt-5.6-terra | `81bcdaa41f94eacdeea4cf758e2345a816d829289372ac2fa28329bb4b7e485d` |
| `thm-three-sat-reduces-to-three-colourability` | `classical-np-completeness-reductions` | gpt-5.6-terra | `ba224fca34114dbd98599f4e42c3b537231c570d34d4051526faf8689b0acc62` |
| `thm-two-adic-hilbert-symbol-formula` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `2a722270a7183ccb9b952ce9c7d630e680ea92dafe12b60bd05cdee052247da1` |

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
