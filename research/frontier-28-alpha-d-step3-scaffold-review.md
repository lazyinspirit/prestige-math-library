# frontier-28 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `9` and `11` in
`research/frontier-28-alpha-groups.json`: `leaf-reducibility-and-wonderful-families`,
`diagonalization-and-the-halting-problem`, and
`p-np-conp-and-polynomial-reductions`. I read the current
`research/frontier-28-batch-{9,11}.{pages.json,coverage.json,notes.md}`
artifacts, the controlling design sections in
`research/plan-combinatorics-and-categories.md` and
`research/plan-computability-theory-track.md`, and the live
`research/plan-spec.json`.

On Tuesday, September 1, 2026, I refreshed
`research/frontier-28-alpha-d-scope-decisions.json`, repaired one owned batch-9
coverage defect, resolved the four live scope rows as `3` `stands` rows and `1`
`owner-decision` row, and reran the required checks on the repaired bytes.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `leaf-reducibility-and-wonderful-families` | 9 | 7 | 2 | **sufficient** | sufficient after exact coverage-row repair |
| `diagonalization-and-the-halting-problem` | 11 | 15 | 3 | **sufficient** | route, sources, and deferments close on current bytes |
| `p-np-conp-and-polynomial-reductions` | 11 | 17 | 3 | **sufficient** | route and source seams are explicit and authorable without new scope |

All three A pages remain below the Step-3 split ceiling.

## Finding

| id | page | severity | disposition |
|---|---|---|---|
| D9-1 | `leaf-reducibility-and-wonderful-families` | high | repaired in coverage and notes |

### D9-1 — repaired: batch 9 deferred one source bundle to a single page that does not own it exactly

`research/frontier-28-batch-9.coverage.json` had one deferred HJZ preliminaries
row named `c-sparse to a set, weakly c-sparse, blockades, and combs` with the
single destination `blockades-combs-and-pattern-graphs`. That was false as
written on current disk: the reused material is already published, but it is
split across page `401` and page `407`, not owned by one exact destination
page.

I repaired the scaffold in the smallest coherent way by replacing that one
omnibus deferment with four exact `already-published` rows:

- `def-c-sparse-and-c-restricted-vertex-set`
- `def-directional-and-weak-sparsity-between-vertex-sets`
- `def-blockade-length-and-width`
- `def-comb-in-a-graph`

I also updated `research/frontier-28-batch-9.notes.md` so its coverage summary
matches the repaired ledger. After that repair, the only remaining page-425
scope row is Chudnovsky's `Conjecture 2.3`, which is a genuine owner-level
catalogue-routing choice rather than a missing local result.

## Page review

### `leaf-reducibility-and-wonderful-families`

This pair is sufficient after D9-1. The live route still matches the `425/426`
design block in `research/plan-combinatorics-and-categories.md:3912-3964`:
page `425` starts from the already-published leaf-reducible prerequisite on
page `423`, introduces `wonderful`, decomposes Lemma `2.1` into explicit local
mixed-block and auxiliary-pattern lemmas, and closes with the E/Bird
wonderfulness theorem. Page `426` spends the route on the one-subdivided-star
and six-vertex-Bird witness checks rather than duplicating earlier adjacency
examples.

The remaining source seam is explicit rather than hidden: batch-9 notes still
record the HJZ Lemma `2.1` first-branch wording conflict, so Step 5 can resolve
it against the source instead of inheriting a silent false statement. The only
live non-stand scope row is the survey's paired-forbidden-graph conjecture,
which has no exact current combinatorics destination page in the plan and is
therefore correctly left as `owner-decision`.

**Verdict:** sufficient.

### `diagonalization-and-the-halting-problem`

This pair is sufficient on the current bytes. The TC-12 scaffold matches
`research/plan-computability-theory-track.md:579-612`: acceptance is defined
before halting, the diagonal self-application machine is separated out as a
named lemma, halting is handled by an explicit reduction from acceptance,
nonhalting yields the explicit unrecognizable-language witness, busy beaver is
kept at the qualitative domination/noncomputability level, and totality plus
machine-equivalence are proved directly rather than deferred to Rice.

The three current scope rows all close cleanly. Turing section `11` is outside
the page's machine-acceptance route; Rice's theorem lands exactly on TC-13
`computable-reductions-and-rices-theorem` at order `605`; and the small
busy-beaver value table is extra illustration, not a missing current item.

**Verdict:** sufficient.

### `p-np-conp-and-polynomial-reductions`

This pair is sufficient on the current bytes. The TC-20 scaffold matches
`research/plan-computability-theory-track.md:871-906`: it defines `P`, the
verifier form of `NP`, `coNP`, many-one reductions, transfer and completeness
consequences, the generic search-problem wrapper, SAT self-reducibility, and
the `NP \subseteq PSPACE \subseteq EXP` containment picture, then closes with
the two intended false statements.

The only two delicate seams are already recorded honestly in
`research/frontier-28-batch-11.notes.md`: Step 5 must define enough SAT
vocabulary locally for the self-reduction theorem instead of creating a forward
dependency on page `621`, and it must define `PSPACE` inline inside the final
containment proposition rather than silently inventing a new scaffold item. Both
are authoring constraints, not missing scope results.

**Verdict:** sufficient.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-28 --group d` produced
`4` current decline rows after the batch-9 repair. They now resolve in
`research/frontier-28-alpha-d-scope-decisions.json` as:

- `stands`: `3` rows
- `owner-decision`: `1` row

The single owner-level row is:

- page `425` / Chudnovsky survey `Conjecture 2.3`

That row is honestly excluded from the current page, but routing it into the
cross-track open-problems catalogue would still be a new published-catalogue
scope choice rather than an exact current page deferment.

## Checks run on Tuesday, September 1, 2026

- `node tools/scope-decisions.mjs refresh --run frontier-28 --group d`
  -> `scope-decisions: d: 4 decline(s), 4 pending`
- `node tools/scope-decisions.mjs check --run frontier-28 --group d`
  -> `scope-decisions: 4 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-9.coverage.json`
  -> `WARN coverage-low-yield [leaf-reducibility-and-wonderful-families]: frontier-28-batch-9.coverage.json: leaf-reducibility-and-wonderful-families: 9/32 harvested results scaffolded; confirm the declines with Alpha`
  and then `coverage-checklist: 1 page(s), 32 harvested result(s), 0 error(s), 1 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-9.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-11.coverage.json`
  -> `coverage-checklist: 2 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)`

