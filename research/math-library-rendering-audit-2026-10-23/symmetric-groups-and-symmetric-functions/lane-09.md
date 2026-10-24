# Symmetric Groups and Symmetric Functions rendering audit — lane 09

Reviewed all 32 assigned items and all 72 receipt-listed screenshot tiles individually with `tools.view_image` at original resolution. The JSON records each frozen title, status, placement, source/snapshot/HTML hash, capture receipt, tile path, tile SHA-256 and individual-view attestation. All assigned source hashes match, each frozen snapshot is byte-identical to its source, all assigned HTML hashes match, and every tile hash matches its receipt. No source, snapshot, HTML or tile drift was found.

## Rendering findings

No confirmed ItemBody rendering defect was observed. The receipt metadata reports no KaTeX errors and no TikZ/tikzcd render failures. No clipping was confirmed; long bodies continue across the sequential capture tiles.

## Optional title typography

- **ex-s5-character-table-by-fixed-tabloid-reconstruction**, line 4: the title uses literal `S_5`; the body formulas are typeset.
- **ex-three-core-and-three-quotient-by-abacus**, line 4: the title uses literal `1^3`; the body formulas are typeset.

## Diagram review

No existing TikZ/tikzcd diagrams occur in the 32 assigned sources or captures. Four optional, source-grounded candidates are recorded in the JSON: a corner/addable-node illustration for `def-removable-and-addable-nodes-of-a-partition` (lines 32–55, 64–76); a nested skew shape and filling for `def-skew-diagram-and-semistandard-skew-tableau` (lines 31–49); a standard filling for `def-young-tableau-standard-tableau-and-shape` (lines 28–46); and the explicit three-runner abacus configuration and bead moves for `ex-three-core-and-three-quotient-by-abacus` (lines 29–45, 93–101). Each entry gives exact drawable cells, labels and relations. The prose already specifies these objects, so the suggestions are not confirmed omissions. The remaining formulas and maps did not warrant additional diagrams.

No live website or network was inspected. This is a rendering review with focused diagram-coverage suggestions, not a complete proof audit of the 32 items.
