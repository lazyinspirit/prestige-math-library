---
id: ex-contrastive-same-class-negative-collision
kind: example
title: "A negative sample collides with the positive class"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-latent-class-contrastive-learning
  - lem-contrastive-hinge-and-logistic-loss-properties
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Section 4.2, Equation (8)"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
---

## Example

Let the latent classes be $a,b$ with equal probabilities, let each class contain one deterministic input, and define a scalar representation by $f(a)=0$ and $f(b)=1$. Use one independent marginal negative and the hinge loss. The probability that the negative class equals the positive-pair class is $\tau=1/2$. Conditional on such a collision, the contrastive score is always zero and the conditional loss is $1$. Conditional on distinct classes, the ordered pair $(a,b)$ has loss $1$ and $(b,a)$ has loss $0$, so $L^\ne_{\rm un}(f)=1/2$ and the full contrastive risk is $L_{\rm un}(f)=3/4$.

## Example references

[[def-latent-class-contrastive-learning]]: defines the positive-pair and independent-negative sampling laws.

[[lem-contrastive-hinge-and-logistic-loss-properties]]: defines the hinge loss used in the calculation.

[Saunshi et al., Section 4.2 and Equation (8)](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf): decomposes the objective by whether the negative class collides with the positive class.

## Facts & Assumptions

**Given:** Two equally likely classes $a,b$, deterministic inputs, $f(a)=0$, $f(b)=1$, one independent marginal negative, and hinge loss.

[F1] The positive and negative classes are independent with law $(1/2,1/2)$, so equality has probability $1/2$ and inequality has probability $1/2$. [[def-latent-class-contrastive-learning]]

[F2] The hinge contrastive loss is $(1+t)_+$ and equals $1$ at score $t=0$. [[lem-contrastive-hinge-and-logistic-loss-properties]]

## Proof
**Given:** The finite sampling model in the Example.

1.1 If the negative class equals the positive class, the anchor, positive sample and negative sample all have the same representation. Thus $q_f=f(x)(f(x^-)-f(x^+))=0$ and [F2] gives collision loss $1$. [F1, F2, given, algebra]

1.2 If the ordered classes are $(a,b)$, the anchor representation is $0$, hence $q_f=0$ and loss $1$. If they are $(b,a)$, then $q_f=1(0-1)=-1$, hence the hinge loss is $0$. The two ordered cases are equiprobable given inequality, so $L^\ne_{\rm un}(f)=(1+0)/2=1/2$. [F1, F2, given, algebra]

2.1 The collision decomposition weights the two conditional losses by $\tau=1/2$ and $1-\tau=1/2$. Therefore $L_{\rm un}(f)=(1/2)\cdot1+(1/2)\cdot(1/2)=3/4$, with a positive contribution from negative-class collisions. [F1, step 1.1, step 1.2, given, algebra] ∎
