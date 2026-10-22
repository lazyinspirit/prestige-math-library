---
id: lem-qftx-hermite-coefficient-decay
kind: lemma
domain: mathematics
library: mathematics
title: Rapid Hermite coefficient decay for Schwartz functions
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-countable-choice
  - lem-qft-hermite-oscillator-research-supplier
  - thm-hilbert-space-fourier-expansion
  - thm-nrqm-oscillator-hermite-recurrence
  - thm-nrqm-oscillator-multidimensional-oscillator-completeness
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qft-hermite-oscillator-research-supplier: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §8.3"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§8.3, printed pp.212–214: Hermite polynomials, Gaussian oscillator eigenfunctions and the product basis."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations, Chapter 3"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 3, printed pp.21–24: the one-dimensional Hermite oscillator and its eigenfunctions."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $\mathcal S(\mathbb R^2;\mathbb C)$ be the space of smooth complex-valued functions $f$ for which $\sup_{x\in\mathbb R^2}|x^\alpha\partial^\beta f(x)|<\infty$ for every pair of multi-indices $\alpha,\beta\in\mathbb N_0^2$. Give this space the locally convex topology with basic neighborhoods $\{f:p_{\alpha_j\beta_j}(f-f_0)<\varepsilon_j,\ 1\le j\le k\}$, where $k<\infty$, $\varepsilon_j>0$, and $p_{\alpha\beta}(u)=\sup_x|x^\alpha\partial^\beta u(x)|$. Let $(h_\alpha)_{\alpha\in\mathbb N_0^2}$ be the product Hermite basis of $L^2(\mathbb R^2)$ obtained from the multidimensional oscillator at $\hbar=1$, $m_1=m_2=1/2$, and $\omega_1=\omega_2=2$, and write $|\alpha|=\alpha_1+\alpha_2$. For $H=-\partial_{x_1}^2-\partial_{x_2}^2+|x|^2$ on $\mathcal S(\mathbb R^2;\mathbb C)$, every integer $r\ge0$ and every $f\in\mathcal S(\mathbb R^2;\mathbb C)$ satisfy

$$\sum_{\alpha\in\mathbb N_0^2}(1+|\alpha|)^{2r}|\langle f,h_\alpha\rangle_{L^2}|^2\le\|H^r f\|_{L^2}^2<\infty.$$

Consequently the map $f\mapsto(\langle f,h_\alpha\rangle)_\alpha$ is continuous from Schwartz space to each weighted square-summable sequence space with norm $\bigl(\sum_\alpha(1+|\alpha|)^{2r}|c_\alpha|^2\bigr)^{1/2}$.

## Statement references

[Teschl, *Mathematical Methods in Quantum Mechanics*, §8.3](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf)

[Laugesen, *Spectral Theory of Partial Differential Equations*, Chapter 3](https://arxiv.org/pdf/1203.2344v1)

## Facts & Assumptions

**Given:** Countable Choice, the two-dimensional Schwartz space, the common product Hermite basis in the Statement, and the differential operator $H$ acting on Schwartz functions.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function.

[F1] [[lem-qft-hermite-oscillator-research-supplier]]: at $N=2$ and $a_1=a_2=c=1$, the product Hermite functions form a complete orthonormal basis and have oscillator eigenvalues $2|\alpha|+2$.

[F2] [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]]: at $d=2$, $\hbar=1$, $m_j=1/2$, and $\omega_j=2$, the unscaled product basis is $h_\alpha=g_{\alpha_1}(x_1)g_{\alpha_2}(x_2)$, with eigenvalue $2|\alpha|+2$.

[F3] [[thm-nrqm-oscillator-hermite-recurrence]]: $g_n=H_n g_0/\sqrt{2^n n!}$, where $H_n$ is a degree-$n$ polynomial and $g_0(y)=\pi^{-1/4}e^{-y^2/2}$.

[F4] [[thm-hilbert-space-fourier-expansion]]: a complete orthonormal family in a Hilbert space gives the norm-convergent coefficient expansion and Parseval's identity.

## Proof

**Proof technique:** direct.

**Given:** [A1], [F1]–[F3], $f\in\mathcal S(\mathbb R^2;\mathbb C)$, and an integer $r\ge0$.

1.1 With these parameters, $\hbar^2/(2m_j)=1$, $m_j\omega_j^2/2=1$, and $\ell_j=\sqrt{\hbar/(m_j\omega_j)}=1$. The parameter substitution in the inspected proof of [F1] uses precisely this scaling; [F2] specifies the resulting unscaled product basis $h_\alpha=g_{\alpha_1}(x_1)g_{\alpha_2}(x_2)$ and its eigenvalue $\lambda_\alpha=\sum_{j=1}^2(2\alpha_j+1)=2|\alpha|+2$. [A1, F1, F2, algebra]

2.1 By [F3] each Hermite factor is a polynomial times $e^{-x_j^2/2}$, so $h_\alpha$ and all its derivatives decay rapidly enough for integration by parts against any Schwartz function. The operator $H^r$ is a finite sum of polynomial-coefficient derivatives and maps Schwartz space continuously to itself, hence $H^r f\in L^2$. Repeated integration by parts in $x_1$ and $x_2$ has no boundary terms; it gives $\langle H^r f,h_\alpha\rangle=\langle f,H^r h_\alpha\rangle=\lambda_\alpha^r\langle f,h_\alpha\rangle$. [F3, step 1.1, algebra]

3.1 Parseval for the complete orthonormal basis [F1]–[F2] is supplied by [F4] and gives $\|H^r f\|_2^2=\sum_\alpha|\langle H^r f,h_\alpha\rangle|^2=\sum_\alpha(2|\alpha|+2)^{2r}|\langle f,h_\alpha\rangle|^2$. Since $1+|\alpha|\le2|\alpha|+2$, the asserted weighted bound follows. [F1, F2, F4, step 2.1, algebra]

4.1 Each $H^r$ is a finite differential expression with polynomial coefficients, so its Schwartz seminorms bound the pointwise polynomially weighted derivatives in that expression. In two dimensions, $\|u\|_2\le C\sup_x(1+|x|)^2|u(x)|$ because $(1+|x|)^{-4}$ is integrable. Thus $f\mapsto\|H^r f\|_2$ is a continuous seminorm on Schwartz space, and the weighted coefficient map is continuous. [step 3.1, algebra] ∎

