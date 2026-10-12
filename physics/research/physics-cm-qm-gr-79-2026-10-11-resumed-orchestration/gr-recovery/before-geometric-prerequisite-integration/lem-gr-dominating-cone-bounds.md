---
id: lem-gr-dominating-cone-bounds
kind: lemma
title: "Causal cone domination in adapted charts and Lipschitz-graph bounds for causal curves"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [cor-gr-adapted-chart-existence, thm-flow-box-theorem, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-causal-conditions-and-global-hyperbolicity, lem-gr-future-causal-classification-by-a-timelike-field, lem-gr-observer-pairing-with-future-causal-vectors, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-lorentz-orthogonality-and-orthogonal-complement, thm-gram-schmidt-orthonormalisation, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-continuous-implies-integrable, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval]
dependency_roles:
  cor-gr-adapted-chart-existence: mathematical-premise
  thm-flow-box-theorem: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the local time coordinate and Lipschitz parametrization of causal curves (Lemma 1.33, Theorem 2.12 and Remark 2.13 printed pp. 29-33; Theorem 2.87 proof printed pp. 60-61)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): the local Lipschitz behaviour of causal curves, section 6.2"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and put
$$n:=\frac{N}{\sqrt{-g(N,N)}}$$
pointwise, so that $n$ is a smooth future unit timelike vector field
([[def-gr-observer-and-rest-space]],
[[def-gr-observer-congruence-and-adapted-charts]]). Write
$\eta:=\operatorname{diag}(-1,1,1,1)$ and, for a chart $(U,x)$, write
$v^a:=dx^a(v)$ for $v\in T_qM$, $q\in U$, and
$|v|_{\mathrm e}:=\bigl(\sum_{a=0}^3(v^a)^2\bigr)^{1/2}$.

**(a) Adapted orthonormal charts.** For every $p\in M$ there are a chart
$(U,x)$ with $x(p)=0$, a radius $r>0$ with $U=x^{-1}(B_r)$, and a constant
$K\ge1$ such that, on all of $U$,
$$n=\frac{\partial}{\partial x^0},\qquad g_{00}\equiv-1,\qquad g_{ab}(p)=\eta_{ab}.$$

**(b) Cone domination.** In the chart of (a), after possibly shrinking $r$,
every future causal $v\in T_qM$, $q\in U$, satisfies
$$|v^i|\le K\,v^0\quad (i=1,2,3),\qquad v^0\ge K^{-1}|v|_{\mathrm e}.$$

**(c) Curve form.** Every future causal curve $\gamma:I\to U$ in the sense of
[[def-gr-causal-curves-and-reachability]] satisfies, for all $s<t$ in $I$,
$$x^0\bigl(\gamma(s)\bigr)<x^0\bigl(\gamma(t)\bigr),\qquad \bigl|x^i(\gamma(t))-x^i(\gamma(s))\bigr|\le K\bigl(x^0(\gamma(t))-x^0(\gamma(s))\bigr),$$
so that $\gamma(I)$ is contained in the graph of a $K$-Lipschitz function over
the interval $x^0(\gamma(I))$.

**(d) Flat minorant cone.** In the chart of (a) and (b), with the constant
$c:=16$ define the flat metric
$$\eta_c:=-(dx^0)^2+c\sum_{i=1}^3(dx^i)^2$$
on $U$ (constant coefficients in this chart). Then every $\eta_c$-causal
vector of every $T_qM$, $q\in U$, is $g$-timelike; and if $q,q'\in U$ satisfy
$\eta_c(q'-q,q'-q)<0$, then $q$ and $q'$ are chronologically related, with
$q\ll q'$ when $x^0(q')>x^0(q)$ and $q'\ll q$ otherwise.

**(e) Relatively compact temporal charts.** Let $(U',z)$ be any chart of $M$
and let $U_0\Subset U'$ be open and relatively compact in $U'$. If the
coordinate function $z^0$ has past timelike gradient at every point of $U_0$
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e)), then
$$\sup_{q\in U_0,\,v\ \text{future causal},\ |v|_{\mathrm e}=1}\frac{|v^i|} {v^0}<\infty\qquad (i=1,2,3),$$
that is, there is $K_0\ge1$ with $|v^i|\le K_0v^0$ for every future causal
$v\in T_qM$, $q\in U_0$.

No choice principle is used: all constants are obtained from finite covers and
one-dimensional compactness.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, the field $n=N/\sqrt{-g(N,N)}$, and a point $p\in M$.

[L1] $N$ is smooth and timelike with $g(N,N)<0$; hence $n$ is a smooth observer congruence with $g(n,n)=-1$ and $g(n,N)<0$ ([[def-gr-smooth-lorentzian-objects]], [[def-gr-observer-and-rest-space]]).

[L2] Every observer congruence admits a local adapted chart: there is a chart $(y^0,y^1,y^2,y^3)$ with domain $U_y\ni p$ and $n=\partial/\partial y^0$ on $U_y$, and its integral curves have constant spatial coordinates ([[cor-gr-adapted-chart-existence]], [[def-gr-observer-congruence-and-adapted-charts]], [[thm-flow-box-theorem]]).

[L3] For a timelike vector $w$ the orthogonal complement $w^\perp$ is a positive definite subspace, and it admits an orthonormal basis ([[def-lorentz-orthogonality-and-orthogonal-complement]], [[thm-gram-schmidt-orthonormalisation]]).

[L4] A nonzero $v\in T_qM$ is future causal exactly when $g_q(v,v)\le0$ and $g_q(v,N_q)\le0$, equivalently $g_q(v,v)\le0$ and $g_q(v,n_q)<0$; the set of future causal vectors is closed in $T_qM\setminus\{0\}$ and is a closed cone ([[def-causal-classification-of-lorentz-vectors]], [[lem-gr-future-causal-classification-by-a-timelike-field]], [[lem-timelike-cone-has-two-convex-components]]).

[L5] If $m$ is a future unit timelike vector and $v$ a nonzero future causal vector then $g_q(m,v)<0$ ([[lem-gr-observer-pairing-with-future-causal-vectors]] clause 1).

[L6] The velocity of a locally absolutely continuous curve in a chart has the coordinate components $\frac{d}{dt}(x^a\circ\gamma)$ almost everywhere, and the class is preserved by smooth charts and by reparametrization ([[lem-gr-causal-curve-calculus]] clauses (a) and (b)).

[L7] Absolutely continuous calculus: an AC function with positive derivative almost everywhere is strictly increasing; an AC function is the integral of its derivative; if $h\le H$ a.e. then $\int h\le\int H$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-continuous-implies-integrable]]).

[L8] The component functions $g_{ab}=g(\partial_a,\partial_b)$ of a smooth covariant $2$-tensor field in a chart are smooth, hence continuous ([[def-gr-smooth-covariant-two-tensor-field]], [[def-continuity-real]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 (Adapted chart and linear spatial normalisation.) By [L1] the field $n$ is a smooth observer congruence, so [L2] gives a chart $(y^0,y^1,y^2,y^3)$ with domain $U_y\ni p$ and $n=\partial/\partial y^0$; translating coordinates we arrange $y(p)=0$, and write $e_a:=\partial/\partial y^a|_p$. On $U_y$ we have $g_{00}=g(n,n)\equiv-1$, and the vectors $e_1,e_2,e_3$ span the tangent space at $p$ of the slice $\{y^0=0\}$, a complement of $\mathbb R n_p=\mathbb R e_0$; the projection $T(w):=w+g(w,n_p)\,n_p$ has kernel $\mathbb R n_p$ and image $n_p^\perp$, hence restricts to a linear isomorphism of $\operatorname{span}(e_1,e_2,e_3)$ onto $n_p^\perp$, and $T$ acts as the identity on $\mathbb R n_p$ ([[def-lorentz-orthogonality-and-orthogonal-complement]], [[def-gr-smooth-lorentzian-objects]]). Write $w_i:=T(e_i)=e_i+g(e_i,n_p)n_p$. [L1, L2, L3, given, construct]

1.2 (Clause (e): domination on a relatively compact temporal chart.) Let $(U',z)$, $U_0$ be as in (e), so $w:=\nabla z^0$ is a smooth past timelike field on $U_0$ ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e)); put $\lambda:=\sqrt{-g(w,w)}>0$ and $m:=-w/\lambda$, so $m$ is a future unit timelike field with $g(m,m)=-1$. Define $\mathcal Z:=\{(q,v):q\in\overline{U_0},\ |v|_{\mathrm e}=1,\ g_q(v,v)\le0,\ g_q(v,n_q)<0\}$, where the Euclidean norm is taken in the chart $z$. It is closed: it is contained in the compact set $\overline{U_0}\times\{|v|_{\mathrm e}=1\}$, and a limit point $(q,v)$ of a sequence in $\mathcal Z$ satisfies $|v|_{\mathrm e}=1$, $g_q(v,v)\le0$ and $g_q(v,n_q)\le0$; the last inequality cannot be an equality because a nonzero causal $v$ orthogonal to the timelike $n_q$ does not exist, so $g_q(v,n_q)<0$. [L4, L8, given, construct]

2.1 (Choice of new spatial coordinates.) By [L3] the restriction of $g_p$ to $n_p^\perp$ is positive definite, so Gram-Schmidt yields an orthonormal basis $v_1,v_2,v_3$ of $n_p^\perp$ with $v_i=\sum_k C^k{}_i\,w_k$ for an invertible real matrix $C$. Define coordinates $z^0:=y^0$ and $z^i:=\sum_j B^i{}_j y^j$, where $B$ is the invertible matrix with $(B^{-1})^0{}_i=\sum_k C^k{}_i\,g(e_k,n_p)$ and $(B^{-1})^j{}_i=C^j{}_i$ for $j\in\{1,2,3\}$; then $y^i$ is a function of $z^1,z^2,z^3$ alone, and the chain rule gives $\partial/\partial z^0=\partial/\partial y^0$ and $\partial/\partial z^i|_p=v_i$. [step 1.1, L3, given, construct, algebra]

2.2 (Positivity of $z^0$-component.) For $(q,v)\in\mathcal Z$ we have $z^0$-component $v^0=g_q(\nabla z^0,v)=-g_q(w,v)=\lambda\,g_q(m,-v)$, and [L5] gives $g_q(m,v)<0$ because $m$ is future unit timelike and $v$ is nonzero future causal; hence $v^0>0$ at every point of $\mathcal Z$. As $\mathcal Z$ is compact by step 1.2 and $(q,v)\mapsto v^0$ is continuous, there is $\beta:=\min_{\mathcal Z}v^0>0$. [step 1.2, L5, L8, given]

3.1 (The metric at $p$ and adaptedness.) In the chart $(U_z,z)$ the identity $\partial_{z^0}=n$ holds on $U_z$ because $z^0=y^0$ and the remaining coordinates are functions of $y^1,y^2,y^3$ only; hence $g_{00}\equiv-1$ and $g_{i0}(p)=g_p(v_i,n_p)=0$, while $g_{ij}(p)=g_p(v_i,v_j)=\delta_{ij}$ by orthonormality. Thus $g_{ab}(p)=\eta_{ab}$, proving the last two assertions of (a); we rename the chart $(U,x)$ and its coordinates $(x^0,x^1,x^2,x^3)$. [step 2.1, L2, given, algebra]

3.2 (Conclusion of clause (e).) Let $v\in T_qM$, $q\in U_0$, be future causal and nonzero. Then $u:=v/|v|_{\mathrm e}$ is again future causal (the defining inequalities are homogeneous under positive scaling, [L4]) and $|u|_{\mathrm e}=1$, so $(q,u)\in\mathcal Z$ and $u^0\ge\beta$; therefore $v^0=|v|_{\mathrm e}u^0\ge\beta|v|_{\mathrm e}\ge\beta|v^i|$ for each $i$, giving $|v^i|\le K_0v^0$ with $K_0:=1/\beta$. This proves (e). [step 1.2, step 2.2, L4, algebra]

4.1 (Clause (b).) In the chart of (a), $\nabla x^0|_p=-n_p$ is past timelike (since $g(\nabla x^0,\cdot)=dx^0$ and $\nabla x^0$ has $g$-components $g^{0a}$ with $g^{0a}(p)=\eta^{0a}$, so $\nabla x^0|_p=-\partial_0|_p=-n_p$, [L1]), and past timelikeness is an open condition; hence there is $r_1\le r$ with $\nabla x^0$ past timelike on $x^{-1}(B_{r_1})$. Applying step 3.2 with $U'=U$ and $U_0=x^{-1}(B_{r_1})$ gives $|v^i|\le K_0v^0$ for all future causal $v$ at points of $U_0$; then $|v|_{\mathrm e}^2=(v^0)^2+\sum_i(v^i)^2\le(1+3K_0^2)(v^0)^2$, so $v^0\ge K_0'^{-1}|v|_{\mathrm e}$ with $K_0':=\sqrt{1+3K_0^2}$. Replacing $(U,x,r)$ by $(x^{-1}(B_{r_1}),x,r_1)$ and $K$ by $\max(K_0,K_0')$ proves (b) and completes (a). [step 3.1, step 3.2, L1, given, algebra]

4.2 (Clause (d), first part.) At $p$ the form $g_p=\eta$ equals the constant form $\eta$ of the chart, and for every unit coordinate vector $e=(e^0,e_s)$ with $\eta_c(e,e)\le0$, i.e. $|e_s|\le|e^0|/4$, we have $\eta(e,e)=-(e^0)^2+|e_s|^2\le-(15/16)(e^0)^2<0$, since $|e|_{\mathrm e}=1$ forces $(e^0)^2\ge16/17$. The functions $(q,v)\mapsto g_q(v,v)$ are continuous on $U\times T M$ by [L8], and the set of pairs $(p,e)$ with $|e|_{\mathrm e}=1$, $\eta_c(e,e)\le0$ is compact, so there is a ball $x^{-1}(B_{r_2})\subseteq U$ on which $g_q(e,e)<0$ for every coordinate unit vector $e$ with $\eta_c(e,e)\le0$. For any $\eta_c$-causal $v\ne0$ at $q\in x^{-1}(B_{r_2})$, the normalised vector $v/|v|_{\mathrm e}$ is again $\eta_c$-causal of coordinate norm one, so $g_q(v,v)=|v|_{\mathrm e}^2g_q(v/|v|_{\mathrm e},v/|v|_{\mathrm e})<0$. [step 3.1, L8, given, algebra]

5.1 (Clause (c).) Let $\gamma:I\to U$ be a future causal curve and let $s<t$ in $I$. By [L6] the components $x^a\circ\gamma$ are AC on $[s,t]$ and their derivatives are the coordinate components of $\gamma'$ at every differentiability point; the set of full-measure parameter values at which $\gamma'$ exists, is nonzero and is future causal has full measure, and at such values step 4.1 gives $0<v^0$ and $|v^i|\le Kv^0$. Hence $(x^0\circ\gamma)'\ge0$ a.e. and is positive a.e. (it vanishes only where $v^0=0$, which happens only off the full-measure set); by [L7] $x^0\circ\gamma$ is strictly increasing, and $$|x^i(\gamma(t))-x^i(\gamma(s))|=\Bigl|\int_s^t v^i\Bigr|\le\int_s^t|v^i|\le K\int_s^t v^0=K\bigl(x^0(\gamma(t))-x^0(\gamma(s))\bigr).$$ Thus on the image of $\gamma$ the spatial coordinates are a $K$-Lipschitz function of $x^0$, which is (c). [step 4.1, L6, L7, given, algebra]

5.2 (Clause (d), second part.) Let $q,q'\in x^{-1}(B_{r_2})$ with $\eta_c(\delta,\delta)<0$, $\delta:=q'-q$, and $x^0(q')>x^0(q)$; then $\delta^0>0$. The coordinate segment $\sigma(t):=q+t\delta$, $t\in[0,1]$, stays in $x^{-1}(B_{r_2})$ because that ball is convex in coordinates, and its velocity is the constant coordinate vector $\delta$, which is $\eta_c$-causal; by step 4.2, $g_{\sigma(t)}(\delta,\delta)<0$ for every $t$, so $\sigma$ is a smooth future timelike curve from $q$ to $q'$ (its velocity is nonzero and timelike with positive $x^0$-component, hence future directed); hence $q\ll q'$. Swapping $q,q'$ gives the other case. [step 4.2, given, algebra]

6.1 (Conclusion.) Steps 1.1, 2.1, 3.1 and 4.1 prove (a); steps 3.2 and 4.1 prove (b) and (e); step 5.1 proves (c); steps 4.2 and 5.2 prove (d). [step 3.1, step 4.1, step 5.1, step 4.2, step 5.2] ∎

## Remarks

- **The two-facing role of the chart.** Clause (b) is used to bound the geometry of causal curves by the time coordinate (Lipschitz graphs and Riemannian-length comparisons), while clause (d) is used in the opposite direction: to force chronological relations from coordinate cones that are narrower than the $g$-cones. The two uses require different constants and both are obtained from the same smallness of the chart.

- **Dependence on the auxiliary structure.** The chart of (a) exists because the time orientation provides a global future unit timelike field; the proof uses the flow-box theorem only through [[cor-gr-adapted-chart-existence]] and uses no completeness of any metric.

- **Scope.** The lemma is local and purely mathematical; it asserts nothing about singularities, completeness or the physical interpretation of the time coordinate.
