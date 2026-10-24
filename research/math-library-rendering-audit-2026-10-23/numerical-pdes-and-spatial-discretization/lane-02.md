# Numerical PDEs and Spatial Discretization — lane 02 rendering audit

## Coverage

Reviewed all **114 assigned items** and all **166 receipt-listed PNG tiles**. Each frozen title and complete ItemBody was checked against the local snapshot and rendered HTML; every tile was opened individually at original resolution. Assignment, source, snapshot, HTML, receipt, and tile hashes are recorded in `lane-02.json`. There are no hash mismatches, unreviewed items, missing tiles, KaTeX errors, or receipt-reported diagram failures. No standalone clipping was confirmed.

No lane-02 item appears in `frontmatter-parse-blockers.json`; all assigned items have canonical snapshot/render coverage. The category's separate parser blockers remain metadata-parse issues and are not counted as visual findings.

## Confirmed finding

- **[ex-na-two-triangle-hybrid-static-condensation, source lines 47–49 and 72–88](../../../../items/ex-na-two-triangle-hybrid-static-condensation.md:47):** the mesh split and cell labels match the two-triangle setup, but the arrows labeled `u_1` and `u_2` do not match the stated fields or the shared-facet flux convention. The source gives `u_1=(1/2)(x-1,y)` and `u_2=-(1/2)(x,y-1)`, with integrated outward fluxes `+1/2` and `-1/2`; the depicted arrows sit inside the cells and point down-left and up-right, respectively. At both arrow tails the displayed fields point up-left. A local crop also confirms the `λ` label is drawn over the shared diagonal. The figure is present in tile `--02` (SHA256 `3c2fc137350cf93429fb063b7270196b63703293435a3460fc54196b74b6d3ec`); the complete tile was checked standalone, then cropped locally to inspect the arrow and label placement. Suggested repair: remove the arrows or redraw them as explicitly signed outward facet fluxes, and move `λ` clear of the diagonal. The proof computes the exact fluxes and does not rely on the diagram.

## Optional diagram opportunity

`def-na-periodic-staggered-grid-stokes-operators`, source lines 32–39 and 45–55, is a possible editorial candidate. A compact 2D periodic MAC-grid sketch could show cell-center pressure, face-centered velocity, the forward pressure difference and the right-minus-left cell divergence, including periodic wrap. Those placements and signs are stated precisely in prose and formulas, so a figure is optional.

Other assigned items had no high-likelihood missing diagram. Their spatial or geometric relations are either already stated clearly or are not helped enough by a diagram to warrant one. See the JSON for item-by-item coverage, all tile hashes, exact source lines, and the diagram opportunity details.
