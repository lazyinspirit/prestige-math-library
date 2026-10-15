---
id: ex-standard-borel-posterior-kernel-on-countable-data
kind: example
title: A standard-Borel posterior kernel for countable data
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - thm-standard-borel-bayesian-posterior-kernel-exists
  - def-standard-borel-space
  - def-polish-space
  - def-axiom-of-choice
  - thm-geometric-series
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2 §§2.3.1–2.3.6"
      url: https://www.bayesrulesbook.com/chapter-2.html
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., Chapter 1 §1.3"
      url: https://sites.stat.columbia.edu/gelman/book/BDA3.pdf
---

## Example

Let $\Theta=\{0,1\}$ have prior probabilities $1/2,1/2$, and let the data space be $\mathbb N_0=\{0,1,2,\ldots\}$ with its power-set sigma-algebra. For $n\in\mathbb N_0$, set $f_0(n)=2^{-(n+1)}$ and $f_1(n)=\frac23(\frac13)^n$. These are two geometric sampling laws. The prior-predictive mass is $m(n)=\frac12(f_0(n)+f_1(n))>0$, and a data-indexed posterior is
$$\Pi_n(1)=\frac{f_1(n)}{f_0(n)+f_1(n)},\qquad \Pi_n(0)=\frac{f_0(n)}{f_0(n)+f_1(n)}.$$

## Facts & Assumptions

**Given:** AC, the finite parameter space, prior, and countable data model in the example.

[A1] The Axiom of Choice (AC), as required by the general standard-Borel RCD route. [[def-axiom-of-choice]]

[F1] The prior probability and sampling kernel define the proper Bayesian model. [[def-bayesian-model-as-prior-and-sampling-kernel]]

[F2] A data-indexed posterior kernel is a probability kernel whose composition with the observation is a posterior RCD. [[def-bayesian-posterior-as-regular-conditional-law]]

[F3] When both the parameter and data spaces are standard Borel, the posterior RCD factors through the data coordinate as a measurable posterior kernel. [[thm-standard-borel-bayesian-posterior-kernel-exists]]

[F4] For $0\le r<1$, the geometric series satisfies $\sum_{n=0}^{\infty}r^n=(1-r)^{-1}$. [[thm-geometric-series]]

[F5] A standard-Borel space is measurably isomorphic to a Polish space. [[def-standard-borel-space]]

[F6] A Polish space is a separable space whose topology is induced by a complete metric. [[def-polish-space]]

## Verification

**Given:** The assumptions and countable model in the example.

1.1 The discrete metric on $\mathbb N_0$ is complete because every Cauchy sequence is eventually constant; $\mathbb N_0$ itself is a countable dense subset. Its topology is discrete, so its Borel sigma-algebra is the power set. The finite discrete parameter space has the same properties. Thus both spaces are standard Borel by [F5]–[F6]. By [F4], $\sum_nf_0(n)=1$ and $\sum_nf_1(n)=1$, so they define probability sampling laws and the prior in [F1] gives a Bayesian model. [given, F1, F4, F5, F6, algebra]

2.1 Since both spaces are standard Borel and AC holds, [F3] supplies a data-indexed posterior kernel. For every $n$, both $f_0(n)$ and $f_1(n)$ are positive and finite, so $m(n)>0$ and the displayed values are in $[0,1]$ and sum to one. Every function on the discrete data space is measurable, hence $n\mapsto\Pi_n$ is a probability kernel. [given, A1, F3, step 1.1, algebra]

3.1 For $i\in\{0,1\}$ and every $B\subseteq\mathbb N_0$, $\sum_{n\in B}\Pi_n(i)m(n)=\frac12\sum_{n\in B}f_i(n)=J(\{i\}\times B)$. Adding the identities for $i=0,1$ proves the rectangle identity for every $A\subseteq\Theta$ and every data event $B$. Thus the explicit kernel is a data-indexed posterior version; all its data values have positive prior-predictive mass. [F2, step 1.1, step 2.1, algebra] ∎
