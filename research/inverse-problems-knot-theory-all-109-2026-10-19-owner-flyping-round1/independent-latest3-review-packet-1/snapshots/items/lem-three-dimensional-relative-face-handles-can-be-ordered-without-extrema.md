---
id: lem-three-dimensional-relative-face-handles-can-be-ordered-without-extrema
kind: lemma
title: "Relative face handles in dimension three can be ordered without extrema"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms
  - thm-parametric-transversality
  - thm-morse-functions-and-handle-decompositions-correspond
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-fundamental-theorem-on-flows
  - lem-flow-reparametrization-realizes-a-level-isotopy
  - lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods
  - lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged
  - prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles
  - lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from smooth Morse perturbation, supported flows, critical-value interchange and disk absorption. All charts, critical points, index exchanges and tree absorptions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, Theorem 11 Proof I, printed p.66"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, §§2–4; relative three-dimensional face extension supplied locally"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
---

## Statement

Assume countable choice. Let $M$ be a compact connected smooth three-manifold with product corners, decomposed into incoming and outgoing horizontal faces $A_0,A_1$ and a vertical face $B\times[0,1]$, with fixed compatible collars and boundary parametrizations. Here $\partial A_i=B\times\{i\}$, both $A_0,A_1$ are nonempty, and neither is required to be connected. There is a finite relative handle presentation of $M$ from $A_0$ with only index-1 and index-2 handles, all index-1 handles preceding all index-2 handles. Every attaching thickening is in the interior of its horizontal level, away from a fixed smaller vertical product collar. The original incoming, outgoing and vertical boundary parametrizations are retained in the presentation data.

Before deleting zero and top handles, the presentation is supplied by an excellent Morse function equal to the prescribed height $t$ near the vertical face and to its compatible product models near the horizontal faces. Index ordering can be achieved while keeping that entire boundary height fixed. No simply connectedness or h-cobordism hypothesis is imposed.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice and the compact connected three-dimensional face cobordism with its nonempty horizontal ends, product corners, prescribed heights and boundary parametrizations.

[F1] Ordinary compact collared triads admit excellent adapted Morse data. The actual construction uses finitely many bump-supported coordinate differentials spanning each possible critical cotangent fiber, followed by a finite-dimensional transverse perturbation and local metric patching. Parametric transversality supplies a good parameter under countable choice. The face adaptation is proved below. ([[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]], [[thm-parametric-transversality]])

[F2] Compact subsets of open manifold sets admit smooth supported bumps, and smooth fields have unique smooth local flows. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-fundamental-theorem-on-flows]])

[F3] Local Morse handle blocks and regular flow bands give a finite handle presentation. A supported level isotopy is realized by a shear of the regular-band field. Crossing spheres for adjacent critical levels have dimensions $\operatorname{ind}(q)-1$ and $3-\operatorname{ind}(p)-1$, with empty unstable crossing set at index zero and empty stable crossing set at index three. Their interior block and shear constructions apply away from the vertical face as explained below. ([[thm-morse-functions-and-handle-decompositions-correspond]], [[lem-flow-reparametrization-realizes-a-level-isotopy]], [[lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods]])

[F4] When two adjacent clusters have no connecting trajectory, their compact critical-trajectory closures can be separated by a smooth function constant on flow lines. Increasing interval reparametrizations then interchange their critical values; the actual proof constructs $g=G(f,\beta)$ with $d\beta(X)=0$ and $\partial_1G>0$. ([[lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged]])

[F5] Zero-handles in a connected cobordism with nonempty incoming face can be absorbed using a rooted tree of one-handles, including disconnected incoming faces. Gluing a ball along a boundary disk is removed by a collar-supported diffeomorphism, carrying later attaching maps with it. ([[prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles]], [[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]])

## Proof

1.1 Prescribe the function to be $t$ on the vertical collar, the inward height on $A_0$ and one minus the inward height on $A_1$. These prescriptions agree on their product corner charts by the hypothesis. Smooth patching here is finite: restrict Euclidean chart bumps to the half-spaces and quadrants of those charts, extend by zero beyond their strict support margins, and divide by their positive finite sum near the compact boundary. Patch the prescribed height with the constant $1/2$ only beyond smaller boundary collars. The resulting $h:M\to[0,1]$ has the required endpoint fibers and has no critical point near any boundary face or corner. Thus every possible critical point is in a compact subset of the ordinary interior. [given, F2, construct]

2.1 On that compact subset apply the actual finite differential perturbation of [F1]: choose finitely many interior charts and bumps $\chi_j$, equal to one on smaller charts covering it, and perturb by $\sum a_{jk}\chi_j x_j^k$. At each possible zero the parameter differentials span the cotangent fiber, so the evaluation is transverse to the zero section. A sufficiently small good parameter exists by [F1]; compact value margins retain the endpoint fibers and smaller parameters retain nonvanishing on the transition collar. Its critical points are nondegenerate and finite. Distinct small constant bumps near those points separate their values without changing their Hessians or the protected collars. Patch Euclidean metrics in the Morse charts and the metric $dt^2+dr^2+g_B$ near the vertical face, using the same finite partition construction; here $r$ is the inward vertical-face collar coordinate. The negative gradient has the exact Morse models and equals $-\partial_t$ on that collar. Extend the field to signed face and corner charts and cut it off on a boundaryless carrier, as in the actual completeness construction of [F1]. This gives complete ambient trajectories restricted to $M$ until horizontal exit. [step 1.1, F1, F2, construct]

3.1 An interior trajectory cannot enter the protected vertical collar from its interior edge and then approach its vertical boundary: in a smaller product strip its $r$ coordinate is constant because the field is $-\partial_t$. A trajectory meeting that smaller strip stays in it until horizontal exit in both time directions and cannot have an interior critical limit. Therefore all critical crossing spheres and their regular-band transports are compact subsets of horizontal interiors away from a smaller fixed strip. On a compact regular band, strict descent away from the finite Morse blocks has a positive lower bound; the exact exponential flow in each block accounts for possible infinite-time limits only at its critical point. Finite regular transports thus exist until the next prescribed level. Applying the local block and regular-band constructions of [F3] in those interior charts gives a handle presentation with the prescribed boundary maps, and with all attaching thickenings away from the vertical strip. This proves the relative-face handle construction without applying an ordinary closed-face theorem to the corners. [step 2.1, F3, construct]

4.1 Consider a strict index inversion at two consecutive critical values: the lower point $p$ has index larger than the higher point $q$. The crossing sets at an intermediate level have the dimensions in [F3]. If $\operatorname{ind}(q)=0$ or $\operatorname{ind}(p)=3$, one set is empty. The only other possibility is $\operatorname{ind}(p)=2$, $\operatorname{ind}(q)=1$, when both sets are finite point sets on a two-dimensional regular level. Move one of these finite sets off the other by arbitrarily small translations in disjoint coordinate disks around its points, keeping the disks inside the level interior. The cut-off constant translation fields give a smooth level isotopy supported in those disks. Use the actual regular-band shear of [F3], supported between two nearby regular levels in this interior, to change the field so the crossing sets become disjoint. Nothing changes on the vertical strip or near the critical blocks. A trajectory connecting $q$ to $p$ would cross that intermediate level in both sets, so no such trajectory remains. This is the entire dimension-specific separation argument; no positive-dimensional crossing sphere must be moved off another one for a strict inversion. [step 3.1, F2, F3, construct]

5.1 The critical-trajectory compactness and orbit-separation construction in [F4] applies inside this band with its two critical blocks. Indeed a limiting regular path either has bounded travel time away from those blocks or breaks at one of the two critical points, by their exact exponential equations; a broken connection between the two is excluded by step 4.1. Those compact trajectory sets miss the protected product strip by step 3.1. On the lower regular level choose an additional bump equal to one near their compact exits and zero near the vertical boundary, and extend it constantly along regular trajectories. Near each critical-trajectory set extend it constantly as one; exit continuity in the block model makes this extension smooth, just as for the orbit-separating function $\beta$ in [F4]. At a local minimum use the constant-one extension on its attracting neighborhood with no lower through-exit, and reverse this argument at a maximum. This supplies a smooth orbit-constant $\alpha$ equal to one near the critical sets and zero near the vertical strip. If $G(f,\beta)$ is the value interchange from [F4], use $g=(1-\alpha)f+\alpha G(f,\beta)$. Since $d\alpha(X)=d\beta(X)=0$, its derivative along the field is $dg(X)=(1-\alpha+\alpha\partial_1G)df(X)<0$ off the critical points. Near those points it is the prescribed constant value change, while it is exactly the old height on the boundary strip and near the band's end levels. This interchanges the inverted values without new critical points or boundary changes. [step 3.1, step 4.1, F2, F4, construct, algebra]

6.1 Repeat steps 4.1–5.1 for adjacent strict index inversions. The inversion count of the finite index list decreases by one at every adjacent exchange, so this terminates with all zero-handles first, then all one-handles, then all two-handles and finally all three-handles. Keep the critical values distinct within each group. Local Morse and regular-band blocks give the index-ordered relative presentation on the same manifold with its original boundary identifications. There is no need to merge equal-index critical values or to appeal to a higher-dimensional version of the face argument. [step 3.1, step 4.1, step 5.1, construct]

7.1 In that ordered presentation form the finite graph whose vertices are the components of the incoming collar and the new zero-handle balls, with the one-handles as edges. This graph is connected because handles of index at least two have connected attaching regions and cannot join components. Root a spanning tree at any incoming component, which exists because $A_0$ is nonempty. Process its edges outward: absorb every newly reached bare ball and its incident one-handle by [F5], retaining an edge when it joins another incoming component. All disks and collars of these operations lie in compact horizontal interiors, so the vertical strip is untouched. Transport all remaining attaching maps through each absorption; this removes every zero-handle while preserving the actual boundary parametrizations as presentation data. Reverse the presentation from the nonempty outgoing face and apply the same procedure, using its possibly several collar components. In the original direction this removes only three-handles and their paired two-handles and cannot recreate a zero-handle. Reversing back gives only one- and two-handles, with every one-handle still before every two-handle. The supported absorptions and all transported maps retain the originally specified horizontal and vertical identifications, as asserted. [given, step 6.1, F5, construct] ∎
