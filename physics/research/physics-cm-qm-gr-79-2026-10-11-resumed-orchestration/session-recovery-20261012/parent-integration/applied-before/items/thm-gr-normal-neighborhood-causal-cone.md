---
id: thm-gr-normal-neighborhood-causal-cone
kind: theorem
title: "Local causality in a convex normal ball: causal reachability is the exponential cone, the Lorentzian length is bounded by the displacement radius, and null endpoints force the null geodesic"
status: draft
origin: session
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-position-vector-differential, lem-gr-normal-neighborhood-length-monotonicity, lem-gr-causal-curve-initial-cone-step, lem-gr-causal-curve-calculus, def-gr-normal-neighborhoods-and-position-vectors, def-gr-causal-curves-and-reachability, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-timelike-worldline-and-proper-time, lem-gr-temporal-functions-and-time-functions, lem-gr-observer-pairing-with-future-causal-vectors, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, thm-gr-local-geodesics-and-exponential-map, thm-gr-convex-normal-neighborhoods, thm-gr-point-normal-and-exponential-coordinate-charts, lem-gr-joint-exponential-diffeomorphism, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous, thm-gronwall-integral-inequality, thm-chain-rule-for-total-derivatives, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-continuous-implies-integrable, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  lem-gr-position-vector-differential: mathematical-premise
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  lem-gr-causal-curve-initial-cone-step: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-temporal-functions-and-time-functions: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): normal coordinates, the function sigma_p and the local causality theorem, Proposition 2.2.3 printed pp. 8-12, Proposition 2.4.5 with Lemmas 2.4.8-2.4.9 and Corollary 2.4.10 printed pp. 20-24"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Gauss' Lemma (Theorem 2.6 printed p. 27) and local maximization properties of geodesics (Theorem 2.9 and Corollary 2.10 printed pp. 29-32)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]). Let $p\in M$ and let $C$ be a
strictly convex normal coordinate ball around $p$ as produced by
[[thm-gr-convex-normal-neighborhoods]], small enough that the exponential
chart
$$u:=\psi\circ\exp_p^{-1}:C\to\mathbb R^4$$
of [[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (b)
(for a $g_p$-orthonormal basis with $e_0$ future directed) satisfies
$$g(\nabla u^0,\nabla u^0)<0,\qquad g(\nabla u^0,N)>0\qquad\text{on }C;$$
such a choice exists because both inequalities hold at $p$ (where
$\nabla u^0=-\partial_0$) and are open conditions. Write
$v(q):=\exp_p^{-1}(q)$, $P(p,q):=d(\exp_p)_{v(q)}(v(q))$ and
$D_p^2(q):=g_p(v(q),v(q))=\eta(u(q),u(q))$ on $C$, and let $J^+_C(p)$,
$I^+_C(p)$ be the sets of endpoints in $C$ of future causal, respectively
future timelike, curves ([[def-gr-causal-curves-and-reachability]]) with
image in $C$ starting at $p$. Then:

**(a) Causal containment.** For every future causal curve
$\sigma:[0,1]\to C$ with $\sigma(0)=p$ and every $t\in[0,1]$: the position
vector $v(\sigma(t))$ is future causal or zero; equivalently
$D_p^2(\sigma(t))\le0$ and $u^0(\sigma(t))\ge0$.

**(b) Cone characterizations.** With $\mathcal C^+$, $\mathcal T^+$,
$\mathcal N^+$ the sets of future causal or zero, future timelike, and
future null nonzero vectors of $\exp_p^{-1}(C)$ respectively,
$$J^+_C(p)=\exp_p(\mathcal C^+),\qquad I^+_C(p)=\exp_p(\mathcal T^+),\qquad J^+_C(p)\setminus\bigl(I^+_C(p)\cup\{p\}\bigr)=\exp_p(\mathcal N^+).$$

**(c) Null rigidity.** Let $\sigma:[0,1]\to C$ be future causal with
$\sigma(0)=p$, and let $\hat s\in(0,1]$ satisfy: $v(\sigma(\hat s))$ is
future null nonzero and $v(\sigma(t))\ne0$ for every $t\in(0,\hat s]$. Then
there are $v_0\in\mathcal N^+$ and a nondecreasing absolutely continuous
surjection $\varphi:[0,\hat s]\to[0,1]$ with
$\sigma(t)=\exp_p(\varphi(t)v_0)$ for $0\le t\le\hat s$.

**(d) Length maximality.** Let $\sigma:[0,1]\to C$ be future causal with
$\sigma(0)=p$. Then
$$L_g(\sigma)\le\sqrt{-D_p^2\bigl(\sigma(1)\bigr)}=\sqrt{-g_p\bigl(v(\sigma(1)),v(\sigma(1))\bigr)} .$$
If moreover $v(\sigma(1))$ is future timelike and $v(\sigma(t))\ne0$ for all
$t\in(0,1]$, then equality holds if and only if there are $v_0$ future
timelike and a nondecreasing absolutely continuous surjection
$\varphi:[0,1]\to[0,1]$ with $\sigma(t)=\exp_p(\varphi(t)v_0)$ for all $t$.

## Facts & Assumptions

**Given:** A strictly convex normal ball $C$ around $p$, the exponential chart $u=\psi\circ\exp_p^{-1}$ on $C$ with $g(\nabla u^0,\nabla u^0)<0$ and $g(\nabla u^0,N)>0$, and the functions $v$, $P$, $D_p^2$ as above.

[L1] In the chart $u$: $u(p)=0$; the coordinate rays $s\mapsto u^{-1}(sy)$ are affine geodesics, namely $u^{-1}(sy)=\exp_p(\psi^{-1}(sy))$; and $\nabla u^0$ is past directed ([[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (b), [[thm-gr-local-geodesics-and-exponential-map]], [[def-gr-smooth-lorentzian-objects]]).

[L2] $u^0$ is a temporal function on $C$ ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e)); hence along every future causal curve $\gamma$ in $C$ the composite $u^0\circ\gamma$ is locally absolutely continuous, nondecreasing, with strictly positive derivative almost everywhere, and it is strictly increasing when $\gamma$ is future timelike; in particular $u^0(\gamma(s))\ge0$ with the value $0$ only at the starting point of a curve from $p$ ([[lem-gr-temporal-functions-and-time-functions]] clauses (a)-(b)).

[L3] $D_p^2$ is smooth on $C$, $d(D_p^2)_q=2g_q(P(p,q),\cdot)$, i.e. $\nabla D_p^2=2P(p,q)$; and $P(p,q)=0$ if and only if $q=p$ ([[lem-gr-position-vector-differential]] clauses (a) and (b), [[def-gr-normal-neighborhoods-and-position-vectors]] clause (d)).

[L4] Reverse Cauchy–Schwarz: for future causal nonzero $z$ and future timelike $T$, $g(T,z)<0$; for future causal nonzero $z$ and future causal nonzero $T$, $g(T,z)\le0$ with equality if and only if $T,z$ are both null and positive multiples of each other; a limit of future timelike vectors is future causal or zero ([[lem-gr-observer-pairing-with-future-causal-vectors]], [[lem-timelike-cone-has-two-convex-components]]).

[L5] Along the geodesic $s\mapsto\exp_p(sv)$ with $v\ne0$, the velocity at parameter $s>0$ has the same causal character and future/past direction as $v$; in particular $v(q)$ and $P(p,q)$ are future causal together ([[def-gr-normal-neighborhoods-and-position-vectors]] clause (c), [[thm-gr-local-geodesics-and-exponential-map]] clause (c)).

[L6] Absolutely continuous calculus: if $h$ is AC with $h'\le0$ a.e. on an interval then $h$ is nonincreasing; the chain rule holds at a.e. differentiability points of a composition of an AC curve with a smooth (hence locally Lipschitz) function, which is AC; the FTC for AC functions applies; Grönwall's inequality holds for AC functions ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous]], [[thm-chain-rule-for-total-derivatives]], [[thm-gronwall-integral-inequality]]).

[L7] Length: $L_g(\gamma)=\int\sqrt{-g(\gamma',\gamma')}$ is finite on compact parameter intervals with integrable density ([[def-gr-timelike-worldline-and-proper-time]], [[thm-continuous-implies-integrable]]).

[L8] Parameter dependence: for the metrics $g_\epsilon:=g-\epsilon\,e_0^\flat\otimes e_0^\flat$, $\epsilon>0$, where $e_0:=N/\sqrt{-g(N,N)}$ is the global smooth future unit timelike field, every $g$-causal nonzero vector is $g_\epsilon$-timelike, the $g_\epsilon$-geodesic flows and the functions $q\mapsto D^2_{p,\epsilon}(q):=g_{\epsilon,p}(\exp^{g_\epsilon}_p{}^{-1}q,\exp^{g_\epsilon}_p{}^{-1}q)$ on a common small ball depend continuously on $\epsilon$ and converge to their $g$-counterparts as $\epsilon\downarrow0$; this is smooth dependence of ODE solutions on parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]], [[lem-gr-joint-exponential-diffeomorphism]] clause (c), [[lem-gr-observer-pairing-with-future-causal-vectors]]).

## Proof

**Proof technique:** direct.

1.1 (The radial field is normal to the $D_p^2$-levels.) Let $\lambda\mapsto y(\lambda)$ be a curve in a level set of $D_p^2$, i.e. $\eta_{\mu\nu}y^\mu(\lambda)y^\nu(\lambda)=\tau$ in the chart $u$, and let $\gamma(\lambda,s):=u^{-1}(sy(\lambda))$; put $T:=\partial_s\gamma=y^\mu\partial_\mu$ and $X:=\partial_\lambda\gamma$. By [L1] every $s\mapsto\gamma(\lambda,s)$ is a geodesic, so $\nabla_TT=0$ and $s\mapsto g(T,T)$ is constant with value $\eta_{\mu\nu}y^\mu y^\nu=\tau$. Since $T,X$ are coordinate fields of a smooth two-parameter family, $[T,X]=0$, so $\nabla_TX=\nabla_XT$ and $\frac{d}{ds}g(T,X)=g(\nabla_TT,X)+g(T,\nabla_TX)=g(T,\nabla_XT)=\frac12X(g(T,T))=0$; hence $g(T,X)$ is constant in $s$, and its value at $s=0$ is $0$ because $T=0$ there. Thus $T$ is $g$-orthogonal to the tangent of every curve in the level set, hence proportional to $\nabla D_p^2$ at every point off $p$; at $s=1$, $T=y^\mu\partial_\mu$ and $\nabla D_p^2=2P(p,q)$ by [L3], so $T$ is a nonzero multiple of $P(p,q)$ for $q\ne p$. [L1, L3, given, algebra]

2.1 (Character and direction of the position vector.) In the notation of step 1.1, for $s>0$ the vector $T(\lambda,s)$ is a nonzero multiple of $y^\mu(\lambda)\partial_\mu$; by $g(T,T)=\eta(y,y)$ its causal character is that of the coordinate vector $y(\lambda)$, and its future/past orientation is constant in $s$ and agrees with the sign of $y^0$, because $\partial_0$ is future directed at $p$ and the orientation cannot change along the family of nonzero causal vectors. Since the proportionality factor between $T$ and $\nabla D_p^2=2P(p,q)$ is positive (at the points of a ray with $s$ small and $y^0>0$ both vectors point in the direction of increasing $s$), we obtain: for $q\in C\setminus\{p\}$, $P(p,q)$ is future timelike if $D_p^2(q)<0$ and $u^0(q)>0$; future null nonzero if $D_p^2(q)=0$ and $u^0(q)>0$; spacelike if $D_p^2(q)>0$. [step 1.1, L1, L3, given, algebra]

3.1 (Monotonicity for curves that enter the timelike region.) Let $\gamma:[0,1]\to C$ be future causal from $p$ and put $F:=D_p^2\circ\gamma$. By [L3] and [L6], $F$ is AC with $F'(s)=2g_{\gamma(s)}(P(p,\gamma(s)),\gamma'(s))$ a.e.; by [L2], $u^0(\gamma(s))>0$ for $s>0$. Suppose $F(s_1)<0$ for some $s_1\in(0,1]$, and let $s^*:=\sup\{u\in[s_1,1]:F<0\ \text{on}\ [s_1,u]\}$. On $[s_1,s^*)$ step 2.1 applies at every differentiability point of $\gamma$ and, together with [L4] and [L5], shows that the integrand is $\le0$ a.e.; hence $F$ is nonincreasing on $[s_1,s^*]$. If $s^*<1$, continuity gives $F(s^*)=0$, contradicting $F(s^*)\le F(s_1)<0$. Hence $F<0$ on $[s_1,1]$. [step 2.1, L2, L4, L5, L6, given, algebra]

4.1 (Timelike curves from the vertex.) Let $\gamma:[0,1]\to C$ be future timelike with $\gamma(0)=p$. The set $S$ of parameters $s$ at which $\gamma'(s)$ exists and is future timelike has full measure, so choose $s_i\in S\cap(0,1]$ arbitrarily small. Since $C$ is a strictly convex normal ball, $C$ is a normal neighborhood of $q_i:=\gamma(s_i)$ ([[thm-gr-convex-normal-neighborhoods]] clause (a)); applying [[lem-gr-causal-curve-initial-cone-step]] at base $q_i$ to the future causal curve $s\mapsto\gamma(s_i+s)$ gives that its position vectors are future causal near $s_i$, and the differentiability of $\gamma$ at $s_i$ together with the smoothness of the two-point inverse ([[lem-gr-joint-exponential-diffeomorphism]] clause (c)) gives the expansion $\exp_{q_i}^{-1}(\gamma(s))=(s-s_i)\gamma'(s_i)+o(s-s_i)$ in the normal coordinates at $q_i$; since $\gamma'(s_i)$ is timelike this yields $D^2_{q_i}(\gamma(s))<0$ for $s>s_i$ sufficiently close to $s_i$. Repeating the argument of step 3.1 with the base point $q_i$ (all ingredients are local and the properties [L1]-[L6] hold at every point of $C$) gives $D^2_{q_i}(\gamma(s))<0$ for all $s\in[s_i,1]$. Letting $s_i\downarrow0$ and using the continuity in the base point ([[lem-gr-joint-exponential-diffeomorphism]] clause (c)) we obtain $F=D_p^2\circ\gamma\le0$ on $[0,1]$; moreover $F(s_1)<0$ for some small $s_1>0$ (the expansion at a differentiability point near $0$), so step 3.1 gives $F<0$ on $(0,1]$. [step 3.1, L2, L6, given, algebra]

5.1 (General causal curves.) Let $\gamma:[0,1]\to C$ be future causal from $p$ and let $F:=D_p^2\circ\gamma$. For $\epsilon>0$ consider the metric $g_\epsilon=g-\epsilon\,e_0^\flat\otimes e_0^\flat$ of [L8], for which $\gamma$ is timelike. Steps 1.1-4.1 apply to the time-oriented smooth Lorentzian manifold $(M,g_\epsilon,e_0)$ (their statements are universally quantified over the metric), on a convex normal ball for $g_\epsilon$ contained in $C$ for all small $\epsilon$, which exists by [L8]; they give $F_\epsilon:=D^2_{p,\epsilon}\circ\gamma\le0$ on $[0,1]$. By [L8], $F_\epsilon\to F$ pointwise as $\epsilon\downarrow0$, so $F\le0$ on $[0,1]$. By [L2], $u^0(\gamma(s))\ge0$; hence step 2.1 gives that $P(p,\gamma(s))$ is future causal or zero for every $s$, and by [L5] the same holds for $v(\gamma(s))$. This proves (a). [step 2.1, step 4.1, L2, L5, L8, algebra]

6.1 (Cone characterizations.) If $v\in\mathcal C^+$ then $t\mapsto\exp_p(tv)$, $t\in[0,1]$, is a future causal curve contained in $C$ (the domain $\exp_p^{-1}(C)=W_p$ is star-shaped) from $p$ to $\exp_p(v)$; if $v\in\mathcal T^+$ it is future timelike. Hence $\exp_p(\mathcal C^+)\subseteq J^+_C(p)$ and $\exp_p(\mathcal T^+)\subseteq I^+_C(p)$; step 5.1 gives $J^+_C(p)\subseteq\exp_p(\mathcal C^+)$. If $\gamma$ is future timelike from $p$ to $q$, step 4.1 gives $D_p^2(q)<0$, so by step 2.1 $v(q)$ is future timelike; this gives $I^+_C(p)\subseteq\exp_p(\mathcal T^+)$. Finally, if $v\in\mathcal N^+$ then $\exp_p(v)\in J^+_C(p)\setminus(I^+_C(p)\cup\{p\})$; conversely, if $q\in J^+_C(p)\setminus(I^+_C(p)\cup\{p\})$, then (a) gives $D_p^2(q)\le0$, the $I^+$ characterization rules out $D_p^2(q)<0$, and $q\ne p$ rules out $v(q)=0$; hence $D_p^2(q)=0$ and $v(q)$ is null nonzero, future by (a). This proves (b). [step 2.1, step 4.1, step 5.1, given]

6.2 (Null rigidity.) Assume the hypotheses of (c). By step 5.1, $F\le0$ on $[0,\hat s]$ and $F(\hat s)=0$. If $F(s_0)<0$ for some $s_0\in(0,\hat s)$, then step 3.1 applied to the sub-curve $\sigma|_{[s_0,\hat s]}$ gives $F(\hat s)<0$, a contradiction; hence $F\equiv0$ on $[0,\hat s]$, so $F'\equiv0$ a.e. and the derivative formula of step 3.1 combined with [L4] shows that at almost every $t\in(0,\hat s]$ the vectors $P(p,\sigma(t))$ and $\sigma'(t)$ (the latter nonzero by the curve class) are both future null and positive multiples of each other. Since $\sigma'(t)=d(\exp_p)_{v(t)}(v'(t))$ and $P(p,\sigma(t))=d(\exp_p)_{v(t)}(v(t))$ with invertible differential, this gives $v'(t)=\lambda(t)v(t)$ a.e. on $(0,\hat s]$ with $\lambda(t)\ge0$. Fix a Euclidean inner product on $T_pM$, put $v_0:=v(\hat s)\ne0$ and $\varphi(t):=\langle v(t),v_0\rangle/|v_0|^2$; then $\varphi$ is AC with $\varphi(\hat s)=1$, and $w:=v-\varphi v_0$ is AC with $w(\hat s)=0$ and $w'=v'-\varphi'v_0=\lambda v-\lambda\varphi v_0=\lambda w$ a.e. on $(0,\hat s]$, because $\varphi'=\lambda\varphi$ a.e. follows by differentiating the inner product. Grönwall's inequality [L6] gives $|w(t)|\le|w(\hat s)|\exp(\int_t^{\hat s}\lambda)=0$, so $v=\varphi v_0$ on $[0,\hat s]$; moreover $\varphi(0)=0$, $\varphi\ge0$ and $\varphi'=\lambda\varphi\ge0$ a.e., so $\varphi$ is nondecreasing with image $[0,1]$ and $\sigma(t)=\exp_p(\varphi(t)v_0)$. This proves (c). [step 3.1, step 5.1, L4, L6, algebra]

7.1 (Length maximality.) Let $\sigma$ be future causal from $p$ and let $t_1:=\sup\{t\in[0,1]:D_p^2(\sigma(t))=0\}$, a nonempty closed set containing $0$. If $D_p^2(\sigma(s_0))<0$ for some $s_0<t_1$, step 3.1 would give $D_p^2(\sigma(t_1))<0$, a contradiction; hence $D_p^2(\sigma(t))=0$ for $t\le t_1$. By the a.e. argument of step 6.2 the velocity $\sigma'$ is null almost everywhere on $[0,t_1]$, so $L_g(\sigma|_{[0,t_1]})=0$ by [L7]. If $t_1=1$, the inequality is $0\le0$. If $t_1<1$, then $D_p^2(\sigma(t))<0$ for $t\in(t_1,1]$ and [[lem-gr-normal-neighborhood-length-monotonicity]] clause (b) applies on $[s_1,1]$ for every $s_1>t_1$: with $R:=\sqrt{-D_p^2\circ\sigma}$, $R(1)-R(s_1)\ge L_g(\sigma|_{[s_1,1]})$. Letting $s_1\downarrow t_1$, $R(s_1)\to R(t_1)=0$ and $L_g(\sigma|_{[s_1,1]})\to L_g(\sigma|_{[t_1,1]})=L_g(\sigma)$, so $L_g(\sigma)\le R(1)$ as claimed. [step 3.1, step 6.2, L7, given]

8.1 (Equality case.) Assume $v(\sigma(1))$ is future timelike and $v(\sigma(t))\ne0$ for all $t\in(0,1]$. Then $D_p^2(\sigma(1))<0$, so $t_1<1$ in the notation of step 7.1. If $t_1>0$, equality in the chain of step 7.1 forces equality in the reverse Cauchy–Schwarz inequality at almost every $t\in(t_1,1]$, hence $\sigma'(t)=\lambda(t)P(p,\sigma(t))$ a.e. on $(t_1,1]$ with $\lambda(t)\ge0$; the ray argument of step 6.2 on $(t_1,1]$ then gives $v(t)=\varphi(t)v(1)$ on $[t_1,1]$ with $\varphi$ AC. But $v(t_1)$ lies in the zero set of $D_p^2$, so it is null, while $v(1)$ is timelike; a nonzero multiple of a timelike vector is timelike, so $\varphi(t_1)=0$ and $v(t_1)=0$, i.e. $\sigma(t_1)=p$, contradicting $v(\sigma(t))\ne0$ for $t>0$ unless $t_1=0$. Thus $t_1=0$, and the same ray argument on $(0,1]$ yields $v(t)=\varphi(t)v(1)$ with $\varphi(0)=0$ by continuity, $\varphi\ge0$ and $\varphi'=\lambda\varphi\ge0$ a.e., so $\varphi$ is a nondecreasing AC surjection onto $[0,1]$ and $\sigma(t)=\exp_p(\varphi(t)v(1))$ with $v_0:=v(1)$ future timelike. Conversely, for $\sigma(t)=\exp_p(\varphi(t)v_0)$ with $\varphi$ a nondecreasing AC surjection, $L_g(\sigma)=\sqrt{-g_p(v_0,v_0)}=\sqrt{-D_p^2(\sigma(1))}$ by the scaling and reparametrization rules for the radial geodesic, so equality holds. This proves (d). [step 7.1, step 6.2, L4, L7, algebra]

9.1 Claims (a)-(d) are steps 5.1, 6.1, 6.2 and 7.1-8.1. [step 5.1, step 6.1, step 6.2, step 7.1, step 8.1] ∎

## Remarks

- **Why the rigidity needs a non-vanishing hypothesis.** Without it the
  statement is false: in flat Minkowski space the broken null path
  $0\to e_+\to0\to e'_+$ along two different future null directions is
  future causal and absolutely continuous, its position vectors are null
  throughout, and its image is not a geodesic. The failure mechanism is a
  return to the vertex; the hypothesis of (c) excludes exactly that, and the
  same caveat applies to the equality case in (d).

- **Sharpness.** The bound in (d) is attained exactly by the radial
  geodesics with nondecreasing reparametrization; this is the local form of
  the statement that timelike geodesics maximize Lorentzian length.
