---
id: lem-cm-rigid-labeling-stabilizer
kind: lemma
title: "A labeling containing two independent vectors has trivial $SO(3)$-stabilizer"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-special-orthogonal-group, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cross-product-norm-is-the-two-vector-gram-determinant, thm-determinant-multiplicative, def-matrix-product-and-identity-matrix, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-inner-product-space, def-euclidean-inner-product]
dependency_roles:
  def-cm-special-orthogonal-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1, printed pages 46-48"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
    - title: "J. M. Lee, Introduction to Smooth Manifolds (2003), Example 8.35, printed page 196"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
verification:
  precheck: pass
---

## Statement

Let $u,v\in\mathbb R^3$ be linearly independent and let $S\subseteq\mathbb R^3$ be a nonempty set with $u,v\in S$. If $R\in SO(3)$ satisfies $Rs=s$ for every $s\in S$, then $R=I_3$.

In the terminology of configurations, a labeling whose material points include the origin and two linearly independent vectors determines the rotation uniquely. The companion counterexample on the examples page of this pair shows that neither independence hypothesis may simply be dropped.

## Facts & Assumptions

**Given:** Linearly independent $u,v\in\mathbb R^3$, a nonempty $S\subseteq\mathbb R^3$ containing $u$ and $v$, and $R\in SO(3)$ with $Rs=s$ for every $s\in S$.

[L1] For $R\in SO(3)$ one has $R^{\mathsf T}R=I_3$ and $\det R=1$ ([[def-cm-special-orthogonal-group]]).

[L2] The cross product is bilinear and alternating and satisfies $\langle u\times v,w\rangle_2=\det[u\ v\ w]$ for all $u,v,w$, where the bracket denotes the matrix whose columns are $u,v,w$; and $u\times v$ is orthogonal to $u$ and to $v$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]]).

[L3] The determinant is multiplicative and $\det(RS)=\det R\det S$; the matrix $R[u\ v\ w]=[Ru\ Rv\ Rw]$ has the three image vectors as columns ([[thm-determinant-multiplicative]], [[def-matrix-product-and-identity-matrix]]).

[L4] Every vector of a real finite-dimensional vector space has unique coordinates in an ordered basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L5] The Euclidean inner product is positive definite: if $\langle x,z\rangle_2=0$ for every $z\in\mathbb R^3$, then $x=0$ ([[def-inner-product-space]], [[def-euclidean-inner-product]]).

[L6] For $u,v\in\mathbb R^3$, $\|u\times v\|_2^2=\det G(u,v)$ is positive exactly when $u,v$ are linearly independent ([[thm-cross-product-norm-is-the-two-vector-gram-determinant]]).

## Proof

**Proof technique:** direct.

1.1 The vector $u\times v$ is nonzero by [L6], since $u,v$ are linearly independent. By [L2] $u\times v$ is orthogonal to $u$ and to $v$, so $u\times v\notin\operatorname{span}\{u,v\}$ and $(u,v,u\times v)$ is an ordered basis of $\mathbb R^3$. [L2, L6, given, algebra]

2.1 For all $a,b\in\mathbb R^3$, $\langle Ra,Rb\rangle_2=(Ra)^{\mathsf T}(Rb)=a^{\mathsf T}R^{\mathsf T}Rb=a^{\mathsf T}b=\langle a,b\rangle_2$, by [L1] and the product and transpose rules of [L3]: the matrix product identity $(Ra)^{\mathsf T}=a^{\mathsf T}R^{\mathsf T}$ reads componentwise. Hence for every $w\in\mathbb R^3$, $\langle R(u\times v),Rw\rangle_2=\langle u\times v,w\rangle_2=\det[u\ v\ w]$ by [L2], while $\langle(Ru)\times(Rv),Rw\rangle_2=\det[Ru\ Rv\ Rw]=\det\!\bigl(R[u\ v\ w]\bigr)=\det R\det[u\ v\ w]=\det[u\ v\ w]$ by [L2] and [L3]. Subtracting gives $\langle R(u\times v)-(Ru)\times(Rv),Rw\rangle_2=0$ for every $w$; the map $w\mapsto Rw$ is surjective because $R$ is invertible, so [L5] gives $R(u\times v)=(Ru)\times(Rv)$. [step 1.1, L1, L2, L3, L5, algebra]

3.1 By the defining property of $R$, $Ru=u$ and $Rv=v$; substituting into step 2.1 gives $R(u\times v)=u\times v$. Thus $R$ fixes each vector of the basis $(u,v,u\times v)$ of step 1.1. [step 2.1, given]

4.1 Let $x\in\mathbb R^3$; by [L4] write $x=c_1u+c_2v+c_3(u\times v)$ with unique real coefficients. By linearity of $R$ and step 3.1, $Rx=c_1Ru+c_2Rv+c_3R(u\times v)=c_1u+c_2v+c_3(u\times v)=x$. Since $x$ was arbitrary, $R=I_3$. [step 1.1, step 3.1, L4, given, algebra] ∎
