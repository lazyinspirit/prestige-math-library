---
id: ex-uniform-endpoint-mle
kind: example
title: "The endpoint MLE for a uniform scale"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - cex-uniform-maximum-has-n-rate-not-root-n
  - def-probability-measure
  - def-identically-distributed-and-iid-random-variables
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf"
---

## Example

For $X_1,\ldots,X_n$ iid with density $p_\theta(x)=\theta^{-1}\mathbf1_{[0,\theta]}(x)$, $\theta>0$, the likelihood is maximized almost surely at the sample endpoint $X_{(n)}=\max_iX_i$. The error has the nonregular limit $n(\theta-X_{(n)})\Rightarrow\operatorname{Exp}(1/\theta)$, where the parameter denotes the exponential rate.

## Verification

**Given:** The Uniform model, $n\ge1$, and the IID sample in the Example.

[F1] IID observations have one common law and are mutually independent ([[def-identically-distributed-and-iid-random-variables]]); a probability measure has total mass one ([[def-probability-measure]]).

[F2] For this model, $n(\theta-X_{(n)})$ converges to the exponential law with rate $1/\theta$, with CDF $1-e^{-t/\theta}$ for $t\ge0$ ([[cex-uniform-maximum-has-n-rate-not-root-n]]).

1.1 For a sample in the support, independence makes the joint likelihood $L_n(\vartheta;x)=\prod_{i=1}^np_\vartheta(x_i)=\vartheta^{-n}\mathbf1\{x_{(n)}\le\vartheta\}$ for $\vartheta>0$. If $x_{(n)}>0$, this likelihood is zero below $x_{(n)}$ and strictly decreases as $\vartheta^{-n}$ above it; its maximum is at $\widehat\theta_n=x_{(n)}$. [F1, given, algebra]

2.1 Since each uniform observation has no atom at zero, $P_\theta(X_{(n)}=0)\le P_\theta(X_1=0)=0$. Thus the endpoint formula is the MLE almost surely. On the null event $X_{(n)}=0$, the likelihood is $\vartheta^{-n}$ and is unbounded as $\vartheta\downarrow0$, so no maximizer exists there; a fixed positive fallback is only a measurable extension, not an MLE on that event. Applying [F2] identifies the exact rate and limit law. [F1, F2, given, step 1.1, algebra] ∎
