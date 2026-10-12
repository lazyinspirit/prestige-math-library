---
id: thm-gr-conjugacy-and-local-timelike-maximum
kind: theorem
title: "Conjugacy, the exponential differential and the local proper-time maximum before the first conjugate instant"
status: draft
origin: session
domain: mathematics
dependency_level: 13
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

2.1 (Finite local-inverse data.) For each $s\in[0,b]$, $d(\exp_p)_{sT(0)}$ is invertible, so by [L7] there is an open $D_s\subseteq T_pM$ containing $sT(0)$ such that $\exp_p|_{D_s}$ is a diffeomorphism onto $V_s:=\exp_p(D_s)$. Since $\{sT(0):s\in[0,b]\}$ is compact, finitely many of the sets $D_{s_1},\dots,D_{s_N}$ cover this segment; write $\psi_j:V_j\to D_j$ for the inverse of the diffeomorphism. Because invertibility of $d(\exp_p)$ is an open condition on the base point, we may shrink each $D_j$ (keeping $s_jT(0)$ in it) so that $d(\exp_p)_{v}$ is invertible for every $v\in D_j$; fix such $D_j,V_j,\psi_j$. [step 1.1, L3, L7]

3.1 (The lift of a close curve.) Choose a partition $0=t_0<t_1<\dots<t_M=b$ fine enough that for each $k$ there is an index $j(k)$ with $[t_{k-1},t_k]\subseteq\{s:sT(0)\in D_{j(k)}\}$, and fine enough that consecutive intervals share a branch: for each $k<M$ there is $j$ with $[t_{k-1},t_{k+1}]\subseteq\{s:sT(0)\in D_j\}$. This is possible by taking a Lebesgue number of the open cover of $[0,b]$ by the intervals $\{s:sT(0)\in D_j\}$ (their union contains $[0,b]$, and $s\mapsto sT(0)$ is continuous). Choose the Closeness tolerance $\delta$ (in the data of (b)) so small that every $\alpha$ as in the statement satisfies $\alpha([t_{k-1},t_k])\subseteq V_{j(k)}$ for every $k$; this is possible because $\gamma([t_{k-1},t_k])\subseteq V_{j(k)}$ and both curves are $C^0$-close in the charts of the data. For such an $\alpha$ define $v(s):=\psi_{j(k)}(\alpha(s))$ on $[t_{k-1},t_k]$. On an overlap adjacent to $t_k$ the two definitions give points $v_1,v_2\in D_j$ (for the common index $j$ of the refinement) with $\exp_p(v_1)=\alpha(t_k)=\exp_p(v_2)$, hence $v_1=v_2$ by injectivity of $\exp_p$ on $D_j$. Therefore $v$ is a well-defined continuous piecewise-$C^1$ map $[0,b]\to T_pM$ with $\exp_p\circ v=\alpha$, and $v(0)=0$, $v(b)=bT(0)$: indeed $0$ and $v(0)$ both lie in $D_{j(1)}$ and have the same image $p$, and $bT(0)$ and $v(b)$ both lie in $D_{j(M)}$ and have the same image $\gamma(b)$. [step 2.1, L3, L7, given]

4.1 (The lift is timelike and close to the radial segment.) For a sufficiently small tolerance, $v(s)$ is uniformly close to $sT(0)$: on each interval the branch $\psi_j$ is continuous on $V_j$ and $\psi_j(\gamma(s))=sT(0)$, so uniform closeness of $\alpha$ to $\gamma$ gives uniform closeness of $v(s)$ to $sT(0)$ on $[t_{k-1},t_k]$. Hence, since $sT(0)$ is future timelike for $s>0$ and the timelike future cone is open at every $T_pM$, the values $v(s)$ for $s\in(0,b]$ are future timelike; near $s=0$, $v$ is $C^1$ and $v(0)=0$ with $v'(0)=\alpha'(0)$ (because $d(\exp_p)_0=\operatorname{id}$), so $v(s)=s\alpha'(0)+o(s)$ is future timelike for small $s>0$ as $\alpha'(0)$ is future timelike. Shrinking $\delta$ further if necessary, we may assume in addition that $d(\exp_p)_{v(s)}$ is invertible for every $s$, by the openness condition fixed in step 2.1. [step 3.1, L3, L7, algebra]

5.1 (Gauss-lemma inequality and integration.) Define $R(s):=\sqrt{-g_p(v(s),v(s))}>0$ on $(0,b]$. On each smooth piece, $R'=-g_p(v,v')/R$; by [L4] applied to the radial geodesic $t\mapsto\exp_p(tv(s))$ and the differentiation $v'$, $g_p(v,v')=g_{\alpha}(d(\exp_p)_v(v),d(\exp_p)_v(v'))=R\cdot g_{\alpha}(N,\alpha')$, where $N:=d(\exp_p)_v(v)/R$ is the future unit radial field and we used $\alpha'=d(\exp_p)_v(v')$. Hence $R'=-g(N,\alpha')\ge\sqrt{-g(\alpha',\alpha')}$ by [L5], since both $N$ and $\alpha'$ are future timelike. Integrating over the pieces from $\varepsilon>0$ to $b$ and letting $\varepsilon\downarrow0$ (using $R\to0$ at $0$, continuity of the integrand, and [L8]) gives $L_g(\alpha)=\int_0^b\sqrt{-g(\alpha',\alpha')}\,ds\le R(b)-0=\sqrt{-g_p(bT(0),bT(0))}=b$, so the inequality of (b) holds. [step 4.1, L4, L5, L8, algebra]

6.1 (Equality case.) If equality holds in step 5.1, the continuous nonnegative function $R'-\sqrt{-g(\alpha',\alpha')}$ on each smooth piece has zero integral, so it vanishes identically by [L8], and by the equality case of [L5] the vector $\alpha'(s)$ is a positive multiple of $N(s)$ at every interior parameter value; since $\alpha'=d(\exp_p)_v(v')$ and $N=d(\exp_p)_v(v)/R$, and $d(\exp_p)_{v(s)}$ is injective by step 4.1, $v'(s)$ is a positive multiple of $v(s)$: $v'(s)=\lambda(s)v(s)$ with $\lambda(s)>0$, piecewise continuous. [step 5.1, L5, algebra]

7.1 (Monotone reparametrization.) Assume $v'=\lambda v$ with $\lambda>0$ piecewise continuous as in step 6.1, and let $w_0:=v'(0)=\alpha'(0)$, a nonzero future timelike vector. For $s>0$ set $u(s):=v(s)/s$, which is nonzero because $v(s)$ is future timelike; then $u$ is piecewise $C^1$ with $u'=\bigl((\lambda(s)s-1)/s\bigr)u$, and $u(s)\to w_0$ as $s\downarrow0$. On each smooth piece, if $\mu:=(\lambda s-1)/s$ and $\varphi$ solves $\varphi'=\mu\varphi$ with $\varphi=1$ at the left endpoint of the piece, then $(u/\varphi)'=0$, so $u=\varphi\,c$ for a constant vector $c$ on that piece; continuity of $u$ across the corners forces the same $c$ on all pieces, and $c=\lim_{s\downarrow0}u(s)=w_0$. Hence $u(s)=f(s)w_0$ for a positive piecewise-$C^1$ function $f$ on $(0,b]$; consequently $v(s)=r(s)w_0$ with $r(s):=sf(s)>0$ and $r'=\lambda r>0$, so $r$ is strictly increasing with $r(0)=0$, and $v(b)=bT(0)$ gives $w_0=\frac{b}{r(b)}T(0)$. Setting $\rho(s):=\frac{b\,r(s)}{r(b)}$ gives a piecewise-$C^1$ strictly increasing surjection $\rho:[0,b]\to[0,b]$ with $v(s)=\rho(s)T(0)$, so $\alpha(s)=\exp_p(\rho(s)T(0))=\gamma(\rho(s))$. [step 6.1, L3, algebra]

8.1 (Converse and conclusion.) Conversely, if $\alpha=\gamma\circ\rho$ with $\rho$ a piecewise-$C^1$ strictly increasing surjection of $[0,b]$ onto itself, then $\alpha$ is future timelike and piecewise $C^1$ with the same endpoints, and $L_g(\alpha)=L_g(\gamma)=b$ by the reparametrization invariance of [L6], so equality holds in the stated sense. Steps 5.1 and 7.1 give the inequality and the forward equality characterization for every $\alpha$ in the chosen neighborhood, and steps 1.1 and 2.1 give (a) and (c); the proof is complete. [step 5.1, step 7.1, L6, algebra] ∎

## Remarks

- **What "local" means.** The maximum is asserted only among curves with the same endpoints that are $C^1$-close to $\gamma$ in the fixed finite chart cover; it implies no global maximality of $\gamma$, no statement about curves leaving that neighborhood or wrapping around $M$, and no assertion that $\gamma$ stops being a maximum at or after the first conjugate instant. The neighborhood is nonempty and depends on $\gamma$ through the fixed chart-and-partition data and through the branch choices of step 2.1.

- **No Riemannian index lemma is consumed.** The proof uses the Gauss lemma, the reverse Cauchy-Schwarz inequality and the inverse function theorem; the positivity of the index form in (c) is proved separately in [[lem-gr-normal-index-form-factorization]] within the positive definite normal three-space, not by a positive-definite hypothesis on $TM$.
