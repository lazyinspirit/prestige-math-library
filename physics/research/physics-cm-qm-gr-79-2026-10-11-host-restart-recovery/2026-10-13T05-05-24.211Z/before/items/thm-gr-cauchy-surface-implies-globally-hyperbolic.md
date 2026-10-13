---
id: thm-gr-cauchy-surface-implies-globally-hyperbolic
kind: theorem
title: "The existence of a Cauchy set implies strong causality and compact causal diamonds"
status: draft
origin: session
domain: mathematics
dependency_level: 22
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: case-analysis
deps: [def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-cauchy-set-topology-and-graph, lem-gr-strong-causality-escape-sequence, lem-gr-push-up-rule, thm-gr-limit-curve-two-endpoints, lem-gr-basic-limit-curve, thm-gr-auxiliary-complete-riemannian-metric, lem-gr-maximal-geodesics-and-extension, lem-gr-causal-curve-conventions, lem-gr-chronology-openness, lem-gr-causal-curve-calculus, def-countable-choice, def-dependent-choice, thm-metric-compactness-equivalences, thm-the-riemannian-distance-topology-is-the-manifold-topology, thm-riemannian-distance-is-a-metric, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric, def-compact-space, def-gr-smooth-lorentzian-objects, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval]
dependency_roles:
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  lem-gr-strong-causality-escape-sequence: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  thm-gr-limit-curve-two-endpoints: mathematical-premise
  lem-gr-basic-limit-curve: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  thm-the-riemannian-distance-topology-is-the-manifold-topology: mathematical-premise
  thm-riemannian-distance-is-a-metric: mathematical-premise
  lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric: mathematical-premise
  def-compact-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Theorem 2.9.9 with full proof (a spacetime admitting an achronal hypersurface with nonempty domain of dependence is globally hyperbolic on that domain), printed pp. 46-50, and Theorem 2.11.1 (Geroch-Seifert) with the volume-function proof, printed pp. 57-60"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 3.45 (interiors of domains of dependence are globally hyperbolic) with proof, printed pp. 98-99, and Theorem 4.119 printed pp. 146-147"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and suppose there exists a Cauchy set
$S\subseteq M$ ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause
(c)): every inextendible causal curve meets $S$ in exactly one parameter
value. Then:

**(a)** there is no nonconstant future causal curve with equal endpoints
(so $(M,g,N)$ is causal and chronological in the sense of
[[def-gr-causal-conditions-and-global-hyperbolicity]] clause (a));

**(b)** $(M,g,N)$ is strongly causal (clause (b) of that definition);

**(c)** for all $p,q\in M$ the causal diamond
$J^+(p)\cap J^-(q)$ is compact; consequently $(M,g,N)$ is globally
hyperbolic in the sense of clause (c) of that definition.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a Cauchy set $S\subseteq M$, and the auxiliary metric $h:=h'$ of [[thm-gr-auxiliary-complete-riemannian-metric]].

[L1] Cauchy sets are acausal, there is no closed causal curve, $S$ is closed, and $M=I^-(S)\sqcup S\sqcup I^+(S)$ with pairwise disjoint sets ([[lem-gr-cauchy-set-topology-and-graph]] clauses (a) and (b)).

[L2] Every future causal curve $\gamma:[a,b]\to M$ lies on an inextendible causal curve: there are an inextendible causal curve $\hat\gamma:J\to M$ and a strictly increasing affine $\rho:[a,b]\to J$ with $\hat\gamma\circ\rho=\gamma$; a future-inextendible future causal curve is contained in an inextendible future causal curve ([[lem-gr-maximal-geodesics-and-extension]] clause (c), [[lem-gr-causal-curve-conventions]] clause (d)).

[L3] Two-endpoint limit curve theorem. For future causal curves $\alpha_k:[0,b_k]\to M$ parametrized by $h$-arclength with $\alpha_k(0)\to x$, $\alpha_k(b_k)\to z$ and $b:=\lim_kb_k$ finite, if $b>0$ then the common-domain reparametrizations $\widetilde\alpha_k(t)=\alpha_k((b_k/b)t)$ on $[0,b]$ have a subsequence converging uniformly to a future causal curve $\alpha:[0,b]\to M$ from $x$ to $z$; if $b=0$ then $x=z$ and the uniform limit is the constant map. If $x=z$ and $b>0$, the limit is nonconstant. If $b=\infty$, there are a future-inextendible future causal curve $\alpha^+:[0,\infty)\to M$ and a past-inextendible future causal curve $\alpha^-:(-\infty,0]\to M$ with $\alpha^+(0)=x$ and $\alpha^-(0)=z$ such that for all $t_+\ge0,t_-\le0$ there are event pairs $u_k,v_k\in M$ with $u_k\le v_k$, $u_k\to\alpha^+(t_+)$ and $v_k\to\alpha^-(t_-)$ ([[thm-gr-limit-curve-two-endpoints]] clauses (i)-(iii), [[lem-gr-basic-limit-curve]]). Every finite future causal curve can be reparametrized by $h$-arclength as established in Step 1.2 of [[lem-gr-basic-limit-curve]].

[L4] Push-up rule and timelike pieces: if $a\ll b$ and $b\le c$ then $a\ll c$; if $a\le b$ and $b\ll c$ then $a\ll c$; $\ll$ is transitive ([[lem-gr-push-up-rule]] clauses (a), (b), [[lem-gr-causal-curve-calculus]] clause (d)).

[L5] Strong causality fails at $p$ precisely when there is an open $U\ni p$ such that for every open $V$ with $p\in V\subseteq U$ there are a future causal curve $\sigma$ and parameters $s<t$ with $\sigma(s),\sigma(t)\in V$ and $\sigma([s,t])\not\subseteq V$ ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (b), read as its negation). In that case there are an open $W\ni p$ with $\overline W\subseteq U$ and future causal curves $\sigma_k:[0,1]\to M$ whose endpoints lie in $W$ and tend to $p$, with $\sigma_k([0,1])\not\subseteq W$ for all large $k$ ([[lem-gr-strong-causality-escape-sequence]]).

[L6] The metric $h$ is a complete Riemannian metric on each connected component and its distance $d_h$ induces the manifold topology; closed $d_h$-bounded sets are compact ([[thm-gr-auxiliary-complete-riemannian-metric]] clauses (c) and (d), [[thm-the-riemannian-distance-topology-is-the-manifold-topology]], [[thm-riemannian-distance-is-a-metric]]). The $h$-arclength of a future causal curve satisfies $d_h(\gamma(s),\gamma(t))\le\ell_h(\gamma|_{[s,t]})$ for $s<t$ by the same reasoning as [[lem-gr-basic-limit-curve]].

[L7] Compact metric spaces are sequentially compact and conversely ([[thm-metric-compactness-equivalences]], [[def-compact-space]]).

## Proof

**Proof technique:** case-analysis.

1.1 (Preliminaries.) By [L1] there is no closed causal curve, $S$ is closed, and $M=I^-(S)\sqcup S\sqcup I^+(S)$. Consequently, for an inextendible future causal curve $\gamma:I\to M$ we may speak of *the* parameter $t_0\in I$ with $\gamma(t_0)\in S$. [given, L1]

2.1 (The crossing property.) Let $\gamma:I\to M$ be an inextendible future causal curve and $t_0\in I$ with $\gamma(t_0)\in S$. Then $t>t_0$, $t\in I$ implies $\gamma(t)\in I^+(S)$, and $t<t_0$ implies $\gamma(t)\in I^-(S)$. Indeed, suppose $t>t_0$ and $\gamma(t)\notin I^+(S)$; by step 1.1 $\gamma(t)\in I^-(S)$ (it is not in $S$, as $t_0$ is the unique element of $\gamma^{-1}[S]$). Choose $s\in S$ with $\gamma(t)\ll s$. If $s=\gamma(t_0)$, the concatenation of the causal segment $\gamma|_{[t_0,t]}$ with a future timelike curve from $\gamma(t)$ to $\gamma(t_0)$ is a nonconstant closed future causal curve through $\gamma(t_0)$ (nonconstant because $\gamma(t)\ll\gamma(t_0)$ forces $\gamma(t)\ne\gamma(t_0)$), contradicting step 1.1. If $s\ne\gamma(t_0)$, the same concatenation is a future causal curve from $\gamma(t_0)$ to $s$ with both endpoints in $S$; by [L2] it lies on an inextendible causal curve whose parameter set over $S$ therefore contains the two distinct parameters corresponding to $\gamma(t_0)$ and $s$, contradicting the Cauchy property. Hence $\gamma(t)\in I^+(S)$. The case $t<t_0$ is dual. [step 1.1, L1, L2, L4, given]

3.1 (The contradiction package from a closure relation.) Let $\alpha^+:[0,\infty)\to M$ be a future-inextendible future causal curve and $\alpha^-:(-\infty,0]\to M$ a past-inextendible future causal curve such that for all $t_+\ge0$, $t_-\le0$ there are $u_k\le v_k$ with $u_k\to\alpha^+(t_+)$ and $v_k\to\alpha^-(t_-)$. Then this situation is impossible. Indeed, by [L2] there is an inextendible future causal curve $\gamma^+$ extending $\alpha^+$ with $\gamma^+|_{[0,\infty)}=\alpha^+$ and an inextendible future causal curve $\gamma^-$ whose restriction to $(-\infty,0]$ is $\alpha^-$. By the crossing property, step 2.1, there are $t_+'\in[0,\infty)$ with $\alpha^+(t_+')\in I^+(S)$ (take $t_+'$ larger than the unique $S$-parameter of $\gamma^+$ and than $0$) and $t_-'\le0$ with $\alpha^-(t_-')\in I^-(S)$. Choose $s_1\in S$ with $s_1\ll\alpha^+(t_+')$ and $s_2\in S$ with $\alpha^-(t_-')\ll s_2$. Let $u_k\le v_k$ be the corresponding sequences. Since $I^+(s_1)$ is open and contains $\alpha^+(t_+')$, for large $k$ we have $s_1\ll u_k$; since $I^-(s_2)$ is open and contains $\alpha^-(t_-')$, for large $k$ we have $v_k\ll s_2$. Fix such a $k$. Then $s_1\ll u_k\le v_k$, so $s_1\ll v_k$ by [L4]; and $s_1\ll v_k\ll s_2$, so $s_1\ll s_2$ by transitivity of $\ll$ [L4]. If $s_1\ne s_2$, this contradicts the acausality of $S$ [L1]. If $s_1=s_2=:s$, then the concatenation of a future timelike curve from $s$ to $u_k$, the future causal curve from $u_k$ to $v_k$ and a future timelike curve from $v_k$ to $s$ is a nonconstant closed future causal curve through $s$ (nonconstant because $s\ll u_k$), contradicting step 1.1. [step 1.1, step 2.1, L1, L2, L4, given]

4.1 (The causal relation is closed.) Let $p_k\le q_k$ with $p_k\to p$ and $q_k\to q$. If infinitely many $p_k=q_k$, then $p=q$ (by uniqueness of limits) and $p\le q$. Otherwise, for large $k$ choose a future causal curve $\gamma_k$ with $\gamma_k(0')=p_k$, $\gamma_k(1')=q_k$ and reparametrize it by $h$-arclength: $\beta_k:[0,L_k]\to M$, $\beta_k(0)=p_k$, $\beta_k(L_k)=q_k$; the $L_k$ are positive. If the sequence $L_k$ is bounded, clause (i) of [L3] (applied to a subsequence with $L_k\to b$) gives a future causal curve $\beta:[0,b]\to M$ from $p$ to $q$, and either $b>0$ and $p\le q$ via $\beta$, or $b=0$, in which case $p=q$ by clause (i) and $p\le p$. If $L_k\to\infty$ along a subsequence, clause (ii) of [L3] gives future-inextendible $\alpha^+$ from $p$ and past-inextendible $\alpha^-$ to $q$ with the closure relation, which is impossible by step 3.1. Hence $p\le q$. [step 3.1, L3, given]

4.2 (Strong causality.) Suppose strong causality fails at $p\in M$ with neighbourhood $U$. By [L5] there are an open $W\ni p$ with $\overline W\subseteq U$ and future causal curves $\sigma_k:[0,1]\to M$ with endpoints $x_k,y_k\in W$, $x_k\to p$, $y_k\to p$, and $\sigma_k([0,1])\not\subseteq W$ for every $k$. Fix a coordinate ball $B=x^{-1}(B_{r_0})\subseteq W$ around $p$ with $x(p)=0$ and let $c_1:=\sqrt c\,r_0/2>0$, where $c>0$ is a lower bound for the $h$-length density on the closed coordinate ball against the Euclidean coordinate speed ([[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]], [[thm-gr-auxiliary-complete-riemannian-metric]] clause (a)). For all sufficiently large $k$, $|x(x_k)|_{\mathrm e}<r_0/2$. The first exit point $w_k$ of $\sigma_k$ from $B$ then satisfies $|x(w_k)-x(x_k)|_{\mathrm e}\ge r_0-|x(x_k)|_{\mathrm e}>r_0/2$. The local metric lower bound and absolute-continuity calculus give $\ell_h(\sigma_k|_{[0,\tau_k]})\ge\sqrt c\int_0^{\tau_k}|(x\circ\sigma_k)'|_{\mathrm e}\,ds\ge\sqrt c\,|x(w_k)-x(x_k)|_{\mathrm e}>c_1$, where $\tau_k$ is the first-exit parameter. Reparametrize each $\sigma_k$ by $h$-arclength: $\alpha_k:[0,L_k]\to M$, with $\alpha_k(0)=x_k$, $\alpha_k(L_k)=y_k$; the same first-exit estimate gives $L_k\ge c_1$ for all large $k$. If $L_k$ is bounded along a subsequence, clauses (i) and (iii) of [L3] (with $x=z=p$ and $b=\lim L_k\ge c_1>0$) produce a nonconstant closed future causal curve through $p$, contradicting step 1.1. If $L_k\to\infty$, clause (ii) of [L3] produces the impossible configuration of step 3.1. Hence strong causality holds at every $p$. [step 1.1, step 3.1, L3, L5, L6, given, algebra]

5.1 (The causal diamonds are compact.) Let $p,q\in M$ and $A:=J^+(p)\cap J^-(q)$; it is closed in $M$ because $J^+(p)$ and $J^-(q)$ are closed by step 4.1. With the metric $d_h$ inducing the manifold topology [L6], if $A$ were not compact then [L7] would give a sequence $r_k\in A$ with no convergent subsequence. For each $k$ choose a future causal curve from $p$ to $q$ through $r_k$ and reparametrize by $h$-arclength as $\gamma_k:[0,M_k]\to M$, with $\gamma_k(s_k)=r_k$. If $(M_k)$ is bounded, pass to $M_k\to b<\infty$. If $b=0$, then $d_h(r_k,p)\le M_k\to0$, contradiction. If $b>0$, clause (i) of [L3] gives the common-domain curves $\widetilde\gamma_k(t)=\gamma_k((M_k/b)t)$ converging uniformly on $[0,b]$ to $\gamma$. Put $t_k:=bs_k/M_k\in[0,b]$ and pass to a subsequence with $t_k\to t_*$. Then $r_k=\widetilde\gamma_k(t_k)\to\gamma(t_*)$ by uniform convergence and continuity, again a contradiction. Hence $M_k\to\infty$ along a subsequence, and clause (ii) of [L3] produces the impossible configuration of step 3.1. Therefore $A$ is compact. [step 3.1, step 4.1, L3, L6, L7, given, choose]

6.1 (Conclusion.) Clause (a) is step 1.1, clause (b) is step 4.2, and clause (c) is step 5.1; strong causality and compactness of all causal diamonds are exactly the definition of global hyperbolicity in [[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c). [step 1.1, step 5.1, step 4.2] ∎

## Remarks

- **Hypothesis trade-off.** Only the Cauchy property, openness of chronology, convex normal neighbourhoods through the push-up rule, and the two-endpoint limit curve theorem are used. Neither the topology of $S$ nor any completeness of $(M,g)$ is assumed; the auxiliary metric is used only to parametrize curves and extract limits.

- **The two cases are different.** In the bounded-length case the contradiction is a closed causal curve, hence a Cauchy-set violation by periodic extension; in the unbounded-length case it is two points of $S$ made chronologically related through the closure relation and the push-up rule. Every occurrence of "case (ii)" below refers to the second alternative.

- **Use.** This theorem is the forward direction of the Cauchy characterization of global hyperbolicity; the converse (a Cauchy set can be manufactured from a strongly causal spacetime with compact diamonds) is [[thm-gr-volume-time-function]] together with [[lem-gr-chronological-volume-continuity]], and the local version is [[lem-gr-local-cauchy-neighborhood]].

- **Empirical scope.** The statement is a conditional mathematical theorem about the model $(M,g,N)$; it reports no observation and makes no claim about nature. It uses $\mathrm{AC}_\omega$ and DC only through the auxiliary metric and the compactness equivalences.
