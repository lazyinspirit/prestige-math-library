# Batch 15 notes — `em-variational-mathematical-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, 2026-10-08. Scope: exactly one A/B
pair, orders 309/319, category `classical-electromagnetism-mathematics`, library
`mathematics`. Final inventory: **2 A items + 1 B item**, all three recorded
`ready` at Step 1 with current dependency hashes. No item file, page, plan,
published item, engine state or verdict was edited. Files written: the batch
manifest, coverage, cross-batch input, the three `step1-*` records, the refreshed
unified ledger (tool-owned) and this note.

The owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read
first. It authorises local mathematical suppliers and forbids trimming promised
claims; both were applied (see "Inventory decisions").

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L853–L941
(the "Em Variational Mathematical Prerequisites" reservation, quoting
`proposed-inventory.json` and `mathematical-prerequisites.md#M17`,
`mathematical-example-verifications.md#ex-em-variational-mathematical-prerequisites-hypothesis-boundaries`).
Compared with `research/plan-spec.json` entries 309/319:

- page ids, kinds, orders (309/319), category, library `mathematics`, titles,
  A/B companion links and the declared `requires`
  (`em-elementary-mathematical-prerequisites`, `em-minkowski-mathematical-prerequisites`)
  agree exactly. **No plan conflict.**
- the design's A inventory (2 lemmas, levels 1 and 2) and B inventory (1 example,
  level 3) are carried in full: the two promised items
  `lem-em-fundamental-variation-lemma` and `lem-em-compact-field-variation` plus
  `ex-em-variational-mathematical-prerequisites-hypothesis-boundaries`. Labels
  recomputed with the supplier batches 13 and 14 in scope equal the declared
  levels (1, 2, 3). A=2 and the pair is far below the 100-item cap; no split.
- `inventory_expansion_required: false` retained on all three items: the design's
  M17 arguments suffice; nothing beyond M17 was added except recorded deps (below).
- the design's closing sentence "Particle-curve variation is completed in V1;
  source-gauge compatibility in V2" is respected: `lem-em-particle-curve-variation`
  is on `em-expanded-analysis-prerequisites` and the gauge/source theorem is on
  `em-action-and-variational-formulation`; both are recorded as `deferred` with
  those destinations in the coverage file, not built here.

## Inventory decisions (recorded, not silent)

1. **Design dep blocks are not item-specific.** The four-item analysis block
   (`def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`,
   `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`) recurs
   in 26–27 of the 217 inventory items and is not consumed by these arguments.
   Kept: `def-ck-euclidean-maps-and-diffeomorphisms` in both A items (the
   smoothness classes of the fields and test functions are genuinely used) and
   `def-euclidean-inner-product` in both A items, which supplies the Euclidean
   inner-product notation under which the statements write the pairing
   `int_U <g,h> dlambda` (it is notation, not an extra hypothesis: the bump
   construction itself is delegated to the published cutoff lemma, so no
   explicit `|x|^2` formula is used). Removed with reasons, no claim weakened:
   - `thm-algebra-of-derivatives` / `thm-chain-rule-for-total-derivatives` dropped
     from `lem-em-fundamental-variation-lemma` (no derivative computation in the
     recorded proof). In `lem-em-compact-field-variation` the derivative
     computations are multivariable: the linearity of the variation is supplied
     by `def-directional-and-partial-derivatives` and
     `thm-algebra-of-total-derivatives`; there is no chain rule use.
   - `def-distributional-derivative` replaced as recorded below.
2. **`lem-em-fundamental-variation-lemma` (level 1).** Design-specific deps kept:
   `lem-em-continuous-localization` (used through its contrapositive) and
   `lem-test-function-cutoffs-and-euclidean-localization` (the bump). Added the
   suppliers the recorded proof consumes and names no IDs for in the design's
   summary ("localization/continuity, positivity of ball integral"):
   `def-test-function-space-d-of-an-open-set`, `def-metric-continuity`,
   `def-metric-ball`, `thm-componentwise-limits-and-continuity` (product of
   continuous functions), `def-integral-over-a-measurable-set`,
   `cor-continuous-functions-are-borel-measurable`,
   `prop-order-and-scalar-rules-for-the-nonnegative-integral` and
   `def-countable-choice`. The statement preserves M17 exactly: continuity of
   `g`, all `h` in `C_c^\infty(U;R^m)`, conclusion `g = 0` pointwise and the
   vector case componentwise; the strategy additionally records that a merely
   measurable `g` vanishing almost everywhere passes every test pairing, so the
   pointwise conclusion genuinely uses continuity.
3. **`lem-em-compact-field-variation` (level 2).** `def-em-minkowski-affine-space`
   and `lem-em-fundamental-variation-lemma` kept. **`def-distributional-derivative`
   replaced** by the stronger published chain `def-weak-derivative-of-a-locally-integrable-function`
   plus `lem-classical-derivatives-are-weak-derivatives`: the definition of the
   distributional derivative alone does not yield the integration-by-parts test
   identity that M17 needs, whereas the weak-derivative definition is exactly
   that identity and the published lemma identifies the classical derivative of
   the `C^1` coefficient with it. Added
   `thm-linearity-of-the-lebesgue-integral-on-l-one`,
   `thm-extreme-value-metric` and `thm-lebesgue-measure-of-a-box-of-every-kind`
   for the finiteness/linearity of the three coefficient integrals on the
   bounded open `U`. The M17 statement is preserved with all claims: exact
   functional `-F_{mu nu}F^{mu nu}/(4 kappa) + J^nu A_nu` on a bounded open subset
   of `R^4`, smooth extension to a neighbourhood of the closure, compactly
   supported smooth variations, the quadratic-polynomial expansion, the
   derivative at `s = 0`, the integration-by-parts form, the iff with
   `partial_mu F^{mu nu} = -kappa J^nu`, the explicit "with continuous
   coefficients" reading and the explicit disclaimer that existence of
   stationary fields and the physical identifications are later choices.
4. **Record refresh.** After the first readiness pass the compact-field
   strategy gained an explicit well-definedness sentence (extension of `h` by
   zero to `N` and smoothness of `A+sh`), and both A items restored
   `def-euclidean-inner-product`; the affected readiness records were re-recorded
   with the current hashes (the tool refreshes a stale record and refuses to
   overwrite a current one, so unchanged ready items were preserved). The
   statements and dependency sets of the example were never changed by these
   edits.
5. **Example.** The design's text is preserved (stationary point need not be a
   minimum; independent of any physical action) and one exact check was added in
   the example's declared "hypothesis boundaries" role, following the batch-14
   precedent: with `U = (-1,1)^4`, `kappa = 1`, `J = 0`, `A_0 = (x^1)^2`, the
   coefficient equation fails (`partial_1 F^{10} = -2`), while along the smooth
   non-compactly-supported variation `h_0 = 1` the integrand is independent of
   `s` and the first variation vanishes — so the compact-support hypothesis of
   the compact-field lemma is essential to its integration-by-parts conversion
   and stationarity equivalence. `def-em-minkowski-affine-space` was added to
   the example's deps for that explicit sign/index check; the design's two deps
   are kept unchanged.

## Dependency verification (actual uses, not declared edges)

All 22 distinct suppliers resolve: 18 published items on disk and the four
in-run items (`lem-em-continuous-localization` on batch 13,
`def-em-minkowski-affine-space` on batch 14, and the two A items of this batch).
Read for this batch (statement, hypotheses, conventions, direction): the
cutoff lemma (ZF, `0 <= chi <= 1`, `chi = 1` near a compact `K`),
`lem-em-continuous-localization` (AC_omega; all balls compactly contained in the
open `U`; pointwise conclusion), `def-metric-continuity`, `def-metric-ball`,
`def-test-function-space-d-of-an-open-set`,
`thm-componentwise-limits-and-continuity` (clause 3 gives continuity of
`<f,g>`; with `m = 1` this is the product of continuous real functions),
`def-integral-over-a-measurable-set`,
`prop-order-and-scalar-rules-for-the-nonnegative-integral`,
`cor-continuous-functions-are-borel-measurable`, `def-countable-choice`,
`def-ck-euclidean-maps-and-diffeomorphisms`,
`def-directional-and-partial-derivatives`, `thm-algebra-of-total-derivatives`,
`def-weak-derivative-of-a-locally-integrable-function`,
`lem-classical-derivatives-are-weak-derivatives` (Countable Choice,
`C^k`, local integrability, signed test identity),
`thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-extreme-value-metric`,
`thm-lebesgue-measure-of-a-box-of-every-kind`, and the batch-14 statement of
`def-em-minkowski-affine-space` (signature `(-,+,+,+)`, index raising and
lowering, tensor components). No missing, circular, forward or inadequate
dependency was found; the only cross-batch item edges are
`lem-em-fundamental-variation-lemma -> lem-em-continuous-localization` and
`... / example -> def-em-minkowski-affine-space`, all three recorded in
`research/physics-em-sr-40-2026-10-08-batch-15.cross-batch-dependencies.json`.

## AC declarations and exact uses

Both A items state `AC_omega` and list `def-countable-choice`:

- `lem-em-fundamental-variation-lemma`: through the localisation lemma (positive
  measure of Euclidean balls) and the Borel-measurability of the continuous
  product `g*chi`; no other step uses choice.
- `lem-em-compact-field-variation`: through
  `lem-em-fundamental-variation-lemma` and
  `lem-classical-derivatives-are-weak-derivatives` (both assume Countable
  Choice). The polynomial expansion itself is choice-free.

The example inherits no extra choice assumption beyond its two A deps. No item
uses the full Axiom of Choice; no `deferred-set-theory-beyond-choice` path is
touched (foundations rule).

## Source harvest

Two independent lecture-note treatments, both full text fetch-verified and
stamped; 13 harvested results, all disposed (6 included, 4 deferred with
resolvable destinations, 3 out-of-scope with specific reasons).

| source | kind | locator |
|---|---|---|
| Figueroa-O'Farrill, Brief Notes on the Calculus of Variations (Edinburgh), 29 pp. | lecture-notes | sections 4 and 14 complete (printed pp. 4–6, 22–26); remaining headings inspected |
| Tong, Electromagnetism (Cambridge Part II), ch. 5, 39 pp. | lecture-notes | §5.5.3 complete, printed pp. 124–126, eqs. (5.42)–(5.43); §5.1–§5.4 and §5.5.1–5.5.2 inspected |

Convention dictionary (checked against use): Tong writes the `(+,-,-,-)` metric
and couples the source as `-A_mu J^mu`, concluding
`partial_mu F^{mu nu} = + mu_0 J^nu`; this pair uses the `(-,+,+,+)` form `eta`
of `def-em-minkowski-affine-space` and the density
`-F_{mu nu}F^{mu nu}/(4 kappa) + J^nu A_nu`, concluding
`partial_mu F^{mu nu} = -kappa J^nu`. Every sign is rederived in the pair's
conventions; only the structure of Tong's variation is reused. Tong discards
the total derivative "as usual"; the recorded proof instead makes the
compact-support test identity explicit, and the B example exhibits a
non-compactly-supported variation for which that conversion fails.
Figueroa-O'Farrill's Theorem 4 states the multidimensional lemma for `C^2`
functions vanishing on the boundary; the pair states the `C_c^\infty(U)` form,
whose compact-support bump construction is the source's, with smoothness
delegated to the published cutoff lemma.

## Checks run (actual results)

- `manifest-deps` (batch file): 3 items, 0 missing, 0 errors. Whole-run
  invocation over all 40 manifests: 49 items, 0 errors.
- `content-policy --manifest-only` (batch file alone): 3 items, 3 errors — all
  `batch-dependency-missing` for the two in-run suppliers from other batches,
  which resolve when the whole run is in scope. Whole-run invocation over all 40
  manifests: 49 items, 0 errors, 0 warnings.
- `item-dependency-levels` (exported `dependencyLevels` over batches 13, 14, 15):
  computed labels equal the declared labels (1, 2, 3); no errors, no cycles.
  Whole-run `check --run`: 72 `empty scaffold inventory` errors for other batches
  still in flight, none for batch 15.
- `coverage-checklist --require-destination`: 1 page, 13 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check --stamp`: 2/2 fetch-verified (CoV notes: 528,702 bytes,
  29 pp., sha256_16 `ef689d9498b149b2`; Tong: 612,508 bytes, 39 pp., sha256_16
  `47798362fe073b50`); check mode 2/2 resolved, 0 drops.
- `url-sweep --coverage ... --recover`: 2/2 live, 0 failed, 0 recoverable
  (output written to `/tmp`, not engine state).
- `step1-decisions`: 3 `ready` records with current hashes (re-recorded after
  the refresh described above; `check --run` confirms all three closed);
  `check --run` reports 49/49 currently declared run items ready, and neither
  this batch's pages nor its items appear in the work list.
- `validate-plan research/plan-spec.json`: exit 0; page-level only (578 planned
  pages still carry no spliced item list; that is Step 4).
- `extcheck --quiet`: exit 0 — every recorded-not-proved statement is a cited
  remark with no proof, and every consequence is marked.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `frontier-dependency-ledger refresh`: batch input present with 5 rows (2 page
  edges, 3 item edges); 0 orphaned reviews; all 5 edges of this batch carry the
  review rows.
- `physics-check --plan research/plan-spec.json`: **FAILED**, exit 1, with
  `mathematics import changed: items/thm-hilbert-basis-theorem.md; reconcile and
  re-import before a new run` — see the blocker below. Not caused by this batch
  and not repairable here.

## Unresolved findings

- **Import drift blocking the whole-run `physics-check` (owner action, outside an
  active run).** The original mathematics file
  `/home/lazyinspirit/Projects/prestige-math-library/items/thm-hilbert-basis-theorem.md`
  now has sha256 `7fc568a1f412bc1ae5d2af6c8a0863326166a82bdb51604cf219ffddee0c8737`
  and mtime 2026-10-08 23:28:34 +1100 (12:28:34Z), and shows as modified (`M`) in
  the parent repository's working tree, while the pinned hash in
  `research/math-imports.json` and the physics snapshot are
  `477f7015a44a084bb9bad3dfc213a2e362bb4d1d697e0e64d6511a39d46ee895`. The change
  appeared during this run (the same check passed for batch 13 minutes earlier)
  and is unrelated to this batch: no item here reaches
  `thm-hilbert-basis-theorem` through any dependency path. Reconciliation is the
  owner's re-import action, not a worker edit; reported, not repaired.
- **Sibling-batch observation for the canonical ledger (not published content).**
  Batch 13's `lem-em-continuous-localization` declares
  `thm-monotonicity-of-the-integral`, which is the Darboux-integral monotonicity
  theorem on a real interval, while its argument is about the Lebesgue integral
  (the matching supplier is
  `prop-order-and-scalar-rules-for-the-nonnegative-integral`). Its statement,
  which is what this batch consumes, is adequate and was verified; the dep list
  of the supplier should be audited by its own Step-3 author. Also recorded in
  cross-batch review row 3.
- No defective actual prerequisite was found among the 18 published suppliers
  used. No escalation is recorded; all three items are `ready`. Owner/operator
  reconciliation and the full engine gate follow, and Step 3 provides the
  independent mathematical review.
