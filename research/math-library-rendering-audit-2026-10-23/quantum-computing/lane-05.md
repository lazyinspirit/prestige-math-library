# Quantum Computing visual audit — lane 05

Reviewed all 57 assigned items and all 85 revision-2 screenshot tiles at original resolution. Each rendered title and complete ItemBody was inspected. No production HTTP(S) or live site was accessed. Frozen source, local HTML, and PNG tile hashes and dimensions matched their assignment and receipts.

## Confirmed findings

- `thm-qc-tqc-hexagon-coordinates`, source lines 73–86 and 88–101: both `tikzcd` hexagon diagrams fail to render and show rose error boxes with raw TikZ. The source and adjacent equations were checked: the first compares the routes from `(X⊗Y)⊗Z` to `Y⊗(Z⊗X)`, and the second compares the routes from `X⊗(Y⊗Z)` to `(Z⊗X)⊗Y`. Both exact route maps are recorded in the JSON.
- `ex-qc-zero-plus-bloch-and-hadamard`, line 4: the title displays `|0>` and `H|0>` literally rather than as typeset ket notation.

No map, sign, or index mismatch was found in authored diagrams. The hexagon diagrams themselves are unavailable for visual map checking because of the render failure; their authored arrows match the typed equations and proof routes.

## Optional diagram candidates

- `alg-qc-dense-coding`, lines 38–45: a circuit could display the shared Bell pair, Alice’s `X_A^b` then `Z_A^a`, transmission of `A`, Bob’s `CNOT_{A→B}` then `H_A`, ordered measurement, and decoded output `(a,b)`.
- `alg-qc-teleportation`, lines 41–48: a circuit could display the `A,B,C` wires, `|ψ〉_A` and preshared `|Φ+〉_{BC}`, Alice’s `CNOT_{A→B}` then `H_A`, ordered measurements `(a,b)`, classical feed-forward, and Bob’s `X_C^b` then `Z_C^a` correction.

These candidates are explanatory only; both procedures are complete in prose. Exact maps, rationale, and source line mappings are in the JSON report.

## Coverage

Per-item titles, source hashes, complete-body coverage, exact tile paths, hashes, offsets, and dimensions are recorded in `lane-05.json`. All 85 PNG tiles were opened individually with original-resolution detail.
