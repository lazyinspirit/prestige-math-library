# Current21 cross-batch edge recommendations

Metadata-only inspection: every edge is explicitly in current canonical `deps`. No supplier or consumer proof was re-audited, and no edge was marked verified or applied. Native inventories, verdicts, individual owner resolutions and existing ledger records were inspected. There are17 edges whose two native endpoint batches are currently accepted;4 edges await batch109 adoption. No pre-existing combined ledger row supplied both exact endpoint strings.

| Consumer batch | Supplier batch | Edge | Current recommendation |
|---|---|---|---|
| 9 | 7 | `lem-ip-univariate-gaussian-projection-minimax-comparison` → `def-ip-isonormal-white-noise-experiment` | Evidence candidate; root scope decision |
| 59 | 58 | `thm-seifert-zero-framing-and-framing-integer` → `lem-linking-number-even-sum-and-reidemeister-invariance` | Evidence candidate; root scope decision |
| 61 | 58 | `lem-seifert-pairing-well-defined` → `lem-linking-number-even-sum-and-reidemeister-invariance` | Evidence candidate; root scope decision |
| 66 | 59 | `thm-knot-determinant-is-order-of-double-cover-homology` → `def-oriented-seifert-surface` | Evidence candidate; root scope decision |
| 66 | 61 | `thm-knot-determinant-is-order-of-double-cover-homology` → `def-knot-seifert-pairing-and-matrix` | Evidence candidate; root scope decision |
| 66 | 59 | `thm-knot-determinant-is-order-of-double-cover-homology` → `thm-every-oriented-knot-bounds-a-seifert-surface` | Evidence candidate; root scope decision |
| 66 | 59 | `thm-knot-cyclic-cover-order-from-alexander-polynomial` → `def-oriented-seifert-surface` | Evidence candidate; root scope decision |
| 66 | 61 | `thm-knot-cyclic-cover-order-from-alexander-polynomial` → `def-knot-seifert-pairing-and-matrix` | Evidence candidate; root scope decision |
| 66 | 59 | `thm-knot-cyclic-cover-order-from-alexander-polynomial` → `thm-every-oriented-knot-bounds-a-seifert-surface` | Evidence candidate; root scope decision |
| 68 | 56 | `lem-trefoil-plus-one-surgery-group-presentation` → `def-knot-planar-code` | Evidence candidate; root scope decision |
| 74 | 61 | `def-metabolic-seifert-form-and-algebraic-knot-concordance` → `lem-seifert-matrix-skew-part-is-surface-intersection` | Evidence candidate; root scope decision |
| 80 | 77 | `thm-l2-signature-theorem-for-closed-four-manifolds` → `thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded` | Evidence candidate; root scope decision |
| 83 | 58 | `thm-bmw-markov-trace-gives-dubrovnik-invariant` → `def-oriented-crossing-sign-writhe-and-blackboard-framing` | Evidence candidate; root scope decision |
| 83 | 58 | `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties` → `def-oriented-crossing-sign-writhe-and-blackboard-framing` | Evidence candidate; root scope decision |
| 90 | 82 | `lem-khovanov-reidemeister-chain-homotopies` → `def-kauffman-bracket-smoothing-and-loop-value` | Evidence candidate; root scope decision |
| 90 | 58 | `lem-khovanov-reidemeister-chain-homotopies` → `def-oriented-crossing-sign-writhe-and-blackboard-framing` | Evidence candidate; root scope decision |
| 99 | 57 | `lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber` → `def-knot-meridian-and-preferred-longitude` | Evidence candidate; root scope decision |
| 109 | 57 | `thm-dualizable-handle-link-has-two-knot-trace-descriptions` → `def-knot-meridian-and-preferred-longitude` | Hold: batch109 adoption pending |
| 109 | 57 | `lem-piccirillo-diagram-produces-dualizable-handle-link` → `def-knot-meridian-and-preferred-longitude` | Hold: batch109 adoption pending |
| 109 | 58 | `lem-piccirillo-diagram-produces-dualizable-handle-link` → `lem-linking-number-even-sum-and-reidemeister-invariance` | Hold: batch109 adoption pending |
| 109 | 58 | `lem-piccirillo-diagram-produces-dualizable-handle-link` → `thm-oriented-linking-number-scan-terminates-and-is-correct` | Hold: batch109 adoption pending |

The JSON file records exact native review paths and target membership, target findings/consumer checks, current owner resolution evidence and a **candidate** decision entry for each edge. Candidates are not root adoptions. Root must bind the precise accepted scope, preserving any qualifications in that evidence. Batch109 candidates remain held until its actual completed owner disposition exists.

The57 missing-contract diagnostics were an overbroad metadata check: all57 current sources are proof-free. The native proof-coverage predicate is now used. Eight are nevertheless selected in an existing contract scope without entries; `proof-contract --strict` requires those selected rows to be reconciled by the separate contract owner, rather than inventing proof obligations. Exact IDs are in `proof-contract-eligibility-correction.json`.
