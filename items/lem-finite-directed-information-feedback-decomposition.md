---
id: lem-finite-directed-information-feedback-decomposition
kind: lemma
title: Mutual information splits into directed information and feedback
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-finite-directed-information-and-causal-conditioning, thm-it-finite-entropy-chain-rule]
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the chain rules are finite sums.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 17, §17.6, directed-information chain rules and causal factorization, printed pp. 449–451.
---

## Statement

For finite sequences $X^n,Y^n$, with directed information as in [[def-finite-directed-information-and-causal-conditioning]],
$$I(X^n;Y^n)=I(X^n\to Y^n)+I(Y^{n-1}\to X^n),$$
where $I(Y^{n-1}\to X^n):=\sum_{i=1}^n I(Y^{i-1};X_i\mid X^{i-1})$ and the $i=1$ term is zero.

## Facts & Assumptions

**Given:** A joint law of finite sequences $X^n,Y^n$.

[F1] [[def-finite-directed-information-and-causal-conditioning]]: $I(X^n\to Y^n)=\sum_i I(X^i;Y_i\mid Y^{i-1})$.

[F2] [[thm-it-finite-entropy-chain-rule]]: finite entropy and mutual information obey the chain rules used to expand the sequence variables.

## Proof





1.1 Expand $I(X^n;Y^n)$ by the chain rule in the order $Y_1,\ldots,Y_n$ to obtain $\sum_{i=1}^n I(X^n;Y_i\mid Y^{i-1})$. For each $i$, split $X^n=(X^i,X_{i+1}^n)$ and apply the chain rule again: $$I(X^n;Y_i\mid Y^{i-1})=I(X^i;Y_i\mid Y^{i-1})+I(X_{i+1}^n;Y_i\mid X^i,Y^{i-1}).$$ Summing the first terms gives $I(X^n\to Y^n)$ by [F1]. [F1, F2, algebra]

2.1 Write $I(X^n;Y^n)=H(X^n)-H(X^n\mid Y^n)$ and each term of $I(X^n\to Y^n)$ as $H(Y_i\mid Y^{i-1})-H(Y_i\mid Y^{i-1},X^i)$. The interleaved chain rule gives $$H(X^n\mid Y^n)+H(Y^n)=H(X^n,Y^n)=\sum_i\bigl[H(X_i\mid X^{i-1},Y^{i-1})+H(Y_i\mid Y^{i-1},X^i)\bigr].$$ Subtracting the directed-information terms therefore yields $$I(X^n;Y^n)-I(X^n\to Y^n)=H(X^n)-\sum_{i=1}^n H(X_i\mid X^{i-1},Y^{i-1}).$$ The finite chain rule expands $H(X^n)=\sum_i H(X_i\mid X^{i-1})$, so the right-hand side is $\sum_i I(X_i;Y^{i-1}\mid X^{i-1})=\sum_i I(Y^{i-1};X_i\mid X^{i-1})$ by symmetry of finite mutual information. This is the stated feedback term, including its zero $i=1$ summand. [F1, F2, step 1.1, algebra] ∎
