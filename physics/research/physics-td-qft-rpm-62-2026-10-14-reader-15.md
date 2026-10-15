# Step 3a reader report — batch 15

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent reader  
Scope: batch `15`

## Inventory opened

Assigned pages:

- `td-finite-statistical-bridge` (A)
- `td-finite-statistical-bridge-examples` (B)

Assigned A-page items, read in dependency order:

- `def-td-finite-microstate-model`
- `def-td-regular-hamiltonian-shell-preparation`
- `post-td-canonical-sampling`
- `post-td-microcanonical-sampling`
- `pthm-td-countable-canonical-identities`
- `pthm-td-differentiable-pressure-concentration`
- `pthm-td-finite-bath-canonical-error`
- `pthm-td-finite-canonical-identities`
- `pthm-td-finite-entropy-maximum`
- `pthm-td-general-quantum-canonical-identities`
- `pthm-td-independent-factorization`
- `pthm-td-invariant-regular-microcanonical-shell`
- `pthm-td-lattice-bulk-pressure`
- `pthm-td-measurable-canonical-identities`
- `pthm-td-finite-quantum-free-energy-minimum`
- `pthm-td-finite-mode-occupation-and-trace-formulas`
- `pthm-td-qualified-discrete-quantum-dephasing`
- `rem-td-ensemble-limit-hypotheses`

Assigned B-page items:

- `ex-td-finite-mode-thermal-ensemble`
- `ex-td-two-site-thermal-ensemble`
- `ex-td-infinite-mode-trace-divergence`
- `ex-td-no-automatic-equilibration`
- `ex-td-two-site-no-thermalization`

Page-level prerequisites opened: `qm-many-body-and-equilibrium-models`, `td-math-continuum-pressure`, `td-math-mixture-dynamics-and-shells`, and `td-potentials-and-responses`.

Direct supplier context opened before consumers included the batch-1 thermodynamics definitions, batch-11 countable/measurable/lattice/trace-Gibbs/bath-error mathematical suppliers, batch-12 shell/Hamiltonian/dephasing mathematical suppliers, and the published NRQM statements used by the quantum items. The local Hamiltonian definitions and published Newtonian/Galilean definitions used for the frame and shell constructions were also opened.

## Source review

The current author-hosted David Tong *Statistical Physics* PDF was checked at §§1.3.2–1.3.4 (printed pp. 19–25) for canonical means, fluctuations, Gibbs entropy and free energy; §§3.5–3.6 (pp. 77–91) for Bose/Fermi context; and §5.3.1 (pp. 156–157) for the one-dimensional Ising example. Daniel Arovas’s current UCSD notes were checked at Chapter 4 §§4.4 and 4.6.2 (printed pp. 205–217) and against the local full-text retrieval at §§5.6–5.7 (pp. 277–303) for the quantum mode context. The local items supply their own conditional calculations and proofs. No item reports an experiment or empirical measurement.

## Repairs

- `pthm-td-countable-canonical-identities`: the original statement called the entropy dimensionless but then used the undefined symbol `S_beta` in `Ebar - T S_beta`, which left the units and the physical entropy ambiguous. It now defines the dimensionless entropy `s_beta`, defines `S_beta = k_B s_beta` in `J K^-1`, and states the free-energy identity with that physical entropy. The affected derivation in the batch-15 proof contract and all statement-boundary excerpts/hashes were updated. Reflow reported unchanged; precheck passed.
- `pthm-td-finite-entropy-maximum`: the original statement called `-k_B sum r log r` the Shannon entropy. It now defines dimensionless Shannon entropy `h(r)` and the physical Gibbs entropy `S(r) = k_B h(r)` in `J K^-1`, and the proof states the positive scaling that preserves the unique maximizer. The affected proof-contract derivation and statement-boundary excerpts/hashes were updated. Reflow reported unchanged; precheck passed.

The direct consumer `rem-td-ensemble-limit-hypotheses` was checked after these notation repairs. It summarizes the scope of both results without relying on the changed entropy notation. Neither repaired item carried a `verification.judge` record.

Validation after edits:

- `reflow.mts` — both changed items unchanged.
- `precheck.mts` — both changed items passed.
- `proof-layout.mjs` — 2 items, 4 steps, 0 defects. The renderer required the existing temporary alias loader `/private/tmp/td8-alias-loader.mjs` to resolve the web app’s `@/` imports.

## Uneditable findings

The B-page summary’s final sentence says every example derives probabilities or state invariance from assigned A-page assumptions/items. `ex-td-two-site-no-thermalization` also depends on `post-nrqm-framework-autonomous-dynamics` and `def-nrqm-autonomous-dynamics-framework-evolution`; its Verification step 2.1 uses that external unitary-dynamics premise to establish invariance. The A-page supplies the Gibbs weights, not that evolution law. The B page is outside the authorized prose-edit scope.

Two draft mathematical suppliers in current-run batch 12 need owner disposition:

- `thm-tdmath-hamiltonian-measure-and-recurrence`, Statement recurrence clause: it assumes that a time map and all its iterates are defined on a finite-measure region, but does not assume that the region is invariant under the map. Iterates being defined does not make the map a self-map of the region, which the finite-measure Poincaré recurrence theorem requires. Add invariance of the region (or state the recurrence result on an invariant measurable region). The assigned consumer closure includes `pthm-td-invariant-regular-microcanonical-shell`; its use of this supplier concerns Hamiltonian volume and energy preservation, not recurrence.
- `thm-tdmath-regular-energy-shell-measure`, Statement invariance clause and Proof step 3.1: the theorem permits a `C^2` Hamiltonian, while step 3.1 invokes `thm-tdmath-hamiltonian-measure-and-recurrence`, whose Hamiltonian hypothesis is `C^infty`. Supply a local volume-preservation proof at `C^2` regularity or state the stronger regularity hypothesis. The assigned consumer `pthm-td-invariant-regular-microcanonical-shell` separately assumes `C^infty`; the broader supplier statement remains under-justified.

Published NRQM prerequisites have required publication-review metadata missing. This is an acceptance-evidence defect, not a claim that the inspected formulas are mathematically false. The exact subjects and assigned consumers are:

| Published subject | Missing required record | Assigned consumer |
|---|---|---|
| `post-nrqm-many-body-canonical-equilibrium-ensemble` | `verification.sources_checked` (the record contains only `precheck: n/a`) | `pthm-td-general-quantum-canonical-identities` |
| `post-nrqm-framework-autonomous-dynamics` | `verification.sources_checked` (the record contains only `precheck: n/a`) | `pthm-td-qualified-discrete-quantum-dephasing` |
| `pthm-nrqm-many-body-thermal-equilibrium-characterization` | `verification.audited` or `verification.verified` (the record contains only `precheck: pass`) | `pthm-td-finite-quantum-free-energy-minimum` |
| `pthm-nrqm-many-body-thermal-occupation-predictions` | `verification.audited` or `verification.verified` (the record contains only `precheck: pass`) | `pthm-td-finite-mode-occupation-and-trace-formulas` |
| `thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace` | `verification.audited` or `verification.verified` (no verification record) | `pthm-td-finite-mode-occupation-and-trace-formulas` |
| `lem-nrqm-many-body-two-level-thermal-formulas` | `verification.audited` or `verification.verified` (the record contains only `precheck: pass`) | `pthm-td-finite-mode-occupation-and-trace-formulas` |
| `lem-nrqm-composites-hilbert-tensor-construction` | `verification.audited` or `verification.verified` (no verification record) | `pthm-td-finite-mode-occupation-and-trace-formulas` |
| `lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma` | `verification.audited` or `verification.verified` (no verification record) | `pthm-td-finite-mode-occupation-and-trace-formulas` |

The physics schema requires `sources_checked` for published postulates and `audited` or `verified` for published proved results. A format precheck does not supply those reviews.

## Page verdicts

- `td-finite-statistical-bridge`: no defect found in the assigned page prose. Its model assumptions, physical scope and limitations are stated clearly. The page’s quantum claims remain conditional on the unresolved published and current-run suppliers listed above.
- `td-finite-statistical-bridge-examples`: the assigned calculations are hypothetical and their proofs match their stated finite or discrete models. The page-summary attribution of the quantum example’s invariance premise is defective as described above.

## Blocker and coverage limit

The run remains live at Step 3a read with no workers in flight at the last status check. No run state, manifest, page outside batch 15, or published item was changed. The unresolved supplier findings prevent this batch from being treated as fully accepted. I reviewed every assigned item and page, the four page-level prerequisite summaries, the directly used current-run mathematical suppliers, and the exact published supplier interfaces used by the assigned proofs. I did not independently audit every transitive published mathematical proof ancestor of those suppliers; no such closure-wide acceptance is claimed here.
