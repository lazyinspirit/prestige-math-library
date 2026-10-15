---
id: lem-qft-hermite-oscillator-research-supplier
kind: lemma
domain: mathematics
title: Anisotropic Hermite oscillator and quadratic form basis
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-qft-coercive-polynomial-form-domain, thm-nrqm-oscillator-multidimensional-oscillator-completeness, thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-hilbert-space-fourier-expansion, thm-cauchy-schwarz-in-an-inner-product-space, def-countable-choice]
dependency_roles:
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §8.3, pp.212–214"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§8.3, printed pp.212–214: Hermite functions, ladder operators and the oscillator eigenbasis."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 3, pp.21–24"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 3, printed pp.21–24: the one-dimensional Hermite oscillator and its eigenfunctions."
    - title: "Richard Melrose, MIT 18.102 Lecture 23, printed pp.133–135"
      url: "https://www.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2009/5fc9f8fe6fc4fec37683a39268c7b6b0_MIT18_102s09_lec23.pdf"
      locator: "Printed pp.133–135: ladder construction, eigenvalues and orthogonality; the lecture does not complete the Hermite completeness proof."
---

## Statement

Assume Countable Choice. Let $N\ge1$, $a_1,\ldots,a_N>0$ and $c>0$. Let
$Q_{\mathrm{osc}}$ be the completion of $C_c^\infty(\mathbb R^N;\mathbb C)$
for the form inner product
$$a_{\mathrm{osc}}(u,v):=\sum_{j=1}^N a_j\int (\partial_j u)\overline{\partial_jv}
+\int (c|q|^2+2)u\overline v.$$
This is the space $Q$ of
[[lem-qft-coercive-polynomial-form-domain]] for $V(q)=c|q|^2$ and $C_0=0.
For $\mathbf n=(n_1,\ldots,n_N)\in\mathbb N_0^N$, there is a smooth product
Hermite function $\psi_{\mathbf n}$ such that
$$\langle\psi_{\mathbf n},\psi_{\mathbf m}\rangle_{L^2}=\delta_{\mathbf n\mathbf m},\qquad
\overline{\operatorname{span}}\{\psi_{\mathbf n}\}=L^2(\mathbb R^N),$$
and
$$\left(-\sum_{j=1}^Na_j\partial_j^2+c|q|^2\right)\psi_{\mathbf n}
=\epsilon_{\mathbf n}\psi_{\mathbf n},\qquad
\epsilon_{\mathbf n}:=\sum_{j=1}^N(2n_j+1)\sqrt{a_jc}.$$
For the ground multi-index $\mathbf0$, the smooth representative is
$$\psi_{\mathbf0}(q)=\prod_{j=1}^N(b_j/\pi)^{1/4}e^{-b_jq_j^2/2},
\qquad b_j:=\sqrt{c/a_j}.$$
Each $\psi_{\mathbf n}$ belongs to $Q_{\mathrm{osc}}$, and every $u\in
Q_{\mathrm{osc}}$ satisfies the exact form expansion
$$\sum_{j=1}^N a_j\|\partial_j u\|_2^2+
c\||q|u\|_2^2
=\sum_{\mathbf n\in\mathbb N_0^N}\epsilon_{\mathbf n}
|\langle u,\psi_{\mathbf n}\rangle|^2.$$
All parameters are positive real mathematical parameters; this lemma makes no
physical identification.

## Facts & Assumptions

**Given:** Countable Choice, $N\ge1$, $a_j,c>0$, Lebesgue measure on
$\mathbb R^N$, and the specified form completion $Q_{\mathrm{osc}}$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; the imported basis and Hilbert expansions are used under this hypothesis.

[F1] [[lem-qft-coercive-polynomial-form-domain]]: the completion for $a_{\mathrm{osc}}$ is a Hilbert space, injects continuously into $L^2$, and its completed norm records the weak derivatives and weighted function.

[F2] [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]]: for $\hbar,m_j,\omega_j>0$, the product Hermite functions form a complete orthonormal basis of $L^2(\mathbb R^N)$, and on each product function the differential expression $-\hbar^2\partial_j^2/(2m_j)+m_j\omega_j^2q_j^2/2$ has eigenvalue $\hbar\omega_j(n_j+1/2)$; [[thm-nrqm-oscillator-hermite-recurrence]]: $g_0(y)=\pi^{-1/4}e^{-y^2/2}$; [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]: the scaling map is $Df(x)=\ell^{-1/2}f(x/\ell)$ with $\ell=\sqrt{\hbar/(m\omega)}$.

[F3] [[thm-hilbert-space-fourier-expansion]]: a complete orthonormal family in a Hilbert space has norm-convergent expansion and Parseval's identity; this applies to $Q_{\mathrm{osc}}$ once completeness there is proved.

## Proof

**Proof technique:** direct.

**Given:** the oscillator form, its completion, and positive coefficients $a_j,c$.

1.1 In [F2] choose $\hbar=1$, $m_j=(2a_j)^{-1}$ and $\omega_j=2\sqrt{a_jc}$. Then $\hbar^2/(2m_j)=a_j$ and $m_j\omega_j^2/2=c$. The eigenvalue from [F2] in coordinate $j$ is $\omega_j(n_j+1/2)=(2n_j+1)\sqrt{a_jc}$. Summing over the $N$ coordinates gives the displayed differential eigenvalue $\epsilon_{\mathbf n}$. In the same scaling, $b_j=m_j\omega_j=\sqrt{c/a_j}$ and the normalized $n_j=0$ Gaussian becomes $(b_j/\pi)^{1/4}e^{-b_jq_j^2/2}$; taking the product gives the stated ground representative. [A1, F2, algebra]

1.2 Each product Hermite function is a polynomial times a Gaussian, so it and all first derivatives have finite squared integrals after multiplication by any fixed polynomial. Choose a smooth radial cutoff $\chi_R(q)=\chi(q/R)$ with $\chi=1$ on $|q|\le1$, $\chi=0$ on $|q|\ge2$, and $|\nabla\chi_R|\le C/R$. Such a $\chi$ can be formed from $\eta(s)=e^{-1/s}$ for $s>0$ and $\eta(s)=0$ for $s\le0$, by taking $\chi(q)=\eta(4-|q|^2)/(\eta(4-|q|^2)+\eta(|q|^2-1))$. Then $0\le\chi_R\le1$ and $\chi_R\psi_{\mathbf n}\in C_c^\infty$. The weighted-function error is supported on $|q|>R$ and bounded in squared integral by the integrable tail $(c|q|^2+2)|\psi_{\mathbf n}|^2$, so its $L^2$ norm tends to zero. For each derivative,
$$\partial_j((1-\chi_R)\psi_{\mathbf n})=(1-\chi_R)\partial_j\psi_{\mathbf n}-(\partial_j\chi_R)\psi_{\mathbf n};$$
the first term tends to zero by its Gaussian tail and the second has norm at most $C\|\psi_{\mathbf n}\|_2/R$. Thus $\chi_R\psi_{\mathbf n}$ converges in the form norm, proving $\psi_{\mathbf n}\in Q_{\mathrm{osc}}$. [F1, algebra]

2.1 For $v\in C_c^\infty$, integration by parts and the eigenvalue identity in step 1.1 give
$$a_{\mathrm{osc}}(\psi_{\mathbf n},v)=(\epsilon_{\mathbf n}+2)
\langle\psi_{\mathbf n},v\rangle.$$
The left side is continuous in the form norm of $v$ by Cauchy--Schwarz [F4] in $Q_{\mathrm{osc}}$, and the right side is continuous since $\|v\|_2\le\|v\|_{Q_{\mathrm{osc}}}$. Density of $C_c^\infty$ in its defining completion extends the identity to every $v\in Q_{\mathrm{osc}}$. Taking $v=\psi_{\mathbf m}$ proves that $\xi_{\mathbf n}:=(\epsilon_{\mathbf n}+2)^{-1/2}\psi_{\mathbf n}$ is orthonormal in $Q_{\mathrm{osc}}$. If $u\in Q_{\mathrm{osc}}$ is orthogonal in this form inner product to every $\xi_{\mathbf n}$, conjugating the displayed identity gives $\langle u,\psi_{\mathbf n}\rangle=0$ for every $\mathbf n$. Completeness in $L^2$ from [F2] makes the image of $u$ zero, and the injective inclusion in [F1] makes $u=0$ in $Q_{\mathrm{osc}}$. Thus $(\xi_{\mathbf n})$ is complete there. [F1, F2, F4, step 1.1, algebra]

2.2 Parseval in $Q_{\mathrm{osc}}$ with the complete orthonormal family $(\xi_{\mathbf n})$ gives
$$a_{\mathrm{osc}}(u,u)=\sum_{\mathbf n}(\epsilon_{\mathbf n}+2)
|\langle u,\psi_{\mathbf n}\rangle|^2.$$
Parseval in $L^2$ gives $\|u\|_2^2=\sum_{\mathbf n}|\langle u,\psi_{\mathbf n}\rangle|^2$. Subtracting $2\|u\|_2^2$ from the first identity yields the asserted expansion of the unshifted oscillator form. [F2, F3, step 2.1, algebra] ∎
