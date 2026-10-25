# Hall Algebras and Tensor Categories rendering audit — lane 04

Reviewed all 26 assigned frozen item titles and complete ItemBodies, together with all 43 assigned screenshot tiles. Every tile was opened individually at original resolution with `tools.view_image`. Current source, frozen snapshot, HTML, and PNG hashes match the assignment records; there are no unreviewed items or tiles. Per-item and per-tile SHA256 coverage is in [lane-04.json](lane-04.json).

## Confirmed rendering defects

- `cex-omitting-strictly-semistable-objects-breaks-hn-factorization`, source lines 30–36: the `~~~tikz` fence for the A₂ quiver displays literally as monospaced TikZ source in its original screenshot. The intended vertices and arrow (1→2) agree with the prose at line 38 and the counterexample. Sidecar metadata reported `tikz_count: 0` and no diagram failure, so it missed the visual defect.
- `ex-jordan-quiver-extension-correspondence`, source lines 32–39: the one-vertex loop-quiver TikZ fence also appears as literal source rather than a picture. Its source loop and label `x` match the example prose. The image provides no rendered arrow to inspect.

No other assigned raw ASCII formulas, carets, underscores, titles, or inline mathematics showed a confirmed notation defect. KaTeX error sidecars are empty for the 26 assigned items. No standalone clipping was confirmed. Wikilinks render as separate block lines as expected; uppercase proof-technique banners are expected CSS styling and contain no raw inline math. No assigned ItemBody contains a Scratch section or disclosure.

## Diagram checks

The two source-level quiver diagrams have the correct specified content: the A₂ arrow points 1→2, and the Jordan quiver has one vertex with a loop labelled `x`. Their diagrams are not actually visible in the rendered tiles because the fences are emitted as source text. There is no additional missing-diagram candidate in this lane: those authored quiver pictures already encode the relevant data, and the remaining arguments state their relations directly. No mathematical defect in the source-level quiver orientation was found.

## Additional diagnostic tiles opened

I also independently opened the nominated original tiles for `def-monoidal-weak-two-category` and `def-frobenius-object-and-knowledgeable-sewing-data` (outside lane 04). The former visibly has a red diagram-failure panel where the associator pentagon is described; its source labels follow the standard pentagon directions, but the `tikzcd` does not render. The latter shows widespread raw LaTeX and red parse-error fragments across the typed colored equations; its lower tile also exposes an unrendered `tikzcd` Frobenius diagram. That diagram's two source composites each have type (A\otimes A\to A\otimes A), with the associator in the second composite, matching the local convention. The broken images do not permit a full rendered arrow/sign check. Original paths, hashes, visible defects, and source references are recorded in the JSON.
