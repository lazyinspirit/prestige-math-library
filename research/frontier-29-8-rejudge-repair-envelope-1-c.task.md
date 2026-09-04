# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-29",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "c",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-cook-levin-enumerates-all-branches]: cex-cook-levin-enumerates-all-branches: current gpt-5.6-terra rejection has no exact Alpha outcome for context f83adb0a28c878949c2998cf70a644244e21d81cdb3f6d05bbeaff",
      "output": "level-coverage --judge-only: 755/755 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 40 unadjudicated, 0 open fatal, 174 adjudicated rejection(s) closed nonfatally; legacy gate counter 755/755 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-cook-levin-enumerates-all-branches]: cex-cook-levin-enumerates-all-branches: current gpt-5.6-terra rejection has no exact Alpha outcome for context f83adb0a28c878949c2998cf70a644244e21d81cdb3f6d05bbeaff904348e3bf\nERROR judge-adjudication-missing [cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor]: cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor: current gpt-5.6-terra rejection has no exact Alpha outcome for context 25496a55a6f08f4554ec95ea481ba9934a393d865c846d7860a340c2ab90b9f7\nERROR judge-adjudication-missing [cex-not-every-monoidal-category-is-rigid]: cex-not-every-monoidal-category-is-rigid: current gpt-5.6-terra rejection has no exact Alpha outcome for context c2c972ef4de1e06d74985d2a63dd5bdc2ba83f77e6e95a91e9be32e7bbf0e602\nERROR judge-adjudication-missing [cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one]: cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one: current gpt-5.6-terra rejection has no exact Alpha outcome for context 44e135c6827309a129b632f93be092830abd6390eb33d86570ccc56ea855e534\nERROR judge-adjudication-missing [cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade]: cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9c44fce2bb8586dcd60a25d206c27ac1675a63fca4f6aae644fbffe5bc3adaeb\nERROR judge-adjudication-missing [def-acyclic-object-for-a-left-exact-functor]: def-acyclic-object-for-a-left-exact-functor: current gpt-5.6-terra rejection has no exact Alpha outcome for context dc40b9f8962c813e924636a526e1e2984cce693244bb3a64bf0f8aa1eef6aa73\nERROR judge-adjudication-missing [def-balanced-derived-bifunctor]: def-balanced-derived-bifunctor: current gpt-5.6-terra rejection has no exact Alpha outcome for context ca55825414d03b7c0fd75912d5fd0276248f6cacf7c566189c984e5f3229b732\nERROR judge-adjudication-missing [def-field-of-p-adic-numbers]: def-field-of-p-adic-numbers: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3cf2a900ae0a21965e0e3f2c6e09228b7433af2993123885c9c30dac52baf956\nERROR judge-adjudication-missing [def-pro-p-completion-of-an-abstract-group]: def-pro-p-completion-of-an-abstract-group: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89958a316bfa50f50b96b15a585d8b14a1512bb4f835d67a9ba33f94b4585873\nERROR judge-adjudication-missing [def-relative-projectivity]: def-relative-projectivity: current gpt-5.6-terra rejection has no exact Alpha outcome for context ebd96bb2311862ef0aed1d7e14149df76805b841be18102d0b8e731d514605b6\nERROR judge-adjudication-missing [ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set]: ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set: current gpt-5.6-terra rejection has no exact Alpha outcome for context af9a6aafe6dd4d5fe6added31b8e98ac2c674370673b581283f5b261239b706f\nERROR judge-adjudication-missing [ex-a-numeric-run-of-the-lemma-three-three-exponent-choice]: ex-a-numeric-run-of-the-lemma-three-three-exponent-choice: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9a42e3b8ee3ac77e2233632101122b8d5b327b25b259afeb6e968ff0403eaf5c\nERROR judge-adjudication-missing [ex-punctured-affine-line-not-affine-closed-subset]: ex-punctured-affine-line-not-affine-closed-subset: current gpt-5.6-terra rejection has no exact Alpha outcome for context 26c9f735fb868ee9f5b2c5ee76ac2ff7abc326d8ab70deece8d3fc2b88052d62\nERROR judge-adjudication-missing [ex-the-dimension-of-a-vector-space-is-its-linear-dimension]: ex-the-dimension-of-a-vector-space-is-its-linear-dimension: current gpt-5.6-terra rejection has no exact Alpha outcome for context c472fffd419c926827200eb17ffef5e1393976d6e92bbffdd6b6f4f833ac6f5e\nERROR judge-adjudication-missing [ex-the-regular-module-of-cp-in-characteristic-p]: ex-the-regular-module-of-cp-in-characteristic-p: current gpt-5.6-terra rejection has no exact Alpha outcome for context add0c3f8002c6b3f77cef2c9036ee630f3bbd5d6edeaf2b978a74265b86c9aca\nERROR judge-adjudication-missing [fs-a-braiding-suffices-to-define-a-trace]: fs-a-braiding-suffices-to-define-a-trace: current gpt-5.6-terra rejection has no exact Alpha outcome for context f591905d8feb3cbd3db5cba388978987f646d22675627ea2abca03f71c1ae201\nERROR judge-adjudication-missing [fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself]: fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself: current gpt-5.6-terra rejection has no exact Alpha outcome for context da5852f9df9157dd220d4450bbd48df3bdf971ebd2f179709b20b7911b46d6dd\nERROR judge-adjudication-missing [fs-derived-functors-in-two-variables-are-automatically-balanced]: fs-derived-functors-in-two-variables-are-automatically-balanced: current gpt-5.6-terra rejection has no exact Alpha outcome for context fa285e6e9f9e44344d8faf16b90c58d67109b4666d5ce63003b72983dd867e33\nERROR judge-adjudication-missing [fs-left-and-right-duals-of-an-object-are-isomorphic]: fs-left-and-right-duals-of-an-object-are-isomorphic: current gpt-5.6-terra rejection has no exact Alpha outcome for context aceb991e3e5f8eeac72c84f358a59791472fe59581843ff51db02932e8cb8edd\nERROR judge-adjudication-missing [fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure]: fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure: current gpt-5.6-terra rejection has no exact Alpha outcome for context cf93756a55dbe739f894a467c5a32ece56c0904e000959a13522f9561a0a56e1\nERROR judge-adjudication-missing [fs-zp-is-cyclic-as-an-abstract-group]: fs-zp-is-cyclic-as-an-abstract-group: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4c60cafa3fe386eaaac3a72f21be0543060db8551cec6d119f5a7cb6211a2ac1\nERROR judge-adjudication-missing [lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs]: lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs: current gpt-5.6-terra rejection has no exact Alpha outcome for context 282154623706b28e46cf048a766c42a56e2235fb3202de7a7aafe7fc990e3f9d\nERROR judge-adjudication-missing [lem-majority-error-bound-from-chebyshev]: lem-majority-error-bound-from-chebyshev: current gpt-5.6-terra rejection has no exact Alpha outcome for context d29a4237b879fb08625f7e2db4ca6c9c33ff0ffa2b5077163381f38b039ad3d5\nERROR judge-adjudication-missing [lem-parameter-power-series-subring-makes-ring-finite]: lem-parameter-power-series-subring-makes-ring-finite: current gpt-5.6-terra rejection has no exact Alpha outcome for context f05f1d902932ec1f2d63886154716a448e21f0b7e9e4eb3868ecde423e8d91d2\nERROR judge-adjudication-missing [prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws]: prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws: current gpt-5.6-terra rejection has no exact Alpha outcome for context 674cc58302a3867eff89114667ea9bf7cbbc2eded90db89fac692adf7f1322fd\nERROR judge-adjudication-missing [prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws]: prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws: current gpt-5.6-terra rejection has no exact Alpha outcome for context 05e1668a040552436a3d501ea62ea18818fe83a1c2edec91d5e4cf9eda2c0aeb\nERROR judge-adjudication-missing [prop-positive-right-derived-functors-vanish-on-injective-objects]: prop-positive-right-derived-functors-vanish-on-injective-objects: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1e146c2c81c5f42b43911401c9654cdf83055e6d0924f7af480a7d82246c2857\nERROR judge-adjudication-missing [rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data]: rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data: current gpt-5.6-terra rejection has no exact Alpha outcome for context be446e0128a2dbc88e3b8a3fc2e5bae466d9e53e5e6f85073323b0273b32c187\nERROR judge-adjudication-missing [rem-what-is-needed-before-a-trace-can-be-written]: rem-what-is-needed-before-a-trace-can-be-written: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3128cbf29c8abce10064d44843ed1dc8078e09dcd574be6fb25eb8bb55a09c82\nERROR judge-adjudication-missing [thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]: thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6afa7c56709af40f083454f259cdd641657a3272482186f7d2fb9714bef4bec8\nERROR judge-adjudication-missing [thm-dirichlet-series-summatory-integral]: thm-dirichlet-series-summatory-integral: current gpt-5.6-terra rejection has no exact Alpha outcome for context 132b1ef3ab3e785cf141415cc551838188ec529e3863cd1afef17909c41a192c\nERROR judge-adjudication-missing [thm-green-vertex-source-existence-and-conjugacy]: thm-green-vertex-source-existence-and-conjugacy: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5ad1a47580a1cc07a78900bcb77cc13a47c938b95fedb765a7e717b686f607fd\nERROR judge-adjudication-missing [thm-p-adic-completion-is-a-field]: thm-p-adic-completion-is-a-field: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5a5c89d20e5364df637911211521016167affcf3b625417f9bcb313c7723f2d8\nERROR judge-adjudication-missing [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras: current gpt-5.6-terra rejection has no exact Alpha outcome for context c66fd133975505c46d865ceec6d6ee216e3c1e1df38dd1efb8e1b4bbd0557e3c\nERROR judge-adjudication-missing [thm-rice-shapiro-positive-information-direction]: thm-rice-shapiro-positive-information-direction: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2e1967f45e53c7a16d50f922276c304d9e2a7cc04711166588baded9e5aa5dcc\nERROR judge-adjudication-missing [thm-schur-zassenhaus-existence]: thm-schur-zassenhaus-existence: current gpt-5.6-terra rejection has no exact Alpha outcome for context e4ba9e945a5e4392f2dd2c78e0343de1582349d2ee596734870c93c9cf8f1c13\nERROR judge-adjudication-missing [thm-the-simplicial-boundary-squares-to-zero]: thm-the-simplicial-boundary-squares-to-zero: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7b4e6d772e39d7927d9e986771baf9a12e00d183455c9bb116bbffe6da335d4d\nERROR judge-adjudication-missing [thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]: thm-time-dependent-vector-fields-have-local-smooth-evolution-operators: current gpt-5.6-terra rejection has no exact Alpha outcome for context 081573b18fd5390fb4fe36af179a6ad5e93dd5b21ea5ab41d676126e2f8f0691\nERROR judge-adjudication-missing [thm-trivial-zeros-and-critical-strip]: thm-trivial-zeros-and-critical-strip: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4b7f86d8db0cd501dd448cc576919e7315e0958daa09205d152d7d22f6875350\nERROR judge-adjudication-missing [thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]: thm-vitali-covering-lemma-for-balls-with-fivefold-dilates: current gpt-5.6-terra rejection has no exact Alpha outcome for context 20a74aa2b2aa2abd907256c819439d3c3d3eda2fe736a7ea9f3eff1a447d6153\n",
      "named_ids": [
        "cex-cook-levin-enumerates-all-branches",
        "cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor",
        "cex-not-every-monoidal-category-is-rigid",
        "cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one",
        "cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade",
        "def-acyclic-object-for-a-left-exact-functor",
        "def-balanced-derived-bifunctor",
        "def-field-of-p-adic-numbers",
        "def-pro-p-completion-of-an-abstract-group",
        "def-relative-projectivity",
        "ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set",
        "ex-a-numeric-run-of-the-lemma-three-three-exponent-choice",
        "ex-punctured-affine-line-not-affine-closed-subset",
        "ex-the-dimension-of-a-vector-space-is-its-linear-dimension",
        "ex-the-regular-module-of-cp-in-characteristic-p",
        "fs-a-braiding-suffices-to-define-a-trace",
        "fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself",
        "fs-derived-functors-in-two-variables-are-automatically-balanced",
        "fs-left-and-right-duals-of-an-object-are-isomorphic",
        "fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure",
        "fs-zp-is-cyclic-as-an-abstract-group",
        "lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs",
        "lem-majority-error-bound-from-chebyshev",
        "lem-parameter-power-series-subring-makes-ring-finite",
        "prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
        "prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
        "prop-positive-right-derived-functors-vanish-on-injective-objects",
        "rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data",
        "rem-what-is-needed-before-a-trace-can-be-written",
        "thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n",
        "thm-dirichlet-series-summatory-integral",
        "thm-green-vertex-source-existence-and-conjugacy",
        "thm-p-adic-completion-is-a-field",
        "thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras",
        "thm-rice-shapiro-positive-information-direction",
        "thm-schur-zassenhaus-existence",
        "thm-the-simplicial-boundary-squares-to-zero",
        "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators",
        "thm-trivial-zeros-and-critical-strip",
        "thm-vitali-covering-lemma-for-balls-with-fivefold-dilates"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-cook-levin-enumerates-all-branches",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-not-every-monoidal-category-is-rigid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "def-acyclic-object-for-a-left-exact-functor",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-balanced-derived-bifunctor",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-field-of-p-adic-numbers",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "def-pro-p-completion-of-an-abstract-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-relative-projectivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-numeric-run-of-the-lemma-three-three-exponent-choice",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-punctured-affine-line-not-affine-closed-subset",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-dimension-of-a-vector-space-is-its-linear-dimension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-regular-module-of-cp-in-characteristic-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-braiding-suffices-to-define-a-trace",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-derived-functors-in-two-variables-are-automatically-balanced",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-left-and-right-duals-of-an-object-are-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-zp-is-cyclic-as-an-abstract-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-majority-error-bound-from-chebyshev",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-parameter-power-series-subring-makes-ring-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-positive-right-derived-functors-vanish-on-injective-objects",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "rem-what-is-needed-before-a-trace-can-be-written",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-dirichlet-series-summatory-integral",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-green-vertex-source-existence-and-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-p-adic-completion-is-a-field",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-rice-shapiro-positive-information-direction",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-schur-zassenhaus-existence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-simplicial-boundary-squares-to-zero",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-trivial-zeros-and-critical-strip",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-vitali-covering-lemma-for-balls-with-fivefold-dilates",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-vitali-covering-lemma-for-balls-with-fivefold-dilates",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one",
      "model": "gpt-5.6-terra",
      "context_sha256": "44e135c6827309a129b632f93be092830abd6390eb33d86570ccc56ea855e534",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set",
      "model": "gpt-5.6-terra",
      "context_sha256": "af9a6aafe6dd4d5fe6added31b8e98ac2c674370673b581283f5b261239b706f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n",
      "model": "gpt-5.6-terra",
      "context_sha256": "6afa7c56709af40f083454f259cdd641657a3272482186f7d2fb9714bef4bec8",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-vitali-covering-lemma-for-balls-with-fivefold-dilates",
      "model": "gpt-5.6-terra",
      "context_sha256": "20a74aa2b2aa2abd907256c819439d3c3d3eda2fe736a7ea9f3eff1a447d6153",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **c**, run `frontier-29`

You are the group Alpha for batches **4**, **6**, **7**: 3 A/B pair(s), 6 page(s), 94 item(s), 4 open rejection(s) over 4 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-29-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `the-maximal-function-and-lebesgue-differentiation` | A | measure-theory | 288.033 | `the-duality-of-lp-and-lq-examples` |
| 4 | `the-maximal-function-and-lebesgue-differentiation-examples` | B | measure-theory | 288.034 | `the-maximal-function-and-lebesgue-differentiation` |
| 6 | `probability-spaces-random-variables-and-expectation` | A | probability | 288.097 | `tempered-distributions-and-the-fourier-transform-examples` |
| 6 | `probability-spaces-random-variables-and-expectation-examples` | B | probability | 288.098 | `probability-spaces-random-variables-and-expectation` |
| 7 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | A | fourier-analysis | 288.14002 | `itos-formula-and-brownian-martingales-examples`, `density-separability-and-convolution-in-lp` |
| 7 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples` | B | fourier-analysis | 288.14004 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-maximal-function-and-lebesgue-differentiation` — The Maximal Function and Lebesgue Differentiation (25 item(s))

- `def-locally-integrable-function-on-r-n` · definition — A locally integrable function on $\mathbb{R}^n$
- `lem-euclidean-balls-have-positive-finite-lebesgue-measure` · lemma — Euclidean balls have positive finite Lebesgue measure
- `def-ball-average-operator-on-r-n` · definition — The average of a locally integrable function over a Euclidean ball
- `def-centered-and-uncentered-hardy-littlewood-maximal-functions` · definition — The centered and uncentered Hardy-Littlewood maximal functions
- `def-sublinear-operator-weak-and-strong-type-p-q` · definition — Sublinear operators and weak or strong type $(p,q)$ bounds
- `def-lebesgue-point-and-lebesgue-set` · definition — Lebesgue points and the Lebesgue set of an $L^1_{loc}$ class
- `def-density-of-a-measurable-set-at-a-point` · definition — Density of a measurable set at a point
- `def-family-shrinking-nicely-to-a-point` · definition — A family shrinking nicely to a point
- `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates` · theorem — Vitali covering lemma for Euclidean balls with fivefold dilates
- `prop-ball-average-is-continuous-in-centre-and-radius` · proposition — Ball averages vary continuously with the centre and radius
- `thm-centered-hardy-littlewood-maximal-function-is-borel-measurable` · theorem — The centered Hardy-Littlewood maximal function is Borel measurable
- `prop-centered-and-uncentered-maximal-functions-are-comparable` · proposition — The centered and uncentered maximal functions are pointwise comparable
- `thm-hardy-littlewood-maximal-inequality-for-balls` · theorem — The centered Hardy-Littlewood maximal operator is weak type $(1,1)$
- `prop-hardy-littlewood-maximal-function-is-l-infinity-bounded` · proposition — The centered maximal operator is bounded on $L^\infty$
- `thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity` · theorem — Marcinkiewicz interpolation from weak $(1,1)$ and strong $(\infty,\infty)$
- `cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded` · corollary — The centered maximal operator is bounded on $L^p(\mathbb{R}^n)$ for $1<p<\infty$
- `thm-riesz-thorin-interpolation` · theorem — Riesz-Thorin interpolation theorem
- `lem-continuous-compactly-supported-functions-differentiate-by-ball-averages` · lemma — Continuous compactly supported functions are recovered by small ball averages
- `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n` · theorem — Lebesgue differentiation theorem on $\mathbb{R}^n$
- `thm-almost-every-point-is-a-lebesgue-point` · theorem — Almost every point is a Lebesgue point of a locally integrable function
- `thm-lebesgue-density-theorem` · theorem — Lebesgue density theorem
- `thm-differentiation-along-families-shrinking-nicely` · theorem — Differentiation holds along families shrinking nicely
- `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` · theorem — Differentiation of sigma-finite Borel measures finite on compact sets
- `thm-first-fundamental-theorem-of-calculus-for-l-one` · theorem — The indefinite integral of an $L^1$ function is differentiable almost everywhere
- `cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one` · counterexample — The Hardy-Littlewood maximal operator is not strong type $(1,1)$

### `the-maximal-function-and-lebesgue-differentiation-examples` — The Maximal Function and Lebesgue Differentiation — Examples (9 item(s))

- `ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r` · example — The centered maximal function of $\mathbf{1}_{[0,1]}$ on $\mathbb{R}$
- `cex-the-unit-interval-indicator-has-nonintegrable-maximal-function` · counterexample — The maximal function of $\mathbf{1}_{[0,1]}$ is not integrable
- `ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set` · example — A unit-mass spike has a large maximal superlevel set
- `ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r` · example — The $L^1_{loc}$ class of $\mathbf{1}_{\mathbb{Q}}$ has every point as a Lebesgue point
- `ex-an-interval-endpoint-is-not-a-density-point` · example — An endpoint of an interval has density one half, not one
- `ex-a-positive-measure-compact-set-can-miss-part-of-every-interval` · example — A positive-measure compact set can miss part of every interval
- `ex-steinhaus-follows-from-the-density-theorem` · example — Steinhaus follows in two lines from the density theorem
- `fs-there-is-a-measurable-set-with-density-one-half-in-every-interval` · false-statement — FALSE: some measurable set has density one half in every interval
- `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set` · example — A locally integrable function can fail to differentiate on a null set

### `probability-spaces-random-variables-and-expectation` — Probability Spaces Random Variables and Expectation (30 item(s))

- `lem-probability-measure-basic-identities` · lemma — Basic identities for a probability measure
- `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces` · theorem — Finite probability spaces are exactly finite full-power-set probability spaces
- `rem-finite-probability-space-definition-agreement` · remark — Agreement with the published finite probability-space definition
- `def-random-element-and-real-random-variable` · definition — Random elements and real random variables
- `lem-finite-random-variables-are-measurable` · lemma — Finite random variables are measurable
- `def-law-or-distribution-of-a-random-element` · definition — Law or distribution of a random element
- `lem-law-of-a-random-element-is-a-probability-measure` · lemma — The law of a random element is a probability measure
- `lem-laws-commute-with-measurable-maps` · lemma — Laws commute with measurable maps
- `def-cumulative-distribution-function-of-a-random-variable` · definition — Cumulative distribution function of a real random variable
- `thm-probability-law-and-distribution-function-correspondence` · theorem — Probability laws correspond to distribution functions
- `def-atom-and-continuity-point-of-a-law` · definition — Atoms and continuity points of a law
- `def-expectation-of-a-nonnegative-or-integrable-random-variable` · definition — Expectation of a nonnegative or integrable random variable
- `lem-expectation-is-independent-of-the-ae-representative` · lemma — Expectation depends only on the almost-everywhere class
- `thm-change-of-variables-for-expectation` · theorem — Change of variables for expectation
- `cor-expectation-agrees-with-the-finite-weighted-sum` · corollary — Expectation agrees with the published finite weighted sum
- `cor-expectation-of-an-indicator-is-probability` · corollary — The expectation of an indicator is the probability of the event
- `cor-layer-cake-formulas-for-random-variables` · corollary — Layer-cake formulas for random variables
- `cor-expectation-linearity-monotonicity-and-modulus-bound` · corollary — Linearity, monotonicity, and the modulus bound for expectation
- `def-moments-variance-and-covariance` · definition — Moments, variance, and covariance on a probability space
- `lem-variance-and-covariance-identities-for-random-variables` · lemma — Variance and covariance identities for random variables
- `thm-jensen-inequality-for-expectation` · theorem — Jensen's inequality for expectation
- `cor-markov-inequality-for-random-variables` · corollary — Markov's inequality for random variables
- `cor-chebyshev-inequality-for-random-variables` · corollary — Chebyshev's inequality for random variables
- `cor-holder-inequality-for-random-variables` · corollary — Holder's inequality for random variables
- `cor-cauchy-schwarz-for-random-variables` · corollary — Cauchy-Schwarz for random variables
- `cor-lyapunov-moment-inequality-on-a-probability-space` · corollary — Lyapunov's moment inequality on a probability space
- `cor-second-moment-positive-probability-bound` · corollary — The second-moment lower bound for positive probability
- `rem-general-inequalities-restrict-to-the-published-finite-ones` · remark — The general inequalities restrict to the published finite ones
- `thm-normal-equations-for-best-affine-l2-prediction` · theorem — Normal equations for best affine $L^2$ prediction
- `cor-best-affine-predictor-from-one-random-variable` · corollary — Best affine prediction from one random variable

### `probability-spaces-random-variables-and-expectation-examples` — Probability Spaces Random Variables and Expectation — Examples (11 item(s))

- `ex-countable-probability-space-with-geometric-weights` · example — A countable probability space with geometric weights
- `ex-uniform-random-variable-on-zero-one` · example — The uniform random variable on [0,1]
- `ex-exponential-random-variable-from-its-tail` · example — Recovering an exponential law from its tail
- `ex-discrete-continuous-and-mixed-distribution-functions` · example — Discrete, continuous, and mixed distribution functions
- `ex-expectation-under-a-measurable-transformation` · example — Expectation under a measurable transformation
- `ex-jensen-for-logarithm-and-exponential` · example — Jensen for logarithm and exponential
- `ex-markov-and-chebyshev-sharpness` · example — Markov and Chebyshev sharpness
- `cex-a-random-variable-need-not-have-a-finite-expectation` · counterexample — A random variable need not have a finite expectation
- `cex-a-distribution-function-need-not-have-a-density` · counterexample — A distribution function need not have a density
- `cex-equality-almost-surely-is-not-pointwise-equality` · counterexample — Equality almost surely is not pointwise equality
- `ex-bertrand-chord-paradox-is-a-model-specification-problem` · example — Bertrand's chord paradox is a model-specification problem

### `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` — Dirichlet Kernel Localisation and Pointwise Fourier Convergence (14 item(s))

- `def-period-one-fourier-coefficients-partial-sums-and-convolution` · definition — Period-one Fourier coefficients, partial sums, and convolution on the torus
- `def-dirichlet-and-fejer-kernels` · definition — Dirichlet and Fejer kernels
- `lem-fourier-partial-sums-are-dirichlet-convolutions` · lemma — Fourier partial sums are Dirichlet convolutions
- `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel` · lemma — Closed form and size bounds for the Dirichlet kernel
- `lem-step-functions-have-vanishing-torus-fourier-coefficients` · lemma — Step functions on one period have vanishing Fourier coefficients
- `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` · lemma — Step functions on one period are dense in L^1 on the torus
- `thm-riemann-lebesgue-lemma-for-fourier-coefficients` · theorem — Riemann-Lebesgue lemma for Fourier coefficients
- `lem-symmetric-difference-formula-for-fourier-partial-sums` · lemma — Symmetric difference formula for Fourier partial sums
- `thm-riemann-localisation-principle-for-fourier-series` · theorem — Riemann localisation principle for Fourier series
- `thm-dini-pointwise-convergence-criterion-for-fourier-series` · theorem — Dini pointwise convergence criterion for Fourier series
- `cor-local-holder-regularity-implies-fourier-convergence-at-a-point` · corollary — Local Holder regularity implies Fourier convergence at a point
- `lem-bounded-variation-gives-one-sided-dirichlet-integrability` · lemma — Bounded variation gives one-sided Dirichlet integrability
- `thm-dirichlet-jordan-pointwise-convergence` · theorem — Dirichlet-Jordan pointwise convergence
- `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values` · corollary — Piecewise C^1 Fourier series converges to midpoint values

### `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples` — Dirichlet Kernel Localisation and Pointwise Fourier Convergence — Examples (5 item(s))

- `ex-dirichlet-kernel-at-zero-and-away-from-zero` · example — The Dirichlet kernel at zero and away from zero
- `thm-lebesgue-constants-grow-logarithmically` · theorem — Lebesgue constants grow logarithmically
- `ex-fourier-partial-sums-of-the-sawtooth` · example — Fourier partial sums of the sawtooth
- `ex-localisation-for-functions-equal-on-an-arc` · example — Localisation for functions equal on an arc
- `cex-continuity-alone-does-not-satisfy-a-dini-modulus` · counterexample — Continuity alone does not satisfy a Dini modulus

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
| `cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `44e135c6827309a129b632f93be092830abd6390eb33d86570ccc56ea855e534` |
| `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set` | `the-maximal-function-and-lebesgue-differentiation-examples` | gpt-5.6-terra | `af9a6aafe6dd4d5fe6added31b8e98ac2c674370673b581283f5b261239b706f` |
| `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `6afa7c56709af40f083454f259cdd641657a3272482186f7d2fb9714bef4bec8` |
| `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `20a74aa2b2aa2abd907256c819439d3c3d3eda2fe736a7ea9f3eff1a447d6153` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-29`

Read `research/frontier-29-judge-closure.json`,
`research/frontier-29-judge.jsonl`,
`research/frontier-29-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-29-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-29-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-29-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
