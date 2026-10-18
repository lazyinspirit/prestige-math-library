# Step 3a reader report — batch 6

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Coverage: batch `6`

## Inventory reviewed

Opened both assigned pages:

- `library/information-theory/method-of-types-and-finite-large-deviations.md` (A page)
- `library/information-theory/method-of-types-and-finite-large-deviations-examples.md` (B page)

Opened all fourteen assigned items in dependency order:

- Level 0: `def-it-empirical-type-and-type-class`, `def-it-finite-alphabet-product-law`, `lem-it-finite-relative-entropy-continuity-on-simplex`.
- Level 1: `lem-it-number-of-n-types-polynomial-bound`, `lem-it-n-type-approximation`, `lem-it-finite-product-law-is-iid`.
- Level 2: `lem-it-type-probability-identity`, `lem-it-type-class-cardinality-bounds`.
- Level 3: `lem-it-type-class-probability-bounds`, `thm-it-type-class-entropy-approximation`, `ex-it-binary-type-class-count`, `cex-it-type-count-is-not-exactly-exponential`.
- Level 4: `thm-it-finite-alphabet-sanov-theorem`.
- Level 5: `ex-it-finite-sanov-bernoulli-tail`.

Reviewed direct suppliers and definitions used by those arguments: `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `thm-logarithm-derivative-and-integral`, `def-finite-probability-space-and-event`, `def-probability-measure`, `def-measurable-space`, `def-borel-sigma-algebra`, `def-sigma-algebra`, `def-measurable-function-between-measurable-spaces`, `def-random-element-and-real-random-variable`, `def-sigma-algebra-generated-by-a-function`, `def-independent-sigma-algebras-and-events`, `def-independent-families-of-event-classes`, `def-independent-random-elements`, `cor-mean-value-theorem`, `def-axiom-of-choice`, and `thm-hoeffding-independent-bounded-sums`. Also opened the required supplier pages `finite-alphabet-entropy-and-divergence` and `measure-theoretic-information-and-conditioning` (both present as current draft pages), and the published `concentration-inequalities-and-tail-bounds` page in `library/mathematical-statistics/`.

Checked the referenced source passages relevant to the type bounds and Sanov argument: Polyanskiy–Wu, Proposition 1.5 (printed pp. 15–16), Theorem 15.13 (printed pp. 307–308), and Exercise III.23(a)–(f) (printed pp. 334–335), [author-hosted PDF](https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf); Cover–Thomas, Chapter 11 §§11.1, 11.4, and 11.5 (printed pp. 349–365), [Chapter 11 PDF](https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf). The local proofs supply the sharper polynomial factors and support-face details used here.

## Edits and evidence

Repaired `thm-it-finite-alphabet-sanov-theorem`: its statement had said the empirical-type map takes values in the support simplex, which is false pointwise on the ambient sample space when the alphabet has zero-mass letters. It now treats the map as `Δ(A)`-valued and states that it lies in the identified support face `Δ(S)` almost surely. Proof step 1.1 establishes this from the finite product atom weights: every word outside `S^n` has zero mass. The statement also clarifies that restricting the sample space to `S^n` leaves the displayed probabilities unchanged. This preserves the arbitrary support-face formulation and its relative-interior/closure bounds.

The Bernoulli consumer `ex-it-finite-sanov-bernoulli-tail` remains valid: the Sanov application uses full support for `0<p<1` and handles `p=0` separately. Its proof contract’s F5 quote was refreshed to the corrected theorem statement. The Sanov proof contract was updated with the product-mass fact used in step 1.1 and its derivation inputs; stale boundary-step references in that affected contract were corrected. The repaired item had no `verification.judge` record to remove.

Other checked mathematics: the type-count and rounding arguments include `k=1` and zero coordinates; the multinomial mode comparison gives the `(n+1)^(k-1)` factor; probability identities separate support failure; the entropy approximation is uniform; the binary computations `45`, `252`, and `1024` are correct; and the balanced `n=2` witness refutes exact exponential equality. The Bernoulli example’s exact tail `5/16` and its one-sided Hoeffding comparison `e^(-1/2)` are correct under its stated Axiom of Choice assumption.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-it-finite-alphabet-sanov-theorem.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-it-finite-alphabet-sanov-theorem.md`: pass.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-6.proof-contracts.json --strict --json`: pass, 12 checked, zero errors or warnings.
- `node tools/proof-layout.mjs items/thm-it-finite-alphabet-sanov-theorem.md`: 1 item, 8 steps, zero defects.

## Defects not edited

The batch proof-contract file has three stale boundary-evidence references. These are contract metadata errors, not missing arguments in the item proofs, and the assigned repair authority permits contract updates as part of the material theorem repair above only.

- `lem-it-finite-relative-entropy-continuity-on-simplex`: boundary `zero` at contract line 290 cites steps 1.1–1.2; the current proof has steps 1.1 and 2.1 only.
- `lem-it-type-probability-identity`: boundary `zero` at contract line 432 and `endpoints` at line 447 cite steps 1.1–1.2; the current proof has steps 1.1 and 2.1 only.

The proofs themselves address the listed boundary cases; the contract evidence should point to the actual steps. The strict contract checker passes, but these ranged references remain inaccurate on manual inspection.

## Page verdicts

- A page `method-of-types-and-finite-large-deviations`: summary, type-partition diagram, required-page references, and item placement are consistent with the reviewed material. The required finite-entropy and measure-theoretic-information pages are present as draft prerequisites. The theorem range wording was repaired in its item, not page prose. No page defect remains.
- B page `method-of-types-and-finite-large-deviations-examples`: summary matches the binary count, Bernoulli tail, and counterexample items. No page defect found.

## Blocker

None for batch 6. The report retains the two unedited item-associated contract findings above; no unresolved mathematical proof gap was found in the assigned items.

## Coverage note

I reviewed all assigned pages and items and the suppliers needed for their proofs. I checked the batch-4 and batch-5 prerequisite pages for current presence, status, and relevant interfaces, but did not audit their unrelated item claims. The source review was limited to the cited passages relevant to this batch, not the complete textbooks.
