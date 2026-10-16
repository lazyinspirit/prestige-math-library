---
id: thm-qa-21-taylor-tail-bound
kind: theorem
title: Taylor simulation tail bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-21-truncated-taylor-lcu
  - def-qa-19-finite-matrix-dynamics
  - def-self-adjoint-and-normal-endomorphism
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-natural-logarithm
  - thm-exponential-is-strictly-increasing
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-triangle-inequality-for-inner-product-norm
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite spectral decompositions and absolutely convergent scalar series.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eq. (28.6), printed p.141: the factorial Taylor remainder bound."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Eq. (9.4) and Exercise 10, printed pp.75–76: the truncated Taylor simulation route and tail obligation."
---

## Statement

Let $H=\sum_{j<m}a_jV_j$ be a finite-dimensional self-adjoint Hamiltonian on a nonzero complex-inner-product space, with $m\ge1$, written with real $a_j$ and Hermitian unitaries $V_j$, and set $\Lambda=\sum_j|a_j|$. For real $h$, integer $K\ge0$, and $x=\Lambda|h|$,
$$\left\|M_K(h)-e^{-ihH}\right\|\le e^x\frac{x^{K+1}}{(K+1)!}.$$
The Taylor coefficient sum $s_K=\sum_{k=0}^Kx^k/k!$ satisfies $s_K\le e^x\le2$ when $x\le\ln2$. If $0<\eta<1$ and $x\le\ln2$, there is a $K=O\!\left(1+\frac{\log(1/\eta)}{\log\log(e+1/\eta)}\right)$ for which the right-hand side is at most $\eta$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex-inner-product space, the stated self-adjoint decomposition, real $h$, and $K\ge0$.

[L1] [[def-qa-21-truncated-taylor-lcu]]: $M_K(h)=\sum_{k=0}^K(-ihH)^k/k!$, and $\Lambda=\sum_j|a_j|$.

[L2] [[def-qa-19-finite-matrix-dynamics]]: $e^{-ihH}$ is defined by the finite spectral functional calculus on the eigenvalues of $H$.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional self-adjoint endomorphism has an orthonormal eigenbasis.

[F2] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: every unitary term preserves vector norms.

[F3] [[cor-triangle-inequality-for-inner-product-norm]]: the induced inner-product norm is homogeneous and satisfies the triangle inequality.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum over unit vectors.

[F5] [[def-complex-exponential]] and [[lem-complex-exponential-series-converges-everywhere]]: $\exp z=\sum_{k\ge0}z^k/k!$ with absolute convergence.

[F6] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $x$, $|\exp x|=e^x$.

[F7] [[def-natural-logarithm]] and [[thm-exponential-is-strictly-increasing]]: $\exp(\ln2)=2$, and $x\le\ln2$ implies $e^x\le2$.

## Proof

**Given:** As in Facts & Assumptions.

1.1 By [F1], choose an orthonormal eigenbasis of $H$ with eigenvalues $\lambda$. For a unit eigenvector $u_\lambda$, $|\lambda|=\|Hu_\lambda\|=\|\sum_j a_jV_ju_\lambda\|\le\sum_j|a_j|\|V_ju_\lambda\|=\Lambda$ by [F2]–[F4]. On this basis, [L1] and [L2] make the difference diagonal with scalar entries $\sum_{k=0}^K(-ih\lambda)^k/k!-\exp(-ih\lambda)$. [given, L1, L2, F1, F2, F3, F4, algebra]

1.2 Since $x\ge0$, the finite Taylor coefficient sum obeys $0\le s_K=\sum_{k=0}^Kx^k/k!\le\sum_{k=0}^{\infty}x^k/k!=e^x$ by [L1] and [F5]. If $x\le\ln2$, [F7] gives $s_K\le e^x\le2$. [given, L1, F5, F7, algebra]

2.1 Put $n=K+1$. The absolute scalar-series tail at eigenvalue $\lambda$ is at most $\sum_{k=n}^{\infty}(|h||\lambda|)^k/k!$. Writing $k=n+j$ and using $(n+j)!\ge n!j!$ bounds this by $(|h||\lambda|)^n/n!\sum_{j=0}^{\infty}(|h||\lambda|)^j/j!=e^{|h||\lambda|}(|h||\lambda|)^n/n!$ by [F5]–[F6]. If the diagonal error has entries $d_i$ in the eigenbasis and $z=\sum_i z_i u_i$, then its squared output norm is $\sum_i|d_i|^2|z_i|^2\le(\max_i|d_i|)^2\|z\|^2$; an eigenbasis vector attaining the finite maximum gives equality in the operator norm [F4]. Hence the operator norm is $\max_i|d_i|$. Since $0\le|h||\lambda_i|\le x$, the monotonicity of $e^u$ and $u^n$ on nonnegative reals gives $e^{|h||\lambda_i|}|h|^n|\lambda_i|^n/n!\le e^xx^n/n!$. Taking the maximum proves the stated tail bound. [step 1.1, F4, F5, F6, algebra]

3.1 Assume $x\le\ln2$, so $e^x\le2$ by [F7]. Let $L=\ln(1/\eta)$. The exponential series gives $2<e<3$: its first two terms sum to $2$, while $1/k!\le2^{-(k-1)}$ for $k\ge2$, with strict inequality for $k\ge3$, so the remaining sum is less than $1$. Thus $\exp(0)=1<2<\exp(1)=e$ by [F5], and the strict increase and inverse relation in [F7] give $0<\ln2<1$. If $L<1$, $n=10$ gives $2x^{10}/10!<2/10!<1/3<e^{-1}<\eta$. If $L\ge1$, take $n=\lceil16eL/\ln(e+L)\rceil$. For $z\ge1$, $g(z)=\sqrt z-\ln z$ has derivative $g'(z)=(\sqrt z-2)/(2z)$, so it decreases up to $z=4$ and increases thereafter. Since $e>2$, $\exp(2)=e^2>4$, hence $\ln4<2$ by [F7]; thus $g(z)\ge g(4)=2-\ln4>0$. Also $e+L<4L$. Therefore $$\frac ne\ge\frac{16L}{\ln(e+L)}\ge\frac{16L}{\sqrt{e+L}}>4\sqrt{e+L},$$ so $\ln(n/e)>\tfrac12\ln(e+L)$. Hence $n\ln(n/e)\ge8eL\ge L+\ln4$, using $e>2$, $L\ge1$, and $\ln4<2$. For the factorial estimate, monotonicity of $\ln s$ gives $\ln(n!)=\sum_{k=1}^n\ln k\ge\int_1^n\ln s\,ds=n\ln n-n+1$, so $n!\ge(n/e)^n\ge e^{L+\ln4}=4/\eta$. Since $e^xx^n/n!\le2/n!$, this choice gives a tail at most $\eta/2\le\eta$. In both cases $n=O(1+L/\ln(e+L))$. Since $\ln(e+e^L)\le L+\ln2\le e+L$, this is also $O(1+L/\ln\ln(e+e^L))$, the displayed order after changing logarithm bases. Hence $K=n-1$ has the stated order. [given, step 2.1, F5, F7, algebra] ∎

