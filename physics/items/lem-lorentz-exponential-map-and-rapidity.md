---
id: lem-lorentz-exponential-map-and-rapidity
kind: lemma
title: "The Lorentz exponential: exp(sK) is proper orthochronous, and boosts are exponentials of generators"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 10
deps: [lem-lorentz-lie-algebra-structure, def-lorentz-form-and-inertia,
       def-time-orientation-and-future-causal-sets,
       lem-timelike-cone-has-two-convex-components,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       def-lorentz-map-and-lorentz-group, def-lorentz-boost,
       lem-rapidity-parametrization-of-collinear-boosts,
       def-inertial-frame-and-inertial-chart,
       def-spatial-euclidean-structure-of-an-inertial-frame,
       lem-exponential-series-of-a-bounded-operator,
       cor-finite-dimensional-normed-spaces-are-banach,
       cor-linear-maps-with-finite-dimensional-domain-are-bounded,
       def-bounded-linear-operator, def-operator-norm, def-banach-space,
       def-norm-and-normed-space, def-vector-space-of-linear-maps,
       def-coordinate-column-and-matrix-of-a-linear-map,
       def-matrix-product-and-identity-matrix, thm-determinant-multiplicative,
       def-derivative, thm-algebra-of-derivatives,
       cor-zero-derivative-implies-constant, cor-archimedean-reciprocal]
dependency_roles:
  lem-lorentz-lie-algebra-structure: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-rapidity-parametrization-of-collinear-boosts: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  cor-linear-maps-with-finite-dimensional-domain-are-bounded: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-banach-space: mathematical-premise
  def-norm-and-normed-space: mathematical-premise
  def-vector-space-of-linear-maps: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(V,\eta)$ be a $4$-dimensional Lorentz vector space with a chosen time
orientation $C^+$ ([[def-lorentz-form-and-inertia]],
[[def-time-orientation-and-future-causal-sets]]), fix an inertial frame
$(o;e_0,e_1,e_2,e_3)$ with coordinates $x^a$
([[def-inertial-frame-and-inertial-chart]]), and give $V$ the Euclidean norm
$\lVert v\rVert:=\lVert E^{-1}(v)\rVert_2$, where $E(u)=\sum_a u^ae_a$ is the coordinate isomorphism. Let
$\mathfrak g$ be the six-dimensional space of $\eta$-antisymmetric
endomorphisms of [[lem-lorentz-lie-algebra-structure]]. Then:

(i) For every $K\in\mathfrak g$ and every $s\in\mathbb R$ the series
$\exp(sK):=\sum_{n\ge0}(sK)^n/n!$ converges absolutely in the operator norm on
the space of linear maps $V\to V$; the map $s\mapsto\exp(sK)$ is of class
$\mathcal C^\infty$ with $\frac{d}{ds}\exp(sK)=K\exp(sK)=\exp(sK)K$,
$\exp(0)=\operatorname{id}_V$, and
$\exp((s+t)K)=\exp(sK)\exp(tK)$ for all $s,t\in\mathbb R$.

(ii) For every $K\in\mathfrak g$ and every $s\in\mathbb R$ the map
$\exp(sK)$ is a proper orthochronous Lorentz map; equivalently
$s\mapsto\exp(sK)$ is a $\mathcal C^\infty$ curve in $SO^+(V,\eta)$ with
$\exp(0)=\operatorname{id}_V$. In particular every $K\in\mathfrak g$ arises as
the derivative at $0$ of a curve of proper orthochronous Lorentz maps. No
claim is made that every element of $SO^+(V,\eta)$ is the exponential of an
element of $\mathfrak g$.

(iii) Let $e\in S$ be a unit spatial vector of the frame, $\delta(e,e)=1$, and
write $e=\sum_{i=1}^3\hat e_ie_i$; set
$N_e:=-\sum_{i=1}^3\hat e_iM_{0i}\in\mathfrak g$. Then $N_e$ vanishes on the
$\eta$-orthogonal complement of $\operatorname{span}(e_0,e)$ and acts on that
plane by the matrix
$\begin{pmatrix}0&-1\\ -1&0\end{pmatrix}$; and
$\exp(rN_e)=B(\tanh(r)e)$ for every $r\in\mathbb R$. In particular every
passive boost is the exponential of a generator in $\mathfrak g$, and
$\exp(rN_e)\exp(sN_e)=\exp((r+s)N_e)$ for all $r,s\in\mathbb R$.

## Facts & Assumptions

**Given:** A $4$-dimensional Lorentz vector space $(V,\eta)$ with time orientation $C^+$, an inertial frame $(o;e_0,e_1,e_2,e_3)$ with the Euclidean coordinate norm $\lVert v\rVert=\lVert E^{-1}(v)\rVert_2$, the space $\mathfrak g$ of $\eta$-antisymmetric endomorphisms, and a unit spatial vector $e\in S$.

[L1] $(V,\eta)$ is a Lorentz vector space: $\eta$ is symmetric bilinear with both radicals $\{0\}$ and inertia $(3,1,0)$ ([[def-lorentz-form-and-inertia]]). A linear map $K:V\to V$ lies in $\mathfrak g$ exactly when $\eta(Kv,w)+\eta(v,Kw)=0$ for all $v,w$, equivalently its matrix $M$ in an ordered $\eta$-orthonormal basis satisfies $M^{T}\eta_0+\eta_0M=0$ with $\eta_0=\operatorname{diag}(-1,1,1,1)$; $\mathfrak g$ is a $6$-dimensional linear subspace of the space of linear maps $V\to V$, the six maps $M_{ab}$ defined by $(M_{ab})^{\mu}{}_{\nu}=\delta^{\mu}_a\eta_{b\nu}-\delta^{\mu}_b\eta_{a\nu}$ form a basis of $\mathfrak g$, and if $s\mapsto L(s)$ is a $\mathcal C^1$ curve in $O(V,\eta)$ with $L(0)=\operatorname{id}_V$ then $L'(0)\in\mathfrak g$ ([[lem-lorentz-lie-algebra-structure]]).

[L2] $T:=\{v:\eta(v,v)<0\}$ is the timelike set and $C^+$ is one of its two components; in every $\eta$-orthonormal ordered basis the components are $T_+=\{v:v^0>|v_{\mathrm{vec}}|\}$ and $T_-=\{v:v^0<-|v_{\mathrm{vec}}|\}$, these sets are open in the metric topology of the coordinate distance $d(u,w)=\lVert E^{-1}(u)-E^{-1}(w)\rVert_2$, and $\operatorname{cl}(C^+)\cap\operatorname{cl}(C^-)=\{0\}$ ([[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]]).

[L3] A linear Lorentz map is a linear $L$ with $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$; it is proper when $\det L=+1$ and orthochronous when $L(C^+)=C^+$; every linear Lorentz map is a linear isomorphism, satisfies $\det L=\pm1$, and has $L(C^+)$ equal to one of the two components $C^+,C^-$; composition and inversion of proper orthochronous Lorentz maps are proper orthochronous ([[def-lorentz-map-and-lorentz-group]], [[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L4] $V$ is a finite-dimensional real normed space, hence a Banach space; the space $\mathcal L(V,V)$ of linear maps $V\to V$ is a real vector space, and every such linear map is a bounded linear operator with the operator norm $\lVert\cdot\rVert$ ([[cor-finite-dimensional-normed-spaces-are-banach]], [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]], [[def-bounded-linear-operator]], [[def-banach-space]], [[def-norm-and-normed-space]], [[def-vector-space-of-linear-maps]]).

[L5] For every bounded operator $A$ on a Banach space the series $E(t)=\sum_{n\ge0}t^nA^n/n!$ converges absolutely in operator norm and uniformly on compact $t$-intervals, $E(t)$ is bounded with $\lVert E(t)\rVert\le e^{|t|\,\lVert A\rVert}$, $E(0)=I$, $E(t+s)=E(t)E(s)$, $t\mapsto E(t)$ is $\mathcal C^\infty$ with $E'(t)=AE(t)=E(t)A$, and the difference quotients converge to $A$ ([[lem-exponential-series-of-a-bounded-operator]], applied on the Banach space $V$ of [L4]).

[L6] The operator norm is the least bound: $\lVert T\rVert=\inf\{C\ge0:\lVert Tx\rVert\le C\lVert x\rVert$ for all $x\}$, so $\lVert Tx\rVert\le\lVert T\rVert\,\lVert x\rVert$ for every bounded $T$ and every $x$ ([[def-operator-norm]]).

[L7] In the frame the basis is $\eta$-orthonormal with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, $e_0\in C^+$ with coordinates $(1,0,0,0)$, and the chart is $x(p)=E^{-1}(p-o)$ ([[def-inertial-frame-and-inertial-chart]]); the matrix of a composition of linear maps is the product of their matrices and $\det(M_1M_2)=\det(M_1)\det(M_2)$ ([[def-coordinate-column-and-matrix-of-a-linear-map]], [[def-matrix-product-and-identity-matrix]], [[thm-determinant-multiplicative]]).

[L8] The spatial three-space $S=\operatorname{span}(e_1,e_2,e_3)=\{w:\eta(e_0,w)=0\}$ carries the positive definite form $\delta=\eta|_{S\times S}$ with $\delta(w,z)=\sum_{i=1}^3w^iz^i$ in the $\delta$-orthonormal basis $(e_1,e_2,e_3)$, and $V=S\oplus\operatorname{span}(e_0)$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[L9] For a real function on an order-convex interval: sums, products and scalar multiples of differentiable functions are differentiable with the usual derivative formulas, and a function continuous on the interval whose derivative vanishes at every interior point is constant ([[def-derivative]], [[thm-algebra-of-derivatives]], [[cor-zero-derivative-implies-constant]]).

[L10] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L11] For a unit spatial vector $e$ and $r\in\mathbb R$ the passive boost $B(\tanh(r)e)$ acts on the ordered pair of directions $(e_0,e)$ by the matrix $\begin{pmatrix}\cosh r&-\sinh r\\ -\sinh r&\cosh r\end{pmatrix}$ and as the identity on $\{y\in S:\delta(e,y)=0\}$; here $\sinh(r)=(e^r-e^{-r})/2$, $\cosh(r)=(e^r+e^{-r})/2$, $\tanh(r)=\sinh(r)/\cosh(r)$, and $r\mapsto\tanh(r)$ is a strictly increasing bijection of $\mathbb R$ onto $(-1,1)$ ([[lem-rapidity-parametrization-of-collinear-boosts]], [[def-lorentz-boost]]).



## Proof

**Proof technique:** direct.

1.1 Fix $K\in\mathfrak g$ and $s\in\mathbb R$. By [L4], $V$ is a Banach space for the frame-coordinate norm and every linear map $V\to V$, in particular $K$, is a bounded operator; hence $\mathcal B(V)=\mathcal L(V,V)$ and [L5] applies with $A=K$: the series $E(t)=\sum_{n\ge0}t^nK^n/n!$ converges absolutely in operator norm and uniformly on compact intervals, $E(t)$ satisfies $\lVert E(t)\rVert\le e^{|t|\,\lVert K\rVert}$, $E(0)=I$, $E(t+u)=E(t)E(u)$, $t\mapsto E(t)$ is $\mathcal C^\infty$ with $E'(t)=KE(t)=E(t)K$, and the difference quotients at $0$ converge to $K$. Writing $E(s)=\exp(sK)$ for $t=s$ this is exactly clause (i), including $K=\exp'(0)$. [L4, L5, given]

1.2 Let $e=\sum_{i=1}^3\hat e_ie_i\in S$ with $\delta(e,e)=1$. Since each $M_{0i}$ lies in the linear subspace $\mathfrak g$ by [L1], $N_e=-\sum_{i=1}^3\hat e_iM_{0i}$ lies in $\mathfrak g$. From $(M_{0i})^{\mu}{}_{\nu}=\delta^{\mu}_0\eta_{i\nu}-\delta^{\mu}_i\eta_{0\nu}=\delta^{\mu}_0\delta_{i\nu}+\delta^{\mu}_i\delta_{0\nu}$ (using $\eta_{i\nu}=\delta_{i\nu}$ for spatial indices and $\eta_{0\nu}=-\delta_{0\nu}$) one reads $M_{0i}e_0=e_i$ and $M_{0i}e_j=\delta_{ij}e_0$ for $j=1,2,3$, since the components vanish unless $\mu\in\{0,i\}$ and $\nu\in\{0,j\}$. Hence $N_ee_0=-\sum_i\hat e_ie_i=-e$ and $N_ee_j=-\sum_i\hat e_i\delta_{ij}e_0=-\hat e_je_0$, so $N_ee=-\sum_j\hat e_j^2e_0=-e_0$ because $\delta(e,e)=\sum_j\hat e_j^2=1$. Every $v\in V$ decomposes as $v=v^0e_0+se+y$ with $v^0,s\in\mathbb R$ and $y\in S$, $\delta(e,y)=0$: indeed [L8] gives $v=v^0e_0+w$ with $w\in S$, and $w=\delta(e,w)e+y$ with $y:=w-\delta(e,w)e$ satisfies $\delta(e,y)=\delta(e,w)-\delta(e,w)\delta(e,e)=0$. For such $v$, linearity gives $N_ev=v^0(-e)+s(-e_0)+0=-v^0e-se_0$ and $N_e^2v=N_e(-v^0e-se_0)=v^0e_0+se$; in particular $N_ey=0$ and $N_e^2=P$, where $P$ is the projection onto $\operatorname{span}(e_0,e)$ along $\{y\in S:\delta(e,y)=0\}$. This last set is the $\eta$-orthogonal complement of $\operatorname{span}(e_0,e)$, because $\eta(v,v')=0$ for all $v'\in\operatorname{span}(e_0,e)$ holds exactly for $v\in e_0^{\perp}=S$ with $\delta(e,v)=0$; and in the ordered basis $(e_0,e)$ the map $N_e$ has the matrix $\begin{pmatrix}0&-1\\ -1&0\end{pmatrix}$. [L1, L7, L8, algebra]

2.1 Let $M(t)$ be the matrix of $\exp(tK)$ in the ordered basis $(e_0,e_1,e_2,e_3)$ and $M_K$ the matrix of $K$, so that $M_K^{T}\eta_0+\eta_0M_K=0$ by [L1]. By step 1.1, $M$ is $\mathcal C^\infty$ with $M'(t)=M_KM(t)$ (the matrix of $KE(t)$ is the product of the matrices) by [L7]. Define $F(t):=M(t)^{T}\eta_0M(t)$; its entries are finite sums of products of $\mathcal C^\infty$ functions, so $F$ is differentiable and the product rule of [L9] gives $F'(t)=M'(t)^{T}\eta_0M(t)+M(t)^{T}\eta_0M'(t)=M(t)^{T}M_K^{T}\eta_0M(t)+M(t)^{T}\eta_0M_KM(t)=M(t)^{T}(M_K^{T}\eta_0+\eta_0M_K)M(t)=0$. Since $F(0)=I^{T}\eta_0I=\eta_0$ and each entry has vanishing derivative on $\mathbb R$, [L9] makes each entry constant, so $F(t)=\eta_0$ for all $t$ and all $s$. Thus for all $u,v\in V$ with coordinate columns $x,y$ one has $\eta(\exp(sK)u,\exp(sK)v)=x^{T}M(s)^{T}\eta_0M(s)y=x^{T}\eta_0y=\eta(u,v)$, so $\exp(sK)$ is a linear Lorentz map. [L1, L5, L7, L9, step 1.1, algebra]

2.2 Since $N_e^2=P$ with $P^2=P$ by step 1.2, the powers of $N_e$ are $N_e^{2m}=P$ for $m\ge1$, $N_e^{2m+1}=N_e$ for $m\ge0$. The exponential series of the bounded operator $rN_e$ converges absolutely in operator norm by [L5]; splitting its partial sums into even and odd parts, each part is a convergent series of scalars times $P$ respectively $N_e$, and $\exp(rN_e)=I+\bigl(\sum_{m\ge1}r^{2m}/(2m)!\bigr)P+\bigl(\sum_{m\ge0}r^{2m+1}/(2m+1)!\bigr)N_e=I+(\cosh(r)-1)P+\sinh(r)N_e$ with the hyperbolic functions of [L11]. [L5, L11, step 1.2, algebra]

3.1 By step 2.1, $\exp(sK)$ is a Lorentz map, so [L3] gives $\det\exp(sK)=\pm1$, the determinant being that of $M(s)$ by [L7]. Applying the group law of step 1.1 at $t=u=s/2$ gives $\exp(sK)=\exp((s/2)K)^2$, so by [L7] $M(s)=M(s/2)M(s/2)$ and $\det M(s)=\det(M(s/2))^2=(\pm1)^2=1$, using [L3] once more for $\det M(s/2)=\pm1$. Hence $\exp(sK)$ is proper. [L3, L7, step 1.1, step 2.1, algebra]

3.2 By [L2] and [L7], $C^+$ is open in the coordinate-norm topology and $e_0\in C^+$ with coordinates $(1,0,0,0)$ and $\lVert e_0\rVert=1$; choose $\rho>0$ with $\{v:\lVert v-e_0\rVert<\rho\}\subseteq C^+$. By step 1.1 the map $t\mapsto\exp(tK)$ is continuous at $0$ with $\exp(0)=I$, so there is $\delta>0$ with $\lVert\exp(tK)-I\rVert<\rho/2$ whenever $|t|<\delta$. For such $t$, [L6] gives $\lVert\exp(tK)e_0-e_0\rVert=\lVert(\exp(tK)-I)e_0\rVert\le\lVert\exp(tK)-I\rVert\lVert e_0\rVert<\rho/2<\rho$, so $\exp(tK)e_0\in C^+$. By step 2.1 the map $\exp(tK)$ is a Lorentz map, so by [L3] its image of $C^+$ is one of the two components $C^+,C^-$; since it contains $\exp(tK)e_0\in C^+$, it equals $C^+$. Hence $\exp(tK)$ is orthochronous for every $|t|<\delta$. [L2, L3, L6, L7, step 1.1, step 2.1, algebra]

3.3 Evaluate the formula of step 2.2 on the spanning set of step 1.2: using $N_ee_0=-e$, $N_ee=-e_0$, $N_ey=0$ and $Py=0$ for $\delta(e,y)=0$, one gets $\exp(rN_e)e_0=e_0+(\cosh r-1)e_0-\sinh r\,e=\cosh r\,e_0-\sinh r\,e$, $\exp(rN_e)e=\cosh r\,e-\sinh r\,e_0$, and $\exp(rN_e)y=y$. By [L11], $B(\tanh(r)e)$ acts on $(e_0,e)$ by the matrix $\begin{pmatrix}\cosh r&-\sinh r\\ -\sinh r&\cosh r\end{pmatrix}$ and fixes every $y\in S$ with $\delta(e,y)=0$; both maps are linear and agree on the spanning set $\{e_0,e\}\cup\{y\in S:\delta(e,y)=0\}$ of $V$, so they are equal: $\exp(rN_e)=B(\tanh(r)e)$. [L11, step 1.2, step 2.2, algebra]

4.1 Let $s\in\mathbb R$. For $s=0$ the map $\exp(0)=I$ is orthochronous. Let $s\neq0$ and choose $n\ge1$ with $1/n<\delta/|s|$ by [L10], so $t:=s/n$ satisfies $|t|<\delta$ and $\exp(tK)$ is orthochronous by step 3.2. If $s>0$ then $s=nt$, and the group law of step 1.1 gives $\exp(sK)=\exp(tK)^n$, a finite product of proper orthochronous Lorentz maps, hence proper orthochronous by [L3]. If $s<0$ then $-s>0$, so $\exp(-sK)$ is proper orthochronous by the previous sentence; the group law at $t=s$, $u=-s$ gives $\exp(sK)=\exp(-sK)^{-1}$, and the inverse of a proper orthochronous Lorentz map is proper orthochronous by [L3]. Hence $\exp(sK)$ is orthochronous for every $s\in\mathbb R$. [L3, L10, step 1.1, step 3.2, algebra]

4.2 Let $\beta\in(-1,1)$ and let $e$ be a unit spatial vector. By [L11] there is a unique $r\in\mathbb R$ with $\beta=\tanh(r)$; step 3.3 then gives $B(\beta e)=B(\tanh(r)e)=\exp(rN_e)$, and for $\beta=0$ one has $B(0)=\operatorname{id}_V=\exp(0)$ by the definition of the boost. Writing $\boldsymbol\beta=|\boldsymbol\beta|u$ with a unit spatial vector $u$ when $\boldsymbol\beta\neq0$, this exhibits every passive boost as the exponential of a generator in $\mathfrak g$. Finally, [L5] applied to the single operator $N_e$ and the group law of step 1.1 give $\exp(rN_e)\exp(sN_e)=\exp((r+s)N_e)$ for all $r,s\in\mathbb R$. [L5, L11, step 1.1, step 3.3, algebra]

5.1 Clause (i) is step 1.1, together with the derivative statement $K=\exp'(0)$ noted there. Clause (ii) is steps 2.1, 3.1, 3.2 and 4.1: step 2.1 makes $\exp(sK)$ a Lorentz map, step 3.1 makes it proper, steps 3.2 and 4.1 make it orthochronous; combined with the $\mathcal C^\infty$ property of step 1.1 this is the curve statement in $SO^+(V,\eta)$, and every $K\in\mathfrak g$ arises as $\exp'(0)$ by step 1.1. Clause (iii) is steps 1.2, 2.2, 3.3 and 4.2. Nothing proved here asserts the converse direction (that every element of $SO^+(V,\eta)$ is an exponential of an element of $\mathfrak g$), which is exactly the disclaimer in the statement. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2, step 3.3, step 4.1, step 4.2] ∎
