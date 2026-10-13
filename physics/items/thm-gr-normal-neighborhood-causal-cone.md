---
id: thm-gr-normal-neighborhood-causal-cone
kind: theorem
title: "Local causality in a convex normal ball: causal reachability is the
  exponential cone, the Lorentzian length is bounded by the displacement radius,
  and null endpoints force the null geodesic"
status: published
origin: session
domain: mathematics
dependency_level: 16
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-dependent-choice
  - def-countable-choice
  - lem-gr-position-vector-differential
  - lem-gr-normal-neighborhood-length-monotonicity
  - lem-gr-causal-curve-initial-cone-step
  - lem-gr-causal-curve-calculus
  - def-gr-normal-neighborhoods-and-position-vectors
  - def-gr-causal-curves-and-reachability
  - def-gr-timelike-worldline-and-proper-time
  - def-gr-observer-and-rest-space
  - lem-gr-observer-projection-decomposition
  - lem-gr-observer-pairing-with-future-causal-vectors
  - lem-timelike-cone-has-two-convex-components
  - def-causal-classification-of-lorentz-vectors
  - thm-gr-local-geodesics-and-exponential-map
  - thm-gr-convex-normal-neighborhoods
  - lem-gr-joint-exponential-diffeomorphism
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-absolutely-continuous-functions-have-integrable-derivatives
  - thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-implies-integrable
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-gr-metric-selected-connection
  - def-gr-smooth-lorentzian-objects
  - def-interval
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - lem-q-and-irrationals-dense-r
  - thm-rationals-countable
  - lem-gr-parallel-transport-and-geodesic-speed
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  lem-gr-causal-curve-initial-cone-step: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-rationals-countable: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011):
        normal coordinates, the function sigma_p and the local causality
        theorem, Proposition 2.2.3 printed pp. 8-12, Proposition 2.4.5 with
        Lemmas 2.4.8-2.4.9 and Corollary 2.4.10 printed pp. 20-24"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity
        22 (2019), article 3: Gauss' Lemma (Theorem 2.6 printed p. 27) and local
        maximization properties of geodesics (Theorem 2.9 and Corollary 2.10
        printed pp. 29-32)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the absolutely continuous causal-curve
calculus and the supplied causal results used below.

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]). Let $C\subseteq M$ be a strictly
convex normal set ([[def-gr-normal-neighborhoods-and-position-vectors]]
clause (b)), let $p\in C$, and write
$$W_p:=\exp_p^{-1}(C)\subseteq T_pM,\qquad v(q):=\exp_p^{-1}(q),\qquad P(p,q):=d(\exp_p)_{v(q)}(v(q)),\qquad D_p^2(q):=g_p(v(q),v(q)).$$
Define
$$J_C^+(p):=\{p\}\cup\{q\in C:\text{there is a future causal curve } \sigma:[0,1]\to C\text{ with }\sigma(0)=p,\ \sigma(1)=q\},$$
so the reflexive endpoint $p$ is included even though a constant curve is
not in the curve class. Define
$$I_C^+(p):=\{q\in C:\text{there is a future timelike curve } \sigma:[0,1]\to C\text{ with }\sigma(0)=p,\ \sigma(1)=q\}$$
([[def-gr-causal-curves-and-reachability]]). Put
$$\mathcal C^+:=\{v\in W_p:v\text{ is future causal or }v=0\},\quad \mathcal T^+:=\{v\in W_p:v\text{ is future timelike}\},\quad \mathcal N^+:=\{v\in W_p:v\text{ is future null and }v\ne0\}.$$
Then:

**(a) Causal containment.** For every future causal curve
$\sigma:[0,1]\to C$ with $\sigma(0)=p$, the position vector
$v(\sigma(t))$ is future causal or zero for every $t\in[0,1]$.

**(b) Cone characterizations.**
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

**Given:** A strictly convex normal set C, a point p in C, its normal exponential domain W_p, and the functions v, P, D_p^2 specified in the Statement.

[L1] Each point q in C has a star-shaped open domain W_q on which exp_q:W_q to C is a diffeomorphism, and each pair of points in C has a unique geodesic segment in C ([[thm-gr-convex-normal-neighborhoods]], [[def-gr-normal-neighborhoods-and-position-vectors]]).

[L2] The two-point inverse is smooth on C x C; D_p^2 is smooth and d(D_p^2)_q(w)=2 g_q(P(p,q),w); P(p,q)=0 exactly when q=p ([[lem-gr-position-vector-differential]] clauses (a),(c), [[def-gr-normal-neighborhoods-and-position-vectors]]).

[L3] Reverse Cauchy-Schwarz and its equality cases. At one point, let $e=N/\sqrt{-g(N,N)}$ be the specified future unit timelike observer. Its orthogonal complement is positive definite, and the projection decomposition of [[lem-gr-observer-projection-decomposition]] applies; use the induced positive-definite inner product and its Cauchy-Schwarz inequality ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

If $T$ is future timelike, put $e_T=T/\sqrt{-g(T,T)}$ and write
$z=\lambda e_T+u$ with $g(e_T,u)=0$. The orthogonal complement of $e_T$ is
positive definite, $\lambda=-g(e_T,z)\ge0$, and future causality of $z$
gives $g(u,u)\le\lambda^2$. Hence
$$-g(T,z)=\sqrt{-g(T,T)}\,\lambda \ge\sqrt{-g(T,T)}\sqrt{\lambda^2-g(u,u)} =\sqrt{-g(T,T)}\sqrt{-g(z,z)}.$$
Equality holds exactly when $u=0$, that is, when $z$ is a nonnegative
multiple of $T$ (including $z=0$).

If $T,z$ are both future causal and nonzero, decompose relative to $e$ as
$T=a e+u$ and $z=b e+w$, where $a=-g(e,T)>0$, $b=-g(e,z)>0$, and
$g(u,u)\le a^2$, $g(w,w)\le b^2$. Then
$$g(T,z)=-ab+g(u,w)\le-ab+\sqrt{g(u,u)}\sqrt{g(w,w)}\le0.$$
Equality requires both $T,z$ to be null and equality in the positive-definite
Cauchy-Schwarz inequality, which makes them positive multiples of one
another ([[lem-gr-observer-projection-decomposition]],
[[lem-gr-observer-pairing-with-future-causal-vectors]],
[[def-causal-classification-of-lorentz-vectors]]).

[L4] Radial geodesics preserve causal character and time orientation under parallel transport, and their terminal tangent is P(p,q) ([[lem-gr-parallel-transport-and-geodesic-speed]], [[thm-gr-local-geodesics-and-exponential-map]] clause (c)).

[L5] An absolutely continuous curve composed with a smooth function is absolutely continuous; the chain rule holds almost everywhere and the fundamental theorem applies ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous]], [[thm-chain-rule-for-total-derivatives]]).

[L6] Lorentzian length of a future causal curve is the finite Lebesgue integral defined in [[lem-gr-normal-neighborhood-length-monotonicity]]; its density is integrable on compact parameter intervals by local absolute continuity and bounded metric coefficients.

## Proof

**Proof technique:** direct.

1.1 (Causal containment.) Apply [[lem-gr-causal-curve-initial-cone-step]] to sigma. Its strengthened conclusion gives that v(sigma(t)) is future causal or zero for every t in (0,1]; at t=0 it is zero by definition. This proves (a). [L1, given]

1.2 (Derivative on a level set.) Let f:J to R be absolutely continuous and c in R. At every differentiability point t of f with f(t)=c and f'(t) not equal to zero, the definition of derivative gives a neighborhood in which f(u) differs from c for every u not equal to t. Thus t is isolated in the level set f^{-1}(c). The isolated points of a subset of a real interval are countable ([[lem-q-and-irrationals-dense-r]], [[thm-rationals-countable]]): assign to each isolated point the first rational-endpoint open interval in a fixed enumeration that contains it and no other point of the set; distinct isolated points receive distinct intervals. Hence f'=0 almost everywhere on f^{-1}(c), since an absolutely continuous function is differentiable almost everywhere. Applying this coordinatewise on a countable interval cover of the preimage of a point shows that if a locally absolutely continuous manifold curve sigma equals p on a parameter set E, then sigma'=0 almost everywhere on E. [L5, construct]

2.1 (Null rigidity: the squared displacement is zero up to the endpoint.) Assume the hypotheses of (c) and put F(t)=D_p^2(sigma(t)). By [L2],[L5], F is absolutely continuous and F'(t)=2g(P(p,sigma(t)),sigma'(t)) almost everywhere. By (a), F<=0. If F(s0)<0 for some s0 in (0,hat s), then v(sigma(s0)) is future timelike, and [[lem-gr-normal-neighborhood-length-monotonicity]] clause (a), applied on [s0,hat s], gives F(hat s)<0. This contradicts F(hat s)=0. Therefore F(t)=0 for every t in [0,hat s]. [L2, L4, L5, given, step 1.1]

2.2 (No nonconstant closed causal curve in C.) Suppose a future causal curve in C starts and ends at the same point p and is nonconstant. Choose an interior point q on its image with q not equal to p. Its two subarcs give future causal curves from p to q and from q to p. By (a), each endpoint pair is joined by a future causal geodesic in C. Reversing the second geodesic gives a past-directed geodesic from p to q; it differs from the future-directed one, since q is distinct from p and a nonzero causal tangent cannot be both future and past. This contradicts the unique geodesic between p and q in [L1]. Thus no such closed curve exists. [L1, given, step 1.1]

2.3 (Length maximality.) Let F and t1 be as in the proof: t1 is the largest zero of F on [0,1], which exists since F is continuous and F(0)=0. If F(s0)<0 for some s0<t1, length monotonicity from s0 to t1 would imply F(t1)<0; hence F=0 on [0,t1]. On this interval F'=0 almost everywhere. For almost every t with sigma(t) not equal to p, P is future null nonzero, so [L3] implies sigma' is null; on sigma^{-1}(p), sigma'=0 almost everywhere by step 1.2. Thus L_g(sigma|[0,t1])=0. If t1=1 the claimed bound follows. If t1<1, then F<0 and v(sigma(t)) is future timelike for t in (t1,1]. Put R(t)=sqrt(-F(t)). For every s in (t1,1), length monotonicity gives R(1)-R(s)>=L_g(sigma|[s,1]). Let s decrease to t1; continuity gives R(s)->0, and integrability of the length density gives L_g(sigma|[s,1])->L_g(sigma|[t1,1])=L_g(sigma). Therefore L_g(sigma)<=R(1), proving the inequality in (d). [L2, L3, L4, L5, L6, step 1.2, given]

3.1 (Equality forces radial velocity.) Since F is identically zero, F'=0 almost everywhere on [0,hat s]. At almost every t with sigma(t) not equal to p, (a) and F(t)=0 show that P(p,sigma(t)) is future null and nonzero. The curve velocity is future causal and nonzero almost everywhere; thus [L3] and g(P,sigma')=0 imply sigma'(t)=lambda(t)P(p,sigma(t)) for a scalar lambda(t)>=0 almost everywhere outside the level set sigma^{-1}(p). On that level set sigma'=0 almost everywhere by step 1.2. Write v(t)=exp_p^{-1}(sigma(t)). It is absolutely continuous, and the chain rule and invertibility of d(exp_p)_{v(t)} give v'(t)=lambda(t)v(t) almost everywhere on (0,hat s]. [L2, L3, L5, step 1.2, construct, step 1.1, step 2.1]

4.1 (The direction is constant.) Fix a Euclidean inner product on T_pM and put v0=v(hat s), which is nonzero by hypothesis (c). On every compact subinterval of (0,hat s], the map r(t)=v(t)/|v(t)| is absolutely continuous. The relation v'=lambda v implies r'=0 almost everywhere there, so r is constant. The subintervals overlap and v(hat s)=v0, hence v(t)=phi(t)v0 for all t in (0,hat s]. Define phi(t)=<v(t),v0>/|v0|^2 also at t=0. This is absolutely continuous, phi(0)=0, phi(hat s)=1, and phi'=lambda phi>=0 almost everywhere on (0,hat s]. Therefore phi is nondecreasing and, by continuity, maps [0,hat s] onto [0,1]. Applying exp_p proves the assertion in (c). [step 3.1, L5, construct]

5.1 (Timelike curves have timelike endpoint displacement.) Let sigma be a future timelike curve in C from p to q. By 2.2, q is not p, and by (a), v(q) is future causal and nonzero. If it were null, no point sigma(t) for t>0 could equal p by 2.2, so clause (c) would apply to sigma and its endpoint q. It would place sigma on a radial null geodesic up to a nondecreasing absolutely continuous reparametrization, whose velocity is null or zero almost everywhere. This contradicts the timelike-curve hypothesis. Thus v(q) is future timelike. [L1, given, step 2.2, step 4.1]

5.2 (Equality case.) Assume the additional hypotheses in (d) and equality L_g(sigma)=R(1). Then t1<1. For each s>t1, step 2.3 and the bound of part (d) applied to sigma|[0,s] give R(1)>=R(s)+L_g(sigma|[s,1])>=L_g(sigma|[0,s])+L_g(sigma|[s,1])=R(1). Thus equality holds in reverse Cauchy-Schwarz almost everywhere on every [s,1] with s>t1. Taking a countable sequence s down to t1 shows sigma'=lambda P almost everywhere on (t1,1], with lambda>=0. The argument of step 4.1 then shows v(sigma(t))=phi(t)v(sigma(1)) on (t1,1], with phi absolutely continuous and nondecreasing there. Continuity and F(t1)=0 force phi(t1)=0 and v(sigma(t1))=0. If t1>0 this contradicts the nonvanishing hypothesis in (d), so t1=0. The scalar phi(t)=<v(sigma(t)),v(sigma(1))>/|v(sigma(1))|^2 extends absolutely continuously to [0,1], has phi(0)=0 and phi(1)=1, and is nondecreasing. This proves the required representation. Conversely, for sigma(t)=exp_p(phi(t)v0) with phi nondecreasing absolutely continuous and onto [0,1], the radial geodesic has constant Lorentzian speed sqrt(-g_p(v0,v0)) in its affine parameter, so L_g(sigma)=sqrt(-g_p(v0,v0))=R(1). This proves the equality characterization. [step 2.3, L3, L4, L5, L6, step 4.1, given]

6.1 (Cone characterizations.) If v=0, its endpoint is p, which belongs to J_C^+(p) by the explicit reflexive convention; no constant path is called a causal curve. If v is nonzero and in C^+, the radial geodesic t -> exp_p(tv), 0<=t<=1, stays in C by star-shapedness and is future causal; if v is in T^+, it is future timelike by [L4]. Hence exp_p(C^+) is contained in J_C^+(p) and exp_p(T^+) is contained in I_C^+(p). Conversely, (a) gives J_C^+(p) subset exp_p(C^+), and step 5.1 gives I_C^+(p) subset exp_p(T^+). Finally, a point in J_C^+(p) outside I_C^+(p) and distinct from p has a future null nonzero position vector by (a) and the timelike characterization; conversely every future null radial vector reaches such a point. This proves (b). [L1, L4, step 5.1, given]

7.1 Clauses (a)-(d) follow from step 1.1 for (a), step 6.1 for (b), steps 2.1, 3.1 and 4.1 for (c), and steps 2.3 and 5.2 for (d), respectively. [step 1.1, step 6.1, step 4.1, step 2.3, step 5.2] ∎

## Remarks

- **Why the radial argument excludes the vertex.** Clauses (c) and (d) state the nonvanishing condition explicitly so the radial direction is defined on the whole punctured parameter interval. In the present convex normal set, clause (a) and step 2.2 also rule out a nonconstant closed causal curve, so a curve from $p$ cannot return to $p$ at positive parameter. The hypotheses are therefore available for every such curve in this setting.

- **Sharpness.** The bound in (d) is attained exactly by the radial geodesics with nondecreasing reparametrization; this is the local form of the statement that timelike geodesics maximize Lorentzian length.
