---
id: lem-periodic-flux-corrector
kind: lemma
title: Antisymmetric periodic flux potential
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-periodic-scalar-diffusion-data
  - def-periodic-cell-correctors-and-effective-tensor
  - lem-periodic-cell-corrector-wellposedness
  - thm-periodic-effective-tensor-symmetric-elliptic
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.3.1, PDF pp. 15–16: periodic flux potentials in corrector estimates."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 2 §§2.1–2.2, printed pp. 35–45: flux correctors and antisymmetric potentials."
verification:
  precheck: n/a
---
## Statement

For each column $j$, define the mean-zero periodic flux $q^j(y)=a(y)(e_j+\nabla\chi_j(y))-A^*e_j$. There is a mean-zero periodic tensor $\sigma^j\in H^1_\#(Y;\mathbb R^{d\times d})$ such that $\sigma^j_{ik}=-\sigma^j_{ki}$ and
$$q_i^j=\sum_{k=1}^d\partial_{y_k}\sigma^j_{ik}\quad\text{in distributions on the torus},\qquad \|\sigma^j\|_{H^1(Y)}\le C_d\|q^j\|_{L^2(Y)}.$$

## Facts & Assumptions

**Given:** The periodic cell corrector and effective tensor, the cell equation, mean-zero gradient property, divergence-free corrector flux, and Fourier basis/Parseval on the torus.

[F1] [[def-periodic-cell-correctors-and-effective-tensor]] and [[lem-periodic-cell-corrector-wellposedness]]: $q^j=a(e_j+\nabla\chi_j)-A^*e_j$ is in $L^2(Y)$ and has zero mean.

[F2] [[lem-periodic-cell-corrector-wellposedness]]: $\int_Ya(e_j+\nabla\chi_j)\cdot\nabla v=0$ for every periodic mean-zero $v$; by subtracting constants it holds for every smooth periodic $v$.

[F3] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: Fourier characters are complete and Parseval identifies $L^2$ norms with coefficient sums.

[A1] [[def-countable-choice]]: the Fourier coefficient families use the stated $L^2$ representatives; no stronger choice axiom is needed.

## Proof




1.1 For each smooth periodic scalar $v$, [F2] gives $\int_Ya(e_j+\nabla\chi_j)\cdot\nabla v=0$, so $\operatorname{div}_y q^j=0$ distributionally. Its mean is zero by the definition of $A^*$ in [F1]. Thus for every nonzero Fourier mode $m\in\mathbb Z^d$, $m\cdot\widehat q^j(m)=0$, and $\widehat q^j(0)=0$. [F2, F1, F3, A1, algebra]

2.1 For $m\ne0$ define $\widehat\sigma^j_{ik}(m)=\frac{m_k\widehat q_i^j(m)-m_i\widehat q_k^j(m)}{2\pi i|m|^2},\qquad \widehat\sigma^j_{ik}(0)=0.$ Then $\widehat\sigma^j_{ik}=-\widehat\sigma^j_{ki}$ and $\sum_k2\pi im_k\widehat\sigma^j_{ik}(m)=\widehat q_i^j(m)-\frac{m_i}{|m|^2}\sum_km_k\widehat q_k^j(m)=\widehat q_i^j(m)$ by step 1.1. Also $|\widehat\sigma^j(m)|\le C_d|m|^{-1}|\widehat q^j(m)|$, so $\sum_m(1+|m|^2)|\widehat\sigma^j(m)|^2\le C_d\sum_m|\widehat q^j(m)|^2$. Parseval [F3] gives an $H^1$ periodic tensor with the asserted norm bound and divergence; conjugate symmetry of the coefficients makes it real. [step 1.1, F3, A1, algebra] ∎
