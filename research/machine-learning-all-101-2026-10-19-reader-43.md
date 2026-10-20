# Step 3a reader report — batch 43

Run: `machine-learning-all-101-2026-10-19`

## Reviewed inventory

Assigned pages:

- `initialization-and-signal-propagation` — draft A page; seven items, no examples, and the three required prerequisite pages.
- `initialization-and-signal-propagation-examples` — draft B page; four examples, no ordinary items, and the A page as its prerequisite.

Both assigned pages are YAML-only, have `page_layout: compact-v1`, and match the batch manifest inventories. Neither has a summary body.

Assigned items, read in dependency order:

- Level 0: `lem-centered-independent-weighted-sum-variance`, `lem-symmetric-rectifier-moments`.
- Level 1: `lem-iid-relu-layer-forces-zero-atom-next`, `alg-rectifier-variance-preserving-initialization`, `thm-relu-forward-variance-recurrence`, `thm-relu-backward-variance-recurrence`, `ex-zero-mean-or-bias-breaks-relu-half-moment`.
- Level 2: `cor-prelu-variance-preserving-scale`, `ex-finite-width-iid-relu-stack-has-zero-atom`, `ex-fan-in-versus-fan-out-initialization`.
- Level 3: `ex-prelu-variance-scale`.

For the assigned claims, I inspected the current claim sections of the published suppliers `cor-cauchy-schwarz-for-random-variables`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-independent-random-elements`, `def-moments-variance-and-covariance`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-factorization-of-expectations-for-independent-variables`, `thm-independent-random-elements-have-product-joint-law`, `lem-measurable-functions-preserve-independence`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `thm-change-of-variables-for-expectation`, and `thm-chain-rule-for-total-derivatives`. I also inspected the current draft cross-batch supplier `def-feedforward-neural-network` (batch 31), including its definition and diagram.

I opened the required pages `feedforward-networks-and-universal-approximation`, `independence-borel-cantelli-and-zero-one-laws`, and `probability-spaces-random-variables-and-expectation`. Run-local evidence reviewed included the batch-43 proof contracts, dependency inputs, cross-batch dependency record, coverage record, and notes. These records were treated as navigation and evidence, not as mathematical verdicts.

## Repairs

1. `items/alg-rectifier-variance-preserving-initialization.md`, `## Remarks`: the raw-input scale claim previously mentioned only centered inputs. Exact variance preservation also requires square-integrable input coordinates with a common variance and independence of the first-layer weights from the input vector. The remark now states these hypotheses and gives the diagonal/off-diagonal second-moment calculation leading to `Var(Z_{1,j}) = n_1 v_1 q`. He et al., §2.2, derives the weight/input independence assumption and the first-layer boundary scale; see PDF pp. 4–5, especially the forward assumptions and first-layer note. The JHU Handout #8, §3, lines 108–109, states the same independence condition and second-moment calculation. Sources: [He et al., ICCV 2015, §2.2](https://www.cv-foundation.org/openaccess/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf); [JHU Handout #8, §3](https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html).

2. `items/ex-finite-width-iid-relu-stack-has-zero-atom.md`, title: the former title said a finite IID ReLU stack cannot keep every preactivation atomless, which reads as a universal impossibility. The item demonstrates the narrower claim that a symmetric atomless IID ReLU layer can create a zero atom in the next preactivation. The revised title matches that demonstrated scope.

3. `items/lem-symmetric-rectifier-moments.md`, `## Statement`: repaired the malformed lowercase “and” following a completed sentence and display formula by separating the ReLU and corresponding PReLU identities into complete sentences. No mathematical claim changed.

No proof derivation changed, so no proof contract required updating. None of the edited carriers had a `verification.judge` record to remove.

## Other review results

- The weighted-sum lemma correctly allows dependence among input coordinates; its proof factors only the independent weight and input vectors and uses finite second moments.
- The symmetric-moment lemma's sign, first-moment, second-moment, centered-variance, and kink-gate identities follow from symmetry, integrability, and the stated gate convention.
- The zero-atom lemma's all-negative event has probability `2^{-n}`; its weaker formulation correctly needs independence of the rectified inputs, not of the preactivations.
- The forward recurrence correctly distinguishes the raw-input boundary from repeated rectifier layers and uses second moments where appropriate. The backward theorem separates the unconditional covariance identity from its conditional recurrence and proves the stated obstruction to nonzero actual gradients under the full independence assumptions. The PReLU corollary preserves these conditional qualifications.
- The two exact-distribution examples and both width/slope arithmetic examples check out.
- The TikZ diagram in `ex-fan-in-versus-fan-out-initialization` has the stated 64-to-128 dimensions and the arrows `W_ell`, `W_ell^T`, and `D_ell` in the correct forward and reverse directions. The dependency definition's input-to-output diagram also agrees with its evaluation convention. No additional diagram was needed by the assigned exposition.
- No other defect requiring an edit or escalation was found in the assigned items or their inspected dependencies. No withdrawal is proposed.

## Page verdicts

- `initialization-and-signal-propagation` — pass. The A-page inventory and prerequisites match the manifest; the page is frontmatter-only.
- `initialization-and-signal-propagation-examples` — pass. The B-page example inventory and prerequisite match the manifest; the page is frontmatter-only.

## Validation and blocker

- Reflow reported unchanged files for all three edited items.
- Precheck passed for the two edited proof-bearing items (one proof checked each); the algorithm correctly had zero proof sections to check.
- Final required proof-layout run: `node tools/proof-layout.mjs items/alg-rectifier-variance-preserving-initialization.md items/ex-finite-width-iid-relu-stack-has-zero-atom.md items/lem-symmetric-rectifier-moments.md` — 3 items, 8 steps, 0 defects.
- No blocker affects batch 43. The live run status separately reports a 3a-split blocker on batch 8 (three failed attempts), outside this assignment.
- No separate rendered reader bundle was present in the run state. I used the assigned manifest and current carriers directly. The cited Prince release PDF URL did not open through the web reader at review time; I did not rely on it to resolve the mathematical issue. The local proof and the He et al. and JHU sections above supply the evidence used here.

## Unedited defects

None. The findings array is empty.
