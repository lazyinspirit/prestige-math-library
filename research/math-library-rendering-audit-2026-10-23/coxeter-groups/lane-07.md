# Coxeter Groups rendering audit — lane 07

Reviewed all 35 assigned items and 103 revision-2 screenshot tiles individually at original resolution. Compared frozen item, snapshot, rendered HTML, capture manifest, and tile hashes for every coverage row.

## Findings

- **lem-cg-classical-coxeter-spectra-from-reflection-models** — title, source line 4: the title shows literal `A_n`, `B_n`, `D_n`, and `I_2(m)` underscores. Screenshot: `screenshots/lem-cg-classical-coxeter-spectra-from-reflection-models--01.png`.
- **lem-cg-classical-coxeter-spectra-from-reflection-models** — Statement, source line 30: the linked title of `def-cg-bipartite-coxeter-element-and-root-recursion` exposes raw ASCII `mu(a) = -2(c-1)^{-1}a`. Screenshot: same tile.
- **thm-cg-bruhat-eulerian-intervals-and-mobius** — Statement, source line 46: the linked title of `thm-cg-bruhat-parabolic-projection-and-quotients` exposes raw `W^I`. Screenshot: `screenshots/thm-cg-bruhat-eulerian-intervals-and-mobius--01.png`.

## Diagram candidates

- **ex-cg-a1-affine-line-alcoves-and-translations**, source lines 36, 38, 40–42: a line diagram can show integer walls, indexed alcoves, reflection maps, the shift by 2, and the separate Q versus Q^vee conventions. This is a recommendation; the convention split must remain explicit. Evidence: `screenshots/ex-cg-a1-affine-line-alcoves-and-translations--01.png` through `--03.png`.
- **ex-cg-b2-davis-complex-octagon-and-boundary-circle**, source lines 26, 28, 30, 32, 34: an octagon with alternating edge labels, its 16-triangle subdivision/eight chamber pairs, boundary cycle, and square quotient can clarify the stated incidence maps. Check coset orientation before drawing. Evidence: `screenshots/ex-cg-b2-davis-complex-octagon-and-boundary-circle--01.png` and `--02.png`.
- **ex-cg-moved-space-intersection-is-not-a-meet-in-a3**, source lines 41, 43, 45, 47: a schematic can show the two moved-space planes intersecting in the root-free line while the meet has zero moved space. The 3D-to-2D projection could mislead, so this is a cautious recommendation. Evidence: `screenshots/ex-cg-moved-space-intersection-is-not-a-meet-in-a3--01.png` through `--03.png`.

## Coverage and checks

All source SHA256 values match the frozen assignment. Each frozen snapshot is byte-identical to its assigned source; each captured HTML SHA256 and each individual tile SHA256 matches its manifest. All 35 capture manifests report no KaTeX errors or diagram failures. Every assigned manifest reports `tikz_count: 0`, so there were no existing diagrams to check for maps, orientation, indices, or signs. No confirmed clipping was found when tiles were reviewed individually at original resolution; content split at tile boundaries is capture segmentation. No assigned item has a `## Scratch` section. Raw ASCII formulas inside math delimiters rendered as mathematics; the three findings above are title/reference-title text outside math delimiters. CSS technique banners are uppercase by design, and linked references appear on separate block lines by design. Wikilinks and their titles were checked as part of the rendered body.

Exact item and tile coverage, source/snapshot/HTML/tile SHA256 values, and image review flags are recorded in `lane-07.json`.
