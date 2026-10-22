---
id: def-csm-frontier-pseudolikelihood
kind: definition
title: Finite-volume Gibbs pseudo-likelihood with fixed boundary
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  cor-exponential-reciprocal-and-positivity: mathematical-premise
justified_by: []
aliases: []
forward_refs:
  - ex-csm-frontier-pseudolikelihood-not-joint
physical_scope: null
axiom_use: No choice principle is used.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Julian Besag, Statistical Analysis of Non-Lattice Data, The Statistician 24(3) (1975), 179–195"
      url: "https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/GibbsFieldEst/BesagPseudoLik1975.pdf"
      locator: "§1, printed pp. 179–181, for site-conditional distributions and neighborhoods; §3.3, printed pp. 190–192, especially equation (3.2), for the pseudo-likelihood product and its distinction from the true likelihood."
verification:
  precheck: pass
---

## Definition

Let $d\ge1$, let $\Lambda$ be a finite nonempty subset of $\mathbb Z^d$, let $S$ be a finite nonempty spin set, let $(\Theta,\mathcal T)$ be a nonempty measurable parameter space, and fix a boundary configuration $\eta\in S^{\mathbb Z^d\setminus\Lambda}$. Let $\mathcal C$ be a finite collection of finite subsets $C\subseteq\mathbb Z^d$ with $C\cap\Lambda\ne\varnothing$. For each $C\in\mathcal C$, let $\Phi_C:S^C\times\Theta\to\mathbb R$ be finite-valued and measurable in $\theta$ for each spin assignment. For $\sigma\in S^\Lambda$, let $\bar\sigma$ equal $\sigma$ on $\Lambda$ and $\eta$ outside $\Lambda$, and define the finite-volume energy
$$H_\theta^\eta(\sigma):=\sum_{C\in\mathcal C}\Phi_C(\bar\sigma|_C;\theta).$$
Its normalized Gibbs law is
$$\pi_\theta^\eta(\sigma):=\frac{e^{-H_\theta^\eta(\sigma)}}{\sum_{\tau\in S^\Lambda}e^{-H_\theta^\eta(\tau)}}.$$
For site $i\in\Lambda$, define its finite interaction neighborhood
$$N_i:=\left(\bigcup_{\substack{C\in\mathcal C\\i\in C}} C\right)\setminus\{i\}.$$
For $\sigma\in S^\Lambda$ and $s\in S$, write $\sigma^{i=s}$ for the configuration obtained by replacing only its $i$th spin with $s$. The one-site conditional and finite-volume pseudo-likelihood are
$$q_{i,\theta}^\eta(s\mid\sigma_{\Lambda\setminus\{i\}}):=\frac{e^{-H_\theta^\eta(\sigma^{i=s})}}{\sum_{a\in S}e^{-H_\theta^\eta(\sigma^{i=a})}},\qquad PL_\theta^\eta(\sigma):=\prod_{i\in\Lambda}q_{i,\theta}^\eta(\sigma_i\mid\sigma_{\Lambda\setminus\{i\}}).$$
Every conditional uses the same fixed exterior boundary and is determined by the specified finite neighborhood $N_i$. The product is a finite conditional objective; it is not defined as a probability law on $S^\Lambda$.

## Definition references

[[cor-exponential-reciprocal-and-positivity]]

## Facts & Assumptions

**Given:** The finite volume, finite spin set, finite interaction collection, finite-valued potentials, parameter measurability, and fixed boundary in the Definition.

[F1] [[cor-exponential-reciprocal-and-positivity]]: the real exponential is finite and strictly positive at every finite real input.

## Proof

**Given:** The ingredients of the Definition.

1.1 For each $\theta$ and each $\sigma$, $H_\theta^\eta(\sigma)$ is a finite sum of finite real values. Thus every weight $e^{-H_\theta^\eta(\sigma)}$ is positive and finite by [F1], and the partition denominator is a finite nonempty sum of positive finite terms. This makes $\pi_\theta^\eta$ a probability vector on the finite nonempty set $S^\Lambda$. [given, F1, algebra]

2.1 Fix $i\in\Lambda$ and $\sigma_{\Lambda\setminus\{i\}}$. The denominator in $q_{i,\theta}^\eta$ is likewise a finite nonempty sum of positive finite terms. Dividing the corresponding joint Gibbs masses by their sum over the possible value at site $i$ cancels the joint partition function and gives exactly the displayed ratio; summing that ratio over $s\in S$ gives one. Hence it is the conditional probability vector of site $i$ given the other spins. Since $\mathcal C$ is finite and each $C$ is finite, $N_i$ is finite. In the ratio, every potential indexed by a set $C$ not containing $i$ is the same for all values of $s$ and cancels; hence only potentials meeting $i$, and therefore only spins in $N_i$ and the fixed boundary values there, affect this conditional. [given, F1, step 1.1, algebra]

3.1 Each $H_\theta^\eta(\sigma)$ is measurable in $\theta$ because it is a finite sum of the stipulated measurable potentials. Exponentiation preserves measurability, and the finite partition and conditional denominators are positive by [F1], so $\pi_\theta^\eta(\sigma)$ and each $q_{i,\theta}^\eta$ are measurable in $\theta$. Their finite product $PL_\theta^\eta(\sigma)$ is therefore a measurable, positive finite real-valued objective. This does not assert that its sum over configurations is one. [given, F1, step 1.1, step 2.1, algebra] ∎

## Remarks

The product in this Definition is a pseudo-likelihood in the sense of Besag: it multiplies one-site conditional probabilities with the boundary and neighborhood fixed. It generally differs from the joint Gibbs likelihood and does not define an exact posterior for the joint Gibbs observation model. The B-page counterexample [[ex-csm-frontier-pseudolikelihood-not-joint]] verifies this distinction in a two-spin model. A consistency or concentration theorem for pseudo-likelihood would require additional, explicitly proved identifiability and spatial mixing or ergodicity inputs; none is asserted here.
