---
id: lem-admissible-density-domain-is-closed-convex-complete
kind: lemma
title: The admissible Hermitian density domain is closed, convex, and complete
status: published
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

1.2 Identify $\mathbb H_n$ with $\mathbb R^{n^2}$ by listing the real diagonal entries and, for each $i<j$, the coordinates $\sqrt2\,\operatorname{Re}D_{ij}$ and $\sqrt2\,\operatorname{Im}D_{ij}$. This real-linear map is bijective, since the lower-triangular entries are recovered by conjugation, and its squared Euclidean norm is $\sum_i D_{ii}^2+2\sum_{i<j}|D_{ij}|^2=\|D\|_F^2$. Thus it is an isometry. If $(D_k)$ is Frobenius-Cauchy, its image is Cauchy in $\mathbb R^{n^2}$, so [F2] gives a limit whose inverse image $D\in\mathbb H_n$ satisfies $D_k\to D$ in Frobenius norm. [given, F2, construct, algebra]

2.1 For each fixed $x\in\mathbb C^n$, $|x^*(D_k-D)x|\le(\sum_i|x_i|)^2\|D_k-D\|_F$, since each matrix entry is bounded by the Frobenius norm. The same estimate applies to $x^*((I_n-D_k)-(I_n-D))x$. Both quadratic forms therefore converge; their terms are nonnegative, so their limits are nonnegative and $0\preceq D\preceq I_n$. Also $|\operatorname{tr}(D_k-D)|\le n\|D_k-D\|_F$, so $\operatorname{tr}D=\lim_k\operatorname{tr}D_k=r$. Hence $D\in\mathcal D_r$. [step 1.2, F1, algebra]

3.1 Steps 1.2 and 2.1 show that every Frobenius-Cauchy sequence in $\mathcal D_r$ converges to a member of $\mathcal D_r$, so the domain is complete. To prove closedness directly, for each fixed $x\in\mathbb C^n$ the real-valued maps $D\mapsto x^*Dx$ and $D\mapsto x^*(I_n-D)x$ are continuous, since their differences at $D,E$ have modulus at most $(\sum_i|x_i|)^2\|D-E\|_F$. The trace is continuous as $|\operatorname{tr}(D-E)|\le n\|D-E\|_F$. Thus $\mathcal D_r$ is the intersection of the closed preimages of $[0,\infty)$ under these quadratic-form maps and of $\{r\}$ under the trace map. An arbitrary intersection of closed sets is closed. [step 1.2, step 2.1, F1, algebra]

4.1 If $D_1,D_2\in\mathcal D_r$ and $t\in[0,1]$, then $tD_1+(1-t)D_2$ is Hermitian; its quadratic form and that of $I_n-tD_1-(1-t)D_2$ are convex combinations of nonnegative quadratic forms, and its trace is $t\operatorname{tr}D_1+(1-t)\operatorname{tr}D_2=t r+(1-t)r=r$. Hence it lies in $\mathcal D_r$, proving convexity. [F1, algebra] ∎
