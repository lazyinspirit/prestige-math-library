---
id: ex-finite-deterministic-copy-has-mutual-information-equal-to-entropy
kind: example
title: "A finite deterministic copy has mutual information equal to entropy"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-measure-theoretic-mutual-information
  - lem-it-finite-kl-agrees-with-measurable-kl
  - def-it-finite-mutual-information
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-polish-space
  - def-separable-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "AC is inherited from measurable-space KL. The finite entropy and the identification of a finite discrete law use no additional choice."
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let $X$ be Bernoulli with $P(X=1)=p$ and $P(X=0)=1-p$, and set $Y=X$. Then
$$I(X;Y)=H(X)=-p\ln p-(1-p)\ln(1-p),$$
where $H(X)$ means the finite Shannon entropy of the probability vector of X and $0\ln0=0$.

## Facts & Assumptions

**Given:** AC, $p\in[0,1]$, and the finite-valued random variables X and Y.

[A1] AC is needed by the general measurable-space KL definition through its Radon–Nikodym density. [[def-axiom-of-choice]]

[F1] Mutual information is KL of the joint law against the product of its marginals. [[def-measure-theoretic-mutual-information]]

[F2] The finite MI convention is the joint KL against the product of the marginal pmfs, and the measurable-space KL equals this finite sum on a finite alphabet. [[def-it-finite-mutual-information]] [[lem-it-finite-kl-agrees-with-measurable-kl]] [[def-it-information-units-and-logarithm-base]]

[F3] Finite Shannon entropy is $-\sum_i p_i\ln p_i$ with $0\ln0=0$. [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]

[F4] A finite set with the discrete metric is complete and separable, hence Polish; its Borel sigma-algebra is discrete and therefore standard Borel. [[def-polish-space]] [[def-separable-space]] [[def-standard-borel-space]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 On $\{0,1\}$, define $d(x,y)=0$ if $x=y$ and $d(x,y)=1$ otherwise; distinct endpoints force at least one of the two intermediate distances to be 1, so the triangle inequality holds. For a Cauchy sequence, tolerance $1/2$ forces all sufficiently late terms to be equal, so the metric is complete. The finite set itself is a finite dense subset, and radius-$1/2$ balls are singletons, so the topology is discrete. By the definitions in [F4], this is a Polish presentation of the discrete sigma-algebra, which is therefore standard Borel. If $p=0$ or $p=1$, X and Y are the same constant almost surely; their joint law and the product of their marginals are the same point mass. Thus [F1] gives a finite-alphabet mutual information, [F2] gives $I(X;Y)=0$, and [F3] gives the same entropy. [A1, F1, F2, F3, F4, given]

1.2 Suppose $0<p<1$. [given]
The joint law of $(X,Y)$ has masses $p$ at $(1,1)$ and $1-p$ at $(0,0)$, and zero elsewhere. The product law has masses $p^2$ at $(1,1)$ and $(1-p)^2$ at $(0,0)$. By [F1]–[F2],
$$I(X;Y)=p\ln\frac{p}{p^2}+(1-p)\ln\frac{1-p}{(1-p)^2}=-p\ln p-(1-p)\ln(1-p).$$
The last quantity is $H(X)$ by [F3]. [A1, F1, F2, F3, step 1.1, algebra]

2.1 The endpoint cases in step 1.1 and the interior case in step 1.2 exhaust $p\in[0,1]$ and establish the claimed identity throughout. [step 1.1, step 1.2] ∎
