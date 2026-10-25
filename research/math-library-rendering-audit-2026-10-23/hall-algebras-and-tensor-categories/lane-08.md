# Lane 08 visual audit

Read-only local review of all 25 frozen lane-08 items and all 59 assigned screenshot tiles. Every tile was opened individually at original resolution. The item source and frozen snapshot SHA256s match for all 25 items; all assigned HTML and screenshot SHA256s match their capture metadata. No assigned item, tile, or hash drift was left unreviewed. Full hashes and item coverage are in [lane-08.json](lane-08.json).

## Visible rendering findings

- `ex-one-vertex-finite-quiver-hall-integration-is-quantum-dilogarithm`, source lines 35–39: the screenshot prints the fenced TikZ source (`\begin{tikzpicture}`, node, `\end{tikzpicture}`); the quiver vertex is absent.
- `lem-relative-surface-collars-and-elementary-decomposition`, lines 44–61: the local-model `tikzcd` source appears as literal `\text{...}` and `\arrow[...]` text; the diagram is absent. Its later proof table is rendered.
- `thm-modc-relative-deligne-product-is-algebra-tensor-product`, lines 44–58: several formulas in code spans/plain text (for example `K=A⊗B`, `r_A=...`, `theta^-1`, `d⊙_K L`) appear as source-like ASCII/code notation rather than mathematical typography. Nearby delimited KaTeX renders.
- Wikilink title references are displayed as block lines in several items, consistent with the specified renderer behavior. CSS technique banners use expected uppercase styling; no separate typography-only issue was recorded. No confirmed clipping was seen at joins; adjacent screenshot tiles overlap and were inspected independently.

## Requested supplemental defect checks

- `def-monoidal-weak-two-category`, lane 06 original tile: visibly shows a red “diagram failed to render” block at the pentagon (source lines 48–54). This confirms the metadata report visually.
- `def-frobenius-object-and-knowledgeable-sewing-data`, lane 03 original tiles: visibly show raw Markdown/LaTeX source and red KaTeX error blocks across the typed equations; the later portion of the item recovers. This confirms the metadata errors visually.

## Existing diagrams and candidates

The two derived Hall squares render and their arrows/indices are consistent with the local definition: the first square compares the target of the first arrow with the source of the second and records the second cofiber; the second compares the composite source and induced cofiber map with source/cofiber of the composite. See `diagram_review` in the JSON for the full map check.

No missing diagram is clearly necessary. Two optional, source-supported candidates are recorded in the JSON: a basis-map picture for the convention-sensitive positive Hopf/core-twist matrices in `cor-rt-torus-and-state-dimension-formula` (lines 29–41), and a Hecke correspondence sketch for the common-A incidence and projections in `lem-a1-arbitrary-framing-cotangent-hecke-model` (lines 43–55). Both are uncertain additions because the source already states the maps explicitly.

## Limits

This review used local frozen source, HTML, metadata, and original screenshot tiles only. It was not a proof audit and did not use the live website or HTTP.
