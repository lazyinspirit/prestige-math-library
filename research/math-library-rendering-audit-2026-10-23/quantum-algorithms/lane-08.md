# Quantum Algorithms rendering audit — lane 08

## Coverage

- Assignment: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/assignment-08.json`.
- Reviewed all 72 frozen titles and complete ItemBody previews.
- Opened all 113 receipt-listed PNG tiles separately with `tools.view_image(detail="original")`. The JSON records each tile path, receipt hash, actual hash, dimensions, and individual view attestation.
- All source and snapshot hashes, body hashes, captured HTML hashes, and tile hashes match their frozen records. All items and receipts carry lane 08 and capture revision 2.
- No Scratch section, KaTeX error, or diagram render failure occurred. Exactly one existing TikZ circuit was reviewed.

## Rendering finding

- **Minor plain-text notation inconsistency:** [lem-qa-35-identity-matrix-packing](../../../items/lem-qa-35-identity-matrix-packing.md:27) renders the complete formal statement as ordinary text, including `N×m`, `M∈[0,1]^{m×m}`, indexed products and the logarithmic exponent. The same notation is typeset in the adjacent assumptions at line 31. This is a formatting inconsistency, not a parser failure. The original tile is [tile 01](screenshots/lem-qa-35-identity-matrix-packing--01.png); the exact frozen line and hash binding are in [lane-08.json](lane-08.json).

## Potentially useful missing diagrams

1. [alg-qa-deutsch-query](../../../items/alg-qa-deutsch-query.md:50): the source gives a two-register circuit with target `X`, Hadamards on both wires, one XOR query, a final address Hadamard, and address measurement. A two-wire circuit could show the query count and phase-kickback preparation clearly. Candidate only; the complete instruction list is already present.
2. [alg-qa-quantum-phase-estimation](../../../items/alg-qa-quantum-phase-estimation.md:53): the source specifies the phase/system registers, Hadamards, controlled powers with reversed control-wire indexing, inverse QFT, and measurement. A circuit could make those register and inverse conventions easier to scan. It must label that the inverse is the QFT, not a controlled `U^{-1}`. Candidate only; the prose already defines the full procedure.

## Existing diagram and limits

The sole existing diagram is the two-wire controlled-global-phase circuit in [cex-qa-37-projective-is-not-controlled](../../../items/cex-qa-37-projective-is-not-controlled.md:50). Its control dot, lower target `-I` gate, wire routing, and X-basis control readout agree with the adjacent mathematical claim. No clipping defect was confirmed in any standalone original tile; multi-tile boundaries continue in the next tile. This local frozen-render audit did not inspect the live site and is not a proof audit.
