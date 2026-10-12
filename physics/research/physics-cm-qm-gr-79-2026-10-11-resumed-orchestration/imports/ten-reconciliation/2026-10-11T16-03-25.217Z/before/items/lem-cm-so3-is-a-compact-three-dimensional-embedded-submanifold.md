---
id: lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold
kind: lemma
title: "$SO(3)$ is a compact three-dimensional embedded submanifold of $M_3(\\mathbb R)$, with tangent space the matrices $R\\Omega$ for skew $\\Omega$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-special-orthogonal-group, thm-a-regular-level-set-is-an-embedded-submanifold, prop-tangent-space-of-a-regular-level-set-is-the-kernel, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-euclidean-maps-and-diffeomorphisms, thm-total-derivative-computes-directional-and-partial-derivatives, thm-metric-continuity-characterisations, thm-metric-hausdorff-separation, thm-t1-iff-singletons-are-closed, cor-determinant-is-a-polynomial-in-the-matrix-entries, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, thm-heine-borel-rn, def-metric-compactness, def-euclidean-inner-product, def-matrix-space]
dependency_roles:
  def-cm-special-orthogonal-group: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  prop-tangent-space-of-a-regular-level-set-is-the-kernel: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  thm-metric-hausdorff-separation: mathematical-premise
  thm-t1-iff-singletons-are-closed: mathematical-premise
  cor-determinant-is-a-polynomial-in-the-matrix-entries: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-metric-compactness: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds (2003), Examples 8.33 and 8.35, printed pages 195-196"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1, printed pages 46-48"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Identify $M_3(\mathbb R)$ with $\mathbb R^{3\times3}$ and hence with $\mathbb R^9$ as in [[def-matrix-space]], with the Euclidean metric of that identification ([[def-euclidean-inner-product]]).

1. $SO(3)$ is an embedded submanifold of $M_3(\mathbb R)$ of dimension $3$, and it is both open and closed in the subset topology of $O(3)$ inside $M_3(\mathbb R)$.
2. For every $R\in SO(3)$ the tangent space is

$$T_RSO(3)=\{\,R\Omega:\Omega\in M_3(\mathbb R),\ \Omega^{\mathsf T}=-\Omega\,\}.$$

3. $SO(3)$ is compact ([[def-metric-compactness]]).

## Facts & Assumptions

**Given:** The sets $O(3)$ and $SO(3)$ of [[def-cm-special-orthogonal-group]], with $M_3(\mathbb R)$ identified with $\mathbb R^9$.

[F1] Regular level sets: if $F:M^m\to N^n$ is smooth, $q$ is a regular value and $F^{-1}(q)$ is nonempty, then $F^{-1}(q)$ is an embedded submanifold of codimension $n$; and for $p\in F^{-1}(q)$ one has $T_pF^{-1}(q)=\ker dF_p$ ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

[F2] Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, composites of $C^k$ Euclidean maps are $C^k$, and a map is $C^\infty$ when it is $C^k$ for every $k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] If $f$ is totally differentiable at $a$, then its directional derivative in the direction $v$ exists and equals $Df(a)v$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[F4] For a continuous map of metric spaces, preimages of open sets are open and preimages of closed sets are closed; singletons in a metric space are closed, because metric spaces are Hausdorff and a space is T1 exactly when its singletons are closed; and the determinant $M_3(\mathbb R)\to\mathbb R$ is a polynomial in the matrix entries ([[thm-metric-continuity-characterisations]], [[thm-metric-hausdorff-separation]], [[thm-t1-iff-singletons-are-closed]], [[cor-determinant-is-a-polynomial-in-the-matrix-entries]]).

[F5] An open subset of a smooth manifold carries the restricted structure of a smooth manifold of the same dimension, embedded in the ambient manifold, and its tangent space at each of its points is the ambient tangent space there ([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

[F6] A subset of $\mathbb R^n$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]], [[def-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 Define $f:M_3(\mathbb R)\to M_3(\mathbb R)$ by $f(A):=A^{\mathsf T}A$, whose image lies in the linear subspace $\operatorname{Sym}_3(\mathbb R)$ of symmetric matrices. The components are $f_{ij}(A)=\sum_{k<3}a_{ki}a_{kj}$, finite sums of products of the coordinate functions $A\mapsto a_{ki}$, and each coordinate function is a linear, hence $C^k$ for every $k$, Euclidean map; by [F2] the map $f$ is $C^k$ for every $k$, hence $C^\infty$. The symmetric matrices form a linear subspace of dimension $6$: the six entries in the positions $(i,j)$ with $i\le j$ give a linear isomorphism onto $\mathbb R^6$. [F2, given, algebra]

2.1 For $A,H\in M_3(\mathbb R)$ and real $t$, $f(A+tH)=(A^{\mathsf T}+tH^{\mathsf T})(A+tH)=A^{\mathsf T}A+t(A^{\mathsf T}H+H^{\mathsf T}A)+t^2H^{\mathsf T}H$, so $(f(A+tH)-f(A))/t$ tends to $A^{\mathsf T}H+H^{\mathsf T}A$ as $t\to0$; since $f$ is smooth, it is totally differentiable, and by [F3] $Df(A)H=A^{\mathsf T}H+H^{\mathsf T}A$. If $A\in O(3)$ then $A^{\mathsf T}A=I_3$ and the derivative is surjective onto $\operatorname{Sym}_3(\mathbb R)$: for symmetric $S$ take $H:=AS/2$, so that $A^{\mathsf T}H+H^{\mathsf T}A=A^{\mathsf T}AS/2+S^{\mathsf T}A^{\mathsf T}A/2=S/2+S/2=S$. Hence $I_3$ is a regular value, and by [F1] the fibre $O(3)=f^{-1}(I_3)$ is an embedded submanifold of $M_3(\mathbb R)$ of dimension $9-6=3$ with $T_AO(3)=\ker Df(A)$ for $A\in O(3)$. [step 1.1, F1, F3, algebra]

3.1 For $A\in O(3)$ the kernel is $\{AK:K^{\mathsf T}=-K\}$: if $K$ is skew then $Df(A)(AK)=A^{\mathsf T}AK+(AK)^{\mathsf T}A=K+K^{\mathsf T}=0$; conversely, if $A^{\mathsf T}H+H^{\mathsf T}A=0$, put $K:=A^{\mathsf T}H$, so that $K^{\mathsf T}=H^{\mathsf T}A=-A^{\mathsf T}H=-K$ and $H=AK$ because $A$ is invertible with $AA^{\mathsf T}=I_3$. Combining with step 2.1, $T_AO(3)=\{AK:K^{\mathsf T}=-K\}$. [step 2.1, algebra]

4.1 If $A\in O(3)$ then $(\det A)^2=\det(A^{\mathsf T})\det A=\det(A^{\mathsf T}A)=\det I_3=1$, so on $O(3)$ the two conditions $\det A>0$ and $\det A=1$ define the same subset, and $SO(3)=O(3)\cap\det^{-1}((0,\infty))=O(3)\cap\det^{-1}(\{1\})$. By [F4] the determinant is continuous, $(0,\infty)$ is open and $\{1\}$ is closed, so both preimages are open respectively closed; hence $SO(3)$ is open and closed in $O(3)$. By [F5] it is an embedded submanifold of $M_3(\mathbb R)$ of dimension $3$, and its tangent space at $R\in SO(3)$ is $T_RO(3)=\{R\Omega:\Omega^{\mathsf T}=-\Omega\}$ by step 3.1. This proves clauses 1 and 2. [step 2.1, step 3.1, F4, F5, algebra]

5.1 $SO(3)$ is closed in $M_3(\mathbb R)$ as the intersection of the closed sets $O(3)=f^{-1}(\{I_3\})$ and $\det^{-1}(\{1\})$, using continuity of $f$ and of the determinant and closedness of singletons from [F4]. It is bounded: if $A\in SO(3)$ then the relation $A^{\mathsf T}A=I_3$ says that the columns of $A$ are unit vectors, so $|a_{ij}|\le1$ for all $i,j$ and the Frobenius norm obeys $\|A\|_F^2=\sum_{i,j}a_{ij}^2\le9$. By [F6] a closed and bounded subset of $\mathbb R^9$ is compact, so $SO(3)$ is compact. This proves clause 3. [step 4.1, F4, F6, algebra] ∎
