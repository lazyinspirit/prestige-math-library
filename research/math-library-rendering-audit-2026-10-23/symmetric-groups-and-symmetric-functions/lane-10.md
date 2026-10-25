# Lane 10 rendering review

## Scope and result

Reviewed all 32 assigned published items using the frozen source snapshots and the assignment-matched local HTML. Every source snapshot hash and HTML hash matches the assignment. Read the complete rendered item bodies represented by the receipt tiles and checked titles, formulas, and any diagrams. The 32 receipts list 67 PNG tiles; each tile was opened individually with `tools.view_image` at original resolution. Receipt-listed tile hashes all match. Receipts report zero KaTeX errors and zero diagram failures. The assigned source snapshots contain no TikZ/tikzcd diagrams (`tikz_count: 0` in all receipts). No production files or statuses were changed.

Exact item, source/HTML/receipt/tile coverage, SHA256 values, per-tile view attestations, and receipt failure fields are recorded in [lane-10.json](lane-10.json).

## Strong missing-diagram candidates

1. **`ex-a-disconnected-skew-schur-function-factors` — TikZ skew Young diagram.** Source lines 35–37 and 81–85 set up the factorization through edge-connected components. Draw the shape `(3,1)`, remove cell `(1,1)` for `mu=(1)`, group `(1,2),(1,3)` as the row component and `(2,1)` as the isolated component. This depicts why the factors are `h_2` and `h_1`, and why diagonal contact is not edge contact.

2. **`ex-three-core-of-four-three-two-one` — TikZ 3-abacus and paired removal routes.** Source lines 32–46 and 52–55 give the initial beta-set and the two explicit rim-hook removal orders; lines 87–92 compute the runner positions and top-packed core. Show beads `7,5,3,1` on runners `1,2,0,1`, slides `7->4`, `5->2`, `3->0`, and final beta-set `{4,2,1,0}` / core `(1)`, alongside both stated removal sequences. The abacus and partitions are the central example, so a drawing is high-likelihood.

3. **`def-removable-border-strip-and-height` — TikZ before/after Young diagram.** Source lines 41–63 define a removable border strip by connectivity, no `2x2` block, and a partition-shaped complement, then define height; lines 65–84 derive `ht = r-c`. Illustrate `lambda=(3,2)`, `nu=(1)`, and strip cells `{(1,2),(1,3),(2,1),(2,2)}`; this is connected, has no `2x2` block, leaves `(1)`, and has `r=4`, `c=3`, `w=2`, `ht=1`.

Other assigned items already express their mathematical relationships in text/formulas or have only optional visualizations; no further candidates are raised.
