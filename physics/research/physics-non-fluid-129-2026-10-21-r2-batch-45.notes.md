# Batch 45 notes — Scattering channels, stationary resolvents and time delay

## Plan and design comparison

The run-specific owner-authoring-direction file was absent. The assigned design in the frontier-expansion plan and its complete prose scaffold/inventory agrees with the plan-spec page IDs, title, order, category, library, companions, and three A-page prerequisites. The plan-spec item arrays are empty placeholders; the detailed inventory carries four planned A items and two planned B items.

Two local A-page prerequisites were added before their consumers: the definition of continued resolvent matrix-element poles, and a fully proved Gaussian positive-energy resolvent continuation. The assigned four A items and two B items are retained. The A page has six items and the B page two, both below the 100-item cap. There is no substantive plan conflict or weakened claim.

The design's cautions remain explicit: ordinary and Dollard Coulomb promises stay in their existing homes; no Cook estimate is applied to unscreened Coulomb; Cook existence alone does not imply completeness; the stationary formula is restricted to positive energy; zero threshold behavior, long-range modifiers, rearrangement channels, and resonance expansions are separate regimes. The Wigner–Smith theorem is finite-channel and uses energy-independent channel bases; energy-dependent basis changes add derivative terms. No exact exponential-survival claim is made from a pole.

## Item inventory, dependencies and levels

Dependency levels are zero without in-run suppliers and otherwise one plus the maximum supplier level. The manifest places suppliers before consumers.

| Item | Page | Level | In-run suppliers |
|---|---|---:|---|
| def-nrqmx-scattering-channel-data | A | 0 | — |
| def-nrqmx-resonance-matrix-element-poles | A | 0 | — |
| lem-nrqmx-gaussian-resolvent-continuation | A | 1 | def-nrqmx-resonance-matrix-element-poles |
| thm-nrqmx-short-range-scattering-completeness | A | 1 | def-nrqmx-scattering-channel-data |
| thm-nrqmx-finite-channel-wigner-smith | A | 1 | def-nrqmx-scattering-channel-data |
| cex-nrqmx-cook-not-completeness | B | 1 | def-nrqmx-scattering-channel-data |
| thm-nrqmx-rank-one-resonance-continuation | A | 2 | def-nrqmx-resonance-matrix-element-poles; lem-nrqmx-gaussian-resolvent-continuation; thm-nrqmx-rank-one-resolvent (batch 44) |
| ex-nrqmx-single-phase-time-delay | B | 2 | thm-nrqmx-finite-channel-wigner-smith |

The run dependency-level record places batch 45 at level 2 after batch 44 (level 1). The required page nrqmx-form-spectral-methods has six A-page item carriers; current loadStep1Record/step1Decision checks returned hash-current ready records for all six. Its draft page status is not a readiness gap. The exact page edge is verified in the cross-batch dependency array.

The rank-one resonance theorem consumes thm-nrqmx-rank-one-resolvent at the exact current interface: AC, self-adjoint lower-semibounded H0, g in the Hilbert space, real lambda, first-variable-linear inner product, Pg f = <f,g>g, Hlambda on D(H0), the convention R0(z)=(H0-zI)^-1, and the stated denominator/resolvent identity. The complete supplier proof and its current hash-bound Step 1 ready record were inspected. The item edge is verified as a scoped interface/readiness check, not independent proof approval.

The two other A-page requirements, qm-math-controlled-dynamics and unbounded-self-adjoint-operators-and-stones-theorem, are outside this run. The compact-support completeness and stationary/dynamical items used by the local theorem are published carriers outside this run; their full current statements and proofs were inspected. They are not represented as cross-batch rows.

## Conventions and scope

The Hilbert inner product is linear in its first variable. Resolvents use (H-zI)^-1. The short-range stationary theorem fixes the Fourier normalization (2 pi)^(-3/2), the energy transform E^(1/4)/sqrt(2), the 4 pi surface measure on S2, the outgoing local boundary value, and the interaction-ball adjoint. Its proof checks the exact sign and normalization against the published stationary/dynamical supplier.

The compact-support item states V as a real L-infinity function vanishing almost everywhere outside a compact set, with H0=-Delta and H=H0+MV on H2. It records the scaled convention hbar^2/(2m)=1; when length is dimensional, E and V have units L^-2 and k has units L^-1. The stationary formula is for E>0 only.

The Gaussian continuation defines an explicit horizontal contour and matches the upper-half-plane resolvent convention. The rank-one resonance result is conditional on the exact rank-one resolvent interface, verifies the nonzero numerator at the Gaussian zeros, gives the simple-zero residue, and proves that a lower-half-plane continuation pole cannot be a nonreal eigenvalue of a self-adjoint operator. The finite-channel delay statement uses Q=-i hbar S* S' and the incoming/outgoing convention checked against both sources.

The Cook counterexample uses Borel Lebesgue measure on (0,1) explicitly. Its rational-interval Borel sigma-algebra is countably generated, its measure is finite, and the cited L2 separability theorem verifies the separability hypothesis in the A-page channel definition before the direct-sum example is used.

## Source reading, retrieval and disposition

The source coverage and fetch stamps are in research/physics-non-fluid-129-2026-10-21-r2-batch-45.coverage.json. All seven active full-text sources are fetch-verified; each coverage entry records its locator, supported item IDs, and included disposition.

- D. R. Yafaev, Lectures on Scattering Theory, full 24-page PDF. Read Lectures 1–2, including wave operators, completeness, the scattering operator, and the stationary representation. Fetch stamp: 248,826 bytes; SHA16 d569440230c7a6bf.
- M. Gadella and G. Pronko, The Friedrichs Model and its Use in Resonance Phenomena, full 105-page PDF. Read §§1.1–2.1 on continued resolvent matrix elements, the rank-one reduced resolvent, and poles from zeros. Fetch stamp: 779,671 bytes; SHA16 9e9b1967f3f7c18c.
- M. E. Taylor, Introduction to Analysis in Several Variables, full 462-page PDF. Read §3.1 on the Gaussian integral and polar evaluation. Fetch stamp: 1,953,833 bytes; SHA16 2b988fe04c21051a.
- C. Texier, Wigner Time Delay and Related Concepts, full 39-page PDF. Read §§2.2.1 and 2.2.4 on the Wigner–Smith convention, Hermiticity, the trace/determinant identity, and the single-channel phase derivative. Fetch stamp: 1,362,070 bytes; SHA16 fcb430555687bbff.
- H. Haberzettl and R. Workman, Time-Delay in a Multi-Channel Formalism, full four-page paper. Read §§II–III, including the multichannel convention and the correction of a propagated ordering error. Fetch stamp: 91,396 bytes; SHA16 18743fa9b7c8fb31.
- S. Albeverio and P. Kurasov, Singular Perturbations of Differential Operators, full 45-page book preview. Read Theorem 1.1.1 and its proof, printed pp.9–10, for the rank-one resolvent identity. Fetch stamp: 2,372,443 bytes; SHA16 ecd861fb23aae561.
- B. Zwiebach, Quantum Physics III, Chapter 7: Scattering, MIT OpenCourseWare, full 19-page chapter. Read §§7.1 and 7.3 on positive-energy finite-range scattering, the outgoing Green function, and the integral scattering equation. Its Green-function convention is documented as context; the local proof uses the exact H-z resolvent convention of the physics supplier. Fetch stamp: 865,976 bytes; SHA16 91336f5685a8df31.

The Komech full-notes URL listed during source harvesting returned HTTP 502 on the initial full-text fetch and all five permitted recovery retries. The exact attempt times, searches, selected alternative, and per-item argument/dependency records are preserved in the coverage file's source_resolution entry. That endpoint is no longer cited by an item. The Komech publication itself is not declared unavailable or formally dropped; Yafaev and the local complete proofs supply the required definitions and arguments, and the MIT chapter supplies independent finite-range stationary context. No mathematical coverage was waived.

## Cross-batch dependencies

The required JSON array in research/physics-non-fluid-129-2026-10-21-r2-batch-45.cross-batch-dependencies.json has two verified direct edges: the A-page requirement nrqmx-form-spectral-methods from batch 44, and the rank-one resonance theorem's direct item dependency thm-nrqmx-rank-one-resolvent from batch 44. Both records report current readiness and exact scoped interface matches. The within-batch B-to-A page edge is not a cross-batch row. External page requirements and published mathematical inputs outside this run are documented here rather than entered as unsupported review rows.

## Contracts, readiness, and checks

The proof contract is generated from the final numbered arguments in research/physics-non-fluid-129-2026-10-21-r2-batch-45.proof-contracts.json. It includes the exact fact-to-supplier statement excerpts, per-step claims and inputs, all eight standard boundary dispositions, finite-check dispositions, and supplier proof-status notes. Completion records and verified dependency rows do not constitute independent approval.

All eight assigned items now have hash-current `ready` Step 1 records. They were recorded without `--owner`, in supplier-before-consumer order, with their direct dependencies. The rank-one item record names the inspected current batch 44 supplier; no independent proof approval is claimed.

Scoped final checks after the last carrier and manifest refresh:

- `proof-layout.mjs` on all eight changed carriers: 8 items, 22 proof steps, 0 defects.
- Scoped `precheck.mts`: 6 proof-bearing items checked, 0 failing; the two definitions are not proof-bearing.
- Scoped `rendercheck.mjs`: all eight items and both pages passed YAML and KaTeX checks.
- Scoped `content-policy.mjs`: 8 items, 0 errors, 0 warnings.
- Scoped `depcheck.mjs --items-file /tmp/physics-batch45-item-selection.json`: focused checks and prerequisite cycle checks passed; context covered 1,894 items and 294 pages.
- Strict proof-contract check: 8/8 contracts, 0 errors, 0 warnings.
- `manifest-deps.mjs`: 8 items, no missing dependency arrays or errors.
- Scoped dependency levels: 8 items, maximum level 2; levels are `[0, 0, 1, 1, 1, 2, 1, 2]` in manifest order.
- `source-fetch-check --stamp`: 9/9 page-source records fetch-verified; 0 newly stamped and 0 documented drops. There are seven unique active full-text sources across the nine page-source records.
- `coverage-checklist.mjs`: 2 pages, 14 harvested results, 0 errors, 0 warnings.
- `manifest-integrity.mjs --run`: 258 pages owed, 258 present, no scope drift.
- A post-record `loadStep1Record`/`step1Decision` inspection reports all eight assigned records `ready` and hash-current.

Run-wide checks remain blocked by unrelated manifests outside this assignment: item dependency-level validation finds 44 empty scaffold inventories and 11 bare-string items without IDs; batch dependency-level validation encounters `Duplicate item undefined` in batch 89's bare-string inventory; run-wide proof-contract coverage and `physics-check` stop at the empty `qsmx-quantum-double` inventory in batch 105. The assigned batch's scoped checks pass. These shared manifests and run state were left unchanged for the owner.
