# Batch 44 authoring notes — Feynman–Kac targets and sequential particle filters

## Plan reconciliation

The batch task, BCS-41 track plan, and `plan-spec.json` agree on page IDs,
titles, order 2128/2129, category, companion, and page prerequisites. The plan
spec has no item inventory; the track design controls the item scope. There is
no plan-spec conflict to carry forward.

The plan's SIR prose describes ancestor indices as conditionally IID, then
allows both multinomial and residual offspring schemes. Those descriptions
cannot both apply to residual resampling: its deterministic floor counts make
the indices dependent. The local algorithm separates the branches. The IID
claim applies to multinomial resampling; the residual procedure is specified
by floors plus categorical fractional remainders. The local count theorem
proves the shared conditional expected-count identity, which is the property
used in the normalizer proof.

## Inventory, dependencies, and levels

Levels are computed from all current manifests in run
`bayesian-computational-statistics-62`; external published suppliers do not
raise an in-run item level. The local manifest and item carriers agree.

| Item | Page | Level | In-run suppliers |
| --- | --- | ---: | --- |
| `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels` | A | 0 | none |
| `alg-multinomial-and-residual-offspring-resampling` | A | 0 | none |
| `def-feynman-kac-path-targets-and-normalizers` | A | 1 | none |
| `thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts` | A | 1 | resampling algorithm |
| `lem-feynman-kac-path-measures-satisfy-forward-recursion` | A | 2 | Feynman–Kac definition |
| `thm-feynman-kac-path-radon-nikodym-weight` | A | 2 | Feynman–Kac definition; kernel RN lemma |
| `alg-sequential-importance-resampling` | A | 3 | Feynman–Kac definition; path RN theorem; resampling algorithm |
| `thm-sequential-particle-estimator-is-unbiased` | A | 4 | Feynman–Kac definition; resampling-count theorem; forward-recursion lemma; path RN theorem; SIR algorithm |
| `ex-multinomial-versus-residual-resampling` | B | 2 | resampling algorithm; resampling-count theorem |
| `ex-bootstrap-and-informed-proposal-particle-filter` | B | 4 | Feynman–Kac definition; path RN theorem; SIR algorithm |
| `cex-particle-filter-proposal-misses-target-support` | B | 4 | Feynman–Kac definition; SIR algorithm |

Direct external dependencies, including those used by B's bootstrap example,
are enumerated in the manifest. `thm-sequential-particle-estimator-is-unbiased`
now declares the Feynman–Kac definition directly because its statement assumes
that setup. `def-conditional-expectation-as-an-ae-class` is the exact published
supplier ID used by that proof; the prior misspelling was corrected in both
the item and manifest. The kernel RN lemma also declares the section-measurability
and nonnegative indefinite-integral suppliers used to show that each weighted
kernel section is a finite measure before applying measure determination.

The 11 item levels recomputed against all current run manifests are
`0,0,1,1,2,2,3,4,2,4,4`, with no batch-44 cycles or label mismatches. The
focused dependency check also traversed 683 items and 179 prerequisite pages
with no unresolved dependencies, cycles, errors, or warnings.

## Supplier inspection and cross-batch interfaces

The current `def-state-space-filtering-laws` body was inspected. It defines
conditional-law versions and explicitly does not select pointwise values on
observation-null histories; the Feynman–Kac definition preserves that
convention. Its Step 1 record rechecks closed/ready (owner false).

The current `alg-importance-sampling` and
`thm-ordinary-importance-sampling-is-unbiased` bodies and proofs were inspected.
The two-state example uses their target/proposal ratio and support hypotheses
with counting measure, positive proposal masses, finite target integral, and
`f=1`. Both Step 1 records recheck closed/ready (owner false). These records
are authoring-readiness evidence, not independent approval. The exact page and
item interfaces are recorded in
`bayesian-computational-statistics-62-batch-44.cross-batch-dependencies.json`.
No unresolved supplier IDs or hypotheses remain at handoff.

## Source harvest

The coverage file records URLs, read ranges, supported items, source-result
dispositions, and successful retrieval evidence. The A page uses Doucet–Johansen
§§3.2–3.5 (PDF pp. 8–14), Särkkä–Svensson Chapter 11 §§11.2–11.5 (printed
pp. 231–242), Chopin §§2.1–2.2 (PDF pp. 3–7), and the Mathlib kernel RN
documentation. The textbook and tutorial provide independent full-text
treatments. The B page harvests the finite resampling, proposal-comparison,
and support-failure context from the same three full-text treatments; the
finite arithmetic is checked locally in its examples.

`coverage-checklist` found 23 harvested results across both pages and no
errors or warnings. `source-fetch-check` verified 7/7 coverage source entries
and resolved all 7 with zero drops. Each retrieval succeeded on its recorded
attempt; no recovery failure or source-resolution escalation applies.
Stratified/systematic schemes and particle-count CLTs are recorded as
out-of-scope under the controlling design. The items make no accuracy,
consistency, long-time stability, or normalized empirical-measure unbiasedness
claim.

## Scoped checks and evidence limits

- `precheck`: all 8 proof-bearing items pass; the 3 definition/algorithm items
  record `n/a`.
- Strict proof contracts: 11/11 items, 44 fact-source citations, 0 errors or
  warnings. `citation-fidelity`: 44 citations, no missing quotes or widening
  candidates.
- `proof-layout`: 11 items, 28 steps, 0 defects.
- `rendercheck`: all 11 items and both page files, 0 errors or warnings.
- Focused `depcheck`: 11 owned items plus closure (683 items, 179 pages),
  0 errors or warnings.
- `content-policy`: 11 items, 0 errors or warnings.
- `coverage-checklist`: 2 pages, 23 harvested results, 0 errors or warnings.
- `source-fetch-check`: 7/7 source entries fetch-verified and resolved.

All 11 Step 1 item records are now `ready` with `owner: false`; each records
its examined direct dependencies. Rechecking those records against the current
item bodies and dependency lists returns 11/11 closed. This is local authoring
readiness only, not independent mathematical approval.

The full run item-level check still reports 14 empty scaffold inventories on
other pages: `misspecified-posterior-consistency-examples`,
`parametric-bernstein-von-mises-and-misspecification`,
`parametric-bernstein-von-mises-and-misspecification-examples`,
`gaussian-process-posterior-contraction`,
`gaussian-process-posterior-contraction-examples`,
`mcmc-clt-and-monte-carlo-standard-error-examples`,
`mcmc-diagnostics-and-finite-run-limitations`,
`mcmc-diagnostics-and-finite-run-limitations-examples`,
`data-assimilation-variational-and-ensemble-methods`,
`data-assimilation-variational-and-ensemble-methods-examples`,
`abc-mcmc-and-sequential-abc`, `abc-mcmc-and-sequential-abc-examples`,
`identifiability-and-approximation-bias-in-computational-inference`, and
`identifiability-and-approximation-bias-in-computational-inference-examples`.
`identifiability-and-approximation-bias-in-computational-inference`, and
`identifiability-and-approximation-bias-in-computational-inference-examples`.
It also reports one unrelated level-label mismatch:
`ex-cylinder-gaussian-process-is-not-banach-valued` (declared 1, computed 2).
The current full check reports no batch-44 level mismatch.

`batch-dependency-levels check --run bayesian-computational-statistics-62`
reports the shared scheduling artifact stale after manifest edits. The dispatch
input hash is retained; this authoring pair did not rewrite the owner-managed
run scheduling artifact or `.autopilot` state. No run-completion or independent
acceptance claim is made here.
