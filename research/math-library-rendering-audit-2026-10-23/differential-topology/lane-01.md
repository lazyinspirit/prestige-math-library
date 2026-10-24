# Differential Topology — lane 01

## Coverage

- Reviewed all 98 frozen item titles and complete rendered ItemBody captures across all 173 numbered screenshot tiles. Every tile was opened individually at original resolution, in numeric order.
- Compared source, frozen snapshot, rendered HTML, and screenshot-tile hashes. Source hashes: 98/98 match; source and snapshot bodies: 98/98 byte-identical; HTML hashes: 98/98 match; tile hashes: 173/173 match their capture sidecars.
- All 98 capture sidecars report no KaTeX errors and no diagram failures. All report `tikz_count: 0`.

## Rendering finding

- `cor-four-dimensional-signature-formula`, source line 61: the CSS uppercase proof-technique banner shows `$k=1$` literally. Replace the formula in that banner with math-free wording such as “degree one.” Its statement and proof body render correctly. Evidence: `screenshots/cor-four-dimensional-signature-formula--01.png`, opened at original resolution.

## Diagrams

- No assigned item contains an existing TikZ diagram, so there were no existing diagram maps, orientations, indices, or signs to verify.
- Optional candidate: `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles`, source lines 62–70 and 82, 92–94. A planar disk with two holes could label outer `C0` counterclockwise and inner `C1,C2` clockwise as induced boundary orientations, with `C1 sqcup C2` incoming and `C0` outgoing. The source already computes these signs explicitly, so a diagram is optional. The complete item sequence was inspected in `screenshots/ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles--01.png`, `--02.png`, and `--03.png`.

## Conventions and clipping

- The uppercase technique banners are expected CSS styling; raw TeX inside them is recorded as a defect. Reference-title/wiki-link lines in Facts are intentional block lines. No unintended reference-title leak was observed.
- Standalone original-resolution tiles were inspected in sequence. Long items continue at numbered tile boundaries; no within-tile clipping was observed.

Machine-readable per-item/per-tile coverage and exact SHA256 values are in [`lane-01.json`](lane-01.json).
