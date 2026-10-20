# Step 3a adjudication — batch 77

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-77`.

## Scope and evidence

The generated order task and scope route exactly six touched items, with no reader/refuter findings, page decisions or foreign gate obligations. Reader and refuter findings arrays are empty. Each current touched carrier matches its native post-reader raw SHA-256; each archived preimage at `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` matches its native pre-reader hash. Thus the precise changes are recoverable; no historical uncertainty disposition is needed.

## Independent item review

1. `lem-exp-negative-argument-second-order-upper-bound`: accepted the reader’s explicit restriction of step 2.1 to the remaining case z<0. Equality at zero was already proved in step 1.1; this is a nonfatal clarification of case scope, not a false claim or missing prerequisite. The mean value theorem requires a<b; both its uses now meet this literally. For t≤0, g′(t)=1−exp(t)≥0, so g(t)≤g(0)=0, and f′=g gives f(z)≥f(0)=0. Read the exact exponential, derivative, monotonicity and mean-value supplier statements. No Statement change, consumer repair or choice use.

2. `def-bandit-importance-weighted-estimator`: reviewed_no_defect, change_kind metadata. Accepted the corrected Auer locator. The definition restricts rewards to fixed or deterministic complete-history functions with finite arms/horizon and trivial initial history. Inductively the possible histories are finite; history-measurable probabilities are constant on their atoms, positive probabilities have a positive minimum on the finite history tree, and all estimates and their squares are bounded on that tree. This restriction is essential: positivity alone on an arbitrary continuously randomized history would not imply integrable second moments. The written definition includes the needed restriction. Read all six cited protocol/probability definitions. No defining clause changed.

3. `alg-exp3`: reviewed_no_defect, change_kind metadata. Accepted the exact Eq. (11.7)/Algorithm 9 and Auer Figure 1 locations. Inputs k>1, n≥1, eta>0, the probability-space assumption, exact normalization, action draw, estimate and update are specified, as are outputs. All exponentials and denominators are finite and positive by finite induction. This is the loss-estimate Exp3 variant, with no uniform-exploration mixture; alg-hedge supplies the normalization convention, not a bounded-loss regret theorem. No procedure clause changed.

4. `lem-bandit-importance-weighted-estimator-has-conditional-moments`: reviewed_no_defect, change_kind metadata. Independently computed all three proof steps on each positive-probability history atom: outcomes y/p and 0 with probabilities p and 1−p give mean y, second moment y²/p, and centered variance y²(1−p)/p. Finite atoms give integrability and extend the integral identities to every conditioning event; zero-probability atoms are immaterial to versions. Checked y=0, y=1, p=1 (including k=1) and arbitrary positive small p. p=0 is excluded. No unjustified conditional-expectation existence or pull-out theorem is used: the version is directly constructed. The corrected Auer Eq. (11) location is PDF page 8 / printed page 55. Critical-risk review completed in the owning contract before proceeding.

## Sources read

[Bandit Algorithms](https://tor-lattimore.com/downloads/book/book.pdf), Chapter 11: Eqs. (11.3)–(11.7), Algorithm 9, Eq. (11.14), and the complete Theorem 11.2 proof (printed pp. 150–157); Note 3 (pp. 157–158) and Note 4 (p. 158). These identify the loss-based estimator, normalization and potential method used locally.

[Auer et al.](https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf), §3: estimator discussion (printed p. 52), Figure 1 and Theorem 3.1 (p. 53), and its proof through Eq. (11) and conclusion (pp. 54–55). This paper uses uniform exploration and different constants; its theorem is not imported as the local bound.


5. `thm-exp3-expected-regret`: reviewed_no_defect, change_kind metadata. Read all ten steps and all cited supplier statements. The finite positive weight induction proves completion for arbitrary eta>0 without constructing a probability space; the supplied draws are assumed. The t=0 identity and common-factor cancellation are exact. Conditional unbiasedness and the pathwise weighted-estimate identity give each fixed-arm expected gap. The variance term has conditional mean sum_i y_i²≤k. Applying the nonpositive-axis bound to −eta Yhat, telescoping positive potentials, and comparing W_n with each arm gives log(k)/eta+eta nk/2, which tunes to sqrt(2nk log k). Checked n=1, zero/all-one loss, small positive probabilities, and the k>1 rate condition. The adaptive guarantee correctly places max outside expectation. No bounded-loss Hedge theorem, AC, probability-space construction, or expected random hindsight maximum is asserted. Accepted the corrected Auer proof location, which is explicitly only a cross-check for a different variant. Critical-risk review completed in the owning contract.

6. `ex-exp3-and-full-information-hedge-differ`: reviewed_no_defect, change_kind metadata. Verified every displayed distribution directly from the actual algorithms: the two equally likely Exp3 branches give successor odds 1 and exp(2 eta); full-information Hedge has odds exp(eta). Positivity and strict monotonicity separate both branches for eta>0; eta=0 is excluded and would make them agree. Both reward endpoints are included and no probability is zero. Accepted the Algorithm 9 / Eq. (11.7) locator correction and Note 3 addition. High-risk review completed in the owning contract. No diagrams occur or are needed.

Contract-only audit enrichment: corrected the theorem’s old boundary step locators (zero/endpoints to 2.1/3.1/3.2; finite maximum to 6.1), and replaced the inaccurate “undefined” description at k=1 with the actual issue: the rate becomes zero, outside Exp3’s admissible eta>0 domain. This changes no item claim, proof, dependency, manifest or provenance.

The first strict contract check found `citation-quote-mismatch` at example F2: the stored full `alg-hedge` Definition included a denominator-positivity paragraph absent from the current supplier. Independently compared the old quote with the actual supplier: only that explanatory paragraph was removed; the inputs, draw, normalization, loss update, outputs and probability-space caveat agree. Refreshed this owned quote to the current Definition. This is audit enrichment, not an item defect, and creates no defect-ledger row.

## Dependencies, presentation and limits

Read every directly cited dependency statement/definition used by the six routed items. Current batch-73 protocol, feedback and regret definitions supply the timing and fixed-comparator conventions; current batch-74 `alg-hedge` supplies normalization and the exact full-information comparison update. Batch-77 manifest deps and justified_by match the carriers; the algorithm’s well-definedness discharge points to its theorem without adding a reverse deps edge. The proof-only clarification and source-locator changes alter no Statement or Definition, so no interface-change propagation is triggered. No affected outside consumer or defective published supplier was identified; no published carrier was edited and no published-ledger entry is required. Preserved all stable IDs and inventories; no withdrawals proposed.

All six routed formulations are uninterrupted by hyperlinks; reference sections follow their complete formulations where links are present. No TikZ/tikzcd or other diagrams occur, and none is required for these scalar probability and potential calculations. No item edits were necessary in this adjudication, so provenance and verification stamps remain unchanged. The report does not claim a full transitive audit of published suppliers, coverage of the two untouched/unflagged examples, or page-only decisions.

## Verdicts and status

Exactly six decisions are supplied. The exponential lemma receives `accepted_repair` with repair_confidence 1 for the reader’s explicit case-scope clarification. The five source-locator-only changes receive `reviewed_no_defect`, change_kind `metadata`, defect_ids []. The theorem and comparison-example decisions also document the owned contract audit enrichment. No confirmed mathematical defect, routed finding or open escalation requires a defect-ledger row. Three required independent risk reviews replace author self-review fields in the owning contract. Native stamping, judging and the full gate battery remain engine work.

## Local validation and handoff

- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-77.proof-contracts.json` ran before independent risk updates: two CRITICAL and one HIGH item routed, zero errors. After updates, the same command with `--require-reviewed` returned zero errors for all six proof-bearing contract entries.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-77.proof-contracts.json --strict --json`: first failed solely for the obsolete F2 supplier quotation described above; after refreshing it, passed six proof-bearing items with zero errors and zero warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with all six explicit routed item paths and `--json`: four proofs passed; definition and algorithm returned not-applicable; zero failures.
- `node tools/rendercheck.mjs` with those six explicit item paths and `--json`: six checked, zero errors and zero warnings.
- Final `node tools/proof-layout.mjs` with those six paths in one command: six items, eighteen steps, zero defects. No item edit or formatter followed it.
- Parsed the decisions JSON and checked exact obligation-set equality: six distinct touched decisions, matching the scope, with no extra obligations. Rechecked all six current raw item hashes against the native reader-post snapshot; all match.

No batch-local blocker remains. Only the owning proof contract, these two task-named outputs and the marked batch-77 dependency-ledger note were written. No judge, stamp, dispatch, stage transition, publication or full gate battery was initiated. The engine owns the next action: seal current decisions and execute its ordinary gate battery.
