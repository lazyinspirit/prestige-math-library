---
id: ex-coarsening-conditioning-can-increase-conditional-mutual-information
kind: example
title: "Coarsening the conditioning variable can increase conditional mutual information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-standard-borel-conditional-mutual-information
  - lem-same-marginal-conditional-product-law-well-defined
  - lem-it-finite-kl-agrees-with-measurable-kl
  - def-it-finite-conditional-mutual-information
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-polish-space
  - def-separable-space
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "AC is inherited from standard-Borel conditional laws and measurable-space KL; all displayed finite sums are choice-free."
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §2.4"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
---

## Statement

Let X be a fair bit and let $Y=X$. Set $Z=(X,Y)$ and let W be constant. Then
$$I(X;Y\mid Z)=0,\qquad I(X;Y\mid W)=\ln2.$$
Thus replacing Z by its coarsening W can increase conditional mutual information.

## Facts & Assumptions

**Given:** AC, X uniform on $\{0,1\}$, $Y=X$, $Z=(X,Y)$, and constant W.

[A1] AC is required for measurable-space KL and standard-Borel conditional laws. [[def-axiom-of-choice]]

[F1] Conditional mutual information is KL between the joint law and the same-conditioning-marginal conditional-product law. [[def-standard-borel-conditional-mutual-information]] [[lem-same-marginal-conditional-product-law-well-defined]]

[F2] Finite discrete spaces are standard Borel, finite CMI uses the conditional-product KL convention, and measurable-space KL on finite alphabets is the finite probability-vector sum. [[def-standard-borel-space]] [[def-polish-space]] [[def-separable-space]] [[def-it-finite-conditional-mutual-information]] [[lem-it-finite-kl-agrees-with-measurable-kl]] [[def-it-information-units-and-logarithm-base]] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]

[F3] The finite KL and entropy conventions use natural logarithms and ignore zero-mass terms. [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For a finite value set S, define $d(s,t)=0$ for $s=t$ and 1 otherwise; distinct endpoints force at least one intermediate distance to be 1, so the triangle inequality holds. Tolerance $1/2$ makes every Cauchy sequence eventually constant, hence the metric is complete; S is itself finite and dense, and radius-$1/2$ balls are singletons, so the topology is discrete. By the definitions in [F2], each such space is standard Borel; its finite products are standard Borel by the finite-product supplier. Given $Z=(i,j)$, the pair $(X,Y)$ is the point $(i,j)$, and its two conditional marginals are point masses at i and j. Their product is the point mass at $(i,j)$, so it agrees with the conditional joint law at every Z-value of positive probability. The conditional-product reference law therefore equals the joint law of $(Z,X,Y)$. By [F1], its KL divergence, and hence $I(X;Y\mid Z)$, is zero. [A1, F1, F2, given]

1.2 The variable W has one value. [given]
The joint law of $(W,X,Y)$ has mass $1/2$ at $(w,0,0)$ and $1/2$ at $(w,1,1)$. The conditional marginals given W are both uniform on $\{0,1\}$; their product reference law assigns mass $1/4$ to each of the four pairs at w. Therefore [F1]–[F3] give
$$I(X;Y\mid W)=\frac12\ln\frac{1/2}{1/4}+\frac12\ln\frac{1/2}{1/4}=\ln2.$$
[A1, F1, F2, F3, step 1.1, algebra]

2.1 The map from Z to W is constant and thus coarsens the conditioning information. The two computed values satisfy $I(X;Y\mid W)>I(X;Y\mid Z)$, so this example rules out a general data-processing claim that coarsening the conditioning variable decreases conditional mutual information. [step 1.1, step 1.2] ∎
