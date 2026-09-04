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
label: adjudicate-rejudge-a-round-1

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
  "group": "a",
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
      "id": "cex-not-every-monoidal-category-is-rigid",
      "scope": "run",
      "owner": "a"
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
      "id": "rem-what-is-needed-before-a-trace-can-be-written",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-green-vertex-source-existence-and-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schur-zassenhaus-existence",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-not-every-monoidal-category-is-rigid",
      "model": "gpt-5.6-terra",
      "context_sha256": "c2c972ef4de1e06d74985d2a63dd5bdc2ba83f77e6e95a91e9be32e7bbf0e602",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-pro-p-completion-of-an-abstract-group",
      "model": "gpt-5.6-terra",
      "context_sha256": "89958a316bfa50f50b96b15a585d8b14a1512bb4f835d67a9ba33f94b4585873",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-relative-projectivity",
      "model": "gpt-5.6-terra",
      "context_sha256": "ebd96bb2311862ef0aed1d7e14149df76805b841be18102d0b8e731d514605b6",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-dimension-of-a-vector-space-is-its-linear-dimension",
      "model": "gpt-5.6-terra",
      "context_sha256": "c472fffd419c926827200eb17ffef5e1393976d6e92bbffdd6b6f4f833ac6f5e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-regular-module-of-cp-in-characteristic-p",
      "model": "gpt-5.6-terra",
      "context_sha256": "add0c3f8002c6b3f77cef2c9036ee630f3bbd5d6edeaf2b978a74265b86c9aca",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-a-braiding-suffices-to-define-a-trace",
      "model": "gpt-5.6-terra",
      "context_sha256": "f591905d8feb3cbd3db5cba388978987f646d22675627ea2abca03f71c1ae201",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-left-and-right-duals-of-an-object-are-isomorphic",
      "model": "gpt-5.6-terra",
      "context_sha256": "aceb991e3e5f8eeac72c84f358a59791472fe59581843ff51db02932e8cb8edd",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure",
      "model": "gpt-5.6-terra",
      "context_sha256": "cf93756a55dbe739f894a467c5a32ece56c0904e000959a13522f9561a0a56e1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-zp-is-cyclic-as-an-abstract-group",
      "model": "gpt-5.6-terra",
      "context_sha256": "4c60cafa3fe386eaaac3a72f21be0543060db8551cec6d119f5a7cb6211a2ac1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "rem-what-is-needed-before-a-trace-can-be-written",
      "model": "gpt-5.6-terra",
      "context_sha256": "3128cbf29c8abce10064d44843ed1dc8078e09dcd574be6fb25eb8bb55a09c82",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-green-vertex-source-existence-and-conjugacy",
      "model": "gpt-5.6-terra",
      "context_sha256": "5ad1a47580a1cc07a78900bcb77cc13a47c938b95fedb765a7e717b686f607fd",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras",
      "model": "gpt-5.6-terra",
      "context_sha256": "c66fd133975505c46d865ceec6d6ee216e3c1e1df38dd1efb8e1b4bbd0557e3c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-schur-zassenhaus-existence",
      "model": "gpt-5.6-terra",
      "context_sha256": "e4ba9e945a5e4392f2dd2c78e0343de1582349d2ee596734870c93c9cf8f1c13",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **a**, run `frontier-29`

You are the group Alpha for batches **1**, **2**, **10**: 5 A/B pair(s), 10 page(s), 172 item(s), 13 open rejection(s) over 13 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `group-extensions-complements-and-schur-zassenhaus` | A | group-theory | 71.017 | `small-cancellation-and-dehn-algorithms-examples` |
| 1 | `group-extensions-complements-and-schur-zassenhaus-examples` | B | group-theory | 71.018 | `group-extensions-complements-and-schur-zassenhaus` |
| 1 | `crossed-homomorphisms-complements-and-first-cohomology` | A | group-theory | 365.071 | `grothendieck-spectral-sequences-and-computations-examples`, `group-extensions-complements-and-schur-zassenhaus` |
| 1 | `crossed-homomorphisms-complements-and-first-cohomology-examples` | B | group-theory | 365.072 | `algebraic-extensions-degree-and-finite-fields`, `crossed-homomorphisms-complements-and-first-cohomology` |
| 2 | `modular-representations-and-projective-covers` | A | group-theory | 150.001 | `induced-representations-and-frobenius-reciprocity-examples`, `valuation-rings-and-discrete-valuation-rings`, `inverse-limits-and-noetherian-completion` |
| 2 | `modular-representations-and-projective-covers-examples` | B | group-theory | 150.002 | `modular-representations-and-projective-covers` |
| 2 | `pro-p-groups-and-the-p-adic-integers` | A | group-theory | 302.015 | `inverse-systems-profinite-groups-and-completion-examples` |
| 2 | `pro-p-groups-and-the-p-adic-integers-examples` | B | group-theory | 302.016 | `pro-p-groups-and-the-p-adic-integers` |
| 10 | `duality-and-rigidity-in-monoidal-categories` | A | category-theory | 365.031 | `braided-and-symmetric-monoidal-categories-examples` |
| 10 | `duality-and-rigidity-in-monoidal-categories-examples` | B | category-theory | 365.032 | `duality-and-rigidity-in-monoidal-categories` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `group-extensions-complements-and-schur-zassenhaus` — Group Extensions Complements and Schur Zassenhaus (23 item(s))

- `def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient` · definition — Equivalence of group extensions with fixed kernel and fixed quotient
- `def-morphism-of-group-extensions` · definition — Morphisms of group extensions
- `lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base` · lemma — In a group extension the kernel is normal and the quotient recovers the base
- `def-retraction-of-the-kernel-in-a-group-extension` · definition — A retraction of the kernel in a group extension
- `thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products` · theorem — A group extension splits exactly when it has a complement or a compatible semidirect-product model, and a kernel retraction forces a direct product
- `lem-a-complement-induces-the-conjugation-action-on-the-kernel` · lemma — A complement determines the conjugation action on the kernel
- `prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel` · proposition — A split extension is a direct product exactly when its complement centralizes the kernel
- `lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel` · lemma — A group extension induces a well-defined outer action on its kernel
- `def-abstract-kernel-and-the-general-extension-problem` · definition — Abstract kernels and the general extension problem
- `rem-nonabelian-extension-obstruction-and-h-two-torsor` · remark — Nonabelian extension obstructions live in H^3 and realized classes form an H^2-torsor
- `def-hall-pi-subgroup` · definition — Hall pi-subgroup
- `lem-normal-hall-subgroup-gives-a-coprime-extension` · lemma — A normal Hall subgroup presents the ambient group as an extension of coprime orders
- `thm-schur-zassenhaus-existence` · theorem — Schur-Zassenhaus existence theorem
- `thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable` · theorem — Schur-Zassenhaus conjugacy when the kernel or quotient is solvable
- `rem-schur-zassenhaus-conjugacy-in-full-generality` · remark — The full Schur-Zassenhaus conjugacy theorem
- `cor-extensions-with-coprime-kernel-and-quotient-split` · corollary — Extensions with coprime kernel and quotient split
- `def-complete-group` · definition — Complete group
- `prop-extensions-with-complete-kernel-split-over-the-centralizer` · proposition — If the kernel is complete, the extension splits over its centralizer
- `fs-a-set-theoretic-section-of-an-extension-is-automatically-a-homomorphism` · false-statement — FALSE: a set-theoretic section of an extension is automatically a homomorphism
- `fs-isomorphic-middle-groups-force-equivalent-group-extensions` · false-statement — FALSE: isomorphic middle groups force equivalent extensions with fixed kernel and quotient
- `fs-every-split-group-extension-is-a-direct-product` · false-statement — FALSE: every split group extension is a direct product
- `fs-schur-zassenhaus-says-every-hall-subgroup-is-normal` · false-statement — FALSE: Schur-Zassenhaus says every Hall subgroup is normal
- `fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input` · false-statement — FALSE: Schur-Zassenhaus conjugacy needs no solvability or deeper input

### `group-extensions-complements-and-schur-zassenhaus-examples` — Group Extensions Complements and Schur Zassenhaus — Examples (6 item(s))

- `cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic` · counterexample — A set-theoretic section of C_4 onto C_2 need not be a homomorphism
- `ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two` · example — The dihedral group of order eight is a split extension of C_4 by C_2
- `ex-the-klein-four-extension-of-c-two-by-c-two-is-direct` · example — The split extension C_2 × C_2 of C_2 by C_2 is direct
- `ex-a-four-has-four-complements-to-its-normal-klein-four-subgroup` · example — A_4 has four complements to its normal Klein four subgroup
- `ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate` · example — The three transposition subgroups of S_3 are conjugate complements to A_3
- `cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions` · counterexample — The cyclic group Z/9 supports inequivalent extensions of C_3 by C_3

### `crossed-homomorphisms-complements-and-first-cohomology` — Crossed Homomorphisms Complements and First Cohomology (22 item(s))

- `def-crossed-homomorphism-for-a-g-group` · definition — Crossed homomorphism for a G-group
- `lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group` · lemma — With abelian coefficients, crossed homomorphisms form an abelian group
- `def-principal-crossed-homomorphism-for-abelian-coefficients` · definition — Principal crossed homomorphism for abelian coefficients
- `lem-principal-crossed-homomorphisms-form-a-subgroup` · lemma — Principal crossed homomorphisms form a subgroup
- `def-first-cohomology-via-crossed-homomorphisms` · definition — First cohomology via crossed homomorphisms
- `def-first-group-cohomology-via-inhomogeneous-one-cocycles` · definition — First group cohomology via inhomogeneous one-cocycles
- `thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one` · theorem — The inhomogeneous one-cocycle model agrees with crossed homomorphisms in degree one
- `cor-first-cohomology-for-a-trivial-action-is-hom` · corollary — For a trivial action, first cohomology is Hom
- `cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes` · corollary — For a finite group, uniquely divisible coefficients have trivial first cohomology
- `def-graph-subgroup-in-a-semidirect-product` · definition — The graph subgroup attached to a map into a semidirect product
- `lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism` · lemma — A graph subgroup is a complement exactly for a crossed homomorphism
- `lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism` · lemma — Kernel conjugation by an element of the coefficient group corresponds to a principal crossed homomorphism
- `thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy` · theorem — First cohomology classifies complements up to kernel conjugacy
- `def-first-nonabelian-cohomology-as-a-pointed-set` · definition — First nonabelian cohomology as a pointed set
- `thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set` · theorem — Nonabelian first cohomology classifies complements as a pointed set
- `def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology` · definition — Restriction, inflation, and the quotient conjugation action on first cohomology
- `thm-inflation-restriction-exact-sequence-in-degree-one` · theorem — Inflation-restriction exact sequence in degree one
- `fs-every-crossed-homomorphism-is-an-ordinary-homomorphism` · false-statement — FALSE: every crossed homomorphism is an ordinary homomorphism
- `fs-first-cohomology-with-nonabelian-coefficients-is-a-group` · false-statement — FALSE: first cohomology with nonabelian coefficients is a group
- `fs-first-cohomology-classifies-all-subgroups-of-a-semidirect-product` · false-statement — FALSE: first cohomology classifies all subgroups of a semidirect product
- `fs-whole-semidirect-product-conjugacy-is-the-equivalence-relation-behind-first-cohomology` · false-statement — FALSE: whole-semiproduct conjugacy is the equivalence relation behind first cohomology
- `fs-the-cochain-and-crossed-homomorphism-definitions-of-first-cohomology-agree-automatically` · false-statement — FALSE: the cochain and crossed-homomorphism definitions of first cohomology agree automatically

### `crossed-homomorphisms-complements-and-first-cohomology-examples` — Crossed Homomorphisms Complements and First Cohomology — Examples (6 item(s))

- `ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero` · example — With trivial action, H^1(C_2,C_3) is zero
- `ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator` · example — Crossed homomorphisms from a cyclic group are determined by the value on a generator
- `ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements` · example — The affine group AGL(1,p) has one kernel-conjugacy class of complements to its translation subgroup
- `ex-kernel-conjugate-complements-differ-by-a-principal-crossed-homomorphism` · example — Kernel-conjugate complements differ by a principal crossed homomorphism
- `ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three` · example — With trivial C_2-action on S_3, the nonabelian H^1 pointed set has two classes
- `cex-the-inversion-crossed-homomorphism-of-c-two-to-z-is-not-a-homomorphism` · counterexample — The inversion crossed homomorphism C_2 → Z is not an ordinary homomorphism

### `modular-representations-and-projective-covers` — Modular Representations and Projective Covers (33 item(s))

- `def-p-modular-system` · definition — A p-modular system is a characteristic-zero fraction field over a complete discrete valuation ring with residue field of characteristic p
- `def-splitting-p-modular-system-for-a-finite-group` · definition — A splitting p-modular system for a finite group is a p-modular system whose fraction and residue fields split the needed group algebras
- `def-og-lattice-and-reduction-modulo-the-maximal-ideal` · definition — An OG-lattice is a finite free module over the valuation ring with G-action, and reduction modulo the maximal ideal produces a kG-module
- `lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module` · lemma — Reducing an OG-lattice modulo the maximal ideal gives a finite-dimensional kG-module
- `rem-maschke-failure-in-defining-characteristic` · remark — When the characteristic divides the group order, Maschke can fail and kG need not be semisimple
- `def-jacobson-radical-of-a-finite-dimensional-algebra` · definition — The Jacobson radical of a finite-dimensional algebra is the intersection of its maximal left ideals
- `thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple` · theorem — For a finite-dimensional algebra, the Jacobson radical is nilpotent and the quotient by it is semisimple
- `thm-module-radical-is-jacobson-radical-times-the-module` · theorem — For a finite-dimensional algebra, the module radical is exactly the action of the Jacobson radical
- `thm-nakayama-lemma-for-finite-dimensional-algebras` · theorem — Over a finite-dimensional algebra, a module annihilated modulo its radical is zero, and generators lift from the head
- `lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent` · lemma — For a finite p-group in characteristic p, the augmentation ideal of the group algebra is nilpotent
- `prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra` · proposition — For a finite group and a field of characteristic p, the group algebra is a symmetric Frobenius algebra via the coefficient of the identity
- `cor-finitely-generated-projective-kg-modules-are-injective-and-conversely` · corollary — Over a finite group algebra in defining characteristic, finite-dimensional projective and injective modules coincide
- `def-module-radical-socle-head-and-loewy-series` · definition — The radical, socle, head, and Loewy series of a finite-dimensional module
- `lem-radical-of-a-finite-length-module-is-superfluous` · lemma — For a finite-length module, the radical is a superfluous submodule
- `def-essential-epimorphism-and-projective-cover` · definition — An essential epimorphism is a surjection with superfluous kernel, and a projective cover is a projective source with such a map
- `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras` · theorem — Every finite-dimensional module has a projective cover, unique up to isomorphism over the target
- `thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules` · theorem — Indecomposable projective kG-modules correspond to simple modules through taking the head
- `thm-krull-schmidt-for-finite-dimensional-kg-modules` · theorem — Finite-dimensional kG-modules decompose as finite direct sums of indecomposables uniquely up to order and isomorphism
- `cor-the-regular-module-decomposes-into-projective-indecomposables` · corollary — The regular module is a direct sum of the projective covers of the simple modules, with the split-field multiplicities
- `thm-kg-is-local-iff-g-is-a-p-group` · theorem — For a finite group and a field of characteristic p, the group algebra is local exactly when the group is a p-group
- `cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p` · corollary — A finite p-group has only the trivial simple module over a field of characteristic p
- `prop-normal-p-subgroups-act-trivially-on-simple-modules` · proposition — A normal p-subgroup acts trivially on every simple module in characteristic p
- `prop-restriction-and-induction-preserve-projectives` · proposition — Restriction and induction along a subgroup preserve projective modules
- `def-relative-projectivity` · definition — A module is relatively H-projective when it is a direct summand of one induced from H
- `thm-higman-criterion-for-relative-projectivity` · theorem — Higman's criterion characterizes relative projectivity through the relative trace idempotent test
- `def-vertex-and-source-of-an-indecomposable-module` · definition — A vertex is a minimal p-subgroup for relative projectivity, and a source is an indecomposable inducing summand there
- `thm-green-vertex-source-existence-and-conjugacy` · theorem — Vertices exist for indecomposable modules, are conjugate in G, and sources are conjugate by the appropriate normalizer
- `cor-projective-indecomposable-modules-have-trivial-vertex` · corollary — A projective indecomposable module has trivial vertex
- `fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order` · false-statement — If the field has characteristic p and p divides |G|, then Maschke's theorem still makes kG semisimple
- `fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible` · false-statement — Every reduction modulo p of an ordinary irreducible lattice stays irreducible
- `fs-projective-covers-are-canonical-equalities-rather-than-unique-isomorphism-classes` · false-statement — A module has one literally canonical projective cover, not just a unique isomorphism class over the target
- `fs-a-vertex-is-a-vertex-of-the-cayley-graph` · false-statement — The vertex of an indecomposable module is literally a graph vertex of a Cayley graph
- `fs-projective-and-injective-modules-coincide-over-every-ring` · false-statement — Projective and injective modules coincide over every ring

### `modular-representations-and-projective-covers-examples` — Modular Representations and Projective Covers - Examples (6 item(s))

- `ex-the-regular-module-of-cp-in-characteristic-p` · example — The regular module of Cp in characteristic p is indecomposable with a unique simple quotient
- `ex-the-augmentation-ideal-and-loewy-series-for-kcp` · example — The augmentation ideal and Loewy series of kCp can be written explicitly
- `ex-projective-cover-of-the-trivial-module-for-a-p-group` · example — For a finite p-group, the augmentation map from kP to the trivial module is its projective cover
- `ex-reducing-an-integral-lattice-for-s-three` · example — Reducing a standard integral lattice for S3 modulo 3 produces a reducible kS3-module
- `ex-relative-projectivity-detected-by-higmans-criterion` · example — A permutation-induced summand is detected as relatively projective by Higman's criterion
- `cex-an-ordinary-irreducible-with-reducible-mod-p-reduction` · counterexample — An ordinary irreducible representation can have reducible reduction modulo p

### `pro-p-groups-and-the-p-adic-integers` — Pro P Groups and the P Adic Integers (25 item(s))

- `def-pro-p-group` · definition — A pro-p group is a profinite group that is an inverse limit of finite p-groups
- `def-pro-p-completion-of-an-abstract-group` · definition — The pro-p completion of an abstract group is the inverse limit over its finite p-group quotients
- `thm-topological-characterisation-of-pro-p-groups` · theorem — A topological group is pro-p exactly when it is profinite and has an open normal basis with finite p-group quotients
- `def-p-adic-integers-as-compatible-residue-classes` · definition — The p-adic integers are the compatible residue-class tuples in the inverse limit of Z mod p^n
- `lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group` · lemma — Coordinatewise addition and negation make Zp a topological abelian group
- `def-p-adic-metric-on-zp` · definition — The p-adic metric on Zp is determined by the first coordinate at which two compatible residue systems differ
- `thm-inverse-limit-topology-equals-the-p-adic-metric-topology` · theorem — The inverse-limit topology on Zp agrees with the p-adic metric topology
- `thm-zp-is-compact-hausdorff-totally-disconnected-and-complete` · theorem — Zp is Hausdorff, totally disconnected, and complete, and compact assuming Choice
- `def-canonical-map-from-the-integers-to-zp` · definition — The canonical map from Z to Zp sends an integer to its coherent residue classes modulo p^n
- `thm-the-integers-map-injectively-and-densely-into-zp` · theorem — The canonical map from the integers into Zp is injective and has dense image
- `prop-additive-group-of-zp-is-torsion-free` · proposition — The additive group of Zp is torsion-free
- `prop-zp-is-topologically-generated-by-one` · proposition — The additive topological group of Zp is topologically generated by 1, although it is not abstractly cyclic
- `thm-zp-is-the-pro-p-completion-of-the-integers` · theorem — Zp is the pro-p completion of the integers
- `prop-profinite-completion-of-z-is-the-product-of-all-zp` · proposition — The profinite completion of the integers is the direct product of the p-adic integer groups over all primes
- `def-frattini-subgroup-of-a-profinite-group` · definition — The Frattini subgroup of a profinite group is the intersection of its maximal proper closed subgroups
- `lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open` · lemma — Every maximal proper closed subgroup of a profinite group is open
- `thm-frattini-subgroup-commutes-with-surjective-inverse-limits` · theorem — For surjective inverse systems in the pro-p setting, the Frattini subgroup commutes with the inverse limit
- `thm-frattini-formula-for-finitely-generated-pro-p-groups` · theorem — For a finitely generated pro-p group, the Frattini subgroup is the closure of [G,G]G^p
- `thm-topological-burnside-basis-theorem` · theorem — A subset topologically generates a finitely generated pro-p group exactly when its image spans the Frattini quotient over Fp
- `cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini` · corollary — A homomorphism of finitely generated pro-p groups is surjective exactly when the induced map on Frattini quotients is surjective
- `fs-zp-is-the-profinite-completion-of-z` · false-statement — Zp is the full profinite completion of the integers
- `fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite` · false-statement — Because every coordinate group is finite, Zp is an additive torsion group
- `fs-zp-is-cyclic-as-an-abstract-group` · false-statement — The additive group of Zp is cyclic as an abstract group
- `thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups` · theorem — For a finitely generated pro-p group, the Frattini subgroup equals [G,G]G^p
- `fs-every-profinite-group-is-pro-p-for-some-prime` · false-statement — Every profinite group is pro-p for some prime

### `pro-p-groups-and-the-p-adic-integers-examples` — Pro P Groups and the P Adic Integers - Examples (7 item(s))

- `ex-compatible-p-adic-digit-sequences` · example — A p-adic integer is encoded by a compatible sequence of residue digits
- `ex-convergence-of-partial-p-adic-expansions` · example — The partial sums of a p-adic expansion converge in the inverse-limit topology
- `ex-a-cauchy-sequence-in-the-additive-p-adic-metric` · example — A standard p-adic digit sequence is Cauchy and converges in Zp
- `ex-pro-p-completion-of-a-finite-p-group` · example — A finite p-group is naturally isomorphic to its own pro-p completion
- `ex-frattini-quotient-of-zp` · example — The Frattini quotient of Zp is the one-dimensional vector space Fp
- `ex-topological-generation-in-zp-squared` · example — In Zp squared, topological generation is detected by the Frattini quotient coordinates
- `cex-an-abstractly-dense-proper-subgroup-of-zp` · counterexample — The embedded integers form an abstractly proper but topologically dense subgroup of Zp

### `duality-and-rigidity-in-monoidal-categories` — Duality and Rigidity in Monoidal Categories (37 item(s))

- `def-left-dual-and-right-dual-object` · definition — Left dual and right dual object
- `def-the-zig-zag-identities` · definition — The zig-zag identities
- `rem-which-side-the-word-left-refers-to` · remark — What 'left' refers to in 'left dual'
- `thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual` · theorem — A left dual of an object has that object as a right dual
- `thm-the-unit-is-self-dual` · theorem — The unit is self-dual
- `thm-reversing-the-tensor-product-exchanges-left-and-right-duals` · theorem — Reversing the tensor product exchanges left and right duals
- `thm-duals-are-unique-up-to-a-unique-compatible-isomorphism` · theorem — Duals are unique up to a unique compatible isomorphism
- `thm-duality-yields-adjunctions-of-tensoring-functors` · theorem — Duality yields adjunctions of tensoring functors
- `thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor` · theorem — A dual object in the endofunctor category is an adjoint functor
- `cor-a-second-proof-that-adjoints-are-unique` · corollary — A second proof that adjoints are unique
- `def-rigid-object-and-rigid-monoidal-category` · definition — Rigid object and rigid monoidal category
- `cex-not-every-monoidal-category-is-rigid` · counterexample — Not every monoidal category is rigid
- `thm-finite-dimensional-vector-spaces-are-rigid` · theorem — Finite-dimensional vector spaces are rigid
- `def-the-dual-of-a-morphism` · definition — The dual of a morphism
- `thm-left-duality-is-a-contravariant-antimonoidal-functor` · theorem — Left duality is a contravariant antimonoidal functor
- `thm-the-double-dual-is-a-monoidal-functor` · theorem — The double dual is a monoidal functor
- `cex-left-and-right-duals-and-double-duals-need-not-collapse` · counterexample — Left and right duals, and double duals, need not collapse
- `thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism` · theorem — In a rigid category every morphism of monoidal functors is an isomorphism
- `thm-a-braided-rigid-category-has-a-drinfeld-morphism` · theorem — A braided rigid category has a Drinfeld morphism
- `def-the-categorical-trace-of-a-morphism-into-the-double-dual` · definition — The categorical trace of a morphism into the double dual
- `rem-what-is-needed-before-a-trace-can-be-written` · remark — What is needed before a trace can be written
- `def-pivotal-structure` · definition — Pivotal structure
- `def-the-dimension-of-an-object-relative-to-a-pivotal-structure` · definition — The dimension of an object relative to a pivotal structure
- `def-spherical-structure` · definition — Spherical structure
- `rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity` · remark — Pivotal and spherical structures vary by monoidal automorphisms of the identity
- `thm-in-a-spherical-category-the-left-and-right-traces-agree` · theorem — In a spherical category the left and right traces agree
- `thm-basic-properties-of-the-categorical-trace` · theorem — Basic properties of the categorical trace
- `rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses` · remark — Exact-sequence additivity of trace and its missing hypotheses
- `def-twist-and-ribbon-structure` · definition — Twist and ribbon structure
- `thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type` · theorem — A twist on a braided rigid category is the same thing as a pivotal structure of Drinfeld type
- `rem-rigidity-alone-does-not-make-a-tensor-category` · remark — Rigidity alone does not make a tensor category
- `fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category` · false-statement — FALSE: a trace can be defined for an endomorphism in any monoidal category
- `fs-a-braiding-suffices-to-define-a-trace` · false-statement — FALSE: a braiding suffices to define a trace
- `fs-left-and-right-duals-of-an-object-are-isomorphic` · false-statement — FALSE: left and right duals of an object are isomorphic
- `fs-every-monoidal-category-is-rigid` · false-statement — FALSE: every monoidal category is rigid
- `fs-the-left-and-right-traces-always-agree` · false-statement — FALSE: the left and right traces always agree
- `fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure` · false-statement — FALSE: the dimension of an object is independent of the pivotal structure

### `duality-and-rigidity-in-monoidal-categories-examples` — Duality and Rigidity in Monoidal Categories — Examples (7 item(s))

- `ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual` · example — The dual of a finite-dimensional vector space as a categorical dual
- `ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces` · example — The zig-zag identities in finite-dimensional vector spaces
- `ex-the-categorical-trace-of-a-linear-endomorphism-is-its-matrix-trace` · example — The categorical trace of a linear endomorphism is its matrix trace
- `ex-the-dimension-of-a-vector-space-is-its-linear-dimension` · example — The dimension of a vector space is its linear dimension
- `cex-an-infinite-dimensional-vector-space-has-no-dual-object` · counterexample — An infinite-dimensional vector space has no dual object
- `ex-an-adjunction-read-as-a-duality-of-endofunctors` · example — An adjunction read as a duality of endofunctors
- `ex-a-symmetric-monoidal-category-in-which-every-object-is-self-dual` · example — A symmetric monoidal category in which every object is self-dual

## Your seams

Another group's pages depend on yours:

- `absolute-values-completions-and-p-adic-numbers` (group f) requires your `pro-p-groups-and-the-p-adic-integers`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-not-every-monoidal-category-is-rigid` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `c2c972ef4de1e06d74985d2a63dd5bdc2ba83f77e6e95a91e9be32e7bbf0e602` |
| `def-pro-p-completion-of-an-abstract-group` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `89958a316bfa50f50b96b15a585d8b14a1512bb4f835d67a9ba33f94b4585873` |
| `def-relative-projectivity` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `ebd96bb2311862ef0aed1d7e14149df76805b841be18102d0b8e731d514605b6` |
| `ex-the-dimension-of-a-vector-space-is-its-linear-dimension` | `duality-and-rigidity-in-monoidal-categories-examples` | gpt-5.6-terra | `c472fffd419c926827200eb17ffef5e1393976d6e92bbffdd6b6f4f833ac6f5e` |
| `ex-the-regular-module-of-cp-in-characteristic-p` | `modular-representations-and-projective-covers-examples` | gpt-5.6-terra | `add0c3f8002c6b3f77cef2c9036ee630f3bbd5d6edeaf2b978a74265b86c9aca` |
| `fs-a-braiding-suffices-to-define-a-trace` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `f591905d8feb3cbd3db5cba388978987f646d22675627ea2abca03f71c1ae201` |
| `fs-left-and-right-duals-of-an-object-are-isomorphic` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `aceb991e3e5f8eeac72c84f358a59791472fe59581843ff51db02932e8cb8edd` |
| `fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `cf93756a55dbe739f894a467c5a32ece56c0904e000959a13522f9561a0a56e1` |
| `fs-zp-is-cyclic-as-an-abstract-group` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `4c60cafa3fe386eaaac3a72f21be0543060db8551cec6d119f5a7cb6211a2ac1` |
| `rem-what-is-needed-before-a-trace-can-be-written` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `3128cbf29c8abce10064d44843ed1dc8078e09dcd574be6fb25eb8bb55a09c82` |
| `thm-green-vertex-source-existence-and-conjugacy` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `5ad1a47580a1cc07a78900bcb77cc13a47c938b95fedb765a7e717b686f607fd` |
| `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `c66fd133975505c46d865ceec6d6ee216e3c1e1df38dd1efb8e1b4bbd0557e3c` |
| `thm-schur-zassenhaus-existence` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `e4ba9e945a5e4392f2dd2c78e0343de1582349d2ee596734870c93c9cf8f1c13` |

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
