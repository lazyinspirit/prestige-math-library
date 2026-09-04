# frontier-29 — Alpha group `g` — Step 3 scaffold review

Group `g` covers batches `18` and `19` in
`research/frontier-29-alpha-groups.json`: the four computability-theory pairs
on reductions, Cook-Levin, space complexity, and randomized complexity.

I read the current:

- `research/frontier-29-batch-18.pages.json`
- `research/frontier-29-batch-18.coverage.json`
- `research/frontier-29-batch-18.notes.md`
- `research/frontier-29-batch-19.pages.json`
- `research/frontier-29-batch-19.coverage.json`
- `research/frontier-29-batch-19.notes.md`
- `research/plan-computability-theory-track.md` sections `TC-13`, `TC-21`,
  `TC-23`, `TC-27`, and `TC-28`
- the live `research/plan-spec.json`
- `research/frontier-29-alpha-step0-drift.md`
- `research/frontier-29-beta-18.task.md`
- `research/frontier-29-beta-19.task.md`

The current `research/plan-spec.json` still carries page-level stubs with empty
`items` arrays for all four owned pairs. That is the current pre-splice state,
not a Step-3 defect by itself, so I judged author-readiness from the batch
manifests, coverage ledgers, notes, and the current unspliced-plan and
manifest-to-coverage checks.

I refreshed `research/frontier-29-alpha-g-scope-decisions.json`, resolved all
`15` current rows, repaired two batch coverage ledgers, and then re-ran the
required checks.

## Verdicts

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `computable-reductions-and-rices-theorem` | 18 | 16 | 3 | **sufficient** | route, source stack, and TC-14/TC-16 boundary cuts are coherent on current bytes |
| `the-cook-levin-theorem` | 18 | 16 | 3 | **sufficient** | sufficient after restoring the missing independent primary source to coverage |
| `space-complexity-savitch-and-tqbf` | 19 | 17 | 3 | **sufficient** | sufficient after restoring the missing canonical carrier for the closing false statement |
| `randomized-complexity-and-amplification` | 19 | 17 | 3 | **sufficient** | sufficient after restoring four missing canonical carriers in the Chebyshev, PIT, and PP seams |

Machine half: `research/frontier-29-alpha-g-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| G18-1 | `the-cook-levin-theorem` | moderate | repaired in coverage: added the missing Cook 1971 source row |
| G19-1 | `space-complexity-savitch-and-tqbf` | minor | repaired in coverage: added the missing canonical carrier for `fs-savitch-stores-the-whole-configuration-graph` |
| G19-2 | `randomized-complexity-and-amplification` | moderate | repaired in coverage: added four missing canonical carriers |

## Direct repairs applied

- Added Stephen A. Cook's 1971 STOC paper to
  `research/frontier-29-batch-18.coverage.json` with an exact locator over the
  scanned University of Toronto PDF and item-bearing entries for the original
  polynomial-reducibility / Cook-Levin proof route. This restores the second
  independent treatment required by the batch-18 brief.
- Added the missing canonical carrier for
  `fs-savitch-stores-the-whole-configuration-graph` to
  `research/frontier-29-batch-19.coverage.json`.
- Added the missing canonical carriers for
  `lem-majority-error-bound-from-chebyshev`,
  `thm-bpp-amplification-to-inverse-polynomial-error`,
  `thm-schwartz-zippel-lemma`, and
  `fs-pp-has-bounded-error-away-from-one-half` to
  `research/frontier-29-batch-19.coverage.json`.

## Page review

### `computable-reductions-and-rices-theorem`

This pair is sufficient on the current bytes: `16` A-page items and `3` B-page
items, so no split is owed.

The route still matches TC-13 exactly: many-one reductions first, then c.e.
completeness, the many-one versus Turing comparison, the index-set/extensional
shift, Rice, the one-way Rice-Shapiro statement, and the syntactic boundary.
The source stack is sufficient on current bytes: Rice 1953, EECS 376, MIT
Lecture 9, and Kelly are two-plus independent treatments and include both a
primary source and full note sets. The seven current decline rows are also
honest page-boundary cuts: the weak-definition variants, the full
recognizability characterization, the empty-language / exact-equality
corollaries, and the timing-sensitive nonsemantic example are all outside the
live TC-13 item list and are not missing prerequisites for TC-14 or TC-16.

**Verdict:** sufficient.

### `the-cook-levin-theorem`

This pair is sufficient after G18-1: `16` A-page items and `3` B-page items, so
no split is owed.

The route still matches TC-21: SAT vocabulary, SAT in NP, bounded tableaux,
local windows, polynomial-size clause families, satisfiable iff accepting
tableau, polynomial-time constructibility, SAT NP-completeness, and the
Tseitin/3-SAT epilogue into TC-22. Before repair, the coverage ledger recorded
only the MIT note set, even though the batch brief required two independent
treatments and the notes claimed Cook 1971 had been reopened. I repaired that
by adding the scanned Cook paper from Stephen Cook's University of Toronto page,
which now gives the page a genuine independent primary source in
`research/frontier-29-batch-18.coverage.json`. The exact-carrier audit is now
`missing=0`, so the Tseitin and false-statement tail is lawfully carried as the
current canonical local continuation rather than as an uncovered theorem block.

**Verdict:** sufficient.

### `space-complexity-savitch-and-tqbf`

This pair is sufficient after G19-1: `17` A-page items and `3` B-page items, so
no split is owed.

The route still matches TC-23: space classes, the bounded-reachability
recursion, Savitch's theorem, TQBF membership and completeness, the quantified
game, alternation, and `AP = PSPACE`. The source stack is sufficient on current
bytes: Arora-Barak plus Blais are independent and include a textbook and full
lecture-note treatment. The one current deferment is exact: Arora-Barak's
bounded-alternation `Claim 5.11` now lands cleanly on
`the-polynomial-hierarchy-and-relativization`, whose current TC-27 item list
owns the bounded-alternation QBF route. The only missing exact carrier was the
closing false statement, and the added canonical row closes that seam without
changing route or scope.

**Verdict:** sufficient.

### `randomized-complexity-and-amplification`

This pair is sufficient after G19-2: `17` A-page items and `3` B-page items, so
no split is owed.

The route still matches TC-28: PTMs and the class definitions, ZPP, the
Chebyshev-to-Chernoff amplification ladder, one-sided RP amplification,
Adleman, pairwise-independent hashing, Freivalds, PIT, Schwartz-Zippel, and the
PP threshold boundary. The source stack is sufficient on current bytes:
Arora-Barak, two Blais note sets, and Matousek give multiple independent
treatments with both textbooks and full notes. The page was not insufficient on
mathematical route or page scope; it was only under-recorded in coverage. After
adding the four missing canonical carriers, the exact-carrier audit is
`missing=0`. The Miller-Rabin and BPP-in-PH rows remain honest out-of-scope
choices because the live TC-28 page already uses its scope on amplification,
Adleman, hashing, Freivalds, PIT, and PP rather than on those adjacent
branches.

**Verdict:** sufficient.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-29 --group g` now
produces `15` current decline rows and `0` pending rows. They are resolved in
`research/frontier-29-alpha-g-scope-decisions.json` as:

- `stands`: `15`
- `owner-decision`: `0`

That result is correct on current bytes.

- TC-13's seven rows all stand. The weak-definition variants, the stronger
  equality/empty-language consequences, the full Rice-Shapiro converse, and the
  timing-sensitive nonsemantic example are all genuine out-of-scope branches,
  not missing prerequisites for the retained TC-13 page.
- TC-23's two rows both stand. The SAT-in-PSPACE example is redundant once the
  page turns to TQBF and Savitch, and the bounded-alternation claim has an
  exact later home on current disk in TC-27.
- TC-28's six rows all stand. The Miller-Rabin and BPP-in-PH material is
  adjacent source content, but the current TC-28 item list and B-page budget do
  not allocate those branches, and no retained batch-19 item depends on them.

## Checks run on the reviewed bytes

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group g`
- `node tools/scope-decisions.mjs check --run frontier-29 --group g`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-18.coverage.json research/frontier-29-batch-19.coverage.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-18.coverage.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-19.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-18.pages.json research/frontier-29-batch-19.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- focused manifest-to-coverage exact-carrier audit over the four owned A pages
- JSON parse checks over the edited coverage files and the scope-decision file

## Final verdicts

Group `g` has four sufficient A pages on the current Tuesday, September 1, 2026
bytes. No split is owed: the A-page counts are `16`, `16`, `17`, and `17`, all
below the Step-3 ceiling.
