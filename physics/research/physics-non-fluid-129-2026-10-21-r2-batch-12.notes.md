# Batch 12 authoring notes — Compatible finite elements, constraints and coercive error control

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Pair: `emx-compatible-finite-elements` / `emx-compatible-finite-elements-examples`

## Scope and plan comparison

The run-specific owner authoring-direction file was absent. I read the full assigned design section and compared both pages with `research/plan-spec.json`. Page IDs, A/B relation, title, `classical-electromagnetism` category, `physics` library, declared prerequisites, and order 721/722 agree. The plan-spec rows have empty item arrays while the design's exact inventory supplies four A items and two B items; this is normal planning scaffolding, not an item-level design conflict. No page-level conflict was found. Only this pair was authored.

The design's scope and caveats are retained: a finite PEC Whitney/Galerkin Maxwell model; exact semidiscrete energy and incidence constraints; a positive-shift Lax–Milgram/Galerkin estimate; distinct absolute and PEC-relative zero-mode statements; a raw-moment domain counterexample; and a real-frequency resonance example. No continuum existence is inferred from the finite system, no arbitrary H(curl) edge trace is asserted, and no experimental result is reported.

## Inventory, dependencies and levels

The assigned inventory is complete in the page manifest and carrier homes. Levels were calculated against the current batch 4, 11 and 12 item rows. The scoped graph has no cycles or level errors.

| Item | Home | Direct item dependencies | Level |
|---|---|---|---:|
| `def-emx-whitney-semidescretization` | A | `def-countable-choice`; `def-em-si-conventions`; `def-emx-finite-energy-boundary-model`; `def-emx-matrix-maxwell-system`; `def-na-hcurl-space`; `def-na-hdiv-space`; `def-na-lowest-order-whitney-de-rham-spaces`; `def-na-zero-tangential-hcurl`; `def-sobolev-space-wkp-and-its-norm`; `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes` | 1 |
| `pthm-emx-discrete-maxwell-balance` | A | `def-countable-choice`; `def-emx-whitney-semidescretization`; `thm-emx-matrix-energy-constraints` | 2 |
| `pthm-emx-coercive-maxwell-galerkin` | A | `def-countable-choice`; `def-emx-finite-energy-boundary-model`; `def-emx-whitney-semidescretization`; `def-na-hcurl-space`; `def-na-lowest-order-whitney-de-rham-spaces`; `def-na-zero-tangential-hcurl`; `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`; `thm-lax-milgram`; `thm-na-uniformly-bounded-commuting-cochain-projection` | 2 |
| `pthm-emx-topological-zero-modes` | A | `def-axiom-of-choice`; `def-countable-choice`; `def-dependent-choice`; `def-emx-whitney-semidescretization`; `def-na-lowest-order-whitney-de-rham-spaces`; `lem-na-full-dirichlet-hcurl-regular-decomposition`; `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec`; `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes`; `thm-na-uniformly-bounded-commuting-cochain-projection` | 2 |
| `cex-emx-edge-moment-domain-failure` | B | `def-emx-whitney-semidescretization`; `def-na-hcurl-space`; `def-na-lowest-order-whitney-de-rham-spaces`; `thm-na-uniformly-bounded-commuting-cochain-projection` | 2 |
| `ex-emx-resonance-outside-coercivity` | B | `def-na-hcurl-space`; `def-na-zero-tangential-hcurl`; `pthm-em-rectangular-mode-candidates`; `pthm-emx-coercive-maxwell-galerkin` | 3 |

Batch 12 is run dependency level 1, with batch 4 and 11 as prerequisites. The item-level rule is zero without an in-run supplier and one plus the maximum direct in-run supplier level otherwise. The added H(div) and Whitney-space references are published mathematics suppliers and do not change the in-run levels.

## Prerequisite interface review

The current batch 4 record for `def-emx-finite-energy-boundary-model`, and batch 11 records for `def-emx-matrix-maxwell-system` and `thm-emx-matrix-energy-constraints`, are closed `ready` records when checked using `loadStep1Record` and `step1Decision`. I read their current statements and complete proofs. The matrix energy theorem remains draft with `verification.precheck: pending`, but its full conditional proof and current readiness record supply the exact ODE, energy and constraint interface used here; draft status and pending independent approval are not treated as a missing argument.

The imported mathematical statements and proofs for the real H(curl)/H(div) spaces, Whitney complex and cohomology, commuting projections, full-Dirichlet regular decomposition, discrete compactness, Lax–Milgram, and real L2 Hilbert structure were inspected. The local proofs use the stated real spaces, orientation conventions, boundary closures, choice strength and mesh hypotheses. Directly relevant imported snapshots were checked against `research/math-imports.json`; inspected hashes matched the pinned snapshots. Mathematical originals and imported carriers were left unchanged. The published `em-waveguides-and-cavities` page and exact rectangular TM mode supplier were checked for the B-page example.

## Authoring decisions and qualifications

- The semidiscretization defines the PEC spaces by graph closure, constructs the gradient inclusion, specifies the face/cell moment bases and units, and states the static coefficient fields as model data. The inverse permeability is explicitly measurable and essentially bounded. The discrete magnetic field is only L2; no H(curl) trace is used.
- PEC edge and scalar subspaces are handled as finite-dimensional subspaces of the full Whitney spaces; no unproved identification of their degrees of freedom with free boundary-edge traces is required. Coordinate matrices are defined in dimensionless bases and satisfy `DC=CG=0` by the full complex identities.
- The coercive theorem uses the fixed length-scaled graph norm `||v||^2 + ell_0^2 ||curl v||^2`, so its coercivity and continuity constants have matching units. The commuting projection is used only to show density/approximation. The theorem assumes a positive real shift and makes no real-frequency uniqueness claim.
- The topological item states the full-complex absolute Betti count separately from the relative PEC family result. The relative estimate is on the orthogonal complement of the full curl kernel; nonzero relative harmonic modes obstruct the estimate on the gradient-orthogonal space. The exact stronger choice, regular-decomposition and relative-projection hypotheses are included.
- The edge-sampling counterexample uses a closed segment contained in the interior of the open domain. Two representatives of the zero H(curl) class give different line integrals there. It does not deny polynomial Whitney moments or smoothed cochain projections.
- The cavity example verifies the displayed smooth TM field in the closure-defined PEC space by an explicit cutoff argument and exhibits a nonzero weak kernel at the computed real resonance. This is consistent with the positive-shift result's `s>0` assumption.

## Source reading and harvesting

Three independent full-text sources were retrieved and inspected. Long Chen's full ten-page lecture notes satisfy the full-lecture treatment requirement; the Hiptmair and Arnold–Falk–Winther papers provide independent treatments. Exact locators, harvested headings, item destinations and dispositions are in `physics-non-fluid-129-2026-10-21-r2-batch-12.coverage.json` and the reading log in `physics-non-fluid-129-2026-10-21-r2-batch-12-sources/source-reading.md`.

- Long Chen, *Finite Element Methods for Maxwell Equations*: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf — full PDF read; §§1.1–1.3 on Nedelec/RT0 moments, commuting identities and moment regularity; §2 on PEC weak form and constrained error analysis; §3 on the full de Rham complex. Its saddle-point estimate is recorded out of scope for the positive-shift proof.
- Ralf Hiptmair, *Finite elements in computational electromagnetism*: https://people.math.ethz.ch/~hiptmair/Courses/CEM/HIP02.pdf — full 103-page author PDF retrieved; §§2.3–2.4, 3.1–3.3, 3.5 and 5.1–5.2 read in full for weak material forms, graph spaces, incidence/Whitney assembly, moment domains and resonance/indefinite error control. The real-frequency inf-sup theory is not used as a coercive proof.
- Douglas N. Arnold, Richard S. Falk and Ragnar Winther, *Finite element exterior calculus: from Hodge theory to numerical stability*: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf — full 70-page article retrieved; §§3.3–3.5, 5.2–5.6 and 6.1–6.2 read for bounded cochain projections, harmonic spaces, degrees of freedom, smoothed projections, full Whitney cohomology and the distinct essential-boundary complex.

All three sources have current full-body fetch stamps and were confirmed by `source-fetch-check`. There were no retrieval failures, no recovery retries and no dropped results; `source_resolution` is an empty array.

## Cross-batch dependencies and scoped checks

`physics-non-fluid-129-2026-10-21-r2-batch-12.cross-batch-dependencies.json` is a JSON array with five verified rows: the A-page edges to batch 4/11, and the three exact in-run item edges from this batch to their batch 4/11 suppliers. Each row records the scoped interface comparison; `verified` is not independent proof approval. External mathematical prerequisites and cross-batch interface observations are documented above rather than represented as unsupported rows.

Final scoped checks:

- `author-check.mts` for batch 12 passed: five proof-bearing items passed direct precheck; KaTeX/YAML rendercheck passed all six items and both pages (8 files); content policy passed all six items with zero warnings/errors; strict proof-contract validation passed 6/6 with zero warnings/errors.
- Explicit `proof-layout.mjs` over all six changed items: 16 numbered steps, zero defects.
- Scoped `depcheck` passed the six item checks and their full prerequisite closure: 2,106 dependency-context items and 374 pages, zero errors and warnings.
- `coverage-checklist --require-destination`: 1 page, 19 harvested results, zero errors and warnings. `source-fetch-check` confirmed all 3/3 sources fetch-verified with zero documented drops.
- Scoped dependency-level calculation over batches 4, 11 and 12: levels 1, 2, 2, 2, 2 and 3 as listed above, zero graph errors.
- The run-wide `batch-dependency-levels.mjs check` reports a stale shared schedule. The shared scheduling file was not changed. Run-wide `item-dependency-levels.mjs check` reports 122 empty scaffold inventories and two unrelated level mismatches (`ex-gr-fx14-1` and `lem-nrqmx-finite-symplectic-implementers`); it reports no batch-12 item error. The assigned batch's scoped graph above is clean.

Step 1 records are the final authoring-readiness record only; independent review and later gates remain separate.

## Step 1 readiness records

`step1-decisions.mjs record` wrote non-owner `ready` records with each item's exact direct dependency IDs for all six assigned items: `def-emx-whitney-semidescretization`, `pthm-emx-discrete-maxwell-balance`, `pthm-emx-coercive-maxwell-galerkin`, `pthm-emx-topological-zero-modes`, `cex-emx-edge-moment-domain-failure`, and `ex-emx-resonance-outside-coercivity`. The records are `research/physics-non-fluid-129-2026-10-21-r2-step1-<item-id>.json`. A final `loadStep1Record`/`step1Decision` audit found all six assigned records closed and current; the three in-run suppliers from batches 4 and 11 also remain closed ready. These records document authoring readiness, not independent proof acceptance.
