# Step 3b pair authoring — `deligne-products-and-categorical-eilenberg-watts` / `-examples`

- Run `frontier-41-ha-dt-29`, batch 28, role `alpha-high`, dispatch
  `step3b-pair-deligne-products-and-categorical-eilenberg-watts-c946bb1bfd05100f`
  (attempt 1 of the pair; attempt 0,
  `...-45129319ac76b5bc`, ended without a handoff and its artifacts were
  carried over).
- A page `deligne-products-and-categorical-eilenberg-watts` (order 925),
  B page `deligne-products-and-categorical-eilenberg-watts-examples` (order
  926), category `homological-algebra`. This dispatch owns only this pair;
  batch 28 contains exactly this pair, so there are no sibling rows in the
  shared batch files to preserve.
- Scope: Step-3a pair review
  `research/frontier-41-ha-dt-29-step3a-pair-deligne-products-and-categorical-eilenberg-watts.md`,
  decision `sufficient`, receipt
  `research/frontier-41-ha-dt-29-step3a-review-deligne-products-and-categorical-eilenberg-watts.json`.
  Statements and titles are frozen by that scope hash; every authored item
  copies its statement verbatim from
  `research/frontier-41-ha-dt-29-batch-28.pages.json`.
- Binding design: `research/plan-homological-algebra-track.md` HA-25–HA-29
  conventions (L5405–L5475), HA-28 P10–P12 (L5862–L6040), witnesses B4
  (L6195–L6215), binding item inventory (L6356–L6381); owner authoring
  direction `research/frontier-41-ha-dt-29-owner-authoring-direction.md`
  (L69–L73) binds the HA-25–HA-29 statements to the plan plus
  `research/eilenberg-watts-expansion/proposed-items.json` and requires normal
  authoring and proof review.

## Owned IDs (authoring order by dependency level; ties by page order and item ID)

| level | item | home | state |
|---|---|---|---|
| 0 | `lem-finite-vector-space-copowers-in-a-linear-abelian-category` | A | authored; accepted |
| 1 | `def-deligne-product-of-finite-linear-categories` | A | authored; accepted |
| 2 | `lem-bilinear-right-exact-functors-are-determined-by-the-pair-of-regular-modules` | A | authored; accepted |
| 4 | `thm-finite-deligne-products-exist-by-tensor-product-algebras` | A | authored; accepted |
| 5 | `lem-opposite-deligne-product-identifies-with-finite-bimodules` | A | authored; repaired then accepted |
| 5 | `ex-deligne-product-of-finite-vector-space-categories` | B | authored; accepted |
| 6 | `thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories` | A | authored; accepted |
| 6 | `cex-a-deligne-kernel-need-not-be-one-external-tensor-factor` | B | authored; accepted |
| 7 | `lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps` | A | authored; accepted |
| 8 | `cor-kernel-composition-and-transformations-use-balanced-tensor-products` | A | authored; accepted |
| 8 | `def-left-and-right-nakayama-functors-by-finite-kernel-calculus` | A | authored; accepted |
| 9 | `lem-nakayama-kernels-give-well-defined-adjoint-functors` | A | authored; repaired then accepted |
| 10 | `prop-left-to-right-exact-equivalence-sends-identity-to-nakayama` | A | authored in this session; accepted |
| 10 | `prop-projective-nakayama-pairing-and-symmetric-algebra-specialization` | A | authored in this session; accepted |
| 11 | `cex-left-to-right-exact-equivalence-need-not-preserve-the-identity` | B | authored in this session; accepted |
| 11 | `ex-kernel-end-and-coend-distinguish-regular-and-coregular-bimodules` | B | authored in this session; accepted |

All 16 items are original scaffold IDs (present in the batch-28 manifest and
the Step-3a review), so each received an ordinary current item decision.
Pages authored: `library/homological-algebra/deligne-products-and-categorical-eilenberg-watts.md`
and `library/homological-algebra/deligne-products-and-categorical-eilenberg-watts-examples.md`.
Proof contracts: `research/frontier-41-ha-dt-29-batch-28.proof-contracts.json`,
now 16/16 entries.

## Entry state carried over from the interrupted attempt

At entry of this session the pair had: 12 of the 16 item files on disk (all
authored by the interrupted attempt 0, with a partial contract file covering
11 of them), no page files, no item decisions, and a partial report whose
last checkpoint was item 6. The four items without files were the two level-10
propositions and the two level-11 B-page witnesses. The four missing items and
both pages were authored in this session; the 12 existing items were audited,
checked and repaired where needed rather than re-authored.

## Per-item checkpoints (this session)

- **Level 0–8 items (12 items)**: re-audited against the frozen statements and
  their suppliers; all pass precheck, rendercheck and proof-layout with zero
  defects. The only changes made in this session were the two repairs recorded
  below; the remaining ten items were accepted unchanged.
- **`lem-nakayama-kernels-give-well-defined-adjoint-functors` (level 9)**:
  the precheck required its proof's canonical layering, so the
  model-independence step was moved after the adjunction step, the six steps
  were renumbered to 1.1/2.1/3.1/3.2/4.1/5.1, and the internal references
  (`step 2.2` -> `step 3.1`, `step 2.3` -> `step 4.1`) were updated; the
  mathematics is unchanged. Its deps and the manifest entry were synchronised
  (the authored proof cites `cor-a-right-adjoint-preserves-ends-and-a-left-adjoint-preserves-coends`,
  `def-algebraic-dual-and-linear-functional`, `def-functor-and-contravariant-functor`,
  `def-k-linear-category-and-k-linear-functor`, `def-left-exact-and-right-exact-functor`,
  `lem-finite-vector-space-copowers-in-a-linear-abelian-category`,
  `thm-ends-and-coends-are-unique-up-to-unique-isomorphism` and
  `thm-every-equivalence-can-be-made-an-adjoint-equivalence`; all published).
  Checks: precheck PASS, rendercheck OK, proof-layout 0 defects, contract
  0 errors under `--strict`.
- **`lem-opposite-deligne-product-identifies-with-finite-bimodules` (level 5)**:
  depcheck found two `cited-not-in-deps` findings for the proof's parenthetical
  citations `def-functor-category` and `def-natural-transformation`; both were
  added to the item deps and to the manifest entry (published items), clearing
  the findings. Claim unchanged.
- **`prop-left-to-right-exact-equivalence-sends-identity-to-nakayama` (level
  10, authored here)**: proof in three steps — the composites of the triangle
  are quasi-inverse by conjugating the quasi-inverse isomorphisms; the
  definition evaluates the identity to the Nakayama functors, computed as
  `A^*⊗_A-` and `Hom_A(A^*,-)`; and a natural isomorphism of `Γ^{rl}` with the
  identity on the exact endofunctors would force `N^r ≅ 1`, so the failure is
  asserted exactly when `N^r` is not isomorphic to the identity (the witness
  is on the companion page). 4 facts; precheck PASS; contract with 10 exact
  citations, 3 derivations, 8 boundaries: 0 errors.
- **`prop-projective-nakayama-pairing-and-symmetric-algebra-specialization`
  (level 10, authored here)**: the pairing is proved by an explicit map
  `γ: A^*⊗_AP → Hom_A(P,A)^*`, `γ(λ⊗p)(f)=λ(f(p))`, which is well defined,
  left `A`-linear and bijective because its transpose corresponds to the
  identity under currying and double duality; the main isomorphism follows by
  dualising the dual-basis isomorphism `Hom_A(P,X) ≅ Hom_A(P,A)⊗_AX`,
  currying, and postcomposition with `γ`; the symmetric-algebra specialization
  is the conditional `A^* ≅ A ⇒ N^r ≅ N^l ≅ 1`. One local dep repair:
  `def-left-and-right-modules` added to the item deps and the manifest entry.
  Precheck PASS; contract with 14 citations, 4 derivations, 8 boundaries:
  0 errors.
- **`cex-left-to-right-exact-equivalence-need-not-preserve-the-identity`
  (level 11, authored here)**: for the upper triangular algebra `A_0` the
  module `A_0e_1` is one-dimensional, `A_0^*e_1 ≅ (e_1A_0)^*` is
  two-dimensional, `A_0^*⊗_{A_0}A_0e_1 ≅ A_0^*e_1`, so
  `dim_k N^r(A_0e_1) = 2 ≠ 1 = dim_k A_0e_1` and `N^r` is not naturally
  isomorphic to the identity; the companion proposition then gives the failed
  identity preservation. The algebra's well-definedness is verified through
  the upper triangular matrix model, and `A_0e_1` is verified to be
  projective. One local dep repair: `def-projective-module` added to the item
  deps and the manifest entry. Precheck PASS (after adopting the canonical
  step numbering); contract with 13 citations, 5 derivations, 8 boundaries:
  0 errors.
- **`ex-kernel-end-and-coend-distinguish-regular-and-coregular-bimodules`
  (level 11, authored here)**: applying the explicit (co)end lemma with
  `M = A` and `G = Φ^r(A) ≅ 1` gives the end `A`, and with `M = A^*` and
  `F = Φ^l(A^*) ≅ 1` gives the coend `A^*`; the two are distinguished for
  `A_0` by the dimension computation, so they correspond to the identity as an
  object of `Rex` and of `Lex` respectively. Precheck PASS (after adopting the
  canonical step numbering); contract with 10 citations, 6 derivations,
  8 boundaries: 0 errors.

## Supplier reconciliation (Step 3b)

- The three in-run supplier batches are now authored on disk and were read in
  full where used: batch 25 (`eilenberg-watts-theorem-and-natural-transformations`),
  batch 26 (`morita-bicategories-and-projective-generators`) — including
  `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism`,
  `lem-tensor-hom-adjunction-for-bimodules`, `def-morita-bicategory-of-rings-and-bimodules`,
  `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence`,
  `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` — and
  batch 27 (`finite-abelian-categories-and-eilenberg-watts`) — including
  `thm-finite-eilenberg-watts-for-right-exact-linear-functors` and
  `thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels`
  (the two suppliers flagged as unfinished in the attempt-0 report). Both were
  verified against their authored Statement sections: the first classifies
  right exact `k`-linear functors as `M⊗_A-` up to natural isomorphism with
  all natural transformations; the second classifies left exact functors as
  `Hom_A(M^*,-)` with quasi-inverse `F ↦ F(A^*)`. The uses recorded in
  `thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories`
  ([F1], [F2]; step 1.1) match, and the contract quotes for those citations
  validate under `proof-contract --strict` against the current files.
- The attempt-0 supplier flags are therefore resolved: no consumer decision
  needed to stay `escalate` for an unfinished supplier in this pair.
- The one batch-28 cross-batch edge that lacked a review row in the ledger
  (`thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories`
  ← `thm-finite-abelian-categories-are-finite-dimensional-module-categories`)
  was recorded `verified` in
  `research/frontier-41-ha-dt-29-batch-28.cross-batch-dependencies.json` with
  the exact statement reading and the consuming step (1.1 / [F4]); the input
  now has 19 rows.

## Repairs, additions, and manifest sync

- Repaired in this session: the step-order/labelling repair of
  `lem-nakayama-kernels-give-well-defined-adjoint-functors`; the two
  citation/dep repairs of `lem-opposite-deligne-product-identifies-with-finite-bimodules`;
  and the dep additions `def-left-and-right-modules` (prop-projective) and
  `def-projective-module` (cex-left-to-right). Every manifest entry was
  synchronised (the manifest for `lem-nakayama-kernels-...` had also been left
  stale by attempt 0 and was brought to the item's 23-item dep list).
- No new supplier items were created: the design's complete local closure
  fitted within the binding inventory, and every dependency resolves to a
  published item or an authored in-run item of batches 25–27 or this pair.
- No item or page outside this pair was edited; shared batch files contain only
  this pair's rows.

## Checks actually run (final state)

| Check | Command | Actual result |
|---|---|---|
| Explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts <16 item paths>` | 14 checked (2 definitions n/a), 0 failing |
| Explicit-path rendering | `node tools/rendercheck.mjs <16 item paths>` | OK — YAML and KaTeX parse, no link-in-math, no multiline display |
| Proof layout | `node tools/proof-layout.mjs <16 item paths>` (one batched call) | 16 items, 66 steps, 0 defects |
| Content policy | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-28.pages.json` | 16 scoped items, 0 errors, 0 warnings |
| Strict proof contracts | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-28.proof-contracts.json --strict` | 0 errors, 0 warnings, 16/16 items |
| Dependency check (pair scope) | `node tools/depcheck.mjs --items-file <16 ids>` | 0 findings involving this pair (the global run's remaining failures belong to other batches) |
| Forward refs (pair scope) | `node tools/fwdcheck.mjs --items-file <16 ids>` | OK — no undeclared forward reference; global closure OK |
| Recorded results (pair scope) | `node tools/extcheck.mjs --items-file <16 ids>` | OK — no Recorded or unproved dependency on this pair's paths |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | 0 rows for this pair (its 11 errors are other batches' stale labels) |
| Plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 — page order acyclic and consistent, no item-level cycles or B-page dependencies |
| Manifest dependencies | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-28.pages.json` | 16 items, 0 errors |
| Manifest integrity | `node tools/manifest-integrity.mjs --run frontier-41-ha-dt-29` | 62 pages owed, 62 in the manifests, no scope drift |
| Coverage checklist | `node tools/coverage-checklist.mjs --require-destination research/frontier-41-ha-dt-29-batch-28.coverage.json` | 1 page, 31 rows, 0 errors, 0 warnings |
| Item decisions | `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` | 0 work rows for this pair; all 16 items closed with current receipts |
| Pages rendering | `node tools/rendercheck.mjs` on the two new page files | OK |

## Published concerns and findings for others

1. **Pre-splice plan mismatch (expected; Step 4 action).**
   `splice-plan --verify` reports for orders 925/926: manifest 12 vs plan 0 and
   manifest 4 vs plan 0 item lists — `research/plan-spec.json` still carries
   `items: []` for both pages, as planned. Step 4 inserts the item lists.
2. **Step-3a declaration finding, re-checked.** The Step-3a review noted that
   the A page's `requires` does not name the in-run supplier pages
   `eilenberg-watts-theorem-and-natural-transformations` (batch 25) and
   `morita-bicategories-and-projective-generators` (batch 26). Those pages are
   now built, so `splice-plan --verify` no longer reports undeclared-prerequisite
   findings for this pair, but the `requires` lists still omit the two pages
   (they name only `finite-abelian-categories-and-eilenberg-watts`,
   `ends-coends-and-weighted-limits` and `enriched-categories`). Step 4 should
   decide whether to add the two pages to `requires` in the plan and manifest.
3. **Unified ledger refresh is blocked by another batch's input.**
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`
   fails with `research/frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json:
   invalid review or consumer ownership`. Nineteen of the twenty-three rows in
   that file name item consumers that are not homed in batch 19's manifest
   (for example `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy`,
   `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range`,
   `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one`);
   the owning writer must move or repair those rows before the ledger can
   merge. This is outside this pair's scope; this pair's own input has been
   updated, and the refresh must be re-run by the serial reconciler after
   batch 19 is fixed.
4. **Unrelated debt observed, not this pair's.** The global `depcheck` run
   reports `b-leaf-content` findings for the smooth-h-cobordism pair and
   `justification-backward` findings for `def-godbillon-vey-class` and
   `def-limitwise-nullhomotopy-subgroup-of-a-leaf`; the dependency-level check
   reports eleven stale `dependency_level` labels, ten of them in the Morita
   pair (batch 26, a supplier of this pair — for example
   `lem-tensoring-defines-a-pseudofunctor-with-interchange` declared 3 vs
   computed 4) and one in the h-cobordism pair. This pair's items and labels
   are clean; the sibling owners must repair theirs.

## Open obligations at handoff

1. Re-run `frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`
   once batch 19's input file is repaired; this pair's 19 input rows and the
   unified ledger's `reviewed_batches` entry for batch 28 are in place.
2. If any supplier batch (25, 26 or 27) is reworked later, the Step-3b item
   receipts for this pair become stale and must be re-recorded by an authorized
   writer; the receipts were recorded at 2026-10-05T15:29Z against the current
   supplier files.
3. Step 4 owns the two declaration items in §"Published concerns" 1–2.

All 16 assigned item files exist, both pages exist, the batch proof-contract
file covers all 16 items, and every required Step-3 format, rendering, content,
dependency, level and contract check passes on the final state. No supplier
use remains unreconciled, and no decision is left escalated.
