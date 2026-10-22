---
id: lem-colored-spanning-surface-regions-give-an-embedded-ordered-tube-cobordism
kind: lemma
title: "Colored spanning-surface regions give an embedded ordered tube cobordism"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-a-missing-spanning-surface-face-forces-a-two-sided-frontier-circle
  - lem-three-dimensional-relative-face-presentations-have-fixed-height-morse-realizations
  - thm-parametric-transversality
  - thm-euclidean-inverse-function-theorem
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the finite path/disk transversality and fixed-height three-dimensional Morse realization suppliers. The color parity, polar blow-ups and rotating-strip formulas are finite local constructions."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, Theorem 11, printed pp.66–67; the colored-region resolution and projection check are supplied explicitly here"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume countable choice. Let $F_0,F_1\subset S^3$ be connected compact smooth spanning surfaces for the same nonempty link $L$, whose transverse interior intersection $\Gamma$ is a finite disjoint union of circles. Supply disjoint boundary tubes with smooth coordinates $(s,u,v)$, with $L=\{u=v=0\}$, in which their actual boundary collars are $F_0=\{v=0,u\ge0\}$ and $F_1=\{u=0,v\ge0\}$. The surfaces need not be orientable.

There is a compact connected smooth three-manifold $W$ with product corners and an embedding $E:W\hookrightarrow S^3\times[0,1]$ with horizontal faces $A_0,A_1$ mapped exactly to $F_0\times\{0\}$ and $F_1\times\{1\}$, and with vertical boundary mapped exactly to $L\times[0,1]$. Its ambient time function is excellent Morse, with only index-one and index-two interior critical points, all index-one values below $1/2$ and all index-two values above $1/2$. It is the product height near every boundary face and near the interior annuli above $\Gamma$.

The spatial projection $\pi=\operatorname{pr}_{S^3}\circ E$ has one-point fibers wherever its image is outside $\Gamma\cup L$, and its fiber over each point of $\Gamma\cup L$ is exactly an interval. More precisely, if $g:W\to[0,1]$ is any smooth function agreeing with the original time on neighborhoods of those interval fibers and on horizontal collars, and $g^{-1}(i)=A_i$ for $i=0,1$, then $x\mapsto(\pi(x),g(x))$ is again a smooth embedding with the same boundary data. This last assertion is restricted to these explicit projection fibers, rather than to arbitrary embedded cobordisms.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the two connected spanning surfaces, their finite transverse interior circle intersection and the supplied straight boundary-collar charts.

[F1] The complement has finitely many regions and each region is incident to a regular face of both surfaces. Along a common circle the two transverse surface lines have either trivial simultaneous monodromy or simultaneous sign reversal. ([[lem-a-missing-spanning-surface-face-forces-a-two-sided-frontier-circle]])

[F2] A compact connected three-dimensional face cobordism with nonempty horizontal ends has a Morse realization with only one- and two-handles, fixed on a smaller full vertical product collar; its critical values can be any assigned increasing list in handle order. The horizontal ends may be disconnected. ([[lem-three-dimensional-relative-face-presentations-have-fixed-height-morse-realizations]])

[F3] Finite-dimensional relative perturbation families give transverse paths and disks under countable choice. ([[thm-parametric-transversality]])

[F4] The inverse function theorem gives local coordinate inverses, upgraded to smooth by its derivative formula for smooth maps. ([[thm-euclidean-inverse-function-theorem]])

## Proof

1.1 Color a point of $S^3\setminus(F_0\cup F_1)$ by the parity of the total number of crossings with the surfaces along a generic path from one fixed complementary base point. This parity is path-independent. To verify it, join two such paths with reversed orientation and round their junctions off the surfaces. A smooth loop in $S^3$ misses some point: in finitely many charts its bounded-derivative image is covered by $N$ balls of radius $O(1/N)$, whose total three-dimensional volume tends to zero. Stereographic projection from a missed point puts the loop in $\mathbb R^3$; coning it to a point with a radial cutoff constant near the cone center gives a smooth spanning disk, retaining a constant collar of the boundary loop. Perturb its interior by [F3], fixing that collar, to be transverse to each surface interior and to $\Gamma$ and $L$. On the parameter disk the two surface preimages form a finite graph. At a preimage of $\Gamma$ it has valence four; at a preimage of $L$ it has two half-arcs, one from each spanning surface; every other interior vertex has valence two. Its boundary vertices are precisely the crossings of the loop, each of valence one. The finite graph degree sum makes their number even. This proves path-independence. Color is constant on each region and changes across each regular face. Hence at a common circle the dark sectors are two opposite quadrants, while at a boundary component they are either the quadrant between the two positive rays or its complementary three-quadrant sector. [given, F3, F4, construct]

2.1 Choose disjoint small normal tubes about the finitely many circles of $\Gamma$, away from the supplied boundary tubes. Their surface axes can be made exact in smooth fiber coordinates. In a normal disk over a circle point, parametrize the two surface curves as $c_0(s,u)$ and $c_1(s,v)$, vanishing at the center. Their independent tangent vectors make the fiber map $(u,v)\mapsto c_0(s,u)+c_1(s,v)$ a local diffeomorphism by [F4]. Shrinking uniformly makes it injective, and it carries the two coordinate axes to the actual surface curves. In the nontrivial case of [F1] its coordinate transitions around the circle are $(u,v)\mapsto(-u,-v)$; otherwise they are the identity, after choosing periodic frames. The dark pair is thus $uv>0$ or $uv<0$, unchanged by any simultaneous sign reversal. Blow up each circle of $\Gamma\cup L$ in these tubes by replacing the normal origin by its circle of polar directions. Explicitly retain $r\ge0$ and the normal angle, glue for $r>0$ to the punctured old tube and keep the same outer-radius collar. This produces a compact smooth three-manifold with torus boundary in place of the curves. It is Hausdorff by these compact bundle and unchanged-complement charts. [step 1.1, F1, F4, construct]

3.1 In this blown-up space take the closure $W_R$ of each dark region $R$. Along $\Gamma$ its two possible dark angular intervals are disjoint, so no opposite sectors are identified at their old central point. Along $L$ the chosen dark angular interval has length $\pi/2$ or $3\pi/2$, both strictly less than $2\pi$. Each closure is therefore a smooth compact connected three-manifold with product corners: its local charts are ordinary region charts, half-space charts at regular faces and polar product charts $(s,r,t)$ at the new boundary, where $t$ is the normalized angular interval coordinate. The two angular endpoints are respectively its incoming face from $F_0$ and outgoing face from $F_1$. Every $W_R$ has both horizontal faces nonempty by [F1]. Its vertical face is a finite union of circles times $[0,1]$. A vertical circle over a one-sided circle of $\Gamma$ may double-cover that base circle; the normalized angular coordinate is still a well-defined product height. All these are faces of the blown-up compact charts, not an assertion that the original closure of $R$ was a manifold at an opposite-sector crossing. [step 1.1, step 2.1, F1, construct]

4.1 Fix the following angular heights near the vertical faces. At $\Gamma$, for dark pair $\eta uv>0$, where $\eta=\pm1$, use the interval whose rays are $(u,v)=(r\cos(\pi t/2),\eta r\sin(\pi t/2))$, with signed $r$ accounting for the two opposite sectors. On an individual blown-up sector take its nonnegative radius; the opposite sector has the same normalized $t$. At $L$ use $(u,v)=(r\cos(\alpha t),r\sin(\alpha t))$ for $r\ge0$, with $\alpha=\pi/2$ for the narrow dark sector and $\alpha=-3\pi/2$ for the wide one. These formulas run from the actual positive $F_0$ ray to the positive $F_1$ ray. The angular coordinate is compatible with the horizontal product corner coordinates. Apply [F2] to every $W_R$, using exactly these vertical height data. There are finitely many region pieces by [F1]. Assign their finitely many one-handle values distinct numbers below $1/2$ and all two-handle values distinct numbers above $1/2$, retaining each piece's handle order. The resulting height functions are exactly $t$ near their vertical faces. [step 2.1, step 3.1, F1, F2, construct]

5.1 Glue the vertical faces over each $\gamma\subset\Gamma$ by pairing opposite dark sectors at the same base point and the same normalized angle $t$. In the two-sided case this pairs two distinct boundary annuli, possibly on one region piece. In the one-sided case their single annulus double-covers $\gamma$ and is glued by its free deck involution. In both cases signed-radius charts give the smooth local model $(s,r,t)$ with $r\in\mathbb R$, including the transition $r\mapsto-r$ on going around a one-sided circle. The heights glue smoothly because they equal $t$ on full collars. Leave the vertical faces over $L$ unglued. The horizontal faces glue to the original smooth surfaces $F_0,F_1$, since the two signed radii restore their whole axis across every common circle. Call the resulting compact smooth face manifold $W$, its height $h$, and its blowdown projection to $S^3$ by $\pi$. Off the new vertical faces the projection is the original inclusion of a region or its regular boundary face. [step 3.1, step 4.1, construct]

6.1 Define $E(x)=(\pi(x),h(x))$. It is a smooth embedding. Off the new annuli the spatial projection is a local full-dimensional coordinate, so $dE$ has rank three. On an annulus over $\Gamma$ its formula is exactly $(s,r,t)\mapsto(s,r\cos(\pi t/2),\eta r\sin(\pi t/2),t)$ in the axis charts of step 2.1. Its differential has rank three even at $r=0$: the $s$ column is nonzero, the $r$ column is a unit vector in the normal disk, and the $t$ column has time entry one. The same computation holds at $L$ with $r\ge0$ and either value of $\alpha$ in step 4.1, giving its vertical boundary and horizontal corners. These formulas respect simultaneous sign monodromy. Distinct points with the same spatial projection can occur only on a glued annulus over $\Gamma$ or on an unglued one over $L$: every regular face has exactly one dark side, and region interiors are disjoint. On each such interval fiber the height is $t$, so $E$ is injective there as well. A smooth injective immersion from compact $W$ into the Hausdorff cylinder, with these corner charts, is an embedding; equivalently its continuous inverse follows from compactness and its local embedding charts. Its boundary is precisely the three faces asserted in the Statement. [step 1.1, step 2.1, step 4.1, step 5.1, F4, construct]

7.1 Every region piece meets its incoming face, and the incoming surface $F_0$ is connected. Its regular faces are joined across the cut common circles, and the gluing in step 5.1 makes those same joins inside $W$. Thus every region piece is in the one component containing $F_0$, so $W$ is connected. The time function has exactly the critical points chosen inside the region pieces: the annulus models and all boundary collars have nonzero $t$ derivative. It is excellent with only the assigned index-one and index-two values, in the stated order. Finally replace $h$ by any $g$ as in the Statement. Away from the interval fibers the differential of $\pi$ is still invertible, while near the fibers the map is unchanged. Injectivity uses the same singleton-fiber and fixed-interval-height argument as step 6.1. The endpoint-fiber hypothesis retains the exact horizontal faces, while the unchanged collars retain the vertical face and corners. Compactness then gives another smooth embedding. This proves the asserted reheighting property precisely for this constructed projection, without a claim about arbitrary intrinsic Morse functions on arbitrary embedded cobordisms. [step 3.1, step 4.1, step 5.1, step 6.1, construct] ∎
