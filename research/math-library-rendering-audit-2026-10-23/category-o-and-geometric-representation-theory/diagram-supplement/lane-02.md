# Category O diagram supplement — lane 02

Reviewed all 26 assigned items against their frozen source snapshots and original local revision-2 screenshot receipts. Source hashes, receipt hashes, and tile hashes match the assignment/manifest. No existing TikZ diagrams occur in these 26 items, so there are no existing diagram domains, codomains, or commutativity/sign/orientation checks to report.

## Candidate

**def-equivariant-borel-moore-homology-and-correspondence-convolution** — optional correspondence-convolution and middle Cartesian-square diagram (snapshot lines 61–75 and 77–82; uncertain, not a confirmed defect). The picture could show the maps (X_i,X_j,X_k	o E), the spaces (Z_{ij},Z_{jk},T_{ijk},Z_{ik}), the two projections from (T_{ijk}), the middle-diagonal refined pullback, and proper (h) forgetting (j). If it includes the sheaf model, it should show (u,v,v',u') and the exchange morphism for the same Cartesian square.

Correctness checks for any future drawing:

- Keep every fiber product over (E), and preserve (T_{ijk}cong Z_{ij}	imes_{X_j}Z_{jk}).
- The maps out of (T_{ijk}) forget (k), (i), and (j) for the projections to (Z_{ij}), (Z_{jk}), and (Z_{ik}), respectively; (h) is proper by base change of (f_j).
- The middle-diagonal operation uses (X_jhookrightarrow X_j	imes X_j), complex normal bundle (TX_j), and the homological degree shift (-2d_j). Keep the order (aoxtimes bmapsto h_*Delta_{X_j}^{!}(aoxtimes b)); the proof does not depend on a diagram.

This candidate is an editorial aid only. The item already states the maps and conventions, and no diagram error or mandatory omission was found. The full item/hash/screenshot review is in `lane-02.json`.
