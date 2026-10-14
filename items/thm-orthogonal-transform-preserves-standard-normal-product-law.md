---
id: thm-orthogonal-transform-preserves-standard-normal-product-law
kind: theorem
title: "Orthogonal transformations preserve the standard normal product law"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-continuous-functions-are-borel-measurable
  - cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms
  - def-axiom-of-choice
  - def-countable-choice
  - def-law-or-distribution-of-a-random-element
  - def-multivariate-normal-law
  - lem-axiom-of-choice-implies-countable-choice
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-fourier-transform-of-a-finite-complex-measure
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Lecture 4"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/da928274a46632ce0d35d2012a1c8e74_lecture4.pdf"
    - title: "Yen-Chi Chen, UW STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions"
      url: "https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf"
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $Z\sim N_n(0,I_n)$ have independent standard-normal coordinates, and let $U\in\mathbb R^{n\times n}$ satisfy $U^TU=I_n$. Then $UZ$ also has independent $N(0,1)$ coordinates. Here $I_n$ is the identity matrix and $U$ is orthogonal.

## Facts & Assumptions

**Given:** The Axiom of Choice, $Z\sim N_n(0,I_n)$ with independent standard-normal coordinates, and an orthogonal matrix $U$.

[A1] The Axiom of Choice is assumed; the multivariate-normal characteristic-function and finite-Borel uniqueness suppliers below state this use explicitly. [[def-axiom-of-choice]]

[A2] The Axiom of Choice implies Countable Choice, the stated hypothesis of the continuous-map measurability and Fourier-transform suppliers. [[def-countable-choice]] [[lem-axiom-of-choice-implies-countable-choice]]

[F1] The law $N_n(m,\Sigma)$ is the Borel law with all linear projections normal; for $\Sigma=I_n$ it is realized by independent standard-normal coordinates. [[def-multivariate-normal-law]]

[F2] Under the Axiom of Choice, the characteristic function of $N_n(m,\Sigma)$ is $\exp(i\,t\cdot m-t^T\Sigma t/2)$. [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F3] Under Countable Choice, the Fourier transform of a finite complex Borel measure on $\mathbb R^n$ is $\widehat\mu(\xi)=\int e^{-2\pi i x\cdot\xi}\,d\mu(x)$; for the law of a Borel random vector its vector characteristic function is $\mathbb E e^{it\cdot X}$, and substituting $\xi=-t/(2\pi)$ identifies the two transforms. [[thm-fourier-transform-of-a-finite-complex-measure]] [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F4] Under the Axiom of Choice, finite complex Borel measures on $\mathbb R^n$ with equal Fourier transforms are equal. [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]]

[F5] Under Countable Choice, continuous maps between Euclidean spaces are Borel measurable, and a Borel random vector has a law by pushforward. [[cor-continuous-functions-are-borel-measurable]] [[def-law-or-distribution-of-a-random-element]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Since $U^TU=I_n$ and $U$ is square, $U$ is invertible with inverse $U^T$, so $UU^T=I_n$. By [A2], Countable Choice holds. The continuous map $x\mapsto Ux$ is Borel measurable by [F5], so $(UZ)^{-1}(B)=Z^{-1}(U^{-1}(B))$ is measurable for every Borel $B\subseteq\mathbb R^n$. Thus $UZ$ is a Borel random vector and has a law by [F5]. For each $t\in\mathbb R^n$, [F1]–[F2] give $\mathbb E e^{i t^T UZ}=\exp(-\|U^Tt\|^2/2)=\exp(-\|t\|^2/2)=\mathbb E e^{i t^TZ}$; the middle equality follows from $UU^T=I_n$. [A1, A2, F1, F2, F5, algebra]

2.1 By [A2] and [F3], the equality in step 1.1 at every $t$ is equality of the finite Borel Fourier transforms of the laws of $UZ$ and $Z$. Both are probability measures, hence have finite total variation; [F4] therefore gives $\mathcal L(UZ)=\mathcal L(Z)$. [step 1.1, A2, F3, F4, F5]

3.1 By [F1], the coordinates of $Z$ are independent standard normals. Equality of joint laws in step 2.1 makes the coordinate law of $UZ$ the same product law, so its coordinates are again independent $N(0,1)$. This use of orthogonality depends on the Gaussian product law; no claim is made for arbitrary independent coordinates. [F1, step 2.1] ∎
