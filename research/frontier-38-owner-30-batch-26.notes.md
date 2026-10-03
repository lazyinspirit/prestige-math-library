# Batch 26 Step 1 scaffold — Intersection Products on Smooth Projective Surfaces

Run `frontier-38-owner-30`, role beta, label batch-26. Owned pair:
`intersection-products-on-smooth-projective-surfaces` (A, order 895) /
`intersection-products-on-smooth-projective-surfaces-examples` (B, order 896),
category `algebraic-geometry`. Outputs: `research/frontier-38-owner-30-batch-26.pages.json`
(9 A items + 3 B items; page cap 100 respected), `...-batch-26.coverage.json`, this
note, `...-batch-26.cross-batch-dependencies.json` (24 reviewed rows), and one
`research/frontier-38-owner-30-step1-<id>.json` readiness record per item. No published
content, item file, shared plan, engine state, verdict or `.autopilot` file was edited.
This record covers construction only; it is not an independent mathematical review.

## Scope and plan reconciliation

- The binding owner direction `research/frontier-38-owner-30-owner-authoring-direction.md`
  was read before construction; it contains no pair-specific bullet for 895/896, so its
  general local-closure, source, choice and file-discipline rules control. The design row
  is **AG-SURF-1** at line 250 of `research/plan-algebraic-geometry-expansion-track.md`
  (the dispatch's L41 is only the page-id registration, as in sibling batches).
- The design commissions four A items and three B items. All seven IDs are preserved
  verbatim and unweakened:
  `def-divisor-intersection-number-on-smooth-projective-surface`,
  `thm-surface-intersection-product-bilinear-and-symmetric`,
  `thm-intersection-with-curve-as-degree-of-restriction`,
  `lem-blowup-intersection-matrix-at-smooth-point`, and
  `ex-intersection-pairing-on-p2`, `ex-intersection-pairing-on-blowup-of-p2`,
  `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses`.
  The design's proof route (Vakil §20.1.1-20.1.6, Definition 20.1.2, §20.2 and Exercise
  20.2.A; AV-18–AV-22 plus the AV-26 blowup interfaces; no repetition of AV-8 plane
  Bézout) is the manifest's route, with the base case it flags (Exercise 20.1.E,
  "leaves a proof route to complete") closed locally by five prerequisite items.
- The plan's `requires` array for A895 equals the design's page set; A896 requires A895.
  Both arrays were copied verbatim into the manifest. The design's "AV-26" is the
  plan's `blowups-exceptional-divisors-and-strict-transforms`, an in-run supplier of this
  run at orders 366.091/.092, earlier than 895. No design/plan conflict of claim,
  placement or hypothesis was found.
- **Scope refinement (recorded, not a conflict).** The four A items are stated for
  **integral regular projective surfaces** rather than only for surfaces smooth over k.
  Reason: the point-blowup item must cover closed points p with κ(p)/k possibly
  inseparable, where the blowup is regular but need not be smooth over k (batch-2
  `thm-blowup-regular-surface-closed-point-regular`, clause 4). None of the four proofs
  uses smoothness; every smooth projective surface over k is included because smoothness
  of X over k makes every local ring regular (published `def-smooth-morphism-to-field-
  classical`). The design's own phrase "with regularity hypotheses" points the same way.
  No commissioned claim was weakened, dropped or re-hypothesised.
- The design's source gate ("One full treatment is checked; a second independent
  surface-intersection treatment remains a source gate") is closed by the Stacks Project
  Varieties §§33.44–33.45, fetched, read in full and stamped, as the independent
  treatment alongside the audited Vakil V25 lane.

## Inventory, dependency levels and mathematical audit

Manifest `research/frontier-38-owner-30-batch-26.pages.json`. Every item carries
`design_row: AG-SURF-1`, explicit `deps`, provenance, sources with locators, and the
`dependency_level` recomputed by the tool (1 + maximum level of its **in-run** deps;
published and other out-of-run suppliers do not raise the level):

| Level | Item |
|---:|---|
| 0 | `def-degree-invertible-sheaf-proper-dimension-one` (local addition) |
| 0 | `lem-euler-characteristic-finite-support-twist-invariance` (local addition) |
| 0 | `lem-closed-immersion-projection-formula-invertible` (local addition) |
| 0 | `def-divisor-intersection-number-on-smooth-projective-surface` (design item 1) |
| 1 | `lem-euler-characteristic-twist-integral-proper-curve` (local addition) |
| 2 | `cor-degree-additive-proper-curve` (local addition) |
| 3 | `thm-surface-intersection-product-bilinear-and-symmetric` (design item 2) |
| 3 | `thm-intersection-with-curve-as-degree-of-restriction` (design item 3) |
| 7 | `lem-blowup-intersection-matrix-at-smooth-point` (design item 4) |
| 4 | `ex-intersection-pairing-on-p2` (design B item 1) |
| 8 | `ex-intersection-pairing-on-blowup-of-p2` (design B item 2) |
| 1 | `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` (design B item 3) |

`node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` recomputes all
twelve labels exactly and now reports the whole run green (803 items, 60 pages, maximum
level 16; no empty scaffolds and no label errors remain in any batch).

### The local closure in prerequisite order

- **Degree on a proper curve (levels 0–2).** `def-degree-invertible-sheaf-proper-
  dimension-one` fixes deg_C(L) = χ(C,L) − χ(C,O_C) for a proper k-scheme of dimension
  at most one (Stacks 33.44.1). `lem-euler-characteristic-finite-support-twist-
  invariance` computes χ(X, i_*κ(p)) = [κ(p):k] and shows that an invertible twist of a
  closed-point sheaf is an isomorphism (Stacks 33.33.3 and Vakil 20.1.A).
  `lem-closed-immersion-projection-formula-invertible` supplies the closed-immersion
  projection formula used when the curve is reducible (checked on stalks; Stacks
  Cohomology 20.54). `lem-euler-characteristic-twist-integral-proper-curve` is Stacks
  33.44.5, proved by the published devissage lemma with witnesses O_X and i_*κ(p).
  `cor-degree-additive-proper-curve` is Stacks 33.44.7 in rank one (equivalently Vakil
  18.4.M), again by devissage: the integral one-dimensional witnesses are reduced by the
  integral twist lemma, and its clause (3) is the quadratic vanishing
  χ(L⊗M) − χ(L) − χ(M) + χ(O_C) = 0 used by the shift identity below. No reducedness,
  normality, irreducibility, projectivity or genus hypothesis is imposed — exactly what
  an arbitrary effective Cartier divisor on a surface needs.
- **Definition (level 0).** `def-divisor-intersection-number-on-smooth-projective-
  surface` uses the alternating sum L·M = χ(O) − χ(L^∨) − χ(M^∨) + χ(L^∨⊗M^∨) of Vakil
  20.1.1 (equivalently Stacks 33.45.3 with d = 2, where the coefficient of n₁n₂ is the
  same four-term expression). It records well-definedness on Pic(X), symmetry, and
  L·O_X = 0; Cartier divisors are paired through O_X(C)·O_X(D).
- **Bilinearity (level 3).** `thm-surface-intersection-product-bilinear-and-symmetric`
  proves the shift identity Φ(C,D+H) = Φ(C,D) + Φ(C,H) for every effective Cartier
  divisor H by the two twisting exact sequences, reducing the defect to the quadratic
  vanishing on the proper curve H supplied by the previous item. Effective additivity is
  immediate; arbitrary additivity follows by writing each divisor as a difference of
  effective ones (eventual global generation of O_X(D)⊗O_X(1)^{⊗m} plus the regular
  section/zero-scheme supplier). This is Vakil 20.1.3/20.1.5-20.1.H and Stacks 33.45.5
  with the base case completed, not cited away.
- **Restriction degree (level 3).** `thm-intersection-with-curve-as-degree-of-
  restriction` is Vakil 20.2.A(a) / Stacks 33.45.8+33.45.12: the two twisting sequences
  give C·D = χ(O_C) − χ(L^∨|_C) = deg_C(L|_C), with the smooth-curve comparison clause
  from the published Euler-characteristic degree shift.
- **Blowup matrix (level 7).** `lem-blowup-intersection-matrix-at-smooth-point`
  combines the three local surface items with fourteen batch-2 blowup items and the
  published twist classification: X′ integral regular projective, E ≅ P¹_{κ(p)},
  O_E(E) ≅ O(−1), E² = −[κ(p):k]; E·π*D = 0; π*D·π*D′ = D·D′ via χ(X′,π*N) = χ(X,N);
  and π*C = C′ + mE, C′·E = m[κ(p):k], C′² = C² − m²[κ(p):k] for reduced C through p.
  Hypotheses: p a closed point of a regular surface (regularity, not smoothness over k,
  is exactly what batch 2 supplies); C reduced; m the multiplicity of a local equation.
- **B page (levels 1, 4, 8).** `ex-intersection-pairing-on-p2` computes O(d)·O(e) = de
  from the published cohomology of twists on P² and cross-checks ℓ·C = 2 via the
  restriction theorem; `ex-intersection-pairing-on-blowup-of-p2` records the matrix
  [[1,0],[0,−1]] and the strict-transform class m = ℓ − E with m² = 0, m·E = 1;
  `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` refutes both the claim
  that every effective prime divisor on a normal projective surface is Cartier (the
  ruling of the quadric cone, via the published `cex-weil-divisor-not-cartier-singular-
  cone`) and the claim that the alternating sum counts intersection points for two
  divisors on a threefold (planes in P³: sum 1, intersection a line). B items are leaves;
  none is a supplier for an A theorem.

Each item's strategy field is a complete proof route naming its in-run and published
suppliers; no forward, circular, missing or inadequate dependency remains. The manifest
`deps` arrays were copied into the readiness records and the closure was recomputed after
the only dependency edit (an uncited self-dependency removed from
`lem-euler-characteristic-finite-support-twist-invariance`).

## Choice accounting

`def-axiom-of-choice` is declared wherever the χ/finiteness or devissage inheritance is
used: all twelve items carry the dependency, and each statement records the inheritance
(a final pass added the sentence to the three B items and to
`lem-closed-immersion-projection-formula-invertible`, and each strategy names where AC
enters and that no further selection is made). This matches the sibling batches that cite
`def-euler-characteristic-coherent-sheaf` and `lem-coherent-devissage-one-generic-
generator`. The definition and the theorem statements inherit AC from their suppliers
rather than postulating it; the finite-support, stalkwise and exact-sequence arguments
themselves make no selection. After the pass all twelve readiness records were recomputed
against the edited manifest (the tool kept the two unchanged records intact) and
`step1-decisions check` again reports 803/803 ready, closed, no work rows. No
`proved_here: false`,
Recorded, deferred-set-theory or `deferred-set-theory-beyond-choice` material is reached
through any proof or prerequisite path: every dependency resolves to a published
`items/` file or an in-run manifest item, and `extcheck` reports no new unproved
consequence.

## Sources (full-text evidence)

Coverage file `research/frontier-38-owner-30-batch-26.coverage.json`: 2 page harvests,
62 disposed result headings (A page 53 rows: 15 scaffolded, 17 absorbed inline, 21
declined with specific reasons, of which 3 are deferrals — two blowup constructions to
the selected batch-2 page and surface Riemann-Roch to the selected order-897 pair; B
page 9 rows: 4 scaffolded, 3 inline, 2 declined). All seven source entries were
fetch-verified by
`node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-26.coverage.json --stamp`
(7/7 newly stamped); `url-sweep --recover --fail-on-dead` reports 5/5 live URLs, and
`source-backing` reports all 12 authored results backed.

| Source | Kind | Locator read | Stamp |
|---|---|---|---|
| Ravi Vakil, The Rising Sea (2025-10-21) | textbook | Ch. 20 §§20.1–20.2 pp. 574–588; §18.4 pp. 508–511; §16.2 pp. 458–462; §22.4.10/§22.4.13 pp. 652–654 | pdf, 852 pp, SHA-256 `d07177aa…2784` |
| Stacks Project, Varieties §33.44 | monograph | tags 0AYQ–0B5X, read in full | html, full section |
| Stacks Project, Varieties §33.45 | monograph | tags 0BEL–0BJ8, read in full | html, full section |
| Stacks Project, Divisors §31.33 | monograph | tags 01OF–0806 and 02OS (esp. Lemma 31.33.4) | html, 42,047 bytes |
| Stacks Project, More on Morphisms §37.17 | monograph | tag 0H1G (esp. Lemma 37.17.3) | html, 20,545 bytes |

The Vakil PDF is the same audited V25 lane file (`research/algebraic-geometry-expansion-
2026-09-30/source-vakil.md`, SHA-256 `d07177aa0317c13490c170fc6ccc6a2ee07989a9120d9958ed3453eefe5b2784`);
its §20.1–20.2, §18.4, §16.2 and §22.4 bodies were read in the extracted text. The two
Stacks sections were fetched and read in full as the required second independent
treatment. No source was dropped and no `source_resolution` record is needed. One
advisory coverage warning is recorded below.

## Cross-batch ledger

`research/frontier-38-owner-30-batch-26.cross-batch-dependencies.json` declares 24
reviewed rows: 23 item edges from the two blowup-consuming items to batch-2 blowup items,
each with a current mathematical check of the batch-2 statement against the consumer's
use, plus the A895 → blowup page edge. `lem-blowup-intersection-matrix-at-smooth-point`
accounts for 14 of the item edges (`def-blowup-scheme-along-ideal`,
`def-exceptional-divisor-blowup`, `thm-blowup-regular-surface-closed-point-regular`,
`cor-blowup-birational-integral-scheme`,
`cor-exceptional-divisor-smooth-center-normal-bundle`,
`lem-exceptional-curve-normal-bundle-minus-one`,
`lem-total-transform-strict-plus-exceptional-multiplicity`, `def-total-transform-divisor`,
`def-strict-transform-closed-subscheme`, `thm-blowup-projective`,
`lem-blowup-point-pushforward-vanishing`, `lem-projection-formula-invertible-twist`,
`lem-exceptional-fiber-line-bundle-euler-characteristic`,
`lem-blowup-isomorphism-off-center`); `ex-intersection-pairing-on-blowup-of-p2`
accounts for 9 (`thm-blowup-smooth-surface-point-charts`,
`lem-exceptional-curve-normal-bundle-minus-one`, plus the seven batch-2 suppliers
`def-blowup-scheme-along-ideal`, `def-exceptional-divisor-blowup`,
`thm-blowup-regular-surface-closed-point-regular`,
`lem-total-transform-strict-plus-exceptional-multiplicity`,
`def-total-transform-divisor`, `def-strict-transform-closed-subscheme`,
`lem-blowup-isomorphism-off-center`, whose exact uses in the B896 statement and strategy
are recorded in each row's evidence). Every declared cross-batch edge of a batch-26
consumer now has a review row; all 24 rows satisfy the ledger tool's ownership predicate
(replicated locally: 24/24 valid, 0 unreviewed batch-26 consumer edges).

`node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` first
aborted at this snapshot with
`frontier-38-owner-30-batch-27.cross-batch-dependencies.json: invalid review or consumer
ownership` (batch 27, the sibling point-blowup pair, had packed several consumer IDs into
single comma-joined `consumer` fields, which the tool rejects because it requires one
consumer per row owned by the declaring batch). That file is not this batch's to edit,
and batch 27 normalized its rows during its own construction; the refresh was re-run and
now **succeeds**, writing `research/frontier-38-owner-30-cross-batch-dependencies.json`
with `reviewed_batches` = all 30 batches, `unreviewed_batches` = [], 79 edges, and one
`orphaned_reviews` row that is batch 27's own same-batch A901 → B902 page edge (same-batch
edges are outside this ledger by design). All 23 item edges and the A895 page edge of
batch 26 carry `verified` reviews in the unified ledger; the batch-26 input needed no
further change. The strict form
`node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30
--require-reviewed` also exits 0: every declared cross-batch edge in the run now carries
a review row.

## Check results at this snapshot (actual outputs)

All checks below were re-run after the seven B896 cross-batch review rows were added;
the recorded outputs are the current ones. The rows change no item text, so every
readiness record and dependency label remains valid and was re-verified by
`item-dependency-levels check` and `step1-decisions check` in this pass.

- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-26.coverage.json
  --require-destination` → **2 pages, 62 harvested results, 0 errors, 1 warning**
  (`coverage-low-yield`: 15/53 A-page results scaffolded). The warning is advisory: the
  declined rows are Vakil's §20.1.6-20.1.K applications (numerical equivalence,
  asymptotic Riemann-Roch, positivity, Bézout recovery), Vakil's §20.2.A(b), §20.2.C,
  §20.2.9 and §18.6.A, the surface Riemann-Roch exercise §20.2.B deferred to the selected
  order-897 pair, four Stacks 33.44 lemmas bypassed by the devissage route, five Stacks
  33.45 lemmas not needed by the alternating-sum route, and the two blowup-construction
  lemmas deferred to the selected batch-2 page; each carries a specific reason.
- `node tools/source-fetch-check.mjs --coverage …` → **7/7 fetch-verified** (stamps above).
- `node tools/url-sweep.mjs --coverage … --out /tmp/… --recover --fail-on-dead` →
  **5/5 live, 0 failed, 0 recoverable**.
- `node tools/source-backing.mjs --coverage … --liveness /tmp/…` → **12 authored
  results, every one backed**.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json` →
  **803 items, 0 errors**. Batch-local: **12 items, 0 errors**.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-*.
  pages.json` → **803 scoped items, 0 errors, 0 warnings**. (Single-batch manifest mode
  reports batch-dependency-missing for the batch-2 suppliers, which are neither in this
  batch nor on disk until authoring; the whole-run form, which is the required check,
  is clean.)
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` → **803 items,
  60 pages, maximum level 16, 0 errors**; all twelve batch-26 labels recompute exactly.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` → at the snapshot
  first recorded here: **803 items, 803 ready, closed: true, work: []**, with all twelve
  batch-26 records carrying current hashes, examined dependency IDs and evidence. A late
  re-run during batch-27's concurrent writing shows **803 items, 788 ready, closed:
  false**, and all 15 open rows are batch-27 items on
  `point-blowup-resolution-on-arbitrary-regular-surfaces(-examples)` (its writer is
  editing that manifest; outside this batch's scope). No open row is a batch-26 item;
  the twelve batch-26 records remain ready and current.
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30` → 60 pages owed, 60 in
  the manifests, no scope drift.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (the remaining NOTE
  lists the 289 planned pages still without item lists, including 895/896 until the
  Step-4 splice; their reading order is guaranteed). The tool also prints run-wide
  informational `[redundant-prereq]` advisories (4386 lines at this snapshot), some of
  which name the plan-controlled A895 `requires` array; they are page-level redundancy
  notices about a shared-plan field this batch copied verbatim and do not fail the
  check.
- `node tools/depcheck.mjs` → exit 0, no cycles, all references resolve, no draft items
  on published pages; no finding names a batch-26 item. `node tools/fwdcheck.mjs` →
  exit 0. `node tools/extcheck.mjs` → exit 0.
- `node tools/depsource.mjs --page intersection-products-on-smooth-projective-surfaces`
  (and the examples page) → 0 unresolved; 0 dependencies resolve because the library page
  files and `plan-spec.json` item lists are still empty for 895/896 and the splice has
  not run. The in-batch and cross-batch dependencies are visible in the manifest and the
  cross-batch input and will be imported at Step 4.
- Item-format checks (`precheck`, `rendercheck`, `proof-layout`) have nothing to run on:
  as in sibling scaffold batches, the twelve items exist as manifest contracts with
  statements and proof strategies, and their `items/` files are authored in Step 3 (see
  Unresolved findings).

## Unresolved findings outside batch 26

- The earlier run-level cross-batch ledger refresh abort caused by
  `frontier-38-owner-30-batch-27.cross-batch-dependencies.json` was resolved by batch 27's
  own writer during construction; the refresh now succeeds and the unified ledger carries
  verified reviews for every batch-26 edge (see the Cross-batch ledger section). No
  open finding remains here for batch 26.
- The twelve batch-26 items are manifest-only; Step 3 must author `items/<id>.md` with the
  full proofs following the recorded strategies, after which the item-format and
  renderer gates apply. The two riskiest expansions for the authors are the two devissage
  applications (properties 2-of-3, witnesses O_X/i_*O_Z/i_*κ(p), and the closed-immersion
  projection formula checked on stalks) and the exact-sequence verification of the shift
  identity Φ(C,D+H) = Φ(C,D) + Φ(C,H).
- The coverage warning `coverage-low-yield` is recorded for Alpha's confirmation; it is
  an advisory on declines, all of which carry specific reasons.

## Step discipline

Wrote only the batch manifest, coverage, this note, the cross-batch dependency input, and
the twelve readiness records. No item file, page file, published content,
`plan-spec.json`, scope ledger, engine state, verdict or `.autopilot` file was edited.
Owner/operator reconciliation and the full engine gate follow construction; a `ready`
record here is not independent mathematical approval. Step 3 review remains owed.


## Batch-2 supplier interface reconciliation (owner review, 2026-10-03)

After the batch-26 writer drained, the owner chart reviewer read the complete current
contracts for `lem-blowup-intersection-matrix-at-smooth-point` and
`ex-intersection-pairing-on-blowup-of-p2` against the repaired batch-2 suppliers. Their
uses are exactly regularity, exceptional P^1_kappa, O_E(E)=O(-1), residue-weighted
self-intersection, and pi^*C=C'+mE. Every use is retained by the corrected suppliers;
the literal affine-plane and false overlap claims are unused. The Statements and
proof strategies are unchanged. Dependency levels recompute to 8 and 9 respectively,
and current Step-1 readiness hashes are refreshed. This is a scaffold-interface
review, not an authored-proof acceptance. Details/source locators are recorded in
`frontier-38-owner-30-batch-2.notes.md`, owner chart and surface repair section.
