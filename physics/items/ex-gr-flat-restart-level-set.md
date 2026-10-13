---
id: ex-gr-flat-restart-level-set
kind: example
title: "The spacelike restart level set of the time separation from a point in Minkowski spacetime"
status: published
origin: session
domain: mathematics
dependency_level: 24
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, lem-gr-time-separation-maximizers, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, lem-gr-push-up-rule, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-gr-time-separation-maximizers: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the level surface S = tau_q^{-1}(tau_0) cap W cap I^+(iota(M)) and formula (3.12) in the proof of Theorem 3.6, printed p. 19"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "R. M. Wald, General Relativity, University of Chicago Press 1984: the Lorentzian distance function and its level sets in Minkowski spacetime, Chapter 9"
      url: "https://archive.org/details/generalrelativit0000wald"
verification:
  precheck: n/a
---

## Example

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) for the invoked general causal and maximal-development suppliers.

In Minkowski spacetime $(\mathbb R^{1,3},\eta)$ with metric
$\eta=-dt^2+dx^2$ and time orientation $\partial_t$, let $q:=(1,0,0,0)$ and
$0<\tau_0<1$. The time separation from $q$
([[lem-gr-time-separation-maximizers]]) is
$$\tau_q(r)=\sqrt{(t-1)^2-|x|^2}\qquad\text{for }r=(t,x)\in J^-(q),$$
and equals $0$ otherwise. Then the level set
$$S:=\{r\in I^-(q):\tau_q(r)=\tau_0\}$$
is a smooth embedded spacelike hypersurface, every causal curve meets it in
at most one parameter value, and every point of $S$ is the past endpoint of
a future-directed timelike geodesic segment of length $\tau_0$ ending at $q$, namely the radial
segment $s\mapsto r+\frac{s}{\tau_0}(q-r)$ for $s\in[0,\tau_0]$, where
$r=(1-\sqrt{\tau_0^2+|x_s|^2},x_s)$.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice; Minkowski spacetime $M=(\mathbb R^{1,3},\eta)$, $\eta=-dt^2+dx^2$ with time orientation $\partial_t$; the point $q=(1,0,0,0)$ and $0<\tau_0<1$; the time separation $\tau_q$ from $q$.

[L1] Time separation: $\tau_q$ is finite on $J^-(q)$, for $r\ne q$ the supremum over causal curves is attained on the causal geodesic image; at $r=q$ the value is zero with the explicitly declared constant degenerate-geodesic convention, and in a causally convex normal neighbourhood of $q$ one has $\tau_q(r)=\sqrt{-g_q(\exp_q^{-1}r,\exp_q^{-1}r)}$ ([[lem-gr-time-separation-maximizers]] clauses (a)-(c)).

[L2] Causal structure of Minkowski spacetime: causal curves, $I^\pm$ and the causal character of the straight segments are those of [[def-gr-causal-curves-and-reachability]] and [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] in the flat metric.

## Verification
1.1 (The distance formula.) For $r\in J^-(q)$ the displacement $q-r=(\Delta t,\Delta x)$ is causal, and for $r\ne q$ the unique maximizing geodesic image is the straight causal segment, whose length is $\sqrt{(\Delta t)^2-|\Delta x|^2}=\sqrt{(t-1)^2-|x|^2}$ when the displacement is timelike; for nonzero lightlike displacement the value is $0$; for $r=q$ the degenerate constant-geodesic convention also gives zero; this is the Minkowski instance of the attainability and geodesy of maximizers in [[lem-gr-time-separation-maximizers]] clause (a). [given, L1, algebra]

2.1 (Smoothness and spacality.) On the open set $U:=\{r:\tau_q(r)>0\}=I^-(q)$ the function $f(t,x):=(t-1)^2-|x|^2$ is smooth with Lorentzian gradient $(-2(t-1),-2x)$, which is timelike on $U$ (there $(t-1)^2>|x|^2$); hence its level set $\{f=\tau_0^2\}$, which is $S$, is a smooth embedded hypersurface with timelike normal and is therefore spacelike ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]], [[def-gr-smooth-lorentzian-objects]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]). [step 1.1, L2, algebra]

3.1 (At most one meeting along a causal curve.) Since $\tau_q$ is continuous and $g(\nabla\tau_q,\cdot)$ has no nonzero causal kernel on $U$, the function $t\mapsto\tau_q(\gamma(t))$ is strictly monotone along every causal curve segment contained in $U$; hence such a segment meets the level $\tau_0$ in at most one parameter value, and a causal curve segment with $\tau_q$-values straddling $\tau_0$ meets $S$ at least once by the intermediate value theorem ([[lem-gr-time-separation-maximizers]] clause (b), [[def-continuity-real]]). If a causal curve met $S$ in two parameter values, the subsegment between them would join two points of $S$ with equal $\tau_q$-value, contradicting strict monotonicity; if the subsegment left $U$ it would contain a point $p$ with $\tau_q(p)=0$, that is $p\not\ll q$; but $p\le\gamma(t_2)\ll q$ and push-up gives $p\ll q$, a contradiction ([[lem-gr-push-up-rule]], [[def-gr-causal-curves-and-reachability]]). [step 2.1, L2, algebra]

4.1 (Radial description.) For $r=(1-\sqrt{\tau_0^2+|x_s|^2},x_s)\in S$ the future segment to $q$ is $s\mapsto r+\frac{s}{\tau_0}\bigl(\sqrt{\tau_0^2+|x_s|^2},-x_s\bigr)$, which is a geodesic with timelike velocity of constant norm $1$, hence a future-directed timelike geodesic segment of length $\tau_0$ ending at $q$. Conversely every past endpoint of a future-directed timelike geodesic segment of length $\tau_0$ ending at $q$ lies on $S$. [step 1.1, L2, algebra] ∎

## Remarks

The example realises the level surface $S$ of [[lem-gr-spacelike-restart-hypersurface]] in the flat case with every object explicit: the hyperboloid $f=\tau_0^2$ is smooth, spacelike, and crossed at most once by every causal curve. It also shows why the surface is only defined inside the chronological past of $q$ and why the function must be restricted to a causally convex neighbourhood in the general construction. 