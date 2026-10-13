---
id: lem-boost-rotation-factorization
kind: lemma
title: Unique boost-rotation factorization of proper orthochronous Lorentz maps
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 8
deps: [def-lorentz-map-and-lorentz-group, def-lorentz-boost,
       def-spatial-rotation-of-an-inertial-frame,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       lem-boost-is-proper-orthochronous-with-inverse,
       def-inertial-frame-and-inertial-chart,
       def-spatial-euclidean-structure-of-an-inertial-frame,
       def-euclidean-inner-product,
       def-linear-isometry-and-orthogonal-or-unitary-operator,
       cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus,
       def-determinant-of-a-linear-operator, thm-determinant-multiplicative,
       lem-timelike-cone-has-two-convex-components,
       def-time-orientation-and-future-causal-sets,
       def-determinant-of-a-square-matrix,
       def-inversions-inversion-number-and-sign]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-spatial-rotation-of-an-inertial-frame: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-inversions-inversion-number-and-sign: mathematical-premise
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
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement

Let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame
([[def-inertial-frame-and-inertial-chart]]), let
$S:=\operatorname{span}(e_1,e_2,e_3)$ be its spatial three-space with
Euclidean form $\delta$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]),
and let $L:V\to V$ be a proper orthochronous Lorentz map
([[def-lorentz-map-and-lorentz-group]]). Write $u:=Le_0$, with coordinates
$(u^0,u_{\mathrm{vec}})$ in the frame, so that $\eta(u,u)=-1$ and $u^0>0$.
Then:

(i) $|u_{\mathrm{vec}}|<u^0$ and the parameter
$\boldsymbol\beta:=u_{\mathrm{vec}}/u^0\in\mathbb R^3$ satisfies
$|\boldsymbol\beta|<1$;

(ii) the linear map $\widehat R:=B(\boldsymbol\beta)L$ satisfies
$\widehat Re_0=e_0$ and $\widehat R(S)=S$, and its restriction $R:S\to S$ preserves $\delta$ and has determinant $+1$ ([[def-spatial-rotation-of-an-inertial-frame]]);
hence $\widehat R$ is the extension $\operatorname{diag}(1,R)$ of the unique
map $R:=\widehat R|_S$; this extension is a spatial rotation of the frame and
$L=B(-\boldsymbol\beta)\widehat R$ is a product of a passive boost and a
spatial rotation;

(iii) conversely, for every $\boldsymbol\beta$ with $|\boldsymbol\beta|<1$ and
every linear map $R:S\to S$ preserving $\delta$ with $\det R=1$, the extension
$\widehat R(v^0e_0+w):=v^0e_0+Rw$ ($w\in S$), denoted
$\operatorname{diag}(1,R)$ in the frame basis, is a proper orthochronous Lorentz map and
the product $B(-\boldsymbol\beta)\widehat R$ is a proper orthochronous Lorentz
map;

(iv) the factorization $L=B(-\boldsymbol\beta)\widehat R$ of (ii) is unique: if
$B(-\boldsymbol\beta_1)\widehat R_1=B(-\boldsymbol\beta_2)\widehat R_2$ with
$|\boldsymbol\beta_i|<1$ and spatial rotations $\widehat R_i$, then
$\boldsymbol\beta_1=\boldsymbol\beta_2$ and $R_1=R_2$;

(v) $L$ is a passive boost, that is $L=B(\boldsymbol\beta')$ for some
$|\boldsymbol\beta'|<1$, if and only if the rotation $R$ in (ii) is the
identity, and then $\boldsymbol\beta'=-\boldsymbol\beta$ with
$\boldsymbol\beta$ the parameter of (i).

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ with spatial three-space $S$, a proper orthochronous Lorentz map $L$, and $u:=Le_0$ with coordinates $(u^0,u_{\mathrm{vec}})$ in the frame.

[L1] A linear Lorentz map is a linear $L$ with $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w\in V$; it is proper when $\det L=+1$ and orthochronous when $L(C^+)=C^+$; $O(V,\eta)$ and $SO^+(V,\eta)$ denote the corresponding sets ([[def-lorentz-map-and-lorentz-group]]).

[L2] A linear Lorentz map is a linear isomorphism, satisfies $\det L=\pm1$, and has Lorentz inverse; it preserves $\eta(v,v)$ and the causal character of every nonzero vector; $L(C^+)$ is one of the two components $C^+,C^-$, and $L(C^+)=C^+$ holds exactly when $L(C^+)\subseteq C^+$; composition of linear Lorentz maps is a linear Lorentz map, and the proper orthochronous ones form a subgroup ([[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L3] For $|\boldsymbol\beta|<1$ the passive boost $B(\boldsymbol\beta)$ is defined by its coordinate action, and for $\boldsymbol\beta\neq\mathbf0$ in the frame's ordered basis it has the matrix $\begin{pmatrix}\gamma&-\gamma\boldsymbol\beta^{T}\\ -\gamma\boldsymbol\beta&I_3+\frac{\gamma-1}{|\boldsymbol\beta|^{2}}\boldsymbol\beta\boldsymbol\beta^{T}\end{pmatrix}$ with $\gamma=(1-|\boldsymbol\beta|^2)^{-1/2}$; for $\boldsymbol\beta=\mathbf0$ one defines $B(\mathbf0)=\operatorname{id}_V$, whose matrix is $I_4$ ([[def-lorentz-boost]]).

[L4] For every $|\boldsymbol\beta|<1$: $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map with $B(\boldsymbol\beta)^{-1}=B(-\boldsymbol\beta)$; $B(\boldsymbol\beta)e_0=\gamma(e_0-\beta_1e_1-\beta_2e_2-\beta_3e_3)$; the map $\boldsymbol\beta\mapsto B(\boldsymbol\beta)$ is injective; if $u$ is a future timelike unit vector with $u^0>0$ then $B(u_{\mathrm{vec}}/u^0)u=e_0$ ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[L5] A spatial rotation of the frame is a linear $R:V\to V$ with $R(e_0)=e_0$, $R(S)\subseteq S$, $\delta(Rw,Rz)=\delta(w,z)$ for all $w,z\in S$, and $\det(R|_S)=+1$ ([[def-spatial-rotation-of-an-inertial-frame]]).

[L6] In an inertial frame, $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ and $e_0\in C^+$; the chart is the affine coordinate map of the frame ([[def-inertial-frame-and-inertial-chart]]).

[L7] $S=\operatorname{span}(e_1,e_2,e_3)=\{w\in V:\eta(e_0,w)=0\}$, $\delta=\eta|_{S\times S}$ is positive definite with $\delta$-orthonormal basis $(e_1,e_2,e_3)$, and $V=S\oplus\operatorname{span}(e_0)$; hence for $v=v^0e_0+w$, $z=z^0e_0+y$ with $w,y\in S$ one has $\eta(v,z)=-v^0z^0+\delta(w,y)$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[L8] $(S,\delta)$ is a finite-dimensional real inner product space, and an endomorphism of it is a linear isometry exactly when it preserves $\delta$; orthogonal operators have determinant $\pm1$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]).

[L9] In every $\eta$-orthonormal ordered basis the timelike set is $T_+\cup T_-$ with $T_+=\{x:x^0>|x_{\mathrm{vec}}|\}$, $T_-=\{x:x^0<-|x_{\mathrm{vec}}|\}$, and these are exactly the two components of $T$; in particular $\eta(x,x)=-(x^0)^2+|x_{\mathrm{vec}}|^2$ ([[lem-timelike-cone-has-two-convex-components]]).

[L10] $C^+$ is one of the two components $T_+,T_-$ and $T=C^+\sqcup C^-$; a vector of $C^+$ is future timelike ([[def-time-orientation-and-future-causal-sets]]).

[L11] For an operator on a finite-dimensional space, $\det T$ is the determinant of its matrix in any ordered basis, independently of the basis, and $\det(AB)=\det A\det B$ with $\det(\operatorname{id})=1$ ([[def-determinant-of-a-linear-operator]], [[thm-determinant-multiplicative]]).

[L12] For $A=(a_{ij})\in M_n(R)$ over a commutative ring, $\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$, and $\operatorname{sgn}(\sigma)=(-1)^{\operatorname{inv}(\sigma)}$ where $\operatorname{inv}(\sigma)$ counts the pairs $i<j<n$ with $\sigma(i)>\sigma(j)$ ([[def-determinant-of-a-square-matrix]], [[def-inversions-inversion-number-and-sign]]).

[L13] $|x|$ denotes the Euclidean norm on $\mathbb R^3$, and the coordinates of $u_{\mathrm{vec}}$ in the $\delta$-orthonormal basis $(e_1,e_2,e_3)$ carry the standard Euclidean inner product ([[def-euclidean-inner-product]]).



## Proof

**Proof technique:** direct.

1.1 Since $L$ is orthochronous and $e_0\in C^+$ by [L6], the image $u=Le_0$ lies in $L(C^+)=C^+$; by [L9] and [L10] the component $C^+$ is the coordinate set $\{x:x^0>|x_{\mathrm{vec}}|\}$ because it contains $e_0$ with coordinates $(1,0,0,0)$. Hence $u^0>|u_{\mathrm{vec}}|\ge0$, so $u^0>0$ and $|u_{\mathrm{vec}}|<u^0$. Moreover $\eta(u,u)=\eta(e_0,e_0)=-1$ by [L2] and [L6], while [L9] gives $\eta(u,u)=-(u^0)^2+|u_{\mathrm{vec}}|^2$, so $(u^0)^2-|u_{\mathrm{vec}}|^2=1$ and the parameter $\boldsymbol\beta:=u_{\mathrm{vec}}/u^0$ satisfies $|\boldsymbol\beta|^2=1-1/(u^0)^2<1$; in particular $\boldsymbol\beta$ lies in the open unit ball of $\mathbb R^3$ and $B(\boldsymbol\beta)$ is defined by [L3]. [L1, L2, L3, L6, L9, L10, L13, algebra]

1.2 For uniqueness, suppose $B(-\boldsymbol\beta_1)\widehat R_1=B(-\boldsymbol\beta_2)\widehat R_2$ with $|\boldsymbol\beta_i|<1$ and spatial rotations $\widehat R_i$, and apply both sides to $e_0$. Since $\widehat R_ie_0=e_0$ by [L5] and $B(-\boldsymbol\beta_i)e_0=\gamma_i(e_0+\beta_{i,1}e_1+\beta_{i,2}e_2+\beta_{i,3}e_3)$ by [L4], equality of the two images reads $\gamma_1(e_0+\boldsymbol\beta_1)=\gamma_2(e_0+\boldsymbol\beta_2)$ in coordinates, the time component giving $\gamma_1=\gamma_2>0$ and then the three spatial components giving $\beta_{1,k}=\beta_{2,k}$ for $k=1,2,3$; hence $\boldsymbol\beta_1=\boldsymbol\beta_2$. Composing the original equality on the left with the bijection $B(\boldsymbol\beta_1)=B(\boldsymbol\beta_2)$ and using $B(\boldsymbol\beta_i)B(-\boldsymbol\beta_i)=\operatorname{id}$ from [L4] gives $\widehat R_1=\widehat R_2$, and therefore $R_1=\widehat R_1|_S=\widehat R_2|_S=R_2$. [L4, L5, algebra]

2.1 Define $\widehat R:=B(\boldsymbol\beta)L$. It is a composition of linear Lorentz maps, hence a linear Lorentz map by [L2]; in particular it is invertible. By [L4] applied to the future timelike unit vector $u$ with $u^0>0$ from step 1.1, $B(\boldsymbol\beta)u=e_0$; therefore $\widehat Re_0=B(\boldsymbol\beta)Le_0=B(\boldsymbol\beta)u=e_0$. [L2, L4, step 1.1, algebra]

3.1 For $w\in S$, applying the Lorentz identity of $\widehat R$ and $\widehat Re_0=e_0$ gives $\eta(e_0,\widehat Rw)=\eta(\widehat Re_0,\widehat Rw)=\eta(e_0,w)=0$, so $\widehat Rw\in S$ by [L7] and $\widehat R(S)\subseteq S$. Conversely, let $y\in S$ and let $w:=\widehat R^{-1}y$; applying the same identity to the Lorentz map $\widehat R^{-1}$, whose value at $e_0$ is again $e_0$, gives $\eta(e_0,w)=\eta(\widehat R^{-1}e_0,\widehat R^{-1}y)=\eta(e_0,y)=0$, so $w\in S$ by [L7] and $y=\widehat Rw\in\widehat R(S)$; hence $\widehat R(S)=S$. For $w,z\in S$, $\delta(\widehat Rw,\widehat Rz)=\eta(\widehat Rw,\widehat Rz)=\eta(w,z)=\delta(w,z)$, so the restriction $\widehat R|_S$ is a $\delta$-isometry of $S$; it is an automorphism of $S$ because $\widehat R$ is an automorphism of $V$ preserving the splitting. [L2, L7, L8, step 2.1, algebra]

4.1 Put $A:=\widehat R|_S$ and let $\widehat M$ be the matrix of $\widehat R$ in the ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ and $M_A$ the matrix of $A$ in the ordered basis $(e_1,e_2,e_3)$ of $S$. Because $\widehat Re_0=e_0$ and $\widehat R(S)=S$, the matrix $\widehat M$ is the block matrix $\begin{pmatrix}1&0\\ 0&M_A\end{pmatrix}$ and, reading the Leibniz sum of [L12] over $\sigma\in S_4$, every term with $\sigma(0)\neq0$ vanishes; for $\sigma$ with $\sigma(0)=0$ the product equals $\prod_{j<3}(M_A)_{\sigma(j+1)-1,j}$, the permutation $\tau(j):=\sigma(j+1)-1$ of $\{0,1,2\}$ has the same inversion number as $\sigma$ (no inversion involves the index $0$ with $\sigma(0)=0$), and so the same sign, whence $\det\widehat M=\det M_A$. By [L11], $\det\widehat R=\det\widehat M=\det M_A=\det A=\det(\widehat R|_S)$. Now $\det\widehat R=\det B(\boldsymbol\beta)\det L=1\cdot1=1$ by [L4], [L1] and [L11]. Hence $\det(\widehat R|_S)=+1$, and by [L8] the restriction is an orthogonal operator; with step 3.1 and [L5] this shows that $R:=\widehat R|_S:S\to S$ is a determinant-one $\delta$-isometry and $\widehat R=\operatorname{diag}(1,R):V\to V$ is a spatial rotation of the frame. Finally $L=B(\boldsymbol\beta)^{-1}\widehat R=B(-\boldsymbol\beta)\widehat R$ by [L4]. [L5, L8, L11, L12, step 2.1, step 3.1, algebra]

5.1 Conversely, let $|\boldsymbol\beta|<1$ and let $R:S\to S$ be a linear $\delta$-isometry of determinant $1$, with extension $\widehat R=\operatorname{diag}(1,R)$, so that $\widehat Re_0=e_0$ and $\widehat R|_S=R$. For $v=v^0e_0+w$ and $z=z^0e_0+y$ with $w,y\in S$, linearity gives $\widehat Rv=v^0e_0+Rw$ and $\widehat Rz=z^0e_0+Ry$, so by [L7] and the $\delta$-preservation of $R$ in [L5], $\eta(\widehat Rv,\widehat Rz)=-v^0z^0+\delta(Rw,Ry)=-v^0z^0+\delta(w,y)=\eta(v,z)$; hence $\widehat R$ is a linear Lorentz map. Its matrix in $(e_0,e_1,e_2,e_3)$ is block diagonal $\operatorname{diag}(1,M_R)$ with $M_R$ the matrix of $R$ in $(e_1,e_2,e_3)$, and the same Leibniz argument as step 4.1 gives $\det\widehat R=\det R=1$ by [L5]; thus $\widehat R$ is proper. It is orthochronous because $\widehat Re_0=e_0\in C^+$ with $e_0$ future timelike, so $\widehat R(C^+)\cap C^+\neq\emptyset$, and by [L2] the image $\widehat R(C^+)$ is one of the two components $C^+,C^-$; it must therefore be $C^+$. Finally $B(-\boldsymbol\beta)$ is a proper orthochronous Lorentz map by [L4], and the product of two proper orthochronous Lorentz maps is proper orthochronous by [L2]. [L2, L4, L5, L7, L12, algebra]

5.2 For the characterization of boosts, suppose first that $L=B(\boldsymbol\beta')$ for some $|\boldsymbol\beta'|<1$. Then $u=Le_0=B(\boldsymbol\beta')e_0=\gamma'(e_0-\beta'_1e_1-\beta'_2e_2-\beta'_3e_3)$ by [L4], so $u^0=\gamma'$ and $\boldsymbol\beta=u_{\mathrm{vec}}/u^0=-\boldsymbol\beta'$; hence $\widehat R=B(\boldsymbol\beta)L=B(-\boldsymbol\beta')B(\boldsymbol\beta')=\operatorname{id}$ by [L4], and $R=\operatorname{id}$. Conversely, if $R=\operatorname{id}$, then $\widehat R=\operatorname{id}$ and the factorization of step 4.1 gives $L=B(-\boldsymbol\beta)$, a passive boost with parameter $-\boldsymbol\beta$. [L4, step 4.1]

6.1 Clause (i) is step 1.1; clause (ii) is steps 2.1, 3.1, 4.1; clause (iii) is step 5.1; clause (iv) is step 1.2; and clause (v) is step 5.2. This proves every clause of the statement. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 1.2, step 5.2] ∎
