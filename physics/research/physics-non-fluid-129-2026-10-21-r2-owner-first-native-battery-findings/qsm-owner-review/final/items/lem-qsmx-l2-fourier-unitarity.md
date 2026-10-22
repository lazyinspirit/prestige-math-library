---
id: lem-qsmx-l2-fourier-unitarity
kind: lemma
title: Unitary Fourier transform for a two-component lattice sequence
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - thm-fourier-basis-and-parseval-on-the-n-torus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §§3 and 6.2"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Statement

Assume Countable Choice. Let $\mathbb T=\mathbb R/(2\pi\mathbb Z)$ with normalized measure $dk/(2\pi)$, and let $\ell^2(\mathbb Z;\mathbb C^2)$ have inner product $\langle x,y\rangle=\sum_{j\in\mathbb Z}\langle x_j,y_j\rangle_{\mathbb C^2}$, linear in the first argument. For a finitely supported sequence $x=(x_j)_{j\in\mathbb Z}$ define
$$\mathcal F_0x(k)=\sum_{j\in\mathbb Z}x_j e^{ijk},\qquad k\in\mathbb T,$$
componentwise. Then $\mathcal F_0$ preserves inner products on finitely supported sequences and has a unique extension to a unitary $\mathcal F:\ell^2(\mathbb Z;\mathbb C^2)\to L^2(\mathbb T;\mathbb C^2)$.

## Facts & Assumptions

**Given:** Countable Choice, the normalized one-dimensional torus, and two-component square-summable sequences.

[A1] [[def-countable-choice]]: assume Countable Choice, with its exact family-of-nonempty-sets formulation.

[F1] [[def-the-one-dimensional-torus-and-normalized-haar-integral]] and [[def-square-summable-family-on-an-arbitrary-index-set]]: after $k=2\pi x$, the normalized torus measure is $dk/(2\pi)$; $\ell^2(\mathbb Z;\mathbb C^2)$ has the displayed square-sum norm and inner product.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice the one-dimensional coordinate characters form an orthonormal basis of $L^2(\mathbb T)$, and the Fourier-coefficient map is a surjective linear isometry onto $\ell^2(\mathbb Z;\mathbb C)$; its inverse is the finite-subset-net Fourier series.

## Proof

1.1 For finitely supported $x,y$, expanding the finite sums and using $\int_{\mathbb T}e^{i(j-\ell)k}\,dk/(2\pi)=\delta_{j\ell}$ gives $$\langle\mathcal F_0x,\mathcal F_0y\rangle_{L^2}=\sum_{j,\ell}\langle x_j,y_\ell\rangle_{\mathbb C^2}\int_{\mathbb T}e^{i(j-\ell)k}\,\frac{dk}{2\pi}=\sum_j\langle x_j,y_j\rangle_{\mathbb C^2}=\langle x,y\rangle_{\ell^2}.$$ Thus $\mathcal F_0$ is an isometry on its finite-support domain. [given, F1, algebra]

2.1 By [F2] under the explicit Countable Choice hypothesis [A1], the scalar Fourier-coefficient map is a surjective linear isometry from the complete space $L^2(\mathbb T)$ onto scalar $\ell^2(\mathbb Z;\mathbb C)$, with inverse given by the finite-subset-net Fourier series. This proves scalar $\ell^2$ completeness: a Cauchy sequence pulls back by that inverse to a Cauchy sequence in $L^2$, whose limit maps to its $\ell^2$ limit. Applying this to each of the two coordinates proves completeness of $\ell^2(\mathbb Z;\mathbb C^2)$ with [F1]'s norm. The inverse Fourier map applied coordinatewise is a unitary and agrees with $\mathcal F_0$ on finitely supported sequences by its finite polynomial formula. Those sequences are dense: for any $\varepsilon>0$, the finite-subset tail property in [F1] gives a finite $F\subset\mathbb Z$ with $\sum_{j\notin F}\|x_j\|^2<\varepsilon^2$; choosing $M$ with $F\subseteq[-M,M]$ makes the squared truncation error at most that tail, hence below $\varepsilon^2$. Thus $c_{00}$ is dense and the continuous extension is unique. [given, A1, F1, F2, step 1.1, algebra] ∎
