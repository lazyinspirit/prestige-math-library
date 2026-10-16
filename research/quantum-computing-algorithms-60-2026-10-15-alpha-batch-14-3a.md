# Batch 14 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-14`.

## Completed level 10 review

`def-qc-circuit-cost-model`: reader:14:1 and refuter:14:1 identify the same fatal ill-defined coordinate. On a one-wire identity, declaring no ancilla or declaring that wire a clean ancilla of an empty data register yields different counts. The original circuit syntax does not determine a partition or target. The exact supplier `def-qc-clean-and-dirty-ancillas`, Definition, requires both; its dirty operator identity implies the clean zero-state identity but supplies no classification of undeclared workspace. Both findings are confirmed fatal and share one closed defect row, `qca60-b14-3a-ancilla-interface`. Repair explicitly makes each coordinate depend on the supplied ordered partition and target satisfying that contract, counts its register, and returns not applicable without that interface. Empty declared registers count zero. No automatic maximum or exclusive clean/dirty classification is inferred. Manifest Definition synchronized; no proof contract or judge stamp exists for this definition. All resource coordinates unrelated to ancillas are preserved.

Actual supplier definitions read: circuit syntax, denotational semantics, elementary resources, clean/dirty contracts, effective encoding, deterministic one-tape machine, partial computation, worst-case complexity. Consumer inventory and dispositions will be recorded below. No substantial missing prerequisite blocks this correction.

## Completed level 11 review

`lem-qc-uniform-family-size-bound`: steps 1.1–2.1 hold by the one-symbol write limit and the contiguous final binary output convention. The bound n+T+1 is conservative, including n=0; every gate record and every unary wire contributes to the complete description. Zero gates and unused wires cannot evade the unary header. No converse to indexed uniformity and no choice principle is used. Risk review complete; the exact machine configuration/output convention is checked through the definitions below.


## Completed level 12 phase review

`lem-qc-acceptance-probability-phase-invariance`: every step and supplier checked. Root pairing is linear first; unit global scalar cancels under modulus. H squared is I and HZH is X; four T gates implement Z on the control, so the two explicit witnesses accept with probabilities one and zero. Other-length gate-free families and empty tuples are valid. No extra controlled access is used. Risk review complete.

## Level 12 normalization repair

`thm-qc-output-acceptance-law-normalizes`, step 4.1, called rank-one coordinate projections “positive.” Under the library's exact `def-non-negative-and-positive-operator`, positive means strictly positive on nonzero vectors, so projections in dimension greater than one fail this claim. Changed to “nonnegative,” as required by the current POVM definition. The theorem Statement is unchanged; no consumer interface changes. Also removed the irrelevant trace assertion from F12's matrix-multiplication citation; F11 already supplies the diagonal trace formula. The proof's norm, Parseval, rank-one density, reduced-density and trace calculations are otherwise sound. Full risk review and checks remain to be recorded.

Normalization risk review is complete: unitary/permutation norm preservation and Parseval prove normalization; both density matrices are explicitly Hermitian, nonnegative and trace one. The partial-trace trace-pairing identity and diagonal trace yield the POVM weights. Empty measured/unmeasured qubit registers have dimension one, and their single empty-string terms preserve every formula. No AC is used. All exact cited definitions/statements were read; the rank-one strict-positivity defect is closed as `qca60-b14-3a-projection-nonnegative`.

## Completed level 13 procedure review

`alg-qc-bounded-error-amplification`: current bytes match the reader-post raw hash `49dce94e05062b77e05f12827de107f0712e24262607039377b73bdcf05c5703`, differing from pre `c4102636a18d03f5dfb9f4dd78ef78849a4b93aa2576d3686abdc11dac5ddb3c`. Accepted the reader's threshold renaming (alpha/beta avoid the model's auxiliary-count a), deterministic loop/record order, exact rational polynomial evaluation, and oracle descriptor agreement check. The global validity domain is explicitly not decided; length-local syntax, clocks and inequalities are checked. Branches, finite loops, output code, port variants and integer threshold are specified. Delta=u/v need not be reduced: u>=1 and v>=2 still hold. n=0 and empty output tuples are admissible; r is positive. Ordinary mode remains the original code; oracle copies descriptors once and shifts only wire indices. Correctness and resources are separately proved. The renaming and execution-order details are audit enrichment; no independent mathematical defect is assigned to this sound procedure. No local algorithm edit was needed.

## Completed level 14 correctness review

`thm-qc-bounded-error-amplification-correct`: all seven steps read independently with the algorithm, cost and oracle definitions, full-list size lemma and actual Chernoff supplier. For fixed basis x, fanout produces a product of identical full-block inputs; disjoint instantiated unitary ports have no private memory, so terminal joint weights factor by finite distributivity. Each Bernoulli parameter is p_C(x). False rejection and false acceptance are contained in the same deviation event with t=r/(2s), including threshold equality on the NO side. The cited additive Chernoff bound applies since r>0, giving 2 exp(-r/(2s^2)); ln(2/delta)<ell(v)+1 gives a strict bound below delta. Deterministic p=0,1 and alpha=1,beta=0 remain covered.

Polynomial clocks bound descriptions, unary width and operation lists; r=2s^2(ell(v)+1) is polynomial because s has fixed degree and v has polynomial bit length. Offset arithmetic, repeated scans and exact rational threshold operations have polynomial one-tape time; depth is at most serialized operation count. Each base ordinary/query record occurs r times; CNOT copies are ordinary. Raw counts are polynomial; charged costs require polynomial base charges, as stated. Base ancillary registers are auxiliary and disjoint from the n input wires; copy gates touch only data relative to those registers, so exact return contracts survive, with target equal to the copy/data operation followed by the tensor product of base targets. Additional input-copy wires are unreturned workspace. No new control/inverse grant or AC is assumed.

Current theorem bytes match reader post `345f9e606a97c700963f73ca615b054a7a544452557bd89a2bd054115375f8e7`; pre was `0fda6e74b84fd5297d126cf8bf46f661c04eab845ad2e13eea921701cc5efe47`. Accepted notation changes and conditional declared-ancilla scaling, which is consistent with the repaired cost interface. No local theorem edit needed. Risk review complete.

## Completed level 15 robustness and page reviews

`thm-qc-bqp-error-robustness`: both directions and the general-threshold construction hold. q is polynomial-time computable and polynomially bounded, so 2^{-q} has a polynomial-length exact rational encoding. The q=0 and q=1 cases use weaker target bounds already met by the original BQP family. For the converse, a fixed finite short-input membership table is legitimate for this fixed promise problem and may ignore measured z. In the general case the same table repairs exceptional short lengths before applying the all-length amplification theorem, and s+3 gives a positive all-length inverse-gap polynomial. The table is an existence assertion, not a uniform extraction algorithm for arbitrary promise descriptions. Promise disjointness ensures no conflicting entries; empty YES/NO sets are allowed. No AC is needed. Current raw hash `58abc1eea6d91fde4578a3024a640ece32155af9198a4379bf2c4097746e8c2a` matches reader post; pre is `1e54308a2ce8295ec77c10fd18d6f6888a5c8713dd1d9f038057279e28b9c6d6`. Retain threshold notation enrichment with no independently established mathematical defect.

The A page's three summary paragraphs accurately state full-list uniformity, finite promises, marginal output law, separate costs, declared return-contract counts, fixed gate alphabet and classical repetition. Retain the reader's ancilla qualification, supported by the repaired definition and correctness theorem. Current page raw SHA256 matches post `7d866fe3b59d6363d5ba5d5f6ef76212d233b37a5d6a4a6c8a14eeea0bfc1657`. Page obligation accepted. Page prerequisites are context, not a new audit of their whole bodies; their actual item interfaces are reviewed above.

## Sources and historical evidence

Read the local cited supplier sections at each actual use; root inner products are linear first throughout. Read [Watrous, Quantum Computational Complexity](https://arxiv.org/pdf/0804.3401), §IV.1 and §IV.2, printed pp.12–13 (PDF pages 12–13; Proposition 3 at page index 12, extracted lines 553–581). Its completeness/soundness definition and repetition argument support the use here. Proposition 3 prints a broader gap-only equality; the current robustness theorem explicitly avoids relying on it. Independently checked all hypotheses of the local additive Chernoff bound: finite space, mutual independence, r>0 and t>=0; its complete proof, especially steps 6.1–7.1, establishes the exact bound used. No source citation substitutes for a local proof.

Frozen pre/post snapshots establish the three reader-touched item hashes and the page change; current item bytes exactly match the reader post for those three. They do not reconstruct every pre-reader source byte. The two cost findings give observed SHA256 `5b8d6589ceb5462eed60eb84340b12ef62eee252faa27e5d765899f7d3cf4d20`, while the frozen pre/post source SHA256 is `a7cf2755d35a66dc36675a989638d5474e26a8d7322990c23688dde69050fca8`. That mismatch is preserved: no claim is made that the reported digest authenticates the snapshot. The actual opened cost definition still contained the exact reported ill-defined coordinate, and its local correction is independently justified by the current exact ancilla supplier. Neither finding is dismissed because of historical differences. No unbound-observation owner-resolution record was supplied or fabricated.

## Consumer checks and outside owner alert

Scanned current items and pages for every dependency/reference use of the changed cost definition. Each direct consumer is listed below. Uses of gate counts, widths, minimum depth, query grants/charges, description size, precision and bit/time separation are unaffected. Ancilla resource records that already say applicable/supplied contract coordinates inherit the explicit interface; they do not require rewriting. `def-qa-22-block-encoding-access-model`, `def-qa-36-adiabatic-resource-model` and `def-qa-34-output-and-cost-types` explicitly distinguish missing/inapplicable fields. The synthesis and arithmetic lemmas name their data maps and reversible cleanup; the walk and HHL items state their own clean-subspace contracts and do not acquire an exact-return coordinate from zero initialization. QA34 resource allocation counts supplied stage allocations, not inferred return contracts. No sound consumer was edited merely for citing the supplier.

Outside-scope alert to owner, batch **57**: `def-qa-33-witness-verifier-interface`, Definition first paragraph, calls A_n a “clean-ancilla register” and states only zero initialization, while its cited `def-qc-clean-and-dirty-ancillas` requires exact return and a data target. A single X gate on an initialized auxiliary qubit is admitted by the written verifier data but violates exact clean return. `alg-qa-33-qma-parallel-majority-amplification` repeats that clean terminology for the same verifier registers. These draft carriers remain read-only in this dispatch. Owner should have batch 57 distinguish zero-initialized verifier workspace from exact returned ancillas, checking the verifier's direct consumers if its Definition is repaired. This terminology alert does not undermine the acceptance law, product experiment, or promised error/resource bounds in batch 14; no outside repair or closure is claimed. It is retained open in the frontier dependency ledger. No published defect was found; no published ledger edit was necessary.

Reader Statement/Definition consumer checks: the amplification algorithm is used by its correctness theorem, the correctness theorem by robustness, and all three by the assigned page. No additional direct reference consumers were found. Their actual uses are reviewed above. The robustness Statement changes only threshold variable names. The normalization repair changes only proof wording and citation accuracy, so it triggers no Statement propagation. Stable IDs, page inventory, and all prior withdrawal records are preserved.

Direct cost-definition consumer dispositions (interface check only, not whole-item audits):

- `alg-qa-19-complete-graph-spatial-search`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-19-hypercube-state-transfer`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-21-segmented-taylor-simulation`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-23-qsp-phase-synthesis`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-27-cks-variable-time-linear-solver`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-29-quantum-expectation-estimation`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-29-variance-aware-monte-carlo`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-32-simon-query-rank-test`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-33-qma-parallel-majority-amplification`: owner alert above; outside scope, left open.
- `alg-qa-35-swap-test-fingerprint`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-36-discretized-path-simulation`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-36-five-local-history-path`: supplier clarification preserves actual cost use; no repair required.
- `alg-qa-dihedral-hidden-subgroup-sieve`: supplier clarification preserves actual cost use; no repair required.
- `alg-qc-bounded-error-amplification`: supplier clarification preserves actual cost use; no repair required.
- `cex-qa-32-oracle-separation-is-not-gate-separation`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-17-walk-access-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-19-hamiltonian-access-cost-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-20-simulation-error-and-cost-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-20-sparse-hamiltonian-oracle-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-21-lcu-input-and-access-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-22-block-encoding-access-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-25-qubitization-access-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-26-hhl-access-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-27-cks-sparse-oracle-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-28-spectral-estimation-access`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-29-coherent-sampler`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-30-sdp-reference-state-access`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-30-sdp-sparse-oracle-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-32-eqp-promise-class`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-32-simon-decision-oracle-promise`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-32-zqp-promise-class`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-33-witness-verifier-interface`: owner alert above; outside scope, left open.
- `def-qa-34-end-to-end-error-contract`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-34-output-and-cost-types`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-35-finite-communication-protocol`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-36-adiabatic-resource-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-36-finite-adiabatic-path-model`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-nonoracle-gate-cost`: supplier clarification preserves actual cost use; no repair required.
- `def-qa-promise-query-instance`: supplier clarification preserves actual cost use; no repair required.
- `def-qc-circuit-optimization-task`: supplier clarification preserves actual cost use; no repair required.
- `def-qc-oracle-full-list-circuit-family`: supplier clarification preserves actual cost use; no repair required.
- `lem-qa-19-hadamard-uniform-state-preparation`: supplier clarification preserves actual cost use; no repair required.
- `lem-qa-27-capped-lower-bound-amplification`: supplier clarification preserves actual cost use; no repair required.
- `lem-qa-29-positive-mean-dyadic-estimator`: supplier clarification preserves actual cost use; no repair required.
- `lem-qa-33-finite-dimensional-unitary-synthesis`: supplier clarification preserves actual cost use; no repair required.
- `lem-qa-33-uniform-programmed-circuit-interpreter`: supplier clarification preserves actual cost use; no repair required.
- `prop-qa-11-known-count-random-gate-accounting`: supplier clarification preserves actual cost use; no repair required.
- `prop-qa-12-amplitude-access-cost-accounting`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-12-arbitrary-phase-query-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-12-exact-success-query-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-12-fixed-amplification-query-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-12-known-amplitude-query-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-12-unknown-amplitude-query-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-17-walk-access-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-19-continuous-walk-resource-accounting`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-22-block-encoding-error-and-query-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-23-qsp-phase-implementation-error`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-23-qsp-query-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-24-qsvt-error-and-resource-bound`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-24-qsvt-query-count`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-25-sparse-no-fast-forwarding-lower-bound`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-26-hhl-amplified-postselection-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-26-hhl-query-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-26-hhl-simulator-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-27-qsvt-inverse-state-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-29-coherent-query-cost-translation`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-29-quantum-expectation-error-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-34-error-budget-allocation-correctness`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-36-adiabatic-path-to-circuit-simulation`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-36-circuit-to-adiabatic-simulation`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-dihedral-sieve-scope`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-finite-abelian-hidden-subgroup-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-modular-arithmetic-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-modular-order-finding-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qa-shor-factoring-cost`: supplier clarification preserves actual cost use; no repair required.
- `thm-qc-bounded-error-amplification-correct`: supplier clarification preserves actual cost use; no repair required.
- `thm-qc-bqp-error-robustness`: supplier clarification preserves actual cost use; no repair required.

## Local checks and handoff

- `reflow` on both locally changed items: unchanged.
- `precheck` on the two local items plus three reader-touched items: 3 proof-bearing items checked, 0 failing; definition and algorithm have no phase proof.
- `rendercheck` on both local items: 2 files, no YAML/math/render errors.
- Initial strict proof-contract check found one stale F3 quote of `thm-qc-computational-basis-orthonormal` in the phase-invariance contract. Refreshed that citation from the actual current Statement; this was quote synchronization, not a mathematical defect. Regenerated normalization/correctness mirrors after local edits. Final `proof-contract --strict`: 6/6 checked, 0 errors, 0 warnings.
- Initial `risk-report` routed three HIGH items and one CRITICAL item. Specific complete reviews were recorded in dependency order. Final `risk-report --require-reviewed`: 0 errors, 6 items routed, all four required reviews complete.
- After all source edits and reflow, one batched `proof-layout` invocation on `items/def-qc-circuit-cost-model.md items/thm-qc-output-acceptance-law-normalizes.md`: 2 items, 4 steps, 0 defects.
- Manifest Definition/Statement mirrors match all current batch-14 carriers, including three stale reader-edit mirrors synchronized here. Decision inventory is exactly the six owed obligations; each reader/flagged decision references the one shared closed cost-definition defect row. Two closed rows were appended through the serialized defect-ledger tool and its generated view refreshed.

Locally edited source items are exactly the cost definition and normalization theorem; neither had a `verification.judge` record. Their existing provenance already describes altered statements/generated proof; no new judgment or certification marker was added. Reader-touched algorithm/correctness/robustness item bytes and the page were retained unchanged. Supporting edits are the owned manifest, proof contracts and authorized ledgers. Current local source raw hashes:

- `def-qc-circuit-cost-model`: `76850fce4f4a784c930434bfcdf3dae133c5c996cd795f9776c7086d91a8d34a`.
- `thm-qc-output-acceptance-law-normalizes`: `15a9d38eb02323175e68d8acbf4989e8097ab323c4ae93f4c9461df714cff3eb`.

No local mathematical blocker remains for the six routed obligations. The open batch-57 terminology alert requires its owner disposition; no escalation or repair outside this batch is cleared by this report. The engine owns decision stamping, scheduling and all gate batteries. No judge, stamp, dispatch, engine transition, publication, push, or gate battery was initiated.


## Owner followup: cycle 1 genuine ledger-reference closure

Original report and decisions exact bytes are archived in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-ledger-repair/batches1-30/originals`. This followup records current focused review and supplemental gate decisions for existing risk-review discoveries; it does not change native reports, original observations, snapshots, source carriers or prior check results.

- `gate:qca60-b14-3a-projection-nonnegative`: Confirmed the exact local terminology defect: a coordinate projection with nontrivial kernel is not strictly positive. Current 4.1 uses nonnegative projections summing to I, exactly the current finite-POVM interface. The diagonal trace and partial-trace equations give the stated weights, including the one-element empty-output case; Statement is unchanged.

Root must bind current decision subject hashes after writers freeze. No tests, validators or gates were run in this followup.


## Owner followup: cycle 1 current-content historical disposition

Exact original report/decisions bytes are archived in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-ledger-repair/batches1-30/originals`. The owner explicitly authorizes current_content_review for historical-only touched obligations with unreconstructed original source bytes.

- `touched:14:thm-qc-bounded-error-amplification-correct`: Current complete repetition argument and page interfaces reviewed: basis fanout gives disjoint product blocks; fixed unitary oracle ports have no persistent private memory; finite output sums factor; both error events lie in the additive Chernoff tail with t=r/(2s). The actual supplier gives 2 exp(-2t^2/r), and rational delta=u/v yields ln(2/delta)<ell(v)+1. Full-list copying, offsets, ordinary/query separation and polynomial clocks are explicit. Declared auxiliary exact-return contracts remain valid on disjoint base blocks, while copy wires are only total width. Read actual algorithm, cost/clean-dirty/promise/uniform/oracle definitions, output normalization, size lemma, Chernoff proof and robustness proof. The page accurately describes those current claims. No historical consumer/page defect row is invented; the physical cost-definition defect retains its own row and decisions. Owner-authorized current-content review: the immutable snapshots identify prior carrier digests but do not reconstruct the exact original source delta. Preserve that historical uncertainty. I independently reviewed the full current argument and its actual prerequisites; current soundness does not assert a defect or repair on unknown historical bytes.
- `page:14:uniform-circuit-families-promise-problems-and-complexity`: Current complete repetition argument and page interfaces reviewed: basis fanout gives disjoint product blocks; fixed unitary oracle ports have no persistent private memory; finite output sums factor; both error events lie in the additive Chernoff tail with t=r/(2s). The actual supplier gives 2 exp(-2t^2/r), and rational delta=u/v yields ln(2/delta)<ell(v)+1. Full-list copying, offsets, ordinary/query separation and polynomial clocks are explicit. Declared auxiliary exact-return contracts remain valid on disjoint base blocks, while copy wires are only total width. Read actual algorithm, cost/clean-dirty/promise/uniform/oracle definitions, output normalization, size lemma, Chernoff proof and robustness proof. The page accurately describes those current claims. No historical consumer/page defect row is invented; the physical cost-definition defect retains its own row and decisions. Owner-authorized current-content review: the immutable snapshots identify prior carrier digests but do not reconstruct the exact original source delta. Preserve that historical uncertainty. I independently reviewed the full current argument and its actual prerequisites; current soundness does not assert a defect or repair on unknown historical bytes.

This followup does not certify old byte history or rewrite native evidence. Root retains hash binding after freeze. No tests or gates were run.
