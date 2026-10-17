# Step 3a reader report — batch 47

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `47`

## Opened inventory

Pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/finite-generator-master-equations-and-uniformization.md` — opened; verdict below.
- `library/numerical-differential-equations-and-stochastic-dynamics/finite-generator-master-equations-and-uniformization-examples.md` — opened; verdict below.

Assigned items opened supplier-first, grouped by manifest dependency level:

- Level 0: `def-xd-finite-column-generator`; `lem-xd-finite-matrix-exponential-series`; `lem-xd-geometric-poisson-tail-bound`; `def-xd-countable-nonexplosive-ctmc`; `def-xd-countable-l1-distance`.
- Level 1: `lem-xd-uniformized-matrix-is-stochastic`; `def-xd-finite-state-projection-and-cemetery-lift`.
- Level 2: `thm-xd-finite-generator-master-equation-uniformization`; `alg-xd-budgeted-uniformization-accumulation`.
- Level 3: `thm-xd-uniformization-truncation-and-error`; `thm-xd-finite-state-projection-loss-and-observable-bound`; `ex-xd-two-state-gating-uniformization`; `ex-xd-equal-mean-distinct-probability-vectors`.
- Level 4: `alg-xd-finite-budget-adaptive-projection`; `ex-xd-birth-death-poisson-tail`; `ex-xd-immigration-death-finite-state-projection`.
- Level 5: `thm-xd-finite-budget-adaptive-projection-soundness`.

The direct item dependencies were opened as needed: `cor-mean-value-theorem`; `def-composition-of-probability-kernels`; `def-countable`; `def-countable-choice`; `def-dependent-choice`; `def-factorial-and-falling-factorial`; `def-group-power`; `def-induced-matrix-p-norm`; `def-matrix-free-access-model-for-krylov-methods`; `def-matrix-product-and-identity-matrix`; `def-matrix-space`; `def-p-norms-on-rn`; `def-random-element-and-real-random-variable`; `def-real-exponential-function-and-e`; `def-scalar-poisson-count-law`; `lem-exponential-dominates-one-plus-x`; `lem-exponential-series-has-infinite-radius`; `lem-kernel-composition-is-well-defined-and-associative`; `lem-poisson-count-law-normalization-and-moments`; `thm-algebra-of-derivatives`; `thm-geometric-series`; `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`; `thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums`; `thm-induction-principle`; and `thm-matrix-multiplication-laws`.

Two current-run suppliers outside this batch were read before their assigned consumer: batch-10 items `def-reaction-network-propensity-system-and-generator` and `thm-countable-state-reaction-networks-lyapunov-nonexplosion`. Their statements and the latter proof were checked against `ex-xd-immigration-death-finite-state-projection`. The statement of `thm-countable-product-of-probability-spaces` was also checked for the countable-product premise used in the nonexplosion supplier.

## Review, edit, and evidence

The finite generator and uniformized matrix conventions agree: off-diagonal rates are indexed by destination row and source column, and admissible uniformization produces a nonnegative column-stochastic matrix. The matrix exponential series proof supplies local uniform convergence, differentiation, the commuting-product identity, and uniqueness as used by the master-equation theorem. The Poisson-tail proof follows the exact mass recurrence and the geometric-series sum. The time-split solver's truncation count is `m(K+1)`, its per-step tail bounds add to at most `m G_K(μ)`, and its separate arithmetic certificate is combined by the triangle inequality.

The killed projection keeps mass at the cemetery after first exit. Its lift has zero column sums, its embedded killed-vector error is the lost mass, and the midpoint cemetery value yields the stated half-oscillation observable bound. The adaptive procedure only certifies candidates in its supplied finite list; the soundness theorem does not claim an outside-list existence result. The two-state gate, three-state Poisson prefix and tail, immigration-death lift and return-path witness, and equal-mean distinct laws were checked directly; the displayed matrices, probabilities, and rational prefix sums are consistent.

One definition defect was repaired in the assigned item `def-xd-countable-nonexplosive-ctmc`. Its total exit rate used a sum indexed by an at-most-countable set, but the item and its listed dependencies did not define that sum convention. The definition now specifies the supremum of finite subsums for nonnegative countable families, including the empty subsum, and assigns `+∞` when the subsums are unbounded. This makes each exit-rate expression well-defined and its finiteness condition explicit. The affected assigned consumers were checked: `def-xd-finite-state-projection-and-cemetery-lift`, `thm-xd-finite-state-projection-loss-and-observable-bound`, `alg-xd-finite-budget-adaptive-projection`, `thm-xd-finite-budget-adaptive-projection-soundness`, and `ex-xd-immigration-death-finite-state-projection`.

The affected contract is `research/numerical-optimization-dynamics-2026-10-16-proof-contracts.json`; its singleton/empty-outgoing-rate boundary evidence now records the explicit sum convention. The item had no `verification.judge` record to remove. Reflow reported the item unchanged; precheck passed with 0 proof sections checked and 0 failures. The final proof-layout check is recorded after this report is written.

Authoritative source sections opened for the cited conventions and cross-checks:

- Ward Whitt, *Continuous-Time Markov Chains*, §§3.2 and 3.4, Theorem 3.2 and equations (3.24)–(3.30), PDF pp. 8–16: <https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf>. The source uses row vectors; transposition gives the page's column convention.
- Brian Munsky and Mustafa Khammash, “The Finite State Projection Algorithm for the Solution of the Chemical Master Equation,” §II, equations (2.4)–(2.8) and Theorems 2.1–2.2, printed pp. 044104-2–044104-4: <https://www.atmos.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf>. Theorem 2.2 supplies the componentwise finite-projection and missing-mass bound; the assigned theorem proves the cemetery-lift equality locally.
- Bennett L. Fox and Peter W. Glynn, “Computing Poisson Probabilities,” Proposition 1 and §§1–6, printed pp. 440–445: <https://web.stanford.edu/~glynn/papers/1988/FG88.pdf>. The article discusses recursive Poisson weights, rigorously controlled truncation, and floating-point cautions; the assigned geometric ratio bound is proved directly in its own steps.
- David F. Anderson, *Introduction to Stochastic Processes with Applications to Biology*, Chapter 6, §6.2, Proposition 6.2.2 and Example 6.2.3, PDF pp. 154–155: <https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf>. These give the independent-exponential explosion criterion and the pure-birth explosion example cited by the batch-10 supplier.
- David F. Anderson and Thomas G. Kurtz, “Continuous Time Markov Chain Models for Chemical Reaction Networks,” §2.2, PDF pp. 7–8: <https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf>. This gives the random time-change construction and notes that finite local rates alone do not rule out finite-time explosion.

## Page verdicts

- `finite-generator-master-equations-and-uniformization` (A page): **pass after the definition repair**. Its summary accurately states the column convention, uniformization formula, separate arithmetic error, killed first-exit projection, cemetery mass, and finite-list inconclusive outcome.
- `finite-generator-master-equations-and-uniformization-examples` (B page): **pass**. Its summary accurately describes the four examples. No page prose was edited.

## Defects outside edit scope and blockers

No confirmed defect outside this batch's edit scope was found. No blocker remains.

## Coverage note

Every assigned page and item, each direct dependency needed for the checked proof steps, and the two current-run batch-10 suppliers were opened. I did not independently re-audit every transitive proof beneath published foundational suppliers; those results were checked at the exact statements used by this batch. No unresolved uncertainty in the assigned claims or computations remains.
