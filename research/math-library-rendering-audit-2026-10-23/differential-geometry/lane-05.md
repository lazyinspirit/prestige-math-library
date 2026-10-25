# Differential Geometry visual audit — lane 05

**Status: complete.** All 160 assigned items and 237 screenshot tiles were reviewed; each tile was opened individually at original resolution. Source, snapshot, rendered HTML, and tile hashes match their assignment/capture records. No drift was found. No live HTTP or website was accessed.

## Confirmed rendering findings

The five source lines below are `**Proof technique:**` text, rendered as CSS uppercase technique banners. That capitalization is expected; the math inside these banners is not typeset and appears literally.

- `cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth`, source line 66: raw inline LaTeX is visible in `screenshots/cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth--02.png` (SHA256 `3ebfcaaf89aa0992514d00b61125d8a914633fda183db760e993cf3cf16f16b5`).
- `ex-conjugate-antipodes-on-the-round-sphere`, source line 108: raw inline LaTeX is visible in `screenshots/ex-conjugate-antipodes-on-the-round-sphere--02.png` (SHA256 `2b323fd0a3f2c6c09e58bbd3e94be220a87883dc0e422922048a2aadd7082a46`).
- `ex-metric-independence-of-total-curvature-on-a-deformed-sphere`, source line 74: raw inline LaTeX is visible in `screenshots/ex-metric-independence-of-total-curvature-on-a-deformed-sphere--02.png` (SHA256 `94cec03ef6d162256422b038fe38f873e9061be3897a524b055de276edc64144`).
- `thm-cut-time-is-positive-and-continuous`, source line 99: raw inline LaTeX is visible in `screenshots/thm-cut-time-is-positive-and-continuous--02.png` (SHA256 `5ab4e3a404ce2298f2ad372e92e2b5d2c5f8acdb3c02714cd25725eff32675fa`).
- `thm-relative-volume-density-comparison`, source line 86: raw inline LaTeX is visible in `screenshots/thm-relative-volume-density-comparison--02.png` (SHA256 `cd3ba004aebaf8c81b37eb3e1a12643060370e245572212b9a67328ab017ca85`).
- `fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field`, source line 4: the title renders the literal `C^infty` in `screenshots/fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field--01.png` (SHA256 `81000856ab24ed26b1243f14bb1cd55d3801bd767d031c996010c79b3df4a524`). Use `C∞` or a title format with math support.

The technique-banner defect is consistent across the five cited items: banner styling uppercases text but bypasses math rendering. Raw math commands, delimiters, and subscripts remain visible.

## Optional diagram candidate

`ex-the-sphere-and-its-two-sided-normal-tube`, lines 34–35 and 47, defines `E(p,t)=(1+t)p` and identifies its shell image. A 2D cross-section schematic of the unit sphere, radii 1/2 and 3/2, normal coordinate `t`, the map, and its inverse could make the geometric construction easier to read. It is optional because the text already states and proves the map. Local evidence is `screenshots/ex-the-sphere-and-its-two-sided-normal-tube--01.png` (SHA256 `e530c9a76dddae5752863d508863f5e74ea47993e643474e034b66126837d081`).

## Existing diagrams

No TikZ/TikZ-CD is authored and no rendered diagrams appear in this lane. There are consequently no existing diagram maps, orientations, indices, or signs to inspect. The sphere normal-tube schematic above is a potential addition, not a correction to an existing diagram.

Wikilinks render as block lines intentionally; these were not reported as defects. No clipping was confirmed from the standalone original tiles.

## Limits

Coverage is 160/160 items and 237/237 tiles. Exact per-item and per-tile source/hash/coverage records, findings, and diagram notes are in `lane-05.json`. No item or app/tool files, publication status, or Git state was changed; no tests or build were run.
