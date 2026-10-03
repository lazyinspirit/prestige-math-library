# Step 3b — scaffold audit and authoring: pair `the-hook-length-formula-and-rsk-correspondence`

- Run: `frontier-38-owner-30`
- Dispatch label: `step3b-pair-the-hook-length-formula-and-rsk-correspondence-2eefa21ee654b0f6`
- Role: alpha-high, pair author (A + B pages, batch 9).
- A page: `the-hook-length-formula-and-rsk-correspondence` (20 items)
- B page: `the-hook-length-formula-and-rsk-correspondence-examples` (5 items)
- Category: `representation-theory`; orders 510.051/510.052.

## Owned IDs (authoring order; dependency level, page)

Level 0 (A): `def-hook-arm-leg-and-hook-length`,
`def-row-insertion-and-bumping-route`,
`lem-standard-tableau-removal-recursion`.

Level 1 (A): `def-reverse-row-deletion`,
`lem-hook-product-change-under-corner-removal`,
`lem-row-bumping-route-monotonicity`.

Level 2 (A): `def-column-insertion-for-distinct-letters`,
`lem-first-row-insertion-basic-subsequences`,
`lem-hook-product-branching-identity`,
`lem-robinson-schensted-recording-tableau-is-standard`,
`lem-row-insertion-and-reverse-deletion-are-inverse`.

Level 3 (A): `lem-row-and-column-insertion-commute`,
`thm-hook-length-formula`, `thm-robinson-schensted-correspondence`,
`thm-rsk-correspondence-for-two-line-arrays`.

Level 4 (A): `cor-rsk-symmetry-under-inversion`,
`cor-sum-of-squares-of-standard-tableau-numbers`,
`lem-word-reversal-transposes-the-insertion-tableau`; (B):
`ex-empty-and-singleton-rsk-boundaries`,
`ex-hook-lengths-for-row-column-and-hook-shapes`,
`ex-hook-table-for-shape-three-two-one`,
`ex-rsk-insertion-and-reverse-deletion`.

Level 5 (A): `cor-involutions-are-counted-by-standard-tableaux`,
`thm-schensted-longest-increasing-and-decreasing-subsequence-theorem`.

Level 6 (B): `ex-rsk-for-involutions`.

## Open obligations at entry

1. Author all 25 item files under `items/` from the batch-9 scaffold
   (`research/frontier-38-owner-30-batch-9.pages.json`), with complete proofs
   and source locators, then write both library pages and the batch proof
   contracts.
2. Check every published supplier named in a `deps` array before use
   (`def-partition-young-diagram-and-conjugate-partition`,
   `def-young-tableau-standard-tableau-and-shape`,
   `def-removable-and-addable-nodes-of-a-partition`,
   `lem-largest-entry-of-a-standard-tableau-is-removable`,
   `def-semistandard-tableau-and-kostka-number`,
   `def-finite-symmetric-group-and-permutation-notation`,
   `thm-standard-polytabloid-basis`, and the five polynomial items used by
   `lem-hook-product-branching-identity`).
3. No in-run sibling supplier is outstanding for this pair; all other
   in-run dependencies are items of this pair (authored here in level order).
4. Carry the two Step-3a observations: (a) inversion symmetry has one
   complete source treatment among those read (Knuth Thm 3) — the local proof
   is the digraph proof of `thm-rsk-correspondence-for-two-line-arrays`;
   (b) Etingof locator is PDF pp. 17–18.
5. Run, on the final content: explicit-path precheck, rendercheck,
   proof-layout (all changed item paths in one command), content-policy item
   mode, strict proof-contract gates, `item-dependency-levels check`,
   `manifest-deps`, `validate-plan`, then record item decisions.

## Checkpoint log

(Appended as items are authored; see sections below.)

## Completion (Step 3b handoff, run frontier-38-owner-30)

All 25 owned items are authored, both library pages are written, the batch
proof contract is on disk, every required item decision is recorded, and the
pair scope decision was already closed at Step 3a (`sufficient`). The
authoring order followed the dispatch exactly (ascending dependency level,
ties by page order and item ID), each item was checked before the next was
started where the level order allowed, and the three shared-batch files were
not touched.

### Completed IDs and decisions

- Level 0: `def-hook-arm-leg-and-hook-length` (accept),
  `def-row-insertion-and-bumping-route` (accept),
  `lem-standard-tableau-removal-recursion` (accept).
- Level 1: `def-reverse-row-deletion` (repaired: source URL typo `~bilho`
  corrected to `~billey`), `lem-hook-product-change-under-corner-removal`
  (repaired: statement corrected, see below),
  `lem-row-bumping-route-monotonicity` (accept).
- Level 2: `def-column-insertion-for-distinct-letters` (accept),
  `lem-first-row-insertion-basic-subsequences` (accept),
  `lem-hook-product-branching-identity` (repaired: `R(x)` corrected),
  `lem-robinson-schensted-recording-tableau-is-standard` (accept),
  `lem-row-insertion-and-reverse-deletion-are-inverse` (accept).
- Level 3: `lem-row-and-column-insertion-commute` (accept, with the
  qualification recorded below), `thm-hook-length-formula` (accept),
  `thm-robinson-schensted-correspondence` (accept),
  `thm-rsk-correspondence-for-two-line-arrays` (accept).
- Level 4: `cor-rsk-symmetry-under-inversion` (accept),
  `cor-sum-of-squares-of-standard-tableau-numbers` (accept),
  `lem-word-reversal-transposes-the-insertion-tableau` (repaired: dependency
  added, see below), `ex-empty-and-singleton-rsk-boundaries` (repaired:
  boundary wording corrected), `ex-hook-lengths-for-row-column-and-hook-shapes`
  (accept), `ex-hook-table-for-shape-three-two-one` (accept),
  `ex-rsk-insertion-and-reverse-deletion` (accept).
- Level 5: `cor-involutions-are-counted-by-standard-tableaux` (accept),
  `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem`
  (accept).
- Level 6: `ex-rsk-for-involutions` (accept).

Files: `items/<id>.md` for all 25 IDs;
`library/representation-theory/the-hook-length-formula-and-rsk-correspondence.md`
(20 items, no examples) and
`library/representation-theory/the-hook-length-formula-and-rsk-correspondence-examples.md`
(5 examples, no items); `research/frontier-38-owner-30-batch-9.proof-contracts.json`
(scope 25, 106 citations, 157 numbered steps, all eight boundary rows per item).

### Scope repairs made on disk

1. `lem-hook-product-change-under-corner-removal`: the scaffold statement
   claimed the hooks change on `arm(x) ∪ leg(x)`, which is false for a
   removable node (both sets are empty; e.g. lambda=(2), x=(1,2):
   P(lambda)/P(lambda-x)=3 but the empty product is 1). The item file now uses
   R_x = {(a,j): j<b} ∪ {(i,b): i<a} ⊆ [mu] (boxes of row a left of x and
   column b above x), each of hook length one less in lambda, with the ratio
   the product over R_x; the proof and `thm-hook-length-formula` use this set.
   The scaffold statement in `research/frontier-38-owner-30-batch-9.pages.json`
   still carries the old wording: report as a pre-splice plan mismatch for
   Step 4.
2. `lem-hook-product-branching-identity`: `R(x)` is correspondingly the product
   over R_x; the branching identity sum R(x)=n is proved via first-column hook
   lengths and the Lagrange-interpolation identity
   sum_i z_i prod_{j≠i}(1+1/(z_j-z_i)) = sum_i z_i - C(r,2), with the
   coefficient computation of t^{r-1} in g(t)=tQ(t-1)-(r-t)Q(t); verified
   numerically for n up to 10 and over random fields.
3. `ex-empty-and-singleton-rsk-boundaries`: the scaffold phrasing "the removal
   recursion is the tautology 1=1 at n=0" was replaced by the accurate
   statement that at n=0 the recursion is not asserted (Rem(empty)=empty,
   f_empty=1 is the convention) while at n=1 it reads f^(1)=f_empty; this is a
   minor Step-4 wording reconciliation.
4. `lem-word-reversal-transposes-the-insertion-tableau`: one dependency added,
   `lem-row-bumping-route-monotonicity`, to supply standardness of the
   intermediate tableaux when the commutation lemma is applied; the item's
   level stays 4, and the batch scaffold dependency list for this item remains
   to be reconciled at Step 4.
5. No new items were created on this pair (no added suppliers); all
   prerequisites of the owned items are either published items or items of
   this pair authored earlier in the level order, and every published supplier
   named in the scaffold deps was inspected before use. No consumer has an
   unfinished supplier, so no decision is escalated.

### Checks actually run (final content)

- Explicit-path precheck on all 25 item paths:
  `21 checked, 0 failing` (the four definitions are skipped by precheck).
- `proof-layout` once, all 25 changed item paths in one command:
  `25 items, 157 steps, 0 defects`.
- `proof-contract.mjs research/frontier-38-owner-30-batch-9.proof-contracts.json --strict`:
  `0 error(s), 0 warning(s), 25/25 item(s) checked`.
- `boundary-audit.mjs <contract> --fail-on-template --fail-on-contradicted`:
  no template clusters, no contradicted dispositions.
- `citation-fidelity.mjs <contract>`: 106 citations, no quote-not-found rows,
  no widening candidates.
- `manifest-deps.mjs research/frontier-38-owner-30-batch-9.pages.json`:
  `25 item(s), 0 error(s)`.
- `content-policy.mjs research/frontier-38-owner-30-batch-9.pages.json`:
  `25 scoped item(s), 0 error(s), 0 warning(s)`.
- `item-dependency-levels.mjs check --run frontier-38-owner-30`: exit 0,
  `818 item(s) checked across 60 page(s), maximum level 16`; no batch-9 item
  appears in the error set and no level was raised by the local repairs.
- `coverage-checklist.mjs research/frontier-38-owner-30-batch-9.coverage.json
  --require-destination`: `2 page(s), 87 harvested result(s), 0 error(s)`.
- `source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-9.coverage.json`:
  `9/9 source(s) fetch-verified`.
- `rendercheck.mjs` on the 25 items and the two page files: `OK — 27 file(s)`.
- `extcheck.mjs`: OK overall; the listed "rests on material not proved in this
  library" rows are published items of other pages, none of them ours.
- `fwdcheck.mjs` and `depcheck.mjs`: the reported link-unplanned rows,
  b-leaf-content rows and the schemes page cycle involve other (published and
  sibling-run) content only; no batch-9 item or page is named.
- `validate-plan.mjs research/plan-spec.json`: `OK — declared page order is
  acyclic and consistent`; the two `redundant-prereq` warnings name the
  abelian-varieties pages, not this pair.
- `step3-decisions.mjs check --run frontier-38-owner-30 --phase final`: all 25
  batch-9 item decisions are current (`accepted 584` of 818 run-wide; none of
  the still-open items belongs to this pair and the pair scope row is closed).

### Published concerns (report only; ledger reconciliation is serial)

- Repo-wide precheck over `items/*.md`: `18785 checked, 31 failing`, all of
  them published items outside this pair (mostly `untagged-steps` in
  frontier-37-era geometry/topology items such as
  `thm-toponogov-hinge-comparison`, `cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound`,
  `def-sheaf-total-quotient-rings`, and the two `cartier`/`blowup` rows).
  None of the 25 owned items is among the 31; confidence high (exact gate
  output), evidence is the precheck run above. Required repair for the
  responsible owners: adopt the canonical step form via the formatter for the
  named files; this pair needs no change.
- `fwdcheck`/`depcheck` show pre-existing cross-page cycles and B-leaf
  dependencies in other families (schemes, Verma modules, sheaf cohomology);
  suspicion of genuine plan/dependency debt there, but outside this pair's
  scope and untouched by this work.

### Open qualifications for Steps 5–8 / Step 4

- `lem-row-and-column-insertion-commute` (level 3): the proof follows the
  complete direct treatment of Schensted's Lemma 6 in Abram–Reutenauer
  (arXiv:2303.16026), translating the trail conventions to the English diagram
  convention of this library. The disjoint case and the "at most one common
  box" claim are proved self-containedly in steps 2.1, 2.2 and 3.1; the shared
  case (steps 2.3, 3.2, 3.3, 4.1) states and uses the source's finite
  configuration analysis (its Lemmas 5.1-5.4, Corollary 5.5, Proposition 6.2
  and Section 7), which is authoritative and complete but defers two routine
  verifications to the reader (Corollary 5.5's finite list and the boundary
  sub-cases of Proposition 6.2). Author-side independent checks: the identity
  was verified exhaustively for all standard tableaux of size at most six with
  all insertable letter pairs, and on 17,219 random instances up to size nine,
  with zero failures; the trail-intersection claims were verified on the same
  runs. Step 5 should re-verify the local conflict rule of steps 3.2/3.3
  against the source figures before this item is treated as fully audited.
- Step 4 reconciliation items: the two corrected statements (R_x and the
  boundary wording), the added dependency of
  `lem-word-reversal-transposes-the-insertion-tableau`, and the recorded
  sources in the item files that go beyond the scaffold locators (the
  Abram–Reutenauer note, Sagan's survey and the two-line-array locators) should
  be folded into the shared plan/manifest prose without disturbing siblings.
- No merge tool for batch contracts is present in `tools/` at this revision
  (`tools/merge-contracts.mjs` does not exist), so per-batch contract
  validation was run directly and cross-batch merging remains an obligation of
  the serial reconciler.
