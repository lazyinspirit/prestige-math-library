---
id: lem-integration-by-parts-for-the-index-form
kind: lemma
title: Integration by parts for the index form
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-geodesic-of-an-affine-connection
  - def-index-form-of-a-geodesic-segment
  - def-levi-civita-connection
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - prop-local-frame-formula-for-covariant-differentiation-along-a-curve
  - thm-continuous-implies-integrable
  - thm-linearity-of-the-integral
  - thm-newton-leibniz-with-interior-derivative
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
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Proposition 10.14"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, Proposition 10.14 and proof, printed pp.187–188 / PDF labels P203–204, lines 7455–7498. Lee states the formula for proper normal fields; the local proof extends it to arbitrary continuous piecewise-smooth fields and retains the outer endpoint term."
---

## Statement

Assume $\mathrm{AC}_\omega$ as carried by the supplied index-form definition
([[def-index-form-of-a-geodesic-segment]], [[def-countable-choice]]); the
finite-piece calculation below requires no additional choice. Let $(M,g)$ be a
Riemannian manifold, let $a<b$, and let
$\gamma:[a,b]\to M$ be an affinely parametrized geodesic of the
Levi-Civita connection ([[def-geodesic-of-an-affine-connection]]). Write
$T:=\dot\gamma$. Fix a finite subdivision
$$a=t_0<t_1<\cdots<t_m=b.$$
Let $V,W$ be continuous vector fields along $\gamma$, with $V$ of class $C^2$
and $W$ of class $C^1$ on each closed piece $[t_{k-1},t_k]$, using one-sided
derivatives at each piece endpoint. For $1\le j<m$, define the derivative
jump by
$$\Delta_jD_tV:=D_tV(t_j^+)-D_tV(t_j^-).$$
Then
$$I_\gamma(V,W)=[g(D_tV,W)]_a^b-\sum_{j=1}^{m-1}g(\Delta_jD_tV,W(t_j))-\sum_{k=1}^{m}\int_{t_{k-1}}^{t_k}g(D_t^2V+R(V,T)T,W)\,dt.$$
Here
$$[g(D_tV,W)]_a^b:=g(D_tV(b^-),W(b))-g(D_tV(a^+),W(a)).$$
The curvature convention and the piecewise-sum meaning of $I_\gamma$ are those
of [[def-index-form-of-a-geodesic-segment]].

## Facts & Assumptions

**Given:** The nondegenerate segment, specified Levi-Civita geodesic, finite subdivision, and continuous fields $V,W$ with the stated piecewise regularity.

[A1] The countable-choice premise is $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It is inherited through the declared [[def-index-form-of-a-geodesic-segment]] interface, whose stated use is the curvature pair-interchange symmetry needed for its symmetric index-form and second-variation assertions. The local finite-piece integration calculation below spends no further choice.

[F1] For continuous piecewise $C^1$ fields, the index form is the finite sum $$I_\gamma(V,W)=\sum_{k=1}^m\int_{t_{k-1}}^{t_k} \bigl(g(D_tV,D_tW)-g(R(V,\dot\gamma)\dot\gamma,W)\bigr)\,dt,$$ independent of the chosen common subdivision ([[def-index-form-of-a-geodesic-segment]]).

[F2] Covariant differentiation along each smooth piece is the pullback connection derivative, with one-sided traces at piece endpoints ([[def-covariant-derivative-along-a-curve]]).

[F3] The Levi-Civita connection of $g$ is metric compatible ([[def-levi-civita-connection]]).

[F4] In a local frame $e$ with connection matrix $B(t)=\omega_{\gamma(t)}(\dot\gamma(t))$, a field with coefficient column $u(t)$ satisfies $D_t(eu)=e(u'+Bu)$ ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

[F5] In a local frame with metric matrix $H(t)$, metric compatibility gives $H'=B^{\mathsf T}H+HB$ ([[def-metric-compatible-connection-on-a-riemannian-vector-bundle]]).

[F6] If $G$ is continuous on a compact interval, differentiable in its interior, and an integrable function agrees there with $G'$, then its integral is the endpoint difference of $G$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F7] Every continuous real function on a compact interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[F8] The Riemann integral is linear on integrable functions ([[thm-linearity-of-the-integral]]).

[F9] Curvature is linear in its vector-field slots, in particular $R(0,T)T=0$ ([[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]]).

[F10] An affinely parametrized geodesic satisfies $D_t\dot\gamma=0$, with one-sided endpoint interpretation ([[def-geodesic-of-an-affine-connection]]).

## Proof

**Proof technique:** Differentiate the metric pairing on each smooth piece, apply Newton–Leibniz, then telescope the finite boundary sum.

1.1 On one piece, choose a local frame and let $u,w$ be the coefficient columns of fields $U,W$, with $H$ and $B$ as in [F4]–[F5]. Then $g(U,W)=u^{\mathsf T}Hw$. Differentiating this expression and using $H'=B^{\mathsf T}H+HB$ gives $$ \frac{d}{dt}g(U,W) =g(D_tU,W)+g(U,D_tW). $$ Apply this identity with $U=D_tV$. Since $V$ is $C^2$ and $W$ is $C^1$ on the piece, the function $G(t):=g(D_tV,W)$ is continuous up to its one-sided endpoints and satisfies $$G'=g(D_t^2V,W)+g(D_tV,D_tW)$$ in the interior. The identity is local in $t$, so no family of frames is selected. [F2, F3, F4, F5]

2.1 On each piece, set $$Q(t):=g(D_t^2V+R(V,\dot\gamma)\dot\gamma,W).$$ The functions $Q$ and $G'$ extend continuously to that piece's endpoints, so they are integrable by [F7]. The index-form integrand from [F1] obeys $$ g(D_tV,D_tW)-g(R(V,\dot\gamma)\dot\gamma,W)=G'(t)-Q(t) $$ by step 1.1 and bilinearity of $g$. Integral linearity [F8] and Newton–Leibniz [F6] therefore give, on $[t_{k-1},t_k]$, $$ \int_{t_{k-1}}^{t_k} \bigl(g(D_tV,D_tW)-g(R(V,\dot\gamma)\dot\gamma,W)\bigr)\,dt =g(D_tV(t_k^-),W(t_k))-g(D_tV(t_{k-1}^+),W(t_{k-1})) -\int_{t_{k-1}}^{t_k}Q(t)\,dt. $$ [F1, F6, F7, F8, step 1.1]

3.1 Sum the identity of step 2.1 over the fixed finite subdivision. At an interior breakpoint $t_j$, continuity of $W$ makes its two boundary contributions $$ g(D_tV(t_j^-),W(t_j))-g(D_tV(t_j^+),W(t_j)) =-g(\Delta_jD_tV,W(t_j)). $$ The two outer contributions are exactly $g(D_tV(b^-),W(b))-g(D_tV(a^+),W(a))$. Substituting the piecewise-sum definition [F1] for the supplied geodesic [F10] proves the displayed formula. Since it equals the subdivision independent $I_\gamma(V,W)$ for every common subdivision, the right-hand expression is independent of the chosen one as well. [F1, F2, F10, step 2.1]

4.1 If $W(a)=W(b)=0$, the outer endpoint term vanishes; with moving endpoints it must be retained. If $V=0$, the covariant-derivative terms vanish and [F9] makes the curvature term zero; if $W=0$, every term vanishes by bilinearity. The condition $a<b$ excludes a degenerate singleton interval, and all endpoint and breakpoint derivatives are one-sided. If $M$ is empty no supplied geodesic exists; in dimension zero all fields and both sides are zero. Dimension one requires no separate argument because no division by dimension or curvature symmetry is used in the local identity. The assumption [A1] is carried only through the declared index-form interface; this finite partition proof itself uses no countable selection and assumes no full Axiom of Choice. This is an equality, not an iff claim. [A1, F1, F2, F9, step 3.1] $\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, Proposition 10.14 and proof, printed pp.187–188 / PDF labels P203–204, lines 7455–7498. Lee states the jump formula for proper normal fields, which vanish at the endpoints. The proof above derives the formula directly for continuous piecewise $C^2/C^1$ fields, so it also records the outer endpoint term.
