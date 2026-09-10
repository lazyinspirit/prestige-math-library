# Final adjudicator evidence — group c, queue position 1 of 1

Run: `phase-2-nine-step-25`.
Item: `prop-a-spectral-sequence-supported-in-one-row-or-column-collapses`.
Disposition: `repaired`. Source status: `familiar`.

## Independent review and conventions

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the exact dispatch queue `research/phase-2-nine-step-25-step7-fa-c-item-5cb466d7d7aa8daf.json`. Inspected the complete current item and its three direct dependencies: `def-collapse-at-a-page`, `def-homological-spectral-sequence`, and `def-cohomological-spectral-sequence`. Also inspected the former cited supplier `prop-degree-reasons-force-stabilization-in-a-bounded-region`, both `library/homological-algebra/spectral-sequences.md` and its `spectral-sequences-examples.md` companion, the complete local examples `ex-a-filtered-complex-collapsing-at-e-one` and `fs-a-spectral-sequence-collapses-when-one-differential-is-zero`, the owning batch-6 manifest entry, coverage entries, and complete proof contract including boundary and risk records. The local page fixes increasing homological indexing with differential degree (-r,r-1), E^0 the associated graded complex, and E^1 its homology; cohomological indexing reverses both coordinates. Collapse means all differentials from the named page onward vanish, not merely pointwise stabilization or a split abutment.

The initial rejection is `research/phase-2-nine-step-25-judge.jsonl` line 181, context `08c9f51a0b7e2202b0d5e8e7fcf4738818f137dce0a4c191fd2f089acc757197`: the former F2 supplier did not expose the support-persistence or differential-degree claims. Read the owning Sol decision in `research/phase-2-nine-step-25-alpha-step7-c.md` and its exact adjudication row at line 82 of `research/phase-2-nine-step-25-judge-adjudications.jsonl`. Sol correctly replaced that citation by the two abstract definitions and updated the owning manifest and contract. The sole Terra rejudge, line 801 of the judge ledger, context `d62f2a131b9aac4a730c8a7437ded92755462db1a4e3bdd52b09382d91f37fbf`, rejects the overbroad title because it omits the page bounds.

## Mathematical basis

Sol's present argument is complete. If a term on page s is zero, its outgoing kernel and incoming image yield zero homology, so its next-page term is zero. Induction preserves containment of support in the original row or column on every later page. For a single column and r >= s >= 1, a homological differential changes the first coordinate by -r, hence cannot have both endpoints in that column. At least one endpoint is the zero object, so the map is zero. For a single row and r >= s >= 2, the second-coordinate change r-1 is nonzero and the same argument applies. In the cohomological case the respective changes are r and 1-r, with identical conclusions; coordinate reversal also preserves the support condition. Thus all differentials at every position on every later page vanish. The specified homology transitions give stabilization without any convergence, boundedness, module representation, or choice assumption.

The lower bounds are necessary for this support-only argument. At page zero two copies of Z at (0,1) and (0,0) can carry the identity d^0, and at page one two copies at (1,0) and (0,0) can carry the identity d^1. In each case the square-zero condition holds, the next page is zero homology, and the zero tail completes an abstract homological spectral sequence. These are valid single-column and single-row support examples, respectively, that do not collapse at their initial page. Empty support and single-term support cause no exceptional case. This independently confirms the reason for the rejudge's title objection while validating the precisely bounded statement and proof.

This is familiar mathematics: homology of a zero term, induction, maps incident to a zero object, and the displayed integer bidegrees suffice. No mathematical uncertainty required external verification. No external source was fetched or claimed read in this FA review; the inherited source notes are provenance, not a new source-reading receipt.

## Exact repair and scope

Changed only the title of the queued mathematical item to “Collapse from one column at page s ≥ 1 or one row at page s ≥ 2”. Synchronized its title in `research/phase-2-nine-step-25-batch-6.pages.json` and its authored-coverage name in `research/phase-2-nine-step-25-batch-6.coverage.json`; retained the source-derived coverage label. The statement, proof, dependency edges, item identity, and page ordering remain correct. The owning batch-6 proof contract already states both bounds, supplies the exact current definition quotations, and covers both proof steps; no contract change is required by this title repair. Preserved its independent risk review. The merged `research/phase-2-nine-step-25-proof-contracts.json` still contains the pre-Sol F2 record; it is a generated aggregate for the engine to reconcile from the correct owning batch contract at the normal mutable join, not an alternative current proof contract to hand-edit here.

Pre-FA itemHashGuard: `e9df00dd7cc7c2b8b9a6423f3f0a7f15801694eaf6b7107cada2abe49d56d00e`.
Post-FA itemHashGuard: `1dd91c582b063a3926b13e7a596d4d6fdd1f9e04e27133d3aa8974140d3af188`.

Read the bookkeeping rules in `briefs/tasks/frontier-dependency-ledger.md` and checked the owning consumer record `research/phase-2-nine-step-25-batch-6.cross-batch-dependencies.json`. It contains `[]`. All three current suppliers and the removed supplier are on the same owned A page in batch 6; Sol's dependency correction introduces no cross-batch edge. The empty record is therefore still accurate for this repair and needs no invented row. Ran the prescribed ledger refresh successfully. No dependency item was edited and no new lemma was needed; an owner-prerequisite-repair licence is consequently inapplicable.

## Focused validation and completion obligation

- `node tools/tsx-run.mjs tools/precheck.mts items/prop-a-spectral-sequence-supported-in-one-row-or-column-collapses.md`: PASS, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-6.proof-contracts.json --strict --items prop-a-spectral-sequence-supported-in-one-row-or-column-collapses`: 0 errors, 0 warnings, 1/1 checked.
- `node tools/rendercheck.mjs items/prop-a-spectral-sequence-supported-in-one-row-or-column-collapses.md`: passed real KaTeX and renderer YAML checks.
- Owning manifest and coverage JSON parse successfully; inspected manifest title and dependencies against the repaired item.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25`: refreshed and deduplicated, exit 0.

No unresolved mathematical obligation or scope blocker remains. Next action is the prescribed terminal recorder with disposition `repaired` and source status `familiar`, after which the owning Alpha may resume. This review and its checks are terminal FA evidence, not a judge verdict or pass stamp. No third consumer judgment was requested.

Terminal recorder completed successfully (exit 0): recorded this item with disposition `repaired` at context `56a6ccd0241eb8bd33b3b9750f7de5ad6b27127e4766ddd812977c0470c334a8`. The single-item queue is complete; next action belongs to the engine and owning Alpha.
