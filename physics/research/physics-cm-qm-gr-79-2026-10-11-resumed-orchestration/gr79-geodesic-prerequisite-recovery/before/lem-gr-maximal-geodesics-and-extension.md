---
id: lem-gr-maximal-geodesics-and-extension
kind: lemma
title: "Convergent causal ends are extendible, maximal geodesics have no limit, and Cauchy sets are acausal"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-spacelike-hypersurfaces-and-cauchy-sets, thm-gr-local-geodesics-and-exponential-map, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, def-geodesic-of-an-affine-connection, lem-gr-parallel-transport-and-geodesic-speed, prop-coordinate-geodesic-equation, def-christoffel-symbols-of-an-affine-connection, thm-existence-and-uniqueness-of-a-maximal-ode-solution, cor-uniform-picard-lindelof-for-nearby-initial-values, cor-mean-value-theorem, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-interval]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  cor-uniform-picard-lindelof-for-nearby-initial-values: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Definition 2.16 and Lemma 2.17 relating inextendibility to unbounded h-arclength domains, printed pp. 33-34; limit curve theorems, section 2.11 printed pp. 45-49"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the geodesic initial value problem and normal coordinates, sections 3.3-3.4 printed pp. 37-40 (PDF pp. 38-41)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let causal
curves be those of [[def-gr-causal-curves-and-reachability]].

**(a) Convergent ends are extendible.** Let $\gamma:I\to M$ be a future
causal curve and suppose $b:=\sup I<\infty$ and $\gamma(t)\to x\in M$ as
$t\to\sup I$. Then there is $\varepsilon>0$ and a future causal curve
$\tilde\gamma$ defined on $I\cup[b,b+\varepsilon)$ whose restriction to $I$
is $\gamma$. Consequently a future-inextendible causal curve whose domain is
bounded above does not converge at its upper end, and the dual statement
holds at the past end.

**(b) Maximal geodesics have no limit.** Let $(p,v)\in TM$ with $v\ne0$ and
let $\gamma_{p,v}:I_{p,v}\to M$ be the unique maximal geodesic with
$\gamma_{p,v}(0)=p$ and $\gamma_{p,v}'(0)=v$, as supplied by
[[thm-gr-local-geodesics-and-exponential-map]] clause (a). Then
$\gamma_{p,v}(t)$ does not converge to any point of $M$ as $t\to\sup I_{p,v}$
or as $t\to\inf I_{p,v}$ (where convergence at an infinite end means
convergence as $t\to+\infty$ or $t\to-\infty$ respectively).

**(c) Segments lie on inextendible causal curves.** Let $\gamma:[t_0,t_1]\to M$
with $t_0<t_1$ be a future causal curve, or a past causal curve. Then there
is an inextendible causal curve $\hat\gamma:J\to M$ (same direction as
$\gamma$ in the case at hand) and a strictly increasing affine map
$\rho:[t_0,t_1]\to J$ with $\hat\gamma\circ\rho=\gamma$. In particular, any
two distinct points $p,q\in M$ with $p\le q$ and $p\ne q$ lie on a common
inextendible causal curve, and likewise for the past relation.

**(d) Cauchy sets are acausal.** Every Cauchy set of
[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c) is acausal in
the sense of clause (b) of that definition.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold, a future causal curve $\gamma:I\to M$ with a convergent upper end, a maximal geodesic $\gamma_{p,v}$ with $v\ne0$, and the curves of the claims.

[L1] For $(p,v)$ there is a unique maximal geodesic $\gamma_{p,v}:I_{p,v}\to M$ with $\gamma_{p,v}(0)=p$ and $\gamma_{p,v}'(0)=v$, defined on an open interval containing $0$; $t\mapsto\exp_p(tv)$ extends the local geodesic for small $|t|$, and for fixed $v\ne0$ the geodesic is smooth on $I_{p,v}$ ([[thm-gr-local-geodesics-and-exponential-map]]).

[L2] In a smooth chart the coordinate path of a geodesic satisfies $\ddot y^k=-\Gamma^k{}_{ij}(y)\dot y^i\dot y^j$ with the smooth Christoffel symbols of the chart ([[prop-coordinate-geodesic-equation]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L3] Along a geodesic the quantity $g(\gamma',\gamma')$ is constant, and the causal character and time orientation of $\gamma'$ are therefore constant: if $v$ is future timelike then every tangent of $\gamma_{p,v}$ is future timelike ([[lem-gr-parallel-transport-and-geodesic-speed]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] The exponential map of [[thm-gr-local-geodesics-and-exponential-map]] clause (d) has open star-shaped domain $\mathcal E_p\subseteq T_pM$ containing $0$ and is smooth there with $d(\exp_p)_0=\operatorname{id}$; in particular, for every $w\in T_pM$ there is $\varepsilon>0$ with $sw\in\mathcal E_p$ for $s\in[0,\varepsilon]$, and the curve $s\mapsto\exp_p(sw)$ equals the geodesic $\gamma_{p,w}$ on $[0,\varepsilon]$.

[L5] Uniform Picard-Lindelof: under the hypotheses of the local existence theorem at a point of the domain of a locally Lipschitz vector field, there are $h,r,\eta>0$ such that every initial value in one cylinder has a unique solution on a common interval of half-length $h$ with graph in a larger cylinder ([[cor-uniform-picard-lindelof-for-nearby-initial-values]]).

[L6] Every initial value problem satisfying the Picard-Lindelof hypotheses has a unique maximal solution, and every other solution is its restriction ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[L7] Concatenation of finitely many causal curves at common endpoints and the almost-everywhere condition are as in [[lem-gr-causal-curve-calculus]] clause (d); a smooth future timelike curve is a future causal curve by clause (c) there, and smooth curves with future timelike tangents are locally absolutely continuous.

[L8] Mean value bound: if $U$ is $C^1$ on an interval containing $[\sigma,\sigma+L]$ with $|U'|\le C$, then $|U(\sigma)-\frac1L\int_\sigma^{\sigma+L}U|\le\frac{C}{2}L$; indeed $|U(\sigma)-U(t)|\le C|t-\sigma|$ by the mean value theorem applied to each component on $[\sigma,t]$, and the integral of $C(t-\sigma)$ over $[\sigma,\sigma+L]$ is $CL^2/2$ ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 (Convergent ends are extendible.) Let $\gamma$ and $x$ be as in (a). Choose a future timelike vector $w\in T_xM$; by [L4] there is $\varepsilon>0$ with $sw\in\mathcal E_x$ for $s\in[0,\varepsilon]$, and the curve $\beta(s):=\exp_x(sw)$, $s\in[0,\varepsilon]$, is the geodesic $\gamma_{x,w}$, smooth with $\beta(0)=x$ and future timelike tangent everywhere by [L3]. Define $\tilde\gamma$ on $I\cup[b,b+\varepsilon)$ by $\tilde\gamma(t):=\gamma(t)$ for $t\in I$ and $\tilde\gamma(b+s):=\beta(s)$ for $s\in[0,\varepsilon)$. The point $x$ is the limit of $\gamma$, so $\tilde\gamma$ is continuous at $b$ and on each side locally absolutely continuous; by the concatenation argument of [[lem-gr-causal-curve-calculus]] clause (d) it is locally absolutely continuous on $I\cup[b,b+\varepsilon)$ with nonzero future causal velocity except on the null set where $\gamma$ was already exceptional, together with the single point $b$. Hence $\tilde\gamma$ is a future causal curve extending $\gamma$, which proves (a). [given, L3, L4, L7]

1.2 (Set-up for the maximal geodesic.) Suppose, for contradiction, that $\gamma:=\gamma_{p,v}$ with $v\ne0$ converges to some $x\in M$ at one of its ends. Treat the upper end $b:=\sup I_{p,v}$, the past case being the time reverse of the same argument. Choose a chart $(U,y)$ around $x$; by convergence there is $t_1<b$ with $\gamma([t_1,b))\subseteq K$ for a compact $K\subseteq U$, and we identify $y(U)$ with an open subset of $\mathbb R^4$. Write $y(t):=y(\gamma(t))$ and $w(t):=y'(t)$ for $t\in[t_1,b)$; the curve is smooth and $w(t)\ne0$ for all $t$, since $g(\gamma',\gamma')=g(v,v)\ne0$ is constant by [L3]. Put $\rho(t):=|w(t)|_{\mathrm e}>0$, $u(t):=w(t)/\rho(t)\in S^3$, and $\sigma(t):=\int_{t_1}^t\rho$, a strictly increasing $C^1$ function with $\sigma'=\rho>0$. Let $\sigma_\infty:=\lim_{t\to b}\sigma(t)\in(0,\infty]$ and let $t(\sigma)$ be the inverse of $\sigma$ on $[0,\sigma_\infty)$. By [L2], $w'=-\Gamma(y)(w,w)$ componentwise. [given, L2, L3]

1.3 (A maximal solution whose graph stays in a compact set has no finite endpoint.) Let $O\subseteq\mathbb R^n$ be open, let $F:O\to\mathbb R^n$ be smooth, and let $z:[0,\tau_\infty)\to O$ be a maximal solution of $z'=F(z)$ whose graph is contained in a compact set $K\subseteq O$. If $\tau_\infty<\infty$, then $z$ extends to a solution on a strictly larger interval: indeed, by compactness of $K$ and [L5], finitely many cylinders cover $K$ and there is a common $h>0$ such that every initial condition in $K$ admits a solution on an interval of length $h$ contained in $O$; starting from $z(\tau_\infty-h/2)$ and invoking uniqueness [L6] extends $z$ past $\tau_\infty$, contradicting maximality. Hence $\tau_\infty=\infty$. [given, L5, L6]

2.1 (The normalized system.) Differentiating $w=\rho u$ and using $w'=-\rho^2\Gamma(y)(u,u)$ gives $\rho u'=-\rho^2\Gamma(y)(u,u)-\rho'u$; taking the Euclidean pairing with $u$ and using $|u|_{\mathrm e}=1$ yields $\rho'=-\rho\langle u,\Gamma(y)(u,u)\rangle_{\mathrm e}$, and then $u'=-\rho P_u\Gamma(y)(u,u)$, where $P_u$ is the Euclidean orthogonal projection onto $u^{\perp}$. In the parameter $\sigma$ the curves $Y(\sigma):=y(t(\sigma))$ and $U(\sigma):=u(t(\sigma))$ therefore satisfy $Y'=U$ and $U'=-P_U\Gamma(Y)(U,U)$ on $[0,\sigma_\infty)$, the derivatives being with respect to $\sigma$; in particular $U$ takes values in the Euclidean unit sphere $S^3$ and the map $(Y,U)\mapsto(U,-P_U\Gamma(Y)(U,U))$ is smooth on $U\times(\mathbb R^4\setminus\{0\})$. [step 1.2, algebra]

3.1 (First case: finite $\sigma_\infty$.) Suppose $\sigma_\infty<\infty$. The graph of the solution $(Y,U)$ of step 2.1 on $[0,\sigma_\infty)$ is contained in $\overline K'\times S^3$, a compact subset of the open domain $U\times(\mathbb R^4\setminus\{0\})$, where $K'\subseteq U$ is compact with $\gamma([t_1,b))\subseteq K'$. By step 1.3 the solution extends to some $[0,\sigma_\infty+\delta)$. On this larger interval, $\rho$ satisfies $\rho'=-\rho\langle U,\Gamma(Y)(U,U)\rangle_{\mathrm e}$ with the continuous coefficient bounded by some $C$ on the compact set, so $\rho$ stays in $[\rho_0e^{-C(\sigma_\infty+\delta)},M']$ with $M'<\infty$; hence $t(\sigma)=\int_0^\sigma\frac{d\sigma'}{\rho(\sigma')}$ is defined and $C^1$ with positive derivative for $\sigma\in[0,\sigma_\infty+\delta)$ and extends the affine parameter beyond $b$. The formulas $y(t(\sigma))=Y(\sigma)$, $w(t(\sigma))=\rho(\sigma)U(\sigma)$ define a geodesic $\tilde\gamma$ on a parameter interval strictly containing $[t_1,b)$ and agreeing with $\gamma$ there: indeed on the overlap the coordinate path solves the geodesic equation [L2], which is a first-order ODE with unique solutions [L6]. This contradicts the maximality of $I_{p,v}$ in [L1]. [step 2.1, step 1.3, L1, L2, L6, algebra]

3.2 (Second case: infinite $\sigma_\infty$.) Suppose $\sigma_\infty=\infty$. Then $t(\sigma)\to b$ as $\sigma\to\infty$, and by convergence of $\gamma$ one has $Y(\sigma)=y(t(\sigma))\to0$ in the chart. By step 2.1, $|U'|_{\mathrm e}=|P_U\Gamma(Y)(U,U)|_{\mathrm e}\le C$ on the compact set $\overline K'\times S^3$. Let $\sigma>0$ and $L>0$; the mean value bound [L8] gives $\left|U(\sigma)-\frac1L\int_\sigma^{\sigma+L}U\right|_{\mathrm e}\le\frac{CL}{2}$, while $\left|\frac1L\int_\sigma^{\sigma+L}U\right|_{\mathrm e}=\frac1L|Y(\sigma+L)-Y(\sigma)|_{\mathrm e}\le\frac1L\bigl(|Y(\sigma+L)|_{\mathrm e}+|Y(\sigma)|_{\mathrm e}\bigr)$. Choose $L$ with $CL<1$ and then $\sigma$ so large that the last expression is less than $\frac12$; then $|U(\sigma)|_{\mathrm e}<\frac12+\frac12=1$, contradicting $|U|_{\mathrm e}=1$. Hence $\sigma_\infty=\infty$ is impossible. [step 2.1, L8, algebra]

4.1 (Conclusions.) Steps 3.1 and 3.2 show that a maximal geodesic with $v\ne0$ cannot converge at either end, which is (b); the past end is the time reverse of the same argument. For (c), let $\gamma:[t_0,t_1]\to M$ be future causal. Choose a future timelike $w_1\in T_{\gamma(t_0)}M$ and a future timelike $w_2\in T_{\gamma(t_1)}M$. By [L1] there are maximal geodesics $\gamma_1:=\gamma_{\gamma(t_0),w_1}$ and $\gamma_2:=\gamma_{\gamma(t_1),w_2}$; both are future-directed and smooth on their domains by [L3], and they contain $\gamma(t_0)$ at parameter $0$ and $\gamma(t_1)$ at parameter $0$ respectively. Concatenating the restriction of $\gamma_1$ to $(\inf I_1,0]$, the curve $\gamma$ (after shifting the parameter), and the restriction of $\gamma_2$ to $[0,\sup I_2)$ gives a future causal curve $\hat\gamma:J\to M$ by [L7], where $J$ is the corresponding interval, and there is a strictly increasing affine identification of $[t_0,t_1]$ with a subinterval of $J$ carrying $\gamma$ to $\hat\gamma$. By (b) the maximal geodesics do not converge at their outer ends, and at an infinite end no extension of the parameter domain exists, so $\hat\gamma$ is inextendible. If $p\ne q$ and $p\le q$, a future causal curve from $p$ to $q$ exists by the definition of $\le$, and the construction applies to it; the past case is the time reverse. This proves (c). [step 1.1, step 3.1, step 3.2, L1, L3, L7]

5.1 (Cauchy sets are acausal.) Let $S$ be a Cauchy set in the sense of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c). Suppose $p,q\in S$ are distinct and $p\le q$. Choose a future causal curve $\gamma:[t_0,t_1]\to M$ with $\gamma(t_0)=p$ and $\gamma(t_1)=q$, and let $\hat\gamma:J\to M$ and the affine identification $\rho$ be as in (c). Then $\hat\gamma$ is an inextendible causal curve and $\rho(t_0)\ne\rho(t_1)$, since $\rho$ is strictly increasing and $t_0<t_1$ while $\hat\gamma(\rho(t_0))=p\ne q=\hat\gamma(\rho(t_1))$; thus the parameter set $\hat\gamma^{-1}[S]$ contains the two distinct elements $\rho(t_0)$ and $\rho(t_1)$, contradicting the defining property of a Cauchy set. The relation $q\le p$ is excluded symmetrically by the past version of (c). Hence no two distinct points of $S$ are causally related, that is, $S$ is acausal; this is (d) and completes the proof. [step 4.1, given, algebra] ∎

## Remarks

- **The compactness input.** The only compactness used in (b) is that the image of the geodesic near a hypothetical limit lies in a compact chart region and that geodesic speed is constant; no completeness of $M$ and no auxiliary Riemannian metric is assumed. The argument also covers convergence at an infinite affine end, which is why clause (b) has no finiteness restriction on the ends.
- **The convergence convention.** Clause (a) is the reason the extendibility convention of [[def-gr-causal-curves-and-reachability]] clause (d) agrees, for causal curves, with "the parameter domain cannot be extended by a causal curve": a curve that converges at an end can be extended by the explicitly displayed geodesic segment.
