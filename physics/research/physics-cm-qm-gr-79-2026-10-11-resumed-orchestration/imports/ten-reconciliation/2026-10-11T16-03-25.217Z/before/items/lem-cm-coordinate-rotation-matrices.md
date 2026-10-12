---
id: lem-cm-coordinate-rotation-matrices
kind: lemma
title: "The coordinate rotation matrices $R_z(a)$ and $R_y(a)$: values in $SO(3)$, composition law, and derivatives"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, lem-cm-skew-matrix-cross-product-correspondence, def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, prop-transpose-laws, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, def-derivative, def-interval]
dependency_roles:
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  prop-transpose-laws: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.5, Eqs. (3.53)-(3.58), printed pp. 62-65: the three ordered rotations and the Euler-angle parametrization of $SO(3)$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.5, Eqs. (4.68)-(4.74): three successive rotations about coordinate axes, Euler angles and the angular-velocity components"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.7 (Euler Angles): the rotation matrices about the coordinate axes and their products"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

For $a\in\mathbb R$ define, in the standard basis of $\mathbb R^3$,
$$R_z(a):=\begin{pmatrix}\cos a&-\sin a&0\\ \sin a&\cos a&0\\ 0&0&1\end{pmatrix},\qquad R_y(a):=\begin{pmatrix}\cos a&0&\sin a\\ 0&1&0\\ -\sin a&0&\cos a\end{pmatrix}\in M_3(\mathbb R).$$
Then:

1. $R_z(a)\in SO(3)$ and $R_y(a)\in SO(3)$ for every $a$ ([[def-cm-special-orthogonal-group]]), $R_z(a)e_3=e_3$ and $R_y(a)e_2=e_2$, and $R_z(0)=R_y(0)=I_3$.
2. $R_z(a)R_z(b)=R_z(a+b)$ and $R_y(a)R_y(b)=R_y(a+b)$ for all $a,b\in\mathbb R$.
3. For every differentiable $a:I\to\mathbb R$ on an interval $I\subseteq\mathbb R$ ([[def-derivative]], [[def-interval]]), the matrix-valued curves $t\mapsto R_z(a(t))$ and $t\mapsto R_y(a(t))$ are differentiable with $$(R_z\circ a)'=a'\,R_z(a)\,[e_3]_\times=a'\,[e_3]_\times R_z(a),\qquad (R_y\circ a)'=a'\,R_y(a)\,[e_2]_\times=a'\,[e_2]_\times R_y(a),$$ where $[e_3]_\times,[e_2]_\times$ are the cross-product matrices of [[lem-cm-skew-matrix-cross-product-correspondence]].

## Facts & Assumptions

**Given:** Reals $a,b$, matrices $R_z(a),R_y(a)$ as displayed, and a differentiable $a:I\to\mathbb R$.

[L1] $\sin$ and $\cos$ are differentiable with $(\sin)'=\cos$, $(\cos)'=-\sin$, and satisfy the addition formulas $\sin(a+b)=\sin a\cos b+\cos a\sin b$, $\cos(a+b)=\cos a\cos b-\sin a\sin b$ and the Pythagorean identity $\sin^2a+\cos^2a=1$; also $\sin(-a)=-\sin a$ and $\cos(-a)=\cos a$ [[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-sine-and-cosine-by-power-series]].

[L2] Matrix product and transpose are entrywise operations: $(AB)_{ij}=\sum_kA_{ik}B_{kj}$ and $(A^{\mathsf T})_{ij}=A_{ji}$; $SO(3)=\{R:R^{\mathsf T}R=I_3,\ \det R=1\}$ and these elements form a subgroup of $GL_3(\mathbb R)$ [[def-matrix-space]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[prop-transpose-laws]], [[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]].

[L3] The determinant is multiplicative and $\det I_3=1$; for a block-triangular matrix the determinant is the product of the determinant of the leading block and the remaining diagonal entry [[thm-determinant-multiplicative]], [[def-determinant-of-a-square-matrix]].

[L4] The chain rule and the algebra of derivatives hold for real functions; a matrix-valued curve is differentiable exactly when all entries are, and its derivative is the entrywise derivative [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-matrix-space]].

[L5] $[e_3]_\times$ and $[e_2]_\times$ are the skew matrices of $\omega=e_3$ and $\omega=e_2$; in particular $[e_3]_\times=\begin{pmatrix}0&-1&0\\1&0&0\\0&0&0\end{pmatrix}$ and $[e_2]_\times=\begin{pmatrix}0&0&1\\0&0&0\\-1&0&0\end{pmatrix}$ [[lem-cm-skew-matrix-cross-product-correspondence]], [[def-matrix-space]].

## Proof

**Proof technique:** direct.

1.1 Entrywise, $R_z(a)^{\mathsf T}R_z(a)$ has diagonal entries $\cos^2a+\sin^2a=1$, $1$, $1$ and off-diagonal entries $\mp\cos a\sin a\pm\sin a\cos a=0$; hence $R_z(a)\in O(3)$, and expanding the determinant along the third row gives $\det R_z(a)=\det\begin{pmatrix}\cos a&-\sin a\\ \sin a&\cos a\end{pmatrix}=(\cos a)(\cos a)-(-\sin a)(\sin a)=1$, so $R_z(a)\in SO(3)$, with $R_z(a)e_3=e_3$ read off the third column. [given, L1, L2, L3, algebra]

1.2 Similarly $R_y(a)^{\mathsf T}R_y(a)=I_3$ and $\det R_y(a)=\det\begin{pmatrix}\cos a&\sin a\\ -\sin a&\cos a\end{pmatrix}=1$, so $R_y(a)\in SO(3)$, and $R_y(a)e_2=e_2$ is its second column. $R_z(0)=R_y(0)=I_3$ because $\cos0=1$ and $\sin0=0$. [given, L1, L2, L3, algebra]

1.3 The $(1,1)$ entry of $R_z(a)R_z(b)$ is $\cos a\cos b-\sin a\sin b=\cos(a+b)$, the $(1,2)$ entry is $-\cos a\sin b-\sin a\cos b=-\sin(a+b)$, the $(2,1)$ entry is $\sin a\cos b+\cos a\sin b=\sin(a+b)$, the $(2,2)$ entry is $-\sin a\sin b+\cos a\cos b=\cos(a+b)$, and the remaining entries are $0,0,1$; hence $R_z(a)R_z(b)=R_z(a+b)$ by [L1]. [given, L1, L2, algebra]

1.4 The analogous four planar entries of $R_y(a)R_y(b)$ equal $\cos(a+b),0,\sin(a+b)$ and $1$ in the corresponding positions, so $R_y(a)R_y(b)=R_y(a+b)$ by [L1]. [given, L1, L2, algebra]

1.5 If $a:I\to\mathbb R$ is differentiable, then all nine entries of $R_z(a(t))$, being constants or $\pm\cos(a(t)),\pm\sin(a(t))$, are differentiable with derivatives $-\sin(a(t))a'(t)$ or $\cos(a(t))a'(t)$ by [L1], [L4]; comparing with $a'(t)R_z(a(t))[e_3]_\times$, whose entries are $-a'\sin a$ at $(1,2)$, $a'\cos a$ at $(2,1)$, $a'\cos a$ at $(1,1)$ derivatives and so on (direct multiplication with [L5]), gives $(R_z\circ a)'=a'R_z(a)[e_3]_\times$. [given, L1, L4, L5, algebra]

1.6 The same comparison for $R_y(a(t))$: the derivative matrix has entries $-a'\sin a$ at $(1,1)$, $a'\cos a$ at $(1,3)$, $-a'\cos a$ at $(3,1)$, $-a'\sin a$ at $(3,3)$ and $0$ in the second row and column, which is exactly $a'R_y(a)[e_2]_\times$ by [L5]; hence $(R_y\circ a)'=a'R_y(a)[e_2]_\times$. [given, L1, L4, L5, algebra]

2.1 Since $R_z(a)$ commutes with $[e_3]_\times$ and $R_y(a)$ commutes with $[e_2]_\times$, as direct entrywise multiplication using [L1] shows, the two alternative forms $a'[e_3]_\times R_z(a)$ and $a'[e_2]_\times R_y(a)$ of clause 3 hold as well. [step 1.5, 1.6, given, L1, L2, L5, algebra] ∎
