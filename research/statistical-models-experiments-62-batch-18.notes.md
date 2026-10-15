# Batch 18 — biological and technical replication

## Scope and planning

- Owned pages: `biological-and-technical-replication` (A, order 1952) and
  `biological-and-technical-replication-examples` (B, order 1953), category
  `statistical-models-and-experiments`.
- The dispatch snapshot is `386e4ae06977e377b90dd7236b8bc21e4477e0cf0b4791e5511c16d11a581f99`.
  The dispatch-time artifact recorded batch 18 at level 3 with prerequisites
  1 and 7. After authoring the assigned manifest, an in-memory recomputation
  produced input hash
  `ec4a2828935ae54ce70339b545461257f1a62833a3d655c4ee4851ddba9a7ec9` and
  still gives batch 18 level 3 with prerequisites 1 and 7; no batch cycle was
  found. The persisted shared artifact remains at the dispatch hash and its
  read-only `check` reports stale. It was left for the owner to refresh.
- The controlling `plan-spec.json` gives the A page three prerequisites:
  `scientific-statistical-model-contracts`,
  `mixed-effects-and-longitudinal-models`, and
  `probability-spaces-random-variables-and-expectation`. Design SME-18 names
  SME-01/07 and published covariance algebra. The design omits the explicit
  probability-spaces page prerequisite; the controlling plan's broader page
  requirements were retained, and the item dependencies include the needed
  published expectation, moment, independence, and covariance suppliers. The
  theorem, assumptions, and local proof route otherwise match SME-18.
- Final inventory and item levels were entered in the batch manifest before
  carriers were written:

  | Item | Page | Logical suppliers | In-run level |
  |---|---|---|---:|
  | `def-biological-and-technical-replication-model` | A | `def-scientific-statistical-model-contract`, `def-linear-mixed-model`, plus published random-variable, expectation, moment, and independence definitions | 3 |
  | `thm-mean-and-variance-under-biological-and-technical-replication` | A | local model definition, published moment/covariance/factorization/expectation-linearity results and independence definition | 4 |
  | `ex-five-assays-on-one-animal-versus-five-animals` | B | local model definition and theorem | 5 |

  Thus the local edge order is definition → theorem → example. Levels use only
  in-run suppliers; published suppliers remain prerequisite context. No cycle
  was found.
- The existing `ex-technical-biological-units-and-repeated-visits` belongs to
  batch 1's examples manifest and has its own Step-1 record. It was inspected
  for ownership and left unchanged. Batch 18 has its own example ID and B-page
  placement.

## Supplier inspection and dependency dispositions

- `def-scientific-statistical-model-contract` (batch 1, draft): its actual
  Definition distinguishes biological units from technical repeats of the
  same specimen, says those labels alone imply no independence, and requires
  assignment-unit, target, observation-mechanism, and adequacy fields. The new
  definition follows those distinctions and states independence separately.
- `def-linear-mixed-model` (batch 7, draft): its actual Definition states the
  finite moment model $Y=X\beta+Zb+\epsilon$, zero means, covariance matrices,
  and independence of $b$ and $\epsilon$; it includes subject/visit roles,
  imposes no Gaussianity, and does not say its components are mutually
  independent within each vector. The new model is the random-intercept
  specialization and explicitly strengthens the assumptions to mutual
  independence across all biological effects and technical errors with common
  variances. The local variance proof does not use batch 7's still-separate
  marginal-covariance lemma.
- The published suppliers were checked against the proof uses: `def-moments-variance-and-covariance` supplies the finite centered-product definitions;
  `thm-covariance-bilinearity-and-symmetry` applies to finite square-integrable
  families; `thm-factorization-of-expectations-for-independent-variables`
  covers integrable products of independent variables; and
  `cor-expectation-linearity-monotonicity-and-modulus-bound` supplies finite
  expectation linearity. No Gaussian or choice assumption is used.
- The required published page
  `probability-spaces-random-variables-and-expectation` exists in
  `library/probability/`; its inventory includes the random-variable,
  expectation, moment, covariance, and expectation-linearity suppliers used
  here. The direct independence definition was read through its finite-
  subfamily event definition. No choice principle is inherited.
- The batch-18 cross-batch input records the actual batch-1 and batch-7 page
  and item interfaces as `verified`. This means body/interface inspection only;
  neither supplier pair is represented as accepted by its author, owner, or a
  gate. No supplier body needed by these claims was unavailable at handoff.

## Source reading and harvested results

- Gary W. Oehlert, *A First Course in Design and Analysis of Experiments*,
  author-hosted full-book PDF:
  <https://users.stat.umn.edu/~gary/book/fcdae.pdf>. The complete relevant
  passages in Chapter 1 §§1.3 and 1.5 were inspected (printed pp. 6 and 8–10):
  experimental versus measurement units, the classroom/plot/ingot/cage
  examples, the warning against treating within-unit measurements as
  experimental units, and the qualified discussion of more experimental units
  versus more measurements. Results were used for the unit distinction in the
  definition; the theorem and numerical example are proved locally.
- Susan Holmes and Wolfgang Huber, *Modern Statistics for Modern Biology*,
  author-hosted full-text Chapter 13:
  <https://www.huber.embl.de/msmb/13-chap.html>. The complete relevant passages
  in §§13.3.2, 13.4.2, and 13.4.5 were inspected. They distinguish biological
  and technical replication, caution that generalization requires an
  appropriate population sample, separate group-center precision from
  within-group diagnostic performance, and show why replicate needs depend on
  variability and effect size. These results support the definition and
  interpretation; they do not supply the exact local variance identity.
- Harvest dispositions are recorded per source and item in
  `statistical-models-experiments-62-batch-18.coverage.json`: the unit-role
  claims are `included`; the theorem and worked numerical calculations are
  `inline` and fully proved in the local carriers. Neither book is cited as a
  substitute for a proof. Browser retrieval and reading succeeded; no source
  recovery failure occurred, so no `source_resolution` record was needed.
- Local `source-fetch-check --stamp` passed: 2/2 full-text sources fetched and
  stamped; there were 0 source drops.

## Mathematical scope and limitations

- The fixed-schedule theorem proves the mean and variance under the balanced
  random-intercept model, common finite variances, centered components, and
  mutual independence. The proof uses finite covariance expansion and
  expectation factorization only; it is choice-free and non-Gaussian.
- In the assignment-averaged branch, the theorem retains the treatment-average
  variance and both treatment/component covariance terms. It removes those
  terms only when the stated treatment average is independent of the biological
  and technical averages. The iid equal-variance reduction is a separate
  special case.
- The example compares equal total assay counts under the same fixed treatment
  and target mean. It records the zero-biological-variance tie. No result
  asserts empirical adequacy, normal inference, or a universal cost-optimal
  allocation.

## Scoped checks and readiness

- Precheck passed for the two proof-bearing carriers: 2 checked, 0 failures;
  the model definition is not applicable. The final proof-layout pass covered
  all 3 items and 10 numbered steps with 0 defects.
- Scoped `rendercheck` passed on the 3 items and 2 pages: 5 files, 0 errors,
  0 warnings. Scoped `content-policy` passed for the batch manifest: 3 items,
  0 errors, 0 warnings.
- Strict `proof-contract` validation passed for all 3 items: 0 errors,
  0 warnings. Scoped `depcheck` passed for all 3 items and both pages, with
  0 errors/warnings across the 396-item, 163-page prerequisite closure.
- Source fetch check mode passed after stamping: 2/2 sources verified.
- `item-dependency-levels check --run statistical-models-experiments-62`
  reports no level error for any batch-18 item; their recomputed levels are 3,
  4, and 5. It still fails on other run work: empty inventories for the A/B
  pages response-surfaces-and-optimal-design, power-and-sample-size-planning,
  spatial-field-summary-estimators, and kriging-as-best-linear-prediction;
  missing levels for two batch-20 lemmas; and stale levels in the
  standardization/IPW and spatial-field batches. No outside pair was edited.
- The persisted batch-dependency artifact is stale after the assigned
  manifest update. The in-memory recomputation and its current hash are recorded
  above; the shared derived artifact was not written by this author.
- The three Step-1 author-readiness records are recorded separately. They mark
  authoring completeness only, not supplier acceptance or independent approval.
- A final read-only `loadStep3`/readiness-hash integrity recheck could not load
  the run manifests: `research/statistical-models-experiments-62-batch-33.pages.json`
  is invalid JSON at line 245, column 9. Line 244's `statement` field for
  `thm-weighted-logrank-terminal-normal-limit` is missing a trailing comma
  before the `deps` field. This is outside batch 18 and was left untouched; the
  owner must repair it before global Step-1 decision verification or scheduler
  refresh can complete. It is not a supplier of this pair.
- During CLI discovery, `depcheck.mjs --help` and `rendercheck.mjs --help`
  were not help modes and invoked their default whole-corpus scans. Those
  outputs are not used as batch evidence; subsequent checks were explicitly
  scoped. The scans did not change source or run-state files.
- The final read-only autopilot status recomputation reported the run as
  `running`, 37/62 batches covered, no active worker, and batch 18 still missing
  its native stage artifact. Step 1 remains held at `1-scaffold` for owner
  repair/recertification recorded in
  `research/statistical-models-experiments-62-step1-blockers.json`. The local
  carriers and author-readiness records do not constitute native dispatch
  acceptance. This batch did not modify the blocker, controller state, or any
  verdict and did not attempt a gate.
