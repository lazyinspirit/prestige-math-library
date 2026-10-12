---
id: def-cm-special-orthogonal-group
kind: definition
title: "The orthogonal group $O(3)$ and the rotation group $SO(3)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-determinant-of-a-square-matrix]
dependency_roles:
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds (2003), Example 8.33 (the orthogonal group) and Example 8.35 (the special orthogonal group), printed pages 194-196"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1, printed pages 46-48"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $M_3(\mathbb R)$ be the set of $3\times3$ matrices over $\mathbb R$ ([[def-matrix-space]]), with identity $I_3$ and product as in [[def-matrix-product-and-identity-matrix]], transpose $R^{\mathsf T}$ as in [[def-transpose-of-a-matrix]], and determinant $\det R$ as in [[def-determinant-of-a-square-matrix]].

The **orthogonal group** and the **special orthogonal group** are the subsets

$$O(3):=\{R\in M_3(\mathbb R):R^{\mathsf T}R=I_3\},\qquad SO(3):=\{R\in M_3(\mathbb R):R^{\mathsf T}R=I_3\ \text{and}\ \det R=1\}.$$

Equivalently $SO(3)=O(3)\cap\{R:\det R=1\}$. Elements of $SO(3)$ are called **rotations**. The identification of $M_3(\mathbb R)$ with the function space $\mathbb R^{3\times3}$ and hence with $\mathbb R^9$ is the one of [[def-matrix-space]]; when $M_3(\mathbb R)$ is regarded as a metric or topological space, this is always the Euclidean metric of that identification.

## Remarks

- That $O(3)$ and $SO(3)$ are closed under multiplication and inversion, contain $I_3$, and are subgroups of the general linear group, is proved in [[lem-cm-so3-is-a-matrix-group]]. The definition itself only records the sets and their ambient identification.

- An element $R\in O(3)$ preserves the Euclidean inner product of $\mathbb R^3$: if $R^{\mathsf T}R=I_3$ then $\langle Ru,Rv\rangle_2=\langle u,v\rangle_2$ for all $u,v$, by the matrix identities recorded in [[def-matrix-product-and-identity-matrix]]; and $R$ preserves the norm since $\|Ru\|_2^2=\langle Ru,Ru\rangle_2=\langle u,u\rangle_2$. Equivalently, the columns of $R$ form an orthonormal basis of $\mathbb R^3$. The determinant condition $\det R=1$ selects the orientation-preserving elements; an element of $O(3)$ with $\det R=-1$ reverses orientation. These statements are used only through the cited matrix identities.

- The set $O(3)$ appears here as a subset of $M_3(\mathbb R)$ with a specific defining equation; no claim is made in this item about its manifold structure, dimension or compactness. Those are supplied by [[lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold]].
