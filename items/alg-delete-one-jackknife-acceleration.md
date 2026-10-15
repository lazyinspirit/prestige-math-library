---
id: alg-delete-one-jackknife-acceleration
kind: algorithm
title: Delete-one jackknife acceleration
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - thm-delete-one-jackknife-linearization-for-smooth-statistics
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §7"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §3"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "Bradley Efron and Robert Tibshirani, An Introduction to the Bootstrap, §14.3, p. 186, equation (14.15)"
      url: "https://books.google.com/books?id=gLlpIUxRntoC"
      locator: "The delete-one jackknife formula for the BCa acceleration constant, using the mean of the leave-one-out estimates."
---

## Definition

Input $n\ge2$ real delete-one estimates $\hat\theta_{(-1)},\ldots,\hat\theta_{(-n)}$. Compute
$$\bar\theta_{(-)}=\frac1n\sum_{i=1}^n\hat\theta_{(-i)},\qquad d_i=\bar\theta_{(-)}-\hat\theta_{(-i)},\qquad S_2=\sum_i d_i^2.$$
If $S_2=0$, return **undefined**. Otherwise return the jackknife acceleration
$$\hat a_J=\frac{\sum_i d_i^3}{6S_2^{3/2}}.$$
The output is the finite-sample acceleration input used by the BCa procedure. For the special case $\hat\theta_{(-i)}=g(\bar X_{n,(-i)})$, [[thm-delete-one-jackknife-linearization-for-smooth-statistics]] proves first-order pseudovalue linearization and jackknife variance consistency under its full hypotheses: the $X_i\in\mathbb R^d$ are IID with $\mathbb E\|X_1\|^2<\infty$; $g:\mathbb R^d\to\mathbb R$ is Borel and continuously Fréchet differentiable on an open neighborhood of $\mu=\mathbb E X_1$; and $0<a^T\Sigma a<\infty$ for $a=\nabla g(\mu)$. This finite-sample algorithm and that first-order theorem make no BCa coverage claim.
