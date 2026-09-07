# frontier-33 — Step 6b group h adjudication

Dispatch: `6b-h`. Owned batches: `19` and `20`. This is a group-Alpha
mathematical adjudication report, not a judge verdict, publication stamp, or
stage transition.

## Scope and evidence checkpoint

I read the two live Step-6 scope files, both reader reports and findings JSON
artifacts, both refuter reports, the current carriers, their cited dependency
statements, the post-reader and pre-6b snapshots, and the full pre-6b contract
audit. I independently checked the written claims, hypotheses, quantifiers,
typing, citations, and applicable empty, zero, endpoint, choice, and iff cases.

The frozen reader/refuter report hashes still match the scope files. The batch-19
reader and both batch-20 independent roles succeeded on their first attempts.
For batch 19, the first three refuter result attempts ended with exit 1 and no
result tail; the preserved `attempt-1.replay-2` and canonical result both
succeeded and cover all 59 items and four pages with no finding. I used the
successful current report as evidence only and independently reread its scope.

There are no reader or refuter finding obligations in either batch. The ordinary
routes are:

- `touched:19:prop-well-foundedness-and-descending-sequences`;
- `touched:20:lem-antichains-well-order-linearly-ordered-sets`; and
- 32 `post-reader:20:<id>` item carriers discovered by comparing the frozen
  snapshots.

For all 32 stabilized carriers, item and manifest hashes are identical between
the post-reader and pre-6b snapshots; only the proof-contract hash changed. The
full gate replaced repeated template boundary rationales with item-specific
proof evidence. The one substantive boundary-row correction is
`lem-skolem-witness-closure-on-a-cardinal`: steps 1.1 and 2.2 include the
constant-zero Skolem function and require nonzero `alpha` for elementarity.

## Mathematical dispositions

The batch-19 reader repair is accepted. The former proof cited an induction
theorem requiring setlikeness although the proposition's forward implication is
for any well-founded relation. The current proof uses the defining
minimal-element property directly on the range of the alleged descending
sequence. The converse retains the explicitly supplied choice function, so no
choice principle is smuggled into the forward direction.

The batch-20 reader repair is retained and amended only by its required risk
review. The former strict within-component relation was irreflexive and hence
not a partial order under the library definition. The current reflexive
component order is a partial order; maximal-antichain comparability then
well-orders the index family and each supplied linearly ordered component,
including the empty family.

The 11 stabilized carriers accepted exactly at the pre-6b state are:

- `lem-starting-point-free-dependent-choice`
- `ex-dependent-choice-partial-tuples`
- `lem-limit-points-of-unbounded-sets`
- `prop-basic-stationary-set-calculus`
- `thm-fodor-pressing-down`
- `cor-club-filter-is-least-normal-tail-filter`
- `lem-unbounded-stationary-fibres-yield-a-partition`
- `lem-splitting-stationary-sets-of-fixed-cofinality`
- `cor-club-filter-not-an-ultrafilter`
- `cex-unbounded-domain-does-not-suffice-for-fodor`
- `ex-transfinite-subway-pressing-down`

The remaining 21 stabilized carriers are `amended_repair` because their
independently completed HIGH/CRITICAL `risk_review` records change the current
contract hash beyond the pre-6b snapshot:

- `lem-multiple-choice-produces-maximal-antichains`
- `lem-bounded-hierarchy-for-the-multiple-choice-argument`
- `thm-countable-choice-gives-countable-subsets`
- `cor-countable-choice-and-omega-one-cofinality`
- `thm-halbeisen-shelah-no-powerset-sequence-injection`
- `lem-hartogs-iterated-powerset-bounds`
- `lem-powerset-fibres-force-well-orderability`
- `lem-closure-points-on-regular-cardinals`
- `thm-small-intersections-of-clubs`
- `thm-diagonal-intersection-of-clubs`
- `thm-normal-function-fixed-points-form-a-club`
- `thm-regular-cofinality-strata-are-stationary`
- `lem-stationary-set-minus-its-trace`
- `lem-splitting-stationary-regular-cardinals`
- `thm-solovay-stationary-partition`
- `lem-skolem-witness-closure-on-a-cardinal`
- `thm-elementary-initial-segments-form-a-club`
- `ex-club-tails-limits-and-diagonal`
- `ex-stationary-cofinality-strata`
- `fs-countable-intersections-of-clubs-are-always-club`
- `ex-normal-function-fixed-points-at-omega-one`

The exact 34 obligation-level decisions, evidence, unique ledger references, and
current carrier hashes are in
`research/frontier-33-alpha-h-6b-decisions.json`. The tally is 12
`accepted_repair` and 22 `amended_repair`; no change is reverted.

## Risk review

The initial no-`--require-reviewed` runs routed 29 HIGH/CRITICAL proofs in
batch 19 and 41 in batch 20. I read all 70 current proofs and their relevant
reader/refuter and citation evidence. The main load-bearing issues were mutual
syntax recursion and substitution, arbitrary-class versus setlike
well-foundedness, exact rank/hierarchy iff statements, ZF choice-strength
boundaries, Hartogs/local-GCH constructions, strict cofinality bounds,
diagonal-club and pressing-down arguments, stationary splitting, and Skolem
closure at zero. No additional defect was confirmed.

Every routed contract now has
`risk_review: {status: complete, reviewer: alpha-6b-h, notes: ...}`. Each note
identifies the proof's concrete derivation and a checked boundary, and the two
special repaired risks have direct tailored notes. Both
`risk-report --require-reviewed` invocations exit 0.

## Ledger accountability and validation

The two reader repairs and 32 post-reader contract repairs have unique closed
rows `frontier-33-A6b-h-001` through `frontier-33-A6b-h-034`, appended only
through `tools/defect-ledger.mjs append`. The generated ledger view was
refreshed by that interface. No ledger row was invented for the required review
record itself.

Owned checks:

- strict proof contracts: batch 19, 41/41 and batch 20, 53/53; zero errors and
  warnings;
- boundary audit with contradicted/template failures enabled: 752 rows, no
  contradicted disposition and no template cluster;
- citation fidelity: 212 citations, no missing quote or widening candidate;
- content policy: batch 19, 59 items and batch 20, 68 items; zero errors and
  warnings;
- both focused author checks: pass;
- required risk reports: pass;
- defect-ledger validation for `frontier-33`: 597 rows checked, zero errors;
- decision stamping: all 34 current carrier hashes written;
- `git diff --check`: pass.

The batch-scoped `step6-scope check --phase adjudicate` reaches global
published-repair state outside group h and currently reports two group-c
in-flight errors: an unmatched published claim for
`def-tensor-product-total-complex-of-chain-complexes` and an unmatched
`reader:6:1` repair receipt. Both batch-19 and batch-20 invocations otherwise
report their one ordinary touched obligation and no group-h error. Those
group-c artifacts are outside this dispatch and were not edited.

Next action: rerun the batch-scoped Step-6 checker after the owning group-c
published-repair handoff is internally matched; no group-h mathematical or
artifact repair remains.

