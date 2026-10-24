# Inverse Problems rendering audit — lane 01

Reviewed 53 assigned items and 93 screenshot tiles from the frozen local snapshots and HTML. All 93 PNGs were opened individually at original resolution.

## Hash and scope checks

- Source snapshot SHA256 matched the assignment source hash for every item: true.
- Rendered HTML SHA256 matched the assignment HTML hash for every item: true.
- Review is limited to each title and complete rendered ItemBody. I made no production-route or publication-status claims. The assigned tile paths and SHA256 values are recorded per item in `lane-01.json`.

## Findings

No confirmed visual defects found in the 53 assigned items. KaTeX-rendered math, subscripts and superscripts remained readable; I saw no raw ASCII math or source TeX leakage, clipping within standalone rendered images, Scratch text, reference-title leaks, or broken integrated diagrams. Screenshot boundaries that cut a long item between consecutive tiles are capture boundaries, not clipping. Reference links rendered as separate blocks as expected; punctuation wraps and plain L2/H1 typography were not treated as defects.

## Existing diagrams

- `lem-ip-boundary-spectral-counting-and-sobolev-scale`: compact-resolvent factorization is present and legible; arrows and composition agree with the text.
- `ex-ip-finite-element-mesh-error-at-zero-solve-residual`: four-cell mesh around interior node O is present and matches the defined triangulation.
- `thm-ip-picard-range-criterion-for-compact-operators`: singular-system diagram is present and correctly labels the domain/codomain actions. The prose explicitly says the proof does not rely on it.

## Source-supported diagram candidates

These are editorial suggestions, not confirmed rendering errors.

- `def-ip-discrete-linear-input-state-output-experiment`, snapshot lines 39–50: a state-space block diagram could show x_k and x_{k+1}, A and B contributing to the update, C producing y_k, and a separate η_k branch producing ỹ_k. Preserve update range 0≤k<q−1 and output range 0≤k<q.
- `def-ip-network-tomography-design-criterion`, snapshot line 34: a rooted-tree sketch could mark a nonroot internal v, child branches c and c′, receivers r and s in their respective subtrees, and one C_d containing both; mark coverage separately. Label as a definition illustration.
- `ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame`, snapshot line 40: draw a₁=(1,0), a₂=(0,1), and a₃=(1,1) in R² and indicate every pair spans. Keep the text proof of phase retrieval separate from the illustration.

## Coverage

Exact assigned item and tile coverage, item hashes, frozen snapshot hashes, HTML hashes, and individually viewed PNG hashes are in `lane-01.json`.
