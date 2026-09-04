---
id: thm-dirichlet-series-half-plane-convergence
kind: theorem
title: "Convergence at one point of a Dirichlet series forces local uniform convergence on the open half-plane to its right"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-series, lem-abel-summation-for-complex-series, thm-weierstrass-convergence-holomorphic-functions]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Lemma 2.2"
      url: "https://kskedlaya.org/ant/part-1-3.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Theorem 3.4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
pipeline_run: null
---

## Statement

Let $D(s)=\sum_{n \ge 1} a_n n^{-s}$ be a Dirichlet series. If it converges at
some point $s_0$, then it converges locally uniformly on the half-plane
$\Re s > \Re s_0$ and therefore defines a holomorphic function there.

## Facts & Assumptions

**Given:** A Dirichlet series $D(s)=\sum_{n \ge 1} a_n n^{-s}$ converging at
$s_0$, and a compact set $K \subseteq \{s : \Re s > \Re s_0\}$.

[L1] Abel summation for complex series rewrites
$\sum_{n=M}^N u_n b_n$ in terms of the partial sums of $(u_n)$
([[lem-abel-summation-for-complex-series]]).

[L2] A locally uniform limit of holomorphic functions is holomorphic
([[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Write $\sigma_0 := \Re s_0$ and $u_n := a_n n^{-s_0}$. Since $\sum u_n$ converges, its partial sums $U_N$ are bounded: $|U_N| \le B$. Put $$\varepsilon := \min_{s \in K} (\Re s-\sigma_0) > 0.$$ For $s \in K$, apply [L1] to the tail with weights $b_n = n^{-(s-s_0)}$. Because $b_n-b_{n+1} = O_K(n^{-1-\varepsilon})$ and $|b_N| \le N^{-\varepsilon}$, there is a constant $C_K$ such that $$\left|\sum_{n=M}^N a_n n^{-s}\right| \le C_K B\left(M^{-\varepsilon} + \sum_{n=M}^{N-1} n^{-1-\varepsilon}\right).$$ The right-hand side tends to $0$ uniformly in $s \in K$, so the series converges uniformly on $K$. [L1, given, algebra]

2.1 Each partial sum is holomorphic, being a finite linear combination of the holomorphic functions $s \mapsto n^{-s}$. Since the convergence is uniform on every compact subset of the half-plane, [L2] makes the limit holomorphic there. [L2, step 1.1] ∎
