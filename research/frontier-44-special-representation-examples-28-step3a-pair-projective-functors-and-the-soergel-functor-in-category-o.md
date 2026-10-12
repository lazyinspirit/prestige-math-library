# Step 3a scope review — Projective functors and the Soergel functor in category O

- Run: `frontier-44-special-representation-examples-28`, role `alpha`, label
  `step3a-pair-projective-functors-and-the-soergel-functor-in-category-o-5c48745e01d9f33b`, batch 13.
- Pair: A `projective-functors-and-the-soergel-functor-in-category-o` (order 1782, 25 items) /
  B `projective-functors-and-the-soergel-functor-in-category-o-examples` (order 1783, 4 items).
- Review type: scope only; no proof approval, no scaffold edit, no owner record.
- **Decision: `insufficient` — the planned KL-3 B-companion examples are not delivered; enrich B
  (no pair merger).** Receipt:
  `research/frontier-44-special-representation-examples-28-step3a-review-projective-functors-and-the-soergel-functor-in-category-o.json`.

## 1. Inputs read

- Manifests/coverage: `…-batch-13.pages.json` (both pages, all 29 items: ids, kinds, statements,
  strategies, deps), `…-batch-13.coverage.json`, `…-batch-13.cross-batch-dependencies.json`,
  `…-batch-13.notes.md`; `…-plan-spec.json` rows 1782/1783 (page fields match the manifest; both
  `items` arrays empty, so the design document governs item scope); `…-scope-ledger.json` (both
  pages owed); `…-frontier-gate-pages.json` (pair present).
- Design/prose: `research/plan-kazhdan-lusztig-track.md` line 36 (KL-3 role: "coinvariant algebra,
  wall crossing, Struktursatz"), lines 110–148 (KL-3 A table, 25 rows), line 148 (B companion),
  lines 358–363 (the plan's own KL-3 B-companion inventory, four example ids).
- Owner direction: `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
  (Category O order/prerequisite decisions), `…-owner-category-o-proof-closure-review.json`,
  `…-owner-category-o-stable-guard-proposal.json`, the three owner proof notes
  (`…-owner-category-o-local-projectives-proof.md`, `-central-order-proof.md`, `-dictionary-proof.md`).
- Readiness/consumers: the 29 Step-1 records (four B records `ready`; readiness is not scope
  approval); `…-batch-14.cross-batch-dependencies.json` (KL-4 consumes this page).
- Checks run: `node tools/manifest-deps.mjs …-batch-13.pages.json` → 29 items, 0 errors; an
  independent Python resolution sweep of every direct dep and of the full transitive closure.

## 2. Design ∶ scaffold mapping (scope only)

**A page — complete.** All 25 rows of the current KL-3 design table (plan lines 110–148) are present
verbatim, in design order, with matching ids and kinds, including the four local algebraic
suppliers added during the owner's 2026-10-09 repairs (`lem-the-basic-weyl-invariant-degree-sum-…`,
`lem-kostant-adjoint-isotypic-…`, `lem-the-nilpotent-central-fiber-…`,
`thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules`). The deleted/renamed design rows
(`thm-projective-functors-are-generated-by-wall-crossing`,
`def-the-antidominant-projective-and-soergel-functor`) were reconciled in the plan itself, so plan
and manifest now agree. The A page is a leaf-only pair's supplier: its consumer interfaces
(inverse labels `P_w ↦ B̄_{w^{-1}}`, pre-reduction standard ranks, right-wall composition order)
are recorded for KL-4.

**B page — two planned examples omitted and replaced.** The plan's KL-3 B inventory (lines 358–363)
lists four items; the manifest carries four items, of which two do not match and two new ones
appear:

| plan (L360–363) | manifest |
|---|---|
| `ex-the-type-a-two-coinvariant-algebra` | `ex-the-coinvariant-algebra-of-s-two-and-s-three-as-graded-regular-representations` — acceptable superset (S₂ and S₃) |
| `ex-wall-crossing-on-projectives-in-the-sl-two-block` | `ex-the-wall-crossing-functor-on-verma-modules-in-rank-one` — recast onto standard modules; it ends at the projective $P(-2)$ but does not apply wall-crossing to a projective object |
| `ex-the-soergel-functor-on-a-small-regular-block` | **absent** |
| `cex-soergel-full-faithfulness-does-not-hold-on-all-category-o-objects` | **absent** |
| — | `ex-the-class-map-and-wall-crossing-action-on-the-grothendieck-group-in-rank-two` (unplanned) |
| — | `cex-wall-crossing-functors-do-not-commute` (unplanned) |

## 3. Exact omission

The two missing planned examples are precisely the ones that would exercise the page's second
headline object. No B item computes $V=\operatorname{Hom}(P_{\text{antidom}},-)$, the
Endomorphismensatz, the Struktursatz, the $P_w \leftrightarrow$ reduced-Soergel-module dictionary, or
the Verma-multiplicity/standard-rank comparison — the plan's own one-line role for KL-3 includes
"Struktursatz" (line 36). The built B items cover coinvariants, rank-one wall crossing, the rank-two
$K_0$ class map and non-commutativity of wall crossing; none of their dependency lists or statements
touches $V$.

Evidence for absence:

- The two planned ids are not scaffolded in **any** batch of the run (checked across all
  `…-batch-*.pages.json`), so they are absent from both the published library and the current
  scaffold.
- The B page's coverage file has no row for either subject; its only decline is McDonnell,
  *Gradings and Soergel* Ch. II §§2–3 ("graded-cover computations for $O_0(\mathfrak{sl}_2)$"),
  marked out-of-scope "left unbuilt" — a related but different object.
- `…-batch-13.notes.md` line 51 asserts "the design names only the page"; that is incorrect — the
  same plan document lists the four KL-3 example ids (lines 358–363), and the current plan still
  carries them.

This is a scope-completeness finding, not a proof error: the four built B items' statements and
sources look sound at scope level, and B pages are dependency leaves, so no KL-4 consumer is
blocked by the omission.

## 4. Source coverage and prerequisite audit

- **Coverage.** A page: 10 fetch-verified sources (Soergel JAMS 1990/MPIM preprint 1989/46 complete
  German text, Soergel 1992, Soergel 1989 OCR'd, Garnier, Brundan, BG 1980, McDonnell, Etingof,
  Fiebig, MIT 18.757) with 51 `included`, 12 `inline`, 8 reasoned `out-of-scope`, 1 owner-deferred
  row; every `included` row maps to an existing item; no source drop. B page: 3 sources, 5
  `included`, 1 `inline`, 1 `out-of-scope`; the unbuilt examples have no source rows, consistent
  with the omission.
- **Unmet prerequisites (confirmed gaps: none).** All 29 items' direct dependencies resolve to
  published on-disk items (90 edges) or current run scaffolds (26 edges); the full transitive
  closure is 139 ids with **0** unresolved, 0 planned-only, 0 absent. The 7 `open` cross-batch rows
  (1 page + 6 item) point at in-run suppliers on batches 12–13 (e.g.
  `def-reduced-soergel-module-and-dominant-lefschetz-operator`,
  `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`,
  `def-invariant-intersection-form-on-a-bott-samelson-bimodule`) that exist in the current scaffold
  with batch 12 ordered before batch 13 — supplier-before-consumer is respected.
- **Historical escalation (uncertainty, not a confirmed gap).** The eight previously escalated
  items formerly required the external universal-family structure theorem ([So1, §1.2 with Cor. 8]
  = [Soe90, Prop. 2(a)]) plus the specialized-Kostant input of [Soe90, Prop. 2(b)]; neither was
  ever a library item. The current strategies replace those inputs by the four added local items
  and local lifting/base-change arguments, and the owner records "no remaining proof-strategy
  obstruction among 29 subjects" (notes §10–11; `…-proof-closure-review.json`,
  `missing_results: []`). I checked scope interfaces and dependency resolution only; I did not
  re-prove these strategies, and the closures rest on owner-local proof notes, not independent
  audits. If a strategy fails in Step 3/Step 5, a new within-pair supplier will be required — that
  is recorded here as residual uncertainty, not as a present omission.

## 5. Recommended owner action

1. **Enrich** the B page `projective-functors-and-the-soergel-functor-in-category-o-examples` with
   the two planned diagnostic examples — `ex-the-soergel-functor-on-a-small-regular-block` (compute
   $V$ and the coinvariant-module structure on the small regular block, including the
   $P_w \leftrightarrow$ reduced-module labels in rank one) and
   `cex-soergel-full-faithfulness-does-not-hold-on-all-category-o-objects` (a boundary witness for
   the "on projectives" hypothesis of the Struktursatz) — or record an explicit owner design
   amendment accepting equivalent substitutes; refresh the B coverage/source rows for whatever is
   added.
2. Optionally reconcile the second recast item: the plan asks for wall-crossing on projectives;
   the current rank-one item works on standards. A one-line plan amendment or one added
   projective-side computation resolves it.
3. **No pair merger** is indicated: the pair identities, order and companion structure are correct,
   and the A page is fully scoped. KL-4's consumer needs are unaffected.

Owner authority: pending this decision the pair stays blocked for `proceed`/`merge`/`enrich`; no
scaffold was edited by this review.

## 6. Boundaries and uncertainty

- Scope review only. I did not verify proof correctness, source reading beyond the recorded
  coverage/locator audit trail, or item readiness registrations.
- Same-pattern observation for the owner (not part of this decision): the plan's KL-2 B list also
  differs from the batch-12 B inventory; KL-4–KL-8 B lists match their manifests.
- Residual uncertainty: whether the two omitted examples were deliberately substituted by the
  owner is not recorded anywhere I found (no owner decision references the two new B ids in a
  scope/design sense; the batch notes' "design names only the page" claim is factually wrong), so
  the mismatch is reported rather than assumed benign.
