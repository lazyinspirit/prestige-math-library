# Combinatorics visual audit — lane 05

Reviewed all 141 assigned items and all 176 revision-2 screenshot tiles at original resolution. Each rendered title and complete ItemBody was inspected. No production HTTP(S) or live site was accessed.

## Findings

Three titles have confirmed rendering defects: group subscripts are authored with literal underscores and display as plain text. Exact source lines, screenshots, and repair suggestions are in the JSON report.

- `cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index`, line 4: `C_4` and `V_4`.
- `ex-edge-set-orbits-on-four-vertices-by-polya`, line 4: `S_4`.
- `thm-cycle-index-of-alternating-group`, line 4: `A_n`.

No concrete error was found in the displayed diagrams' maps, signs, or indices. The Venn-set membership labels, Boolean-lattice ranks/shadows/chains, K5/K3,3 edges, divisor-poset values, and Prüfer-code tree/decoding labels were checked against the displayed statements and verification text.

## Optional diagram candidate

`thm-durfee-square-identity`, lines 38 and 48, explicitly formulates partitions as Ferrers diagrams and decomposes a partition into its Durfee square, a right-hand piece, and a lower piece. A small Ferrers diagram could show the `k×k` square, `α` to its right, and `β` below, with the stated row/part bounds. This is explanatory only; the prose already gives the full correspondence.

## Coverage

Per-item titles, source hashes, complete-body coverage, exact tile paths, tile hashes, offsets, and pixel dimensions are recorded in `lane-05.json`. All 176 listed PNG tiles were opened with original-resolution detail.
