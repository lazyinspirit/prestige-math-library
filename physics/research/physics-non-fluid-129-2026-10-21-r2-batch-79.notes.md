# Batch 79 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `qftx-chern-simons-bf-gravity` / `qftx-chern-simons-bf-gravity-examples`  
Output manifest: `research/physics-non-fluid-129-2026-10-21-r2-batch-79.pages.json`

## Plan and design reconciliation

The complete design section at `research/plan-quantum-field-theory-frontier-expansion-track.md` §1664 and its linked detailed contract agree with the canonical `research/plan-spec.json` on page IDs, order 855/856, titles, category, mathematics library, A/B relationship, and required pages `qftx-modular-tqft-sewing` and `qftx-bv-brst`. The plan-spec item arrays are empty scaffold inventories; the detailed design names three A items (`def-qftx-cs-bf-actions`, `prop-qftx-cs-bf-variation`, `prop-qftx-three-dimensional-gravity-bf`) and the B counterexample `cex-qftx-degenerate-bf-triad`.

I added `lem-qftx-three-dimensional-curvature-determined-by-ricci` on the A page because the approved proof route requires the three-dimensional Riemann–Ricci identity to be proved locally. This is an intermediate supplier for the planned gravity proposition, not a changed page identity or an omitted prerequisite. No conflict with the plan-spec was found. The owner authoring-direction file was absent from `research/` at the inventory check.

The detailed design warns that local classical Chern–Simons variation, the weighted RT construction, and a quantized compact Chern–Simons path integral are different results. The items keep that boundary explicit. The CS density is defined in a fixed trivialization; global exponentiation needs separate characteristic-class/level data. The page does not assert a path-integral measure, an RT identification, anomaly cancellation, or a four-dimensional quantum-gravity result. The gravity proposition is restricted to zero cosmological constant and the invertible-coframe sector; the B counterexample keeps the degenerate BF sector visible.

## Inventory and dependency levels

The full run assigns batch 79 dependency level 5, with page prerequisites in batches 62 and 77. Item levels below use only logical suppliers within this assigned pair; external mathematical items are context and do not raise those levels.

| Item | Page | In-pair suppliers | `dependency_level` |
|---|---|---|---:|
| `def-qftx-cs-bf-actions` | A | none | 0 |
| `lem-qftx-three-dimensional-curvature-determined-by-ricci` | A | none | 0 |
| `prop-qftx-cs-bf-variation` | A | action definition | 1 |
| `prop-qftx-three-dimensional-gravity-bf` | A | variation proposition; 3D curvature lemma | 2 |
| `cex-qftx-degenerate-bf-triad` | B | gravity proposition | 3 |

The action variation uses the exact mathematical supplier `thm-general-stokes-theorem`. Its current Statement assumes `AC_ω` and compactly supported forms with outward-normal-first boundary orientation. Since `M` is compact, the forms used are compactly supported. The Chern–Simons and BF formulas retain their boundary terms for unrestricted variations; the Euler equations are stated only for variations supported in the interior. The items carry countable choice explicitly through the downstream proof chain; they do not assume full AC.

## Current cross-batch prerequisite audit

The exact A-page `requires` edges are recorded in `research/physics-non-fluid-129-2026-10-21-r2-batch-79.cross-batch-dependencies.json`.

- `qftx-modular-tqft-sewing` remains **open**. Current `loadStep1Record` / `step1Decision` reports escalated records for `def-qftx-weighted-topological-model`, `prop-qftx-modular-dimension-sewing`, and `prop-qftx-weight-anomaly-obstruction`. The current reason for each is the missing batch-75 supplier page `qftx-ribbon-braid-representations`: its live manifest has an empty item inventory and no current carrier/readiness records. The inspected actual interfaces are specific: the weighted RT model assumes full AC and Countable Choice; the sewing proposition states its no-conjugation genus-dimension formula and actual normalized cutting/gluing maps; the weight-anomaly proposition compares a fixed weighted bordism and assumes both $\kappa\ne1$ and a nonzero map. This is a genuine page-level prerequisite hold, but none of this pair's mathematical arguments uses those RT results, so I have not inserted them as proof premises or claimed them proved.
- `qftx-bv-brst` is **verified** for this scoped page-interface check. Its four A items and B example were inspected; current Step 1 decisions are ready for `def-qftx-abelian-local-brst`, `lem-qftx-brst-nilpotence-doublets`, `def-qftx-brst-relative-local-cohomology`, `prop-qftx-anomaly-obstruction`, and `ex-qftx-doublet-removal`. The scalar induction item used by its anomaly proposition is currently ready. This check does not certify independent proof approval. No BRST or anomaly result is used in the assigned CS/BF arguments.
- The existing batch-62 cross-page row for `qftx-bv-brst` → `qftx-causal-renormalization` remains in that batch's evidence and was not edited. Its older narrative cites a stale escalated scalar-theorem record; the current `step1Decision` snapshot now reports all eight qftx-causal page items ready, including `thm-qftx-scalar-eg-induction` at current hash `a7eae2d1eca62b76a8ae512d7b8c3bbd5e534c462041d68aa0b07cc271ed8510`. This is transitive context only, not an additional consumer-owned edge in batch 79.

Although the two upstream pages are required for placement/order, they are not logical suppliers of the authored item proofs. The proof contracts and `deps` therefore list only the actual mathematical inputs. No other pair's supplier was edited.

## Source reading and retrieval

The full-text evidence is in `research/physics-non-fluid-129-2026-10-21-r2-batch-79.coverage.json`. Three independent texts were inspected; Khesin–Wendt and Carlip provide independent Chern–Simons boundary/gravity treatments, while Baez supplies a separate BF and degeneracy treatment. All harvested results are `included` with item-level locators, exact supports, and limitations.

| Source | Full-text locator read | Supported items and limits |
|---|---|---|
| Khesin and Wendt, *The Geometry of Infinite-Dimensional Groups* (book) | Complete 316-page PDF retrieved; complete §§3.1–3.2, printed pp.181–186 | Action variation, Stokes boundary term, potential, and presymplectic construction. The book assumes a compact simply connected simple group for its moduli discussion and leaves a gauge-degeneracy verification as an exercise; our proof derives the local formulas and boundary contraction independently. |
| Carlip, *Quantum Gravity in 2+1 Dimensions: The Case of a Closed Universe* (full lecture/review) | Complete 61-page PDF retrieved; complete §§2.1 and 2.3 | The algebraic 3D curvature identity, first-order equations, and invertible-triad restriction. Its physical units are not imported; no quantum path integral is inferred. |
| Baez, *An Introduction to Spin Foam Models of BF Theory and Quantum Gravity* (full lecture notes) | Complete 57-page PDF retrieved; full §2 and relevant §3 classical phase-space passage | Invariant-pairing BF action, equations, and distinction between nondegenerate and degenerate triads. Baez explicitly suppresses boundary terms unless boundary conditions kill them; our variation item retains them. Its later compact-group/quantization assumptions are outside scope. |

`source-fetch-check --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-79.coverage.json --stamp` passed 5/5 source records and wrote five full-text fetch stamps. No retrieval failed, so there were no recovery retries, source drops, or owner-escalation source resolutions.

## Proof and readiness disposition

All five carriers have complete local arguments or definitions and A/B placement. Proof contracts are generated from the finished step paragraphs in `research/physics-non-fluid-129-2026-10-21-r2-batch-79.proof-contracts.json`; they bind the exact supplier excerpts, step inputs, boundary cases, and finite algebraic checks. The item-level readiness rows record the current mathematical `deps` closures, placement, and contracts. The open modular-TQFT page edge remains a separate page-level hold; it is not silently converted into a proof premise or an item dependency.

## Final scoped checks and readiness

- `content-policy` on the batch-79 manifest: 5 items, 0 errors, 0 warnings.
- Focused `depcheck` on the five assigned items: 0 errors and 0 warnings; 954-item/139-page prerequisite closure checked.
- `rendercheck` on the five items and two pages: 7 files, 0 errors, 0 warnings.
- Normative precheck on the four proof-bearing items: 4 passed, 0 failed. Its proposed phase normalization was adopted after checking each reordered step reference; the current proof contracts were regenerated from those exact steps.
- `proof-layout` on the four proof-bearing items: 18 steps, 0 defects.
- Strict `proof-contract.mjs` on the four proof-bearing items: 0 errors, 0 warnings. `coverage-checklist` on this batch: 2 pages and 10 harvested source results, 0 errors, 0 warnings.
- `source-fetch-check` stamp and check modes: 5/5 complete-document fetches verified; no retrieval failure, retry, source drop, or `source_resolution` escalation.
- The scoped item-level dependency calculation returns exactly the inventory table above, with no cycles or level errors. Current `step1Decision` checks are hash-current and `ready` for all five assigned item carriers; these are local item-input/placement/contract records, not independent proof acceptance. The separate open modular page requirement remains explicit in the cross-batch file.
- Run-level recomputation from current manifests returns batch 79 at level 5 with suppliers 62 and 77 and current input hash `89940a976a9e6aa49c2a48cf5da80dc1c4cdc0bee20aec1c65be9e794be397eb`. The shared `research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json` still binds the prior hash `477e4926f913bd61321482f4a18b9a05332cfe3f9495387ffc4f6bffc316b7d9`; `batch-dependency-levels.mjs check` therefore reports stale scheduling evidence. I left that run-level shared file untouched; the owner must refresh it before the drained full-run check.
- Run-wide `proof-contract-coverage` with this batch-only contract file reports 654 missing entries across other run items, and none for the four batch-79 proof carriers. The strict batch-scoped contract check above passes; the full-run merged contract inventory remains an owner/run integration obligation.

The remaining batch-79 prerequisite hold is the exact `qftx-modular-tqft-sewing` page edge recorded as `open`; the BV/BRST page edge is scoped `verified`. The separate stale run-level dependency-level digest and run-wide proof-contract coverage are outside this batch's write scope and are reported for owner integration.
