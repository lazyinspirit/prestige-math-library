# Frontier-31a Step 6b — group b adjudication

**Run:** `frontier-31a`  
**Group:** `b`  
**Owned batches:** `8`, `9`, `10`  
**Status:** complete for group-b artifacts; all routed obligations and thirteen supplemental gate defects have closed decisions with current carrier hashes. The controller has not yet run the stage gates.

## Evidence read

I read the three current Step-6 scope files, reader reports and structured
findings, refuter reports, current routed carriers, their proof contracts and
manifest records, and the cited dependencies needed for the assessments below.
The current reader/refuter artifacts match their scope hashes after correcting
the stale batch-9 reader-report hash left by the named recovery retry. No
independent reader or refuter was rerun.

The current carrier comparison is decisive:

- batch 8 has 76 refuter obligations. Six owner-retry carriers and three
  Alpha-repaired carriers now contain quantified proofs. A subsequent rewrite
  changed every current carrier hash relative to the refuter's
  `observed_sha256`, so hashes alone no longer classify them; direct rereading
  confirms that the other 67 retain the defects recorded below;
- batch 9 has four reader and four refuter obligations. All four page files and
  all 88 item files declared by its current manifest remain absent; and
- batch 10 has six touched obligations and two refuter obligations. All six
  touched carriers were reread, and both refuter findings were retested against
  the repaired current batch-8 prerequisites.

## Completed batch-10 adjudication

The following reader repairs are accepted on the current mathematics and
renderer bytes:

- `def-integral-group-ring-module-and-trivial-module-convention` restores the
  integral group-ring and augmentation notation;
- `def-normalized-bar-resolution` uses equal consecutive homogeneous vertices,
  with identity arguments only after passage to inhomogeneous coordinates;
- `ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group`
  has valid YAML and correctly treats the dimensions `0` and `1`; and
- `thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent`
  uses the degenerate summand and its contraction to identify the quotient.

Two reader repairs required Alpha amendments:

- `lem-degenerate-bar-chains-form-a-contractible-subcomplex` now uses the
  finite filtration by the first repeated-vertex index and vertex-repeating
  simplicial degeneracies, rather than the inhomogeneous phrase “insert an
  identity”; and
- `thm-shapiro-lemma-for-group-homology` now invokes the right
  `Z[H]`-module decomposition supplied by a left-coset transversal. This is the
  correct hand for restricting the projective right `Z[G]`-resolution used in
  homology. Its tensor comparison remains
  `P tensor_{Z[G]} (Z[G] tensor_{Z[H]} M) ~= Res(P) tensor_{Z[H]} M`.

The two batch-10 refuter findings are false positives against the current
files. Their evidence explicitly depended on the former template state of
`thm-projective-dimension-at-most-n-iff-higher-ext-vanishes` and its
load-bearing prerequisites. The current criterion is quantified, includes the
`n=0` endpoint, proves both directions, and proves the projective-object
Ext-one characterization directly. Consequently
`thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` is its
exact specialization to the trivial `Z[G]`-module, and
`thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free`
obtains the contradiction from the explicit periodic cyclic-subgroup
resolution with trivial `Z/m` coefficients.

Eight closed rows were appended through `tools/defect-ledger.mjs append`; their
unique ids are the six `frontier-31a-S6-b-touched-10-*` rows and
`frontier-31a-S6-b-refuter-10-1`,
`frontier-31a-S6-b-refuter-10-2`. The append input is retained in
`research/frontier-31a-alpha-b-6b-ledger-rows.json`.

Nine more closed rows record the repaired batch-8 refuter obligations: the six
owner-retry carriers below and Alpha repairs to
`prop-positive-ext-vanishes-on-a-projective-first-variable`,
`thm-ext-dimension-shifting-in-the-first-variable`, and
`thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective`. Their
append input is retained in
`research/frontier-31a-alpha-b-6b-ledger-rows-2.json`.

## Batch-8 blocker

The owner retry repaired exactly these six refuter carriers:

- `lem-acyclic-assembly-by-exact-columns`;
- `lem-acyclic-assembly-by-exact-rows`;
- `lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact`;
- `lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact`;
- `lem-the-two-hom-double-complex-differentials-commute-before-signing`; and
- `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes`.

Alpha further amended the last theorem to handle `n=0` explicitly and to
derive the Ext-one projectivity criterion from a projective presentation.

The remaining exact refuter-carrier ids are still defective on current disk:

`cex-positive-ext-does-not-vanish-for-an-injective-first-variable`,
`cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms`,
`cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable`,
`cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable`,
`cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite`,
`cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set`,
`def-pullback-and-pushout-of-an-extension`,
`ex-a-noncommutative-yoneda-product`, `ex-an-ext-dimension-shift`,
`ex-baer-sum-of-two-extensions-of-cyclic-groups`,
`ex-ext-from-a-two-term-projective-resolution`,
`ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group`,
`ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes`,
`ex-ext-zero-as-hom-in-both-constructions`,
`ex-global-dimension-of-a-field-and-of-the-integers`,
`ex-naturality-of-the-balance-isomorphism`,
`ex-projective-dimension-of-a-cyclic-abelian-group`,
`ex-splicing-two-short-exact-sequences`,
`ex-the-hom-double-complex-in-low-bidegrees`,
`ex-the-split-extension-as-the-zero-baer-class`,
`fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals`,
`fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m`,
`fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects`,
`fs-balance-of-ext-requires-the-spectral-sequence-pages`,
`fs-equivalence-classes-of-extensions-automatically-form-a-set`,
`fs-ext-is-covariant-in-both-variables`,
`fs-ext-is-defined-before-choosing-or-supplying-resolutions`,
`fs-left-and-right-global-dimension-are-equal-by-definition`,
`fs-positive-ext-vanishes-whenever-either-variable-is-injective`,
`fs-projective-dimension-is-the-length-of-any-projective-resolution`,
`fs-projective-ext-and-injective-ext-are-equal-by-definition`,
`fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category`,
`lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives`,
`lem-equivalent-extensions-have-the-same-ext-class`,
`lem-every-ext-one-class-is-represented-by-an-extension`,
`lem-ext-one-of-z-mod-n-by-z-is-z-mod-n`,
`lem-pullback-and-pushout-descend-to-extension-classes`,
`lem-subgroups-of-free-abelian-groups-are-free`,
`lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data`,
`lem-two-extensions-with-the-same-ext-class-are-equivalent`,
`lem-yoneda-splicing-is-well-defined-on-equivalence-classes`,
`prop-a-morphism-of-extensions-is-an-isomorphism`,
`prop-equivalence-of-extensions-is-an-equivalence-relation`,
`prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses`,
`prop-ext-zero-is-hom-for-the-injective-construction`,
`prop-ext-zero-is-hom-for-the-projective-construction`,
`prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject`,
`prop-global-dimension-zero-characterises-semisimple-module-categories`,
`prop-hereditary-rings-have-global-dimension-at-most-one`,
`prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable`,
`prop-positive-ext-vanishes-on-an-injective-second-variable`,
`prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable`,
`prop-the-ext-balance-isomorphism-is-natural-in-both-variables`,
`prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws`,
`prop-the-two-ext-long-exact-sequences-agree-under-balance`,
`prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product`,
`thm-baer-sum-makes-extension-classes-an-abelian-group`,
`thm-ext-dimension-shifting-in-the-second-variable`,
`thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees`,
`thm-higher-yoneda-ext-agrees-with-derived-ext`,
`thm-injective-dimension-at-most-n-iff-higher-ext-vanishes`,
`thm-long-exact-ext-sequence-in-the-first-variable`,
`thm-long-exact-ext-sequence-in-the-second-variable`,
`thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic`,
`thm-the-integers-have-global-dimension-one`,
`thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one`, and
`thm-yoneda-product-is-associative-and-unital`.

These are not short omissions. Their current statements remain imperatives
such as “Apply”, “Use”, “Give”, or “Prove”, and their bodies retain the generic
two-step construction/conclusion template. The false-statement items likewise
do not exhibit the witnesses needed to refute their written claims. Repairing
67 such carriers is substantive reauthoring, not the smallest coherent Step-6
repair.

The current mandatory risk report identifies five HIGH items. Four remain
directly defective:
`lem-subgroups-of-free-abelian-groups-are-free`,
`thm-higher-yoneda-ext-agrees-with-derived-ext`,
`thm-injective-dimension-at-most-n-iff-higher-ext-vanishes`,
and `thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic`.
The fifth HIGH item,
`thm-projective-dimension-at-most-n-iff-higher-ext-vanishes`, now has a complete
current proof, including the `n=0` endpoint, and its contract now records a
specific completed risk review. The syzygy criterion is now MODERATE and proves
resolution independence. The other four HIGH items have no completed review
because their reported risks remain mathematically unresolved.

## Batch-9 blocker

The four exact page carriers are
`tor-flatness-and-global-dimension`,
`tor-flatness-and-global-dimension-examples`,
`universal-coefficients-and-kunneth-theorems`, and
`universal-coefficients-and-kunneth-theorems-examples`. Each is named once by
the reader and once by the refuter for the same fatal absence. The current
manifest still declares 88 stable item ids, but all 88 item files and all four
page files are absent, and the batch contract truthfully has an empty scope.
Creating the entire Tor/flatness/UCT/Kunneth chapter would be a fresh Step-5
authoring pass, not an adjudication repair. No withdrawal was applied; all ids
remain present for the authorized lead disposition.

## Validation

- `risk-report` without `--require-reviewed`: batch 8 reports five HIGH items;
  batches 9 and 10 report none.
- Reviewed-risk check: batch 8 remains blocked by the four unresolved HIGH
  templates; its one repaired HIGH item has a complete mathematical review.
  Batches 9 and 10 pass this check (with zero HIGH/CRITICAL items).
- Focused reflow: both Alpha-amended batch-10 items unchanged after reflow.
- Focused precheck: the four proof-bearing touched batch-10 items pass.
- Focused rendercheck: all six touched batch-10 carriers pass real KaTeX and
  renderer YAML parsing.
- Focused batch-8 precheck and rendercheck: the four Alpha-repaired carriers
  pass, including real KaTeX and renderer YAML parsing.
- Strict batch-8 proof contract: 75/75, zero errors and warnings.
- Strict batch-10 proof contract: 39/39, zero errors and warnings.
- Batch-10 content policy: 51 items, zero errors and warnings.
- Defect ledger append: seventeen owned rows appended and the generated view
  refreshed.
- Step-6 split check: 910 items, 307 obligations, zero errors before the
  decisions phase.
- Step-6 adjudication check: fails as expected. The owned failures are the
  missing group-b decisions artifact and the seventeen closed ledger rows that
  cannot yet be referenced from it; the checker also reports stale or missing
  decisions belonging to other groups, which were not altered here.

## Named blocker and next action

Group `b` cannot emit a valid
`research/frontier-31a-alpha-b-6b-decisions.json`: its schema has no unresolved
verdict, and `step6-scope.mjs` requires every `confirmed_fatal` row to be
closed by an actual fixed, narrowed, or dropped carrier. Emitting decisions or
completed reviews for the unresolved HIGH items now would certify mathematics
that is visibly absent.

Next action: an authorized authoring retry must replace the 67 named batch-8
scaffolds and author the 88 batch-9 items/four pages, preserving their ids and
contracts. Group-b adjudication must then reread those current bytes, complete
the remaining four HIGH-risk reviews, append the remaining closed rows, emit
every exact decision, stamp current carrier hashes, and run the required
reviewed-risk and focused Step-6 gates.

## Stage-stalemate repair cycle 2

The primary gate still reproduces on the current tree. The required report
`research/frontier-31a-alpha-b-6b.md` is present, but
`research/frontier-31a-alpha-b-6b-decisions.json` is absent, so the stage
correctly reports units 8, 9, and 10 as artifact-incomplete.

The absence is not a stale artifact-accounting false positive. The current
batch-8 scope still contains 76 refuter findings; the 9 findings referenced by
the two retained group-b append inputs have repaired current carriers, leaving
67 unresolved findings. Direct current-file checks confirm that the four
unreviewed HIGH-risk carriers named above remain imperative proof scaffolds;
the one reviewed HIGH-risk projective-dimension criterion remains a substantive
proof. The current batch-9 manifest still declares 88 item ids on four pages,
while all 88 `items/<id>.md` files and all four page files are absent. Batch 10
still has no HIGH/CRITICAL review obligation.

The repository-level cause of the three simultaneous repair cycles has been
repaired in `tools/autopilot/stages/mathlib.step6.mts`: a live
`stage-stalemate` repair now claims the artifact-incomplete units it is
repairing, so the executor no longer rediscovers those units as abandoned on
the next tick or spends all three attempts concurrently. The focused
`a Step 6 stalemate repair claims its artifact-incomplete units` regression
test passes. The complete test file cannot run in this restricted dispatch
sandbox because its pre-existing fixtures invoke `cp` through `spawnSync`
(`EPERM`); this is a mechanical test-environment failure, not a content defect.

No decision or defect-ledger row is added in this cycle: the retry-suppression
bug is mechanical, and emitting the missing decisions artifact would still
falsely close unresolved mathematical obligations. The current gate therefore
remains a named blocker. Its next content action is unchanged: an authorized
authoring retry for the 67 batch-8 carriers and the complete missing batch-9
chapter, followed by a fresh group-b mathematical read and exact decisions.

## Stage-stalemate repair cycle 3

The primary gate was reproduced again from the current run state with the
explicit `frontier-31a` state directory. The current result is
`6b-adjudicate 19/22 covered; missing 1, 18, 19; artifact missing for 8, 9,
10`, with the two retained blockers naming the exhausted synthetic gate and
the artifact-incomplete units 8, 9, and 10. The group-b report exists and its
required decisions artifact remains absent.

Current reader, refuter, carrier, and manifest evidence agrees with cycle 2.
Batch 8 has 76 refuter findings, of which the retained repair evidence closes
9 and leaves the same 67 current carriers unresolved. Direct current-file
checks still exhibit imperative statements and generic two-step templates,
including the false-statement and counterexample carriers that omit an actual
witness. Batch 9 still has the same four fatal page findings from both reader
and refuter; its manifest declares 88 items on four pages, while zero of those
item or page carriers exist. Batch 10's current files and the retained group-b
evidence do not create a new obligation in this cycle.

The event ledger independently confirms the repaired retry-accounting defect:
cycles 1, 2, and 3 were dispatched at roughly 30-second intervals with empty
coverage, and all three retries were exhausted before any could finish. The
current Step-6 dispatch code now assigns a `stage-stalemate` repair the exact
units from the synthetic failure, and the focused regression subtest passes.
The full routing test file remains mechanically unavailable in this restricted
sandbox because pre-existing fixtures spawn `cp` and receive `EPERM`; the new
subtest itself runs and passes.

No additional item, contract, manifest, decision, verdict, or defect-ledger
record is changed by cycle 3. The retry-accounting defect is fixed, but the
primary artifact gate is not clean: the missing group-b decisions artifact
truthfully remains blocked on the 67 batch-8 repairs and the absent batch-9
chapter. Emitting it now would certify unresolved or nonexistent mathematics.

## Stage-stalemate repair cycle 2 — retry verification

The primary gate was reproduced once more from the current tree with
`autopilot status --run frontier-31a --state-dir .autopilot/frontier-31a`.
It still reports `6b-adjudicate 22/22 covered; artifact missing for 8, 9, 10`:
the group-b report exists and its decisions artifact does not.

The current structured reader-finding and refuter files for batches 8, 9, and
10 match the hashes recorded in their Step-6 scope artifacts. Batch 8 still has
76 refuter findings; the 9 subjects in the retained batch-8 ledger append input
are repaired, leaving 67. Direct inspection confirms that the remaining
carriers retain imperative or false-statement scaffolds and generic two-step
proofs. The reviewed-risk check still names exactly four unresolved HIGH items;
the fifth current HIGH item has a complete review and a substantive proof.
Batch 9 still has zero of its 88 declared item files and zero of its four page
files. All 17 retained group-b ledger rows remain present in the append-only
ledger.

The repository repair already present in
`tools/autopilot/stages/mathlib.step6.mts` assigns the synthetic failure's
units to a live `stage-stalemate` repair, so a subsequent executor tick cannot
redispatch those units while that repair is active. The focused regression
`a Step 6 stalemate repair claims its artifact-incomplete units` passes, and
the focused diff check is clean. No further code or mathematical carrier change
is warranted in this retry; no decision or defect-ledger row is added for the
mechanical failure. The gate remains a named content blocker pending the
authorized batch-8 and batch-9 authoring recovery and a fresh group-b read.

## Stage-stalemate repair cycle 1 — retry attempt 2

The synthetic primary gate was reproduced from current disk state with the
run-specific state directory. At 2026-09-05T11:51:40Z it reported
`6b-adjudicate 22/22 covered; artifact missing for 8, 9, 10`; the required
group-b decisions artifact is still absent. Batch 9 also remains incomplete at
stage 5: its manifest declares 88 items on four pages, none of those carriers
exists, and the proof-contract artifact is absent. Batches 8 and 10 currently
have all 94/four and 51/two declared item/page carriers respectively.

The reader and refuter report SHA-256 values for batches 8, 9, and 10 exactly
match the values in their current Step-6 scope records. The current structured
evidence records 76 batch-8 refuter findings, four batch-9 reader findings and
four batch-9 refuter findings, and two batch-10 refuter findings. The batch-8
scope names six HIGH-risk carriers; only the projective-dimension vanishing
criterion currently has a complete `risk_review`. These current bytes confirm
that the missing group-b decision is not an artifact-accounting false positive.

The first retry-suppression edit did not take effect in the already-running
controller. The event ledger shows why: attempts 2 of repair cycles 1, 2, and 3
were again dispatched with empty coverage after `mathlib.step6.mts` changed.
The hot loader watched and cache-busted only `mathlib.mts`, so Node retained the
old imported Step-6 module and its old closure.

The repository repair now treats all `.mts` files in the stage-table directory
as watched sources, fingerprints those sources in the executor, and imports the
composed Step-6 module with its own file version. The active controller logged
the validated stage reload. Its next dispatched stalemate repair is recorded as
`covers 8,9,10`, which is the exact unit claim needed to suppress the former
30-second duplicate-retry loop. The dependency-hot-reload regression, the
focused Step-6 unit-claim regression, the full executor-efficiency test file,
TypeScript typecheck, stage-table import, and focused `git diff --check` all
pass.

This is a repository-mechanical repair, so no item, page, proof contract,
manifest, decision, verdict, or defect-ledger row is added here. The primary
gate remains a named content blocker: batch 8 still requires its substantive
repairs and risk reviews, batch 9 still requires actual authoring, and group b
must then reread the resulting current carriers before emitting exact decisions.

## Stage-stalemate repair cycle 3 — retry attempt 2

The primary gate was reproduced from the run-specific current state after the
controller reloaded the repaired stage table. It reports `6b-adjudicate 22/22
covered; artifact missing for 8, 9, 10`. The group-b report is present and the
required `research/frontier-31a-alpha-b-6b-decisions.json` is absent.

The current reader-finding and refuter JSON files for batches 8, 9, and 10
still hash exactly to the values recorded in their Step-6 scope files, and all
17 retained group-b ledger rows remain present. The carrier tree has changed
since those reports, however, so their former absence and placeholder findings
were checked against current disk rather than treated as verdicts. The
authorized batch-8 recovery reports itself incomplete. It has since re-emitted
a structurally valid 75-item proof contract, but 28 of its 94 manifest items
still contain the exact generic “Apply the definitions and hypotheses” proof
template. Its reviewed-risk check consequently still rejects three HIGH items
with incomplete reviews. The batch-9 recovery has now created all 88 manifest
items and all four pages, so the old missing-carrier evidence is no longer
literally current, but each of its 75 proof-bearing items contains the same
generic two-step construction and kernel/image template. Its structurally
valid contract does not cure those bodies, and its reviewed-risk check rejects
both HIGH items. Direct reads of representative Tor, Ext, Yoneda, and dimension
carriers confirm that these are not mathematical proofs. Batch 10 has no new
current carrier or review obligation.

The retry-accounting repair is effective in the live controller. A
`stage-stalemate` repair now claims the synthetic failure's units, edits to the
composed `mathlib.step6.mts` module trigger a cache-busted stage-table reload,
and the event ledger records the next repair as `covers 8,9,10`. The focused
unit-claim regression, the composed-module hot-reload regression, and the
autopilot TypeScript typecheck pass. The remaining full Step-6 routing fixtures
are mechanically unavailable in this sandbox because their `spawnSync cp`
calls receive `EPERM`; the two focused tests do not use those fixtures.

No item, page, contract, manifest, decision, verdict, or defect-ledger row is
added by this retry. The synthetic gate has no truthful clean decision while
batch 8 remains partially recovered and batch 9's newly present proof carriers
remain generic templates. A fresh group-b mathematical read can emit the exact
decision artifact only after those authoring defects are coherently repaired.

## Stage-stalemate repair cycle 2 — retry attempt 3

The primary gate was reproduced after the two authorized author-recovery
replays had finished writing. The run-specific status still reports
`6b-adjudicate 22/22 covered; artifact missing for 8, 9, 10`, with nothing in
flight, because the required
`research/frontier-31a-alpha-b-6b-decisions.json` does not exist. The exact
Step-6 routing check independently reports the same owned artifact failure;
the seventeen already appended group-b rows remain unreferenced until a valid
group-b decisions artifact exists. Its additional stale/missing decisions for
other Alpha groups are outside this repair's scope and were not changed.

The structured reader-finding and refuter files for batches 8, 9, and 10 still
hash exactly to the values retained in their current Step-6 scope files. Their
carrier observations are not current verdicts, however. Batch 8's replay-2
author recovery completed after those observations and replaced the remaining
generic bodies. All 94 item and four page carriers are present, its regenerated
contract has 75 proof-bearing entries, strict proof-contract and focused
content-policy checks pass, and an exact current scan finds none of the former
generic `Apply the definitions`, generic kernel/image conclusion, or imperative
Statement patterns. Those material post-reader bytes still require a fresh
mathematical adjudication. The current reviewed-risk check names seven
unreviewed HIGH/CRITICAL carriers:
`thm-baer-sum-makes-extension-classes-an-abelian-group`,
`thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one`,
`lem-yoneda-splicing-is-well-defined-on-equivalence-classes`,
`thm-higher-yoneda-ext-agrees-with-derived-ext`,
`cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite`,
`thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees`, and
`lem-subgroups-of-free-abelian-groups-are-free`.

Batch 9's former missing-carrier finding is also stale as a literal description:
all 88 items, four pages, and 75 proof contracts now exist. Direct current-file
inspection rejects the authoring completion claim nonetheless. Every one of
the 75 proof-bearing items repeats the same two non-proving rows: it merely
says to unpack unnamed complexes/maps and then asserts that an unspecified
calculation identifies the required kernel and image. This does not prove even
the two HIGH iff criteria
`thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes`
and
`thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes`;
their contracts also claim all iff and boundary cases are checked by those
same generic rows. The strict contract and content-policy tools pass only the
shape of these artifacts, while `risk-report --require-reviewed` rejects both
HIGH items. Batch 10 has no new carrier or risk-review obligation; its retained
repair evidence remains the applicable group-b record.

The two repository retry-accounting repairs remain effective on current code:
the synthetic repair takes ownership of units 8, 9, and 10, and an edited
composed Step-6 module participates in the stage-table hot-reload fingerprint.
The focused unit-claim and watched-dependency hot-reload regressions both pass.
No further mechanical edit is warranted.

This retry changes only this authorized report. It does not emit a decision,
risk review, verdict, item edit, contract edit, or defect-ledger row. The named
blocker is now precise: batch 9 needs substantive authoring, after which a fresh
group-b read must adjudicate the post-reader batch-8 and batch-9 carriers,
complete every current HIGH/CRITICAL review, bind the existing and any new
closed rows to exact decisions, and rerun the focused Step-6 gates.

## Stage-stalemate repair cycle 1 — retry attempt 3

The synthetic gate was reproduced from current artifact accounting with the
explicit `frontier-31a` state directory. It still reports
`6b-adjudicate 22/22 covered; artifact missing for 8, 9, 10`, with nothing in
flight: the group-b report exists, but
`research/frontier-31a-alpha-b-6b-decisions.json` does not. This synthetic
failure has no independent gate command; it is emitted by the executor when a
covered unit lacks its declared artifact and has no live owner. The similarly
named Step-4 command `splice-plan --all --fail-on-refusal` now exits zero. It
mechanically refreshed changed page composites, but cannot create the missing
Step-6 mathematical decisions.

The current structured evidence remains internally current. For batches 8, 9,
and 10, both the reader-findings and refuter JSON SHA-256 values exactly match
their corresponding Step-6 scope records. Those scopes contain, respectively,
76 batch-8 refuter obligations; four batch-9 reader and four batch-9 refuter
obligations; and six batch-10 touched plus two batch-10 refuter obligations.
All 17 rows retained in the two group-b append inputs are still present under
their unique ids in the append-only defect ledger. The scoped adjudication
check therefore fails on the genuinely absent group-b decisions file and those
unbound rows. Its published-repair diagnostics name group-14 artifacts and are
outside this dispatch.

The old carrier-absence descriptions are no longer literal: batch 8 now has all
94 items and four pages, batch 9 all 88 items and four pages, and batch 10 all
51 items and two pages. Direct current-body comparison nevertheless disproves
the recovery receipts as mathematical completion evidence:

- Batch 8's 75 proof-bearing carriers have only 51 distinct proof bodies. One
  identical generic verification is reused by 13 examples, one generic
  refutation by 12 false statements, and one generic counterexample by two
  counterexamples. These 27 bodies name no actual objects, maps, computations,
  or witnesses. For example,
  `ex-ext-from-a-two-term-projective-resolution` never supplies the advertised
  resolution or computes its kernel and cokernel, and
  `cex-positive-ext-does-not-vanish-for-an-injective-first-variable` never
  chooses the promised second variable or calculates a nonzero Ext group.
- Every one of batch 9's 75 proof-bearing carriers uses one of only three
  generic two-step bodies. Sixty-one share the exact assertion that an unnamed
  “defining calculation” identifies an unspecified kernel and image. The two
  HIGH iff criteria for flat left and right modules contain that same text and
  prove neither implication.

This is substantive missing mathematics, not a short omitted inference. The
mandatory reviewed-risk checks independently reject seven current batch-8
HIGH/CRITICAL items and both batch-9 HIGH items; batch 10 passes with no such
items. The nine rejected ids are exactly the seven and two listed in the
preceding retry record. Structural checks do not cure the defect: strict proof
contracts pass `75/75`, `75/75`, and `39/39`; the focused content-policy check
passes all 233 owned items; and renderer YAML/KaTeX checks pass all ten owned
pages.

No `risk_review`, decision, verdict, item, proof contract, manifest, or ledger
row is added in this attempt. A complete decisions artifact would have to
classify the still-unproved carriers as repaired and bind closed ledger rows,
which would be false. The named blocker is the substantive reauthoring of the
27 batch-8 generic carriers and all 75 batch-9 proof-bearing carriers, followed
by a fresh item-specific group-b read, completion of the nine current risk
reviews, exact decisions and ledger bindings, and the reviewed-risk and Step-6
routing gates.

## Stage-stalemate repair cycle 2 — current completion

The primary gate was reproduced from the run-specific state both before and
after this repair. Before the repair, status reported `6b-adjudicate 22/22
covered; artifact missing for 8, 9, 10`, with nothing running. On the current
tree it reports `6b-adjudicate 22/22 covered; gates not yet run`: the exact
group-b decisions artifact now exists and is stamped, so the
artifact-incomplete cause has been repaired. The status output still displays
the historical stalemate blocker until the build driver next runs its gates;
this Alpha did not trigger a stage transition.

The current reader and refuter JSON files remain byte-identical to the hashes
recorded in the batch-8, batch-9, and batch-10 scope files. Their observations
were adjudicated against current carriers, not accepted as current verdicts.
Batch 8 now has 94/94 items and four pages, batch 9 has 88/88 items and four
pages, and batch 10 has 51/51 items and two pages. The exact generic-template
scan is empty. The completed batch-9 author recovery is recorded in
`research/frontier-31a-dispatch/beta-author-recover-9-1.attempt-3.result.json`;
its current contract covers all 75 proof-bearing items.

The mandatory mathematical reread covered all eight current HIGH/CRITICAL
batch-8 contracts and all six current HIGH/CRITICAL batch-9 contracts. Batch
10 has none. Item-specific complete `risk_review` records now explain the
actual iff, quotient, choice, endpoint, and comparison risks. The Tor-one
flatness criteria check in both hands, and the remaining reviewed claims check
after the following focused repairs:

- batch 8 now handles the projective-dimension-zero Ext witness, the empty
  global-dimension supremum, the extra enough-injectives hypothesis for the
  dual assertion, the terminal and Choice stages in the arbitrary-rank free
  subgroup proof, the projective-pullback dimension shift for higher Yoneda
  Ext, and the actual endpoint mismatch in the noncommutative Yoneda-product
  refutation;
- the previously missed batch-8 pullback/pushout definition now gives the two
  typed universal-property constructions and their induced exact sequences;
  this closes existing obligation `refuter:8:7`, rather than creating a second
  finding; and
- batch 9 now has a typed multiplication-by-r map in the PID flatness proof,
  true checked iff contract boundaries, an explicit `n=0` syzygy convention
  for flat dimension, an explicit Choice assumption and full transfinite
  induction for arbitrary-rank PID submodules, and a licensed Kunneth proof.
  The last item verifies the flatness hypotheses and invokes Weibel,
  *An Introduction to Homological Algebra*, Theorem 3.6.3, printed p. 88,
  whose statement gives precisely the natural tensor/Tor short exact
  sequence. Its declared cross-product, Tor-map, and boundary-freeness
  dependencies identify the maps and discharge the PID hypothesis.

The append-only interface added 83 new closed rows from
`research/frontier-31a-alpha-b-6b-ledger-rows-3.json`: the 67 formerly missing
batch-8 refuter rows, four shared rows for the matching batch-9 reader/refuter
page-absence findings, and twelve supplemental gate rows for the concrete
defects found during this repair. The first decision-application check then
showed that `def-pullback-and-pushout-of-an-extension` still contained its
imperative placeholder, despite the earlier refuter row having been closed.
The definition was repaired and one append-only correction/recurrence row was
added from `research/frontier-31a-alpha-b-6b-ledger-rows-4.json`; the historical
row was not rewritten. Together with the seventeen earlier rows, group b owns
101 unique closed defect rows. The new
`research/frontier-31a-alpha-b-6b-decisions.json` contains 105 unique stamped
decisions: 76 batch-8 refuter decisions, eight batch-9 reader/refuter
decisions, eight batch-10 touched/refuter decisions, and thirteen
`route:"gate"` supplemental decisions. The matching batch-9 reader and
refuter observations share one row per absent page under the checker-required
`same_defect_as` protocol.

Current focused results:

- PASS — content policy for batches 8, 9, and 10: 94, 88, and 51 scoped items,
  with zero errors and warnings;
- PASS — strict proof contracts: 75/75, 75/75, and 39/39;
- PASS — reviewed-risk gates: all eight batch-8 and six batch-9 required
  reviews complete; batch 10 has no required HIGH/CRITICAL review;
- PASS — focused precheck and renderer checks for every materially edited
  item, including the categorical pullback/pushout displays;
- PASS — current-run defect ledger validation: 321 rows, zero errors; and
- PASS for group-b ownership — each scoped adjudication check for batches 8,
  9, and 10 reports no group-b decision, ledger, carrier-hash, or
  decision-application error. The command still exits nonzero only for
  `published-claim-extra: lem-sheaf-condition-check-on-basis` and
  `published-repair-extra: reader:14:1`, both owned by batch 14 and therefore
  outside this dispatch.

There is no unresolved group-b mathematical or artifact obligation. The next
authorized action belongs to the build driver: run the pending stage gates and
resolve the separately owned batch-14 publication diagnostics. No judge or
stamp outcome was self-certified here; `stamp` above refers only to the
Step-6 current-carrier hashes required by the decision schema.

## Gate repair cycle 1 — `step6-routing-adjudicate`

The live gate was reproduced on September 6, 2026. I reread the two batch-10
carriers `ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group`
and `thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent`
against `research/frontier-31a-reader-10.md`, their declared dependencies, and
the current contract. Their item and manifest hashes still exactly equal the
frozen post-reader hashes; only their contract hashes changed during later 6b
contract reconciliation. The dimensions `0` and `1`, the nonzero `H^1`
witness, the degenerate summand, quotient, section, and contraction remain
correct on current bytes.

Both touched decisions are therefore retagged from `accepted_repair` to
`amended_repair`. Two `route:"gate"` nonfatal decisions and matching rows were
added through `research/frontier-31a-alpha-b-6b-gate-ledger-rows.json`; current
carrier hashes were restamped. The full primary gate now reports `910 item(s)
routed, 374 adjudication obligation(s), 0 error(s)`. No group-b blocker remains.
