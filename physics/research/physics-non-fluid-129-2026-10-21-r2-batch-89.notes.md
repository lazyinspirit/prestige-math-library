# Batch 89 authoring notes

Run: physics-non-fluid-129-2026-10-21-r2  
Role: beta  
Assigned pair: csm-frontier-critical-gaussian-rg / csm-frontier-critical-gaussian-rg-examples

## Scope and planning

The current plan row and current run manifest require three page prerequisites for the A page: csm-frontier-large-deviation-ensembles, csm-frontier-quantitative-dlr, and csm-exact-models. The design summary at order 875 in research/plan-classical-statistical-mechanics-frontier-expansion-track.md lists only the first two. I followed the current plan, kept all three exact IDs in the page manifest and page carrier, and recorded the design/plan discrepancy here. The third supplier is a published page outside this run; it is not a cross-batch row.

The design’s reserved A-page claims were kept: the positive-mass periodic Gaussian, the massless lattice Green-integral dimension threshold, exact Gaussian block elimination and its correctness theorem, and quartic engineering scaling. Local prerequisites absent from those reservations were authored on the A page before their consumers: the finite Gaussian precision convention, periodic Laplacian spectrum, the divergent unrestricted massless-torus normalizer, sine comparison bounds, positive Schur complement, and the infinite-volume nonanalytic-pressure definition. The B-page star example is the planned exact witness that eliminating one variable creates all pair couplings.

## Dependency inventory and levels

The computed local levels are recorded in research/physics-non-fluid-129-2026-10-21-r2-batch-89.coverage.json under source_resolution.item_argument_dependencies. They agree with the current assigned-batch dependency graph:

| Level | Items |
|---|---|
| 0 | def-csm-frontier-infinite-volume-criticality; def-csm-frontier-finite-gaussian-precision; lem-csm-frontier-periodic-laplacian-spectrum; lem-csm-frontier-sine-comparison; lem-csm-frontier-schur-complement-positive; lem-csm-frontier-quartic-engineering-scaling |
| 1 | lem-csm-frontier-massless-torus-normalization-diverges |
| 2 | def-csm-frontier-gaussian-lattice |
| 3 | thm-csm-frontier-gaussian-massless-dimension; alg-csm-frontier-gaussian-block-rg |
| 4 | thm-csm-frontier-gaussian-block-rg-correct |
| 5 | ex-csm-frontier-rg-generates-couplings |

There is no in-run dependency cycle. Mathematical premises are mathematical items only. The finite Gaussian definition and every downstream normalized Gaussian calculation retain the supplier’s explicit ACω assumption. The local massless-torus lemma now proves the unrestricted zero-mode normalizer diverges; the infinite-lattice massless theorem still concerns only its stated Fourier integral and does not claim construction or nonexistence of an interacting or infinite-volume Gibbs measure.

## Source reading and retrieval

Two independent full treatments were read for the A page: Tong’s complete 144-page Cambridge lecture notes and the complete 590-page Friedli–Velenik book. The relevant sections and each harvested heading’s disposition appear in the coverage file. Additional independent sources support thermodynamic-limit language, Schur complements and the elementary sine inequalities. The source list was inspected directly from the full documents; the book’s separate Chapter 8 PDF is retained only as a reading aid, not as another independent source.

The coverage checklist reports a low-yield advisory because it counts every named result in the inspected Friedli–Velenik Gaussian-free-field sections, even though those sections also contain separate Dirichlet boundary-value, random-walk, infinite-volume measure-existence and Gibbs-measure results. Those are explicitly scoped out in the coverage ledger rather than silently omitted; several large-deviation headings are deferred to their already-planned ensemble page. The assigned A/B pair’s complete claims are all represented by the eleven A items and one B example in the canonical coverage list.

| Source | URL | Full text inspected | Local raw-file SHA-256 |
|---|---|---:|---|
| David Tong, Statistical Field Theory | https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf | 144-page PDF; §§1.2.3, 2.2.1–2.2.4, 3.1–3.3 | 1ee10daf7c49168cbedb32e56bf927ff35df707cd31252d6aab9a5da72816a39 |
| Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems | https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf | 590-page book PDF; Chapter 3 §3.10 and Chapter 8 §§8.1–8.4 | f0b9d564210f487c48e7e8e67e937859626fe96e1d0dc119d37a33bbc0d88d4e |
| Hugo Touchette, The large deviation approach to statistical mechanics | https://arxiv.org/pdf/0804.0327 | 95-page review; §§V.B–V.F | 60929ffd10c0b768881a980c0a2a2330c5e30e65ca4d99e2a370c6fde674e272 |
| MIT OpenCourseWare, 2.154 lecture notes | https://ocw.mit.edu/courses/2-154-maneuvering-and-control-of-surface-and-underwater-vehicles-13-49-fall-2004/2609f8b1bdebe4566891080afe007f51_1349_notes.pdf | 152-page PDF; §§25.1.4–25.1.5 | 4ab8a631437257ef8fe3ecae1ee17fce1b647c477519677249aa1282a0d6655d |
| NIST Digital Library of Mathematical Functions, §4.18 | https://dlmf.nist.gov/4.18 | Full HTML section; §§4.18.1 and 4.18.3 | 30457e4f2d5defb30073210c692c8c27ddd04ad1f1d0eb1971dbd93d9b4f91e8 |

source-fetch-check --stamp is recorded after running it against this batch’s coverage file. No cited-source retrieval failed during the full-text reading, so no candidate was dropped or sent to source_resolution recovery.

## Supplier checks and physical conventions

The exact published finite-quadratic Gaussian statement and proof were inspected before authoring the Gaussian carriers. It assumes ACω, positive inverse temperature and a symmetric positive-definite precision; this batch specializes to dimensionless coordinates and β=1, and never uses the singular full-space massless torus as a normalized Gaussian. Local statements distinguish dimensionless lattice parameters from a physical conversion using a declared field unit and temperature.

The current batch-86 and batch-88 page carriers were inspected as page context. Their page edges are marked verified in the cross-batch array to record that limited interface check; the Gaussian proofs do not rely on those pages for any mathematical step. Imported mathematics used in the new local arguments was checked against the import receipt and pinned root supplier snapshots before writing.

## Checks and remaining authoring status

## Scoped check receipts

- The assigned-pair item dependency graph was recomputed from the final manifest: 11 items, no cycles or level errors; levels are 0–4 as listed above.
- Content policy checked all 12 scoped items: 0 errors, 0 warnings.
- KaTeX rendercheck checked 12 items and both pages: pass, 14 files.
- Proof layout checked all 12 changed items: 0 defects across 30 proof steps.
- Strict proof-contract validation checked all 9 proof-bearing items: 0 errors, 0 warnings.
- Step precheck checked all 9 proof-bearing items: 0 failures.
- Scoped depcheck checked the 12 items and their prerequisite closure through 962 items and 409 pages: pass, no warning.
- Coverage checklist checked 66 harvested source results: 0 errors and one documented low-yield advisory, explained in the source-reading section.
- Source-fetch-check found all 5 cited full-text sources stamped and resolved.
- Current local Step 1 records are closed ready for all 12 assigned items. Their dependency lists are the current frontmatter suppliers; no owner flag was used. This is authoring readiness only, not independent proof acceptance.

The full-run item-dependency-level check remains blocked by other unfinished manifests whose inventories are empty: emg-fx13, emg-fx13-examples, qftx-chern-simons-bf-gravity, qftx-chern-simons-bf-gravity-examples, qftx-kz-chiral-interface, qftx-kz-chiral-interface-examples, qftx-hall-bps-wall-crossing, qftx-hall-bps-wall-crossing-examples, qftx-categorified-line-operators, qftx-categorified-line-operators-examples, csm-frontier-inverse-gibbs, csm-frontier-inverse-gibbs-examples, csm-frontier-planar-critical-point, csm-frontier-planar-critical-point-examples, csm-frontier-rare-event-numerics, csm-frontier-rare-event-numerics-examples, tgrx-research-boundaries, and tgrx-research-boundaries-examples. None is in batch 89.

The run-wide batch-dependency-level check reports that the shared snapshot is stale after batch 89’s final manifest was populated. The assigned-pair item graph itself is valid. The shared batch-dependency-levels file and all other batches were left untouched for the owner to recompute at the drained run join.
