# Combinatorics rendering audit — lane 10

Reviewed all 141 assigned item titles and complete ItemBodies and viewed all 189 assigned screenshot tiles at original PNG resolution. Every tile hash, crop offset, dimensions, and item/HTML hash binding is recorded in `lane-10.json`. No item or publication status was changed; no live website or HTTP(S) was used.

Confirmed rendering defects: 8.

- **cex-a-non-locally-finite-poset** — The Remarks diagram is displayed as literal TikZ source in monospace text across screenshot tiles instead of a diagram. The screenshot sidecar reports tikz_count 0; this is a visible source/rendering mismatch. (source line(s) 61, 63, 65; tile(s) cex-a-non-locally-finite-poset--01.png, cex-a-non-locally-finite-poset--02.png).
- **cex-connected-graphs-are-not-hereditary** — The Remarks diagram for P3 and its induced endpoint subgraph is displayed as literal TikZ commands rather than a diagram. (source line(s) 54, 56, 58; tile(s) cex-connected-graphs-are-not-hereditary--01.png).
- **cex-strict-whitney-connectivity-inequalities** — The proposed two-lobe connectivity diagram is displayed as literal TikZ commands over screenshot tiles --01/--02 rather than as a diagram. (source line(s) 56; tile(s) cex-strict-whitney-connectivity-inequalities--01.png, cex-strict-whitney-connectivity-inequalities--02.png).
- **cor-the-bird-graph-is-generalized-nice** — The uppercased Proof technique line exposes inline-math delimiters and the LaTeX command literally (for example `$(*)$` and `\mathrm{BIRD}`), while the same symbols render correctly in surrounding ItemBody text. (source line(s) 51; tile(s) cor-the-bird-graph-is-generalized-nice--01.png).
- **ex-co-bird-e-neighbourhood-case-table** — The purported 62-row table is emitted as a paragraph containing literal pipe separators and wraps as a long unformatted string. Standalone tile --02 shows this output; generated HTML wraps it in `<p>` and contains no `<table>` element. (source line(s) 52; tile(s) ex-co-bird-e-neighbourhood-case-table--02.png).
- **thm-perfect-graphs-satisfy-kappa-at-least-their-order** — The title renders the mathematical relation as raw ASCII text `|V(G)|<=kappa(G)`; the same inequality in the Statement is typeset. (source line(s) 4; tile(s) thm-perfect-graphs-satisfy-kappa-at-least-their-order--01.png).
- **ex-partitions-into-three-parts-of-five-from-the-recurrence** — The title renders the partition-count notation as literal ASCII `p_3(5)=2`, unlike the properly typeset formula in the Example body. (source line(s) 4; tile(s) ex-partitions-into-three-parts-of-five-from-the-recurrence--01.png).
- **lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph** — The title exposes exponent notation as literal caret text (`y^(10/3)`, `y^(11/3)`); the statement below typesets those powers. (source line(s) 4; tile(s) lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph--01.png).

## Diagram review

No mathematical mismatch was found in the shown diagrams for the poset interval, fundamental cycle/cut, width-three poset, handshake example, or K3,3 Hamilton-cycle example. A lattice-path crossing/non-crossing illustration for `thm-lindstrom-gessel-viennot` is an editorial option only; the current text is not defective.

Exact per-item source and HTML SHA-256 hashes and per-tile PNG SHA-256 hashes are in `lane-10.json`.
