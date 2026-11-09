---
id: lem-chern-relation-uniqueness
kind: lemma
title: Chern coefficients of the projective relation
status: published
domain: mathematics
deps:
  - def-bigraded-oriented-theory
dependency_roles:
  def-bigraded-oriented-theory: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Assume the Axiom of Choice and the data and axioms of [[def-bigraded-oriented-theory]]. Let $E$ be a finite locally free module of constant rank $r>0$ on an object $X$ of the specified category. Write $\pi:\mathbb P_X(E)\to X$ for the projective bundle of one-dimensional quotients and $\xi=c_1(\mathcal O_{\mathbb P_X(E)}(1))\in H^{2,1}(\mathbb P_X(E))$ for the first Chern class of its tautological quotient line bundle.

There are unique classes $c_i(E)\in H^{2i,i}(X)$ for $1\leq i\leq r$ such that
$$\xi^r+\sum_{i=1}^r(-1)^i\pi^*c_i(E)\xi^{r-i}=0.$$
They are natural under every morphism $f:Y\to X$ in the specified category: $f^*c_i(E)=c_i(f^*E)$. For the rank-zero bundle, set its total Chern series $c_t(0)=1$ separately; equivalently, $c_0(0)=1$ and $c_i(0)=0$ for $i>0$. No coefficient is recovered from its empty projective bundle.

## Facts & Assumptions

[F1] By [[def-bigraded-oriented-theory]], pullbacks are functorial degree-preserving ring homomorphisms, first Chern classes of line bundles are natural, and the projective bundle map $\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\to H^{a,b}(\mathbb P_X(E))$, $(x_m)\mapsto\sum_m\pi^*x_m\xi^m$, is an isomorphism. The contract includes the quotient projective bundle and its base change, and assumes the Axiom of Choice.

## Proof

**Given:** The theory and bundle in the statement, and a morphism $f:Y\to X$ in the specified category.

**Goal:** Establish existence, uniqueness, bidegrees and base-change naturality of the coefficients, with the separate rank-zero convention.

1.1 Apply the isomorphism in [F1] in bidegree $(2r,r)$ to $-\xi^r$. It gives a unique tuple $a_m\in H^{2(r-m),r-m}(X)$, $0\leq m<r$, with $-\xi^r=\sum_{m=0}^{r-1}\pi^*a_m\xi^m$. Set $c_i(E)=(-1)^i a_{r-i}$. Then $c_i(E)$ has bidegree $(2i,i)$ and the displayed relation holds. Conversely, any tuple satisfying that relation gives the same expansion of $-\xi^r$, so the isomorphism makes every coefficient unique. [F1, given]

2.1 Let $g:\mathbb P_Y(f^*E)\to\mathbb P_X(E)$ be the base-change morphism and $\pi_Y$ the projection. The quotient construction identifies $g^*\mathcal O_{\mathbb P_X(E)}(1)$ with $\mathcal O_{\mathbb P_Y(f^*E)}(1)$; hence naturality of $c_1$ gives $g^*\xi=\xi_Y$. Pulling back the relation in step 1.1 and using $\pi\circ g=f\circ\pi_Y$ gives the same relation for $f^*E$ with coefficients $f^*c_i(E)$. Their degrees are preserved, so uniqueness in step 1.1 applied over $Y$ yields $f^*c_i(E)=c_i(f^*E)$. For rank zero, the separately prescribed series $1$ has the stated coefficients and is preserved by unital pullback; no projective-bundle isomorphism for rank zero is invoked. This proves the statement. [F1, given, step 1.1] ∎
