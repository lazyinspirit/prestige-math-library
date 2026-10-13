---
id: def-cm-special-orthogonal-group
kind: definition
title: "The orthogonal group $O(3)$ and the rotation group $SO(3)$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, prop-transpose-laws, thm-matrix-multiplication-laws, def-group, def-invertible-matrix-and-general-linear-group, def-determinant-of-a-square-matrix, def-euclidean-inner-product, def-orthogonal-vectors-sets-and-orthonormal-bases, def-orientation-of-a-finite-dimensional-real-vector-space, thm-determinant-multiplicative, thm-determinant-of-transpose, thm-real-square-matrix-invertible-iff-determinant-nonzero]
dependency_roles:
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  prop-transpose-laws: mathematical-premise
  thm-matrix-multiplication-laws: mathematical-premise
  def-group: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  thm-real-square-matrix-invertible-iff-determinant-nonzero: mathematical-premise
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

- The set $O(3)$ is a group under matrix multiplication. It contains $I_3$, and if $A,B\in O(3)$ then $(AB)^{\mathsf T}(AB)=B^{\mathsf T}A^{\mathsf T}AB=I_3$. For $A\in O(3)$, determinant multiplicativity and $\det(A^{\mathsf T})=\det A$ give $(\det A)^2=\det(A^{\mathsf T}A)=1$, so $A$ is invertible; $A^{\mathsf T}A=I_3$ then gives $A^{-1}=A^{\mathsf T}$ and $AA^{\mathsf T}=I_3$, hence $A^{\mathsf T}\in O(3)$. The stronger fact that $SO(3)$ is a subgroup of $GL_3(\mathbb R)$ is proved in [[lem-cm-so3-is-a-matrix-group]].

- An element $R\in O(3)$ preserves the Euclidean inner product of $\mathbb R^3$: $\langle Ru,Rv\rangle_2=u^{\mathsf T}R^{\mathsf T}Rv=\langle u,v\rangle_2$ for all $u,v$. Its three columns therefore form an orthonormal triple. Relative to the standard orientation determined by the standard basis, $\det R=1$ means orientation preserving and $\det R=-1$ means orientation reversing ([[def-orientation-of-a-finite-dimensional-real-vector-space]]).

- The set $O(3)$ appears here as a subset of $M_3(\mathbb R)$ with a specific defining equation; no claim is made in this item about its manifold structure, dimension or compactness. Those are supplied by [[lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold]].
