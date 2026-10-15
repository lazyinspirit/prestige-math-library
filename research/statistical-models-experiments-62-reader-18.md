# Step 3a reader report — batch 18

Run `statistical-models-experiments-62`; batch `18`. The recomputed autopilot
status was `running`, at `3a-read`. I reviewed the current authored content
independently of the authoring decisions and contracts.

## Opened inventory

- Assigned pages:
  - A-page: `library/statistical-models-and-experiments/biological-and-technical-replication.md`
  - B-page: `library/statistical-models-and-experiments/biological-and-technical-replication-examples.md`
- Assigned items, in dependency order:
  - `items/def-biological-and-technical-replication-model.md`
  - `items/thm-mean-and-variance-under-biological-and-technical-replication.md`
  - `items/ex-five-assays-on-one-animal-versus-five-animals.md`
- Direct suppliers and results used by the assigned items, opened before the
  assigned items:
  - `items/def-scientific-statistical-model-contract.md`
  - `items/def-linear-mixed-model.md`
  - `items/def-random-element-and-real-random-variable.md`
  - `items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md`
  - `items/def-moments-variance-and-covariance.md`
  - `items/def-independent-random-elements.md`
  - `items/cor-expectation-linearity-monotonicity-and-modulus-bound.md`
  - `items/lem-variance-and-covariance-identities-for-random-variables.md`
  - `items/thm-covariance-bilinearity-and-symmetry.md`
  - `items/thm-independent-random-elements-have-product-joint-law.md`
  - `items/thm-factorization-of-expectations-for-independent-variables.md`
- Also consulted the assigned batch manifest, `briefs/reader.md`, the current
  batch proof contracts and cross-batch dependency record, `SCHEMA.md`, and the
  Step 3 sections of `WORKFLOW.md`.

## Review and edits

- **Biological and technical replication model:** No defect found. The
  definition distinguishes biological, randomization, and technical units;
  states the balanced index ranges, square-integrability, common variances,
  centering, and mutual independence needed by the result; and does not infer
  Gaussianity or empirical adequacy. Its random-assignment clause allows
  dependence with treatment contributions and directs the result to retain the
  relevant covariance terms.
- **Mean and variance theorem:** No defect found. The fixed-schedule mean and
  variance follow by finite-sum expansion. Step 1.2 uses the model's mutual
  independence and the expectation-factorization result to show the required
  off-diagonal and biological–technical covariances vanish. Steps 2.1–2.2 count
  the diagonal terms correctly. Step 4.1 retains both treatment covariance
  terms and states the additional independence conditions before removing
  them. The iid treatment-variance specialization is also correctly qualified.
- **Five-assay example:** No defect found. Substitution gives `21/5` for
  `(n,m)=(1,5)`, `1` for `(n,m)=(5,1)`, and difference `16/5`. The zero
  biological-variance comparison follows from the general theorem and does
  not claim a strict advantage at that boundary.
- Proof steps in the theorem and example are separated into paragraphs and end
  with justification tags; no formatting repair was needed.
- **Edits:** None. No item was changed, so reflow, precheck, and the final
  proof-layout command were not run.

## Source check

The cited sources support the unit distinction and the qualitative replication
context; the exact variance identities are proved locally in the theorem.
Oehlert, [*A First Course in Design and Analysis of Experiments*](https://users.stat.umn.edu/~gary/book/fcdae.pdf),
§1.3 (printed p. 6; PDF text lines 547–559) distinguishes treatment-assignment
units from responses, and §1.5 (printed pp. 8–10; PDF text lines 616–686)
distinguishes experimental from measurement units and says more experimental
units with fewer measurement units generally work better, subject to unit-size
caveats. Holmes and Huber, [*Modern Statistics for Modern Biology*, Chapter 13](https://www.huber.embl.de/msmb/13-chap.html),
§13.3.2 (lines 112–128) distinguishes biological from technical replicates and
cautions that generalization depends on the sampled units; §13.4.2 (lines
158–168) discusses replication and effect size; §13.4.5 (lines 436–441) states
that required replication depends on variability and effect size. These
locators match the item references and do not supply the theorem's
model-specific algebra.

## Page verdicts

- **A-page `biological-and-technical-replication`: pass.** Its summary accurately
  limits the variance formula to the stated common-variance and independence
  assumptions and does not claim empirical adequacy or normality.
- **B-page `biological-and-technical-replication-examples`: pass.** Its summary
  accurately describes the two five-reading allocations and confines the
  comparison to the stated model.

## Uneditable defects and blockers

- No uneditable defect was identified in the assigned items, pages, or the
  direct suppliers and theorem interfaces reviewed.
- No blocker for the assigned content was identified.
- Coverage limitation: I did not independently review every item in the full
  transitive foundational dependency closure beneath the direct suppliers. The
  review checked the assigned proofs against the exact direct definitions and
  cited theorem interfaces listed above, including the local proof of the
  covariance and expectation-factorization results; it is not a whole-closure
  audit of those foundations.
