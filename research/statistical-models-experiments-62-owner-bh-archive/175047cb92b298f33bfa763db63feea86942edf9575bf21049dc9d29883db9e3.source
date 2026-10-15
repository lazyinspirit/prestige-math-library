# Batch 54 authoring notes — BH independent FDR

Run: `statistical-models-experiments-62` · batch: `54` · pair: `benjamini-hochberg-independent-fdr-control`.

## Inventory and dependency order

The scaffold manifest records five items before carrier authoring. In-run
dependency levels are `0`: `def-false-discovery-rate-and-familywise-error-rate`
and `alg-benjamini-hochberg-step-up-procedure`; `1`:
`lem-benjamini-hochberg-leave-one-out-identity`; `2`:
`thm-benjamini-hochberg-independent-fdr`; `3`:
`ex-benjamini-hochberg-fdr-versus-fwer`. The pair's separate batch scheduling
level remains `1`, with batch `52` as its prerequisite. External published
suppliers do not raise item levels.

The local FDR definition repeats the exact FDP/FDR/FWER conventions needed by
the theorem and B example so they can be fully authored before batch 52
supplies its planned interface. If the batch-52 page later publishes a
canonical definition, that overlap must be reconciled by the owner before
readiness; no supplier ID has been guessed here.

## Plan and design reconciliation

No substantive design/plan conflict was found. SME-54's conceptual
requirements map to the current plan's page IDs: SME-52 to
`valid-p-values-bonferroni-and-simultaneous-coverage`, MSF-08 to
`finite-sample-tests-neyman-pearson-and-valid-p-values`, and the
mutual-independence/product-law requirement to
`independence-borel-cantelli-and-zero-one-laws`. The exact page requirements
and the batch-54 scheduling input hash are recorded in
`statistical-models-experiments-62-batch-54.cross-batch-dependencies.json`.

The plan calls for the source's leave-one-out/induction route. The authored
proof retains the leave-one-out structure but proves a pointwise identity for
each true-null coordinate and then averages it using the planned stronger
assumption that all p-values are mutually independent. It gives the exact
identity `FDR=(m0/m)q`; the requested upper bound follows. The source induction
argument was read and visually checked, but it is not silently imported as a
missing proof. This is a proof-route variation: it keeps the leave-one-out
argument and every planned hypothesis/claim, but does not reproduce the
source's induction conditioning only on false-null values. The owner/reviewer
should reconcile that route choice at handoff.

## Unresolved batch-52 interface

At initial inspection, `research/statistical-models-experiments-62-batch-52.pages.json`
listed the required A page with `items: []`, and no SME-52 item IDs or bodies
were available to inspect. The exact unresolved page supplier is
`valid-p-values-bonferroni-and-simultaneous-coverage`; its item-level supplier
IDs are undeclared. The theorem's FDR/FWER definitions and the B example's
definition use are affected. Required hypotheses remain the fixed finite
family, `m>=1`, `q in (0,1)`, mutual independence of all p-values, exact
Uniform[0,1] true-null p-values, and arbitrary false-null laws subject to that
independence. The theorem and B example are recorded as escalated until the
planned page interface can be verified; all independent definitions, the
algorithm, and the deterministic leave-one-out lemma are locally complete.

The MSF-08 page and actual published suppliers were inspected. The theorem
uses `def-p-value` for the measurable `[0,1]` p-value convention. The
published `thm-p-value-superuniformity` statement and proof were read, but it
is not a logical input to this BH bound: exact uniformity is explicitly
assumed and directly implies superuniformity. The actual
`def-independent-random-elements`,
`thm-grouping-independent-sigma-algebras`, and
`thm-independent-random-elements-have-product-joint-law` statements/proofs
were inspected. Their hypotheses match the fixed finite family, and the
product-law proof uses finite products only. No axiom of choice is used; the
item dependency list contains no `def-axiom-of-choice`.

## Source reading and dispositions

Three full-text treatments are recorded in the A-page source coverage:

- Benjamini–Hochberg (1995): inspected Theorem 1 on PDF p. 6 and the complete
  Appendix A induction proof on pp. 12–13; the step-up formula and proof
  equations were checked against the cached page images. The author-hosted
  full 13-page PDF passed the live full-text fetch check.
- Benjamini–Yekutieli (2001): read the independent-case derivation in §5,
  PDF pp. 16–17, including equations (18)–(21) and Theorem 5.1. The cited
  legacy Project Euclid URL returned only an 81–83-character HTML wrapper on
  the initial attempt and all five retries. The alternative searches and six
  attempts are preserved in `batch-54.coverage.json`; that URL is marked
  dropped with complete local proof arguments/dependencies for every result
  it supported. The local full-text cache's exact passages were inspected.
- Stanford STATS 200 Lecture 11: inspected the BH rule/theorem on PDF pp. 28–29
  and the complete proof on pp. 32–36. The full 36-page PDF passed the live
  full-text fetch check and supplies a full lecture-notes treatment.

The remaining exact source locators, item support map, fetch stamps, attempt
history, searches, and per-result dispositions are in
`statistical-models-experiments-62-batch-54.coverage.json`. No source drop
waives the theorem or lemma proof obligations.

## Check results and readiness

Scoped results:

- `manifest-deps` checked all five manifest items; no missing `deps` arrays.
- The scoped dependency-level computation on the two batch-54 pages found
  levels `0, 0, 1, 2, 3` and no cycles. The page and item metadata sync checks
  found no mismatches.
- `content-policy` checked five items with zero errors or warnings.
- Focused `depcheck --items-file` checked the five items, their 367-item
  prerequisite closure and 260 prerequisite pages with zero errors or
  warnings.
- `proof-contract --strict` checked the lemma, theorem, and example with zero
  errors or warnings. Definitions and the algorithm have no proof phase.
- `precheck` passed all three proof-bearing items. Final
  `proof-layout` checked five changed items and 13 proof steps with zero
  defects.
- `rendercheck` passed all five item files and both page files.
- `source-fetch-check` resolved all three source entries: BH95 and Stanford
  Lecture 11 have full-text stamps; the BY01 legacy endpoint is a documented
  drop with local complete proof alternatives.
- The B example's finite two-test calculation is checked analytically in its
  verification steps. No registered finite-smoke computation applies, so the
  proof contract leaves `finite_checks` empty rather than inventing a check.

`proof-contract-coverage --run statistical-models-experiments-62` could not
complete because `frontierGateScope` encountered the empty manifest inventory
for `stratified-sampling-and-allocation`, outside this pair. The batch-54
proof-contract check above passes; the run-wide coverage command must be
revisited after other assigned manifests are populated.

An initial attempt to inspect `depcheck` with `--help` invoked its default
whole-corpus mode, which reported unrelated existing published-item audit
failures and made no changes. It was not used as batch evidence; the focused
`--items-file` check above is the scoped result.

Step-1 decisions recorded `ready` for the FDR/FWER definition, BH algorithm,
and leave-one-out lemma, and `escalated` for the theorem and B example because
the planned batch-52 item interface was unavailable at initial inspection.
These are authoring readiness records, not independent mathematical approval.
