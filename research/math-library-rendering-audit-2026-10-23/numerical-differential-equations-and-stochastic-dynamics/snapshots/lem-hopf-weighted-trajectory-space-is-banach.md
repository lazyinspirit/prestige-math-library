---
id: lem-hopf-weighted-trajectory-space-is-banach
kind: lemma
title: The weighted trajectory space is complete
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-hopf-weighted-trajectory-space
  - thm-euclidean-space-complete
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Section 2, printed pp. 27–44, complete center-manifold proof
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 151–159
verification:
  precheck: pass
---

## Statement

If $E$ is finite-dimensional and complete, then $(\mathcal C_\eta(E),\|\cdot\|_\eta)$ is a Banach space for every $\eta>0$. No choice principle is used.

## Facts & Assumptions

**Given:** A finite-dimensional complete normed space $E$, $\eta>0$, and the space $\mathcal C_\eta(E)$ of [[def-hopf-weighted-trajectory-space]].

[F1] [[def-hopf-weighted-trajectory-space]]: $\|u\|_\eta=\sup_{t\in\mathbb R}e^{-\eta|t|}\|u(t)\|$.

[F2] [[thm-euclidean-space-complete]] proves completeness of $\mathbb R$ and of Euclidean $\mathbb R^n$ for $n\ge1$. In the present lemma, completeness of $E$ in its specified norm is a hypothesis, including when $E=\{0\}$.

## Proof

**Given:** $E$, $\eta$, and $\mathcal C_\eta(E)$ as above.

1.1 Define $J_\eta u(t):=e^{-\eta|t|}u(t)$. This is a linear isometry from $\mathcal C_\eta(E)$ onto $C_b(\mathbb R,E)$ with the supremum norm: its inverse sends $g$ to $u(t)=e^{\eta|t|}g(t)$, and both maps preserve continuity and the displayed norms. [F1, construct, algebra]

1.2 Let $(g_n)$ be Cauchy in $C_b(\mathbb R,E)$. For each $t$, $(g_n(t))$ is Cauchy in $E$, so define $g(t)$ to be its unique limit. Given $\varepsilon>0$, choose $N$ such that $\sup_t\|g_n(t)-g_m(t)\|<\varepsilon/3$ for $n,m\ge N$; letting $m$ tend to infinity pointwise gives $\sup_t\|g_n(t)-g(t)\|\le\varepsilon/3$ for $n\ge N$. Thus $g_n\to g$ uniformly, which makes $g$ continuous, and the same bound with one fixed $n\ge N$ shows $g$ is bounded. Pointwise uniqueness defines $g$ without choice. [F2, given, choose]

2.1 Therefore $C_b(\mathbb R,E)$ is complete, and the isometry in step 1.1 transfers completeness to $\mathcal C_\eta(E)$. [step 1.1, step 1.2] ∎

## Remarks

This result supplies only completeness of the trajectory space. The contraction used to construct the center manifold is verified separately in [[lem-local-center-manifold-for-a-simple-hopf-point]].
