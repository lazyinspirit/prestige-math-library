---
id: thm-gr-local-geodesics-and-exponential-map
kind: theorem
title: "The geodesic initial-value problem and the exponential map of the metric-selected connection"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-parallel-transport-and-geodesic-speed, def-gr-metric-selected-connection, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, def-christoffel-symbols-of-an-affine-connection, prop-coordinate-geodesic-equation, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-fundamental-theorem-for-autonomous-smooth-odes, def-gr-smooth-lorentzian-objects, def-smooth-manifold, def-differential-of-a-smooth-map, thm-smooth-inverse-function-theorem-on-manifolds, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-derivation-at-a-point-and-tangent-space, thm-chain-rule-for-total-derivatives, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, def-countable-choice, thm-heine-borel-rn, thm-lebesgue-number-lemma]
dependency_roles:
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-fundamental-theorem-for-autonomous-smooth-odes: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-lebesgue-number-lemma: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 3.3-3.4: the geodesic theorem, the exponential map and normal coordinates, printed pp. 37-40 (PDF pp. 38-41)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: geodesic equation (3.47), affine freedom (3.58)-(3.59), exponential map (3.60)-(3.62), printed pp. 68-73 (PDF pp. 75-80)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.1-3.3.2: geodesics revisited, affine parametrization, the exponential map and normal coordinates, printed pp. 119-121 (PDF pp. 126-128)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$\nabla$ be its metric-selected connection, whose existence and uniqueness are
supplied by [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]; its
Christoffel symbols are the smooth chart functions of
[[def-christoffel-symbols-of-an-affine-connection]]. Recall that a **geodesic**
is a curve with $D_t\gamma'=0$ in its parameter
([[def-geodesic-of-an-affine-connection]],
[[def-covariant-derivative-along-a-curve]]).

**(a) Local existence, uniqueness and maximality.** For every $(p,v)\in TM$
there is a unique maximal geodesic $\gamma_{p,v}:I_{p,v}\to M$ with
$\gamma_{p,v}(0)=p$ and $\gamma_{p,v}'(0)=v$; its domain $I_{p,v}$ is an open
interval containing $0$ and is not asserted to be all of $\mathbb R$.

**(b) Smooth dependence.** The set
$\mathcal G:=\{(t,p,v):t\in I_{p,v}\}\subseteq\mathbb R\times TM$ is open, and
the evaluation map $(t,p,v)\mapsto\gamma_{p,v}(t)$ is smooth on $\mathcal G$.

**(c) Scaling.** For every $s\in\mathbb R$ and every $t\in\mathbb R$,
$t\in I_{p,sv}$ if and only if $st\in I_{p,v}$, and then
$\gamma_{p,sv}(t)=\gamma_{p,v}(st)$.

**(d) The exponential map.** Define $\mathcal E_p:=\{v\in T_pM:1\in I_{p,v}\}$
and $\exp_p:\mathcal E_p\to M$, $\exp_p(v):=\gamma_{p,v}(1)$, and let
$\psi_p:T_pM\to\mathbb R^4$ be the coordinate isomorphism of a basis
$e_0,\dots,e_3$ of $T_pM$. Then $\mathcal E_p$ is open and star-shaped about
$0$ (if $v\in\mathcal E_p$ and $0\le s\le1$, then $sv\in\mathcal E_p$),
$\exp_p$ is smooth, $\exp_p(0)=p$, and, under the canonical identification
$T_0(T_pM)\cong T_pM$ induced by the chart $\psi_p$ on $T_pM$,
$$d(\exp_p)_0=\operatorname{id}_{T_pM}.$$
Consequently there is a star-shaped open neighborhood $W_p\subseteq\mathcal E_p$
of $0$ such that $\exp_p|_{W_p}$ is a diffeomorphism onto an open subset of
$M$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with its metric-selected connection $\nabla$, a point $p_0\in M$ and a vector $v_0\in T_{p_0}M$.

[L1] In a chart $(U,x)$, a smooth curve $\gamma$ with $y=x\circ\gamma$ and position--velocity lift $z=(y,\dot y)$ taking values in $x(U)\times\mathbb R^4$ is a geodesic if and only if $\ddot x^k+\sum_{i,j}\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0$ for $k=0,1,2,3$, equivalently $\dot z=F(z)$ for the smooth field $F(x,w)=\bigl(w,-\Gamma(x)[w,w]\bigr)$ on $x(U)\times\mathbb R^4$ ([[prop-coordinate-geodesic-equation]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L2] For a smooth autonomous field $F$ on an open subset of $\mathbb R^8$ and a base state $z_0$ there are $h>0$ and a neighborhood $Z$ of $z_0$ such that every $y\in Z$ has a unique solution $\Phi(\cdot,y)$ on $[-h,h]$ with $\Phi(0,y)=y$, and $\Phi:(-h,h)\times Z\to\mathbb R^8$ is smooth in $y$ and $C^1$ in $t$ with $\partial_t\Phi=F\circ\Phi$ ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

[L3] For a jointly smooth ODE field on an open time-state-parameter domain, nearby initial states and parameters have solutions on a common compact interval around the initial time; at each fixed time the solution value is smooth in the initial-state/parameter pair ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]; its proof 2.1 supplies a nondegenerate symmetric interval). The Picard–Lindelöf theorem gives local existence and uniqueness through every admissible initial datum ([[thm-picard-lindelof-local-existence-and-uniqueness]]). The inherited tangent-bundle convention assumes $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the parameter theorem itself requires no additional Choice assumption.

[L4] For a geodesic with nowhere-zero tangent, a $C^2$ diffeomorphism $h$ of its parameter makes $\gamma\circ h$ a geodesic exactly when $h''=0$, equivalently $h(t)=at+b$ with $a\neq0$. A constant geodesic remains geodesic under every such reparametrization ([[lem-gr-parallel-transport-and-geodesic-speed]], clause 4). Constant curves are geodesics, the zero vector gives the constant geodesic, and uniqueness of geodesics with prescribed initial data is part of the maximality statement to be proved ([[def-geodesic-of-an-affine-connection]]).

[L5] Smooth maps with invertible differential at a point are local diffeomorphisms there; charts are smooth and their inverses are smooth; the differential of a smooth curve computes velocities ([[thm-smooth-inverse-function-theorem-on-manifolds]], [[def-differential-of-a-smooth-map]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[thm-chain-rule-for-total-derivatives]]).

[L6] A closed bounded interval $K\subseteq\mathbb R$ with the usual metric $d(s,t)=|s-t|$ is a compact metric space, and every open cover of a compact metric space has a Lebesgue number $\delta>0$ such that every subset of diameter less than $\delta$ lies in one cover member ([[thm-heine-borel-rn]], [[thm-lebesgue-number-lemma]]).

## Proof

**Proof technique:** direct.

1.1 (Chart geodesic system.) Fix a chart $(U,x)$; its domain is an open subset $x(U)\subseteq\mathbb R^4$, so $D:=x(U)\times\mathbb R^4$ is open in $\mathbb R^8$, and the field $F(x,w)=\bigl(w,-\Gamma(x)[w,w]\bigr)$ is smooth on $D$ because the Christoffel symbols are smooth. By [L1], a smooth curve in $U$ is a geodesic exactly when its coordinate lift solves $\dot z=F(z)$. Conversely, every solution $z=(y,w)$ with values in $D$ satisfies $y'=w$ and $y''=-\Gamma(y)[y',y']$, so $x^{-1}\circ y$ is the corresponding geodesic. [L1, given, algebra]

1.2 (Local flow and joint smoothness.) By [L2], near any $z_0\in D$ there is a local flow $\Phi:(-h_0,h_0)\times Z_0\to D$ solving $\partial_t\Phi=F(\Phi)$ with $\Phi(0,y)=y$. Apply [L3] to the jointly smooth parameter field $H(r,z,\lambda):=\lambda F(z)$ on $\mathbb R\times D\times\mathbb R$, at $(r,z,\lambda)=(0,z_0,0)$. There are $a>0$, an open neighborhood $Z\subseteq Z_0$ of $z_0$, and $b>0$ such that its solutions $U(r,y,\lambda)$ exist on $[-a,a]$ for $(y,\lambda)\in Z\times(-b,b)$; at the fixed time $c:=a/2>0$, the map $(y,\lambda)\mapsto U(c,y,\lambda)$ is smooth. Shrink $b$ so $cb<h_0$. For $0\le r\le c$ and $|\lambda|<b$, the curve $r\mapsto\Phi(r\lambda,y)$ is defined and satisfies $d\Phi(r\lambda,y)/dr=\lambda F(\Phi(r\lambda,y))$ with initial value $y$. Uniqueness in [L3] gives $U(c,y,\lambda)=\Phi(c\lambda,y)$, including $\lambda=0$. Consequently $\Phi(t,y)=U(c,y,t/c)$ for $|t|<cb$ and $y\in Z$. The right side is a composition of smooth maps in the pair $(t,y)$, so, with $h:=cb$, the restriction $\Phi:(-h,h)\times Z\to D$ is jointly smooth and remains the unique local solution through each $y\in Z$. [L2, L3, L5, construct, algebra]

2.1 (Agreement of solutions.) Let $\gamma_1,\gamma_2$ be geodesics whose parameter intervals share a nondegenerate interval $J$ containing a parameter $t_0$ with $\gamma_1(t_0)=\gamma_2(t_0)$ and $\gamma_1'(t_0)=\gamma_2'(t_0)$. Consider the set of $t\in J$ at which both their positions and tangent vectors agree. It is closed because the two lifted curves $t\mapsto(\gamma_i(t),\gamma_i'(t))$ in the Hausdorff tangent bundle are continuous. It is relatively open because, in a chart about any agreement point, the position--velocity lifts solve the same first-order system and local uniqueness from [L3] makes them agree nearby, including a one-sided neighborhood when that point is an included endpoint. It is nonempty by the data at $t_0$, so connectedness of $J$ makes it all of $J$. Applying this to each compact subinterval of the common domain proves agreement wherever both are defined. In particular two solutions through $(p,v)$ with the same value and tangent at parameter 0 agree on their common domain. [step 1.1, step 1.2, L1, L3, given]

3.1 (Maximal geodesic.) Fix $(p,v)\in TM$ and let $\mathcal S$ be the set of all geodesics $\gamma$ defined on an open interval containing $0$ with $\gamma(0)=p$ and $\gamma'(0)=v$; it is nonempty by [L2] applied in a chart around $p$ to the state $(x(p),v)$, and its parameter domains all contain $0$. Let $I_{p,v}$ be the union of those domains and define $\gamma_{p,v}(t):=\gamma(t)$ for any $\gamma\in\mathcal S$ whose domain contains $t$; by step 2.1 this is independent of the choice of $\gamma$. The union of intervals containing $0$ is an interval containing $0$, and $I_{p,v}$ is open: if $t_0\in I_{p,v}$, then $t_0$ lies in the domain of some $\gamma\in\mathcal S$, and [L2] applied at the state of $\gamma$ at $t_0$ extends a representative solution to a neighbourhood of $t_0$ which, by step 2.1, agrees with $\gamma_{p,v}$ on the overlap. Every geodesic in $\mathcal S$ is a restriction of this union. To include arbitrary interval domains, let $\eta:J\to M$ be any geodesic with the same initial data, allowing included endpoints as in [[def-geodesic-of-an-affine-connection]]. At each included finite endpoint $e$ of $J$, smooth one-sided data give a position--velocity state $(\eta(e),\eta'(e))$. Step 1.2 gives a two-sided local solution through that state in a chart about $\eta(e)$; the one-sided coordinate lift of $\eta$ solves the same ODE, so uniqueness in [L3] makes them agree on their common one-sided interval. They therefore glue to a smooth geodesic across $e$. Opening the at most two included endpoints gives an extension $\widehat\eta$ on an open interval $\widehat J\supseteq J$ containing $0$, so $\widehat\eta\in\mathcal S$. Hence $J\subseteq I_{p,v}$ and $\eta=\gamma_{p,v}|_J$. In particular no extension on any strictly larger interval exists, whether open, closed or half-open, and any other maximal geodesic with the data equals this one. This proves (a). [step 1.2, step 2.1, L2, L3, L4, construct]

4.1 (Smoothness of one geodesic.) For $\gamma=\gamma_{p,v}$ and $t_0\in I_{p,v}$, choose a chart around $\gamma(t_0)$ and apply step 1.2 at the state $(\gamma(t_0),\gamma'(t_0))$; the coordinate lift of $\gamma$ agrees near $t_0$ with the smooth local flow of that state, so $t\mapsto\gamma_{p,v}(t)$ is smooth on $I_{p,v}$. [step 3.1, step 1.2, L5, algebra]

4.2 (Scaling.) Let $s\in\mathbb R$. For $s=0$, the constant curve at $p$ is a geodesic with initial data $(p,0)$ and is defined on all of $\mathbb R$ by [L4], so by step 3.1 it is $\gamma_{p,0}$, and $t\in I_{p,0}$ iff $0=0\cdot t\in I_{p,v}$ holds for all $t$, with equal values $p=\gamma_{p,v}(0)$. For $s\neq0$, put $J_s:=\{t:st\in I_{p,v}\}$. On $J_s$ the curve $t\mapsto\gamma_{p,v}(st)$ is a geodesic with initial data $(p,sv)$: if $v\neq0$, its tangent is nowhere zero, since a geodesic whose tangent vanished once would, by uniqueness in step 2.1, be constant; then clause 4 of [L4] applies to the affine reparametrization $h(t)=st$. If $v=0$, the curve is constant and clause 4 of [L4] handles that case directly. The interval $J_s$ is maximal for these initial data: any geodesic extension on a strictly larger interval would, after the inverse affine change of parameter $t\mapsto t/s$, extend $\gamma_{p,v}$ beyond $I_{p,v}$, contrary to step 3.1. Thus uniqueness of the maximal geodesic in step 3.1 gives $J_s=I_{p,sv}$ and $\gamma_{p,sv}(t)=\gamma_{p,v}(st)$, proving (c). [step 2.1, step 3.1, L4, algebra]

5.1 (Openness and smooth dependence.) Let $t_0\in I_{p_0,v_0}$. If $t_0=0$, step 1.2 and the flow identity give smooth dependence near $(0,p_0,v_0)$. Otherwise let $K$ be the compact interval with endpoints $0,t_0$ and let $z:K\to TM$ be the position--velocity lift of $\gamma_{p_0,v_0}$. For every $s\in K$, step 1.2 supplies an open neighborhood $Z_s$ of $z(s)$ in a tangent-bundle chart and a local flow on $(-h_s,h_s)\times Z_s$ for some $h_s>0$. Compactness gives finitely many such neighborhoods $Z_1,\ldots,Z_m$ covering $z(K)$; their inverse images under $z$ form an open cover of $K$, so [L6] supplies a Lebesgue number $\delta>0$. Choose a partition of $K$ with mesh less than $\min(\delta,h_1,\ldots,h_m)$, traversed from $0$ toward $t_0$. Each subinterval then lies in some $z^{-1}(Z_i)$ and has length less than $h_i$, so its solution map is the corresponding local flow map. Compose these finitely many smooth maps; at each stage continuity lets us shrink the neighborhood of $(p_0,v_0)$ so the nearby state at the next node remains in the next selected flow neighborhood. Thus the position--velocity state at the last node depends smoothly on $(p,v)$ nearby, and a final local flow around $z(t_0)$ gives smoothness jointly in $(t,p,v)$ near $(t_0,p_0,v_0)$. This neighborhood is contained in $\mathcal G$, so $\mathcal G$ is open in $\mathbb R\times TM$ and the evaluation is smooth, proving (b). [step 4.1, step 1.2, step 2.1, L3, L5, L6, construct]

6.1 (The exponential domain.) By (c), $1\in I_{p,sv}$ iff $s\in I_{p,v}$ for every $s\in\mathbb R$. Hence $\mathcal E_p=\{v:1\in I_{p,v}\}$ is the preimage of the open set $\mathcal G$ under the continuous map $v\mapsto(1,p,v)$, so it is open in $T_pM$; and if $v\in\mathcal E_p$ and $0\le s\le1$, then $s\in I_{p,v}$ because $I_{p,v}$ is an interval containing $0$ and $1$, so $1\in I_{p,sv}$ and $sv\in\mathcal E_p$: the domain is star-shaped about $0$. The map $\exp_p$ is the restriction of the smooth evaluation of (b) to $\{1\}\times\{p\}\times\mathcal E_p$, hence is smooth, and $\exp_p(0)=\gamma_{p,0}(1)=p$. [step 5.1, step 4.2, L5, algebra]

7.1 (Differential at zero.) Choose a basis $e_0,\dots,e_3$ of $T_pM$ with coordinate isomorphism $\psi_p:T_pM\to\mathbb R^4$ and identify $T_0(T_pM)$ with $T_pM$ by the chart $\psi_p$. For $w\in T_pM$, the curve $t\mapsto\exp_p(tw)$ has, by (c), $\exp_p(tw)=\gamma_{p,tw}(1)=\gamma_{p,w}(t)$, so its velocity at $0$ is $\gamma_{p,w}'(0)=w$; hence $d(\exp_p)_0(w)=w$ for every $w$, that is $d(\exp_p)_0=\operatorname{id}_{T_pM}$. [step 4.2, step 6.1, L5, given]

8.1 (Local diffeomorphism.) Since $d(\exp_p)_0$ is the identity, it is an isomorphism, so [L5] gives open neighborhoods $V\subseteq\mathcal E_p$ of $0$ and $U\subseteq M$ of $p$ such that $\exp_p|_V:V\to U$ is a diffeomorphism. Choose a Euclidean norm on the finite-dimensional space $T_pM$ and let $W_p$ be the open ball of some radius contained in $V$; it is open, contains $0$, is star-shaped, and $\exp_p|_{W_p}$ is a diffeomorphism onto its open image. This proves (d) and completes the proof. [step 6.1, step 7.1, L5, construct] ∎

## Remarks

- **No completeness is asserted.** The maximal interval $I_{p,v}$ may be a proper subset of $\mathbb R$; nothing above produces a global geodesic or an exponential map defined on all of $TM$. The local diffeomorphism of claim (d) is a statement about a sufficiently small star-shaped neighborhood of the origin, not about global injectivity.

- **Choice convention.** The tangent bundle and its smooth structure carry the inherited $\mathrm{AC}_\omega$ of [[def-countable-choice]]. The smooth-dependence theorem of [L3] uses no additional Choice assumption. Step 5.1 uses a finite subcover and finitely many chart flows; each flow is uniquely determined by its initial-value problem. No choice function for an infinite family of flows is needed.

- **Generality.** The proof uses only that the Christoffel symbols are smooth and that the geodesic equation is the displayed second-order system; it therefore applies verbatim to any smooth affine connection on a smooth four-manifold, with the metric-selected connection being the case used here. The published Riemannian geodesic-flow theorem is not needed; the route is the chart system with the two elementary ODE suppliers.
