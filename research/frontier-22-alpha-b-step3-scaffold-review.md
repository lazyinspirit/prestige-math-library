# frontier-22 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `2` and `5` in `research/frontier-22-alpha-groups.json`:
CA-5 `associated-primes-and-primary-decomposition` and MT-10
`modes-of-convergence-egorov-and-lusin`.

For each owned pair I read the current:

- `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `CLAUDE.md`
- `research/frontier-22-batch-{2,5}.pages.json`
- `research/frontier-22-batch-{2,5}.coverage.json`
- `research/frontier-22-batch-{2,5}.notes.md`
- `research/plan-spec.json`
- governing design sections in
  `research/plan-commutative-algebra-track.md` (CA-5 at line 522 and line 3241)
  and `research/plan-measure-theory-track.md` (MT-10), plus the downstream
  orientation notes cited by batch `5` in
  `research/plan-functional-analysis-track.md` and
  `research/plan-probability-track.md`

Checks run on Friday, August 28, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-22 --group b`
  - result: `scope-decisions: b: 9 decline(s), 9 pending`
- `node tools/scope-decisions.mjs check --run frontier-22 --group b`
  - result after resolution: `scope-decisions: 9 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-22-batch-2.coverage.json research/frontier-22-batch-5.coverage.json --require-destination`
  - result: `coverage-checklist: 2 page(s), 105 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-2.pages.json`
  - result after the CA-5 repair: `content-policy: 45 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-2.pages.json research/frontier-22-batch-5.pages.json`
  - result: `content-policy: 86 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; only the standing repository-wide `redundant-prereq`
    advisories remain

## Scope receipt

`research/frontier-22-alpha-b-scope-decisions.json` is current. All nine
current decline rows are now resolved as `stands`.

That outcome is credible on the current bytes:

- CA-5's five decline rows are either an alternate ideal-transport route
  (`Proposition 19.4`) or the symbolic-power branch from Stacks §10.64, which
  the live manifest and immediate `plan-spec` continuation still do not use.
- MT-10's four decline rows are either a one-dimensional specialization
  (`Problem 5`, Folland Example (i)) or stronger packaging of already-separated
  current ingredients (`Exercise 40`, Royden Problem 4).

No current row needs `owner-decision`: every omission is surfaced honestly and
none leaves the present authoring route under-specified.

## Local repair

One owned scaffold defect did need a batch-local fix in
`research/frontier-22-batch-2.pages.json`.

The live CA-5 manifest had two submodule-induction items,
`thm-prime-filtration-of-a-finite-module` and
`thm-lasker-noether-primary-decomposition`, depending on
`thm-noetherian-induction`, but the published item on disk is an ideal-only
induction theorem. I repaired the scaffold to use the actual module-level route
already published:

- `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`
- `thm-equivalent-characterizations-of-noetherian-modules`

I also aligned two adjacent CA-5 items with the proof routes they already
described:

- `lem-irreducible-submodule-is-primary-noetherian` now depends on
  `lem-primary-submodule-zero-divisor-characterisation` and the module-level
  maximal-condition theorem, rather than the finite-case singleton-`Ass`
  characterization it was not actually using
- `thm-second-uniqueness-theorem-primary-decomposition` now depends on
  `lem-associated-primes-from-a-minimal-primary-decomposition`, which is the
  exact lemma needed to identify the component radicals with
  `\operatorname{Ass}(M/N)`

This was a small in-scope scaffold repair, not a scope change, and the repaired
manifest passes `content-policy --manifest-only`.

## Pair verdicts

### `associated-primes-and-primary-decomposition` — `sufficient`

The pair is breadth-sound on current bytes: `39` A items and `6` B items, so no
split is owed.

After the local routing fix above, the A-page route closes cleanly:

- associated-prime existence through maximal annihilators and cyclic embeddings
- exact-sequence behavior, localization, support containment, prime filtrations,
  minimal-support primes, finiteness, and zero divisors
- quotient-zero-divisor primaryity first, then the finite-Noetherian
  characterizations
- irreducible-implies-primary, Lasker-Noether existence, radicals from minimal
  decompositions, isolated uniqueness, finite prime avoidance, and second
  uniqueness
- the radical-ideal corollary as the endpoint promised by the design

The source routing is honest. The five resolved decline rows do not hide missing
bridges:

- Milne Proposition 19.4 is an alternate ideal-only transport theorem, while
  the live scaffold localizes primary submodules directly.
- Stacks §10.64 and its three named rows are symbolic-power applications beyond
  the current primary-decomposition core and the immediate CA-6 continuation in
  `research/plan-spec.json`.

The design/spec prerequisite mismatch remains nonfatal on the current bytes.
`research/plan-spec.json` still gives the page only
`artinian-rings-and-length-examples`, and the current closure already reaches
the localisation, support, and radical results this page actually cites. No new
backward edge is owed after the local manifest repair.

### `modes-of-convergence-egorov-and-lusin` — `sufficient`

This pair is also breadth-sound on current bytes: `33` A items and `8` B items,
again well below the split ceiling.

The A-page route is sufficient for authoring as written:

- the four core convergence notions used later on the track
- uniqueness in measure, `L^1 =>` in measure, almost uniform implications, and
  the finite-measure `a.e. =>` in-measure theorem with its explicit failure on
  general measure spaces
- finite-measure metricization, Riesz's subsequence theorem, Cauchy-in-measure
  completeness, Egorov, and the finite-measure almost-uniform subsequence
  corollary
- the two-step Lusin route the design asked for: simple-function closed cores,
  then uniform simple approximation on a large closed set, then the theorem and
  its Tietze/compact-core corollaries
- uniform integrability, domination as a sufficient condition, tightness,
  finite/sigma-finite Vitali, dominated convergence as a Vitali corollary, and
  the finite-measure implication-table remark tied to concrete B-page witnesses

The deferred and out-of-scope source rows are not hidden authoring gaps:

- Folland Example (i) and Royden Problem 5 are extra real-line or ordinary
  uniform-convergence specializations that the live implication table does not
  claim to cover.
- Folland Exercise 40 and Royden Problem 4 are stronger package variants of
  already-separated current ingredients, not missing prerequisites for any item
  on this pair.

The earlier prerequisite drift is already repaired on the live bytes:
`research/frontier-22-batch-5.pages.json` now matches the current
`research/plan-spec.json` by including both
`the-lebesgue-and-riemann-integrals-compared-examples` and
`urysohn-lemma-and-tietze`. No further Step-3 fix is needed.

## Outcome

Both owned A pages are sufficient for authoring on the current bytes:

- `associated-primes-and-primary-decomposition`
- `modes-of-convergence-egorov-and-lusin`

`research/frontier-22-alpha-b-step3-verdicts.json` records both pages as
`sufficient`. The only content change in this Alpha pass was the batch-local
CA-5 scaffold routing repair described above.
