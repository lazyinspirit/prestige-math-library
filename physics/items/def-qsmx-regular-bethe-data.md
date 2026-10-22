---
id: def-qsmx-regular-bethe-data
kind: definition
title: Regular on-shell Bethe data without a completeness assumption
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-rational-monodromy
dependency_roles:
  def-qsmx-rational-monodromy: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 4, PDF pp. 10–14, equations (66)–(97): exchange relations, reference vector, regular Bethe vectors and Bethe equations."
    - title: "Classical and Quantum Integrable Systems, Lecture 15: The algebraic Bethe ansatz"
      url: "https://vu-ff.github.io/integrability/en/lectures/15/"
      locator: "Sections 15.3–15.5, equations (15.2)–(15.17): monodromy entries, exchange relations, and Bethe data."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

For the ordered monodromy on $V_N$ with $V=\mathbb C^2$, define the shifted
site operator $L_{aj}(u):=R_{aj}(u-i/2)$, shifted monodromy
$T_a^L(u):=L_{aN}(u)\cdots L_{a1}(u)$, and shifted transfer matrix
$\tau(u):=\operatorname{tr}_aT_a^L(u)$. In the ordered auxiliary basis
$e_\uparrow,e_\downarrow$, write
$$T_a^L(u)=\begin{pmatrix}A(u)&B(u)\\C(u)&D(u)\end{pmatrix}_a, \qquad \Omega:=e_\uparrow^{\otimes N}.$$
For an integer $M$ with $0\le M\le N$, a **regular on-shell Bethe datum** is
a tuple of finite complex numbers $\lambda_1,\ldots,\lambda_M$ satisfying all
of the following conditions:

1. The roots are pairwise distinct, none equals $i/2$ or $-i/2$, and no
   difference $\lambda_j-\lambda_k$ for $j\ne k$ equals $i$ or $-i$.
2. For each $j=1,\ldots,M$,
   $$\left(\frac{\lambda_j+i/2}{\lambda_j-i/2}\right)^N =\prod_{k\ne j}\frac{\lambda_j-\lambda_k+i}{\lambda_j-\lambda_k-i}.$$
3. The associated vector
   $$\Psi(\lambda_1,\ldots,\lambda_M):= B(\lambda_1)\cdots B(\lambda_M)\Omega$$
   is nonzero.

For $M=0$ the root tuple and products are empty and $\Psi=\Omega$. This
definition records regular solutions and nonzero vectors only; it makes no
claim of completeness, covers no singular-root regularization, and does not
include descendants generated from other reference vectors.

## Definition references

[[def-qsmx-rational-monodromy]]

[Faddeev, §4, equations (66)–(97)](https://arxiv.org/pdf/hep-th/9605187)

[Classical and Quantum Integrable Systems, Lecture 15, §§15.3–15.5](https://vu-ff.github.io/integrability/en/lectures/15/)
