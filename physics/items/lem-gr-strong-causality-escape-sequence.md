---
id: lem-gr-strong-causality-escape-sequence
kind: lemma
title: "Failure of strong causality yields causal curves escaping one fixed neighbourhood with endpoints accumulating at the point"
status: published
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, lem-gr-dominating-cone-bounds, lem-gr-causal-curve-calculus, def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, lem-timelike-cone-has-two-convex-components, lem-gr-observer-pairing-with-future-causal-vectors, def-causal-classification-of-lorentz-vectors, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, def-interval, lem-coordinate-balls-form-a-basis-of-a-topological-manifold]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
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
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Countable Choice selects the sequence of escape witnesses; the stated AC curve-calculus suppliers require both premises. Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
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
No additional choice is used beyond these stated premises.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a point $p\in M$ and an open $U\ni p$ witnessing the failure of strong causality at $p$ as in the statement.

[L1] Adapted chart and cone domination: there are a chart $(U_0,x)$ around $p$ with $x(p)=0$, $U_0\subseteq U$, and a constant $K\ge1$ such that $n=N/\sqrt{-g(N,N)}=\partial/\partial x^0$ on $U_0$, $g_{00}\equiv-1$, and every future causal $v\in T_qM$, $q\in U_0$, satisfies $|v^i|\le Kv^0$ ($i=1,2,3$), where $v^a=dx^a(v)$ and $|v|_{\mathrm e}=(\sum_a(v^a)^2)^{1/2}$; moreover every future causal curve $\gamma:I\to U_0$ has $x^0(\gamma(s))<x^0(\gamma(t))$ for $s<t$ ([[lem-gr-dominating-cone-bounds]] clauses (a)-(c), [[def-gr-observer-and-rest-space]]).

[L2] The set $(U_0,g_\varepsilon)$ with the smooth metric $g_\varepsilon:=-(1+\varepsilon)(dx^0)^2+\sum_{i=1}^3(dx^i)^2$ of constant chart coefficients is a time-oriented smooth Lorentzian four-manifold with time orientation given by the future timelike field $\partial_0$; its chronological relation $\ll_\varepsilon$, its sets $I^\pm_\varepsilon$ and its causal curves are those of the general definitions applied to $(U_0,g_\varepsilon,\partial_0)$ ([[def-gr-smooth-lorentzian-objects]], [[def-gr-causal-curves-and-reachability]]).

[L3] Finite concatenations of future timelike curves are future timelike; hence the chronological relation is transitive ([[lem-gr-causal-curve-calculus]] clause (d), [[def-gr-causal-curves-and-reachability]]). For the constant-coordinate flat metric here, the chronological diamonds used below are open by their explicit strict coordinate inequalities. The general AC integral computations use the declared Countable and Dependent Choice premises of the supplied curve calculus.

[L4] Future causal cones are convex and closed after adding zero; sums of future causal vectors are future causal, while a sum is timelike if one summand is timelike. A nonzero causal vector cannot be orthogonal to a timelike vector ([[lem-timelike-cone-has-two-convex-components]], [[lem-gr-observer-pairing-with-future-causal-vectors]], [[def-causal-classification-of-lorentz-vectors]]).

[L5] Coordinate balls form a basis of the topology: for every open $O\ni p$ there is $\eta>0$ with $x^{-1}(B_\eta)\subseteq O$ ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L6] A causal curve is not constant on a nondegenerate parameter interval; in particular for $s<t$ the restriction of a future causal curve to $[s,t]$ has a nonconstant image ([[def-gr-causal-curves-and-reachability]] clause (b)).

## Proof

**Proof technique:** direct.

1.1 (A wider flat metric.) Fix the adapted chart $(U_0,x)$ and the constant $K$ of [L1]. Define $g_\varepsilon$ on $U_0$ with $\varepsilon:=3K^2$. For every $q\in U_0$ and every nonzero future $g$-causal $v\in T_qM$ one has $(v^0)^2>0$ and $\sum_{i=1}^3(v^i)^2\le3K^2(v^0)^2$, so $$g_\varepsilon(v,v)=-(1+\varepsilon)(v^0)^2+\sum_{i=1}^3(v^i)^2\le(3K^2-1-\varepsilon)(v^0)^2=-(v^0)^2<0,$$ and $v^0>0$: thus $v$ is future $g_\varepsilon$-timelike. Consequently every future $g$-causal curve whose velocity is nonzero almost everywhere is a future $g_\varepsilon$-timelike curve, and the same holds on every subinterval on which the velocity is nonzero almost everywhere. [L1, L2, L4, algebra]

1.2 (Explicit precompact diamonds.) Put $b_\varepsilon=\sqrt{1+\varepsilon}$ and choose $r>0$ so the closed coordinate ball $\overline{B_r(0)}$ lies in $x(U_0)$. Set $C=\sqrt{1+b_\varepsilon^2}$, fix $0<\delta_1<r/(2C)$, and define $\delta_k=\delta_1/k$, $r_k=x^{-1}(-\delta_k,0)$, $q_k=x^{-1}(\delta_k,0)$ and $V_k=x^{-1}(\{(\tau,z):|\tau|+|z|/b_\varepsilon<\delta_k\})$. Each $V_k$ is open, contains $p$, is contained in $x^{-1}(B_{C\delta_k})$, and has closure in the compact coordinate ball $x^{-1}(\overline{B_{C\delta_1}})\subset U_0\subset U$. They form a nested basis at $p$. These are exactly the flat chronological diamonds $I^+_\varepsilon(r_k)\cap I^-_\varepsilon(q_k)$ in $U_0$: the displayed strict inequalities yield the two straight future flat-timelike segments inside the coordinate ball; conversely, integrating a future flat-timelike velocity using the stated AC calculus gives $\Delta\tau>|\Delta z|/b_\varepsilon$ on a nondegenerate segment, which gives those inequalities for any point in the chronological intersection. [L1, L2, L3, L5, given, construct, algebra]

1.3 (Countable selection of witnesses.) For each $k\ge1$, the failure hypothesis on $V_k$ gives a nonempty set of witness tuples $(\sigma,s,t)$ with $s<t$, endpoints in $V_k$ and image of the restricted segment not contained in $V_k$. Countable Choice selects one tuple for every $k$. Restrict and reparametrize by the increasing affine map $u\mapsto s_k+u(t_k-s_k)$ to obtain a future causal curve $\sigma_k:[0,1]\to M$ whose endpoints are in $V_k$ and whose image is not contained in $V_k$. The affine map preserves AC directly by rescaling its defining modulus and preserves the full-measure velocity condition by a positive constant factor. This is the exact use of Countable Choice; no canonical witnesses were supplied by the failure hypothesis. [given, L6, construct]

2.1 (Causal convexity relative to the chart.) For every $k$, $V_k$ is causally convex relative to $U_0$. Indeed, let $\lambda:[0,1]\to U_0$ be a future $g$-causal curve with endpoints in $V_k$. Step 1.1 makes it future $g_\varepsilon$-timelike. For each $u\in[0,1]$, concatenate the flat-timelike segment from $r_k$ to $\lambda(0)$, the restriction of $\lambda$ up to $u$, its restriction from $u$ onward, and the segment from $\lambda(1)$ to $q_k$ as appropriate. At $u=0$ or $1$ omit the degenerate restriction. Finite timelike concatenation gives $r_k\ll_\varepsilon\lambda(u)\ll_\varepsilon q_k$, so step 1.2 places $\lambda(u)$ in $V_k$. This proves the claimed relative convexity, and therefore also convexity of each smaller diamond relative to every larger one. [step 1.1, step 1.2, L2, L3, given]

3.1 (Every witness escapes the fixed diamond.) If $\sigma_k([0,1])\subseteq V_1\subset U_0$, its endpoints in $V_k$ and step 2.1 would force its whole image into $V_k$, contradicting step 1.3. Thus $\sigma_k([0,1])\not\subseteq V_1$ for every $k\ge2$. [step 2.1, step 1.3, algebra]

4.1 (Conclusions.) Take $W=V_1$, whose closure is contained in $U$ by step 1.2. For $k\ge2$ put $x_k=\sigma_k(0)$ and $y_k=\sigma_k(1)$. They are in $V_k\subset W$, and their coordinate norms are at most $C\delta_k\to0$, so both sequences converge to $p$. Step 3.1 proves every selected curve escapes $W$, as required. [step 1.2, step 1.3, step 3.1, L5] ∎

## Remarks

- **Where strong causality and choice are used.** Only through the failure hypothesis, and precisely in the following form: every member of the nested basis must admit a witness. Selecting one witness for every member uses Countable Choice; the AC monotonicity and integral bounds use the declared calculus premises. The relative convexity of step 2.1 is what converts "the witness escapes its own $V_k$" into "the witness escapes the fixed $V_1$"; without it a sequence of shallow witnesses contained in $V_1$ could not be excluded.

- **Use.** The escaping sequence is the input to the limit curve argument in [[thm-gr-cauchy-surface-implies-globally-hyperbolic]], where a Cauchy set makes both the bounded-length alternative (periodic extension) and the unbounded-length alternative (crossing of the Cauchy set and the push-up rule) contradictory.

- **Consistency in flat space.** In Minkowski space shallow witnesses do exist for every coordinate ball, but there the metric is strongly causal, so the hypothesis of this lemma is not met for any $p$; the lemma asserts nothing in that case. This is why the witness must escape a *fixed* neighbourhood and not merely the shrinking ones.
