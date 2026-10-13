---
id: thm-sr-affine-isometry-classification
kind: theorem
title: C^2 eta-preserving maps of affine Minkowski space are affine Lorentz maps
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 8
deps: [def-lorentz-map-and-lorentz-group,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart,
       lem-affine-minkowski-charts-form-a-smooth-atlas,
       lem-tangent-space-of-affine-minkowski-space-is-v,
       def-ck-euclidean-maps-and-diffeomorphisms,
       thm-clairaut-schwarz-mixed-partials,
       thm-algebra-of-total-derivatives,
       thm-chain-rule-for-total-derivatives,
       cor-zero-derivative-implies-constant,
       def-derivative, def-linear-map,
       def-total-derivative-in-euclidean-space,
       thm-total-derivative-computes-directional-and-partial-derivatives,
       def-directional-and-partial-derivatives,
       cor-zero-total-derivative-on-a-convex-open-set-is-constant,
       def-convex-subset-of-euclidean-space,
       def-lorentz-form-and-inertia, thm-rank-nullity,
       thm-dimension-of-a-linear-subspace]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-affine-minkowski-charts-form-a-smooth-atlas: mathematical-premise
  lem-tangent-space-of-affine-minkowski-space-is-v: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-derivative: mathematical-premise
  def-linear-map: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  cor-zero-total-derivative-on-a-convex-open-set-is-constant: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  thm-rank-nullity: mathematical-premise
  thm-dimension-of-a-linear-subspace: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $(A,V,\eta,C^+)$ be the affine Minkowski space with its inertial smooth
structure ([[lem-affine-minkowski-charts-form-a-smooth-atlas]]), and let
$F:A\to A$ be a map whose coordinate expression in some (equivalently, every)
inertial chart is of class $C^2$ and which satisfies

$$\eta(dF_pv,dF_pw)=\eta(v,w)\qquad\text{for all }p\in A\text{ and all }v,w\in V,$$

where $dF_p:T_pA\to T_{F(p)}A$ is the total derivative and the tangent spaces
are identified with $V$ by the canonical isomorphism of
[[lem-tangent-space-of-affine-minkowski-space-is-v]]. Then $F$ is an affine
Lorentz map: there exist $p_0\in A$ and a linear Lorentz map $L$ with
$F(p)=F(p_0)+L(p-p_0)$ for all $p\in A$
([[def-lorentz-map-and-lorentz-group]]). Conversely every affine Lorentz map is
a $C^\infty$ map of $A$ satisfying the same preservation identity.
Consequently the $C^2$ isometries of the affine Minkowski model are exactly its
affine Lorentz maps, and these form a group under composition.

## Facts & Assumptions

**Given:** An oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$, a map $F:A\to A$ that is $C^2$ in inertial charts and satisfies $\eta(dF_pv,dF_pw)=\eta(v,w)$ for all $p,v,w$ under the canonical tangent identification, and an inertial chart $x$ with frame $(o;e_0,e_1,e_2,e_3)$ and coordinate isomorphism $E(u)=\sum_au^ae_a$.

[L1] A linear map $L:V\to V$ with $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$ is a linear Lorentz map; an affine Lorentz map is a map $F:A\to A$ with $F(p)=F(p_0)+L(p-p_0)$ for a linear Lorentz map $L$, and its linear part $L$ is unique ([[def-lorentz-map-and-lorentz-group]]).

[L2] Affine Lorentz maps are bijections and form a group under composition ([[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L3] The model is the quadruple $(A,V,\eta,C^+)$ with events and displacements $q-p\in V$ ([[def-sr-affine-minkowski-model]]).

[L4] For the inertial chart $x$, $x(p)=E^{-1}(p-o)$; $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, so $\eta(Ea,Eb)=\eta_0(a,b)$ with $\eta_0=\operatorname{diag}(-1,1,1,1)$; the chart is a bijection $A\to\mathbb R^4$ ([[def-inertial-frame-and-inertial-chart]]).

[L5] The inertial charts form a smooth atlas; the transitions between inertial charts are affine, hence smooth ([[lem-affine-minkowski-charts-form-a-smooth-atlas]]).

[L6] The tangent space at every event is canonically identified with $V$; for an inertial chart the identification is $\Phi_p(v)=\sum_av^a\partial_a|_p$ for $v=\sum_av^ae_a$, and under this identification the total derivative of a chart-represented map is the coordinate total derivative conjugated by $E$ ([[lem-tangent-space-of-affine-minkowski-space-is-v]]).

[L7] A map between open subsets of Euclidean space is $C^k$ when all iterated partial derivatives of order at most $k$ exist and are continuous ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L8] $f:U\to\mathbb R^n$ is totally differentiable at $a$ with total derivative $Df(a)$ when $f(a+h)=f(a)+Df(a)h+r(h)$ with $\|r(h)\|_2/\|h\|_2\to0$ ([[def-total-derivative-in-euclidean-space]]).

[L9] The $j$-th partial derivative of $f$ at $a$ is $\partial_jf(a)=D_{e_j}f(a)$, the directional derivative along $e_j$ ([[def-directional-and-partial-derivatives]]).

[L10] If $f$ is totally differentiable at $a$ then $D_vf(a)=Df(a)v$ for every $v$, in particular $\partial_jf(a)=Df(a)e_j$, and the matrix of $Df(a)$ in the standard bases is the Jacobian matrix $(\partial_jf_i(a))_{i,j}$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L11] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ for all coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

[L12] $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ whenever the two total derivatives exist ([[thm-chain-rule-for-total-derivatives]]).

[L13] Sums, scalar multiples and differences of totally differentiable maps are totally differentiable with the expected total derivatives ([[thm-algebra-of-total-derivatives]]).

[L14] If $U\subseteq\mathbb R^m$ is convex and open and $f:U\to\mathbb R^n$ is totally differentiable at every point with $Df(z)=0$ for every $z\in U$, then $f$ is constant on $U$ ([[cor-zero-total-derivative-on-a-convex-open-set-is-constant]]).

[L15] A subset $U\subseteq\mathbb R^m$ is convex when $(1-t)x+ty\in U$ for all $x,y\in U$ and $t\in[0,1]$; $\mathbb R^m$ is convex and open ([[def-convex-subset-of-euclidean-space]]).

[L16] $\eta$ is a symmetric bilinear form whose radicals are $\{0\}$, so $\eta(u,z)=0$ for all $z\in V$ implies $u=0$ ([[def-lorentz-form-and-inertia]]); in coordinates $\eta_0(a,b)=-a^0b^0+a^1b^1+a^2b^2+a^3b^3$ by [L4].

[L17] A linear map $T:\mathbb R^4\to\mathbb R^4$ with $\ker T=\{0\}$ satisfies $\dim(\operatorname{im}T)=\dim\mathbb R^4$ by rank-nullity ([[thm-rank-nullity]]), so its image is all of $\mathbb R^4$ ([[thm-dimension-of-a-linear-subspace]]).



## Proof

**Proof technique:** direct.

1.1 Put $\Phi:=x\circ F\circ x^{-1}:\mathbb R^4\to\mathbb R^4$, the coordinate expression of $F$ in the chart $x$. By hypothesis and [L5], $\Phi$ is $C^2$ on the open set $\mathbb R^4$; by the chain rule [L12] and the tangent identification [L6], at $u=x(p)$ the total derivative of $\Phi$ is the conjugate $D\Phi_u=E^{-1}\circ dF_p\circ E$ of the total derivative of $F$. Hence for all $u\in\mathbb R^4$ and all $a,b\in\mathbb R^4$, using $\eta(Ec,Ed)=\eta_0(c,d)$ from [L4] and the preservation identity of the Given, $\eta_0(D\Phi_ua,D\Phi_ub)=\eta(dF_p(Ea),dF_p(Eb))=\eta(Ea,Eb)=\eta_0(a,b)$. In particular, if $D\Phi_ua=0$ for some $a$, then $\eta_0(a,b)=\eta_0(D\Phi_ua,D\Phi_ub)=0$ for every $b$; testing $b=e_0,e_1,e_2,e_3$ gives $a^0=0$ and $a^1=a^2=a^3=0$, so $a=0$ by [L16], and $D\Phi_u$ has trivial kernel; by [L17] it is invertible, so the vectors $D\Phi_ue_0,\dots,D\Phi_ue_3$ form a basis of $\mathbb R^4$. [L4, L5, L6, L12, L16, L17, algebra]

1.2 Conversely, let $G$ be an affine Lorentz map with linear part $\widetilde L$ and $G(p)=G(p_0)+\widetilde L(p-p_0)$. Its coordinate expression in $x$ is $\Phi_G(u)=x(G(x^{-1}(u)))=x(G(p_0))+\widetilde L_x(u-x(p_0))$ with $\widetilde L_x:=E^{-1}\circ\widetilde L\circ E$ a linear map of $\mathbb R^4$, hence a polynomial map of degree at most one and consequently $C^\infty$; its total derivative at every point is the constant $\widetilde L_x$, and for $a,b\in\mathbb R^4$ the Lorentz property of $\widetilde L$ together with [L4] gives $\eta_0(\widetilde L_xa,\widetilde L_xb)=\eta(\widetilde L(Ea),\widetilde L(Eb))=\eta(Ea,Eb)=\eta_0(a,b)$, which under the identification [L6] is exactly the preservation identity $\eta(dG_pv,dG_pw)=\eta(v,w)$ for all $p,v,w$. [L4, L6, L7, L8, L12, algebra]

2.1 For $j\in\{0,1,2,3\}$ define the vector-valued map $A_j:\mathbb R^4\to\mathbb R^4$ by $A_j(u):=\partial_j\Phi(u)=D\Phi_ue_j$, the equality being [L10]; each $A_j$ is $C^1$ because $\Phi$ is $C^2$. For $i,j,k$ define the real-valued function $C_{ijk}(u):=\eta_0(\partial_iA_j(u),A_k(u))=\eta_0(\partial_i\partial_j\Phi(u),\partial_k\Phi(u))$. The identity of step 1.1, $\eta_0(A_j(u),A_k(u))=\eta_{jk}$ with the constant $\eta_{jk}:=\eta_0(e_j,e_k)$, says that $u\mapsto\eta_0(A_j(u),A_k(u))$ is constant; differentiating it with the product rule for the bilinear form $\eta_0$ (which in coordinates is the displayed polynomial of [L16]) gives $C_{ijk}(u)+C_{ikj}(u)=0$ for all $u$. Clairaut's theorem [L11] applied to the components of the $C^2$ map $\Phi$ gives $\partial_i\partial_j\Phi=\partial_j\partial_i\Phi$ pointwise, hence $C_{ijk}=\eta_0(\partial_j\partial_i\Phi,\partial_k\Phi)=C_{jik}$. [L8, L9, L10, L11, L16, step 1.1, algebra]

3.1 We show $C_{ijk}=0$ for all $i,j,k$. If $i,j,k$ are pairwise distinct, the two relations of step 2.1 give $C_{ijk}=C_{jik}=-C_{jki}=-C_{kji}=C_{kij}=C_{ikj}=-C_{ijk}$, where each equality is an instance of $C_{abc}=C_{bac}$ (first two indices) or $C_{abc}=-C_{acb}$ (last two indices); hence $2C_{ijk}=0$ and $C_{ijk}=0$ in $\mathbb R$. If exactly two of $i,j,k$ coincide, consider the three possible coincidences: $C_{iik}=-C_{iki}$ and $C_{iki}=C_{kii}$ and $C_{kii}=-C_{kii}$, so $C_{kii}=0$, then $C_{iki}=0$, then $C_{iik}=0$; the remaining coincidences are the same three after renaming. If $i=j=k$, then $C_{iii}=-C_{iii}$ by the last-two relation, so $C_{iii}=0$. Thus $C_{ijk}=0$ for every triple. [step 2.1, algebra]

4.1 Fix $i,j$ and $u$, and put $w:=\partial_iA_j(u)\in\mathbb R^4$. By step 3.1, $\eta_0(w,A_k(u))=C_{ijk}(u)=0$ for $k=0,1,2,3$; since $(A_0(u),\dots,A_3(u))$ is a basis of $\mathbb R^4$ by step 1.1, expanding an arbitrary $z\in\mathbb R^4$ in that basis and using bilinearity of $\eta_0$ gives $\eta_0(w,z)=0$ for every $z$, whence $w=0$ by [L16]. Therefore $\partial_iA_j(u)=0$ for all $i,j,u$; equivalently the total derivative $DA_j(u)$, whose matrix is the Jacobian $(\partial_i(A_j)_m(u))$ by [L10], is the zero linear map for every $u$. [L10, L16, step 1.1, step 3.1, algebra]

5.1 By step 4.1 and [L14], applied on the convex open set $\mathbb R^4$ of [L15], each map $A_j:\mathbb R^4\to\mathbb R^4$ is constant on $\mathbb R^4$: there are vectors $L_j\in\mathbb R^4$ with $A_j(u)=L_j$ for all $u$ and all $j$. [L14, L15, step 4.1]

6.1 Let $L:\mathbb R^4\to\mathbb R^4$ be the linear map defined by $Le_j:=L_j$ for $j=0,1,2,3$ ([[def-linear-map]]); it is well defined because $(e_0,\dots,e_3)$ is a basis of $\mathbb R^4$. By step 5.1 and step 2.1, $D\Phi_ue_j=A_j(u)=L_j=Le_j$ for all $u$ and all $j$, so the two linear maps $D\Phi_u$ and $L$ agree on a basis and $D\Phi_u=L$ for every $u$. Define $\Psi(u):=\Phi(u)-Lu$; by [L13] $\Psi$ is totally differentiable at every point, and since the linear map $L$ is totally differentiable with $DL(u)=L$ (substituting $L(u+h)-L(u)-Lh=0$ into [L8] verifies the defining limit), [L13] gives $D\Psi(u)=D\Phi_u-L=L-L=0$ for every $u$. Applying [L14] on the convex open set $\mathbb R^4$ again gives a vector $b\in\mathbb R^4$ with $\Psi(u)=b$ for all $u$; hence $\Phi(u)=Lu+b$ for all $u\in\mathbb R^4$. [L8, L13, L14, L15, step 5.1, algebra]

7.1 Evaluating the preservation identity of step 1.1 at $u=0$ and using $D\Phi_0=L$ from step 6.1 gives $\eta_0(La,Lb)=\eta_0(a,b)$ for all $a,b\in\mathbb R^4$. Define the linear map $\widetilde L:V\to V$ by $\widetilde L:=E\circ L\circ E^{-1}$; for $v=Ea$, $w=Eb$ with $a,b\in\mathbb R^4$, [L4] gives $\eta(\widetilde Lv,\widetilde Lw)=\eta(E(La),E(Lb))=\eta_0(La,Lb)=\eta_0(a,b)=\eta(v,w)$, so $\widetilde L$ is a linear Lorentz map by [L1]. Moreover, for every event $p$ with $u:=x(p)$, step 6.1 and the chart identity $x^{-1}(u)=o+E(u)$ of [L4] give $F(p)=x^{-1}(\Phi(u))=x^{-1}(Lu+b)=o+E(Lu+b)=o+Eb+E(Lu)=F(o)+\widetilde L(E(u))$, and since $x(p)=E^{-1}(p-o)$ this reads $F(p)=F(o)+\widetilde L(p-o)$ for every $p\in A$: $F$ is an affine Lorentz map with linear part $\widetilde L$ and $p_0:=o$. [L1, L4, step 1.1, step 6.1, algebra, L3]

8.1 Step 1.1 sets up the coordinate expression and proves $D\Phi_u$ injective; steps 3.1 through 7.1 construct the constant linear part $\widetilde L$ and prove that it is a linear Lorentz map; step 1.2 is the converse. Hence the $C^2$ isometries of the model are exactly its affine Lorentz maps, and these form a group under composition by [L2] (with every affine Lorentz map being a bijection). [step 1.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 1.2, L3, L2] ∎
