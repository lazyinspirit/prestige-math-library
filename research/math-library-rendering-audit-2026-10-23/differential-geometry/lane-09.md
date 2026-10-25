# Differential Geometry rendering review — lane 09

Reviewed 2026-10-24. This review covers assigned item titles and complete ItemBodies. It is read-only and used local snapshots, source files, rendered HTML, and original-resolution screenshot tiles; it did not access the live site.

## Coverage and integrity

- Reviewed all 159 assigned items and all 239 screenshot tiles individually at original resolution (1200 px wide; final tiles are shorter as documented in the JSON). No collages or scaled-down views were used.
- Each title and full frozen ItemBody was reviewed. Each item’s source SHA256, HTML SHA256, and every tile SHA256 matched its assignment/capture manifest: 0 mismatches and 0 drift.
- All captures provide gapless coverage from document y=0 through their recorded document height. Tile overlap is recorded per item in the JSON. KaTeX errors: 0. TikZ render failures: 0.
- No clipping defect was confirmed from standalone original-resolution tiles. Apparent tile-edge cutoffs were checked against the adjacent overlapping tile.
- Scratch disclosures were opened under the audit capture protocol. Wiki links appearing as separate block lines are expected in this renderer and were not reported as defects.
- No existing TikZ/TikZCD diagrams occur in these 159 ItemBodies, so there were no existing diagram maps, orientations, indices, or signs to verify.

## Rendering defects

1. `ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity`, source line 87: the uppercase proof-technique banner exposes inline math source such as `\\exp_p`, `K=0`, and `\\pi_1(T^n)`. The regular proof body renders its equations.
2. The same item, source line 99: the conclusion visibly ends `∎ ## Source locator`; the following locator paragraph is rendered as body text. The source heading is on line 101. This is a local ItemBody Markdown-boundary defect.
3. `lem-local-length-comparison-for-a-conjugate-free-geodesic`, source line 212: the proof-technique banner exposes literal delimiters and formula source, including `\\exp_p` and `\\sqrt{r^2+\\sigma^2}`; ordinary proof-body math renders.
4. `lem-second-countable-smooth-manifolds-have-cw-homotopy-type`, source line 143: the conclusion displays `∎ ## Remarks` inline. Here the heading text is authored on the same source line as the conclusion.
5. `thm-rauch-comparison-theorem-second-form`, source line 97: the uppercase proof-technique banner exposes its tensor equation and symbols, including `y''+R_\\gamma y=0`, `\\operatorname{id}`, and `\\lambda\\operatorname{id}`.
6. `ex-cut-locus-on-a-flat-rectangular-torus-from-the-dirichlet-cell`, source line 153: the proof ends with `QED ## Source locator` visibly appended; the locator starts on the next line.

The full exact source excerpts, displayed fragments, and individual confirming tile paths and hashes are recorded in [lane-09.json](lane-09.json). No optional typography observations were promoted to defects. The uppercase technique treatment itself appears to be expected; the defect is raw math markup inside it.

## Diagram review

One source-supported missing diagram is warranted:

- `ex-cut-locus-on-a-flat-rectangular-torus-from-the-dirichlet-cell`, source lines 61–77. The source defines `Q=R²/(aZ×bZ)`, the rectangular Dirichlet cell `D=[−a/2,a/2]×[−b/2,b/2]`, its positive tangent cut domain, and `Cut(p)` as the quotient image of `∂D`. It states that opposite edges are identified, relative-interior edge classes have two nearest lattice lifts, and the corner class has four. A diagram can distinguish the tangent cell from its quotient image, show opposite-edge identifications and radial first-exit directions, and illustrate the two-lift versus four-lift cases. The stated counts are consistent for positive periods; this is a clarity candidate, not a suspected mathematical error.

A sphere transport sketch for `cex-path-dependent-parallel-transport-on-the-sphere` is recorded as a possible candidate in the JSON only. It needs precise source verification of arc direction and vector labels before drawing. No other candidate was added without explicit source support.

## Files

- [lane-09.json](lane-09.json) has per-item source, HTML, snapshot, and rendering metadata; exact per-tile dimensions, y coverage, SHA256 and overlap; findings; and diagram review evidence.
