# frontier-25 — Alpha group `c` — Step 3 scaffold review

Group `c` covers batches `6`, `7`, and `8` in
`research/frontier-25-alpha-groups.json`: MA-12, HA-2, and the `C_5`
Erdős-Hajnal pair. I read the current
`research/frontier-25-batch-{6,7,8}.{pages.json,coverage.json,notes.md}`
artifacts, the controlling design sections in
`research/plan-category-theory-track.md`,
`research/plan-homological-algebra-track.md`, and
`research/plan-combinatorics-and-categories.md`, and the live
`research/plan-spec.json`.

All `16` pending scope rows are now resolved in
`research/frontier-25-alpha-c-scope-decisions.json` as `10` `stands` rows and
`6` `owner-decision` rows. On Sunday, August 30, 2026,
`node tools/scope-decisions.mjs check --run frontier-25 --group c` passes with
`16 current decline(s), 0 error(s)`.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `monoidal-categories-and-monoidal-functors` | 6 | 38 | 8 | **insufficient** | one design-required source is still missing from coverage |
| `chain-homotopy-and-the-homotopy-category` | 7 | 40 | 8 | **sufficient** | route, source stack, and deferrals are sufficient; four owner-level enrichments remain excluded |
| `the-five-cycle-and-erdos-hajnal` | 8 | 9 | 4 | **sufficient** | the direct Section 4 route is scaffolded deeply enough and the scope cuts are honest |

Machine half: `research/frontier-25-alpha-c-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| C6-1 | `monoidal-categories-and-monoidal-functors` | **blocking** | insufficient: missing the exact 1963 Mac Lane source for item 3 |

### C6-1 — MA-12 still lacks the exact Mac Lane 1963 source its own remark claims

The current MA-12 scaffold is structurally sound on dependencies. The live
Step-0 drift receipt already closed the page-level prerequisite mismatch as
`no-drift`, and the current transitive closure from
`the-diagram-lemmas-in-an-abelian-category-examples` still reaches the design's
actual suppliers `categories-functors-and-natural-transformations`,
`limits-and-colimits`, `adjunctions-units-and-counits`, and the contingent
`tensor-products-of-modules`. A focused item-home audit on the current bytes
also finds `0` forward-order dependencies and `0` foreign `-examples` page
dependencies in batches `6`-`8`.

The blocking defect is narrower and source-side. MA-12 item `3`,
`rem-mac-lanes-original-conditions-and-what-became-of-them`, is not just a
generic history note: the controlling design at
`research/plan-category-theory-track.md` lines `2365` and `2425` makes its
content specifically Mac Lane's 1963 Theorem `5.2` and its five-condition list.
But the current batch-6 coverage ledger records only three sources:

- Mac Lane, *Categories for the Working Mathematician*
- EGNO, *Tensor Categories*
- Riehl, *Category Theory in Context*

Repository-wide search on Sunday, August 30, 2026 finds the 1963 paper only in
the plan file and in the batch notes' "not copied into this coverage ledger"
discussion, with no batch coverage row and no reusable fetch-verified receipt
for the exact source. That means the scaffold still lacks the exact source
needed to author item `3` honestly as written.

I did not patch the content. Adding the missing source would require a new
stamped coverage row the current runner cannot mint, while narrowing the remark
away from Mac Lane 1963 would change the design contract rather than repair a
local typo.

**Verdict:** insufficient.

### `chain-homotopy-and-the-homotopy-category`

This pair is sufficient. The A page keeps the HA-2 route intact: chain
homotopy before the quotient category, the null-homotopic ideal before
representative-independent composition, the shift sign `(-1)^k`, and the split
criteria with their actual splitting hypotheses. The source stack is also
sufficient on current bytes: Weibel, Rotman, and three Stacks sections cover
the main route, and the scaffold preserves the schema-legal well-definedness
pattern for the Hom complex and the shift while keeping the `K(A)` quotient
obligation explicit.

The five real deferrals all have exact later homes on current disk:
`double-complexes-exact-couples-and-convergence` for double complexes, the sign
trick, and total complexes, and `derived-categories` for truncations and the
bounded homotopy categories. The four remaining exclusions are honest
owner-level enrichments with no exact later page named in the current HA plan:
the finitely generated free-abelian split criterion, the split-complex versus
homology-complex comparison, general additive-functor transport of homotopies,
and the negative "is `K(A)` abelian?" comparison.

**Verdict:** sufficient.

### `the-five-cycle-and-erdos-hajnal`

This pair is sufficient. The A page keeps the direct Section `4` route the
design requires: the bipartite comb estimate is exposed as a named lemma, the
rooted stable-tooth comb configuration is separated from the bare comb
definition, the low-edge-density to bounded-degree trimming step is explicit,
and the page proves the polynomial `kappa` theorem before the final
Erdős-Hajnal corollary. The B page stays narrow and checks the finite
adjacency-data witnesses the design asks for.

The source stack is sufficient on current bytes. The primary
Chudnovsky-Scott-Seymour-Spirkl paper covers the whole proof spine, Nguyen's
notes are a real independent treatment, and the two Nguyen exclusions are both
honest scope cuts rather than missing obligations: the page still follows the
paper's direct `C_5` proof, while the later sparsification, blockade, and
star-expansion program remains routed to later pages.

**Verdict:** sufficient.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-25 --group c` produced
`16` pending rows. They are now resolved in
`research/frontier-25-alpha-c-scope-decisions.json` as:

- `stands`: `10` rows
- `owner-decision`: `6` rows

The six owner-level rows are:

- MA-12 / EGNO `2.7` group actions on categories and equivariantization
- MA-12 / the contingent pointed-set smash-product theorem
- HA-2 / Weibel `1.4.1(2)` finitely generated free-abelian split criterion
- HA-2 / Weibel `1.4.4` split-complex versus homology-complex comparison
- HA-2 / Rotman `Exercise 6.6` additive functors preserve chain homotopy
- HA-2 / Weibel `1.4.5(4)` whether `K(A)` is abelian

Everything else stands: MA-12's strictification/coherence and symmetric
monoidal material have exact later pages, HA-2's truncation, bounded-category,
and double-complex rows have exact later pages, and the two combinatorics rows
are genuine non-load-bearing later-program context.

## Checks run on the reviewed bytes

- `node tools/scope-decisions.mjs check --run frontier-25 --group c`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-6.coverage.json research/frontier-25-batch-7.coverage.json research/frontier-25-batch-8.coverage.json --require-destination`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-6.coverage.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-7.coverage.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-8.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-6.pages.json research/frontier-25-batch-7.pages.json research/frontier-25-batch-8.pages.json`
- focused local closure audit over the current group-c manifests
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node -e "JSON.parse(...)"` on
  `research/frontier-25-alpha-c-step3-verdicts.json` and
  `research/frontier-25-alpha-c-scope-decisions.json`
- `node tools/prosecheck.mjs research/frontier-25-alpha-c-step3-scaffold-review.md --warnings`
- `git diff --check -- research/frontier-25-alpha-c-scope-decisions.json research/frontier-25-alpha-c-step3-verdicts.json research/frontier-25-alpha-c-step3-scaffold-review.md`

## Final verdicts

Group `c` has two sufficient A pages and one insufficient A page on the current
Sunday, August 30, 2026 bytes. No split is owed: the A-page counts are `38`,
`40`, and `9`, all below the Step-3 ceiling.
