---
id: lem-controlled-stratified-submersions-have-continuous-local-trivializations
kind: lemma
title: "Controlled stratified submersions have continuous local trivializations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-axiom-of-choice,
       lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts,
       lem-whitney-stratifications-admit-compatible-control-data,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-smooth-dependence-of-ode-solutions-on-parameters,
       thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Mather, Notes on Topological Stability (1970)"
      url: "https://doi.org/10.1090/S0273-0979-2012-01383-6"
      locator: "Sections 9-11 (controlled lifts and the first isotopy lemma)"
---

## Statement

Assume AC. Let $W$ be a locally closed finite Whitney-stratified subset of a
smooth ambient manifold, and let $f:W\to B$ be the restriction of a smooth
ambient map that is a submersion on every stratum. Every smooth base field
admits, after tube shrinking, a stratumwise smooth locally bounded controlled
lift. Its stratumwise ODE solutions form a jointly continuous
stratum-preserving local flow with jointly continuous inverse. Each source
point has a stratum-preserving product neighborhood over a small coordinate box
in $B$. If $f$ is proper, every base point has a whole-fiber
stratum-preserving bundle trivialization. No global simplicial model of $f$ is
asserted.

## Facts & Assumptions

**Given:** AC, a locally closed finite Whitney-stratified $W$ in a smooth ambient manifold, a map $f:W\to B$ that is the restriction of a smooth ambient map and a submersion on every stratum, and locally a smooth base field $v$ on $B$.

[F1] Compatible $f$-preserving tube control data exist, with chain overlaps and local properness over compact base slices ([[lem-whitney-stratifications-admit-compatible-control-data]]).

[F2] Radius/projection differentials have smooth bounded right inverses near each lower-stratum point; for adapted tubes the same follows by the tube diffeomorphism of [F1] ([[lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts]]).

[F3] Smooth subordinate partitions exist and positive local size bounds have smooth positive minorants ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] A smooth stratumwise field has unique local ODE solutions within each stratum, depending smoothly on the initial point ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[A1] AC carries the countable-choice supplier assumptions above ([[def-axiom-of-choice]]); no further choice is used.

## Proof

**Proof technique:** direct.

1.1 Construct the lift in increasing stratum dimension. On a stratum $R$ with no active lower tube, the adjoint right inverse of $df|_{TR}$ gives a smooth lift of $v$. Suppose lifts $V_R$ are fixed on all lower-dimensional strata and are controlled and locally bounded there. On an upper stratum $S$ inside a lower tube, use the smooth minimum-norm right inverse of $(d\pi_R,dr_R)|_{TS}$, where $r_R=\sqrt{\rho_R}>0$, to lift $(V_R(\pi_Rx),0)$; it lifts $v$ because $f\pi_R=f$. For nested $R<T<S$, a lift of $(V_T,0)$ through $(\pi_T,r_T)$ also satisfies the $R$-constraints wherever those are active: differentiate the control factorization $F_R=F_R|_T\circ\pi_T$ and use the already proved $R$-control of $V_T$ at $\pi_Tx$, and membership in a smaller $R$-radius band is preserved by $\pi_T$, so the constraints are evaluated on their actual domains. [F1, F2, F4, construct]

2.1 These minimum-norm lifts are bounded by $\|V_R(\pi_Rx)\|+1$ after shrinking the $R$-tube. Near $y\in R$, a contrary sequence of unit-normalized violations has a limiting upper tangent plane containing $T_yR$ and the limiting normal secant direction in it, by Whitney (a),(b); the normalized pair differential stays surjective by [F2]. Its limiting linear equation with target $(V_R(y),0)$ has $V_R(y)$ itself as a solution, so its minimum-norm solution has norm at most $\|V_R(y)\|$, and continuity of the minimum-norm matrix inverse on these surjective limit matrices contradicts the violation. The same argument holds in an adapted tube using its smooth normal-model diffeomorphism or its transverse quotient splitting. Finitely many incident strata give one positive local bound, and [F3] chooses a variable tube radius imposing it at every base point. [F1, F2, F3, step 1.1, algebra]

3.1 For patching on $S$ use closed middle bands inside the retained outer lower tubes, with strictly smaller inner bands as in [F1]. At a point the active middle-band indices form a chain; take a neighbourhood avoiding every closed middle band not active at its centre and lying in the domains of all active controllers, choose there the lift through the maximal active controller, and use the lift of $df$ where none is active. A subordinate smooth partition from [F3] gives a convex sum of these fields. At every point of an inner $R$-band all contributing patches carry the $R$-constraint, so the sum satisfies $d\pi_R(V_S)=V_R\circ\pi_R$ and $d\rho_R(V_S)=0$ there, and it satisfies $df(V_S)=v\circ f$ everywhere. Shrink each actual control domain into the inner band; no derivative of a partition coefficient enters these linear vector-field equations. [F1, F3, A1, step 1.1, step 2.1, construct]

4.1 The patched fields are locally bounded across lower strata. In each patch controlled by $T$ the norms are bounded by $\|V_T(\pi_Tx)\|+1$ from step 2.1. The frontier-distance displacement bound of [F1] implies that a convergent sequence of tube points has base points converging either to a point of $T$, where $V_T$ is smooth, or to the same lower-stratum limit as the tube points, where $V_T$ is locally bounded by induction; the base points stay in a bounded ambient neighbourhood because displacement was capped. Only finitely many lower strata occur, so every sequence has a bounded subsequence for each possible controller, and the finite maximum bounds all contributing lifts. Away from their tubes the ordinary smooth lifts are locally bounded, and a sequence tending to a lower stratum is eventually in its inner tube, so uncontrolled patches do not contribute there. Convex sums retain these bounds, finishing the finite dimension induction of locally bounded controlled lifts. [F1, F3, A1, step 2.1, step 3.1, construct]

5.1 Solve the ODE within each stratum using [F4]. In a small relatively compact ambient ball where $W$ is closed and the constructed field has bound $M$, solutions starting in a smaller ball cannot leave the larger ball before a fixed positive time, by $\|x(t)-x(0)\|\le M|t|$. If a maximal solution had a shorter finite endpoint, this bound makes it Cauchy with a limit in the compact closed piece of $W$. A limit in the same stratum permits ordinary ODE continuation. A limit in a smaller incident stratum $R$ is impossible: on a terminal segment inside its controlled tube $\rho_R$ is constant and positive, but continuity at the limit in $R$ forces it to tend to zero. The argument works backward in time as well, so a common short flow interval exists for all nearby initial points, including points in different strata. [F1, F4, step 4.1, algebra]

6.1 For joint continuity across strata fix a compact interval of the trajectory through $y\in R$ inside a controlled tube, choose a compact base neighbourhood $C\subseteq R$ around the projected trajectory and a small closed radius band whose inverse image $K$ is compact and contained in the tube, by [F1]. For $x_j\to y$ in an incident upper stratum the projected paths solve the smooth $V_R$-ODE by the control identity and their radii are constant and tend to zero. Shrinking the initial neighbourhood keeps the projected paths in the interior of $C$ and the radii strictly inside the band, so there is no first exit from the tube: a putative exit limit would lie in the compact subset $K$ of its interior. On $K$ the distance to the projected point tends uniformly to zero with the radius, because a sequence violating this has a convergent subsequence of radius zero whose limit lies in $R$ and equals its projection. Hence $\phi_{t_j}(x_j)\to\phi_t(y)$ for $t_j\to t$; subdividing a longer interval into finitely many such local intervals and checking incident-stratum subsequences over the finitely many strata proves continuity for every sequence, and time reversal gives the continuous inverse. [F1, F4, step 5.1, algebra]

7.1 Take locally bounded controlled lifts of each coordinate field on a base box; their flows exist on a common source neighbourhood by step 5.1. Starting in the centre fibre, flow successively for the coordinate increments; each flow changes only its own base coordinate, and reversing the flows in reverse order supplies a continuous inverse. Restricting the centre fibre to a relatively open neighbourhood of the point and choosing a sufficiently small box and flow domain, the image is open: the inverse-coordinate conditions are an open base-box condition together with an open condition on the continuous return-to-centre-fibre map. The result is a stratum-preserving product neighbourhood over the box; commutation of the different lifts is unnecessary. [step 5.1, step 6.1, construct]

8.1 If $f$ is proper, cut off the base coordinate fields outside a slightly larger coordinate box. Over every finite time interval a base path has compact image, whose full proper inverse image is compact; the lift is bounded on that compact inverse image by step 4.1, so the endpoint and constant-radius arguments of step 5.1 give complete lifted flows for these base paths. The coordinate-flow construction of step 7.1 therefore applies at every point of the whole centre fibre and produces a bundle trivialization of the full inverse image of the smaller box. All constructions are smooth on each stratum and jointly continuous on $W$. [step 4.1, step 5.1, step 6.1, step 7.1, given] ∎

## Remarks

- The trivializations are stratum-preserving and continuous on the stratified space, smooth only on individual strata; no global simplicial model of $f$, no semialgebraicity, and no statement about nonproper $f$ beyond the local product neighbourhoods is asserted.
