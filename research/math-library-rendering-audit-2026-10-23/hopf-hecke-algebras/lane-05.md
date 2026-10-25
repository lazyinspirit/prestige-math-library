# Hopf Algebras & Hecke Algebras rendering audit — lane 05

## Scope and coverage

Read-only review of frozen source snapshots and assigned local HTML/PNG previews. No live website, HTTP(S), external images, item/app edits, publication status changes, builds, tests, gates, or production route claims were involved.

- Items: **23 assigned; all 23 frozen source hashes and local HTML hashes match the assignment.**
- Screenshots: **40 assigned PNG tiles, each opened individually at original resolution.**
- Reviewed the title and full ItemBody for every item, including definitions/statements, facts, proofs or verifications, remarks, diagram sections, source math, local HTML, references, Scratch markers, and clipping. Exact item/page coverage, section headings, source/HTML digests, and per-tile digests are in [lane-05.json](lane-05.json).

## Findings

| Item | Finding | Evidence |
|---|---|---|
| `prop-weak-bialgebra-module-tensor-product-is-delta-one-image` | **Local diagram render failure.** The “Image and quotient” diagram is replaced by a red error block that exposes the `tikzcd` source. | Snapshot lines 46–53; local HTML; tile `screenshots/prop-weak-bialgebra-module-tensor-product-is-delta-one-image--01.png`. |

## Source-supported diagram candidate

`lem-hh-tensor-coherence-on-elementary-tensors` could use a standard pentagon diagram for the associator identity. Snapshot lines 35, 37–38 specify the five parenthesizations, both composites, and their common source and target. The JSON companion records the exact vertices, edge labels, and path check. This is an editorial clarity opportunity, not a mathematical defect.

## Other visual checks

The existing checked Yang–Baxter notation diagram renders and matches the stated parallel composites. No other broken TeX/KaTeX, literal ASCII math, Scratch leakage, missing/reference-title leak, or standalone-image clipping was observed. Link references rendering as blocks, punctuation wrapping, and the intended uppercase technique banner were not treated as defects. All findings concern the assigned local previews only.
