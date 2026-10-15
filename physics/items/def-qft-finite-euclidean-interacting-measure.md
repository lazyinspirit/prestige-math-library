---
id: def-qft-finite-euclidean-interacting-measure
kind: definition
title: Finite Euclidean quartic interacting measure
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - def-axiom-of-choice
  - def-measure-with-density
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
dependency_roles:
  def-multivariate-normal-law: mathematical-premise
  def-standard-normal-and-normal-laws: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
justified_by: [thm-qft-finite-euclidean-polynomial-measure]
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Skinner, Advanced Quantum Field Theory, Chapter 2, “QFT in Zero Dimensions” (University of Cambridge Part III lecture notes)
      url: https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals (lecture notes, arXiv:1902.08652)
      url: https://arxiv.org/pdf/1902.08652
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

## Definition

Assume the Axiom of Choice. Let $N\ge1$ be finite and let $C$ be a real symmetric positive-semidefinite $N\times N$ matrix; positive-semidefinite means $u^{\mathsf T}Cu\ge0$ for every $u\in\mathbb R^N$. The centered multivariate normal Borel probability law with covariance $C$ is $\gamma_C:=N_N(0,C)$ as defined by [[def-multivariate-normal-law]]: every linear projection $q\mapsto u^{\mathsf T}q$ has scalar normal law $N(0,u^{\mathsf T}Cu)$, and the law exists even when $C$ is singular. Here $N(0,\sigma^2)$ is the law specified in [[def-standard-normal-and-normal-laws]], with density $e^{-x^2/2}/\sqrt{2\pi}$ for the standard case.

Let $U:\mathbb R^N\to[0,\infty)$ be a real homogeneous quartic polynomial, meaning $U$ is a polynomial and $U(sq)=s^4U(q)$ for all $s\in\mathbb R$ and $q\in\mathbb R^N$. For a coupling $\lambda\ge0$, define the partition integral and its weighted measure by

$$Z_{C,U}(\lambda):=\int_{\mathbb R^N}e^{-\lambda U(q)}\,d\gamma_C(q),\qquad \nu_{C,U,\lambda}(A):=\int_Ae^{-\lambda U(q)}\,d\gamma_C(q)$$

for Borel $A\subseteq\mathbb R^N$. Whenever $0<Z_{C,U}(\lambda)<\infty$, the **finite Euclidean interacting measure** is the Borel probability measure

$$d\mu_{C,U,\lambda}(q):=Z_{C,U}(\lambda)^{-1}e^{-\lambda U(q)}\,d\gamma_C(q).$$

For a polynomial $P:\mathbb R^N\to\mathbb R$ with finite integral, write $\langle P\rangle_{C,U,\lambda}:=\int P\,d\mu_{C,U,\lambda}$. The exact supplier [[thm-qft-finite-euclidean-polynomial-measure]] proves that $Z_{C,U}(\lambda)$ is positive and finite and that every polynomial insertion is integrable. This is a Borel measure on finite-dimensional $\mathbb R^N$; it is not a measure on distributions on continuum Euclidean spacetime and does not by itself assert reflection positivity or reconstruction of a continuum field.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and take $N,C,U,\lambda$ as in the Definition.

[A1] The Axiom of Choice is the stated hypothesis of the finite-dimensional normal-law construction. [[def-axiom-of-choice]]

[F1] For finite $N$ and positive-semidefinite $C$, $\gamma_C=N_N(0,C)$ is a Borel probability law on $\mathbb R^N$. [[def-multivariate-normal-law]]

[F2] A nonnegative measurable density $f$ relative to a measure $\mu$ defines the measure $f\,d\mu$ by $(f\,d\mu)(A)=\int_A f\,d\mu$. [[def-measure-with-density]]

[F3] For nonnegative measurable $f$, the set function $A\mapsto\int_A f\,d\mu$ is a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[F4] The real exponential is the all-real power series and is continuous and strictly increasing; for $x\ge0$ its nonnegative terms give $\exp(x)\ge1$, and it is positive with $\exp(-x)=1/\exp(x)$. Hence $0<\exp(-x)\le1$ for $x\ge0$. [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]

## Proof

**Proof technique:** direct verification of the density construction.

1.1 A polynomial $U$ is continuous and hence Borel measurable. Since $U\ge0$ and $\lambda\ge0$, [F4] gives $f(q):=\exp(-\lambda U(q))$ Borel with $0<f(q)\le1$. Thus $Z=\int f\,d\gamma_C$ is finite, and [F2] defines $\nu=f\,d\gamma_C$; [F3] gives its measure property. Its total mass is $\nu(\mathbb R^N)=Z$ by definition. [A1, F1, F2, F3, F4, given, algebra]

2.1 Under the displayed side condition $0<Z<\infty$, the scaled measure $\mu=Z^{-1}\nu$ is a Borel measure and has total mass $Z^{-1}\nu(\mathbb R^N)=1$, so it is a probability measure by [F3] and step 1.1. For a polynomial $P$ integrable under $\mu$, $\langle P\rangle_{C,U,\lambda}$ is then its well-defined integral by the notation in the Definition. [F3, given, step 1.1, algebra] ∎
