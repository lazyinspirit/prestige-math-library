# Batch 79 — linear contextual bandits and LinUCB

## Assignment and current run state

- Run: `machine-learning-all-101-2026-10-19`; pair: `linear-contextual-bandits-and-linucb` and its examples page.
- Read `CLAUDE.md`, `README.md`, the Step 1-relevant portions of `SCHEMA.md` and `WORKFLOW.md`, `briefs/beta-scaffold.md`, the exact batch task, `research/plan-machine-learning-track.md` ML-71 section, `research/plan-spec.json` pair row, and `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json`.
- No `research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md` was present.
- The supplied scheduling input was `b6ce6043d78a870dd99f4b4dc834c92b2ef8d144dc641b04559a9405ae1aa61d`; it places batch 79 at dependency level 1 with prerequisite batches 13 and 73. Fresh `.autopilot/` status reports 1-scaffold at 47/101 covered, missing units 4, 5, 6, 10, 11, 12, 29, 30, and 46, no workers in flight, and a Step 1 hold. The current `research/machine-learning-all-101-2026-10-19-step1-blockers.json` records a stage-stalemate for units 15, 28, 31, and 46, all covered but artifact-incomplete and no longer running. This pair continued independently.
- The current pair manifest contains the ten dispatched page requirements. A/B pages are frontmatter-only and have no summaries.

## Plan/spec reconciliation

- The complete ML-71 design controls the mathematics and proof route. Its proposed core items are retained: `def-linear-contextual-bandit-model`, `alg-linucb`, `thm-self-normalized-linear-confidence-ellipsoid`, and `thm-linucb-regret`; local lemmas and the stated expected-regret corollary are added to supply every proof step.
- The task/spec page requirement `the-determinant-of-a-linear-operator` is broader than the design's actual coordinate-matrix proof. The proof uses the matrix determinant, multiplicativity, the ring rank-one update, Cholesky, and the local determinant calculations; it does not need a basis-free operator determinant. The page requirement is preserved in the assigned manifest.
- The task/spec page requirement `the-moore-penrose-pseudoinverse-and-regularised-least-squares` is used for its Tikhonov objective and unique minimizer. A Moore–Penrose inverse is not used: the positive ridge term makes each normal matrix invertible. The page requirement is preserved.
- The detailed design calls for “ML-12 — linear-model vocabulary only,” whereas the dispatched spec names `ml02-linear-sparse-models`. The current `ml02-linear-sparse-models` page and its actual `def-linear-regression-objectives` body were inspected. That draft definition supplies fixed-design least-squares/ridge vocabulary only; it does not supply contextual feature maps or conditional sub-Gaussian noise. The model states these contextual hypotheses locally and has no logical dependency on that item. Owner reconciliation: confirm whether “ML-12” is the intended interface label for the current `ml02-linear-sparse-models` page. The exact page requirement remains in the manifest.
- The design's confidence radius need not give `beta_1 >= 1` for every `delta`. LinUCB therefore uses `beta_t = max(1, rho_t^2)`, where `rho_t` is the stated self-normalized radius. The confidence theorem proves coverage for the smaller raw radius, so it also proves coverage for this inflated set; this makes the source regret theorem's `beta_t >= 1` hypothesis literal.
- The design's compact-action wording gives pointwise attainment, but a randomized/context-dependent action set also needs a measurable predictable maximizer. The model/algorithm states this selection requirement explicitly; finite ordered action sets use the first maximizer. Compactness alone is not used as a measurable-selection theorem.
- The expected-regret corollary sets `delta=1/n`, so its statement is for `n >= 2`; `L >= 1` is a harmless normalization of any finite feature-norm bound. These domains make the displayed `log(n L)` positive and allow the source's asymptotic form to follow from the explicit determinant/radius expression.

## Supplier and prerequisite audit

- `def-online-decision-protocol` (batch 73, draft): read the complete current Definition. It supplies the online timing convention that a learner chooses before current-round feedback. `def-linear-contextual-bandit-model` depends on this actual carrier and locally specifies the context/feature map, filtration, reward equation, and MGF assumptions. Draft status is recorded; body inspection is not acceptance.
- `def-linear-regression-objectives` (batch 13, draft): read the complete current Definition. It uses the fixed-design objective `||y-X beta||^2 + lambda ||beta||^2`; it does not assert contextual realizability or a sequential-noise condition. The assigned design asks only for linear-model vocabulary; the contextual model and sample-sum ridge normalization are written locally. No supplier excerpt or theorem was inferred from this draft item.
- Read `def-tikhonov-regularised-least-squares` and the complete proof of `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`. The model's ridge estimator is the unique minimizer for the design matrix with rows `A_s^T` and response vector `(X_s)`, with the unaveraged sample-sum convention.
- Read the current definitions of filtered probability space, random element/real random variable, conditional expectation, expectation, martingale/supermartingale, and the Axiom of Choice. The martingale definition inherits AC through the conditional-expectation AE-class interface.
- Read the complete proof of `thm-optional-sampling-for-bounded-stopping-times`. Its hypotheses require AC, integrable adapted supermartingales, and stopping times bounded by a deterministic horizon. The local confidence crossing proof uses only `tau wedge N` and then a countable increasing union.
- Read the statements and complete proofs of `cor-markov-inequality-for-random-variables`, `thm-determinant-multiplicative`, `lem-determinant-rank-one-update-over-a-commutative-ring`, `thm-adjugate-identity-over-a-commutative-ring`, and `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`. The local elliptical-potential proof specializes the rank-one update to SPD real matrices, derives `adj(V)=det(V)V^{-1}` from the adjugate identity, and records determinant positivity via Cholesky.
- Read the complete proof of `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, the relevant Cauchy–Schwarz proof, `thm-am-gm`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, and `thm-monotonicity-of-the-integral`. These support the local trace/determinant and scalar-log bounds.
- The Gaussian integral supplier `lem-positive-definite-gaussian-integral` explicitly assumes Countable Choice and its proof uses it for the Lebesgue/product/change-of-variables interfaces. The confidence branch therefore records AC for conditional-expectation/supermartingale/optional-sampling interfaces and Countable Choice for the Gaussian integral; these uses are kept distinct. The owner design's full AC assumption implies the weaker Countable Choice premise, but the exact supplier use is recorded.
- The mixture proof must pass from deterministic MGF parameter `q` to the bounded predictable scalar `u^T A_t`. This is supplied locally by `lem-linucb-predictable-mgf-substitution`; it uses a finite-valued approximation and exponential-moment domination, not an unproved random-parameter substitution.

## Source reading and harvest plan

- Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms* (2020 online edition), `https://tor-lattimore.com/downloads/book/book.pdf`: read §§19.1–19.3, the complete proof of Lemma 19.4 and Theorem 19.2, Corollary 19.3's statement, and §20.1 through the statements/proofs of Theorems 20.4–20.5. The book leaves the Gaussian-mixture supermartingale Lemma 20.3 as Exercise 20.5; the local lemma above proves it. The source's optional maximal-inequality route is replaced by the controlling plan's bounded optional-sampling/Markov route.
- Y. Abbasi-Yadkori, D. Pál and C. Szepesvári, “Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems,” `https://arxiv.org/pdf/1102.2670`: read Lemma 1, Theorems 2–3, Corollary 1, Lemma 4, Assumption A1, Theorem 8, Corollary 10, and Theorem 13 with its proof. This independent treatment confirms the mixture/self-normalized mechanism and optimism/determinant analysis. Its linear-bandit example uses different mean-range and feature-norm conventions; none of its constants are silently transferred.
- University of Washington CSE 541 lecture notes, Chapter 2, `https://courses.cs.washington.edu/courses/cse541/24sp/resources/lecture_notes.pdf`: read §2.2's fixed-design least-squares and Gaussian/sub-Gaussian projection calculations. It supports the finite-dimensional (V^{-1}) geometry only; its fixed-design/independence calculation is not used as the adaptive confidence proof.
- Jiří Lebl, *Basic Analysis II: Introduction to Real Analysis, Volume II*, `https://www.jirka.org/ra/realanal2.pdf`: inspected §8.2.2 Proposition 8.2.7 and §8.2.3 Propositions 8.2.8–8.2.9, including the complete arguments used for matrix-coordinate topology and determinant continuity in `lem-linucb-ridge-estimates-are-measurable`.
- The coverage ledger records every harvested result and disposition. An initial URL at `jirilebl.github.io` was inaccessible; a search found the author-hosted `jirka.org` PDF, which was fetched and inspected. The original failure, search, successful alternate, and source stamps are preserved; no source remains unresolved or dropped.

## Item inventory, logical dependencies, and levels

The inventory was set in `research/machine-learning-all-101-2026-10-19-batch-79.pages.json` before the carriers were written. Levels count all current-run item suppliers, including batch 73:

- Level 0: `lem-linucb-elliptical-potential`, `lem-linucb-trace-determinant-bound`, `lem-linucb-predictable-mgf-substitution`.
- Level 1: `def-linear-contextual-bandit-model` (its only in-run item supplier is `def-online-decision-protocol`, batch 73).
- Level 2: `lem-linucb-ridge-information-matrix`.
- Level 3: `lem-linucb-ridge-estimates-are-measurable`, `lem-linucb-gaussian-mixture-supermartingale`.
- Level 4: `alg-linucb`, `thm-self-normalized-linear-confidence-ellipsoid`.
- Level 5: `thm-linucb-regret`.
- Level 6: `cor-linucb-expected-regret`.
- B page in increasing level: `ex-linucb-feature-norm-violation` (2), `ex-linucb-two-context-two-action-update` (5), `ex-linucb-unbounded-parameter-norm` (5), `ex-linucb-mean-range-exceeds-one` (6).

The finalized inventory includes exact proof contracts, source harvest, coverage, source-fetch stamps, cross-batch page/item inputs, scoped validation outcomes, and per-item Step 1 decisions. No shared plan, published item, engine state, or verdict is in this batch's write scope.

## Authoring checkpoints

### `lem-linucb-elliptical-potential` — complete draft

- Claim: for `V_t = V_{t-1} + a_t a_t^T` with `V_0 = lambda I`, the local identity is `det(V_t)/det(V_{t-1}) = 1 + a_t^T V_{t-1}^{-1} a_t`, and `sum min(1,u_t) <= 2 log(det(V_n)/det(V_0))`.
- Conventions: real column vectors; `a^T` is transpose; `log` is the natural logarithm; the inverse quadratic form is nonnegative because the design matrix is positive definite.
- Direct dependencies: Cholesky/positive determinant, the commutative-ring rank-one update and adjugate identity, invertibility iff determinant nonzero, and the natural-log integral/order/product laws. The proof derives the specialization `adj(V)=det(V)V^{-1}` locally and proves `min(1,u) <= 2 log(1+u)` from the integral formula.
- Sources and locators: Lattimore–Szepesvári, *Bandit Algorithms*, §19.3, complete Lemma 19.4 proof; Abbasi-Yadkori–Pál–Szepesvári, Lemma 4, PDF pp. 4–5. Both full texts and the complete relevant arguments were inspected.
- Decision: retained the determinant update proof locally; no matrix-determinant lemma beyond the verified ring supplier is imported. No unresolved mathematical dependency identified.
- Validation: final proof-layout, strict contract, render, content, and scoped dependency checks passed; see the final completion checkpoint below.

### `lem-linucb-trace-determinant-bound` — complete draft

- Claim: for feature norms at most `L`, `log(det(V_n)/det(lambda I)) <= d log(1+n L^2/(d lambda))`.
- Conventions: `tr(M)` is defined locally as the sum of diagonal entries; all eigenvalues are positive because the regularized Gram matrix is positive definite.
- Direct dependencies: real finite-dimensional spectral theorem, determinant multiplicativity/transpose, AM–GM, Euclidean norm, and monotonicity of the natural logarithm. The trace identity `tr(Q diag(mu) Q^T)=sum mu` is expanded in coordinates.
- Sources and locators: Lattimore–Szepesvári, *Bandit Algorithms*, §19.3, Lemma 19.4 proof; Abbasi-Yadkori–Pál–Szepesvári, Lemma 4, PDF p. 4. The source uses the same trace/eigenvalue route; no spectral claim is imported beyond the read published supplier.
- Decision: kept this as a separate local lemma so the confidence proof retains the exact log-determinant form and the regret item gets the trace upper bound through an explicit supplier.
- Validation: final proof-layout, strict contract, render, content, and scoped dependency checks passed; see the final completion checkpoint below.

### `lem-linucb-predictable-mgf-substitution` — complete draft

- Claim: a deterministic-parameter conditional `1`-sub-Gaussian MGF bound extends to every bounded sigma-algebra-measurable scalar coefficient `Q`, yielding `E[exp(Q eta-Q^2/2) | G] <= 1`.
- Conventions: conditional expectations are almost-sure classes under AC; the extension is proved by finite-valued approximations and an explicit integrable exponential envelope, rather than by substituting a random parameter into a deterministic inequality.
- Direct dependencies: the conditional-expectation definition and order/linearity/L1-contraction theorem, exponential derivative/chain rule, and the mean value theorem. AC is used only for the conditional-expectation interface.
- Sources and locators: Lattimore–Szepesvári, *Bandit Algorithms*, §20.1 conditional exponential-supermartingale calculation; Abbasi-Yadkori–Pál–Szepesvári, Lemma 1 and Theorem 3, PDF pp. 1–3. The published treatments motivate the predictable coefficient, while the local proof supplies the bounded-random-coefficient passage in full.
- Decision: this item is an explicit prerequisite of the Gaussian-mixture supermartingale; no random-coefficient MGF rule is assumed without proof. No unresolved mathematical dependency identified.
- Validation: final proof-layout, strict contract, render, content, and scoped dependency checks passed; precheck passed; see the final completion checkpoint below.

### `def-linear-contextual-bandit-model` — complete draft

- Claim and conventions: rounds have pre-reward filtration `F_t` containing the observed context, available feature set, and selected feature; the reward is `X_t=<theta*,A_t>+eta_t`; the conditional MGF has variance proxy 1; features satisfy `||A||_2<=L` with `L>=1`; `V_t=lambda I+sum A_s A_s^T` and `theta_hat_t=V_t^{-1}sum A_s X_s` use unaveraged sample sums.
- Well-definedness: `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser` applies to the matrix with rows `A_s^T`, response vector `(X_s)`, and parameter `lambda`; it proves the formula is the unique ridge minimizer. The separate local ridge-information lemma proves the SPD and inverse-order properties needed by the confidence and determinant arguments.
- Direct dependencies: `def-online-decision-protocol` (draft batch 73) for choose-before-feedback timing; current random-element, filtration, conditional-expectation and Euclidean-inner-product definitions; Tikhonov objective and unique-minimizer theorem. The `ml02` fixed-design objective is not a logical dependency.
- Sources and locators: Lattimore–Szepesvári, *Bandit Algorithms*, §§19.1–19.2; Abbasi-Yadkori–Pál–Szepesvári, Assumption A1, §5.1 and equation (16); UW CSE 541 Chapter 2 §2.2 for fixed-design confidence geometry only. Complete relevant text was inspected.
- Well-definedness caveat: pointwise finiteness/compactness gives attainment, while a policy over context-dependent sets must still supply a measurable predictable maximizer. Finite ordered sets use first-maximizer tie breaking; compact sets are used only with such a selector.
- Validation: no phase proof applies to this definition; strict contract, render, content, and scoped dependency checks passed; see the final completion checkpoint below.

### `lem-linucb-ridge-information-matrix` — complete draft

- Claim: every `V_t=lambda I+sum A_s A_s^T` is symmetric positive definite, has positive determinant, and satisfies `x^T V_t^{-1}x <= ||x||_2^2/lambda`.
- Proof route: quadratic-form positivity, real orthonormal eigenbasis with eigenvalues at least lambda, then Cholesky/triangular determinant positivity and invertibility. The argument covers the empty-sum case `t=0`.
- Direct dependencies: the local model definition; Euclidean inner product; real spectral theorem; Cholesky definition/theorem; determinant and inverse interfaces. No choice principle is used.
- Sources and locators: Lattimore–Szepesvári, *Bandit Algorithms*, §19.2 and equations (19.4)–(19.6); UW CSE 541 Chapter 2 §2.2 for fixed-design least-squares geometry. A Stanford CS205L reference present in an early scaffold was removed because its complete text had not been inspected; no claim relies on it. The complete published Tikhonov theorem proof was read for estimator normalization.
- Validation: final proof-layout, strict contract, render, content, and scoped dependency checks passed; precheck passed; see the final completion checkpoint below.

### `alg-linucb` — complete draft

- Claim: at each round select an attained maximizer of `theta_hat^T a + sqrt(beta_t)||a||_(V^{-1})`, with `rho_t` the explicit Gaussian-mixture radius and `beta_t=max(1,rho_t^2)`, then update the sample-sum `V_t`, `b_t`, and ridge estimate.
- Conventions: finite ordered action sets break ties by first maximizer; compact sets require the model's measurable predictable selector. The `max(1,...)` inflation satisfies the regret theorem's `beta_t>=1` condition without weakening confidence coverage.
- Direct item dependencies: `def-determinant-of-a-square-matrix`, `def-euclidean-inner-product`, `def-linear-contextual-bandit-model`, `def-natural-logarithm`, `lem-linucb-ridge-estimates-are-measurable`, `lem-linucb-ridge-information-matrix`, and `thm-natural-logarithm-laws`. The ridge lemmas justify the estimator/inverse and its measurable use in the procedure.
- Sources and locators: Lattimore–Szepesvári, *Bandit Algorithms*, §19.2 and §20.1; Abbasi-Yadkori–Pál–Szepesvári, §5.1, Table 1 and equation (21). Both algorithms and their confidence-radius conventions were inspected in full relevant context.
- Validation: no phase proof applies to this algorithm; strict contract, render, content, and scoped dependency checks passed; see the final completion checkpoint below.

### `lem-linucb-gaussian-mixture-supermartingale` — complete draft

- Claim: the density mixture of the fixed-parameter exponential processes equals `sqrt(det(V_0)/det(V_t))*exp(0.5 S_t^T V_t^{-1}S_t)` and is a nonnegative integrable supermartingale in the shifted post-reward filtration `H_t=F_{t+1}`.
- Conventions and hypotheses: `F_t` contains past feedback and the current feature before noise; predictable-coefficient MGF use is justified by the separate level-0 approximation lemma; `V_t` is the regularized matrix; the Gaussian prior is `N(0,lambda^{-1}I)`.
- Direct dependencies: model, predictable-MGF substitution lemma, ridge SPD lemma, conditional expectation/supermartingale interfaces, Tonelli, Gaussian integral, and nonnegative change of variables. The proof shows integrability before invoking optional sampling later.
- Axioms: AC for conditional-expectation and supermartingale interfaces; Countable Choice for the Gaussian integral and C1 change of variables. No hidden independence or iid assumption is used.
- Sources and locators: Lattimore–Szepesvári, §20.1, Lemma 20.3 and Theorem 20.4 proof; Abbasi-Yadkori–Pál–Szepesvári, Lemma 1 and Theorem 3, PDF pp.1–3. The book labels Lemma 20.3's mixture-supermartingale proof an exercise; the local argument supplies it.
- Validation: final proof-layout, strict contract, render, content, and scoped dependency checks passed; precheck passed; see the final completion checkpoint below.

### `thm-self-normalized-linear-confidence-ellipsoid` — complete draft

- Claim: simultaneously for every round in the finite model horizon, the ridge estimate is within `rho_t = sqrt(lambda)m_2 + sqrt(2 log(1/delta)+log(det(V_{t-1})/lambda^d))` in the `V_{t-1}` norm with probability at least `1-delta`.
- Proof route: stop at the first mixture crossing, truncate at the deterministic horizon, apply the actual bounded optional-sampling theorem to the integrable supermartingale, then Markov. The ridge bias is bounded by `sqrt(lambda)||theta*||_2` using the local inverse-order lemma and weighted inner-product norm.
- Direct dependencies: `cor-markov-inequality-for-random-variables`, `def-axiom-of-choice`, `def-countable-choice`, `def-inner-product-norm`, `def-linear-contextual-bandit-model`, `def-natural-logarithm`, `def-real-and-complex-inner-product-space`, `def-sigma-algebra`, `lem-linucb-gaussian-mixture-supermartingale`, `lem-linucb-ridge-information-matrix`, `lem-linucb-ridge-estimates-are-measurable`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-natural-logarithm-laws`, `cor-triangle-inequality-for-inner-product-norm`, `thm-determinant-of-a-triangular-matrix`, and `thm-optional-sampling-for-bounded-stopping-times`.
- Axioms: AC is used at the optional-sampling/conditional-expectation interfaces; Countable Choice is carried through the mixture integral.
- Sources and locators: Lattimore–Szepesvári, §20.1, Theorems 20.4–20.5; Abbasi-Yadkori–Pál–Szepesvári, Theorem 3 and Corollary 10. The local crossing proof follows the controlling bounded-stopping-time route, not an unproved unbounded optional-stopping argument.
- Validation: final proof-layout, strict contract, render, content, and scoped dependency checks passed; precheck passed; see the final completion checkpoint below.

### `thm-linucb-regret` — complete draft

- Claim: under the per-round optimal-mean range `sup_{a,b in A_t}<theta*,a-b> <= 1` and the algorithm's nondecreasing `beta_t>=1`, `Rhat_n <= sqrt(8 n beta_n log(det(V_n)/det(V_0))) <= sqrt(8 d n beta_n log(1+nL^2/(d lambda)))` with probability at least `1-delta`.
- Proof route: the confidence event makes all true means lie below UCB; maximization gives optimism; the selected action's confidence error bounds each gap by `2 sqrt(beta_t)||A_t||_(V^{-1})`; cap by the range one bound, square/sum by Cauchy–Schwarz, then apply the locally proved determinant potential and trace lemmas.
- Direct dependencies: LinUCB algorithm, confidence theorem, local elliptical-potential lemma, and local trace-determinant lemma. The direct `[A1]` AC and `[A2]` Countable Choice branches are carried to this consumer.
- Sources and locators: Lattimore–Szepesvári, §19.3, Assumption 19.1/Theorem 19.2/Lemma 19.4; Abbasi-Yadkori–Pál–Szepesvári, §5.1, Theorem 13 and proof. The paper uses a different mean-range convention; the local proof verifies the plan's range-one constant.
- Validation: final proof-layout, strict contract, render, content, and scoped dependency checks passed; precheck passed; see the final completion checkpoint below.

### `cor-linucb-expected-regret` — complete draft

- Claim: for `n>=2`, `L>=1`, `delta=1/n`, expected pseudo-regret satisfies `R_n <= B_n+1 <= C(lambda,m_2,L) d sqrt(n) log(nL)` with the explicit radius/determinant expression and constant in the carrier.
- Proof route: on the good event use the high-probability bound; on its complement use `Rhat_n<=n` from the range-one assumption, giving the additive failure cost `1`. Bound `beta_n` and the log-determinant by `d log(nL)` using the explicit trace result. This item defines `R_n=E[Rhat_n]` as expected pseudo-regret and does not conflate it with realized reward regret.
- Direct dependencies: regret theorem, algorithm schedule, trace-determinant lemma, expectation linearity/monotonicity and indicator expectation, and natural-log laws. AC and Countable Choice are carried through the high-probability supplier.
- Sources and locators: Lattimore–Szepesvári, §19.3, Corollary 19.3; Abbasi-Yadkori–Pál–Szepesvári, §5.1, Theorem 13 and its expected-regret caveat. The source corollary suppresses fixed parameters; the local constant is explicit in `lambda`, `m_2`, and `L`.
- Validation: final proof-layout, strict contract, render, content, and scoped dependency checks passed; precheck passed; see the final completion checkpoint below.

### Model measurability amendment

- `def-linear-contextual-bandit-model` was clarified to state that `F_t` contains all prior-round contexts, choices, and feedback, and that the attained true-mean maximum is itself `F_t`-measurable. This is required for high-probability pseudo-regret to be a random variable. The measurable predictable LinUCB maximizer remains an explicit selection hypothesis. Direct and indirect consumers use the same filtration and timing convention.

## Final completion checkpoint

### Added item: `lem-linucb-ridge-estimates-are-measurable` (level 3)

- Claim and conventions: under the finite-dimensional model and entrywise Euclidean/Borel matrix topology, `V_t`, `b_t`, `G_t`, `S_t`, `det(V_t)`, and `V_t^{-1}b_t` are measurable through time `t+1`. Positive ridge regularization gives `det(V_t) >= lambda^d > 0`; the proof obtains measurable inverse entries from cofactors, the adjugate identity, and the measurable reciprocal on `[lambda^d,infinity)`.
- Direct dependencies: `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `def-borel-sigma-algebra`, `def-linear-contextual-bandit-model`, `def-matrices-over-a-commutative-ring`, `def-matrix-minors-cofactors-and-adjugate`, `def-matrix-product-and-identity-matrix`, `def-matrix-space`, `def-measurable-function-between-measurable-spaces`, `lem-field-is-a-commutative-ring`, `lem-linucb-ridge-information-matrix`, `thm-adjugate-identity-over-a-commutative-ring`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-continuous-preimages-of-borel-sets-are-borel`, and `thm-reals-field`.
- Source and locator: Jiří Lebl, *Basic Analysis II*, `https://www.jirka.org/ra/realanal2.pdf`, §8.2.2 Proposition 8.2.7 and §8.2.3 Propositions 8.2.8–8.2.9, PDF pp. 25–29. The source harvest maps these results to this item; its full alternate PDF and cited arguments were inspected. Lattimore–Szepesvári, *Bandit Algorithms*, `https://tor-lattimore.com/downloads/book/book.pdf`, §19.2, supplies estimator context.
- Decision and unresolved obligations: added as a necessary local prerequisite because the confidence theorem's event and random radius must be measurable. The failed initial Lebl URL was recovered from the author-hosted alternate; no unresolved source or mathematical obligation remains.
- Validation: precheck passed; final proof-layout and strict proof-contract checks passed. The contract records all four proof steps and exact supplier statements.

### B-page examples

- `ex-linucb-feature-norm-violation` (level 2): the deterministic candidate feature `(2,0)` violates `L=1`, while the ridge update remains `diag(5,1)`. Dependencies: `def-linear-contextual-bandit-model`, `def-matrix-product-and-identity-matrix`. Source: Lattimore–Szepesvári, `https://tor-lattimore.com/downloads/book/book.pdf`, §§19.2–19.3. This example checks the feature-bound premise and does not claim a failure of the theorem under that premise.
- `ex-linucb-two-context-two-action-update` (level 5): with ordered features `e_1,e_2`, zero rewards, and `V_1=diag(2,1)`, first-round tie-breaking selects `e_1`, after which the second-round confidence width selects `e_2`. Dependencies: `alg-linucb`, `def-linear-contextual-bandit-model`. Sources: Lattimore–Szepesvári, `https://tor-lattimore.com/downloads/book/book.pdf`, §19.2; Abbasi-Yadkori–Pál–Szepesvári, `https://arxiv.org/pdf/1102.2670`, §5.1, Table 1 and estimator (16).
- `ex-linucb-unbounded-parameter-norm` (level 5): for each `M>0`, the one-dimensional zero-data estimate is zero and omitting `sqrt(lambda)m_2` leaves radius `sqrt(2 log 2)`, while the true error is `M`. Dependencies: `def-linear-contextual-bandit-model`, `thm-self-normalized-linear-confidence-ellipsoid`. Sources: Lattimore–Szepesvári, `https://tor-lattimore.com/downloads/book/book.pdf`, §20.1 Theorem 20.5; Abbasi-Yadkori–Pál–Szepesvári, `https://arxiv.org/pdf/1102.2670`, §5.
- `ex-linucb-mean-range-exceeds-one` (level 6): features `0,2` with `theta*=1`, `L=2`, and zero noise satisfy the model but have true-mean range 2, outside the regret theorem's range-one hypothesis. Dependencies: `def-linear-contextual-bandit-model`, `thm-linucb-regret`. Sources: Lattimore–Szepesvári, `https://tor-lattimore.com/downloads/book/book.pdf`, §19.3 Theorem 19.2; Abbasi-Yadkori–Pál–Szepesvári, `https://arxiv.org/pdf/1102.2670`, Theorem 13.
- All four examples have complete verification arguments, exact statement references, and current proof-contract entries. Precheck passed for each.

### Final scoped validation and blockers

- `proof-contract.mjs ... --strict`: 15/15 items, 0 errors and 0 warnings. Contracts were regenerated from current item text after the confidence measurability facts and mixture event-integral argument were finalized.
- `proof-layout.mjs` on all 15 assigned items: 60 steps, 0 defects. `precheck.mts` on the assigned items: 13 proof-bearing items checked, 0 failing; the definition and algorithm have no phase proof.
- `rendercheck.mjs` on 15 items and both pages: 17 files, all KaTeX spans and renderer YAML passed. `content-policy.mjs`: 15 items, 0 errors/warnings. Focused `depcheck.mjs`: 15 assigned items passed, with selected page/prerequisite-cycle checks covering 1,348 items and 190 pages. Statement-first check on the 15 assigned items: 0 defects.
- `coverage-checklist.mjs`: 2 pages, 30 harvested results, 0 errors/warnings. `source-fetch-check.mjs --stamp` and the subsequent check both passed: 6/6 page-source entries fetch-verified and resolved, with 0 documented drops. The earlier recovered Lebl URL history remains in coverage and source evidence.
- Scoped dependency closure from the 15 assigned items contains 16 in-run items after following `def-linear-contextual-bandit-model` to batch 73's `def-online-decision-protocol`; the dependency-level checker reports 0 errors. Assigned item levels are the manifest levels above.
- The whole-run item-level command remains blocked by 81 unrelated empty scaffold inventories (examples include `algorithmic-stability-and-generalization`, `distribution-shift-and-domain-adaptation`, and `adversarial-bandits-and-importance-weighted-feedback`). No other batch manifest was changed. The whole-run batch-level command remains blocked while parsing unrelated `items/lem-strong-rrqr-interpolative-decomposition-returns-a-status.md:24` (`Nested mappings are not allowed in compact mappings`). No other item was changed.
- Fresh `.autopilot/` status and the current Step 1 blocker file confirm the run remains held by owner repair/recertification for units 15, 28, 31, and 46. The `ML-12` prose label versus dispatched `ml02-linear-sparse-models` page ID remains for owner reconciliation; the actual fixed-design vocabulary was inspected, the page requirement was retained, and contextual hypotheses are stated locally.
- Both A/B pages have frontmatter only and empty bodies. `page_layout: compact-v1` has not been stamped: current HEAD `50139bdcb6` (“Defer compact construction artifact scans until author drain”) confirms the native engine defers run-wide compact preparation, and invoking its run-scoped writer for this pair would touch other batches. No summary prose was authored.
- Step 1 records: none existed before this final audit. The required CLI recorded `ready` for all 15 assigned items, with each item's examined direct dependency IDs; all 15 records were re-read and their hashes/dependency lists verified. No `--owner` flag was used and no prior escalation was overwritten. These records indicate author readiness only, not independent approval or publication.
- Per-item decision and next action: every inventory item below is `ready`; no local authoring action remains. The owner’s next action is the normal independent review. Exact item IDs, levels, placement, and direct dependency edges are the assigned manifest’s `items`, `dependency_level`, and `deps` fields, which were checked against each carrier frontmatter; each Step 1 record also stores the examined direct IDs.

| Item | Level | Step 1 decision | Next action |
|---|---:|---|---|
| `lem-linucb-elliptical-potential` | 0 | ready | owner review |
| `lem-linucb-trace-determinant-bound` | 0 | ready | owner review |
| `lem-linucb-predictable-mgf-substitution` | 0 | ready | owner review |
| `def-linear-contextual-bandit-model` | 1 | ready | owner review; page-label reconciliation is logged above |
| `lem-linucb-ridge-information-matrix` | 2 | ready | owner review |
| `lem-linucb-ridge-estimates-are-measurable` | 3 | ready | owner review |
| `lem-linucb-gaussian-mixture-supermartingale` | 3 | ready | owner review |
| `alg-linucb` | 4 | ready | owner review |
| `thm-self-normalized-linear-confidence-ellipsoid` | 4 | ready | owner review |
| `thm-linucb-regret` | 5 | ready | owner review |
| `cor-linucb-expected-regret` | 6 | ready | owner review |
| `ex-linucb-feature-norm-violation` | 2 | ready | owner review |
| `ex-linucb-two-context-two-action-update` | 5 | ready | owner review |
| `ex-linucb-unbounded-parameter-norm` | 5 | ready | owner review |
| `ex-linucb-mean-range-exceeds-one` | 6 | ready | owner review |
