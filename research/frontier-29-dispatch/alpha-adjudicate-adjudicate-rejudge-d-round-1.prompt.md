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
label: adjudicate-rejudge-d-round-1

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
  "group": "d",
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
      "id": "cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor",
      "scope": "run",
      "owner": "d"
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
      "id": "thm-the-simplicial-boundary-squares-to-zero",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor",
      "model": "gpt-5.6-terra",
      "context_sha256": "25496a55a6f08f4554ec95ea481ba9934a393d865c846d7860a340c2ab90b9f7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-acyclic-object-for-a-left-exact-functor",
      "model": "gpt-5.6-terra",
      "context_sha256": "dc40b9f8962c813e924636a526e1e2984cce693244bb3a64bf0f8aa1eef6aa73",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-balanced-derived-bifunctor",
      "model": "gpt-5.6-terra",
      "context_sha256": "ca55825414d03b7c0fd75912d5fd0276248f6cacf7c566189c984e5f3229b732",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself",
      "model": "gpt-5.6-terra",
      "context_sha256": "da5852f9df9157dd220d4450bbd48df3bdf971ebd2f179709b20b7911b46d6dd",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-derived-functors-in-two-variables-are-automatically-balanced",
      "model": "gpt-5.6-terra",
      "context_sha256": "fa285e6e9f9e44344d8faf16b90c58d67109b4666d5ce63003b72983dd867e33",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
      "model": "gpt-5.6-terra",
      "context_sha256": "674cc58302a3867eff89114667ea9bf7cbbc2eded90db89fac692adf7f1322fd",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
      "model": "gpt-5.6-terra",
      "context_sha256": "05e1668a040552436a3d501ea62ea18818fe83a1c2edec91d5e4cf9eda2c0aeb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-positive-right-derived-functors-vanish-on-injective-objects",
      "model": "gpt-5.6-terra",
      "context_sha256": "1e146c2c81c5f42b43911401c9654cdf83055e6d0924f7af480a7d82246c2857",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data",
      "model": "gpt-5.6-terra",
      "context_sha256": "be446e0128a2dbc88e3b8a3fc2e5bae466d9e53e5e6f85073323b0273b32c187",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-simplicial-boundary-squares-to-zero",
      "model": "gpt-5.6-terra",
      "context_sha256": "7b4e6d772e39d7927d9e986771baf9a12e00d183455c9bb116bbffe6da335d4d",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 adjudication — group **d**, run `frontier-29`

You are the group Alpha for batches **11**, **12**, **17**: 3 A/B pair(s), 6 page(s), 114 item(s), 10 open rejection(s) over 10 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 11 | `derived-functors` | A | homological-algebra | 365.047 | `projective-and-injective-resolutions-examples` |
| 11 | `derived-functors-examples` | B | homological-algebra | 365.048 | `derived-functors` |
| 12 | `simplicial-complexes-and-simplicial-homology` | A | algebraic-topology | 366.001 | `schur-multipliers-and-universal-central-extensions-examples` |
| 12 | `simplicial-complexes-and-simplicial-homology-examples` | B | algebraic-topology | 366.002 | `simplicial-complexes-and-simplicial-homology` |
| 17 | `morse-critical-points-hessians-and-indices` | A | differential-topology | 517 | `moment-maps-and-symplectic-reduction-examples` |
| 17 | `morse-critical-points-hessians-and-indices-examples` | B | differential-topology | 518 | `morse-critical-points-hessians-and-indices` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `derived-functors` — Derived Functors (44 item(s))

- `def-supplied-projective-resolution-datum` · definition — Supplied projective resolution data
- `def-supplied-injective-resolution-datum` · definition — Supplied injective resolution data
- `def-left-derived-object-relative-to-projective-resolution-data` · definition — Left derived objects relative to supplied projective resolution data
- `def-right-derived-object-relative-to-injective-resolution-data` · definition — Right derived objects relative to supplied injective resolution data
- `prop-negative-derived-degrees-vanish-for-one-sided-resolutions` · proposition — Negative derived degrees vanish for one-sided resolutions
- `lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions` · lemma — A morphism has a comparison lift between the supplied projective resolutions
- `lem-the-induced-homology-map-is-independent-of-the-comparison-lift` · lemma — The induced homology map is independent of the chosen comparison lift
- `def-left-derived-map-relative-to-resolution-data` · definition — The left derived map relative to supplied resolution data
- `prop-left-derived-maps-preserve-identities` · proposition — Left derived maps preserve identities
- `prop-left-derived-maps-preserve-composition` · proposition — Left derived maps preserve composition
- `thm-left-derived-functors-relative-to-supplied-data-are-additive-functors` · theorem — Left derived functors relative to supplied data are additive functors
- `lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions` · lemma — A morphism has a comparison extension between the supplied injective resolutions
- `lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension` · lemma — The induced cohomology map is independent of the chosen injective comparison extension
- `def-right-derived-map-relative-to-resolution-data` · definition — The right derived map relative to supplied resolution data
- `thm-right-derived-functors-relative-to-supplied-data-are-additive-functors` · theorem — Right derived functors relative to supplied data are additive functors
- `prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors` · proposition — A natural transformation induces natural transformations of left derived functors
- `prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors` · proposition — A natural transformation induces natural transformations of right derived functors
- `lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects` · lemma — Objectwise comparison of two projective resolution data induces an isomorphism on derived objects
- `lem-the-change-of-projective-resolution-isomorphisms-are-natural` · lemma — The change-of-projective-resolution isomorphisms are natural
- `thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic` · theorem — Two supplied projective resolution data define naturally isomorphic left derived functors
- `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` · proposition — Change-of-projective-resolution isomorphisms satisfy identity and cocycle laws
- `thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic` · theorem — Two supplied injective resolution data define naturally isomorphic right derived functors
- `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` · proposition — Change-of-injective-resolution isomorphisms satisfy identity and cocycle laws
- `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data` · remark — Derived functors are well defined relative to supplied resolution data
- `thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor` · theorem — The zero-th left derived functor of a right exact functor recovers the functor
- `thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor` · theorem — The zero-th right derived functor of a left exact functor recovers the functor
- `prop-positive-left-derived-functors-vanish-on-projective-objects` · proposition — Positive left derived functors vanish on projective objects
- `prop-positive-right-derived-functors-vanish-on-injective-objects` · proposition — Positive right derived functors vanish on injective objects
- `def-acyclic-object-for-a-left-exact-functor` · definition — An acyclic object for a left exact functor
- `def-acyclic-object-for-a-right-exact-functor` · definition — An acyclic object for a right exact functor
- `def-f-acyclic-resolution` · definition — An F-acyclic resolution
- `thm-acyclic-resolution-theorem-for-right-derived-functors` · theorem — The acyclic-resolution theorem for right derived functors
- `thm-acyclic-resolution-theorem-for-left-derived-functors` · theorem — The acyclic-resolution theorem for left derived functors
- `cor-adapted-classes-compute-derived-functors` · corollary — Adapted classes compute derived functors
- `prop-an-exact-functor-has-vanishing-positive-derived-functors` · proposition — An exact functor has vanishing positive derived functors
- `prop-derived-functors-commute-with-finite-biproducts` · proposition — Derived functors commute with finite biproducts
- `prop-contravariant-derived-functors-are-derived-on-the-opposite-category` · proposition — Contravariant derived functors are derived on the opposite category
- `prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied` · proposition — A bifunctor can be derived in either variable when the relevant resolution data are supplied
- `def-balanced-derived-bifunctor` · definition — A balanced derived bifunctor
- `fs-enough-projectives-implies-a-canonical-resolution-for-every-object` · false-statement — FALSE: enough projectives imply a canonical resolution for every object
- `fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift` · false-statement — FALSE: the definition of a derived map may depend on the chosen comparison lift
- `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself` · false-statement — FALSE: every additive functor has L_0 naturally isomorphic to itself
- `fs-derived-functors-in-two-variables-are-automatically-balanced` · false-statement — FALSE: derived functors in two variables are automatically balanced
- `fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution` · false-statement — FALSE: an acyclic resolution is the same thing as an injective resolution

### `derived-functors-examples` — Derived Functors — Examples (7 item(s))

- `ex-the-left-derived-functors-of-an-exact-functor` · example — The left derived functors of an exact functor
- `ex-the-right-derived-functors-of-hom-from-a-fixed-object` · example — The right derived functors of Hom from a fixed object
- `ex-two-resolution-data-and-their-change-isomorphism` · example — Two resolution data and their change isomorphism
- `ex-independence-of-two-comparison-lifts-on-homology` · example — Independence of two comparison lifts on homology
- `ex-an-acyclic-resolution-that-is-not-an-injective-resolution` · example — An acyclic resolution that is not an injective resolution
- `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor` · counterexample — L_0 of a non-right-exact functor need not recover the functor
- `ex-a-contravariant-functor-derived-via-the-opposite-category` · example — A contravariant functor derived via the opposite category

### `simplicial-complexes-and-simplicial-homology` — Simplicial Complexes and Simplicial Homology (30 item(s))

- `def-abstract-simplicial-complex` · definition — An abstract simplicial complex
- `def-simplicial-subcomplex-star-closure-and-link` · definition — Subcomplexes, closures, stars, and links in a simplicial complex
- `def-locally-finite-and-finite-dimensional-simplicial-complex` · definition — Local finiteness, finiteness, and finite dimensionality of a simplicial complex
- `def-geometric-simplex-spanned-by-affinely-independent-vertices` · definition — The geometric simplex spanned by affinely independent vertices
- `lem-barycentric-coordinates-are-unique` · lemma — Barycentric coordinates are unique
- `def-geometric-realization-of-an-abstract-simplicial-complex` · definition — The geometric realization of an abstract simplicial complex
- `lem-geometric-simplices-intersect-in-the-realization-of-their-common-face` · lemma — Geometric simplices intersect in the realization of their common face
- `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization` · proposition — A finite simplicial complex has a compact Hausdorff realization
- `def-simplicial-map-and-its-geometric-realization` · definition — A simplicial map and its geometric realization
- `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial` · lemma — The realization of a simplicial map is continuous and functorial
- `def-orientation-of-a-simplex` · definition — An orientation of a simplex
- `lem-an-odd-permutation-reverses-oriented-simplex-sign` · lemma — An odd permutation reverses the sign of an oriented simplex
- `def-simplicial-chain-groups-and-boundary` · definition — Simplicial chain groups and the boundary operator
- `lem-simplicial-boundary-is-independent-of-oriented-representative` · lemma — The simplicial boundary is independent of the chosen oriented representative
- `thm-the-simplicial-boundary-squares-to-zero` · theorem — The simplicial boundary squares to zero
- `def-simplicial-cycles-boundaries-and-homology` · definition — Simplicial cycles, boundaries, and homology
- `def-augmentation-and-reduced-simplicial-homology` · definition — Augmentation and reduced simplicial homology
- `lem-the-simplicial-augmentation-is-a-chain-map` · lemma — The simplicial augmentation is a chain map
- `def-induced-simplicial-chain-map` · definition — The induced chain map of a simplicial map
- `lem-induced-simplicial-chain-maps-commute-with-boundaries` · lemma — Induced simplicial chain maps commute with boundaries
- `prop-simplicial-homology-is-functorial` · proposition — Simplicial homology is functorial
- `def-contiguous-simplicial-maps` · definition — Contiguous simplicial maps
- `lem-contiguous-simplicial-maps-have-homotopic-realizations` · lemma — Contiguous simplicial maps have homotopic realizations
- `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology` · theorem — Contiguous simplicial maps induce the same map on simplicial homology
- `lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible` · lemma — The augmented simplicial chain complex of a simplex is contractible
- `cor-the-simplex-has-zero-reduced-simplicial-homology` · corollary — A simplex has zero reduced simplicial homology
- `prop-zero-th-simplicial-homology-is-free-on-connected-components` · proposition — Zero-th simplicial homology is free on connected components
- `prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum` · proposition — Simplicial homology of a disjoint union is the direct sum
- `def-simplicial-euler-characteristic` · definition — The simplicial Euler characteristic
- `thm-euler-poincare-formula-for-a-finite-simplicial-complex` · theorem — The Euler-Poincare formula for a finite simplicial complex

### `simplicial-complexes-and-simplicial-homology-examples` — Simplicial Complexes and Simplicial Homology — Examples (9 item(s))

- `ex-simplicial-homology-of-a-point-and-an-edge` · example — The simplicial homology of a point and an edge
- `ex-boundary-of-a-triangle-has-first-homology-z` · example — The boundary of a triangle has first homology Z
- `ex-simplicial-homology-of-the-tetrahedron-boundary` · example — The simplicial homology of the tetrahedron boundary
- `ex-a-contractible-simplicial-cone` · example — A contractible simplicial cone
- `ex-two-contiguous-maps-of-a-subdivided-interval` · example — Two contiguous maps of a subdivided interval
- `ex-a-finite-complex-with-euler-characteristic-zero` · example — A finite complex with Euler characteristic zero
- `cex-a-vertex-map-need-not-be-simplicial` · counterexample — A vertex map need not be simplicial
- `cex-finite-dimensional-does-not-imply-finite-or-locally-finite` · counterexample — Finite dimensional does not imply finite or locally finite
- `ex-a-delta-complex-structure-on-the-torus` · example — A delta-complex structure on the torus

### `morse-critical-points-hessians-and-indices` — Morse Critical Points Hessians and Indices (18 item(s))

- `def-critical-point-and-critical-value-of-a-smooth-function` · definition — Critical points and critical values of a smooth function
- `def-hessian-of-a-function-at-a-critical-point` · definition — The intrinsic Hessian of a smooth function at a critical point
- `lem-coordinate-change-congruence-for-the-critical-hessian` · lemma — Critical-point Hessian matrices transform by congruence under chart changes
- `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian` · definition — Riemannian metrics, symmetric cotangent-bundle connections, and covariant Hessians
- `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle` · theorem — A Riemannian metric has a unique Levi-Civita connection on the cotangent bundle
- `lem-critical-hessian-agrees-with-the-levi-civita-hessian` · lemma — At a critical point, the intrinsic Hessian agrees with the Levi-Civita Hessian
- `def-nondegenerate-critical-point-nullity-index-and-coindex` · definition — Nondegenerate critical points, nullity, index, and coindex
- `lem-sylvester-inertia-makes-morse-index-intrinsic` · lemma — Sylvester inertia makes the Morse index intrinsic
- `def-morse-function-and-excellent-morse-function` · definition — Morse functions and excellent Morse functions
- `lem-nondegenerate-critical-points-are-isolated` · lemma — Nondegenerate critical points are isolated
- `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points` · corollary — A Morse function on a compact manifold has finitely many critical points
- `lem-one-variable-completion-of-the-square-with-a-smooth-parameter` · lemma — A nonzero second derivative splits off a signed square with a smooth parameter
- `lem-morse-splitting-induction-preserves-the-residual-hessian` · lemma — Splitting one Morse coordinate preserves the residual Hessian
- `thm-morse-lemma` · theorem — Morse lemma
- `cor-local-extrema-and-saddles-from-the-morse-index` · corollary — The Morse index detects local extrema and saddles
- `cor-index-and-coindex-swap-under-negation` · corollary — Index and coindex swap under negation
- `cor-local-level-set-cone-at-a-morse-critical-point` · corollary — The critical level is a quadratic cone in Morse coordinates
- `rem-zero-dimensional-morse-convention` · remark — The zero-dimensional Morse convention

### `morse-critical-points-hessians-and-indices-examples` — Morse Critical Points Hessians and Indices — Examples (6 item(s))

- `ex-height-on-the-sphere-is-a-perfect-morse-function` · example — The height function on the sphere is a perfect Morse function
- `ex-standard-quadratic-form-of-each-morse-index` · example — The standard quadratic form realizes every Morse index
- `ex-height-on-a-torus-with-four-critical-points` · example — A standard torus height function has four critical points
- `cex-a-degenerate-isolated-critical-point` · counterexample — An isolated critical point can be degenerate
- `cex-a-degenerate-nonisolated-critical-set` · counterexample — A degenerate critical set can be nonisolated
- `ex-the-empty-and-zero-dimensional-morse-cases` · example — The empty and zero-dimensional Morse cases

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
| `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor` | `derived-functors-examples` | gpt-5.6-terra | `25496a55a6f08f4554ec95ea481ba9934a393d865c846d7860a340c2ab90b9f7` |
| `def-acyclic-object-for-a-left-exact-functor` | `derived-functors` | gpt-5.6-terra | `dc40b9f8962c813e924636a526e1e2984cce693244bb3a64bf0f8aa1eef6aa73` |
| `def-balanced-derived-bifunctor` | `derived-functors` | gpt-5.6-terra | `ca55825414d03b7c0fd75912d5fd0276248f6cacf7c566189c984e5f3229b732` |
| `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself` | `derived-functors` | gpt-5.6-terra | `da5852f9df9157dd220d4450bbd48df3bdf971ebd2f179709b20b7911b46d6dd` |
| `fs-derived-functors-in-two-variables-are-automatically-balanced` | `derived-functors` | gpt-5.6-terra | `fa285e6e9f9e44344d8faf16b90c58d67109b4666d5ce63003b72983dd867e33` |
| `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` | `derived-functors` | gpt-5.6-terra | `674cc58302a3867eff89114667ea9bf7cbbc2eded90db89fac692adf7f1322fd` |
| `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` | `derived-functors` | gpt-5.6-terra | `05e1668a040552436a3d501ea62ea18818fe83a1c2edec91d5e4cf9eda2c0aeb` |
| `prop-positive-right-derived-functors-vanish-on-injective-objects` | `derived-functors` | gpt-5.6-terra | `1e146c2c81c5f42b43911401c9654cdf83055e6d0924f7af480a7d82246c2857` |
| `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data` | `derived-functors` | gpt-5.6-terra | `be446e0128a2dbc88e3b8a3fc2e5bae466d9e53e5e6f85073323b0273b32c187` |
| `thm-the-simplicial-boundary-squares-to-zero` | `simplicial-complexes-and-simplicial-homology` | gpt-5.6-terra | `7b4e6d772e39d7927d9e986771baf9a12e00d183455c9bb116bbffe6da335d4d` |

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
