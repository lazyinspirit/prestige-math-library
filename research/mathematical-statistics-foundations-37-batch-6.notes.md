# Batch 6 authoring notes — MSF-06

## Design control and plan comparison

`research/mathematical-statistics-foundations-37-owner-authoring-direction.md`
controls the run, and the complete MSF-06 row in
`research/plan-mathematical-statistics-track.md` controls the scope. It calls
for bias/MSE, the bias–variance decomposition, unbiased/UMVU definitions,
Rao–Blackwell, Lehmann–Scheffé, and three B examples: the binomial sample
proportion, one Bernoulli observation conditioned on its sample sum, and a
biased estimator with lower MSE at a specified parameter. The two A/B page IDs,
titles, orders 1854–1855, category, companion links and `requires` lists agree
between the controlling plan, `plan-spec.json`, and the scaffold.

The preauthoring manifest had empty `items` arrays, while the controlling design
promises the five results and three examples above. This is the expected
inventory slot, not a substantive plan conflict. Two local A-page lemmas were
added before the items that need them: integration against a Dirac measure
evaluates at its point, and a measurable statistic induces a deterministic
probability kernel. The first verifies the deterministic specialization of the
MSF-03 risk formula; the second proves that the estimator is an admissible
probability-kernel decision rule. Both are below the page cap. No shared plan,
published item, engine state or owner verdict was changed.

## Inventory, dependencies and item levels

Batch 6 remains at batch `dependency_level: 3`, with prerequisite batches 2, 3
and 5, under the dispatch input
`dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`.
Item levels below are recomputed from current carriers in batches 1, 2, 3, 5
and 6. I inspected the actual MSF-03 `def-loss-function-and-risk` carrier at
level 3 and the MSF-05 `def-sufficient-statistic` and
`def-complete-statistic` carriers at level 4 before treating their interfaces as
verified. The listed levels include these in-run edges.

| Item | Level | In-run suppliers used for the level |
|---|---:|---|
| `lem-dirac-integral-evaluation` | 0 | none |
| `lem-statistic-induces-deterministic-procedure` | 4 | `def-statistic-and-estimator` (batch 2, level 3) |
| `def-bias-and-mean-squared-error` | 5 | `lem-statistic-induces-deterministic-procedure` (4); `def-statistic-and-estimator` (3); `def-loss-function-and-risk` (3) |
| `thm-bias-variance-decomposition` | 6 | `def-bias-and-mean-squared-error` (5) |
| `def-unbiased-estimator-and-umvu` | 6 | `def-bias-and-mean-squared-error` (5); `def-statistic-and-estimator` (3) |
| `thm-rao-blackwell` | 7 | `def-unbiased-estimator-and-umvu` (6); `def-sufficient-statistic` (batch 5, level 4); `lem-procedure-action-law-is-measurable` (batch 2, level 2) |
| `thm-lehmann-scheffe` | 8 | `thm-rao-blackwell` (7); `def-unbiased-estimator-and-umvu` (6); `def-sufficient-statistic` and `def-complete-statistic` (batch 5, level 4) |
| `ex-binomial-sample-proportion` | 7 | `thm-bias-variance-decomposition` (6); `def-unbiased-estimator-and-umvu` (6) |
| `ex-biased-estimator-lower-mse` | 7 | `def-unbiased-estimator-and-umvu` (6) |
| `ex-rao-blackwell-bernoulli-observation` | 8 | `thm-rao-blackwell` (7); `def-sufficient-statistic` (batch 5, level 4) |

The page manifests are sorted in ascending item level. The current full-run
scheduling artifact will need the ordinary owner/engine recomputation after
these manifest changes; its stored input stamp was not edited by this batch.
The read-only scoped recomputation uses actual batch-1, -2, -3, -5, and -6
carriers. A full-run check also encounters empty manifests in other assigned
batches; that run-wide inventory issue is outside this pair's authority.

## Cross-batch supplier checks

The initially absent MSF-03/MSF-05 carriers arrived while this pair continued
authoring. I read their actual statements and checked the dependent claims
against those bodies; no dependent claim is omitted. The cross-batch evidence
records the exact pair edges and keeps each status `open` for independent
review.

| Supplier | Actual interface checked | Affected claims |
|---|---|---|
| `def-loss-function-and-risk` (MSF-03) | For fixed $\theta$, the action-loss section is measurable; randomized-rule risk is the iterated kernel integral of nonnegative loss and can be extended-valued; a deterministic rule is represented by its point-mass action kernel. Local A lemmas prove the point-mass kernel construction and its nonnegative integral evaluation. | `def-bias-and-mean-squared-error` and its bias–variance, UMVU, Rao–Blackwell, Lehmann–Scheffé and B-page dependents. |
| `def-sufficient-statistic` (MSF-05) | Standard-Borel data and statistic spaces, plus one supplied parameter-independent probability kernel satisfying the event identity for every $\theta$, data event and statistic event. The Rao–Blackwell proof constructs its single Borel conditional-mean function from this exact common kernel. | `thm-rao-blackwell`, `thm-lehmann-scheffe`, and `ex-rao-blackwell-bernoulli-observation`. |
| `def-complete-statistic` (MSF-05) | Completeness explicitly assumes $E_\theta|h(S)|<\infty$ for every $\theta$ and concludes parameterwise almost-sure vanishing from all-parameter zero means. | `thm-lehmann-scheffe`; finite variances of both Rao–Blackwellized estimators supply the needed integrability. |

## Supplier bodies inspected

- The actual MSF-02 draft `def-statistic-and-estimator` states the data map and
  measurable real target convention. The actual
  `def-randomized-procedure-as-a-markov-kernel` states the pointwise kernel
  conditions. I read the full proof of
  `lem-procedure-action-law-is-measurable`; it proves nonnegative kernel
  integration measurability by increasing simple approximations and monotone
  convergence, which is used for the conditional kernel integrals.
- The published conditional-expectation page and relevant item bodies were
  inspected: `def-conditional-expectation-given-a-sigma-algebra`,
  `def-conditional-expectation-as-an-ae-class`,
  `cor-conditional-lp-contraction`,
  `thm-conditional-expectation-is-the-l2-orthogonal-projection`,
  `thm-basic-algebra-and-order-properties-of-conditional-expectation`, and
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`. The conditional
  expectation and L2 projection branch assumes AC; Batch 6 states and declares
  `def-axiom-of-choice` wherever that branch is used. The common RCD itself is
  assumed supplied by the sufficiency interface; no RCD existence theorem is
  inferred.
- The published finite-moment, kernel, Dirac, measurable-closure, simple
  approximation, monotone-convergence, L1-linearity, variance-sum and
  independence-covariance supplier statements and proofs used by the local
  items were inspected. The Bernoulli examples are choice-free finite
  calculations; the Rao–Blackwell theorem citation retains its AC branch.

## Source reading and dispositions

`mathematical-statistics-foundations-37-batch-6.coverage.json` records exact
URLs, locators, item mappings and dispositions for every harvested source
result. My full-text inspection covered:

- Deligiannidis, Oxford SB2.1: complete relevant Chapters 5–6, PDF pp. 29–40,
  including Theorem 6.1 and its full scalar proof and Theorem 6.5 and its
  Lehmann–Scheffé proof. The written Theorem 6.1 equality case is left as an
  exercise; the local proof supplies the equality criterion from the published
  L2 projection theorem.
- Gregory, USC STAT 713 Lecture 6: all 27 PDF pages. The handwritten Rao–Blackwell
  argument on PDF p. 10 and Lehmann–Scheffé continuation on p. 16 were rendered
  and visually inspected, alongside theorem slides on pp. 9 and 15.
- Shao, Wisconsin STAT 709 Lecture 15: all 16 pages; UMVUE and
  Lehmann–Scheffé material on pp. 1–4.
- Martin, UIC Advanced Statistical Theory: PDF pp. 100–103. Its squared-error
  risk interface is used for context. Its convex-loss decision theorem is not
  used as a substitute for the finite-variance proof.
- Axler, *Measure, Integration & Real Analysis*: Example 2.55, PDF p. 42, for
  the Dirac set function; Tao, *An Introduction to Measure Theory*, Examples
  1.4.22 and 1.4.29, PDF pp. 90–92, for the same point-mass measure and
  countable-additivity context. Neither passage is represented as proving the
  Dirac integral identity; its complete proof is local in
  `lem-dirac-integral-evaluation`.

`source-fetch-check --stamp` reported 8/8 page-source entries fetch-verified,
all newly stamped, with zero documented drops. The coverage checklist reported
2 pages and 21 harvested results with no errors or warnings after the final
dispositions. No retrieval failed, so no retries, source drops or
`source_resolution` records were needed.

## Mathematical review

- `lem-dirac-integral-evaluation` proves the nonnegative identity first for
  finite simple representations and then for all nonnegative measurable
  functions by monotone convergence, retaining the $+\infty$ case.
- `lem-statistic-induces-deterministic-procedure` checks both pointwise
  probability sections and eventwise measurability; it does not rely on a
  diagram or an auxiliary random seed.
- The bias–variance proof assumes a finite second moment and expands the square
  only after integrability is known. The UMVU definition requires unbiasedness
  and finite variance at every parameter and makes no existence claim.
- Rao–Blackwell constructs one Borel $g$ from the supplied common kernel,
  extends its event identities from simple functions by monotone convergence,
  checks finite moments, then uses the AC-dependent L2 projection identity.
  The equality criterion is proved, not left as the lecture-note exercise.
- Lehmann–Scheffé applies completeness to the integrable difference between
  the competitor’s Rao–Blackwellization and $g(S)$. The reverse variance
  comparison and Rao–Blackwell equality clause prove uniqueness up to
  $P_\theta$-almost-sure equality for each $\theta$.
- The binomial calculation covers $p=0,1$. The biased-rule example is explicitly
  pointwise at $p=1/5$ and checks $p=1$ to show that the improvement is not
  uniform. The Bernoulli conditional-law construction and expectation formula
  cover both endpoint parameters and all $n\ge1$.

## Scoped checks and readiness

The final Batch 6 checks report:

- The dependency graph recomputed from actual carrier frontmatter in batches
  1, 2, 3, 5 and 6 has 60 items, no missing carriers or cycles, and agrees with
  all ten Batch 6 `dependency_level` labels in this manifest and its carriers.
  The Batch 6 levels are 0, 4, 5, 6, 6, 7, 7, 7, 8 and 8 as listed above.
- `precheck.mts`: 8 proof-bearing items checked, 0 failing. `proof-layout`:
  10 items, 20 numbered steps, 0 defects.
- `proof-contract.mjs --strict`: 10/10 contracts checked, 0 errors, 0 warnings;
  every cited supplier excerpt is from its current item section. `content-policy`
  on the completed manifest: 10 items, 0 errors, 0 warnings.
- `depcheck --items-file` on these ten IDs passed the focused item checks and
  prerequisite-cycle checks (779 items and 150 pages). `rendercheck` passed all
  ten items and both A/B pages, including real KaTeX and renderer YAML parsing.
- The coverage checklist passed: 2 pages, 21 harvested results, 0 errors and 0
  warnings. The final non-stamping `source-fetch-check` reported 8/8 sources
  fetch-verified and resolved, with 0 documented drops; the earlier `--stamp`
  run stamped all eight.
- `step1-decisions record` marked each of the ten items `ready` with its direct
  dependencies recorded. The run-wide readiness check reports all ten Batch 6
  items closed; the run-wide check remains open because other batches still
  have missing readiness records. These are completion records, not
  independent approval.

Run-wide reconciliation is still needed and was left to the owner/engine:

- The official full-run `item-dependency-levels.mjs check` reports seven empty
  assigned page inventories and stale item levels elsewhere. Its
  60-item scoped check over batches 1, 2, 3, 5 and 6 reports three mismatches
  outside Batch 6: `def-likelihood-ratio-equivalence-on-common-discrete-support`
  (declared 3, computed 0),
  `thm-countable-mixture-dominates-sigmafinite-dominated-family` (3, 0), and
  `ex-countable-mixture-dominates-bernoulli-scale-family` (4, 1). The actual
  MSF-05 supplier carriers `def-sufficient-statistic` and
  `def-complete-statistic` have valid dependency lists and computed level 4;
  their statements and proofs were inspected. The Batch 6 labels match the
  current carrier dependency closure. The unrelated stale labels and empty
  inventories need owner reconciliation before the run-wide level gate closes.
- `batch-dependency-levels.mjs check --run` reports the stored schedule as
  stale after the Batch 6 manifest was populated. Its owner/engine recomputation
  was not performed here.
- `proof-contract-coverage.mjs --run` is blocked before coverage evaluation by
  the missing unrelated frontier carrier
  `ex-finite-class-rademacher-and-uniform-deviation`.

No mathematical supplier gap remains for this pair. The actual MSF-03 and
MSF-05 statements were checked against each dependent claim; their cross-batch
edges remain `open` for independent review in the dependency evidence. No other
pair, shared plan, published item, schedule artifact or verdict was edited.
