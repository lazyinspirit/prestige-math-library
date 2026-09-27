---
id: thm-closed-hyperbolic-surface-has-geometric-deck-action
kind: theorem
title: "The universal cover of a closed hyperbolic surface is the hyperbolic plane with geometric deck action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-cover-existence, thm-hopf-rinow, thm-deck-group-of-a-universal-cover-is-the-fundamental-group, def-geometric-action-on-a-metric-space, def-axiom-of-choice]
proof_strategy: direct
sources:
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry, Corollary 24.0.2 and §§24.1, 24.3, printed pp.174–179; source PDF read 2026-09-23"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. Let $\Sigma$ be a connected closed smooth Riemannian surface without boundary whose sectional curvature is constantly $-1$. Its universal cover, with the pulled-back Riemannian metric, is isometric to the standard hyperbolic plane $\mathbb H^2$. Under this isometry the deck group, canonically isomorphic to $\pi_1(\Sigma)$ after a basepoint choice, acts by isometries, properly and cocompactly. Thus it acts geometrically on $\mathbb H^2$.

## Facts & Assumptions

**Given:** AC and the specified intrinsically defined closed hyperbolic surface.

[F1] The surface has a simply connected universal covering space ([[thm-universal-cover-existence]]); its deck group is isomorphic to its fundamental group ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]).

[F2] Under countable choice, geodesic completeness and metric completeness are equivalent on connected boundaryless Riemannian manifolds ([[thm-hopf-rinow]]).

[F3] A geometric action is isometric, proper in the bounded-set transporter sense, and cobounded by one bounded set ([[def-geometric-action-on-a-metric-space]]).

[A1] AC includes the countable choice used in [F2] and permits the usual simultaneous covering-chart constructions ([[def-axiom-of-choice]]). The curvature and covering calculations below themselves make only finite local choices.

## Proof

**Proof technique:** direct.

1.1 A smooth surface is locally path connected and semilocally simply connected by coordinate disks. By [F1] choose its universal cover $p:\widetilde\Sigma\to\Sigma$. Pull back the smooth coordinate charts and metric along the evenly covered sheets. Then $p$ is a smooth local isometry; in particular the cover has curvature $-1$ and is simply connected. The base $\Sigma$ is compact, so every geodesic in it extends for all real time by [F2]. A geodesic in $\widetilde\Sigma$ projects locally to one in $\Sigma$; extend the projected geodesic and lift its extended path from the starting point. Uniqueness of path lifting and the local-isometry equation show that the lift extends the original geodesic. Hence $\widetilde\Sigma$ is geodesically complete and, by [F2], metrically complete. [F1, F2, A1, given]

1.2 Fix $\widetilde p\in\widetilde\Sigma$ and an orthonormal oriented basis of its tangent plane. Completeness defines $\exp_{\widetilde p}$ on every tangent vector. Along any unit-speed radial geodesic $\gamma_v(t)=\exp_{\widetilde p}(tv)$, a normal variation of its initial direction gives a Jacobi field $J$ with $J(0)=0$ and $D_tJ(0)=E_0$, where $E_0$ is a unit normal vector. The geodesic-variation equation $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$ follows by differentiating the geodesic equation with respect to the variation parameter and commuting the two covariant derivatives. Since the sectional curvature is $-1$, $R(J,\dot\gamma)\dot\gamma=-J$ for perpendicular $J$. Parallel-transport $E_0$ along $\gamma$; uniqueness of the scalar ODE $j''-j=0$, $j(0)=0$, $j'(0)=1$, gives $J(t)=\sinh(t)E(t)$. Radial variation gives $D\exp$ of norm $1$ in the radial direction, and Gauss' lemma (orthogonality follows by differentiating $\langle\dot\gamma,J\rangle$ and using those initial conditions) gives zero cross term. Thus the pulled-back metric on the whole tangent plane, away from its origin, is
$$\exp_{\widetilde p}^{*}g=dr^2+\sinh^2(r)\,d\theta^2.$$
At the origin its differential is the identity. Because $\sinh(r)>0$ for $r>0$, $\exp_{\widetilde p}$ is a local diffeomorphism everywhere. This is the constant-curvature calculation in Datar, §24.1, with $\kappa=-1$; all its local ODE steps have been displayed here. [step 1.1, given, algebra]

2.1 For clarity, the local diffeomorphism in step 1.2 is a covering map. In the Euclidean norm on $T_{\widetilde p}\widetilde\Sigma$, its differential expands every tangent vector: radial length is unchanged and angular length is multiplied by $\sinh(r)/r\ge1$ (the inequality follows from the positive Taylor series, or from $(\sinh r-r)'=\cosh r-1\ge0$). A locally lifted piecewise smooth path $c:[0,1]\to\widetilde\Sigma$ therefore has Euclidean lift speed no greater than $|c'|_g$. On any unfinished finite subinterval the lift stays in a bounded Euclidean ball and is Cauchy as the parameter approaches its endpoint; it extends there by continuity of $\exp$ and a local inverse. Hence every such path lifts to its full interval. The same estimate, uniform over a compact parameter square after subdividing it into finitely many normal-coordinate rectangles, lifts piecewise smooth path homotopies. Given a sufficiently small simply connected normal ball $B$ around a target point, lift its radial paths from each point of the fibre. Homotopy lifting makes each lift independent of the path in $B$, producing disjoint inverse branches on $B$; uniqueness of path lifting exhausts its preimage. Therefore $B$ is evenly covered. The target $\widetilde\Sigma$ is simply connected, so this connected covering from the tangent plane has one sheet and is a diffeomorphism. [step 1.2, algebra]

2.2 Every deck transformation preserves $p^*g$, so it is an isometry. The universal covering is regular and [F1] identifies its deck group with $\pi_1(\Sigma)$ after a basepoint choice. Its action is free. For compact-set properness, let $K\subseteq\widetilde\Sigma$ be compact. Cover $p(K)$ by finitely many smaller disks whose closures lie in evenly covered disks $B_a$. For each $a$, $K$ meets only finitely many sheets above the smaller disk: otherwise points chosen in distinct sheets would accumulate in $K$ over its closure inside $B_a$, where an open sheet contains a neighbourhood of the limit point, a contradiction. If $gK\cap K\ne\varnothing$, some $x,gx\in K$ lie over one smaller disk and in two of its finitely many relevant sheets. At most one deck transformation maps one prescribed sheet to the other, so only finitely many $g$ meet $K$. Step 1.1 and [F2] make the cover a proper metric space; arbitrary bounded $B,C$ lie in compact closed balls, and their transporter lies in the finite transporter of the union of those balls. Thus the action is proper in [F3]'s exact bounded-set sense. [F1, F2, F3, step 1.1, given]

3.1 The standard polar metric on $\mathbb H^2$ is $dr^2+\sinh^2(r)d\theta^2$; for example this follows directly from the hyperboloid model $F(r,\theta)=(\cosh r,\sinh r\cos\theta,\sinh r\sin\theta)$ and the restriction of $-dx_0^2+dx_1^2+dx_2^2$. Match the chosen tangent basis to the corresponding tangent basis at $F(0,\theta)$. The global normal-coordinate diffeomorphism of step 2.1 and the metric identity of step 1.2 now give an isometry $\widetilde\Sigma\cong\mathbb H^2$. [step 1.2, step 2.1, algebra]

4.1 To obtain a bounded set whose translates cover, cover the compact base $\Sigma$ by finitely many smaller closed normal disks contained in evenly covered disks. Lift each closed disk to one sheet; its lift is compact because the sheet projection is a homeomorphism. Let $K_0$ be the finite union of these lifted compact disks. For any $x\in\widetilde\Sigma$, its projection lies in one of them; regularity of the universal cover gives a deck transformation taking the chosen lift over $p(x)$ to $x$. Hence $G\cdot K_0=\widetilde\Sigma$. The compact set $K_0$ is bounded, so the action is cobounded by [F3]. Its quotient is the compact surface $\Sigma$, so it is also cocompact in the usual sense. Together with step 2.2 the action is geometric. The cover is isometric to $\mathbb H^2$ by step 3.1. [F1, F3, step 3.1, step 2.2, given] ∎
