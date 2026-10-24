# Functional Analysis rendering audit — lane 07

Read-only visual review of all 94 assigned published items and all 153 saved ItemBody PNG tiles. Every tile was opened individually at its original resolution. Frozen source, snapshot, and stored HTML digests match the assignment for all items; screenshot digests match their capture receipts. Exact item/tile coverage and SHA256 values are in [lane-07.json](lane-07.json).

## Confirmed rendering defect

- `ex-c-mod-constants-and-oscillation-norm` (source line 49) and `lem-range-of-identity-minus-compact-is-closed` (lines 37, 41): the linked title of `def-quotient-seminorm` appears as raw LaTeX (`\(...\)`, `\|`, `\operatorname`) in reference blocks, despite the surrounding math rendering correctly. The JSON records each item screenshot and tile hash.

No clipping was confirmed from standalone tile inspection. No TikZ blocks or existing diagrams occur in the assigned items, and no existing diagram-map, orientation, index, or sign error was found. The line-oriented technique banners and block-line wikilinks are expected.

## Optional typography and diagram candidates

Three plain item titles contain literal math punctuation (`X^*`, `L^p-L^q`, `C_0(R)`); these are title typography candidates only and are separate from the confirmed reference-title leak. One optional source-supported commutative triangle for the completion extension is documented in the JSON (source lines 36–44, 68). The statement and proof are complete without it, so it is not required.

## Coverage and limits

All 94 item source bodies were compared byte-for-byte with their frozen snapshots by SHA256; each stored HTML hash matches the assignment. All 153 screenshot files match their capture receipts and were individually viewed at original resolution. No live website/HTTP inspection, tests, builds, content/app/tool edits, publication-state changes, or commits were performed.
