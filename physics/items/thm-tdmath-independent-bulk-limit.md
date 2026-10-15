---
id: thm-tdmath-independent-bulk-limit
kind: theorem
title: "Independent subsystem bulk limit"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-expectation-on-a-finite-probability-space","def-finite-probability-space-and-event","def-finite-real-random-variable-and-distribution","def-natural-logarithm","def-product-of-finite-probability-spaces","def-real-exponential-function-and-e","def-variance-and-covariance","lem-finite-sum-reindexing-and-fubini","thm-expectation-of-products-of-independent-random-variables","thm-natural-logarithm-laws","thm-product-probability-has-independent-coordinate-events","thm-variance-of-a-finite-sum","thm-exponential-addition-formula"]
justified_by: []
dependency_roles: {"def-expectation-on-a-finite-probability-space":"mathematical-premise","def-finite-probability-space-and-event":"mathematical-premise","def-finite-real-random-variable-and-distribution":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-product-of-finite-probability-spaces":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-variance-and-covariance":"mathematical-premise","lem-finite-sum-reindexing-and-fubini":"mathematical-premise","thm-expectation-of-products-of-independent-random-variables":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise","thm-product-probability-has-independent-coordinate-events":"mathematical-premise","thm-variance-of-a-finite-sum":"mathematical-premise","thm-exponential-addition-formula":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $\Omega_0$ be a nonempty finite set, let $E:\Omega_0\to\mathbb R$, and fix $\beta\in\mathbb R$. Define $Z_1=\sum_{i\in\Omega_0}e^{-\beta E_i}$ and the canonical law $q_i=e^{-\beta E_i}/Z_1$, and define $\bar E:=\sum_iq_iE_i$. For $N\ge1$, on $\Omega_0^N$ define $H_N(i_1,\ldots,i_N)=\sum_{k=1}^NE_{i_k}$. Give $\Omega_0^N$ the product probability law assigning $(i_1,\ldots,i_N)$ weight $\prod_{k=1}^Nq_{i_k}$, and define the $N$-subsystem partition sum $Z_N:=\sum_{(i_1,\ldots,i_N)\in\Omega_0^N}e^{-\beta H_N(i_1,\ldots,i_N)}$. Then $Z_N=Z_1^N$, $\mathbb E[H_N/N]=\bar E$, and $\operatorname{Var}(H_N/N)=\operatorname{Var}_q(E)/N$. Consequently, for every $\varepsilon>0$, $\mathbb P(|H_N/N-\bar E|\ge\varepsilon)\le\operatorname{Var}_q(E)/(N\varepsilon^2)$. If $\beta\ne0$, the mathematical free-energy density $-\beta^{-1}N^{-1}\log Z_N$ is exactly $-\beta^{-1}\log Z_1$ for every $N$.

## Facts & Assumptions


**Given:** The finite one-subsystem state set, energy function, canonical law, and its finite product law.

[A1] $\Omega_0$ is a nonempty finite set, $E$ is real-valued, $\beta$ is fixed, and the $N$-subsystem law is the product of the one-subsystem canonical law.

[F1] [[def-finite-probability-space-and-event]], [[def-product-of-finite-probability-spaces]], and [[thm-product-probability-has-independent-coordinate-events]]: the product law is a finite probability law with independent coordinates.

[F2] [[def-expectation-on-a-finite-probability-space]] and [[thm-expectation-of-products-of-independent-random-variables]]: expectation is a finite weighted sum and independent coordinate products factor.

[F3] [[def-variance-and-covariance]] and [[thm-variance-of-a-finite-sum]]: variance is the centered second moment and expands into variances and covariances.

[F4] [[def-real-exponential-function-and-e]], [[def-natural-logarithm]], [[thm-exponential-addition-formula]], and [[thm-natural-logarithm-laws]]: $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$, the exponential has positive values as specified by the logarithm inverse convention, and logarithms convert positive products to sums.

[F5] [[lem-finite-sum-reindexing-and-fubini]]: iterated finite sums over a Cartesian product can be reordered and factored.

## Proof

**Given:** The finite one-subsystem state set, its energy function, and the product probability model.

1.1 By finite Fubini, $Z_N=\sum_{(i_1,\ldots,i_N)}\prod_{k=1}^Ne^{-\beta E_{i_k}}=\prod_{k=1}^N\sum_{i_k\in\Omega_0}e^{-\beta E_{i_k}}=Z_1^N$. This is an exact finite identity. [A1, F1, F4, F5]

1.2 Under the product law, the coordinate energies $E(i_k)$ are mutually independent and each has mean $\bar E$ and variance $v:=\operatorname{Var}_q(E)$. Linearity gives $\mathbb E H_N=N\bar E$; the covariance terms between distinct coordinates vanish by independence, so [F3] gives $\operatorname{Var}(H_N)=Nv$. Dividing by $N$ and $N^2$ proves the mean and variance formulas. [A1, F1, F2, F3]

2.1 On the event $|H_N/N-\bar E|\ge\varepsilon$, the nonnegative random variable $(H_N/N-\bar E)^2$ is at least $\varepsilon^2$. Summing over that event gives $\varepsilon^2\mathbb P(|H_N/N-\bar E|\ge\varepsilon)\le\mathbb E[(H_N/N-\bar E)^2]=v/N$, proving the probability bound without any independence assertion beyond the product model. [F2, F3, step 1.2]

3.1 If $\beta\ne0$, substitute $Z_N=Z_1^N$ and apply the logarithm product law: $-\beta^{-1}N^{-1}\log Z_N=-\beta^{-1}N^{-1}N\log Z_1=-\beta^{-1}\log Z_1$. [A1, F4, F5, step 1.1] ∎
