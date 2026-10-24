# Real Analysis lane 04 rendering audit

**Status:** complete.

## Coverage

- Assignment: `assignment-04.json` (174 published items).
- Receipt-listed screenshot tiles: 314; all receipt hashes match the local PNGs.
- All 174 frozen titles and complete ItemBodies were reviewed against their snapshots and matching local HTML. Source, snapshot, HTML, and per-tile hash checks passed.
- All 314 receipt-listed tiles were individually opened at original resolution with `tools.view_image` and visually inspected. Exact tile paths, receipt hashes, actual hashes, and view attestations are recorded in `lane-04.json`.
- No confirmed LaTeX/TikZ rendering defects were found. Four high-likelihood missing-diagram candidates are recorded below. No item, library, application, or publication status was changed.

## Diagram candidates

- **`ex-the-planar-divergence-theorem-on-a-rectangle` — source lines 32, 39, 47, 63, 67, 69, 71, 73, 79.** A square diagram could show the counterclockwise boundary, outward normals, and the edge contributions. For `D=[0,1]^2`, the directed edges are `(t,0)`, `(1,t)`, `(1-t,1)`, `(0,1-t)` for `t∈[0,1]`; with `F(x,y)=(x²,xy)`, the flux contributions are `0, 1, 1/2, 0`, totaling `3/2`. This would make the direct boundary computation and its relation to the interior divergence integral easier to follow.

- **`ex-scalar-line-integral-over-a-unit-semicircle` — source lines 32, 34, 53, 55, 57.** A right unit semicircle with its endpoints and bottom-to-top orientation is a useful diagram for the geometric path and the orientation-independent scalar `ds` integral. The map is `γ(t)=(cos t,sin t)`, `−π/2≤t≤π/2`, and the integrand is `x`; `‖γ′(t)‖=1` and the integral equals `2`.

- **`cex-schwarz-lantern-polyhedral-areas-diverge` — source lines 32, 36, 48, 50, 52, 54.** A cylinder or its unwrapped strip could show `m` horizontal bands, `n` vertices per ring, alternating phase offset `π/n`, and the `2n` triangular faces per band. The construction sets `m=n³`: its mesh tends to zero while the displayed polyhedral area tends to infinity. The staggered geometry is central to understanding the counterexample.

- **`cex-cone-level-set-has-a-rank-drop-at-the-apex` — source lines 34, 48, 50, 52.** A double-cone diagram showing the apex and the three listed ray directions would clarify why the level has no single two-dimensional tangent plane at the apex. For `F(x,y,z)=x²+y²−z²`, the zero level is the double cone, `DF=(2x,2y,−2z)` has rank zero at the origin and rank one elsewhere on the cone, and the directions `(1,0,1)`, `(1,0,−1)`, `(0,1,1)` span `ℝ³`.

These are editorial diagram candidates, not rendering defects. Optional diagrams were not reported.

The complete item inventory, integrity results, receipt-linked tile coverage, and per-tile view attestations are in [`lane-04.json`](lane-04.json).
