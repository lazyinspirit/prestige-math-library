# Batch 53 block-bootstrap escalation intake and repair proposal

Run: `bayesian-computational-statistics-62`. Scope: the exact Step-1 escalations for `thm-moving-block-bootstrap-clt-for-dependent-data` and `thm-tapered-block-bootstrap-clt-for-dependent-data`. This is focused owner repair evidence, not acceptance, readiness, audit or recertification. No live item/page/manifest/contract has been edited during this intake.

## Authority and inspected carriers

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md. Read the two escalated items and their genuine Step-1 JSON decisions, batch-53 notes, current page manifest, cross-batch supplier evidence, the controlling BCS-50 design paragraph in `research/plan-bayesian-computational-statistics-track.md`, current A/B pages, actual MBB/TBB algorithms, exact conditional covariance suppliers, the taper normalization supplier, the L2-m-approximable definition and published Hilbert sample-sum CLT including its full proof. The canonical plan retains centered Hilbert causal shifts, summable replacement errors and the stronger m delta_m -> 0 condition, b -> infinity, b/sqrt(n) -> 0, the precise normalized unimodal taper, conditional weak convergence and Hilbert-Schmidt covariance convergence. Arbitrary n is an actual algorithm interface, not a divisible-sample assumption.

Independently retrieved the full primary arXiv 1711.01070 PDF (29 pages) and HKR arXiv 1105.0019 PDF (32 pages) and extracted their texts with PyMuPDF. Read the primary appendix Lemma 5.1 and Theorem 2.1 proof, especially equations (27)-(34) and tightness conditions (a)-(e), and HKR's Theorem 2.2 covariance proof beginning on PDF page 24. Primary Theorem 2.1 equation (29) delegates Hilbert-Schmidt covariance consistency to HKR. The source Lindeberg paragraph requires genuine uniform integrability for a changing block variable; quoting dominated convergence without its dominating argument is insufficient locally. The supplement URL returned HTTP 403 to this reader. The author's batch notes report a separate successful browser retrieval and accurately identify its omitted-by-analogy covariance argument; this intake does not claim personally to have read that recovered supplement.

## Confirmed defects and smallest proof obligations

Both carriers honestly stop after the sampling-law limit and exact finite conditional covariance identity, without QED. Neither establishes the two advertised limits. The missing proof obligations are:

1. Empirical centered overlapping weighted-block covariance consistency under second moments only. This must apply to all-ones weights and the actual normalized taper, with the sample-start range N=n-b+1.
2. Uniform integrability of squared normalized weighted block sums; this supplies conditional Lindeberg as n/b -> infinity.
3. Conditional Hilbert projection-tail control, not merely scalar finite-dimensional normality.
4. The last partial block: centered conditional second moment divided by n must vanish for every remainder 0 <= r < b, including taper prefix weights from a full length-b taper.

The smallest coherent local repair is two shared lemmas, rather than duplicating four method-specific results:

- `lem-weighted-overlapping-block-moment-and-covariance-limits`: bounded deterministic weights c_(b,l), squared normalization b^-1 sum c^2 = 1 and fixed-lag autocorrelation b^-1 sum c_l c_(l+h) -> 1; prove uniform integrability and empirical centered block covariance convergence in trace norm (hence HS), and the uniform O(q) variance bound for any prefix q <= b. The actual taper has bounded scale and bounded discrete total variation, which verifies the autocorrelation premise without a continuity assumption.
- `lem-conditional-independent-block-bootstrap-clt`: use the first lemma for uniform-block-start conditional randomization, k=floor(n/b), independent final remainder and b/n -> 0. Prove conditional Lindeberg, characteristic-function convergence of every finite-rank projection, projection-tail control from trace-norm covariance convergence, and arbitrary-n remainder negligibility. State explicitly that subtracting any common sample center before weighting cancels exactly after conditional block centering.

The first lemma's proof route is fixed-m replacement, fixed-m bounded truncation, finite-dependent fourth-moment bounds, overlapping-window variance counting, then approximation in mean trace norm. The published CLT proof already derives the needed replacement error bound delta_m^2 + 2 delta_m sum_h delta_h + 2 sigma (m-1) delta_m; multiplying deterministic weights bounded by C only costs C^2 in its covariance expansion. It tends to zero under the preserved stronger hypothesis. This avoids any fourth-moment assumption on the original data.

The second lemma can prove its triangular conditional CLT locally: Taylor-expand the conditional scalar characteristic function, control the remainder with Lindeberg and the conditional variance, then apply existing local characteristic-function/Cramer-Wold suppliers. Trace-norm covariance consistency gives the finite-projection tail estimate directly. The final remainder has unconditional expected conditional variance O(b/n), so Markov proves both conditional covariance and distribution negligibility.

## Actual consumers and ownership

A full current `items/` and `library/` text search for both exact theorem IDs finds no logical item consumers. The A page places and discusses both items. `thm-k-sample-block-bootstrap-validity` is an actual application context in its Remarks, although it neither lists nor links their IDs: its Statement explicitly assumes joint sampling and bootstrap limits, and its proof uses those assumptions rather than either missing theorem. It therefore remains logically valid while the individual-series applications are blocked. After repair its Remarks and the A-page summary must accurately describe completion. The B page's four finite examples/counterexample do not use either asymptotic theorem, so their claims need no repair. No current batch manifest outside53 lists either ID as a dependency.

If a Statement is restored from the author's temporary 'planned conclusion/escalated' wording to its approved theorem form, this same focused owner remains responsible for all of the above actual consumer checks. No published prerequisite Statement/Definition change is proposed. All new items remain draft. Root owns manifest/contract integration, hashes, readiness decisions, recertification and engine transitions. Source edits wait for root's exact-writer-drain confirmation.

## Completed focused source repair after writer drain

Root subsequently authenticated native batch53 author attempt2 as successfully drained (endedAt 2026-10-15T05:15:39.685Z) and explicitly authorized these source repairs. Exact pre-edit bytes of both theorem carriers, the K-sample contextual consumer, both pages, and live manifest/contract context were archived under `research/bayesian-computational-statistics-62-owner-block-bootstrap-before/` before any source edit. Native reports and Step-1 decisions were not overwritten.

Authored the two shared draft lemma sources proposed above. The first derives all weighted covariance and difference bounds locally; its final source uses the actual replacement Definition, not a proof-only imported interface. The second derives conditional characteristic-function convergence locally, including zero and singular covariance, then proves the Hilbert weak limit on almost-sure extracted subsequences by projection tails and uniformly continuous tests. It constructs deterministic compact sets from the uniform projected prefix bounds to prove conditional tightness in probability. Nuclear-series and finite-Bessel estimates are included explicitly to justify both trace compression continuity and trace-to-Hilbert-Schmidt domination; these are not attributed to a supplier whose Statement only promises the operator ideal inequality.

Restored both escalated theorem Statements from temporary 'planned conclusion/escalated' language to their approved assertions. The substantive hypotheses, centered-process scope, m delta_m rate, b/sqrt(n) regime, normalized midpoint taper, law target, covariance target and arbitrary-n procedure are unchanged. Each proof checks the shared weight interface and exactly identifies the actual full-plus-prefix resampling variable. TBB sample centering cancels identically after conditional block centering, for each prefix as well as each full block.

The actual replacement arrays were checked against the complete Definition: for h>=1 the retained original inputs of X_(h,h) are indices 1 through h, while D_(0,m) uses original indices at most0; their replacement arrays have distinct time indices and are mutually independent and independent of all original inputs. For h>=m the retained original inputs of X_(h,m) likewise begin at h-m+1>=1. The h<m case uses only Cauchy-Schwarz. Joint stationarity of the difference process, needed for negative lags, is explicitly in that Definition. No monotonicity of replacement errors or original fourth moment has been added.

Consumer dispositions after complete actual-source inspection:

| Carrier | Actual use | Disposition |
|---|---|---|
| A page `block-bootstrap-for-dependent-data` | Places both theorem carriers and previously described their escalation | Summary updated to completed local proof route; root adds the two prerequisite placements and manifest mirrors |
| `thm-k-sample-block-bootstrap-validity` | Contextual method applications in Remarks; Statement and proof assume joint limits explicitly | Statement, hypotheses, proof and deps unchanged; replaced stale 'still have to be proved' sentence with links to the completed single-series suppliers and preserved the need to check the joint hypotheses |
| `ex-moving-block-bootstrap-small-sample` | Finite b=2 algorithm calculation only | Full item read; arithmetic 1 and2 position means yields3/2, independent of either repaired theorem; unchanged |
| `ex-tapered-block-bootstrap-triangular-window` | Finite midpoint taper calculation and existing normalization lemma | Full item read; weights (1/3,1,1/3), squared norm11/9 and scaled squared sum3 remain correct; unchanged |
| `ex-block-length-n-one-third` | Arithmetic check of the same preserved growth regime | Full item read; ceiling bounds and n^-1/6+n^-1/2 limit remain correct; unchanged |
| `cex-pointwise-bootstrap-ar1-variance-mismatch` | b=1 algorithm counterexample, not the asymptotic block CLTs | Full item read; stationary AR coefficient1/2, marginal variance4 sigma²/3, sampling variance4 sigma² and empirical pointwise variance limit remain compatible; unchanged |
| B page | Places only the preceding finite examples/counterexample | Summary remains accurate; unchanged |

No direct or indirect logical item consumer of either original theorem was found in actual current sources or batch manifests. The new supplier chain is first weighted lemma -> conditional lemma -> both restored theorems, and this same focused owner checked all those interfaces. No published supplier or outside-batch source was edited.

The complete proposed contract OBJECTS (all actual numbered proof steps, exact supplier Statement/Definition quotes, explicit inputs and boundary worksheets) are in `research/bayesian-computational-statistics-62-owner-block-bootstrap-contract-proposal.json`. Proposed exact-source manifest content/dependencies are in `research/bayesian-computational-statistics-62-owner-block-bootstrap-manifest-proposal.json`. They are proposals for root's mechanical integration, not live batch metadata or mathematical acceptance stamps. Root retains ownership of levels, hashes, manifests/contracts, readiness and native transitions.

Final required formatting command after all source edits:

`node tools/proof-layout.mjs items/lem-weighted-overlapping-block-moment-and-covariance-limits.md items/lem-conditional-independent-block-bootstrap-clt.md items/thm-moving-block-bootstrap-clt-for-dependent-data.md items/thm-tapered-block-bootstrap-clt-for-dependent-data.md items/thm-k-sample-block-bootstrap-validity.md`

Actual result: exit0, `proof-layout: 5 items, 25 steps, 0 defects`. No optional tests or gates were run. This formatting result is not a proof audit. Root performed one focused outside reading of the complete repair and reported no mathematical defect in the approximation/UI, covariance, conditional-law or partial-block arguments, then requested the actual-array and operator-interface checks documented above. No unresolved mathematical gap is identified by this repair owner. Root's current-source integration and native gates remain outstanding.
