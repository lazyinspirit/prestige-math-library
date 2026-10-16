---
id: lem-qa-26-hhl-filter-perturbation
kind: lemma
title: "Relative stability of the HHL filter on supported eigenvalues"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-26-hhl-reciprocal-filter
  - lem-qa-26-hhl-filter-geometry
  - lem-qa-13-pi-rational-bounds
  - cor-sine-and-cosine-are-one-lipschitz
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the estimate is pointwise and piecewise finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

Let $\kappa\ge1$, $t_0>0$, and $\lambda,\delta\in\mathbb R$ with $1/\kappa\le|\lambda|\le1$. Set $\widetilde\lambda=\lambda-\delta/t_0$. For the well/ill amplitude pair $m(z)=(f_\kappa(z),g_\kappa(z))$ from [[def-qa-26-hhl-reciprocal-filter]],
$$\|m(\widetilde\lambda)-m(\lambda)\|_2\le10\kappa\frac{|\delta|}{t_0}|f_\kappa(\lambda)|.$$

## Facts & Assumptions

**Given:** The supported eigenvalue and filter definition.

[F1] [[def-qa-26-hhl-reciprocal-filter]] and [[lem-qa-26-hhl-filter-geometry]]: $\|m(z)\|_2\le1/2$; on the transition band its coordinates are one half times sine and cosine with angle slope $\pi\kappa$.

[F2] [[cor-sine-and-cosine-are-one-lipschitz]]: each of sine and cosine changes by at most the change in its real argument.

[F3] [[lem-qa-13-pi-rational-bounds]]: $3<\pi<16/5$.

[F4] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$.

[F5] [[thm-sine-and-cosine-derivatives]]: $\sin0=0$ and $\cos0=1$.

## Proof


1.1 At $u=1/(2\kappa)$ the transition angle is $0$, so [F5] makes the transition values $(0,1/2)$, matching the lower plateau; at $u=1/\kappa$ the angle is $\pi/2$, so [F4] makes them $(\operatorname{sgn}(z)/2,0)$, matching the reciprocal branch. Hence $m$ is continuous on each fixed-sign half-line. On the reciprocal branch, for $u,u'\ge1/\kappa$, $$\left|\frac1{2\kappa u}-\frac1{2\kappa u'}\right|=\frac{|u-u'|}{2\kappa uu'}\le\frac\kappa2|u-u'|.$$ On the transition branch, [F2] bounds each coordinate change by $(\pi\kappa/2)|u-u'|$, so the two-coordinate norm changes by at most $(\pi\kappa/\sqrt2)|u-u'|$. The lower plateau is constant, and $\kappa/2\le\pi\kappa/\sqrt2$ by [F3]. Splitting any same-sign interval at the two breakpoints and adding these bounds proves the global same-sign Lipschitz estimate $\|m(z)-m(z')\|_2\le(\pi\kappa/\sqrt2)|z-z'|$. [F1, F2, F3, F4, F5, algebra]

2.1 Write $\Delta=|\widetilde\lambda-\lambda|=|\delta|/t_0$. If $\widetilde\lambda$ has the same sign as $\lambda$ and $|\widetilde\lambda|\ge1/\kappa$, both values use the reciprocal branch, and $$\frac{\|m(\widetilde\lambda)-m(\lambda)\|_2}{|f_\kappa(\lambda)|}=\frac{\Delta}{|\widetilde\lambda|}\le\kappa\Delta.$$ If the signs differ (including zero), then $\Delta\ge|\lambda|$, and the norm difference is at most $1/2+|f_\kappa(\lambda)|$ by [F1]. Dividing by $|f_\kappa(\lambda)|=1/(2\kappa|\lambda|)$ gives at most $1+\kappa|\lambda|\le2\kappa\Delta$. [F1, step 1.1, algebra]

3.1 It remains that the signs agree and $|\widetilde\lambda|<1/\kappa$. If $|\lambda|\le2/\kappa$, step 1.1 gives a norm difference at most $\pi\kappa\Delta/\sqrt2$. Since $|f_\kappa(\lambda)|=1/(2\kappa|\lambda|)\ge1/4$, the ratio is at most $2\sqrt2\pi\kappa\Delta<(48/5)\kappa\Delta<10\kappa\Delta$, using $\sqrt2<3/2$ and [F3]. If $|\lambda|>2/\kappa$, crossing below $1/\kappa$ implies $\Delta>|\lambda|/2$ and $\kappa\Delta>1$. By [F1] the ratio is at most $1+\kappa|\lambda|<1+2\kappa\Delta<3\kappa\Delta<10\kappa\Delta$. These cases establish the claimed inequality. [F1, F2, F3, step 1.1, algebra] ∎

