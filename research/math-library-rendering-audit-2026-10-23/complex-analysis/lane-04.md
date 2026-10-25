# Complex Analysis rendering audit — lane 04

Assignment: `assignment-04.json`. Scope: Local frozen snapshots, preview HTML, and local PNGs only; no live-site access or HTTP(S) requests.

Reviewed 140 assigned items and 256 screenshot tiles. All 140 source files matched their frozen snapshots; all 256 tiles were opened individually at original resolution. Exact expected and actual SHA256 values are listed per item and tile in `lane-04.json`.

## Confirmed rendering findings

### `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x` — Title

- Source: `items/ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x.md` lines 4.
- Source evidence: The title includes `x^(alpha-1) / (1 + x)` and `pi / sin(pi alpha)` without math delimiters.
- Rendered symptom: Formula syntax is rendered as literal ASCII in the title instead of typeset math.
- Local screenshot: `screenshots/ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x--01.png`
- Suggested repair: Use supported inline math delimiters around the expressions.

### `ex-poisson-integral-of-cos-theta` — Title

- Source: `items/ex-poisson-integral-of-cos-theta.md` lines 4.
- Source evidence: The title includes `cos(theta)` without math delimiters.
- Rendered symptom: The formula is rendered literally in the title rather than typeset.
- Local screenshot: `screenshots/ex-poisson-integral-of-cos-theta--01.png`
- Suggested repair: Use supported inline math delimiters around the formula.

### `lem-keyhole-branch-boundary-values` — Title

- Source: `items/lem-keyhole-branch-boundary-values.md` lines 4.
- Source evidence: The title includes `z^(alpha-1)` without math delimiters.
- Rendered symptom: Exponent notation renders as raw ASCII in the title rather than a typeset expression.
- Local screenshot: `screenshots/lem-keyhole-branch-boundary-values--01.png`
- Suggested repair: Use supported inline math delimiters around the expression.

### `lem-nevanlinna-poisson-jensen-derivative-bound` — Proof technique banner

- Source: `items/lem-nevanlinna-poisson-jensen-derivative-bound.md` lines 38, 39, 40, 41.
- Source evidence: The technique text contains math delimiters and symbols such as `$1/|z-c|$` and `$\alpha$` inside the CSS uppercase banner.
- Rendered symptom: Uppercase technique styling is expected, but its mathematical expressions are exposed as literal dollar delimiters and formula source.
- Local screenshot: `screenshots/lem-nevanlinna-poisson-jensen-derivative-bound--02.png`
- Suggested repair: Render the technique math through supported math handling or rewrite the banner expressions in plain prose.

### `thm-branch-power-agrees-with-integer-powers` — Proof technique banner

- Source: `items/thm-branch-power-agrees-with-integer-powers.md` lines 47.
- Source evidence: `induction ... with exp(mL(z))=z^m` includes `$...$` math delimiters in the technique banner.
- Rendered symptom: The uppercase technique banner exposes its math delimiters/formula source literally.
- Local screenshot: `screenshots/thm-branch-power-agrees-with-integer-powers--01.png`
- Suggested repair: Use the supported banner math form or rewrite this formula in plain text.

### `lem-hilbert-complex-solver-from-coercive-estimate` — Facts & Assumptions reference [F10]

- Source: `items/lem-hilbert-complex-solver-from-coercive-estimate.md` lines 94.
- Source evidence: [F10] links `[[def-space-of-bounded-linear-operators]]`; its target title (items/def-space-of-bounded-linear-operators.md:4) contains escaped `\(\mathcal B(X,Y)\)` and `\(\mathcal B(X)\)`.
- Rendered symptom: The reference title leaks escaped math source inline in [F10] instead of displaying formatted notation.
- Local screenshot: `screenshots/lem-hilbert-complex-solver-from-coercive-estimate--02.png`
- Suggested repair: Use a reference title without math source, or format the title through the supported math rendering path.

## Optional diagram candidates

### `ex-affine-quasiconformal-ellipse-map` — complex-plane affine map and nested annulus map

- Source: `items/ex-affine-quasiconformal-ellipse-map.md` lines 29, 37, 39, 53, 55, 71.
- Exact claim: For f(z)=z+μ̅z with |μ|<1, the unit circle maps to an ellipse with semiaxes 1+|μ| and 1−|μ|; finite round annuli map to rings between homothetic ellipses.
- Why a diagram may help: The principal-axis scaling and preservation of annular nesting are concrete geometric claims that a paired source/image sketch can check.
- Draw or check: Show the unit circle and image ellipse, mark principal axes and the (1+|μ|),(1−|μ|) scale factors after the stated output rotation, then show two concentric circles mapping to homothetic ellipses bounding the image ring. Check axis orientation and ensure the puncture/infinity end cases are not misrepresented.
- Status: uncertain optional candidate; the formulas are explicit and the diagram is supplementary.
- Local screenshot evidence: `screenshots/ex-affine-quasiconformal-ellipse-map--01.png`, `screenshots/ex-affine-quasiconformal-ellipse-map--02.png`

### `ex-continuous-argument-along-a-spiralling-contour` — oriented spiral path in the complex plane

- Source: `items/ex-continuous-argument-along-a-spiralling-contour.md` lines 30, 33, 35, 36, 38, 40, 41.
- Exact claim: γ(t)=(1+t)exp(2πit), 0≤t≤1, starts at 1 and ends at 2 after one counterclockwise turn; its argument rises by 2π, while the path is not closed.
- Why a diagram may help: The distinction between one full turn and a closed contour is central to the example and easy to check visually.
- Draw or check: Draw p=0, an outward spiral with arrow from γ(0)=1 to γ(1)=2, mark one complete angular turn, and distinguish the unequal endpoints. Do not label a winding number.
- Status: uncertain optional candidate; source parametrization determines the geometry.
- Local screenshot evidence: `screenshots/ex-continuous-argument-along-a-spiralling-contour--01.png`, `screenshots/ex-continuous-argument-along-a-spiralling-contour--02.png`

### `ex-ordinary-node-plane-curve-germ` — local plane-curve branch sketch

- Source: `items/ex-ordinary-node-plane-curve-germ.md` lines 46, 48, 49.
- Exact claim: The curve germ factors into two branches y=±x√(1+x), meeting only at the origin and with distinct tangent directions y=±x.
- Why a diagram may help: The two branches and their distinct tangents explain the ordinary node geometry underlying the factorization.
- Draw or check: Sketch both local branches through (0,0), mark tangent lines y=x and y=−x, and show the sole local intersection at the origin; use a small neighborhood and label the square-root factor as local.
- Status: uncertain optional candidate; illustrative only, with local branch behavior source-supported.
- Local screenshot evidence: `screenshots/ex-ordinary-node-plane-curve-germ--01.png`, `screenshots/ex-ordinary-node-plane-curve-germ--02.png`, `screenshots/ex-ordinary-node-plane-curve-germ--03.png`

### `thm-elliptic-cubic-chord-tangent-group-law` — projective elliptic cubic chord-tangent construction

- Source: `items/thm-elliptic-cubic-chord-tangent-group-law.md` lines 59, 61, 67, 69, 70, 73.
- Exact claim: A line cuts the smooth cubic in Q1+Q2+Q3 with Q1⊕Q2⊕Q3=O; a secant/tangent gives P⊕Q=−R, vertical lines give P,−P,O, and the line at infinity cuts 3O.
- Why a diagram may help: The chord/tangent law and the sign arising from reflection in the x-axis are geometric claims for which a carefully labeled sketch can catch sign errors.
- Draw or check: Show a nonsingular real cubic as an illustrative affine curve, a nonvertical secant through P,Q with third intersection R, its reflected point −R, plus a tangent case and a vertical line through P,−P; label O at infinity and the line-at-infinity intersection 3O. Keep multiplicities explicit and state the sketch is illustrative.
- Status: uncertain optional candidate; the source claim is explicit, but a generic real sketch may not represent every complex cubic.
- Local screenshot evidence: `screenshots/thm-elliptic-cubic-chord-tangent-group-law--01.png`, `screenshots/thm-elliptic-cubic-chord-tangent-group-law--02.png`, `screenshots/thm-elliptic-cubic-chord-tangent-group-law--03.png`, `screenshots/thm-elliptic-cubic-chord-tangent-group-law--04.png`, `screenshots/thm-elliptic-cubic-chord-tangent-group-law--05.png`, `screenshots/thm-elliptic-cubic-chord-tangent-group-law--06.png`

### `lem-modular-group-reduction-to-the-standard-domain` — upper-half-plane modular fundamental domain and orbit moves

- Source: `items/lem-modular-group-reduction-to-the-standard-domain.md` lines 50, 54, 66.
- Exact claim: Each orbit has a representative τ with |Re τ|≤1/2 and |τ|≥1; applying T translates horizontally, while S sends τ to −1/τ and would increase imaginary part inside |τ|<1.
- Why a diagram may help: The standard domain is defined by two vertical boundaries and the unit-circle arc; these are tangible boundaries and transformations whose direction can be checked in a diagram.
- Draw or check: Draw H, vertical lines Re τ=±1/2, unit-circle arc |τ|=1 between the boundary points, shade |Re τ|≤1/2 and |τ|≥1, and indicate T horizontal translation and S inversion across the unit circle. Avoid claiming uniqueness on identified boundary edges.
- Status: uncertain optional candidate; the orbit reduction is explicit, but a diagram only illustrates the reduction argument.
- Local screenshot evidence: `screenshots/lem-modular-group-reduction-to-the-standard-domain--01.png`

## Existing diagrams and rendering checks

No assigned item has an existing TikZ diagram; all 140 items have `tikz_count: 0` and no recorded KaTeX errors or diagram failures. There were no existing diagram maps, orientations, indices, or signs to validate.

Raw math within uppercase proof-technique banners is reported above; the uppercase styling itself is expected. Wikilinks remain intentionally block-line. No Scratch-specific claim is made. No clipping claim is supported by the available tile evidence, and page-tile boundaries were not treated as clipping. Optional typography is separate from defects and not listed.

## Limitations

- All 140 source hashes matched assignment expectations; each source was byte-identical to its frozen snapshot. All 256 assigned screenshot hashes matched local file content and every tile was opened individually at original resolution.
- No item in this lane contains an existing TikZ diagram, so diagram maps, orientations, indices, and signs could not be audited.
- No clipping claim is made: page-tile edges are capture boundaries, and no standalone screenshot evidence establishes content clipping.
- Technique labels styled in uppercase are expected; findings only flag raw math content within those banners. Wikilinks are intentionally block-line.
- No Scratch/open diagnostic surface was available in the assigned local preview materials; no Scratch-specific claim is made.
- Optional typography observations are not included as defects.

## Hash coverage

The JSON coverage records include assignment-expected and file-actual SHA256 values for every source and every tile, snapshot digests, and individual original-resolution viewing flags. All source/snapshot pairs and all 256 tile digests matched.
