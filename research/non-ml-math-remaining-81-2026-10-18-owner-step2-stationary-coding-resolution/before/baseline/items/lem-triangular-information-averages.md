---
id: lem-triangular-information-averages
kind: lemma
title: "Triangular averages of finite-past information converge to the infinite-past average"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - thm-birkhoff-ergodic-theorem
  - lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces
  - def-measure-preserving-transformation-and-system
  - thm-dominated-convergence
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past/triangular-information averaging in the Shannon–McMillan–Breiman proof. The abstract integrable-envelope formulation and proof here are local."
---
## Statement

If nonnegative integrable-envelope functions g_k converge almost surely to g, proves the triangular averages of (g_k-g) circ T^k tend to zero almost surely and in L1 on a finite measure-preserving system.

## Facts & Assumptions

**Given:** A probability-preserving system $(\Omega,\mathcal F,P,T)$ and finite-valued measurable functions $g_j\ge0$ with $g_j\to g$ almost surely and $G:=\sup_jg_j\in L^1(P)$.

[F1] [[thm-birkhoff-ergodic-theorem]]: time averages of an integrable function in a measure-preserving system converge almost surely to an integrable limit.

[F2] [[lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces]]: on a finite-measure space, the time averages converge in $L^1$ to their Birkhoff limit.

[F3] [[def-measure-preserving-transformation-and-system]]: $P(T^{-1}E)=P(E)$, so every $T^i$ preserves $P$.

[F4] [[thm-dominated-convergence]]: pointwise convergence under an integrable envelope implies convergence of integrals.

## Proof

**Given:** The hypotheses and [F1]–[F4].

1.1 For each $K$, put $U_K=\sup_{j\ge K}|g_j-g|$. Then $U_K\downarrow0$ almost surely and $0\le U_K\le 2G$ almost surely, since $g\le G$ as a pointwise limit. Dominated convergence [F4] gives $\mathbb E U_K\to0$. [F4, given, algebra]

1.2 Since $g_i\to g$ almost surely and $|g_i-g|\le2G$, [F4] gives $E|g_i-g|\to0$. By stationarity [F3], $E|g_i-g|(T^i)=E|g_i-g|$, so the expectation of the absolute triangular error is $n^{-1}\sum_{i<n}E|g_i-g|\to0$ by Cesaro averaging. Thus the error tends to zero in $L^1$. [F3, F4, given, algebra]

2.1 Fix $K$. For $i\ge K$, $|g_i-g|\le U_K$. Hence for $n>K$, the average of $|g_i-g|\circ T^i$ is bounded by the first $K$ terms divided by $n$, plus $n^{-1}\sum_{i=K}^{n-1}U_K\circ T^i$. The first part tends to zero almost surely. By [F1], the second part converges almost surely to the Birkhoff limit $U_K^*$; by [F2], the averages converge to $U_K^*$ in $L^1$, so $E U_K^*=E U_K$. [F1, F2, F3, step 1.1]

3.1 Apply step 2.1 to every integer $K$ on the intersection of the resulting countably many probability-one sets. The limsup of the left side is at most $U_K^*$ for each $K$. Since $U_K$ decreases pointwise, the averages and their limits $U_K^*$ decrease; their expectations equal $E U_K\to0$. Thus $\inf_KU_K^*=0$ almost surely, and the limsup is zero. Thus $n^{-1}\sum_{i<n}|g_i-g|(T^i\omega)\to0$ almost surely. [step 1.1, step 2.1, algebra]

4.1 By [F1]–[F2], the Birkhoff averages of $g$ converge almost surely and in $L^1$ to their Birkhoff limit. Steps 3.1 and 1.2 show the triangular averages differ from these averages by quantities tending to zero almost surely and in $L^1$, respectively. Hence both modes of convergence hold with the same limit. [F1, F2, step 3.1, step 1.2, algebra] ∎
