# Batch 25 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-25`; covers: `25`.

## Disposition and scope

No mathematical defect or unmet mathematical prerequisite was found. The authoritative scope has no touched items, touched pages, reader findings or refuter findings. Therefore no decisions are owed, and the task-named decisions file has `decisions: []`. No verdict is invented for an untouched, unflagged carrier. All seven required HIGH-risk reviews are complete in `research/non-ml-math-remaining-81-2026-10-18-batch-25.proof-contracts.json`.

Read the current nine item carriers, their exact cited dependency statements and relevant proofs, both batch pages, reader report/findings, refuter artifact, manifest and contracts. Review followed the generated item dependency order. Both definitions were checked as prerequisites: finite nonempty alphabets, nonzero finite-dimensional registers, ideal public authentication, common abort, explicit transcript and strategy-specific normalized output. Conditional outputs are formed only for positive acceptance probability. The local distance convention is half the trace norm; correctness is unconditional mismatch probability and secrecy is acceptance-weighted conditional distance. Only finite choices are used.

The pre/post snapshots have equal item/contract/manifest records and equal page records. A direct SHA-256 comparison of current raw bytes with the post snapshot passes for all nine items. Thus there is no reader repair delta to accept, amend or revert. Only seven `risk_review` objects were added; items, pages, manifest, provenance and prior verification records were left unchanged.

## Mathematical evidence in dependency order

1. **Level 0 — `lem-qkd-classical-key-copy-map-is-channel`.** Steps 1.1–3.1 and F1–F6 are sound. The displayed adjoint sends only output slot `(k,k)` back to input slot `k`, giving `sum_k L_k†L_k=I`. The finite Kraus supplier proves complete positivity, and rectangular trace cyclicity proves trace preservation for every input operator. On classical inputs the action copies the label and keeps spectator factors. Singleton keys, one-dimensional spectators and zero input work. No arbitrary-state cloning is asserted.

2. **Level 0 — `lem-qkd-trace-norm-adds-over-classical-blocks`.** Both steps and F1–F4 are sound. Self-adjoint blocks are normal, have orthonormal eigenbases and real eigenvalues under the root linear-first convention. Their product eigenvectors form an orthonormal basis of the full direct sum. Absolute eigenvalue sums give the trace-norm identity, including zero blocks and repeated eigenvalues. Distinct Eve blocks need not commute. Empty index sets and zero-dimensional Eve are outside the stated domain.

3. **Level 1 — `lem-qkd-copy-replacement-distance-is-correctness-error`.** Steps 1.1–3.1 and F1–F6 are sound. Positive marginal blocks sum to trace one, so all distance arguments are density operators. Each off-diagonal difference block is positive `R^{a,b,t}`, while diagonal slot `(a,a,t)` is minus the positive sum over `b≠a`. Each sign class contributes the mismatch mass. Dividing the total norm by two gives exact equality. All-correct and fully mismatched cases give zero and one, respectively; singleton keys and vanishing blocks introduce no exception.

4. **Level 2 — `lem-qkd-abort-aware-ideal-output-is-state`.** All three steps and F1–F6 are sound. Positive accepted blocks normalize when divided by positive acceptance probability; summing out classical labels preserves positivity and trace. Uniform key factors have trace one. Accepted and abort ideal masses are `p_acc` and `1−p_acc` on orthogonal slots. At zero acceptance each positive accepted block has trace zero, hence vanishes by its nonnegative spectrum. The ideal output then equals the real abort-only state without defining a zero-probability conditional state. Always acceptance and singleton keys also work.

5. **Level 3 — `thm-qkd-composable-secrecy-sum-bound`.** Steps 1.1–2.1 and F1–F6 are sound. Common abort cancellation and homogeneity give acceptance probability times accepted real-ideal distance. The replacement lemma applies to the normalized accepted state. Copying classical Alice blocks preserves the list of nonzero self-adjoint difference blocks, establishing exact distance equality for those inputs. Triangle inequality and acceptance weighting yield the stated sum. Applying this pointwise proves the uniform-strategy conclusion. No generic channel-isometry claim, robustness claim or concrete implementation security is inferred.

6. **Level 4 — `ex-qkd-abort-weighted-secrecy-distance`.** All three verification steps and F1–F5 check. Real masses `1/4,3/4` normalize; ideal accepted masses are `3/8,3/8`. Difference eigenvalues `±3/8` give full distance `3/8`. Alice's accepted difference has eigenvalues `±1/2`, giving conditional distance `1/2`; multiplication by `3/4` gives secrecy `3/8`, with correctness zero. The bound is attained.

7. **Level 4 — `ex-qkd-secrecy-and-correctness-are-independent`.** Both steps and F1–F4 check. The complementary uniform law has uniform Alice marginal, mismatch probability one and orthogonal real/ideal supports, giving errors `(0,1)` and distance one. The deterministic shared law has zero mismatch and difference eigenvalues `±1/2`, giving secrecy and full distance `1/2`. These witnesses refute both implications between perfect correctness and perfect secrecy; they do not assert statistical independence of events. Both states normalize and attain the sum bound.

Each item's complete risk review records its actual derivation, exact supplier use, hypotheses, boundary cases and reader/refuter disposition. No repair-confidence field is needed because no mathematical repair was made.

## Sources and dependency context

- [Watrous, The Theory of Quantum Information](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), §1.1.3 Eq. (1.181), PDF p. 41: checked the singular-value/trace formula. §2.2.2 Theorem 2.22, PDF pp. 89–91: checked the Kraus characterization and the full Kraus-to-complete-positivity implication. Local proofs establish the block identities directly; Watrous's terminology for unhalved state distance does not override this batch's explicit half-trace convention.
- [Portmann–Renner, Cryptographic Security of Quantum Key Distribution](https://arxiv.org/pdf/1409.3525), §4.2 Eqs. (12)–(13), §4.3 Eqs. (14)–(15) and complete Theorem 4.1 proof, PDF pp. 23–25: checked common abort, acceptance weighting, unconditional mismatch and the copied-key hybrid. The local replacement lemma proves its stronger exact equality directly. The printed final source display has an abort/accepted marginal superscript inconsistency; the preceding formulas and argument identify the accepted marginal, as the local proof correctly does.
- [Renes, Quantum Information Theory](https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf), §8.3 Eqs. (8.7)–(8.10) and complete Proposition 8.3.1 proof, PDF pp. 137–138 (printed pp. 134–135): checked the parallel accepted-state comparison and correctness/secrecy sum argument. Its final display has the same marginal superscript inconsistency; no such substitution is imported locally.

The two QKD page summaries agree with their carriers. Read the required secrecy page and its current leakage and weak/strong secrecy definitions: classical finite mutual information in nats and its normalized/unnormalized asymptotic limits are distinct from this batch's abort-weighted quantum trace distance. The required QRE page is navigation context; no QRE, DPI, SSA or MI-to-trace-distance implication supplies any QKD proof step. Existing owned cross-batch rows already record these page-only uses and retain the removed logical QRE edge. No dependency, consumer interface or ledger status changed, so no refresh or consumer repair was needed.

Bookkeeping caveats preserved for the owner: the contract's `unresolved_supplier_checks` still contains the historical absent-secrecy-page escalation, whereas the current page exists and the cross-batch ledger already records its owner-resolved navigation disposition with durable evidence. This review does not clear or overwrite that historical escalation. Some sum-theorem boundary notes retain old `2.1–4.1` locators; the actual proof ends at 2.1, and the new risk review uses current locators. These stale annotations expose no missing mathematical premise and are not new routed findings.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-25.proof-contracts.json`: exit 0; seven HIGH items, zero errors.
- After the reviews, the same command with `--require-reviewed`: exit 0; seven HIGH items, zero errors.
- Pre/post records and all nine current item raw hashes checked as described above. Report and decisions JSON completeness checked locally.

No item changed, so reflow, precheck and the changed-item proof-layout command were not applicable. No defect-ledger row, published-supplier alert, published-ledger edit or withdrawal was warranted. No mathematical blocker or uncertainty remains in the assigned review. No judge, stamp, certification, agent dispatch or gate battery was run. The engine owns hashing decisions and subsequent gates.
