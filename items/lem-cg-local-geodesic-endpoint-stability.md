---
id: lem-cg-local-geodesic-endpoint-stability
kind: lemma
title: "Endpoint stability for local geodesics in complete locally CAT(0) spaces"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity, def-metric-space, def-metric-ball, def-metric-compactness, def-complete-metric-space, def-cauchy-in-metric, def-metric-continuity, def-metric-convergence, def-geodesic-and-geodesic-metric-space, def-topology-of-uniform-convergence, lem-metric-reverse-triangle, thm-heine-borel-rn, thm-compact-implies-complete-and-totally-bounded, thm-continuous-image-of-a-compact-space-is-compact]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.4.1–II.4.3, printed pp. 193–196 (the metric Cartan–Hadamard theorem and the endpoint-stability lemma with its $A\\to3A/2$ extension and length bound); II.1.4, printed pp. 160–161 (uniqueness, continuity and convexity of small balls)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 501–505 (local geodesics and the conditions for the CAT(0)-inequality)"
---

## Statement

Let $X$ be a complete metric space that is locally CAT(0) ([[def-cg-cat-zero-cat-one-and-local-geodesic]]), and let $c:[0,1]\to X$ be a local geodesic. Then there is $\varepsilon>0$ such that for every $t\in[0,1]$ the closed ball $\bar B(c(t),2\varepsilon)$ is complete and convex, and for all $x',y'\in X$ with $d(c(0),x')<\varepsilon$ and $d(c(1),y')<\varepsilon$ there is exactly one local geodesic $c':[0,1]\to X$ from $x'$ to $y'$ with $t\mapsto d(c(t),c'(t))$ convex. For this $c'$:

(i) $d(c(t),c'(t))<\varepsilon$ for every $t\in[0,1]$, and $L(c')\le L(c)+d(c(0),x')+d(c(1),y')$ ([[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]]);

(ii) the assignment $(x',y')\mapsto c'$ is continuous for the sup metric $\rho(g,h):=\sup_{t\in[0,1]}d(g(t),h(t))$, which induces uniform convergence ([[def-topology-of-uniform-convergence]]): if $x_n'\to x'$ and $y_n'\to y'$ in $X$ then the corresponding local geodesics converge uniformly.

## Facts & Assumptions

**Given:** A complete metric space $X$ that is locally CAT(0), and a local geodesic $c:[0,1]\to X$ into it, with its constant-speed parametrization; write $\lambda=L(c)$ for its speed.

[F1] Locally CAT(0) means every point $x$ has a positive radius $r(x)$ with $\bar B(x,r(x))$ CAT(0) in the induced metric; the induced metric on $\bar B(x,r(x))$ is a geodesic metric and is complete when $X$ is complete and $r(x)$ finite, the ball being closed in $X$ ([[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-metric-ball]], [[def-complete-metric-space]], [[def-metric-space]]).

[F2] In a CAT(0) space geodesic segments are unique and vary continuously with their endpoints, and for geodesics $\gamma,\delta$ with a common initial point and proportional parametrizations the distance function is convex: $d(\gamma(t),\delta(t))\le(1-t)d(\gamma(0),\delta(0))+t\,d(\gamma(1),\delta(1))$; the midpoint inequality $d(z,m)^2\le\tfrac12 d(z,y)^2+\tfrac12 d(z,y')^2-\tfrac14 d(y,y')^2$ holds for every midpoint $m$ of a geodesic $[y,y']$ ([[lem-cg-comparison-convexity-and-model-spaces]] clauses (iv)(a), (iv)(b) and (iv)(d)).

[F3] A compact subset of a metric space is covered by finitely many balls of any prescribed positive radius; a continuous image of a compact interval is compact; and a finite set of positive numbers has a positive minimum ([[def-metric-compactness]], [[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]]).

[F4] Length: for a path $\gamma$ the length $L(\gamma)$ is the supremum of its polygonal sums; it is lower semicontinuous under uniform convergence; the chord bound $d(\gamma(s),\gamma(t))\le L(\gamma|_{[s,t]})$ and the additivity $L(\gamma|_{[a,w]})=L(\gamma|_{[a,v]})+L(\gamma|_{[v,w]})$ hold ([[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]]).

[F5] Continuity at a parameter gives a neighbourhood whose image lies in any prescribed ball about its image; $(X,d)$ satisfies the triangle inequality and the reverse triangle inequality $|d(x,z)-d(y,z)|\le d(x,y)$ ([[def-metric-continuity]], [[def-metric-space]], [[lem-metric-reverse-triangle]]).

[F6] A sequence in a metric space converges when its distances to the limit tend to $0$, and uniform convergence of maps into $X$ is the metric-distance condition of [[def-topology-of-uniform-convergence]]. For continuous maps on $[0,1]$, $\rho(g,h)=\sup_t d(g(t),h(t))$ is finite because $t\mapsto d(g(t),h(t))$ is continuous and bounded on the compact interval; taking suprema in the metric triangle inequality makes $\rho$ a metric, and its convergence condition is exactly uniform convergence; a Cauchy sequence in a complete space converges ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[def-topology-of-uniform-convergence]], [[def-complete-metric-space]]).

## Proof

1.1 Convexity of balls in a CAT(0) space. Let $Y$ be CAT(0), $y_0\in Y$, $r>0$ and $u,v\in\bar B(y_0,r)$; let $m$ be a midpoint of the unique geodesic $[u,v]$. By [F2] the midpoint inequality gives $d(y_0,m)^2\le\tfrac12 d(y_0,u)^2+\tfrac12d(y_0,v)^2-\tfrac14d(u,v)^2\le r^2$, so $m\in\bar B(y_0,r)$; iterating the same computation for the midpoints of $[u,m]$ and $[m,v]$ and so on, every dyadic point of $[u,v]$ lies in $\bar B(y_0,r)$, and the dyadic points are dense in $[0,1]$, so continuity of the geodesic [F2] puts all of $[u,v]$ in $\bar B(y_0,r)$. Hence $\bar B(y_0,r)$ is convex. [F2, algebra]

2.1 A uniform radius. Consider all pairs $(t,r)$ with $r>0$ and $\bar B(c(t),r)$ CAT(0). Their open half-radius balls cover the compact image of $c$, so [F3] supplies finitely many $B(c(t_i),r_i/2)$ covering it, without choosing a radius at every point. Put $\varepsilon=\tfrac14\min_i r_i>0$. For every $t$, some $i$ has $d(c(t),c(t_i))<r_i/2$, and $2\varepsilon\le r_i/2$, so $\bar B(c(t),2\varepsilon)\subseteq\bar B(c(t_i),r_i)$. This ball is thus a ball in a CAT(0) space, hence complete (it is closed in the complete space $X$) and convex by step 1.1; in particular it is uniquely geodesic and has the convexity property [F2] for pairs of geodesics inside it. [step 1.1, F1, F2, F3]

3.1 Convexity tools. For geodesics $g,h$ in one CAT(0) chart, introduce the geodesic $k$ from $g(0)$ to $h(1)$: the common-initial-point estimate of [F2], followed by the same estimate on reversed geodesics, gives $d(g(t),h(t))\le t\,d(g(1),h(1))+(1-t)d(g(0),h(0))$. Apply this on every subinterval to obtain convexity of the distance function. A continuous locally convex real function on an interval is convex: on a sufficiently fine subdivision its consecutive secant slopes are nondecreasing by local convexity; summing the resulting inequalities gives the secant inequality for any three prescribed points. Consequently, for local geodesics $g,h$ satisfying $d(c(t),g(t)),d(c(t),h(t))<\varepsilon$, the function $d(g(t),h(t))$ is convex: near each parameter both curves are geodesics in the ball of step 2.1. Their distance is thus bounded by interpolation of endpoint distances, and they coincide if their endpoints coincide. A local geodesic whose entire image lies in one CAT(0) chart equals that chart's geodesic between its endpoints, by the same local-convexity argument with endpoint distances zero. [step 2.1, F2, algebra]

4.1 Initial existence. Let $P(A)$ mean that for every $[a,b]\subseteq[0,1]$ with $0<b-a<A$ and endpoints $u,v$ at distances $<\varepsilon$ from $c(a),c(b)$ there is a constant-speed local geodesic $g:[a,b]\to X$ with $d(c(t),g(t))<\varepsilon$ throughout. Take $A_0>0$ such that $\lambda A_0<\varepsilon$ (any $A_0$ if $\lambda=0$). Both endpoints then lie in $B(c(a),2\varepsilon)$; its geodesic joins them. The restriction of $c$ lies in that ball, hence is its geodesic by step 3.1. Convex separation bounds the distance between these two geodesics by the maximum of their endpoint distances, which is $<\varepsilon$. Thus $P(A_0)$ holds. [step 2.1, step 3.1, F4, choose]

4.2 Alternating-thirds construction. Suppose $P(A)$ and $0<b-a<3A/2$; set $a_1=a+(b-a)/3$ and $b_1=a+2(b-a)/3$. Put $p_0=c(a_1)$ and $q_0=c(b_1)$. For $n\ge1$, use $P(A)$ on $[a,b_1]$ and $[a_1,b]$ to obtain $g_n$ from $u$ to $q_{n-1}$ and $h_n$ from $p_{n-1}$ to $v$, and set $p_n=g_n(a_1)$, $q_n=h_n(b_1)$. Step 3.1 makes all these choices unique. Set $r=\max\{d(c(a),u),d(c(b),v)\}<\varepsilon$. Convexity shows inductively that each entire curve is within $r$ of $c$. It also gives $d(p_1,p_0),d(q_1,q_0)\le r/2$ and, for $n\ge1$, $d(p_{n+1},p_n)\le\tfrac12d(q_n,q_{n-1})$ and $d(q_{n+1},q_n)\le\tfrac12d(p_n,p_{n-1})$, since the evaluation points are halfway along their respective intervals and the other endpoints agree. Hence both increments at index $n$ are at most $r/2^n$. Both sequences are Cauchy, and completeness gives limits $p,q$ in the closed $r$-balls around $c(a_1),c(b_1)$. [assume-hyp, step 3.1, F6, construct, algebra]

5.1 Limits and overlap. Step 3.1 also gives $\sup d(g_{n+1},g_n)\le d(q_n,q_{n-1})$ and $\sup d(h_{n+1},h_n)\le d(p_n,p_{n-1})$; summing the geometric series yields uniform limits $g,h$. To verify they are local geodesics, fix a parameter and a small interval on which $c$ and all these curves lie in one ball of step 2.1, using the strict margin $r<\varepsilon$ and continuity of $c$. Each restricted curve is the chart's geodesic by step 3.1; the endpoint estimate there shows the limit is that geodesic too. Their speeds on overlapping such intervals agree, so each limit has a single constant speed. On $[a_1,b_1]$, the endpoints of $g$ and $h$ are $p,q$, so step 3.1 identifies them on the overlap. Their union is a constant-speed local geodesic on $[a,b]$ (if the overlap is constant, both speeds are zero). Its separation from $c$ is locally convex and therefore convex, bounded by the endpoint maximum $r$. This proves $P(3A/2)$. [step 3.1, step 4.2, F2, F5, F6]

6.1 Existence and uniqueness. Iteration yields $P((3/2)^kA_0)$ for all $k$; choose $k$ with $(3/2)^kA_0>1$ to obtain $c'$ on $[0,1]$. Step 3.1 makes its separation from $c$ convex and gives $d(c(t),c'(t))\le(1-t)d(c(0),x')+t\,d(c(1),y')<\varepsilon$. Conversely every candidate with convex separation has this bound, and step 3.1 identifies any two candidates with the same endpoints. [step 4.1, step 5.1, step 3.1, algebra]

7.1 Length with one endpoint fixed. Suppose $g,h$ are two solutions in this tube with $g(0)=h(0)$. For sufficiently small $t>0$ both initial restrictions are minimizing, so step 3.1 and the triangle inequality give $tL(h)=d(h(0),h(t))\le d(g(0),g(t))+d(g(t),h(t))\le tL(g)+t\,d(g(1),h(1))$. Divide by $t$ to obtain $L(h)\le L(g)+d(g(1),h(1))$. Let $k$ be the solution from $x'$ to $c(1)$ given by step 6.1. Apply this inequality first to the reversed curves $c,k$ and then to $k,c'$: $L(k)\le L(c)+d(c(0),x')$ and $L(c')\le L(k)+d(c(1),y')$. This is the asserted length bound. [step 3.1, step 6.1, F4, algebra]

8.1 Endpoint continuity. For solutions $c_n',c'$ in the same tube, step 3.1 gives $\sup_t d(c_n'(t),c'(t))\le\max\{d(x_n',x'),d(y_n',y')\}$. When the endpoints converge the right side tends to zero, which proves uniform convergence and clause (ii). [step 3.1, step 6.1, F6] ∎

