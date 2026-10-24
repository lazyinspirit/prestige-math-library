# Quantum Computing rendering audit — lane 08

## Coverage

- Assignment: `research/math-library-rendering-audit-2026-10-23/quantum-computing/assignment-08.json`.
- Reviewed all **56 frozen titles and complete ItemBody previews** against the assigned local HTML.
- Opened all **89 receipt-listed PNG tiles** individually with `tools.view_image(detail="original")`; the JSON records per-item source/snapshot/HTML hashes and each tile path, receipt hash, actual hash, dimensions, and view attestation.
- All source, snapshot, HTML, and tile hashes match their frozen records. All items and screenshot receipts are lane 08, capture revision 2.
- No Scratch section, KaTeX error, TikZ diagram, or diagram render failure occurred. No confirmed visual rendering defect was found.

## Rendering findings

No confirmed title, ItemBody, mathematical-notation, or diagram-rendering defect was observed in the frozen local captures. This is a visual rendering audit, not a proof audit.

## Potentially useful missing diagrams

1. [`thm-qc-teleportation-bell-expansion`](../../../items/thm-qc-teleportation-bell-expansion.md:40): The source gives the explicit ordered three-wire preparation, gate order and four outcome-indexed receiver states. A circuit diagram with the outcome labels makes the tensor-factor convention and correction order easy to verify at a glance. **Candidate only.** Draw wires A,B,C in that order, with |psi> on A and |Phi+> shared across B,C; put CNOT A->B before H on A (the rightmost gate in V_AB acts first); label the four output branches ab on A,B and X^b Z^a on C. Do not imply measurement is part of V_AB, which is only the encoding unitary. Local tile evidence: [thm-qc-teleportation-bell-expansion--01.png](screenshots/thm-qc-teleportation-bell-expansion--01.png).

2. [`ex-qc-reversible-and-oracle-compute-copy-uncompute`](../../../items/ex-qc-reversible-and-oracle-compute-copy-uncompute.md:57): The item centers on a concrete compute-copy-uncompute circuit and already verifies its action in a full truth table. A small wire diagram would expose the clean-work lifecycle, target-copy step and reverse computation compactly. **Candidate only.** Draw input wires a,b, target y and clean work w initialized to 0; apply Toffoli controls a,b targeting w, CNOT w->y, and the same Toffoli again to uncompute w. Label the map |a,b,y,0> -> |a,b,y xor ab,0>; preserve chronological order and show w returns to 0. Local tile evidence: [ex-qc-reversible-and-oracle-compute-copy-uncompute--01.png](screenshots/ex-qc-reversible-and-oracle-compute-copy-uncompute--01.png), [ex-qc-reversible-and-oracle-compute-copy-uncompute--02.png](screenshots/ex-qc-reversible-and-oracle-compute-copy-uncompute--02.png).

## Limits

Only frozen local titles, complete ItemBody renders, local HTML and receipt-listed image tiles were reviewed. No live website or network access was used; item, application, and publication-status files were not changed.

Per-item coverage and all 89 tile hashes and original-resolution view attestations are recorded in [lane-08.json](lane-08.json).
