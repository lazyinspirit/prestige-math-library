# Batch 29 authoring notes — Influence Functions and Efficient Scores

## Design control and conflicts

The owner authoring direction is binding; the controlling design is the MSF-28 row in `research/plan-mathematical-statistics-track.md`. Its page IDs, titles, orders 1900–1901, category, and required pages agree with the matching `plan-spec.json` entries. The empty `items` arrays in the plan spec are pre-authoring placeholders, not a competing inventory. No plan/design conflict was found.

The design calls for the inverse-efficient-information canonical-gradient identity but does not give it a separate item ID. I added `thm-efficient-score-canonical-gradient` as an A-page supplier because the identity is a theorem with extra score-space and nonsingularity hypotheses and needs a complete proof. The assigned examples remain on the B page. The pair uses eight items total, well below the 100-item page cap.

The earlier bibliography in MSF-05 labels van der Vaart's volume as Lecture Notes in Mathematics 1784. The author/institution PDF and publication metadata identify it as volume 1781; the batch-29 coverage record uses 1781. This bibliographic discrepancy does not change the mathematical design.

## Inventory, dependencies and levels

The manifest and carrier dependency levels agree with the current run graph. Items are authored in ascending level order:

| Level | Items |
|---:|---|
| 0 | `thm-influence-curve-representers` |
| 1 | `def-asymptotically-linear-estimator-and-influence-function` |
| 8 | `def-pathwise-differentiable-functional` |
| 9 | `def-efficient-score`, `ex-pathwise-derivative-not-continuous-in-tangent-norm`, `ex-mean-functional-and-sample-mean-influence-curve` |
| 10 | `thm-efficient-score-canonical-gradient` |
| 11 | `ex-efficient-score-nuisance-projection` |

The graph calculation reports zero batch-29 level mismatches and no cycles. The larger labels are inherited from current in-run MSF-27 dependencies: the tangent set is level 5, tangent space level 6, tangent-space closedness level 7, and nuisance tangent space level 8. The scheduled batch level remains 9, with prerequisite batches 7, 23 and 28 and input hash `f8632f33a1d98ac87b8bfd98ee4e2c8d345dd5950b1933aefef1d594fbab7cfe`.

The run-wide `item-dependency-levels.mjs check` still reports 18 label mismatches outside batch 29: one batch-20 M/Z-estimation item, ten MSF-27 items, and seven batch-34 robust-covariance items. The batch-29 labels match the recomputed graph; these other pairs' manifests and carriers were not edited.

## Supplier review and open interface

The current MSF-27 page and actual supplier bodies/proofs were inspected. Its DQM definition is one-sided (`0≤t<ε`), uses one common sigma-finite dominator and supplied density versions, and assumes only `s∈L²(P)`. It does not assume the score is mean-zero; `thm-dqm-score-mean-zero` proves centering and uniqueness from the normalized square-root expansion. The tangent set is the scores of designated paths, while the tangent space is the closed real linear span. The nuisance space is closed through the tangent-space result. `L²₀(P)` is a real Hilbert space under Countable Choice. Batch-29 statements preserve those conventions.

The current MSF-07 page and actual `def-score-and-fisher-information` body were inspected. It requires a common sigma-finite dominator, selected density representatives and parameter differentiability on positive support. That definition alone does not establish mean-zero or square-integrability, so batch 29 assumes `Sθ∈L²₀(P)^p` explicitly rather than importing the stronger score identity without its envelope hypotheses.

The MSF-16 batch manifest is now populated, and `items/def-qmd-path.md` plus the complete proof of `items/lem-qmd-score-centered-and-finite-information.md` were inspected. The QMD definition is an interior, two-sided vector expansion with a square-integrable score; it does not assume mean-zero. Its separate lemma proves centering and finite information. Restricting a QMD expansion to `h=tv` yields the one-sided scalar square-root expansion along that ray, with score `vᵀs` under the common dominator. However, the required page `library/mathematical-statistics/local-asymptotic-normality-contiguity-and-efficiency.md` is absent, so the full page-level context, placement and reconciliation cannot be checked. The exact unresolved page edge and affected claims are recorded in `batch-29.cross-batch-dependencies.json`. The authoring continued against the checked item interfaces; no absent page excerpt or acceptance is claimed.

The cross-batch file records 52 verified direct item edges and three page edges: MSF-27 and MSF-07 are body-verified, while the required MSF-16 page edge remains unresolved. Supplier-body verification is not independent approval.

The efficient-score canonical-gradient theorem assumes the designated score set is exactly `{aᵀSθ+t : a∈R^p, t∈Tη}`, every such allowed one-sided path has right derivative `a`, both tangent spaces are closed, and `Ieff` is nonsingular. It proves the canonical gradient and covariance identity only under these hypotheses. It does not imply estimator attainment or an LAN result.

## Axioms and examples

Full AC and Countable Choice are retained as separate branches. AC supplies selected density versions in the general dominated-path and score conventions. Countable Choice supplies the L² Hilbert, closed-subspace projection and Riesz representation results. The generic representer theorem uses Countable Choice only. The examples display their density versions and use explicit finite or tilt paths; their calculations do not invoke a hidden choice step. The finite nuisance example invokes the canonical-gradient theorem with its stated AC and Countable Choice assumptions.

The mean example assumes `X≥0` and `X∈L²(P)` and designates only the bounded centered one-sided tilts `dP_{t,s}=(1+ts)dP`. It proves the tangent closure, derivative and canonical gradient for that path class, then the exact sample-mean expansion. The noncontinuity example uses the same bounded-score path class with `P{X=k}=c k⁻³`; it verifies `E X<∞`, `E X²=∞`, and the unbounded derivative-norm ratio. The four-point example uses a common counting-measure dominator, strict parameter domain `2|θ|+|η|<1`, and explicitly designated straight paths.

## Sources and source history

The A page has two independent full-text treatments. The complete relevant Lectures 1–3 of van der Vaart's *Semiparametric Statistics* were inspected (printed pp. 6–37; relevant DQM and pathwise definitions, representer arguments, estimator asymptotic linearity and efficient-score projection locators are recorded in the coverage file). Kennedy's complete 8-page *Semiparametric theory* paper was inspected, including §§3–4. Their broader efficiency/attainment claims are not imported; local carriers supply the proofs used here. The B examples are locally derived and use no additional literature claims.

A direct browser open of the van der Vaart PDF timed out; alternative searches found the same author-hosted full-text source. The subsequent `source-fetch-check --stamp` succeeded for both PDFs on the first fetch attempt. Van der Vaart: 912,548 bytes, 120 pages, SHA-256 prefix `2b0ed40dd289a0cb`. Kennedy: 128,491 bytes, 8 pages, SHA-256 prefix `d01abeaeefd8510f`. The exact stamps, searches, locators, item support and harvest dispositions are in `batch-29.coverage.json`. The timeout and successful recovery are preserved there; no source was dropped or remains unresolved, so no `source_resolution` escalation was required.

## Scoped checks and readiness

- `item-dependency-levels.mjs`: all eight batch-29 levels match the computed graph; no batch-29 cycle. The run-wide check reports the 18 out-of-scope label mismatches above.
- Strict proof-contract check: 8/8 items, zero errors or warnings.
- `proof-layout.mjs`: all eight changed items, 23 numbered steps, zero defects.
- Precheck: five proof-bearing items checked, zero failures or repairs.
- Focused `depcheck`: eight items and two pages, zero errors or warnings; 1,002 dependency-closure items and 175 closure pages inspected.
- `content-policy`: eight scoped items, zero errors or warnings.
- `manifest-deps`: eight items, zero missing dependency arrays or errors.
- `rendercheck`: ten changed item/page files, zero errors or warnings.
- `source-fetch-check --stamp`: 2/2 sources fetch-verified; no new stamp was needed.

All eight Step-1 item records are escalated because the assigned A page still has the unresolved required MSF-16 page edge. The local proofs, placement and contracts are complete, but page-level prerequisite reconciliation is not. No item is marked ready on the strength of the absent page, and the escalations do not constitute independent approval.

## Owner E14 round-1 interface reconciliation

After the owner confirmed native batch29 success and writer drain, E14 read all eight current carriers, their original escalation reasons, the manifest/contracts and actual prerequisite interfaces. The current QMD definition is owned by batch22 on the likelihood page; the separate batch23 centering lemma explicitly carries AC. For fixed v, h=tv gives the one-sided scalar DQM path score v^T s with the same common dominator. This does not identify constrained boundary paths with two-sided interior models. The batch28 scalar normalization/uniqueness and tangent-space conventions agree with the pathwise definitions. Full AC remains the density-version branch and Countable Choice remains the Hilbert/projection/Riesz branch.

No mathematical source repair was found necessary. The canonical-gradient theorem explicitly assumes the exact designated score set, the derivative for every allowed path and nonsingular efficient information; its conclusion is a representer/covariance identity without an estimator-attainment claim. The estimator expansion and generic Hilbert representer theorem do not need an LAN consequence. All three examples use their explicit designated bounded-score or finite paths.

Both native batch23 A/B pages remain absent at this evidence write, although all seventeen batch23 manifest item paths exist. The required A-page integration is retained as a genuine outstanding native-authoring obligation; the eight original Step-1 records remain unchanged and are not ready on this evidence. The current body-level interfaces are compatible, while native page completion and ordinary independent review remain pending. The exact observations and downstream inventory appear in `mathematical-statistics-foundations-37-owner-pathwise-prerequisites-resolution.json`. No items, pages, manifests, proof contracts, hashes, readiness or native state were edited; no optional tests were run, and proof-layout is inapplicable because no item was edited.

## E14 native page completion — supersedes pending observation above

Native batch23 has now assembled both required LAN A/B page carriers. The owner reviewer read the complete page texts and compared placement with the current manifest: exactly fifteen A items and two B examples, with no missing, extra or duplicate IDs; all listed item bodies and all declared prerequisite page paths are present. The declared LAN prerequisite remains in the batch29 manifest. The page schema keeps item/example placement in its carriers and Requires edges in the manifests. The earlier physical-page-absence observations are historical.

E14 is resolved for the actual interfaces and native page integration already reviewed, without a second mathematical review cycle or any source change. The page explicitly preserves the separate stronger compact-uniform minimax hypothesis and unresolved broader pointwise-LAN design obligation; no batch29 claim uses that conclusion. This resolution grants no independent supplier acceptance. Root retains all readiness/hash/native reconciliation, and every ordinary independent review and gate remains required.
