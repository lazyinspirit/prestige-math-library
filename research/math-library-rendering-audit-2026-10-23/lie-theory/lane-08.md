# Lie Theory rendering audit — lane 08

## Coverage

- Assignment: `research/math-library-rendering-audit-2026-10-23/lie-theory/assignment-08.json`
- Reviewed 107/107 frozen titles and full ItemBody texts.
- Opened 167/167 assigned screenshot tiles separately through `tools.view_image` at original resolution. Per-item and per-tile SHA256 values and hash comparisons are in [lane-08.json](lane-08.json).
- All 107 frozen source hashes, snapshot hashes, and HTML hashes, plus all 167 tile hashes, match their recorded values: yes. No lane metadata drift.
- All 107 manifests report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. No Scratch section or reference-title leak was observed.

## Rendering findings

- No confirmed ItemBody math-rendering defect was found. Body TeX and KaTeX rendered correctly in the reviewed tiles. Links intentionally appear as block lines; this was not treated as a defect.
- **Optional title typography:** literal `sl_2` appears in the title metadata of [cex-symmetrization-does-not-preserve-products-in-sl-two](../../../items/cex-symmetrization-does-not-preserve-products-in-sl-two.md:4), [ex-killing-form-of-sl-two](../../../items/ex-killing-form-of-sl-two.md:4), and [thm-finite-dimensional-representations-of-sl-two](../../../items/thm-finite-dimensional-representations-of-sl-two.md:4). Their ItemBody notation is typeset.
- Technique banners are expected uppercase. No clipping defect was confirmed in individual original-resolution tiles; multi-tile seams continue in their next tiles.

## Potentially useful missing diagrams

1. [ex-s3-bruhat-order-and-inversion-sets](../../../items/ex-s3-bruhat-order-and-inversion-sets.md:26): lines 26–28 give the four Bruhat ranks and contrast Bruhat order with inversion-set containment; line 40 gives every cover; line 42 gives the inversion sets. A ranked Hasse diagram could place 123 at bottom, 213/132, 231/312, and 321 at top, with the exact covers and optionally inversion labels. It should make visible that 213 ≤ 231 while the corresponding inversion sets are not nested. This is source-supported and potentially useful; the prose is already explicit, so omission is not a confirmed defect.

## Existing diagram checks and limits

No existing TikZ/tikzcd diagrams occur in the assigned lane bodies or capture manifests, so there were no existing diagram maps, orientations, indices, or signs to validate. This is limited to assignment 08 and does not claim review of diagrams elsewhere in Lie Theory. No live website, external image, or production route was used; no item/app content or publication status was changed.
