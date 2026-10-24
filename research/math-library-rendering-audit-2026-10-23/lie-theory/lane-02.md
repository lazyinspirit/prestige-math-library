# Lie Theory rendering audit — lane 02

Reviewed the 108 items in `assignment-02.json` against their frozen Markdown snapshots and local HTML. All source and HTML hashes matched the assignment; snapshot hashes are recorded in the ledger. Opened each of the 166 assigned PNGs separately with `view_image` at original resolution; the JSON ledger records every tile path and SHA-256 with its item coverage.

## Confirmed rendering defects

- `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra`: source line 47 puts `\dim\mathfrak g` inside the proof-technique sentence. The local HTML renders the technique banner as literal TeX (`INDUCTION ON $\DIM\MATHFRAK G$`) while ordinary body math is rendered. This is a confirmed raw-math rendering defect.
- `ex-pbw-reordering-in-sl-two`: source line 4 titles the item “PBW reordering in sl_2”. The rendered H1 exposes the underscore as `sl_2`; the body uses rendered `\mathfrak{sl}_2`. This is a confirmed title typography/rendering defect.

## Diagram review

No source-authored TikZ or standalone mathematical diagrams occur in the assigned snapshots. The SVG elements present in local HTML are MathJax formula output, not diagrams. No existing diagram mathematics required correction. I found no Scratch markers or reference-title leaks. Linked references render as blocks as intended; link wrapping and dangling punctuation were not counted as defects.

Source-supported diagram candidates, both editorial suggestions rather than confirmed errors:

- `thm-classification-of-irreducible-reduced-crystallographic-root-systems`, source lines 32, 35–41, 62–70: a Dynkin diagram classification plate. Draw the simple path A_n; endpoint double-edge paths B_n and C_n with opposite arrow directions; D_n with arms (1,1,n−3); E6, E7, E8 with arms (1,2,2), (1,2,3), (1,2,4); F4 as a four-node path with a central double edge; and G2 as two nodes with a triple edge. Label the stated low-rank identifications B1=C1=A1, B2=C2, D2=A1⊔A1, and D3=A3. Check edge counts, arrow direction to the short root, and arm lengths against the source.
- `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams`, source lines 28–32, 40–44, 50–54: a classification correspondence schematic. Show connected diagram components Γ1,…,Γm, retaining repeated components, mapped to simple ideals g1,…,gm and their direct sum; show the reverse map from an ideal decomposition to its multiset of component diagrams. Check that permuting summands leaves the isomorphism class unchanged and that multiplicities remain visible.

## Coverage and hashes

The machine-readable ledger [lane-02.json](lane-02.json) contains the exact 108-item inventory, assignment-matched source and HTML hashes, frozen-snapshot hashes, and all 166 individually viewed tile paths and hashes. Items without assigned PNGs have an empty tile list; no unassigned screenshots are included.

No live website or external source was accessed, and no builds, tests, gates, app edits, or publication changes were made.
