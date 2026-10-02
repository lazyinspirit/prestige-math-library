# Real conic counterexample repair and audit

## Scope and status

This repair is limited to `items/cex-genus-zero-without-rational-point-not-p1.md`
and this report. All six claims, the base fields, and the stated Axiom-of-Choice
scope remain in place. The item now proves its curve-dimension, all-points
smoothness, and properness assertions through current library interfaces and
inline chart calculations. No batch manifests, contracts, plans, ledgers,
receipts, scope decisions, or gates were edited.

The item remains a draft because its arithmetic-genus and genus-zero
rational-point suppliers remain drafts with their own unresolved supplier
obligations. This report does not accept those suppliers or clear the item's
remaining escalation.

## Corrections retained from the first repair

The complex factorization argument normalizes a hypothetical factorization as
`(x + i y + alpha z)(x - i y + gamma z)`. Its expansion is
`x^2 + y^2 + (alpha + gamma)xz + i(gamma - alpha)yz + alpha gamma z^2`.
Comparison with `x^2 + y^2 + z^2` gives
`alpha + gamma = 0`, `i(gamma - alpha) = 0`, and `alpha gamma = 1`.
The first two force `alpha = gamma = 0` over `C`, contradicting the third.
The prose also explains why factors of a homogeneous quadratic can be taken
homogeneous. The principal ideal `(F)` is prime by the published finite-variable
UFD lemma. This replaces the false old coefficient claim `alpha gamma = 0`.

The divisor argument does not identify an arbitrary degree-one divisor with a
single point. Every closed point has finite residue extension over `R`; that
extension is separable and simple. Its irreducible real minimal polynomial has
degree one or two. Degree one would give an `R`-point by the field-valued-points
lemma, contrary to the sum-of-squares calculation. Thus all closed points have
degree two and every finite signed divisor has even degree. No effectiveness or
single-point-support assumption is used.

## Curve assertions now proved in the item

**Geometric integrality.** The repaired coefficient comparison proves that
`F` is irreducible over `C`; the finite-variable UFD lemma makes `(F)` prime,
so the projective hypersurface over `C` is reduced and irreducible, and the
explicit point `[i:0:1]` makes it nonempty. The extension `C/R` is algebraic
and `C` is algebraically closed, so `C` is an algebraic closure of `R`. The
geometric-fibre and geometric-integrality definitions therefore identify this
integral `C`-fibre as the geometric integrality test over `R`. For the curve
over `C`, the algebraic closure can be taken to be `C` itself. The item makes
no claim that irreducibility over `C` alone proves integrality after every
arbitrary field extension.

**Smoothness at all points.** For `K=R` and `K=C`, each of the three standard
affine charts is `A_K = K[u,v]/(1+u^2+v^2)`. In this ring the Jacobian row is
`(2u,2v)` and
`1 = (-u/2)(2u) + (-v/2)(2v)`. A prime cannot contain both entries, so after a
principal localization around each prime one Jacobian entry is a unit. The
one-equation presentation is standard smooth there by
`def-ag-standard-smooth-algebra`; `def-smooth-morphism-classical` imposes this
condition at every source point. The properness route also gives the
finite-type hypothesis required by that smooth-morphism definition. This
replaces the old closed-point-only
Jacobian-criterion inference and does not use a perfect-field criterion.

**Properness.** For either field `K`, the structure map factors as
`C_K -> P^2_K -> Spec(K)`. The projective-space properness theorem supplies
properness of the second map, `lem-closed-immersion-proper` supplies it for
the first, and `lem-proper-stable-composition` supplies properness of the
composite. Each of these suppliers explicitly assumes AC, as preserved in the
item.

**Chain dimension one over both fields.** The same three standard charts over
either `K=R` or `K=C` have ring `A_K = K[u,v]/(1+u^2+v^2)`. The irreducible
homogeneous polynomial `F` generates a prime ideal in `K[x,y,z]`, so each
chart ring is a nonzero domain. The map `K[u] -> A_K` is injective: a nonzero
`q(u)` cannot equal `(1+u^2+v^2)h` in `K[u][v]`, since for nonzero `h` the
right side has positive `v`-degree by the polynomial-product degree theorem.
Thus `u` is transcendental over `K`, while `v` is algebraic over `K(u)` by
`v^2+u^2+1=0`; the transcendence-degree tower formula gives
`trdeg_K Frac(A_K)=1`. The affine-domain dimension theorem gives Krull
dimension one for each chart.

Each chart is Noetherian. On a chart, nonempty irreducible closed subsets
correspond to prime ideals by unique generic points, with strict inclusion
chains reversed; hence its chain dimension equals its Krull dimension, one.
The three charts form a finite cover. Restricting a descending chain of closed
subsets to each chart gives three stabilization indices; their maximum proves
that `C_K` is Noetherian. The open-cover dimension lemma then gives chain
dimension one for `C_K`. This argument is carried out for both `R` and `C`;
there is no remaining classical-variety/scheme dimension bridge and no use of a
classical projective-hypersurface dimension-drop lemma.

The item’s direct dependencies now include the standard-smooth, properness,
chart, dimension, finite-type-polynomial, and geometric-fibre interfaces used
above. The obsolete classical hypersurface-dimension and Jacobian-criterion
dependencies were removed. The direct geometric-integrality definition was
added. The Axiom of Choice remains declared: its exact uses here are the
smoothness convention, properness suppliers, the Noetherian-spectrum and
irreducible-closed-subset correspondences, and the genus-zero theorem route.
The displayed coefficient, residue-degree, and chart-dimension calculations
require no additional choice principle.

## Direct supplier audit and remaining uncertainty

The corrected factorization and residue-field routes use the current published
finite-variable UFD, finite residue extension, perfectness/separability,
primitive-element, minimal-polynomial degree, real-polynomial-degree, and
field-valued-points interfaces. The new local routes use the current on-disk
standard-smooth and smooth-morphism definitions; projective-space properness,
closed-immersion properness, and proper composition; the relative-projective
standard charts; polynomial degree of a product; transcendence-degree tower
additivity; affine-domain dimension; Noetherian polynomial algebras and
spectra; the prime/generic-point correspondence; and the chain-dimension
open-cover lemma. I inspected the actual on-disk statements and relevant proof
bodies for these interfaces. I did not retrieve a new external full text during
this repair; the item’s Fulton, Vakil, and Stacks entries remain bibliography,
not evidence of a new retrieval.

Two supplier groups remain explicitly unresolved:

- `thm-plane-curve-arithmetic-genus` is a batch-6 draft. It assumes the
  hypersurface is already a curve; the dimension obligation in this consumer
  is now supplied, but that does not certify the theorem’s own proof.
- `thm-genus-zero-point-implies-projective-line` is a draft escalated on its
  batch-5/6 principal-divisor-degree-zero and finite-flat curve-fibre-degree
  suppliers. Item 5 still depends on its conclusion for
  `C_C ~= P^1_C`.

On the stable item, the targeted proof-format check
`node tools/tsx-run.mjs tools/precheck.mts items/cex-genus-zero-without-rational-point-not-p1.md`
passed, and the targeted render check
`node tools/rendercheck.mjs items/cex-genus-zero-without-rational-point-not-p1.md`
passed (YAML and all math spans parsed). These are local format/render checks,
not a mathematical certification or workflow gate. No gate, receipt,
certificate, manifest, or contract check was run. The final item SHA-256 is
`91678499bbbabda0a0624e2566ad3500333705a138ce8f33686926a57efbce2f`.

## Root integration

Root read the final conic proof and repair report, synchronized only its B7 dependency/strategy row and affected boundary explanations; the signed degree argument and all-prime, both-field scheme chart proof are retained. The classical dimension bridge was replaced completely. Exact draft genus and rational-point supplier obligations remain open. Helper target format/render evidence reused, no item acceptance or gate claimed.
