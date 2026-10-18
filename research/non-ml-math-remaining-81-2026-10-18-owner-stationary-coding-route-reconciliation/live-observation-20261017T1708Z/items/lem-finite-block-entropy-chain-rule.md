---
id: lem-finite-block-entropy-chain-rule
kind: lemma
title: "Finite entropy chain rule and monotonicity under conditioning"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-block-information-and-entropy
  - lem-finite-kl-nonnegative-choice-free
  - lem-finite-kl-nonnegative-choice-free
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
---
## Statement

Proves the finite-alphabet entropy chain rule and that conditioning on additional finite-valued variables cannot increase conditional entropy, in bits.

## Facts & Assumptions

**Given:** Finite-valued random variables $X_0,\ldots,X_{n-1}$.

[F1] [[def-finite-block-information-and-entropy]]: block entropy is Shannon entropy in bits of the finite joint law, with zero terms omitted by convention.

[F2] [[lem-finite-kl-nonnegative-choice-free]]: finite KL is nonnegative against a subprobability reference, and division by $\ln2>0$ gives nonnegative bit divergence without an axiom of choice.

## Proof

**Given:** The variables and entropy convention [F1].

1.1 On every positive-probability block, factor its probability into successive conditional probabilities by repeated use of $P(A\cap B)=P(A)P(B\mid A)$. Taking $-\log_2$ and averaging over the finite support yields $$H(X_0^{n-1})=\sum_{i=0}^{n-1}H(X_i\mid X_0^{i-1}).$$ The $i=0$ term is $H(X_0)$. [F1, given, algebra]

2.1 For finite random variables $U,V$, the same factorization gives $H_2(U,V)=H_2(U)+H_2(V\mid U)$. Terms with $P(U=u)=0$ contribute zero, so no conditional law on a null event affects the identity. [F1, step 1.1, algebra]

3.1 For finite $U,V,W$, fix any $v$ with $P(V=v)>0$. The conditional mutual information at that value is $\sum_wP(w\mid v)D_2(P_{U\mid v,w}\Vert P_{U\mid v})\ge0$ by [F2]; if a conditional reference probability is zero, every positive-weight conditional law also assigns that outcome zero, so all displayed divergences are defined on their supports. Averaging over $v$ gives $H_2(U\mid V)-H_2(U\mid V,W)\ge0$. [F1, F2, step 2.1, algebra] ∎
