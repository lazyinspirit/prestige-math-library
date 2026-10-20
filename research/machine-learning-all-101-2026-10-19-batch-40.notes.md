# Batch 40 authoring notes

Run: `machine-learning-all-101-2026-10-19`  
Pair: `stochastic-gradient-descent-for-learning` / `stochastic-gradient-descent-for-learning-examples`  
Plan label: ML-39; dispatch batch: 40.

## Plan reconciliation

The controlling section `research/plan-machine-learning-track.md` §ML-39 and
the corresponding `research/plan-spec.json` entry agree on scope, hypotheses,
four proposed A-page items, proof route, examples, requirements, and source
locators. The plan-spec entry also preserves the 2026-10-18 interface repair,
which is present in the current plan section: use the published stochastic
oracle/update, uniform random-iterate, and biased-noise-floor interfaces for
their stated regimes; locally prove the broader alignment/noise and nonuniform
weighted-output results. The batch task's shortened description does not
conflict with this controlling contract. No plan conflict requires escalation.

## Inventory and item dependency levels

The scaffold manifest was populated before item carriers. Current in-run item
levels and supplier order are:

| Level | Items | In-run supplier basis |
|---|---|---|
| 0 | `lem-sgd-trajectory-integrability`, `lem-independent-finite-random-index-extension` | None |
| 2 | `alg-stochastic-gradient-descent` | `def-population-and-empirical-risk` (batch 2, level 1); `def-supervised-learning-problem` (batch 2, level 0) |
| 3 | `alg-minibatch-stochastic-gradient-descent`, `thm-stochastic-direction-expected-average-stationarity`, `thm-nonconvex-sgd-random-iterate-stationarity` | `alg-stochastic-gradient-descent` (level 2) |
| 3 | `ex-constant-step-sgd-noise-floor` | `alg-stochastic-gradient-descent` (level 2) |
| 4 | `ex-empirical-risk-sgd-oracle-is-unbiased`, `ex-sgd-biased-direction-violates-alignment` | Highest in-run supplier level 3 |

Apart from the batch-2 in-run suppliers and the same-pair suppliers shown above,
the remaining item dependencies are published external context.
The random-index helper explicitly constructs a finite product extension; it
does not assume an unproved product-measure result. The dependency graph is
acyclic. The item-level labels are distinct from batch 40's scheduling level 3,
which comes from required pages in batches 2 and 39.

## Supplier and readiness inspection

The actual bodies and relevant proofs were inspected for the published
conditional-expectation, discrete-martingale, probability-space, stochastic
oracle/update, conditional-variance, smoothness-descent, and expectation
interfaces listed in the item dependencies. The final full-run command
`node tools/step1-decisions.mjs check --run machine-learning-all-101-2026-10-19`
reported 1,211 run items, 1,062 ready, `closed: false`, and 160 open-work rows.
The nine batch-40 item rows are all closed with current hashes after recorder
readback. No unresolved-work rows appeared for the pair's external direct
suppliers, including `def-supervised-learning-problem`,
`def-population-and-empirical-risk`,
`lem-population-and-empirical-risk-are-measurable`, and
`thm-smooth-bounded-below-gd-stationarity`. The in-run prediction-risk suppliers
remain draft and are used only under the run's `allow_in_run_dependencies`
direction; their current Step-1 rows and bodies were inspected, not treated as
independent approval. The nonconvex-gradient page's deterministic theorem is
page-level context only; no stochastic claim is inferred from it.

## Source plan

- Bottou, Curtis, and Nocedal, “Optimization Methods for Large-Scale Machine
  Learning,” §§4.1 and 4.3, Assumptions 4.1/4.3, Lemmas 4.2/4.4, Theorems
  4.8/4.10 and full relevant proofs, PDF pp. 21–34:
  <https://arxiv.org/pdf/1606.04838>. Supports the aligned expected-direction
  assumptions, fixed-step average bound, and diminishing-step weighted result.
- Ghadimi and Lan, “Stochastic First- and Zeroth-Order Methods for Nonconvex
  Stochastic Programming,” §2.1, RSG update, Assumption A1, Theorem 1(a)
  (journal Theorem 2.1) and proof equations (2.8)–(2.11), Corollary 2,
  PDF pp. 4–7: <https://arxiv.org/pdf/1309.5549>. Supports the weighted
  random-index distribution, bound, and constant-step choice.
- MIT 6.7220/15.084, Lecture 15, “Stochastic Gradient Descent,” Theorem L15.1
  and nonconvex convergence derivation, PDF pp. 1–4:
  <https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec15.pdf>.
  The full 8-page lecture was retrieved; the relevant SGD setup, descent
  inequality, telescoping bound, and variance caveat were read. The convex
  mirror-descent material is outside this pair's claims.

Web discovery searched for Bottou et al.'s Theorem 4.8, Ghadimi–Lan's RSG
Theorem 2.1, and a full nonconvex-SGD lecture treatment; direct full texts were
found at arXiv and official MIT OpenCourseWare. No source retrieval failed.
`node tools/source-fetch-check.mjs --coverage
research/machine-learning-all-101-2026-10-19-batch-40.coverage.json --stamp`
completed successfully: 3/3 sources fetch-verified, 3 newly stamped, 0
documented drops. Stamps verified PDFs of 95, 25, and 8 pages; each source has
one successful full-text fetch attempt. No convex or projected-convergence
theorem is added; those published interfaces are outside the approved
nonconvex claims. Proof contracts, final scoped checks, and all nine readiness records are complete; results are below.

## Item checkpoints

### `lem-sgd-trajectory-integrability` — complete

The lemma covers a finite-dimensional $C^1$ objective with globally Lipschitz
gradient, finite-horizon updates, and square-integrable initial point and
directions. The proof uses the squared-norm update inequality, finite induction,
linear gradient growth, and the two-sided smoothness bound to establish
integrability of every iterate, gradient, and objective value. Dependencies:
`lem-l-smoothness-descent-inequality`, `def-euclidean-inner-product`,
`thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-induction-principle`, and
`def-expectation-of-a-nonnegative-or-integrable-random-variable`; item level 0.
Source locators: Bottou et al. §4.1, Assumption 4.1/Lemma 4.2, pp. 21–24; MIT
Lecture 15, Theorem L15.1 derivation, PDF pp. 3–4. Full local proof is in the
carrier. No uncertainty remains in this helper. Scoped proof-layout and precheck validation passed; see Final validation and readiness.

The next authoring item is the finite independent-index extension, also level 0.

### `lem-independent-finite-random-index-extension` — complete

Constructed the extension explicitly as finite slices
$(\omega,k)$ with mass $p_kP(A)$, proved countable additivity, verified the
selector's distribution and independence, and derived the expectation identity
first for simple functions and then by monotone convergence for integrable real
variables. Dependencies: `def-probability-measure`, `def-measure`,
`def-random-element-and-real-random-variable`,
`def-expectation-of-a-nonnegative-or-integrable-random-variable`,
`thm-linearity-of-the-lebesgue-integral-on-l-one`,
`thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`,
and `thm-monotone-convergence-for-the-integral`; item level 0. Source locator:
Ghadimi–Lan §2.1, RSG method and Theorem 1(a), PDF pp. 4–6. The product
construction is local and finite; no choice axiom or general product-measure
existence theorem is used. Final scoped proof-layout and precheck validation passed; see Final validation and readiness. No unresolved
mathematical dependency remains.

The next item is the level-2 stochastic-gradient algorithm, which uses the
current batch-2 empirical-risk definition.

### `alg-stochastic-gradient-descent` — complete

The procedure takes an adapted stochastic oracle and deterministic stepsizes;
it makes no hidden unbiasedness, variance, or cross-iteration independence
assumption. Its remarks distinguish the fixed empirical-risk sampling law from
population sampling and require a separately justified differentiation-under-
expectation step before identifying a population sampled-gradient mean with
$\nabla R_P$. Dependencies: published stochastic-gradient oracle/update,
filtered-space, adapted-process and random-element definitions, plus batch-2
`def-supervised-learning-problem` (level 0) and
`def-population-and-empirical-risk` (level 1); item level 2. Source locators:
Bottou et al. Algorithm 4.1, §§3.2/4.1, PDF pp. 16–24; MIT Lecture 15
§§L15.1–L15.3, PDF pp. 1–3. The run snapshot previously inspected contained no
unresolved-work row for the two in-run risk definitions; their bodies were read
and the actual run continues to allow in-run dependencies. No open mathematical
obligation remains for this definition; the final scoped checks passed; see Final validation and readiness.

### `alg-minibatch-stochastic-gradient-descent` — complete

The procedure averages $b$ vectors computed at the same iterate and applies the
single-direction SGD update. It asserts no independence, unbiasedness, or
variance reduction; a selected batch law must establish any such moment claim.
Dependencies: same-pair `alg-stochastic-gradient-descent` (level 2), the
published stochastic update, filtration/adapted-process/random-element and
Euclidean-vector definitions; item level 3. Source locators: Bottou et al.
§§3.4/4.2, PDF pp. 18–20 and 29–30; MIT Lecture 15 §§L15.1–L15.3, PDF pp. 1–3.
No unresolved mathematical obligation remains for this definition; the final scoped checks passed; see Final validation and readiness.

### `thm-stochastic-direction-expected-average-stationarity` — complete

The Statement preserves the full Bottou–Curtis–Nocedal alignment, norm-
comparability, and relative conditional-variance interface, with the objective
bounded below only along the iterates. The proof derives the conditional
descent recursion, telescopes it for the fixed-step average, and for diminishing
steps uses eventual stepsize smallness, finite weighted numerator, and divergent
weight sum. The separate conditional-unbiased case is explicitly the
$\mu=\mu_G=1$ branch. Dependencies are listed in the scaffold manifest; the
highest in-run supplier is `alg-stochastic-gradient-descent` at level 2, so this
item is level 3. Sources read in full relevant scope: Bottou et al. §§4.1/4.3,
Assumptions 4.1/4.3, Lemmas 4.2/4.4 and Theorems 4.8/4.10 with proofs, PDF
pp. 21–34; MIT Lecture 15 Theorem L15.1 and nonconvex expected-average
derivation, PDF pp. 3–4. The dependent integrability and filtration conventions
were inspected. No mathematical uncertainty remains; the final scoped checks passed; see Final validation and readiness.

The next A-page item is the weighted random-iterate theorem, also level 3.

### `thm-nonconvex-sgd-random-iterate-stationarity` — complete

The Statement defines $D_f=\sqrt{2(f(x_1)-f^*)/L}$ explicitly and keeps the source's full finite global infimum, conditional
unbiasedness/variance, positive weights $2\gamma_k-L\gamma_k^2$, and independent
weighted output. The local proof derives the one-step conditional descent
inequality, telescopes it, proves the output distribution by the finite
extension lemma, and checks the positive, zero-noise, and zero-gap constant-step
branches. AC is explicit for the conditional-expectation interface; the finite
selector extension itself uses no choice. The published
`thm-stochastic-gradient-nonconvex-randomized-iterate-bound` is recorded as the
exact constant-step uniform-output context, not as a premise in the local
variable-weight proof. The highest in-run dependency is
`alg-stochastic-gradient-descent` at level 2, so this item is level 3. Sources
read in relevant full scope: Ghadimi–Lan §2.1, RSG algorithm, Assumption A1,
Theorem 1(a), proof equations (2.8)–(2.11), and Corollary 2, PDF pp. 4–7;
Bottou et al. §4.3, Theorem 4.8; MIT Lecture 15, Theorem L15.1 and its
nonconvex average derivation, PDF pp. 3–4. No unresolved mathematical
dependency remains; the final scoped checks passed; see Final validation and readiness.

The next authoring item is the level-3 constant-step noise-floor example.

### `ex-constant-step-sgd-noise-floor` — complete

For each finite horizon, the example uses an explicit uniform sign cube, so
conditional unbiasedness/variance and the exact second-moment recursion are
verified by finite counting. The consistent moments converge to
$b^2+\alpha\sigma^2/(2-\alpha)$; the unbiased branch has a positive noise floor
when $\sigma>0$. Two separate conditional-expectation comparisons reuse the
published interfaces: the uniform-random-iterate theorem for $b=0$, and the
bounded-bias noise-floor theorem for general $b$. The exact finite recurrence
proof is choice-free; AC is stated and used only for those comparison branches.
Dependencies include the local finite-index extension, the published uniform
and biased-noise-floor results, and the probability/filtration definitions;
highest in-run supplier `alg-stochastic-gradient-descent` is level 2, so this
example is level 3. Its finite moment calculation and both theorem applications
are complete. The final scoped checks passed; see Final validation and readiness.

### `ex-empirical-risk-sgd-oracle-is-unbiased` — complete

The example fixes a supervised singleton-instance squared-loss model and an
arbitrary ordered training sample. It derives the finite-sum gradient by its
difference quotient, proves the conditional mean and $v_S/b$ variance of
uniform with-replacement minibatch sampling by counting the finite index
product, and checks the $L=1$, global-lower-bound instance of the expected-
average theorem. This uses the batch-2 definitions
`def-supervised-learning-problem` and `def-population-and-empirical-risk`, both
present in the current full-run readiness snapshot; no population-sampling or
differentiation-under-population-expectation claim is made. Other in-run
suppliers are same-pair `alg-minibatch-stochastic-gradient-descent` and
`thm-stochastic-direction-expected-average-stationarity`, both level 3, so this
example is level 4. Dependencies and placement match the manifest. The proof
is complete and choice use is explicit only for the general conditional-
expectation theorem. The final scoped checks passed; see Final validation and readiness.

### `ex-sgd-biased-direction-violates-alignment` — complete

For $f(x)=x^2/2$, the deterministic direction $G_t=-x_t$ has the same norm as
the gradient and zero variance but negative directional alignment at every
iterate from $x_0\ne0$; the recursion makes the objective increase in its first
step. This directly witnesses why positive alignment is a separate hypothesis
in the local expected-average theorem. Dependencies: same-pair
`alg-stochastic-gradient-descent` (level 2),
`thm-stochastic-direction-expected-average-stationarity` (level 3), and the
published induction principle; item level 4. The deterministic calculation is choice-free; AC is assumed only for the
conditional-expectation theorem comparison. The argument is complete; the final scoped checks passed; see Final validation and readiness.

## Final validation and readiness

- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-40.proof-contracts.json --strict`: passed, 7/7 proof-bearing items, zero errors or warnings. Each contract contains exact supplier-section excerpts, actual numbered-step claims and inputs, all eight boundary dispositions, and a finite smoke calculation where applicable.
- `node tools/proof-layout.mjs` on the nine assigned carriers: passed, 9 items, 31 steps, zero defects. `node tools/tsx-run.mjs tools/precheck.mts` on the seven proof-bearing carriers: passed, 7/7 after applying the native canonical phase numbering.
- The scoped item-level dependency calculation over batches 2, 39, and 40 checked the nine batch-40 labels with zero errors; they match levels 0, 0, 2, 3, 3, 3, 3, 4, 4. The required full-run `item-dependency-levels.mjs check` was also run and returned 10 errors outside batch 40: empty inventories for `generative-adversarial-networks`, its examples page, `score-sdes-and-reverse-time-generation-examples`, `predictive-calibration-and-uncertainty-under-shift`, its examples page, `monotone-risk-calibration-and-deployment-guarantees`, and its examples page; plus missing item IDs in `foundation-models-transfer-and-scaling-evidence` (one) and `foundation-models-transfer-and-scaling-evidence-examples` (two). It reported no batch-40 level mismatch. Those other manifests are outside this assignment and remain untouched.
- Page/manifest and coverage audit passed: two valid frontmatter-only pages, nine assigned carriers, exact dependency and level agreement, and source-supported item inventories aligned with the page scopes. `coverage-checklist.mjs --require-destination` passed 2 pages and 29 harvested results with zero errors or warnings.
- The final `source-fetch-check --stamp` passed 5/5 page-source entries, representing 3 unique sources; 0 new stamps and 0 documented drops. `source-evidence.json` preserves those 3 unique source records. No retrieval failed, so no `source_resolution` recovery record was needed.
- The ordinary Step 1 recorder wrote all nine items `ready`, `owner:false`, in ascending dependency level with exact carrier dependency IDs. Final hash readback found zero open batch-40 item rows; the full-run snapshot had 1,212 items, 1,062 ready, and 161 open-work rows. The live autopilot status is still at Step 1 scaffold: 81/101 pairs covered, batch 40 remains in the missing list, no workers in flight, and artifact completion is deferred until authoring coverage is complete and writers drain. The existing owner repair/recertification hold remains. No engine state or owner verdict was edited.
