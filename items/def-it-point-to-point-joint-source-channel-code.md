---
id: def-it-point-to-point-joint-source-channel-code
kind: definition
title: "Finite-alphabet point-to-point joint source-channel codes"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-discrete-memoryless-channel
  - def-it-single-letter-distortion-and-block-distortion
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all source, channel, and reproduction alphabets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy, MIT OpenCourseWare 6.441 Information Theory, Chapter 20: Advanced Channel Coding and Source-Channel Separation"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/dfddd4345fee8dd49420be583be2b952_MIT6_441S16_chapter_20.pdf"
      locator: "§20.5, printed pp. 215–217 / PDF pp. 9–11: Definition 20.1 and Theorem 20.3."
    - title: "Robert M. Gray, Entropy and Information Theory, author-hosted full text"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 12, §12.7, printed pp. 269–271: joint source-channel block code definition and Theorem 12.7.1."
---

## Definition

Let $\mathcal S,\mathcal X,\mathcal Y,\widehat{\mathcal S}$ be nonempty finite alphabets, let $P_S$ be a probability vector on $\mathcal S$, and let $W$ be a finite discrete memoryless channel from $\mathcal X$ to $\mathcal Y$ as in [[def-discrete-memoryless-channel]]. For positive integers $k,n$, a deterministic **$(k,n)$ joint source-channel code** is a pair of maps
$$f_k:\mathcal S^k\to\mathcal X^n,\qquad g_k:\mathcal Y^n\to\widehat{\mathcal S}^{\,k}.$$
The source block has law $P_S^{\otimes k}$, the channel output conditional on input $x^n$ has law $W^n(\cdot\mid x^n)$, and the reproduction is $\widehat S^k=g_k(Y^n)$. The code has no feedback.

A **code sequence at channel-use ratio $\rho$** consists of such codes with source lengths $k\to\infty$, channel lengths $n_k$, and $n_k/k\to\rho\in(0,\infty)$. In the lossless case $\widehat{\mathcal S}=\mathcal S$, its block error is $\Pr[\widehat S^k\ne S^k]$. In the lossy case, for finite nonnegative single-letter distortion $d$, its normalized block distortion is $d_k$ from [[def-it-single-letter-distortion-and-block-distortion]]; expected distortion and the positive-slack excess-distortion probabilities $\Pr[d_k>D+\varepsilon]$ for every $\varepsilon>0$ are distinct criteria.
