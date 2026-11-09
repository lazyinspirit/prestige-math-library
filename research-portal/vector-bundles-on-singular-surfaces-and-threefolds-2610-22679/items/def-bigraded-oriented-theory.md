---
id: def-bigraded-oriented-theory
kind: definition
title: Bigraded cohomology and the projective bundle contract
status: draft
domain: mathematics
deps:
  - math:def-projective-bundle-scheme
  - math:def-picard-group-scheme
  - math:def-axiom-of-choice
dependency_roles:
  math:def-projective-bundle-scheme: mathematical-premise
  math:def-picard-group-scheme: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition
Assume the Axiom of Choice. Fix a category $\mathcal C$ of schemes and scheme morphisms that is closed under the following operations: for every $X$ in $\mathcal C$, every finite locally free $\mathcal O_X$-module $E$ of constant positive rank, and every morphism $f:Y\to X$ in $\mathcal C$, the projective bundle $\pi:\mathbb P_X(E)\to X$, its base change $\mathbb P_Y(f^*E)\to Y$, and the induced base-change morphism are in $\mathcal C$. A finite locally free module of rank $r$ is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^r$; a line bundle is one of rank one.

An **additively oriented bigraded theory with the projective bundle contract** on $\mathcal C$ consists of the following data and axioms.

1. For each $X$ and each $(a,b)\in\mathbb Z^2$, an abelian group $H^{a,b}(X)$. Their direct sum $H^{*,*}(X)$ is an associative unital ring, with unit $1_X\in H^{0,0}(X)$ and bilinear multiplication sending $H^{a,b}(X)\times H^{c,d}(X)$ to $H^{a+c,b+d}(X)$. It is graded-commutative in the first degree: $xy=(-1)^{ac}yx$ for homogeneous $x$ and $y$ of first degrees $a$ and $c$.

2. For every morphism $f:Y\to X$ in $\mathcal C$, a degree-preserving unital ring homomorphism $f^*:H^{*,*}(X)\to H^{*,*}(Y)$. Pullback is contravariantly functorial: $(\operatorname{id}_X)^*=\operatorname{id}$ and $(f\circ g)^*=g^*f^*$.

3. A natural group homomorphism $c_1:\operatorname{Pic}(X)\to H^{2,1}(X)$ for every $X$. Here $\operatorname{Pic}(X)$ is the group of isomorphism classes of line bundles under tensor product, and the target uses addition. Naturality means $f^*c_1(L)=c_1(f^*L)$. Thus $c_1(L\otimes M)=c_1(L)+c_1(M)$ and $c_1(\mathcal O_X)=0$.

4. For every rank-$r>0$ bundle $E$ on $X$, use the quotient convention $\mathbb P_X(E)=\operatorname{Proj}_X\operatorname{Sym}(E)$, with tautological quotient line bundle $\mathcal O_{\mathbb P_X(E)}(1)$. Put $\xi=c_1(\mathcal O_{\mathbb P_X(E)}(1))$. For every $(a,b)$, the homomorphism
$$\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\longrightarrow H^{a,b}(\mathbb P_X(E)),\qquad (x_m)_m\longmapsto\sum_{m=0}^{r-1}\pi^*(x_m)\xi^m$$
is an isomorphism. This is the **projective bundle contract**. The rank-zero case is not included in this isomorphism.

The contract is an abstract set of data and axioms. It does not itself assert that motivic cohomology satisfies them; that assertion requires the separate motivic projective-bundle input.

## Definition references
[[math:def-projective-bundle-scheme]]

[[math:def-picard-group-scheme]]

[[math:def-axiom-of-choice]]

## Justification
The published projective-bundle definition supplies the quotient construction and its tautological quotient under the stated choice assumption. The published Picard definition supplies the group of line-bundle classes, so the domain of $c_1$ and its additivity condition are well-defined. The pullback and ring axioms make each displayed summand a homomorphism of abelian groups; its bidegree is $(a,b)$ because $\xi$ has degree $(2,1)$. The sum is finite, and requiring the resulting map to be an isomorphism is a coherent condition on the specified data. The conditions are consistent: taking every $H^{a,b}(X)$ to be the zero group, with its zero ring multiplication and unit $0$, every pullback and every $c_1$ to be the unique map, makes both sides of the contract zero. This example establishes only consistency of the abstract contract, not its realization by motivic cohomology.
