# Step 3a reader report — batch 20

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `20`

## Active state and scope

The autopilot status was `running`, at `3a-read`; no worker was in flight. The batch manifest assigns two draft pages and five draft items. I read the repository instructions, the reader brief, the batch manifest and the task-specific proof contract. The report and findings file are the only new workflow outputs for this review.

## Opened inventory

Assigned pages:

- `library/inverse-problems/posterior-contraction-in-gaussian-sequence-inversion.md`
- `library/inverse-problems/posterior-contraction-in-gaussian-sequence-inversion-examples.md`

Assigned items:

- `items/def-ip-posterior-contraction-rate.md`
- `items/thm-ip-conjugate-gaussian-sequence-contraction.md`
- `items/ex-ip-polynomial-singular-value-posterior-contraction.md`
- `items/ex-ip-exponential-singular-value-posterior-contraction.md`
- `items/cex-ip-point-mass-prior-excludes-truth-no-contraction.md`

The required local supplier statements and relevant proof passages were checked for the claims in those items. Same-run draft suppliers opened were `def-ip-gaussian-sequence-inverse-model`, `thm-ip-finite-linear-gaussian-posterior`, and its evidence supplier `thm-ip-function-space-posterior-propriety`. I also checked `thm-finite-gaussian-process-posterior-and-predictive-laws` as a finite-Gaussian supplier. Its role was limited to verifying the cited formulas and evidence argument.

Other direct mathematical prerequisites opened were:

- `def-axiom-of-choice`, `def-countable-choice`, `def-independent-random-elements`, `def-standard-normal-and-normal-laws`, `def-multivariate-normal-law`, `def-separable-space`, `def-real-power`, `def-natural-logarithm`, and `def-real-exponential-function-and-e`;
- `thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel`, `thm-dynkin-pi-lambda`, `thm-monotone-convergence-for-the-integral`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-real-power-laws`, `thm-natural-logarithm-laws`, `thm-exponential-is-strictly-increasing`, `thm-exponential-limits-and-range`, `thm-exponential-addition-formula`, `thm-geometric-series`, `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`, `thm-norm-limit-of-compact-operators-is-compact`, and `thm-nondegenerate-multivariate-normal-law-has-density`;
- `lem-finite-measure-uniqueness-on-a-pi-system`, `lem-uncorrelated-jointly-gaussian-blocks-are-independent`, `lem-square-summable-sequences-form-a-hilbert-space`, `lem-finite-rank-operators-are-compact`, `lem-nuclear-series-characterizes-trace-norm`, `lem-positive-trace-class-covariance-defines-hilbert-gaussian`, and `cor-exponential-reciprocal-and-positivity`.

I opened `def-bayesian-posterior-as-regular-conditional-law` as a related reference from the assigned definition; it is not in that definition's dependency closure. The external sources checked for the mathematical claims were Knapik–van der Vaart–van Zanten, *Bayesian inverse problems with Gaussian priors*, §4 Theorem 4.1 and §7.1; Ding–Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §1 and §3/Table 1; and the cited Johnstone *Gaussian estimation* draft. Source limits are recorded below.

## Mathematical review and repair

The definition of posterior contraction preserves the fixed-truth data law and explicitly binds contraction to a stated posterior version, so it does not confuse prior-predictive almost-sure uniqueness with fixed-truth claims.

The conjugate theorem's scalar mean and variance agree with the finite linear Gaussian posterior supplier. Its finite-block conditioning, product-kernel construction, moment decomposition, nonnegative-series interchange, and Markov tail bound support the stated identity and rate implication. The trace assumption bounds the posterior-variance series, and the truth's square summability bounds the bias series.

I repaired `items/thm-ip-conjugate-gaussian-sequence-contraction.md`, proof step 3.1. The original argument proved that `ell^2` is a product-Borel subset and that the product posterior assigns it mass one on `Y_0`, but did not establish that every norm-Borel subset of `ell^2` is measurable for the restricted product law. The added proof shows that finite-support rational sequences are countable and dense and expresses each norm ball as a trace product-Borel set using its finite coordinate partial sums. Coordinate maps are norm-continuous, so the two Borel sigma-algebras agree. This makes restriction of the product kernel a measurable kernel on norm-Borel `ell^2`; patching it by `delta_0` off the Borel set `Y_0` is then justified. This is an elementary local proof and adds no dependency.

I synchronized the derivation claim for step 3.1 in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-20.proof-contracts.json`. The item had no `verification.judge` record to remove.

The polynomial example's cutoff `J = ceil(epsilon^(-2/d))`, variance sum, and ellipsoid bias give the stated squared-moment exponent `4 min(alpha,beta)/d`. The exponential example's logarithmic cutoff and geometric bounds give exponent `2 min(alpha,beta)/(alpha+p)` for the squared moment. Both imply their stated rates by the conjugate theorem. The point-mass counterexample is valid: the first-coordinate Gaussian likelihood ratio is positive and finite, and all remaining coordinates have the same independent law, so the full fixed-truth and prior-predictive data laws are equivalent; the posterior remains `delta_0` and cannot contract about `e_1` at any vanishing rate.

The assigned item statements have no inline hyperlinks; their reference sections follow the complete statements. Neither assigned page has a Markdown body or summary. No diagram occurs in the assigned items or pages. The Gaussian sequence model supplier's deterministic TikZ square commutes by `Phi_H0 K x = D_s Phi_X x`; its text explicitly separates the noisy-coordinate description from the diagram, and the proof does not rely on it.

### External source checks and limit

Knapik et al., PDF p. 8, Theorem 4.1, states expected posterior mass outside `M_n epsilon_n` tends to zero for every `M_n -> infinity`; §7.1, PDF pp. 20–21, begins its proof with the posterior second moment and Markov's inequality. This supports the cited terminology and context. Ding and Mathé, PDF p. 5, Table 1, gives exponential singular-value decay and exponential source axes in a minimax setting; the exponential example correctly makes no minimax-optimality claim and proves its posterior rate locally.

The direct Johnstone PDF URL timed out when reopened. A search-result excerpt from a rehost labelled as the June 11, 2013 draft displayed the scalar posterior formulas at §2.3, equations (2.19)–(2.20), but I did not independently verify that copy against the linked PDF or read the complete cited sections. The scalar formulas used by the batch are independently established by the local finite-Gaussian theorem and checked algebraically, so no proof conclusion depends on the inaccessible passage. This is the only source-reading limitation.

## Uneditable defects

The following published dependencies are outside this reader's edit authority. Each is a direct dependency of `ex-ip-polynomial-singular-value-posterior-contraction`; the findings JSON routes them to that assigned consumer. These are nonfatal statement-formatting defects, not mathematical objections to the cited results.

- `lem-square-summable-sequences-form-a-hilbert-space`, `## Statement`, line 35: the complete statement is interrupted by `[[def-square-summable-family-on-an-arbitrary-index-set]]`.
- `lem-finite-rank-operators-are-compact`, `## Statement`, lines 27–29: three inline wikilinks interrupt the bounded-operator, finite-basis, and compactness clauses.
- `lem-nuclear-series-characterizes-trace-norm`, `## Statement`, lines 29–40: inline wikilinks occur in the choice assumption, compactness/trace-class clauses, and operator-norm convergence clause.
- `thm-norm-limit-of-compact-operators-is-compact`, `## Statement`, lines 29–34: inline wikilinks interrupt the choice, Banach-space, compactness, bounded-operator, and norm-convergence clauses.
- `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`, `## Statement`, lines 25–34: inline wikilinks interrupt the choice assumption, basis hypothesis, coefficient-map clause, and conclusion.
- `def-separable-space`, `## Definition`, line 33: citation-only title parentheticals interrupt the definition and should be removed while retaining the separability criterion.
- `thm-geometric-series`, `## Statement`, lines 32 and 35: citation-only title parentheticals occur inside the theorem statement; the corresponding references are already listed after the statement.

All seven are recorded as `ill-formed`, severity `nonfatal`, in the findings JSON. No other mathematical defect was found in the assigned carriers or the supplier claims needed for them.

## Page verdicts

- `posterior-contraction-in-gaussian-sequence-inversion`: clean. Its frontmatter-only inventory matches the manifest: the assigned definition and theorem are in `items`, `examples` is empty, prerequisites match, and `page_layout: compact-v1` is preserved.
- `posterior-contraction-in-gaussian-sequence-inversion-examples`: clean. Its frontmatter-only inventory matches the manifest: all three assigned examples/counterexamples are in `examples`, `items` is empty, prerequisites match, and `page_layout: compact-v1` is preserved.

No page summary was authored, removed, or restored. No blocker remains.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-ip-conjugate-gaussian-sequence-contraction.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-ip-conjugate-gaussian-sequence-contraction.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-ip-conjugate-gaussian-sequence-contraction.md` — 1 item, 6 steps, 0 defects.
