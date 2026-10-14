# Batch 18 — authoring and evidence notes

Run: `mathematical-statistics-foundations-37`  
Role: beta; batch: 18  
Scheduling input: `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`

## Controlling plan and conflicts

The controlling MSF-22 row in `research/plan-mathematical-statistics-track.md:99`
and the two matching records in `research/plan-spec.json` agree on page IDs,
titles, companion pages, orders 1878–1879, and prerequisite pages. The plan-spec
item arrays are placeholders; the batch manifest supplies the authored item
inventory and direct item dependencies.

The older F04/Pair-7 scope includes Lasso comparison and slow/fast-rate material
that is absent from the controlling MSF-22 row. The current plan controls, so no
Lasso carrier or Lasso rate claim was added. The source-coverage ledger records
the related Lasso source material as out of scope.

## Inventory and levels

The batch-level schedule is level 4, with prerequisite batches 3, 6, 14, and 17.
Within this pair, the 16 assigned items have these recomputed dependency levels:

| Level | Items |
|---|---|
| 0 | `def-fixed-design-projection-estimator`; `lem-binomial-support-count-bound`; `lem-finite-dimensional-projection-is-linear-and-contractive` |
| 1 | `lem-finite-support-projection-selection-is-borel`; `lem-isotropic-gaussian-noise-is-subgaussian` |
| 2 | `alg-bic-penalized-least-squares`; `alg-constrained-l0-least-squares` |
| 4 | `thm-gaussian-projection-risk`; `thm-subgaussian-projection-risk` |
| 5 | `thm-bic-fitted-risk-bound`; `thm-sparse-subset-risk-upper-bound`; `cex-collinear-design-coefficient-risk-unidentifiable` |
| 6 | `thm-gaussian-sparse-sequence-minimax-lower-bound`; `ex-orthogonal-sequence-sparse-regression`; `ex-training-risk-versus-test-risk` |
| 7 | `cor-matching-minimax-rate` |

The A page contains 13 items and the B page 3, below the 100-item cap. The A/B
page item lists, batch manifest, item frontmatter dependencies and levels were
checked for consistency. The manifest contains the full direct `deps` list for
each item. In-run suppliers precede their consumers; no dependency cycle was
found in the assigned closure.

The local Gaussian minimax lower-bound theorem was added on the A page because
the matching-rate corollary needs a lower-bound carrier there; it avoids making
the A corollary depend on a B-only example. The Gaussian MGF lemma and the
finite-dimensional projection linearity and Borel-selection lemmas are local
prerequisites with explicit dependencies and complete proofs.

## Supplier and hypothesis audit

- The actual MSF-03 risk definition was read. It requires nonnegative loss,
  action measurability, and the sampling-law/action-kernel iterated integral.
  Vector fitted-value claims state their Euclidean loss explicitly. The scalar
  MSF-06 bias/MSE definition is used only by the one-point scalar training/test
  example; no scalar bias–variance statement is transferred to vector risk.
- The actual MSF-14 vector sub-Gaussian definition and finite maximum/net result
  were checked. The projection proof uses the all-directions centered MGF
  condition, not coordinate independence.
- The actual MSF-21 A Fano, sparse-packing, Gaussian-location KL, product-KL,
  Pinsker, and scalar Le Cam statements and relevant proofs were checked. The
  local sparse Gaussian lower bound states its independent-coordinate model and
  squared Euclidean loss, and covers every `1 <= s <= d/2`. Its `M=2` branch
  first maps a vector estimator to its first coordinate before applying the
  scalar Le Cam result. The minimax corollary is restricted to `n=d` and
  `X=sqrt(n) I_n`, where the sequence and fitted-value losses agree exactly.
- The Gaussian MGF helper declares AC and uses the in-run AC-to-countable-choice
  supplier for the nonnegative change-of-variables result. The zero-proxy
  branch is handled separately.
- BIC assumes a nonempty true support, handles selected support size zero in a
  separate tail branch, and makes no claim of a zero right-hand side at the
  empty truth. The binomial support-count proof treats `m=1` separately because
  the integral sum starts with no interval there.

One upstream defect was found while auditing (but was not used):
`ex-sparse-gaussian-sequence-fano-lower-bound` on the MSF-21 B page applies the
scalar `thm-two-point-le-cam-risk-bound` directly to a vector action in step
2.2. A coordinate projection is required first. This exact defect and the
non-use of that B item are recorded in
`mathematical-statistics-foundations-37-batch-18.cross-batch-dependencies.json`
for owner review. The actual MSF-21 A suppliers used by this batch are present
and body-checked; supplier drafts are not treated as independently accepted.

## Source coverage and retrieval history

Both pages have two independent full lecture-note sources. The principal source
is Rigollet–Hütter, *High-Dimensional Statistics: Lecture Notes*, full 168-page
PDF: <https://arxiv.org/pdf/2310.19244v1>. The second source is Arlot,
*Model/estimator selection*, full 210-page lecture-note PDF:
<https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf>.
The coverage ledger records exact locators, every harvested result, and each
included/inline/out-of-scope disposition. The lower-bound route uses the local
full-range packing result rather than extending Rigollet–Hütter Lemma 4.14,
whose stated range is only `k <= d/8`. Arlot’s Gaussian dimension-penalty
oracle result is out of scope because its assumptions and penalty do not prove
the assigned sub-Gaussian BIC theorem.

Exploratory retrieval of Massart material encountered a Springer endpoint that
returned HTML and a New Zealand mirror that returned 404. Searches found the
full Arlot lecture notes above, which were inspected and retrieved. The exact
failed URLs and search queries were not retained in the batch artifacts, so
they are not reconstructed here. The final selected sources succeeded; no
source was dropped or left unresolved, and no `source_resolution` drop or owner
escalation is claimed. The source fetch check reports 4/4 sources verified and
4/4 resolved (0 newly stamped on the final pass); the coverage checklist reports
27 harvested results, 0 errors, and 0 warnings.

## Final scoped checks and outstanding run-wide issues

- `precheck.mts`: 16 assigned items, 13 proof-bearing items checked, 0 failed;
  definitions and algorithms are not applicable.
- `proof-layout.mjs`: 16 items, 54 steps, 0 defects.
- Strict proof contracts: 16/16 checked, 0 errors, 0 warnings. Derivations,
  input tags, citation excerpts and citation-use steps match the final carriers.
  No separate finite-smoke obligation applies; the analytic arguments and the
  small B-page calculations are given in their numbered proofs.
- Scoped `depcheck`: 0 errors and 0 warnings. `content-policy`: 16 items,
  0 errors and 0 warnings. `rendercheck`: 18 files (16 items and 2 pages),
  0 errors and 0 warnings. Coverage: 2 pages, 27 harvests, 0 errors and
  0 warnings.
- The whole-run `item-dependency-levels.mjs check` exits nonzero on 18 unrelated
  items; none is assigned to batch 18. The reported IDs are
  `thm-z-estimator-consistency`, `def-dqm-submodel-through-a-law`,
  `thm-dqm-score-mean-zero`, `def-tangent-set`, `def-tangent-space`,
  `thm-tangent-space-is-closed-linear-subspace`, `def-nuisance-tangent-space`,
  `def-nuisance-tangent-orthogonal-complement`,
  `ex-bounded-scores-generate-unrestricted-tangent-space`,
  `ex-regular-bernoulli-submodel-dqm-score`,
  `ex-boundary-score-cone-and-linear-tangent-space`,
  `lem-adaptive-covariance-lepski-scale-reduction`,
  `lem-huber-covariance-ambient-action-tail-lower-bound`,
  `lem-matrix-variance-intrinsic-dimension-at-least-one`,
  `thm-heavy-tailed-covariance-bound`,
  `lem-huber-matrix-depth-estimator-operator-error`,
  `ex-block-sparse-huber-covariance-model`, and
  `ex-dense-huber-covariance-model`.

These are authoring/readiness records only. They do not constitute independent
mathematical approval or publication.
