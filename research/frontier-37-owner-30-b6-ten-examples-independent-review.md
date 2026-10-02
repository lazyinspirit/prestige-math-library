# B6 ten examples: independent mathematical review

Date: 2026-10-01. Run: `frontier-37-owner-30`. I independently read all ten
current proof bodies and checked the actual load-bearing library routes named
below. The B6 example-pair scope is current and closed at hash
`a9d5fec1c9d280921eaf5e40dd28aa3a0ab0225aba2cf4cd0f942ab70a46a10e`. The
dispositions are ordinary confidence-1 accepts; each receipt uses the exact
current `deps` array from that item’s frontmatter.

## Dispositions

| Item | Current SHA-256 | Disposition |
|---|---|---|
| `ex-smooth-conic-is-projective-line-with-point` | `dc2f980e7913764b831098a24334ab00f1b8b038cd09784b3c5c0a187227221a` | Accept, confidence 1 |
| `cex-inseparable-map-riemann-hurwitz-naive-fails` | `670c3c7f4b2e3c05cd610ed5d1b6041b918cf242a2e011978c05979fbd34ca74` | Accept, confidence 1 |
| `ex-nodal-cubic-normalization-genus` | `0b7d1a73a76897efef207af39ca36d975c1eaa9414d692b958ec7f9bc55681f5` | Accept, confidence 1 |
| `ex-cuspidal-cubic-normalization-genus` | `5e1100bc705d9e4c595b23c75fd3c6c906c640433a44f3e93c06a6efc2427d84` | Accept, confidence 1 |
| `cex-rational-map-singular-curve-not-extend-uniquely` | `abcc22407739b0e697df763ac95f248503b7c593c8e5b397289c09699b7c20e3` | Accept, confidence 1 |
| `ex-divisor-degree-over-nonalgebraically-closed-field` | `fdaeec8ce8476a20bcea3671b20666cbf4c320dbd7e0823801690df857ed363d` | Accept, confidence 1 |
| `ex-basepoint-linear-system` | `40f08fa03bbf897cdcdb45048ed374fd7ec2a3a2398140cd2ca878d99e4098f1` | Accept, confidence 1 |
| `cex-degree-zero-line-bundle-no-section` | `2fe8e8a85701054fe4e0998b722b736bd7477be1e7fce7bd0470b7ca0b446282` | Accept, confidence 1 |
| `ex-ramification-power-map-projective-line` | `3b965a0b753a48d6b0aa665cf4f17521c4295986de9285f4b8bb53a9e1582312` | Accept, confidence 1 |
| `ex-plane-quartic-genus-three-smooth` | `01f48a5afd0e960d40a87ac18eed6b866c9f0c127372e5d0f0ce30d5b1f3f281` | Accept, confidence 1 |

## Mathematical routes checked

- The conic proof’s normal form and residual-intersection parametrization are
  valid in characteristic different from two. The maps are inverse on dense
  opens and extend to inverse morphisms; the divisor calculation gives
  `dim L([P]) = 2`. The forward-ref projective-line divisor supplier was
  independently read. For the nodal and cuspidal cubics, the stated
  characteristic restrictions make the Jacobian and tangent-cone tests
  correct; the displayed maps are finite birational normal models. I checked
  their normalization identification against the normalization proof’s
  affine integral-closure construction. The two local normalization quotients
  each have dimension one, so the delta correction gives geometric genus zero.
- The singular-source counterexample has exactly one node; the slope `y/x`
  takes the two distinct branch values `1` and `−1`, so a global extension
  would assign two values at that node. Separatedness still gives uniqueness
  whenever an extension exists. The nonclosed-field divisor example computes
  `kappa(V(t^2+1)) = C`, degree two, the divisor `[x]−2[infinity]`, and the
  two degree-one points after base change correctly.
- For the characteristic-`p` power map, the field extension has degree `p`,
  the geometric ramification indices are `p`, and the relative differential
  modules are locally free with zero torsion; thus the proposed torsion
  recipe is zero while the two canonical line-bundle degrees differ. For
  `x -> x^n` with `char(k)` not dividing `n`, the chart calculation gives
  relative differentials supported only at zero and infinity, each of length
  `n−1`; off those points the derivative is a unit, including at nonrational
  closed points. The residue and characteristic qualifications are preserved.
- The base-point example uses the section vanishing rule
  `ord_x(f)+n_x >= 1`: `span(1,t^2)` is base-point-free and gives `t^2`,
  while `span(t,t^2)` has exactly the base point zero and its rational map
  extends as the identity. The characteristic-two double discriminant and
  length-two intersection are computed scheme-theoretically. On the genus-one
  cubic, `O(P−Q)` has degree zero; triviality would give a degree-one map to
  `P^1`, and a nonzero section would give an effective degree-zero divisor,
  so the nontrivial bundle has no section. For the smooth plane quartic, the
  all-characteristic Jacobian argument forces irreducibility and reducedness;
  plane arithmetic genus three and vanishing delta invariants give geometric
  genus three.

Load-bearing proofs checked include
`lem-projective-line-divisors-classified-by-degree`,
`thm-plane-curve-arithmetic-genus`,
`thm-normalization-glues-integral-finite-type-curves`,
`lem-normalization-lowers-arithmetic-genus-delta`,
`cor-plane-curve-geometric-genus-delta-correction`,
`lem-rational-map-smooth-curve-to-proper-scheme-extends`,
`lem-proper-normal-curve-rational-function-map`,
`lem-finite-flat-curve-fibre-degree`,
`lem-curve-different-local-support-and-index-bound`,
`thm-canonical-bundle-ramification-formula`,
`thm-curves-function-fields-equivalence`,
`cor-birational-smooth-proper-curves-isomorphic`,
`thm-line-bundle-rational-section-cartier-divisor`,
`cor-degree-descends-picard-curve`,
`def-base-point-linear-system`, and
`thm-base-point-free-linear-system-morphism`. The released B7/B8 inputs were
stable when these decisions were recorded. No concrete mathematical gap
remains in the ten reviewed examples.
