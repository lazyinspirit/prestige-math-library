---
id: def-general-process-information-rate
kind: definition
title: "Information rate of a general finite-alphabet process"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
  - lem-finite-kl-nonnegative-choice-free
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

Since $X_0^{n-1}$ has at most $|\mathcal A|^n$ values, $0\le H_n\le n\log_2|\mathcal A|$; consequently the upper information rate is defined and lies in $[0,\log_2|\mathcal A|]$, and whenever the information-rate limit exists it lies in the same interval.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$ and a process law $P$ on $\mathcal A^{\mathbb N_0}$; $H_n:=H(X_0^{n-1})$ is as in [[def-finite-block-information-and-entropy]].

[F1] [[def-finite-block-information-and-entropy]]: $H_n$ is the Shannon entropy of the length-$n$ block law.
[F2] [[lem-finite-kl-nonnegative-choice-free]]: for a finite probability law $p$ and a positive reference probability law $q$, $\sum_{x:p(x)>0}p(x)\log_2(p(x)/q(x))\ge0$.

## Proof

**Given:** The process and finite-block entropy [F1].

1.1 Define the upper information rate $\overline h(P):=\limsup_{n\to\infty}H_n/n$ and, when the limsup and liminf agree, the information rate $h(P):=\lim_{n\to\infty}H_n/n$. This definition does not assume stationarity. [F1, given, algebra]

2.1 Every positive block probability is at most one, so the finite-sum formula in [F1] gives $H_n\ge0$. Let $N=|\mathcal A|^n$ and compare the block law $p_n$ with the uniform law $q(x)=1/N$ on the nonempty finite set $\mathcal A^n$. By [F2], $$0\le\sum_{x:p_n(x)>0}p_n(x)\log_2\frac{p_n(x)}{q(x)}=-H_n+\log_2N.$$ Hence $H_n\le\log_2N=n\log_2|\mathcal A|$. Consequently the upper information rate is defined and lies in $[0,\log_2|\mathcal A|]$, and whenever the information-rate limit exists it lies in the same interval. [F1, F2, given, step 1.1, algebra] ∎
