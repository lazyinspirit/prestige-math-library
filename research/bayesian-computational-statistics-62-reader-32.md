# Step 3a reader report — batch 32

Run: `bayesian-computational-statistics-62`  
Batch: `32`  
Date: 2026-10-15

## Opened inventory

- Assignment and evidence: `research/bayesian-computational-statistics-62-batch-32.pages.json`, `research/bayesian-computational-statistics-62-batch-32.proof-contracts.json`, `research/bayesian-computational-statistics-62-batch-32.prerequisite-context.json`, `research/bayesian-computational-statistics-62-batch-32.cross-batch-dependencies.json`, `research/bayesian-computational-statistics-62-batch-32.coverage.json`, and `research/bayesian-computational-statistics-62-batch-32.notes.md`. I used the contracts and author notes as evidence and checked the current carriers independently.
- Assigned A page: `library/bayesian-computational-statistics/general-state-mcmc-kernels-and-reversibility.md`.
- Assigned B page: `library/bayesian-computational-statistics/general-state-mcmc-kernels-and-reversibility-examples.md`.
- Assigned items: `items/def-general-state-reversibility-by-symmetric-flow-measure.md`, `items/thm-general-state-reversibility-implies-invariance.md`, `items/ex-finite-two-state-reversible-markov-kernel.md`, `items/ex-continuous-symmetric-random-walk-on-the-circle.md`, and `items/cex-systematic-composition-of-reversible-kernels-is-not-reversible.md`.
- Item suppliers opened for the assigned dependency chains: `def-measure-kernel-and-probability-kernel`, `def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `lem-prior-and-model-kernel-define-joint-law`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-countable-choice`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-measure-preserving-transformation-and-system`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `prop-restriction-is-a-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-composition-of-probability-kernels`, `lem-kernel-composition-is-well-defined-and-associative`, `thm-measurability-of-integration-against-a-kernel`, `thm-sections-of-product-measurable-functions-are-measurable`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, and `prop-order-and-scalar-rules-for-the-nonnegative-integral`.
- Manifest-required pages opened: `library/probability/stationary-markov-chains-and-ergodic-limits.md`, `library/mathematical-statistics/losses-risk-and-decision-rules.md`, and `library/functional-analysis/orthonormal-bases-parseval-and-fourier-series.md`.

## Mathematical review

- `def-general-state-reversibility-by-symmetric-flow-measure`: The kernel joint-law result supplies a probability measure on the full product sigma-algebra for arbitrary measurable spaces. Sections are measurable, and the coordinate-swap map is measurable because inverse images of generating rectangles are rectangles. The definition correctly states symmetry of the pushforward under swap without requiring a density, a standard-Borel hypothesis, or prior invariance.
- `thm-general-state-reversibility-implies-invariance`: For each measurable set A, the joint-law formula gives the flow mass of X × A as the integral of P(x,A) against π. Symmetry identifies it with the mass of A × X, whose rectangle formula and unit kernel row mass give π(A). The hypotheses and the invariant-kernel definition match the conclusion; the argument uses no hidden density or countability assumption.
- `ex-finite-two-state-reversible-markov-kernel`: The stated parameter range makes both rows stochastic and the displayed weights a probability. The two off-diagonal flow masses agree, the diagonal atoms are fixed by swap, and the four singleton rectangles generate the finite product sigma-algebra. The invariance conclusion follows from the assigned theorem, including the allowed boundary cases a = 1 or b = 1.
- `ex-continuous-symmetric-random-walk-on-the-circle`: The two translations are distinct for 0 < h < 1/2, giving pointwise probability rows with measurable event evaluations. The graph maps are measurable on the product sigma-algebra. The transpose calculation swaps the +h and −h terms, and translation invariance of the supplied circle probability makes the integrals equal for every product-measurable set. The measure-level proof correctly handles the atomic transition law and justifies invariance through the general theorem.
- `cex-systematic-composition-of-reversible-kernels-is-not-reversible`: Each transposition is an involution, so its uniform joint flow is symmetric. Under the library's chronological convention, their composition is 0 → 2 → 1 → 0; the uniform measure is invariant, while the flow masses at (0,2) and (2,0) are 1/3 and 0. This is a valid counterexample to closure of reversibility under systematic composition.

No assigned item has a confirmed mathematical, citation, title, definition, witness, computation, or formatting defect. No edits were needed. No outside defect was identified that requires a finding or a proposed withdrawal.

## Page verdicts

- `general-state-mcmc-kernels-and-reversibility`: **Clear.** Its summary accurately states the measure-level definition and invariance result, preserves the distinction from the countable-state results, and makes no convergence claim.
- `general-state-mcmc-kernels-and-reversibility-examples`: **Clear.** Its summary accurately describes the two reversible examples and the three-cycle counterexample, and does not imply irreducibility, uniqueness, or convergence.

The manifest-required stationary-chain, loss/risk, and Fourier pages did not supply or contradict a claim in these summaries. Their inspected page-level descriptions are consistent with the batch notes and item dependencies.

## Edits, source check, and blockers

- **Edits:** None. The assigned pages and items remain untouched.
- **Source check:** Roberts and Rosenthal, *General State Space Markov Chains and MCMC Algorithms*, §2, PDF p. 4, was opened at <https://www.probability.ca/jeff/ftpdir/probsurv.pdf>. Its definition states reversibility through symmetry of the π-weighted transition flow, and Proposition 1 states that reversibility implies stationarity. I used this for the source-level formulation; the arbitrary-measurable-space scope is established by the local joint-law supplier and theorem proof. Meyn and Tweedie's Chapter 10 PDF was also opened at <https://probability.ca/MT/Chap10.pdf>, but the web text extraction was unreadable, so I did not independently confirm its printed-page locator. That source was not needed to resolve the mathematics or find a defect.
- **Coverage limits:** I opened the assigned definition before its suppliers, then checked its cited suppliers before making the mathematical assessment; the assigned consumers were opened after their listed suppliers. I reviewed the relevant supplier arguments and their cited interfaces, not every unrelated transitive prerequisite of each published item. The source extraction limit above remains unresolved as a citation-location check, but it does not leave a mathematical claim unresolved.
- **Run status:** The live autopilot status reports the run as `running` with stage `3a-read` in progress. It also reports an unrelated existing `3a-collect` blocker: `collect-23` failed three times for batch 23. Batch 32 has no local blocker.
