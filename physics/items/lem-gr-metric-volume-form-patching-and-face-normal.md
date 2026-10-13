---
id: lem-gr-metric-volume-form-patching-and-face-normal
kind: lemma
title: "Chart independence of the metric volume form, its value on orthonormal frames, and the unit normal and density of a non-null hyperplane"
status: published
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-volume-form-and-current-flux, def-gr-smooth-lorentzian-objects, lem-gr-covariant-two-tensor-transformation-law, def-oriented-smooth-manifold-and-oriented-chart, def-wedge-product-of-differential-forms, def-pullback-of-a-differential-form, prop-local-coordinate-expression-for-a-differential-form, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, def-lorentz-orthogonality-and-orthogonal-complement, lem-lorentz-form-has-orthonormal-basis, def-alternating-k-linear-map, thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
dependency_roles:
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  prop-local-coordinate-expression-for-a-differential-form: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-alternating-k-linear-map: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'the metric again': transformation of the metric components under a coordinate change, printed pp. 49-51 (PDF pp. 56-58); Ch. 2 'tensor densities' (2.44): the volume element as an n-form and the transformation of sqrt|det g|, printed pp. 52-54 (PDF pp. 59-61)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 8.6-8.7: the volume element sqrt(-g) d^4x in a chart and its use with Stokes' theorem, printed pp. 108-110 (PDF pp. 109-111)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) whose underlying manifold carries an
orientation ([[def-oriented-smooth-manifold-and-oriented-chart]]), and let
$w$ and the local forms $\mathrm{vol}_{g,U}$ be as in
[[def-gr-metric-volume-form-and-current-flux]] clause (a).

**(a) Chart independence.** Let $(U,x)$ and $(V,y)$ be oriented charts with
$x=\varphi\circ y$ on the overlap of their domains, where $\varphi$ is the
smooth transition map; write $g_{ab}$ and $g'_{ab}$ for the metric components
in the two charts and $w=\sqrt{|\det(g_{ab})|}$,
$w'=\sqrt{|\det(g'_{ab})|}$. Then

$$\det(g'_{ab})=\bigl(\det D\varphi\bigr)^{2}\det\bigl(g_{ab}\circ\varphi\bigr),\qquad w'=\bigl(\det D\varphi\bigr)\,(w\circ\varphi),$$

and the local forms agree on the overlap,

$$\varphi^{*}\bigl(w\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3\bigr)=w'\,dy^0\wedge dy^1\wedge dy^2\wedge dy^3 .$$

Consequently there is a unique smooth nowhere-vanishing $4$-form
$\mathrm{vol}_g$ on $M$ — the **metric volume form** — whose restriction to the
domain of every oriented chart $(U,x)$ is $w\,dx^0\wedge dx^1\wedge dx^2\wedge
dx^3$; it is a smooth section with nowhere-zero values and positive on the
given orientation.

**(b) Value on orthonormal frames.** For every $p\in M$ and every positively
oriented ordered basis $(e_0,e_1,e_2,e_3)$ of $T_pM$ with
$g_p(e_A,e_B)=\operatorname{diag}(-1,1,1,1)_{AB}$,

$$\mathrm{vol}_{g,p}(e_0,e_1,e_2,e_3)=1 .$$

**(c) Non-null hyperplanes: normal and density.** Let $p\in M$, let
$H\subseteq T_pM$ be a $3$-dimensional subspace that is nondegenerate for
$g_p$, and let $v_1,v_2,v_3$ be an ordered basis of $H$. Then $H^{\perp}$ is
one-dimensional and nondegenerate and $H=(H^{\perp})^{\perp}$. Let
$u\in H^{\perp}\setminus\{0\}$ and write $\nu:=u/\sqrt{|g_p(u,u)|}$, so that
$\varepsilon:=g_p(\nu,\nu)\in\{-1,1\}$. If $\delta\in\{-1,1\}$ is the sign for
which $(\delta\nu,v_1,v_2,v_3)$ is a positively oriented basis of $T_pM$, then
$\nu^{*}:=\delta\nu$ is the **unit normal to $H$ adapted to the ordered basis**
$(v_1,v_2,v_3)$; it satisfies $g_p(\nu^{*},\nu^{*})=\varepsilon$,
$g_p(\nu^{*},h)=0$ for every $h\in H$, and it is the unique vector with these
two properties for which $(\nu^{*},v_1,v_2,v_3)$ is positively oriented.
Moreover

$$\mathrm{vol}_{g,p}(\nu^{*},v_1,v_2,v_3)=\sqrt{\bigl|\det\bigl(g_p(v_i,v_j)\bigr)\bigr|}.$$

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with an orientation, oriented charts $(U,x)$, $(V,y)$ with transition $\varphi$, a point $p\in M$, a three-dimensional nondegenerate subspace $H\subseteq T_pM$ with ordered basis $v_1,v_2,v_3$, and the objects $w$, $\mathrm{vol}_{g,U}$ of [[def-gr-metric-volume-form-and-current-flux]] clause (a).

[L1] The metric components transform as $g'_{ab}(y)=\partial_a\varphi^c(y)\,\partial_b\varphi^d(y)\,g_{cd}(\varphi(y))$ ([[lem-gr-covariant-two-tensor-transformation-law]], [[def-gr-smooth-lorentzian-objects]]).

[L2] For square matrices of one size, $\det(AB)=\det A\det B$ and $\det(A^{\mathsf T})=\det A$; the determinant of $\operatorname{diag}(-1,1,1,1)$ is $-1$ ([[thm-determinant-multiplicative]], [[def-determinant-of-a-square-matrix]]).

[L3] Pullback of forms is functorial and commutes with the wedge product; in coordinates, $\varphi^{*}(dx^0\wedge\cdots\wedge dx^3)=\det(D\varphi)\,dy^0\wedge\cdots\wedge dy^3$ for a smooth map of open subsets of $\mathbb R^4$, by the coordinate expression of pullback and of the wedge product ([[def-pullback-of-a-differential-form]], [[def-wedge-product-of-differential-forms]], [[prop-local-coordinate-expression-for-a-differential-form]]). Oriented charts of an oriented manifold have orientation-preserving transitions, so $\det D\varphi>0$ ([[def-oriented-smooth-manifold-and-oriented-chart]]).

[L4] At every point there is a $g_p$-orthonormal ordered basis $E_0,E_1,E_2,E_3$ with $g_p(E_A,E_B)=\operatorname{diag}(-1,1,1,1)_{AB}$; exchanging two of its spacelike vectors preserves orthonormality and the position of the negative entry and reverses its orientation, so such a basis may be chosen positively oriented ([[lem-lorentz-form-has-orthonormal-basis]], [[def-gr-smooth-lorentzian-objects]], [[def-alternating-k-linear-map]]).

[L5] $\perp$ is the $g_p$-orthogonal complement of [[def-lorentz-orthogonality-and-orthogonal-complement]]: $S^{\perp}=\{v:g_p(v,s)=0\ \forall s\in S\}$ is a linear subspace, $S\subseteq(S^{\perp})^{\perp}$, and $S^{\perp}=(\operatorname{span}S)^{\perp}$.

[L6] Choose a basis $h_1,h_2,h_3$ of $H$ and extend it to a basis $h_1,h_2,h_3,e_4$ of the four-dimensional space $T_pM$. Any $\lambda\in H^*$ extends to a functional $\widetilde\lambda\in T_pM^*$ by assigning, for example, $\widetilde\lambda(e_4)=0$. In this basis the matrix of $g_p$ is invertible because $g_p$ is nondegenerate; hence the linear map $T_pM\to T_pM^*$, $v\mapsto g_p(v,\cdot)$, is represented by an invertible matrix and is bijective. Thus $\widetilde\lambda=g_p(v,\cdot)$ for a unique $v$ ([[def-gr-smooth-lorentzian-objects]] clause (a)); this proves the extension-and-representation fact used below by finite-dimensional basis extension and an invertible matrix.

## Proof

**Proof technique:** direct; transform the metric determinant and the coordinate volume form between oriented charts, evaluate the result on orthonormal frames, and reduce the hyperplane statement to a finite coordinate computation.

1.1 (Determinant transformation.) On the overlap, [L1] reads $g'=D\varphi^{\mathsf T}(g\circ\varphi)D\varphi$ in matrix form. By [L2], $\det g'=\det(D\varphi)^2\det(g\circ\varphi)$. Since $\det D\varphi>0$ by [L3] and $w,w'>0$ by definition, taking square roots gives $w'=(\det D\varphi)(w\circ\varphi)$. [L1, L2, L3, algebra]

1.2 (The orthogonal complement is one-dimensional.) Let $L:T_pM\to H^{*}$ be $L(v)=g_p(v,\cdot)|_H$. Then $\ker L=H^{\perp}$. For each $\lambda\in H^*$, [L6] constructs an extension $\widetilde\lambda\in T_pM^*$ and the invertible matrix of $g_p$ gives a unique $u\in T_pM$ with $\widetilde\lambda=g_p(u,\cdot)$; hence $L(u)=\lambda$ and $L$ is surjective. Rank-nullity gives $\dim H^{\perp}=4-\dim H^{*}=1$. Applying the same basis-extension and nondegenerate-matrix argument to the one-dimensional space $H^{\perp}$ shows $\dim (H^{\perp})^{\perp}=3$. [L5, L6, algebra]

1.3 (Coordinate computation.) Choose a positively oriented $g_p$-orthonormal basis $E_0,\dots,E_3$ with $g_p(E_A,E_B)=\operatorname{diag}(-1,1,1,1)_{AB}$ as in [L4] and write vectors as their coordinate columns. Let $c$ be the coordinate column of $\nu^{*}$ and let $w_i$ be the coordinate columns of $v_i$. Since $g_p(\nu^{*},v_i)=0$, the matrix $\eta=\operatorname{diag}(-1,1,1,1)$ satisfies $w_i^{\mathsf T}\eta c=0$ for $i=1,2,3$, and $c^{\mathsf T}\eta c=\varepsilon$. Let $W$ be the $4\times3$ matrix with columns $w_1,w_2,w_3$ and $M$ the $4\times4$ matrix with columns $c,w_1,w_2,w_3$. Then $$M^{\mathsf T}\eta M=\begin{pmatrix}\varepsilon&0\\0&Q\end{pmatrix},\qquad Q=\bigl(g_p(v_i,v_j)\bigr)_{i,j=1}^{3}.$$ [L5, algebra]

2.1 (Agreement of local forms.) By [L3], $\varphi^{*}(dx^0\wedge\cdots\wedge dx^3)=\det(D\varphi)\,dy^0\wedge\cdots\wedge dy^3$. Multiplying by $w\circ\varphi$ and substituting step 1.1 gives $\varphi^{*}(w\,dx^0\wedge\cdots\wedge dx^3)=w'\,dy^0\wedge\cdots\wedge dy^3$, the displayed identity. In particular the two local forms have the same value at every point of the overlap under the identification by $\varphi$. [step 1.1, L3, algebra]

2.2 (Nondegeneracy and double complement.) If $u\in H\cap H^{\perp}$, then $g_p(u,h)=0$ for every $h\in H$, and nondegeneracy of the restriction of $g_p$ to $H$ forces $u=0$. Hence $H\cap H^{\perp}=\{0\}$, the sum $H+H^{\perp}=T_pM$ is direct by dimension, and the restriction of $g_p$ to $H^{\perp}$ is nondegenerate: if $u\in H^{\perp}$ satisfies $g_p(u,u')=0$ for all $u'\in H^{\perp}$, then $g_p(u,\cdot)$ vanishes on $H$ and on $H^{\perp}$ and hence on $T_pM$, so $u=0$. Finally $H\subseteq(H^{\perp})^{\perp}$ by [L5] and both have dimension $3$ by steps 1.2 and the definition of $H$, so $H=(H^{\perp})^{\perp}$. [step 1.2, L5, algebra]

2.3 ($M$ is invertible and a block identity.) The columns of $M$ form a basis of $T_pM$: the $w_i$ are linearly independent because $H$ has dimension $3$, and $c\notin\operatorname{span}(w_1,w_2,w_3)$ since $c$ is $\eta$-orthogonal to that span while $c^{\mathsf T}\eta c=\varepsilon\neq0$. Hence $\det M\neq0$, and $Q$ is invertible because $H$ is nondegenerate. Taking determinants in step 1.3 with [L2] and expanding the block determinant in the first coordinate gives $\det(M^{\mathsf T}\eta M)=\det M^2\det\eta=-\det M^2$ and $\det(M^{\mathsf T}\eta M)=\varepsilon\det Q$, so $\det M^2=-\varepsilon\det Q=|\det Q|$. Therefore $|\det M|=\sqrt{|\det Q|}$. [step 1.3, L2, algebra]

3.1 (Gluing.) Each local form is smooth and nowhere vanishing on its chart domain because $w,w'>0$ are smooth and $dx^0\wedge\cdots\wedge dx^3$ is a nowhere-vanishing smooth $4$-form. By step 2.1 the local forms agree on every overlap, so they define a unique smooth section $\mathrm{vol}_g$ of $\bigwedge^4T^*M$ with the stated local expressions; the transition identity also shows that $\mathrm{vol}_g$ evaluates positively on the positively oriented frames of the orientation at every point. [step 2.1, L3, given]

3.2 (Existence and uniqueness of the adapted normal.) Let $u$ span $H^{\perp}$, put $\nu=u/\sqrt{|g_p(u,u)|}$; then $g_p(\nu,\nu)\in\{-1,1\}$, a value depending only on $H$ because replacing $u$ by a nonzero multiple does not change it. Choose $\delta\in\{-1,1\}$ so that $(\delta\nu,v_1,v_2,v_3)$ is positively oriented; such a sign exists and is unique because the two choices give opposite orientations and the orientation is a choice of one of the two rays of $\bigwedge^4T_pM$. Uniqueness of $\nu^{*}=\delta\nu$ as a vector with $g_p(\nu^{*},\nu^{*})=\pm1$, $\nu^{*}\perp H$ and $(\nu^{*},v_1,v_2,v_3)$ positively oriented is immediate: any such vector is a nonzero multiple of $u$, the last condition fixes its sign, and the unit condition fixes its modulus. [step 2.2, L4, algebra]

4.1 (Value on orthonormal frames.) Fix $p$ and a positively oriented $g_p$-orthonormal basis $e_0,\dots,e_3$ as in [L4], take an oriented chart at $p$, and let $E=[e_A{}^i]$ be the matrix whose columns are the coordinate components of the $e_A$ in the chart basis. Orthonormality is $E^{\mathsf T}GE=\operatorname{diag}(-1,1,1,1)$ with $G=(g_{ij}(p))$, so [L2] gives $\det(E)^2\det G=-1$, that is, $|\det E|=1/w(p)$. Positivity of the orientation of $(e_A)$ and of the chart gives $\det E>0$, hence $\det E=1/w(p)$. By the local expression of step 3.1 and the defining property of wedge products, $\mathrm{vol}_{g,p}(e_0,\dots,e_3)=w(p)\det E=1$. [step 3.1, L2, L4, algebra]

5.1 (Value of the volume form.) By step 4.1 applied to the basis $E_A$, the coordinate expression of $\mathrm{vol}_g$ from step 3.1 gives $\mathrm{vol}_{g,p}(\nu^{*},v_1,v_2,v_3)=\det M$, the determinant of the coordinate matrix of the four vectors. By construction of $\nu^{*}$ in step 3.2 the tuple is positively oriented, so $\det M>0$; by step 2.3, $\det M=\sqrt{|\det Q|}=\sqrt{|\det(g_p(v_i,v_j))|}$. This is the displayed formula and completes the proof. [step 4.1, step 3.2, step 2.3, algebra] ∎

## Remarks

- **Orientation versus time orientation.** The construction uses the orientation of $M$ only; the time orientation enters neither $\mathrm{vol}_g$ nor the sign of the unit normal. Replacing the orientation by its opposite replaces $\nu^{*}$ by $-\nu^{*}$ and $\mathrm{vol}_g$ by $-\mathrm{vol}_g$, leaving $\iota_J\mathrm{vol}_g$ unchanged up to the corresponding sign convention on chains.

- **Null hyperplanes.** A three-dimensional subspace $H$ on which $g_p$ is degenerate has $H^{\perp}\subseteq H$; it has no unit normal and the density identity above fails, which is why null faces require the three-form itself ([[def-gr-metric-volume-form-and-current-flux]] clause (c)).
