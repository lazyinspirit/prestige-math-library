# Batch 2 authoring and evidence notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Scope: `emx-lorentz-form-algebra` and `emx-lorentz-form-algebra-examples`  
Status: Step 1 authoring complete for six draft items; all six live Step 1 records are `ready`. These records do not claim independent proof approval.

## Plan and design comparison

- The owner direction override file was absent. The assigned design section and `plan-spec.json` agree on page IDs, title, category, A/B classification, order 701, and the three A-page prerequisite pages. The B page requires the A page. No plan/spec conflict was found.
- The design inventory listed three A items and two B examples. I added `lem-emx-unit-sphere-radial-flux` to the A page as a local intermediate result. The original punctured-flux example depended on `ex-sphere-and-hemisphere-surface-integrals`, which is confined to a different B page and failed the scoped dependency check. The new A item supplies the exact outward unit-sphere area-form integral with a complete spherical-coordinate proof. The B example still constructs the tetrahedral cycle, proves it is closed, and computes its period through the finite face parametrizations. The B-to-B dependency is removed.
- The existing `lem-emg-lorentz-hodge-calculus` is a Lorentzian supplier under signature $(-,+,+,+)$, not a positive-definite Riemannian-star supplier. The new Lorentzian-star definition and square-sign lemma use the fixed local metric and prove their basis formulas directly; they do not rely on that mismatched interface.
- Page-level prerequisites remain as planned. All authored items have `domain: mathematics`, `library: mathematics`, mathematical dependency roles, and pure-mathematical physical-scope notes.

## Inventory and dependency levels

The A page contains four items and the B page contains two, below the 100-item page cap. Levels use one plus the maximum level of same-batch suppliers; external suppliers do not raise an in-run level.

| Item | Page | Level | Same-batch suppliers |
|---|---|---:|---|
| `def-emx-lorentz-star` | A | 0 | none |
| `lem-emx-unit-sphere-radial-flux` | A | 0 | none |
| `lem-emx-lorentz-star-square` | A | 1 | `def-emx-lorentz-star` |
| `thm-emx-local-potential-homotopy` | A | 1 | `def-emx-lorentz-star` |
| `ex-emx-punctured-flux` | B | 2 | `lem-emx-unit-sphere-radial-flux`, `thm-emx-local-potential-homotopy` |
| `ex-emx-flat-nonexact-connection` | B | 2 | `thm-emx-local-potential-homotopy` |

The scoped dependency-level calculation found no errors and matched every recorded item level. Batch 2 has current level 0 and `requires: []`. The run’s cross-batch dependency input is a JSON array with zero rows: the A-page prerequisites are outside this run, the B-to-A page edge is within batch 2, and all item suppliers in the run are within batch 2. The scoped computation inspected 258 run pages and found no cross-batch edge for this batch.

The run-wide `item-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2` remains blocked by 196 empty scaffold inventories owned by other batches (196 errors, all `empty scaffold inventory`). The six batch-2 levels above pass independently. The shared `batch-dependency-levels.json` check is stale by input hash: the recorded and recomputed graph rows are identical, and both give batch 2 level 0 with no requirements, but the input hash changed from `d1f9fa267cd3754c28b1714a316b654495c934e7f1a4fcccabec1c7bf94a702f` to `b3a67fe10ac354c0c7de8dfb703746d921d578bb429cb1ece5b6e9d7990464e3`. That shared scheduling file was left to the owner.

## Supplier and proof notes

- `def-emx-lorentz-star` fixes the ordered coframe, orientation, metric $\eta=\mathrm{diag}(-1,1,1,1)$, induced pairing, complementary-basis formula, exactness, and periods on finite smooth singular cycles.
- `lem-emx-lorentz-star-square` applies the complementary-basis sign twice. The unique negative metric sign contributes $-1$, and reversing complementary blocks contributes $(-1)^{k(4-k)}$, giving $\star_\eta^2=(-1)^{k(4-k)+1}$, including the stated two-form examples.
- `lem-emx-unit-sphere-radial-flux` checks the regular spherical patch, outward orientation, area form, and exact integral $4\pi$. It uses only published mathematical prerequisites and the two surface-integration sources below.
- `thm-emx-local-potential-homotopy` proves smoothness of the radial integral primitive, differentiates its components, uses closedness and Newton–Leibniz to show $dA=F$, then handles the de Rham quotient and the Stokes period obstruction. It is conditional mathematical reasoning on the explicit star-shaped and smoothness hypotheses.
- `ex-emx-punctured-flux` computes $d\beta=0$ on $r>0$, verifies the outward tetrahedral face chain is a cycle and maps orientation-preservingly to the sphere, and obtains period $4\pi$ before applying the exactness obstruction. It makes no magnetic-charge or physical claim.
- `ex-emx-flat-nonexact-connection` computes the circle period $2\pi$, applies the local potential theorem, and proves local primitives on convex balls differ by constants. It makes no electromagnetic or quantum interpretation.

The exact item dependencies, facts, claims, and supplier excerpts are in the batch manifest and proof-contract file. Current item statements and proofs were read for all direct suppliers, including the Lorentzian/Hodge, differential-form, Stokes, Riemann-integral, surface-flux, and local inverse-function interfaces. Draft labels and missing independent review were not treated as prerequisite gaps.

## Literature and source resolution

The A/B coverage record is [the batch coverage JSON](physics-non-fluid-129-2026-10-21-r2-batch-2.coverage.json). It records URLs, exact locators, item support, inspected scope, and each source result’s disposition. There are five unique full-text sources; the B page reuses Baez and Lee for its period and local-exactness context. All seven page/source records are fetch-verified: five unique URLs were fetched and stamped, and the B page reuses two of those stamped records. The final `source-fetch-check --stamp` and no-network check both verified all seven records, with zero documented drops. `coverage-checklist` reports two pages, 15 harvested results, and no errors or warnings. `source_resolution` is empty because there were no retrieval failures or unresolved source candidates.

- Baez and Muniain, *Gauge Fields, Knots, and Gravity*, Part I §§1.5.3 and 1.6: Lorentzian Hodge convention, de Rham periods, and context; included for the star definition, square lemma, and homotopy theorem.
- Fitzmaurice, *Differential Geometry*, complete 61-page notes, §§12.4–12.5: closed/exact forms and the Lorentzian square sign; included for the star items and homotopy context.
- Lee, *Introduction to Smooth Manifolds*, Ch. 16 and Ch. 17 §§17.1 and 17.3, including Lemma 17.9, Theorem 17.14, and Corollary 17.15: Stokes, quotient exactness, and homotopy context; included for the local-potential theorem.
- University of Toronto MAT237 notes, complete §5.3: parameterized surface flux, orientation, and endpoint/seam conventions; included for the local sphere-flux lemma. The full-sphere radial-flux computation is posed as an exercise in those notes, so the item supplies the complete calculation.
- Taylor, *Introduction to Analysis in Several Variables*, complete text, §3.2, printed pp. 122–125 (PDF pp. 134–137): cross-product surface density and unit-sphere area; included for the local sphere-flux lemma, whose proof computes the oriented radial flux directly.

## Checks and readiness

- `precheck.mts`: 6 items, 0 failing.
- `proof-contract.mjs --strict`: all 6 scoped items checked; 0 errors, 0 warnings.
- `proof-layout.mjs`: 6 items, 19 steps, 0 defects.
- `rendercheck.mjs`: 8 changed item/page files checked; 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 2 pages, 15 harvested results; 0 errors, 0 warnings.
- `content-policy.mjs`: 6 scoped items; 0 errors, 0 warnings.
- Scoped `depcheck.mjs`: 6 selected items, 1,070 prerequisite-closure item checks and 230 page-cycle checks; 0 errors, 0 warnings. The former B-only sphere-example dependency is absent.
- `source-fetch-check.mjs`: 7/7 page/source records fetch-verified and resolved (5 unique URLs), 0 drops.
- Scoped dependency levels: 6 items, no errors; levels 0, 0, 1, 1, 2, 2 as listed above.
- Cross-batch dependency JSON validation: valid JSON array, 0 rows.
- Step 1 records: all six items are `ready`, each with its full direct dependency list. Their current hashes recheck as closed. No `--owner` flag was used; the records do not imply independent proof approval.

The initial run-status snapshot also reported an unrelated stale owner-receipt hold at `1-drift-apply`. It is outside batch-2 ownership; engine state and verdicts were not changed.
