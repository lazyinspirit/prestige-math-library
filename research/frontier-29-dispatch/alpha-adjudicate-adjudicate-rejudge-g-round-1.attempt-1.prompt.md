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
group work, `research/frontier-29-alpha-groups.json` is the assignment: it permits at
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

run: frontier-29
role: alpha-adjudicate
label: adjudicate-rejudge-g-round-1

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
  "group": "g",
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
      "id": "cex-cook-levin-enumerates-all-branches",
      "scope": "run",
      "owner": "g"
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
      "id": "thm-rice-shapiro-positive-information-direction",
      "scope": "run",
      "owner": "g"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-cook-levin-enumerates-all-branches",
      "model": "gpt-5.6-terra",
      "context_sha256": "f83adb0a28c878949c2998cf70a644244e21d81cdb3f6d05bbeaff904348e3bf",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs",
      "model": "gpt-5.6-terra",
      "context_sha256": "282154623706b28e46cf048a766c42a56e2235fb3202de7a7aafe7fc990e3f9d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-majority-error-bound-from-chebyshev",
      "model": "gpt-5.6-terra",
      "context_sha256": "d29a4237b879fb08625f7e2db4ca6c9c33ff0ffa2b5077163381f38b039ad3d5",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-rice-shapiro-positive-information-direction",
      "model": "gpt-5.6-terra",
      "context_sha256": "2e1967f45e53c7a16d50f922276c304d9e2a7cc04711166588baded9e5aa5dcc",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **g**, run `frontier-29`

You are the group Alpha for batches **18**, **19**: 4 A/B pair(s), 8 page(s), 78 item(s), 4 open rejection(s) over 4 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 18 | `computable-reductions-and-rices-theorem` | A | computability-theory | 605 | `diagonalization-and-the-halting-problem` |
| 18 | `computable-reductions-and-rices-theorem-examples` | B | computability-theory | 606 | `computable-reductions-and-rices-theorem` |
| 18 | `the-cook-levin-theorem` | A | computability-theory | 621 | `p-np-conp-and-polynomial-reductions` |
| 18 | `the-cook-levin-theorem-examples` | B | computability-theory | 622 | `the-cook-levin-theorem` |
| 19 | `space-complexity-savitch-and-tqbf` | A | computability-theory | 625 | `p-np-conp-and-polynomial-reductions`, `graphs-walks-and-connectivity` |
| 19 | `space-complexity-savitch-and-tqbf-examples` | B | computability-theory | 626 | `space-complexity-savitch-and-tqbf` |
| 19 | `randomized-complexity-and-amplification` | A | computability-theory | 635 | `p-np-conp-and-polynomial-reductions`, `finite-probability-spaces-and-random-variables` |
| 19 | `randomized-complexity-and-amplification-examples` | B | computability-theory | 636 | `randomized-complexity-and-amplification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `computable-reductions-and-rices-theorem` — Computable Reductions and Rice's Theorem (16 item(s))

- `def-computable-many-one-reduction` · definition — Computable many-one reductions between languages
- `lem-many-one-reducibility-is-a-preorder` · lemma — Computable many-one reducibility is reflexive and transitive
- `thm-many-one-reductions-transfer-decidability-and-recognizability` · theorem — Computable many-one reductions transfer decidability and recognizability backward
- `def-ce-hardness-and-completeness` · definition — Computably enumerable hardness and completeness under computable many-one reductions
- `thm-machine-acceptance-is-ce-complete` · theorem — The Turing-machine acceptance problem is computably enumerable complete
- `def-turing-reduction` · definition — Turing reductions via oracle deciders
- `lem-many-one-implies-turing-reduction` · lemma — Every computable many-one reduction induces a Turing reduction
- `prop-the-converse-fails` · proposition — Turing reducibility is strictly weaker than computable many-one reducibility
- `def-index-set-and-extensional-machine-property` · definition — Index sets and extensional properties of Turing-machine languages
- `lem-rice-witness-machine-construction` · lemma — A nontrivial extensional property admits a uniform witness machine construction
- `thm-rices-theorem` · theorem — Every nontrivial extensional property of Turing-machine languages is undecidable
- `cor-standard-semantic-machine-properties-are-undecidable` · corollary — Standard semantic properties such as emptiness, finiteness, regularity, and context-freedom are undecidable
- `thm-rice-shapiro-positive-information-direction` · theorem — Recognizable extensional properties are positively witnessed by finite information
- `prop-syntactic-properties-lie-outside-rices-theorem` · proposition — Syntactic machine properties lie outside the scope of Rice's theorem
- `fs-reductions-may-reverse-yes-and-no` · false-statement — FALSE: a valid many-one reduction may reverse yes-instances and no-instances
- `fs-rices-theorem-applies-to-state-count` · false-statement — FALSE: Rice's theorem applies to having at most a fixed number of states

### `computable-reductions-and-rices-theorem-examples` — Computable Reductions and Rice's Theorem: Examples and Counterexamples (3 item(s))

- `ex-many-one-reductions-transfer-decidability-and-recognizability` · example — Using A_TM ≤m E_TM^c to transfer undecidability and recognizability information
- `ex-syntactic-properties-lie-outside-rices-theorem` · example — Adding an unreachable state changes syntax without changing the recognized language
- `cex-reductions-may-reverse-yes-and-no` · counterexample — A reduction to the complement is not a reduction to the original target

### `the-cook-levin-theorem` — The Cook--Levin Theorem (16 item(s))

- `def-boolean-formula-cnf-and-sat` · definition — Boolean formulas, conjunctive normal form, and the satisfiability language SAT
- `prop-sat-is-in-np` · proposition — SAT lies in NP
- `def-bounded-computation-tableau` · definition — A bounded computation tableau for a nondeterministic Turing-machine run
- `lem-tableau-cell-alphabet-is-constant` · lemma — For a fixed machine, each tableau cell ranges over a constant-size extended alphabet
- `def-local-tableau-window` · definition — Local 2×3 tableau windows and legality
- `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal` · lemma — A tableau is legal exactly when every local window and boundary condition is legal
- `lem-exactly-one-symbol-constraints-have-polynomial-size` · lemma — The exactly-one-symbol constraints have polynomial size
- `lem-start-accept-and-transition-constraints-have-polynomial-size` · lemma — The start, accept, and transition constraints have polynomial size
- `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` · lemma — The Cook--Levin formula is satisfiable if and only if an accepting bounded tableau exists
- `lem-cook-levin-map-is-polynomial-time` · lemma — The Cook--Levin reduction map is computable in polynomial time
- `thm-cook-levin-sat-is-np-complete` · theorem — SAT is NP-complete
- `def-tseitin-extension-variable` · definition — Tseitin extension variables for subformulas
- `lem-tseitin-transformation-is-linear-size-and-equisatisfiable` · lemma — The Tseitin transformation has linear size and preserves satisfiability
- `thm-three-sat-is-np-complete` · theorem — 3-SAT is NP-complete
- `fs-cook-levin-enumerates-all-branches` · false-statement — FALSE: the Cook--Levin reduction enumerates all nondeterministic branches
- `fs-naive-distribution-to-cnf-is-always-polynomial` · false-statement — FALSE: distributing an arbitrary formula into CNF always has polynomial size

### `the-cook-levin-theorem-examples` — The Cook--Levin Theorem: Examples and Counterexamples (3 item(s))

- `ex-tableau-cell-alphabet-is-constant` · example — Counting the constant-size extended alphabet for a fixed nondeterministic machine
- `ex-three-sat-is-np-complete` · example — Converting a small Boolean formula to equisatisfiable 3-CNF with extension variables
- `cex-cook-levin-enumerates-all-branches` · counterexample — A machine with two branches shows that one satisfying tableau need not encode every branch

### `space-complexity-savitch-and-tqbf` — Space Complexity, Savitch's Theorem, and TQBF (17 item(s))

- `def-pspace-and-npspace` · definition — The classes PSPACE and NPSPACE
- `lem-space-bounded-machines-have-exponentially-many-configurations` · lemma — A machine using space s(n) has at most exponentially many configurations
- `def-bounded-reachability-recursion` · definition — The bounded reachability recursion for directed paths of length at most 2^i
- `lem-bounded-reachability-recursion-is-correct` · lemma — The bounded reachability recursion is correct
- `lem-bounded-reachability-uses-logarithmic-recursion-depth` · lemma — The bounded reachability recursion uses logarithmic recursion depth
- `thm-savitchs-theorem` · theorem — Savitch's theorem: NSPACE(s(n)) is contained in DSPACE(s(n)^2)
- `cor-pspace-equals-npspace-and-is-closed-under-complement` · corollary — PSPACE equals NPSPACE and is closed under complement
- `def-quantified-boolean-formula-and-tqbf` · definition — Quantified Boolean formulas and the language TQBF
- `prop-tqbf-is-in-pspace` · proposition — TQBF is in PSPACE
- `def-reachable-configuration-formula` · definition — The quantified formula expressing reachability between two configurations
- `lem-quantifier-reuse-keeps-reachability-formulas-polynomial` · lemma — Quantifier reuse keeps the reachability formulas polynomial in size
- `thm-tqbf-is-pspace-complete` · theorem — TQBF is PSPACE-complete
- `def-quantified-formula-game` · definition — The quantified formula game for a quantified Boolean formula
- `thm-tqbf-truth-iff-existential-player-has-a-winning-strategy` · theorem — A quantified Boolean formula is true if and only if the existential player has a winning strategy in its game
- `def-alternating-polynomial-time` · definition — Alternating polynomial time and the class AP
- `thm-ap-equals-pspace` · theorem — AP equals PSPACE
- `fs-savitch-stores-the-whole-configuration-graph` · false-statement — FALSE: Savitch's algorithm stores the whole configuration graph

### `space-complexity-savitch-and-tqbf-examples` — Space Complexity, Savitch's Theorem, and TQBF: Examples and Counterexamples (3 item(s))

- `ex-bounded-reachability-recursion-is-correct` · example — A four-vertex digraph where the bounded reachability recursion finds a path via a midpoint
- `ex-ap-equals-pspace` · example — An alternating machine for a quantified Boolean formula
- `cex-savitch-stores-the-whole-configuration-graph` · counterexample — A Savitch recursion that never materializes the full configuration graph

### `randomized-complexity-and-amplification` — Randomized Complexity and Amplification (17 item(s))

- `def-probabilistic-polynomial-time-machine` · definition — Probabilistic polynomial-time Turing machines
- `def-rp-corp-zpp-bpp-and-pp` · definition — The classes RP, coRP, ZPP, BPP, and PP
- `thm-zpp-equals-rp-intersection-corp` · theorem — ZPP equals RP intersection coRP
- `lem-majority-error-bound-from-chebyshev` · lemma — Chebyshev bounds the majority error of repeated Bernoulli trials
- `thm-bpp-amplification-to-inverse-polynomial-error` · theorem — BPP amplification to inverse-polynomial error
- `lem-chernoff-bound-for-bernoulli-trials` · lemma — A Chernoff bound for sums of independent Bernoulli trials
- `thm-bpp-amplification-to-exponentially-small-error` · theorem — BPP amplification to exponentially small error
- `thm-rp-one-sided-amplification` · theorem — RP admits one-sided amplification to exponentially small error
- `thm-adleman-bpp-is-contained-in-p-poly` · theorem — Adleman's theorem: BPP is contained in P/poly
- `def-pairwise-independent-hash-family` · definition — Pairwise independent hash families
- `lem-affine-finite-field-hashes-are-pairwise-independent` · lemma — Affine maps over a finite field form a pairwise independent hash family
- `thm-freivalds-matrix-product-verification` · theorem — Freivalds' algorithm verifies a matrix product in randomized polynomial time with one-sided error
- `def-polynomial-identity-testing` · definition — Polynomial identity testing
- `thm-schwartz-zippel-lemma` · theorem — The Schwartz-Zippel lemma
- `cor-pit-is-in-corp` · corollary — Polynomial identity testing is in coRP
- `fs-reusing-random-bits-amplifies-success` · false-statement — FALSE: reusing the same random bits amplifies success
- `fs-pp-has-bounded-error-away-from-one-half` · false-statement — FALSE: every PP algorithm has bounded error separated from one half by a fixed constant

### `randomized-complexity-and-amplification-examples` — Randomized Complexity and Amplification: Examples and Counterexamples (3 item(s))

- `ex-majority-error-bound-from-chebyshev` · example — A concrete majority-vote error estimate from Chebyshev's inequality
- `ex-pit-is-in-corp` · example — A random evaluation test that separates the zero polynomial from x^2-y^2
- `cex-reusing-random-bits-amplifies-success` · counterexample — Repeating a randomized test with the same coin string gives no amplification

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
| `cex-cook-levin-enumerates-all-branches` | `the-cook-levin-theorem-examples` | gpt-5.6-terra | `f83adb0a28c878949c2998cf70a644244e21d81cdb3f6d05bbeaff904348e3bf` |
| `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` | `the-cook-levin-theorem` | gpt-5.6-terra | `282154623706b28e46cf048a766c42a56e2235fb3202de7a7aafe7fc990e3f9d` |
| `lem-majority-error-bound-from-chebyshev` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `d29a4237b879fb08625f7e2db4ca6c9c33ff0ffa2b5077163381f38b039ad3d5` |
| `thm-rice-shapiro-positive-information-direction` | `computable-reductions-and-rices-theorem` | gpt-5.6-terra | `2e1967f45e53c7a16d50f922276c304d9e2a7cc04711166588baded9e5aa5dcc` |

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
