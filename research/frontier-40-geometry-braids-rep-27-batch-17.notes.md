# Batch 17 scaffold notes — Projective GIT from Linearized Line Bundles

Run `frontier-40-geometry-braids-rep-27`, batch 17, pair 883/884, category
`algebraic-geometry`: A page `projective-git-from-linearized-line-bundles` and
B page `projective-git-from-linearized-line-bundles-examples`. All 19 scaffold
items (17 A, 2 B) are recorded `ready` at Step 1. This is scaffold readiness,
not proof acceptance, and no item Markdown exists yet: Step 3 owns authoring
and every item gate after it.

## Scope, design and plan reconciliation

The design contract (`research/plan-algebraic-geometry-expansion-track.md`,
AG-ACT-4 at L35 and its row in the AG-ACT table) commissions exactly four A
items and two B items; all six are preserved verbatim in scope:

- A: `def-g-linearization-of-an-invertible-sheaf`,
  `def-semistable-and-stable-points-for-a-linearization`,
  `thm-projective-git-quotient-from-invariant-section-ring`,
  `thm-good-and-geometric-quotient-on-stable-locus`.
- B: `ex-gm-on-projective-line-with-two-linearizations`,
  `cex-semistable-locus-depends-on-linearization`.

Thirteen local helpers close the proof route (invariant graded-ring and
chart-gluing lemmas, the linear-action theorem, the finite-generation inputs,
and the recorded non-existence remark); they satisfy the design's instruction
that the quotient construction be proved rather than cited. `plan-spec.json`
for orders 883/884 has empty item lists and the same `requires` set as the
design (AG-ACT-3 plus AV-18/19/22), so **no plan/design conflict was found**;
the inventory is the scaffold's construction of the planned empty row.

The design's explicit warnings are honoured: every theorem keeps the
linearization as a hypothesis; no item claims that an arbitrary ample bundle
linearizes (that statement is recorded externally as
`rem-linearization-existence-outside-this-pair`, `proved_here: false`, with the
connectedness/normality hypotheses and a `source_url` matching its reference);
and no Hilbert–Mumford criterion is used or claimed. The drift review
(`...-alpha-step1-drift.md`) marked the pair `no-drift` with the source gate
open; that gate is now closed as described below.

## Source gate closure (design-named treatment)

The design said: "the proof of 1.35 is incomplete ... Source gate open: read
and close the omitted proof using MFK or Dolgachev; neither was reviewed."
This batch closes the gate with **Dolgachev**:

- I. Dolgachev, *Lectures on Invariant Theory*, LMS Lecture Note Series 296,
  CUP 2003, full text at
  <https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf> — 1,079,098 bytes,
  SHA-256 prefix `a8dd7e454af26ddf`, 232 pages, `source-fetch-check --stamp`
  verified. Read and used: Ch. 6.1 (pp. 91–95), Ch. 7.1 (pp. 103–105),
  Ch. 8.1 with Remark 8.1 (pp. 115–117), **Theorem 8.1 with its proof
  (pp. 118–120)**, **Proposition 8.1 with its proof (pp. 120–121)**, and
  Examples 8.1–8.4 (pp. 121–124). Theorem 8.1 is the omitted Brion 1.35
  statement (good categorical quotient `X^ss(L) -> X^ss(L)//G`, geometric
  quotient on the stable locus, ample descent); Proposition 8.1 proves
  `X^ss(L)//G = Proj R(X,L)^G` for `L` ample and `X` projective. Dolgachev is
  now cited on the nine items it backs, with exact locators.
- Independent treatments already verified in full text: Brion (Props. 1.29,
  1.31, 1.35 read at printed pp. 11–12), Hoskins (Thms 5.3, 5.6 with proofs,
  Remark 5.20, Thm 5.23, Remark 5.26 at pp. 35–43), Newstead (Thm. 1.6,
  Thm. 1.12 with proof in §3.4, Thm. 3.4, Example 4.1). The load-bearing
  claims of every item were checked against these texts, including the
  direction of every twist and the hypotheses of every theorem.
- MFK (Mumford–Fogarty–Kirwan) was **not** retrievable in open full text;
  the entry is retained as a dropped source with a genuine six-attempt log
  (Springer DOI/bot-wall, Springer book page/bot-wall, archive.org
  borrow-only, Google Books "No eBook available", HathiTrust 403, author page
  403) and two recorded web searches. Its harvested result is covered by the
  alternatives (Dolgachev Thm. 8.1/Prop. 8.1 plus the local chain), so the
  drop waives only the fetch, not any mathematics.

Newstead's HAL landing URL is bot-walled and its direct file URL is
script-blocked; the citation URL is the Wayback Machine copy of the same
official file (`web.archive.org/web/20231019082211id_/...`), stamped as
222,797 bytes / 18 pages / `18a50cebe7d7c8a0`, matching the copy independently
downloaded and read for this review. The twelve failed attempts (six landing
URL, six direct-file URL) are preserved in `recovery_history` with an
explanatory note.

Correction of the prior attempt's record: an earlier scaffold attempt left
MFK/Dolgachev attempt timestamps dated `2026-10-04T20:00Z` (ahead of the
actual clock) and asserted that Dolgachev had no open full text. Both were
wrong. The retrieval log was re-run honestly and replaced; the claim that
Dolgachev is unavailable is withdrawn.

## Mathematical corrections made in the review

- `ex-gm-on-projective-line-with-two-linearizations`: the earlier draft used
  `t·[e_0:e_1]=[te_0:t^{-1}e_1]` with monomial weights `2i-n`; under the
  standard (natural) linearization of `O(1)` those weights are the negatives
  of what was written, so the action was changed to
  `t·[e_0:e_1]=[t^{-1}e_0:te_1]`, making the stated weights, the twist
  shifts, and the cases correct. The claim of *trivial* stabilizers on
  `{e_0e_1 != 0}` was also wrong (the stabilizer is `mu_2 = {t : t^2 = 1}`);
  it is now stated as transitive with finite stabilizer `mu_2`. The
  Newstead Example 4.1 comparison now records that he states it for `n >= 2`
  and that `n = 1` is the same computation.
- `lem-graded-invariants-of-localization-at-an-invariant-element`: the
  strategy now defines the localized Reynolds operator
  `R~(a/f^n) := R_A(a)/f^n` and proves well-definedness by clearing
  denominators, instead of the loose "apply R_A to a fraction" wording.
- The prior attempt's "Hoskins' Example 4.13" pointer does not exist
  (Hoskins 4.13 is an unrelated exercise); the example now cites Hoskins'
  Example 5.8 with `n = 1` and Newstead's Example 4.1.

## Dependency-level results

`node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
reports no `dependency-level` error for any batch-17 item. Inside the batch the
levels run 0–12 in authored order; the only cross-batch suppliers are batch-16
items (10 distinct IDs, 23 declared item edges plus the page `requires` edge),
and out-of-run published suppliers do not raise any level. Remaining run-wide
level errors belong to other units (empty inventories in batches 24/26 and
mislabeled items on the resolution pages of batch 25); they are not this
batch's pages and were not edited.

`manifest-deps` (19 items), `manifest-integrity` (54 pages owed, 54 present,
no scope drift), `validate-plan` (acyclic, no unresolved ids for the 1420
populated pages) and whole-run `content-policy --manifest-only` (766 scoped
items, 0 errors, 0 warnings) all pass.

## Cross-batch consumer input

`research/frontier-40-geometry-braids-rep-27-batch-17.cross-batch-dependencies.json`
has one row for each of the 24 declared cross-batch edges (1 page edge to
`reductive-affine-invariant-theory-and-geometric-quotients`, 23 item edges to
batch-16 items), each recording the exact required claim, its use in the
consumer, and `status: open` because scaffold compatibility is established
but native authored proofs are pending. The unified ledger refresh merged all
24 rows with no orphaned reviews. Rows and ledger are not mathematical
certificates.

## Checks run (actual results)

- `coverage-checklist --require-destination`: 2 pages, 48 harvested results,
  0 errors, 0 warnings (the 48 rows are source-anchored; every decline names a
  destination or a specific reason).
- `source-fetch-check` (check mode): 8/9 sources fetch-verified, 9/9 resolved,
  1 documented drop (MFK); `--stamp` re-ran successfully for Dolgachev and
  the recovered Newstead copy.
- `url-sweep`: 6/6 coverage URLs live, 0 suspect.
- `source-backing`: every authored result still backed by an openable source
  or a documented alternative argument.
- `content-policy --manifest-only` (all 27 batch manifests): 0 errors.
- `frontier-dependency-ledger refresh`: merged; batch-17 owns 24 reviewed rows.

Final verification pass (after the last manifest edit and the readiness
records): `step1-decisions check` shows all 19 batch-17 items closed with no
batch-17 entry among the current open work; `coverage-checklist`,
`manifest-deps`, whole-run `content-policy --manifest-only`,
`manifest-integrity` and `source-fetch-check` re-ran with the results above;
`depcheck`/`precheck`/`proof-layout` are not meaningful yet because no
batch-17 item file exists (Step 3 authors them). Run-wide
`item-dependency-levels` still reports six empty-inventory errors for the
three pairs whose manifests are not written yet (`highest-weights-...`,
`deformation-theory-...`, `higher-dimensional-resolution-...`); no error
names a batch-17 item, and those pages were not edited here.

## Open items and honest caveats

- Hoskins' Theorem 5.23 proof is omitted in her notes ("very similar to
  Theorems 5.3 and 5.6"); the ample case is closed by Dolgachev's Theorem 8.1
  and by the local reduction items, and the scaffold does not rely on
  Hoskins 5.23 as a proof.
- All theorem statements still have to be written and checked in Step 3; the
  scaffold statements, strategies and dependency lists are the contract, not
  finished proofs. The equivalence of the invariant-section and embedded
  semistability/stability definitions, the orbit-closure fibre description
  and the stable-locus openness argument are the proof steps Step 3 must
  carry in full.
- No published item was edited and no published defect was found for this
  pair, so no published-consumer ledger row is owed by this batch.
- The twelve recorded Newstead attempts and the MFK drop are retrieval
  history, not outages claimed to be permanent; the archived Newstead copy
  and the author-hosted Dolgachev copy are both live as of this review.
