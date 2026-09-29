---
id: lem-gauss-bonnet-expression-is-independent-of-the-metric
kind: lemma
title: The Gauss-Bonnet expression is independent of the metric
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-connection-one-form-rotation-law-on-an-oriented-surface
  - thm-gaussian-curvature-structure-equation
  - prop-angle-derivative-formula-for-geodesic-curvature
  - lem-stokes-for-piecewise-smooth-surface-regions
  - thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - prop-geodesic-curvature-under-orientation-and-parameter-reversal
  - def-riemannian-volume-density
  - thm-density-integration-is-defined-without-an-orientation
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: ai-altered
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
    - title: "Chris Wendl, The Gauss-Bonnet Formula, Chapter 6, Section 6.3"
      url: "https://www.math.hu-berlin.de/~wendl/pub/connections_chapter6_2.pdf"
      locator: "Printed pp. 147-152, the connection-form proof of Gauss-Bonnet and the transgression computation Corollary 6.42."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Printed pp. 163-169 (PDF pp. 180-186), local and global Gauss-Bonnet formulas."
---

## Statement

Assume the axiom of choice through the local structure, Stokes and
triangulation suppliers. Let $\Sigma$ be an oriented smooth surface and let
$D\subseteq\Sigma$ be a compact regular oriented surface region with finitely
many ordinary corners; let $g_0,g_1$ be smooth Riemannian metrics on an open
neighbourhood of $D$. For a smooth metric $g$ on that neighbourhood write
$$G(g)=\int_DK_g\,dA_g+\int_{\partial D}k_g\,ds_g+\sum_{j=1}^m\alpha_j(g),$$
where $K_g$ is the Gaussian curvature of $g$, $k_g$ the signed geodesic
curvature of the positively oriented boundary, and $\alpha_j(g)$ the signed
exterior angles measured with $g$. Then $G(g_0)=G(g_1)$.

If in addition $M$ is a closed compact nonorientable smooth surface carrying
smooth metrics $g_0,g_1$ and $\mu_g$ denotes the orientation-free Riemannian
area density of $g$, then $\int_MK_{g_0}\,\mu_{g_0}=\int_MK_{g_1}\,\mu_{g_1}$.
No classification of surfaces, Euler-Poincare theorem or characteristic-class
theory is used.

## Facts & Assumptions

**Given:** An oriented surface with a compact regular oriented region and two smooth metrics on a neighbourhood of it; in the second part, a closed nonorientable compact surface with two smooth metrics.

[A1] Full AC is inherited through the curvilinear triangulation supplier and its Jordan/plane-graph inputs; Stokes and the structure equation need only its countable-choice consequence ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] For a smooth positive orthonormal frame of a metric $g$ with connection form $\omega(X)=g(\nabla_XE_1,E_2)$ one has $d\omega=-K_g\,dA_g$ ([[thm-gaussian-curvature-structure-equation]]).

[F2] Rotating a frame through a supplied smooth angle lift $\varphi$ changes the connection form to $\omega+d\varphi$; on overlaps of two frames the transition angle is the same for a whole family of frames when the transition function of the family is fixed ([[thm-connection-one-form-rotation-law-on-an-oriented-surface]]).

[F3] For a regular $C^2$ unit-speed curve with tangent $T=\cos\theta\,E_1+\sin\theta\,E_2$ relative to a positive frame, $k_g=\theta'+\omega(T)$ ([[prop-angle-derivative-formula-for-geodesic-curvature]]).

[F4] For a compact regular oriented surface region with ordinary corners and a smooth one-form $\eta$ on a neighbourhood, $\int_Dd\eta=\int_{\partial D}\eta$ ([[lem-stokes-for-piecewise-smooth-surface-regions]]).

[F5] At a positively oriented ordinary corner the signed exterior angle is the unique principal turn from the incoming to the outgoing unit tangent, equal to $\pi-\beta$ for interior angle $\beta\in(0,2\pi)$ ([[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

[F6] Reversing the parameter of a regular $C^2$ unit-speed curve changes the sign of its signed geodesic curvature at every point ([[prop-geodesic-curvature-under-orientation-and-parameter-reversal]]).

[F7] Every compact smooth Riemannian surface admits a finite face-to-face curvilinear triangulation with each face in a frameable chart ([[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]]).

[F8] A regular oriented surface region has a finite decomposition of its boundary into regular $C^2$ arcs and ordinary corners, with the outward-normal-first orientation ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

[F9] The Riemannian area density $\mu_g$ and the orientation-free integral of a continuous function against it are defined without a choice of orientation ([[def-riemannian-volume-density]], [[thm-density-integration-is-defined-without-an-orientation]]).

## Proof

**Proof technique:** interpolate the two metrics, compare the two connection forms by a family of frames with fixed transition functions, and use Stokes plus the constancy of the total boundary turning.

1.1 The metric $g_t=(1-t)g_0+tg_1$ is smooth and positive definite for every $t\in[0,1]$. Cover a neighbourhood of $D$ by finitely many oriented charts carrying positive $g_0$-orthonormal frames, and on each chart let $A_t$ be the $g_0$-self-adjoint positive bundle map with $g_t(u,v)=g_0(A_tu,v)$; the positive square root $A_t^{-1/2}$ is smooth in the point and in $t$. Applying $A_t^{-1/2}$ to a $g_0$-orthonormal frame gives a positive $g_t$-orthonormal frame, and because $A_t^{-1/2}$ acts identically in every chart, the transition functions between overlapping charts are the same $SO(2)$-valued functions for all $t$. [A1, F2, given]

1.2 On each boundary component choose a smooth starting point and divide its finitely many $C^2$ arcs further into finitely many chart-contained pieces. Make every genuine corner interior to one chosen frame chart, and put every added chart cut at a smooth point. For each $t$, choose a continuous angle lift $\theta^t_j$ of the $g_t$-unit tangent relative to the selected $g_t$-frame on each smooth piece. Let $\operatorname{Rot}_t$ be the sum of their angle increments plus the genuine corner jumps $\alpha_j(g_t)$ of [F5]. Integrating [F3] piecewise and summing gives $\int_{\partial D}k_{g_t}\,ds_{g_t}+\sum_j\alpha_j(g_t)=\operatorname{Rot}_t+\sum_j\int_{\text{piece }j}\omega_{t,j}$, where each connection form is taken in that piece's selected frame. [F3, F5, F8, given]

2.1 Let $\omega_t$ be the connection form of the $g_t$-frame on a chart and set $\beta:=\omega_1-\omega_0$. On an overlap, [F2] gives $\omega_t^{\alpha}=\omega_t^{\beta}+d\varphi_{\alpha\beta}$ with $\varphi_{\alpha\beta}$ independent of $t$ by step 1.1, so $\beta$ is chart-independent and defines a global smooth one-form on a neighbourhood of $D$. [F2, step 1.1]

2.2 At a smooth artificial chart cut, the angle of the same tangent in the next frame differs from its angle in the preceding frame by the negative of their frame-transition angle, modulo $2\pi$. Step 1.1 makes that transition independent of $t$; choose its lift once, so the jump between the two continuous angle lifts is fixed throughout $[0,1]$. At a genuine corner the jump between the one-sided angles in their common frame is the principal exterior angle $\alpha_j(g_t)$, with the branch fixed continuously in $t$ because the tangent rays never become antipodal. Thus, on each closed boundary component, $\operatorname{Rot}_t$ plus the sum of the fixed artificial-cut jumps is an integral multiple of $2\pi$: after all smooth increments and jumps the unit tangent returns to its starting direction. Both terms are continuous in $t$, and the artificial-cut sum is constant, so this integer multiple is constant. Summing over the boundary components gives $\operatorname{Rot}_1=\operatorname{Rot}_0$. [F5, step 1.1, step 1.2, algebra]

3.1 By [F1], $d\omega_t=-K_{g_t}dA_{g_t}$ for every $t$, hence $d\beta=d\omega_1-d\omega_0=-K_{g_1}dA_{g_1}+K_{g_0}dA_{g_0}$, that is $K_{g_1}dA_{g_1}-K_{g_0}dA_{g_0}=-d\beta$. [F1, step 2.1, algebra]

4.1 Subtract the two piecewise identities of step 1.2. The connection forms $\omega_t$ need not be globally defined, but on every chosen boundary piece their difference $\omega_1-\omega_0$ is the restriction of the global form $\beta$ from step 2.1. Therefore, by steps 3.1 and 2.2, $G(g_1)-G(g_0)=-\int_Dd\beta+(\operatorname{Rot}_1-\operatorname{Rot}_0)+\sum_j\int_{\text{piece }j}(\omega_{1,j}-\omega_{0,j})=-\int_Dd\beta+\int_{\partial D}\beta$. Stokes [F4] makes this zero, so $G(g_1)=G(g_0)$. [F4, step 3.1, step 1.2, step 2.2, algebra]

5.1 For the nonorientable closed case, fix a finite curvilinear triangulation of $M$, which exists by [F7] applied to $g_0$; orient each triangular face arbitrarily and give it the induced boundary orientation. Each face is a compact regular disk region with ordinary corners and carries both restricted metrics, so steps 1.1-3.1 apply to it: writing $G^{(f)}(g)=\int_fK_g\,dA_g+\int_{\partial f}k_g\,ds_g+\sum\alpha(g)$ for the face functional, one has $G^{(f)}(g_0)=G^{(f)}(g_1)$ for every face. [F7, F8, step 4.1]

6.1 Summing over the finitely many faces, the area terms combine to the orientation-free integrals $\int_MK_{g_0}\mu_{g_0}$ and $\int_MK_{g_1}\mu_{g_1}$ by [F9]. Each interior edge has two incident faces on opposite sides; their inward conormals are opposite independently of their arbitrary face orientations, because reversing a face orientation reverses both its boundary tangent and its quarter-turn. Thus the signed curvature integrals cancel, and there are no boundary edges. At each vertex $v$ with $m_v$ incident faces the face-corner angles sum to $2\pi$, so the corner terms contribute $\sum_v(m_v\pi-2\pi)$, a number independent of the metric. Hence $\int_MK_{g_0}\mu_{g_0}=\int_MK_{g_1}\mu_{g_1}$. [F6, F9, step 5.1, algebra] ∎

## Source locator

Wendl, *The Gauss-Bonnet Formula*, Chapter 6, Section 6.3, printed pp. 147-152, gives the connection-form proof of Gauss-Bonnet and the transgression identity behind the comparison of two metrics (Corollary 6.42); Lee, *Riemannian Manifolds*, printed pp. 163-169, gives the local and global formulas in the conventions used on this page. The metric interpolation, the fixed-transition family of frames, the standard-one-form construction of step 2.1 and the closed nonorientable summation are proved here from the library items listed above; the boundary turning constant of step 2.2 uses only continuity in the metric family, so no classification theorem or Euler-Poincare identity enters this lemma.
