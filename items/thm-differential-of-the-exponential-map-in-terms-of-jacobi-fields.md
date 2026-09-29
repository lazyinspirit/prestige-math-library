---
id: thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields
kind: theorem
title: Differential of the exponential map in terms of Jacobi fields
status: draft
origin: pipeline
deps:
  - def-affine-connection-on-a-smooth-manifold
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-domain-and-exponential-map-of-a-connection
  - def-geodesic-of-an-affine-connection
  - def-geodesic-variation
  - def-levi-civita-connection
  - prop-exponential-map-scales-geodesic-time
  - prop-identity-maps-and-composites-of-smooth-maps-are-smooth
  - thm-the-differential-sends-curve-velocities-to-composite-curve-velocities
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
  - thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field
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
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Proposition 22.2.1 forward direction and full proof, printed pp.162-163 (PDF labels P169-170); Corollary 22.2.2 and proof, printed p.163 (PDF label P170)."
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "Lemma 5.3 and proof, §5, printed pp.17-18 (PDF labels P17-18)."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Lemma 10.7 and proof, printed p.178 (PDF label P194), the radial normal-coordinate special case."

---

## Statement

Assume exactly $\mathrm{AC}_\omega$. Let $(M,g)$ be a smooth Riemannian
manifold without boundary, let $p\in M$, let $v\in\mathcal E_p$ be in the
domain of $\exp_p$, and let $w\in T_pM$. Define
$$\gamma:[0,1]\to M,\qquad \gamma(t)=\exp_p(tv).$$
There is a unique Jacobi field $J$ along $\gamma$ with
$$J(0)=0,\qquad D_tJ(0)=w,$$
where the derivative at $0$ is one-sided. For every $t\in[0,1]$,
$$J(t)=d(\exp_p)_{tv}(tw),$$
using the canonical identification $T_{tv}(\mathcal E_p)\cong T_pM$,
and in particular $d(\exp_p)_v(w)=J(1)$. The exponential differential is
evaluated at points $tv\in\mathcal E_p$, as ensured by the geodesic-time
scaling property. Constant central geodesics, zero initial data, and dimension
zero are included. No completeness hypothesis is imposed.

## Facts & Assumptions

**Given:** The boundaryless Riemannian manifold, $p\in M$, $v\in\mathcal E_p$,
and $w\in T_pM$, under the stated $\mathrm{AC}_\omega$ assumption.

[F1] $\mathrm{AC}_\omega$ is the stated countable-choice assumption
([[def-countable-choice]]). Under this assumption, $\mathcal E_p$ is open in
$T_pM$ and $\exp_p:\mathcal E_p\to M$ is smooth
([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).

[F2] If $u\in\mathcal E_p$, then $tu\in\mathcal E_p$ for $t\in[0,1]$ and
$\exp_p(tu)=\gamma_{p,u}(t)$ ([[prop-exponential-map-scales-geodesic-time]]).
The curve $\gamma_{p,u}$ has initial value $p$ and initial velocity $u$
([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]), and is an
affinely parametrized geodesic ([[def-domain-and-exponential-map-of-a-connection]],
[[def-geodesic-of-an-affine-connection]]).

[F3] A smooth map $F:(-\varepsilon,\varepsilon)\times[0,1]\to M$ is a
geodesic variation when every longitudinal curve is an affinely parametrized
geodesic; its variation field is $\partial_sF(0,t)$
([[def-geodesic-variation]]).

[F4] The variation field of a smooth geodesic variation is a Jacobi field
([[thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field]]).

[F5] On the nondegenerate interval $[0,1]$, each pair of initial data
$J(0),D_tJ(0)$ determines exactly one Jacobi field along $\gamma$
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F6] For a smooth map $f$ and a smooth curve $c$ through $x$,
$df_x(\dot c(0))$ is the velocity of $f\circ c$ at $0$
([[thm-the-differential-sends-curve-velocities-to-composite-curve-velocities]]).

[F7] Along a curve, the covariant derivative is induced by the pullback
connection ([[def-covariant-derivative-along-a-curve]]); a Levi-Civita
connection is an affine connection ([[def-levi-civita-connection]],
[[def-affine-connection-on-a-smooth-manifold]]). Its connection rules give
the coordinate formula $(D_tY)^i=(Y^i)' + \Gamma^i_{jk}\dot\gamma^jY^k$.

[F8] Smooth maps compose to smooth maps
([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal E_p$ is open and contains $v$, choose $\varepsilon>0$ such that $v+sw\in\mathcal E_p$ for every $|s|<\varepsilon$; if $w=0$ any positive $\varepsilon$ works. For each such $s$ and every $t\in[0,1]$, [F2] gives $t(v+sw)\in\mathcal E_p$ and $\exp_p(t(v+sw))=\gamma_{p,v+sw}(t)$. The map $(s,t)\mapsto t(v+sw)$ is smooth into $\mathcal E_p$, so [F1] and [F8] make $F(s,t):=\exp_p(t(v+sw))$ smooth on the common rectangle $(-\varepsilon,\varepsilon)\times[0,1]$. Each longitudinal curve is the affinely parametrized geodesic $\gamma_{p,v+sw}$ restricted to $[0,1]$, so [F3] makes $F$ a geodesic variation with central curve $\gamma$. [F1, F2, F3, F8, given]

2.1 Put $J(t)=\partial_sF(0,t)$. By [F4], $J$ is Jacobi, and $F(s,0)=p$ gives $J(0)=0$. For fixed $t\in[0,1]$, the curve $c_t(s)=t(v+sw)$ lies in $\mathcal E_p$ and has $c_t(0)=tv$, $\dot c_t(0)=tw$. Applying [F6] to $\exp_p\circ c_t$ yields $J(t)=\left.\frac{d}{ds}\right|_{s=0}\exp_p(c_t(s))=d(\exp_p)_{tv}(tw)$. Here $T_{tv}(\mathcal E_p)\cong T_pM$ canonically because $\mathcal E_p$ is open in the vector space $T_pM$. At $t=0$, $c_0$ is constant and both sides vanish. [F2, F4, F6, step 1.1]

3.1 To compute the initial covariant derivative, take a chart about $p$ and write $F^i$ for its coordinate functions near $(0,0)$ and $J^i(t)=\partial_sF^i(0,t)$. By [F7], $(D_tJ)^i=(J^i)' + \Gamma^i_{jk}\dot\gamma^jJ^k$; since $F(s,0)=p$, $J(0)=0$, so the connection term at $0$ vanishes. The mixed partial derivatives commute, and [F2] gives $\partial_tF^i(s,0)=v^i+sw^i$ in the fixed tangent space $T_pM$. Therefore $(D_tJ)^i(0)=\partial_t\partial_sF^i(0,0)=\partial_s\partial_tF^i(0,0)=w^i$, including the one-sided derivative, so $D_tJ(0)=w$. [F2, F7, step 2.1, algebra]

4.1 By [F5], $J$ is the unique Jacobi field with initial data $(0,w)$, so step 2.1 proves the formula for every $t$, and at $t=1$ gives $d(\exp_p)_v(w)=J(1)$. If $M$ is empty there is no supplied $p$; in dimension zero $v=w=0$ and the unique field and both sides are zero; in dimension one the argument is unchanged. If $v=0$, the central geodesic is constant and the same construction applies; if $w=0$, the variation is constant in $s$ and both sides are zero. The endpoints $t=0,1$ use one-sided derivatives. The only choice assumption is exactly $\mathrm{AC}_\omega$, inherited through the exponential domain and smooth geodesic-flow suppliers [F1, F2]; selecting one neighborhood size for the supplied $v,w$ uses openness and no choice function, and no full Axiom of Choice is used. This is a one-way formula, not an iff claim. [F1, F2, F5, step 1.1, step 2.1, step 3.1] ∎
