# Complex Analysis rendering audit — lane 03

Reviewed 140 assigned items and 254 screenshot tiles. Every source matched its frozen snapshot byte-for-byte and SHA256; every tile was opened individually at original resolution.

## Findings

Confirmed title math rendering defects; all are visible in their standalone assigned page screenshots. The raw title strings are preserved in source and were not changed.

### `cex-exp-one-over-z-is-essential-and-omits-zero`

- Source: `items/cex-exp-one-over-z-is-essential-and-omits-zero.md:4`
- Symptom: The title renders e^{1/z} literally as text rather than as a typeset formula.
- Evidence: `screenshots/cex-exp-one-over-z-is-essential-and-omits-zero--01.png`
- Repair direction: Wrap the expression in supported inline math delimiters.

### `cex-weak-boundary-inequality-does-not-suffice-for-rouche`

- Source: `items/cex-weak-boundary-inequality-does-not-suffice-for-rouche.md:4`
- Symptom: The comparison inequality is shown as literal ASCII notation in the title instead of typeset math.
- Evidence: `screenshots/cex-weak-boundary-inequality-does-not-suffice-for-rouche--01.png`
- Repair direction: Wrap the inequality in supported inline math delimiters.

### `ex-residue-of-exp-over-z-cubed-by-derivative-formula`

- Source: `items/ex-residue-of-exp-over-z-cubed-by-derivative-formula.md:4`
- Symptom: The expression e^z/z^3 displays as literal plain text in the title.
- Evidence: `screenshots/ex-residue-of-exp-over-z-cubed-by-derivative-formula--01.png`
- Repair direction: Wrap the expression in supported inline math delimiters.

### `thm-harmonic-hardy-representation-p-greater-one`

- Source: `items/thm-harmonic-hardy-representation-p-greater-one.md:4`
- Symptom: The title shows raw caret/subscript and ASCII inequality notation instead of typeset math.
- Evidence: `screenshots/thm-harmonic-hardy-representation-p-greater-one--01.png`
- Repair direction: Wrap the mathematical fragments in supported inline math delimiters.

### `ex-circle-integral-of-one-over-z-minus-a`

- Source: `items/ex-circle-integral-of-one-over-z-minus-a.md:4`
- Symptom: The fraction is shown as plain ASCII text in the title instead of rendered mathematics.
- Evidence: `screenshots/ex-circle-integral-of-one-over-z-minus-a--01.png`
- Repair direction: Wrap the fraction in supported inline math delimiters.

## Diagram candidates

These are optional candidates supported by exact source claims. No assigned item currently contains a TikZ diagram, so these are not render defects. The PNG evidence is local preview evidence; all referenced tiles were reviewed at original resolution.

### `ex-power-map-sends-a-sector-to-a-half-plane` — complex-plane domain map with angle rays

- Source: `items/ex-power-map-sends-a-sector-to-a-half-plane.md` lines 35, 37, 40, 50, 52.
- Claim: The sector S={r e^{iθ}:r>0, −π/4<θ<π/4} is sent biholomorphically by z↦z² onto {w∈C: Re w>0}; the verification doubles the argument interval to (−π/2,π/2).
- Why a diagram may help: The domain and image are both planar regions, and the proof hinges on how the two boundary rays map and how the argument interval doubles. A paired domain/image sketch makes the correspondence immediately checkable.
- Concrete content to draw/check: Show source rays at −π/4 and π/4 with an interior point z=re^{iθ}; show their images under z² at −π/2 and π/2 and the right half-plane interior, preserving the positive orientation and radius map r↦r².
- Status: uncertain editorial candidate; source supports every component, but diagram is optional.
- Screenshot evidence: `screenshots/ex-power-map-sends-a-sector-to-a-half-plane--01.png`

### `ex-sine-sends-a-half-strip-to-the-upper-half-plane` — complex-plane boundary correspondence

- Source: `items/ex-sine-sends-a-half-strip-to-the-upper-half-plane.md` lines 31, 33, 35, 45, 49, 51.
- Claim: S={z:−π/2<Re z<π/2, Im z>0}; sin(π/2+iy)=cosh y, sin(−π/2+iy)=−cosh y, and sin x∈(−1,1) on the bottom edge, so the boundary maps to R and the interior to H.
- Why a diagram may help: The map sends three distinct boundary pieces of a half-strip onto the two exterior real rays and the interval [−1,1], so a boundary map sketch helps check the split and signs.
- Concrete content to draw/check: Draw the vertical boundary x=π/2 mapping to [1,∞), x=−π/2 mapping to (−∞,−1], and bottom y=0 mapping monotonically to [−1,1]; mark the upper-half-plane image and boundary endpoints.
- Status: uncertain editorial candidate; formulas and image claim are source-supported.
- Screenshot evidence: `screenshots/ex-sine-sends-a-half-strip-to-the-upper-half-plane--01.png`

### `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley` — composition of planar conformal maps

- Source: `items/ex-strip-to-disc-biholomorphism-by-exponential-and-cayley.md` lines 33, 37, 39, 51, 53, 55.
- Claim: For 0<Im z<π, Φ(z)=(e^z−i)/(e^z+i) is C∘e^z from the strip to the unit disc; e^z maps into H and C maps H biholomorphically to D.
- Why a diagram may help: The theorem is explicitly a two-stage map with different domains and image boundaries; a diagram can make the intermediate half-plane and boundary behavior concrete.
- Concrete content to draw/check: Show strip edges Im z=0 and π mapping under exp to positive and negative real rays, respectively; then show the Cayley map taking the real line to the unit circle and H to D, with arrows labeled exp and C. Verify edge endpoints/limits at 0 and infinity.
- Status: uncertain editorial candidate; proposed boundary mapping follows the source formula.
- Screenshot evidence: `screenshots/ex-strip-to-disc-biholomorphism-by-exponential-and-cayley--01.png`

### `ex-keyhole-contour-assembly-without-cauchys-theorem` — oriented contour diagram

- Source: `items/ex-keyhole-contour-assembly-without-cauchys-theorem.md` lines 27, 43, 45, 47.
- Claim: The keyhole path uses upper radial r→R, outer circle counterclockwise, lower radial R→r, and inner circle clockwise; its integral is the signed sum of the four oriented piece integrals. The parametrizations are r+(R−r)t, Re^{2πit}, R−(R−r)t, re^{2πi(1−t)}.
- Why a diagram may help: Direction and signs are central to the example, and a keyhole sketch can reveal an orientation or endpoint mismatch at a glance.
- Concrete content to draw/check: Draw the positive-real-axis branch cut, radii r and R, upper/lower radial arrows, outer CCW arrow, inner CW arrow, and the four joining endpoints in traversal order; verify the listed parametrizations match those arrows.
- Status: uncertain editorial candidate; parametrizations and orientations are explicit source claims.
- Screenshot evidence: `screenshots/ex-keyhole-contour-assembly-without-cauchys-theorem--01.png`

### `lem-goursat-four-triangle-boundary-cancellation` — triangle midpoint subdivision with oriented edges

- Source: `items/lem-goursat-four-triangle-boundary-cancellation.md` lines 34, 38, 52, 54, 56.
- Claim: With p=(a+b)/2, q=(b+c)/2, r=(c+a)/2, the triangle integral equals the sum on [a,p,r], [p,b,q], [r,q,c], [p,q,r]; the proof cancels the three oppositely oriented shared edges.
- Why a diagram may help: The identity is entirely an edge-cancellation argument, so the four subtriangles and paired orientations are precisely the mathematical content a diagram could verify.
- Concrete content to draw/check: Draw ordered outer triangle a→b→c→a, midpoints p on ab, q on bc, r on ca; shade/label triangles [a,p,r], [p,b,q], [r,q,c], [p,q,r] with their listed orientations. Mark p↔r, q↔p, r↔q as canceling interior edge pairs.
- Status: uncertain editorial candidate; source claims are explicit and coherent.
- Screenshot evidence: `screenshots/lem-goursat-four-triangle-boundary-cancellation--01.png`

### `thm-homotopy-invariance-of-holomorphic-line-integrals` — parameter-square grid and mapped boundary orientations

- Source: `items/thm-homotopy-invariance-of-holomorphic-line-integrals.md` lines 42, 44, 62, 64, 68, 70.
- Claim: The endpoint-fixed homotopy H:[0,1]²→Ω is subdivided into cells Q_jk; each cell boundary maps to a polygon, interior edges cancel, and bottom/top polygonal paths recover γ0 and γ1 integrals.
- Why a diagram may help: The proof uses the square grid and edge cancellation across adjacent cells; a compact diagram would make the bottom/top path orientation and fixed side edges easy to verify.
- Concrete content to draw/check: Draw [0,1]² with horizontal edges s↦γ0(s), γ1(s), vertical sides constant, an N×N grid, one cell Q_jk labeled a,b,c,d in boundary order, and opposite arrows on a shared edge. Keep distinction between parameter-square edges and mapped polygonal edges.
- Status: uncertain editorial candidate; based on the stated homotopy and proof construction.
- Screenshot evidence: `screenshots/thm-homotopy-invariance-of-holomorphic-line-integrals--01.png, screenshots/thm-homotopy-invariance-of-holomorphic-line-integrals--02.png`

## Existing diagrams and rendering checks

- No assigned item had an existing TikZ diagram (all assigned screenshot metadata recorded `tikz_count: 0`), so there were no diagram maps, orientations, indices, or signs to validate. The one category-level TikZ record belongs to `ex-goursat-four-triangle-boundary-cancellation` in lane 01 and is outside this assignment.
- No KaTeX errors or diagram failures were recorded for assigned items. Screenshot review found no supported clipping claim; capture tile edges alone were not treated as clipping.
- Reference-title leaks were not found. The rendered reference titles and block-line wikilinks are expected.
- No Scratch section occurs in the assigned bodies. No raw math defect within an uppercase technique banner is reported.

## Coverage and hashes

The JSON report lists all 140 assigned IDs, source and snapshot hashes, each screenshot tile expected and actual SHA256, and individual original-resolution review status. All source hashes matched assignment expectations; source and snapshot bytes matched for all 140 items. All tile hashes matched screenshot metadata.

## Limitations

- Every assigned source and frozen snapshot had matching bytes and SHA256. Every assigned screenshot tile was opened individually at original resolution.
- No assigned item had a TikZ render instance or displayed diagram to inspect; the sole TikZ instance in the category belongs to an item assigned to another lane and was not counted in this lane review.
- No clipping issue is reported: tile boundaries cut pages by capture design, and no standalone-page evidence established actual content clipping.
- Raw formulas inside CSS uppercase technique banners were checked separately; no confirmed banner issue is included here.
- No Scratch section was present in the assigned item bodies.
- Reference titles and block-line wikilinks are rendered as expected; no reference-title leak is reported.
