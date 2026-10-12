---
id: lem-cm-oriented-orthonormal-triads
kind: lemma
title: "Oriented orthonormal triads in $\\mathbb R^3$: existence over any unit vector, and the orthonormal expansion with no fourth orthogonal direction"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [lem-cm-cross-product-triple-identity, def-cross-product-in-r3, def-euclidean-inner-product, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cross-product-norm-is-the-two-vector-gram-determinant, lem-standard-basis-of-f-n, lem-finite-sum-laws, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, def-orthogonal-vectors-sets-and-orthonormal-bases, def-inner-product-space]
dependency_roles:
  lem-cm-cross-product-triple-identity: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-bessel-inequality-for-an-arbitrary-orthonormal-family: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  def-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.1 and §2.5.4: orthonormal vector triads, the right-handed relation $\\mathbf e_1\\times\\mathbf e_2=\\mathbf e_3$ and planar coordinates in the orbital plane"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §2.4: Cartesian components, orthonormal bases and the scalar-product expansion $\\mathbf a=(\\mathbf a\\cdot\\mathbf e_1)\\mathbf e_1+(\\mathbf a\\cdot\\mathbf e_2)\\mathbf e_2$"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html"
---

## Statement

Call a triple $(e_1,e_2,e_3)$ of vectors of $\mathbb R^3$ an **oriented
orthonormal triad** when $\langle e_i,e_j\rangle=\delta_{ij}$ for all
$i,j\in\{1,2,3\}$ and $e_1\times e_2=e_3$. Then:

1. **Existence.** For every $e_3\in\mathbb R^3$ with $|e_3|=1$ there are
   $e_1,e_2\in\mathbb R^3$ such that $(e_1,e_2,e_3)$ is an oriented orthonormal
   triad.
2. **Dimension bound.** Every orthonormal list
   $f_1,\dots,f_m\in\mathbb R^3$ (pairwise orthogonal unit vectors) has
   $m\le3$; consequently, for every oriented orthonormal triad $(e_1,e_2,e_3)$
   and every $x\in\mathbb R^3$,
   $$x=\langle x,e_1\rangle e_1+\langle x,e_2\rangle e_2+\langle x,e_3\rangle e_3, \qquad |x|^2=\langle x,e_1\rangle^2+\langle x,e_2\rangle^2+\langle x,e_3\rangle^2 .$$

Throughout, $\langle\cdot,\cdot\rangle$ and $|\cdot|$ are the Euclidean inner
product and norm ([[def-euclidean-inner-product]]), $\times$ is the cross
product ([[def-cross-product-in-r3]]), and $s_1,s_2,s_3$ is the standard basis
of $\mathbb R^3$ ([[lem-standard-basis-of-f-n]]).

## Facts & Assumptions

**Given:** A unit vector $e_3\in\mathbb R^3$, standard basis vectors $s_1,s_2,s_3$, and arbitrary orthonormal lists as in the statement.

[L1] The triple product identity $u\times(v\times w)=\langle u,w\rangle v-\langle u,v\rangle w$ holds for all $u,v,w\in\mathbb R^3$ ([[lem-cm-cross-product-triple-identity]]).

[L2] The cross product is bilinear and alternating and is orthogonal to both factors; and $|u\times v|^2=|u|^2|v|^2-\langle u,v\rangle^2$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[def-euclidean-inner-product]]).

[L3] The standard basis is orthonormal: $\langle s_i,s_j\rangle=\delta_{ij}$, and every $x\in\mathbb R^n$ is $x=\sum_{j=1}^3\langle x,s_j\rangle s_j$ with $|x|^2=\sum_{j=1}^3\langle x,s_j\rangle^2$, by the coordinate definition of the Euclidean inner product and the standard basis ([[lem-standard-basis-of-f-n]], [[def-euclidean-inner-product]]).

[L4] Bessel's inequality: for an orthonormal family $(f_1,\dots,f_m)$ in an inner product space ([[def-inner-product-space]], [[def-orthogonal-vectors-sets-and-orthonormal-bases]]) and every vector $x$, $\sum_{i=1}^m\langle x,f_i\rangle^2\le|x|^2$ ([[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]]).

[L5] Finite sums may be reordered and combined ([[lem-finite-sum-laws]]); and two distinct standard basis vectors are not parallel, since they have distinct, nonvanishing coordinates.

## Proof

**Proof technique:** direct.

1.1 At most one standard basis vector is parallel to $e_3$: if $s_i=\lambda e_3$ and $s_j=\mu e_3$ with $i\ne j$ and $\lambda,\mu\ne0$, then $s_i=(\lambda/\mu)s_j$, which is false because $s_i$ and $s_j$ have $1$ in different coordinates. Hence some $k$ with $s_k$ not parallel to $e_3$ exists. [given, L3, L5]

1.2 Let $f_1,\dots,f_m\in\mathbb R^3$ be orthonormal, and suppose $m\ge4$. Applying Bessel's inequality [L4] to each standard basis vector $s_j$ gives $\sum_{i=1}^m\langle s_j,f_i\rangle^2\le|s_j|^2=1$. Summing over $j=1,2,3$ and exchanging the finite sums [L5] gives $\sum_{i=1}^m\sum_{j=1}^3\langle s_j,f_i\rangle^2\le3$. [given, L3, L4, L5]

2.1 Put $v:=s_k-\langle s_k,e_3\rangle e_3$. Then $v\ne0$: otherwise $s_k=\langle s_k,e_3\rangle e_3$ is parallel to $e_3$, contrary to step 1.1. Set $e_1:=v/|v|$. Then $\langle e_1,e_3\rangle=0$ and $|e_1|=1$, because $\langle v,e_3\rangle=\langle s_k,e_3\rangle-\langle s_k,e_3\rangle|e_3|^2=0$ and $|v|\ne0$. [step 1.1, L3, algebra]

2.2 For each $i$, the standard-basis expansion of [L3] applied to $f_i$ gives $\sum_{j=1}^3\langle s_j,f_i\rangle^2=|f_i|^2=1$. Hence the left-hand side of step 1.2 equals $\sum_{i=1}^m1=m\ge4$, contradicting the bound $\le3$ of step 1.2. Therefore no orthonormal list in $\mathbb R^3$ has four or more members. [step 1.2, L3, L5]

3.1 Set $e_2:=e_3\times e_1$. By [L2], $\langle e_2,e_3\rangle=0=\langle e_2,e_1\rangle$ and $|e_2|^2=|e_3|^2|e_1|^2-\langle e_3,e_1\rangle^2=1$; and $e_1\times e_2=e_1\times(e_3\times e_1)=\langle e_1,e_1\rangle e_3-\langle e_1,e_3\rangle e_1=e_3$ by the triple product identity [L1]. So $(e_1,e_2,e_3)$ is an oriented orthonormal triad, which is clause 1. [step 2.1, L1, L2, algebra]

3.2 Let $(e_1,e_2,e_3)$ be an oriented orthonormal triad and $x\in\mathbb R^3$. Put $w:=x-\sum_{i=1}^3\langle x,e_i\rangle e_i$. Then $\langle w,e_j\rangle=\langle x,e_j\rangle-\sum_i\langle x,e_i\rangle\delta_{ij}=0$ for each $j$, by bilinearity of the inner product. If $w\ne0$, then $e_1,e_2,e_3,w/|w|$ would be four pairwise orthogonal unit vectors, contradicting step 2.2; hence $w=0$, which is the expansion. [given, step 2.2, L3, algebra]

4.1 With the expansion in hand, $$|x|^2=\Bigl\langle\sum_i\langle x,e_i\rangle e_i,\sum_k\langle x,e_k\rangle e_k\Bigr\rangle=\sum_{i,k}\langle x,e_i\rangle\langle x,e_k\rangle\delta_{ik}=\sum_i\langle x,e_i\rangle^2,$$ by bilinearity and orthonormality. This completes clause 2. [step 3.2, L3, algebra] ∎
