# Batch 9 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-9`.

## Completed review in dependency order

### lem-finite-alphabet-iid-information-aep

Checked steps 1.1–3.1 against all eight cited suppliers. A common finite measurable surprisal transform preserves mutual independence and common law. Finite support sums give mean H and variance V and square integrability. The finite null union gives the sample-mean identity almost surely for every n≥1, so the cited IID weak law applies with its ≥epsilon tail bound and strict-tail convergence. Point masses give H=V=0; no log of zero, infinite moment, or choice is used. Reader reports no defect; refuter flags only the later Bernoulli example.

Current carrier retained; no decision owed.

### ex-correlated-bernoulli-source-fails-the-iid-aep

Checked all three verification steps and F1–F3. For 0<p<1, P(00)=1-p differs from (1-p)^2 and both entropy summands are positive. Only 0^n and 1^n occur with masses 1-p and p, so information is bounded uniformly over the two outcomes by a fixed finite constant/n. Its zero limit differs from H(p). Endpoints are explicitly excluded and do not provide the counterexample. No IID result is incorrectly applied to this dependent source; no choice is used. Reader/refuter supply no finding on this item.

Current carrier retained; no decision owed.

### ex-independent-nonidentical-source-has-no-information-rate-limit

Checked steps 1.1–4.1 and F1–F2. Finite products normalize and project consistently; no countable-product existence premise is used. Information is the deterministic value F_n ln(2)/n under P_n. For k≥2 the previous/new block ratio is 2^(-2k+1), tending to zero: newest fair blocks force even endpoint limits ln(2), deterministic blocks force odd endpoint limits zero. The k=1 base endpoint N_0=0 does not affect that limiting estimate. For every c, epsilon=ln(2)/3 gives eventual probability one along one subsequence. The claim explicitly concerns convergence to constants under varying finite laws. No independence/identical-law conflation or choice is used; reader/refuter supply no finding.

Current carrier retained; no decision owed.


### thm-fixed-length-lossless-source-coding

Checked steps 1.1–3.1 and all seven cited interfaces. Typical-set bounds follow by summing the correct pointwise upper/lower word masses; strict complement is bounded by the AEP ≥epsilon event. Reserving one message gives full encoder/decoder domains even for an empty typical set. Finite alphabet order permits deterministic assignments for every n without AC. With epsilon_n=n^(-1/4), error ≤V/sqrt(n); H≥0 and ceil(log2(|T|+1)) give the stated 2ln(2)/n overhead. Each message decodes at most one correct word, yielding success ≤delta_n(gamma)+exp(n(R-H+gamma)). A fixed positive gap proves strong converse and the liminf subsequence contradiction proves weak converse. Rates are nonnegative; H=0 makes below-entropy premises impossible. Reader/refuter supply no finding.

Carrier retained; no decision owed.

### ex-bernoulli-aep-and-typical-set-count — refuter:9:1

Independently checked all four verification steps and F1–F6 against current suppliers. On 0<p<1, I_n-h=(k/n-p)ln((1-p)/p); for p≠1/2 this yields exactly the closed clipped integer interval and binomial sum (empty sums are zero). At p=1/2 all 2^n words are typical and V=0. At p=0,1 exactly one supported word is typical, H=V=0. Two-valued variance algebra is valid only in the interior; repaired the Example and step 3.1 to state the endpoint values directly, avoiding undefined logarithms. The p=1/4,n=4 calculation gives weights 0,1,2, size 11 and mass (81+108+54)/256=243/256, including equality at the tolerance boundary. The general tail and both cardinality inequalities apply for all p. No choice or missing prerequisite. Refuter:9:1 confirmed fatal as an undefined endpoint formula; reader missed it; repair complete with confidence 1.

Smallest coherent repair: restrict the logarithmic variance formula to the interior and prove V=0 at the endpoints. Removed one redundant definition of the word weight. No supplier Statement/Definition changed. Search of items/ and library/ finds no item consumers; the sole B-page summary remains sound and unchanged. The manifest summary and affected contract derivation/boundary evidence are synchronized. Existing AI-generated example/argument provenance remains accurate; no judge stamp exists to invalidate.

## Routing and historical evidence

The scope owes exactly `refuter:9:1`; touched items, touched pages and reader findings are empty. The decisions file therefore has exactly one `flagged` decision, `confirmed_fatal`, referencing closed ledger row `non-ml-math-remaining-81-2026-10-18-batch-9-D001`, with `repair_confidence: 1`. No additional decisions were invented for risk-only reviews.

The pre-reader and post-reader inventories have identical item, contract and manifest hashes; the reader made no repairs. Before this adjudication, the Bernoulli carrier raw SHA256 was `3e4f7aeb88a58f6c798e63e7e3e11f4ba561be5eb6c329f1499a6d8362a2ee88`, matching both inventories. The scope separately records observed fingerprint `bbb0a3185cc580d7ed2a1c67e76fda0a72388e218a1b3b6b5fec1b5d011190ee`; this report does not equate that fingerprint with the raw file hash. The reported unqualified formula was present in the independently read pre-edit current carrier. Historical/current repair distinction is therefore concrete; no missing-preimage disposition is needed.

## Sources and prerequisite interfaces

Read the exact local F1–F8/F1–F7/F1–F6 supplier statements needed by the reviewed claims, including the complete current IID finite-variance weak-law proof. The local entropy definition uses finite laws, natural logs and zero entropy terms; surprisal and block logarithms use positive support. No arbitrary choice occurs.

Consulted [MIT 6.441 Lecture 3](https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf), PDF pp. 5–6 (finite-variance weak law and Chebyshev), pp. 8–9 (IID surprisal transform and AEP), and pp. 10–12 (typical-set mass/cardinality). Its base-2 statements translate to the local nats convention. These sections match the checked hypotheses. The sharper numerical code bounds and strong converse are proved locally by the displayed counting argument, rather than borrowed from that lecture.

Also inspected [MIT 6.441 Lecture 5](https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/a8525ccc542cccf186535efcf673ab36_MIT6_441S10_lec05.pdf), PDF pp. 2–3 and 8–12: it provides source-code definitions and expected-length prefix coding context, not the precise fixed-length strong converse. No stronger source claim is made. Cover–Thomas is retained as bibliography; I did not independently inspect that book in this adjudication.

Published prerequisite interfaces reviewed here have no confirmed defect. No published carrier was edited and no published-ledger entry is needed. Cross-batch supplier interfaces remain unchanged; the frontier-dependency ledger records the owned consumer review. No new prerequisite, withdrawal, affected outside consumer, or unresolved mathematical blocker remains.

## Focused checks

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-9.proof-contracts.json`: exit 0; five HIGH/CRITICAL items identified and reviewed.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-bernoulli-aep-and-typical-set-count.md`: exit 0.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-bernoulli-aep-and-typical-set-count.md`: exit 0; one proof checked, zero failures.
- `node tools/rendercheck.mjs items/ex-bernoulli-aep-and-typical-set-count.md`: exit 0; actual KaTeX and YAML parsing passed.
- Final `node tools/proof-layout.mjs items/ex-bernoulli-aep-and-typical-set-count.md`: exit 0; one item, four steps, zero defects, after the last item edit/formatter.
- `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-9.proof-contracts.json --require-reviewed`: exit 0; all required risk reviews complete.
- `node tools/defect-ledger.mjs append --file /tmp/prestige-batch-9-defect-row.json`: exit 0; one closed row appended and generated ledger view refreshed.

No judge, stamping, scheduling, or engine gate battery was initiated. The engine owns current decision hashing and subsequent gates.

Final repaired carrier raw SHA256: `b9c6aec3383722a680d29d0a176b5fef583e499e4dd4cd1f06e5ef5fa322f6f8`.
