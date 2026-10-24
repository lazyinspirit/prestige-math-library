# Group Theory rendering audit — lane 08

## Coverage

- Assignment: `research/math-library-rendering-audit-2026-10-23/group-theory/assignment-08.json`
- Reviewed 97/97 frozen titles and full ItemBody texts.
- Opened 116/116 assigned screenshot tiles separately through `tools.view_image` at original resolution. Per-item and per-tile SHA256 values and hash comparisons are in [lane-08.json](lane-08.json).
- Source, snapshot body, captured HTML, and each screenshot tile were compared. All 97 frozen source hashes, all 97 HTML hashes, and all 116 tile hashes match their recorded values. No lane metadata drift.
- All 97 manifests report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. No assigned ItemBody contains a TikZ/tikzcd block. No Scratch section was found.

## Rendering findings

- **Minor body notation defects:** [def-central-and-stem-extensions](../../../items/def-central-and-stem-extensions.md:26) uses raw ASCII `K≤Z(E)` and `K≤Z(E)∩[E,E]`; [def-superperfect-group](../../../items/def-superperfect-group.md:26) uses raw `H_1(G;Z)=H_2(G;Z)=0`; [lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps](../../../items/lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps.md:5) says `H2` in ordinary text. Other reviewed body formulas rendered correctly.
- **Optional title typography:** plain title metadata exposes literal formula notation for [cor-central-extensions-are-classified-by-h-two-with-trivial-action](../../../items/cor-central-extensions-are-classified-by-h-two-with-trivial-action.md:4), [thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action](../../../items/thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action.md:4), [fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel](../../../items/fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel.md:4), [ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three](../../../items/ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three.md:4), [ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two](../../../items/ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two.md:4), [ex-folner-boxes-in-zn](../../../items/ex-folner-boxes-in-zn.md:4), and [def-p-adic-metric-on-zp](../../../items/def-p-adic-metric-on-zp.md:4). Their ItemBody math renders correctly.
- Reference titles appear as block lines after links, consistent with the stated renderer convention. No reference-title leak was observed. Technique banners are expected uppercase. No clipping defect was confirmed from the individual original tiles; multi-tile seams continue in the next tile.

## Potentially useful missing diagrams

1. [ex-curvature-ledger-for-a-two-cell-diagram](../../../items/ex-curvature-ledger-for-a-two-cell-diagram.md:27): source specifies two vertices, three interior-disjoint arcs in planar order, and two faces between consecutive arcs; line 29 gives face words `ab^{-1}` and `bc^{-1}`. A small planar disc-diagram could show the arc order, face incidences, and four half-π corners. This is a source-supported candidate, not a confirmed omission; the prose is explicit.
2. [thm-subgroup-block-correspondence](../../../items/thm-subgroup-block-correspondence.md:34): the source states inverse assignments `H ↦ H·α` and `B ↦ G_B` between the interval `G_α≤H≤G` and blocks containing α (lines 37–42). A correspondence diagram could make the two domains and inverse maps clear. It must retain the point-containing-α restriction. This is optional and not confirmed necessary.

## Existing diagram checks and limits

There are no existing lane-08 TikZ/tikzcd diagrams to inspect for map direction, orientation, indices, or signs. This is limited to the assigned lane, and does not claim review of diagrams elsewhere in Group Theory. No live website or external source was used; no item/app content or publication status was changed.
