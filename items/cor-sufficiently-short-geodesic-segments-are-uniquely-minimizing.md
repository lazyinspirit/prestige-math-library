---
id: "cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing"
kind: "corollary"
title: "Sufficiently short geodesic segments are uniquely minimizing"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-existence-of-normal-neighborhoods","def-normal-neighborhood-and-normal-coordinate-chart","thm-gram-schmidt-orthonormalisation","prop-exponential-map-scales-geodesic-time","thm-radial-geodesics-minimize-length-in-a-normal-neighborhood","cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood","prop-components-of-a-topological-manifold-are-open-and-at-most-countable","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Corollary 18.1.3 and proof, pp.135--137
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g)$ be a boundaryless Riemannian manifold, not necessarily connected, and $p\in M$. Write $C_p$ for the connected component of $p$. Throughout, $d_g(p,q)$ for $q\in C_p$ means the Riemannian distance of the connected Riemannian manifold $(C_p,g|_{C_p})$; no distance between distinct components is asserted. Suppose $\exp_p:B_\rho(0_p)\to U$ is a diffeomorphism, where $\rho>0$, and let $\gamma:[0,1]\to M$ be the geodesic with $\gamma(0)=p$ and initial velocity $v=\dot\gamma(0)$ satisfying $|v|_{g_p}<\rho$. Then
$$\gamma(t)=\exp_p(tv),\qquad L_g(\gamma)=d_g(p,\gamma(1))=|v|_{g_p}.$$
Among all piecewise smooth curves in $M$ with the same endpoints, equality with this minimum occurs exactly for the monotone radial reparametrizations of $\gamma$ described in [[thm-radial-geodesics-minimize-length-in-a-normal-neighborhood]]; when $v=0$, the only minimizer is the constant curve.

Consequently, every point $p$ of a boundaryless Riemannian manifold has an open neighbourhood $W_p$ and a radius $\rho_p>0$ such that every geodesic $\gamma_{p,v}|_{[0,1]}$ with $|v|_{g_p}<\rho_p$ is minimizing with this uniqueness property and has image in $W_p$.

## Facts & Assumptions

**Given:** The normal ball and geodesic in the first claim, or the point in the consequence.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] Under [A1], [[prop-exponential-map-scales-geodesic-time]] identifies the geodesic with initial data $(p,v)$ as $t\mapsto\exp_p(tv)$ whenever defined.

[F2] Under [A1], [[cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood]] gives $d_g(p,\exp_p(v))=|v|_{g_p}$ and says that every competitor leaving $U$ has strictly larger length. [[thm-radial-geodesics-minimize-length-in-a-normal-neighborhood]] gives the radial length and characterizes equality for every piecewise smooth competitor contained in $U$.

[F3] Under [A1], [[thm-existence-of-normal-neighborhoods]] and [[def-normal-neighborhood-and-normal-coordinate-chart]] supply at each $p$ an exponential diffeomorphism on an open neighbourhood of $0_p$. Applying [[thm-gram-schmidt-orthonormalisation]] to one finite basis gives orthonormal coordinates in which that open set contains a positive-radius Euclidean ball.

[F4] [[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]] makes $C_p$ open. Its restricted charts and metric make $(C_p,g|_{C_p})$ a connected boundaryless Riemannian manifold. Every continuous curve starting at $p$ stays in $C_p$, since its image is connected; in particular the radial paths $t\mapsto\exp_p(tw)$ show $U\subseteq C_p$. Geodesic equations and their uniqueness are local, so restricting the metric to the open component does not change the exponential map at $p$, the lengths of curves there, or the normal-ball diffeomorphism. Thus [F2], whose distance hypothesis requires connectedness, applies on $C_p$; its strict outside-$U$ inequality applies as well to every competitor in $M$ from $p$ to a point of $U$.

## Proof

**Proof technique:** direct.

1.1 By [F4], the component $C_p$ is open, connected, and itself a boundaryless Riemannian manifold; all competitors from $p$ to a point of $U$ remain in $C_p$. The local exponential map and curve lengths agree with those for the restricted metric, so [F2] is applicable there and the distance in the Statement is well-defined. By [F1], $\gamma(t)=\exp_p(tv)$ on $[0,1]$. Since $|tv|\le|v|<\rho$, its image lies in $U$. The radial calculation in [F2] gives $L_g(\gamma)=|v|_{g_p}$, and the componentwise local distance formula gives $d_g(p,\gamma(1))=|v|_{g_p}$, so $\gamma$ attains the infimum over all piecewise $C^1$ competitors and hence over the piecewise smooth ones. [F1, F2, F4, given]

2.1 Let $c$ be a piecewise smooth curve in $M$ with the same endpoints and $L_g(c)=|v|_{g_p}$. Its connected image lies in $C_p$ by [F4]. If its image left $U$, the strict clause of [F2] applied on $C_p$ would give $L_g(c)>|v|_{g_p}$, a contradiction. Hence $c$ lies in $U$, and the equality characterization in [F2] says that, for $v\ne0$, it is exactly a continuous piecewise smooth nondecreasing radial reparametrization from radius $0$ to radius $|v|_{g_p}$ in the direction $v/|v|_{g_p}$. Conversely, every such reparametrization has length $|v|_{g_p}$ by [F2]. For $v=0$, [F2] says equality occurs exactly for the constant curve. This proves both uniqueness directions. [F2, F4, step 1.1]

3.1 For the consequence, fix $p$, with no connectedness assumption on $M$. By [F3], choose the one supplied normal source $D\subseteq T_pM$ and instantiate one basis of the finite-dimensional tangent space; Gram--Schmidt gives an orthonormal basis. The coordinate image of $D$ is open about $0$, so it contains $B_{\rho_p}(0)$ for some witness $\rho_p>0$. Thus $B_{\rho_p}(0_p)\subseteq D$, and restriction makes $\exp_p:B_{\rho_p}(0_p)\to W_p:=\exp_p(B_{\rho_p}(0_p))$ a diffeomorphism onto an open neighbourhood of $p$. By [F4], $W_p\subseteq C_p$ and all competitor curves from $p$ stay in $C_p$; hence steps 1.1--2.1 apply to every $|v|_{g_p}<\rho_p$ with distance understood on $C_p$. [F3, F4, step 1.1, step 2.1]

4.1 Empty $M$ has no point $p$. In dimension zero, $T_pM=\{0_p\}$ and only the constant case occurs; choose any $\rho_p>0$ since the tangent ball and its image are singletons. In dimension one the two possible radial directions are distinguished by $v$. On a disconnected $M$, the connected component $C_p$ is canonical, open, and contains every competitor curve from $p$, so neither the distance notation nor the global uniqueness claim compares points in different components. The strict inequality $|v|<\rho$ excludes the sphere endpoint and ensures every $tv$, including $t=0,1$, stays in the source ball. The zero vector, constant curve, and possible pauses in a nonzero monotone reparametrization were treated in step 2.1. Both equality directions were proved there. Assumption [A1] is inherited through [F1]--[F3]; [F4] and choosing finitely at one fixed point add no choice principle. [A1, F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎

## Source locator

Datar, Corollary 18.1.3 and its proof, pp.135--137. The source proves radial minimality and its equality case; the global exclusion of competitors leaving the normal ball is supplied by the preceding local-distance corollary.
