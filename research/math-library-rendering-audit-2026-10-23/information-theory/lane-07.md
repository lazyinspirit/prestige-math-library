# Information Theory rendering audit — lane 07

Read-only review of all 46 assigned published items, their frozen source snapshots, local HTML, and all 65 saved ItemBody PNG tiles. Every assigned PNG was opened individually at original resolution. Source and snapshot digests, HTML digests, and screenshot receipt hashes match. Exact per-item and per-tile coverage, SHA256 hashes, and resolutions are in [lane-07.json](lane-07.json).

## Confirmed rendering defect

- `thm-ams-stationary-mean-asymptotic-dominance`, source lines 24–26: the Statement sentence displays `P`, `Pbar`, `T^{-n}G`, and `Pbar(G)=0` as literal ASCII instead of mathematical notation. Typeset the measures and inverse-shift event with the item’s existing math syntax. The rest of the reviewed formulas render as math.

The existing Huffman tree in `ex-huffman-dyadic-source-and-code-tree` matches its merge order, edge-label convention, and verified codewords. No displayed diagram map, sign, or index error was found. No standalone diagram clipping, unintended reference-title leak, Scratch residue, or literal TeX/TikZ failure was confirmed. Wikilinks rendering as separate blocks and punctuation wrapping alone are intentional.

## Optional diagram candidates

- `def-finite-hidden-markov-model-for-sequence-decoding`, source lines 33–48: a time-unrolled HMM diagram could show hidden states `z_1,…,z_T`, transitions labeled by `A`, observation nodes `y_t` emitted from `z_t` with labels `B`, and the initial `π` edge. The definition provides all of these objects and the joint-mass factorization. This is an editorial illustration candidate, not a confirmed defect.
- `lem-finite-trellis-prefix-score-recurrence`, source lines 34–39 and 45–59: a small weighted trellis could show layers `V_t`, allowed edges `E_t` with weights `w_t(u,v)`, initial scores `α(v)`, and the maximizing predecessor relation `D_t(v)=max_u D_{t-1}(u)w_t(u,v)`, with zero for unreachable nodes. The recurrence and proof are complete; this is an optional illustration.
