# Symmetric Groups and Symmetric Functions rendering audit — lane 03

## Coverage

- Reviewed all 32 assigned titles and complete ItemBodies against their frozen snapshots, current source, and local HTML. Opened all 75 assigned PNG tiles individually with `tools.view_image` at original resolution.
- Assignment source hashes, snapshot hashes, local HTML hashes, and capture-receipt tile hashes all match. Per-item hashes, receipt data, capture positions, and view attestations are in [lane-03.json](lane-03.json).
- Capture receipts report zero KaTeX errors, zero diagram failures, and zero TikZ diagrams. No clipped content or literal TeX source was visible.

## Rendering findings

No confirmed ItemBody LaTeX/TikZ rendering defects. Formula notation, delimiters, subscripts, superscripts, and operator sizing were legible in the reviewed captures.

A minor title typography observation: the titles for [ex-jucys-murphy-spectrum-and-projectors-for-s3, line 4](../../../items/ex-jucys-murphy-spectrum-and-projectors-for-s3.md:4) and [ex-r-cycle-filter-for-nu-three-two-and-r-three, line 4](../../../items/ex-r-cycle-filter-for-nu-three-two-and-r-three.md:4) show plain-text `S_3` / `S_8` underscores (and `ν=(3,2)` in the latter). Their ItemBodies use math delimiters. This is recorded as optional typography, not a confirmed rendering defect.

## Diagram review

No existing TikZ diagrams were assigned. One optional candidate is the abacus definition: [def-e-core-e-quotient-and-e-weight, lines 45–64](../../../items/def-e-core-e-quotient-and-e-weight.md:45). A small e-runner sketch could show beads at positions `ae+i`, their top-packing on each runner, and the resulting core and quotient partitions. The prose and formulas already define the construction fully, so this is an editorial aid rather than a missing requirement.

No other high-likelihood missing diagram was identified. This review covers local rendering, not live routes or full mathematical correctness. No source items, application files, or publication statuses were changed.
