# Step 3a reader report — batch 74

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `74`

## Review scope and opened inventory

Reviewed both assigned pages and all seven assigned items. The item review followed the batch’s supplier order: Hedge and projected OGD algorithms; the two regret theorems; then the two examples and infeasible-comparator counterexample.

Assigned pages opened:

- `library/machine-learning/hedge-and-online-gradient-descent.md`
- `library/machine-learning/hedge-and-online-gradient-descent-examples.md`

Assigned items opened:

- `items/alg-hedge.md`
- `items/alg-online-gradient-descent.md`
- `items/thm-hedge-static-regret.md`
- `items/thm-online-gradient-descent-regret.md`
- `items/ex-hedge-two-experts.md`
- `items/ex-projected-gradient-on-an-interval.md`
- `items/cex-ogd-infeasible-comparator.md`

Opened the current-run batch 73 suppliers `def-online-decision-protocol`, `def-adversary-and-feedback-model`, and `def-static-dynamic-and-strongly-adaptive-regret`. Opened the 26 published direct item suppliers needed for the assigned arguments: `def-random-element-and-real-random-variable`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `cor-expectation-of-an-indicator-is-probability`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, `lem-exponential-dominates-one-plus-x`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `def-metric-topology`, `def-convex-subset-of-euclidean-space`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-euclidean-inner-product`, `def-jacobian-matrix-and-gradient`, `def-subgradient-and-subdifferential`, `def-countable-choice`, `def-hilbert-space`, `def-interval`, `thm-euclidean-space-complete`, `thm-differentiable-convex-functions-and-gradient-inequality`, `thm-projection-onto-a-nonempty-closed-convex-set`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, and `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive`.

Opened all four prerequisite pages named by the batch’s A page: the three published pages `constrained-variational-problems-and-variational-inequalities`, `convex-and-semicontinuous-functions-on-rn`, and `hilbert-space-geometry-and-riesz-representation`, and the current-run draft page `online-decision-protocols`.

## Mathematical review and item verdicts

- **`alg-hedge` — sound.** The inputs, timing, loss restrictions, conditional sampling rule, update, output, and positivity argument are explicit. Positive finite exponential factors preserve positive finite weights and normalizers. The probability-space existence assumption is stated rather than inferred.
- **`alg-online-gradient-descent` — repaired.** The update, smooth and subgradient branches, degenerate cases, Countable Choice condition, and output are complete. Its random-input clause originally claimed measurability from continuity without specifying measurable structures. The repair is detailed below.
- **`thm-hedge-static-regret` — sound.** The exponential estimate, potential comparison, logarithm step, bounded-loss specialization, $N=1$ case, and expectation calculation are valid under the stated fixed loss sequence and measurable draws. The $2\sqrt{T\log N}$ specialization uses $N\ge2$ and positive learning rate as stated.
- **`thm-online-gradient-descent-regret` — sound after focused repair.** The degenerate branches, projection variational inequality, convex linearization, weighted telescoping identity, step-size sum, and attained-minimizer substitution establish the stated pointwise and static bounds. Its measurability step was updated to use the algorithm’s explicit Borel structures.
- **`ex-hedge-two-experts` — sound.** The weights, distributions, expected losses, best expert loss, and regret $1/6$ are computed correctly.
- **`ex-projected-gradient-on-an-interval` — sound.** The interval is nonempty, closed, convex, has diameter one, and the displayed projection formula follows from the variational inequality. The update gives $y_2=-3/4$ and $x_2=0$. Its TikZ number line correctly places the trial point left of $[0,1]$ and marks the projection at zero; the verification does not rely on the diagram.
- **`cex-ogd-infeasible-comparator` — sound.** The affine losses are convex with gradient norm one; the projected iterates are $0,1,1$; learner loss is $-1$, comparator loss at $u=2$ is $-4$, and regret $3$ exceeds $(3/2)\sqrt2$. The witness refutes only the stated infeasible-comparator extension.

No other mathematical gap, unsupported proof step, incorrect computation, or diagram defect was found in the assigned items. The cited projection, convexity, exponential, logarithm, and expectation suppliers support the exact uses made in the proofs.

## Edits and evidence

1. In `items/alg-online-gradient-descent.md`, the Definition now equips $\mathbb R^d$ with its Euclidean Borel $\sigma$-algebra and $K$ with the relative Borel $\sigma$-algebra, and requires measurable $K$-valued $x_1$ and measurable $\mathbb R^d$-valued supplied gradients on the protocol probability space. This closes the gap: continuity of $P_K$ gives Borel measurability only after the source and target measurable structures are specified.
2. In `items/thm-online-gradient-descent-regret.md`, added fact `[F11]` for those structures and revised step 1.2 to cite it, the continuous inclusion $K\hookrightarrow\mathbb R^d$, the continuous vector update, and the nonexpansive projection. Reformatted the proof so each numbered step is separated by a blank line. The downstream assigned consumers were checked: the interval example and infeasible-comparator witness use deterministic iterates and remain valid.
3. Updated `research/machine-learning-all-101-2026-10-19-batch-74.proof-contracts.json` with the exact revised algorithm Definition quote and the added `[F11]` support in theorem step 1.2. Neither edited item had a `verification.judge` record to remove.

Source evidence checked independently: Elad Hazan, *Introduction to Online Convex Optimization*, second edition, §1.3.3, Algorithm 1 and Theorem 1.5 with its potential proof (arXiv HTML lines 702–750; cited PDF pp. 33–35), and §3.1, Algorithm 8 and Theorem 3.1 proof (HTML lines 1318–1364; cited PDF pp. 63–66). These support the Hedge second-order inequality, projected update, and $3DG\sqrt T$ bound on twice the regret, which gives the local $\frac32DG\sqrt T$ bound after division by two. Also inspected Tengyu Ma, *Lecture Notes for Machine Learning Theory*, Chapter 11, §§11.7.4 and 11.8.1 (PDF pp. 159–162). Its expert section supports normalized exponential weights; its OGD section labels Proposition 11.8.1 informal and footnotes that additional assumptions are needed, so the local OGD proof relies on its own complete derivation and Hazan’s theorem rather than importing that proposition.

## Uneditable defects

The following published suppliers are in the assigned items’ dependency closure and have hyperlinks inside their complete Definition or Statement sections. The statement-first rule requires replacing citation-only links with plain mathematical terms and moving the links into an immediately following references section. These suppliers are outside batch 74’s write scope.

| Subject | Location | Assigned consumer | Evidence |
|---|---|---|---|
| `def-random-element-and-real-random-variable` | Definition | `alg-hedge` | The random-element clause links inline to `def-measurable-function-between-measurable-spaces`; the real-random-variable clause links inline to `def-borel-sigma-algebra`. |
| `def-probability-measure` | Definition | `alg-hedge` | The probability-measure and probability-space clauses link inline to `def-measure` and `def-measure-space`. The assigned dependency path is through batch 73’s `def-adversary-and-feedback-model`. |
| `def-expectation-of-a-nonnegative-or-integrable-random-variable` | Definition | `thm-hedge-static-regret` | The integrable-variable bullet contains an inline link to `def-integrable-real-and-complex-functions-and-their-integrals`. |
| `def-real-exponential-function-and-e` | Definition | `alg-hedge` | The series definition and its explanatory clauses contain inline links to factorial, power, series, and convergence suppliers. |
| `def-natural-logarithm` | Definition | `thm-hedge-static-regret` | The definition paragraph links inline to `cor-exponential-is-a-bijection-onto-positive-reals`. |
| `def-convex-subset-of-euclidean-space` | Definition | `alg-online-gradient-descent` | The convexity formulation links inline to `def-interval`. |
| `def-convex-and-strictly-convex-functions-on-euclidean-sets` | Definition | `alg-online-gradient-descent` | The convex-function formulation links inline to the convex-set and interval definitions. |
| `def-countable-choice` | Definition | `alg-online-gradient-descent` | The equivalence clause links inline to `def-choice-function` and `def-countable`. |
| `def-euclidean-inner-product` | Definition | `alg-online-gradient-descent` | The complete definition contains multiple inline links to coordinate, finite-sum, norm, and metric suppliers. |
| `def-hilbert-space` | Definition | `alg-online-gradient-descent` | The definition and completion-convention paragraph link inline to inner-product, completeness, induced-norm, and Banach-space suppliers. |
| `def-interval` | Definition | `ex-projected-gradient-on-an-interval` | The definition contains inline links to ordered-field, real-order, bounded-set, and related prerequisites. |
| `def-jacobian-matrix-and-gradient` | Definition | `alg-online-gradient-descent` | The gradient clause links inline to `lem-standard-basis-of-f-n` and `def-directional-and-partial-derivatives`. |
| `def-metric-topology` | Definition | `alg-online-gradient-descent` | The opening definition links inline to `def-metric-space` and `def-metric-ball`; a later clause links to `def-equivalent-metrics`. |
| `def-subgradient-and-subdifferential` | Definition | `alg-online-gradient-descent` | The formulation links inline to the convex-function and Euclidean-inner-product definitions. |
| `thm-euclidean-space-complete` | Statement | `alg-online-gradient-descent` | The two claims and following dimension qualification contain inline links to the real metric, completeness, and Euclidean-metric suppliers. |
| `thm-differentiable-convex-functions-and-gradient-inequality` | Statement | `alg-online-gradient-descent` | The concluding equivalence sentence links inline to the subgradient and gradient definitions. |
| `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive` | Statement | `alg-online-gradient-descent` | The statement embeds links to Countable Choice, Hilbert space, and the projection theorem. |

## Page verdicts

- **`hedge-and-online-gradient-descent` — pass.** Draft A page inventory matches the manifest’s four items; required pages and `page_layout: compact-v1` are present; the Markdown body is empty.
- **`hedge-and-online-gradient-descent-examples` — pass.** Draft B page inventory matches the manifest’s three examples and companion requirement; `page_layout: compact-v1` is present; the Markdown body is empty.
- **`online-decision-protocols` — context-page pass.** Its batch 73 manifest row matches the opened draft A page, and the Markdown body is empty. It is outside batch 74’s write scope.
- **`constrained-variational-problems-and-variational-inequalities`, `convex-and-semicontinuous-functions-on-rn`, and `hilbert-space-geometry-and-riesz-representation` — context-only.** Their published page metadata and item inventories were opened to resolve the assigned A page’s prerequisites. Their legacy narrative bodies are published content, not batch 74 authoring targets; the relevant item-level projection and convexity suppliers were reviewed separately.

## Validation and blocker

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-online-gradient-descent.md` — unchanged, exit 0.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-online-gradient-descent.md` — 0 checked, 0 failing; definition has no proof phase.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-online-gradient-descent-regret.md` — unchanged, exit 0.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-online-gradient-descent-regret.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/alg-online-gradient-descent.md items/thm-online-gradient-descent-regret.md` — 2 items, 7 steps, 0 defects.

No batch-74 blocker remains. At the final status check, the run was still `running`, batch 74 remained outstanding from the 3a-read stage, and no worker was in flight. The run also showed an unrelated 3a-collect blocker for batch 57 (`collect-57` failed three times); no engine state was changed.
