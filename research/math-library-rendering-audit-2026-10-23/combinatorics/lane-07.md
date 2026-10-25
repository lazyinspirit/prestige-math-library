# Combinatorics rendering audit — lane 07

Read-only visual review of all 141 assigned published items and all 178 saved ItemBody PNG tiles. Every PNG was viewed at its original resolution. Assignment source digests and snapshot digests match; each screenshot file digest matches its capture receipt. Exact item and tile coverage, including SHA256 and resolution, is in [lane-07.json](lane-07.json).

## Confirmed rendering defects

- `cex-a-subgraph-copy-need-not-be-induced`, source lines 50–54: the inline fenced TikZ in Remarks is rendered literally as text in `cex-a-subgraph-copy-need-not-be-induced--01.png`. Place fence delimiters on separate lines. Source diagram content itself agrees with the triangle-to-path counterexample.
- `cex-equal-size-intervals-with-different-mobius-values`, source lines 52–58: the inline fenced TikZ in Remarks is rendered literally as text in `cex-equal-size-intervals-with-different-mobius-values--01.png`. Put the fences on separate lines. The chain/diamond and endpoint values agree with the text.
- `ex-p-four-is-connected-and-anticonnected`, source lines 52–56: the inline fenced TikZ in Remarks is rendered literally as text in `ex-p-four-is-connected-and-anticonnected--01.png`. Put the fences on separate lines. The path and complement edge labels agree with the source.

No displayed diagram-map, sign, or index error was found. No clipping defect was confirmed by standalone pixel inspection. The line-oriented technique banners and source-backed wikilink blocks are intentional.

## Optional typography and diagram candidates

Several title-only plain strings contain math identifiers with literal underscores or Greek names; these are recorded as optional title-typography candidates in the JSON. One optional Ferrers/Young-diagram candidate is recorded for the conjugation bijection in `thm-partitions-with-k-parts-equal-largest-part-k` (source lines 31–42, 48 onward); its current prose proof is complete. No braid/string, commutative, or flag diagram opportunity is supported by the assigned sources.
