# Lane 09 visual review — Hall Algebras and Tensor Categories

Reviewed 25 assigned items and 46 original-resolution tiles.

## Confirmed findings

1. **Malformed TikZ fence — `ex-green-hall-square-and-coproduct-for-finite-vector-spaces`, Statement lines 42–44.** The source starts a `tikzpicture` fence rather than the renderer’s `tikz` fence and omits the `tikzpicture` environment. The standalone tile visibly prints `\node[draw,circle] (v) {$1$};` as raw text. The intended single vertex labelled 1 with no arrows matches the stated quiver; the content is fine and the source block is malformed. Suggested repair: use a `tikz` fence with a `\begin{tikzpicture}` environment. Evidence: [tile](screenshots/ex-green-hall-square-and-coproduct-for-finite-vector-spaces--01.png).

2. **Raw ASCII math — `lem-braided-tensor-product-of-separable-algebras-is-separable`, Proof lines 41–47.** Several mathematical expressions are backtick-delimited code, so the screenshot shows the TeX-like expressions in monospace text instead of formatted math. This is a confirmed rendering issue. In the visible tensorator the crossing is `c_{V,U\prime}`, taking `VU\prime` to `U\prime V`; the displayed candidate section uses the inverse crossing `c_{B,A}^{-1}`, consistent with the Statement. No orientation reversal was visible in these formulas. Suggested repair: replace code ticks around mathematical expressions with math delimiters. Evidence: [tile](screenshots/lem-braided-tensor-product-of-separable-algebras-is-separable--01.png).

## Supplemental metadata items required by the brief

- `def-monoidal-weak-two-category` (lane 06): original tile opened. Its associator pentagon is visibly replaced by a red diagram-failure box with raw tikzcd source. Source lines 50–54 specify the expected associator paths; no rendered diagram remains to check visually. The failure is not a crop artifact. [Tile](screenshots/def-monoidal-weak-two-category--01.png).
- `def-frobenius-object-and-knowledgeable-sewing-data` (lane 03): both original tiles opened. The body visibly contains widespread raw TeX and red error-styled text across the typed colored equations and homomorphism/pairing prose. Lines 140–143 also show the intended two-arrow Frobenius diagram as raw tikzcd source on tile 02, not as a graphic. Its arrows are intended to be parallel endomorphisms of `A⊗A`, labelled `Δ∘μ` and `(1⊗μ)∘α∘(Δ⊗1)`, as stated at lines 136–138. The metadata errors are supported by the image evidence. [Tile 01](screenshots/def-frobenius-object-and-knowledgeable-sewing-data--01.png), [tile 02](screenshots/def-frobenius-object-and-knowledgeable-sewing-data--02.png).

## Existing diagrams and missing-diagram candidates

- The two diagrams in `def-a1-nakajima-framed-quiver-data` render visibly. The one-vertex quiver diagram is an isolated vertex, as required; the framing diagram has arrows `I: W→V_v` and `J: V_v→W`, matching source lines 39–50. The rendered orientation and labels are legible in the original tile.
- The malformed Green Hall diagram is recorded above; its intended single vertex matches the claim.
- No additional missing-diagram candidate is warranted by the inspected lane sources. Other map claims have typed formulas or their operators are already specified algebraically; an extra diagram would be optional rather than needed to clarify a source-supported relationship.

## Optional typography

- Reference-title wikilinks intentionally render as block lines. Some items consequently show punctuation or closing parentheses alone on a following line (including the groupoid-cardinality, Hall–Littlewood, and A1 excess-coefficient definitions). These are optional typography observations, not math defects.
- Uppercase technique banners are expected CSS styling. The raw math/code defects above are recorded separately.

## Coverage and hash record

- All 25 frozen snapshots and current item sources match the assignment SHA-256 values.
- All 25 local HTML files match their assigned HTML SHA-256 values.
- All 46 assigned screenshot tiles match their per-item manifest SHA-256 values and were opened individually at original resolution.
- Exact per-item source, snapshot, HTML, and per-tile SHA-256 values are recorded in `lane-09.json` under `coverage`.
- Supplemental items were inspected for the requested failures and do not count toward lane-09 item or screenshot coverage.

## Limits

Review covers frozen local ItemBody previews, local HTML snapshots, item sources and the listed PNGs. No live HTTP/site route, production navigation, bibliography widget, application code or build was inspected. Rendering observations do not establish proof validity.
