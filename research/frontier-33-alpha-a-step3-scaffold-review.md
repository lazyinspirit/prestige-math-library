# frontier-33 — Alpha group `a`, Step 3 scaffold review

This review covers batches `1`, `3`, and `4`. I read each A/B manifest,
coverage ledger, batch notes, controlling design section, and the current
`research/plan-spec.json`; I also checked the exact dependency statements and
the complete source sections used by the proposed proof routes. The review
made one licensed correction to an in-flight claim. It did not add a page,
create a forward edge, change reading order, edit published content, or alter
workflow state.

## Verdicts

| Batch | A page | B page | Items | Verdict |
| ---: | --- | --- | ---: | --- |
| 1 | `hausdorff-measure-and-hausdorff-dimension` | `hausdorff-measure-and-hausdorff-dimension-examples` | 31 + 15 | `sufficient` |
| 3 | `weak-laws-and-series-of-independent-random-variables` | `weak-laws-and-series-of-independent-random-variables-examples` | 27 + 9 | `sufficient` |
| 4 | `divergence-and-almost-everywhere-convergence-of-fourier-series` | `divergence-and-almost-everywhere-convergence-of-fourier-series-examples` | 10 + 4 | `sufficient` |

All three pairs are below the 60-item split threshold. After the correction
recorded below, each assigned claim has a coherent authoring route, exact
backward dependencies, and source or elementary-derivation support. There is
no missing result or source and no owner decision is required.

## Batch 1 — Hausdorff measure and dimension

The pair implements MT-21 at current plan orders `288.041` and `288.042`.
Its A page requires
`radon-measures-and-the-riesz-markov-kakutani-theorem-examples`; the B page
requires its own A page. The manifest then proceeds from the extended diameter
and scale contents through the metric outer-measure and Borel-hull results,
dimension laws, Euclidean comparison, the mass-distribution principle, and
the Cantor and restricted-digit computations. Every use of Lebesgue measure,
Cantor measure, metric outer measures, real powers, and choice is backed by a
published predecessor or is isolated in the stated local derivation.

The source route is Fremlin Chapter 26 (`264A–K`, `264X`, and the selected
`264Y` exercises), Falconer Chapter 1 (§§1.2–1.4), Bishop–Peres §§1.2–1.4,
and Semmes §2.5. The scaffold correctly avoids the isodiametric theorem when
proving only proportionality to Lebesgue measure: coordinate-box bounds give
`1 <= c_n <= n^(n/2)`, and the existing uniqueness theorem gives the Borel
comparison. The exact Cantor value uses the separately planned sharp interval
mass bound; the binary restricted-digit formula includes endpoint ambiguity,
finite-position, zero-exponent, and dyadic-boundary obligations. The
Sierpinski gasket proof supplies the one requested planar computation without
silently importing a self-similar-set theorem.

The companion's fat Cantor, line segment, Lipschitz graph, countable dense,
gasket, sparse-digit, Cantor-function, and false-statement examples all have
the required A-page support. Empty sets, `s=0`, infinite outer values,
degenerate segments, and critical-measure zero/finite/infinite cases are
explicitly accounted for.

## Batch 3 — weak laws and independent series

The pair implements PT-5 at orders `288.105` and `288.106`, after
`modes-of-convergence-for-random-variables-examples`. Its dependencies reach
the published convergence modes, product probability, independence,
Borel–Cantelli, moment identities, maximal tools, and real-series lemmas.
There is no dependency on a later characteristic-function or strong-law page.

Durrett §§2.2 and 2.5, Varadhan Chapter 3, and Roch Notes 4–5 support the
route. The weak-law branch preserves the distinctions among row independence,
pairwise uncorrelatedness, IID hypotheses, finite variance, integrability, and
truncated centering. The three-series branch includes a direct necessity
route: finite large-jump count, bounded symmetrization, summable variances,
and recovery of the deterministic truncated means. The independent-series
probability-to-almost-sure result has its own tail maximal inequality and
Cauchy-in-probability completeness lemma, so the deferred distribution-only
Levy implication is not load-bearing.

Boundary checks are represented by the Bernoulli endpoints, the
nonidentically distributed array, all three independent three-series
conditions, the rare-large-jump variance counterexample, Cauchy tails, and an
infinite-mean example with the atom and exact truncated centering retained.
The earlier unusable deterministic variance witness has already been replaced
by a valid independent random sequence.

## Batch 4 — Fourier divergence and almost-everywhere convergence

The pair implements FR-5 at orders `288.14018` and `288.1402`, after
`lacunary-fourier-series-and-sidon-sets-examples`. Laugesen Chapter 8 and
Examples 9.3–9.4, Grafakos §§3.4.3 and 4.2.1, and the selected Lacey
time-frequency sections support the route. The period-one normalization,
symmetric partial sums, normalized Haar measure, and strict range
`1 < p < infinity` are consistent with the published Fourier predecessors.

The local proofs are authorable: continuous approximants establish the exact
Lebesgue-constant operator norm; its harmonic lower bound and uniform
boundedness give a prescribed-point continuous divergence witness; and the
weak maximal principle closes convergence from polynomial density. The deep
Kolmogorov and Carleson–Hunt assertions remain explicit recorded-not-proved
remarks with structured external support, never logical dependencies. The
strong `(1,1)` counterexample instead has the local Fejer-kernel test route.
Thus the `14/40` low-yield warning reflects the designed literature boundary,
not a missing authoring ingredient.

One claim dropped a hypothesis while invoking the conditional maximal
principle. I changed
`rem-the-lone-endpoint-is-excluded-from-carleson-hunt` to begin “Assume
countable choice,” matching
`lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence`. The same
exact claim was updated in the batch notes. No item id, kind, dependency,
source, contract, or judge record changed.

## Scope decisions

After the final refresh, group `a` has `35` current declines and `0` pending
rows. Every row is resolved as `stands` with source-, design-, manifest-, and
destination-specific evidence in
`research/frontier-33-alpha-a-scope-decisions.json`; none requires
`owner-decision`.

The four deferred rows are correctly routed. Varadhan §3.3 and Theorem 3.6 go
to `strong-laws-of-large-numbers` at order `288.107`. The distribution-only
direction of Varadhan's Levy theorem and Exercise 3.10 go to
`characteristic-functions-inversion-and-continuity` at order `288.111`.
Both destinations exist after the current pair. All other rows are distinct
examples, alternate proofs, second theories, higher-dimensional branches, or
deep results excluded by MT-21, PT-5, or FR-5; none is needed by an assigned
statement, strategy, or dependency.

## Validation receipt

- `scope-decisions refresh --run frontier-33 --group a` reports `35`
  declines and `0` pending; the matching `check` reports `0` errors.
- `coverage-checklist --require-destination` passes for batches 1, 3, and 4
  with respectively `79`, `94`, and `40` harvested results. Batch 4 emits the
  reviewed `14/40` low-yield warning and no error.
- `source-fetch-check --coverage` reports `4/4`, `4/4`, and `3/3` sources
  fetch-verified.
- `manifest-deps` reports `96` items with `0` missing and `0` errors.
- `content-policy --manifest-only` reports `96` scoped items with `0` errors
  and `0` warnings.
- `splice-plan --dry-run` succeeds for each assigned batch, splicing `46`,
  `36`, and `14` new items without a withheld edge.
- A current-plan overlay replacing only these six pages passes
  `validate-plan`: declared order is acyclic and consistent, with no item
  cycle, forward reference, B-page dependency, or unresolved id. The tool's
  repository-wide redundant-prerequisite notices are informational and do not
  identify an owned defect.
- JSON parsing and `git diff --check` are the final local checks below.

There are no blockers. The next action is the engine-owned Step-3 closure and
stage transition for these three sufficient A/B pairs.
