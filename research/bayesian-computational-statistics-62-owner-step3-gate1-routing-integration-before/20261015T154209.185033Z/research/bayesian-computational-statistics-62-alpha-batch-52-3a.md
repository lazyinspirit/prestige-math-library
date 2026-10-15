# Batch 52 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-52`.

Scope: three touched decisions, refuter:52:1 and reader:52:1; no page obligations. Initial risk-report passed and routed ten HIGH/CRITICAL carriers. Engine owns hashes, gates and stage transitions.

## Completed item reviews

### lem-bernoulli-root-laws-are-uniformly-weak-close

Read both proof steps and all four current cited interfaces. The finite monotone pair coupling has difference variance r(1-r), so Chebyshev at r^(1/3) proves both closed-enlargement inequalities for the declared Prokhorov convention. Checked p=q, r=1, p/q endpoints, parameter reversal and all n>=1; construction uses only finite products and no choice. No reader/refuter finding concerns this lemma; no defect found.

### lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform

Read both proof steps and the current CDF, measure-continuity and real Heine-Cantor suppliers. Rational right limits give measurable supremum; a finite deterministic grid and union bound convert pointwise convergence in probability to uniform convergence, with both tails bounded by 2 eta and interior by 3 eta. Compact interval and continuous F meet Heine-Cantor hypotheses; no uniform-in-x probability exchange or independence assumed. No routed reader/refuter defect; no defect found.

### lem-uniform-cdf-order-and-quantile-coverage

Read all five steps and current CDF/measure-continuity suppliers. Quantiles are finite and attained for 0<u<1; verified direction of both CDF orders, strict lower-tail bound at atoms, extended endpoint quantiles and trivial nonpositive bounds. In part 3 nontrivial bounds keep shifted levels in (0,1); measurable quantiles/suprema and deterministic tail inclusions justify union bound without independence of X and random CDF. No reader/refuter finding; no defect found.

Level 0 complete; no unresolved issue.


### thm-m-out-of-n-resampling-valid-for-uniform-endpoint

Read all seven proof steps, closing witness, current resampling/IID/CDF/Bernoulli/moment/Chebyshev/logarithm interfaces and reviewed continuous-CDF supplier. For fixed negative x, mD_n -> 0, binomial tail-count variance -> 0 and sandwich give mK/n -> -x. Checked subsampling product on n-K>=m, maximum summand -> 0, summed log remainder -> 0 using m/n -> 0; x=0 and x>0 exactly 1. Uniform convergence uses continuous limit, not uniformity over models. Constant-statistic witness recalculated: roots 1 versus 1-m/n and singleton interval m/n^2. Repaired two stale self-references in the closing prose (bcs62-b52-3a-endpoint-remark); mathematical claim and all steps unchanged. No routed finding for this item.

### thm-ordinary-bootstrap-fails-for-uniform-endpoint

Read all three steps and current resampling, IID, CDF, weak-convergence and log-integral interfaces. Continuous uniform observations have unique maximum a.s.; bootstrap atom 1-(1-1/n)^n yields a deterministic lower test-integral bound. Sampling test integral is at most 1-(1-1/(2n))^n. Positive limit gap e^(-1/2)-e^(-1) proves failure in probability for the explicitly bounded continuous h. Checked n=1, support endpoints and distinction between atom and weak inconsistency; no defect found.

### thm-uniform-subsampling-coverage-under-root-law-control

Read all six proof steps and every cited supplier. Uniform limsup comparisons plus feasible-CDF control yield uniform exceptional-event bounds; quantile lemma applies with error 2 eta and no root/CDF independence. Checked each one-sided direction and reversal from root to target interval, zero tail levels, measurable sections, and arbitrary nonempty class. Reader parity witness gives opposite CDF order on infinitely many blocks for each sign. Constant statistic gives actual roots 1, feasible root 1-m/n, sup error 1 and zero coverage at both 1/4 levels. Reader witness enrichment retained; no confirmed mathematical defect, statement narrowing or unmet prerequisite.

Touched coverage carrier: reviewed_no_defect, change_kind audit_enrichment; additional sound witnesses substantiate the existing caveats. Level 1 complete.


### ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy

Read all three steps and actual endpoint suppliers including Proof 1.2, Proof 1.1 and the resampling theorem Statement. Reader locators accurately bind the atom and continuous sampling limit. Confirmed refuter:52:1 nonfatal: old F2 only established actual-root convergence and F3 defined roots. Added F4 citing the supplier Statement to license uniform conditional CDF convergence in probability in step 2.1; amended reader repair. Verified m-scale, replacement distinction and model-specific conclusion; defect bcs62-b52-3a-endpoint-cdf-citation completely repaired.

### ex-weak-metric-does-not-guarantee-uniform-bootstrap-coverage

Read all five steps and all nineteen cited interfaces, including separability, countable dense rationals and AC in Prokhorov metrization. Conditional Bernoulli mean-root identification plus coupling gives pi <= |mean-p|^(1/3); uniform Chebyshev bound 1/(4 n epsilon^6) includes p=0,1. For n>lambda, p_n=1-lambda/n lies in model; all-ones event has probability -> exp(-lambda), bootstrap quantile is 0, and interval {1} misses p_n. Checked measurable finite data, strict alpha<exp(-lambda), root-to-interval sign, uniform inf versus moving sequence, and choice-free coupling/coverage versus AC-only metrization. Reader separability enrichment accepted as audit_enrichment; no defect.

Level 2 complete.

### Read-only producer: thm-conditional-iid-bootstrap-clt-for-empirical-law

Independently reviewed all eight current proof steps, all twenty prerequisite statements/definitions, its batch-51 contract (citations, derivations and boundaries), and its actual manifest row. Finite second moments and dominated convergence make empirical centered tails vanish in probability. The least-index recursion selects simultaneously the empirical variance and finitely many rational cutoffs; summable union bounds and monotonicity give the required pathwise Lindeberg condition at every positive threshold. Positive limiting projected variance licenses normalization after finitely many rows; conditional rows are finite independent empirical draws. The normal limit and continuity give uniform CDF control by finite grid and tails. Measurability of D_n and the subsequence contradiction finish convergence in probability. Deterministic scaling in step 5.1 is valid also when row spaces vary, by scaling their distribution functions. AC is explicit through the normal and Lindeberg–Feller suppliers. No current mathematical defect or unmet prerequisite was found.

`reader:52:1`: confirmed_nonfatal, closed historical citation defect `bcs62-b51-conditional-clt-internal-reference`. The reported nonexistent steps 2.3–2.4 were a real inaccurate prose locator; existing bracket tags identified the intended argument. Current 6.1 correctly cites 2.2 and 3.1–5.1, and its contract matches. This is not a false positive and no producer edit was made here. `observation_basis: unbound`, `historical_delta_unknown: true`: this dispatch explicitly authorizes adjudication of the historical finding after independent current proof review. Durable evidence is the reader report/findings, scope routing and current producer/contract/manifest; the originally observed bytes were never hashed, so their exact historical delta cannot be certified. Preserve the immutable routing and pre-reader fingerprints in the decision. No prior escalation is cleared by this disposition.

Read-only producer review complete.


### thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals

Read all three steps and thirteen current prerequisite interfaces, including independent full review of the batch-51 conditional CLT. AC, IID normal finite second moment and positive projected variance meet CLT hypotheses. Exact normal sample mean gives |Z| and Z^2 true laws; both have zero mass and continuous CDF at zero. Verified for z>=0 and z<0 that both bootstrap nonpositivity events equal a closed W interval, including z=0; uniform CDF control also controls left limits. Phi(2|Z_n|)-1/2 is bounded below on |Z_n|>=1. A single bounded continuous h_d separates both integrals with positive limiting probability; no independence of Delta_n and Z_n is assumed. Correct sqrt(n) versus n normalizations and second-order delta hypotheses checked. Historical supplier citation is resolved separately with byte uncertainty, not treated as a current defect.

### ex-nonsmooth-boundary-bootstrap-failure

Read both verification steps and all three current suppliers. Under the explicit Given AC and IID N(0,1) model, targets are zero, absolute value is nondifferentiable and square has vanishing first derivative. Exact roots match supplier and use sqrt(n) and n scales with observed-statistic centering; supplier proves conditional CDF failure at a continuous zero-mass point and failure of bounded continuous tests. No claim of uniform validity or extension to arbitrary nonsmooth functions is imported; no reader/refuter finding and no defect found.

All ten risk reviews completed in dependency order.

## Repairs and records

Exactly five routed decisions are in the accompanying decisions JSON: endpoint example `amended_repair`; refuter `confirmed_nonfatal`; coverage theorem and weak-metric example `reviewed_no_defect` / `audit_enrichment`; historical producer reader finding `confirmed_nonfatal`. No page decision is owed. The risk-only remark repair needs separate owner/engine routing as described below. Both completed local repairs have confidence 1.

Two new closed nonfatal ledger rows were appended with caught_at_stage `3a-adjudicate`: `bcs62-b52-3a-endpoint-cdf-citation` (shared by touched endpoint example and refuter finding) and `bcs62-b52-3a-endpoint-remark` (the stale references in the risk-only endpoint theorem's closing example). The latter is recorded in this report and that theorem's risk review; it does not create an unowed routed decision. The historical CLT defect reuses producer batch 51's existing closed row `bcs62-b51-conditional-clt-internal-reference`, with explicit same-defect linkage to its touched obligation; no duplicate historical row was created. Batch 51's report reconstructs its pre-reader raw hash, but batch 52's original observed-byte binding remains unbound and is preserved as such. No escalation was cleared or invented.

Only `items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md` and `items/thm-m-out-of-n-resampling-valid-for-uniform-endpoint.md` were edited locally. Neither Statement/Definition, item dependency inventory, title nor provenance class changed. The weak-metric manifest was synchronized with the reader-added three separability dependencies, which were missing from its mirror; all other manifest interfaces are unchanged. No judge record was present in either item, and no material rewrite was performed. Batch-52 contracts gained the ten specific risk reviews, the new F4 citation/derivation, exact separability source quotations, missing F1 use at coverage 1.2, and current boundary locators. The contract tool only admits claim sections: F1/F2 retain the exact inspected proof excerpt and locator in `proof_quote` / `source_locator`, while `quote` / `source_section` bind the corresponding supplier Statement. This normalization does not pretend those Statement sections contain the proof-only atom computation.

The other two touched item files remain exactly reader-post: coverage `9b80e0107080c8ea01e95b5f4f7abc2dcfff2bde8a70ed59db7213084d357af5`; weak-metric example `0d0891e5b7a5adc4ae269f2ac8b53afd0e687ef5b0262441e74d0ebf5f0363cc`. Pre/post item, contract and manifest fingerprints were read; every touched item decision records the corresponding pre/post source hashes and review basis. Current decision hashes are for the engine to stamp.

## Sources and prerequisite limits

All current item proof steps, the cited dependency Statements/Definitions and the routed producer proof/contract/manifest were reviewed. Existing source statements were checked for exact premises and conclusions; this is not a transitive audit of every published prerequisite proof. The three level-0 supplier proofs, both endpoint theorems, coverage theorem, Bernoulli counterexample and nonsmooth theorem have explicit derivations reviewed above. No substantive mathematical uncertainty remains.

External primary source passages accessed:

- [Romano–Shaikh](https://home.uchicago.edu/amshaikh/webfiles/uniformity.pdf): §2.1 Theorem 2.1, PDF p5 (lines 184–203), and Theorem 2.2, PDF p6 (264–283); Appendix A.1 Lemma A.1 and proof, PDF pp20–21 (1318–1399). Checked CDF order directions, feasible approximation and random-quantile tail inclusions. The local theorem assumes its feasible-to-actual-root approximation explicitly; it does not silently import the infeasible-subsampling conclusion.
- [Bickel–Götze–van Zwet](https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf): §2.3 endpoint Example 3, PDF pp4–5, especially the conditional random limit at lines 153–182. Endpoint and nonsmooth claims here are proved by their own local elementary computations; no unproved expansion or extrapolation result is imported.
- [Washington STAT 581 Chapter 8](https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf): §4 Theorem 4.1 and full proof, PDF p14, lines 978–1084. Finite second moment and conditional Lindeberg match the local positive-variance projection. The local producer uses a subsequence argument for convergence in probability. PDF screenshot fetches returned cache misses; readable text, not failed screenshots, supplied this source evidence.

No defective published supplier was found in the reviewed applications; no published content or published-consumer ledger was edited. Existing cross-batch dependency rows for the conditional CLT remain valid, and the frontier dependency ledger records the current owned-consumer review. All stable IDs and proposed withdrawals remain present.

## Local checks and handoff

- Initial risk report: 11 items, ten HIGH/CRITICAL, zero tool errors. Final `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-52.proof-contracts.json --require-reviewed`: zero errors, all required reviews complete.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-52.proof-contracts.json --strict`: 11/11 items, zero errors or warnings. Initial runs found six bookkeeping errors; four were corrected first, then two unsupported proof-section names were normalized while preserving their proof evidence. These mechanical failures generated no defect rows.
- Reflow on the two locally changed item paths: both unchanged. Precheck with `--json`: two proofs passed, zero failures. Rendercheck with `--json`: two items checked, zero errors or warnings.
- Final single batched proof-layout command on both locally changed item paths: two items, ten steps, zero defects. No subsequent item edit or formatter was run.

No judge cycle, stamps, gate battery, agent dispatch or stage transition was initiated. No unresolved mathematical blocker or outside-batch consumer repair remains. One administrative owner/engine routing action is required: the newly repaired risk-only endpoint-theorem remark has a closed ledger row but no original touched/reader/refuter obligation. The engine scope validator requires a decision reference for every owned Step-3 defect row. Preserve the exact five dispatched decisions and route this additional repaired defect for its own decision; this worker has not changed the immutable scope or added an unowed decision. The original historical observation limitation remains explicit in the reader decision.

Ledger validation: `node tools/defect-ledger.mjs validate --run bayesian-computational-statistics-62` checked 135 current run rows with zero schema errors. Exact decision inventory: five of five dispatched obligations. Manifest inspection found and synchronized the weak-metric reader-added separability dependency mirror; all eleven current dependency sets now match their owning manifest rows.
