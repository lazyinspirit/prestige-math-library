---
id: lem-gr-local-cauchy-neighborhood
kind: lemma
title: "Local Cauchy neighborhoods in a conically bounded product chart"
status: draft
origin: session
domain: mathematics
dependency_level: 22
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, lem-gr-temporal-functions-and-time-functions, lem-gr-causal-curve-calculus, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-gr-normal-neighborhood-causal-cone, thm-gr-convex-normal-neighborhoods, lem-gr-position-vector-differential, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-observer-pairing-with-future-causal-vectors, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, lem-gr-joint-exponential-diffeomorphism, thm-flowout-theorem, thm-fundamental-theorem-on-flows, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-gr-cauchy-surface-implies-globally-hyperbolic]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-temporal-functions-and-time-functions: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-flowout-theorem: mathematical-premise
  thm-fundamental-theorem-on-flows: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Theorem 2.9.9 with Lemma 2.9.11 (curves in the interior of the domain of dependence meet S, I+(S), I-(S)) and the openness argument of its proof, printed pp. 46-50; Proposition 2.2.3 and Definition 2.2.7 (elementary regions) printed pp. 8-13"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Proposition 3.44 and Proposition 3.43 on domains of dependence and causal convexity, printed pp. 97-99"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold ([[def-gr-smooth-lorentzian-objects]]), with the locally absolutely continuous causal curves of [[def-gr-causal-curves-and-reachability]]. Let $I\subseteq\mathbb R$ be an open interval containing $0$, and let $B_R\subseteq\mathbb R^3$ be the open ball of radius $R>0$ centered at $0$, with Euclidean norm $|\cdot|$. Suppose $(s,\sigma):U\to I\times B_R$ is a diffeomorphism of an open set $U\subseteq M$, satisfying:

**(C1)** $\partial_s$ is future timelike and every $s$-level is spacelike;

**(C2)** there is $K\ge1$ such that $|d\sigma(v)|\le Kds(v)$ for every nonzero future causal vector $v$ based in $U$.

Write $S=s^{-1}(0)$, and compute the domains of dependence intrinsically in $U$:
$$D^+_U(S)=\{p\in U:\text{every past-inextendible causal curve in }U\text{ through }p\text{ meets }S\},\qquad D^-_U(S)=\{p\in U:\text{every future-inextendible causal curve in }U\text{ through }p\text{ meets }S\}.$$
Here inextendibility means absence of an endpoint limit in the specified open submanifold, and Cauchy intersection means exactly one parameter visit ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]). Then:

**(a)** $D^+_U(S)\subseteq\{s\ge0\}$ and $D^-_U(S)\subseteq\{s\le0\}$.

**(b)** The corrected open collar
$$Q=\{q\in U:|\sigma(q)|+K|s(q)|<R\}$$
is a neighborhood of the entire slice $S$ in $U$ and is contained in $D^+_U(S)\cup D^-_U(S)$; more precisely $Q\cap\{s>0\}\subseteq D^+_U(S)$ and $Q\cap\{s<0\}\subseteq D^-_U(S)$.

**(c)** The open set $W=\operatorname{int}_U(D^+_U(S)\cup D^-_U(S))$ contains $Q$, and $S$ is a Cauchy hypersurface of $(W,g|_W,N|_W)$. Consequently $W$ is globally hyperbolic by [[thm-gr-cauchy-surface-implies-globally-hyperbolic]].

**(d) Generic spacelike and noncompact scope.** For every smooth embedded spacelike hypersurface $\Sigma\subseteq M$ without boundary there exist an open neighborhood $U_\Sigma$ of $\Sigma$, a smooth positive function $\delta:\Sigma\to(0,\infty)$, and a diffeomorphism
$$F:\Omega\to U_\Sigma,\qquad\Omega=\{(s,x)\in\mathbb R\times\Sigma:|s|<\delta(x)\},\qquad F(0,x)=x,$$
such that $s$ is temporal and $F_*\partial_s$ is future timelike. The intrinsic set $W_\Sigma=\operatorname{int}_{U_\Sigma}(D^+_{U_\Sigma}(\Sigma)\cup D^-_{U_\Sigma}(\Sigma))$ is an open neighborhood in which $\Sigma$ is Cauchy, hence is globally hyperbolic. Neither compactness nor global acausality of $\Sigma$ in $M$ is assumed. No positive uniform lower bound for $\delta$ is asserted.

## Facts & Assumptions

**Given:** Countable and Dependent Choice, the product chart with (C1),(C2), and, for (d), a smooth embedded spacelike hypersurface without boundary.

[L1] A temporal function has positive differential on nonzero future causal vectors and is strictly increasing along future causal curves; its composite with such a curve is locally absolutely continuous ([[lem-gr-temporal-functions-and-time-functions]] (a),(b)). The causal-curve calculus supplies smooth composition and finite concatenation ([[lem-gr-causal-curve-calculus]] (b),(d)). For absolutely continuous functions the fundamental theorem of calculus holds under the stated choice assumptions ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[L2] In a small convex normal set $C$ about $q$, the endpoint of a causal segment starting at $q$ has future causal or zero position vector $\exp_q^{-1}(r)$; a future timelike position vector gives a radial timelike segment contained in $C$ ([[thm-gr-normal-neighborhood-causal-cone]] (a),(b), [[thm-gr-convex-normal-neighborhoods]]). The squared displacement $D_q^2(r)=g_q(\exp_q^{-1}(r),\exp_q^{-1}(r))$ satisfies $d(D_q^2)_r(T)=2g_r(P(q,r),T)$, where $P(q,r)=d(\exp_q)_{\exp_q^{-1}(r)}(\exp_q^{-1}(r))$ ([[lem-gr-position-vector-differential]] (a)); radial tangents keep causal character and orientation ([[lem-gr-parallel-transport-and-geodesic-speed]]). Nonzero future causal vectors pair strictly negatively with future timelike vectors ([[lem-gr-observer-pairing-with-future-causal-vectors]]).

[L3] Closed future causal cones are convex; their wider cones and timelike interiors vary continuously in smooth coordinates ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]]). The two-point inverse exponential is smooth on convex normal sets ([[lem-gr-joint-exponential-diffeomorphism]]).

[L4] A smooth field transverse to an embedded hypersurface has an injective flowout on an open neighborhood of its zero section under Countable Choice ([[thm-flowout-theorem]]). Its maximal flow is smooth on an open domain with interval fibers containing zero ([[thm-fundamental-theorem-on-flows]]). Smooth subordinate locally finite partitions of unity exist under Countable Choice ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[L5] A spacelike Cauchy hypersurface in a time-oriented smooth Lorentzian manifold implies global hyperbolicity ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]]). All curve, reachability and domain definitions here are applied to the induced open submanifold, not to ambient $M$ ([[def-gr-causal-curves-and-reachability]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]).

## Proof

**Proof technique:** direct.

1.1 Since $\ker ds$ is spacelike, its one-dimensional Lorentz-orthogonal complement is timelike, and $\nabla s$ lies in that complement. Since $ds(\partial_s)=1$ and $\partial_s$ is future timelike, $\nabla s$ is past timelike. Thus [L1] gives strict increase of $s$ along every future causal curve. On any compact parameter interval $[t_1,t_2]$, (C2) and the absolutely continuous fundamental theorem give $|\sigma(\gamma(t_2))-\sigma(\gamma(t_1))|\le\int_{t_1}^{t_2}|(\sigma\circ\gamma)'|\le K\int_{t_1}^{t_2}(s\circ\gamma)'=K(s(\gamma(t_2))-s(\gamma(t_1)))$. Hence the curve image is the graph $(s,z(s))$ of a $K$-Lipschitz function on its time interval, without requiring a smooth inverse parameter map. [given, L1, algebra]

1.2 For the generic construction, the global smooth future timelike field $N$ is transverse to $\Sigma$, since no tangent vector to a spacelike hypersurface is timelike. By [L4] its flow $F(s,x)=\Phi_s^N(x)$ embeds an open zero-section neighborhood in $\mathbb R\times\Sigma$ onto an open neighborhood of $\Sigma$. At $(0,x)$ the inverse time covector annihilates $T_x\Sigma$ and has value $1$ on $N_x$, so its gradient is past timelike. Shrink the flow domain to the open subset on which this remains true. Take all pairs $(V_j,a_j)$ with $V_j$ open in $\Sigma$, $a_j$ a positive rational, and $(-a_j,a_j)\times V_j$ contained in that temporal domain; their spatial sets cover $\Sigma$. A subordinate smooth locally finite partition $(\rho_j)$ exists by [L4]. Define $\delta(x)=\frac12\sum_j a_j\rho_j(x)$. This is smooth and positive. At each $x$ only finitely many terms are nonzero; one with maximal $a_j$ satisfies $x\in V_j$ and $\delta(x)\le a_j/2$. Hence the entire strip $|s|<\delta(x)$ lies in the temporal flow domain. Restricting $F$ to this strip gives the diffeomorphism and temporal coordinate stated in (d), with future timelike $F_*\partial_s=N$. Countable Choice is used for the flowout and partition suppliers; the causal calculus retains its stated Dependent Choice assumption. [given, L1, L4, construct, choose, algebra]

2.1 The time graph is itself an admissible causal parametrization. At a differentiability point $s_0$ of this Lipschitz graph, choose fixed Euclidean coordinates and a positive-definite form $H_0$. For sufficiently small $\epsilon>0$, the constant Lorentz form $g_0-\epsilon H_0$ has a closed convex future cone containing all future $g$-causal vectors based sufficiently near the limiting point: continuity makes $|(g-g_0)(v,v)|<\epsilon H_0(v,v)$ there, and orientation is fixed by the common temporal covector. The graph increment divided by its positive time increment is the integral of original causal velocities divided by that increment, so lies in this convex wider cone. Let the increment tend to zero and then $\epsilon\downarrow0$; the tangent $(1,z'(s_0))$ lies in the original future causal cone and is nonzero. This holds almost everywhere because the graph is Lipschitz. If it has a limit in $U$ at a finite time endpoint, adjoining that endpoint preserves the Lipschitz bound and the almost-everywhere causal tangent condition; hence it gives a causal segment from that endpoint to each interior point. The same reasoning holds in any relatively compact temporal coordinate box with a finite causal speed bound. [step 1.1, L1, L3, construct]

2.2 If $s(p)<0$, the past vertical fiber $(s',\sigma(p))$, $\inf I<s'\le s(p)$, avoids $S$ and has no limit in $U$ at its past end: a finite endpoint time is excluded from $I$, and an infinite endpoint has no finite coordinate limit. It is therefore past-inextendible in $U$, proving $p\notin D^+_U(S)$. Reversing time proves $D^-_U(S)\subseteq\{s\le0\}$, so (a) holds. [step 1.1, given, L5]

2.3 We record past heredity above the zero slice. If $r\in D^+_U(S)$ and $p\le_U r$ with $s(p)>0$, then $p\in D^+_U(S)$. Otherwise a past-inextendible avoiding curve through $p$, restricted to its past half ending at $p$, can be concatenated with a causal segment $p\to r$. Strict temporal increase keeps this segment at positive times, and finite concatenation preserves local absolute continuity and the causal tangent condition; its past end is unchanged. The resulting past-inextendible curve through $r$ avoids $S$, contradiction. The same argument works for any temporal collar whose zero slice is its initial hypersurface. [step 1.1, L1, L5, given]

2.4 Around each $x\in\Sigma$ choose spatial coordinates $\sigma_i:V_i\to B_{R_i}$ and $a_i>0$ so that the closure of the product box $(-a_i,a_i)\times B_{R_i}$ lies in a larger temporal coordinate box inside the strip. This is possible by openness after shrinking a slice chart and its time interval. On each such compact enlarged box, the causal vectors normalized by $ds(v)=1$ have uniformly bounded spatial components. Indeed, an unbounded sequence, divided by its Euclidean norms and passed to a convergent subsequence over the compact box, would limit to a nonzero future causal vector annihilated by $ds$, impossible since $\ker ds$ is spacelike. Closedness follows from continuity of the metric and orientation. Thus there is $K_i\ge1$ with $|d\sigma_i(v)|\le K_i ds(v)$ throughout the local box. The corresponding intrinsic open funnels are $Q_i=F\{(s,x):x\in V_i,\ |s|<a_i,\ |\sigma_i(x)|+K_i|s|<R_i\}$. Their zero slices cover $\Sigma$. These constants are local; no common width, radius or speed constant is assumed. [step 1.2, L3, construct, choose, algebra]

3.1 Suppose a past-inextendible curve through $q$ with $s(q)>0$ avoids $S$. Its time values on the past half remain positive, and their infimum is $a\in[0,s(q))$. Its Lipschitz spatial graph has a limit $z_*$ in the closed Euclidean ball as $s\downarrow a$. Since $a\in I$, a limit with $|z_*|<R$ would be a limit point in $U$, contradicting inextendibility; hence $|z_*|=R$ and $R-|\sigma(q)|\le|z_*-\sigma(q)|\le K(s(q)-a)\le Ks(q)$. This is incompatible with the strict defining inequality of $Q$. The negative-time case reverses time, and zero-time points already lie on $S$. Thus $Q\subseteq D^+_U(S)\cup D^-_U(S)$. It is open and contains every point $(0,\sigma)$ with $|\sigma|<R$, so is a neighborhood of the entire slice and satisfies $Q\subseteq W$. [step 1.1, step 2.2, given, L5, algebra]

3.2 If $q\in Q_i$ has positive time, a past-inextendible curve in $U_\Sigma$ through $q$ avoiding $\Sigma$ has only positive times. On the component of its past half remaining in the local box, the integrated speed estimate of step 1.1 holds with $K_i$. It cannot reach the spatial boundary at time $s\ge0$, since that would give $R_i-|\sigma_i(q)|\le K_i(s(q)-s)\le K_i s(q)$, contradicting the funnel inequality. It cannot exit through a time boundary while proceeding to the past with $0<s\le s(q)<a_i$. If it never exits, its spatial graph has a limit at its nonnegative past time infimum, and its norm is at most $|\sigma_i(q)|+K_i s(q)<R_i$. That endpoint lies in $U_\Sigma$, contradicting inextendibility there. Consequently $q\in D^+_{U_\Sigma}(\Sigma)$. The negative case reverses time; zero-time points lie on $\Sigma$ already. Therefore $\bigcup_iQ_i\subset D_{U_\Sigma}(\Sigma)$, and $W_\Sigma$ contains the entire hypersurface. This proves the inclusion in the intrinsic domain of the whole collar, not merely in domains computed in individual boxes. [step 1.1, step 1.2, step 2.4, L5, given, algebra]

4.1 Let $\gamma$ be a two-sided inextendible causal curve in $W$ avoiding $S$. Its times are either entirely positive or entirely negative; assume positive. By (a), every image point belongs to $D^+_U(S)$. If its past end has no limit in $U$, its past half is already a past-inextendible avoiding curve in $U$, contradicting this membership. Otherwise it converges to $q\in U$ with $s(q)=a\ge0$. If $a=0$, then $q\in S\subseteq W$, contradicting inextendibility in $W$. It remains to exclude a positive-time endpoint $q$. [step 2.2, step 3.1, L1, L5, given]

5.1 Suppose that endpoint has $s(q)>0$. Choose a small convex normal set $C\Subset U$ about $q$ and a point $r$ on a sufficiently short tail of $\gamma$ contained in $C$. Step 2.1 supplies a causal segment from $q$ to $r$, so $v=\exp_q^{-1}(r)$ is nonzero future causal by [L2]. Move $r$ a small positive distance along its future timelike coordinate fiber to $r_\epsilon\in C\cap W$. If $v$ is timelike, continuity keeps $\exp_q^{-1}(r_\epsilon)$ future timelike. If $v$ is null, its radial tangent $P(q,r)$ is nonzero future null, and the Gauss differential gives $\left.\frac{d}{d\epsilon}D_q^2(r_\epsilon)\right|_0=2g_r(P(q,r),\partial_s)<0$. Therefore $D_q^2(r_\epsilon)<0$ for small positive $\epsilon$, and future orientation persists because $v\ne0$. Thus in either case $q\ll_C r_\epsilon$. Smoothness of the two-point inverse and openness of the timelike cone give a neighborhood $V\subset C\cap\{s>0\}$ of $q$ such that $p\ll_C r_\epsilon$ for every $p\in V$. Since $r_\epsilon\in W$ has positive time, it belongs to $D^+_U(S)$ by (a), and step 2.3 gives $V\subset D^+_U(S)$. Hence $q\in W$, contradicting inextendibility in $W$. The negative case reverses time. Every inextendible $W$-curve therefore meets $S$, and strict temporal increase gives exactly one parameter visit. This proves (c)'s Cauchy property without asserting openness of a one-sided domain. [step 2.1, step 2.2, step 2.3, step 4.1, L2, L3, construct, algebra]

6.1 Negative-time vertical fibers of the variable strip avoid $\Sigma$ and have no limit in $U_\Sigma$ at their past endpoint $-\delta(x)$; the future counterparts handle positive times. Hence the intrinsic analogue of (a) holds. The heredity proof of step 2.3 applies on this temporal collar. An inextendible $W_\Sigma$-curve avoiding $\Sigma$ has one time sign; if its appropriate endpoint has no limit in $U_\Sigma$, the domain definition contradicts its membership. If the endpoint lies in $U_\Sigma$ at zero time, it is in $\Sigma\subset W_\Sigma$. If it lies at nonzero time, a relatively compact temporal chart around it has a finite speed bound by the normalization argument in step 2.4. Steps 2.1 and 5.1 then give the same local causal endpoint segment, radial timelike perturbation, and neighborhood forced into the appropriate one-sided domain by heredity. Thus that endpoint is in $W_\Sigma$, again contradiction. Every inextendible $W_\Sigma$-curve therefore meets $\Sigma$ exactly once. This argument also handles curves escaping spatially at infinity: they have no collar endpoint and are already quantified over by the intrinsic domain definition. [step 2.1, step 2.3, step 5.1, step 2.4, step 3.2, L1, L5, construct]

7.1 The hypersurfaces in (c),(d) are smooth spacelike embedded hypersurfaces and have the proved Cauchy intersection property. Applying [L5] to their respective induced open manifolds establishes both stated global-hyperbolicity consequences. Clauses (a),(b),(c),(d) follow respectively from steps 2.2, 3.1, 4.1 and 5.1, and 1.2, 2.4, 3.2 and 6.1. [step 2.2, step 3.1, step 5.1, step 1.2, step 6.1, L5] ∎

## Remarks

The radius and speed appear in the combination $|\sigma|+K|s|<R$: the available spatial margin must exceed the maximal displacement before reaching the initial slice. All domains, Cauchy properties and resulting global hyperbolicity are intrinsic to the stated open submanifolds. No ambient causal convexity is asserted.

The generic construction preserves arbitrary spacelike tilt and permits a prescribed future timelike transverse flow field. In a local temporal chart, a spacelike graph $s=f(\sigma)$ is flattened by $\tau=s-f(\sigma)$; its conormal is timelike and its orientation is fixed by $d\tau(\partial_s)=1$. Shrink where $\tau$ remains temporal and recompute the local speed constant using $d\tau$, rather than retaining the constant for $ds$. If $K|df|\le\theta<1$, then $d\tau(v)\ge(1-\theta)ds(v)$ and the new bound is $|d\sigma(v)|\le K/(1-\theta)d\tau(v)$. Otherwise compact cone normalization gives a finite local constant directly. No global small-tilt or noncompact uniform-width condition is required.
