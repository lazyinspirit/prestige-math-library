---
id: lem-lorentz-map-preserves-metric-and-causal-structure
kind: lemma
title: Lorentz maps are isomorphisms of determinant ±1 that preserve causal character and permute the cones; the Lorentz sets are groups
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 6
deps: [def-lorentz-map-and-lorentz-group, def-lorentz-form-and-inertia,
       def-causal-classification-of-lorentz-vectors,
       def-time-orientation-and-future-causal-sets,
       lem-timelike-cone-has-two-convex-components,
       def-oriented-minkowski-volume-form,
       def-determinant-of-a-linear-operator, thm-determinant-multiplicative,
       cor-determinant-of-an-inverse,
       def-linear-isomorphism-and-invertible-linear-map,
       cor-general-linear-group-is-a-group,
       def-matrix-product-and-identity-matrix,
       thm-coordinate-action-of-a-linear-map,
       def-coordinate-column-and-matrix-of-a-linear-map,
       lem-lorentz-form-has-orthonormal-basis, thm-rank-nullity,
       thm-dimension-of-a-linear-subspace, thm-determinant-of-transpose,
       thm-determinant-of-a-triangular-matrix]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  cor-determinant-of-an-inverse: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  cor-general-linear-group-is-a-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-coordinate-action-of-a-linear-map: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  thm-rank-nullity: mathematical-premise
  thm-dimension-of-a-linear-subspace: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  thm-determinant-of-a-triangular-matrix: mathematical-premise
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
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement

Let $(V,\eta)$ be a $4$-dimensional Lorentz vector space with a chosen time
orientation $C^+$, and let $L:V\to V$ be a linear map with
$\eta(Lv,Lw)=\eta(v,w)$ for all $v,w\in V$
([[def-lorentz-map-and-lorentz-group]]). Then:

(i) $L$ is a linear isomorphism of $V$; for every ordered $\eta$-orthonormal
basis the matrix $M$ of $L$ satisfies $M^{T}\eta_0M=\eta_0$ with
$\eta_0=\operatorname{diag}(-1,1,1,1)$, and conversely every invertible matrix
$M$ with $M^{T}\eta_0M=\eta_0$ is the matrix of a linear Lorentz map in that
basis.

(ii) $\det L=\pm1$. The composition of two Lorentz maps is a Lorentz map, the
identity is a Lorentz map, and the inverse of a Lorentz map is a Lorentz map;
the sets $SO(V,\eta):=\{L\in O(V,\eta):\det L=1\}$,
$O^{\uparrow}(V,\eta):=\{L\in O(V,\eta):L(C^+)=C^+\}$ and
$SO^{+}(V,\eta)=SO(V,\eta)\cap O^{\uparrow}(V,\eta)$ are subgroups of
$O(V,\eta)$, which itself is a subgroup of the general linear group $GL(V)$.

(iii) $\eta(Lv,Lv)=\eta(v,v)$ for all $v\in V$; hence $L$ preserves the causal
character of every nonzero vector (timelike, null or spacelike) and maps the
set of null vectors onto itself. If $L$ is proper, then the oriented volume
form is preserved:
$\epsilon(Lv_0,\dots,Lv_3)=\epsilon(v_0,\dots,v_3)$ for all
$v_0,\dots,v_3\in V$ ([[def-oriented-minkowski-volume-form]]); if
$\det L=-1$ the two sides differ by the sign $-1$.

(iv) $L(C^+)$ is one of the two components $C^+,C^-$ of the timelike set, so
exactly one of $L(C^+)=C^+$ and $L(C^+)=C^-$ holds; $L$ is orthochronous in
the first case and non-orthochronous in the second, and $L(C^+)=C^+$ holds if
and only if $L(C^+)$ is contained in $C^+$.

(v) The affine Lorentz maps of
[[def-lorentz-map-and-lorentz-group]] form a group under composition: the
composition and the inverse of affine Lorentz maps are affine Lorentz maps,
and every affine Lorentz map is a bijection of $A$.

## Facts & Assumptions

**Given:** A linear map $L:V\to V$ with $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w\in V$, where $(V,\eta)$ is a $4$-dimensional Lorentz vector space with a chosen time orientation $C^+$.

[L1] $\eta$ is a symmetric bilinear form and both of its radicals are $\{0\}$: if $\eta(u,w)=0$ for every $w\in V$, then $u=0$ ([[def-lorentz-form-and-inertia]]).

[L2] There is an ordered basis $(e_0,e_1,e_2,e_3)$ with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L3] In an $\eta$-orthonormal ordered basis $(f_0,f_1,f_2,f_3)$, writing $v=v^0f_0+v^1f_1+v^2f_2+v^3f_3$ and $|v_{\mathrm{vec}}|:=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$, the timelike set is $T=T_+\cup T_-$ with $T_+=\{v:v^0>|v_{\mathrm{vec}}|\}$ and $T_-=\{v:v^0<-|v_{\mathrm{vec}}|\}$; the sets $T_+,T_-$ are nonempty and are exactly the two connected components of $T$, and in every $\eta$-orthonormal ordered basis the two displayed coordinate sets coincide with the two components of $T$ in some order ([[lem-timelike-cone-has-two-convex-components]]).

[L4] The chosen component $C^+$ of $T$ and its complement $C^-$ satisfy $T=C^+\sqcup C^-$, and the timelike vectors are exactly the points of $T$ ([[def-time-orientation-and-future-causal-sets]]).

[L5] A vector is null exactly when $v\neq0$ and $\eta(v,v)=0$; the zero vector is none of timelike, null, spacelike ([[def-causal-classification-of-lorentz-vectors]]).

[L6] For an inertial frame, $\epsilon(v_0,v_1,v_2,v_3)$ is the determinant of the $4\times4$ matrix whose $j$-th column lists the coordinates of $v_j$ in the frame's ordered basis ([[def-oriented-minkowski-volume-form]]).

[L7] $\det(AB)=\det(A)\det(B)$ for square matrices over a commutative ring ([[thm-determinant-multiplicative]]).

[L8] $\det(A^{\mathsf T})=\det(A)$ ([[thm-determinant-of-transpose]]).

[L9] The determinant of a triangular matrix is the product of its diagonal entries, so $\det\operatorname{diag}(-1,1,1,1)=-1$ ([[thm-determinant-of-a-triangular-matrix]]).

[L10] For an operator on a finite-dimensional space, $\det T$ is the determinant of its matrix in any ordered basis, independently of the basis used ([[def-determinant-of-a-linear-operator]]).

[L11] If $T:V\to W$ is linear with $V$ finite-dimensional, then $\dim V=\dim(\ker T)+\dim(\operatorname{im}T)$ ([[thm-rank-nullity]]).

[L12] A linear subspace $U$ of the finite-dimensional space $V$ satisfies $\dim U=\dim V$ if and only if $U=V$ ([[thm-dimension-of-a-linear-subspace]]).

[L13] For a linear map $T$ in ordered bases one has $[T(v)]=[T][v]$, the coordinate column of the image being the matrix product of the matrix of $T$ with the coordinate column of $v$ ([[thm-coordinate-action-of-a-linear-map]], [[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L14] A linear map is invertible exactly when a linear inverse exists; an invertible linear map is a linear isomorphism, and the invertible linear maps of $V$ to itself form the general linear group $GL(V)$ ([[def-linear-isomorphism-and-invertible-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 Let $(e_0,e_1,e_2,e_3)$ be an ordered $\eta$-orthonormal basis, existing by [L2], let $M$ be the matrix of $L$ in it, and write $v=\sum_av^ae_a$, $w=\sum_bw^be_b$ with coordinate columns $x=[v]$, $y=[w]$. Bilinearity of $\eta$ together with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ gives $\eta(v,w)=x^{T}\eta_0y$, and the coordinate column of $Lv$ is $Mx$ by [L13], so $\eta(Lv,Lw)=(Mx)^{T}\eta_0(My)=x^{T}M^{T}\eta_0My$; the defining identity of the Given is therefore equivalent to $x^{T}(M^{T}\eta_0M-\eta_0)y=0$ for all $x,y\in\mathbb R^4$, and testing this on the standard basis vectors of $\mathbb R^4$ shows it is equivalent to $M^{T}\eta_0M=\eta_0$. Conversely, if $M$ is invertible with $M^{T}\eta_0M=\eta_0$, the map $\Phi\circ M\circ\Phi^{-1}$, where $\Phi(u):=\sum_au^ae_a$, is linear with matrix $M$ and satisfies $\eta((\Phi M\Phi^{-1})v,(\Phi M\Phi^{-1})w)=x^{T}M^{T}\eta_0My=x^{T}\eta_0y=\eta(v,w)$, so it is a linear Lorentz map. Both directions hold for an arbitrary ordered $\eta$-orthonormal basis, so the criterion holds in one such basis exactly when it holds in every such basis and does not depend on the basis used. [L2, L13, given, algebra]

1.2 If $Lv=0$, then for every $w\in V$ the defining identity gives $\eta(v,w)=\eta(Lv,Lw)=\eta(0,Lw)=0$; by nondegeneracy [L1] this forces $v=0$. Hence $\ker L=\{0\}$ and $L$ is injective. [L1, given, algebra]

1.3 If $L_1,L_2$ are linear Lorentz maps, then $\eta(L_1L_2v,L_1L_2w)=\eta(L_2v,L_2w)=\eta(v,w)$ for all $v,w$, so $L_1L_2$ is a linear Lorentz map; the identity satisfies $\eta(v,w)=\eta(v,w)$ and is a linear Lorentz map. [given, algebra]

1.4 Evaluating the defining identity at $w=v$ gives $\eta(Lv,Lv)=\eta(v,v)$ for every $v\in V$. Hence the sign of $\eta(v,v)$ is unchanged, so a timelike $v$ has timelike image and a spacelike $v$ has spacelike image; and a null $v$ has $\eta(Lv,Lv)=0$. [given, L5, algebra]

1.5 Let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame and let $v_0,\dots,v_3\in V$ have coordinate columns $x_0,\dots,x_3$ in its basis; let $M$ be the matrix of $L$ in that basis. By [L13] the matrix whose $j$-th column is the coordinate column of $Lv_j$ is $M[x_0\ \dots\ x_3]$, so by [L6], multiplicativity [L7] and [L10], $\epsilon(Lv_0,\dots,Lv_3)=\det\bigl(M[x_0\ \dots\ x_3]\bigr)=\det(M)\det\bigl([x_0\ \dots\ x_3]\bigr)=\det(L)\,\epsilon(v_0,\dots,v_3)$. Consequently the volume form is preserved when $\det L=1$, and the two sides differ by the sign $-1$ when $\det L=-1$. [L6, L7, L10, L13, algebra]

1.6 Let $F,G$ be affine Lorentz maps with linear parts $L,M$, so that $F(p)=F(p_0)+L(p-p_0)$ and $G(p)=G(q_0)+M(p-q_0)$ for all $p$. Expanding gives $G(F(p))=G(F(p_0))+M\bigl(F(p)-F(p_0)\bigr)=G(F(p_0))+ML(p-p_0)$, so $G\circ F$ is affine with linear part $ML$; the identity map of $A$ is affine with linear part the identity. The linear part of an affine map is unique: from $F(p_0+v)=F(p_0)+Lv$ and $F(p_0+v)=F(p_0)+L'v$ for all $v$ we get $Lv=L'v$ for all $v$, and moreover $F(p+v)-F(p)=F(p_0)+L(p+v-p_0)-F(p_0)-L(p-p_0)=Lv$ for every $p\in A$, so $Lv$ is recovered from $F$ alone. [given, algebra]

2.1 By step 1.2, $\ker L=\{0\}$, so by [L11] $\dim V=\dim(\operatorname{im}L)$, that is $\operatorname{im}L$ is a linear subspace of $V$ with $\dim(\operatorname{im}L)=\dim V$; [L12] gives $\operatorname{im}L=V$, so $L$ is bijective. Define $L^{-1}:V\to V$ by taking $L^{-1}(u)$ to be the unique $v$ with $Lv=u$; then for $u,w\in V$ and $a\in\mathbb R$ we have $L\bigl(aL^{-1}u+L^{-1}w\bigr)=au+w$, so $L^{-1}(au+w)=aL^{-1}u+L^{-1}w$ and $L^{-1}$ is linear. Moreover $\eta(L^{-1}u,L^{-1}w)=\eta\bigl(L(L^{-1}u),L(L^{-1}w)\bigr)=\eta(u,w)$, so $L^{-1}$ is a linear Lorentz map. Thus $L$ is a linear isomorphism by [L14]. [step 1.2, L11, L12, L14, given, algebra]

2.2 Let $M$ be the matrix of $L$ in an ordered $\eta$-orthonormal basis; by step 1.1, $M^{T}\eta_0M=\eta_0$. Taking determinants and using [L7], [L8] and [L9], $\det(M)^{2}\det(\eta_0)=\det(M^{T})\det(\eta_0)\det(M)=\det(\eta_0)$ with $\det(\eta_0)=-1$, hence $\det(M)^{2}=1$; by [L10], $\det L=\det(M)\in\{1,-1\}$. [step 1.1, L7, L8, L9, L10, algebra]

2.3 Choose an ordered $\eta$-orthonormal basis $(b_0,b_1,b_2,b_3)$ with existence from [L2], and replace $b_0$ by $-b_0$ if $b_0\notin C^+$, so that $b_0\in C^+$; this is legitimate because $b_0$ is timelike by [L2] and $T=C^+\sqcup C^-$ by [L4], so every timelike vector lies in exactly one of the two components, and $(-b_0,b_1,b_2,b_3)$ is again $\eta$-orthonormal. Write $e_0:=b_0$; then by [L3] and [L4] the two components are described in this basis as $C^+=\{v:v^0>|v_{\mathrm{vec}}|\}$ and $C^-=\{v:v^0<-|v_{\mathrm{vec}}|\}$, since the coordinate set $T_+$ is a component containing $e_0\in C^+$. For $z\in T$ one has $|z^0|>|z_{\mathrm{vec}}|\ge0$, hence $z^0\neq0$, and $z\in C^+$ exactly when $z^0>0$; since $\eta(z,e_0)=-z^0$ and $\eta$ is bilinear with $\eta(e_0,e_0)=-1$ and $\eta(e_i,e_0)=0$, we have $z\in C^+$ exactly when $\eta(z,e_0)<0$. Step 1.4 gives $L(C^+)\subseteq T$. Suppose $p,q\in C^+$ with $Lp\in C^+$ and $Lq\in C^-$; then $\eta(Lp,e_0)<0<\eta(Lq,e_0)$. For every $t\ge0$ the coordinate inequality $(p+tq)^0=p^0+tq^0>|p_{\mathrm{vec}}|+t|q_{\mathrm{vec}}|\ge|p_{\mathrm{vec}}+tq_{\mathrm{vec}}|$ shows $p+tq\in C^+$, so $L(p+tq)\in T$; but $t:=-\eta(Lp,e_0)/\eta(Lq,e_0)$ is a positive real with $\eta(L(p+tq),e_0)=\eta(Lp,e_0)+t\,\eta(Lq,e_0)=0$, contradicting that every $z\in T$ has $\eta(z,e_0)\neq0$. Thus $L(C^+)$ cannot meet both $C^+$ and $C^-$, and since it is a nonempty subset of $T=C^+\sqcup C^-$ it is contained in exactly one of them. The same argument with $C^-$ in place of $C^+$, using $z\in C^-\Leftrightarrow z^0<0\Leftrightarrow\eta(z,e_0)>0$ and the reversed coordinate inequality, shows that $L(C^-)$ is contained in exactly one of $C^+,C^-$. [step 1.4, L2, L3, L4, algebra]

3.1 By step 1.4 the map $L$ carries every timelike vector to a timelike vector, so $L(T)\subseteq T$. Conversely let $w\in T$; by step 2.1 there is a unique $v\in V$ with $Lv=w$, and $\eta(v,v)=\eta(Lv,Lv)=\eta(w,w)<0$, so $v\in T$ and $w\in L(T)$. Hence $L(T)=T$. [step 1.4, step 2.1, algebra]

3.2 The set $O(V,\eta)$ contains the identity and is closed under composition by step 1.3, and the inverse of every $L\in O(V,\eta)$ is a linear Lorentz map by step 2.1; as composition of maps is associative and the elements of $O(V,\eta)$ are invertible linear maps, $O(V,\eta)$ is a subgroup of $GL(V)$ in the sense of [L14]. For $SO(V,\eta)$: if $\det L=\det L'=1$ then $\det(LL')=1$ by [L7] and step 2.2, $\det(\operatorname{id})=1$ by [L9] and [L10], and $\det(L^{-1})\det(L)=\det(L^{-1}L)=\det(\operatorname{id})=1$ gives $\det(L^{-1})=1$, so $SO(V,\eta)$ is a subgroup of $O(V,\eta)$. For $O^{\uparrow}(V,\eta)$: if $L(C^+)=L'(C^+)=C^+$ then $(LL')(C^+)=L(C^+)=C^+$; the identity fixes $C^+$; and if $L(C^+)=C^+$ then $L^{-1}(C^+)=C^+$, because for $y\in C^+=L(C^+)$ step 2.1 writes $y=Lx$ with $x\in C^+$, giving $L^{-1}y=x\in C^+$ and hence $L^{-1}(C^+)\subseteq C^+$, while for $x\in C^+$ we have $Lx\in C^+$, so $x=L^{-1}(Lx)\in L^{-1}(C^+)$ and $C^+\subseteq L^{-1}(C^+)$. Finally $SO^{+}(V,\eta)=SO(V,\eta)\cap O^{\uparrow}(V,\eta)$ is an intersection of subgroups of $O(V,\eta)$, hence a subgroup. [step 1.3, step 2.1, step 2.2, L7, L9, L10, L14, algebra]

3.3 If $v$ is null, then $v\neq0$ and $\eta(v,v)=0$ by [L5], so step 1.4 gives $\eta(Lv,Lv)=0$, while $Lv\neq0$ because $L$ is injective by step 2.1; hence $Lv$ is null by [L5] again, and $L$ carries the null set into itself. Conversely, if $w$ is null, then by step 2.1 there is a unique $v$ with $Lv=w$; then $\eta(v,v)=\eta(Lv,Lv)=\eta(w,w)=0$ and $v\neq0$ because $Lv=w\neq0$, so $v$ is null and $w=Lv$ lies in the image of the null set. Hence $L$ maps the set of null vectors onto itself. [step 1.4, step 2.1, L5, algebra]

3.4 Let $F$ be an affine Lorentz map with linear part $L$ and base event $p_0$, so that $F(p)=F(p_0)+L(p-p_0)$ for all $p$ and $L$ is a linear Lorentz map; by step 2.1 the inverse $L^{-1}$ is a linear Lorentz map, and $G(p):=p_0+L^{-1}(p-F(p_0))$ satisfies $G(F(p))=p_0+L^{-1}(F(p_0)+L(p-p_0)-F(p_0))=p_0+(p-p_0)=p$ and $F(G(p))=F(p_0)+L(p_0+L^{-1}(p-F(p_0))-p_0)=F(p_0)+(p-F(p_0))=p$ for all $p\in A$. Thus $G$ is a two-sided inverse of $F$; by step 1.6 the linear part of $G$ is recovered as $G(p+v)-G(p)=L^{-1}v$ for any $p$, so $G$ is an affine Lorentz map, and $F$ is a bijection of $A$ with inverse $G$. [step 1.6, step 2.1, algebra]

4.1 By step 2.3 there are signs $\varepsilon,\delta\in\{+,-\}$ with $L(C^+)\subseteq C^{\varepsilon}$ and $L(C^-)\subseteq C^{\delta}$. If $\varepsilon=\delta$, then $L(T)=L(C^+)\cup L(C^-)\subseteq C^{\varepsilon}$, which contradicts $L(T)=T$ from step 3.1 because $T=C^{\varepsilon}\sqcup C^{\text{other}}$ and both components are nonempty by [L3] and [L4]. Hence $\varepsilon\neq\delta$. If $x\in C^{\varepsilon}$, then $x\in T=L(T)=L(C^+)\cup L(C^-)$; were $x\in L(C^-)\subseteq C^{\delta}$ we would have $x\in C^{\varepsilon}\cap C^{\delta}=\emptyset$, so $x\in L(C^+)$. Hence $C^{\varepsilon}\subseteq L(C^+)\subseteq C^{\varepsilon}$, that is $L(C^+)=C^{\varepsilon}$, and the same argument with the roles of the two components exchanged gives $L(C^-)=C^{\delta}$. In particular exactly one of $L(C^+)=C^+$ and $L(C^+)=C^-$ holds, and $L(C^+)=C^+$ if and only if $L(C^+)\subseteq C^+$: the forward implication is trivial, and conversely if $L(C^+)\subseteq C^+$ then the alternative $L(C^+)=C^-$ is impossible because $C^-$ is nonempty and disjoint from $C^+$. [step 2.3, step 3.1, L3, L4]

4.2 The composition of two affine Lorentz maps is affine Lorentz: by step 1.6 its linear part is the composition $ML$ of the linear parts, and $ML$ is a linear Lorentz map by step 1.3. The identity map of $A$ is affine with linear part the identity of $V$, which is a linear Lorentz map. By step 3.4 every affine Lorentz map $F$ possesses a two-sided inverse which is again affine Lorentz, with linear part $L^{-1}$ for the linear part $L$ of $F$. Hence the affine Lorentz maps form a group under composition, and every one of them is a bijection of $A$. [step 1.3, step 1.6, step 3.4]

5.1 Clause (i) is steps 1.1 and 2.1, clause (ii) is steps 2.1, 2.2 and 3.2, clause (iii) is steps 1.4 and 3.3 together with the volume-form computation of step 1.5, clause (iv) is steps 2.3, 3.1 and 4.1, and clause (v) is step 4.2; this proves every clause of the statement. [step 1.1, step 1.4, step 1.5, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 3.3, step 4.1, step 4.2] ∎
