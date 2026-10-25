# Coxeter Groups visual audit — lane 08

Reviewed all 35 assigned items and all 107 listed screenshot tiles individually at original resolution. Every item title and full ItemBody was visually reviewed. Current source, frozen snapshot, and local HTML hashes match the assignment for all items; every screenshot SHA256 matches its per-item capture manifest. No item or tile remains unreviewed.

## Confirmed rendering findings

- **thm-cg-sortable-projection-greatest-element-and-interval-fibers**, title, source line 4: `u_c(w) = pi_{c^{-1}}(ww0)w0` appears as literal ASCII underscore/subscript notation in the title banner. The same formula in the Statement, line 57, renders correctly. Evidence: [title tile](screenshots/thm-cg-sortable-projection-greatest-element-and-interval-fibers--01.png).

No other raw-ASCII formula defect was confirmed. Math in bodies is typeset; all capture manifests report zero KaTeX errors. No unexpected reference-title leak was observed. Internal wikilinks appearing as block lines and CSS-uppercase technique banners are expected. No Scratch section or open Scratch content occurs in this lane. No clipping was confirmed from standalone original-resolution tiles; long content continues across the overlapping tile sequence.

## Source-supported optional diagram candidates

- **ex-cg-a2-and-b2-alcove-shapes-and-corner-data**, lines 41, 43–45, 47: draw the A2 triangle at `0`, `(1,1/√3)`, `(0,2/√3)` with facet types `1,2,0`, and the B2 triangle at `0`, `e1`, `(1/2,1/2)` with the same facet types. An A2 inset could show the three walls at `v1` and the six-panel alternating `2,0` cycle. Evidence: screenshots `--01` and `--02`.
- **ex-cg-reducible-semidefinite-forms-are-factorwise**, lines 38, 40, 82, 88: draw `Q=[0,1]^2` with the four reflection walls, the integer square tiling, and Q as the unique orbit representative. Check against proof maps `r1(x,y)=(-x,y)`, `r2(x,y)=(2-x,y)`, `s1(x,y)=(x,-y)`, `s2(x,y)=(x,2-y)`. Evidence: screenshots `--01` and `--04`.
- **ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain**, lines 36, 38–46: draw its eight-element Bruhat interval with the twelve listed covers, the six label words, and selected increasing/falling chains; mark the local replacement between 1324 and 1243. Evidence: screenshots `--01` and `--03`.
- **ex-cg-noncrossing-partitions-and-kreweras-complements-in-s4**, lines 40, 42, 44–46: show cyclic labels `1,2,3,4` and the excluded crossing partition `{1,3}|{2,4}`, optionally alongside a checked Kreweras pair such as `K((1 2))=(2 3 4)`. Evidence: screenshots `--01` and `--03`.
- **ex-cg-g2-from-i2-six**, lines 37–39: an optional root-plane diagram could show all twelve scaled roots, the two root-length classes, the simple roots, and the dual scaling orientation. Derive plotted coordinates from the Gram form; the coefficient pairs are not orthonormal coordinates. Evidence: screenshots `--01` and `--03`.
- **lem-cg-finite-rank-two-inversion-set-recognition**, lines 47–49, 53–57: show the ordered positive roots in a rank-two sector, shading initial/final segments and contrasting an excluded interior nonconsecutive subset. Evidence: screenshots `--01` and `--04`.

These are uncertain optional editorial candidates, not rendering defects. Their claims, maps, orientations, indices, signs, and intended content are detailed in [lane-08.json](lane-08.json).

## Existing diagrams, coverage, and limits

No authored TikZ, TikZ-cd, or embedded image diagram occurs in the 35 assigned items, and every capture manifest reports `tikz_count: 0` and no diagram failures. There were no existing rendered diagram maps or orientations to certify. Source-authored coordinate maps, Coxeter labels, cyclic orders, root lists and tabulated finite maps were visually checked; no further questionable index or sign was confirmed.

The JSON records the exact source, frozen snapshot, HTML and screenshot-manifest hashes plus each of the 107 tile hashes and review assertion. This was a read-only local visual review, not an independent proof audit or live-site review. No tests, build, or publication-status changes were made.
