---
id: def-index-form-of-a-geodesic-segment
kind: definition
title: Index form of a geodesic segment
status: published
origin: pipeline
deps:
  - thm-second-variation-formula-for-energy
  - def-covariant-derivative-along-a-curve
  - def-riemann-curvature-four-tensor
  - thm-continuous-implies-integrable
  - thm-linearity-of-the-integral
  - thm-additivity-over-subintervals
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - def-countable-choice
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
  scraped: []
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry (2025), Definition 21.2.1
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: printed p.156 (PDF labels P162-163); same integral on smooth fields
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Equation (10.15)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: printed p.186 (PDF label P203); index form on proper normal fields
---

## Definition

Assume $\mathrm{AC}_\omega$ through the declared dependencies, including
[[def-countable-choice]], [[thm-algebraic-symmetries-of-the-riemann-tensor]],
and [[thm-second-variation-formula-for-energy]]. Let $a<b$ and let
$\gamma:[a,b]\to M$ be an affinely parametrized geodesic in a Riemannian
manifold. Let $\mathcal X^1_{\mathrm{pw}}(\gamma)$ be the real vector space of
continuous vector fields along $\gamma$ that are $C^1$ on each piece of some
finite subdivision of $[a,b]$. Derivatives at included endpoints and the two
traces at an interior breakpoint are taken one-sided.

For $V,W\in\mathcal X^1_{\mathrm{pw}}(\gamma)$, choose a common finite
subdivision on which both fields are $C^1$ and define
$$I_\gamma(V,W):=\sum_{k=1}^m\int_{t_{k-1}}^{t_k}\bigl(g(D_tV,D_tW)-g(R(V,\dot\gamma)\dot\gamma,W)\bigr)\,dt.$$
The derivatives are the covariant derivatives along $\gamma$ from
[[def-covariant-derivative-along-a-curve]], and the curvature sign and slot
order are those in [[def-riemann-curvature-four-tensor]]. The finite sum is
independent of the chosen common subdivision. The resulting **index form** is
a symmetric bilinear form. Its fixed-endpoint subspace is
$$\mathcal X_0(\gamma):=\{V\in\mathcal X^1_{\mathrm{pw}}(\gamma):V(a)=V(b)=0\},$$
and the index form on fixed-endpoint fields is its restriction to
$\mathcal X_0(\gamma)\times\mathcal X_0(\gamma)$.

For any fixed-endpoint two-parameter variation of $\gamma$ covered by
[[thm-second-variation-formula-for-energy]], its variation fields $V,W$ lie in
$\mathcal X_0(\gamma)$ and its mixed energy derivative is $I_\gamma(V,W)$.
This assertion is only about fields that arise from such a variation; no
realization of every piecewise $C^1$ field is claimed here.

## Facts & Assumptions

**Given:** The interval, affinely parametrized geodesic, metric, and continuous
piecewise $C^1$ fields in the definition.

[A1] Countable choice is the assumption $\mathrm{AC}_\omega$ defined by
[[def-countable-choice]]. The algebraic-symmetry theorem carries it through its
first-Bianchi supplier ([[thm-algebraic-symmetries-of-the-riemann-tensor]]), and
the second-variation formula also assumes it
([[thm-second-variation-formula-for-energy]]). Here the local use is pair
interchange and the pair skews that make the curvature bilinear term symmetric.
No full Axiom of Choice or additional choice is used.

[F1] For a fixed-endpoint two-parameter variation with central geodesic
$\gamma$, the mixed energy derivative is the derivative-product and curvature
integral; its endpoint-acceleration term vanishes. This is
[[thm-second-variation-formula-for-energy]].

[F2] Covariant differentiation along the curve is defined stripwise, with
one-sided endpoint values, by
[[def-covariant-derivative-along-a-curve]].

[F3] $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ by
[[def-riemann-curvature-four-tensor]].

[F4] The curvature four-tensor has first- and last-pair skewness and pair
interchange by [[thm-algebraic-symmetries-of-the-riemann-tensor]].

[F5] A continuous real-valued function on a compact nondegenerate interval is
Riemann integrable by [[thm-continuous-implies-integrable]].

[F6] The real Riemann integral is linear on integrable functions by
[[thm-linearity-of-the-integral]].

[F7] The integral over an interval splits additively at every interior point
by [[thm-additivity-over-subintervals]].

## Verification

**Proof technique:** verify the finite-piece definition, bilinearity, symmetry,
and the fixed-endpoint Hessian interpretation.

1.1 The piecewise integrand is Riemann integrable on each common subdivision piece, and the finite sum is partition-independent. [F2, F3, F5, F7]
$D_tV$ and $D_tW$ have continuous
one-sided extensions by [F2], and the curvature expression is continuous there
by [F3]. Thus each scalar integrand is Riemann integrable by [F5]. The sum is
finite. If the subdivision is refined, [F7] leaves each piece's integral
unchanged; the union of two finite breakpoint sets is a finite common
refinement, so any two choices give the same sum. The expression is therefore
well-defined.

1.2 The displayed form is bilinear in its two vector-field inputs. [F2, F3, F6]
Covariant differentiation and curvature are linear in the field slots by
[F2] and [F3], and $g$ is bilinear. Hence the displayed integrand is bilinear
in $(V,W)$ on every piece. Applying [F6] to its finite integrals and summing
proves that $I_\gamma$ is bilinear.

1.3 Curvature pair symmetry and symmetry of $g$ make the full form symmetric. [F3, F4]
For every $t$ on each piece, [F3] and the pair interchange and pair skews
in [F4] give
$$g(R(V,\dot\gamma)\dot\gamma,W)=\operatorname{Rm}(V,\dot\gamma,\dot\gamma,W)=\operatorname{Rm}(W,\dot\gamma,\dot\gamma,V)=g(R(W,\dot\gamma)\dot\gamma,V).$$
The derivative-product term is symmetric because $g$ is symmetric. Integrating
these pointwise equalities proves $I_\gamma(V,W)=I_\gamma(W,V)$. Endpoint
evaluation is linear, so $\mathcal X_0(\gamma)$ is a vector subspace and the
restriction remains symmetric bilinear.

2.1 For each fixed-endpoint two-parameter variation with central $\gamma$, its mixed energy derivative equals the index form. [F1, step 1.1, step 1.2, step 1.3]
If a two-parameter variation fixes both endpoints, its variation fields
vanish at $a$ and $b$. In [F1] the mixed endpoint acceleration therefore
vanishes, leaving exactly the integral that defines $I_\gamma(V,W)$; this
proves the stated fixed-endpoint energy-Hessian interpretation for the
variation fields in question.

3.1 The interval, endpoint, empty, dimension, constant-curve, zero-field and choice cases are as follows. [A1, F2, F4, step 1.1, step 1.2, step 1.3, step 2.1]
The condition $a<b$ excludes the singleton interval, where $D_t$ is not
defined. At included endpoints the stipulated one-sided derivatives apply.
If $M$ is empty, no given geodesic exists; in dimension zero all fields and
the form are zero. In dimension one the curvature term vanishes by
first-pair skewness in [F4]. A constant geodesic has $\dot\gamma=0$, so its
curvature term is zero while $D_tV$ and the derivative-product integral may
remain nonzero. If either field is zero, bilinearity makes the form zero.
Assumption [A1] is used only for the curvature symmetry in step 1.3; the finite
refinement and integral operations use no choice. This is a definition and
identity, not an iff claim.
$\square$
