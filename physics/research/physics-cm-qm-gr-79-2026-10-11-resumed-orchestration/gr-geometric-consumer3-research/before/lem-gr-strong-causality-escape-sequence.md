---
id: lem-gr-strong-causality-escape-sequence
kind: lemma
title: "Failure of strong causality yields causal curves escaping one fixed neighbourhood with endpoints accumulating at the point"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, lem-gr-dominating-cone-bounds, lem-gr-causal-curve-calculus, def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, lem-timelike-cone-has-two-convex-components, lem-gr-observer-pairing-with-future-causal-vectors, def-causal-classification-of-lorentz-vectors, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, def-interval, lem-coordinate-balls-form-a-basis-of-a-topological-manifold]
dependency_roles:
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  lem-coordinate-balls-form-a-basis-of-a-topological-manifold: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 1.35 (the local basis of causally convex sets with V_{k+1} causally convex in V_k, equations (1.6)-(1.7) and proof, printed pp. 24-25); Theorem 2.69 (failure of strong causality yields an inextendible continuous causal curve through the point) with proof, printed pp. 54-55"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): proof of Theorem 2.9.9 (the sequence of causal curves exiting and re-entering the h-balls, printed pp. 48-50) and Definition 2.2.7 with Proposition 2.2.3 (elementary regions) printed pp. 8-13"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $p\in M$. Suppose that strong
causality fails at $p$ ([[def-gr-causal-conditions-and-global-hyperbolicity]]
clause (b)): there is an open neighborhood $U$ of $p$ such that for every
open $V$ with $p\in V\subseteq U$ there are a future causal curve
([[def-gr-causal-curves-and-reachability]]) $\sigma$ and parameters $s<t$ in
its domain with
$$\sigma(s),\sigma(t)\in V,\qquad \sigma([s,t])\not\subseteq V .$$
Then there exist an open set $W$ with $p\in W$ and $\overline W\subseteq U$
and, for every $k\ge2$, points $x_k,y_k\in W$ with $x_k\to p$ and
$y_k\to p$, together with future causal curves $\sigma_k:[0,1]\to M$ with
$\sigma_k(0)=x_k$, $\sigma_k(1)=y_k$ and
$$\sigma_k([0,1])\not\subseteq W .$$
No choice principle is used.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a point $p\in M$ and an open $U\ni p$ witnessing the failure of strong causality at $p$ as in the statement.

[L1] Adapted chart and cone domination: there are a chart $(U_0,x)$ around $p$ with $x(p)=0$, $U_0\subseteq U$, and a constant $K\ge1$ such that $n=N/\sqrt{-g(N,N)}=\partial/\partial x^0$ on $U_0$, $g_{00}\equiv-1$, and every future causal $v\in T_qM$, $q\in U_0$, satisfies $|v^i|\le Kv^0$ ($i=1,2,3$), where $v^a=dx^a(v)$ and $|v|_{\mathrm e}=(\sum_a(v^a)^2)^{1/2}$; moreover every future causal curve $\gamma:I\to U_0$ has $x^0(\gamma(s))<x^0(\gamma(t))$ for $s<t$ ([[lem-gr-dominating-cone-bounds]] clauses (a)-(c), [[def-gr-observer-and-rest-space]]).

[L2] The set $(U_0,g_\varepsilon)$ with the smooth metric $g_\varepsilon:=-(1+\varepsilon)(dx^0)^2+\sum_{i=1}^3(dx^i)^2$ of constant chart coefficients is a time-oriented smooth Lorentzian four-manifold with time orientation given by the future timelike field $\partial_0$; its chronological relation $\ll_\varepsilon$, its sets $I^\pm_\varepsilon$ and its causal curves are those of the general definitions applied to $(U_0,g_\varepsilon,\partial_0)$ ([[def-gr-smooth-lorentzian-objects]], [[def-gr-causal-curves-and-reachability]]).

[L3] Relations on $(U_0,g_\varepsilon)$: $\ll_\varepsilon$ is transitive and $I^+_\varepsilon(r)\cap J^-_\varepsilon(q)$-type intersections of open sets $I^\pm_\varepsilon$ are open; concatenations of finitely many future $g_\varepsilon$-timelike curves are future $g_\varepsilon$-timelike ([[lem-gr-causal-curve-calculus]] clauses (d) and (f), [[def-gr-causal-curves-and-reachability]]).

[L4] Sums and limits of future causal vectors: if $v,w$ are future causal (respectively future timelike) then $v+w$ is future timelike; limits of future causal vectors are future causal or zero; a vector orthogonal to a timelike vector is spacelike or zero ([[lem-timelike-cone-has-two-convex-components]], [[lem-gr-observer-pairing-with-future-causal-vectors]], [[def-causal-classification-of-lorentz-vectors]]).

[L5] Coordinate balls form a basis of the topology: for every open $O\ni p$ there is $\eta>0$ with $x^{-1}(B_\eta)\subseteq O$ ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L6] A causal curve is not constant on a nondegenerate parameter interval; in particular for $s<t$ the restriction of a future causal curve to $[s,t]$ has a nonconstant image ([[def-gr-causal-curves-and-reachability]] clause (b)).

## Proof

**Proof technique:** direct.

1.1 (The narrowing metric.) Fix the adapted chart $(U_0,x)$ and the constant $K$ of [L1]. Define $g_\varepsilon$ on $U_0$ with $\varepsilon:=3K^2$. For every $q\in U_0$ and every nonzero future $g$-causal $v\in T_qM$ one has $(v^0)^2>0$ and $\sum_{i=1}^3(v^i)^2\le3K^2(v^0)^2$, so $$g_\varepsilon(v,v)=-(1+\varepsilon)(v^0)^2+\sum_{i=1}^3(v^i)^2\le(3K^2-1-\varepsilon)(v^0)^2=-(v^0)^2<0,$$ and $v^0>0$: thus $v$ is future $g_\varepsilon$-timelike. Consequently every future $g$-causal curve whose velocity is nonzero almost everywhere is a future $g_\varepsilon$-timelike curve, and the same holds on every subinterval on which the velocity is nonzero almost everywhere. [L1, L2, L4, algebra]

1.2 (The diamonds.) Choose numbers $\delta_k>0$ with $\delta_k\downarrow0$ so small that the points $r_k:=x^{-1}(-\delta_k,0)$ and $q_k:=x^{-1}(\delta_k,0)$, $k\ge1$, and the coordinate segments joining them lie in $U_0$; the $x^0$-axis is an integral curve of the future timelike field $\partial_0$ with $g_\varepsilon(\partial_0,\partial_0)=-(1+\varepsilon)<0$, so the segment from $r_k$ to $q_k$ is a future $g_\varepsilon$-timelike curve and $q_k\in I^+_\varepsilon(r_k)$. Define $V_k:=I^+_\varepsilon(r_k)\cap I^-_\varepsilon(q_k)$, an open subset of $U_0$ containing $p$. Because $r_k\ll_\varepsilon r_{k+1}$ and $q_{k+1}\ll_\varepsilon q_k$, transitivity gives $V_{k+1}\subseteq V_k$. Moreover $\{V_k\}$ is a local basis at $p$: for every $z\in V_k$ the $g_\varepsilon$-causal curves from $r_k$ to $z$ and from $z$ to $q_k$ have strictly increasing $x^0$-coordinate and satisfy $|dx^i|\le\sqrt{1+\varepsilon}\,dx^0$ along their velocities, so $|x^0(z)|<\delta_k$ and $|x^i(z)|\le\sqrt{1+\varepsilon}\cdot2\delta_k$; hence $V_k\subseteq x^{-1}(B_{C\delta_k})$ with $C:=2\sqrt{1+\varepsilon}+1$, and $V_k\subseteq O$ for every open $O\ni p$ once $C\delta_k$ is below the radius of a coordinate ball in $O$ by [L5]. [L1, L2, L3, L4, L5, construct]

1.3 (The witnesses.) For each $k\ge1$ apply the failure hypothesis to the open set $V_k$ with $p\in V_k\subseteq U$: there are a future causal curve $\sigma_k$ and parameters $s_k<t_k$ in its domain with $\sigma_k(s_k),\sigma_k(t_k)\in V_k$ and $\sigma_k([s_k,t_k])\not\subseteq V_k$. Replace $\sigma_k$ by the reparametrized restriction $\sigma_k\circ\varphi_k$ on $[0,1]$, where $\varphi_k:[0,1]\to[s_k,t_k]$ is the increasing affine parametrization; then $\sigma_k(0),\sigma_k(1)\in V_k$ and $\sigma_k([0,1])\not\subseteq V_k$. [given, L1, L6, construct]

2.1 (Relative causal convexity.) $V_{k+1}$ is causally convex in $V_k$: if $\eta:[0,1]\to V_k$ is a future $g$-causal curve with $\eta(0),\eta(1)\in V_{k+1}$, then $\eta([0,1])\subseteq V_{k+1}$. Indeed, fix $u\in[0,1]$ and $z:=\eta(u)$; since $\eta(0)\in V_{k+1}$, there is a future $g_\varepsilon$-timelike curve from $r_{k+1}$ to $\eta(0)$, and the restriction $\eta|_{[0,u]}$ is future $g$-causal with $g$-causal velocity almost everywhere, hence future $g_\varepsilon$-timelike almost everywhere by step 1.1; concatenating gives a future $g_\varepsilon$-timelike curve from $r_{k+1}$ to $z$ inside $U_0$, so $z\in I^+_\varepsilon(r_{k+1})$. Likewise concatenating $\eta|_{[u,1]}$ with a future $g_\varepsilon$-timelike curve from $\eta(1)$ to $q_{k+1}$ (which exists because $\eta(1)\in V_{k+1}$) gives $z\in I^-_\varepsilon(q_{k+1})$. Hence $z\in V_{k+1}$. [step 1.1, step 1.2, L2, L3, given]

3.1 (Every witness escapes each earlier diamond.) Claim: for all $j<k$, $\sigma_k([0,1])\not\subseteq V_j$. First, $\sigma_k([0,1])\not\subseteq V_{k-1}$: otherwise the whole curve $\eta:=\sigma_k$ is a future $g$-causal curve contained in $V_{k-1}$ with endpoints in $V_k$, and step 2.1 (with $k-1$ in place of $k$) gives $\sigma_k([0,1])\subseteq V_k$, contradicting step 1.3. Inductively, if $\sigma_k([0,1])\subseteq V_{j}$ for some $1\le j\le k-2$, then applying step 2.1 with $j+1$ in place of $k$ to the curve $\sigma_k$ (whose endpoints lie in $V_k\subseteq V_{j+1}$) gives $\sigma_k([0,1])\subseteq V_{j+1}$: descending induction from the already excluded case $j+1=k-1$ yields that no such $j$ exists. In particular, with $W:=V_1$ one has $\sigma_k([0,1])\not\subseteq W$ for every $k\ge2$. [step 2.1, step 1.3, algebra]

4.1 (Conclusions.) Take $W:=V_1$; it is open, contains $p$, and $\overline W\subseteq U$ after shrinking $\delta_1$ so that the coordinate ball of radius $C\delta_1$ around $0$ lies inside $U_0$ (possible by [L5] and $U_0\subseteq U$; $W$ is contained in that ball by step 1.2). For $k\ge2$ set $x_k:=\sigma_k(0)$, $y_k:=\sigma_k(1)\in V_k$. Since $\{V_k\}$ is a local basis at $p$ and $V_k\subseteq x^{-1}(B_{C\delta_k})$ with $C\delta_k\to0$, we have $x_k\to p$ and $y_k\to p$. Together with step 3.1 this proves the statement. [step 1.2, step 3.1, L5] ∎

## Remarks

- **Where strong causality is used.** Only through the failure hypothesis, and precisely in the following form: every member of the nested basis must admit a witness. The relative convexity of step 2.1 is what converts "the witness escapes its own $V_k$" into "the witness escapes the fixed $V_1$"; without it a sequence of shallow witnesses contained in $V_1$ could not be excluded.

- **Use.** The escaping sequence is the input to the limit curve argument in [[thm-gr-cauchy-surface-implies-globally-hyperbolic]], where a Cauchy set makes both the bounded-length alternative (periodic extension) and the unbounded-length alternative (crossing of the Cauchy set and the push-up rule) contradictory.

- **Consistency in flat space.** In Minkowski space shallow witnesses do exist for every coordinate ball, but there the metric is strongly causal, so the hypothesis of this lemma is not met for any $p$; the lemma asserts nothing in that case. This is why the witness must escape a *fixed* neighbourhood and not merely the shrinking ones.
