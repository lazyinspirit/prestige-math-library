# Batch 78 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-78`. Scope: batch 78 only; producer batch 74 is read-only. Four owed findings, no touched/page/foreign-gate decisions. Reader changed no carriers; pre/post snapshots agree.

## Producer review: alg-hedge (level 2)

`reader:78:1` and `refuter:78:1`: confirmed_nonfatal. The current Definition still includes the positivity/finite-normalizer induction and has empty justified_by; the batch-74 manifest agrees and its contract has no algorithm entry. This is a real algorithm-format violation, not a false mathematical assertion. Finite nonnegative losses, positive initial weights and finite positive exponentials prove the assertion immediately. No substantial mathematical prerequisite is missing. Record the nonfatal defect without claiming a supplier repair. Owner/batch 74 must relocate the argument to a separate proved result and synchronize justified_by, contract and manifest. The owned consumer alg-exp4 uses only normalized exponential-weight notation and proves its own well-definedness; no consumer correction is necessary. Producer fingerprint and routing provenance are preserved verbatim in the decisions file.

## Ordered item reviews

### lem-exp4-potential-inequality

Steps 1.1–3.1 checked against the current logarithm/MVT, exponential addition/positivity and nonpositive-axis exponential suppliers. Both log cases s<1 and s>1 have the correct inequality direction; s=1 is equality. Estimated losses are finite and nonnegative by the Exp4 well-definedness justification. Thus -eta L<=0 for every finite eta>0; no bounded-estimate restriction is imported. The quadratic majorant is ((eta L-1)^2+1)/2>0, so logarithms are licensed. W/Z follows by finite induction, log ratios telescope, and the fixed expert term gives the correct log M prior. Zero losses and n=1 are valid; M=1 and eta=0 are outside scope. No choice or limiting interchange occurs. Source: Bandit Algorithms §18.4 Lemma 18.2; its omitted exercise proof is supplied locally.

Current carrier unchanged; risk review complete. No item edit or consumer propagation.

### lem-exp4-unbiased-expert-reward-estimates

Steps 1.1 and 2.1 checked against alg-exp4, contextual protocol, estimator definition and full conditional-moment proof, and conditional expectation definition. At a finite positive-probability history, P_i=0 and Q_m>0 force every E_mi=0. For P_i>0, summing the two possible indicator values gives conditional loss mean 1-x_i; the supplier calculation only uses this coordinate, regardless of other zero coordinates. Finite histories and finite estimates ensure integrability. Expert rows sum to one, so unsupported terms disappear and the expert reward mean is exactly its true reward. No unsupported arm unbiasedness or reactive-adversary claim is made. Reward endpoints 0 and 1, singleton supported action and n=1 are covered; no AC or iff assertion. The stale degenerate-boundary pointer is corrected from steps 1.1/1.2 to 1.1/2.1. Both reader:78:2 and refuter:78:2 are confirmed_nonfatal: the citation error is real, but the proof itself is sound.

Current carrier unchanged; risk review complete. No item edit or consumer propagation.

### lem-exp4-updates-are-well-defined

Steps 1.1, 1.2, 2.1, 3.1 and 4.1 checked against the algorithm, fixed finite contextual protocol, exponential positivity, ordered-field sign/inverse laws and induction. Base Q=1/M is positive and normalized; finite mixtures are simplex vectors. Zero P forces zero expert advice. The explicit zero quotient defines estimates on null outcomes as well. Finite eta and estimates give positive finite exponential factors and normalizer, preserving the invariant. Finite action histories give measurable finite-range records and integrability for downstream calculations. Exactly n finite rounds return every prescribed output. Draws are inputs on the supplied probability space, not an unproved sampler construction. n=1, zero rewards/losses, unsupported arms and arbitrary finite eta>0 are covered; no choice axiom, uniform exploration or bounded-estimate hypothesis is required.

Current carrier unchanged; risk review complete. No item edit or consumer propagation.

### lem-exp4-weighted-estimated-loss-second-moment

Steps 1.1–3.1 checked against the exact estimator/moment suppliers and Exp4 mixture. At most one arm estimate is nonzero; cross terms vanish before conditioning. Unsupported advice coefficients vanish by positivity of expert weights. On supported coordinates the conditional square is (1-x_i)^2/P_i. The inequality a^2<=a is used for a=E_mi(1-x_i) in [0,1]. Summing nonnegative expert weights cancels each supported denominator via sum_m Q_m E_mi=P_i; the remaining losses sum to at most k. Finite histories justify every conditional sum and integrability even for very small positive P. Both reward endpoints, one supported arm and zero losses are covered. No global positivity hypothesis is imported for unsupported arms and no choice or limit operation occurs.

Current carrier unchanged; risk review complete. No item edit or consumer propagation.

### thm-exp4-expected-regret

Steps 1.1–3.1 checked against all three current Exp4 lemmas, expectation/conditional expectation definitions, linearity, regret definition, logarithm laws and square-root existence. Deterministic oblivious advice/rewards give a nonrandom maximizing expert in a finite nonempty set. Finite action histories establish the expectation identity directly, without exchanging a random maximum and expectation. Conditional second moments sum to at most nk and the pathwise potential bound gives log M/eta+eta nk/2. M>1 makes log M>0, and substituting the positive square root gives sqrt(2nk log M). n=1, duplicate advice, zero support and reward endpoints remain valid; k=1/M=1 are excluded. No general adaptive comparator, stochastic generalization, uniform exploration or bounded-loss Hedge theorem is claimed. All prerequisite reviews above are complete.

Current carrier unchanged; risk review complete. No item edit or consumer propagation.

### ex-exp4-context-specific-expert-class

Verification 1.1 and 2.1 checked against the fixed contextual protocol, Exp4 definition, current regret theorem and logarithm laws. All maps from a finite c-element context set to k actions are exactly k^c experts; each indicator row sums to one. Fixed contexts/rewards give oblivious advice, and c>=1,k>1 ensure M>1 and positive tuned eta. Repeated product law gives log(k^c)=c log k. c=1, unused contexts, identical observed advice, n=1 and both reward endpoints cause no issue. Empty contexts/k=1 are excluded; finite enumeration needs no AC. The result is only regret on the fixed finite sequence, with no statistical generalization assertion.

Current carrier unchanged; risk review complete. No item edit or consumer propagation.

## Carrier comparison and scope

All ten pre/post item, contract and manifest fingerprint triples agree; no reader repair is represented by a touched obligation. Current raw item comparison with post snapshot: all ten match. No item, algorithm interface, Statement/Definition, page or published carrier was edited. No diagram occurs in the reviewed carriers, and these finite calculations need none. No published defect was identified; no published-ledger change is needed. Existing batch-78 frontier rows are preserved; the alg-exp4/alg-hedge row now records the exact nonfatal owner routing. The ledger has one closed row for each of the two distinct confirmed defects, each shared by its reader/refuter decisions. Nonfatal-recorded means disposition of the finding, not completion of the supplier relocation.

## Sources and prerequisites

Read current carriers and exact cited prerequisite statements; additionally read the complete conditional-moment and nonpositive exponential-bound supplier proofs. The estimator definition assumes all arms positive, but its coordinate calculation needs only the supported arm; restriction to the finite supported action set proves its use here. Fixed inputs give finitely many histories, hence all finite-range estimates are integrable. The algorithm's separate well-definedness justification supplies the positivity/nonnegativity used by its consumers, without a reverse deps cycle.

Checked [Lattimore–Szepesvári, Bandit Algorithms](https://tor-lattimore.com/downloads/book/book.pdf), §18.2.1–18.4, Algorithm 11, Lemma 18.2, Theorem 18.1, equations 18.9–18.12 and the finite-context application (PDF zero-based pages 236–239). The procedure and constants match. The source leaves the potential lemma to an exercise and omits zero-support qualifications in its componentwise unbiasedness discussion; the local proof supplies the potential argument and limits unbiasedness to expert estimates. The current file's page locators sometimes span the neighboring page; named sections/equations identify the passages. No source assertion substitutes for the local arguments. Other cited Auer/Hazan/Ma texts were not independently rechecked in this session; no step relies on them instead of a local proved supplier.

## Owner follow-up and limits

Batch 74: separate the true Hedge well-definedness argument from Definition and update its justified_by/manifest/contract; the finding is nonfatal and no substantial mathematical prerequisite is missing. Batch 78 source-evidence inventory still omits the well-definedness lemma, and dependency-input planning warnings in the reader report need engine/owner reconciliation. Those are historical evidence/planning coverage limits, not newly invented mathematical defects; the omitted lemma was independently reviewed here. No substantial mathematical escalation remains in batch 78. No scheduling, gate battery, hash stamping, judging or certification was performed.

## Local checks

Initial risk-report: exit 0, eight proof-bearing items routed, six HIGH/CRITICAL; all six received independent complete risk reviews. Final checks recorded below.

- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-78.proof-contracts.json --require-reviewed`: exit 0; eight routed, zero errors, all six required reviews complete.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-78.proof-contracts.json --strict`: exit 0; 8/8 checked, zero errors and warnings.
- `node tools/frontier-dependency-ledger.mjs refresh --run machine-learning-all-101-2026-10-19`: exit 0; refreshed and deduplicated.
- Defect-ledger append validated and added exactly two rows under its serialized append lock, then regenerated its view. A focused JSON check confirmed exactly the four owed decisions and one closed ledger reference per finding; duplicate lanes share their defect row.
- No item edits occurred, so reflow, precheck and the final changed-item proof-layout command have no subjects and were not run. No acceptance or certification is inferred from these local checks. Engine stamping and the native gate battery remain owed.
