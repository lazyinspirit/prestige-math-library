---
id: thm-tower-property-of-conditional-expectation
kind: theorem
title: "Tower property of conditional expectation"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC for existence. If $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$ and $X\in L^1(P)$, then $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ and $E[E[X\mid\mathcal H]\mid\mathcal G]=E[X\mid\mathcal H]$ almost surely. Also, if a version of $E[X\mid\mathcal G]$ is $\mathcal H$-measurable, it is a version of $E[X\mid\mathcal H]$.

## Facts & Assumptions

**Given:** AC, real integrable X, and $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$; for the last clause a G-conditional version is H-measurable.

[F1] Conditional versions are measurable and integrable and have the defining event integrals. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Versions for the same input and sigma-algebra agree almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

## Proof

**Proof technique:** direct.

1.1 Set $U=E[X\mid\mathcal G]$ and take a version $V=E[U\mid\mathcal H]$. For $A\in\mathcal H\subseteq\mathcal G$, $\int_A V=\int_A U=\int_A X$. Since $V$ is $\mathcal H$-measurable and integrable, [F2] identifies it with $E[X\mid\mathcal H]$. [F1, F2]

2.1 A version $W=E[X\mid\mathcal H]$ is already $\mathcal G$-measurable and integrable. It has its own event integrals $\int_A W=\int_A W$ on every $A\in\mathcal G$, so it is a version of $E[W\mid\mathcal G]$; [F2] gives the second identity. Finally if $U$ itself is $\mathcal H$-measurable, its $\mathcal G$ event identities restrict to $\mathcal H$, so [F2] gives the additional assertion. [F1, F2, step 1.1] ∎

## Source notes

Durrett Theorems 4.1.12–4.1.13, printed p.212; van der Vaart Lemma 1.9(v), printed p.4.
