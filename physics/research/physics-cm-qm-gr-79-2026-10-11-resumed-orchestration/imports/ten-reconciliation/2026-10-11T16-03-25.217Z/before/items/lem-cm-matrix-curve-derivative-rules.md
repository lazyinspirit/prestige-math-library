---
id: lem-cm-matrix-curve-derivative-rules
kind: lemma
title: "Derivative rules for differentiable matrix-valued curves, and skewness of $R^{\\mathsf T}R'$ for a curve in $SO(3)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-derivative, thm-algebra-of-derivatives, def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, prop-transpose-laws, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group]
dependency_roles:
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  prop-transpose-laws: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.1.1, printed pp. 47-49: the moving body basis and the antisymmetry computation $R^{\\mathsf T}\\dot R+\\dot R^{\\mathsf T}R=0$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.2 (Kinematics of Rotation), Eq. (2.21): orientation matrix and skew angular-velocity matrix"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.1, Eqs. (4.1)-(4.10): moving frame, antisymmetric angular-velocity matrix and the transport theorem"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $I\subseteq\mathbb R$ be an interval with at least two points, let $t_0\in I$ and let $A,B:I\to M_3(\mathbb R)$ be **differentiable at $t_0$**, meaning ([[def-matrix-space]]) that every entry function $t\mapsto A(t)_{ij}$ and $t\mapsto B(t)_{ij}$ is differentiable at $t_0$ in the sense of [[def-derivative]]; write $A'(t_0)$ for the matrix with entries $A'(t_0)_{ij}:=(t\mapsto A(t)_{ij})'(t_0)$, and similarly for $B$.

1. $A+B$ and $A^{\mathsf T}$ are differentiable at $t_0$, with $(A+B)'(t_0)=A'(t_0)+B'(t_0)$ and $(A^{\mathsf T})'(t_0)=(A'(t_0))^{\mathsf T}$.
2. $AB$ is differentiable at $t_0$, with $(AB)'(t_0)=A'(t_0)B(t_0)+A(t_0)B'(t_0)$.
3. If $A(t)\in SO(3)$ for every $t\in I$ ([[def-cm-special-orthogonal-group]]), then the matrix $A(t_0)^{\mathsf T}A'(t_0)$ is skew-symmetric, i.e. $(A^{\mathsf T}A')^{\mathsf T}=-A^{\mathsf T}A'$ at $t_0$, and likewise $A'(t_0)A(t_0)^{\mathsf T}$ is skew-symmetric. In particular the trace of each of these two matrices vanishes.

## Facts & Assumptions

**Given:** An interval $I\subseteq\mathbb R$ with at least two points, a point $t_0\in I$, and maps $A,B:I\to M_3(\mathbb R)$ differentiable at $t_0$ in the entrywise sense of the statement.

[L1] If $f,g:I\to\mathbb R$ are differentiable at $t_0$ and $\alpha\in\mathbb R$, then $f+g$, $\alpha f$ and $fg$ are differentiable at $t_0$ with $(f+g)'(t_0)=f'(t_0)+g'(t_0)$, $(\alpha f)'(t_0)=\alpha f'(t_0)$ and $(fg)'(t_0)=f'(t_0)g(t_0)+f(t_0)g'(t_0)$ [[thm-algebra-of-derivatives]].

[L2] $M_3(\mathbb R)$ is the function space of entries indexed by $\{0,1,2\}\times\{0,1,2\}$ with pointwise sum, so $(A+B)_{ij}=A_{ij}+B_{ij}$; the transpose is $(A^{\mathsf T})_{ij}=A_{ji}$; and the product is $(AB)_{ij}=\sum_{k=0}^{2}A_{ik}B_{kj}$ [[def-matrix-space]], [[def-transpose-of-a-matrix]], [[def-matrix-product-and-identity-matrix]].

[L3] Transposition is involutive and reverses products: $(A^{\mathsf T})^{\mathsf T}=A$ and $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ [[prop-transpose-laws]].

[L4] For $R\in SO(3)$ one has $R^{\mathsf T}R=I_3$, $\det R=1$, $R$ invertible with $R^{-1}=R^{\mathsf T}$, and also $RR^{\mathsf T}=I_3$ [[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]].

[L5] A constant function $I\to\mathbb R$ is differentiable at every point of $I$ with derivative $0$: its difference quotient at any limit point of $I$ is the constant function $0$, whose limit is $0$ [[def-derivative]].

[L6] The identity matrix $I_3$ has entries $1$ for equal indices and $0$ otherwise, and the matrix all of whose entries are $0$ is the zero matrix [[def-matrix-product-and-identity-matrix]], [[def-matrix-space]].

## Proof

**Proof technique:** direct.

1.1 For all $i,j$ the entry $(A+B)_{ij}=A_{ij}+B_{ij}$ is differentiable at $t_0$ with derivative $A'_{ij}(t_0)+B'_{ij}(t_0)$ by [L1] and [L2]; these are the entries of $A'(t_0)+B'(t_0)$, so $A+B$ is differentiable with the asserted derivative. [given, L1, L2]

1.2 For all $i,j$ the entry $(A^{\mathsf T})_{ij}=A_{ji}$ is differentiable at $t_0$ with derivative $A'_{ji}(t_0)$, which is the $(i,j)$ entry of $(A'(t_0))^{\mathsf T}$; so $A^{\mathsf T}$ is differentiable with the asserted derivative. [given, L1, L2]

1.3 For all $i,j$ the entry $(AB)_{ij}=\sum_{k=0}^{2}A_{ik}B_{kj}$ is a finite sum of products of functions differentiable at $t_0$, hence differentiable at $t_0$ with derivative $\sum_{k=0}^{2}\bigl(A'_{ik}B_{kj}+A_{ik}B'_{kj}\bigr)$ by two applications of [L1]; this sum is the $(i,j)$ entry of $A'(t_0)B(t_0)+A(t_0)B'(t_0)$ by [L2]. Hence $AB$ is differentiable at $t_0$ with $(AB)'=A'B+AB'$. [given, L1, L2]

2.1 Assume $A(t)\in SO(3)$ for all $t\in I$. By steps 1.2 and 1.3 the map $t\mapsto A(t)^{\mathsf T}A(t)$ is differentiable at $t_0$, with derivative $(A')^{\mathsf T}A+A^{\mathsf T}A'$ at $t_0$. By [L4] this map is the constant map $t\mapsto I_3$, and every entry of this constant entry function is constant, so by [L5] and [L2] its derivative at $t_0$ is the zero matrix [L6]. Hence $(A')^{\mathsf T}A+A^{\mathsf T}A'=0$ at $t_0$. [step 1.2, 1.3, given, L4, L5, L6]

2.2 By [L4] and [L3] the map $t\mapsto A(t)A(t)^{\mathsf T}$ is also the constant map $t\mapsto I_3$, so step 1.3 gives $A'A^{\mathsf T}+A(A')^{\mathsf T}=0$ at $t_0$, and transposing with [L3] gives $(A'A^{\mathsf T})^{\mathsf T}=-A'A^{\mathsf T}$. [step 1.3, 2.1, L3, L4, algebra]

3.1 Transposing the identity of step 2.1 and using [L3] gives $A^{\mathsf T}A'+(A^{\mathsf T}A')^{\mathsf T}=0$, hence $(A^{\mathsf T}A')^{\mathsf T}=-A^{\mathsf T}A'$, so $A^{\mathsf T}A'$ is skew-symmetric. [step 2.1, L3, algebra]

4.1 A skew-symmetric matrix has zero diagonal, hence trace $0$: the $(i,i)$ entry satisfies $M_{ii}=-M_{ii}$ by step 3.1 applied entrywise, so $2M_{ii}=0$ in $\mathbb R$; this applies to the two matrices of steps 3.1 and 2.2. [step 3.1, 2.2, L2, algebra] ∎
