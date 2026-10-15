---
id: lem-tdmath-bose-fermi-mode-fluctuations
kind: lemma
title: "Single-mode Bose and Fermi occupation fluctuations"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: ["def-expectation-on-a-finite-probability-space","def-finite-probability-space-and-event","def-natural-logarithm","def-real-exponential-function-and-e","def-tdmath-countable-canonical-model","def-variance-and-covariance","thm-chain-rule","thm-derivative-of-exponential","thm-exponential-beats-every-polynomial","thm-natural-logarithm-laws","thm-tdmath-summable-canonical-differentiation"]
justified_by: []
dependency_roles: {"def-expectation-on-a-finite-probability-space":"mathematical-premise","def-finite-probability-space-and-event":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-tdmath-countable-canonical-model":"mathematical-premise","def-variance-and-covariance":"mathematical-premise","thm-chain-rule":"mathematical-premise","thm-derivative-of-exponential":"mathematical-premise","thm-exponential-beats-every-polynomial":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise","thm-tdmath-summable-canonical-differentiation":"mathematical-premise"}
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

For $q\in(0,1)$, the bosonic geometric law on $n\in\mathbb N_0$ with weights $(1-q)q^n$ has mean $q/(1-q)$ and variance $q/(1-q)^2=\mathbb E[n](1+\mathbb E[n])$; its relative standard deviation, defined as $\sqrt{\operatorname{Var}(n)}/\mathbb E[n]$, tends to $1$ as $q\uparrow1$. The fermionic two-state law on $n\in\{0,1\}$ with weights $1/(1+q)$ and $q/(1+q)$ has mean $q/(1+q)$ and variance $q/(1+q)^2=\mathbb E[n](1-\mathbb E[n])$. Here Bose and Fermi name these explicitly specified counting laws; no claim about a physical preparation is made.

## Facts & Assumptions


**Given:** The geometric and two-state laws with $q\in(0,1)$.

[A1] The bosonic states are $\mathbb N_0$ with weights proportional to $q^n$; the fermionic states are $\{0,1\}$ with weights proportional to $q^n$.

[F1] [[def-tdmath-countable-canonical-model]] and [[thm-tdmath-summable-canonical-differentiation]]: countable canonical weights normalize when the partition sum is finite, and under the envelope the mean and variance follow from derivatives of $Z$.

[F2] [[def-finite-probability-space-and-event]], [[def-expectation-on-a-finite-probability-space]], and [[def-variance-and-covariance]]: finite laws normalize and define means and variances by finite sums.

[F3] [[def-real-exponential-function-and-e]], [[def-natural-logarithm]], and [[thm-natural-logarithm-laws]]: every $q\in(0,1)$ has the form $e^{-\gamma}$ with $\gamma=-\log q>0$.

[F4] [[thm-chain-rule]]: derivatives of the parameterized exponential and logarithm compositions obey the chain rule.

[F5] [[thm-exponential-beats-every-polynomial]]: $n^k e^{-bn}\to0$ for each fixed integer $k$ and $b>0$.



## Proof

**Given:** The geometric and two-state laws with $q\in(0,1)$.

1.1 Let $S_N=\sum_{n=0}^Nq^n$. Multiplying this finite sum by $1-q$ gives $(1-q)S_N=1-q^{N+1}$. Since $q=e^{-\gamma}$ for $\gamma>0$, [F5] gives $q^{N+1}\to0$; hence $Z=(1-q)^{-1}$ and the weights $(1-q)q^n$ sum to one. On a compact $\gamma$-interval $[b,B]\subset(0,\infty)$, set $a_n=(1+n^2)e^{-bn}$. Then $a_{n+1}/a_n=e^{-b}(1+(n+1)^2)/(1+n^2)\to e^{-b}<1$. Choose $c$ with $e^{-b}<c<1$; for all sufficiently large $n$, $a_{n+1}\le ca_n$, so the tail is bounded by a convergent geometric series. Thus $\sum_n(1+n^2)e^{-\gamma n}\le\sum_na_n<\infty$, which is the local envelope required by [F1]. [A1, F1, F3, F5, algebra]

1.2 The fermionic partition sum is $1+q$; its two probabilities are $1/(1+q)$ and $q/(1+q)$. Their finite weighted sums give mean $q/(1+q)$ and variance $q/(1+q)^2$, equal to the mean times one minus the mean. [A1, F2, F3]

2.1 With $Z(\gamma)=(1-e^{-\gamma})^{-1}$, [F1] gives $\mathbb E n=-\partial_\gamma\log Z=q/(1-q)$ and $\operatorname{Var}(n)=\partial_\gamma^2\log Z=q/(1-q)^2$. Substitution $q=e^{-\gamma}$ and [F4] justify the parameter derivatives. Therefore $\sqrt{\operatorname{Var}(n)}/\mathbb E n=1/\sqrt q\to1$ as $q\uparrow1$. [F1, F3, F4, step 1.1]

3.1 These are calculations for the two specified probability laws only; no independence, physical preparation, or measured fluctuation claim is used. [A1, step 2.1, step 1.2] ∎
