---
id: lem-gr-partial-cauchy-development
kind: lemma
title: "The causal domain of dependence of a partial Cauchy hypersurface is an open causally convex manifold on which the hypersurface is Cauchy"
status: draft
origin: session
domain: mathematics
dependency_level: 20
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, lem-gr-basic-limit-curve, thm-gr-auxiliary-complete-riemannian-metric, lem-gr-dominating-cone-bounds, lem-gr-push-up-rule, lem-gr-chronology-openness, lem-gr-causal-curve-calculus, lem-gr-maximal-geodesics-and-extension, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, lem-gr-joint-exponential-diffeomorphism, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, def-continuity-real, def-interval]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-basic-limit-curve: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Definition 3.1 and Remark 3.2 (domains of dependence for causal and timelike curves), Proposition 3.10 and its proof (closedness of the timelike domains and equality with the closures of the causal domains for closed S; overbars must be retained), Lemma 3.8 (S equals D+ cap D- for achronal S), Corollary 3.36 and Proposition 3.43 (openness and causal convexity of the domain of dependence of a partial Cauchy hypersurface), Definitions 2.130-2.132 and Corollary 2.145 (edge and causal convexity of an acausal edgeless set), printed pp. 76, 84-98"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): domains of dependence of achronal hypersurfaces, Corollary 2.9.8 with the transversality remark, Theorem 2.9.9 and Lemma 2.9.11, printed pp. 45-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Let $(W,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let $S\subseteq W$ be a closed acausal edgeless embedded topological hypersurface of codimension one. Here acausality forbids causal relations between distinct points of $S$ as in [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]; **edgeless** means that no $s\in S$ has the following property: every open neighborhood $U$ of $s$ admits $a\in I^-_U(s)$, $b\in I^+_U(s)$ and a timelike curve in $U$ from $a$ to $b$ avoiding $S$. All curves and inextendibility use [[def-gr-causal-curves-and-reachability]], so an inextendible end has no point limit in the specified ambient manifold. Define the ambient causal domains by
$$D^+(S)=\{p\in W:\text{every past-inextendible causal curve in }W\text{ through }p\text{ meets }S\},$$
$$D^-(S)=\{p\in W:\text{every future-inextendible causal curve in }W\text{ through }p\text{ meets }S\},\qquad D(S)=D^+(S)\cup D^-(S),$$
as in [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]. Then:

**(a)** $D(S)$ is open, contains $S$, and $D^\pm(S)\setminus S\subseteq I^\pm(S)$.

**(b)** Every causal curve in $W$ with endpoints in $D(S)$ lies in $D(S)$.

**(c)** Every causal curve in the induced open submanifold $D(S)$ which is inextendible there meets $S$ at exactly one parameter value. No smoothness or spacelikeness of the topological hypersurface is required.

## Facts & Assumptions

**Given:** The stated choice axioms, $(W,g,N)$, $S$, and its ambient causal domains.

[A1] Countable Choice and Dependent Choice are assumed. Countable choices select a sequence of avoiding curves, and the complete-metric and limit-curve suppliers retain their declared choice assumptions. No arbitrary-index choice is used.

[L1] Temporal coordinate balls exist with a finite upper causal-speed bound, future timelike vertical fibers, and a narrower constant cone whose timelike straight segments are $g$-timelike ([[lem-gr-dominating-cone-bounds]]). Chronology is open and satisfies push-up in both directions ([[lem-gr-chronology-openness]], [[lem-gr-push-up-rule]]).

[L2] A complete auxiliary Riemannian metric with compact closed bounded balls exists, and sequences of its arclength-parametrized one-sided inextendible causal curves whose starting points converge have inextendible causal subsequential limits uniformly on compact parameter intervals ([[thm-gr-auxiliary-complete-riemannian-metric]], [[lem-gr-basic-limit-curve]]). The dual limit statement holds for past curves.

[L3] Causal curves admit finite concatenation and restrictions; smooth increasing diffeomorphisms between parameter intervals preserve the curve class ([[lem-gr-causal-curve-calculus]]). A causal curve converging at a finite parameter end has an admissible causal endpoint extension; maximal timelike geodesics have no point limit at their maximal ends ([[lem-gr-maximal-geodesics-and-extension]]). Convex normal neighborhoods have closed local causal relations, smoothly represented by inverse exponential cones ([[thm-gr-convex-normal-neighborhoods]], [[thm-gr-normal-neighborhood-causal-cone]], [[lem-gr-joint-exponential-diffeomorphism]]).

## Proof

**Proof technique:** direct; the topological crossing argument is proved before applying the limit-curve supplier.

1.1 Fix $s\in S$. There is no timelike loop through $s$: if $s\ll s$, openness gives $s\ll s'$ for all $s'\in S$ sufficiently near $s$, and the topological hypersurface has points $s'\ne s$ arbitrarily near $s$, contrary to acausality. Thus no two points of $S$, equal or distinct, are chronologically related. In particular $I^+(S)$ and $I^-(S)$ are disjoint by push-up. [given, L1]

1.2 We explain the arclength use in [L2]. For an avoiding one-sided causal curve, restrict to the half ending at the prescribed point. Its $h$-speed is locally integrable and positive almost everywhere, so its accumulated $h$-length is continuous strictly increasing. The inverse parameter gives a curve which is $1$-Lipschitz for $d_h$, because distance is at most original subcurve length; hence it is locally Lipschitz in charts. To verify the tangent and the arclength identity without assuming absolute continuity of the inverse parameter, let $\lambda(t)$ denote accumulated length. At almost every original parameter, both the chart curve and $\lambda$ are differentiable and $\lambda'(t)=\sqrt{h(\gamma'(t),\gamma'(t))}>0$. Their exceptional set has measure zero. An absolutely continuous real function sends a measure-zero set to a measure-zero set: cover that set by intervals of arbitrarily small total length and apply the defining AC modulus to bound the total lengths of their image intervals. Thus its image under $\lambda$ is null, locally and hence on a countable exhaustion. At each remaining new parameter $u=\lambda(t)$, the inverse difference quotient is $1/\lambda'(t)$, and the chain difference quotient of the reparametrized chart curve is $\gamma'(t)/\lambda'(t)$. It is nonzero future causal and has $h$-norm one. This proves both admissibility and $h$-arclength parametrization. If the available one-sided length were finite, the $1$-Lipschitz curve would be Cauchy at that end and completeness would give a point limit, contrary to inextendibility. Thus these reparametrizations have full half-line domains, as required by [L2]. This argument changes parameters and never asserts an extension preserving an arbitrary original parameter. [A1, L2, L3, given, construct]

2.1 Edgelessness supplies an open neighborhood $O$ of $s$ in which every timelike curve from $I^-_O(s)$ to $I^+_O(s)$ meets $S$. Take a temporal coordinate box $B=(-a,a)\times B_\rho$ with closure in $O$, centered at $s$. First choose $a>0$ small, and then $\rho>0$ small enough that all points $(-a,z)$ and $(a,z)$ belong respectively to $I^-_O(s)$ and $I^+_O(s)$; the narrower constant cone of [L1] ensures this. Every vertical segment between these endpoints therefore meets $S$, and has only one meeting by step 1.1. Write it $(f(z),z)$. The same narrower cone implies $|f(z)-f(z')|\le C|z-z'|$: otherwise the two graph points are joined by a timelike straight segment in $O$, contrary to step 1.1. Consequently $S\cap B$ is exactly a continuous Lipschitz graph; the sign of $t-f(z)$ separates the box into two open sides. A point above the graph belongs to $I^+(S)$ by its vertical segment; a point below belongs to $I^-(S)$. [step 1.1, given, L1, construct]

3.1 A future causal segment starting at $s$ and remaining in this box cannot have an endpoint $q$ below the graph: the vertical segment from $q$ to the graph point $r$ gives $s\le q\ll r$, so $s\ll r$, excluded by step 1.1. If $q\in S$ and $q\ne s$, acausality excludes it. If $q=s$ but the segment is nondegenerate, choose an intermediate point $q'$ different from $s$ sufficiently near its start; it cannot lie below the graph or on $S$, so lies above it. Its vertical predecessor $r'\in S$ satisfies $r'\ll q'\le s$, again excluded by step 1.1. The same argument applies even if the rest of the loop leaves the box. Thus no nondegenerate causal loop passes through $S$, no causal curve meets $S$ twice, and every sufficiently short future segment from $S$ lies strictly above its local graph. Reversing time puts short past segments strictly below. Every causal curve through $s$ therefore crosses its local graph, and uniform approximations of a sufficiently short compact crossing segment also meet that graph by continuity of $t-f(z)$ and the intermediate value theorem. [step 1.1, step 2.1, L1, given]

4.1 If $q\in J^+(S)\setminus S$, take a causal curve $s\to q$ and a point $r$ on a sufficiently short initial segment. Step 3.1 puts $r$ above the graph. Its vertical predecessor $u\in S$ gives $u\ll r\le q$, hence $q\in I^+(S)$. Dually $J^-(S)\setminus S\subset I^-(S)$. For $p\in D^+(S)\setminus S$, the past half of the maximal timelike geodesic through $p$ is past-inextendible by [L3], and hence meets $S$; its timelike segment from that meeting to $p$ puts $p\in I^+(S)$. The dual argument proves the past-side inclusion. Also $S\subset D^+(S)\cap D^-(S)$ immediately. [step 3.1, L1, L3, given]

4.2 Let $p\in D^+(S)\setminus S$. If $p$ were not interior to $D^+(S)$, choose $p_k\notin D^+(S)$ converging to $p$ and past-inextendible curves ending at $p_k$ and avoiding $S$. Step 1.2 and [L2] give a past-inextendible causal limit $\alpha:(-\infty,0]\to W$ with $\alpha(0)=p$. It meets $S$ at a negative parameter, by $p\in D^+(S)$ and $p\notin S$. By step 3.1 a short compact segment around that meeting crosses the local graph strictly. Uniform convergence on that segment forces the avoiding approximants to meet $S$, contradiction. Therefore $D^+(S)\setminus S$ is open; time reversal gives the dual result. [step 3.1, step 1.2, A1, L2, given, choose, contradiction]

5.1 Let $s\in S$. If $s$ were not interior to $D(S)$, take $p_k\notin D(S)$ converging to $s$. At each $p_k$ choose a past-inextendible avoiding half and a future-inextendible avoiding half, concatenate them, and use step 1.2 to parametrize the two halves by signed arclength with $p_k$ at zero. Apply [L2] first to their past halves and then to the future halves of that subsequence. The two limits join at $s$ to an inextendible causal curve, and the common subsequence converges uniformly on each compact interval of the joined domain. Its short crossing segment through $s$ from step 3.1 forces the avoiding curves to meet $S$, contradiction. Thus $S\subset\operatorname{Int}D(S)$; together with step 4.2 and step 4.1 this proves (a). [step 3.1, step 1.2, step 4.2, A1, L2, L3, choose, contradiction]

5.2 A causal segment whose endpoints belong to $D^+(S)$ stays in $D^+(S)$. Indeed, if an intermediate $r$ were outside $D^+(S)$, a past-inextendible avoiding half ending at $r$ concatenated with the remaining segment $r\to q\in D^+(S)$ forces that remaining segment to meet $S$ at $u$. The initial endpoint $p\in D^+(S)$ belongs to $S\cup I^+(S)$ by step 4.1, whereas $p\le u$ puts $p\in S\cup I^-(S)$ by the dual of that step. Disjointness forces $p\in S$, and then the nondegenerate segment $p\to r\to u$ meets $S$ twice, excluded by step 3.1. This is a contradiction. The time reverse proves causal convexity of $D^-(S)$. [step 1.1, step 3.1, step 4.1, L3, given, contradiction]

6.1 For a segment $p\to q$ in the remaining mixed case $p\in D^-(S)$, $q\in D^+(S)$, an intermediate $r\notin D(S)$ has both past- and future-inextendible avoiding halves. Concatenating the past half with $r\to q$ forces a meeting of $S$ strictly after $r$, and concatenating $p\to r$ with the future half forces a meeting strictly before $r$. This contradicts step 3.1. The opposite mixed case $p\in D^+(S)$, $q\in D^-(S)$ is impossible for a nondegenerate segment: step 4.1 yields $p\in S\cup I^+(S)$, $q\in S\cup I^-(S)$; if either endpoint is outside $S$, push-up gives a chronological relation between points of $S$, excluded by step 1.1, and if both are in $S$, step 3.1 excludes the segment. Along with step 5.2 this proves (b). [step 1.1, step 3.1, step 4.1, step 5.2, L1, L3, contradiction]

6.2 Let $\gamma:I\to D(S)$ be inextendible there and avoid $S$. Step 4.1 and connectedness of its image put it entirely in one of the disjoint open sets $I^+(S)$ and $I^-(S)$. Take the latter case; the other reverses time. Then every value belongs to $D^-(S)$. Fix $t_0\in I$. If the future half from $t_0$ has no point limit in $W$, that half is future-inextendible in $W$ and avoids $S$, contradicting $\gamma(t_0)\in D^-(S)$. Therefore the future end converges to some $y\in W$. If $y\in S$, then $y\in D(S)$ contradicts inextendibility in $D(S)$. [step 1.1, step 4.1, step 5.1, given, contradiction]

7.1 Suppose $y\notin S$ and $y\notin D^-(S)$. There is a future-inextendible avoiding half starting at $y$. A causal closed segment from $\gamma(t_0)$ to $y$ can be obtained as follows: use a smooth increasing diffeomorphism to reparametrize the future half of $\gamma$ to a finite interval with excluded upper end; this preserves local absolute continuity on its interior, and the endpoint-extension assertion of [L3] adjoins its limit $y$ as a causal endpoint. The resulting closed segment avoids $S$, including its endpoint. Concatenate it with the avoiding half from $y$. It is future-inextendible in $W$, avoids $S$, and starts at $\gamma(t_0)\in D^-(S)$, contradiction. Hence $y\in D^-(S)\subset D(S)$, which again contradicts inextendibility of $\gamma$ in the open submanifold. Every such curve therefore meets $S$, and step 3.1 supplies uniqueness of the parameter visit. This proves (c). [step 3.1, step 6.2, L3, given, construct, contradiction] ∎

## Remarks

Causal $D(S)$ is open but need not be closed. This proof uses neither timelike-domain closedness nor a quoted horizon theorem. It preserves the topological hypersurface scope and uses no global causal assumption on $W$.
