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
deps: [def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-temporal-functions-and-time-functions, lem-gr-causal-curve-calculus, lem-gr-causal-curve-conventions, lem-gr-maximal-geodesics-and-extension, def-gr-causal-curves-and-reachability, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, lem-gr-parallel-transport-and-geodesic-speed, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, lem-gr-dominating-cone-bounds, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, def-interval, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, lem-gr-lipschitz-family-limit-subsequence, def-metric-space, thm-gr-cauchy-surface-implies-globally-hyperbolic]
dependency_roles:
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-temporal-functions-and-time-functions: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n: mathematical-premise
  lem-gr-lipschitz-family-limit-subsequence: mathematical-premise
  def-metric-space: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Theorem 2.9.9 with Lemma 2.9.11 (curves in the interior of the domain of dependence meet S, I+(S), I-(S)) and the openness argument of its proof, printed pp. 46-50; Proposition 2.2.3 and Definition 2.2.7 (elementary regions) printed pp. 8-13"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Proposition 3.44 and Proposition 3.43 on domains of dependence and causal convexity, printed pp. 97-99"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]). Let $I\subseteq\mathbb R$ be an open
interval with $0\in I$ and let $B\subseteq\mathbb R^3$ be an open ball centred
at $0$ of radius $R>0$ with a fixed Euclidean norm $|\cdot|$. Suppose
$(s,\sigma):U\to I\times B$ is a diffeomorphism of an open set $U\subseteq M$
onto $I\times B$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]) such
that, writing $v^s:=ds(v)$ and $v^\sigma:=d\sigma(v)$ for $v\in T_qM$,
$q\in U$:

**(C1)** $\partial/\partial s$ is future timelike and every level set
$s^{-1}(c)$ is spacelike;

**(C2)** there is $K\ge1$ such that every future causal $v\in T_qM$, $q\in U$,
satisfies $|v^\sigma|\le K\,v^s$.

On the open submanifold $U$ with the induced metric and time orientation
([[def-gr-causal-curves-and-reachability]]), let
$$D^\pm_U(S):=\bigl\{p\in U:\ \text{every past- (respectively future-) inextendible causal curve in }U\text{ through }p\text{ meets }S\bigr\}$$
be the domains of dependence of the spacelike slice
$S:=s^{-1}(0)=\{0\}\times B$ in the sense of
[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (d), computed in
$U$. Then:

**(a)** $D^+_U(S)\subseteq\{s\ge0\}$ and $D^-_U(S)\subseteq\{s\le0\}$;

**(b)** the open set $Q:=\{q\in U:|s(q)|+K\,|\sigma(q)|<R\}$ is contained in
$D^+_U(S)\cup D^-_U(S)$; more precisely
$Q\cap\{s>0\}\subseteq D^+_U(S)$ and $Q\cap\{s<0\}\subseteq D^-_U(S)$, and $Q$
is a neighbourhood of $S$ in $U$;

**(c)** the open set $W:=\mathrm{int}_U\bigl(D^+_U(S)\cup D^-_U(S)\bigr)$
satisfies $Q\subseteq W$, and $S$ is a Cauchy set of the open submanifold
$(W,g|_W)$: every causal curve in $W$ that is inextendible in $W$ meets $S$
in exactly one parameter value. Consequently, $(W,g|_W,N|_W)$ is globally
hyperbolic by [[thm-gr-cauchy-surface-implies-globally-hyperbolic]].

## Facts & Assumptions

**Given:** The chart $(U,(s,\sigma))$ with properties (C1) and (C2), the slice $S$, and the domains of dependence of the open submanifold $(U,g|_U,N|_U)$.

[L1] Since $ds$ is past timelike on $U$, the function $s$ is a temporal function on $U$: along every future causal curve $\gamma$ in $U$ the composite $s\circ\gamma$ is locally absolutely continuous with positive derivative almost everywhere and strictly increasing on nondegenerate parameter intervals; every level set of $s$ is achronal; and $s$-level sets are met at most once by every causal curve ([[lem-gr-temporal-functions-and-time-functions]] clauses (b) and (c), [[def-gr-causal-conditions-and-global-hyperbolicity]] clauses (d) and (e)).

[L2] The coordinate $s$-fibers $\gamma_{\sigma_0}(s'):=(s',\sigma_0)$, $s'\in I$, are future timelike curves parametrized with $s$-value $s'$, and as $s'$ tends to either endpoint of $I$ the fiber does not converge to a point of $U$; hence each fiber, restricted to a one-sided end, is past- or future-inextendible in $U$ ([[def-gr-causal-curves-and-reachability]] clause (b) and (d), [[def-continuity-real]]).

[L3] Cone geometry: the future causal cone in each $T_qM$ is closed and convex and varies continuously with $q$, and there are continuous bounds comparing $g$ with the flat form $-(ds)^2+|d\sigma|^2$ on relatively compact subsets of $U$; in particular (C2) holds on all of $U$ and, on each relatively compact $U_0\Subset U$, there is $C\ge1$ with $|v^\sigma|\le C$ and $|v^s|\le C$ whenever $v$ is future causal with $|v|=1$, and the $g$-length density of causal curves is bounded above and below by constants times $\int|v^s|$ ([[lem-gr-dominating-cone-bounds]] clauses (b) and (d), [[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-observer-and-rest-space]]).

[L4] Causal curves in $U$, reparametrized by $s$, are $K$-Lipschitz graphs: if $\gamma$ is a causal curve in $U$ and $s$ is monotone on it, then $\tilde\gamma(s'):=(s',\tilde\sigma(s'))$ with $\tilde\sigma$ Lipschitz with constant $K$; and a Lipschitz graph over $s$ whose velocity lies in the future cone almost everywhere is a future causal curve ([[lem-gr-causal-curve-calculus]] clauses (d) and (e), [[def-gr-causal-curves-and-reachability]] clause (b), [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[L5] Limits of Lipschitz graph families: let $\tilde\sigma_m:(a,b)\to B$ be $K$-Lipschitz maps into the compact set $B$; then some subsequence converges uniformly on every compact subinterval of $(a,b)$ to a $K$-Lipschitz map $\tilde\sigma$ ([[lem-gr-lipschitz-family-limit-subsequence]]). If, in addition, the graphs $\tilde\sigma_m$ are causal graphs as in [L4] and $\tilde\sigma_m\to\tilde\sigma$ uniformly on compact subintervals, then $\tilde\sigma$ is a causal graph: differences of values at two parameters are averages of differences of the $\tilde\sigma_m$ over subintervals, the future cone is a closed convex set varying continuously with the base point, and the a.e. derivative of the limit is the limit of those averages at Lebesgue points ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]], [[lem-timelike-cone-has-two-convex-components]], [[def-metric-space]]).

[L6] One-sided extension of causal segments: every causal segment in $U$ is contained in an inextendible causal curve of $U$ ([[lem-gr-maximal-geodesics-and-extension]] clause (c), [[lem-gr-causal-curve-conventions]] clause (d)).

## Proof

**Proof technique:** direct.

1.1 (Displacement bound for avoiding curves.) Let $q\in U$ with $s(q)>0$ and let $\gamma$ be a causal curve in $U$ through $q$ that avoids $S$. Since $s\circ\gamma$ is continuous with connected image containing $s(q)>0$ and avoiding $0$, one has $s(\gamma(t))>0$ for all $t$ [L1]. If $\gamma$ is past-inextendible and $\tilde\sigma$ is its $s$-parametrized graph on an interval with past endpoint $c$ (the infimum of its $s$-values), then $c\ge0$; moreover, if the graph converges as $s'\downarrow c$ to a point $(c,\sigma_*)$ with $|\sigma_*|<R$, then $\gamma$ converges in $U$ and is extendible, contradiction. Hence every such witness curve satisfies $|\sigma_*|=R$ at its past end and, since $\tilde\sigma$ is $K$-Lipschitz [L4], $$R-|\sigma(q)|\le K\,(s(q)-c)\le K\,s(q).$$ [L1, L2, L4, given]

1.2 (Clause (a).) Let $p\in U$ with $s(p)<0$ and suppose $p\in D^+_U(S)$. The past fiber $\gamma(s'):=(s',\sigma(p))$, $s'\in I\cap(-\infty,s(p)]$, is a past-directed timelike curve through $p$ whose $s$-values are $<0$: it avoids $S$. By [L2] it does not converge as $s'\to\inf I$, so it is past-inextendible in $U$. This contradicts $p\in D^+_U(S)$. Hence $D^+_U(S)\subseteq\{s\ge0\}$, and the dual argument with future fibers gives $D^-_U(S)\subseteq\{s\le0\}$. [L1, L2, L3, given]

2.1 (The collar.) Let $q\in Q$ with $s(q)\ge0$; we show $q\in D^+_U(S)$. Let $\gamma$ be any past-inextendible causal curve in $U$ through $q$. If it meets $S$ there is nothing to prove; otherwise it avoids $S$, so $s\circ\gamma>0$ on its image [L1], and step 1.1 gives $R-|\sigma(q)|\le K\,s(q)$. But $q\in Q$ means $|\sigma(q)|+K\,|s(q)|<R$, that is $R-|\sigma(q)|>K\,s(q)$: a contradiction. Hence every such curve meets $S$ and $q\in D^+_U(S)$; the case $q\in Q$, $s(q)\le0$ is dual. Therefore $Q\subseteq D^+_U(S)\cup D^-_U(S)$, and since $Q$ is open and contains $S=\{s=0\}\times B$, it is a neighbourhood of $S$ in $U$. [step 1.1, L2, given]

2.2 (Cauchy property, first case.) Let $\gamma:J\to W$ be a causal curve in the open set $W=\mathrm{int}_U(D^+_U\cup D^-_U)$ that is inextendible in $W$ and avoids $S$. Since $s\circ\gamma$ has connected image avoiding $0$, either $s\circ\gamma>0$ or $s\circ\gamma<0$ throughout; assume the former (the other case is the time reverse of the argument). Every point of the image lies in $W\cap\{s>0\}$, and $W\subseteq D^+_U\cup D^-_U$ with $D^-_U\subseteq\{s\le0\}$ by step 1.2, so $W\cap\{s>0\}\subseteq D^+_U(S)$: the whole curve consists of points of $D^+_U(S)$. Suppose first that $\gamma$ is past-inextendible in $U$: then for any $t_0\in J$ the past part of $\gamma$ up to $t_0$ is a past-inextendible causal curve in $U$ through $\gamma(t_0)\in D^+_U(S)$, so it meets $S$, contradicting that $\gamma$ avoids $S$. [step 1.2, L1, given]

3.1 (Openness of the one-sided domains.) We show that $D^+_U(S)\cap\{s>0\}$ is open in $U$, and dually $D^-_U(S)\cap\{s<0\}$. Let $q\in D^+_U(S)$ with $s(q)>0$. If $|\sigma(q)|+K s(q)<R$, then the same strict inequality holds for all points near $q$, which therefore lie in $D^+_U(S)$ by step 2.1. Otherwise $R-|\sigma(q)|\le K s(q)$: suppose there were $q_m\to q$ with $q_m\notin D^+_U(S)$. For large $m$, $s(q_m)>0$, so there are past-inextendible causal curves $\gamma_m$ in $U$ through $q_m$ avoiding $S$; by step 1.1 their $s$-parametrized graphs $\tilde\sigma_m$ have past endpoints $c_m\in[0,s(q_m)]$ with $R-|\sigma(q_m)|\le K(s(q_m)-c_m)$, so $\limsup c_m\le c_*:=s(q)-(R-|\sigma(q)|)/K\ge0$; passing to a subsequence, $c_m\to\bar c\le c_*$. On $(c_*,s(q))$ the graphs are defined for large $m$ and are uniformly $K$-Lipschitz, so by [L5] some subsequence converges uniformly on every compact subinterval of $(c_*,s(q))$ to a $K$-Lipschitz causal graph $\tilde\sigma_\infty$ defined on $(c_*,s(q))$ with $\tilde\sigma_\infty(s(q))=\sigma(q)$ (by uniform convergence and $q_m\to q$). For $s'>\bar c$ the witness estimate gives $|\tilde\sigma_m(s')|\ge R-K(s'-c_m)$ for all $m$ with $c_m<s'$, so in the limit $|\tilde\sigma_\infty(s')|\ge R-K(s'-\bar c)\ge R-K(s'-c_*)$; hence as $s'\downarrow c_*$ the $K$-Lipschitz graph has a limit point $\sigma_*$ with $|\sigma_*|=R$. The graph converges in $M$ to $(c_*,\sigma_*)\notin U$, so it is past-inextendible in $U$ and avoids $S$; hence $q\notin D^+_U(S)$, contradicting $q\in D^+_U(S)$. Therefore every point near $q$ lies in $D^+_U(S)$, that is, $D^+_U(S)\cap\{s>0\}$ is open; the dual statement for $D^-_U(S)\cap\{s<0\}$ follows with future-inextendible witnesses and the time reversal of the argument. [step 1.1, step 2.1, L4, L5, given, algebra]

4.1 (Cauchy property, second case.) In the situation of step 2.2 assume that $\gamma$ converges in $U$ at its past end to a point $q\in U$. Since the image lies in $W$, the point $q$ lies in the closure $\overline W$ of $W$ in $U$. If $q\in W$, the curve converges in $W$ at its past end, contradicting inextendibility in $W$. If $q\in\overline W\setminus W$: then $q\notin W=\mathrm{int}_U(D_U)$, where $D_U:=D^+_U(S)\cup D^-_U(S)$. If $q\in D_U$, then $q$ is a limit of points of $W\cap\{s>0\}\subseteq D^+_U(S)\cap\{s>0\}$, so $s(q)\ge0$; for $s(q)=0$ we would have $q\in S\subseteq W$ (every point of $S$ has a neighbourhood contained in $D_U$, since near a point $(0,\sigma_0)$ with $|\sigma_0|<R$ the strict inequality of step 1.1 fails for all sufficiently nearby points on both sides of the slice), a contradiction, so $s(q)>0$, and then $q\notin D^-_U$ while $q\in D_U$, hence $q\in D^+_U(S)\cap\{s>0\}$, which is open in $U$ by step 3.1 and therefore contained in $\mathrm{int}_U(D_U)=W$: a contradiction. So $q\notin D_U(S)$; since $q\notin D^+_U(S)$ by $q\notin D_U$, there is a past-inextendible causal curve in $U$ through $q$ avoiding $S$; here $s(q)\ge0$. Prepending that curve to the past part of $\gamma$ at $q$ yields, for every $t_0\in J$, a past-inextendible causal curve in $U$ through $\gamma(t_0)$ (the concatenation of a past-inextendible curve ending at $q$ with the segment of $\gamma$ from $q$ to $\gamma(t_0)$, reversed) that avoids $S$; but $\gamma(t_0)\in D^+_U(S)$, so every such curve must meet $S$: contradiction. Hence a curve $\gamma\subseteq W$ inextendible in $W$ and avoiding $S$ with $s\circ\gamma>0$ does not exist; by the time-reversed argument the same holds with $s\circ\gamma<0$. [step 3.1, step 2.2, L1, L6, given]

5.1 (Clauses (b) and (c).) Clause (b) is steps 2.1 and 2.2; for clause (c), step 2.1 gives $Q\subseteq W$ and step 4.1 shows that every causal curve in $W$ inextendible in $W$ meets $S$; it meets $S$ at most once because $s$ is a temporal function [L1], so $S$ is a Cauchy set of $(W,g|_W)$. Global hyperbolicity of $(W,g|_W)$ follows from [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]. [step 2.1, step 4.1, L1] ∎

## Remarks

- **The role of the cone bounds.** The single constant $K$ of (C2) controls the spatial displacement of any causal curve per unit of $s$; this is what makes the collar $Q$ depend only on $K$, and it is also what forces every witness curve of a non-captured point to escape through the spatial boundary $|\sigma|=R$ rather than converge inside $U$. The characteristic initial-value applications only need (C2), not a two-sided cone comparison.

- **Interior versus closed domain of dependence.** $D^+_U(S)$ itself is not open: it meets the slice $S$ along $\{s=0\}$, below which its points are excluded by clause (a). The argument therefore passes to $W=\mathrm{int}_U(D^+_U\cup D^-_U)$, which contains the open collar $Q$ around $S$; this is the form of the local Cauchy neighbourhood used downstream.

- **Use.** This is the local Cauchy-neighbourhood theorem used to place initial data in a globally hyperbolic neighbourhood of a spacelike acausal slice; it is the local form of the implication of [[thm-gr-cauchy-surface-implies-globally-hyperbolic]].
