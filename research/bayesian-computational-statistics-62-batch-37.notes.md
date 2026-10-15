# Batch 37 authoring notes

Run `bayesian-computational-statistics-62`, batch 37, role beta. Dispatch input hash: `bed5a0d6fc81f81a0dd5787f71b249c8d2b2bdae52b1c7b2be32ea140d58b553`.

## Plan and interface reconciliation

The BCS-34 design and `plan-spec.json` agree on the A/B page IDs, title, category, order 2114/2115, and the three declared page prerequisites. The authored scope follows the design: Hamilton equations and target assumptions, finite leapfrog updates, exact-flow hypotheses kept separate from discretization claims, Metropolis correction, invariance, and the four planned examples. The A page has seven items and the B page has four, below the 100-item cap.

The design's BCS-30 interface names `alg-metropolis-hastings`, `def-metropolis-hastings-kernel`, and `thm-metropolis-hastings-kernel-preserves-target`. The current batch-33 manifest/body instead supplies `alg-metropolis-hastings-kernel` and `thm-metropolis-hastings-kernel-is-reversible-and-invariant`, with no separate planned definition. I inspected the actual algorithm and theorem bodies and their Step 1 records: both are closed `ready`, `owner:false`; the actual theorem is under AC and proves general-state invariance/reversibility. The carriers use those actual IDs and satisfy the interface. The planned-ID mismatch is recorded for owner reconciliation; no planned excerpt or acceptance is inferred.

The dispatch lists prerequisite batches 23 and 33. The shared dependency-level schedule also has batch 6 because `thm-metropolized-hamiltonian-chain-preserves-target` directly depends on `lem-finite-euclidean-space-is-standard-borel`. I inspected its current statement and proof and its Step 1 record is closed `ready`, `owner:true`; it establishes the finite-dimensional Euclidean Borel standard-Borel property used by the actual MH interface. Batch 37 still computes to level 3 with prerequisites 6, 23, and 33. The shared schedule file's recorded input hash is `d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610`, while current recomputation gives `d2be2b2456c171670a03f29565c818578363b7ae572936e31d5eaf775a601698`; the schedule check therefore reports stale global input. This batch does not own that shared schedule, so it is left unchanged for owner reconciliation.

## Inventory and authoring order

| Level | Items | In-batch prerequisites |
|---:|---|---|
| 0 | `def-leapfrog-step-map`; `thm-exact-hamiltonian-flow-preserves-energy-and-volume`; `lem-real-line-exponential-tail-integrable` | None |
| 1 | `thm-leapfrog-is-reversible-and-volume-preserving` | `def-leapfrog-step-map` |
| 2 | `def-hamiltonian-monte-carlo` | `def-leapfrog-step-map`; exact-flow theorem |
| 3 | `alg-leapfrog-hamiltonian-monte-carlo`; `ex-hmc-globally-lipschitz-force`; `ex-hmc-exact-flow-limit` | Algorithm uses HMC definition and step map; globally-Lipschitz example uses HMC definition, exponential-tail lemma, and exact-flow theorem; exact-flow example uses HMC definition and exact-flow theorem |
| 4 | `thm-metropolized-hamiltonian-chain-preserves-target`; `ex-hmc-leapfrog-harmonic-resonance`; `ex-hmc-finite-step-energy-error` | Invariance theorem uses the algorithm, HMC definition, step map, and leapfrog theorem; resonance uses the algorithm, HMC definition, and step map; energy-error example uses the algorithm, HMC definition, and step map |

All direct dependencies, including external suppliers, are recorded in the pages manifest and carriers. Levels were recomputed against the full run graph, not only this batch; all eleven labels match. The helper `lem-real-line-exponential-tail-integrable` is local to the A page because the globally-Lipschitz-force example needs a complete proof that the selected nonquadratic target has finite normalizer. Its level is zero because it has no in-run supplier.

## Sources and mathematical conventions

The A-page coverage record contains the inspected URLs, locators, all 20 harvested results and their dispositions:

- Neal, *MCMC Using Hamiltonian Dynamics*, complete hosted 50-page chapter PDF: <https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf>. In the hosted edition HMC dynamics are §§5.2.1–5.2.3.3, algorithm/invariance §§5.3.1–5.3.3.1, and scaling §§5.4.4.1–5.4.4.2. The plan's older section numbering does not match this edition; coverage records the corrected locators.
- Betancourt, *A Conceptual Introduction to Hamiltonian Monte Carlo*, full arXiv PDF: <https://arxiv.org/pdf/1701.02434>.
- OpenStax, *Calculus Volume 2*, §3.7, Example 3.55: <https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals>, supporting the exponential-tail helper.

Full-text inspection and fetch verification are recorded in `batch-37.coverage.json`; no retrieval failure occurred. `source-fetch-check` verifies all three source stamps. The detailed harvested-result mapping, exact locators, dispositions, retrieval histories, and rationale are in that coverage file.

The exact-flow theorem states Countable Choice explicitly because its change-of-variables supplier requires it; it also states completeness, and the globally Lipschitz gradient criterion is proved as a sufficient condition. AC in the HMC invariance theorem supplies Countable Choice through the cited bridge. The leapfrog shear proof works for `U` in `C^1` by translations and product-measure sections; it does not assume a Hessian. The classical block-triangular Jacobian calculation is stated only under `C^2`. Finite leapfrog maps need no ODE completeness claim. The invariance theorem proves the phase-space MH kernel and then composes refresh, phase update, and position projection; it makes no mixing or convergence claim.

## Verification and readiness

Scoped checks after final carrier and contract edits:

- Source fetch: 3/3 sources verified.
- Coverage checklist: 1 A page, 20 harvested results, 0 errors, 0 warnings.
- Strict proof contracts: 11/11 items, 0 errors, 0 warnings.
- Content policy: 11 items, 0 errors, 0 warnings.
- Focused dependency check: 11 selected items; prerequisite closure and page/item cycle checks passed with 0 errors and 0 warnings.
- Precheck: all 8 proof-bearing items passed. The three definitions/algorithm have no phase proof body to check.
- Rendercheck: all 11 items and both pages checked, 0 errors and 0 warnings.
- Proof layout: 11 items, 33 proof steps, 0 defects.
- Full-run item-level recomputation: all eleven batch-37 labels matched their computed levels (0, 0, 0, 1, 2, 3, 4, 3, 3, 4, 4 in manifest order). The run-wide `item-dependency-levels.mjs check` still exits nonzero on 33 unrelated diagnostics: three empty pages (`misspecified-posterior-consistency-examples`, `identifiability-and-approximation-bias-in-computational-inference`, and `identifiability-and-approximation-bias-in-computational-inference-examples`) and mismatched labels on `ex-cylinder-gaussian-process-is-not-banach-valued`, `lem-log-gaussian-density-supnorm-controls-local-likelihood-distances`, `thm-gaussian-process-posterior-contraction`, `ex-l2-small-log-density-far-in-hellinger`, `ex-log-gaussian-uniform-density-posterior`, `ex-binary-regression-logistic-intercept-gp`, `ex-fixed-design-gaussian-constant-process-and-unknown-scale`, `lem-dirichlet-normal-mixture-density-well-defined`, `lem-hellinger-ratio-controls-kl-moments`, `lem-iid-posterior-contraction-under-countable-sieves`, `lem-dirichlet-process-simplex-small-ball`, `lem-dirichlet-normal-mixture-finite-support-approximation`, `lem-dirichlet-normal-mixture-posterior-sieve-tail`, `lem-dirichlet-normal-mixture-sieve-entropy`, `lem-dirichlet-normal-mixture-local-prior-mass`, `lem-dirichlet-normal-mixture-countable-band-entropy-sum`, `thm-dirichlet-normal-mixture-posterior-contraction`, `cor-dirichlet-normal-mixture-interval-mass-refinement`, `ex-dirichlet-normal-mixture-compact-scale-hyperprior-and-rate`, `ex-dirichlet-normal-mixture-polynomial-scale-tail-outside-theorem`, `def-abc-augmented-tolerance-target`, `lem-abc-augmented-target-has-tolerance-posterior-marginal`, `alg-abc-metropolis-hastings`, `alg-abc-sequential-smc`, `thm-abc-metropolis-hastings-invariance`, `thm-abc-sequential-smc-rn-weight-update`, `ex-abc-vanishing-acceptance`, `ex-abc-positive-tolerance-stationary-law`, `ex-abc-sequential-tolerance-schedule-and-rn-weights`, and `ex-abc-smc-finite-particle-collapse`. No batch-37 item or page is named by that run-wide gate.
- Batch dependency-level check: stale shared input hash as recorded above; current recomputation retains batch 37 at level 3 with prerequisites 6, 23, and 33. No shared schedule edit was made.

The cross-batch dependency evidence is in `batch-37.cross-batch-dependencies.json`; proof contracts are in `batch-37.proof-contracts.json`; the complete inventory and direct dependencies are in `batch-37.pages.json`. Final Step 1 records are written separately for each of the eleven owned items. These records report authoring readiness only and are not independent approval.
