---
id: lem-finite-kl-nonnegative-choice-free
kind: lemma
title: "Finite KL nonnegativity for subprobability references"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-block-information-and-entropy
  - def-integral-logarithm
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - thm-monotonicity-of-the-integral
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-oriented-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice axiom is used; the proof is a finite sum and an integral logarithm bound."
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
      locator: "Chapter 5 §5.2: relative-entropy/variational context, recorded as fully inspected in the accepted measure-theoretic information source evidence. This item supplies its own finite subprobability-reference argument from the integral logarithm and does not import a general KL theorem or choice assumption."
---
## Statement

Proves $\ln t\le t-1$ for $t>0$ and, for finite probability weights $p$ and positive-on-support reference weights $q$ with $\sum_iq_i\le1$, proves $\sum_{i:p_i>0}p_i\log_2(p_i/q_i)\ge0$ by an explicit finite argument without choice.

## Facts & Assumptions

**Given:** A finite probability vector $p=(p_i)$ and nonnegative reference weights $q_i$ with $q_i>0$ whenever $p_i>0$ and $\sum_iq_i\le1$.

[F1] [[def-finite-block-information-and-entropy]]: $\log_2t=\ln t/\ln2$ and $\ln2>0$.

[F2] [[def-integral-logarithm]]: $L(t)=\int_1^tdu/u$, with oriented limits.

[F3] [[cor-integral-logarithm-agrees-with-natural-logarithm]]: $L(t)=\log t$ for $t>0$.

[F4] [[thm-monotonicity-of-the-integral]]: if integrable functions obey a pointwise order on an interval with increasing endpoints, their integrals obey the same order.

[F5] [[def-natural-logarithm]]: $\log$ is the natural logarithm, the inverse of $\exp$.

[F6] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing and $\log1=0$.

[F7] [[def-oriented-integral]]: reversing the integration endpoints changes the sign.

## Proof

**Given:** The finite weights and hypotheses above.

1.1 The integral logarithm is the natural logarithm by [F3] and [F5]. If $t>1$, then $1/u\le1$ on $[1,t]$, so [F2]–[F4] give $\ln t=\int_1^tdu/u\le t-1$. If $0<t<1$, then $1/u\ge1$ on $[t,1]$, so $\int_t^1du/u\ge1-t$; [F3] and [F7] give $\ln t=-\int_t^1du/u\le t-1$. At $t=1$, [F6] gives equality. Therefore $\ln t\le t-1$ for all $t>0$. [F2, F3, F4, F5, F6, F7, algebra]

2.1 Apply step 1.1 to $t=q_i/p_i$ for every $i$ with $p_i>0$. Then $$\sum_{i:p_i>0}p_i\ln(p_i/q_i)=-\sum_{i:p_i>0}p_i\ln(q_i/p_i)\ge\sum_{i:p_i>0}(p_i-q_i)=1-\sum_{i:p_i>0}q_i\ge0.$$ Dividing by $\ln2>0$ gives the same nonnegativity for the bit-log sum. Thus finite KL nonnegativity against a subprobability reference, as well as the logarithm inequality used to prove it, follows from finite sums and elementary integral bounds; no choice axiom enters. [F1, step 1.1, given, algebra] ∎
