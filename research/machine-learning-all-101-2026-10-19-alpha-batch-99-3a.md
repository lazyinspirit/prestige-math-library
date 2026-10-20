# Batch 99 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-99`.

Scope: four touched obligations; no reader/refuter findings, page obligations, or foreign gates. Initial risk-report passed and routed eleven HIGH/CRITICAL reviews. Reviews are independent of earlier verdicts.

## Completed level 3 reviews

### `alg-budgeted-verifier-guided-generation`

Reviewed both supplied-operation procedures and def-verifier-and-generation-protocol. N>=1 ensures a first best candidate; the finite strict total order resolves ties, including repeated responses. Rejection returns first acceptance or failure after N; selection makes no correctness assertion. Random sources and exact comparisons are supplied, not constructed. DeepSeek-R1 v1 §2.3.3 is background for rejection sampling; the local procedure defines the budget and tie rule. No choice, convergence, or perfect-verifier assumption is hidden.

Current carrier accepted without edits; risk review complete.

### `lem-finite-response-likelihood-ratio-change-of-measure`

Read both proof steps and exact finite-sum and probability definitions. At q(y)=0 support inclusion and nonnegativity force p(y)=0; otherwise cancellation is legal. Multiplication by any finite real f and the finite sum preserve equality. Taking f=1 uses normalization of p. Singleton support and zero target masses are valid; failed support inclusion is explicitly excluded. No arbitrary-space Radon–Nikodym theorem or choice is invoked. Sutton–Barto §5.5 provides the importance-ratio context, not a missing proof.

Current carrier accepted without edits; risk review complete.

### `lem-finite-response-score-gradient-identities`

Read all three steps and the actual fixed-support policy, derivative, gradient, binary derivative-algebra, chain-rule, log-derivative and finite-sum statements. Positivity throughout open U permits log differentiation; induction extends binary sum differentiation to each finite coordinate sum. The reward is fixed in theta. Normalization differentiates to zero; weighted differentiation gives grad J. Singleton support and constant rewards give zero; zero masses outside support never enter a logarithm. No interchange of infinite sums, trajectory law or choice is needed. Sutton–Barto Chapter 13 supplies score-method context.

Current carrier accepted without edits; risk review complete.



## Completed level 4 reviews

### `alg-finite-group-relative-policy-update`

Read the full procedure and actual finite policy/ratio prerequisites. Enumerated nonempty prompts, G>=2, T,K>=1 and positive policy/reference masses make all data finite; zero variance has its own branch. Frozen old-policy data, exact sequence ratios, signed clipped minimum and forward KL are explicitly specified. Both undefined-gradient and invalid-update branches return the previous valid parameter. Exact total gradient-decision and membership oracles are supplied assumptions, not claimed computable for arbitrary U. This finite definition asserts no convergence or unbiasedness. DeepSeek-R1 §2.2.1 supplies background; its sampled KL is distinguished from this exact finite KL; PPO equation (7) matches clipping.

### `lem-budgeted-verifier-generation-termination-and-calls`

Read all three proof steps against both algorithm modes. Rejection advances a bounded counter until first acceptance or N failures. Best-of-N running maximum preserves the least maximizer under the supplied strict total order, even for repeated candidates and all equal scores. N=1 uses one draw/evaluation and zero comparisons. At each additional candidate one exact three-way score comparison and at most one tie comparison suffice. Costs are the sum of actual finite supplied costs plus finite bookkeeping; no uniform oracle cost or perfect correctness is inferred. Independence is unused pathwise.

### `thm-group-centered-score-estimator-factor`

Independently checked all four steps, the exact score identities, finite scalar-expectation and linearity statements, independence definitions and field distributivity. The expanded pair sum factors coordinatewise because i and j are distinct independent draws; the score factor is zero. Exactly G diagonal terms survive in G^-2 sum_ij, giving grad J/G and therefore (1-1/G) grad J after subtraction. All leave-one-out terms are off diagonal; G>=2 permits division by G-1. G=2 Bernoulli p=1/2 with reward indicator gives expectations 1/2 and 1; singleton support and constant rewards give zero. Reader expansion is sound audit enrichment of an elementary finite distributivity step; no statement change, standard-deviation normalization or frozen-policy unbiasedness is asserted.

Touched group-centered theorem: `reviewed_no_defect`, `change_kind: audit_enrichment`, no defect IDs. Current raw SHA256 equals reader-post eeaf31c13a7119a8abc5108f232528c0d796f52335f1fecf553051cb401c570b; pre-reader was 639a8c92bcc4c876c031de1410e225e70272924345fb427259da020a12afb54d. No new item edits. 

## Completed level 5 reviews

### `lem-finite-group-relative-update-termination-and-calls`

Checked all four steps and exact algorithm, positive-square/sign, nonnegative square-root, finite logarithm and ordered-field/natural-inverse suppliers. Finite variance radicand is nonnegative by the reader-added induction; s=0 avoids division and s>0 gives finite advantages. Shared fixed positive support makes old-policy and reference denominators positive. Clipping and minima have finite values even where differentiability fails; the supplied total gradient oracle handles that case. The invariant starts at theta0 in U and updates only after membership acceptance, returning the old valid parameter on either failure. At most T outer loops use MG draws/rewards and K gradient/domain attempts each; early exit reduces counts. Costs are actual finite oracle costs, not an asserted uniform complexity bound. Reader additions expand immediate nonnegative-sum reasoning; no defect or claim change.

Touched verdict: `reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`.

### `thm-independent-generation-success-and-verifier-error`

Read all three proof steps and exact binary-verifier, finite-call, probability/measure, finite-sum and independence suppliers. Part 1 uses the product of independent failure events and requires A=C. Part 2 is inclusion in the union of false-acceptance events followed by finite subadditivity; independence is unnecessary and bounds above 1 remain valid. Part 3 sums conditional failures only over positive-mass histories; omitted null histories contribute zero. Nonnegative history weights yield Pr(F_i)<=(1-p)Pr(F_(i-1)), then induction. p=0 gives the trivial bound 1, p=1 gives zero, N=1 reproduces the hypotheses; no history division by zero. Reader induction/weight explanation is valid audit enrichment of an immediate finite-order argument, with unchanged statement.

Touched verdict: `reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`.

All four archived item preimages under `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` match their native pre raw SHA256 values. Diffed each against its unchanged reader-post current carrier. Historical deltas are known. No new repairs or blockers. 

## Level 6 reviews

### `rem-reasoning-training-evidence-and-evaluation-targets`

Read the entire prose and its actual current finite-generation, score-centering and trajectory suppliers, including all three steps of lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative and the offline-dataset definition. The remark distinguishes empirical designated single-sample correctness, oracle candidate-set success, and accuracy conditional on accepted return. It states no equality among them, and does not infer unnormalized same-policy unbiasedness for random standard-deviation division, clipping or reused old-policy samples. Its offline statement explicitly retains AC, stationary policies, shared fixed start and transition/reward law, full-horizon coverage and target integrability. The trajectory proof cancels common factors on behavior-positive atoms, transfers coverage to prefixes and integrates positive/negative parts; no unsupported offline safety follows. Empty accepted-output samples leave a conditional accuracy undefined; the remark only describes the statistic, while the worked example has strictly positive acceptance.

Risk review complete; no edit or blocker. 

### `ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy`

Read all four verification steps and the exact generation, finite-call, independent-success, finite-sum, finite scalar-expectation, linearity and field suppliers. Masses 1/4+3/8+3/8 sum to 1; product-law normalization and marginals follow by finite distributivity, including M=1 with empty product 1. Linearity gives expected empirical pass@1=1/4. Two independent failures give oracle pass@2=7/16; rejection accepts with probability 1-(3/8)^2=55/64 and returns correct with probability 1/4+(3/8)(1/4)=22/64, so conditional accuracy=2/5 with nonzero denominator. Matched exact archived preimage and current reader-post hashes: N=2 clarifies the already given two-candidate protocol, and conditional accuracy is in fact (1/4)/(5/8)=2/5 for every positive rejection budget. Finite-sum induction is sound audit enrichment, not a repaired false numerical claim. The only actual external reference consumer is the assigned B-page inventory, which is unaffected.

### `ex-perfect-and-false-positive-verifiers`

Read both verification steps and exact finite-generation/call and success/union-bound prerequisites. Perfect A=C gives success iff at least one of two independent draws is c, with failure (1/4)^2 and success 15/16. Accept-all makes the first draw the output and its incorrectness event exactly w with probability 1/4. The per-draw false-acceptance mass is 1/4, so N epsilon=1/2 is a valid loose bound; no equality or improvement claim is inferred. The iff is checked in both directions using the first-acceptance stop rule. Response law is normalized and acceptance conditioning is unnecessary in this example.

All eleven required risk reviews are complete. The touched example is `reviewed_no_defect` / `audit_enrichment` with no defect IDs. No mathematical repair or open local escalation. 

## Focused checks and contract synchronization

The initial finite-smoke run passed nine fixtures and reported `smoke-assertion-mismatch` for the pass/selected-accuracy example: the contract still quoted the pre-reader Example. Updated only its `finite_smoke[0].asserts` to the complete current Example. This is a mechanical evidence synchronization, not a mathematical defect, and creates no defect-ledger row. Precheck and rendercheck passed all four touched carriers. Item bytes remain unchanged from the reader-post snapshot.

## Sources and metadata normalization

Independently consulted [DeepSeek-R1 v1](https://arxiv.org/pdf/2501.12948v1), §2.2.1 equations (1)–(3), §2.2.2, §2.3.3 and §3 Evaluation Setup (printed pp. 5–6, 10, 12). These give group reward normalization, old-policy clipping, rule-based rewards, correctness-filtered multiresponse sampling and empirical pass@1 context. The library defines its own finite exact forward KL and supplied-oracle control flow; no identity with the paper's sampled KL estimator is assumed.

Read [Sutton–Barto draft](https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf), §5.5 equation (5.3) and coverage premise (printed pp. 111–113), and Chapter 13 §§13.2–13.4 (printed pp. 268–272): shared-transition cancellation, finite action score terms, and action-independent baseline cancellation. The assigned finite identities have local proofs.

Read [PPO v1](https://arxiv.org/pdf/1707.06347v1), §2.2 equation (5) and §3 equation (7) (printed pp. 2–3). The latter gives the signed minimum of ratio-times-advantage and clipped-ratio-times-advantage. Normalized the bibliography section labels in `alg-finite-group-relative-policy-update`, `lem-finite-group-relative-update-termination-and-calls`, and `rem-reasoning-training-evidence-and-evaluation-targets`: the original paper titles its clipped-surrogate section §3, rather than §2.3. This is source metadata normalization; no Statement, Definition, proof, dependency or provenance changed. It requires no defect row. The touched lemma's raw hash consequently differs from reader-post solely in this bibliography label; its mathematical body is unchanged. The other three originally touched carriers still exactly match their reader-post raw hashes.

Actual local supplier statements read include the policy/protocol definitions; finite sums/products; probability and measure; random-element and sigma-algebra independence; finite scalar expectation and integrable linearity; total derivative, gradient, derivative algebra, chain rule and logarithm derivative; field and ordered-field clauses; zero multiplication, sign rules, positive natural embeddings/inverses, square roots, and natural logarithm. The offline context was checked against the current dataset definition and the complete trajectory-ratio proof, plus AC, absolute continuity and integrability definitions. No outside supplier repair was needed.

## Consumer, presentation and ownership review

The only Statement/description delta is the reader's explicit two-candidate rejection budget. Actual items/library reference search found only its own carrier and the assigned B-page inventory. The B page lists the same ID, remains draft, has an empty body and preserves `page_layout: compact-v1`; no consumer correction is needed. The other touched Statements are unchanged. Owned high-risk statements/descriptions are complete and link-free with separate reference sections. No diagrams occur in the routed carriers; these finite calculations need no diagram.

No confirmed mathematical defect or defective published supplier was found. No defect-ledger or published-ledger row is appropriate for the routine proof expansions, mechanical stale assertion, or bibliography metadata normalization. No new item, manifest, provenance or judge record was changed. All four authentic archived preimages match the native pre-reader hashes. All four decisions are `reviewed_no_defect`, `change_kind: audit_enrichment`, with empty defect IDs. The touched lemma additionally has the documented bibliography normalization. No historical uncertainty remains for these deltas.

Existing cross-batch records are preserved. The policy definition's actual finite fixed-support interface supports the score lemma and group algorithm. Open native entries for policy-gradient page disposition and batch-84 interface review remain owner/engine follow-ups; this review does not certify their native coverage. Current consumer evidence is recorded in `briefs/tasks/frontier-dependency-ledger.md`. No proposed withdrawal was removed.

## Validation and handoff

Initial risk-report passed; the completed review pass with `--require-reviewed` has all eleven HIGH/CRITICAL reviews and zero errors. After the documented assertion-excerpt synchronization, finite-smoke passed all ten fixtures with zero errors. These finite checks are not mathematical proofs. Precheck passed all four originally touched proofs; rendercheck passed those four carriers. The final metadata edits are followed by focused checks below.

Disk state identifies the active dispatch as `3a-adjudicate:3a-batch-99`, covers only 99, without an end time; the run stage is `3a-split`. Git HEAD at inspection: `6d26c7507b`. No old handoff established active work. Engine-owned hash stamping, gates and transitions remain with the engine. No local mathematical blocker or escalation.

Final checks after bibliography normalization: risk-report `--require-reviewed` passed (14 routed items, eleven required reviews); finite-smoke passed ten fixtures; precheck on the six relevant carriers found four applicable proofs, all passing; rendercheck passed all six carriers. Final batched `node tools/proof-layout.mjs` on the six relevant item paths: six items, fifteen steps, zero defects. Decision inventory equals exactly the four owed touched obligations. No engine gate or judge cycle was initiated.
