---
id: lem-admissible-density-domain-is-closed-convex-complete
kind: lemma
title: The admissible Hermitian density domain is closed, convex, and complete
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-admissible-hermitian-density-domain, thm-euclidean-space-complete, def-complete-metric-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §4.4 and Appendix Lemma 4.1
      url: https://arxiv.org/pdf/2004.09088
verification:
  precheck: pending
---

## Statement

For $n\ge2$ and $1\le r<n$, the set $\mathcal D_r$ of
[[def-admissible-hermitian-density-domain]] is nonempty, closed, and convex in
$\mathbb H_n$, and complete in the Frobenius metric.

## Facts & Assumptions
**Given:** Integers $n\ge2$, $1\le r<n$, the real vector space $\mathbb H_n$ with Frobenius norm, and $\mathcal D_r=\{D=D^*:0\preceq D\preceq I_n,\operatorname{tr}D=r\}$.

[F1] The domain and its order conditions are as in [[def-admissible-hermitian-density-domain]].

[F2] Every Euclidean Cauchy sequence in a finite-dimensional real coordinate space converges ([[thm-euclidean-space-complete]]).

## Proof


1.1 The diagonal matrix $D_0=\operatorname{diag}(1,\ldots,1,0,\ldots,0)$ with $r$ ones is Hermitian, satisfies $0\preceq D_0\preceq I_n$, and has trace $r$. Thus $D_0\in\mathcal D_r$, so the domain is nonempty. [given, F1, construct]

1.2 Let $(D_k)$ be a Frobenius-Cauchy sequence in $\mathcal D_r$. Each real and imaginary matrix entry is Cauchy because $| (D_k-D_\ell)_{ij}|\le\|D_k-D_\ell\|_F$. By [F2] the finitely many coordinates converge, defining a matrix $D$; conjugate symmetry passes to coordinate limits, so $D=D^*$. [given, F2]

2.1 For every fixed $x\in\mathbb C^n$, entrywise convergence gives $x^*D_kx\to x^*Dx$ and $x^*(I_n-D_k)x\to x^*(I_n-D)x$. Since both sequences are nonnegative, their limits are nonnegative, so $0\preceq D\preceq I_n$. Finite sums commute with coordinate limits, hence $\operatorname{tr}D=\lim_k\operatorname{tr}D_k=r$. Therefore $D\in\mathcal D_r$. [step 1.2, F1, algebra]

3.1 The finitely many entries converge, so the sum of their squared absolute errors tends to zero; thus $\|D_k-D\|_F\to0$. Every Cauchy sequence in $\mathcal D_r$ therefore converges there, proving completeness. Any ambient-convergent sequence in $\mathcal D_r$ is Cauchy, so the same limit argument shows its limit belongs to $\mathcal D_r$; this proves closedness. [step 1.2, step 2.1, F1]

4.1 If $D_1,D_2\in\mathcal D_r$ and $t\in[0,1]$, then $tD_1+(1-t)D_2$ is Hermitian; its quadratic form and that of $I_n-tD_1-(1-t)D_2$ are convex combinations of nonnegative quadratic forms, and its trace is $t\operatorname{tr}D_1+(1-t)\operatorname{tr}D_2=tr+(1-t)r=r$. Hence it lies in $\mathcal D_r$, proving convexity. [F1, algebra] ∎
