---
id: lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform
kind: lemma
title: Pointwise CDF convergence to a continuous law is uniform
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-cumulative-distribution-function-of-a-random-variable
  - thm-continuity-from-above-for-measures
  - thm-continuity-from-below-for-measures
  - thm-heine-cantor-r
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. P. Romano and A. M. Shaikh, On the Uniform Asymptotic Validity of Subsampling and the Bootstrap, Appendix A.1"
      url: "https://home.uchicago.edu/amshaikh/webfiles/uniformity.pdf"
    - title: "Ryan Martin, Stat 451 Lecture Notes 0812: Bootstrap, pp. 10–11"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat451/Slides/451notes08.pdf"
---

## Statement

Let $F$ be a continuous CDF and $(G_n)$ random CDFs, meaning that each $G_n(x)$ is a measurable real random variable and, for every outcome, $x\mapsto G_n(x)$ is a right-continuous CDF. Suppose that for each fixed $x\in\mathbb R$, $G_n(x)\to F(x)$ in probability. Then
$$\sup_{x\in\mathbb R}|G_n(x)-F(x)|\longrightarrow0$$
in probability.

If the initial paths are CDFs only outside specified measurable null sets $N_n$, first set $G_n(x)=\mathbf1_{\{x\ge0\}}$ on $N_n$. All suprema in the conclusion refer to these everywhere-CDF versions; no completeness of the probability space is assumed.

## Facts & Assumptions

**Given:** A continuous CDF $F$ and random CDFs $G_n$ with the stated pointwise convergence in probability.

[F1] [[def-cumulative-distribution-function-of-a-random-variable]]: A CDF is $F_X(x)=\mathbb P(X\le x)$, hence is nondecreasing and has limits $0$ and $1$ at the two tails by measure continuity.

[F2] [[thm-heine-cantor-r]]: A continuous real function on a compact subset of $\mathbb R$ is uniformly continuous.

[F3] [[thm-continuity-from-above-for-measures]]: For decreasing measurable sets whose first set has finite measure, the measure of their intersection is the infimum of their measures.

[F4] [[thm-continuity-from-below-for-measures]]: For increasing measurable sets, the measure of their union is the supremum of their measures.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 The stated replacement on each measurable null set preserves measurable evaluations and their pointwise convergence in probability, and gives CDF paths everywhere. Consequently $\sup_x|G_n(x)-F(x)|$ equals the supremum over rational $x$ for every outcome, by right-continuity, and is measurable. Fix $0<\eta<1/2$. The events defining a CDF increase to the whole space as $x\to+\infty$ and decrease to the empty set as $x\to-\infty$; [F3]–[F4] therefore give its tail limits. Choose $L<R$ with $F(L)<\eta$ and $1-F(R)<\eta$. By [F2], $F$ is uniformly continuous on $[L,R]$, so choose a finite partition $L=x_0<\cdots<x_k=R$ for which every increment $F(x_{j+1})-F(x_j)<\eta$. [F1, F2, F3, F4, given, choose]

2.1 Pointwise convergence at the finitely many grid points implies that, with probability tending to one, $|G_n(x_j)-F(x_j)|\le\eta$ for every $j$. On this event, monotonicity of both CDFs bounds their difference on each $[x_j,x_{j+1}]$ by $3\eta$. For $x<L$, both CDF values lie between $0$ and their values at $L$, so their difference is at most $2\eta$; for $x>R$, apply the same argument to the complementary tails using their values at $R$. Hence $\sup_x|G_n(x)-F(x)|\le3\eta$ with probability tending to one. Since $\eta>0$ was arbitrary, the supremum converges to zero in probability. [F1, step 1.1, given, algebra] ∎
