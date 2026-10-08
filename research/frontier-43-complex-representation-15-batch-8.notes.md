# Batch 8 scaffold notes — outer products, skew Specht modules, Littlewood–Richardson

Run `frontier-43-complex-representation-15`, role beta, label `batch-8`, pair
`outer-products-skew-specht-modules-and-littlewood-richardson` (A, order 1562,
category `special-topics-in-representation-theory`) with companion
`outer-products-skew-specht-modules-and-littlewood-richardson-examples` (B,
order 1565). Artifacts: `research/frontier-43-complex-representation-15-batch-8.pages.json`
(15 A items + 4 B items, all labelled with `dependency_level`),
`research/frontier-43-complex-representation-15-batch-8.coverage.json`
(4 sources, all fetch-stamped), the 19
`research/frontier-43-complex-representation-15-step1-<id>.json` readiness
records, and the already-present empty
`research/frontier-43-complex-representation-15-batch-8.cross-batch-dependencies.json`.

Owner authoring direction
`research/frontier-43-complex-representation-15-owner-authoring-direction.md`
was read first. It binds batches 1, 4, 5, 13 and 14; it adds no obligation to
batch 8. Its standing rule — no active `proved_here: false`, no theorem
`not-supplied` fallbacks, no `external_refs` or external-dependency substitutes
— is satisfied here: every batch-8 item has a complete local proof strategy and
names either an in-batch or a published supplier.

## Design, plan and manifest comparison

Design read: `research/plan-symmetric-group-representations-track.md` §1
(inherited ownership: RG-8/9/10/11, RL-8 and the published suppliers), §2
(conventions), §3 (deliberate limits), §5 (proposed inventory pointer) and the
SYMR-3 block of `research/symmetric-group-planning/proposed-inventory.md`.
Current plan read: `research/plan-spec.json` pages 1562 and 1565, both with
`items: []` by design. The plan controls.

* **Plan conflicts: none.** The manifest keeps the plan's page IDs, orders,
  category, the A page's four declared `requires` edges and the B page's single
  edge on its A page. The plan declares no item inventory, so the item-level
  deviations below are design-vs-manifest refinements, not plan conflicts.
* **A-page inventory grew from 11 to 15 items.** Added, with the local proof
  obligations they close: `thm-littlewood-richardson-schur-product-expansion`
  (the Littlewood–Robinson bijection and the Schur product rule — the design's
  own route for `thm-outer-littlewood-richardson-rule` prescribed exactly this
  argument, but the manifest makes it a prerequisite item so the outer rule
  reduces to a characteristic-map translation);
  `lem-character-ring-of-a-direct-product-is-the-tensor-product`,
  `lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation`
  and `lem-induction-commutes-with-an-external-tensor-factor` (the finite-group
  joints the design's ring/commutativity/Mackey route needs; no published item
  supplied them). No LR tableau convention is re-minted: every item consumes
  the published RL-8 `def-littlewood-richardson-tableau-and-coefficient`.
* **Design vs manifest route placement.** The design's route text for the Hopf
  theorem and `def-skew-multiplicity-module-over-c` named a generic dep set;
  the manifest replaces it with the exact suppliers actually used (restriction,
  Hom/intertwiner, tensor–hom adjunction, Frobenius reciprocity, Hall
  adjointness, Maschke) and moves `thm-complex-specht-modules-are-irreducible`
  and `cor-distinct-specht-modules-are-inequivalent` into the consumer theorem
  that needs them. This is a refinement, not a scope change.
* **B-page deviations (recorded).** (i) The design's
  `cex-a-semistandard-skew-tableau-with-a-nonlattice-word-contributes-zero` is
  replaced by the sharper `cex-outer-multiplicity-is-not-the-semistandard-tableau-count`
  (same mathematical warning: semistandardness alone is insufficient; the
  replacement exhibits a genuine multiplicity error — 3 semistandard tableaux
  vs 2 Littlewood–Richardson tableaux — instead of one non-lattice word).
  (ii) The design's `cex-an-lr-coefficient-is-not-a-kronecker-coefficient` is
  omitted: the internal/Kronecker product is owned by the later SYMR-13 page
  `kronecker-coefficients-and-internal-products`, which is outside this run and
  is where the coverage defers Macdonald I §7 Examples 20/23. No batch-8 item
  asserts anything about internal products; the outer-vs-internal boundary is
  still stated inside `thm-outer-littlewood-richardson-rule`.

## Source evidence

Four full-text sources, all with `fetch_verified` stamps in the coverage file
and independently re-probed live (HTTP 200, `application/pdf`) during this
dispatch: Macdonald I, *Symmetric Functions and Hall Polynomials* (486 pp.,
locators §5 Ex. 25, §5 (5.1)–(5.17), §7 (7.1)–(7.6) and Ex. 26, §9
(9.1)–(9.7)); Grinberg–Reiner, *Hopf Algebras in Combinatorics* (288 pp.,
§§1.1–1.4, 2.3–2.4, 4.2–4.3); James, *The Representation Theory of the
Symmetric Groups* (161 pp., §14 Ex. 14.5, §16 Thm 16.4); Webb, *A Course in
Finite Group Representation Theory* (294 pp., §4.1 Cor. 4.1.4, §4.3, §5.1–5.2).
That is at least two independent treatments per A-page result, including
book/full-lecture-note treatments; the B-page shape computation is
independently checked by James §14.

`node tools/source-fetch-check.mjs --coverage research/frontier-43-complex-representation-15-batch-8.coverage.json`
→ `4/4 source(s) fetch-verified`, `4/4 source(s) resolved` (exit 0). No retrieval
failure occurred, so no retry allowance or `source_resolution` drop is used.
Every harvested row carries a disposition: included/inline with an item ID
(all resolve in the manifest), already-published with an item ID, deferred to
`kronecker-coefficients-and-internal-products` with a reason, or out-of-scope
with a reason (Macdonald Appendix A §6 polynomial functors; James §16
Lemmas 16.1–16.3 operator proof, deliberately not the route taken here).

## Mathematical verification performed in this dispatch

* **Closure check.** All 59 dependency targets of batch-8 items that are not
  themselves batch-8 items resolve to `items/<id>.md` with `status: published`;
  there are **zero cross-batch in-run dependency targets**, so the batch needs no
  cross-batch ledger rows and its `dependency_level` labels depend only on
  in-batch edges. `node tools/item-dependency-levels.mjs check --run …` recomputes
  every batch-8 label exactly (see check results below).
* **Independent recomputation of the B page.** A brute-force Littlewood–
  Richardson tableau enumerator (written for this dispatch, not reused from the
  manifest) reproduces: `c^λ_{(3,2),(2)}` = 1 for exactly
  (5,2),(4,3),(4,2,1),(3,3,1),(3,2,2) (James Ex. 14.5); `c^λ_{(2,1),(3,1)}` =
  1,1,1,2,1,1,1,1 for (5,2),(5,1,1),(4,3),(4,2,1),(4,1,1,1),(3,3,1),(3,2,2),
  (3,2,1,1) with dimension sum 210 = 35·2·3; the shape (4,2,1)/(2,1) has 3
  semistandard fillings of content (3,1) but 2 LR tableaux; and the skew
  expansions of s_{(3,1)/μ} used by `ex-restriction-coproduct-for-s-three-one`.
* **Primary-source confirmation of the main route.** The Littlewood–Robinson
  statement used by `thm-littlewood-richardson-schur-product-expansion` — (9.3)
  |Tab(λ−μ,π)| = ⟨s_{λ/μ},h_π⟩, (9.4) the bijection
  Tab(λ−μ,π) ↔ ⊔_ν (Tab°(λ−μ,ν) × Tab(ν,π)), and c^λ_{μν} = |Tab°(λ−μ,ν)| —
  was read in the fetched Macdonald full text and matches the manifest's route
  (a)–(f) step for step.
* **Convention audit.** The induction items were checked against the library's
  published covariant-function model (`f(gh)=h^{-1}·f(g)`,
  `(x·f)(g)=f(x^{-1}g)`) and the published conjugate representation
  (`(shs^{-1})·w=h·w`); the LR items against the published reading-word
  convention (right-to-left, top-to-bottom) and the published RL-8 coefficient.
  Six scaffold repairs were applied (below).
* **Caveats recorded for Step 3 (not blockers).** (1) The cocommutativity
  sentence of `def-restriction-coproduct-on-the-graded-symmetric-group-character-ring`
  is repaired inline in Step 3b using explicit block-swap conjugacy; the standard ordered blocks are conjugate, not necessarily equal (the Definition has no proof section). (2) The two-alphabet identity
  s_λ(x,y)=Σ_{μ⊆λ}s_μ(x)s_{λ/μ}(y) in
  `thm-outer-induction-and-restriction-form-a-graded-hopf-algebra` must be
  proved inside the item by grouping boxes, not cited. (3) The
  `justified_by` edge of `def-skew-multiplicity-module-over-c` points at the
  decomposition theorem that depends on it (depcheck's forward-well-definedness
  pattern); the definition's own well-definedness argument is the commuting of
  the S_m- and S_r-actions inside S_m×S_r.

## Scaffold repairs applied to the manifest

1. `lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation`:
   the strategy's two convention computations were written for the opposite
   action convention. Corrected to the library's: covariance gives
   Φ(f)(xk)=k^{-1}·Φ(f)(x), and equivariance gives
   Φ(x_0·f)(x)=f(x_0^{-1}xs)=Φ(f)(x_0^{-1}x)=(x_0·Φ(f))(x); Ψ's membership in
   Ind_H^G W is now spelled out. Claim unchanged.
2. `thm-littlewood-richardson-schur-product-expansion`: step (b) gave the
   lattice tableau L the shape ν; corrected to shape λ−μ and content ν, with
   the recording tableau M of shape ν and content π.
3. `thm-outer-induction-and-restriction-form-a-graded-hopf-algebra`: the two
   wikilinks `[[GR §2.3]]` and `[[MAC §5 Ex. 25]]` resolved to nothing;
   replaced by plain citations (Grinberg–Reiner §2.3; Macdonald I §5 Example 25).
4. Same item: the Mackey paragraph mislabelled the intersection/induction
   subgroups; corrected to the four-block
   S_{a′}×S_{b′}×S_{a″}×S_{b″} with the two inductions
   Ind_{S_{a′}×S_{b′}}^{S_a} and Ind_{S_{a″}×S_{b″}}^{S_b}.
5. `def-restriction-coproduct-on-the-graded-symmetric-group-character-ring`: the
   cocommutativity assertion now states its reason (the two ordered block
   subgroups are conjugate by the explicit block-swap permutation).
6. `thm-skew-multiplicity-module-has-littlewood-richardson-specht-decomposition-over-c`:
   the strategy applied the commutative-ring tensor–hom adjunction over
   `C[S_m]⊗C[S_r]`, which is **not commutative**. Replaced by the legitimate
   `R = C` instance of the same theorem (plain `C`-linear currying) plus the
   explicit `S_m`/`S_r`-linearity bookkeeping and the factor flip, and the two
   suppliers the corrected route needs
   (`def-external-direct-product-of-groups`,
   `lem-character-ring-of-a-direct-product-is-the-tensor-product`) were added
   to the item's `deps` (both level 0, so the item stays level 3). The record
   for that item was refreshed afterwards, and so was the record for
   `def-skew-multiplicity-module-over-c`, whose `justified_by` edge reaches the
   changed theorem.

## Check results (actual, this dispatch)

| command | result |
|---|---|
| `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15` | exit 1; every reported error is `empty scaffold inventory` for the nine not-yet-scaffolded page pairs (batches 2, 4, 5, 6, 7, 10, 11, 13, 14). **Zero errors name a batch-8 item**; batch-8 labels recompute exactly. |
| `node tools/step1-decisions.mjs check --run …` (before recording) | `items: 144, ready: 0` — no batch had readiness records. |
| `node tools/step1-decisions.mjs check --run …` (after recording) | `items: 145, ready: 32` at the moment of recording, all 19 batch-8 items among them; no batch-8 item remains in `work`. The run stays open on the other batches' records, and other workers were recording concurrently (a later re-run showed 79 ready). |
| `node tools/manifest-deps.mjs research/frontier-43-…-batch-*.pages.json` | `144 item(s), 0 normalized, 0 error(s)`; batch-8 alone `19 item(s), 0 missing, 0 error(s)`. |
| `node tools/content-policy.mjs --manifest-only research/frontier-43-…-batch-*.pages.json` | `144 scoped item(s), 0 error(s), 0 warning(s)` — includes the retired `proved_here: false` / `external_refs` / `external_dependency` checks available at this boundary. |
| `node tools/coverage-checklist.mjs research/frontier-43-…-batch-8.coverage.json --require-destination` | 1 page, 27 harvested results, 0 errors, 1 warning: `coverage-low-yield` (9/27 rows carry `included`). Row census: 9 `included` + 9 `inline` (all folded into named manifest items and resolving), 6 `already-published` rows naming published suppliers, 1 `deferred` row with a resolvable destination, 2 `out-of-scope` rows with reasons. The warning counts only `included` rows (33% < 40% threshold); confirming those declines is the Step-2 Alpha's call. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-43-…-batch-8.coverage.json` | 4/4 fetch-verified, 4/4 resolved (stamps present; no drops needed). |
| `node tools/validate-plan.mjs --run frontier-43-complex-representation-15` | exit 2: `frontier gate selection: Empty frontier page divisors-riemann-roch-and-duality`. Whole-run failure caused by other batches' un-scaffolded pages; no batch-8 page or item is implicated. |
| `node tools/frontier-dependency-ledger.mjs refresh --run … --require-reviewed` | red on `Cross-batch review incomplete` (other batches have no input file yet). Batch 8's input exists, is a valid empty array, and appears in `reviewed_batches`; batch 8 declares no cross-batch edges, which is exactly the documented condition for an empty input. |
| `node tools/extcheck.mjs` / `depsource --run` | not run: both need manifest-scoped **item carriers**, which do not exist at the scaffold boundary; the engine defers these to the authoring stage (comment in `tools/autopilot/stages/mathlib.mts`). `url-liveness` and `source-backing` are engine-run gates writing run-level artifacts outside this dispatch's write scope; their inputs (the four stamps) are live and re-probed above. |

## Outcomes and unresolved findings

All 19 items were recorded `ready` with examined dependencies and evidence
(`node tools/step1-decisions.mjs record … --decision ready`), in dependency
order, after the repairs above: 15 A items and 4 B items; 0 escalations, 0
missing suppliers, 0 cycles. No AC use: every proof-bearing item states that
no choice principle is used, the first definition is stated over a commutative
ring with no field hypothesis, and the B-page items are finite computations;
the whole batch is choice-free. No published defect was identified in any
supplier consulted. No page approaches the 100-item cap (15 and 4 items).
Unresolved engine-level items owned elsewhere: the nine un-scaffolded batches
(their empty inventories keep the whole-run `item-dependency-levels` and
`validate-plan` gates red) and the still-missing cross-batch ledger inputs of
the other batches. Neither is a batch-8 finding. Step 3 authors should read the
three caveats above; nothing here is mathematical approval — Step 3 provides
that review.

End-state confirmation: re-running the engine's own scaffold-completeness
predicate against the current disk state, after the sixth repair and the two
refreshed records, reports **COMPLETE** for this batch (no dependency-cycle
errors, all 19 `step1Decision` records closed, every `dependency_level` equal
to the recomputed in-run level); the artifact set is the manifest, the coverage
file and the 19 readiness records, with no `.scaffold-incomplete` sentinel. No
other batch of this run declares any dependency on a batch-8 item or page.
