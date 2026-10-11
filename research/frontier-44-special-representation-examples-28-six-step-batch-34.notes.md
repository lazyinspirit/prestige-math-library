# Batch 34 — `mixed-hodge-structures-and-strictness` (order 1800) / `mixed-hodge-structures-and-strictness-examples`

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair, category
`algebraic-geometry`. Owner authoring direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) read first;
it preserves every planned claim of this pair and forbids scope growth beyond the same frontier.
Canonical plan: `research/plan-spec.json` orders 1800/1807, `requires`
`double-complexes-exact-couples-and-convergence` + `linear-independence-bases-and-dimension` for the
A page and the A page for the B page. Design: `research/plan-klr-foundation-prerequisites.md`
section "Mixed Hodge Structures And Strictness". The appended-pair drift review
(`...-alpha-step1-append-1-drift.md`) returned `no-drift (order 1800; declared closure complete)` for
this page and that verdict was preserved.

Scaffold written: **5 A items + 1 B item = 6**, all recorded `ready`, in-run dependency levels
0/1/2/1/3 (A) and 1 (B). No item was escalated; no page split was needed; both pages are far below
the 100-item cap. No published content, shared plan, engine state or verdict was edited. Only this
batch's manifest, coverage, notes, `[]` cross-batch input and Step-1 readiness records were written.

## Design / plan comparison (conflicts recorded)

1. **Task locator drift, not a scope conflict.** The batch task cites the design at
   `research/plan-klr-foundation-prerequisites.md` **L316**. The file now has 1510 lines and its
   "Mixed Hodge Structures And Strictness" section begins at line **428**; line 316 falls inside the
   preceding "Compact Laplace Type Operators" section. The section was located by title and read in
   full (lines 428-481), together with its five linked carrier drafts under
   `research/frontier-44-special-representation-examples-28-klr-foundation-monodromy-drafts/items/`.
   The plan-spec inventory of this pair matches the design's four A items and one B item exactly.
2. **One local supplier added for closure (same A page).**
   `lem-deligne-splitting-of-a-mixed-hodge-structure` — Deligne's canonical bigrading
   `I^{p,q}` of a mixed Hodge structure with `W_m = sum_{p+q<=m} I^{p,q}`, `F^a = sum_{p>=a} I^{p,q}`
   and functoriality. The design's draft of the strictness lemma contains this construction inside
   its first two proof steps; splitting it out mirrors the source structure (Deligne II 1.2.5-1.2.11
   gives the two-filtration lemma, the lifting lemma and the bigrading before 2.3.5 uses them) and
   keeps both items' statements focused. The design's claims are all preserved; nothing was weakened.
3. **Dependency corrections against the design's declared inputs.**
   - The design lists `lem-morphisms-of-mixed-hodge-structures-are-strict` as depending on the
     definition only. The proof of strictness runs through the splitting, so the new splitting lemma
     is now a declared dependency (dependency level 2).
   - The design's declared input for
     `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights` is
     `thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex` (a homological
     first-quadrant **double-complex** theorem). The weight spectral sequence in question is the
     spectral sequence of a **filtered cochain complex**, and the library's exact cohomological
     counterpart is the published `thm-the-cohomological-filtered-complex-construction` (home page
     `spectral-sequences`, inside this page's declared requires closure). That theorem is the
     supplier actually used; the double-complex theorem is not needed separately, since the
     cosimplicial simple complex is treated as a filtered cochain complex and the construction is
     carried inside the proof. This is a supplier substitution of the same mathematical content, not
     a narrowing of any claim.
   - The design's strictness draft also relies on the conjugation/complexification items homed on
     `complexification-realification-and-real-structures`, which is **not** in this page's declared
     requires closure, and a first draft of this scaffold used
     `ex-vector-spaces-over-a-field-as-an-abelian-category`, which is homed on a **B/examples** page
     and is therefore forbidden as a dependency (`b-leaf`). Both were resolved in-batch:
     `thm-modules-over-a-ring-form-an-abelian-category` (A page `abelian-categories`) supplies the
     abelian-category structure for vector spaces, `def-complex-numbers-and-arithmetic` supplies
     complex conjugation, and the conjugation on `H_C = H ⊗_Q C` is defined inline from the tensor
     product universal property. After the repair `validate-plan --run` reports no `b-leaf` and no
     `undeclared-prereq` finding for either page of this batch.
4. **Definition clause moved to explanatory prose.** The design's definition of a cohomological
   mixed Hodge complex says "Strictness for F here equivalently says the F spectral sequence of the
   graded complex degenerates at its first page". That equivalence is a theorem (strictness of a
   filtered differential is equivalent to E_1-degeneration), not a definitional clause, and it is
   not used by this batch's proofs. The manifest keeps the strictness axiom and records the
   equivalence as source-backed explanatory prose in the strategy; the definitional content is
   unchanged and no claim was weakened.
5. **B-example provenance corrected to its actual status.** The design marks the example's statement
   `literature-derived`. The exact two-dimensional extension construction with
   `F^0 = C(e_0 + i e_1)` was not located verbatim in any of the fetched full texts (Deligne II/III
   give the theory and `Q(r)`, but not this witness; the closest statement-level analogue is
   El Zein's Example 1.3). The statement and verification are therefore recorded as
   `ai-generated` with `generation.role: example`, with the definitional background cited; the
   example is a B-page item and no item depends on it.

## Source work (read as full text, not snippets)

`source-fetch-check --coverage … --stamp` fetched and stamped **10/10** source instances (6 distinct
URLs on the A page, 4 on the B page; re-run in check mode: `10/10 source(s) fetch-verified`).

- **Deligne, Théorie de Hodge II** (Numdam complete PDF, 54 pp.; sha256_16 `748edefb44fded8a`,
  byte-identical to the SHA-256 recorded in
  `...-klr-foundation-monodromy-source-evidence.json`). Read: §1.2.5-1.2.13 (two-filtration lemma,
  the lifting lemma 1.2.8 with 1.2.9, the bigrading 1.2.11 and the abelian-category theorem 1.2.10
  with 1.2.12), §2.3.1-2.3.8 (mixed Hodge definition 2.3.1, morphisms 2.3.4, strictness theorem
  2.3.5(i)-(v)), §3.2.5-3.2.11 (weight and Hodge spectral sequences of the cohomological complex,
  degeneration and the induced mixed Hodge structure). Full French text extracted with `mutool` and
  inspected section by section.
- **Deligne, Théorie de Hodge III** (Numdam complete PDF, 74 pp.; sha256_16 `d78d4f46742916cd`,
  matches the recorded SHA-256). Read: (8.1.1)-(8.1.2) (cohomological Hodge complexes, (GH1)-(GH2)),
  (8.1.5) and (GHM) (mixed Hodge complexes), Scholie (8.1.9), (8.1.10)-(8.1.14) and Theorem
  (8.1.15) with the proof (8.1.17), Lemma (8.1.18), and the applications (8.1.19).
- **Voisin, Hodge structures and the topology of algebraic varieties** (author-hosted/Harvard CMSA
  lecture notes, 65 pp., stamp `18223101f6b0894c`): Definition 1.22; Definition 2.6; Theorems 2.7
  (strictness) and 2.8 (Deligne splitting, stated with functoriality) with Voisin's proof of 2.7
  from 2.8, which is the exact argument used in the strictness item. Voisin's caveat that the
  `I^{p,q}` cannot in general be made simultaneously conjugate-symmetric is recorded in the
  splitting item.
- **El Zein, Hodge Structures and Mixed Hodge Structures** (University of Pennsylvania course notes,
  8 pp., stamp `98547015e6a7a47b`): Lemma 2.1 (splitting formula and the congruence modulo
  `W_{p+q-2}`), Lemma 2.3 (strictness), Proposition 2.4 (abelian), Definitions 3.3/3.5 and Theorem
  3.6 (Hodge complexes, mixed Hodge complexes, weight spectral sequence).
- **Weber, Notes on Mixed Hodge Structures** (Srni 2005, author-hosted, 15 pp., stamp
  `9917272bb0f70c3e`): (2.2.1)-(2.2.5) (definition, strictness, splitting with the mod `W_{l-2}`
  congruence), (2.2.6)-(2.2.8), (2.3.1) (mixed Hodge complex axioms), (2.4.1) (weight degeneration at
  E_2, Hodge degeneration at E_1, shifted weight filtration). Statement-level cross-check.
- **Arapura, Mixed Hodge Structures Associated to Geometric Variations** (TIFR survey, 34 pp.,
  stamp `9475d6a2b39e858d`): §4.5 Proposition 4.12 and Corollary 4.13 (cohomological mixed Hodge
  complex axioms and the induced filtrations); §§4.1-4.4 and §5 were read and disposed as
  out-of-scope/deferred in the coverage ledger.
- **Cirici-Horel, Mixed Hodge structures and formality of symmetric monoidal functors**
  (author-hosted preprint, stamp added on the A page): §3 Lemma 3.3 (Deligne's splitting with the
  explicit formula and the functoriality statement) used as an independent cross-check of the
  formula and of the "functorial" clause.

Every harvested heading received a disposition in
`research/frontier-44-special-representation-examples-28-batch-34.coverage.json` (46 harvested
results, 0 errors). No source needed a drop and no `source_resolution` record was created. The only
coverage warning is advisory: `coverage-low-yield` on the B page (0 of 9 harvested headings are
separately scaffolded there, because the single planned example absorbs the definitional headings
inline and the theory headings belong to the A page; the plan-spec prescribes exactly one B item).

## Cross-batch dependencies

Owned consumer input: `research/frontier-44-special-representation-examples-28-batch-34.cross-batch-dependencies.json`
is `[]` — every dependency of this batch resolves to published, out-of-run items, so this batch
consumes no in-run supplier and no open row is owned here. The refreshed unified ledger
(`frontier-dependency-ledger.mjs refresh --run …`) records this batch's input as reviewed and shows
no edge and no orphaned review with a batch-34 consumer.

In the other direction this batch is a supplier for later same-frontier pages, whose owners own the
corresponding ledger rows (listed for the Step-8 reconciler):
`logarithmic-hodge-complexes-and-smooth-open-weights`,
`proper-hyperresolutions-and-mixed-hodge-restriction-images`,
`geometric-fixed-parts-and-gauss-manin-semisimplicity`, and their example pages. The four planned
item IDs and their statements/strategies are preserved verbatim in scope; the added splitting lemma
changes no consumer interface.

## Published defects

None found. The two declared prerequisite pages
(`double-complexes-exact-couples-and-convergence`, `linear-independence-bases-and-dimension`) and all
other published suppliers used here (`def-increasing-and-decreasing-filtration-of-an-object`,
`def-associated-graded-object-of-a-filtered-object`, `def-internal-direct-sum`,
`thm-modules-over-a-ring-form-an-abelian-category`, `def-tensor-product-of-modules-by-generators-and-relations`,
`def-complex-numbers-and-arithmetic`, `def-cochain-complex-in-an-abelian-category`,
`def-filtered-chain-complex`, `def-filtered-chain-map`, `def-quasi-isomorphism`,
`thm-the-cohomological-filtered-complex-construction`) were read on disk and their statements,
hypotheses and directions match the uses here. No published repair was needed and no defect row is
entered for the canonical ledger.

## Findings belonging to other batches (reported, not repaired here)

- The residual `validate-plan --run` failure class is `undeclared-prereq` on sibling batches; the set
  moved during this dispatch (four rows on **batch-31**,
  `compact-laplace-type-operators-and-hodge-representatives`: items depending on
  `chern-weil-theory-and-characteristic-forms`, `riemann-surfaces-branched-maps-and-differentials`,
  `riemannian-metrics-length-distance-and-volume`, `riemannian-comparison-theorems`; then two rows on
  `compact-support-sheaf-calculus` depending on `simplicial-complexes-and-simplicial-homology` and
  `simplicial-subdivision-and-simplicial-approximation`). Neither is this batch; routed to the
  respective owners.
- During this dispatch the run-wide dependency-level check transiently showed two label errors on
  **batch-30** (`lem-field-module-sheaves-have-injective-derived-models`,
  `ex-constructible-six-operations-on-a-point-and-an-open-closed-line`); a later re-run showed them
  already repaired by that batch's writer. Recorded as history only.
- The run-wide checks also report `empty scaffold inventory` for sibling batches whose scaffolds were
  still pending at this writing (40 page rows). Those belong to the other in-flight/stub batches.

## Checks (actual results)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no label, shape or cycle error in the run; the only remaining findings are
  `empty scaffold inventory` for sibling batches without inventories yet. This batch's six labels
  equal the computed levels (0/1/2/1/3 and 1).
- `node tools/manifest-deps.mjs research/…-batch-34.pages.json` —
  `manifest-deps: 6 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/…-batch-34.pages.json` —
  `content-policy: 6 scoped item(s), 0 error(s), 0 warning(s)`. Whole run:
  `content-policy: 611 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/…-batch-34.coverage.json --require-destination` —
  `coverage-checklist: 2 page(s), 46 harvested result(s), 0 error(s), 1 warning(s)` (advisory
  `coverage-low-yield` on the single-example B page, explained above).
- `node tools/source-fetch-check.mjs --coverage research/…-batch-34.coverage.json --stamp` —
  `10/10 source(s) fetch-verified (10 newly stamped)`; check mode `10/10 source(s) fetch-verified`,
  `10/10 source(s) resolved (0 documented drops)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — the residual `undeclared-prereq` errors belong to sibling batches and move as those writers work
  (four batch-31 rows at one run, two `compact-support-sheaf-calculus` rows at the final run); **no**
  `b-leaf`, `undeclared-prereq`, `resolve`, `intra-order`, `forward-ref`, `orphan` or page-scope
  finding involves either batch-34 page. The page keeps the pre-existing plan-level advisory
  `redundant-prereq` (`linear-independence-bases-and-dimension` is reached through
  `double-complexes-exact-couples-and-convergence`); the plan, the batch task and the plan-spec all
  declare the same two-element `requires`, so it was preserved unchanged and is recorded for the
  Step-4 reconciler.
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` — after
  the six records below: `618 items, 591 ready, closed: false` run-wide at the first run and
  `629 items, 594 ready` at the final run (the counts move as sibling batches write concurrently;
  sibling batches still lack inventories/records); the work list contains **zero** rows for any
  batch-34 item in every run, i.e. all six records are current against the written manifests.
- `frontier-item-gate --tool extcheck` and `--tool fwdcheck` (item mode) — both FAIL at this boundary
  with `[focus-item-unknown]` for every scaffold ID of the run, including this batch's, which is the
  documented Step-1 state: item validators resolve manifest IDs through authored item files, and at
  Step 1 those files are deliberately absent (see the stage comment at `tools/autopilot/stages/mathlib.mts`
  1-scaffold gates). The manifest-only policy pass above covers the retired external-record fields that
  exist at this boundary. None of this batch's items declares `forward_refs`, `proved_here`,
  `external_refs` or `external_dependency`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — `frontier-dependency-ledger: refreshed and deduplicated`. Batch 34 is in `reviewed_batches` with
  its reviewed empty input; the refreshed ledger carries three page-level edges naming
  `mixed-hodge-structures-and-strictness` as supplier for `logarithmic-hodge-complexes-and-smooth-open-weights`
  (batch 38), `geometric-fixed-parts-and-gauss-manin-semisimplicity` (batch 42) and
  `proper-hyperresolutions-and-mixed-hodge-restriction-images` (batch 46) — those rows are owned by
  those consumer batches. No edge or orphaned review names any batch-34 item as a consumer.

## Step-1 decisions

All six items were recorded `ready` one at a time in prerequisite order with the examined dependency
IDs and the evidence above:
`def-rational-mixed-hodge-structure`,
`lem-deligne-splitting-of-a-mixed-hodge-structure`,
`lem-morphisms-of-mixed-hodge-structures-are-strict`,
`def-cohomological-mixed-hodge-complex`,
`lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`,
`ex-a-mixed-hodge-extension-need-not-split-rationally`.
Owner/operator reconciliation and the engine's Step-1 gate follow; a readiness record is not
independent mathematical approval (Step 3 provides that review).

## Residual risks for the Step-3 author

- The splitting item's proof must reproduce Deligne II 1.2.8's induction in full (with 1.2.9); the
  strategy cites the route, not the source text, and this is the longest local argument on the page.
- In the mixed-complex item, the identification of the induced `F`-filtration on `Gr^W_m H^n` with
  the stable-page filtration is the technical heart (strict representative correction down the finite
  weight filtration); the strategy states it in full and it must be written, not cited.
- The AC status of the spectral-sequence suppliers must be re-verified at authoring; none of them
  states a choice principle, and this batch has no AC use of its own.
- The strictness item deliberately claims no splitting/uniqueness of the induced structures on
  kernels and cokernels; do not strengthen it.
