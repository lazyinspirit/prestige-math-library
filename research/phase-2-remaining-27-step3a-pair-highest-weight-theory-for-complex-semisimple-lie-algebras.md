# Step 3a scope review — Highest Weight Theory for Complex Semisimple Lie Algebras

- Run: `phase-2-remaining-27` (role alpha, this pair only; batch 12), dispatch
  `step3a-pair-highest-weight-theory-for-complex-semisimple-lie-algebras-e738705b886fa7fb`.
- A page: `highest-weight-theory-for-complex-semisimple-lie-algebras`
  (plan order 505, DG-32, category `differential-geometry`, 35 items).
- B page: `highest-weight-theory-for-complex-semisimple-lie-algebras-examples`
  (plan order 506, 11 items).
- Scope decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27 --page highest-weight-theory-for-complex-semisimple-lie-algebras --decision sufficient`.
  Receipt `research/phase-2-remaining-27-step3a-review-highest-weight-theory-for-complex-semisimple-lie-algebras.json`
  (scope hash `9339fe2af3d33818c4339f9c49d6ee58dacb72c877a8fb8ddee6f07d5120e9c8`,
  recorded 2026-09-16T15:17:39.249Z; re-verify with
  `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase scope`).
- This report judges scope only: whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item contract, plan entry or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-12.pages.json` | Current A inventory (35 items, design order) and B inventory (11 items); page `requires`; companion pairing; every item statement and `deps` array |
| `research/phase-2-remaining-27-batch-12.coverage.json` | DG-32 source record (Knapp, Kirillov) with locators, dispositions, reading evidence and fetch stamps |
| `research/phase-2-remaining-27-batch-12.notes.md` | Step-1 construction/repair record: 112 batch items, the documented well-definedness addition, stale-design conflicts, dependency audit, AC seam, published-defect notes, gate results |
| `research/phase-2-remaining-27-batch-12.cross-batch-dependencies.json` | 66 verified consumer rows (7 page + 59 item edges) with supplier statements read on the current manifests |
| `research/phase-2-remaining-27-alpha-step1-drift.md` (DG-32 entry) | Drift verdict `no-drift`; the pair's controlling edge list |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding direction: DG-32 derives the retained `sl_2` character/dimension and Clebsch–Gordan examples locally from finite weight strings; RL-7 is not a proof supplier; no type-`A_2` Kostant leaf |
| `research/plan-differential-geometry-track.md` L8024–8235 (DG-32), esp. L8171 | Prose design: A items 1–28, six `fs-` items, B items 1–11, sources, well-definedness table, choice ledger, forward reference |
| `research/plan-spec.json` rows 505/506 | Page identity, order, kind, category, companion, exact `requires`; empty item lists, so no competing item order |
| `research/plan-representation-theory-lie-track.md` RL-2/RL-7 sections | The rehomed Verma/character ownership exists in the plan (RL-2 published; RL-7 planned with a full inventory), so the delegations are real |
| Fetch-stamped extracted full texts `/tmp/prestige-b12-sources/knapp.pdf` (sha256 prefix `bd7e983a2389349b`) and `.../kirillov.pdf` (`0d67678c971b4490`) | Locator re-verification: theorem numbers and section content under the exact stamped bytes |
| Adjacent step3a reviews, batch 11 (`root-systems…`, `cartan…`) | Consumer/supplier interface and cross-pair risk check |
| `research/published-consumer-supplier-ledger.md` | Published→draft edges: only a proposal (line 12216) that did not materialise; no published page currently requires DG-32 |

## Role in the library

DG-32 is the finite-dimensional peak of the complex Lie-algebra spine between
DG-31 and the compact/real-form pages. Verified interfaces:

- Four page-level `requires`: DG-27 `lie-algebra-representations-enveloping-algebras-and-pbw`
  (published), DG-29 `semisimple-lie-algebras-cohomology-and-levi-theory`
  (published), and the run-local batch-11 A pages DG-30
  `cartan-subalgebras-and-root-space-decompositions` and DG-31
  `root-systems-dynkin-diagrams-and-cartan-killing-classification`.
- 50 distinct item dependencies across the pair: 25 intra-pair, 16 on the two
  batch-11 A pages, 9 published items; 0 unresolved, and no dependency on a B
  page or on a Recorded/catalogue result.
- Consumers: DG-33 (page edge plus seven item-level edges spread over six
  consuming items — weight spaces; analytic Weyl group via
  `prop-weyl-vector-is-the-sum-of-fundamental-weights`; lattice sandwich and
  compact highest weights via the classification theorem; Weyl denominator via
  `def-weyl-vector-rho` and the fundamental-weights proposition; numerator via
  the extremal-weights proposition) and DG-34 (page edge). The B page supplies
  nothing outside itself (checked across all 27 current pairs); this is the
  intended A/B shape.
- No published page currently requires DG-32: the proposed
  `finite-weyl-invariants-bruhat-and-kostant-harmonics` edge in the
  published-consumer ledger did not materialise — that published page carries
  its own local finite-semisimple chain and has no `requires` field.

## Inventory against the prose design

The DG-32 section at design line 8024 controls; the second dispatched locator
(L8171) is its internal `### B page` subsection, not a competing design. The
plan-spec rows agree with the manifest on id, title, order, kind, category,
companion and `requires`, and carry no item order of their own.

- All 28 design A items are manifested, in design order and with their design
  kinds; all six designed `fs-` items are present; all 11 designed B items are
  present in order.
- The only inventory difference is the Step-1 addition
  `prop-weyl-vector-is-the-sum-of-fundamental-weights`, recorded in the batch
  notes as a proof-bearing obligation the design had folded into prose (it
  proves `⟨rho, alpha_i^vee⟩ = 1` and `rho = sum_i omega_i` before the Weyl
  denominator lemma). Nothing was dropped or renamed; the pair is 46 items
  (35 A + 11 B), and the A page sits below the established 60-item A-page
  ceiling.
- Scope-relevant design choices are preserved: a fixed Cartan subalgebra and
  positive system throughout, with dominance relative to that base; the
  sufficiency route separated into define `M_int(lambda)` → PBW survival →
  simple-root integrability and finite-dimensionality → unique simple quotient
  → `L(lambda)`; classification as the landmark; complete reducibility cited
  from the published DG-29 theorem; dual, top tensor summand and adjoint
  (highest-root) consequences; the `rho`/extremal-orbit boundary data; the
  Harish–Chandra/category-O orientation remark; and the two owner-retained
  `sl_2` examples derived locally from finite strings.
- The rehoming is coherent and matches the binding owner direction: Verma
  modules and category-O material appear only as orientation/`fs`/B-page
  pointers (RL-2 is published), the general character/multiplicity formulas
  stay on RL-7, and the compact Weyl character formula belongs to DG-33.

## Source coverage assessment

`coverage-checklist` reports 2 pages, 42 harvested rows, 0 errors, 0 warnings;
`source-fetch-check` reports 5/5 fetch-verified sources. DG-32 is supported by
two independent complete treatments:

- Knapp, *Lie Groups Beyond an Introduction*, 2nd ed.: Chapter V §§1–3 and
  §8. Re-verified in the stamped extracted text: Theorem 5.5 "Theorem of the
  Highest Weight" (extracted line 19279), Theorem 5.29 (20427), and the
  Chapter V §8 Theorems 5.107 (23224), 5.110 (23314) and 5.113 (23489) —
  5.107/5.110 inline for the compact-integration preview counterexample,
  5.113 (compact Weyl character formula) deferred to DG-33, where the batch
  rebuilds it locally.
- Kirillov, *An Introduction to Lie Groups and Lie Algebras*: Chapter 8
  §§8.1–8.3 and §8.9. Re-verified: the table of contents places
  representations in Chapter 8, with Theorems 8.2 (8985), 8.10 (9151),
  8.18 (9332), 8.23 (9398), and 8.25 whose proof is §8.9 (9462/10653). The
  design's "Chapter IX §§9.1–9.7, Thms 9.17/9.19" is a stale numbering
  already recorded in the batch notes; the coverage's Chapter 8 locators are
  the correct ones for the fetched file.

Every harvested row is `included`, `inline` with an exact consuming item, or
`deferred` with a destination (Knapp 5.113 → DG-33). The design's Etingof and
Conrad–Landesman citations for DG-32 are routed to RL-7 and the compact
boundary respectively and are not DG-32 proof sources, so their absence from
the DG-32 rows is consistent. No failed retrieval, source waiver or owner
escalation is recorded.

**One non-blocking metadata defect (not a scope omission).** The item
`lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral`
declares the locator "Theorem 8.17 and proof". The stamped Kirillov text has
**Corollary** 8.17 (uniqueness of the highest weight, 9312) and no Theorem
8.17; the dominance-necessity argument is the first paragraph of the proof of
Theorem 8.23 (9407), and the coverage file already attributes the item to
Knapp's Chapter V §§1–3 (Theorem 5.5 and its proof). The mathematical content
is harvested and supported, so scope is unaffected; the owner or Step-3b
author should correct the locator string.

## Honest uncertainty and non-scope observations

1. The general Weyl character/dimension and multiplicity formulas are not on
   this page by design. RL-7 `weyl-character-and-multiplicity-formulas` is
   planned (`plan-spec.json`) with a full inventory (`thm-weyl-character-formula`,
   `thm-weyl-dimension-formula`, Kostant/Freudenthal rows) but is not in this
   run, so the library's formal-character coverage rests on RL-7's future
   build plus the local `sl_2` instance on this B page. This is a library
   scheduling fact, not an omission of DG-32.
2. DG-32's Serre route passes through DG-31's `thm-serre-presentation-theorem`
   → `thm-existence-of-each-classified-root-system`. The sibling step3a
   review of the root-systems pair recorded that existence theorem's
   exceptional-half verification as a secondary omission (owner-held on that
   pair). DG-32 consumes only the Serre theorem's statement as a supplier, so
   its own scope is unaffected, but Step-3b authoring may need the enriched
   DG-31 first.
3. `def-weyl-vector-rho` duplicates the published
   `def-weyl-vector-rho-for-a-chosen-positive-system` (same mathematical
   content, different id and supplier chain): DG-32 defines rho locally
   because its RL citations are non-load-bearing. Harmless redundancy, a
   possible future dedupe for the owner.
4. There is topical overlap with the published `lie-theory` page
   `finite-weyl-invariants-bruhat-and-kostant-harmonics`, which locally
   carries a compact finite-semisimple chain
   (`lem-finite-semisimple-pbw-and-highest-weight-construction`,
   `lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums`).
   DG-32 remains the dedicated classification page with the dominant-integral
   classification, consequences and boundary data; the overlap is background
   for the other page's invariant-theory argument. Recorded for the owner's
   weighing, not a scope gap.
5. I verified inventory, dependency closure, source presence/locators and
   consumer interfaces, and re-read the load-bearing theorem statements. I did
   not re-derive the per-item proof strategies; that is Step 3b/Step 5 work
   and is outside this review.

## Verdict

**sufficient** for both pages of the pair. The planned definitions, results,
false statements and examples cover the design's intended subject — the
finite-dimensional highest-weight structure and classification of complex
semisimple Lie algebras, its dominant-integral boundary, and the retained
`sl_2`/`sl_n`/adjoint examples and counterexamples — with the rehomed
Verma/character superstructure honestly cited and the required consumers
supplied. No omitted topic is named, no enrichment or pair merger is
required, and Step 3b may author against this scope. The one locator defect
and the four observations above are recorded for the owner; none blocks the
scope.
