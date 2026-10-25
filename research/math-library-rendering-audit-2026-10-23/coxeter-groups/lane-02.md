# Coxeter Groups rendering audit — lane 02

Reviewed all 36 assigned items and individually opened all 110 listed revision-2 PNG tiles at original resolution. The review covered each frozen title and complete ItemBody in the local snapshot and rendered HTML. No HTTP(S) or live-site access was used.

## Findings

- **lem-cg-positive-span-of-transported-simple-roots — Proof technique, source line 77.** The uppercase technique banner exposes TeX-like math as raw text (`S\\ELL(U)`). The proof body math renders. Evidence: `screenshots/lem-cg-positive-span-of-transported-simple-roots--02.png`.
- **thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees — Proof technique, source line 96.** The uppercase technique banner exposes TeX-like math (`$S\\NE\\EMPTYSET$`) instead of rendering it. Other body math renders. Evidence: `screenshots/thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees--02.png / --03.png`.
- **def-cg-bipartite-coxeter-element-and-root-recursion — title, source line 4.** The title shows `mu(a) = -2(c-1)^{-1}a` literally. The ItemBody displays its conditional vector-map formulas as rendered math. Evidence: `screenshots/def-cg-bipartite-coxeter-element-and-root-recursion--01.png`.

No reference-title leak was treated as a defect: linked reference titles intentionally render as block lines. The all-caps technique banners are expected styling; the raw math in two banners is the defect. Screenshot tile edges were checked as standalone original PNGs; I found no independently confirmed content clipping defect.

## Diagram review

No source-authored TikZ figure occurs in the 36 assigned item files. I also checked the existing displayed map and coordinate data: the A2 reflection product in the lattice example is a positive quarter-turn of order four; the A3 prefix-root list follows the declared right-to-left product and bipartite ordering; and the hexagon distances agree with the displayed coordinates and six-cycle indices. No orientation, index, or sign mismatch was found. Detailed checks and tile evidence are in the JSON.

Three optional, source-supported candidates are recorded in the JSON with their source lines, proposed content, checks, and relevant tile paths:

- A labelled A2 hexagon comparing straight-line distances with graph distances.
- Separate finite rank-two root/chamber figures for A2 and I2(5), plus an infinite-dihedral affine-line sketch.
- A local 2m-cycle schematic for alternating panel types around a codimension-two affine face.

These figures would clarify explicit coordinate/path or incidence claims; none is needed as proof.

## Coverage and hashes

Per-item source, frozen-snapshot, rendered-HTML, and ItemBody SHA256 hashes, plus every screenshot path, pixel size, and SHA256, are in [`lane-02.json`](lane-02.json). All 36 source hashes match the assignment; all snapshots hash identically to current source; all 36 HTML hashes match the assignment; all 110 tile hashes match their capture receipts. No assigned item or tile is unreviewed.
