# Complex Analysis lane 02 rendering review

## Coverage

Reviewed all 141 assigned items and all 284 local screenshot tiles individually at original resolution. For every item, assigned source/current source/frozen snapshot and assigned/current preview HTML SHA256 values match. Exact per-item and per-tile hashes are recorded in [lane-02.json](lane-02.json).

## Confirmed rendering findings

- **cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy — Title, line 4:** The title shows the literal caret in C^2 instead of a superscript; the statement below renders C² correctly. Evidence: `screenshots/cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy--01.png`. Suggested repair: Render C^2 as inline math in the title or spell out the space in words.
- **ex-real-rational-function-with-finite-taylor-radius — Title, line 4:** The title shows x^2 with a literal caret rather than a superscript. Evidence: `screenshots/ex-real-rational-function-with-finite-taylor-radius--01.png`. Suggested repair: Render the exponent with title-supported math markup or write “one plus x squared”.
- **ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc — Title, line 4:** The title shows z^5 with a literal caret rather than a superscript. Evidence: `screenshots/ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc--01.png`. Suggested repair: Render z^5 as inline math in the title or spell out “z to the fifth power”.
- **lem-nevanlinna-growth-dominates-logarithm — Proof technique banner, line 52:** The uppercase proof-technique banner exposes literal dollar delimiters around T=O(log r); the rest of the math in the statement/proof renders normally. Evidence: `screenshots/lem-nevanlinna-growth-dominates-logarithm--01.png`. Suggested repair: Use plain text such as “T is O(log r)” in the banner or the banner field’s supported math syntax.
- **thm-ring-of-level-one-modular-forms — Proof technique banner, line 67:** The uppercase proof-technique banner exposes literal dollar delimiters around k and 12. Evidence: `screenshots/thm-ring-of-level-one-modular-forms--01.png`. Suggested repair: Use plain text “induction on the weight k in steps of 12” or the banner field’s supported math syntax.

Other sampled MathMarkdown is legible and rendered as expected. Reference titles appear as intentional block-line wikilinks under the repository schema. The uppercase CSS proof-technique banners are expected; the two findings above are raw dollar-delimited formulas inside those banners.

## Diagram candidates

### lem-planar-piecewise-analytic-region-triangulation

- **Source:** lines 57, 73, 109, 114, 126, 7. The compact region R is a face-to-face finite union of curvilinear triangles; the construction rotates axes, cuts at critical and auxiliary horizontal walls, orders boundary graphs, pulls non-pinched bands back by Φ(x,y)=((x−g_lower(y))/(g_upper(y)−g_lower(y)),y), uses rectangle fans, and splits pinched bands by a quotient.
- **Kind:** planar construction sequence: region/slab cross-sections plus rectangle-to-band maps and triangulation.
- **Reason and concrete checks:** The proof is a geometric construction whose critical choices and orientation are difficult to reconstruct from prose; a schematic can make the bands, pinches, marks, fan, pullback, and face-to-face matching checkable. Draw/check: A bounded multiply connected plane region R with sample piecewise analytic boundary components and finite interior set P. An orthonormal rotated (x,y) frame and horizontal walls through special heights plus auxiliary walls avoiding P. For one slab, ordered graphs g1<…<g2n with included bands [g1,g2], [g3,g4], etc. For a non-pinched band, label Φ from curved band C to [0,1]×[w,w′], then a rectangle fan centered at q=(s*,h) and its pullback; indicate orientation of the positively oriented boundary (bottom, β upward, top, α downward). A separate pinched-band inset showing Ψ collapsing a rectangle end edge to the pinch, the lower triangle, and horizontal cut shared with the upper fan. Wall marks shared by adjacent bands and the requirement that no point of P lie on an edge.
- **Status:** candidate (source-backed visualization opportunity; no correctness defect asserted).
- **Local evidence:** `screenshots/lem-planar-piecewise-analytic-region-triangulation--01.png`, `screenshots/lem-planar-piecewise-analytic-region-triangulation--02.png`.

### thm-local-normal-form-holomorphic-map-riemann-surfaces

- **Source:** lines 38, 50, 74, 78. There are centered charts φ at x and ψ at f(x) with ψ∘f∘φ⁻¹(z)=z^e for a unique positive integer e; e=1 iff f is locally biholomorphic.
- **Kind:** local branched-cover map between coordinate discs.
- **Reason and concrete checks:** A two-disc schematic can show the coordinate conjugation and the local e-to-1 behavior around the branch value, connecting the algebraic normal form to its geometric consequence. Draw/check: Source disc with center x and coordinate z=φ(·); target disc with center f(x) and coordinate w=ψ(·). Arrow labelled ψ∘f∘φ⁻¹:z↦z^e. For e>1 show e local sheets/sectors mapping to a target neighborhood and the common branch value at 0; for e=1 show local one-to-one case. Keep the display explicitly local (“near 0”) and avoid implying a global covering or a global choice of charts.
- **Status:** candidate (source-backed visualization opportunity; no correctness defect asserted).
- **Local evidence:** `screenshots/thm-local-normal-form-holomorphic-map-riemann-surfaces--01.png`.

## Existing diagrams and Scratch

No TikZ/TikZ-cd or equivalent diagram fences occur in the assigned sources, so there were no existing diagram maps, orientations, indices, signs, or labels to check. No assigned item has a Scratch section.

## Clipping and limitations

No clipping defect was confirmed. Tile splits correspond to screenshot capture boundaries; there is no clipping claim requiring a crop. Review used only local frozen snapshots, preview HTML, and PNGs; no live site or HTTP(S) requests were accessed. The source, snapshot, and preview hashes all match, so there is no source drift. Optional diagram candidates are not asserted defects.
