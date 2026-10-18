---
id: lem-triangular-information-averages
kind: lemma
title: "Triangular averages of finite-past information converge to the infinite-past average"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - thm-birkhoff-ergodic-theorem
  - lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces
  - def-measure-preserving-transformation-and-system
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
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

If nonnegative integrable-envelope functions $g_k$ converge $\mu$-almost everywhere to $g$, proves the triangular averages of $(g_k-g)\circ T^k$ tend to zero $\mu$-almost everywhere and in $L^1(\mu)$ on a finite measure-preserving system.

## Facts & Assumptions

**Given:** A finite-measure-preserving system $(\Omega,\mathcal F,\mu,T)$, with $\mu(\Omega)<\infty$, and finite-valued measurable functions $g_j\ge0$ with $g_j\to g$ $\mu$-almost everywhere and $G:=\sup_jg_j\in L^1(\mu)$.

[F1] [[thm-birkhoff-ergodic-theorem]]: time averages of an integrable function in a measure-preserving system converge almost surely to an integrable limit.

[F2] [[lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces]]: on a finite-measure space, the time averages converge in $L^1$ to their Birkhoff limit.

[F3] [[def-measure-preserving-transformation-and-system]]: $\mu(T^{-1}E)=\mu(E)$, so every $T^i$ preserves $\mu$.

[F4] [[thm-dominated-convergence]]: pointwise convergence under an integrable envelope implies convergence of integrals.

[F5] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: if $T$ preserves $\mu$ and $f\ge0$ is measurable, then $\int f\circ T\,d\mu=\int f\,d\mu$, including infinite values.

[F6] [[thm-integral-triangle-inequality]]: for every $f\in L^1(\mu)$, $\left|\int f\,d\mu\right|\le\int|f|\,d\mu$.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on $L^1(\mu)$.

## Proof

**Given:** The hypotheses and [F1]–[F7].

1.1 For each $K$, put $U_K=\sup_{j\ge K}|g_j-g|$. Then $U_K\downarrow0$ $\mu$-almost everywhere and $0\le U_K\le 2G$ almost everywhere, since $g\le G$ as a pointwise limit. Dominated convergence [F4] gives $\int U_K\,d\mu\to0$. [F4, given, algebra]

1.2 Since $g_i\to g$ almost everywhere and $|g_i-g|\le2G$, [F4] gives $\int|g_i-g|\,d\mu\to0$. By [F3, F5], $\int |g_i-g|\circ T^i\,d\mu=\int|g_i-g|\,d\mu$, so linearity [F7] makes the integral of the absolute triangular error $n^{-1}\sum_{i<n}\int|g_i-g|\,d\mu\to0$ by Cesaro averaging. Thus the error tends to zero in $L^1(\mu)$. [F3, F4, F5, F7, given, algebra]

2.1 Fix $K$. For $i\ge K$, $|g_i-g|\le U_K$. Hence for $n>K$, the average of $|g_i-g|\circ T^i$ is bounded by the first $K$ terms divided by $n$, plus $n^{-1}\sum_{i=K}^{n-1}U_K\circ T^i$. The first part tends to zero almost everywhere. By [F1], the second part converges almost everywhere to the Birkhoff limit $U_K^*$; by [F2], the averages converge to $U_K^*$ in $L^1(\mu)$. By [F3, F5, F7], every average has integral $\int U_K\,d\mu$. Thus [F6] and the $L^1$ convergence give $\left|\int U_K\,d\mu-\int U_K^*\,d\mu\right|\le\|A_nU_K-U_K^*\|_1\to0$. Therefore $U_K^*\in L^1(\mu)$ and $\int U_K^*\,d\mu=\int U_K\,d\mu$. [F1, F2, F3, F5, F6, F7, step 1.1]

3.1 Apply step 2.1 to every integer $K$ on the intersection of the resulting countably many full-measure sets. The limsup of the left side is at most $U_K^*$ for each $K$. Since $U_K$ decreases pointwise, the averages and their limits $U_K^*$ decrease almost everywhere. They are nonnegative and bounded by the integrable $U_1^*$; dominated convergence [F4] gives $\int\inf_KU_K^*\,d\mu=\lim_K\int U_K^*\,d\mu=\lim_K\int U_K\,d\mu=0$. Thus $\inf_KU_K^*=0$ almost everywhere, and the limsup is zero. Therefore $n^{-1}\sum_{i<n}|g_i-g|(T^i\omega)\to0$ almost everywhere. [F4, step 1.1, step 2.1, algebra]

4.1 By [F1]–[F2], the Birkhoff averages of $g$ converge almost everywhere and in $L^1(\mu)$ to their Birkhoff limit. Steps 3.1 and 1.2 show the triangular averages differ from these averages by quantities tending to zero almost everywhere and in $L^1(\mu)$, respectively. Hence both modes of convergence hold with the same limit. [F1, F2, step 3.1, step 1.2, algebra] ∎
