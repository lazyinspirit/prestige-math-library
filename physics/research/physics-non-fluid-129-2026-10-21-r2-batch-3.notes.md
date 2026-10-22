# Batch 3 authoring notes — Metric dependence, flux sectors and constitutive geometry

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `3`  
Assigned pair: `emx-premetric-maxwell` / `emx-premetric-maxwell-examples`

## Plan and design comparison

The current design section and `plan-spec.json` agree on the A/B page IDs, title, category, library, order, companion relation, and required pages. The plan's page item arrays were empty at dispatch. The design sketched three A items and two B examples; the assigned proof obligations need two local mathematical suppliers so the $C^1$ cycle-flux proof does not rely on a smooth-only Stokes theorem. They were added on the A page as `def-emx-continuous-chain-integral` and `lem-emx-c1-stokes-on-standard-3-simplex`, as required for local missing definitions and intermediate results. The A page now has five items and the B page two examples, both below the 100-item cap. No shared plan or imported mathematics was edited.

The design's terse source notation $\rho,J$ was matched against `def-em-polarization-magnetization`: the material branch uses the exact free sources $\rho_f,J_f$. The vacuum closure $G=(\mu_0c)^{-1}\star_\eta F$ is confined to the $P=M=0$ branch. No general metric-to-excitation relation or magnetic-charge law is introduced. The punctured-domain flux example proves a conditional exterior-field result and explicitly excludes a smooth divergence-free full-space extension; it reports no experiment.

The owner authoring-direction file was not present. There was no conflict with the assigned page identity or required-page plan.

## Inventory and dependency levels

The current A/B manifest contains these items in supplier-first order:

| Item | Page | In-batch level |
|---|---|---:|
| `def-emx-continuous-chain-integral` | A | 0 |
| `def-emx-excitation-form` | A | 1 |
| `lem-emx-c1-stokes-on-standard-3-simplex` | A | 1 |
| `pthm-emx-exterior-maxwell` | A | 2 |
| `pthm-emx-duality-vacuum` | A | 3 |
| `ex-emx-topological-flux-sector` | B | 3 |
| `ex-emx-duality-pec-failure` | B | 4 |

The scoped in-batch dependency calculation found no cycles and agrees with each carrier's `dependency_level`. The current batch graph calculation gives batch 3 dependency level 1 with batch 2 as its prerequisite. `batch-dependency-levels.mjs check` reports `research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json` stale after the authorized manifest edits; the current graph was recomputed in memory, but the shared run-level snapshot was left for its owner to refresh. The full-run item-level checker reports 186 empty scaffold inventories on unrelated pages (including `emx-anisotropic-reciprocal-optics` and `emx-radiation-reaction-models`); the scoped batch-3 graph passes with no level errors or cycles.

## Cross-batch interfaces

All ten rows in `physics-non-fluid-129-2026-10-21-r2-batch-3.cross-batch-dependencies.json` are `verified`. The current hash-matching Step 1 records for `def-emx-lorentz-star`, `lem-emx-lorentz-star-square`, `lem-emx-unit-sphere-radial-flux`, and `thm-emx-local-potential-homotopy` are `ready`. Their complete current statements and proofs were re-read against the uses: the $(-+++)$ Hodge-star basis signs, $\star_\eta^2=-\mathrm{id}$ on two-forms, the outward sphere-area period $4\pi$, and the nonzero-period obstruction to a global potential all match. The emx-lorentz-form-algebra page has exactly these four current mathematical carriers. `verified` records only these scoped interface checks, not independent proof approval.

## Sources and harvested results

The A and B pages each have two independent full-text treatments. The sources, locators, item support, and every harvested-result disposition are in `physics-non-fluid-129-2026-10-21-r2-batch-3.coverage.json` and `batch-3-sources/source-reading.md`:

- Niklas Beisert, *Elektrodynamik*, ETH Zurich 2024 FS: full 176-page PDF retrieved; §§5.3, 6.3–6.4, and 8.5 were read at the listed PDF and printed-page locators. The source's angle convention is converted explicitly; its magnetic-source extension is out of scope.
- Friedrich W. Hehl, Yakov Itin, and Yuri N. Obukhov, *Recent developments in premetric classical electrodynamics*: full 34-page PDF retrieved; §§2–4, 6–7, and 11 were read at the listed PDF locators. Its notation, signature, and impedance are not imported; its global $J=dH$ assertion and magnetic-source extension are not used.

Both URLs succeeded without a recovery retry. `source-fetch-check --stamp` reports 4/4 page/source records fetch-verified and resolved, with zero drops. `coverage-checklist` reports two pages, 15 harvested results, and zero errors or warnings. `source_resolution` and its history are empty because no selected retrieval failed. The two A-page mathematical helpers are fully proved from current mathematical suppliers and are not attributed to either physics source.

## Scoped checks and readiness

- `precheck.mts`: all seven assigned items pass directly.
- Strict `proof-contract.mjs`: all seven contracts pass; every cited fact has an exact supplier excerpt and mapped use, every proof step has inputs, all eight standard boundary cases are disposed, and the two exact example calculations are recorded as finite checks.
- `proof-layout.mjs` on the seven explicitly changed items: 7 items, 24 steps, 0 defects.
- `rendercheck.mjs` on all seven items and both pages: 9 files, no delimiter, math, or frontmatter defects.
- Scoped dependency calculation: all seven in-batch levels match and no cycle is present.
- `source-fetch-check --stamp`: 4/4; `coverage-checklist`: 0 errors and 0 warnings.

Current `step1Decision` checks confirm ready, hash-current records for all seven assigned items. The local chain-integral definition and $C^1$ Stokes lemma were authored before their consumers. The four batch-2 prerequisite carriers are current and ready, so no prerequisite is left escalated. These records document authoring readiness only; independent proof review remains a later gate.
