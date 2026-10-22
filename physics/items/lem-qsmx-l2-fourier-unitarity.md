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
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-fourier-basis-and-parseval-on-the-n-torus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §§3 and 6.2"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Statement

Assume Countable Choice. Let $\mathbb T=\mathbb R/(2\pi\mathbb Z)$ and let $m_{\mathbb T}$ be its normalized Borel probability measure, so in the angle coordinate its integral is $\int_{\mathbb T}F\,dm_{\mathbb T}=\int_0^{2\pi}F(k)\,dk/(2\pi)$, obtained from the normalized one-dimensional torus by $k=2\pi x$. On $\mathbb C^2$ use $\langle u,v\rangle_{\mathbb C^2}=u_1\overline{v_1}+u_2\overline{v_2}$ and $\|u\|_{\mathbb C^2}^2=|u_1|^2+|u_2|^2$, linear in the first argument. Define
$$\ell^2(\mathbb Z;\mathbb C^2):=\left\{x=(x_j)_{j\in\mathbb Z}:x_j\in\mathbb C^2,\ \sum_{j\in\mathbb Z}\|x_j\|_{\mathbb C^2}^2<\infty\right\},\quad \langle x,y\rangle_{\ell^2}:=\sum_{j\in\mathbb Z}\langle x_j,y_j\rangle_{\mathbb C^2}.$$
Define $L^2(\mathbb T;\mathbb C^2)$ to be the vector space of pairs of Borel-measurable functions $f=(f_1,f_2):\mathbb T\to\mathbb C^2$ with $\int_{\mathbb T}(|f_1|^2+|f_2|^2)\,dm_{\mathbb T}<\infty$, modulo equality $m_{\mathbb T}$-almost everywhere, with inner product
$$\langle f,g\rangle_{L^2}:=\int_{\mathbb T}\bigl(f_1\overline{g_1}+f_2\overline{g_2}\bigr)\,dm_{\mathbb T}.$$
These pairings are linear in the first argument. The square-summable-family supplier gives the scalar $\ell^2$ norm and pairing used coordinatewise. The $L^2$ space is the pair of scalar $L^2$ quotient spaces with the displayed sum inner product and completeness convention. Let $c_{00}(\mathbb Z;\mathbb C^2):=\{x\in\ell^2(\mathbb Z;\mathbb C^2):\{j:x_j\ne0\}\text{ is finite}\}$. Define the linear map
$$\mathcal F_0x(k)=\sum_{j\in\mathbb Z}x_j e^{ijk},\qquad k\in\mathbb T,$$
componentwise, from $c_{00}(\mathbb Z;\mathbb C^2)$ to $L^2(\mathbb T;\mathbb C^2)$. Its values are continuous finite sums and therefore belong to this $L^2$ space. Then $\mathcal F_0$ preserves inner products on finitely supported sequences and has a unique extension to a surjective linear isometry (a unitary map) $\mathcal F:\ell^2(\mathbb Z;\mathbb C^2)\to L^2(\mathbb T;\mathbb C^2)$.

## Statement references

[[def-the-one-dimensional-torus-and-normalized-haar-integral]]

[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

## Facts & Assumptions

**Given:** Countable Choice, the normalized one-dimensional torus, and two-component square-summable sequences.

[A1] [[def-countable-choice]]: assume Countable Choice, with its exact family-of-nonempty-sets formulation.

[F1] [[def-the-one-dimensional-torus-and-normalized-haar-integral]] defines the quotient torus $\mathbb R/\mathbb Z$, its normalized Borel measure, and its integral; under $k=2\pi x$ these give $m_{\mathbb T}$ and $dk/(2\pi)$. [[def-square-summable-family-on-an-arbitrary-index-set]] defines the scalar $\ell^2$ norm and pairing used for the two coordinates, while the vector-valued space and pairing are defined locally in the Statement.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice the one-dimensional coordinate characters form an orthonormal basis of $L^2(\mathbb T)$, and the Fourier-coefficient map is a surjective linear isometry onto $\ell^2(\mathbb Z;\mathbb C)$; its inverse is the finite-subset-net Fourier series.

[F3] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]: scalar $L^2$ functions are equivalence classes modulo equality almost everywhere, their pairing is $\int f\overline g\,dm_{\mathbb T}$, and this quotient space is complete.

## Proof

1.1 For finitely supported $x,y$, expanding the finite sums and using $\int_{\mathbb T}e^{i(j-\ell)k}\,dk/(2\pi)=\delta_{j\ell}$ gives $$\langle\mathcal F_0x,\mathcal F_0y\rangle_{L^2}=\sum_{j,\ell}\langle x_j,y_\ell\rangle_{\mathbb C^2}\int_{\mathbb T}e^{i(j-\ell)k}\,\frac{dk}{2\pi}=\sum_j\langle x_j,y_j\rangle_{\mathbb C^2}=\langle x,y\rangle_{\ell^2}.$$ Thus $\mathcal F_0$ is an isometry on its finite-support domain. [given, F1, algebra]

2.1 By [F2] under the explicit Countable Choice hypothesis [A1], the scalar Fourier-coefficient map is a surjective linear isometry from the complete space $L^2(\mathbb T)$ of [F3] onto scalar $\ell^2(\mathbb Z;\mathbb C)$, with inverse given by the finite-subset-net Fourier series. This proves scalar $\ell^2$ completeness: a Cauchy sequence pulls back by that inverse to a Cauchy sequence in $L^2$, whose limit maps to its $\ell^2$ limit. Applying this to each of the two coordinates proves completeness of $\ell^2(\mathbb Z;\mathbb C^2)$ with [F1]'s norm. The inverse Fourier map applied coordinatewise is a unitary and agrees with $\mathcal F_0$ on finitely supported sequences by its finite polynomial formula. Those sequences are dense: for any $\varepsilon>0$, the finite-subset tail property in [F1] gives a finite $F\subset\mathbb Z$ with $\sum_{j\notin F}\|x_j\|^2<\varepsilon^2$; choosing $M$ with $F\subseteq[-M,M]$ makes the squared truncation error at most that tail, hence below $\varepsilon^2$. Thus $c_{00}$ is dense and the continuous extension is unique. [given, A1, F1, F2, F3, step 1.1, algebra] ∎
