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
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-chain-rule-for-differentials-of-smooth-maps
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
      locator: "§1.3.2, Theorem 1.3.6 and its proof, PDF p. 17: divergence-free tests identify the gradient plus periodic-potential decomposition."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.3, printed pp. 15–18: related qualitative homogenization by compensated compactness; the two-scale gradient decomposition is proved locally here."
verification:
  precheck: pass
---
## Statement

Let $Q=Y=(0,1)^d$, $\epsilon_n\to0$, and $(u_n)$ be bounded in $H^1_0(Q)$. There are a subsequence, $u\in H^1_0(Q)$, and $u_1\in L^2(Q;V_\#)$ such that $u_n\rightharpoonup u$ in $H^1_0(Q)$, $u_n\to u$ in $L^2(Q)$, and
$$\nabla u_n\overset{2}{\rightharpoonup}\nabla_xu(x)+\nabla_yu_1(x,y).$$
Here vector-valued two-scale convergence means componentwise convergence as in [[def-periodic-two-scale-convergence]], and $L^2(Q;V_\#)$ denotes product-measurable functions whose $y$-slices lie in $V_\#$ almost everywhere and whose squared $H^1(Y)$ slice norms are integrable over $Q$.

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

[F9] [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]: $C_c^\infty(Q)$ is dense in $L^2(Q)$, so an $L^2$ function pairing to zero with every such test is zero almost everywhere.

[F10] [[thm-chain-rule-for-differentials-of-smooth-maps]]: for smooth $\Phi(x,y)$ and the sampling map $x\mapsto(x,x/\epsilon_n)$, the chain rule differentiates $\Phi(x,x/\epsilon_n)$ in $x$ by $\nabla_x\Phi+\epsilon_n^{-1}\nabla_y\Phi$.

[A1] [[def-countable-choice]]: Countable Choice is the only choice axiom used in subsequence and countable-density selections.

## Proof




1.1 By [F1]–[F2], first extract a subsequence converging weakly in $H^1_0(Q)$ to some $u\in H^1_0(Q)$, and then a further subsequence converging strongly in $L^2(Q)$ to the same $u$. By [F3], extract successive further subsequences on which each of the $d$ components of $\nabla u_n$ two-scale converges; since there are finitely many components, one subsequence works for all. Write its vector limit as $G(x,y)$. [F1, F2, F3, A1, algebra]

2.1 For every allowed product test $\phi(x)\psi(y)$, strong $L^2$ convergence and the uniform sampled-test bound in [F4] show that replacing $u_n$ by $u$ in its pairing changes the limit by zero. Weak $L^2$ averaging in [F4], applied to $\psi(x/\epsilon_n)$ against $u\phi\in L^2(Q)$, then gives limit $\int_Q u\phi\int_Y\psi$. Thus the two-scale limit of $u_n$ is the $y$-independent function $u(x)$. [F4, F3, step 1.1, algebra]

2.2 Set $H(x,y):=G(x,y)-\nabla_xu(x)$. For a smooth compactly supported $\phi(x)$ and constant vector $c$, test gradient convergence componentwise with $\phi c$. Ordinary weak $H^1$ convergence gives $\int_{Q\times Y}G\cdot\phi c=\int_Q\nabla u\cdot\phi c$. By Cauchy--Schwarz and Tonelli [F8], $x\mapsto\int_YH(x,y)\,dy$ lies in $L^2(Q)$ and pairs to zero with every $\phi\in C_c^\infty(Q)$; [F9] makes it zero almost everywhere. [F2, F3, F8, F9, step 1.1, algebra]

3.1 Let $\Phi(x,y)=\sum_r\phi_r(x)\Psi_r(y)$ be a smooth periodic vector field, compactly supported in $x$, with $\operatorname{div}_y\Phi=0$, and put $\Phi_n(x)=\Phi(x,x/\epsilon_n)$. By [F10], $\operatorname{div}\Phi_n=(\operatorname{div}_x\Phi)(x,x/\epsilon_n)+\epsilon_n^{-1}(\operatorname{div}_y\Phi)(x,x/\epsilon_n)=(\operatorname{div}_x\Phi)(x,x/\epsilon_n)$. The field $\Phi_n$ is a valid compactly supported smooth test in the weak-derivative identity [F7], so $\int_Q\nabla u_n\cdot\Phi_n=-\int_Qu_n\operatorname{div}\Phi_n$. Taking limits by componentwise two-scale convergence for the two allowed tests $\Phi$ and $\operatorname{div}_x\Phi$ gives $\int_{Q\times Y}G\cdot\Phi=-\int_{Q\times Y}u\,\operatorname{div}_x\Phi=\int_{Q\times Y}\nabla_xu\cdot\Phi$, where the last equality is weak integration by parts. Thus $H$ is orthogonal to every such divergence-free field. [F7, F8, F10, step 2.1, F3, step 2.2, algebra]

4.1 For every nonzero $k\in\mathbb Z^d$ and every real $c\perp k$, use slow tests $\phi(x)c\cos(2\pi k\cdot y)$ and $\phi(x)c\sin(2\pi k\cdot y)$ in step 3.1. They are divergence-free in $y$. The resulting pairings show that each real and imaginary component of $\widehat H(x,k)\cdot c$ pairs to zero with every $\phi\in C_c^\infty(Q)$, so [F9] makes it zero almost everywhere. There are countably many $k$ and a finite basis of each $k^\perp$, so [A1] permits one null set outside which $\widehat H(x,k)$ is parallel to $k$ for all $k$; the zero coefficient is zero by step 2.2. [step 3.1, F9, A1, step 2.2, F6, algebra]

5.1 For $k\ne0$ define $\widehat u_1(x,k)=(\widehat H(x,k)\cdot k)/(2\pi i|k|^2)$ and set $\widehat u_1(x,0)=0$. The parallel property from step 4.1 gives $2\pi i k\widehat u_1(x,k)=\widehat H(x,k)$. Moreover $|\widehat u_1(x,k)|\le |\widehat H(x,k)|/(2\pi|k|)$, so Parseval [F6] and Tonelli [F8] give $\int_Q\sum_k(1+|k|^2)|\widehat u_1(x,k)|^2dx\le C_d\|H\|_{L^2(Q\times Y)}^2$. For almost every $x$, the sum is finite; the partial Fourier sums over $|k|\le N$ are then Cauchy in $H^1(Y)$ by Parseval, and their limit belongs to $H^1_\#(Y)$ because each partial sum is smooth periodic. The zero coefficient makes this limit mean-zero. Define $u_1$ as the product-space $L^2(Q\times Y)$ limit of these partial sums. Their $y$-gradients converge there, and the coefficient identity identifies the gradient limit with $H$. Conjugate symmetry makes the limit real, and the integrated estimate gives the stated square-integrable $H^1(Y)$ slice norm. Hence $u_1\in L^2(Q;V_\#)$ with $\nabla_yu_1=H$, completing the decomposition. [step 4.1, F6, F8, F5, A1, algebra] ∎
