---
id: def-general-process-information-rate
kind: definition
title: "Information rate of a general finite-alphabet process"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
---
## Definition

Consider a finite alphabet $\mathcal A$ and a process law $P$ on $\mathcal A^{\mathbb N_0}$; $H_n:=H(X_0^{n-1})$ is as in [[def-finite-block-information-and-entropy]].

Define the upper information rate $\overline h(P):=\limsup_{n\to\infty}H_n/n$ and, when the limsup and liminf agree, the information rate $h(P):=\lim_{n\to\infty}H_n/n$. This definition does not assume stationarity.

Since $X_0^{n-1}$ has at most $|\mathcal A|^n$ values, $0\le H_n\le n\log_2|\mathcal A|$; consequently both rates are defined and lie in $[0,\log_2|\mathcal A|]$.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$ and a process law $P$ on $\mathcal A^{\mathbb N_0}$; $H_n:=H(X_0^{n-1})$ is as in [[def-finite-block-information-and-entropy]].

[F1] [[def-finite-block-information-and-entropy]]: $H_n$ is the Shannon entropy of the length-$n$ block law.

## Proof

**Given:** The process and finite-block entropy [F1].

1.1 Define the upper information rate $\overline h(P):=\limsup_{n\to\infty}H_n/n$ and, when the limsup and liminf agree, the information rate $h(P):=\lim_{n\to\infty}H_n/n$. This definition does not assume stationarity. [F1, given, algebra]

2.1 Since $X_0^{n-1}$ has at most $|\mathcal A|^n$ values, $0\le H_n\le n\log_2|\mathcal A|$; consequently both rates are defined and lie in $[0,\log_2|\mathcal A|]$. [F1, step 1.1, algebra] ∎
