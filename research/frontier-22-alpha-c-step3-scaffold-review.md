# frontier-22 — Alpha group `c`, step-3 scaffold review

Batches `4` and `9`, the combinatorics cluster in
`research/frontier-22-alpha-groups.json`. I read
`research/frontier-22-batch-4.{pages.json,coverage.json,notes.md}`,
`research/frontier-22-batch-9.{pages.json,coverage.json,notes.md}`,
the controlling design sections in
`research/plan-combinatorics-and-categories.md`, and the live
`research/plan-spec.json`.

All `30` pending scope rows are now resolved in
`research/frontier-22-alpha-c-scope-decisions.json` as `26` `stands` rows and
`4` `owner-decision` rows. The required check passes on Friday, August 28, 2026:
`node tools/scope-decisions.mjs check --run frontier-22 --group c`
-> `30 current decline(s), 0 error(s)`.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `algebraic-and-spectral-graph-theory` | 4 | 24 | 8 | **sufficient** | sufficient after direct repair |
| `bull-free-graphs-and-the-erdos-hajnal-property` | 4 | 25 | 6 | **insufficient** | missing required source form |
| `cographs-perfect-patterns-and-pure-pairs` | 9 | 21 | 5 | **sufficient** | sufficient after direct repair |

Machine half: `research/frontier-22-alpha-c-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| C4-1 | `algebraic-and-spectral-graph-theory` | high | repaired in manifest |
| C4-2 | `bull-free-graphs-and-the-erdos-hajnal-property` | moderate | repaired in manifest |
| C4-3 | `bull-free-graphs-and-the-erdos-hajnal-property` | **blocking** | insufficient: missing textbook/monograph/full lecture-note treatment |
| C9-1 | `cographs-perfect-patterns-and-pure-pairs` | high | repaired in manifest |

### C4-1 — repaired: hidden earlier prerequisite and underdeclared spectral min-max machinery

The focused closure audit over the current group-c manifests initially found that
`cor-trace-of-adjacency-power-counts-closed-walks` depended on
`def-trace-of-a-square-matrix-over-a-commutative-ring`, whose home page is
`linear-recurrences-and-rational-generating-functions` at order `195`, outside
the declared closure of page `227`. The same audit also found that
`thm-spectral-gap-implies-connectivity-and-edge-expansion` explicitly invoked a
Rayleigh-quotient / second-eigenvalue argument while omitting the published
Rayleigh and Courant-Fischer machinery from its `deps`.

I repaired `research/frontier-22-batch-4.pages.json` in the smallest coherent
way:

- added the backward `requires` edge
  `linear-recurrences-and-rational-generating-functions` to
  `algebraic-and-spectral-graph-theory`;
- added `def-rayleigh-quotient` and
  `thm-courant-fischer-min-max-principle` to
  `thm-spectral-gap-implies-connectivity-and-edge-expansion`.

After that repair the local closure audit reports `0` missing prerequisite
homes, `0` forward-order deps, and `0` foreign examples-page deps across the
group-c manifests.

### C4-2 — repaired: the bull-free square-root step was underdeclared

`cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets` used the perfect
graph inequality `|V| <= chi alpha` in its strategy but did not cite the earlier
library theorem that supplies it. That was a real scaffold defect, because the
item's route as written depended on a published theorem it never declared.

I repaired `research/frontier-22-batch-4.pages.json` by adding the minimal
missing dependencies:

- `def-perfect-graph-for-the-bull-route`
- `thm-clique-independence-chromatic-bounds`

The page's local perfect-graph boundary package is now honestly source-backed on
current disk.

### C4-3 — the bull-free pair still lacks the required source form

The batch task is explicit: every pair needs two independent treatments, with at
least one textbook, monograph, or full lecture-note set carrying a harvestable
table of contents. On Friday, August 28, 2026, the current coverage for
`bull-free-graphs-and-the-erdos-hajnal-property` lists:

1. `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf` — `survey`
2. `https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf` — `paper`
3. `https://arxiv.org/html/2606.06258v2` — `paper`

That is survey-plus-papers only. None of the three sources is a textbook,
monograph, or full lecture-note set, so the pair still fails the batch source
rule even after the manifest repair. The mathematical route itself is closeable
on the current scaffold: the perfect-graph boundary items are sourced, the
split/composite/basic route is explicit, and the four owner-decision rows are
honest. The blocking defect is narrower and simpler than that: the pair is still
missing one qualifying source treatment for the full bull-free structural route.

**Exact missing source/result:** one textbook, monograph, or full lecture-note
treatment with a harvestable table of contents covering the bull-free structural
proof through the perfect-graph interlude, split-set/module step, basic/composite
reduction, narrowness under substitution, and the exponent-`1/4` conclusion.

### C9-1 — repaired: two foreign B-page dependencies on the cograph page

The same focused audit found two A-page leaf-rule violations on
`cographs-perfect-patterns-and-pure-pairs`:

- `thm-cographs-are-exactly-the-p-four-free-graphs` depended on the foreign
  B-page item `ex-p-four-is-connected-and-anticonnected`;
- `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four`
  depended on the foreign B-page item
  `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices`.

Both could be repaired without minting new scaffold items. I updated
`research/frontier-22-batch-9.pages.json` so the first strategy now performs the
finite `P_4` / `\overline{P_4}` connectivity check inline, and the second uses
the published A-page module lemma plus the four-vertex degree argument inline.
The repaired `deps` now cite only earlier A-page machinery:
`lem-unions-of-components-and-of-anticomponents-are-modules`,
`def-module-of-a-graph`, and `def-graph-isomorphism-and-complement`.

## Page review

### `algebraic-and-spectral-graph-theory`

This pair is sufficient after C4-1. The current route is the GT-7a core and it
closes cleanly on current bytes: adjacency powers count walks, the spectrum is
an isomorphism invariant, bipartiteness is detected by spectral symmetry, the
Laplacian/component dictionary and Kirchhoff/Cayley package are explicit, the
basic `(n,d,lambda)` cut-expansion consequence is present, and the family
spectra for `K_n`, `C_n`, `K_{m,n}`, and the Petersen graph are scaffolded.

The source form is also sufficient on Friday, August 28, 2026:
`textbook, lecture-notes, lecture-notes`. The deferred Hoffman/friendship branch
and the out-of-scope Cheeger/derandomisation rows are now correctly recorded in
the scope receipt. There is still no exact later `plan-spec.json` page id for
GT-7b or GT-21, so the two `owner-decision` rows remain honest without making
page `227` insufficient.

**Verdict:** sufficient.

### `bull-free-graphs-and-the-erdos-hajnal-property`

This pair is insufficient on exactly the source-form defect C4-3. The manifest's
local closure is now clean, the square-root corollary cites the earlier perfect
graph inequality it actually uses, and the owner-level rows are honest:
Conjecture `2.3` has no live destination page, and the near-sharpness
construction still depends on triangle-free Ramsey lower bounds the run does not
build.

What remains wrong is narrower than the notes first suggested. I found no need
for a reading-order change or a hidden forward edge here. The page simply still
lacks one qualifying textbook/monograph/full-lecture-note treatment, which the
batch brief requires before authoring can be called sufficiently scaffolded.

**Verdict:** insufficient.

### `cographs-perfect-patterns-and-pure-pairs`

This pair is sufficient after C9-1. The route matches the 413/414 design and
its split-page note: recursive cographs, the `P_4` characterization, prime
graphs forcing induced `P_4`, the perfect-graph / `kappa` reformulation, the
pure-blockade and `tau`-critical lemmas, and the `\mathcal B`-rainbow
definition that the later star-expansion page consumes.

The source form is sufficient on Friday, August 28, 2026:
`lecture-notes, survey, paper`. Harju supplies the required full lecture-note
treatment with harvestable headings. The broader `Delta`-graph / clan theory
rows are honest out-of-scope exclusions, and the three deferred `6.1`-`6.3`
rows land exactly on `star-expansions-and-erdos-hajnal` at order `417`.

**Verdict:** sufficient.

## Checks run on the post-repair bytes

- `node tools/scope-decisions.mjs check --run frontier-22 --group c`
  -> `scope-decisions: 30 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-22-batch-4.coverage.json research/frontier-22-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 3 page(s), 100 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-4.pages.json research/frontier-22-batch-9.pages.json`
  -> `content-policy: 89 scoped item(s), 0 error(s), 0 warning(s)`
- focused local closure audit over the current group-c manifests
  -> `0` missing prerequisite homes, `0` forward-order deps, `0` foreign examples-page deps
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK — declared page order is acyclic and consistent; no item-level cycles, forward...`
- `git diff --check -- research/frontier-22-batch-4.pages.json research/frontier-22-batch-9.pages.json research/frontier-22-alpha-c-scope-decisions.json`
  -> clean

## Final verdicts

Group `c` has two sufficient A pages and one insufficient A page on the current
Friday, August 28, 2026 bytes. No split is owed: the A-page counts are `24`,
`25`, and `21`, all below the step-3 ceiling.
