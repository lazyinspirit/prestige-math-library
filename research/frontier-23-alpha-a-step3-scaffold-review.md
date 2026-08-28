# frontier-23 — Alpha group `a` — Step 3 scaffold review

Group `a` covers batches `1`, `3`, and `4` in
`research/frontier-23-alpha-groups.json`: GT-7 / GT-15, CA-6, and RT-3. I read
the current `research/frontier-23-batch-{1,3,4}.{pages.json,coverage.json,notes.md}`
artifacts, the controlling design sections in
`research/plan-group-theory-track.md`,
`research/plan-commutative-algebra-track.md`, and
`research/plan-algebra-track-expansion.md`, and the live
`research/plan-spec.json`.

All `20` pending scope rows are now resolved in
`research/frontier-23-alpha-a-scope-decisions.json` as `17` `stands` rows and
`3` `owner-decision` rows. On Friday, August 28, 2026,
`node tools/scope-decisions.mjs check --run frontier-23 --group a` passes with
`20 current decline(s), 0 error(s)`.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `decision-problems-for-finitely-presented-groups` | 1 | 26 | 6 | **insufficient** | one later-page dependency plus a recorded-not-proved contract conflict |
| `graphs-of-groups-and-bass-serre-theory` | 1 | 26 | 7 | **sufficient** | route and source stack are sufficient; one owner-level scope row remains |
| `integral-extensions-and-going-up` | 3 | 17 | 6 | **insufficient** | missing the live CA-6 B-page going-down failure witness |
| `characters-and-the-orthogonality-relations` | 4 | 30 | 13 | **insufficient** | B page still spends four foreign `-examples` dependencies |

Machine half: `research/frontier-23-alpha-a-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| A1-1 | `decision-problems-for-finitely-presented-groups` | **blocking** | insufficient: forward dependency plus schema-legal cited-result gap |
| A3-1 | `integral-extensions-and-going-up` | **blocking** | insufficient: missing source-backed CA-6B counterexample |
| A4-1 | `characters-and-the-orthogonality-relations` | **blocking** | insufficient: four illegal foreign examples-page dependencies |

### A1-1 — GT-7 still carries one real forward dependency and one unresolved cited-result contract conflict

The page is otherwise mathematically well shaped on current bytes. It keeps the
fixed-presentation and uniform word problems distinct, proves the positive
algorithms for free groups, finitely generated abelian groups, and suitable
amalgams, records the deep negative theorems as exact source-backed boundary
results, and keeps the Dehn-function seam algebraic before GT-8. The source
stack is also sufficient in form: survey, open notes, and textbook treatment.

What still blocks authoring is narrower and more concrete:

1. The focused local closure audit finds one real forward/out-of-closure
   published dependency. The item
   `thm-word-problem-for-finitely-generated-abelian-groups` currently depends
   on
   `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`,
   whose home page `modules-over-a-pid-and-canonical-forms` is at order `110`,
   later than GT-7 at order `71.013`. That is not repairable here by a backward
   prerequisite edit, because the dependency points forward.
2. GT-7's cited-only undecidability branch is still not schema-legal. The live
   scaffold keeps
   `thm-novikov-boone-undecidability-of-the-word-problem`,
   `thm-adian-rabin-undecidability-for-markov-properties`, and
   `thm-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups`
   as `thm-` items intended to be `proved_here: false`, but `SCHEMA.md`
   requires every recorded-not-proved item to be a `remark`. Because the ids are
   already fixed as `thm-...`, the current scaffold lacks a schema-legal
   carrier for those exact Miller/Bishop boundary statements.

I did not repair this pair directly. One defect is a real forward prerequisite,
and the other is a contract/ID conflict rather than a missing lemma or backward
edge.

**Verdict:** insufficient.

### `graphs-of-groups-and-bass-serre-theory`

This pair is sufficient. The A page keeps the bidirectional Bass-Serre route
the design requires: graph of groups, path group, fundamental group, normal
form, Bass-Serre tree and action, reconstruction from a tree action, the
one-segment and one-loop comparison theorems, free actions, Kurosh, and
Grushko. The source form is also sufficient on the current bytes: monograph,
monograph, textbook, and full lecture notes.

The two current declines on this pair are honest. Lyndon-Schupp's decision
problems chapter belongs to GT-7, not GT-15. The only owner-level scope row is
Meier's Property FA section: it is a genuine continuation of tree-action theory,
but the live plan still names no exact later page for it.

**Verdict:** sufficient.

### A3-1 — CA-6 still omits the live B-page witness that normality is not decorative

The current CA-6 scaffold is otherwise strong. The A page has the integrality,
localization, lying-over, incomparability, going-up, dimension, coefficient,
local-normality, and going-down spine the design wants, and the source form is
already sufficient: textbook plus independent lecture notes.

The blocking problem is specific. The live CA-6 overlay in
`research/plan-commutative-algebra-track.md` still requires the B-page result
`ex-going-down-failure-via-cusp-normalisation`, and the earlier CA-6 design
likewise requires `ex-going-down-needs-normality`. The current manifest instead
ends its B page with `ex-integral-closure-of-a-cusp-ring`. That normalization
example is valid, but it does not supply the explicit failure witness that the
design budgets to show the normality hypothesis in going down is not optional.

I left the content unchanged. Restoring that witness needs a real source-backed
example item and matching coverage disposition, not a one-line dependency edit.

**Verdict:** insufficient.

### A4-1 — RT-3B still spends four illegal dependencies on foreign examples pages

The A page itself is scaffolded well. It fixes the ordinary-character-theory
setting over `\mathbb C`, builds the character, class-function, inner-product,
dual, tensor, averaging, and intertwiner machinery, proves both orthogonality
relations, the basis theorem, multiplicity and character-determination
theorems, the regular-character argument, the normal-subgroup theorem, and the
abelian criterion. The source form is sufficient: two independent full lecture
note treatments plus the Meynet-Moscrop appendix.

The B page still fails the examples-page leaf rule in `SCHEMA.md`. The focused
closure audit finds four foreign `-examples` dependencies:

- `ex-the-character-table-of-a-finite-cyclic-group-over-c` depends on
  `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters`
  from `the-group-algebra-and-representations-examples`
- `ex-the-character-table-of-s-three` depends on
  `ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c` from
  `maschkes-theorem-and-complete-reducibility-examples`
- `ex-the-character-table-of-a-four` depends on
  `ex-klein-four-is-normal-in-a-four` from
  `conjugacy-and-simplicity-in-the-symmetric-groups-examples`
- `ex-the-character-table-of-s-four-and-its-normal-subgroups` depends on
  `ex-s-four-conjugacy-classes-and-class-equation` from the same foreign
  examples page

Those are not allowed cross-page dependencies. This pair needs local or A-page
bridges sourced from the already harvested Webb/Etingof character-table
material instead of borrowing foreign examples pages as prerequisites.

**Verdict:** insufficient.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-23 --group a` produced
`20` pending rows. They are now resolved in
`research/frontier-23-alpha-a-scope-decisions.json` as:

- `stands`: `17` rows
- `owner-decision`: `3` rows

The three owner-level rows are all real extensions with no exact later home on
current disk:

- GT-7 / Bishop Talk 2 example that being abelian is a Markov property
- GT-15 / Meier `3.10` on Property FA and infinite groups
- RT-3 / Meynet-Moscrop Appendix A.3 equation `(A.18)` recovering the center
  from scalar-value loci

Everything else closes as `stands`: the GT-7 Bass-Serre and van Kampen rows do
have exact later pages, the GT-15 decision-problem row belongs to the earlier
GT-7 page, and the CA-6 exclusions are genuine non-load-bearing enrichments or
alternate proof packages beyond the current manifest route.

## Checks run on the reviewed bytes

- `node tools/scope-decisions.mjs check --run frontier-23 --group a`
  -> `scope-decisions: 20 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-23-batch-1.coverage.json research/frontier-23-batch-3.coverage.json research/frontier-23-batch-4.coverage.json --require-destination`
  -> `coverage-checklist: 4 page(s), 172 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-1.coverage.json`
  -> `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-3.coverage.json`
  -> `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-4.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-1.pages.json research/frontier-23-batch-3.pages.json research/frontier-23-batch-4.pages.json`
  -> `content-policy: 131 scoped item(s), 0 error(s), 0 warning(s)`
- focused local closure audit over the current group-a manifests
  -> `local-closure-audit: 5 out-of-closure published dep(s), 1 forward-order dep(s), 4 foreign examples-page dep(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass; the validator ends `OK` and the printed diagnostics are the
     repository's standing `redundant-prereq` advisories outside this group
- `node -e "JSON.parse(...)"` on `research/frontier-23-alpha-a-step3-verdicts.json`
  and `research/frontier-23-alpha-a-scope-decisions.json`
  -> `json-parse: ok`
- `node tools/prosecheck.mjs research/frontier-23-alpha-a-step3-scaffold-review.md --warnings`
  -> `0 error(s), 2 warning(s)` (`count-in-prose` only)
- `git diff --check -- research/frontier-23-alpha-a-scope-decisions.json research/frontier-23-alpha-a-step3-verdicts.json research/frontier-23-alpha-a-step3-scaffold-review.md`
  -> clean

## Final verdicts

Group `a` has one sufficient A page and three insufficient A pages on the
current Friday, August 28, 2026 bytes. No split is owed: the A-page counts are
`26`, `26`, `17`, and `30`, all below the step-3 ceiling.
