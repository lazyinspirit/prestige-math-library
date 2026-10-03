---
id: lem-toponogov-distance-support-inequality
kind: lemma
title: Toponogov distance support inequality
status: published
origin: pipeline
deps:
  - thm-hessian-comparison-for-distance-under-sectional-curvature-bounds
  - def-comparison-triangle-in-the-two-dimensional-space-form
  - def-comparison-sine-cosine-and-cotangent-functions
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-constant-sectional-curvature-and-space-form
  - thm-distance-from-p-is-smooth-off-p-and-the-cut-locus
  - thm-characterization-of-a-cut-point
  - def-cut-point-and-cut-locus-of-a-point
  - thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point
  - thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-hopf-rinow
  - thm-riemannian-distance-is-a-metric
  - prop-round-sphere-model-geometry
  - cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points
  - thm-no-conjugate-points-under-nonpositive-sectional-curvature
  - prop-gradient-hessian-and-divergence-connection-formulas
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  repair: research/frontier-38-owner-30-published-format-misc-lem-toponogov-distance-support-inequality.receipt.json
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§6, Theorem 6.1 and its proof with displays (6.1)–(6.22), printed pp.21–25: the support function σ=f∘ρ, the constant C=1 in D∇σ≤−kσI+C, the barrier a with a″+k′a=0, and the cut-point replacement ρε(x)=|x,oε|+|oε,o|"
    - title: "U. Lang, Riemannian and Metric Geometry (lecture notes)"
      url: https://people.math.ethz.ch/~lang/RG.pdf
      locator: "Chapter 5, Lemmas 5.8–5.9: the equivalence of comparison forms and the chord comparison under a curvature lower bound"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ with sectional curvature $\ge k$ at every tangent two-plane,
let $\gamma:[0,L]\to M$ be a unit-speed minimizing geodesic — so $L>0$ and
$L=d_g(\gamma(0),\gamma(L))$ — and let $o\in M$ be a third point. Put
$$a:=d_g\bigl(o,\gamma(0)\bigr),\qquad b:=d_g\bigl(o,\gamma(L)\bigr),$$
and assume that the three numbers $(L,b,a)$ are the ordered side lengths of a
comparison triangle in the two-dimensional space form $M^2_k$ of constant
curvature $k$ in the sense of
[[def-comparison-triangle-in-the-two-dimensional-space-form]]: this includes
$a,b>0$, the strict triangle inequalities
$$a<b+L,\qquad b<a+L,\qquad L<a+b,$$
and, when $k>0$, the restrictions
$$a<\frac{\pi}{\sqrt k},\qquad b<\frac{\pi}{\sqrt k},\qquad L<\frac{\pi}{\sqrt k},\qquad a+b+L<\frac{2\pi}{\sqrt k}.$$
Let $(\bar o,\bar x,\bar y)$ be such a comparison triangle, so that
$$d_k(\bar o,\bar x)=a,\qquad d_k(\bar o,\bar y)=b,\qquad d_k(\bar x,\bar y)=L,$$
and let $\bar\gamma:[0,L]\to M^2_k$ be the minimizing unit-speed geodesic from
$\bar x$ to $\bar y$ (existence and uniqueness up to the isometries of
$M^2_k$ are part of the definition of the comparison triangle). Then
$$d_g\bigl(o,\gamma(t)\bigr)\ \ge\ d_k\bigl(\bar o,\bar\gamma(t)\bigr) \qquad\text{for every }0\le t\le L .$$

The inequality points in the "fatter than the model" direction appropriate to
the convention $K\ge k$ of this page: the actual triangle is at least as
thick as the constant-curvature model triangle with the same side lengths.
The perimeter hypothesis for $k>0$ cannot be dropped, and the degenerate
configurations in which $\bar x=\bar o$, $\bar y=\bar o$ or the side
$\bar x\bar y$ passes through $\bar o$ are exactly those excluded by the
strict triangle inequalities; they carry no comparison triangle in the sense
of the definition. No compactness of $M$ is assumed, apart from the
completeness needed for the geodesics that occur, and the only choice used is
the inherited $\mathrm{AC}_\omega$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete connected boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $K\ge k$; a unit-speed minimizing geodesic $\gamma:[0,L]\to M$; a point $o\in M$; the side lengths $a,b,L$ and a comparison triangle $(\bar o,\bar x,\bar y)$ with side $\bar\gamma$ as in the statement.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the Hopf–Rinow, exponential, cut-locus and completion suppliers quoted below; no further selection is made.

[F1] Comparison triangle ([[def-comparison-triangle-in-the-two-dimensional-space-form]]): $M^2_k$ is the complete, simply connected two-dimensional space form of constant sectional curvature $k$ ([[def-constant-sectional-curvature-and-space-form]]), the triple $(\bar o,\bar x,\bar y)$ exists and is unique up to the isometries of $M^2_k$, the sides are minimizing geodesic segments, and the stated inequalities on $a,b,L$ and on their sum hold. In particular $d_k(\bar x,\bar y)=L=d_g(\gamma(0),\gamma(L))$ and $\bar\gamma$ is the minimizing unit-speed side from $\bar x$ to $\bar y$.

[F2] Model functions ([[def-comparison-sine-cosine-and-cotangent-functions]], [[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]): $\operatorname{sn}_k''+k\operatorname{sn}_k=0$ with $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, and $\operatorname{cs}_k=\operatorname{sn}_k'$ satisfies $\operatorname{cs}_k'=-k\operatorname{sn}_k$; $\operatorname{sn}_k$ is positive on $(0,\pi/\sqrt k)$ for $k>0$ and on $(0,\infty)$ for $k\le0$. The comparison cotangent is $\operatorname{ct}_k=\operatorname{cs}_k/\operatorname{sn}_k$. Define $$f(t):=\int_0^t\operatorname{sn}_k(s)\,ds =\begin{cases}\dfrac{1-\operatorname{cs}_k(t)}{k},&k\neq0,\\[4pt] \dfrac{t^2}{2},&k=0;\end{cases}$$ then $f'=\operatorname{sn}_k$, $f''=\operatorname{cs}_k$ and $$f''=-kf+1,\qquad f'>0\text{ on the positive domain},$$ so $f$ is strictly increasing on the interval between any two of the distance values below.

[F3] Hessian comparison ([[thm-hessian-comparison-for-distance-under-sectional-curvature-bounds]]): let $x\in M\setminus(\{q\}\cup\operatorname{Cut}(q))$, let $t_0=d_g(q,x)>0$ and assume $t_0<\pi/\sqrt k$ if $k>0$; let $\sigma$ be the minimizing unit-speed geodesic from $q$ to $x$ and $N=\{\dot\sigma(t_0)\}^\perp$. If $\operatorname{Rm}(X,\dot\sigma,\dot\sigma,X)\ge k|X|^2$ on radial planes along $\sigma$, then $$\operatorname{Hess}d_g(q,\cdot)(X,X)\le\operatorname{ct}_k(t_0)\,g_x(X,X) \qquad(X\in N),$$ and $\operatorname{Hess}d_g(q,\cdot)(\operatorname{grad}d_g(q,\cdot),\cdot)=0$; if instead the reverse curvature inequality holds, the reverse Hessian inequality holds. The same statement applies to the point $q=\bar o$ of the model $M^2_k$ with $\bar t_0=d_k(\bar o,x)<\pi/\sqrt k$ for $k>0$, where the curvature is identically $k$, so both inequalities hold and $$\operatorname{Hess}d_k(\bar o,\cdot)=\operatorname{ct}_k(\bar t_0) \bigl(g-d d_k(\bar o,\cdot)\otimes d d_k(\bar o,\cdot)\bigr) \quad\text{on }\{\operatorname{grad}d_k(\bar o,\cdot)\}^\perp .$$

[F4] Smoothness and cut points ([[thm-distance-from-p-is-smooth-off-p-and-the-cut-locus]], [[thm-characterization-of-a-cut-point]], [[def-cut-point-and-cut-locus-of-a-point]]): for every $q\in M$ the distance function $d_g(q,\cdot)$ is smooth exactly on $M\setminus(\{q\}\cup\operatorname{Cut}(q))$; and for a unit vector $v\in S_qM$ with finite cut time $c_q(v)<+\infty$ the two alternatives of the characterization hold, while if a conjugacy or two distinct minimizing geodesics occur with time $t$, then $c_q(v)\le t$; the endpoint is a cut point when $t=c_q(v)$,
not at every later conjugate time. Consequently: if a minimizing unit-speed geodesic from $q$ to $x$ extends past $x$ and remains minimizing up to some time $>d_g(q,x)$, then $x\notin\operatorname{Cut}(q)$.

[F5] Model cut loci. For $k>0$ the model $M^2_k$ is the round sphere of radius $1/\sqrt k$, whose cut locus at a point is the singleton consisting of the antipode and whose cut time is $\pi/\sqrt k$ ([[prop-round-sphere-model-geometry]]); hence every model point at distance $<\pi/\sqrt k$ from $\bar o$ is off $\operatorname{Cut}(\bar o)$. For $k\le0$ the model is simply connected, complete and of curvature $k\le0$, so that by [[cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points]] and [[thm-no-conjugate-points-under-nonpositive-sectional-curvature]] its cut loci are empty: every two points are joined by a unique minimizing geodesic and no conjugate points occur.

[F6] Hopf–Rinow ([[thm-hopf-rinow]]): on a complete connected boundaryless manifold every two points are joined by a minimizing geodesic, and geodesics are defined for all real times and are determined by their initial data ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F7] Conjugate pairs and minimality ([[thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point]]): if $a<c<b$ and $\gamma(a),\gamma(c)$ are conjugate along the geodesic $\gamma|_{[a,c]}$, then there is a piecewise smooth curve on $[a,b]$ with the same endpoints as $\gamma$ and strictly smaller length.

[F8] Minimizing piecewise smooth curves ([[thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization]]): a nonconstant piecewise smooth curve that minimizes length between its endpoints has a unit-speed geodesic arclength representative; its nonzero one-sided velocities at a breakpoint are positive multiples of the same tangent vector, and any two of its constant-speed representatives that agree at one point with the same velocity coincide everywhere by [F6].

[F9] Distance and Hessian rules ([[thm-riemannian-distance-is-a-metric]], [[prop-gradient-hessian-and-divergence-connection-formulas]]): $d_g$ and $d_k$ are metrics, so the triangle inequality holds; and for smooth real $u$ and $f$ the two-tensor identity $\operatorname{Hess}(f\circ u)=f''(u)\,du\otimes du+f'(u)\operatorname{Hess}u$ holds, because $\operatorname{Hess}v(X,Y)=X(Yv)-(\nabla_XY)v$ gives $X(Y(f\circ u))=f''(u)(Xu)(Yu)+f'(u)X(Yu)$ by the scalar chain and Leibniz rules while $(\nabla_XY)(f\circ u)=f'(u)(\nabla_XY)u$. In particular for a geodesic $\sigma$ one has $(f\circ u\circ\sigma)''=\operatorname{Hess}(f\circ u)(\dot\sigma,\dot\sigma)$.

## Proof

**Proof technique:** direct: put $\sigma=f\circ\rho$ with $\rho=d_g(o,\cdot)$ and $f'=\operatorname{sn}_k$, show the differential inequality $\operatorname{Hess}\sigma\le(-k\sigma+1)g$ with equality in the model, and use the maximum principle with a strict barrier $a$ satisfying $a''+k'a=0$, replacing $\rho$ at a possible cut point by the upper support $d_g(\cdot,o_\varepsilon)+\varepsilon$.

1.1 The relevant distances lie in the domain of $f$. For $0\le t\le L$ the triangle inequality gives $$d_g\bigl(o,\gamma(t)\bigr)\le\min\bigl\{a+t,\;b+(L-t)\bigr\},$$ and adding the two estimates yields $2d_g(o,\gamma(t))\le a+b+L$. The same argument in the model gives $2d_k(\bar o,\bar\gamma(t))\le a+b+L$. Hence every occurring distance is at most $(a+b+L)/2$, which is $<\pi/\sqrt k$ when $k>0$ by [F1] and finite in general; and every occurring distance is positive, because $d_g(o,\gamma(t))=0$ would put $o=\gamma(t)$ on the side and force $a+b=t+(L-t)=L$, contradicting the strict triangle inequality, and likewise in the model. By [F2], $f$ is strictly increasing on $[0,\infty)$ for $k\le0$ and on $[0,\pi/\sqrt k)$ for $k>0$; all occurring distance values lie in this interval. [F1, F2, F9]

1.2 Endpoint values of $\delta$. Define $$\rho:=d_g(o,\cdot),\qquad \sigma:=f\circ\rho,\qquad \bar\rho:=d_k(\bar o,\cdot),\qquad \bar\sigma:=f\circ\bar\rho,$$ and $$\delta:=\sigma\circ\gamma-\bar\sigma\circ\bar\gamma\qquad\text{on }[0,L].$$ Since $d_g(o,\gamma(0))=a=d_k(\bar o,\bar x)=\bar\rho(\bar\gamma(0))$ and $d_g(o,\gamma(L))=b=d_k(\bar o,\bar y)=\bar\rho(\bar\gamma(L))$ by [F1], $$f\bigl(\rho(\gamma(0))\bigr)=f(a)=f\bigl(\bar\rho(\bar\gamma(0))\bigr), \qquad f\bigl(\rho(\gamma(L))\bigr)=f(b)=f\bigl(\bar\rho(\bar\gamma(L))\bigr),$$ that is $\delta(0)=\delta(L)=0$. [F1, F2]

1.3 The differential inequality for $\sigma$. At a point $x\notin\{o\}\cup\operatorname{Cut}(o)$, $\rho$ is smooth and $\operatorname{grad}\rho$ is a unit vector. The chain rule of [F9] applied to $\sigma=f\circ\rho$ gives $$\operatorname{Hess}\sigma =f''(\rho)\,d\rho\otimes d\rho+f'(\rho)\operatorname{Hess}\rho .$$ Write $X=\alpha\operatorname{grad}\rho+X^\perp$ with $\alpha=d\rho(X)$ and $X^\perp\perp\operatorname{grad}\rho$. Since $\operatorname{Hess}\rho(\operatorname{grad}\rho,\cdot)=0$ by [F3] and $K\ge k$ holds on radial planes, [F3] yields $\operatorname{Hess}\rho(X^\perp,X^\perp)\le\operatorname{ct}_k(\rho) |X^\perp|^2$. Because $d\rho\otimes d\rho$ vanishes on $X^\perp$ and $f'=\operatorname{sn}_k$, $f''=\operatorname{cs}_k$: $$\operatorname{Hess}\sigma(X,X) =f''(\rho)\alpha^2+\operatorname{sn}_k(\rho) \operatorname{Hess}\rho(X^\perp,X^\perp) \le\operatorname{cs}_k(\rho)\alpha^2 +\operatorname{sn}_k(\rho)\operatorname{ct}_k(\rho)|X^\perp|^2 .$$ Since $\operatorname{sn}_k\operatorname{ct}_k=\operatorname{cs}_k$ by [F2] and $\operatorname{cs}_k=-kf+1=f''$, the right-hand side equals $$\operatorname{cs}_k(\rho)\bigl(\alpha^2+|X^\perp|^2\bigr) =\bigl(-k\sigma(x)+1\bigr)\,g_x(X,X),$$ where $|X|^2=\alpha^2+|X^\perp|^2$ and $\sigma(x)=f(\rho(x))$. Hence $$\operatorname{Hess}\sigma\le(-k\sigma+1)\,g \qquad\text{on }M\setminus(\{o\}\cup\operatorname{Cut}(o)).$$ [F3, F4, F9]

2.1 The model identity. In the model, $\bar\rho$ is smooth along $\bar\gamma$: by step 1.1 $0<\bar\rho(\bar\gamma(t))<\pi/\sqrt k$ when $k>0$ and $\bar\rho(\bar\gamma(t))>0$ always; for $k>0$ the model is the round sphere and points at distance $<\pi/\sqrt k$ from $\bar o$ are off $\operatorname{Cut}(\bar o)$ by [F5], while for $k\le0$ the model has empty cut loci by [F5]. Since the model has constant curvature $k$, [F3] applies there in both directions and $$\operatorname{Hess}\bar\rho=\operatorname{ct}_k(\bar\rho) \bigl(g-d\bar\rho\otimes d\bar\rho\bigr) \quad\text{on the normal space},\qquad \operatorname{Hess}\bar\rho(\operatorname{grad}\bar\rho,\cdot)=0 .$$ Repeating the computation of step 1.3 with equalities in place of both inequalities gives, at every point of the model side, $$\operatorname{Hess}\bar\sigma=\bigl(-k\bar\sigma+1\bigr)g .$$ Since $\bar\gamma$ is a unit-speed geodesic, the second-derivative identity of [F9] gives $$\bigl(\bar\sigma\circ\bar\gamma\bigr)''(t) =\operatorname{Hess}\bar\sigma\bigl(\dot{\bar\gamma},\dot{\bar\gamma}\bigr) =-k\,\bar\sigma\bigl(\bar\gamma(t)\bigr)+1\qquad(0\le t\le L).$$ [F1, F3, F5, F9]

2.2 Assumption of contradiction and an interior minimizer. Assume that $\delta(t_1)<0$ for some $t_1\in[0,L]$. Since $\delta$ is continuous on the compact interval $[0,L]$ and $\delta(0)=\delta(L)=0$ by step 1.2, the minimum $$m:=\min_{[0,L]}\delta<0$$ is attained at some point $t_0\in(0,L)$; fix such a point, so $\delta(t_0)=m<0$. [step 1.2]

3.1 The differential inequality for $\delta$. At every $t\in(0,L)$ with $\gamma(t)\notin\operatorname{Cut}(o)$ the function $\sigma\circ\gamma$ is $C^2$ near $t$ by [F4], and the second-derivative identity of [F9] with the unit-speed geodesic $\gamma$ gives $$\bigl(\sigma\circ\gamma\bigr)''(t) =\operatorname{Hess}\sigma\bigl(\dot\gamma,\dot\gamma\bigr) \le-k\,\sigma\bigl(\gamma(t)\bigr)+1$$ by step 1.3. Subtracting the identity of step 2.1, $$\delta''(t)\le-k\,\delta(t) \qquad\text{whenever }\gamma(t)\notin\operatorname{Cut}(o).$$ Note that $\gamma(t)\ne o$ for all $t$ by step 1.1, so the excluded set is exactly $\gamma^{-1}(\operatorname{Cut}(o))$. [F4, F9, step 1.3, step 2.1]

3.2 The strict barrier. Suppose $m<0$ is the minimum from step 2.2. Choose $k'>k$ with $k'>0$ and $L<\pi/\sqrt{k'}$: if $k>0$, take $k<k'<(\pi/L)^2$; if $k\le0$, choose a sufficiently small $k'>0$. Then choose $\tau>0$ with $L+\tau<\pi/\sqrt{k'}$, and on $[-\tau,L]$ define $$a_0(t):=m\,\frac{\sin(\sqrt{k'}(t+\tau))}{\min_{0\le s\le L}\sin(\sqrt{k'}(s+\tau))}.$$ The denominator is positive, $a_0(t)\le m<0$ on $[0,L]$, $a_0''+k'a_0=0$, and $a_0(-\tau)=0$. [F1, F2, step 2.2]

4.1 The barrier below $\delta$. Take $a_0$ as in step 3.2 and define the continuous ratio $\delta/a_0$ on $[0,L]$. It is zero at the endpoints and positive at the minimum point $t_0$ from step 2.2, so its positive maximum $$\lambda:=\max_{t\in[0,L]}\frac{\delta(t)}{a_0(t)}>0$$ is attained at some $t_*\in(0,L)$. Put $\eta:=\lambda a_0$ and $m_*:=\delta(t_*)=\eta(t_*)<0$. Since $a_0<0$, the definition of $\lambda$ gives $\eta(t)\le\delta(t)$ for all $t$, with equality at $t_*$; moreover $\eta''=-k'\eta$ on $[0,L]$. [step 3.2, step 2.2]

5.1 Case 1: $\gamma(t_*)$ is not a cut point of $o$.  If $\gamma(t_*)\notin\operatorname{Cut}(o)$, then $\delta$ is $C^2$ near $t_*$. The local minimum of $\delta-\eta$ at $t_*$ gives $(\delta-\eta)''(t_*)\ge0$, whereas step 3.1 and $\eta''=-k'\eta$ give $$(\delta-\eta)''(t_*)\le-k\delta(t_*)+k'\eta(t_*)=(k'-k)m_*<0,$$ a contradiction. [step 3.1, step 4.1, F4, F6, F7]

5.2 Case 2: $\gamma(t_*)$ is a cut point of $o$. Let $\beta:[0,L_0]\to M$, $L_0:=d_g(o,\gamma(t_*))$, be a minimizing unit-speed geodesic from $o$ to $\gamma(t_*)$. For $k>0$ put $M_0:=\max_{[0,L]}\rho\circ\gamma<\pi/\sqrt k$ as in step 1.1 and choose $0<\varepsilon<\min\{L_0,\pi/\sqrt k-M_0\}$; for $k\le0$ choose $0<\varepsilon<L_0$. Set $$o_\varepsilon:=\beta(\varepsilon),\qquad \rho_\varepsilon:=d_g(o_\varepsilon,\cdot)+\varepsilon.$$ We claim $\gamma(t_*)\notin\operatorname{Cut}(o_\varepsilon)$. First, no conjugate pair along a minimizing segment $\sigma:[0,\ell]\to M$ can occur at times $0<s_1<s_2\le\ell$: if $s_2<\ell$, the minimizing geodesic from $\sigma(s_1)$ continues past its conjugate point $\sigma(s_2)$; if $s_2=\ell$, reverse $\sigma$ and use the conjugate pair at times $0$ and $\ell-s_1$, past which the reversed segment still minimizes. Both contradict [[thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point]] [F7]. Second, $\beta|_{[\varepsilon,L_0]}$ is the unique minimizing segment from $o_\varepsilon$ to $\gamma(t_*)$: concatenating any such segment with $\beta|_{[0,\varepsilon]}$ gives a minimizing curve from $o$, which is smooth at $o_\varepsilon$ and has the initial data of $\beta$, hence equals $\beta$ by geodesic uniqueness [F8]. If $\gamma(t_*)$ were a cut point of $o_\varepsilon$, the cut-point characterization [F4] would give either a conjugate pair on this minimizing segment or two distinct minimizing segments, contradicting one of these facts. [F4, F6, F7, F8, step 2.2, step 4.1]

6.1 Case 2, concluded: the support estimate. The function $\rho_\varepsilon$ is smooth near $\gamma(t_*)$ by step 5.2 and is an upper support of $\rho$: the triangle inequality gives $\rho_\varepsilon\ge\rho$ everywhere, with equality at $\gamma(t_*)$ since $\beta$ is minimizing. As $f$ is increasing on the relevant model interval, $\sigma_\varepsilon:=f\circ\rho_\varepsilon$ satisfies $\sigma_\varepsilon\ge\sigma$ with equality at $\gamma(t_*)$. Thus $$\delta_\varepsilon:=\sigma_\varepsilon\circ\gamma-\bar\sigma\circ\bar\gamma\ge\delta\ge\eta,$$ with equality $\delta_\varepsilon(t_*)=\eta(t_*)=m_*$. Hence $\delta_\varepsilon-\eta$ has a local minimum at $t_*$. Put $u:=d_g(o_\varepsilon,\cdot)$ and $\bar t:=u(\gamma(t_*))=L_0-\varepsilon$. By the chain rule [F9], $$\operatorname{Hess}\sigma_\varepsilon=f''(\bar t+\varepsilon)\,du\otimes du+f'(\bar t+\varepsilon)\operatorname{Hess}u.$$ At the contact point, Hessian comparison [F3] applied from $o_\varepsilon$ gives, for $X=\alpha\operatorname{grad}u+X^\perp$, $$\operatorname{Hess}\sigma_\varepsilon(X,X)\le\operatorname{cs}_k(\bar t+\varepsilon)\alpha^2+\operatorname{sn}_k(\bar t+\varepsilon)\operatorname{ct}_k(\bar t)|X^\perp|^2.$$ The model addition formula gives $$\operatorname{sn}_k(\bar t+\varepsilon)\operatorname{ct}_k(\bar t)=\operatorname{cs}_k(\bar t+\varepsilon)+\beta_\varepsilon,\qquad \beta_\varepsilon:=\frac{\operatorname{sn}_k(\varepsilon)}{\operatorname{sn}_k(\bar t)}>0,$$ and $\beta_\varepsilon\to0$ as $\varepsilon\downarrow0$. Since $f''=-kf+1$, this yields $$\operatorname{Hess}\sigma_\varepsilon\le(-k\sigma_\varepsilon+1+\beta_\varepsilon)g$$ at the contact point. Combining with the model identity of step 2.1 and $\eta''=-k'\eta$ gives $$(\delta_\varepsilon-\eta)''(t_*)\le(k'-k)m_*+\beta_\varepsilon<0$$ for small enough $\varepsilon>0$, because $m_*<0$ and $k'>k$. This contradicts the local minimum. [step 2.1, step 4.1, step 5.2, F3, F9, step 3.1]

7.1 Conclusion. Both contact cases being impossible, the assumption of step 2.2 is false: $$\delta(t)\ge0\qquad(0\le t\le L).$$ Since $f$ is strictly increasing on the interval that contains both $\rho(\gamma(t))=d_g(o,\gamma(t))$ and $\bar\rho(\bar\gamma(t))=d_k(\bar o,\bar\gamma(t))$ by step 1.1, the inequality $f(\rho(\gamma(t)))\ge f(\bar\rho(\bar\gamma(t)))$ forces $$d_g\bigl(o,\gamma(t)\bigr)\ge d_k\bigl(\bar o,\bar\gamma(t)\bigr) \qquad(0\le t\le L),$$ which is the assertion. The barrier was used at an interior point of $(0,L)$ in both cases, so the endpoints need no separate treatment beyond $\delta(0)=\delta(L)=0$ of step 1.2; the strict triangle inequalities of [F1] were used exactly to make $a,b>0$, to exclude $o\in\gamma([0,L])$, and to give the comparison triangle; and no choice beyond the inherited $\mathrm{AC}_\omega$ of [A1] was used. [F2, step 1.1, step 2.2, step 5.1, step 6.1] ∎

## Source locator

Eschenburg §6 (printed pp.21–25, PDF labels P21–P25) proves Theorem 6.1 by exactly this route: with $\rho=|o,\cdot|$, $f'=s$ where $s=\operatorname{sn}_k$, and $\sigma=f\circ\rho$, displays (6.7)–(6.9) produce $\operatorname{Hess}\sigma\le-k\sigma I+C$ with $C=1$ and equality in the model; the barrier $a_0$ with $a_0''+k'a_0=0$, $a_0(-\tau)=0$ and $a_0\le m$ is (6.16), the contradiction at the contact point is (6.19)–(6.20), and Case 2 uses the upper support $\rho_\varepsilon(x)=|x,o_\varepsilon|+|o_\varepsilon,o|$ with the error tending to zero, (6.21)–(6.22). The proof above adds two details that the source leaves implicit: the cut-point replacement is justified by the two-alternative characterization of cut points together with the impossibility of interior conjugate pairs on a minimizing segment, and the interiority of the contact point follows from $\delta(0)=\delta(L)=0$ with $\min\delta<0$. The direction of the conclusion is the one proved in the source argument ($\delta\ge0$, i.e. actual distance at least model distance), which is the standard chord comparison $\mathrm{(C}_k)$ of the lower curvature bound. Lang, *Riemannian and Metric Geometry*, Chapter 5, Lemmas 5.8–5.9 (printed pp.65–67, PDF pp.69–70), records this implication for geodesic triangles; the full barrier proof above follows Eschenburg §6, Theorem 6.1, printed pp.22–24.
