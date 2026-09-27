# Step 3a scope review — pair `diagonals-separated-morphisms-and-valuative-uniqueness`

Run `frontier-35-ten-categories`, role alpha (Step 3a scope), batch 6, label
`step3a-pair-diagonals-separated-morphisms-and-valuative-uniqueness-e8b9f48f9827c6db`.
A page `diagonals-separated-morphisms-and-valuative-uniqueness` (366.067,
scheme-theory, 27 items). B page `diagonals-separated-morphisms-and-valuative-uniqueness-examples`
(366.068, 8 items). Companion pointers A↔B agree in the manifest, the plan shell
and the scope ledger.

**Decision: `sufficient`.** Scope only; no claim about proof correctness, no item
approval, no owner record, no scaffold edit. Recorded with
`tools/step3-decisions.mjs record-scope`; the receipt binds the current scope hash.

## Design, plan and owner decisions read

- Design prose: `research/plan-algebraic-geometry-track.md` AV-14, lines 971–1020
  (A inventory 23 items, B inventory 8 items, pair sources and `requires`),
  against the spine statement at lines 3587–3588 ("AV-14 requires AV-12, AV-13,
  and CA-8 `valuation-rings-and-discrete-valuation-rings`") and the zero-published-consumer
  declaration for the amended AV-14–AV-26 inventories (lines ~3595–3605).
- `research/plan-spec.json` orders 366.067/366.068: titles, categories, companion
  pointers, `requires` and empty item arrays match the manifest; the batch
  manifest controls the inventory, as on the sibling pairs.
- Owner direction `research/frontier-35-ten-categories-owner-authoring-direction.md`:
  this pair is active; only the batch-8 Serre/flag pair and one batch-13 Easton
  item are deferred. No owner amendment touches AV-14.
- Step-1 records: `research/frontier-35-ten-categories-batch-6.pages.json`,
  `.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json`, and all 35
  `frontier-35-ten-categories-step1-<item>.json` records (35/35 `ready`, checked
  on disk). Batch 6 notes record the local design reconciliation and the
  closed-immersion convention question; I re-verified both (below).
- Sibling pairs inspected for shared machinery: batches 5 and 7 (the run's other
  projective-space constructions) and batch 6's second pair
  (`kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, whose
  cross-batch edges are the only entries in the batch-6 ledger).

## Inventory reconciliation (design → manifest)

All 23 designed A items and all 8 designed B items are present, in design order,
with the designed content (definitions of separatedness/valuative diagram/immersion;
diagonal immersion, affine and composition/base-change/local-on-base permanence,
monomorphism-diagonal, closed graphs, closed equalizer, dense-open agreement;
quasi-separatedness ↔ quasi-compact diagonal; valuative uniqueness both
directions; overlap criterion; doubled origin; projective-space diagonal; the two
remarks; B computations and warnings).

Four A items are additions beyond the design's prose table, all of them local
prerequisites of designed claims, and all recorded in the batch-6 notes:

| Added item | Why a designed claim needs it |
|---|---|
| `lem-separated-implies-valuative-uniqueness` | Factored-out easy direction of designed `thm-valuative-criterion-separatedness`; equals Stacks *Schemes* Lemma 26.22.1 (tag 01KZ, printed p.44), which I read. |
| `lem-quasi-compact-immersion-boundary-specialization` | Supplies the specialization step used by the designed converse; equals Stacks *Schemes* Lemma 26.19.7 (tag 05JL, printed p.36), read. |
| `lem-local-domain-dominated-by-valuation-overring` | Valuation-overring existence used by the designed converse; Stacks *Schemes* Lemma 26.20.4 (tag 01J8, p.37) and *Algebra* 10.50.2–5, read from the fetched bodies. |
| `def-relative-projective-space-standard-charts` | The designed `lem-projective-space-diagonal-closed` needs an actual relative `P^n_S`; the only published projective objects are the classical point-set definition (`items/def-projective-space-points.md`, algebraically closed field only) and the published two-chart `ex-projective-line-by-gluing-affines` (field case). |

No designed item was dropped or weakened. The designed B item 8 exists with a
self-contained construction (see observation 5).

## Source coverage verified independently

- The three cached fetch bodies match the coverage stamps byte-for-byte on
  sha256_16: `/tmp/frontier35-b6-stacks-schemes.pdf` `fa2b63e8fd245fcd`, 582 443 B;
  `/tmp/frontier35-b6-vakil.pdf` `989b0d912cf31206`, 10 736 850 B;
  `/tmp/frontier35-b6-stacks-algebra.pdf` `b035a1f02104906a`, 2 828 052 B.
- I read the complete relevant sections rather than snippets: Stacks *Schemes*
  §§26.19–26.23 (PDF pp. 35–46), Stacks *Morphisms* §29.3 (pp. 3–5) and §29.43
  (pp. 98–100, fetched for the batch-6 sibling pair), Vakil §§11.2–11.4
  (pp. 303–316) and §13.7.1–13.7.9 (pp. 380–384). Row-by-row the coverage
  mapping is faithful: 26.21.1 (01KI), 26.21.2 (01KJ), 26.21.3 (01KK), 26.21.5
  (01KM), 26.21.6 (01KO), 26.21.7 (01KP), 26.21.8 (01KQ), 26.21.9–10, 26.21.11
  (01KT), 26.21.12 (01KU), 26.21.15 (01KN), 26.21.18, 26.22.1 (01KZ), 26.22.2
  (01L0), 26.23.2–8, and Vakil 11.3.1–11.3.12, 11.4.A, 11.4.2, 13.7.1, 13.7.4
  each exist as the row states.
- The two deferred dispositions are correct and recorded: Stacks Prop. 26.20.6
  (universal closedness criterion) and Vakil 13.7.6/13.7.9 (properness) belong
  to AV-15 properness, and the pair asserts only uniqueness, as its title says.
  The three out-of-scope rows (26.21.4 non-quasi-separated gluing; 26.21.16–17;
  26.23.6 injective-on-points) are genuinely unused by this inventory.
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-6.coverage.json`
  re-run now: 2 pages, 156 harvested results, 0 errors, 0 warnings. The four
  source URLs answer live in `research/frontier-35-ten-categories-url-liveness.json`.
- Every one of the 35 items' 47 distinct direct dependency IDs resolves on disk:
  24 to `items/*.md` with `status: published`, 23 to items of this pair (the
  four additions plus the design items), 0 missing, 0 planned-only. The published
  suppliers include the ones the design promised from AV-12/AV-13/CA-8
  (`def-diagonal-morphism-scheme`, `lem-diagonal-base-change-identification`,
  `def-affine-overlap-separation-condition`, `def-quasi-compact-and-quasi-separated-morphism`,
  `def-valuation-ring`, `def-discrete-valuation-ring`, `ex-doubled-origin-nonseparated-scheme`, …).

## Subject coverage in the manifest

- Diagonals: definition upstream (published), immersion of the diagonal with the
  exact image characterization ("same point with the same induced residue-field
  map" — the clause that separates `C ⊗_R C`-type points from the diagonal),
  quasi-compactness ↔ quasi-separatedness, base-change identification used by the
  permanence lemma.
- Separatedness: definition, affine case, base change, composition, locality on
  the base, monomorphism/immersion cases, closed graphs, closed equalizer and
  dense-open agreement, overlap (gluing) criterion, projective-space diagonal,
  doubled-origin failure, Non-Hausdorff remark.
- Valuative uniqueness: diagram definition separating existence from uniqueness,
  necessity, and the quasi-separated converse with the valuation-overring and
  boundary-specialization inputs; the remark records that no DVR-only reduction
  is implicit. This matches Stacks 26.22.1–2 and Vakil 13.7.4 (both read), and
  the DVR-version hypotheses the remark contrasts are Vakil 13.7.1
  ("finite type of locally Noetherian schemes", read) — the same reduction is
  announced in Stacks *Morphisms* §29.43 p.98 ("suffices to consider discrete
  valuation rings … locally Noetherian schemes and morphisms of finite type").

## Role in the library and consumer fit

- No published item references any of the 35 pair IDs, and no published page
  requires this A page (checked over `items/` and `library/`), matching the
  plan's zero-published-consumer declaration.
- Planned consumers: its own B page, and `finite-proper-and-projective-morphisms`
  (366.069, AV-15, empty plan inventory, not in this run). AV-15's design consumes
  exactly the interfaces supplied here: separatedness of closed immersions,
  separatedness of `P^n_S`, and the valuative uniqueness half of its properness
  criterion. AV-15 also consumes the added `def-relative-projective-space-standard-charts`
  through `thm-projective-space-proper-over-base`.
- The pair introduces the library's first diagonal definition of separatedness.
  The already-published AV-12/AV-13 items anticipate it explicitly:
  `items/def-affine-overlap-separation-condition.md` ("the diagonal formulation is
  developed later") and `items/def-quasi-compact-and-quasi-separated-morphism.md`
  ("This affine criterion is the definition used here, before the diagonal
  construction is available"). `lem-diagonal-quasi-compact-iff-quasi-separated`
  supplies the promised bridge, so the two conventions are reconciled by an item,
  not left implicit.
- The published `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`
  deliberately states its hypothesis with `def-affine-overlap-separation-condition`
  and does not consume the new definition, so nothing published is invalidated.

## Boundaries recorded, not gaps

- The existence half of the valuative criterion (universal closedness / properness)
  is deferred to AV-15 with recorded reasons (coverage rows for Stacks 26.20.6 and
  Vakil 13.7.6/13.7.9). The page's subject is uniqueness.
- Stacks 26.21.13–26.21.14 (cancellation: `g∘f` separated ⇒ `f` separated, and the
  quasi-compact analogue) and 26.21.12(5)–(6) (products of separated morphisms) are
  not items. They are not in the design inventory and no in-run or planned consumer
  declared in this run needs them; the product statement is a two-line consequence
  of the supplied composition and base-change lemmas. Enrichment here is optional,
  not required for the intended subject.
- `Morphisms` §§29.2–29.10, 29.43, Tong Ch. 2 §2.6 and Milne AG10 (design's other
  "pair sources") are not fetched for this pair. The results the pair actually uses
  from that range (immersion definition, immersions are locally of finite type,
  valuative criteria and the DVR-reduction remark) are covered by the fetched
  Stacks *Schemes*/*Morphisms* and Vakil bodies; I verified the relevant statements
  above. This is a coverage-documentation divergence, not an identified missing
  result.

## Uncertainty and non-blocking observations (for the Step-3b author and owner)

1. `def-locally-closed-immersion` parenthetical. The main clause matches Stacks
   *Schemes* Definition 26.10.2(5) (printed p.18) exactly. The parenthetical
   "(equivalently, an open immersion followed by a closed immersion locally on the
   target)" is **not** supported by the cited source: Stacks Remark 26.10.3 (tag
   01IP, same page) says "If f : X → Y is an immersion of schemes, then it is in
   general not possible to factor f as an open immersion followed by a closed
   immersion", with Stacks Example 29.3.4 (tag 01QW, printed pp.4–5) as witness.
   The hedged "locally on the target" reading is not stated there, and I could not
   prove or refute it: Stacks Lemma 29.3.2 gives the open-then-closed form only for
   quasi-compact immersions, and the failure example is non-quasi-compact with the
   extra property that every neighbourhood of the relevant point has non-quasi-compact
   preimage. **I did not resolve this.** No other item in the pair uses the
   open-then-closed form, so nothing load-bearing depends on it; the author should
   either drop the parenthetical or replace it with the exact statement plus proof.
   This is a statement-level item question, not a scope omission, and it does not
   change the scope verdict.
2. Coverage rows are not exhaustive over the claimed ranges. Stacks 26.20.3 (the
   existence/uniqueness parts of the valuative criterion, cited by
   `def-valuative-diagram-separatedness`), 26.20.7 (P¹ universally closed example)
   and 26.21.13–14 have no heading row although the file claims §§26.20.3–6 and
   26.21.1–18. I read all of them; none is a missing result for this pair. If the
   owner requires row-complete coverage records, the rows should be added.
3. Projective-space construction multiplicity in this run (and the library).
   `def-relative-projective-space-standard-charts` (this pair, chart gluing over
   arbitrary `S`) coexists with `def-projective-scheme-from-a-homogeneous-quotient`
   (batch 5, `Proj` of a graded quotient) and
   `def-projective-line-two-affine-cover-and-twisting-sheaf` (batch 7, two-chart
   `P^1_k` plus `O(n)`), and with the published `ex-projective-line-by-gluing-affines`.
   At `n = 1` the conventions agree (`u = t^{-1}`, `e_∞ = t^n e_0`). The owner may
   wish to record which construction is canonical for later pairs (AV-19 `Proj`,
   AV-15 projective-space properness); this is a convention-alignment obligation for
   authoring, not a scope gap.
4. Citation precision: `thm-immersion-monomorphism-locally-finite-type` cites
   "Stacks Schemes §26.23.7; Stacks Morphisms §29.3", but the finite-type clause is
   Stacks *Morphisms* §29.15 (Lemma 15.5, tag 01T5: "A closed immersion is of finite
   type"; §29.15 also states locally closed immersions are locally of finite type).
   The claim itself is correct and sourced there; only the item's source line needs
   adjusting.
5. B item 8 provenance differs from the design table. The design asked for a
   "precise non-Noetherian warning example from the literature" with
   `literature-derived` statement provenance; the manifest carries a self-contained
   construction (two copies of `Spec V` glued along `Spec K` for the rank-one
   `Q`-valued valuation ring) with `statement: ai-generated`,
   `generation.role: counterexample`, and framework citations to Stacks 26.21.7/26.22.2
   and Vakil 13.7.1/13.7.4. The warning it encodes is genuine (the DVR criterion
   carries finite-type/locally-Noetherian hypotheses in Vakil 13.7.1; the full
   criterion needs arbitrary valuation rings); I checked the construction's outline
   and the indices of the two-lemma decomposition it cites. This is an honest
   provenance divergence to be reflected in the item contract, not a scope omission.
6. Dispatch bookkeeping: two task files exist for this pair
   (`…-534c2565aaf33d93.task.md` and `…-e8b9f48f9827c6db.task.md`, identical text),
   but only the `e8b9…` label appears in `.autopilot/frontier-35-ten-categories/`
   state/events. The `534c…` file has no live dispatch.

## Decision

**`sufficient`.** The manifest realises the entire designed AV-14 inventory (23 A
items, 8 B items) with the intended definitions, results and examples; the four
additions are prerequisites of designed claims and are themselves in the next
pair's declared interface; the source coverage is complete at the level of the
pair's claims, backed by two independent full treatments read at the cited
locators, with deferrals and out-of-scope rows recorded and justified; and the
pair's role as the library's separatedness/valuative-uniqueness supplier with a
zero published-consumer set and the expected AV-15 consumers is intact. The
observations above are item-authoring and record-keeping matters; none requires a
pair merger, an owner scope amendment, or a change to the planned inventory before
Step 3b.
