---
id: def-finite-block-information-and-entropy
kind: definition
title: "Finite-block information and entropy in bits"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Definition

Consider a finite alphabet $\mathcal A$ and a random block $X_0^{n-1}$ with law $p_n$ on $\mathcal A^n$.

Define $\log_2t:=\ln t/\ln2$ for $t>0$. The denominator is positive because $2>1$, $\ln$ is strictly increasing, and $\ln1=0$ by [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]. For every positive-probability block $x$, define its information in bits by $I_n^{(2)}(x)=-\log_2p_n(x)$; values on zero-probability blocks may be set to $+\infty$ because they are never sampled.

Define block entropy in bits by
$H_n^{(2)}:=\mathbb E I_n^{(2)}(X_0^{n-1})=H_{\rm nat}(p_n)/\ln2.$
Finite summation and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]] show this equals $-\sum_{x:p_n(x)>0}p_n(x)\log_2p_n(x)$. Thus the library's entropy interface stays in nats while this page's information and coding rates use bits. For finite-valued $U,V$, also define conditional entropy by $H_2(U\mid V)=\sum_{v:P(V=v)>0}P(V=v)H_2(P_{U\mid V=v})$; zero-probability conditioning values are omitted.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$ and a random block $X_0^{n-1}$ with law $p_n$ on $\mathcal A^n$.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: the existing finite entropy is $H_{\rm nat}(p)=-\sum_xp(x)\ln p(x)$ nats, with $0\ln0=0$.

[F2] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\ln$ is the natural logarithm, is strictly increasing, and $\ln1=0$.

## Proof

**Given:** The finite law and [F1]–[F2].

1.1 Define $\log_2t:=\ln t/\ln2$ for $t>0$. The denominator is positive because $2>1$, $\ln$ is strictly increasing, and $\ln1=0$ by [F2]. For every positive-probability block $x$, define its information in bits by $I_n^{(2)}(x)=-\log_2p_n(x)$; values on zero-probability blocks may be set to $+\infty$ because they are never sampled. [F2, given, algebra]

2.1 Define block entropy in bits by $$H_n^{(2)}:=\mathbb E I_n^{(2)}(X_0^{n-1})=H_{\rm nat}(p_n)/\ln2.$$ Finite summation and [F1] show this equals $-\sum_{x:p_n(x)>0}p_n(x)\log_2p_n(x)$. Thus the library's entropy interface stays in nats while this page's information and coding rates use bits. For finite-valued $U,V$, also define conditional entropy by $H_2(U\mid V)=\sum_{v:P(V=v)>0}P(V=v)H_2(P_{U\mid V=v})$; zero-probability conditioning values are omitted. [F1, F2, step 1.1, algebra] ∎
