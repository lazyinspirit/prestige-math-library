# frontier-21 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `2` and `3` in
`research/frontier-21-alpha-groups.json`: NT-8
`pell-equations-and-generalized-pell-orbits` and CA-4
`artinian-rings-and-length`.

For each owned pair I read the current:

- `research/frontier-21-batch-{2,3}.pages.json`
- `research/frontier-21-batch-{2,3}.coverage.json`
- `research/frontier-21-batch-{2,3}.notes.md`
- `research/plan-spec.json`
- governing design sections in
  `research/plan-number-theory-track.md` (NT-8) and
  `research/plan-commutative-algebra-track.md` (CA-4, plus the source-routing
  notes for §16, §19, and Stacks §§10.52--10.53)

Checks run on Thursday, August 27, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-21 --group b`
  - result: `scope-decisions: b: 7 decline(s), 7 pending`
- `node tools/scope-decisions.mjs check --run frontier-21 --group b`
  - result after resolution: `scope-decisions: 7 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-21-batch-2.coverage.json research/frontier-21-batch-3.coverage.json --require-destination`
  - result: `coverage-checklist: 2 page(s), 91 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-2.pages.json research/frontier-21-batch-3.pages.json`
  - result: `content-policy: 44 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; only the standing repository-wide `redundant-prereq`
    advisories remain

No owned batch content needed a Step-3 repair. I updated only the group-`b`
scope-decision receipt.

## Scope receipt

`research/frontier-21-alpha-b-scope-decisions.json` is current. All seven
current decline rows are now resolved as `stands`.

That outcome is mathematically credible on the current bytes:

- NT-8's two out-of-scope rows are alternate formalisms or alternate proofs,
  not missing current bridges.
- CA-4's five out-of-scope rows are stronger variants, alternate witnesses, or
  alternate proof packaging beyond the actual current manifest route.

No row requires `owner-decision`: every current decline is either a genuine
non-load-bearing enrichment or a deliberately excluded second route whose
absence does not leave the scaffold under-specified.

## Pair verdicts

### `pell-equations-and-generalized-pell-orbits` — `sufficient`

The pair is breadth-sound on current bytes: `17` A items and `9` B items, so no
split is owed. The A page keeps the design's intended elementary route:

- explicit coordinate-ring norm and Pell group law in `\mathbb Z[\sqrt D]`
- specialized `P_n,Q_n` continued-fraction recurrence for `\sqrt D`
- convergent norm identity and symmetric period structure
- Lagrange existence, negative-Pell parity, fundamental solution, and power
  classification
- generalized-Pell orbit finiteness, decidability, and infinite-orbit corollary

The source routing is honest. The two declined rows are not hidden gaps:

- Hackman H.IV.1 is a second orbit formalism, while the live scaffold already
  fixes orbit language through `def-pell-equivalence-of-generalized-solutions`
  and `thm-generalized-pell-solutions-have-finitely-many-orbits`.
- Conrad II Lemma 2.1 is an alternate pigeonhole proof of Lagrange's theorem,
  while the live manifest already closes the existence theorem through the
  continued-fraction chain named in the design.

The design/spec prerequisite mismatch is real but already documented in the
batch notes, and the current manifest still closes from the published NT-7
continued-fraction spine. The later NT-23 seam warning about maximal-order
units remains non-load-bearing and does not make the current pair insufficient.

### `artinian-rings-and-length` — `sufficient`

The pair is also breadth-sound on current bytes: `12` A items and `6` B items,
again well below the split ceiling.

The A-page route closes cleanly:

- Artinian domain implies field
- primes are maximal
- finitely many maximal ideals
- nilradical nilpotent
- finite Chinese remainder theorem
- Artinian implies Noetherian by the nilpotent-radical filtration over the
  semisimple quotient
- finite-length criterion for the regular module
- local finite-length theorem
- canonical product decomposition into Artinian local factors
- prime-set, criterion-by-primes, and quotient/localization corollaries

The manifest compression relative to the older CA-4 table is acceptable on the
current bytes. Instead of duplicating module-length results locally, the
scaffold reuses the already-published
`thm-composition-series-iff-noetherian-and-artinian` and
`cor-length-is-additive-in-short-exact-sequences`. That is an honest use of the
existing library, not a missing current lemma.

The five current decline rows also stand:

- Altman-Kleiman Exercise (19.4) is a support-based finite-length criterion not
  needed by the chosen ring-theoretic route.
- Altman-Kleiman Corollary (19.14) is the stronger global theorem for all
  finite modules over an Artinian ring; the current page homes only the local
  finite-length theorem needed for the truncated examples.
- Milne Lemma 16.5 is alternate proof packaging beyond the explicit CRT plus
  filtration route already scaffolded.
- Milne Example 16.9 is an alternate counterexample witness; the current B page
  already uses the deliberate infinite-product-of-fields witness
  `ex-zero-dimensional-nonnoetherian-ring`.
- Stacks Lemma 10.52.4 is treated by the coverage ledger as the one-way
  maximal-ideal-power implication, and the live CA-4 manifest does not need it
  as a separate bridge.

The only design compression worth noting is the omitted duplicate Prüfer-module
example on the B page. The live library already has
`ex-prufer-p-group-is-artinian-not-noetherian`, and the batch notes record the
decision not to remint it locally. That is a presentation choice, not a missing
source-backed scaffold result.

## Outcome

Both owned A pages are sufficient for authoring on the current bytes:

- `pell-equations-and-generalized-pell-orbits`
- `artinian-rings-and-length`

`research/frontier-21-alpha-b-step3-verdicts.json` records both pages as
`sufficient`. No batch-2 or batch-3 scaffold-content repair was required in
this Alpha review pass.
