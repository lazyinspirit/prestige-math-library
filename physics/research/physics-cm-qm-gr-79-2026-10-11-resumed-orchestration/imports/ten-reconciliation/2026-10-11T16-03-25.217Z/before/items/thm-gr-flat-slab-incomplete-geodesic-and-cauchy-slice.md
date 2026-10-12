---
id: thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice
kind: theorem
title: "The open flat slab: an incomplete timelike geodesic, a Cauchy slice and global hyperbolicity"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, def-time-orientation-and-future-causal-sets, def-gr-smooth-lorentzian-objects, def-gr-causal-curves-and-reachability, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-embedded-submanifold-and-slice-chart, def-smooth-manifold, lem-gr-constant-component-chart-flatness, lem-gr-flat-time-monotonicity-and-lipschitz-graphs, lem-gr-maximal-geodesics-and-extension, thm-gr-minkowski-cauchy-and-global-hyperbolicity, prop-coordinate-geodesic-equation, thm-existence-and-uniqueness-of-a-maximal-ode-solution, thm-euclidean-space-complete, cor-heine-borel-in-the-product-topology, def-compact-space]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-smooth-manifold: mathematical-premise
  lem-gr-constant-component-chart-flatness: mathematical-premise
  lem-gr-flat-time-monotonicity-and-lipschitz-graphs: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-gr-minkowski-cauchy-and-global-hyperbolicity: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  cor-heine-borel-in-the-product-topology: mathematical-premise
  def-compact-space: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: global hyperbolicity, Cauchy hypersurfaces and the splitting theorem (Definition 4.117 and Theorem 4.119 printed pp. 146-147); holed spacetimes and incomplete geodesics (Theorem 4.116 printed p. 146)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): Cauchy surfaces and global hyperbolicity, section 3.2.1 printed p. 39"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the initial value formulation, domains of dependence and the Misner-space warning, printed pp. 119-127 (PDF pp. 126-134)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

For the general causal-curve conclusions (c) and (d), assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) as required by the absolutely continuous flat-curve calculus. The geometric restriction and explicit incomplete geodesic in (a)-(b) use no choice premise.

Let $A:=\mathbb R^4$ carry the flat structure $(\eta,N)$ of
[[def-gr-flat-minkowski-model-and-inertial-charts]], with global inertial
chart $x=(x^0,z)=(x^0,x^1,x^2,x^3)$, and write $e_0:=(1,0,0,0)\in A$. Put
$$M:=x^{-1}\bigl((0,1)\times\mathbb R^3\bigr)=\{p\in A:0<x^0(p)<1\},$$
an open subset of $A$, and let $g:=\eta|_M$ and $N:=\partial_0|_M$ be the
restrictions of the metric and of the time-orientation field; write $x$ also for
the restricted chart $x|_M:M\to(0,1)\times\mathbb R^3$. Then:

**(a) The slab model.** $(M,g,N)$ is a time-oriented smooth Lorentzian
four-manifold ([[def-gr-smooth-lorentzian-objects]]) whose restricted chart
$x$ has the constant components
$g_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}$; the Christoffel symbols of the
metric-selected connection vanish on $M$, the curvature of that connection
vanishes on $M$, and every coordinate curve of the chart is a geodesic
([[lem-gr-constant-component-chart-flatness]]). Every curve in $M$ is locally
absolutely continuous, future causal or future timelike for $(M,g)$ exactly
when it is so for $(A,\eta)$
([[def-gr-causal-curves-and-reachability]]).

**(b) An incomplete timelike geodesic.** Fix $z_0\in\mathbb R^3$ and let
$$\gamma:(0,1)\to M,\qquad \gamma(s):=x^{-1}(s,z_0),$$
be the vertical line through $z_0$. Then $\gamma$ is a smooth future timelike
curve and a geodesic with affine parameter $s$ and unit tangent
$\gamma'(s)=\partial_0|_{\gamma(s)}$; its velocity satisfies
$\nabla_{\gamma'}\gamma'=0$. There is no geodesic
$\tilde\gamma:(a,b)\to M$ with $b>1$ (or $a<0$) whose restriction to $(0,1)$
equals $\gamma$: the parameter interval $(0,1)$ is the maximal domain of a
geodesic with these data. Moreover $\gamma$ does not converge to any point of
$M$ as $s\to1$ (it converges in $A$ to the boundary point $x^{-1}(1,z_0)$,
which does not lie in $M$); hence $\gamma$ is future-inextendible in the
sense of [[def-gr-causal-curves-and-reachability]] clause (d) and its affine
parameter is bounded above. The model is therefore timelike geodesically
**incomplete**: it carries an inextendible future-directed timelike geodesic
whose affine parameter domain is bounded.

**(c) A Cauchy slice.** The set
$\Sigma_{1/2}:=x^{-1}(\{1/2\}\times\mathbb R^3)$ is a spacelike embedded
hypersurface of $(M,g)$ and a Cauchy set
([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clauses (a) and (c)):
every inextendible causal curve of $(M,g)$ meets it in exactly one parameter
value. Hence $\Sigma_{1/2}$ is a Cauchy hypersurface.

**(d) Global hyperbolicity.** $(M,g,N)$ is strongly causal and its causal
diamonds $J^+(p)\cap J^-(q)$, $p,q\in M$, are compact; hence it is globally
hyperbolic in the sense of
[[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c).

## Facts & Assumptions

**Given:** The flat model $(A,\eta,N)$ of [[def-gr-flat-minkowski-model-and-inertial-charts]], the slab $M=x^{-1}((0,1)\times\mathbb R^3)$ with $g=\eta|_M$ and $N=\partial_0|_M$, a point $z_0\in\mathbb R^3$, and curves in $M$ as in the claims.

[L1] The flat model: the chart $x$ is global and inertial, $\eta=\operatorname{diag}(-1,1,1,1)$ in its coordinates, $N=\partial_0$ is future unit timelike, and the cone sets of clause (f) are $C^+=\{v:v^0>|v_s|_{\mathrm e}\}$ and $\overline{C^+}=\{v:v^0\ge|v_s|_{\mathrm e}\}$ ([[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (a)-(f), [[def-time-orientation-and-future-causal-sets]]).

[L2] $M$ is an open subset of $A$, hence an open embedded submanifold with the restricted smooth structure and the restricted chart $x$; the restrictions of smooth fields and the curve class are those of $A$ read on $M$ ([[def-smooth-manifold]], [[def-embedded-submanifold-and-slice-chart]], [[def-gr-causal-curves-and-reachability]]).

[L3] In a chart with constant metric components the Christoffel symbols and curvature of the metric-selected connection vanish, and coordinate curves are geodesics ([[lem-gr-constant-component-chart-flatness]]).

[L4] For a future causal curve $u:I\to A$ of the curve class, $x^0\circ u$ is strictly increasing, $|z(u(b))-z(u(a))|_{\mathrm e}\le x^0(u(b))-x^0(u(a))$ for $a<b$, and $x^0$ is a temporal function on $A$ ([[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]] clauses (a), (b), (d)). In particular such a curve is injective and its spatial graph is $1$-Lipschitz in $x^0$.

[L5] In $A$: $q\in J^+(p)$ exactly when $q-p\in\overline{C^+}$, and $q\in I^+(p)$ exactly when $q-p\in C^+$ ([[thm-gr-minkowski-cauchy-and-global-hyperbolicity]] clause (a), [[def-time-orientation-and-future-causal-sets]]).

[L6] Cone additivity: $C^++\overline{C^+}\subseteq C^+$ and $\overline{C^+}+\overline{C^+}\subseteq\overline{C^+}$ ([[lem-gr-flat-inertial-cone-criterion-and-sums]] clause (c)). Convexity: $x(M)=(0,1)\times\mathbb R^3$ is convex, so the straight segment between two points of $M$ lies in $M$; consequently, for $p,q\in M$, the displacement vector $q-p$ lies in $\overline{C^+}$ exactly when $q\in J^+_M(p)$, and in $C^+$ exactly when $q\in I^+_M(p)$ ([[def-time-orientation-and-future-causal-sets]], [[def-gr-causal-curves-and-reachability]]).

[L7] A causal curve is future-inextendible exactly when it has no point limit in the manifold at its upper end (finite or infinite), with the dual condition at its past end ([[def-gr-causal-curves-and-reachability]] clause (d)).

[L8] Solutions of a first-order ODE with a locally Lipschitz right-hand side that agree at one parameter value agree wherever both are defined, and every initial value has a unique maximal solution ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]); the geodesic equation in a chart with vanishing Christoffel symbols is the first-order system $(\dot y,\dot v)=(v,0)$ ([[prop-coordinate-geodesic-equation]], [[lem-gr-constant-component-chart-flatness]]).

[L9] A Cauchy sequence in $\mathbb R^3$ converges ([[thm-euclidean-space-complete]]); a subset of $\mathbb R^4$ that is closed and bounded is compact ([[cor-heine-borel-in-the-product-topology]], [[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 (The slab model.) By [L2] the set $M$ is an open submanifold of $A$ with the restricted chart $x$, and the restricted fields $g=\eta|_M$ and $N=\partial_0|_M$ are smooth; the components of $g$ in the restricted chart are the constants $\operatorname{diag}(-1,1,1,1)$, and $g(N,N)=\eta(\partial_0,\partial_0)=-1<0$, so $N$ is a time orientation of $(M,g)$ and $(M,g,N)$ is a time-oriented smooth Lorentzian four-manifold. Applying [L3] to this chart gives the vanishing of the Christoffel symbols and the curvature of the metric-selected connection and the geodesic character of coordinate curves. Since $M$ is open in $A$ and $g$ restricts $\eta$, the notions of locally absolutely continuous curve, velocity and pointwise causal character agree for curves in $M$ whether read in $(M,g)$ or in $(A,\eta)$. This proves (a). [given, L1, L2, L3]

2.1 (Monotonicity and Lipschitz bounds.) Let $u:I\to M$ be a future causal curve of $(M,g)$. By (a) it is a future causal curve of $(A,\eta)$, so [L4] applies: $x^0\circ u$ is strictly increasing and $|z(u(t'))-z(u(t))|_{\mathrm e}\le x^0(u(t'))-x^0(u(t))$ for $t<t'$ in $I$, and $x^0\circ u$ is locally absolutely continuous. This is the quantitative input used below. [step 1.1, given, L4]

2.2 (Cone characterization and convexity in the slab.) By [L1] and $g=\eta|_M$, the future cones at points of $M$ are those of the chart. Since $M$ is convex in the coordinates of $x$, the straight segment between $p,q\in M$ lies in $M$; if $q-p\in C^+$ (respectively $\overline{C^+}$) the straight path $s\mapsto p+s(q-p)$ is a future timelike (respectively causal) curve in $M$ from $p$ to $q$, so $q\in I^+_M(p)$ (respectively $q\in J^+_M(p)$). Conversely a future causal curve in $M$ is one in $A$, and [L5] gives $q-p\in\overline{C^+}$ when $q\in J^+_M(p)$; for $q\in I^+_M(p)$ the strict cone membership is the same statement with $C^+$. Finally, [L6] gives $C^++\overline{C^+}\subseteq C^+$ and $\overline{C^+}+\overline{C^+}\subseteq\overline{C^+}$. [step 1.1, given, L1, L5, L6]

2.3 (The vertical geodesic, its maximal domain and inextendibility.) Let $\gamma(s):=x^{-1}(s,z_0)$ for $s\in(0,1)$. Its coordinate path is $y(s)=(s,z_0)$, so $\dot y=(1,0,0,0)$ and $\ddot y=0$; by [L3] and [L8] it is a smooth geodesic with affine parameter $s$, and its tangent $\gamma'(s)=\partial_0$ satisfies $g(\gamma',\gamma')=-1<0$, so $\gamma$ is a future timelike curve. Suppose a geodesic $\tilde\gamma:(a,b)\to M$ with $a<1/2<b$ restricts to $\gamma$ on $(0,1)$ and has $b>1$. In the chart, both coordinate paths satisfy the first-order geodesic system of [L8] with the same initial data at $s=1/2$, namely $(y,\dot y)=((1/2,z_0),(1,0,0,0))$, because the Christoffel symbols vanish; by uniqueness in [L8] the coordinate paths agree on $(a,b)$, so $\tilde\gamma(s)=x^{-1}(s,z_0)$ for $s\in(1/2,b)$. But for $s\in(1,b)$ the point $(s,z_0)$ does not lie in $x(M)=(0,1)\times\mathbb R^3$, so $\tilde\gamma$ is not defined there — a contradiction. The same argument at the past end excludes $a<0$. Hence no geodesic with these data extends the parameter interval beyond $(0,1)$. If $\gamma(s)$ converged to a point $q\in M$ as $s\to1$, then continuity of the chart coordinate $x^0$ on $M$ would give $1=\lim_{s\to1}x^0(\gamma(s))=x^0(q)<1$, a contradiction; hence $\gamma$ is future-inextendible in the sense of clause (d) of [[def-gr-causal-curves-and-reachability]], and its affine parameter is bounded above by $1$. Thus $(M,g,N)$ admits an inextendible future timelike geodesic with bounded affine domain: it is timelike geodesically incomplete. This proves (b). [step 1.1, given, L1, L3, L8]

3.1 (Range of an inextendible causal curve.) Let $u:I\to M$ be an inextendible causal curve (future-inextendible and past-inextendible). Suppose first that $u$ is future-inextendible, and put $T:=\sup\,(x^0\circ u)(I)\le1$, finite because $x^0<1$ on $M$. If $T<1$, then $x^0\circ u$ is increasing with limit $T$, and by the Lipschitz bound of step 2.1 the spatial curve $z\circ u$ is Cauchy as $t\to\sup I$: for $t,t'$ close to $\sup I$ one has $|z(u(t'))-z(u(t))|_{\mathrm e}\le|x^0(u(t'))-x^0(u(t))|\to0$. By [L9] it converges to some $z_\infty\in\mathbb R^3$; hence $u(t)\to q:=x^{-1}(T,z_\infty)$ as $t\to\sup I$, and $q\in M$ because $T<1$ and $T\ge x^0(u(t_0))>0$ for any fixed $t_0\in I$. This point limit contradicts future-inextendibility directly by [L7]. Hence $T=1$. The past argument is the time reverse and gives $\inf\,(x^0\circ u)(I)=0$; so $x^0\circ u$ is a strictly increasing continuous function on the interval $I$ whose image has infimum $0$ and supremum $1$ and contains neither endpoint (all values lie in $(0,1)$). Therefore its image is exactly the interval $(0,1)$, and for every $c\in(0,1)$ there is exactly one $t\in I$ with $x^0(u(t))=c$: existence by surjectivity, uniqueness by strict monotonicity. [step 2.1, given, L4, L7, L9]

3.2 (Strong causality.) Let $p\in M$ and let $U\subseteq M$ be an open neighborhood of $p$. Choose $0<\varepsilon<\min\bigl(x^0(p),\,1-x^0(p)\bigr)$ so small that the open set $V:=\{q\in M:p-\varepsilon e_0\ll_M q\ll_M p+\varepsilon e_0\}$ is contained in $U$; this is possible because $V$ shrinks to $\{p\}$ as $\varepsilon\downarrow0$ (in the chart it is an open double cone around $p$ intersected with $M$). By the choice of $\varepsilon$, the points $p\pm\varepsilon e_0$ lie in $M$. Let $\gamma:[a,b]\to M$ be a future causal curve with $\gamma(a),\gamma(b)\in V$ and let $a<t<b$. Since $\gamma|_{[a,t]}$ and $\gamma|_{[t,b]}$ are future causal curves, step 2.2 gives $\gamma(t)-\gamma(a)\in\overline{C^+}$ and $\gamma(b)-\gamma(t)\in\overline{C^+}$; since $\gamma(a)\in V$, step 2.2 gives $\gamma(a)-(p-\varepsilon e_0)\in C^+$, and by [L6] $\gamma(t)-(p-\varepsilon e_0)=\bigl(\gamma(a)-(p-\varepsilon e_0)\bigr)+\bigl(\gamma(t)-\gamma(a)\bigr)\in C^+$. Similarly $(p+\varepsilon e_0)-\gamma(b)\in C^+$ and $(p+\varepsilon e_0)-\gamma(t)=\bigl((p+\varepsilon e_0)-\gamma(b)\bigr)+\bigl(\gamma(b)-\gamma(t)\bigr)\in C^+$. By the convexity and cone characterization of step 2.2, $p-\varepsilon e_0\ll_M\gamma(t)\ll_M p+\varepsilon e_0$, that is $\gamma(t)\in V$. Hence no future causal curve leaves $V$ and later re-enters it, and $(M,g,N)$ is strongly causal. [step 2.2, given, L6]

3.3 (Compactness of the causal diamonds.) Let $p,q\in M$. By the cone characterization of step 2.2, $$J^+_M(p)\cap J^-_M(q)=\{r\in M:r-p\in\overline{C^+},\ q-r\in\overline{C^+}\}.$$ The corresponding set $K:=\{r\in\mathbb R^4:r-p\in\overline{C^+},\ q-r\in\overline{C^+}\}$ in the chart is closed (the cone is closed) and bounded with $x^0(r)\in[x^0(p),x^0(q)]\subset(0,1)$; hence $K$ is a compact subset of $\mathbb R^4$ by [L9] and, being contained in the open box $x(M)$, it is a compact subset of $x(M)\cong M$. Therefore the diamond $x^{-1}(K)=J^+_M(p)\cap J^-_M(q)$ is compact in $M$. [step 2.2, given, L9]

4.1 (The Cauchy slice.) The set $\Sigma_{1/2}=x^{-1}(\{1/2\}\times\mathbb R^3)$ is the level set of the chart coordinate $x^0$ at a regular value, hence an embedded three-dimensional submanifold with a slice chart given by $x$; its tangent space is spanned by $\partial_1,\partial_2,\partial_3$ with $g(\partial_i,\partial_j)=\delta_{ij}>0$, so it is spacelike. By step 3.1 every inextendible causal curve of $(M,g)$ has $x^0$-range exactly $(0,1)$ and meets the level $x^0=1/2$ in exactly one parameter value; by clause (c) of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] this says that $\Sigma_{1/2}$ is a Cauchy set, and with the first part a Cauchy hypersurface. This proves (c). [step 3.1, given, L1]

5.1 (Conclusion.) Part (a) is step 1.1, part (b) is step 2.3, part (c) is step 4.1. By steps 3.2 and 3.3 the model is strongly causal and all its causal diamonds are compact, which is global hyperbolicity in the sense of clause (c) of [[def-gr-causal-conditions-and-global-hyperbolicity]]; this is (d). The same model is timelike geodesically incomplete by (b), so in this class global hyperbolicity does not imply geodesic completeness. [step 1.1, step 2.3, step 3.2, step 3.3, step 4.1, given] ∎

## Remarks

- **What the model shows.** The open slab is flat, time-oriented and globally hyperbolic, yet incomplete: the vertical lines leave the slab at the absent boundaries $x^0=0$ and $x^0=1$ after finite affine parameter. Geodesic completeness and global hyperbolicity are logically independent conditions on this class of models.
- **What the model does not show.** The slab is an open submanifold of the flat model of [[def-gr-flat-minkowski-model-and-inertial-charts]], not an inextendible spacetime: the incomplete geodesics end at the boundary of the region on which the model is posed. The theorem asserts nothing about singularity formation, curvature blow-up or the field equation; in fact the curvature vanishes identically on $M$.
