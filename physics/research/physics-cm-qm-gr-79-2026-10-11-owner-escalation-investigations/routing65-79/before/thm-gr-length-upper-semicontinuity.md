---
id: thm-gr-length-upper-semicontinuity
kind: theorem
title: "Lorentzian length as a refined sum of local separations, and upper semicontinuity of the length under uniform convergence"
status: draft
origin: session
domain: mathematics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-q-and-irrationals-dense-r, thm-countable-union-of-null-is-null, thm-rationals-countable, thm-gr-normal-neighborhood-causal-cone, thm-gr-convex-normal-neighborhoods, lem-gr-dominating-cone-bounds, lem-gr-joint-exponential-diffeomorphism, lem-gr-position-vector-differential, def-gr-normal-neighborhoods-and-position-vectors, def-gr-causal-curves-and-reachability, def-gr-timelike-worldline-and-proper-time, lem-gr-causal-curve-calculus, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-fatou-lemma, thm-dominated-convergence, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, def-absolutely-continuous-function, thm-the-riemannian-distance-topology-is-the-manifold-topology, def-countable-choice, def-dependent-choice, def-continuity-real, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, def-compact-space, def-gr-smooth-lorentzian-objects]
dependency_roles:
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-countable-union-of-null-is-null: mathematical-premise
  thm-rationals-countable: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
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
time-oriented smooth Lorentzian four-manifold and use the Lorentzian length
for locally absolutely continuous future causal curves defined in
[[lem-gr-normal-neighborhood-length-monotonicity]], which agrees with the
piecewise-$C^1$ timelike length of
[[def-gr-timelike-worldline-and-proper-time]]. For a strictly
convex normal ball $U$ ([[thm-gr-convex-normal-neighborhoods]]) and
$p,q\in U$ put
$$d_U(p,q):=\sqrt{\max\bigl(0,-g_p(\exp_p^{-1}(q),\exp_p^{-1}(q))\bigr)},$$
a continuous function of $(p,q)$ on $U\times U$
([[lem-gr-position-vector-differential]] clause (c)).

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

**(b) Upper semicontinuity.** Let $\alpha_k:[a,b]\to M$ and
$\alpha:[a,b]\to M$ be future causal curves in the class of
[[def-gr-causal-curves-and-reachability]]. Suppose $\alpha_k$ converges to
$\alpha$ uniformly on $[a,b]$ (in the manifold topology, equivalently along
any Riemannian distance). Then
$$\limsup_{k\to\infty}L_g(\alpha_k)\le L_g(\alpha).$$

## Facts & Assumptions

**Given:** Countable and dependent choice, the Lorentzian manifold, the future causal curves and the partitions of the claims.

[L1] Length maximality in a strictly convex normal ball: for a future causal curve $\sigma:[0,1]\to U$ with $\sigma(0)=p$ and image in $U$, $L_g(\sigma)\le\sqrt{-D_p^2(\sigma(1))}=d_U(p,\sigma(1))$; the radial geodesic realizes equality ([[thm-gr-normal-neighborhood-causal-cone]] clause (d), [[def-gr-normal-neighborhoods-and-position-vectors]] clause (d)).

[L2] On the strictly convex normal set $U$, the selected two-point inverse $(p,q)\mapsto\exp_p^{-1}(q)$ is smooth on all of $U\times U$ by [[lem-gr-position-vector-differential]] clause (c); near the diagonal its derivative in the second variable at $q=p$ is the identity by [[lem-gr-joint-exponential-diffeomorphism]] clauses (b) and (c). Thus $d_U$ is continuous on $U\times U$. Also $d_U(p,q)=L_g(\gamma_{p,q})$ for the radial geodesic $\gamma_{p,q}$ of $v=\exp_p^{-1}(q)$ when $v$ is future causal ([[thm-gr-convex-normal-neighborhoods]] clauses (b) and (c)).

[L3] In the chart of [[lem-gr-dominating-cone-bounds]] clauses (a)-(c) with constant $K$, a future causal curve satisfies $|v^i|\le Kv^0$ and $\sqrt{-g(v,v)}\le C|v|_{\mathrm e}$ pointwise for a chart constant $C$, and $x^0$ increases strictly along the curve ([[lem-gr-dominating-cone-bounds]] clauses (b) and (c), [[def-gr-smooth-lorentzian-objects]]).

[L4] Absolutely continuous calculus holds under the stated AC_omega/DC premises ([[def-absolutely-continuous-function]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]). The centered differentiation theorem also gives the required interval averages, as follows. For any real $f\in L^1_{\mathrm{loc}}(\mathbb R)$, apply [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]] to $|f-c|$ for every rational $c$. Outside the union of their countably many exceptional null sets ([[thm-rationals-countable]], [[thm-countable-union-of-null-is-null]]), the centered average of $|f-f(t)|$ has limsup at most $2|f(t)-c|$ for every rational $c$, by the triangle inequality. Density of the rationals ([[lem-q-and-irrationals-dense-r]]) makes this limsup zero. If an interval $J$ contains $t$ and has length $h$, it lies in $(t-h,t+h)$, so its average absolute oscillation is bounded by twice that centered average. Thus averages of $f$ over arbitrary shrinking intervals containing $t$ converge to $f(t)$ almost everywhere. Apply this to the coordinate derivatives and to the nonnegative speed control.

[L5] Fatou's lemma and dominated convergence for nonnegative measurable functions ([[thm-fatou-lemma]], [[thm-dominated-convergence]]).

[L6] A finite family of strictly convex normal balls covering the compact set $\alpha([a,b])$ admits a positive Lebesgue number for the parameter interval: every subinterval of length less than the Lebesgue number is mapped into one of the balls; finite covers and minima are used, without choice ([[def-compact-space]], [[def-continuity-real]]).

[L7] Uniform convergence in the manifold topology equals uniform convergence in any Riemannian distance and gives coordinate convergence in finitely many charts ([[thm-the-riemannian-distance-topology-is-the-manifold-topology]], [[lem-gr-causal-curve-calculus]] clause (a)).

## Proof

**Proof technique:** direct; first identify every selected short-arc inverse with a fixed local branch, then use an integrable control independent of the varying normal balls.

1.1 (Fixed local branches over the compact image.) Choose finitely many adapted charts $(V_j,x_j)$ and open sets $A_j$ covering the image of $\alpha$, with compact closures $K_j\subset V_j$. Shrink these sets using the joint exponential inverse of [L2], so that for each $j$ there is $\rho_j>0$ with the following properties. The joint exponential is defined and injective on all $(p,v)$ with $p\in K_j$ and $|v|_{x_j}\le\rho_j$; its smooth inverse branch $v_j(p,q)$ is defined near $K_j\times K_j$ and $|v_j(p,q)|_{x_j}<\rho_j/2$ there. Its radial geodesics stay in $V_j$ for $0\le\lambda\le1$. These choices follow by taking a closed product inside the open inverse-function domain near each diagonal point, then shrinking the coordinate ball: $v_j(p,p)=0$, and the geodesic with zero velocity is constant. Smoothness on these closed products gives uniform finite bounds, with one constant $C$ enlarged over the finite family, such that $|v_j(p,q)|_{x_j}\le C|x_j(q)-x_j(p)|,$ $v_j(p,q)=x_j(q)-x_j(p)+R_j(p,q),\qquad |R_j(p,q)|\le C|x_j(q)-x_j(p)|^2,$ where the tangent vector is expressed in the coordinate basis at $p$. The second estimate follows by integrating the second-variable derivative along the coordinate segment twice: its value at $q=p$ is the identity and its derivative is bounded on the compact product. Likewise, bounded first derivatives of the geodesic evaluation give $|x_j(\exp_p(\lambda v_j(p,q)))-x_j(p)|\le C|v_j(p,q)|\quad(0\le\lambda\le1).$ A Lebesgue number for the finite parameter cover $\alpha^{-1}(A_j)$ ensures that every sufficiently short parameter subarc lies in some $A_j$. [L2, L3, L6, L7, given, construct]

2.1 (The selected inverse cannot leave this branch.) Let a short subarc $\alpha([u,v])$ lie in $A_j$, and suppose also that it lies in any strictly convex normal ball $U$, with $p=\alpha(u)$. The selected lift $z(t):=\exp_{p,U}^{-1}(\alpha(t)),\qquad u\le t\le v,$ is continuous by [L2], with $z(u)=0$. Here the subscript $U$ specifies the inverse selected by that normal ball, not a different exponential map. If $|z(t)|_{x_j}$ ever reached $\rho_j$, let $t_*$ be its first such parameter. At $t_*$ both $z(t_*)$ and $v_j(p,\alpha(t_*))$ are in the fixed injectivity domain of step 1.1 and have the same exponential image. They must agree, contradicting the strict bound $|v_j|<\rho_j/2$. Consequently $|z(t)|<\rho_j$ throughout, and the same injectivity gives $\exp_{p,U}^{-1}(\alpha(t))=v_j(p,\alpha(t))\quad(u\le t\le v).$ Thus the inverse and joining geodesic selected by **each** $U_i^N$ agree with the fixed branch for all sufficiently fine partitions. No bound on the sizes, chart constants or injectivity radii of the varying $U_i^N$ is used. [step 1.1, L2, given, contradiction]

2.2 (One integrable control.) Fix a finite subdivision $a=r_0<\cdots<r_m=b$ with each block image in one $A_j$ and define $w(t)$ on that block to be the Euclidean norm of $(x_j\circ\alpha)'(t)$, setting it to zero at the finitely many subdivision points. Local absolute continuity gives $w\ge0$, $w\in L^1[a,b]$. There is a uniform constant $C$ such that, in any selected chart containing a point of a block, $|(x_k\circ\alpha)'|\le Cw$ almost everywhere on the overlap. Indeed the transition derivatives are bounded on the intersections of the finitely many compact sets $K_j,K_k$; apply the chain rule. Thus, even when a fine partition interval $I_i=[t_i,t_{i+1}]$ crosses a fixed block boundary, finite integral additivity gives $|x_k(\alpha(t_{i+1}))-x_k(\alpha(t_i))| \le C\int_{I_i}w$ for the chart assigned to that entire short subarc. The metric components are bounded on the same compact sets, so the original Lorentzian density $f(t)=\sqrt{-g(\alpha'(t),\alpha'(t))}$ satisfies $f\le Cw$. [L3, L4, step 1.1, given, construct]

3.1 (Interpolants and uniform control.) For any of the promised partitions, write $h_i=t_{i+1}-t_i$, $p_i=\alpha(t_i)$ and let $v_i$ be the inverse selected by $U_i^N$. Concatenate its radial geodesics, affinely parametrized on $I_i$, to obtain $\gamma_N$. The endpoints are distinct because the adapted time of [L3] strictly increases along the original subarc. The cone theorem [L1] therefore makes each radial segment future causal; its length is $d_{U_i^N}(p_i,p_{i+1})$ and its constant Lorentzian speed is $f_N(t)=\frac{\sqrt{-g_{p_i}(v_i,v_i)}}{h_i}\quad(t\in\operatorname{int}I_i).$ By steps 1.1-2.1 and 2.2, for all sufficiently large $N$, $0\le f_N(t)\le Cw_N(t),\qquad w_N(t):=\frac1{h_i}\int_{I_i}w,\qquad \int_a^bw_N=\int_a^bw.$ The same estimates put the geodesic and the original subarc in the fixed chart, with their coordinate discrepancy bounded by $C\int_{I_i}w$. Absolute continuity of the integral of $w$ makes this bound tend to zero uniformly as the mesh tends to zero. Finite chart comparison therefore also proves $\gamma_N\to\alpha$ uniformly. Crucially all constants belong to the fixed finite charts, not the independently varying normal balls. [step 1.1, step 2.1, step 2.2, L1, L2, L4, L7, construct]

4.1 (Almost-everywhere speed convergence.) Outside a null set, $t$ is a Lebesgue point of $w$ and of every local coordinate derivative of $\alpha$ where its chart is defined (use countable compact exhaustions of each open parameter preimage of $V_j$), and is neither a fixed subdivision point nor any partition point. The latter points form a countable union of finite sets. For the interval $I_i$ containing such $t$, [L4] gives $w_N(t)\to w(t)$ and the coordinate secant velocity tends to the coordinate velocity of $\alpha$ at $t$. Step 1.1 has the precise error bound $\left|\frac{v_i}{h_i}-\frac{x_j(p_{i+1})-x_j(p_i)}{h_i}\right| \le C h_i w_N(t)^2\longrightarrow0.$ Here $w_N(t)$ is bounded at this Lebesgue point; there is no assertion of a uniform $o(h_i)$ error for an arbitrary absolutely continuous curve. Since only finitely many charts are possible, these pointwise conclusions hold even if their assigned index varies with $N$. Continuity of $g$, with $p_i\to\alpha(t)$, gives $f_N(t)\to f(t)$ almost everywhere. [step 1.1, step 2.1, step 2.2, step 3.1, L4, algebra]

5.1 (Fatou proves the full refined-sum identity.) Choose the common $C$ of step 3.1 also large enough that $f\le Cw$. The nonnegative functions $Cw_N-f_N$ converge almost everywhere to $Cw-f$. Fatou gives $C\int_a^bw-L_g(\alpha) \le\liminf_N\left(C\int_a^bw-\int_a^bf_N\right),$ hence $\limsup_N\int f_N\le L_g(\alpha)$. Conversely, [L1] on every original subarc gives $L_g(\alpha)\le\sum_i d_{U_i^N}(p_i,p_{i+1})=\int_a^bf_N.$ The two inequalities prove (a), including its independently varying-ball quantifier and independence of both the partitions and the chosen balls. [step 3.1, step 4.1, L1, L5, algebra]

6.1 (Upper semicontinuity.) Choose a fixed finite buffered normal-ball cover of $\alpha([a,b])$ and successively finer partitions such that each compact subarc is contained in one cover ball. For any fixed such partition, uniform convergence puts the corresponding subarcs of $\alpha_k$ in those same open balls for every sufficiently large $k$. By [L1] and continuity of the finitely many selected inverse functions [L2], $\limsup_kL_g(\alpha_k) \le\sum_i d_{U_i}(\alpha(t_i),\alpha(t_{i+1})).$ Now refine the fixed-cover partitions and use (a), already proved without using (b), to make the right side tend to $L_g(\alpha)$. This proves (b). [step 5.1, L1, L2, L6, L7, algebra]

7.1 The arbitrary-ball identity is step 5.1 and upper semicontinuity is step 6.1, proving both promised claims. [step 5.1, step 6.1] ∎

## Remarks

- **Only Lorentzian length is used.** The proof of the limit statement compares the lengths of the subarcs with the lengths of the interpolating geodesics; no Euclidean or auxiliary Riemannian length is substituted for the Lorentzian length, and the auxiliary metric appears only through uniform convergence.

- **Why the partitions must refine.** The almost-everywhere convergence in step 4.1 uses the Lebesgue differentiation theorem along the parameter $t$; it requires the mesh to tend to zero, not merely the partitions to be fixed. This is exactly the quantifier structure of the statement.

- **Scope.** The theorem is a regularity statement about the Lorentzian length functional on one smooth Lorentzian manifold; no maximality or minimizing-curve existence is asserted.
