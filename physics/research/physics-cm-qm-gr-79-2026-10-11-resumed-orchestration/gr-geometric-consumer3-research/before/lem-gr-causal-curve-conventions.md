---
id: lem-gr-causal-curve-conventions
kind: lemma
title: "Equivalence of the absolutely-continuous and continuous causal conventions, and one-sided inextendible extensions"
status: draft
origin: session
domain: mathematics
dependency_level: 18
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-causal-curve-calculus, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, lem-gr-convex-normal-causality, lem-gr-dominating-cone-bounds, def-gr-normal-neighborhoods-and-position-vectors, lem-gr-joint-exponential-diffeomorphism, lem-gr-maximal-geodesics-and-extension, thm-gr-local-geodesics-and-exponential-map, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, def-gr-observer-and-rest-space, lem-gr-observer-pairing-with-future-causal-vectors, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-interval, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-convex-normal-causality: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: continuous causal curves and Theorem 2.12 with Remark 2.14 (printed pp. 32-33), Definition 2.16 (printed p. 33) and Lemma 2.17 (printed pp. 33-34)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): causal curves, their local Lipschitz property and the causal relation, section 6.2"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]], [[def-gr-metric-selected-connection]]).
Call a map $x:I\to M$ a **geodesically connectible continuous causal curve**
when it is continuous ([[def-continuity-real]]) and for every strictly convex
normal ball $C$ as produced by [[thm-gr-convex-normal-neighborhoods]]
([[def-gr-normal-neighborhoods-and-position-vectors]] clause (b)) and all
$t_1<t_2$ in $I$ with $x([t_1,t_2])\subseteq C$, the endpoints $x(t_1)$ and
$x(t_2)$ are joined by a future causal geodesic whose image is contained in
$C$. Write $\le$ for the causal relation of
[[def-gr-causal-curves-and-reachability]] (defined by locally absolutely
continuous future causal curves) and put
$$n:=\frac{N}{\sqrt{-g(N,N)}},\qquad h:=g+2\,n^\flat\otimes n^\flat .$$

**(a) Absolutely continuous implies connectible.** Every future causal curve
$\gamma:I\to M$ in the sense of [[def-gr-causal-curves-and-reachability]] is a
geodesically connectible continuous causal curve.

**(b) Connectible curves give causal relations.** Let $x:I\to M$ be a
geodesically connectible continuous causal curve and let $t_1<t_2$ in $I$.
Then for every open neighborhood $W$ of $x([t_1,t_2])$ there is a piecewise
smooth future causal curve $\eta:[t_1,t_2]\to W$ with $\eta(t_1)=x(t_1)$ and
$\eta(t_2)=x(t_2)$ (in particular a locally absolutely continuous future
causal curve, so $x(t_1)\le x(t_2)$ in the relation defined by
[[def-gr-causal-curves-and-reachability]]).

**(c) Equality of relations.** For $p,q\in M$ the following are equivalent:
$p\le q$; $p=q$ or there is a geodesically connectible continuous causal
curve with endpoints $p,q$.

**(d) One-sided extension.** Let $\gamma:[0,\infty)\to M$ be a
future-inextendible future causal curve in the sense of
[[def-gr-causal-curves-and-reachability]] clause (d). Then there is an
inextendible future causal curve $\gamma^*:I^*\to M$ with
$[0,\infty)\subseteq I^*\subseteq\mathbb R$ and $\gamma^*|_{[0,\infty)}=\gamma$;
that is, $\gamma$ is contained in a curve that is both future- and
past-inextendible. The dual statement holds for past-inextendible curves.

No choice principle is used. The extension in (d) is not asserted to be
unique.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and the objects of the four clauses.

[L1] Strictly convex normal balls exist around every point; in such a ball $C$ with base $p$ the future causal reachability is the exponential cone: $J^+_C(p)=\exp_p(\mathcal C^+)$ and $I^+_C(p)=\exp_p(\mathcal T^+)$, where $\mathcal C^+$ is the set of future causal or zero vectors in the open star-shaped inverse domain $W_p=\{u\in\mathcal E_p:\exp_p(tu)\in C\ \forall t\in[0,1]\}$; the radial geodesic of $v\in\mathcal C^+$ stays in $C$ ([[thm-gr-convex-normal-neighborhoods]] clauses (a) and (b), [[thm-gr-normal-neighborhood-causal-cone]] clauses (a) and (b), [[def-gr-normal-neighborhoods-and-position-vectors]] clause (b)).

[L2] Every future causal curve with image in a strictly convex normal ball $C$ starting at $p\in C$ has its endpoint in $J^+_C(p)$ ([[thm-gr-normal-neighborhood-causal-cone]] clause (a)).

[L3] A finite concatenation of locally absolutely continuous curves is locally absolutely continuous, and it is a future causal curve when each piece is, because the union of finitely many full-measure sets is full measure ([[lem-gr-causal-curve-calculus]] clauses (a) and (d), [[def-gr-causal-curves-and-reachability]] clause (b)).

[L4] In the chart of [[lem-gr-dominating-cone-bounds]] of a point $x$, with constants $K$ and coordinate functions $x^a$, every future causal curve satisfies $x^0(\gamma(t))>x^0(\gamma(s))$ and $|x^i(\gamma(t))-x^i(\gamma(s))|\le K(x^0(\gamma(t))-x^0(\gamma(s)))$ for $s<t$; and if a future causal curve converges to $x$ as $t\to-\infty$ or as $t\to a^+$ for a finite $a$, then its $h$-length in the past of any interior parameter is finite, because on a small chart around $x$ the $h$-length is bounded by a constant times the total $x^0$-increase and that increase is bounded by $x^0(x)-x^0(\gamma(t_0))$ ([[lem-gr-dominating-cone-bounds]] clauses (b) and (c)).

[L5] The field $n$ satisfies $g(n,n)=-1$ and is future directed, and $h(X,X)\ge1$ for every $g$-unit future timelike vector $X$, since $h(X,X)=g(X,X)+2g(X,n)^2=-1+2g(X,n)^2$ and $g(X,n)^2\ge1$ by reverse Cauchy-Schwarz ([[def-gr-smooth-lorentzian-objects]], [[lem-gr-observer-pairing-with-future-causal-vectors]], [[def-gr-observer-and-rest-space]]).

[L6] Along a geodesic the velocity is the parallel transport of the initial velocity, so it keeps its causal character and direction; the maximal geodesic through a point with a given initial vector is defined on an open interval containing $0$, and its initial segments satisfy $\exp_q(sv)=\exp_q|_{sv}$ for $|s|\le1$ ([[thm-gr-local-geodesics-and-exponential-map]] clauses (a)-(d)).

[L7] A causal curve (equivalently, the future causal curve of clause (d) of [[def-gr-causal-curves-and-reachability]]) that converges to a point of $M$ at one of its endpoints can be extended beyond that endpoint by a geodesic segment ([[lem-gr-maximal-geodesics-and-extension]] clause (a)); a maximal geodesic whose image has compact closure in $M$ is then not maximal, so it does not converge to any point of $M$ at a parameter endpoint ([[thm-gr-local-geodesics-and-exponential-map]] clause (d)).

[L8] The sets $\mathcal C^+_q=\{v\in T_qM:g_q(v,v)\le0,\ g_q(v,n_q)<0\}\cup\{0\}$ are closed convex cones and vary continuously with $q$ in a chart; a future causal geodesic through $q$ with initial velocity $w$ has velocity $w$ at the base point ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[thm-gr-normal-neighborhood-causal-cone]] clause (a)).

## Proof
**Proof technique:** direct.

1.1 (Clause (b).) Let $x:I\to M$ be geodesically connectible, $t_1<t_2$ in $I$, and $W$ an open neighborhood of the compact image $x([t_1,t_2])$. Every point of $x([t_1,t_2])$ lies in a strictly convex normal ball contained in $W$ by [L1], and the image is compact, so finitely many such balls $C_1,\dots,C_m\subseteq W$ cover $x([t_1,t_2])$. The preimages $x^{-1}(C_j)$ form an open cover of the compact interval $[t_1,t_2]$; let $\rho>0$ be a Lebesgue number of this cover for the metric of $\mathbb R$. Choose a partition $t_1=s_0<s_1<\dots<s_N=t_2$ of mesh less than $\rho$; then each $x([s_{j-1},s_j])$ lies in some $C_{j}$, and by the defining property of $x$ there is a future causal geodesic in $C_{j}$ joining $x(s_{j-1})$ to $x(s_j)$. Concatenating these finitely many geodesic segments gives a piecewise smooth curve $\eta:[t_1,t_2]\to W$ with the required endpoints; by [L3] it is a locally absolutely continuous future causal curve. This proves (b). [L1, L3, given, construct]

1.2 (Clause (a).) Let $\gamma:I\to M$ be a future causal curve and let $C$ be a strictly convex normal ball with $\gamma([t_1,t_2])\subseteq C$; put $p:=\gamma(t_1)$. The restricted curve $s\mapsto\gamma(t_1+s)$, $s\in[0,t_2-t_1]$, is a future causal curve with image in $C$ starting at $p$, so by [L2] its endpoint $\gamma(t_2)$ lies in $J^+_C(p)$; by [L1] there is $v\in\mathcal C^+\subseteq W_p$ with $\exp_p(v)=\gamma(t_2)$, and the radial geodesic $s\mapsto\exp_p(sv)$, $s\in[0,1]$, is a future causal geodesic whose image is contained in $C$ because $W_p$ is star-shaped and $\exp_p(W_p)=C$. This proves (a). [L1, L2, given]

1.3 (Setup for clause (d).) Let $\gamma:[0,\infty)\to M$ be the given future-inextendible curve. Call $T\ge0$ **admissible** when there is a future causal curve $\gamma_T:[-T,\infty)\to M$ with $\gamma_T|_{[0,\infty)}=\gamma$; $T=0$ is admissible. If $T$ is admissible and $q:=\gamma_T(-T)$, then choosing the vector $w_q:=n_q$ (unit future timelike by [L5]) and letting $\rho(u):=\exp_{q}(uw_q)$ be the maximal geodesic, the set $J:=\{u\in\mathbb R:\rho(u)\ \text{is defined}\}$ is an open interval containing $0$ by [L6]. [L5, L6, given, construct]

2.1 (Clause (c).) If $p\le q$ then either $p=q$ or there is a locally absolutely continuous future causal curve from $p$ to $q$, which is geodesically connectible by step 1.2; conversely, if a geodesically connectible continuous causal curve joins $p\ne q$, apply step 1.1 with $W=M$ to obtain a future causal locally absolutely continuous curve from $p$ to $q$, so $p\le q$ by [[def-gr-causal-curves-and-reachability]] clause (c). This proves (c). [step 1.1, step 1.2, given]

2.2 (Extension step.) With the notation of step 1.3, fix a number $\delta>0$ such that $[-\delta,0]\subseteq J$. For $u\in[-\delta,0]$ the velocity $\rho'(u)$ is the parallel transport of $w_q$, hence is $g$-unit future timelike, so $h(\rho'(u),\rho'(u))\ge1$ by [L5] and $\ell_h(\rho|_{[-\delta,0]})=\int_{-\delta}^0\sqrt{h(\rho'(u),\rho'(u))}\,du\ge\delta$. Define $\gamma':[-\delta-T,\infty)\to M$ by $\gamma'(t):=\rho(t+T)$ for $t\in[-\delta-T,-T]$ and $\gamma'(t):=\gamma_T(t)$ for $t\ge-T$; then $\gamma'$ is a future causal curve: it is continuous at $-T$, the two pieces are locally absolutely continuous, on the first piece the velocity is future timelike everywhere and on the second it is future causal almost everywhere, and the junction is a single parameter value. Hence $T+\delta$ is admissible whenever the maximal geodesic reaches parameter $-\delta$. [step 1.3, L3, L5, L6, L8, given, construct]

3.1 (The greedy construction.) Starting from the admissible value $0$ and the curve $\gamma_0:=\gamma$, apply step 2.2 repeatedly: if at stage $n$ the current curve $\gamma_n$ is defined on $[-T_n,\infty)$ and its maximal geodesic extension in the sense of step 2.2 reaches parameter $-\delta$, replace it by the extension $\gamma_{n+1}$ defined on $[-T_n-\delta,\infty)$; if it does not reach $-\delta$, extend instead along its maximal domain $[u_n,0]$ with $u_n>-\delta$ and stop the construction. This produces either a sequence of admissible values $T_n\ge n\delta$ with curves $\gamma_n$ agreeing on overlaps, or a finite chain ending in a curve defined on $[u_n-T_n,\infty)$ whose past parametrization continues the maximal geodesic $\rho$ of the last step up to but not including its past endpoint. [step 2.2, given, construct]

4.1 (The union is a future causal curve.) In the first case of step 3.1, the curves $\gamma_n$ agree on the intersections $[-T_m,\infty)$ for $m\le n$, so they define a single map $\gamma^*:\mathbb R\to M$ extending $\gamma$; every compact subinterval of $\mathbb R$ lies in $[-T_N,\infty)$ for some $N$, on which $\gamma_N$ is a future causal curve, so $\gamma^*$ is a future causal curve, because locally absolutely continuous functions agreeing on overlaps glue and the union of finitely many full-measure sets is of full measure ([[def-gr-causal-curves-and-reachability]] clause (b)). In the second case the same gluing gives a future causal curve $\gamma^*$ on the half-line $[u_n-T_n,\infty)$ extending $\gamma$. [step 3.1, given, algebra]

4.2 (Past-inextendibility in the finite-depth case.) In the second case of step 3.1 the curve $\gamma^*$ is defined on $[u_n-T_n,\infty)$ with $u_n>-\delta$, and the last extension piece is the maximal geodesic $\rho$ of step 1.3 with $q$ some point of $M$ and initial velocity the unit future timelike $n_q$: by [L6] and [L7] its image does not have compact closure in $M$, since otherwise the maximal geodesic would be extendible. Consequently $\gamma^*(t)$ does not converge to any point of $M$ as $t$ decreases to the past endpoint of its domain, so $\gamma^*$ is past-inextendible. [step 3.1, L6, L7, given]

5.1 (Past-inextendibility in the infinite-length case.) Suppose the construction gave $\gamma^*$ defined on all of $\mathbb R$, so that by step 3.1 its $h$-length in the past of $0$ is at least $n\delta$ for every $n$, hence infinite. If $\gamma^*(t)$ converged to a point $x\in M$ as $t\to-\infty$, then by [L4], applied in a chart around $x$, the $h$-length of the tail $(-\infty,t_0]$ would be finite, a contradiction. Hence $\gamma^*$ does not converge at $-\infty$, so it is past-inextendible. [step 4.1, L4, given]

6.1 (Clause (d) concluded.) In both cases the constructed curve extends $\gamma$ on $[0,\infty)$ and is past-inextendible by step 4.2 and step 5.1; it is future-inextendible because it agrees with the future-inextendible curve $\gamma$ on $[0,\infty)$, so convergence at $+\infty$ of the extension would be convergence of $\gamma$. This proves (d), and the past version follows by reversing the parametrization. [step 4.2, step 5.1, given]

7.1 (Conclusion.) Clauses (a)-(d) are steps 1.2, 1.1, 1.3 and 4.1. [step 1.1, step 1.2, step 2.1, step 6.1] ∎

## Remarks

- **What the conventions have in common.** Clause (b) shows that the causal relation defined in [[def-gr-causal-curves-and-reachability]] is unchanged if one uses the classical "locally connected by future causal geodesics" convention; clause (a) shows that every curve of the library convention fits that convention. This is the content of Minguzzi's Theorem 2.12 and Remark 2.14, proved here from the local cone theorem.

- **Not every connectible curve is locally absolutely continuous.** A continuous causal curve can be so singularly reparametrized that it has zero derivative almost everywhere, so clauses (b) and (c) replace it by a piecewise geodesic curve with the same endpoints; the parametrization itself is not a library curve. Clause (d) likewise concerns the point set and the two ends, not the parametrization.

- **Scope.** The lemma is a local-to-global convention statement inside the smooth Lorentzian model; it uses no completeness and no global causal condition.
