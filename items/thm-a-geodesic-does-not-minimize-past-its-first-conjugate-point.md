---
id: thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point
kind: theorem
title: A geodesic does not minimize past its first conjugate point
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-covariant-derivative-along-a-curve
  - def-domain-and-exponential-map-of-a-connection
  - def-energy-of-a-piecewise-smooth-curve
  - def-geodesic-of-an-affine-connection
  - def-index-form-of-a-geodesic-segment
  - def-jacobi-field
  - def-levi-civita-connection
  - def-parallel-section-along-a-curve
  - def-riemannian-speed-and-length
  - def-smooth-variation-and-variation-field-of-a-curve
  - def-vector-field-and-section-along-a-smooth-curve
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - lem-integration-by-parts-for-the-index-form
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - prop-length-energy-inequality-and-constant-speed-equality-case
  - thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-first-variation-formula-for-energy
  - thm-heine-borel-rn
  - thm-second-derivative-test
  - thm-second-variation-formula-for-energy
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Theorem 10.15, Corollary 10.13, and Proposition 10.14"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Theorem 10.15 and full proof, printed pp.188–189 / PDF labels P204–205, lines 7519–7548; index nonnegativity and integration-by-parts context, printed pp.187–188 / PDF labels P203–204, lines 7449–7498."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025), Proposition 23.1.1(1) and proof"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Printed pp.165–166 / PDF labels P172–173, lines 9351–9436. Section 23 assumes completeness; the proof of part (1) is used only as a comparison, and its strict-decrease conclusion is taken for nonzero parameters."
---

## Statement

Assume exactly the library's countable-choice axiom $\mathrm{AC}_\omega$, as
carried by the declared exponential-map, index-form, and second-variation
suppliers. Let $(M,g)$ be a finite-dimensional Riemannian manifold without
boundary, let $a<c<b$, and let $\gamma:[a,b]\to M$ be a nonconstant
affinely parametrized geodesic of the Levi-Civita connection. If
$\gamma(a)$ and $\gamma(c)$ are conjugate along $\gamma|_{[a,c]}$, then there
is a piecewise smooth curve on $[a,b]$ with the same endpoints as $\gamma$
that has both strictly smaller energy (for this fixed parameter interval) and
strictly smaller length. No completeness or full Axiom of Choice is assumed.

## Facts & Assumptions

**Given:** The finite-dimensional Riemannian manifold, the nondegenerate interval $[a,b]$, the nonconstant affine Levi-Civita geodesic $\gamma$, and the interior time $c$ with the stated conjugacy.

[A1] The exact choice assumption is $\mathrm{AC}_\omega$ from [[def-countable-choice]]. It is inherited through the exponential-domain and exponential-differential suppliers used to build the variation, and through the index-form and second-variation suppliers, whose curvature pair-interchange interface gives symmetry of the index form. This symmetry is used when expanding its quadratic form in step 3.1. The finite compactness argument, unique parallel section, and local variation construction add no selection; no full Axiom of Choice is used.

[F1] Conjugacy along $\gamma|_{[a,c]}$ supplies a nonzero smooth Jacobi field $J$ with $J(a)=J(c)=0$ ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F2] A Jacobi field satisfies $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$ ([[def-jacobi-field]]).

[F3] Initial value and covariant derivative at any specified time determine a unique Jacobi field on the whole supplied interval, including backward from $c$ and with one-sided data there ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F4] The fixed-endpoint index form is a symmetric bilinear form on continuous piecewise $C^1$ fields along the geodesic ([[def-index-form-of-a-geodesic-segment]]).

[F5] For continuous piecewise smooth fields $V,Z$, integration by parts expresses $I_\gamma(V,Z)$ as the endpoint pairing minus the derivative-jump pairings and Jacobi-residual integral, with jumps defined as right trace minus left trace ([[lem-integration-by-parts-for-the-index-form]]).

[F6] For any specified vector at an interior time there is a unique parallel section along all of $[a,b]$, and parallel means $D_tE=0$ ([[thm-existence-and-uniqueness-of-parallel-sections]], [[def-parallel-section-along-a-curve]], [[def-covariant-derivative-along-a-curve]]).

[F7] Under $\mathrm{AC}_\omega$, the exponential map is smooth on an open domain containing the zero section and $\exp_p(0)=p$ ([[def-domain-and-exponential-map-of-a-connection]], [[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).

[F8] At the zero vector, the differential of $\exp_p$ in the fibre direction is the identity: specialize the Jacobi formula for $d\exp$ to the constant geodesic, where the field with initial data $(0,v)$ is $t\mapsto tv$ ([[thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields]]).

[F9] A piecewise smooth variation is continuous on the rectangle and smooth on the strips of a finite subdivision; its variation field is a continuous piecewise smooth section ([[def-smooth-variation-and-variation-field-of-a-curve]], [[def-vector-field-and-section-along-a-smooth-curve]]). The interval $[a,b]$ is compact, so finitely many local parameter neighborhoods have a common positive width ([[thm-heine-borel-rn]]).

[F10] For a fixed-endpoint variation of a geodesic, the first energy derivative is zero and the mixed second derivative with equal variation fields is the index form; smoothness on compact strips permits the energy to be twice continuously differentiated ([[thm-first-variation-formula-for-energy]], [[thm-second-variation-formula-for-energy]], [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]], [[def-energy-of-a-piecewise-smooth-curve]]).

[F11] A twice continuously differentiable real function with zero first derivative and negative second derivative at a point has a strict local maximum there ([[thm-second-derivative-test]]).

[F12] An affine geodesic of the Levi-Civita connection has constant speed; the length-energy inequality is $L(\sigma)^2\le 2(b-a)E(\sigma)$ for every piecewise smooth $\sigma$, with equality for a constant-speed curve. Length and energy use the speed integral and the half-energy convention ([[def-levi-civita-connection]], [[def-geodesic-of-an-affine-connection]], [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]], [[def-riemannian-speed-and-length]], [[def-energy-of-a-piecewise-smooth-curve]], [[prop-length-energy-inequality-and-constant-speed-equality-case]]).

[F13] In dimension zero the tangent space of every point is zero-dimensional ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]).

## Proof

**Proof technique:** Cut off a Jacobi field at the interior conjugate time, perturb its derivative corner to obtain a negative index direction, and realize that direction by a fixed-endpoint variation.

1.1 By [F1], choose a nonzero Jacobi field $J$ on $[a,c]$ with $J(a)=J(c)=0$. Put $q=D_tJ(c^-)$; if $q=0$, then the data $J(c)=D_tJ(c^-)=0$ and uniqueness [F3] force $J=0$, so $q\ne0$. Define the continuous piecewise smooth field $V$ on $[a,b]$ by $V=J$ on $[a,c]$ and $V=0$ on $[c,b]$. Then $V(a)=V(c)=V(b)=0$, its only derivative jump is $\Delta_cD_tV=-q$, and its Jacobi residual vanishes on both pieces by [F2]. [F1, F2, F3]

1.2 By [F6], let $E$ be the unique parallel section along $\gamma$ with $E(c)=-q$. Set $\chi(t)=\frac{(t-a)(b-t)}{(c-a)(b-c)}$ and $W(t)=\chi(t)E(t)$. The denominator is positive because $a<c<b$; hence $W$ is smooth, $W(a)=W(b)=0$, and $W(c)=-q$. [F6, given, algebra]

2.1 Apply [F5] to $(V,Z)$ for any continuous piecewise $C^1$ fixed-endpoint field $Z$. Its endpoint term vanishes, its Jacobi-residual integral is zero, and the only jump is $-q$, so $I_\gamma(V,Z)=-g(-q,Z(c))=g(q,Z(c))$. Taking $Z=V$ gives $I_\gamma(V,V)=0$, while taking $Z=W$ gives $I_\gamma(V,W)=-g(q,q)<0$. [F2, F5, step 1.1, step 1.2]

3.1 By bilinearity and symmetry [F4], for $X_\delta=V+\delta W$ one has $I_\gamma(X_\delta,X_\delta)=-2\delta g(q,q)+\delta^2I_\gamma(W,W)$. Put $A=g(q,q)>0$ and choose $0<\delta<A/(|I_\gamma(W,W)|+1)$. Then $\delta|I_\gamma(W,W)|<A$, so $I_\gamma(X_\delta,X_\delta)<-\delta A<0$. The field $X_\delta$ is continuous, piecewise smooth, and zero at both endpoints. [F4, step 1.1, step 1.2, step 2.1]

4.1 Fix this $X=X_\delta$ and define $\beta(s,t)=\exp_{\gamma(t)}(sX(t))$. The map $(s,t)\mapsto(\gamma(t),sX(t))$ is continuous and the open exponential domain in [F7] contains its zero section at $s=0$; compactness in [F9] supplies one $\varepsilon>0$ for which $\beta$ is defined for all $|s|<\varepsilon$ and $t\in[a,b]$. It is continuous and smooth on the strips $[a,c]$ and $[c,b]$; at $c$, both strip formulas and all their pure parameter derivatives agree because $X$ is continuous there. Since $X(a)=X(b)=0$, the variation fixes both endpoints. Its variation field is $X$ by [F8]. Apply the second-variation formula to $B(s,r,t)=\beta(s+r,t)$ on a smaller parameter square: its two fields are both $X$, so $e''(0)=I_\gamma(X,X)<0$ for $e(s)=E(\beta(s,\cdot))$. Smoothness on the compact strips and [F10] make $e$ twice continuously differentiable. [F7, F8, F9, F10, step 3.1]

5.1 The first-variation formula [F10] and the fixed endpoints give $e'(0)=0$. Thus [F11] makes $s=0$ a strict local maximum of $e$, so for a sufficiently small nonzero $s$ the fixed-endpoint competitor $\beta(s,\cdot)$ has $E(\beta(s,\cdot))<E(\gamma)$. [F10, F11, step 4.1]

6.1 Since $\gamma$ is a nonconstant affine Levi-Civita geodesic, [F12] gives constant positive speed and therefore $L(\gamma)^2=2(b-a)E(\gamma)$. Applying [F12] to the same-interval competitor from step 5.1 yields $L(\beta(s,\cdot))^2\le2(b-a)E(\beta(s,\cdot))<L(\gamma)^2$, hence its length is strictly smaller too. [F12, step 5.1]

7.1 The supplied curve rules out an empty manifold. If $\dim M=0$, [F13] gives $\dot\gamma=0$, so the required nonconstant geodesic does not exist; dimension one needs no separate construction because no step divides by dimension or requires a normal direction. The hypothesis $a<c<b$ excludes a degenerate interval and makes both pieces nondegenerate; $J$ and $V$ use one-sided derivatives at $a,c,b$, and the perturbation fixes the two outer endpoints. A zero Jacobi field cannot witness conjugacy by [F1]; constant geodesics are excluded here and, in any case, have no conjugate endpoints by the stated definition. The exact axiom is [A1]; compactness gives only a finite subcover, the parallel field is unique, and the proof assumes no full AC. Both iff cases are inapplicable because this theorem is a one-way implication from an interior conjugate point to a strict competitor, not an equivalence. [A1, F1, F6, F9, F13, step 1.1, step 4.1, step 6.1] $\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Theorem 10.15 and complete proof, printed pp.188–189 / PDF labels P204–205, lines 7519–7548, gives the broken-Jacobi-field negative-index argument. The proof above derives the signs using the library's right-minus-left jump convention and converts negative index into energy and length decrease using the supplied energy formula.

Datar, *Lectures on Riemannian Geometry*, Proposition 23.1.1(1) and proof, printed pp.165–166 / PDF labels P172–173, lines 9351–9436, gives an analogous negative-index and energy-decrease argument followed by a length-energy estimate. Section 23 assumes completeness, which is not needed here. Its statement says the strict length inequality holds for all $|s|<\varepsilon$, including $s=0$; its proof supports the punctured range $0<|s|<\varepsilon$, which is the version used here.
