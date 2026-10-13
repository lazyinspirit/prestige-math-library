---
id: lem-cm-rigid-labeling-stabilizer
kind: lemma
title: "A labeling containing two independent vectors has trivial $SO(3)$-stabilizer"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-special-orthogonal-group, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cross-product-norm-is-the-two-vector-gram-determinant, thm-determinant-multiplicative, thm-real-square-matrix-invertible-iff-determinant-nonzero, prop-transpose-laws, def-matrix-product-and-identity-matrix, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-steinitz-exchange, lem-standard-basis-of-f-n, def-inner-product-space, def-euclidean-inner-product]
dependency_roles:
  def-cm-special-orthogonal-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-real-square-matrix-invertible-iff-determinant-nonzero: mathematical-premise
  prop-transpose-laws: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  thm-steinitz-exchange: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
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

For $S\subseteq\mathbb R^3$, its **pointwise $SO(3)$ stabilizer** is

$$\operatorname{Stab}_{SO(3)}(S):=\{R\in SO(3):Rs=s\text{ for every }s\in S\}.$$

Let $u,v\in\mathbb R^3$ be linearly independent and let $S\subseteq\mathbb R^3$ be a nonempty set with $u,v\in S$. If $R\in SO(3)$ satisfies $Rs=s$ for every $s\in S$, then $R=I_3$.

Equivalently, $\operatorname{Stab}_{SO(3)}(S)=\{I_3\}$. The conclusion uses only the two indicated independent vectors; no assumption that $0\in S$ is made.

## Facts & Assumptions

**Given:** Linearly independent $u,v\in\mathbb R^3$, a nonempty $S\subseteq\mathbb R^3$ containing $u$ and $v$, and $R\in SO(3)$ with $Rs=s$ for every $s\in S$.

[L1] For $R\in SO(3)$ one has $R^{\mathsf T}R=I_3$ and $\det R=1$ ([[def-cm-special-orthogonal-group]]).

[L2] The cross product is bilinear and alternating and satisfies $\langle u\times v,w\rangle_2=\det[u\ v\ w]$ for all $u,v,w$, where the bracket denotes the matrix whose columns are $u,v,w$; and $u\times v$ is orthogonal to $u$ and to $v$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]]).

[L3] Transpose reverses products, $(Ra)^{\mathsf T}=a^{\mathsf T}R^{\mathsf T}$, the determinant is multiplicative, and the matrix $R[u\ v\ w]=[Ru\ Rv\ Rw]$ has the three image vectors as columns ([[prop-transpose-laws]], [[thm-determinant-multiplicative]], [[def-matrix-product-and-identity-matrix]]).

[L4] Every vector of a real finite-dimensional vector space has unique coordinates in an ordered basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L5] The Euclidean inner product is positive definite: if $\langle x,z\rangle_2=0$ for every $z\in\mathbb R^3$, then $x=0$ ([[def-inner-product-space]], [[def-euclidean-inner-product]]).

[L6] For $u,v\in\mathbb R^3$, $\|u\times v\|_2^2=\det G(u,v)$ is positive exactly when $u,v$ are linearly independent ([[thm-cross-product-norm-is-the-two-vector-gram-determinant]]).

[L7] The standard basis of $\mathbb R^3$ spans $\mathbb R^3$ and has three elements ([[lem-standard-basis-of-f-n]] with $F=\mathbb R$ and $n=3$); by the Steinitz exchange theorem, any linearly independent three-element subset of $\mathbb R^3$ spans it ([[thm-steinitz-exchange]]).

[L8] For $R\in SO(3)$, $\det R=1$, so $R$ is invertible by the square-matrix determinant criterion ([[def-cm-special-orthogonal-group]], [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

## Proof

**Proof technique:** direct.

1.1 Put $w:=u\times v$. It is nonzero by [L6]. If $w\in\operatorname{span}\{u,v\}$, then $w$ is orthogonal to every vector in that span by [L2], hence to itself; positive definiteness [L5] would give $w=0$, a contradiction. Thus $w\notin\operatorname{span}\{u,v\}$. If $\alpha u+\beta v+\gamma w=0$ and $\gamma\ne0$, then $w\in\operatorname{span}\{u,v\}$; hence $\gamma=0$, and independence of $u,v$ gives $\alpha=\beta=0$. So $u,v,w$ are linearly independent. By [L7] their three-element set spans $\mathbb R^3$, hence $(u,v,w)$ is an ordered basis. [L2, L5, L6, L7, given, algebra]

2.1 For all $a,b\in\mathbb R^3$, $\langle Ra,Rb\rangle_2=(Ra)^{\mathsf T}(Rb)=a^{\mathsf T}R^{\mathsf T}Rb=a^{\mathsf T}b=\langle a,b\rangle_2$, by [L1] and [L3]. Hence for every $z\in\mathbb R^3$, $\langle R(u\times v),Rz\rangle_2=\langle u\times v,z\rangle_2=\det[u\ v\ z]$ by [L2], while $\langle(Ru)\times(Rv),Rz\rangle_2=\det[Ru\ Rv\ Rz]=\det\!\bigl(R[u\ v\ z]\bigr)=\det R\det[u\ v\ z]=\det[u\ v\ z]$ by [L2] and [L3]. Subtracting gives $\langle R(u\times v)-(Ru)\times(Rv),Rz\rangle_2=0$ for every $z$. Since $R$ is invertible by [L8], $Rz$ ranges over all of $\mathbb R^3$, so [L5] gives $R(u\times v)=(Ru)\times(Rv)$. [step 1.1, L1, L2, L3, L5, L8, algebra]

3.1 By the defining property of $R$, $Ru=u$ and $Rv=v$; substituting into step 2.1 gives $R(u\times v)=u\times v$. Thus $R$ fixes each vector of the basis $(u,v,u\times v)$ of step 1.1. [step 2.1, given]

4.1 Let $x\in\mathbb R^3$; by [L4] write $x=c_1u+c_2v+c_3(u\times v)$ with unique real coefficients. By linearity of $R$ and step 3.1, $Rx=c_1Ru+c_2Rv+c_3R(u\times v)=c_1u+c_2v+c_3(u\times v)=x$. Since $x$ was arbitrary, $R=I_3$. [step 1.1, step 3.1, L4, given, algebra] ∎
