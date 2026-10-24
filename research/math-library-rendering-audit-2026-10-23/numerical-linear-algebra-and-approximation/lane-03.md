# Numerical Linear Algebra and Approximation rendering audit — lane 03

Reviewed all 100 assigned titles and complete ItemBodies, and all 138 receipt-listed screenshot tiles. Each PNG was opened individually with `tools.view_image(detail="original")`; no collage or resizing was used. The frozen snapshots, current source files, and local screenshot tiles match their assigned or receipt SHA-256 digests. Per-item body coverage and each tile path, digest, and original-resolution attestation are recorded in [lane-03.json](lane-03.json).

The review used frozen local artifacts only. No live website, HTTP(S), external network, production source, app, library, native loader, publication-status edit, build, test, or gate was accessed or changed.

## Confirmed rendering defects

- `lem-sobolev-zeros-bound-on-a-cone-domain`: title line 4 displays `h^ν` as literal caret notation, while the body typesets its mathematics.
- `lem-simplicial-four-polytope-facet-count`: title line 4 displays `m(m−3)/2` as ordinary text, while the statement body typesets the bound.
- `thm-mixed-precision-refinement-error-recurrence-and-floor`: Statement lines 36–39 display mathematical formulas as raw ASCII throughout the preview; hats, subscripts, norms, and inverse powers are not typeset.

Exact frozen snapshot lines, symptoms, suggested repairs, and tile paths and hashes are in the JSON ledger.

## Recovered body-preview coverage

`lem-scaled-chebyshev-filter-bound-on-a-separated-interval` is one of the 10 items with a strict source YAML parse blocker recorded in `frontmatter-parse-blockers.json`. The title and complete body were reviewed using the preview-only metadata fallback, which preserves the frozen source snapshot/body bytes and removes only the malformed `proof_strategy` and indented judge metadata. This is recovered body-preview coverage, not successful canonical parsing or native-loader coverage. No visual rendering defect was confirmed for this item; the metadata parse blocker remains separate.

## Diagram review

No existing mathematical diagrams appeared in the assigned previews, so there were no existing diagram labels, maps, domains/codomains, signs, orientations, indices, or combinatorics to check. One optional editorial candidate is recorded for `alg-nested-dissection-ordering-on-regular-grids`: a 2D median-row/median-column separator split with child boxes and recursive ordering. The candidate is source-supported and must not imply fill or complexity claims absent from the item.

The complete item and tile inventory, metadata recovery note, findings, and diagram checks are in [lane-03.json](lane-03.json).
