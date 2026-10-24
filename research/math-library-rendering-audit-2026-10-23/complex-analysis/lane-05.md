# Complex Analysis lane 05 rendering review

Reviewed 140 assigned items and 256 screenshot tiles.

## Coverage and integrity

- For every item, the current source SHA256 equals the assignment SHA256 and frozen snapshot SHA256; local preview HTML SHA256 equals the assigned HTML SHA256.
- Every screenshot PNG SHA256 equals its manifest SHA256. No hash mismatches were found.
- Every assigned title and complete ItemBody was read from the frozen snapshot and compared with local preview HTML; every tile was opened individually at original resolution.
- No `Scratch` section occurs in the assigned source bodies.
- No live website or HTTP(S) request was used.
- Exact per-item and per-tile hashes and original-resolution view records are in `lane-05.json`.

## Confirmed rendering findings

### thm-c-two-characterization-of-plane-subharmonicity

Source items/thm-c-two-characterization-of-plane-subharmonicity.md lines 4: `title: "A C^2 function is subharmonic exactly when its Laplacian is nonnegative"`

Title renders C^2 as literal caret notation rather than typeset mathematics.
Screenshot: `screenshots/thm-c-two-characterization-of-plane-subharmonicity--01.png`

### ex-exp-one-over-z-shows-great-picard-is-sharp

Source items/ex-exp-one-over-z-shows-great-picard-is-sharp.md lines 4: `title: "The function e^(1/z) omits zero and takes every nonzero value infinitely often near the origin"`

Title renders e^(1/z) as raw ASCII exponent notation.
Screenshot: `screenshots/ex-exp-one-over-z-shows-great-picard-is-sharp--01.png`

### ex-residue-of-p-over-q-at-a-simple-zero

Source items/ex-residue-of-p-over-q-at-a-simple-zero.md lines 4: `title: "A residue of p over q at a simple zero is p(a)/q'(a)"`

Title renders p(a)/q'(a) as raw ASCII mathematical notation.
Screenshot: `screenshots/ex-residue-of-p-over-q-at-a-simple-zero--01.png`

### ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane

Source items/ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane.md lines 4: `title: "The family z^n is normal on the unit disc and not normal on the complex plane"`

Title renders z^n as literal caret notation.
Screenshot: `screenshots/ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane--01.png`

### fs-every-continuous-function-on-a-convex-domain-has-a-primitive

Source items/fs-every-continuous-function-on-a-convex-domain-has-a-primitive.md lines 4: `title: "FALSE: every continuous complex-valued function on a convex domain has a primitive"`

The original standalone screenshot begins the title at “ALSE:”; the initial F is visibly clipped.
Screenshot: `screenshots/fs-every-continuous-function-on-a-convex-domain-has-a-primitive--01.png`

### fs-connected-complement-in-c-implies-simple-connectivity

Source items/fs-connected-complement-in-c-implies-simple-connectivity.md lines 4: `title: "FALSE: a connected plane-domain complement in C already implies simple connectivity"`

The original standalone screenshot begins the title at “F:”; “ALSE” is clipped.
Screenshot: `screenshots/fs-connected-complement-in-c-implies-simple-connectivity--01.png`

### def-nevanlinna-deficiency-and-ramification-index

Source items/def-nevanlinna-deficiency-and-ramification-index.md lines 61: `**Proof technique:** divide the First Main Theorem by $T$ and use that $T\to\infty$, then bound nonnegative numerators by $T$.`

The CSS-uppercase technique banner exposes the raw $ delimiters and TeX command in the math-bearing phrase.
Screenshot: `screenshots/def-nevanlinna-deficiency-and-ramification-index--01.png`

### lem-disc-hardy-traces-and-szego-reproducing

Source items/lem-disc-hardy-traces-and-szego-reproducing.md lines 100: `**Proof technique:** direct, using radial convergence, the $H^1$ Cauchy representation, and a local closed-range argument.`

The CSS-uppercase technique banner shows literal $H^1$ delimiters instead of rendered math.
Screenshot: `screenshots/lem-disc-hardy-traces-and-szego-reproducing--03.png`

### lem-round-circles-are-conformally-removable

Source items/lem-round-circles-are-conformally-removable.md lines 68: `**Proof technique:** prove removability of the unit circle by gluing analytic $1$-quasiconformality across it, then use Möbius invariance and subset monotonicity.`

The CSS-uppercase technique banner shows literal $1$ delimiters around a mathematical quantity.
Screenshot: `screenshots/lem-round-circles-are-conformally-removable--02.png`

### lem-borel-nevanlinna-growth-increment

Source items/lem-borel-nevanlinna-growth-increment.md lines 58: `**Proof technique:** split the failure set according to the integer level of $u$; the first crossing radii $s_m$ of the levels $m$ give an explicit cover of the failure set by intervals of lengths $m^{-1-\varepsilon}$, whose total length is a convergent series.`

The CSS-uppercase technique banner exposes raw $ delimiters for u and epsilon.
Screenshot: `screenshots/lem-borel-nevanlinna-growth-increment--01.png`

### thm-nevanlinna-five-value-theorem

Source items/thm-nevanlinna-five-value-theorem.md lines 55: `**Proof technique:** normalise the five values to finite values by a Möbius map, compare the common value counts with the zeros of $F-G$, apply the truncated Second Main Theorem to both normalised functions, and use the characteristic growth to reach a contradiction unless $F-G\equiv0$.`

The CSS-uppercase technique banner exposes raw $ delimiters and the TeX command \equiv.
Screenshot: `screenshots/thm-nevanlinna-five-value-theorem--01.png`

## Optional source-supported diagram candidates

### thm-argument-principle-as-image-winding-number

Source lines 55, 71, 73, 75: `“f(z) ne 0 on gamma*”; step 1.1 says f composed with gamma is a closed contour whose trace misses 0; step 3.1 identifies integral_gamma f'/f dz with 2 pi i n(f composed with gamma,0).`

Kind: paired contour map / winding diagram. The theorem explicitly equates a domain contour integral with the winding of its image cycle; a two-panel map makes the image and index relation concrete.
Draw/check: Draw gamma in the z-plane and f∘gamma in the w-plane with 0 marked outside the image trace; show traversal direction, source-to-image mapping, and the signed winding index. Check orientation and that the image avoids 0.
Status: candidate (not a confirmed defect). Screenshot evidence: `screenshots/thm-argument-principle-as-image-winding-number--01.png`

### thm-elliptic-function-divisor-laws

Source lines 69, 71, 74, 77, 79, 90: `P={a+s omega_1+t omega_2:0<=s,t<=1}, boundary avoids zeros/poles; zeros and poles in P° have equal multiplicity count; residues in P° sum to zero.`

Kind: oriented fundamental parallelogram with paired edges and divisor marks. The claims rely on cancellation of opposite sides by lattice periodicity and interior zero/pole multiplicities, which benefit from an explicit fundamental-cell view.
Draw/check: Draw positively oriented P with edge vectors omega_1 and omega_2, identify opposite edges by translations, and mark interior zero/pole locations with multiplicity and residue labels; indicate no boundary zeros or poles. Check orientation, edge pairing, and which marks contribute to each sum.
Status: candidate (not a confirmed defect). Screenshot evidence: `screenshots/thm-elliptic-function-divisor-laws--01.png`, `screenshots/thm-elliptic-function-divisor-laws--02.png`

### thm-riemann-bilinear-relations

Source lines 70, 75, 84, 90: `Normalized cycles satisfy P(a_i,omega_j)=delta_ij; Pi_ij=P(b_i,omega_j); the period lattice is generated by e(a_i),e(b_i) and in normalized coordinates is Z^g+Pi Z^g.`

Kind: symplectic homology cycles and period-coordinate map. The result links a_i,b_i cycles to normalized differential periods, a matrix, and the resulting lattice; a schematic cycle-to-period map can expose indexing and sign conventions.
Draw/check: On an oriented genus-g surface, show the a_i,b_i cycle pairs with their intersection convention, arrows to the normalized a-period matrix I and b-period matrix Pi, then the lattice vectors e(a_i),e(b_i) in Omega(X)*. Check cycle orientation, indices, and the sign in the intersection pairing.
Status: candidate (not a confirmed defect). Screenshot evidence: `screenshots/thm-riemann-bilinear-relations--01.png`, `screenshots/thm-riemann-bilinear-relations--02.png`

### thm-slit-plane-root-branch-biholomorphism-to-a-sector

Source lines 17, 20, 25, 31: `S=C\{x in R:x<=0}; V_n={r e^{i theta}:r>0,-pi/n<theta<pi/n}; R_n(z)=exp(Log z/n); R_n maps S biholomorphically onto V_n with inverse w maps to w^n.`

Kind: slit-plane-to-sector branch map. The statement gives an explicit branch map and inverse between two planar regions; a domain/codomain sketch can clarify the branch cut and argument range.
Draw/check: Draw the nonpositive real-axis slit, the open sector with rays at angles ±pi/n, and arrows z↦R_n(z), w↦w^n; mark excluded boundary rays, argument ranges, and verify the composed maps and orientation.
Status: candidate (not a confirmed defect). Screenshot evidence: `screenshots/thm-slit-plane-root-branch-biholomorphism-to-a-sector--01.png`

## Existing diagrams and mathematical checks

All 140 items were checked. Screenshot manifests report 0 items with TikZ and 0 TikZ blocks; no manifest diagram failures were recorded. No existing diagrams were present to check for mathematical content, maps, orientations, indices, or signs. Rendered mathematical statements and proof formulas were visually checked; no further confirmed diagram-math issue was identified.

## Limitations

- Review used only local frozen snapshots, preview HTML, manifests, and PNGs. No live website or HTTP(S) access occurred.
- All screenshot tiles were viewed individually at original resolution.
- The two title-clipping reports are supported by standalone original PNGs; no claim is based on a tile boundary.
- CSS uppercase technique banners are expected, but raw math in a banner is reported as a rendering defect. Internal wikilinks are intentionally block-line.
