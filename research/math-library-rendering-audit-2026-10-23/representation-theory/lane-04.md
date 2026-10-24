# Representation Theory rendering audit — lane 04

## Coverage

- Reviewed all 71 assigned frozen titles and complete ItemBodies against their snapshots, current source, and local HTML. Opened all 158 assigned PNG tiles individually with `tools.view_image` at original resolution.
- Assignment, current-source, snapshot, HTML, and screenshot hashes match their records; exact per-item and per-tile values and capture positions are in [lane-04.json](lane-04.json).
- Capture receipts report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. No raw TeX/TikZ, broken formula, standalone clipping, or reference-title leak was confirmed. Reference links appear as separate linked lines, sometimes with adjacent punctuation on its own line.

## Diagram opportunities

- **Optional two-flag intersection grid:** [thm-relative-position-classifies-pairs-of-complete-flags, lines 47–63](../../../items/thm-relative-position-classifies-pairs-of-complete-flags.md:47) defines the invariant from a pair of flags, gives `dim(V_i ∩ E_j) = j − r_{i+1,j}(g)` for the standard first flag, and identifies the southwest rank matrix with a Bruhat cell and permutation. The closing remark at line 107 explicitly invokes the direction of a picture. A schematic can show the two nested flags, the intersection-dimension grid, the southwest rank block, and the map to `B\G/B ↔ S_n`; preserve the row/column convention and keep the proof independent of the drawing.
- **Optional colored KLR strand notation:** [def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators, lines 61–86](../../../items/def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators.md:61) defines dots, crossings, colors, quadratic and braid relations, and the geometric crossing classes. A small strand diagram could orient the indexed relations, with the distinct-color dot slides, equal-color signs, `Q`-quadratic relation, and outer-equal-color braid correction shown exactly as stated. Keep the standard fundamental class distinct from the signed generator normalization in lines 65–72. The definition is already algebraically complete; no proof depends on a picture.

These are uncertain editorial additions. No rendering defect or existing diagram was found in this lane.

## Boundary

This review covers local rendering and diagram opportunities, not full mathematical correctness or live routes. No item files, application files, or publication statuses were changed.
