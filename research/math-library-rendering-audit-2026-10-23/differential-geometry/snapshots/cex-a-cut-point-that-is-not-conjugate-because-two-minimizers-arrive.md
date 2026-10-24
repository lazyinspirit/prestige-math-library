---
id: cex-a-cut-point-that-is-not-conjugate-because-two-minimizers-arrive
kind: counterexample
title: A cut point that is not conjugate because two minimizers arrive
status: published
origin: pipeline
deps:
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-jacobi-field
  - def-parallel-section-along-a-curve
  - ex-cut-locus-of-a-point-on-a-flat-circle
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-formula-for-the-curvature-tensor
  - prop-local-frame-formula-for-covariant-differentiation-along-a-curve
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed p.190 / PDF label P206, lines 7559–7571: Lee notes that the flat cylinder has no conjugate points and that geodesics wrapping more than halfway stop minimizing; the circle witness is calculated locally here."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Appendix C.14.2, printed p.278 / PDF labels P284–285, lines 14021–14050: Klingenberg's lemma is stated and outlined as an exercise linking nonconjugate cut points with two minimizing geodesics; this local example does not rely on that exercise."
---

## Statement refuted

**Refuted claim.** Let $(M,g)$ be a complete, connected Riemannian manifold
without boundary, let $p\in M$, and let $q\in\operatorname{Cut}(p)$ be a cut
point of $p$ reached by a minimizing geodesic segment $\gamma$ from $p$ to
$q$. Then $p$ and $q$ are conjugate along $\gamma$.

## Facts & Assumptions

**Given:** The countable-choice axiom $\mathrm{AC}_\omega$; a circumference $L>0$; the flat circle $C_L=\mathbb R/(L\mathbb Z)$ with period-coordinate metric $dx^2$; the base point $p=[x]$; the antipode $q=[x+L/2]$; and the two opposite semicircles $\gamma_+(t)=[x+t]$ and $\gamma_-(t)=[x-t]$ on $[0,L/2]$.

[A1] The exact choice assumption is $\mathrm{AC}_\omega$ of [[def-countable-choice]]. It is inherited only through the flat-circle example's maximal-geodesic, Hopf--Rinow and cut-time interfaces; the one-dimensional Jacobi calculation below uses no choice, and no full Axiom of Choice is used.

[F1] In the flat circle $C_L$ the antipodal cut-time statement holds: both unit directions have cut time $L/2$, the cut locus is the single antipode $\operatorname{Cut}(p)=\{[x+L/2]\}$, and at that cut point the two opposite semicircles are distinct minimizing geodesics ([[ex-cut-locus-of-a-point-on-a-flat-circle]]).

[F2] The points $\gamma(a)$ and $\gamma(b)$ are conjugate along the affinely parametrized geodesic segment $\gamma:[a,b]\to M$ exactly when the space $\mathcal K_\gamma(a,b)=\{J\in\mathcal J(\gamma):J(a)=0,\ J(b)=0\}$ of Jacobi fields vanishing at both endpoints contains a nonzero field ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F3] A smooth field $J$ along $\gamma$ is Jacobi exactly when it satisfies the Jacobi equation $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$ ([[def-jacobi-field]]).

[F4] In a coordinate chart of a Riemannian metric, the Levi-Civita Christoffel symbols are given by the Christoffel formula; for the period chart of $C_L$ the metric matrix is the constant $1\times1$ matrix $(1)$, so the formula gives $\Gamma^1{}_{11}=0$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F5] In a coordinate chart the curvature components are recovered from the Christoffel symbols by the coordinate curvature formula; when the Christoffel symbols vanish identically in the chart, every component $R^\ell{}_{kij}$ vanishes, so the curvature operator $R$ is zero at each point of the chart ([[prop-coordinate-formula-for-the-curvature-tensor]]).

[F6] For a local frame $e$ with connection form $B(t)=\omega_{\gamma(t)}(\dot\gamma(t))$, a field $V(t)=e(\gamma(t))v(t)$ has covariant derivative $D_tV=e(\gamma(t))(v'(t)+B(t)v(t))$ ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]); a section is parallel exactly when $D_tV=0$ ([[def-parallel-section-along-a-curve]]). In the period chart of $C_L$ the coordinate field $\partial_x$ is a frame along either semicircle, and its connection form vanishes because it is built from the symbols $\Gamma^1{}_{11}=0$ of [F4].

## Proof

**Proof technique:** realize the two minimizing semicircles of the flat circle example, note that the flat connection makes the coordinate frame parallel and the curvature zero, and solve the resulting scalar Jacobi equation $j''=0$ with two endpoint zeros.

1.1 By [F1], $q$ lies in $\operatorname{Cut}(p)$, and $\gamma_+$ and $\gamma_-$ are distinct minimizing geodesics from $p$ to $q$ with common length $L/2$. In a period chart containing the image of the closed semicircle, $\gamma_+$ lifts to the affine line $s\mapsto x+s$ and $\gamma_-$ lifts to $s\mapsto x-s$; each lift has constant unit coordinate speed on $[0,L/2]$. [F1]

1.2 In that period chart the metric coefficient is the constant $1$, so [F4] gives vanishing Christoffel symbols, [F5] gives $R=0$ at every point of the chart, and [F6] makes the coordinate field $\partial_x$ a parallel frame along the semicircle, since its connection form is built from those vanishing symbols. [F4, F5, F6]

2.1 Let $J$ be a smooth vector field along $\gamma_+$. On the chart domain write $J(t)=j(t)\partial_x$ for a smooth real function $j$. As $\partial_x$ is parallel by step 1.2, the frame formula [F6] gives $D_tJ=j'\partial_x$ and $D_t^2J=j''\partial_x$, while the curvature term vanishes because $R=0$ by step 1.2. Thus, by [F3], $J$ is a Jacobi field along $\gamma_+$ exactly when the scalar equation $j''(t)=0$ holds on $[0,L/2]$, whose solutions are $j(t)=a+bt$ with constants $a,b\in\mathbb R$. [F3, F5, F6, step 1.2]

3.1 Suppose $J$ is a Jacobi field along $\gamma_+$ with $J(0)=J(L/2)=0$. By step 2.1, $j(t)=a+bt$ with $a=j(0)=0$ and $a+bL/2=j(L/2)=0$. Since $L/2>0$, the second equation forces $b=0$, hence $j=0$ and $J=0$. The same calculation applies to $\gamma_-$, whose chart lift $s\mapsto x-s$ has the same constant metric coefficient and the same vanishing symbols. [F3, step 2.1, algebra]

4.1 Consequently $\mathcal K_{\gamma_+}(0,L/2)=\{0\}$ and $\mathcal K_{\gamma_-}(0,L/2)=\{0\}$: the only Jacobi field along either minimizing semicircle vanishing at both endpoints is the zero field. By the conjugacy definition [F2], $p$ and $q$ are not conjugate along either semicircle. [F2, step 3.1]

5.1 Therefore $q$ is a cut point of $p$, reached by the two distinct minimizing geodesics $\gamma_+$ and $\gamma_-$, and it is not conjugate to $p$ along either of them; the claim in the Statement refuted is false. Boundary and choice audit: the two semicircles have positive length $L/2$, so both endpoint times are distinct and the endpoint zeros are genuine; the circle is one-dimensional and nonempty, with no degenerate interval and no constant geodesic among the two witnesses; the zero field is the only endpoint-vanishing Jacobi field and it cannot witness conjugacy by [F2]. Exactly $\mathrm{AC}_\omega$ is used, and only to invoke the flat-circle example's cut-time interface by [A1]; the Jacobi computation selects nothing. The refuted claim is a one-way implication, so no converse case arises. [A1, F1, F2, step 1.1, step 4.1]

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed p.190 / PDF label P206, lines 7559–7571, observes that the flat cylinder has no conjugate points and that wrappings longer than halfway stop minimizing; that geometry is realized here on the flat circle, and the local nonconjugacy calculation is carried out rather than quoted. Datar, *Lectures on Riemannian Geometry*, Appendix C.14.2, printed p.278 / PDF labels P284–285, lines 14021–14050, states Klingenberg's lemma with an exercise outline relating nonconjugate cut points to two minimizing geodesics; the explicit circle witness above does not use that exercise as a proof.
