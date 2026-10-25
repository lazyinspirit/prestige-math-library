# Category O diagram supplement — lane 03

## Review

Reviewed all 26 assigned items against their frozen local snapshots, source hashes, and revision-2 screenshot receipts. Every source and snapshot hash matched the assignment. All 26 receipts report `tikz_count: 0` and no diagram failures, so there were no existing diagrams in this lane to check for domain/codomain, commutativity, index, sign, or orientation errors.

The lane has one optional missing-diagram candidate. It is not a confirmed defect, and no proof depends on a diagram. The complete item ledger, exact frozen lines, source hash, and original local screenshot paths are in [lane-03.json](lane-03.json).

## Candidate

- **Potential Cartesian-square diagram:** `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product`, source lines 43–47, 56, and 72. Draw `Z_ij = X_i ×_E X_j` with projections `p: Z_ij → X_i` and `q: Z_ij → X_j` over `f_i: X_i → E` and `f_j: X_j → E`. Mark the square Cartesian; `p` is the base change of `f_j`, and `q` is the base change of `f_i`, so both are proper. The square can accompany `f_i^! f_{j!} ≅ p_* q^!`. Preserve the proof’s shift `t = r + d_j − d_i` and final Borel–Moore degree `d_i + d_j − r`. The source’s directions and base-change identity are consistent; the picture would be an optional aid only.
