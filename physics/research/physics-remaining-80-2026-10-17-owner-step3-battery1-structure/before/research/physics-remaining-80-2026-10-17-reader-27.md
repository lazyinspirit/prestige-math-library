# Step 3a reader report — batch 27

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch 27 only

## Opened inventory

### Assigned pages

- [csm-gibbs-lattice](../library/classical-statistical-mechanics/csm-gibbs-lattice.md) — assigned A page.
- [csm-gibbs-lattice-examples](../library/classical-statistical-mechanics/csm-gibbs-lattice-examples.md) — assigned B page.

### Assigned items, read in dependency order

- Level 0: `def-csm-finite-range-lattice-interaction`, `def-csm-stable-superstable-continuum-interaction`, `lem-csm-finite-gibbs-variational-identity`, `lem-csm-ising-influence-bound`, `lem-csm-lattice-product-and-measure-compactness`, `thm-csm-ising-chain-convergent-series`.
- Level 1: `def-csm-gibbs-physical-parameters`, `def-csm-lattice-gibbs-specification`, `lem-csm-chain-markov-bridge`, `lem-csm-gibbs-response-covariance`, `lem-csm-ising-parity-contours`, `lem-csm-stationary-lattice-entropy-energy`, `thm-csm-lattice-van-hove-pressure`.
- Level 2: `lem-csm-lattice-specification-consistency`, `lem-csm-peierls-energy-injection`, `thm-csm-lattice-dlr-existence`.
- Level 3: `cex-csm-gibbs-marginals-not-free`, `lem-csm-maximal-coupling-and-heat-bath`, `lem-csm-stationary-dlr-construction`, `post-csm-interacting-equilibrium-gibbs`, `thm-csm-chain-dlr-uniqueness`.
- Level 4: `ex-csm-chain-analytic-interacting-model`, `thm-csm-dobrushin-finite-range-uniqueness`, `thm-csm-ising-low-temperature-coexistence`, `thm-csm-lattice-dlr-variational-pressure`.
- Level 5: `pthm-csm-pressure-entropy-reference-units`, `thm-csm-ising-coexistence-pressure-cusp`, `thm-csm-ising-high-temperature-state`.
- Levels 6–7: `pthm-csm-ising-equilibrium-phases`, `ex-csm-high-low-temperature-regimes`.

### Dependency context opened

- Current batch-26 draft suppliers: `def-csm-phase-space-reference`, `def-csm-statistical-state-observable`, and `post-csm-counting-and-physical-observables`. I also opened their exact direct mathematical statements, including `def-cm01-units`.
- Other directly used suppliers: `def-countable-choice`, `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `def-hyperbolic-functions`, `def-real-exponential-function-and-e`, `thm-algebra-of-derivatives`, `thm-bolzano-weierstrass`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-caratheodory-extension-theorem`, `thm-chain-rule`, `thm-derivative-of-exponential`, `thm-dynkin-pi-lambda`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `thm-gaussian-integral`, `thm-geometric-series`, `thm-hyperbolic-identities-and-derivatives`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, `thm-tdmath-finite-range-lattice-pressure-limit`, `thm-tdmath-ising-chain-limit`, `thm-termwise-differentiation-of-a-real-power-series`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `def-tdmath-bounded-finite-range-lattice`.
- For the batch-26 cotangent reference, I opened `def-smooth-manifold`, `def-tautological-one-form-on-a-cotangent-bundle`, `thm-the-canonical-cotangent-two-form-is-symplectic`, `def-cm-phase-domain-and-standard-symplectic-two-form`, `lem-cm-standard-symplectic-form-is-closed-and-nondegenerate`, `def-measure`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, and `def-borel-sigma-algebra`.
- Page prerequisites opened: [csm-phase-ensembles](../library/classical-statistical-mechanics/csm-phase-ensembles.md), [outer-measure-and-the-caratheodory-extension-theorem](../../library/measure-theory/outer-measure-and-the-caratheodory-extension-theorem.md), and [sigma-algebras-and-borel-sets](../../library/measure-theory/sigma-algebras-and-borel-sets.md). I also opened the seven page prerequisites listed on `csm-phase-ensembles`: `cm-math-canonical`, `improper-and-parameter-dependent-multiple-integrals`, `td-math-mixture-dynamics-and-shells`, `the-lebesgue-integral-and-the-convergence-theorems`, `em-potentials-and-gauge`, `cm12-legendre-transformation-and-hamiltonian-mechanics`, and `td-thermodynamic-framework`.

## Repairs and evidence

- `def-csm-finite-range-lattice-interaction`: typed the interior assignment as $\tau_\Lambda\in A^\Lambda$ and defined $\tau_\Lambda\eta$ as the coordinatewise patched configuration. This makes the domain of the conditional energy explicit and supports its later Gibbs-kernel uses.
- `lem-csm-lattice-product-and-measure-compactness`: fixed a bijective site enumeration; defined finite-coordinate cylinders and the cylinder algebra; gave the exact consistency condition on finite-dimensional laws and the induced cylinder probability; proved countability of the cylinder algebra and that cylinders form a clopen basis for the stated metric. The proof now records why the cylinder weight is well-defined and finitely additive before applying Carathéodory extension.
- `lem-csm-ising-influence-bound`: stated the normalized one-site Gibbs law as an explicit formula on the exterior-spin space and made the comparison of two boundaries differing only at $j\ne i$ precise. The Bernoulli total-variation calculation now has a fully typed input law.
- `lem-csm-lattice-specification-consistency`: repaired step 2.1. The conditional factor $e^{-\beta C(\xi,\eta)}$ depends on the retained exterior spins and does not cancel. The proof now sums over the outer kernel's $\Delta$-spins, which produces and cancels $Z_\Delta^{\xi\eta}$, while retaining the $e^{-\beta C}$ factor in the remaining sum.
- `lem-csm-ising-parity-contours`: defined the square box, spin assignment with plus exterior, and dual lattice. The vertical-neighbor parity step now proves the even boundary-crossing count by tracking the rectangle-membership indicator along the closed dual cycle; it does not rely on an unstated Jordan separation result.
- `lem-csm-peierls-energy-injection`: defined $B_n$, the plus-extended spin configuration, the finite plus-boundary Hamiltonian, partition function, and normalized Gibbs law before stating the probability bound. The flip argument now refers to that exact Hamiltonian.
- `lem-csm-stationary-lattice-entropy-energy`: supplied the entropy bound $H(q)\leq\log|A|$ needed for leftover sites by applying the finite Gibbs relative-entropy identity to the uniform law.
- `post-csm-interacting-equilibrium-gibbs`: added a measurable exterior restriction map $r_\Lambda$ compatible with concatenation and used it explicitly in the DLR identity. The lattice instance identifies it as coordinate restriction.
- `thm-csm-ising-high-temperature-state`: added $J_{ii}=0$, required by the one-site influence supplier and pair-energy convention.
- `pthm-csm-ising-equilibrium-phases`: carried the symmetric, zero-diagonal coupling hypothesis into its high-temperature model prediction.

I updated the affected batch-27 proof-contract derivations and review evidence for these repairs. The edited carriers had no stale `verification.judge` records to remove. The directly affected batch-27 consumers were reread; no further repair was needed. The directly affected current-run consumers in batches 28 and 42 were checked at their exact uses of the clarified interfaces. The distinct-site QSM coupling convention admits the zero-diagonal extension used by the CSM high-temperature result.

## Findings not edited

- Historical batch-26 observation: an earlier read of `def-csm-phase-space-reference` found that it named the Liouville density $|\omega_N^n|/n!$ and then used $\Lambda_N$ as a Borel measure without constructing that measure. The file changed during this review. Its pre-reader snapshot fingerprint is `f008648c601fdd7cf8a7857427f4d1cbc880651180db0984a32fcffe2e36cb53`, which did not match the bytes I observed at `535bde809306028940a0306cca0ff4c764fc0e483d28b52ef4fc945b9f34a28d`. A subsequent byte-bounded reread included an explicit countable chart-piece construction and the missing Borel/change-of-variables dependencies (raw SHA-256 `3b3805844f7cb2ceb956b4d68e3e20c4e3dfe0ceaff9629c57c781830b045702`). Because no immutable source matches the earlier observed hash, I cannot bind the historical defect to `pre` or `current` bytes. I retain it for owner routing with `observed_source: null`, consumer `post-csm-interacting-equilibrium-gibbs`, and no claim that the corrected bytes were the bytes first observed.
- Incidental out-of-scope observation: while checking a batch-42 QSM consumer, I found that `lem-qsm-diagonal-ising-specification-consistency`, proof step 2.2, repeats the incorrect claim that $e^{-\beta C}$ cancels between the numerator and normalizer. It depends on the batch-27 CSM specification interface but is itself a batch-42 consumer and is not in the dependency closure of a batch-27 assigned consumer. I did not edit it and cannot route it as a batch-27 dependency finding.

## Page verdicts

- `csm-gibbs-lattice` (A page): prose accurately summarizes the finite-range lattice definitions, DLR construction, proved sufficient regimes, one-way variational statement, and conditional physical interpretation. No A-page edit was needed. The batch-26 phase-space historical observation concerns the separate particle-sector reference construction, not the lattice proofs summarized here.
- `csm-gibbs-lattice-examples` (B page): prose accurately distinguishes the interacting marginal counterexample, exact one-dimensional calculation, and sufficient regimes; it does not present them as measurements. No B-page edit was permitted or needed.

## Validation and limitations

- `reflow.mts` reported unchanged for the ten changed items; `precheck.mts` passed all ten.
- Final `proof-layout.mjs` run: 10 changed items, 30 proof steps, 0 defects.
- The official BIPM kelvin page confirms the exact fixed SI value $k_B=1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}$: [BIPM, SI base unit: kelvin](https://www.bipm.org/en/web/guest/si-base-units/kelvin). Ruelle's original paper was opened at printed pp. 128–133 for stability, superstability and lower-regularity terminology: [Ruelle, “Superstable Interactions in Classical Statistical Mechanics”](https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf). The Princeton seminar PDF was opened at its Dobrushin sections (PDF pp. 37–43), transfer-matrix section (pp. 20–24), and Peierls section (pp. 52–55): [Junior Seminar in Mathematical Physics](https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf).
- The complete Friedli–Velenik PDF fetch timed out. The official author page and Cambridge chapter summary identify the cited Ising and infinite-volume Gibbs topics, but I did not verify every broad page locator in the repeated Friedli–Velenik references. The local arguments and exact direct supplier statements were reviewed independently.
- The proof obligations of the published mathematical suppliers were not re-audited through their entire transitive root-library closures; their exact statements and the relevant arguments were opened where needed. The `csm-phase-ensembles` transitive supplier items were not exhaustively audited beyond the exact items used in this batch's dependency chain.
- No batch-27 blocker remains. The historical batch-26 observation has a source-byte binding limitation as stated above. The later byte-bounded reread (hash recorded above) contains the measure construction, but it is not bound to the earlier observed defect or asserted to be the split-time current source.
