---
id: thm-gr-length-upper-semicontinuity
kind: theorem
title: "Lorentzian length as a refined sum of local separations, and upper semicontinuity of the length under uniform convergence"
status: draft
origin: session
domain: mathematics
dependency_level: 16
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-normal-neighborhood-causal-cone, thm-gr-convex-normal-neighborhoods, lem-gr-dominating-cone-bounds, lem-gr-joint-exponential-diffeomorphism, def-gr-normal-neighborhoods-and-position-vectors, def-gr-causal-curves-and-reachability, def-gr-timelike-worldline-and-proper-time, lem-gr-causal-curve-calculus, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-fatou-lemma, thm-dominated-convergence, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, def-absolutely-continuous-function, thm-the-riemannian-distance-topology-is-the-manifold-topology, def-countable-choice, def-dependent-choice, def-continuity-real, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, def-compact-space, def-gr-smooth-lorentzian-objects]
dependency_roles:
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-the-riemannian-distance-topology-is-the-manifold-topology: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-compact-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorems 2.37 and 2.41 on the Lorentzian distance and length upper semicontinuity, printed pp. 41-44"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): the Lorentzian distance and its semicontinuity, section 4.1"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold and let $L_g$ be the Lorentzian
length functional of [[def-gr-timelike-worldline-and-proper-time]] on future
causal curves ([[def-gr-causal-curves-and-reachability]]). For a strictly
convex normal ball $U$ ([[thm-gr-convex-normal-neighborhoods]]) and
$p,q\in U$ put
$$d_U(p,q):=\sqrt{\max\bigl(0,-g_p(\exp_p^{-1}(q),\exp_p^{-1}(q))\bigr)},$$
a continuous function of $(p,q)$ on $U\times U$
([[lem-gr-joint-exponential-diffeomorphism]] clause (c)).

**(a) Refined sums.** Let $\alpha:[a,b]\to M$ be a future causal curve and
let $(\mathcal P_N)$ be a sequence of partitions
$a=t_0^N<t_1^N<\dots<t_{m_N}^N=b$ with mesh tending to zero such that every
subarc $\alpha([t_i^N,t_{i+1}^N])$ is contained in a strictly convex normal
ball $U_i^N$ (such partitions exist and may be obtained from any fixed finite
cover of $\alpha([a,b])$ by strictly convex normal balls and a Lebesgue-number
subdivision). Then
$$L_g(\alpha)=\lim_{N\to\infty}\sum_{i=0}^{m_N-1}d_{U_i^N}\bigl(\alpha(t_i^N),\alpha(t_{i+1}^N)\bigr).$$
In particular the limit is independent of the choice of the partitions and of
the balls $U_i^N$.

**(b) Upper semicontinuity.** Let $\alpha_k:[a,b]\to M$ be future causal
curves converging to $\alpha:[a,b]\to M$ uniformly on $[a,b]$ (in the manifold
topology, equivalently along any Riemannian distance). Then
$$\limsup_{k\to\infty}L_g(\alpha_k)\le L_g(\alpha).$$

## Facts & Assumptions

**Given:** Countable and dependent choice, the Lorentzian manifold, the future causal curves and the partitions of the claims.

[L1] Length maximality in a strictly convex normal ball: for a future causal curve $\sigma:[0,1]\to U$ with $\sigma(0)=p$ and image in $U$, $L_g(\sigma)\le\sqrt{-D_p^2(\sigma(1))}=d_U(p,\sigma(1))$; the radial geodesic realizes equality ([[thm-gr-normal-neighborhood-causal-cone]] clause (d), [[def-gr-normal-neighborhoods-and-position-vectors]] clause (d)).

[L2] The map $(p,q)\mapsto\exp_p^{-1}(q)$ is smooth near the diagonal, with derivative in the second variable at $q=p$ equal to the identity, and $d_U$ is continuous in $(p,q)$; also $d_U(p,q)=L_g(\gamma_{p,q})$ for the radial geodesic $\gamma_{p,q}$ of $v=\exp_p^{-1}(q)$ when $v$ is future causal ([[lem-gr-joint-exponential-diffeomorphism]] clauses (b) and (c), [[thm-gr-convex-normal-neighborhoods]] clauses (b) and (c)).

[L3] In the chart of [[lem-gr-dominating-cone-bounds]] clauses (a)-(c) with constant $K$, a future causal curve satisfies $|v^i|\le Kv^0$ and $\sqrt{-g(v,v)}\le C|v|_{\mathrm e}$ pointwise for a chart constant $C$, and $x^0$ increases strictly along the curve ([[lem-gr-dominating-cone-bounds]] clauses (b) and (c), [[def-gr-smooth-lorentzian-objects]]).

[L4] Absolutely continuous calculus and the Lebesgue differentiation theorem: for an absolutely continuous $\beta:[a,b]\to\mathbb R^m$ the derivative $\beta'$ exists a.e. and is integrable, $\beta$ is the integral of $\beta'$, and at almost every $t$ the averages of $\beta'$ over intervals containing $t$ converge to $\beta'(t)$ ([[def-absolutely-continuous-function]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]]).

[L5] Fatou's lemma and dominated convergence for nonnegative measurable functions ([[thm-fatou-lemma]], [[thm-dominated-convergence]]).

[L6] A finite family of strictly convex normal balls covering the compact set $\alpha([a,b])$ admits a positive Lebesgue number for the parameter interval: every subinterval of length less than the Lebesgue number is mapped into one of the balls; finite covers and minima are used, without choice ([[def-compact-space]], [[def-continuity-real]]).

[L7] Uniform convergence in the manifold topology equals uniform convergence in any Riemannian distance and gives coordinate convergence in finitely many charts ([[thm-the-riemannian-distance-topology-is-the-manifold-topology]], [[lem-gr-causal-curve-calculus]] clause (a)).

## Proof

**Proof technique:** direct.

1.1 (Existence of admissible partitions.) The compact set $\alpha([a,b])$ is covered by finitely many strictly convex normal balls $C_1,\dots,C_m$ ([[thm-gr-convex-normal-neighborhoods]]), and the preimages $\alpha^{-1}(C_j)$ form an open cover of $[a,b]$ with Lebesgue number $\lambda>0$; any partition of mesh less than $\lambda$ has each subarc in some $C_j$, which we call $U_i^N$. [L2, L6, given, construct]

2.1 (The maximality inequality.) For every admissible partition, $L_g(\alpha)=\sum_iL_g(\alpha|_{[t_i,t_{i+1}]})\le\sum_id_{U_i^N}(\alpha(t_i),\alpha(t_{i+1}))$ by [L1]; hence $L_g(\alpha)\le\liminf_N\sum_id_{U_i^N}(\alpha(t_i),\alpha(t_{i+1}))$. [step 1.1, L1, given, algebra]

2.2 (The interpolating geodesic and its length.) For an admissible partition $\mathcal P_N$, let $\gamma_N:[a,b]\to M$ be the concatenation over $i$ of the radial geodesics $\gamma_{p_i,p_{i+1}}$ of $U_i^N$, affinely parametrized on $[t_i,t_{i+1}]$. By [L1] and [L2], $$\sum_id_{U_i^N}(p_i,p_{i+1})=\sum_iL_g(\gamma_{p_i,p_{i+1}})=L_g(\gamma_N).$$ [step 1.1, L1, L2, given, construct]

3.1 (Uniform convergence of the interpolants.) Let $W$ be a compact coordinate neighborhood of $\alpha([a,b])$. On $W$ the maps $(p,q)\mapsto\exp_p^{-1}(q)$ and $q\mapsto q$ are uniformly continuous, and the maximal g-speed of the radial geodesics joining pairs of nearby points is bounded by a constant times their coordinate distance divided by $|t_{i+1}-t_i|$; consequently, as the mesh tends to zero both the displacement $p_{i+1}-p_i$ and the deviation of the radial geodesic from the subarc tend to zero uniformly: $\gamma_N\to\alpha$ uniformly on $[a,b]$. More precisely, for every $\varepsilon>0$, uniform continuity of $\exp^{-1}$ on the compact set of pairs $(p,q)\in W\times W$ with $d_h(p,q)\le\delta$ gives, for mesh small enough, that the radial geodesic of $v_i=\exp_{p_i}^{-1}(p_{i+1})$ stays in the $\varepsilon$-neighborhood of the subarc, because its endpoints are the endpoints of the subarc and $v_i$ is within $o(1)$ of the displacement $p_{i+1}-p_i$; the case of a single displacement is the mean value estimate for $q\mapsto\exp_p^{-1}(q)$ near the diagonal. [step 2.2, L2, L3, L7, given]

3.2 (Almost everywhere convergence of the speeds.) On the chart of [L3] around any point of $\alpha([a,b])$ write $v_i^N:=\exp_{p_i}^{-1}(p_{i+1})$ in coordinates and let $s_i^N:=t_{i+1}-t_i$. Since $\exp_p^{-1}(q)=\psi(q-p)+o(|q-p|)$ near the diagonal with $\psi$ the chart identification of the identity, $v_i^N=(\alpha(t_{i+1})-\alpha(t_i))+o(s_i^N)$ uniformly on the compact image. At every parameter $t$ that is a Lebesgue point of the integrable function $t\mapsto(x\circ\alpha)'(t)$ and not a partition point, the secant velocities $(x(\alpha(t_{i+1}))-x(\alpha(t_i)))/s_i^N$ over the intervals containing $t$ converge to $(x\circ\alpha)'(t)$, hence $v_i^N/s_i^N\to(x\circ\alpha)'(t)$; therefore the constant Lorentzian speed of the affine geodesic $\gamma_N$ on that interval, $d_{U_i^N}(p_i,p_{i+1})/s_i^N$, converges to $\sqrt{-g(\alpha'(t),\alpha'(t))}$ by [L7] and continuity of $g$ and the chart conversion. Since [L4] gives full measure for the set of such $t$, $f_N(t):=L_g$-speed of $\gamma_N$ at $t$ converges almost everywhere to $f(t):=\sqrt{-g(\alpha'(t),\alpha'(t))}$. [step 2.2, L2, L3, L4, L7, given, algebra]

4.1 (Domination and Fatou.) Let $\psi_N(t):=(x^0(\alpha(t_{i+1}))-x^0(\alpha(t_i)))/s_i^N$ for $t\in[t_i,t_{i+1})$, the piecewise constant refinement ratio of $x^0\circ\alpha$. Then $\int_a^b\psi_N=\sum_i\Delta_ix^0=x^0(\alpha(b))-x^0(\alpha(a))$ is constant in $N$, and $\psi_N\to(x^0\circ\alpha)'$ almost everywhere by [L4]. By [L3], $f_N\le C\psi_N$ almost everywhere for a constant $C$ depending on the finitely many charts, and similarly $f\le C(x^0\circ\alpha)'$; the functions $C\psi_N-f_N\ge0$ satisfy $\int_a^b(C\psi_N-f_N)=C(x^0(\alpha(b))-x^0(\alpha(a)))-\sum_id_{U_i^N}$ and converge almost everywhere to $C(x^0\circ\alpha)'-f$. Fatou's lemma [L5] gives $$C\bigl(x^0(\alpha(b))-x^0(\alpha(a))\bigr)-L_g(\alpha)\le\liminf_N\Bigl(C\bigl(x^0(\alpha(b))-x^0(\alpha(a))\bigr)-\sum_id_{U_i^N}\Bigr),$$ that is, $\limsup_N\sum_id_{U_i^N}\le L_g(\alpha)$. Combined with step 2.1 this proves (a). [step 2.1, step 3.2, L3, L4, L5, given, algebra]

5.1 (Upper semicontinuity.) Let $\alpha_k\to\alpha$ uniformly and let $\varepsilon>0$. Choose finitely many strictly convex normal balls covering $\alpha([a,b])$ and a partition of mesh smaller than twice its Lebesgue number, refining if necessary so that each $\alpha([t_i,t_{i+1}])$ lies in one ball $U_i$ with room to spare, and such that by [L7] and uniform convergence also $\alpha_k([t_i,t_{i+1}])\subseteq U_i$ for all $k\ge k_0$ and all $i$. Then by [L1], $L_g(\alpha_k)=\sum_iL_g(\alpha_k|_{[t_i,t_{i+1}]})\le\sum_id_{U_i}(\alpha_k(t_i),\alpha_k(t_{i+1}))$; the right-hand side is a finite sum of continuous functions of the pair $(\alpha_k(t_i),\alpha_k(t_{i+1}))$ ([L2]), so $$\limsup_kL_g(\alpha_k)\le\sum_id_{U_i}\bigl(\alpha(t_i),\alpha(t_{i+1})\bigr).$$ [step 4.1, L1, L2, L7, given, algebra]

6.1 (Passing to the limit in the partition.) The right-hand side is a refined sum along the partition for $\alpha$, so by part (a) it tends to $L_g(\alpha)$ as the mesh tends to zero, while the left-hand side does not depend on the partition. Hence $\limsup_kL_g(\alpha_k)\le L_g(\alpha)$, which is (b). [step 5.1, step 4.1, given, algebra]

7.1 (Conclusion.) Part (a) is steps 1.1-4.1 and part (b) is steps 5.1 and 6.1. [step 4.1, step 6.1] ∎

## Remarks

- **Only Lorentzian length is used.** The proof of the limit statement compares the lengths of the subarcs with the lengths of the interpolating geodesics; no Euclidean or auxiliary Riemannian length is substituted for the Lorentzian length, and the auxiliary metric appears only through uniform convergence.

- **Why the partitions must refine.** The almost-everywhere convergence in step 3.2 uses the Lebesgue differentiation theorem along the parameter $t$; it requires the mesh to tend to zero, not merely the partitions to be fixed. This is exactly the quantifier structure of the statement.

- **Scope.** The theorem is a regularity statement about the Lorentzian length functional on one smooth Lorentzian manifold; no maximality or minimizing-curve existence is asserted.
