# Batch 17 Step 3a adjudication

Run: `statistical-models-experiments-62`; group: `batch-17`.

Scope: two owed obligations (touched proposition and A page); reader/refuter findings are empty. No agents dispatched, judgments or stamps issued.

## Level 0 review

- `lem-ceiling-and-least-positive-integer-threshold`: Checked Proof 1.1–3.1 against current floor uniqueness, natural-to-integer order embedding, natural discreteness, ordered-ring and ordered-field statements. Negating the floor bounds gives c-1<x<=c; positive integral c-m>=1 proves both directions of c<=m iff x<=m. Tested x negative, zero, integral and nonintegral; a=0 returns 1 and integral a>=1 returns a. No choice or missing hypothesis.

- `lem-iid-normal-sample-mean-law`: Checked both steps against current affine/product characteristic-function identities, normal characteristic function (including sigma=0), uniqueness under AC, and exponential addition. The n factors at t/n give variance sigma^2/n; n>=1 prevents division by zero. The standardized conclusion is restricted to sigma>0; sigma=0 gives the point mass without standardization. Mutual rather than pairwise independence is explicit; inherited AC is declared.

- `lem-least-feasible-sample-size-exists`: Checked Proof 1.1–2.1 against current natural-number definition and well-ordering statement. Nonempty S contained in positive naturals is a nonempty subset of N; well-ordering gives membership and leastness, antisymmetry gives uniqueness. Singleton {1}, sparse and unbounded S work; empty S is excluded and no monotonicity or choice is needed.

- `lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power`: Checked Proof 1.1–3.1 and all 17 current dependency interfaces. Positive continuous density has positive attained minimum on [a,b] and finite local maximum, giving strict increase and continuity. Increasing/decreasing events exhaust R/empty; monotonicity extends integer tail limits to real limits. IVT and strict increase give unique quantiles only for 0<q<1. AC supplies normal law and countable choice for singleton-null box theorem; null integrals remove endpoints. Reflection substitution is a differentiable monotone bijection with derivative -1 and integrable positive Gaussian density, giving symmetry and z_(1-q)=-z_q. Checked x=0, q=1/2, tails, and excluded q=0,1.


## Level 1 review

- `def-power-and-sample-size-planning-specification`: Read the full Definition against current experiment, randomized-test, size/power, measurable-map, natural-number and least-feasible-size interfaces. Null, alternative and test target are nonempty and disjoint as required; feasibility has universal target quantification and composite-null supremum. Measurable finite interval endpoints give measurable fixed-parameter coverage and width events. Empty candidates/feasible set return none; zero allocation components are allowed but total size is positive; alpha,beta,gamma,eta endpoints are meaningful and w>0. Least size follows well-ordering without simultaneous plan selection or additional choice. Tie selection is extensional, not an algorithmic oracle.

- `prop-known-variance-normal-two-sided-z-test-power`: Independently checked current Statement, F1–F6 and Proof 1.1–3.1 against all current supplier interfaces and reader/refuter evidence. AC discharges the explicit countable-choice measurability premise; n>=1 and sigma>0 make the affine statistic defined. alpha in (0,1) gives positive cutoff, disjoint Borel tails, and exact size alpha. Shifted normal probabilities give both tails with atoms excluded; delta=0 returns alpha, negative delta swaps tails, and nonzero delta is in the declared two-sided alternative. Reader clarification is accepted with unchanged formula/proof substance. Native diff reversed in memory recovers exact frozen pre hash ce39b903eea02d1ee89cf3aa414d0d56c1082680a9657870b1f2cfda0c3bd95e; current raw hash equals reader post d762767f9577c3068e5d14912408af0d1dc57155d49648d1a3de0ef4aa0fbc35. Direct item consumer uses delta=sigma>0 and remains sound; A-page summary remains accurate.

Touched obligation disposition: `accepted_repair`, repair confidence 1. Source remains exactly reader-post; manifest Statement mirror aligned. No other item or page consumer requires a repair. 

## Level 2 review

- `thm-known-variance-normal-z-test-power-and-minimum-sample-size`: Read all five proof phases/steps against the previously reviewed 16 prerequisite interfaces. Borel rejection is valid under AC-to-CC; normal shift and symmetry give Phi(lambda-z_(1-alpha)). This increases with mu, so the composite-null supremum is attained at mu0 and equals alpha even for alpha>1/2. Strict increase gives the exact target inequality delta*sqrt(n)/sigma>=q. Checked q<0, q=0 (every positive size), q>0 (squaring only positive sides), integral threshold and threshold below one. Ceiling supplier yields the least positive feasible size and finite quantiles ensure existence. delta>0, sigma>0, interior alpha/beta and AC are explicit; no unknown-variance or asymptotic inference.

- `cex-no-finite-query-universal-sample-size-infeasibility-detector`: Read Steps 1.1–3.1 and current planning, experiment, randomized-test, power, Dirac and measurable-indicator interfaces. Universal termination on all-false gives finite Q; M=1+sum(Q) is larger than every positive queried index, also for Q empty. Determinism preserves the entire adaptive transcript for threshold oracle 1{n>=M}; both oracles are nondecreasing yet correct answers differ. Explicit {0,1} experiments with null Dirac0 and alternative Dirac_E(n), phi(x)=x, alpha=0 and target=1/2 realize exact feasibility for every size. Null/alternative parameter labels remain disjoint even when laws coincide. No monotonicity, independence across n, extra observations or extra choice is assumed.

- `ex-two-sided-normal-z-power-includes-both-tails`: Read Example, F1/F2 and Verification 1.1–2.1. At n=4, delta=sigma>0 the repaired proposition applies at a nonnull parameter and gives lambda=2 and c=z_0.975; alpha=0.05 is interior. Both finite-argument tails are strictly positive from strict CDF increase and limits, so omitting the lower one changes the exact power. Direct consumer review of the reader Statement clarification requires no edit. AC is explicit in Facts/Given.

No current mathematical defect or prerequisite blocker found. 

## Level 3 review

- `thm-positive-integer-power-sample-size-search-correctness`: Checked full Statement and all five proof steps against the actual algorithm Definition, planning rule and least-size lemma. Ascending branch reaches min S after exactly min S individually terminating calls when S nonempty; any return requires a true answer, establishing both iff directions. Empty S gives endless increments rather than none. Bounded branch makes at most B calls; global completeness is used exactly to rule out an unseen feasible size after all false answers. B=0 is valid only with a certificate forcing S empty. Immediate infeasibility branch uses its all-size proof. A crossing witness works without monotonicity; constant-false monotone oracle shows monotonicity alone is insufficient. No global time bound or allocation witness is asserted.

- `ex-known-variance-normal-z-sample-size-and-sensitivity`: Read Example, F1–F3 and Verification 1.1–3.1 against the current exact one-sided normal theorem, quantile identities and ceiling lemma. Phi(1) lies strictly between 1/2 and 1, so both error targets are interior and both quantiles equal 1. delta=sigma gives threshold 4 and exact ceiling 4; n=3 has lower power. At n=4 halved effect or doubled known standard deviation gives standardized effect 1, hence power Phi(0)=1/2 below target. The latter quadruples variance and keeps the original physical delta fixed; test cutoff uses the changed known standard deviation. AC and model restrictions are explicit; no numerical approximation or variance/standard-deviation confusion.

All eleven HIGH/CRITICAL risk reviews are complete. 

## Historical deltas and decisions

Both routed obligations are `accepted_repair` with `repair_confidence: 1`. There are exactly two decisions; empty reader/refuter findings create no further decisions. The source bodies were retained unchanged from reader-post. No judge stamp was present in the touched proposition, and none was added.

No separate exact pre-reader archive was located. For targeted historical recovery, the successful native reader’s recorded unified diffs in `research/statistical-models-experiments-62-dispatch/reader-reader-17.attempt-1.log` were reversed **in memory**, without modifying any source or native artifact. The complete reconstructed preimages match the immutable pre-reader raw SHA-256 values; the current raw sources match the immutable post-reader values:

| Carrier | Reconstructed pre-reader raw SHA-256 | Current / reader-post raw SHA-256 |
|---|---|---|
| `prop-known-variance-normal-two-sided-z-test-power` | `ce39b903eea02d1ee89cf3aa414d0d56c1082680a9657870b1f2cfda0c3bd95e` | `d762767f9577c3068e5d14912408af0d1dc57155d49648d1a3de0ef4aa0fbc35` |
| `power-and-sample-size-planning` | `8219507f28a19c901f0d1cf510ccb5f277cde9a0fc29b4d72480d85660d59991` | `db1fc3497d1e01972c69e4b449a91bb9c9d8a58ceb8b203812d9019d08d064ed` |

The proposition delta adds the designated two-sided alternative and clarifies the all-parameter power-function convention in Statement, Given, F6 and the final proof description. The probability formula was already sound. This is a nonfatal specification/terminology repair; the zero shift is the null parameter and its rejection probability equals alpha. The current upper/lower-tail proof and all actual prerequisite interfaces were reviewed independently.

The page delta adds the exact evaluator premise (each call terminates) and identifies the unbounded ascending branch. The prior algorithm already stated those conditions. The current summary faithfully separates a finite supplied list from full-domain search, whose `none` output needs a global certificate. Both algorithms and their complete correctness arguments were read; empty lists, equal-size ties, empty feasibility, the bound zero, per-size termination and both directions of the ascending termination equivalence were checked.

The final decisions JSON includes exactly `touched:17:prop-known-variance-normal-two-sided-z-test-power` and `page:17:power-and-sample-size-planning`. A final explicit comparison confirmed that all fourteen batch item sources and both page sources still have their frozen reader-post raw hashes.

Closed rows appended to `research/defect-ledger.jsonl`, each owned at `3a-adjudicate` and referenced by its decision:

- `statistical-models-experiments-62-3a-batch-17-two-sided-alternative-convention` — nonfatal, fixed.
- `statistical-models-experiments-62-3a-batch-17-page-evaluator-premise` — nonfatal, fixed.

Alpha synchronized the proposition’s manifest Statement, its contract’s final derivation text, the direct example’s stale supplier quotation and a boundary evidence locator. These are record reconciliations to the accepted reader source, not additional mathematical repairs; no mechanical diagnostic was entered as a defect. All eleven required risk reviews were replaced with specific independent Alpha evidence in the owning contract.

## Consumer and page checks

A full current item/library reference search for the touched proposition finds only `ex-two-sided-normal-z-power-includes-both-tails` and its A page. The example’s delta=sigma>0 is in the repaired alternative; it uses the unchanged two-tail formula, so no source edit is needed. The page also remains sound. No change to any consumer Statement/Definition is required, and no outside-batch supplier-first repair is requested.

Read all seven declared prerequisite page summaries: finite populations, randomized assignment, finite-sample testing, weak convergence, characteristic functions, Reeb constructions (choice context), and central limit theorems. Finite-population/assignment laws supply design-based context; none supplies Gaussian errors. Characteristic-function and Gaussian suppliers give the exact finite-sample normal calculation; no CLT approximation or model adequacy is inferred. The nine owned cross-batch records retain their prior evidence and now include independent current interface/context review. The frontier dependency ledger records this disposition and preserves stable IDs and proposed withdrawals.

## Source checks and limits

The actual cited local Definition/Statement interfaces were opened for all direct dependencies of the eleven risk items and the touched carrier, including the characteristic-function product/affine formulas, uniqueness under AC, all normal/CDF/quantile, order, measurability, testing and Dirac suppliers. Relevant source locations independently consulted:

- [Oehlert, A First Course in Design and Analysis of Experiments](https://users.stat.umn.edu/~gary/book/fcdae.pdf), Chapter 7 §7.1, printed pp. 149–150 (PDF pp. 169–170), and the opening confidence-interval discussion on printed pp. 151–152: planning fixes error/effect/variance targets and seeks the smallest adequate sample. These provide planning context; the local items prove the formal search and integer claims.
- [NIST/SEMATECH §7.2.2.2](https://www.itl.nist.gov/div898/handbook/prc/section2/prc222.htm), known-standard-deviation subsection: compared the one-sided quantile-sum expression and the explicit known-sigma restriction. The local proof handles nonpositive quantile sums before squaring. NIST’s displayed two-sided sample-size expression is not used to replace the local exact two-tail power formula or to assert an exact two-sided least size.
- [Riehl, Category Theory in Context](https://emilyriehl.github.io/files/context.pdf), Example 4.1.7, printed p. 134 (PDF p. 154): the stated ceiling/inclusion order equivalence agrees with the local ceiling proof. No categorical prerequisite is used locally.

- [Durrett, Probability: Theory and Examples, 5th ed.](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), Theorems 3.3.1(e), 3.3.2, Example 3.3.5 and Corollary 3.3.13, printed pp. 126–127 and 130 (PDF pp. 134–135, 138): read the affine identity, independent-sum product proof, complete real-variable Gaussian characteristic-function calculation and normal-sum statement. They match the local interfaces; the local mean proof handles the nonzero mean by scaling and centering. The browser PDF open failed, but a direct download succeeded and these pages were extracted with PyMuPDF after `pdftotext` proved unavailable.

The PDF screenshot fetch for Oehlert failed; its relevant source text was read through the browser’s extracted PDF text. This review does not audit the full transitive published proof closure. No defective published item was established; published carriers and the published-consumer ledger remain unchanged.

## Local validation

- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-17.proof-contracts.json` — 14 items routed, 0 errors; eleven HIGH/CRITICAL subjects reviewed.
- Final rerun of that command with `--require-reviewed` — 14 items, 0 errors.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-17.proof-contracts.json --strict` — final pass, 14/14 checked, 0 errors and 0 warnings. The first pass found the stale example quotation and unanchored boundary locator described above; both were corrected.
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-known-variance-normal-two-sided-z-test-power.md` — PASS (direct), 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/prop-known-variance-normal-two-sided-z-test-power.md library/statistical-models-and-experiments/power-and-sample-size-planning.md` — 2 files, no errors, real KaTeX and renderer YAML parsing available.
- Final `node tools/proof-layout.mjs items/prop-known-variance-normal-two-sided-z-test-power.md` — 1 item, 3 steps, 0 defects. Alpha changed no item source; this additionally checks the accepted reader carrier.
- Ledger append validated both rows and refreshed its generated view. No full engine gate battery, stamping, certification, dispatch or judge cycle was initiated. An attempted `rendercheck --help` unexpectedly performed its default read-only corpus scan; that incidental result is not used as batch coverage or a gate result.

No unresolved mathematical blocker, escalation, outside repair or withdrawal remains in this dispatch. The engine owns subsequent hashes and gates.
