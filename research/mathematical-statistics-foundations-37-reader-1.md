# Step 3a reader report — batch 1

Run: `mathematical-statistics-foundations-37`  
Scope: batch `1`  
Review status: complete; run was live at the `3a-read` stage during review.

## Opened inventory

- Assignment and review instructions: `CLAUDE.md`, `briefs/reader.md`, and `research/mathematical-statistics-foundations-37-batch-1.pages.json`.
- Current batch contract: `research/mathematical-statistics-foundations-37-batch-1.proof-contracts.json`.
- Published supplier items opened: `def-algebra-of-subsets`, `def-sigma-algebra`, `def-measurable-space`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-extended-reals`, `def-nonnegative-extended-series`, `def-measurable-function-between-measurable-spaces`, `def-borel-sigma-algebra`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, and `lem-law-of-a-random-element-is-a-probability-measure`.
- Assigned A-page items opened in dependency order: `def-statistical-experiment`, `def-parametric-statistical-model`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `def-observational-equivalence`, `def-estimand-on-a-statistical-model`, `def-identifiability-of-an-estimand`, and `thm-identifiability-iff-constant-on-equivalence-classes`.
- Assigned B-page items opened after their suppliers: `ex-identifiable-bernoulli-model-and-estimand` and `cex-nonidentifiable-redundant-bernoulli-parameterization`.
- Assigned pages opened: `library/mathematical-statistics/statistical-experiments-models-and-identifiability.md` and `library/mathematical-statistics/statistical-experiments-models-and-identifiability-examples.md`.
- Source passages checked: Ryan Martin, §§1.3.6, 1.4.1, and 5.1; Charles Geyer, §6; Peter Hoff, p. 1; Botond Szabó and Aad van der Vaart, §1.1, Definition 1.1 and the statistical-model kernel conditions following it.

Review limitation: I first opened some published dependency items before their own transitive suppliers (notably `def-sigma-algebra` before `def-algebra-of-subsets`, and `def-probability-measure` before `def-measure`). All listed relevant supplier texts were read before review of the assigned draft items; the assigned frontier itself was reviewed in dependency order. This sequencing limitation left no identified mathematical uncertainty.

## Edit and evidence

- In `items/def-parameter-measurable-statistical-model-as-markov-kernel.md`, replaced the Geyer §6 reference, which treats identifiability rather than Markov kernels, with the direct definition in Szabó and van der Vaart, *Bayesian Statistics*, §1.1, Definition 1.1 and the following clauses applying it to a statistical model. The source states that each section is a probability measure and that each fixed-event probability map is measurable. Source: [Szabó and van der Vaart, §1.1](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics), PDF lines 249–264 in the opened rendering. Martin §5.1 was retained for the optional measurable parameter-space context; the definition and its mathematics were unchanged.
- The item’s proof contract has no citation or derivation obligations for this definition; its boundary checks remain valid. The item had no `verification.judge` record to remove.
- Validation after the edit: reflow reported `unchanged`; precheck reported `0 checked, 0 failing`; proof-layout reported `1 items, 0 steps, 0 defects`.

## Unedited defects

None. The assigned mathematics, constructions, witness values, dependency claims, and page summaries showed no remaining defect.

## Page verdicts

- **A — Statistical Experiments, Models and Identifiability:** sound. The summary preserves that parameter labels need not be measurable, models need not be injective, and kernel measurability is an additional condition. The factorization claim is accurately described as set-theoretic.
- **B — Statistical Experiments, Models and Identifiability — Examples:** sound. The Bernoulli example identifies its success probability by the mass of `{1}`; the redundant parameterization has distinct parameter points with equal laws and unequal first-coordinate targets. The page summary matches both items.

## Blocker

None.
