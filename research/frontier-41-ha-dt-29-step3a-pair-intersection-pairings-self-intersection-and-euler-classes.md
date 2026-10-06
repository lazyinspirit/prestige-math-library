# Step 3a scope review — pair `intersection-pairings-self-intersection-and-euler-classes`

- Run: `frontier-41-ha-dt-29`, batch 2 (the batch holds only this pair).
- A page: `intersection-pairings-self-intersection-and-euler-classes` (order 531); B page: `...-examples` (order 532); category differential-topology.
- Pair inventory: 21 items — 17 A + 4 B; all 21 step-1 readiness records `ready`.
- Decision recorded with `tools/step3-decisions.mjs record-scope`: **`sufficient`** (review-of-record for the A page, covering the pair). No scaffold, item, or owner record was edited.

## Inputs read

- Manifest `research/frontier-41-ha-dt-29-batch-2.pages.json`; coverage `research/frontier-41-ha-dt-29-batch-2.coverage.json`; scaffold notes `research/frontier-41-ha-dt-29-batch-2.notes.md`.
- Prose design: `research/plan-differential-topology-track.md` DT-12 (L762–L800) plus §12.1–12.4 (the reorder table and the exact `requires` array at L2230-region) and the §9.2 harvest table rows H051–H070.
- Plan: `research/plan-spec.json` entries for orders 531/532 (canonical `requires` arrays).
- Owner direction: `research/frontier-41-ha-dt-29-owner-authoring-direction.md` (inherits the published predecessor pairs and external suppliers; no pair-local instruction). No pair-specific owner decision exists in the run namespace.
- Dependency records: `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` and `research/frontier-41-ha-dt-29-batch-2.cross-batch-dependencies.json` (empty: no cross-batch inputs of this pair); the 21 `...-step1-<id>.json` readiness records.

## Design vs scaffold (scope, not proof)

Every DT-12 design item is present, and the three items the design's "Hard-proof closure" requires are added locally:

| Design DT-12 | Scaffold |
|---|---|
| A1 geometric pairing definition | `def-geometric-intersection-pairing-on-a-closed-oriented-manifold` |
| A2 descent through oriented cobordism | `lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles` |
| A3 geometric pairing = PD cup pairing | `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing` (states the identity in the AT cohomology-first/front-evaluation convention, oriented and over F₂) |
| A4 cap-product order remark | `rem-cap-product-order-awaits-the-at-sign-convention` |
| A5 self-intersection definition | `def-self-intersection-number-of-an-oriented-submanifold` |
| A6 push-off zeros = self-intersection points | `lem-normal-push-off-zeros-are-self-intersection-points` |
| A7 self-intersection = Euler number of normal bundle | `thm-self-intersection-is-the-euler-number-of-the-normal-bundle` |
| A8 normal bundle of diagonal ≅ TM | `lem-normal-bundle-of-the-diagonal-is-canonically-tm` |
| A9 diagonal self-intersection = ⟨e(TM),[M]⟩ | `cor-diagonal-self-intersection-is-the-euler-number-of-tm` |
| A10 zero locus represents the Euler dual | `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual` (moved ahead of its consumers) |
| A11 nowhere-zero section forces vanishing | `cor-nowhere-zero-section-forces-the-euler-class-to-vanish` (geometric consequences; cites the published class-level proposition) |
| A12 mod-two self-intersection = top SW evaluation | `prop-mod-two-self-intersection-needs-no-orientation` |
| A13 Euler construction owned by AT | `rem-euler-class-construction-remains-owned-by-at` |
| A14 representability caveat | `rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally` |
| added closure | `lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold`, `lem-normal-bundle-of-the-zero-locus-of-a-transverse-section`, `lem-pullback-of-the-thom-class-along-a-transverse-section` |
| B1 zero-section example | `ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle` |
| B2 diagonal of S² | `ex-diagonal-in-the-two-sphere-has-self-intersection-two` |
| B3 torus / factor order | `ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus` |
| B4 Möbius core circle | `cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection` |
| B5 vanishing-Euler converse counterexample | design item recorded `already-published` as `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section` (verified `status: published`; the design's "higher obstruction" example). §12.1 forbids depending on a B-page item, so not re-scaffolding is correct. |

The three added items are the design's own "Hard-proof closure" made local: the design's dual-of-a-submanifold interface is published only on the later DT-16 page `thom-spaces-normal-data-and-collapse-maps` (order 547), which would be a forward reading-order dependency; the scaffold proves the tubular form here instead. Confirmed no scaffold item cites the DT-16 item (`grep` count 0). No design item was dropped or narrowed; the A page is a superset of the design inventory.

## Source coverage

- Both pages list the same four full-text sources (Cohen *Bundles, Manifolds, and Homotopy* bookR4, Guillemin–Pollack, Stanford Math 215B notes, Milnor–Stasheff), all fetch-verified, with the dead design URL `bookR3.pdf` recovered to the live `bookR4.pdf` and the renumbering recorded item-by-item.
- 35 harvested results with dispositions (`included`/`inline`/`already-published`/`deferred`/`out-of-scope`); every `included` and `already-published` target id exists on disk, and the four items per batch-2 source cover definitions, theorems, examples and caveats matching DT-12's subject.
- Independent spot check (this session): I downloaded the Guillemin–Pollack PDF and read the DT-12 region — printed p. 112 gives the ordered factor convention ("the orientation of X and Z (in that order!)"), p. 115 gives `I(f,g) = (−1)^{(dim X)(dim Y)}I(g,f)` and the Möbius central-circle mod-2 nonvanishing, matching the coverage locators. GP Ch. 3 §4 (pp. 119–132) is Lefschetz fixed-point theory, owned by DT-14 (design L848, batch 8), so its absence from this pair's harvest matches the design split.
- Deferrals resolve for the load-bearing results: Cohen Thm 9.12 and the GP `I(Δ,Δ)=χ(M)` exercise → in-run batch 7 `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic`; Cohen Thm 9.13 (diagonal expansion) → in-run batch 8 `lem-diagonal-class-expansion-gives-the-alternating-trace`. Custody note (non-blocking): Cohen Thm 9.7 (de Rham/Thom-form interpretation) is deferred to the published `the-de-rham-theorem-and-degree` (order 475), which does not currently carry such a result; the approved DT-12 item list contains no de Rham item and the pair states the singular-cohomology identity, so this is an ownership record, not an omission of this pair.

## Prerequisites

- The A page's eight `requires` pages are all published: `oriented-and-mod-two-intersection-numbers` (529), `smooth-vector-bundles-and-sections`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `manifolds-with-boundary-collars-and-orientations`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `stiefel-whitney-and-euler-classes-by-universal-constructions`. The B page requires exactly the A page.
- Independent resolution audit over all 21 items (statements, strategies and declared `deps`): 109 unique cited ids — 93 are published items on disk (all `status: published`) and 16 are draft items of this same pair; 0 unresolvable ids. A transitive closure over plan-spec `requires` (255 pages) shows 0 citations with a home page outside the closure, and 0 citations to items homed later than order 532 (no forward reading-order dependency).
- Consumer interfaces (cross-batch ledger) sampled: batch 7 (`cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic`, `prop-vector-field-zero-index-is-a-zero-section-intersection-number`), batch 8 (diagonal trace and Lefschetz–Hopf), batch 12 (`def-middle-dimensional-intersection-form`), batch 13 (surgery counterexamples/remark), batch 19 (double-point and disjunction items), batch 20 (Euler class controls self-intersection), batch 24 (disk-bundle Thom/self-intersection lemmas). Each required claim and hypothesis is supplied by an item here; the batch-24 use of `thm-self-intersection-is-the-euler-number-of-the-normal-bundle` for the zero section of a disk bundle is handled in the consumer's own strategy in the boundaryless interior, so no relative-boundary variant is owed by this pair.
- **No unmet prerequisite** was found absent from both the published library and the current scaffold (confirmed, not merely uncertain). Checks used: id resolution, published status of every published citation, home-page closure, and forward-order screening.

## Recorded caveats (not scope gaps; no owner action required)

1. `rem-not-every-homology-class-is-represented...` is an orientation remark (`proof: not-applicable`) whose external facts (Steenrod-operation non-representability over Z; Thom's mod-2 representability) have no in-library supplier and no consumer. It is design item 14 and is source-backed at the page level (Cohen's remark after Thm 9.5).
2. `cor-nowhere-zero-section-forces-the-euler-class-to-vanish`'s closing sentence ("the converse is false") carries no citation in its deps; its content is the published AT counterexample on a B page, which §12.1 does not allow as a dependency target. Authoring-level wording/citation note only.
3. `validate-plan.mjs`'s known `redundant-prereq` WARN for this A page (`smooth-vector-bundles-and-sections` also reached via DT-11) is plan-owned and recorded in the batch notes; the page uses the direct supplier.
4. Source-locator uncertainty already recorded by the batch: bookR4 numbering differs from the design register, and the Milnor–Stasheff OCR layer is noisy at section resolution. I re-verified only the Guillemin–Pollack locators directly on this pass.

## Checks actually run (this review)

- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-2.coverage.json --require-destination` → 2 pages, 35 harvested results, 0 errors, 0 warnings (exit 0).
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-2.pages.json` → 21 items, 0 normalized, 0 errors (exit 0).
- `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` → 883/883 items ready, closed.
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope` → this pair awaited a scope review; no prior scope receipt existed for it.
- Citation/closure audit script (this session): 109 cited ids, 0 unresolvable, 0 outside the 255-page closure, 0 forward.
- Guillemin–Pollack PDF read (printed pp. 107–118 region) for the factor-order conventions.

## Decision

`sufficient` — the planned definitions, results and examples adequately cover the intended subject: the geometric intersection pairing and its AT identification, cobordism descent, self-intersection via normal push-offs and the Euler number of the normal bundle (oriented and mod-2), the diagonal/e(TM) evaluation, zero-locus duality and nowhere-zero consequences, the AT ownership seam, the representability caveat, and the example set. No omitted topic or result relative to the approved DT-12 design, and no unmet prerequisite. Per step 3a this pair stops here: no scaffold edits, no owner record, and no change to any other pair.
