---
id: thm-local-gauss-bonnet-for-a-frameable-disk-region
kind: theorem
title: Local Gauss-Bonnet for a frameable disk region
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-covering-space-lifting-criterion
  - thm-euler-poincare-formula-for-finite-cw-complexes
  - thm-gaussian-curvature-structure-equation
  - prop-angle-derivative-formula-for-geodesic-curvature
  - thm-hopf-turning-tangent-theorem
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - prop-geodesic-curvature-under-orientation-and-parameter-reversal
  - lem-stokes-for-piecewise-smooth-surface-regions
  - lem-finite-frameable-decomposition-of-a-regular-disk-region
  - def-countable-choice
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.3 (the Gauss-Bonnet formula) with Lemma 9.2 and Theorem 9.1, printed pp. 156-167 (PDF pp. 173-183)."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1 and its proof in Section 2.1, printed pp. 10-13 (PDF pp. 17-20)."
---

## Statement

Assume the axiom of choice through the finite decomposition and its Jordan
suppliers. Let $(M,g,J)$ be an oriented Riemannian surface and let
$D\subseteq M$ be a compact regular oriented disk region with finitely many
ordinary corners, carrying a smooth positively oriented $g$-orthonormal frame
$(E_1,E_2)$ on an open neighbourhood of $D$; write
$\omega(X)=g(\nabla_XE_1,E_2)$ for its connection one-form. Let $k_g$ be the
signed geodesic curvature of the positively oriented boundary
$\partial D$ and let $\alpha_1,\dots,\alpha_m$ be its signed exterior angles.
Then

$$\int_D K\,dA+\int_{\partial D}k_g\,ds+\sum_{j=1}^m\alpha_j=2\pi .$$

No hypothesis is made on a global angle function of the frame; the orientation
of $D$ and the outward-normal-first orientation of its boundary are the ones
fixed by [[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]].

## Facts & Assumptions

**Given:** An oriented Riemannian surface with a compact regular oriented disk region carrying a global positive orthonormal frame on a neighbourhood, with its boundary orientation and exterior angles.

[A1] Full AC is assumed through the finite decomposition [F1] and its Jordan/plane-graph suppliers; the published Stokes and structure-equation interfaces use only its countable-choice consequence ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] $D$ admits a finite face-to-face subdivision into regular disk pieces $D_1,\dots,D_F$ such that each piece is contained in an oriented coordinate chart of $M$, carries a smooth positive orthonormal frame, and has only ordinary corners after finite subdivision. Every new edge is piecewise smooth, and the relative interior of each new non-boundary edge lies in $\operatorname{Int}D$; its endpoints may lie on $\partial D$ ([[lem-finite-frameable-decomposition-of-a-regular-disk-region]]).

[F2] For a regular $C^2$ unit-speed curve with tangent $T=\cos\theta\,E_1+\sin\theta\,E_2$ on a connected interval, the signed geodesic curvature satisfies $k_g=\theta'+\omega(T)$, with one-sided derivatives at included endpoints ([[prop-angle-derivative-formula-for-geodesic-curvature]]).

[F3] On the frame domain, $d\omega=-K\,dA$ ([[thm-gaussian-curvature-structure-equation]]).

[F4] For a compact regular oriented surface region $P$ with ordinary corners and a smooth one-form $\eta$ on a neighbourhood of $P$, $\int_Pd\eta=\int_{\partial P}\eta$ ([[lem-stokes-for-piecewise-smooth-surface-regions]]).

[F5] A positively oriented simple closed piecewise $C^2$ regular plane curve that bounds a supplied disk region and has finitely many ordinary corners has Euclidean total signed curvature plus exterior angles equal to $2\pi$ ([[thm-hopf-turning-tangent-theorem]]).

[F6] At a positively oriented boundary corner with interior angle $\beta\in(0,2\pi)$ the signed exterior angle is $\alpha=\pi-\beta$, the unique principal turn from the incoming to the outgoing unit tangent ([[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

[F7] Reversing the parameter of a regular $C^2$ unit-speed curve changes the sign of its signed geodesic curvature at each point ([[prop-geodesic-curvature-under-orientation-and-parameter-reversal]]).

[F8] The finite triangular decomposition of [F1] is a regular CW structure on the closed disk; the Euler–Poincaré cell count is $V-E+F=\sum_j(-1)^j\operatorname{rank}H_j(D;\mathbb Z)=1$, since the disk is contractible ([[lem-finite-frameable-decomposition-of-a-regular-disk-region]], [[thm-euler-poincare-formula-for-finite-cw-complexes]]).

[F9] A map from a path-connected, locally path-connected space to the base of a covering lifts after an initial value is chosen if its induced fundamental-group image lies in the covering's subgroup; the lift is unique ([[thm-covering-space-lifting-criterion]]).

## Proof

**Proof technique:** prove the turning fact and the formula for a disk lying in one chart, apply them to the finitely many chart pieces of the frameable decomposition, and cancel internal edges while counting corners with the planar Euler identity.

1.1 Let $P$ be a compact regular disk region lying in an oriented coordinate chart of $M$ and carrying a single-valued smooth positive orthonormal frame on a neighbourhood of $P$. Let $\theta$ be a continuous tangent-angle lift of the positively oriented unit-speed boundary of $P$ relative to that frame on each smooth arc, with the principal jumps $\varepsilon_j$ at the corners. Define its total turning by $\operatorname{Rot}=\sum_{\text{arcs}}\Delta\theta+\sum_j\varepsilon_j$; its value will be computed below. [given]

2.1 The chart coordinate frame gives a second smooth positive frame near $P$. After Gram–Schmidt, its change to the given orthonormal frame is a smooth map $P\to SO(2)$. The closed disk $P$ is path-connected, locally path-connected and simply connected, so its fundamental-group image is trivial; [F9] applied to the circle covering $\mathbb R\to SO(2)$ gives a continuous angle lift $\varphi$ on $P$ after fixing one value. Smoothness holds locally and the local lifts differ by constants. Replacing the reference direction changes every angle lift by $-\varphi$ and leaves every corner jump unchanged. The total turning in the two frames differs by the total change of $-\varphi$ around the closed boundary, which is zero. This comparison uses simple connectivity of $P$, not of the surrounding chart. [F9, step 1.1, given]

3.1 The total turning in a single-valued frame is a multiple of $2\pi$ for every positively oriented simple closed piecewise $C^2$ regular curve whose initial and terminal unit tangents agree: the accumulated angle returns to a representation of the initial direction, so it differs from the initial angle by an integral multiple of $2\pi$. Thus the argument of step 2.1 can be run for a curve in a chart with the single-valued frames obtained by Gram-Schmidt from the coordinate frame with respect to any Riemannian metric on the chart. [given, algebra]

4.1 For a disk region contained in one chart with a single-valued frame, apply step 3.1 to the family of metrics $g_s=s\,g+(1-s)\,g_e$, where $g_e$ is the Euclidean metric read in the chart: for each $s$ the corresponding total turning $\operatorname{Rot}_s$ is an integral multiple of $2\pi$, and $s\mapsto\operatorname{Rot}_s$ is continuous because the Gram-Schmidt frames, the angle lifts and the finitely many corner jumps depend continuously on $s$. At $s=0$ the curve is a positively oriented simple closed piecewise $C^2$ plane curve bounding the plane disk region, so [F5] gives $\operatorname{Rot}_0=2\pi$; by continuity and integrality $\operatorname{Rot}_s=2\pi$ for every $s$, and in particular $\operatorname{Rot}_1=2\pi$ for the given metric. This proves the turning fact used below for each piece of [F1]. [F5, F6, step 3.1, algebra]

5.1 Fix one piece $D_i$ of the decomposition [F1] and write $\gamma_i$ for its positively oriented unit-speed boundary. On each smooth arc of $\gamma_i$, [F2] gives $k_g\,ds=d\theta+\omega(T)\,ds$ for the angle lift $\theta$ relative to the given global frame, so integrating over the finitely many arcs and adding the corner jumps gives $\int_{\partial D_i}k_g\,ds+\sum_v\alpha^{(i)}_v=2\pi+\int_{\partial D_i}\omega$, where the corner jumps are the piece's signed exterior angles $\alpha^{(i)}_v$ by [F6] and the total turning is $2\pi$ by steps 2.1 and 4.1. [F1, F2, F6, step 2.1, step 4.1, algebra]

6.1 The structure equation [F3] and Stokes [F4] give $\int_{\partial D_i}\omega=\int_{D_i}d\omega=-\int_{D_i}K\,dA$, since each piece lies in a chart carrying the frame and is a compact regular oriented disk region with ordinary corners. Substituting into step 5.1 yields, for every piece, $\int_{D_i}K\,dA+\int_{\partial D_i}k_g\,ds+\sum_v\alpha^{(i)}_v=2\pi$. [F1, F3, F4, step 5.1, algebra]

7.1 Summing step 6.1 over the finitely many pieces and using additivity of the area integral over the face-to-face decomposition gives $2\pi F=\int_DK\,dA+\sum_i\int_{\partial D_i}k_g\,ds+\sum_i\sum_v\alpha^{(i)}_v$. [A1, step 6.1, algebra]

8.1 Each internal edge of the decomposition is incident with exactly two pieces and is traversed by them in opposite directions, because both pieces inherit the orientation of $D$; by [F7] the two signed curvature integrals over that edge are opposite, so they cancel. Each subarc of $\partial D$ is incident with exactly one piece and is traversed with the positive orientation of $\partial D$, so the surviving edge integral is $\int_{\partial D}k_g\,ds$. [F1, F7, step 7.1]

9.1 For every vertex $v$ of the decomposition let $m_v$ be the number of piece corners at $v$ and, for a piece corner at $v$, let $\beta^{(i)}_v\in(0,2\pi)$ be the interior angle of that piece; by [F6] its exterior angle is $\alpha^{(i)}_v=\pi-\beta^{(i)}_v$. Summing over all piece corners, $\sum_i\sum_v\alpha^{(i)}_v=\pi\sum_vm_v-\bigl(2\pi V_{\mathrm{int}}+\pi V_{\mathrm{bd}}^{\mathrm{sub}}+\sum_j\beta_j^{\mathrm{orig}}\bigr)$, where $V_{\mathrm{int}}$ counts interior vertices of the decomposition, $V_{\mathrm{bd}}^{\mathrm{sub}}$ counts boundary vertices subdividing a smooth boundary arc, and $\beta_j^{\mathrm{orig}}$ are the interior angles at the original corners of $D$. In a face-to-face decomposition into disk cells every boundary vertex is incident with exactly one outgoing boundary subarc and every internal edge has two sides, so $\sum_vm_v=2E_{\mathrm{int}}+E_{\mathrm{bd}}$ and $E_{\mathrm{bd}}=V_{\mathrm{bd}}=V_{\mathrm{bd}}^{\mathrm{sub}}+m$, where $m$ is the number of original corners. Using $\alpha_j^{\mathrm{orig}}=\pi-\beta_j^{\mathrm{orig}}$ this gives $\sum_i\sum_v\alpha^{(i)}_v=\sum_j\alpha_j^{\mathrm{orig}}+2\pi(E_{\mathrm{int}}-V_{\mathrm{int}})$. [F1, F6, step 8.1, algebra]

10.1 The finite regular CW count [F8] gives $V-E+F=1$. Since every boundary vertex is matched by exactly one boundary edge, $E_{\mathrm{bd}}=V_{\mathrm{bd}}$ and the count reads $V_{\mathrm{int}}+V_{\mathrm{bd}}-E_{\mathrm{int}}-V_{\mathrm{bd}}+F=V_{\mathrm{int}}-E_{\mathrm{int}}+F=1$, that is $F-E_{\mathrm{int}}+V_{\mathrm{int}}=1$. [F1, F8, step 9.1]

11.1 Substituting steps 8.1, 9.1 and 10.1 into step 7.1 gives $2\pi F=\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\alpha_j^{\mathrm{orig}}+2\pi E_{\mathrm{int}}-2\pi V_{\mathrm{int}}$, hence $\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\alpha_j=2\pi(F-E_{\mathrm{int}}+V_{\mathrm{int}})=2\pi$. The full AC assumption of [A1] enters through [F1]; the finite bookkeeping uses no additional choice. [A1, step 7.1, step 8.1, step 9.1, step 10.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Lemma 9.2 and Theorem 9.3, printed pp. 162-167, prove the formula for a curved polygon contained in a coordinate chart, with the rotation-angle input of Theorem 9.1; the frame comparison here lifts the rotation map on the disk itself (step 2.1), and metric interpolation computes its turning number (steps 3.1–4.1). The reduction of a frameable disk that need not lie in a chart to chart-contained pieces uses [[lem-finite-frameable-decomposition-of-a-regular-disk-region]], followed by internal-edge cancellation and the corner count in steps 7.1–10.1. The Euler count comes from the finite regular CW structure and [[thm-euler-poincare-formula-for-finite-cw-complexes]]. Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, gives the same local computation in the convention $d\omega=-K\,dA$ used here.
