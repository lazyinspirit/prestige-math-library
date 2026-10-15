---
id: lem-measurable-observation-does-not-increase-mixing-coefficients
kind: lemma
title: A measurable observation does not increase stationary mixing coefficients
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-mixing-coefficients-for-stationary-markov-chain
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §3"
      url: "https://arxiv.org/pdf/math/0409112"
verification:
  precheck: pass
axiom_use: "No choice principle is used; the claim follows from measurable preimages and the definitions of the coefficients."
---

## Statement

Let $X=(X_k)_{k\ge0}$ be a strictly stationary process on a measurable state
space and let $h$ be a measurable real-valued function. Put $Y_k=h(X_k)$.
Then $Y$ is strictly stationary and, for every $n\ge1$,
$$\alpha_Y(n)\le\alpha_X(n),\qquad \phi_Y(n)\le\phi_X(n),\qquad \rho_Y(n)\le\rho_X(n),$$
where the coefficients are as in
[[def-mixing-coefficients-for-stationary-markov-chain]].

## Facts & Assumptions

**Given:** A strictly stationary process $X$ and a measurable real-valued map $h$.

[F1] Strict stationarity means every finite-dimensional distribution is invariant under a common nonnegative time shift. ([[def-mixing-coefficients-for-stationary-markov-chain]])

[F2] The coefficients are suprema over past and separated-future events, or over square-integrable variables measurable with respect to those sigma-algebras. ([[def-mixing-coefficients-for-stationary-markov-chain]])

## Proof
1.1 For any finite indices $k_1,\ldots,k_m$ and time shift $t\ge0$, strict stationarity [F1] makes $(X_{k_1+t},\ldots,X_{k_m+t})$ equal in distribution to $(X_{k_1},\ldots,X_{k_m})$. Applying the measurable map $h$ coordinatewise preserves equality in distribution, so $(Y_{k_1+t},\ldots,Y_{k_m+t})$ has the same law as $(Y_{k_1},\ldots,Y_{k_m})$. Thus $Y$ is strictly stationary. [F1, given]

1.2 For every $j$, measurability gives $\sigma(Y_0,\ldots,Y_j)\subseteq\sigma(X_0,\ldots,X_j)$ and $\sigma(Y_{j+n},Y_{j+n+1},\ldots)\subseteq\sigma(X_{j+n},X_{j+n+1},\ldots)$. Therefore every event pair used in the suprema for $\alpha_Y$ and $\phi_Y$ is also allowed for $X$, with the same probability difference. Taking the suprema in [F2] proves $\alpha_Y(n)\le\alpha_X(n)$ and $\phi_Y(n)\le\phi_X(n)$. [F2, given]

2.1 Every square-integrable past variable and future variable measurable with respect to the corresponding $Y$-sigma-algebras is also measurable with respect to the corresponding $X$-sigma-algebras. Its correlation is unchanged, so the supremum for $\rho_Y(n)$ is over a subset of the pairs allowed for $\rho_X(n)$. Hence $\rho_Y(n)\le\rho_X(n)$. [F2, step 1.2] ∎