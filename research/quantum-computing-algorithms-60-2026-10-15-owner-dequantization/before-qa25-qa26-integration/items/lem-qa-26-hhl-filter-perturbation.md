---
id: lem-qa-26-hhl-filter-perturbation
kind: lemma
title: "Relative stability of the HHL filter on supported eigenvalues"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-26-hhl-reciprocal-filter
  - lem-qa-26-hhl-filter-geometry
  - lem-qa-13-pi-rational-bounds
  - cor-sine-and-cosine-are-one-lipschitz
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the estimate is pointwise and piecewise finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement

Suppose $1/\kappa\le|\lambda|\le1$ and $\widetilde\lambda=\lambda-\delta/t_0$. For the well/ill amplitude pair $m(z)=(f_\kappa(z),g_\kappa(z))$ from [[def-qa-26-hhl-reciprocal-filter]],
$$\|m(\widetilde\lambda)-m(\lambda)\|_2\le10\kappa\frac{|\delta|}{t_0}|f_\kappa(\lambda)|.$$

## Facts & Assumptions

**Given:** The supported eigenvalue and filter definition.

[F1] [[def-qa-26-hhl-reciprocal-filter]] and [[lem-qa-26-hhl-filter-geometry]]: $m$ is continuous, $\|m(z)\|_2\le1/2$; on the transition band its two coordinates are one half times sine and cosine with angle slope $\pi\kappa$.

[F2] [[cor-sine-and-cosine-are-one-lipschitz]]: each of sine and cosine changes by at most the change in its real argument.

[F3] [[lem-qa-13-pi-rational-bounds]]: $\pi<16/5$.

## Proof

1.1 Write $\Delta=|\widetilde\lambda-\lambda|=|\delta|/t_0$. If $\widetilde\lambda$ has the same sign as $\lambda$ and $|\widetilde\lambda|\ge1/\kappa$, both values use the reciprocal branch, and
$$\frac{\|m(\widetilde\lambda)-m(\lambda)\|_2}{|f_\kappa(\lambda)|}=\frac{\Delta}{|\widetilde\lambda|}\le\kappa\Delta.$$
If the signs differ (including zero), then $\Delta\ge|\lambda|$, and the norm difference is at most $1/2+|f_\kappa(\lambda)|$ by [F1]. Dividing by $|f_\kappa(\lambda)|=1/(2\kappa|\lambda|)$ gives at most $1+\kappa|\lambda|\le2\kappa\Delta$. [F1, algebra]

1.2 It remains that the signs agree and $|\widetilde\lambda|<1/\kappa$. If $|\lambda|\le2/\kappa$, the piecewise transition vector is $\pi\kappa/2$-Lipschitz using [F2] coordinatewise, including the constant continuation below $1/(2\kappa)$. The vector difference is at most $\pi\kappa\Delta/\sqrt2$. Also $|f_\kappa(\lambda)|\ge1/4$, so the ratio is at most $2\sqrt2\pi\kappa\Delta< (48/5)\kappa\Delta<10\kappa\Delta$, since $\sqrt2<3/2$ by squaring positive numbers and [F3]. If $|\lambda|>2/\kappa$, crossing below $1/\kappa$ implies $\Delta>|\lambda|/2$, and [F1] bounds the ratio by $1+\kappa|\lambda|<1+2\kappa\Delta<4\kappa\Delta$. These cases establish the claimed inequality. [F1, F2, F3, algebra] ∎
