---
id: lem-gr-locally-finite-shell-sum
kind: lemma
title: "Weak steps: locally finite sums of cone bumps give a smooth step around each Cauchy level with past timelike gradient near the level"
status: draft
origin: session
domain: mathematics
dependency_level: 27
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: constructive
deps: [def-dependent-choice, thm-gr-volume-time-function, lem-gr-cone-bump-functions, lem-gr-cauchy-set-topology-and-graph, lem-gr-compact-future-cone-intersections, thm-gr-auxiliary-complete-riemannian-metric, def-riemannian-distance-on-a-connected-manifold, thm-riemannian-distance-is-a-metric, prop-components-of-a-topological-manifold-are-open-and-at-most-countable, def-metric-ball, thm-metric-compactness-equivalences, def-compact-space, lem-gr-globally-hyperbolic-causal-structure, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, thm-gr-local-geodesics-and-exponential-map, lem-gr-maximal-geodesics-and-extension, lem-gr-parallel-transport-and-geodesic-speed, cor-intermediate-value-theorem-topological, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, thm-chain-rule-for-total-derivatives, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-gr-inverse-metric-and-musical-isomorphisms, def-the-standard-flat-function, thm-the-standard-flat-function-is-smooth-and-flat-at-zero, thm-continuous-implies-integrable, thm-monotonicity-of-the-integral, thm-ftc-first-part, thm-algebra-of-derivatives, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, def-countable-choice]
dependency_roles:
  def-dependent-choice: mathematical-premise
  thm-gr-volume-time-function: mathematical-premise
  lem-gr-cone-bump-functions: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  lem-gr-compact-future-cone-intersections: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  thm-riemannian-distance-is-a-metric: mathematical-premise
  prop-components-of-a-topological-manifold-are-open-and-at-most-countable: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  def-compact-space: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  cor-intermediate-value-theorem-topological: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-the-standard-flat-function: mathematical-premise
  thm-the-standard-flat-function-is-smooth-and-flat-at-zero: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-a-locally-finite-sum-of-smooth-functions-is-smooth: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "A. N. Bernal and M. Sanchez, Smoothness of time functions and the metric splitting of globally hyperbolic spacetimes (arXiv:gr-qc/0401112), Lemmas 3.7-3.8 and Proposition 3.6, printed pp. 5-6: local sums and the weak-step quotient."
      url: "https://arxiv.org/pdf/gr-qc/0401112"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]) for the actual volume-time and causal suppliers. Let $(M,g,N)$ be a globally hyperbolic
time-oriented smooth Lorentzian four-manifold
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)), let $t$
be the volume time function of [[thm-gr-volume-time-function]] with Cauchy
levels $S_c=t^{-1}(c)$, and let $a<b<c$ be real numbers. Then there is a
smooth function $\tau:M\to[-1,1]$ such that

**(a)** $\tau=-1$ on $\{t\le a\}$;

**(b)** $\tau=+1$ on $\{t\ge c\}$;

**(c)** $\nabla\tau$ is past causal or zero at every point of $M$: with the
gradient of [[def-gr-inverse-metric-and-musical-isomorphisms]] one has
$g(\nabla\tau,\nabla\tau)\le0$ and $d\tau(N)=g(\nabla\tau,N)\ge0$;

**(d)** $\nabla\tau$ is past timelike at every point of $S_b$ and hence, by
continuity, on an open neighborhood of $S_b$: $g(\nabla\tau,\nabla\tau)<0$
and $g(\nabla\tau,N)>0$ there.

The function $\tau$ is a **weak step** around the level $b$: it moves from
the value $-1$ below the inner level $a$ to the value $+1$ above the outer
level $c$, with a timelike gradient near $S_b$ and a causal-or-zero gradient
everywhere.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice; A globally hyperbolic $(M,g,N)$, its volume time $t$ with Cauchy levels $S_c$, and real numbers $a<b<c$.

[L1] $t$ is continuous and strictly increasing along causal relations; every level $S_c$ is a Cauchy set, hence acausal and closed; $J^-(S_b)=\{t\le b\}$ and $I^+(S_a)=\{t>a\}$; along every inextendible future-directed causal curve $t\to+\infty$ and along every inextendible past-directed causal curve $t\to-\infty$ ([[thm-gr-volume-time-function]] clauses (a)-(d), [[lem-gr-compact-future-cone-intersections]], [[lem-gr-cauchy-set-topology-and-graph]]).

[L2] Cone bumps: for every $p\in S_b$, every prescribed $\delta>0$ and every open neighborhood $O$ of $p$ (in particular one contained in $\{t<c\}$) there are $p'\ll p$, a strictly convex normal neighborhood $C\subseteq O$ of $p$ with $\overline C$ compact, $\overline C\subseteq\{t>a\}$ and $\operatorname{diam}_{h'}(C)<\delta$ (where $h'$ is the Riemannian metric of [L3]), and a smooth $h_p:M\to[0,\infty)$ with compact support in $C$, $h_p(p)=1$ and $\{h_p>1/2\}$ a neighborhood of $p$, whose gradient is past timelike at every point of $\{h_p>0\}\cap\{t\le b\}$ and whose gradient vanishes at every point of $\{t\le b\}$ where $h_p=0$ ([[lem-gr-cone-bump-functions]]).

[L3] Complete auxiliary metric ([[thm-gr-auxiliary-complete-riemannian-metric]] clauses (b)-(d), [[def-riemannian-distance-on-a-connected-manifold]], [[thm-riemannian-distance-is-a-metric]], [[def-metric-ball]]): there is a smooth Riemannian metric $h'$ on $M$ whose Riemannian distance $d_{h'}$ is a metric on each connected component and makes each component complete; every subset of a component that is closed in the component and $d_{h'}$-bounded is compact, and the metric balls $B_R=\{q:d_{h'}(q,m_0)<R\}$ are open. The connected components of $M$ are open and at most countable ([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]); compactness of subsets is equivalent for the metric and the manifold topology ([[thm-metric-compactness-equivalences]], [[def-compact-space]]).

[L4] Finite and locally finite sums: a finite sum of smooth functions is smooth and the sum of a locally finite family of smooth functions is smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L5] Cone algebra in each tangent space: the past timelike vectors form an open convex set $T_-$, closed under positive multiples, and the past causal vectors together with $0$ form its closure $\operatorname{cl}(T_-)=\{v:v^0\le-|v_{\mathrm{vec}}|\}$ in any orthonormal basis; hence a finite sum of vectors each of which is past timelike or $0$ is past timelike or $0$, and it is past timelike unless every summand is $0$ (convexity gives $(v+w)/2\in T_-$ for $v,w\in T_-$, and then $v+w=2\bigl((v+w)/2\bigr)\in T_-$ because $T_-$ is closed under positive multiples; induction over the finitely many nonzero summands) ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]). The past timelike cone is open in the tangent space, so by continuity of a gradient field a point where the gradient is past timelike has a whole neighborhood with that property ([[def-continuity-real]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L6] Timelike geodesics hit every level: through every point $x$ there is a future-directed timelike geodesic $\gamma:J\to M$ on its open maximal affine interval $J$ with $\gamma(0)=x$, and $t(\gamma(s))\to+\infty$ as $s\to\sup J$; conversely an inextendible past-directed timelike geodesic has $t\to-\infty$ at its corresponding parameter end ([[def-gr-observer-and-rest-space]], [[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-maximal-geodesics-and-extension]], [[lem-gr-parallel-transport-and-geodesic-speed]], [L1]). A continuous function on a connected interval that tends to $-\infty$ and $+\infty$ at the two ends attains every real value ([[cor-intermediate-value-theorem-topological]]).

[L7] Plateau functions: the standard flat function $\psi$ is smooth with all derivatives vanishing at $0$ ([[def-the-standard-flat-function]], [[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]). For $\beta(u):=\psi(u)\psi(1/2-u)$ one has $\beta\ge0$, $\beta>0$ on $(0,1/2)$, $\beta=0$ outside $[0,1/2]$, and $\beta$ flat at $0$ and $1/2$; $\beta$ is continuous, hence Riemann integrable on $[0,1/2]$ ([[thm-continuous-implies-integrable]]), and $A:=\int_0^{1/2}\beta>0$ by monotonicity of the integral applied to $\beta\ge\tfrac12\beta(1/4)>0$ on a nondegenerate subinterval ([[thm-monotonicity-of-the-integral]]). The primitive $u\mapsto\int_0^u\beta$ is differentiable with derivative $\beta$ ([[thm-ftc-first-part]]) and flat at $0$ and at $1/2$ since every derivative of the primitive is a derivative of $\beta$ at the corresponding point; sums, products and quotients with nonvanishing denominators of smooth functions are smooth and the chain rule holds ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** constructive.

1.1 (The open past of a level is the sublevel set.) We prove $\{t<b\}=I^-(S_b)$. If $t(q)<b$, let $\gamma:J\to M$ be the inextendible future-directed timelike geodesic on its open maximal affine interval through $q$ with $\gamma(0)=q$; by [L6] the continuous function $s\mapsto t(\gamma(s))$ takes values tending to $-\infty$ (past end) and $+\infty$ (future end), so there is $s_0>0$ with $t(\gamma(s_0))=b$, i.e. $\gamma(s_0)\in S_b$, and $q=\gamma(0)\ll\gamma(s_0)$ because the geodesic is future timelike, so $q\in I^-(S_b)$. Conversely if $q\ll s\in S_b$ then $q\ne s$ and strict monotonicity [L1] gives $t(q)<t(s)=b$. Hence $\{t<b\}=I^-(S_b)$, which is open, and $S_b=\{t=b\}$ is closed [L1]; moreover $J^-(S_b)=\{t\le b\}=\{t<b\}\cup S_b$. [L1, L6, given]

1.2 (A locally finite family of cone bumps.) For each connected component $M_\alpha$ of $M$ fix a base point $m_\alpha$ and write $B^\alpha_R:=\{q\in M_\alpha:d_{h'}(q,m_\alpha)<R\}$; the components are open and at most countable [L3], so $\mathrm{AC}_\omega$ selects the base points. Since $S_b$ is closed and meets only countably many components, and each $S_b\cap M_\alpha$ is covered by the shells $A^\alpha_m:=S_b\cap(\overline{B^\alpha_m}\setminus B^\alpha_{m-1})$, $m\ge1$ (with $B^\alpha_0:=\emptyset$), which are closed in $M_\alpha$ and $d_{h'}$-bounded hence compact [L3], we obtain: $S_b=\bigcup_{\alpha,m}A^\alpha_m$ with each $A^\alpha_m$ compact. For each shell consider all admissible tuples $(x,C,h)$ supplied by [L2], with $x\in A^\alpha_m$ and $\operatorname{diam}_{h'}(C)<1$. Their sets $\{h>1/2\}$ cover the shell, because a tuple exists at every center. Compactness supplies a finite list of tuples covering each shell; Countable Choice selects one such finite list for each of the countably many shells. Index every selected tuple separately, retaining repetitions of a center, by a countable index set $F$, and write its data as $(x_j,C_j,h_j)$ for $j\in F$. The family $\{C_j\}_{j\in F}$ is locally finite: if a tuple from shell $A^\alpha_m$ has $C_j\cap B^\alpha_R\ne\varnothing$, then $x_j\in C_j$ and its diameter is less than one, so $d_{h'}(x_j,m_\alpha)<R+1$. Since the center is in that shell, $m<R+2$. Only finitely many shells satisfy this bound in a fixed component, and each supplied finitely many tuples. Components are open, so this proves local finiteness everywhere. Define $h^+:=\sum_{j\in F}h_j$, smooth by [L4]. It is nonnegative, zero on $\{t\le a\}$, and greater than $1/2$ on $S_b$. At a point $q\in\{h^+>0\}\cap\{t\le b\}$ only finitely many terms contribute. Each gradient is past timelike or zero by [L2], and some term is positive and therefore has a past timelike gradient. Their sum is past timelike by [L5]. [L2, L3, L4, L5, given, choose]

1.3 (The plateau function.) Define $\beta$ and $A>0$ as in [L7] and set $$\varphi(u):=\begin{cases}0,&u\le0,\\ -1+\dfrac1A\displaystyle\int_u^{1/2}\beta(s)\,ds,&0<u<\dfrac12,\\ -1,&u\ge\dfrac12.\end{cases}$$ By [L7] the function $\varphi$ is smooth, $\varphi=0$ on $(-\infty,0]$, $\varphi=-1$ on $[1/2,\infty)$, $-1\le\varphi\le0$, $\varphi'\le0$ everywhere and $\varphi'<0$ on $(0,1/2)$; moreover $\varphi$ is flat at $0$ and at $1/2$. [L7, construct]

2.1 (A neighborhood of the level.) Put $W:=\{q:h^+(q)>1/2,\ \nabla h^+(q)\text{ is past timelike},\ t(q)<c\}$. This set is open by continuity and the open timelike cone, and contains $S_b$ by step 1.2. On $W$ the inequalities and gradient property hold by definition; no point-indexed neighborhood selection is used. [step 1.2, L5, given]

3.1 (The reversed construction.) Apply the construction of steps 1.1 and 1.2 to the time-reversed manifold $(M,g,-N)$, which is again globally hyperbolic with the chronological past and future exchanged and with $t'=-t$ as volume time; its level at $-b$ is $S_{-b}'=S_b$, and the inequalities $t'\le-b$, $t'\ge-c$ translate to $t\ge b$ and $t\ge c$. By the same argument (with the dual of step 2.1 for the neighborhood of the level), with all support neighborhoods of the bumps chosen inside the open set $W\cap\{t<c\}$ (possible by the neighborhood clause of [L2]), there is a smooth $k:M\to[0,\infty)$ with the following properties: $k=0$ on $\{t\ge c\}$; $k>1/2$ on $S_b$ and on a neighborhood of $S_b$ contained in $W$; $\operatorname{supp}k\subseteq W\cap\{t<c\}$; and $\nabla k$ is future timelike at every point of $\{k>0\}\cap\{t\ge b\}$. [step 1.1, step 2.1, L2, given]

4.1 (The negative plateau and the weak step.) Define $h^-:= -1$ on $\{t\le b\}$ and $h^-:=\varphi\circ k$ on $\{t\ge b\}$. The two formulas agree on a neighborhood of $S_b$ because $k>1/2$ there by step 3.1, so $h^-$ is smooth; $h^-\le0$, $h^-=-1$ on $\{t\le b\}$ and $h^-=0$ on $\{t\ge c\}$. Its gradient is past timelike or zero: on $\{t<b\}$ it vanishes, and on $\{t>b\}$ one has $\nabla h^-=\varphi'(k)\nabla k$ with $\varphi'\le0$ by [L7] and the chain rule, which is zero where $\varphi'(k)=0$ or $\nabla k=0$ and a nonnegative multiple of $-\nabla k$, hence past timelike, where $\varphi'<0$ and $k>0$. Let $U:=\{t<b\}\cup W$, open by step 1.1 and step 2.1, and put $$u:=1+\frac{2h^-}{h^+-h^-}\ \text{on }U,\qquad u:=1\ \text{on }M\setminus U.$$ On $U$ the denominator never vanishes: on $\{t<b\}$ one has $h^-=-1$ and $h^+\ge0$, so $h^+-h^-\ge1$; on $W$ one has $h^+>1/2$ and $h^-\le0$, so $h^+-h^->1/2$. Also $\operatorname{supp}k$ is closed and contained in $W$, so every $z\in\partial U$ satisfies $t(z)>b$ (a boundary point has $t\ge b$ since $\{t<b\}\subseteq U$ and $S_b\subseteq W\subseteq U$; $t(z)=b$ would put $z\in S_b\subseteq U$), hence $z\notin W$, so $z\notin\operatorname{supp}k$ and $k\equiv0$ on a neighborhood of $z$; there $h^-=0$ and $u=1$, so $u$ is smooth at $z$ and in fact identically $1$ near it. Therefore $u$ is a smooth function on $M$ with values in $[-1,1]$ (writing $b^-:=-h^-\ge0$ and $h^+\ge0$ on $U$, one has $u=1-2b^-/(h^++b^-)$). Its gradient on $U$ is $\nabla u=2\bigl(h^+\nabla h^- -h^-\nabla h^+\bigr)/(h^+-h^-)^2$ by the quotient and chain rules, a sum of nonnegative multiples of vectors that are past timelike or zero ($\nabla h^-$ by the previous paragraph, $\nabla h^+$ on $\{t\le b\}$ by step 1.2 and on $W$ by step 2.1), hence past causal or zero by [L5]; outside $U$ it vanishes. On $S_b$ one has $k>1/2$ nearby, so $\nabla h^-=0$ there, while $\nabla h^+$ is past timelike; hence $\nabla u=2(-h^-)\nabla h^+/(h^+-h^-)^2$ is a positive multiple of $\nabla h^+$ at every point of $S_b$, so it is past timelike there, and by continuity and openness of the past timelike cone [L5] it is past timelike on a neighborhood of $S_b$. Finally $u=-1$ on $\{t\le a\}$: there $h^+=0$ by step 1.2 and $h^-=-1$, so $u=1-2/(0+1)=-1$; and $u=1$ on $\{t\ge c\}$ because $U\cap\{t\ge c\}=\emptyset$ by $W\subseteq\{t<c\}$. Setting $\tau:=u$ proves (a)-(d). [step 1.2, step 2.1, step 3.1, step 1.3, L1, L4, L5, L7, given, discharge-construct] ∎

## Remarks

- **What the local finiteness buys.** The sum $\sum_{x\in F}h_x$ is over a countable family, but the diameter-one property of the supports makes it a locally finite family, so the sum is smooth without any convergence assumptions; this is the only place where the auxiliary metric of [L3] is used, and it uses the properness of its distance, not the volume time.
- **Time reversal.** The negative plateau $h^-$ is manufactured from the time-reversed cone bumps; its gradient is past timelike exactly where $\varphi'<0$ and the reversed bumps are future timelike, which is the set where the weak step is genuinely changing.
- **Use.** The weak steps $\tau$ of this lemma, taken for finitely many levels, are averaged in [[lem-gr-strip-weak-steps]] to cover a whole inner strip with a strictly timelike gradient, and the resulting strip functions are summed in [[thm-gr-smooth-cauchy-temporal-splitting]] to produce a global smooth time function.
