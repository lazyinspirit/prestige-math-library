---
id: lem-relative-smooth-mapping-classes-of-annulus-and-torus
kind: lemma
title: "Relative smooth mapping classes of the annulus and torus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-countable-choice, lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies, lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms, thm-isotopy-extension]
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the relative smooth disk, Jordan and isotopy-extension suppliers; all curve intersections and cut systems are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.20, Lemmas1.14–1.15, require these elementary annulus and boundary-torus isotopies; the relative smooth disk step is supplied separately, rather than inferred from a conical Alexander extension"
    - title: "Jiayong Li and Jordan Alan Watts, The orientation-preserving diffeomorphism group of S2 deforms to SO(3) smoothly"
      url: "https://arxiv.org/pdf/0912.2877"
      locator: "§3, pp12–16, through the locally proved relative-disk supplier"
---

## Statement

Assume countable choice. All isotopies below are jointly smooth diffeotopies, stationary near the time endpoints.

1. On $A=(\mathbb R/\mathbb Z)\times[0,1]$, every smooth diffeomorphism fixing both boundary circles pointwise is isotopic relative to the boundary to exactly one twist
$$D_k(\theta,u)=(\theta+k\rho(u),u),\qquad k\in\mathbb Z,$$
where $\rho$ is a fixed smooth function equal to zero near $0$ and one near $1$. If the map initially fixes a boundary collar, a common smaller collar can be fixed throughout this isotopy. Without fixing the boundary, every annulus diffeomorphism is isotopic to one of the four maps $(\theta,u)\mapsto(\varepsilon\theta,u)$ or $(\theta,u)\mapsto(\varepsilon\theta,1-u)$, with $\varepsilon=\pm1$.
2. Every smooth diffeomorphism of $T^2=\mathbb R^2/\mathbb Z^2$ inducing the identity on $H_1(T^2;\mathbb Z)$ is smoothly isotopic to the identity. Consequently every torus diffeomorphism is smoothly isotopic to the linear torus map inducing its integral unimodular matrix on $H_1$.

## Facts & Assumptions

**Given:** Countable choice and the indicated annulus or torus diffeomorphism.

[A1] Countable choice is [[def-countable-choice]].

[F1] A smooth disk diffeomorphism fixing its boundary is smoothly isotopic to the identity relative to that boundary, with a common collar retained if initially fixed ([[lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies]], Statement).

[F2] Smooth planar Jordan disks admit smooth parameters extending prescribed boundary maps and collars; collars can be compared by smooth isotopies ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], Statement and Proof 5.1).

[F3] A smooth isotopy of a compact arc or circle in the interior of a surface extends to a supported ambient isotopy ([[thm-isotopy-extension]], Statement). Tracks fixed on endpoint collars are handled by applying it to their compact moving middle, with support away from the protected surface boundary.

## Proof

1.1 We first specify the curve reductions, including their smooth realization. Proper annulus arcs with the same endpoints and relative winding number, and essential torus circles with the same primitive unoriented homology class, can be made disjoint by finitely many bigon removals. Put their interiors in transverse position, keeping fixed any already common endpoint collars. For arcs lift to $\mathbb R\times[0,1]$; equal winding gives matching endpoint translations. For circles cut in the common primitive direction and use the annular cover $\mathbb R^2/\langle v\rangle$, or its planar strip lift. If there are intersections, an extreme excursion across a lift of the reference curve has a return arc on the same side. Among such return arcs choose one innermost with respect to all translates meeting that compact excursion. There are only finitely many relevant translates. It bounds a disk with an interval of the reference lift. Any further lifted arc in this disk would have an innermost return through that interval, giving a smaller choice; reference lifts cannot enter it without such a return. Thus its interior misses every lift of either curve. The disk projects injectively: if a deck translate overlapped it, their noncrossing boundary arcs would force nesting; a nonzero translation cannot strictly nest two equal-area bounded disks. This gives an embedded empty bigon downstairs. If no intersections remain, arcs of the same relative class bound a disk strip and circles of the same primitive class bound an annulus strip. These strip assertions follow by the same lift: matching translated endpoints leave a bounded disk, while consecutive parallel circle lifts bound a strip whose period quotient is an annulus. In particular there is no residual intersection without a bigon in these two cases. [A1, F2, given, construct]

1.2 Each bigon removal is jointly smooth. At its two transverse corners the two curve equations are smooth coordinates with independent gradients, giving quadrant charts. Truncate small corner neighborhoods, apply [F2] with the induced boundary collars to the remaining rounded planar disk, and restore those quadrant charts. This identifies a neighborhood of the bigon with a standard lens bounded by $y=0$ and $y=\phi(x)$, where $\phi>0$ between its two simple zeros and $\phi<0$ just beyond them. Let $\psi$ be one on that interval and zero outside a slightly larger one, and let $d(x)=\psi(x)(\phi(x)+\delta)$ for small $\delta>0$. The graphs $y=s d(x)$, $0\le s\le1$, are regular embedded arcs fixed near their endpoints. At the last time they lie strictly above the other graph on the affected interval: where $\phi<0$, $d-\phi=\psi\delta-(1-\psi)\phi>0$ wherever a crossing could occur. The empty bigon and a sufficiently thin external collar keep the moving arc disjoint from its other portions. Extend this arc isotopy by [F3]. It removes two intersections without changing endpoints or the relevant class. After finitely many removals, use the disk-strip product to move disjoint arcs onto each other, or the annulus-strip product to move disjoint circles onto each other. The strip parameters are smooth: cut an annulus strip along a spanning arc and apply [F2] to its lifted planar disk, prescribing equal product collars on the two cut edges before regluing. Reparametrizations along a fixed arc are interpolations of increasing interval maps; along a fixed circle they are interpolations of increasing periodic lifts. They too extend by [F3]. Thus the reductions can make the indicated curves agree pointwise, not just as sets. [F2, F3, step 1.1, construct]

2.1 Let $f:A\to A$ fix its boundary pointwise. By the collar interpolation in [F2], first arrange that it fixes a smaller boundary collar. For the spanning arc $\alpha=\{0\}\times[0,1]$, lift $f(\alpha)$ starting at $(0,0)$; its other endpoint is $(k,1)$ for a unique integer $k$. Compose with $D_{-k}$. This makes its winding zero, so steps 1.1–1.2 isotope that arc onto $\alpha$, pointwise and relative to the boundary collars. Arrange also that the resulting map is the identity on a neighborhood of $\alpha$: in normal coordinates along this fixed arc its derivative on the arc is triangular, with tangent entry one and positive transverse entry. Linear interpolation of its local coordinate map to the identity has positive determinant on the arc and, on one common narrower strip, consists of embeddings by compactness and the inverse theorem. Extend that supported strip isotopy by [F3]; it is stationary near the annulus boundary. Cutting along $\alpha$ now gives a disk map equal to the identity on its entire boundary collar. Round only inside that fixed collar and apply [F1]. The resulting isotopy pastes across the cut because it is the identity there. Hence $D_{-k}f$ is isotopic to the identity relative to the boundary, and $f$ is isotopic to $D_k$. [A1, F1, F2, F3, step 1.1, step 1.2, construct]

3.1 The integer $k$ is invariant under a boundary-fixed isotopy: lift the moving spanning arc with its initial endpoint fixed; its other endpoint is an integer translate and varies continuously, hence is constant. This proves uniqueness. For an unrestricted annulus diffeomorphism, first compose with the appropriate one of the four displayed maps so that it preserves both boundary components and their circle orientations. Its two boundary circle maps have increasing angular lifts. Interpolate each lift to the identity and extend those isotopies in disjoint boundary collars; the explicit maps keep the collar coordinate and have positive angular derivative. Then apply step 2.1. Finally $D_k$ itself is isotopic to the identity when the boundary is free, through $(\theta,u)\mapsto(\theta+s k\rho(u),u)$. All these families are smooth diffeomorphisms. Thus the four representatives are exhaustive; their boundary permutation and circle degree distinguish their classes. [F2, F3, step 2.1, construct]

4.1 Now let $f:T^2\to T^2$ induce the identity on $H_1$. Choose a primitive standard core circle $c$. The circle reduction of steps 1.1–1.2 and its circle reparametrization isotope $f$ so it fixes $c$ pointwise. The same triangular-derivative strip interpolation as in step 2.1 makes it the identity on a collar of $c$. Cut along $c$ to obtain an annulus diffeomorphism fixing both boundary collars. By step 2.1 this map is isotopic relative to those collars to $D_k$. On regluing, $D_k$ sends a transverse homology generator $d$ to $d+k[c]$ and fixes $[c]$: lift $d$ across the annulus and read its displacement $k$. The original action was the identity and isotopies preserve that action, so $k=0$. The collar-fixed annulus isotopy therefore pastes to a smooth torus isotopy from $f$ to the identity. For arbitrary $f$, its homology matrix $L\in\mathrm{GL}(2,\mathbb Z)$ defines the linear torus diffeomorphism with the same action; apply the result to $L^{-1}f$ and compose with $L$. [F1, F2, F3, step 1.2, step 2.1, step 3.1, construct]

5.1 Use smooth time changes constant near the endpoints of each of the finitely many stages, and concatenate them on disjoint time subintervals. Their derivatives of every time order then match at the joins and at $0,1$. Every curve move was an actual graph or product embedding isotopy extended smoothly, every local strip interpolation had a positive full-rank derivative, and the disk interior stage was [F1]'s jointly smooth isotopy. Thus no unsmoothed Alexander disk contraction occurs. The protected collars remain fixed in the relative assertions. This proves the required endpoint and parameter-smoothness claims. [A1, F1, F3, step 1.2, step 2.1, step 3.1, step 4.1] ∎
