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
deps: [lem-gr-universal-development, def-gr-development-and-data-fixing-isometry, thm-gr-smooth-cauchy-temporal-splitting, thm-gr-convex-normal-neighborhoods, lem-gr-convex-normal-causality, lem-gr-joint-exponential-diffeomorphism, thm-gr-local-geodesics-and-exponential-map, thm-second-countable-implies-separable, def-separable-space, def-second-countable-space, thm-countable-union-of-countable, def-countable-choice, def-countable, lem-q-and-irrationals-dense-r, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-conditions-and-global-hyperbolicity, thm-gr-cauchy-surface-implies-globally-hyperbolic]
dependency_roles:
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
([[def-countable-choice]]). Let $(Q,\bar g,\bar N,\bar j,\bar\psi)$ and the
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
for every $x\in D_n$ a basis $(e_1(x),\dots,e_4(x))$ of $T_xQ$ and defined
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

[L6] Counting: a countable union of countable sets is countable ([[thm-countable-union-of-countable]], [[def-countable]]). Countable Choice supplies the bases of the tangent spaces and the countable dense subset in the recursion ([[def-countable-choice]]).

## Proof

**Proof technique:** constructive.

1.1 (The set $D$.) Choose a countable dense subset $S_0\subseteq\bar j(\Sigma)$ ([L2]) and set $D_0:=S_0$. Recursively, given the countable set $D_n$, choose by Countable Choice a basis $(e_1(x),\dots,e_4(x))$ of $T_xQ$ for every $x\in D_n$, form $V_x^{\mathrm{rat}}$ as in the statement, and define $D_{n+1}$ by adding all points $\exp_x(v)$ with $x\in D_n$, $v\in V_x^{\mathrm{rat}}$ timelike and $\exp_x(v)$ defined. Each $D_{n+1}$ is countable, being the image of the countable set $D_n\times(V_x^{\mathrm{rat}})_{x}$; hence $D:=\bigcup_{n\in\mathbb N}D_n$ is countable by [L6]. Since $D_0\subseteq D$, claim (a) holds. [L2, L6, construct]

1.2 (Chains of small timelike chords in a member.) Let $p\in Q$; choose $\alpha$ with $p\in Q_\alpha$ and write $p'=(\pi|_{U_\alpha})^{-1}(p)\in U_\alpha$. By [L5] there are $x_1\in j_0(\Sigma)$ and $t_1\in\mathbb R$ with $p'=\Phi(t_1,x_1)$, and the map $t\mapsto\Phi(t,x_1)$ is a timelike curve. Choose $n$ large enough that for each $j\in\{1,\dots,n\}$ the subsegment $\Phi([\frac{j-1}{n}t_1,\frac{j}{n}t_1],x_1)$ is contained in a strictly convex normal ball $B_j$ around $z_{j-1}:=\Phi(\frac{j-1}{n}t_1,x_1)$ (finitely many such balls around the points of the compact segment cover it, and refining the subdivision makes each subsegment lie in one of them). Put $z_j:=\Phi(\frac{j}{n}t_1,x_1)$ for $j=0,\dots,n$, so that $z_0=x_1\in j_0(\Sigma)$ and $z_n=p'$. Transport the chain to $Q$ by the isometry $\pi|_{U_\alpha}$ and keep the notation $z_j$ for the images in $Q_\alpha$; exponential maps and chronological relations correspond under this isometry ([[lem-gr-universal-development]] clause (d)). Each pair satisfies $z_{j-1}\ll z_j$ (they are distinct points of the timelike curve $t\mapsto\Phi(t,x_1)$), and the subsegment between them lies in $B_j$, so by [L4] there is a timelike $w_j\in T_{z_{j-1}}U_\alpha$ with $\exp_{z_{j-1}}(w_j)=z_j$. [given, L1, L5, L4, construct]

2.1 (Propagation of rational approximations along a chain.) Let $O\subseteq U_\alpha$ be an open neighbourhood of $p'$ and fix a chart at $p'$. We show by induction on $j=0,\dots,n$: for every $\eta>0$ there is $d_j\in D\cap U_\alpha$ with $|d_j-z_j|<\eta$ in the chart. For $j=0$ this is the density of $S_0$ in $j_0(\Sigma)$ (step 1.1, transported by the diffeomorphism $\pi|_{U_\alpha}$). For the step, suppose $d_{j-1}\in D\cap U_\alpha$ is close to $z_{j-1}$. By continuity of the two-point inverse ([L3]) the exact inverse velocity $v(d_{j-1},z_j)$ (defined as soon as $d_{j-1}$ and $z_j$ lie in a common strictly convex normal ball, which holds for $d_{j-1}$ close enough to $z_{j-1}$) converges, as $d_{j-1}\to z_{j-1}$, to $w_j$; in particular for $d_{j-1}$ close enough it is timelike, by openness of the timelike cone [L4]. Choose $v\in V^{\mathrm{rat}}_{d_{j-1}}$ close to $v(d_{j-1},z_j)$; then $v$ is timelike, $\exp_{d_{j-1}}(v)$ is defined (the exponential domain is open, [L3]), and by the smoothness of the exponential and its Lipschitz bounds on a compact chart ([L3]) the point $d_j':=\exp_{d_{j-1}}(v)$ is as close to $z_j$ as desired, because the two terms $d(\exp_{d_{j-1}}(v),\exp_{d_{j-1}}(v(d_{j-1},z_j)))$ and $d(\exp_{d_{j-1}}(v(d_{j-1},z_j)),z_j)=d(d_{j-1},z_j)$ can both be made small: the first because $v$ approximates the exact inverse velocity and the exponential is Lipschitz on the compact chart, the second because the chain steps are small and $d_{j-1}$ is close to $z_{j-1}$. Moreover $d_j'\in D_{j}\subseteq D$ by the recursion. This completes the induction. [step 1.2, L3, L4, construct]

3.1 (Density.) Applying step 2.1 with $\eta$ so small that the resulting $d_n$ lies in the prescribed open neighbourhood $O$ of $p'$, and taking $O$ to be the pullback under $\pi|_{U_\alpha}$ of any member of a neighbourhood base of $p$ in $Q$, we obtain points of $D$ arbitrarily close to $p$ in $Q$. Hence $D$ is dense in $Q$. [step 2.1, algebra]

4.1 (Conclusion.) The preceding steps construct a countable set $D\subseteq Q$ with $D\cap\bar j(\Sigma)$ dense in $\bar j(\Sigma)$ and $D$ dense in $Q$, of the stated explicit recursive form. [step 1.1, step 3.1, discharge-construct] ∎

## Remarks

The construction replaces the appeal to Geroch's theorem on second countability of Lorentzian manifolds used by the source: it produces a *countable* set of points directly from countably many choices, using only the smooth dependence of the exponential map, the convexity of normal balls and the density of the rational span of a basis. The recursion is a countable recursion with Countable Choice at each stage; no Dependent Choice is used in the construction itself, and the flow representation of the members is used only through its one-dimensional subdivision, which uses Dependent Choice only through the temporal splitting theorem already in the dependencies.
