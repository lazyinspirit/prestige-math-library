# Combinatorics rendering audit — lane 08

Read-only visual review of all 141 assigned published items and all 180 saved ItemBody PNG tiles. Every PNG was viewed at its original resolution. Assignment source digests and snapshot digests match; each screenshot file digest matches its capture receipt. Exact per-item title, source/body hashes, and per-tile coverage, SHA256, and resolution are in [lane-08.json](lane-08.json).

## Confirmed rendering defects

- `cex-a-maximal-antichain-that-is-not-maximum`, source lines 49–51: the fenced TikZ source for the poset diagram is printed literally in the Remarks tile. The opening/closing fences share lines with commands; put each fence delimiter on its own line. The source's poset relations and antichain labels agree with the written counterexample.
- `ex-cluster-graphs-are-p-three-free`, source lines 54–58: the fenced TikZ source for the $K_3\sqcup K_2$ example is printed literally in the Remarks tile. The opening/closing fences share lines with commands; put each fence delimiter on its own line. The encoded component sizes and $P_3$-free claim agree with the example.
- `thm-lovasz-perfect-graph-criterion-and-complement-invariance`, source line 78: `## Source notes` is appended to the final proof step on the same line, so the screenshot prints the Markdown heading syntax literally in the proof row. Move the heading to its own line.

No displayed diagram-map, sign, or index error was found. No clipping defect was confirmed by standalone pixel inspection. Technique banners and source-backed wikilink blocks are intentional.

## Optional typography and diagram candidates

The JSON records four title-only mathematical typography candidates. One optional Ferrers/Young diagram candidate is recorded for the concrete conjugation counterexample $(4,2,1)\mapsto(3,2,1,1)$; the written computation is complete. No braid/string or commutative/flag diagram opportunity is source-supported in this lane.
