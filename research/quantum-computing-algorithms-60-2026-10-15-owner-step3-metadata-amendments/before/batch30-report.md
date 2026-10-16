# Batch 30 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`. Group: `batch-30`.

All five routed obligations are decided: two accepted reader repairs, one amended repair, and two confirmed fatal citation findings repaired locally. Eight of nine required HIGH/CRITICAL risk reviews are complete. The compilation review remains **open/escalated** because the current batch-12 commutator-error supplier is false; the exact owner alert and witness are below. The required risk check therefore fails for that item. No judgment, stamp, gate battery, publication or workflow transition was performed.

Reviewed scope, reader report/findings, refuter report and pre/post snapshots. Exactly three touched obligations and two refuter obligations are owed; no reader/page obligations. Review follows generated dependency order.

Completed level 0 reviews:

`lem-qa-pi-over-two-exceeds-sqrt-two`: Read all three proof steps and the seven supplier statements. At x=sqrt(2), k=0,1 cancel and the tail has ratio at most 1/15, hence tends to zero; its lower alternating partial sum is 1/6-1/90=7/45>0. x is strictly between 0 and 2; strict cosine decrease and the unique zero gamma in (0,2) imply x<gamma=pi/2. Checked square-root positivity and endpoints; no choice or unproved numerical estimate is used. Reader and refuter report no finding for this item.

`thm-qa-projective-operator-closeness-bounds-output-distribution`: Read all three proof steps and ten supplier statements. Parseval gives normalized laws for unit inputs, reverse triangle and real Cauchy-Schwarz give TV<=||Upsi-lambda Vpsi|| with constant one. Scalar multiplicativity preserves each output weight for every unit lambda. Operator-norm domination holds on the nonzero domain; taking the infimum is valid because the fixed TV is a lower bound of the nonempty phase family. Includes epsilon=0, one-dimensional spaces and zero coordinates; no attained infimum or choice is assumed. Reader and refuter report no finding for this item.

Sources: current local supplier Statement/Definition sections listed in each carrier; no external theorem is needed for these elementary arguments. No carrier edit, defect or blocker found at level 0. Next: factorization and tensor-extension review.

Level 4 completed: factorization touched obligation is `amended_repair` (local matrix trace replaces the reader’s external-only L2 inference; exact Statement preserved). De Wolf §4.5, https://arxiv.org/pdf/1907.09415, PDF pp.44–45, lines 2168–2361 checked in full. Added gate definitions as actual suppliers; level becomes 8 without changing downstream levels. Tensor-extension review passes: orthonormal spectator expansion, attained maximum, and two-sided unitary-conjugation inequalities cover T=0 and nonzero spaces. Both complete risk reviews are in the contract. Next: SWAP citation and cost-model obligation.

Level 8 SWAP: `refuter:30:1` confirmed fatal as an inaccurate cited statement, independently of the valid XOR identity. Corrected F3/dependency/contract to the exact product-basis theorem. The existing tensor-register definition and the theorem’s specified factor bases match two ordered qubits. No Statement change. Level 9 cost definition: accepted the reader’s adjoint-phase unit-cost extension; forward cost contracts are preserved. Next: circuit correctness risk review and inverse-cost decision.

Level 11 correctness completed: accepted reader repair. The chronological-list semantics, distinct-wire embedding, inverse-list definition and unit-cost adjoints support each inference; n=0 and all computational basis inputs are covered. The current proof independently supplies the basis-control invariant, consistent with the amended factorization lemma. No Statement or Definition changes in adjudication, so no new consumer-interface changes. Next: truncation estimate and its second refuter citation.

Level 12 truncation completed: `refuter:30:2` confirmed fatal as a citation mismatch; corrected only F15’s supplier and matching metadata. The bound is sound: diagonal difference norm, unitary telescoping, n-s+1 multiplicity, finite geometric sum, exact m>=n branch, and ceiling/min cutoff checked. The full risk review is complete. Next: finite-set compilation, truncated gate count and worked example.


Owner alert / open prerequisite: batch 12, `lem-qc-commutator-error-cancellation` → `thm-qc-solovay-kitaev-error-and-resource-bound` → owned `thm-qa-qft-finite-gate-set-compile-cost` (F8, steps 1.3 and 5.1). The producer lemma's asserted bound is false. Its step 2.1 fixes W and its step 3.1 fixes V; summing them does not bound the simultaneous replacement. A valid sequential replacement instead gives

$$2\eta\|W-I\|+2\eta\|\widetilde V-I\|\le4\eta^{3/2}+2\eta^2.$$

This is at most $(4+1/2)\eta^{3/2}$ for $0\le\eta\le1/16$, so with the balanced-commutator error 40 the recurrence constant 64 appears sufficient. This attempted closure does not repair the false producer Statement or current SK F3/step 2.1. Required owner decision: assign batch 12 a supplier-first correction of the cancellation bound, synchronize the compiler theorem's exact citation and induction, then return this consumer for current-proof risk review. Neither producer was edited here.

Exact counterexample (arithmetic check, not a numerical-only observation): put $\eta=1/65536$, $t=1/512$, $u=1/131072$. Let $Q_x(v)=((1-v^2)I+2ivX)/(1+v^2)$ and $Q_y(v)=((1-v^2)I+2ivY)/(1+v^2)$ for the Pauli matrices X,Y. Set $V=Q_x(t)$, $W=Q_y(t)$, $\widetilde V=VQ_x(u)$ and $\widetilde W=WQ_y(u)$. These are SU(2) matrices. Their squared distances satisfy $\|V-I\|^2=\|W-I\|^2=4t^2/(1+t^2)\le\eta$ and $\|\widetilde V-V\|^2=\|\widetilde W-W\|^2=4u^2/(1+u^2)\le\eta^2$. Writing each matrix as $aI+i(b_xX+b_yY+b_zZ)$, the squared operator norm of a difference is the sum of its four squared real coefficient differences. Exact rational multiplication of the four commutator factors gives squared distance

$$\frac{23475458203516584414319109292572585494811898806272}{411382416563737285624970939337722103004039285311150311812890625}>\frac1{17592186044416}=16\eta^3.$$

Thus the distance exceeds $4\eta^{3/2}$ while every hypothesis holds. This witness is below $64^{-2}$, so it is not confined to unused large radii. The two exact inequalities for hypotheses and the strict comparison were checked with Python `fractions.Fraction` arithmetic. The Pauli-product cross term has sign minus in this $+i$ convention; this convention was used in the calculation.

Source consulted in full for this issue: Dawson–Nielsen, [The Solovay–Kitaev Algorithm](https://arxiv.org/pdf/quant-ph/0505030), §4.2, Lemma 1 and proof, PDF p.9, equations (14)–(20), lines 404–513. It supplies a bound with higher-order terms, not the local asserted constant 4. Producer raw SHA-256 bindings:

- `lem-qc-commutator-error-cancellation`: `7fbc5497e392c7a7775626874ee23d8e52cff6553cf0d207999e84c4334d4f77`.

- `thm-qc-solovay-kitaev-error-and-resource-bound`: `bafcc95a1b7f500085bccb2f86726bdb3f56d41bd56b97941e311bb442021b47`.

Compilation risk remains open/escalated. This is an owner alert from risk review, not an invented routed decision. All five originally owed decisions remain separately present.

Remaining level 13 reviews completed: the truncated gate count has the correct empty-sum and capped-cutoff cases and needs epsilon>=n^-c for the logarithmic claim; the worked N=4 example has the correct four columns, PF4P conjugation, exact sqrt(2) norm difference, pi/2 upper bound and 4/3 versus 6/5 gate counts. Neither depends on the escalated QC12 compiler branch. No carrier edits or additional defects found. Their risk reviews are complete. Next: synchronize owned dependency records, append defect dispositions, then run focused local checks.

Final dispositions and durable evidence:

| Obligation | Verdict | Closed defect |
|---|---|---|
| `touched:30:lem-qa-binary-qft-product-factorization` | `amended_repair` | `qca60-b30-3a-local-preswap-proof` |
| `refuter:30:1` | `confirmed_fatal` | `qca60-b30-3a-swap-product-basis` |
| `touched:30:def-qa-qft-gate-cost-model` | `accepted_repair` | `qca60-b30-3a-inverse-cost-premise` |
| `touched:30:thm-qa-exact-binary-qft-circuit-correct` | `accepted_repair` | `qca60-b30-3a-inverse-count-premise` |
| `refuter:30:2` | `confirmed_fatal` | `qca60-b30-3a-truncation-product-basis` |

Historical bindings: the cost definition and correctness theorem still match their exact reader-post raw hashes, `680a0db2e6f8e89f9e8c172366b0e7fbab937a25b2e34f029f62256ce28bda35` and `4a9fe13e6efd49107db6a89388474833658367e9c777e1fbacea795ea05560ec`. The factorization pre/post raw hashes differ (`861ddea0…` to `b2f7393f…`); the amended current proof is independently reviewed rather than accepted merely on the reader’s verdict. Each refuter observed fingerprint exactly equals SHA-256 of the canonical JSON reader-post carrier triple (item, contract, manifest hashes): `7c8d67d5…` for SWAP and `f9ea0469…` for truncation. Undoing only our citation replacement recovers their exact reader-post raw hashes (`63e6623b…`, `67def376…`). These are bound findings, with no missing-byte historical disposition.

Files edited by this adjudication: three item carriers (factorization, SWAP, truncation), batch-30 proof contracts, batch-30 manifest and cross-batch dependency input, the two task-named outputs, and five appended closed local defect-ledger rows. The dependency refresh tool updated the derived unified ledger. No library page, published carrier, other batch’s item or producer contract was edited. No defective published supplier was identified, so the published-consumer ledger needed no change. No proposed withdrawal was removed.

Consumer checks: the reader’s cost-model Definition extension affects direct users in batch 30 (exact/truncated algorithms, correctness and count theorems, compilation and the worked example) and batch 55 (`thm-qa-dihedral-sieve-scope`, F5). Their current uses retain the forward positive-sign circuit and counts; the inverse clause in the correctness theorem now cites the adjoint-cost premise. Our adjudication changes no Statement or Definition, and the added factorization gate suppliers keep every consumer’s public interface intact.

Checks actually run:

- Reflow on all three edited items: unchanged, including the final factorization correction.
- Precheck: all three edited proofs pass; final factorization rerun also passes.
- Strict proof-contract check on all 11 scoped proof carriers: 0 errors, 0 warnings after correcting an accidental malformed F1 link introduced during dependency editing. No mathematical defect row was created for that mechanical edit.
- Rendercheck: all three edited carriers pass; the final factorization rerun also passes.
- Final batched `node tools/proof-layout.mjs items/lem-qa-binary-qft-product-factorization.md items/lem-qa-swap-is-three-cnot-circuit.md items/thm-qa-truncated-qft-operator-norm-error.md`: 3 items, 10 steps, 0 defects. No item edits followed this command.
- `node tools/frontier-dependency-ledger.mjs refresh --run quantum-computing-algorithms-60-2026-10-15`: refreshed and deduplicated. The two QC12 compilation edges are open with the exact owner alert.
- `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-30.proof-contracts.json`: initial routing read. The final `--require-reviewed` check reports exactly one error, the intentionally open compilation risk review; all other required reviews are complete.

Handoff remains blocked on the batch-12 supplier-first correction described above. The proposed weakened bound fits constant 64, but no producer correction or owner resolution has occurred in this dispatch. The compilation risk must remain open until the corrected current supplier proof, exact citations and compiler induction have been reviewed.
