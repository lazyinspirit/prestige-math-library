# Differential Geometry visual audit — lane 01

**Status: complete.** Assignment coverage: 160 items and 225 screenshot tiles. Every title and full ItemBody was reviewed; all 225 tiles were opened individually at original resolution.

Source, snapshot, rendered HTML, capture records, and screenshot tile hashes were compared. No drift was found.

## Rendering findings and layout observations

- `def-compactly-supported-differential-form`, source line 25 (Definition layout): The source uses display math, while preview HTML places the full formula in an inline KaTeX span inside the definition paragraph. The standalone tile shows it wrapping across lines, with the compact-support condition visible; no formula omission or clipping is confirmed. The prose after the formula reaches the tile’s right edge. The full span is present in the preview HTML; no horizontal scrolling is needed to expose the expression. Screenshot `screenshots/def-compactly-supported-differential-form--01.png` (SHA256 `7cdfb7d82dbf1d3eeaec3ba46860ed53a3f408cac50ae1a247e9bb03d5fa81c7`).
- `fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p`, source line 4 (Title): Raw ASCII subscript and bracket notation is shown in the title (X_p, Y_p, [X,Y]_p), rather than typeset math. Screenshot `screenshots/fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p--01.png` (SHA256 `544a0efc9f00905a54f69f76726b1c366cfab7fa6ea02884ff10ffcb2487af15`).
- `lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor`, source line 4 (Title): Characteristic class and cohomology group appear as plain w2 and H1 in the title, without mathematical subscripts/superscripts. Screenshot `screenshots/lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor--01.png` (SHA256 `071dac9995984e8807272548fee95c99a2d9d8a6a2c422ba0425b17e76248d6e`).
- `fs-the-distance-from-p-is-smooth-on-m-minus-p`, source line 4 (Title): The title expresses the domain as plain “m minus p”, losing the intended manifold-minus-point notation and mathematical typography visible in the statement. Screenshot `screenshots/fs-the-distance-from-p-is-smooth-on-m-minus-p--01.png` (SHA256 `84ebeba0abc0457b3cfc0c30196197a97da550fc81081d653ff8516dba0ca69b`).

## Optional diagram candidates

- `ex-normal-coordinates-on-the-round-sphere`, lines 27, 29–31: an exponential-map domain and antipodal boundary-identification schematic can clarify injectivity on the open tangent ball and collision on its boundary. Details and screenshot evidence are in the JSON.
- `ex-spherical-geodesic-triangle-area-excess`, lines 45–47 and 87: a spherical octant diagram can show its great-circle arcs, vertices, right angles, and area. Details and screenshot evidence are in the JSON.

## Existing diagram

The authored finite-stage interval diagram in `lem-a-c1-map-from-r2-to-r-with-an-interval-of-critical-values` was checked against its source construction and passed; no orientation, index, or sign defect was seen. Capture metadata reports one TikZ diagram and no diagram failures.

## Limits

This is a local visual rendering review, not a proof audit. No live HTTP/site, tests, builds, item/app/tool edits, publication status changes, or Git state changes were made.
