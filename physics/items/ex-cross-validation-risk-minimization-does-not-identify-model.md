---
id: ex-cross-validation-risk-minimization-does-not-identify-model
kind: example
title: "Equal predictive risks do not identify a model label"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-cross-validation-split-and-risk-target
  - def-risk-estimation-versus-model-identification
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - def-bernoulli-and-binomial-random-variables
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §§2.2–2.4 and 6.1"
      url: "https://arxiv.org/pdf/0907.4728"
    - title: "Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani, An Introduction to Statistical Learning, 7th printing, Chapter 5 introduction"
      url: "https://www.statlearning.com/s/ISLR-Seventh-Printing.pdf"
---

## Example

Let the candidate model labels be $M=\{0,1\}$ with identical observation laws $P_0=P_1=\operatorname{Bernoulli}(1/2)$. Associate with each label the constant learning rule $A_{m,k}(z_1,\ldots,z_k)=h_m$ for every $k$, where $h_0=0$ and $h_1=1$, and use squared loss. The labels describe distinct candidate specifications but make the same observable data law.

## Facts & Assumptions

**Given:** The two candidate labels, their common data law, and the two constant predictors. Compare their risks and show that observations cannot recover the label.

[F1] [[def-risk-estimation-versus-model-identification]]: risk minimization chooses a label by predictive loss, whereas identification asks to recover the true data-generating label.

[F2] [[def-cross-validation-split-and-risk-target]]: risk is expected loss on an independent test observation after training.

[F3] [[def-identically-distributed-and-iid-random-variables]]: an IID sample has mutually independent coordinates with the common law.

[F4] [[thm-independent-random-elements-have-product-joint-law]]: the joint law of an IID finite sample is the product of its common marginal law.

[F5] [[def-bernoulli-and-binomial-random-variables]]: For $p\in[0,1]$, a **Bernoulli$(p)$ random variable** takes the value $1$ with probability $p$ and $0$ with probability $1-p$.

## Verification

1.1 Under either label, $Y\sim\operatorname{Bernoulli}(1/2)$. By [F5], the two prediction risks are $\mathbb E[(0-Y)^2]=1/2$ and $\mathbb E[(1-Y)^2]=1/2$, since $Y^2=Y$ and $(1-Y)^2=1-Y$. Thus the predictive-risk objective ties the labels and any fixed tie rule selects one without separating them. [F1, F2, F5, algebra]

1.2 For every sample size $n$, [F3]–[F4] give the same data law $P_0^{\otimes n}=P_1^{\otimes n}$. Therefore every measurable data-based selector has the same output distribution under labels 0 and 1. If it were model-consistent at label 0, then $P_0(\widehat m_n=0)\to1$, and equality of the sample laws would give $P_1(\widehat m_n=0)\to1$. Consistency at label 1 would also give $P_1(\widehat m_n=1)\to1$, impossible because these disjoint events have probabilities summing to at most one. [F3, F4, algebra]

2.1 The example has equal predictive risk but no observable information that distinguishes the two labels, so risk minimization alone does not identify a true model. [F1, step 1.1, step 1.2] ∎
