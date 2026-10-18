---
id: thm-it-gaussian-squared-error-rate-distortion
kind: theorem
title: "Gaussian squared-error rate-distortion function"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-it-general-rate-distortion-function
  - def-standard-normal-and-normal-laws
  - lem-it-gaussian-reference-kernel-information-lower-bound
  - thm-orthogonal-transform-preserves-standard-normal-product-law
  - thm-kullback-leibler-is-nonnegative
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-continuity-from-above-for-measures
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is required by the standard-Borel KL, normal-law, and orthogonal-normal suppliers."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "MIT OpenCourseWare 6.441, Chapter 25: Evaluating R(D)"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf"
      locator: "§25.1.2, PDF pp. 2–4 / printed pp. 256–258: Gaussian squared-error formula and converse."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §4.6, printed pp. 99–102: Gaussian source and squared-error distortion."
---

## Statement

Assume AC. Let $X\sim N(0,\sigma^2)$, where $\sigma^2\ge0$, and let squared error $d(x,y)=(x-y)^2$ be used in the standard-Borel information rate-distortion function [[def-it-general-rate-distortion-function]]. For $D\ge0$, if $\sigma^2>0$, then
$$
R(D)=\begin{cases}+\infty,&D=0,\\[2pt]\frac12\log_2^+(\sigma^2/D),&D>0,\end{cases}
$$
where $\log_2^+(u)=\max(0,\log_2u)$. If $\sigma^2=0$, then $R(D)=0$ for every $D\ge0$.

## Facts & Assumptions

**Given:** AC, $X\sim N(0,\sigma^2)$, $\sigma^2\ge0$, and $D\ge0$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the KL and orthogonal-normal suppliers.

[F1] [[def-it-general-rate-distortion-function]]: $R(D)$ is the infimum of $I_{\rm nat}(X;Y)/\ln2$ over joint laws with $X$-marginal fixed and $\mathbb E(X-Y)^2\le D$; an empty infimum is $+\infty$.

[F2] [[lem-it-gaussian-reference-kernel-information-lower-bound]]: if $X\sim N(0,\sigma^2)$, $0<D<\sigma^2$, and $\mathbb E(X-Y)^2\le D$, then $I_{\rm nat}(X;Y)\ge\frac12\ln(\sigma^2/D)$, without a density assumption on $Y$.

[F3] [[thm-orthogonal-transform-preserves-standard-normal-product-law]]: an orthogonal transform of independent standard normals again has independent standard-normal coordinates, under AC.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, an invertible linear change of variables transforms a density by the absolute determinant of its inverse. The assumed AC in [A1] implies Countable Choice by restricting its choice function to a countable family.

[F5] [[thm-kullback-leibler-is-nonnegative]]: KL divergence between probability laws is nonnegative.

[F6] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: the product of the probability laws used below exists and has the rectangle/product-density formula.

[F7] [[def-standard-normal-and-normal-laws]]: a nondegenerate normal law has its everywhere-positive affine Gaussian density, which is bounded.

[F8] [[thm-continuity-from-above-for-measures]]: a finite measure is continuous along a decreasing sequence of measurable sets.

## Proof




**Given:** The hypotheses and suppliers [A1], [F1]–[F8].

1.1 Suppose $\sigma^2>0$ and $0<D<\sigma^2$. By [F2], every feasible joint law has mutual information in nats at least $\frac12\ln(\sigma^2/D)$; division by $\ln2>0$ and taking the infimum in [F1] gives $R(D)\ge\frac12\log_2(\sigma^2/D)$. [A1, F1, F2, given, algebra]

1.2 If $\sigma^2>0$ and $D\ge\sigma^2$, the constant reconstruction $Y=0$ has distortion $\sigma^2$ and mutual information zero; [F5] makes zero the minimum, so $R(D)=0$. [A1, F1, F5, given]

1.3 Suppose $\sigma^2>0$ and $D=0$. Every feasible coupling satisfies $X=Y$ almost surely because the nonnegative random variable $(X-Y)^2$ has expectation zero. The diagonal $\{(x,y):x=y\}$ has joint probability one. By [F7] the normal density is bounded by $(2\pi\sigma^2)^{-1/2}$, so under the product law, for every $h>0$, the event $|X-Y|\le h$ has probability at most $2h(2\pi\sigma^2)^{-1/2}$. For $h=1/(n+1)$, $n\ge0$, these measurable events decrease to the diagonal; [F8] therefore makes its product probability zero. Thus the joint law is not absolutely continuous with respect to the product of its marginals and its KL, hence its mutual information, is infinite. Every feasible coupling has this value, proving $R(0)=+\infty$. [A1, F1, F6, F7, F8, given, algebra]

2.1 Put $a=\sqrt{\sigma^2-D}>0$, $b=\sqrt D>0$, and let $U,V$ be independent standard normals. Set $Y=aU$, $X=aU+bV$. The orthogonal matrix $\sigma^{-1}\begin{pmatrix}a&b\\-b&a\end{pmatrix}$ and [F3] show $X\sim N(0,\sigma^2)$; also $\mathbb E(X-Y)^2=b^2=D$. By [F7], $U,V$ have product density; the invertible map $(u,v)\mapsto(x,y)=(au+bv,au)$ has determinant $-ab$, so [F4] gives joint density $(2\pi ab)^{-1}\exp[-y^2/(2a^2)-(x-y)^2/(2b^2)]$. The product of the $N(0,\sigma^2)$ and $N(0,a^2)$ marginals has density $(2\pi\sigma a)^{-1}\exp[-x^2/(2\sigma^2)-y^2/(2a^2)]$. Their log-density ratio has expectation $\ln(\sigma/b)-\frac12+\frac12=\frac12\ln(\sigma^2/D)$; [F1] therefore gives a feasible joint law attaining the lower bound in step 1.1. [A1, F1, F3, F4, F6, F7, step 1.1, given, construct, algebra]

3.1 If $\sigma^2=0$, then $X=0$ almost surely. The constant reconstruction $Y=0$ has zero distortion and zero mutual information, while [F5] gives a nonnegative lower bound for every feasible coupling. Therefore $R(D)=0$ for every $D\ge0$. These branches prove the statement. [A1, F1, F5, given] ∎
