# Batch 23: finite-cell carrier for the tangent Euler number

Run: `frontier-41-ha-dt-29`. This is a separate proof carrier for the §8
Euler-characteristic step. It is a research memo only; no item, page,
manifest, coverage record, receipt, or controller state was changed.

## Claim and scope

Assume `AC_ω`. Let `S` be a compact, connected, closed, oriented `C²` surface
embedded as a leaf in a smooth ambient manifold. Orient `TS` by the given
surface orientation. Then

$$\langle e(TS),[S]\rangle=\chi(S).$$

Here `χ(S)` can be read either as the homological Euler characteristic
`Σ_i (-1)^i rank H_i(S;Z)` or as `V−E+F` from any finite surface
triangulation. The argument below constructs a finite CW structure at `AC_ω`
strength, proves the finite-cell Euler obstruction formula, and identifies
the two definitions through Euler–Poincaré. It does not invoke
Gauss–Bonnet, Chern–Weil, the general full-AC Thom existence theorem, or the
full-AC compact-surface triangulation/classification items.

This is the input needed after a §8 proof has actually produced a compact
region `W` with sole boundary leaf `S`: the separate boundary-class argument
then gives `i_*[S]=0`, and naturality gives zero tangent Euler number. The
present carrier supplies the missing implication from that Euler number to
`χ(S)=0`.

## Exact dependencies and choice accounting

| Dependency | Use | Choice status |
|---|---|---|
| `def-countable-choice`; `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space` | Embed the smooth ambient manifold, then compose with the `C²` leaf inclusion. | The embedding theorem assumes exactly `AC_ω`. |
| `thm-morse-sard-for-euclidean-maps` | Generic-height parameter projection for a `C¹` equal-dimensional map. | The library theorem is choice-free at this interface; here it is applied with differentiability order `r=1` and source/target dimensions both `N−1`. |
| Euclidean inverse function theorem and ordinary `C¹` ODE existence/uniqueness | The regular-value chart and product flow on compact regular bands. | Finite-chart/local arguments; no uncountable selections. |
| `thm-euler-poincare-formula-for-finite-cw-complexes`; `thm-cellular-homology-computes-singular-homology`; `cor-homotopic-maps-induce-the-same-map-on-singular-homology` | Compute `χ` from the finite handle CW structure. | Finite algebraic argument; no choice premise. |
| `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`; `thm-excision-for-singular-cohomology`; `thm-naturality-of-the-singular-cohomology-pair-sequence`; `lem-compatible-local-orientation-classes-exist-over-compact-subsets`; `def-fundamental-class-of-a-compact-oriented-manifold`; `def-kronecker-evaluation-pairing`; `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives` | Identify the finite-cell obstruction cocycle and evaluate its local degrees. | Use the finite skeletal/excision construction below, not the published general Thom existence theorem. |
| `prop-degree-is-homotopy-invariant-and-multiplicative-under-composition`; `prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism` | At a nondegenerate zero, homotope the normalized section on a small circle to its invertible derivative; its degree is the sign of the determinant. | Local finite-dimensional degree argument. |
| Finite-cell Thom/Euler adapter proved below | Match the cellular obstruction class with the zero-section Thom Euler class and prove the zero-count formula. | Built by finite cellular induction; no full-AC general Thom theorem is invoked. |

The standard library definition `def-euler-class-by-zero-section-pullback-of-
the-thom-class` inherits full AC from its general-bundle Thom supplier. This
memo does **not** cite that generic existence result as a premise. Instead it
constructs the normalized Thom class for this finite two-dimensional base
cell by cell. If the general Thom class is already available in a larger
foundational context, uniqueness of its fiber normalization identifies it
with this restricted class.

## Regularity adapter for a `C²` leaf

No `C∞` structure on `S` is needed. The `C²` embedded inclusion
`i:S→M` has `C¹` derivative, so `TS` is a continuous (indeed `C¹`) oriented
rank-two vector bundle. Its finite-cell Euler obstruction is therefore
defined in the topological category.

For the finite-cell construction, use the ambient smooth embedding supplied
under `AC_ω` for `M` and put `j=J∘i:S→R^N`. This is a `C²` embedding. The
restricted heights `f_u(x)=u·j(x)` form a `C²` family. The critical-section
map `(x,u)↦df_u(x)` is `C¹`, which is sufficient: its zero set and the
parameter projection are `C¹`, and Sard applies because the projection has
equal source and target dimensions. A regular height is a `C²` Morse
function. The induced Euclidean metric on `TS` is `C¹`; its gradient is a
`C¹` section, whose local index is defined by the degree on a small circle.

The only Morse-theory adapter needed is topological: the `C²` Morse lemma
provides a `C¹` local coordinate normal form, and the `C¹` gradient flow
provides collars on compact regular bands. The local sublevel change is
therefore a topological `λ`-handle attachment. Smooth corner rounding and a
smooth vector field are unnecessary.

## Proof carrier

### 1. Produce a finite `C²` Morse handle decomposition under `AC_ω`

Apply the existing `AC_ω` Euclidean embedding theorem to the smooth ambient
manifold `M`; compose with `i` to obtain `j:S→R^N`. For
`u∈S^{N−1}`, define
`D:S×S^{N−1}→T^*S` by `D(x,u)=d(u·j)_x`. Since `j` is `C²`, `D` is `C¹`.
At a zero `(x,u)`, the tangent plane `dj_x(T_xS)` lies in `u^⊥`. The parameter
derivative is

$$\dot u\longmapsto (v\longmapsto \dot u\cdot dj_x(v)),\qquad
\dot u\in T_uS^{N-1}=u^\perp,$$

and is onto `T_x^*S`: the Euclidean inner product identifies the two-plane
`dj_x(T_xS)⊂u^⊥` with its dual. Thus `D` is transverse to the zero section.
Its zero set has dimension `N−1`; projection to `S^{N−1}` is a `C¹` map
between manifolds of equal dimension. Sard says its critical values are
null. A regular value `u` makes the Hessian of `f_u` nonsingular at every
critical point, so `f_u` is Morse. This uses one choice of a direction from
the nonempty complement of a null set.

The critical points are isolated. Compactness gives finitely many: cover the
critical set by isolating neighborhoods and the regular set by neighborhoods
with no critical point, then take a finite subcover. If critical values
coincide, choose disjoint `C²` bump functions equal to one near the finitely
many critical points. Add sufficiently small constants times these bumps so
the values become distinct. On each critical core the Hessian and critical
point stay fixed; on the compact complement, `df` has a positive lower bound,
so a sufficiently small `C¹` perturbation creates no new critical point.
This is finite perturbation data and uses no full choice.

Choose regular levels between the resulting distinct critical values. On a
compact band without critical points, the `C¹` vector field
`Y=∇f/|∇f|²` satisfies `df(Y)=1`; its flow identifies the levels and supplies
product collars. At a critical point of Morse index `λ`, the `C²` Morse
normal form is

$$f=c-|x|²+|y|²,\qquad x∈R^λ,\quad y∈R^{2-λ}.$$

The local sublevel pair is a `λ`-handle
`D^λ×D^{2−λ}` attached along `S^{λ−1}×D^{2−λ}`. For a `C²` function this
is a topological handle statement: the Morse coordinate change is `C¹`,
and the regular-band flow is `C¹`. In dimension two, each handle is a disk,
strip, or disk cap. A 0-handle is triangulated as a disk; a 1-handle is a
rectangle attached along two boundary intervals; a 2-handle is a disk cap
attached along a boundary circle. Each intermediate compact surface has
finitely many boundary circles, and the already finite boundary cellulation
can be subdivided at the finitely many attaching endpoints. Triangulate each
rectangle and disk with those prescribed boundary subdivisions. This gives
an actual finite CW structure on `S`, without using global surface
triangulation. For the relative homology change, a
`λ`-handle pair deformation retracts to `(D^λ,S^{λ−1})`, so it contributes
one relative generator in degree `λ` and changes the homological Euler
characteristic by `(-1)^λ`. If `c_λ` is the number of index-`λ` critical
points, then

$$\chi(S)=\sum_{λ=0}^{2}(-1)^λ c_λ.$$

This is also the value `V−E+F` of any finite surface triangulation: each
triangulation is a finite CW structure on the same space, so its cell count
equals the same alternating homology rank. These handle cells also provide
the finite CW structure used in the next step's Thom construction.

### 2. Finite-cell Euler class and the local-index formula

Let `E→S` be an oriented topological real two-plane bundle over the finite CW
structure on `S` from Step 1. Over each closed cell the bundle is trivial.
The relative cellular pair of its disk and sphere bundles has one cell of
dimension `k+2` over each base `k`-cell: it is the product pair

$$\bigl(D^k×D^2,\ (\partial D^k×D^2)\cup(D^k×S^1)\bigr).$$

A fiber metric is obtained by patching the finitely many local metrics with a
finite partition of unity, so the disk/sphere pair requires no full-AC
metric-existence theorem.

Its relative cellular cochain complex is the cellular complex of the base
shifted by two, with the orientation local system of `E`. This is obtained
directly from the singular pair LES and excision on successive finite
skeleta: over a `k`-cell the relative group is the single generator of the
displayed product pair in degree `k+2`; the boundary coefficient is the
base-cell incidence number times the degree of the fiber transition. Since
`E` is oriented, that fiber degree is `+1`. The constant 0-cocycle `1` on
the connected base therefore lifts through the finite skeletal sequence to
the unique fiber-normalized class `U∈H²(D(E),S(E);Z)`. This is the finite-base
Thom class. Its zero-section pullback `e(E)=z^*j(U)` is the finite-cell Euler
class and agrees with the standard Thom definition whenever that definition
is formed.

Suppose a continuous section `s` has a finite set `Z` of isolated zeros.
The fiberwise radial deformation of `D(E)\setminus 0_S` onto `S(E)`
identifies the normalized class with a relative class
`U_0∈H²(D(E),D(E)\setminus 0_S;Z)`. Since `S` is compact, multiply `s`
by a sufficiently small positive constant so its image lies in the open disk
bundle. This gives a map of pairs
`(S,S\Z)→(D(E),D(E)\setminus 0_S)`. The fiberwise homotopy from the
zero section to this scaled section shows that the absolute image of its
pullback of `U_0` is `e(E)`. Excision identifies the relative pullback over
disjoint small disks around `Z` with a direct sum of local groups
`H²(D²,D²\{0};Z)`. In an orientation-preserving trivialization near `p`,
the local coefficient is the degree of `s/|s|:∂D_p→S¹`. The relative
fundamental class restricts to the sum of these local orientation generators.
Pairing therefore gives

$$\langle e(E),[S]\rangle=\sum_{p∈Z}\deg\!\left(s/|s|\bigm|_{\partial D_p}\right).
$$

Every operation here uses finitely many cells and finitely many excisions;
there is no arbitrary-index section or global analytic theorem.

### 3. Apply the index formula to the gradient

Take `E=TS` and `s=∇f` for the `C¹` induced metric. Its zeros are exactly
the Morse critical points. At a critical point of index `λ`,
`D(∇f)=g^{-1} Hess(f)`. The positive-definite factor `g^{-1}` has positive
determinant, while the Hessian has `λ` negative and `2−λ` positive
eigenvalues. Hence the determinant sign is `(-1)^λ`. For a nondegenerate
zero, the local degree of the normalized section equals this determinant
sign, so the local index is `(-1)^λ`. Summing and using the handle count in
Step 1 gives

$$\langle e(TS),[S]\rangle
=\sum_{p\in\operatorname{Crit}(f)}(-1)^{\operatorname{index}(p)}
=\sum_{λ=0}^{2}(-1)^λc_λ
=\chi(S).$$

This proves the carrier with the required `AC_ω` bound.

Suggested same-pair supplier order is: the restricted `C²` generic-height
lemma; the `C²` finite-handle/CW lemma; the finite-cell Thom and local-index
lemma; then this tangent-Euler corollary. The first two depend on `AC_ω`
through the ambient embedding theorem; the finite-cell Thom and index proof
uses only finite data.

## Integration notes

This does not close the larger §8 proof: a sole-boundary compact region `W`
must first be constructed, and the boundary class must first be shown to
vanish in `H₂(W)`. For the entire §8 argument to remain at `AC_ω`, the
boundary restriction calculation over `W` must use the analogous finite-CW
Euler naturality proof; the currently published general naturality theorem
inherits full AC. With that finite version in place, the boundary-class and
Euler calculations give `⟨e(TS),[S]⟩=0`; the carrier above then yields
`χ(S)=0`.

The finite naturality adapter is short once a finite CW structure on `W` is
available: the pullback of its normalized Thom class along
`i:S→W` restricts to the positive generator on every fiber over `S`; by
uniqueness in the finite skeletal construction it is the normalized Thom
class of `E|_S`. Applying the zero-section pullback gives
`i^*e(E)=e(E|_S)`. For `E=TF|_W`, the restriction is `TS` because `S` is a
leaf. This uses only the finite Thom construction and does not call the
published full-AC Euler naturality theorem.

The published global Gauss–Bonnet and Chern–Weil items remain valid for their
stated scopes but inherit full AC. They are unnecessary here. Milnor–Stasheff,
*Characteristic Classes*, Chapter 11, Corollary 11.12, printed p. 130 (PDF
page 130 of <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf>,
SHA-256 `e5a712237dd7959acfbac914fb51b8395f656a1edee86b77d72b2cc8595b3868`),
states: “If M is a smooth compact oriented manifold, then the Kronecker index
`⟨e(TM),[M]⟩`, using rational or integer coefficients, is equal to the Euler
characteristic `χ(M)`.” Its proof is not used as a supplier here. The current
library source note elsewhere that locates Corollary 11.12 at printed p. 138
should be corrected during later source-map maintenance.
