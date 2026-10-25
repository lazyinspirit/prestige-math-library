# Hall Algebras and Tensor Categories rendering audit — lane 01

## Coverage

Reviewed all 26 assigned items and all 54 assigned screenshot tiles. Each tile was opened individually at original resolution. Current source and frozen snapshot digests match; HTML and screenshot hashes match the assignment and per-item capture manifests. The machine comparison found zero hash mismatches. Exact per-item and per-tile SHA256 coverage is in [lane-01.json](lane-01.json).

The review covered frozen titles and complete ItemBodies, LaTeX/MathMarkdown, TikZ, raw ASCII formulas/carets/underscores, reference titles, Scratch disclosure presence/state, clipping, and mathematical maps/orientations/indices/signs in existing diagrams. No live site or HTTP(S) requests were used. Wikilinks rendering as block lines and uppercase CSS technique banners are expected. No reference-title leak, unexpected raw formula in a technique banner, or confirmed clipping defect was found.

## Confirmed findings

1. **A₂ Hall example TikZ source is printed literally** — [ex-a2-quiver-hall-wall-crossing-pentagon](items/ex-a2-quiver-hall-wall-crossing-pentagon.md:37), lines 35–43. The first individually opened original tile shows `\begin{tikzpicture}`, node and arrow commands, and `\end{tikzpicture}` as body text. The intended diagram is the quiver 1→2; that orientation is also stated immediately in prose. This is a confirmed local render defect, not a mathematical arrow-orientation error. See [tile 01](screenshots/ex-a2-quiver-hall-wall-crossing-pentagon--01.png), SHA256 `47beac347ba678074385d4020a6ab6663709b4c347a35b63706a076651ba5eb2`.

2. **Surface-sewing Cardy tikzcd source is printed literally** — [lem-elementary-surface-sewing-relations](items/lem-elementary-surface-sewing-relations.md:80), lines 82–90. The fourth original tile shows raw `~~~tikzcd` / `\arrow` source rather than the diagram. The source specifies `A_{bb}` as source, `A_{aa}` as target, and the intermediate maps `A_{ba}⊗A_{ab} → A_{ab}⊗A_{ba} → A_{aa}` with the flip `τ`; preserve that order and the reversed color labels in a repair. This is a confirmed local render defect. See [tile 04](screenshots/lem-elementary-surface-sewing-relations--04.png), SHA256 `01db9fa108447dcbd02bc8d369d00a6595878f2a3417027cee5e341a80f3d253`.

## Existing diagram checks

- **def-anyonic-fusion-path-space**, lines 40, 44, 46–57: the visible three-site tree has root `c=x₃`, recursively split through `x₂,x₁` to `b=x₀`, with three `a` leaves and basis labels `μ₁, μ₂, μ₃`. Its split direction and parenthesization match the text. No diagram mathematics defect found.
- **def-jordan-quiver-nilpotent-representation-category**, lines 31–49: the loop label is `t`; the square has top/bottom maps `x,x′` and vertical maps `f`, so commutativity states `fx=x′f`. No orientation or index defect found.
- **ex-hereditary-a2-heart-product-in-derived-hall**, lines 35–41: the rendered arrow `1→2` labelled `a` agrees with `V₁→V₂`. No orientation defect found.

## Optional source-supported diagram candidate

- **thm-braided-category-tensor-product-algebra-structure**, lines 27–28 and 41–43. The statement gives `m_{A⊗B}=(m_A⊗m_B)∘(1_A⊗c_{B,A}⊗1_B)`; the proof compares two three-crossing routes on `A⊗B⊗A⊗B⊗A⊗B`, applies both hexagons, then commutes the disjoint crossings `B₁/A₂` and `B₂/A₃`. An optional braid/string diagram could label those routes and crossing order to make the associativity comparison easy to inspect. This is only a candidate: the local proof states the crossing sequence, and no diagram is needed for its validity. See [tile 01](screenshots/thm-braided-category-tensor-product-algebra-structure--01.png).

## Requested supplemental cross-lane checks

These IDs are outside assignment 01 and are not included in its 26-item/54-tile coverage totals. Their local originals were opened individually as requested.

- **def-monoidal-weak-two-category** (lane 06): the original tile visibly contains a red `diagram failed to render` panel followed by the TikZ-cd source instead of the associator pentagon. The source at lines 48–54 requires a comparison between the two composites by the pentagonator `Π`; it must not be depicted as literal equality of 2-morphisms. This confirms the metadata failure visually. Tile SHA256: `9e95d7305d07a8352de728b8311db0a41d6401d5adb4646c857c55ccf521d849`.
- **def-frobenius-object-and-knowledgeable-sewing-data** (lane 03): the first original tile visibly contains literal LaTeX commands and red prose beginning around the colored map/equations list; the second original tile continues with raw `mu`/`epsilon` source and red text, and its diagram convention is also printed as literal `tikzcd` source (source lines 136–143). The metadata-reported KaTeX errors are therefore visibly corroborated, while the first broken segment starts before the first error message excerpt. The displayed raw formulas prevent readers from reliably checking the typed domains/codomains, so I make no visual mathematical certification of that portion. Tile SHA256s: `471324d22ff8fc91834dbc80f4b93145bb3f033b4840593d8d9904852b69195a` and `0007736e9431eadd5c4feb63c67c0653f3004c3639b2b6a5bbf26d52955ddb52`.

## Optional typography

- **ex-hereditary-a2-heart-product-in-derived-hall**, title line 4: display title uses ASCII “A2”; `A₂` would match the notation used in the body. This is optional typography, not a rendering or mathematical defect. See [tile 01](screenshots/ex-hereditary-a2-heart-product-in-derived-hall--01.png).

## Limits

This review covers frozen local source snapshots, HTML previews, capture metadata, and original PNG tiles only; it makes no assertion about live routes. Every assigned tile was opened; no tile is counted as unreviewed. No source item, publication status, application, or publication output was changed. Only lane-01 report files were written.
