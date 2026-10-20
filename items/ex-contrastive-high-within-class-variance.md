---
id: ex-contrastive-high-within-class-variance
kind: example
title: "High within-class variance raises contrastive loss despite perfect mean separation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-latent-class-contrastive-learning
  - lem-contrastive-hinge-and-logistic-loss-properties
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Section 5.1 and Figure 1(b)"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
---

## Example

Let $C=\{a,b\}$ be uniform and let each class contain two equally likely inputs indexed by $\eta\in\{-1,+1\}$. In $\mathbb R^2$, define $f(a,\eta)=(1,\eta r)$ and $f(b,\eta)=(-1,\eta r)$ for $r\ge1$. Each class mean is respectively $(1,0)$ and $(-1,0)$, so the mean classifier separates both classes with hinge loss zero. Yet for one independent marginal negative and hinge contrastive loss, the total risk is $L_{\rm un}(f)=\frac14+\frac12r^2$, which grows without bound as the within-class variance $r^2$ increases. The norm bound holds with $R=\sqrt{1+r^2}$ for each fixed $r$.

## Example references

[[def-latent-class-contrastive-learning]]: defines the latent-class triplet law, mean classifier, covariance and contrastive risk.

[[lem-contrastive-hinge-and-logistic-loss-properties]]: defines the hinge loss.

[Saunshi et al., Section 5.1 and Figure 1(b)](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf): gives a two-class example where high within-class variation raises the unsupervised loss despite a good mean classifier.

## Facts & Assumptions

**Given:** The two-class distribution and representation in the Example, one independent marginal negative, and hinge loss.

[F1] The class means are $\mu_a=(1,0)$ and $\mu_b=(-1,0)$; the mean classifier for the ordered task $(a,b)$ has weight $(2,0)$. [[def-latent-class-contrastive-learning]]

[F2] The class-mean hinge risk uses loss $(1-Yw^\top f(X))_+$, and the contrastive hinge loss is $(1+q_f)_+$. [[def-latent-class-contrastive-learning]], [[lem-contrastive-hinge-and-logistic-loss-properties]]

[F3] Given the positive class, the negative class equals it with probability $1/2$; conditional on collision, the score's random part is $r^2\eta_0(\eta_- -\eta_+)$, whose values $2r^2,-2r^2,0$ have probabilities $1/4,1/4,1/2$. Conditional on distinct classes, the score is $-2+r^2\eta_0(\eta_- -\eta_+)$ with the same three probabilities. [[def-latent-class-contrastive-learning]]

## Proof

**Given:** The finite class-conditional laws in the Example.

1.1 For the task $(a,b)$, the mean weight is $(2,0)$. On class $a$ with label $+1$, $Yw^\top f(a,\eta)=2$ for either $\eta$; on class $b$ with label $-1$, it is also $2$. The hinge loss is therefore zero for both labels. Swapping the ordered task gives the same result, so the average mean-classifier hinge risk is zero. [F1, F2, given, algebra]

1.2 Conditional on a class collision, [F3] gives score values $2r^2,-2r^2,0$ with probabilities $1/4,1/4,1/2$. Since $r\ge1$, their hinge losses are $1+2r^2,0,1$, respectively. Thus $L^=_{\rm un}(f)=\frac14(1+2r^2)+\frac12=\frac34+\frac12r^2$. [F2, F3, given, algebra]

1.3 Conditional on distinct classes, the score values are $-2+2r^2,-2-2r^2,-2$ with probabilities $1/4,1/4,1/2$. For $r\ge1$, their hinge losses are $2r^2-1,0,0$. Hence $L^\ne_{\rm un}(f)=\frac14(2r^2-1)=\frac12r^2-\frac14$. [F2, F3, given, algebra]

2.1 Collision and distinct-class events each have probability $1/2$. Combining steps 1.2 and 1.3 yields $L_{\rm un}(f)=\frac12(\frac34+\frac12r^2)+\frac12(\frac12r^2-\frac14)=\frac14+\frac12r^2$. This tends to infinity with $r$, while step 1.1 keeps the mean-classifier hinge risk zero. [F3, step 1.2, step 1.3, step 1.1, given, algebra] ∎
