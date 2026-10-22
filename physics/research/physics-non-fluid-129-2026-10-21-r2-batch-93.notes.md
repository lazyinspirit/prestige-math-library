# Batch 93 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `93`  
Page pair: `csm-frontier-kinetic-scaling` / `csm-frontier-kinetic-scaling-examples`

## Scope and plan reconciliation

The assigned design is “Kinetic relaxation, diffusive scaling and entropy dissipation,” at plan track lines 139–186 and detailed scaffold lines 291–315. It reserves three A items: `def-csm-frontier-two-velocity-scaling`, `lem-csm-frontier-two-velocity-contraction`, and `thm-csm-frontier-two-velocity-heat-limit`, plus B example `ex-csm-frontier-distinct-scaling-limits`. The design fixes the periodic two-speed equation, per-state switching convention, telegraph balance, quadratic dissipation, well-prepared data, and $D=c^2/(2\lambda)$; it disclaims a hard-sphere Boltzmann derivation, molecular chaos, and a general hydrodynamic limit.

The run-specific owner direction `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was absent, so the detailed design and controlling plan were followed.

The matching `plan-spec.json` page metadata agrees on IDs, titles, order, category, library, companion links, and required pages. Its two page `items` arrays are empty placeholders, while the controlling detailed design names the four reserved items above. This inventory conflict is resolved by the design and assigned task, which control this dispatch. The assigned instructions also require missing mathematical definitions to be added locally. The A page therefore adds `def-csm-frontier-boltzmann-grad-scaling` as a complete local convention because no exact local carrier defined the periodic dimensionless hard-sphere scaling used in the comparison; it asserts no hard-sphere flow theorem or Boltzmann limit. No shared plan or plan-spec file was edited.

The page pair preserves its three planned page requirements: A requires `csm-collision-transport`, `csm-mean-field-hierarchy`, and `csm-frontier-probability-interfaces`; B requires A and `csm-mean-field-hierarchy`. The page cap is respected (four A items and one B example).

## Inventory, dependencies and readiness

| Item | Page | Level | Direct logical suppliers |
|---|---|---:|---|
| `def-csm-frontier-two-velocity-scaling` | A | 0 | `def-l-p-space-as-a-quotient-by-null-functions` |
| `def-csm-frontier-boltzmann-grad-scaling` | A | 0 | none |
| `lem-csm-frontier-two-velocity-contraction` | A | 1 | two-velocity definition; Fourier basis/Parseval; `def-countable-choice`; FTC; real matrix flow/exponential; Euclidean completeness, Cauchy–Schwarz and operator norm |
| `thm-csm-frontier-two-velocity-heat-limit` | A | 2 | two-velocity definition; contraction lemma; Fourier basis/Parseval; `def-countable-choice`; FTC |
| `ex-csm-frontier-distinct-scaling-limits` | B | 3 | published mean-field definition; both local scaling definitions; contraction lemma; heat-limit theorem; `def-countable-choice` |

These are in-run item levels: level zero has no in-run suppliers; every other level is one plus the greatest direct in-run supplier level. The batch dependency file puts batch 93 at level 1 because it depends on batch 85. The run graph has no cycle for this batch. After final carrier edits, the local item-level checker and batch-level checker were run; their exact results are recorded below.

The required `csm-frontier-probability-interfaces` page is the in-run batch-85 page edge in `batch-93.cross-batch-dependencies.json`. Its current page and all eight listed item carriers were inspected. `loadStep1Record` and `step1Decision` report current, closed, ready records for all eight items. The page itself is draft; that status is not a prerequisite gap. The edge is `verified` only for the declared current page/interface input, not for independent proof acceptance. Its mathematical contents are not premises in the new two-velocity proofs. `csm-collision-transport` and `csm-mean-field-hierarchy` are external published page requirements; their live pages and relevant suppliers were inspected.

The mean-field supplier `def-csm-dk-periodic-mean-field-model` states a smooth even periodic potential, Hamiltonian convention, finite-$N$ $1/N$ coupling, and its dimensionless force law. Its associated Dobrushin/Wasserstein result was read with its own smooth-force and preparation hypotheses and is not used to prove a hard-sphere or two-velocity limit. The cutoff collision page and its selected cutoff model explicitly do not supply a Boltzmann–Grad derivation or general hydrodynamic limit. Those scopes remain unchanged.

## Proof and model decisions

- The two-velocity equation is treated as the exact linear model specified in its local definition. The switching rate is $\lambda/\epsilon^2$ from either state, so the difference mode relaxes at $2\lambda/\epsilon^2$ and the resulting diffusivity is $c^2/(2\lambda)$. Hillen–Swan use a $\mu/2$ rate in each direction; the parameter correspondence is $\mu=2\lambda$. The source convention and factor are preserved explicitly.
- The contraction lemma proves smooth global solvability from Fourier mode ODEs, positivity by positive transport/collision splitting and $L^2$ closure, conservation from the zero mode, and the exact quadratic norm dissipation identity. Complex Fourier modes are realified as $\mathbb R^4$ and solved using the inspected real matrix-flow supplier; operator-series estimates on that complete Euclidean space justify the splitting limit. The collision matrix has eigenvalues $1$ and $e^{-2\alpha h}$, giving its explicit norm bound.
- The heat theorem gives an exact Fourier proof for the stated periodic problem and well-prepared smooth data. It proves fixed-mode convergence, then uses the lemma's contraction to control the high-frequency pair tail uniformly in $\epsilon$ and time. It does not use a formal expansion as a proof of the compact-time theorem.
- The example's mean-field momentum and Hamiltonian conservation are consequences of the declared smooth Hamiltonian equations and odd force. Its hard-sphere conservation calculation is conditional on an admissible piecewise trajectory with isolated binary collisions. It computes the reflection in center/relative coordinates and claims no existence or global trajectory result.
- The displayed $L^2$ dissipation is a mathematical quadratic functional identity, not thermodynamic entropy. No experiments, observed measurements, statistical inference, or empirical precision are asserted.

## Supplier and source disposition

The source coverage records the full URLs, locators, supported item claims, and dispositions. The A page has two independent full-text treatments: Hillen–Swan's complete author-hosted Lecture Notes in Mathematics chapter (including a book/lecture-note treatment) and Hillen–Othmer's full SIAM paper. Codling–Plank–Benhamou supplies an independent review treatment for the two-state model; Gallagher–Saint-Raymond–Texier supplies the hard-sphere convention and scaling. Hillen–Swan's §4.2 is explicitly formal. Hillen–Othmer's Theorem 4.1 has different domain, regularity, expansion, and initial-time conditions. Neither is represented as proving this batch's exact theorem; the local proof supplies that argument.

The original FAMU-hosted Codling PDF route failed TLS validation; its HTTP retry returned 404. The alternative PMC full-text article was successfully retrieved and the complete article HTML plus relevant §§2.7–2.8 were inspected. This is recorded as `resolved-via-alternative`, not dropped. A separate optional Banasiak–Mika candidate was not in the controlling source list and was not used: the Kyoto route returned an HTML landing page, CiteSeerX routes returned 404/cache misses, and Springer/ResearchGate routes were inaccessible. Since the assigned claims have complete local proofs and the planned independent sources were recovered, that optional candidate is not treated as a missing prerequisite or as evidence.

The legacy `retained` source slot and `mft` source-map entry in the frontier source dossier cover macroscopic fluctuation theory/SSEP action material. They do not support this telegraph model or its heat-limit theorem and are not cited for those claims. The historical entries were left unchanged.

## Scoped checks

Results below are from the final carriers after the last proof edits. They record structure and evidence only; they are not independent mathematical approval.

- Scoped item dependency-level recomputation on batch 93: **5 items, 0 errors; levels 0, 0, 1, 2, 3** as in the inventory. The full-run `item-dependency-levels.mjs check --run` reports **126 empty scaffold inventories on other pages**; batch 93 contributes none.
- Current read-only batch graph recomputation: **129 batches, maximum level 5; batch 93 is level 1 and requires batch 85**. `batch-dependency-levels.mjs check --run` reports the saved run-wide dependency-level input as stale after manifest authoring. The shared dependency-level file was left unchanged for the owner to refresh after the full run is drained.
- `source-fetch-check --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-93.coverage.json --stamp`: **7/7 sources fetch-verified, 7/7 resolved, 0 drops; 0 newly stamped on the final check**.
- Strict `proof-contract.mjs` on the five assigned items: **5/5 checked, 0 errors, 0 warnings**.
- `proof-layout.mjs` on the five explicitly changed items: **5 items, 17 steps, 0 defects**.
- `content-policy.mjs` on the batch manifest: **5 scoped items, 0 errors, 0 warnings**.
- `depcheck.mjs --items-file /tmp/physics-b93-item-ids.json`: **0 errors, 0 warnings**; its prerequisite closure checks covered 1,351 items and 280 pages.
- `rendercheck.mjs` on the five items and two pages: **7 files checked, 0 errors, 0 warnings**.

All five assigned readiness records are written after the final item, page placement, and contract updates. A `ready` authoring record means the stated prerequisites and carriers are present and current; it is not an independent review verdict.
