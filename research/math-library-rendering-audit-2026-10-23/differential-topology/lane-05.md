# Differential Topology visual audit — lane 05

Reviewed all 98 assigned items and all 179 revision-2 screenshot tiles. Each tile was opened individually with `tools.view_image` at original resolution. The full frozen ItemBody, rendered title, visible sections, formulas and internal reference titles were reviewed.

## Coverage and integrity

- 98/98 current source hashes match the assignment; each frozen snapshot is byte-identical to its source; 98/98 HTML hashes match the assignment.
- 179/179 image hashes match their screenshot manifests and were individually opened at original resolution.
- All 98 captures are revision 2. KaTeX errors: 0. TikZ count: 0. Diagram failures: 0.
- Every item’s screenshot tiles cover its declared full screenshot height. Adjacent overlapping tiles show continuation; no confirmed clipping was seen in standalone original images.
- Scratch was unavailable: no assigned frozen body or local HTML contains Scratch content, a disclosure or `<details>` control, so there was nothing to open.

The per-item SHA256 coverage, exact tile paths and tile hashes are in `lane-05.json`.

## Confirmed rendering findings

1. `ex-framed-links-represent-elements-of-pi-three-of-s-two`, source line 4: the title literally renders `pi_3 of S^2`. Screenshot: `screenshots/ex-framed-links-represent-elements-of-pi-three-of-s-two--01.png`.
2. `lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three`, source line 4: the title literally renders `R^3`. Screenshot: `screenshots/lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three--01.png`.
3. `lem-formal-tangent-and-artanh-series-are-compositional-inverses`, source line 76: the expected uppercase technique banner leaves `$A$` and `$T$` delimiters raw. Screenshot: `screenshots/lem-formal-tangent-and-artanh-series-are-compositional-inverses--02.png`.

The JSON records the exact source excerpts, symptoms, screenshots and focused repair suggestions. No source/snapshot/HTML drift was found.

## Existing diagrams and optional candidates

No assigned item contains a TikZ/TikZ-cd diagram, so there were no existing diagram maps or orientations to certify. The candidate list in `lane-05.json` is source-backed and optional: the zero-intersection handle counterexample, the local Whitney move, the torus broken-trajectory model, the noncontractible Whitney circle on the torus, and the Möbius-line Thom-space quotient. Each entry gives the exact claim/source lines, suggested maps and labels, uncertainty, and local screenshot evidence.

## Limitations

This is a read-only review of frozen local previews, not the live website or a proof audit. Scratch state is unavailable in the assigned HTML as noted above.
