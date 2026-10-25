# Complex Analysis diagram-candidate supplement

Integrated into the primary 1,402-item visual review; candidates are source-supported and remain uncertain pending independent adjudication. A candidate is not a confirmed defect, and not every construction requires a figure.

## Candidate 1: `thm-joukowski-biholomorphism-outside-unit-disc`

- Kind: TikZ domain map with boundary relation.
- Candidate: The theorem is a concrete plane-domain correspondence, and its slit target and exterior-circle boundary behavior are easier to inspect visually than from the inverse-branch proof alone.
- Selection reason: The theorem is a concrete plane-domain correspondence, and its slit target and exterior-circle boundary behavior are easier to inspect visually than from the inverse-branch proof alone.
- Concrete content/check: Show the exterior unit disk as source and the slit plane as target with a labeled J arrow. Mark that the unit circle boundary parametrizes the segment via J(e^{it})=cos(t), with the two-to-one boundary trace; distinguish the open domains so the theorem does not claim boundary points belong to E or the image.
- Frozen source SHA-256: `36b27c9f119ceb77eb1ee754c9125b63c5ff0a0d9a876b1d6d221dd3f8a0c680`.
- Exact source lines: 31, 35, 37.
- Screenshot evidence: [thm-joukowski-biholomorphism-outside-unit-disc--01.png](thm-joukowski-biholomorphism-outside-unit-disc--01.png) SHA-256 `bceacc96e133e6bb6f226c99d474157b27e78143fd53fcd1a4957bddb087628d`.

## Candidate 2: `ex-helicoid-model-of-the-logarithm-surface`

- Kind: TikZ schematic surface with projection.
- Candidate: The formula is a specific 3D model and projection relationship; a simple helicoid sheet and vertical projection into the punctured plane would make the argument coordinate and exponential projection immediately inspectable.
- Selection reason: The formula is a specific 3D model and projection relationship; a simple helicoid sheet and vertical projection into the punctured plane would make the argument coordinate and exponential projection immediately inspectable.
- Concrete content/check: Plot an illustrative portion parameterized by x,y; label radius e^x, angle y, height y; draw/label projection (X,Y,Z)↦(X,Y)=(e^x cos y,e^x sin y) and the corresponding e^w point. Preserve that the surface is noncompact and that y records the lifted argument.
- Frozen source SHA-256: `b651beb3b8daa5ebd7a0b6e0ff2908039de04d37f98c0be9e1aabf976f72adf0`.
- Exact source lines: 30, 35, 37, 38.
- Screenshot evidence: [ex-helicoid-model-of-the-logarithm-surface--01.png](ex-helicoid-model-of-the-logarithm-surface--01.png) SHA-256 `44bc0a04787b3e70f14d9ead03c69e3567408e9908406b292c0d7281054319b8`.

## Candidate 3: `lem-planar-piecewise-analytic-region-triangulation`

- Kind: planar construction sequence: region/slab cross-sections plus rectangle-to-band maps and triangulation.
- Candidate: The proof is a geometric construction whose critical choices and orientation are difficult to reconstruct from prose; a schematic can make the bands, pinches, marks, fan, pullback, and face-to-face matching checkable.
- Selection reason: The proof is a geometric construction whose critical choices and orientation are difficult to reconstruct from prose; a schematic can make the bands, pinches, marks, fan, pullback, and face-to-face matching checkable.
- Concrete content/check: The proof is a geometric construction whose critical choices and orientation are difficult to reconstruct from prose; a schematic can make the bands, pinches, marks, fan, pullback, and face-to-face matching checkable.
- Frozen source SHA-256: `827c4ecf8dbeb3ecff12ffcb0d2591420204dbd8032dbfc19c164372529cfcd4`.
- Exact source lines: 7, 57, 73, 109, 114, 126.
- Screenshot evidence: [lem-planar-piecewise-analytic-region-triangulation--01.png](lem-planar-piecewise-analytic-region-triangulation--01.png) SHA-256 `2f2943c6a78e39628b0b749c718fd4e08032b2f2fb153285e4611fcefca4b4b6`, [lem-planar-piecewise-analytic-region-triangulation--02.png](lem-planar-piecewise-analytic-region-triangulation--02.png) SHA-256 `61b8dc8ce7ff8c3f4f9f0230109388aa2588c0f5e7f475baa911bfa0b584fcb1`.

## Candidate 4: `thm-local-normal-form-holomorphic-map-riemann-surfaces`

- Kind: local branched-cover map between coordinate discs.
- Candidate: A two-disc schematic can show the coordinate conjugation and the local e-to-1 behavior around the branch value, connecting the algebraic normal form to its geometric consequence.
- Selection reason: A two-disc schematic can show the coordinate conjugation and the local e-to-1 behavior around the branch value, connecting the algebraic normal form to its geometric consequence.
- Concrete content/check: A two-disc schematic can show the coordinate conjugation and the local e-to-1 behavior around the branch value, connecting the algebraic normal form to its geometric consequence.
- Frozen source SHA-256: `419f09adb79588c26953dafd2241474a731b220146210d627a5e442a709002ef`.
- Exact source lines: 38, 50, 74, 78.
- Screenshot evidence: [thm-local-normal-form-holomorphic-map-riemann-surfaces--01.png](thm-local-normal-form-holomorphic-map-riemann-surfaces--01.png) SHA-256 `5bce7f8e0647646f1f132306a1b11bde00fd23cb31dff06fddca5b706dc0b19c`.

## Candidate 5: `ex-power-map-sends-a-sector-to-a-half-plane`

- Kind: complex-plane domain map with angle rays.
- Candidate: The domain and image are both planar regions, and the proof hinges on how the two boundary rays map and how the argument interval doubles. A paired domain/image sketch makes the correspondence immediately checkable.
- Selection reason: The domain and image are both planar regions, and the proof hinges on how the two boundary rays map and how the argument interval doubles. A paired domain/image sketch makes the correspondence immediately checkable.
- Concrete content/check: Show source rays at −π/4 and π/4 with an interior point z=re^{iθ}; show their images under z² at −π/2 and π/2 and the right half-plane interior, preserving the positive orientation and radius map r↦r².
- Frozen source SHA-256: `f0893707704c607ecf040163a9fa849181b6208e657d9a78371be20b19547d85`.
- Exact source lines: 35, 37, 40, 50, 52.
- Screenshot evidence: [ex-power-map-sends-a-sector-to-a-half-plane--01.png](ex-power-map-sends-a-sector-to-a-half-plane--01.png) SHA-256 `034fe174643207c8dcbe179f5692704d9cec645976aafae0458a0385abc21592`.

## Candidate 6: `ex-sine-sends-a-half-strip-to-the-upper-half-plane`

- Kind: complex-plane boundary correspondence.
- Candidate: The map sends three distinct boundary pieces of a half-strip onto the two exterior real rays and the interval [−1,1], so a boundary map sketch helps check the split and signs.
- Selection reason: The map sends three distinct boundary pieces of a half-strip onto the two exterior real rays and the interval [−1,1], so a boundary map sketch helps check the split and signs.
- Concrete content/check: Draw the vertical boundary x=π/2 mapping to [1,∞), x=−π/2 mapping to (−∞,−1], and bottom y=0 mapping monotonically to [−1,1]; mark the upper-half-plane image and boundary endpoints.
- Frozen source SHA-256: `7518a25e597673baf312a8452ad6d76658408ba8baf79a8a45171931fec0eb92`.
- Exact source lines: 31, 33, 35, 45, 49, 51.
- Screenshot evidence: [ex-sine-sends-a-half-strip-to-the-upper-half-plane--01.png](ex-sine-sends-a-half-strip-to-the-upper-half-plane--01.png) SHA-256 `7f330b1a74859a5b8642626f67aef938f27ed76c40e9edb5b91d1c80ce183f04`.

## Candidate 7: `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley`

- Kind: composition of planar conformal maps.
- Candidate: The theorem is explicitly a two-stage map with different domains and image boundaries; a diagram can make the intermediate half-plane and boundary behavior concrete.
- Selection reason: The theorem is explicitly a two-stage map with different domains and image boundaries; a diagram can make the intermediate half-plane and boundary behavior concrete.
- Concrete content/check: Show strip edges Im z=0 and π mapping under exp to positive and negative real rays, respectively; then show the Cayley map taking the real line to the unit circle and H to D, with arrows labeled exp and C. Verify edge endpoints/limits at 0 and infinity.
- Frozen source SHA-256: `32c612337e78ae4cef73a173e7fe9ea0ed4bd29c3f2ef8411a3da02d24236089`.
- Exact source lines: 33, 37, 39, 51, 53, 55.
- Screenshot evidence: [ex-strip-to-disc-biholomorphism-by-exponential-and-cayley--01.png](ex-strip-to-disc-biholomorphism-by-exponential-and-cayley--01.png) SHA-256 `ed6f651c13a5877eb6b921a09613cd15e01b0201527b41b23eb007ea7bed6cdb`.

## Candidate 8: `ex-keyhole-contour-assembly-without-cauchys-theorem`

- Kind: oriented contour diagram.
- Candidate: Direction and signs are central to the example, and a keyhole sketch can reveal an orientation or endpoint mismatch at a glance.
- Selection reason: Direction and signs are central to the example, and a keyhole sketch can reveal an orientation or endpoint mismatch at a glance.
- Concrete content/check: Draw the positive-real-axis branch cut, radii r and R, upper/lower radial arrows, outer CCW arrow, inner CW arrow, and the four joining endpoints in traversal order; verify the listed parametrizations match those arrows.
- Frozen source SHA-256: `6ccdb43d44005ee2b58839c3c746ed5b5dd92ad25dde518ddadb6ff9d05e542b`.
- Exact source lines: 27, 43, 45, 47.
- Screenshot evidence: [ex-keyhole-contour-assembly-without-cauchys-theorem--01.png](ex-keyhole-contour-assembly-without-cauchys-theorem--01.png) SHA-256 `3a4f02c153a9e0bea88d9d49521fc676489d9727b08ae1ce5947810ed2e793a4`.

## Candidate 9: `lem-goursat-four-triangle-boundary-cancellation`

- Kind: triangle midpoint subdivision with oriented edges.
- Candidate: The identity is entirely an edge-cancellation argument, so the four subtriangles and paired orientations are precisely the mathematical content a diagram could verify.
- Selection reason: The identity is entirely an edge-cancellation argument, so the four subtriangles and paired orientations are precisely the mathematical content a diagram could verify.
- Concrete content/check: Draw ordered outer triangle a→b→c→a, midpoints p on ab, q on bc, r on ca; shade/label triangles [a,p,r], [p,b,q], [r,q,c], [p,q,r] with their listed orientations. Mark p↔r, q↔p, r↔q as canceling interior edge pairs.
- Frozen source SHA-256: `d7d9db412eda5ce3be135718f83e33f5c6e635de1a668407ba7afbe4e8e2967c`.
- Exact source lines: 34, 38, 52, 54, 56.
- Screenshot evidence: [lem-goursat-four-triangle-boundary-cancellation--01.png](lem-goursat-four-triangle-boundary-cancellation--01.png) SHA-256 `a91bf64a065afae91b7611140158cd769bc60080249e09f0c77129921db2a296`.

## Candidate 10: `thm-homotopy-invariance-of-holomorphic-line-integrals`

- Kind: parameter-square grid and mapped boundary orientations.
- Candidate: The proof uses the square grid and edge cancellation across adjacent cells; a compact diagram would make the bottom/top path orientation and fixed side edges easy to verify.
- Selection reason: The proof uses the square grid and edge cancellation across adjacent cells; a compact diagram would make the bottom/top path orientation and fixed side edges easy to verify.
- Concrete content/check: Draw [0,1]² with horizontal edges s↦γ0(s), γ1(s), vertical sides constant, an N×N grid, one cell Q_jk labeled a,b,c,d in boundary order, and opposite arrows on a shared edge. Keep distinction between parameter-square edges and mapped polygonal edges.
- Frozen source SHA-256: `152a04ef5295db77d14206db97b1f69919c9fd600632d3186271a5c892b2c34d`.
- Exact source lines: 42, 44, 62, 64, 68, 70.
- Screenshot evidence: [thm-homotopy-invariance-of-holomorphic-line-integrals--01.png](thm-homotopy-invariance-of-holomorphic-line-integrals--01.png) SHA-256 `a7285974864eee25bf29f0400158626077d2558ec563d4d23a0810b783f0f8d2`, [thm-homotopy-invariance-of-holomorphic-line-integrals--02.png](thm-homotopy-invariance-of-holomorphic-line-integrals--02.png) SHA-256 `39d8128dbb26fde772400370095df641121c2f6e39a4ad663d6936eebc677e6d`.

## Candidate 11: `ex-affine-quasiconformal-ellipse-map`

- Kind: complex-plane affine map and nested annulus map.
- Candidate: The principal-axis scaling and preservation of annular nesting are concrete geometric claims that a paired source/image sketch can check.
- Selection reason: The principal-axis scaling and preservation of annular nesting are concrete geometric claims that a paired source/image sketch can check.
- Concrete content/check: Show the unit circle and image ellipse, mark principal axes and the (1+|μ|),(1−|μ|) scale factors after the stated output rotation, then show two concentric circles mapping to homothetic ellipses bounding the image ring. Check axis orientation and ensure the puncture/infinity end cases are not misrepresented.
- Frozen source SHA-256: `f5cef59d65385b19dce610831e8eb4ef042ce11d52d0419ebaea6dfad9c8c2d5`.
- Exact source lines: 29, 37, 39, 53, 55, 71.
- Screenshot evidence: [ex-affine-quasiconformal-ellipse-map--01.png](ex-affine-quasiconformal-ellipse-map--01.png) SHA-256 `b05cdecc480868823f558a9a00bbc9dda08efcfe2f8be834fcf3f7a93941eab4`, [ex-affine-quasiconformal-ellipse-map--02.png](ex-affine-quasiconformal-ellipse-map--02.png) SHA-256 `9de5e21ce65295bf330bcb0c1c0a527723c7dd3ecac84e7171f7647bee8940eb`.

## Candidate 12: `ex-continuous-argument-along-a-spiralling-contour`

- Kind: oriented spiral path in the complex plane.
- Candidate: The distinction between one full turn and a closed contour is central to the example and easy to check visually.
- Selection reason: The distinction between one full turn and a closed contour is central to the example and easy to check visually.
- Concrete content/check: Draw p=0, an outward spiral with arrow from γ(0)=1 to γ(1)=2, mark one complete angular turn, and distinguish the unequal endpoints. Do not label a winding number.
- Frozen source SHA-256: `a1bd4cbaa9e11fbc3b88165b4f3c7de5a1c937333e330ca9a9b2d1c28503a59b`.
- Exact source lines: 30, 33, 35, 36, 38, 40, 41.
- Screenshot evidence: [ex-continuous-argument-along-a-spiralling-contour--01.png](ex-continuous-argument-along-a-spiralling-contour--01.png) SHA-256 `ac81cea280e43306ff217e494fb22a0ac7263a3b82916d3bf8aba41811e34d0f`, [ex-continuous-argument-along-a-spiralling-contour--02.png](ex-continuous-argument-along-a-spiralling-contour--02.png) SHA-256 `d3d344fb300c5a90db41fe0cfa5e9848935d86dabe7935422c4631e0184ab8ee`.

## Candidate 13: `ex-ordinary-node-plane-curve-germ`

- Kind: local plane-curve branch sketch.
- Candidate: The two branches and their distinct tangents explain the ordinary node geometry underlying the factorization.
- Selection reason: The two branches and their distinct tangents explain the ordinary node geometry underlying the factorization.
- Concrete content/check: Sketch both local branches through (0,0), mark tangent lines y=x and y=−x, and show the sole local intersection at the origin; use a small neighborhood and label the square-root factor as local.
- Frozen source SHA-256: `b3a6a5f1f8f0f40614fc433b3064d4e862d646bdfdce3a23bdf36dfcf1eca942`.
- Exact source lines: 46, 48, 49.
- Screenshot evidence: [ex-ordinary-node-plane-curve-germ--01.png](ex-ordinary-node-plane-curve-germ--01.png) SHA-256 `4a4b921775054a827d1980b8938fe7ac619f75e3d7d58c55b2db9f2750af0311`, [ex-ordinary-node-plane-curve-germ--02.png](ex-ordinary-node-plane-curve-germ--02.png) SHA-256 `d46125acd2b8641c1e111316113df00d363fe548d98d3af6acd505f8c46abe64`, [ex-ordinary-node-plane-curve-germ--03.png](ex-ordinary-node-plane-curve-germ--03.png) SHA-256 `84ad46aef3cd1fa983b322266017337dcd02f372101ee539d34db904187eb364`.

## Candidate 14: `thm-elliptic-cubic-chord-tangent-group-law`

- Kind: projective elliptic cubic chord-tangent construction.
- Candidate: The chord/tangent law and the sign arising from reflection in the x-axis are geometric claims for which a carefully labeled sketch can catch sign errors.
- Selection reason: The chord/tangent law and the sign arising from reflection in the x-axis are geometric claims for which a carefully labeled sketch can catch sign errors.
- Concrete content/check: Show a nonsingular real cubic as an illustrative affine curve, a nonvertical secant through P,Q with third intersection R, its reflected point −R, plus a tangent case and a vertical line through P,−P; label O at infinity and the line-at-infinity intersection 3O. Keep multiplicities explicit and state the sketch is illustrative.
- Frozen source SHA-256: `7841b1b55bad00faae449b00ea8d9e4a2d5bebf1d86584392e08129bcf4ced6b`.
- Exact source lines: 59, 61, 67, 69, 70, 73.
- Screenshot evidence: [thm-elliptic-cubic-chord-tangent-group-law--01.png](thm-elliptic-cubic-chord-tangent-group-law--01.png) SHA-256 `90864e4a1fd597c802964418a70b6302dd1d56c8a92a2f42039ed4e95e72a9df`, [thm-elliptic-cubic-chord-tangent-group-law--02.png](thm-elliptic-cubic-chord-tangent-group-law--02.png) SHA-256 `4f3b4ebcc6d12754bfe3c6704170ac8aac5b0e715cdcfb5f4e5c2fa3bb0cd3fd`, [thm-elliptic-cubic-chord-tangent-group-law--03.png](thm-elliptic-cubic-chord-tangent-group-law--03.png) SHA-256 `5bb3575d370f9203e216025795af60ba7ae8256c5b2d6b84121052365daab048`, [thm-elliptic-cubic-chord-tangent-group-law--04.png](thm-elliptic-cubic-chord-tangent-group-law--04.png) SHA-256 `5a73b1cf670068c2046ec1426fe088868f8d26b902aeaf6c5820570ffac36542`, [thm-elliptic-cubic-chord-tangent-group-law--05.png](thm-elliptic-cubic-chord-tangent-group-law--05.png) SHA-256 `d4656c10e594290e2adb76b49906751d1db700447e6c1a51e98027244182a4c1`, [thm-elliptic-cubic-chord-tangent-group-law--06.png](thm-elliptic-cubic-chord-tangent-group-law--06.png) SHA-256 `7251c4c7a787fecc070fc71fdef5e25d5043478266b4d6b26b84d8914eb77926`.

## Candidate 15: `lem-modular-group-reduction-to-the-standard-domain`

- Kind: upper-half-plane modular fundamental domain and orbit moves.
- Candidate: The standard domain is defined by two vertical boundaries and the unit-circle arc; these are tangible boundaries and transformations whose direction can be checked in a diagram.
- Selection reason: The standard domain is defined by two vertical boundaries and the unit-circle arc; these are tangible boundaries and transformations whose direction can be checked in a diagram.
- Concrete content/check: Draw H, vertical lines Re τ=±1/2, unit-circle arc |τ|=1 between the boundary points, shade |Re τ|≤1/2 and |τ|≥1, and indicate T horizontal translation and S inversion across the unit circle. Avoid claiming uniqueness on identified boundary edges.
- Frozen source SHA-256: `eefa4608652729d67f9da332188a551ed05808b7d188e6120732dac81adaa87b`.
- Exact source lines: 50, 54, 66.
- Screenshot evidence: [lem-modular-group-reduction-to-the-standard-domain--01.png](lem-modular-group-reduction-to-the-standard-domain--01.png) SHA-256 `eeb9dda7dc90e0824f85d7dbac5a50c1c360f47e94b57f6278eff55625bf2937`.

## Candidate 16: `thm-argument-principle-as-image-winding-number`

- Kind: paired contour map / winding diagram.
- Candidate: The theorem explicitly equates a domain contour integral with the winding of its image cycle; a two-panel map makes the image and index relation concrete.
- Selection reason: The theorem explicitly equates a domain contour integral with the winding of its image cycle; a two-panel map makes the image and index relation concrete.
- Concrete content/check: Draw gamma in the z-plane and f∘gamma in the w-plane with 0 marked outside the image trace; show traversal direction, source-to-image mapping, and the signed winding index. Check orientation and that the image avoids 0.
- Frozen source SHA-256: `e59829180ae6cd10ddfc1dda315c07e109ad163268c74ac797db2dd18aec1491`.
- Exact source lines: 55, 71, 73, 75.
- Screenshot evidence: [thm-argument-principle-as-image-winding-number--01.png](thm-argument-principle-as-image-winding-number--01.png) SHA-256 `7b26819aaffa491a65dc2f23135b67025f91a90daa12add56e0677c7c2a64a81`.

## Candidate 17: `thm-elliptic-function-divisor-laws`

- Kind: oriented fundamental parallelogram with paired edges and divisor marks.
- Candidate: The claims rely on cancellation of opposite sides by lattice periodicity and interior zero/pole multiplicities, which benefit from an explicit fundamental-cell view.
- Selection reason: The claims rely on cancellation of opposite sides by lattice periodicity and interior zero/pole multiplicities, which benefit from an explicit fundamental-cell view.
- Concrete content/check: Draw positively oriented P with edge vectors omega_1 and omega_2, identify opposite edges by translations, and mark interior zero/pole locations with multiplicity and residue labels; indicate no boundary zeros or poles. Check orientation, edge pairing, and which marks contribute to each sum.
- Frozen source SHA-256: `5ebb8e900a0161cd0bcc4bb784ad0374d5e5294b52014518184c4d05119cd06e`.
- Exact source lines: 69, 71, 74, 77, 79, 90.
- Screenshot evidence: [thm-elliptic-function-divisor-laws--01.png](thm-elliptic-function-divisor-laws--01.png) SHA-256 `89120e8d2639732be641228ad1b8123b72b9a5ed8fad8639c1acb65fa390a977`, [thm-elliptic-function-divisor-laws--02.png](thm-elliptic-function-divisor-laws--02.png) SHA-256 `7228e13fe595b54d3f5d84437d3d33f5dc49aa6b49f691e9c3f877ef542ddc7e`.

## Candidate 18: `thm-riemann-bilinear-relations`

- Kind: symplectic homology cycles and period-coordinate map.
- Candidate: The result links a_i,b_i cycles to normalized differential periods, a matrix, and the resulting lattice; a schematic cycle-to-period map can expose indexing and sign conventions.
- Selection reason: The result links a_i,b_i cycles to normalized differential periods, a matrix, and the resulting lattice; a schematic cycle-to-period map can expose indexing and sign conventions.
- Concrete content/check: On an oriented genus-g surface, show the a_i,b_i cycle pairs with their intersection convention, arrows to the normalized a-period matrix I and b-period matrix Pi, then the lattice vectors e(a_i),e(b_i) in Omega(X)*. Check cycle orientation, indices, and the sign in the intersection pairing.
- Frozen source SHA-256: `b8d5924c0258b310c135a063ba615dd3829906fc909b6aa734be7e7be160f24c`.
- Exact source lines: 70, 75, 84, 90.
- Screenshot evidence: [thm-riemann-bilinear-relations--01.png](thm-riemann-bilinear-relations--01.png) SHA-256 `df7ce74369f42a1a892c91a4e57c4a120f56704b7814f625f90ebd728c2b6417`, [thm-riemann-bilinear-relations--02.png](thm-riemann-bilinear-relations--02.png) SHA-256 `e89dc097d53126618ac95bcc50953166e6711b84d0832488022556f80922d2fd`.

## Candidate 19: `thm-slit-plane-root-branch-biholomorphism-to-a-sector`

- Kind: slit-plane-to-sector branch map.
- Candidate: The statement gives an explicit branch map and inverse between two planar regions; a domain/codomain sketch can clarify the branch cut and argument range.
- Selection reason: The statement gives an explicit branch map and inverse between two planar regions; a domain/codomain sketch can clarify the branch cut and argument range.
- Concrete content/check: Draw the nonpositive real-axis slit, the open sector with rays at angles ±pi/n, and arrows z↦R_n(z), w↦w^n; mark excluded boundary rays, argument ranges, and verify the composed maps and orientation.
- Frozen source SHA-256: `92ca71b3484784399ae2d11eea6dd09ed969397fbebb7a77e62ba33e3ad9889f`.
- Exact source lines: 17, 20, 25, 31.
- Screenshot evidence: [thm-slit-plane-root-branch-biholomorphism-to-a-sector--01.png](thm-slit-plane-root-branch-biholomorphism-to-a-sector--01.png) SHA-256 `cd587e42ac1a0121a745526b4d0eda83cccffb4592182063da1f94019f1980e3`.

## Candidate 20: `ex-square-map-sends-a-grid-to-orthogonal-parabolas`

- Kind: complex-map image with two curve families and critical point.
- Candidate: The example is explicitly about the geometric images of a Cartesian grid and orthogonality, which is easier to verify visually than from coordinate elimination alone.
- Selection reason: The example is explicitly about the geometric images of a Cartesian grid and orthogonality, which is easier to verify visually than from coordinate elimination alone.
- Concrete content/check: The example is explicitly about the geometric images of a Cartesian grid and orthogonality, which is easier to verify visually than from coordinate elimination alone.
- Frozen source SHA-256: `555b2556cd7aa6fbe24123e3224e047d3e51c62e6c8f03dd3d1f51451732969a`.
- Exact source lines: 26, 29, 39, 41, 43, 45, 47.
- Screenshot evidence: [ex-square-map-sends-a-grid-to-orthogonal-parabolas--01.png](ex-square-map-sends-a-grid-to-orthogonal-parabolas--01.png) SHA-256 `feb44a1a9885b9c35b5c739c7f2d9e194ffff016f928e409b8fa8fc874911b79`.

## Candidate 21: `ex-hyperbolic-disc-and-half-plane-geodesics`

- Kind: paired domain/codomain geodesic schematic under Cayley map.
- Candidate: The example gives a concrete correspondence between two standard geodesic geometries and a named map, making a paired schematic useful to orient the stated descriptions.
- Selection reason: The example gives a concrete correspondence between two standard geodesic geometries and a named map, making a paired schematic useful to orient the stated descriptions.
- Concrete content/check: The example gives a concrete correspondence between two standard geodesic geometries and a named map, making a paired schematic useful to orient the stated descriptions.
- Frozen source SHA-256: `449ef9b299b53da2dba1fcdff22a42bdeed24043161062aa861282020b4bd2b0`.
- Exact source lines: 44, 48, 53, 57, 60, 61, 63.
- Screenshot evidence: [ex-hyperbolic-disc-and-half-plane-geodesics--01.png](ex-hyperbolic-disc-and-half-plane-geodesics--01.png) SHA-256 `3883ff4335c5c80f45916885280616a8ee01fc3f30f4288c784b84bbb973a3ca`, [ex-hyperbolic-disc-and-half-plane-geodesics--02.png](ex-hyperbolic-disc-and-half-plane-geodesics--02.png) SHA-256 `c2bd0fed2bfc9bc1ab4cab1f85ccfe5bd161fd5b74d577d34e30e79d7d1df634`, [ex-hyperbolic-disc-and-half-plane-geodesics--03.png](ex-hyperbolic-disc-and-half-plane-geodesics--03.png) SHA-256 `841a17caaca4e22d4aaced42a610ce491dba659b53cb48b767e7346d2ebe629d`, [ex-hyperbolic-disc-and-half-plane-geodesics--04.png](ex-hyperbolic-disc-and-half-plane-geodesics--04.png) SHA-256 `3b9cbb40741e81f9657c4927f196f4198f3d22fff380a5507d5e129b9157d9b8`.

## Candidate 22: `ex-period-matrix-and-jacobian-of-the-pentagon-curve`

- Kind: translation-gluing-polygon-schematic.
- Candidate: Consider a labelled two-pentagon gluing schematic for the concrete genus-two curve witness.
- Selection reason: Editorial candidate, not a confirmed rendering defect. The source gives the exact translations, seam labels and cellular boundary calculation in prose, so an illustration is optional; no diagram mismatch is asserted.
- Concrete content/check: Show two oppositely oriented regular pentagons. For each upper side with endpoints V_k,V_{k+1}, pair the opposite side by translation W ↦ W−V_k−V_{k+1}, mapping V_k ↦ −V_{k+1} and V_{k+1} ↦ −V_k. Label the five real-y sheet seams e_j, identify all ten polygon vertices to p∞, and show T_0 acting by rotation ζ on both faces. Check the upper and lower face boundary orientations induce d_2(a,b)=(a−b)(1,1,1,1,1), hence the single homology relation e_0+…+e_4=0.
- Frozen source SHA-256: `0e0a9eefddc3c23389953c0c54c6d0589a8cded578b5a757c5e5601ce64c171a`.
- Exact source lines: 71, 154, 156.
- Screenshot evidence: [ex-period-matrix-and-jacobian-of-the-pentagon-curve--01.png](ex-period-matrix-and-jacobian-of-the-pentagon-curve--01.png) SHA-256 `5a4d674f2f4e0570f563a8fa8cbaf65438021cd6132744919f301b212cecd2d3`, [ex-period-matrix-and-jacobian-of-the-pentagon-curve--05.png](ex-period-matrix-and-jacobian-of-the-pentagon-curve--05.png) SHA-256 `57c93dfcdc3eac3bb9789baddfd7b0b0b4cceeab429ba7b2ccf506070d7fefd6`, [ex-period-matrix-and-jacobian-of-the-pentagon-curve--06.png](ex-period-matrix-and-jacobian-of-the-pentagon-curve--06.png) SHA-256 `ce38396e6c172cd1628dd9b4b35f05b70e45c142d4d1196b17e50c72a35ae696`.

## Candidate 23: `thm-hankel-representation-for-reciprocal-gamma`

- Kind: Hankel contour around a branch cut.
- Candidate: The branch, contour orientation, and the sign difference between the two ray contributions are central to the identity and are concrete geometric data.
- Selection reason: The branch, contour orientation, and the sign difference between the two ray contributions are central to the identity and are concrete geometric data.
- Concrete content/check: The branch, contour orientation, and the sign difference between the two ray contributions are central to the identity and are concrete geometric data.
- Frozen source SHA-256: `9483805f6392439592d376c355df3a239eb88f78d83f6ca70842ddd9df1a02cd`.
- Exact source lines: 35, 55.
- Screenshot evidence: [thm-hankel-representation-for-reciprocal-gamma--01.png](thm-hankel-representation-for-reciprocal-gamma--01.png) SHA-256 `eec10d8dd7d75bc92b0a74714f94d669c845fdbccf51336ebab18b677375cf45`.

## Candidate 24: `thm-riemann-hurwitz-formula`

- Kind: branched covering with lifted triangulation.
- Candidate: The finite cell count and local ramification correction are a concrete map and incidence relationship that can be made easier to inspect in a schematic.
- Selection reason: The finite cell count and local ramification correction are a concrete map and incidence relationship that can be made easier to inspect in a schematic.
- Concrete content/check: The finite cell count and local ramification correction are a concrete map and incidence relationship that can be made easier to inspect in a schematic.
- Frozen source SHA-256: `f8275a120a0dd4a039cb1e897df32240d2149f623c495fe73eebad1985c7dbcb`.
- Exact source lines: 54, 55, 56, 57, 58.
- Screenshot evidence: [thm-riemann-hurwitz-formula--01.png](thm-riemann-hurwitz-formula--01.png) SHA-256 `3a20494519928a42ecebbff3d7cdc2102699bad38fa46f7c74b1b9f3d7244f7c`, [thm-riemann-hurwitz-formula--02.png](thm-riemann-hurwitz-formula--02.png) SHA-256 `90f79069d317a9074ee0f6ebe436914ce2a95b74b5cdaaaf5297e70de9a7fbab`, [thm-riemann-hurwitz-formula--03.png](thm-riemann-hurwitz-formula--03.png) SHA-256 `360d46684ede7b04395c88a894c477f743f756c1e65a2feb71eb9ed9f9bf4cc2`, [thm-riemann-hurwitz-formula--04.png](thm-riemann-hurwitz-formula--04.png) SHA-256 `abfa4bfbef563fa01038fa6089d0e7c45fca006f461a2639cbcb03ceceb20c0f`.

## Candidate 25: `ex-annulus-harmonic-measure-of-boundary-circles`

- Kind: concentric annulus with radial harmonic measure.
- Candidate: The formula depends directly on the position of z between the two boundary radii and on which boundary receives each complementary logarithmic weight.
- Selection reason: The formula depends directly on the position of z between the two boundary radii and on which boundary receives each complementary logarithmic weight.
- Concrete content/check: The formula depends directly on the position of z between the two boundary radii and on which boundary receives each complementary logarithmic weight.
- Frozen source SHA-256: `7650cca95c394a6d289efd5602dc51113ba9847fdf10da78ed593250a30dfb38`.
- Exact source lines: 44, 45, 46, 49, 50.
- Screenshot evidence: [ex-annulus-harmonic-measure-of-boundary-circles--01.png](ex-annulus-harmonic-measure-of-boundary-circles--01.png) SHA-256 `8c6c8b7f6a038bb710d0b6ba6b6c1557fcde43ce5ca1780f09f74fd8ef8fd5a7`, [ex-annulus-harmonic-measure-of-boundary-circles--02.png](ex-annulus-harmonic-measure-of-boundary-circles--02.png) SHA-256 `def0ecb7a13ff963543b50f9426de075391e6f3d13e9bf3043c8183c78ffa49a`.

## Candidate 26: `ex-boundary-free-fundamental-parallelogram`

- Kind: complex-plane geometric schematic.
- Candidate: The boundary-versus-lattice relation is the central geometric comparison and is easier to check in a diagram.
- Selection reason: The boundary-versus-lattice relation is the central geometric comparison and is easier to check in a diagram.
- Concrete content/check: Show the unit-square lattice, P_0 and its four lattice vertices, the translated P_a, the translation vector a, and the boundary portions of P_a avoiding all lattice points. Label lattice points as wp poles. Do not encode an unclaimed contour orientation.
- Frozen source SHA-256: `2554b7dfa142b3c51fbf903080a9cc092051535a403d200154d88a9daa016da2`.
- Exact source lines: 45, 49, 53.
- Screenshot evidence: [ex-boundary-free-fundamental-parallelogram--01.png](ex-boundary-free-fundamental-parallelogram--01.png) SHA-256 `bb597a96fa91570d8c3df376bd601453c0adb0b03a1c636fda35dee78647a5dc`, [ex-boundary-free-fundamental-parallelogram--02.png](ex-boundary-free-fundamental-parallelogram--02.png) SHA-256 `709c6e5ad6fdb144be2989a86e6b8037217371b1dd81ce378c2b2b11afa07b39`.

## Candidate 27: `ex-genus-two-cocompact-fuchsian-quotient`

- Kind: branched-cover and quotient schematic.
- Candidate: The branched degree-two map and its six ramification points are a concrete map with a useful visual check; the later uniformization quotient is a separate relation that may be shown as a commuting schematic.
- Selection reason: The branched degree-two map and its six ramification points are a concrete map with a useful visual check; the later uniformization quotient is a separate relation that may be shown as a commuting schematic.
- Concrete content/check: Show the two local sheets over the sphere joined at the six distinct finite branch values a_1,...,a_6; mark one ramification point of index 2 over each, two unramified points over a generic value, and the two unramified points over infinity. If including uniformization, show D -> X -> sphere and D/Gamma ~= X, with Gamma acting freely and properly discontinuously; do not identify X with the sphere.
- Frozen source SHA-256: `48e2fc82e4f32bfeb232327cf6d0aad98cf0d44913cb3f2da93a2446aebca8d0`.
- Exact source lines: 83, 89, 92, 94, 99, 104.
- Screenshot evidence: [ex-genus-two-cocompact-fuchsian-quotient--01.png](ex-genus-two-cocompact-fuchsian-quotient--01.png) SHA-256 `a35fcfb56eced604653389e396364de79e542678ed7fe29f148dff36c980b771`, [ex-genus-two-cocompact-fuchsian-quotient--02.png](ex-genus-two-cocompact-fuchsian-quotient--02.png) SHA-256 `b4513b5832e521d1809ce0234976967b00338362be4e894c9e0ffdaef6eed107`, [ex-genus-two-cocompact-fuchsian-quotient--03.png](ex-genus-two-cocompact-fuchsian-quotient--03.png) SHA-256 `72fe00122a985a3c4ca5e7f8bc72d6c6c5f15879855d0e86b021177d079e4f96`, [ex-genus-two-cocompact-fuchsian-quotient--04.png](ex-genus-two-cocompact-fuchsian-quotient--04.png) SHA-256 `518daabb3f5324b79ca578ad8142dcaec09eafdbdf29c02fb8c331d5cbed2645`, [ex-genus-two-cocompact-fuchsian-quotient--05.png](ex-genus-two-cocompact-fuchsian-quotient--05.png) SHA-256 `ad5e99ed66c29a7d540b2d0bdf479764617e9aeda2325c15570e3dd54dceab1e`, [ex-genus-two-cocompact-fuchsian-quotient--06.png](ex-genus-two-cocompact-fuchsian-quotient--06.png) SHA-256 `8fd82dfbaa9e95e062acc26032fe3308da3ac8fe435ee1b0117cc2dec7bec89e`, [ex-genus-two-cocompact-fuchsian-quotient--07.png](ex-genus-two-cocompact-fuchsian-quotient--07.png) SHA-256 `301e87ea77d30f9952ac653134972b95f5a847d6019fe090e200ce64d4c0cd9e`, [ex-genus-two-cocompact-fuchsian-quotient--08.png](ex-genus-two-cocompact-fuchsian-quotient--08.png) SHA-256 `f0550b87cfee04f38b88120d7e8fa850bf9a71a0897b1d99047e23acdfc4be40`.

## Candidate 28: `thm-winding-number-circle-traversed-k-times`

- Kind: oriented contour and complementary-region schematic.
- Candidate: The sign and magnitude of the index depend directly on traversal direction and multiplicity, which a labeled geometric diagram can make explicit.
- Selection reason: The sign and magnitude of the index depend directly on traversal direction and multiplicity, which a labeled geometric diagram can make explicit.
- Concrete content/check: Show a circle centered at a with radius r; use arrows for k>0 and k<0 (counterclockwise and clockwise), annotate k turns, n=k in the interior and n=0 in the unbounded exterior. Treat k=0 separately as the constant path at a+r and do not draw it as a circle traversal.
- Frozen source SHA-256: `e7a7121621340a7b548ee66560b9496d4b5b12cb597fc2deb4b7e5c41dd50dd6`.
- Exact source lines: 32, 34, 38, 40, 42.
- Screenshot evidence: [thm-winding-number-circle-traversed-k-times--01.png](thm-winding-number-circle-traversed-k-times--01.png) SHA-256 `37c17f4f7b27aeeab24ba1eadb3e33df8071864df77895a5af155353755eb5fd`, [thm-winding-number-circle-traversed-k-times--02.png](thm-winding-number-circle-traversed-k-times--02.png) SHA-256 `62a2d54844fd50ecd0f00c87981b99390834ca816817d074eca03771276220b6`, [thm-winding-number-circle-traversed-k-times--03.png](thm-winding-number-circle-traversed-k-times--03.png) SHA-256 `53b08bf7af9adebd000c5581098ecf0c780a0a92eaa8f67db13eaaffd9dd7a79`.

## Candidate 29: `ex-index-of-the-boundary-cycle-of-a-round-annulus`

- Kind: oriented annular chain and region-index schematic.
- Candidate: The negative coefficient on the inner circle, three index regions, and the distinct ambient annulus are concrete geometry where a visual could prevent sign or domain confusion.
- Selection reason: The negative coefficient on the inner circle, three index regions, and the distinct ambient annulus are concrete geometry where a visual could prevent sign or domain confusion.
- Concrete content/check: Draw concentric circles C_1,C_2 about p with positive parameter arrows, label the chain coefficients +1 on C_2 and -1 on C_1, mark index 0/1/0 in the three complementary regions, and show Omega={s_1<|z-p|<s_2} with s_1<r_1<r_2<s_2. Explicitly distinguish Omega from the smaller annulus whose boundaries are the trace.
- Frozen source SHA-256: `7da11a597b8c623c919aa495d726b3b7c7fdf5b16e6a4d8d4bffb05e1736d036`.
- Exact source lines: 32, 34, 35, 37, 39, 44.
- Screenshot evidence: [ex-index-of-the-boundary-cycle-of-a-round-annulus--01.png](ex-index-of-the-boundary-cycle-of-a-round-annulus--01.png) SHA-256 `e6e7c687d94da5c92e5ad00ad12c1120a9cc9f30718b36527d1d7e55337ddccf`, [ex-index-of-the-boundary-cycle-of-a-round-annulus--02.png](ex-index-of-the-boundary-cycle-of-a-round-annulus--02.png) SHA-256 `731228823f91cc9f3a4552981ca7f4a406f75fd070e84758812c51b5dcc7f34c`.

## Candidate 30: `ex-hartogs-figure-in-modulus-coordinates`

- Kind: TikZ modulus-coordinate region diagram.
- Candidate: The defining set is a union of two cylinder constraints. In modulus coordinates it has a simple planar footprint, and the missing top-left corner makes the union and its later hull relation much easier to see.
- Selection reason: The defining set is a union of two cylinder constraints. In modulus coordinates it has a simple planar footprint, and the missing top-left corner makes the union and its later hull relation much easier to see.
- Concrete content/check: Axes |z1| and |z2| from 0 to 1; mark r and s; shade [0,1)×[0,s) and (r,1)×[0,1); distinguish the excluded corner [0,r]×[s,1); label open boundary edges accurately. Do not imply pointwise membership at excluded boundaries.
- Frozen source SHA-256: `95826e9485fdbbc7aaabf4c688414a492949d05b2e5708115bd70bc0cf242efb`.
- Exact source lines: 34, 37.
- Screenshot evidence: [ex-hartogs-figure-in-modulus-coordinates--01.png](ex-hartogs-figure-in-modulus-coordinates--01.png) SHA-256 `2ada1d5c29907df7b418e378ec7874bc7e811d6690c3f771d3f42c331bdb62d6`.

## Candidate 31: `ex-complex-torus-parabolic-deck-lattice`

- Kind: TikZ lattice fundamental parallelogram and quotient-edge identification.
- Candidate: The quotient proof repeatedly translates between a lattice in C, its fundamental parallelogram, and a square with paired sides; a diagram can make the quotient map and deck translations explicit.
- Selection reason: The quotient proof repeatedly translates between a lattice in C, its fundamental parallelogram, and a square with paired sides; a diagram can make the quotient map and deck translations explicit.
- Concrete content/check: Draw a generic positively oriented parallelogram spanned by ω1,ω2; label opposite sides a/a⁻¹ and b/b⁻¹ with directions matching the boundary word aba⁻¹b⁻¹; show lattice translates and q:C→C/Λ; mark g(s,t)=q(sω1+tω2) on [0,1]². Do not assume orthogonal/equal-length generators.
- Frozen source SHA-256: `5c72c38880f2d1cb2db62e9ecc539d80124426f5f43d560a6a18bb98e724d006`.
- Exact source lines: 85, 109, 143.
- Screenshot evidence: [ex-complex-torus-parabolic-deck-lattice--01.png](ex-complex-torus-parabolic-deck-lattice--01.png) SHA-256 `b298c3e26cc58ed1c596c68adadc876fdb74a9c9f9c31756f876ef7326201324`.

## Candidate 32: `ex-winding-numbers-of-a-keyhole-contour`

- Kind: TikZ oriented keyhole chain and index-region diagram.
- Candidate: Orientation and cancellation on the doubled radial trace determine both cycle closure and the piecewise index; an oriented sketch catches sign errors immediately.
- Selection reason: Orientation and cancellation on the doubled radial trace determine both cycle closure and the piecewise index; an oriented sketch catches sign errors immediately.
- Concrete content/check: Draw concentric circles |z|=ε,R; outer circle counterclockwise, inner circle clockwise; draw the positive real segment ε→R and the same trace R→ε with opposed arrows; label their chain coefficients +1; shade/report index 0 inside ε, 1 in ε<|z|<R, and 0 outside R; leave all trace points unassigned.
- Frozen source SHA-256: `4ccfc0ce1b0306d32f1de87897ce98e8729d844ff87b805d571f66df9220f24e`.
- Exact source lines: 32, 35, 37, 41, 45, 47, 49.
- Screenshot evidence: [ex-winding-numbers-of-a-keyhole-contour--01.png](ex-winding-numbers-of-a-keyhole-contour--01.png) SHA-256 `892dadaad7e1c9d4b47305ad0750317963200a050755f55418165972b1a8d26c`, [ex-winding-numbers-of-a-keyhole-contour--02.png](ex-winding-numbers-of-a-keyhole-contour--02.png) SHA-256 `1637399f50d51ab7c76990ed9e6e2df3e76f369a45403f07e6b7f749254f0779`.

## Candidate 33: `thm-standard-fundamental-domain-for-the-modular-group`

- Kind: TikZ upper-half-plane fundamental domain with boundary pairings and elliptic points.
- Candidate: The theorem is chiefly about a curved region, paired boundary arcs, and special stabilizer points, all of which benefit from a geometric view.
- Selection reason: The theorem is chiefly about a curved region, paired boundary arcs, and special stabilizer points, all of which benefit from a geometric view.
- Concrete content/check: Draw upper half-plane; vertical boundaries Re τ=±1/2 and unit-circle arc |τ|=1 bounding D; arrows between vertical sides for T:τ↦τ+1; paired circular arcs under S:τ↦−1/τ; mark i, ω on the left arc endpoint and ω+1 on the right endpoint; distinguish open D from closure and avoid suggesting the arc has all points fixed.
- Frozen source SHA-256: `c983317adff02e035e6952a4b127de83f47c9d0bd4c6ff5565538fed0b8eb232`.
- Exact source lines: 50, 51, 52, 57.
- Screenshot evidence: [thm-standard-fundamental-domain-for-the-modular-group--01.png](thm-standard-fundamental-domain-for-the-modular-group--01.png) SHA-256 `62e90cb104e9347f44c446195497e7ae04185cb9a8545da85775772faacd9675`, [thm-standard-fundamental-domain-for-the-modular-group--02.png](thm-standard-fundamental-domain-for-the-modular-group--02.png) SHA-256 `d08067aee3f20f6341b5b13a2bb865a8e73d0e17a99e044820a0d39ba64fe0bf`.
