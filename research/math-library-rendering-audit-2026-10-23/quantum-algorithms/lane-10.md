# Quantum Algorithms visual audit — lane 10

## Coverage

Reviewed all 72 assigned frozen items and opened all 110 receipt-listed PNG tiles individually at original resolution. The rendered titles and complete ItemBody bodies, including continuation tiles, were checked. Source/snapshot SHA-256 values match the assignment; the per-item and per-tile ledger is in [lane-10.json](lane-10.json).

No confirmed LaTeX/TikZ rendering or diagram-mathematics defects were found. No clipping or overlap was observed in the reviewed content. The only receipt-listed TikZ art is the Fibonacci braid crossing, which is visible and its strand crossing/labels are legible.

## Editorial diagram candidates

### thm-qa-deutsch-query-correct

- **Claim (snapshot lines 41–47):** The exact Deutsch procedure prepares |+>_A|->_T, makes one oracle call, applies H to A, and measures A; the theorem records the constant-versus-balanced deterministic output and exact gate count.
- **Kind:** missing-circuit-diagram (uncertain-editorial)
- **Concrete content:** A two-wire circuit with address A and target T, initial H and X/H preparation indicated, one boxed U_f, final H on A, terminal measurement/output 0 for constant and 1 for balanced. Mark the oracle call separately from the four one-qubit gates.
- **Why uncertain:** The sequence and gate count are already explicit in adjacent prose, so the schematic is a teaching aid rather than a correctness requirement.

### lem-qa-binary-qft-product-factorization

- **Claim (snapshot lines 34–56):** The QFT output factors are R_0 tensor ... tensor R_(n-1), while the exact circuit has reversed factor order immediately before the final wire-reversal permutation.
- **Kind:** missing-quantum-circuit-diagram (uncertain-editorial)
- **Concrete content:** A small n-wire positive-sign QFT circuit showing Hadamard and controlled-phase stages, wire labels q_(n-1),...,q_0, the pre-reversal factor sequence R_(n-1),...,R_0, and the final SWAP/reversal yielding R_0,...,R_(n-1).
- **Why uncertain:** The item proves the phase and ordering algebraically and already states both register conventions; a diagram could still reduce the risk of confusing factor order with wire order.

### thm-qa-truncated-qft-operator-norm-error

- **Claim (snapshot lines 35–45):** The exact and truncated binary QFT gate lists differ by replacing each controlled phase with denominator index s>m by identity.
- **Kind:** missing-comparison-circuit-diagram (uncertain-editorial)
- **Concrete content:** Paired exact/truncated n-wire circuit excerpts with denominator-index labels s, retaining the same Hadamard and SWAP structure while marking only s>m controlled-phase gates as omitted/identity; include the stated cutoff m.
- **Why uncertain:** The key omission rule is unambiguous in the source and the theorem is a norm estimate, so the diagram is explanatory and must not imply that the proof depends on visual structure.

## Uncertainty observation

Across these individually viewed tiles, punctuation and clause continuations adjacent to inline item links sometimes render on their own lines (for example a full stop or comma after a blue link); link-heavy Facts & Assumptions rows can consequently become tall and fragmented. This is separate from LaTeX/TikZ and no math content was lost in the reviewed captures.

Not classified as a confirmed math-rendering defect in this lane; retain as a layout observation for the consolidated report.

## Item/tile ledger

All per-item titles, frozen snapshot hashes, section headings, receipt summaries, tile paths, tile hashes, dimensions, and individual original-resolution view attestations are recorded in [lane-10.json](lane-10.json).

No item, source, application, build, or publication status was changed.
