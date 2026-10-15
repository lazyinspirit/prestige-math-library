---
id: def-qft-finite-wick-normal-powers
kind: definition
title: Finite covariance Wick normal powers
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - lem-qft-finite-gaussian-wick-moments
  - def-axiom-of-choice
dependency_roles:
  lem-qft-finite-gaussian-wick-moments: mathematical-premise
  def-axiom-of-choice: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Skinner, Advanced Quantum Field Theory, Chapter 2, “QFT in Zero Dimensions” (University of Cambridge Part III lecture notes)
      url: https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals (lecture notes, arXiv:1902.08652)
      url: https://arxiv.org/pdf/1902.08652
---

## Definition

Assume the Axiom of Choice, let $Q\sim N_N(0,C)$ be the centered finite-dimensional Gaussian vector of [[lem-qft-finite-gaussian-wick-moments]], and write $C_{jj}=\mathbb E[Q_j^2]\ge0$ for the variance of its $j$th coordinate. For each coordinate $j$ and integer $n\ge0$, its **finite covariance Wick normal power** is the polynomial $:Q_j^n:_C$ defined by the formal generating identity

$$\exp\!\left(tQ_j-\frac12t^2C_{jj}\right)=\sum_{n=0}^{\infty}:Q_j^n:_C\,\frac{t^n}{n!}.$$

Equivalently,

$$:Q_j^n:_C=n!\sum_{s=0}^{\lfloor n/2\rfloor}\frac{(-C_{jj}/2)^sQ_j^{n-2s}}{s!(n-2s)!},\qquad :Q_j^4:_C=Q_j^4-6C_{jj}Q_j^2+3C_{jj}^2.$$

This is a finite-dimensional polynomial definition; it does not define a product of unsmeared continuum fields.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, let $Q\sim N_N(0,C)$, and fix a coordinate $j$ with $1\le j\le N$.

[A1] The Axiom of Choice is explicit in the finite Gaussian-law construction. [[def-axiom-of-choice]]

[F1] The finite Gaussian vector has covariance $C$, so $C_{jj}=\mathbb E[Q_j^2]$ is a well-defined nonnegative variance. [[lem-qft-finite-gaussian-wick-moments]]

## Proof

**Proof technique:** formal power-series coefficient extraction.

1.1 Multiply the formal series for $e^{tQ_j}$ and $e^{-C_{jj}t^2/2}$. The coefficient of $t^n$ is the finite sum over $0\le s\le\lfloor n/2\rfloor$ of $Q_j^{n-2s}(-C_{jj}/2)^s/((n-2s)!s!)$. By the defining identity, multiplying this coefficient by $n!$ gives the displayed formula for $:Q_j^n:_C$. This is formal coefficient algebra and requires no convergence assertion. [A1, F1, given, algebra]

2.1 For $n=4$, the terms $s=0,1,2$ are respectively $Q_j^4$, $-6C_{jj}Q_j^2$, and $3C_{jj}^2$, which gives the stated quartic Wick polynomial. The formula also covers $C_{jj}=0$. [step 1.1, algebra] ∎
