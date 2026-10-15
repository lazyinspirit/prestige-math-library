---
id: thm-tdmath-dominated-convergence
kind: theorem
title: "Dominated convergence for the measure integral"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: ["def-tdmath-measure-integral","lem-tdmath-fatou","thm-tdmath-monotone-convergence"]
justified_by: []
dependency_roles: {"def-tdmath-measure-integral":"mathematical-premise","lem-tdmath-fatou":"mathematical-premise","thm-tdmath-monotone-convergence":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Terence Tao, 245A Notes 3: Integration on Abstract Measure Spaces and the Convergence Theorems, full author-hosted lecture text"
      url: "https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/"
      locator: "Complete HTML lecture text read; abstract measure spaces, integration, Fatou, monotone convergence, dominated convergence, and the L1 convergence argument."
    - title: "MIT OpenCourseWare 18.102 Spring 2021, complete lecture notes (Lecture 12 on Lebesgue Integration and Dominated Convergence)"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
      locator: "Complete full lecture-notes PDF retrieved and read; Lecture 12, definitions 120–121, Propositions 122–123, and Theorem 125 with its Fatou-based dominated-convergence proof, lecture pp.59–62."
---

## Statement

Let $(X,\Sigma,\mu)$ be a measure space and let $f_n:X\to\mathbb C$ be measurable with $f_n\to f$ almost everywhere. Suppose $g\ge0$ is measurable and $\int g\,d\mu<\infty$, and $|f_n|\le g$ almost everywhere for every $n$. Then $f$ is integrable, $\int f_n\,d\mu\to\int f\,d\mu$, and $\int|f_n-f|\,d\mu\to0$.

## Facts & Assumptions

**Given:** As stated in the item.

[F1] [[def-tdmath-measure-integral]]: integrability, signed/complex integrals, and the reference-measure convention are as defined there.

[F2] [[lem-tdmath-fatou]]: for nonnegative measurable functions, the integral of the pointwise liminf is at most the liminf of the integrals.

[F3] [[thm-tdmath-monotone-convergence]]: the nonnegative integral is additive and positively homogeneous.

[A1] The functions are measurable, converge almost everywhere, and are dominated almost everywhere by the nonnegative integrable function $g$.

## Proof

**Given:** A measure space, almost-everywhere convergence, and an integrable dominating function $g\ge0$.

1.1 The exceptional convergence and domination sets have a common measurable null superset $N$, by countable subadditivity: disjointifying $N_1,N_2,\ldots$ into successive differences and applying countable additivity gives $\mu(\bigcup_jN_j)\le\sum_j\mu(N_j)=0$. A nonnegative measurable function supported on $N$ has integral zero, since every simple minorant is supported there. Redefine all $f_n$ and $f$ to be zero on $N$; this preserves measurability and their integrals, and now convergence and domination hold everywhere. Also $|f|\le g$ pointwise, hence $f$ is integrable. [F1, A1]

2.1 First take all functions real. The nonnegative functions $f_n+g$ converge pointwise to $f+g$. Fatou gives $\int(f+g)\le\liminf_n\int(f_n+g)=\int g+\liminf_n\int f_n$, so $\int f\le\liminf_n\int f_n$. Applying Fatou to $g-f_n\ge0$ gives $\int(g-f)\le\liminf_n\int(g-f_n)=\int g-\limsup_n\int f_n$, hence $\limsup_n\int f_n\le\int f$. Additivity of integrable signed integrals follows by writing each as a difference of its positive and negative parts and using [F3]. The inequalities imply convergence of integrals. [F1, F2, F3, step 1.1]

3.1 For complex $f_n$, apply step 2.1 separately to their real and imaginary parts, each dominated by $g$; their integral limits combine to $\int f$. To prove $L^1$ convergence, apply Fatou to the nonnegative functions $2g-|f_n-f|$, which converge to $2g$; it gives $2\int g\le2\int g-\limsup_n\int|f_n-f|$, so the latter limsup is zero. Therefore $\int|f_n-f|\to0$ as claimed. [F1, F2, F3, step 2.1] ∎
