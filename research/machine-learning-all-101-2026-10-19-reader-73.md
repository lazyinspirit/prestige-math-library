# Step 3a reader report — batch 73

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Dispatch label: `reader-73`

## Opened inventory

Assigned pages:

- `library/machine-learning/online-decision-protocols.md`
- `library/machine-learning/online-decision-protocols-examples.md`

Assigned items, reviewed in manifest dependency order:

- `def-online-decision-protocol`
- `def-adversary-and-feedback-model`
- `def-static-dynamic-and-strongly-adaptive-regret`
- `lem-finite-arm-regret-decomposes-into-expected-action-counts`
- `ex-full-information-finite-experts`
- `ex-changing-comparator-path-length`
- `ex-stochastic-two-arm-pseudo-regret`

The assigned inventory came from `research/machine-learning-all-101-2026-10-19-batch-73.pages.json`. I also consulted the relevant clauses in `research/machine-learning-all-101-2026-10-19-batch-73.proof-contracts.json` as evidence, not as a mathematical verdict.

Published probability, measure, and integration suppliers opened to check the claims used by the batch:

- `def-algebra-of-subsets`, `def-sigma-algebra`, `def-measurable-space`, `def-measurable-function-between-measurable-spaces`, `def-borel-sigma-algebra`
- `def-measure`, `def-measure-space`, `def-probability-measure`, `def-random-element-and-real-random-variable`
- `def-extended-real-valued-measurable-function`, `def-nonnegative-simple-measurable-function`, `def-integral-of-a-nonnegative-simple-function`, `def-nonnegative-lebesgue-integral`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-integral-over-a-measurable-set`
- `lem-well-definedness-of-the-simple-integral`, `prop-basic-properties-of-the-nonnegative-simple-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-simple-indefinite-integral-is-a-measure`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-integral-triangle-inequality`, `cor-integral-over-a-null-set-vanishes`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`
- `prop-measure-monotonicity`, `prop-measure-of-a-set-difference`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-continuity-from-below-for-measures`, `thm-continuity-from-above-for-measures`, `thm-finite-inclusion-exclusion-for-measures`, `lem-probability-measure-basic-identities`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-expectation-of-an-indicator-is-probability`

Authoritative source passages checked for the online-learning and bandit conventions:

- Hazan, *Introduction to Online Convex Optimization*, §§1.1, 10.1–10.2.1: [source PDF](https://arxiv.org/pdf/1909.05207). Section 1.1 gives the choose-then-reveal timing and fixed-comparator regret; §§10.1–10.2.1 give dynamic regret, path length, interval adaptive regret, and the strongly-adaptive benchmark.
- Ma, *Lecture Notes for Machine Learning Theory*, Chapter 11: [source PDF](https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf). §§11.1–11.2.1 give the online-learning/OCO timing, full-information loss observation, and oblivious/adaptive distinctions.
- Lattimore and Szepesvári, *Bandit Algorithms*, §§4.1, 4.4–4.5: [source PDF](https://tor-lattimore.com/downloads/book/book.pdf). §4.1 gives action-then-reward timing and the conditional arm-law model; §4.4 defines stochastic regret; §4.5, Lemma 4.5 and its proof, derives the gap-weighted expected action-count identity.

## Review and verdicts

The protocol, adversary, feedback, stochastic reward, and regret definitions preserve their timing and scope distinctions. The static and interval minima are covered by the stated finite-attainment condition; the dynamic comparator and path-length formula are defined for the stated positive-dimensional normed action set. The stochastic model states finite first moments and the eventwise conditional-mean identity used by its consumer.

In `lem-finite-arm-regret-decomposes-into-expected-action-counts`, the arm events form a finite measurable partition. The statement's conditional-mean identity on each full arm event is sufficient for Step 1.1; integrability makes each restricted reward integrable, and finite linearity justifies all sums. Steps 1.2–3.1 correctly identify expected pseudo-regret, expected realized regret, and expected pull counts. No missing hypothesis or unsupported inference was found.

The finite-expert example's minimum cumulative loss is attained at any simplex point with third coordinate zero; the learner loss is `7/6`, giving static regret `1/6`. In the changing-comparator example, static regret is `1/2`, dynamic regret is `3/2`, path length is `3`, and enumeration of all six nonempty contiguous intervals gives maximum interval regret `1/2`. In the two-arm example, the means are `3/4` and `1/2`; the deterministic arm-2 choice satisfies the fixed-law and conditional-mean conditions, and all three regret quantities equal `1/4`.

The assigned item statements are complete and uninterrupted by hyperlinks, with their references in immediately following references sections. Both assigned pages have frontmatter only, retain `page_layout: compact-v1`, and have no summary body. No diagram is present or needed for these definitions and numerical examples.

**Page verdict — `online-decision-protocols`: pass.** Its four items match the manifest and the body is empty.

**Page verdict — `online-decision-protocols-examples`: pass.** Its three examples match the manifest, it requires the A page, and the body is empty.

## Edits, defects, and checks

No item or page edits were made. No confirmed defect remains in the assigned items or pages, and no relevant supplier defect was found. Therefore no proof contract or judge record needed updating, and reflow, precheck, and proof-layout were not run because no item changed.

At the final state check, all seven assigned item hashes and both page hashes still matched the stored Step 3 pre-reader fingerprints. The live autopilot status showed batch 73 still missing from `3a-read`, no active worker, and a separate `3a-collect` blocker for batch 57 (`collect-57` failed three times). That run-level blocker is outside this batch and did not prevent this review.

## Coverage limitation

The assigned items and pages were all opened. I opened 39 relevant published supplier items used in the probability, indicator-expectation, and linearity arguments, but did not independently audit every item in the mechanically traversed 311-item transitive dependency closure, including foundational proofs not needed to check these claims. The report therefore makes no whole-closure audit claim.
