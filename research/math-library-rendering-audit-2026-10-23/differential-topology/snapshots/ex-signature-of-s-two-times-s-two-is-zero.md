---
id: ex-signature-of-s-two-times-s-two-is-zero
kind: example
title: "The signature of the product of two 2-spheres is zero: the hyperbolic intersection form"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 12
deps:
  - cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - cor-four-dimensional-signature-formula
  - cor-homology-of-spheres
  - def-axiom-of-choice
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-middle-dimensional-intersection-form
  - def-product-orientation
  - def-signature-of-a-closed-oriented-four-k-manifold
  - lem-fundamental-class-of-a-product-of-closed-manifolds
  - lem-kronecker-pairing-is-multiplicative-under-cross-products
  - lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - thm-top-homology-characterizes-compact-orientable-manifolds
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Example 11.17, printed p. 95: the hyperbolic intersection form of $S^2\\times S^2$ and its zero signature"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original pp. 224-225: the signature is the inertia difference of the middle form"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed pp. 34-35: the rational signature and its product property; the hyperbolic example is computed locally and appears in Freed Example 11.17"
verification:
  precheck: pass
---

## Example

Assume AC, inherited from Poincare duality, the Kuenneth suppliers and the
signature definition. Equip $S^2$ with its standard orientation and
$S^2\times S^2$ with the product orientation and product smooth structure. Let
$z\in H^2(S^2;\mathbb Z)$ be the orientation class, characterized by
$\langle z,[S^2]\rangle=1$, and set
$a=\mathrm{pr}_1^*z$, $b=\mathrm{pr}_2^*z$. Then
$$H^2(S^2\times S^2;\mathbb Z)=\mathbb Z a\oplus\mathbb Z b,\qquad a\cdot a=0,\qquad b\cdot b=0,\qquad a\cdot b=1,$$
so the middle-dimensional intersection form is the hyperbolic matrix
$\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and
$$\sigma(S^2\times S^2)=0.$$
Consequently the first Pontryagin number vanishes:
$p_1[S^2\times S^2]=0$.

## Facts & Assumptions

**Given:** AC; the standard orientation of $S^2$ with its orientation class $z$ and fundamental class $[S^2]$; the product orientation and product smooth structure on $S^2\times S^2$; the projections $\mathrm{pr}_1,\mathrm{pr}_2$.

[F1] For a commutative ring $R$ that is a PID with either every $H_q(Y;R)$ or every $H_p(X;R)$ finite free over $R$, the external product is a graded-ring isomorphism $H^*(X;R)\otimes_RH^*(Y;R)\to H^*(X\times Y;R)$; this uses AC ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F2] For $n\ge1$, $\widetilde H_k(S^n;G)=G$ for $k=n$ and $0$ otherwise, so $H_2(S^2;\mathbb Z)\cong\mathbb Z$ and $H_*(S^2;\mathbb Z)$ is free ([[cor-homology-of-spheres]]). The fundamental class $[S^2]$ of [[def-fundamental-class-of-a-compact-oriented-manifold]] restricts at every point to the local generator of the standard orientation, and for the compact connected boundaryless manifold $S^2$ restriction to every local stalk is injective with image $\mathbb Z$ ([[thm-top-homology-characterizes-compact-orientable-manifolds]]); hence under the identification $H_2(S^2;\mathbb Z)\cong\mathbb Z$ the class $[S^2]$ corresponds to $\pm1$ and generates $H_2(S^2;\mathbb Z)$.

[F3] For every space $X$ and $n\ge0$ the universal coefficient sequence $0\to\operatorname{Ext}^1_{\mathbb Z}(H_{n-1}(X;\mathbb Z),G)\to H^n(X;G)\to\operatorname{Hom}_{\mathbb Z}(H_n(X;\mathbb Z),G)\to0$ is natural with evaluation as the second map; this uses AC ([[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]). Over a field the evaluation map alone is an isomorphism ([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]).

[F4] With the product orientation and product smooth structure, $S^2\times S^2$ is a closed oriented smooth $4$-manifold and $[S^2\times S^2]=[S^2]\times[S^2]$ ([[def-product-orientation]], [[lem-fundamental-class-of-a-product-of-closed-manifolds]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F5] The Kronecker pairing is multiplicative under cross products: $\langle\alpha\times\beta,c\times d\rangle_{X\times Y}=\langle\alpha,c\rangle_X\langle\beta,d\rangle_Y$ ([[lem-kronecker-pairing-is-multiplicative-under-cross-products]]).

[F6] The middle-dimensional intersection form is $Q_M(x,y)=\langle x\smile y,[M]\rangle$ on $H^{2k}(M;\mathbb R)$, it is symmetric and nondegenerate, and $\sigma(M)$ is the positive minus the negative inertia index of $Q_M$ ([[def-middle-dimensional-intersection-form]], [[lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate]], [[def-signature-of-a-closed-oriented-four-k-manifold]]).

[F7] For every closed oriented smooth $4$-manifold $M$, $p_1[M]=3\,\sigma(M)$ ([[cor-four-dimensional-signature-formula]]).

## Verification

**Proof technique:** compute the Kuenneth basis and evaluate the four products on the product fundamental class.

1.1 By [F2], $H_*(S^2;\mathbb Z)$ is free with $H^0(S^2;\mathbb Z)=\mathbb Z\langle 1\rangle$, the class $[S^2]$ generates $H_2(S^2;\mathbb Z)\cong\mathbb Z$, and by [F3] applied to $n=2$ the evaluation $H^2(S^2;\mathbb Z)\to\operatorname{Hom}_{\mathbb Z}(H_2(S^2;\mathbb Z),\mathbb Z)$ is an isomorphism because $\operatorname{Ext}^1_{\mathbb Z}(H_1(S^2;\mathbb Z),\mathbb Z)=0$; hence the dual generator $z$ is the unique class in $H^2(S^2;\mathbb Z)$ with $\langle z,[S^2]\rangle=1$, and it is the orientation class of the statement. [given, F2, F3]

2.1 By [F1] with $X=Y=S^2$ and $R=\mathbb Z$, the cross product is a ring isomorphism $H^*(S^2;\mathbb Z)\otimes H^*(S^2;\mathbb Z)\to H^*(S^2\times S^2;\mathbb Z)$; on degree two it identifies $a=\mathrm{pr}_1^*z$ with $z\otimes1$ and $b=\mathrm{pr}_2^*z$ with $1\otimes z$, so $H^2(S^2\times S^2;\mathbb Z)=\mathbb Z a\oplus\mathbb Z b$, while $a\smile a$ corresponds to $(z\smile z)\otimes1$, which is zero because $H^4(S^2;\mathbb Z)=0$ by [F3] and [F2]; $b\smile b=0$ likewise. [step 1.1, F1, F2, F3]

3.1 By [F4] the product is a closed oriented smooth $4$-manifold with fundamental class $[S^2]\times[S^2]$, so by [F6] and [F5], $Q(a,a)=\langle a\smile a,[S^2]\times[S^2]\rangle=0$, $Q(b,b)=0$, and $Q(a,b)=\langle a\smile b,[S^2]\times[S^2]\rangle=\langle z\times z,[S^2]\times[S^2]\rangle=\langle z,[S^2]\rangle\langle z,[S^2]\rangle=1$. [step 2.1, F4, F5, F6]

4.1 By [F1] over $\mathbb R$ and field evaluation [F3], the coefficient images of $a,b$ form a real basis (the normalized integral class $z$ maps to the normalized real class); thus in the basis $\{a,b\}$ the matrix of $Q$ is the hyperbolic matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$; the class $a+b$ satisfies $Q(a+b,a+b)=2>0$ and $a-b$ satisfies $Q(a-b,a-b)=-2<0$, and $Q(a+b,a-b)=0$. Since $a+b,a-b$ form a basis, this diagonalizes the form to $\operatorname{diag}(2,-2)$, so the inertia is $(1,1,0)$ and [F6] gives $\sigma(S^2\times S^2)=1-1=0$. [step 3.1, F1, F3, F6]

5.1 By [F7], $p_1[S^2\times S^2]=3\sigma(S^2\times S^2)=3\cdot0=0$, as claimed. [step 4.1, F7] ∎
