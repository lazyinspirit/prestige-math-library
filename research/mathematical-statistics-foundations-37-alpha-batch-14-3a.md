# Step 3a adjudication — batch 14

Run: `mathematical-statistics-foundations-37`. Group: `batch-14`. Scope: batch 14 only.

The scope routes exactly two touched carriers and no reader, refuter, or page findings. Reader and refuter reports were read; their empty findings are evidence, not acceptance. Initial risk-report lists ten HIGH/CRITICAL items.

## Completed review in dispatched order

### lem-doob-martingale-differences-inherit-coordinate-oscillations

Verdict: `reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`. Read Proof 1.1–3.1 and all seven actual supplier Statements/Definitions. Fubini applies to probability products and the L1 hypothesis; clause 3 supplies integrable measurable versions. The full-measure measurable prefix set permits all coordinate sections to be integrable by pointwise oscillation. Essential extrema are finite, attained a.e., measurable via positive level-set integrals, and have width <= c_i. Integrating centers them around H_(i-1); joint law transfers the endpoint and event-integral assertions. Checked n=1 (singleton empty products), c_i=0, exceptional sets, arbitrary measurable coordinate spaces, and both level-set equivalences. No AC is needed: for endpoint attainment one can use the explicit bounds u+1/m and ell-1/m, so the written approximation selection has a canonical choice-free implementation. Reader/refuter have no findings. Reader additions explain elementary valid inferences without changing Statement or deps; audit enrichment, no confirmed defect.

Evidence: `items/lem-doob-martingale-differences-inherit-coordinate-oscillations.md`, Proof 1.1–3.1; all seven linked current supplier Statements/Definitions; reader report repair paragraph; archived Step-2 gate-1 batch-14 contract derivations 1.1 and 2.2. The original L1 estimate follows from |integral f| <= integral |f| and Fubini; the original essential extrema facts follow immediately from their definitions and level-set integration. These are sound elementary gaps, not false statements. Reader expansion is retained as explanatory enrichment; no defect row is manufactured. Statement and dependency set are unchanged, so no changed-interface consumer repair is required.

The pre/post snapshots record raw file hashes `3e0f156b9c9f6cb762da5fd8434114062bf577324e7de026ed3118e98ed3ddb3` and `b25b446ef6ec4d10458b624816822d76ef3891d718a8060cdc3c24e80cd73908`. Current-byte comparison will be recorded at close.

The subsequent reviews below complete the remaining dispatched order.

### lem-epsilon-net-of-unit-sphere-has-cardinality-bound

Read Proof 1.1–4.1 and all 13 actual suppliers. Closed balls at radius epsilon/2 are disjoint because separation is strict; finite additivity, translation, dilation, and outer-content monotonicity give N <= (1+2/epsilon)^d after proving unit-ball content positive from the volume recursion. The bounded set of attainable finite cardinalities has an attained maximum, hence gives a net without an infinite greedy choice. Checked d=1, empty separated sets, nonempty unit sphere, epsilon approaching 0 or 1 within its open domain, positive radius/content cancellation, rational-power endpoint 0, and no AC. No reader/refuter findings; no defect. Risk review complete; no routed decision owed.

### thm-bernstein-independent-sums

Read Proof 1.1–3.1 and actual Statements/Definitions of all 16 suppliers. Centering removes the linear exponential term; boundedness gives |E X_i^k| <= b^(k-2) v_i and a uniform absolutely convergent exponential tail justifies expectation/series passage. k! >= 2*3^(k-2) gives the geometric MGF bound for 0<|lambda|<3/b. Factorization applies to nonnegative Borel exponentials of the original independent variables in both signs. lambda=t/(v+bt/3) lies strictly inside the domain and gives exactly the stated exponent. Checked n=1, t>0, v=0, b=0, a.s. support bounds, inclusive tail events and both directions of the zero-integral supplier. No AC and no finding or defect. No routed decision owed.

### thm-hoeffding-independent-bounded-sums

Read Proof 1.1–5.1, all 20 actual supplier Statements/Definitions, and the full conditional-Hoeffding supplier proof. Disjoint-group independence gives conditional centering; monotonicity places deterministic centered endpoints around zero with width c_i. Supplier proof bounds |D| by c, handles zero width, controls the divided difference, and proves the two-point log-MGF curvature <=1/4. Known exponential factors are bounded a.s. and measurable, so conditional iteration yields exp(lambda^2 V/8). Both sign optimizations use lambda=4t/V and union bound, giving -2t^2/V. Checked n=1, singleton intervals, V=0 before division, t>0, a.s. versus pointwise support and finite intersections of full-measure events. AC is explicitly assumed and inherited only through conditional-expectation suppliers. No reader/refuter finding or defect. No routed decision owed.

### thm-finite-subgaussian-maximum-and-epsilon-net

Read Proof 1.1–3.1, all 14 actual supplier Statements/Definitions, and the scalar/vector proxy definition. Markov optimization yields exp(-t^2/(2 sigma^2)) in either sign; a finite union gives 2m without independence. The zero proxy branch takes lambda to infinity with t>0. For z!=0 choose u=z/||z|| and a net point v; Cauchy–Schwarz gives |<v,z>| >= (1-epsilon)||z||. Finite nonempty net cardinality and unit-direction MGF bounds then give the vector constant. Checked m=1, d=1, z=0, sigma^2=0, inclusive tails, epsilon strictly between 0 and 1, measurable finite maxima/projections/norms, and no AC. No reader/refuter finding or defect. No routed decision owed.

### thm-mcdiarmid-bounded-differences

Read Proof 1.1–5.1 and all 22 supplier Statements/Definitions (Doob and conditional-Hoeffding proofs already independently reviewed). Product law plus change of variables applies first to |f| to establish integrability, then to f. Doob event identities supply zero conditional differences and predictable finite endpoints containing zero; |D_i|<=c_i gives bounded known exponential factors. Conditional iteration yields exp(lambda^2 sum c_i^2/8), and lambda=4t/V yields the upper tail. Negating f preserves product measurability, L1, and the same oscillations, giving the lower tail. Checked n=1, arbitrary measurable coordinate spaces, V=0, zero widths, exceptional sets, inclusive t>0 events and AC inheritance from conditional expectations. The Doob proof enrichment does not alter its interface or this valid use. No reader/refuter finding or defect. No routed decision owed.

### thm-subexponential-independent-sums

Read Proof 1.1–3.1 against all 16 previously read actual supplier Statements/Definitions. The local definition includes |lambda|=1/b_i, so b=max b_i permits the optimizing endpoint lambda=1/b. Independent MGF factorization gives exp(lambda^2 v/2), and the branches t<=v/b and t>v/b give respectively -t^2/(2v) and at most -t/(2b); both agree at t=v/b. For v=0, each two-sign MGF is <=1 at positive lambda_i=1/(2b_i); the nonnegative expression e^(lambda_i X_i)+e^(-lambda_i X_i)-2 has zero expectation and vanishes only at X_i=0. Checked n=1, positive b_i, zero proxies, integrability of both exponentials, negative sign factorization and inclusive tails. No AC, reader/refuter finding, or defect. No routed decision owed.

### ex-rademacher-sum-concentration

Read Verification 1.1–2.1 against all six actual suppliers. The disjoint atoms +/-1 each have probability 1/2, so their union has mass one; direct integration gives integrability and mean zero. Independent intervals [-1,1] have squared widths 4n, so Hoeffding yields exponent -t^2/(2n). Checked n=1, t>0, atoms/inclusive thresholds, nonzero denominator and explicit AC inherited from Hoeffding. No reader/refuter finding or defect. No routed decision owed.

### cex-finite-variance-does-not-imply-subgaussian-tail

Verdict: `reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`. Read Counterexample 1.1–4.1 and all 13 actual supplier Statements/Definitions. Telescoping comparisons give 1<=S<=2 and c=1/(2S)>0. The explicit enumeration and finite-prefix estimates establish countable additivity of the atom measure without rearranging conditionally convergent sums. MCT on finite atom truncations gives E|X|=2c sum k^-3 and EX^2=2c sum k^-2, both finite; absolute convergence licenses cancellation and mean zero. The two atoms at n give tail >=2c n^-4. Zero proxy contradicts this; positive proxy contradicts n^4 exp(-n^2/(2 sigma^2))->0 with x=n^2 and polynomial degree 2. Checked n=1, total mass one, empty events, measurable full-power-set construction, strictly positive variance and every finite proxy. No AC. Reader/refuter findings empty. Reader reordered a valid complete single-step moment argument to put integrability before cancellation; retained as audit enrichment, no confirmed mathematical defect.

Evidence: current Counterexample 1.1–4.1; reader report repair paragraph; archived Step-2 gate-1 contract derivation 1.4 establishes both finite moments in the same paragraph as symmetry. Reading that complete step supplies integrability before its conclusion, so this is expository ordering, not an invalid witness or undefined final expectation. Statement and dependencies unchanged; no interface-triggered consumer repairs. Pre/post hashes are `4ab835847f61eb933942e55c33e54b3902e99e27dc3b3fbf56bbd614fa69af8f` / `2d89aafbb0346b6d547eb38221eabde9b1266e1f272212a1a4dfb4204d6bf215`.

### ex-gaussian-maximum-concentration

Read Verification 1.1–3.1 and all 18 actual supplier Statements/Definitions. The substitution x^2/2 and FTC on [0,R], R positive integer, give integral x phi(x) <=1/sqrt(2pi); evenness and MCT prove absolute integrability before EG=0. Completing the square with a=lambda sigma is valid for every real lambda. Translation identifies the truncated Gaussian integrals; both [-R,R] and [-R-a,R-a] are increasing and exhaust R, so MCT and normalization give the exact MGF exp(lambda^2 sigma^2/2). Applying the finite-maximum supplier to identical variables requires no independence. Checked lambda=0, either sign of a, m=1, t>0, sigma>0 (zero excluded), endpoints and explicit AC. For the routine change from continuous compact-interval Riemann computations to Lebesgue integrals, independently checked the published Statement of thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: bounded continuous integrands are Riemann integrable and AC implies its Countable Choice assumption. Integration against the density follows first for simple functions from the law Definition and then by MCT. These standard identifications close the terse calculus/integration inferences; no substantive missing prerequisite or false computation. No reader/refuter finding or confirmed defect. No routed decision owed.

## Sources and coverage

All ten routed risk carriers were read in full in the generated order; every cited dependency was checked against its current Statement or Definition. Shared suppliers were read once and reused. The full published conditional-Hoeffding proof was also checked. Additional Gaussian prerequisite context: `items/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral.md`, Statement. The source PDFs named by the reader were not independently consulted in this adjudication; the mathematics was checked from the authored proofs and exact local suppliers, not inferred from the reader’s source checks. No claim of a transitive published proof audit is made.

## Dispositions and blockers

No confirmed mathematical defect, published supplier defect, affected outside-batch consumer, proposed withdrawal, or escalation was found. The batch cross-dependency artifact is empty and there are no owned-consumer entries for this batch in `briefs/tasks/frontier-dependency-ledger.md`; no unrelated ledger record was altered. No item, page, manifest, provenance, verification stamp or proof derivation was edited by this adjudicator. Only the owning contract’s ten `risk_review` entries and the task-named report/decisions are changed. No defect row is warranted for the two explanatory reader enrichments.

## Current carrier comparison and local checks

All twelve current item raw SHA-256 values equal the immutable reader-post snapshot. The Step-3 snapshot uses raw file hashes, not verification-excluded itemHashGuard hashes; the comparison was made using raw bytes. For the two touched items, the preceding pre/post values identify the explanatory reader edits retained here. The current contract differs by the ten completed risk_review records only; its proof derivations and citation inventory are retained.

- Initial `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-14.proof-contracts.json`: exit 0, 12 items routed, ten HIGH/CRITICAL risks.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-14.proof-contracts.json --strict --items <the ten reviewed IDs in dispatched order>`: exit 0, 10/10 checked, 0 errors, 0 warnings.
- Completed-contract risk-report with `--require-reviewed`: exit 0, 0 errors, 12 items routed.

Final checks: risk-report was rerun without `--require-reviewed` and then with it; both exited 0 with 0 errors and 12 items routed. `node tools/proof-layout.mjs items/lem-doob-martingale-differences-inherit-coordinate-oscillations.md items/cex-finite-variance-does-not-imply-subgaussian-tail.md` exited 0: 2 items, 12 steps, 0 defects. No item was edited by this adjudicator; this read-only layout check covers both touched carriers in one command. No judge, hash stamping, scope mutation, dispatch, or gate battery was initiated. The engine owns those transitions.

Final contract comparison: canonical JSON hashing after excluding `risk_review` matches the reader-post contract fingerprint for every one of the twelve manifest items. The decision JSON was parsed and checked to cover exactly the two touched obligations under group `batch-14`. No subject hash was stamped. Handoff is complete; no local blockers remain.
