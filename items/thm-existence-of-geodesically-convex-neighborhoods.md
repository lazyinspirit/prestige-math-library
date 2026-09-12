---
id: "thm-existence-of-geodesically-convex-neighborhoods"
kind: "theorem"
title: "Existence of geodesically convex neighborhoods"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-existence-of-normal-neighborhoods","def-normal-neighborhood-and-normal-coordinate-chart","thm-gram-schmidt-orthonormalisation","thm-existence-uniqueness-and-smooth-dependence-of-geodesics","thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth","thm-the-differential-of-exp-p-at-zero-is-the-identity","lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space","prop-properties-of-normal-coordinates-at-the-center","prop-coordinate-geodesic-equation","prop-geodesics-have-constant-speed-for-a-metric-compatible-connection","lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric","thm-compactness-under-continuous-maps","cor-heine-borel-in-the-product-topology","thm-extreme-value-r","cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing","def-product-topology","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 18.0.1 and proof, pp.133--137
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    - title: Roland Steinbauer, Riemannian Geometry, Theorem 2.2.7 and proof, printed pp.49--50 (PDF pp.52--53)
      url: https://www.mat.univie.ac.at/~stein/teaching/skripten/rg-2025-12-11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g)$ be a boundaryless Riemannian manifold. An open set $W\subseteq M$ is called **strongly geodesically convex** here when, for every ordered pair $(x,y)\in W\times W$, there is a unique affinely parametrized geodesic $\gamma_{x,y}:[0,1]\to M$ that globally minimizes length from $x$ to $y$, its image lies in $W$, and $(x,y,t)\mapsto\gamma_{x,y}(t)$ is smooth.

Every point of $M$ has a strongly geodesically convex neighbourhood. More precisely, the neighbourhood may be chosen inside any prescribed open neighbourhood of the point, and it may be chosen so that every piecewise smooth curve attaining the global minimum between two of its points is a monotone reparametrization of the displayed connector. Every nonempty intersection of a positive finite family of strongly geodesically convex open sets is again strongly geodesically convex.

## Facts & Assumptions

**Given:** A point $p$ of the boundaryless Riemannian manifold and, for the relative form, an open neighbourhood $O$ of $p$.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] Under [A1], [[thm-existence-of-normal-neighborhoods]], [[def-normal-neighborhood-and-normal-coordinate-chart]], and [[thm-gram-schmidt-orthonormalisation]] give an orthonormal normal coordinate chart $z=(z^1,\ldots,z^n)$ centred at $p$, which may be restricted into $O$. [[prop-properties-of-normal-coordinates-at-the-center]] gives $z(p)=0$ and $\Gamma^i{}_{jk}(p)=0$.

[F2] Under [A1], [[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]] makes the total exponential map smooth on an open neighbourhood of the zero section, and [[thm-the-differential-of-exp-p-at-zero-is-the-identity]] gives its vertical differential at $0_p$. The coordinate [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] turns an invertible coordinate derivative into a local diffeomorphism; [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] supplies the same unique geodesic evaluation used by the exponential map.

[F3] [[cor-heine-borel-in-the-product-topology]] makes a closed coordinate ball compact, [[thm-compactness-under-continuous-maps]] preserves compactness under its coordinate inverse, and [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]] gives uniform constants $0<c\le C$ comparing the Riemannian and Euclidean tangent norms above that compact ball.

[F4] [[prop-coordinate-geodesic-equation]] is the coordinate geodesic equation. [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]] gives constant Riemannian speed. [[thm-extreme-value-r]] gives an attained maximum of a continuous real function on $[0,1]$.

[F5] Under [A1], [[cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing]] says that every radial segment inside a normal exponential ball is globally minimizing and characterizes every equal-length piecewise smooth competitor as a monotone radial reparametrization. [[def-product-topology]] supplies product neighbourhoods inside an open subset of $M\times M$.

## Proof

**Proof technique:** direct.

1.1 If $n=\dim M\ge1$, take from [F1] an orthonormal normal chart $z:V\to z(V)$ centred at $p$ and restricted so that $V\subseteq O$. Define $B_{jk}(q)=\delta_{jk}-\sum_i z^i(q)\Gamma^i{}_{jk}(q)$. At $p$ this smooth symmetric matrix is the identity by [F1]. By continuity, after shrinking $V$, one has $|B_{jk}(q)-\delta_{jk}|<1/(2n)$ for every $q\in V$ and every $j,k$. Thus, for $a\ne0$, $$\sum_{j,k}B_{jk}(q)a^ja^k\ge |a|_2^2-\frac1{2n}\left(\sum_j|a^j|\right)^2\ge\frac12|a|_2^2>0,$$ where the last inequality is the finite Cauchy--Schwarz calculation $(\sum_j|a^j|)^2\le n\sum_j(a^j)^2$. Hence $B$ is positive definite throughout $V$. [F1, algebra]

1.2 Let $\mathcal E$ be the total exponential domain and set $\Phi:\mathcal E\to M\times M$ by $\Phi(q,v)=(q,\exp_qv)$. In tangent-bundle and product coordinates at $(p,0_p)$, [F2] and the identity $\exp_q(0_q)=q$ give $D\Phi_{(p,0_p)}(X,Y)=(X,X+Y)$, whose inverse is $(A,D)\mapsto(A,D-A)$. Applying the Euclidean inverse theorem in those charts gives an open neighbourhood $D$ of $(p,0_p)$ on which $\Phi$ is a diffeomorphism onto an open neighbourhood of $(p,p)$. Intersecting $D$ with the inverse images of $V$ under the base and exponential projections preserves these properties and ensures that $(q,v)\in D$ implies $q,\exp_qv\in V$. [F2, given]

1.3 Let $W_1,\ldots,W_m$ be a positive finite family of strongly geodesically convex open sets with nonempty intersection $I$. It is open. For $x,y\in I$, every $W_i$ supplies a normalized globally minimizing geodesic from $x$ to $y$. The uniqueness clause for $W_1$ makes all these geodesics equal, so their common image lies in every $W_i$ and hence in $I$. The connector on $I\times I\times[0,1]$ is the restriction of the smooth connector for $W_1$, and its global uniqueness is unchanged. Hence $I$ is strongly geodesically convex. [given]

2.1 In the tangent-bundle coordinates used in step 1.2, choose an open coordinate ball $G$ about $p$, with compact closure $K\subseteq V$, and $R>0$ such that $P_R=\{(q,v):q\in G,\ |v|_2<R\}\subseteq D$. The compactness assertions in [F3] apply to $K$. Take their constants $0<c\le C$. Choose $0<\rho<\sqrt cR$, then choose $0<r<R$ with $\sqrt C r<\rho$, and put $P_r=\{(q,v):q\in G,\ |v|_2<r\}$. For $q\in G$, the Riemannian ball $B_\rho(0_q)$ lies in the fibre of $P_R$, whereas the fibre of $P_r$ lies in $B_\rho(0_q)$. Restricting the diffeomorphism $\Phi|_D$ therefore shows that $\exp_q:B_\rho(0_q)\to U_q:=\exp_q(B_\rho(0_q))$ is a normal-ball diffeomorphism. [F2, F3, step 1.2]

3.1 Since $P_r$ is open, $\Phi(P_r)$ is an open neighbourhood of $(p,p)$. By [F5], choose a positive coordinate radius $s$ so small that $W:=\{q\in G:|z(q)|_2<s\}$ satisfies $W\times W\subseteq\Phi(P_r)$. For $(x,y)\in W\times W$, write $\Phi^{-1}(x,y)=(x,v(x,y))$ and put $\gamma_{x,y}(t)=\exp_x(tv(x,y))$. The inverse and exponential maps are smooth, so this curve depends smoothly on $(x,y,t)$. Step 2.1 gives $|v(x,y)|_{g_x}<\rho$ and $W\subseteq U_x$. Moreover $(x,tv(x,y))\in P_r\subseteq D$ for $0\le t\le1$, so the entire connector lies in $V$ even before the sharper conclusion below. [F2, F3, F5, step 1.2, step 2.1]

4.1 Fix $x,y\in W$. If $x=y$, injectivity of $\Phi|_D$ gives $v(x,x)=0_x$ and the connector is constant. Suppose $x\ne y$, and set $h(t)=\sum_i(z^i(\gamma_{x,y}(t)))^2$. With $a^j(t)=d(z^j\circ\gamma_{x,y})/dt$, differentiating twice and using the coordinate geodesic equation [F4] gives $$h''(t)=2\sum_{j,k}\left(\delta_{jk}-\sum_i z^i(\gamma_{x,y}(t))\Gamma^i{}_{jk}(\gamma_{x,y}(t))\right)a^j(t)a^k(t)=2B_{\gamma_{x,y}(t)}(a(t),a(t)).$$ The geodesic has nonzero constant speed by [F4], so $a(t)\ne0$ and step 1.1 gives $h''(t)>0$ for $0<t<1$. [F4, step 1.1, step 3.1]

5.1 If the connector left $W$, [F4] would give a point $t_0\in(0,1)$ where $h$ attains its maximum, because $h(0),h(1)<s^2$ while some value is at least $s^2$. At an interior maximum, for small $u>0$, $[h(t_0+u)-2h(t_0)+h(t_0-u)]/u^2\le0$, and passage to the limit gives $h''(t_0)\le0$, contradicting step 4.1. Thus $\gamma_{x,y}([0,1])\subseteq W$, including the possibility that it merely touches the coordinate sphere. [F4, step 3.1, step 4.1, assume-contra, discharge-contradiction]

6.1 For fixed $x\in W$, step 2.1 supplies the normal exponential ball $B_\rho(0_x)$ and step 3.1 puts the endpoint vector $v(x,y)$ inside it. By [F5], $\gamma_{x,y}$ globally minimizes length from $x$ to $y$. Any other globally minimizing affinely parametrized geodesic on $[0,1]$ is an equal-length piecewise smooth competitor, so [F5] makes it a monotone radial reparametrization of $\gamma_{x,y}$. Constant speed from [F4] and the endpoint values force that radial parameter to be $t|v(x,y)|_{g_x}$ when $x\ne y$; when $x=y$, zero length forces zero speed and the constant curve. Thus the normalized minimizing geodesic is unique. Together with steps 3.1 and 5.1, $W$ is strongly geodesically convex and lies in the prescribed $O$. [F4, F5, step 2.1, step 3.1, step 5.1]

7.1 If $M$ is empty there is no point $p$ and the existence assertion is vacuous. In dimension zero, every point is an open singleton, and that singleton is strongly convex with its constant connector; a nonempty finite intersection of such sets is again a singleton. Dimension one is included in steps 1.1--6.1. Coincident endpoints and zero tangent vector were treated in steps 4.1 and 6.1; the closed parameter endpoints are included, whereas every tangent ball and coordinate ball used in the construction is open. The intersection assertion excludes the empty family, whose intersection would be all of $M$, and assumes the resulting intersection is nonempty. Assumption [A1] is used exactly through [F1], [F2], and [F5] for the existing global geodesic/exponential constructions; the one fixed chart, finite coefficient shrink, uniquely defined inverse, finite intersection, and compact extrema add no choice. [A1, F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 1.3] ∎

## Source locator

Datar, Theorem 18.0.1 and proof, printed pp.133--137, supplies the endpoint-map and normal-ball minimality argument but only remarks that a refinement keeps the connector inside the chosen neighbourhood. Steinbauer, Theorem 2.2.7 and equations (2.2.8)--(2.2.11), printed pp.49--50 (PDF pp.52--53), supplies that refinement: the squared normal-coordinate radius has positive second derivative along every nonconstant local connector, contradicting an interior maximum. The global-minimizer formulation then makes the finite-intersection clause immediate.
