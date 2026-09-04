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
label: adjudicate-rejudge-f-round-1

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
  "group": "f",
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
      "id": "cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "def-field-of-p-adic-numbers",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-a-numeric-run-of-the-lemma-three-three-exponent-choice",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-series-summatory-integral",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-p-adic-completion-is-a-field",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-trivial-zeros-and-critical-strip",
      "scope": "run",
      "owner": "f"
    }
  ],
  "live_tuples": [
    {
      "id": "cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade",
      "model": "gpt-5.6-terra",
      "context_sha256": "9c44fce2bb8586dcd60a25d206c27ac1675a63fca4f6aae644fbffe5bc3adaeb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-field-of-p-adic-numbers",
      "model": "gpt-5.6-terra",
      "context_sha256": "3cf2a900ae0a21965e0e3f2c6e09228b7433af2993123885c9c30dac52baf956",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-a-numeric-run-of-the-lemma-three-three-exponent-choice",
      "model": "gpt-5.6-terra",
      "context_sha256": "9a42e3b8ee3ac77e2233632101122b8d5b327b25b259afeb6e968ff0403eaf5c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-dirichlet-series-summatory-integral",
      "model": "gpt-5.6-terra",
      "context_sha256": "132b1ef3ab3e785cf141415cc551838188ec529e3863cd1afef17909c41a192c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-p-adic-completion-is-a-field",
      "model": "gpt-5.6-terra",
      "context_sha256": "5a5c89d20e5364df637911211521016167affcf3b625417f9bcb313c7723f2d8",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-trivial-zeros-and-critical-strip",
      "model": "gpt-5.6-terra",
      "context_sha256": "4b7f86d8db0cd501dd448cc576919e7315e0958daa09205d152d7d22f6875350",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **f**, run `frontier-29`

You are the group Alpha for batches **8**, **9**, **15**: 4 A/B pair(s), 8 page(s), 99 item(s), 6 open rejection(s) over 6 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 8 | `absolute-values-completions-and-p-adic-numbers` | A | number-theory | 302.017 | `regular-local-rings-and-homological-dimension-examples`, `pro-p-groups-and-the-p-adic-integers` |
| 8 | `absolute-values-completions-and-p-adic-numbers-examples` | B | number-theory | 302.018 | `absolute-values-completions-and-p-adic-numbers` |
| 8 | `dirichlet-series-and-euler-products` | A | number-theory | 348.007 | `chebyshev-bounds-and-mertens-theorems-examples`, `the-riemann-zeta-function` |
| 8 | `dirichlet-series-and-euler-products-examples` | B | number-theory | 348.008 | `dirichlet-series-and-euler-products` |
| 9 | `the-riemann-zeta-function` | A | complex-analysis | 345 | `the-gamma-function`, `mittag-leffler-and-runges-theorem`, `primes-and-the-fundamental-theorem-of-arithmetic`, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform` |
| 9 | `the-riemann-zeta-function-examples` | B | complex-analysis | 346 | `the-riemann-zeta-function` |
| 15 | `generalized-niceness-and-reduction-outcomes` | A | combinatorics | 427 | `leaf-reducibility-and-wonderful-families` |
| 15 | `generalized-niceness-and-reduction-outcomes-examples` | B | combinatorics | 428 | `generalized-niceness-and-reduction-outcomes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `absolute-values-completions-and-p-adic-numbers` — Absolute Values Completions and P Adic Numbers (22 item(s))

- `def-multiplicative-absolute-value-on-a-field` · definition — Absolute values on a field
- `lem-nonarchimedean-absolute-value-criterion` · lemma — An absolute value is nonarchimedean exactly when every integer has absolute value at most one
- `def-equivalent-field-absolute-values` · definition — Equivalent nontrivial absolute values
- `thm-equivalent-field-absolute-values-characterisation` · theorem — Two nontrivial absolute values induce the same topology exactly when one is a positive power of the other
- `def-p-adic-absolute-value-on-the-rationals` · definition — The p-adic absolute value on the rationals
- `thm-p-adic-absolute-value-is-nonarchimedean` · theorem — The p-adic absolute value is nonarchimedean
- `thm-ostrowskis-theorem-for-the-rationals` · theorem — Ostrowski's theorem for the rationals
- `def-place-of-the-rationals` · definition — Places of the rationals
- `thm-product-formula-for-the-rationals` · theorem — The product formula for the rationals
- `thm-weak-approximation-for-rational-places` · theorem — Weak approximation for rational places
- `def-field-of-p-adic-numbers` · definition — The field of p-adic numbers as a metric completion
- `thm-p-adic-completion-is-a-field` · theorem — The p-adic completion is a complete valued field
- `lem-p-adic-balls-are-clopen` · lemma — P-adic balls are clopen and intersecting comparable balls are nested
- `thm-p-adic-completion-agrees-with-the-fraction-field-of-zp` · theorem — The p-adic completion agrees with the fraction field of Z_p
- `cor-zp-is-the-valuation-ring-of-qp` · corollary — Z_p is the valuation ring of Q_p
- `cor-maximal-ideal-and-residue-field-of-zp` · corollary — The maximal ideal and residue field of Z_p
- `thm-p-adic-digit-expansion` · theorem — Every p-adic number has a unique digit expansion
- `cor-p-adic-field-is-locally-compact-and-totally-disconnected` · corollary — Q_p is locally compact and totally disconnected
- `cor-p-adic-simple-root-lifting` · corollary — Simple roots lift uniquely in Z_p
- `thm-p-adic-newton-criterion` · theorem — Newton's criterion in Q_p
- `thm-square-criterion-in-qp-for-odd-p` · theorem — Square criterion in Q_p for odd p
- `thm-square-criterion-in-q2` · theorem — Square criterion in Q_2

### `absolute-values-completions-and-p-adic-numbers-examples` — Absolute Values Completions and P Adic Numbers -- Examples (8 item(s))

- `ex-p-adic-geometric-series` · example — A geometric series that is p-adically convergent and really divergent
- `ex-p-adic-expansion-of-minus-one` · example — The p-adic expansion of minus one
- `ex-square-root-of-minus-one-in-q5` · example — A square root of minus one in Q_5
- `ex-no-square-root-of-p-in-qp` · example — There is no square root of p in Q_p
- `ex-p-adic-hensel-lifting-a-simple-root` · example — Simple-root lifting by digits and by Newton iteration
- `ex-two-adic-square-test` · example — Testing odd units for squareness in Q_2
- `ex-the-same-sequence-in-real-and-p-adic-metrics` · example — One rational sequence in the real and p-adic metrics
- `cex-zp-is-not-the-integral-closure-of-z-in-qp` · counterexample — Z_p is not the integral closure of Z in Q_p

### `dirichlet-series-and-euler-products` — Dirichlet Series and Euler Products (15 item(s))

- `def-dirichlet-series` · definition — Dirichlet series
- `def-abscissae-dirichlet-series` · definition — Abscissae of convergence and absolute convergence for a Dirichlet series
- `thm-dirichlet-series-half-plane-convergence` · theorem — Convergence at one point gives a right half-plane of holomorphy
- `thm-dirichlet-series-absolute-half-plane-holomorphy` · theorem — Absolute convergence gives a right half-plane of termwise differentiation
- `thm-dirichlet-series-abscissa-gap` · theorem — The absolute-convergence abscissa is at most one to the right of the convergence abscissa
- `thm-uniqueness-of-dirichlet-series-coefficients` · theorem — A Dirichlet series determines its coefficients
- `thm-dirichlet-series-summatory-integral` · theorem — Abel summation expresses a Dirichlet series by its summatory function
- `thm-dirichlet-series-multiplication-convolution` · theorem — Dirichlet-series multiplication is Dirichlet convolution
- `thm-multiplicative-dirichlet-series-euler-product` · theorem — Multiplicative functions give Euler products in the absolute half-plane
- `cor-completely-multiplicative-dirichlet-series-euler-product` · corollary — Completely multiplicative functions give geometric Euler factors
- `thm-landau-dirichlet-series` · theorem — Landau's theorem for Dirichlet series with nonnegative coefficients
- `thm-von-mangoldt-logarithmic-derivative-zeta` · theorem — The logarithmic derivative of zeta is the Dirichlet series of the von Mangoldt function
- `cor-mobius-dirichlet-series-reciprocal-zeta` · corollary — The Mobius Dirichlet series is 1/zeta
- `cor-divisor-dirichlet-series-zeta-square` · corollary — The divisor Dirichlet series is zeta squared
- `cor-euler-totient-dirichlet-series` · corollary — The Euler totient Dirichlet series is zeta(s-1)/zeta(s)

### `dirichlet-series-and-euler-products-examples` — Dirichlet Series and Euler Products -- Examples (7 item(s))

- `ex-dirichlet-series-abscissa-boundaries` · example — Dirichlet series with equal and unequal abscissae
- `ex-mobius-reciprocal-zeta-coefficients` · example — Finite coefficient multiplication for 1/zeta
- `ex-divisor-function-from-zeta-square` · example — Recovering tau(n) from zeta(s)^2
- `ex-euler-totient-dirichlet-series` · example — The local Euler factor for the totient Dirichlet series
- `ex-liouville-dirichlet-series` · example — The Dirichlet series of the Liouville function
- `cex-conditionally-convergent-euler-product-rearrangement` · counterexample — Outside absolute convergence, formal Euler-product regrouping is not licensed
- `cex-an-abscissa-need-not-be-a-line-of-convergence` · counterexample — A boundary line need not behave uniformly for a Dirichlet series

### `the-riemann-zeta-function` — The Riemann Zeta Function (22 item(s))

- `lem-riemann-zeta-dirichlet-series-converges-locally-uniformly` · lemma — The Dirichlet series for zeta converges absolutely and locally uniformly on the half-plane Re s greater than 1
- `def-riemann-zeta-function` · definition — The Riemann zeta function on the half-plane Re s greater than 1
- `thm-euler-product-for-riemann-zeta` · theorem — The Riemann zeta function has its Euler product on the half-plane Re s greater than 1
- `cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one` · corollary — The Riemann zeta function has no zeros when Re s is greater than 1
- `rem-agreement-with-the-existing-infinitude-of-primes` · remark — The pole of zeta at 1 recovers Euclid's infinitude of primes without reminting it on this page
- `thm-riemann-zeta-continuation-to-the-right-half-plane` · theorem — For Re s greater than 0, zeta admits the fractional-part integral formula with a simple residue-one pole at 1
- `thm-dirichlet-eta-representation` · theorem — The Dirichlet eta series is holomorphic on Re s greater than 0 and equals the prefactor times zeta there
- `def-jacobi-theta-function` · definition — The Jacobi theta function theta(t)=sum over all integers of exp(-pi n squared t) for t greater than 0
- `thm-jacobi-theta-transformation` · theorem — The Jacobi theta function satisfies theta(t)=t to the minus one-half theta(1/t)
- `thm-theta-mellin-representation-of-completed-zeta` · theorem — The completed zeta function has its Mellin-theta integral representation on Re s greater than 1
- `def-completed-riemann-zeta-function` · definition — The completed zeta function Lambda(s)=pi to the minus s over 2 times Gamma(s over 2) times zeta(s)
- `thm-riemann-zeta-meromorphic-continuation` · theorem — The Riemann zeta function extends meromorphically to the complex plane with its only pole at 1
- `thm-completed-riemann-zeta-functional-equation` · theorem — The completed zeta function satisfies Lambda(s)=Lambda(1-s)
- `thm-riemann-zeta-functional-equation` · theorem — The Riemann zeta function satisfies the classical sine-gamma functional equation
- `def-riemann-xi-function` · definition — The Riemann xi function xi(s)=one-half s(s-1)Lambda(s)
- `thm-riemann-xi-is-entire-of-order-one` · theorem — The Riemann xi function is entire of order one, real on the real axis, and symmetric under s to 1 minus s
- `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane` · theorem — The Riemann zeta function has no zeros on the closed half-plane Re s at least 1, except for its pole at 1
- `thm-trivial-zeros-and-critical-strip` · theorem — The only zeros of zeta on the nonpositive real axis are the negative even integers, and every other zero lies in the open critical strip
- `thm-hadamard-product-for-riemann-xi` · theorem — The Riemann xi function has its genus-one Hadamard product over the nontrivial zeros of zeta
- `def-bernoulli-numbers-by-their-generating-function` · definition — The Bernoulli numbers are defined by the generating series t over exp(t) minus 1
- `thm-special-values-of-riemann-zeta-at-integers` · theorem — The Riemann zeta function has the standard Bernoulli special values at the positive even and nonpositive integers
- `rem-dirichlet-series-continuation-and-regularized-sums` · remark — The analytic continuation of zeta is not the same object as the defining Dirichlet series outside Re s greater than 1

### `the-riemann-zeta-function-examples` — The Riemann Zeta Function — Examples (12 item(s))

- `ex-euler-product-numerically-approximates-zeta-at-two` · example — A short Euler-product truncation already numerically approximates zeta at 2
- `ex-zeta-four-equals-pi-to-the-four-over-ninety` · example — The special-value formula gives zeta(4)=pi to the fourth over 90
- `ex-zeta-zero-equals-minus-one-half` · example — The functional equation gives zeta(0)=-1/2 without substituting into a zero-times-pole expression
- `ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms` · example — Splitting the theta Mellin integral at 1 isolates the two polar terms of completed zeta
- `ex-zeta-minus-two-vanishes-by-the-sine-factor` · example — The functional equation shows that zeta(-2)=0 through the sine factor
- `ex-symmetric-finite-zero-products-model-the-xi-hadamard-product` · example — Symmetric finite zero products model the genus-one product for xi
- `cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges` · counterexample — The eta series can represent the continued zeta function where the defining Dirichlet series diverges
- `cex-the-harmonic-series-shows-the-defining-series-diverges-at-one` · counterexample — The defining Dirichlet series for zeta diverges at s=1 because it becomes the harmonic series
- `fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one` · false-statement — FALSE: zeta is given by the same Dirichlet series for every complex s other than 1
- `fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on` · false-statement — FALSE: zeta(-1) is the ordinary sum 1+2+3 and so on
- `fs-riemann-zeta-is-entire` · false-statement — FALSE: the Riemann zeta function is entire
- `fs-the-functional-equation-alone-characterizes-zeta` · false-statement — FALSE: the classical functional equation alone characterizes the Riemann zeta function

### `generalized-niceness-and-reduction-outcomes` — Generalized Niceness and Reduction Outcomes (10 item(s))

- `def-generalized-nice-finite-family` · definition — Generalized nice finite graph families
- `lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity` · lemma — A complete-or-weakly-sparse blockade can be thinned to equal subblocks with directional sparsity
- `lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning` · lemma — A complete-or-weakly-sparse blockade yields a complete subblockade or an anticonnected thinning
- `lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair` · lemma — A wonderful anticonnected complete-or-sparse blockade yields a restricted subgraph or a large anticomplete pair
- `lem-generalized-niceness-yields-four-reduction-outcomes` · lemma — Generalized niceness yields four reduction outcomes
- `cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade` · corollary — Large almost-pure pair hypotheses yield a complete or anticomplete blockade
- `lem-cy-restricted-generalized-niceness-yields-three-outcomes` · lemma — cy-restricted generalized niceness yields three outcomes
- `lem-iterated-restricted-sparsification-reaches-the-target-scale` · lemma — Iterated restricted sparsification reaches the target scale
- `lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph` · lemma — A large cy-restricted subgraph in the three-outcome theorem forces a smaller-scale restricted subgraph
- `lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade` · lemma — Constant-scale restricted generalized niceness yields an x-scale restricted subgraph, a polynomial clique or stable set, or a blockade

### `generalized-niceness-and-reduction-outcomes-examples` — Generalized Niceness and Reduction Outcomes -- Examples (3 item(s))

- `ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks` · example — Thinning a four-block weakly sparse blockade to directional sparse subblocks
- `ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade` · example — A large almost-pure pair extends an anticomplete blockade
- `ex-a-numeric-run-of-the-lemma-three-three-exponent-choice` · example — A numeric run of the Lemma 3.3 exponent choice

## Your seams

Your pages depend on another group's:

- `absolute-values-completions-and-p-adic-numbers` requires `pro-p-groups-and-the-p-adic-integers` (group a, batch 2)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade` | `generalized-niceness-and-reduction-outcomes` | gpt-5.6-terra | `9c44fce2bb8586dcd60a25d206c27ac1675a63fca4f6aae644fbffe5bc3adaeb` |
| `def-field-of-p-adic-numbers` | `absolute-values-completions-and-p-adic-numbers` | gpt-5.6-terra | `3cf2a900ae0a21965e0e3f2c6e09228b7433af2993123885c9c30dac52baf956` |
| `ex-a-numeric-run-of-the-lemma-three-three-exponent-choice` | `generalized-niceness-and-reduction-outcomes-examples` | gpt-5.6-terra | `9a42e3b8ee3ac77e2233632101122b8d5b327b25b259afeb6e968ff0403eaf5c` |
| `thm-dirichlet-series-summatory-integral` | `dirichlet-series-and-euler-products` | gpt-5.6-terra | `132b1ef3ab3e785cf141415cc551838188ec529e3863cd1afef17909c41a192c` |
| `thm-p-adic-completion-is-a-field` | `absolute-values-completions-and-p-adic-numbers` | gpt-5.6-terra | `5a5c89d20e5364df637911211521016167affcf3b625417f9bcb313c7723f2d8` |
| `thm-trivial-zeros-and-critical-strip` | `the-riemann-zeta-function` | gpt-5.6-terra | `4b7f86d8db0cd501dd448cc576919e7315e0958daa09205d152d7d22f6875350` |

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
