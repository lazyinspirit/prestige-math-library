# Hall Algebras and Tensor Categories visual audit — lane 02

## Scope and coverage

Reviewed all 26 assigned frozen item titles and complete ItemBody content. Opened all 49 assigned screenshot tiles individually at original resolution. The ledger records expected and observed SHA256 values for every item source, snapshot body, rendered HTML file, and screenshot tile; all 26 source hashes, snapshot body hashes, HTML hashes, and all 49 tile hashes match. Two requested out-of-lane captures were also inspected individually and are recorded separately.

## Confirmed rendering findings

- **Raw underscore notation in title:** `def-four-cocycle-twisted-monoidal-structure-on-2vect-g`, [source line 4](../../../items/def-four-cocycle-twisted-monoidal-structure-on-2vect-g.md#L4); the title displays `2Vect_G` literally, without a subscript. See [original tile](screenshots/def-four-cocycle-twisted-monoidal-structure-on-2vect-g--01.png).

The title “sl2 modular data at ell=4” is legible but uses plain notation; this is listed as optional typography, not a rendering defect. Uppercase technique banners are expected. Wikilink titles render as intentional block lines. No Scratch section, reference-title leak, or confirmed clipping appeared in the assigned tiles.

## Diagram review

The existing Kronecker quiver diagram in `cex-kronecker-composition-subalgebra-is-proper`, [source lines 28–36](../../../items/cex-kronecker-composition-subalgebra-is-proper.md#L28), has two parallel arrows from vertex 1 to vertex 2, labelled `a` and `b`; this matches the stated quiver. The anyonic channel projector diagram in `def-anyonic-local-channel-projector`, [source lines 33–35 and 69–72](../../../items/def-anyonic-local-channel-projector.md#L33), carries coordinates by `F_i`, applies `Π_s`, then returns by `F_i^{-1}`. This matches `P_{i,s}=F_i^{-1}Π_sF_i`; no map direction, inverse, index, or sign defect was observed.

One optional, source-supported candidate is a typed horizontal-composition pasting diagram for `ex-codimension-typed-defect-composition`, [source lines 40–42](../../../items/ex-codimension-typed-defect-composition.md#L40): show `f:A→B`, `g:B→C`, 2-cells `α:f⇒f′` and `β:g⇒g′`, and `β∗α:g∘f⇒g′∘f′` in `B(A,C)`, keeping `A⊗C` distinct from `g∘f`. This would make the example’s typing distinction easier to scan, but the prose already states it precisely, so the diagram is optional ([local tile](screenshots/ex-codimension-typed-defect-composition--01.png)).

## Separately requested out-of-lane captures

- `def-monoidal-weak-two-category` (lane 06): its original tile visibly replaces the ordinary pentagon with a red “diagram failed to render” panel containing raw `tikzcd` source. This is directly visible in the tile, not inferred from metadata. See [tile](screenshots/def-monoidal-weak-two-category--01.png).
- `def-frobenius-object-and-knowledgeable-sewing-data` (lane 03): the original tiles visibly show several typed equations and explanatory prose as raw LaTeX/backslash text, including red parse-error prose; the second tile also shows the intended `tikzcd` as literal code rather than a diagram. Metadata reports KaTeX parse errors, consistent with the visible failure. See [tile 1](screenshots/def-frobenius-object-and-knowledgeable-sewing-data--01.png) and [tile 2](screenshots/def-frobenius-object-and-knowledgeable-sewing-data--02.png).

No source or item was edited, no publication status changed, and no website or live route was accessed. Only the lane-02 report files were written.
