# Batch 46 authoring notes — Particle smoothing, backward simulation, and RBPF

## Plan reconciliation

The dispatch labels this pair batch 46; the controlling track design labels it
BCS-43. The plan section and `plan-spec.json` agree on the A/B page identities,
titles, category, order 2132/2133, and page prerequisites. `plan-spec.json` had
no item inventory before authoring, so the BCS-43 design supplies the planned
core items. The manifest also adds the prerequisite lemmas, the conditional
linear-Gaussian model definition, and the worked examples needed to prove and
bound those claims. No shared plan or owner-managed schedule was changed.

The design’s supplier names are stale against the current run manifests. It
names `thm-bayesian-filtering-recursion`,
`def-feynman-kac-path-measure`, `alg-bootstrap-particle-filter`,
`alg-proposal-particle-filter`, and
`thm-particle-normalizer-estimator-is-unbiased`. The current batch-41/44
interfaces used here are respectively
`thm-dominated-state-space-filtering-recursion`,
`def-feynman-kac-path-targets-and-normalizers`,
`alg-sequential-importance-resampling` (with its explicit multinomial
resampling supplier), and `thm-sequential-particle-estimator-is-unbiased`.
The exact current supplier bodies and declared hypotheses are recorded in the
cross-batch dependency file. This resolves the authoring interface; the owner
should reconcile the stale IDs in the shared design.

## Inventory, dependencies, and levels

Levels were computed across the current run manifests. An item with no
in-run supplier is level zero; published or out-of-run suppliers do not raise
the in-run item level. All 14 item dependency lists match the manifest, with no
local cycle or level mismatch. The owned item graph reaches level 7 even though
the batch itself is scheduled at level 4.

| Item | Page | Level | Direct in-run suppliers |
| --- | --- | ---: | --- |
| `lem-nonlinear-path-extension-is-a-probability-kernel` | A | 0 | none |
| `def-conditionally-linear-gaussian-state-space-model` | A | 1 | `def-state-space-filtering-laws` |
| `lem-kalman-filter-is-exact-conditional-on-nonlinear-path` | A | 3 | CLG definition; FK path-target definition; Kalman algorithm, one-step conditioning lemma, and exactness theorem |
| `lem-smoothing-backward-kernel-bayes-factorization` | A | 3 | state-space filtering-law definition; filtering/smoothing existence theorem; dominated filtering-recursion theorem |
| `alg-particle-backward-simulator` | A | 4 | state-space filtering-law definition; backward-factorization lemma; FK path-target definition; SIR algorithm |
| `alg-rao-blackwellized-particle-filter` | A | 4 | CLG definition; path-extension lemma; conditional Kalman lemma; FK path-target definition; SIR and multinomial-resampling algorithms |
| `lem-bootstrap-particle-filter-weak-consistency` | A | 4 | FK path-target definition; SIR and multinomial-resampling algorithms; FK forward-recursion lemma |
| `alg-fixed-lag-particle-smoother` | A | 5 | state-space filtering-law definition; SIR algorithm; backward-simulator algorithm |
| `thm-particle-backward-simulator-normalization-and-cost` | A | 5 | backward-simulator algorithm |
| `thm-particle-smoothing-consistency-under-stated-conditions` | A | 5 | smoothing backward-factorization lemma; backward-simulator algorithm; bootstrap consistency lemma; dominated filtering-recursion theorem |
| `thm-fixed-lag-smoother-targets-truncated-conditional-law` | A | 6 | fixed-lag algorithm; smoothing backward-factorization lemma |
| `ex-switching-linear-gaussian-rbpf` | B | 5 | CLG definition; conditional Kalman lemma; RBPF algorithm |
| `ex-zero-backward-simulation-denominator` | B | 5 | state-space filtering-law definition; smoothing backward-factorization lemma; backward-simulator algorithm |
| `ex-fixed-lag-smoothing-bias-from-delayed-information` | B | 7 | state-space filtering-law definition; smoothing backward-factorization lemma; fixed-lag algorithm and target theorem |

The cross-batch file contains two required page edges and 23 item edges. Every
direct supplier from batches 41, 42, and 44 is placed on its current page and
has a body-and-hypothesis record. The A page was ordered by item level; B
examples follow their item levels.

## Supplier inspection and mathematical scope

The current batch-41 filtering-law and dominated-recursion statements/proofs
were inspected, including their regular-conditional-version and
finite-positive-evidence limits. The batch-42 Kalman algorithm, one-step
Gaussian conditioning lemma, and exactness theorem/proofs were inspected. The
batch-44 Feynman–Kac definition, forward-recursion lemma, SIR algorithm, and
multinomial-resampling definition were inspected. The exact batch-44
resample-propagate bootstrap order is followed. Särkkä and Doucet–Johansen
describe a generic propagate/weight/resample order in the harvested sections;
the local consistency proof explicitly follows the current batch-44
resample-propagate interface. These checks establish the current interfaces
and placements, not independent approval.

The CLG definition follows the library convention that observations begin at
time 1; the initial state is prior-only. Positive observation-noise covariance
makes each Kalman innovation positive definite even when state/process
covariances are singular. The Kalman lemma proves the conditional Gaussian
filter and the marginal likelihood along a fixed nonlinear path. The RBPF
uses that likelihood as its Feynman–Kac potential; its finite particle mixture
remains an approximation to the nonlinear filter.

The backward-simulation lemma proves the density Bayes factorization only on
finite-positive predictive support and retains the supplied-kernel branch
when transition densities are unavailable. The particle algorithm rejects
zero or infinite denominators; it has no uniform fallback. The cost theorem
counts terminal draws and initialization, giving `O(SN(T+1))` path cost and
`O(N+N^2T)` all-marginal cost, with the usual `O(SNT)` and `O(N^2T)` forms for
`T >= 1` under its stated linear-scan cost convention.

The bootstrap consistency lemma is fixed-horizon and assumes compact metric
spaces, Feller transitions, multinomial resampling, and continuous potentials
bounded above and away from zero. The backward-path consistency theorem adds
continuous transition densities uniformly bounded above and away from zero,
and `S_N -> infinity`. It proves convergence of the conditional path law and
of the empirical path average separately. It makes no time-uniform, CLT, or
fixed-lag bias-removal claim. The fixed-lag theorem identifies the truncated
conditional target; the finite-state example has total-variation bias 1/2.
The switching example checks the two posterior mode weights and conditional
variances. The zero-denominator example is explicitly an inadmissible cloud,
not a possible output of the exact filter.

## Source harvest and retrieval

The A-page coverage entry records 17 harvested results with dispositions.
Three active full texts were inspected: Särkkä, *Bayesian Filtering and
Smoothing*, Chapter 7 §§7.3–7.5 (PDF pp. 120–132) and Chapter 11 §§11.2–11.4
(pp. 167–173); Doucet–Johansen, *A Tutorial on Particle Filtering and
Smoothing: Fifteen Years Later*, §2.3.1 (PDF pp. 7–8), §§3.4–3.5 (pp. 13–16),
§5.1 (pp. 33–34), §5.2 (pp. 34–36), and the start of §5.3 (pp. 36–37);
and Lindsten et al., *Rao-Blackwellized Particle Smoothers for Conditionally
Linear Gaussian Models*, §§3.1–3.2 (PDF pp. 4–6). The coverage file records
the supported items and each result’s disposition.

The full Lindsten–Schön 143-page survey could not be retrieved. Its original
failure plus five recovery attempts and three searches are preserved under
`source_resolution`; exact wall-clock attempt times were not captured. It is
marked dropped with certainty because the active full texts were retrieved
and the local arguments supply the required results. The source is not cited
as read or used. `source-fetch-check --stamp` verified and stamped the three
active sources; the check reports 3/4 fetch stamps and one validated drop.

## Scoped checks and readiness

- Strict proof contracts: 10 proof-bearing items, 0 errors or warnings.
- No registered `finite_smoke` check applies to the particle-filter, Gaussian
  conditioning, or fixed-lag claims; the registry’s Gaussian check concerns
  polynomial derivatives. The three finite examples instead give their
  complete arithmetic in numbered verification steps, and no unrelated smoke
  check was attached.
- `precheck`: 10/10 proof-bearing items pass.
- `proof-layout`: 14 items, 33 steps, 0 defects.
- `rendercheck`: 16 owned item/page files, 0 errors or warnings.
- Focused `depcheck`: 14 owned items; prerequisite closure of 1,627 items
  and 288 pages; 0 errors or warnings.
- `content-policy`: 14 items, 0 errors or warnings.
- `coverage-checklist --require-destination`: 1 A page, 17 harvested results,
  0 errors or warnings.
- `source-fetch-check`: 3 active sources stamped and verified; 1 documented
  drop validated.
- Scoped dependency recomputation: all 14 manifest/frontmatter levels agree;
  no local cycle or cross-batch edge is missing.
- Step 1 readiness records: 14/14 owned items are `ready`, `owner: false`,
  and hash-current. These are authoring-readiness receipts, not independent
  mathematical approval.

The repository-wide `item-dependency-levels check` still reports the unrelated
`ex-cylinder-gaussian-process-is-not-banach-valued` mismatch (declared level 1,
computed level 2); it is outside this pair and was left unchanged. The
run-level `batch-dependency-levels check` reports the shared schedule stale.
The stored run artifact still says batch 46 is level 4 and requires 42 and 44,
but its input hash
`d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610`
differs from the dispatch-pinned input
`17c13c2fd465e3d10d52824fd8e855172f1554647f2f93bfe89f4af7fffb04c4`; the
owner-managed schedule was not rewritten.

The current stored autopilot snapshot (2026-10-15 06:24:31.961 UTC) shows the
run at `1-scaffold`, with Step 1 held by malformed YAML in the unrelated item
`ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy` (`title:` at line
3 has an unquoted colon); owner repair is requested. A fresh `autopilot status`
command timed out after 15 seconds without output, so that stored snapshot is
reported with its timestamp and is not represented as a fresh status. No
`.autopilot` state or published content was changed.
