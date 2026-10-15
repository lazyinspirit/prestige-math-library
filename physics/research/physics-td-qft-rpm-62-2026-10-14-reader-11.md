# Independent reader report — batch 11

Run: physics-td-qft-rpm-62-2026-10-14  
Role: reader  
Batch: 11

## Scope and opened inventory

The live autopilot status showed the run active at stage 3a-read. The current batch manifest assigns two mathematical thermodynamics pages and 26 item carriers:

- A page td-math-ensembles-and-limits (22 items), at library/thermodynamics-mathematics/td-math-ensembles-and-limits.md.
- B page td-math-ensembles-and-limits-examples (4 items), at library/thermodynamics-mathematics/td-math-ensembles-and-limits-examples.md.

The A-page items opened were: def-tdmath-countable-canonical-model; thm-tdmath-summable-canonical-differentiation; def-tdmath-diagonal-operator-model; lem-tdmath-diagonal-model-hilbert-and-domain; lem-tdmath-diagonal-self-adjointness; def-tdmath-measure-integral; thm-tdmath-monotone-convergence; lem-tdmath-fatou; thm-tdmath-dominated-convergence; thm-tdmath-measurable-canonical-identities; thm-tdmath-finite-bath-error-bound; thm-tdmath-independent-bulk-limit; thm-tdmath-ising-chain-limit; def-tdmath-bounded-finite-range-lattice; thm-tdmath-finite-range-lattice-pressure-limit; thm-tdmath-limiting-derivative-and-concentration; lem-tdmath-finite-ground-degeneracy; lem-tdmath-conditional-memory-entropy; lem-tdmath-mutual-information; thm-tdmath-general-trace-gibbs-model; thm-tdmath-grand-response-covariance; and lem-tdmath-bose-fermi-mode-fluctuations.

The B-page items opened were: ex-tdmath-countable-partition-divergence; ex-tdmath-two-level-canonical-fluctuations; ex-tdmath-correlated-pair-mutual-information; and ex-tdmath-finite-ensemble-mismatch.

I inspected exact statement/definition interfaces for all 72 unique direct item dependencies: 12 assigned in-batch suppliers and these 60 published mathematical suppliers:

cor-exponential-is-a-bijection-onto-positive-reals; cor-mean-value-theorem; cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator; cor-taylor-remainder-bound; def-absolute-value-and-singular-values-of-a-compact-operator; def-adjoint-of-a-densely-defined-unbounded-operator; def-axiom-of-choice; def-complete-ordered-field; def-expectation-on-a-finite-probability-space; def-finite-probability-space-and-event; def-finite-real-random-variable-and-distribution; def-finite-sum; def-hilbert-space; def-integral-of-a-nonnegative-simple-function; def-integral-of-a-simple-function-against-a-pvm; def-natural-logarithm; def-nonnegative-lebesgue-integral; def-product-of-finite-probability-spaces; def-projection-valued-measure; def-real-and-complex-inner-product-space; def-real-exponential-function-and-e; def-series; def-square-summable-family-on-an-arbitrary-index-set; def-trace-class-operator; def-unbounded-linear-operator-domain-and-graph; def-variance-and-covariance; lem-finite-rank-operators-are-compact; lem-finite-sum-laws; lem-finite-sum-reindexing-and-fubini; lem-scalar-and-complex-measures-from-a-pvm; prop-order-and-scalar-rules-for-the-nonnegative-integral; prop-the-nonnegative-integral-agrees-with-the-simple-integral; thm-algebra-of-derivatives; thm-arithmetic-and-lattice-operations-preserve-measurability; thm-bounded-borel-pvm-integral; thm-cauchy-schwarz-in-an-inner-product-space; thm-chain-rule; thm-complex-plane-is-complete; thm-composition-with-borel-functions-preserves-measurability; thm-cyclicity-of-the-trace; thm-derivative-of-exponential; thm-division-algorithm-in-z; thm-expectation-of-products-of-independent-random-variables; thm-exponential-addition-formula; thm-exponential-beats-every-polynomial; thm-exponential-is-strictly-increasing; thm-logarithm-derivative-and-integral; thm-natural-logarithm-laws; thm-norm-limit-of-compact-operators-is-compact; thm-nth-roots-exist; thm-parseval-equivalences-for-a-complete-orthonormal-family; thm-product-probability-has-independent-coordinate-events; thm-real-power-continuity-and-derivatives; thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable; thm-spectral-theorem-for-compact-self-adjoint-operators; thm-spectral-theorem-for-unbounded-self-adjoint-operators; thm-trace-class-is-a-two-sided-banach-operator-ideal; thm-trace-is-absolutely-convergent-and-basis-independent; thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues; and thm-variance-of-a-finite-sum.

For application of the finite-product expectation theorem, I also opened def-independence-of-finite-random-variables and checked that coordinate-energy variables meet its finite-valued independence definition through the product-coordinate-event result. For the diagonal adjoint item, I checked the exact def-countable-choice statement as a transitive prerequisite of the published adjoint definition.

I opened the page summary at library/thermodynamics-mathematics/td-math-nonsmooth-equilibrium.md because the A-page manifest lists it as a prerequisite. The current batch-11 cross-batch dependency record marks that edge open; I did not audit its Batch 4 proof carriers or contract.

## Independent mathematical review and repairs

1. **def-tdmath-countable-canonical-model, Definition.** The original text named (p_i) a countable probability law without defining that phrase or stating its normalization. I defined it as a nonnegative family with total sum one under the stated finite-subsum convention and recorded sum_i p_i=Z/Z=1. I also replaced “real observable” with “real family” so the purely mathematical object is explicit. The direct consumers were rechecked, and their proof-contract citation excerpts were refreshed.

2. **thm-tdmath-independent-bulk-limit, Statement.** Z_N appeared in the conclusion and proof but had no definition in the Statement. I defined the product probability weights and the N-subsystem partition sum explicitly. The existing finite Fubini calculation in step 1.1 then proves the stated identity for that defined quantity.

3. **lem-tdmath-diagonal-self-adjointness, Statement, Facts & Assumptions, and proof step 2.1.** The cited published adjoint definition explicitly assumes Countable Choice. I carried that condition into the Statement and fact A2, and cited A2 at the step that invokes the adjoint representation. The item's existing direct dependency on the adjoint definition already reaches the Countable Choice supplier.

4. **thm-tdmath-finite-bath-error-bound, Fact F3.** Step 2.1 factors the exponential of a sum. The listed inverse-logarithm and logarithm-product-law suppliers give this identity directly: both positive sides have logarithm u+v, and log is injective. I recorded that derivation in F3; no dependency or proof conclusion needed changing.

5. **thm-tdmath-summable-canonical-differentiation, Statement and proof step 3.1.** The earlier finite-probability variance definition did not define variance for this countable law. I defined bar E from the countable expectation and variance as the centered second-moment series. The envelope bounds that series by 2〈E²〉+2 bar E², and the proof expands it to the derivative identity.

6. **lem-tdmath-finite-ground-degeneracy, Statement, A1, and proof.** The original conclusion that ground probabilities tend to 1/g omitted the model's arbitrary positive state weights and was false for unequal weights. It also did not ensure that the parameter domain extends to +∞. I stated the limit for arbitrary positive weights on J=(0,∞): ground weights converge to g_i/W_0, excited weights vanish, and the Shannon entropy converges to the entropy of the normalized ground weights. The original 1/g and log g conclusion remains as the unit-weight case.

7. **lem-tdmath-bose-fermi-mode-fluctuations, Statement.** I defined the relative standard deviation as sqrt(Var(n))/E[n]; the stated geometric-law limit now has an exact meaning.

8. **ex-tdmath-finite-ensemble-mismatch, A1.** The proof cited A1 for the uniform half-open shell convention, but A1 recorded only the state energies and weights. I added the shell convention to A1.

9. **td-math-ensembles-and-limits, final summary paragraph.** The response-covariance theorem concerns an arbitrary stated measure-space density, not only finite or countable laws. I corrected the page summary to distinguish it from the finite/countable entropy, mutual-information, and Bose/Fermi results.

No B-page prose was edited. The revised canonical-model definition's dependent proof contracts were refreshed for thm-tdmath-summable-canonical-differentiation, thm-tdmath-finite-bath-error-bound, lem-tdmath-finite-ground-degeneracy, thm-tdmath-general-trace-gibbs-model, lem-tdmath-bose-fermi-mode-fluctuations, ex-tdmath-countable-partition-divergence, ex-tdmath-two-level-canonical-fluctuations, and ex-tdmath-finite-ensemble-mismatch. Contracts were regenerated for the seven repaired proof-bearing items; no stale verification.judge records were present on the edited items.

## Validation

- Reflow ran on all eight changed item paths; each reported unchanged.
- Precheck passed on all eight changed item paths.
- Strict proof-contract validation passed for the seven repaired proof items and three consumers whose supplier quotes changed: 10/10, 0 errors, 0 warnings.
- Final proof-layout scan: 8 items, 22 steps, 0 defects. The sibling web checkout lacks its tsx loader; I used an isolated temporary loader and the actual ItemBody renderer without modifying the sibling checkout.
- After writing the reader artifacts, live status remained running and counted 22/64 3a-read results; 3a-split and later stages remain incomplete across the run.

## Page verdicts and remaining blocker

- **td-math-ensembles-and-limits (A):** The 22 assigned item carriers and page summary are mathematically sound after the repairs above. The page-level prerequisite edge to td-math-nonsmooth-equilibrium remains open in the current batch-11 cross-batch record. This is a workflow readiness hold, not an item-proof dependency; no Batch 11 item proof uses a nonsmooth-equilibrium result.
- **td-math-ensembles-and-limits-examples (B):** The four examples are sound after the A1 correction in ex-tdmath-finite-ensemble-mismatch. The page depends on the A-page companion, so its readiness inherits the A-page prerequisite hold. The B-page prose itself has no identified defect.

I found no confirmed defect outside the assigned editable carriers, so there are no uneditable findings. I did not independently audit the Batch 4 carriers behind the open page-level edge, the other page-level prerequisites, or the full proofs of published mathematical suppliers. I inspected their exact interfaces needed for the assigned claims. I did not retrieve the listed external literature anew; the proofs reviewed here are local deductions from their stated mathematical hypotheses.
