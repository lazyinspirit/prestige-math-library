# Batch 91 authoring notes

## Scope and plan comparison

This batch owns the A/B pair `csm-frontier-hydrodynamic-ssep` / `csm-frontier-hydrodynamic-ssep-examples`, with A-page order 879 in `classical-statistical-mechanics`. The canonical `plan-spec.json` row and the complete design section in `plan-classical-statistical-mechanics-frontier-expansion-track.md` agree on IDs, title, category, library, order, companion, and the two page prerequisites. The plan has `items: []`, as expected for pre-scaffold canonical entries; the design specifies the proof route and the batch manifest now records its materialized items. No substantive plan/design conflict was found. The requested r2 owner-authoring-direction file is absent.

The authored scope is the seven A-page carriers plus the B-page density-mode example. All eight are mathematical items, use only mathematical prerequisites, and remain drafts. The A/B pages are frontmatter-only and stay below the 100-item cap (seven A items, one B example). The SSEP uses unordered nearest-neighbor bonds, row-generator convention, dimensionless lattice spacing `1/N`, diffusive time acceleration `N^2`, and normalized continuum diffusion coefficient `D=1`.

## Item inventory and in-run dependency levels

Levels were calculated from the current batch 91 and supplier batch 85 manifests using the in-run item graph; there were no cycles or mismatches in this scoped calculation. Level zero means no in-run item supplier. Level is dispatch priority, not a review barrier.

| Item | Level | In-run suppliers | Role |
| --- | ---: | --- | --- |
| `def-csm-frontier-ssep-weak-heat-solution` | 0 | — | Local weak heat formulation |
| `lem-csm-frontier-ssep-sector-connectivity` | 0 | — | Local fixed-occupancy graph lemma |
| `lem-csm-frontier-ssep-heat-flow` | 1 | weak heat definition | Fourier heat profile, maximum principle, mass and uniqueness |
| `def-csm-frontier-ssep-diffusive-model` | 2 | finite-generator definition (0), chain existence (1), sector connectivity (0) | Exact finite SSEP rate matrix, empirical measure, sectors |
| `lem-csm-frontier-ssep-bracket` | 3 | SSEP model (2), finite-chain martingale (2) | Fixed-test martingale and bracket |
| `lem-csm-frontier-ssep-time-dependent-martingale` | 3 | SSEP model (2), chain existence (1), finite-chain martingale (2) | Time-dependent test martingale and bracket |
| `thm-csm-frontier-ssep-heat-limit` | 4 | SSEP model (2), heat flow (1), fixed-test bracket (3), time-dependent martingale (3), finite Doob bound (0) | Backward heat test and uniform-in-time convergence |
| `ex-csm-frontier-ssep-density-mode` | 5 | heat flow (1), heat-limit theorem (4) | Single Fourier mode |

The four local support results are necessary to close the assigned proof route: sector connectivity verifies the irreducibility hypothesis needed to identify each nontrivial fixed-particle sector as a reversible model; the weak heat definition fixes the solution class and trace; the Fourier heat lemma constructs and uniquely identifies the continuum profile; and the time-dependent martingale supplies the backward-test identity needed in the heat-limit proof. The complete conditional argument remains on the A page and the worked mode is on B.

## Supplier interfaces and readiness

The A-page requires the published `csm-stochastic-response` page and batch-85 `csm-frontier-probability-interfaces`. The published reversible-rate definition was read in full; it requires a connected transition graph, positive symmetric reverse rates and the stated detailed-balance/Boltzmann convention. The full SSEP graph is reducible by particle number, so the model does not classify the whole chain as irreducible; it locally proves connectivity of each nontrivial fixed-occupancy sector and treats the two singleton sectors separately. The generic finite-rate-chain supplier is used for the full reducible process.

Before treating batch-85 prerequisites as gaps, `loadStep1Record` and `step1Decision` were checked against their current records and complete proofs. `def-csm-frontier-finite-generator-chain` is currently ready with a closed, non-owner record. `lem-csm-frontier-finite-generator-chain-existence`, `lem-csm-frontier-finite-chain-martingale`, and `lem-csm-frontier-finite-doob-bound` are currently ready with closed owner records. Their draft status and lack of independent review are not treated as missing prerequisites. The published reversible-rate definition has no current run readiness record; it is a pre-existing published external definition, and its actual interface was inspected, so that is not a gap. The exact external mathematical Fourier interfaces were also inspected, including the Fourier-basis theorem's `AC_omega` hypothesis. No unresolved prerequisite or cycle remains for this assigned batch.

The full-chain suppliers carry the Axiom of Choice where required; the local Fourier heat result only assumes countable choice, matching the Fourier completeness supplier. The theorem uses full Choice because its finite-chain, martingale, and Doob suppliers do. All stated hypotheses are carried explicitly.

## Source reading and limits

Four full-text sources were inspected and are recorded per item and result in `batch-91.coverage.json`; `source-fetch-check --stamp` verified all four full-text documents. Varadhan's complete Chapter 4 lecture notes, Section 4.3, printed pp. 53–56 (PDF pp. 8–10), supply an independent model and hydrodynamic treatment. Landim's complete lecture notes, Chapter 2, Sections 2.1–2.4, printed pp. 72–84 (PDF pp. 16–28), supply an independent treatment and initial-profile convergence statement. Landim explicitly omits the relative-compactness proof in Section 2.4; the authored result does not rely on that omitted argument and proves its own finite-time mesh upgrade. The notes use a nearest-neighbor coefficient `1/2` under their rate convention; the authored unordered-bond rate `N^2` yields normalized coefficient `1`, as verified by the local generator calculation.

Biswal–Lanchier's full paper, Section 3, Lemmas 5–6 and communication-class argument, supports the fixed-particle-sector interpretation; the batch includes its own complete spanning-tree proof. The full Bertini et al. macroscopic-fluctuation-theory review was read in the relevant sections for normalization and scope only. Its boundary-driven transport coefficients are not transferred to this periodic theorem; no MFT action, large-deviation principle, observation, or Navier–Stokes derivation is claimed. No retrieval failure occurred, so no source was dropped and `source_resolution` is empty. Source history, locators, item disposition, retrieval attempts and fetch stamps remain in coverage.

## Cross-batch dependencies and checks

`batch-91.cross-batch-dependencies.json` contains the seven direct in-run edges to batch 85. They are marked `verified` because each scoped interface and current readiness state was checked; this does not certify independent proof acceptance. External published suppliers and same-batch dependencies are not rows in that review file.

The full-run `item-dependency-levels.mjs check` still reports unrelated pages with empty scaffold inventories. The run-wide proof-contract-coverage command is likewise blocked by the unrelated empty inventory `qsmx-modular-equilibrium`. The generated batch-dependency snapshot was refreshed once after the batch-91 manifest changed, but an immediate `check` found its input hash stale again; all 129 recorded batch rows, including batch 91 at level 1 requiring batch 85, matched the recalculation. Its source inputs changed between the writer and the subsequent check, so the owner should refresh this shared run snapshot after other manifest edits settle. These run-wide conditions do not affect the scoped batch-91 dependency calculation.

## Final scoped checks and readiness

- Batch 91 plus batch 85 item dependency calculation: no errors; all eight recorded levels match (0, 0, 1, 2, 3, 3, 4, 5).
- Batch manifest, item frontmatters, and both page files: 2 pages and 8 items compared, no metadata differences.
- `content-policy` on the batch-91 manifest: 8 items, 0 errors, 0 warnings.
- `depcheck` on the eight assigned items: 1,126-item / 400-page prerequisite closure, 0 errors, 0 warnings.
- Normative phase precheck: 6 proof-bearing items checked, 0 failures; the two definitions have no proof body.
- `proof-layout`: 8 items, 25 steps, 0 defects.
- Strict proof-contract validation: 8/8 items, 0 errors, 0 warnings.
- Source harvest checklist: 1 A page, 13 harvested results, 0 errors, 0 warnings; source fetch check: 4/4 full-text sources verified, 0 drops.
- Renderer check: 10 assigned item/page files, no delimiter, KaTeX, or YAML errors.
- All eight item Step 1 records are current and `ready`, recorded in dependency order. Readiness records authorship prerequisites only and do not claim independent proof approval.

No tests were run.
