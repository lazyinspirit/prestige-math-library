# Batch 116 authoring notes

Run `physics-non-fluid-129-2026-10-21-r2`, batch 116, role beta. Scope is the A/B pair `tgrx-hydrostatic-functional` / `tgrx-hydrostatic-functional-examples` in thermodynamics-and-general-relativity. The run-level dependency map places batch 116 at level 1 after batch 115.

## Plan and design reconciliation

The detailed target in `research/plan-spec.json` and the batch manifest require the A page to depend on `tgrx-thermal-geometry`, `tgr-c02`, and `tgr-i01`. The design prose at `research/plan-thermodynamics-and-general-relativity-frontier-expansion-track.md` L207 names only `tgrx-thermal-geometry` and `tgr-c02`. Following the plan as instructed, the A page retains all three requirements, including `tgr-i01`; the B page requires the A page and `tgr-c02` as planned. The detailed scaffold specifies three items; a fourth, `def-tgrx-static-hydrostatic-data`, was added on the A page because those background and regularity assumptions had no local carrier. No claim was weakened to fit the scaffold.

## Item inventory, dependencies, and levels

Levels are computed from in-run item suppliers: zero when there is no in-run supplier, otherwise one plus the maximum supplier level. External mathematics and already existing physics items do not raise the in-run level.

| Item | Level | Direct dependencies |
|---|---:|---|
| `def-tgrx-static-hydrostatic-data` | 0 | `def-smooth-manifold`; `def-cartesian-product`; `def-gr-smooth-lorentzian-objects`; `def-gr-killing-field`; `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`; `def-riemannian-metric-and-riemannian-manifold`; `def-riemannian-volume-density`; `lem-the-riemannian-volume-density-is-coordinate-independent`; `def-tgr-framework-units` |
| `post-tgrx-hydrostatic-effective-model` | 1 | `def-tgrx-static-hydrostatic-data`; `def-tgrx-thermal-vorticity`; `post-tgr-local-material-thermodynamics` |
| `pthm-tgrx-hydrostatic-variation` | 2 | `post-tgrx-hydrostatic-effective-model`; `def-tgrx-static-hydrostatic-data`; `def-riemannian-volume-density` |
| `ex-tgrx-entropy-does-not-close-hydrodynamics` | 2 | `post-tgrx-hydrostatic-effective-model`; `post-tgr-first-order-dissipation` |

The corresponding manifest labels agree with these computed levels. The hydrostatic postulate adopts only the order-zero functional. Its long-wavelength qualifications do not assert convergence, an error estimate, a microscopic trace, or equilibrium-state existence. The variation theorem differentiates the adopted functional under its stated compactness, smoothness, open-domain, and C2 assumptions. The B-page example adds the pressure-identification and common nonzero-expansion conditions it needs, and compares constitutive maps only; it does not claim a solution or an observed response.

## Supplier interface review

I inspected the full current statements and proofs for the mathematical suppliers used by the new static-data definition, including the product smooth-structure proposition, the coordinate-independent Riemannian volume-density lemma, and the Lorentzian objects definition. The definition's local proof establishes the product metric's Lorentz signature, the static Killing field and lapse, and the globally defined finite volume measure; its SI assignments follow `def-tgr-framework-units`.

I inspected the actual current `def-tgrx-thermal-vorticity` statement and complete proof, not just its draft label. `loadStep1Record` and `step1Decision` report its current ready record as hash-current. Its inverse-temperature/Killing normalization is the only thermal-geometry interface used. The actual `post-tgr-local-material-thermodynamics` and `post-tgr-first-order-dissipation` statements were read; their declared constitutive/formulation content is treated as adopted input, not as a proved equation-of-state identity or empirical result. No unresolved prerequisite argument remains for this batch.

## Source reading and dispositions

Two independent full-text treatments were retrieved, opened, and read for the A and B pages. Retrieval evidence and item-by-item dispositions are in `research/physics-non-fluid-129-2026-10-21-r2-batch-116.coverage.json`.

- Banerjee et al., [*Constraints on Fluid Dynamics from Equilibrium Partition Functions*](https://arxiv.org/pdf/1203.3544), complete 64-page PDF: §§1.1–1.2 and eqs. (1.3)–(1.12), PDF pp. 3–5, for stationary charged backgrounds, redshifted local variables, and the zero-derivative pressure functional; §2.3.1, eqs. (2.15)–(2.24), PDF pp. 15–17, for fixed-background chemical-potential differentiation; §2.5 for the ideal-fluid response. Harvested results are included for the static data, adopted functional, and susceptibility calculation; its all-orders equality conjecture is out of scope. The paper's natural units and gauge conventions are not silently imported: the carriers state SI units and their own sign convention.
- Kovtun, [*Lectures on hydrodynamic fluctuations in relativistic theories*](https://arxiv.org/pdf/1205.5040), complete 55-page notes: §1.3 for derivative counting and the microscopic mean-free-path scale; §2.6, PDF p. 30, for the microscopic time-scale qualification; §3.2 for the second-order breakdown boundary. These results support the expansion-regime and transport-boundary discussion. The notes' model-specific scales are not claimed to be universal, and no second-order formula is asserted here.

Both source URLs fetched successfully on the first recorded attempt; `source-fetch-check --stamp` verified and stamped all 4 page-source entries. The final no-write check again verified 4/4 with zero documented drops. There were no retrieval failures requiring recovery or source-resolution entries.

## Cross-batch and readiness records

`research/physics-non-fluid-129-2026-10-21-r2-batch-116.cross-batch-dependencies.json` contains the two in-run cross-batch edges checked for this batch: the A page to batch-115 page `tgrx-thermal-geometry`, and the hydrostatic postulate to `def-tgrx-thermal-vorticity`. Both are `verified` at the scoped interface level; neither status is independent proof approval. The external `tgr-c02` and `tgr-i01` page requirements remain in the page manifest and are not represented as batch-to-batch edges in this run.

Current `step1Decision` checks report each of the four owned item records as `ready`, non-owner, and hash-current. The direct mathematical and physics suppliers were examined at their actual statements and proof/postulate status. These local records close only the owned carriers; the run-wide check still reports missing readiness entries and empty scaffold inventories elsewhere in the run.

## Scoped validation and remaining owner action

- `content-policy` on the batch manifest: 4 items, 0 errors, 0 warnings.
- `precheck` on the four owned items: 4 checked, 0 failed.
- `proof-layout` on the four changed items: 9 proof steps, 0 defects.
- `rendercheck` on the four items and both pages: 6 files, no errors.
- Strict proof-contract check: all 4 contracts checked, 0 errors or warnings.
- Coverage checklist: 2 pages, 12 harvested results, 0 errors or warnings.
- Final source-fetch check: 4/4 verified, 0 documented drops.
- Focused dependency check: 4 items and both pages; 0 errors or warnings, with 1,347 items and 364 pages in the prerequisite closure.
- The cross-batch dependency file is a valid JSON array with one row per checked edge; all evidence fields are nonempty.

The owner-controlled run-wide `batch-dependency-levels` check reports its saved record stale. A read-only recomputation gives batch 115 level 0 with no prerequisites and batch 116 level 1 requiring batch 115, matching both stored rows. The aggregate input hash differs (`477e4926f913bd61321482f4a18b9a05332cfe3f9495387ffc4f6bffc316b7d9` recorded; `e028fbe3d94d612186edd83b25f827ec7f18a0904b3f994b764c32030d461b9f` current), and the hash covers the full run input set. The shared run-level record was left untouched; the owner should recompute it after the run's manifests are finalized.
