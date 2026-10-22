---
id: lem-grouped-simple-knot-morse-births-give-the-allowed-diagram-moves
kind: lemma
title: "Grouped simple knot Morse births give the allowed diagram moves"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-cc-relative-descending-paths-have-finite-same-index-events
  - lem-simple-function-births-admit-geometrically-cancelling-gradient-data
  - lem-finite-weak-knot-morse-movies-admit-relative-middle-level-grouping
  - lem-regular-grouped-knot-morse-data-give-balanced-diagram-isotopies
  - lem-a-cancelling-attaching-circle-pair-can-be-isolated-by-marked-slides
  - lem-empty-cut-ball-births-erase-to-balanced-disk-slides
  - lem-local-morse-sublevel-pair-is-a-handle-pair
  - thm-handle-cancellation
  - lem-supported-neat-proper-isotopies-extend-boundary-preservingly
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Theorem5.4.3 and complete proof, printed146–147 (PDF154–155), actually read; local fold regularization and the marked-diagram comparison are supplied here"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Proposition2.2 discussion/proof and Lemma2.3–2.4 complete proofs, printed6–7, actually read; empty cut-ball elimination is supplied by the local rooted-forest lemma"
---

## Statement

Assume Countable Choice. Supply a grouped finite weak knot Morse movie on $S^3$ with its fixed protected knot tube and split product folds. On a small closed interval containing exactly one fold of indices $(\lambda,\lambda+1)$, suppose there is no same-index event. Use the grouping with old critical points in the ranges near $1/10,3/10,7/10,9/10$ and the fold inflection at $1/5,1/2,4/5$ for $\lambda=0,1,2$, respectively. Its whole sufficiently small fold block is disjoint from the actual knot. Choose regular slices on either side.

If $\lambda=1$, their actual extended attaching systems are related, up to knot-fixed ambient level transport, by finite marked disk slides and isotopies and one knot-disjoint genus stabilization or destabilization. If $\lambda=0$ or $2$, they are related by extended disk isotopies and insertion or removal of one disk refining a cut ball into two, one of them empty. Rooted-forest reduction therefore gives finite balanced marked isotopies and slides for these two extreme fold types. For the middle type it gives finite balanced marked isotopies and slides and one genus stabilization or destabilization. Every move preserves the ordered knot arcs and marks; no basepoint-pair insertion is used for an empty fold. The genus-one pair is isolated by actual slides when old curves meet its opposite-system circle; their absence is not assumed.

## Statement references

[[lem-finite-weak-knot-morse-movies-admit-relative-middle-level-grouping]]

[[lem-cc-relative-descending-paths-have-finite-same-index-events]]

## Facts & Assumptions

**Given:** The isolated grouped product fold, its knot-disjoint block, and the regular endpoint slices.

[F1] The local fold is $f_t=g(u,t)-|y|^2+|z|^2$ with product descending field, nonzero $g_{ut},g_{uuu}$ and, after reflection, $g_{uuu}>0$. On the occupied side the full unstable crossing sphere of the upper point and stable crossing sphere of the lower point are compact inside the block and meet once transversely at every sufficiently close intervening level. ([[lem-simple-function-births-admit-geometrically-cancelling-gradient-data]])

[F2] The relative grouping fixes the field and knot tube, translates the whole fold block by one scalar, puts its inflection at the stated height, and keeps every old critical value in its separated index range. The regular extraction supplies actual extended disks, cut balls and bridge witnesses. ([[lem-finite-weak-knot-morse-movies-admit-relative-middle-level-grouping]], [[lem-regular-grouped-knot-morse-data-give-balanced-diagram-isotopies]])

[F3] The local critical band is its actual framed handle, with invariant coordinate core and cocore. A unique transverse attaching/belt intersection cancels the pair relative to the incoming boundary, supported in its handle bodies and an enclosing boundary disk collar, carrying all later attaching data. ([[lem-local-morse-sublevel-pair-is-a-handle-pair]], [[thm-handle-cancellation]])

[F4] Actual compression disks from opposite systems with boundary intersection exactly one can be isolated by finitely many marked slides, then removed by a knot-disjoint genus destabilization, including in extended systems. ([[lem-a-cancelling-attaching-circle-pair-can-be-isolated-by-marked-slides]])

[F5] Empty cut-ball refinements and actual extended slides induce finite marked slides/isotopies between arbitrary balanced forest reductions. Proper-disk isotopies may be extended with support; finite cut-face corners are rounded in their product collars first. ([[lem-empty-cut-ball-births-erase-to-balanced-disk-slides]], [[lem-supported-neat-proper-isotopies-extend-boundary-preservingly]])

## Proof

**Given:** The family in the Statement.

1.1 Choose regular heights $a<b$ surrounding the whole fold height range and no old critical value, and a smaller fixed spatial fold box. This is possible uniformly: [F2]'s numerical ranges put the old values a positive distance from the fold inflection. All critical points in the slab $f_t^{-1}[a,b]$ are the newborn pair, or none on the unoccupied side. Outside the fold box the parameterized slab has regular collars. At its lower and upper faces identify levels by the field $-\partial_tf_t\operatorname{grad}f_t/|\operatorname{grad}f_t|^2$, with finite supported collars; the faces have no critical points at any parameter. The presentations below $a$ and above $b$ contain only old critical branches. Their local handles, cores and cocores vary smoothly. They can be attached in a fixed order within their index groups, splitting any tied values by small orbit cutoffs; a different order of disjoint same-index handles gives the same disks. None of these finite constructions enters the smaller fold box. Thus the only new presentation data in the slab are precisely its two local framed handles. [F1, F2, F3, given, construct]

1.2 Record an explicit critical-free replacement of the fold to fix its comparison with the unoccupied side. Shift $u$ so $g_{uu}(0,t)=0$. Choose a small fixed interval $[-r,r]$ and a cutoff $\rho(u)$ equal to one near its endpoints and zero near zero. After shrinking the parameter interval, $g_u>0$ on the support of $\rho$, and $$c_t=\frac{g(r,t)-g(-r,t)-\int_{-r}^r\rho(u)g_u(u,t)\,du}{\int_{-r}^r(1-\rho(u))\,du}>0.$$ Positivity holds at the fold because the numerator is $\int(1-\rho)g_u>0$, and persists by continuity. Put $w_t=\rho g_u+(1-\rho)c_t>0$ and $G_t(u)=g(-r,t)+\int_{-r}^u w_t(v)\,dv$. Then $G_t=g_t$ near both interval ends and $G_t'>0$ everywhere. Replace $g_t$ by $G_t$ near the transverse origin, using a transverse cutoff equal to one on a smaller box. This introduces no critical point: in its inner box the $u$ derivative is $w_t>0$; in the transverse cutoff annulus the signed-square gradient has norm bounded below by a constant times its transverse radius, whereas the additional transverse derivative is at most $C r^3$ divided by that radius. Choose the transverse radius comparable to $r$ and then $r$ small, so the latter is strictly smaller. Here $g-G=O(r^3)$ uniformly when the parameter interval has size $O(r^2)$, by the fold Taylor bounds. The replacement agrees with $f_t$ outside this box, is smooth in $t$, and keeps the knot fixed. On the unoccupied side $g_u>0$ throughout, so the convex interpolation between $g$ and $G$, with the same transverse cutoff, is likewise critical-free. Its regular levels give an explicit comparison with the original unoccupied slice. Give the replacement family a descending field equal to the original outside the box, by patching its negative gradient with the original field on the region where the functions agree. It is standard at every old critical point, which is outside the box. No new same-index orbit between old points can enter the altered height band: both endpoints of an index-one orbit have old values near $3/10$, and both endpoints of an index-two orbit have old values near $7/10$, while the altered band is near the fold inflection $1/5,1/2$ or $4/5$. Strict descent prevents leaving that endpoint-height interval and returning. Indices zero and three cannot give such an orbit. All old same-index orbits therefore remain excluded. Index increase is likewise impossible by the separated old index ranges and the empty extreme outgoing or incoming spheres. Thus this critical-free replacement and its unoccupied interpolation satisfy the actual regular-extraction hypotheses, not just absence of critical points in the box. [F1, F2, F3, construct, algebra]

2.1 On an occupied slice [F1] gives its two full crossing spheres entirely inside the box. At the inflection level they have the same formulas as at the mean critical level: the three roots of $g(u,t)=g(0,t)$ are simple, surround the two critical roots, and are $O(\sqrt{|t|})$; the squared transverse radii are bounded by $C|t|^{3/2}$. Their sole intersection is the middle scalar root with transverse coordinates zero. Thus in the middle-index case these are the actual new lower stable circle $a_0$ and upper unstable circle $b_0$ on $\Sigma=f_t^{-1}(1/2)$, each bounding its actual truncated disk inside the box, with $|a_0\cap b_0|=1$. Their normal framings are the product $y,z$ coordinates. The regular replacement of step1.2 is the local cancellation of exactly these framed handles: [F3] normalizes their single crossing, fills their complementary pair by a disk, and absorbs its enclosing disk collar. In the present scalar chart the replacement level is a graph in $u$, because $G_t'>0$. It is consequently the disk filling of that same local handle model. Its boundary collars are the unchanged $g=G$ collars, so this identifies the cancelled presentation with the replacement, with all old attaching data transported, rather than merely identifying the two underlying three-manifolds. [F1, F3, step 1.1, step 1.2, construct, algebra]

2.2 Suppose $\lambda=0$. The middle level lies above the entire fold box and is regular across the event. Every old lower index-one critical value is above its upper face $b$; its stable disk is obtained by backwards transport from that point and cannot enter the lower fold slab. Hence the old lower disks vary smoothly across the fold, as do all upper disks. Cut along those old lower disks. The new zero/one pair lies in one cut component. Its new one-handle has one foot on its new minimum ball; its other foot is on the old component. Indeed the full unstable zero-sphere of the new index-one point meets the full stable two-sphere of the new minimum exactly once by [F1]; one branch descends to the new minimum, and the other cannot do so and reaches the old side. No other old one-handle remains uncut in this component. Cutting the new cocore therefore leaves the new minimum ball with a half-handle cap and the old ball with the other cap. Both are balls by the explicit disk-collar flattening. The new ball contains no knot arc, because the fold is outside the fixed knot tube and the protected arcs descend to their old minima. Thus this is exactly one old cut ball refined into an empty ball and its old occupied or empty companion. It need not be a boundary-parallel disk in the uncut handlebody: other old disk faces may lie on its empty side. Its required boundary parallelism is in that cut ball. The old bridge witnesses and pairing persist in the companion by the same cap collars. The case $\lambda=2$ is this argument with $1-f$ and $-X$, on the upper side. [F1, F2, F3, F5, step 1.1, construct]

3.1 Suppose $\lambda=1$. The old lower curves may meet $b_0$, and the old upper curves may meet $a_0$. Apply [F4]'s explicit finite nearest-intersection slides along $b_0$ and then along $a_0$. Every such band is inside the knot-disjoint block, since both new circles are there. After cleaning, take the small neighborhood of the two actual new disks supplied by [F4]; it misses all other disks and is the standard stabilization ball. Destabilize there. Under step2.1's collar comparison this is exactly deletion of the two local handles; the old handles below $a$ and above $b$ are retained with their attaching maps carried along. More concretely, after the new meridian and longitude are removed, the remaining local level is step1.2's graph disk. A residual attaching arc in this disk is transported by that graph projection, with its endpoints and exterior collars fixed. The crossing-coordinate and cap normalizations in [F3] are performed on those same framed collars, so their disjoint arc matching is unchanged; the cleaning slides have removed the passages around the deleted meridian or longitude. Thus the resulting old disk system is the replacement system, up to its supported disk-collar isotopies. This also explains why one cannot simply omit the cleaning when positive-index-drop trajectories meet an old opposite-system disk. The critical-free replacement family, followed by its unoccupied interpolation from step1.2, now compares it with the actual unoccupied slice by regular marked transport. All changes were outside the protected knot tube. [F2, F3, F4, F5, step 1.1, step 1.2, step 2.1, construct]

4.1 In the extreme cases apply [F5] to the actual empty refinement in step2.2 and its regular disk isotopies; arbitrary endpoint forest reductions then differ only by finite balanced marked slides and isotopies. In the middle case choose the same rooted forests outside the isolated stabilization ball of step3.1. The cut-and-cap calculation preserves its exterior cut balls and their occupancies, so this gives precisely one local genus change on the reduced diagrams. Alternate prescribed forest choices are connected to these by [F5]. Finite regular transports from any sufficiently close chosen slices add only the regular isotopies of [F2]. Reversing the parameter reverses the moves. No mark was inserted, and all bands, caps and local genus changes missed the actual knot and retained its ordered pairing and simultaneous bridge data. Countable Choice is inherited from the local handle, flow and isotopy suppliers; the additional replacements, handle comparisons, cleaning slides and forest operations are finite. [F2, F3, F4, F5, step 3.1, step 2.2, construct] ∎
