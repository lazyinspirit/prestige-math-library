# Batch 23: conditional first-saddle cancellation review

Reviewed current `lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation` in the batch-23 pages JSON. Research-only review; no canonical edits, receipts or controller changes.

## Verdict

**Not approved as a completed local proof.** The conditional claim plausibly admits a classical relative cancellation proof, and the explicit scalar family is valid on a sufficiently large model rectangle. However, the present strategy does not establish that this rectangle fits the prescribed first-saddle block, does not yet prove the cap seam and product collar matching, and cites approximation/flow suppliers outside their stated regularity. None of these findings justifies narrowing Novikov's theorem. They require a repaired local carrier.

The restriction that no homotopy from the original interior map is asserted is correct and useful: replacing an arbitrary spanning disk by another disk with exactly the same outer boundary is sufficient for the compressible-leaf application. A leafwise cap may change its relative homotopy class; the lemma does not conceal this.

## 1. Metric and descending-branch hypotheses are not presently defined

A characteristic separatrix lies in a level set of a transverse first integral. It cannot descend from a saddle value to a center value. The stated “descending saddle branch” must therefore mean an unstable trajectory of a chosen **negative gradient** (or another explicitly supplied gradient-like vector field), not a separatrix of the characteristic foliation. The statement supplies neither that metric/vector field nor a global first integral at the point where the branch hypothesis is imposed.

Fix the Euclidean metric on the disk, or supply a specific metric, and state the relevant negative-gradient trajectories after constructing a global first integral. Specify that the center is a minimum and `c_p<c_q` for that scalar. The strategy's cubic model has a minimum at `x=1` and a saddle at `x=−1`; it does not cover an unspecified maximum-center branch without reversing the scalar and the corresponding coorientation convention.

The normalized gradient `∇u/|∇u|²` is only defined on the regular region. It increases `u` at unit speed; it is not the negative-gradient trajectory used for a descending branch. Its use for an exiting product interval is legitimate only after orientation, endpoints and a regular compact segment are fixed. No gradient flow can be passed through the saddle or center by that formula.

## 2. Cap seam: equality of boundary values is insufficient

A fixed filling of the smoothed leaf loop plus a leafwise rounding collar provides a continuous capped map. To obtain a `C²` map `B:W→L`, the argument must match jets across the seam and at the domain's saddle corner. Flattening radial parameters on two independently defined collars does not by itself prove they agree on a **full collar**; it removes normal derivatives only if the two collar maps already have the same tangential boundary data and compatible corner parametrizations.

A safe construction would first prescribe a common leaf-valued collar in the parameter domain, using the old plaque projection along regular arcs and the old chart projection near the saddle. Modify the filling's outer collar to agree exactly with that common collar, then glue beyond the shared region. Explain the corner rounding map and its compatibility with the two-dimensional old chart projection. This is finite local work, but it is not supplied by the current statement's existence of an arbitrary `C²` filling of the rounded loop.

There is also a topology point: the claimed annulus between `Γ` and `∂W` must actually be an annulus with specified collar parametrizations. A planar separation theorem alone would not prove this; here it should follow from the **supplied embedded disk lobe** and an explicit regular-neighborhood construction near its one saddle and exit.

## 3. Product transport and exact original-collar matching

The finite-face holonomy argument is reasonable once a finite triangulated parameter disk subordinate to the pulled-back plaque charts is supplied. Null leafwise filling makes all finite disk relations holonomy-trivial. It can construct a parameter-domain product even when the cap image is nonembedded. It must guarantee that `∂_tP` is transverse, not only that each `P(·,t)` is leaf-valued; then `P(·,u)` has characteristic covector equal to a nonzero scalar multiple of `du`.

Exact equality `f(x)=P(x,u_0(x))` on the outer collar is an additional compatibility construction. An arbitrary transverse transport from `B(x)` need not pass through `f(x)`: changing transverse position does not correct mismatched plaque coordinates. Fix one transverse reference foliation/flow and define the collar projection and its transport together from the original map, or explicitly extend that already prescribed product collar across the cap. Shrinking a transverse interval alone does not yield the stated equality.

Finally, the uniform product interval must contain the **entire range** of every scalar used in the cancellation homotopy. The finite holonomy construction only guarantees a small interval. The proof must construct/reparameterize the cap scalar with this range constraint while leaving its actual outer collar unchanged. This is not automatic from an old basin first integral, whose center and saddle coordinate values may span a much larger interval.

## 4. The compact cubic cutoff does not yet fit the given block

On the unrestricted model plane, the calculation is correct. With `m_1=x³/3−x+y²`, its core critical points for `m_1+2s x` are `(±sqrt(1−2s),0)` for `s<1/2`, the birth–death point for `s=1/2`, and none later. On an x-transition,

`∂_x(m_1+2s xαβ) ≥ x²−1−2|x||α'| >0`,

and on a y-transition,

`|∂_y(m_1+2s xαβ)| ≥ 2|y|−2b|β'| >0`.

Those inequalities need cutoffs valued in `[0,1]`, as standard cutoff terminology should explicitly specify. They do exclude all transition zeros when the rectangle exists.

But the derivative bounds impose a nontrivial size. Since `α` decreases from one at `a>1` to zero at `b`, its total variation is at least one. Therefore

`1 ≤ ∫_a^b |α'| dx < (b²−a²)/4−(1/2)log(b/a)`.

If `b≤5/2`, the upper bound is smaller than its maximum with `a=1`, namely `21/16−(1/2)log(5/2)≈0.85435<1`. Thus **b>5/2 is necessary**. The required model rectangle contains `(5/2,0)`, where `m_1=65/24`, exceeding the saddle value `2/3` by `49/24`. Therefore its old scalar range must extend at least `49A/24=49(c_q−c_p)/32` above the saddle value. This is a quantitative requirement absent from the hypotheses. The y cutoff similarly requires `e−d>b/d` by the mean value theorem.

The exact chart condition `M∘h=bar u` with `A=3(c_q−c_p)/4` fixes scalar value scales. The current hypotheses give a regular exit segment and a small neighborhood of the first saddle, but do **not** give the wide range of old scalar values needed by that rectangular support. A block may have only a very thin regular collar above the saddle level. Thus one cannot choose those cutoffs first and assert they fit a level-preserving model chart.

A possible repair is to first compress the center–saddle critical-value gap relative to the fixed outer collar, using a strictly increasing scalar reparameterization on the center side and an explicit regular interpolation to the unchanged collar. This would make `A` small compared with the available regular entry/exit ranges. Then prove a rectangular model neighborhood of the required quantitative size exists. Alternatively use a classical cancellation construction with a shaped support adapted to the block. The current small `C²` approximation step does not perform this potentially large critical-value adjustment, so it does not close the gap.

## 5. `C²` adapter: valid estimate, wrong approximation supplier

The regular-annulus estimate is correct. If `du_0(X)=1`, `dbar u(X)≥1/2`, and `|bar u−u_0| |Xρ|<1/4`, then

`d[(1−ρ)u_0+ρbar u](X) ≥ (1−ρ)+ρ/2−1/4 ≥1/4`.

The same bound applies along the straight interpolation when its approximation error is sufficiently small. Uniform Hessian control on fixed critical disks and a positive gradient lower bound on their compact complement can preserve exactly one center and saddle throughout; existence of each continued critical point needs the usual uniform implicit-function/degree argument, not only the assertion that nondegeneracy is open.

However, published `thm-relative-whitney-approximation-for-manifold-valued-maps` assumes ACω and gives a smooth **C⁰** approximation/homotopy, with equality near a closed subset already smooth there. It does not supply a `C²`-small approximation of a `C²` scalar or equality near an arbitrary merely `C²` collar. The required supplier is a local finite scalar mollification lemma: extend/cut off on a larger planar neighborhood, convolve with a fixed smooth compactly supported mollifier, and prove uniform convergence of all derivatives through order two on the compact core. The existing annular cutoff can preserve the old collar afterward. This construction uses finite data and can be proved locally.

The published manifold integral-curve theorem only states the **smooth** case. For a `C²` scalar, normalized gradient is `C¹`; its ordinary flow is generally only `C¹`, so it cannot automatically produce a `C²` domain chart `h`. A better regular-band construction is a smooth vector field `V` with `du_0(V)>0`, formed from finitely many constant chart directions and a smooth partition. Its smooth flow `Φ` is available, and the equation `u_0(Φ(t,x))=r` is `C²` with nonzero t-derivative. A finite-regularity implicit-function argument gives a `C²` level-time parameter and hence a `C²` product chart. This avoids claiming extra smooth dependence for a `C¹` normalized gradient.

The initial “exact saddle Morse chart” likewise needs a finite-regularity adapter. The published Morse lemma is smooth only. Use a topological `C²` planar normal form for the early block topology, then the genuine smooth Morse charts after the scalar core has been mollified. Do not claim that the early `C²` chart has the smooth supplier's regularity.

## 6. Choice-path audit

Traversing all current F41 manifests plus published item frontmatter gives 899 reachable IDs, none missing. The raw Euclidean IFT does not assume full AC; its Banach contraction uses a uniquely defined iterate sequence. Its graph reaches `def-axiom-of-choice` through the broad metric-continuity characterization, which references choice costs of other clauses. This is not an operational import of full AC into the local inverse proof. The raw relative Whitney theorem explicitly assumes ACω, not full AC, and remains inapplicable here for the regularity reasons above.

The graph still reaches a genuine DC-assuming broad theorem through

`cancellation → generic-characteristic-map supplier → finite-cube grid control → multidimensional-grid definition → p-norm dictionary → metric-compactness-equivalences`.

As in the earlier winding audit, the Euclidean norm/metric dictionary does not operationally need the DC compactness-equivalence clause. The structural path must be recorded rather than called nonexistent. Tangent/cotangent/global-differential suppliers reached through the foliation/distribution definitions currently state ACω, not full AC. Thus no verified **used** full-AC premise was found, but strict whole-graph ACω certification still needs clause-specific dependency cleanup/adapters for the nominal DC route.

## Closure order

Define the metric/gradient branch condition; construct the common cap seam and exact prescribed product collar; constrain the scalar range inside the transverse product interval; prove the `C²` scalar mollification and regular-band product adapters; quantify/repair cubic model fit (possibly by critical-gap compression); then use the already correct cutoff derivative calculation. The final homotopy is legitimately from the cap-normalized representative, not from the original interior map. Until these steps are present, “locally-proved” provenance should not be read as a completed proof certificate.
