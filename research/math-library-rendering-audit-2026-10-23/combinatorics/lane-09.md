# Combinatorics rendering audit — lane 09

Reviewed 141 assigned items and all 180 screenshot tiles at original resolution. Every current item source hash matches the assignment. The JSON records each item, page placement, source and snapshot hashes, and per-tile SHA-256.

Confirmed rendering findings: 1. No separate uncertain diagram candidates.

## cex-connected-even-degree-bowtie-is-not-a-cycle

- Section: Remarks
- Source line: 55
- Kind: Malformed TikZ block
- Symptom: The rendered tile prints the TikZ picture source literally instead of showing the graph. The opening fence puts `tikz` and `\begin{tikzpicture}` on one line, which is not recognized as a diagram block.
- Mathematical check: The source describes two triangles sharing center `x`; `deg(x)=4` and all four outer degrees are 2. This matches the graph specified in Given.
- Screenshot: `screenshots/cex-connected-even-degree-bowtie-is-not-a-cycle--01.png` (SHA-256 `f380f78589852b7aa7e2fa8023b5927bc1b4d96bf4307acd59ad56108980a088`)
- Suggested repair: Put `tikz` alone on the opening fence line and move the picture source to following lines.

No other assigned item contains a confirmed raw-math/TikZ rendering defect or a source-supported missing commutative, string, braid, Young-tableau, or flag diagram. No displayed diagram map, sign, or index mismatch was found. Technique banners and wikilink block punctuation were excluded as intentional. Clipping was not reported without standalone pixel confirmation.
