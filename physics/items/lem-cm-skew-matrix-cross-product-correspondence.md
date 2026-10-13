---
id: lem-cm-skew-matrix-cross-product-correspondence
kind: lemma
title: "The skew-matrix/cross-product correspondence $[\\omega]_\\times z=\\omega\\times z$ and its conjugation law $R[\\omega]_\\times R^{\\mathsf T}=[R\\omega]_\\times$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, prop-transpose-laws, thm-determinant-multiplicative, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-euclidean-inner-product, def-inner-product-space, lem-standard-basis-of-f-n, thm-unique-coordinates-with-respect-to-an-ordered-basis]
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  prop-transpose-laws: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-inner-product-space: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.1.1, Eqs. (3.5)-(3.7), printed pp. 47-48: the antisymmetric angular-velocity matrix and its single-index vector"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.2: extracting the angular-velocity vector from an antisymmetric matrix and rotation-covariance of the cross-product identification"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Use the standard basis $(e_1,e_2,e_3)$ of $\mathbb R^3$ and coordinates $\omega=\omega_1e_1+\omega_2e_2+\omega_3e_3$ ([[lem-standard-basis-of-f-n]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]). Define the map $[\cdot]_\times:\mathbb R^3\to M_3(\mathbb R)$ by
$$[\omega]_\times:=\begin{pmatrix}0&-\omega_3&\omega_2\\ \omega_3&0&-\omega_1\\ -\omega_2&\omega_1&0\end{pmatrix}.$$
Then:

1. $[\omega]_\times z=\omega\times z$ for all $\omega,z\in\mathbb R^3$, the cross product being that of [[def-cross-product-in-r3]].
2. $[\omega]_\times^{\mathsf T}=-[\omega]_\times$ for every $\omega$; the map $\omega\mapsto[\omega]_\times$ is linear and injective, and its image is exactly the set of skew-symmetric matrices of $M_3(\mathbb R)$. Consequently every skew-symmetric $\Omega\in M_3(\mathbb R)$ equals $[\omega]_\times$ for exactly one $\omega$, namely $\omega=(\Omega_{32},\Omega_{13},\Omega_{21})$.
3. For every $R\in SO(3)$ ([[def-cm-special-orthogonal-group]]) and every $\omega\in\mathbb R^3$, $$R[\omega]_\times R^{\mathsf T}=[R\omega]_\times.$$

## Facts & Assumptions

**Given:** Vectors $\omega,z\in\mathbb R^3$, a skew-symmetric matrix $\Omega\in M_3(\mathbb R)$ and a rotation $R\in SO(3)$.

[L1] The cross product has coordinates $(u\times v)_1=u_2v_3-u_3v_2$, $(u\times v)_2=u_3v_1-u_1v_3$, $(u\times v)_3=u_1v_2-u_2v_1$ in the standard basis, and satisfies $\langle u\times v,w\rangle=\det[u\ v\ w]$, where $[u\ v\ w]$ is the matrix with these three vectors as columns; moreover $u\times v$ is orthogonal to $u$ and to $v$ [[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]].

[L2] Use the owning page's one-based labels: $u_j:=u(j-1)$, $M_{ij}:=M(i-1,j-1)$, and $e_j$ is the standard unit vector at the actual index $j-1$, for $i,j\in\{1,2,3\}$. Relabelling the supplier's product formula gives $(AB)_{ij}=\sum_{k=1}^{3}A_{ik}B_{kj}=\sum_{r=0}^{2}A(i-1,r)B(r,j-1)$. Sums are entrywise and $(A^{\mathsf T})_{ij}=A_{ji}$; the transpose is involutive and reverses products [[def-matrix-space]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[prop-transpose-laws]], [[lem-standard-basis-of-f-n]].

[L3] The determinant is multiplicative, $\det(AB)=\det A\det B$, and $\det I_3=1$ [[thm-determinant-multiplicative]], [[def-matrix-product-and-identity-matrix]].

[L4] For $R\in SO(3)$ one has $R^{\mathsf T}R=I_3$, $RR^{\mathsf T}=I_3$, $\det R=1$ and $R$ invertible; for all $x,y\in\mathbb R^3$ therefore $\langle Rx,Ry\rangle=\langle x,y\rangle$, since $(Rx)^{\mathsf T}(Ry)=x^{\mathsf T}R^{\mathsf T}Ry=x^{\mathsf T}y$ [[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]], [[def-euclidean-inner-product]].

[L5] The Euclidean inner product is positive definite: if $\langle x,w\rangle=0$ for all $w\in\mathbb R^3$ then $x=0$ [[def-inner-product-space]], [[def-euclidean-inner-product]].

[L6] A matrix is determined by its values on the standard basis: if $B,C\in M_3(\mathbb R)$ satisfy $Bz=Cz$ for all $z\in\mathbb R^3$, then $B=C$, since the $j$-th column of $B$ is $Be_j$ by the product formula [L2] and $(e_1,e_2,e_3)$ is a basis [[lem-standard-basis-of-f-n]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]].

## Proof

**Proof technique:** direct.

1.1 Comparing coordinates, $([\omega]_\times z)_1=-\omega_3z_2+\omega_2z_3=\omega_2z_3-\omega_3z_2=(\omega\times z)_1$, and likewise $([\omega]_\times z)_2=\omega_3z_1-\omega_1z_3=(\omega\times z)_2$ and $([\omega]_\times z)_3=\omega_1z_2-\omega_2z_1=(\omega\times z)_3$, all by [L1] and [L2]; this is clause 1. [given, L1, L2, algebra]

1.2 The displayed matrix is manifestly antisymmetric: $([\omega]_\times^{\mathsf T})_{ij}=([\omega]_\times)_{ji}=-([\omega]_\times)_{ij}$ for every $i,j$ by [L2]. Hence $[\omega]_\times^{\mathsf T}=-[\omega]_\times$. Entries are linear functions of $\omega$, so $\omega\mapsto[\omega]_\times$ is linear. If $[\omega]_\times=0$, then the $(1,3)$ entry gives $\omega_2=0$, the $(2,3)$ entry gives $\omega_1=0$ and the $(1,2)$ entry gives $\omega_3=0$, so $\omega=0$: the map is injective. [given, L2, algebra]

1.3 Let $u,v,w\in\mathbb R^3$. By [L4], $\langle R(u\times v),Rw\rangle=\langle u\times v,w\rangle=\det[u\ v\ w]$ by [L1]; by [L2] and [L3], $\det[u\ v\ w]=\det(R)\det[u\ v\ w]=\det(R[u\ v\ w])=\det[Ru\ Rv\ Rw]=\langle Ru\times Rv,Rw\rangle$ by [L1] again. Since $R$ is invertible, $Rw$ ranges over all of $\mathbb R^3$ as $w$ does, so [L5] gives $R(u\times v)=Ru\times Rv$. [given, L1, L2, L3, L4, L5, algebra]

2.1 Let $\Omega$ be skew-symmetric and put $\omega:=(\Omega_{32},\Omega_{13},\Omega_{21})$. Comparing entries with the definition of $[\omega]_\times$ and using $\Omega_{ij}=-\Omega_{ji}$ and $\Omega_{ii}=0$: $[\omega]_\times$ has $(1,2)$ entry $-\omega_3=-\Omega_{21}=\Omega_{12}$, $(1,3)$ entry $\omega_2=\Omega_{13}$, $(2,3)$ entry $-\omega_1=-\Omega_{32}=\Omega_{23}$, and the lower-triangular entries follow by skew-symmetry of both matrices; so $\Omega=[\omega]_\times$. Together with step 1.2 this shows that the image of $\omega\mapsto[\omega]_\times$ is the set of skew-symmetric matrices, with the stated unique preimage; this proves clause 2. [step 1.2, given, L2, algebra]

3.1 For every $z\in\mathbb R^3$, $R[\omega]_\times R^{\mathsf T}z=R(\omega\times(R^{\mathsf T}z))$ by step 1.1, $=(R\omega)\times(RR^{\mathsf T}z)$ by step 1.3, $=(R\omega)\times z$ by [L4], $=[R\omega]_\times z$ by step 1.1. Hence $R[\omega]_\times R^{\mathsf T}=[R\omega]_\times$ by [L6]; this is clause 3. [step 1.1, 1.3, given, L2, L4, L6, algebra] ∎
