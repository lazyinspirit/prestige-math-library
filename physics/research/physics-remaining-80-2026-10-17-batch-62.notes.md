# Batch 62 — stationary thermal geometric data

Run: `physics-remaining-80-2026-10-17`  
Pair: `tgr-et01` / `tgr-et01-examples`  
Category: `thermodynamics-and-general-relativity-mathematics`  
Owner: beta

## Scope, plan conflicts, and inventory

The complete design at `research/plan-thermodynamics-and-general-relativity-track.md` §“Stationary thermal geometric data” (L358 onward) reserves six A items and one B example. Its prose lists only `countability-and-uncountability` and `gr-connections-and-free-fall` as earlier prerequisites, while its embedded reservation says `requires: []`. The current `research/plan-spec.json` and this run's batch manifest both list six prerequisites: those two pages plus `sr-observer-measurements`, `product-measures-and-the-fubini-tonelli-theorems`, `euclidean-surface-measure-divergence-and-green-identities`, and `measures-and-their-basic-properties`. The current plan controls; no shared plan file was edited.

The design reservation's six A IDs also differ from the nine A records in `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`. The six reserved claims are retained. Three required same-page carriers complete the proof route: a canonical future massive shell measure, its tetrad-invariance lemma, and the Jüttner partition/moments theorem. They are necessary to define a coordinate-independent shell integral and prove its normalization and moments; they do not add a second pair. The A page has nine items and the B page one example, below the 100-item cap.

The original proposed-inventory edge from the curved-spacetime natural-tensor result to `thm-sr-local-congruence-adapted-charts-and-frobenius` was removed. That SR theorem is scoped to affine Minkowski space, so it cannot supply a curved Lorentzian flow/isometry argument. The local isometry lemma instead uses the generic `thm-flow-box-theorem`, the GR Killing-field definition, and the unique metric-selected connection, and proves the local invariance claim directly.

## Page prerequisites and unresolved page-level inputs

Current `plan-spec.json` contains all six prerequisite IDs. The current published files `library/general-relativity/gr-connections-and-free-fall.md` and `library/special-relativity/sr-observer-measurements.md` were read at their current interfaces. The first supplies the unique torsion-free metric-compatible connection and geodesic context. The second fixes observer, tetrad, and congruence terminology; its affine-Minkowski local-congruence theorem is not used as a curved-spacetime supplier.

Four planned mathematical P pages are not current local pages: `countability-and-uncountability`, `product-measures-and-the-fubini-tonelli-theorems`, `euclidean-surface-measure-divergence-and-green-identities`, and `measures-and-their-basic-properties`. Each has `items: []` in `research/plan-spec.json`, and its expected `library/<category>/<id>.md` file is absent. There is no exact page-level statement or proof to inspect, so none is claimed as a proved premise. Their precise page-level gap and the locally available replacement interfaces are recorded in `batch-62.cross-batch-dependencies.json`. The mathematical arguments use the exact current published item carriers directly (Lebesgue/Borel measure, positive-density measure construction, polar coordinates, divergence theorem, sphere area, probability measure, and countable choice); those item proofs do not make the four missing pages current. The proofs are complete conditionally on the current item interfaces, while page readiness remains escalated.

## Item dependencies and in-run level calculation

The input `research/physics-remaining-80-2026-10-17-batch-dependency-levels.json` assigns batch 62 level 0 with no in-run page prerequisites. Final item levels were recomputed from the exact item `deps` in the batch manifest after all edits; out-of-run direct mathematical suppliers do not raise in-run levels.

| Item | Level | In-run item suppliers | Main direct external suppliers |
|---|---:|---|---|
| `def-tgr-stationary-thermal-carriers` | 0 | none | Lorentzian geometry, Levi-Civita connection, GR Killing-field definition and covariant characterization, `def-countable-choice` |
| `def-tgr-future-mass-shell-measure` | 0 | none (`forward_refs` points to its well-definedness lemma) | local tetrads, Lebesgue/Borel and measure definitions, positive-density measure theorem, `ACω` |
| `lem-tgr-isometry-natural-tensor-invariance` | 0 | none | GR Killing-field definition, flow-box theorem, Lie derivative, Levi-Civita uniqueness, curvature definition/tensoriality, mean value theorem |
| `lem-tgr-mass-shell-polynomial-rigidity` | 0 | none | Lorentz basis/inertia, causal classification, time orientation and timelike-cone components |
| `lem-tgr-killing-thermal-normalization` | 1 | stationary carrier | Levi-Civita connection and mean value theorem |
| `lem-tgr-thermal-killing-kinematic-equivalence` | 1 | stationary carrier | GR Killing-field definition and covariant characterization, Levi-Civita connection |
| `lem-tgr-mass-shell-measure-tetrad-invariance` | 1 | future shell measure | tetrad definition/change-of-basis lemma, time orientation and cone components, nonnegative Borel change of variables, `ACω` |
| `thm-tgr-juttner-partition-and-moments` | 2 | future shell measure and its tetrad-invariance lemma | polar coordinates, sphere integral, bounded-domain divergence theorem, differentiation under the integral, dominated convergence, hyperbolic identities, positive-density measure theorem, probability measure, `ACω` |
| `thm-tgr-massive-juttner-stationarity` | 3 | carrier, massive polynomial lemma, shell measure, shell-measure invariance, partition/moments theorem | tetrad existence, Sylvester inertia, Gram–Schmidt, causal/time-orientation definitions, sphere angular formula, mean value theorem, `ACω` |
| `ex-tgr-flrw-no-killing-equilibrium` | 4 | local isometry lemma, mass-shell polynomial lemma, massive Jüttner stationarity theorem | Lorentzian geometry, Levi-Civita connection, curvature definition and coordinate formula, `ACω` |

No item cycle was found. The `forward_refs` from the shell-measure definition identifies the later proof of tetrad independence without making that proof a logical prerequisite of the coordinate definition. The lemma consumes the definition; levels are 0 then 1. In all items, mathematical dependencies have `mathematical-premise` roles, `domain: mathematics`, `library: mathematics`, and no `physical_scope`.

## Supplier interfaces and choice strength

All direct external item files declared by the final manifest exist and are published. The relevant current statements and proofs were checked at the hypotheses used in the Facts blocks. In particular, the GR connection and tetrad existence results use exactly `ACω`; the tetrad-change lemma supplies the Lorentz relation and preservation of future direction; the change-of-variables theorem applies to nonnegative Borel functions under `ACω`; the integration, sphere, and divergence suppliers have the stated nonnegative/measurable, Euclidean-domain, and surface-measure hypotheses. The current supplier statements—not a planned label—are the interfaces used by the conditional proofs.

The only choice principle assumed is countable choice `ACω`, carried by the smooth tangent-bundle and selected measure/integration suppliers and explicitly declared in the items that need it. No arbitrary-index choice is used. Pointwise Lorentz bases are finite-dimensional; no global orthonormal-frame selection is asserted. The imports and other mathematical supplier files were left read-only.

## Sources and retrieval history

Full-text treatments selected for the A page and recorded in `batch-62.coverage.json`:

- Acuña-Cárdenas, Gabarrete, and Sarbach, *An Introduction to the Relativistic Kinetic Theory on Curved Spacetimes*, complete 79-page arXiv text, §§II, III.3, VI.2, VIII. It supports the shell measure/Jüttner construction, collisionless stationarity, and massive/massless FLRW distinction.
- David Tong, *General Relativity*, complete 290-page Cambridge lecture notes, §§2.2.3, 2.3.3, 4.3.1. It supports local flows, tensor pullbacks, tetrads, Killing fields, and the local isometry framework.
- Santiago and Visser, *Tolman-like Temperature Gradients in Stationary Spacetimes*, complete 7-page arXiv text, §§II–V. It supports the selected thermal flow, Tolman normalization, and the distinction between the acceleration relation and full Killing conditions.

The active Sarbach, Tong, and Santiago–Visser URLs were retrieved and source-stamped; the recorded stamps include byte lengths, hashes, PDF kinds, and page counts. Their harvested results and dispositions are itemized in coverage. The full Oxford Chapter X text was inspected in the browser, and an OAPEN full-book alternative was searched, but both routes exhausted the initial attempt plus five retries. The Oxford route has six HTTP 403 outcomes. The OAPEN route has five HTTP 403 outcomes followed by one HTTP 429; the summary text now matches the saved attempt log. Both routes are mechanically dropped with certainty, while their harvested claims remain locally proved and are supported by the three stamped alternatives. Per-item local arguments and exact dependencies remain in each `source_resolution.alternatives` entry; no retrieval history was erased.

## Mathematical claims and qualifications

The carrier fixes signature, regularity, selected congruence, SI units, and the absence of a global-flow/KMS/material-realization claim. The Tolman lemma proves both directions on a connected open domain. The kinematic lemma proves the full decomposition and all four necessary and sufficient conditions; no hypersurface orthogonality is assumed.

The shell-measure definition constructs a positive Borel measure with coordinate density $d^3q/E$ and units $\mathrm{J^2}$; it derives that the tetrad map is onto the future sheet from the shell equation. The tetrad lemma derives $|\det DQ|=E(q')/E(q)$ and proves equality on every Borel shell set. The polynomial lemma proves the massive rigidity and the exact null conformal exception. The Jüttner theorem establishes finite positive Bessel integrals, the probability normalization, and the current/stress moments with $p=nk_BT$; its pressure proof applies the divergence theorem on balls and passes to $\mathbb R^3$ by dominated convergence. The stationarity theorem derives each spherical-cap area from the cited angular surface-measure formula, proves the Liouville equivalence, and shows that the shell normalizer is finite exactly for future timelike inverse temperature. Here $h_{\rm ref}$ is only a declared phase-space unit convention. The B example computes the specified $a(s)=s/L_0$ FLRW curvature, excludes timelike Killing fields on each nonempty open subset, and separately verifies a future-null conformal-Killing branch. None of these mathematical deductions is an experiment, reported observation, statistical inference, or claim that a physical material state exists.

## Readiness and checks

All nine A items, the B example, both pages, coverage, the proof-contract document, and dependency evidence are authored locally. Because the four required mathematical page files remain absent, Step 1 records for all ten items are escalated with those exact missing page IDs and the inspected item suppliers; none is marked ready. When those page carriers become available, their actual statements, hypotheses, proof status and conventions must be checked against the recorded local use before readiness changes.

Scoped checks after the final item edits:

- `author-check.mts physics-remaining-80-2026-10-17 62`: pass. Its precheck passed all 8 proof-bearing items; renderer passed all 12 item/page files; content policy passed all 10 items with 0 errors and warnings; strict proof-contract validation passed 10/10.
- `proof-layout.mjs` on the 10 explicitly changed items: 40 numbered steps, 0 defects.
- Scoped `dependencyLevels([batch62pages])`: 10 items, levels 0–4, 0 errors. The run-level input assigns batch 62 level 0 with no in-run page prerequisites.
- `manifest-deps.mjs` on the batch-62 manifest: 10 item snapshots, 0 missing `deps`, 0 errors.
- `coverage-checklist.mjs`: 1 A-page coverage record, 23 harvested results, 0 errors or warnings.
- `source-fetch-check.mjs --stamp`: 3/5 active sources fetch-verified (0 newly stamped), and 5/5 resolved with the two retrieval drops preserved.
- Ten final `step1-decisions.mjs record` entries: all escalated, owner false, and each includes its exact direct item dependencies plus the page prerequisites examined. The four missing page carriers remain the only current readiness blocker recorded for this pair.

The direct external mathematical supplier items used in the final manifest are all present and published (38 unique item IDs); their actual interfaces, hypotheses and proof status were checked. In-run suppliers remain current draft arguments and are not treated as independently approved. The full run contains other pairs outside this assignment; no whole-run readiness result is inferred from this scoped batch evidence.
