# Batch 23: relative generic characteristic maps

This is an independent local proof sketch for a supporting lemma. Write scope is this memo only; no batch pages, receipts or controller state were changed. Ambient immersions are not used.

## Precise formulation

Let `M` carry a cooriented codimension-one `C²` foliation `F`, and let `h:D²→M` be a `C²` map. Fix a closed boundary collar `C` contained in a slightly larger collar `C+`. Assume the characteristic covector of `h` is nonzero throughout `C+`. Assume also one of:

- **Tangential boundary:** `h(∂D²)` lies in one leaf and, in every foliation chart, `d(z∘h)` is nonzero on the boundary and annihilates its tangent. Thus the characteristic line is tangent to the boundary.
- **Transverse boundary:** `d(z∘h)` is nonzero on the boundary tangent. Thus the characteristic line is transverse to the boundary.

Here `z` is a local transverse coordinate. For every `C²` neighborhood of `h`, there is a `C²` map `g` in that neighborhood, equal to `h` on an open neighborhood of `C`, such that the critical points of the local transverse functions `z∘g` are all interior, finite in number, and nondegenerate. Its characteristic foliation has only centers and saddles. Each center has vector-field index `+1`; each saddle has index `−1`. In either boundary case their sum is `1`, so there is at least one center. A homotopy from `h` to `g` is obtained by scaling the finite perturbation parameters, fixed near `C`.

A degenerate prescribed collar cannot be corrected while kept fixed. Regularity of the collar is essential to the stated relative assertion. If `h` and the foliation atlas are smooth, `g` and the homotopy are smooth. A `C²` atlas only guarantees the `C²` conclusion stated above.

## Local invariance: this really defines one characteristic foliation

On a sufficiently small connected overlap of foliation charts, the transverse coordinates satisfy `z'=φ(z)` with `φ'≠0`; coorientation permits `φ'>0`. For `u=z∘g`,

`d(φ∘u)=φ'(u)du`.

Hence the critical set and the kernel line away from it are independent of the chart. At a critical point,

`Hess(φ∘u)=φ'(u) Hess(u)`,

because the additional term `φ''(u)du⊗du` vanishes. Nondegeneracy is invariant. For a coorientation-preserving transition, inertia is unchanged. Even if the transverse orientation is reversed, a center remains a center and a saddle remains a saddle; only minimum versus maximum interchanges. Changing domain coordinates transforms a critical Hessian by congruence, so the same conclusions hold there.

No global real-valued transverse function on the disk or on `M` is being assumed. In particular a transverse closed boundary is compatible with this local formulation.

## Finite-cover proof with actual map gluing

1. **Choose fixed compact cores.** All possible singular points of `h` lie outside the regular collar `C+`, hence in a compact interior set. Choose finitely many domain coordinate neighborhoods `V_i`, with compact cores `K_i⊂V_i`, whose interiors cover the disk outside a smaller regular collar. Require `h(closure V_i)` to lie inside a single target foliation chart `Q_i`, with positive margin from its edge. Shrink supports into the interior of `D²` and away from `C`. Compactness gives a finite subcover; finite shrinking gives cores. Reserve a sufficiently small `C²` neighborhood of `h` so every perturbed map still takes `closure V_i` into the fixed `Q_i`, and the untouched collar remains regular. A finite number of such strict inequalities can be maintained simultaneously.

2. **The local perturbation is a map, not merely a covector.** In coordinates `χ_i:Q_i→R²×R`, write the current map on `V_i` as `(Y_i(x),u_i(x))`. Choose a smooth bump `ρ_i` supported compactly in `V_i` and equal to `1` on a neighborhood of `K_i`. For a two-component parameter `a=(a_1,a_2)`, set

`g_a(x)=χ_i^{-1}(Y_i(x), u_i(x)+ρ_i(x)(a_1 x_1+a_2 x_2))` on `V_i`,

and retain the current map outside `V_i`. On an open neighborhood of the boundary of `V_i`, the bump is identically zero, so these definitions agree there with all derivatives through order two. Thus the maps glue globally. Small `a` keeps the image in `Q_i` and makes the change arbitrarily `C²`-small, since composition and inverse-chart derivatives are bounded on the relevant compact sets. This construction does not demand an embedded image, injectivity or full rank of the original map.

3. **One scalar Sard application suffices for each core.** On a neighborhood `W_i` of `K_i` where `ρ_i=1`, the new transverse function is `u_i+a·x`. Its critical points satisfy `∇u_i(x)=-a`, and its Hessian is `Hess u_i(x)`. The gradient map is `C¹:W_i⊂R²→R²`. By Euclidean Morse–Sard in equal dimensions at regularity one, its critical values form a null set. Therefore arbitrarily small `-a` are regular values. At each corresponding critical point `Hess u_i` is invertible. All critical points of the perturbed map on `K_i` are consequently nondegenerate. This avoids a high-dimensional parameter Sard application and respects `C²` regularity.

4. **Preserve the earlier cores.** Nondegeneracy of all zeros on a compact core is open in the `C²` topology. To see this directly, take small neighborhoods of its nondegenerate zeros on which the Hessian determinant remains bounded away from zero. On the remaining compact part the gradient norm has a positive minimum. A sufficiently small perturbation keeps those two properties. There are only finitely many zeros: otherwise a subsequence in the compact core would converge to a zero, contradicting its isolation; zeros on the edge are treated in their open nondegenerate neighborhoods. The same argument works using finitely many target transverse charts. At step `i`, choose the regular parameter in step 3 within the small ball preserving every previous core, every fixed target chart and the regular collar. There are finitely many earlier conditions.

5. **Finish after finitely many steps.** At the final step, every interior point outside the regular collar belongs to a core on which all zeros are nondegenerate. The collar has no zeros. Thus every zero is isolated. The global zero set is closed in the compact disk and disjoint from the regular collar; compactness plus isolation makes it finite. The finite sum of changes can be kept inside the originally specified `C²` neighborhood by allocating a finite error budget. Scale each local parameter from zero to its chosen value and concatenate these finite homotopies; map gluing and the fixed-collar property hold throughout. Intermediate maps need not be Morse.

This closes the finite-chart/gluing step: overlaps are not patched by adding incompatible local transverse functions. Instead each perturbation changes an actual manifold-valued map and is zero near its support boundary. Chart invariance then transfers the resulting Morse property to every overlap.

## Why the singularities are centers or saddles at `C²` regularity

At a critical point choose domain coordinates centered there. The Hessian is a nonsingular symmetric `2×2` matrix. If definite, Taylor's theorem gives a strict local extremum and a uniformly nonzero radial derivative off the origin after shrinking. Every sufficiently small neighboring level is a star-shaped circle: along each ray the value is strictly monotone and reaches the chosen small level exactly once. Continuous dependence of the unique radius produces the circle family. This is a center.

For an indefinite Hessian, linearly diagonalize it so `u_xx(0)>0` and the residual `y` direction is negative. Apply the `C¹` implicit-function theorem to `u_x=0`, giving a `C¹` curve `x=η(y)`. Put `b(y)=u(η(y),y)`. Its derivative is `b'(y)=u_y(η(y),y)`, since `u_x=0` on that curve; consequently `b` is `C²` and `b''(0)<0`. Taylor integration gives

`u(x,y)-u(0,0)=(x-η(y))² A(x,y)-y² B(y)`,

with positive continuous `A,B` on a small neighborhood. Define `X=sign(x-η(y)) sqrt(u(x,y)-b(y))` and `Y=sign(y) sqrt(u(0,0)-b(y))`. Strict convexity in `x` and strict monotonicity of `b` on either side of zero make these coordinate changes strictly monotone in their respective variables; continuity and the local inverse construction make `(x,y)→(X,Y)` a local homeomorphism. Then `u-u(0)=X²-Y²`. Thus the level foliation has the usual four-sector saddle configuration. No unproved smooth Morse normal form for a merely `C²` function is required. In the smooth case the published smooth Morse lemma is also available.

## Indices and the two boundary conditions

On a cooriented foliated manifold choose a nonvanishing defining covector `α` for the foliation on a neighborhood of the compact image; alternatively use a finite positive partition of the local defining covectors. On the oriented Euclidean disk set `X=J(h*α)^sharp`, where `J` rotates vectors through `π/2`; use `g` after perturbation. Locally `X=λ J∇u` with `λ>0`. Its zeros are the characteristic singularities. At a critical point the linearization is `λ J Hess(u)`, whose determinant has the sign of `det Hess(u)`. The local index is that determinant sign: on a sufficiently small circle the actual vector field is homotopic through nonzero fields to its invertible linearization, and a nonsingular linear map has circle degree `sign det`. Centers have index `+1`, saddles `−1`.

For the disk sum formula, delete small disjoint disks about the finitely many zeros. The normalized field maps the resulting punctured disk to `S¹`. In first homology, its outer circle equals the sum of the positively oriented small circles; applying the induced map to `H_1(S¹)=Z` says outer winding equals the sum of local indices. This is the elementary planar index argument, not an appeal to an unavailable general Poincaré–Hopf theorem.

In the tangential boundary case, `X` is a nonzero multiple of the oriented boundary tangent; the sign of that multiple is constant along the connected boundary. Its winding is one in either sign. In the transverse boundary case, the radial component of `X` is nonzero and has constant sign. The straight-line homotopy to the outward radial field, or to its negative, stays nonzero because the radial component has that fixed sign. Again the winding is one. Hence `centers−saddles=1` in both cases. These conclusions do not apply to mixed tangential/transverse boundary with corners; that case needs its own boundary index formula.

## Local library suppliers and limits

The canonical library already proves `thm-morse-sard-for-euclidean-maps` at exactly `r>max(m−n,0)`, including `m=n=2,r=1`, and `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`. Its `lem-manifold-bump-for-a-compact-set-inside-an-open-set` constructs compactly supported bumps. The coordinate derivative rules, Euclidean inverse-function theorem, linear inertia theorem and basic winding/homology facts supply the elementary steps above. The published `thm-morse-lemma` states the smooth case, so it must not silently supply the `C²` topological classification; the direct planar argument above fills that distinction.

The proof uses a finite number of existential parameter choices. It requires no global Baire argument, no countable sequence of corrections, no full AC, and no immersion h-principle. It therefore fits within the existing countable-choice strength. Supplier item statements and their dependency closure still need the repair owner's normal inventory validation before adoption as formal carriers.

This lemma **does not separate different tangencies into different ambient leaves**, and it does not prove saddle-connection elimination. Those are additional global conditions: for a nonproper/dense foliation, distinct transverse-coordinate values can lie in the same leaf. Any graph-classification argument needing that stronger condition must prove its own countable plaque-chain avoidance lemma and verify its choice requirements. Ordinary Morse characteristic genericity cannot be presented as if it supplied this automatically.

No finite-chart or map-gluing uncertainty remains in this proof sketch under the explicit regular-collar hypotheses. The unresolved adoption work is to package the finite-cover/openness and planar classification/index arguments as local carriers and to audit exact supplier IDs; the stronger distinct-leaf requirement remains separate.
