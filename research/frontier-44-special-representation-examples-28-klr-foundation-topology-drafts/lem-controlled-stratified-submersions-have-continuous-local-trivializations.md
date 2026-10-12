---
id: lem-controlled-stratified-submersions-have-continuous-local-trivializations
kind: lemma
title: Controlled stratified submersions have continuous local trivializations
status: draft
origin: session
deps: [lem-whitney-stratifications-admit-compatible-control-data, lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-smooth-dependence-of-ode-solutions-on-parameters, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: John Mather, Notes on topological stability, first isotopy lemma
      url: https://doi.org/10.1090/S0273-0979-2012-01383-6
---

## Statement

Assume AC. Let $W$ be a locally closed finite Whitney-stratified subset of a smooth ambient manifold, and let $f:W\to B$ be the restriction of a smooth ambient map that is a submersion on every stratum. Every smooth base field admits, after tube shrinking, a stratumwise smooth locally bounded controlled lift. Its stratumwise ODE solutions form a jointly continuous stratum-preserving local flow with jointly continuous inverse. Each source point has a stratum-preserving product neighborhood over a small coordinate box in $B$. If $f$ is proper, every base point has a whole-fiber stratum-preserving bundle trivialization. No global simplicial model of $f$ is asserted.

## Facts & Assumptions

**Given:** AC, $W$, $B$, $f$, and locally a smooth base field $v$.

[F1] There are compatible $f$-preserving tubes, with chain overlaps and local properness over compact base slices ([[lem-whitney-stratifications-admit-compatible-control-data]]).

[F2] Radius/projection differentials have smooth bounded right inverses near each lower-stratum point ([[lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts]]); for adapted tubes the same assertion follows by the tube diffeomorphism constructed in [F1].

[F3] Smooth subordinate partitions exist, and positive local size bounds have smooth minorants ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F4] A smooth stratumwise field has ordinary unique local ODE solutions and smooth dependence on its initial point within that stratum ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[A1] AC carries the supplier assumptions ([[def-axiom-of-choice]]).

## Proof

1.1 Construct the lift in increasing stratum dimension. On a stratum $R$ without an active lower tube, the adjoint right inverse of $df|_{TR}$ gives a smooth lift of $v$. Suppose lifts $V_R$ are fixed on all lower-dimensional strata and are controlled and locally bounded there. On an upper stratum $S$ inside a lower tube, use the smooth minimum-norm right inverse of $(d\pi_R,dr_R)|_{TS}$, with $r_R=\sqrt{\rho_R}>0$, to lift $(V_R(\pi_R x),0)$. It lifts $v$ because $f\pi_R=f$. For nested $R<T<S$, a lift of $(V_T,0)$ through $(\pi_T,r_T)$ also satisfies the $R$ constraints wherever those are active: differentiate $F_R=F_R|_T\circ\pi_T$ and use the already proved $R$ control of $V_T$ at $\pi_Tx$. Membership in a smaller $R$ radius band is preserved by $\pi_T$, so those constraints are evaluated on their actual domains. [F1, F2, F4, construct]

2.1 These minimum-norm lifts can be kept bounded by $\|V_R(\pi_Rx)\|+1$ after shrinking the $R$ tube. To see this near $y\in R$, a contrary sequence has limiting upper tangent plane containing $T_yR$ and its normal secant direction, by Whitney (a),(b). The normalized pair differential stays surjective by [F2]. Its limiting linear equation with target $(V_R(y),0)$ has $V_R(y)$ itself as a solution, so its minimum-norm solution has norm at most $\|V_R(y)\|$. Continuity of the minimum-norm matrix inverse on these surjective limit matrices contradicts the proposed violation by one. The same argument holds in an adapted tube using its smooth normal-model diffeomorphism, or directly using its transverse quotient splitting. Finitely many incident strata give one positive local bound; [F3] chooses a variable tube radius imposing it at every base point. [F1, F2, F3, step 1.1, algebra]

3.1 For patching on $S$, use closed middle bands inside retained outer lower tubes, with strictly smaller inner bands as in [F1]. At a point, the active middle-band indices form a chain. Take a neighborhood avoiding every closed middle band not active at its center and lying in the domains of all active controllers. There choose the lift through the maximal active controller; where none is active use the lift of $df$. A subordinate smooth partition from [F3] gives a convex sum of these fields. At every point in an inner $R$ band, all contributing patches carry the $R$ constraint, so the sum satisfies $d\pi_R(V_S)=V_R\pi_R$ and $d\rho_R(V_S)=0$ there; it also satisfies $df(V_S)=v\circ f$ everywhere. Shrink each actual control domain into that inner band. No derivative of a partition coefficient enters these vector-field equations. [F1, F3, step 1.1, step 2.1, construct]

4.1 The patched fields are locally bounded across lower strata. In each patch controlled by $T$, their norms are bounded by $\|V_T(\pi_Tx)\|+1$ from step 2.1. The frontier-distance displacement bound in [F1] implies that a convergent sequence of tube points either has base points converging to a point of $T$, where $V_T$ is smooth, or has them converging to the same lower-stratum limit as the tube points, where $V_T$ is locally bounded by induction. Base points remain in a bounded ambient neighborhood because displacement was capped by one. Only finitely many lower strata occur, so every such sequence has a bounded subsequence for each possible controller; the resulting finite maximum bounds all contributing lifts. Away from their tubes the ordinary smooth lift is bounded locally; a sequence tending to a lower stratum is eventually in its inner tube, so uncontrolled patches do not contribute there. Convex sums retain these bounds. This finishes the finite dimension induction and constructs actual locally bounded controlled lifts. [F1, F3, step 2.1, step 3.1, construct]

5.1 Solve the ODE within each stratum using [F4]. In a small relatively compact ambient ball where $W$ is closed and the constructed field has bound $M$, solutions starting in a smaller ball cannot leave the larger ball before a fixed positive time, by the estimate $\|x(t)-x(0)\|\le M|t|$. If a maximal solution had a shorter finite endpoint, this bound makes it Cauchy, with a limit in the compact closed piece of $W$. A limit in the same stratum permits ordinary ODE continuation. A limit in a smaller incident stratum $R$ is impossible: on a terminal segment inside its controlled tube, $\rho_R$ is constant and positive, but continuity at the limit in $R$ forces it to tend to zero. The same argument works backward in time. Thus a common short flow interval exists for all nearby initial points, including points in different strata. [F1, F4, step 4.1, algebra]

6.1 To prove joint continuity across strata, fix a compact interval of the trajectory through $y\in R$ within a controlled tube. Choose a compact base neighborhood $C$ in $R$ around that trajectory, and a small closed radius band whose inverse image $K$ is compact and contained in the tube, by [F1]. For $x_j\to y$ in an incident upper stratum, the projected paths solve the smooth $V_R$ ODE by the control identity, and their radii are constant and tend to zero. Shrinking the initial neighborhood makes the projected paths stay in the interior of $C$ and radii stay strictly within the band, so there is no first exit from the tube: a putative exit limit is in the compact subset $K$ of its interior. On $K$, distance to the projected point tends uniformly to zero with radius. Indeed a sequence violating this has a convergent subsequence with radius zero, whose limit lies in $R$ and equals its projection. Therefore $\phi_{t_j}(x_j)\to\phi_t(y)$ whenever $t_j\to t$. Subdivide a longer interval into finitely many such local intervals. There are finitely many strata, so checking incident-stratum subsequences proves continuity for every sequence. Time reversal gives continuous inverse. [F1, F4, step 5.1, algebra]

7.1 Take locally bounded controlled lifts of each coordinate field on a base box. Their local flows exist on a common source neighborhood by step 5.1. Starting in the center fiber, flow successively for the coordinate increments. Each flow changes only its own base coordinate; reversing the flows in reverse order supplies a continuous inverse. Restrict the center fiber to a relatively open neighborhood of the point and choose a sufficiently small box and flow domain. The resulting image is open: its inverse-coordinate conditions are an open base-box condition and an open condition on the continuous return-to-center-fiber map. It is a stratum-preserving product neighborhood over the box. Commutation of the different lifts is unnecessary. [step 5.1, step 6.1, construct]

8.1 If $f$ is proper, cut off the base coordinate fields outside a slightly larger coordinate box. Over every finite time interval each base path has compact image and its full proper inverse image is compact. The lift is bounded on that compact inverse image by step 4.1, so the endpoint/constant-radius argument of step 5.1 gives complete lifted flows for these base paths. Step 7.1's coordinate-flow construction therefore applies to every point of the whole center fiber, producing a bundle trivialization of the full inverse image of the smaller box. All constructions are smooth on each stratum and jointly continuous on $W$. [step 4.1, step 5.1, step 6.1, step 7.1, given] ∎
