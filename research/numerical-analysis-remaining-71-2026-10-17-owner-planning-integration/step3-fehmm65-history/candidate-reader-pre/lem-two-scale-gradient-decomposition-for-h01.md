---
id: lem-two-scale-gradient-decomposition-for-h01
kind: lemma
title: Two-scale structure of bounded H1-zero gradients
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - thm-two-scale-compactness-for-l2-bounded-sequences
  - lem-unit-cube-h01-separability-and-l2-compactness
  - def-periodic-two-scale-convergence
  - lem-periodic-averaging-on-cube
  - def-weak-derivative-of-a-locally-integrable-function
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-periodic-zero-mean-cell-space
  - lem-periodic-cell-poincare
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - lem-separable-hilbert-bounded-sequence-weak-subsequence
  - lem-w-one-two-is-a-hilbert-space
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
      locator: "Theorem 1.3.6 and proof, PDF pp. 14–16: two-scale limits of bounded gradients are gradient plus a periodic potential."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.3, printed pp. 18–23: gradient decomposition in periodic homogenization."
verification:
  precheck: pass
---
## Statement

Let $Q=Y=(0,1)^d$, $\epsilon_n\to0$, and $(u_n)$ be bounded in $H^1_0(Q)$. There are a subsequence, $u\in H^1_0(Q)$, and $u_1\in L^2(Q;V_\#)$ such that $u_n\rightharpoonup u$ in $H^1_0(Q)$, $u_n\to u$ in $L^2(Q)$, and
$$\nabla u_n\overset{2}{\rightharpoonup}\nabla_xu(x)+\nabla_yu_1(x,y).$$

## Facts & Assumptions

**Given:** A bounded sequence in $H^1_0(Q)$, scales $\epsilon_n\to0$, compact $L^2$ inclusion and separability on the cube, two-scale compactness, the periodic Poincare inequality, and Fourier completeness on the torus.

[F1] [[lem-unit-cube-h01-separability-and-l2-compactness]]: $H^1_0(Q)$ is separable and Hilbert and its bounded sequences have $L^2$-convergent subsequences.

[F2] [[lem-separable-hilbert-bounded-sequence-weak-subsequence]]: bounded sequences in a separable Hilbert space have weakly convergent subsequences under Countable Choice.

[F3] [[thm-two-scale-compactness-for-l2-bounded-sequences]] and [[def-periodic-two-scale-convergence]]: bounded scalar $L^2$ sequences have two-scale convergent subsequences along $\epsilon_n\to0$.

[F4] [[lem-periodic-averaging-on-cube]]: periodic $L^2$ rescalings are uniformly bounded and converge weakly to their cell means.

[F5] [[def-periodic-zero-mean-cell-space]] and [[lem-periodic-cell-poincare]]: $V_\#$ is the mean-zero periodic $H^1$ closure and its gradient has zero cell mean.

[F6] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: periodic Fourier characters form a complete orthonormal basis and Parseval holds.

[F7] [[def-weak-derivative-of-a-locally-integrable-function]]: weak derivatives satisfy integration by parts against compactly supported smooth tests.

[F8] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: iterated integrals may be interchanged for the integrable products used below.

[A1] [[def-countable-choice]]: Countable Choice is the only choice axiom used in subsequence and countable-density selections.

## Proof




1.1 By [F1]–[F2], first extract a subsequence converging weakly in $H^1_0(Q)$ to some $u\in H^1_0(Q)$, and then a further subsequence converging strongly in $L^2(Q)$ to the same $u$. By [F3], extract successive further subsequences on which each of the $d$ components of $\nabla u_n$ two-scale converges; since there are finitely many components, one subsequence works for all. Write its vector limit as $G(x,y)$. [F1, F2, F3, A1, algebra]

2.1 For every allowed product test $\phi(x)\psi(y)$, strong $L^2$ convergence and the uniform sampled-test bound in [F4] show that replacing $u_n$ by $u$ in its pairing changes the limit by zero. Weak $L^2$ averaging in [F4], applied to $\psi(x/\epsilon_n)$ against $u\phi\in L^2(Q)$, then gives limit $\int_Q u\phi\int_Y\psi$. Thus the two-scale limit of $u_n$ is the $y$-independent function $u(x)$. [F4, F3, step 1.1, algebra]

2.2 For a smooth compactly supported $\phi(x)$ and constant vector $c$, test gradient convergence with $\phi c$. Ordinary weak $H^1$ convergence gives $\int_{Q\times Y}G\cdot\phi c=\int_Q\nabla u\cdot\phi c$. Hence $H:=G-\nabla_xu$ has zero $y$-mean for almost every $x$. [F2, F3, step 1.1, algebra]

3.1 Let $\Phi(x,y)=\sum_r\phi_r(x)\Psi_r(y)$ be a smooth periodic vector field, compactly supported in $x$, with $\operatorname{div}_y\Phi=0$. The weak-derivative identity [F7], applied for each fixed $y$, and Tonelli [F8] give $\int_{Q\times Y}G\cdot\Phi=-\int_{Q\times Y}u\,\operatorname{div}_x\Phi=\int_{Q\times Y}\nabla_xu\cdot\Phi,$ because the two-scale limit of $u_n$ is $u(x)$ by step 2.1 and the $x$-derivative of each test is still an allowed test. Therefore $H$ is orthogonal to every such divergence-free field. [F7, F8, step 2.1, F3, step 2.2, algebra]

4.1 For every nonzero $k\in\mathbb Z^d$ and every real $c\perp k$, use slow tests $\phi(x)c\cos(2\pi k\cdot y)$ and $\phi(x)c\sin(2\pi k\cdot y)$ in step 3.1. They are divergence-free in $y$. Since the resulting integrals vanish for every $\phi\in C_c^\infty(Q)$, the Fourier coefficient $\widehat H(x,k)$ is parallel to $k$ for almost every $x$. There are countably many $k$ and a finite basis of each $k^\perp$, so [A1] permits one null set outside which this holds for all $k$; the zero coefficient is zero by step 2.2. [step 3.1, A1, step 2.2, F6, algebra]

5.1 For $k\ne0$ define $\widehat u_1(x,k)=(\widehat H(x,k)\cdot k)/(2\pi i|k|^2)$ and set $\widehat u_1(x,0)=0$. The parallel property from step 4.1 gives $2\pi i k\widehat u_1(x,k)=\widehat H(x,k)$. Moreover $|\widehat u_1(x,k)|\le |\widehat H(x,k)|/(2\pi|k|)$, so Parseval [F6] implies $\int_Q\sum_k(1+|k|^2)|\widehat u_1(x,k)|^2dx\le C_d\|H\|_{L^2(Q\times Y)}^2.$ The partial Fourier sums therefore converge in $L^2(Q;H^1_\#(Y))$; conjugate symmetry makes their limit real, its mean is zero, and its $y$-gradient is $H$. This supplies the claimed $u_1$ and proves the decomposition. [step 4.1, F6, F5, A1, algebra] ∎
