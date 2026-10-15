# Batch 11 notes — Ensembles And Limits

Run physics-td-qft-rpm-62-2026-10-14, role beta, batch 11. This record documents draft authoring and scoped checks; it is not independent mathematical approval.

## Authority and plan reconciliation

The owner authoring direction was read and applied. The plan-spec page metadata and dispatch agree on page IDs, order, category, library, title, companion, and the exact eight page-level prerequisites. The plan-spec item arrays were empty before authoring. The plan’s original MP3 reservation names 17 A items; its later amendment adds four named results (general trace Gibbs, grand response covariance, Bose/Fermi mode fluctuations, conditional-memory entropy), giving the 21-item inventory used here. This is amendment history, not a conflict requiring a shared-plan edit.

## Prerequisite carrier reconciliation

The batch dependency input assigns batch 11 level 2 with batch 4 as its immediate predecessor. Batch 4 is level 1 and lists batch 3 as its predecessor. Batch 3 has a populated ordered-composition A/B manifest and local page; its notes record its own prerequisite and review evidence.

Batch 4’s current run manifest still has empty item arrays, but draft carriers for the nonsmooth-equilibrium A page and its 14 listed items are present on disk. The live autopilot status reports batch 4 in flight and its scaffold artifact missing; live reconstruction also reports a workflow-revision mismatch and falls back to the last report. The available page is status draft and has no matching batch-4 notes, coverage file, proof-contract file, or Step 1 readiness records. One carrier, cor-tdmath-ordered-finite-mixture-envelope, explicitly says its batch-3 proof/prerequisite closure remains unresolved. We treat the page-level prerequisite as draft text but not current/closed evidence. Its actual statements were inspected; none of the 25 batch-11 item proofs cites or uses a nonsmooth-equilibrium result. The required page edge remains open, so batch-11 readiness is escalated rather than treating a draft carrier as accepted.

The seven imported mathematical prerequisite pages are present in the read-only root library. Direct statements and proofs actually used by local items were inspected at their current interfaces. Imported mathematical originals and batch-4 carriers were not edited.

## Inventory and item dependency levels

The A page contains the 21 named MP3 results; the B page contains four leaf examples. Both remain below the 100-item cap. Item levels were recomputed from in-run item dependencies only; page-level batch priority is recorded separately.

- def-tdmath-countable-canonical-model: level 0; deps def-complete-ordered-field, def-finite-sum, def-natural-logarithm, def-real-exponential-function-and-e, def-series.
- thm-tdmath-summable-canonical-differentiation: level 1; deps cor-mean-value-theorem, def-natural-logarithm, def-real-exponential-function-and-e, def-series, def-tdmath-countable-canonical-model, thm-chain-rule, thm-derivative-of-exponential, thm-logarithm-derivative-and-integral.
- def-tdmath-diagonal-operator-model: level 0; deps def-hilbert-space, def-square-summable-family-on-an-arbitrary-index-set, def-unbounded-linear-operator-domain-and-graph.
- lem-tdmath-diagonal-self-adjointness: level 1; deps def-adjoint-of-a-densely-defined-unbounded-operator, def-real-and-complex-inner-product-space, def-square-summable-family-on-an-arbitrary-index-set, def-tdmath-diagonal-operator-model, thm-cauchy-schwarz-in-an-inner-product-space.
- def-tdmath-measure-integral: level 0; deps def-complete-ordered-field, def-finite-sum.
- thm-tdmath-monotone-convergence: level 1; deps def-complete-ordered-field, def-finite-sum, def-tdmath-measure-integral.
- lem-tdmath-fatou: level 2; deps def-tdmath-measure-integral, thm-tdmath-monotone-convergence.
- thm-tdmath-dominated-convergence: level 3; deps def-tdmath-measure-integral, lem-tdmath-fatou, thm-tdmath-monotone-convergence.
- thm-tdmath-measurable-canonical-identities: level 4; deps cor-mean-value-theorem, def-natural-logarithm, def-real-exponential-function-and-e, def-tdmath-measure-integral, thm-chain-rule, thm-derivative-of-exponential, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, thm-tdmath-dominated-convergence.
- thm-tdmath-finite-bath-error-bound: level 1; deps cor-taylor-remainder-bound, def-natural-logarithm, def-real-exponential-function-and-e, def-tdmath-countable-canonical-model, thm-natural-logarithm-laws.
- thm-tdmath-independent-bulk-limit: level 0; deps def-expectation-on-a-finite-probability-space, def-finite-probability-space-and-event, def-finite-real-random-variable-and-distribution, def-natural-logarithm, def-product-of-finite-probability-spaces, def-real-exponential-function-and-e, def-variance-and-covariance, lem-finite-sum-reindexing-and-fubini, thm-expectation-of-products-of-independent-random-variables, thm-natural-logarithm-laws, thm-product-probability-has-independent-coordinate-events, thm-variance-of-a-finite-sum.
- thm-tdmath-ising-chain-limit: level 0; deps def-finite-sum, def-natural-logarithm, def-real-exponential-function-and-e, lem-finite-sum-laws, thm-algebra-of-derivatives, thm-chain-rule, thm-derivative-of-exponential, thm-exponential-addition-formula, thm-exponential-beats-every-polynomial, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, thm-nth-roots-exist, thm-real-power-continuity-and-derivatives.
- def-tdmath-bounded-finite-range-lattice: level 0; deps def-finite-sum, def-real-exponential-function-and-e.
- thm-tdmath-finite-range-lattice-pressure-limit: level 1; deps def-natural-logarithm, def-tdmath-bounded-finite-range-lattice, thm-division-algorithm-in-z, thm-natural-logarithm-laws.
- thm-tdmath-limiting-derivative-and-concentration: level 2; deps cor-mean-value-theorem, def-expectation-on-a-finite-probability-space, def-finite-probability-space-and-event, def-natural-logarithm, def-real-exponential-function-and-e, def-variance-and-covariance, thm-derivative-of-exponential, thm-logarithm-derivative-and-integral, thm-tdmath-finite-range-lattice-pressure-limit.
- lem-tdmath-finite-ground-degeneracy: level 1; deps def-natural-logarithm, def-real-exponential-function-and-e, def-tdmath-countable-canonical-model, thm-exponential-beats-every-polynomial, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws.
- lem-tdmath-conditional-memory-entropy: level 0; deps def-finite-probability-space-and-event, def-finite-sum, def-natural-logarithm, thm-natural-logarithm-laws.
- lem-tdmath-mutual-information: level 1; deps cor-mean-value-theorem, def-finite-probability-space-and-event, def-finite-sum, def-natural-logarithm, lem-tdmath-conditional-memory-entropy, thm-logarithm-derivative-and-integral.
- thm-tdmath-general-trace-gibbs-model: level 2; deps cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator, def-axiom-of-choice, def-natural-logarithm, def-real-and-complex-inner-product-space, def-real-exponential-function-and-e, def-tdmath-countable-canonical-model, def-trace-class-operator, thm-bounded-borel-pvm-integral, thm-cyclicity-of-the-trace, thm-derivative-of-exponential, thm-logarithm-derivative-and-integral, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-tdmath-summable-canonical-differentiation, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues.
- thm-tdmath-grand-response-covariance: level 4; deps cor-mean-value-theorem, def-natural-logarithm, def-real-exponential-function-and-e, def-tdmath-measure-integral, thm-algebra-of-derivatives, thm-chain-rule, thm-derivative-of-exponential, thm-logarithm-derivative-and-integral, thm-tdmath-dominated-convergence.
- lem-tdmath-bose-fermi-mode-fluctuations: level 2; deps def-expectation-on-a-finite-probability-space, def-finite-probability-space-and-event, def-natural-logarithm, def-real-exponential-function-and-e, def-tdmath-countable-canonical-model, def-variance-and-covariance, thm-chain-rule, thm-derivative-of-exponential, thm-exponential-beats-every-polynomial, thm-natural-logarithm-laws, thm-tdmath-summable-canonical-differentiation.
- ex-tdmath-countable-partition-divergence: level 1; deps def-tdmath-countable-canonical-model.
- ex-tdmath-two-level-canonical-fluctuations: level 2; deps def-tdmath-countable-canonical-model, thm-tdmath-summable-canonical-differentiation.
- ex-tdmath-correlated-pair-mutual-information: level 2; deps lem-tdmath-conditional-memory-entropy, lem-tdmath-mutual-information.
- ex-tdmath-finite-ensemble-mismatch: level 2; deps def-tdmath-countable-canonical-model, thm-tdmath-summable-canonical-differentiation.

## Mathematical scope and limitations

The countable canonical results require the displayed local summable moment envelope; a lower energy bound alone does not imply a finite partition sum. The measurable identities require a reference measure and a compact-parameter integrable envelope. The trace result explicitly assumes AC and a positive trace-class Gibbs operator, with interval identities conditional on the same eigenvalue list and its summable envelope. Entropy, mutual-information, and Bose/Fermi claims concern the stated probability laws only.

The finite-range limit is restricted to finite alphabets and bounded translation-invariant finite-range interactions on cubic boxes with free boundary; alternate boundary energies are covered only under the stated surface-order bound. Concentration is conditional on differentiability of the limiting pressure. The transfer-matrix result is one-dimensional and periodic. No unrestricted ensemble-equivalence, long-range or continuum thermodynamic limit, physical certification, or empirical result is asserted.

## Source-reading record

Four independent full-text treatments support the A page: Tong’s complete 191-page lecture text, Arovas’s complete 635-page lecture notes, Tao’s complete 265-page measure-theory book, and the complete five-page MIT 18.125 Lecture 5. The coverage file records URLs, locators, supported items, and included/inline dispositions. Tong and Arovas supply physics ensemble context; Tao and MIT supply independent measure-theory treatments. These treatments support source coverage, not mathematical proof acceptance. Fetch stamps are recorded after the scoped source-fetch-check; no failed retrieval or dropped source is claimed.

## Scoped checks and readiness

The final scoped proof-layout run, strict proof-contract gate, content-policy check, and item dependency-level recomputation are recorded after final item edits. Every assigned readiness record includes its examined direct dependencies and the unresolved page-level edge to td-math-nonsmooth-equilibrium. All 25 items are escalated because the required predecessor is still an in-flight draft without current run-level manifest/contract/coverage/readiness evidence. No readiness record is marked ready. Completion records do not constitute independent approval.
