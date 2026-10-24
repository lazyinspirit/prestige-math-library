---
id: ex-omega-indexed-bayesian-posterior-r-c-d
kind: example
title: A Bayesian posterior RCD indexed by the sample point
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - def-measure-kernel-and-probability-kernel
  - lem-prior-and-model-kernel-define-joint-law
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2 §§2.1.1–2.1.4"
      url: https://www.bayesrulesbook.com/chapter-2.html
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., Chapter 1 §1.3"
      url: https://sites.stat.columbia.edu/gelman/book/BDA3.pdf
---

## Example

Let $\Theta=Y=\{0,1\}$, give each parameter prior probability $1/2$, and set $K(\theta,\{y\})=3/4$ when $y=\theta$ and $1/4$ otherwise. On the canonical joint space $\Omega=\Theta\times Y$, the posterior RCD is the random probability measure $L(\omega,\cdot)=\Pi_{Y(\omega)}$, where $\Pi_y(y)=3/4$ and $\Pi_y(1-y)=1/4$. The RCD is evaluated at a sample point $\omega$; the data-indexed version is the separate kernel $y\mapsto\Pi_y$.

## Facts & Assumptions

**Given:** The finite model and the canonical joint probability specified in the example.

[F1] A proper Bayesian model supplies a prior probability and a parameter-measurable sampling probability kernel. [[def-bayesian-model-as-prior-and-sampling-kernel]]

[F2] A posterior RCD is indexed by the sample point, while a data-indexed posterior is a kernel on the data space whose composition with $Y$ satisfies the conditional-law identity. [[def-bayesian-posterior-as-regular-conditional-law]]

[F3] The prior and sampling kernel define the joint probability on the product space. [[lem-prior-and-model-kernel-define-joint-law]]

## Verification

**Given:** The assumptions and finite model in the example.

1.1 The joint law assigns mass $3/8$ to each diagonal point $(0,0),(1,1)$ and $1/8$ to each off-diagonal point; hence $J_Y(0)=J_Y(1)=1/2$. [given, F1, F3, algebra]

2.1 For each $y$, $\Pi_y$ has masses $3/4$ at $y$ and $1/4$ at $1-y$, so it is a probability, with $\Pi_y(\{y\})J_Y(y)=3/8=J(y,y)$ and $\Pi_y(\{1-y\})J_Y(y)=1/8=J(1-y,y)$. Define $L(\omega,A)=\Pi_{Y(\omega)}(A)$. Since the spaces are finite, both $y\mapsto\Pi_y(A)$ and $\omega\mapsto L(\omega,A)$ are measurable for every $A\subseteq\Theta$. [given, F2, step 1.1, algebra, construct]

3.1 Every event $H\in\sigma(Y)$ is $\Theta\times B$ for some $B\subseteq Y$. For any $A\subseteq\Theta$, $\int_H L(\omega,A)\,J(d\omega)=\sum_{y\in B}\Pi_y(A)J_Y(y)=\sum_{y\in B}J(A\times\{y\})=J(H\cap\{X\in A\})$. Thus $L$ is an RCD of $X$ given $\sigma(Y)$, and by [F2] it is the posterior RCD. [F2, step 1.1, step 2.1, algebra] ∎
