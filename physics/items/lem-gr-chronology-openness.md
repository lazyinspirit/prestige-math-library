---
id: lem-gr-chronology-openness
kind: lemma
title: "Openness of the chronological future and past, openness of the chronological relation, and closure of future and past sets"
status: draft
origin: session
domain: mathematics
dependency_level: 19
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-convex-normal-causality, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, lem-gr-causal-curve-calculus, def-gr-causal-curves-and-reachability, def-gr-future-and-past-sets, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, def-continuity-real, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  lem-gr-convex-normal-causality: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-future-and-past-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the chronological relation and its openness (section 1.11 and Proposition 2.4 printed pp. 15-16 and p. 26), future and past sets (Definition 2.83 printed p. 59)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): openness of the chronological relation, section 6.1"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, with the
relations $\ll$, $\le$ and the sets $I^\pm$, $J^\pm$ of
[[def-gr-causal-curves-and-reachability]] and the future and past sets of
[[def-gr-future-and-past-sets]]. Then:

**(a) Openness.** For every $x\in M$ the chronological future $I^+(x)$ and
the chronological past $I^-(x)$ are open subsets of $M$.

**(b) The chronological relation is open.** The set
$$\{(x,y)\in M\times M:\ x\ll y\}$$
is open in the product topology of $M\times M$.

**(c) Closure of future and past sets.** Let $F\subseteq M$ be a future set,
that is $I^+(F)\subseteq F$. Then every $q\in\overline F$ satisfies
$I^+(q)\subseteq F$. Dually, if $P$ is a past set ($I^-(P)\subseteq P$) and
$q\in\overline P$, then $I^-(q)\subseteq P$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and the points and sets of the claims.

[L1] In every strictly convex normal ball $B$, and for every base point $p\in B$, the set $I^+_B(p)$ of endpoints of future timelike curves in $B$ starting at $p$ is open in $B$ and equals the exponential image of the future timelike vectors in $\exp_p^{-1}(B)$ ([[thm-gr-normal-neighborhood-causal-cone]] clause (b), [[thm-gr-convex-normal-neighborhoods]]). Since $B$ is open in $M$, this set is also open in $M$.

[L2] If $\gamma:[a,b]\to M$ is a future timelike curve and $a\le s<t\le b$, then $\gamma|_{[s,t]}$ is a future timelike curve, because the set of parameters at which the velocity exists and is future timelike is of full measure and restricts to a set of full measure in $[s,t]$; also $\gamma(s)\ll\gamma(t)$ ([[def-gr-causal-curves-and-reachability]] clause (b) and clause (c)).

[L3] Concatenation and transitivity: a finite concatenation of future timelike curves is a future timelike curve, and from $x\ll z$ and $z\ll y$ it follows that $x\ll y$; more generally $x\ll z$ and $z\le y$ imply $x\ll y$ ([[lem-gr-causal-curve-calculus]] clauses (d) and (f)).

[L4] A future set $F$ satisfies $I^+(F)\subseteq F$, and then also $I^+(q)\subseteq I^+(F)\subseteq F$ for any $q\in F$ ([[def-gr-future-and-past-sets]] clause (a)); a past set satisfies $I^-(P)\subseteq P$.

## Proof

**Proof technique:** direct.

1.1 (Openness of $I^+(x)$.) Let $y\in I^+(x)$ and let $\gamma:[0,1]\to M$ be a future timelike curve from $x$ to $y$. Choose a strictly convex normal ball $B$ about $y$. By continuity, choose a fixed $t_0\in(0,1)$ sufficiently near $1$ that $\gamma([t_0,1])\subseteq B$, and put $p_0:=\gamma(t_0)$. The tail is a future timelike curve in $B$, so $y\in I^+_B(p_0)$. By [L1], $I^+_B(p_0)$ is open in $M$; choose a neighborhood $V$ of $y$ contained in it. For every $z\in V$, we have $x\ll p_0$ by [L2] and $p_0\ll z$ by the definition of $I^+_B(p_0)$; transitivity [L3] gives $x\ll z$. Thus $V\subseteq I^+(x)$ and $I^+(x)$ is open. The time-reversed argument gives openness of $I^-(x)$. The center $p_0$ is fixed throughout the neighborhood argument; continuity is used only to place the original curve tail in the ball around $y$. [L1, L2, L3, given]

2.1 (Openness of the chronological relation.) Let $x\ll y$ and choose a future timelike curve $\gamma$ from $x$ to $y$; pick $t_0\in(0,1)$ and put $z:=\gamma(t_0)$, so that $x\ll z\ll y$ by [L2] and [L3]. By step 1.1 the sets $I^-(z)=\{a:a\ll z\}$ and $I^+(z)$ are open, and $I^-(z)\times I^+(z)$ is an open neighborhood of $(x,y)$ in $M\times M$; every $(a,b)$ in it satisfies $a\ll z\ll b$, hence $a\ll b$ by [L3]. This proves (b). [step 1.1, L3, given]

3.1 (Future sets are closed under the chronological future of their closure.) Let $F$ be a future set and $q\in\overline F$; fix a sequence $q_k\in F$ with $q_k\to q$. Let $r\in I^+(q)$, so that $(q,r)$ is in the open set of step 2.1. For $k$ large, $(q_k,r)$ also lies in that set, that is $q_k\ll r$; then $r\in I^+(q_k)\subseteq I^+(F)\subseteq F$ by [L4]. Hence $I^+(q)\subseteq F$; the past statement is the time reverse. [step 2.1, L4, given]

4.1 (Conclusion.) Step 1.1 proves (a), step 2.1 proves (b) and step 3.1 proves (c). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Where local causality enters.** The only input from the local theory is the openness of the cone image $I^+_B(p)$ in a strictly convex normal ball; everything else is transitivity and the definition of the relations.

- **Scope.** The result is a statement about the causal structure of the smooth Lorentzian model; it asserts no global causality condition and no physical interpretation.
