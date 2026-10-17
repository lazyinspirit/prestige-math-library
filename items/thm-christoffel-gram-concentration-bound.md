---
id: thm-christoffel-gram-concentration-bound
kind: theorem
title: Bounded-Christoffel sampling stabilizes the empirical Gram matrix
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - lem-christoffel-sampling-law-and-gram-mean
  - alg-christoffel-weighted-least-squares-collocation
  - lem-bounded-independent-matrix-bernstein-via-trace-exponential
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; the matrix concentration supplier is finite-dimensional and its independence uses finite product laws.
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
sources:
  references:
    - title: Albert Cohen and Giovanni Migliorati, Optimal Weighted Least-Squares Methods, §§2–3
      url: https://arxiv.org/pdf/1608.00512
    - title: Joel A. Tropp, An Introduction to Matrix Concentration Inequalities, §§3.2–3.3 and §6.6
      url: https://arxiv.org/pdf/1501.01571
---

## Statement

Let $\Lambda$, $N=|\Lambda|\ge1$, and the independent Christoffel samples
$X_1,\ldots,X_M$ be as in
[[alg-christoffel-weighted-least-squares-collocation]]. Let $G$ be its
weighted empirical Gram matrix. For $0<\delta<1$, if
$$M\ge12N\log(2N/\delta),$$
then
$$\mathbb P\{\,\operatorname{spec}(G)\subseteq[1/2,3/2]\,\}\ge1-\delta.$$

## Facts & Assumptions

**Given:** A finite real orthonormal basis of size $N\ge1$, independent Christoffel samples, and $0<\delta<1$.

[F1] [[lem-christoffel-sampling-law-and-gram-mean]] gives rank-one matrices $A_i\succeq0$ with $\mathbb EA_i=I_N$ and $\|A_i\|_{\mathrm{op}}\le N$.

[F2] [[alg-christoffel-weighted-least-squares-collocation]] specifies independent samples, hence the matrices formed from them are independent.

[F3] [[lem-bounded-independent-matrix-bernstein-via-trace-exponential]] gives, for centered independent Hermitian summands bounded by $R$ with variance bound $v$, the two-sided tail
$\mathbb P\{\|\sum_iB_i\|_{\mathrm{op}}\ge t\}\le2N\exp(-t^2/(2(Mv+Rt/3)))$.

[F4] [[alg-christoffel-weighted-least-squares-collocation]] defines $G=M^{-1}\sum_iA_i$.

## Proof

1.1 Put $B_i=A_i-I_N$. Then $\mathbb EB_i=0$. Since $0\preceq A_i\preceq NI_N$, spectral calculus gives $A_i^2\preceq NA_i$, and hence $0\preceq\mathbb EB_i^2=\mathbb EA_i^2-I_N\preceq(N-1)I_N\preceq NI_N$. Also every eigenvalue of $A_i$ lies in $[0,N]$, so $\|B_i\|_{\mathrm{op}}\le N$. These are the hypotheses of [F2] with $R=v=N$. [F1, F2, algebra]

2.1 Apply [F3] to $Y=\sum_{i=1}^M B_i$ with $t=M/2$. Direct substitution gives $\mathbb P\{\|G-I_N\|_{\mathrm{op}}>1/2\}\le 2N\exp(-3M/(28N))$, because $G-I_N=Y/M$ and $(M/2)^2/[2(MN+N(M/2)/3)]=3M/(28N)$. [F2, F3, F4, step 1.1, algebra]

3.1 The sample-size condition makes the last bound at most $2N\exp[-(9/7)\log(2N/\delta)] =\delta(\delta/(2N))^{2/7}\le\delta$, since $0<\delta/(2N)<1$. On the complementary event, for every unit vector $x$, $|x^T(G-I_N)x|\le\|G-I_N\|_{\mathrm{op}}\le1/2$; the Rayleigh quotient characterization therefore puts every eigenvalue of $G$ in $[1/2,3/2]$. [given, step 2.1, algebra] ∎