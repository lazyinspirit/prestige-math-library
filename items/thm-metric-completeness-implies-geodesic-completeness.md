---
id: "thm-metric-completeness-implies-geodesic-completeness"
kind: "theorem"
title: "Metric completeness implies geodesic completeness"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-countable-choice","def-geodesically-complete-riemannian-manifold","def-geodesic-of-an-affine-connection","thm-existence-uniqueness-and-smooth-dependence-of-geodesics","prop-geodesics-have-constant-speed-for-a-metric-compatible-connection","prop-affine-reparametrization-of-a-geodesic-is-a-geodesic","lem-a-finite-endpoint-of-a-maximal-unit-speed-geodesic-produces-a-cauchy-curve","def-cauchy-in-metric","def-complete-metric-space","def-metric-convergence","thm-riemannian-distance-is-a-metric","thm-the-riemannian-distance-topology-is-the-manifold-topology","def-induced-tangent-bundle-chart","def-metric-topology","cor-heine-borel-in-the-product-topology","thm-compactness-under-continuous-maps","lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric","lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 19.2.1, implication (1) implies (2), pp.141–142
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    - title: Ben Andrews, Geodesics and Completeness, Theorem 11.5.1, implication (1) implies (2), printed pp.106–107
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "contradiction"
---

## Statement

Assume $\mathrm{AC}_\omega$. If a connected Riemannian manifold $M$ without
boundary is complete for its Riemannian distance $d_g$, then $M$ is
geodesically complete: every maximal geodesic is defined on all of
$\mathbb R$.

## Facts & Assumptions

**Given:** A connected boundaryless Riemannian manifold $(M,g)$ whose metric space $(M,d_g)$ is complete. The boundaryless restriction is [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]].

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] Under [A1], [[def-geodesically-complete-riemannian-manifold]] formulates geodesic completeness using the unique maximal geodesic through each initial vector, and [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] supplies that uniqueness. Constant curves are geodesics by [[def-geodesic-of-an-affine-connection]], [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]] gives constant speed, and [[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]] gives the affine rescalings used below.

[F2] [[lem-a-finite-endpoint-of-a-maximal-unit-speed-geodesic-produces-a-cauchy-curve]] gives the exact two-parameter Cauchy-tail estimate at a finite endpoint. [[def-cauchy-in-metric]], [[def-complete-metric-space]], and [[def-metric-convergence]] say that a Cauchy sequence in $(M,d_g)$ converges to a point of $M$ and give the corresponding epsilon condition.

[F3] [[thm-riemannian-distance-is-a-metric]] supplies the triangle inequality, and [[thm-the-riemannian-distance-topology-is-the-manifold-topology]] identifies metric convergence with manifold convergence.

[F4] [[def-induced-tangent-bundle-chart]] identifies the tangent bundle over a coordinate chart with an open subset of $\mathbb R^n\times\mathbb R^n$. [[def-metric-topology]] supplies a Euclidean ball inside every open coordinate image about the chosen point, [[cor-heine-borel-in-the-product-topology]] makes closed bounded coordinate balls and their finite products compact, and [[thm-compactness-under-continuous-maps]] preserves compactness under the inverse tangent-bundle chart.

[F5] [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]] gives $c|v|_2^2\le g_x(v,v)$ uniformly over a compact set in one chart, for some $c>0$.

[F6] Under [A1], [[lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset]] extends a geodesic whenever its velocity lift remains in a compact subset of $TM$ along a tail approaching a finite endpoint.

## Proof

1.1 Suppose, contrary to the conclusion, that $M$ is not geodesically complete. By [F1], some initial vector has a maximal geodesic $\gamma:I=(a,b)\to M$, with $0\in I$, for which at least one endpoint is finite. Reversing the parameter by [F1] if necessary, assume $b<\infty$. [A1, F1, assume-contra]

2.1 Let $c=|\gamma'|_g$, constant by [F1]. If $c=0$, then in particular $\gamma'(0)=0$. The constant curve on $\mathbb R$ at $\gamma(0)$ is a geodesic with those same initial data by [F1], so initial-value uniqueness says that it is the unique maximal geodesic and contradicts the finite endpoint in step 1.1. Hence $c>0$. Define $\eta:cI\to M$ by $\eta(s)=\gamma(s/c)$. Then [F1] makes $\eta$ a unit-speed geodesic with finite right endpoint $\beta=cb$. Any extension of $\eta$ past $\beta$ would, after the inverse rescaling, extend $\gamma$ past $b$, so $\eta$ is maximal. [F1, step 1.1, algebra]

3.1 Put $s_k=\beta-\beta/(k+2)$ for $k\in\mathbb N$. Since $0<\beta<\infty$, each $s_k\in(0,\beta)\subseteq cI$ and $s_k\uparrow\beta$. The Cauchy-tail estimate [F2] makes $(\eta(s_k))$ a Cauchy sequence: after the time belonging to a given $\varepsilon$, every sufficiently large $s_k$ lies in that tail. Completeness in [F2] therefore supplies $q\in M$ with $\eta(s_k)\to q$ in $d_g$. [F2, step 2.1, algebra]

4.1 In fact the whole curve tends to $q$ as $s\uparrow\beta$. Given $\varepsilon>0$, apply [F2] with $\varepsilon/2$ to obtain a tail time $T$. By convergence and $s_k\uparrow\beta$, choose one $k$ with $s_k>T$ and $d_g(\eta(s_k),q)<\varepsilon/2$. Then [F2] and the triangle inequality [F3] give, for every $T<s<\beta$, $$d_g(\eta(s),q)\le d_g(\eta(s),\eta(s_k))+d_g(\eta(s_k),q)<\varepsilon.$$ Thus metric convergence of the entire tail, and hence manifold convergence by [F3], is established without selecting a sequence of witnesses. [F2, F3, step 3.1]

5.1 Put $m=\dim M$ and first suppose $m\ge1$. Choose one coordinate chart $x:U\to x(U)$ about $q$. Since $x(U)$ is Euclidean-open, [F4] gives $\rho>0$ with $B_\rho(x(q))\subseteq x(U)$; put $R=\rho/2$ and $r=R/2$. Then the closed Euclidean ball $\overline B_R(x(q))$ lies in $x(U)$. Let $K_0=x^{-1}[\overline B_R(x(q))]$. By [F4], $K_0$ is compact. Step 4.1 implies that $\eta(s)$ lies in the smaller set $x^{-1}[B_r(x(q))]\subseteq K_0$ for all sufficiently late $s$. [F3, F4, step 4.1, choose]

6.1 Let $\Theta:\pi^{-1}(U)\to x(U)\times\mathbb R^m$ be the induced tangent-bundle chart. By [F5], there is $c_0>0$ such that $c_0|v|_2^2\le g_y(v,v)$ for $y\in K_0$. Since $\eta$ has unit speed, its fibre coordinate satisfies $|\eta'(s)|_2\le c_0^{-1/2}$ on the late tail. The coordinate set $$P=\overline B_R(x(q))\times\overline B_{c_0^{-1/2}}(0) \subseteq\mathbb R^{2m}$$ is closed and bounded, hence compact by [F4]. Its inverse-chart image $K:=\Theta^{-1}(P)$ is a compact subset of $TM$ by [F4], and the late velocity lift $(\eta(s),\eta'(s))$ lies in $K$. [F4, F5, step 5.1]

7.1 If $m\ge1$, applying [F6] to the compact set $K$ from step 6.1 extends $\eta$ past $\beta$, contrary to its maximality in step 2.1. If $m=0$, every tangent vector is zero, so the nonzero speed $c>0$ from step 2.1 was already impossible. Thus the incomplete maximal geodesic chosen in step 1.1 cannot exist. [A1, F1, F6, step 1.1, step 2.1, step 6.1, contradiction]

8.1 A connected empty manifold is allowed: it has no initial vectors and is geodesically complete vacuously. The zero-dimensional nonempty case was handled in step 7.1, and dimension one is the case $m=1$ of the compact product construction. Zero initial velocity was separated in step 2.1; the nonempty maximal interval contains $0$, so a finite right endpoint is positive and the explicit sequence in step 3.1 is defined. Reversal in step 1.1 handles the finite left-endpoint case, and neither endpoint is assumed to belong to the maximal open interval. The only choice principle is [A1], used through [F1] and [F6] for the library's global tangent-bundle/geodesic construction. The one limit, chart, two radii, and finite-dimensional compact set are finitely many existential witnesses and need no further choice. The result is one implication, not an equivalence. The contradiction in step 7.1 discharges the assumption in step 1.1 and proves geodesic completeness by [F1]. [A1, F1, step 1.1, step 2.1, step 3.1, step 5.1, step 6.1, discharge-contradiction: step 1.1, step 7.1] ∎

## Source locator

Datar proves $(1)\Rightarrow(2)$ in Theorem 19.2.1 on pp.141--142 by taking a Cauchy sequence on a unit-speed geodesic and then using a uniform local exponential domain near its limit. Andrews proves the same implication in Theorem 11.5.1, printed pp.106--107, by identifying the limiting tail as a radial minimizing geodesic. The proof here keeps their Cauchy-limit core and uses the preceding compact velocity-lift continuation lemma for the final extension; steps 5.1--6.1 prove its compactness hypothesis rather than assuming it.
