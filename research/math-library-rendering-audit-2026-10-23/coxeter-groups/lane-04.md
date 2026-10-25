# Coxeter Groups rendering audit — lane 04

Reviewed all 36 assigned items and all 112 listed screenshot tiles individually at original resolution. All 36 current source hashes and HTML hashes match the frozen assignment; all snapshot bodies match current source bodies; all tile hashes match their screenshot manifests. No item or tile is unreviewed.

## Confirmed rendering findings

- **ex-cg-link-edge-lengths-versus-dihedral-angles**, title, source line 4: literal `I_2(m)` underscore/subscript. Evidence: `screenshots/ex-cg-link-edge-lengths-versus-dihedral-angles--01.png`.
- **ex-cg-euler-and-skew-form-in-a3**, title, source line 4: raw ASCII `c = s1s2s3` and `A3`. Evidence: `screenshots/ex-cg-euler-and-skew-form-in-a3--01.png`.
- **ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3**, title, source line 4: raw ASCII `s1s2` and `A3`. Evidence: `screenshots/ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3--01.png`.
- **lem-cg-steinberg-bipartite-root-enumeration**, title and internal reference title, source lines 4 and 40: raw ASCII `rho(c) - id`; linked defining-item title exposes `mu(a) = -2(c-1)^-1a` without math typesetting. Evidence: `screenshots/lem-cg-steinberg-bipartite-root-enumeration--01.png`.
- **ex-cg-euler-and-skew-form-in-a3**, optional proof-technique banner, source line 146: expected uppercase technique banner prints raw `$\omega$` markup. Evidence: `screenshots/ex-cg-euler-and-skew-form-in-a3--03.png`. This is separate from the title findings.

No raw-ASCII formula defect beyond the title cases above was confirmed. Item wikilinks rendering as their own block lines is expected behavior.

## Source-supported diagram candidates

- **ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral**, source lines 51, 57, 59: a Coxeter diagram comparison would clarify the ∞-edge for $\widetilde A_1$, finite $I_2(4)=B_2=C_2$, and the three-node $(4,4)$ affine extension. Suggested maps and labels are recorded in JSON. Evidence: `screenshots/ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral--01.png`.
- **ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve**, source lines 48, 50, 52: show the filled all-right 2-simplex against three isolated vertices; mark the latter's pairwise truncated distances as $\pi$, not nerve edges. Evidence: screenshots `--01.png` and `--03.png` for this item.
- **ex-cg-s3-weak-order-meets-and-joins**, source lines 56–60: the text explicitly describes a hexagonal right weak-order Hasse diagram and its two chains. Draw all six upward covers, keeping $st$ and $ts$ distinct. Evidence: `screenshots/ex-cg-s3-weak-order-meets-and-joins--01.png`.
- **ex-cg-euler-and-skew-form-in-a3**, source lines 44, 50, 55–56, 66–70: an oriented $A_3$ chain and two rank-two root-order panels could make the skew-form signs and root directions inspectable. This candidate is medium-high confidence because panel conventions must be stated. Evidence: `screenshots/ex-cg-euler-and-skew-form-in-a3--01.png`.

## Existing diagrams and rendering limits

No authored TikZ, SVG, image, or other diagram markup occurs in the assigned source items, so there are no existing diagram maps, orientations, indices, or signs to certify. The mathematical maps/signs in the candidate claims were checked against the cited lines.

No actual page-content clipping was observed in the standalone original-resolution tiles. Tiles are overlapping crops; content continuing at a crop boundary is present in the adjacent tile. Mathematics typesets in the reviewed captures except for the confirmed title/banner cases. No Scratch region was present.

The machine-readable coverage, complete SHA256 inventory for every item and tile, drift checks, candidate details, and limitations are in [lane-04.json](lane-04.json).
