---
id: thm-bishop-gromov-volume-comparison
kind: theorem
title: Bishop gromov volume comparison
status: published
origin: pipeline
deps:
  - thm-relative-volume-density-comparison
  - def-model-space-radial-area-and-ball-volume
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-polar-surface-measure-on-the-unit-sphere
  - cor-polar-integration-may-discard-the-cut-locus
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-radial-volume-jacobian
  - def-riemannian-volume-density
  - def-cut-time-in-a-unit-tangent-direction
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - thm-bonnet-myers
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - thm-hopf-rinow
  - thm-dominated-convergence
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.2 and 28.1, pp.200–209: the polar volume element, the model density sn_k^(n-1) and the monotonicity of the Bishop–Gromov ratio"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: the volume-density quotient q(t)=j(t)/\bar j(t), its monotonicity and the model comparison"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ whose Ricci curvature satisfies
$$\operatorname{Ric}\ge(n-1)k\,g$$
for a real number $k$, let $p\in M$, let $\operatorname{vol}_g$ be the
Riemannian volume measure of [[def-riemannian-volume-density]], let
$B(p,r)=\{q\in M:d_g(p,q)<r\}$ be the open metric ball, and let $V^\star_k$ be
the saturated model ball volume of
[[def-model-space-radial-area-and-ball-volume]]. Then the **Bishop–Gromov
ratio**
$$R_p(r):=\frac{\operatorname{vol}_g\bigl(B(p,r)\bigr)}{V^\star_k(r)},\qquad r>0 ,$$
is well defined, is nonincreasing on $(0,\infty)$, satisfies
$$\lim_{r\downarrow0}R_p(r)=1 ,$$
and, when $k>0$, is constant on $[\pi/\sqrt k,\infty)$. In particular
$\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$ for every $r>0$. No compactness
of $M$ is assumed; for $k>0$ the manifold is in fact compact by Bonnet–Myers,
and $V^\star_k$ is then the model volume $V_k(\pi/\sqrt k)$ of the model sphere
from the model pole onward. The statement holds for every $p\in M$ and every
real $k$, including $k=0$; the excluded value $r=0$ is where both numerator and
denominator vanish. No choice beyond the inherited $\mathrm{AC}_\omega$ is
used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ for a real number $k$; a point $p\in M$; the Riemannian volume measure $\operatorname{vol}_g$; the unit sphere $S_pM=\{v\in T_pM:|v|_g=1\}$ with its polar surface measure $\sigma_p$; the cut time $c_p:S_pM\to(0,+\infty]$; the radial geodesics $\gamma_v(t)=\exp_p(tv)$; the radial volume Jacobian $J_p(t,v)$; and the model functions $\operatorname{sn}_k$, $\operatorname{cs}_k$, $A_k$, $V_k$ and $V^\star_k$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the cut-time, curvature, polar-integration, comparison and convergence suppliers below; no further selection is made.

[F1] Polar integration ([[cor-polar-integration-may-discard-the-cut-locus]]): $(M,g)$ is complete, connected and boundaryless, $\sigma_p$ is a finite Borel measure on $S_pM$ obtained by transporting the polar surface measure of the unit sphere by a linear isometry, and for every Borel $f:M\to[0,\infty]$, $$\int_M f\,d\operatorname{vol}_g=\int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v),$$ where $a_v(t)$ is the matrix of the radial Jacobi fields in a parallel orthonormal frame, with $\det a_v(t)>0$ for $0<t<c_p(v)$. The right-hand side is an iterated extended nonnegative integral whose inner integral is a measurable function of $v$; this well-posedness is part of the cited statement and is proved there through [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] applied to the product-measurable integrand, whose section integrals are measurable.

[F2] Radial volume Jacobian ([[def-radial-volume-jacobian]]): for $0<t<c_p(v)$ one has $J_p(t,v)=\det\bar A_v(t)>0$, where $\bar A_v$ is the parallel-frame matrix of the radial Jacobi tensor of $\gamma_v$, the normalisation $J_p(t,v)/t^{n-1}\to1$ holds as $t\downarrow0$, and $J_p$ is the radial volume-density factor of the polar parametrisation. Consequently $J_p(t,v)=\det a_v(t)$ for $0<t<c_p(v)$, and the polar formula of [F1] may be written with $f(\gamma_v(t))J_p(t,v)$ in place of $f(\gamma_v(t))\det a_v(t)$.

[F3] Relative volume density comparison ([[thm-relative-volume-density-comparison]]): let $I:=(0,\min(c_p(v),\pi/\sqrt k))$ when $k>0$ and $I:=(0,c_p(v))$ when $k\le0$. Then the relative volume density $$q_v(t):=\frac{J_p(t,v)}{\operatorname{sn}_k(t)^{n-1}}$$ is differentiable, nonincreasing and satisfies $q_v(t)\le1=q_v(0+)$ on $I$, that is, $q_v(t)\to1$ as $t\downarrow0$; in particular $J_p(t,v)\le\operatorname{sn}_k(t)^{n-1}$ there.

[F4] Model functions and model volumes ([[def-comparison-sine-cosine-and-cotangent-functions]], [[def-model-space-radial-area-and-ball-volume]]): the comparison sine $\operatorname{sn}_k$ vanishes at $0$ with $\operatorname{sn}_k'(0)=1$ and is positive and smooth on $(0,\pi/\sqrt k)$ for $k>0$ and on $(0,\infty)$ for $k\le0$; the model radial area is $A_k(r)=\omega_{n-1}\operatorname{sn}_k(r)^{n-1}$, where $\omega_{n-1}$ is the total surface measure of the unit sphere, the model ball volume is $V_k(r)=\int_0^rA_k(t)\,dt$, and the saturated model volume is $V^\star_k(r)=V_k(\min\{r,\pi/\sqrt k\})$ for $k>0$ and $V^\star_k(r)=V_k(r)$ for $k\le0$. Finiteness of $\sigma_p$ gives $\sigma_p(S_pM)=\omega_{n-1}$, the total surface measure being transported by a bijection.

[F5] Cut time and minimizing rays ([[def-cut-time-in-a-unit-tangent-direction]], [[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]): $c_p(v)=\sup\{t>0:d_g(p,\gamma_v(t))=t\}\in(0,+\infty]$; the set $A_p(v)=\{t\ge0:d_g(p,\gamma_v(t))=t\}$ is an initial interval, and if $c_p(v)$ is finite then $c_p(v)\in A_p(v)$. Hence $$d_g\bigl(p,\gamma_v(t)\bigr)=t\qquad\text{for every }0<t<c_p(v):$$ when $c_p(v)<+\infty$ this is the initial-interval property applied to $t\le c_p(v)$, and when $c_p(v)=+\infty$ the set $A_p(v)$ is unbounded, so it contains some $T>t$ and the initial-interval property applies to $t\le T$.

[F6] Bonnet–Myers ([[thm-bonnet-myers]]): the given point $p$ makes $M$ nonempty; if $k>0$ then $\operatorname{diam}(M,g)\le\pi/\sqrt k$ and $M$ is compact. A direct consequence, derived in step 1.1 below, is $c_p(v)\le\pi/\sqrt k$ for every $v\in S_pM$.

[F7] Finiteness of ball volumes ([[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]], [[thm-hopf-rinow]]): $\operatorname{vol}_g$ is a locally finite Borel measure, and on the complete manifold $(M,g)$ every closed bounded subset of the metric space is compact. Since the open ball $B(p,r)$ is contained in the closed ball of radius $r$ about $p$, which is bounded and closed and therefore compact, one has $\operatorname{vol}_g(B(p,r))<+\infty$ for every $r>0$.

[F8] Dominated convergence ([[thm-dominated-convergence]]): if measurable functions $f_j$ satisfy $f_j\to f$ pointwise and $|f_j|\le g$ for a single nonnegative integrable $g$, then $\int f_j\,d\mu\to\int f\,d\mu$.

## Proof

**Proof technique:** direct: extend the radial volume Jacobian by zero beyond the cut time and divide it by the model density $\operatorname{sn}_k^{n-1}$ extended by zero beyond the model pole, so that the relative volume-density comparison makes the resulting profile nonincreasing with limit one at the origin; the polar formula writes the ball volume as the spherical integral of the model-weighted averages of this profile; weighted averages of a nonincreasing profile are nonincreasing, dominated convergence gives the limit at zero, and the vanishing of the model weight past the pole gives saturation in positive curvature.

1.1 The extended profile. [F2, F3, F4, F5, F6, given]
Extend the model density by zero past the model pole by $$W_k(t):=\operatorname{sn}_k(t)^{n-1}\ \ (t\text{ in the positive domain of }\operatorname{sn}_k),\qquad W_k(t):=0\ \ (t\ge\pi/\sqrt k,\ k>0),$$ and extend the radial volume Jacobian by zero past the cut time by $$\tilde J_v(t):=J_p(t,v)\ \ (0<t<c_p(v)),\qquad \tilde J_v(t):=0\ \ (t\ge c_p(v)).$$ Define the extended profile by $$Q_v(t):=\frac{\tilde J_v(t)}{W_k(t)}\ \ \text{where }W_k(t)>0,\qquad Q_v(t):=0\ \ \text{where }W_k(t)=0 .$$ First, the cut time obeys $c_p(v)\le\pi/\sqrt k$ when $k>0$: otherwise some $t$ with $\pi/\sqrt k<t<c_p(v)$ would satisfy $d_g(p,\gamma_v(t))=t$ by [F5] and hence $t>\pi/\sqrt k\ge\operatorname{diam}(M,g)$ by [F6], contradicting the definition of the diameter as a supremum of distances. Consequently the identity $Q_vW_k=\tilde J_v$ holds on all of $(0,\infty)$: where $W_k>0$ it is the definition, and where $W_k=0$, which for $k>0$ means $t\ge\pi/\sqrt k$, one has $t\ge\pi/\sqrt k\ge c_p(v)$ and therefore $\tilde J_v(t)=0$ and $Q_v(t)=0$ by the two definitions. Second, on $(0,\min(c_p(v),\pi/\sqrt k))$ the profile equals $q_v$, which is nonincreasing with $0<q_v\le1$ and $q_v(0+)=1$ by [F3, F4]; and for $t\ge c_p(v)$ one has $Q_v(t)=0$, while $Q_v(s)\ge0$ for every $s<c_p(v)$. Hence $$0\le Q_v(t)\le1\quad\text{and}\quad Q_v(t)\le Q_v(s)\ \text{ whenever }0<s<t ,$$ so $Q_v$ is a nonincreasing $[0,1]$-valued function on $(0,\infty)$, it vanishes identically on $[\pi/\sqrt k,\infty)$ when $k>0$, and $Q_v(t)\to1$ as $t\downarrow0$. Finally $W_k\ge0$ is positive exactly on $(0,\pi/\sqrt k)$ for $k>0$ and on all of $(0,\infty)$ for $k\le0$, so $\int_0^rW_k(t)\,dt>0$ for every $r>0$. [F2, F3, F4, F5, F6, given]

2.1 Ball volume as a spherical integral of model-weighted means. [F1, F2, F4, F5, F7, step 1.1, given]
Fix $r>0$ and apply the polar formula [F1] to the Borel function $f:=\mathbf 1_{B(p,r)}$. For every $v\in S_pM$ and every $0<t<c_p(v)$ one has $d_g(p,\gamma_v(t))=t$ by [F5], hence $\mathbf 1_{B(p,r)}(\gamma_v(t))=\mathbf 1_{\{t<r\}}$; using the identification $J_p=\det a_v$ of [F2] and the definitions of $\tilde J_v$ in step 1.1, the inner integral of the polar formula equals, for every $v$, $$\int_0^{c_p(v)}\mathbf 1_{B(p,r)}(\gamma_v(t))\det a_v(t)\,dt=\int_0^{\min(c_p(v),r)}J_p(t,v)\,dt=\int_0^r\tilde J_v(t)\,dt=\int_0^rQ_v(t)W_k(t)\,dt ,$$ the last equality by $Q_vW_k=\tilde J_v$ and the vanishing of $W_k$ past the model pole from step 1.1 (if $r>c_p(v)$ the first integral stops at $c_p(v)$ and the extension by zero of $\tilde J_v$ supplies the agreement, and if $k>0$ and $r\ge\pi/\sqrt k$ then $c_p(v)\le\pi/\sqrt k\le r$ by step 1.1). Define the model-weighted mean $$A_v(r):=\frac{\int_0^rQ_v(t)W_k(t)\,dt}{\int_0^rW_k(t)\,dt},$$ a real number because the denominator is positive [step 1.1] and the numerator is finite and nonnegative. The inner integral of the polar formula is a measurable function of $v$ [F1] and equals the constant $\int_0^rW_k(t)\,dt$ times $A_v(r)$ for every $v$; therefore $v\mapsto A_v(r)$ is measurable, and pulling the positive constant out of the outer integral gives $$\operatorname{vol}_g\bigl(B(p,r)\bigr)=\Bigl(\int_0^rW_k(t)\,dt\Bigr)\int_{S_pM}A_v(r)\,d\sigma_p(v).$$ Since $V^\star_k(r)=\omega_{n-1}\int_0^rW_k(t)\,dt$ and $\sigma_p(S_pM)=\omega_{n-1}$ by [F4], and since $\operatorname{vol}_g(B(p,r))<+\infty$ by [F7], division yields the identity of finite real numbers $$R_p(r)=\frac{1}{\omega_{n-1}}\int_{S_pM}A_v(r)\,d\sigma_p(v),\qquad r>0 .$$ In particular $R_p$ is a well-defined function on $(0,\infty)$, and $0\le A_v(r)\le1$ because $0\le Q_v\le1$ and $W_k\ge0$ [step 1.1]. [F1, F2, F4, F5, F7, step 1.1, given]

3.1 Monotonicity in the radius. [step 1.1, step 2.1]
Fix $v$. For $0<r_1<r_2$ put $f:=Q_v$, $w:=W_k$ and $$N:=\int_0^{r_1}fw,\quad D:=\int_0^{r_1}w,\quad M:=\int_{r_1}^{r_2}fw,\quad E:=\int_{r_1}^{r_2}w ,$$ so that $D>0$ and $E\ge0$ [step 1.1]. For every $s\in(0,r_1)$ and every $t\in(r_1,r_2)$ one has $f(t)\le f(s)$ by the monotonicity in step 1.1; multiplying by $w(s)w(t)\ge0$ and integrating over $s\in(0,r_1)$ gives $f(t)w(t)D\le w(t)N$, and integrating that over $t\in(r_1,r_2)$ gives $DM\le NE$. Hence $$A_v(r_2)=\frac{N+M}{D+E}\le\frac ND=A_v(r_1),$$ because $D(N+M)\le N(D+E)$ is exactly $DM\le NE$; that is, $r\mapsto A_v(r)$ is nonincreasing on $(0,\infty)$. Since $0\le A_v(r)\le1$ [step 2.1] and $\sigma_p$ is a finite measure, monotonicity of the integral gives $$R_p(r_1)=\frac{1}{\omega_{n-1}}\int_{S_pM}A_v(r_1)\,d\sigma_p(v)\ge\frac{1}{\omega_{n-1}}\int_{S_pM}A_v(r_2)\,d\sigma_p(v)=R_p(r_2),$$ so $R_p$ is nonincreasing on $(0,\infty)$. [step 1.1, step 2.1]

4.1 Limit at the origin. [F1, F3, F8, step 1.1, step 2.1, step 3.1]
Fix $v$. Since $Q_v=q_v$ near $0$ and $q_v(0+)=1$ [F3, step 1.1], for every $\varepsilon>0$ there is $\delta>0$ with $|Q_v(t)-1|\le\varepsilon$ for $0<t<\delta$. Using $W_k\ge0$ and $\int_0^rW_k>0$ [step 1.1], for every $0<r<\delta$, $$|A_v(r)-1|=\frac{\bigl|\int_0^r(Q_v(t)-1)W_k(t)\,dt\bigr|}{\int_0^rW_k(t)\,dt}\le\sup_{0<t<r}|Q_v(t)-1|\le\varepsilon .$$ Hence $A_v(r)\to1$ as $r\downarrow0$ for every $v\in S_pM$, and $0\le A_v(r)\le1$ [step 2.1]. Let $r_j\downarrow0$. The functions $v\mapsto A_v(r_j)$ are measurable [step 2.1] and converge pointwise to the constant $1$, and $|A_v(r_j)|\le1$ for all $j$ and all $v$, where the constant function $1$ is integrable over the finite measure space $(S_pM,\sigma_p)$ [F1]; dominated convergence [F8] gives $$R_p(r_j)=\frac{1}{\omega_{n-1}}\int_{S_pM}A_v(r_j)\,d\sigma_p(v)\longrightarrow\frac{1}{\omega_{n-1}}\int_{S_pM}1\,d\sigma_p(v)=\frac{\sigma_p(S_pM)}{\omega_{n-1}}=1 ,$$ using $\sigma_p(S_pM)=\omega_{n-1}$ [F1, F4]. Since every sequence $r_j\downarrow0$ gives the same limit, $\lim_{r\downarrow0}R_p(r)=1$. [F1, F3, F8, step 1.1, step 2.1, step 3.1]

4.2 Saturation in positive curvature. [F4, F6, step 1.1, step 2.1, step 3.1]
Let $k>0$. By step 1.1 the weight $W_k$ vanishes identically on $[\pi/\sqrt k,\infty)$, so for every $r\ge\pi/\sqrt k$ the two integrals $\int_0^rQ_vW_k$ and $\int_0^rW_k$ agree with $\int_0^{\pi/\sqrt k}Q_vW_k$ and $\int_0^{\pi/\sqrt k}W_k$ and are therefore independent of $r$; hence $A_v(r)=A_v(\pi/\sqrt k)$ for every $v\in S_pM$, and the identity of step 2.1 shows that $R_p$ is constant on $[\pi/\sqrt k,\infty)$. Consistently, for $r>\pi/\sqrt k$ every $q\in M$ satisfies $d_g(p,q)\le\operatorname{diam}(M,g)\le\pi/\sqrt k<r$ by [F6], that is, $B(p,r)=M$, so the saturated numerator is constant there as well. [F4, F6, step 1.1, step 2.1, step 3.1]

5.1 Conclusion. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2, given]
Collect the properties established for the Bishop–Gromov ratio $R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_k(r)$ of a fixed $p\in M$ and a fixed real $k$: $R_p$ is well defined on $(0,\infty)$ by step 2.1, it is nonincreasing by step 3.1, it tends to $1$ as $r\downarrow0$ by step 4.1, and for $k>0$ it is constant on $[\pi/\sqrt k,\infty)$ by step 4.2. Being nonincreasing with limit $1$ at the origin, it satisfies $R_p(r)\le1$ for every $r>0$, that is, $\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$. The argument is uniform in $k\in\mathbb R$: for $k=0$ the weight is $W_0(t)=t^{n-1}$ with no saturation, for $k<0$ the weight is positive on all of $(0,\infty)$, and for $n=2$ the dimension enters only through the exponent $n-1=1$; the hypotheses $n\ge2$, completeness, connectedness and boundarylessness are exactly those carried by the polar formula [F1] and the relative density comparison [F3]. No step selects a direction, an orthonormal basis, a chart, or a sequence of them from a family: the directions are integrated against the fixed finite measure $\sigma_p$ supplied by [F1], and every per-direction statement is made for the given $v$. The only choice principle used is the inherited $\mathrm{AC}_\omega$ of [A1], carried by the cut-time, Jacobi, polar, comparison and convergence suppliers. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2, given] ∎

## Source locator

Datar §§27.2 and 28.1, pp.200–209, contains the volume element in polar coordinates, the model radial density $\operatorname{sn}_k^{n-1}$, and the monotonicity of the quotient of the ball volume by the model volume with limit one at the origin and saturation after the model pole in positive curvature. Eschenburg §§4–5, pp.15–20, introduces the volume-density quotient $q(t)=j(t)/\bar j(t)$, shows it to be monotone decreasing from the value one at the origin, and uses it for the Bishop–Gromov comparison. The proof above is carried out from the published polar integration formula, the in-run relative volume-density comparison, the model volume definition and the two convergence inputs: the weighted-mean monotonicity of step 3.1 is the two-interval estimate for a nonincreasing profile, and the limit of step 4.1 is dominated convergence on the finite measure space $S_pM$.
