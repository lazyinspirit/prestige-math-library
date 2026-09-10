---
id: lem-conditioning-a-known-variable-and-an-independent-variable
kind: lemma
title: "Conditioning a known variable and an independent variable"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-axiom-of-choice]
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

Assume AC for existence. For real $X\in L^1(P)$, if $X$ is $\mathcal G$-measurable, then $E[X\mid\mathcal G]=X$. If $P(\{X\in B\}\cap A)=P(X\in B)P(A)$ for every real Borel $B$ and $A\in\mathcal G$, then $E[X\mid\mathcal G]=EX$ almost surely.

## Facts & Assumptions

**Given:** AC, real integrable X and sub-sigma-algebra G; separately either X is G-measurable or its Borel events satisfy the displayed independence identity.

[F1] Conditional classes are characterized by measurable integrable versions with all event identities. ([[def-conditional-expectation-as-an-ae-class]])

[F2] The version class is unique. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F3] Nonnegative Borel functions admit increasing Borel simple approximations. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F4] Increasing nonnegative simple limits pass through integrals. ([[thm-monotone-convergence-for-the-integral]])

[F5] Finite linear combinations and differences of integrable functions pass through the integral. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

**Proof technique:** direct.

1.1 If $X$ is $\mathcal G$-measurable it itself meets every condition for a version: integrability is assumed and every event equality is $\int_A X=\int_A X$. Hence uniqueness gives the first identity. [F1, F2]

1.2 Fix $A\in\mathcal G$ under the independence hypothesis. For $h=\mathbf1_B$, $E[h(X)\mathbf1_A]=E[h(X)]P(A)$ is exactly that hypothesis. For nonnegative Borel simple $h=\sum_{j=1}^m c_j\mathbf1_{B_j}$, multiplication by $c_j$ and addition give the same equality. For any nonnegative Borel $h$, compose the increasing Borel simple approximations from [F3] with $X$ and use [F4] on both sides to obtain the equality, allowing infinite values. [given, F3, F4, F5]

2.1 Apply step 1.2 to $h(t)=t^+$ and $h(t)=t^-$. Their expectations are finite because $X\in L^1$, so subtracting yields $\int_A X=EX\,P(A)$. The constant $EX$ is finite, $\mathcal G$-measurable and integrable, and its integral on $A$ is $EX\,P(A)$. Since $A$ was arbitrary, [F1]–[F2] identify it with $E[X\mid\mathcal G]$. [step 1.2, F1, F2, F5] ∎

## Source notes

Durrett Examples 4.1.3–4.1.4, printed pp.207–208; van der Vaart Examples 1.4–1.5, printed p.2. The rectangle hypothesis is extended by simple approximation explicitly, without importing a general factorization theorem.
