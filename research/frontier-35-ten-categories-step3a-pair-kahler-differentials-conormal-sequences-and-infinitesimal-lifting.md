# Step 3a scope review — kahler-differentials-conormal-sequences-and-infinitesimal-lifting

- Run: `frontier-35-ten-categories` (batch 6), role alpha, label
  `step3a-pair-kahler-differentials-conormal-sequences-and-infinitesimal-lifting-b2313d3805f7f892`.
- A page: `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`
  (order 366.071, scheme-theory, 32 items).
- B page: `kahler-differentials-conormal-sequences-and-infinitesimal-lifting-examples`
  (order 366.072, 9 items); companion pointers agree A↔B.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest or page edit.

## Evidence read

- `research/frontier-35-ten-categories-batch-6.pages.json`, `.coverage.json`,
  `.notes.md`, `.cross-batch-dependencies.json`; `research/frontier-35-ten-categories-scope-ledger.json`
  (pages 366.071/366.072 both listed; 52 pages = 26 owed pairs),
  `research/frontier-35-ten-categories-drift-evidence.json` entry
  `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`
  (declared `requires` = manifest `requires`, plan line 3073), and the
  `plan-spec.json` rows 366.071/366.072 (empty item arrays; the batch manifest
  is the current inventory).
- Prose design: `research/plan-algebraic-geometry-track.md` AV-16 (lines
  1079–1137: 30 designed A items, 9 designed B leaves, sources Vakil Ch. 23,
  MIT 18.725 L18–20, Milne AG10 §g/AG14, Stacks *Morphisms* §§29.32–29.34 and
  *Algebra* §§10.131–10.134), AV-17 (lines 1138–1195, the consumer page),
  AV-6 promise line 524, and the binding AV-14–AV-26 inventory section lines
  3465–3533 (the `def-smooth-relative-dimension-via-differentials` relocation
  bullet, see Uncertainty below).
- `research/frontier-35-ten-categories-owner-authoring-direction.md`: defers the
  batch-8 coherent-sheaf pair and one batch-13 Easton item; it names no change
  to batch 6, so the AV-16 design scope stands.
- Step-1 readiness records `research/frontier-35-ten-categories-step1-<item>.json`
  for all 41 pair items: every record is `decision: ready` with examined
  dependencies and source lines; none is escalated or source-dropped.
- Supplier seams: the five published prerequisite pages
  (`sheaf-operations-exactness-ringed-spaces-and-module-pullback`,
  `affine-schemes-and-the-structure-sheaf`,
  `schemes-subschemes-and-morphisms-locally-of-finite-type`,
  `fibre-products-base-change-and-scheme-theoretic-fibres`,
  `library/abstract-algebra/tensor-products-of-modules`) all exist with nonempty
  published inventories; the three item edges into the in-run batch-3 page
  `algebraic-differentials-separability-and-smooth-local-presentations`
  (`def-ag-universal-algebraic-differentials`,
  `def-ag-standard-smooth-algebra`, `lem-ag-separable-residue-cotangent-sequence`)
  were re-read in the batch-3 manifest and are scope-compatible with their uses.
- Source re-verification for this review: the batch-6 fetch cache
  `/tmp/frontier35-b6-vakil.pdf` / `-selected.txt` (Vakil, 29 Aug 2022 draft)
  shows the cited material is real and correctly located — §22.2.2–3
  explicit universal differentials, §22.2.9 cotangent/transitivity sequence,
  §22.2.12 conormal exact sequence, §22.2.17 universal property, §22.2.18
  rational-point cotangent space, §22.2.20 global/conormal-of-diagonal
  definition, on PDF pp. 577–584, matching the coverage locators; and online
  checks of Stacks *Algebra* 10.131.x construction, 10.151.5 (unramified
  residue extensions), 10.158.1 (finitely generated field extensions),
  *Morphisms* 29.33.x (sheaf differentials, diagonal conormal, transitivity,
  base change, conormal sequence, split conormal), 29.35.12–13 (rank
  condition, and its Frobenius warning) and 29.36.2/8/12–14 (unramified
  criterion, closed immersions, residue extensions, open diagonal).

## Role in the library

The pair is the differential/infinitesimal-lifting block of the scheme-theory
track. It consumes the batch-3 algebraic-differentials page (page edge + three
item edges, all recorded `verified` in the batch-6 cross-batch ledger) plus
five published pages, and it is consumed in-run only by its own B companion
(a scan of all sixteen batch manifests finds no other page or item consumer).
Its designed downstream consumers — AV-17 `flat-smooth-and-etale-morphisms`
(plan line 1138 `requires: AV-13, AV-16, ...`), AV-23
`smooth-proper-curves-divisors-genus-and-ramification`, AV-24
`residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` and the
deferred `smooth-projective-serre-duality-and-flag-variety-line-bundles` — are
the four plan pages that name this A page in `plan-spec.json` `requires`, and
none is in this run's 52-page scope ledger; the last is additionally excluded
by the owner direction. No published item or page
depends on these item IDs, and `research/published-consumer-supplier-ledger.md`
holds no active defect entry involving this pair (its one mention is the
historical planned-only AG-LIE-1 shell). It also discharges the AV-6 promise
line 524 through `thm-tangent-vectors-dual-numbers`.

## Scope against the prose design

All 30 designed AV-16 A items are present, in design order, with the intended
content (universal derivation and Ω; existence/presentation; representing
property; polynomial basis; conormal sequence for quotients; Jacobian
presentation; transitivity; localization; base change; sheaf Ω with universal
property and affine compatibility; conormal sequence for closed immersions;
scheme transitivity and base change; relative cotangent/tangent spaces;
rational-point cotangent space; dual-number tangents; differential of a
morphism; formally unramified/smooth/étale; formal unramifiedness iff Ω=0;
unramified morphisms and open diagonal; residue extensions; notation of the
differential rank condition; the two warnings). All 9 designed B leaves are
present with one deliberate, documented rename:
`cex-frobenius-differential-zero-not-etale` →
`cex-frobenius-zero-tangent-map-not-formally-etale`, whose statement keeps the
computable content (zero induced tangent map, nonzero relative module,
non-formal-étaleness) and drops only the unqualified “not étale” diagnosis,
which requires AV-17's smooth/flat equivalence.

Two items beyond the design are genuine unmet local prerequisites placed
immediately before their consumers, and each is source-backed and covered:

| Added item | Consumer in this pair | Source |
|---|---|---|
| `lem-differentials-diagonal-ideal-square` (Ω ≅ J/J²) | `thm-formally-unramified-differentials-zero`, `thm-unramified-diagonal-open-immersion` | Stacks *Algebra* 10.131.13; *Morphisms* 29.33.7 |
| `lem-finite-type-field-zero-differentials-finite-separable` | `lem-etale-residue-extensions-finite-separable` | Stacks *Algebra* 10.158.1 (AC declared, as required) |

Nothing in the design's A or B inventory was dropped, weakened or moved. One
designed A statement is phrased more generally than the design row rather than
narrower: `lem-etale-residue-extensions-finite-separable` is stated at a point
for *locally of finite type* + `Ω_{X/S,x}=0` instead of under an étale
hypothesis. This is the correct in-pair form — the unqualified étale notion is
not definable before AV-17 — and it matches Stacks *Morphisms* 29.36.14(6)
(with *Algebra* 10.151.5), so the design's intended subject is covered, not
extended.

The two canonical rows the coverage defers are exactly the rows whose content
is AV-17's by design: “smooth relative dimension n characterized using Ω and
fibre conditions” (AV-17 owns `thm-differentials-smooth-locally-free` and the
smoothness/formal-smoothness comparison) and “étale diagnosis of Frobenius
from the smooth/flat equivalence” (AV-17 owns `thm-etale-equivalent-flat-unramified-fp`).
Both deferrals therefore preserve scope; neither is an omission from this pair.

## Source coverage

The page's coverage block disposes every harvested row: 43 canonical rows
(41 `included` = 32 A + 9 B items; 2 `deferred`, both to
`flat-smooth-and-etale-morphisms` with reasons, as above) and 35 source rows
over three fetch-verified treatments (Stacks *Commutative Algebra*,
Stacks *Morphisms of Schemes*, Vakil), of which 25 are `included` and 9
`inline` into a named item and 1 `deferred`. The three treatments are two
independent full treatments of the algebra level (Stacks §10.131/§10.151/§10.158
and Vakil §22.2) and of the sheaf level (Stacks *Morphisms* §29.33/§29.36 and
Vakil §22.2.20). I re-verified the load-bearing locators listed under Evidence
read and found no fabricated or shifted citation. The design's further source
suggestions (Milne, MIT 18.725) were not needed to back any item.

## Uncertainty and observations for the owner

1. **`def-smooth-relative-dimension-via-differentials` placement.** The AV-16
   design table lists this ID (proof provenance `not-supplied`), while the
   binding inventory bullet (plan line ~3475) orders it relocated to AV-17
   “after `thm-differentials-smooth-locally-free` … not a preview”, and the
   AV-17 table instead carries `def-relative-dimension-smooth-morphism`.
   The scaffold keeps the ID on AV-16 with a self-contained statement: it
   defines the *differential rank* condition on an open subset, says in the
   statement that this alone is not smoothness, and refers the comparison to
   the later page. I judge this the only coherent in-run reading, since
   smoothness is not definable on this page (Stacks pairs the two notions in
   Definition 29.35.13), and the coverage row records the theorem-level
   deferral. Residual risk, stated honestly: when AV-17 is built in a later
   run, the owner should reconcile the ID (reuse the published definition or
   rename per the AV-17 table) rather than re-emit the same ID. This is a
   forward-looking bookkeeping item, not a scope gap here.
2. `lem-finite-type-field-zero-differentials-finite-separable` and
   `lem-etale-residue-extensions-finite-separable` both declare AC dependence
   explicitly and name `def-axiom-of-choice`; that matches the plan's intended
   uses (algebraic closure, Nullstellensatz), and the choice-free items are
   left choice-free. No unresolved mathematical uncertainty remains for me at
   scope level.
3. Proof correctness, statement-by-statement source fidelity and dependency
   minimality were **not** judged here; those belong to Step 3b and Step 5.

## Scope decision

The planned definitions, results and examples cover the intended subject
(Kähler differentials algebraically and on schemes, conormal and transitivity
sequences, cotangent/tangent spaces, and the infinitesimal-lifting circle
ending at formal unramifiedness) at design breadth, with the two boundary
claims assigned by the design to the out-of-run AV-17 page, and with all local
prerequisites supplied in-pair. Recorded: **sufficient**.
