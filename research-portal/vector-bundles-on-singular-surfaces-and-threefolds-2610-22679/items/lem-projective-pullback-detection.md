---
id: lem-projective-pullback-detection
kind: lemma
title: Projective bundle pullback detects cohomology classes
status: draft
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
Assume the Axiom of Choice and let $H^{*,*}$ be an additively oriented bigraded theory with the projective bundle contract on a category $\mathcal C$ as specified in the contract. For a finite locally free $\mathcal O_X$-module $E$ of constant rank $r>0$, the pullback $\pi^*:H^{*,*}(X)\to H^{*,*}(\mathbb P_X(E))$ along the projective bundle projection is injective. Under the contract's direct-sum isomorphism, $\pi^*$ is the map from the summand indexed by zero. Consequently, pullback along any finite composite of such projective-bundle projections is injective. This conclusion does not assert injectivity for arbitrary pullbacks.

## Statement references
[[def-bigraded-oriented-theory]]

## Facts & Assumptions
**Given:** The Axiom of Choice, the category and theory in the statement, an object $X$ of $\mathcal C$, and a finite locally free module $E$ of constant rank $r>0$. A finite locally free module of rank $r$ is locally isomorphic to $\mathcal O_X^r$; $\mathbb P_X(E)$ uses the quotient convention.

**Goal:** Prove the stated injectivity and its preservation under finite iteration.

[F1] The projective bundle contract says that, for each $(a,b)\in\mathbb Z^2$, the map $\Phi_{a,b}:\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\to H^{a,b}(\mathbb P_X(E))$ sending $(x_m)$ to $\sum_m\pi^*(x_m)\xi^m$ is an isomorphism, where $\xi$ is the first Chern class of the tautological quotient line bundle. Pullbacks preserve bidegrees and are contravariantly functorial; $H^{*,*}$ is the direct sum of its bidegree groups ([[def-bigraded-oriented-theory]]).

## Proof
**Proof technique:** Identify pullback with a direct-summand inclusion and compose injective maps.

1.1 Fix $(a,b)$. Since $r>0$, the index zero occurs in the direct sum of [F1]. Let $j_0$ insert $x\in H^{a,b}(X)$ in that summand and put zero in all other summands. The coordinate projection onto that summand is a left inverse to $j_0$, so $j_0$ is injective. By the displayed formula, $\Phi_{a,b}j_0(x)=\pi^*(x)\xi^0=\pi^*(x)$. As $\Phi_{a,b}$ is an isomorphism, $\pi^*:H^{a,b}(X)\to H^{a,b}(\mathbb P_X(E))$ is injective. [F1, construct]

2.1 A class in $H^{*,*}(X)$ has finitely many nonzero bidegree components, and pullback preserves bidegrees. If its pullback vanishes, each component pulls back to zero and is therefore zero by step 1.1. Thus $\pi^*$ is injective on the whole bigraded group. For a finite tower of projections satisfying the same positive-rank hypotheses at each stage, each pullback is injective by the same argument; their composite is injective, and functoriality identifies it with pullback along the composite projection. The empty composite gives the identity. [F1, step 1.1] ∎
