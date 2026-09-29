---
id: prop-jacobi-fields-are-the-null-solutions-of-the-index-form-with-fixed-endpoints
kind: proposition
title: Jacobi fields are the null solutions of the index form with fixed endpoints
status: published
origin: pipeline
deps:
  - lem-integration-by-parts-for-the-index-form
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - def-jacobi-field
  - def-countable-choice
  - def-index-form-of-a-geodesic-segment
  - thm-existence-and-uniqueness-of-parallel-sections
  - def-parallel-section-along-a-curve
  - def-covariant-derivative-along-a-curve
  - thm-nonnegative-continuous-with-zero-integral-vanishes
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemann-curvature-four-tensor
  - def-riemann-curvature-four-tensor
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
    - title: Ved Datar, Lectures on Riemannian Geometry (2025)
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 21.2.6 and proof in Lecture 22, §22.1, printed pp.157–160 / PDF labels P164–167, lines 9007–9107
---

## Statement

Assume $\mathrm{AC}_\omega$ through the declared index-form dependencies.
Let $(M,g)$ be a Riemannian manifold and let
$\gamma:[a,b]\to M$ be an affinely parametrized geodesic with $a<b$. Let
$\mathcal X^2_{\mathrm{pw}}(\gamma)$ be the continuous fields along $\gamma$
that are $C^2$ on every piece of some finite subdivision, and put
$$\mathcal X^2_0(\gamma):=\{V\in\mathcal X^2_{\mathrm{pw}}(\gamma):V(a)=V(b)=0\}.$$
The radical of the index form restricted to $\mathcal X^2_0(\gamma)$ is
exactly
$$\{J\in\mathcal J(\gamma):J(a)=J(b)=0\};$$
that is, $V\in\mathcal X^2_0(\gamma)$ satisfies
$I_\gamma(V,W)=0$ for every $W\in\mathcal X^2_0(\gamma)$ if and only if $V$
is a smooth Jacobi field with both endpoint values zero.

For any smooth Jacobi field $J$ along $\gamma$, with no endpoint restriction
on the test fields, $I_\gamma(J,W)=0$ for every continuous piecewise-$C^1$
field $W$ if and only if
$$D_tJ(a)=D_tJ(b)=0.$$
Included endpoints use one-sided derivatives. Constant geodesics and
dimensions zero and one are included; no completeness assumption is needed.

## Facts & Assumptions

**Given:** The Riemannian manifold, nondegenerate affine geodesic segment,
and the finite-piece field domains in the statement.

[A1] The exact inherited choice assumption is $\mathrm{AC}_\omega$
([[def-countable-choice]]). It is carried by the declared index-form and
integration-by-parts interfaces: the index-form definition states symmetry
using curvature pair-interchange, whose supplied proof chain assumes
$\mathrm{AC}_\omega$. This item invokes those interfaces; its local tests and
finite gluing add no choice, and the proof does not use full AC.

[F1] The index form is defined for continuous piecewise-$C^1$ fields, and its
fixed-endpoint subspace consists of fields vanishing at $a$ and $b$
([[def-index-form-of-a-geodesic-segment]]).

[F2] For continuous piecewise-$C^2$ $V$ and continuous piecewise-$C^1$ $W$,
integration by parts gives the outer endpoint pairing, the negative derivative
jump pairings, and the integral of
$D_t^2V+R(V,\dot\gamma)\dot\gamma$
([[lem-integration-by-parts-for-the-index-form]]).

[F3] A smooth field is Jacobi exactly when
$$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$$
([[def-jacobi-field]]).

[F4] Prescribed value and covariant derivative at one time determine exactly
one smooth Jacobi field on the full supplied geodesic
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F5] From any parameter and any vector in its fiber there is a unique parallel
section on the whole interval; this result requires no choice
([[thm-existence-and-uniqueness-of-parallel-sections]]).

[F6] A section is parallel exactly when $D_tE=0$
([[def-parallel-section-along-a-curve]]).

[F7] Covariant differentiation obeys $D_t(fE)=f'E+fD_tE$
([[def-covariant-derivative-along-a-curve]]).

[F8] A continuous nonnegative real function on a nondegenerate compact
interval with zero integral vanishes everywhere
([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

[F9] The metric is positive definite on each tangent fiber, so
$g_p(v,v)=0$ implies $v=0$
([[def-riemannian-metric-and-riemannian-manifold]]).

[F10] Curvature is a smooth tensor along the supplied geodesic, so its
coefficients in a smooth parallel frame are smooth
([[def-riemann-curvature-four-tensor]]).

## Proof

**Proof technique:** Use the full endpoint-and-jump integration-by-parts
formula and test fields supported in individual smooth pieces and at the
breakpoints.

1.1 Let $J$ be a smooth Jacobi field with $J(a)=J(b)=0$, and let $W\in\mathcal X^2_0(\gamma)$. The integration-by-parts formula [F2] has no derivative jumps for $J$, its outer endpoint term vanishes because $W$ has zero endpoint values, and its interior residual vanishes by [F3]; hence $I_\gamma(J,W)=0$, proving the forward inclusion in the fixed-endpoint radical. [F1, F2, F3, given]

1.2 Let $V\in\mathcal X^2_0(\gamma)$ lie in the radical, and on each smooth piece set $A_V:=D_t^2V+R(V,\dot\gamma)\dot\gamma$. If $A_V(t_0)\ne0$ at an interior point, choose a parallel field $E$ with $E(t_0)=A_V(t_0)$ by [F5]; continuity gives $[u,v]$ strictly inside that piece with $g(A_V,E)>0$. Put $\phi(t)=(t-u)^2(v-t)^2$ on $[u,v]$ and zero elsewhere; since $E$ is smooth, $W=\phi E$ is continuous piecewise-$C^2$ and endpoint-zero. Then $h=\phi g(A_V,E)$ is continuous, nonnegative, and nonzero. Since $W$ vanishes near the subdivision points and outer endpoints, [F2] gives $I_\gamma(V,W)=-\int_a^b h(t)\,dt=0$, contradicting [F8]. Thus $A_V=0$ on each open piece. [F1, F2, F5, F8, F9, given]

1.3 For a smooth Jacobi field $J$ and arbitrary continuous piecewise-$C^1$ $W$, [F2] reduces to $I_\gamma(J,W)=g(D_tJ(b),W(b))-g(D_tJ(a),W(a))$. If both derivatives vanish, this is zero for every $W$. Conversely, if it is zero for every $W$, extend $D_tJ(a)$ to a parallel field $E_a$ and take $W_a(t)=\frac{b-t}{b-a}E_a(t)$, giving $0=I_\gamma(J,W_a)=-|D_tJ(a)|^2$; extend $D_tJ(b)$ to a parallel field $E_b$ and take $W_b(t)=\frac{t-a}{b-a}E_b(t)$, giving $0=I_\gamma(J,W_b)=|D_tJ(b)|^2$. Positive definiteness [F9] yields both endpoint derivatives zero. [F1, F2, F3, F5, F9, given]

2.1 At an interior breakpoint $t_j$, write $\Delta_jD_tV=D_tV(t_j^+)-D_tV(t_j^-)$. If it were nonzero, choose a parallel field $E$ with $E(t_j)=\Delta_jD_tV$ by [F5] and a piecewise-linear hat $\eta$ equal to $1$ at $t_j$, zero at its neighboring subdivision points and zero elsewhere. Then $W=\eta E$ is in $\mathcal X^2_0(\gamma)$ and vanishes at every other breakpoint. The residual is already zero by step 1.2, so [F2] gives $I_\gamma(V,W)=-g(\Delta_jD_tV,\Delta_jD_tV)<0$, contradicting the radical condition. Hence every derivative jump vanishes. [F2, F5, F9, step 1.2]

3.1 On each smooth piece, local parallel frames exist by extending a finite basis at any time using [F5]; uniqueness in both time directions makes each extension a frame. In that frame the components $x$ satisfy $x''+B(t)x=0$, with smooth $B$ by [F10] and the parallel rule [F6, F7], so the piecewise-$C^2$ solution is smooth by repeated differentiation. The global initial-data theorem [F4] gives a unique smooth Jacobi field $J_0$ with $J_0(a)=V(a)$ and $D_tJ_0(a)=D_tV(a)$. On the first piece $V$ and $J_0$ solve the same equation with the same data, so uniqueness [F4] makes them equal there; continuity and the zero derivative jump at each breakpoint give matching data on the next piece. Induction over the finite subdivision yields $V=J_0$ throughout, and $V(a)=V(b)=0$. This proves the reverse inclusion. [F3, F4, F5, F6, F7, F10, step 2.1]

4.1 A supplied segment excludes an empty-manifold instance. In dimension zero every field is zero; in dimension one the same integration-by-parts argument divides by no dimension and assumes no curvature sign. For a constant geodesic the residual equation is $D_t^2V=0$, characterized by the same tests. The condition $a<b$ excludes a degenerate interval, included endpoints use one-sided traces [F2], and the sole choice assumption is the inherited $\mathrm{AC}_\omega$ [A1]; every parallel section is uniquely determined by its individually specified initial vector, so no further choice is made. The fixed-endpoint iff is proved in steps 1.1–3.1, and the unrestricted iff in step 1.3. [A1, F2, F5, F9, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] $\square$

## Source locator

Ved Datar, *Lectures on Riemannian Geometry*, Proposition 21.2.6 and its proof
in Lecture 22, §22.1, printed pp.157–160 / PDF labels P164–167, lines
9007–9107. The local argument here spells out the admissible piecewise-$C^2$
test class, endpoint conditions, breakpoint tests, and one-sided boundary
pairings. [Source PDF](https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf)
