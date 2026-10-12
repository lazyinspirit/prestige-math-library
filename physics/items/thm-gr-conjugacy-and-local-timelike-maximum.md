---
id: thm-gr-conjugacy-and-local-timelike-maximum
kind: theorem
title: "Conjugacy, the exponential differential and the local proper-time maximum before the first conjugate instant"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-conjugacy-via-the-exponential-map, lem-gr-normal-index-form-factorization, def-gr-jacobi-field-and-conjugate-instant, thm-gr-jacobi-equation-and-geodesic-deviation, thm-gr-lorentz-gauss-lemma-and-normal-maximum, thm-gr-local-geodesics-and-exponential-map, thm-gr-point-normal-and-exponential-coordinate-charts, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-timelike-worldline-and-proper-time, lem-gr-observer-pairing-with-future-causal-vectors, def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-covariant-derivative-along-a-curve, def-differential-of-a-smooth-map, thm-euclidean-inverse-function-theorem, def-interval, def-darboux-integral, def-partition-and-refinement, thm-monotonicity-of-the-integral, thm-ftc-second-part, def-continuity-real]
dependency_roles:
  lem-gr-conjugacy-via-the-exponential-map: mathematical-premise
  lem-gr-normal-index-form-factorization: mathematical-premise
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  thm-gr-lorentz-gauss-lemma-and-normal-maximum: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  def-interval: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-partition-and-refinement: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), section 6.1: conjugate points, their characterization through the exponential differential, the matrix A with A(0)=0, nabla A=Id and the statement that a causal geodesic with conjugate points in its interior fails to maximize in every neighborhood, printed pp. 159-161 and pp. 35-36 (PDF pp. 159-161 and pp. 35-36)"
      url: "https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the variational maximum property of timelike geodesics and the geodesic deviation equation, printed pp. 69-73 and 86-88 (PDF pp. 76-80 and 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "J. M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10: the exponential differential, conjugate points and the local maximizing property of geodesics before the first conjugate point in the positive-definite case, printed pp. 175-182 (PDF labels P191-P198); the timelike Lorentzian analogue is proved here"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). Let $b>0$ and
let $\gamma:[0,b]\to M$ be a smooth future timelike geodesic with
$g(T,T)=-1$, $T:=\gamma'$, $p:=\gamma(0)$, and suppose that no
$s\in(0,b]$ is a conjugate instant of $\gamma$ relative to $0$
([[def-gr-jacobi-field-and-conjugate-instant]] clause (d)).

**(a) Conjugacy and the exponential differential.** For every $s\in(0,b]$,
$\gamma(s)$ is conjugate to $p$ along $\gamma$ if and only if
$d(\exp_p)_{sT(0)}$ is not injective; consequently
$d(\exp_p)_{sT(0)}$ is invertible for every $s\in[0,b]$.

**(b) Local proper-time maximum.** Fix a finite family of charts
$(U_1,x_1),\dots,(U_m,x_m)$ whose domains cover $\gamma([0,b])$ and a
partition $0=s_0<s_1<\cdots<s_m=b$ with
$\gamma([s_{i-1},s_i])\subseteq U_i$ for each $i$. For $\delta>0$ call a
piecewise-$C^1$ curve $\alpha:[0,b]\to M$ **$C^1$-$\delta$-close to
$\gamma$ relative to this data** when $\alpha([s_{i-1},s_i])\subseteq U_i$
for every $i$ and, on the common refinement of the admissible partitions of
$\alpha$ and $\gamma$, the coordinate representatives satisfy
$$\sup\bigl\|x_i\circ\alpha-x_i\circ\gamma\bigr\|<\delta, \qquad \sup\bigl\|(x_i\circ\alpha)'-(x_i\circ\gamma)'\bigr\|<\delta$$
on each common open piece contained in $(s_{i-1},s_i)$. Then there exists
$\delta>0$ such that every piecewise-$C^1$ future timelike curve
$\alpha:[0,b]\to M$ with $\alpha(0)=p$ and $\alpha(b)=\gamma(b)$ that is
$C^1$-$\delta$-close to $\gamma$ relative to the fixed data satisfies
$$L_g(\alpha)\le b=L_g(\gamma),$$
with equality if and only if there is a piecewise-$C^1$ strictly increasing
surjection $\rho:[0,b]\to[0,b]$ with $\alpha=\gamma\circ\rho$; that is,
$\alpha$ is a strictly monotone reparametrization of $\gamma$.

**(c) The normal index form.** The normal index form of
[[lem-gr-normal-index-form-factorization]] on the space of piecewise-$C^1$
normal fields along $\gamma$ vanishing at $0$ and $b$ is positive definite.

## Facts & Assumptions

**Given:** A smooth future unit timelike geodesic $\gamma:[0,b]\to M$ with $p=\gamma(0)$, no conjugate instant in $(0,b]$, a chart-and-partition cover of $\gamma([0,b])$, and a piecewise-$C^1$ future timelike curve $\alpha$ with the same endpoints that is $C^1$-close to $\gamma$.

[L1] For $s>0$ with $sT(0)$ in the exponential domain, $\gamma(s)$ is conjugate to $p$ along $\gamma$ if and only if $d(\exp_p)_{sT(0)}$ is not injective; and $d(\exp_p)_{tv}(tu)=J_u(t)$ for the Jacobi field $J_u$ with $J_u(0)=0$, $D_tJ_u(0)=u$ ([[lem-gr-conjugacy-via-the-exponential-map]] clauses (a) and (c)).

[L2] The normal index form is positive definite under the present hypotheses ([[lem-gr-normal-index-form-factorization]] clause (c)).

[L3] $\mathcal E_p$ is open and star-shaped, $\exp_p$ is smooth with $d(\exp_p)_0=\operatorname{id}_{T_pM}$, and $t\mapsto\exp_p(tv)$ is the geodesic with initial tangent $v$; in particular $\gamma(t)=\exp_p(tT(0))$ for $t\in[0,b]$ and the exponential map is a local diffeomorphism wherever its differential is invertible ([[thm-gr-local-geodesics-and-exponential-map]] clauses (a)-(d), [[thm-gr-point-normal-and-exponential-coordinate-charts]]).

[L4] Gauss lemma: $g_{\exp_pv}(d(\exp_p)_v(v),d(\exp_p)_v(w))=g_p(v,w)$ ([[thm-gr-lorentz-gauss-lemma-and-normal-maximum]] clause (a)).

[L5] If $n$ is a future unit timelike vector and $w$ a future timelike vector at the same point, then $-g(n,w)\ge\sqrt{-g(w,w)}$, with equality exactly when $w$ is a positive multiple of $n$ ([[lem-gr-observer-pairing-with-future-causal-vectors]], [[def-gr-observer-and-rest-space]]).

[L6] Length is invariant under piecewise-$C^1$ strictly increasing reparametrization, and for a future timelike geodesic with $g(T,T)=-1$ one has $L_g(\gamma)=b$ ([[lem-gr-proper-time-reparametrization-and-four-velocity]] clause 2, [[def-gr-timelike-worldline-and-proper-time]] clause (d)).

[L7] The inverse function theorem: if $f$ is smooth on an open subset of $\mathbb R^4$ and $df$ is invertible at a point, then $f$ is a diffeomorphism from some open neighborhood of that point onto its image ([[thm-euclidean-inverse-function-theorem]], [[def-differential-of-a-smooth-map]]).

[L8] For continuous functions on a compact interval the Darboux integral is monotone, and the fundamental theorem of calculus holds for $C^1$ functions on each piece; a nonnegative continuous function with zero integral on an interval has a zero value at every point of that interval ([[def-darboux-integral]], [[thm-monotonicity-of-the-integral]], [[thm-ftc-second-part]], [[def-continuity-real]], [[def-partition-and-refinement]]).

## Proof

**Proof technique:** direct.

1.1 (Invertibility of the exponential differential along the geodesic.) By [L1] and the hypothesis, for every $s\in(0,b]$ there is no nonzero Jacobi field vanishing at $0$ and $s$, so $d(\exp_p)_{sT(0)}$ is injective for every $s\in(0,b]$; at $s=0$ the differential is the identity by [L3] and hence injective. This proves (a), and together with [L2] proves (c). [L1, L2, L3, given]

1.2 (Gauss identity throughout the exponential domain.) The identity in [L4] holds at each lift value even if it is outside the small injective normal domain of that supplier's Statement. Indeed fix $v\in\mathcal E_p$ and $w\in T_pM$. Openness and star-shapedness of $\mathcal E_p$ let us form $F(t,r):=\exp_p(t(v+rw))$ for $0\le t\le1$ and all sufficiently small $r$. Put $A:=\partial_tF$ and $J:=\partial_rF$. By [L3], $D_tA=0$ and $g(A,A)=g_p(v+rw,v+rw)$. Torsion freedom gives $D_tJ=D_rA$ by the symmetric coordinate connection formula, and metric compatibility gives [L3, L4, L8, given, algebra]
$$\partial_tg(A,J)=g(A,D_rA)=\tfrac12\partial_rg(A,A)=g_p(v+rw,w).$$
Since $J(0,r)=0$, integrating in $t$ and taking $r=0$ yields $g_{\exp_pv}(d(\exp_p)_v(v),d(\exp_p)_v(w))=g_p(v,w)$, with no injectivity hypothesis. The metric compatibility and torsion identities used here are supplied by [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] and [[def-gr-metric-selected-connection]]. [L3, L4, L8, given, algebra]

2.1 (Finite local-inverse data.) For each $s\in[0,b]$, $d(\exp_p)_{sT(0)}$ is invertible, so by [L7] there is an open $D_s\subseteq T_pM$ containing $sT(0)$ such that $\exp_p|_{D_s}$ is a diffeomorphism onto $V_s:=\exp_p(D_s)$. Since $\{sT(0):s\in[0,b]\}$ is compact, finitely many of the sets $D_{s_1},\dots,D_{s_N}$ cover this segment; write $\psi_j:V_j\to D_j$ for the inverse of the diffeomorphism. Because invertibility of $d(\exp_p)$ is an open condition on the base point, we may shrink each $D_j$ (keeping $s_jT(0)$ in it) so that $d(\exp_p)_{v}$ is invertible for every $v\in D_j$; fix such $D_j,V_j,\psi_j$. [step 1.1, L3, L7]

3.1 (Compatible local inverse branches and the lift.) Refine the fixed chart partition of (b) by a finite partition $0=t_0<\cdots<t_M=b$ so that each radial subsegment $\{sT(0):t_{k-1}\le s\le t_k\}$ is contained in one $D_{j(k)}$. Such a refinement exists by compactness and a Lebesgue number for the open cover of the parameter interval induced by the $D_j$. Write $D_k^*:=D_{j(k)}$, $V_k^*:=V_{j(k)}$, and $\psi_k^*:=\psi_{j(k)}$. At a junction $t_k$, the point $z_k:=t_kT(0)$ lies in both $D_k^*$ and $D_{k+1}^*$, and both inverses send $\gamma(t_k)$ to $z_k$. Therefore [step 2.1, L3, L7, given]
$$O_k:=V_k^*\cap V_{k+1}^*\cap(\psi_k^*)^{-1}(D_k^*\cap D_{k+1}^*)\cap(\psi_{k+1}^*)^{-1}(D_k^*\cap D_{k+1}^*)$$
is an open neighborhood of $\gamma(t_k)$. On $O_k$ both inverse values belong to $D_k^*$ and have the same exponential image, so injectivity on $D_k^*$ makes the inverses agree. Choose the tolerance $\delta$ so small that $\alpha([t_{k-1},t_k])\subseteq V_k^*$ for each $k$, and $\alpha(t_k)\in O_k$ at every junction. These requirements follow from $C^0$ closeness in the fixed charts: each reference subsegment is compact in its corresponding open target, each junction lies in its open $O_k$, and there are only finitely many such conditions. Define $v(s):=\psi_k^*(\alpha(s))$ on $[t_{k-1},t_k]$. The definitions agree at junctions, giving a continuous piecewise-$C^1$ lift with $\exp_p(v(s))=\alpha(s)$. Injectivity of the initial and final branches gives $v(0)=0$ and $v(b)=bT(0)$. This construction allows distinct inverse branches at a repeated spacetime event; compatibility is imposed only at adjacent parameter junctions. [step 2.1, L3, L7, given]

4.1 (Uniform timelike control of the lift.) On every refined interval the inverse branch and its derivative are continuous near the compact reference image, so the fixed-chart $C^1$ closeness implies uniform closeness of $v$ to $sT(0)$ and, on each smooth piece, of $v'$ to $T(0)$; the chain rule gives $v'=d\psi_k^*{}_{\alpha(s)}(\alpha'(s))$. To control the endpoint $s=0$ uniformly, choose a convex norm ball $B$ about $T(0)$ whose closure is inside the future timelike cone of $T_pM$, and first shrink the tolerance so that $v'(s)\in B$ throughout the initial refined interval, including one-sided values. Since $v(0)=0$, piecewise integration gives $v(s)/s=s^{-1}\int_0^s v'(t)\,dt\in B$ there; hence $v(s)$ is future timelike for every positive $s$ in this interval. On the remaining compact radial subsegment, bounded away from $0$, uniform $C^0$ control keeps $v(s)$ in the open future timelike cone. Thus one tolerance works for all $s\in(0,b]$. Every $v(s)$ lies in its $D_k^*$, so $d(\exp_p)_{v(s)}$ is invertible by step 2.1. [step 3.1, L3, L7, L8, algebra, step 2.1]

5.1 (Length inequality.) Define $R(s):=\sqrt{-g_p(v(s),v(s))}>0$ on $(0,b]$. On each smooth piece, step 1.2 gives $R'=-g_p(v,v')/R=-g_{\alpha}(N,\alpha')$, where $N:=d(\exp_p)_v(v)/R$ and $\alpha'=d(\exp_p)_v(v')$. The radial tangent has constant squared norm $g_p(v,v)=-R^2$ by metric compatibility along its geodesic. It starts future timelike and remains so by continuity of its pairing with the time-orientation field; hence $N$ is a future unit timelike vector. By [L5], $R'\ge\sqrt{-g(\alpha',\alpha')}$. Integrating over the pieces from $\varepsilon>0$ to $b$ and letting $\varepsilon\downarrow0$, using $R\to0$ and bounded piecewise-continuous length density, gives $L_g(\alpha)\le R(b)=\sqrt{-g_p(bT(0),bT(0))}=b$. [step 4.1, step 1.2, L3, L5, L8, algebra]

6.1 (Equality case.) If equality holds in step 5.1, the continuous nonnegative function $R'-\sqrt{-g(\alpha',\alpha')}$ on each smooth piece has zero integral, so it vanishes identically by [L8], and by the equality case of [L5] the vector $\alpha'(s)$ is a positive multiple of $N(s)$ at every interior parameter value; since $\alpha'=d(\exp_p)_v(v')$ and $N=d(\exp_p)_v(v)/R$, and $d(\exp_p)_{v(s)}$ is injective by step 4.1, $v'(s)$ is a positive multiple of $v(s)$: $v'(s)=\lambda(s)v(s)$ with $\lambda(s)>0$, piecewise continuous. [step 5.1, L5, algebra, step 4.1]

7.1 (Monotone reparametrization.) Under equality, step 6.1 gives $v'=\lambda v$ with $\lambda>0$ on the smooth pieces. Differentiating $R$ gives $R'=\lambda R$, so $(v/R)'=0$ there. Continuity across the finitely many corners makes $v/R$ one constant vector on $(0,b]$, and its terminal value is $v(b)/R(b)=T(0)$. Thus $v(s)=R(s)T(0)$ and $\alpha(s)=\gamma(R(s))$. Put $\rho(s):=R(s)$ for $s>0$ and $\rho(0):=0$. One has $\rho(b)=b$ and $\rho'=\sqrt{-g(\alpha',\alpha')}>0$ on every smooth piece, so $\rho$ is strictly increasing and surjects onto $[0,b]$. At $0$, $v(s)=s\alpha'(0)+o(s)$ and $v'(s)\to\alpha'(0)$ from the initial piece. Consequently $R(s)/s\to\sqrt{-g_p(\alpha'(0),\alpha'(0))}$ and $R'(s)=-g_p(v,v')/R$ has the same limit, proving the required one-sided $C^1$ extension. Hence $\rho$ is piecewise $C^1$ on $[0,b]$ and gives the equality characterization. [step 6.1, step 5.1, L3, L8, algebra]

8.1 (Converse and conclusion.) Conversely, if $\alpha=\gamma\circ\rho$ with $\rho$ a piecewise-$C^1$ strictly increasing surjection of $[0,b]$ onto itself, and $\alpha$ belongs to the comparison class of (b), then $L_g(\alpha)=L_g(\gamma)=b$ by the reparametrization invariance of [L6], so equality holds in the stated sense. Steps 5.1 and 7.1 give the inequality and the forward equality characterization for every $\alpha$ in the chosen neighborhood, and steps 1.1 and 2.1 give (a) and (c); the proof is complete. [step 5.1, step 7.1, L6, algebra, step 1.1] ∎

## Remarks

- **What "local" means.** The maximum is asserted only among curves with the same endpoints that are $C^1$-close to $\gamma$ in the fixed finite chart cover; it implies no global maximality of $\gamma$, no statement about curves leaving that neighborhood or wrapping around $M$, and no assertion that $\gamma$ stops being a maximum at or after the first conjugate instant. The neighborhood is nonempty and depends on $\gamma$ through the fixed chart-and-partition data and through the branch choices of step 2.1.

- **No Riemannian index lemma is consumed.** The proof uses the Gauss lemma, the reverse Cauchy-Schwarz inequality and the inverse function theorem; the positivity of the index form in (c) is proved separately in [[lem-gr-normal-index-form-factorization]] within the positive definite normal three-space, not by a positive-definite hypothesis on $TM$.
