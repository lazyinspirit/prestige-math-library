# Functional Analysis rendering audit — lane 09

Reviewed 93 assigned items and all 164 screenshot tiles individually at original resolution. Source, frozen snapshot, and rendered HTML SHA256 values match the assignment for all items. The review covered each frozen title and body, visible rendered sections, displayed mathematics, titles, reference handling, and any diagram regions.

Confirmed rendering findings: 3.

- **cex-uniform-boundedness-fails-on-an-incomplete-domain** — confirmed: The title renders the sequence-space notation c_00 as literal baseline underscores instead of mathematical subscripts. (source line 4).
- **def-quotient-seminorm** — confirmed: The title displays raw LaTeX delimiters, braces, underscores, and \operatorname instead of formatting the quotient seminorm and distance. (source line 4).
- **lem-c-zero-is-a-closed-subspace-of-ell-infinity** — confirmed: The title renders c_0 with a literal underscore and does not identify ell-infinity in mathematical typography. (source line 4).

## Diagram review

No assigned source contains TikZ or tikzcd, so there are no existing diagrams to validate. No claim warrants an additional diagram: the maps and operator relations reviewed are already explicit in formulas and proof text, and a schematic would not clarify a domain, codomain, orientation, index, or sign. Selected map and sign checks are recorded in lane-09.json.

## Other observations

- Inline wikilinks render as standalone lines by owner decision; surrounding punctuation was treated as expected layout.
- Uppercase technique banners are expected; any raw mathematics within them was assessed separately.
- No Scratch heading occurs in the assigned frozen bodies.
- No clipping was confirmed from original-resolution standalone tiles.
- Coverage and exact SHA256 values for all 93 source/snapshot/HTML triples and 164 screenshot tiles are in [lane-09.json](lane-09.json).

## Limits

Review was local and read-only, using frozen snapshots, static rendered HTML, and assigned screenshots. No live website or HTTP source was inspected. No item content, tools, or publication status was changed.
