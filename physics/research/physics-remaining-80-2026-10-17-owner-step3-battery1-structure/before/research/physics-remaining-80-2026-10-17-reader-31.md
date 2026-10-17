# Step 3a reader report — batch 31

Run: `physics-remaining-80-2026-10-17`  
Reader: `reader-31`  
Scope: batch `31`

## Opened inventory

Both assigned pages were opened:

- A-page `csm-mean-field-hierarchy`: [library/classical-statistical-mechanics/csm-mean-field-hierarchy.md](../library/classical-statistical-mechanics/csm-mean-field-hierarchy.md).
- B-page `csm-mean-field-hierarchy-examples`: [library/classical-statistical-mechanics/csm-mean-field-hierarchy-examples.md](../library/classical-statistical-mechanics/csm-mean-field-hierarchy-examples.md).

The 11 A-page items were read in dependency order: `lem-csm-dk-continuous-time-field-smooth-flow`, `def-csm-dk-periodic-mean-field-model`, `def-csm-dk-phase-space-wasserstein-one`, `post-csm-dk-mean-field-particle-and-iid-model`, `thm-csm-dk-finite-n-complete-flow`, `thm-csm-dk-exact-bbgky`, `lem-csm-dk-smooth-tests-determine-phase-probability`, `thm-csm-dk-global-lipschitz-vlasov`, `thm-csm-dk-dobrushin-and-particle-limit`, `thm-csm-dk-compact-iid-propagation-of-chaos`, and `pthm-csm-dk-qualified-mean-field-limit`. The B-page example `ex-csm-dk-product-law-develops-correlations` was read after its suppliers.

The exact dependency items opened were `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-gronwall-integral-inequality`, `def-csm-dk-hamiltonian-flow-measure` (current batch-30 draft), `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `def-axiom-of-choice`, `def-countable-choice`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, `thm-liouville-volume-preservation`, `thm-tonelli-and-fubini-for-completed-product-measures`, `thm-dominated-convergence`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `thm-dynkin-pi-lambda`, `thm-change-of-variables-for-oriented-manifold-diffeomorphisms`, `thm-monotone-convergence-for-the-integral`, `def-identically-distributed-and-iid-random-variables`, and `cor-cauchy-schwarz-inequality-for-l-two`. The repairs also use the published definitions `def-the-one-dimensional-torus-and-normalized-haar-integral` and `thm-gaussian-integral`; both were opened. Batch-31 proof contracts, source coverage, cross-batch dependency record, and item/page manifests were consulted as evidence, not verdicts.

## Review findings and repairs

1. **Explicit Borel product structure and marginals.** In `def-csm-dk-phase-space-wasserstein-one`, the definition used Borel probabilities on `Z × Z` and the product probability as a coupling without specifying why the product-topology Borel sigma algebra is the product sigma algebra. It also described marginals without their set formulas. I used the published finite-torus topology in `def-the-one-dimensional-torus-and-normalized-haar-integral`, stated the countable-rectangle argument for Borel equality, wrote the marginal equations, and identified the sigma-finite product-measure result that makes `μ ⊗ ν` a Borel coupling. This supplies the coupling used in the finiteness argument and consumers.

2. **Iid preparation in the postulate.** `post-csm-dk-mean-field-particle-and-iid-model` invoked iid random variables without specifying their probability space or finite-dimensional laws. It now defines the countable product measurable space, the probability supplied by Ionescu–Tulcea under full Axiom of Choice, the coordinate projections, and the finite-rectangle factorization that defines the iid preparation. The postulate remains an adopted model/preparation assumption and makes no claim that nature realizes it. The assigned consumer `pthm-csm-dk-qualified-mean-field-limit` was checked: it retains the same full-Choice and preparation qualifications.

3. **Mollifier measures.** `lem-csm-dk-smooth-tests-determine-phase-probability` used normalized torus measure and Euclidean Lebesgue integrals without their exact definitions in its prerequisites. It now depends on `def-the-one-dimensional-torus-and-normalized-haar-integral`, identifies `m_{T^d}` and `λ_d`, and states how the fundamental-domain definition normalizes the periodized mollifier. Its proof contract now records the added fact and the actual step input.

4. **Vlasov density branch.** `thm-csm-dk-global-lipschitz-vlasov` named `dx`, `dv`, and the push-forward without defining them explicitly. The statement now defines the map push-forward by preimages of Borel sets and identifies `dx = m_{T^d}` and `dv = λ_d`. It directly includes the sigma-finite product-measure definition and theorem for `dx dv`; step 6.1 and the proof contract cite those exact measure premises. The direct consumer `thm-csm-dk-dobrushin-and-particle-limit` was checked: it uses the characteristic evolution and weak-solution statement, unchanged by these density-measure clarifications. `thm-csm-dk-compact-iid-propagation-of-chaos` and the physics theorem were also checked through that closure.

5. **Gaussian and position-volume calculation.** `ex-csm-dk-product-law-develops-correlations` asserted Gaussian normalization and normalized quotient volume without naming the suppliers. It now defines the position and momentum measures, adds `thm-gaussian-integral` and Tonelli as dependencies, and derives the d-dimensional normalization from the one-dimensional integral. The informal phrase “independent positions/momenta” is replaced by the exact density factorization; a remark defines “correlation production” as loss of the displayed two-particle factorization. Its proof-contract facts, derivation inputs, and citations were updated.

All current proof-contract citations to `def-csm-dk-phase-space-wasserstein-one` were refreshed to its current definition. The changed assigned items had no stale `verification.judge` records to remove. No A-page summary or B-page prose required repair.

## Source review

François Golse, *The Mean-Field Limit for the Dynamics of Large Particle Systems* (2003), was opened at Part I, equations (I.1)–(I.3) and the associated hypotheses (PDF pp. 12–15): the source uses a symmetric (C_b^2) pair potential and the (1/N) weak-coupling scale. Appendix I.A (PDF pp. 15–17) states and proves the first-order Dobrushin estimate with exponent (2\operatorname{Lip}(K)t). Appendix I.B (PDF pp. 18–20) gives the symmetric chaotic-sequence equivalence and the iid empirical convergence discussion. These are context only: the assigned periodic second-order estimate, compact-support empirical bound, and finite-(k) estimate are proved locally with their different hypotheses.

Pierre-Emmanuel Jabin and Zhenfu Wang, *Mean Field Limit and Propagation of Chaos for Vlasov Systems with Bounded Forces* (2015), was opened at §§1.1–1.2 and Theorem 1. The paper gives the deterministic (1/N) particle system with bounded force; its weak–strong uniqueness result assumes additional strong-solution and entropy/gradient controls. The assigned smooth periodic characteristic proof does not import that result or its entropy/combinatorics estimates.

The linked Teschl ODE PDF timed out on two web retrieval attempts. The official author page and table of contents confirm Chapter 2 headings and cited sections, but I did not independently read the cited full-text pages. The local smooth-flow lemma was checked directly, including continuation, time-continuous/state-smooth dependence, and the variational equations; its proof does not rest on the unretrieved stronger source theorem.

## Page verdicts

- `csm-mean-field-hierarchy` (A): **pass after repair**. The finite-(N) hierarchy, global characteristic evolution, coupling estimate, and compact-iid limit are conditional mathematical results. They do not assert an empirical observation or a Boltzmann–Grad/real-gas conclusion. The draft batch-30 Hamiltonian-flow definition is used only for its stated canonical conventions and remains a draft definition.
- `csm-mean-field-hierarchy-examples` (B): **pass after repair**. The example’s Gaussian density is normalized, the one-particle initial derivative vanishes, and the joint derivative is nonzero on an open set. The short-time nonfactorization claim is conditional on the smooth periodic finite-(N) model and is consistent with the separate large-(N) result.

## Validation and remaining issues

Reflow and precheck were run for every changed item after the final edits. All five prechecks passed; the final `node tools/physics-support/proof-layout.mjs` command covered the five changed items and reported 14 steps with 0 defects. No confirmed defects remain outside the assigned editable items, and no blocker was identified. The Teschl retrieval limit above is the only coverage limitation.
