# Step 3a scope review — graded-quiver-algebras-and-derived-tensor-functors

- Run: `frontier-35-ten-categories` (batch 16), role alpha, label
  `step3a-pair-graded-quiver-algebras-and-derived-tensor-functors-024c7cc93493de26`.
- A page: `graded-quiver-algebras-and-derived-tensor-functors` (order 755,
  category `braid-groups`, 18 planned items).
- B page: `graded-quiver-algebras-and-derived-tensor-functors-examples`
  (order 756, 4 planned items); companion pointers A↔B consistent.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-35-ten-categories-step3a-review-graded-quiver-algebras-and-derived-tensor-functors.json`;
  re-verify with `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-35-ten-categories-batch-16.pages.json` | Current A inventory (18 items) and B inventory (4 items) with every statement, strategy, `deps`, provenance, source locator and page `requires` |
| `research/frontier-35-ten-categories-batch-16.coverage.json` | Four source records for the A page (Khovanov–Seidel; Weibel ch. 2; Weibel ch. 10; Stacks tag 0FCM) with locators, 25 row dispositions and fetch stamps |
| `research/frontier-35-ten-categories-batch-16.notes.md` | Step-1 construction and owner-repair record: the two added A suppliers, the five owner-added local suppliers that replaced the unbuilt HA-19/20/21 item uses, escalation resolutions, gate results, the recorded published horseshoe defect |
| `research/frontier-35-ten-categories-batch-16.cross-batch-dependencies.json` and `…-cross-batch-dependencies.json` | Ten edges touching this pair: one page edge plus nine item edges to batch-14 HA-18 suppliers (9 open, 1 verified); no consumer edge into the pair |
| `research/plan-braid-groups-track.md` §BG-14 (lines 660–706) and the BG-14 examples table | Controlling prose design: the page supplies the bounded projective comparison, signed bimodule action and triangulated K₀ shift rule; the §2d braid-action material is assigned to BG-15 (lines 708–735) |
| `research/plan-spec.json` rows 755/756 (plus consumer rows 757, 761) | Page identity/order/kind/category/companion/`requires`; empty planned item lists, so the manifest controls item order; planned consumers BG-15 and BG-17 |
| `research/frontier-35-ten-categories-owner-authoring-direction.md`, `…-deferred-pairs.json`, `…-deferred-items.json`, `…-scope-ledger.json` | Binding owner direction touches batch 8 and one batch-13 item only; this pair remains fully owed by batch 16 |
| `research/frontier-35-ten-categories-batch-14.pages.json` | In-run HA-18 supplier page: the seven scaffolded items this pair depends on exist with the needed claims (graded shift, graded kernels/cokernels, balanced tensor, shift isomorphisms, finite graded projectives, exactness/projective preservation) |
| Published prerequisite pages in `library/` (`derived-categories`, `tensor-products-of-modules`, `chain-complexes-and-homology`, `modules-over-a-pid-and-canonical-forms`) and the 11 published item suppliers in `items/` | Prerequisite and supplier availability; all are earlier in order and nonempty |
| Fetch-stamped sources re-fetched to `/tmp`: `ks.pdf` (sha256 prefix `34e747083f6229d6`, 714 553 bytes, 72 pp.), `w2.pdf` (`a6c1e55d00e04695`, 1 297 029 bytes), `w10.pdf` (`5729e850d7462977`, 1 935 092 bytes), `stacks0fcm.html` (`f781a3af16f0b07a`, 18 828 bytes) | Byte-identical reproduction of all four stamps; Khovanov–Seidel §1b and §§2a–2d read in the extracted text, Weibel §2.2 and §10.4 and Stacks §13.28 read at the cited rows |
| `research/published-consumer-supplier-ledger.md` | Published defect row for the arbitrary-category horseshoe (line 30241, repaired 2026-09-24 with the statement unchanged); no ledger entry concerns this pair because it has no published content |

## Inventory against the prose design

All 16 designed A rows are present with the design kinds and order, and all four
designed B rows are present. The plan-spec rows agree with the manifest on id,
title, order, kind, category, companion and `requires`, and carry no competing
item order. Two A items were added at Step 1 (`def-vertex-khovanov-seidel-modules`,
`lem-finite-graded-projective-resolutions-are-extension-stable`); the batch note
records them as the worker/owner additions that make the KS composition-series
route and the finite-extension argument local and self-contained.

Item-for-item against the sources (all read from the stamped Khovanov–Seidel
text, printed pp. 3–4 and 9–14):

- `def-path-ring-of-a-finite-quiver-over-the-integers` and
  `def-khovanov-seidel-type-a-quiver-algebra` reproduce KS §1b exactly: the path
  ring with length-zero idempotents and left-to-right concatenation, the grading
  `deg(i) = deg(i|i+1) = 0`, `deg(i+1|i) = 1`, and the three relation families
  `(i−1|i|i+1) = (i+1|i|i−1) = 0`, `(i|i+1|i) = (i|i−1|i)` for `0 < i < m`, and
  `(0|1|0) = 0`.
- `lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis` matches the
  displayed basis: `m+1` vertices, `2m` arrows and one degree-one return at each
  `i = 1,…,m`, total `4m+1`.
- `def-graded-khovanov-seidel-module-category-and-projectives`,
  `def-vertex-khovanov-seidel-modules`, the resolution lemma and the finite
  homological-dimension theorem match KS §2a: `P_i = A_m(i)`, the right
  projectives `(i)A_m`, the degree-zero integral vertex modules `S_i`, the
  `S_i/pS_i` one-step extension, the staircase bicomplex of projectives with
  right-multiplication maps, its total complex as a finite projective resolution
  of `S_i`, and Proposition 2.1. The local extension-stability lemma is the
  graded-module horseshoe step; the batch note records that it replaces the
  published arbitrary-abelian-category horseshoe, on which this pair has no
  declared dependency.
- `lem-bounded-finite-projective-model-for-khovanov-seidel-modules` and
  `def-bounded-projective-homotopy-category-for-a-m` match KS §2c: finite
  homological dimension makes `P(A_m-mod)` equivalent to `D^b(A_m-mod)`; `C_m` is
  that homotopy category, with `[1]` and `{1}` explicitly distinct.
- `def-two-sided-projective-khovanov-seidel-bimodule-functors`,
  `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations`,
  `def-khovanov-seidel-beta-and-gamma-bimodule-maps`,
  `def-signed-totalization-of-graded-a-m-bimodule-actions`,
  `lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m` and
  `def-khovanov-seidel-positive-and-negative-twist-complexes` match KS (2.1),
  Theorem 2.2 (both (2.2)/(2.3) as one adjacent-index clause, (2.4), (2.5)), §2c's
  action of a bounded two-sided projective bimodule complex, and §2d's R_i, R_i⁻¹
  with β_i from (2.6) and the four-term γ_i(1) from (2.7), including the `i = m`
  omission and the `{−1}` shift.
- `def-triangulated-k-zero-of-khovanov-seidel-projectives` and
  `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero` match Stacks
  13.28.1 (the relation `[Y] − [X] − [Z] = 0`, hence `[X[n]] = (−1)^n[X]`) and
  13.28.3 (an exact functor induces a K₀ map, giving the invertible `q` action of
  the exact shift `{1}`).
- B page: `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives` (nine basis
  paths for `m = 2`; `P_0`, `P_1`, `P_2` listed by endpoint),
  `ex-a-simple-module-projective-resolution-for-a-two`,
  `ex-totalizing-a-two-term-bimodule-action` and
  `cex-internal-and-homological-shifts-are-not-interchangeable` are the four
  designed examples/counterexample. I hand-checked the A₂ resolution
  `0 → P_0 → P_1 → P_2 → S_2 → 0`: right multiplication by `(1|2)` identifies
  `im = span{(1|2),(2|1|2)} = ker(P_2 → S_2)`, right multiplication by `(0|1)`
  identifies `im = span{(0|1),(1|0|1)} = ker(·(1|2))`, the composite is the zero
  monotone path `(0|1|2)`, and the first map is injective on its two basis paths.
  The other three items are scope-level faithful to §2c/§2d and Stacks 0FCM.

Boundary clauses preserved: `i = 0` is excluded from `U_i` and the TL theorem
(KS footnote 3); the `i = m` endpoint omission is stated; `U_iU_j = 0` is
restricted to `|i − j| > 1`; the level-2 identity is stated separately for
`i ± 1`; the resolution lemma flags that the ID's word "simple" says nothing
about ungraded simplicity of the integral `S_i`; `[1]` and `{1}` are never conflated.

## Source coverage assessment

`coverage-checklist --require-destination` on the batch coverage file reports
2 pages, 42 harvested results, 0 errors and 0 warnings; `manifest-deps` on the
batch manifest reports 38 items, 0 errors. For this A page the coverage disposes
25 rows: 21 included, 2 deferred, 2 out-of-scope.

- Khovanov–Seidel (17 rows): everything in the read window is included except
  §2d Proposition 2.4 and §2d Theorem 2.5, which are deferred to
  `categorical-braid-actions-and-decategorification` with explicit reasons (the
  inverse-complex contraction and the chain-level braid maps belong there, after
  homological Gaussian elimination exists). I confirmed both statements and their
  proofs open exactly this way: Proposition 2.4 splits `R_i ⊗ R_i⁻¹` into the
  diagonal bimodule plus the explicit acyclic complexes `T_{−1}, T_1`, and
  Theorem 2.5's proof reduces (2.9) to a matrix cancellation — the material the
  plan assigns to BG-15 items `lem-khovanov-seidel-generator-complexes-are-mutually-inverse`
  and `lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation`
  (plan lines 719–721) with the in-run `homological-gaussian-elimination` supplier.
- Weibel ch. 2 (2 rows): Horseshoe Lemma 2.2.8 included for the graded extension
  lemma; the Comparison-Theorem remark out-of-scope with reason.
- Weibel ch. 10 (4 rows): Corollary 10.4.7 (bounded-above projective full
  faithfulness), Theorem 10.4.8 (the projective homotopy model for `D^-(A)` when
  `A` has enough projectives) and Exercise 10.4.6 (the Noetherian `D_fg(R)`
  equivalence) included for the bounded model lemma; the injective Lemma 10.4.6
  out-of-scope with reason. I read all four rows in the stamped chapter and the
  labels and reasons are accurate; the DCC side is used through the pair's own
  finite-homological-dimension theorem, which converts bounded-above into bounded.
- Stacks 0FCM (2 rows): Definition 13.28.1 and Lemma 13.28.3 included for the
  K₀ and shift items; verified in the stamped HTML.

All four stamps reproduced byte-identically on re-fetch, so the coverage locators
are checkable against the same artefacts the workers read.

## Role in the library

- Four of the five declared `requires` pages are published and earlier in order
  (`derived-categories`, `tensor-products-of-modules`,
  `chain-complexes-and-homology`, `modules-over-a-pid-and-canonical-forms`); the
  fifth, `graded-bimodules-and-tensor-functors` (order 717), is the in-run
  batch-14 HA-18 scaffold, currently unpublished but Step-1 ready. No page
  prerequisite is a forward edge.
- 36 distinct dependency ids: 18 resolve inside the pair, 7 to batch-14 HA-18
  scaffold items, 11 to published items; 0 missing; 0 own-page forward or
  self-edges; B items depend only on A items and published or in-run items, so B
  is a clean leaf. The page-level consumer edge to batch 14 is recorded open for
  Step 3 verification, which is the expected state, not a scope gap.
- No in-run item anywhere in the 17 batch manifests depends on an item of this
  pair (checked across all batches): the pair supplies nothing further inside
  this run.
- Planned consumers are the companion B page and, in the plan, BG-15
  `categorical-braid-actions-and-decategorification` (order 757) and BG-17
  `rouquier-complexes-and-categorical-braid-relations` (order 761); neither is
  published or in this run. Their planned uses match the supplied interfaces:
  BG-15's `def-khovanov-seidel-complex-of-a-braid-word`,
  `lem-khovanov-seidel-generator-complexes-are-mutually-inverse`, the braid-relation
  lemma and `def-graded-grothendieck-group-of-a-m-perfect-complexes` consume
  `def-khovanov-seidel-positive-and-negative-twist-complexes`, the TL theorem and
  `def-bounded-projective-homotopy-category-for-a-m` exactly as scaffolded.
- The §1b Grothendieck-group computation `K ≅ Z[q,q⁻¹]^{m+1}` with projective
  basis and the unreduced Burau representation are not part of this pair: the plan
  assigns them to BG-15 (`def-graded-grothendieck-group-of-a-m-perfect-complexes`,
  `prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action`, plan
  lines 726–727), which is why no row for them appears in this batch's coverage
  and why the coverage locator stops at Theorem 2.5's proof opening.
- Owner direction does not touch this pair: batch 8 and the single batch-13 item
  are the only deferrals in this run.

## Published-supplier notes (no defect claimed for this pair)

- The published arbitrary-category horseshoe defect (`lem-degree-zero-horseshoe-lift`,
  ledger line 30241) was recorded by this batch's Step-1 note and has since been
  repaired with the statement unchanged; this pair declares no dependency on that
  item family and instead proves its graded-module extension lemma locally.
- The 11 published suppliers of this pair are all ordinary items and all exist;
  I did not audit their proofs (Step 3b/5 work) and I make no acceptance claim
  about them. No published page requires this pair, and the Phase-3 ledger has no
  entry naming it.

## Non-blocking observations for the owner and the Step-3b author

1. Three A items still carry `proof_strategy` text naming the unbuilt HA-19/HA-20/HA-21
   pages (`def-bounded-projective-homotopy-category-for-a-m`,
   `def-khovanov-seidel-positive-and-negative-twist-complexes`,
   `cex-internal-and-homological-shifts-are-not-interchangeable`) although their
   `deps` arrays and statements now point to the owner-added local suppliers. The
   statements are self-contained; the author must align the strategies with the
   local route. This does not change the pair's scope.
2. The pair mints a `C_m`-specific K₀ definition while the plan's general page
   `perfect-complexes-and-triangulated-grothendieck-groups` (order 723, empty
   inventory, outside this run) is intended to own the general
   `def-triangulated-grothendieck-group`. The local definition is the owner's
   documented choice to avoid depending on unbuilt pages; the two should be
   reconciled when page 723 is built, not now.
3. The B inventory has no worked instance of the TL relation or of a corner
   `e_iA_me_j` computation. The four designed examples cover the algebra, the
   resolution machinery, the signed totalization and the shift distinction, which
   I judge adequate; an additional free-cyclic `{}_iP ⊗_{A_m} P_{i±1}` or
   `U_i²` example would be a natural enrichment if the owner later widens the B
   page, but it is not required for this scope.
4. The §2d payoff (R_i invertible, braid relations) is published by a page that
   is not in this run. The pair is internally consistent — no item here asserts
   invertibility or the braid relations — and the plan already carries the
   destination items, so nothing is dropped from the library plan; the owner may
   still wish to confirm this seam before the BG-15 run is scheduled.

## Uncertainty statement

I verified page identity, the full item inventory against the stamped sources,
source stamps and locators, dependency availability, the B-leaf shape, the
in-run and planned consumer interfaces, and the deferral destinations. I read
KS §1b and §§2a–2c completely and §2d through the proof opening of Theorem 2.5,
the cited Weibel rows and the complete Stacks 0FCM section. I did not re-derive
the pair's proof strategies (grid acyclicity details, the PID-filtration route
to finite homological dimension, the bounded projective comparison, signed
totalization signs, β/γ centrality), did not audit the 11 published suppliers or
the 7 in-run batch-14 scaffolds, and make no proof-correctness claim; those are
Step 3b and Step 5 obligations. I found no omitted topic in the pair's intended
subject and therefore propose no merger or mandatory enrichment.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples realise the controlling BG-14 design item-for-item, the sources support
every claim at the recorded locators, the two §2d deferrals have honest reasons
and live destination items in the plan, the B page is a clean leaf, and the
pair's prerequisite closure and consumer interfaces are intact. Step 3b may
author against this scope.
