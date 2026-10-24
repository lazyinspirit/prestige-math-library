# Real Analysis rendering audit, lane 06

**Status: complete.** This local, read-only review covers all 174 rows in `assignment-06.json` and every receipt-listed image tile.

## Coverage and verification

- Reviewed all 174 assigned titles and complete ItemBodies against their frozen snapshots, assignment source hashes, and matching local HTML hashes.
- Individually opened all 333 receipt-listed PNG tiles using `tools.view_image` at original resolution. Every observed tile hash matches its receipt hash; `lane-06.json` records each tile path, hash, capture offset, and view attestation.
- No source snapshot, local HTML, receipt tile hash mismatch; no receipt-reported KaTeX errors, TikZ blocks, or diagram failures. No confirmed rendering defect was identified.
- No item, application, or publication status was changed.

## Diagram candidates

[Irregular pentagon area by triangulation and shoelace](../../../../items/ex-irregular-pentagon-area-by-triangulation-and-shoelace.md) explicitly names five vertices and uses two diagonals from `v0` to triangulate the region (source lines 28, 42–44). A diagram labeling the cyclic vertices, directed boundary, triangles, and areas `4, 8, 3` would clarify the decomposition and compare it with the shoelace total `30/2`.

[Surface area of the sine solid of revolution](../../../../items/ex-surface-area-of-the-sine-solid-of-revolution.md) rotates `r(x)=sin x` on `[0,π]` around the x-axis, with the profile meeting the axis at both endpoints (source lines 50–60). A profile and generated-surface sketch labeled with radius `sin x` and angle `θ` would show the geometry behind the area integral and endpoint collapse.

[The right circular cylinder as an elementary solid region](../../../../items/ex-the-right-circular-cylinder-is-an-elementary-solid-region.md) defines two cap maps and four quarter-cylinder side maps, including different cap seam directions (source lines 30–36, 72–84). A six-patch cylinder diagram with quarter-sector seams, cap rays, and a map legend would make compatibility and coordinate-adapted coverage easier to check.

[Spherical coordinates are not globally injective](../../../../items/fs-spherical-coordinates-are-globally-injective.md) identifies the angular seam, polar collapses, origin collapse, and vanishing Jacobian (source lines 38–53, 79–81). A coordinate-domain-to-sphere sketch showing these identified faces/edges and fibers would directly explain each injectivity failure.

These four candidates and their concrete maps/relations and diagram specifications are recorded in `lane-06.json`. Other reviewed items did not show a comparably strong need for an added diagram.
