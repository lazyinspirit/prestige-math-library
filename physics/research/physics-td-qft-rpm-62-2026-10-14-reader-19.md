# Step 3a reader report — batch 19

**Run:** `physics-td-qft-rpm-62-2026-10-14`  
**Role:** reader  
**Scope:** batch `19` only  
**Review date:** 2026-10-15

## Opened inventory

### Assigned pages

- `library/thermodynamics/td-stochastic-protocols.md` — A page, draft.
- `library/thermodynamics/td-stochastic-protocols-examples.md` — B page, draft.

### Assigned items, read in dependency order

- Definitions and assumptions: `def-td-driven-finite-path-model`, `def-td-detailed-balance-rate-model`, `post-td-canonical-protocol-preparation`, `post-td-stationary-bath-kernel`, `post-td-linear-ornstein-uhlenbeck-bath`, `def-td-finite-memory-reset-model`.
- Theorems: `pthm-td-finite-pathwise-first-law`, `pthm-td-markov-relative-entropy-and-convergence`, `pthm-td-finite-jarzynski`, `pthm-td-finite-crooks`, `pthm-td-ornstein-uhlenbeck-thermal-fluctuations`, `pthm-td-qualified-landauer-reset`, `pthm-td-mean-dissipation`.
- Examples: `ex-td-finite-quench-work-fluctuation`, `ex-td-disconnected-markov-relaxation`, `ex-td-biased-bath-shannon-entropy-decreases`, `ex-td-ornstein-uhlenbeck-spectrum`, `ex-td-biased-memory-reset-bound`, `ex-td-correlated-memory-zero-conditional-reset-cost`.

### Prerequisite statements opened

- Physics suppliers: `def-td-finite-microstate-model`, `post-td-canonical-sampling`, `def-td-si-quantities`, `def-td-galilean-rest-frame`, `def-tdmath-ornstein-uhlenbeck-equation`, `thm-tdmath-ornstein-uhlenbeck-model`, `lem-tdmath-conditional-memory-entropy`, and `def-td-equilibrium-state-domain`.
- Mathematical suppliers used by the assigned items: `thm-natural-logarithm-laws`, `thm-logarithm-derivative-and-integral`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `thm-derivative-of-exponential`, `cor-mean-value-theorem`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-finite-jensen-inequality`, `thm-exponential-two-point-convexity`, and `thm-exponential-is-strictly-increasing`.
- Further direct mathematical supports opened for the draft prerequisites: `def-interval`, `def-cartesian-product`, `def-euclidean-inner-product`, `def-function-space`, `def-function-limit`, `def-natural-numbers`, `def-finite-sum`, `def-matrix-space`, `def-matrix-product-and-identity-matrix`, `def-transpose-of-a-matrix`, `def-brownian-motion`, `def-ito-integral-for-square-integrable-predictable-processes`, `def-complex-exponential`, `def-elementary-predictable-brownian-integrand`, `thm-complex-exponential-addition-and-real-extension`, `thm-existence-of-continuous-brownian-motion`, `thm-ito-integral-process-has-a-continuous-martingale-version`, `thm-ito-isometry-and-linearity-in-predictable-l2`, `cor-deterministic-ito-integrals-are-gaussian`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-gaussian-integral`, `def-function`, `def-finite-probability-space-and-event`, and `def-natural-logarithm`.
- The exact complex-exponential results relevant to the remaining finding were opened: `thm-complex-exponential-is-entire-with-derivative-itself`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, and `def-complex-conjugate-real-imaginary-part-and-modulus`.

The current batch manifest and the batch-19 proof-contract file were also inspected as evidence, not as verdicts. All 19 assigned item carriers and both page carriers were read. Citation and derivation entries were compared with current proof steps where present; boundary source scopes were checked and refreshed for the edited definition.

## Review and repair

The finite path identities, Jarzynski induction, detailed-balance entropy argument, Crooks reversal calculation, conditional OU substitutions, Landauer-style endpoint inequality, and six examples were checked against their stated hypotheses. The pages correctly distinguish adopted assumptions and model deductions from measured observations; this batch contains no reported experiment or measurement. The pathwise first law and the mean-work inequality do not overclaim individual-path bounds. The Markov theorem restricts convergence to connected positive-rate graphs and does not claim monotonic Shannon entropy. The reset theorem carries its entropy identification, bath, energy, and total-entropy premises explicitly.

### Edit

`items/def-td-detailed-balance-rate-model.md`, Definition, second paragraph: the item used “discrete transition kernel” without specifying its domain, codomain, or row-normalization. I added the finite-state definition `K:S×S→[0,1]` with row sums one, and stated detailed balance for a strictly positive `π∈Δ(S)`. The preceding paragraph already defines `Δ(S)` as the probability vectors on `S`. This also matches the stage-kernel convention explicitly defined in `def-td-driven-finite-path-model`.

I checked all in-batch consumers of this definition: `pthm-td-markov-relative-entropy-and-convergence`, `ex-td-disconnected-markov-relaxation`, `ex-td-biased-bath-shannon-entropy-decreases`, and `pthm-td-finite-crooks`. Their uses are covered by the clarified definition; no consumer change was needed. I updated the four contract boundary source excerpts and raw item hashes, and refreshed its risk-review note. The item had no `verification.judge` record.

Validation after the edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-td-detailed-balance-rate-model.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-td-detailed-balance-rate-model.md` — 0 checked, 0 failing.
- Required final `node tools/physics-support/proof-layout.mjs items/def-td-detailed-balance-rate-model.md` — could not complete. Its renderer failed importing `@/components` from the web checkout's `components/library/ItemBody.tsx` (`ERR_MODULE_NOT_FOUND`). No other item was changed after this attempt.

### Uneditable finding

`thm-tdmath-ornstein-uhlenbeck-model` is a draft item in current-run batch 12, outside this assignment. Facts & Assumptions [F6] and Proof step 4.1 use continuity, unit modulus on the imaginary axis, and an antiderivative for the complex exponential to evaluate the Fourier transform. The item's declared prerequisites include `def-complex-exponential` and `thm-complex-exponential-addition-and-real-extension`, whose opened statements define the exponential series and establish addition/real extension, but do not supply the complex derivative or unit-modulus statement. The proof does not derive the missing Fourier-transform facts. The exact existing mathematics suppliers `thm-complex-exponential-is-entire-with-derivative-itself` and `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` supply the derivative and modulus facts, but the current draft item does not cite or depend on them; it also needs a justified antiderivative and convergence calculation. This leaves the supplier's spectrum claim unproved as written. The assigned consumer is `pthm-td-ornstein-uhlenbeck-thermal-fluctuations`; its example consumer is also affected through that theorem. The producer's current raw SHA-256 at split is `34b639b59669c2ee9dd856702ae2b37c80b985195f2d991025375c4b65d717e4`.

## Page verdicts

- **`td-stochastic-protocols` (A): hold for the OU spectrum claim.** The page summary and model qualifications are accurate, and the finite-path, detailed-balance, Jarzynski, Crooks, and reset arguments reviewed here are sound. The OU spectrum theorem has the uneditable batch-12 prerequisite gap described above. Conclusions using the finite canonical-sampling postulate remain conditional on that adopted preparation premise.
- **`td-stochastic-protocols-examples` (B): hold for the OU spectrum example.** The finite quench, disconnected-chain, biased-chain, and two memory-reset calculations are correct as stated. The OU spectrum example inherits the same uneditable mathematical supplier gap; none of the examples reports observations.

## Source and coverage notes

Relevant source passages were checked in [Seifert, *Stochastic thermodynamics, fluctuation theorems, and molecular machines*](https://arxiv.org/html/1205.4176v1) (§2.3.1, lines 497–523: trajectory first law; §3.2.1, lines 717–725: Jarzynski relation; §3.2.3, lines 735–740: Crooks relation; §6.1.1–6.1.2, lines 1091–1113: finite rates, master equation, and detailed balance; §7.3.1, lines 1315–1320: information-erasure context), [Jarzynski's 1997 paper](https://www.physics.uci.edu/~tritz/BP/Jarz97.pdf) (PDF lines 181–195, equality and its stated weak-coupling qualification), [Crooks's 1999 paper](https://journals.aps.org/pre/pdf/10.1103/PhysRevE.60.2721) (Eq. (11), PDF lines 256–270), [Jarzynski's *Nonequilibrium Work Relations* lecture notes](https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Nonequilibrium%20Work%20Relations.pdf) (PDF pages P4–P6, work-distribution and exponential-work relations), and [Pavliotis, *Stochastic Processes and Applications*](https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf) (§3.7, PDF lines 5098–5115; §§4.1–4.2, lines 5987–6034: linear OU dynamics, stationary Gaussian, and covariance). They support the cited background relations; the batch's theorem proofs were checked independently from their explicit assumptions and dependencies. The cited [*Relative Entropy and Relaxation to Equilibrium*](https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Relative%20Entropy%20And%20Relaxation%20To%20Equilibrium.pdf) and [*Detailed Balance*](https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Detailed%20Balance.pdf) lecture PDFs were fetched, but the web text extractor returned no readable body for those PDFs; no proof acceptance relies on those unreadable passages. Seifert's review does provide readable finite-state master-equation and detailed-balance statements.

The reader review and report/findings artifacts are complete. The required proof-layout validation is blocked because its renderer could not resolve `@/components` from the web checkout; the exact error is recorded above. The OU supplier defect is also an open content blocker for its spectrum claim. This review did not audit unrelated transitive proof chains of already-published mathematical suppliers.
