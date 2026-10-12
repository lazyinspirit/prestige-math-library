---
id: lem-gr-push-up-rule
kind: lemma
title: "The push-up rule: p << q and q <= r imply p << r, together with the timelike-piece criterion"
status: draft
origin: session
domain: mathematics
dependency_level: 19
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, lem-gr-chronology-openness, lem-gr-joint-exponential-diffeomorphism, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, def-gr-normal-neighborhoods-and-position-vectors, thm-gr-local-geodesics-and-exponential-map, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, lem-gr-observer-pairing-with-future-causal-vectors, def-gr-observer-and-rest-space, lem-gr-causal-curve-calculus, lem-gr-parallel-transport-and-geodesic-speed, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds, lem-gr-convex-normal-causality]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  lem-gr-convex-normal-causality: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Lemma 2.4.14 (push-up lemma I+) and Corollary 2.4.19 with proof, printed pp. 26-28; Proposition 2.2.3 and Definition 2.2.7 (elementary regions) printed pp. 8-13"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the chronological relation as an open subset of M x M (section 4.2 printed pp. 111-118) and Theorem 2.11 printed p. 28"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) with metric-selected connection
$\nabla$ and the relations $\ll$, $\le$ of
[[def-gr-causal-curves-and-reachability]]. Then:

**(a)** if $p\ll q$ and $q\le r$, then $p\ll r$;

**(b)** if $p\le q$ and $q\ll r$, then $p\ll r$;

**(c)** if $\gamma:[a,b]\to M$ is a future causal curve and there are
$a\le s<t\le b$ such that $\gamma|_{[s,t]}$ is a future timelike curve, then
$\gamma(a)\ll\gamma(b)$;

**(d)** consequently
$$I^+\bigl(J^+(\Omega)\bigr)=I^+(\Omega),\qquad I^-\bigl(J^-(\Omega)\bigr)=I^-(\Omega)$$
for every $\Omega\subseteq M$, and dually
$J^+\bigl(I^+(\Omega)\bigr)=I^+(\Omega)$.

No choice principle is used.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, points $p,q,r\in M$ with $p\ll q$ and $q\le r$, and a future causal curve $\gamma:[0,1]\to M$ with $\gamma(0)=q$, $\gamma(1)=r$.

[L1] $p\ll q$ means that there are $a<b$ and a future timelike curve $\lambda:[a,b]\to M$ with $\lambda(a)=p$, $\lambda(b)=q$; $q\le r$ means $q=r$ or that there is a future causal curve from $q$ to $r$; the relation $\le$ is reflexive and transitive and $p\ll q$ implies $p\le q$; concatenations of finitely many future causal (respectively future timelike) curves are future causal (respectively future timelike) ([[def-gr-causal-curves-and-reachability]], [[lem-gr-causal-curve-calculus]] clauses (d) and (f)).

[L2] For every $x\in M$ the set $I^+(x)$ is open in $M$ and the set $\{(y,z):y\ll z\}$ is open in $M\times M$ ([[lem-gr-chronology-openness]] clauses (a) and (b)).

[L3] For every $x$ and every open $O\ni x$ there are a chart $(U,\xi)$ with $\xi(x)=0$, a radius $r_0>0$ and a strictly convex normal set $C=\xi^{-1}(B_{r_0})\subseteq O$ such that for every $q_1\in C$ the exponential $\exp_{q_1}$ maps an open star-shaped $W_{q_1}$ diffeomorphically onto $C$, the unique geodesic segment in $C$ joins any two points of $C$, and $\exp_{q_1}^{-1}:C\to W_{q_1}$ is smooth; the joint inverse $(q_1,q_2)\mapsto\exp_{q_1}^{-1}(q_2)$ is smooth on a neighborhood of the diagonal ([[thm-gr-convex-normal-neighborhoods]] clauses (a)-(c), [[lem-gr-joint-exponential-diffeomorphism]] clauses (c) and (d), [[def-gr-normal-neighborhoods-and-position-vectors]] clauses (a)-(c)).

[L4] Cone theorem. In the strictly convex normal set $C$ of [L3] with base point $x_1\in C$, every future causal curve $\beta:[a,b]\to C$ with $\beta(a)=x_1$ has future causal or zero position vector $\exp_{x_1}^{-1}(\beta(b))$ at $x_1$; if $\exp_{x_1}^{-1}(y)$ is future timelike then $x_1\ll y$; conversely $y\in I_C^+(x_1)$ (the chronological future computed inside $C$) implies that $\exp_{x_1}^{-1}(y)$ is future timelike ([[thm-gr-normal-neighborhood-causal-cone]] clause (a) and [[lem-gr-convex-normal-causality]] clause (a)).

[L5] Along the maximal geodesic $t\mapsto\exp_{x_1}(tw)$ the tangent $\gamma'$ is the parallel transport of $w$, so its causal character and time orientation are constant; in particular for a past timelike $w$ the reversed segment $\tau\mapsto\exp_{x_1}((1-\tau)w)$, $\tau\in[0,1]$, is a future timelike curve joining $\exp_{x_1}(w)$ to $x_1$ ([[lem-gr-parallel-transport-and-geodesic-speed]] clause 3, [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d), [[def-gr-causal-curves-and-reachability]] clause (b), [[lem-gr-causal-curve-calculus]] clause (c)).

[L6] Vector algebra. Let $n$ be a future unit timelike vector of a Lorentzian vector space $(V,G)$, so that $G(n,n)=-1$, and let $v\in V$ be future causal or zero, with $\alpha:=-G(v,n)\ge0$. Then for every $\varepsilon>0$ the vector $v_{\mathrm{lin}}:=(1+\varepsilon)v+\varepsilon n$ satisfies
$$-G(v_{\mathrm{lin}},v_{\mathrm{lin}})\ge 2\varepsilon\alpha+\varepsilon^2, \qquad -G(v_{\mathrm{lin}},n)\ge\varepsilon .$$
Moreover $\alpha>0$ whenever $v\ne0$, and for $v\ne0$ the number $\alpha$ is comparable to any fixed Euclidean norm on $V$ restricted to the compact cone: with $|\cdot|_{\mathrm e}$ the Euclidean norm of a fixed basis in which $G(n,n)=-1$ and the future causal cone is the standard one, there is $\lambda>0$ with $\alpha\ge\lambda|v|_{\mathrm e}$ for every future causal $v$. (Expansions from [[lem-gr-observer-pairing-with-future-causal-vectors]] clause 1, [[def-gr-observer-and-rest-space]], [[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]].)

[L7] Smooth remainder estimate. Fix a chart $(U,\xi)$ around a point $x_1$ and denote by $|\cdot|_{\mathrm e}$ the Euclidean norm of $\mathbb R^4$-components; put $F(a,v):=\xi_*\bigl(\exp_{\xi^{-1}(\xi(x_1)+a)}^{-1}\bigl(\xi^{-1}(\xi(x_1)+v)\bigr)\bigr)$ for the chart coordinates of the joint inverse, with $F$ defined for $|a|_{\mathrm e},|v|_{\mathrm e}$ small and $F(0,0)=0$. Then $F$ is smooth, $DF_{(0,0)}(\dot a,\dot v)=\dot v-\dot a$, and there is a modulus function $\omega:[0,\infty)\to[0,\infty)$ (nondecreasing, continuous at $0$, $\omega(0)=0$) with
$$|F(a,v)-(v-a)|_{\mathrm e}\le\omega(t)\,t,\qquad t:=\max\{|a|_{\mathrm e},|v|_{\mathrm e}\},$$
whenever $F$ is defined on the pair $(a,v)$; the metric component functions $g_{\mu\nu}(z)$ also vary continuously, so on such a region $|g_{\mu\nu}(z)-g_{\mu\nu}(0)|\le\omega(t)$ with the same type of modulus. ([[lem-gr-joint-exponential-diffeomorphism]] clauses (b) and (c), [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-continuity-real]].)

## Proof

**Proof technique:** direct.

1.1 (Reduction.) Since $q\le r$, either $q=r$, and then $p\ll q=p\ll r$ is (a), or there is a future causal curve $\gamma:[0,1]\to M$ with $\gamma(0)=q$ and $\gamma(1)=r$; fix it. It suffices to show $p\ll\gamma(1)$. Since $I^+(p)$ is open and contains $q$ ([L2], because $p\ll q$), the set $I^+(p)\cap O$ is a neighborhood of $q$ for every open $O\ni q$; choose $O$ a strictly convex normal set around $q$ from [L3] and define $$S:=\{s\in[0,1]:p\ll\gamma(s)\}.$$ Then $0\in S$, and $S$ is open in $[0,1]$ because $I^+(p)$ is open and $\gamma$ is continuous. It remains to prove $S=[0,1]$. [given, L1, L2, L3]

1.2 (Linear algebra at a base point.) Fix a point $x_1\in M$ and let $n:=N_{x_1}$ be the future unit timelike value of the field $N$ at $x_1$ ([[def-gr-observer-and-rest-space]]). For a future causal or zero $v\in T_{x_1}M$ put $\alpha:=-g(v,n)$ and $v_{\mathrm{lin}}:=(1+\varepsilon)v+\varepsilon n$ for a parameter $\varepsilon\in(0,1)$. Since $g(v,v)\le0$ and $g(n,n)=-1$, expanding $$g(v_{\mathrm{lin}},v_{\mathrm{lin}})=(1+\varepsilon)^2g(v,v)+\varepsilon^2g(n,n)+2\varepsilon(1+\varepsilon)g(v,n)$$ gives $$-g(v_{\mathrm{lin}},v_{\mathrm{lin}})=(1+\varepsilon)^2(-g(v,v))+2\varepsilon(1+\varepsilon)\alpha+\varepsilon^2\ge 2\varepsilon\alpha+\varepsilon^2>0,$$ and $-g(v_{\mathrm{lin}},n)=(1+\varepsilon)\alpha+\varepsilon\ge\varepsilon$; moreover $g(v,n)\le0$ with equality only for $v=0$ because a nonzero vector orthogonal to a timelike vector is spacelike, so $v_{\mathrm{lin}}$ is future timelike whenever $v\ne0$, and $g(\varepsilon n,n)<0$ when $v=0$. This is the quantitative form of [L6] used below, with $\lambda$ the cone-comparison constant of [L6]. [L6, algebra]

2.1 (The local estimate.) Fix $x_1$, a chart $(U,\xi)$ around $x_1$, the Euclidean norm $|\cdot|_{\mathrm e}$, the cone constant $\lambda$ of [L6] and the modulus $\omega$ of [L7], both computed on a fixed chart ball. There are constants $\delta_0>0$ and $\eta_0\in(0,1)$ such that: for every nonzero future causal $v\in T_{x_1}M$ with $|v|_{\mathrm e}\le\delta_0$, writing $\varepsilon:=\eta_0|v|_{\mathrm e}$, $a:=-\varepsilon(v+n)$, $x':=\exp_{x_1}(a)$, $y:=\exp_{x_1}(v)$ and $w:=\exp_{x'}^{-1}(y)$, the vector $w$ is future timelike, so that $x'\ll y$. Indeed $v-a=(1+\varepsilon)v+\varepsilon n=:q_*$, and the vector $(1+\varepsilon)v$ is future causal because the future causal cone is convex and closed ([[lem-timelike-cone-has-two-convex-components]], [[lem-gr-observer-pairing-with-future-causal-vectors]]), so by step 1.2 $$-g(q_*,q_*)\ge2\varepsilon\alpha+\varepsilon^2,\qquad -g(q_*,n)\ge\varepsilon,\qquad \alpha:=-g(v,n)\ge\lambda|v|_{\mathrm e}.$$ In the chart $w=F(a,v)=q_*+r$ with $|r|_{\mathrm e}\le\omega(t)t$ and $t:=\max\{|a|_{\mathrm e},|v|_{\mathrm e}\}$, and $t\le\varepsilon(|v|_{\mathrm e}+1)+|v|_{\mathrm e}\le3|v|_{\mathrm e}$ for $\eta_0\le1$, $|v|_{\mathrm e}\le1$; the chart components and the metric components of $g_{x'}$ differ from their values at $x_1$ by at most $\omega(t)$ ([L7]), and $|q_*|_{\mathrm e}\le|v|_{\mathrm e}+\varepsilon(|v|_{\mathrm e}+1)\le3|v|_{\mathrm e}$. Hence $|g_{x'}(w,w)-g(q_*,q_*)|\le C_0\,\omega(3|v|_{\mathrm e})\,|v|_{\mathrm e}^2$ for a constant $C_0$ depending only on the chart ball, and by the two displayed inequalities $-g_{x'}(w,w)\ge\varepsilon^2-C_0\,\omega(3|v|_{\mathrm e})|v|_{\mathrm e}^2\ge\varepsilon^2/2>0$ and $-g_{x'}(w,n)\ge\varepsilon/2>0$ once $\delta_0$ is chosen with $C_0\omega(3\delta_0)\le\eta_0^2/2$ and $\delta_0\le1$; then $w$, equivalently $\exp_{x'}^{-1}(y)$, is future timelike with respect to $g_{x'}$, and [L4] gives $x'\ll y$. [step 1.2, L3, L4, L5, L6, L7, algebra, choose]

3.1 (The local step, with bounds uniform over the arc.) We show: there is $\delta>0$ such that for every $s_0\in S$ with $s_0+\delta\le1$ one has $[s_0,s_0+\delta]\subseteq S$. The construction of step 2.1 depends on the base point $x_1$, the chart around it, the cone constant $\lambda$ of [L6] and the modulus $\omega$ of [L7] restricted to a relatively compact region; choosing a finite cover of the compact arc $\gamma([0,1])$ by strictly convex normal sets $C_j$ from [L3], all these quantities can be bounded uniformly on each $C_j$ (finitely many sets, and on each the cone structure and the joint inverse vary continuously). Since $I^+(p)$ is open and $\gamma([s_0,s_0+\delta''])\subseteq C_j$ for $s_0\in S$ has $C_j\subseteq I^+(p)$ whenever the cover is chosen within $I^+(p)$ along the arc (each point of the arc lies in $I^+(p)$ by definition of $S$ along the sub-arc of $[0,1]$ covered so far; we cover the arc by sets $C_j\subseteq I^+(p)$, possible because $I^+(p)$ is open and the arc is compact), there is a uniform $\rho>0$ such that for every $j$ and every $x\in C_j$ the $\xi_j$-ball of radius $\rho$ around $x$ lies in $C_j\cap I^+(p)$. Choose $\delta''>0$ a Lebesgue number of the pulled-back cover $\{\gamma^{-1}(C_j)\}$ of $[0,1]$ and shrink it so that for all $s$ with $s+\delta''\le1$ the chart displacement $|x(\gamma(s'')-x(\gamma(s)))|_{\mathrm e}$ is at most $\min\{\delta_0,\rho\}/4$ for all $s''\in[s,s+\delta'']$, where $\delta_0$ is the constant of step 2.1. Now fix $s_0\in S$ and $j$ with $\gamma([s_0,s_0+\delta''])\subseteq C_j$. For each $s\in(s_0,s_0+\delta'']$ put $x_1:=\gamma(s_0)$, $v:=\exp_{x_1}^{-1}(\gamma(s))\in T_{x_1}M$ (defined since $\gamma(s)\in C_j$ and $\exp_{x_1}:W_{x_1}\to C_j$ is a diffeomorphism, [L3]); $v$ is future causal or zero by [L4] applied to the subarc $\gamma|_{[s_0,s]}$, and nonzero because a causal curve is not constant on a nondegenerate interval ([[def-gr-causal-curves-and-reachability]] clause (b)). Set $\varepsilon:=\eta_0|v|_{\mathrm e}$ and $x':=\exp_{x_1}(-\varepsilon(v+N_{x_1}))$; the estimate of step 2.1 gives $x'\ll\gamma(s)$, and $x'$ lies in the $\xi$-ball of radius $\rho$ around $x_1$, hence $p\ll x'$; therefore $p\ll x'\ll\gamma(s)$ and $s\in S$. Since $s_0\in S$ by hypothesis, $[s_0,s_0+\delta'']\subseteq S$; take $\delta:=\delta''$. [step 2.1, L2, L3, L4, given, construct]

4.1 (Conclusion of (a).) By step 3.1 every $s_0\in S$ with $s_0+\delta\le1$ satisfies $s_0+\delta\in S$, and $[s_0,s_0+\delta]\subseteq S$. Starting from $0\in S$ and iterating, $[0,n\delta]\subseteq S$ for every $n$ with $n\delta\le1$, hence $[0,1]\subseteq S$; in particular $1\in S$, that is, $p\ll\gamma(1)=r$. This is (a). [step 1.1, step 3.1, given]

5.1 (Clause (b).) Consider the time reverse: $(M,g,-N)$ is again a time-oriented smooth Lorentzian four-manifold, its chronological and causal relations are the reverse relations $\ll^{\mathrm{rev}}=\{(x,y):y\ll x\}$ and $\le^{\mathrm{rev}}=\{(x,y):y\le x\}$, and every object used in the proof of (a) is defined by the same formulas with $N$ replaced by $-N$. Suppose $p\le q$ and $q\ll r$; in the reversed orientation $r\ll^{\mathrm{rev}}q$ and $q\le^{\mathrm{rev}}p$, so (a) applied in the reversed orientation gives $r\ll^{\mathrm{rev}}p$, that is, $p\ll r$. [step 4.1, given, construct]

6.1 (Clause (c).) Let $\gamma$ and $s<t$ be as in (c). The subcurve $\gamma|_{[s,t]}$ is a future timelike curve, so $\gamma(s)\ll\gamma(t)$ by definition; the segment $\gamma|_{[a,s]}$ gives $\gamma(a)\le\gamma(s)$, and clause (b) yields $\gamma(a)\ll\gamma(t)$; the segment $\gamma|_{[t,b]}$ gives $\gamma(t)\le\gamma(b)$, and clause (a) yields $\gamma(a)\ll\gamma(b)$. [step 4.1, step 5.1, given, L1]

7.1 (Clause (d).) Let $\Omega\subseteq M$ and $z\in I^+(J^+(\Omega))$: there is $y\in J^+(\Omega)$ and $x\in\Omega$ with $x\le y$ and $y\ll z$. Then $x\ll z$ by (a), so $z\in I^+(\Omega)$; the reverse inclusion is trivial because $x\le y$ for $y=x$. This proves the first identity, the second is its time reverse, and $J^+(I^+(\Omega))=I^+(\Omega)$ follows from the same argument with $x\ll y$, $y\le z$. [step 4.1, step 5.1, given] ∎

## Remarks

- **What the proof uses.** Only the openness of chronology, the convex normal neighbourhood cone description, the smooth joint inverse exponential with its first-order differential, and one elementary cone computation. No completeness, no choice principle and no global causal condition is used; the argument is equally valid for every smooth Lorentzian manifold of dimension at least two.

- **Use.** Clause (a) is the input that makes the chronological volume function strictly monotone in [[thm-gr-volume-time-function]], and clause (c) is used in [[thm-gr-cauchy-surface-implies-globally-hyperbolic]] to convert the closure of the causal relation into a chronological relation between two points of a Cauchy set.

- **The local estimate is quantitative because the base point moves.** Step 2.2 controls the joint inverse up to second order at a fixed base point; step 3.1 isolates the constants on a compact arc so that the same increment $\delta$ works at every point of $S$. This is the point at which the proof would fail if only local cone axioms were available without a uniform moduli-of-continuity bound.
