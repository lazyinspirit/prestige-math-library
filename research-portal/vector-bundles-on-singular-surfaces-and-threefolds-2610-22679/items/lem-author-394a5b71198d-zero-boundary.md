---
id: lem-author-394a5b71198d-zero-boundary
kind: lemma
title: The zero-dimensional critical-rank boundary
status: published
domain: mathematics
deps:
  - lem-author-394a5b71198d-components
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - def-vector-bundle-classes
  - math:def-axiom-of-choice
  - def-article-conventions
  - math:def-smooth-morphism-schemes
  - math:def-affine-scheme
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - math:def-algebraic-cycle-and-cycle-group
  - math:def-locally-free-sheaf-finite-rank
dependency_roles:
  lem-author-394a5b71198d-components: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme: mathematical-premise
  math:def-algebraic-cycle-and-cycle-group: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 14
---

## Statement
Assume AC. Let $k$ be an algebraically closed field, let $X$ be a nonempty smooth affine finite-type $k$-scheme of dimension zero, and let $E$ be a vector bundle of constant rank zero on $X$. Then $E=0$ and $c_0(E)=1\ne0$ in $\mathrm{CH}^0(X)$. There is no vector bundle $E\prime$ with $E\cong E\prime\oplus\mathcal O_X$. Thus the two conditions in the critical-rank splitting equivalence are both false in dimension zero.

## Statement references

[[def-article-conventions]]

[[math:def-smooth-morphism-schemes]]

[[math:def-affine-scheme]]

[[def-vector-bundle-classes]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-chern-classes-of-a-vector-bundle]]

[[math:def-chow-group-of-cycles-mod-rational-equivalence]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, a nonempty smooth affine finite-type $k$-scheme $X$ of dimension zero, and a bundle $E$ of constant rank zero. Only the bundle definition in the bundle-class supplier is used; no perfect K-theory construction or universe assumption is used here.

**Goal:** Prove $E=0$, nonvanishing of $c_0(E)$, and impossibility of a trivial line summand.

[A1] AC is retained through the component, Chow and Chern suppliers. Neither the finite component calculation nor the choice of one point below adds an infinite-choice requirement. [[math:def-axiom-of-choice]]

[F0] The article conventions define an algebraically closed base field, $k$-schemes, affine finite type, dimension, critical rank, and bundle fibres; fibre dimension equals local free rank. Smooth means that $X\to\operatorname{Spec}k$ is a smooth morphism, and affine has its scheme-theoretic meaning. [[def-article-conventions]], [[math:def-smooth-morphism-schemes]], [[math:def-affine-scheme]]

[F1] The smooth affine scheme has a finite disjoint decomposition into nonempty integral open and closed smooth affine finite-type components $X_j$, with $\dim X=\max_j\dim X_j$. The codimension Chow groups and products are componentwise. [[lem-author-394a5b71198d-components]]

[F2] By convention the zeroth Chern class is the Chow-ring unit for every bundle, including the zero bundle. [[math:def-chern-classes-of-a-vector-bundle]]

[F3] The cycle group $Z_m(Y)$ is free abelian on integral closed subschemes of dimension $m$; for integral $Y$ its fundamental cycle is the basis element $[Y]$. The group $A_m(Y)$ is the quotient by rational equivalences generated on integral closed subschemes of dimension $m+1$; for pure dimension zero, $\mathrm{CH}^0(Y)=A_0(Y)$. In dimension zero there are no such dimension-one subschemes and hence no relations. [[math:def-algebraic-cycle-and-cycle-group]], [[math:def-chow-group-of-cycles-mod-rational-equivalence]]

[F4] A vector bundle is a finite locally free module sheaf, and a bundle isomorphism is an invertible module-sheaf map. A rank-zero locally free sheaf is zero; local free rank is well-defined, nonnegative and invariant under isomorphism. For module sheaves $G,H$, the finite direct sum has sections $(G\oplus H)(U)=G(U)\oplus H(U)$ and componentwise restrictions; the sheaf gluing axioms hold in each coordinate. On a common local free chart of ranks $r,s$, concatenating coordinates identifies this sum with $\mathcal O^{r+s}$, so local ranks add. In particular $\mathcal O_X$ has rank one. [[def-vector-bundle-classes]], [[math:def-locally-free-sheaf-finite-rank]]

[F5] On a smooth equidimensional finite-type $k$-scheme $Y$, the unit of its integral Chow ring is the fundamental class $[Y]$. In particular this applies to every zero-dimensional integral component $X_j$. [[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]

## Proof

1.1 By [F4], $E$ is the zero bundle. By [F1] and the dimension-zero hypothesis, every $X_j$ has dimension zero. Such an integral component has no proper nonempty irreducible closed subset: one would give a strict chain of length one. Thus by [F3], $\mathrm{CH}^0(X_j)=\mathbb Z[X_j]$, with no rational-equivalence relations, and [F1] gives $\mathrm{CH}^0(X)=\bigoplus_j\mathbb Z[X_j]$. Each $X_j$ satisfies the smooth, finite-type and equidimensional hypotheses of [F5], which identifies its unit with the basis element $[X_j]$. Hence the unit of the componentwise Chow ring has coefficient one on every component. Since $X$ is nonempty, there is at least one component, so this unit is nonzero. By [F2] it is exactly $c_0(E)$. [A1, F0, F1, F2, F3, F4, F5, given]

2.1 Suppose $E\cong E\prime\oplus\mathcal O_X$. Choose a point $x\in X$, possible since $X$ is nonempty, and a local free chart for $E\prime$ near $x$, of rank $r\geq0$. By the coordinate description in [F4], the sum is free of rank $r+1$ on that chart. Its fibre at $x$ therefore has dimension $r+1$ by [F0], whereas the fibre of the zero bundle $E$ has dimension zero. An isomorphism preserves local free rank by [F4], so $0=r+1$, impossible. Thus splitting and top-Chern vanishing both fail, as stated. [F0, F4, step 1.1, given] ∎
