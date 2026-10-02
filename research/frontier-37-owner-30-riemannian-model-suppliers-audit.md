# B13 Riemannian model supplier audit

Date: 2026-10-01

## Scope and provenance

This is the independent ordinary review of the three engine-added A-page items
on `riemannian-comparison-theorems`. The current non-owner scope decision is
`sufficient` at SHA-256
`4341a1f01bad606f8361a4d3aacf4497eff99c4493e48686aaa4c28afbe3d701`; it
explicitly authorizes these three additions and records their replacement of
the former A-to-B example edges.

I checked the immutable auditor baseline
`research/frontier-37-owner-30-step3-auditor-baseline.json` (raw SHA-256
`19421dc69fb08f7d6732fd676ab7851374d2eed7f8019aebf893e1caa61a5d86`). None
of the three IDs occurs in `baseline.items` or `baseline.existing_item_files`.
There is no current Step-3 auditor-certification file, and
`loadStep3AuditorProvenance` returns no provenance rows. Accordingly, these
items were reviewed and recorded through ordinary non-owner item receipts; I
did not treat the post-baseline additions as auditor-authored, rewrite the
baseline, or create an auditor certification. The prior batch report's
post-author-certification description is historical evidence only.

I read the complete current bodies of all three target items and checked the
actual interfaces named by their facts against the current direct dependency
lists below. Every listed direct supplier resolves to a published item. The
current item-input hashes include the transitive supplier closure and the
current batch manifest row.

## Independent proof review

### `prop-round-sphere-model-geometry`

Raw item SHA-256:
`f2e9ead5a8ddd37a3dcdcbd1b70dd8ff9f26156c74a05cdc18ec2ece41a3e044`.
Current item-input SHA-256:
`0df274630c6e9ce833fbe6c3b5fad4d73160a9582dfc7dc8a09a11cead12341b`.

The regular-level-set and tangent-kernel interfaces give the embedded sphere
and tangent spaces; the pullback-metric interface supplies the induced
Riemannian metric. The displayed tangential projection is independent of the
ambient extension along tangent directions, torsion-free, and metric
compatible, so Levi-Civita uniqueness identifies it with the sphere
connection. Differentiating the sphere constraint gives the geodesic ODE, and
the trigonometric curve satisfies it with the stated initial data on all of
`R`; uniqueness identifies the maximal geodesic. Great-circle arcs give the
distance upper bound, while the Hopf–Rinow minimizing geodesic and its explicit
formula give the lower bound. The resulting distance formula proves the
diameter and antipodal equality case. The declared cut-time, cut-locus,
injectivity-radius, and open tangent-cut-domain interfaces then give all cut
and injectivity conclusions; the zero vector is handled separately when
passing from the punctured tangent cut domain to the full open tangent ball.
The round-sphere curvature supplier states the claimed normalization
`1/R^2` for every `R>0` and `n>=2`.

The 30 examined direct dependencies are:
`def-countable-choice`,
`thm-a-regular-level-set-is-an-embedded-submanifold`,
`prop-tangent-space-of-a-regular-level-set-is-the-kernel`,
`prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions`,
`def-riemannian-metric-and-riemannian-manifold`,
`thm-fundamental-theorem-of-riemannian-geometry`,
`prop-coordinate-formula-for-the-lie-bracket`,
`thm-clairaut-schwarz-mixed-partials`,
`def-affine-connection-on-a-smooth-manifold`,
`prop-connection-laws-in-directional-form`,
`thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
`prop-affine-reparametrization-of-a-geodesic-is-a-geodesic`,
`prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`,
`def-geodesic-of-an-affine-connection`, `thm-hopf-rinow`,
`thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization`,
`def-riemannian-distance-on-a-connected-manifold`,
`thm-riemannian-distance-is-a-metric`,
`ex-the-round-sphere-has-positive-constant-sectional-curvature`,
`def-sectional-curvature`, `def-cut-time-in-a-unit-tangent-direction`,
`def-cut-point-and-cut-locus-of-a-point`,
`prop-injectivity-radius-is-the-infimum-of-cut-times`,
`def-injectivity-radius-at-a-point-and-of-a-manifold`,
`thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p`,
`cor-euclidean-closed-balls-and-spheres-are-compact`,
`thm-cauchy-schwarz-and-the-euclidean-norm`,
`def-principal-inverse-sine-and-cosine`,
`thm-sine-and-cosine-derivatives`, and
`cor-trigonometric-parity-and-pythagorean-identity`.

### `prop-half-space-model-geometry`

Raw item SHA-256:
`7abbff924a51913160bb7d76a9b65ba5594f64f5f9fd40a5bc2d841b6b68658c`.
Current item-input SHA-256:
`7ba600e7158a8887939b5e902066eba821ab4418b8c33d800d215d25cc9812de`.

The conformal metric's Christoffel symbols follow from the declared
coordinate formula. Substitution into the declared curvature convention gives
`R(X,Y)Z=-a^2(g(Y,Z)X-g(X,Z)Y)`, hence sectional curvature `-a^2` with the
library's four-tensor convention. Direct substitution verifies the vertical
and semicircle geodesics and their unit speed. The arbitrary horizontal unit
vector case is valid: horizontal orthogonal transformations preserve the
metric, or equivalently the coordinate equations reduce componentwise using
`|u|=1`. The `sinh` parametrization matches every unit initial tangent; the
vertical and reversed-vertical cases cover zero horizontal component.
Geodesic uniqueness and Hopf–Rinow give maximality and metric completeness.
Convexity of the half-space gives its connectedness and simple connectedness.

The 18 examined direct dependencies are:
`def-countable-choice`, `prop-coordinate-criterion-for-a-riemannian-metric`,
`prop-christoffel-formula-for-the-levi-civita-connection`,
`prop-coordinate-geodesic-equation`,
`prop-coordinate-formula-for-the-curvature-tensor`,
`thm-curvature-is-a-type-one-three-tensor`,
`def-riemann-curvature-four-tensor`, `def-sectional-curvature`,
`thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
`prop-affine-reparametrization-of-a-geodesic-is-a-geodesic`,
`thm-hopf-rinow`, `def-hyperbolic-functions`,
`thm-hyperbolic-identities-and-derivatives`,
`cor-convex-subsets-of-rn-are-contractible`,
`cor-contractible-spaces-are-path-connected`,
`lem-contractibility-implies-trivial-fundamental-group`,
`def-simply-connected`, and `thm-path-connected-implies-connected`.

### `prop-flat-torus-model-geometry`

Raw item SHA-256 after repair:
`9e6efb1a93be73033ac610c1f7e8d25b6432370a517e9f2a6fdcc87038c10657`.
Current item-input SHA-256:
`6adcb5a267b52e9ebdfc62124d427716e19f5402c7dbda006608831d990d43cf`.

The original proof indexed its atlas by `u in Z^n`. Those centers all give
the same chart image `q(B_0)`, which misses classes with a half-integer
coordinate. Under the authorized repair the atlas is indexed by all
`u in R^n`; every class `[x]` is covered by the explicit representative
`x in B_x`, so no representative-choice function is used. For each point in
an overlap, the difference of its two chart lifts is an integer vector. In
the `B_u` coordinates this difference varies continuously into the discrete
set `Z^n`, hence is constant on a neighborhood of that point. The transition
is therefore locally an integer translation and is smooth; distinct overlap
components may use different translations. The `n=1` boundary paragraph now
uses `t -> [x+tv]` for arbitrary initial vector `v`, with constant speed
`|v|`, and identifies `t -> [x±t]` as the unit-speed cases. The remaining
Hausdorff and second-countability arguments, metric gluing and uniqueness,
local-isometry property, lifted straight-geodesic formula, completeness,
flatness, exponential formula, and noninjectivity follow from the stated
quotient, Riemannian, Euclidean-geodesic, local-isometry, and Hopf–Rinow
interfaces.

The 19 examined direct dependencies are:
`def-countable-choice`, `def-quotient-topology`,
`def-topological-manifold-without-boundary`, `def-smooth-atlas`,
`def-smooth-manifold`, `prop-coordinate-criterion-for-a-riemannian-metric`,
`def-riemannian-metric-and-riemannian-manifold`,
`def-riemannian-isometry-and-local-isometry`,
`ex-straight-lines-as-euclidean-geodesics`,
`lem-local-isometries-send-geodesics-to-geodesics`,
`thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
`thm-hopf-rinow`, `prop-christoffel-formula-for-the-levi-civita-connection`,
`prop-coordinate-formula-for-the-curvature-tensor`,
`def-riemann-curvature-four-tensor`, `def-sectional-curvature`,
`cor-rn-is-polygonally-connected-and-locally-path-connected`,
`thm-path-connected-implies-connected`, and
`thm-continuous-image-of-a-connected-space`.

## Receipts and checks

Through `recordStep3`, I wrote ordinary non-owner item receipts at confidence
1 using each item's exact current direct dependency list:

- `prop-round-sphere-model-geometry`: `accept`, input hash
  `0df274630c6e9ce833fbe6c3b5fad4d73160a9582dfc7dc8a09a11cead12341b`,
  receipt-file SHA-256
  `4e057b98dbc6bcae5156c50f38635cde7bb2aef0c21c997c129dff4059f58650`.
- `prop-half-space-model-geometry`: `accept`, input hash
  `7ba600e7158a8887939b5e902066eba821ab4418b8c33d800d215d25cc9812de`,
  receipt-file SHA-256
  `70d6bcdf9a9bd63084e7756c23077a22a3e7e1120f195f848ec770f938a91164`.
- `prop-flat-torus-model-geometry`: `repaired`, input hash
  `6adcb5a267b52e9ebdfc62124d427716e19f5402c7dbda006608831d990d43cf`,
  receipt-file SHA-256
  `12d58a6111c989cc3d840337c4e41da6d685fcf760abd833f776815ad4513989`.

After the last body edit, the scoped canonical checks on the changed torus
item passed: `precheck` reported `1 checked, 0 failing`; `rendercheck`
reported `1 checked, 0 errors, 0 warnings`. A filtered `itemDecision` check
then found all three target rows current and closed; the B13 scope receipt is
still current at the SHA above. The other 63 current B13 closures were reused;
no broad census, gate, carrier, manifest, contract, coverage, plan, ledger, or
baseline edit was made.

One descriptive detail remains outside the mathematical conclusions: the
half-space item's [A1] says countable choice is used only through
Hopf–Rinow, while its geodesic existence-and-uniqueness supplier is also
declared under `AC_omega`. The proposition itself assumes that same inherited
`AC_omega` and no stronger choice principle is used; this audit found no
result-level gap from that wording.
