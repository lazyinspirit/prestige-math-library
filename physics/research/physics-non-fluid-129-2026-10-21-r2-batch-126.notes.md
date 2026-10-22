# Batch 126 authoring notes

Run `physics-non-fluid-129-2026-10-21-r2`; assigned pair `tgrx-ads-effective-boundaries` and `tgrx-ads-effective-boundaries-examples`.

## Scope and plan comparison

The assigned task and the complete design section at L331 agree with the current `plan-spec.json` on the page IDs, titles, order 949, category, library, and three page-level prerequisites. The plan-spec item arrays are empty staging placeholders; the populated run inventory carried two A-page items and one B-page item. No substantive design conflict was found. The run-specific `owner-authoring-direction.md` is absent.

I added `def-tgrx-ads-regulated-generalized-entropy` as a local A-page definition because the current `def-tgr-regulated-generalized-entropy` is explicitly restricted to one compact spacelike section of a smooth null hypersurface. The new definition supplies the AdS codimension-two surface, anchor, homology, finite-regulator, and combined finite-limit interface required by the assigned postulate. It preserves the fixed-scheme and entropy-unit conventions without extending the null-screen domain. The final placement is three items on A and one on B, well below the 100-item cap. Page source files retain the frontmatter inventory; the owner join supplies the page-layout marker.

## Item order, prerequisites, and interfaces

The 14-item transitive in-run closure for this batch was recomputed from the populated manifests. It has no missing carrier or cycle. Final levels are `def-tgrx-ads-regulated-generalized-entropy` 2, `post-tgrx-semiclassical-ads-dictionary` 4, `pthm-tgrx-two-saddle-transition` 5, and `rem-tgrx-island-assumptions` 5.

- The new definition depends on `def-tgr-regulated-generalized-entropy`. Its statement and current ready record were inspected. The supplier's actual domain is a fixed null-screen section; its fixed scheme, units, and finite combined-sequence convention are used only as explicitly stated. The finite partial-trace interface is supported transitively by the inspected finite outside-entropy definition and its matrix, trace, and logarithm dependencies.
- The postulate depends on the new definition, `prop-tgrx-code-area-entropy`, `def-tgr-regulated-generalized-entropy`, and `pthm-tgrx-noether-first-law`. The complete finite code proof establishes finite matrix identities, not a geometric area law. The Noether first-law carrier is conditional on a fixed generator, a stationary nondegenerate bifurcate horizon, the selected canonical charge representative, vanishing residual-constraint variation, integrable boundary-charge variation, derivative-free curvature, and its `c=1` action normalization. The regulator-indexed positive Newton coupling is model data, not an application of that first-law theorem. The postulate imports neither result as a derivation of the AdS/QES dictionary.
- The theorem and B-page remark each depend on the local postulate. The theorem proves the lower-envelope cusp for the stated two-branch crossing and supplies a compatible constant regulated code state to show that exact finite-cutoff entropy need not share that cusp. The remark retains the selected-model, replica-continuation, regulator, factorization, and saddle assumptions; it makes no general four-dimensional unitarity claim.

The current readiness records for `prop-tgrx-code-area-entropy`, `def-tgr-regulated-generalized-entropy`, and `pthm-tgrx-noether-first-law` were checked with `loadStep1Record` and `step1Decision`; all are current and ready. This records authoring prerequisites only, not independent proof acceptance. The optional area-calibration branch and its countable-choice premise are not used; no identification of `G_Λ` with `G_N` or general area formula is claimed.

## Sources and coverage

Full source texts were retrieved and the following complete relevant sections were inspected:

- [Daniel Harlow, *Jerusalem Lectures on Black Holes and Quantum Information*](https://arxiv.org/html/1409.1231), §§6.2.3 and 6.10, including the dictionary/semiclassical-regime distinction, equations (195)–(196), anchoring, homology, least-area selection, and leading-order/heuristic qualifications. This supports the adopted status and scope of the local dictionary, not a proof of it.
- [Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/html/2006.06872), §§6 and 8, equations (6.2) and (8.2), §10 equation (10.4), and §11.2. These support the model-specific generalized-entropy/QES and island discussion, replica continuation, and stated path-integral, saddle, cutoff, and exact-state qualifications; they do not establish universal saddle inclusion or dominance.
- [Saad, Shenker, and Stanford, *JT gravity as a matrix integral*](https://arxiv.org/html/1903.11115), §1 and §§6.1–6.3. These support only the JT-specific genus-expansion, completion, ensemble, and higher-dimensional caveats.

Coverage records three source searches, retrieval attempts, locators, 11 harvested results, their per-item dispositions and dependencies, and all limitations. There were no retrieval failures, so no recovery retries or source drops were needed; `source_resolution` is empty for that reason. `source-fetch-check --stamp` confirms 4/4 page-source entries verified (0 newly stamped in the final check).

## Batch evidence and remaining shared-run blockers

- `manifest-deps`: 4 items, 0 errors; `content-policy`: 4 scoped items, 0 errors/warnings.
- `coverage-checklist`: 2 pages, 11 harvested results, 0 errors/warnings; focused `depcheck`: selected item/page prerequisite-cycle checks pass across 2,727 items and 601 pages.
- `proof-layout`: 4 changed items, 4 proof steps, 0 defects; strict proof contracts: 4/4 items, 0 errors/warnings; renderer check: all 4 items and 2 pages pass. Normative precheck reports 0 failures: the theorem's direct proof passes, the postulate's nonproof structure passes, and the definition/remark have no proof section.
- The filtered in-run dependency closure has 14 items, no errors, and the levels listed above. Full-run `item-dependency-levels.mjs check --run` still reports 12 unrelated empty scaffold inventories: `qftx-kz-chiral-interface` and its examples, `qftx-hall-bps-wall-crossing` and its examples, `csm-frontier-inverse-gibbs` and its examples, `csm-frontier-planar-critical-point` and its examples, `csm-frontier-rare-event-numerics` and its examples, and `tgrx-research-boundaries` and its examples. `batch-dependency-levels.mjs check --run` reports the shared run-level levels record stale after manifests were materialized. The shared scheduling record and other batches were left unchanged for the owner to refresh after scaffold completion.
- `cross-batch-dependencies.json` is a seven-row JSON array: three required page edges and four item edges. A final edge check confirmed it exactly covers the assigned pages' and items' external prerequisites. All seven scoped interface checks are recorded `verified`; this is not independent proof approval.

## Step 1 readiness

All four assigned items have current `ready` records with their exact direct dependencies examined. The records are non-owner authoring-readiness records; later review gates remain outstanding.

| Item | Decision | Dependency level | Readiness SHA-256 |
|---|---|---:|---|
| `def-tgrx-ads-regulated-generalized-entropy` | ready | 2 | `2386343fe76fad7339fd96425ad288136f5b1f510793952ddba9604d1d1c236c` |
| `post-tgrx-semiclassical-ads-dictionary` | ready | 4 | `4592eb533c0eeb58ffb842e714457b23a5c2003e992a545442b922f9dc1a542d` |
| `pthm-tgrx-two-saddle-transition` | ready | 5 | `f5bac3c8c9aa8d3ea3d07e992b2cc17b3d03d5a70de3360b190114d9c9de4bb2` |
| `rem-tgrx-island-assumptions` | ready | 5 | `0455088400919c1813d58dc77fc106fb15ca212820eca36af1e345fca3c5bfa1` |
