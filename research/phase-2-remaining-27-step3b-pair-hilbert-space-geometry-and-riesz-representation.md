# Step 3b — scaffold audit and authoring: `hilbert-space-geometry-and-riesz-representation`

Run `phase-2-remaining-27` · dispatch
`step3b-pair-hilbert-space-geometry-and-riesz-representation-0f9e93458b84c4ba`
· batch 1 · A page `hilbert-space-geometry-and-riesz-representation` (26 items),
B page `hilbert-space-geometry-and-riesz-representation-examples` (8 items).
Output artifact: `research/phase-2-remaining-27-batch-1.pages.json`.

## Disposition

All 34 assigned items are authored as `items/<id>.md` with complete local
arguments and their promised claims, and both A/B page files are written. Every
original item and page ID is preserved. One scaffold statement was tightened for
provability (item 8 below); nothing was dropped, reclassified or moved. All 34
item decisions were recorded with `accept`, confidence 1, exact examined
dependency IDs and item-specific evidence. The pair's Step 3a scope decision was
refreshed (see *Decision records*).

## Scaffold audit and local repairs

The Step-1 scaffold (statements, strategies, dependency arrays, axiom audits)
was audited item by item against the argument that could actually be written.
Aim: every numbered step must rest on a declared, resolvable supplier.

1. **Dependency arrays were incomplete for 31 of 34 items; repaired by adding
   the published prerequisites the written proofs actually use.** No added
   dependency is an in-run cross-batch item; every one is an existing published
   item. Examples: item 2 needed the modulus/absolute-value and
   square-monotonicity items; item 5 (Jordan–von Neumann) needed the density,
   Archimedean, modulus and square-root facts; item 13 needed the infimum,
   real-limit, metric-topology, reverse-triangle and parallelogram suppliers;
   item 19 needed the bounded-operator, operator-norm, subspace and
   orthogonality items; item 24 needed the bounded-operator item. The full
   added sets are visible as the current `deps` of the 34 item files and in the
   batch manifest, which was re-synchronised to the item files.
2. **Four scaffold dependencies were removed because the written proof does not
   use them**: `def-complex-conjugate-real-imaginary-part-and-modulus` from
   item 5 (superseded by `lem-complex-conjugation-and-modulus-laws`),
   `lem-inner-product-is-jointly-continuous` from item 11 (the proof uses
   Cauchy–Schwarz directly), `cor-inner-product-induces-a-norm` from item 4
   (only the pairing identities are used), and
   `cor-cauchy-schwarz-inequality-for-l-two` from the first B item (the real
   case is read as a restriction of the complex pairing).
3. **One statement repair, with evidence.**
   `thm-completion-of-an-inner-product-space-is-hilbert` was scaffolded as
   "a unique inner product extending the original one". As written that is
   false: with AC, take any non-identity linear extension `T` of the identity
   on the dense subspace `c_00` of `ell^2` (Hamel-basis extension); then
   `B(xi,eta)=<T xi, T eta>` is another inner product on the completion
   agreeing with the original pairing on `c_00`. The item and the manifest now
   state the provable form: unique **among inner products that extend the
   pairing and induce the completion norm**. The proof supplies existence and
   that qualified uniqueness. Confidence high; the repair is local and does not
   touch any other promised claim.
4. **Published-B-leaf constraint on the incompleteness counterexample**
   (`cex-an-inner-product-space-need-not-be-complete`): depcheck's
   `b-leaf-content` rule forbids depending on
   `ex-finite-sequences-c00-with-standard-norms`, which is published only on
   `normed-and-banach-spaces-examples`. The counterexample was rewritten to be
   self-contained and choice-free, matching its scaffold axiom audit: the
   truncations of `(1/(k+1))` are Cauchy by the convergent `p`-series and
   `convergent ⇒ Cauchy`; any finitely supported limit would force the limit
   coordinates to be `1/(k+1)` by Cauchy–Schwarz, a contradiction.
5. **Page convention repair.** The A page now carries `examples: []` (the
   published convention: the companion's items live on the companion page).
   Listing the companion's items on the A page produced a `page-cycle` between
   the pair; after the fix depcheck reports no cycle for this pair.
6. **Notation repair.** `\iota(` is rejected in scoped content by
   `content-policy`; the completion embedding in item 8 was renamed to
   `\kappa`.
7. **Prose repairs.** Two `prosecheck` `count-in-prose` warnings were removed
   by rewording (`def-hilbert-orthogonal-projection`, A-page summary).

No new item IDs were minted, no local lemma suppliers were added, no page was
merged or split, and no B item consumes an A-page-foreign B item.

## Dependencies, choice and well-definedness

- **Prerequisites.** Every dependency resolves to a published item or to an
  earlier item of this pair. There is no unmet prerequisite and no escalation.
- **Choice.** `AC_ω` is declared on the items that consume it: A8, A13–A24,
  B1–B4 and B8 carry it in their statements and proofs; A6 records the
  Cauchy-completeness versus `σ`-completeness distinction without importing the
  stronger notion. The elementary pairing items (A1–A5, A9–A12) and the
  counterexamples B5–B7 are choice-free; B5 in particular now uses no
  completeness theorem. Full AC occurs only in the orientation remark A25, as
  the hypothesis of the published concrete `L^2` projection it identifies with
  the abstract one; A26 records only the inherited `AC_ω` cost. No item uses
  Hahn–Banach, and `extcheck` reports no recorded-not-proved dependency for this
  pair.
- **Well-definedness.** The completion pairing is defined by limits of pairings
  and shown representative-independent (A8); the projection is defined by the
  unique orthogonal decomposition (A16); the Riesz vector is unique (A19); the
  `L^2` pairings are class-independent by the published complex theorem and its
  real restriction (B1); the kernel operator is representative-independent
  (B8).

## Checks actually run

| check | result |
|---|---|
| `precheck.mts` on the 34 explicit item paths | 26 proof-bearing items checked, 0 failing |
| `rendercheck.mjs` on the 34 items and the 2 page files | 36 files OK — no wikilink in math, no nested/unbalanced delimiters, all KaTeX spans parse |
| `content-policy.mjs` on a pair-scoped manifest | 34 items, 0 errors, 0 warnings |
| `content-policy.mjs` on the shared batch manifest | 30 `scope-item-missing` errors, all for the sibling pair's not-yet-authored items; none for this pair |
| `proof-contract.mjs --strict --items <34 ids>` on `…-batch-1.proof-contracts.json` | 0 errors, 0 warnings, 34/34 checked |
| `manifest-deps.mjs` on the batch manifest | 63 items, 0 errors |
| `coverage-checklist.mjs` on the batch coverage | 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | exit 0 — acyclic, no forward references, no B-page item dependencies, no unresolved ids |
| `depcheck.mjs` | this pair clean; repo-wide it reports 3 pre-existing errors in other files (`cor-zf-does-not-prove-urysohn-lemma`, `thm-dmc-implies-compact-hausdorff-baire`) |
| `extcheck.mjs` | no finding for this pair |
| `pathcheck.mjs` | 0 errors (warnings are other categories) |
| `prosecheck.mjs` on the 36 files | 0 errors, 0 warnings |
| `frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed; the pair declares no cross-batch edge, so `…-batch-1.cross-batch-dependencies.json` stays `[]` |

## Published concerns (for the canonical ledger and owner awareness)

- **C1 — published ownership overlap (observation, not a defect).** Items A1–A5
  develop inner-product algebra that also exists, published, on
  `library/linear-algebra/inner-product-spaces-and-orthogonality.md`
  (`def-inner-product-norm`,
  `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
  `cor-triangle-inequality-for-inner-product-norm`,
  `prop-pythagorean-parallelogram-and-polarisation-identities`). The FA-13
  design deliberately develops this material locally, and the new items do not
  consume the published counterparts. This is a canonical-duplication question
  for Step 4 (alias or compatibility), not a proof defect. Confidence: high
  that both statements are sound; the overlap is a matter of record.
- **C2 — overlaps already recorded by the Step 3a review, reconfirmed.**
  `thm-hilbert-spaces-are-reflexive-by-riesz-representation` (published,
  assumes countable choice, home `banach-valued-integration-and-the-radon-nikodym-property`)
  proves Riesz representation plus reflexivity in aggregate and overlaps the new
  items 19–20; the new items do not consume it.
  `lem-closed-l-two-subspaces-have-orthogonal-projections` (published, assumes
  AC) is identified with the abstract projection only in the orientation remark
  A25. `def-orthogonal-projection` (published, finite-dimensional) is not
  reused; the owner-directed ID `def-hilbert-orthogonal-projection` is used and
  item 16 records agreement with the finite-dimensional construction.
- **C3 — structural boundary (not a defect).**
  `ex-finite-sequences-c00-with-standard-norms` is published only on a B page,
  so `depcheck` bars every other item from depending on it; its content (the
  `c_00` completions) is therefore unavailable to A-page consumers. If a later
  page needs it, an A-home reconciliation is required.
- No confirmed defective published item was found inside this pair's dependency
  closure.

## Plan/prose amendments for Step 4 (serial reconciliation)

1. The tightened statement of `thm-completion-of-an-inner-product-space-is-hilbert`
   is recorded in the batch manifest and the item; splice it into any plan/prose
   carrier that still states the unqualified uniqueness claim.
2. Batch-1 item dependency arrays for this pair now equal the authored item
   files. `research/plan-spec.json` carries empty item arrays for both pages, so
   no plan-spec item splice is needed from this dispatch.
3. Page-level `requires` are unchanged:
   `hilbert-space-geometry-and-riesz-representation` requires
   `banach-valued-integration-and-the-radon-nikodym-property`, and the B page
   requires its A companion.
4. The A page's `examples:` list is intentionally empty, matching published page
   files; the B page carries the eight companion items.

## Decision records

- Scope: the Step 3a review receipt
  (`…-step3a-review-hilbert-space-geometry-and-riesz-representation.json`,
  decision `sufficient`, sha256 `8d1ac0a7…614f1bc8`, recorded 2026-09-16T14:52:20Z)
  was superseded because the local repair changed the pair's scope hash. A fresh
  `sufficient` decision was recorded with the repair evidence (new sha256
  `1e3d12ad…16b9a`); inventory and boundaries are unchanged at A26/B8.
- Items: 34 × `record-item --decision accept --confidence 1` with the exact
  examined dependency IDs and per-item evidence, written after the complete
  item, contract and gate checks above.

## Handoff

- **Completed IDs.** A: `def-real-and-complex-inner-product-space`,
  `thm-cauchy-schwarz-in-an-inner-product-space`,
  `cor-inner-product-induces-a-norm`, `thm-parallelogram-law`,
  `thm-jordan-von-neumann-polarization`, `def-hilbert-space`,
  `lem-inner-product-is-jointly-continuous`,
  `thm-completion-of-an-inner-product-space-is-hilbert`,
  `def-orthogonality-and-orthogonal-complement`,
  `lem-pythagorean-theorem-and-finite-orthogonal-sums`,
  `lem-orthogonal-complement-is-closed`,
  `lem-minimizing-sequence-in-a-closed-convex-set-is-cauchy`,
  `thm-projection-onto-a-nonempty-closed-convex-set`,
  `thm-hilbert-projection-variational-characterization`,
  `thm-orthogonal-decomposition-by-a-closed-subspace`,
  `def-hilbert-orthogonal-projection`,
  `lem-orthogonal-projection-is-linear-self-adjoint-contractive`,
  `thm-double-orthogonal-complement-is-closure`,
  `thm-riesz-representation-for-hilbert-space`,
  `cor-hilbert-spaces-are-reflexive`, `def-hilbert-space-adjoint`,
  `thm-hilbert-adjoint-properties`,
  `def-self-adjoint-positive-unitary-and-normal-operator`,
  `lem-kernel-range-orthogonality-for-hilbert-adjoints`,
  `rem-l2-projection-agreement`, `rem-lax-milgram-owned-by-pde`.
  B: `ex-standard-inner-products-on-kn-ell-two-and-l-two`,
  `ex-projection-onto-a-finite-dimensional-subspace-by-a-gram-matrix`,
  `ex-projection-onto-constants-is-the-mean`, `ex-distance-to-a-closed-subspace`,
  `cex-an-inner-product-space-need-not-be-complete`,
  `cex-a-norm-need-not-satisfy-the-parallelogram-law`,
  `cex-nearest-point-map-to-a-convex-set-need-not-be-linear`,
  `ex-adjoints-of-shifts-multiplication-and-integral-operators`.
- **Checks run:** precheck, rendercheck, scoped content-policy,
  strict proof-contract, manifest-deps, coverage-checklist, validate-plan,
  depcheck, extcheck, pathcheck, prosecheck, frontier-ledger refresh.
- **Local suppliers added:** none.
- **Open obligations:** none for this pair. The sibling pair in batch 1
  (`orthonormal-bases-parseval-and-fourier-series` and its examples) remains
  unauthored in the shared manifest; it is outside this dispatch and was left
  untouched.
