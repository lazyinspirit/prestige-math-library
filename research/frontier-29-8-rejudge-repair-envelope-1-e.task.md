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
  "group": "e",
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
      "id": "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators",
      "scope": "run",
      "owner": "e"
    }
  ],
  "live_tuples": [
    {
      "id": "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators",
      "model": "gpt-5.6-terra",
      "context_sha256": "081573b18fd5390fb4fe36af179a6ad5e93dd5b21ea5ab41d676126e2f8f0691",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **e**, run `frontier-29`

You are the group Alpha for batches **5**, **16**: 2 A/B pair(s), 4 page(s), 83 item(s), 1 open rejection(s) over 1 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 5 | `finite-dimensional-normed-spaces-and-riesz-lemma` | A | functional-analysis | 288.051 | `bounded-linear-operators-and-quotient-spaces-examples` |
| 5 | `finite-dimensional-normed-spaces-and-riesz-lemma-examples` | B | functional-analysis | 288.052 | `finite-dimensional-normed-spaces-and-riesz-lemma` |
| 16 | `vector-fields-flows-and-lie-derivatives` | A | differential-geometry | 459 | `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `euclidean-ordinary-differential-equations-with-smooth-dependence` |
| 16 | `vector-fields-flows-and-lie-derivatives-examples` | B | differential-geometry | 460 | `vector-fields-flows-and-lie-derivatives` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-dimensional-normed-spaces-and-riesz-lemma` — Finite Dimensional Normed Spaces and Riesz Lemma (16 item(s))

- `thm-coordinate-map-for-a-finite-dimensional-normed-space` · theorem — A chosen algebraic basis identifies a finite-dimensional normed space with a coordinate space
- `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent` · theorem — All norms on a finite-dimensional complex normed space are equivalent
- `cor-finite-dimensional-normed-spaces-are-banach` · corollary — Every finite-dimensional normed space is Banach
- `cor-finite-dimensional-subspaces-are-closed` · corollary — A finite-dimensional normed subspace is closed
- `cor-linear-maps-with-finite-dimensional-domain-are-bounded` · corollary — A linear map from a finite-dimensional normed space is bounded
- `lem-riesz-lemma` · lemma — Riesz lemma
- `thm-locally-compact-normed-space-iff-finite-dimensional` · theorem — A normed space is locally compact if and only if it is finite-dimensional
- `lem-dependent-choice-riesz-separated-unit-sequence` · lemma — Under dependent choice, Riesz lemma builds an infinite separated sequence in the unit sphere
- `thm-closed-unit-ball-compact-iff-finite-dimensional` · theorem — The closed unit ball is compact if and only if the normed space is finite-dimensional
- `cor-infinite-dimensional-closed-unit-ball-is-not-compact` · corollary — In an infinite-dimensional normed space the closed unit ball is not compact
- `cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact` · corollary — On an infinite-dimensional normed space, the identity operator is not compact
- `thm-banach-space-no-countably-infinite-hamel-basis` · theorem — A Banach space has no countably infinite Hamel basis
- `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost` · remark — Why the unrestricted complete-metric Baire theorem would overstate the choice cost here
- `def-kuratowski-distance-map` · definition — The based Kuratowski distance map into bounded continuous functions
- `thm-kuratowski-distance-map-is-an-isometry` · theorem — The based Kuratowski distance map is an isometric embedding
- `thm-kuratowski-wojdyslawski-embedding` · theorem — Kuratowski-Wojdyslawski embedding theorem

### `finite-dimensional-normed-spaces-and-riesz-lemma-examples` — Finite Dimensional Normed Spaces and Riesz Lemma — Examples (7 item(s))

- `ex-explicit-equivalence-constants-for-standard-norms-on-kn` · example — Explicit comparison constants for the standard norms on K^n
- `ex-an-infinite-separated-subset-of-the-unit-sphere` · example — An infinite separated subset of the unit sphere
- `cex-heine-borel-fails-in-ell-two` · counterexample — Heine-Borel fails in ell^2
- `cex-polynomial-space-admits-no-complete-norm` · counterexample — The polynomial space admits no complete norm
- `ex-kuratowski-embedding-of-a-finite-metric-space` · example — The Kuratowski embedding of a finite metric space
- `rem-discontinuous-functionals-on-banach-spaces-and-choice` · remark — Discontinuous linear functionals on Banach spaces are not available in ZF + DC
- `ex-choice-free-discontinuous-functional-on-c00` · example — A choice-free discontinuous linear functional on c_00

### `vector-fields-flows-and-lie-derivatives` — Vector Fields Flows and Lie Derivatives (50 item(s))

- `def-smooth-vector-field-as-a-tangent-bundle-section` · definition — A smooth vector field is a smooth section of the tangent bundle
- `prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components` · proposition — Smoothness of a vector field is equivalent to smooth coordinate components
- `def-action-of-a-vector-field-on-smooth-functions` · definition — The action of a vector field on smooth functions
- `prop-a-vector-field-acts-as-a-derivation-of-smooth-functions` · proposition — A vector field acts as a derivation of smooth functions
- `thm-derivations-of-smooth-functions-are-smooth-vector-fields` · theorem — Derivations of smooth functions are exactly smooth vector fields
- `def-f-related-vector-fields` · definition — F-related vector fields
- `prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law` · proposition — F-relatedness is equivalent to the derivation intertwining law
- `def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism` · definition — Pushforwards and pullbacks of vector fields by a diffeomorphism
- `lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed` · lemma — A vector field along an embedded submanifold extends to a neighbourhood and globally when the submanifold is closed
- `prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field` · proposition — A vector field tangent to an embedded submanifold restricts to a vector field on it
- `def-lie-bracket-of-smooth-vector-fields` · definition — The Lie bracket of smooth vector fields
- `lem-the-commutator-of-vector-field-derivations-is-a-derivation` · lemma — The commutator of vector-field derivations is again a derivation
- `prop-coordinate-formula-for-the-lie-bracket` · proposition — Coordinate formula for the Lie bracket
- `thm-vector-fields-form-a-lie-algebra` · theorem — Smooth vector fields form a Lie algebra under the Lie bracket
- `prop-leibniz-rules-for-the-lie-bracket-with-function-multiples` · proposition — Leibniz rules for the Lie bracket with function multiples
- `prop-related-vector-fields-have-related-lie-brackets` · proposition — Related vector fields have related Lie brackets
- `cor-diffeomorphism-pushforward-preserves-lie-brackets` · corollary — Diffeomorphism pushforward preserves Lie brackets
- `prop-coordinate-vector-fields-commute` · proposition — Coordinate vector fields commute
- `def-integral-curve-of-a-vector-field` · definition — Integral curves of a vector field
- `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves` · theorem — Local existence, uniqueness, and smooth dependence for manifold integral curves
- `thm-unique-maximal-integral-curve-through-each-point` · theorem — Through each point there is a unique maximal integral curve
- `def-complete-vector-field` · definition — Complete vector fields
- `def-local-and-global-flow` · definition — Local and global flows generated by a vector field
- `thm-fundamental-theorem-on-flows` · theorem — The fundamental theorem on flows
- `prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains` · proposition — Time-t flow maps are diffeomorphisms between open domains
- `prop-the-generating-vector-field-is-invariant-under-its-flow` · proposition — The generating vector field is invariant under its own flow
- `prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global` · proposition — A vector field is complete if and only if its flow is global
- `thm-compactly-supported-vector-fields-are-complete` · theorem — Compactly supported smooth vector fields are complete
- `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete` · corollary — Every smooth vector field on a compact manifold is complete
- `prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it` · proposition — The flow of a vector field tangent to a closed embedded submanifold preserves it
- `thm-flow-box-theorem` · theorem — The flow-box theorem
- `cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves` · corollary — A nonvanishing vector field has locally parallel integral curves
- `def-flowout-of-an-embedded-submanifold` · definition — The flowout of an embedded submanifold by a vector field
- `thm-flowout-theorem` · theorem — The flowout theorem
- `def-lie-derivative-of-a-function` · definition — The Lie derivative of a function
- `def-lie-derivative-of-a-vector-field` · definition — The Lie derivative of a vector field
- `thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket` · theorem — The Lie derivative of a vector field equals the Lie bracket
- `prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes` · proposition — A vector field is flow-invariant if and only if its Lie derivative vanishes
- `thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute` · theorem — Two vector fields commute if and only if their local flows commute
- `prop-related-complete-vector-fields-have-intertwined-flows` · proposition — Related complete vector fields have intertwined flows
- `def-time-dependent-vector-field-and-evolution-operator` · definition — Time-dependent vector fields and their evolution operators
- `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators` · theorem — Time-dependent vector fields have local smooth evolution operators
- `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law` · proposition — Time-dependent evolution satisfies the two-time cocycle law
- `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval` · theorem — Compactly supported time-dependent vector fields have global evolution on a compact time interval
- `fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field` · false-statement — FALSE: every pointwise assignment of a tangent vector is a smooth vector field
- `fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map` · false-statement — FALSE: every smooth vector field can be pushed forward by every smooth map
- `fs-every-smooth-vector-field-is-complete` · false-statement — FALSE: every smooth vector field is complete
- `fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field` · false-statement — FALSE: the Lie bracket is C^infty-linear in each vector-field entry
- `fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p` · false-statement — FALSE: the point values X_p and Y_p determine the bracket value [X,Y]_p
- `fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent` · false-statement — FALSE: a vanishing Lie bracket forces the vector fields to be pointwise linearly dependent

### `vector-fields-flows-and-lie-derivatives-examples` — Vector Fields Flows and Lie Derivatives — Examples (10 item(s))

- `ex-constant-vector-fields-and-translation-flows` · example — Constant vector fields have translation flows
- `ex-the-radial-vector-field-and-dilation-flow` · example — The radial vector field has the dilation flow
- `ex-the-rotation-vector-field-and-circle-flow` · example — The planar rotation field has the circle rotation flow
- `ex-a-vector-field-with-finite-time-escape` · example — The vector field x^2 d/dx has finite-time escape
- `ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete` · example — A compactly supported cutoff of an incomplete vector field is complete
- `ex-coordinate-formula-for-a-nonzero-lie-bracket` · example — A coordinate computation of a nonzero Lie bracket
- `ex-commuting-coordinate-fields-and-their-commuting-flows` · example — Commuting coordinate fields have commuting flows
- `cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point` · counterexample — Two pairs of vector fields can agree at a point and still have different bracket values there
- `ex-a-time-dependent-translation-field-and-its-evolution-operator` · example — A time-dependent translation field and its evolution operator
- `ex-the-flow-box-coordinates-for-a-nonconstant-planar-field` · example — Flow-box coordinates for a nonconstant planar field

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
| `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators` | `vector-fields-flows-and-lie-derivatives` | gpt-5.6-terra | `081573b18fd5390fb4fe36af179a6ad5e93dd5b21ea5ab41d676126e2f8f0691` |

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
