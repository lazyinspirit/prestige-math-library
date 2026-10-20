# Batch 47 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-47`. All nine routed obligations have local decisions. All fourteen HIGH/CRITICAL risk reviews are complete. Owner bookkeeping reconciliation remains open as detailed below; no workflow acceptance is claimed.

## Dependency levels 0–1

### `lem-bounded-complex-iid-matrix-norm-bound`

Checked steps 1.1–3.1: complex spheres have real dimension 2d, packing gives 17^(2(n+N)); the real/imaginary exponential bound gives 4 exp(-t²/(4K²)), and L makes the union bound summable. K=0 is handled. Common probability space now licenses Borel–Cantelli; no cross-n independence is required. Checked iid, Markov, Borel–Cantelli and operator-norm supplier statements.

### `lem-bounded-complex-resolvent-quadratic-form-concentration`

Checked steps 1.1–5.1: no singleton survives the eighth-moment expansion; leave-one-column independence bounds each fourth moment by C/N^4. PSD diagonalization gives |1+s*Rs| >= eta/|z|. Product-law/Fubini averages form martingale differences; fourth-moment recurrence closes with C k²/N^4 and summable C/N² tails. Common-space hypothesis is explicit. No circular use of the deterministic equivalent; checked exact rank-one, spectral, product-law, Fubini, Markov and Borel–Cantelli suppliers.

### `lem-hermitian-resolvent-trace-concentration`

Checked all four steps: replacement uses two positive rank-one updates, giving coordinate width 2/(n eta); conditional Hoeffding with interval width yields real tails exp(-2t²/(N c_n²)), and complex union bound yields exactly 4 exp(-t² n² eta²/(4N)). Resolvents are bounded regardless of column moments. Common-space and countable t=1/m intersection justify almost-sure convergence.

### `lem-hermitian-spectral-measure-is-probability`

Checked both steps against the spectral-measure definition, spectral theorem and Dirac/probability definitions: PSD ensures nonnegative eigenvalues, trace ranks sum to d, orthogonal directional weights sum to unit norm squared. Repeated eigenvalues use projections, so basis choices do not affect the law; the definition requires positive dimension. No limiting or choice step is used.

The three touched concentration/norm carriers retain their authenticated reader-post raw hashes. Their authenticated preimages are available in `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/`. Reader hypothesis repairs are accepted subject to the exact pre/post comparisons recorded below. No item has been edited by this adjudicator.

## Level 2

`lem-bounded-complex-resolvent-deterministic-equivalent`: Checked steps 1.1–5.1, including Schur complement beta=-z Rtilde_jj, the signs and 1/N factors in the resolvent identity, rank-one coefficient Frobenius norm O(1/N), and the N-prefactor producing O(N^-1/2). Polarization works for non-Hermitian resolvents; integrate the uniform fourth-tail at N^-1/2 to obtain O(1/N) second moment. Nonnegative spectral weights give every denominator bound eta/|z|. Finite-n tail usage does not require a cross-n coupling. Its source bytes are identical in pre/post snapshots; routed change is citation audit enrichment only.

The batch-46 MP producer was independently read in full: its row leave-one-out identity, quadratic-form error O(n^-1/2), cone-stable denominators, expectation concentration, unique-root sign selection, trace tightness and countable probability-one intersection are sound in current bytes. Its Statement explicitly supplies a common probability space. The common-space omission described by reader:47:1 is a fatal well-formedness defect historically, now repaired; the dispatch explicitly authorizes disposition despite the unbound original observation. Producer source, contract citation records and manifest were read; immutable routing/pre-reader fingerprints are retained in the decisions record. No producer was edited.

## `thm-general-population-sample-covariance-esd-limit-for-bounded-entries`

Checked all six steps: measurable expected ESDs are probabilities by monotone convergence, bounded first moments give tightness for both dimension normalizations, and the companion first moment bounds its limiting imaginary part strictly away from zero. Deterministic-equivalent trace averaging is uniform; compact population support passes the fixed-point integrals. Fixed-point uniqueness and inversion identify all subsequences. Norm bound supplies pathwise tightness, concentration uses the common-space hypothesis, and AC is explicitly used only for Prokhorov extraction. Zero T and c=1 cause no denominator failure. Reader common-space repair accepted; current raw source equals the post-reader snapshot.

## `thm-directional-sample-covariance-resolvent-limit-for-bounded-entries`

Checked steps 1.1–4.1: dominated convergence bounds expected traces by 1/eta; exact companion relation yields u in C+. The uniform inverse bound passes to its limit and permits the resolvent comparison. w=-1/u is in C+ and the factor u^-1 is correct. The directional population hypothesis is used at fixed deterministic w, with no random-direction or uniform-direction assertion. Dense-set intersection plus compact support and AC extraction gives weak convergence. Common probability space supplies the required shared events. Reader common-space repair accepted; current raw source equals the post-reader snapshot.

## `lem-complex-sample-covariance-norm-bound-from-real-edge`

Checked both steps and actual real upper-edge supplier: N/n=kappa gives (1+sqrt(kappa))/sqrt(kappa)=1+sqrt(c); real and imaginary parts each form nested iid arrays, without requiring independence between the two parts. Zero part variances imply countably many zero entries almost surely. Triangle inequality and Cauchy–Schwarz give sqrt(2) tau, with unit-variance constant only when tau=1.

## `thm-directional-sample-covariance-resolvent-limit`

Independently checked all four current steps and bounded-entry/norm prerequisites: fixed-K centered residual has finite fourth moment and variance tau_K² tending to zero; sigma_K is positive eventually. Current F2 explicitly supplies sqrt(2) tau scaling, including tau=0; the three applications and UU*-VV* comparison preserve constants. Countably many K and dense z permit shared probability-one events. Resolvent norm error tends to zero before compact-support tightness, AC extraction and transform uniqueness. The original unscaled F2 was false and did not justify residual scaling; owner repair is complete, Statement unchanged. Historical refuter observation remains unbound.

## `cor-isotropic-minimum-norm-risk-closure-under-edge-gap`

Checked all three steps: test covariance reduces conditional prediction loss to coefficient MSE; SVD yields exact bias projector plus sigma²/n trace S+. The edge supplier has eventual full rectangular rank, not merely a limit of the smallest positive eigenvalue. Positive gap permits bounded continuous reciprocal cutoffs, with a separate zero-atom cutoff for bias. MP negative-axis equation gives J=1/(1-gamma) below one and J+=1/[gamma(gamma-1)] above one; multiplying p/n gives both stated variances. The transpose nested design in the directional law has population I and aspect gamma; its proof applies with dimension p_n proportional to n. beta direction is deterministic. gamma=1 is excluded, r>0 licenses normalization, sigma=0 is allowed. Reader producer now explicitly supplies a common probability space. No carrier decision owed (untouched and unflagged).

## `cor-negative-axis-directional-resolvent-integrals`

Checked both steps: for each fixed s>0, f(t)=1/(t+s) is bounded continuous on the half-line by 1/s. The directional weak convergence event gives the conclusion directly, including a zero atom. There is no unproved interchange of n and s limits and no claim about reciprocal moments at s=0. No carrier decision owed (untouched and unflagged).

## `ex-anisotropic-sample-covariance-directional-condition`

Checked both verification steps: ceil(n/2) and floor(n/2) sum to n, both proportions tend to 1/2, T has norm at most 2, and the all-ones direction has norm one. Its diagonal resolvent average exactly equals the population empirical transform for every off-support w and converges to the balanced two-atom transform. Nested iid, fourth moment and aspect hypotheses match the directional supplier. No carrier decision owed (untouched and unflagged).

## `ex-isotropic-sample-covariance-directional-marchenko-pastur-limit`

Checked both steps: population I has empirical/directional law delta_1 in every deterministic unit direction. The MP transform is the same deformed equation at H=delta_1, with the correct positive companion branch (its nonnegative spectral transform gives Im(zm)>=0 and the companion has positive imaginary part). Fixed-point uniqueness and inversion identify the laws. c=1 and structural zeros c>1 are included; no simultaneous assertion over all random or data-dependent vectors is made. No carrier decision owed (untouched and unflagged).

## `ex-critical-aspect-one-no-positive-edge-gap`

Checked all four verification steps: MP c=1 has no zero atom and t^-1 density bounded below by a constant times t^-3/2 near zero. Monotone convergence along s=1/k plus monotonicity gives the full s-downarrow-zero divergence. Each triangular bump is positive only in (a_j,b_j), with middle-half lower bound and integral constant checked. Directional weak convergence makes its sample integral eventually positive, forcing an actual positive eigenvalue there even for complex entries. Countably many shrinking intervals force the smallest positive eigenvalue to zero without using a real-only edge theorem or claiming finite-sample reciprocal-trace convergence. No carrier decision owed (untouched and unflagged).

## Exact dispositions and evidence

The item order above follows the generated dependency levels. The moderate-risk quadratic-form and fixed-point-uniqueness suppliers and the rank-one supplier were also read in full as actual prerequisites. Every cited local supplier Statement/Definition was checked against its actual use; the batch proof contract identifies those exact source sections. The native batch47 refuter reports no findings. Its coverage assertion and the reader’s conclusions were treated as evidence only.

| Obligation | Verdict | Defect ledger ID |
|---|---|---|
| `touched:47:lem-bounded-complex-iid-matrix-norm-bound` | `accepted_repair` | `ml101-b47-3a-common-space-01` |
| `touched:47:lem-bounded-complex-resolvent-deterministic-equivalent` | `reviewed_no_defect` | none; citation audit enrichment |
| `touched:47:lem-bounded-complex-resolvent-quadratic-form-concentration` | `accepted_repair` | `ml101-b47-3a-common-space-02` |
| `touched:47:lem-hermitian-resolvent-trace-concentration` | `accepted_repair` | `ml101-b47-3a-common-space-03` |
| `touched:47:thm-directional-sample-covariance-resolvent-limit` | `amended_repair` | `ml101-b36-3a-variance-fact` |
| `touched:47:thm-directional-sample-covariance-resolvent-limit-for-bounded-entries` | `accepted_repair` | `ml101-b47-3a-common-space-05` |
| `touched:47:thm-general-population-sample-covariance-esd-limit-for-bounded-entries` | `accepted_repair` | `ml101-b47-3a-common-space-04` |
| `reader:47:1` | `confirmed_fatal` | `ml101-b47-3a-reader-mp-common-space` |
| `gate:ml101-b36-3a-variance-fact` | `confirmed_fatal` | `ml101-b36-3a-variance-fact` |

The five accepted reader repairs have complete authenticated preimages in the run’s `owner-step3-authenticated-preimages/preimage/items/` archive. Raw hashes were checked against the immutable pre-reader snapshot before comparing the actual text. Their complete current sources equal their reader-post hashes. Only the common-space premises and corresponding Given/proof event-domain explanations changed. The deterministic-equivalent source is identical in pre/post/current; its contract-only F3 quotation change is audit enrichment, not a mathematical finding.

The finite-fourth-moment theorem’s pre/post raw hash is `66648222c924a314a643efe066a394a6eb84c9587bcb4f1390b3916a49f6f48e`; its current raw hash is `ef3bafbd44af0945cc7c5bedc369b51e19db5f1497117ba31220db6926c741e0`. The exact owner-before/after comparison changes F2 and step 2.1, preserving the entire Statement. For square ±4 entries each column has norm 4√n; this directly disproves the old constant 2√2. The corrected fact supplies √2 τ(1+√c), and the residual array is explicitly assigned variance τ_K², including zero. Both touched and gate obligations identify this one physical defect, rather than inventing separate mathematical defects.

For the foreign-refuter obligation, all nine original native/owner artifact hashes in `owner_foreign_refuter_route` were verified: original report, native result, prompt, original scope, before source, after source, application, owner review, and pending defect record. The original report’s precise F2 finding and the complete current argument were reviewed independently. The original scope does not authorize native36 coverage of this theorem; the separate owner registry supplies the mandatory home47 obligation. Neither those registration bytes nor owner archives establish the original refuter’s observed carrier. Both historical uncertainty and the explicit owner authorization are retained in the decision.

For reader:47:1, the consumer-batch obligation, producer batch 46, consumer ID, dependency path, immutable producer pre-reader fingerprint and producer carrier at split remain copied verbatim from the scope in the decisions file. The dispatch expressly permits normal disposition of this unbound observation. The current producer’s common-space hypothesis resolves the described defect; its full proof and actual prerequisite statements were reviewed, rather than inferring correctness from file presence or prior approval. Its current raw source hash at review was `e356dbc9781ded30f4defe46f8b9abe498fdd960659d5d9723a09a0bea74f9c7`. No original observed-byte binding is asserted.

## Sources and conventions

The normalization throughout is $A=T^{1/2}XX^*T^{1/2}/N$, $c=n/N$, and Stieltjes integrand $(t-z)^{-1}$. The real risk design uses S=XᵀX/n, normalized by p, with γ=p/n. The exact formulas in the carriers were preserved.

Read Bai–Miao–Pan, Theorem 1 (printed pp. 8–9) and complete §2 (pp. 12–16), including (2.1)–(2.9). Checked complex fourth moments, deterministic directions, bounded populations and variance scaling against the local arguments. The local proof correctly keeps the N-prefactor in the first error estimate and uses its own concentration/polarization estimate. [Full paper](https://arxiv.org/pdf/0708.1720).

Read Silverstein, Theorem 1.1 (printed p. 3), companion-transform relations (1.2)–(1.4), and the complete proof (printed pp. 4–8). The source states a common probability space; the local bounded deterministic-population case satisfies its assumptions and independently proves tightness, fixed-point identification and uniqueness. [Author PDF](https://jack.math.ncsu.edu/strong.pdf).

The book, Yin–Bai–Krishnaiah and Hastie–Montanari–Rosset–Tibshirani PDFs were not retrieved in this adjudication. Their citations are context rather than imported proof premises here. The actual real upper-edge supplier’s current local proof and Statement were read; the risk formula was checked from its exact finite-dimensional decomposition and stated local directional/edge suppliers. No claim of reviewing deeper ancestral edge proofs or those unread external texts is made.

## Consumer, editorial and page checks

All direct item/reference consumers of the five reader-changed Statements were located by current-source search. They are all within batch47: the bounded ESD and directional theorems, deterministic-equivalent lemma, and finite-fourth theorem. Their actual uses satisfy the common-space premise or need only the finite-n probability inequality. No consumer edit is needed, and no Statement-change propagation reaches an outside item. The finite-fourth variance repair leaves its Statement unchanged.

All eighteen owned carriers have uninterrupted Statement/Definition/Example sections without hyperlinks. Both pages retain draft status, `page_layout: compact-v1`, original inventories and empty bodies; their metadata agrees with the batch manifest. No TikZ/tikzcd diagrams occur, and these arguments need no diagram to state their constructions or proofs. Published content was not edited; no defective published supplier was found in the assigned review.

The owned cross-batch records are preserved. Two obsolete historical edges are retained with status `removed`, rather than deleted: the general-population complex ESD theorem no longer uses the real-only ESD definition, and the complex critical-aspect example proves its small positive eigenvalues directly rather than citing a real-only edge theorem. The frontier-dependency ledger records these current uses and the owner alerts. Stable IDs and proposed withdrawals are preserved.

## Repairs and local checks

This adjudicator made no item/page edits and ran no formatter. Accepted source repairs were already present. Changed the batch47 contract to author fourteen specific risk reviews and refresh the risk corollary’s F5 quotation from the current MP-law Statement. The first strict local contract check reported that one stale quotation; after the metadata correction it passed. No mathematical defect row was created for that mechanical mismatch.

- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-47.proof-contracts.json`: 18 items routed, fourteen HIGH/CRITICAL, zero tool errors (initial routing check).
- The same command with `--require-reviewed`: zero errors after all fourteen reviews.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-47.proof-contracts.json --strict`: 18/18 items checked; zero errors or warnings after quote refresh.
- Explicit-file `node tools/tsx-run.mjs tools/precheck.mts` on all eighteen batch47 item paths: 18 checked, zero failing.
- One final explicit-file `node tools/proof-layout.mjs` invocation batching all eighteen item paths: 18 items, 60 steps, zero defects; exit 0. No item was changed afterward.
- `node tools/defect-ledger.mjs append --file /tmp/ml47-ledger-rows.json`: seven closed rows appended and generated ledger view refreshed, with append serialization supplied by the tool.

No judge, stamp, dispatch, certification cycle, publication or run transition was initiated. Active status was read from `.autopilot/`; the repository HEAD observed was `38f95712f5`. The engine remains responsible for hashes and the full gate battery.

## Owner alerts and remaining integration obligations

No substantial mathematical prerequisite is unresolved in the reviewed current proofs. Two administrative issues remain outside this dispatch’s editable artifacts:

1. Concurrent batch48 recorded the identical F2 defect as `ml101-b48-3a-variance-fact`. The mandatory exact home47 gate ID is `ml101-b36-3a-variance-fact`. The new closed producer-owned row uses append-only `supersedes` to preserve the earlier row while retaining its reader:48:1 and refuter:48:1 references; only one active ledger row now owns this physical defect. Owner must rebind batch48’s foreign decision references to the canonical row and authenticate ordinary same-defect sharing, including the home47 touched/gate pair. Batch48 decisions and owner repair evidence were not edited here. The owner must also coordinate any eventual producer46 repair-row sharing with reader:47:1, preserving both genuine obligations and the immutable producer fingerprints.

2. Read-only producer46 metadata is stale: the current MP-law item declares `thm-choice-implies-dependent-implies-countable-choice` but its batch46 manifest entry omits that dependency, and its contract F5 quotation omits the current trace-concentration supplier’s common-space clause. The current producer proof states AC and a common space and therefore satisfies those actual supplier hypotheses. These are owner/batch46 metadata reconciliation requests, not a new mathematical counterexample. Batch47’s own F5 quotation has been refreshed and its contract check passes.

The active run additionally reports native blockers for split-51 and collect-36; neither is within this dispatch. No global closure, clean gate battery, or completed owner reconciliation is claimed.
