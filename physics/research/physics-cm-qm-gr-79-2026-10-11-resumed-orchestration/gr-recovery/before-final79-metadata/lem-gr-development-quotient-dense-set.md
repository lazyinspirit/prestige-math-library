---
id: lem-gr-development-quotient-dense-set
kind: lemma
title: "A countable dense subset of the universal development by rational timelike exponential steps from a dense subset of the initial surface"
status: draft
origin: session
domain: mathematics
dependency_level: 36
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: constructive
deps: [def-dependent-choice, lem-gr-universal-development, def-gr-development-and-data-fixing-isometry, thm-gr-smooth-cauchy-temporal-splitting, thm-gr-convex-normal-neighborhoods, lem-gr-convex-normal-causality, lem-gr-joint-exponential-diffeomorphism, thm-gr-local-geodesics-and-exponential-map, thm-second-countable-implies-separable, def-separable-space, def-second-countable-space, thm-countable-union-of-countable, def-countable-choice, def-countable, lem-q-and-irrationals-dense-r, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-conditions-and-global-hyperbolicity, thm-gr-cauchy-surface-implies-globally-hyperbolic]
dependency_roles:
  def-dependent-choice: mathematical-premise
  lem-gr-universal-development: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-convex-normal-causality: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-second-countable-implies-separable: mathematical-premise
  def-separable-space: mathematical-premise
  def-second-countable-space: mathematical-premise
  thm-countable-union-of-countable: mathematical-premise
  def-countable-choice: mathematical-premise
  def-countable: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the proof of Theorem 2.8, where the author instead invokes a theorem of Geroch (Spinor Structure of Space-Times in General Relativity I, J. Math. Phys. 9 (1968) 1739-1744) for the second countability of the glued quotient, printed pp. 22-23"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "R. P. Geroch, Spinor structure of space-times in general relativity I, Journal of Mathematical Physics 9 (1968), 1739-1744: connected, Hausdorff, locally Euclidean manifolds with a smooth Lorentzian metric are second countable (the theorem used by the source and replaced here by an explicit construction)"
      url: "https://doi.org/10.1063/1.1664532"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the exponential map and convex normal neighbourhoods, Theorems 2.4-2.6 and Proposition 2.18, printed pp. 26-27 and 34"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(Q,\bar g,\bar N,\bar j,\bar\psi)$ and the
family of member maps $\pi|_{U_\alpha}:U_\alpha\to Q_\alpha\subseteq Q$ be as
in [[lem-gr-universal-development]] clauses (c)-(d), so that $Q$ is a
Hausdorff locally Euclidean smooth four-manifold with a smooth Lorentzian
metric $\bar g$, the sets $Q_\alpha$ are open and cover $Q$, and
$\bar j(\Sigma)\subseteq Q$ is the embedded initial surface. Then there is a
countable subset $D\subseteq Q$ with:

**(a)** $D\cap\bar j(\Sigma)$ is dense in $\bar j(\Sigma)$; and

**(b)** $D$ is dense in $Q$.

Moreover $D$ can be chosen of the following explicit form: with
$D_0:=S_0$ a countable dense subset of $\bar j(\Sigma)$, and having chosen
once at its first occurrence for every $x\in D_n$ a basis $(e_1(x),\dots,e_4(x))$ of $T_xQ$ and defined
$$V_x^{\mathrm{rat}}:=\Bigl\{\sum_{i=1}^4q_ie_i(x):\ q_i\in\mathbb Q\Bigr\},$$
one sets
$$D_{n+1}:=D_n\cup\bigl\{\exp_x(v):\ x\in D_n,\ v\in V_x^{\mathrm{rat}}\text{ timelike, with }\exp_x(v)\text{ defined}\bigr\},\qquad D:=\bigcup_{n\in\mathbb N}D_n.$$

## Facts & Assumptions

**Given:** the universal development $Q$ of [[lem-gr-universal-development]] with its covering family of member maps, and the initial surface $\bar j(\Sigma)\subseteq Q$.

[L1] Structural properties of $Q$: every $Q_\alpha$ is open, the maps $\pi|_{U_\alpha}$ are diffeomorphisms onto the $Q_\alpha$, and $Q$ carries a smooth Lorentzian metric $\bar g$ with respect to which each $\pi|_{U_\alpha}$ is an isometry; $Q$ is Hausdorff and locally Euclidean ([[lem-gr-universal-development]] clauses (c)-(d)). Each member $U_\alpha$ is a development of the data, hence globally hyperbolic with Cauchy surface $j_0(\Sigma)$ by [[thm-gr-cauchy-surface-implies-globally-hyperbolic]] ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c), [[def-gr-development-and-data-fixing-isometry]] clause (a)).

[L2] The initial surface is a second countable smooth three-manifold: it is the underlying manifold of the data, so it is Hausdorff and second countable and carries a smooth structure ([[def-gr-development-and-data-fixing-isometry]], [[def-second-countable-space]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]). By [[thm-second-countable-implies-separable]] (Countable Choice) it is separable, so there is a countable dense subset $S_0\subseteq\bar j(\Sigma)$ ([[def-separable-space]]).

[L3] Exponential machinery: the joint exponential map is smooth on its open domain; for every point $x$ there is a strictly convex normal ball around it on which $\exp_x$ is a diffeomorphism onto the ball, with inverse given by the two-point inverse velocity $v(q,r)$; that inverse satisfies a Lipschitz bound $|v(q,r)|_x\le\Lambda|x(q)-x(r)|_{\mathrm e}$ in coordinates, and it is continuous in $(q,r)$ ([[lem-gr-joint-exponential-diffeomorphism]] clauses (a),(c),(d), [[thm-gr-convex-normal-neighborhoods]] clauses (a)-(b), [[thm-gr-local-geodesics-and-exponential-map]]).

[L4] Timelike chords in convex balls: if $x\ll z$ are two points of a strictly convex normal ball $B$ and $z$ lies on the endpoint set in $B$ of a future timelike curve with image in $B$ starting at $x$, then $z=\exp_x(w)$ for a timelike $w$ ([[lem-gr-convex-normal-causality]] clause (a), applied with base point $x$). The set of timelike vectors at a point is open in the tangent space, and the rational span of a basis is dense in the tangent space in the coordinates of that basis ([[def-gr-causal-curves-and-reachability]], [[lem-q-and-irrationals-dense-r]]).

[L5] Flow representation of a member: a globally hyperbolic member $U_\alpha$ with Cauchy surface $j_0(\Sigma)$ admits a smooth temporal function with a complete future timelike flow field whose flow lines are inextendible timelike curves, each meeting $j_0(\Sigma)$ exactly once; consequently every $p\in U_\alpha$ equals $\Phi(t,x)$ for a unique $x\in j_0(\Sigma)$ and $t\in\mathbb R$ ([[thm-gr-smooth-cauchy-temporal-splitting]] clauses (a),(c),(d),(e), [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c)).

[L6] Counting: a countable union of countable sets is countable ([[thm-countable-union-of-countable]], [[def-countable]]). Countable Choice supplies each stage's bases and the initial dense set; Dependent Choice supplies the sequence of compatible assignments ([[def-countable-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** constructive.

1.1 (The set $D$.) Choose a countable dense subset $S_0\subseteq\bar j(\Sigma)$ ([L2]) and set $D_0:=S_0$. Recursively, given the countable set $D_n$, choose by Countable Choice a basis $(e_1(x),\dots,e_4(x))$ of $T_xQ$ at every newly added point, retaining all previously chosen bases, form $V_x^{\mathrm{rat}}$ as in the statement, and define $D_{n+1}$ by adding all points $\exp_x(v)$ with $x\in D_n$, $v\in V_x^{\mathrm{rat}}$ timelike and $\exp_x(v)$ defined. Dependent Choice supplies successive compatible choices of these basis assignments and sets. Each $D_{n+1}$ is countable, being the image of a subset of the countable set $D_n\times\mathbb Q^4$; hence $D:=\bigcup_{n\in\mathbb N}D_n$ is countable by [L6]. Since $D_0\subseteq D$, claim (a) holds. [L2, L6, construct]

1.2 (Chains of timelike chords, including the past direction.) Fix $p\in Q$ and a member $Q_\alpha$ containing it. In that member the complete flow of [L5] joins a point $z_0\in S:=\bar j(\Sigma)$ to $p$ with a parameter $t_1\in\mathbb R$. If $t_1=0$, then $p\in S$ and is already in the closure of $D_0$. Otherwise finitely many convex normal neighborhoods cover this compact flow segment; a sufficiently fine finite partition of the segment has each subsegment contained in one of those neighborhoods. Write the ordered endpoints along the flow from $S$ to $p$ as $z_0,\ldots,z_k=p$. The inverse velocity $w_i=v(z_{i-1},z_i)$ for each contained joining geodesic is timelike by [L4], using future chords when $t_1>0$ and past chords when $t_1<0$ (reverse the future-directed chord and use the time reversal of the geodesic). The recursion includes both future and past timelike vectors. [L1, L3, L4, L5, construct]

2.1 (Propagation of closure, without a stage-index assumption.) Work in $Q_\alpha$ and prove $z_i\in\overline{D\cap Q_\alpha}$ by induction. The case $i=0$ follows from the density of $D_0$ in $S$, since $S$ lies in every member. Suppose the claim holds for $z_{i-1}$, and prescribe any open neighborhood $O$ of $z_i$ within this member. The two-point inverse $v(q,z_i)$ is defined for $q$ close to $z_{i-1}$ in the convex neighborhood of step 1.2 and tends to the timelike vector $w_i$. Hence, for sufficiently close $q$, it is timelike. Choose such a $d\in D\cap Q_\alpha$ by the induction hypothesis. There is an open neighborhood of $v(d,z_i)$ in $T_dQ$ on which vectors remain timelike, the member geodesic remains defined to time one, and its exponential image lies in $O$, by openness and continuity of the member exponential. Choose a vector $u$ in the fixed rational span at $d$ in this neighborhood. Its quotient exponential equals its member exponential by uniqueness of the geodesic ODE and remains in $O$. As $d\in D_m$ for some $m$, the recursion gives $\exp_du\in D_{m+1}\subseteq D$. This proves that every such $O$ meets $D\cap Q_\alpha$, completing the induction. The exact inverse identity $\exp_d(v(d,z_i))=z_i$ has zero error; only approximation of this vector by $u$ contributes an endpoint error. [step 1.1, step 1.2, L3, L4, construct]

3.1 (Density.) Step 2.1 gives $p\in\overline{D\cap Q_\alpha}$ (and the $t_1=0$ case follows from step 1.2). Since $Q_\alpha$ is open in $Q$, every open neighborhood of $p$ in $Q$ therefore meets $D$. Hence $D$ is dense in $Q$. [step 2.1, algebra]

4.1 (Conclusion.) The preceding steps construct a countable set $D\subseteq Q$ with $D\cap\bar j(\Sigma)$ dense in $\bar j(\Sigma)$ and $D$ dense in $Q$, of the stated explicit recursive form. [step 1.1, step 3.1, discharge-construct] ∎

## Remarks

The construction uses rational spans in bases fixed at each point once and retains them throughout the recursion. Both time directions are included. Its density argument requires only the flow and local exponential machinery of an individual member, so it also proves density before second countability of the quotient is available. Dependent Choice supplies successive compatible countable selections; Countable Choice supplies each stage's bases and the initial dense set.
