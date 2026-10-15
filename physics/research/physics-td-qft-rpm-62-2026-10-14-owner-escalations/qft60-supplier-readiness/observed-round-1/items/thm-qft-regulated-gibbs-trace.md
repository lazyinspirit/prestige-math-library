---
id: thm-qft-regulated-gibbs-trace
kind: theorem
domain: mathematics
title: Finite-regulator Gibbs trace and bounded expectations
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-qft-self-adjoint-regulated-interaction, lem-qft-hermite-oscillator-research-supplier, lem-qft-coercive-polynomial-form-domain, thm-riesz-representation-for-hilbert-space, lem-nuclear-series-characterizes-trace-norm, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-trace-is-absolutely-convergent-and-basis-independent, def-bounded-linear-operator, def-countable-choice]
dependency_roles:
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  lem-qft-hermite-oscillator-research-supplier: mathematical-premise
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §§2.3 and 6.3, pp.76–83 and 163–169"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§2.3, form realization; §6.3, trace ideals and eigenvalue sums for positive operators."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapters 8–9, pp.48–54"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 8, confining-well compactness; Chapter 9, variational comparison of eigenvalues."
---

## Statement

Assume Countable Choice and use the finite-mode data, form domain $Q$, and
self-adjoint $h$ from [[thm-qft-self-adjoint-regulated-interaction]]. Let
$\lambda_0\le\lambda_1\le\cdots$ be its eigenvalues repeated with
multiplicity, and let $\psi_k$ be a corresponding orthonormal eigenbasis. For
$\beta>0$, define the bounded diagonal operator
$$\rho_\beta f:=\sum_{k\ge0}e^{-\beta\lambda_k}
\langle f,\psi_k\rangle\psi_k.$$
Put $\alpha_j:=\sqrt{a_jc}$ and let the oscillator eigenvalues
$\epsilon_k$ be the nondecreasing ordering, with multiplicity, of
$$\epsilon_{\mathbf n}=\sum_{j=1}^N(2n_j+1)\alpha_j,
\qquad\mathbf n\in\mathbb N_0^N.$$
Then $\rho_\beta$ is positive trace class and its trace
$$Z_\beta:=\operatorname{Tr}(\rho_\beta)=\sum_{k\ge0}e^{-\beta\lambda_k}$$
satisfies the finite bound
$$0<Z_\beta\le e^{\beta C_0}
\prod_{j=1}^N\frac{e^{-\beta\alpha_j}}{1-e^{-2\beta\alpha_j}}<\infty.$$
For every bounded linear operator $B:H_N\to H_N$, the normalized trace
expectation is well defined and
$$Z_\beta^{-1}\operatorname{Tr}(\rho_\beta B)
=Z_\beta^{-1}\sum_{k\ge0}e^{-\beta\lambda_k}
\langle B\psi_k,\psi_k\rangle,$$
with absolute convergence. This is a finite-$N$ mathematical trace result;
it assumes no statistical data and makes no continuum-limit claim.

## Facts & Assumptions

**Given:** Countable Choice, finite data $N,a_j,c,C_0,V$, the form domain $Q$, and $\beta>0$.

[A1] [[def-countable-choice]]: countable eigenbasis choices are permitted.

[F1] [[thm-qft-self-adjoint-regulated-interaction]]: $h$ has a complete orthonormal eigenbasis with eigenvalues tending to $+\infty$, and for $u\in Q$ its form has the coefficient expansion $q_h(u)=\sum_k\lambda_k|\langle u,\psi_k\rangle|^2$.

[F2] [[lem-qft-hermite-oscillator-research-supplier]]: for the form with potential $c|q|^2$, the product Hermite basis has energies $\epsilon_{\mathbf n}$ and its form is the coefficient sum $\sum_{\mathbf n}\epsilon_{\mathbf n}|\langle u,\psi_{\mathbf n}^{\mathrm{osc}}\rangle|^2$.

[F3] [[lem-qft-coercive-polynomial-form-domain]]: the interacting form norm is the completion norm with weight $W+1=V+C_0+2$ and controls the weak derivatives and weighted function.

[F4] [[lem-nuclear-series-characterizes-trace-norm]]: a diagonal series of rank-one operators whose coefficient magnitudes have finite sum is trace class.

[F5] [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]: for a positive trace-class operator the trace is the sum of its eigenvalues with multiplicity.

[F6] [[thm-riesz-representation-for-hilbert-space]]: every bounded linear functional on a complex Hilbert space is represented by a unique inner-product vector, with representing-vector norm equal to the functional norm.

[F7] [[thm-trace-is-absolutely-convergent-and-basis-independent]]: a trace-class operator has an absolutely convergent basis trace, equal to the trace computed from any nuclear representation.

[F8] [[def-bounded-linear-operator]]: a bounded linear $B$ satisfies $\|Bx\|\le\|B\|\|x\|$.

## Proof

**Proof technique:** direct.

**Given:** $N\ge1$, $a_j,c>0$, $V(q)\ge c|q|^2-C_0$, the interacting form, and $\beta>0$.

1.1 Each $\epsilon_{\mathbf n}$ is finite, and only finitely many multi-indices have $\epsilon_{\mathbf n}\le M$ for any real $M$: that inequality bounds every nonnegative integer $n_j$ by $M/(2\alpha_j)$. Hence their values can be listed in nondecreasing order with finite multiplicities; denote this list by $(\epsilon_k)_{k\ge0}$. [F2, finite-dimensional arithmetic]

1.2 On $C_c^\infty$, the shifted interacting form has weight $V+C_0+2\ge c|q|^2+2$, so it dominates the shifted oscillator form from [F2]. Therefore a Cauchy sequence in $Q$ is Cauchy in the oscillator form norm; the identity map extends to a continuous map $Q\to Q_{\mathrm{osc}}$, with the same $L^2$ representative because both completions inject into $H_N$ by [F3]. Subtracting the shifts in the two form norms gives
$$q_h(u)=a(u,u)-(C_0+2)\|u\|_2^2\ge
q_{\mathrm{osc}}(u)-C_0\|u\|_2^2\qquad(u\in Q).$$
[F2, F3, algebra]

2.1 Fix $k\ge0$ and let $L_k=\operatorname{span}\{\psi_0,\ldots,\psi_k\}$. The linear map from $L_k$ to the span of the first $k$ oscillator eigenvectors, sending $u$ to its $k$ oscillator coefficients, has a nonzero kernel because $\dim L_k=k+1>k$. Choose $u\ne0$ in that kernel. Since $u$ lies in the span of the first $k+1$ interacting eigenvectors, [F1] gives $q_h(u)\le\lambda_k\|u\|_2^2$. Its oscillator coefficients at indices below $k$ vanish, so [F2] gives $q_{\mathrm{osc}}(u)\ge\epsilon_k\|u\|_2^2$. Step 1.2 now yields $\lambda_k\|u\|_2^2\ge q_h(u)\ge(\epsilon_k-C_0)\|u\|_2^2$, hence
$$\lambda_k\ge\epsilon_k-C_0.$$
This argument also covers $k=0$, when the span of zero oscillator vectors is $\{0\}$. [A1, F1, F2, step 1.2, algebra]

3.1 By step 2.1 and $\beta>0$,
$$\sum_{k\ge0}e^{-\beta\lambda_k}
\le e^{\beta C_0}\sum_{\mathbf n\in\mathbb N_0^N}
e^{-\beta\epsilon_{\mathbf n}}
=e^{\beta C_0}\prod_{j=1}^N
\left(\sum_{n_j\ge0}e^{-\beta(2n_j+1)\alpha_j}\right)
=e^{\beta C_0}\prod_{j=1}^N
\frac{e^{-\beta\alpha_j}}{1-e^{-2\beta\alpha_j}}.$$
The factorization follows first for finite rectangular sums by distributivity and then by increasing limits of nonnegative sums. Each denominator is positive because $0<e^{-2\beta\alpha_j}<1$. The lower bound $Z_\beta>0$ follows from its positive ground term. [F2, step 2.1, algebra]

3.2 The diagonal coefficients $e^{-\beta\lambda_k}$ have finite sum by step 3.1. Thus the rank-one series for $\rho_\beta$ is trace class by [F4]; it is positive because
$$\langle\rho_\beta f,f\rangle
=\sum_ke^{-\beta\lambda_k}|\langle f,\psi_k\rangle|^2\ge0.$$
Applying [F5] gives $\operatorname{Tr}(\rho_\beta)=Z_\beta$. For bounded $B$, the functional $x\mapsto\langle Bx,\psi_k\rangle$ is linear and has norm at most $\|B\|$ by Cauchy--Schwarz and [F8]. By [F6] it is represented by a vector $w_k$ with $\|w_k\|\le\|B\|$ and $\langle Bx,\psi_k\rangle=\langle x,w_k\rangle$. Hence
$$\rho_\beta Bx=\sum_k\langle x,w_k\rangle e^{-\beta\lambda_k}\psi_k$$
is a nuclear representation with coefficient sum at most $\|B\|Z_\beta$. By [F4], $\rho_\beta B$ is trace class. Its basis trace in $(\psi_k)$ is absolutely convergent and equals the trace by [F7]. The $k$th diagonal entry is
$$\langle \rho_\beta B\psi_k,\psi_k\rangle
=e^{-\beta\lambda_k}\langle B\psi_k,\psi_k\rangle,$$
so this basis sum is the asserted numerator. Each term is bounded in modulus by $e^{-\beta\lambda_k}\|B\|$ by [F8] and $\|\psi_k\|=1$, giving the stated absolute bound. Division by $Z_\beta>0$ proves the expectation formula. [F4, F6, F7, F8, step 3.1, step 3.2, algebra] ∎
