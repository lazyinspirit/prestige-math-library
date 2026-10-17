# Step 3a reader report — batch 31

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Date: 2026-10-17  

## Opened inventory

### Assigned pages

- `library/numerical-differential-equations-and-stochastic-dynamics/tau-leaping-and-reaction-diffusion-model-error.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/tau-leaping-and-reaction-diffusion-model-error-examples.md`

### Assigned items

A page, in dependency order:

- `lem-shared-minimum-poisson-count-coupling`
- `alg-explicit-poisson-tau-leaping`
- `def-density-scaled-jump-and-chemical-langevin-generators`
- `lem-poisson-tau-leap-moment-and-covariance-identities`
- `thm-minimum-intensity-tau-leap-level-variance`
- `alg-critical-reaction-binomial-guarded-tau-leaping`
- `lem-bounded-rate-reaction-generator-dynkin-identity`
- `lem-poisson-tau-leap-one-step-weak-defect`
- `thm-density-scaled-chemical-langevin-model-error`
- `thm-poisson-tau-leap-weak-order-one-with-exit-bound`
- `cor-mlmc-complexity-for-poisson-tau-leaping`

Examples page:

- `ex-minimum-intensity-coupling-reduces-one-step-variance`
- `ex-chemical-langevin-near-empty-poisson-birth`
- `ex-poisson-tau-leap-negative-population-pure-death`
- `ex-stiff-reversible-explicit-leap-mean-amplification`
- `ex-binomial-guard-prevents-invalid-counts-but-changes-noise`

### Dependencies opened

Direct suppliers used by the assigned proofs were opened before their consumers:

- `def-scalar-poisson-count-law`, `lem-poisson-count-law-normalization-and-moments`, `def-reaction-network-propensity-system-and-generator`, and `def-bernoulli-and-binomial-random-variables`.
- `def-countable-choice`, `def-dependent-choice`, `def-axiom-of-choice`, `thm-countable-product-of-probability-spaces`, `alg-gillespie-direct-method-for-reaction-networks`, `lem-competing-exponential-race-for-reaction-channels`, and `thm-finite-state-gillespie-and-next-reaction-exactness`.
- `def-poisson-and-cox-point-process`, `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law`, and `def-standard-normal-and-normal-laws`.
- `def-mlmc-hierarchy-and-coupled-corrections`, `lem-mlmc-estimator-moments-and-mse`, and `thm-mlmc-complexity-under-rate-assumptions`.
- For the repaired CLE example: `def-brownian-motion`, `thm-existence-of-continuous-brownian-motion`, and `thm-brownian-future-path-markov-property`.

I also read the batch-31 proof contracts and author notes as evidence, not as review verdicts. Both assigned pages are draft and each listed assigned item is an in-flight draft in this run.

## Confirmed defects repaired

1. **`alg-explicit-poisson-tau-leaping` and A-page summary.** The algorithm definition made termination and complexity assertions in the procedure item, including an `O(M_T)` SSA path-cost assertion that fails for a zero-event path (the simulator still performs a draw to decide no event occurs). The algorithm brief requires such properties to live in proved result items. I removed those unsupported property statements, made the unlimited-draw budget branch explicit (`B<∞` before subtracting), and specified the returned endpoint path and terminal statuses. I removed the A-page's now unsupported comparison with event-count SSA. The stepwise Poisson law, invalid-state behavior, and budget-exhausted prefix semantics remain explicit.

2. **`alg-critical-reaction-binomial-guarded-tau-leaping`.** The definition had unproved state-validity, termination, complexity, and variance claims in its procedure item. I removed them, made its independent random inputs explicit using fresh SSA streams and independent uniform trial streams, initialized and incremented the step counter, stated the recorded path output, and distinguished the no-event branch from the critical-event branch. The critical event is specified as occurring strictly before the local horizon, matching the direct-method horizon branch. The binomial example still proves the one-channel variance and overdraw comparison it actually uses.

3. **`thm-minimum-intensity-tau-leap-level-variance`.** The proof assumed a common initial state and used `u_0=0`, but the statement did not require it. The statement also defined `h_\ell` only for `\ell≥1` while using `h_{\ell-1}` at `\ell=1`. I added `T>0`, defined `h_\ell` for `\ell≥0`, and required both paths to start at the same fixed `x_0∈E`. The coupling description now says the two coarse half-step count vectors are accumulated in one coarse leap with rates evaluated at its start state. In the recurrence proof I conditioned on the complete first-half history, rather than only the pair of start states, to justify the centered second-half cross term. This matches the fresh-copy hypothesis. The published source Anderson–Higham, §6, Algorithm 3 and Theorem 2 (author PDF, §§6, PDF pp. 13–14) likewise initializes both paths at the same `x_0` and states equality of their initial states.

4. **`ex-chemical-langevin-near-empty-poisson-birth`.** The previous verification assumed the Gaussian terminal marginal of the CLE without establishing that it belongs to a Markov diffusion with the displayed generator. I replaced that assumption with the process `Z_t=λt+√(λ/V)B_t`. The new step verifies the Markov property from Brownian increments, computes the generator by a Taylor expansion, and derives the terminal Gaussian marginal. The Brownian definition, existence theorem, and future-path Markov theorem are now direct dependencies. The Poisson support, cubic-payoff discrepancy, and negative Gaussian tail computations are unchanged in content.

5. **Proof contracts.** I updated the affected algorithm source quotes, the coupled-variance derivation and boundary evidence, and the near-empty CLE example's dependency citations, derivations, and boundary checks. None of the four repaired items had a `verification.judge` record to remove.

## Review notes and evidence

- The shared-minimum scalar coupling is verified directly from the Poisson mass law: the shared count gives the marginals, the residual difference gives variance `h|λ_1−λ_2|`, and the shared part gives covariance `h min(λ_1,λ_2)`. The 13.1/13 example's factor 261 is correct.
- The one-step Poisson moment identities, finite-state Dynkin identity, weak defect, weak-order theorem, stopped density-model estimate, MLMC rate application, pure-death overdraw probability, and reversible-system mean amplification are supported by their displayed hypotheses and local proofs. In particular, the density-versus-CLE error retains the assumed backward-solution regularity and separate exit term; it is not a time-discretization claim.
- Gillespie (2001), §III, equations (16)–(18) (author PDF, pp. 3–4), states the independent Poisson channel counts under the leap condition and the summed stoichiometric update. Its §IV, equation (12) and surrounding conditions (PDF, pp. 5–6), gives the chemical Langevin drift/noise form and makes clear the approximation conditions. I used this as algorithmic context; the assigned finite-state bounds are checked from their local proofs.
- Anderson–Higham (2012), §6, pp. 11–12 (author PDF), gives the shared-minimum/residual Poisson coupling and the rates 13.1/13 variance example. The current fixed-grid half-step coupling is distinct from its exact event-time path coupling, as the items state.

## Edits and validation

Changed items: `alg-explicit-poisson-tau-leaping`, `alg-critical-reaction-binomial-guarded-tau-leaping`, `thm-minimum-intensity-tau-leap-level-variance`, and `ex-chemical-langevin-near-empty-poisson-birth`. The assigned A-page summary was also edited. No B-page prose, published item, other batch, or plan-spec file was edited.

For all four changed items, reflow completed. Precheck passed for the two algorithms (0 proof sections checked), the coupled-variance theorem, and the CLE example. The single final proof-layout run over all four changed item paths reported 4 items, 12 steps, 0 defects.

## Page verdicts

- **`tau-leaping-and-reaction-diffusion-model-error` (A): pass after the summary edit.** Its claims are supported by the finite-state and stopped-model hypotheses stated in the assigned results, including the separate invalid-state and exit bounds.
- **`tau-leaping-and-reaction-diffusion-model-error-examples` (B): pass.** The pure-death, coupling, binomial-guard, stiff reversible, and CLE support calculations are consistent with their stated assumptions. No B-page or example item required an unlicensed edit beyond the A-page algorithm and the CLE supplier repair.

No mathematical defect remains uneditable within the reviewed batch.

## Blockers and coverage limits

- The repaired CLE example now has three additional published direct dependencies (`def-brownian-motion`, `thm-existence-of-continuous-brownian-motion`, `thm-brownian-future-path-markov-property`). The assigned `batch-31.pages.json` dependency mirror still lists the pre-repair dependencies. This reader did not edit the assignment manifest; it needs owner reconciliation before manifest-dependent validation.
- At handoff the live run was `running` with no dispatch in flight. Its current unrelated blockers were `3a-split` batch 25 and `3a-collect` batch 20. I did not intervene outside batch 31.
- The browser could not retrieve the cited Anderson–Higham–Sun (2014) PDF or Li Lecture 21 PDF in this session. I did not rely on those sources for the corrected proofs; the relevant local proofs and the accessible primary sources listed above were checked. I opened each assigned item/page and each direct dependency used by the assigned proof statements, but did not re-audit the full transitive dependency trees of every published supplier theorem.
