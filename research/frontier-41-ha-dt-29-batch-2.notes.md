# frontier-41-ha-dt-29 — batch 2 scaffold notes (DT-12)

Pair: `intersection-pairings-self-intersection-and-euler-classes` / `-examples`
(orders 531/532, differential-topology). Output manifest
`research/frontier-41-ha-dt-29-batch-2.pages.json`, coverage
`research/frontier-41-ha-dt-29-batch-2.coverage.json`, and 21 item-readiness
records `research/frontier-41-ha-dt-29-step1-<id>.json`.

## Direction, plan and design

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`research/frontier-41-ha-dt-29-owner-authoring-direction.md` (binding: it
inherits the published predecessor pairs and external supplier pages and does
not add a local instruction for this pair), the design section
`research/plan-differential-topology-track.md` L762–L800 (DT-12), the whole of
§12 there (binding dependency audit), and the canonical `requires` array in
`research/plan-spec.json` for order 531. The plan's array is
`oriented-and-mod-two-intersection-numbers`; `smooth-vector-bundles-and-sections`;
`whitney-embedding-tubular-neighbourhoods-and-approximation`;
`manifolds-with-boundary-collars-and-orientations`;
`cup-cap-cross-products-and-cohomology-rings`;
`orientations-poincare-lefschetz-and-alexander-duality`;
`leray-hirsch-thom-isomorphism-and-gysin-sequences`;
`stiefel-whitney-and-euler-classes-by-universal-constructions`, and the batch
task reproduces it exactly. Every one of those pages is published, as are the
extra AT pages named only by the design section (`singular-cohomology-and-coefficient-theorems`,
`chern-and-pontryagin-classes-by-splitting-and-complexification`).

### Design-vs-plan conflicts (recorded, plan controls)

1. **Requires list.** The design's `Sources`/`Requires` line also names
   `chern-and-pontryagin-classes-by-splitting-and-complexification` and
   `singular-cohomology-and-coefficient-theorems`; the plan's exact array omits
   them. The step-1a drift review already ruled that no listed DT-12 claim uses
   Chern or Pontryagin classes; no item on this page depends on the Chern page.
   Singular-cohomology items are reached transitively through
   `cup-cap-cross-products-and-cohomology-rings` and
   `orientations-poincare-lefschetz-and-alexander-duality`, which are in the
   plan array, and explicit item dependencies on that page are within its
   closure.
2. **Item inventory conflicts with the published corpus.** The design's A item
   11 and B item 5 are already published upstream: the class-level
   "nowhere-zero section forces $e=0$" is
   `prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish`
   (`stiefel-whitney-and-euler-classes-by-universal-constructions`) and the
   converse-failure counterexample is
   `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section`
   (`stiefel-whitney-...-examples`). DT-12 keeps the ID
   `cor-nowhere-zero-section-forces-the-euler-class-to-vanish` but states the
   geometric consequences (evaluation, self-intersection and zero-count
   vanishing) and cites the published class-level proposition instead of
   re-minting it. The B counterexample is recorded as `already-published` in
   the coverage harvest and is **not** re-scaffolded; the B page therefore has
   four items.
3. **Source URL.** The design and plan cite Ralph Cohen, *Bundles, Manifolds,
   and Homotopy*, at `.../bookR3.pdf`, which is dead (404, checked in this
   session). The same book is live at the author's current link
   `.../bookR4.pdf` (5,961,518 bytes, fetch-stamped in the coverage file), and
   the section numbering/pagination has shifted (the design's DT-12 range
   "§§8.3–9.3, pp. 244–260" corresponds in bookR4 to Chapters 8–9 with the
   Chapter 9 material on printed pp. 249–263). The coverage locator names the
   bookR4 results explicitly (Definition 9.3; Theorems 9.2, 9.4, 9.5, 9.7,
   9.9, 9.12, 9.13; Corollaries 9.3, 9.10–9.11) so the citation is checkable
   against the live document.
4. **Forward-dependency hazard avoided.** The natural statement "the Thom
   class of the normal bundle is the Poincaré dual of the submanifold" is
   already published as
   `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual` on the
   *later* order-547 page `thom-spaces-normal-data-and-collapse-maps`. Using it
   here would be a forward reading-order dependency (and the design's §12
   dependency table excludes that page from DT-12's closure). DT-12 therefore
   proves its own tubular form,
   `lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold`, from
   the earlier AT Thom/Poincaré-duality interfaces, and restates the
   zero-section duality as
   `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`.
   No item on this page cites any item whose home page is later than order 532.

## Pair inventory (21 items: 17 A + 4 B)

A page (in dependency order): `def-geometric-intersection-pairing-on-a-closed-oriented-manifold`;
`lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles`;
`lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold` (added
prerequisite); `lem-normal-bundle-of-the-zero-locus-of-a-transverse-section`
(added); `lem-pullback-of-the-thom-class-along-a-transverse-section` (added);
`prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`
(design 10, moved ahead of its consumers); `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing`
(design 3); `rem-cap-product-order-awaits-the-at-sign-convention` (design 4);
`def-self-intersection-number-of-an-oriented-submanifold` (design 5);
`lem-normal-push-off-zeros-are-self-intersection-points` (design 6);
`thm-self-intersection-is-the-euler-number-of-the-normal-bundle` (design 7);
`lem-normal-bundle-of-the-diagonal-is-canonically-tm` (design 8);
`cor-diagonal-self-intersection-is-the-euler-number-of-tm` (design 9);
`prop-mod-two-self-intersection-needs-no-orientation` (design 12);
`cor-nowhere-zero-section-forces-the-euler-class-to-vanish` (design 11,
geometric restatement); `rem-euler-class-construction-remains-owned-by-at`
(design 13); `rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally`
(design 14). The three added items are the local closure the design's
"Hard-proof closure" requires: the dual-of-a-submanifold interface, the normal
bundle of the zero locus, and the Thom-class pullback identity for a
transverse section. The design's scope is preserved; nothing was weakened and
no claim was dropped except the duplicated B counterexample, whose published
home is recorded.

B page: `ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle`,
`ex-diagonal-in-the-two-sphere-has-self-intersection-two`,
`ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus`,
`cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection`.

## Conventions fixed at scaffold time

- Intersection signs use the published DT-11 order (first factor $A$, second
  $B$) and the cohomology-first, front-evaluation cap of
  `def-cap-product-with-cohomology-first`; no DT cap sign is minted (remark
  `rem-cap-product-order-awaits-the-at-sign-convention`).
- Normal-bundle orientations use
  `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold`
  (a positive normal basis followed by a positive tangent basis of the
  submanifold is positive in the ambient). Under this convention the local
  intersection sign of $A$ with its own push-off is the determinant of the
  vertical derivative of the push-off section in the ordered splitting
  $TM|_A\cong TA\oplus\nu_A$; the determinant computation
  ($\det\begin{pmatrix}I&I\\0&J\end{pmatrix}=\det J$) is displayed in
  `lem-normal-push-off-zeros-are-self-intersection-points`, and the
  chart-orientation sign cancels in the local index, so the two poles of the
  height-gradient field on $S^2$ each have index $+1$ and
  $\Delta\cdot\Delta=2$.
- The Euler class, Thom class, Thom isomorphism and the mod-two top-class
  identity are consumed from the AT pages; the page only proves geometric
  applications, as the design's item 13 requires.

## Source evidence

Full-text fetch stamps were written by
`node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-2.coverage.json --stamp`:
8/8 source entries fetch-verified (Cohen bookR4, Guillemin–Pollack, the
Stanford 215B notes and Milnor–Stasheff, on both page entries). The harvest
lists 35 named results with dispositions: included (with item IDs), inline
(with the absorbing item), already-published (with the published item ID),
deferred (with a plan-resolvable destination) or out-of-scope (with a specific
reason). Retry history for the dead design URL: `bookR3.pdf` failed (404) once,
then the live `bookR4.pdf` was found on the author's page and verified; the
original URL and the recovery are both recorded in the coverage entry.

Unresolved source caveats (honest limits): the Milnor–Stasheff OCR layer is
noisy, so its section-level locators are given at chapter/section resolution
and the exact identities were cross-read in Cohen and the Stanford notes; the
Cohen draft's numbering differs from the design register, as recorded above.

## Checks actually run (this batch)

- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-2.pages.json`
  → `21 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-2.pages.json`
  → `21 scoped item(s), 0 error(s), 0 warning(s)` (whole-run joint invocation
  with all batch manifests is the engine's step-1 gate; any residual errors
  there belong to other, still-running batches).
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`
  → no error for any batch-2 item; the only errors are the still-empty
  inventories of other batches. Dependency levels were recomputed after the
  final inventory edit (levels 0–5; every item carries `dependency_level`).
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-2.coverage.json --require-destination`
  → `2 page(s), 35 harvested result(s), 0 error(s), 0 warning(s)`.
- Whole-run joint invocations over all 29 batch manifests
  (`node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-*.pages.json`
  and `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json`
  → `148 item(s), 0 normalized, 0 error(s)` and
  `148 scoped item(s), 0 error(s), 0 warning(s)`; no finding names this page.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-2.coverage.json --stamp`
  → `8/8 source(s) fetch-verified`; check mode → `8/8 source(s) resolved`.
- `node tools/step1-decisions.mjs record` for all 21 items →
  `research/frontier-41-ha-dt-29-step1-<id>.json` with `decision: ready`;
  `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` reports no
  open work for any batch-2 item (remaining open work is other batches).

## Open items / handoff

- The full stage-1 gate battery is owner/engine-run over all batches; the
  batch-2 artifacts are ready for it.
- The two added prerequisite triples (A3/A4a/A4b) are on the same A page, well
  under the 100-item cap; no page split or cross-batch placement escalation is
  required.
- Design item conflicts (duplicate published items, dead source URL, forward
  dependency hazard) are recorded above for the owner and the Step-3 reviewer;
  none blocks construction, and no published content, plan file, engine state
  or verdict was edited by this batch.

## Post-edit recheck (second pass)

After the checks above were first recorded, the manifest was edited once more.
This section records those edits and the re-runs; it supersedes the earlier
sentence that all 21 readiness records were current.

Edits made in this pass:

1. `ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus`
   (B3). The displayed claim "on the basis $([A],[B])$ of
   $H_1(T^2;\mathbb Z)$ the pairing is the hyperbolic (skew-symmetric,
   unimodular) form ... nondegenerate of determinant $1$" was reduced to what
   the strategy actually proves: the pairing
   $\langle x,y\rangle=\langle\mathrm{PD}[x]\smile\mathrm{PD}[y],[T^2]\rangle$
   has, on the classes $[A],[B]$, the matrix
   $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ of determinant $1$, alternating on
   those classes, with the factor order contributing the minus sign. No basis
   theorem for $H_1(T^2;\mathbb Z)$ and no perfectness/nondegeneracy of the full
   cup pairing was invoked by the proof, so the stronger global claim was not
   sustained; strategy step 1.3 now matches the display and explicitly declines
   the nondegeneracy claim.
2. `cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection`
   (B4). The integral-ambiguity clause "the signed count of a push-off depends
   on the choice of push-off" was replaced by the actual obstruction: no
   consistent integral signed count can be assigned, because going once around
   the core circle reverses the normal orientation and there is no consistent
   way to sign the coincidence points. Strategy step 1.3 now says the signed
   count is well defined only up to an overall sign, not as an integer, while
   the parity of the zero count is $1$ in every trivialization.
3. `lem-normal-push-off-zeros-are-self-intersection-points` (A10). The unused
   dependency `def-germ-of-section` was removed: its home page
   `presheaves-sheaves-stalks-and-sheafification` lies outside the declared
   `requires` closure of this page, so keeping it was an undeclared-prereq
   violation, and the statement and strategy never used germs. This was the
   only closure violation found.

The rebuild invalidated the recorded hashes of 15 items: B3, B4, A10 and their
transitive consumers (A6, A7, A8, A9, A11, A13, A14, A15, A16, A17, B1, B2).
All 15 were re-recorded `ready` with their examined dependency IDs and the edit
notes; the six records whose items and dependency inputs are unchanged (A1–A5,
A12) were left intact. `node tools/step1-decisions.mjs check --run
frontier-41-ha-dt-29` now reports 148/148 run items ready and zero open batch-2
work; the remaining `work` entries are empty page shells of other, in-flight
batches.

Re-run results (actual):

- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-2.pages.json`
  → `21 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-2.pages.json`
  → `21 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-2.coverage.json --require-destination`
  → `2 page(s), 35 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-2.coverage.json`
  → `8/8 source(s) fetch-verified`; check mode → `8/8 source(s) resolved (0
  documented drops)`.
- `node tools/url-sweep.mjs --coverage research/frontier-41-ha-dt-29-batch-2.coverage.json --out <temp> --recover --fail-on-dead`
  → `4/4 live; 0 failed; 0 recoverable; 4 citation decision(s) (0 documented
  source drops)`, exit 0.
- `node tools/source-backing.mjs --coverage research/frontier-41-ha-dt-29-batch-2.coverage.json --liveness <temp> --reharvest-plan <temp>`
  → `9 authored result(s) across 1 file(s), every one still backed by an
  openable source or documented alternative argument`, exit 0.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`
  → 46 errors, all `empty scaffold inventory` for other batches' pages; no
  batch-2 item has a level or dependency error.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0, no
  item-level cycles, forward references, B-page dependencies or unresolved ids
  among the pages with item lists. It emits one `redundant-prereq` WARN naming
  this page: it requires `smooth-vector-bundles-and-sections` directly while
  already reaching it through `oriented-and-mod-two-intersection-numbers`. The
  `requires` array is plan-owned (the plan controls), and the page uses the
  direct supplier, so the warning is recorded here, not repaired by this batch.
- `node tools/extcheck.mjs` → exit 0; the `recorded-not-proved` warnings are
  outside this batch (no batch-2 item id appears in its output).
- Manual closure audit of all 21 items against `plan-spec.json` (script):
  0 missing item homes, 0 dependencies outside the transitive `requires`
  closure, 0 B-page homes, 0 later-order homes.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`
  → refreshed; batch 2 remains in `reviewed_batches` with its empty
  cross-batch input (valid: this pair has no cross-batch dependency).
