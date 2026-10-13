---
id: thm-gr-limit-curve-two-endpoints
kind: theorem
title: "Two-endpoint limit curve theorem: bounded lengths give joining limits,
  unbounded lengths give two inextendible tails with the closure relation"
status: draft
origin: session
domain: mathematics
dependency_level: 21
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: case-analysis
deps:
  [
    lem-gr-basic-limit-curve,
    lem-gr-lipschitz-family-limit-subsequence,
    lem-gr-strong-causality-compact-length-bound,
    lem-gr-causal-curve-conventions,
    lem-gr-dominating-cone-bounds,
    thm-gr-normal-neighborhood-causal-cone,
    thm-gr-convex-normal-neighborhoods,
    lem-gr-joint-exponential-diffeomorphism,
    thm-gr-auxiliary-complete-riemannian-metric,
    def-gr-causal-curves-and-reachability,
    lem-gr-causal-curve-calculus,
    def-gr-causal-conditions-and-global-hyperbolicity,
    def-riemannian-distance-on-a-connected-manifold,
    thm-the-riemannian-distance-topology-is-the-manifold-topology,
    def-metric-ball,
    def-countable-choice,
    def-dependent-choice,
    def-continuity-real,
    def-interval,
    def-c-r-and-smooth-maps-between-smooth-manifolds,
    thm-riemannian-distance-is-a-metric,
    lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric
  ]
dependency_roles:
  lem-gr-basic-limit-curve: mathematical-premise
  lem-gr-lipschitz-family-limit-subsequence: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  thm-the-riemannian-distance-topology-is-the-manifold-topology: mathematical-premise
  def-metric-ball: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-riemannian-distance-is-a-metric: mathematical-premise
  lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Limit curve theorems in Lorentzian geometry,
        arXiv:0712.3942v2: Theorem 3.1(2) with full proof, statements printed
        pp. 11-13 and proof pp. 14-17, and Lemmas 2.5-2.7 printed pp. 6-8"
      url: "https://arxiv.org/abs/0712.3942"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity
        22 (2019), article 3: limit curves, section 2.11 printed pp. 45-49;
        non-total imprisonment, Theorem 2.80 printed p. 58"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold and let $h$ be the auxiliary
metric of [[thm-gr-auxiliary-complete-riemannian-metric]], so that
$(M,d_h)$ is complete and closed $d_h$-bounded sets are compact. Let
$$\alpha_k:[0,b_k]\to M,\qquad 0<b_k<\infty,$$
be future causal curves ([[def-gr-causal-curves-and-reachability]])
parametrized by $h$-arclength, $\ell_h(\alpha_k|_{[s,t]})=t-s$ for
$0\le s\le t\le b_k$, with $\alpha_k(0)\to x\in M$ and
$\alpha_k(b_k)\to z\in M$. Passing to a subsequence, let
$b:=\lim_kb_k\in[0,\infty]$. Then:

**(i) Bounded case.** If $0<b<\infty$, there is a subsequence and a future
causal curve $\alpha:[0,b]\to M$ with $\alpha(0)=x$, $\alpha(b)=z$ and
$d_h(\alpha(s),\alpha(t))\le t-s$ for $s\le t$, such that the subsequence
converges to $\alpha$ uniformly in $d_h$ on $[0,b]$ after the following
common-domain reparametrization when $b>0$:
$$\widetilde\alpha_k(t):=\alpha_k\!\left(\frac{b_k}{b}t\right),\qquad 0\le t\le b.$$
Thus $\widetilde\alpha_k(0)=\alpha_k(0)$ and
$\widetilde\alpha_k(b)=\alpha_k(b_k)$. If $b=0$, then $x=z$ and the curves
converge to the constant map at $x$ uniformly on their varying domains in
the sense that $\sup_{0\le t\le b_k}d_h(\alpha_k(t),x)\to0$. The constant
map is the continuous limit, not a future causal curve in the nonzero-velocity
curve class.

**(ii) Unbounded case.** If $b=\infty$, there are a future-inextendible future
causal curve $\alpha^+:[0,\infty)\to M$ with $\alpha^+(0)=x$ and a
past-inextendible future causal curve $\alpha^-:(-\infty,0]\to M$ with
$\alpha^-(0)=z$, such that a subsequence converges to $\alpha^+$ uniformly on
every compact subinterval of $[0,\infty)$ and to $\alpha^-$ uniformly on every
compact subinterval of $(-\infty,0]$ (where $\alpha^-$ is the limit of the
curves $s\mapsto\alpha_k(b_k+s)$, $s\le0$, for large $k$). Moreover, for all
$t_+\ge0$ and $t_-\le0$ there are event pairs $u_k,v_k\in M$ with
$u_k\le v_k$, $u_k\to\alpha^+(t_+)$ and $v_k\to\alpha^-(t_-)$. Thus
$(\alpha^+(t_+),\alpha^-(t_-))$ lies in the sequential closure of the causal
relation, meaning precisely that it is a limit of pairs in the relation
$\le$.

**(iii) Coincident endpoints.** If $x=z$, then in case (i) with $b>0$ the
curve $\alpha$ is a nonconstant closed future causal curve through $x$
($\alpha(0)=\alpha(b)=x$), and in case (ii) the concatenation $\gamma$ of
$\alpha^-$ and $\alpha^+$ is an inextendible future causal curve
$\gamma:\mathbb R\to M$ with $\gamma(0)=x$.

**(iv) Imprisonment.** Let $(M,g,N)$ be strongly causal
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (b)) and
suppose all images $\alpha_k([0,b_k])$ are contained in one compact set $K$.
Then $b\le L(K)<\infty$ where $L(K)$ is the length bound of
[[lem-gr-strong-causality-compact-length-bound]]; in particular the case
$b=\infty$ is excluded.

## Facts & Assumptions

**Given:** Countable and dependent choice, the Lorentzian manifold, the auxiliary metric $h$, and the arclength-parametrized sequence $\alpha_k$ with its endpoint limits $x,z$ and the value $b=\lim_kb_k$.

[L1] The basic limit curve lemma: for a sequence of future causal $h$-arclength-parametrized curves defined on intervals containing $[0,T]$ with initial points converging, a subsequence converges uniformly in $d_h$ on $[0,T]$ to a future causal curve satisfying (a1)-(a4) there; for intervals eventually containing $[0,n]$ for every $n$, a diagonal subsequence converges on every compact subinterval of $[0,\infty)$ and the limit is future-inextendible; the same holds in the time-reversed orientation for the past side ([[lem-gr-basic-limit-curve]] clauses (a) and (b)).

[L2] For $s<t$ inside the domain of a future causal curve $\beta$, the restriction $\beta|_{[s,t]}$ is a future causal curve from $\beta(s)$ to $\beta(t)$; hence $\beta(s)\le\beta(t)$ ([[lem-gr-causal-curve-calculus]] clause (a), [[def-gr-causal-curves-and-reachability]] clause (c)).

[L3] Concatenation of two future causal curves at a common endpoint is a future causal curve; a curve that is both future- and past-inextendible is inextendible ([[lem-gr-causal-curve-calculus]] clause (d), [[def-gr-causal-curves-and-reachability]] clause (d), [[lem-gr-causal-curve-conventions]] clause (d)).

[L4] $d_h$ is a metric inducing the manifold topology; for every locally absolutely continuous $\beta$ and $s<t$, $d_h(\beta(s),\beta(t))\le\ell_h(\beta|_{[s,t]})$. In particular, $h$-arclength parametrization gives the upper bound $d_h(\beta(s),\beta(t))\le t-s$, not equality in general ([[def-riemannian-distance-on-a-connected-manifold]], [[thm-riemannian-distance-is-a-metric]], [[thm-the-riemannian-distance-topology-is-the-manifold-topology]]).

[L5] In a strongly causal spacetime, causal curves with image in the compact set $K$ have $h$-length at most $L(K)$, and $h$-arclength-parametrized curves with image in $K$ have domain length at most $L(K)$ ([[lem-gr-strong-causality-compact-length-bound]]).

[L6] A uniformly Lipschitz sequence of maps from a compact interval into a compact metric space has a uniformly convergent subsequence, and its limit has the same Lipschitz bound ([[lem-gr-lipschitz-family-limit-subsequence]]).

[L7] In an adapted chart from [[lem-gr-dominating-cone-bounds]], future causal curves satisfy a uniform cone-speed estimate and the time coordinate is strictly increasing. On a compact coordinate ball, smoothness of $h$ and the local metric comparison with the Euclidean metric give constants $c,C_0>0$ such that $c|\dot x|_{\mathrm e}^2\le h(\dot\gamma,\dot\gamma)\le C_0|\dot x|_{\mathrm e}^2$. Thus the $h$-length of a causal segment contained in a smaller ball is at most $C\,\Delta x^0$, using the cone-speed estimate. To compare distance and coordinates, choose concentric coordinate balls $B_r\subset B_R$ with compact closure in the chart and $2r\le R-r$. For $y,z\in B_r$, every path staying in $B_R$ has length at least $\sqrt c\,|x(y)-x(z)|_{\mathrm e}$; every path exiting $B_R$ has initial length at least $\sqrt c(R-r)\ge\sqrt c\,|x(y)-x(z)|_{\mathrm e}$ before its first exit. Taking the infimum over paths gives $|x(y)-x(z)|_{\mathrm e}\le c^{-1/2}d_h(y,z)$. Hence a $d_h$-Lipschitz curve is locally Lipschitz in chart coordinates ([[lem-gr-dominating-cone-bounds]] clauses (a)-(c), [[thm-gr-auxiliary-complete-riemannian-metric]], [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]]).

## Proof

**Proof technique:** case-analysis.

1.1 (Common-domain reparametrization in the bounded positive case.) Suppose $0<b<\infty$. Define $\widetilde\alpha_k(t):=\alpha_k\!\left(\frac{b_k}{b}t\right),\qquad 0\le t\le b.$ Since $b_k/b\to1$, after discarding finitely many terms these curves are 2-Lipschitz for $d_h$: the arclength parametrization gives $d_h(\widetilde\alpha_k(s),\widetilde\alpha_k(t)) \le\ell_h(\widetilde\alpha_k|_{[s,t]}) =\frac{b_k}{b}|t-s|\le2|t-s|.$ Their initial points converge to $x$, and their images lie in one closed $h$-ball about $x$ of radius $2b+1$, which is compact by [L4]. Applying [L6] gives a subsequence converging uniformly on $[0,b]$ to a 2-Lipschitz map $\alpha$. The sharper inequality $d_h(\widetilde\alpha_k(s),\widetilde\alpha_k(t)) \le\frac{b_k}{b}|t-s|$ and $b_k/b\to1$ imply $d_h(\alpha(s),\alpha(t))\le|t-s|$. Uniform convergence at the endpoints gives $\alpha(0)=x$ and $\alpha(b)=z$. [L4, L6, given, construct]

1.2 (The limit is future causal.) Let $[s,t]$ be a parameter interval such that $\alpha([s,t])$ lies in a strictly convex normal set $C$. Since this image is compact and $C$ is open, uniform convergence implies $\widetilde\alpha_k([s,t])\subset C$ for all sufficiently large $k$. By [[lem-gr-causal-curve-conventions]] clause (a), each approximating causal subarc has a future-causal position vector $w_k=\exp_{\widetilde\alpha_k(s)}^{-1} (\widetilde\alpha_k(t)).$ Smoothness of the two-point inverse on $C\times C$ gives $w_k\to w=\exp_{\alpha(s)}^{-1}(\alpha(t))$; closedness of the future cone gives that $w$ is future causal or zero. Thus $\alpha$ is geodesically connectible. It is locally Lipschitz in charts by its $d_h$-Lipschitz bound and [L7], hence locally absolutely continuous. At almost every differentiability parameter $t<b$, choose a relatively compact adapted chart $U$ around $\alpha(t)$ and $h_0>0$ so $\alpha([t,t+h])\subset U$ for $0<h\le h_0$. For all sufficiently large $k$ the approximating arcs also lie in $U$ and have $h$-length $(b_k/b)h$. By [L7], $\frac{b_k}{b}h\le C\bigl(x^0(\widetilde\alpha_k(t+h)) -x^0(\widetilde\alpha_k(t))\bigr)$ for a chart constant $C$. Passing to the limit and using $b_k/b\to1$ gives $x^0(\alpha(t+h))-x^0(\alpha(t))\ge h/C.$ At differentiability points this yields $(x^0\circ\alpha)'(t)\ge1/C>0$. For small $h>0$ the position vector $\exp_{\alpha(t)}^{-1}(\alpha(t+h))$ is future causal or zero by the preceding connectibility argument; divided by $h$ it tends in coordinates to $\alpha'(t)$, because the differential of the second-variable inverse at the diagonal is the identity ([[lem-gr-joint-exponential-diffeomorphism]] clauses (b),(c)). The future cone is closed and $\alpha'$ has positive time component, so $\alpha'(t)$ is nonzero future causal almost everywhere. This proves $\alpha$ is a future causal curve and is not constant on any nondegenerate interval. [L1, L4, L6, L7, given]

1.3 (The future tail in the unbounded case.) Suppose $b=\infty$. For each fixed $T>0$, $[0,T]$ is contained in $[0,b_k]$ for all large $k$. Applying clause (b) of [L1] by diagonal extraction over integer $T$ gives a subsequence converging uniformly on every compact subinterval of $[0,\infty)$ to a future-inextendible future causal curve $\alpha^+:[0,\infty)\to M$ with $\alpha^+(0)=x$. [L1, given, choose]

1.4 (The past tail in the unbounded case.) Define $\delta_k(s):=\alpha_k(b_k+s)$ on $[-b_k,0]$. For each fixed $T>0$, $[-T,0]$ lies in $[-b_k,0]$ for all large $k$. Apply the time-reversed half-line result of [L1] and diagonalize to obtain a past-inextendible future causal curve $\alpha^-:(-\infty,0]\to M$ with $\alpha^-(0)=z$, such that $\delta_k$ converges uniformly to $\alpha^-$ on compact subintervals. A nested subsequence retains both tail limits. [L1, given, choose]

1.5 (The zero-length case.) If $b=0$, then $d_h(x,z)\le d_h(x,\alpha_k(0)) +d_h(\alpha_k(0),\alpha_k(b_k)) +d_h(\alpha_k(b_k),z)\le o(1)+b_k+o(1),$ so $x=z$. For every $t\in[0,b_k]$, $d_h(\alpha_k(t),x)\le d_h(\alpha_k(0),x)+t\le o(1)+b_k.$ Hence the curves converge uniformly on their varying domains to the constant curve at $x$. [L4, given, algebra]

1.6 (Imprisonment.) If the spacetime is strongly causal and all images lie in a compact $K$, [L5] gives $b_k\le L(K)$ for every $k$. Taking limits yields $b\le L(K)<\infty$, excluding the unbounded case. [L5, given, algebra]

2.1 (The closure relation.) Fix $t_+\ge0$ and $t_-\le0$. For all sufficiently large $k$, $t_+\le b_k+t_-$, so by [L2], $\alpha_k(t_+)\le\alpha_k(b_k+t_-)=\delta_k(t_-).$ The uniform-on-compact limits in steps 1.3-1.4 give endpoints converging respectively to $\alpha^+(t_+)$ and $\alpha^-(t_-)$. This is the stated sequential closure relation. [step 1.3, step 1.4, L2, given]

2.2 (Coincident endpoints.) If $x=z$ and $0<b<\infty$, step 1.2 gives a future causal curve $\alpha$ from $x$ to $x$ which is nonconstant on every nondegenerate interval. If $x=z$ and $b=\infty$, concatenate $\alpha^-$ and $\alpha^+$ at their common endpoint $x$. The concatenation is future causal by [L3], and is past- and future-inextendible because its respective tails are; hence it is inextendible. [step 1.1, step 1.2, step 1.3, step 1.4, L3, given]

3.1 (Conclusion.) Clause (i) for $b>0$ is steps 1.1-1.2 and for $b=0$ is step 1.5; clause (ii) is steps 1.3, 1.4 and 2.1; clause (iii) is step 2.2; and clause (iv) is step 1.6. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 1.5, step 1.6, step 2.2] ∎

## Remarks

- **The two alternatives are exclusive in the applications.** The bounded alternative produces a joining curve between the limiting endpoints; the unbounded alternative produces two one-sided curves related through the limit of the sequence, not a joining curve. The closure relation is recorded in the weak sequential form actually used downstream.

- **Role of the choice assumptions.** Countable choice is used for the diagonal subsequence selections, dependent choice is inherited from the manifold and curve calculus suppliers; no arbitrary family of curves is selected.

- **No length semicontinuity.** The theorem does not compare Lorentzian lengths; that is [[thm-gr-length-upper-semicontinuity]].
