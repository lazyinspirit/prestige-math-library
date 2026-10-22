# Batch 119 — collapse ray tracing and greybody separation

## Design and current plan comparison

The assigned design section and the two current plan pages agree on A/B IDs, titles, mathematics library/category, order 935/936, the A page's tgr-mhs02 and tgr-mhs03 prerequisites, and the B-to-A prerequisite. The run's planned manifest was the expected empty scaffold before this batch's authoring; its final item inventory is recorded below. There is no design-versus-plan-spec conflict for this pair. No current r2 owner authoring direction file was present; the assigned r2-beta-119.task.md directs this pair to the same design section.

The delivered inventory is def-tgrx-exponential-ray-channel, prop-tgrx-collapse-channel-spectrum, and ex-tgrx-greybody-nonplanck. Their direct logical suppliers and in-batch levels are recorded in the item carriers and contracts. The A definition has no in-run supplier (level 0); the proposition uses the definition (level 1); the B example uses the proposition (level 2). Batch 119 remains at dependency level 0, matching the current batch-level evidence: it requires no other in-run batch.

The mathematical proof inputs inspected were lem-tgr-exponential-current and lem-tgr-thermal-contour-spectrum, including their complete current Statements, Facts, and Proofs. Both are published mathematical carriers in this physics workspace, with the actual inspected proofs available. The former assumes Countable Choice and proves the positive-type Fock current, exponential test-coordinate pullback, and its lower-boundary two-point covariance. The latter also assumes Countable Choice and proves the Fourier spectrum and detailed-balance formula by its full contour and distributional argument. Their status labels were not treated as proof; the local arguments cite their exact interfaces. The root mathematical def-countable-choice, Fock construction/CCR, change-of-variables, and exponential/MVT suppliers are also explicit mathematical dependencies. No full Choice assumption is used.

The earlier published pages tgr-mhs02 and tgr-mhs03 remain the page-level prerequisites specified in the plan. The actual logical proof suppliers are the inspected Fock current and contour-spectrum items on tgr-mhs02; no statement or proof from tgr-mhs03 is used as a premise. The page-level requirement is retained unchanged.

## Mathematical clarification to the design proof route

The proposed route says that “a varying Gamma does not preserve a common-temperature Planck law.” At one fixed width, the sentence is exactly true in this algebraic model: since every positive-frequency Planck occupation is positive, Gamma(omega)n_theta(omega)=n_theta(omega) forces Gamma(omega)=1 pointwise. Read as a claim that any varying Gamma destroys every Planck form, it is too broad: for theta > 0, the nonconstant Gamma*(omega) = 1/(exp(theta*omega)+1) maps n_theta(omega) exactly to n_(2 theta)(omega). The proposition proves both claims. The planned B example is retained: its values Gamma(omega_1)=1, Gamma(omega_2)=0 make an output that cannot equal any finite positive-width Planck occupation. This is a resolved wording/math clarification, not an unresolved prerequisite.

The design's “Gaussian” descriptor is made explicit as the Fock-vacuum Wick rule on real test functions, and proved from the supplied Fock creation/annihilation operators and CCR. All later claims use only the two-point covariance.

## Source reading and dispositions

Two independent complete full-text treatments were inspected for the A page:

- Ted Jacobson, [Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect](https://arxiv.org/pdf/gr-qc/0308048), complete 59-page lecture notes, §§6.2.1–6.2.2, equations (6.2)–(6.26). Read the collapse assumptions and ray-packet split, the exponential proper-time relation in (6.21), and the thermal occupation/greybody factor in (6.25)–(6.26). Harvested results are recorded per item in the coverage file. The source's four-dimensional packet transmission probability is not identified with the local algebraic channel transmissivity.
- Stefan Hollands and Robert M. Wald, [Quantum Fields in Curved Spacetime](https://arxiv.org/pdf/1401.2026), complete 77-page review, §2.3(c), equations (52)–(60). Read the complete collapse subsection, including its Hadamard and asymptotic-ground-state assumptions, exponential coordinate relation, and equation (56) with its absorption amplitude. The local one-dimensional proofs are independent of that four-dimensional derivation.

The B notch-filter example is constructed from the proposition and uses no harvested empirical result. The actual command node tools/physics-support/source-fetch-check.mjs --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-119.coverage.json --stamp exited successfully: 2/2 full-text PDFs were newly stamped, with one successful fetch attempt per URL and no retries or drops. Jacobson's PDF was 683,877 bytes, 59 pages, SHA256 prefix 68f722c6a8218839; Hollands–Wald's PDF was 561,777 bytes, 77 pages, SHA256 prefix 175e5e2741add92d. The current stamps and exact attempt times are in the coverage file.

## Cross-batch interface

The incoming page prerequisites tgr-mhs02 and tgr-mhs03 are published external context, not current-run batch edges. Item dependencies inside this pair are same-batch edges. The current run's batch 120 consumer tgrx-hawking-approximation is planned to use the A page and its channel/thermal suppliers; because that consumer belongs to batch 120, its outgoing edge is not placed in this batch-119 consumer-owned dependency file. Batch 120 owns and reviews that row. Accordingly, this batch's cross-batch dependency input is the required empty JSON array.

## Scoped completion record

Item inventories, dependency roles/levels, A/B frontmatter, proof contracts, source coverage, readiness records, and cross-batch input are kept consistent with the current batch manifest. Readiness records mean authoring prerequisites are present/current; they are not independent proof acceptance.

## Scoped checks

- Precheck: 3 assigned items, 0 failures.
- Proof layout: 3 items, 9 proof steps, 0 defects.
- Rendercheck: 5 assigned item/page files, 0 errors or warnings; the channel TikZ diagram renders.
- Strict proof contract: 3 assigned items checked, 0 errors and 0 warnings; every numbered step, supplier excerpt, and standard boundary disposition is mapped.
- Content policy: 3 assigned items, 0 errors or warnings.
- Content policy manifest-only authored check: 3 items, 0 errors or warnings.
- Scoped depcheck: 3 assigned items and their selected prerequisite/page-cycle closure (1,315 items, 252 pages), 0 errors or warnings.
- Source fetch check: 2/2 full-text sources fetch-verified, 0 drops.
- Scoped item dependency levels: definition 0, proposition 1, example 2; no cycles or errors.
- Final Step 1 records were rechecked through `loadStep1Record` and `step1Decision`: all three assigned items are current and `ready`, with their exact direct dependencies recorded.
- Manifest/item synchronization check: all three manifest item metadata records and statement excerpts agree with their final carriers; A/B page prerequisites and placements match the manifest.
- The current read-only run graph computes 129 batches, maximum level 5, batch 119 at level 0 with no requirements, and batch 120 at level 1 requiring batch 119. Its current input hash is f61bc9674e1c70d65987d3a72755a22fa279b0b043041cbebd4d31caa8e6bb5e.

The final run-wide batch-dependency-levels check reports the stored scheduling snapshot stale after the authored manifest changed. The recomputed batch-119 and batch-120 rows above are unchanged; the shared run-level file is owner-managed and was left untouched for the drained construction join to refresh. This is not a missing mathematical prerequisite for the three assigned items.

The proof-contract JSON contains exactly the three assigned items; each entry records its actual numbered derivations, labelled inputs, supplier excerpts, boundary cases, and local risk review. The proof-contract coverage CLI is run-wide and cannot select batch 119; it was not run over the other active batch owners' items.
