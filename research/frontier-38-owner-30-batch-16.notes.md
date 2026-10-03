# Batch 16 scaffold notes — Lawrence–Krammer–Bigelow Representations and Linearity

Run: `frontier-38-owner-30`. Beta batch 16, covering exactly the pair
`lawrence-krammer-bigelow-and-linearity` (A, order 747) and
`lawrence-krammer-bigelow-and-linearity-examples` (B, order 748), category
`braid-groups`. This dispatch wrote only the batch manifest, coverage, notes,
Step-1 readiness records, and the consumer cross-batch dependency input.

## Design control

Both assigned design locations are in `research/plan-braid-groups-track.md`:
L528 is the BG-10 A-page table (commissioned item inventory, dependency sketch,
proof route and source locators) and L563 is the BG-10 examples table (the four
B-page items). The two locations do not conflict, and the A-page table is the
controlling design for the pair. `research/frontier-38-owner-30-owner-authoring-direction.md`
is binding and overrides stale design text; for 747/748 it directs that every
missing equivariant two-complex/H2 prerequisite be closed locally, which is
what this batch does. `research/plan-spec.json` records the page-level reading
order, the seven `requires` pages (all published, checked) and, for page 747,
the four local additions with `local_addition: true`.

## Plan/spec conflicts and corrections recorded

1. **Design row 8 is overattributed and is replaced.** The design item
   `lem-the-lkb-absolute-module-injects-into-relative-homology-with-fraction-field-dimension-n-choose-two`
   claims an absolute-to-end-relative injection attributed to Bigelow 2002
   Lemma 4.2. The full text of that lemma states the absolute-to-fraction-field
   statement only: `Q(q,t)⊗H_2(C̃)` has dimension `binom(n,2)` and the natural
   map `H_2(C̃) → Q(q,t)⊗H_2(C̃)` is injective (Bigelow 2002, Lemma 4.2, printed
   p. 8). It says nothing about `H_2(C̃, ν̃)`, and exactness alone does not give
   such an injection. Evidence: `research/frontier-38-owner-30-local-prereq-747.md`
   section “Correction needed in the local rank-row description”, which the
   Alpha drift review accepted (`research/frontier-38-owner-30-alpha-step1-drift.md`,
   verdict `no-drift` for this page: the two-complex/rank seam is resolved).
   The retained proof plan does not need the relative injection: the needed
   inputs are the fraction-field rank (row 8's true content) plus the closed
   surface/triangular pairing packet. The local item
   `lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank`
   (already placed on the page by plan-spec) carries the true content. The
   design row 8 identifier is therefore not scaffolded, and no local claim
   depends on an absolute-to-relative injection.
2. **The four local additions are already in plan-spec.** Pages 747's plan
   item list contains exactly the four `local_addition` items drafted during
   the seam investigation; the commissioned inventory of the design table is
   not in that list and is added here, as Step 1 scaffolding requires.
3. **Relative pairing modules need the stabilization item.** The design's
   `def-lkb-relative-pairing-modules` dependency list omits the item making the
   `lim_{ε→0}` well defined. The local
   `lem-lkb-small-end-neighbourhoods-stabilize-equivariantly` supplies the
   canonical inverse transition maps, and is now a `deps` entry of that
   definition; the design's reversed-arrow ambiguity is resolved by the
   explicit stabilized convention in the item contract.
4. **The arc minimal-position/bigon packet has no published supplier.** Design
   rows for the extremal-term lemma and the Key Lemma use minimal positions and
   digon removal (Bigelow 2001 Lemma 3.1, itself citing FLP Proposition 3.10),
   and the edge-fixing lemma uses “the smooth relative arc criterion”; the
   library had no item for the arc version. A new local prerequisite,
   `lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions`,
   supplies existence of minimal-position representatives, the
   disjointness-detecting criterion and the avoidance clause used to keep the
   successive disjoining isotopies away from edges already arranged. Its
   sources are Farb–Margalit Proposition 1.7 with the arc discussion of
   §1.2.7 (monograph, fetch-verified) and Bigelow 2001 Lemma 3.1.
5. **AC is carried where the classical braid group is used.** The published
   identification of the classical braid group with the boundary-fixed
   mapping class group (`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
   published with “Assume the Axiom of Choice”) is used to read braid classes
   as mapping classes. Ten items therefore carry `Assume AC` and
   `def-axiom-of-choice` in `deps`, each with the exact use recorded in its
   readiness record: `lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions`,
   `lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel`,
   `lem-the-fork-noodle-pairing-detects-essential-intersections`,
   `lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy`,
   `lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power`,
   `lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly`,
   `lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared`,
   `def-lawrence-krammer-bigelow-representation`,
   `thm-the-lawrence-krammer-bigelow-representation-is-faithful` and
   `cor-every-classical-braid-group-is-linear`. The arcs/extremal/detects items
   carry AC from the library's AC-dependent Jordan–Schönflies disk theorem; the
   braid/mapping-class items carry it from the published identification; the
   edge-fixing item carries it because its proof consumes both the AC-dependent
   kernel-braid lemma and the ACω smooth relative isotopy extension lemma
   (discharged through `thm-choice-implies-dependent-implies-countable-choice`);
   and the representation, full-twist, faithfulness and linearity items carry it
   through their consumers. The remaining 20 items are choice-free: the cell
   model, absolute differential, end stabilization, pairing and closed-surface
   arguments use only finite choices. If a later review prefers to state the
   representation on the mapping class group directly, or obtains a direct
   `ACω` proof of the edge-fixing step, the AC assumptions can be reduced from
   the affected topological items; that is a Step-3/Step-5 scope decision.
6. **Full-twist scalar kept with two independent routes.** Reading Krammer’s
   seven-case formulas in the basis `x_ij` (Krammer section 3) and checking the
   braid relation numerically for `n=3` gives `(ρσ₁ρσ₂ρσ₁)² = q⁶t²I`, i.e.
   `ρ(Δ²)=q^{2n}t²`, consistent with Krammer Lemma 3.2
   `Δx_{n+1-j,n+1-i}=tq^{i+j-1}x_{ij}` applied twice. Bigelow’s standard-fork
   pairing computation gives the same scalar. The item keeps the scalar
   statement; both routes are recorded in its strategy.

## Inventory

A page: 26 items — 21 of the design’s commissioned rows (row 8 replaced as
above), the four existing local additions, and the new minimal-position
prerequisite. B page: the four designed examples/counterexamples. Every item
carries an explicit `deps` array and a recomputed `dependency_level`
(0…14); `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
reports no error for any of these 30 items (the only errors are empty
inventories of other, still-unscaffolded batches).

## Sources

Five coverage sources, all fetch-verified with full-text stamps in
`research/frontier-38-owner-30-batch-16.coverage.json`:

- Bigelow, *Braid groups are linear*, JAMS 14 (2001) 471–486, author-hosted
  final article (`https://web.math.ucsb.edu/~bigelow/publications/03.pdf`),
  sections 1–3 and Theorem 4.1 read in full; 16 PDF pages.
- Bigelow, *The Lawrence–Krammer representation*, arXiv:math/0204057v1,
  sections 2–4 read in full, sections 4.1–4.2 and Lemmas 4.2–4.6 in detail.
- Krammer, *Braid groups are linear*, Ann. of Math. 155 (2002) 131–156,
  complete author text arXiv:math/0405198v1; section 3 and Lemma 3.2 read in
  full, Theorem 4.6 as the independent faithfulness treatment.
- Farb–Margalit, *A Primer on Mapping Class Groups*, version 5.0 author draft
  (archived copy), section 1.2 including Proposition 1.7 and the arc version
  in §1.2.7, plus §2.2.1–2.2.2; monograph, the required primary-kind source.
- Paoluzzi–Paris, *A note on the Lawrence–Krammer–Bigelow representation*,
  AGT 2 (2002) 499–518, sections 2–3 (Theorem 2.1, Lemma 3.3, Propositions 3.4
  and 3.6): independent integral treatment and the explicit cellular basis.

This gives two independent treatments (Bigelow 2001 topological, Krammer
algebraic) plus two independent integral-basis treatments (Bigelow 2002,
Paoluzzi–Paris). Salvetti’s paper is cited inside the local cell-model item;
its full scan was read by the seam investigation via the Göttingen IIIF scans
recorded in `research/frontier-38-owner-30-local-prereq-747.md`, and the
accessible Farb–Margalit monograph is the fetch-verified treatment for the
classical digon criterion. Every harvested heading received a disposition; two
declines per source are recorded with specific reasons (no boilerplate).

## Checks run and results

- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-16.pages.json`
  → `30 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-16.pages.json`
  → `30 item(s), 0 missing, 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-16.coverage.json --require-destination`
  → `1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-16.coverage.json`
  → `5/5 source(s) fetch-verified`, `5/5 resolved`.
- `node tools/url-sweep.mjs --coverage research/frontier-38-owner-30-batch-16.coverage.json`
  (output to `/tmp`, no run artifact touched) → `5/5 live; 0 failed`.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` → no open
  work for any batch-16 item (30/30 ready); remaining work belongs to other
  batches.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  → no error for any batch-16 item; the reported empty-inventory errors are
  other batches still being scaffolded.
- `node tools/fwdcheck.mjs --quiet` → the only two errors are
  `def-multiplicative-type-coordinate-hopf-algebra` and
  `lem-multiplicative-type-affineness-by-field-descent` (batch 25 items), not
  this batch. `node tools/extcheck.mjs` → OK.
- `node tools/validate-plan.mjs research/plan-spec.json` → exits 0.
- Whole-run `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-*.pages.json`
  → `326 scoped item(s), 4 error(s)`, all four `batch-dependency-missing` in
  other batches (three on the level-one modular forms page of batch 21, one
  translation-functor item of batch 7); none is a batch-16 item or dependency.
  Whole-run `node tools/manifest-deps.mjs` on the same files → 0 errors.
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs` on the
  four existing local item files → `4 items, 28 steps, 0 defects` (format
  check only). The default renderer loader still fails on this machine; the
  workaround app directory is the recorded one from the seam investigation.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  → refreshed; `research/frontier-38-owner-30-batch-16.cross-batch-dependencies.json`
  is the empty input for this batch. This batch declares no cross-batch item
  or page edges: every `deps` target is either published on disk or an earlier
  item of this same batch. The five edges in the unified ledger belong to
  batches 11/24/25/26/27 and are the consumers’ to review.

## Unresolved findings and authoring obligations (for Step 3/5)

- **Integral spanning.** Bigelow’s Lemma 4.6 says “Use a similar argument to
  Lemma 4.5, as suggested by Figure 7.” The scaffolded item
  `lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials`
  carries the explicit obligations: enumerate the oriented cut pieces and deck
  displacements, prove `(1-q)^2 | x_{i,j}` and the stronger
  `(1-q)(1+qt)(1-t) | x_{n-1,n}` in the stabilized boundary-plus-end group, and
  compute the unit-normalized exceptional pairing of the genus-two `(1,3)`
  class with `σ₂x_{2,3}`. This is not proved by the cited phrases and must be
  written out at Step 3.
- **Krammer lattice comparison.** `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two`
  and the B-page example record that the identification with Krammer’s matrix
  lattice is only over `Q(q,t)` and that the two integral bases are not
  identified. No claim of integral isometry is made.
- **Edge-fixing successive isotopies.** The design’s route “chosen successively
  away from edges already fixed” is supplied with the new minimal-position
  avoidance item and the published smooth relative isotopy extension lemma;
  the author must still verify that the fixed-arc avoidance hypotheses are met
  at each induction step (including the `n=2` case, where the fixed-noodle
  list is empty and the argument reduces to the boundary-twist scalar step).
  No circuit through `π₁`-triviality is used.
- **No published defect was found in a supplier used here.** All examined
  out-of-run items are published and state what the design assumes; the only
  previously suspected defect was the design’s own row 8 overattribution,
  recorded above and not a published item.

## Post-interruption reconciliation (attempt 2 continuation, 2026-10-03)

Attempt 2 of this dispatch was stopped by the operator at 2026-10-02T16:48Z while
the batch process was still completing its final readiness re-records. The
manifest and coverage were already on disk; three readiness records had been
invalidated by the last manifest write (15:44:07Z) and not yet refreshed
(`thm-the-lawrence-krammer-bigelow-representation-is-faithful`,
`cor-every-classical-braid-group-is-linear`,
`cex-a-linear-representation-need-not-be-faithful`). This continuation inspected
the current content, repaired one axiom-strength defect, and re-recorded the
affected outcomes in dependency order (levels 11…14).

**Axiom-strength correction.** The design row for
`lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power`
lists `lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy`
and the smooth disk-arc isotopy extension lemma as its dependencies, and the
scaffold had stated the item over `ACω` only. `ACω ⇏ AC`, so a proof that
consumes the AC-dependent kernel lemma (the successive edge-fixing/disjoining
isotopies) cannot be soundly stated over `ACω`; the item contract was therefore
corrected to `Assume AC`, `def-axiom-of-choice` and
`thm-choice-implies-dependent-implies-countable-choice` were declared (the
bridge also discharges the `ACω` extension lemma), and `def-countable-choice`
was dropped from `deps` because the item no longer assumes `ACω` itself. No
mathematical claim was weakened: the design itself states no axiom for this
row, the item is consumed only by the AC-based faithfulness theorem, and every
other item in the closure already assumes AC. The alternative repair (drop the
designed kernel-lemma dependency and keep a direct `ACω` proof that avoids the
AC-level minimal-position machinery) was considered and rejected as unsound
without a completed direct avoidance proof; an author who later supplies that
proof may strengthen the statement back to `ACω` and drop the kernel
dependency, which would be a Step-3 improvement, not a defect. `dependency_level`
11 is unchanged (all added suppliers are out-of-run/published).

The re-recorded items are
`lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power`
(level 11), `thm-the-lawrence-krammer-bigelow-representation-is-faithful`
(level 12), `cor-every-classical-braid-group-is-linear` (level 13) and
`cex-a-linear-representation-need-not-be-faithful` (level 14); each record names
the examined dependencies, the AC use and the full-text locators. The other 26
records were preserved unchanged.

**Re-run results (this continuation).** `item-dependency-levels` — no
batch-16 error. `step1-decisions check` — no open work on either page (30/30
current). `coverage-checklist --require-destination` — 1 page, 48 harvested
results, 0 errors. `manifest-deps` — 30 items, 0 errors (whole run: 503 items,
0 errors). `content-policy --manifest-only` — 30 items, 0 errors (whole run: 503
items, 1 error, the unrelated `def-translation-functor-between-o-blocks` /
`def-h-semisimple-module` edge in batch 7). `source-fetch-check` — 5/5
fetch-verified and resolved. `url-sweep` — 5/5 live, 0 failed. `source-backing`
— 20 authored results, all backed. `fwdcheck`/`extcheck` — clean.
`validate-plan research/plan-spec.json` — exit 0. `frontier-dependency-ledger
refresh` — refreshed; this batch's cross-batch input remains empty. Other
batches were being scaffolded concurrently during these checks, so whole-run
totals reflect their in-progress state; no other batch's files were touched.

## Current Step 3 gate repair state

The original scaffold authoring duties above are historical. Current repairs,
owner-approved scalar/equivariant/dual corrections, source checks, consumer
mappings and exact boundary/decline/hash evidence are in the Artin gate repair
Markdown/decisions JSON. Genus/lift constructions and low-rank coefficient
cases are explicit; finite Laurent evaluation replaces unspecified UFD inputs.
Root owns integration and final all-item recertification after writers drain.
Local validators create no native mathematical decisions/stamps or gate pass.

Final local repair: A27/31 total items. Noodle classes use the exact absolute/end-stable pairing; off-diagonal dual exception is nonzero NONUNIT. New boundary transport helper and distinct-endpoint singleton crosscuts repair the kernel-edge route. Owner-approved purity fixes rank2 stabilizer; the full faithful theorem remains all n>=1. Compact Joukowski annulus descent replaces the false closed-slit identification. All current evidence and final hashes are in the Artin gate repair artifact; root owns native recertification.
